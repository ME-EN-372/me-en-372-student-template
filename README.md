# ME EN 372 — your course repository

Welcome. This is your own copy of the ME EN 372 working repository. Everything
you produce this semester that is not a Canvas quiz lives here: homework
write-ups, lab memos, and your team's teardown project.

**You cannot break this repo.** Every change is tracked, and anything you delete
can be recovered. Experiment.

## The one thing to try first (Assignment 0)

Open the **Issues** tab, click **New issue**, and post a comment that starts with
`@claude`. For example:

> `@claude` explain what each folder in this repo is for, and add my name to the
> top of README.md

Claude will reply in the thread and, when you ask for a change, open a pull
request with it. That is the whole workflow: **ask in an issue, review what comes
back.** Paste the link to that comment into the A0 quiz on Canvas.

There is no wrong ping. Asking Claude to explain something you do not understand
is exactly as valid as asking it to write code.

## What is in here

| Folder | What goes in it | Template to copy |
|---|---|---|
| `homework/` | One folder per problem set, `hw01/` … `hw13/` | `homework/TEMPLATE-solution.md` |
| `labs/` | One memo per Thursday FEA lab | `labs/TEMPLATE-lab-memo.md` |
| `project/` | Your team's DI teardown project, P1 → P4 | `project/` already has the five stubs |
| `scratch/` | Anything half-finished. Nothing here is graded. | — |

## How to submit

Canvas is still where submissions are *recorded*. For most items you will do the
work here and upload the exported PDF (or paste the link to the file in this
repo) to the Canvas assignment. Each assignment on Canvas says which it wants.

## Working with Claude well

Claude is genuinely useful for some things and genuinely bad at others. In this
course:

**Works well**
- "Explain why my shear diagram jumps at the support."
- "Check the units in this calculation and tell me where they stop balancing."
- "I got n = 0.4 for this bracket. Is that plausible, and what would make it wrong?"
- "Rewrite this paragraph of my lab memo to be clearer, keeping my numbers."

**Works badly — and the failure is hard to see**
- "Solve problem 3 for me." You get an answer that looks right and is often
  subtly wrong, and you learn nothing you can use on an exam.
- Anything depending on a figure you have not described. It cannot see your
  sketch.
- Table lookups from Shigley. It approximates them, confidently.

**The rule that keeps you safe:** you must be able to defend every number you
submit. The exams are closed-AI, the oral defense is live, and the project asks
you to reconcile two independent analyses. Work that you did not understand will
surface there.

**Disclosure is required, not penalized.** The AI-use appendix in the project
(and the equivalent note on homework) is graded on honesty and completeness, not
on how little AI you used. Undisclosed use is an academic-honesty violation;
disclosed use is worth easy points. The full policy is on Canvas.

## Getting help

- **Lab 1 (Thu Sep 3)** has dedicated setup time with TAs — the fastest fix for
  anything account-related.
- TA office hours, or the course discussion channel.
- Almost every A0 problem is one of: two-factor-authentication prompts, a
  university-vs-personal email mix-up, or an org invite that was never accepted.
  Bring your laptop to a TA.

## Licensing

Your coursework is yours — nothing here claims any right over what you put in
this repository. The template's scaffolding (folder layout, templates,
`CLAUDE.md`, the workflow) is MIT-licensed. See
[`TEMPLATE-LICENSE.md`](TEMPLATE-LICENSE.md), which also explains why it is not
named `LICENSE`, and why you should keep your repository private.
