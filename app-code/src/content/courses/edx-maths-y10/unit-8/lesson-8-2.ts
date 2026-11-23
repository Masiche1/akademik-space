import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "edm10-u8-lesson-8-2",
  code: "8-2",
  title: "Trigonometric Graphs and Solving Equations Graphically",
  goal: "I CAN sketch and interpret graphs of trigonometric and reciprocal functions, estimate gradients using tangents, and solve equations graphically.",
  standards: ["4MA1 3.3H", "4MA1 3.3"],
  
  vocabulary: [
    { term: "Amplitude", definition: "The maximum distance of a wave from its centre line." },
    { term: "Period", definition: "The horizontal length for one complete cycle of a trigonometric graph." },
    { term: "Asymptote", definition: "A line that a graph approaches but never touches, e.g. the asymptotes of $y=\\tan x$." },
    { term: "Tangent", definition: "A straight line touching a curve at one point; its gradient equals the gradient of the curve at that point." },
    { term: "Intersection point", definition: "A point where two graphs cross; its coordinates satisfy both equations." },
    { term: "Graphical solution", definition: "Solving an equation by finding the $x$-coordinates of intersection points of two graphs." },
  ],
  concepts: [
    {
      id: "edm10-u8-trig-graphs",
      title: "Graphs of trigonometric and reciprocal functions",
      skill: "Describe the features of y = x⁻², y = sin x, y = cos x and y = tan x.",
      lesson: {
        sections: [
          {
            heading: "The graph of $y=x^{-2}$",
            body: "$y=\\frac{1}{x^2}$ is defined for all $x$ except $x=0$. As $x$ approaches 0 from either side, $y$ tends to infinity, giving two branches. The lowest point on each branch is at $x=\\pm1$, where $y=1$. The graph has horizontal asymptote $y=0$ and is symmetric about the $y$-axis.",
          },
          {
            heading: "Trigonometric graphs",
            body: "$y=\\sin x$ and $y=\\cos x$ have amplitude 1, range $-1\\le y\\le1$ and period $360^{\\circ}$. $\\sin x$ passes through $(0,0)$; $\\cos x$ passes through $(0,1)$. $y=\\tan x$ has period $180^{\\circ}$, passes through $(0,0)$, and has vertical asymptotes at $x=90^{\\circ}, 270^{\\circ}, \\dots$ Its range is all real numbers.",
          },
          {
            heading: "Reading features",
            body: "Amplitude is half the vertical distance between maximum and minimum. Period is the distance between consecutive peaks (or between consecutive asymptotes for $\\tan x$). Zeros are the $x$-intercepts. Always state the domain you are working in, e.g. $0^{\\circ}\\le x\\le360^{\\circ}$.",
          },
        ],
        keyFormulas: [
          { name: "Period of sin and cos", statement: "$360^{\\circ}$" },
          { name: "Period of tan", statement: "$180^{\\circ}$" },
          { name: "Amplitude", statement: "maximum distance from the centre line (1 for $\\sin x$, $\\cos x$)" },
          { name: "Asymptotes of tan", statement: "$x=90^{\\circ}+180^{\\circ}k$" },
        ],
        workedExample: {
          problem: "For $y=\\sin x$, $0^{\\circ}\\le x\\le360^{\\circ}$, state the amplitude, period and the $x$-coordinates of the maximum and minimum values.",
          solution: "Amplitude $=1$, period $=360^{\\circ}$. Maximum $y=1$ at $x=90^{\\circ}$; minimum $y=-1$ at $x=270^{\\circ}$.",
        },
      },
      questions: [
        {
          id: "edm10-u8-trig-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "What is the period of $y=\\tan x$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$360^{\\circ}$"
                    },
                    {
                              "id": "b",
                              "text": "$180^{\\circ}$"
                    },
                    {
                              "id": "c",
                              "text": "$90^{\\circ}$"
                    },
                    {
                              "id": "d",
                              "text": "$270^{\\circ}$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Period",
                              "statement": "The horizontal length of one complete cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\tan x$ repeats every $180^{\\circ}$.",
                              "working": "180^{\\circ}",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $180^{\\circ}$",
          "commonErrors": [
                    "Quoting 360°, the period of sin and cos."
          ]
},
        },
        {
          id: "edm10-u8-trig-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "State the amplitude and the period of $y=\\cos x$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Amplitude and period",
                              "statement": "Amplitude is the maximum distance from the centre line; period is one full cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\cos x$ ranges from $-1$ to $1$, so amplitude is 1.",
                              "working": "\\text{amplitude}=1",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It completes one cycle every $360^{\\circ}$.",
                              "working": "\\text{period}=360^{\\circ}",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Amplitude $1$, period $360^{\\circ}$",
          "commonErrors": [
                    "Giving amplitude 2 (the full range) instead of 1."
          ]
},
        },
        {
          id: "edm10-u8-trig-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Consider $y=\\tan x$ for $0^{\\circ}\\le x\\le360^{\\circ}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the equations of the vertical asymptotes in this interval.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the value of $\\tan 45^{\\circ}$.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Asymptotes of tan",
                              "statement": "$\\tan x$ is undefined where $\\cos x=0$, i.e. $x=90^{\\circ}+180^{\\circ}k$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Asymptotes occur at $x=90^{\\circ}$ and $x=270^{\\circ}$ in this interval.",
                              "working": "x=90^{\\circ},\\ 270^{\\circ}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State both values.",
                              "working": "90^{\\circ}\\text{ and }270^{\\circ}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\tan 45^{\\circ}=1$.",
                              "working": "\\tan 45^{\\circ}=1",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $x=90^{\\circ}$ and $x=270^{\\circ}$ (b) $1$",
          "commonErrors": [
                    "Missing $270^{\\circ}$ or including $0^{\\circ}$ and $180^{\\circ}$, where $\\tan x=0$."
          ]
},
        },
        {
          id: "edm10-u8-trig-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "The graph of $y=\\sin x$ is drawn for $0^{\\circ}\\le x\\le360^{\\circ}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the $x$-coordinates of all the zeros of the graph in this interval.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write down the $x$-coordinates where the maximum and minimum values occur.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the value of $\\sin 30^{\\circ}$.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Sin graph",
                              "statement": "$\\sin x=0$ at $0^{\\circ},180^{\\circ},360^{\\circ}$; max at $90^{\\circ}$, min at $270^{\\circ}$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Zeros where the graph crosses the $x$-axis.",
                              "working": "0^{\\circ},180^{\\circ},360^{\\circ}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State all three.",
                              "working": "\\text{three zeros}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Maximum at the top of the first hump.",
                              "working": "x=90^{\\circ}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Minimum at the bottom of the second hump.",
                              "working": "x=270^{\\circ}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$\\sin 30^{\\circ}=0.5$.",
                              "working": "0.5",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $0^{\\circ}, 180^{\\circ}, 360^{\\circ}$ (b) max at $90^{\\circ}$, min at $270^{\\circ}$ (c) $0.5$",
          "commonErrors": [
                    "Giving $90^{\\circ}$ as a zero instead of a maximum."
          ]
},
        },
        {
          id: "edm10-u8-trig-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "The graphs of $y=x^{-2}$ and $y=x^{-1}$ are drawn on the same axes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the value of $x$ for which $y=x^{-2}$ is undefined.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Find the minimum value of $y=x^{-2}$.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Describe what happens to each graph as $x$ approaches 0 from the positive side.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Solve $x^{-2}=4$.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reciprocal functions",
                              "statement": "$y=x^{-2}$ is undefined at $x=0$ and has minimum value 1 at $x=\\pm1$; $y=x^{-1}$ has branches tending to $\\pm\\infty$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Division by zero is undefined.",
                              "working": "x=0",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Minimum of $\\frac{1}{x^2}$ occurs at $x=\\pm1$.",
                              "working": "y=1",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Both graphs rise without bound as $x\\to0^+$.",
                              "working": "y\\to\\infty\\text{ for both}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the behaviour.",
                              "working": "\\text{both tend to }+\\infty",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "$\\frac{1}{x^2}=4\\Rightarrow x^2=\\frac{1}{4}$.",
                              "working": "x^2=\\frac{1}{4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Take both roots.",
                              "working": "x=\\pm0.5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $x=0$ (b) $1$ (c) both tend to $+\\infty$ (d) $x=\\pm0.5$",
          "commonErrors": [
                    "In (d) giving only $x=0.5$ and missing the negative root."
          ]
},
        },
        {
          id: "edm10-u8-trig-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "Consider the graphs of $y=\\tan x$ and $y=\\sin x$ for $0^{\\circ}\\le x\\le360^{\\circ}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the period of $y=\\tan x$.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Write down the equations of all the vertical asymptotes of $y=\\tan x$ for $0^{\\circ}\\le x\\le720^{\\circ}$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Solve $\\tan x=1$ for $0^{\\circ}\\le x\\le360^{\\circ}$.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why $y=\\tan x$ has no maximum or minimum value.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State the range of $y=\\sin x$ and compare it with the range of $y=\\tan x$.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tan graph",
                              "statement": "Period $180^{\\circ}$; asymptotes at $90^{\\circ}+180^{\\circ}k$; range is all real numbers."
                    },
                    {
                              "kind": "property",
                              "name": "Sin range",
                              "statement": "$-1\\le\\sin x\\le1$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\tan x$ repeats every $180^{\\circ}$.",
                              "working": "180^{\\circ}",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Asymptotes every $180^{\\circ}$ starting at $90^{\\circ}$.",
                              "working": "90^{\\circ},270^{\\circ},450^{\\circ},630^{\\circ}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "List all four in the interval.",
                              "working": "\\text{four asymptotes}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$\\tan x=1$ where $x=45^{\\circ}$ in the first cycle.",
                              "working": "x=45^{\\circ}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Add one period: $45^{\\circ}+180^{\\circ}=225^{\\circ}$.",
                              "working": "x=45^{\\circ},225^{\\circ}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Near each asymptote $y\\to\\pm\\infty$, so the graph is unbounded.",
                              "working": "y\\to\\pm\\infty\\text{ near asymptotes}",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Conclude there is no maximum or minimum.",
                              "working": "\\text{unbounded range}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Range of $\\sin x$ is $-1\\le y\\le1$.",
                              "working": "-1\\le y\\le1",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "e",
                              "reasoning": "$\\tan x$ takes every real value, so its range is all real numbers.",
                              "working": "\\mathbb{R}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $180^{\\circ}$ (b) $x=90^{\\circ},270^{\\circ},450^{\\circ},630^{\\circ}$ (c) $x=45^{\\circ},225^{\\circ}$ (d) unbounded near asymptotes (e) $\\sin x$: $[-1,1]$; $\\tan x$: all real numbers",
          "commonErrors": [
                    "In (c) giving only $45^{\\circ}$ and forgetting the second solution in the interval."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u8-tangents-intersections",
      title: "Tangents and solving equations graphically",
      skill: "Use tangents to estimate gradients of curves and solve equations using intersection points.",
      lesson: {
        sections: [
          {
            heading: "Gradient of a curve",
            body: "The gradient of a curve at a point is defined as the gradient of the tangent to the curve at that point. To estimate it, draw the tangent carefully and pick two convenient points on the tangent line, then use $\\text{gradient}=\\frac{\\Delta y}{\\Delta x}$.",
          },
          {
            heading: "Intersections as solutions",
            body: "Where the graphs of $y=f(x)$ and $y=g(x)$ intersect, both equations are satisfied, so the $x$-coordinates of the intersections are the solutions of $f(x)=g(x)$. Similarly, intersections of $y=f(x)$ with the horizontal line $y=k$ solve $f(x)=k$.",
          },
          {
            heading: "Solving graphically",
            body: "Draw or sketch both graphs on the same axes, find the intersection points, and read off the $x$-coordinates. The number of intersections equals the number of solutions. Answers read from graphs are usually approximate.",
          },
        ],
        keyFormulas: [
          { name: "Gradient of tangent", statement: "$\\frac{y_2-y_1}{x_2-x_1}$ using two points on the tangent" },
          { name: "Intersections", statement: "$y=f(x)$ meets $y=g(x)$ where $f(x)=g(x)$" },
          { name: "Horizontal line", statement: "$y=f(x)$ meets $y=k$ where $f(x)=k$" },
        ],
        workedExample: {
          problem: "Solve $x^2=x+2$ using the graphs of $y=x^2$ and $y=x+2$.",
          solution: "The intersections satisfy $x^2=x+2$, i.e. $x^2-x-2=0$, giving $(x-2)(x+1)=0$, so $x=2$ or $x=-1$. On the graph these are the $x$-coordinates of the two intersection points.",
        },
      },
      questions: [
        {
          id: "edm10-u8-tangent-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "The gradient of a curve at a point is equal to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the gradient of the tangent to the curve at that point"
                    },
                    {
                              "id": "b",
                              "text": "the gradient of the chord joining the axes"
                    },
                    {
                              "id": "c",
                              "text": "the value of the function at that point"
                    },
                    {
                              "id": "d",
                              "text": "the reciprocal of the tangent's gradient"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gradient of a curve",
                              "statement": "Defined by the gradient of the tangent at the point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "This is the definition of the gradient of a curve.",
                              "working": "\\text{gradient of tangent}",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** The gradient of the tangent",
          "commonErrors": [
                    "Confusing the tangent gradient with the gradient of a chord."
          ]
},
        },
        {
          id: "edm10-u8-tangent-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "The tangent to a curve at the point $(2,5)$ also passes through $(6,9)$. Find the gradient of the curve at $(2,5)$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "gradient",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Gradient of a line",
                              "statement": "$\\text{gradient}=\\frac{\\Delta y}{\\Delta x}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use the two points on the tangent.",
                              "working": "\\frac{9-5}{6-2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "\\frac{4}{4}=1",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$1$",
          "commonErrors": [
                    "Inverting the fraction to get $\\frac{4}{4}$ reversed as $\\frac{\\Delta x}{\\Delta y}$ with different values."
          ]
},
        },
        {
          id: "edm10-u8-tangent-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "The graphs of $y=x^2$ and $y=2x$ are drawn on the same axes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the $x$-coordinates of the points of intersection.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State how many solutions the equation $x^2-2x=0$ has.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Intersections as solutions",
                              "statement": "Intersection $x$-coordinates solve $x^2=2x$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Solve $x^2=2x$, i.e. $x^2-2x=0$.",
                              "working": "x(x-2)=0",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State both solutions.",
                              "working": "x=0,\\ x=2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two intersection points means two solutions.",
                              "working": "2",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $x=0$ and $x=2$ (b) $2$ solutions",
          "commonErrors": [
                    "Dividing by $x$ and losing the solution $x=0$."
          ]
},
        },
        {
          id: "edm10-u8-tangent-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "The curves $y=x^2-2x$ and $y=x$ intersect at two points $A$ and $B$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the $x$-coordinates of $A$ and $B$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the $y$-coordinates of $A$ and $B$.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Write down the coordinates of $A$ and $B$.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Intersections",
                              "statement": "Intersections satisfy $x^2-2x=x$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Solve $x^2-2x=x\\Rightarrow x^2-3x=0$.",
                              "working": "x(x-3)=0",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State solutions.",
                              "working": "x=0,\\ x=3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use $y=x$: at $x=0$, $y=0$; at $x=3$, $y=3$.",
                              "working": "y=0,\\ y=3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Combine into coordinates.",
                              "working": "(0,0),\\ (3,3)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "State both points.",
                              "working": "A(0,0),\\ B(3,3)",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $x=0,3$ (b) $y=0,3$ (c) $(0,0)$ and $(3,3)$",
          "commonErrors": [
                    "Using $y=x^2-2x$ inconsistently or giving $x$-values as coordinates."
          ]
},
        },
        {
          id: "edm10-u8-tangent-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "The tangent to a curve at the point $(4, 6)$ passes through the points $(0, -2)$ and $(3, 2)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the gradient of the tangent.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State what this gradient represents for the curve.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Find the equation of the tangent.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Find the $x$-coordinate where the tangent crosses the $x$-axis.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Gradient",
                              "statement": "$m=\\frac{y_2-y_1}{x_2-x_1}$."
                    },
                    {
                              "kind": "formula",
                              "name": "Equation of a line",
                              "statement": "$y-y_1=m(x-x_1)$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use $(0,-2)$ and $(4,6)$ on the tangent.",
                              "working": "\\frac{6-(-2)}{4-0}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate.",
                              "working": "m=2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "The gradient of the curve at $x=4$ equals the tangent's gradient.",
                              "working": "\\text{gradient of curve at }x=4\\text{ is }2",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "$y-6=2(x-4)$.",
                              "working": "y-6=2(x-4)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Simplify.",
                              "working": "y=2x-2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Set $y=0$: $0=2x-2$.",
                              "working": "x=1",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $2$ (b) gradient of curve at $x=4$ (c) $y=2x-2$ (d) $x=1$",
          "commonErrors": [
                    "Using the curve's points instead of the tangent's points to find the gradient."
          ]
},
        },
        {
          id: "edm10-u8-tangent-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "The graphs of $y=x^2-3x+2$ and $y=x-1$ are drawn on the same axes. The tangent to $y=x^2-3x+2$ at the point $(1,0)$ passes through $(0,2)$ and $(3,-2)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the $x$-coordinates of the points of intersection of the two graphs.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Find the coordinates of the points of intersection.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the equation $x^2-3x+2=x-1$ has exactly two solutions.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Find the gradient of $y=x^2-3x+2$ at $x=1$.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Intersections as solutions",
                              "statement": "Intersection $x$-coordinates solve $f(x)=g(x)$; their number equals the number of solutions."
                    },
                    {
                              "kind": "definition",
                              "name": "Gradient of a curve",
                              "statement": "Equals the gradient of the tangent at that point."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Set the functions equal: $x^2-3x+2=x-1$.",
                              "working": "x^2-4x+3=0",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Factorise.",
                              "working": "(x-1)(x-3)=0",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State solutions.",
                              "working": "x=1,\\ x=3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Substitute into $y=x-1$: at $x=1$, $y=0$; at $x=3$, $y=2$.",
                              "working": "y=0,\\ y=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State coordinates.",
                              "working": "(1,0),\\ (3,2)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two intersection points were found.",
                              "working": "2\\text{ intersections}",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Each intersection gives one solution, so exactly two solutions.",
                              "working": "\\text{exactly two solutions}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Use the two tangent points: $\\frac{-2-2}{3-0}=\\frac{-4}{3}$? Check with $(0,2)$ and $(3,-2)$: gradient $=\\frac{-2-2}{3-0}=-\\frac{4}{3}$.",
                              "working": "\\frac{-2-2}{3-0}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Evaluate.",
                              "working": "-\\frac{4}{3}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $x=1,3$ (b) $(1,0)$ and $(3,2)$ (c) two intersection points give exactly two solutions (d) $-\\frac{4}{3}$",
          "commonErrors": [
                    "In (d) using only one tangent point or inverting the gradient."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u8-graphs-notes",
      title: "Trigonometric graphs and graphical solutions — notes",
      summary: "Key features of sin, cos, tan and reciprocal graphs; tangents give gradients; intersections solve equations.",
      sections: [
        { heading: "Key idea", body: "$\\sin x$ and $\\cos x$: amplitude 1, period $360^{\\circ}$, range $[-1,1]$. $\\tan x$: period $180^{\\circ}$, asymptotes at $90^{\\circ}+180^{\\circ}k$, unbounded range." },
        { heading: "Tangents", body: "Gradient of a curve at a point = gradient of the tangent there; estimate with two points on the tangent." },
        { heading: "Intersections", body: "Intersections of $y=f(x)$ and $y=g(x)$ solve $f(x)=g(x)$; intersections with $y=k$ solve $f(x)=k$." },
      ],
    },
  ],
};
