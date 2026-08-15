# Lab <n> memo: <lab title>

**Name:** <yours, memos are individually written even when the work was shared>
**Lab section:** <2:00 or 3:00>  **Date:** <Thursday's date>

> One to two pages. The memo is not a transcript of what you clicked; it is an
> argument that your model can be believed. Copy this file to
> `labs/lab<nn>-memo.md`.

## What I was trying to find out

<One or two sentences. The question, not the procedure. "Does the fillet stress
in the stepped shaft match the Kt I read off Shigley Fig. A-15-9?", not "I
opened Ansys and made a mesh.">

## Model

| Choice | What I used | Why |
|---|---|---|
| Geometry / idealization | | |
| Material | | |
| Boundary conditions | | |
| Loads | | |
| Element type & mesh | | |

The "why" column is where the points are. A boundary condition you cannot
justify is the most common source of a wrong answer that looks right.

## Convergence

<Which quantity you tracked, at which location, across at least three mesh
refinements. A small table or plot. Say explicitly whether you evaluated it away
from a singularity, a re-entrant corner or a fully fixed edge will happily
diverge forever, and reporting that peak as "the stress" is the classic error.>

| Mesh | Element size | <quantity> | Change from previous |
|---|---|---|---|
| 1 | | | n/a |
| 2 | | | |
| 3 | | | |

## Hand check

<The independent calculation. Symbolic form, then numbers with units. This is
the whole point of the lab: two methods, one answer, or a reason why not.>

## Comparison and diagnosis

**FEA:** <value>  **Hand:** <value>  **Difference:** <%>

<If they agree within the tolerance you set in advance, say what that tolerance
was and why it is reasonable. If they do not, diagnose it: boundary condition,
mesh, wrong formula, wrong material, or a genuine geometry effect the hand
formula does not capture. "They disagreed" is not a conclusion.>

## What I would do differently

<Two or three sentences. Honest.>

## AI use

<What you asked, what you used. "None." is fine.>
