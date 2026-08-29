# Teardown and component-analysis project

Your team's semester project: buy a used product, take it apart, analyze one
component by hand, model that same component in finite element analysis (FEA),
and reconcile the two.
**25% of your course grade**, plus a separate 10% for the oral defense.

The full brief, the rubrics, and the timeline are on Canvas under "Final Design
Project". That page is the source of truth. This folder is where the work lives.

## The five submissions

| # | Due, 5:00 pm Mountain Time | Points | File to fill in |
|---|---|---:|---|
| P1, product selection | Fri Sep 18 | 10 | [`p1-selection.md`](p1-selection.md) |
| P2, teardown package | Fri Oct 9 | 20 | [`p2-teardown/`](p2-teardown/) |
| P3, analysis plan, hand calcs, preliminary FEA | Fri Nov 13 | 29 | [`p3-analysis.md`](p3-analysis.md) |
| P4a, showcase video | Wed Dec 9 | 10 | [`p4a-video.md`](p4a-video.md) |
| P4, final analysis package | Fri Dec 11 | 31 | [`p4-report.md`](p4-report.md) |
| **Total** | | **100** | |

## Your FEA starts in week 10, not in December

Three lab sessions carry the project through the analysis phase, and the middle
one is the reason P3 asks for a model:

- **Lab 9 (Thu Oct 29), analysis studio.** You idealize the component and a
  teaching assistant (TA) signs off on the scope. Attendance is required, and the signed sheet is worth
  points in P3.
- **Lab 10 (Thu Nov 5), FEA studio.** This is where you build the preliminary
  FEA model, with TA support, a week before P3 is due.
- **Lab 14 (Thu Dec 10), showcase and validation wrap.** Your P4a video is
  screened and the FEA-vs-hand-calc reconciliation is finalized.

P3 then asks you to hand that model in: running, documented, and roughly right.
It does **not** have to be converged and it does **not** have to agree with your
hand calculation. P4 is the refinement and the diagnosis, so the last fortnight
of the semester is not also the fortnight you build your first model.

## Buying the product

Four criteria, all four required:

| Criterion | What it means |
|---|---|
| At least **three distinct machine elements** | Three items from three different Shigley families, not three of the same thing. Four screws are one element family |
| **Disassemblable with hand tools** | Welded, riveted, or ultrasonically welded housings end the project |
| **\$15 or less before tax** | That is what the department card covers. Anything above it is on you |
| An identifiable **load path** you can draw | You cannot analyze what you cannot trace |

**Deseret Industries in Provo (1415 N State St) is the default**, because the
stock is deep and cheap. Any source is fine as long as the product meets the
criteria and the receipt total is \$15 or less: another thrift store, Harbor
Freight, a free listing, or something already broken in your apartment. One
member checks the department card out from the ME office and returns it the same
day, so the seller has to be able to take a card. A private seller cannot, which
means anything from a yard sale or a classifieds listing has to be free.

**Get a TA thumbs-up on your choice before you tear it down.** Post a photo of
the product and your element list to your team's channel. A product that turns
out to be sealed or unopenable costs you a second trip if you find out early and
the whole P2 package if you find out late.

## Before you open anything: safety

Read this fully. It is graded as part of P2, and it is the part of the project
that can actually hurt someone.

1. **De-energize permanently.** Unplug corded products. Remove any battery pack
   and store it away from the workbench, in another member's custody, for the
   rest of the semester.
2. **Never open a battery pack.** A punctured lithium cell burns and cannot be
   put out with an ordinary extinguisher. Quarantine any pack that is swollen,
   hot, or leaking and tell your TA. Do not transport it.
3. **Assume capacitors are charged.** Mains-powered products hold charge after
   unplugging. Do not bridge capacitor terminals.
4. **Find preloaded springs before you free them.** Retracting mechanisms,
   clutches, and trigger returns are usually under load. Release them
   deliberately, in a controlled direction.
5. **Eye protection, always.** Circlips and brittle plastic leave under load.

After teardown the product stays de-energized permanently: it is never powered
again, it is not reassembled into a working tool, and it is **not re-donated**,
because a student-opened power product is an unverified device and passing it to
another user passes on a hazard. It goes to the **BYU e-waste stream** at the
end of the semester.

**Where to do the teardown: the Project Support Center, EB 107.** They have the
bench space and the experience with stuck fasteners. Posted hours are Monday to
Friday, 8:00 am to 5:00 pm, closed Tuesdays 11:00 am to 1:00 pm for devotional,
and closing at 4:00 pm on Thursdays. Book a slot rather than walking in.

## Where numbers come from

Label every value with its tier, in every write-up:

- **Measured**, dimensions, tooth counts, mass, wire diameter. A gear ratio from
  tooth counts is measured, not assumed.
- **Instrumented**, torque from the TA-supervised reaction-arm setup, available
  at Lab 9 and Lab 10.
- **Sourced**, a Shigley table or a cited datasheet, with the material justified
  from manufacturing evidence such as moulding marks, a magnet test, or density.
- **Assumed**, stated, with a range, and covered in your sensitivity check.

An unsourced number costs more than an honest assumption with a range.
