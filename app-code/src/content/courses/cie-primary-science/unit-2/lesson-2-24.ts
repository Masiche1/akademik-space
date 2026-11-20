import type { Lesson } from "../../../types.ts";

export const lesson224: Lesson = {
  id: "cips-u2-lesson-2-24",
  code: "2-24",
  title: "Stage 5 — Working Scientifically: Enquiry Skills",
  goal: "I CAN select enquiry types, plan fair tests with variables, choose equipment, repeat measurements and evaluate investigations.",
  standards: ["Cambridge Primary Science 0097 Stage 5: working scientifically",
  "Cambridge Primary Science 0097 framework substrands: 5TWSp, 5TWSc, 5TWSa"],
  stage: 5,
  vocabulary: [
    { term: "Enquiry type", definition: "Research, fair testing, observing over time, identifying/classifying, or pattern seeking." },
    { term: "Independent variable", definition: "The factor deliberately changed in an investigation." },
    { term: "Dependent variable", definition: "The measured outcome that responds to the change." },
    { term: "Control variable", definition: "Factors kept constant so the test is fair." },
    { term: "Anomaly", definition: "A result that doesn't fit the pattern — possibly an error." },
    { term: "Reliability", definition: "Consistency of results; improved by repeating measurements." },
  ],
  concepts: [
    {
      id: "cips-u2-s24-enquiry",
      title: "Enquiry types, fair tests and evaluation",
      skill: "Choose enquiry types, plan fair tests, use equipment accurately and evaluate results at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Types of enquiry and planning",
            body: "Five enquiry types: research (secondary sources), fair testing (change one variable), observing over time, identifying/classifying, and pattern seeking. For fair tests: identify independent, dependent and control variables; predict outcomes; assess risks. Choose appropriate equipment and measure accurately — repeat measurements for reliability.",
          },
          {
            heading: "Analysis and evaluation",
            body: "Describe how accurate predictions were. Identify patterns and anomalies in results. Draw conclusions informed by scientific understanding, not just description. Suggest improvements: more repeats, better equipment, tighter controls. Present results in tables, bar charts, line graphs or scatter graphs.",
          },
        ],
        keyFormulas: [
          { name: "Fair test", statement: "one independent variable; controls constant; repeats for reliability" },
          { name: "Evaluation", statement: "conclusion + evidence + suggested improvements" },
        ],
        workedExample: {
          problem: "Test whether fertiliser type affects plant growth. Identify variables and one improvement.",
          solution: "Independent: fertiliser type. Dependent: growth (height/mass). Controls: light, water, soil, pot size, plant species. Improvement: repeat with more plants per group to check reliability.",
        },
      },
      questions: [
        {
          id: "cips-u2-we-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enquiry type investigates 'How does temperature affect ice melting rate'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fair testing" }, { id: "b", text: "Research" }, { id: "c", text: "Observing over time only" }, { id: "d", text: "Classifying" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fair testing", statement: "Change one variable, measure outcome." }],
            steps: [{ reasoning: "Changing temperature to measure melting = fair test.", marks: 1, markCode: "M" }],
            finalAnswer: "Fair testing",
          },
        },
        {
          id: "cips-u2-we-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In 'Does surface type affect friction?', name the independent and dependent variables.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Variables", statement: "Changed vs measured." }],
            steps: [
              { reasoning: "Independent: surface type.", marks: 1, markCode: "M" },
              { reasoning: "Dependent: friction (e.g. force/distance to stop).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "IV=surface type; DV=friction",
          },
        },
        {
          id: "cips-u2-we-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Results for 'Does water volume affect plant growth?': 50ml→2cm, 100ml→5cm, 150ml→9cm, 200ml→8cm. Identify the pattern, any anomaly and a conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Analysis", statement: "Pattern + anomaly + conclusion." }],
            steps: [
              { reasoning: "Pattern: growth increases with water up to ~150ml.", marks: 1, markCode: "M" },
              { reasoning: "200ml result (8cm) breaks the trend — anomaly.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: more water helps to a point; excess may not help.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth rises then plateaus; 200ml anomalous; water helps to optimum",
          },
        },
        {
          id: "cips-u2-we-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Plan an enquiry: 'Does the angle of a ramp affect how far a toy car rolls?' (a) Enquiry type. (b) Independent, dependent and two control variables. (c) How to record results reliably. (d) A prediction. (e) How to evaluate results. (f) One safety risk and how to minimise it. (g) How to present results. (h) One suggested improvement.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Enquiry planning", statement: "Type, variables, recording, prediction, evaluation, safety, presentation." }],
            steps: [
              { reasoning: "(a) Fair testing.", marks: 1, markCode: "M" },
              { reasoning: "(b) IV=ramp angle; DV=distance; controls=car, release point, ramp surface.", marks: 1, markCode: "M" },
              { reasoning: "(c) Repeat each angle ≥3 times, average, table format.", marks: 1, markCode: "M" },
              { reasoning: "(d) Prediction: steeper angle → further roll.", marks: 1, markCode: "M" },
              { reasoning: "(e) Compare pattern to prediction; conclusion linked to question.", marks: 1, markCode: "M" },
              { reasoning: "(f) Risk e.g. car falling; minimise with clear floor space.", marks: 1, markCode: "M" },
              { reasoning: "(g) Table or line graph of angle vs distance.", marks: 1, markCode: "M" },
              { reasoning: "(h) Improvement e.g. more repeats or measure speed too.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fair test planned fully: variables, repeats, prediction, evaluation, safety, graph, improvement.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-we-notes",
      title: "Enquiry skills — notes",
      summary: "Five enquiry types. Fair test = IV + DV + controls + repeats. Evaluate: conclusion + evidence + improvements.",
      sections: [
        { heading: "Planning", body: "Identify all variables before starting; predict first." },
        { heading: "Evaluation", body: "Look for anomalies; suggest how to improve reliability." },
      ],
    },
  ],
};
