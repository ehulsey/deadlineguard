---
doc: checklist
status: draft
---
# Build checklist
Build mode: fast, based on explicit user request to minimize involvement.

## Slices
- [x] **1. Scan rules and review evidence**
  Becomes usable: Paste rules and obtain categorized suggestions with original wording.
  Why now: Proves the unique kernel end to end.
  PRD ref: `prd.md > Rules intake and scanning`, `prd.md > Evidence and tracking`
  Spec ref: `spec.md > Scanner`, `spec.md > Workspace`
  Build: Static application, scanner and checklist rendering.
  Verify (mechanical): Node tests and browser sample scan.
  Learner check: Try a sample and open a source finding. Pending user report.
  Commit: `Build evidence-backed DeadlineGuard proof of concept`
- [x] **2. Save progress and export useful files**
  Becomes usable: Track requirements across reload and download checklist/calendar files.
  Why now: Completes the return-and-submit loop.
  PRD ref: `prd.md > Persistence and exports`
  Spec ref: `spec.md > Workspace`, `spec.md > Exports`
  Build: Storage, manual additions, filters, Markdown, printing and calendar export.
  Verify (mechanical): Persistence/filter/add/download browser checks; calendar tests.
  Learner check: Reload, check progress, export a checklist. Pending user report.
  Commit: `Build evidence-backed DeadlineGuard proof of concept`

## Hands-on Checkpoints
- [ ] Early usable behavior explored — combined with final review for this small build.
- [ ] Final kick-the-tires exploration and feedback completed.

## Final Review
- [ ] User tries the app and confirms readiness; resolve any feedback.

## Code Tour and App Map
- [x] App map generated from actual code.
- [ ] Brief app-map walkthrough and optional user reflection.

Activity evidence: Agent verified scan → records → DOM → storage and exports. This is agent verification, not evidence of learner practice.
Route and stops: dist/core.js scan; dist/app.js render/save; dist/core.js checklistMarkdown/calendar.

## Revisions
- Planning documents retain draft status: core concept came from earlier authorized chat, but specific implementation assumptions and final learner review have not been explicitly approved.
