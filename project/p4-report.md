# P4: Final analysis package (due Fri Dec 11, 5:00 pm, 31 points)

**Team:** <names>

> Six points of the 31 are **report quality** and they are spread across the
> whole document: an abstract, an introduction that frames the decision,
> methods somebody else could reproduce, captioned figures, and consistent
> references. The per-section point values below account for the other 25.

## Abstract

<150 words: what you analyzed, what you found, what it means.>

## Introduction: the engineering decision

<What question this analysis answers. Not "we analyzed a bracket" but "can this
bracket be made 30% thinner without dropping below n = 2?">

## FEA model (2 points)

<Geometry, material, boundary conditions, loads, mesh. Every choice justified.>

**What changed since the P3 preliminary model, and why:**

| Item | P3 preliminary model | P4 model | Why it changed |
|---|---|---|---|
| Geometry | | | |
| Material | | | |
| Boundary conditions | | | |
| Loads | | | |
| Mesh | | | |

<"Nothing changed" is an acceptable answer for a row, as long as you say why the
P3 choice held up.>

**Keep the model defensible.** A shaft, bracket, carrier plate, bolted joint, or
simple housing region with properties you can source. Not battery cells, motor
commutators, gear-tooth contact, or unidentified glass-filled polymer.

## Convergence (5 points)

<Name the quantity of interest, say where on the part you evaluate it, and show
at least three systematically refined meshes. Table or plot, plus the relative
change between successive meshes.>

| Mesh | Element size | Element count | <quantity of interest> | Change from previous |
|---|---|---|---|---|
| 1 | | | | n/a |
| 2 | | | | |
| 3 | | | | |

<Say explicitly that you evaluated the quantity **away from a singularity**, and
where. A re-entrant corner or a fully fixed edge diverges forever under
refinement, and reporting that peak as "the stress" is the classic error.>

## FEA versus hand calculation (8 points)

**State your agreement tolerance before you compare, and justify it.** This is
the tolerance you declared in P3, or a revised one with the reason for revising
it stated.

| Quantity | Hand | FEA | Difference | Inside tolerance? |
|---|---|---|---|---|

<Then diagnose. Name the cause: boundary condition, mesh, the formula's
idealization, the material, or a real geometry effect the closed-form solution
cannot capture. Say what evidence points at that cause. Agreement is not what is
graded here; the diagnosis is.>

## Engineering decision (5 points)

<What the FEA told you that the hand calculation could not, and what you would
change about the component. Give the recalculated margin, not an opinion.>

## AI Use Statement (3 points)

Required by the course AI-use policy, one row per substantive AI interaction.
Graded on completeness and honesty, not on how little AI you used.

| # | Tool and version | Prompt (verbatim) | Output used | What we changed or validated | Why we accepted or rejected it |
|---|---|---|---|---|---|

## Individual contribution statements (2 points)

<One per member, specific, and consistent with the git and photo record.>
