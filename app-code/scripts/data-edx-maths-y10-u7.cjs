module.exports = [
  {
    file: "lesson-7-1.ts", exportName: "lesson71",
    lesson: {
      id: "edm10-u7-lesson-7-1", code: "7-1",
      title: "Box Plots and Comparing Distributions",
      goal: "I CAN construct and interpret box plots, and compare two distributions using median, interquartile range and spread.",
      standards: ["4MA1 8.5H", "4MA1 8.6H"],
      vocabulary: [
        { term: "Five-number summary", definition: "Minimum, lower quartile, median, upper quartile and maximum of a data set." },
        { term: "Box plot", definition: "A diagram showing the five-number summary: a box from Q1 to Q3 with a line at the median and whiskers to the extremes." },
        { term: "Lower quartile (Q1)", definition: "The value below which 25% of the data lie." },
        { term: "Upper quartile (Q3)", definition: "The value below which 75% of the data lie." },
        { term: "Interquartile range", definition: "Q3 minus Q1; the spread of the middle half of the data." },
        { term: "Skew", definition: "Asymmetry of a distribution: a longer upper whisker suggests positive skew, a longer lower whisker negative skew." },
      ],
      concepts: [
        {
          id: "edm10-u7-box-plots",
          title: "Box plots",
          skill: "Find quartiles from ordered data and interpret box plots.",
          sections: [
            { heading: "The five-number summary", body: "Order the data first. The median is the middle value (average of the two middle values for even $n$). The lower quartile is the median of the lower half and the upper quartile is the median of the upper half. The five-number summary is minimum, Q1, median, Q3, maximum." },
            { heading: "Reading a box plot", body: "The box runs from Q1 to Q3 and contains the middle 50% of the data. The line inside the box is the median. The whiskers extend to the minimum and maximum (or to the most extreme values within $1.5\\times\\text{IQR}$ of the quartiles, with outliers plotted separately). The IQR is the width of the box." },
            { heading: "Interpreting values", body: "The range is maximum minus minimum. Exactly 50% of values lie between Q1 and Q3, 25% below Q1 and 25% above Q3. A median closer to Q1 than Q3 suggests the data are skewed towards higher values within the middle half." },
          ],
          keyFormulas: [
            { name: "Interquartile range", statement: "$\\text{IQR}=Q_3-Q_1$" },
            { name: "Range", statement: "$\\text{Range}=\\text{max}-\\text{min}$" },
            { name: "Proportion in the box", statement: "$50\\%$ of values lie between Q1 and Q3" },
          ],
          workedExample: {
            problem: "For the data $3, 5, 7, 8, 9, 12, 15, 18, 20, 22$, find the median and IQR.",
            solution: "Median $=\\frac{9+12}{2}=10.5$. Lower half $3,5,7,8,9$ gives Q1 $=7$; upper half $12,15,18,20,22$ gives Q3 $=18$. IQR $=18-7=11$.",
          },
          questions: [
            {
              id: "edm10-u7-boxplot-q1", difficulty: "core", tier: "higher", totalMarks: 1,
              stem: "In a box plot, what does the box represent?",
              response: { type: "mcq", choices: [
                { id: "a", text: "The range from minimum to maximum" }, { id: "b", text: "The interquartile range, from the lower to the upper quartile" }, { id: "c", text: "The mean and standard deviation" }, { id: "d", text: "The middle two values only" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Box plot", statement: "The box spans Q1 to Q3." }],
                steps: [{ reasoning: "The box edges are the quartiles.", working: "Q_1 \\text{ to } Q_3", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** The interquartile range",
                commonErrors: ["Confusing the box (IQR) with the whiskers (range)."],
              },
            },
            {
              id: "edm10-u7-boxplot-q2", difficulty: "core", tier: "higher", totalMarks: 2,
              stem: "A data set has minimum $3$, lower quartile $7$, median $10$, upper quartile $15$ and maximum $22$. Calculate the interquartile range.",
              response: { type: "numeric", parts: [{ label: "IQR", answer: 8 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Interquartile range", statement: "$\\text{IQR}=Q_3-Q_1$." }],
                steps: [
                  { reasoning: "Subtract the quartiles.", working: "15-7", marks: 1, markCode: "M" },
                  { reasoning: "Evaluate.", working: "8", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$8$",
                commonErrors: ["Subtracting the median from the maximum instead."],
              },
            },
            {
              id: "edm10-u7-boxplot-q3", difficulty: "core", tier: "higher", totalMarks: 5,
              stem: "The data $4, 6, 8, 10, 12, 14, 16, 18, 20, 24$ are recorded.",
              parts: [
                { label: "a", prompt: "Find the median of the data.", marks: 2 },
                { label: "b", prompt: "Find the interquartile range of the data.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Median and quartiles", statement: "Median is the middle of the ordered data; quartiles are medians of the halves." }],
                steps: [
                  { part: "a", reasoning: "There are 10 values, so the median is the average of the 5th and 6th.", working: "\\frac{12+14}{2}", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Evaluate.", working: "13", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Lower half $4,6,8,10,12$ has median 8; upper half $14,16,18,20,24$ has median 18.", working: "Q_1=8,\\ Q_3=18", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Subtract for the IQR.", working: "18-8=10", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the answer.", working: "10", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $13$ (b) IQR $=10$",
                commonErrors: ["Including the median in both halves when $n$ is even.", "Using the range $24-4=20$ instead of the IQR."],
              },
            },
            {
              id: "edm10-u7-boxplot-q4", difficulty: "challenge", tier: "higher", totalMarks: 5,
              stem: "A box plot for the times taken by 60 students to complete a puzzle shows: minimum $5$ minutes, lower quartile $10$, median $15$, upper quartile $22$, maximum $30$ minutes.",
              parts: [
                { label: "a", prompt: "Calculate the interquartile range.", marks: 2 },
                { label: "b", prompt: "Calculate the range.", marks: 1 },
                { label: "c", prompt: "What percentage of students took between 10 and 22 minutes?", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "IQR and range", statement: "$\\text{IQR}=Q_3-Q_1$; $\\text{range}=\\text{max}-\\text{min}$." }],
                steps: [
                  { part: "a", reasoning: "Subtract the quartiles.", working: "22-10=12", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the answer.", working: "12\\text{ minutes}", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Subtract extremes.", working: "30-5=25", marks: 1, markCode: "B" },
                  { part: "c", reasoning: "The box contains the middle 50% of the data.", working: "50\\%", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "State the percentage.", working: "50\\%", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $12$ minutes (b) $25$ minutes (c) $50\\%$",
                commonErrors: ["In (c) answering 25% or 75% instead of the middle half."],
              },
            },
            {
              id: "edm10-u7-boxplot-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "Two classes sat the same test. Their box plots are described below.\n\nClass A: minimum $20$, Q1 $30$, median $45$, Q3 $55$, maximum $70$.\nClass B: minimum $10$, Q1 $25$, median $40$, Q3 $60$, maximum $75$.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "property", name: "Median", statement: "The median indicates the typical value." },
                  { kind: "property", name: "IQR", statement: "The IQR measures consistency of the middle half." },
                ],
                steps: [
                  { reasoning: "Compare medians: Class A median 45 is higher than Class B median 40, so A performed better on average.", working: "45>40", marks: 1, markCode: "M" },
                  { reasoning: "IQR of A: $55-30=25$; IQR of B: $60-25=35$.", working: "\\text{IQR}_A=25,\\ \\text{IQR}_B=35", marks: 2, markCode: "M" },
                  { reasoning: "A's smaller IQR means more consistent results.", working: "25<35", marks: 1, markCode: "A" },
                  { reasoning: "Ranges: A $=50$, B $=65$, so B has the wider overall spread.", working: "\\text{range}_A=50,\\ \\text{range}_B=65", marks: 1, markCode: "M" },
                  { reasoning: "Conclude: A has higher typical scores and is more consistent.", working: "\\text{A higher median, smaller IQR}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Class A has the higher median (45 vs 40) and smaller IQR (25 vs 35), so A performed better and more consistently.",
                commonErrors: ["Comparing only the ranges.", "Saying B is better because its maximum is higher."],
              },
            },
            {
              id: "edm10-u7-boxplot-q6", difficulty: "challenge", tier: "higher", totalMarks: 9,
              stem: "The ordered data $3, 5, 6, 8, 9, 11, 13, 15, 17, 19, 21$ were collected from a survey.",
              parts: [
                { label: "a", prompt: "Find the median, lower quartile and upper quartile of the data.", marks: 4 },
                { label: "b", prompt: "Calculate the interquartile range.", marks: 2 },
                { label: "c", prompt: "Calculate the range.", marks: 1 },
                { label: "d", prompt: "Describe how a box plot for this data would look.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Quartiles", statement: "Median of the whole set; quartiles are medians of the lower and upper halves (excluding the median for odd $n$)." }],
                steps: [
                  { part: "a", reasoning: "There are 11 values; the median is the 6th value.", working: "\\text{median}=11", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Lower half $3,5,6,8,9$ has median 6; upper half $13,15,17,19,21$ has median 17.", working: "Q_1=6,\\ Q_3=17", marks: 2, markCode: "M" },
                  { part: "a", reasoning: "State all three.", working: "11,\\ 6,\\ 17", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Subtract the quartiles.", working: "17-6=11", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the IQR.", working: "11", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Subtract extremes.", working: "21-3=18", marks: 1, markCode: "B" },
                  { part: "d", reasoning: "Box from 6 to 17, median line at 11, whiskers to 3 and 21.", working: "\\text{box }[6,17],\\ \\text{median }11,\\ \\text{whiskers }3,21", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "State the description.", working: "\\text{as described}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) median $11$, Q1 $6$, Q3 $17$ (b) IQR $11$ (c) range $18$ (d) box $6$–$17$, median line at $11$, whiskers to $3$ and $21$",
                commonErrors: ["Including the median 11 in both halves, giving Q1 $=8$ and Q3 $=15$."],
              },
            },
          ],
        },
        {
          id: "edm10-u7-comparing-distributions",
          title: "Comparing distributions",
          skill: "Compare two data sets using medians, interquartile ranges, ranges and skew.",
          sections: [
            { heading: "What to compare", body: "To compare two distributions, comment on: the median (typical value), the IQR (consistency of the middle half), the range (overall spread including extremes), and the skew (position of the median within the box and whisker lengths)." },
            { heading: "Interpreting skew", body: "If the median is closer to Q1, the middle half is skewed towards higher values. A long upper whisker suggests a few high outliers (positive skew); a long lower whisker suggests low outliers (negative skew)." },
            { heading: "Context matters", body: "Always relate the statistics back to the situation. 'Class A scored higher on average and more consistently' is a complete comparison; quoting numbers without interpretation loses marks." },
          ],
          keyFormulas: [
            { name: "Interquartile range", statement: "$\\text{IQR}=Q_3-Q_1$" },
            { name: "Range", statement: "$\\text{max}-\\text{min}$" },
            { name: "Comparison checklist", statement: "median, IQR, range, skew" },
          ],
          workedExample: {
            problem: "Set P: median 20, IQR 15. Set Q: median 25, IQR 8. Compare the sets.",
            solution: "Q has the higher median (25 vs 20) so higher typical values. Q's smaller IQR (8 vs 15) means Q is more consistent.",
          },
          questions: [
            {
              id: "edm10-u7-compare-q1", difficulty: "core", tier: "higher", totalMarks: 1,
              stem: "The interquartile range is best described as a measure of...",
              response: { type: "mcq", choices: [
                { id: "a", text: "the spread of the middle half of the data" }, { id: "b", text: "the full spread of all the data" }, { id: "c", text: "the average value" }, { id: "d", text: "the number of data points" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Interquartile range", statement: "$Q_3-Q_1$, the spread of the middle 50%." }],
                steps: [{ reasoning: "IQR measures the middle half.", working: "Q_3-Q_1", marks: 1, markCode: "B" }],
                finalAnswer: "**(a)** The spread of the middle half",
                commonErrors: ["Confusing IQR with range."],
              },
            },
            {
              id: "edm10-u7-compare-q2", difficulty: "core", tier: "higher", totalMarks: 2,
              stem: "Give two reasons why the interquartile range is preferred to the range when comparing two distributions.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "IQR vs range", statement: "IQR ignores extreme values and focuses on the middle 50%." }],
                steps: [
                  { reasoning: "The IQR is not affected by outliers/extreme values.", working: "\\text{unaffected by extremes}", marks: 1, markCode: "R" },
                  { reasoning: "It measures the consistency of the middle half of the data.", working: "\\text{middle 50\\% consistency}", marks: 1, markCode: "R" },
                ],
                finalAnswer: "IQR is unaffected by outliers and measures the middle half.",
                commonErrors: ["Repeating the same point twice."],
              },
            },
            {
              id: "edm10-u7-compare-q3", difficulty: "core", tier: "higher", totalMarks: 3,
              stem: "Set P has five-number summary: min $10$, Q1 $15$, median $20$, Q3 $30$, max $45$. Set Q has: min $5$, Q1 $20$, median $25$, Q3 $28$, max $50$.",
              parts: [
                { label: "a", prompt: "Calculate the IQR of set P.", marks: 1 },
                { label: "b", prompt: "Calculate the IQR of set Q.", marks: 1 },
                { label: "c", prompt: "State which set is more consistent, giving a reason.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Interquartile range", statement: "$\\text{IQR}=Q_3-Q_1$." }],
                steps: [
                  { part: "a", reasoning: "Subtract for P.", working: "30-15=15", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Subtract for Q.", working: "28-20=8", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Q has the smaller IQR so is more consistent.", working: "8<15", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $15$ (b) $8$ (c) Set Q",
                commonErrors: ["Comparing ranges instead of IQRs."],
              },
            },
            {
              id: "edm10-u7-compare-q4", difficulty: "challenge", tier: "higher", totalMarks: 5,
              stem: "Two classes took the same mathematics test. Class A: median $62$, IQR $10$. Class B: median $58$, IQR $18$.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "property", name: "Median", statement: "Higher median = higher typical score." },
                  { kind: "property", name: "IQR", statement: "Smaller IQR = more consistent." },
                ],
                steps: [
                  { reasoning: "Class A's median of 62 is higher than B's 58, so A has the higher typical score.", working: "62>58", marks: 1, markCode: "M" },
                  { reasoning: "Class A's IQR of 10 is smaller than B's 18, so A's middle half is more consistent.", working: "10<18", marks: 1, markCode: "M" },
                  { reasoning: "B has the wider spread, so more variable results including possibly more very high and very low scores.", working: "\\text{B wider spread}", marks: 1, markCode: "R" },
                  { reasoning: "Overall, A performed better and more consistently.", working: "\\text{A better and more consistent}", marks: 1, markCode: "A" },
                  { reasoning: "Link to context: the school might prefer A's consistency.", working: "\\text{contextual conclusion}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Class A has the higher median and smaller IQR, so A performed better and more consistently.",
                commonErrors: ["Ignoring the context and just listing numbers."],
              },
            },
            {
              id: "edm10-u7-compare-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "The five-number summaries for the daily wages (in dollars) of two groups of workers are given.\n\nGroup X: min $4$, Q1 $9$, median $14$, Q3 $20$, max $26$.\nGroup Y: min $6$, Q1 $12$, median $16$, Q3 $18$, max $24$.",
              parts: [
                { label: "a", prompt: "Calculate the IQR for each group.", marks: 4 },
                { label: "b", prompt: "Find the difference between the medians.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Interquartile range", statement: "$\\text{IQR}=Q_3-Q_1$; medians compared by subtraction." }],
                steps: [
                  { part: "a", reasoning: "IQR of X.", working: "20-9=11", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "IQR of Y.", working: "18-12=6", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State both.", working: "11 \\text{ and } 6", marks: 1, markCode: "A" },
                  { part: "a", reasoning: "Comment on consistency.", working: "\\text{Y more consistent}", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Subtract the medians.", working: "16-14=2", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the difference.", working: "2 \\text{ (dollars)}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) X: $11$, Y: $6$ — Y is more consistent (b) $2$",
                commonErrors: ["Dividing the medians instead of subtracting for the difference."],
              },
            },
            {
              id: "edm10-u7-compare-q6", difficulty: "challenge", tier: "higher", totalMarks: 10,
              stem: "Two garden centres record their daily takings ($\$1000$s) over a month.\n\nCentre P: min $2$, Q1 $4$, median $6$, Q3 $9$, max $15$.\nCentre Q: min $5$, Q1 $7$, median $8$, Q3 $10$, max $12$.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "property", name: "Median", statement: "Typical daily takings." },
                  { kind: "property", name: "IQR and range", statement: "Consistency and overall spread." },
                  { kind: "property", name: "Skew", statement: "Whisker lengths and median position indicate skew." },
                ],
                steps: [
                  { reasoning: "Medians: Q has 8 vs P's 6, so Q has higher typical daily takings.", working: "8>6", marks: 1, markCode: "M" },
                  { reasoning: "IQRs: P $=9-4=5$; Q $=10-7=3$.", working: "\\text{IQR}_P=5,\\ \\text{IQR}_Q=3", marks: 2, markCode: "M" },
                  { reasoning: "Q's smaller IQR means more consistent takings.", working: "3<5", marks: 1, markCode: "A" },
                  { reasoning: "Ranges: P $=15-2=13$; Q $=12-5=7$.", working: "\\text{range}_P=13,\\ \\text{range}_Q=7", marks: 2, markCode: "M" },
                  { reasoning: "P's range is much larger, driven by a high maximum of 15 — possible positive skew/outlier.", working: "15 \\text{ max},\\ \\text{long upper whisker}", marks: 2, markCode: "R" },
                  { reasoning: "Conclude: Q is more reliable/profitable on a typical day; P occasionally does very well but is less predictable.", working: "\\text{Q typical higher; P more variable}", marks: 1, markCode: "A" },
                  { reasoning: "Reference the context of daily takings.", working: "\\text{garden centre context}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Centre Q has higher median takings ($8$ vs $6$) and is more consistent (IQR $3$ vs $5$, range $7$ vs $13$); P is more variable with a high outlier.",
                commonErrors: ["Claiming P is better because its maximum is higher.", "Ignoring skew and outliers."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edm10-u7-distributions-notes", title: "Comparing distributions — notes",
      summary: "Box plots show the five-number summary; compare distributions by median, IQR, range and skew.",
      sections: [
        { heading: "Key idea", body: "The box spans Q1–Q3 (middle 50%); whiskers reach the extremes or $1.5\\times$IQR fences." },
        { heading: "Comparison", body: "Comment on median (typical), IQR (consistency), range (spread) and skew — always in context." },
        { heading: "Skew", body: "Median near Q1 suggests positive skew; long upper whisker suggests high outliers." },
      ],
    },
  },
  {
    file: "lesson-7-2.ts", exportName: "lesson72",
    lesson: {
      id: "edm10-u7-lesson-7-2", code: "7-2",
      title: "Scatter Graphs and Correlation",
      goal: "I CAN describe correlation on scatter graphs, draw and use a line of best fit, and interpret its equation.",
      standards: ["4MA1 8.7", "4MA1 8.8"],
      vocabulary: [
        { term: "Scatter graph", definition: "A plot of paired data as points on a coordinate grid." },
        { term: "Correlation", definition: "The relationship between two variables: positive, negative or zero." },
        { term: "Line of best fit", definition: "A straight line drawn through the points to show the trend; balanced so points are evenly scattered either side." },
        { term: "Anomaly", definition: "A point that does not follow the general pattern of the data." },
        { term: "Extrapolation", definition: "Using the line of best fit to predict outside the range of the data — unreliable." },
        { term: "Interpolation", definition: "Predicting within the range of the data — more reliable." },
      ],
      concepts: [
        {
          id: "edm10-u7-correlation",
          title: "Scatter graphs and correlation",
          skill: "Describe the correlation in paired data and identify anomalies.",
          sections: [
            { heading: "Types of correlation", body: "Positive correlation: as one variable increases, the other tends to increase (points rise left to right). Negative correlation: one increases as the other decreases (points fall). No correlation: points are scattered with no pattern." },
            { heading: "Strength of correlation", body: "Correlation can be strong (points close to a line) or weak (points widely scattered). Describe both direction and strength: 'strong positive correlation'." },
            { heading: "Anomalies and causation", body: "An anomaly is a point far from the trend — it may be a misrecord or genuinely unusual. Correlation does not prove causation: a lurking variable may drive both, e.g. ice-cream sales and drowning both rise in summer because of temperature." },
          ],
          keyFormulas: [
            { name: "Correlation types", statement: "positive / negative / zero" },
            { name: "Strength", statement: "strong / moderate / weak" },
          ],
          workedExample: {
            problem: "A scatter graph of hours of revision against test score shows points rising from lower left to upper right, close to a straight line. Describe the correlation.",
            solution: "Strong positive correlation: more revision is associated with higher scores.",
          },
          questions: [
            {
              id: "edm10-u7-scatter-q1", difficulty: "foundation", tier: "foundation", totalMarks: 1,
              stem: "On a scatter graph, points that rise from lower left to upper right show...",
              response: { type: "mcq", choices: [
                { id: "a", text: "positive correlation" }, { id: "b", text: "negative correlation" }, { id: "c", text: "no correlation" }, { id: "d", text: "an anomaly" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Positive correlation", statement: "Both variables increase together." }],
                steps: [{ reasoning: "Rising left to right means both increase together.", working: "\\text{positive}", marks: 1, markCode: "B" }],
                finalAnswer: "**(a)** Positive correlation",
                commonErrors: ["Confusing rising with negative correlation."],
              },
            },
            {
              id: "edm10-u7-scatter-q2", difficulty: "foundation", tier: "foundation", totalMarks: 2,
              stem: "As the number of hours of revision increases, a student's test score tends to increase. What type of correlation is this?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Positive correlation" }, { id: "b", text: "Negative correlation" }, { id: "c", text: "No correlation" }, { id: "d", text: "Inverse proportion" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Correlation", statement: "Both variables increase together = positive correlation." }],
                steps: [
                  { reasoning: "Both variables increase together.", working: "\\text{both increase}", marks: 1, markCode: "M" },
                  { reasoning: "Name the correlation.", working: "\\text{positive}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "**(a)** Positive correlation",
                commonErrors: ["Saying 'direct proportion' — correlation is not necessarily proportional."],
              },
            },
            {
              id: "edm10-u7-scatter-q3", difficulty: "core", tier: "foundation", totalMarks: 3,
              stem: "A scatter graph of monthly ice-cream sales against average temperature shows a strong positive correlation. Explain what this means, and suggest one possible lurking variable that could affect both.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Correlation", statement: "As temperature rises, ice-cream sales tend to rise." },
                  { kind: "principle", name: "Lurking variable", statement: "A third variable may drive both." },
                ],
                steps: [
                  { reasoning: "Interpret the correlation in context.", working: "\\text{warmer months have higher sales}", marks: 1, markCode: "M" },
                  { reasoning: "Note it does not prove causation.", working: "\\text{correlation} \\neq \\text{causation}", marks: 1, markCode: "R" },
                  { reasoning: "Suggest a lurking variable, e.g. holiday season or rainfall.", working: "\\text{e.g. school holidays}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Warmer months tend to have higher ice-cream sales; correlation does not prove temperature causes sales — a lurking variable (e.g. holidays) may be involved.",
                commonErrors: ["Claiming temperature definitely causes the sales."],
              },
            },
            {
              id: "edm10-u7-scatter-q4", difficulty: "challenge", tier: "higher", totalMarks: 4,
              stem: "A scatter graph of height (cm) against shoe size for 40 adults shows a strong positive correlation, with one point at $(150,\\ 4)$ far below the general trend.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Correlation", statement: "Taller people tend to have larger shoe sizes." },
                  { kind: "definition", name: "Anomaly", statement: "A point far from the trend." },
                ],
                steps: [
                  { reasoning: "Describe the correlation.", working: "\\text{strong positive}", marks: 1, markCode: "M" },
                  { reasoning: "Interpret in context.", working: "\\text{height and shoe size increase together}", marks: 1, markCode: "M" },
                  { reasoning: "Identify the anomaly.", working: "(150,\\ 4)\\text{ is an anomaly}", marks: 1, markCode: "A" },
                  { reasoning: "Suggest why it might occur, e.g. data entry error or unusual feet.", working: "\\text{error or unusual}", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Strong positive correlation; $(150,4)$ is an anomaly possibly due to error or unusual feet.",
                commonErrors: ["Ignoring the anomalous point."],
              },
            },
            {
              id: "edm10-u7-scatter-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "A class recorded hours of television watched per week and end-of-year exam grade for 30 students. The scatter graph shows a negative correlation, with one clear anomaly.",
              parts: [
                { label: "a", prompt: "State the type of correlation shown.", marks: 1 },
                { label: "b", prompt: "Explain what the negative correlation means in this context.", marks: 2 },
                { label: "c", prompt: "What should be done with the anomalous point when drawing the line of best fit?", marks: 2 },
                { label: "d", prompt: "A student claims 'watching more TV causes lower grades'. Explain why this conclusion may be too strong.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Negative correlation", statement: "One variable increases as the other decreases." },
                  { kind: "principle", name: "Correlation vs causation", statement: "Correlation does not prove causation." },
                ],
                steps: [
                  { part: "a", reasoning: "State the correlation.", working: "\\text{negative}", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Interpret: more TV hours tend to go with lower grades.", working: "\\text{more TV} \\to \\text{lower grade}", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Add context: students who watch less TV tend to score higher.", working: "\\text{less TV} \\to \\text{higher grade}", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "The anomaly should not be included when judging the line of best fit.", working: "\\text{ignore the anomaly}", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "It may be a data error or genuinely unusual student.", working: "\\text{error or unusual}", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Correlation is not causation — other factors (motivation, sleep) may explain it.", working: "\\text{lurking variables}", marks: 1, markCode: "R" },
                ],
                finalAnswer: "Negative correlation; more TV tends to mean lower grades; ignore the anomaly for the LOBF; correlation does not prove causation.",
                commonErrors: ["Accepting the causal claim without qualification."],
              },
            },
            {
              id: "edm10-u7-scatter-q6", difficulty: "challenge", tier: "higher", totalMarks: 9,
              stem: "Two scatter graphs are described. Graph A plots hours of physical exercise per week against resting heart rate for 50 adults, showing a moderate negative correlation. Graph B plots hours of exercise per week against fitness-test score for the same adults, showing a strong positive correlation.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Correlation", statement: "Direction and strength of relationship." },
                  { kind: "principle", name: "Lurking variables", statement: "Other factors may influence both variables." },
                ],
                steps: [
                  { reasoning: "Graph A: more exercise is associated with lower resting heart rate — moderate negative correlation.", working: "\\text{A: moderate negative}", marks: 1, markCode: "M" },
                  { reasoning: "Graph B: more exercise is associated with higher fitness scores — strong positive correlation.", working: "\\text{B: strong positive}", marks: 1, markCode: "M" },
                  { reasoning: "Compare strengths: B's correlation is stronger, so exercise predicts fitness score more reliably than resting heart rate.", working: "\\text{B stronger than A}", marks: 2, markCode: "R" },
                  { reasoning: "Note that correlation does not prove exercise causes the changes — fitness level, age and diet are lurking variables.", working: "\\text{lurking variables}", marks: 2, markCode: "R" },
                  { reasoning: "Suggest a sensible conclusion: regular exercise is associated with better fitness outcomes.", working: "\\text{associated, not proven causal}", marks: 2, markCode: "A" },
                  { reasoning: "Conclude appropriately.", working: "\\text{qualified conclusion}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "A: moderate negative correlation; B: strong positive correlation. B is the stronger relationship, but correlation alone does not prove causation.",
                commonErrors: ["Declaring exercise 'causes' lower heart rate as fact."],
              },
            },
          ],
        },
        {
          id: "edm10-u7-line-of-best-fit",
          title: "Line of best fit and prediction",
          skill: "Draw and interpret a line of best fit and its equation for prediction.",
          sections: [
            { heading: "Drawing the line", body: "The line of best fit passes through the centre of the data — roughly through the mean point $(\\bar{x},\\bar{y})$ — with points balanced either side. Ignore anomalies when placing the line. It should follow the trend, not necessarily join any points." },
            { heading: "Using the equation", body: "Read two convenient points on the line to find $m$ and $c$ in $y=mx+c$. The gradient describes the change in $y$ per unit increase in $x$; the intercept is the value of $y$ when $x=0$. Predictions inside the data range are interpolation (reliable); outside it is extrapolation (unreliable)." },
            { heading: "Interpreting the gradient", body: "For a line $y=mx+c$: if $x$ increases by 1, $y$ changes by $m$. E.g. a line relating price ($y$, in $\\pounds$) to weight ($x$, in kg) with gradient 4 means each extra kg costs $\\pounds4$. The intercept may or may not have real meaning." },
          ],
          keyFormulas: [
            { name: "Line of best fit", statement: "$y=mx+c$ through the mean point" },
            { name: "Gradient from two points", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
            { name: "Prediction", statement: "Substitute the $x$-value into the equation" },
          ],
          workedExample: {
            problem: "The line of best fit for a scatter graph is $y=0.8x+12$, where $y$ is a score and $x$ is hours studied. Estimate the score for $x=40$ hours.",
            solution: "$y=0.8(40)+12=32+12=44$. If the data only went up to $x=20$, this is extrapolation and less reliable.",
          },
          questions: [
            {
              id: "edm10-u7-lobf-q1", difficulty: "foundation", tier: "foundation", totalMarks: 1,
              stem: "When drawing a line of best fit, the line should...",
              response: { type: "mcq", choices: [
                { id: "a", text: "pass through every data point" }, { id: "b", text: "pass through as many points as possible, ignoring anomalies" }, { id: "c", text: "have points balanced on both sides, following the trend" }, { id: "d", text: "always be horizontal" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Line of best fit", statement: "Follows the trend with points balanced either side." }],
                steps: [{ reasoning: "The LOBF balances points either side and ignores anomalies.", working: "\\text{balanced points}", marks: 1, markCode: "B" }],
                finalAnswer: "**(c)** Points balanced on both sides",
                commonErrors: ["Forcing the line through every point."],
              },
            },
            {
              id: "edm10-u7-lobf-q2", difficulty: "foundation", tier: "foundation", totalMarks: 2,
              stem: "The line of best fit for some data is $y=2x+10$. Use it to estimate the value of $y$ when $x=15$.",
              response: { type: "numeric", parts: [{ label: "y", answer: 40 }] },
              markscheme: {
                principles: [{ kind: "method", name: "Using the equation", statement: "Substitute the $x$-value." }],
                steps: [
                  { reasoning: "Substitute $x=15$.", working: "y=2(15)+10", marks: 1, markCode: "M" },
                  { reasoning: "Evaluate.", working: "y=40", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$40$",
                commonErrors: ["Computing $2+15+10$ instead of $2(15)+10$."],
              },
            },
            {
              id: "edm10-u7-lobf-q3", difficulty: "core", tier: "foundation", totalMarks: 3,
              stem: "The line of best fit for a scatter graph passes through the points $(0,5)$ and $(10,15)$. Find the equation of the line and use it to estimate $y$ when $x=30$.",
              response: { type: "numeric", parts: [{ label: "y at x=30", answer: 35 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Equation of a line", statement: "$m=\\frac{\\Delta y}{\\Delta x}$, $c$ from a point." }],
                steps: [
                  { reasoning: "Find the gradient.", working: "m=\\frac{15-5}{10-0}=1", marks: 1, markCode: "M" },
                  { reasoning: "Find $c$: the line passes through $(0,5)$, so $c=5$; equation $y=x+5$.", working: "y=x+5", marks: 1, markCode: "M" },
                  { reasoning: "Substitute $x=30$.", working: "y=30+5=35", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$y=35$ (equation $y=x+5$)",
                commonErrors: ["Using gradient $\\frac{10}{10}=1$ correctly but then forgetting $+5$."],
              },
            },
            {
              id: "edm10-u7-lobf-q4", difficulty: "challenge", tier: "higher", totalMarks: 4,
              stem: "A scatter graph of revision hours ($x$) against mock exam score ($y$, out of 100) has line of best fit $y=0.8x+12$. The data ranged from $x=0$ to $x=20$ hours.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Prediction", statement: "Substitute into $y=mx+c$." },
                  { kind: "principle", name: "Extrapolation", statement: "Predictions outside the data range are unreliable." },
                ],
                steps: [
                  { reasoning: "A student predicts the score for $x=40$ hours.", working: "x=40", marks: 1, markCode: "M" },
                  { reasoning: "Compute $y=0.8(40)+12=44$.", working: "y=44", marks: 1, markCode: "A" },
                  { reasoning: "Comment on reliability: $x=40$ is far outside the data range $0\\le x\\le20$, so this is extrapolation.", working: "\\text{extrapolation}", marks: 1, markCode: "R" },
                  { reasoning: "Conclude the prediction is unreliable and may not reflect reality.", working: "\\text{unreliable}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$y=44$, but it is extrapolation beyond the data range so unreliable.",
                commonErrors: ["Giving 44 without commenting on reliability."],
              },
            },
            {
              id: "edm10-u7-lobf-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "The line of best fit for a scatter graph is $y=1.5x+20$, where $y$ is the monthly cost in $\\pounds$ and $x$ is the number of units produced.",
              parts: [
                { label: "a", prompt: "Estimate the cost when $x=10$.", marks: 2 },
                { label: "b", prompt: "Find the value of $x$ for which the cost is $\\pounds 50$.", marks: 2 },
                { label: "c", prompt: "Interpret the gradient of the line in context.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Using y = mx + c", statement: "Substitute or rearrange to find the unknown." }],
                steps: [
                  { part: "a", reasoning: "Substitute $x=10$.", working: "y=1.5(10)+20=35", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the cost.", working: "\\pounds 35", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Set $1.5x+20=50$.", working: "1.5x=30", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Solve.", working: "x=20", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Gradient 1.5 means each extra unit adds $\\pounds1.50$ to the cost.", working: "\\pounds1.50\\text{ per unit}", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "State the interpretation.", working: "\\text{marginal cost per unit}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $\\pounds35$ (b) $x=20$ (c) each extra unit costs $\\pounds1.50$",
                commonErrors: ["In (c) interpreting the intercept 20 instead of the gradient."],
              },
            },
            {
              id: "edm10-u7-lobf-q6", difficulty: "challenge", tier: "higher", totalMarks: 10,
              stem: "A scatter graph shows the floor area ($x$ m$^2$) of houses against their price ($y$, in $\\pounds1000$s). The line of best fit passes through the points $(40,150)$ and $(120,390)$.",
              parts: [
                { label: "a", prompt: "Find the gradient of the line of best fit.", marks: 2 },
                { label: "b", prompt: "Find the equation of the line of best fit.", marks: 3 },
                { label: "c", prompt: "Estimate the price of a house with floor area $100\\text{ m}^2$.", marks: 2 },
                { label: "d", prompt: "Estimate the floor area of a house priced at $\\pounds 300\\,000$.", marks: 2 },
                { label: "e", prompt: "Comment on the reliability of your answer to part (d).", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Equation of a line", statement: "$m=\\frac{\\Delta y}{\\Delta x}$, then $y=mx+c$." }],
                steps: [
                  { part: "a", reasoning: "Compute the gradient.", working: "m=\\frac{390-150}{120-40}=\\frac{240}{80}=3", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the gradient.", working: "m=3", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Use $y-y_1=m(x-x_1)$ with $(40,150)$.", working: "y-150=3(x-40)", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Expand.", working: "y=3x-120+150", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Simplify.", working: "y=3x+30", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Substitute $x=100$.", working: "y=3(100)+30=330", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "State the price.", working: "\\pounds 330\\,000", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Set $3x+30=300$.", working: "3x=270", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Solve.", working: "x=90\\text{ m}^2", marks: 1, markCode: "A" },
                  { part: "e", reasoning: "$x=90$ lies within the data range ($40\\le x\\le120$), so the estimate is reasonably reliable.", working: "\\text{interpolation}", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) $m=3$ (b) $y=3x+30$ (c) $\\pounds330\\,000$ (d) $90\\text{ m}^2$ (e) reliable — interpolation",
                commonErrors: ["In (d) giving $y$ instead of $x$.", "Misreading $\\pounds1000$s units."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edm10-u7-scatter-notes", title: "Scatter graphs — notes",
      summary: "Correlation types and strength, anomalies, line of best fit, interpolation vs extrapolation.",
      sections: [
        { heading: "Key idea", body: "Correlation describes association, not causation; a lurking variable may drive both." },
        { heading: "LOBF", body: "Balanced points either side; find $m$ and $c$ from two points on the line." },
        { heading: "Prediction", body: "Inside the data range = interpolation (reliable); outside = extrapolation (unreliable)." },
      ],
    },
  },
  {
    file: "lesson-7-3.ts", exportName: "lesson73",
    lesson: {
      id: "edm10-u7-lesson-7-3", code: "7-3",
      title: "Two-Way Tables and Expected Frequency",
      goal: "I CAN calculate probabilities from two-way tables and find expected frequencies in repeated trials.",
      standards: ["4MA1 8.9", "4MA1 8.10"],
      vocabulary: [
        { term: "Two-way table", definition: "A table displaying frequencies for two variables at once, with row and column totals." },
        { term: "Marginal total", definition: "The totals on the edges of a two-way table (row totals and column totals)." },
        { term: "Relative frequency", definition: "The proportion of a total: $\\frac{\\text{frequency}}{\\text{total}}$." },
        { term: "Conditional probability", definition: "Probability of an event given another has occurred, e.g. $P(A|B)=\\frac{\\text{joint}}{\\text{row/column total}}$." },
        { term: "Expected frequency", definition: "The number of times an event is expected in $n$ trials: $E=n\\times p$." },
        { term: "Long-run frequency", definition: "The frequency an event settles to over many trials, approximating its probability." },
      ],
      concepts: [
        {
          id: "edm10-u7-two-way-tables",
          title: "Two-way tables",
          skill: "Calculate probabilities and conditional probabilities from two-way tables.",
          sections: [
            { heading: "Reading a two-way table", body: "Rows and columns each represent one variable. The grand total is the bottom-right cell. Marginal totals give the totals for each category. Relative frequency of a cell is $\\frac{\\text{cell}}{\\text{grand total}}$; conditional probability divides by the relevant row or column total instead." },
            { heading: "Probabilities from tables", body: "$P(\\text{event})=\\frac{\\text{favourable cells}}{\\text{grand total}}$. For 'or' events that overlap, add the cells or use $1-P(\\text{neither})$. For conditional probability like $P(\\text{pet}\\mid\\text{house})$, restrict to the 'house' column total and take the pet cell over it." },
            { heading: "Worked example", body: "In a survey of 90 adults: 30 have a pet and a house, 20 have a pet but no house, 25 have no pet but a house, 15 have neither. $P(\\text{pet})=\\frac{50}{90}=\\frac{5}{9}$. $P(\\text{no pet}\\mid\\text{house})=\\frac{25}{55}=\\frac{5}{11}$." },
          ],
          keyFormulas: [
            { name: "Relative frequency", statement: "$\\frac{\\text{cell frequency}}{\\text{grand total}}$" },
            { name: "Conditional probability", statement: "$P(A\\mid B)=\\frac{\\text{joint frequency}}{\\text{total for }B}$" },
            { name: "Either/or", statement: "$P(A\\text{ or }B)=1-P(\\text{neither})$" },
          ],
          workedExample: {
            problem: "In the table above (90 adults), find $P(\\text{pet or house})$.",
            solution: "$P(\\text{neither})=\\frac{15}{90}$, so $P(\\text{pet or house})=1-\\frac{15}{90}=\\frac{75}{90}=\\frac{5}{6}$.",
          },
          questions: [
            {
              id: "edm10-u7-twoway-q1", difficulty: "foundation", tier: "foundation", totalMarks: 1,
              stem: "In a two-way table, the grand total is found by...",
              response: { type: "mcq", choices: [
                { id: "a", text: "adding all the row totals" }, { id: "b", text: "adding all the cell frequencies" }, { id: "c", text: "multiplying the row and column totals" }, { id: "d", text: "taking the largest cell" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Two-way table", statement: "Grand total = sum of all cells = sum of row totals = sum of column totals." }],
                steps: [{ reasoning: "All cells sum to the grand total.", working: "\\sum\\text{cells}", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Adding all the cell frequencies",
                commonErrors: ["Multiplying totals."],
              },
            },
            {
              id: "edm10-u7-twoway-q2", difficulty: "foundation", tier: "foundation", totalMarks: 2,
              stem: "In a survey of 90 adults: 30 have a pet and own a house, 20 have a pet but no house, 25 have no pet but own a house, and 15 have neither. Find the relative frequency of adults who have a pet and own a house.",
              response: { type: "numeric", parts: [{ label: "Relative frequency", answer: 0.333333, tolerance: 0.001 }] },
              markscheme: {
                principles: [{ kind: "definition", name: "Relative frequency", statement: "$\\frac{\\text{cell}}{\\text{grand total}}$." }],
                steps: [
                  { reasoning: "Divide the cell by the total.", working: "\\frac{30}{90}", marks: 1, markCode: "M" },
                  { reasoning: "Evaluate.", working: "\\frac{1}{3}\\approx0.333", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$\\frac{1}{3}$",
                commonErrors: ["Dividing by 50 (the pet row total) instead of 90."],
              },
            },
            {
              id: "edm10-u7-twoway-q3", difficulty: "core", tier: "foundation", totalMarks: 3,
              stem: "Using the same survey of 90 adults (30 pet+house, 20 pet only, 25 house only, 15 neither), find the probability that a randomly chosen adult who owns a house does NOT have a pet.",
              response: { type: "numeric", parts: [{ label: "Probability", answer: 0.454545, tolerance: 0.001 }] },
              markscheme: {
                principles: [{ kind: "definition", name: "Conditional probability", statement: "$P(\\text{no pet}\\mid\\text{house})=\\frac{25}{55}$." }],
                steps: [
                  { reasoning: "Total house owners: $30+25=55$.", working: "30+25=55", marks: 1, markCode: "M" },
                  { reasoning: "House owners without pets: 25.", working: "\\frac{25}{55}", marks: 1, markCode: "M" },
                  { reasoning: "Simplify.", working: "\\frac{5}{11}\\approx0.455", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$\\frac{5}{11}$",
                commonErrors: ["Dividing 25 by 90 instead of by the house-owner total."],
              },
            },
            {
              id: "edm10-u7-twoway-q4", difficulty: "challenge", tier: "higher", totalMarks: 4,
              stem: "Using the survey of 90 adults (30 pet+house, 20 pet only, 25 house only, 15 neither), one adult is chosen at random.",
              parts: [
                { label: "a", prompt: "Find $P(\\text{has a pet})$.", marks: 2 },
                { label: "b", prompt: "Find $P(\\text{owns a house}\\mid\\text{has a pet})$.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Probability from a table", statement: "Divide favourable cells by grand total (or conditional total)." }],
                steps: [
                  { part: "a", reasoning: "Pet owners: $30+20=50$.", working: "P(\\text{pet})=\\frac{50}{90}", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Simplify.", working: "\\frac{5}{9}", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Among the 50 pet owners, 30 own a house.", working: "P(\\text{house}\\mid\\text{pet})=\\frac{30}{50}", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Simplify.", working: "\\frac{3}{5}=0.6", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $\\frac{5}{9}$ (b) $\\frac{3}{5}$",
                commonErrors: ["In (b) dividing 30 by 90 instead of by 50."],
              },
            },
            {
              id: "edm10-u7-twoway-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "Using the survey of 90 adults (30 pet+house, 20 pet only, 25 house only, 15 neither), work out the following probabilities for a randomly chosen adult.",
              parts: [
                { label: "a", prompt: "$P(\\text{has a pet or owns a house})$.", marks: 2 },
                { label: "b", prompt: "$P(\\text{has a pet and does not own a house})$.", marks: 2 },
                { label: "c", prompt: "Find the expected number of pet owners in a random sample of 450 adults from the same population.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Either/or", statement: "$P(A\\text{ or }B)=1-P(\\text{neither})$." },
                  { kind: "formula", name: "Expected frequency", statement: "$E=n\\times p$." },
                ],
                steps: [
                  { part: "a", reasoning: "Neither = 15, so pet-or-house = $90-15=75$.", working: "1-\\frac{15}{90}=\\frac{75}{90}", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Simplify.", working: "\\frac{5}{6}\\approx0.833", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Pet without house is a single cell: 20.", working: "\\frac{20}{90}", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Simplify.", working: "\\frac{2}{9}\\approx0.222", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Expected frequency $=450\\times\\frac{5}{9}$.", working: "450\\times\\frac{5}{9}=250", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "State the answer.", working: "250", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $\\frac{5}{6}$ (b) $\\frac{2}{9}$ (c) $250$",
                commonErrors: ["In (a) adding $\\frac{50}{90}+\\frac{55}{90}$ and double-counting the overlap."],
              },
            },
            {
              id: "edm10-u7-twoway-q6", difficulty: "challenge", tier: "higher", totalMarks: 10,
              stem: "A school surveyed 200 students about whether they play a musical instrument and whether they take part in sport.\n\n|  | Sport | No sport | Total |\n| --- | --- | --- | --- |\n| Instrument | 45 | 15 | 60 |\n| No instrument | 95 | 45 | 140 |\n| Total | 140 | 60 | 200 |",
              parts: [
                { label: "a", prompt: "Write down the row and column totals.", marks: 2 },
                { label: "b", prompt: "Find the probability that a randomly chosen student plays an instrument.", marks: 2 },
                { label: "c", prompt: "Find the probability that a student who takes part in sport also plays an instrument.", marks: 3 },
                { label: "d", prompt: "Find $P(\\text{no instrument or no sport})$.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Two-way table", statement: "Marginal totals and the grand total." },
                  { kind: "definition", name: "Conditional probability", statement: "Divide by the relevant total." },
                ],
                steps: [
                  { part: "a", reasoning: "State the totals: instrument 60, no instrument 140; sport 140, no sport 60; grand total 200.", working: "60,140,140,60,200", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Divide the instrument total by 200.", working: "P=\\frac{60}{200}=\\frac{3}{10}", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the answer.", working: "0.3", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Among the 140 sport students, 45 play an instrument.", working: "P=\\frac{45}{140}", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Simplify.", working: "\\frac{9}{28}\\approx0.321", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "State the answer.", working: "\\frac{9}{28}", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Use $1-P(\\text{instrument and sport})=1-\\frac{45}{200}$.", working: "1-\\frac{45}{200}=\\frac{155}{200}", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Simplify.", working: "\\frac{31}{40}=0.775", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "State the answer.", working: "0.775", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(b) $0.3$ (c) $\\frac{9}{28}$ (d) $\\frac{31}{40}$",
                commonErrors: ["In (c) dividing by 200 instead of 140."],
              },
            },
          ],
        },
        {
          id: "edm10-u7-expected-frequency",
          title: "Expected frequency",
          skill: "Calculate expected frequencies for repeated trials and compare with observed results.",
          sections: [
            { heading: "Expected frequency", body: "If an event has probability $p$ and there are $n$ trials, the expected frequency is $E=n\\times p$. For example, rolling a fair die 300 times, the expected number of sixes is $300\\times\\frac{1}{6}=50$." },
            { heading: "Interpreting expected frequency", body: "The expected frequency is an average over many trials — it does not guarantee exactly $E$ occurrences. Observed frequencies in a small number of trials will differ; the difference should shrink as trials increase." },
            { heading: "Relative frequency as probability", body: "From experimental data, relative frequency $=\\frac{\\text{occurrences}}{\\text{trials}}$ estimates probability. Over many trials it approaches the true probability. Expected frequency can then be predicted for new experiments using this estimate." },
          ],
          keyFormulas: [
            { name: "Expected frequency", statement: "$E=n\\times p$" },
            { name: "Relative frequency", statement: "$\\frac{\\text{occurrences}}{\\text{trials}}$" },
          ],
          workedExample: {
            problem: "A biased coin lands heads with probability $0.3$. It is tossed 200 times. How many heads are expected?",
            solution: "$E=200\\times0.3=60$ heads.",
          },
          questions: [
            {
              id: "edm10-u7-expectfreq-q1", difficulty: "foundation", tier: "foundation", totalMarks: 1,
              stem: "The expected frequency of an event in $n$ trials is...",
              response: { type: "mcq", choices: [
                { id: "a", text: "$n \\times p$" }, { id: "b", text: "$n \\div p$" }, { id: "c", text: "$p \\div n$" }, { id: "d", text: "$n+p$" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "formula", name: "Expected frequency", statement: "$E=n\\times p$." }],
                steps: [{ reasoning: "Multiply trials by probability.", working: "E=np", marks: 1, markCode: "B" }],
                finalAnswer: "**(a)** $n \\times p$",
                commonErrors: ["Dividing instead of multiplying."],
              },
            },
            {
              id: "edm10-u7-expectfreq-q2", difficulty: "foundation", tier: "foundation", totalMarks: 2,
              stem: "A fair six-sided die is rolled 300 times. Calculate the expected number of times it shows a six.",
              response: { type: "numeric", parts: [{ label: "Expected number", answer: 50 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Expected frequency", statement: "$E=n\\times p=300\\times\\frac16$." }],
                steps: [
                  { reasoning: "Set up the calculation.", working: "E=300\\times\\frac{1}{6}", marks: 1, markCode: "M" },
                  { reasoning: "Evaluate.", working: "E=50", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$50$",
                commonErrors: ["Using probability $\\frac16$ of each face but for all faces at once."],
              },
            },
            {
              id: "edm10-u7-expectfreq-q3", difficulty: "core", tier: "foundation", totalMarks: 3,
              stem: "A biased coin lands heads with probability $0.3$. The coin is tossed 200 times.",
              parts: [
                { label: "a", prompt: "Calculate the expected number of heads.", marks: 1 },
                { label: "b", prompt: "Calculate the expected number of tails.", marks: 1 },
                { label: "c", prompt: "In one experiment, 55 heads were recorded. Is this surprising? Explain briefly.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Expected frequency", statement: "$E=n\\times p$; tails probability is $1-0.3=0.7$." }],
                steps: [
                  { part: "a", reasoning: "Multiply.", working: "200\\times0.3=60", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Use $p=0.7$ for tails.", working: "200\\times0.7=140", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "55 is below the expected 60 but within reasonable variation for 200 tosses; not strongly surprising.", working: "\\text{55 vs 60 — plausible}", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) $60$ (b) $140$ (c) 55 is plausible, not strongly surprising",
                commonErrors: ["In (b) using $200-60=140$ is fine, but some students use $p=0.3$ for tails."],
              },
            },
            {
              id: "edm10-u7-expectfreq-q4", difficulty: "challenge", tier: "higher", totalMarks: 4,
              stem: "A spinner has four sections with probabilities: red $\\frac{1}{2}$, blue $\\frac{1}{4}$, green $\\frac{1}{8}$ and yellow $\\frac{1}{8}$. The spinner is spun 400 times.",
              parts: [
                { label: "a", prompt: "Calculate the expected frequency of red.", marks: 1 },
                { label: "b", prompt: "Calculate the expected frequency of blue.", marks: 1 },
                { label: "c", prompt: "Calculate the expected frequency of green and yellow combined.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Expected frequency", statement: "$E=n\\times p$." }],
                steps: [
                  { part: "a", reasoning: "Multiply.", working: "400\\times\\frac{1}{2}=200", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Multiply.", working: "400\\times\\frac{1}{4}=100", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Add the probabilities: $\\frac{1}{8}+\\frac{1}{8}=\\frac{1}{4}$.", working: "400\\times\\frac{1}{4}", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Evaluate.", working: "100", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $200$ (b) $100$ (c) $100$",
                commonErrors: ["In (c) calculating each separately and forgetting they asked for combined."],
              },
            },
            {
              id: "edm10-u7-expectfreq-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "A biased coin lands heads with probability $0.35$. It is tossed 400 times.",
              parts: [
                { label: "a", prompt: "Calculate the expected number of heads.", marks: 2 },
                { label: "b", prompt: "Calculate the expected number of tails.", marks: 2 },
                { label: "c", prompt: "In a trial, 120 heads were recorded. Comment on this result compared with the expected frequency.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Expected frequency", statement: "$E=n\\times p$; tails probability $=0.65$." }],
                steps: [
                  { part: "a", reasoning: "Set up.", working: "400\\times0.35", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Evaluate.", working: "140", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Use $p=0.65$ for tails.", working: "400\\times0.65=260", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the answer.", working: "260", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Compare 120 with the expected 140.", working: "120<140", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Comment: fewer heads than expected, but the difference of 20 may still be within normal variation over 400 tosses.", working: "\\text{below expected but plausible}", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) $140$ (b) $260$ (c) 120 heads is below expected; plausible variation",
                commonErrors: ["In (c) saying the coin is definitely biased — expected frequency is an average, not a guarantee."],
              },
            },
            {
              id: "edm10-u7-expectfreq-q6", difficulty: "challenge", tier: "higher", totalMarks: 10,
              stem: "A shop estimates that $60\\%$ of its customers pay by card. In one day, 250 customers visit the shop.",
              parts: [
                { label: "a", prompt: "Calculate the expected number of customers paying by card.", marks: 2 },
                { label: "b", prompt: "Calculate the expected number paying by cash or other methods.", marks: 2 },
                { label: "c", prompt: "On one day, 140 customers paid by card. Compare this with the expected frequency.", marks: 2 },
                { label: "d", prompt: "Explain what is meant by 'expected frequency' and why it does not have to be exact.", marks: 2 },
                { label: "e", prompt: "Calculate the expected number of card payments over a 5-day week (1250 customers).", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Expected frequency", statement: "$E=n\\times p$." },
                  { kind: "definition", name: "Long-run frequency", statement: "Observed frequency approaches probability over many trials." },
                ],
                steps: [
                  { part: "a", reasoning: "Set up.", working: "250\\times0.6", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Evaluate.", working: "150", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Use $p=0.4$ for non-card.", working: "250\\times0.4=100", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the answer.", working: "100", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Compare 140 with 150.", working: "140<150", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Comment: fewer card payments than expected, a difference of 10 — plausible daily variation.", working: "\\text{slightly below expected}", marks: 1, markCode: "R" },
                  { part: "d", reasoning: "Define expected frequency as the average number of occurrences over many trials.", working: "\\text{long-run average}", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Explain it is not exact because individual trials vary.", working: "\\text{variation between days}", marks: 1, markCode: "A" },
                  { part: "e", reasoning: "Multiply.", working: "1250\\times0.6", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Evaluate.", working: "750", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $150$ (b) $100$ (c) 140 is below expected but plausible (d) long-run average, not exact (e) $750$",
                commonErrors: ["Treating expected frequency as a fixed quota."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edm10-u7-probnotes-notes", title: "Two-way tables and expected frequency — notes",
      summary: "Probabilities from two-way tables (joint, marginal, conditional) and expected frequency E = n × p.",
      sections: [
        { heading: "Key idea", body: "Conditional probability divides by the relevant row or column total, not the grand total." },
        { heading: "Expected frequency", body: "$E=n\\times p$; it is a long-run average, not a guarantee." },
        { heading: "Relative frequency", body: "Observed relative frequency estimates probability over many trials." },
      ],
    },
  },
];
