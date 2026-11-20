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
              { id: "a", text: "Newton (N)" },
              { id: "b", text: "Kilogram (kg)" },
              { id: "c", text: "Joule (J)" },
              { id: "d", text: "Metre (m)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Weight", statement: "Force measured in newtons." },
            ],
            steps: [
              { reasoning: "Weight is force — newtons.", working: "N", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Newton (N)",
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
              { id: "b", text: "Newton (N)" },
              { id: "c", text: "Joule (J)" },
              { id: "d", text: "Watt (W)" },
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
              { id: "a", text: "Newton metre (Nm)" },
              { id: "b", text: "Newton (N)" },
              { id: "c", text: "Joule (J)" },
              { id: "d", text: "Watt (W)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Moment unit", statement: "Nm = Newton metre." },
            ],
            steps: [
              { reasoning: "Moment = Nm.", working: "Nm", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Newton metre (Nm)",
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
