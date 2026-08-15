# P3: Component analysis plan, hand calculations + preliminary FEA (due Fri Nov 13, 5:00 pm · 29 pts)

**Team:** <names>  **Component:** <what you are analyzing>

> Use only methods taught by **L31 (Fri Nov 13)**. Buckling is taught at
> L36-L38, *after* this is due, if your component is a slender compression
> member, hypothesize buckling here and carry the Euler/Johnson calculation into
> P4, where it earns credit under "what the FEA adds".

## Idealization

<Geometry, supports, and load case. Every simplification stated explicitly, 
"the fillet is modelled as a sharp corner for the hand calc", "the housing is
treated as rigid". TA-approved at Lab 9.>

## Failure-mode hypothesis

<Which **static failure theory** applies, and separately which **fatigue
criterion**, and why. These are different questions, distortion energy is not a
fatigue criterion, and modified Goodman is not a static one.>

## Hand calculations

<Full structured problem-solving format at the critical section. Symbolic first,
then numbers with units. Same skeleton as your homework.>

## Preliminary FEA model

*Built at **Lab 10 (Thu Nov 5)** with TA support, a week before this is due, so
the model exists before the last fortnight of the semester. It does not have to
be converged and it does not have to agree with the hand calc; it has to run, be
documented well enough that someone else could rebuild it, and be the same
component the calculations above are about.*

| Item | Your model |
|---|---|
| Geometry as modelled (and what you removed) | <fillets kept? threads suppressed?> |
| Material and where the property came from | <e.g. 6061-T6, MatWeb, E = 68.9 GPa> |
| Loads | <magnitude, direction, where applied> |
| Boundary conditions | <what is fixed, and why that is what the real part sees> |
| Element type / mesh | <element count, element order, local refinement> |
| First-pass result for the quantity of interest | <value + units + where on the part> |

**Agreement tolerance, declared in advance:** <e.g. "within 15% of the hand-calc
peak stress">. Write this before you compare the two numbers. A tolerance
chosen after seeing both is worth nothing.

**Screenshot:** <mesh + result plot, captioned>

## Checks performed

| Check | Result | Applies because |
|---|---|---|
| Static factor of safety | | |
| Fatigue factor of safety / life | | |
| Deflection | | |
| Joint / bearing check | | |

## Sanity, units, sensitivity

<Which input you are least sure of, and what happens to the answer across its
plausible range.>
