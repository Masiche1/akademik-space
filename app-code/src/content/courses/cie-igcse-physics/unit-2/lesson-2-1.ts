import type { Lesson } from "../../../types.ts";

export const lessonp21: Lesson = {
  id: "ciep-u2-lesson-2-1",
  code: "2-1",
  title: "Forces, Momentum and Pressure",
  goal: "I CAN describe forces, momentum, pressure and their calculations.",
  standards: ["0655 2.1", "0655 2.2", "0655 2.3"],
  vocabulary: [
    { term: "Force", definition: "Push or pull measured in newtons (N); changes motion or shape." },
    { term: "Weight", definition: "Force of gravity on a mass: W = mg." },
    { term: "Mass", definition: "Amount of matter (kg); weight depends on gravity." },
    { term: "Momentum", definition: "Mass × velocity (kg m/s); vector." },
    { term: "Impulse", definition: "Force × time = change in momentum." },
    { term: "Pressure", definition: "Force per unit area (Pa = N/m²)." },
    { term: "Density", definition: "Mass per unit volume (kg/m³)." },
    { term: "Friction", definition: "Force opposing relative motion between surfaces." },
  ],
  concepts: [
    {
      id: "ciep-u2-forces-momentum",
      title: "Forces and momentum",
      skill: "Calculate weight, momentum, impulse and describe Newton's laws.",
      lesson: {
        sections: [
          {
            heading: "Weight and momentum",
            body: "**W = mg** (g ≈ 9.8 or 10 N/kg).\n**p = mv** (momentum).\n**F = ma** (Newton's 2nd law).\n**Impulse = FΔt = Δ(mv)** — same momentum change, longer time = smaller force (crumple zones).",
          },
          {
            heading: "Newton's laws",
            body: "1. Object stays at rest/uniform motion unless acted on by force.\n2. F = ma.\n3. Every action has equal opposite reaction.",
          },
          {
            heading: "Friction",
            body: "Opposes motion; useful (walking, braking) or wasteful (heat). Reduced by lubricants, bearings, streamlining.",
          },
        ],
        keyFormulas: [
          { name: "Weight", statement: "$W = mg$" },
          { name: "Momentum", statement: "$p = mv$" },
          { name: "Newton's 2nd", statement: "$F = ma$" },
          { name: "Impulse", statement: "$F\\Delta t = \\Delta(mv)$" },
        ],
        workedExample: {
          problem: "A 2 kg mass accelerates at 3 m/s². Find the force.",
          solution: "F = ma = 2 × 3 = 6 N.",
        },
      },
      questions: [
        {
          id: "ciep-u2-forces-momentum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of force?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Joule" }, { id: "b", text: "Newton" }, { id: "c", text: "Pascal" }, { id: "d", text: "Watt" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Force unit", statement: "Newton (N)." }],
            steps: [{ reasoning: "Recall.", working: "\\text{N}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Newton",
            commonErrors: ["Joule = energy."],
          },
        },
        {
          id: "ciep-u2-forces-momentum-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the weight of a 5 kg mass (g = 9.8 N/kg).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Weight", statement: "W = mg = 5×9.8 = 49 N." }],
            steps: [
              { reasoning: "Apply formula.", working: "W = 5 \\times 9.8", marks: 1, markCode: "M" },
              { reasoning: "Answer.", working: "49 \\text{N}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "49 N",
            commonErrors: ["Using mass as weight — weight needs g."],
          },
        },
        {
          id: "ciep-u2-forces-momentum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 1000 kg car accelerates at 2 m/s². Calculate the force needed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "F=ma", statement: "F = 1000×2 = 2000 N." }],
            steps: [
              { reasoning: "Apply F=ma.", working: "F = 1000 \\times 2", marks: 1, markCode: "M" },
              { reasoning: "= 2000 N.", marks: 1, markCode: "A" },
              { reasoning: "State with units.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2000 N (2 kN)",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "ciep-u2-forces-momentum-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how crumple zones reduce injury in collisions using impulse.",
          parts: [
            { label: "a", prompt: "State the impulse-momentum relationship.", marks: 3 },
            { label: "b", prompt: "Explain how increasing collision time helps.", marks: 3 },
            { label: "c", prompt: "Give one other safety feature using this principle.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Impulse", statement: "FΔt = Δ(mv); longer time → smaller force." }],
            steps: [
              { part: "a", reasoning: "Impulse = F×time.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "= change in momentum.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Same Δp, longer Δt.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Force reduced.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Crumple zone extends stopping time.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Airbags / seatbelts.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Same principle.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) FΔt=Δp (b) longer time→smaller force (c) airbags",
            commonErrors: ["In (b) saying 'reduces momentum' — it reduces FORCE."],
          },
        },
      ],
    },
    {
      id: "ciep-u2-pressure",
      title: "Pressure and density",
      skill: "Calculate pressure and density and relate them to practical situations.",
      lesson: {
        sections: [
          {
            heading: "Pressure",
            body: "**P = F/A** (Pa = N/m²). Same force over smaller area → higher pressure. Why sharp knives/nails work; why tracks/snowshoes spread load.",
          },
          {
            heading: "Density",
            body: "**ρ = m/V** (kg/m³). Float if ρ_object < ρ_fluid. Water = 1000 kg/m³; ice ~917 → floats.",
          },
          {
            heading: "Pressure in fluids",
            body: "Increases with depth (P = ρgh). Explains dam design (thicker at base), diving, barometers.",
          },
        ],
        keyFormulas: [
          { name: "Pressure", statement: "$P = \\dfrac{F}{A}$" },
          { name: "Density", statement: "$\\rho = \\dfrac{m}{V}$" },
          { name: "Fluid pressure", statement: "$P = \\rho gh$" },
        ],
        workedExample: {
          problem: "A 100 N force acts on 0.5 m². Calculate pressure.",
          solution: "P = 100/0.5 = 200 Pa.",
        },
      },
      questions: [
        {
          id: "ciep-u2-pressure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of pressure?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Newton" }, { id: "b", text: "Pascal" }, { id: "c", text: "Joule" }, { id: "d", text: "Watt" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Pressure unit", statement: "Pascal (Pa)." }],
            steps: [{ reasoning: "Recall.", working: "\\text{Pa}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Pascal",
            commonErrors: ["Newton = force."],
          },
        },
        {
          id: "ciep-u2-pressure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 50 N force acts on 2 m². Calculate pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Pressure", statement: "P = F/A = 50/2 = 25 Pa." }],
            steps: [
              { reasoning: "Apply formula.", working: "P = \\frac{50}{2}", marks: 1, markCode: "M" },
              { reasoning: "Answer.", working: "25 \\text{Pa}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25 Pa",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "ciep-u2-pressure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a sharp knife cuts better than a blunt one.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Pressure", statement: "Smaller area → higher pressure for same force." }],
            steps: [
              { reasoning: "Same force applied.", marks: 1, markCode: "M" },
              { reasoning: "Sharp edge = smaller area.", marks: 1, markCode: "M" },
              { reasoning: "P = F/A → higher pressure.", marks: 1, markCode: "M" },
              { reasoning: "Conclude cuts easier.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A sharp knife has a much smaller cutting area, so the same force produces much higher pressure, cutting through material easily.",
            commonErrors: ["Saying 'more force' — same force, smaller area."],
          },
        },
        {
          id: "ciep-u2-pressure-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain why objects float or sink based on density.",
          parts: [
            { label: "a", prompt: "State the density formula.", marks: 2 },
            { label: "b", prompt: "Explain floating condition.", marks: 3 },
            { label: "c", prompt: "Give an example and explain.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Density", statement: "ρ=m/V; floats if ρ_obj < ρ_fluid." }],
            steps: [
              { part: "a", reasoning: "ρ = m/V.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Units kg/m³.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Object floats if less dense than fluid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Buoyancy supports weight.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete condition.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ice floats on water (917<1000).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Wood floats, stone sinks.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Any valid example.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ρ=m/V (b) floats if ρ<fluid (c) ice floats on water",
            commonErrors: ["In (b) saying 'lighter' — it's density not weight."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u2-forces-pressure-notes",
      title: "Forces, momentum and pressure — revision notes",
      summary: "W=mg, p=mv, F=ma, impulse, P=F/A, ρ=m/V.",
      sections: [
        {
          heading: "Key facts",
          body: "W=mg, p=mv, F=ma, impulse FΔt=Δp. P=F/A (smaller area→higher P). ρ=m/V; floats if ρ<fluid. Fluid pressure P=ρgh increases with depth.",
        },
        {
          heading: "Exam technique",
          body: "- Newton's 2nd: F=ma.\n- Impulse: same momentum change, longer time = smaller force.",
        },
      ],
    },
  ],
};
