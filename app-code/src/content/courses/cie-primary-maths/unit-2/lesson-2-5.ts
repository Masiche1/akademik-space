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
            { id: "a", text: "11 cm" },
            { id: "b", text: "22 cm" },
            { id: "c", text: "24 cm" },
            { id: "d", text: "48 cm" },
          ], correctChoiceId: "b" },
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
        {
          id: "cipm-u2-am-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the area of a rectangle 10 cm by 5 cm?",
          response: { type: "mcq", choices: [
            { id: "a", text: "15 cm²" },
            { id: "b", text: "50 cm²" },
            { id: "c", text: "30 cm²" },
            { id: "d", text: "150 cm²" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Area", statement: "length × width." }],
            steps: [{ reasoning: "$10 \\times 5 = 50\\ \\text{cm}^2$.", marks: 1, markCode: "A" }],
            finalAnswer: "50 cm²",
          },
        },
        {
          id: "cipm-u2-am-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the mean of 3, 5, 7, 9.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Sum ÷ count." }],
            steps: [
              { reasoning: "Sum $= 24$; $24 \\div 4 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Mean is 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u2-am-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The median of a data set is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "the middle value when data is in order" },
            { id: "b", text: "the most common value" },
            { id: "c", text: "the largest value" },
            { id: "d", text: "the total divided by count" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Median", statement: "Middle value of ordered data." }],
            steps: [{ reasoning: "Median = middle value after ordering.", marks: 1, markCode: "A" }],
            finalAnswer: "the middle value when data is in order",
          },
        },
        {
          id: "cipm-u2-am-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A train travels 240 km in 4 hours. Find its speed.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60, unit: "km/h" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed formula", statement: "speed = distance ÷ time." }],
            steps: [
              { reasoning: "$240 \\div 4 = 60$.", marks: 1, markCode: "M" },
              { reasoning: "Speed is 60 km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 km/h",
          },
        },
        {
          id: "cipm-u2-am-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The mode of a data set is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "the most frequent value" },
            { id: "b", text: "the average" },
            { id: "c", text: "the middle value" },
            { id: "d", text: "the smallest value" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mode", statement: "Most frequent value." }],
            steps: [{ reasoning: "Mode = the value that appears most often.", marks: 1, markCode: "A" }],
            finalAnswer: "the most frequent value",
          },
        },
        {
          id: "cipm-u2-am-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Data: 2, 6, 6, 8, 10, 12. (a) Find the median. (b) Find the mode. (c) Find the mean. Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Averages", statement: "Median = middle; mode = frequent; mean = total ÷ count." }],
            steps: [
              { reasoning: "(a) Six values; middle two are 6 and 8 → median $= (6+8)/2 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "(b) 6 appears twice → mode = 6.", marks: 1, markCode: "M" },
              { reasoning: "(c) Sum $= 44$; $44 \\div 6 = 7.3$ (accept $7\\frac{1}{3}$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 7 (b) 6 (c) $7.3$",
          },
        },
        {
          id: "cipm-u2-am-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "To find the median of 4, 1, 9, 3 you must first…",
          response: { type: "mcq", choices: [
            { id: "a", text: "add them all up" },
            { id: "b", text: "divide by 4" },
            { id: "c", text: "find the mode" },
            { id: "d", text: "put them in order" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Median", statement: "Order the data first." }],
            steps: [{ reasoning: "The median needs the data in order: 1, 3, 4, 9.", marks: 1, markCode: "A" }],
            finalAnswer: "put them in order",
          },
        },
        {
          id: "cipm-u2-am-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cyclist covers 45 km in 3 hours. What is the speed?",
          response: { type: "mcq", choices: [
            { id: "a", text: "48 km/h" },
            { id: "b", text: "135 km/h" },
            { id: "c", text: "42 km/h" },
            { id: "d", text: "15 km/h" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed formula", statement: "speed = distance ÷ time." }],
            steps: [{ reasoning: "$45 \\div 3 = 15$ km/h.", marks: 1, markCode: "A" }],
            finalAnswer: "15 km/h",
          },
        },
        {
          id: "cipm-u2-am-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle has length 9 cm and width 4 cm. (a) Find its area. (b) Find its perimeter. Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Area and perimeter", statement: "$A = l \\times w$; $P = 2(l+w)$." }],
            steps: [
              { reasoning: "(a) $A = 9 \\times 4 = 36\\ \\text{cm}^2$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $P = 2(9 + 4) = 26$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 36 cm² (b) 26 cm",
          },
        },
        {
          id: "cipm-u2-am-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a rectangle 7 cm by 5 cm?",
          response: { type: "mcq", choices: [
            { id: "a", text: "30 cm" },
            { id: "b", text: "24 cm" },
            { id: "c", text: "12 cm" },
            { id: "d", text: "35 cm" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Perimeter", statement: "$P = 2(l+w)$." }],
            steps: [{ reasoning: "$2(7+5) = 24$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "24 cm",
          },
        },
        {
          id: "cipm-u2-am-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mean of 11, 13, 15, 17, 19.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Sum ÷ count." }],
            steps: [
              { reasoning: "Sum $= 75$; $75 \\div 5 = 15$.", marks: 1, markCode: "M" },
              { reasoning: "Mean is 15.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cipm-u2-am-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) A bus travels 180 km in 3 hours — find its speed. (b) Data: 4, 4, 6, 8, 10. Find the median and the mode. (c) A square has side 8 cm — find its area and perimeter. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Formulae and averages", statement: "speed = d/t; median/mode; $P = 4s$; $A = s^2$." }],
            steps: [
              { reasoning: "(a) $180 \\div 3 = 60$ km/h.", marks: 1, markCode: "M" },
              { reasoning: "(b) Ordered; median = 6; mode = 4.", marks: 1, markCode: "M" },
              { reasoning: "(c) $P = 4 \\times 8 = 32$ cm; $A = 8 \\times 8 = 64\\ \\text{cm}^2$.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "Units correct.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 60 km/h (b) median 6, mode 4 (c) 32 cm, $64\\ \\text{cm}^2$",
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
