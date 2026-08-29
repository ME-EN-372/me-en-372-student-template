# Lab <NN> writeup: <lab title>

**Lab:** <lab number and date>  **Section:** <2:00 or 3:00>
**Pair:** <both names>  **Submitted from:** <which partner's repository>

> Copy this file to `labs/lab-<NN>/writeup.md`, where `<NN>` is the lab number.
> Three pages maximum. The headings below are the rubric, so keep all of them
> even when a section is short.

## Stage A: the demo from Wednesday, modeled

<About half a page, and worth 4 of the 10 points. The hand value is yours to work, here.>

**What the demo was:** <one sentence naming the class demonstration your sheet
sends you back to, and the date it happened.>

| Quantity | Hand value (your calculation) | FEA value | % difference |
|---|---:|---:|---:|
| | | | |

![<what the stage A figure shows>](figures/lab<NN>-stageA.png)

<Two sentences reconciling the model with the demo. Does the model put the
effect in the same place the demo put it, and does the size of it match? A
sentence that only restates the numbers is not a reconciliation.>

## Objective

<One paragraph. What you modelled and why, phrased as the question the lab
answers. "Does the fillet stress in the stepped shaft match the Kt read off
Shigley Fig. A-15-9?", not "I opened Ansys and made a mesh.">

## Stage B part 1: model summary

| Choice | What I used | Why |
|---|---|---|
| Geometry and idealization | | |
| Material | | |
| Element type | | |
| Mesh (element size and count at the reported result) | | |
| Boundary conditions | | |
| Loads | | |

The "why" column is where the points are. A boundary condition you cannot
justify is the most common source of a wrong answer that looks right.

## Results

<The key numbers, stated with units and with the location on the part they were
read at.>

![<what the figure shows>](figures/lab<NN>-result.png)

<One annotated result figure: contour or plot, with the quantity, the scale, and
the location you read the number from marked on it. An unannotated screenshot
does not count as annotated.>

If the lab sheet asks for extra items, such as a convergence table or a
three-way comparison, put them here.

## Hand-calc comparison

**Hand calculation:** <value with units, worked here in the writeup.>
**Committed prediction:** <the value each of you committed at the start of the
session, before solving, with a link to the file. Do not revise it.>
**FEA:** <value with units>  **Percent difference:** <%>

<One paragraph reconciling the gap. Name the cause: boundary condition, mesh,
the idealization the closed-form formula makes, wrong material, or a genuine
geometry effect the formula does not capture. Say which one you think it is and
what evidence points there. "They disagreed" is not a reconciliation, and
neither is "FEA is more accurate".>

<If you evaluated the quantity away from a singularity, say so and say why. A
re-entrant corner or a fully fixed edge diverges forever under refinement, and
reporting that peak as "the stress" is the classic error.>

## Stage B part 2: where you took it

<Up to one page, and worth 2 of the 10 points. Name which of the two tasks on
the sheet you chose, the curated case study or your own everyday example, and
report it here under its own heading. If you did the other task as well, put it
under a second heading; it is worth up to 2.5 points of extra credit and it is
held to the same accuracy standard as the one you chose.>

## Conclusion

<Two or three sentences. When can this model be trusted, and for what?>

## Appendix: committed predictions

<Links to both partners' `prediction-<netid>.md` files, committed in the
session before the model ran.>

## AI use

**Required, one line.** What you asked and what you used. "None." is a complete
answer. It is never a violation to disclose.
