import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cils-u6-lesson-6-2",
  code: "6-2",
  title: "Gravity and free fall",
  goal: "I CAN explain gravitational force, weight vs mass, and free fall.",
  standards: ["0893 Physics: gravity"],
  vocabulary: [
    { term: "Mass", definition: "Amount of matter in object — measured in kg, constant." },
    { term: "Weight", definition: "Force of gravity on object — measured in N, varies with gravity." },
    { term: "Gravity", definition: "Force attracting masses toward each other — Earth's pull." },
    { term: "Free fall", definition: "Falling under gravity alone — no air resistance." },
    { term: "Terminal velocity", definition: "Constant speed when air resistance equals weight." },
    { term: "Gravitational field strength", definition: "Force per unit mass — ~10 N/kg on Earth." },
  ],
  concepts: [
    {
      id: "cils-u6-gravity",
      title: "Gravity and weight",
      skill: "Distinguish mass from weight and calculate weight using g.",
      lesson: {
        sections: [
          {
            heading: "Mass vs weight",
            body: "Mass = amount of matter (kg) — same everywhere. Weight = force of gravity (N) — varies with gravitational field strength.",
          },
          {
            heading: "Weight formula",
            body: "weight = mass × gravitational field strength (g)\n\nOn Earth: g ≈ 10 N/kg\n\nweight (N) = mass (kg) × 10",
          },
          {
            heading: "Gravity everywhere",
            body: "Moon has weaker gravity (~1/6 Earth) — same mass weighs less. Space = near-zero gravity — objects float.",
          },
        ],
        keyFormulas: [
          { name: "Weight", statement: "weight = mass × g; g ≈ 10 N/kg on Earth" },
        ],
        workedExample: {
          problem: "A 5 kg object on Earth. What's its weight?",
          solution: "weight = mass × g = 5 × 10 = 50 N.",
        },
      },
      questions: [
        {
          id: "cils-u6-grav-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of weight?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metre (m)" },
              { id: "b", text: "Joule (J)" },
              { id: "c", text: "Newton (N)" },
              { id: "d", text: "Kilogram (kg)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weight", statement: "Force measured in newtons." },
            ],
            steps: [
              { reasoning: "Weight is force — newtons.", working: "N", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Newton (N)",
            commonErrors: ["Choosing (b) — kg is mass."],
          },
        },
        {
          id: "cils-u6-grav-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 3 kg mass on Earth. Calculate weight (g=10 N/kg).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Weight", statement: "weight = mass × g = 3 × 10 = 30 N" },
            ],
            steps: [
              { reasoning: "weight = 3 × 10.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "= 30 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 N",
            commonErrors: ["Forgetting ×g — mass alone isn't weight."],
          },
        },
        {
          id: "cils-u6-grav-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why an astronaut weighs less on the Moon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gravity variation", statement: "Moon's g ≈ 1/6 Earth's — same mass, less weight." },
            ],
            steps: [
              { reasoning: "Moon has weaker gravitational field — g ≈ 1.6 N/kg.", working: "weaker g", marks: 1, markCode: "M" },
              { reasoning: "Same mass → weight = mass × g is smaller.", working: "weight less", marks: 1, markCode: "M" },
              { reasoning: "Mass unchanged — only weight (force) changes.", working: "mass same", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Moon's gravity is weaker — same mass weighs less.",
            commonErrors: ["Saying 'mass decreases' — mass is constant, weight changes."],
          },
        },
        {
          id: "cils-u6-grav-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse falling objects.",
          parts: [
            { label: "a", prompt: "Define free fall.", marks: 1 },
            { label: "b", prompt: "What forces act on a falling object in air?", marks: 2 },
            { label: "c", prompt: "Explain terminal velocity.", marks: 3 },
            { label: "d", prompt: "Why does a feather fall slower than a stone?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Free fall", statement: "Gravity accelerates; air resistance increases with speed → terminal velocity." },
            ],
            steps: [
              { part: "a", reasoning: "Falling under gravity only — no air resistance (or negligible).", working: "free fall", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gravity (down) + air resistance (up).", working: "two forces", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Speed increases → air resistance increases → balances weight → constant speed.", working: "terminal", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Feather has large surface area → high air resistance relative to weight → slower terminal velocity.", working: "surface area", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explanation correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) gravity only (b) gravity+air resistance (c) resistance=weight→constant speed (d) feather high resistance",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In vacuum feather=stone fall same speed — air resistance causes difference."],
          },
        },
        {
          id: "cils-u6-grav-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of mass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton (N)" },
              { id: "b", text: "Kilogram (kg)" },
              { id: "c", text: "Joule (J)" },
              { id: "d", text: "Pascal (Pa)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Mass unit", statement: "Mass measured in kilograms." },
            ],
            steps: [
              { reasoning: "kg = kilogram = mass.", working: "kg", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Kilogram (kg)",
            commonErrors: ["Choosing (b) — N is force/weight."],
          },
        },
        {
          id: "cils-u6-grav-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which quantity stays the same for an object whether it is on Earth, the Moon or in space?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass" },
              { id: "b", text: "The force of gravity on it" },
              { id: "c", text: "Gravitational field strength" },
              { id: "d", text: "Weight" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass vs weight", statement: "Mass is constant everywhere; weight depends on g." },
            ],
            steps: [
              { reasoning: "Mass = amount of matter — constant.", working: "mass constant", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Mass",
            commonErrors: ["Choosing (b) — weight changes with gravity."],
          },
        },
        {
          id: "cils-u6-grav-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The gravitational field strength on Earth is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$100\\ \\text{N/kg}$" },
              { id: "b", text: "$10\\ \\text{N/kg}$" },
              { id: "c", text: "$1\\ \\text{N/kg}$" },
              { id: "d", text: "$0\\ \\text{N/kg}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "g", statement: "Earth's g ≈ 10 N/kg — every kg weighs ~10 N." },
            ],
            steps: [
              { reasoning: "g ≈ 10 N/kg on Earth.", working: "10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $10\\ \\text{N/kg}$",
            commonErrors: ["Choosing (b) — that is closer to the Moon's value."],
          },
        },
        {
          id: "cils-u6-grav-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An object taken to the Moon will have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The same weight" },
              { id: "b", text: "Less mass and less weight" },
              { id: "c", text: "The same mass but less weight" },
              { id: "d", text: "More mass" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moon gravity", statement: "Moon's g ≈ 1.6 N/kg — about 1/6 of Earth's." },
            ],
            steps: [
              { reasoning: "Weaker gravity → less weight; mass unchanged.", working: "less weight", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Same mass, less weight",
            commonErrors: ["Choosing (b) — mass does not change."],
          },
        },
        {
          id: "cils-u6-grav-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Astronauts float inside the International Space Station mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gravity is very weak there — they and the station are in free fall together" },
              { id: "b", text: "Air pushes them upwards" },
              { id: "c", text: "Their mass becomes zero" },
              { id: "d", text: "There is no gravity anywhere in space" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Weightlessness", statement: "Orbit = continuous free fall; astronauts and station fall together." },
            ],
            steps: [
              { reasoning: "Weightlessness is free fall, not absence of gravity.", working: "free fall", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Free fall together — weightlessness",
            commonErrors: ["Choosing (b) — gravity still acts in orbit; they accelerate together."],
          },
        },
        {
          id: "cils-u6-grav-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Weight is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The volume of an object" },
              { id: "b", text: "The force of gravity acting on a mass" },
              { id: "c", text: "The amount of matter in an object" },
              { id: "d", text: "The speed of a falling object" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weight", statement: "Weight = gravitational force on an object = mass × g." },
            ],
            steps: [
              { reasoning: "Weight is a force caused by gravity.", working: "force", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Gravitational force on mass",
            commonErrors: ["Choosing (b) — that is mass."],
          },
        },
        {
          id: "cils-u6-grav-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A $2\\ \\text{kg}$ mass is taken from Earth to the Moon. Its mass on the Moon is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12\\ \\text{kg}$" },
              { id: "b", text: "$0.33\\ \\text{kg}$" },
              { id: "c", text: "$0\\ \\text{kg}$" },
              { id: "d", text: "$2\\ \\text{kg}$ — unchanged" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass conservation", statement: "Mass is invariant — only weight changes with g." },
            ],
            steps: [
              { reasoning: "Mass stays 2 kg everywhere.", working: "2 kg", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $2\\ \\text{kg}$ unchanged",
            commonErrors: ["Choosing (b) — confusing weight ratio with mass."],
          },
        },
        {
          id: "cils-u6-grav-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the weight of a $7\\ \\text{kg}$ mass on Earth ($g = 10\\ \\text{N/kg}$)? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Weight", answer: 70, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = m \\times g$" },
            ],
            steps: [
              { reasoning: "$W = 7 \\times 10$.", working: "7 × 10", marks: 1, markCode: "M" },
              { reasoning: "$70\\ \\text{N}$.", working: "70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$70\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-grav-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "An object weighs $90\\ \\text{N}$ on Earth ($g = 10\\ \\text{N/kg}$). What is its mass? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass", answer: 9, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$m = W \\div g$" },
            ],
            steps: [
              { reasoning: "$m = 90 \\div 10$.", working: "90 ÷ 10", marks: 1, markCode: "M" },
              { reasoning: "$9\\ \\text{kg}$.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9\\ \\text{kg}$",
          },
        },
        {
          id: "cils-u6-grav-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "On the Moon, $g = 1.6\\ \\text{N/kg}$. What is the weight of a $10\\ \\text{kg}$ mass there? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Weight", answer: 16, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = m \\times g$ — use Moon's g." },
            ],
            steps: [
              { reasoning: "$W = 10 \\times 1.6$.", working: "10 × 1.6", marks: 1, markCode: "M" },
              { reasoning: "$16\\ \\text{N}$.", working: "16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-grav-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A $5\\ \\text{kg}$ mass weighs $50\\ \\text{N}$ on Earth. What is its weight on the Moon where $g = 1.6\\ \\text{N/kg}$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Weight", answer: 8, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Weight", statement: "$W = m \\times g_{\\text{moon}} = 5 \\times 1.6$" },
            ],
            steps: [
              { reasoning: "$W = 5 \\times 1.6$.", working: "5 × 1.6", marks: 1, markCode: "M" },
              { reasoning: "$8\\ \\text{N}$.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-grav-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between mass and weight, giving the formula for weight and one example showing how weight changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mass vs weight", statement: "Mass = amount of matter (kg, constant); weight = gravitational force (N, varies)." },
            ],
            steps: [
              { reasoning: "Mass = amount of matter, measured in kg — same everywhere.", working: "mass", marks: 1, markCode: "M" },
              { reasoning: "Weight = force of gravity, measured in N — formula $W = m \\times g$.", working: "W=mg", marks: 1, markCode: "M" },
              { reasoning: "Example: same mass weighs ~6× less on Moon (g ≈ 1.6 vs 10 N/kg).", working: "example", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction with example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mass constant in kg; weight = mg varies with g — less on Moon.",
            commonErrors: ["Saying 'weight = mass' — weight is a force in newtons."],
          },
        },
      ],
    },
    {
      id: "cils-u6-pressure",
      title: "Pressure",
      skill: "Calculate pressure and describe factors affecting it.",
      lesson: {
        sections: [
          {
            heading: "What is pressure?",
            body: "Pressure = force ÷ area = N/m² = Pascal (Pa). Same force on smaller area = higher pressure.",
          },
          {
            heading: "Factors affecting pressure",
            body: "- **Force**: more force = more pressure\n- **Area**: smaller area = more pressure (same force)",
          },
          {
            heading: "Applications",
            body: "Sharp knife: small area = high pressure to cut. Snowshoes: large area = low pressure to avoid sinking. Hydraulic systems use pressure.",
          },
        ],
        keyFormulas: [
          { name: "Pressure", statement: "pressure = force ÷ area (Pa = N/m²)" },
        ],
        workedExample: {
          problem: "A 100 N force acts on 0.5 m². Calculate pressure.",
          solution: "pressure = force ÷ area = 100 ÷ 0.5 = 200 Pa.",
        },
      },
      questions: [
        {
          id: "cils-u6-press-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pascal (Pa)" },
              { id: "b", text: "Joule (J)" },
              { id: "c", text: "Watt (W)" },
              { id: "d", text: "Newton (N)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pressure unit", statement: "Pa = Pascal = N/m²." },
            ],
            steps: [
              { reasoning: "Pascal.", working: "Pa", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Pascal (Pa)",
            commonErrors: ["Choosing (b) — N is force."],
          },
        },
        {
          id: "cils-u6-press-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 50 N force acts on 2 m². Calculate pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pressure", statement: "p = F ÷ A = 50 ÷ 2 = 25 Pa" },
            ],
            steps: [
              { reasoning: "p = 50 ÷ 2.", working: "25", marks: 1, markCode: "M" },
              { reasoning: "= 25 Pa.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25 Pa",
            commonErrors: ["Multiplying instead of dividing — pressure = force ÷ area."],
          },
        },
        {
          id: "cils-u6-press-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a sharp knife cuts better than a blunt one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pressure application", statement: "Smaller area = higher pressure for same force." },
            ],
            steps: [
              { reasoning: "Sharp knife = smaller contact area.", working: "small area", marks: 1, markCode: "M" },
              { reasoning: "Same force → higher pressure → easier cutting.", working: "higher pressure", marks: 1, markCode: "M" },
              { reasoning: "Blunt knife = larger area = lower pressure.", working: "comparison", marks: 1, markCode: "M" },
              { reasoning: "Explanation clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sharp edge = small area = high pressure — cuts more easily.",
            commonErrors: ["Saying 'sharp is stronger' — it's about pressure, not strength."],
          },
        },
        {
          id: "cils-u6-press-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate pressure.",
          parts: [
            { label: "a", prompt: "Define pressure and give formula.", marks: 2 },
            { label: "b", prompt: "How does area affect pressure?", marks: 2 },
            { label: "c", prompt: "Calculate: 200 N on 4 m².", marks: 2 },
            { label: "d", prompt: "Give two everyday examples of pressure.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pressure", statement: "p=F/A; small area=high pressure; applications everywhere." },
            ],
            steps: [
              { part: "a", reasoning: "Force per unit area; p = F ÷ A.", working: "definition", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Smaller area → higher pressure (same force).", working: "inverse", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "p = 200 ÷ 4 = 50 Pa.", working: "50", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Knife cutting; snowshoes; syringe; hydraulic press; needles.", working: "examples", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ valid.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) F/A (b) small area=high pressure (c) 50 Pa (d) knife/snowshoes/syringe",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two+ examples.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Pressure vs force confusion — pressure accounts for area."],
          },
        },
        {
          id: "cils-u6-press-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "force × area" },
              { id: "b", text: "mass ÷ volume" },
              { id: "c", text: "area ÷ force" },
              { id: "d", text: "force ÷ area" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pressure", statement: "pressure = force ÷ area." },
            ],
            steps: [
              { reasoning: "Pressure = force per unit area.", working: "F/A", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** force ÷ area",
            commonErrors: ["Choosing (c) — multiplying gives wrong units."],
          },
        },
        {
          id: "cils-u6-press-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The same force is applied over a smaller area. The pressure will be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher" },
              { id: "b", text: "Unchanged" },
              { id: "c", text: "Lower" },
              { id: "d", text: "Zero" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pressure-area", statement: "Pressure inversely proportional to area for fixed force." },
            ],
            steps: [
              { reasoning: "Smaller area → same force concentrated → higher pressure.", working: "inverse", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Higher",
            commonErrors: ["Choosing (b) — pressure increases as area decreases."],
          },
        },
        {
          id: "cils-u6-press-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "One pascal (Pa) is equivalent to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1\\ \\text{kg/m}^3$" },
              { id: "b", text: "$1\\ \\text{m/s}$" },
              { id: "c", text: "$1\\ \\text{N/m}^2$" },
              { id: "d", text: "$1\\ \\text{J}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pascal", statement: "Pa = N/m² = newton per square metre." },
            ],
            steps: [
              { reasoning: "Pa = force/area = N/m².", working: "N/m²", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $1\\ \\text{N/m}^2$",
            commonErrors: ["Choosing (b) — J is energy."],
          },
        },
        {
          id: "cils-u6-press-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A hypodermic needle pierces skin easily because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is made of sharp metal only" },
              { id: "b", text: "Its tiny tip area creates very high pressure" },
              { id: "c", text: "It has no force acting on it" },
              { id: "d", text: "It reduces the force needed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pressure application", statement: "Small area concentrates force → high pressure pierces easily." },
            ],
            steps: [
              { reasoning: "Sharp tip = minimal area = maximum pressure.", working: "high pressure", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Tiny area → high pressure",
            commonErrors: ["Choosing (d) — force is similar; area is what changes."],
          },
        },
        {
          id: "cils-u6-press-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Snowshoes stop a walker sinking into snow because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduce friction only" },
              { id: "b", text: "Increase the force on the snow" },
              { id: "c", text: "Spread the force over a larger area, reducing pressure" },
              { id: "d", text: "Make the snow harder" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pressure application", statement: "Larger contact area = lower pressure = less sinking." },
            ],
            steps: [
              { reasoning: "Wide surface spreads weight → lower pressure on snow.", working: "larger area", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Larger area → lower pressure",
            commonErrors: ["Choosing (b) — weight unchanged; area is what changes."],
          },
        },
        {
          id: "cils-u6-press-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Hydraulic lifts work because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They create vacuum" },
              { id: "b", text: "They increase gravity" },
              { id: "c", text: "They use magnetic force" },
              { id: "d", text: "Pressure applied to a fluid is transmitted equally throughout" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hydraulics", statement: "Pascal's principle — pressure in a fluid transmits equally; small force on small piston → large force on large piston." },
            ],
            steps: [
              { reasoning: "Fluid transmits pressure — mechanical advantage.", working: "transmit", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Pressure transmitted equally in fluid",
            commonErrors: ["Choosing (d) — hydraulics use pressure, not gravity."],
          },
        },
        {
          id: "cils-u6-press-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two objects experience the same force. The one with the smaller contact area will have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No pressure" },
              { id: "b", text: "The same pressure" },
              { id: "c", text: "Lower pressure" },
              { id: "d", text: "Higher pressure" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pressure = F/A", statement: "Fixed force: smaller A → larger p." },
            ],
            steps: [
              { reasoning: "Same F, smaller A → higher pressure.", working: "F/A", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Higher pressure",
            commonErrors: ["Choosing (c) — pressure depends on area too."],
          },
        },
        {
          id: "cils-u6-press-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A $80\\ \\text{N}$ force acts on an area of $4\\ \\text{m}^2$. What is the pressure? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Pressure", answer: 20, unit: "Pa" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "$p = F \\div A$" },
            ],
            steps: [
              { reasoning: "$p = 80 \\div 4$.", working: "80 ÷ 4", marks: 1, markCode: "M" },
              { reasoning: "$20\\ \\text{Pa}$.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20\\ \\text{Pa}$",
          },
        },
        {
          id: "cils-u6-press-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A force of $100\\ \\text{N}$ acts on $0.25\\ \\text{m}^2$. What is the pressure? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Pressure", answer: 400, unit: "Pa" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "$p = F \\div A = 100 \\div 0.25$" },
            ],
            steps: [
              { reasoning: "$100 \\div 0.25 = 400$.", working: "100 ÷ 0.25", marks: 1, markCode: "M" },
              { reasoning: "$400\\ \\text{Pa}$.", working: "400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$400\\ \\text{Pa}$",
          },
        },
        {
          id: "cils-u6-press-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pressure of $50\\ \\text{Pa}$ acts on an area of $2\\ \\text{m}^2$. What force is applied? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Force", answer: 100, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pressure", statement: "$F = p \\times A$" },
            ],
            steps: [
              { reasoning: "$F = 50 \\times 2$.", working: "50 × 2", marks: 1, markCode: "M" },
              { reasoning: "$100\\ \\text{N}$.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-press-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A force produces a pressure of $40\\ \\text{Pa}$ on an area of $2\\ \\text{m}^2$. What pressure results if the same force acts on $4\\ \\text{m}^2$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Pressure", answer: 20, unit: "Pa" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pressure-area", statement: "Doubling area halves pressure for the same force." },
            ],
            steps: [
              { reasoning: "Force = $40 \\times 2 = 80\\ \\text{N}$; new p = $80 \\div 4$.", working: "80 ÷ 4", marks: 1, markCode: "M" },
              { reasoning: "$20\\ \\text{Pa}$.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20\\ \\text{Pa}$",
          },
        },
        {
          id: "cils-u6-press-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A drawing pin has a sharp point and a flat head. Explain, using pressure, why it is designed this way.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pressure application", statement: "Small area → high pressure (point pierces); large area → low pressure (head comfortable)." },
            ],
            steps: [
              { reasoning: "Thumb applies force to flat head — large area gives low pressure, comfortable.", working: "head", marks: 1, markCode: "M" },
              { reasoning: "Same force concentrated on tiny point area → very high pressure pierces surface.", working: "point", marks: 1, markCode: "M" },
              { reasoning: "Pressure = force ÷ area explains both features.", working: "F/A", marks: 1, markCode: "M" },
              { reasoning: "Both ends explained correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flat head = low pressure (comfortable); sharp point = high pressure (pierces).",
            commonErrors: ["Saying the pin is 'sharp so it is strong' — it's about pressure."],
          },
        },
      ],
    },
    {
      id: "cils-u6-rotation",
      title: "Moments and rotational motion",
      skill: "Describe moments, torque and rotational equilibrium.",
      lesson: {
        sections: [
          {
            heading: "What is a moment?",
            body: "Moment = turning effect of force = force × perpendicular distance from pivot. Unit: Nm.",
          },
          {
            heading: "Rotational equilibrium",
            body: "Object balanced when clockwise moments = anticlockwise moments. See-saw balanced when both sides equal.",
          },
          {
            heading: "Applications",
            body: "Wrenches, levers, door handles — designed to maximise moment. Longer handle = easier to turn.",
          },
        ],
        keyFormulas: [
          { name: "Moment", statement: "moment = force × perpendicular distance (Nm)" },
        ],
        workedExample: {
          problem: "A 10 N force acts at 0.5 m from pivot. Calculate moment.",
          solution: "moment = force × distance = 10 × 0.5 = 5 Nm.",
        },
      },
      questions: [
        {
          id: "cils-u6-moment-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of moment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Newton (N)" },
              { id: "b", text: "Newton metre (Nm)" },
              { id: "c", text: "Joule (J)" },
              { id: "d", text: "Watt (W)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Moment unit", statement: "Nm = Newton metre." },
            ],
            steps: [
              { reasoning: "Moment = Nm.", working: "Nm", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Newton metre (Nm)",
            commonErrors: ["Choosing (b) — N is force."],
          },
        },
        {
          id: "cils-u6-moment-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 20 N force acts at 0.3 m from pivot. Calculate moment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Moment", statement: "moment = F × d = 20 × 0.3 = 6 Nm" },
            ],
            steps: [
              { reasoning: "m = 20 × 0.3.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "= 6 Nm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 Nm",
            commonErrors: ["Using wrong formula — moment = force × distance."],
          },
        },
        {
          id: "cils-u6-moment-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a longer wrench is easier to use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Moments", statement: "Longer handle = greater distance = greater moment for same force." },
            ],
            steps: [
              { reasoning: "Moment = force × distance — longer handle = larger distance.", working: "distance", marks: 1, markCode: "M" },
              { reasoning: "Same force produces larger turning effect.", working: "larger moment", marks: 1, markCode: "M" },
              { reasoning: "Less force needed to achieve same moment.", working: "less force", marks: 1, markCode: "M" },
              { reasoning: "Explanation clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Longer handle = greater moment arm — same force gives more turning effect.",
            commonErrors: ["Saying 'more force' — actually less force needed."],
          },
        },
        {
          id: "cils-u6-moment-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate rotational equilibrium.",
          parts: [
            { label: "a", prompt: "Define moment.", marks: 1 },
            { label: "b", prompt: "What condition for rotational equilibrium?", marks: 2 },
            { label: "c", prompt: "Calculate: 10 N at 0.4 m vs 20 N at 0.2 m.", marks: 3 },
            { label: "d", prompt: "Give an example of balanced moments.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equilibrium", statement: "Clockwise moments = anticlockwise moments → no rotation." },
            ],
            steps: [
              { part: "a", reasoning: "Turning effect of force = force × perpendicular distance.", working: "definition", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clockwise moments = anticlockwise moments.", working: "balance", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "10×0.4 = 4 Nm; 20×0.2 = 4 Nm — equal!", working: "4=4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both calculated.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Recognised equal.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "See-saw balanced; person on see-saw; mobile hanging balanced.", working: "examples", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid example.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) F×d (b) CW=ACW (c) 4=4 Nm balanced (d) see-saw",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Calculated correctly.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Example valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Adding forces instead of moments — use moment equation."],
          },
        },
        {
          id: "cils-u6-moment-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for a moment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "force × perpendicular distance from pivot" },
              { id: "b", text: "mass × acceleration" },
              { id: "c", text: "distance ÷ force" },
              { id: "d", text: "force ÷ distance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Moment", statement: "moment = force × perpendicular distance." },
            ],
            steps: [
              { reasoning: "Moment = turning effect = F × d.", working: "F×d", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** force × perpendicular distance",
            commonErrors: ["Choosing (c) — that is force (F=ma), not moment."],
          },
        },
        {
          id: "cils-u6-moment-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A see-saw is in rotational equilibrium when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All forces are equal" },
              { id: "b", text: "The see-saw is perfectly horizontal" },
              { id: "c", text: "Both sides have the same mass" },
              { id: "d", text: "Clockwise moments equal anticlockwise moments" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Rotational equilibrium", statement: "Σ clockwise moments = Σ anticlockwise moments." },
            ],
            steps: [
              { reasoning: "Balance of moments, not forces or masses.", working: "moments equal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** CW moments = ACW moments",
            commonErrors: ["Choosing (d) — distances from pivot also matter."],
          },
        },
        {
          id: "cils-u6-moment-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'moment arm' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mass of the object" },
              { id: "b", text: "The length of the object" },
              { id: "c", text: "The perpendicular distance from the pivot to the line of force" },
              { id: "d", text: "The speed of rotation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moment arm", statement: "Perpendicular distance from pivot to force line." },
            ],
            steps: [
              { reasoning: "Moment arm = perpendicular distance from pivot.", working: "perpendicular", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Perpendicular distance from pivot",
            commonErrors: ["Choosing (b) — it's about distance to pivot, not total length."],
          },
        },
        {
          id: "cils-u6-moment-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change would INCREASE the moment produced by a force?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pushing parallel to the object" },
              { id: "b", text: "Applying the force closer to the pivot" },
              { id: "c", text: "Reducing the force" },
              { id: "d", text: "Applying the force further from the pivot" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Moment factors", statement: "Moment increases with larger force OR larger perpendicular distance." },
            ],
            steps: [
              { reasoning: "Greater distance from pivot → larger moment arm → larger moment.", working: "distance", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Further from pivot",
            commonErrors: ["Choosing (c) — reducing force reduces moment."],
          },
        },
        {
          id: "cils-u6-moment-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why are door handles fitted near the edge of the door, far from the hinges?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It looks better" },
              { id: "b", text: "Hinges cannot be drilled" },
              { id: "c", text: "It reduces friction" },
              { id: "d", text: "Greater distance from pivot gives a larger moment — easier to open" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Moment application", statement: "Door rotates about hinges (pivot); handle far away maximises moment." },
            ],
            steps: [
              { reasoning: "Hinges = pivot; distant handle = large moment arm.", working: "moment arm", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Larger moment arm — easier to open",
            commonErrors: ["Choosing (c) — this is about moments, not friction."],
          },
        },
        {
          id: "cils-u6-moment-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A child sits further from the centre of a see-saw than their friend. To balance, the friend should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lighter" },
              { id: "b", text: "Further away" },
              { id: "c", text: "Heavier, or sit closer to the centre" },
              { id: "d", text: "Standing up" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equilibrium", statement: "Moment = force (weight) × distance — balance needs equal moments both sides." },
            ],
            steps: [
              { reasoning: "Child far away has big moment; friend needs bigger weight or smaller distance to match.", working: "balance", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Heavier or closer to centre",
            commonErrors: ["Choosing (c) — moving further increases the friend's moment too much."],
          },
        },
        {
          id: "cils-u6-moment-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If the clockwise moments on a pivoted object exceed the anticlockwise moments, the object will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Move sideways" },
              { id: "b", text: "Stay still" },
              { id: "c", text: "Rotate anticlockwise" },
              { id: "d", text: "Rotate clockwise" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Moments", statement: "Net moment determines rotation direction — larger side wins." },
            ],
            steps: [
              { reasoning: "Bigger clockwise moment → clockwise rotation.", working: "CW", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Rotate clockwise",
            commonErrors: ["Choosing (b) — equilibrium needs equal moments."],
          },
        },
        {
          id: "cils-u6-moment-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A $15\\ \\text{N}$ force acts at $0.4\\ \\text{m}$ from a pivot. What is the moment? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Moment", answer: 6, unit: "Nm" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$M = F \\times d$" },
            ],
            steps: [
              { reasoning: "$M = 15 \\times 0.4$.", working: "15 × 0.4", marks: 1, markCode: "M" },
              { reasoning: "$6\\ \\text{Nm}$.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6\\ \\text{Nm}$",
          },
        },
        {
          id: "cils-u6-moment-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $30\\ \\text{N}$ force acts at $0.2\\ \\text{m}$ from a pivot. What is the moment? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Moment", answer: 6, unit: "Nm" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$M = F \\times d = 30 \\times 0.2$" },
            ],
            steps: [
              { reasoning: "$30 \\times 0.2 = 6$.", working: "30 × 0.2", marks: 1, markCode: "M" },
              { reasoning: "$6\\ \\text{Nm}$.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6\\ \\text{Nm}$",
          },
        },
        {
          id: "cils-u6-moment-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What force is needed to produce a $8\\ \\text{Nm}$ moment at $0.5\\ \\text{m}$ from a pivot? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Force", answer: 16, unit: "N" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moment", statement: "$F = M \\div d$" },
            ],
            steps: [
              { reasoning: "$F = 8 \\div 0.5$.", working: "8 ÷ 0.5", marks: 1, markCode: "M" },
              { reasoning: "$16\\ \\text{N}$.", working: "16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16\\ \\text{N}$",
          },
        },
        {
          id: "cils-u6-moment-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Clockwise moments total $12\\ \\text{Nm}$ and anticlockwise moments total $8\\ \\text{Nm}$. What is the net moment? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Net moment", answer: 4, unit: "Nm" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Moments", statement: "Net moment = clockwise − anticlockwise (opposite sides subtract)." },
            ],
            steps: [
              { reasoning: "$12 - 8 = 4\\ \\text{Nm}$ clockwise.", working: "12 - 8", marks: 1, markCode: "M" },
              { reasoning: "Net = $4\\ \\text{Nm}$.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\ \\text{Nm}$",
          },
        },
        {
          id: "cils-u6-moment-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how moments determine whether a see-saw rotates, using the formula and an example with two different masses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equilibrium", statement: "Moment = force × distance; balance when CW = ACW moments." },
            ],
            steps: [
              { reasoning: "State moment formula $M = F \\times d$ where F is weight.", working: "M=Fd", marks: 1, markCode: "M" },
              { reasoning: "Example: heavy child near centre vs light child far out can balance.", working: "example", marks: 1, markCode: "M" },
              { reasoning: "If moments unequal, net moment rotates see-saw toward larger side.", working: "net", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation with example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "See-saw balances when moments equal; unequal moments rotate it to the heavier side.",
            commonErrors: ["Balancing by weight alone — distance from pivot also matters."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u6-gravity-notes",
      title: "Gravity, pressure and moments — revision notes",
      summary: "Weight vs mass, free fall, pressure, moments, equilibrium.",
      sections: [
        {
          heading: "Gravity & pressure",
          body: "Weight = mass × g (N). Free fall: gravity accelerates, air resistance → terminal velocity. Pressure = F/A (Pa); small area = high pressure.",
        },
        {
          heading: "Moments",
          body: "Moment = force × distance (Nm). Equilibrium: CW = ACW moments. Longer handle = easier turning.",
        },
      ],
    },
  ],
};
