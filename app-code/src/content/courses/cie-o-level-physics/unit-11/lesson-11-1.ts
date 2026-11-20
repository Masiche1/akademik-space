import type { Lesson } from "../../../types.ts";

export const lessonp111: Lesson = {
  id: "olphys-u11-lesson-11-1",
  code: "11-1",
  title: "Measurement and Practical Physics",
  goal: "I CAN use SI units, measuring instruments and describe basic practical experiments.",
  standards: ["5054 11.1", "5054 11.2"],
  vocabulary: [
    { term: "SI units", definition: "International System base units: m, kg, s, A, K, mol, cd." },
    { term: "Prefix", definition: "kilo (10³), centi (10⁻²), milli (10⁻³), micro (10⁻⁶)." },
    { term: "Vernier calipers", definition: "Measuring instrument for length to 0.01 mm." },
    { term: "Micrometer", definition: "Measures small lengths/thickness to 0.01 mm." },
    { term: "Uncertainty", definition: "Range within which true value lies (± half smallest division)." },
    { term: "Density experiment", definition: "Measure mass and volume to calculate ρ = m/V." },
    { term: "Rate experiment", definition: "Measure quantity change over time (e.g. speed, reaction rate)." },
    { term: "Repeat readings", definition: "Multiple trials improve reliability and allow averaging." },
  ],
  concepts: [
    {
      id: "olphys-u11-units-measurement",
      title: "SI units and measurement",
      skill: "Use SI units, prefixes and measuring instruments correctly.",
      lesson: {
        sections: [
          {
            heading: "SI base units",
            body: "| Quantity | Unit | Symbol |\n|---|---|---|\n| Length | metre | m |\n| Mass | kilogram | kg |\n| Time | second | s |\n| Current | ampere | A |\n| Temperature | kelvin | K |\n| Amount | mole | mol |",
          },
          {
            heading: "Prefixes",
            body: "kilo = ×1000, centi = ÷100, milli = ÷1000, micro = ÷1,000,000. E.g. 1 km = 1000 m; 1 mm = 0.001 m.",
          },
          {
            heading: "Instruments",
            body: "Ruler: mm precision. Vernier calipers: 0.01 mm. Micrometer screw gauge: 0.01 mm. Balance: mass to 0.01 g. Stopwatch: 0.01 s.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Convert 2.5 km to metres.",
          solution: "2.5 km × 1000 = 2500 m.",
        },
      },
      questions: [
        {
          id: "olphys-u11-units-measurement-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of mass?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gram" }, { id: "b", text: "Kilogram" }, { id: "c", text: "Newton" }, { id: "d", text: "Pound" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "SI mass", statement: "Kilogram (kg)." }],
            steps: [{ reasoning: "Recall.", working: "\\text{kg}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Kilogram",
            commonErrors: ["Gram is not the SI base unit."],
          },
        },
        {
          id: "olphys-u11-units-measurement-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert 450 cm to metres.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Prefixes", statement: "centi = ÷100." }],
            steps: [
              { reasoning: "450 ÷ 100.", working: "450 \\div 100", marks: 1, markCode: "M" },
              { reasoning: "= 4.5 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.5 m",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "olphys-u11-units-measurement-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why repeat readings improve reliability in an experiment.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reliability", statement: "Repeats average out random errors." }],
            steps: [
              { reasoning: "Random errors vary each trial.", marks: 1, markCode: "M" },
              { reasoning: "Averaging reduces their effect.", marks: 1, markCode: "M" },
              { reasoning: "Identifies anomalous results.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repeat readings average out random errors, identify anomalies and give a more reliable mean value.",
            commonErrors: ["Saying 'more accurate' — it's more reliable."],
          },
        },
        {
          id: "olphys-u11-units-measurement-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how to measure the density of a regular solid.",
          parts: [
            { label: "a", prompt: "State the formula.", marks: 2 },
            { label: "b", prompt: "Describe measuring mass.", marks: 3 },
            { label: "c", prompt: "Describe measuring volume.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Density", statement: "ρ = m/V; regular solid: measure dimensions." }],
            steps: [
              { part: "a", reasoning: "ρ = m/V.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use balance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Record mass in kg/g.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Measure length, width, height.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "V = l×w×h.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert to m³.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ρ=m/V (b) balance→mass (c) dimensions→V=lwh→m³",
            commonErrors: ["In (c) using irregular method — regular solid uses dimensions."],
          },
        },
      ],
    },
    {
      id: "olphys-u11-errors",
      title: "Errors and uncertainties",
      skill: "Describe random and systematic errors and how to reduce them.",
      lesson: {
        sections: [
          {
            heading: "Types of error",
            body: "| Type | Cause | Effect | Fix |\n|---|---|---|---|\n| Random | unpredictable | scatter | repeat, average |\n| Systematic | consistent fault | all readings off | calibrate, zero |\n| Anomalous | mistake | outlier | ignore if justified |",
          },
          {
            heading: "Uncertainty",
            body: "± half the smallest division of instrument. E.g. ruler mm → ±0.5 mm. Report as value ± uncertainty.",
          },
          {
            heading: "Improving accuracy",
            body: "Use more precise instruments, repeat readings, control variables, eliminate parallax (eye level).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A ruler reads to mm. What is the uncertainty?",
          solution: "±0.5 mm (half of 1 mm smallest division).",
        },
      },
      questions: [
        {
          id: "olphys-u11-errors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a systematic error?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Random scatter" }, { id: "b", text: "Consistent offset from true value" }, { id: "c", text: "Reading mistake" }, { id: "d", text: "Parallax error" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Systematic error", statement: "Consistent offset." }],
            steps: [{ reasoning: "Recall.", working: "\\text{consistent}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Consistent offset from true value",
            commonErrors: ["Confusing with random."],
          },
        },
        {
          id: "olphys-u11-errors-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How is uncertainty estimated from an instrument?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Uncertainty", statement: "± half smallest division." }],
            steps: [
              { reasoning: "Find smallest division.", marks: 1, markCode: "M" },
              { reasoning: "Halve it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Uncertainty = ± half the smallest division on the instrument scale.",
            commonErrors: ["Using full division not half."],
          },
        },
        {
          id: "olphys-u11-errors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between random and systematic errors.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Errors", statement: "Random: unpredictable scatter; systematic: consistent offset." }],
            steps: [
              { reasoning: "Random definition.", marks: 1, markCode: "M" },
              { reasoning: "Random effect.", marks: 1, markCode: "M" },
              { reasoning: "Systematic definition/effect.", marks: 1, markCode: "M" },
              { reasoning: "Conclude difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Random errors are unpredictable scatter reduced by averaging; systematic errors are consistent offsets from a fault, affecting all readings equally.",
            commonErrors: ["Not explaining how each is fixed."],
          },
        },
        {
          id: "olphys-u11-errors-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how to reduce errors in a density experiment.",
          parts: [
            { label: "a", prompt: "Identify two sources of error.", marks: 3 },
            { label: "b", prompt: "State how to reduce each.", marks: 3 },
            { label: "c", prompt: "Explain why repeat readings help.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Experimental errors", statement: "Parallax, instrument precision, random errors — reduce via technique/repeats." }],
            steps: [
              { part: "a", reasoning: "Parallax/reading error.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Instrument precision.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Random variation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Eye level/repeat.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use vernier/micrometer.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Average readings.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Averages random errors.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Identifies anomalies.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) parallax/precision/random (b) eye level/vernier/average (c) averaging+anomalies",
            commonErrors: ["In (b) not matching fix to error."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u11-measurement-notes",
      title: "Measurement and practical physics — revision notes",
      summary: "SI units, prefixes, instruments, random vs systematic errors, uncertainty.",
      sections: [
        {
          heading: "Key facts",
          body: "SI: m, kg, s, A, K, mol, cd. Prefixes: k=10³, c=10⁻², m=10⁻³, μ=10⁻⁶. Uncertainty = ±half smallest division. Random=scatter, systematic=consistent offset.",
        },
        {
          heading: "Exam technique",
          body: "- Density: ρ=m/V; regular solid → measure dimensions.\n- Repeats improve reliability not accuracy.",
        },
      ],
    },
  ],
};
