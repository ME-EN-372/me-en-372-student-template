# ME EN 372: your course repository

Welcome. This is your own copy of the ME EN 372 working repository. Everything
you produce this semester that is not a Canvas quiz lives here: homework
write-ups, Thursday lab writeups, and your team's teardown project.

**You cannot break this repo.** Every change is tracked, and anything you delete
can be recovered. Experiment.

## The one thing to try first (Assignment 0)

Open the **Issues** tab. If there is already an issue titled "Example: asking
Claude for help", reply in it. If there is not, click **New issue** and start
one. Either way, post a comment that starts with `@claude`. For example:

> `@claude` explain what each folder in this repo is for, and add my name to the
> top of README.md

Claude replies in the thread and, when you ask for a change, opens a pull
request with it. That is the whole workflow: **ask in an issue, review what
comes back.** Paste the link to that comment into the A0 Part 2 quiz on Canvas,
due Friday, Sep 11 at 5:00 pm Mountain Time.

There is no wrong ping. Asking Claude to explain something you do not understand
is exactly as useful as asking it to write code.

## Your GitHub profile

You keep this account after the course, so set it up like something you would
put on a résumé. All three of these are **required** for A0:

- **Username** someone can match to a person: `fmlast` or `first-last`, so
  `sgbaird` or `sterling-baird`. If both are taken, add a number or your
  discipline, as in `sbaird-me`.
- **Your real first and last name**, under Settings, then Public profile, then
  Name. Grading and team assignment run through this repository, and a bare
  username is not enough to match you to the roster.
- **A profile picture.** Any clear photo of you. It is how teammates and TAs
  recognize you in a thread.

## What is in here

| Folder | What goes in it | Where to start |
|---|---|---|
| `homework/` | One folder per problem set, `hw01/` through `hw13/`, one file per problem | `homework/TEMPLATE-solution.md` |
| `labs/` | One folder per FEA lab that produces a writeup, named `lab-02/` and so on. Nine writeups in the semester, one per pair | `labs/TEMPLATE-lab-writeup.md` |
| `labs/geometry/` | The STEP start file for every FEA lab, already downloaded | `labs/geometry/README.md` |
| `project/` | Your team's teardown project, five submissions from P1 to P4 | `project/README.md` |
| `scratch/` | Anything half-finished, plus `predictions.md` (a prediction you commit before a demonstration runs) and the worksheet files from the hands-on activities. Nothing here is graded for correctness; some activities check that the commit came before the demonstration | |

Each folder's README says what its deadlines are and what its rubric asks for.

## How to submit

Canvas is where submissions are *recorded*, and the three kinds of work are
recorded differently:

- **Homework** is uploaded to the Canvas assignment. Work here, export the PDF,
  upload it. Due Fridays at 5:00 pm Mountain Time.
- **Lab writeups** are committed here, and then you complete that week's **Canvas
  lab checkoff**, which asks for the link to the committed work. The checkoff is
  what gets graded, so the lab is not finished until it is submitted. Due
  Wednesdays at 5:00 pm Mountain Time.
- **Project deliverables** are submitted on Canvas per the assignment page.

## Working with Claude well

Claude is genuinely useful for some things and genuinely bad at others. In this
course:

**Works well**
- "Explain why my shear diagram jumps at the support."
- "Check the units in this calculation and tell me where they stop balancing."
- "I got n = 0.4 for this bracket. Is that plausible, and what would make it wrong?"
- "Rewrite this paragraph of my lab writeup to be clearer, keeping my numbers."
- "Work a problem like this one with different numbers, so I can follow it."

**Works badly**
- "Solve problem 3 for me." It will offer you a parallel worked problem instead,
  which is the more useful thing anyway. See [`CLAUDE.md`](CLAUDE.md).
- Anything depending on a figure you have not described. It cannot see your
  sketch.
- Table lookups from Shigley. It approximates them, confidently. Read the table.

**If an answer feels thin, ask for a stronger model.** A bare `@claude` uses
Haiku, which is fast, cheap, and right for most of what you will ask. For a
harder question, "walk me through why my FEA and my hand calculation disagree",
tag it `@claude+sonnet`, or `@claude+sonnet:high` to have it think longer.
`@claude+opus` is available for the genuinely hard ones. Reach for these when
the first answer misses, not by default. The run summary on each job says which
model actually replied.

`:high` only does something on models that have an effort setting, which is
Sonnet and Opus. On Haiku it is ignored, and the run summary says so.

**Be able to defend every number you submit.** The exams are closed to AI, the
oral defense is live, and the project asks you to reconcile two independent
analyses.

**Disclosure is required and is worth points.** The AI-use appendix in the
project, and the one-line note on homework and lab writeups, are graded on honesty
and completeness rather than on how little AI you used. The full policy is on
Canvas.

## Getting help

- **Lab 1 (Thu Sep 3)** has dedicated setup time with TAs, which is the fastest
  fix for anything account-related.
- TA office hours, or the course discussion channel.
- Almost every A0 problem is one of three things: a two-factor-authentication
  prompt, a university-versus-personal email mix-up, or an org invite that was
  never accepted. Pending invitations are listed at
  <https://github.com/settings/organizations>, which is more reliable than
  searching your inbox. If none of those explains it, bring your laptop to a TA.

## Licensing

Your coursework is yours. Nothing here claims any right over what you put in
this repository. The template's scaffolding (folder layout, templates,
`CLAUDE.md`, the workflow) is MIT-licensed. See
[`TEMPLATE-LICENSE.md`](TEMPLATE-LICENSE.md), which also explains why it is not
named `LICENSE`, and why you should keep your repository private.
