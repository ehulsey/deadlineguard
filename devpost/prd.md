---
doc: prd
status: draft
---
# DeadlineGuard — Product requirements
For the beginner competition entrant described in scope.md > Who It's For.

## The Core Journey
1. Enter a competition name and optionally its official rules URL.
2. Paste English rules, or load a clearly labeled fictional sample.
3. Scan the text into deadline, eligibility, and submission suggestions.
4. Open source evidence and confirm reviewed findings.
5. Add missed requirements with evidence; check completed tasks.
6. Return to the same browser to continue. Export Markdown, print, or create a calendar file from a manually entered date, time, and offset.

## Screens and Layout
One responsive workspace. Inputs on the left and checklist on the right on desktop; stacked panels on mobile. Separate completion and verification counts.

## Look and Feel
Warm neutral background, dark green headings, readable system typography, restrained sage accents. Agent-proposed implementation under delegated design authority.

## Features and Behavior
### Rules intake and scanning
Input minimum 40 characters and maximum 150,000 characters. Extract candidate lines without rewriting evidence. Never claim completeness or AI semantic analysis. Original URL is metadata, not fetched.
### Evidence and tracking
Each suggestion has a category, original wording, completion checkbox and source-review checkbox. Filtering does not remove records. Add missed requirements manually.
### Persistence and exports
Save the latest scanned workspace in this browser's local storage. Warn if saving fails. Markdown export includes completion, review status and evidence. Calendar export converts the user's explicit UTC offset to UTC and requests a one-day reminder. No reminder is scheduled by the app.

## States and Boundaries
- First use: empty checklist with clear next step.
- No findings: manual-add guidance; no invented results.
- Invalid input: explanatory message.
- Rescan: confirm replacement of progress.
- Corrupt saved data: fallback to empty workspace.
- Storage restrictions: export guidance.
- Clear workspace: confirmation before clearing.

## Product Decisions
Core checklist idea comes from the earlier chat. Evidence-review separation and local implementation were selected by the agent to make the core loop useful and avoid account/API setup. These assumptions await final user review.

## What We're Building
The single completed journey in scope.md > The POC Boundary.

## Deferred From the POC
URL fetching, AI APIs, cloud accounts, multiple workspaces, automatic reminders and eligibility decisions.

## Non-Goals
Guaranteeing legal compliance, exhaustive extraction, live rules-change monitoring or awarding an eligibility status.

## Open Questions
Final learner feedback. Submission form fields must be inspected after account registration.
