import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "cilm-u8-lesson-8-1",
  code: "8-1",
  title: "Averages and data display",
  goal: "I CAN calculate mean, median and mode, and read bar charts and pictograms.",
  standards: ["0862 Statistics: averages and display"],
  vocabulary: [
    { term: "Mean", definition: "Sum of all values divided by count — the 'average'." },
    { term: "Median", definition: "Middle value when data is ordered." },
    { term: "Mode", definition: "Most frequent value." },
    { term: "Range", definition: "Largest value minus smallest." },
    { term: "Bar chart", definition: "Bars whose heights represent frequencies." },
    { term: "Pictogram", definition: "Symbols representing quantities, often with a key." },
  ],
  concepts: [
    {
      id: "cilm-u8-averages",
      title: "Mean, median, mode",
      skill: "Calculate and compare the three averages, choosing the appropriate one.",
      lesson: {
        sections: [
          {
            heading: "The three averages",
            body: "- **Mean**: $\\frac{\\text{sum}}{\\text{count}}$ — uses all data, affected by outliers\n- **Median**: middle value of ordered data — resistant to outliers\n- **Mode**: most frequent — can have multiple or none",
          },
          {
            heading: "When to use which",
            body: "Mean for evenly spread data; median when outliers distort the mean; mode for categorical data (most popular choice).",
          },
          {
            heading: "Range",
            body: "Range $= \\max - \\min$. Shows spread — small range = consistent, large range = variable.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x} = \\frac{\\sum x}{n}$" },
          { name: "Range", statement: "$\\text{range} = \\max - \\min$" },
        ],
        workedExample: {
          problem: "Find mean, median, mode and range of $4, 7, 7, 9, 13$.",
          solution: "Mean $=40/5=8$; median $=7$; mode $=7$; range $=13-4=9$.",
        },
      },
      questions: [
        {
          id: "cilm-u8-avg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mode of $3, 5, 5, 7, 9, 5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "No mode" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mode", statement: "Most frequent value — $5$ appears three times." },
            ],
            steps: [
              { reasoning: "$5$ appears $3$ times, most frequent → mode $=5$.", working: "mode=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Choosing (c) — that's the mean, not mode."],
          },
        },
        {
          id: "cilm-u8-avg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mean of $12, 15, 18, 21, 24$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Mean", statement: "$\\frac{90}{5}=18$." },
            ],
            steps: [
              { reasoning: "Sum $=12+15+18+21+24=90$; mean $=90\\div5=18$.", working: "90\\div5=18", marks: 1, markCode: "M" },
              { reasoning: "Mean $=18$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$",
            commonErrors: ["$90 \\times 5$ — mean divides sum by count."],
          },
        },
        {
          id: "cilm-u8-avg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Data: $8, 10, 12, 12, 15, 18, 100$. Find mean, median and explain which better represents the data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Outliers", statement: "Mean distorted by $100$; median more representative." },
            ],
            steps: [
              { reasoning: "Mean $=175/7=25$; median $=12$.", working: "mean=25, med=12", marks: 1, markCode: "M" },
              { reasoning: "Mean $25$ vs median $12$ — big difference.", marks: 1, markCode: "M" },
              { reasoning: "Median better — outlier $100$ inflates mean.", working: "\\text{median}", marks: 1, markCode: "M" },
              { reasoning: "Justified choice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mean $25$, median $12$; median is more representative due to outlier",
            commonErrors: ["Only giving mean — question asks for comparison."],
          },
        },
        {
          id: "cilm-u8-avg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A class scored on a test: $45, 52, 58, 61, 63, 67, 70, 72, 75, 78$.",
          parts: [
            { label: "a", prompt: "Find the mean score.", marks: 3 },
            { label: "b", prompt: "Find the median score.", marks: 2 },
            { label: "c", prompt: "Find the range.", marks: 1 },
            { label: "d", prompt: "If a score of $100$ is added, how does this affect mean vs median?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Statistics", statement: "Mean uses all values; median uses middle; outliers affect mean more." },
            ],
            steps: [
              { part: "a", reasoning: "Sum $=641$; mean $=641/10=64.1$.", working: "64.1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct sum.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mean $64.1$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Median $=\\frac{63+67}{2}=65$.", working: "65", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Range $=78-45=33$.", working: "33", marks: 1, markCode: "M" },
              { part: "d", reasoning: "New mean $=741/11=67.4$ (up $3.3$); median becomes $67$ (up $2$).", working: "mean=67.4,med=67", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Mean affected more than median.", working: "\\text{mean more}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $64.1$ (b) $65$ (c) $33$ (d) mean rises more than median — outlier effect",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Mean correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Median correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Range correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Effect explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying both change equally — mean is more sensitive."],
          },
        },
        {
          id: "cilm-u8-avg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the median of $4, 8, 6, 10, 12$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median", statement: "Order first: $4, 6, 8, 10, 12$ — middle value is $8$." },
            ],
            steps: [
              { reasoning: "Ordered data has $5$ values; the $3$rd (middle) is $8$.", working: "4,6,8,10,12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $8$",
            commonErrors: ["Choosing (b) — used unordered position instead of ordering first."],
          },
        },
        {
          id: "cilm-u8-avg-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the mean of $6, 9, 12, 15, 18$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Mean", statement: "$\\frac{60}{5}=12$." },
            ],
            steps: [
              { reasoning: "Sum $=6+9+12+15+18=60$; mean $=60\\div5=12$.", working: "60\\div5=12", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["$60\\times5$ — mean divides by count."],
          },
        },
        {
          id: "cilm-u8-avg-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mode and the range of $3, 7, 7, 9, 12, 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Mode and range", statement: "Mode $=7$ (appears $3$ times); range $=12-3=9$." },
            ],
            steps: [
              { reasoning: "Mode $=7$; range $=12-3=9$.", working: "7\\text{ and }9", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mode $7$; range $9$",
            commonErrors: ["Range $12-7$ — subtract smallest, not mode."],
          },
        },
        {
          id: "cilm-u8-avg-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the range of $15, 22, 8, 31, 19$?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 23 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Range", statement: "Range $=\\max-\\min=31-8=23$." },
            ],
            steps: [
              { reasoning: "Largest $31$, smallest $8$; range $=23$.", working: "31-8=23", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$23$",
            commonErrors: ["$31+8$ — range is a difference, not a sum."],
          },
        },
        {
          id: "cilm-u8-avg-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which average is LEAST affected by a very large outlier in a data set?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mean" },
              { id: "b", text: "Median" },
              { id: "c", text: "Mode" },
              { id: "d", "text": "They are all affected equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Robust statistics", statement: "Median depends only on position, not extreme values." },
            ],
            steps: [
              { reasoning: "Median uses only the middle value — outliers barely change it.", working: "\\text{median}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Median",
            commonErrors: ["Choosing (a) — mean uses every value including the outlier."],
          },
        },
        {
          id: "cilm-u8-avg-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the mean of $2.5, 3.5, 4.0, 5.0, 5.0$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Mean", statement: "Sum $=20$; mean $=20\\div5=4$." },
            ],
            steps: [
              { reasoning: "Sum $=2.5+3.5+4+5+5=20$; mean $=4$.", working: "20\\div5=4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Arithmetic slip adding decimals — align decimal points."],
          },
        },
        {
          id: "cilm-u8-avg-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "For the data $10, 14, 18, 22, 36$, find the mean and the median, and state which is larger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mean vs median", statement: "Mean $=100/5=20$; median $=18$; outlier $36$ pulls mean up." },
            ],
            steps: [
              { reasoning: "Mean $=\\frac{10+14+18+22+36}{5}=\\frac{100}{5}=20$.", working: "20", marks: 1, markCode: "M" },
              { reasoning: "Median $=18$ (middle of ordered data); mean $20$ is larger.", working: "18<20", marks: 1, markCode: "M" },
              { reasoning: "Mean larger because outlier $36$ inflates it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mean $20$, median $18$; mean is larger due to the outlier",
            commonErrors: ["Only finding one average — question asks for both plus comparison."],
          },
        },
        {
          id: "cilm-u8-avg-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the data $5, 9, 13, 17, 21$, find the mean and the range.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 13 }, { label: "Range", answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Mean and range", statement: "Mean $=65/5=13$; range $=21-5=16$." },
            ],
            steps: [
              { reasoning: "Sum $=65$; mean $=13$.", working: "13", marks: 1, markCode: "M" },
              { reasoning: "Range $=21-5=16$.", working: "16", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Mean $13$; range $16$",
            commonErrors: ["Swapping answers — mean is an average, range is a spread."],
          },
        },
        {
          id: "cilm-u8-avg-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For data about 'favourite colour' (red, blue, green), which average is most useful?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mean" },
              { id: "b", text: "Median" },
              { id: "c", text: "Mode" },
              { id: "d", text: "Range" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Choosing an average", statement: "Mode works for categories — most popular colour." },
            ],
            steps: [
              { reasoning: "Colours can't be averaged numerically; mode gives most frequent.", working: "\\text{mode}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Mode",
            commonErrors: ["Choosing (a) — mean needs numerical data."],
          },
        },
        {
          id: "cilm-u8-avg-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A data set has mean $10$. Every value is then increased by $5$. What is the new mean?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Effect of shifts", statement: "Adding a constant to every value shifts the mean by the same amount." },
            ],
            steps: [
              { reasoning: "New mean $=10+5=15$.", working: "15", marks: 1, markCode: "M" },
              { reasoning: "Mean $15$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$",
            commonErrors: ["$10\\times5=50$ — the shift is additive, not multiplicative."],
          },
        },
        {
          id: "cilm-u8-avg-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Test scores: $10, 14, 16, 18, 22, 40$.",
          parts: [
            { label: "a", prompt: "Find the mean score.", marks: 3 },
            { label: "b", prompt: "Find the median score.", marks: 2 },
            { label: "c", prompt: "State the mode.", marks: 1 },
            { label: "d", prompt: "Explain which average best represents the class.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Statistics", statement: "Mean $=20$; median $=17$; no mode; outlier $40$ favours median." },
            ],
            steps: [
              { part: "a", reasoning: "Sum $=10+14+16+18+22+40=120$; mean $=120/6=20$.", working: "20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct sum.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mean $20$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Median $=\\frac{16+18}{2}=17$.", working: "17", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No mode — all values appear once.", working: "\\text{none}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Mean $20$ pulled up by outlier $40$; median $17$ more typical.", working: "\\text{median}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Outlier effect explained.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Justified choice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $20$ (b) $17$ (c) no mode (d) median — outlier inflates mean",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Mean correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Median correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Justified.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (c) forcing a mode — a data set can have none."],
          },
        },
        {
          id: "cilm-u8-avg-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A data set has $8$ values. How is the median found?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The middle (4th) value" },
              { id: "b", text: "The mean of the 4th and 5th values" },
              { id: "c", text: "The most frequent value" },
              { id: "d", text: "Largest minus smallest" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Median (even count)", statement: "Even count → average the two middle values." },
            ],
            steps: [
              { reasoning: "$8$ values: positions $4$ and $5$ are central; median is their mean.", working: "\\text{mean of 4th,5th}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The mean of the 4th and 5th values",
            commonErrors: ["Choosing (a) — only valid for odd counts."],
          },
        },
      ],
    },
    {
      id: "cilm-u8-display",
      title: "Reading charts",
      skill: "Interpret bar charts, pictograms and frequency tables.",
      lesson: {
        sections: [
          {
            heading: "Bar charts",
            body: "Bar height = frequency. Read values by matching bar tops to y-axis. Compare categories by relative bar heights.",
          },
          {
            heading: "Pictograms",
            body: "Symbols represent quantities — check the key (e.g. $\\square = 5$ students). Half symbols = half the value.",
          },
          {
            heading: "Frequency tables",
            body: "Data organised in tally/frequency form. Total frequency = sum of all frequencies. Can compute averages from tables.",
          },
        ],
        keyFormulas: [
          { name: "Total frequency", statement: "$\\sum f$ — sum of all frequencies." },
        ],
        workedExample: {
          problem: "A pictogram shows $\\blacksquare=10$ votes. Party A has $3$ squares, Party B has $1.5$ squares. Find votes.",
          solution: "A: $3\\times10=30$; B: $1.5\\times10=15$ votes.",
        },
      },
      questions: [
        {
          id: "cilm-u8-chart-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a pictogram where $\\square = 4$ apples, how many apples does $2.5$ squares represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Pictogram", statement: "$2.5 \\times 4 = 10$ apples." },
            ],
            steps: [
              { reasoning: "$2.5 \\times 4 = 10$ apples.", working: "2.5\\times4=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $10$",
            commonErrors: ["Choosing (b) — added instead of multiplied."],
          },
        },
        {
          id: "cilm-u8-chart-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A frequency table shows: A=5, B=8, C=3, D=4. What is the total frequency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Total frequency", statement: "$5+8+3+4=20$." },
            ],
            steps: [
              { reasoning: "Add all frequencies: $20$.", working: "5+8+3+4=20", marks: 1, markCode: "M" },
              { reasoning: "Total $=20$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$",
            commonErrors: ["Missing a category — check all values added."],
          },
        },
        {
          id: "cilm-u8-chart-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bar chart shows favourite sports: Football 12, Cricket 8, Tennis 6, Other 4. Find the mean number per sport and the most popular.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Chart to stats", statement: "Mean $=30/4=7.5$; mode = Football (highest bar)." },
            ],
            steps: [
              { reasoning: "Total $=12+8+6+4=30$; mean $=30/4=7.5$.", working: "7.5", marks: 1, markCode: "M" },
              { reasoning: "Mean $7.5$.", marks: 1, markCode: "M" },
              { reasoning: "Football most popular ($12$ highest).", working: "\\text{football}", marks: 1, markCode: "M" },
              { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mean $7.5$; Football most popular",
            commonErrors: ["Using median instead of mean — question asks for mean."],
          },
        },
        {
          id: "cilm-u8-chart-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A school surveys 40 students about transport: Walk 10, Bus 15, Car 12, Bike 3.",
          parts: [
            { label: "a", prompt: "Verify total $=40$.", marks: 1 },
            { label: "b", prompt: "Find the percentage who walk.", marks: 2 },
            { label: "c", prompt: "Draw a bar chart description (heights).", marks: 3 },
            { label: "d", prompt: "Which is the mode and what does it tell us?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Data interpretation", statement: "Percentages of total; bar heights = frequencies; mode = most frequent." },
            ],
            steps: [
              { part: "a", reasoning: "$10+15+12+3=40$ ✓.", working: "40", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\frac{10}{40}\\times100=25\\%$.", working: "25%", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bars: Walk 10, Bus 15, Car 12, Bike 3 with labelled axes.", working: "\\text{bars}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Heights correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Chart description complete.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Mode = Bus ($15$); most students use bus.", working: "\\text{bus}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Mode identified.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Interpretation correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $40$ ✓ (b) $25\\%$ (c) bars 10/15/12/3 (d) Bus — most common transport",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Verified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "2-3", descriptor: "Chart described.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Incomplete.", part: "c" },
              { level: "Level 2", marks: "2-3", descriptor: "Mode interpreted.", part: "d" },
              { level: "Level 1", marks: "0-1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (b) using $\\frac{10}{100}$ — denominator is total surveyed ($40$)."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u8-averages-notes",
      title: "Averages and charts — revision notes",
      summary: "Mean/median/mode, range, bar charts and pictograms.",
      sections: [
        {
          heading: "Averages",
          body: "Mean $=\\sum/n$; median = middle; mode = most frequent. Mean sensitive to outliers; median robust. Range shows spread.",
        },
        {
          heading: "Charts",
          body: "Bar height = frequency; pictogram symbols need key; frequency tables sum to total. Percentages use total as denominator.",
        },
      ],
    },
  ],
};
