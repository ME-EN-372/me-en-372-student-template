# Lab memo <n>: <lab title>

**Lab:** <lab number and date>  **Section:** <2:00 or 3:00>
**Pair:** <both names>  **Submitted from:** <which partner's repository>

> Copy this file to `labs/lab-<NN>/memo.md`, where `<NN>` is the **lab** number,
> not the memo number. Two pages maximum. The five headings below are the
> rubric, so keep all five even when a section is short.

## Objective

<One paragraph. What you modelled and why, phrased as the question the lab
answers. "Does the fillet stress in the stepped shaft match the Kt read off
Shigley Fig. A-15-9?", not "I opened Ansys and made a mesh.">

## Model summary

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

**Pre-lab hand prediction:** <value with units, from the pre-lab you committed
before the session. Do not revise it.>
**FEA:** <value with units>  **Percent difference:** <%>

<Every lab in this course defines the percent difference the same way, so the
pooled class table adds up:>

$$\Delta_\% = 100 \times \frac{Q_{FEA} - Q_{hand}}{|Q_{hand}|}$$

<Write any equation you use in LaTeX between dollar signs, inline as
`$\sigma = F/A$` or on its own line between double dollar signs, as above.
GitHub typesets it. Define each symbol once, with its units.>

<One paragraph reconciling the gap. Name the cause: boundary condition, mesh,
the idealization the closed-form formula makes, wrong material, or a genuine
geometry effect the formula does not capture. Say which one you think it is and
what evidence points there. "They disagreed" is not a reconciliation, and
neither is "FEA is more accurate".>

<If you evaluated the quantity away from a singularity, say so and say why. A
re-entrant corner or a fully fixed edge diverges forever under refinement, and
reporting that peak as "the stress" is the classic error.>

## Conclusion

<Two or three sentences. When can this model be trusted, and for what?>

## Appendix: pre-lab predictions

<Both partners' committed pre-lab sheets, or links to them in the repository.>

## AI use

**Required, one line.** What you asked and what you used. "None." is a complete
answer. It is never a violation to disclose.
