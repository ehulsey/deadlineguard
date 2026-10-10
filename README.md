# DeadlineGuard
Competition rules → a reviewable checklist of deadlines, eligibility conditions, and submission requirements.

## Run
Install Node.js 20 or newer from https://nodejs.org/ . No dependency installation or API key is needed.

```sh
npm start
```
Open http://127.0.0.1:4173 in a modern browser. Keep the terminal running.

```sh
npm test
```
A static host can serve the contents of `dist/` directly.

## Try the complete journey
1. Select **Try a sample**, then **Build my checklist**. The sample is fictional.
2. Open **View source & confirm** on a finding and tick the source-review checkbox.
3. Mark a requirement complete. Reload: progress persists in the same browser.
4. Add a missed requirement with its evidence.
5. Export the checklist. To create a calendar file, manually confirm date, time and UTC offset from the official rules. Import the file into your calendar to activate its reminder.

## What it does
A local keyword scanner produces candidate requirements. Each candidate keeps original evidence. Completion and verification are separate. Includes category filters, local storage, manual additions, Markdown export, printing, and UTC-normalized calendar export.

## Limits and privacy
This is a proof of concept, not an exhaustive or semantic rules interpreter. It can miss requirements or misclassify text. Always read the official rules. No automatic eligibility decisions, URL fetching, change monitoring, AI calls, or background notifications. The app stores the most recent scanned workspace in browser storage on this device; shared device users can access it. Export before clearing storage. The rules URL is source metadata only.

## Build With AI: Basics
New application code built October 10, 2026 using Codex and the Devpost Learn Skill Pack. Planning documents: `devpost/scope.md`, `devpost/prd.md`, `devpost/spec.md`. Draft status is preserved honestly until user review. The pack was installed from challengepost/learn-ai-basics with the official skills installer. Its templates guided the documents; source revision a0f065781873e8a7ed9a9a705a8dafa6a0810439. No pre-existing DeadlineGuard application code was found or incorporated. Native browser/Node APIs provide standard platform functionality.

## Verification
Seven automated tests pass. Browser workflow checks and their limits are documented in `TESTING.md`. Final learner review and publication are still pending.

## License
MIT for the original application. Devpost Skill Pack has its own MIT license in `devpost/SKILL-PACK-LICENSE`; preserved separately.
