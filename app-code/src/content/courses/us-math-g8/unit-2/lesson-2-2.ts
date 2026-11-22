import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m8-u2-lesson-2-2",
  code: "2-2",
  title: "Functions",
  goal: "I CAN define, evaluate and compare functions, tell linear from nonlinear functions, and build and interpret linear models.",
  standards: ["8.F.A.1", "8.F.A.2", "8.F.A.3", "8.F.B.4", "8.F.B.5"],
  vocabulary: [
    { term: "Function", definition: "A rule that assigns to each input exactly one output." },
    { term: "Input and output", definition: "The input is the value you put into a function (often $x$); the output is the value the rule gives back (often $y$ or $f(x)$)." },
    { term: "Rate of change", definition: "How much the output changes per one unit change in the input. For a linear function it is the slope." },
    { term: "Initial value", definition: "The output when the input is $0$. For $y=mx+b$ it is $b$." },
    { term: "Linear function", definition: "A function whose graph is a straight line, with the form $y=mx+b$ and a constant rate of change." },
    { term: "Nonlinear function", definition: "A function whose graph is not a straight line, so its rate of change is not constant, such as $y=x^2$." },
  ],
  concepts: [
    {
      id: "m8-u2-functions-evaluate-compare",
      title: "Defining, evaluating and comparing functions",
      skill: "Decide whether a relation is a function, evaluate functions, and compare functions given in different forms.",
      lesson: {
        sections: [
          {
            heading: "What makes a function",
            body: "A relation is a **function** if every input has exactly one output. In a set of ordered pairs, no $x$-value may repeat with different $y$-values. $\\{(1,2),(2,2),(3,5)\\}$ is a function (different inputs may share an output), but $\\{(1,2),(1,3)\\}$ is not, since the input $1$ gives two outputs.",
          },
          {
            heading: "Evaluating",
            body: "To evaluate $f(a)$, replace the input with $a$ and compute, following the order of operations. If $f(x)=3x^2-2x+1$, then $f(-2)=3(-2)^2-2(-2)+1=12+4+1=17$. To find an input for a given output, set the rule equal to that output and solve.",
          },
          {
            heading: "Comparing functions in different forms",
            body: "A function may be given as an equation, a table, a graph or a verbal description. Pull out the same features from each, usually the **rate of change** and the **initial value**, then compare. For a table or two points, rate of change is $\\frac{\\Delta y}{\\Delta x}$.",
          },
        ],
        keyFormulas: [
          { name: "Function notation", statement: "$f(a)$ is the output of $f$ when the input is $a$" },
          { name: "Rate of change", statement: "$\\frac{f(x_2)-f(x_1)}{x_2-x_1}$" },
        ],
        workedExample: {
          problem: "Function $A$ is $y=5x-2$. Function $B$ is a line through $(1,4)$ and $(3,12)$. Which has the greater rate of change?",
          solution: "Function $A$: the rate of change is $5$. Function $B$: $\\frac{12-4}{3-1}=4$. Function $A$ has the greater rate of change.",
        },
      },
      questions: [
        {
          id: "m8-u2-functions-evaluate-compare-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which set of ordered pairs $(x,y)$ represents a function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\{(1,2),(2,2),(3,5)\\}$" },
              { id: "b", text: "$\\{(0,1),(0,4),(3,3)\\}$" },
              { id: "c", text: "$\\{(1,2),(1,3),(2,4)\\}$" },
              { id: "d", text: "$\\{(2,1),(3,1),(2,5)\\}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function", statement: "Each input is paired with exactly one output." },
            ],
            steps: [
              { reasoning: "In set (b) the inputs $1$, $2$, $3$ are all different, so each input has one output. Repeated outputs are allowed.", working: "\\{(1,2),(2,2),(3,5)\\}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Thinking a repeated output (the two $2$s in set b) breaks the rule; only repeated inputs with different outputs do.", "Not noticing that inputs $1$, $0$ or $2$ repeat in the other sets."],
          },
        },
        {
          id: "m8-u2-functions-evaluate-compare-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A function is defined by $f(x)=3x^2-2x+1$. Find $f(-2)$.",
          response: { type: "numeric", parts: [{ label: "$f(-2)$", answer: 17 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "$f(a)$ means substitute $x=a$ in the rule. Evaluate powers before multiplying." },
            ],
            steps: [
              { reasoning: "Substitute $-2$ for $x$, using parentheses so the square applies to the negative.", working: "3(-2)^2-2(-2)+1=3(4)+4+1", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "12+4+1=17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$17$",
            commonErrors: ["Writing $(-2)^2=-4$, which gives $-7$ instead of $17$.", "Forgetting that $-2(-2)=+4$."],
          },
        },
        {
          id: "m8-u2-functions-evaluate-compare-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Function $A$ is given by $y=5x-2$. Function $B$ is a linear function whose graph passes through $(1,4)$ and $(3,12)$. How much greater is the rate of change of the function with the greater rate of change?",
          response: { type: "numeric", parts: [{ label: "Difference in rates of change", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of change", statement: "For a linear function, rate of change is the slope $\\frac{y_2-y_1}{x_2-x_1}$, which is the coefficient of $x$ in $y=mx+b$." },
            ],
            steps: [
              { reasoning: "The rate of change of $A$ is the coefficient of $x$.", working: "5", marks: 1, markCode: "B" },
              { reasoning: "Find the slope of $B$ from its two points.", working: "\\frac{12-4}{3-1}=4", marks: 1, markCode: "M" },
              { reasoning: "Function $A$ has the greater rate. Subtract.", working: "5-4=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A$'s rate of change is greater by $1$.",
            commonErrors: ["Using the $y$-intercept $-2$ as the rate of change.", "Comparing $12$ with $5$ instead of finding the slope of $B$."],
          },
        },
        {
          id: "m8-u2-functions-evaluate-compare-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Function $f$ is given by $f(x)=-2x+9$. Function $g$ is given by the table below.\n\n| $x$ | $0$ | $1$ | $2$ | $3$ |\n|---|---|---|---|---|\n| $g(x)$ | $1$ | $4$ | $7$ | $10$ |\n\nA relation $R$ contains the ordered pairs $(2,5)$ and $(2,7)$.",
          parts: [
            { label: "a", prompt: "Find $f(4)$.", marks: 1 },
            { label: "b", prompt: "Find the value of $x$ for which $f(x)=-3$.", marks: 2 },
            { label: "c", prompt: "Find the rate of change of $g$. ($g$ is linear.)", marks: 2 },
            { label: "d", prompt: "Write the rule for $g$ as $g(x)=mx+b$ and find the value of $x$ for which $f(x)=g(x)$. Give your answer as a decimal.", marks: 3 },
            { label: "e", prompt: "Explain why $R$ is not a function.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $f(4)$", answer: 1 },
              { label: "(b) $x$ where $f(x)=-3$", answer: 6 },
              { label: "(c) Rate of change of $g$", answer: 3 },
              { label: "(d) $x$ where $f(x)=g(x)$", answer: 1.6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function", statement: "Each input has exactly one output." },
              { kind: "formula", name: "Rate of change", statement: "$\\frac{\\Delta y}{\\Delta x}$, constant for a linear function." },
              { kind: "principle", name: "Equal outputs", statement: "To find where two functions have the same output, set their rules equal and solve." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $x=4$.", working: "f(4)=-2(4)+9=1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Set the rule equal to $-3$ and subtract $9$ from both sides.", working: "-2x+9=-3 \\Rightarrow -2x=-12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by $-2$.", working: "x=6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use two rows of the table: the change in $g$ over the change in $x$.", working: "\\frac{4-1}{1-0}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate. Each step of $1$ in $x$ adds $3$ to $g$.", working: "3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The initial value is $g(0)=1$, so $g(x)=3x+1$.", working: "g(x)=3x+1", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Set $f(x)=g(x)$ and collect the $x$ terms on one side.", working: "-2x+9=3x+1 \\Rightarrow 8=5x", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide by $5$.", working: "x=\\frac{8}{5}=1.6", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The input $2$ appears twice in $R$.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "It is paired with two different outputs, $5$ and $7$, but a function must give exactly one output for each input.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $1$ (b) $6$ (c) $3$ (d) $g(x)=3x+1$, $x=1.6$ (e) the input $2$ has two different outputs.",
            commonErrors: ["Solving $-2x=-12$ as $x=-6$.", "In (d), adding $-2x$ and $3x$ incorrectly instead of moving $-2x$ to the right side."],
            examinerNote: "In (e) the explanation must refer to a single input having two outputs.",
          },
        },
      ],
    },
    {
      id: "m8-u2-linear-models",
      title: "Linear and nonlinear functions and linear models",
      skill: "Tell linear from nonlinear functions, construct linear models, interpret rate of change and initial value, and describe graphs qualitatively.",
      lesson: {
        sections: [
          {
            heading: "Linear or nonlinear?",
            body: "A function is **linear** if its rate of change is constant, so its graph is a straight line and it can be written as $y=mx+b$. In a table with evenly spaced inputs, linear outputs change by the same amount each step. The table $x=1,2,3$ with $y=4,7,12$ is nonlinear, because the outputs rise by $3$ and then $5$. Equations like $y=x^2+1$ are nonlinear.",
          },
          {
            heading: "Building a linear model",
            body: "Given two data points, the **rate of change** is $m=\\frac{y_2-y_1}{x_2-x_1}$. The **initial value** $b$ is the output when the input is $0$; find it by substituting a point into $y=mx+b$. In context, $m$ is the amount the output changes per one unit of input (with its units) and $b$ is the starting amount.",
          },
          {
            heading: "Describing graphs qualitatively",
            body: "A graph tells a story. Where it rises the function is increasing; where it falls, decreasing; where it is flat, constant. A steeper section means a faster rate of change. A sign of the slope tells the direction: positive rises, negative falls.",
          },
        ],
        keyFormulas: [
          { name: "Linear model", statement: "$y=mx+b$; $m=$ rate of change, $b=$ initial value" },
          { name: "Linear test", statement: "Equal changes in $x$ give equal changes in $y$" },
        ],
        workedExample: {
          problem: "A water tank holds $30$ gallons after $2$ minutes and $70$ gallons after $6$ minutes of filling at a constant rate. Write a model.",
          solution: "Rate: $\\frac{70-30}{6-2}=10$ gallons per minute. Substitute $(2,30)$: $30=10(2)+b$, so $b=10$. The model is $y=10x+10$: the tank started with $10$ gallons and fills at $10$ gallons per minute.",
        },
      },
      questions: [
        {
          id: "m8-u2-linear-models-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which function is nonlinear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=2x+1$" },
              { id: "b", text: "$y=x^2+1$" },
              { id: "c", text: "$y=5$" },
              { id: "d", text: "$y=\\frac{x}{3}$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear function", statement: "A linear function can be written $y=mx+b$; its graph is a straight line." },
            ],
            steps: [
              { reasoning: "The variable $x$ is squared in $y=x^2+1$, so the graph is a curve (parabola). The others are lines, including the horizontal line $y=5$.", working: "y=x^2+1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $y=x^2+1$",
            commonErrors: ["Thinking the constant function $y=5$ is nonlinear; it is a horizontal line with slope $0$.", "Thinking $y=\\frac{x}{3}$ is not linear because it has a fraction."],
          },
        },
        {
          id: "m8-u2-linear-models-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A candle is $10$ inches tall after burning for $2$ hours and $7$ inches tall after burning for $5$ hours. It burns at a constant rate. Find the rate of change of the candle's height, in inches per hour.",
          response: { type: "numeric", parts: [{ label: "Rate of change", answer: -1, unit: "inches per hour" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of change", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
            ],
            steps: [
              { reasoning: "Divide the change in height by the change in time.", working: "\\frac{7-10}{5-2}=\\frac{-3}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The negative sign shows the height is decreasing.", working: "-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-1$ inch per hour",
            commonErrors: ["Giving $+1$ and ignoring that the height decreases.", "Dividing by $10$ or $7$ instead of the change in time."],
            examinerNote: "Accept $-1$; award A0 for $1$ unless the answer states the candle is shrinking.",
          },
        },
        {
          id: "m8-u2-linear-models-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A water tank is being filled at a constant rate. After $2$ minutes it holds $30$ gallons and after $6$ minutes it holds $70$ gallons. How many gallons were in the tank at the start (when time was $0$)?",
          response: { type: "numeric", parts: [{ label: "Initial amount", answer: 10, unit: "gallons" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear model", statement: "$y=mx+b$, where $b$ is the initial value (the output at $x=0$)." },
            ],
            steps: [
              { reasoning: "Find the rate of change from the two data points.", working: "m=\\frac{70-30}{6-2}=10", marks: 1, markCode: "M" },
              { reasoning: "Substitute a point into $y=mx+b$.", working: "30=10(2)+b", marks: 1, markCode: "M" },
              { reasoning: "Solve for $b$.", working: "b=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ gallons",
            commonErrors: ["Stopping after finding the rate and giving $10$ without checking what it represents (it is gallons per minute here, and only coincidentally equals the answer).", "Using $b=30$ as the initial value."],
            examinerNote: "Accept the method of working backward: $30-2\\times10=10$.",
          },
        },
        {
          id: "m8-u2-linear-models-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A taxi company charges a fixed starting fee plus a constant amount per mile. A $4$-mile ride costs $\\$12.50$ and a $10$-mile ride costs $\\$26.00$. A second company's charges for $1$, $2$ and $3$ miles are $\\$4$, $\\$7$ and $\\$12$.",
          parts: [
            { label: "a", prompt: "Find the cost per mile, in dollars, of the first company.", marks: 2 },
            { label: "b", prompt: "Find the starting fee, in dollars.", marks: 2 },
            { label: "c", prompt: "Write a function for the cost $C$ of a ride of $m$ miles, and find the cost, in dollars, of a $15$-mile ride.", marks: 2 },
            { label: "d", prompt: "Is the second company's cost a linear function of distance? Justify your answer.", marks: 2 },
            { label: "e", prompt: "Describe the graph of the first company's cost against distance: its shape, where it starts on the vertical axis, and how it changes as distance increases.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cost per mile", answer: 2.25, unit: "dollars" },
              { label: "(b) Starting fee", answer: 3.5, unit: "dollars" },
              { label: "(c) Cost of a 15-mile ride", answer: 37.25, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of change", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$, the cost per mile." },
              { kind: "formula", name: "Linear model", statement: "$C=mx+b$ where $b$ is the initial value (the fee when distance is $0$)." },
              { kind: "definition", name: "Linear test", statement: "A function is linear if equal steps in the input give equal changes in the output." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the change in cost by the change in distance.", working: "\\frac{26-12.5}{10-4}=\\frac{13.5}{6}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "2.25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute the $4$-mile ride into $C=2.25m+b$.", working: "12.5=2.25(4)+b=9+b", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve for $b$.", working: "b=3.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write the function using the rate and the starting fee.", working: "C=2.25m+3.5", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Substitute $m=15$: $2.25\\times15=33.75$.", working: "33.75+3.5=37.25", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Distance goes up by $1$ mile each time, but the cost rises by $7-4=3$ and then $12-7=5$.", working: "3\\ne5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The rate of change is not constant, so the function is not linear.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "The graph is a straight line (the rate is constant) that is increasing, because the slope $2.25$ is positive, so the cost rises as distance increases.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "It starts at $3.50$ on the vertical axis (the starting fee), not at the origin, so the cost is not proportional to distance.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\$2.25$ per mile (b) $\\$3.50$ (c) $C=2.25m+3.5$; $\\$37.25$ (d) no, the cost changes by $3$ then $5$ for equal steps in distance (e) increasing straight line starting at $3.50$ on the vertical axis",
            commonErrors: ["Using the cost of the $4$-mile ride, $12.50$, as the starting fee.", "In (d), comparing costs $4$, $7$, $12$ instead of the differences between them."],
            examinerNote: "In (e) accept an equivalent description that mentions a straight, upward-sloping line with a positive vertical intercept.",
          },
        },
      ],
    },
  ],
};
