import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "aisl-u2-lesson-2-1",
  code: "2-1",
  title: "Linear Models and Function Concepts",
  goal: "I CAN build linear and piecewise linear models, and use domain, range, inverse functions and technology to analyse graphs.",
  standards: ["SL 2.1", "SL 2.2", "SL 2.3", "SL 2.4", "SL 2.5"],
  vocabulary: [
    { term: "Gradient", definition: "The rate of change of a line, $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$." },
    { term: "Linear model", definition: "A function $f(x) = mx + c$ where $m$ is the constant rate of change and $c$ is the starting value." },
    { term: "Piecewise function", definition: "A function defined by different rules on different intervals of its domain." },
    { term: "Domain", definition: "The set of all input values $x$ for which a function is defined." },
    { term: "Range", definition: "The set of all output values $f(x)$ the function produces." },
    { term: "Inverse function", definition: "The function $f^{-1}$ that reverses $f$, so $f^{-1}(f(x)) = x$; its graph is the reflection of $f$ in the line $y = x$." },
  ],
  concepts: [
    {
      id: "aisl-u2-linear-models",
      title: "Linear and piecewise linear models",
      skill: "Form and interpret linear and piecewise linear models, including gradient and intercept in context.",
      lesson: {
        sections: [
          {
            heading: "Linear models",
            body: "A linear model $y = mx + c$ describes a quantity that changes at a constant rate. The gradient $m$ is the change in $y$ per unit increase in $x$, and the $y$-intercept $c$ is the value when $x = 0$. For example, a taxi charges a fixed fee of $\\$4$ plus $\\$2.50$ per km: $C = 2.5d + 4$. Always include units when interpreting $m$ and $c$.",
          },
          {
            heading: "Finding the equation",
            body: "Given two points, find $m = \\frac{y_2 - y_1}{x_2 - x_1}$, then use $y - y_1 = m(x - x_1)$. Parallel lines have equal gradients; perpendicular lines have $m_1 m_2 = -1$. Your GDC can also find the equation of a line through data points.",
          },
          {
            heading: "Piecewise models",
            body: "Real pricing and tax situations change rule at certain values. A piecewise function uses a different formula on each interval. Check which interval the input lies in before substituting, and check the pieces meet at the boundary if the model should be continuous.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$" },
          { name: "Point-gradient form", statement: "$y - y_1 = m(x - x_1)$" },
        ],
        workedExample: {
          problem: "A plumber charges $\\$40$ plus $\\$30$ per hour. Write a model for the cost $C$ after $h$ hours and find the cost of a 3.5 hour job.",
          solution: "$C = 30h + 40$. For $h = 3.5$: $C = 30(3.5) + 40 = 145$, so the cost is $\\$145$.",
        },
      },
      questions: [
        {
          id: "aisl-u2-linear-models-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "A gym charges a joining fee of $\\$30$ and $\\$25$ per month. Which function gives the total cost $C$ after $m$ months?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C = 25m + 30$" },
              { id: "b", text: "$C = 30m + 25$" },
              { id: "c", text: "$C = 55m$" },
              { id: "d", text: "$C = 25m - 30$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Linear model", statement: "$y = mx + c$, with $m$ the rate per unit and $c$ the fixed starting amount." },
            ],
            steps: [
              { reasoning: "The monthly charge is the gradient $25$ and the joining fee is the intercept $30$.", working: "C = 25m + 30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $C = 25m + 30$",
            commonErrors: ["Swapping the gradient and intercept.", "Adding the two amounts as a single rate."],
          },
        },
        {
          id: "aisl-u2-linear-models-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A candle is $24$ cm tall when lit and burns down at a constant rate. After 3 hours it is $18$ cm tall. Find its height after 7 hours, in cm.",
          response: { type: "numeric", parts: [{ label: "Height after 7 hours (cm)", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear model", statement: "$h = mt + c$ with $m = \\frac{\\Delta h}{\\Delta t}$." },
            ],
            steps: [
              { reasoning: "Find the gradient from $(0, 24)$ and $(3, 18)$.", working: "m = \\frac{18 - 24}{3 - 0} = -2", marks: 1, markCode: "M" },
              { reasoning: "Write the model using the initial height as intercept.", working: "h = -2t + 24", marks: 1, markCode: "A" },
              { reasoning: "Substitute $t = 7$.", working: "h = -14 + 24 = 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ cm",
            commonErrors: ["Using a positive gradient.", "Forgetting the 24 cm starting height."],
          },
        },
        {
          id: "aisl-u2-linear-models-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A mobile phone plan charges $\\$0.12$ per minute for the first $100$ minutes in a month and $\\$0.08$ per minute for every minute after the first $100$. Find the total charge, in dollars, for a month with $250$ minutes of calls.",
          response: { type: "numeric", parts: [{ label: "Charge ($\\$$)", answer: 24, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Piecewise function", statement: "Use the rule that applies to each interval of the input." },
            ],
            steps: [
              { reasoning: "Cost of the first 100 minutes.", working: "100 \\times 0.12 = 12", marks: 1, markCode: "M" },
              { reasoning: "Number of minutes at the lower rate.", working: "250 - 100 = 150", marks: 1, markCode: "M" },
              { reasoning: "Cost of the remaining minutes.", working: "150 \\times 0.08 = 12", marks: 1, markCode: "A" },
              { reasoning: "Add the two costs.", working: "12 + 12 = 24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$24.00$",
            commonErrors: ["Charging all 250 minutes at $\\$0.08$.", "Charging 150 minutes at $\\$0.12$."],
          },
        },
        {
          id: "aisl-u2-linear-models-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A courier company models the delivery cost $C$ dollars for a parcel of mass $m$ kg by $$C(m) = \\begin{cases} 5 + 2m, & 0 < m \\le 10 \\\\ 25 + 1.5(m - 10), & m > 10 \\end{cases}$$",
          parts: [
            { label: "a", prompt: "Find the cost of a parcel of mass $4$ kg.", marks: 1 },
            { label: "b", prompt: "Find the cost of a parcel of mass $18$ kg.", marks: 2 },
            { label: "c", prompt: "Show that the cost function is continuous at $m = 10$.", marks: 2 },
            { label: "d", prompt: "A parcel costs $\\$40$. Find its mass.", marks: 2 },
            { label: "e", prompt: "Interpret the value $1.5$ in the second rule.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Piecewise function", statement: "Choose the rule from the interval containing the input." },
              { kind: "definition", name: "Continuity", statement: "A piecewise function is continuous at a boundary if both rules give the same value there." },
            ],
            steps: [
              { part: "a", reasoning: "$4 \\le 10$ so use the first rule.", working: "C(4) = 5 + 2(4) = 13", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$18 > 10$ so use the second rule.", working: "C(18) = 25 + 1.5(8)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "C(18) = 37", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate the first rule at $m = 10$.", working: "5 + 2(10) = 25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate the second rule at $m = 10$; the values agree, so the function is continuous (AG).", working: "25 + 1.5(0) = 25", marks: 1, markCode: "R" },
              { part: "d", reasoning: "$40 > 25$, so the parcel is over $10$ kg and the second rule applies.", working: "25 + 1.5(m - 10) = 40", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve.", working: "1.5(m - 10) = 15 \\Rightarrow m = 20", marks: 1, markCode: "A" },
              { part: "e", reasoning: "It is the gradient of the second rule: the cost rises by $\\$1.50$ for each extra kilogram above $10$ kg.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\$13$. (b) $\\$37$. (c) Both rules give $25$ at $m = 10$. (d) $20$ kg. (e) $\\$1.50$ per kg above $10$ kg.",
            commonErrors: ["Using the first rule for all masses.", "Substituting $m$ rather than $m - 10$ in the second rule."],
          },
        },
        {
          id: "aisl-u2-linear-models-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A straight line passes through the points $(2, 9)$ and $(6, 17)$. Which equation describes the line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = 2x + 5$" },
              { id: "b", text: "$y = 4x + 1$" },
              { id: "c", text: "$y = 2x - 5$" },
              { id: "d", text: "$y = -2x + 13$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$" },
              { kind: "formula", name: "Point-gradient form", statement: "$y - y_1 = m(x - x_1)$" },
            ],
            steps: [
              { reasoning: "Find the gradient from the two points.", working: "m = \\frac{17 - 9}{6 - 2} = 2", marks: 1, markCode: "M" },
              { reasoning: "Use $y - 9 = 2(x - 2)$ and simplify.", working: "y = 2x + 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y = 2x + 5$",
            commonErrors: ["Dividing by $x_2 - x_1$ in the wrong order.", "Using the $y$-intercept of one point as $c$."],
          },
        },
        {
          id: "aisl-u2-linear-models-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f$ is linear and is defined by $f(x) = -4x + c$, where $f(3) = 5$. What is the value of $f(7)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-11$" },
              { id: "b", text: "$11$" },
              { id: "c", text: "$-9$" },
              { id: "d", text: "$23$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear model", statement: "$f(x) = mx + c$; use a known value to find $c$." },
            ],
            steps: [
              { reasoning: "Substitute $x = 3$ and $f(3) = 5$ to find $c$.", working: "5 = -12 + c \\Rightarrow c = 17", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $f(7)$.", working: "f(7) = -28 + 17 = -11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f(7) = -11$",
            commonErrors: ["Forgetting to find $c$ first.", "Using $+4$ as the gradient."],
          },
        },
        {
          id: "aisl-u2-linear-models-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Line $L_1$ has gradient $\\frac{3}{4}$. What is the gradient of a line $L_2$ perpendicular to $L_1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac{4}{3}$" },
              { id: "b", text: "$\\frac{3}{4}$" },
              { id: "c", text: "$-\\frac{3}{4}$" },
              { id: "d", text: "$\\frac{4}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Perpendicular gradients", statement: "For perpendicular lines, $m_1 m_2 = -1$." },
            ],
            steps: [
              { reasoning: "Apply $m_1 m_2 = -1$.", working: "m_2 = -\\frac{1}{3/4}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "m_2 = -\\frac{4}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $m_2 = -\\frac{4}{3}$",
            commonErrors: ["Reciprocating without changing the sign.", "Only changing the sign without reciprocating."],
          },
        },
        {
          id: "aisl-u2-linear-models-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A taxi charges a fixed fee of $\\$5$ plus $\\$3.20$ per km. The cost $C$ dollars for a journey of $d$ km is modelled by $C = 3.2d + 5$. What does the $5$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The fixed fee charged at the start of every journey" },
              { id: "b", text: "The cost per kilometre travelled" },
              { id: "c", text: "The cost of a 5 km journey" },
              { id: "d", text: "The gradient of the cost function" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpretation of parameters", statement: "In $y = mx + c$, $m$ is the rate of change and $c$ is the value when $x = 0$." },
            ],
            steps: [
              { reasoning: "The constant term $c$ is the $y$-intercept.", working: "c = 5", marks: 1, markCode: "M" },
              { reasoning: "In context this is the cost when $d = 0$, the fixed fee.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The fixed fee",
            commonErrors: ["Confusing the intercept with the gradient.", "Interpreting $5$ as a per-km rate."],
          },
        },
        {
          id: "aisl-u2-linear-models-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A water tank is being emptied at a constant rate. The volume of water $V$ litres after $t$ minutes is modelled by $V = 480 - 12t$. What does the gradient $-12$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The volume decreases by 12 litres each minute" },
              { id: "b", text: "The tank is empty after 12 minutes" },
              { id: "c", text: "The initial volume is 12 litres" },
              { id: "d", text: "The tank loses 480 litres per minute" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpretation of parameters", statement: "The gradient is the rate of change of $V$ with respect to $t$." },
            ],
            steps: [
              { reasoning: "The gradient gives the change in volume per minute.", working: "m = -12", marks: 1, markCode: "M" },
              { reasoning: "The negative sign shows the volume is decreasing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The volume decreases by 12 litres each minute",
            commonErrors: ["Ignoring the negative sign.", "Confusing the gradient with the intercept 480."],
          },
        },
        {
          id: "aisl-u2-linear-models-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f$ is defined by $$f(x) = \\begin{cases} 2x + 1, & x < 3 \\\\ 10 - x, & x \\ge 3 \\end{cases}$$ Find the value of $f(5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$11$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$-5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Piecewise function", statement: "Choose the rule from the interval containing the input." },
            ],
            steps: [
              { reasoning: "$5 \\ge 3$, so the second rule applies.", working: "f(5) = 10 - 5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f(5) = 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f(5) = 5$",
            commonErrors: ["Using the first rule for all inputs, giving 11.", "Using $x = 5$ in $2x + 1$ regardless of the interval."],
          },
        },
        {
          id: "aisl-u2-linear-models-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Find the value of $y$ on the line through the points $(1, 4)$ and $(5, 12)$ when $x = 9$.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$" },
            ],
            steps: [
              { reasoning: "Find the gradient of the line.", working: "m = \\frac{12 - 4}{5 - 1} = 2", marks: 1, markCode: "M" },
              { reasoning: "Write the equation using $(1, 4)$.", working: "y - 4 = 2(x - 1) \\Rightarrow y = 2x + 2", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 9$.", working: "y = 2(9) + 2 = 20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 20$",
            commonErrors: ["Finding the equation but not substituting $x = 9$.", "Using the wrong pair of coordinates."],
          },
        },
        {
          id: "aisl-u2-linear-models-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A car is bought for $\\$24\\,000$ and its value decreases linearly to $\\$15\\,000$ after 3 years. Find the value of the car, in dollars, after 5 years.",
          response: { type: "numeric", parts: [{ label: "Value ($\\$$)", answer: 9000 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear model", statement: "$V = mt + c$ with $c$ the purchase price." },
            ],
            steps: [
              { reasoning: "Find the annual rate of depreciation.", working: "m = \\frac{15000 - 24000}{3} = -3000", marks: 1, markCode: "M" },
              { reasoning: "Write the model.", working: "V = 24000 - 3000t", marks: 1, markCode: "M" },
              { reasoning: "Substitute $t = 5$.", working: "V = 24000 - 15000 = 9000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$9000$",
            commonErrors: ["Using a positive gradient.", "Forgetting the initial value of $\\$24\\,000$."],
          },
        },
        {
          id: "aisl-u2-linear-models-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The cost $C$ dollars of hiring a crane for $h$ hours is modelled by $$C(h) = \\begin{cases} 25h + 10, & 0 \\le h < 4 \\\\ 110 + 18(h - 4), & h \\ge 4 \\end{cases}$$ Find the cost for a 2 hour job and for a 7 hour job.",
          response: {
            type: "numeric",
            parts: [
              { label: "Cost for 2 hours ($\\$$)", answer: 60 },
              { label: "Cost for 7 hours ($\\$$)", answer: 164 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Piecewise function", statement: "Choose the rule from the interval containing the input." },
            ],
            steps: [
              { reasoning: "$2 < 4$, so use the first rule.", working: "C(2) = 25(2) + 10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "C(2) = 60", marks: 1, markCode: "A" },
              { reasoning: "$7 \\ge 4$, so use the second rule.", working: "C(7) = 110 + 18(7 - 4)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "C(7) = 110 + 54 = 164", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 hours: $\\$60$; 7 hours: $\\$164$",
            commonErrors: ["Using the first rule for the 7 hour job.", "Substituting $h$ rather than $h - 4$ in the second rule."],
          },
        },
        {
          id: "aisl-u2-linear-models-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "The function $g$ is defined by $$g(x) = \\begin{cases} 3x + 2, & -2 \\le x < 2 \\\\ 10 - x, & 2 \\le x \\le 6 \\end{cases}$$",
          parts: [
            { label: "a", prompt: "Find $g(1)$.", marks: 1 },
            { label: "b", prompt: "Find $g(5)$.", marks: 1 },
            { label: "c", prompt: "Show that $g$ is continuous at $x = 2$.", marks: 2 },
            { label: "d", prompt: "Solve $g(x) = 7$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Piecewise function", statement: "Choose the rule from the interval containing the input." },
              { kind: "definition", name: "Continuity", statement: "A piecewise function is continuous at a boundary if both rules give the same value there." },
            ],
            steps: [
              { part: "a", reasoning: "$1 < 2$, so the first rule applies.", working: "g(1) = 3(1) + 2 = 5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$5 \\ge 2$, so the second rule applies.", working: "g(5) = 10 - 5 = 5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate the first rule at $x = 2$.", working: "3(2) + 2 = 8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate the second rule at $x = 2$; the values agree, so the function is continuous (AG).", working: "10 - 2 = 8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "On the first interval, solve $3x + 2 = 7$.", working: "x = \\frac{5}{3}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "On the second interval, solve $10 - x = 7$.", working: "x = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5$. (b) $5$. (c) Both rules give $8$ at $x = 2$. (d) $x = \\frac{5}{3}$ or $x = 3$.",
            commonErrors: ["Forgetting to check that each solution lies in the correct interval.", "Using only one of the two rules in (d)."],
          },
        },
        {
          id: "aisl-u2-linear-models-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A water company charges for water use according to $$C(w) = \\begin{cases} 40 + 2w, & 0 < w \\le 50 \\\\ 140 + 1.2(w - 50), & w > 50 \\end{cases}$$ where $w$ is the volume of water used in kilolitres and $C$ is the bill in dollars.",
          parts: [
            { label: "a", prompt: "Interpret the numbers $40$ and $2$ in the first rule.", marks: 2 },
            { label: "b", prompt: "Calculate the bill for a household using $30$ kL.", marks: 1 },
            { label: "c", prompt: "Calculate the bill for a household using $80$ kL.", marks: 2 },
            { label: "d", prompt: "Show that the two rules give the same bill at $w = 50$.", marks: 2 },
            { label: "e", prompt: "A bill is $\\$200$. Find the volume of water used.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Piecewise function", statement: "Choose the rule from the interval containing the input." },
              { kind: "definition", name: "Continuity", statement: "A piecewise function is continuous at a boundary if both rules give the same value there." },
            ],
            steps: [
              { part: "a", reasoning: "$40$ is the fixed charge paid regardless of usage.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "$2$ is the charge per kilolitre for usage up to $50$ kL.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$30 \\le 50$, so use the first rule.", working: "C(30) = 40 + 2(30) = 100", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$80 > 50$, so use the second rule.", working: "C(80) = 140 + 1.2(80 - 50)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "C(80) = 140 + 36 = 176", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluate the first rule at $w = 50$.", working: "40 + 2(50) = 140", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate the second rule at $w = 50$; the values agree, so the model is continuous (AG).", working: "140 + 1.2(0) = 140", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$200 > 140$, so the second rule applies.", working: "140 + 1.2(w - 50) = 200", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Solve for $w$.", working: "1.2(w - 50) = 60 \\Rightarrow w = 100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$40$ fixed charge; $\\$2$ per kL. (b) $\\$100$. (c) $\\$176$. (d) Both rules give $140$. (e) $100$ kL.",
            commonErrors: ["Using the first rule for all values of $w$.", "Substituting $w$ rather than $w - 50$ in the second rule."],
          },
        },
        {
          id: "aisl-u2-linear-models-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two mobile phone plans are compared. Plan A costs $\\$10$ per month plus $\\$0.05$ per minute of calls. Plan B costs a flat $\\$25$ per month. Find the number of minutes of calls in a month for which the two plans cost the same.",
          response: { type: "numeric", parts: [{ label: "Minutes", answer: 300 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Linear model", statement: "Equate the two cost expressions and solve for the unknown." },
            ],
            steps: [
              { reasoning: "The costs are equal when the expressions agree.", working: "10 + 0.05m = 25", marks: 1, markCode: "M" },
              { reasoning: "Rearrange to isolate $m$.", working: "0.05m = 15", marks: 1, markCode: "M" },
              { reasoning: "Divide by $0.05$.", working: "m = \\frac{15}{0.05}", marks: 1, markCode: "A" },
              { reasoning: "Evaluate.", working: "m = 300", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300$ minutes",
            commonErrors: ["Adding $10$ to $25$ instead of subtracting.", "Dividing $15$ by $10$ instead of $0.05$."],
          },
        },
      ],
    },
    {
      id: "aisl-u2-function-concepts",
      title: "Domain, range, inverse and graphs with technology",
      skill: "Find domain and range in context, find and interpret inverse functions, and use a GDC to graph functions.",
      lesson: {
        sections: [
          {
            heading: "Domain and range in context",
            body: "The domain of a model is the set of sensible inputs and the range is the set of outputs they produce. If a tank fills for $0 \\le t \\le 20$ minutes, the domain is $0 \\le t \\le 20$, and the range is found from the smallest and largest output. Write domain and range using inequalities.",
          },
          {
            heading: "Inverse functions",
            body: "To find $f^{-1}$, write $y = f(x)$, swap $x$ and $y$, then solve for $y$. The inverse reverses the roles of input and output: the domain of $f^{-1}$ is the range of $f$. The graph of $f^{-1}$ is the reflection of the graph of $f$ in $y = x$. In context, $f^{-1}$ answers the question 'what input gives this output?'",
          },
          {
            heading: "Graphs with technology",
            body: "Use your GDC to graph $y = f(x)$, find axis intercepts, intersections of two graphs, and maximum or minimum points. Choose a window that shows all key features, then record values to 3 significant figures. Solving $f(x) = g(x)$ means finding the $x$-coordinates of the intersections.",
          },
        ],
        keyFormulas: [
          { name: "Inverse function", statement: "$f^{-1}(f(x)) = x$; swap $x$ and $y$ and solve for $y$" },
          { name: "Domain and range of inverse", statement: "$\\text{Domain of } f^{-1} = \\text{Range of } f$" },
        ],
        workedExample: {
          problem: "Find $f^{-1}(x)$ for $f(x) = 2x + 3$.",
          solution: "Let $y = 2x + 3$. Swap: $x = 2y + 3$. Then $y = \\frac{x - 3}{2}$, so $f^{-1}(x) = \\frac{x-3}{2}$.",
        },
      },
      questions: [
        {
          id: "aisl-u2-function-concepts-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f$ is defined by $f(x) = 2x + 3$. Find $f^{-1}(x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{x - 3}{2}$" },
              { id: "b", text: "$\\dfrac{x}{2} - 3$" },
              { id: "c", text: "$\\dfrac{1}{2x + 3}$" },
              { id: "d", text: "$2x - 3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse function", statement: "Swap $x$ and $y$ and solve for $y$." },
            ],
            steps: [
              { reasoning: "Write $y = 2x + 3$ and swap the variables.", working: "x = 2y + 3", marks: 1, markCode: "M" },
              { reasoning: "Solve for $y$.", working: "y = \\frac{x - 3}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f^{-1}(x) = \\dfrac{x-3}{2}$",
            commonErrors: ["Confusing the inverse with the reciprocal.", "Dividing only the $x$ term by 2."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is given by $f(x) = 4x - 7$. Find the value of $f^{-1}(9)$.",
          response: { type: "numeric", parts: [{ label: "$f^{-1}(9)$", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse function", statement: "$f^{-1}(b) = a$ if and only if $f(a) = b$." },
            ],
            steps: [
              { reasoning: "$f^{-1}(9)$ is the input $x$ with $f(x) = 9$.", working: "4x - 7 = 9", marks: 1, markCode: "M" },
              { reasoning: "Add 7.", working: "4x = 16", marks: 1, markCode: "A" },
              { reasoning: "Divide by 4.", working: "x = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f^{-1}(9) = 4$",
            commonErrors: ["Evaluating $f(9) = 29$.", "Evaluating $\\frac{1}{f(9)}$."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Temperature in degrees Fahrenheit is given by $F = 1.8C + 32$, where $C$ is the temperature in degrees Celsius. Find the temperature in degrees Celsius when the temperature is $100^\\circ$F. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Temperature ($^\\circ$C)", answer: 37.8, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse function", statement: "The inverse of $F(C)$ gives $C$ in terms of $F$." },
            ],
            steps: [
              { reasoning: "Rearrange to make $C$ the subject.", working: "C = \\frac{F - 32}{1.8}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $F = 100$.", working: "C = \\frac{100 - 32}{1.8}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "C = \\frac{68}{1.8} = 37.777\\ldots", marks: 1, markCode: "A" },
              { reasoning: "Round to 3 significant figures.", working: "37.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$37.8^\\circ$C",
            commonErrors: ["Substituting $C = 100$ into the original formula.", "Dividing by $1.8$ before subtracting $32$."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A water tank initially contains $50$ litres. It is filled at a constant rate of $12$ litres per minute for $20$ minutes. The volume of water is modelled by $V(t) = 50 + 12t$, where $t$ is the time in minutes.",
          parts: [
            { label: "a", prompt: "Write down the domain of $V$.", marks: 1 },
            { label: "b", prompt: "Find the range of $V$.", marks: 2 },
            { label: "c", prompt: "Find $V^{-1}(v)$.", marks: 2 },
            { label: "d", prompt: "Hence find the time at which the tank contains $200$ litres.", marks: 1 },
            { label: "e", prompt: "State the domain of $V^{-1}$ and interpret $V^{-1}(v)$ in this context.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Domain and range", statement: "The domain is the set of valid inputs and the range is the set of resulting outputs." },
              { kind: "definition", name: "Inverse function", statement: "The domain of $f^{-1}$ is the range of $f$." },
            ],
            steps: [
              { part: "a", reasoning: "The tank fills for 20 minutes starting at time zero.", working: "0 \\le t \\le 20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$V$ is increasing, so the range runs from $V(0)$ to $V(20)$.", working: "V(0) = 50,\\quad V(20) = 50 + 240 = 290", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the range.", working: "50 \\le V \\le 290", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $v = 50 + 12t$ and solve for $t$.", working: "12t = v - 50", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by 12.", working: "V^{-1}(v) = \\frac{v - 50}{12}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $v = 200$.", working: "\\frac{200 - 50}{12} = 12.5 \\text{ minutes}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The domain of the inverse is the range of $V$.", working: "50 \\le v \\le 290", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$V^{-1}(v)$ gives the time in minutes taken for the tank to contain $v$ litres.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0 \\le t \\le 20$. (b) $50 \\le V \\le 290$. (c) $V^{-1}(v) = \\frac{v-50}{12}$. (d) $12.5$ minutes. (e) Domain $50 \\le v \\le 290$; it gives the time to reach $v$ litres.",
            commonErrors: ["Giving the range as $V \\ge 50$ with no upper limit.", "Using $V(200)$ instead of $V^{-1}(200)$."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f$ is given by $f(x) = 3x - 2$. Find $f(4)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$14$" },
              { id: "c", text: "$-10$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function evaluation", statement: "Substitute the input value for $x$ in $f(x)$." },
            ],
            steps: [
              { reasoning: "Substitute $x = 4$.", working: "f(4) = 3(4) - 2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "f(4) = 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f(4) = 10$",
            commonErrors: ["Multiplying $3 \\times 4$ as $7$.", "Subtracting before multiplying."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f(x) = 2x + 1$ is defined for $0 \\le x \\le 5$. Which of the following gives the range of $f$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1 \\le f(x) \\le 11$" },
              { id: "b", text: "$0 \\le f(x) \\le 5$" },
              { id: "c", text: "$f(x) \\ge 1$" },
              { id: "d", text: "$1 \\le f(x) \\le 5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Range", statement: "The range is the set of output values produced by the domain." },
            ],
            steps: [
              { reasoning: "$f$ is increasing, so evaluate at the endpoints of the domain.", working: "f(0) = 1, \\quad f(5) = 11", marks: 1, markCode: "M" },
              { reasoning: "The range runs between these values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1 \\le f(x) \\le 11$",
            commonErrors: ["Giving the domain instead of the range.", "Using $f(5) = 5$ instead of $11$."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find $f^{-1}(x)$ for the function $f(x) = \\frac{x}{3} + 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x - 6$" },
              { id: "b", text: "$\\frac{x}{3} - 2$" },
              { id: "c", text: "$3x + 6$" },
              { id: "d", text: "$\\frac{x - 2}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse function", statement: "Swap $x$ and $y$ and solve for $y$." },
            ],
            steps: [
              { reasoning: "Write $y = \\frac{x}{3} + 2$ and swap the variables.", working: "x = \\frac{y}{3} + 2", marks: 1, markCode: "M" },
              { reasoning: "Rearrange to make $y$ the subject.", working: "y = 3x - 6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f^{-1}(x) = 3x - 6$",
            commonErrors: ["Adding 2 instead of subtracting 2 after multiplying by 3.", "Reciprocating the function instead of inverting it."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The point $(2, 9)$ lies on the graph of $y = f(x)$. Which point must lie on the graph of $y = f^{-1}(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(9, 2)$" },
              { id: "b", text: "$(-2, -9)$" },
              { id: "c", text: "$(2, -9)$" },
              { id: "d", text: "$\\left(\\frac{1}{9}, \\frac{1}{2}\\right)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inverse graph", statement: "The graph of $f^{-1}$ is the reflection of the graph of $f$ in $y = x$, so coordinates are swapped." },
            ],
            steps: [
              { reasoning: "Points on $f^{-1}$ have their coordinates interchanged.", working: "(x, y) \\mapsto (y, x)", marks: 1, markCode: "M" },
              { reasoning: "Swap the coordinates of $(2, 9)$.", working: "(9, 2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(9, 2)$",
            commonErrors: ["Reflecting in the $x$-axis instead of $y = x$.", "Negating the coordinates."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f$ is defined by $f(x) = 5 - 2x$. Find $f^{-1}(3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$-1$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse function", statement: "$f^{-1}(b) = a$ if and only if $f(a) = b$." },
            ],
            steps: [
              { reasoning: "$f^{-1}(3)$ is the input $x$ with $f(x) = 3$.", working: "5 - 2x = 3", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "2x = 2 \\Rightarrow x = 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f^{-1}(3) = 1$",
            commonErrors: ["Evaluating $f(3) = -1$ instead.", "Evaluating $\\frac{1}{f(3)}$."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The graph of $y = f^{-1}(x)$ is obtained from the graph of $y = f(x)$ by which transformation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection in the line $y = x$" },
              { id: "b", text: "Reflection in the $x$-axis" },
              { id: "c", text: "Translation by $2$ units to the right" },
              { id: "d", text: "Rotation of $180^\\circ$ about the origin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inverse graph", statement: "The graph of $f^{-1}$ is the reflection of the graph of $f$ in the line $y = x$." },
            ],
            steps: [
              { reasoning: "Recall how the inverse reverses input and output.", working: "(x, y) \\mapsto (y, x)", marks: 1, markCode: "M" },
              { reasoning: "This coordinate swap is a reflection in $y = x$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reflection in the line $y = x$",
            commonErrors: ["Confusing the inverse graph with a reflection in an axis.", "Thinking the inverse is a rotation."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x) = (x - 2)^2 + 1$. Find $f(5)$.",
          response: { type: "numeric", parts: [{ label: "$f(5)$", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function evaluation", statement: "Substitute the input value for $x$ in $f(x)$." },
            ],
            steps: [
              { reasoning: "Substitute $x = 5$.", working: "f(5) = (5 - 2)^2 + 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the bracket and square.", working: "(3)^2 + 1 = 9 + 1", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(5) = 10$",
            commonErrors: ["Squaring before subtracting, giving $25 - 2 + 1$.", "Computing $(5-2)^2$ as $9$ but forgetting the $+1$."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For the function $f(x) = 4x + 5$, find $f^{-1}(21)$.",
          response: { type: "numeric", parts: [{ label: "$f^{-1}(21)$", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse function", statement: "$f^{-1}(b) = a$ if and only if $f(a) = b$." },
            ],
            steps: [
              { reasoning: "$f^{-1}(21)$ is the input $x$ with $f(x) = 21$.", working: "4x + 5 = 21", marks: 1, markCode: "M" },
              { reasoning: "Subtract 5.", working: "4x = 16", marks: 1, markCode: "A" },
              { reasoning: "Divide by 4.", working: "x = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f^{-1}(21) = 4$",
            commonErrors: ["Evaluating $f(21) = 89$.", "Subtracting 5 after dividing by 4."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f(x) = 3x - 6$ is defined on the domain $-2 \\le x \\le 4$. Find the minimum and maximum values of $f$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Minimum value of $f$", answer: -12 },
              { label: "Maximum value of $f$", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Monotonic function", statement: "A linear function with positive gradient is increasing, so its extreme values occur at the endpoints of the domain." },
            ],
            steps: [
              { reasoning: "Evaluate $f$ at both endpoints of the domain.", working: "f(-2) = -12, \\quad f(4) = 6", marks: 1, markCode: "M" },
              { reasoning: "State the minimum.", working: "-12", marks: 1, markCode: "A" },
              { reasoning: "State the maximum.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Minimum $-12$; maximum $6$",
            commonErrors: ["Evaluating only one endpoint.", "Swapping the minimum and maximum."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The functions $f$ and $g$ are defined by $f(x) = 3x - 7$ and $g(x) = x + 4$. Find the value of $x$ for which $f(x) = g(x)$, and hence find the value of $f(x)$ at this point.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$", answer: 5.5 },
              { label: "$f(x)$", answer: 9.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving $f(x) = g(x)$", statement: "Equate the two expressions and solve for $x$; the solution is the $x$-coordinate of the intersection." },
            ],
            steps: [
              { reasoning: "Set the two expressions equal.", working: "3x - 7 = x + 4", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "2x = 11", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "x = 5.5", marks: 1, markCode: "A" },
              { reasoning: "Substitute into $f$.", working: "f(5.5) = 3(5.5) - 7 = 9.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5.5$, $f(x) = 9.5$",
            commonErrors: ["Subtracting $x$ from only one side.", "Finding $g(5.5)$ incorrectly as $f(5.5)$."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "A cistern is being filled at a constant rate. The volume of water $V$ litres after $t$ minutes is modelled by $V(t) = 120 + 8t$, for $0 \\le t \\le 30$.",
          parts: [
            { label: "a", prompt: "Write down the domain of $V$.", marks: 1 },
            { label: "b", prompt: "Find the range of $V$.", marks: 2 },
            { label: "c", prompt: "Find an expression for $V^{-1}(v)$.", marks: 2 },
            { label: "d", prompt: "Find the time at which the cistern contains $300$ litres.", marks: 1 },
            { label: "e", prompt: "State the domain of $V^{-1}$ and interpret $V^{-1}(v)$ in this context.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Domain and range", statement: "The domain is the set of valid inputs and the range is the set of resulting outputs." },
              { kind: "definition", name: "Inverse function", statement: "The domain of $f^{-1}$ is the range of $f$." },
            ],
            steps: [
              { part: "a", reasoning: "The filling process lasts 30 minutes starting at time zero.", working: "0 \\le t \\le 30", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$V$ is increasing, so evaluate at the endpoints.", working: "V(0) = 120, \\quad V(30) = 120 + 240 = 360", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the range.", working: "120 \\le V \\le 360", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $v = 120 + 8t$ and rearrange for $t$.", working: "8t = v - 120", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by 8.", working: "V^{-1}(v) = \\frac{v - 120}{8}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $v = 300$.", working: "\\frac{300 - 120}{8} = 22.5 \\text{ minutes}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The domain of the inverse is the range of $V$.", working: "120 \\le v \\le 360", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$V^{-1}(v)$ gives the time in minutes taken for the cistern to contain $v$ litres.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0 \\le t \\le 30$. (b) $120 \\le V \\le 360$. (c) $V^{-1}(v) = \\frac{v-120}{8}$. (d) $22.5$ minutes. (e) Domain $120 \\le v \\le 360$; it gives the time to reach $v$ litres.",
            commonErrors: ["Giving the range as $V \\ge 120$ with no upper limit.", "Evaluating $V(300)$ instead of $V^{-1}(300)$."],
          },
        },
        {
          id: "aisl-u2-function-concepts-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Consider the functions $f(x) = x^2 - 2x - 3$ and $g(x) = x + 1$.",
          parts: [
            { label: "a", prompt: "Find the $x$-coordinates of the points of intersection of the graphs of $y = f(x)$ and $y = g(x)$.", marks: 3 },
            { label: "b", prompt: "Find the $y$-coordinates of these points.", marks: 1 },
            { label: "c", prompt: "Solve the inequality $f(x) > g(x)$, giving your answer as an interval or intervals.", marks: 2 },
            { label: "d", prompt: "Write down the coordinates of the vertex of the graph of $f$ and state whether it is a maximum or a minimum.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving $f(x) = g(x)$", statement: "The solutions are the $x$-coordinates of the intersections of the graphs." },
              { kind: "formula", name: "Axis of symmetry", statement: "$x = -\\frac{b}{2a}$" },
            ],
            steps: [
              { part: "a", reasoning: "Set the two expressions equal.", working: "x^2 - 2x - 3 = x + 1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Rearrange into standard form.", working: "x^2 - 3x - 4 = 0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factorise or use the GDC.", working: "(x - 4)(x + 1) = 0 \\Rightarrow x = -1,\\; 4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute each $x$-value into $g$.", working: "g(-1) = 0, \\quad g(4) = 5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$f(x) > g(x)$ when $x^2 - 3x - 4 > 0$; the parabola is positive outside its roots.", working: "(x + 1)(x - 4) > 0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the intervals.", working: "x < -1 \\text{ or } x > 4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The axis of symmetry is $x = -\\frac{b}{2a}$ with $a = 1$ and $b = -2$.", working: "x = -\\frac{-2}{2(1)} = 1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate and classify.", working: "f(1) = -4; \\text{ since } a > 0 \\text{ it is a minimum}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x = -1$ and $x = 4$. (b) $y = 0$ and $y = 5$. (c) $x < -1$ or $x > 4$. (d) $(1, -4)$, a minimum.",
            commonErrors: ["Giving the interval between the roots for (c).", "Using $x = \\frac{2}{2} = 1$ incorrectly or mis-evaluating $f(1)$."],
          },
        },
      ],
    },
  ],
};
