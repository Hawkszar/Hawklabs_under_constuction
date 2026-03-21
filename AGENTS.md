# AGENTS.md

## Project Identity
Project name: Hawklabs - Website (Amber Command)
Owner: Nicholas / Hawklabs  
Purpose: hawklabs.games is our home base, our Domain. Needs to be updated regularly for the public to know what we are and what we are up to, as well as place for those
who want to know more backstories aka LORE, thats where is will be dropped mainly
Primary stack: cloudflair hotst and Git holds the files. withing seconds of Git finishing the push Cloudflair will pull new stuff and make it live
Status: Live on the web. Gets auto uploaded to Cloudflair

---

## Mission For This Repo
This repository should move forward through small, safe, practical improvements that preserve momentum and reduce breakage.

Primary goals:
- Keep the project working
- Fix broken behavior before polishing
- Prefer clear, maintainable solutions
- Avoid unnecessary rewrites
- Support fast, reviewable progress

---

## How To Work In This Repo
When making changes in this repository:

- Inspect the relevant files first before proposing changes
- Understand the current structure before editing
- Prefer the smallest safe fix that solves the actual issue
- Avoid changing unrelated files
- Preserve existing naming, folder structure, and style unless they are part of the problem
- Do not introduce new dependencies unless clearly necessary
- Keep edits easy to review and easy to undo

If something is unclear:
- State the assumption briefly
- Choose the safest grounded option
- Do not invent architecture or behavior without evidence from the repo

---

## Code Standards
Follow these defaults unless the repo already defines a stronger pattern:

- Favor readability over cleverness
- Keep functions focused
- Keep variable and function names clear
- Reduce duplication where practical, but do not refactor unrelated code just for neatness
- Add comments only when they truly help explain intent or non-obvious logic
- Match the style already used in the repository

Do not:
- Rename files, symbols, or folders without a strong reason
- Reformat large unrelated sections
- Mix bug fixes with unrelated cleanup
- Replace working systems just because another approach looks cleaner

---

## Debugging Rules
When debugging:

1. Identify the likely execution path
2. Trace the failure from evidence, not guesswork
3. Find the probable root cause, not just the visible symptom
4. Apply the minimum safe correction first
5. Validate the fix with the most relevant available checks

When reporting a bug or fix, include:
- what appears broken
- where it is likely breaking
- why it is happening
- what was changed
- what was checked afterward

---

## Validation Rules
After making changes:

- Run the most relevant tests, linting, build, or local verification available
- If full automated tests do not exist, perform the nearest practical validation
- Clearly report:
  - Passed
  - Failed
  - Not tested / not available

Never claim something is verified if it was not actually checked.

---

## Pull Request / Change Summary Format
When preparing a summary, use this structure:

### What was wrong
Brief description of the issue

### What changed
Short explanation of the actual fix

### Risk / impact
Anything that could still be affected

### Validation
What was run or checked

### Notes
Any assumptions, follow-ups, or limits

---

## Safety / Repo Protection Rules
Be extra careful around:

- authentication
- user accounts
- payments
- production configuration
- deployment scripts
- file deletion
- data storage
- secrets and environment variables

Never:
- expose API keys, secrets, tokens, or credentials
- paste sensitive config into summaries
- remove safeguards without explicit reason
- make destructive changes casually

If a change touches sensitive areas, call out the risk clearly.

---

## Working Style For Nicholas
The repo owner prefers:

- clear step-by-step progress
- practical explanations
- not too much information at once
- the best recommended path first
- small safe changes over big rewrites

When communicating:
- be direct
- be organized
- keep it understandable
- do not overwhelm with unnecessary detail

---

## Repo-Specific Commands
Replace these with the real commands for this project.

### Install
```bash
[TEST_COMMAND]
[BUILD_COMMAND]
[UPDATE]
