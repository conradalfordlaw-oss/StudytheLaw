/* PropLaw Quiz — router + three quiz modes (SA / MCQ / Essay).
   Data is loaded from /data/*.js into window globals. */

(function(){
  // ---- Messages (preserved from original) ----
  const positiveMessages=[
    "You're basically a property law GENIUS! Future Supreme Court Justice over here!",
    "Easements? More like EASY-ments for you! Nailed it!",
    "The bar examiners are SHAKING right now!",
    "Your professor would shed a tear of pride!",
    "Blackstone just rolled over in his grave... out of RESPECT!",
    "You could teach this class! Actually, please don't. Stay humble.",
    "Someone call the ABA — we've got a prodigy here!",
    "That answer was so good, the dominant estate just bowed to YOU!",
    "Even the servient estate is impressed, and it's usually burdened!",
    "You remembered horizontal privity?! Are you even human?!",
    "Your brain is an easement appurtenant — permanently attached to knowledge!",
    "Plot twist: YOU wrote the Restatement of Property!",
    "The Statute of Frauds can't even fraud YOU!",
    "Covenant running with the land? More like knowledge running with YOUR brain!",
    "If property law was a sport, you'd be the GOAT!"
  ];
  const negativeMessages=[
    "Yikes! That answer was more landlocked than a parcel without road access!",
    "The servient estate called — it wants its dignity back!",
    "Did you study with your textbook closed? And upside down? Underwater?",
    "That answer violated the Statute of Frauds... and the Statute of Making Sense!",
    "Even a quasi-easement has more substance than that answer!",
    "Your professor just felt a disturbance in the force... and it was YOUR answer!",
    "That was rougher than a title search in a county with no records!",
    "If that answer were a covenant, it would NOT run with the land!",
    "OBJECTION! Your answer lacks foundation... and everything else!",
    "The bar exam just filed a restraining order against you!",
    "That answer had less privity than two strangers on a bus!",
    "Houston, we have a problem... and it's your understanding of easements!",
    "Your answer was so wrong, it created an easement by necessity — you NEED to study more!",
    "Even an easement in gross wouldn't benefit from that answer!",
    "Plot twist: the real easement was the knowledge you DIDN'T gain along the way!"
  ];

  // ---- DOM ----
  const $ = id => document.getElementById(id);
  const landing = $('landing');
  const quizScreen = $('quiz-screen');
  const gameOverScreen = $('game-over-screen');
  const backBtn = $('back-btn');
  const scorePill = $('score-pill');
  const scoreDisplay = $('score-display');
  const streakPill = $('streak-pill');
  const streakCount = $('streak-count');
  const progressFill = $('progress-fill');
  const progressText = $('progress-text');
  const categoryBadge = $('category-badge');
  const questionText = $('question-text');
  const essayMeta = $('essay-meta');
  const inputSection = $('input-section');
  const userAnswer = $('user-answer');
  const submitBtn = $('submit-btn');
  const hintText = $('hint-text');
  const mcqSection = $('mcq-section');
  const optionsList = $('options-list');
  const mcqSubmitBtn = $('mcq-submit-btn');
  const feedbackContainer = $('feedback-container');
  const feedbackCard = $('feedback-card');
  const feedbackEmoji = $('feedback-emoji');
  const percentageBadge = $('percentage-badge');
  const pointsText = $('points-text');
  const funnyMessage = $('funny-message');
  const answerTitle = $('answer-title');
  const correctAnswerText = $('correct-answer-text');
  const nextBtn = $('next-btn');
  const cardContainer = $('card-container');

  // ---- State ----
  let mode = null;                 // 'sa' | 'mcq' | 'essay'
  let deck = [];
  let currentIndex = 0;
  let totalScore = 0;
  let streak = 0;
  let bestStreak = 0;
  let history = [];
  let selectedOption = null;

  // ---- Utils ----
  function shuffle(arr){let a=[...arr];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
  function randFrom(arr){return arr[Math.floor(Math.random()*arr.length)]}
  function tokenize(text){return text.toLowerCase().replace(/[^a-z0-9\s]/g,'').split(/\s+/).filter(w=>w.length>2)}
  function computeSimilarity(userText,correctText){
    const userTokens=tokenize(userText), correctTokens=tokenize(correctText);
    if(!userTokens.length)return 0;
    const correctSet=new Set(correctTokens), userSet=new Set(userTokens);
    const stopWords=new Set(['which','there','their','where','would','could','should','about','other','because','between','through','being','these','those','after','before','under','means','words']);
    const keyTerms=new Set();
    correctTokens.filter(w=>w.length>4&&!stopWords.has(w)).forEach(w=>keyTerms.add(w));
    let keyMatches=0,keyTotal=keyTerms.size||1;
    keyTerms.forEach(t=>{if(userSet.has(t))keyMatches++});
    const getBigrams=tokens=>{const b=new Set();for(let i=0;i<tokens.length-1;i++)b.add(tokens[i]+' '+tokens[i+1]);return b};
    const userBigrams=getBigrams(userTokens),correctBigrams=getBigrams(correctTokens);
    let bigramMatches=0,bigramTotal=correctBigrams.size||1;
    correctBigrams.forEach(b=>{if(userBigrams.has(b))bigramMatches++});
    let wordMatches=0;
    correctSet.forEach(w=>{if(userSet.has(w))wordMatches++});
    const wordScore=wordMatches/(correctSet.size||1);
    const keyScore=keyMatches/keyTotal, bigramScore=bigramMatches/bigramTotal;
    const combined=keyScore*.45+bigramScore*.25+wordScore*.3;
    const lengthRatio=userTokens.length/correctTokens.length;
    const lengthPenalty=lengthRatio<.15?.4:lengthRatio<.3?.7:1;
    return Math.min(combined*lengthPenalty,1);
  }

  // ---- Landing ----
  function showLanding(){
    mode = null;
    landing.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    backBtn.classList.add('hidden');
    scorePill.classList.add('hidden');
    streakPill.classList.remove('visible');
    // Update counts
    $('count-sa').textContent = (window.SA_CARDS||[]).length + ' cards';
    $('count-mcq').textContent = (window.MCQ_QUESTIONS||[]).length + ' questions';
    $('count-essay').textContent = (window.ESSAYS||[]).length + ' prompts';
  }

  function startMode(m){
    mode = m;
    currentIndex = 0;
    totalScore = 0;
    streak = 0;
    bestStreak = 0;
    history = [];
    scoreDisplay.textContent = '0';
    scoreDisplay.className = 'score-value score-positive';
    streakPill.classList.remove('visible');

    if(m === 'sa')      deck = shuffle(window.SA_CARDS || []);
    else if(m === 'mcq') deck = shuffle(window.MCQ_QUESTIONS || []);
    else if(m === 'essay') deck = [...(window.ESSAYS || [])]; // essays kept in order

    landing.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    backBtn.classList.remove('hidden');
    if(m !== 'essay') scorePill.classList.remove('hidden');
    else scorePill.classList.add('hidden');
    renderCard();
  }

  // ---- Renderers ----
  function renderCard(){
    const item = deck[currentIndex];
    if(!item){ showGameOver(); return; }

    progressText.textContent = (currentIndex+1) + ' / ' + deck.length;
    progressFill.style.width = (currentIndex/deck.length*100) + '%';
    feedbackContainer.classList.add('hidden');
    essayMeta.classList.add('hidden');
    inputSection.classList.add('hidden');
    mcqSection.classList.add('hidden');

    if(mode === 'sa'){
      categoryBadge.textContent = item.category + ' — REAL PROPERTY';
      questionText.className = 'question-text';
      questionText.textContent = item.question;
      userAnswer.placeholder = "Type your answer here... be thorough! Include key terms, definitions, and distinctions.";
      userAnswer.value = '';
      userAnswer.rows = 6;
      submitBtn.textContent = 'Submit Answer';
      submitBtn.disabled = true;
      hintText.textContent = 'Ctrl+Enter to submit';
      inputSection.classList.remove('hidden');
    }
    else if(mode === 'mcq'){
      categoryBadge.textContent = item.category;
      questionText.className = 'question-text prose';
      questionText.textContent = item.question;
      renderOptions(item);
      mcqSection.classList.remove('hidden');
    }
    else if(mode === 'essay'){
      categoryBadge.textContent = item.category;
      questionText.className = 'question-text prose';
      questionText.textContent = item.prompt;
      essayMeta.textContent = '⏱ Estimated: ' + item.estimatedMinutes + ' min  ·  ' + item.title;
      essayMeta.classList.remove('hidden');
      userAnswer.placeholder = "Draft your essay here. IRAC it. Don't look at the checklist until you're done.";
      userAnswer.value = '';
      userAnswer.rows = 14;
      submitBtn.textContent = 'Reveal Model Outline';
      submitBtn.disabled = false;
      hintText.textContent = 'No auto-grading — this reveals an issue-spotting checklist for self-review.';
      inputSection.classList.remove('hidden');
    }

    cardContainer.style.animation='none';
    cardContainer.offsetHeight;
    cardContainer.style.animation='fadeSlideIn .4s ease';
  }

  function renderOptions(item){
    optionsList.innerHTML = '';
    selectedOption = null;
    mcqSubmitBtn.disabled = true;
    item.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = '<span class="option-letter">' + String.fromCharCode(65+i) + '.</span> ' + opt;
      btn.addEventListener('click', () => {
        if(btn.disabled) return;
        selectedOption = i;
        [...optionsList.children].forEach(c => c.classList.remove('selected'));
        btn.classList.add('selected');
        mcqSubmitBtn.disabled = false;
      });
      optionsList.appendChild(btn);
    });
  }

  // ---- Submit ----
  function submitSA(){
    const item = deck[currentIndex];
    const text = userAnswer.value.trim();
    if(!text) return;
    const similarity = computeSimilarity(text, item.answer);
    const percentage = Math.round(similarity * 100);
    const isPass = percentage >= 70;
    const points = isPass ? Math.round(similarity*10) : -5;
    applyScore(points, isPass);
    history.push({question:item.question,category:item.category,percentage,points,passed:isPass});
    showFeedback({isPass, percentage, points, answerHTML: escapeHTML(item.answer)});
  }

  function submitMCQ(){
    if(selectedOption === null) return;
    const item = deck[currentIndex];
    const isPass = selectedOption === item.answer;
    const percentage = isPass ? 100 : 0;
    const points = isPass ? 10 : -5;
    applyScore(points, isPass);
    history.push({question:item.question.slice(0,120)+'…',category:item.category,percentage,points,passed:isPass});
    // Mark options
    [...optionsList.children].forEach((c,i) => {
      c.disabled = true;
      if(i === item.answer) c.classList.add('correct');
      else if(i === selectedOption) c.classList.add('incorrect');
    });
    const correctLetter = String.fromCharCode(65 + item.answer);
    const answerHTML = '<strong>Correct answer: ' + correctLetter + '</strong><br><br>' + escapeHTML(item.rationale || '');
    showFeedback({isPass, percentage, points, answerHTML});
  }

  function submitEssay(){
    const item = deck[currentIndex];
    // No auto-grading — reveal model outline for self-assessment
    let outlineHTML = '<strong>Issue-Spotting Checklist:</strong><br><ul class="outline-list">';
    (item.modelOutline || []).forEach(line => {
      outlineHTML += '<li>' + escapeHTML(line) + '</li>';
    });
    outlineHTML += '</ul><br><em>AI-graded scoring coming in a future version (see BRAINSTORM-AI-GRADING.md).</em>';
    inputSection.classList.add('hidden');
    feedbackCard.classList.add('hidden');
    answerTitle.textContent = '📖 Model Outline — Compare your essay:';
    correctAnswerText.innerHTML = outlineHTML;
    feedbackContainer.classList.remove('hidden');
    nextBtn.textContent = (currentIndex+1 >= deck.length) ? 'Finish' : 'Next Prompt →';
    feedbackContainer.scrollIntoView({behavior:'smooth', block:'center'});
  }

  function applyScore(points, isPass){
    totalScore += points;
    if(isPass){ streak++; if(streak > bestStreak) bestStreak = streak; }
    else { streak = 0; }
    scoreDisplay.textContent = totalScore;
    scoreDisplay.className = 'score-value ' + (totalScore>=0 ? 'score-positive' : 'score-negative');
    streakPill.classList.toggle('visible', streak>=2);
    streakCount.textContent = streak;
    progressFill.style.width = ((currentIndex+1)/deck.length*100) + '%';
  }

  function showFeedback({isPass, percentage, points, answerHTML}){
    inputSection.classList.add('hidden');
    mcqSection.classList.add('hidden');
    feedbackContainer.classList.remove('hidden');
    feedbackCard.classList.remove('hidden');
    feedbackCard.className = 'feedback-card ' + (isPass ? 'feedback-pass' : 'feedback-fail');
    feedbackEmoji.textContent = isPass ? '🎉' : '💀';
    percentageBadge.textContent = percentage + '%';
    percentageBadge.className = 'percentage-badge ' + (isPass ? 'percentage-pass' : 'percentage-fail');
    pointsText.textContent = (points>0?'+':'') + points + ' points';
    pointsText.className = 'points-text ' + (isPass ? 'points-pass' : 'points-fail');
    funnyMessage.textContent = randFrom(isPass ? positiveMessages : negativeMessages);
    answerTitle.textContent = mode === 'mcq' ? '📖 Explanation:' : '📖 Correct Answer:';
    correctAnswerText.innerHTML = answerHTML;
    nextBtn.textContent = (currentIndex+1 >= deck.length) ? 'See Results' : 'Next →';
    feedbackContainer.style.animation='none';
    feedbackContainer.offsetHeight;
    feedbackContainer.style.animation='fadeSlideIn .4s ease';
    feedbackContainer.scrollIntoView({behavior:'smooth', block:'center'});
  }

  function handleNext(){
    if(currentIndex+1 >= deck.length){
      if(mode === 'essay') showLanding();
      else showGameOver();
      return;
    }
    currentIndex++;
    renderCard();
  }

  // ---- Game Over ----
  function showGameOver(){
    quizScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    const passCount = history.filter(h=>h.passed).length;
    const failCount = history.filter(h=>!h.passed).length;
    const avgScore = history.length ? Math.round(history.reduce((a,h)=>a+h.percentage,0)/history.length) : 0;
    const grade = avgScore>=90?'A':avgScore>=80?'B':avgScore>=70?'C':avgScore>=60?'D':'F';
    const msgs = {A:"You're ready for the bar! Or at least this section of it!",B:"Solid work! A few more study sessions and you're golden!",C:"You passed... barely. The servient estate is judging you.",D:"The textbook is crying. Please read it again.",F:"Did you think 'easement' was a type of furniture? Back to page 1!"};
    let failCards = '';
    if(failCount > 0){
      failCards = '<div class="review-section"><h3 class="review-title">Items to Review:</h3>';
      history.filter(h=>!h.passed).forEach(h => {
        failCards += `<div class="review-item"><span class="review-cat">${escapeHTML(h.category)}</span><span class="review-q">${escapeHTML(h.question)}</span><span class="review-score">${h.percentage}%</span></div>`;
      });
      failCards += '</div>';
    }
    gameOverScreen.innerHTML = `
      <div class="grade-badge">${grade}</div>
      <h1>Quiz Complete!</h1>
      <p class="subtitle">${msgs[grade]}</p>
      <div class="stats-row">
        <div class="stat-box"><span class="stat-number">${totalScore}</span><span class="stat-label">Total Points</span></div>
        <div class="stat-box"><span class="stat-number">${avgScore}%</span><span class="stat-label">Avg Accuracy</span></div>
        <div class="stat-box"><span class="stat-number">${bestStreak}</span><span class="stat-label">Best Streak</span></div>
      </div>
      <div class="stats-row">
        <div class="stat-box" style="border-color:#2d6a4f"><span class="stat-number green">${passCount}</span><span class="stat-label">Passed</span></div>
        <div class="stat-box" style="border-color:#9d0208"><span class="stat-number red">${failCount}</span><span class="stat-label">Failed</span></div>
      </div>
      ${failCards}
      <button class="restart-btn" id="restart-again">Shuffle & Try Again</button>
      <button class="restart-btn secondary" id="back-to-menu">Back to Menu</button>
    `;
    document.getElementById('restart-again').addEventListener('click', () => startMode(mode));
    document.getElementById('back-to-menu').addEventListener('click', showLanding);
  }

  function escapeHTML(s){
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // ---- Events ----
  document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => startMode(card.dataset.mode));
  });
  backBtn.addEventListener('click', showLanding);
  $('logo').addEventListener('click', showLanding);

  userAnswer.addEventListener('input', () => {
    submitBtn.disabled = !userAnswer.value.trim() && mode !== 'essay';
    if(mode === 'essay') submitBtn.disabled = false;
  });
  userAnswer.addEventListener('keydown', e => {
    if(e.key === 'Enter' && (e.metaKey || e.ctrlKey) && !submitBtn.disabled){
      e.preventDefault();
      handleSubmitTextArea();
    }
  });
  submitBtn.addEventListener('click', handleSubmitTextArea);
  mcqSubmitBtn.addEventListener('click', submitMCQ);
  nextBtn.addEventListener('click', handleNext);

  function handleSubmitTextArea(){
    if(mode === 'sa') submitSA();
    else if(mode === 'essay') submitEssay();
  }

  // ---- Init ----
  showLanding();
})();
