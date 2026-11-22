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
            { id: "a", text: "Research" },
            { id: "b", text: "Observing over time only" },
            { id: "c", text: "Classifying" },
            { id: "d", text: "Fair testing" },
          ], correctChoiceId: "d" },
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
        {
          id: "cips-u2-we-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enquiry type uses secondary sources like books and websites?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Observing only" },
            { id: "b", text: "Fair testing" },
            { id: "c", text: "Classifying" },
            { id: "d", text: "Research" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Research", statement: "Uses secondary sources." }],
            steps: [{ reasoning: "Research uses books/websites as sources.", marks: 1, markCode: "A" }],
            finalAnswer: "Research",
          },
        },
        {
          id: "cips-u2-we-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an ANOMALY?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A perfect result" },
            { id: "b", text: "A measuring tool" },
            { id: "c", text: "A result that doesn't fit the pattern" },
            { id: "d", text: "A type of variable" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Anomaly", statement: "Result not fitting pattern." }],
            steps: [{ reasoning: "An anomaly is a result that doesn't fit the pattern.", marks: 1, markCode: "A" }],
            finalAnswer: "A result that doesn't fit the pattern",
          },
        },
        {
          id: "cips-u2-we-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many enquiry types are there: research, fair testing, observing, classifying, pattern seeking?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "types" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Enquiry types", statement: "Five types." }],
            steps: [{ reasoning: "There are 5 enquiry types.", marks: 1, markCode: "M" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cips-u2-we-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 5 trials, 4 give similar results and 1 is very different. How many results are anomalous?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1, unit: "result" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Anomaly", statement: "Count results not fitting pattern." }],
            steps: [
              { reasoning: "1 result is very different.", marks: 1, markCode: "M" },
              { reasoning: "It is the anomaly → 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cips-u2-we-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What improves reliability of measurements?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Measuring only once" },
            { id: "b", text: "Repeating measurements" },
            { id: "c", text: "Using no table" },
            { id: "d", text: "Guessing" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reliability", statement: "Repeats improve consistency." }],
            steps: [{ reasoning: "Repeating measurements improves reliability.", marks: 1, markCode: "A" }],
            finalAnswer: "Repeating measurements",
          },
        },
        {
          id: "cips-u2-we-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three enquiry variables and what each means.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Variables", statement: "IV, DV, controls." }],
            steps: [
              { reasoning: "Independent = changed; dependent = measured; control = constant.", marks: 1, markCode: "M" },
              { reasoning: "All three named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "IV=change, DV=measure, controls=constant",
          },
        },
        {
          id: "cips-u2-we-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Results show growth increases with water then plateaus. State a conclusion for 'Does water affect plant growth?'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conclusion", statement: "Answer + evidence." }],
            steps: [
              { reasoning: "Identify pattern: growth rises then plateaus.", marks: 1, markCode: "M" },
              { reasoning: "Link to question: water does affect growth.", marks: 1, markCode: "M" },
              { reasoning: "Full conclusion sentence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — more water helps growth up to a point",
          },
        },
        {
          id: "cips-u2-we-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the BEST way to present investigation results?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A table, bar chart or line graph" },
            { id: "b", text: "Just the conclusion" },
            { id: "c", text: "Nothing" },
            { id: "d", text: "A paragraph of guesses" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Presentation", statement: "Tables and graphs." }],
            steps: [{ reasoning: "Tables/charts show data clearly.", marks: 1, markCode: "A" }],
            finalAnswer: "A table, bar chart or line graph",
          },
        },
        {
          id: "cips-u2-we-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Trial distances: 10 cm, 12 cm, 11 cm, 25 cm. If 25 cm is an anomaly, what is the average of the other three?",
          response: { type: "numeric", parts: [{ label: "a", answer: 11, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Data analysis", statement: "Mean = sum ÷ count." }],
            steps: [
              { reasoning: "$(10 + 12 + 11) \\div 3 = 33 \\div 3 = 11$.", marks: 1, markCode: "M" },
              { reasoning: "Average = 11 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "cips-u2-we-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why evaluation should suggest improvements, not just state the conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluation", statement: "Conclusion + improvements." }],
            steps: [
              { reasoning: "A conclusion alone doesn't show how to improve.", marks: 1, markCode: "M" },
              { reasoning: "Suggestions show scientific thinking — more repeats, better controls.", marks: 1, markCode: "M" },
              { reasoning: "This makes the enquiry more reliable next time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Improvements show how to make enquiry more reliable",
          },
        },
        {
          id: "cips-u2-we-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Before an investigation, what should you do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Make a prediction" },
            { id: "b", text: "Change everything" },
            { id: "c", text: "Ignore variables" },
            { id: "d", text: "Write the conclusion" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning", statement: "Predict first." }],
            steps: [{ reasoning: "Make a prediction before testing.", marks: 1, markCode: "A" }],
            finalAnswer: "Make a prediction",
          },
        },
        {
          id: "cips-u2-we-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name the five enquiry types. (b) For 'Does ramp angle affect distance?', name enquiry type. (c) Define IV, DV and controls. (d) How do you improve reliability? (e) What is an anomaly? (f) How should results be presented? (g) What should evaluation include? (h) Give one safety risk and how to reduce it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Enquiry skills", statement: "Integrated Stage 5 working scientifically answer." }],
            steps: [
              { reasoning: "(a) Research, fair testing, observing, classifying, pattern seeking.", marks: 1, markCode: "M" },
              { reasoning: "(b) Fair testing.", marks: 1, markCode: "M" },
              { reasoning: "(c) IV=change; DV=measure; controls=constant.", marks: 1, markCode: "M" },
              { reasoning: "(d) Repeat measurements and average.", marks: 1, markCode: "M" },
              { reasoning: "(e) Result not fitting the pattern.", marks: 1, markCode: "M" },
              { reasoning: "(f) Table or bar/line graph.", marks: 1, markCode: "M" },
              { reasoning: "(g) Conclusion + evidence + suggested improvements.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. car falling — clear floor space.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enquiry types, IV/DV/controls, reliability, anomaly, presentation, evaluation parts, safety.",
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
