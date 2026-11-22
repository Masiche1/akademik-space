import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypme5-u2-lesson-2-3",
  code: "2-3",
  title: "Exponential, Logarithmic and Piecewise Functions",
  goal: "I CAN sketch exponential and logarithmic graphs, work with piecewise and absolute value functions, and solve equations involving these functions.",
  standards: [
    "MYP Maths: Functions",
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Exponential function", definition: "$y=ab^x$; grows ($b>1$) or decays ($0<b<1$); always positive, horizontal asymptote $y=0$." },
    { term: "Logarithmic function", definition: "$y=a\\log_b(x-h)+k$; inverse of exponential; vertical asymptote at $x=h$, domain $x>h$." },
    { term: "Piecewise function", definition: "A function defined by different expressions on different intervals, e.g. $f(x)=\\begin{cases}x+1 & x<0\\\\ x^2 & x\\ge0\\end{cases}$" },
    { term: "Absolute value function", definition: "$y=|f(x)|$ reflects negative parts above $x$-axis; $y=|x-a|$ has vertex at $(a,0)$." },
    { term: "One-to-one", definition: "A function where each output comes from exactly one input; required for inverse to exist." },
  ],
  concepts: [
    {
      id: "mypme5-u2-explog",
      title: "Exponential and logarithmic functions",
      skill: "Sketch and analyse exponential and logarithmic graphs, including transformations and inverses.",
      lesson: {
        sections: [
          {
            heading: "Exponential graphs",
            body: "$y=ab^x$: passes through $(0,a)$; horizontal asymptote $y=0$; grows without bound as $x\\to\\infty$ if $b>1$, approaches 0 if $0<b<1$. Transformations: $y=ab^{x-h}+k$ shifts.",
          },
          {
            heading: "Logarithmic graphs",
            body: "Inverse of exponential: $y=\\log_b x$ is reflection of $y=b^x$ in $y=x$. Vertical asymptote $x=0$; passes through $(1,0)$; domain $x>0$, range all reals. $y=a\\log_b(x-h)+k$ shifts asymptote to $x=h$.",
          },
          {
            heading: "Solving equations",
            body: "Exponential equations: isolate $b^x$, take logs. Logarithmic equations: combine using log laws, convert to exponential form. Always check solutions are in the domain.",
          },
        ],
        keyFormulas: [
          { name: "Exp asymptote", statement: "$y=k$ for $y=ab^{x-h}+k$" },
          { name: "Log domain", statement: "$x>h$ for $y=a\\log_b(x-h)+k$" },
          { name: "Log laws", statement: "$\\log(xy)=\\log x+\\log y$" },
        ],
        workedExample: {
          problem: "Sketch key features of $y=2\\log_3(x-1)+4$.",
          solution: "VA at $x=1$; passes through $(2,4)$ and $(4,\\approx6.52)$; domain $x>1$; increasing.",
        },
      },
      questions: [
        {
          id: "mypme5-u2-explog-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the horizontal asymptote of $y=3(2)^x-5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=3$" },
              { id: "b", text: "$y=5$" },
              { id: "c", text: "$y=0$" },
              { id: "d", text: "$y=-5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Asymptote", statement: "$y=k$ for $y=ab^x+k$; here $k=-5$." },
            ],
            steps: [
              { reasoning: "As $x\\to-\\infty$, $2^x\\to0$, so $y\\to-5$.", working: "y=-5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $y=-5$",
            commonErrors: ["Using $y=0$ — forgetting vertical shift."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-explog-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the domain of $y=\\log_2(x-3)+1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>3$" },
              { id: "b", text: "$x\\ge3$" },
              { id: "c", text: "All real $x$" },
              { id: "d", text: "$x>1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Log domain", statement: "Need $x-3>0$ → $x>3$." },
            ],
            steps: [
              { reasoning: "$x-3>0$ → $x>3$ (strict — log undefined at 0).", working: "x>3", marks: 1, markCode: "M" },
              { reasoning: "State the domain.", working: "x>3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x>3$",
            commonErrors: ["Using $\\ge$ — log of 0 is undefined."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-explog-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $\\log_2(x)+\\log_2(x-2)=3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-2$" },
              { id: "b", text: "$x=3$" },
              { id: "c", text: "$x=8$" },
              { id: "d", text: "$x=4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Log laws", statement: "$\\log_2(x(x-2))=3$ → $x(x-2)=8$ → $x^2-2x-8=0$ → $(x-4)(x+2)=0$; reject $x=-2$ (domain)." },
            ],
            steps: [
              { reasoning: "$\\log_2[x(x-2)]=3$ → $x(x-2)=8$ → $x^2-2x-8=0$.", working: "x^2-2x-8=0", marks: 1, markCode: "M" },
              { reasoning: "$(x-4)(x+2)=0$ → $x=4$ or $x=-2$; $x=-2$ invalid ($\\log$ of negative).", working: "x=4", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$",
            commonErrors: ["Accepting $x=-2$ without checking domain."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-explog-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "$f(x)=2^x$ and $g(x)=\\log_2 x$.",
          parts: [
            { label: "a", prompt: "State the domain and range of each function.", marks: 2 },
            { label: "b", prompt: "Verify that $g=f^{-1}$ by computing $g(f(x))$ and $f(g(x))$.", marks: 2 },
            { label: "c", prompt: "Solve $f(x)=16$.", marks: 1 },
            { label: "d", prompt: "Solve $g(x)=5$.", marks: 1 },
            { label: "e", prompt: "Sketch the relationship between the two graphs.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse functions", statement: "Exp and log with same base are mutual inverses; graphs reflect in $y=x$." },
            ],
            steps: [
              { part: "a", reasoning: "$f$: domain all reals, range $y>0$; $g$: domain $x>0$, range all reals.", working: "f:\\mathbb{R}\\to(0,\\infty);g:(0,\\infty)\\to\\mathbb{R}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State domains and ranges.", working: "\\text{domains/ranges}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$g(f(x))=\\log_2(2^x)=x$; $f(g(x))=2^{\\log_2 x}=x$ for $x>0$.", working: "x,x", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both compositions equal $x$ → inverses.", working: "\\text{verified}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2^x=16=2^4$ → $x=4$.", working: "x=4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\log_2 x=5$ → $x=2^5=32$.", working: "x=32", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Graphs are reflections in $y=x$; $f$ increasing concave up through $(0,1)$; $g$ increasing concave down through $(1,0)$.", working: "\\text{reflection in }y=x", marks: 1, markCode: "M" },
              { part: "e", reasoning: "State key features.", working: "\\text{mirror images}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f$: $\\mathbb{R}\\to(0,\\infty)$; $g$: $(0,\\infty)\\to\\mathbb{R}$ (b) verified (c) $x=4$ (d) $x=32$ (e) reflections in $y=x$",
            commonErrors: ["In (d), computing $\\log_2 5$ instead of solving for $x$."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), A1 for (c), A1 for (d), M1 A1 for (e).",
          },
        },
        {
          id: "mypme5-u2-explog-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the domain of $y=\\log_2 x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real $x$" },
              { id: "b", text: "$x\\ge0$" },
              { id: "c", text: "$x>1$" },
              { id: "d", text: "$x>0$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Log domain", statement: "Logarithm argument must be positive: $x>0$." },
            ],
            steps: [
              { reasoning: "Argument $x$ must be positive.", working: "x>0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $x>0$",
            commonErrors: ["Including $x=0$ where $\\log_2 0$ is undefined."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-explog-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\log_3 27$.",
          response: { type: "numeric", parts: [{ label: "$\\log_3 27$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$3^3=27$ → $\\log_3 27=3$." },
            ],
            steps: [
              { reasoning: "$3^3=27$ → answer 3.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 9 or 27."],
          },
        },
        {
          id: "mypme5-u2-explog-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "How is the graph of $y=2^x$ transformed to give $y=2^{x-1}+3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stretch SF 2 and translate 3 up" },
              { id: "b", text: "Translate 3 units right and 1 unit up" },
              { id: "c", text: "Translate 1 unit right and 3 units up" },
              { id: "d", text: "Translate 1 unit left and 3 units up" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Exponential transformations", statement: "$2^{x-1}$ shifts right 1; $+3$ shifts up 3." },
            ],
            steps: [
              { reasoning: "$(x-1)$ in exponent → right 1; $+3$ outside → up 3.", working: "\\text{right }1,\\text{ up }3", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Right 1, up 3",
            commonErrors: ["Describing a left shift for $(x-1)$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-explog-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3^x=10$, giving $x$ to 3 s.f.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 2.096, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Logarithmic solution", statement: "$x=\\frac{\\ln10}{\\ln3}=\\frac{2.3026}{1.0986}=2.096$." },
            ],
        steps: [
              { reasoning: "$x=\\frac{\\ln10}{\\ln3}=2.096$.", working: "2.096", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "x=2.096", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx2.096$",
            commonErrors: ["Inverting the fraction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-explog-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "The functions $y=e^x$ and $y=\\ln x$ are related how?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\ln x$ is the derivative of $e^x$" },
              { id: "b", text: "They are perpendicular at all points" },
              { id: "c", text: "They are the same function" },
              { id: "d", text: "They are inverse functions — reflections of each other in $y=x$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Inverse functions", statement: "$\\ln(e^x)=x$ and $e^{\\ln x}=x$; graphs are mirror images in $y=x$." },
            ],
            steps: [
              { reasoning: "Each undoes the other → inverse functions.", working: "\\ln(e^x)=x", marks: 1, markCode: "M" },
              { reasoning: "Inverse graphs reflect in $y=x$.", working: "y=x\\text{ reflection}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Inverse functions, reflections in $y=x$",
            commonErrors: ["Confusing $\\ln$ with $\\log_{10}$ or thinking they're identical."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-explog-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\log_4 64$.",
          response: { type: "numeric", parts: [{ label: "$\\log_4 64$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$4^3=64$ → $\\log_4 64=3$." },
            ],
            steps: [
              { reasoning: "$4^3=64$ → 3.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 16 or 8."],
          },
        },
        {
          id: "mypme5-u2-explog-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\ln x=2$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 7.389, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Natural logarithm", statement: "$\\ln x=2$ → $x=e^2\\approx7.389$." },
            ],
            steps: [
              { reasoning: "$x=e^2\\approx7.389$.", working: "e^2", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "7.389", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=e^2\\approx7.389$",
            commonErrors: ["Writing $x=2e$ or $x=\\ln2$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-explog-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $2^{x+1}=5^x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 0.757, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Logarithmic solution", statement: "$(x+1)\\ln2=x\\ln5$ → $x(\\ln5-\\ln2)=\\ln2$ → $x=\\frac{\\ln2}{\\ln(5/2)}=0.757$." },
            ],
            steps: [
              { reasoning: "Take logs: $(x+1)\\ln2=x\\ln5$ → $\\ln2=x(\\ln5-\\ln2)=x\\ln2.5$.", working: "x=\\frac{\\ln2}{\\ln2.5}", marks: 1, markCode: "M" },
              { reasoning: "$x=\\frac{0.6931}{0.9163}=0.7565\\approx0.757$.", working: "0.757", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=0.757", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx0.757$",
            commonErrors: ["Taking logs incorrectly: $(x+1)\\ln2=x\\ln5$ requires care with the $+1$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-explog-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Let $f(x)=\\log_2 x$ and $g(x)=2^x$.",
          parts: [
            { label: "a", prompt: "State the domain of each function.", marks: 1 },
            { label: "b", prompt: "Verify that $f$ and $g$ are inverse functions.", marks: 2 },
            { label: "c", prompt: "Solve $\\log_3(x+1)=2$.", marks: 2 },
            { label: "d", prompt: "Solve $4^x=2^{x+6}$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Inverse functions", statement: "$f(g(x))=x$ and $g(f(x))=x$ confirm inverses." },
            ],
            steps: [
              { part: "a", reasoning: "Domain of $f$: $x>0$; domain of $g$: all real $x$.", working: "x>0\\text{ and }\\mathbb{R}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$f(g(x))=\\log_2(2^x)=x$ for $x\\in\\mathbb{R}$; range of $g$ is $(0,\\infty)$ = domain of $f$.", working: "f(g(x))=x", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$g(f(x))=2^{\\log_2 x}=x$ for $x>0$ → confirmed inverses.", working: "g(f(x))=x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$x+1=3^2=9$ → $x=8$.", working: "x=8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check $x+1=9>0$ ✓; state solution.", working: "x=8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$2^{2x}=2^{x+6}$ → $2x=x+6$ → $x=6$.", working: "x=6", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $x>0$; $\\mathbb{R}$ (b) verified inverses (c) $x=8$ (d) $x=6$",
            commonErrors: ["In (c), writing $x+1=\\log_3 2$ instead of exponentiating."],
            examinerNote: "B1 for (a), M1 A1 for (b), M1 A1 for (c), M1 for (d).",
          },
        },
        {
          id: "mypme5-u2-explog-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the vertical asymptote of $y=\\log_2(x-1)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-1$" },
              { id: "b", text: "$x=1$" },
              { id: "c", text: "$x=0$" },
              { id: "d", text: "$y=0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Log asymptote", statement: "Argument $x-1>0$ requires $x>1$; asymptote at boundary $x=1$." },
            ],
            steps: [
              { reasoning: "Domain boundary at $x=1$ → vertical asymptote.", working: "x=1", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $x=1$",
            commonErrors: ["Answering $x=0$ (the asymptote of $\\log_2 x$)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-explog-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The graph of $y=e^x$ is transformed to $y=e^x-2$. What are the new horizontal asymptote and the image of the point $(0,1)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Asymptote $y=0$; image $(0,-1)$" },
              { id: "b", text: "Asymptote $y=-2$; image $(0,-1)$" },
              { id: "c", text: "Asymptote $y=2$; image $(0,3)$" },
              { id: "d", text: "Asymptote $y=-2$; image $(0,1)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Exponential transformations", statement: "$-2$ shifts down 2: asymptote $y=-2$; point $(0,1)\\to(0,-1)$." },
            ],
            steps: [
              { reasoning: "Original asymptote $y=0$ shifts to $y=-2$; point maps to $(0,1-2)=(0,-1)$.", working: "y=-2,(0,-1)", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $y=-2$; $(0,-1)$",
            commonErrors: ["Forgetting the asymptote moves with the shift."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u2-explog-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A bacteria culture grows as $N(t)=N_0e^{0.4t}$ where $t$ is in hours.",
          parts: [
            { label: "a", prompt: "Interpret the constant $0.4$.", marks: 1 },
            { label: "b", prompt: "Find the doubling time.", marks: 2 },
            { label: "c", prompt: "If $N_0=500$, find $N(3)$.", marks: 1 },
            { label: "d", prompt: "Find the time for the culture to reach 5000 cells.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Continuous growth", statement: "$N=N_0e^{rt}$; doubling time $=\\frac{\\ln2}{r}$." },
            ],
            steps: [
              { part: "a", reasoning: "$r=0.4$ is the continuous growth rate (≈49.2% per hour effective).", working: "r=0.4", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Doubling time $=\\frac{\\ln2}{0.4}=\\frac{0.6931}{0.4}=1.733$ hours.", working: "1.733\\text{ h}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the doubling time.", working: "1.73\\text{ h}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$N(3)=500e^{1.2}=500(3.3201)=1660$.", working: "1660", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$500e^{0.4t}=5000$ → $e^{0.4t}=10$ → $t=\\frac{\\ln10}{0.4}=5.76$ hours.", working: "t=5.76", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) growth rate 0.4/h (b) 1.73 h (c) 1660 (d) 5.76 h",
            commonErrors: ["In (d), dividing by $\\ln10$ instead of multiplying by $0.4$ correctly — check $0.4t=\\ln10$."],
            examinerNote: "R1 for (a), M1 A1 for (b), M1 for (c), M1 for (d).",
          },
        },
      ],
    },
    {
      id: "mypme5-u2-piecewise",
      title: "Piecewise and Absolute Value Functions",
      skill: "Evaluate and graph piecewise functions and absolute value functions, finding key points and solving equations.",
      lesson: {
        sections: [
          {
            heading: "Piecewise functions",
            body: "Defined by different rules on different intervals. Evaluate by checking which interval $x$ falls in. At breakpoints, check both expressions for continuity. Example: $f(x)=x+1$ for $x<0$; $f(x)=x^2$ for $x\\ge0$.",
          },
          {
            heading: "Absolute value",
            body: "$y=|x|$ is V-shaped with vertex at origin. $y=|x-a|$ vertex at $(a,0)$. $y=a|x-h|+k$ vertex at $(h,k)$. To solve $|f(x)|=c$: solve $f(x)=c$ and $f(x)=-c$ separately.",
          },
          {
            heading: "Graphs of piecewise functions",
            body: "Plot each piece only on its domain; check endpoints (open/closed circles). Look for jumps, corners, and continuity at boundaries.",
          },
        ],
        keyFormulas: [
          { name: "Absolute solve", statement: "$|f(x)|=c \\Rightarrow f(x)=\\pm c$" },
          { name: "Vertex form", statement: "$y=a|x-h|+k$ vertex $(h,k)$" },
          { name: "Piecewise eval", statement: "Check interval first, then apply rule" },
        ],
        workedExample: {
          problem: "For $f(x)=\\begin{cases}2x & x<1\\\\ x+3 & x\\ge1\\end{cases}$, find $f(0)$ and $f(2)$.",
          solution: "$f(0)=2(0)=0$ (since $0<1$); $f(2)=2+3=5$ (since $2\\ge1$).",
        },
      },
      questions: [
        {
          id: "mypme5-u2-piece-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x)=|x-3|$, what is $f(5)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "8" },
              { id: "c", text: "2" },
              { id: "d", text: "-2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Absolute value", statement: "$f(5)=|5-3|=|2|=2$." },
            ],
            steps: [
              { reasoning: "$|5-3|=2$.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 2",
            commonErrors: ["Computing $5-3=2$ but forgetting absolute value — same result here by luck."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-piece-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $|2x-1|=5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-2$ only" },
              { id: "b", text: "$x=3$ only" },
              { id: "c", text: "$x=\\frac{5}{2}$" },
              { id: "d", text: "$x=3$ or $x=-2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Absolute solve", statement: "$2x-1=5$ → $x=3$; $2x-1=-5$ → $x=-2$." },
            ],
            steps: [
              { reasoning: "$2x-1=\\pm5$ → $x=3$ or $x=-2$.", working: "x=3,-2", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=3,-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ or $x=-2$",
            commonErrors: ["Forgetting the negative case."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-piece-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $f(x)=\\begin{cases}x^2 & x<2\\\\ 4x-4 & x\\ge2\\end{cases}$, is $f$ continuous at $x=2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No, the two pieces do not connect at $x=2$" },
              { id: "b", text: "No, left gives 0" },
              { id: "c", text: "Yes, both give $f(2)=4$" },
              { id: "d", text: "Cannot determine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Continuity", statement: "Check both pieces at boundary: $\\lim_{x\\to2^-}x^2=4$; $f(2)=4(2)-4=4$; equal → continuous." },
            ],
            steps: [
              { reasoning: "Left limit: $2^2=4$; right value: $4(2)-4=4$; equal → continuous.", working: "4=4", marks: 1, markCode: "M" },
              { reasoning: "Both sides agree at $x=2$.", working: "\\text{continuous}", marks: 1, markCode: "M" },
              { reasoning: "State conclusion.", working: "\\text{continuous}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes, continuous",
            commonErrors: ["Checking only one side of the boundary."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-piece-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "$f(x)=\\begin{cases}-x & x<0\\\\ x^2 & 0\\le x\\le2\\\\ 4 & x>2\\end{cases}$",
          parts: [
            { label: "a", prompt: "Evaluate $f(-3)$, $f(1)$, $f(3)$.", marks: 2 },
            { label: "b", prompt: "Find all $x$ where $f(x)=4$.", marks: 2 },
            { label: "c", prompt: "Find the range of $f$.", marks: 2 },
            { label: "d", prompt: "Sketch the graph, indicating key points.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Piecewise analysis", statement: "Evaluate each piece on its interval; range = union of piece ranges." },
            ],
            steps: [
              { part: "a", reasoning: "$f(-3)=-(-3)=3$; $f(1)=1^2=1$; $f(3)=4$.", working: "3,1,4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three values.", working: "3,1,4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$-x=4$ → $x=-4$ (valid, $x<0$); $x^2=4$ → $x=\\pm2$ — $x=2$ valid ($0\\le x\\le2$), $x=-2$ invalid; $4$ piece: all $x>2$.", working: "x=-4,x=2,x>2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State all solutions.", working: "x=-4,x=2,x>2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Piece 1 ($x<0$): $-x>0$ → $(0,\\infty)$; piece 2 ($0\\le x\\le2$): $[0,4]$; piece 3: $\\{4\\}$. Union: $[0,\\infty)$.", working: "y\\ge0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the range.", working: "y\\ge0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Graph: line $y=-x$ for $x<0$ (open at origin), parabola $y=x^2$ from $(0,0)$ to $(2,4)$, horizontal line $y=4$ for $x>2$ (open at $(2,4)$).", working: "\\text{3 pieces}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Key points and shapes correct.", working: "\\text{graph}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3,1,4 (b) $x=-4$, $x=2$, $x>2$ (c) $y\\ge0$ (d) three-piece graph",
            commonErrors: ["In (b), accepting $x=-2$ for $x^2=4$ — outside piece domain."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u2-piece-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=|x-3|$, find $f(1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "-2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "$|1-3|=|-2|=2$." },
            ],
            steps: [
              { reasoning: "$|1-3|=|-2|=2$.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 2",
            commonErrors: ["Answering $-2$ — absolute value is never negative."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u2-piece-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x)=\\begin{cases}x+1 & x<0\\\\ 2x & x\\ge0\\end{cases}$, find $f(3)$.",
          response: { type: "numeric", parts: [{ label: "$f(3)$", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Piecewise function", statement: "$x=3\\ge0$ → use $2x$: $f(3)=6$." },
            ],
            steps: [
              { reasoning: "$3\\ge0$ → $f(3)=2(3)=6$.", working: "6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "6",
            commonErrors: ["Using the wrong piece: $3+1=4$."],
          },
        },
        {
          id: "mypme5-u2-piece-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is $f(x)=\\begin{cases}x+2 & x<1\\\\ 2x & x\\ge1\\end{cases}$ continuous at $x=1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes — $f(1)=2$ exists" },
              { id: "b", text: "Yes — both pieces give 3" },
              { id: "c", text: "No — the function is undefined at $x=1$" },
              { id: "d", text: "No — left limit is 3, right value is 2" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Continuity", statement: "Continuous at $x=1$ requires left limit = right limit = $f(1)$." },
            ],
            steps: [
              { reasoning: "Left limit $=1+2=3$; right value $f(1)=2(1)=2$; $3\\ne2$ → discontinuous jump.", working: "3\\ne2", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** No — jump from 3 to 2",
            commonErrors: ["Only checking that $f(1)$ exists."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-piece-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $|2x-6|=4$.",
          response: { type: "numeric", parts: [
            { label: "$x$", answer: 1 },
            { label: "$x$", answer: 5 },
          ], unordered: true },
          markscheme: {
            principles: [
              { kind: "technique", name: "Absolute value equations", statement: "$|A|=k$ → $A=k$ or $A=-k$." },
            ],
            steps: [
              { reasoning: "$2x-6=4$ → $x=5$; $2x-6=-4$ → $x=1$.", working: "x=5\\text{ or }x=1", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=1,5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$ or $x=5$",
            commonErrors: ["Missing the negative case."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-piece-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which graph best represents $y=|x|+1$ compared with $y=|x+1|$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=|x|+1$ has vertex $(0,1)$; $y=|x+1|$ has vertex $(-1,0)$" },
              { id: "b", text: "$y=|x+1|$ is $y=|x|+1$ shifted left" },
              { id: "c", text: "$y=|x|+1$ has vertex $(-1,0)$; $y=|x+1|$ has vertex $(0,1)$" },
              { id: "d", text: "Both have vertex $(0,1)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Absolute value graphs", statement: "$y=|x-h|+k$ has vertex $(h,k)$; $+1$ outside shifts up, $x+1$ inside shifts left." },
            ],
            steps: [
              { reasoning: "$y=|x|+1$: vertex where $x=0$ → $(0,1)$.", working: "(0,1)", marks: 1, markCode: "M" },
              { reasoning: "$y=|x+1|=|x-(-1)|$: vertex $(-1,0)$.", working: "(-1,0)", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Vertices $(0,1)$ and $(-1,0)$",
            commonErrors: ["Thinking $|x+1|$ shifts the vertex right."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-piece-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x)=\\begin{cases}3x & x\\le2\\\\ x+5 & x>2\\end{cases}$, find $f(2)$.",
          response: { type: "numeric", parts: [{ label: "$f(2)$", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Piecewise boundary", statement: "$x=2$ satisfies $x\\le2$ → use $3x$: $f(2)=6$." },
            ],
            steps: [
              { reasoning: "$2\\le2$ → $f(2)=3(2)=6$.", working: "6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "6",
            commonErrors: ["Using the other piece: $2+5=7$."],
          },
        },
        {
          id: "mypme5-u2-piece-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $|x+2|=5$.",
          response: { type: "numeric", parts: [
            { label: "$x$", answer: 3 },
            { label: "$x$", answer: -7 },
          ], unordered: true },
          markscheme: {
            principles: [
              { kind: "technique", name: "Absolute value equations", statement: "$x+2=5$ → $x=3$; $x+2=-5$ → $x=-7$." },
            ],
            steps: [
              { reasoning: "$x+2=\\pm5$ → $x=3$ or $x=-7$.", working: "x=3,-7", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=3\\text{ or }-7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ or $x=-7$",
            commonErrors: ["Only solving $x+2=5$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-piece-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $f(x)=\\begin{cases}x^2 & x<1\\\\ 3x-2 & x\\ge1\\end{cases}$, solve $f(x)=4$.",
          response: { type: "numeric", parts: [
            { label: "$x$", answer: -2 },
            { label: "$x$", answer: 2 },
          ], unordered: true },
          markscheme: {
            principles: [
              { kind: "technique", name: "Piecewise equations", statement: "Solve each piece separately and keep only solutions in that piece's domain." },
            ],
            steps: [
              { reasoning: "Piece 1 ($x<1$): $x^2=4$ → $x=\\pm2$; only $x=-2$ is valid.", working: "x=-2", marks: 1, markCode: "M" },
              { reasoning: "Piece 2 ($x\\ge1$): $3x-2=4$ → $x=2$; valid.", working: "x=2", marks: 1, markCode: "M" },
              { reasoning: "Solutions: $x=-2$ and $x=2$.", working: "x=-2,2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-2$ or $x=2$",
            commonErrors: ["Accepting $x=2$ from the quadratic piece where it is not in the domain."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-piece-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "$f(x)=\\begin{cases}2x+1 & x<3\\\\ 10-x & x\\ge3\\end{cases}$",
          parts: [
            { label: "a", prompt: "Find $f(1)$, $f(3)$ and $f(5)$.", marks: 2 },
            { label: "b", prompt: "Is $f$ continuous at $x=3$? Justify.", marks: 2 },
            { label: "c", prompt: "Solve $f(x)=7$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Piecewise functions", statement: "Use the correct piece for each input; continuity requires matching limits." },
            ],
            steps: [
              { part: "a", reasoning: "$f(1)=2(1)+1=3$; $f(3)=10-3=7$; $f(5)=10-5=5$.", working: "3,7,5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three values.", working: "f(1)=3,f(3)=7,f(5)=5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Left limit: $2(3)+1=7$; right value: $10-3=7$; equal → continuous.", working: "7=7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude continuity at $x=3$.", working: "\\text{continuous}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Piece 1: $2x+1=7$ → $x=3$, but $x<3$ fails. Piece 2: $10-x=7$ → $x=3$, which satisfies $x\\ge3$.", working: "x=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the solution.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3, 7, 5 (b) yes, continuous (c) $x=3$",
            commonErrors: ["In (c), accepting $x=3$ from piece 1 where the domain excludes it — must check domains."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme5-u2-piece-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $|-5|+|3-7|$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "9" },
              { id: "c", text: "-9" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "$|-5|=5$ and $|3-7|=|-4|=4$; sum $=9$." },
            ],
            steps: [
              { reasoning: "$5+4=9$.", working: "9", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 9",
            commonErrors: ["Computing $|3-7|=-4$ instead of 4."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u2-piece-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is the minimum value of $f(x)=|x-2|+|x+2|$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4, for all $x$ in $[-2,2]$" },
              { id: "b", text: "2, at $x=2$" },
              { id: "c", text: "0, at $x=0$" },
              { id: "d", text: "No minimum — it is unbounded" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sum of absolute values", statement: "For $x\\in[-2,2]$: $|x-2|+|x+2|=(2-x)+(x+2)=4$ — constant." },
            ],
            steps: [
              { reasoning: "Between the zeros $-2$ and $2$, the expression equals 4 constantly.", working: "4\\text{ on }[-2,2]", marks: 1, markCode: "M" },
              { reasoning: "Outside the interval it grows (e.g. $x=3$: $1+5=6$), so minimum is 4.", working: "\\min=4", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Minimum 4 on $[-2,2]$",
            commonErrors: ["Evaluating only at $x=0$ and getting $2+2=4$ — correct value but incomplete reasoning."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u2-piece-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "$f(x)=\\begin{cases}x^2-1 & x\\le2\\\\ x+1 & x>2\\end{cases}$",
          parts: [
            { label: "a", prompt: "Find $f(-2)$, $f(0)$ and $f(3)$.", marks: 2 },
            { label: "b", prompt: "Is $f$ continuous at $x=2$? Justify.", marks: 1 },
            { label: "c", prompt: "Solve $f(x)=3$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Piecewise functions", statement: "Use the correct piece per domain; check continuity by comparing limits at the boundary." },
            ],
            steps: [
              { part: "a", reasoning: "$f(-2)=4-1=3$; $f(0)=0-1=-1$; $f(3)=3+1=4$.", working: "3,-1,4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three values.", working: "f(-2)=3,f(0)=-1,f(3)=4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Left limit $=2^2-1=3$; right limit $=2+1=3$ → continuous.", working: "3=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Piece 1: $x^2-1=3$ → $x=\\pm2$; both $\\le2$ valid. Piece 2: $x+1=3$ → $x=2$, but $x>2$ fails.", working: "x=\\pm2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solutions $x=-2$ and $x=2$.", working: "x=-2,2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3, -1, 4 (b) yes, continuous (c) $x=-2$ or $x=2$",
            commonErrors: ["Accepting $x=2$ from piece 2 where $x>2$ excludes it — but $x=2$ is still a solution via piece 1."],
            examinerNote: "M1 A1 for (a), M1 for (b), M1 A1 for (c).",
          },
        },
      ],
    },
  ],
};
