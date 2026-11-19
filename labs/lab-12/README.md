# Lab 12: bolt preload in Ansys

Lab 12 meets Thu Nov 19. You put a preload on the bolt that clamps two plates together, solve, and cut the model in half to see the stress inside the bolt. It is a short model, and the rest of the lab period is for working on your project with your team.

Follow [the Lab 12 walkthrough video](https://youtu.be/JA4tHRAp6wg) (4 min). The start file is [`geometry/lab12-bolted-joint.step`](../geometry/lab12-bolted-joint.step).

**What to hand in (required):** this file, in your own repository, with the screenshot below. Upload the screenshot to this folder and replace `(add screenshot)` with it. Then paste the link to this file on the Canvas Lab 12 submission. Due Tue Nov 24 at 5:00 pm Mountain Time, one day earlier than usual because Wed Nov 25 is a no-class day.

## Where each step is in the video

| Video time | Step |
|---|---|
| 0:07 | Download [`lab12-bolted-joint.step`](../geometry/lab12-bolted-joint.step) from your repository |
| 0:33 | In Workbench, add a Static Structural system, import the geometry, and open Model |
| 0:59 | Hide the two plates so only the bolt shows, then insert a Bolt Pretension on the bolt's shank: 10,000 N |
| 1:24 | Mesh: Resolution 5, then generate |
| 1:35 | Show all bodies again, then a Fixed Support on two faces, which only holds the model in place |
| 2:06 | Solution: Equivalent Stress and Total Deformation, then Solve |
| 2:21 | A Section Plane through the middle of the bolt. Click an axis on the triad first so the view lines up |
| 3:02 | Edges, then the undeformed wireframe, and the deformation scale at Auto Scale. This view is your screenshot |
| 3:45 | Optional: Total Deformation, no wireframe, and the mesh shown |

## Equivalent stress, cut through the middle of the bolt

Capture the whole graphics window with the legend readable: Equivalent Stress on the section plane, the wireframe showing the original shape, and the deformation at Auto Scale.

(add screenshot)
