import type { Lesson } from "../../../types.ts";

export const lessonp112: Lesson = {
  id: "ciep-u11-lesson-11-2",
  code: "11-2",
  title: "Measurement and Uncertainty",
  goal: "I CAN describe measurement, uncertainty and significant figures.",
  standards: ["0655 11.2"],
  vocabulary: [
    { term: "Measurement", definition: "Assigning number to quantity using instrument." },
    { term: "Uncertainty", definition: "Range within which true value lies." },
    { term: "Precision", definition: "How close repeated measurements are." },
    { term: "Accuracy", definition: "How close to true value." },
    { term: "Resolution", definition: "Smallest division on instrument." },
    { term: "Significant figures", definition: "Digits carrying meaningful information." },
    { term: "Zero error", definition: "Instrument reading when input is zero." },
    { term: "Repeated readings", definition: "Multiple measurements to check consistency." },
  ],
  concepts: [
    {
      id: "ciep-u11-measurement",
      title: "Measurement and uncertainty",
      skill: "Describe measurement quality, uncertainty and significant figures.",
      lesson: {
        sections: [
          {
            heading: "Measurement quality",
            body: "- **Accuracy**: close to true value (calibration)\n- **Precision**: repeated readings close together\n- **Resolution**: smallest readable division\n- Uncertainty: ± half smallest division",
          },
          {
            heading: "Uncertainty calculation",
            body: "Reading uncertainty = half the smallest scale division.\n\nExample: ruler mm divisions → ±0.5 mm uncertainty.\n\nFor repeated readings: uncertainty = half range.",
          },
          {
            heading: "Significant figures",
            body: "Report to sensible precision — not more digits than justified.\n\nRules: leading zeros don't count; trailing zeros after decimal do.\n\nCalculations: answer to same sig figs as least precise input.",
          },
        ],
        keyFormulas: [
          { name: "Uncertainty", statement: "$\\text{uncertainty} = \\pm \\dfrac{\\text{smallest division}}{2}$" },
        ],
        workedExample: {
          problem: "Ruler has mm divisions. Length reads 12.3 cm. Uncertainty?",
          solution: "±0.05 cm (half of 0.1 cm smallest division).",
        },
      },
      questions: [
        {
          id: "ciep-u11-measurement-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is precision?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Close to true value" }, { id: "b", text: "Repeated readings close together" }, { id: "c", text: "Smallest division" }, { id: "d", text: "Number of digits" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Precision", statement: "Repeatability." }],
            steps: [{ reasoning: "Recall.", working: "\\text{repeatability}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Repeated readings close together",
            commonErrors: ["Confusing with accuracy."],
          },
        },
        {
          id: "ciep-u11-measurement-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A thermometer has 1°C divisions. What is the uncertainty in a reading?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Uncertainty", statement: "± half smallest division." }],
            steps: [
              { reasoning: "±0.5°C.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "±0.5°C (half of 1°C smallest division).",
            commonErrors: ["Using full division."],
          },
        },
        {
          id: "ciep-u11-measurement-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Five readings: 2.4, 2.5, 2.4, 2.6, 2.5 cm. Calculate mean and uncertainty (half range).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Uncertainty", statement: "Mean; ± half range." }],
            steps: [
              { reasoning: "Mean = 12.4/5 = 2.48 ≈ 2.5 cm.", marks: 1, markCode: "M" },
              { reasoning: "Range = 2.6−2.4 = 0.2.", marks: 1, markCode: "M" },
              { reasoning: "Uncertainty = ±0.1 cm.", marks: 1, markCode: "A" },
              { reasoning: "Report 2.5 ± 0.1 cm.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2.5 ± 0.1 cm",
            commonErrors: ["Wrong uncertainty method."],
          },
        },
        {
          id: "ciep-u11-measurement-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe measurement, uncertainty and precision.",
          parts: [
            { label: "a", prompt: "Accuracy vs precision.", marks: 3 },
            { label: "b", prompt: "Uncertainty calculation.", marks: 3 },
            { label: "c", prompt: "Significant figures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Measurement", statement: "Accuracy/precision differ; uncertainty; sig figs." }],
            steps: [
              { part: "a", reasoning: "Accuracy=true value.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Precision=repeatability.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Half smallest division.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Or half range repeated.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Meaningful digits.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Match input precision.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) accuracy vs precision (b) uncertainty methods (c) sig figs",
            commonErrors: ["Swapping accuracy/precision."],
          },
        },
      ],
    },
    {
      id: "ciep-u11-practical-skills",
      title: "Practical skills and data analysis",
      skill: "Describe practical techniques, graphing and data analysis.",
      lesson: {
        sections: [
          {
            heading: "Practical techniques",
            body: "- Plan experiment: variables, controls, repeats\n- Measure carefully, record units\n- Process data: means, uncertainties\n- Evaluate: errors, improvements",
          },
          {
            heading: "Graphing",
            body: "- Choose appropriate scale\n- Label axes with units\n- Plot points accurately\n- Line of best fit (not connect dots)\n- Gradient = physical quantity",
          },
          {
            heading: "Data analysis",
            body: "- Identify pattern/trend\n- Calculate gradient/area\n- Compare with theory\n- Consider anomalies",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why repeat measurements in experiments?",
          solution: "To check precision, identify anomalies, and calculate mean/uncertainty.",
        },
      },
      questions: [
        {
          id: "ciep-u11-practical-skills-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why are repeated readings taken?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To waste time" }, { id: "b", text: "To check precision and find anomalies" }, { id: "c", text: "To increase uncertainty" }, { id: "d", text: "To confuse" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Practical", statement: "Repeats improve reliability." }],
            steps: [{ reasoning: "Recall.", working: "\\text{precision/anomalies}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** To check precision and find anomalies",
            commonErrors: ["Single reading insufficient."],
          },
        },
        {
          id: "ciep-u11-practical-skills-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should be labelled on graph axes?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Graphing", statement: "Quantity and units." }],
            steps: [
              { reasoning: "Quantity+units.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The quantity being measured and its units (e.g., 'Time (s)').",
            commonErrors: ["Only quantity no units."],
          },
        },
        {
          id: "ciep-u11-practical-skills-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to draw a line of best fit.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Graphing", statement: "Balance points, ignore anomalies." }],
            steps: [
              { reasoning: "Balance points above/below.", marks: 1, markCode: "M" },
              { reasoning: "Don't connect dots.", marks: 1, markCode: "M" },
              { reasoning: "Ignore anomalies.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Draw a straight line balancing points above and below, passing through error bars if present — not connecting individual dots.",
            commonErrors: ["Joining dots."],
          },
        },
        {
          id: "ciep-u11-practical-skills-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe practical skills in physics experiments.",
          parts: [
            { label: "a", prompt: "Planning experiments.", marks: 3 },
            { label: "b", prompt: "Graphing data.", marks: 3 },
            { label: "c", prompt: "Evaluating results.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Practical", statement: "Plan/graph/evaluate cycle." }],
            steps: [
              { part: "a", reasoning: "Variables/controls.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Repeats planned.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Axes labelled.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Best fit line.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Identify errors.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Suggest improvements.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) plan variables (b) graph properly (c) evaluate errors",
            commonErrors: ["In (c) no improvements suggested."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u11-uncertainty-notes",
      title: "Measurement and practical skills — revision notes",
      summary: "Uncertainty, precision, significant figures, practical techniques.",
      sections: [
        {
          heading: "Key facts",
          body: "Accuracy=true, precision=repeats. Uncertainty=±half division. Sig figs match input. Graphs: label axes, best fit.",
        },
        {
          heading: "Exam technique",
          body: "- Always include units.\n- Repeat measurements.\n- Evaluate errors and improvements.",
        },
      ],
    },
  ],
};
