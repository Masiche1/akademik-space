import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "edm10-u5-lesson-5-3",
  code: "5-3",
  title: "Functions and Graphs",
  goal: "I CAN use function notation, find inverse functions of linear functions, and describe the graphs of quadratic, cubic and reciprocal functions.",
  standards: ["4MA1 2.11", "4MA1 2.12H", "4MA1 2.13H"],
  
  vocabulary: [
    { term: "Function", definition: "A rule that assigns exactly one output to each input." },
    { term: "f(x)", definition: "The output of the function $f$ when the input is $x$." },
    { term: "Inverse function", definition: "The function $f^{-1}$ that reverses $f$; $f^{-1}(f(x))=x$." },
    { term: "Vertex", definition: "The turning point of a parabola." },
    { term: "Axis of symmetry", definition: "The vertical line through the vertex of a parabola, $x=$ vertex $x$-coordinate." },
    { term: "Asymptote", definition: "A line that a curve approaches but never reaches, e.g. the axes for $y=\\frac{1}{x}$." },
  ],
  concepts: [
    {
      id: "edm10-u5-function-notation",
      title: "Function notation and inverse functions",
      skill: "Evaluate functions, compose functions, and find the inverse of a linear function.",
      lesson: {
        sections: [
          {
            heading: "Function notation",
            body: "$f(x)$ means 'the output of $f$ when the input is $x$'. If $f(x)=3x-5$ then $f(4)=3(4)-5=7$. To find $f(a)$ substitute $a$ everywhere $x$ appears. Functions can be combined: $f(g(x))$ means apply $g$ first, then $f$.",
          },
          {
            heading: "Inverse functions",
            body: "The inverse function $f^{-1}$ reverses the mapping. For a linear function $f(x)=mx+c$, swap $x$ and $y$ and make $x$ the subject: from $y=mx+c$, $x=\\frac{y-c}{m}$, so $f^{-1}(x)=\\frac{x-c}{m}$. Check with $f(f^{-1}(x))=x$.",
          },
          {
            heading: "Solving with functions",
            body: "To solve $f(x)=k$, either substitute into the formula or use the inverse: $x=f^{-1}(k)$. To solve $f(x)=g(x)$, set the two expressions equal and solve the resulting equation.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "$f(a)$ = substitute $a$ for $x$" },
          { name: "Inverse of linear function", statement: "$f(x)=mx+c\\Rightarrow f^{-1}(x)=\\frac{x-c}{m}$" },
          { name: "Composition", statement: "$f(g(x))$ = apply $g$ first, then $f$" },
        ],
        workedExample: {
          problem: "Given $f(x)=3x-5$, find $f(4)$ and $f^{-1}(7)$.",
          solution: "$f(4)=3(4)-5=7$. For the inverse: $y=3x-5\\Rightarrow x=\\frac{y+5}{3}$, so $f^{-1}(x)=\\frac{x+5}{3}$ and $f^{-1}(7)=\\frac{12}{3}=4$.",
        },
      },
      questions: [
        {
          id: "edm10-u5-funcnot-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=2x+1$, what is the value of $f(3)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$6$"
                    },
                    {
                              "id": "b",
                              "text": "$7$"
                    },
                    {
                              "id": "c",
                              "text": "$8$"
                    },
                    {
                              "id": "d",
                              "text": "$9$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Function notation",
                              "statement": "$f(a)$ means substitute $a$ for $x$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(3)=2(3)+1=7$.",
                              "working": "2(3)+1=7",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $7$",
          "commonErrors": [
                    "Computing $2x+1$ at $x=2$ by mistake, or adding instead of substituting."
          ]
},
        },
        {
          id: "edm10-u5-funcnot-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Given $f(x)=5-2x$, find the value of $f(-1)$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "f(-1)",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Function notation",
                              "statement": "Substitute $-1$ for every $x$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute.",
                              "working": "f(-1)=5-2(-1)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate, taking care with the negative sign.",
                              "working": "5+2=7",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$7$",
          "commonErrors": [
                    "Writing $5-2=3$ by ignoring the negative input."
          ]
},
        },
        {
          id: "edm10-u5-funcnot-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=4x+1$. Find $f^{-1}(9)$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "f^{-1}(9)",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Inverse of a linear function",
                              "statement": "Swap $x$ and $y$ and make $x$ the subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Write $y=4x+1$ and rearrange.",
                              "working": "x=\\frac{y-1}{4}\\Rightarrow f^{-1}(x)=\\frac{x-1}{4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Substitute $x=9$.",
                              "working": "f^{-1}(9)=\\frac{9-1}{4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "\\frac{8}{4}=2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Rearranging to $f^{-1}(x)=\\frac{x+1}{4}$ (wrong sign).",
                    "Trying to solve $4x+1=9$ without using the inverse — this also gives 2, so accept either method."
          ],
          "examinerNote": "Solving $f(x)=9$ directly is equally valid."
},
        },
        {
          id: "edm10-u5-funcnot-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "The function $f$ is defined by $f(x)=2x-1$. Find the value of $f(f(2))$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "f(f(2))",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Composite function",
                              "statement": "$f(f(x))$ means apply $f$ twice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find the inner value $f(2)$.",
                              "working": "f(2)=2(2)-1=3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Apply $f$ to 3.",
                              "working": "f(3)=2(3)-1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "2(3)-1=5",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the answer.",
                              "working": "5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Computing $f(2)^2$ or $f(2)\\times f(2)$ instead of $f(f(2))$."
          ]
},
        },
        {
          id: "edm10-u5-funcnot-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "Two functions are defined by $f(x)=2x+3$ and $g(x)=x-4$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find $f(5)$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find $g(f(2))$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the value of $x$ for which $f(x)=g(x)$.",
                    "marks": 2
          }
],
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "(a) f(5)",
                              "answer": 13
                    },
                    {
                              "label": "(b) g(f(2))",
                              "answer": 3
                    },
                    {
                              "label": "(c) x",
                              "answer": -7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Function notation",
                              "statement": "Evaluate by substitution; solve $f(x)=g(x)$ by equating expressions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Substitute $x=5$.",
                              "working": "f(5)=2(5)+3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate.",
                              "working": "13",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Find $f(2)$ first.",
                              "working": "f(2)=2(2)+3=7",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Apply $g$ to 7.",
                              "working": "g(7)=7-4=3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Set the expressions equal.",
                              "working": "2x+3=x-4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Solve.",
                              "working": "x=-7",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $13$ (b) $3$ (c) $x=-7$",
          "commonErrors": [
                    "In (b) computing $g(2)$ instead of $g(f(2))$.",
                    "In (c) subtracting wrongly and getting $x=7$."
          ]
},
        },
        {
          id: "edm10-u5-funcnot-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "The function $f$ is defined by $f(x)=4x-1$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the values of $f(3)$ and $f(-2)$.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Find an expression for $f^{-1}(x)$, and hence find $f^{-1}(7)$.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Solve $f(x)=f^{-1}(x)$.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Verify that $f(f^{-1}(5))=5$.",
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
                              "name": "Inverse of a linear function",
                              "statement": "$f^{-1}(x)=\\frac{x+1}{4}$ for $f(x)=4x-1$."
                    },
                    {
                              "kind": "method",
                              "name": "Inverse property",
                              "statement": "$f(f^{-1}(x))=x$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Evaluate $f(3)$.",
                              "working": "f(3)=4(3)-1=11",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate $f(-2)$, taking care with signs.",
                              "working": "f(-2)=4(-2)-1=-9",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State both values.",
                              "working": "11 \\text{ and } -9",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Rearrange $y=4x-1$ to make $x$ the subject.",
                              "working": "x=\\frac{y+1}{4}\\Rightarrow f^{-1}(x)=\\frac{x+1}{4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the inverse function.",
                              "working": "f^{-1}(x)=\\frac{x+1}{4}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evaluate $f^{-1}(7)$.",
                              "working": "f^{-1}(7)=\\frac{7+1}{4}=2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Set $4x-1=\\frac{x+1}{4}$ and multiply by 4.",
                              "working": "16x-4=x+1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Solve.",
                              "working": "15x=5\\Rightarrow x=\\frac{1}{3}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Find $f^{-1}(5)$.",
                              "working": "f^{-1}(5)=\\frac{5+1}{4}=\\frac{3}{2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Apply $f$: $4\\times\\frac{3}{2}-1=5$.",
                              "working": "4\\times\\frac{3}{2}-1=5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $11$ and $-9$ (b) $f^{-1}(x)=\\frac{x+1}{4}$, $f^{-1}(7)=2$ (c) $x=\\frac{1}{3}$ (d) verified",
          "commonErrors": [
                    "Writing $f^{-1}(x)=\\frac{x-1}{4}$ (sign error in rearranging)."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u5-graphs-of-functions",
      title: "Graphs of quadratic, cubic and reciprocal functions",
      skill: "Describe and sketch the key features of $y=ax^2$, $y=ax^3$ and $y=\\frac{a}{x}$ graphs.",
      lesson: {
        sections: [
          {
            heading: "Quadratic graphs $y=ax^2+bx+c$",
            body: "A quadratic graph is a parabola. $a>0$ gives a minimum, $a<0$ a maximum. The axis of symmetry is $x=-\\frac{b}{2a}$ (the $x$-coordinate of the vertex). Factorising gives the $x$-intercepts; setting $x=0$ gives the $y$-intercept.",
          },
          {
            heading: "Cubic and reciprocal graphs",
            body: "$y=ax^3$ has an S-shaped (or reversed S) curve through the origin with no turning points in the simple case $y=x^3$. $y=\\frac{a}{x}$ is a hyperbola with two branches in opposite quadrants, approaching the axes as asymptotes but never touching them.",
          },
          {
            heading: "Reading features from an equation",
            body: "For $y=(x-h)^2+k$ the vertex is $(h,k)$ and the axis of symmetry is $x=h$. For $y=\\frac{a}{x}$, substitute a value of $x$ to find $y$, or a value of $y$ to find $x$; the graph is symmetric about the line $y=x$ when $a>0$.",
          },
        ],
        keyFormulas: [
          { name: "Vertex form", statement: "$y=(x-h)^2+k$ has vertex $(h,k)$" },
          { name: "Axis of symmetry", statement: "$x=h$ for $y=(x-h)^2+k$" },
          { name: "Reciprocal", statement: "$y=\\frac{a}{x}$ has asymptotes $x=0$ and $y=0$" },
        ],
        workedExample: {
          problem: "Describe the graph of $y=x^2-4$.",
          solution: "Parabola opening upwards. $x$-intercepts at $x=\\pm2$, $y$-intercept at $(0,-4)$, vertex $(0,-4)$, axis of symmetry $x=0$.",
        },
      },
      questions: [
        {
          id: "edm10-u5-grfns-q1",
          difficulty: "core",
          tier: "higher",
          totalMarks: 2,
          stem: "Which point lies on the graph of $y=\\frac{6}{x}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(2,\\ 3)$"
                    },
                    {
                              "id": "b",
                              "text": "$(3,\\ 3)$"
                    },
                    {
                              "id": "c",
                              "text": "$(4,\\ 2)$"
                    },
                    {
                              "id": "d",
                              "text": "$(6,\\ 3)$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reciprocal function",
                              "statement": "$y=\\frac{a}{x}$ means $xy=a$ for every point on the graph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Check each point: $xy$ must equal 6.",
                              "working": "2\\times3=6",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verify the others fail: $3\\times3=9$, $4\\times2=8$, $6\\times3=18$.",
                              "working": "\\text{only }(2,3)\\text{ gives }xy=6",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** $(2,3)$",
          "commonErrors": [
                    "Checking $x+y=6$ instead of $xy=6$."
          ]
},
        },
        {
          id: "edm10-u5-grfns-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "The graph of $y=(x-2)^2+1$ is a parabola. Write down the coordinates of its vertex and the equation of its axis of symmetry.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Vertex form",
                              "statement": "$y=(x-h)^2+k$ has vertex $(h,k)$ and axis $x=h$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify $h$ and $k$ from the vertex form.",
                              "working": "h=2,\\ k=1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the vertex.",
                              "working": "(2,\\ 1)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "State the axis of symmetry.",
                              "working": "x=2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vertex $(2,1)$; axis of symmetry $x=2$",
          "commonErrors": [
                    "Giving vertex $(2,-1)$ by misreading the sign of $k$.",
                    "Writing the axis as $y=2$."
          ]
},
        },
        {
          id: "edm10-u5-grfns-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 4,
          stem: "The graph of $y=kx^2$ passes through the point $(3, 18)$. Find the value of the constant $k$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "k",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Point on a curve",
                              "statement": "Substitute the coordinates into the equation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute $x=3$ and $y=18$.",
                              "working": "18=k(3)^2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplify.",
                              "working": "18=9k",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Divide by 9.",
                              "working": "k=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the answer.",
                              "working": "k=2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$k=2$",
          "commonErrors": [
                    "Using $18=3k$ (forgetting to square 3).",
                    "Answering 18/3=6."
          ]
},
        },
        {
          id: "edm10-u5-grfns-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "The graph of $y=\\frac{6}{x}$ is drawn.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the value of $y$ when $x=2$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the value of $x$ when $y=-2$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Write down the equations of the two asymptotes of the graph.",
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
                              "name": "Reciprocal function",
                              "statement": "$xy=6$ on the curve; asymptotes are $x=0$ and $y=0$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Substitute $x=2$.",
                              "working": "y=\\frac{6}{2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate.",
                              "working": "y=3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Substitute $y=-2$ and solve.",
                              "working": "-2=\\frac{6}{x}\\Rightarrow x=-3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the value.",
                              "working": "x=-3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "State both asymptotes.",
                              "working": "x=0 \\text{ and } y=0",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $y=3$ (b) $x=-3$ (c) $x=0$ and $y=0$",
          "commonErrors": [
                    "Giving only one asymptote in (c).",
                    "In (b) answering $x=-\\frac{1}{3}$ by dividing instead of solving."
          ]
},
        },
        {
          id: "edm10-u5-grfns-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 7,
          stem: "The graph of $y=x^2-2x-3$ is drawn.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Factorise $x^2-2x-3$ and write down the $x$-intercepts.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the coordinates of the vertex of the parabola.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Write down the $y$-intercept.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Solve $x^2-2x-3=5$, giving your answers exactly.",
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
                              "name": "Factorising quadratics",
                              "statement": "$x^2-2x-3=(x-3)(x+1)$."
                    },
                    {
                              "kind": "method",
                              "name": "Vertex",
                              "statement": "Axis of symmetry midway between roots; substitute to find $y$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Factorise.",
                              "working": "(x-3)(x+1)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the $x$-intercepts.",
                              "working": "x=3 \\text{ and } x=-1",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Axis of symmetry is midway between the roots: $x=\\frac{3+(-1)}{2}=1$.",
                              "working": "x=1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Substitute $x=1$: $y=1-2-3=-4$.",
                              "working": "(1,\\ -4)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Set $x=0$.",
                              "working": "y=-3",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Rearrange to $x^2-2x-8=0$ and factorise.",
                              "working": "(x-4)(x+2)=0",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Solve.",
                              "working": "x=4 \\text{ or } x=-2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $(x-3)(x+1)$; $x=3,-1$ (b) $(1,-4)$ (c) $y=-3$ (d) $x=4$ or $x=-2$",
          "commonErrors": [
                    "In (d) solving $x^2-2x-3=0$ again instead of $=5$."
          ]
},
        },
        {
          id: "edm10-u5-grfns-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "The graph of $y=x^2-4x+3$ is drawn.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Factorise the quadratic and write down the $x$-intercepts and the $y$-intercept.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Find the coordinates of the vertex and state the minimum value of $y$.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Solve $x^2-4x+3=0$.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Solve $x^2-4x+3=5$, giving your answers in surd form.",
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
                              "name": "Factorising quadratics",
                              "statement": "$x^2-4x+3=(x-1)(x-3)$."
                    },
                    {
                              "kind": "method",
                              "name": "Quadratic formula",
                              "statement": "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Factorise.",
                              "working": "(x-1)(x-3)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the $x$-intercepts.",
                              "working": "x=1 \\text{ and } x=3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the $y$-intercept.",
                              "working": "(0,\\ 3)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Axis of symmetry midway between roots: $x=2$.",
                              "working": "x=\\frac{1+3}{2}=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Substitute: $y=4-8+3=-1$.",
                              "working": "y=-1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State vertex and minimum.",
                              "working": "(2,\\ -1),\\ \\min y=-1",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use the factorisation from (a).",
                              "working": "(x-1)(x-3)=0",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Solve.",
                              "working": "x=1 \\text{ or } x=3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Rearrange to $x^2-4x-2=0$ and apply the formula: $x=\\frac{4\\pm\\sqrt{16+8}}{2}=\\frac{4\\pm\\sqrt{24}}{2}$.",
                              "working": "x=\\frac{4\\pm2\\sqrt{6}}{2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Simplify.",
                              "working": "x=2\\pm\\sqrt{6}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $(x-1)(x-3)$; $x=1,3$; $y$-intercept $3$ (b) vertex $(2,-1)$, minimum $-1$ (c) $x=1$ or $3$ (d) $x=2\\pm\\sqrt{6}$",
          "commonErrors": [
                    "In (d) forgetting to halve $\\sqrt{24}$ correctly.",
                    "Giving decimal approximations when surd form is requested."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u5-functions-graphs-notes",
      title: "Functions and graphs — notes",
      summary: "f(x) notation, inverse of linear functions, and features of quadratic, cubic and reciprocal graphs.",
      sections: [
        { heading: "Key idea", body: "$f^{-1}$ undoes $f$; for $f(x)=mx+c$, $f^{-1}(x)=\\frac{x-c}{m}$." },
        { heading: "Quadratics", body: "Vertex form $y=(x-h)^2+k$ gives vertex $(h,k)$ and axis $x=h$; factorise for roots." },
        { heading: "Reciprocals", body: "$y=\\frac{a}{x}$ has asymptotes on both axes; check points with $xy=a$." },
      ],
    },
  ],
};
