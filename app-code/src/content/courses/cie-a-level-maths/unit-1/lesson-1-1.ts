import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "cial-m-u1-lesson-1-1",
  code: "1-1",
  title: "Function notation, domain and range",
  goal: "I CAN use function notation correctly and determine the domain and range of functions.",
  standards: ["9709 P1: functions and graphs"],
  vocabulary: [
    {
      term: "Function",
      definition: "A rule that assigns exactly one output to each input.",
    },
    {
      term: "Function notation",
      definition:
        "Writing $f(x)$ for the output when the input is $x$; e.g. $f(x)=2x+3$ means $f(4)=11$.",
    },
    { term: "Domain", definition: "The set of all allowed input values $x$." },
    {
      term: "Range",
      definition: "The set of all possible output values $y$ or $f(x)$.",
    },
    {
      term: "Natural domain",
      definition:
        "The largest set of $x$ values for which the rule is defined.",
    },
    {
      term: "Mapping",
      definition:
        "The relationship $x \\mapsto f(x)$ between input and output.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u1-function-basics",
      title: "Function notation and evaluation",
      skill: "Evaluate functions and interpret $f(x)$ notation.",
      lesson: {
        sections: [
          {
            heading: "What a function is",
            body: "A function $f$ is a rule that assigns exactly one output to each input $x$. We write $y = f(x)$, read 'y equals f of x'. For $f(x) = 2x + 3$: $f(4) = 2(4) + 3 = 11$.",
          },
          {
            heading: "Evaluating functions",
            body: "To find $f(a)$, substitute $x = a$ everywhere in the rule. To solve $f(x) = k$, set the rule equal to $k$ and solve for $x$. E.g. $f(x) = x^2 - 1$ with $f(x) = 8$ gives $x^2 = 9$, so $x = \\pm 3$.",
          },
          {
            heading: "Functions vs relations",
            body: "A relation is any rule pairing inputs and outputs. It is only a function when each input has exactly one output — the vertical line test on a graph checks this.",
          },
        ],
        keyFormulas: [
          {
            name: "Evaluation",
            statement: "$f(a)$ = substitute $x = a$ into the rule.",
          },
          {
            name: "Solving",
            statement: "$f(x) = k$ gives $x$-values by solving the equation.",
          },
        ],
        workedExample: {
          problem: "If $f(x) = 3x - 2$, find $f(5)$ and solve $f(x) = 13$.",
          solution:
            "$f(5) = 3(5) - 2 = 13$. For $f(x) = 13$: $3x - 2 = 13$, so $3x = 15$ and $x = 5$.",
        },
      },
      questions: [
        {
          id: "cial-m-u1-fb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x) = 2x + 3$, what is $f(4)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$14$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$11$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function evaluation",
                statement: "$f(a)$ substitutes $x = a$ into the rule.",
              },
            ],
            steps: [
              {
                reasoning: "$f(4) = 2(4) + 3 = 8 + 3 = 11$.",
                working: "2 \\times 4 + 3 = 11",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Computing $2 \\times 4 = 8$ then forgetting $+3$."],
          },
        },
        {
          id: "cial-m-u1-fb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $g(x) = x^2 - 5$, find $g(-3)$.",
          response: { type: "numeric", parts: [{ label: "g(-3)", answer: 4 }] },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation with negatives",
                statement: "Substitute carefully: $(-3)^2 = 9$, not $-9$.",
              },
            ],
            steps: [
              {
                reasoning: "$g(-3) = (-3)^2 - 5$.",
                working: "(-3)^2 - 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 9 - 5 = 4$.",
                working: "9 - 5 = 4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4$",
            commonErrors: [
              "Writing $(-3)^2 = -9$ — squaring removes the negative.",
            ],
          },
        },
        {
          id: "cial-m-u1-fb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $f(x) = 3x - 2$. Solve $f(x) = 13$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 5 }] },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Solving f(x) = k",
                statement:
                  "Set the rule equal to $k$ and solve the resulting equation.",
              },
            ],
            steps: [
              {
                reasoning: "$3x - 2 = 13$.",
                working: "3x - 2 = 13",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$3x = 15$.",
                working: "3x = 15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 5$.",
                working: "x = 5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: $f(5) = 13$.",
                working: "3(5)-2=13",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$x = 5$",
            commonErrors: [
              "Solving $3x - 2 = 13$ as $3x = 11$ by subtracting wrongly.",
            ],
          },
        },
        {
          id: "cial-m-u1-fb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Functions and notation.",
          parts: [
            { label: "a", prompt: "For $f(x)=2x+3$, find $f(4)$.", marks: 1 },
            { label: "b", prompt: "For $g(x)=x^2-5$, find $g(-3)$.", marks: 2 },
            {
              label: "c",
              prompt: "Solve $f(x)=13$ for $f(x)=3x-2$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why $h(x)=x^2$ is a function but $k(x)=\\pm\\sqrt{x}$ is not.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function",
                statement: "Each input must map to exactly one output.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$f(4)=11$.",
                working: "2(4)+3=11",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$g(-3)=(-3)^2-5=9-5$.",
                working: "9-5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$=4$.",
                working: "4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$3x-2=13 \\Rightarrow x=5$.",
                working: "x=5",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "$h$ gives one output per input.",
                working: "one output",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$k$ gives two outputs ($\\pm$) for $x>0$.",
                working: "\\pm\\sqrt{x}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Two outputs means not a function.",
                working: "not a function",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Clear explanation.",
                working: "\\text{vertical line test}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) 11 (b) 4 (c) x=5 (d) h one output, k two outputs",
          },
        },
        {
          id: "cial-m-u1-fb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x) = 4x - 1$, what is $f(3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$13$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$11$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function evaluation",
                statement: "$f(a)$ substitutes $x = a$ into the rule.",
              },
            ],
            steps: [
              {
                reasoning: "$f(3) = 4(3) - 1 = 12 - 1 = 11$.",
                working: "4 \\times 3 - 1 = 11",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $11$",
            commonErrors: ["Computing $4 \\times 3 = 12$ then forgetting $-1$."],
          },
        },
        {
          id: "cial-m-u1-fb-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $f(x) = x^2 - 3x$, what is $f(4)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$16$" },
              { id: "b", text: "$28$" },
              { id: "c", text: "$-4$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function evaluation",
                statement: "Substitute $x = 4$ into every $x$.",
              },
            ],
            steps: [
              {
                reasoning: "$f(4) = 16 - 12 = 4$.",
                working: "16 - 12 = 4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $4$",
            commonErrors: ["Computing $4^2 - 3 = 13$ — must subtract $3 \\times 4$."],
          },
        },
        {
          id: "cial-m-u1-fb-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $g(x) = 5 - 2x$, find $g(4)$.",
          response: {
            type: "numeric",
            parts: [{ label: "g(4)", answer: -3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function evaluation",
                statement: "$g(a)$ substitutes $x = a$ into the rule.",
              },
            ],
            steps: [
              {
                reasoning: "$g(4) = 5 - 8 = -3$.",
                working: "5 - 8 = -3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$-3$",
            commonErrors: ["Writing $5 - 2(4)$ as $5 - 2 = 3$ — must multiply first."],
          },
        },
        {
          id: "cial-m-u1-fb-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $h(x) = 2x^2$, find $h(-3)$.",
          response: {
            type: "numeric",
            parts: [{ label: "h(-3)", answer: 18 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation with negatives",
                statement: "$(-3)^2 = 9$, not $-9$.",
              },
            ],
            steps: [
              {
                reasoning: "$h(-3) = 2(-3)^2 = 2 \\times 9$.",
                working: "2 \\times (-3)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 18$.",
                working: "2 \\times 9 = 18",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$18$",
            commonErrors: ["Writing $(-3)^2 = -9$, giving $-18$."],
          },
        },
        {
          id: "cial-m-u1-fb-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Let $f(x) = x + 2$ and $g(x) = 3x$. What is $gf(1)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite",
                statement: "$gf(x) = g(f(x))$ — apply $f$ first.",
              },
            ],
            steps: [
              {
                reasoning: "$f(1) = 3$, then $g(3) = 9$.",
                working: "g(f(1)) = g(3) = 9",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** $9$",
            commonErrors: ["Computing $fg(1) = 5$ — order matters."],
          },
        },
        {
          id: "cial-m-u1-fb-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Let $f(x) = 3x - 2$. Solve $f(x) = 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Solving f(x) = k",
                statement: "Set the rule equal to $k$ and solve for $x$.",
              },
            ],
            steps: [
              {
                reasoning: "$3x - 2 = 7$.",
                working: "3x - 2 = 7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$3x = 9 \\Rightarrow x = 3$.",
                working: "x = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $f(3) = 7$.",
                working: "3(3)-2=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 3$",
            commonErrors: ["Writing $3x = 5$ — must add 2, not subtract."],
          },
        },
        {
          id: "cial-m-u1-fb-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The function $f(x) = ax + b$ satisfies $f(1) = 5$ and $f(3) = 11$. Find $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simultaneous equations",
                statement: "Each evaluation gives one equation in $a$ and $b$.",
              },
            ],
            steps: [
              {
                reasoning: "$a + b = 5$ and $3a + b = 11$.",
                working: "a+b=5,\\ 3a+b=11",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract: $2a = 6 \\Rightarrow a = 3$; then $b = 2$.",
                working: "a=3,\\ b=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $f(3) = 9 + 2 = 11$.",
                working: "3(3)+2=11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$a = 3$, $b = 2$",
            commonErrors: ["Subtracting in the wrong order and getting $a = -3$."],
          },
        },
        {
          id: "cial-m-u1-fb-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x) = x^2 + 1$, what is $f(-2)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-3$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "$(-2)^2 = 4$.",
              },
            ],
            steps: [
              {
                reasoning: "$f(-2) = 4 + 1 = 5$.",
                working: "(-2)^2 + 1 = 5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Writing $(-2)^2 = -4$, giving $-3$."],
          },
        },
        {
          id: "cial-m-u1-fb-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Let $f(x) = x^2$ and $g(x) = x - 1$. Find $fg(3)$.",
          response: {
            type: "numeric",
            parts: [{ label: "fg(3)", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite",
                statement: "$fg(x) = f(g(x))$ — apply $g$ first.",
              },
            ],
            steps: [
              {
                reasoning: "$g(3) = 2$, then $f(2) = 4$.",
                working: "f(3-1) = f(2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$fg(3) = 4$.",
                working: "2^2 = 4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Computing $gf(3) = 8$ instead — order matters."],
          },
        },
        {
          id: "cial-m-u1-fb-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why $f(x) = x^3$ is a one-to-one function on $\mathbb{R}$, but $g(x) = x^2$ is not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "One-to-one",
                statement:
                  "Distinct inputs must give distinct outputs for an inverse to exist.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For $f$: if $x_1^3 = x_2^3$ then $x_1 = x_2$ — cube root is unique.",
                working: "x_1^3=x_2^3 \\Rightarrow x_1=x_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For $g$: $g(-2) = g(2) = 4$ — two inputs give the same output.",
                working: "g(-2)=g(2)=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So $g$ is not one-to-one on $\\mathbb{R}$.",
                working: "\\text{not one-to-one}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear justification for both functions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$x^3$ is one-to-one; $x^2$ is not since $(-2)^2 = 2^2$.",
            commonErrors: ["Claiming $x^2$ is one-to-one without a counterexample."],
          },
        },
        {
          id: "cial-m-u1-fb-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $f(x) = |2x - 1|$, what is $f(-2)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-3$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$-5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modulus",
                statement: "$|a|$ is non-negative: $|-5| = 5$.",
              },
            ],
            steps: [
              {
                reasoning: "$f(-2) = |{-5}| = 5$.",
                working: "|2(-2)-1| = |-5| = 5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Forgetting the modulus — modulus outputs are never negative."],
          },
        },
        {
          id: "cial-m-u1-fb-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Functions and notation.",
          parts: [
            {
              label: "a",
              prompt: "For $f(x)=x^2-2x$, find $f(3)$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Solve $f(x)=8$ for $f(x)=x^2-2x$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "For $f(x)=2x$ and $g(x)=x+3$, find $fg(1)$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Explain why $f(x)=x^2$ fails the vertical line test when solved for $x$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function",
                statement:
                  "Each input has exactly one output; $f(x)=k$ may have several $x$-values.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$f(3) = 9 - 6 = 3$.",
                working: "9-6=3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x^2 - 2x = 8 \\Rightarrow x^2 - 2x - 8 = 0$.",
                working: "x^2-2x-8=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Factor: $(x-4)(x+2) = 0$.",
                working: "(x-4)(x+2)=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x = 4$ or $x = -2$.",
                working: "x=4,-2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$g(1) = 4$, then $f(4) = 8$.",
                working: "f(g(1))=f(4)=8",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "$x^2 = k$ gives $x = \\pm\\sqrt{k}$ — two outputs.",
                working: "x = \\pm\\sqrt{k}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "One input $x$ produces two $y$-values.",
                working: "two y-values",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "So the inverse relation is not a function.",
                working: "\\text{not a function}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 3 (b) x=4,−2 (c) 8 (d) two outputs per input",
          },
        },
      ],
    },
    {
      id: "cial-m-u1-domain-range",
      title: "Domain and range",
      skill: "Find the natural domain and range of algebraic functions.",
      lesson: {
        sections: [
          {
            heading: "Domain restrictions",
            body: "Values are excluded when the rule breaks: division by zero ($x \\ne$ denominator's root), even roots of negatives ($\\sqrt{x}$ needs $x \\ge 0$), and logarithms of non-positives ($\\ln x$ needs $x > 0$).",
          },
          {
            heading: "Finding the range",
            body: "For quadratics, complete the square to find the vertex — that gives the minimum or maximum, hence the range. For $f(x) = (x-1)^2 + 4$, the minimum is $4$, so range is $y \\ge 4$.",
          },
          {
            heading: "Notation",
            body: "Domain can be given as a set or inequality: $\\{x : x \\ne 2\\}$ or $x \\ne 2$. Range: $\\{y : y \\ge 4\\}$ or $y \\ge 4$. In exams, inequalities are usually accepted.",
          },
        ],
        keyFormulas: [
          {
            name: "Domain rules",
            statement:
              "No division by zero; $\\sqrt{\\cdot}$ needs non-negative; $\\ln$ needs positive.",
          },
          {
            name: "Quadratic range",
            statement:
              "Vertex value = min (opens up) or max (opens down) of range.",
          },
        ],
        workedExample: {
          problem: "Find the domain and range of $f(x) = \\dfrac{1}{x-2}$.",
          solution:
            "Domain: $x \\ne 2$ (division by zero). Range: $y \\ne 0$ (numerator never zero, denominator can be any non-zero value).",
        },
      },
      questions: [
        {
          id: "cial-m-u1-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the domain of $f(x) = \\dfrac{1}{x-2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x \\ne 0$" },
              { id: "b", text: "$x \\ge 2$" },
              { id: "c", text: "$x \\ne 2$" },
              { id: "d", text: "All real $x$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domain restriction",
                statement: "Denominator cannot be zero, so $x - 2 \\ne 0$.",
              },
            ],
            steps: [
              {
                reasoning: "$x - 2 = 0$ at $x = 2$, which must be excluded.",
                working: "x \\ne 2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$x \\ne 2$",
            commonErrors: [
              "Excluding $x = 0$ — the numerator, not the denominator.",
            ],
          },
        },
        {
          id: "cial-m-u1-dr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the domain of $g(x) = \\sqrt{x + 3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Square root domain",
                statement: "$\\sqrt{u}$ requires $u \\ge 0$.",
              },
            ],
            steps: [
              {
                reasoning: "Need $x + 3 \\ge 0$.",
                working: "x + 3 \\ge 0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So $x \\ge -3$.",
                working: "x \\ge -3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x \\ge -3$",
            commonErrors: ["Writing $x \\ge 3$ — forgetting to subtract."],
          },
        },
        {
          id: "cial-m-u1-dr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the range of $h(x) = x^2 + 2x + 5$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Completing the square",
                statement: "$x^2 + 2x + 5 = (x+1)^2 + 4$; minimum value $4$.",
              },
            ],
            steps: [
              {
                reasoning: "Complete the square: $(x+1)^2 + 4$.",
                working: "(x+1)^2 + 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$(x+1)^2 \\ge 0$, so $h(x) \\ge 4$.",
                working: "h(x) \\ge 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Range: $y \\ge 4$.",
                working: "y \\ge 4",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Value $4$ is attained at $x = -1$.",
                working: "x=-1",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$y \\ge 4$",
            commonErrors: [
              "Using the constant term $5$ as the minimum — must complete the square.",
            ],
          },
        },
        {
          id: "cial-m-u1-dr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Domain and range.",
          parts: [
            {
              label: "a",
              prompt: "Domain of $f(x)=\\dfrac{1}{x-2}$?",
              marks: 1,
            },
            { label: "b", prompt: "Domain of $g(x)=\\sqrt{x+3}$?", marks: 2 },
            { label: "c", prompt: "Range of $h(x)=(x-1)^2+4$?", marks: 3 },
            {
              label: "d",
              prompt: "Range of $k(x)=\\dfrac{1}{x-2}$? Explain.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domain and range",
                statement:
                  "Exclusions for undefined values; range from behaviour of the rule.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$x \\ne 2$.",
                working: "x \\ne 2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x + 3 \\ge 0$.",
                working: "x+3 \\ge 0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x \\ge -3$.",
                working: "x \\ge -3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Min at vertex: $(x-1)^2 \\ge 0 \\Rightarrow h \\ge 4$.",
                working: "(x-1)^2+4 \\ge 4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$y \\ge 4$.",
                working: "y \\ge 4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Min attained at $x=1$.",
                working: "x=1",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "$y \\ne 0$: numerator never zero.",
                working: "y \\ne 0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Denominator takes all non-zero values.",
                working: "x-2 \\ne 0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "So $y \\ne 0$ with justification.",
                working: "y \\ne 0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) x≠2 (b) x≥−3 (c) y≥4 (d) y≠0",
          },
        },
        {
          id: "cial-m-u1-dr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the domain of $f(x) = \\dfrac{1}{x + 4}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real $x$" },
              { id: "b", text: "$x \\ne -4$" },
              { id: "c", text: "$x \\ne 4$" },
              { id: "d", text: "$x \\ge -4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domain restriction",
                statement: "Denominator cannot be zero, so $x + 4 \\ne 0$.",
              },
            ],
            steps: [
              {
                reasoning: "$x + 4 = 0$ at $x = -4$, which must be excluded.",
                working: "x \\ne -4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $x \\ne -4$",
            commonErrors: ["Excluding $x = 4$ — must solve $x + 4 = 0$."],
          },
        },
        {
          id: "cial-m-u1-dr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the domain of $g(x) = \\sqrt{5 - x}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x \\le 5$" },
              { id: "b", text: "All real $x$" },
              { id: "c", text: "$x \\ge 5$" },
              { id: "d", text: "$x \\le -5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Square root domain",
                statement: "$\\sqrt{u}$ requires $u \\ge 0$, so $5 - x \\ge 0$.",
              },
            ],
            steps: [
              {
                reasoning: "$5 - x \\ge 0 \\Rightarrow x \\le 5$.",
                working: "x \\le 5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $x \\le 5$",
            commonErrors: ["Writing $x \\ge 5$ — inequality reverses when moving $x$."],
          },
        },
        {
          id: "cial-m-u1-dr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the range of $h(x) = (x - 2)^2 + 1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real $y$" },
              { id: "b", text: "$y \\ge -1$" },
              { id: "c", text: "$y \\ge 1$" },
              { id: "d", text: "$y \\le 1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Quadratic range",
                statement: "$(x-2)^2 \\ge 0$ gives minimum value $1$.",
              },
            ],
            steps: [
              {
                reasoning: "Minimum of $(x-2)^2 + 1$ is $1$ at $x = 2$.",
                working: "y \\ge 1",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $y \\ge 1$",
            commonErrors: ["Using $-1$ — sign of the constant term is positive."],
          },
        },
        {
          id: "cial-m-u1-dr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The function $f(x) = \\dfrac{1}{x - 5}$ is undefined at one value of $x$. What is this value?",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domain restriction",
                statement: "Denominator zero when $x - 5 = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "$x - 5 = 0 \\Rightarrow x = 5$.",
                working: "x = 5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$x = 5$",
            commonErrors: ["Answering $0$ — the numerator, not the excluded value."],
          },
        },
        {
          id: "cial-m-u1-dr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the domain of $f(x) = \\ln(x - 1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logarithm domain",
                statement: "$\\ln u$ requires $u > 0$.",
              },
            ],
            steps: [
              {
                reasoning: "Need $x - 1 > 0$.",
                working: "x - 1 > 0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So $x > 1$.",
                working: "x > 1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x > 1$",
            commonErrors: ["Writing $x \\ge 1$ — logarithm needs strictly positive argument."],
          },
        },
        {
          id: "cial-m-u1-dr-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the range of $f(x) = x^2 - 6x + 10$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Completing the square",
                statement: "$x^2 - 6x + 10 = (x - 3)^2 + 1$; minimum value $1$.",
              },
            ],
            steps: [
              {
                reasoning: "Complete the square: $(x - 3)^2 + 1$.",
                working: "(x-3)^2 + 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$(x - 3)^2 \\ge 0$, so $f(x) \\ge 1$.",
                working: "f(x) \\ge 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Range: $y \\ge 1$.",
                working: "y \\ge 1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Minimum $1$ attained at $x = 3$.",
                working: "x = 3",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$y \\ge 1$",
            commonErrors: ["Using the constant term $10$ as the minimum."],
          },
        },
        {
          id: "cial-m-u1-dr-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the range of $f(x) = \\dfrac{1}{x - 3} + 2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y \\ge 2$" },
              { id: "b", text: "All real $y$" },
              { id: "c", text: "$y \\ne -2$" },
              { id: "d", text: "$y \\ne 2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Reciprocal range",
                statement: "$\\frac{1}{x-3}$ takes every real value except $0$; adding $2$ excludes $2$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{1}{x-3} \\ne 0$, so $f(x) \\ne 2$.",
                working: "y \\ne 2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $y \\ne 2$",
            commonErrors: ["Answering $y \\ne 0$ — must account for the $+2$ shift."],
          },
        },
        {
          id: "cial-m-u1-dr-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The function $f(x) = x^2 - 4x + 9$ has a minimum value. What is this minimum value?",
          response: {
            type: "numeric",
            parts: [{ label: "minimum", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Completing the square",
                statement: "$x^2 - 4x + 9 = (x - 2)^2 + 5$; minimum value $5$.",
              },
            ],
            steps: [
              {
                reasoning: "Complete the square: $(x - 2)^2 + 5$.",
                working: "(x-2)^2 + 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Minimum value is $5$ at $x = 2$.",
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Answering $9$ — the constant term is not the minimum."],
          },
        },
        {
          id: "cial-m-u1-dr-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $g(x) = \\sqrt{x + 7}$, the domain is $x \\ge a$. Find the value of $a$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Square root domain",
                statement: "$x + 7 \\ge 0 \\Rightarrow x \\ge -7$.",
              },
            ],
            steps: [
              {
                reasoning: "$x + 7 \\ge 0 \\Rightarrow x \\ge -7$, so $a = -7$.",
                working: "a = -7",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$a = -7$",
            commonErrors: ["Answering $7$ — must subtract $7$, not keep the sign."],
          },
        },
        {
          id: "cial-m-u1-dr-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the domain of $f(x) = \\sqrt{9 - x^2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real $x$" },
              { id: "b", text: "$x \\ge -3$" },
              { id: "c", text: "$x \\le 3$" },
              { id: "d", text: "$-3 \\le x \\le 3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Square root domain",
                statement: "$9 - x^2 \\ge 0 \\Rightarrow x^2 \\le 9 \\Rightarrow -3 \\le x \\le 3$.",
              },
            ],
            steps: [
              {
                reasoning: "$x^2 \\le 9$ gives both bounds: $-3 \\le x \\le 3$.",
                working: "-3 \\le x \\le 3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $-3 \\le x \\le 3$",
            commonErrors: ["Giving only $x \\le 3$ — negative $x$ values are also valid."],
          },
        },
        {
          id: "cial-m-u1-dr-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the range of $f(x) = (x + 2)^2 - 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Quadratic range",
                statement: "$(x+2)^2 \\ge 0$ gives minimum value $-3$.",
              },
            ],
            steps: [
              {
                reasoning: "$(x + 2)^2 \\ge 0$, so $f(x) \\ge -3$.",
                working: "f(x) \\ge -3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Minimum $-3$ attained at $x = -2$.",
                working: "x = -2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Range: $y \\ge -3$.",
                working: "y \\ge -3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y \\ge -3$",
            commonErrors: ["Writing $y \\ge 3$ — must keep the negative constant."],
          },
        },
        {
          id: "cial-m-u1-dr-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Domain and range.",
          parts: [
            {
              label: "a",
              prompt: "Domain of $f(x)=\\dfrac{1}{x+1}$?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Domain of $g(x)=\\sqrt{2x-4}$?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Range of $h(x)=(x-2)^2+1$?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Range of $k(x)=\\dfrac{1}{x+1}$? Explain.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domain and range",
                statement:
                  "Exclusions for undefined values; range from behaviour of the rule.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$x \\ne -1$.",
                working: "x \\ne -1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$2x - 4 \\ge 0$.",
                working: "2x-4 \\ge 0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x \\ge 2$.",
                working: "x \\ge 2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Min at vertex: $(x-2)^2 \\ge 0 \\Rightarrow h \\ge 1$.",
                working: "(x-2)^2+1 \\ge 1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$y \\ge 1$.",
                working: "y \\ge 1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Min attained at $x=2$.",
                working: "x=2",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "$y \\ne 0$: numerator never zero.",
                working: "y \\ne 0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Denominator takes all values except $-1$.",
                working: "x+1 \\ne 0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "So $y \\ne 0$ with justification.",
                working: "y \\ne 0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) x≠−1 (b) x≥2 (c) y≥1 (d) y≠0",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u1-functions-domain-range-notes",
      title: "Function notation, domain and range — revision notes",
      summary:
        "Evaluating $f(x)$, solving $f(x)=k$, and finding domains and ranges.",
      sections: [
        {
          heading: "Function notation",
          body: "A function assigns exactly one output to each input. $f(a)$ means substitute $x=a$; $f(x)=k$ means solve the equation. Check $(-a)^2=a^2$ — squaring removes negatives.",
        },
        {
          heading: "Domain",
          body: "Exclude values that break the rule: denominators $=0$, even roots of negatives ($\\sqrt{u}$ needs $u\\ge0$), $\\ln u$ needs $u>0$. State as $x\\ne2$ or $x\\ge-3$.",
        },
        {
          heading: "Range",
          body: "For quadratics complete the square: $x^2+bx+c=(x+\\tfrac{b}{2})^2+(c-\\tfrac{b^2}{4})$. The vertex gives the min (opens up) or max (opens down). For $f(x)=\\frac{1}{x-2}$ the range is $y\\ne0$ since the numerator is never zero.",
        },
        {
          heading: "Exam checklist",
          body: "Write domain as an inequality or set — both accepted. Always check boundary values are included or excluded. For range, verify the extreme value is actually attained.",
        },
      ],
    },
  ],
};
