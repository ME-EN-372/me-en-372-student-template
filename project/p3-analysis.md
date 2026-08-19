# P3: Analysis plan, hand calculations, preliminary FEA (due Fri Nov 13, 5:00 pm, 29 points)

**Team:** <names>  **Component:** <what you are analyzing>

Analyze **one** idealized load-bearing component: a bracket, lever, shaft, or
housing rib, not the whole product.

> **Prerequisite limit.** P3 may use only methods taught by **L31 (Fri Nov 13)**.
> Buckling is taught at L36 to L38, *after* this is due. If your component is a
> slender compression member, hypothesize buckling here and carry the
> Euler or Johnson calculation into P4, where it earns credit under "what the
> FEA adds".

## Idealization (5 points)

<Geometry, supports, and load case. State every simplification explicitly:
"the fillet is modelled as a sharp corner for the hand calculation", "the
housing is treated as rigid". A TA signs this off at Lab 9 (Thu Oct 29), and the
signed sheet is what earns these points.>

## Failure-mode hypothesis (4 points)

<Name **at least two** failure modes your component can actually reach, and for
each one name the criterion it is checked by and say why that mode is real for
this component.

**Static yielding is always one of them.** The second is whichever of fatigue,
buckling, joint separation, contact, or deflection your component's service
loading makes real.

**Ruling a mode out earns the same credit as checking one**, as long as the
reason is specific to your component. "The load is applied once at assembly and
never cycles, so fatigue is not a mode here" is a ruling-out. "Fatigue does not
apply" is not.

Keep the two questions separate: distortion energy is a static criterion and not
a fatigue one, and modified Goodman is a fatigue criterion and not a static
one.>

| Mode | Real or ruled out? | Criterion it is checked by | Why, specific to this component |
|---|---|---|---|
| Static yielding | | | |
| | | | |

## Hand calculations (8 points)

<Full structured problem-solving format at the critical section: given, find,
sketch, assumptions, symbolic equation, substitution with units, result, sanity
check. Same skeleton as your homework, used throughout rather than only at the
start.>

## Checks performed (5 points)

Fill in the rows your component's geometry and loading actually demand, and say
in the third column why each one applies or does not.

| Check | Result | Applies because |
|---|---|---|
| Static factor of safety | | |
| Fatigue factor of safety or life | | |
| Deflection | | |
| Joint or bearing check | | |

## Sanity, units, sensitivity (3 points)

<Which input you are least sure of, and what happens to the answer across its
plausible range. Carry units through every substitution.>

## Preliminary FEA model (4 points)

*Built at **Lab 10 (Thu Nov 5)** with TA support, a week before this is due, so
the model exists before the last fortnight of the semester. It does not have to
be converged and it does not have to agree with the hand calculation. It has to
run, be documented well enough that someone else could rebuild it, and be the
same component the calculations above are about.*

| Item | Your model |
|---|---|
| Geometry as modelled, and what you removed | <fillets kept? threads suppressed?> |
| Material, and where the property came from | <e.g. 6061-T6, MatWeb, E = 68.9 GPa> |
| Loads | <magnitude, direction, where applied> |
| Boundary conditions | <what is fixed, and why that is what the real part sees> |
| Element type and mesh, **with the element count** | <element count, element order, local refinement> |
| First-pass result for the quantity of interest | <value, units, and where on the part> |

**Agreement tolerance, declared in advance:** <for example, "within 15% of the
hand-calc peak stress">

Write that tolerance down **before** you compare the two numbers, and justify
it. A tolerance chosen after seeing both is worth nothing. A first-pass number
that disagrees is a finding, and diagnosing it is what P4 is for.

**Screenshot:** <mesh plus result plot, captioned>

---

**Keep the model defensible.** Model a shaft, a bracket, a carrier plate, a
bolted joint, or a simple housing region with properties you can source. Do not
model battery cells, motor commutators, gear-tooth contact, or unidentified
glass-filled polymers: those need material data and contact physics beyond this
course. If your first choice turns out to be one of those, change components at
Lab 9, not in December.
