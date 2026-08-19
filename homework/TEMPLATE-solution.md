# HW <n>: Problem <k>

> Copy this file to `homework/hw<nn>/problem-<k>.md` and fill it in. These seven
> headings are the BYU ME structured problem-solving format, and they are the
> same skeleton the exams are graded against. Most of the points live in the
> process, not the final number.
>
> Each week's assignment says which problems need the **full** format and which
> may be abbreviated. An abbreviated problem still needs, at minimum, a sketch
> or free-body diagram, the governing equations written symbolically before
> numbers go in, and a boxed numerical answer with units.

## Given

<What the problem states. Numbers with units, no interpretation yet.>

## Find

<Exactly what is asked for, with the units it should come out in.>

## Sketch

<Insert your figure. A photograph of a clear hand sketch is fine, this is not a
CAD exercise.>

![Free-body diagram for problem <k>](figures/hw<nn>-p<k>-fbd.jpg)

Label every force and moment, mark the coordinate system, and show the
dimensions you will actually use.

## Assumptions

1. <e.g. Weight of the member is negligible next to the 2 kN applied load.>
2. <e.g. The pin at A is frictionless, so it carries no moment.>
3. <e.g. Material is ductile, so the distortion-energy criterion applies.>

State the ones that matter. An assumption you did not notice you made is the
usual reason two people get different answers.

## Equations

<The governing equations in symbols, named, before any number goes in. If an
equation needs a table value, name the table here: "Shigley Table 6-2, machined
surface: a = 4.51, b = -0.265".>

<Write equations in LaTeX between dollar signs. GitHub typesets them, so your
grader reads an equation rather than a line of code. Inline, `$\sigma = F/A$`
gives $\sigma = F/A$. On its own line, put it between double dollar signs:>

$$\sigma_{max} = \frac{M c}{I}$$

<Define every symbol you use the first time it appears, including its units.
An equation whose symbols are not defined is not yet an answer.>

## Solve

**Step 1, <what this step establishes>**

$$\sigma = \frac{F}{A} = \frac{4500\ \mathrm{N}}{2.83\times10^{-5}\ \mathrm{m^2}} = 159\ \mathrm{MPa}$$

**Step 2, <...>**

<Repeat. One step, one idea. Carry units through every substitution: put them
inside the equation with `\mathrm{}`, as above, so they are part of the work
rather than a note beside it.>

**Answer: <quantity> = <value> <units>**

## Sanity check

<Two or three sentences. Is the magnitude physically plausible? Does a limiting
case behave right: does the answer move the way you expect if the load doubles,
or if the section gets thicker? Is the factor of safety in a believable range?>

## AI use on this problem

<One line. "None." is a complete answer. Otherwise: what you asked and what you
used. Homework is an Explore-category assessment under the course AI-use policy,
so AI as a study partner is allowed. The formal AI Use Statement appendix, with
verbatim prompts and your validation, is required on the design-project
deliverables rather than here.>
