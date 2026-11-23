import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "edm10-u8-lesson-8-1",
  code: "8-1",
  title: "Translations and Reflections of Graphs",
  goal: "I CAN describe translations and reflections of graphs of functions, and write the equation of a transformed graph.",
  standards: ["4MA1 3.3H", "4MA1 3.2H"],
  
  vocabulary: [
    { term: "Translation", definition: "A slide of a graph; every point moves the same distance horizontally and vertically." },
    { term: "Reflection", definition: "A flip of a graph in a mirror line: the x-axis or the y-axis." },
    { term: "Image", definition: "The new position of a point or graph after a transformation." },
    { term: "Invariant point", definition: "A point that stays fixed under a transformation, e.g. the origin under y = f(-x)." },
    { term: "Function transformation", definition: "A new function built from f(x) by changing the input or the output, e.g. f(x) + a or f(-x)." },
    { term: "Combined transformation", definition: "More than one transformation applied in a stated order." },
  ],
  concepts: [
    {
      id: "edm10-u8-translations-reflections",
      title: "Translations and reflections",
      skill: "Describe translations and reflections of y = f(x) and write equations of transformed graphs.",
      lesson: {
        sections: [
          {
            heading: "Vertical and horizontal translations",
            body: "Adding a constant to the output moves the graph vertically: $y=f(x)+a$ is a translation of $a$ units upwards (or downwards if $a$ is negative). Changing the input moves the graph horizontally: $y=f(x-h)$ is a translation of $h$ units to the right, and $y=f(x+h)$ is $h$ units to the left. In general $y=f(x-h)+k$ is the translation by the vector $\\begin{pmatrix} h \\\\ k \\end{pmatrix}$.",
          },
          {
            heading: "Reflections",
            body: "$y=-f(x)$ reflects the graph in the $x$-axis: the $y$-coordinates are negated. $y=f(-x)$ reflects the graph in the $y$-axis: the $x$-coordinates are negated, so the point $(a,b)$ maps to $(-a,b)$.",
          },
          {
            heading: "Describing and combining transformations",
            body: "To describe a transformation between two graphs, compare how the equation changes: a constant added outside $f$ gives a vertical shift, a constant inside the brackets gives a horizontal shift (with the opposite sign), and a minus sign outside or inside gives a reflection. Transformations are applied from the inside out.",
          },
        ],
        keyFormulas: [
          { name: "Vertical translation", statement: "$y=f(x)+a$: translation of $a$ units parallel to the $y$-axis" },
          { name: "Translation vector", statement: "$y=f(x-h)+k$ is the translation by $\\begin{pmatrix} h \\\\ k \\end{pmatrix}$" },
          { name: "Reflection in x-axis", statement: "$y=-f(x)$ negates the output" },
          { name: "Reflection in y-axis", statement: "$y=f(-x)$ negates the input" },
        ],
        workedExample: {
          problem: "Let $f(x)=x^2-2x$. Write down $g(x)=f(x+3)$ and describe the transformation from $y=f(x)$ to $y=g(x)$.",
          solution: "$g(x)=(x+3)^2-2(x+3)=x^2+6x+9-2x-6=x^2+4x+3$. The input is $x+3$, so the graph is translated 3 units to the left.",
        },
      },
      questions: [
        {
          id: "edm10-u8-transref-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "The graph of $y=f(x)$ is translated 5 units upwards to give $y=g(x)$. Which equation defines $g(x)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$g(x)=f(x)+5$"
                    },
                    {
                              "id": "b",
                              "text": "$g(x)=f(x)-5$"
                    },
                    {
                              "id": "c",
                              "text": "$g(x)=f(x+5)$"
                    },
                    {
                              "id": "d",
                              "text": "$g(x)=-f(x)$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vertical translation",
                              "statement": "$y=f(x)+a$ translates the graph $a$ units upwards."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Upwards means adding to the output.",
                              "working": "f(x)+5",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $g(x)=f(x)+5$",
          "commonErrors": [
                    "Choosing $f(x+5)$, which shifts horizontally instead."
          ]
},
        },
        {
          id: "edm10-u8-transref-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "The graph of $y=f(x)$ is reflected in the $y$-axis to give $y=g(x)$. Describe the image of the point $(6, 11)$ on $y=f(x)$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Reflection in y-axis",
                              "statement": "$y=f(-x)$ negates the $x$-coordinate of every point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reflection in the $y$-axis keeps the $y$-coordinate and negates the $x$-coordinate.",
                              "working": "(x,y)\\mapsto(-x,y)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Apply to $(6,11)$.",
                              "working": "(-6,11)",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$(-6, 11)$",
          "commonErrors": [
                    "Giving $(-6,-11)$, which would be a reflection in the $x$-axis."
          ]
},
        },
        {
          id: "edm10-u8-transref-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Let $f(x)=x^2-1$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the equation of the image of $y=f(x)$ after translation by the vector $\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Write down $g(x)$ if $g(x)=f(x-4)+1$.",
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
                              "name": "Translation vector",
                              "statement": "$y=f(x-h)+k$ is the translation by $\\begin{pmatrix} h \\\\ k \\end{pmatrix}$; hence vector $\\begin{pmatrix} h \\\\ k \\end{pmatrix}$ gives $y=f(x-h)+k$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Vector $\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$ means $h=-3$, $k=2$, so replace $x$ by $x+3$ and add 2.",
                              "working": "y=f(x+3)+2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Substitute $x-4$ for $x$ and add 1.",
                              "working": "g(x)=f(x-4)+1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Expand: $(x-4)^2-1+1=(x-4)^2=x^2-8x+16$.",
                              "working": "g(x)=x^2-8x+16",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $y=f(x+3)+2$ (b) $g(x)=x^2-8x+16$",
          "commonErrors": [
                    "In (a) writing $f(x-3)+2$ — the sign inside the brackets is reversed."
          ]
},
        },
        {
          id: "edm10-u8-transref-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "The graph of $y=f(x)$ passes through the point $(4, 7)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the coordinates of the image of this point on $y=f(x)+3$.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Write down the coordinates of the image of this point on $y=f(x-2)$.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Write down the coordinates of the image of this point on $y=-f(x)$.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Write down the coordinates of the image of this point on $y=f(-x)$.",
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
                              "name": "Point transformations",
                              "statement": "$(x,y)\\mapsto(x,y+a)$ for $+a$; $(x,y)\\mapsto(x+h,y)$ for $f(x-h)$; $(x,y)\\mapsto(x,-y)$ for $-f(x)$; $(x,y)\\mapsto(-x,y)$ for $f(-x)$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Add 3 to the $y$-coordinate.",
                              "working": "(4,10)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Subtract 2 from the $x$-coordinate (shift right 2).",
                              "working": "(6,7)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Negate the $y$-coordinate.",
                              "working": "(4,-7)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Negate the $x$-coordinate.",
                              "working": "(-4,7)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "State the coordinates.",
                              "working": "(-4,7)",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $(4,10)$ (b) $(6,7)$ (c) $(4,-7)$ (d) $(-4,7)$",
          "commonErrors": [
                    "For (b) giving $(2,7)$ — a shift right by 2 adds 2 to $x$, not subtracts."
          ]
},
        },
        {
          id: "edm10-u8-transref-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "Let $f(x)=x^2-4x+3$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down $g(x)$ where $g(x)=f(x)+2$, giving your answer in expanded form.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write down $h(x)$ where $h(x)=f(x-1)$, giving your answer in expanded form.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe the single transformation that maps $y=f(x)$ onto $y=f(x+5)-1$.",
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
                              "name": "Transforming functions",
                              "statement": "Replace $x$ by $x-a$ and add a constant to the output; describe the combined effect."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Add 2 to the output.",
                              "working": "g(x)=x^2-4x+5",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State in expanded form.",
                              "working": "x^2-4x+5",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Replace $x$ by $x-1$: $(x-1)^2-4(x-1)+3$.",
                              "working": "(x-1)^2-4(x-1)+3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Expand: $x^2-2x+1-4x+4+3=x^2-6x+8$.",
                              "working": "h(x)=x^2-6x+8",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$x+5$ inside shifts 5 units left; $-1$ outside shifts 1 unit down.",
                              "working": "5\\text{ left},\\ 1\\text{ down}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State as a translation vector.",
                              "working": "\\begin{pmatrix}-5\\\\-1\\end{pmatrix}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $g(x)=x^2-4x+5$ (b) $h(x)=x^2-6x+8$ (c) translation by $\\begin{pmatrix} -5 \\\\ -1 \\end{pmatrix}$ (5 left, 1 down)",
          "commonErrors": [
                    "In (c) giving $\\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix}$ — the horizontal sign is reversed."
          ]
},
        },
        {
          id: "edm10-u8-transref-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "Let $f(x)=x^2+2x-3$. The point $P$ on $y=f(x)$ has coordinates $(-1, -4)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down $g(x)=f(x-2)$ in expanded form.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write down $h(x)=-f(x)+4$ in expanded form.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe the transformation that maps $y=f(x)$ onto $y=f(x+1)-2$, giving the translation vector.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Find the coordinates of the image of $P$ under the transformation in part (c).",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Substitution",
                              "statement": "Replace $x$ by $x-a$ throughout the function."
                    },
                    {
                              "kind": "property",
                              "name": "Point mapping",
                              "statement": "Under $y=f(x-h)+k$ the point $(x,y)$ maps to $(x+h,\\ y+k)$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Substitute $x-2$: $(x-2)^2+2(x-2)-3$.",
                              "working": "(x-2)^2+2(x-2)-3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Expand: $x^2-4x+4+2x-4-3=x^2-2x-3$.",
                              "working": "g(x)=x^2-2x-3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Negate $f(x)$ then add 4: $-(x^2+2x-3)+4$.",
                              "working": "-(x^2+2x-3)+4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Simplify: $-x^2-2x+3+4=-x^2-2x+7$.",
                              "working": "h(x)=-x^2-2x+7",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$x+1$ shifts 1 left; $-2$ shifts 2 down.",
                              "working": "1\\text{ left},\\ 2\\text{ down}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the vector.",
                              "working": "\\begin{pmatrix}-1\\\\-2\\end{pmatrix}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Apply the vector to $P=(-1,-4)$: $x\\mapsto x-1$, $y\\mapsto y-2$.",
                              "working": "(-1-1,\\ -4-2)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Compute the image coordinates.",
                              "working": "(-2,-6)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Verify $P$ lies on $f$: $f(-1)=1-2-3=-4$ ✓.",
                              "working": "f(-1)=-4",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $g(x)=x^2-2x-3$ (b) $h(x)=-x^2-2x+7$ (c) $\\begin{pmatrix} -1 \\\\ -2 \\end{pmatrix}$ (d) $(-2,-6)$",
          "commonErrors": [
                    "In (d) adding the vector instead of applying the correct sign convention."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u8-stretches",
      title: "Stretches and combined transformations",
      skill: "Describe vertical and horizontal stretches of graphs and combine transformations.",
      lesson: {
        sections: [
          {
            heading: "Vertical stretches",
            body: "$y=af(x)$ stretches the graph parallel to the $y$-axis with scale factor $a$. Every $y$-coordinate is multiplied by $a$: a point $(x,y)$ maps to $(x,ay)$. If $0<a<1$ the graph is compressed towards the $x$-axis.",
          },
          {
            heading: "Horizontal stretches",
            body: "$y=f(ax)$ stretches the graph parallel to the $x$-axis with scale factor $\\frac{1}{a}$. Every $x$-coordinate is multiplied by $\\frac{1}{a}$: a point $(x,y)$ maps to $\\left(\\frac{x}{a},y\\right)$.",
          },
          {
            heading: "Combining transformations",
            body: "For $y=af(bx+c)+d$, work from the inside out: the $bx+c$ part is a horizontal transformation (stretch $\\frac{1}{b}$ then shift), the outer $a$ and $+d$ are vertical (stretch $a$ then shift $d$). Always state the order when describing a transformation.",
          },
        ],
        keyFormulas: [
          { name: "Vertical stretch", statement: "$y=af(x)$: stretch parallel to $y$-axis, scale factor $a$" },
          { name: "Horizontal stretch", statement: "$y=f(ax)$: stretch parallel to $x$-axis, scale factor $\\frac{1}{a}$" },
          { name: "Point images", statement: "$(x,y)\\mapsto(x,ay)$ for $af(x)$; $(x,y)\\mapsto\\left(\\frac{x}{a},y\\right)$ for $f(ax)$" },
        ],
        workedExample: {
          problem: "Describe fully the transformation that maps $y=x^2$ onto $y=2(x+1)^2-3$.",
          solution: "Write $y=2f(x+1)-3$ with $f(x)=x^2$. Inside: $x+1$ translates 1 unit left. The factor 2 stretches vertically with scale factor 2. Finally $-3$ translates 3 units down.",
        },
      },
      questions: [
        {
          id: "edm10-u8-stretch-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "The graph of $y=f(x)$ is transformed to $y=g(x)$ where $g(x)=5f(x)$. What is the transformation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vertical stretch, scale factor 5"
                    },
                    {
                              "id": "b",
                              "text": "Horizontal stretch, scale factor $\\frac{1}{5}$"
                    },
                    {
                              "id": "c",
                              "text": "Translation 5 units up"
                    },
                    {
                              "id": "d",
                              "text": "Reflection in the $x$-axis"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vertical stretch",
                              "statement": "$y=af(x)$ multiplies every output by $a$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The factor multiplies $f(x)$, so outputs scale by 5.",
                              "working": "y=5f(x)",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Vertical stretch, scale factor 5",
          "commonErrors": [
                    "Confusing $5f(x)$ (vertical) with $f(5x)$ (horizontal)."
          ]
},
        },
        {
          id: "edm10-u8-stretch-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Let $f(x)=x+7$ and $g(x)=3f(x)$. Find $g(2)$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "g(2)",
                              "answer": 27
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Function evaluation",
                              "statement": "$g(x)=3f(x)$ so evaluate $f$ first then multiply by 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaluate $f(2)$.",
                              "working": "f(2)=2+7=9",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Multiply by 3.",
                              "working": "3\\times 9=27",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$27$",
          "commonErrors": [
                    "Computing $3f(2)$ as $f(2)+3=12$."
          ]
},
        },
        {
          id: "edm10-u8-stretch-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Let $f(x)=x^2-1$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the scale factor and direction of the stretch taking $y=f(x)$ to $y=f(4x)$.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State the scale factor and direction of the stretch taking $y=f(x)$ to $y=\\frac{1}{2}f(x)$.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Write down $g(x)=2f(x)-1$ in expanded form.",
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
                              "name": "Stretch scale factors",
                              "statement": "$f(ax)$ has horizontal scale factor $\\frac{1}{a}$; $bf(x)$ has vertical scale factor $b$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$a=4$ inside gives horizontal scale factor $\\frac{1}{4}$.",
                              "working": "\\text{horizontal},\\ \\frac{1}{4}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Factor $\\frac{1}{2}$ outside gives vertical scale factor $\\frac{1}{2}$ (compression).",
                              "working": "\\text{vertical},\\ \\frac{1}{2}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$2(x^2-1)-1=2x^2-3$.",
                              "working": "g(x)=2x^2-3",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) horizontal, $\\frac{1}{4}$ (b) vertical, $\\frac{1}{2}$ (c) $g(x)=2x^2-3$",
          "commonErrors": [
                    "In (a) answering scale factor 4 instead of $\\frac{1}{4}$."
          ]
},
        },
        {
          id: "edm10-u8-stretch-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "The graph of $y=f(x)$ passes through the point $(3, 8)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the image of this point on $y=2f(x)$.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Write down the image of this point on $y=f(2x)$.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Write down the image of this point on $y=f(\\frac{1}{2}x)$.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Describe fully the transformation that maps $y=f(x)$ onto $y=2f(x-3)+1$.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Point images under stretches",
                              "statement": "$(x,y)\\mapsto(x,2y)$ for $2f(x)$; $(x,y)\\mapsto(2x,y)$ for $f(2x)$; $(x,y)\\mapsto(2x,y)$... for $f(\\frac{x}{2})$: $(x,y)\\mapsto(\\frac{x}{2},y)$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Double the $y$-coordinate.",
                              "working": "(3,16)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Halve the $x$-coordinate (horizontal stretch SF $\\frac{1}{2}$).",
                              "working": "(1.5,8)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Double the $x$-coordinate (horizontal stretch SF 2).",
                              "working": "(6,8)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "$x-3$ shifts 3 right; factor 2 stretches vertically SF 2; $+1$ shifts 1 up.",
                              "working": "3\\text{ right},\\ \\text{SF }2,\\ 1\\text{ up}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "State all three in order.",
                              "working": "\\text{translation }(3,0),\\ \\text{stretch SF }2,\\ \\text{translation }(0,1)",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $(3,16)$ (b) $(1.5,8)$ (c) $(6,8)$ (d) translate 3 right, vertical stretch SF 2, translate 1 up",
          "commonErrors": [
                    "Swapping the images in (b) and (c): $f(2x)$ halves $x$, $f(\\frac{x}{2})$ doubles it."
          ]
},
        },
        {
          id: "edm10-u8-stretch-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "Let $f(x)=x^2-2x$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down $g(x)=3f(x)-4$ in expanded form.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe the transformation that maps $y=f(x)$ onto $y=f(2x)$.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Write down $h(x)=f(x+1)$ in expanded form.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Find $h(4)$.",
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
                              "name": "Transforming quadratics",
                              "statement": "Apply the factor and constant outside, then substitute inside the brackets."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$3(x^2-2x)-4=3x^2-6x-4$.",
                              "working": "g(x)=3x^2-6x-4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State in expanded form.",
                              "working": "3x^2-6x-4",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$f(2x)$ is a horizontal stretch with scale factor $\\frac{1}{2}$.",
                              "working": "\\text{horizontal stretch, SF }\\frac{1}{2}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$(x+1)^2-2(x+1)=x^2+2x+1-2x-2=x^2-1$.",
                              "working": "h(x)=x^2-1",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the result.",
                              "working": "x^2-1",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "$h(4)=4^2-1=15$.",
                              "working": "16-1=15",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $g(x)=3x^2-6x-4$ (b) horizontal stretch SF $\\frac{1}{2}$ (c) $h(x)=x^2-1$ (d) $15$",
          "commonErrors": [
                    "In (c) expanding $(x+1)^2$ incorrectly or forgetting the $-2(x+1)$ term."
          ]
},
        },
        {
          id: "edm10-u8-stretch-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "Let $f(x)=x^2-1$. The graph of $y=g(x)$ is obtained from $y=f(x)$ by the transformation $y=2f(x-1)+3$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down $g(x)$ in expanded form.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Write down the equation of $y=3f(x)$.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Describe fully the transformation taking $y=f(x)$ to $y=g(x)$, stating the order.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Find the images of the points $(2,3)$ and $(-1,0)$ on $y=f(x)$ under this transformation.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "The vertex of $y=f(x)$ is $(0,-1)$. Find the coordinates of its image on $y=g(x)$.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Inside-out transformation",
                              "statement": "$2f(x-1)+3$: shift input, scale output, shift output."
                    },
                    {
                              "kind": "property",
                              "name": "Point mapping",
                              "statement": "$(x,y)\\mapsto(x+1,\\ 2y+3)$ under $y=2f(x-1)+3$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$2[(x-1)^2-1]+3=2x^2-4x+2-2+3=2x^2-4x+3$.",
                              "working": "g(x)=2x^2-4x+3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$3(x^2-1)=3x^2-3$.",
                              "working": "y=3x^2-3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$x-1$ translates 1 unit right.",
                              "working": "1\\text{ right}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Factor 2 stretches vertically with scale factor 2.",
                              "working": "\\text{vertical stretch SF }2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "$+3$ translates 3 units up; order: translate, stretch, translate.",
                              "working": "1\\text{ up};\\ \\text{in that order}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "$(x,y)\\mapsto(x+1,2y+3)$: $(2,3)\\mapsto(3,9)$ and $(-1,0)\\mapsto(0,3)$.",
                              "working": "(3,9),\\ (0,3)",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Apply mapping to $(0,-1)$: $x\\mapsto1$, $y\\mapsto2(-1)+3=1$.",
                              "working": "(0+1,\\ 2(-1)+3)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Compute coordinates.",
                              "working": "(1,1)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Verify: $g(1)=2-4+3=1$ ✓.",
                              "working": "g(1)=1",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $g(x)=2x^2-4x+3$ (b) $y=3x^2-3$ (c) translate 1 right, vertical stretch SF 2, translate 3 up (d) $(3,9)$ and $(0,3)$ (e) $(1,1)$",
          "commonErrors": [
                    "Applying the stretch before the horizontal shift, or mapping $(x,y)\\mapsto(x-1,...)$ instead of $(x+1,...)$."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u8-transformations-notes",
      title: "Transformations of graphs — notes",
      summary: "Translate, reflect and stretch graphs using changes to f(x); describe transformations in the correct order.",
      sections: [
        { heading: "Key idea", body: "Changes outside $f(x)$ affect the output (vertical); changes inside the brackets affect the input (horizontal, with reversed sign)." },
        { heading: "Sign rules", body: "$y=f(x)+a$ up/down; $y=f(x-h)+k$ vector $(h,k)$; $y=-f(x)$ reflects in $x$-axis; $y=f(-x)$ reflects in $y$-axis; $y=af(x)$ vertical stretch SF $a$; $y=f(ax)$ horizontal stretch SF $\\frac{1}{a}$." },
        { heading: "Exam technique", body: "Work inside out. For point images apply $(x,y)\\mapsto(x+h,y+k)$ for translations, then scale the appropriate coordinate for stretches." },
      ],
    },
  ],
};
