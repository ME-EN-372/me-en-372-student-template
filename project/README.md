# DI teardown project

Your team's semester project: buy a product at Deseret Industries, take it
apart, analyze one component by hand, model it in FEA, and reconcile the two.
**25% of your course grade**, plus a separate 10% oral defense.

The full brief, rubrics, and timeline are on Canvas ("Final Design Project").
This folder is where the work lives.

| Deliverable | Due | File to fill in |
|---|---|---|
| P1 — product selection | Fri Sep 18 | [`p1-selection.md`](p1-selection.md) |
| P2 — teardown package | Fri Oct 9 | [`p2-teardown/`](p2-teardown/) |
| P3 — analysis plan, hand calcs + first FEA model | Fri Nov 13 | [`p3-analysis.md`](p3-analysis.md) |
| P4a — showcase video | Wed Dec 9 | link it in [`p4a-video.md`](p4a-video.md) |
| P4 — final analysis package | Fri Dec 11 | [`p4-report.md`](p4-report.md) |

All due at 5:00 pm Mountain Time.

## Before you open anything — safety

Read this fully. It is graded as part of P2, and it is the part of the project
that can actually hurt someone.

1. **De-energize permanently.** Unplug corded products. Remove any battery pack
   and store it away from the workbench, in another member's custody, for the
   rest of the semester.
2. **Never open a battery pack.** A punctured lithium cell burns and cannot be
   put out with an ordinary extinguisher. Quarantine any pack that is swollen,
   hot, or leaking and tell your TA — do not transport it.
3. **Assume capacitors are charged.** Mains-powered products hold charge after
   unplugging. Do not bridge capacitor terminals.
4. **Find preloaded springs before you free them.** Retracting mechanisms,
   clutches, and trigger returns are usually under load. Release them
   deliberately, in a controlled direction.
5. **Eye protection, always.** Circlips and brittle plastic leave under load.

After teardown the product stays de-energized: never powered again, not
reassembled into a working tool, and **not re-donated**. Recycle through the
department e-waste stream.

## Where numbers come from

Label every value with its tier, in your write-ups:

- **Measured** — dimensions, tooth counts, mass, wire diameter.
- **Instrumented** — torque from the TA-supervised reaction-arm setup.
- **Sourced** — Shigley tables or a cited datasheet, with the material
  justified from manufacturing evidence.
- **Assumed** — stated, with a range, and covered in your sensitivity check.

An unsourced number costs more than an honest assumption with a range.
