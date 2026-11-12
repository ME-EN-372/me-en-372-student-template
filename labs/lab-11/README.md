# Lab 11: moving parts in Ansys, a gear pair and a slider-crank

Lab 11 meets Thu Nov 12. You set up two Transient Structural models in Ansys Mechanical, each made of parts that move against each other: a pair of spur gears in mesh, and a single-cylinder engine with its crank, connecting rod and piston. In each one you choose which parts are rigid and which are flexible, connect the parts with joints (and the gear teeth with a frictionless contact), apply a motion and a load that change with time, and size the mesh and the time steps so the model solves in a reasonable time. If your teardown product has parts that move against each other, these are the steps that model it.

Follow [the Lab 11 walkthrough video](https://youtu.be/Fc33NVJzr68) (22 min). The start files are [`geometry/dyn6-gear-pair.step`](../geometry/dyn6-gear-pair.step) for the gears and [`geometry/dyn4-slider-crank.step`](../geometry/dyn4-slider-crank.step) for the engine.

**Set up both models, and do not solve the gear pair.** Its solve takes about an hour, so the video shows one that was solved ahead of time (21:02). Solving the slider-crank is optional: it took about 5 minutes in the video, and its results are at 20:35.

**What to hand in (required):** this file, in your own repository, with the two screenshots below. Upload them to this folder and replace each `(add screenshot)` with one. Then paste the link to this folder on the Canvas Lab 11 submission. Due Wed Nov 18 at 5:00 pm Mountain Time.

## Where each step is in the video

| Video time | Step |
|---|---|
| 0:37 | Gear pair: import [`dyn6-gear-pair.step`](../geometry/dyn6-gear-pair.step) and open Model |
| 1:03 | Named selections: the teeth of each gear, and the root fillets of gear 2 |
| 3:53 | Gear 1 rigid, gear 2 flexible; the tooth contact changed from Bonded to Frictionless |
| 4:51 | A Body-Ground Revolute joint on each gear |
| 5:40 | Mesh: 3 mm on the teeth, 0.5 mm on the fillets where the teeth engage (a sphere of influence), linear elements |
| 9:38 | Analysis settings, then a Rotation on gear 1 and a Moment on gear 2 that resists it |
| 12:12 | Solution items: Equivalent Stress, Maximum Principal Stress on the fillets, a joint probe |
| 13:07 | Slider-crank: import [`dyn4-slider-crank.step`](../geometry/dyn4-slider-crank.step); crank and piston rigid, connecting rod flexible |
| 14:37 | Four joints: crank to ground, crank to rod, rod to piston, and the piston sliding in its cylinder |
| 17:01 | Mesh, the crank speed ramp and the analysis settings |
| 19:16 | Check the crank speed table again: changing the end time moves its rows |
| 19:54 | Solution items: Equivalent Stress, Normal Stress along the rod, a joint probe at the wrist pin |
| 21:33 | What to hand in |

## What each screenshot shows

Each screenshot is the Outline, the tree on the left of the Mechanical window, with every branch expanded so all of its items show. Every item above Solution has a green check mark, which means it is fully defined; the mesh gets its green check once it is generated. The items under Solution keep their yellow lightning bolt because they have not been solved, and that is expected. A question mark means an item still needs an input, most often a selection that was never applied.

## 1. Gear pair: the Outline, set up

(add screenshot)

## 2. Slider-crank: the Outline, set up

(add screenshot)
