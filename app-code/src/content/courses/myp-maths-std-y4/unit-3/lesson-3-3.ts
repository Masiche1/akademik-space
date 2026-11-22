import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mypms4-u3-lesson-3-3",
  code: "3-3",
  title: "Statistics and Probability",
  goal: "I CAN calculate measures of spread, interpret cumulative frequency and scatter graphs, and find probabilities of combined events.",
  standards: [
    "MYP Maths: Statistics and probability",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Mean", definition: "The average: sum of values divided by the number of values." },
    { term: "Median", definition: "The middle value when data is ordered." },
    { term: "Mode", definition: "The most frequently occurring value." },
    { term: "Range", definition: "The difference between the largest and smallest values." },
    { term: "Interquartile range", definition: "The difference between the upper and lower quartiles: $Q_3-Q_1$." },
    { term: "Cumulative frequency", definition: "A running total of frequencies, used to find medians and quartiles from grouped data." },
    { term: "Independent events", definition: "Events where one does not affect the probability of the other; probabilities multiply." },
    { term: "Expected value", definition: "The long-run average outcome: $E=n\\sum xp$ or sum of (value × probability)." },
  ],
  concepts: [
    {
      id: "mypms4-u3-stats",
      title: "Measures of spread and cumulative frequency",
      skill: "Calculate and interpret range, quartiles, cumulative frequency graphs and scatter plots.",
      lesson: {
        sections: [
          {
            heading: "Measures of spread",
            body: "The **range** ($\\max-\\min$) is simple but sensitive to outliers. The **interquartile range** ($Q_3-Q_1$) measures the spread of the middle 50% of data and is more robust. Quartiles split ordered data into four equal parts.",
          },
          {
            heading: "Cumulative frequency",
            body: "Plot cumulative frequency against upper class boundaries. Read off: **median** at $\\frac{n}{2}$, **lower quartile** at $\\frac{n}{4}$, **upper quartile** at $\\frac{3n}{4}$. The interquartile range is $Q_3-Q_1$.",
          },
          {
            heading: "Scatter graphs and correlation",
            body: "A **scatter graph** shows the relationship between two variables. **Positive correlation**: both increase together. **Negative correlation**: one increases as the other decreases. **No correlation**: no pattern. The **line of best fit** summarises the trend; extrapolation beyond the data is unreliable.",
          },
        ],
        keyFormulas: [
          { name: "Range", statement: "$\\max-\\min$" },
          { name: "IQR", statement: "$Q_3-Q_1$" },
          { name: "Cumulative frequency read-offs", statement: "Median at $\\frac{n}{2}$, $Q_1$ at $\\frac{n}{4}$, $Q_3$ at $\\frac{3n}{4}$" },
        ],
        workedExample: {
          problem: "Data: 3, 5, 7, 8, 10, 12, 15. Find the range and IQR.",
          solution: "Range = $15-3=12$. $n=7$: median (4th value) = 8; $Q_1$ = 5 (2nd value); $Q_3$ = 12 (6th value). IQR = $12-5=7$.",
        },
      },
      questions: [
        {
          id: "mypms4-u3-stats-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For data 4, 7, 9, 10, 15, what is the range?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "9" },
              { id: "c", text: "11" },
              { id: "d", text: "19" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Range", statement: "$\\max-\\min=15-4=11$." },
            ],
            steps: [
              { reasoning: "Range = largest − smallest.", working: "15-4=11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 11",
            commonErrors: ["Adding instead of subtracting."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u3-stats-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the median of 2, 5, 3, 8, 9, 4.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "5" },
              { id: "c", text: "4.5" },
              { id: "d", text: "5.5" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median", statement: "Middle value of ordered data; for even $n$, average of two middle values." },
            ],
            steps: [
              { reasoning: "Ordered: 2, 3, 4, 5, 8, 9; middle two are 4 and 5.", working: "4\\text{ and }5", marks: 1, markCode: "M" },
              { reasoning: "Median = $\\frac{4+5}{2}=4.5$.", working: "4.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.5$",
            commonErrors: ["Not ordering the data first."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-stats-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A scatter graph of ice cream sales vs temperature shows points rising from left to right. Describe the correlation and explain a possible cause.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative correlation — more ice cream causes heat" },
              { id: "b", text: "Positive correlation — hotter weather increases sales" },
              { id: "c", text: "No correlation" },
              { id: "d", text: "Negative correlation — hotter weather decreases sales" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Correlation", statement: "Rising left-to-right = positive correlation." },
            ],
            steps: [
              { reasoning: "Points rise → positive correlation.", working: "\\text{positive}", marks: 1, markCode: "M" },
              { reasoning: "Higher temperature plausibly causes more sales.", working: "\\text{heat}\\to\\text{sales}", marks: 1, markCode: "M" },
              { reasoning: "State the interpretation.", working: "\\text{positive, heat causes sales}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Positive correlation — warmer weather increases ice cream sales",
            commonErrors: ["Claiming correlation proves causation without explanation."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "mypms4-u3-stats-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The table shows heights of 40 students: 0–140 cm: 4; 140–150: 10; 150–160: 15; 160–170: 8; 170–180: 3.",
          parts: [
            { label: "a", prompt: "Find the median class interval (the class containing the 20th student).", marks: 2 },
            { label: "b", prompt: "Calculate the mean height estimate using midpoints.", marks: 3 },
            { label: "c", prompt: "Identify one limitation of grouped data for calculating the mean.", marks: 1 },
            { label: "d", prompt: "Describe what a cumulative frequency graph would show and how to find the median from it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Grouped data", statement: "Use class midpoints and cumulative frequencies." },
            ],
            steps: [
              { part: "a", reasoning: "Cumulative: 4, 14, 29, 37, 40; the 20th student falls in 150–160.", working: "150\\text{–}160\\text{ cm}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the median class.", working: "150\\text{–}160", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Midpoints: 130, 145, 155, 165, 175 with frequencies 4, 10, 15, 8, 3.", working: "\\text{midpoints and frequencies}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sum of $fx=4(130)+10(145)+15(155)+8(165)+3(175)=520+1450+2325+1320+525=6140$; mean $=\\frac{6140}{40}=153.5$ cm.", working: "153.5\\text{ cm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the mean.", working: "153.5\\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exact values within classes are unknown; midpoints are estimates.", working: "\\text{midpoint assumption}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Plot cumulative frequency vs upper boundary; read median at $\\frac{n}{2}=20$.", working: "\\text{read at }n/2=20", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Describe the method.", working: "\\text{cumulative frequency graph}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 150–160 cm (b) 153.5 cm (c) midpoints are estimates, not exact values (d) cumulative frequency graph, read at 20",
            commonErrors: ["Using class boundaries instead of midpoints for the mean."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), R1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypms4-u3-stats-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the data 2, 4, 6, 8, 10, what is the range?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "5" },
              { id: "c", text: "8" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Range", statement: "$\\max-\\min=10-2=8$." },
            ],
            steps: [
              { reasoning: "Range = largest − smallest $=10-2=8$.", working: "10-2=8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 8",
            commonErrors: ["Adding instead of subtracting."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u3-stats-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the mean of 3, 5, 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mean", statement: "Sum of values divided by the number of values." },
            ],
            steps: [
              { reasoning: "$\\frac{3+5+7}{3}=\\frac{15}{3}=5$.", working: "15/3=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Dividing by the wrong count."],
            examinerNote: "B1 for 5.",
          },
        },
        {
          id: "mypms4-u3-stats-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the median of 1, 3, 5, 7, 9, 11.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "6" },
              { id: "c", text: "5" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median", statement: "For even $n$, average the two middle values." },
            ],
            steps: [
              { reasoning: "Middle two values are 5 and 7.", working: "5\\text{ and }7", marks: 1, markCode: "M" },
              { reasoning: "Median $=\\frac{5+7}{2}=6$.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Picking one middle value instead of averaging."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-stats-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mode of 2, 3, 3, 5, 5, 5, 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Mode", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mode", statement: "The most frequently occurring value." },
            ],
            steps: [
              { reasoning: "5 appears 3 times — more than any other value.", working: "5\\text{ appears 3 times}", marks: 1, markCode: "M" },
              { reasoning: "Mode = 5.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Choosing the largest value instead of the most frequent."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-stats-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the data 1, 2, 3, 4, 5, 6, 7, 8, find the interquartile range.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "7" },
              { id: "c", text: "4.5" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "IQR", statement: "$Q_3-Q_1$; lower half $\\{1,2,3,4\\}$, upper half $\\{5,6,7,8\\}$." },
            ],
            steps: [
              { reasoning: "$Q_1=\\frac{2+3}{2}=2.5$; $Q_3=\\frac{6+7}{2}=6.5$.", working: "Q_1=2.5,\\ Q_3=6.5", marks: 1, markCode: "M" },
              { reasoning: "IQR $=6.5-2.5=4$.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Using the range instead of the IQR."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-stats-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A scatter graph shows ice cream sales decreasing as the number of days since the last frost increases. Describe the correlation and explain a possible reason.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Positive correlation — more days means more sales" },
              { id: "b", text: "Negative correlation — colder weather reduces sales" },
              { id: "c", text: "No correlation" },
              { id: "d", text: "Positive correlation — ice cream causes frost" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Correlation", statement: "One variable increasing as the other decreases = negative correlation." },
            ],
            steps: [
              { reasoning: "Sales decrease as days since frost increase — one rises as the other falls: negative correlation.", working: "\\text{negative}", marks: 1, markCode: "M" },
              { reasoning: "More days since frost suggests colder weather, reducing ice cream demand.", working: "\\text{cold}\\to\\text{fewer sales}", marks: 1, markCode: "M" },
              { reasoning: "State the interpretation.", working: "\\text{negative correlation}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Negative correlation — colder weather reduces sales",
            commonErrors: ["Confusing the direction of the relationship."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "mypms4-u3-stats-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the range of 12, 15, 18, 21, 30.",
          response: {
            type: "numeric",
            parts: [{ label: "Range", answer: 18 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Range", statement: "$\\max-\\min=30-12=18$." },
            ],
            steps: [
              { reasoning: "Range = $30-12=18$.", working: "18", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$",
            commonErrors: ["Adding instead of subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-stats-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the median of 4, 8, 6, 10, 12, 14, 16, 20, 22, 24.",
          response: {
            type: "numeric",
            parts: [{ label: "Median", answer: 13 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median", statement: "Order the data; for even $n$, average the two middle values." },
            ],
            steps: [
              { reasoning: "Ordered: 4, 6, 8, 10, 12, 14, 16, 20, 22, 24; middle two are 12 and 14.", working: "12\\text{ and }14", marks: 1, markCode: "M" },
              { reasoning: "Median $=\\frac{12+14}{2}=13$.", working: "13", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$",
            commonErrors: ["Not ordering the data first."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-stats-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A scatter graph relates hours of study $x$ to test score $y$ with an approximate line of best fit $y=8x+20$.",
          parts: [
            { label: "a", prompt: "Interpret the gradient 8 in context.", marks: 2 },
            { label: "b", prompt: "Interpret the $y$-intercept 20 in context.", marks: 1 },
            { label: "c", prompt: "Predict the score for a student who studies 5 hours.", marks: 2 },
            { label: "d", prompt: "State one limitation of using this line to predict scores for extreme values of $x$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Line of best fit", statement: "Gradient = rate of change; intercept = value at $x=0$; extrapolation is unreliable." },
            ],
            steps: [
              { part: "a", reasoning: "Gradient 8 means each additional hour of study is associated with an 8-point increase in score.", working: "8\\text{ points per hour}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Interpretation stated clearly.", working: "\\text{rate of change}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Intercept 20 is the predicted score for 0 hours of study (baseline).", working: "20\\text{ at }x=0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$y=8(5)+20=60$.", working: "60", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the prediction.", working: "60", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Extrapolating far beyond the data range is unreliable — the relationship may not continue.", working: "\\text{extrapolation unreliable}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) +8 points per extra hour (b) baseline score 20 (c) 60 (d) extrapolation beyond data is unreliable",
            commonErrors: ["Interpreting the intercept as a score at 1 hour."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), R1 for (d).",
          },
        },
        {
          id: "mypms4-u3-stats-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cumulative frequency table shows: 0–10 cm: 5 students; 10–20 cm: 12; 20–30 cm: 18; 30–40 cm: 10 (total 45). Estimate the median height.",
          response: {
            type: "numeric",
            parts: [{ label: "Median (cm)", answer: 23.1, tolerance: 0.2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cumulative frequency", statement: "Median at $\\frac{n}{2}=22.5$; interpolate within the class." },
            ],
            steps: [
              { reasoning: "Cumulative frequencies: 5, 17, 35, 45; 22.5 falls in the 20–30 class.", working: "20\\text{–}30", marks: 1, markCode: "M" },
              { reasoning: "Median $\\approx20+\\frac{22.5-17}{18}\\times10=20+3.06\\approx23.1$ cm.", working: "23.1\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "State the estimate.", working: "23.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx23.1$ cm",
            commonErrors: ["Reading the class boundary instead of interpolating."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-stats-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the interquartile range is more robust than the range when a data set contains an outlier.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Robust measures", statement: "The IQR uses only the middle 50% of data; the range uses only the extremes." },
            ],
            steps: [
              { reasoning: "The range depends only on the largest and smallest values, so a single outlier can distort it completely.", working: "\\text{range sensitive}", marks: 1, markCode: "M" },
              { reasoning: "The IQR is based on $Q_1$ and $Q_3$, which describe the middle 50% of the data.", working: "\\text{middle }50\\%", marks: 1, markCode: "M" },
              { reasoning: "Therefore the IQR is unaffected by extreme outliers.", working: "\\text{robust}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The IQR uses only the middle 50% of data, so outliers at the extremes do not affect it, unlike the range.",
            commonErrors: ["No reference to the middle 50% of data."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-stats-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "On a cumulative frequency graph, at which cumulative frequency value is the median read off?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3n}{4}$" },
              { id: "b", text: "$n$" },
              { id: "c", text: "$\\frac{n}{4}$" },
              { id: "d", text: "$\\frac{n}{2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cumulative frequency read-offs", statement: "Median at $\\frac{n}{2}$; $Q_1$ at $\\frac{n}{4}$; $Q_3$ at $\\frac{3n}{4}$." },
            ],
            steps: [
              { reasoning: "Median splits data into two equal halves: read at $\\frac{n}{2}$.", working: "\\frac{n}{2}", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\frac{n}{4}$ is $Q_1$ and $\\frac{3n}{4}$ is $Q_3$ — not the median.", working: "\\text{not }Q_1/Q_3", marks: 1, markCode: "M" },
              { reasoning: "Select the correct answer.", working: "\\frac{n}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\frac{n}{2}$",
            commonErrors: ["Confusing median with quartiles."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypms4-u3-prob",
      title: "Probability of combined events",
      skill: "Calculate probabilities of combined events, expected values, and use sample space diagrams.",
      lesson: {
        sections: [
          {
            heading: "Combined events",
            body: "For **independent** events, multiply probabilities: P(two heads) $=\\frac{1}{2}\\times\\frac{1}{2}=\\frac{1}{4}$. For events that can't happen together, add probabilities. Always check whether events are independent.",
          },
          {
            heading: "Sample space diagrams",
            body: "A **sample space diagram** lists all possible outcomes systematically. For two coins: {HH, HT, TH, TT} — 4 equally likely outcomes. For a die and a coin: 12 outcomes. Diagrams prevent missing outcomes.",
          },
          {
            heading: "Expected value",
            body: "**Expected value** = $\\sum(\\text{value}\\times\\text{probability})$. For a game paying 10 with probability 0.3, 0 otherwise: $E=10\\times0.3=3$. Expected value doesn't guarantee any single outcome — it's the long-run average.",
          },
        ],
        keyFormulas: [
          { name: "Independent events", statement: "$P(A\\text{ and }B)=P(A)\\times P(B)$" },
          { name: "Mutually exclusive", statement: "$P(A\\text{ or }B)=P(A)+P(B)$" },
          { name: "Expected value", statement: "$E=\\sum x_i p_i$" },
        ],
        workedExample: {
          problem: "A fair die is rolled twice. Find the probability of getting two sixes.",
          solution: "Independent rolls: $P(6)=\\frac{1}{6}$ each, so $P(\\text{two sixes})=\\frac{1}{6}\\times\\frac{1}{6}=\\frac{1}{36}$.",
        },
      },
      questions: [
        {
          id: "mypms4-u3-prob-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair coin is tossed twice. What is the probability of two heads?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{4}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{1}{4}$" },
              { id: "d", text: "$\\frac{1}{8}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent events", statement: "Multiply probabilities for independent events." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{2}\\times\\frac{1}{2}=\\frac{1}{4}$.", working: "\\frac{1}{4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac{1}{4}$",
            commonErrors: ["Adding probabilities instead of multiplying."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u3-prob-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag has 3 red and 5 blue marbles. One marble is drawn. What is the probability it is red?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5}{8}$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$\\frac{3}{5}$" },
              { id: "d", text: "$\\frac{3}{8}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Probability", statement: "$P(\\text{red})=\\frac{\\text{red marbles}}{\\text{total}}=\\frac{3}{8}$." },
            ],
            steps: [
              { reasoning: "Total = 8; red = 3.", working: "\\frac{3}{8}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "\\frac{3}{8}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{8}$",
            commonErrors: ["Using only red marbles as denominator."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-prob-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two fair dice are rolled. Find the probability that the sum is 7.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{9}$" },
              { id: "b", text: "$\\frac{1}{12}$" },
              { id: "c", text: "$\\frac{1}{6}$" },
              { id: "d", text: "$\\frac{7}{36}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sample space", statement: "36 equally likely outcomes; 6 give sum 7." },
            ],
            steps: [
              { reasoning: "Outcomes giving 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — 6 outcomes.", working: "6\\text{ outcomes}", marks: 1, markCode: "M" },
              { reasoning: "$P=\\frac{6}{36}=\\frac{1}{6}$.", working: "\\frac{6}{36}=\\frac{1}{6}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "\\frac{1}{6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{6}$",
            commonErrors: ["Forgetting ordered pairs count separately."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-prob-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A game costs 2 to play. You roll a fair die: win 5 if you roll a 6, win 3 if you roll a 5, otherwise win nothing.",
          parts: [
            { label: "a", prompt: "Draw a sample space or list all outcomes.", marks: 1 },
            { label: "b", prompt: "Calculate the probability of winning 5, winning 3, and winning nothing.", marks: 3 },
            { label: "c", prompt: "Calculate the expected value of the game (net gain or loss).", marks: 3 },
            { label: "d", prompt: "Is the game fair? Justify.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$E=\\sum(\\text{net win}\\times\\text{probability})$." },
            ],
            steps: [
              { part: "a", reasoning: "Outcomes: 1,2,3,4,5,6 — each probability $\\frac{1}{6}$.", working: "\\{1,2,3,4,5,6\\}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(5)=P(6)=\\frac{1}{6}$ each; $P(\\text{nothing})=\\frac{4}{6}=\\frac{2}{3}$.", working: "\\frac{1}{6},\\frac{1}{6},\\frac{4}{6}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Probabilities sum to 1: $\\frac{1}{6}+\\frac{1}{6}+\\frac{4}{6}=1$. ✓", working: "\\text{sum}=1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State all three probabilities.", working: "\\frac{1}{6},\\frac{1}{6},\\frac{2}{3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Net wins: 5−2=3 (prob $\\frac{1}{6}$), 3−2=1 (prob $\\frac{1}{6}$), −2 (prob $\\frac{2}{3}$).", working: "3,1,-2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$E=3\\times\\frac{1}{6}+1\\times\\frac{1}{6}+(-2)\\times\\frac{2}{3}=0.5+0.167-1.333=-0.667$.", working: "E\\approx-0.67", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the expected value.", working: "E\\approx-0.67\\text{ per game}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Expected value is negative, so on average players lose — not fair.", working: "\\text{not fair}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) outcomes 1–6 (b) $\\frac{1}{6}$, $\\frac{1}{6}$, $\\frac{2}{3}$ (c) $E\\approx-0.67$ (d) not fair — negative expected value",
            commonErrors: ["Forgetting to subtract the cost to play from winnings."],
            examinerNote: "A1 for (a), M1 A1 A1 for (b), M1 M1 A1 for (c), R1 for (d).",
          },
        },
        {
          id: "mypms4-u3-prob-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair die is rolled once. What is the probability of rolling an even number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{3}$" },
              { id: "b", text: "$\\frac{1}{6}$" },
              { id: "c", text: "$\\frac{2}{3}$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Probability", statement: "$P(\\text{even})=\\frac{3}{6}=\\frac{1}{2}$ (2, 4, 6)." },
            ],
            steps: [
              { reasoning: "Even outcomes: 2, 4, 6 — three of six.", working: "\\frac{3}{6}=\\frac{1}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\frac{1}{2}$",
            commonErrors: ["Counting 2, 4, 6 as one outcome."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u3-prob-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag contains 4 red and 6 blue marbles. One marble is drawn at random. Find the probability it is red.",
          response: {
            type: "numeric",
            parts: [{ label: "$P(\\text{red})$", answer: 0.4 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Probability", statement: "$P=\\frac{\\text{favourable}}{\\text{total}}=\\frac{4}{10}=0.4$." },
            ],
            steps: [
              { reasoning: "Total marbles = 10; red = 4.", working: "\\frac{4}{10}=0.4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$0.4$",
            commonErrors: ["Using only red marbles as the denominator."],
            examinerNote: "B1 for 0.4.",
          },
        },
        {
          id: "mypms4-u3-prob-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two fair coins are tossed. Find the probability of getting at least one head.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{3}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{3}{4}$" },
              { id: "d", text: "$\\frac{1}{4}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sample space", statement: "Outcomes: HH, HT, TH, TT — 3 of 4 have at least one head." },
            ],
            steps: [
              { reasoning: "Favourable outcomes: HH, HT, TH — 3 out of 4.", working: "3\\text{ outcomes}", marks: 1, markCode: "M" },
              { reasoning: "$P=\\frac{3}{4}$.", working: "\\frac{3}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{4}$",
            commonErrors: ["Answering $\\frac{1}{2}$ — forgetting HT and TH are distinct."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-prob-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fair die is rolled once. Find the probability of rolling a prime number.",
          response: {
            type: "numeric",
            parts: [{ label: "$P(\\text{prime})$", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Prime numbers", statement: "Primes on a die: 2, 3, 5 — three outcomes." },
            ],
            steps: [
              { reasoning: "Prime outcomes: 2, 3, 5 — 3 of 6.", working: "\\frac{3}{6}", marks: 1, markCode: "M" },
              { reasoning: "$P=\\frac{3}{6}=0.5$.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$",
            commonErrors: ["Including 1 as prime."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-prob-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two fair dice are rolled. Find the probability that the sum is 2 or 12.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{18}$" },
              { id: "b", text: "$\\frac{1}{36}$" },
              { id: "c", text: "$\\frac{1}{12}$" },
              { id: "d", text: "$\\frac{2}{36}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mutually exclusive", statement: "Sum 2 (only 1+1) and sum 12 (only 6+6) — add probabilities." },
            ],
            steps: [
              { reasoning: "Sum 2: 1 outcome; sum 12: 1 outcome; total 2 of 36.", working: "2\\text{ outcomes}", marks: 1, markCode: "M" },
              { reasoning: "$P=\\frac{2}{36}=\\frac{1}{18}$.", working: "\\frac{1}{18}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{18}$",
            commonErrors: ["Forgetting both events can occur and adding correctly is needed."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-prob-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A game pays out 8 with probability 0.25 and 0 otherwise. Find the expected value of the payout.",
          response: {
            type: "numeric",
            parts: [{ label: "$E$", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$E=\\sum(\\text{value}\\times\\text{probability})$." },
            ],
            steps: [
              { reasoning: "$E=8\\times0.25+0\\times0.75$.", working: "8\\times0.25", marks: 1, markCode: "M" },
              { reasoning: "$=2+0=2$.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "State the expected value.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Multiplying 8 by 0.75 instead of 0.25."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-prob-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two fair coins are tossed. Find the probability of getting two tails.",
          response: {
            type: "numeric",
            parts: [{ label: "$P(\\text{two tails})$", answer: 0.25 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent events", statement: "$P(\\text{TT})=\\frac{1}{2}\\times\\frac{1}{2}=\\frac{1}{4}$." },
            ],
            steps: [
              { reasoning: "Each coin independently has $P(\\text{tail})=\\frac{1}{2}$.", working: "\\frac{1}{2}\\times\\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "$P=\\frac{1}{4}=0.25$.", working: "0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.25$",
            commonErrors: ["Adding probabilities instead of multiplying."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-prob-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spinner labelled 1, 2, 3, 4 is spun twice. Find the probability that both spins show an even number.",
          response: {
            type: "numeric",
            parts: [{ label: "$P(\\text{both even})$", answer: 0.25 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent events", statement: "$P(\\text{even})=\\frac{2}{4}=\\frac{1}{2}$ per spin." },
            ],
            steps: [
              { reasoning: "Even numbers on spinner: 2 and 4, so $P(\\text{even})=\\frac{1}{2}$ each spin.", working: "\\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "$P(\\text{both even})=\\frac{1}{2}\\times\\frac{1}{2}=\\frac{1}{4}$. Alternatively count outcomes: EE among 16 equally likely pairs — but ordered pairs give $\\frac{4}{16}=\\frac{1}{4}$.", working: "\\frac{1}{4}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.25$",
            commonErrors: ["Using $\\frac{2}{4}$ for both spins without multiplying."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-prob-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bag has 5 red and 3 blue marbles. Two marbles are drawn without replacement.",
          parts: [
            { label: "a", prompt: "Find the probability the first marble is red.", marks: 2 },
            { label: "b", prompt: "Given the first marble is red, find the probability the second is blue.", marks: 2 },
            { label: "c", prompt: "Find the probability both marbles are red.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Probability without replacement", statement: "The second draw depends on the first — probabilities change." },
            ],
            steps: [
              { part: "a", reasoning: "$P(\\text{first red})=\\frac{5}{8}$.", working: "\\frac{5}{8}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the probability.", working: "\\frac{5}{8}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "After removing one red: 4 red, 3 blue remain of 7; $P(\\text{blue})=\\frac{3}{7}$.", working: "\\frac{3}{7}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the conditional probability.", working: "\\frac{3}{7}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(\\text{both red})=\\frac{5}{8}\\times\\frac{4}{7}=\\frac{20}{56}=\\frac{5}{14}\\approx0.357$.", working: "\\frac{5}{14}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", working: "\\frac{5}{14}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{5}{8}$ (b) $\\frac{3}{7}$ (c) $\\frac{5}{14}$",
            commonErrors: ["Using $\\frac{3}{8}$ for part (b) — ignoring that a marble was removed."],
            examinerNote: "M1 A1 per part.",
          },
        },
        {
          id: "mypms4-u3-prob-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A game costs nothing to enter. You roll a fair die: you win 6 if you roll a 6, and lose 1 (i.e. win $-1$) for any other result. Find the expected value per game.",
          response: {
            type: "numeric",
            parts: [{ label: "$E$ per game", answer: 0.1667, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$E=\\sum(\\text{net outcome}\\times\\text{probability})$." },
            ],
            steps: [
              { reasoning: "$E=6\\times\\frac{1}{6}+(-1)\\times\\frac{5}{6}$.", working: "6\\times\\frac{1}{6}-\\frac{5}{6}", marks: 1, markCode: "M" },
              { reasoning: "$=1-0.833=\\frac{1}{6}\\approx0.167$.", working: "\\frac{1}{6}", marks: 1, markCode: "M" },
              { reasoning: "State the expected value.", working: "0.167", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E\\approx0.167$",
            commonErrors: ["Ignoring the losing outcome."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-prob-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between independent and mutually exclusive events, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Independent vs mutually exclusive", statement: "Independent: one event does not affect the other; mutually exclusive: they cannot both occur." },
            ],
            steps: [
              { reasoning: "Independent events: the outcome of one does not change the probability of the other, e.g. tossing two coins — $P(\\text{HH})=\\frac{1}{4}$.", working: "\\text{independent}", marks: 1, markCode: "M" },
              { reasoning: "Mutually exclusive events cannot happen together, e.g. rolling a 3 or a 5 on one die — probabilities add.", working: "\\text{mutually exclusive}", marks: 1, markCode: "M" },
              { reasoning: "Both definitions and examples correct.", working: "\\text{examples}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Independent: outcomes don't affect each other (two coins); mutually exclusive: can't both occur (rolling 3 or 5).",
            commonErrors: ["Confusing the two concepts."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-prob-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Events $A$ and $B$ are independent with $P(A)=0.4$ and $P(B)=0.5$. Find $P(A\\text{ and }B)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$P(A\\text{ and }B)$", answer: 0.2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent events", statement: "$P(A\\text{ and }B)=P(A)\\times P(B)$." },
            ],
            steps: [
              { reasoning: "Independent: multiply probabilities.", working: "0.4\\times0.5", marks: 1, markCode: "M" },
              { reasoning: "$P=0.2$.", working: "0.2", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "0.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.2",
            commonErrors: ["Adding probabilities to get 0.9."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
