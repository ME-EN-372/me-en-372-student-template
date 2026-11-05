# P3: Analysis plan, hand calculations, preliminary finite element analysis (FEA) model (due Fri Nov 13, 5:00 pm, 29 points)

**Team:** <names>  **Component:** <what you are analyzing>

Analyze **one** idealized load-bearing component: a bracket, lever, shaft, or
housing rib, not the whole product.

**Which component qualifies.** It has to sit in the primary load path you drew
in P2, so that a service load actually passes through it. A cosmetic cover, a
grip overmold, a battery-door latch, or a label plate does not qualify. If the
component you chose is not the most heavily loaded one you identified, say in
one sentence why you chose it anyway.

> **Prerequisite limit.** P3 may use only methods taught by **L31 (Fri Nov 13)**.
> Buckling is taught at L36 to L38, *after* this is due. If your component is a
> slender compression member, hypothesize buckling here and carry the
> Euler or Johnson calculation into P4, where it earns credit under "what the
> FEA adds".

## Load cases

Define all three before any calculation. State the overload even if you do not
analyze it.

| Case | Load (magnitude, direction, where applied) | Where the number comes from |
|---|---|---|
| Normal operation: the load the product sees doing the job it is for | | |
| Worst credible service: the largest load in normal use, usually stall, jam, or end of travel | | |
| Overload: beyond normal use, from a source you can point to (a standard's test load, a stated drop height, full body weight) | | <source, and the multiplier over normal operation> |

**Governing case:** <which of the three you carry through the hand calculations, and why>

## Idealization (5 points)

<Geometry, supports, and load case. State every simplification explicitly:
"the fillet is modeled as a sharp corner for the hand calculation", "the
housing is treated as rigid".>

## Failure-mode hypothesis (4 points)

<Name **at least two** failure modes your component can actually reach, and for
each one name the criterion it is checked by and say why that mode is real for
this component.

**Static yielding is always one of them.** The second is whichever of fatigue,
buckling, joint separation, contact, or deflection your component's service
loading makes real.

**Eliminating a mode earns the same credit as checking one**, as long as the
reason is specific to your component. "The load is applied once at assembly and
never cycles, so fatigue is not a mode here" is a reason. "Fatigue does not
apply" is not.

Keep the two questions separate: distortion energy is a static criterion and not
a fatigue one, and modified Goodman is a fatigue criterion and not a static
one.>

| Mode | Real or ruled out? | Criterion it is checked by | Why, specific to this component |
|---|---|---|---|
| Static yielding | | | |
| | | | |

## Hand calculations (8 points)

<Full structured problem-solving format at the critical section, for the
governing load case: given, find, sketch, assumptions, symbolic equation,
substitution with units, result, sanity check. Same skeleton as your homework,
used throughout rather than only at the start.>

The hand calculations are graded against this minimum set. Every team hands in
all seven, whatever the component is.

1. **Reactions and internal loads.** From the P2 free-body diagram: the
   reactions, then the internal axial force, shear, bending moment, and torque
   at the section you are calling critical, with the section located by a
   dimension.
2. **Section properties.** $A$, $I$ or $J$, and $c$ or $Z$, from your measured
   geometry, with the idealization named (solid rectangle, thin rib, hollow
   round).
3. **Nominal stresses.** Each stress component at the critical point, symbolic
   before numeric.
4. **Stress concentration.** The geometric feature, $K_t$ with its source
   (Shigley Table A-15 figure number, or a cited chart), and for a fatigue check
   the notch sensitivity $q$ and $K_f$. If you take $K_t = 1$, say why.
5. **Combined stress and criterion.** The equivalent stress and the criterion it
   goes into. Static: distortion energy or maximum shear stress for a ductile
   metal; Coulomb-Mohr or modified Mohr for a brittle material. Fatigue, if it
   is your second mode: modified Goodman, Gerber, Soderberg, or ASME elliptic,
   with the corrected endurance limit $S_e$ and every Marin factor shown.
6. **Design factor.** Your computed $n$ for each mode, and separately the target
   $n_d$ you are judging it against, with where that target comes from.
7. **Sources.** The table below, one row for every number you used.

| Quantity | Value and units | Tier (measured, instrumented, sourced, assumed) | Citation, or the range if assumed |
|---|---|---|---|
| | | | |

## Checks performed (5 points)

A static factor of safety against yielding or fracture, always, plus the second
mode from your hypothesis, each against its own criterion.

| Check | Criterion | Computed $n$ | Target $n_d$ and where it comes from |
|---|---|---|---|
| Static factor of safety | | | |
| <second mode> | | | |

## Sanity, units, sensitivity (3 points)

<Carry units through every substitution and say how you know the answer is
plausible. Then vary the two inputs with the largest effect over the ranges you
stated, and report what each does to $n$.>

| Input | Range | $n$ at the low end | $n$ at the high end |
|---|---|---|---|
| | | | |
| | | | |

## Preliminary FEA model (4 points)

*Built at **Lab 10 (Thu Nov 5)**, a week before this is due. It does not have
to be converged and it does not have to agree with the hand calculation. It has
to run, be documented well enough that someone else could rebuild it, and be
the same component the calculations above are about.*

**Quantity of interest.** The first-pass result is a named quantity you keep for
the whole project: the same one appears in P4's convergence study and in the
comparison with the hand calculation, so it has to be something the model can
converge on. The global maximum stress is not an acceptable choice when the
model contains a re-entrant corner, a fixed edge, a point load, or a sharp
contact end, because the stress there grows with every mesh refinement. Pick
one of:

- a stress averaged or path-linearized over a named region at least one wall
  thickness away from any singular feature,
- a displacement at a named point,
- a reaction force or moment at a support.

If your geometry contains a singular feature, say where it is, and report the
peak there beside your chosen quantity as you refine the mesh.

| Item | Your model |
|---|---|
| Geometry as modeled, and what you removed | <fillets kept? threads suppressed?> |
| Material, and where the property came from | <e.g. 6061-T6, MatWeb, E = 68.9 GPa> |
| Loads | <magnitude, direction, where applied> |
| Boundary conditions | <what is fixed, and why that is what the real part sees> |
| Element type and mesh, **with the element count** | <element count, element order, local refinement> |
| Quantity of interest and its first-pass value | <which quantity, value, units, and where on the part> |

**Agreement tolerance, declared in advance:** <for example, "within 15% of the
hand-calc value">

Write that tolerance down **before** you compare the two numbers, and justify
it. A tolerance chosen after seeing both is worth nothing. A first-pass number
that disagrees is a finding, and diagnosing it is what P4 is for.

**Screenshot:** <mesh plus result plot, captioned>

---

**Keep the model defensible.** Model a shaft, a bracket, a carrier plate, a
bolted joint, or a simple housing region with properties you can source. Do not
model battery cells, motor commutators, gear-tooth contact, or unidentified
glass-filled polymers: those need material data and contact physics beyond this
course.
