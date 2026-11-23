import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "phys12-u3-lesson-3-1",
  code: "3-1",
  title: "Simple Harmonic Motion",
  goal: "I CAN describe simple harmonic motion, calculate periods of springs and pendulums, and apply energy conservation to oscillating systems.",
  standards: ["HS-PS2-1"],
  vocabulary: [
    { term: "Simple harmonic motion (SHM)", definition: "Motion where restoring force is proportional to displacement: $F = -kx$." },
    { term: "Restoring force", definition: "Force that pulls an object back toward equilibrium, proportional to displacement." },
    { term: "Amplitude", definition: "Maximum displacement from equilibrium." },
    { term: "Period", definition: "Time for one complete oscillation." },
    { term: "Frequency", definition: "Number of oscillations per second (Hz); $f = 1/T$." },
    { term: "Angular frequency", definition: "$\\omega = 2\\pi f = \\sqrt{k/m}$ for spring." },
    { term: "Equilibrium position", definition: "Position where net force is zero." },
  ],
  concepts: [
    {
      id: "phys12-u3-shm-basics",
      title: "SHM fundamentals",
      skill: "Identify SHM conditions and calculate period, frequency and energy in oscillating systems.",
      lesson: {
        sections: [
          {
            heading: "What is SHM?",
            body: `**Simple harmonic motion** occurs when the restoring force is proportional to displacement and directed toward equilibrium:

$$F = -kx$$

The negative sign means the force opposes displacement — it always pulls back toward equilibrium. Examples: mass on a spring, pendulum (small angles), vibrating string.`,
          },
          {
            heading: "Period and frequency",
            body: `For a mass-spring system:

$$T = 2\\pi\\sqrt{\\frac{m}{k}}, \\quad f = \\frac{1}{T} = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$$

where $k$ is spring constant and $m$ is mass. Heavier mass or weaker spring → longer period.`,
          },
          {
            heading: "Energy in SHM",
            body: `Energy oscillates between kinetic and potential:
- At equilibrium: maximum KE, zero PE
- At maximum displacement: zero KE, maximum PE = $\\frac{1}{2}kA^2$

Total energy $E = \\frac{1}{2}kA^2$ is constant (ignoring friction).`,
          },
        ],
        keyFormulas: [
          { name: "SHM condition", statement: "$F = -kx$" },
          { name: "Spring period", statement: "$T = 2\\pi\\sqrt{m/k}$" },
          { name: "Total energy", statement: "$E = \\frac{1}{2}kA^2$" },
        ],
        workedExample: {
          problem: "A 0.50 kg mass on a spring with $k = 200$ N/m oscillates. What is the period?",
          solution: "$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.50/200} = 2\\pi\\sqrt{0.0025} = 2\\pi(0.05) = 0.314$ s.",
        },
      },
      questions: [
        {
          id: "phys12-u3-shm-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the condition for simple harmonic motion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force is constant" },
              { id: "b", text: "Force is proportional to displacement and opposite in direction" },
              { id: "c", text: "Velocity is constant" },
              { id: "d", text: "Acceleration is zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "SHM", statement: "$F = -kx$ — restoring force proportional to displacement." }],
            steps: [{ reasoning: "SHM requires $F = -kx$: force proportional to displacement, opposite direction.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $F = -kx$",
            commonErrors: ["Thinking any oscillation is SHM."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u3-shm-basics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 0.80 kg mass on a spring with $k = 320$ N/m oscillates. Calculate the period.",
          response: { type: "numeric", parts: [{ label: "T", answer: 0.314, unit: "s", tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Spring period", statement: "$T = 2\\pi\\sqrt{m/k}$" }],
            steps: [
              { reasoning: "$T = 2\\pi\\sqrt{0.80/320} = 2\\pi\\sqrt{0.0025} = 2\\pi(0.05) = 0.314$ s.", working: "T=2pi*sqrt(0.80/320)=0.314", marks: 2, markCode: "M" },
              { reasoning: "T ≈ 0.314 s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.314 s",
            commonErrors: ["Using $k/m$ instead of $m/k$.", "Forgetting 2π."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u3-shm-basics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A spring-mass system has amplitude 0.10 m and $k = 100$ N/m. Calculate the total energy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "SHM energy", statement: "$E = \\frac{1}{2}kA^2$" }],
            steps: [
              { reasoning: "$E = \\frac{1}{2}(100)(0.10)^2 = \\frac{1}{2}(100)(0.01) = 0.50$ J.", working: "E=0.5*100*0.01=0.50", marks: 1, markCode: "M" },
              { reasoning: "Total energy = 0.50 J.", marks: 1, markCode: "A" },
              { reasoning: "At equilibrium, all energy is kinetic; at max displacement, all is potential.", marks: 1, markCode: "R" },
              { reasoning: "Energy oscillates between KE and PE but total remains constant.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "0.50 J",
            commonErrors: ["Using amplitude instead of amplitude squared.", "Thinking energy is lost each cycle."],
            examinerNote: "M1 calculation, A1 answer, R1+B1 explanation.",
          },
        },
        {
          id: "phys12-u3-shm-basics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A 0.30 kg mass on a spring ($k = 150$ N/m) oscillates with amplitude 0.20 m.",
          parts: [
            { label: "a", prompt: "Calculate the period.", marks: 2 },
            { label: "b", prompt: "Calculate the total energy.", marks: 2 },
            { label: "c", prompt: "Calculate the maximum speed.", marks: 3 },
            { label: "d", prompt: "Calculate the maximum acceleration.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Spring period", statement: "$T = 2\\pi\\sqrt{m/k}$" },
              { kind: "formula", name: "SHM energy", statement: "$E = \\frac{1}{2}kA^2 = \\frac{1}{2}mv_{max}^2$" },
              { kind: "formula", name: "SHM acceleration", statement: "$a_{max} = \\omega^2 A$" },
            ],
            steps: [
              { reasoning: "$T = 2\\pi\\sqrt{0.30/150} = 2\\pi\\sqrt{0.002} = 2\\pi(0.0447) = 0.281$ s.", working: "T=2pi*sqrt(0.30/150)=0.281", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$E = \\frac{1}{2}(150)(0.20)^2 = \\frac{1}{2}(150)(0.04) = 3.0$ J.", working: "E=0.5*150*0.04=3.0", marks: 2, markCode: "M", part: "b" },
              { reasoning: "$v_{max} = \\sqrt{2E/m} = \\sqrt{2(3.0)/0.30} = \\sqrt{20} = 4.47$ m/s.", working: "v=sqrt(2*3.0/0.30)=4.47", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Answer: 4.47 m/s.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "$\\omega = 2\\pi/T = 2\\pi/0.281 = 22.4$ rad/s.", marks: 1, markCode: "M", part: "d" },
              { reasoning: "$a_{max} = \\omega^2 A = (22.4)^2(0.20) = 501 \\times 0.20 = 100.2$ m/s².", working: "a=w^2*A=100.2", marks: 1, markCode: "M", part: "d" },
              { reasoning: "Answer: ≈ 100 m/s².", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) 0.281 s (b) 3.0 J (c) 4.47 m/s (d) 100 m/s².",
            commonErrors: ["Confusing v_max with amplitude.", "Using wrong formula for acceleration."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u3-pendulum",
      title: "Pendulums and resonance",
      skill: "Analyze simple pendulums, calculate periods, and explain resonance.",
      lesson: {
        sections: [
          {
            heading: "Simple pendulum",
            body: `A **simple pendulum** consists of a mass (bob) on a string. For small angles (< 10°), the period is:

$$T = 2\\pi\\sqrt{\\frac{L}{g}}$$

where $L$ is string length. Remarkably, the period does NOT depend on the bob's mass or amplitude (for small angles).`,
          },
          {
            heading: "Pendulum vs spring",
            body: `| Property | Spring | Pendulum |
|----------|--------|----------|
| Period depends on | mass, k | length, g |
| Formula | $2\\pi\\sqrt{m/k}$ | $2\\pi\\sqrt{L/g}$ |
| Amplitude limit | none | < 10° |

A longer pendulum swings slower; a stronger spring oscillates faster.`,
          },
          {
            heading: "Resonance",
            body: "**Resonance** occurs when a driving force matches the natural frequency of a system, causing large amplitude oscillations. Examples: pushing a swing at the right rhythm, Tacoma Narrows Bridge collapse, wine glass shattering from sound.",
          },
        ],
        keyFormulas: [
          { name: "Pendulum period", statement: "$T = 2\\pi\\sqrt{L/g}$" },
          { name: "Frequency", statement: "$f = (1/2\\pi)\\sqrt{g/L}$" },
        ],
        workedExample: {
          problem: "A pendulum of length 1.0 m has what period on Earth?",
          solution: "$T = 2\\pi\\sqrt{1.0/9.81} = 2\\pi\\sqrt{0.102} = 2\\pi(0.319) = 2.01$ s — about 2 seconds, which is why grandfather clocks use ~1 m pendulums.",
        },
      },
      questions: [
        {
          id: "phys12-u3-pendulum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the period of a simple pendulum of length 1.0 m on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.0 s" },
              { id: "b", text: "2.0 s" },
              { id: "c", text: "4.0 s" },
              { id: "d", text: "0.5 s" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Pendulum period", statement: "$T = 2\\pi\\sqrt{L/g} = 2\\pi\\sqrt{1.0/9.81} \\approx 2.0$ s." }],
            steps: [{ reasoning: "$T \\approx 2.0$ s for 1 m pendulum.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 2.0 s",
            commonErrors: ["Thinking period depends on mass."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u3-pendulum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pendulum has period 2.0 s on Earth. What is its period on the Moon where $g = 1.62$ m/s²?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Pendulum period", statement: "$T \\propto \\sqrt{1/g}$" }],
            steps: [
              { reasoning: "$T_{moon}/T_{earth} = \\sqrt{g_{earth}/g_{moon}} = \\sqrt{9.81/1.62} = \\sqrt{6.06} = 2.46$.", marks: 1, markCode: "M" },
              { reasoning: "$T_{moon} = 2.0 \\times 2.46 = 4.92$ s.", working: "T=2.0*2.46=4.92", marks: 1, markCode: "M" },
              { reasoning: "Period ≈ 4.9 s — pendulums swing slower on the Moon.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.9 s",
            commonErrors: ["Using linear ratio instead of square root.", "Inverting the g ratio."],
            examinerNote: "M1 ratio, M1 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u3-pendulum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a pendulum's period is independent of the bob's mass.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Pendulum physics", statement: "Restoring force and inertia both scale with mass." }],
            steps: [
              { reasoning: "The restoring force is $F = -mg\\sin\\theta \\approx -mg\\theta$ — proportional to m.", marks: 1, markCode: "R" },
              { reasoning: "The inertia (resistance to acceleration) is also proportional to m.", marks: 1, markCode: "R" },
              { reasoning: "Since both force and inertia scale with m, the mass cancels in $T = 2\\pi\\sqrt{L/g}$.", marks: 1, markCode: "B" },
              { reasoning: "Therefore period depends only on length and g, not mass.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mass cancels because both restoring force and inertia are proportional to m.",
            commonErrors: ["Thinking heavier bobs swing faster.", "Ignoring the small-angle approximation."],
            examinerNote: "R2 reasoning, B1 explanation, A1 conclusion.",
          },
        },
        {
          id: "phys12-u3-pendulum-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A child's swing has natural period 3.0 s. A parent pushes the swing at regular intervals.",
          parts: [
            { label: "a", prompt: "What pushing frequency produces resonance?", marks: 2 },
            { label: "b", prompt: "Explain what happens if the parent pushes at twice the natural frequency.", marks: 3 },
            { label: "c", prompt: "The swing's amplitude grows to dangerous levels. Explain the physics.", marks: 3 },
            { label: "d", prompt: "Suggest two ways to prevent dangerous resonance.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resonance", statement: "Driving frequency = natural frequency → maximum amplitude." },
              { kind: "principle", name: "Damping", statement: "Friction removes energy; resonance occurs when input exceeds losses." },
            ],
            steps: [
              { reasoning: "Resonance occurs when driving frequency equals natural frequency: $f = 1/T = 1/3.0 = 0.333$ Hz.", working: "f=1/3.0=0.333", marks: 2, markCode: "M", part: "a" },
              { reasoning: "At twice the natural frequency ($f = 0.667$ Hz), each push occurs at the same point in the cycle, reinforcing the motion — but it's not the fundamental resonance.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Harmonics (2f, 3f...) can also cause resonance but with less efficient energy transfer — pushing at twice the natural frequency is a second-harmonic drive, not the strongest resonance condition.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "The amplitude grows because each push adds energy in phase with the motion; if energy input exceeds friction losses, amplitude increases.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "This is resonance — energy accumulates over many cycles.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Dangerous because amplitude can exceed safe limits, causing injury.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Ways to prevent: (1) vary the pushing frequency, (2) add damping (friction, air resistance).", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Accept reasonable suggestions: stop pushing, change rhythm, add friction.", marks: 1, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) 0.333 Hz (b) harmonic resonance possible (c) energy accumulates (d) vary frequency or add damping.",
            commonErrors: ["Thinking any frequency causes resonance.", "Ignoring damping."],
            examinerNote: "2+3+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys12-u3-fluids",
      title: "Fluid pressure and buoyancy",
      skill: "Apply pressure and buoyancy concepts to fluids in equilibrium.",
      lesson: {
        sections: [
          {
            heading: "Fluid pressure",
            body: `Pressure in a fluid is $P = F/A$. At depth $h$ below surface:

$$P = P_{atm} + \\rho gh$$

Pressure increases with depth and is the same in all directions at a given point. This is why dams are thicker at the bottom.`,
          },
          {
            heading: "Pascal's principle",
            body: `Pressure applied to an enclosed fluid is transmitted equally in all directions. This enables hydraulic systems: small force on small piston → large force on large piston:

$$F_1/A_1 = F_2/A_2$$

Hydraulic brakes and lifts use this principle.`,
          },
          {
            heading: "Buoyancy and Archimedes",
            body: `**Buoyant force** equals the weight of displaced fluid:

$$F_b = \\rho_{fluid} V_{displaced} g$$

An object floats if $F_b = mg$. Density determines float/sink: objects less dense than fluid float.`,
          },
        ],
        keyFormulas: [
          { name: "Pressure at depth", statement: "$P = P_{atm} + \\rho gh$" },
          { name: "Pascal", statement: "$F_1/A_1 = F_2/A_2$" },
          { name: "Buoyancy", statement: "$F_b = \\rho V g$" },
        ],
        workedExample: {
          problem: "A 0.50 m³ block of wood (density 600 kg/m³) is submerged in water (density 1000 kg/m³). Will it float? What fraction will be submerged?",
          solution: "Weight = $\\rho V g = 600 \\times 0.50 \\times 9.81 = 2943$ N. Buoyant force if fully submerged = $1000 \\times 0.50 \\times 9.81 = 4905$ N. Since $F_b > W$, it floats. Fraction submerged = $W/F_b = 2943/4905 = 0.60$ — 60% submerged.",
        },
      },
      questions: [
        {
          id: "phys12-u3-fluids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines whether an object floats or sinks in a fluid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Object's mass" },
              { id: "b", text: "Object's density compared to fluid" },
              { id: "c", text: "Object's volume" },
              { id: "d", text: "Object's shape" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Buoyancy", statement: "Object floats if density < fluid density." }],
            steps: [{ reasoning: "Density comparison determines floating; shape affects stability but not whether it floats.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Density comparison",
            commonErrors: ["Thinking heavier objects always sink."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys12-u3-fluids-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the pressure at a depth of 10 m in water (density 1000 kg/m³, $g = 9.81$ m/s², atmospheric pressure 101,325 Pa).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Pressure at depth", statement: "$P = P_{atm} + \\rho gh$" }],
            steps: [
              { reasoning: "$P = 101,325 + 1000 \\times 9.81 \\times 10 = 101,325 + 98,100 = 199,425$ Pa.", working: "P=101325+98100=199425", marks: 2, markCode: "M" },
              { reasoning: "P ≈ 199,000 Pa or about 2 atm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "199,425 Pa (about 2 atm)",
            commonErrors: ["Forgetting atmospheric pressure.", "Using wrong units for density."],
            examinerNote: "M2 calculation, A1 answer.",
          },
        },
        {
          id: "phys12-u3-fluids-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A hydraulic lift has pistons of area 0.02 m² and 0.50 m². What force on the small piston lifts a 1000 kg car on the large piston?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pascal", statement: "$F_1/A_1 = F_2/A_2$" },
            ],
            steps: [
              { reasoning: "Car weight: $F_2 = mg = 1000 \\times 9.81 = 9810$ N.", working: "F2=9810", marks: 1, markCode: "M" },
              { reasoning: "$F_1 = F_2 \\times (A_1/A_2) = 9810 \\times (0.02/0.50) = 9810 \\times 0.04 = 392$ N.", working: "F1=9810*0.04=392", marks: 2, markCode: "M" },
              { reasoning: "F₁ ≈ 392 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "392 N",
            commonErrors: ["Inverting the area ratio.", "Forgetting car's weight."],
            examinerNote: "M1 weight, M2 Pascal, A1 answer.",
          },
        },
        {
          id: "phys12-u3-fluids-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A ship of mass 50,000 kg floats in seawater (density 1025 kg/m³).",
          parts: [
            { label: "a", prompt: "Calculate the ship's weight.", marks: 1 },
            { label: "b", prompt: "Calculate the volume of seawater displaced when floating.", marks: 3 },
            { label: "c", prompt: "If the ship's hull volume is 60 m³, what fraction is submerged?", marks: 2 },
            { label: "d", prompt: "The ship enters fresh water (density 1000 kg/m³). Does it float higher or lower? Explain.", marks: 2 },
            { label: "e", prompt: "Calculate the additional volume displaced in fresh water.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = mg$" },
              { kind: "formula", name: "Buoyancy", statement: "$F_b = \\rho V g$; floating: $F_b = W$" },
            ],
            steps: [
              { reasoning: "$W = 50,000 \\times 9.81 = 490,500$ N.", working: "W=50000*9.81=490500", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Floating: $\\rho V g = mg$, so $V = m/\\rho = 50,000/1025 = 48.78$ m³.", working: "V=50000/1025=48.78", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Answer: ≈ 48.8 m³.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Fraction submerged: $48.78/60 = 0.813$ — about 81%.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Answer: ≈ 81%.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "In fresh water (less dense), the ship must displace MORE volume to get the same buoyant force, so it sits LOWER in the water.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "This is why ships ride lower in rivers than at sea.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Fresh water: $V = 50,000/1000 = 50$ m³. Additional volume = $50 - 48.78 = 1.22$ m³.", working: "V=50000/1000=50; delta=1.22", marks: 1, markCode: "M", part: "e" },
              { reasoning: "Answer: ≈ 1.2 m³ more.", marks: 1, markCode: "A", part: "e" },
            ],
            finalAnswer: "(a) 490,500 N (b) 48.8 m³ (c) 81% (d) lower in fresh water (e) 1.2 m³ more.",
            commonErrors: ["Using density instead of mass in buoyancy.", "Thinking ships float higher in fresh water."],
            examinerNote: "1+3+2+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
