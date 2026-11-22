import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "cipm-u2-lesson-2-12",
  code: "2-12",
  title: "Stage 5 — Ratio, Simple Algebra and Line Graphs",
  goal: "I CAN use ratios, solve simple equations and read line graphs.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 5: ratio, algebra and handling data",
  "Cambridge Primary Mathematics 0096 framework substrands: 5Nf, 5Ss"],
  stage: 5,
  vocabulary: [
    { term: "Ratio", definition: "Comparing two quantities, like 2:3." },
    { term: "Unknown", definition: "A missing number represented by a letter, like n or x." },
    { term: "Equation", definition: "A statement that two expressions are equal." },
    { term: "Line graph", definition: "Graph showing change over time with points joined by lines." },
    { term: "Gradient", definition: "How steep a line is on a graph." },
  ],
  concepts: [
    {
      id: "cipm-u2-s12-ratio-algebra",
      title: "Ratio, simple algebra and line graphs",
      skill: "Compare quantities by ratio, solve one-step equations and interpret line graphs at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Ratio and algebra",
            body: "Ratio compares parts: a juice recipe with 2 cups concentrate to 5 cups water is 2:5. To share in a ratio, find the total parts first (2+5=7), then divide. Simple algebra uses letters for unknowns: if x + 7 = 12, then x = 5 — do the inverse operation to both sides.",
          },
          {
            heading: "Line graphs",
            body: "Line graphs show how a value changes over time — temperature through the day, distance travelled. Points are plotted and joined; steep sections mean fast change, flat sections mean steady. Always read axis labels and scale before interpreting.",
          },
        ],
        keyFormulas: [
          { name: "Ratio", statement: "a:b → total parts = a+b; share = amount × part/total" },
          { name: "Solving", statement: "x + 7 = 12 → x = 12 − 7 = 5" },
        ],
        workedExample: {
          problem: "Share £24 between Sam and Jo in the ratio 1:3.",
          solution: "Total parts = 4; each part = £6; Sam gets £6, Jo gets £18.",
        },
      },
      questions: [
        {
          id: "cipm-u2-ra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ratio 2:3 means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2 minus 3" },
            { id: "b", text: "2 out of 3" },
            { id: "c", text: "2 parts to 3 parts" },
            { id: "d", text: "2 times 3" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Ratio", statement: "Compares parts a to b." }],
            steps: [{ reasoning: "Ratio 2:3 = 2 parts for every 3 parts.", marks: 1, markCode: "A" }],
            finalAnswer: "2 parts to 3 parts",
          },
        },
        {
          id: "cipm-u2-ra-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve: x + 9 = 15.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Subtract 9 from both sides." }],
            steps: [
              { reasoning: "x = 15 − 9.", marks: 1, markCode: "M" },
              { reasoning: "x = 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 6",
          },
        },
        {
          id: "cipm-u2-ra-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Share 20 sweets between two children in the ratio 1:4.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sharing in ratio", statement: "Total parts then divide." }],
            steps: [
              { reasoning: "Total parts = 1 + 4 = 5.", marks: 1, markCode: "M" },
              { reasoning: "Each part = 20 ÷ 5 = 4.", marks: 1, markCode: "M" },
              { reasoning: "Shares: 4 and 16 sweets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 and 16",
          },
        },
        {
          id: "cipm-u2-ra-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A line graph shows temperature: 8am=10°C, 12pm=18°C, 4pm=22°C, 8pm=14°C. (a) Between which times did temperature rise most? (b) When was it warmest? (c) Describe the overall pattern. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line graph interpretation", statement: "Compare changes between points." }],
            steps: [
              { reasoning: "(a) Rises: 8→12 = +8°C; 12→4 = +4°C; 4→8 = −8°C.", marks: 1, markCode: "M" },
              { reasoning: "Largest rise = 8am to 12pm (+8°C).", marks: 1, markCode: "M" },
              { reasoning: "(b) Warmest = 22°C at 4pm.", marks: 1, markCode: "M" },
              { reasoning: "(c) Rose through the day, peaked at 4pm, then fell by evening.", marks: 1, markCode: "M" },
              { reasoning: "Pattern: rise then fall — typical daily temperature curve.", marks: 1, markCode: "M" },
              { reasoning: "Check differences sum: +8+4−8 = +4; 10+4=14 ✓ matches 8pm.", marks: 1, markCode: "M" },
              { reasoning: "Units °C consistent.", marks: 1, markCode: "M" },
              { reasoning: "Answers stated clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 8am–12pm; (b) 4pm, 22°C; (c) rose to peak then fell",
          },
        },
        {
          id: "cipm-u2-ra-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recipe uses 3 cups flour to 2 cups sugar. The ratio flour:sugar is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3:5" },
            { id: "b", text: "2:3" },
            { id: "c", text: "5:2" },
            { id: "d", text: "3:2" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Ratio", statement: "a:b compares parts in order." }],
            steps: [{ reasoning: "Flour first → 3:2.", marks: 1, markCode: "A" }],
            finalAnswer: "3:2",
          },
        },
        {
          id: "cipm-u2-ra-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve: x − 6 = 11.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Add 6 to both sides." }],
            steps: [
              { reasoning: "x = 11 + 6.", marks: 1, markCode: "M" },
              { reasoning: "x = 17.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 17",
          },
        },
        {
          id: "cipm-u2-ra-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a line graph, a steep section means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "no change" },
            { id: "b", text: "the data is wrong" },
            { id: "c", text: "the value is zero" },
            { id: "d", text: "a fast change" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line graphs", statement: "Steep = rapid change." }],
            steps: [{ reasoning: "A steep line shows the value changing quickly.", marks: 1, markCode: "A" }],
            finalAnswer: "a fast change",
          },
        },
        {
          id: "cipm-u2-ra-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve: 5x = 35.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Divide both sides by 5." }],
            steps: [
              { reasoning: "x = 35 ÷ 5.", marks: 1, markCode: "M" },
              { reasoning: "x = 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 7",
          },
        },
        {
          id: "cipm-u2-ra-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Share $48 between two people in the ratio 1:3. How much does the first person get?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$16" },
            { id: "b", text: "$12" },
            { id: "c", text: "$36" },
            { id: "d", text: "$24" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sharing in ratio", statement: "Total parts = 4; each = 12." }],
            steps: [{ reasoning: "Each part $= 48 \\div 4 = 12$; first share = 1 part = $12.", marks: 1, markCode: "A" }],
            finalAnswer: "$12",
          },
        },
        {
          id: "cipm-u2-ra-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A line graph shows distance travelled: 0 km at 9am, 30 km at 10am, 30 km at 11am, 60 km at 12pm. (a) Between which hours did the traveller stop? (b) What was the total distance at noon? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line graph interpretation", statement: "Flat section = no change." }],
            steps: [
              { reasoning: "(a) Distance stayed 30 km between 10am and 11am → stopped/rested.", marks: 1, markCode: "M" },
              { reasoning: "(b) At 12pm distance = 60 km.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10am–11am (b) 60 km",
          },
        },
        {
          id: "cipm-u2-ra-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which equation has the solution x = 8?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x \\div 8 = 2$" },
            { id: "b", text: "$x + 8 = 16$" },
            { id: "c", text: "$2x = 16$" },
            { id: "d", text: "$x - 8 = 16$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving equations", statement: "Check by substitution." }],
            steps: [{ reasoning: "$2 \\times 8 = 16$ ✓; others give different values.", marks: 1, markCode: "A" }],
            finalAnswer: "$2x = 16$",
          },
        },
        {
          id: "cipm-u2-ra-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve: x + 14 = 30.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Subtract 14 from both sides." }],
            steps: [
              { reasoning: "x = 30 − 14 = 16.", marks: 1, markCode: "M" },
              { reasoning: "Check: $16 + 14 = 30$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 16",
          },
        },
        {
          id: "cipm-u2-ra-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) Share $36 in the ratio 2:4 — what are the two shares? (b) Solve 3x = 24. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ratio and equations", statement: "Total parts; inverse operations." }],
            steps: [
              { reasoning: "(a) Total parts $= 6$; each $= 6$; shares $\\$12$ and $\\$24$.", marks: 1, markCode: "M" },
              { reasoning: "(b) x = 24 ÷ 3 = 8.", marks: 1, markCode: "M" },
              { reasoning: "Check: $3 \\times 8 = 24$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) \\$12 and \\$24 (b) x = 8",
          },
        },
        {
          id: "cipm-u2-ra-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before interpreting a line graph you should always…",
          response: { type: "mcq", choices: [
            { id: "a", text: "ignore the title" },
            { id: "b", text: "guess the answer" },
            { id: "c", text: "colour the lines" },
            { id: "d", text: "read the axis labels and scale" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Graphs", statement: "Check axes and scale first." }],
            steps: [{ reasoning: "Always read the axis labels and scale before reading values.", marks: 1, markCode: "A" }],
            finalAnswer: "read the axis labels and scale",
          },
        },
        {
          id: "cipm-u2-ra-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve: 2x + 4 = 20.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Undo in reverse order." }],
            steps: [
              { reasoning: "$2x = 20 - 4 = 16$; $x = 16 \\div 2 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $2 \\times 8 + 4 = 20$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 8",
          },
        },
        {
          id: "cipm-u2-ra-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Share $50 between A and B in the ratio 1:4. (b) Solve x − 7 = 13. (c) A line graph shows a flat section from 2pm to 4pm — what does this mean? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ratio, equations, graphs", statement: "Total parts; inverse ops; flat = no change." }],
            steps: [
              { reasoning: "(a) Total parts $= 5$; each $= 10$; A gets $10, B gets $40$.", marks: 1, markCode: "M" },
              { reasoning: "(b) x = 13 + 7 = 20.", marks: 1, markCode: "M" },
              { reasoning: "(c) The value stayed the same — no change between 2pm and 4pm.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "Units correct (£).", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) \\$10 and \\$40 (b) x = 20 (c) no change",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-ra-notes",
      title: "Ratio, algebra, line graphs — notes",
      summary: "a:b → total parts → share; inverse ops solve for x; line graphs show change.",
      sections: [
        { heading: "Ratio/algebra", body: "Find total parts for sharing; do the same operation to both sides." },
        { heading: "Graphs", body: "Steep = fast change; flat = steady; read axes first." },
      ],
    },
  ],
};
