import type { Lesson } from "../../../types.ts";

export const lessonp113: Lesson = {
  id: "olphys-u11-lesson-11-3",
  code: "11-3",
  title: "Required Practicals",
  goal: "I CAN describe standard physics practical investigations and their analysis.",
  standards: ["5054 11.3"],
  vocabulary: [
    { term: "Practical investigation", definition: "Structured experiment testing a hypothesis." },
    { term: "Independent variable", definition: "Variable deliberately changed." },
    { term: "Dependent variable", definition: "Variable measured." },
    { term: "Control variable", definition: "Variables kept constant." },
    { term: "Anomaly", definition: "Result not fitting pattern." },
    { term: "Systematic error", definition: "Consistent error shifting all results." },
    { term: "Random error", definition: "Unpredictable scatter in results." },
    { term: "Fair test", definition: "Only independent variable changed." },
  ],
  concepts: [
    {
      id: "olphys-u11-practicals",
      title: "Core practical investigations",
      skill: "Describe standard physics practicals and analysis methods.",
      lesson: {
        sections: [
          {
            heading: "Ohm's law investigation",
            body: "Vary voltage, measure current through resistor.\n\nGraph I vs V → straight line through origin → R = V/I constant.\n\nVariables: V independent, I dependent, R/temp controlled.",
          },
          {
            heading: "Density investigation",
            body: "Measure mass and volume of objects.\n\nρ = m/V. Graph m vs V → gradient = density.\n\nUse displacement method for irregular solids.",
          },
          {
            heading: "Specific heat investigation",
            body: "Heat known mass, measure temp rise vs energy input.\n\nc = Q/(mΔT). Compare materials' heating rates.",
          },
        ],
        keyFormulas: [
          { name: "Density", statement: "$\\rho = \\dfrac{m}{V}$" },
          { name: "Specific heat", statement: "$c = \\dfrac{Q}{m\\Delta T}$" },
        ],
        workedExample: {
          problem: "In Ohm's law practical, why does graph pass through origin?",
          solution: "Zero voltage → zero current (no EMF, no current).",
        },
      },
      questions: [
        {
          id: "olphys-u11-practicals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an Ohm's law practical, what is plotted on axes?",
          response: { type: "mcq", choices: [
            { id: "a", text: "V vs I" }, { id: "b", text: "I vs V" }, { id: "c", text: "R vs T" }, { id: "d", text: "P vs V" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Practical", statement: "I vs V gives gradient 1/R." }],
            steps: [{ reasoning: "Recall.", working: "I \\text{ vs } V", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** I vs V",
            commonErrors: ["Either order acceptable if consistent."],
          },
        },
        {
          id: "olphys-u11-practicals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How is volume of irregular solid measured?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Practical", statement: "Displacement method." }],
            steps: [
              { reasoning: "Water displacement.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "By water displacement — measure volume of water before and after submerging object.",
            commonErrors: ["Using ruler for irregular."],
          },
        },
        {
          id: "olphys-u11-practicals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In density practical, what does gradient of m vs V graph represent?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Density", statement: "Gradient = ρ = m/V." }],
            steps: [
              { reasoning: "m/V = density.", marks: 1, markCode: "M" },
              { reasoning: "Gradient gives ρ.", marks: 1, markCode: "M" },
              { reasoning: "Correct interpretation.", marks: 1, markCode: "A" },
              { reasoning: "Complete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Density (ρ) — since m = ρV, gradient of mass vs volume equals density.",
            commonErrors: ["Thinking gradient=volume."],
          },
        },
        {
          id: "olphys-u11-practicals-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe a practical investigation and its analysis.",
          parts: [
            { label: "a", prompt: "Choose and describe one practical.", marks: 3 },
            { label: "b", prompt: "Identify variables.", marks: 3 },
            { label: "c", prompt: "Describe data analysis.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Practical", statement: "Investigation design+analysis." }],
            steps: [
              { part: "a", reasoning: "Valid practical chosen.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Method described.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent/dependent identified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Controls stated.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Graph/calculation described.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Result interpreted.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) valid practical (b) variables (c) analysis method",
            commonErrors: ["In (b) missing control variables."],
          },
        },
      ],
    },
    {
      id: "olphys-u11-error-analysis",
      title: "Errors and evaluation",
      skill: "Identify error types and evaluate experimental validity.",
      lesson: {
        sections: [
          {
            heading: "Error types",
            body: "- **Systematic**: consistent shift (zero error, calibration)\n- **Random**: unpredictable scatter\n- **Human**: parallax, reaction time\n- **Instrument**: resolution limits",
          },
          {
            heading: "Evaluation",
            body: "Assess: reliability (repeats agree?), validity (measured what intended?), accuracy (close to true?).\n\nImprove: more repeats, better instruments, control variables.",
          },
          {
            heading: "Anomalies",
            body: "Results not fitting trend — repeat measurement; if persists, investigate cause (equipment fault, misreading).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "All readings 0.2 cm too high — what error?",
          solution: "Systematic error — likely zero error on instrument.",
        },
      },
      questions: [
        {
          id: "olphys-u11-error-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a systematic error?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Random scatter" }, { id: "b", text: "Consistent shift in all readings" }, { id: "c", text: "Human mistake" }, { id: "d", text: "No error" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Systematic", statement: "Consistent shift." }],
            steps: [{ reasoning: "Recall.", working: "\\text{consistent}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Consistent shift in all readings",
            commonErrors: ["Confusing with random."],
          },
        },
        {
          id: "olphys-u11-error-analysis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can systematic errors be reduced?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Errors", statement: "Calibration/zero check." }],
            steps: [
              { reasoning: "Calibrate/zero check.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Calibrate instruments, check for zero error, use standard references.",
            commonErrors: ["Repeating won't fix systematic."],
          },
        },
        {
          id: "olphys-u11-error-analysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between random and systematic errors with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Errors", statement: "Random=scatter; systematic=shift." }],
            steps: [
              { reasoning: "Random: unpredictable.", marks: 1, markCode: "M" },
              { reasoning: "Systematic: consistent.", marks: 1, markCode: "M" },
              { reasoning: "Examples given.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Random errors scatter unpredictably (reaction time); systematic errors shift all readings consistently (zero error, miscalibration).",
            commonErrors: ["Not giving examples."],
          },
        },
        {
          id: "olphys-u11-error-analysis-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate an experiment's reliability and validity.",
          parts: [
            { label: "a", prompt: "Define reliability.", marks: 3 },
            { label: "b", prompt: "Define validity.", marks: 3 },
            { label: "c", prompt: "Suggest improvements.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evaluation", statement: "Reliability=repeats; validity=measures intended." }],
            steps: [
              { part: "a", reasoning: "Repeatability.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Consistent results.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Measuring intended.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fair test.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "More repeats.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Better instruments.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) repeatable results (b) measures intended (c) improvements",
            commonErrors: ["Swapping reliability/validity."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u11-practical-notes",
      title: "Practical skills and errors — revision notes",
      summary: "Practical investigations, error types, evaluation.",
      sections: [
        {
          heading: "Key facts",
          body: "Variables: independent/dependent/control. Systematic=shift, random=scatter. Reliability=repeats, validity=intended measure.",
        },
        {
          heading: "Exam technique",
          body: "- Fair test: only IV changes.\n- Graph gradient often = physical quantity.\n- Always evaluate errors.",
        },
      ],
    },
  ],
};
