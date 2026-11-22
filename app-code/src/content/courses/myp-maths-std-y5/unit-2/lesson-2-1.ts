import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypms5-u2-lesson-2-1",
  code: "2-1",
  title: "Functions and Graphs",
  goal: "I CAN identify functions, determine domain and range, sketch linear and quadratic graphs, and find equations of lines.",
  standards: [
    "MYP Maths: Functions",
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Function", definition: "A rule that assigns exactly one output to each input in the domain." },
    { term: "Domain", definition: "The set of all possible input values." },
    { term: "Range", definition: "The set of all possible output values." },
    { term: "Gradient", definition: "The rate of change of a linear function, $m=\\frac{\\Delta y}{\\Delta x}$." },
    { term: "Intercept", definition: "Where a graph crosses an axis; $y$-intercept at $x=0$, $x$-intercept at $y=0$." },
  ],
  concepts: [
    {
      id: "mypms5-u2-functions",
      title: "Functions, domain and range",
      skill: "Identify functions, determine domain and range, and use function notation.",
      lesson: {
        sections: [
          {
            heading: "What makes a function",
            body: "A relation is a **function** if each input has exactly one output. Test with vertical line test on graphs, or check mappings. $f(x)=2x+3$ is a function; $y^2=x$ is not (two $y$ values per $x$).",
          },
          {
            heading: "Domain and range",
            body: "**Domain**: all valid inputs (e.g. $x\\ne0$ for $f(x)=\\frac{1}{x}$; $x\\ge0$ for $f(x)=\\sqrt{x}$). **Range**: all possible outputs. For $f(x)=x^2$, range is $y\\ge0$.",
          },
          {
            heading: "Function notation",
            body: "Write $f(x)=3x-2$. Then $f(4)=10$, $f(a)=3a-2$, $f(x+1)=3(x+1)-2=3x+1$. Composite: $f(g(x))$ means apply $g$ first, then $f$.",
          },
        ],
        keyFormulas: [
          { name: "Vertical line test", statement: "A graph is a function if no vertical line meets it twice" },
          { name: "Function evaluation", statement: "$f(x)=3x-2 \\Rightarrow f(4)=10$" },
          { name: "Domain restrictions", statement: "No division by zero; no negative under even root" },
        ],
        workedExample: {
          problem: "For $f(x)=\\frac{6}{x-2}$, find the domain and $f(5)$.",
          solution: "Domain: $x\\ne2$. $f(5)=\\frac{6}{3}=2$.",
        },
      },
      questions: [
        {
          id: "mypms5-u2-func-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=4x-1$, find $f(3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "13" },
              { id: "b", text: "12" },
              { id: "c", text: "11" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Function evaluation", statement: "$f(3)=4(3)-1=11$." },
            ],
            steps: [
              { reasoning: "$f(3)=4(3)-1=12-1=11$.", working: "11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 11",
            commonErrors: ["Computing $4\\times3=12$ then forgetting to subtract 1."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u2-func-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the domain of $f(x)=\\sqrt{x-3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>3$" },
              { id: "b", text: "$x\\ge-3$" },
              { id: "c", text: "All real $x$" },
              { id: "d", text: "$x\\ge3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Domain", statement: "Need $x-3\\ge0$ for square root." },
            ],
            steps: [
              { reasoning: "$x-3\\ge0 \\Rightarrow x\\ge3$.", working: "x\\ge3", marks: 1, markCode: "M" },
              { reasoning: "State the domain.", working: "x\\ge3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\ge3$",
            commonErrors: ["Using $>$ instead of $\\ge$ — $x=3$ gives $\\sqrt{0}=0$ which is valid."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u2-func-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which of the following relations is a function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=|x|$ and $y=-|x|$ together" },
              { id: "b", text: "$y=\\pm\\sqrt{x}$" },
              { id: "c", text: "$x^2+y^2=25$" },
              { id: "d", text: "$y=x^2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function", statement: "Each input must produce exactly one output." },
            ],
            steps: [
              { reasoning: "$y=x^2$ gives one output per input. $y=\\pm\\sqrt{x}$ and circle give two outputs for some inputs.", working: "y=x^2", marks: 1, markCode: "M" },
              { reasoning: "Check each option against the definition.", working: "\\text{function test}", marks: 1, markCode: "M" },
              { reasoning: "Only $y=x^2$ is a function.", working: "y=x^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=x^2$",
            commonErrors: ["Thinking $y=|x|$ combined with $y=-|x|$ is still one function — it's two."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u2-func-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Let $f(x)=2x-3$ and $g(x)=x^2+1$.",
          parts: [
            { label: "a", prompt: "Find $f(4)$.", marks: 1 },
            { label: "b", prompt: "Find $g(-2)$.", marks: 1 },
            { label: "c", prompt: "Find $f(g(2))$.", marks: 3 },
            { label: "d", prompt: "Solve $f(x)=g(x)$ for $x$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite functions", statement: "$f(g(x))$: apply $g$ first, then $f$." },
            ],
            steps: [
              { part: "a", reasoning: "$f(4)=2(4)-3=5$.", working: "5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$g(-2)=(-2)^2+1=5$.", working: "5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$g(2)=2^2+1=5$.", working: "g(2)=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$f(5)=2(5)-3=7$.", working: "f(5)=7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the result.", working: "7", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$2x-3=x^2+1 \\Rightarrow x^2-2x+4=0$; discriminant $=4-16=-12<0$; no real solutions.", working: "x^2-2x+4=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Check discriminant: $(-2)^2-4(1)(4)=4-16=-12$.", working: "-12<0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "No real solutions — curves don't intersect.", working: "\\text{no real solutions}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5 (b) 5 (c) 7 (d) no real solutions",
            commonErrors: ["In (c), computing $g(f(2))$ instead of $f(g(2))$."],
            examinerNote: "A1 for (a), A1 for (b), M1 M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypms5-u2-func-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=x^2-4$, find $f(3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "13" },
              { id: "c", text: "5" },
              { id: "d", text: "-1" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Function evaluation", statement: "$f(3)=3^2-4=5$." }],
            steps: [{ reasoning: "Substitute $x=3$.", working: "9-4=5", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 5",
          },
        },
        {
          id: "mypms5-u2-func-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=2x+1$, find $f(-4)$.",
          response: { type: "numeric", parts: [{ label: "$f(-4)$", answer: -7 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Function evaluation", statement: "Substitute negative values carefully." }],
            steps: [{ reasoning: "$f(-4)=2(-4)+1=-8+1=-7$.", working: "-7", marks: 1, markCode: "B" }],
            finalAnswer: "$-7$",
          },
        },
        {
          id: "mypms5-u2-func-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the domain of $f(x)=\\frac{1}{x+3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\ne3$" },
              { id: "b", text: "$x>-3$" },
              { id: "c", text: "All real $x$" },
              { id: "d", text: "$x\\ne-3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Domain", statement: "Denominator cannot be zero: $x+3\\ne0$." }],
            steps: [
              { reasoning: "Set denominator non-zero: $x\\ne-3$.", working: "x\\ne-3", marks: 1, markCode: "M" },
              { reasoning: "State the domain.", working: "x\\ne-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\ne-3$",
          },
        },
        {
          id: "mypms5-u2-func-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $f(x)=x^2+2$, find the minimum value of the range.",
          response: { type: "numeric", parts: [{ label: "minimum", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Quadratic range", statement: "For $x^2\\ge0$, the minimum output is the constant term." }],
            steps: [
              { reasoning: "$x^2\\ge0$, so $f(x)\\ge2$.", working: "y\\ge2", marks: 1, markCode: "M" },
              { reasoning: "Minimum value is 2.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "mypms5-u2-func-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=3x$ and $g(x)=x-2$, find $f(g(5))$.",
          response: { type: "numeric", parts: [{ label: "$f(g(5))$", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Composite functions", statement: "Apply $g$ first: $g(5)=3$, then $f(3)=9$." }],
            steps: [
              { reasoning: "$g(5)=5-2=3$.", working: "g(5)=3", marks: 1, markCode: "M" },
              { reasoning: "$f(3)=3\\times3=9$.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$",
          },
        },
        {
          id: "mypms5-u2-func-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which relation is a function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=\\pm\\sqrt{x}$" },
              { id: "b", text: "$x^2+y^2=16$" },
              { id: "c", text: "$y=2x-5$" },
              { id: "d", text: "The set of points $(1,2),(1,5),(2,3)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Function", statement: "Each input must have exactly one output." }],
            steps: [
              { reasoning: "Check each relation for one output per input.", working: "\\text{test each}", marks: 1, markCode: "M" },
              { reasoning: "Only $y=2x-5$ gives one output for every $x$.", working: "y=2x-5", marks: 1, markCode: "M" },
              { reasoning: "State the function.", working: "y=2x-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2x-5$",
          },
        },
        {
          id: "mypms5-u2-func-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $f(x)=2x-3$, solve $f(x)=7$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Solve function equation", statement: "Set the rule equal to the output and solve." }],
            steps: [
              { reasoning: "$2x-3=7 \\Rightarrow 2x=10$.", working: "2x=10", marks: 1, markCode: "M" },
              { reasoning: "$x=5$.", working: "x=5", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$",
          },
        },
        {
          id: "mypms5-u2-func-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Work with functions.",
          parts: [
            { label: "a", prompt: "For $f(x)=\\frac{10}{x-1}$, state the domain.", marks: 1 },
            { label: "b", prompt: "Find $f(6)$.", marks: 1 },
            { label: "c", prompt: "For $g(x)=x^2-1$, find $g(f(3))$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Functions", statement: "Domain excludes values making the function undefined; composites apply inside first." }],
            steps: [
              { part: "a", reasoning: "$x-1\\ne0$, so $x\\ne1$.", working: "x\\ne1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$f(6)=\\frac{10}{5}=2$.", working: "2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$f(3)=\\frac{10}{2}=5$.", working: "f(3)=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$g(5)=5^2-1=24$.", working: "g(5)=24", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the result.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x\\ne1$ (b) 2 (c) 24",
          },
        },
        {
          id: "mypms5-u2-func-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=4x-3$, find $f\\left(\\frac12\\right)$.",
          response: { type: "numeric", parts: [{ label: "$f(1/2)$", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Function evaluation", statement: "Substitute the fraction carefully." }],
            steps: [{ reasoning: "$4(\\frac12)-3=2-3=-1$.", working: "-1", marks: 1, markCode: "B" }],
            finalAnswer: "$-1$",
          },
        },
        {
          id: "mypms5-u2-func-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the range of $f(x)=|x|+1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real $y$" },
              { id: "b", text: "$y\\le1$" },
              { id: "c", text: "$y\\ge1$" },
              { id: "d", text: "$y>1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Absolute value", statement: "$|x|\\ge0$, so $|x|+1\\ge1$." }],
            steps: [
              { reasoning: "Minimum occurs at $x=0$, giving $f(0)=1$.", working: "y\\ge1", marks: 1, markCode: "M" },
              { reasoning: "State the range.", working: "y\\ge1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y\\ge1$",
          },
        },
        {
          id: "mypms5-u2-func-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=2x$ and $g(x)=x^2$, find $g(f(2))$.",
          response: { type: "numeric", parts: [{ label: "$g(f(2))$", answer: 16 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Composite functions", statement: "Apply $f$ first: $f(2)=4$, then $g(4)=16$." }],
            steps: [
              { reasoning: "$f(2)=4$.", working: "f(2)=4", marks: 1, markCode: "M" },
              { reasoning: "$g(4)=16$.", working: "16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$",
          },
        },
        {
          id: "mypms5-u2-func-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why $y^2=x$ is not a function, but $y=x^2$ is. Refer to the one-output rule.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Function", statement: "A function assigns exactly one output to each input." }],
            steps: [
              { reasoning: "For $y^2=x$, a positive $x$ gives two $y$ values, e.g. $x=4$ gives $y=\\pm2$.", working: "y=\\pm2", marks: 1, markCode: "M" },
              { reasoning: "For $y=x^2$, each $x$ produces only one $y$.", working: "y=x^2", marks: 1, markCode: "M" },
              { reasoning: "Conclude only $y=x^2$ is a function.", working: "y=x^2\\text{ is a function}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=x^2$ is a function; $y^2=x$ is not",
          },
        },
      ],
    },
    {
      id: "mypms5-u2-linear",
      title: "Linear Functions and Equations",
      skill: "Find equations of lines, solve linear equations including those with fractions, and interpret linear graphs.",
      lesson: {
        sections: [
          {
            heading: "Equation of a line",
            body: "Point-slope form: $y-y_1=m(x-x_1)$. Gradient $m=\\frac{y_2-y_1}{x_2-x_1}$. Parallel lines have equal gradients; perpendicular lines have gradients multiplying to $-1$ (negative reciprocal).",
          },
          {
            heading: "Solving linear equations",
            body: "Clear fractions first by multiplying through by the LCM of denominators. For equations with variables on both sides, collect like terms. Always check by substituting back.",
          },
          {
            heading: "Interpreting linear graphs",
            body: "Gradient = rate of change; $y$-intercept = initial value. For $C=2.5n+10$, $n$ is quantity, $C$ is cost; 2.5 is cost per unit, 10 is fixed fee.",
          },
        ],
        keyFormulas: [
          { name: "Point-slope", statement: "$y-y_1=m(x-x_1)$" },
          { name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
          { name: "Perpendicular", statement: "$m_1\\times m_2=-1$" },
        ],
        workedExample: {
          problem: "Find the equation of the line through $(2,5)$ and $(6,13)$.",
          solution: "$m=\\frac{13-5}{6-2}=2$; $y-5=2(x-2)$; $y=2x+1$.",
        },
      },
      questions: [
        {
          id: "mypms5-u2-linear-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the gradient of the line through $(1,3)$ and $(4,12)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "1" },
              { id: "c", text: "3" },
              { id: "d", text: "9" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{12-3}{4-1}=\\frac{9}{3}=3$." },
            ],
            steps: [
              { reasoning: "$m=\\frac{9}{3}=3$.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 3",
            commonErrors: ["Dividing $x$ difference by $y$ difference."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u2-linear-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\frac{x+1}{3}-\\frac{x-2}{4}=2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4$" },
              { id: "b", text: "$x=14$" },
              { id: "c", text: "$x=7$" },
              { id: "d", text: "$x=10$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clear fractions", statement: "Multiply by 12: $4(x+1)-3(x-2)=24$." },
            ],
            steps: [
              { reasoning: "$4(x+1)-3(x-2)=24 \\Rightarrow 4x+4-3x+6=24 \\Rightarrow x+10=24 \\Rightarrow x=14$.", working: "x=14", marks: 1, markCode: "M" },
              { reasoning: "Verify: $\\frac{14+1}{3}-\\frac{14-2}{4}=5-3=2$. ✓", working: "x=14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=14$",
            commonErrors: ["Sign error when distributing $-3(x-2)$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u2-linear-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Line $L_1$ has equation $y=3x-2$. Find the equation of the line perpendicular to $L_1$ passing through $(4,1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=-3x+13$" },
              { id: "b", text: "$y=-\\frac{1}{3}x+\\frac{13}{3}$" },
              { id: "c", text: "$y=\\frac{1}{3}x-\\frac{1}{3}$" },
              { id: "d", text: "$y=-\\frac{1}{3}x+\\frac{7}{3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perpendicular", statement: "Gradient $=-\\frac{1}{3}$; use point-slope." },
            ],
            steps: [
              { reasoning: "Perpendicular gradient: $m=-\\frac{1}{3}$.", working: "m=-\\frac{1}{3}", marks: 1, markCode: "M" },
              { reasoning: "$y-1=-\\frac{1}{3}(x-4) \\Rightarrow y=-\\frac{1}{3}x+\\frac{4}{3}+1=-\\frac{1}{3}x+\\frac{7}{3}$.", working: "y=-\\frac{1}{3}x+\\frac{7}{3}", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=-\\frac{1}{3}x+\\frac{7}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-\\frac{1}{3}x+\\frac{7}{3}$",
            commonErrors: ["Using same gradient instead of negative reciprocal."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u2-linear-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A taxi company charges 3.50 flag-fall plus 2.20 per km.",
          parts: [
            { label: "a", prompt: "Write the cost function $C(d)$.", marks: 1 },
            { label: "b", prompt: "Find the cost of a 12 km journey.", marks: 2 },
            { label: "c", prompt: "If a passenger pays 25.90, find the distance travelled.", marks: 2 },
            { label: "d", prompt: "Two companies: Company A charges 3.50 + 2.20/km; Company B charges 5.00 + 1.80/km. Find the distance where costs are equal and state which is cheaper for 10 km.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Linear cost = fixed + rate × quantity." },
            ],
            steps: [
              { part: "a", reasoning: "$C(d)=3.50+2.20d$.", working: "C(d)=3.50+2.20d", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$C(12)=3.50+2.20(12)=3.50+26.40=29.90$.", working: "29.90", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the cost.", working: "29.90", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$3.50+2.20d=25.90 \\Rightarrow 2.20d=22.40 \\Rightarrow d=10.18$ km (2 d.p.).", working: "d=10.18", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the distance.", working: "10.18\\text{ km}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set equal: $3.50+2.20d=5.00+1.80d \\Rightarrow 0.40d=1.50 \\Rightarrow d=3.75$ km.", working: "d=3.75", marks: 1, markCode: "M" },
              { part: "d", reasoning: "For 10 km: A $=3.50+22=25.50$; B $=5.00+18=23.00$; B cheaper.", working: "B cheaper", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the conclusion.", working: "d=3.75\\text{ km; B cheaper}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $C(d)=3.50+2.20d$ (b) 29.90 (c) 10.18 km (d) 3.75 km; Company B",
            commonErrors: ["In (d), comparing costs at 10 km without first finding break-even point."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypms5-u2-linear-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the gradient of the line through $(0,2)$ and $(3,11)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "13" },
              { id: "c", text: "\\frac13" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Gradient", statement: "$m=\\frac{11-2}{3-0}=\\frac93=3$." }],
            steps: [{ reasoning: "Compute the gradient.", working: "3", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** 3",
          },
        },
        {
          id: "mypms5-u2-linear-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the $y$-intercept of $y=4x-7$.",
          response: { type: "numeric", parts: [{ label: "$y$-intercept", answer: -7 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Intercept", statement: "Set $x=0$; the constant term is the intercept." }],
            steps: [{ reasoning: "At $x=0$, $y=-7$.", working: "-7", marks: 1, markCode: "B" }],
            finalAnswer: "$-7$",
          },
        },
        {
          id: "mypms5-u2-linear-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the equation of the line through $(2,3)$ with gradient 4.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=4x+11$" },
              { id: "b", text: "$y=4x+3$" },
              { id: "c", text: "$y=4x-5$" },
              { id: "d", text: "$y=\\frac14x+\\frac52$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Point-slope", statement: "$y-3=4(x-2)$." }],
            steps: [
              { reasoning: "Substitute into point-slope form.", working: "y-3=4(x-2)", marks: 1, markCode: "M" },
              { reasoning: "Simplify to $y=4x-5$.", working: "y=4x-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=4x-5$",
          },
        },
        {
          id: "mypms5-u2-linear-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $5x-3=2x+9$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Linear equation", statement: "Collect like terms on both sides." }],
            steps: [
              { reasoning: "$3x=12$.", working: "3x=12", marks: 1, markCode: "M" },
              { reasoning: "$x=4$.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$",
          },
        },
        {
          id: "mypms5-u2-linear-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the $x$-intercept of $y=2x+6$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: -3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Intercept", statement: "Set $y=0$ and solve for $x$." }],
            steps: [
              { reasoning: "$0=2x+6 \\Rightarrow x=-3$.", working: "x=-3", marks: 1, markCode: "M" },
              { reasoning: "State the intercept.", working: "-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-3$",
          },
        },
        {
          id: "mypms5-u2-linear-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the equation of the line parallel to $y=3x-1$ passing through $(0,5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=-\\frac13x+5$" },
              { id: "b", text: "$y=3x-1$" },
              { id: "c", text: "$y=5x+3$" },
              { id: "d", text: "$y=3x+5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Parallel lines", statement: "Parallel lines have the same gradient." }],
            steps: [
              { reasoning: "Gradient is 3; use point $(0,5)$.", working: "m=3", marks: 1, markCode: "M" },
              { reasoning: "$y-5=3(x-0)$ gives $y=3x+5$.", working: "y=3x+5", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=3x+5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=3x+5$",
          },
        },
        {
          id: "mypms5-u2-linear-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $\\frac{x-2}{3}=4$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 14 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Clear fractions", statement: "Multiply both sides by the denominator first." }],
            steps: [
              { reasoning: "$x-2=12$.", working: "x-2=12", marks: 1, markCode: "M" },
              { reasoning: "$x=14$.", working: "x=14", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=14$",
          },
        },
        {
          id: "mypms5-u2-linear-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Interpret and use linear models.",
          parts: [
            { label: "a", prompt: "For $C=2.5n+10$, identify the fixed charge and cost per unit.", marks: 2 },
            { label: "b", prompt: "Find the cost when $n=6$.", marks: 2 },
            { label: "c", prompt: "Find $n$ when $C=30$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Linear model", statement: "$C=mn+c$: $m$ is rate, $c$ is fixed charge." }],
            steps: [
              { part: "a", reasoning: "Fixed charge is 10; cost per unit is 2.5.", working: "10,2.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both interpretations.", working: "10,2.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$C=2.5(6)+10=15+10=25$.", working: "25", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the cost.", working: "25", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2.5n+10=30 \\Rightarrow n=8$.", working: "n=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fixed 10, rate 2.5 (b) 25 (c) 8",
          },
        },
        {
          id: "mypms5-u2-linear-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the gradient of the line through $(-1,4)$ and $(2,-2)$.",
          response: { type: "numeric", parts: [{ label: "$m$", answer: -2 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Gradient", statement: "$m=\\frac{-2-4}{2-(-1)}=\\frac{-6}{3}=-2$." }],
            steps: [{ reasoning: "Compute the gradient.", working: "-2", marks: 1, markCode: "B" }],
            finalAnswer: "$-2$",
          },
        },
        {
          id: "mypms5-u2-linear-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A line has equation $y=-2x+3$. What is the gradient of a perpendicular line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac12$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$-2$" },
              { id: "d", text: "$\\frac12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular", statement: "Perpendicular gradients multiply to $-1$: $m_2=\\frac12$." }],
            steps: [
              { reasoning: "Negative reciprocal of $-2$ is $\\frac12$.", working: "\\frac12", marks: 1, markCode: "M" },
              { reasoning: "State the gradient.", working: "\\frac12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac12$",
          },
        },
        {
          id: "mypms5-u2-linear-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $0.4x+1.2=3$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4.5 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Linear equation", statement: "Subtract 1.2 then divide by 0.4." }],
            steps: [
              { reasoning: "$0.4x=1.8$.", working: "0.4x=1.8", marks: 1, markCode: "M" },
              { reasoning: "$x=4.5$.", working: "x=4.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4.5$",
          },
        },
        {
          id: "mypms5-u2-linear-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain what the gradient and $y$-intercept represent in the model $V=40+5t$, where $V$ is litres in a tank and $t$ is minutes. State two interpretations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Linear interpretation", statement: "Gradient is rate of change; intercept is initial value." }],
            steps: [
              { reasoning: "Gradient 5 means the tank fills at 5 litres per minute.", working: "5\\text{ L/min}", marks: 1, markCode: "M" },
              { reasoning: "Intercept 40 means the tank starts with 40 litres.", working: "40\\text{ L}", marks: 1, markCode: "M" },
              { reasoning: "State both interpretations clearly.", working: "\\text{rate and initial value}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rate 5 L/min; initial volume 40 L",
          },
        },
      ],
    },
  ],
};
