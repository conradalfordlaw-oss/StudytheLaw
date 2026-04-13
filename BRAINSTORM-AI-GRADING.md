# AI grading — design brainstorm

Scrapped for v1 per your call — but here's the menu we can pick from when you're ready.

## What we have today (baseline)

- **SA mode:** deterministic token-overlap scorer (keyword + bigram + length-penalty). Cheap, predictable, but dumb: a student who paraphrases well can score low; a student who parrots the stem can score high. Good enough as a drill; not good enough for graded work.
- **MCQ mode:** exact-match on the correct option index. Binary, reliable.
- **Essay mode:** no automated grading — just reveals an issue-spotting checklist after drafting.

## Where AI grading actually helps

SA and Essay, not MCQ. MCQ doesn't need it.

## Three architectural options, from lightest to heaviest

### Option A — Pure client-side, bring-your-own-API-key

- Add a one-time "API key" input to the landing page; store in `sessionStorage` (not `localStorage`) so it clears when the tab closes.
- On submit, the browser calls Anthropic's `POST /v1/messages` with `anthropic-dangerous-direct-browser-access: true` header (Anthropic explicitly supports browser-direct calls for demos/tools with this header).
- Prompt: question + model answer + student answer → return a JSON object `{score: 0-100, strengths: [], gaps: [], rubricBreakdown: {...}}`.
- **Pros:** zero backend, deploys on GitHub Pages as-is. Fast to build (~1 day).
- **Cons:** every user needs their own API key. Not shippable to students at scale. Key is visible in devtools.

### Option B — Single serverless endpoint

- Add a tiny Cloudflare Worker / Vercel function / Netlify function. The browser POSTs `{questionId, mode, studentAnswer}` to `/grade`. The worker holds the API key and the rubric, calls Claude, returns scored JSON.
- Rubrics are stored *server-side* keyed by `questionId`, so students can't see the model answer until after grading.
- **Pros:** one key, works for all students. Rate-limit and log at the edge. Still cheap — Cloudflare Workers has a generous free tier.
- **Cons:** you now have a backend (tiny, but real). DNS/env-var setup. ~$0–5/mo at classroom scale.

### Option C — Full LMS-style backend

- Proper service (FastAPI / Express) with user accounts, per-student history, attempt counts, instructor dashboard of class-wide gaps. Store answers + grades in a DB.
- **Pros:** this is what a real study platform looks like. Professor gets analytics.
- **Cons:** weeks of work, hosting costs, auth, FERPA considerations if you store student work. Not worth it unless you're serious about productionizing.

**Recommendation:** skip A, go to B when you're ready. The serverless worker is the right tradeoff for a classroom tool.

## Grading prompt sketch (for SA mode)

```
You are grading a 1L property-law short-answer question.

QUESTION: {{question}}
MODEL ANSWER: {{modelAnswer}}
STUDENT ANSWER: {{studentAnswer}}

Score the student answer on a 0–100 scale using this rubric:
- Key doctrines identified (40%)
- Correct legal terminology (20%)
- Accuracy of rule statements (25%)
- Organization / clarity (15%)

Respond as STRICT JSON:
{
  "score": <int 0-100>,
  "passed": <bool, true if >=70>,
  "strengths": ["...", "..."],
  "gaps": ["missing: horizontal privity", ...],
  "oneLineFeedback": "..."
}

Do not reveal the model answer text in the feedback. Do not be sycophantic.
```

## Grading prompt sketch (for Essay mode)

Use the existing `modelOutline` array as the rubric — each bullet becomes a scorable issue:

```
RUBRIC (issues to look for):
{{#each modelOutline}}
- {{this}}
{{/each}}

For each issue above, mark hit/miss/partial. Compute a weighted score.
Flag any IRAC mechanical problems (no rule statement, no analysis, etc).
Return: {issueHits: {...}, mechanicsNotes: [...], score, feedback}
```

## Privacy / integrity notes

- Don't store student answers server-side without consent. Log only aggregates.
- Add a watermark/disclaimer: "AI grading is a study aid; your professor's grade is authoritative."
- Consider a "show my grade but hide the model answer until I submit N times" policy — prevents prompt-mining the rubric.

## Next concrete step when you want to do this

1. Decide Option A (fast demo) vs Option B (real rollout).
2. Pick a model — `claude-haiku-4-5` is the sweet spot for grading speed + cost; `claude-sonnet-4-6` if you want more nuance on essays.
3. I'll wire the `/grade` endpoint into `js/app.js` — about 30 lines added to `submitSA()` and `submitEssay()` to swap the local scorer for a network call with a fallback.
