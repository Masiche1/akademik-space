import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "aihl-u2-lesson-2-1",
  code: "2-1",
  title: "Composite, Inverse and Transformed Functions",
  goal: "I CAN build composite and inverse functions (including restricted domains) and describe the effect of combined transformations on a graph.",
  standards: ["AHL 2.7", "AHL 2.8"],
  vocabulary: [
    {
      term: "Composite function",
      definition:
        "The function $(f\\circ g)(x)=f(g(x))$, in which $g$ is applied first and then $f$.",
    },
    {
      term: "Inverse function",
      definition:
        "The function $f^{-1}$ that reverses $f$, so $f^{-1}(f(x))=x$. It exists only if $f$ is one-to-one.",
    },
    {
      term: "Restricted domain",
      definition:
        "A chosen subset of the domain that makes a many-to-one function one-to-one, so that an inverse exists.",
    },
    {
      term: "Self-inverse reflection",
      definition:
        "The graph of $y=f^{-1}(x)$ is the reflection of $y=f(x)$ in the line $y=x$.",
    },
    {
      term: "Stretch",
      definition:
        "A scaling of a graph: $y=af(x)$ is a vertical stretch with scale factor $a$, and $y=f(bx)$ is a horizontal stretch with scale factor $\\frac1b$.",
    },
    {
      term: "Translation",
      definition:
        "A shift: $y=f(x-p)+q$ moves the graph $p$ units right and $q$ units up.",
    },
  ],
  concepts: [
    {
      id: "aihl-u2-composite-inverse",
      title: "Composite and inverse functions",
      skill:
        "Evaluate and simplify composite functions, find inverses, and choose a restricted domain.",
      lesson: {
        sections: [
          {
            heading: "Composite functions",
            body: "In $(f\\circ g)(x)$ the inner function $g$ acts first. In general $(f\\circ g)(x)\\ne(g\\circ f)(x)$. The range of $g$ must lie inside the domain of $f$. In applications a composite models a chain of processes, such as a sensor reading converted to a voltage and then to a power.",
          },
          {
            heading: "Inverse functions and restricted domains",
            body: "To find $f^{-1}$: write $y=f(x)$, swap $x$ and $y$, then make $y$ the subject. The domain of $f^{-1}$ is the range of $f$, and its range is the domain of $f$. A quadratic is many-to-one, so it only has an inverse after a restriction such as $x\\ge2$; the restriction decides whether you take the $+$ or the $-$ square root.",
          },
        ],
        keyFormulas: [
          { name: "Composite", statement: "$(f\\circ g)(x)=f(g(x))$" },
          {
            name: "Inverse property",
            statement: "$(f\\circ f^{-1})(x)=x$ and $(f^{-1}\\circ f)(x)=x$",
          },
          {
            name: "Domain and range of $f^{-1}$",
            statement:
              "$\\text{dom}\\,f^{-1}=\\text{ran}\\,f$ and $\\text{ran}\\,f^{-1}=\\text{dom}\\,f$",
          },
        ],
        workedExample: {
          problem:
            "For $f(x)=x^2+1$ with $x\\ge0$, find $f^{-1}(x)$ and state its domain.",
          solution:
            "Let $y=x^2+1$. Swap: $x=y^2+1$, so $y^2=x-1$. Since the original domain is $x\\ge0$, the range of $f^{-1}$ is $y\\ge0$, so take the positive root: $f^{-1}(x)=\\sqrt{x-1}$. The domain of $f^{-1}$ is the range of $f$, which is $x\\ge1$.",
        },
      },
      questions: [
        {
          id: "aihl-u2-composite-inverse-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=2x+3$ and $g(x)=x^2$. Find $(f\\circ g)(2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$11$" },
              { id: "b", text: "$49$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite function",
                statement:
                  "$(f\\circ g)(x)=f(g(x))$; the inner function is applied first.",
              },
            ],
            steps: [
              {
                reasoning: "Apply $g$ first.",
                working: "g(2)=2^2=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then apply $f$ to the result.",
                working: "f(4)=2(4)+3=11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $11$",
            commonErrors: [
              "Applying $f$ first and then $g$, which gives $(g\\circ f)(2)=49$.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=3x-5$ for $x\\in\\mathbb{R}$. Find $f^{-1}(7)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f^{-1}(7)$", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverse function",
                statement: "$f^{-1}(y)=x$ exactly when $f(x)=y$.",
              },
            ],
            steps: [
              {
                reasoning: "Swap $x$ and $y$ in $y=3x-5$.",
                working: "x=3y-5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Make $y$ the subject.",
                working: "f^{-1}(x)=\\frac{x+5}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute 7. Check: $f(4)=12-5=7$.",
                working: "f^{-1}(7)=\\frac{12}{3}=4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(7)=4$",
            commonErrors: [
              "Writing $f^{-1}(x)=\\frac{1}{3x-5}$, confusing the inverse with the reciprocal.",
            ],
            examinerNote:
              "Solving $3x-5=7$ directly is also accepted for full marks.",
          },
        },
        {
          id: "aihl-u2-composite-inverse-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The function $f$ is defined by $f(x)=x^2-4x+7$ for $x\\ge2$. Find $f^{-1}(12)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f^{-1}(12)$", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverse function",
                statement:
                  "$f^{-1}(y)=x$ exactly when $f(x)=y$, with $x$ in the domain of $f$.",
              },
              {
                kind: "property",
                name: "Completing the square",
                statement: "$x^2-4x+7=(x-2)^2+3$",
              },
            ],
            steps: [
              {
                reasoning: "Complete the square to see the vertex at $x=2$.",
                working: "f(x)=(x-2)^2+3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set $f(x)=12$.",
                working: "(x-2)^2=9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The domain $x\\ge2$ means $x-2\\ge0$, so reject the negative root.",
                working: "x-2=3",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Solve.",
                working: "f^{-1}(12)=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(12)=5$",
            commonErrors: [
              "Giving $x=-1$ as well, which is outside the domain.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A sensor outputs a reading $x$ that is converted to a voltage by $f(x)=3x-2$ volts. The power used is then $g(v)=v^2+1$ watts, where the voltage $v\\ge0$.",
          parts: [
            {
              label: "a",
              prompt:
                "Find an expression for $(g\\circ f)(x)$ and state what it represents.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the sensor reading $x$ for which the power is 50 watts.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find $f^{-1}(x)$ and show that $(f\\circ f^{-1})(x)=x$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find $g^{-1}(x)$ and state its domain.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "(b) sensor reading", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite function",
                statement: "$(g\\circ f)(x)=g(f(x))$",
              },
              {
                kind: "definition",
                name: "Inverse function",
                statement:
                  "Swap $x$ and $y$ and rearrange; $\\text{dom}\\,f^{-1}=\\text{ran}\\,f$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Substitute $f(x)$ into $g$.",
                working: "(g\\circ f)(x)=(3x-2)^2+1=9x^2-12x+5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It gives the power directly from the sensor reading.",
                working: "\\text{power in watts for reading }x",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Set the power equal to 50.",
                working: "(3x-2)^2+1=50\\Rightarrow(3x-2)^2=49",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The voltage $v=3x-2$ must be non-negative, so reject the negative root.",
                working: "3x-2=7",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Solve.",
                working: "x=3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Swap and rearrange $x=3y-2$.",
                working: "f^{-1}(x)=\\frac{x+2}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Compose.",
                working:
                  "f\\left(\\frac{x+2}{3}\\right)=3\\cdot\\frac{x+2}{3}-2=x",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Swap and rearrange $x=y^2+1$; since $v\\ge0$ take the positive root.",
                working: "g^{-1}(x)=\\sqrt{x-1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "The domain of $g^{-1}$ is the range of $g$.",
                working: "x\\ge1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $9x^2-12x+5$. (b) $x=3$. (c) $\\frac{x+2}{3}$. (d) $\\sqrt{x-1}$, $x\\ge1$.",
            commonErrors: [
              "Computing $f(g(x))=3(x^2+1)-2$ instead of $g(f(x))$.",
              "Keeping $x=-\\frac53$, which gives a voltage of $-7$ volts.",
            ],
            examinerNote:
              "The condition $v\\ge0$ from the stem is what rejects the second root; FT applies in (d) only for an incorrect expression carried correctly.",
          },
        },
        {
          id: "aihl-u2-composite-inverse-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=x-4$ and $g(x)=3x+1$. Find $(g\\circ f)(5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite function",
                statement:
                  "$(g\\circ f)(x)=g(f(x))$; the inner function is applied first.",
              },
            ],
            steps: [
              {
                reasoning: "Apply $f$ first: $f(5)=5-4=1$.",
                working: "f(5)=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply $g$ to the result: $g(1)=3(1)+1=4$.",
                working: "g(1)=4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $4$",
            commonErrors: [
              "Computing $(f\\circ g)(5)=f(16)=12$ by applying the functions in the wrong order.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which function is the inverse of $f(x)=\\frac{x-3}{2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f^{-1}(x)=2x+3$" },
              { id: "b", text: "$f^{-1}(x)=\\frac{x+3}{2}$" },
              { id: "c", text: "$f^{-1}(x)=2x-3$" },
              { id: "d", text: "$f^{-1}(x)=\\frac{2}{x-3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverse function",
                statement:
                  "Write $y=f(x)$, swap $x$ and $y$, then make $y$ the subject.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Let $y=\\frac{x-3}{2}$ and swap: $x=\\frac{y-3}{2}$.",
                working: "x=\\frac{y-3}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by 2 and add 3: $y=2x+3$.",
                working: "f^{-1}(x)=2x+3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $f^{-1}(x)=2x+3$",
            commonErrors: [
              "Halving instead of doubling, giving $\\frac{x+3}{2}$.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f$ is defined by $f(x)=\\sqrt{x-2}$ for $x\\ge2$. What is the domain of $f^{-1}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\ge2$" },
              { id: "b", text: "$x\\ge0$" },
              { id: "c", text: "$x>0$" },
              { id: "d", text: "$x\\in\\mathbb{R}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Domain and range of $f^{-1}$",
                statement: "$\\text{dom}\\,f^{-1}=\\text{ran}\\,f$.",
              },
            ],
            steps: [
              {
                reasoning: "The range of $f$ is found from $\\sqrt{x-2}\\ge0$.",
                working: "\\text{ran}\\,f=\\{y:y\\ge0\\}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The domain of $f^{-1}$ equals this range.",
                working: "\\text{dom}\\,f^{-1}: x\\ge0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $x\\ge0$",
            commonErrors: [
              "Repeating the domain of $f$, $x\\ge2$, instead of using its range.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=\\frac{1}{x}$ and $g(x)=x+2$. Find $(f\\circ g)(1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{3}$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$-1$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite function",
                statement:
                  "$(f\\circ g)(x)=f(g(x))$; the inner function is applied first.",
              },
            ],
            steps: [
              {
                reasoning: "Apply $g$ first: $g(1)=1+2=3$.",
                working: "g(1)=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply $f$ to the result: $f(3)=\\frac13$.",
                working: "f(3)=\\frac{1}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{1}{3}$",
            commonErrors: [
              "Computing $(g\\circ f)(1)=g(1)=3$, which reverses the order.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=\\frac{2x-1}{5}$ for $x\\in\\mathbb{R}$. Find $f^{-1}(3)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f^{-1}(3)$", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverse function",
                statement: "$f^{-1}(y)=x$ exactly when $f(x)=y$.",
              },
            ],
            steps: [
              {
                reasoning: "Set $f(x)=3$: $\\frac{2x-1}{5}=3$.",
                working: "2x-1=15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $x$.",
                working: "2x=16\\Rightarrow x=8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $f(8)=\\frac{16-1}{5}=3$.",
                working: "f(8)=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(3)=8$",
            commonErrors: [
              "Inverting only part of the expression, such as $\\frac{5}{2x-1}$.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=x^2-2x+5$ for $x\\ge1$. Find $f^{-1}(10)$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "$f^{-1}(10)$", answer: 3.45, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Completing the square",
                statement: "$x^2-2x+5=(x-1)^2+4$",
              },
              {
                kind: "definition",
                name: "Inverse function",
                statement:
                  "Use the domain $x\\ge1$ to select the correct square root.",
              },
            ],
            steps: [
              {
                reasoning: "Complete the square.",
                working: "f(x)=(x-1)^2+4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set $f(x)=10$.",
                working: "(x-1)^2=6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Since $x\\ge1$, take the positive root: $x=1+\\sqrt6=3.449$.",
                working: "x=1+\\sqrt6\\approx3.45",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(10)\\approx3.45$",
            commonErrors: [
              "Giving $x=1-\\sqrt6\\approx-1.45$, which lies outside the domain $x\\ge1$.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Let $f(x)=2x+1$ and $g(x)=x^2-3$. Find all values of $x$ for which $(g\\circ f)(x)=7$.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              {
                label: "$x$ (larger value)",
                answer: 1.0811,
                tolerance: 0.0005,
              },
              {
                label: "$x$ (smaller value)",
                answer: -2.0811,
                tolerance: 0.0005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite function",
                statement: "$(g\\circ f)(x)=g(f(x))=(2x+1)^2-3$",
              },
              {
                kind: "law",
                name: "Square root of both sides",
                statement: "If $u^2=c$ with $c>0$ then $u=\\pm\\sqrt c$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $f(x)$ into $g$ and set equal to 7.",
                working: "(2x+1)^2-3=7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Isolate the square.",
                working: "(2x+1)^2=10",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Take both square roots.",
                working: "2x+1=\\pm\\sqrt{10}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve both cases.",
                working:
                  "x=\\frac{-1\\pm\\sqrt{10}}{2}\\approx1.081\\text{ or }-2.081",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$x=\\frac{-1+\\sqrt{10}}{2}\\approx1.08$ or $x=\\frac{-1-\\sqrt{10}}{2}\\approx-2.08$",
            commonErrors: [
              "Taking only the positive square root and missing one solution.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "The function $f$ is defined by $f(x)=x^2$ for $x\\le0$. Find $f^{-1}(9)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$-3$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$\\pm3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Restricted domain",
                statement:
                  "The restriction $x\\le0$ forces $f^{-1}$ to take the negative square root.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solve $x^2=9$ but select the root in the domain $x\\le0$.",
                working: "x=-\\sqrt9=-3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $f(-3)=9$ and $-3\\le0$.",
                working: "f(-3)=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $-3$",
            commonErrors: [
              "Giving both roots $\\pm3$; only $-3$ lies in the domain of $f$.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Let $f(x)=3x-2$ and $g(x)=x^2+1$.",
          parts: [
            {
              label: "a",
              prompt: "Find an expression for $(f\\circ g)(x)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find an expression for $(g\\circ f)(x)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate $(f\\circ g)(1)$ and $(g\\circ f)(1)$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite function",
                statement:
                  "$(f\\circ g)(x)=f(g(x))$ and $(g\\circ f)(x)=g(f(x))$; the two orders are generally different.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Substitute $g(x)=x^2+1$ into $f$.",
                working: "f(g(x))=3(x^2+1)-2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Simplify.",
                working: "(f\\circ g)(x)=3x^2+1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $f(x)=3x-2$ into $g$.",
                working: "g(f(x))=(3x-2)^2+1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Expand.",
                working: "(g\\circ f)(x)=9x^2-12x+5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Evaluate $(f\\circ g)(1)=3(1)+1$ and $(g\\circ f)(1)=9-12+5$.",
                working: "4\\text{ and }2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "The values differ, confirming the order matters.",
                working: "(f\\circ g)(1)=4\\neq2=(g\\circ f)(1)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $3x^2+1$. (b) $9x^2-12x+5$. (c) $4$ and $2$.",
            commonErrors: ["Writing the same expression for both composites."],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f$ is defined by $f(x)=5-2x$. Find $f^{-1}(-1)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f^{-1}(-1)$", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverse function",
                statement: "Solve $f(x)=y$ for $x$; here $y=-1$.",
              },
            ],
            steps: [
              {
                reasoning: "Set $5-2x=-1$.",
                working: "2x=6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve and check: $f(3)=5-6=-1$.",
                working: "x=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(-1)=3$",
            commonErrors: ["Computing $f(-1)=7$ instead of solving $f(x)=-1$."],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about an inverse function $f^{-1}$ is always true when $f^{-1}$ exists?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The domain of $f^{-1}$ equals the range of $f$.",
              },
              { id: "b", text: "$f^{-1}(x)=\\frac{1}{f(x)}$ for all $x$." },
              {
                id: "c",
                text: "The graph of $y=f^{-1}(x)$ is the reflection of $y=f(x)$ in the $x$-axis.",
              },
              {
                id: "d",
                text: "$(f\\circ g)^{-1}=f^{-1}\\circ g^{-1}$ for any $g$.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Domain and range of $f^{-1}$",
                statement:
                  "$\\text{dom}\\,f^{-1}=\\text{ran}\\,f$ and $\\text{ran}\\,f^{-1}=\\text{dom}\\,f$.",
              },
              {
                kind: "property",
                name: "Self-inverse reflection",
                statement:
                  "The graph of $y=f^{-1}(x)$ is the reflection of $y=f(x)$ in the line $y=x$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "This is the defining domain-range swap for inverses.",
                working: "\\text{dom}\\,f^{-1}=\\text{ran}\\,f",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The other statements confuse the inverse with the reciprocal, the wrong reflection line, or the wrong composition order.",
                working: "\\text{only (a) is always true}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: [
              "Confusing $f^{-1}$ with $\\frac{1}{f}$.",
              "Recalling reflection in $y=x$ as reflection in the $x$-axis.",
            ],
          },
        },
        {
          id: "aihl-u2-composite-inverse-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "Let $f(x)=x^2+2x+5$ for $x\\ge-1$.",
          parts: [
            {
              label: "a",
              prompt: "Write $f(x)$ in the form $(x-h)^2+k$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find an expression for $f^{-1}(x)$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "State the domain of $f^{-1}$ and the range of $f$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find the exact value of $f^{-1}(13)$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Show that $(f\\circ f^{-1})(x)=x$ for $x$ in the domain of $f^{-1}$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Completing the square",
                statement: "$x^2+2x+5=(x+1)^2+4$",
              },
              {
                kind: "definition",
                name: "Inverse function",
                statement:
                  "Swap $x$ and $y$, then choose the root consistent with the restricted domain $x\\ge-1$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Complete the square: $x^2+2x+5=(x+1)^2-1+5$.",
                working: "f(x)=(x+1)^2+4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the completed form.",
                working: "(x+1)^2+4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Let $y=(x+1)^2+4$ and swap: $x=(y+1)^2+4$.",
                working: "x=(y+1)^2+4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Since $x\\ge-1$ in the domain of $f$, take the non-negative root: $y+1=\\sqrt{x-4}$.",
                working: "y+1=\\sqrt{x-4}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Hence $f^{-1}(x)=\\sqrt{x-4}-1$.",
                working: "f^{-1}(x)=\\sqrt{x-4}-1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "The domain of $f^{-1}$ is the range of $f$.",
                working: "x\\ge4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The range of $f$ starts at the vertex value $( -1,4)$.",
                working: "y\\ge4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Substitute $x=13$: $f^{-1}(13)=\\sqrt9-1$.",
                working: "\\sqrt{13-4}-1=3-1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate. Check: $f(2)=4+4+5=13$.",
                working: "f^{-1}(13)=2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Compose: $f(f^{-1}(x))=\\left(\\sqrt{x-4}-1+1\\right)^2+4-2\\left(\\sqrt{x-4}-1\\right)+2$ simplifies through $(\\sqrt{x-4})^2=x-4$.",
                working: "f(f^{-1}(x))=(\\sqrt{x-4})^2+4=x",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Conclude using the inverse property.",
                working: "f\\circ f^{-1}=x",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $(x+1)^2+4$. (b) $\\sqrt{x-4}-1$. (c) $x\\ge4$; $y\\ge4$. (d) $2$. (e) shown.",
            commonErrors: [
              "Taking $y+1=-\\sqrt{x-4}$, which gives values below $-1$ outside the domain.",
              "Writing the domain of $f^{-1}$ as $x\\ge-1$.",
            ],
            examinerNote:
              "Accept a clear algebraic verification for (e); the key idea is that the square removes the sign chosen in (b).",
          },
        },
        {
          id: "aihl-u2-composite-inverse-q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Let $f(x)=\\frac{1}{x-2}$ for $x\\ne2$. Find the exact value of $f^{-1}(3)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f^{-1}(3)$", answer: 2.3333, tolerance: 0.0005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverse function",
                statement:
                  "Solve $\\frac{1}{x-2}=3$ for $x$; the result must lie in the domain $x\\ne2$.",
              },
              {
                kind: "property",
                name: "Reciprocal equation",
                statement:
                  "$\\frac{1}{u}=c$ implies $u=\\frac1c$ for $c\\ne0$.",
              },
            ],
            steps: [
              {
                reasoning: "Set $f(x)=3$.",
                working: "\\frac{1}{x-2}=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Invert both sides.",
                working: "x-2=\\frac13",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Solve for $x$.",
                working: "x=\\frac73",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Check: $f\\left(\\frac73\\right)=\\frac{1}{1/3}=3$, and $\\frac73\\ne2$.",
                working: "f(7/3)=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(3)=\\frac{7}{3}\\approx2.33$",
            commonErrors: [
              "Writing $f^{-1}(x)=\\frac{1}{x}+2$ by inverting only part of the expression.",
            ],
          },
        },
      ],
    },
    {
      id: "aihl-u2-transformations",
      title: "Composite transformations of graphs",
      skill:
        "Describe and apply sequences of translations, stretches and reflections, and recognise when the order matters.",
      lesson: {
        sections: [
          {
            heading: "Transformations of $y=f(x)$",
            body: "Changes outside the function affect $y$: $y=af(x)$ stretches vertically by factor $a$, $y=-f(x)$ reflects in the $x$-axis, and $y=f(x)+q$ translates up $q$. Changes inside affect $x$ in the opposite sense: $y=f(bx)$ stretches horizontally by factor $\\frac1b$, $y=f(-x)$ reflects in the $y$-axis, and $y=f(x-p)$ translates right $p$.",
          },
          {
            heading: "Order of transformations",
            body: "Several transformations are applied one at a time to the graph. For $y=af(b(x-p))+q$, transformations that act on $x$ (stretch by $\\frac1b$, then shift by $p$) are applied in the order stated in the exam question. A horizontal stretch followed by a translation is not the same as a translation followed by a horizontal stretch, because the stretch also scales the shift. Track a single key point, such as a vertex, to check.",
          },
        ],
        keyFormulas: [
          { name: "General form", statement: "$y=af\\big(b(x-p)\\big)+q$" },
          {
            name: "Image of a point",
            statement: "$(x,y)\\mapsto\\left(\\dfrac{x}{b}+p,\\;ay+q\\right)$",
          },
        ],
        workedExample: {
          problem:
            "The point $(2,5)$ lies on $y=f(x)$. Find its image on $y=3f(x+1)-4$.",
          solution:
            "Set $x+1=2$, so $x=1$. The $y$-coordinate becomes $3(5)-4=11$. The image is $(1,11)$.",
        },
      },
      questions: [
        {
          id: "aihl-u2-transformations-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "The graph of $y=f(x)$ is translated 3 units up. What is the equation of the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=f(x+3)$" },
              { id: "b", text: "$y=f(x)+3$" },
              { id: "c", text: "$y=f(x)-3$" },
              { id: "d", text: "$y=f(x-3)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Vertical translation",
                statement: "$y=f(x)+q$ translates the graph $q$ units up.",
              },
            ],
            steps: [
              {
                reasoning: "Adding 3 to every output moves each point up 3.",
                working: "y=f(x)+3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $y=f(x)+3$",
            commonErrors: [
              "Changing $x$ instead of the output, which gives a horizontal shift.",
            ],
          },
        },
        {
          id: "aihl-u2-transformations-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The point $(2,5)$ lies on the graph of $y=f(x)$. Find the coordinates of its image on the graph of $y=2f(x-1)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 3 },
              { label: "$y$-coordinate", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transformations",
                statement:
                  "$y=af(x-p)$ is a vertical stretch by $a$ and a translation $p$ units right.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The inside change $x-1$ shifts the graph 1 unit right.",
                working: "x=2+1=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The factor 2 doubles the $y$-values.",
                working: "y=2\\times5=10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the image.",
                working: "(3,10)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(3,10)$",
            commonErrors: ["Shifting left to $x=1$."],
          },
        },
        {
          id: "aihl-u2-transformations-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The point $(4,3)$ lies on the graph of $y=f(x)$. Find the coordinates of its image on the graph of $y=-f(2x-2)+1$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 3 },
              { label: "$y$-coordinate", answer: -2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Image of a point",
                statement:
                  "The image has the input of $f$ equal to the original $x$-coordinate, and the output transformed by the outside operations.",
              },
            ],
            steps: [
              {
                reasoning: "The input of $f$ must equal 4.",
                working: "2x-2=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for the new $x$.",
                working: "x=3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Reflect in the $x$-axis then translate up 1 using $f=3$.",
                working: "y=-3+1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "y=-2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(3,-2)$",
            commonErrors: [
              "Using $x=4\\times2$ or $x=2$ for the horizontal stretch without including the shift.",
              "Computing $-(3+1)=-4$.",
            ],
          },
        },
        {
          id: "aihl-u2-transformations-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "Investigate how the order of transformations affects the image of $f(x)=x^2$. Each transformation is applied to the graph produced by the previous one. A horizontal stretch with scale factor $\\frac1k$ (where $k>0$) replaces $x$ by $kx$, and a translation of $p$ units right replaces $x$ by $x-p$.",
          parts: [
            {
              label: "a",
              prompt:
                "The graph of $y=x^2$ is translated 2 units right and then stretched horizontally with scale factor $\\frac12$. Find the equation of the image.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The graph of $y=x^2$ is stretched horizontally with scale factor $\\frac12$ and then translated 2 units right. Find the equation of the image.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find the coordinates of the vertex of each image in (a) and (b), and hence show that the two orders give different graphs.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Now translate by $p>0$ units right and stretch with scale factor $\\frac1k$ in one order, and in the reverse order. Find the vertex of each image in terms of $p$ and $k$, and hence show that the two orders give the same graph only when $k=1$.",
              marks: 3,
            },
            {
              label: "e",
              prompt:
                "Stretching first with scale factor $\\frac12$, find the translation $p$ that gives a final vertex at $(3,0)$, and write the equation of the final graph.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) vertex $x$-coordinate in (a)", answer: 1 },
              { label: "(c) vertex $x$-coordinate in (b)", answer: 2 },
              { label: "(e) $p$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Replacement rule",
                statement:
                  "A horizontal stretch with scale factor $\\frac1k$ replaces $x$ by $kx$; a translation $p$ right replaces $x$ by $x-p$.",
              },
              {
                kind: "principle",
                name: "Order of operations",
                statement:
                  "Each replacement is applied to the equation produced by the previous transformation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Translate right 2: $y=(x-2)^2$. Then replace $x$ by $2x$.",
                working: "y=(2x-2)^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the result.",
                working: "y=(2x-2)^2=4(x-1)^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Stretch first: $y=(2x)^2$. Then replace $x$ by $x-2$.",
                working: "y=\\big(2(x-2)\\big)^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the result.",
                working: "y=(2x-4)^2=4(x-2)^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "The vertex of $4(x-1)^2$ is at $(1,0)$.",
                working: "(1,0)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "The vertex of $4(x-2)^2$ is at $(2,0)$.",
                working: "(2,0)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The vertices differ, so the two graphs differ: order matters.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Translate then stretch: $y=(kx-p)^2$, vertex at $x=\\frac pk$. Stretch then translate: $y=(k(x-p))^2$, vertex at $x=p$.",
                working: "x=\\frac pk\\quad\\text{and}\\quad x=p",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Equate the vertices.",
                working: "\\frac pk=p\\Rightarrow p\\left(\\frac1k-1\\right)=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Since $p>0$, this requires $k=1$, so the stretch does nothing.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning: "With stretch first, the vertex is at $x=p$.",
                working: "p=3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Substitute into $y=\\big(2(x-p)\\big)^2$.",
                working: "y=(2x-6)^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $y=(2x-2)^2$. (b) $y=(2x-4)^2$. (c) vertices $(1,0)$ and $(2,0)$. (d) $\\frac pk$ and $p$; equal only if $k=1$. (e) $p=3$, $y=(2x-6)^2$.",
            commonErrors: [
              "Applying both transformations to the original equation instead of one after another.",
              "Expecting a horizontal stretch to leave a horizontal shift unchanged.",
            ],
            examinerNote:
              "Vertical transformations commute with horizontal ones; it is two horizontal operations that do not commute. FT is applied in (c) from incorrect equations in (a) and (b).",
          },
        },
        {
          id: "aihl-u2-transformations-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The graph of $y=f(x)$ is reflected in the $y$-axis. What is the equation of the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=f(-x)$" },
              { id: "b", text: "$y=-f(x)$" },
              { id: "c", text: "$y=f(x)$" },
              { id: "d", text: "$y=-f(-x)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Reflection in the $y$-axis",
                statement: "$y=f(-x)$ replaces each input $x$ by $-x$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A reflection in the $y$-axis changes the sign of every $x$-coordinate.",
                working: "x\\mapsto -x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inside the function this becomes $f(-x)$.",
                working: "y=f(-x)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $y=f(-x)$",
            commonErrors: [
              "Writing $y=-f(x)$, which is a reflection in the $x$-axis instead.",
            ],
          },
        },
        {
          id: "aihl-u2-transformations-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A horizontal stretch with scale factor $\\frac{1}{3}$ is applied to the graph of $y=f(x)$. What is the equation of the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=f(3x)$" },
              { id: "b", text: "$y=f\\left(\\frac{x}{3}\\right)$" },
              { id: "c", text: "$y=3f(x)$" },
              { id: "d", text: "$y=f(x)+3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Horizontal stretch",
                statement:
                  "A horizontal stretch with scale factor $\\frac1b$ is produced by replacing $x$ with $bx$.",
              },
            ],
            steps: [
              {
                reasoning: "Scale factor $\\frac13$ means $b=3$.",
                working: "b=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Replace $x$ by $3x$ inside the function.",
                working: "y=f(3x)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $y=f(3x)$",
            commonErrors: [
              "Replacing $x$ by $\\frac{x}{3}$, which gives scale factor $3$ instead of $\\frac13$.",
            ],
          },
        },
        {
          id: "aihl-u2-transformations-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The point $(4,-1)$ lies on the graph of $y=f(x)$. Find the coordinates of its image on the graph of $y=f(x-3)+2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(7,1)$" },
              { id: "b", text: "$(1,1)$" },
              { id: "c", text: "$(7,-1)$" },
              { id: "d", text: "$(1,-1)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Image of a point",
                statement:
                  "$y=f(x-3)+2$ shifts the graph 3 units right and 2 units up.",
              },
            ],
            steps: [
              {
                reasoning: "The input must increase by 3: $x=4+3=7$.",
                working: "x=7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The output increases by 2: $y=-1+2=1$.",
                working: "y=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $(7,1)$",
            commonErrors: ["Shifting left instead of right, giving $x=1$."],
          },
        },
        {
          id: "aihl-u2-transformations-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which description matches the transformations in $y=\\frac{1}{2}f(2x)+3$?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Vertical stretch scale factor $2$, horizontal stretch scale factor $\\frac12$, translation $3$ units up.",
              },
              {
                id: "b",
                text: "Vertical stretch scale factor $\\frac12$, horizontal stretch scale factor $2$, translation $3$ units up.",
              },
              {
                id: "c",
                text: "Vertical stretch scale factor $\\frac12$, horizontal stretch scale factor $\\frac12$, translation $3$ units up.",
              },
              {
                id: "d",
                text: "Vertical stretch scale factor $2$, horizontal stretch scale factor $2$, translation $3$ units up.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "General form",
                statement:
                  "In $y=af(bx)+q$: $a$ is the vertical scale factor, $\\frac1b$ is the horizontal scale factor, and $q$ is the vertical shift.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Here $a=\\frac12$ (vertical), $b=2$ so horizontal scale factor is $\\frac12$, and $q=3$.",
                working: "a=\\frac12,\\ b=2,\\ q=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Match with the description.",
                working:
                  "\\text{vertical SF }\\tfrac12,\\ \\text{horizontal SF }\\tfrac12,\\ \\text{up }3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)**",
            commonErrors: [
              "Reading $2x$ as a horizontal stretch with scale factor $2$ instead of $\\frac12$.",
            ],
          },
        },
        {
          id: "aihl-u2-transformations-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The point $(2,7)$ lies on the graph of $y=f(x)$. Find the coordinates of its image on the graph of $y=3f(x)+1$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 2 },
              { label: "$y$-coordinate", answer: 22 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transformations",
                statement:
                  "$y=af(x)+q$ keeps the same $x$-coordinates and maps $y\\mapsto ay+q$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "There is no change inside $f$, so the $x$-coordinate is unchanged.",
                working: "x=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The output becomes $3(7)+1=22$.",
                working: "y=3(7)+1=22",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(2,22)$",
            commonErrors: ["Multiplying the $x$-coordinate by 3 as well."],
          },
        },
        {
          id: "aihl-u2-transformations-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The point $(-3,4)$ lies on the graph of $y=f(x)$. Find the coordinates of its image on the graph of $y=-f(x+1)-2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: -4 },
              { label: "$y$-coordinate", answer: -6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Image of a point",
                statement:
                  "The input of $f$ must equal the original $x$-coordinate; the output undergoes reflection, scaling and translation.",
              },
            ],
            steps: [
              {
                reasoning: "Set $x+1=-3$.",
                working: "x=-4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reflect $y=4$ in the $x$-axis, then translate down 2.",
                working: "y=-4-2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "y=-6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(-4,-6)$",
            commonErrors: ["Computing $-(4-2)=-2$ instead of $-(4)-2=-6$."],
          },
        },
        {
          id: "aihl-u2-transformations-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The point $(5,-2)$ lies on the graph of $y=f(x)$. Find the coordinates of its image on the graph of $y=2f(3x-7)+5$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 4 },
              { label: "$y$-coordinate", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Image of a point",
                statement:
                  "For $y=af(bx-p)+q$ the input of $f$ is $bx-p$ and must equal the original $x$-coordinate.",
              },
            ],
            steps: [
              {
                reasoning: "Set the input of $f$ equal to 5: $3x-7=5$.",
                working: "3x-7=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for the new $x$.",
                working: "x=4",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Apply the outer operations to $y=-2$: vertical stretch by 2 then translation up 5.",
                working: "y=2(-2)+5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "y=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(4,1)$",
            commonErrors: [
              "Using $x=\\frac{5}{3}$ or $x=5+7$ without solving the linear equation.",
            ],
          },
        },
        {
          id: "aihl-u2-transformations-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "The graph of $y=f(x)$ is translated 2 units right and then stretched horizontally with scale factor $\\frac{1}{2}$. Which equation describes the final image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=f(2x-2)$" },
              { id: "b", text: "$y=f(2x-4)$" },
              { id: "c", text: "$y=f\\left(\\frac{x}{2}-2\\right)$" },
              { id: "d", text: "$y=f(x-4)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Order of operations",
                statement:
                  "Each transformation replaces $x$ in the equation produced by the previous step.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Translate right 2: $y=f(x-2)$. Then replace $x$ by $2x$ for the stretch.",
                working: "y=f(2x-2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Note that $y=f(2x-4)$ would result from stretching first and then translating.",
                working: "\\text{order matters}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $y=f(2x-2)$",
            commonErrors: [
              "Applying the stretch to the translation, giving $f(2x-4)$.",
            ],
          },
        },
        {
          id: "aihl-u2-transformations-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Consider the function $y=3f(2x-8)+5$.",
          parts: [
            {
              label: "a",
              prompt:
                "Rewrite the equation in the form $y=af\\big(b(x-p)\\big)+q$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe the sequence of transformations that produces this graph from $y=f(x)$, stating the order in which the changes to $x$ occur.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "General form",
                statement:
                  "$y=af\\big(b(x-p)\\big)+q$ encodes a horizontal stretch with scale factor $\\frac1b$, a translation $p$ units right, a vertical stretch with scale factor $a$ and a translation $q$ units up.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Factor the inside: $2x-8=2(x-4)$.",
                working: "y=3f\\big(2(x-4)\\big)+5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Identify $a=3$, $b=2$, $p=4$, $q=5$.",
                working: "a=3,\\ b=2,\\ p=4,\\ q=5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The input changes are a horizontal stretch with scale factor $\\frac12$ and a translation 4 units right; the stretch is applied first because it acts on $x$ before the shift inside the bracket.",
                working: "\\text{stretch SF }\\tfrac12\\text{ then right }4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The output changes are a vertical stretch with scale factor 3 and a translation 5 units up.",
                working: "\\text{vertical stretch }3,\\text{ up }5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State a valid complete sequence.",
                working:
                  "\\text{horizontal stretch }\\tfrac12,\\ \\text{translate }(4,0),\\ \\text{vertical stretch }3,\\ \\text{translate }(0,5)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $y=3f\\big(2(x-4)\\big)+5$. (b) Horizontal stretch SF $\\frac12$, translation 4 units right, vertical stretch SF 3, translation 5 units up.",
            commonErrors: [
              "Describing the translation before the horizontal stretch; inside $f$ the stretch acts first.",
            ],
          },
        },
        {
          id: "aihl-u2-transformations-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The graph of $y=f(x)$ has a vertex at $(2,3)$. Find the coordinates of the vertex of the graph of $y=f(2x-6)+4$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 4 },
              { label: "$y$-coordinate", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Image of a key point",
                statement:
                  "The vertex maps to the point where the input of $f$ equals 2, with the output transformed by the outer operations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set the input of $f$ equal to the original vertex $x$-coordinate: $2x-6=2$.",
                working: "2x-6=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for the new $x$.",
                working: "x=4",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Apply the outer operations to $y=3$: there is no vertical scale factor, only a translation up 4.",
                working: "y=3+4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the vertex.",
                working: "(4,7)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(4,7)$",
            commonErrors: [
              "Computing $x=2\\times2+6=10$ or applying the horizontal stretch to the vertex $x$-coordinate directly.",
            ],
          },
        },
        {
          id: "aihl-u2-transformations-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "The graph of $y=x^2+1$ is transformed by a horizontal stretch with scale factor $\\frac{1}{2}$ (replacing $x$ by $2x$) and a translation of $p$ units to the right (replacing $x$ by $x-p$), applied in one of two orders. A vertical stretch with scale factor 3 is then applied last in both cases.",
          parts: [
            {
              label: "a",
              prompt:
                "Translate 4 units right first, then stretch horizontally with scale factor $\\frac12$, then stretch vertically with scale factor 3. Find the equation of the final graph.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Stretch horizontally with scale factor $\\frac12$ first, then translate 4 units right, then stretch vertically with scale factor 3. Find the equation of the final graph.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Find the vertex of each graph in (a) and (b), and hence show that the two orders give different graphs.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "For a general translation $p>0$ units right, find the $x$-coordinate of the vertex for each order, and show that the two orders give the same graph only when $p=0$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Using the order in (b), find the value of $p$ that places the vertex at $(6,3)$, and write down the equation of the final graph.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Replacement rule",
                statement:
                  "A horizontal stretch with scale factor $\\frac1k$ replaces $x$ by $kx$; a translation $p$ units right replaces $x$ by $x-p$; each is applied to the equation from the previous step.",
              },
              {
                kind: "principle",
                name: "Order of operations",
                statement:
                  "Two horizontal transformations do not commute: the stretch also scales any earlier translation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Translate 4 right: $y=(x-4)^2+1$. Stretch horizontally: replace $x$ by $2x$: $y=(2x-4)^2+1$. Stretch vertically by 3.",
                working: "y=3\\big((2x-4)^2+1\\big)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Expand or factorise the vertical stretch.",
                working: "y=3(2x-4)^2+3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "State the final equation clearly.",
                working: "y=3(2x-4)^2+3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Stretch horizontally: $y=(2x)^2+1$. Translate 4 right: replace $x$ by $x-4$: $y=\\big(2(x-4)\\big)^2+1=(2x-8)^2+1$. Stretch vertically by 3.",
                working: "y=3(2x-8)^2+3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify the inside.",
                working: "y=3(2x-8)^2+3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the final equation clearly.",
                working: "y=3(2x-8)^2+3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "In (a) the vertex is where $2x-4=0$, i.e. $(2,3)$; in (b) where $2x-8=0$, i.e. $(4,3)$.",
                working: "(2,3)\\text{ and }(4,3)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The vertices differ, so the graphs are different: the order matters.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Translate-then-stretch gives vertex $x=\\frac p2$; stretch-then-translate gives vertex $x=p$ (both with $y=3$).",
                working: "x=\\frac p2\\text{ and }x=p",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Equating gives $\\frac p2=p$, so $p=0$; for $p>0$ the orders differ.",
                working: "p=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "In order (b) the vertex is at $x=p$, so $p=6$ and the equation is $y=3(2x-12)^2+3$.",
                working: "p=6,\\ y=3(2x-12)^2+3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $y=3(2x-4)^2+3$. (b) $y=3(2x-8)^2+3$. (c) $(2,3)$ and $(4,3)$. (d) $\\frac p2$ and $p$; equal only when $p=0$. (e) $p=6$, $y=3(2x-12)^2+3$.",
            commonErrors: [
              "Writing $y=3(2x-4)^2+3$ for both orders.",
              "Forgetting that the vertical stretch multiplies the constant term as well: $3(x^2+1)=3x^2+3$.",
            ],
            examinerNote:
              "FT is available in (c) and (e) from incorrect equations in (a) and (b).",
          },
        },
        {
          id: "aihl-u2-transformations-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The point $(-1,2)$ lies on the graph of $y=f(x)$. Find the coordinates of its image on the graph of $y=f(-x)+3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 1 },
              { label: "$y$-coordinate", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Reflection in the $y$-axis",
                statement:
                  "$y=f(-x)$ reflects the graph in the $y$-axis, mapping $(x,y)\\mapsto(-x,y)$.",
              },
            ],
            steps: [
              {
                reasoning: "Set $-x=-1$.",
                working: "x=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The reflection keeps the $y$-value 2, then the translation up 3 gives $y=2+3$.",
                working: "y=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the image.",
                working: "(1,5)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(1,5)$",
            commonErrors: [
              "Mapping to $(-1,5)$ by forgetting that the reflection also changes the sign of $x$.",
            ],
          },
        },
        {
          id: "aihl-u2-transformations-q17",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The graph of $y=f(x)$ undergoes a reflection in the $x$-axis followed by a reflection in the $y$-axis. Which single transformation describes the result?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rotation of $180^\\circ$ about the origin." },
              { id: "b", text: "A reflection in the line $y=x$." },
              { id: "c", text: "No change to the graph." },
              { id: "d", text: "A reflection in the $x$-axis only." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Reflection in the $x$-axis",
                statement: "$y=-f(x)$ maps $(x,y)\\mapsto(x,-y)$.",
              },
              {
                kind: "property",
                name: "Reflection in the $y$-axis",
                statement: "$y=f(-x)$ maps $(x,y)\\mapsto(-x,y)$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Together the two reflections map $(x,y)\\mapsto(-x,-y)$.",
                working: "(x,y)\\mapsto(-x,-y)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is equivalent to $y=-f(-x)$, a rotation of $180^\\circ$ about the origin.",
                working: "y=-f(-x)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** A rotation of $180^\\circ$ about the origin.",
            commonErrors: [
              "Thinking the two reflections cancel; they do not, because they act on different coordinates.",
            ],
          },
        },
      ],
    },
  ],
};
