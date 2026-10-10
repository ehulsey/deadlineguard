---
doc: spec
status: draft
---
# DeadlineGuard — Technical specification

## How This Works, In Plain Language
The application runs in the browser. A keyword scanner finds candidate rule sentences and keeps their exact wording. The page stores a checklist on the current device. Exports create local files. No rules text is sent to a remote AI service.

## The Core Journey Through the System
prd.md > The Core Journey: form submission → scan(text) → candidate records → DOM checklist → localStorage. Checkbox changes update records and save them. Export functions transform the records into Markdown or a manually confirmed deadline into an iCalendar event.

## Stack
Plain HTML, CSS, JavaScript ES modules. Node.js 20+ provides a development server and built-in test runner. No production dependencies or API keys.
Documentation: https://nodejs.org/api/http.html , https://nodejs.org/api/test.html , https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage .
Agent-selected minimal architecture under the user's request to handle technical work. Tradeoff: the text scanner is conservative and cannot understand all natural language rules.

## Where It Runs and How Someone Tries It
Desktop or mobile browser with JavaScript enabled. Run `npm start` in the repository and open http://127.0.0.1:4173 . Run `npm test` for automated checks. Static hosting needs only dist/. Public repository and public YouTube/Vimeo demonstration remain required; local preview is not a submission link.

## Look and Feel
Implements prd.md > Look and Feel. Responsive grid at 800px. Accessible labels, native controls, visible focus and text-based status.

## Components
### Scanner
`dist/core.js: scan` implements prd.md > Rules intake and scanning. Splits lines/sentences, classifies keyword matches, deduplicates, preserves evidence. Returns suggestions requiring review.
### Workspace
`dist/app.js: render/save/hydrate` implements prd.md > Evidence and tracking and Persistence and exports. All pasted text is rendered through textContent rather than HTML.
### Exports
`checklistMarkdown` and `calendar` implement prd.md > Persistence and exports. Calendar requires explicit date, time and UTC offset and validates date components.
### Local server
`server.mjs` serves dist/ on loopback only; refuses paths outside dist/. Not a production backend.

## Data Model
One state: name, source URL, original rules, items[]. Each item has id, category, text, source, reviewed and done. Stored under deadlineguard-v1; browser-local storage can be cleared or unavailable.

## File Structure
- dist/index.html — application structure
- dist/style.css — responsive styling
- dist/core.js — scanner and export logic
- dist/app.js — interactions and persistence
- server.mjs — local preview server
- tests/core.test.mjs — meaningful logic checks
- devpost/ — Skill Pack planning/checklist/app map
- README.md, LICENSE — reproducible setup and licensing

## External Services and Dependencies
None required at runtime. Optional static hosting. GitHub publication and YouTube/Vimeo upload require user accounts. Official rule source: https://learn-ai-basics.devpost.com/rules . Fictional sample is original text.

## Important Failure Modes
- Keyword misses or false positives → evidence review and manual additions.
- Ambiguous deadline → explicit manual date/time/offset confirmation.
- Unavailable local storage → warning and export.

## What Was Simplified and Why
Browser-local storage and deterministic scanning eliminate API secrets, costs and account setup. Users must read the original; this PoC cannot certify completeness.

## Decisions and Open Issues
No personal learning uncertainty has been supplied; do not invent one. Final hands-on user review, public repository, demo video and Devpost registration are pending.
