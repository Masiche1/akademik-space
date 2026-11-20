import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "cipm-u2-lesson-2-5",
  code: "2-5",
  title: "Stage 5 — Algebra, Measures and Data",
  goal: "I CAN use simple formulae, calculate measures and find averages.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 5: algebra, measures and handling data",
  "Cambridge Primary Mathematics 0096 framework substrands: 5Gg, 5Ss"],
  stage: 5,
  vocabulary: [
    { term: "Formula", definition: "A rule written with symbols, like area = length × width." },
    { term: "Perimeter", definition: "Distance all the way around a shape." },
    { term: "Area", definition: "Space inside a shape, measured in square units." },
    { term: "Mean", definition: "Average found by adding all values and dividing by how many." },
    { term: "Median", definition: "Middle value when data is in order." },
  ],
  concepts: [
    {
      id: "cipm-u2-s5-algebra-data",
      title: "Formulae, measures and averages",
      skill: "Substitute into formulae, find perimeter/area and compute mean/median at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Formulae and measures",
            body: "A formula uses letters for numbers: perimeter of a rectangle = 2 × (length + width); area = length × width. Substitute the values in and calculate. Speed = distance ÷ time is another useful formula.",
          },
          {
            heading: "Averages",
            body: "Mean = total ÷ count. Median = middle value after ordering the data. Mode = most frequent value. For grouped or larger data sets, choose the measure that best describes the centre.",
          },
        ],
        keyFormulas: [
          { name: "Rectangle", statement: "perimeter = 2(l+w); area = l×w" },
          { name: "Mean", statement: "mean = sum of values ÷ number of values" },
        ],
        workedExample: {
          problem: "Find the mean of 4, 7, 9, 10.",
          solution: "Sum = 30; count = 4; mean = 30 ÷ 4 = 7.5.",
        },
      },
      questions: [
        {
          id: "cipm-u2-am-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a rectangle 8 cm long and 3 cm wide?",
          response: { type: "mcq", choices: [
            { id: "a", text: "24 cm" }, { id: "b", text: "11 cm" }, { id: "c", text: "22 cm" }, { id: "d", text: "48 cm" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Perimeter", statement: "Distance around = 2(l+w)." }],
            steps: [{ reasoning: "2(8+3) = 22 cm.", marks: 1, markCode: "A" }],
            finalAnswer: "22 cm",
          },
        },
        {
          id: "cipm-u2-am-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the mean of 2, 4, 6, 8.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Sum ÷ count." }],
            steps: [
              { reasoning: "Sum = 20, count = 4.", marks: 1, markCode: "M" },
              { reasoning: "Mean = 20 ÷ 4 = 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipm-u2-am-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car travels 120 km in 2 hours. Use speed = distance ÷ time to find its speed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed formula", statement: "speed = distance ÷ time." }],
            steps: [
              { reasoning: "speed = 120 ÷ 2.", marks: 1, markCode: "M" },
              { reasoning: "= 60.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60 km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 km/h",
          },
        },
        {
          id: "cipm-u2-am-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Data: 3, 5, 5, 7, 9. Find the median and the mode.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Median and mode", statement: "Median = middle value; mode = most frequent." }],
            steps: [
              { reasoning: "Already ordered; middle (3rd) value is 5.", marks: 1, markCode: "M" },
              { reasoning: "Median = 5.", marks: 1, markCode: "M" },
              { reasoning: "5 appears twice — more than any other — so mode = 5.", marks: 1, markCode: "M" },
              { reasoning: "Answer: median 5, mode 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Median 5, mode 5",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-am-notes",
      title: "Algebra, measures and data — revision notes",
      summary: "perimeter=2(l+w), area=l×w; mean=sum÷count; median=middle.",
      sections: [
        { heading: "Formulae", body: "Replace letters with numbers, then calculate — order of operations still applies." },
        { heading: "Averages", body: "Mean uses all values; median needs ordering; mode is the most common." },
      ],
    },
  ],
};
