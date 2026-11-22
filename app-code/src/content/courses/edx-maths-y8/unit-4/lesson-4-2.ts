import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edm8-u4-lesson-4-2",
  code: "4-2",
  title: "Scatter Graphs and Comparing Data",
  goal: "I CAN describe correlation, use a line of best fit, and compare two sets of data using an average and the range.",
  standards: ["Y8 Statistics and Probability"],
  vocabulary: [
    { term: "Scatter graph", definition: "A graph of paired data where each pair of values is plotted as a single point." },
    { term: "Correlation", definition: "The relationship between two variables: positive, negative or none." },
    { term: "Positive correlation", definition: "As one variable increases, the other tends to increase." },
    { term: "Negative correlation", definition: "As one variable increases, the other tends to decrease." },
    { term: "Line of best fit", definition: "A straight line drawn through the middle of the points on a scatter graph, with roughly equal numbers of points on each side." },
    { term: "Interpolation", definition: "Using a line of best fit to estimate a value inside the range of the data; this is reliable." },
    { term: "Extrapolation", definition: "Using a line of best fit to estimate a value outside the range of the data; this may be unreliable." },
  ],
  concepts: [
    {
      id: "edm8-u4-scatter",
      title: "Correlation and lines of best fit",
      skill: "Describe correlation on a scatter graph and use a line of best fit to make estimates.",
      lesson: {
        sections: [
          {
            heading: "Describing correlation",
            body: "On a scatter graph, if the points rise from bottom left to top right there is **positive correlation**. If they fall from top left to bottom right there is **negative correlation**. If the points are scattered with no pattern there is **no correlation**. The closer the points are to a straight line, the stronger the correlation.",
          },
          {
            heading: "Line of best fit",
            body: "Draw a straight line that passes through the middle of the points, with about the same number of points above and below. It does not have to pass through the origin. To estimate, read up from the given value to the line, then across to the other axis. Show your reading lines on the graph.",
          },
          {
            heading: "Reliability",
            body: "Estimates inside the range of the data (interpolation) are reasonably reliable. Estimates outside the range (extrapolation) are less reliable because the pattern may not continue. Correlation does not prove that one variable causes the other.",
          },
        ],
        keyFormulas: [
          { name: "Gradient of a line", statement: "$\\text{gradient}=\\dfrac{\\text{change in } y}{\\text{change in } x}$" },
        ],
        workedExample: {
          problem: "A line of best fit passes through $(0,10)$ and $(10,30)$. Estimate $y$ when $x=4$.",
          solution: "The gradient is $(30-10)\\div10=2$, so $y=10+2x$. When $x=4$, $y=10+8=18$.",
        },
      },
      questions: [
        {
          id: "edm8-u4-scatter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shop records the outside temperature each day and the number of hot drinks it sells. As the temperature rises, the number of hot drinks sold falls. What type of correlation does this show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect correlation" },
              { id: "b", text: "Negative correlation" },
              { id: "c", text: "Positive correlation" },
              { id: "d", text: "No correlation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Negative correlation", statement: "As one variable increases, the other decreases." }],
            steps: [{ reasoning: "Temperature increases while sales decrease, so the relationship is negative.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Negative correlation",
            commonErrors: ["Confusing negative correlation with no correlation."],
          },
        },
        {
          id: "edm8-u4-scatter-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A scatter graph shows the age of a car, in years, against its value, in £ thousands. The line of best fit passes through the points $(1,\\,9)$ and $(5,\\,5)$. Use the line of best fit to estimate the value of a car that is $3$ years old. Give your answer in £ thousands.",
          response: { type: "numeric", parts: [{ label: "Estimated value (£ thousands)", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Using a line of best fit", statement: "A point on the line between two known points gives an estimate. The line has constant gradient." }],
            steps: [
              { reasoning: "The value falls by $4$ over $4$ years, so by $1$ each year (gradient $-1$). At $3$ years it is $2$ years after $(1,9)$.", working: "9-2\\times1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£$7$ thousand (£7000)",
            commonErrors: ["Adding instead of subtracting the change.", "Reading the age instead of the value."],
            examinerNote: "Accept values from a line drawn by the student within a reasonable tolerance; here the line is defined by the two points (oe).",
          },
        },
        {
          id: "edm8-u4-scatter-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A scatter graph shows the time spent revising, $x$ hours, and the test mark, $y$. The line of best fit passes through $(0,20)$ and $(10,70)$. The revision times in the data range from $1$ to $9$ hours.\n\nUse the line to estimate (i) the mark for a student who revises for $6$ hours, and (ii) the number of hours of revision for a mark of $45$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Mark", answer: 50 },
              { label: "(ii) Hours", answer: 5 },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Equation of the line", statement: "gradient $=\\frac{70-20}{10-0}=5$, so $y=5x+20$." }],
            steps: [
              { reasoning: "Find the gradient from the two points.", working: "\\tfrac{70-20}{10-0}=5", marks: 1, markCode: "M" },
              { reasoning: "At $x=6$: $20+5\\times6$.", working: "y=50", marks: 1, markCode: "A" },
              { reasoning: "For (ii), solve $45=20+5x$.", working: "5x=25", marks: 1, markCode: "M" },
              { reasoning: "Divide by $5$.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $50$ (ii) $5$ hours",
            commonErrors: ["Dividing by the wrong amount in (ii).", "Using the point $(10,70)$ without scaling."],
          },
        },
        {
          id: "edm8-u4-scatter-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A teacher records the hours of revision, $x$, and the test mark out of $100$, $y$, for a group of students. The scatter graph shows points rising from bottom left to top right and close to a straight line. A line of best fit is drawn through the points $(2,\\,40)$ and $(8,\\,76)$.",
          parts: [
            { label: "a", prompt: "Describe the correlation between revision time and test mark.", marks: 1 },
            { label: "b", prompt: "Work out the gradient of the line of best fit.", marks: 2 },
            { label: "c", prompt: "Use the line of best fit to estimate the mark of a student who revised for $5$ hours.", marks: 2 },
            { label: "d", prompt: "Explain what the gradient tells you about revision time and marks.", marks: 2 },
            { label: "e", prompt: "Becky uses the line to estimate that a student who revises for $15$ hours would score $118$. Explain why this estimate is not sensible.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$\\text{gradient}=\\frac{\\text{change in }y}{\\text{change in }x}$" },
              { kind: "principle", name: "Extrapolation", statement: "Estimates outside the range of the data may be unreliable." },
            ],
            steps: [
              { part: "a", reasoning: "Points rise as revision time increases.", working: "\\text{positive correlation}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Change in $y$ over change in $x$.", working: "\\tfrac{76-40}{8-2}=\\tfrac{36}{6}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "From $(2,40)$, $3$ more hours adds $3\\times6=18$.", working: "40+18", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "58", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The gradient is $6$ marks per hour.", working: "6\\text{ marks per hour}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Each extra hour of revision is linked to about $6$ more marks.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "The mark $118$ is more than the maximum of $100$.", working: "118>100", marks: 1, markCode: "B" },
              { part: "e", reasoning: "$15$ hours is outside the range of the data, so extrapolation is unreliable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) positive correlation (b) $6$ (c) $58$ (d) about $6$ marks more per extra hour (e) a mark above $100$ is impossible and $15$ hours is outside the data range",
            commonErrors: ["Dividing change in $x$ by change in $y$.", "Saying the correlation proves revision causes higher marks."],
          },
        },
      ],
    },
    {
      id: "edm8-u4-comparing",
      title: "Comparing distributions",
      skill: "Compare two sets of data using an average and the range.",
      lesson: {
        sections: [
          {
            heading: "Average and spread",
            body: "To compare two distributions you need a measure of average (mean or median) and a measure of spread (range). The average tells you which set is typically larger. The range tells you which set is more consistent: a smaller range means the values are closer together.",
          },
          {
            heading: "Writing a comparison",
            body: "Always write your comparison in the context of the question and use comparison words such as 'higher', 'lower', 'more consistent'. For example: 'The mean for Team A is higher than for Team B, so on average Team A scored more. The range for Team A is smaller, so Team A was more consistent.'",
          },
          {
            heading: "Choosing an average",
            body: "The mean uses every value but is affected by very large or very small values. The median is not affected by extreme values, so it is better when there is an outlier. The mode is useful for the most popular category.",
          },
        ],
        keyFormulas: [
          { name: "Range", statement: "$\\text{range}=\\text{largest}-\\text{smallest}$" },
        ],
        workedExample: {
          problem: "Set A has mean $12$ and range $4$. Set B has mean $15$ and range $10$. Compare them.",
          solution: "On average B is higher (mean $15>12$). A is more consistent because its range is smaller ($4<10$).",
        },
      },
      questions: [
        {
          id: "edm8-u4-comparing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two bus routes have the same mean journey time. Route A has a range of $5$ minutes and Route B has a range of $12$ minutes. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both routes are equally consistent" },
              { id: "b", text: "Route B is more consistent because it has the larger range" },
              { id: "c", text: "Route A is more consistent because it has the smaller range" },
              { id: "d", text: "Route A is slower because it has the smaller range" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Range and consistency", statement: "A smaller range means the data is less spread out, so more consistent." }],
            steps: [{ reasoning: "$5<12$, so Route A varies less.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Route A is more consistent because it has the smaller range",
            commonErrors: ["Thinking a larger range means more consistent."],
          },
        },
        {
          id: "edm8-u4-comparing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The table shows the mean and range of the number of goals scored per match by two teams.\n\n- Team A: mean $2.4$, range $5$\n- Team B: mean $1.9$, range $2$\n\nCompare the goals scored by the two teams.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Comparing distributions", statement: "Compare an average and a measure of spread, in context." }],
            steps: [
              { reasoning: "Compare the means: Team A has a higher mean, so scores more goals on average.", working: "2.4>1.9", marks: 1, markCode: "B" },
              { reasoning: "Compare the ranges: Team B has a smaller range.", working: "2<5", marks: 1, markCode: "B" },
              { reasoning: "Interpret: Team B is more consistent.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "On average Team A scores more goals per match (mean $2.4>1.9$), but Team B is more consistent (range $2<5$).",
            commonErrors: ["Comparing only the averages.", "Not referring to the context (goals)."],
            examinerNote: "Comparisons must be in context (oe).",
          },
        },
        {
          id: "edm8-u4-comparing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two sets of numbers are:\n\n- Set A: $5, 8, 9, 12, 16$\n- Set B: $7, 9, 10, 11, 13$\n\nWork out the mean and the range of each set.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mean of A", answer: 10 },
              { label: "Mean of B", answer: 10 },
              { label: "Range of A", answer: 11 },
              { label: "Range of B", answer: 6 },
            ],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mean and range", statement: "mean = total $\\div$ number of values; range = largest $-$ smallest." }],
            steps: [
              { reasoning: "Total of A is $50$, so mean is $50\\div5$.", working: "5+8+9+12+16=50,\\;50\\div5=10", marks: 1, markCode: "A" },
              { reasoning: "Total of B is $50$, so mean is $50\\div5$.", working: "7+9+10+11+13=50,\\;50\\div5=10", marks: 1, markCode: "A" },
              { reasoning: "Range of A.", working: "16-5=11", marks: 1, markCode: "B" },
              { reasoning: "Range of B.", working: "13-7=6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Mean A $=10$, mean B $=10$, range A $=11$, range B $=6$ (B is more consistent)",
            commonErrors: ["Adding rather than subtracting for the range.", "Arithmetic slips in totals."],
          },
        },
        {
          id: "edm8-u4-comparing-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A town has two bus companies. The delays, in minutes, of $7$ buses from each company are:\n\n- Company X: $2, 5, 3, 9, 4, 12, 7$\n- Company Y: $4, 6, 5, 7, 6, 8, 6$",
          parts: [
            { label: "a", prompt: "Work out the mean delay for each company.", marks: 2 },
            { label: "b", prompt: "Work out the range of the delays for each company.", marks: 2 },
            { label: "c", prompt: "Compare the delays of the two companies.", marks: 3 },
            { label: "d", prompt: "Ali says 'Company X is better because one of its buses was only 2 minutes late.' Give a reason why Ali's argument is not good.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mean and range", statement: "mean = total $\\div$ number of values; range = largest $-$ smallest." },
              { kind: "principle", name: "Comparing distributions", statement: "Compare an average and the spread, in context." },
            ],
            steps: [
              { part: "a", reasoning: "X: total $42$, divided by $7$.", working: "(2+5+3+9+4+12+7)\\div7=42\\div7=6", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Y: total $42$, divided by $7$.", working: "(4+6+5+7+6+8+6)\\div7=42\\div7=6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Range of X.", working: "12-2=10", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Range of Y.", working: "8-4=4", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The means are equal, so on average the delays are the same ($6$ minutes).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Company Y has the smaller range ($4<10$).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So Company Y is more consistent, its delays are more predictable.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Ali used a single value, not an average or range.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Company X also had a delay of $12$ minutes, the longest of all, so it is less reliable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) both $6$ minutes (b) X: $10$, Y: $4$ (c) same average delay, but Y is more consistent (d) Ali used one bus only; X also had the longest delay of $12$ minutes",
            commonErrors: ["Saying X is better because it has the lowest single value.", "Forgetting to compare in context."],
          },
        },
      ],
    },
  ],
};
