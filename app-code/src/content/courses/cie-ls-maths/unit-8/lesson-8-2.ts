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
              { id: "a", text: "$\\frac{1}{3}$" },
              { id: "b", text: "$\\frac{1}{6}$" },
              { id: "c", text: "$\\frac{1}{4}$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sector fraction", statement: "$\\frac{90}{360}=\\frac{1}{4}$." },
            ],
            steps: [
              { reasoning: "$90°$ out of $360°$ is a quarter.", working: "90/360=1/4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac{1}{4}$",
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
        {
          id: "cilm-u8-pie-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pie chart sector has angle $60°$. What fraction of the total does it represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{6}$" },
              { id: "b", text: "$\\frac{1}{12}$" },
              { id: "c", text: "$\\frac{1}{4}$" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sector fraction", statement: "$\\frac{60}{360}=\\frac{1}{6}$." },
            ],
            steps: [
              { reasoning: "$60°$ of $360°$ is one sixth.", working: "60/360=1/6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{6}$",
            commonErrors: ["Choosing (a) — $120°$ would be a third."],
          },
        },
        {
          id: "cilm-u8-pie-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Out of $90$ students, $30$ prefer science. What is the sector angle for science?",
          response: { type: "numeric", parts: [{ label: "angle (degrees)", answer: 120 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sector angle", statement: "$\\frac{30}{90}\\times360 = 120°$." },
            ],
            steps: [
              { reasoning: "$\\frac{30}{90}=\\frac{1}{3}$; $\\frac{1}{3}\\times360=120°$.", working: "120", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$120°$",
            commonErrors: ["$30°$ — used frequency directly as angle."],
          },
        },
        {
          id: "cilm-u8-pie-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pie chart represents $80$ people in total. A sector has angle $45°$. How many people does it represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Angle to frequency", statement: "$f = \\frac{\\theta}{360}\\times N = \\frac{45}{360}\\times80 = 10$." },
            ],
            steps: [
              { reasoning: "$\\frac{45}{360}=\\frac{1}{8}$; $\\frac{1}{8}\\times80 = 10$ people.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "$10$ people.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ people",
            commonErrors: ["$45$ — angle is not a count; must scale by $N/360$."],
          },
        },
        {
          id: "cilm-u8-pie-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a pie chart, the LARGEST sector represents the category with...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The smallest frequency" },
              { id: "b", text: "The mean frequency" },
              { id: "c", text: "The largest frequency" },
              { id: "d", text: "No particular frequency" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pie chart", statement: "Sector angle proportional to frequency — bigger angle = bigger count." },
            ],
            steps: [
              { reasoning: "Larger sector angle → larger frequency.", working: "proportional", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The largest frequency",
            commonErrors: ["Thinking sector size is arbitrary — it's proportional to data."],
          },
        },
        {
          id: "cilm-u8-pie-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Out of $50$ people, $10$ prefer tea. What is the sector angle for tea?",
          response: { type: "numeric", parts: [{ label: "angle (degrees)", answer: 72 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sector angle", statement: "$\\frac{10}{50}\\times360 = 72°$." },
            ],
            steps: [
              { reasoning: "$\\frac{10}{50}=\\frac{1}{5}$; $\\frac{1}{5}\\times360=72°$.", working: "72", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$72°$",
            commonErrors: ["$10°$ — frequency is not the angle."],
          },
        },
        {
          id: "cilm-u8-pie-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A pie chart of $48$ students shows: Art $90°$, Music $60°$, Drama $120°$, and a fourth category. Find the angle and frequency of the fourth category.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pie chart", statement: "Angles sum to $360°$: fourth $=360-270=90°$; frequency $=\\frac{90}{360}\\times48=12$." },
            ],
            steps: [
              { reasoning: "Fourth angle $= 360 - (90+60+120) = 90°$.", working: "90°", marks: 1, markCode: "M" },
              { reasoning: "Frequency $= \\frac{90}{360}\\times48 = 12$ students.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "$90°$, $12$ students.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90°$, $12$ students",
            commonErrors: ["Forgetting angles must total $360°$."],
          },
        },
        {
          id: "cilm-u8-pie-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sector angles in a complete pie chart always sum to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$270°$" },
              { id: "b", text: "$180°$" },
              { id: "c", text: "$360°$" },
              { id: "d", text: "$100°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pie chart", statement: "A full circle = $360°$." },
            ],
            steps: [
              { reasoning: "All sector angles sum to $360°$.", working: "360°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $360°$",
            commonErrors: ["Choosing (a) — that's a straight line, not a circle."],
          },
        },
        {
          id: "cilm-u8-pie-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pie chart represents $150$ people. A sector has angle $240°$. How many people does it represent?",
          response: { type: "numeric", parts: [{ label: "people", answer: 100 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Angle to frequency", statement: "$f = \\frac{240}{360}\\times150 = 100$." },
            ],
            steps: [
              { reasoning: "$\\frac{240}{360}=\\frac{2}{3}$; $\\frac{2}{3}\\times150 = 100$ people.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "$100$ people.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ people",
            commonErrors: ["$240$ — angle read as count."],
          },
        },
        {
          id: "cilm-u8-pie-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a pie chart of $60$ people, categories have frequencies $12$, $18$ and $30$. What is the largest sector angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60°$" },
              { id: "b", text: "$180°$" },
              { id: "c", text: "$90°$" },
              { id: "d", text: "$120°$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sector angle", statement: "Largest frequency $30$: $\\frac{30}{60}\\times360 = 180°$." },
            ],
            steps: [
              { reasoning: "Largest count $30$ → $\\frac{30}{60}\\times360 = 180°$.", working: "180°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $180°$",
            commonErrors: ["Choosing (b) — that's for frequency $18$."],
          },
        },
        {
          id: "cilm-u8-pie-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "$120$ students were asked their favourite fruit: apple $45$, banana $30$, orange $25$, grape $20$.",
          parts: [
            { label: "a", prompt: "Find the sector angle for apple.", marks: 2 },
            { label: "b", prompt: "Find the sector angle for grape.", marks: 2 },
            { label: "c", prompt: "Verify that all four sector angles sum to $360°$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sector angles", statement: "$\\theta = \\frac{f}{120}\\times360$; total must be $360°$." },
            ],
            steps: [
              { part: "a", reasoning: "Apple: $\\frac{45}{120}\\times360 = 135°$.", working: "135°", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Grape: $\\frac{20}{120}\\times360 = 60°$.", working: "60°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "All angles: $135+90+75+60 = 360°$ ✓ (banana $90°$, orange $75°$).", working: "360°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $135°$ (b) $60°$ (c) $135+90+75+60=360°$ ✓",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Verified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
            ],
            commonErrors: ["In (c) only checking two sectors — all four needed."],
          },
        },
        {
          id: "cilm-u8-pie-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two sectors of a pie chart have equal angles. This means the two categories have...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No relationship" },
              { id: "b", text: "Frequencies differing by $360°$" },
              { id: "c", text: "Zero frequency" },
              { id: "d", text: "Equal frequencies" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pie chart", statement: "Equal angles ↔ equal proportions ↔ equal frequencies." },
            ],
            steps: [
              { reasoning: "Equal sector angles mean equal frequencies.", working: "equal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Equal frequencies",
            commonErrors: ["Thinking angle equality is coincidental — it's proportional."],
          },
        },
        {
          id: "cilm-u8-pie-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a pie chart of $240$ people, the 'Other' sector has angle $60°$. How many people does 'Other' represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Angle to frequency", statement: "$f = \\frac{60}{360}\\times240 = 40$." },
            ],
            steps: [
              { reasoning: "$\\frac{60}{360}=\\frac{1}{6}$; $\\frac{1}{6}\\times240 = 40$.", working: "40", marks: 1, markCode: "M" },
              { reasoning: "$40$ people.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ people",
            commonErrors: ["$60$ — angle used directly as count."],
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
              { id: "b", text: "The mode" },
              { id: "c", text: "A joint frequency" },
              { id: "d", text: "The mean" },
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
        {
          id: "cilm-u8-2way-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A row total in a two-way table represents...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The grand total" },
              { id: "b", text: "A joint frequency" },
              { id: "c", text: "The mean of the row" },
              { id: "d", text: "The total for that row's group" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Marginal total", statement: "Row/column totals are marginal totals for that group." },
            ],
            steps: [
              { reasoning: "Row total = total frequency for that group.", working: "marginal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The total for that row's group",
            commonErrors: ["Choosing (a) — grand total is bottom-right only."],
          },
        },
        {
          id: "cilm-u8-2way-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Table: | | Yes | No | Total | | M | 12 | 8 | 20 | | F | 10 | 10 | 20 | | Total | 22 | 18 | 40 |. How many males answered No?",
          response: { type: "numeric", parts: [{ label: "males answering No", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Joint frequency", statement: "Cell M-No = 8." },
            ],
            steps: [
              { reasoning: "Row M, column No → $8$.", working: "8", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Reading the row total $20$ instead of the cell."],
          },
        },
        {
          id: "cilm-u8-2way-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using the same table (M: 12 Yes, 8 No, 20 total; F: 10 Yes, 10 No, 20 total): what fraction of females answered Yes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conditional fraction", statement: "Females Yes $= \\frac{10}{20} = \\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "Female row total $=20$; Yes cell $=10$ → $\\frac{10}{20}=\\frac{1}{2}$.", working: "10/20", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{2}$",
            commonErrors: ["Using grand total $40$ — conditional uses row total."],
          },
        },
        {
          id: "cilm-u8-2way-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'joint frequency' in a two-way table is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A row total" },
              { id: "b", text: "The grand total" },
              { id: "c", text: "A count satisfying both conditions in one cell" },
              { id: "d", text: "An average" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Joint frequency", statement: "Cell count = frequency satisfying BOTH variables." },
            ],
            steps: [
              { reasoning: "Joint = both conditions, one cell.", working: "joint", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A count satisfying both conditions in one cell",
            commonErrors: ["Confusing with marginal (row/column) totals."],
          },
        },
        {
          id: "cilm-u8-2way-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Using the table | | Yes | No | Total | | M | 12 | 8 | 20 | | F | 10 | 10 | 20 | | Total | 22 | 18 | 40 | — how many people were surveyed in total?",
          response: { type: "numeric", parts: [{ label: "grand total", answer: 40 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Grand total", statement: "Bottom-right cell $= 40$." },
            ],
            steps: [
              { reasoning: "Grand total $= 40$.", working: "40", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$40$",
            commonErrors: ["Reading a row total instead of grand total."],
          },
        },
        {
          id: "cilm-u8-2way-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Table: | | Walk | Bus | Total | | Boys | 8 | 12 | 20 | | Girls | 12 | 8 | 20 | | Total | 20 | 20 | 40 |. What fraction of ALL students walk to school?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Marginal fraction", statement: "Walkers $=20$ out of $40$ → $\\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "Total walkers (column marginal) $= 20$; grand total $=40$.", working: "20/40", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{20}{40} = \\frac{1}{2}$.", working: "1/2", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{2}$",
            commonErrors: ["Adding boys+girls walk cells then dividing by wrong total."],
          },
        },
        {
          id: "cilm-u8-2way-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The totals shown at the ends of rows and columns in a two-way table are called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grand totals" },
              { id: "b", text: "Modal values" },
              { id: "c", text: "Marginal totals" },
              { id: "d", text: "Joint frequencies" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Marginal total", statement: "Row/column edge totals are marginal totals." },
            ],
            steps: [
              { reasoning: "Edge totals = marginal totals.", working: "marginal", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Marginal totals",
            commonErrors: ["Choosing (a) — joints are interior cells."],
          },
        },
        {
          id: "cilm-u8-2way-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using the walk/bus table (Boys: 8 walk, 12 bus; Girls: 12 walk, 8 bus): how many girls take the bus?",
          response: { type: "numeric", parts: [{ label: "girls taking bus", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Joint frequency", statement: "Girls-Bus cell $= 8$." },
            ],
            steps: [
              { reasoning: "Row Girls, column Bus $= 8$.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "$8$ girls.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Reading girls-walk $12$ — wrong column."],
          },
        },
        {
          id: "cilm-u8-2way-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In the walk/bus table, boys have $8/20 = 40\%$ walking and girls have $12/20 = 60\%$ walking. Which group has the higher proportion walking?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Girls" },
              { id: "b", text: "Cannot tell" },
              { id: "c", text: "Boys" },
              { id: "d", text: "Equal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Compare proportions", statement: "$60\% > 40\%$ — girls walk more often proportionally." },
            ],
            steps: [
              { reasoning: "$60\%$ girls vs $40\%$ boys → girls higher.", working: "60>40", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Girls",
            commonErrors: ["Comparing raw counts $12$ vs $8$ without checking — proportions here do agree though."],
          },
        },
        {
          id: "cilm-u8-2way-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Table of 100 students: | | Science | Arts | Total | | Year 12 | 35 | 15 | 50 | | Year 13 | 25 | 25 | 50 | | Total | 60 | 40 | 100 |.",
          parts: [
            { label: "a", prompt: "How many Year 12 students study Science?", marks: 2 },
            { label: "b", prompt: "What fraction of Arts students are in Year 13?", marks: 2 },
            { label: "c", prompt: "What percentage of all students study Science?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Two-way table", statement: "Cell = joint; column/row totals for conditional questions." },
            ],
            steps: [
              { part: "a", reasoning: "Year 12 Science cell $= 35$.", working: "35", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Arts total $=40$; Year 13 Arts $=25$ → $\\frac{25}{40}=\\frac{5}{8}$.", working: "5/8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Science total $=60$ → $\\frac{60}{100}=60\\%$.", working: "60%", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $35$ (b) $\\frac{5}{8}$ (c) $60\\%$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["In (b) dividing by grand total $100$ instead of Arts total $40$."],
          },
        },
        {
          id: "cilm-u8-2way-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A single interior cell showing $15$ in a two-way table represents...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A percentage" },
              { id: "b", text: "A joint frequency" },
              { id: "c", text: "The grand total" },
              { id: "d", text: "A marginal total" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Joint frequency", statement: "Interior cells hold joint frequencies." },
            ],
            steps: [
              { reasoning: "Interior cell $=$ joint frequency.", working: "joint", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A joint frequency",
            commonErrors: ["Choosing (a) — marginals are on the edges."],
          },
        },
        {
          id: "cilm-u8-2way-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between a marginal frequency and a joint frequency in a two-way table.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Table terms", statement: "Marginal = row/column total; joint = single cell count." },
            ],
            steps: [
              { reasoning: "Marginal frequency is the total for one variable's category (row or column edge).", working: "marginal", marks: 1, markCode: "M" },
              { reasoning: "Joint frequency counts one cell — both conditions together.", working: "joint", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Marginal = edge total for one group; joint = single cell satisfying both conditions.",
            commonErrors: ["Reversing the definitions."],
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
