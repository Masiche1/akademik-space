import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ciem-u2-lesson-2-3",
  code: "2-3",
  title: "Sequences, Functions and Graphs",
  goal: "I CAN find nth terms of arithmetic and geometric sequences, use function notation, and sketch and interpret graphs of linear and quadratic functions.",
  standards: ["0580 2.5", "0580 2.6", "0580 2.7"],
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of numbers following a rule, e.g. 4, 7, 10, 13, ..." },
    { term: "Arithmetic sequence", definition: "A sequence with a constant difference $d$ between consecutive terms; nth term $=a+(n-1)d$." },
    { term: "Geometric sequence", definition: "A sequence with a constant ratio $r$ between consecutive terms; nth term $=ar^{n-1}$." },
    { term: "Function", definition: "A rule that assigns exactly one output to each input, written $f(x)$ or $y=f(x)$." },
    { term: "Composite function", definition: "A function formed by applying one function then another, written $g(f(x))$ — apply $f$ first." },
    { term: "Gradient", definition: "The steepness of a line, equal to change in $y$ divided by change in $x$ between two points." },
    { term: "Intercept", definition: "Where a graph crosses an axis; the $y$-intercept is the value of $c$ in $y=mx+c$." },
  ],
  concepts: [
    {
      id: "ciem-u2-sequences",
      title: "Arithmetic and geometric sequences",
      skill: "Find nth terms, specific terms and which term a value occurs at in arithmetic and geometric sequences.",
      lesson: {
        sections: [
          {
            heading: "Arithmetic sequences",
            body: "Constant difference $d$ between terms. The nth term is $a+(n-1)d$ where $a$ is the first term.\n\nFor 4, 7, 10, 13, ...: $a=4$, $d=3$, nth term $=3n+1$. The 10th term is $3(10)+1=31$.",
          },
          {
            heading: "Geometric sequences",
            body: "Constant ratio $r$ between terms. The nth term is $ar^{n-1}$.\n\nFor 2, 6, 18, 54, ...: $a=2$, $r=3$, nth term $=2\\times3^{n-1}$. The 5th term is $2\\times3^4=162$.",
          },
          {
            heading: "Finding which term",
            body: "Set the nth term formula equal to the target value and solve for $n$. For the arithmetic sequence with nth term $4n+3$, the term 127 occurs when $4n+3=127$, so $n=31$ — the 31st term.",
          },
        ],
        keyFormulas: [
          { name: "Arithmetic nth term", statement: "$a+(n-1)d$" },
          { name: "Geometric nth term", statement: "$ar^{n-1}$" },
          { name: "Sum of arithmetic series", statement: "$S_n=\\frac{n}{2}\\left[2a+(n-1)d\\right]$" },
        ],
        workedExample: {
          problem: "An arithmetic sequence has first term 7 and common difference 4. Find the 20th term and the sum of the first 10 terms.",
          solution: "nth term $=7+(n-1)4=4n+3$. 20th term $=4(20)+3=83$. Sum of first 10: $S_{10}=\\frac{10}{2}[2(7)+9(4)]=5(14+36)=250$.",
        },
      },
      questions: [
        {
          id: "ciem-u2-sequences-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write down the nth term of the sequence 5, 8, 11, 14, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3n+2$" },
              { id: "b", text: "$3n+5$" },
              { id: "c", text: "$5n+3$" },
              { id: "d", text: "$2n+3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Arithmetic nth term", statement: "$a+(n-1)d$; here $a=5$, $d=3$." },
            ],
            steps: [
              { reasoning: "nth term $=5+(n-1)3=5+3n-3=3n+2$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3n+2$",
            commonErrors: ["Writing $3n+5$ by forgetting to subtract $d$ in $(n-1)d$."],
          },
        },
        {
          id: "ciem-u2-sequences-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 10th term of the arithmetic sequence 4, 7, 10, 13, ...",
          response: { type: "numeric", parts: [{ label: "10th term", answer: 31 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Arithmetic nth term", statement: "$a+(n-1)d$ with $a=4$, $d=3$." },
            ],
            steps: [
              { reasoning: "nth term $=4+(n-1)3=3n+1$; substitute $n=10$.", working: "3(10)+1=31", marks: 1, markCode: "M" },
              { reasoning: "State the term.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$31$",
            commonErrors: ["Using $3n+4$ instead of $3n+1$, giving 34."],
          },
        },
        {
          id: "ciem-u2-sequences-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The geometric sequence 2, 6, 18, 54, ... continues in the same pattern. Find its 5th term.",
          response: { type: "numeric", parts: [{ label: "5th term", answer: 162 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Geometric nth term", statement: "$ar^{n-1}$ with $a=2$, $r=3$." },
            ],
            steps: [
              { reasoning: "Identify the common ratio.", working: "r=3", marks: 1, markCode: "M" },
              { reasoning: "Apply the nth term formula.", working: "2\\times3^{5-1}=2\\times3^4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2\\times81=162", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$162$",
            commonErrors: ["Using $2\\times3^5$ (off by one power)."],
          },
        },
        {
          id: "ciem-u2-sequences-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "An arithmetic sequence has first term 7 and common difference 4.",
          parts: [
            { label: "a", prompt: "Write down the nth term of the sequence.", marks: 2 },
            { label: "b", prompt: "Find the 20th term.", marks: 2 },
            { label: "c", prompt: "Find which term of the sequence has value 127.", marks: 3 },
            { label: "d", prompt: "Find the sum of the first 10 terms.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b)", answer: 83 },
              { label: "(c) n", answer: 31 },
              { label: "(d)", answer: 250 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Arithmetic nth term", statement: "$a+(n-1)d$ with $a=7$, $d=4$." },
              { kind: "formula", name: "Sum of arithmetic series", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$" },
            ],
            steps: [
              { part: "a", reasoning: "Apply the nth term formula.", working: "7+(n-1)4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "=4n+3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $n=20$.", working: "4(20)+3=83", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the term.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set the nth term equal to 127.", working: "4n+3=127", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $n$.", working: "4n=124\\Rightarrow n=31", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State which term.", working: "31st\\text{ term}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Apply the sum formula with $n=10$.", working: "S_{10}=\\frac{10}{2}[2(7)+9(4)]", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "=5(14+36)=250", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4n+3$ (b) $83$ (c) 31st term (d) $250$",
            commonErrors: ["In (c) answering 127 instead of the term position.", "In (d) using $\\frac{n}{2}[a+l]$ incorrectly or forgetting the brackets."],
            examinerNote: "Part (d) also accepts $S_{10}=\\frac{10}{2}(7+83)=250$ using first and last term.",
          },
        },
      ],
    },
    {
      id: "ciem-u2-functions-graphs",
      title: "Functions and graphs",
      skill: "Use function notation, find composite functions, and interpret linear and quadratic graphs.",
      lesson: {
        sections: [
          {
            heading: "Function notation",
            body: "$f(x)=2x+1$ means 'the function $f$ applied to $x$'. To evaluate, substitute: $f(3)=2(3)+1=7$. For $f(x)=x^2-3$, $f(-2)=(-2)^2-3=1$ — bracket the input before squaring.",
          },
          {
            heading: "Composite functions",
            body: "$g(f(x))$ means apply $f$ **first**, then $g$ to the result. With $f(x)=2x-1$ and $g(x)=x^2+3$: $g(f(2))=g(3)=3^2+3=12$. The order matters — $f(g(x))$ is generally different.",
          },
          {
            heading: "Graphs of functions",
            body: "For $y=mx+c$, $m$ is the gradient and $c$ the $y$-intercept. To sketch a quadratic $y=ax^2+bx+c$, find where it crosses the axes: set $x=0$ for the $y$-intercept and solve $y=0$ for the $x$-intercepts. A positive $a$ gives a U-shape; negative gives an upside-down U.",
          },
        ],
        keyFormulas: [
          { name: "Linear function", statement: "$f(x)=mx+c$: gradient $m$, $y$-intercept $c$." },
          { name: "Composite", statement: "$g(f(x))$: evaluate $f$ first, then $g$." },
        ],
        workedExample: {
          problem: "Given $f(x)=3x-2$ and $g(x)=x^2$, find $g(f(2))$.",
          solution: "$f(2)=3(2)-2=4$. Then $g(f(2))=g(4)=4^2=16$.",
        },
      },
      questions: [
        {
          id: "ciem-u2-functions-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Given $f(x)=2x+1$, find $f(3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function evaluation", statement: "Substitute the input into every $x$ in the rule." },
            ],
            steps: [
              { reasoning: "Substitute $x=3$.", working: "f(3)=2(3)+1=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $7$",
            commonErrors: ["Computing $2\\times3+1$ as $2\\times(3+1)=8$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Given $f(x)=x^2-3$, find $f(-2)$.",
          response: { type: "numeric", parts: [{ label: "f(-2)", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function evaluation", statement: "Bracket negative inputs before squaring." },
            ],
            steps: [
              { reasoning: "Substitute $x=-2$ with brackets.", working: "f(-2)=(-2)^2-3=4-3", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
            commonErrors: ["Computing $-2^2=-4$ instead of $(-2)^2=4$, giving $-7$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given $f(x)=2x-1$ and $g(x)=x^2+3$, find $g(f(2))$.",
          response: { type: "numeric", parts: [{ label: "g(f(2))", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite function", statement: "$g(f(x))$ means evaluate $f$ first, then apply $g$ to the result." },
            ],
            steps: [
              { reasoning: "Evaluate the inner function first.", working: "f(2)=2(2)-1=3", marks: 1, markCode: "M" },
              { reasoning: "Apply $g$ to that result.", working: "g(3)=3^2+3=12", marks: 1, markCode: "M" },
              { reasoning: "State the value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Computing $f(g(2))$ instead — order matters.", "Evaluating $g(2)$ first and then applying $f$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Let $f(x)=3x-2$ and $g(x)=x^2$.",
          parts: [
            { label: "a", prompt: "Find $f(5)$.", marks: 1 },
            { label: "b", prompt: "Find $g(f(2))$.", marks: 3 },
            { label: "c", prompt: "Solve $f(x)=g(x)$.", marks: 3 },
            { label: "d", prompt: "The point $(k, 10)$ lies on the graph of $y=f(x)$. Find $k$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 13 },
              { label: "(b)", answer: 16 },
              { label: "(c) x smaller", answer: 1 },
              { label: "(c) x larger", answer: 2 },
              { label: "(d) k", answer: 4 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite function", statement: "$g(f(x))$: evaluate $f$ first, then $g$." },
              { kind: "principle", name: "Intersection of graphs", statement: "$f(x)=g(x)$ gives the $x$-coordinates where the two graphs meet." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $x=5$.", working: "f(5)=3(5)-2=13", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Evaluate $f(2)$ first.", working: "f(2)=3(2)-2=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply $g$ to the result.", working: "g(4)=4^2=16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set the functions equal.", working: "3x-2=x^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rearrange into standard quadratic form.", working: "x^2-3x+2=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Factorise and solve.", working: "(x-1)(x-2)=0\\Rightarrow x=1,\\ x=2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The point lies on $y=f(x)$, so $f(k)=10$.", working: "3k-2=10", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for $k$.", working: "k=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $13$ (b) $16$ (c) $x=1$ or $x=2$ (d) $k=4$",
            commonErrors: ["In (b) computing $g(f(x))$ as $f(g(x))$.", "In (c) sign error rearranging to $x^2+3x+2=0$."],
            examinerNote: "Part (c) requires both solutions; part (d) must use $f$, not $g$.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u2-sequences-functions-notes",
      title: "Sequences, functions and graphs — revision notes",
      summary: "Arithmetic and geometric sequences, function notation, composite functions and graph interpretation.",
      sections: [
        {
          heading: "Arithmetic sequences",
          body: "Constant difference $d$. nth term $=a+(n-1)d$.\n\nFor 4, 7, 10, 13, ...: $a=4$, $d=3$, nth term $=3n+1$.\n\nSum of first $n$ terms: $S_n=\\frac{n}{2}[2a+(n-1)d]$, equivalently $\\frac{n}{2}(\\text{first}+\\text{last})$.",
        },
        {
          heading: "Geometric sequences",
          body: "Constant ratio $r$. nth term $=ar^{n-1}$.\n\nFor 2, 6, 18, 54, ...: $a=2$, $r=3$, nth term $=2\\times3^{n-1}$. 5th term $=2\\times3^4=162$.",
        },
        {
          heading: "Which term?",
          body: "Set nth term $=$ target and solve for $n$. The answer is the **position**, not the value.\n\n**Worked example.** nth term $4n+3=127 \\Rightarrow n=31$, so 127 is the 31st term.",
        },
        {
          heading: "Functions",
          body: "$f(x)=2x+1$: substitute the input everywhere $x$ appears. $f(-2)=(-2)^2-3=1$ for $f(x)=x^2-3$ — always bracket negatives.\n\nComposite $g(f(x))$: apply $f$ **first**. $g(f(2))$ with $f(x)=2x-1$, $g(x)=x^2+3$: $f(2)=3$, $g(3)=12$.",
        },
        {
          heading: "Graphs",
          body: "$y=mx+c$: gradient $m=\\frac{\\Delta y}{\\Delta x}$, $y$-intercept $c$. For quadratics, find axis crossings: $y$-intercept at $x=0$, $x$-intercepts where $y=0$. $f(x)=g(x)$ locates intersection points — solve the resulting equation.",
        },
        {
          heading: "Exam technique",
          body: "- Sequence questions: identify $a$, $d$ or $r$ explicitly before substituting — method marks depend on it.\n- Composite functions: the inner function is evaluated first; writing the correct order earns the M mark.\n- 'Which term' answers need the position $n$, not the value.",
        },
      ],
    },
  ],
};
