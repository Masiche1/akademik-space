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
            { id: "a", text: "2 out of 3" }, { id: "b", text: "2 parts to 3 parts" }, { id: "c", text: "2 minus 3" }, { id: "d", text: "2 times 3" },
          ], correctChoiceId: "b" },
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
