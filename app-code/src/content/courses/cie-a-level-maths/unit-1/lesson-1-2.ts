import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cial-m-u1-lesson-1-2",
  code: "1-2",
  title: "Composite, inverse and modulus functions",
  goal: "I CAN form composite functions, find inverses and solve modulus equations and inequalities.",
  standards: ["9709 P1: functions and graphs"],
  vocabulary: [
    {
      term: "Composite function",
      definition: "$fg(x) = f(g(x))$ — apply $g$ first, then $f$.",
    },
    {
      term: "Inverse function",
      definition: "$f^{-1}$ reverses $f$: if $y = f(x)$ then $x = f^{-1}(y)$.",
    },
    {
      term: "Modulus",
      definition:
        "$|x|$ is the absolute value — distance from zero, always non-negative.",
    },
    {
      term: "Modulus equation",
      definition: "An equation containing $|\\cdot|$, e.g. $|x - 3| = 2$.",
    },
    {
      term: "Self-inverse",
      definition:
        "A function equal to its own inverse, e.g. $f(x) = \\frac{1}{x}$.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u1-composite-inverse",
      title: "Composite and inverse functions",
      skill: "Form composites $fg(x)$ and find inverse functions.",
      lesson: {
        sections: [
          {
            heading: "Composites",
            body: "$fg(x)$ means $f(g(x))$ — the right-hand function acts first. Order matters: $fg \\ne gf$ in general. For $f(x) = 2x + 1$, $g(x) = x - 3$: $fg(x) = f(x-3) = 2(x-3) + 1 = 2x - 5$, while $gf(x) = (2x+1) - 3 = 2x - 2$.",
          },
          {
            heading: "Finding inverses",
            body: "To find $f^{-1}$: write $y = f(x)$, swap to $x = f(y)$, then make $y$ the subject. For $f(x) = 3x - 2$: $x = 3y - 2 \\Rightarrow y = \\dfrac{x + 2}{3}$, so $f^{-1}(x) = \\dfrac{x+2}{3}$.",
          },
          {
            heading: "Checking inverses",
            body: "$f^{-1}$ exists only for one-to-one functions. Check with $ff^{-1}(x) = f^{-1}f(x) = x$, and note that $y = f(x)$ and $y = f^{-1}(x)$ are reflections in the line $y = x$.",
          },
        ],
        keyFormulas: [
          {
            name: "Composite",
            statement: "$fg(x) = f(g(x))$ — apply $g$ first.",
          },
          {
            name: "Inverse method",
            statement:
              "Swap $x$ and $y$, then rearrange to make $y$ the subject.",
          },
        ],
        workedExample: {
          problem: "Find $f^{-1}(x)$ for $f(x) = \\dfrac{2x+1}{3}$.",
          solution:
            "$x = \\dfrac{2y+1}{3} \\Rightarrow 3x = 2y + 1 \\Rightarrow y = \\dfrac{3x - 1}{2}$. So $f^{-1}(x) = \\dfrac{3x-1}{2}$.",
        },
      },
      questions: [
        {
          id: "cial-m-u1-ci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x)=2x+1$ and $g(x)=x-3$, what is $fg(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x - 5$" },
              { id: "b", text: "$2x - 2$" },
              { id: "c", text: "$x - 2$" },
              { id: "d", text: "$2x + 1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Composite",
                statement: "$fg(x) = f(g(x))$ — substitute $g$ into $f$.",
              },
            ],
            steps: [
              {
                reasoning: "$fg(x) = 2(x-3) + 1 = 2x - 6 + 1 = 2x - 5$.",
                working: "2(x-3)+1 = 2x-5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$2x - 5$",
            commonErrors: [
              "Computing $gf(x) = 2x - 2$ instead — order matters.",
            ],
          },
        },
        {
          id: "cial-m-u1-ci-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $f^{-1}(x)$ for $f(x) = 3x - 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Inverse method",
                statement: "Swap $x$ and $y$, then make $y$ the subject.",
              },
            ],
            steps: [
              {
                reasoning: "$y = 3x - 2 \\Rightarrow x = 3y - 2$.",
                working: "x = 3y - 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$3y = x + 2$.",
                working: "3y = x+2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$f^{-1}(x) = \\dfrac{x+2}{3}$.",
                working: "f^{-1}(x)=\\frac{x+2}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f^{-1}(x) = \\dfrac{x+2}{3}$",
            commonErrors: ["Forgetting to swap $x$ and $y$ first."],
          },
        },
        {
          id: "cial-m-u1-ci-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $f(x) = \\dfrac{2x+1}{3}$. Find $f^{-1}(4)$.",
          response: {
            type: "numeric",
            parts: [{ label: "f^{-1}(4)", answer: 5.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Inverse evaluation",
                statement: "$f^{-1}(4)$ can be found by solving $f(x) = 4$.",
              },
            ],
            steps: [
              {
                reasoning: "Method: solve $\\dfrac{2x+1}{3} = 4$.",
                working: "\\frac{2x+1}{3}=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2x + 1 = 12$.",
                working: "2x+1=12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2x = 11$.",
                working: "2x=11",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 5.5$.",
                working: "x = 5.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5.5$",
            commonErrors: ["Using $f(4)$ instead of solving $f(x) = 4$."],
          },
        },
        {
          id: "cial-m-u1-ci-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Composite and inverse functions.",
          parts: [
            {
              label: "a",
              prompt: "For $f(x)=2x+1$, $g(x)=x-3$: find $fg(x)$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "For the same functions, find $gf(x)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find $f^{-1}(x)$ for $f(x)=3x-2$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain why order matters in composites.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Composites and inverses",
                statement:
                  "$fg=f\\circ g$; inverse by swapping and rearranging.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$fg(x)=2(x-3)+1=2x-5$.",
                working: "2x-5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct simplification.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$gf(x)=(2x+1)-3=2x-2$.",
                working: "2x-2",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$x=3y-2 \\Rightarrow y=\\frac{x+2}{3}$.",
                working: "y=\\frac{x+2}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Rearrangement correct.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$f^{-1}(x)=\\frac{x+2}{3}$.",
                working: "f^{-1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$fg \\ne gf$ as shown: $2x-5 \\ne 2x-2$.",
                working: "2x-5 \\ne 2x-2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Functions applied in different orders give different results.",
                working: "\\text{order}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Clear explanation.",
                working: "\\text{not commutative}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2x−5 (b) 2x−2 (c) (x+2)/3 (d) order matters, fg≠gf",
          },
        },
      ],
    },
    {
      id: "cial-m-u1-modulus",
      title: "Modulus functions",
      skill:
        "Solve modulus equations and inequalities and sketch $y = |f(x)|$.",
      lesson: {
        sections: [
          {
            heading: "Modulus basics",
            body: "$|a|$ is the distance of $a$ from zero: $|{-3}| = 3$, $|5| = 5$. Key rules: $|x| = a$ (for $a \\ge 0$) gives $x = a$ or $x = -a$; $|x| < a$ gives $-a < x < a$; $|x| > a$ gives $x < -a$ or $x > a$.",
          },
          {
            heading: "Solving modulus equations",
            body: "For $|x - 3| = 2$: split into $x - 3 = 2$ or $x - 3 = -2$, giving $x = 5$ or $x = 1$. For $|2x + 1| = 7$: $2x + 1 = \\pm 7$, giving $x = 3$ or $x = -4$.",
          },
          {
            heading: "Sketching $y = |f(x)|$",
            body: "Reflect any part of the graph below the $x$-axis up to above it. $y = |x|$ is a V-shape with vertex at the origin; $y = |x - 2|$ shifts the vertex to $(2, 0)$.",
          },
        ],
        keyFormulas: [
          {
            name: "Modulus rules",
            statement:
              "$|x|=a \\Rightarrow x=\\pm a$; $|x|<a \\Rightarrow -a<x<a$; $|x|>a \\Rightarrow x<-a$ or $x>a$.",
          },
        ],
        workedExample: {
          problem: "Solve $|x - 3| < 2$.",
          solution: "$-2 < x - 3 < 2 \\Rightarrow 1 < x < 5$.",
        },
      },
      questions: [
        {
          id: "cial-m-u1-mo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $|x| = 5$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 5 },
              { label: "x", answer: -5 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Modulus equation",
                statement: "$|x| = a$ gives $x = a$ or $x = -a$.",
              },
            ],
            steps: [
              {
                reasoning: "$x = 5$ or $x = -5$.",
                working: "x = \\pm 5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$x = \\pm 5$",
            commonErrors: ["Forgetting the negative solution."],
          },
        },
        {
          id: "cial-m-u1-mo-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $|2x + 1| = 7$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 3 },
              { label: "x", answer: -4 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus equation",
                statement: "$|u| = a \\Rightarrow u = \\pm a$.",
              },
            ],
            steps: [
              {
                reasoning: "$2x + 1 = 7$ or $2x + 1 = -7$.",
                working: "2x+1 = \\pm 7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$2x = 6 \\Rightarrow x = 3$; $2x = -8 \\Rightarrow x = -4$.",
                working: "x=3,\\ x=-4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both solutions correct.",
                working: "3, -4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 3$ or $x = -4$",
            commonErrors: ["Missing one branch of the equation."],
          },
        },
        {
          id: "cial-m-u1-mo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $|x - 3| < 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus inequality",
                statement: "$|u| < a \\Rightarrow -a < u < a$.",
              },
            ],
            steps: [
              {
                reasoning: "$-2 < x - 3 < 2$.",
                working: "-2 < x-3 < 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add 3: $1 < x < 5$.",
                working: "1 < x < 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct interval.",
                working: "1<x<5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Strict inequalities preserved.",
                working: "\\text{strict}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$1 < x < 5$",
            commonErrors: [
              "Writing $1 \\le x \\le 5$ — strict inequality required.",
            ],
          },
        },
        {
          id: "cial-m-u1-mo-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Modulus functions.",
          parts: [
            { label: "a", prompt: "Solve $|x|=5$.", marks: 1 },
            { label: "b", prompt: "Solve $|2x+1|=7$.", marks: 3 },
            { label: "c", prompt: "Solve $|x-3|<2$.", marks: 3 },
            {
              label: "d",
              prompt: "Sketch $y=|x-2|$ and state its vertex.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Modulus",
                statement:
                  "$|u|=a \\Rightarrow \\pm$; $|u|<a \\Rightarrow$ interval; $y=|x-h|$ V-shape at $(h,0)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$x=\\pm5$.",
                working: "x=\\pm5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$2x+1=\\pm7$.",
                working: "2x+1=\\pm7",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x=3$ or $x=-4$.",
                working: "x=3,-4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$-2<x-3<2$.",
                working: "-2<x-3<2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$1<x<5$.",
                working: "1<x<5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct interval.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "V-shape reflected about $x=2$.",
                working: "\\text{V-shape}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Vertex at $(2,0)$.",
                working: "(2,0)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct description.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) ±5 (b) 3,−4 (c) 1<x<5 (d) V vertex (2,0)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u1-composite-inverse-modulus-notes",
      title: "Composite, inverse and modulus functions — revision notes",
      summary:
        "Forming $fg(x)$, finding $f^{-1}(x)$, and solving $|f(x)|=k$ and modulus inequalities.",
      sections: [
        {
          heading: "Composite functions",
          body: "$fg(x)=f(g(x))$ — apply $g$ first, then $f$. Order matters: $fg\\ne gf$ in general. Watch domain restrictions inherited from $g$.",
        },
        {
          heading: "Inverse functions",
          body: "To find $f^{-1}$: write $y=f(x)$, swap $x$ and $y$, solve for $y$. Domain of $f^{-1}$ = range of $f$ and vice versa. Check $f^{-1}$ exists — $f$ must be one-to-one; if not, restrict the domain first.",
        },
        {
          heading: "Modulus",
          body: "$|x|=a$ ($a\\ge0$) gives $x=\\pm a$. For $|f(x)|=k$: solve $f(x)=k$ AND $f(x)=-k$, keep both sets of solutions. For $|f(x)|<k$: solve $-k<f(x)<k$ and give the interval. Sketch $y=|f(x)|$ by reflecting the parts of $y=f(x)$ below the $x$-axis.",
        },
        {
          heading: "Exam checklist",
          body: "State the domain when restricting for an inverse. For modulus equations always produce both signs. In inequalities give answer as an interval or union of intervals.",
        },
      ],
    },
  ],
};
