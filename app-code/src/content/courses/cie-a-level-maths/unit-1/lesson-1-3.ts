import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cial-m-u1-lesson-1-3",
  code: "1-3",
  title: "Curve sketching and transformations",
  goal: "I CAN sketch transformed graphs of $y = f(x)$ and describe the transformations.",
  standards: ["9709 P1: functions and graphs"],
  vocabulary: [
    {
      term: "Translation",
      definition:
        "A slide of the graph: $y = f(x) + a$ shifts up/down; $y = f(x - a)$ shifts left/right.",
    },
    {
      term: "Reflection",
      definition:
        "A mirror image: $y = -f(x)$ reflects in the $x$-axis; $y = f(-x)$ in the $y$-axis.",
    },
    {
      term: "Stretch",
      definition:
        "A scaling: $y = af(x)$ stretches vertically by factor $a$; $y = f(ax)$ horizontally by factor $\\frac{1}{a}$.",
    },
    {
      term: "Invariant point",
      definition:
        "A point unchanged by a transformation, e.g. the origin under $y = f(x) + 2$.",
    },
    {
      term: "Graph of $y = f(x)$",
      definition: "The set of points $(x, f(x))$ plotted on the $xy$-plane.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u1-translations",
      title: "Translations and reflections",
      skill:
        "Sketch $y = f(x) + a$, $y = f(x - a)$, $y = -f(x)$ and $y = f(-x)$.",
      lesson: {
        sections: [
          {
            heading: "Vertical shifts",
            body: "$y = f(x) + a$ moves every point $a$ units up (if $a > 0$) or down (if $a < 0$). $y = f(x) - 3$ shifts down 3. Points on the $x$-axis move vertically; shape is unchanged.",
          },
          {
            heading: "Horizontal shifts",
            body: "$y = f(x - a)$ moves the graph $a$ units right (if $a > 0$). The 'minus inside' reverses intuition: $y = f(x - 2)$ shifts right 2, $y = f(x + 2)$ shifts left 2. Think: the graph takes the shape of $f$ but 'waits' until $x = a$.",
          },
          {
            heading: "Reflections",
            body: "$y = -f(x)$ reflects in the $x$-axis (negate the output). $y = f(-x)$ reflects in the $y$-axis (negate the input). Both flip the graph but preserve distances.",
          },
        ],
        keyFormulas: [
          {
            name: "Transformations",
            statement:
              "$f(x)+a$: vertical shift $a$; $f(x-a)$: horizontal shift right $a$; $-f(x)$: reflect $x$-axis; $f(-x)$: reflect $y$-axis.",
          },
        ],
        workedExample: {
          problem:
            "Describe the transformation from $y = x^2$ to $y = (x - 2)^2 + 1$.",
          solution:
            "Horizontal translation right 2, then vertical translation up 1. Vertex moves from $(0,0)$ to $(2,1)$.",
        },
      },
      questions: [
        {
          id: "cial-m-u1-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of $y = f(x)$ is translated to give $y = f(x) + 3$. Describe the transformation.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation 3 units up" },
              { id: "b", text: "Translation 3 units down" },
              { id: "c", text: "Translation 3 units right" },
              { id: "d", text: "Reflection in the $x$-axis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vertical translation",
                statement:
                  "$f(x) + a$ shifts every point $a$ units vertically.",
              },
            ],
            steps: [
              {
                reasoning: "$+3$ outside means shift up 3.",
                working: "\\text{up }3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Translation 3 units up",
            commonErrors: ["Confusing $f(x)+3$ with $f(x-3)$."],
          },
        },
        {
          id: "cial-m-u1-tr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where does the vertex of $y = (x - 2)^2$ move compared to $y = x^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From $(0,0)$ to $(2,0)$" },
              { id: "b", text: "From $(0,0)$ to $(-2,0)$" },
              { id: "c", text: "From $(0,0)$ to $(0,2)$" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Horizontal shift",
                statement:
                  "$f(x - a)$ shifts right by $a$; vertex $(0,0) \\to (2,0)$.",
              },
            ],
            steps: [
              {
                reasoning: "$x - 2$ inside means shift right 2.",
                working: "x-2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vertex moves to $(2,0)$.",
                working: "(2,0)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(0,0) \\to (2,0)$",
            commonErrors: ["Choosing left shift — 'minus inside' means right."],
          },
        },
        {
          id: "cial-m-u1-tr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe fully the transformation from $y = x^2$ to $y = -x^2 + 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined transformations",
                statement:
                  "Apply in order: reflect then translate, or identify net effect on key points.",
              },
            ],
            steps: [
              {
                reasoning: "$-x^2$ reflects in the $x$-axis.",
                working: "-x^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$+2$ shifts up 2.",
                working: "+2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Vertex moves from $(0,0)$ to $(0,2)$, opening downward.",
                working: "(0,2)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Both transformations identified.",
                working: "\\text{reflect+translate}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Reflect in $x$-axis, then translate up 2; vertex $(0,2)$ opening downward.",
            commonErrors: [
              "Missing the reflection — only describing the shift.",
            ],
          },
        },
        {
          id: "cial-m-u1-tr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Transformations of graphs.",
          parts: [
            {
              label: "a",
              prompt: "Describe $y=f(x)+3$ from $y=f(x)$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Describe $y=f(x-2)$ from $y=f(x)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Describe $y=-f(x)$ from $y=f(x)$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The point $(1,4)$ is on $y=f(x)$. Where does it go under $y=f(x-2)+1$?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Transformations",
                statement:
                  "$f(x)+a$: up $a$; $f(x-a)$: right $a$; $-f(x)$: reflect $x$-axis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Translation up 3.",
                working: "\\text{up }3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x-2$ inside = right 2.",
                working: "\\text{right }2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct direction.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$-f(x)$ = reflect in $x$-axis.",
                working: "\\text{reflect }x",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct axis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Under $f(x-2)$: $x$-coordinate increases by 2.",
                working: "x+2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Under $+1$: $y$-coordinate increases by 1.",
                working: "y+1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Point maps to $(3,5)$.",
                working: "(3,5)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Correct application.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) up 3 (b) right 2 (c) reflect x-axis (d) (3,5)",
          },
        },
      ],
    },
    {
      id: "cial-m-u1-stretches",
      title: "Stretches and combined transformations",
      skill:
        "Apply vertical and horizontal stretches and combine transformations.",
      lesson: {
        sections: [
          {
            heading: "Vertical stretch",
            body: "$y = af(x)$ multiplies every $y$-value by $a$. For $a > 1$ the graph stretches vertically; for $0 < a < 1$ it compresses. $y = 2f(x)$ doubles heights; $y = \\frac{1}{2}f(x)$ halves them.",
          },
          {
            heading: "Horizontal stretch",
            body: "$y = f(ax)$ compresses horizontally by factor $\\frac{1}{a}$ when $a > 1$. $y = f(2x)$ halves all $x$-coordinates toward the $y$-axis. $y = f\\left(\\frac{x}{2}\\right)$ stretches horizontally by factor 2.",
          },
          {
            heading: "Order of transformations",
            body: "When several transformations apply, work through them systematically: often translations last. Track one or two key points (e.g. vertex, intercepts) through each step to verify.",
          },
        ],
        keyFormulas: [
          {
            name: "Stretches",
            statement:
              "$af(x)$: vertical scale $a$; $f(ax)$: horizontal scale $\\frac{1}{a}$.",
          },
        ],
        workedExample: {
          problem: "Describe the transformation from $y = x^2$ to $y = 2x^2$.",
          solution:
            "Vertical stretch scale factor 2 — every $y$-coordinate doubles.",
        },
      },
      questions: [
        {
          id: "cial-m-u1-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What transformation takes $y = f(x)$ to $y = 3f(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vertical stretch scale factor 3" },
              { id: "b", text: "Horizontal stretch scale factor 3" },
              { id: "c", text: "Translation up 3" },
              { id: "d", text: "Reflection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Vertical stretch",
                statement: "$af(x)$ scales $y$-values by $a$.",
              },
            ],
            steps: [
              {
                reasoning: "$3f(x)$ triples outputs = vertical stretch 3.",
                working: "\\times 3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Vertical stretch scale factor 3",
            commonErrors: ["Confusing with $f(3x)$ which is horizontal."],
          },
        },
        {
          id: "cial-m-u1-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(4, 6)$ lies on $y = f(x)$. What are its coordinates on $y = f(2x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2, 6)$" },
              { id: "b", text: "$(8, 6)$" },
              { id: "c", text: "$(4, 12)$" },
              { id: "d", text: "$(2, 3)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Horizontal stretch",
                statement: "$f(ax)$ divides $x$-coordinates by $a$.",
              },
            ],
            steps: [
              {
                reasoning: "$f(2x)$: new $x$-value is old $x \\div 2 = 2$.",
                working: "4 \\div 2 = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y$ unchanged: $(2, 6)$.",
                working: "(2,6)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(2, 6)$",
            commonErrors: [
              "Doubling $x$ instead of halving — $f(2x)$ compresses.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the transformation from $y = x^2$ to $y = (2x)^2 - 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combined transformations",
                statement:
                  "$f(2x)$ compresses horizontally by $\\frac{1}{2}$; $-1$ shifts down.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$(2x)^2 = 4x^2$: horizontal compression factor $\\frac{1}{2}$ (equivalently vertical stretch 4).",
                working: "4x^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$-1$ translates down 1.",
                working: "-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vertex moves from $(0,0)$ to $(0,-1)$.",
                working: "(0,-1)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Both transformations identified.",
                working: "\\text{compress+shift}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Horizontal compression by $\\frac{1}{2}$, then translation down 1; vertex $(0,-1)$.",
            commonErrors: [
              "Missing the $-1$ translation or misidentifying the stretch.",
            ],
          },
        },
        {
          id: "cial-m-u1-st-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Stretches and combined transformations.",
          parts: [
            {
              label: "a",
              prompt: "Describe $y=3f(x)$ from $y=f(x)$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Describe $y=f(2x)$ from $y=f(x)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Point $(4,6)$ on $y=f(x)$: where on $y=f(2x)$?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Describe $y=(2x)^2-1$ from $y=x^2$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Stretches",
                statement: "$af(x)$ vertical; $f(ax)$ horizontal scale $1/a$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Vertical stretch factor 3.",
                working: "\\times 3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$f(2x)$ compresses horizontally by $\\frac{1}{2}$.",
                working: "\\frac{1}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct factor.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "New $x = 4 \\div 2 = 2$, $y = 6$.",
                working: "(2,6)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct point.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$(2x)^2 = 4x^2$: horizontal compression $\\frac{1}{2}$ or vertical stretch 4.",
                working: "4x^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$-1$ shifts down 1.",
                working: "-1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Both identified.",
                working: "\\text{two transforms}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Vertex $(0,-1)$ stated.",
                working: "(0,-1)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) v-stretch 3 (b) h-compress 1/2 (c) (2,6) (d) compress+down 1",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u1-curve-sketching-notes",
      title: "Curve sketching and transformations — revision notes",
      summary:
        "Transformations of $y=f(x)$: translations, stretches, reflections and their combined effect.",
      sections: [
        {
          heading: "Single transformations",
          body: "$y=f(x)+a$: translate $a$ units up ($a<0$: down). $y=f(x+a)$: translate $a$ units left ($a>0$) — the sign inside is opposite to the shift. $y=af(x)$: vertical stretch scale factor $a$. $y=f(ax)$: horizontal stretch scale factor $\\frac1a$. $y=-f(x)$: reflect in $x$-axis; $y=f(-x)$: reflect in $y$-axis.",
        },
        {
          heading: "Order of transformations",
          body: "Apply inside-out: horizontal transformations (inside $f$) before vertical (outside). For combined transforms, sketch key points — intercepts, vertices, asymptotes — then transform each point.",
        },
        {
          heading: "Worked pattern",
          body: "For $y=(x-2)^2+1$: inside $x-2$ shifts right 2; outside $+1$ shifts up 1. Vertex moves from $(0,0)$ to $(2,1)$.",
        },
        {
          heading: "Exam checklist",
          body: "Check whether the shift is left/right vs up/down carefully — $f(x-a)$ moves right. Label transformed intercepts and turning points on sketches.",
        },
      ],
    },
  ],
};
