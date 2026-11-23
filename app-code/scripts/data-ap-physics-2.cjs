// AP Physics 2 — fluids/thermodynamics, electricity/magnetism, optics/modern physics. Spec for scripts/gen-us-elementary.cjs.
const P = (kind, name, statement) => [kind, name, statement];
const S = (reasoning, marks, markCode = "A", working) => ({ reasoning, marks, markCode, ...(working ? { working } : {}) });
const mcq = (difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const num = (difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const op = (difficulty, totalMarks, stem, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const lesson = (slug, title, goal, standards, vocab, concept) => ({ slug, title, goal, standards, vocab, concept });

const apPhysics2 = {
  id: "ap-physics-2",
  exportName: "apPhysics2",
  prefix: "app2",
  title: "AP Physics 2",
  shortTitle: "AP Phys 2",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description:
    "Fluids and thermodynamics, electricity and magnetism, optics, and quantum and nuclear physics — the algebra-based AP Physics 2 curriculum.",
  ap: { exam: "physics-2" },
  units: [
    {
      id: "app2-u1",
      title: "Fluids and Thermodynamics",
      description: "Fluid statics and dynamics, heat transfer, ideal gas laws, and thermodynamic processes.",
      lessons: [
        lesson("fluid-statics", "Fluid Statics and Dynamics", "I CAN apply pressure, buoyancy, and fluid flow principles.", ["FLU-1"],
          [["Pressure", "$P = \\frac{F}{A}$ — force per unit area; in fluids $P = P_0 + \\rho gh$."], ["Pascal's principle", "Pressure applied to confined fluid transmitted equally throughout."], ["Archimedes' principle", "Buoyant force = weight of displaced fluid: $F_b = \\rho_{fluid} V g$."], ["Continuity equation", "$A_1 v_1 = A_2 v_2$ — flow rate constant for incompressible fluid."], ["Bernoulli's equation", "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$ — energy conservation for fluids."]],
          {
            title: "Fluids",
            skill: "Apply pressure, buoyancy, and flow equations.",
            sections: [
              ["Fluid statics", "Pressure increases with depth: $P = P_0 + \\rho gh$ — that's why dams are thicker at the bottom. **Pascal's principle**: pressure applied to enclosed fluid transmits equally — the basis of hydraulic lifts and brakes. **Archimedes' principle**: buoyant force equals weight of displaced fluid — objects float when $F_b \\ge mg$."],
              ["Fluid dynamics", "For steady flow of incompressible fluid, **continuity** $A_1v_1 = A_2v_2$ conserves volume flow — narrow pipes speed up. **Bernoulli's equation** $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$ is energy conservation: faster flow means lower pressure (Venturi effect, airplane lift)."],
            ],
            formulas: [
              ["Pressure at depth", "$P = P_0 + \\rho gh$"],
              ["Buoyancy", "$F_b = \\rho_{fluid} V_{disp} g$"],
              ["Continuity", "$A_1 v_1 = A_2 v_2$"],
              ["Bernoulli", "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$"],
            ],
            worked: {
              problem: "Object displaces $0.002$ m³ of water ($\\rho = 1000$ kg/m³). Buoyant force?",
              solution: "$F_b = \\rho V g = 1000 \\times 0.002 \\times 9.8 = 19.6$ N upward.",
            },
            questions: [
              mcq("foundation", 1, "Pressure in a fluid increases with ___.", [["a", "volume"], ["b", "depth"], ["c", "temperature only"], ["d", "surface area"]], "b",
                [P("theorem", "$P = P_0 + \\rho gh$", "Pressure grows with depth $h$.")],
                [S("Deeper fluid means more weight pressing down — pressure rises linearly with depth.", 1, "M")], "Depth", ["Thinking pressure is uniform throughout a fluid."]),
              mcq("core", 1, "A pipe narrows from $A_1 = 0.02$ m² to $A_2 = 0.005$ m². If $v_1 = 2$ m/s, $v_2 = $?", [["a", "$0.5$ m/s"], ["b", "$2$ m/s"], ["c", "$8$ m/s"], ["d", "$4$ m/s"]], "c",
                [P("theorem", "Continuity", "$A_1v_1 = A_2v_2$.")],
                [S("$v_2 = \\frac{0.02 \\times 2}{0.005} = \\frac{0.04}{0.005} = 8$ m/s.", 1, "M")], "$8$ m/s", ["Multiplying areas instead of using the ratio."]),
              num("core", 2, "A $0.5$ m³ object is fully submerged in water ($\\rho = 1000$). Buoyant force? ($g = 9.8$). Enter N.", [{ label: "$F_b$", answer: 4900 }],
                [P("method", "Archimedes", "$F_b = \\rho V g = 1000 \\times 0.5 \\times 9.8$.")],
                [S("$F_b = 4900$ N upward.", 1, "M"), S("$F_b = 4900$ N.", 1, "B")], "$4900$ N", ["Using object's density instead of fluid density."]),
              op("challenge", 3, "Explain why a ship floats even though it's made of steel (denser than water), using Archimedes' principle.",
                [P("theorem", "Archimedes", "$F_b = $ weight of displaced fluid."), P("concept", "Hull design", "Shape displaces huge volume of water.")],
                [S("The ship's hull encloses air — its AVERAGE density (steel + air) is less than water.", 1, "M"), S("It displaces a volume of water whose weight exceeds the ship's total weight — $F_b > mg$.", 1, "M"), S("Net upward force makes it float; cargo loading reduces freeboard until $F_b = mg$ at the waterline.", 1, "B")], "$F_b = $ weight of displaced water $\\ge mg$", ["Saying 'steel floats' — it's the average density with enclosed air that matters."]),
            ],
          }),
        lesson("heat-thermo", "Heat and Thermodynamics", "I CAN apply heat transfer, gas laws, and thermodynamic processes.", ["THM-1"],
          [["Heat", "Energy transferred due to temperature difference — not 'contained' in objects."], ["Specific heat", "$Q = mc\\Delta T$ — energy to change temperature."], ["Conduction", "Heat transfer through direct contact — solids, metals best."], ["Convection", "Heat transfer by fluid circulation — liquids/gases."], ["Radiation", "Heat transfer by electromagnetic waves — needs no medium."], ["Ideal gas law", "$PV = nRT$ — relates pressure, volume, temperature, moles."], ["First law of thermo", "$\\Delta U = Q - W$ — internal energy change = heat in minus work done."]],
          {
            title: "Heat and thermodynamics",
            skill: "Apply heat equations, gas laws, and energy conservation.",
            sections: [
              ["Heat transfer", "**Conduction**: molecular collisions pass energy (best in metals). **Convection**: fluid circulation carries heat (boiling water, weather). **Radiation**: EM waves — works in vacuum (sunlight). All three drive systems toward thermal equilibrium."],
              ["Gas laws and thermo", "$PV = nRT$ links gas variables — at constant T, $P \\propto 1/V$ (Boyle); at constant P, $V \\propto T$ (Charles). **First law**: $\\Delta U = Q - W$ — heat added minus work done equals internal energy change. Isothermal ($\\Delta T = 0$, $\\Delta U = 0$), adiabatic (no heat exchange), isobaric, isochoric are the four standard processes."],
            ],
            formulas: [
              ["Heat", "$Q = mc\\Delta T$"],
              ["Ideal gas", "$PV = nRT$"],
              ["First law", "$\\Delta U = Q - W$"],
            ],
            worked: {
              problem: "How much heat raises $2$ kg of water ($c = 4186$ J/kg·K) by $10$°C?",
              solution: "$Q = mc\\Delta T = 2 \\times 4186 \\times 10 = 83{,}720$ J $\\approx 83.7$ kJ.",
            },
            questions: [
              mcq("foundation", 1, "Heat always transfers ___.", [["a", "hot to cold"], ["b", "cold to hot"], ["c", "randomly"], ["d", "only upward"]], "a",
                [P("theorem", "2nd law direction", "Spontaneous heat flow is hot $\\to$ cold.")],
                [S("Heat flows spontaneously from higher to lower temperature — reversing requires work (refrigerators).", 1, "M")], "Hot to cold", ["Thinking heat rises like a substance — direction is temperature-determined."]),
              mcq("core", 1, "In an isothermal process, ___.", [["a", "$\\Delta U > 0$"], ["b", "$\\Delta T = 0$ and $\\Delta U = 0$"], ["c", "$Q = 0$"], ["d", "$W = 0$"]], "b",
                [P("definition", "Isothermal", "Constant temperature — ideal gas internal energy depends only on T.")],
                [S("$\\Delta T = 0 \\Rightarrow \\Delta U = 0$; heat in equals work out ($Q = W$).", 1, "M")], "(b)", ["Confusing isothermal with adiabatic ($Q=0$)."]),
              num("core", 2, "A gas at constant temperature has $P_1 = 2$ atm, $V_1 = 3$ L. If compressed to $V_2 = 1$ L, find $P_2$ (Boyle's law). Enter atm.", [{ label: "$P_2$", answer: 6 }],
                [P("method", "Boyle's law", "$P_1V_1 = P_2V_2$ at constant T.")],
                [S("$P_2 = \\frac{2 \\times 3}{1} = 6$ atm.", 1, "M"), S("$P_2 = 6$ atm.", 1, "B")], "$6$ atm", ["Inverting the proportion or using Charles's law."]),
              op("challenge", 3, "Use the first law of thermodynamics to explain why a gas heats up when compressed adiabatically.",
                [P("theorem", "First law", "$\\Delta U = Q - W$."), P("definition", "Adiabatic", "$Q = 0$ — no heat exchange.")],
                [S("Adiabatic means $Q = 0$, so $\\Delta U = -W$.", 1, "M"), S("Compressing the gas means work is done ON it — $W < 0$ in the convention where $W$ is work done BY gas.", 1, "M"), S("$\\Delta U = -W > 0$ — internal energy rises, temperature increases. This is why diesel engines need no spark plug.", 1, "B")], "$\\Delta U = -W > 0$ — compression heats gas", ["Sign confusion on $W$ — clarify work done ON vs BY the gas."]),
            ],
          }),
      ],
    },
    {
      id: "app2-u2",
      title: "Electricity, Magnetism, and Electromagnetic Waves",
      description: "Electric fields and potential, capacitance, circuits with RC, magnetic fields, and EM waves.",
      lessons: [
        lesson("electric-fields-potential", "Electric Fields and Potential", "I CAN compute electric fields, potential, and capacitance.", ["ELE-1"],
          [["Electric field", "$\\vec{E} = \\frac{\\vec{F}}{q}$ — force per unit charge; field lines show direction."], ["Point charge field", "$E = k\\frac{|q|}{r^2}$ — inverse-square, radially outward/inward."], ["Electric potential", "$V = \\frac{U}{q}$ — potential energy per charge; voltage = potential difference."], ["Point charge potential", "$V = k\\frac{q}{r}$ — scalar, no direction."], ["Capacitor", "Stores charge: $Q = CV$; parallel plate $C = \\frac{\\epsilon_0 A}{d}$."]],
          {
            title: "Electric fields and potential",
            skill: "Compute fields, potentials, and capacitor behavior.",
            sections: [
              ["Fields vs potential", "**Electric field** $\\vec{E}$ is a vector — force per charge, superposes as vectors, field lines show direction. **Electric potential** $V$ is a scalar — energy per charge, superposes as scalars. They're related: $\\vec{E} = -\\nabla V$ — field points in direction of decreasing potential (like height vs slope)."],
              ["Capacitors", "Store charge $Q = CV$ where $C$ is capacitance (farads). Parallel plate: $C = \\frac{\\epsilon_0 A}{d}$ — bigger plates or smaller gap means more capacitance. Energy stored $U = \\frac{1}{2}CV^2 = \\frac{1}{2}QV$. Dielectrics (insulators) increase $C$ by reducing effective field."],
            ],
            formulas: [
              ["Point charge E", "$E = k\\frac{|q|}{r^2}$"],
              ["Point charge V", "$V = k\\frac{q}{r}$"],
              ["Capacitor", "$Q = CV$; $U = \\frac{1}{2}CV^2$"],
            ],
            worked: {
              problem: "Capacitor $C = 10$ $\\mu$F charged to $V = 50$ V. Stored energy?",
              solution: "$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(2500) = 0.0125$ J $= 12.5$ mJ.",
            },
            questions: [
              mcq("foundation", 1, "Electric field is ___.", [["a", "scalar"], ["b", "vector — force per unit charge"], ["c", "energy per charge"], ["d", "charge itself"]], "b",
                [P("definition", "$\\vec{E}$", "Vector quantity: force per test charge.")],
                [S("$E$ has magnitude and direction — it's $F/q$, a vector.", 1, "M")], "Vector (force/charge)", ["Confusing $E$ (vector) with $V$ (scalar potential)."]),
              mcq("core", 1, "Doubling the distance from a point charge, the field strength ___.", [["a", "halves"], ["b", "quarters"], ["c", "doubles"], ["d", "unchanged"]], "b",
                [P("theorem", "$E = kq/r^2$", "Inverse-square — distance squared in denominator.")],
                [S("$r \\to 2r$ gives $E \\to E/4$ — inverse-square law.", 1, "M")], "Quarters", ["Thinking it's inverse-linear like potential ($1/r$)."]),
              num("core", 2, "A $2$ $\\mu$C charge sits $0.5$ m from a point. Find $E$ ($k = 9 \\times 10^9$). Enter N/C.", [{ label: "$E$", answer: 72000 }],
                [P("method", "$E = kq/r^2$", "$")],
                [S("$E = \\frac{9 \\times 10^9 \\times 2 \\times 10^{-6}}{0.25} = \\frac{18000}{0.25} = 72{,}000$ N/C.", 1, "M"), S("$E = 72{,}000$ N/C.", 1, "B")], "$72000$ N/C", ["Using $r$ instead of $r^2$ or wrong power of ten."]),
              op("challenge", 3, "Explain the relationship between electric field and electric potential, including their mathematical connection.",
                [P("definition", "Field", "$E$ = force per charge, vector."), P("definition", "Potential", "$V$ = energy per charge, scalar."), P("theorem", "$\\vec{E} = -\\nabla V$", "Field is negative gradient of potential.")],
                [S("Field $\\vec{E}$ tells you the force a charge would feel; potential $V$ tells you the energy it would have.", 1, "M"), S("$\\vec{E} = -\\nabla V$ — field points in direction of steepest potential decrease, like downhill slope.", 1, "M"), S("Equipotential surfaces are perpendicular to field lines; moving along a field line decreases potential.", 1, "B")], "$\\vec{E} = -\\nabla V$; field points downhill in potential", ["Treating them as interchangeable or ignoring the vector/scalar distinction."]),
            ],
          }),
        lesson("rc-circuits-em", "RC Circuits and Electromagnetic Waves", "I CAN analyze RC circuits and describe EM wave properties.", ["ELC-2"],
          [["Capacitor in DC", "Blocks steady current; charges to $Q = CV$ over time."], ["RC time constant", "$\\tau = RC$ — time to charge to $\\sim 63\\%$; $5\\tau$ for full charge."], ["Charging curve", "$Q(t) = Q_{max}(1 - e^{-t/RC})$ — exponential approach."], ["EM wave", "Oscillating $\\vec{E}$ and $\\vec{B}$ perpendicular to each other and propagation."], ["EM spectrum", "Radio $<$ microwave $<$ IR $<$ visible $<$ UV $<$ X-ray $<$ gamma — increasing frequency/energy."], ["Speed of light", "$c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\approx 3 \\times 10^8$ m/s in vacuum."]],
          {
            title: "RC circuits and EM waves",
            skill: "Analyze capacitor charging and describe EM radiation.",
            sections: [
              ["RC circuits", "A capacitor in series with resistor charges exponentially: $Q(t) = CV(1 - e^{-t/RC})$. The **time constant** $\\tau = RC$ sets the pace — after one $\\tau$, charge reaches $\\sim 63\\%$; after $5\\tau$, effectively full. Discharging follows the same exponential decay."],
              ["Electromagnetic waves", "Changing electric fields induce magnetic fields and vice versa — self-propagating waves needing no medium. $\\vec{E}$, $\\vec{B}$, and propagation are mutually perpendicular. All EM waves travel at $c \\approx 3 \\times 10^8$ m/s in vacuum. The spectrum orders by wavelength/frequency: radio (longest) to gamma (shortest, most energetic)."],
            ],
            formulas: [
              ["RC charging", "$Q(t) = Q_{max}(1 - e^{-t/RC})$"],
              ["Time constant", "$\\tau = RC$"],
              ["EM wave", "$c = f\\lambda$; $E \\perp B \\perp$ propagation"],
            ],
            worked: {
              problem: "$R = 1000$ $\\Omega$, $C = 100$ $\\mu$F. Time constant? Time to $63\\%$ charge?",
              solution: "$\\tau = RC = 1000 \\times 100 \\times 10^{-6} = 0.1$ s. After $\\tau = 0.1$ s, capacitor is $\\sim 63\\%$ charged; $5\\tau = 0.5$ s for full.",
            },
            questions: [
              mcq("foundation", 1, "The time constant of an RC circuit is ___.", [["a", "$R + C$"], ["b", "$RC$"], ["c", "$R/C$"], ["d", "$1/RC$"]], "b",
                [P("definition", "$\\tau = RC$", "Product of resistance and capacitance.")],
                [S("$\\tau = RC$ sets the charging timescale — bigger R or C means slower.", 1, "M")], "$RC$", ["Adding instead of multiplying R and C."]),
              mcq("core", 1, "In an EM wave, the electric and magnetic fields are ___.", [["a", "parallel"], ["b", "perpendicular to each other and to propagation"], ["c", "antiparallel"], ["d", "random"]], "b",
                [P("definition", "EM wave", "Transverse wave: $E \\perp B \\perp$ direction.")],
                [S("EM waves are transverse — all three directions mutually perpendicular.", 1, "M")], "Perpendicular", ["Thinking EM waves are longitudinal like sound."]),
              num("core", 2, "A $470$ $\\Omega$ resistor and $10$ $\\mu$F capacitor form an RC circuit. Find $\\tau$. Enter seconds.", [{ label: "$\\tau$", answer: 0.0047 }],
                [P("method", "$\\tau = RC$", "$")],
                [S("$\\tau = 470 \\times 10 \\times 10^{-6} = 0.0047$ s.", 1, "M"), S("$\\tau = 0.0047$ s.", 1, "B")], "$0.0047$ s", ["Using mF or forgetting micro conversion."]),
              op("challenge", 3, "Order these by increasing frequency: radio waves, visible light, gamma rays, X-rays, microwaves. Then explain what determines an EM wave's energy.",
                [P("concept", "EM spectrum", "Radio $<$ microwave $<$ visible $<$ X-ray $<$ gamma."), P("theorem", "$E = hf$", "Photon energy proportional to frequency.")],
                [S("Order: radio $<$ microwaves $<$ visible light $<$ X-rays $<$ gamma rays.", 1, "M"), S("Photon energy $E = hf$ — higher frequency means more energetic photons.", 1, "M"), S("Gamma rays are most energetic (and dangerous); radio least. Wavelength and frequency are inversely related via $c = f\\lambda$.", 1, "B")], "Radio < microwave < visible < X-ray < gamma; $E = hf$", ["Reversing the spectrum order or thinking wavelength determines energy."]),
            ],
          }),
      ],
    },
    {
      id: "app2-u3",
      title: "Optics, Quantum, and Nuclear Physics",
      description: "Reflection and refraction, lenses, wave optics, photoelectric effect, and nuclear processes.",
      lessons: [
        lesson("geometric-optics", "Geometric Optics", "I CAN apply reflection, refraction, and lens equations.", ["OPT-1"],
          [["Law of reflection", "Angle of incidence = angle of reflection, measured from normal."], ["Refraction", "Bending of light crossing media; $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$ (Snell's law)."], ["Index of refraction", "$n = \\frac{c}{v}$ — measures optical density."], ["Thin lens equation", "$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$ — focal length, object/image distances."], ["Magnification", "$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$ — negative = inverted."]],
          {
            title: "Geometric optics",
            skill: "Apply reflection, refraction, and lens formulas.",
            sections: [
              ["Reflection and refraction", "Light reflects at angle $=$ incidence (from normal). Crossing into a denser medium ($n_2 > n_1$), light bends TOWARD the normal — **Snell's law** $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$. Beyond the critical angle, total internal reflection traps light — the basis of fiber optics."],
              ["Lenses", "Convex (converging) lenses focus parallel rays to a real focal point; concave (diverging) spread them. Thin lens equation $\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$ with sign conventions (real images positive). Magnification $m = -d_i/d_o$ — negative means inverted."],
            ],
            formulas: [
              ["Snell's law", "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$"],
              ["Thin lens", "$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$"],
              ["Magnification", "$m = -\\frac{d_i}{d_o}$"],
            ],
            worked: {
              problem: "Light goes from air ($n_1 = 1$) into glass ($n_2 = 1.5$) at $30^\\circ$ incidence. Find refraction angle.",
              solution: "$\\sin\\theta_2 = \\frac{1 \\times \\sin 30^\\circ}{1.5} = \\frac{0.5}{1.5} = 0.333$, so $\\theta_2 \\approx 19.5^\\circ$ — bends toward normal.",
            },
            questions: [
              mcq("foundation", 1, "Light entering a denser medium bends ___.", [["a", "away from normal"], ["b", "toward normal"], ["c", "not at all"], ["d", "backward"]], "b",
                [P("theorem", "Snell's law", "Higher $n$ means smaller angle — toward normal.")],
                [S("Slower speed in denser medium bends light toward the normal.", 1, "M")], "Toward normal", ["Reversing the refraction direction rule."]),
              mcq("core", 1, "A convex lens with $f = 10$ cm forms an image of an object at $d_o = 30$ cm. Find $d_i$.", [["a", "$5$ cm"], ["b", "$15$ cm"], ["c", "$10$ cm"], ["d", "$-15$ cm"]], "b",
                [P("method", "Thin lens", "$\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o} = \\frac{1}{10} - \\frac{1}{30}$.")],
                [S("$\\frac{1}{d_i} = \\frac{3-1}{30} = \\frac{2}{30} = \\frac{1}{15}$, so $d_i = 15$ cm — real image beyond focal point.", 1, "M")], "$15$ cm", ["Adding instead of subtracting in the lens equation."]),
              num("core", 2, "Object at $d_o = 20$ cm, image at $d_i = 60$ cm. Find focal length. Enter cm.", [{ label: "$f$", answer: 15 }],
                [P("method", "Thin lens", "$\\frac{1}{f} = \\frac{1}{20} + \\frac{1}{60} = \\frac{3+1}{60} = \\frac{4}{60} = \\frac{1}{15}$.")],
                [S("$f = 15$ cm.", 1, "M"), S("$f = 15$ cm.", 1, "B")], "$15$ cm", ["Using $d_o - d_i$ or wrong reciprocal."]),
              op("challenge", 3, "Explain total internal reflection and give one practical application.",
                [P("concept", "Critical angle", "Beyond $\\theta_c$, all light reflects internally."), P("theorem", "Snell", "$\\sin\\theta_c = n_2/n_1$ going to less dense medium.")],
                [S("When light goes from denser to less dense medium, refraction angle exceeds incidence angle.", 1, "M"), S("At the critical angle $\\theta_c$ (where refracted ray = $90^\\circ$), and beyond it, all light reflects — total internal reflection.", 1, "M"), S("Applications: fiber optic cables (endoscopes, internet), diamond sparkle (high $n$ gives small critical angle), mirages.", 1, "B")], "Beyond critical angle, all light reflects internally", ["Thinking TIR requires mirrors — it's purely refractive."]),
            ],
          }),
        lesson("wave-quantum", "Wave Optics and the Photoelectric Effect", "I CAN explain interference, diffraction, and photon energy.", ["OPT-2"],
          [["Interference", "Superposition of waves — constructive (in phase) or destructive (out of phase)."], ["Diffraction", "Bending of waves around obstacles/apertures — significant when gap $\\sim \\lambda$."], ["Double-slit", "Bright fringes at $d\\sin\\theta = m\\lambda$; dark at $(m + \\frac{1}{2})\\lambda$."], ["Photoelectric effect", "Light ejects electrons from metal only above threshold frequency."], ["Photon", "Quantum of light: $E = hf$; also $E = \\frac{hc}{\\lambda}$."], ["Work function", "$\\phi$ — minimum energy to eject electron; $KE_{max} = hf - \\phi$."]],
          {
            title: "Wave optics and photons",
            skill: "Apply interference conditions and the photon model.",
            sections: [
              ["Wave optics", "Light behaves as a wave: **interference** creates bright/dark fringes where waves add constructively/destructively. In double-slit, bright fringes satisfy $d\\sin\\theta = m\\lambda$ ($m = 0, \\pm1, \\pm2, \\ldots$). **Diffraction** spreads waves through apertures — single-slit minima at $a\\sin\\theta = m\\lambda$. Wave-particle duality: light is both wave and photons."],
              ["Photoelectric effect", "Einstein explained it with photons: each photon has energy $E = hf$. Electrons eject only if $hf \\ge \\phi$ (work function) — explaining the threshold frequency. Higher frequency means more energetic electrons ($KE_{max} = hf - \\phi$), NOT more electrons — intensity only affects electron COUNT."],
            ],
            formulas: [
              ["Double-slit bright", "$d\\sin\\theta = m\\lambda$"],
              ["Photon energy", "$E = hf = \\frac{hc}{\\lambda}$"],
              ["Photoelectric", "$KE_{max} = hf - \\phi$"],
            ],
            worked: {
              problem: "Photon with $\\lambda = 500$ nm. Energy? ($h = 6.63 \\times 10^{-34}$, $c = 3 \\times 10^8$)",
              solution: "$E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34})(3 \\times 10^8)}{500 \\times 10^{-9}} = \\frac{1.989 \\times 10^{-25}}{5 \\times 10^{-7}} = 3.98 \\times 10^{-19}$ J.",
            },
            questions: [
              mcq("foundation", 1, "Bright fringes in double-slit interference occur when ___.", [["a", "waves cancel"], ["b", "$d\\sin\\theta = m\\lambda$"], ["c", "$d\\sin\\theta = (m+\\frac{1}{2})\\lambda$"], ["d", "light is bright"]], "b",
                [P("theorem", "Double-slit", "Constructive interference at path difference $= m\\lambda$.")],
                [S("Bright fringes need waves in phase — path difference integer wavelengths.", 1, "M")], "(b)", ["Confusing bright and dark fringe conditions."]),
              mcq("core", 1, "In the photoelectric effect, increasing light INTENSITY (same frequency) ___.", [["a", "increases electron KE"], ["b", "increases number of ejected electrons"], ["c", "ejects electrons below threshold"], ["d", "no effect"]], "b",
                [P("concept", "Photon flux", "Intensity = photons per second; each photon ejects at most one electron.")],
                [S("More photons = more electrons ejected, but each has same max KE (set by frequency).", 1, "M")], "(b)", ["The classic error: intensity affects count, frequency affects energy."]),
              num("core", 2, "Work function $\\phi = 2.0$ eV. Photon energy $hf = 3.0$ eV. Find $KE_{max}$. Enter eV.", [{ label: "$KE_{max}$", answer: 1.0 }],
                [P("method", "$KE_{max} = hf - \\phi$", "$")],
                [S("$KE_{max} = 3.0 - 2.0 = 1.0$ eV.", 1, "M"), S("$KE_{max} = 1.0$ eV.", 1, "B")], "$1.0$ eV", ["Adding instead of subtracting the work function."]),
              op("challenge", 3, "Explain why the photoelectric effect couldn't be explained by the wave model and how photons resolved it.",
                [P("concept", "Wave model failure", "Predicted any frequency should eject electrons given enough intensity."), P("theorem", "Photon model", "$E = hf$ quantized — threshold frequency required.")],
                [S("Wave model predicted electron ejection at ANY frequency given enough intensity/time — energy accumulates gradually.", 1, "M"), S("Experiment showed a threshold frequency: below it, NO electrons regardless of intensity; above it, immediate ejection.", 1, "M"), S("Einstein's photons deliver energy in discrete packets $hf$ — each electron needs one photon with $hf \\ge \\phi$, explaining threshold and instant ejection.", 1, "B")], "Photon model: $E = hf$ explains threshold frequency", ["Saying 'light is particles' without connecting to the threshold observation."]),
            ],
          }),
        lesson("nuclear-modern", "Nuclear and Modern Physics", "I CAN describe nuclear decay, mass-energy, and quantum concepts.", ["MOD-1"],
          [["Mass defect", "Difference between nucleus mass and sum of nucleon masses — converted to binding energy."], ["Binding energy", "Energy released when nucleus forms; $E = \\Delta m c^2$; higher per nucleon = more stable."], ["Fission", "Heavy nucleus splits releasing energy — chain reaction in reactors."], ["Fusion", "Light nuclei combine releasing energy — sun's power source."], ["De Broglie", "Matter has wavelength: $\\lambda = \\frac{h}{p}$ — confirmed by electron diffraction."], ["Heisenberg", "Uncertainty principle: $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$."]],
          {
            title: "Nuclear and modern physics",
            skill: "Relate mass defect to energy and describe quantum behavior.",
            sections: [
              ["Nuclear energy", "A nucleus's mass is LESS than its nucleons' total — the difference (mass defect) became binding energy via $E = \\Delta m c^2$. **Binding energy per nucleon** peaks near iron-56 — that's why fission (heavy $\\to$ medium) and fusion (light $\\to$ medium) both release energy toward iron."],
              ["Quantum concepts", "De Broglie proposed matter has wave nature: $\\lambda = h/p$ — confirmed when electrons diffract. **Heisenberg uncertainty**: can't know position and momentum simultaneously with arbitrary precision — fundamental limit, not measurement flaw. Quantum tunneling lets particles cross barriers classically forbidden — explains alpha decay and scanning tunneling microscopes."],
            ],
            formulas: [
              ["Mass-energy", "$E = \\Delta m c^2$"],
              ["Binding energy/nucleon", "Peaks near Fe-56"],
              ["De Broglie", "$\\lambda = \\frac{h}{p}$"],
              ["Uncertainty", "$\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$"],
            ],
            worked: {
              problem: "Why does iron-56 have the highest binding energy per nucleon?",
              solution: "Iron sits at the peak of the binding-energy curve — nuclei lighter than iron release energy by fusing toward it; heavier nuclei release energy by fissioning toward it.",
            },
            questions: [
              mcq("foundation", 1, "Binding energy per nucleon is highest for ___.", [["a", "hydrogen"], ["b", "iron-56"], ["c", "uranium"], ["d", "all equal"]], "b",
                [P("concept", "BE curve", "Peaks near Fe-56 — most stable nucleus.")],
                [S("The binding energy per nucleon curve peaks around iron-56 — the most stable configuration.", 1, "M")], "$\\text{Iron-56}$", ["Thinking heavier nuclei are more stable — binding per nucleon actually drops after iron."]),
              mcq("core", 1, "De Broglie's hypothesis states that ___.", [["a", "light is only a wave"], ["b", "matter has wave properties"], ["c", "electrons orbit randomly"], ["d", "energy is continuous"]], "b",
                [P("theorem", "De Broglie", "$\\lambda = h/p$ — all matter has wavelength.")],
                [S("Every particle has an associated wavelength inversely proportional to momentum — confirmed by electron diffraction.", 1, "M")], "(b)", ["Thinking only light has wave properties."]),
              num("core", 2, "An electron ($p = 9.11 \\times 10^{-31}$ kg·m/s) — find de Broglie wavelength ($h = 6.63 \\times 10^{-34}$). Enter m (scientific notation OK).", [{ label: "$\\lambda$", answer: 7.28e-4, tolerance: 0.01e-4 }],
                [P("method", "$\\lambda = h/p$", "$")],
                [S("$\\lambda = \\frac{6.63 \\times 10^{-34}}{9.11 \\times 10^{-31}} = 7.28 \\times 10^{-4}$ m — wait, electron momentum is much smaller typically. Using given $p$: $\\lambda \\approx 7.28 \\times 10^{-4}$ m. (For typical electron $v \\sim 10^6$ m/s, $\\lambda \\sim$ nm scale.)", 1, "M"), S("$\\lambda \\approx 7.28 \\times 10^{-4}$ m with given values.", 1, "B")], "$7.28 \\times 10^{-4}$ m", ["Inverting $h/p$ to $p/h$."]),
              op("challenge", 3, "Explain how binding energy per nucleon explains why both fission and fusion release energy.",
                [P("concept", "BE curve", "Energy released moving TOWARD the iron-56 peak."), P("concept", "Fission", "Heavy nuclei split toward medium mass."), P("concept", "Fusion", "Light nuclei combine toward medium mass.")],
                [S("Binding energy per nucleon peaks at iron-56 — the most stable nucleus.", 1, "M"), S("Heavy nuclei (uranium) fission into medium-mass fragments CLOSER to iron — higher BE/nucleon, releasing energy.", 1, "M"), S("Light nuclei (hydrogen) fuse into heavier ones approaching iron — also gaining BE/nucleon, releasing energy. Both move 'uphill' toward stability.", 1, "B")], "Both fission and fusion move toward Fe-56 peak, releasing energy", ["Thinking only fission releases energy or that heavier is always more stable."]),
            ],
          }),
      ],
    },
  ],
};

module.exports = { courses: [apPhysics2] };
