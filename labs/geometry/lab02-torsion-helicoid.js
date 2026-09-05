// helicoid.js -- 45-degree fracture helicoid for the chalk torsion demo.
// Run from DesignModeler: File > Run Script.  Model units must be MILLIMETER.
//
// Geometry: unwrap the cylinder surface at radius r and a helix becomes a straight
// line rising p per 2*pi*r of run, so the angle to the axis is atan(2*pi*r/p).
// 45 degrees therefore needs p = 2*pi*r = 31.4159 mm at r = 5 mm.
// Over a 90 mm path (5 mm of overshoot at each end) that is 90/31.4159 = 2.8648 turns.
//
// NOTE the surface is 45 degrees only at the OUTER radius; a helicoid has constant
// pitch, so the local angle falls to 26.6 deg at r = 2.5 and 0 on the axis. That is
// physically right: the crack initiates at the surface, where the stress is highest.
//
// HANDEDNESS: the fracture surface is normal to sigma1, so its trace on the OD follows
// the sigma3 (compressive) trajectory -- the OPPOSITE hand to the tensile helix. For a
// moment about +Z the tensile helix is right-handed, so the break spiral is LEFT-handed
// and Turns must be NEGATIVE. Verify against the Maximum Principal vector plot: the
// helicoid edge must run PERPENDICULAR to the red arrows.

var R     = 5.0;                    // cylinder radius, mm
var Rx    = 6.0;                    // radial overshoot so the surface clears the OD
var Z0    = -5.0;                   // path start (below the cylinder)
var LEN   = 90.0;                   // path length (80 mm bar + 5 mm each end)
var PITCH = 2.0 * Math.PI * R;      // 31.41593 mm  -> exactly 45 deg at r = R
var TURNS = -(LEN / PITCH);         // negative = left-handed (see note above)

// ---- PATH: a line along global Z, sketched on the YZ plane -------------------
// On YZPlane the sketch X axis is global Y and sketch Y is global Z.
var YZ = agb.GetYZPlane();
agb.SetActivePlane(YZ);
var pth   = new Object();
pth.Plane = agb.GetActivePlane();
pth.Sk    = pth.Plane.NewSketch();
pth.Sk.Name = "PathSk";
with (pth.Sk) { pth.Ln = Line(0.0, Z0, 0.0, Z0 + LEN); }
pth.Plane.EvalDimCons();
agb.Regen();

// ---- PROFILE: a radial line on an XY plane offset to the path start ----------
// The path start must lie in the profile plane or the sweep comes out malformed.
var XY = agb.GetXYPlane();
var pl = agb.PlaneFromPlane(XY);
pl.AddTransform(agc.XformZOffset, Z0);
agb.Regen();
agb.SetActivePlane(pl);
var prf   = new Object();
prf.Plane = agb.GetActivePlane();
prf.Sk    = prf.Plane.NewSketch();
prf.Sk.Name = "BladeSk";
with (prf.Sk) { prf.Ln = Line(0.0, 0.0, Rx, 0.0); }
prf.Plane.EvalDimCons();
agb.Regen();

// ---- SWEEP the open profile with twist -> a helicoid SURFACE -----------------
// agb.Sweep(Operation, Profile, Path, Alignment, Scale, Turns, Walled, Thin1, Thin2)
// Walled = Yes with both thicknesses 0 is what makes it a surface rather than a solid.
// Frozen keeps it as its own body so it cannot merge into the cylinder.
var Helicoid = agb.Sweep(agc.Frozen, prf.Sk, pth.Sk, agc.AlignGlobal,
                         1.0, TURNS, agc.Yes, 0.0, 0.0);
agb.Regen();
