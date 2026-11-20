import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypms4-u2-lesson-2-1",
  code: "2-1",
  title: "Functions and Mappings",
  goal: "I CAN use function notation, determine domain and range, and identify and evaluate linear functions.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Function", definition: "A rule that assigns exactly one output to each input, written $f(x)$." },
    { term: "Domain", definition: "The set of all possible input values for a function." },
    { term: "Range", definition: "The set of all possible output values produced by a function." },
    { term: "Mapping", definition: "A diagram showing how inputs are paired with outputs, e.g. $x \\mapsto 2x+1$." },
    { term: "Linear function", definition: "A function of the form $f(x)=mx+c$ whose graph is a straight line." },
  ],
  concepts: [
    {
      id: "mypms4-u2-functions",
      title: "Function notation, domain and range",
      skill: "Evaluate functions using notation, describe mappings, and determine domain and range.",
      lesson: {
        sections: [
          {
            heading: "Function notation",
            body: "A function $f$ with rule $f(x)=3x-2$ means 'multiply the input by 3, then subtract 2'. To evaluate, substitute the input: $f(4)=3(4)-2=10$. The notation $f(4)$ means 'the output when the input is 4'.",
          },
          {
            heading: "Domain and range",
            body: "The **domain** is the set of allowed inputs; the **range** is the set of outputs produced. For $f(x)=2x+1$ with domain $\\{1,2,3\\}$, the outputs are $3,5,7$, so the range is $\\{3,5,7\\}$. Domain restrictions arise from context — e.g. a length cannot be negative.",
          },
          {
            heading: "Mappings",
            body: "A mapping diagram pairs each input with its output. For $x\\mapsto x^2-1$, the input $3$ maps to $8$. Not every mapping is a function: a function must give **exactly one output** for each input.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "$f(a)$ = substitute $x=a$ into $f(x)$" },
          { name: "Mapping", statement: "$x\\mapsto f(x)$" },
        ],
        workedExample: {
          problem: "Given $f(x)=x^2-4$, find $f(3)$ and $f(-2)$.",
          solution: "$f(3)=9-4=5$; $f(-2)=4-4=0$.",
        },
      },
      questions: [
        {
          id: "mypms4-u2-func-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=2x+3$, what is $f(4)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "9" },
              { id: "c", text: "14" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function evaluation", statement: "Substitute the input value for $x$." },
            ],
            steps: [
              { reasoning: "$f(4)=2(4)+3=11$.", working: "2(4)+3=11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 11",
            commonErrors: ["Forgetting to multiply the whole input by 2."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u2-func-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $g(x)=5-x$, find the range when the domain is $\\{1,3,5\\}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\{4,2,0\\}$" },
              { id: "b", text: "$\\{6,8,10\\}$" },
              { id: "c", text: "$\\{4,2,0,6\\}$" },
              { id: "d", text: "$\\{1,3,5\\}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Range", statement: "The set of outputs produced by the domain." },
            ],
            steps: [
              { reasoning: "$g(1)=4$, $g(3)=2$, $g(5)=0$.", working: "g(1)=4,g(3)=2,g(5)=0", marks: 1, markCode: "M" },
              { reasoning: "Range = $\\{4,2,0\\}$ (or $\\{0,2,4\\}$).", working: "\\{0,2,4\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\{0,2,4\\}$",
            commonErrors: ["Listing the domain instead of the range."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-func-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The function $h$ is defined by $h(x)=3x-1$ for $-2\\le x\\le4$. Find the range of $h$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-7\\le h(x)\\le11$" },
              { id: "b", text: "$-5\\le h(x)\\le13$" },
              { id: "c", text: "$-7\\le h(x)\\le13$" },
              { id: "d", text: "$-2\\le h(x)\\le4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Range of linear function", statement: "Evaluate at endpoints; range lies between them (increasing function)." },
            ],
            steps: [
              { reasoning: "$h(-2)=-7$; $h(4)=11$.", working: "h(-2)=-7,\\ h(4)=11", marks: 1, markCode: "M" },
              { reasoning: "Function is increasing, so range is $-7\\le h(x)\\le11$.", working: "-7\\le h(x)\\le11", marks: 1, markCode: "M" },
              { reasoning: "State the range.", working: "-7\\le h(x)\\le11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-7\\le h(x)\\le11$",
            commonErrors: ["Subtracting 1 from domain endpoints instead of evaluating."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-func-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The function $f$ is defined by $f(x)=2x-3$ with domain $\\{-1,0,1,2,3\\}$.",
          parts: [
            { label: "a", prompt: "Evaluate $f(-1)$ and $f(3)$.", marks: 2 },
            { label: "b", prompt: "Write down the range of $f$.", marks: 2 },
            { label: "c", prompt: "Find the value of $x$ for which $f(x)=7$.", marks: 2 },
            { label: "d", prompt: "Describe the mapping $x \\mapsto f(x)$ in words.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function evaluation", statement: "Substitute inputs; solve for output when needed." },
            ],
            steps: [
              { part: "a", reasoning: "$f(-1)=-5$; $f(3)=3$.", working: "f(-1)=-5,\\ f(3)=3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both values correct.", working: "-5\\text{ and }3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Outputs: $-5,-3,-1,1,3$.", working: "\\{-5,-3,-1,1,3\\}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the range.", working: "\\{-5,-3,-1,1,3\\}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2x-3=7$, so $2x=10$, $x=5$.", working: "x=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Note $x=5$ is outside the stated domain but still satisfies the equation.", working: "x=5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply input by 2, then subtract 3.", working: "\\text{double then subtract 3}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Describe clearly.", working: "\\text{'times 2, minus 3'}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f(-1)=-5$, $f(3)=3$ (b) $\\{-5,-3,-1,1,3\\}$ (c) $x=5$ (d) double the input, then subtract 3",
            commonErrors: ["In (c), forgetting the domain restriction note or solving incorrectly."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypms4-u2-func-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=3x-1$, what is $f(2)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "7" },
              { id: "c", text: "-1" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function evaluation", statement: "Substitute the input value for $x$." },
            ],
            steps: [
              { reasoning: "$f(2)=3(2)-1=5$.", working: "3(2)-1=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 5",
            commonErrors: ["Computing $3-1=2$ instead of substituting."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u2-func-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $g(x)=x^2+1$, find $g(3)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$g(3)$", answer: 10 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function evaluation", statement: "Substitute $x=3$ into $g(x)$." },
            ],
            steps: [
              { reasoning: "$g(3)=3^2+1=10$.", working: "9+1=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Computing $2(3)+1=7$ — confusing $x^2$ with $2x$."],
            examinerNote: "B1 for 10.",
          },
        },
        {
          id: "mypms4-u2-func-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $f(x)=4-2x$, find the range when the domain is $\\{0,1,2,3\\}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\{4,2,0,-2\\}$" },
              { id: "b", text: "$\\{4,3,2,1\\}$" },
              { id: "c", text: "$\\{0,2,4,6\\}$" },
              { id: "d", text: "$\\{1,2,3,4\\}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Range", statement: "The set of outputs produced by evaluating the domain." },
            ],
            steps: [
              { reasoning: "$f(0)=4$, $f(1)=2$, $f(2)=0$, $f(3)=-2$.", working: "4,2,0,-2", marks: 1, markCode: "M" },
              { reasoning: "Range $=\\{4,2,0,-2\\}$.", working: "\\{4,2,0,-2\\}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\{4,2,0,-2\\}$",
            commonErrors: ["Computing $4-2x$ as $4x-2$ or forgetting the negative."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-func-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $h(x)=5x-3$, find the value of $x$ for which $h(x)=12$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse evaluation", statement: "Set $h(x)$ equal to the target and solve for $x$." },
            ],
            steps: [
              { reasoning: "$5x-3=12$, so $5x=15$.", working: "5x=15", marks: 1, markCode: "M" },
              { reasoning: "$x=3$.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$",
            commonErrors: ["Solving $5x-3=12$ as $x=\\frac{12}{5}-3$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-func-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these relations is NOT a function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\mapsto2x+1$" },
              { id: "b", text: "$\\{(1,3),(2,3),(3,3)\\}$" },
              { id: "c", text: "$\\{(1,2),(1,3)\\}$" },
              { id: "d", text: "$x\\mapsto x-4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function", statement: "Each input must give exactly one output." },
            ],
            steps: [
              { reasoning: "In $\\{(1,2),(1,3)\\}$, input 1 has two different outputs.", working: "1\\mapsto2\\text{ and }3", marks: 1, markCode: "M" },
              { reasoning: "This violates the function definition.", working: "\\text{not a function}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\{(1,2),(1,3)\\}$",
            commonErrors: ["Thinking repeated outputs are the problem — repeated inputs are."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-func-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $f(x)=x^2-3x+1$, find $f(-2)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f(-2)$", answer: 11 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function evaluation", statement: "Substitute carefully, keeping track of negative signs." },
            ],
            steps: [
              { reasoning: "$f(-2)=(-2)^2-3(-2)+1=4+6+1$.", working: "4+6+1", marks: 1, markCode: "M" },
              { reasoning: "$=11$.", working: "11", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Computing $-3(-2)=-6$ instead of $+6$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-func-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If $f(x)=2x+5$, find $f(-3)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f(-3)$", answer: -1 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function evaluation", statement: "Substitute $x=-3$, keeping the sign." },
            ],
            steps: [
              { reasoning: "$f(-3)=2(-3)+5=-6+5$.", working: "-6+5", marks: 1, markCode: "M" },
              { reasoning: "$f(-3)=-1$.", working: "-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-1$",
            commonErrors: ["Computing $2(-3)=-6$ but adding 5 incorrectly."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-func-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $f(x)=x^2-4$ with domain $\\{-2,-1,0,1,2\\}$, how many distinct values are in the range?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of distinct values", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Range", statement: "The set of distinct outputs produced by the domain." },
            ],
            steps: [
              { reasoning: "Outputs: $f(-2)=0$, $f(-1)=-3$, $f(0)=-4$, $f(1)=-3$, $f(2)=0$.", working: "0,-3,-4,-3,0", marks: 1, markCode: "M" },
              { reasoning: "Distinct outputs: $\\{-4,-3,0\\}$ — three values.", working: "\\{-4,-3,0\\}", marks: 1, markCode: "M" },
              { reasoning: "State the count.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ distinct values",
            commonErrors: ["Counting 5 outputs without removing duplicates."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-func-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The function $f$ is defined by $f(x)=3x-2$ with domain $\\{-1,0,1,2\\}$.",
          parts: [
            { label: "a", prompt: "Evaluate $f(-1)$ and $f(2)$.", marks: 2 },
            { label: "b", prompt: "Write down the range of $f$.", marks: 2 },
            { label: "c", prompt: "Find the value of $x$ for which $f(x)=10$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function evaluation", statement: "Substitute inputs; solve for output when needed." },
            ],
            steps: [
              { part: "a", reasoning: "$f(-1)=-5$; $f(2)=4$.", working: "f(-1)=-5,\\ f(2)=4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both values correct.", working: "-5\\text{ and }4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Outputs: $-5,-2,1,4$.", working: "\\{-5,-2,1,4\\}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the range.", working: "\\{-5,-2,1,4\\}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$3x-2=10$, so $3x=12$, $x=4$.", working: "x=4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Note $x=4$ is outside the stated domain but satisfies the equation.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f(-1)=-5$, $f(2)=4$ (b) $\\{-5,-2,1,4\\}$ (c) $x=4$",
            commonErrors: ["Forgetting to check whether $x=4$ lies in the domain."],
            examinerNote: "M1 A1 per part.",
          },
        },
        {
          id: "mypms4-u2-func-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $g(x)=x^2+2x$, find the values of $x$ for which $g(x)=15$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 3 }, { label: "$x$", answer: -5 }],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic equation", statement: "Set $g(x)$ equal to the target and solve the resulting quadratic." },
            ],
            steps: [
              { reasoning: "$x^2+2x=15 \\Rightarrow x^2+2x-15=0$.", working: "x^2+2x-15=0", marks: 1, markCode: "M" },
              { reasoning: "Factorise: $(x+5)(x-3)=0$.", working: "(x+5)(x-3)=0", marks: 1, markCode: "M" },
              { reasoning: "$x=3$ or $x=-5$.", working: "x=3,\\ x=-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ or $x=-5$",
            commonErrors: ["Giving only one solution."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-func-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why $f(x)=x^2$ is a function but the relation $y^2=x$ is not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function", statement: "Each input gives exactly one output." },
            ],
            steps: [
              { reasoning: "For $f(x)=x^2$, each input $x$ produces exactly one output $x^2$.", working: "x\\mapsto x^2", marks: 1, markCode: "M" },
              { reasoning: "For $y^2=x$, e.g. $x=4$ gives $y=2$ or $y=-2$ — two outputs for one input.", working: "y=\\pm2", marks: 1, markCode: "M" },
              { reasoning: "Therefore $y^2=x$ fails the function test.", working: "\\text{not a function}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x)=x^2$ is a function; $y^2=x$ is not because $x=4$ gives $y=\\pm2$.",
            commonErrors: ["Not giving a concrete example of two outputs."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-func-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given $f(x)=2x+1$ and $g(x)=3x-4$, find $f(g(2))$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "11" },
              { id: "c", text: "7" },
              { id: "d", text: "-1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite functions", statement: "Evaluate the inner function first, then substitute into the outer." },
            ],
            steps: [
              { reasoning: "$g(2)=3(2)-4=2$.", working: "g(2)=2", marks: 1, markCode: "M" },
              { reasoning: "$f(g(2))=f(2)=2(2)+1=5$.", working: "f(2)=5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Computing $f(2)\\times g(2)$ or evaluating in the wrong order."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypms4-u2-linear",
      title: "Linear functions and lines",
      skill: "Identify linear functions $y=mx+c$, find gradients and intercepts, and determine equations of parallel and perpendicular lines.",
      lesson: {
        sections: [
          {
            heading: "The form $y=mx+c$",
            body: "Every linear function can be written $y=mx+c$ where $m$ is the **gradient** (rate of change) and $c$ is the **y-intercept** (value of $y$ when $x=0$). For $y=3x-4$, the gradient is 3 and the line crosses the y-axis at $-4$.",
          },
          {
            heading: "Gradient from two points",
            body: "The gradient between two points $(x_1,y_1)$ and $(x_2,y_2)$ is $m=\\frac{y_2-y_1}{x_2-x_1}$. For $(1,2)$ and $(4,11)$: $m=\\frac{11-2}{4-1}=\\frac{9}{3}=3$.",
          },
          {
            heading: "Parallel and perpendicular lines",
            body: "**Parallel lines** have the same gradient. **Perpendicular lines** have gradients that are negative reciprocals: if one has gradient $m$, the other has $-\\frac{1}{m}$. E.g. $y=2x+1$ is perpendicular to any line with gradient $-\\frac{1}{2}$.",
          },
        ],
        keyFormulas: [
          { name: "Linear form", statement: "$y=mx+c$: $m$ = gradient, $c$ = y-intercept" },
          { name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
          { name: "Perpendicular", statement: "Gradients multiply to $-1$" },
        ],
        workedExample: {
          problem: "Find the gradient and y-intercept of $2y=6x-8$.",
          solution: "Divide by 2: $y=3x-4$. Gradient $=3$, y-intercept $=-4$.",
        },
      },
      questions: [
        {
          id: "mypms4-u2-linear-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of $y=5x+2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "5" },
              { id: "c", text: "$-5$" },
              { id: "d", text: "$\\frac{1}{5}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear form", statement: "In $y=mx+c$, $m$ is the gradient." },
            ],
            steps: [
              { reasoning: "$m=5$.", working: "m=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 5",
            commonErrors: ["Confusing gradient with intercept."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u2-linear-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(2,3)$ and $(6,15)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$." },
            ],
            steps: [
              { reasoning: "$m=\\frac{15-3}{6-2}=\\frac{12}{4}=3$.", working: "m=\\frac{12}{4}=3", marks: 1, markCode: "M" },
              { reasoning: "State the gradient.", working: "m=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=3$",
            commonErrors: ["Inverting the fraction — dividing $x$ change by $y$ change."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-linear-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A line is perpendicular to $y=4x-7$. What is its gradient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-4$" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "$-\\frac{1}{4}$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perpendicular gradients", statement: "Negative reciprocal: $m_1m_2=-1$." },
            ],
            steps: [
              { reasoning: "Original gradient is 4; perpendicular gradient is $-\\frac{1}{4}$.", working: "m=-\\frac{1}{4}", marks: 1, markCode: "M" },
              { reasoning: "Verify: $4\\times(-\\frac{1}{4})=-1$.", working: "4\\times(-\\frac{1}{4})=-1", marks: 1, markCode: "M" },
              { reasoning: "State the gradient.", working: "-\\frac{1}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{1}{4}$",
            commonErrors: ["Using $\\frac{1}{4}$ without the negative sign."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-linear-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A line $L$ passes through $(1,5)$ and $(3,11)$.",
          parts: [
            { label: "a", prompt: "Find the gradient of $L$.", marks: 2 },
            { label: "b", prompt: "Find the equation of $L$ in the form $y=mx+c$.", marks: 3 },
            { label: "c", prompt: "Find the equation of a line parallel to $L$ passing through $(0,5)$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
              { kind: "principle", name: "Parallel lines", statement: "Same gradient, different intercept." },
            ],
            steps: [
              { part: "a", reasoning: "$m=\\frac{11-5}{3-1}=\\frac{6}{2}=3$.", working: "m=3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the gradient.", working: "m=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use point $(1,5)$: $5=3(1)+c$, so $c=2$.", working: "5=3+c\\Rightarrow c=2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute $m$ and $c$.", working: "y=3x+2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the equation.", working: "y=3x+2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Parallel line has $m=3$; through $(0,5)$: $c=5$.", working: "y=3x+5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check it passes through $(0,5)$.", working: "5=3(0)+5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the equation.", working: "y=3x+5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $m=3$ (b) $y=3x+2$ (c) $y=3x+5$",
            commonErrors: ["In (c), changing the gradient instead of keeping it the same."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypms4-u2-linear-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of $y=-3x+7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "-3" },
              { id: "c", text: "7" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear form", statement: "In $y=mx+c$, $m$ is the gradient." },
            ],
            steps: [
              { reasoning: "$m=-3$.", working: "m=-3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $-3$",
            commonErrors: ["Dropping the negative sign."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u2-linear-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $y=4x-9$, state the value of $c$ (the $y$-intercept).",
          response: {
            type: "numeric",
            parts: [{ label: "$c$", answer: -9 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear form", statement: "In $y=mx+c$, $c$ is the $y$-intercept." },
            ],
            steps: [
              { reasoning: "$c=-9$.", working: "c=-9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$c=-9$",
            commonErrors: ["Confusing $m$ with $c$."],
            examinerNote: "B1 for $-9$.",
          },
        },
        {
          id: "mypms4-u2-linear-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(1,4)$ and $(5,16)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$." },
            ],
            steps: [
              { reasoning: "$m=\\frac{16-4}{5-1}=\\frac{12}{4}=3$.", working: "m=3", marks: 1, markCode: "M" },
              { reasoning: "State the gradient.", working: "m=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=3$",
            commonErrors: ["Inverting the fraction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-linear-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(-1,2)$ and $(3,-6)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$m$", answer: -2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$." },
            ],
            steps: [
              { reasoning: "$m=\\frac{-6-2}{3-(-1)}=\\frac{-8}{4}$.", working: "\\frac{-8}{4}", marks: 1, markCode: "M" },
              { reasoning: "$m=-2$.", working: "m=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=-2$",
            commonErrors: ["Subtracting coordinates in the wrong order or losing the negative."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-linear-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the equation of the line with gradient 2 passing through $(0,5)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=2x+5$" },
              { id: "b", text: "$y=5x+2$" },
              { id: "c", text: "$y=2x-5$" },
              { id: "d", text: "$y=x+5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point and gradient", statement: "Through $(0,c)$, the intercept is $c$." },
            ],
            steps: [
              { reasoning: "Through $(0,5)$ means $c=5$; gradient $m=2$.", working: "m=2,\\ c=5", marks: 1, markCode: "M" },
              { reasoning: "$y=2x+5$.", working: "y=2x+5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2x+5$",
            commonErrors: ["Swapping $m$ and $c$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-linear-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write $3y=6x+9$ in the form $y=mx+c$ and state the gradient.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=2x+3$, gradient 2" },
              { id: "b", text: "$y=6x+9$, gradient 6" },
              { id: "c", text: "$y=2x+9$, gradient 2" },
              { id: "d", text: "$y=3x+3$, gradient 3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rearranging", statement: "Divide every term by the coefficient of $y$." },
            ],
            steps: [
              { reasoning: "Divide by 3: $y=2x+3$.", working: "y=2x+3", marks: 1, markCode: "M" },
              { reasoning: "Gradient is the coefficient of $x$: $m=2$.", working: "m=2", marks: 1, markCode: "M" },
              { reasoning: "Select the correct answer.", working: "y=2x+3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2x+3$, gradient 2",
            commonErrors: ["Dividing only part of the equation by 3."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-linear-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The line $y=-5x+11$ crosses the $y$-axis at one point. State the $y$-coordinate of that point.",
          response: {
            type: "numeric",
            parts: [{ label: "$y$-coordinate", answer: 11 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "y-intercept", statement: "At $x=0$, $y=c$." },
            ],
            steps: [
              { reasoning: "Set $x=0$: $y=-5(0)+11=11$.", working: "y=11", marks: 1, markCode: "M" },
              { reasoning: "State the $y$-coordinate.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Reading $-5$ as the intercept."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u2-linear-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the gradient of a line perpendicular to $y=-2x+5$.",
          response: {
            type: "numeric",
            parts: [{ label: "$m$", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perpendicular gradients", statement: "Negative reciprocal: $m_1m_2=-1$." },
            ],
            steps: [
              { reasoning: "Original gradient is $-2$; the negative reciprocal is $-\\frac{1}{-2}=\\frac{1}{2}$.", working: "m=\\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "Check: $(-2)\\times\\frac{1}{2}=-1$. ✓", working: "-1", marks: 1, markCode: "M" },
              { reasoning: "State the gradient.", working: "m=0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=\\frac{1}{2}$",
            commonErrors: ["Using $-\\frac{1}{2}$ — the reciprocal of a negative is positive."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-linear-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A line $L$ passes through $(2,7)$ with gradient 3.",
          parts: [
            { label: "a", prompt: "Find the equation of $L$ in the form $y=mx+c$.", marks: 2 },
            { label: "b", prompt: "Find the value of $y$ when $x=10$.", marks: 2 },
            { label: "c", prompt: "Find the value of $x$ when $y=-2$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point and gradient", statement: "Use $y-y_1=m(x-x_1)$ or substitute into $y=mx+c$." },
            ],
            steps: [
              { part: "a", reasoning: "$7=3(2)+c$, so $c=1$.", working: "c=1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$y=3x+1$.", working: "y=3x+1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$y=3(10)+1=31$.", working: "y=31", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", working: "31", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$-2=3x+1$, so $3x=-3$.", working: "3x=-3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$x=-1$.", working: "x=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=3x+1$ (b) $y=31$ (c) $x=-1$",
            commonErrors: ["In (c), adding 1 instead of subtracting when isolating $x$."],
            examinerNote: "M1 A1 per part.",
          },
        },
        {
          id: "mypms4-u2-linear-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A line is parallel to $y=4x-1$ and passes through $(1,6)$. Find the value of $y$ when $x=3$.",
          response: {
            type: "numeric",
            parts: [{ label: "$y$", answer: 14 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parallel lines", statement: "Same gradient; use the given point to find $c$." },
            ],
            steps: [
              { reasoning: "Parallel gradient $m=4$; $6=4(1)+c$, so $c=2$.", working: "y=4x+2", marks: 1, markCode: "M" },
              { reasoning: "At $x=3$: $y=4(3)+2=14$.", working: "y=14", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=14$",
            commonErrors: ["Changing the gradient instead of keeping it at 4."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-linear-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a horizontal line has gradient 0 and a vertical line has an undefined gradient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$." },
            ],
            steps: [
              { reasoning: "Horizontal: $y_2-y_1=0$ while $x_2-x_1\\ne0$, so $m=0$.", working: "m=0", marks: 1, markCode: "M" },
              { reasoning: "Vertical: $x_2-x_1=0$, so the denominator is 0 — division by zero is undefined.", working: "\\text{denominator}=0", marks: 1, markCode: "M" },
              { reasoning: "Both cases justified via the gradient formula.", working: "\\text{explained}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Horizontal: $\\Delta y=0$ gives $m=0$; vertical: $\\Delta x=0$ gives division by zero.",
            commonErrors: ["Saying vertical lines have 'infinite' gradient without explaining division by zero."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u2-linear-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which of these lines is perpendicular to $y=0.5x+3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=-2x+1$" },
              { id: "b", text: "$y=2x-4$" },
              { id: "c", text: "$y=0.5x+7$" },
              { id: "d", text: "$y=-0.5x+2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perpendicular gradients", statement: "Gradients multiply to $-1$." },
            ],
            steps: [
              { reasoning: "Perpendicular gradient to $0.5$ is $-\\frac{1}{0.5}=-2$.", working: "m=-2", marks: 1, markCode: "M" },
              { reasoning: "Check: $0.5\\times(-2)=-1$. ✓", working: "-1", marks: 1, markCode: "M" },
              { reasoning: "Select (a).", working: "y=-2x+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y=-2x+1$",
            commonErrors: ["Choosing (b) — $0.5\\times2=1$, not $-1$."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
