import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edm10-u6-lesson-6-2",
  code: "6-2",
  title: "Coordinate Geometry",
  goal: "I CAN find midpoints, distances and gradients, and write the equation of a straight line, including parallel and perpendicular lines.",
  standards: ["4MA1 3.5H"],
  
  vocabulary: [
    { term: "Coordinates", definition: "The position of a point written as $(x,y)$." },
    { term: "Midpoint", definition: "The point halfway between two points: $\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$." },
    { term: "Distance", definition: "Length between two points, found with Pythagoras: $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
    { term: "Gradient", definition: "The steepness of a line: $m=\\frac{y_2-y_1}{x_2-x_1}$." },
    { term: "Parallel lines", definition: "Lines with the same gradient." },
    { term: "Perpendicular lines", definition: "Lines whose gradients multiply to $-1$ (negative reciprocals)." },
  ],
  concepts: [
    {
      id: "edm10-u6-midpoint-distance-gradient",
      title: "Midpoints, distances and gradients",
      skill: "Calculate the midpoint, length and gradient of a line segment joining two points.",
      lesson: {
        sections: [
          {
            heading: "Midpoint",
            body: "The midpoint of $A(x_1,y_1)$ and $B(x_2,y_2)$ is $\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$ — average the $x$-coordinates and average the $y$-coordinates.",
          },
          {
            heading: "Distance",
            body: "The horizontal and vertical changes between two points form a right-angled triangle, so Pythagoras gives the distance: $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Keep the answer exact (surd) if it does not simplify to a whole number or simple decimal.",
          },
          {
            heading: "Gradient",
            body: "Gradient $m=\\frac{\\text{change in }y}{\\text{change in }x}=\\frac{y_2-y_1}{x_2-x_1}$. It must be computed in the same order for both coordinates. A vertical line has undefined gradient; a horizontal line has gradient 0. Positive gradient rises left to right, negative falls.",
          },
        ],
        keyFormulas: [
          { name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
          { name: "Distance", statement: "$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
          { name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
        ],
        workedExample: {
          problem: "Find the midpoint and length of the line segment joining $A(1,2)$ and $B(7,10)$.",
          solution: "Midpoint: $\\left(\\frac{1+7}{2},\\frac{2+10}{2}\\right)=(4,6)$. Length: $\\sqrt{(7-1)^2+(10-2)^2}=\\sqrt{36+64}=\\sqrt{100}=10$.",
        },
      },
      questions: [
        {
          id: "edm10-u6-midgrad-q1",
          difficulty: "core",
          tier: "higher",
          totalMarks: 1,
          stem: "What are the coordinates of the midpoint of the line segment joining $(2,4)$ and $(6,10)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(4,\\ 7)$"
                    },
                    {
                              "id": "b",
                              "text": "$(8,\\ 14)$"
                    },
                    {
                              "id": "c",
                              "text": "$(4,\\ 6)$"
                    },
                    {
                              "id": "d",
                              "text": "$(3,\\ 5)$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Midpoint",
                              "statement": "Average the coordinates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\left(\\frac{2+6}{2},\\frac{4+10}{2}\\right)=(4,7)$.",
                              "working": "(4,\\ 7)",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $(4,7)$",
          "commonErrors": [
                    "Adding coordinates without halving, giving $(8,14)$.",
                    "Averaging incorrectly to get $(4,6)$."
          ]
},
        },
        {
          id: "edm10-u6-midgrad-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 2,
          stem: "Calculate the distance between the points $(1,2)$ and $(4,6)$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Distance",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Pythagoras",
                              "statement": "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find the coordinate differences.",
                              "working": "\\Delta x=3,\\ \\Delta y=4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Apply Pythagoras.",
                              "working": "\\sqrt{9+16}=5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Adding the differences $3+4=7$.",
                    "Squaring the sum instead of the squares."
          ]
},
        },
        {
          id: "edm10-u6-midgrad-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Find the gradient of the line that passes through the points $(2,3)$ and $(6,11)$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Gradient",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Gradient",
                              "statement": "$m=\\frac{y_2-y_1}{x_2-x_1}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compute the differences in the same order.",
                              "working": "\\Delta y=11-3=8,\\ \\Delta x=6-2=4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Divide.",
                              "working": "m=\\frac{8}{4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the gradient.",
                              "working": "m=2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Reversing the ratio to get $\\frac{4}{8}=\\frac{1}{2}$.",
                    "Subtracting coordinates in mixed order."
          ]
},
        },
        {
          id: "edm10-u6-midgrad-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "The points $A(1,2)$ and $B(7,10)$ are joined by a straight line.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the coordinates of the midpoint of $AB$.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Find the gradient of $AB$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the length of $AB$.",
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
                              "name": "Midpoint",
                              "statement": "Average the coordinates."
                    },
                    {
                              "kind": "formula",
                              "name": "Gradient and distance",
                              "statement": "$m=\\frac{\\Delta y}{\\Delta x}$; $d=\\sqrt{\\Delta x^2+\\Delta y^2}$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Average the coordinates.",
                              "working": "\\left(\\frac{1+7}{2},\\frac{2+10}{2}\\right)=(4,6)",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Compute $\\Delta y$ and $\\Delta x$.",
                              "working": "\\Delta y=8,\\ \\Delta x=6",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Divide.",
                              "working": "m=\\frac{8}{6}=\\frac{4}{3}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Apply Pythagoras.",
                              "working": "\\sqrt{36+64}=10",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $(4,6)$ (b) $\\frac{4}{3}$ (c) $10$",
          "commonErrors": [
                    "In (b) giving $\\frac{6}{8}=\\frac{3}{4}$ (inverted gradient)."
          ]
},
        },
        {
          id: "edm10-u6-midgrad-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "The points $C(-2,1)$ and $D(4,-7)$ are joined by a straight line.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the coordinates of the midpoint of $CD$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the gradient of $CD$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the length of $CD$.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Midpoint",
                              "statement": "Average the coordinates."
                    },
                    {
                              "kind": "formula",
                              "name": "Gradient and distance",
                              "statement": "$m=\\frac{\\Delta y}{\\Delta x}$; $d=\\sqrt{\\Delta x^2+\\Delta y^2}$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Average the coordinates.",
                              "working": "\\left(\\frac{-2+4}{2},\\frac{1+(-7)}{2}\\right)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate.",
                              "working": "(1,\\ -3)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Compute the differences: $\\Delta y=-7-1=-8$, $\\Delta x=4-(-2)=6$.",
                              "working": "m=\\frac{-8}{6}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Simplify.",
                              "working": "m=-\\frac{4}{3}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Apply Pythagoras: $\\sqrt{6^2+(-8)^2}=\\sqrt{100}$.",
                              "working": "\\sqrt{36+64}=10",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the length.",
                              "working": "10",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $(1,-3)$ (b) $-\\frac{4}{3}$ (c) $10$",
          "commonErrors": [
                    "Sign errors with the negative coordinates."
          ]
},
        },
        {
          id: "edm10-u6-midgrad-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "Three points are $A(1,2)$, $B(5,6)$ and $C(9,2)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the midpoint of $AB$ and the gradient of $AB$.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Find the equation of the line $BC$.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Show that $AB$ is perpendicular to $BC$.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Calculate the area of triangle $ABC$.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Midpoint and gradient",
                              "statement": "Average coordinates; $m=\\frac{\\Delta y}{\\Delta x}$."
                    },
                    {
                              "kind": "formula",
                              "name": "Equation of a line",
                              "statement": "$y-y_1=m(x-x_1)$."
                    },
                    {
                              "kind": "theorem",
                              "name": "Perpendicular gradients",
                              "statement": "$m_1m_2=-1$."
                    },
                    {
                              "kind": "formula",
                              "name": "Triangle area",
                              "statement": "$A=\\frac12\\times\\text{base}\\times\\text{height}$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Midpoint of $AB$.",
                              "working": "\\left(\\frac{1+5}{2},\\frac{2+6}{2}\\right)=(3,4)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Gradient of $AB$.",
                              "working": "m=\\frac{6-2}{5-1}=1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State both answers.",
                              "working": "(3,4),\\ m=1",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Gradient of $BC$: $\\frac{2-6}{9-5}=\\frac{-4}{4}=-1$.",
                              "working": "m=-1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use point $B(5,6)$: $y-6=-(x-5)$.",
                              "working": "y-6=-(x-5)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Simplify and check with $C$.",
                              "working": "y=-x+11\\quad(9,2):\\ -9+11=2\\checkmark",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Multiply the gradients.",
                              "working": "1\\times(-1)=-1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Conclude.",
                              "working": "AB\\perp BC",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Take $AC$ as the base: it is horizontal with length $9-1=8$; the height is the vertical distance from $B$ to $y=2$, which is $6-2=4$.",
                              "working": "\\text{base}=8,\\ \\text{height}=4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Compute the area.",
                              "working": "\\frac12\\times8\\times4=16",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $(3,4)$, $m=1$ (b) $y=-x+11$ (c) shown (d) $16$ square units",
          "commonErrors": [
                    "In (c) forgetting to compare gradients of both lines."
          ],
          "examinerNote": "Area can also be found as $\\frac12\\times AB\\times BC=\\frac12\\times\\sqrt{32}\\times\\sqrt{32}=16$."
},
        },
      ],
    },
    {
      id: "edm10-u6-equations-of-lines",
      title: "Equations of lines",
      skill: "Write the equation of a straight line and use parallel and perpendicular gradient rules.",
      lesson: {
        sections: [
          {
            heading: "Forms of the equation",
            body: "$y=mx+c$ gives gradient $m$ and $y$-intercept $c$. Given a point $(x_1,y_1)$ and gradient $m$, use $y-y_1=m(x-x_1)$. To find the equation through two points, first compute the gradient, then substitute one point to find $c$.",
          },
          {
            heading: "Parallel and perpendicular lines",
            body: "Parallel lines have equal gradients. Perpendicular gradients are negative reciprocals: if $m_1m_2=-1$ the lines are perpendicular. A horizontal line ($m=0$) is perpendicular to a vertical line (undefined gradient).",
          },
          {
            heading: "Checking whether a point lies on a line",
            body: "Substitute the $x$-coordinate into the equation and see if the resulting $y$ matches. Alternatively check whether the gradient between the point and a known point on the line equals $m$.",
          },
        ],
        keyFormulas: [
          { name: "Gradient-intercept form", statement: "$y=mx+c$" },
          { name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
          { name: "Perpendicular condition", statement: "$m_1m_2=-1$" },
        ],
        workedExample: {
          problem: "Find the equation of the line through $(2,3)$ parallel to $y=4x-1$.",
          solution: "Parallel lines have the same gradient, $m=4$. Using $y-y_1=m(x-x_1)$: $y-3=4(x-2)$, so $y=4x-5$.",
        },
      },
      questions: [
        {
          id: "edm10-u6-eqline-q1",
          difficulty: "core",
          tier: "higher",
          totalMarks: 1,
          stem: "What is the gradient of the line $y=3x-2$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$3$"
                    },
                    {
                              "id": "b",
                              "text": "$-2$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{1}{3}$"
                    },
                    {
                              "id": "d",
                              "text": "$x$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "y = mx + c",
                              "statement": "$m$ is the gradient, $c$ the $y$-intercept."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In $y=3x-2$ the coefficient of $x$ is 3.",
                              "working": "m=3",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $3$",
          "commonErrors": [
                    "Answering $-2$ (that is the $y$-intercept)."
          ]
},
        },
        {
          id: "edm10-u6-eqline-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 2,
          stem: "Write down the equation of the line that has gradient $2$ and passes through the point $(0,5)$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "y = mx + c",
                              "statement": "Use the gradient and the $y$-intercept."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The point $(0,5)$ gives $c=5$.",
                              "working": "c=5",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Write the equation.",
                              "working": "y=2x+5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$y=2x+5$",
          "commonErrors": [
                    "Writing $y=2x-5$ (sign of intercept)."
          ]
},
        },
        {
          id: "edm10-u6-eqline-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Find the equation of the line that passes through $(2,3)$ and is parallel to $y=4x-1$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Parallel lines",
                              "statement": "Parallel lines have equal gradients."
                    },
                    {
                              "kind": "formula",
                              "name": "Point-gradient form",
                              "statement": "$y-y_1=m(x-x_1)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Parallel to $y=4x-1$ means $m=4$.",
                              "working": "m=4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Substitute the point into $y-y_1=m(x-x_1)$.",
                              "working": "y-3=4(x-2)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Expand and simplify.",
                              "working": "y=4x-5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$y=4x-5$",
          "commonErrors": [
                    "Using gradient $-\\frac{1}{4}$ (that is perpendicular, not parallel).",
                    "Arithmetic slip expanding $4(x-2)$."
          ]
},
        },
        {
          id: "edm10-u6-eqline-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Find the equation of the line that passes through $(4,1)$ and is perpendicular to $y=2x+3$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Perpendicular gradients",
                              "statement": "$m_1m_2=-1$, so the perpendicular gradient is $-\\frac{1}{2}$."
                    },
                    {
                              "kind": "formula",
                              "name": "Point-gradient form",
                              "statement": "$y-y_1=m(x-x_1)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find the negative reciprocal of 2.",
                              "working": "m=-\\frac{1}{2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Substitute the point.",
                              "working": "y-1=-\\frac{1}{2}(x-4)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Expand.",
                              "working": "y=-\\frac{1}{2}x+2+1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplify.",
                              "working": "y=-\\frac{1}{2}x+3",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$y=-\\frac{1}{2}x+3$",
          "commonErrors": [
                    "Using $m=-2$ instead of the negative reciprocal.",
                    "Sign error when expanding $-\\frac{1}{2}(x-4)$."
          ]
},
        },
        {
          id: "edm10-u6-eqline-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "A straight line passes through the points $(1,2)$ and $(5,10)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the gradient of the line.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the equation of the line.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Determine whether the point $(7,13)$ lies on the line.",
                    "marks": 2
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
                              "statement": "$y=mx+c$ or $y-y_1=m(x-x_1)$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Compute the differences.",
                              "working": "\\Delta y=8,\\ \\Delta x=4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Divide.",
                              "working": "m=2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use $y-y_1=m(x-x_1)$ with $(1,2)$.",
                              "working": "y-2=2(x-1)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Simplify.",
                              "working": "y=2x",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Substitute $x=7$.",
                              "working": "y=2(7)=14",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Compare with 13 and conclude.",
                              "working": "14\\neq13\\Rightarrow\\text{the point does not lie on the line}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $m=2$ (b) $y=2x$ (c) No, $(7,13)$ is not on the line",
          "commonErrors": [
                    "In (c) checking the gradient from $(7,13)$ to only one of the given points."
          ]
},
        },
        {
          id: "edm10-u6-eqline-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "Three points are $A(1,3)$, $B(5,11)$ and $C(9,9)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the equation of the line $AB$.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Find the coordinates of the midpoint of $AB$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the equation of the line $BC$.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Show that $AB$ is perpendicular to $BC$.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Gradient and equation",
                              "statement": "$m=\\frac{\\Delta y}{\\Delta x}$; $y-y_1=m(x-x_1)$."
                    },
                    {
                              "kind": "theorem",
                              "name": "Perpendicular gradients",
                              "statement": "$m_1m_2=-1$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Gradient of $AB$: $\\frac{11-3}{5-1}=\\frac{8}{4}=2$.",
                              "working": "m=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Use point $A(1,3)$: $y-3=2(x-1)$.",
                              "working": "y-3=2(x-1)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Simplify.",
                              "working": "y=2x+1",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Average the coordinates.",
                              "working": "\\left(\\frac{1+5}{2},\\frac{3+11}{2}\\right)=(3,7)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the midpoint.",
                              "working": "(3,\\ 7)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gradient of $BC$: $\\frac{9-11}{9-5}=\\frac{-2}{4}=-\\frac{1}{2}$.",
                              "working": "m=-\\frac{1}{2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use point $B(5,11)$: $y-11=-\\frac{1}{2}(x-5)$.",
                              "working": "y-11=-\\frac{1}{2}(x-5)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Simplify: $y=-\\frac{1}{2}x+\\frac{5}{2}+11$.",
                              "working": "y=-\\frac{1}{2}x+13.5",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Multiply the gradients.",
                              "working": "2\\times\\left(-\\frac{1}{2}\\right)=-1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Conclude.",
                              "working": "AB\\perp BC",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $y=2x+1$ (b) $(3,7)$ (c) $y=-\\frac{1}{2}x+13.5$ (d) shown",
          "commonErrors": [
                    "In (c) using point $C$ and making a sign slip — any point on the line gives the same equation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u6-coordgeom-notes",
      title: "Coordinate geometry — notes",
      summary: "Midpoint, distance and gradient formulas; equations of lines; parallel and perpendicular conditions.",
      sections: [
        { heading: "Key idea", body: "Gradient $m=\\frac{\\Delta y}{\\Delta x}$; keep the subtraction order consistent for both coordinates." },
        { heading: "Equations", body: "$y=mx+c$ or point-gradient form $y-y_1=m(x-x_1)$; find $c$ by substituting a known point." },
        { heading: "Perpendicular", body: "$m_1m_2=-1$; a horizontal line is perpendicular to a vertical line." },
      ],
    },
  ],
};
