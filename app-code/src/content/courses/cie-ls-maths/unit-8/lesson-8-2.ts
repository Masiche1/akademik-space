import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cilm-u8-lesson-8-2",
  code: "8-2",
  title: "Pie charts and two-way tables",
  goal: "I CAN interpret pie charts and extract information from two-way frequency tables.",
  standards: ["0862 Statistics: pie charts and tables"],
  vocabulary: [
    { term: "Pie chart", definition: "A circle divided into sectors proportional to frequencies." },
    { term: "Sector angle", definition: "Angle of each slice $= \\frac{\\text{frequency}}{\\text{total}} \\times 360°$." },
    { term: "Two-way table", definition: "Table showing frequencies for two variables together." },
    { term: "Marginal total", definition: "Row or column totals in a two-way table." },
    { term: "Joint frequency", definition: "Frequency in a single cell — counts both conditions." },
    { term: "Percentage", definition: "Part per hundred — $\\frac{\\text{part}}{\\text{whole}} \\times 100$." },
  ],
  concepts: [
    {
      id: "cilm-u8-pie",
      title: "Pie charts",
      skill: "Calculate sector angles, read pie charts, and convert between angles and frequencies.",
      lesson: {
        sections: [
          {
            heading: "Sector angles",
            body: "Each sector angle $= \\frac{f}{N} \\times 360°$.\n\n20 students: 8 like football → $\\frac{8}{20} \\times 360 = 144°$.",
          },
          {
            heading: "Reading pie charts",
            body: "Measure angle with protractor, or use: frequency $= \\frac{\\text{angle}}{360} \\times N$. Larger sector = larger proportion.",
          },
          {
            heading: "Comparing categories",
            body: "Sector angles compare proportions directly. To find actual numbers, need the total $N$.",
          },
        ],
        keyFormulas: [
          { name: "Sector angle", statement: "$\\theta = \\frac{f}{N} \\times 360°$; inverse: $f = \\frac{\\theta}{360} \\times N$." },
        ],
        workedExample: {
          problem: "60 people surveyed; 15 prefer tea. Find sector angle and frequency for a $90°$ sector.",
          solution: "Tea: $\\frac{15}{60}\\times360=90°$. A $90°$ sector represents $\\frac{90}{360}\\times60=15$ people.",
        },
      },
      questions: [
        {
          id: "cilm-u8-pie-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pie chart sector has angle $90°$. What fraction of the total does it represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{4}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$\\frac{1}{6}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sector fraction", statement: "$\\frac{90}{360}=\\frac{1}{4}$." },
            ],
            steps: [
              { reasoning: "$90°$ out of $360°$ is a quarter.", working: "90/360=1/4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{4}$",
            commonErrors: ["Choosing (b) — $180°$ would be half."],
          },
        },
        {
          id: "cilm-u8-pie-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Out of 80 students, 20 walk to school. What is the sector angle for walkers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sector angle", statement: "$\\frac{20}{80}\\times360=90°$." },
            ],
            steps: [
              { reasoning: "$\\frac{20}{80}=\\frac{1}{4}$; $\\frac{1}{4}\\times360=90°$.", working: "90°", marks: 1, markCode: "M" },
              { reasoning: "$90°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90°$",
            commonErrors: ["$\\frac{20}{360}$ — denominator is total frequency, not $360$."],
          },
        },
        {
          id: "cilm-u8-pie-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pie chart of 120 pets shows dogs $120°$, cats $90°$, fish $60°$, birds $90°$. Find the number of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Angle to frequency", statement: "$f = \\frac{\\theta}{360} \\times 120$." },
            ],
            steps: [
              { reasoning: "Dogs: $\\frac{120}{360}\\times120=40$; cats: $30$; fish: $20$; birds: $30$.", working: "40,30,20,30", marks: 1, markCode: "M" },
              { reasoning: "All four correct.", marks: 1, markCode: "M" },
              { reasoning: "Values sum to $120$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dogs $40$, cats $30$, fish $20$, birds $30$",
            commonErrors: ["Using angles directly as counts — must convert via $\\frac{\\theta}{360}\\times N$."],
          },
        },
        {
          id: "cilm-u8-pie-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A survey of 200 people about favourite season.",
          parts: [
            { label: "a", prompt: "Spring: $60$ people. Find sector angle.", marks: 2 },
            { label: "b", prompt: "Summer sector is $100°$. How many people?", marks: 2 },
            { label: "c", prompt: "If winter has $50$ people, find its angle.", marks: 2 },
            { label: "d", prompt: "Check the four angles sum to $360°$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pie chart calculations", statement: "Angle $=\\frac{f}{200}\\times360$; frequency $=\\frac{\\theta}{360}\\times200$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\frac{60}{200}\\times360=108°$.", working: "108°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\frac{100}{360}\\times200=55.6$ (or $55$) people.", working: "55.6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct conversion.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{50}{200}\\times360=90°$.", working: "90°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Need autumn too: $200-60-55.6-50=34.4$ people → angle $\\approx62°$; check sum.", working: "\\text{sum}=360", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Missing category identified.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Sum verified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $108°$ (b) $\\approx56$ people (c) $90°$ (d) angles sum to $360°$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Sum verified.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) forgetting the fourth season — all categories needed for $360°$."],
          },
        },
      ],
    },
    {
      id: "cilm-u8-twoway",
      title: "Two-way tables",
      skill: "Read and interpret frequencies in two-way tables, find marginal and joint totals.",
      lesson: {
        sections: [
          {
            heading: "Structure",
            body: "Rows = one variable, columns = another. Cells = joint frequencies. Row/column totals = marginal totals. Grand total = bottom-right.",
          },
          {
            heading: "Example",
            body: "Boys/Girls × Walk/Bus:\n\n| | Walk | Bus | Total |\n| Boys | 8 | 12 | 20 |\n| Girls | 12 | 8 | 20 |\n| Total | 20 | 20 | 40 |\n\nJoint: boys who walk = 8. Marginal: all walkers = 20.",
          },
          {
            heading: "Questions to ask",
            body: "- How many in a cell? (joint)\n- How many in a row/column? (marginal)\n- What percentage of total?\n- Conditional: of boys, how many walk? $= \\frac{8}{20}$.",
          },
        ],
        keyFormulas: [
          { name: "Two-way table", statement: "Cell = joint frequency; margins = totals; grand total = sum of all." },
        ],
        workedExample: {
          problem: "Using the table above: what fraction of all students walk? What fraction of boys walk?",
          solution: "All: $\\frac{20}{40}=\\frac{1}{2}$. Boys: $\\frac{8}{20}=\\frac{2}{5}$.",
        },
      },
      questions: [
        {
          id: "cilm-u8-2way-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a two-way table, the bottom-right cell shows...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The grand total" },
              { id: "b", text: "The mean" },
              { id: "c", text: "A joint frequency" },
              { id: "d", text: "The mode" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Grand total", statement: "Bottom-right = sum of all frequencies." },
            ],
            steps: [
              { reasoning: "Grand total sits at bottom-right corner.", working: "grand total", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The grand total",
            commonErrors: ["Choosing (c) — joint frequencies are in interior cells."],
          },
        },
        {
          id: "cilm-u8-2way-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Table: | | Yes | No | Total | | A | 10 | 5 | 15 | | B | 8 | 7 | 15 | | Total | 18 | 12 | 30 |. How many in group A answered Yes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Joint frequency", statement: "Cell A-Yes = 10." },
            ],
            steps: [
              { reasoning: "Row A, column Yes → $10$.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "$10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Reading the row total ($15$) instead of the cell."],
          },
        },
        {
          id: "cilm-u8-2way-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Same table. What fraction of group B answered No? What percentage of ALL answered Yes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conditional probability", statement: "B-No: $\\frac{7}{15}$; all-Yes: $\\frac{18}{30}=60\\%$." },
            ],
            steps: [
              { reasoning: "Group B: $7$ No out of $15$ → $\\frac{7}{15}$.", working: "7/15", marks: 1, markCode: "M" },
              { reasoning: "Yes total: $\\frac{18}{30} = 0.6 = 60\\%$.", working: "60%", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "M" },
              { reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{7}{15}$; $60\\%$",
            commonErrors: ["Using grand total for group B — conditional uses row total."],
          },
        },
        {
          id: "cilm-u8-2way-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A survey of 100 students: | | Science | Arts | Total | | Year 12 | 35 | 15 | 50 | | Year 13 | 25 | 25 | 50 | | Total | 60 | 40 | 100 |.",
          parts: [
            { label: "a", prompt: "How many Year 12 students study Arts?", marks: 1 },
            { label: "b", prompt: "What fraction of Science students are in Year 12?", marks: 2 },
            { label: "c", prompt: "What percentage of all students study Arts?", marks: 2 },
            { label: "d", prompt: "Are subject and year independent? Explain using the table.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Two-way analysis", statement: "Joint/marginal frequencies; independence requires equal proportions across groups." },
            ],
            steps: [
              { part: "a", reasoning: "Year 12 Arts cell $=15$.", working: "15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\frac{35}{60}=\\frac{7}{12}$.", working: "7/12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{40}{100}=40\\%$.", working: "40%", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Year 12: $35/50=70\\%$ science; Year 13: $25/50=50\\%$ — different proportions suggest association.", working: "70% vs 50%", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Comparison made.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Not independent — proportions differ.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $15$ (b) $\\frac{7}{12}$ (c) $40\\%$ (d) Not independent — science proportion differs by year",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "Independence analysed.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) comparing raw counts not proportions — $35$ vs $25$ ignores group sizes."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u8-pie-twoway-notes",
      title: "Pie charts and two-way tables — revision notes",
      summary: "Sector angles, joint and marginal frequencies.",
      sections: [
        {
          heading: "Pie charts",
          body: "Angle $=\\frac{f}{N}\\times360°$; frequency $=\\frac{\\theta}{360}\\times N$. Sectors proportional to frequencies.",
        },
        {
          heading: "Two-way tables",
          body: "Cells = joint frequencies; margins = totals. Conditional questions use row/column total as denominator, not grand total.",
        },
      ],
    },
  ],
};
