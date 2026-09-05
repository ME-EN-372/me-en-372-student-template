# FEA lab start geometry

The start file for every Thursday FEA lab is already here, in your own
repository. You do not have to download anything before lab: clone your repo
(or open it in GitHub Desktop), and the file the lab sheet names is sitting in
this folder.

If you are on a lab machine and would rather grab one file directly, every file
below is also downloadable from the course template repository:
<https://github.com/ME-EN-372/me-en-372-student-template/tree/main/labs/geometry>

## Which file goes with which lab

| Lab | File | What it is |
|---|---|---|
| 1 | `lab01-onboarding-bracket.step` | 120 x 40 x 6 mm cantilever plate, 12 mm hole 30 mm from the fixed edge |
| 2 | `lab02-truss.step` | 7-member planar truss, drawn as line bodies, in mm |
| 3, 5 | `lab03-plate-hole.step` | 100 x 40 x 5 mm plate, 10 mm hole on center, solid |
| 3, 5 | `lab03-plate-hole-surface.step` | the same plate as a flat surface body, for the 2D plane-stress run |
| 6 | `lab06-beam-line.step` | 2000 mm line body |
| 6 | `lab06-beam-solid.step` | the same beam as a solid, already split at the two bearing strips and the midspan load patch |
| 7 | `lab07-post.step` | 40 mm diameter by 200 mm cantilever post |
| 8 | `lab08-keyseat-shaft.step` | stepped 32 mm to 25 mm shaft with an end-milled keyseat and a 0.5 mm floor fillet |
| 11 | `lab11-cylinder-axisym.step` | thick-walled cylinder, 2D axisymmetric half-section |
| 11 | `lab11-pressfit-axisym.step` | press fit, 2D axisymmetric, with a 0.05 mm modelled overlap |
| 11 | `lab11-cylinder-sector-3d.step` | 5 degree 3D wedge of the same cylinder |
| 12 | `lab12-bolted-joint.step` | two plates plus an M10 bolt, as three separate bodies |
| 13 | `lab13-column-straight.step` | 12 mm diameter by 1000 mm column |
| 13 | `lab13-column-bowed.step` | the same column with a 2 mm midspan bow, about L/500 |
| 2 | `lab02-torsion-helicoid.js` | not geometry: a DesignModeler script that draws the 45 degree spiral fracture surface of a twisted 10 mm by 80 mm chalk bar (see below) |

`manifest.json` holds the same table in machine-readable form.

## One file is a script, not a part

`lab02-torsion-helicoid.js` goes with the chalk-versus-Tootsie-Roll torsion demo.
After you have modelled and solved the twisted chalk bar (10 mm diameter, 80 mm
long, sketched on the XY plane and extruded along Z, with **Units set to Millimeter**),
open the geometry in DesignModeler and use **File, then Run Script...** to run it. It
sweeps a helicoid surface that meets the outside of the bar at 45 degrees everywhere:
the shape a brittle bar breaks on. Right-click the solid body and **Hide Body** to see
the surface on its own. Do not save that surface into your solved project; it would
be meshed as a shell and change the model. Keep it in a scratch copy.

## These files carry geometry only

A STEP file stores shape. It does not store the material, the mesh, the
supports, the loads, or the results. Each lab sheet prints a setup table in its
section 2 listing exactly what to set, and building the model from that table is
the graded skill: those four choices are what an FEA answer actually depends on.

So the click path in every lab is the same:

1. In Ansys Workbench, drop the analysis system the lab sheet names onto the
   schematic.
2. Right-click **Geometry**, then **Import Geometry**, then **Browse**, and pick
   the STEP file from this folder.
3. Work the schematic left to right, filling in each cell from the lab sheet's
   section 2 table.

## Two files that will mislead you if you rotate them

**The axisymmetric sections must stay where they are.** Ansys 2D axisymmetric
treats X as the radius and revolves about the Y axis, so
`lab11-cylinder-axisym.step` and `lab11-pressfit-axisym.step` are drawn at
X greater than or equal to zero with Y vertical. Turning one "so it looks right"
in a viewer breaks the analysis.

**The press-fit overlap is the physics, not a modelling error.** In
`lab11-pressfit-axisym.step` the shaft is drawn at R = 25.05 mm and the hub bore
at R = 25.00 mm. That 0.05 mm of overlap is the interference the lab measures.
If contact detection is left on **Adjust to Touch**, Ansys quietly removes the
interference and the model reports zero contact pressure.

## If a file will not open

Ansys reads STEP across versions, so a file that fails to import is usually a
download problem rather than a version problem. Check the file size against the
table in `manifest.json` first: a browser that saved an HTML error page under a
`.step` name produces a file of a few hundred bytes. Re-clone or re-download,
and if it still fails, raise a hand in lab rather than spending the session on
it.

You are welcome to edit these files or build your own geometry from the
dimensions in the lab sheet. If you overwrite one and want the original back,
`git checkout labs/geometry/<file>` restores it, or download it again from the
template repository linked above.

## Where these files come from, and what has changed

Every file here is **generated**, not drawn by hand: a CadQuery script in the
course's own repository builds each one and checks its volume and bounding box
against the dimensions in the lab sheet. The copies you are reading were
mirrored out of there, so **editing a file here changes only your copy**. The
next mirror overwrites it. A fix belongs in the generator, so tell the
instructor and it gets fixed for everyone at once.

Revisions so far. Every one was found by actually solving the model on a
licensed Ansys seat, not by looking at the file:

| date | file(s) | what was wrong |
|---|---|---|
| 2026-08-26 | [`lab02-truss.step`](lab02-truss.step) | Exported as seven separate products, so Ansys read seven free bars that touch but transmit nothing, and no support could hold the truss. Now one product. |
| 2026-08-28 | [`lab02-stageA-beam.step`](lab02-stageA-beam.step) | Added; Stage A had no start file. |
| 2026-08-29 | [`lab03-stageA-cantilever.step`](lab03-stageA-cantilever.step), [`lab05-stageA-beam.step`](lab05-stageA-beam.step) | Added Stage A start files for both labs. |
| 2026-08-29 | [`lab06-beam-solid.step`](lab06-beam-solid.step), [`lab06-beam-line.step`](lab06-beam-line.step) | The solid was built on its side, so the 80 mm depth lay across the width and the second moment of area was wrong by 4x; the line body had no midspan vertex to hang the point load on. |
| 2026-08-30 | [`lab13-column-bowed.step`](lab13-column-bowed.step) | The top end was **two half-disc faces** rather than one. A swept bow trimmed at its own end leaves the tilted end cap clipped in half, so clicking "the top face" selected a half disc whose centre sits 2.55 mm off the axis. The pinned support and the axial load then went through that point and the column showed a quarter of the deflection it should. |
| 2026-08-31 | [`lab12-bolted-joint.step`](lab12-bolted-joint.step) | Both plates now carry two imprinted rings on their outer faces, at the head/nut diameter and at 30 mm. Without them there was nowhere to apply the external load except a whole 6 000 mm² face, which is not where the theory introduces it, and the measured joint constant came out near 0.01 instead of Shigley's 0.21. |

If a file here disagrees with what the lab sheet says, that is worth reporting:
it means the generator and the sheet have drifted, and both are ours to fix.
