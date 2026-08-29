# Thursday FEA labs

There are 14 Thursday labs and **nine lab writeups**, one from each
finite element analysis (FEA) lab after the first. Labs 1, 4, 9, 10 and 14 have no writeup: Lab 1 is the
software-setup checkoff, and Labs 4, 9, 10 and 14 are project labs whose work
product goes into P2, P3 and P4 instead.

| Writeup | Lab meets | Due, 5:00 pm Mountain Time |
|---|---|---|
| Lab 2, 2D truss | Thu Sep 10 | Wed Sep 16 |
| Lab 3, plate with a hole | Thu Sep 17 | Wed Sep 23 |
| Lab 5, mesh convergence | Thu Oct 1 | Wed Oct 7 |
| Lab 6, beam elements | Thu Oct 8 | Wed Oct 14 |
| Lab 7, combined loading | Thu Oct 15 | Wed Oct 21 |
| Lab 8, shaft with a keyseat | Thu Oct 22 | Wed Oct 28 |
| Lab 11, pressure vessel and press fit | Thu Nov 12 | Wed Nov 18 |
| Lab 12, bolted joint | Thu Nov 19 | **Tue Nov 24** |
| Lab 13, buckling | Thu Dec 3 | **Tue Dec 8** |

The last two are pulled one day earlier than the pattern: Wed Nov 25 is a BYU
no-class day, and Wed Dec 9 already carries HW 13 and P4a. Each lab sheet
repeats its own due date at the top. If a date on a sheet ever disagrees with
this table, the sheet is the authority.

## Every FEA lab runs in two stages

The 50 minutes split the same way every week:

- **Stage A (about 15 minutes, 3 points).** You rebuild, in Ansys, the
  demonstration the class saw at Wednesday's lecture. See the principle
  physically on Wednesday, make the software reproduce it on Thursday.
- **Stage B (the rest, 5 points).** The week's FEA technique, verified against
  hand calculations, closing with a choice of one exploration task: a curated
  real-world case study on the same principle, or an everyday example you pick
  yourself. You set it up in lab and finish it at home. Doing the other task
  as well earns up to **2.5 points of extra credit**.
- **The pre-lab is worth the other 2 points**, individually, and it has to be
  in your repository before the session starts.

## Where the files go

One folder per lab, named after the lab number:

    labs/
      lab-02/
        prelab-<your netid>.pdf     your own pre-lab hand calculation
        writeup.md                  the pair's writeup
        figures/                    the stage A and stage B result figures
      lab-03/
      ...

Start every writeup from [`TEMPLATE-lab-writeup.md`](TEMPLATE-lab-writeup.md).
The headings in that file are the rubric.

## One writeup per pair, one pre-lab per person

**The writeup is a pair deliverable and earns one grade for the pair.** Decide
with your partner which of your two repositories will hold it, put it there, and
both of you paste that same link into the Canvas lab writeup submission.

**The pre-lab is individual and is required before your section starts.** Solve
the lab's prediction problems by hand on your own, commit the scan or photo to
your own repository as `labs/lab-NN/prelab-<netid>.pdf`, and do it before the
session begins: commit timestamps are checked, and predictions are not revised
after the model runs. Attach both partners' pre-labs to the writeup as an
appendix.

## What a writeup has to contain

Three pages maximum:

1. **Stage A**, about half a page: the result figure, the stage A data table,
   and two sentences reconciling the model against what the class demonstration
   actually showed.
2. **Objective**, one paragraph: what you modelled in stage B and why.
3. **Model summary**, as a table: geometry, element type, mesh (element size and
   count at the result you report), boundary conditions, loads, material.
4. **Results**, one annotated result figure (contour or plot) plus the key
   numbers. A bare screenshot with no annotation loses the communication point.
5. **Hand-calc comparison**, your pre-lab prediction next to the FEA value, the
   percent difference, and one paragraph reconciling the gap.
6. **Stage B part 2**, up to one page: the exploration task you chose, under its
   own heading. The optional second task goes under a second heading.
7. **Conclusion**, two or three sentences on when this model can be trusted.

The reconciliation paragraph is graded on the **explanation, not the
agreement**. A 30% difference with a correct diagnosis earns full credit; a 2%
match with no diagnosis does not.

Some lab sheets ask for extra items, such as the mesh-convergence table in Lab 5
or the three-way deflection comparison in Lab 6. Those fold into the Results
section, and the lab sheet says so.

## How to hand it in

1. Commit the writeup, the figures, and both pre-labs to the repository you
   agreed on.
2. Open that week's **lab writeup submission** on Canvas and complete it. It
   asks for the link to the committed work, your stage A and stage B numbers,
   which part-2 task you chose, and an individual exit question.

**The Canvas submission is what gets graded**, so the lab is not finished until
it is submitted.

## Where the 10 points are

| | Points |
|---|---:|
| Pre-lab, uploaded before your section starts. This row is per person | 2 |
| Stage A: Wednesday's demonstration modeled correctly and reconciled with what the class saw | 3 |
| Stage B: the week's technique verified against your hand calculation, plus the part-2 task you chose | 5 |
| **Extra credit:** the other part-2 task as well, to the same accuracy standard | +2.5 |

Points are for **accuracy and thoroughness**, judged on merit against the
scoring rubric in section 8 of the lab sheet, not for completion. The link box
and the exit question on the Canvas submission carry no points of their own; the
link is how your work reaches the grader and the exit question is what completes
the submission, so leaving either out costs you the rows that depend on it.

## Start geometry

The STEP file for every FEA lab is already in [`geometry/`](geometry/), so there
is nothing to download before lab. That folder's README says which file goes
with which lab.

## The lab sheets themselves

The step-by-step FEA instructions are on Canvas and on the course tutorial site,
linked from each week's Canvas lab page. Several labs have a matching hands-on
tutorial you can run before the session; the lab sheet links it, and running it
first is optional.
