# PropLaw Quiz — Multi-Mode Study Suite

Three study modes for CSoL Property II, picked from a landing page:

1. **Short Answer** — the original 20-card flashcard drill (verbatim from the current site), with token-overlap grading.
2. **Multiple Choice** — 28 MCQs preserved verbatim from *Property II S2026 Ch7 Practice MCQ* and *Practice Quiz Packet #1 (Chapters 7 & 8)*, with author-provided model rationales.
3. **Essay** — full practice prompts from *Ch. 7 Leaseholds Optional Practice Essay* and *Ch. 9 Sample Essay*, with issue-spotting checklists revealed after the student drafts.

## File structure

```
proplaw-quiz/
├── index.html          # Landing + three shared quiz screens
├── css/
│   └── style.css       # All styles (extracted from the old single-file build)
├── js/
│   └── app.js          # Router + SA/MCQ/Essay logic + scoring
└── data/
    ├── sa.js           # 20 short-answer cards (UNCHANGED from original)
    ├── mcq.js          # 28 multiple-choice questions
    └── essays.js       # 2 essay prompts + issue-spotting outlines
```

The data files assign to `window.SA_CARDS`, `window.MCQ_QUESTIONS`, `window.ESSAYS` — no bundler / module system needed. Drop straight onto GitHub Pages.

## How to deploy

1. Commit this whole `proplaw-quiz/` folder to the `main` branch of your repo.
2. If you want to *replace* the existing `property-law-quiz.html`, either (a) keep it alongside as a legacy URL, or (b) set `index.html` in this folder as the new entry point and remove/redirect the old file.
3. GitHub Pages will serve it at `https://<you>.github.io/<repo>/proplaw-quiz/` (or at root if you move these files to the repo root).

## Content preservation

- All **short-answer questions and model answers** are byte-for-byte identical to the original.
- All **MCQ stems and options** are verbatim from the source PDFs; only the `answer` index and `rationale` field were added.
- All **essay prompts** are verbatim from the source PDFs. The `modelOutline` arrays are issue-spotting checklists written for this app — not full sample answers — and should be reviewed by the instructor before relying on them.

## Known todo / roadmap

- AI grading for SA and Essay modes — see `BRAINSTORM-AI-GRADING.md`.
- Instructor-verified answer key for MCQs (current answers are author's best-reasoned model answers).
- Optional: split Ch 7 vs Ch 8 MCQ quizzes; add Ch 11 (covenants/servitudes) bank when slides finalize.
