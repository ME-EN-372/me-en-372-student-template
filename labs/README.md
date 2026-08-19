# Thursday FEA labs

There are 14 Thursday labs and **nine lab memos**, so the memo number and the
lab number are not the same. Labs 1, 4, 9, 10 and 14 have no memo: Lab 1 is the
software-setup checkoff, and Labs 4, 9, 10 and 14 are project labs whose work
product goes into P2, P3 and P4 instead.

| Memo | Lab | Lab meets | Memo due, 5:00 pm Mountain Time |
|---|---|---|---|
| 1 | Lab 2, 2D truss | Thu Sep 10 | Wed Sep 16 |
| 2 | Lab 3, plate with a hole | Thu Sep 17 | Wed Sep 23 |
| 3 | Lab 5, mesh convergence | Thu Oct 1 | Wed Oct 7 |
| 4 | Lab 6, beam elements | Thu Oct 8 | Wed Oct 14 |
| 5 | Lab 7, combined loading | Thu Oct 15 | Wed Oct 21 |
| 6 | Lab 8, shaft with a keyseat | Thu Oct 22 | Wed Oct 28 |
| 7 | Lab 11, pressure vessel and press fit | Thu Nov 12 | Wed Nov 18 |
| 8 | Lab 12, bolted joint | Thu Nov 19 | Wed Nov 25 |
| 9 | Lab 13, buckling | Thu Dec 3 | Wed Dec 9 |

Each lab sheet repeats its own due date at the top. If a date on a sheet ever
disagrees with this table, the sheet is the authority.

## Where the files go

One folder per lab, named after the **lab** number:

    labs/
      lab-02/
        prelab-<your netid>.pdf     your own pre-lab hand calculation
        memo.md                     the pair's memo, memo 1 in this case
        figures/                    the annotated result figure
      lab-03/
      ...

Start every memo from [`TEMPLATE-lab-memo.md`](TEMPLATE-lab-memo.md). The
headings in that file are the rubric.

## One memo per pair, one pre-lab per person

**The memo is a pair deliverable and earns one grade for the pair.** Decide with
your partner which of your two repositories will hold it, put it there, and both
of you paste that same link into the Canvas checkoff.

**The pre-lab is individual and is required before your section starts.** Solve
the lab's prediction problems by hand on your own, commit the scan or photo to
your own repository as `labs/lab-NN/prelab-<netid>.pdf`, and do it before the
session begins: commit timestamps are checked, and predictions are not revised
after the model runs. Attach both partners' pre-labs to the memo as an appendix.

## What a memo has to contain

Two pages maximum, and these five items:

1. **Objective**, one paragraph: what you modelled and why.
2. **Model summary**, as a table: geometry, element type, mesh (element size and
   count at the result you report), boundary conditions, loads, material.
3. **Results**, one annotated result figure (contour or plot) plus the key
   numbers. A bare screenshot with no annotation loses the communication point.
4. **Hand-calc comparison**, your pre-lab prediction next to the FEA value, the
   percent difference, and one paragraph reconciling the gap.
5. **Conclusion**, two or three sentences on when this model can be trusted.

The reconciliation paragraph is graded on the **explanation, not the
agreement**. A 30% difference with a correct diagnosis earns full credit; a 2%
match with no diagnosis does not.

Some lab sheets ask for extra items, such as the mesh-convergence table in Lab 5
or the three-way deflection comparison in Lab 6. Those fold into the Results
section, and the lab sheet says so.

## How to hand it in

1. Commit the memo, the figure, and both pre-labs to the repository you agreed
   on.
2. Open that week's **lab checkoff** on Canvas and complete it. It asks for the
   link to the committed work, two or three of the numbers the lab produced, and
   an individual exit question.

**The Canvas checkoff is what gets graded**, so the lab is not finished until it
is submitted.

## Where the 10 points are

| | Points |
|---|---:|
| Attendance and participation: you attended your section, submitted the signed pre-lab, and answered the exit question. This row is per person | 2 |
| Deliverable completeness: every item the lab sheet asks for is present | 4 |
| FEA versus hand-calc reconciliation: prediction, percent difference, and a real diagnosis | 2 |
| Communication quality: two pages or fewer, figure annotated, table readable, conclusion says when the model can be trusted | 2 |

A complete, good-faith memo scores 8 to 10. The attendance row is per person, so
it is the one row where partners can score differently.

## Start geometry

The STEP file for every FEA lab is already in [`geometry/`](geometry/), so there
is nothing to download before lab. That folder's README says which file goes
with which lab.

## The lab sheets themselves

The step-by-step FEA instructions are on Canvas and on the course tutorial site,
linked from each week's Canvas lab page. Several labs have a matching hands-on
tutorial you can run before the session; the lab sheet links it, and running it
first is optional.
