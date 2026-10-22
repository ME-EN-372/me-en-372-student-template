# Lab 8: fatigue of an engine piston

Lab 8 meets Thu Oct 22. Follow [the walkthrough video](https://youtu.be/uGvj-_W3958). The start file is [`geometry/lab08-piston-full.step`](../geometry/lab08-piston-full.step).

**What to hand in (required):** this file, in your own repository, with three screenshots and five values filled in below. Upload the screenshots to this folder and replace each `(add screenshot)` with one. Then paste the link to this folder on the Canvas Lab 8 submission. Due Wed Oct 28 at 5:00 pm Mountain Time.

## How to do the lab

1. In Workbench, add a Static Structural system and double-click Engineering Data. Click Engineering Data Sources, then General Materials, then the plus sign next to Aluminum Alloy. Click Engineering Data Sources again: Structural Steel and Aluminum Alloy should both be listed. If they are not, add Aluminum Alloy again.
2. Right-click Geometry, choose Import Geometry, pick [`lab08-piston-full.step`](../geometry/lab08-piston-full.step), and open Model.
3. Set Units to Metric (mm, kg, N, s, mV, mA). Click Mesh, set Sizing > Resolution to 5 (leave Element Size at Default), and generate the mesh.
4. Insert these under Static Structural:
   - a Cylindrical Support on both pin bores (hold Ctrl to pick the second bore);
   - a Frictionless Support on the outside face of the piston, which lets it slide up and down (Y) but not move in X or Z, the way a piston moves in its cylinder;
   - a Pressure of 15 MPa on the four faces of the crown (the top).
5. Insert Equivalent (von-Mises) Stress under Solution and solve. Check that the maximum (about 225 MPa) is below the Tensile Yield Strength of both materials (click each one under Materials to see it). Ansys does not check this for you, and the fatigue analysis only applies if the piston does not yield.
6. Under Materials, insert a Material Assignment, scope it to the body, and set Material to Structural Steel. If the graphics window goes blank, close Mechanical and open Model again.
7. Insert Fatigue > Fatigue Tool under Solution. Change Loading Type from Fully Reversed to Ratio and set Loading Ratio to -0.4, so each cycle runs from the full 15 MPa down to -0.4 times it. Leave Mean Stress Theory at None (the default).
8. Under the Fatigue Tool, insert Life, Damage and Safety Factor. Set Design Life to 40000 cycles on Damage and on Safety Factor, then solve. Damage is the fraction of the fatigue life used up in 40,000 cycles.
9. For Aluminum Alloy, change the Material Assignment to Aluminum Alloy and solve again. You do not need a new analysis system.

The largest Life and Safety Factor values Ansys shows are limits, not results: Life stops at the end of the material's stress-life (S-N) curve, and Safety Factor stops at 15.

## 1. The loading case: the Fatigue Tool's Worksheet, Structural Steel

Narrow the Worksheet panel until both of its charts fit, then capture the whole white area, including the Mean Stress Correction Theory chart. You do not need this one for Aluminum Alloy.

(add screenshot)

## 2. Safety Factor, Structural Steel, at 40,000 cycles: the whole graphics window, legend readable

(add screenshot)

## 3. Safety Factor, Aluminum Alloy, at 40,000 cycles: the whole graphics window, legend readable

(add screenshot)

## Values

| Material | Minimum Life (cycles) | Maximum Damage at 40,000 cycles | Minimum Safety Factor at 40,000 cycles |
|---|---|---|---|
| Structural Steel | ___ | ___ | ___ |
| Aluminum Alloy | ___ | not needed | ___ |
