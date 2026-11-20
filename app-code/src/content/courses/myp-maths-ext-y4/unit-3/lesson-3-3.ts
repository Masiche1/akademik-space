import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mypme4-u3-lesson-3-3",
  code: "3-3",
  title: "Statistics and Probability Extended",
  goal: "I CAN calculate measures of spread from cumulative frequency, interpret scatter graphs with regression lines, and find probabilities of combined events and expected values.",
  standards: [
    "MYP Maths: Statistics and probability",
    "Criterion A: Knowing and understanding",
    "Criterion C: Processing and evaluating",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Interquartile range", definition: "$Q_3-Q_1$, the spread of the middle 50% of data." },
    { term: "Standard deviation", definition: "A measure of how spread out data is from the mean." },
    { term: "Regression line", definition: "The line of best fit for a scatter graph, used to predict values." },
    { term: "Residual", definition: "The difference between an actual value and the value predicted by the regression line." },
    { term: "Conditional probability", definition: "The probability of an event given that another event has occurred." },
    { term: "Expected value", definition: "$E=\\sum(\\text{outcome}\\times\\text{probability})$ — the long-run average." },
  ],
  concepts: [
    {
      id: "mypme4-u3-stats-ext",
      title: "Measures of spread and regression",
      skill: "Calculate quartiles and IQR from cumulative frequency, and interpret regression lines and residuals.",
      lesson: {
        sections: [
          {
            heading: "Quartiles from cumulative frequency",
            body: "From a cumulative frequency graph: $Q_1$ at $\\frac{n}{4}$, median at $\\frac{n}{2}$, $Q_3$ at $\\frac{3n}{4}$. The **interquartile range** $=Q_3-Q_1$ measures the spread of the middle half — more robust than range.",
          },
          {
            heading: "Regression lines",
            body: "The **line of best fit** (regression line) summarises the trend in a scatter graph. It can be used to **interpolate** (predict within the data range) but **extrapolation** (predicting beyond) is unreliable. The equation has the form $y=mx+c$.",
          },
          {
            heading: "Residuals",
            body: "A **residual** is the vertical distance between a data point and the regression line: $\\text{residual}=y_{\\text{actual}}-y_{\\text{predicted}}$. Large residuals indicate outliers or poor fit.",
          },
        ],
        keyFormulas: [
          { name: "IQR", statement: "$Q_3-Q_1$" },
          { name: "Quartile positions", statement: "$Q_1$ at $\\frac{n}{4}$, median at $\\frac{n}{2}$, $Q_3$ at $\\frac{3n}{4}$" },
          { name: "Residual", statement: "$y_{\\text{actual}}-y_{\\text{predicted}}$" },
        ],
        workedExample: {
          problem: "A regression line is $y=2x+1$. For a data point $(5,12)$, find the residual.",
          solution: "Predicted $y=2(5)+1=11$; residual $=12-11=1$.",
        },
      },
      questions: [
        {
          id: "mypme4-u3-statsx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For data with $Q_1=10$ and $Q_3=22$, what is the interquartile range?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "16" },
              { id: "c", text: "32" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "IQR", statement: "$IQR=Q_3-Q_1=22-10=12$." },
            ],
            steps: [
              { reasoning: "IQR = $22-10=12$.", working: "12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 12",
            commonErrors: ["Adding instead of subtracting."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-statsx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A regression line is $y=3x-2$. For a point $(4,10)$, find the residual.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "2" },
              { id: "c", text: "$-2$" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Residual", statement: "$y_{\\text{actual}}-y_{\\text{predicted}}=10-(3\\times4-2)=10-10=0$." },
            ],
            steps: [
              { reasoning: "Predicted: $3(4)-2=10$.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "Residual = $10-10=0$ — point lies on line.", working: "0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0$",
            commonErrors: ["Subtracting in wrong order."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-statsx-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A scatter graph shows temperature vs ice cream sales with positive correlation. A student uses the regression line to predict sales at $50°$C when data only goes to $35°$C. Explain why this is unreliable.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extrapolation beyond the data range is unreliable" },
              { id: "b", text: "The regression line is always accurate" },
              { id: "c", text: "Positive correlation means negative prediction" },
              { id: "d", text: "50° is too hot for ice cream" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Extrapolation", statement: "Predicting beyond data range assumes the trend continues." },
            ],
            steps: [
              { reasoning: "50° is outside the data range (extrapolation).", working: "\\text{extrapolation}", marks: 1, markCode: "M" },
              { reasoning: "Trend may not continue beyond observed data.", working: "\\text{unreliable}", marks: 1, markCode: "M" },
              { reasoning: "State the limitation.", working: "\\text{unreliable}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** Extrapolation beyond data range is unreliable",
            commonErrors: ["Thinking regression lines are always accurate."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "mypme4-u3-statsx-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The regression line for study time vs test score is $y=4x+30$ where $x$ is hours studied and $y$ is score.",
          parts: [
            { label: "a", prompt: "Predict the score for 5 hours of study.", marks: 1 },
            { label: "b", prompt: "If a student scored 70, estimate their study time.", marks: 2 },
            { label: "c", prompt: "Interpret the gradient 4 in context.", marks: 2 },
            { label: "d", prompt: "Interpret the y-intercept 30 in context.", marks: 2 },
            { label: "e", prompt: "Give one reason why the regression line might not be reliable for predicting scores.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regression", statement: "$y=mx+c$: $m$ = rate of change, $c$ = baseline." },
            ],
            steps: [
              { part: "a", reasoning: "$y=4(5)+30=50$.", working: "50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$70=4x+30 \\Rightarrow 4x=40 \\Rightarrow x=10$ hours.", working: "x=10\\text{ hours}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the estimate.", working: "10\\text{ hours}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each additional hour of study adds 4 marks on average.", working: "\\text{4 marks per hour}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Interpret the gradient.", working: "\\text{rate of change}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A student who studies 0 hours is predicted to score 30.", working: "\\text{baseline score}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Interpret the intercept.", working: "\\text{y-intercept}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "E.g. relationship may not be linear; other factors affect scores.", working: "\\text{non-linear or other factors}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 50 (b) 10 hours (c) each hour adds ~4 marks (d) predicted score with 0 hours study (e) relationship may not be linear",
            commonErrors: ["Interpreting gradient as total change rather than rate."],
            examinerNote: "M1 for (a), M1 A1 for (b), R1 A1 for (c), R1 A1 for (d), R1 for (e).",
          },
        },
        {
          id: "mypme4-u3-statsx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a data set of $n$ values read from a cumulative frequency graph, at what cumulative frequency is the median found?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{n}{2}$" },
              { id: "b", text: "$\\frac{n}{4}$" },
              { id: "c", text: "$n$" },
              { id: "d", text: "$\\frac{3n}{4}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quartiles", statement: "Median at $\\frac{n}{2}$, $Q_1$ at $\\frac{n}{4}$, $Q_3$ at $\\frac{3n}{4}$." },
            ],
            steps: [
              { reasoning: "Median is at half the cumulative frequency.", working: "\\frac{n}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{n}{2}$",
            commonErrors: ["Confusing with $Q_1$ or $Q_3$ positions."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-statsx-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For data with $Q_1=8$ and $Q_3=20$, find the interquartile range.",
          response: { type: "numeric", parts: [{ label: "IQR", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "IQR", statement: "$IQR=Q_3-Q_1=20-8=12$." },
            ],
            steps: [
              { reasoning: "$20-8=12$.", working: "12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "mypme4-u3-statsx-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A regression line is $y=2x+3$. Predict the value of $y$ when $x=4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "7" },
              { id: "c", text: "14" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regression", statement: "Substitute $x=4$: $y=2(4)+3=11$." },
            ],
            steps: [
              { reasoning: "$y=8+3=11$.", working: "11", marks: 1, markCode: "M" },
              { reasoning: "State the prediction.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Computing $2+3=5$ ignoring $x$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-statsx-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A regression line is $y=x+1$. For a data point $(3,5)$, find the residual.",
          response: { type: "numeric", parts: [{ label: "Residual", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Residual", statement: "$\\text{residual}=y_{\\text{actual}}-y_{\\text{predicted}}$." },
            ],
            steps: [
              { reasoning: "Predicted $y=3+1=4$; residual $=5-4=1$.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "State the residual.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
            commonErrors: ["Subtracting in the wrong order: $4-5=-1$."],
          },
        },
        {
          id: "mypme4-u3-statsx-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A regression line is fitted to data with $x$ ranging from 2 to 20. Which prediction is most reliable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Predicting $y$ at $x=10$ (interpolation)" },
              { id: "b", text: "Predicting $y$ at $x=50$ (extrapolation)" },
              { id: "c", text: "Predicting $y$ at $x=-5$" },
              { id: "d", text: "All predictions are equally reliable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpolation", statement: "Predicting within the data range is reliable; outside is extrapolation." },
            ],
            steps: [
              { reasoning: "$x=10$ lies inside $[2,20]$ — interpolation.", working: "\\text{interpolation}", marks: 1, markCode: "M" },
              { reasoning: "State the reliable prediction.", working: "x=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Predicting at $x=10$",
            commonErrors: ["Thinking extrapolation is equally reliable."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-statsx-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A regression line is $y=1.5x+10$. Find the predicted value of $y$ when $x=6$.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 19 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regression", statement: "$y=1.5(6)+10=9+10=19$." },
            ],
            steps: [
              { reasoning: "$1.5\\times6=9$; $9+10=19$.", working: "19", marks: 1, markCode: "M" },
              { reasoning: "State the prediction.", working: "19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$19$",
            commonErrors: ["Decimal error in $1.5\\times6$."],
          },
        },
        {
          id: "mypme4-u3-statsx-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "On a scatter graph with a regression line, which data point is most likely an outlier?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The point with the largest absolute residual" },
              { id: "b", text: "The point closest to the regression line" },
              { id: "c", text: "The point with the largest $x$-value" },
              { id: "d", text: "The point with the smallest $y$-value" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Residuals", statement: "Large residuals indicate outliers or poor fit." },
            ],
            steps: [
              { reasoning: "Residual measures vertical distance from the line.", working: "\\text{residual}", marks: 1, markCode: "M" },
              { reasoning: "Largest absolute residual → farthest from the trend → outlier.", working: "\\text{largest }|\\text{residual}|", marks: 1, markCode: "M" },
              { reasoning: "Select the correct option.", working: "\\text{outlier}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Largest absolute residual",
            commonErrors: ["Confusing position on the graph with distance from the line."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-statsx-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A cumulative frequency graph has $n=40$ values. At what cumulative frequency is $Q_1$ found?",
          response: { type: "numeric", parts: [{ label: "Cumulative frequency", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quartiles", statement: "$Q_1$ is at $\\frac{n}{4}=\\frac{40}{4}=10$." },
            ],
            steps: [
              { reasoning: "$\\frac{40}{4}=10$.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "State the position.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Using $\\frac{n}{2}=20$ (median position)."],
          },
        },
        {
          id: "mypme4-u3-statsx-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Summary statistics and regression.",
          parts: [
            { label: "a", prompt: "Find the interquartile range for data with $Q_1=12$ and $Q_3=30$.", marks: 2 },
            { label: "b", prompt: "Find the median of 2, 4, 6, 8, 10.", marks: 2 },
            { label: "c", prompt: "A regression line is $y=3x-2$. Find the predicted $y$ when $x=5$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "IQR", statement: "$IQR=Q_3-Q_1$." },
              { kind: "principle", name: "Median", statement: "Middle value of ordered data." },
            ],
            steps: [
              { part: "a", reasoning: "$IQR=30-12=18$.", working: "18", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the IQR.", working: "18", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Middle value is 6.", working: "6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the median.", working: "6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$y=3(5)-2=13$.", working: "13", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the prediction.", working: "13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 18 (b) 6 (c) 13",
            commonErrors: ["In (b), averaging 6 and 8 — odd count means a single middle value."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypme4-u3-statsx-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "The regression line for a data set is $y=2x+5$.",
          parts: [
            { label: "a", prompt: "Predict $y$ when $x=3$.", marks: 2 },
            { label: "b", prompt: "Find the value of $x$ that gives a predicted $y$ of 20.", marks: 2 },
            { label: "c", prompt: "Find the residual for the data point $(4,15)$.", marks: 2 },
            { label: "d", prompt: "Explain why using this line to predict at $x=100$ is unreliable.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regression", statement: "$y=mx+c$; residual $=y_{\\text{actual}}-y_{\\text{predicted}}$." },
            ],
            steps: [
              { part: "a", reasoning: "$y=2(3)+5=11$.", working: "11", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the prediction.", working: "11", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$20=2x+5 \\Rightarrow 2x=15 \\Rightarrow x=7.5$.", working: "x=7.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", working: "7.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Predicted $y=2(4)+5=13$; residual $=15-13=2$.", working: "2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the residual.", working: "2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$x=100$ is far outside the data range — extrapolation assumes the linear trend continues.", working: "\\text{extrapolation}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 11 (b) $x=7.5$ (c) 2 (d) extrapolation beyond data range is unreliable",
            commonErrors: ["In (b), forgetting to subtract 5 before dividing by 2."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 for (d).",
          },
        },
        {
          id: "mypme4-u3-statsx-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Data has $Q_1=15$ and $Q_3=35$; a regression line is $y=-x+20$.",
          parts: [
            { label: "a", prompt: "Find the interquartile range.", marks: 2 },
            { label: "b", prompt: "Explain why the IQR is more robust than the range for this data.", marks: 2 },
            { label: "c", prompt: "Find the predicted $y$ when $x=8$.", marks: 2 },
            { label: "d", prompt: "Find the residual for the data point $(8,14)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "IQR", statement: "$IQR=Q_3-Q_1=35-15=20$." },
              { kind: "formula", name: "Residual", statement: "$y_{\\text{actual}}-y_{\\text{predicted}}$." },
            ],
            steps: [
              { part: "a", reasoning: "$35-15=20$.", working: "20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the IQR.", working: "20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "IQR uses only the middle 50%, so extreme values/outliers don't affect it.", working: "\\text{robust}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Explain clearly.", working: "\\text{middle 50\\%}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$y=-8+20=12$.", working: "12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the prediction.", working: "12", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Predicted $y=12$; residual $=14-12=2$.", working: "2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the residual.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20 (b) IQR ignores extreme values (c) 12 (d) 2",
            commonErrors: ["In (d), computing $12-14=-2$ — residual is actual minus predicted."],
            examinerNote: "M1 A1 for (a), R1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u3-statsx-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A regression line for a scatter graph has positive gradient. What does this tell you about the relationship between the variables?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As $x$ increases, $y$ tends to increase" },
              { id: "b", text: "As $x$ increases, $y$ tends to decrease" },
              { id: "c", text: "There is no relationship" },
              { id: "d", text: "$y$ is constant" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Correlation", statement: "Positive gradient → positive correlation." },
            ],
            steps: [
              { reasoning: "Positive slope means $y$ increases with $x$ on average.", working: "\\text{positive}", marks: 1, markCode: "M" },
              { reasoning: "State the interpretation.", working: "\\text{increases}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct option.", working: "\\text{positive correlation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** As $x$ increases, $y$ tends to increase",
            commonErrors: ["Confusing positive gradient with negative correlation."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypme4-u3-probext",
      title: "Probability and expected value",
      skill: "Calculate probabilities of combined events, use conditional probability, and compute expected values.",
      lesson: {
        sections: [
          {
            heading: "Combined events",
            body: "For independent events, multiply probabilities. For mutually exclusive events, add. For events that aren't independent, use conditional probability: $P(A|B)=\\frac{P(A\\text{ and }B)}{P(B)}$.",
          },
          {
            heading: "Conditional probability",
            body: "**Conditional probability** is the probability of $A$ given $B$ has occurred. Example: in a class, 60% study maths, 40% study physics, 25% study both. $P(\\text{maths}|\\text{physics})=\\frac{0.25}{0.40}=0.625$.",
          },
          {
            heading: "Expected value",
            body: "$E=\\sum(\\text{outcome}\\times\\text{probability})$. For a raffle: ticket costs 2, prizes are 10 (prob 0.1), 5 (prob 0.2), 0 (prob 0.7): $E=10(0.1)+5(0.2)+0(0.7)-2=1+1+0-2=0$ — break-even.",
          },
        ],
        keyFormulas: [
          { name: "Independent", statement: "$P(A\\text{ and }B)=P(A)P(B)$" },
          { name: "Conditional", statement: "$P(A|B)=\\frac{P(A\\text{ and }B)}{P(B)}$" },
          { name: "Expected value", statement: "$E=\\sum x_ip_i$" },
        ],
        workedExample: {
          problem: "A game pays 4 with probability 0.25, 2 with probability 0.5, and 0 otherwise. Find the expected payout.",
          solution: "$E=4(0.25)+2(0.5)+0(0.25)=1+1+0=2$.",
        },
      },
      questions: [
        {
          id: "mypme4-u3-probx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two independent events have probabilities 0.3 and 0.4. What is $P(A\\text{ and }B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.12" },
              { id: "b", text: "0.7" },
              { id: "c", text: "0.12%" },
              { id: "d", text: "0.34" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent", statement: "Multiply probabilities." },
            ],
            steps: [
              { reasoning: "$0.3\\times0.4=0.12$.", working: "0.12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 0.12",
            commonErrors: ["Adding probabilities."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-probx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag has 4 red, 3 blue, 2 green marbles. One is drawn. Find $P(\\text{not red})$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5}{9}$" },
              { id: "b", text: "$\\frac{4}{9}$" },
              { id: "c", text: "$\\frac{3}{9}$" },
              { id: "d", text: "$\\frac{2}{9}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complement", statement: "$P(\\text{not red})=1-P(\\text{red})=1-\\frac{4}{9}=\\frac{5}{9}$." },
            ],
            steps: [
              { reasoning: "Not red = blue + green = 5 marbles; total 9.", working: "\\frac{5}{9}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "\\frac{5}{9}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5}{9}$",
            commonErrors: ["Using only blue or only green."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-probx-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a class, 30% play football, 25% play basketball, and 10% play both. Find $P(\\text{football}|\\text{basketball})$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{10}{25}=0.4$" },
              { id: "b", text: "$\\frac{10}{30}=0.333$" },
              { id: "c", text: "$0.1$" },
              { id: "d", text: "$\\frac{25}{30}=0.833$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability", statement: "$P(A|B)=\\frac{P(A\\text{ and }B)}{P(B)}$." },
            ],
            steps: [
              { reasoning: "$P(F|B)=\\frac{P(F\\text{ and }B)}{P(B)}=\\frac{0.10}{0.25}=0.4$.", working: "0.4", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "0.4", marks: 1, markCode: "M" },
              { reasoning: "Confirm as fraction.", working: "\\frac{10}{25}=\\frac{2}{5}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.4$ or $\\frac{2}{5}$",
            commonErrors: ["Dividing by the wrong probability."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-probx-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A charity raffle sells tickets at 3 each. Prizes: 1st = 20 (prob 0.02), 2nd = 10 (prob 0.05), 3rd = 5 (prob 0.13), no prize (prob 0.80).",
          parts: [
            { label: "a", prompt: "Calculate the expected prize value per ticket.", marks: 3 },
            { label: "b", prompt: "Calculate the expected net gain or loss per ticket.", marks: 2 },
            { label: "c", prompt: "Is the raffle fair? Justify.", marks: 1 },
            { label: "d", prompt: "If the charity wants expected profit of 1 per ticket, what should the ticket price be?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$E=\\sum(\\text{prize}\\times\\text{probability})$." },
            ],
            steps: [
              { part: "a", reasoning: "$E=20(0.02)+10(0.05)+5(0.13)+0(0.80)=0.4+0.5+0.65+0=1.55$.", working: "1.55", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply each prize by probability.", working: "0.4+0.5+0.65", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State expected prize value.", working: "1.55", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Net = prize − cost = $1.55-3=-1.45$ per ticket.", working: "-1.45", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State net loss.", working: "-1.45", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Not fair — expected loss of 1.45 per ticket.", working: "\\text{not fair}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Need $E(\\text{prize})-\\text{price}=1 \\Rightarrow 1.55-\\text{price}=1 \\Rightarrow$ price $=0.55$.", working: "0.55", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the price.", working: "0.55\\text{ per ticket}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1.55 (b) -1.45 (c) not fair (d) 0.55 per ticket",
            commonErrors: ["Forgetting to subtract ticket cost."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), R1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u3-probx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Events $A$ and $B$ are independent with $P(A)=0.5$ and $P(B)=0.2$. Find $P(A \\cap B)$.",
          response: { type: "numeric", parts: [{ label: "$P(A \\cap B)$", answer: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent events", statement: "For independent events, $P(A\\cap B)=P(A)\\times P(B)$." },
            ],
            steps: [
              { reasoning: "$0.5\\times0.2=0.1$.", working: "0.1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$0.1$",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "mypme4-u3-probx-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag contains 3 red and 5 blue balls. One ball is drawn at random. Find the probability it is not red.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.625 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complementary probability", statement: "$P(\\text{not red})=\\frac{5}{8}=0.625$." },
            ],
            steps: [
              { reasoning: "$\\frac{5}{8}=0.625$.", working: "0.625", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$0.625$",
            commonErrors: ["Giving $\\frac{3}{8}$ for red instead."],
          },
        },
        {
          id: "mypme4-u3-probx-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Events $A$ and $B$ are mutually exclusive with $P(A)=0.3$ and $P(B)=0.4$. Find $P(A \\cup B)$.",
          response: { type: "numeric", parts: [{ label: "$P(A \\cup B)$", answer: 0.7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mutually exclusive", statement: "$P(A\\cup B)=P(A)+P(B)=0.3+0.4=0.7$." },
            ],
            steps: [
              { reasoning: "$0.3+0.4=0.7$.", working: "0.7", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "0.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.7$",
            commonErrors: ["Multiplying probabilities."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-probx-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A game pays 10 with probability 0.1, 5 with probability 0.3, and 0 otherwise. Calculate the expected payout.",
          response: { type: "numeric", parts: [{ label: "Expected payout", answer: 2.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$E=\\sum(\\text{payout}\\times\\text{probability})=10(0.1)+5(0.3)+0(0.6)$." },
            ],
            steps: [
              { reasoning: "$1+1.5=2.5$.", working: "2.5", marks: 1, markCode: "M" },
              { reasoning: "State the expected value.", working: "2.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.5$",
            commonErrors: ["Forgetting the zero payout term or using wrong probabilities."],
          },
        },
        {
          id: "mypme4-u3-probx-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the formula for conditional probability $P(A \\mid B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}$" },
              { id: "b", text: "$P(A\\mid B)=P(A)\\times P(B)$" },
              { id: "c", text: "$P(A\\mid B)=\\dfrac{P(B)}{P(A\\cap B)}$" },
              { id: "d", text: "$P(A\\mid B)=P(A)+P(B)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability", statement: "$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$." },
            ],
            steps: [
              { reasoning: "Conditional probability divides by the condition's probability.", working: "\\frac{P(A\\cap B)}{P(B)}", marks: 1, markCode: "M" },
              { reasoning: "State the formula.", working: "P(A\\mid B)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$",
            commonErrors: ["Inverting the fraction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-probx-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A fair die is rolled. Find the probability that the result is even OR greater than 4.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.667, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(E\\cup G)=P(E)+P(G)-P(E\\cap G)=\\frac{3}{6}+\\frac{2}{6}-\\frac{1}{6}=\\frac{4}{6}$." },
            ],
            steps: [
              { reasoning: "Even: 2,4,6; $>4$: 5,6; overlap: 6 → $4/6\\approx0.667$.", working: "0.667", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "0.667", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{3}\\approx0.667$",
            commonErrors: ["Forgetting to subtract the overlap (6 is both even and >4)."],
          },
        },
        {
          id: "mypme4-u3-probx-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "$P(A\\cap B)=0.2$ and $P(B)=0.5$. Find $P(A \\mid B)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.4" },
              { id: "b", text: "0.1" },
              { id: "c", text: "0.25" },
              { id: "d", text: "0.7" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability", statement: "$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}=\\frac{0.2}{0.5}=0.4$." },
            ],
            steps: [
              { reasoning: "Substitute: $\\frac{0.2}{0.5}$.", working: "0.2/0.5", marks: 1, markCode: "M" },
              { reasoning: "Compute: $0.4$.", working: "0.4", marks: 1, markCode: "M" },
              { reasoning: "Select the correct option.", working: "0.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.4$",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-probx-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A game pays 12 with probability $\\frac{1}{6}$, 3 with probability $\\frac{1}{3}$, and 0 otherwise. Calculate the expected payout.",
          response: { type: "numeric", parts: [{ label: "Expected payout", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$E=12(\\frac{1}{6})+3(\\frac{1}{3})+0(\\frac{1}{2})=2+1=3$." },
            ],
            steps: [
              { reasoning: "$12\\times\\frac{1}{6}=2$; $3\\times\\frac{1}{3}=1$.", working: "2+1", marks: 1, markCode: "M" },
              { reasoning: "Sum: $2+1=3$.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "State the expected value.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Forgetting probabilities sum to 1 check: $\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{2}$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-probx-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "For events $A$ and $B$ with $P(A)=0.3$ and $P(B)=0.4$, the events are independent.",
          parts: [
            { label: "a", prompt: "Find $P(A \\cup B)$.", marks: 2 },
            { label: "b", prompt: "Find $P(A \\cap B)$.", marks: 2 },
            { label: "c", prompt: "If $P(A \\cap B)=0.12$, find $P(A \\mid B)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent events", statement: "$P(A\\cap B)=P(A)P(B)$; $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$." },
              { kind: "formula", name: "Conditional probability", statement: "$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$." },
            ],
            steps: [
              { part: "a", reasoning: "$P(A\\cap B)=0.3\\times0.4=0.12$; $P(A\\cup B)=0.3+0.4-0.12=0.58$.", working: "0.58", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the union probability.", working: "0.58", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(A\\cap B)=0.3\\times0.4=0.12$.", working: "0.12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the intersection probability.", working: "0.12", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(A\\mid B)=\\frac{0.12}{0.4}=0.3$.", working: "0.3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the conditional probability.", working: "0.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.58 (b) 0.12 (c) 0.3",
            commonErrors: ["In (a), forgetting to subtract the intersection."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypme4-u3-probx-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A raffle ticket costs 2. Prizes: 20 with probability 0.02, 8 with probability 0.08, and nothing otherwise.",
          parts: [
            { label: "a", prompt: "Calculate the expected prize value.", marks: 3 },
            { label: "b", prompt: "Calculate the expected net gain or loss per ticket.", marks: 2 },
            { label: "c", prompt: "What ticket price would make the raffle fair (expected profit zero)?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$E=\\sum(\\text{prize}\\times\\text{probability})$." },
            ],
            steps: [
              { part: "a", reasoning: "$E=20(0.02)+8(0.08)+0(0.90)=0.4+0.64=1.04$.", working: "1.04", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply each prize by its probability.", working: "0.4+0.64", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the expected value.", working: "1.04", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Net $=1.04-2=-0.96$ per ticket.", working: "-0.96", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the net loss.", working: "-0.96", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fair means $E(\\text{prize})=\\text{price}$, so price $=1.04$.", working: "1.04", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the price.", working: "1.04\\text{ per ticket}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1.04 (b) -0.96 (c) 1.04 per ticket",
            commonErrors: ["In (c), setting price to expected net rather than expected prize."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u3-probx-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two fair dice are rolled. What is the probability that the sum is 7?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{6}$" },
              { id: "b", text: "$\\frac{1}{12}$" },
              { id: "c", text: "$\\frac{1}{36}$" },
              { id: "d", text: "$\\frac{7}{36}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sample space", statement: "36 outcomes; sum 7 from (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6 outcomes." },
            ],
            steps: [
              { reasoning: "Count favourable outcomes: 6.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{6}{36}=\\frac{1}{6}$.", working: "1/6", marks: 1, markCode: "M" },
              { reasoning: "Select the correct option.", working: "\\frac{1}{6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{6}$",
            commonErrors: ["Dividing by 12 instead of 36."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-probx-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A game pays 5 with probability 0.2, 2 with probability 0.5, and -1 with probability 0.3. Calculate the expected value.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.7" },
              { id: "b", text: "1.0" },
              { id: "c", text: "2.7" },
              { id: "d", text: "0.7" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$E=5(0.2)+2(0.5)+(-1)(0.3)=1+1-0.3=1.7$." },
            ],
            steps: [
              { reasoning: "$1+1-0.3=1.7$.", working: "1.7", marks: 1, markCode: "M" },
              { reasoning: "Check probabilities sum to 1: $0.2+0.5+0.3=1$. ✓", working: "\\text{sum}=1", marks: 1, markCode: "M" },
              { reasoning: "Select the correct option.", working: "1.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.7$",
            commonErrors: ["Forgetting the negative payout contributes -0.3."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
