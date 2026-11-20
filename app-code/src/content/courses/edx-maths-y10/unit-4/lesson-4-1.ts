import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edm10-u4-lesson-4-1",
  code: "4-1",
  title: "Representing Data",
  goal: "I CAN use cumulative frequency graphs to estimate medians and quartiles, and use histograms with unequal class widths.",
  standards: ["4MA1 8.2", "4MA1 8.3", "4MA1 8.4H"],
  vocabulary: [
    { term: "Cumulative frequency", definition: "A running total of the frequencies, up to the upper boundary of each class." },
    { term: "Median", definition: "The middle value when data are in order. For $n$ values it is at the $\\frac{n}{2}$th position on a cumulative frequency graph." },
    { term: "Quartiles", definition: "The lower quartile is at $\\frac{n}{4}$ and the upper quartile is at $\\frac{3n}{4}$ on the cumulative frequency axis." },
    { term: "Interquartile range (IQR)", definition: "Upper quartile minus lower quartile. It measures the spread of the middle half of the data." },
    { term: "Frequency density", definition: "$\\frac{\\text{frequency}}{\\text{class width}}$, the height of a bar in a histogram." },
    { term: "Histogram", definition: "A chart with bars of different widths in which the area of each bar is proportional to the frequency." },
  ],
  concepts: [
    {
      id: "edm10-u4-cumulative-frequency",
      title: "Cumulative frequency, median and interquartile range",
      skill: "Build cumulative frequency tables and estimate the median and interquartile range.",
      lesson: {
        sections: [
          {
            heading: "Cumulative frequency tables",
            body: "Add the frequencies as you go down the table. Each cumulative frequency belongs to the **upper class boundary**, because it counts all values up to and including that boundary. Points are plotted at (upper boundary, cumulative frequency) and joined with a smooth curve or straight lines.",
          },
          {
            heading: "Reading the graph",
            body: "For $n$ values the median is read at cumulative frequency $\\frac{n}{2}$, the lower quartile at $\\frac{n}{4}$ and the upper quartile at $\\frac{3n}{4}$. Go across from the axis to the graph, then down to the horizontal axis. When points are joined by straight lines, you can find the value by linear interpolation between two points.",
          },
          {
            heading: "Interquartile range",
            body: "$\\text{IQR}=\\text{UQ}-\\text{LQ}$. A smaller IQR means the middle of the data is more consistent. To find how many values are greater than some value $x$, read the cumulative frequency at $x$ and subtract it from $n$.",
          },
        ],
        keyFormulas: [
          { name: "Median position", statement: "$\\frac{n}{2}$" },
          { name: "Quartile positions", statement: "$\\text{LQ at }\\frac{n}{4},\\ \\text{UQ at }\\frac{3n}{4}$" },
          { name: "Interquartile range", statement: "$\\text{IQR}=\\text{UQ}-\\text{LQ}$" },
        ],
        workedExample: {
          problem: "A cumulative frequency graph for 100 values has LQ $=18$ and UQ $=34$. Work out the interquartile range.",
          solution: "$\\text{IQR}=34-18=16$.",
        },
      },
      questions: [
        {
          id: "edm10-u4-cumulative-frequency-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "A cumulative frequency graph shows the results of 80 students. At which cumulative frequency should you read across to estimate the median?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20$" },
              { id: "b", text: "$40$" },
              { id: "c", text: "$60$" },
              { id: "d", text: "$80$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Median", statement: "The median is at cumulative frequency $\\frac{n}{2}$." }],
            steps: [{ reasoning: "Half of 80.", working: "80\\div2=40", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $40$",
            commonErrors: ["Choosing 20 (lower quartile) or 60 (upper quartile).", "Choosing the total."],
          },
        },
        {
          id: "edm10-u4-cumulative-frequency-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "The heights, $h$ cm, of 80 plants are summarised in the table.\n\n| Height, $h$ (cm) | Frequency |\n| --- | --- |\n| $10 < h \\le 20$ | 8 |\n| $20 < h \\le 30$ | 18 |\n| $30 < h \\le 40$ | 24 |\n| $40 < h \\le 50$ | 22 |\n| $50 < h \\le 60$ | 8 |\n\nThe cumulative frequency graph is drawn by joining the plotted points with straight lines. Use the graph to estimate the median height. Give your answer to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Median height", answer: 35.8, tolerance: 0.1, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Linear interpolation", statement: "Between two plotted points the graph is a straight line, so the value can be found proportionally." }],
            steps: [
              { reasoning: "Cumulative frequencies are 8, 26, 50, 72, 80 at heights 20, 30, 40, 50, 60. The median is at $80\\div2=40$, between (30, 26) and (40, 50).", working: "\\frac{40-26}{50-26}=\\frac{14}{24}", marks: 1, markCode: "M" },
              { reasoning: "Interpolate along the class width of 10.", working: "30+\\frac{14}{24}\\times10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "35.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35.8$ cm",
            commonErrors: ["Plotting against the class midpoints.", "Reading at 80 instead of 40."],
            examinerNote: "Accept readings from a graph in the range 35 to 36.5.",
          },
        },
        {
          id: "edm10-u4-cumulative-frequency-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "The times, $t$ minutes, taken by 100 runners to finish a race are shown.\n\n| Time, $t$ (min) | Frequency |\n| --- | --- |\n| $0 < t \\le 10$ | 5 |\n| $10 < t \\le 20$ | 20 |\n| $20 < t \\le 30$ | 35 |\n| $30 < t \\le 40$ | 30 |\n| $40 < t \\le 50$ | 10 |\n\nThe points of the cumulative frequency graph are joined with straight lines. Estimate the interquartile range of the times.",
          response: { type: "numeric", parts: [{ label: "Interquartile range", answer: 15, tolerance: 0.5, unit: "min" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "IQR", statement: "$\\text{IQR}=\\text{UQ}-\\text{LQ}$ with LQ at $\\frac n4$ and UQ at $\\frac{3n}{4}$." }],
            steps: [
              { reasoning: "Cumulative frequencies at 10, 20, 30, 40, 50 are 5, 25, 60, 90, 100.", working: "5,\\ 25,\\ 60,\\ 90,\\ 100", marks: 1, markCode: "M" },
              { reasoning: "LQ is at cumulative frequency 25, which is exactly at $t=20$.", working: "\\text{LQ}=20", marks: 1, markCode: "A" },
              { reasoning: "UQ is at 75, between (30, 60) and (40, 90).", working: "30+\\frac{75-60}{90-60}\\times10=35", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "35-20=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ minutes",
            commonErrors: ["Using the median and an extreme value.", "Reading quartiles at 25% and 75% of the maximum time."],
          },
        },
        {
          id: "edm10-u4-cumulative-frequency-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "The masses, $m$ kg, of 60 adults are recorded.\n\n| Mass, $m$ (kg) | Frequency |\n| --- | --- |\n| $40 < m \\le 50$ | 4 |\n| $50 < m \\le 60$ | 11 |\n| $60 < m \\le 70$ | 20 |\n| $70 < m \\le 80$ | 17 |\n| $80 < m \\le 90$ | 8 |\n\nA cumulative frequency graph is drawn by plotting points and joining them with straight lines. Give answers to 1 decimal place where needed.",
          parts: [
            { label: "a", prompt: "Write down the cumulative frequencies for the five classes in order. Say at what mass values the points are plotted.", marks: 2 },
            { label: "b", prompt: "Estimate the median mass.", marks: 3 },
            { label: "c", prompt: "Estimate the interquartile range.", marks: 3 },
            { label: "d", prompt: "Estimate the number of adults with a mass greater than 85 kg.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cumulative frequency", statement: "Running total of frequencies, plotted at the upper class boundary." },
              { kind: "principle", name: "Linear interpolation", statement: "Between plotted points the graph is a straight line." },
            ],
            steps: [
              { part: "a", reasoning: "Running totals: $4$, $4+11$, $15+20$, $35+17$, $52+8$.", working: "4,\\ 15,\\ 35,\\ 52,\\ 60", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Points are plotted at the upper boundaries.", working: "m=50,60,70,80,90", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Median is at $60\\div2=30$, between (60, 15) and (70, 35).", working: "\\frac{30-15}{35-15}=\\frac{15}{20}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Interpolate.", working: "60+0.75\\times10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "67.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "LQ is at 15, which is the point (60, 15). UQ is at 45, between (70, 35) and (80, 52).", working: "\\text{LQ}=60,\\quad \\text{UQ}=70+\\frac{45-35}{52-35}\\times10=75.9", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Subtract.", working: "75.9-60=15.9", marks: 1, markCode: "A" },
              { part: "d", reasoning: "At 85 kg the cumulative frequency is between (80, 52) and (90, 60): $52+\\frac{5}{10}\\times8=56$.", working: "60-56", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4, 15, 35, 52, 60 plotted at 50, 60, 70, 80, 90 (b) $67.5$ kg (c) $15.9$ kg (d) $4$",
            commonErrors: ["Plotting at the middle of each class.", "Using $n=5$ classes to find quartile positions."],
            examinerNote: "Accept answers from a drawn graph within a reasonable tolerance, e.g. median 67 to 68.",
          },
        },
      ],
    },
    {
      id: "edm10-u4-histograms",
      title: "Histograms with unequal class widths",
      skill: "Use frequency density to read and draw histograms, and estimate frequencies and the mean.",
      lesson: {
        sections: [
          {
            heading: "Frequency density",
            body: "In a histogram with unequal class widths, the **area** of a bar represents frequency, not its height. The height is the frequency density: $\\text{FD}=\\frac{\\text{frequency}}{\\text{class width}}$. So frequency $=\\text{FD}\\times\\text{class width}$.",
          },
          {
            heading: "Estimating from a histogram",
            body: "If a range cuts through a bar, assume the data is spread evenly in that class: take FD multiplied by the width of the part you need. To estimate a mean, use the midpoint of each class: $\\frac{\\sum fx}{\\sum f}$.",
          },
          {
            heading: "Describing a histogram in words",
            body: "Because there are no images here, a histogram is given as a table of class boundaries and frequency densities. Always work in the order: class width, then FD or frequency, and check that the total frequency matches the sample size.",
          },
        ],
        keyFormulas: [
          { name: "Frequency density", statement: "$\\text{FD}=\\frac{\\text{frequency}}{\\text{class width}}$" },
          { name: "Frequency", statement: "$\\text{frequency}=\\text{FD}\\times\\text{class width}$" },
          { name: "Estimated mean", statement: "$\\frac{\\sum fx}{\\sum f}$ using midpoints" },
        ],
        workedExample: {
          problem: "A class $10<x\\le14$ has frequency 20. Work out the frequency density.",
          solution: "Class width $=4$. $\\text{FD}=20\\div4=5$.",
        },
      },
      questions: [
        {
          id: "edm10-u4-histograms-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "A class in a grouped frequency table has width 5 and frequency 30. What is the frequency density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$150$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$35$" },
              { id: "d", text: "$0.17$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Frequency density", statement: "$\\text{FD}=\\frac{\\text{frequency}}{\\text{class width}}$" }],
            steps: [
              { reasoning: "Divide the frequency by the class width.", working: "30\\div5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $6$",
            commonErrors: ["Multiplying instead of dividing, giving 150.", "Dividing width by frequency, giving 0.17."],
          },
        },
        {
          id: "edm10-u4-histograms-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 2,
          stem: "In a histogram, the bar for the class $10 \\le t < 30$ has a height (frequency density) of 2.5. Work out the frequency of this class.",
          response: { type: "numeric", parts: [{ label: "Frequency", answer: 50 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Frequency", statement: "$\\text{frequency}=\\text{FD}\\times\\text{class width}$" }],
            steps: [
              { reasoning: "The class width is $30-10=20$.", working: "2.5\\times20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$",
            commonErrors: ["Using the height as the frequency.", "Using the class boundary 30 as the width."],
          },
        },
        {
          id: "edm10-u4-histograms-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A histogram has these bars (class boundaries and frequency density):\n\n| Class, $x$ | Frequency density |\n| --- | --- |\n| $0 \\le x < 10$ | 1.2 |\n| $10 \\le x < 25$ | 2.4 |\n| $25 \\le x < 30$ | 3.0 |\n| $30 \\le x < 50$ | 0.8 |\n\nEstimate the number of values with $20 \\le x < 40$. Assume values are spread evenly within each class.",
          response: { type: "numeric", parts: [{ label: "Number of values", answer: 35 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Area is frequency", statement: "Frequency $=\\text{FD}\\times\\text{width}$; assume an even spread within a class." }],
            steps: [
              { reasoning: "From 20 to 25 the width is 5 with FD 2.4.", working: "5\\times2.4=12", marks: 1, markCode: "M" },
              { reasoning: "From 25 to 30 the width is 5 with FD 3.0.", working: "5\\times3.0=15", marks: 1, markCode: "M" },
              { reasoning: "From 30 to 40 the width is 10 with FD 0.8.", working: "10\\times0.8=8", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "12+15+8=35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35$",
            commonErrors: ["Using the whole class $10\\le x<25$ rather than the part from 20.", "Adding frequency densities instead of areas."],
          },
        },
        {
          id: "edm10-u4-histograms-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "The table shows the times, $t$ minutes, that 100 customers waited in a queue.\n\n| Time, $t$ (min) | Frequency |\n| --- | --- |\n| $0 < t \\le 10$ | 8 |\n| $10 < t \\le 20$ | 20 |\n| $20 < t \\le 40$ | 36 |\n| $40 < t \\le 60$ | 24 |\n| $60 < t \\le 90$ | 12 |\n\nA histogram is to be drawn for this data.",
          parts: [
            { label: "a", prompt: "Work out the frequency density for the class $20 < t \\le 40$ and for the class $60 < t \\le 90$.", marks: 2 },
            { label: "b", prompt: "Estimate the number of customers who waited more than 30 minutes but at most 50 minutes.", marks: 3 },
            { label: "c", prompt: "Calculate an estimate of the mean waiting time. Give your answer to 1 decimal place.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) FD for 20 < t ≤ 40", answer: 1.8 },
              { label: "(a) FD for 60 < t ≤ 90", answer: 0.4 },
              { label: "(b) Number of customers", answer: 30 },
              { label: "(c) Estimated mean (min)", answer: 35.2, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Frequency density", statement: "$\\text{FD}=\\frac{\\text{frequency}}{\\text{class width}}$" },
              { kind: "formula", name: "Estimated mean", statement: "$\\frac{\\sum fx}{\\sum f}$ using class midpoints." },
            ],
            steps: [
              { part: "a", reasoning: "Class width 20 and 30 respectively.", working: "36\\div20=1.8,\\quad 12\\div30=0.4", marks: 2, markCode: "M" },
              { part: "b", reasoning: "From 30 to 40: FD 1.8 and width 10. From 40 to 50: FD $24\\div20=1.2$ and width 10.", working: "1.8\\times10=18,\\quad 1.2\\times10=12", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Add.", working: "18+12=30", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Midpoints are 5, 15, 30, 50, 75. Multiply by frequencies.", working: "8(5)+20(15)+36(30)+24(50)+12(75)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sum: $40+300+1080+1200+900=3520$.", working: "\\frac{3520}{100}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "35.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.8$ and $0.4$ (b) $30$ (c) $35.2$ minutes",
            commonErrors: ["Using frequency as the height.", "Using class boundaries instead of midpoints for the mean."],
          },
        },
      ],
    },
  ],
};
