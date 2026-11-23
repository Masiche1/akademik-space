import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "edm10-u6-lesson-6-3",
  code: "6-3",
  title: "Similarity and Enlargement",
  goal: "I CAN work with similar shapes and enlargements, including scale factors for lengths, areas and volumes.",
  standards: ["4MA1 3.6", "4MA1 3.7H"],
  
  vocabulary: [
    { term: "Similar shapes", definition: "Shapes that are the same shape but different sizes: corresponding angles equal, corresponding sides proportional." },
    { term: "Scale factor", definition: "The ratio of a length in the image to the corresponding length in the original." },
    { term: "Enlargement", definition: "A transformation that multiplies all distances from a fixed centre by the scale factor." },
    { term: "Centre of enlargement", definition: "The fixed point that stays in the same position during an enlargement." },
    { term: "Area scale factor", definition: "The square of the length scale factor." },
    { term: "Volume scale factor", definition: "The cube of the length scale factor." },
  ],
  concepts: [
    {
      id: "edm10-u6-similar-shapes",
      title: "Similar shapes and enlargements",
      skill: "Find scale factors, corresponding lengths and describe enlargements.",
      lesson: {
        sections: [
          {
            heading: "Similar shapes",
            body: "Two shapes are similar if corresponding angles are equal and corresponding sides are in the same ratio. The scale factor $k$ is found from any pair of corresponding sides: $k=\\frac{\\text{new length}}{\\text{old length}}$. To find a missing side, multiply or divide by $k$.",
          },
          {
            heading: "Enlargements",
            body: "An enlargement has a centre and a scale factor. Each point maps to a point $k$ times as far from the centre in the same direction. With centre $(a,b)$, scale factor $k$ and point $(x,y)$, the image is $(a+k(x-a),\\ b+k(y-b))$. A negative scale factor gives an enlargement on the opposite side of the centre combined with a rotation of 180° about the centre (for a half-turn description at IGCSE level, describe it as enlargement with negative scale factor).",
          },
          {
            heading: "Finding the centre",
            body: "Given a shape and its image, the scale factor is the ratio of corresponding lengths. The centre lies at the intersection of lines joining corresponding vertices, or can be found by solving $(a+k(x-a),b+k(y-b))=(x',y')$ for one vertex.",
          },
        ],
        keyFormulas: [
          { name: "Scale factor", statement: "$k=\\frac{\\text{image length}}{\\text{object length}}$" },
          { name: "Image under enlargement", statement: "$(x,y)\\mapsto(a+k(x-a),\\,b+k(y-b))$" },
          { name: "Centre from a point pair", statement: "Solve $x'=a+k(x-a)$ for $a$" },
        ],
        workedExample: {
          problem: "A triangle with vertices $(1,1)$, $(3,1)$, $(1,4)$ is enlarged with scale factor 2 and centre $(0,0)$. Find the image vertices.",
          solution: "Multiply each coordinate by 2: $(2,2)$, $(6,2)$, $(2,8)$.",
        },
      },
      questions: [
        {
          id: "edm10-u6-similar-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Two triangles are similar. The sides of the smaller triangle are $3\\text{ cm}$, $4\\text{ cm}$ and $5\\text{ cm}$. The corresponding shortest side of the larger triangle is $6\\text{ cm}$. What is the scale factor from the smaller to the larger triangle?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2$"
                    },
                    {
                              "id": "b",
                              "text": "$3$"
                    },
                    {
                              "id": "c",
                              "text": "$6$"
                    },
                    {
                              "id": "d",
                              "text": "$\\frac{1}{2}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Scale factor",
                              "statement": "$k=\\frac{\\text{image}}{\\text{object}}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide the corresponding sides.",
                              "working": "k=\\frac{6}{3}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "k=2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** $2$",
          "commonErrors": [
                    "Dividing in the wrong order to get $\\frac{1}{2}$."
          ]
},
        },
        {
          id: "edm10-u6-similar-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Two rectangles measure $4\\text{ cm} \\times 6\\text{ cm}$ and $10\\text{ cm} \\times 15\\text{ cm}$. Are they similar? If so, write down the scale factor from the smaller to the larger.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Scale factor",
                              "answer": 2.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Similarity",
                              "statement": "Corresponding sides must be in the same ratio."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Check both ratios: $\\frac{10}{4}=2.5$ and $\\frac{15}{6}=2.5$ — equal, so similar.",
                              "working": "\\frac{10}{4}=\\frac{15}{6}=2.5",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the scale factor.",
                              "working": "k=2.5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Similar; $k=2.5$",
          "commonErrors": [
                    "Comparing $10$ with $6$ instead of corresponding sides."
          ]
},
        },
        {
          id: "edm10-u6-similar-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Two triangles are similar. The sides of the first triangle are $5\\text{ cm}$, $7\\text{ cm}$ and $9\\text{ cm}$. The two shorter sides of the second triangle are $15\\text{ cm}$ and $21\\text{ cm}$. Calculate the length of the third side of the second triangle.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Third side",
                              "answer": 27,
                              "unit": "cm"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Similar triangles",
                              "statement": "Corresponding sides are in the same ratio."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find the scale factor from a pair of corresponding sides.",
                              "working": "k=\\frac{15}{5}=3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Apply it to the third side: $9\\times3$.",
                              "working": "9\\times3=27",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the answer with units.",
                              "working": "27\\text{ cm}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$27\\text{ cm}$",
          "commonErrors": [
                    "Using $\\frac{21}{7}=3$ inconsistently or pairing the wrong sides."
          ]
},
        },
        {
          id: "edm10-u6-similar-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A triangle has vertices $A(1,1)$, $B(3,1)$ and $C(1,4)$. It is mapped onto a new triangle by an enlargement of scale factor $2$ with centre $(0,0)$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the coordinates of the three image vertices.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe fully the single transformation that maps the triangle onto its image.",
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
                              "name": "Enlargement",
                              "statement": "With centre $(0,0)$, multiply each coordinate by the scale factor."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Multiply each coordinate by 2.",
                              "working": "A'=(2,2),\\ B'=(6,2),\\ C'=(2,8)",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All three images correct.",
                              "working": "(2,2),(6,2),(2,8)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the transformation.",
                              "working": "\\text{Enlargement, scale factor }2\\text{, centre }(0,0)",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $(2,2)$, $(6,2)$, $(2,8)$ (b) enlargement SF 2 centre $(0,0)$",
          "commonErrors": [
                    "Doubling only one coordinate."
          ]
},
        },
        {
          id: "edm10-u6-similar-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "An enlargement has centre $(1,1)$ and scale factor $3$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the image of the point $P(2,3)$.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Find the image of the point $Q(0,1)$.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Enlargement formula",
                              "statement": "$(x,y)\\mapsto(a+k(x-a),\\,b+k(y-b))$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Apply the formula with $a=1$, $b=1$, $k=3$, $(x,y)=(2,3)$.",
                              "working": "x'=1+3(2-1)=4,\\ y'=1+3(3-1)=7",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the image.",
                              "working": "P'=(4,7)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Apply the formula with $(x,y)=(0,1)$.",
                              "working": "x'=1+3(0-1)=-2,\\ y'=1+3(1-1)=1",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the image.",
                              "working": "Q'=(-2,1)",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $(4,7)$ (b) $(-2,1)$",
          "commonErrors": [
                    "Multiplying coordinates by 3 directly, ignoring the centre.",
                    "Sign error in $1+3(0-1)$ giving 4 instead of $-2$."
          ]
},
        },
        {
          id: "edm10-u6-similar-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "A triangle with vertices $(2,1)$, $(4,1)$ and $(2,3)$ is mapped onto a triangle with vertices $(6,4)$, $(10,4)$ and $(6,8)$ by an enlargement.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the scale factor of the enlargement.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Find the centre of the enlargement.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Verify your centre using a second vertex.",
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
                              "name": "Scale factor",
                              "statement": "$k=\\frac{\\text{image length}}{\\text{object length}}$."
                    },
                    {
                              "kind": "method",
                              "name": "Finding the centre",
                              "statement": "Solve $x'=a+k(x-a)$ for $a$ using one vertex pair."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Corresponding horizontal sides: $10-6=4$ and $4-2=2$.",
                              "working": "k=\\frac{4}{2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate.",
                              "working": "k=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the scale factor.",
                              "working": "k=2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use $(2,1)\\mapsto(6,4)$: $6=a+2(2-a)$.",
                              "working": "6=4-a",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Solve for $a$.",
                              "working": "a=-2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use the $y$-coordinates: $4=b+2(1-b)$.",
                              "working": "4=2-b\\Rightarrow b=-2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the centre.",
                              "working": "(-2,\\ -2)",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Check $(4,1)\\mapsto(10,4)$: $-2+2(4-(-2))=-2+12=10$ and $-2+2(1-(-2))=4$. Correct.",
                              "working": "(-2)+2(4+2)=10,\\ (-2)+2(1+2)=4",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $k=2$ (b) centre $(-2,-2)$ (c) verified",
          "commonErrors": [
                    "Using $k=\\frac{1}{2}$ (object over image).",
                    "Forgetting the centre coordinates appear in both equations."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u6-scale-factors",
      title: "Area and volume scale factors",
      skill: "Use scale factors to relate lengths, areas and volumes of similar shapes.",
      lesson: {
        sections: [
          {
            heading: "Lengths, areas and volumes",
            body: "If the length scale factor is $k$, then areas scale by $k^2$ and volumes by $k^3$. For example, doubling every length multiplies areas by 4 and volumes by 8.",
          },
          {
            heading: "Working backwards",
            body: "Given an area or volume ratio, take the square root or cube root to find the length scale factor. If volumes are in ratio $27:8$, the length scale factor is $\\sqrt[3]{27}:\\sqrt[3]{8}=3:2$, and areas are in ratio $9:4$.",
          },
          {
            heading: "Maps and models",
            body: "A map scale $1\\text{ cm}:5\\text{ km}$ means lengths multiply by 500000 in reality, so areas on the map multiply by $500000^2$ — in practice convert carefully: $1\\text{ cm}^2$ on the map represents $(5\\text{ km})^2=25\\text{ km}^2$. Similarly a model at scale $1:50$ has volumes $50^3=125000$ times smaller than the real object.",
          },
        ],
        keyFormulas: [
          { name: "Area scale factor", statement: "$k^2$" },
          { name: "Volume scale factor", statement: "$k^3$" },
          { name: "Reverse", statement: "$k=\\sqrt{\\text{area ratio}}=\\sqrt[3]{\\text{volume ratio}}$" },
        ],
        workedExample: {
          problem: "Two similar solids have volumes in the ratio $8:1$. Find the ratio of their surface areas.",
          solution: "Length scale factor $=\\sqrt[3]{8}=2$. Area scale factor $=2^2=4$, so surface areas are in ratio $4:1$.",
        },
      },
      questions: [
        {
          id: "edm10-u6-scalefac-q1",
          difficulty: "core",
          tier: "higher",
          totalMarks: 1,
          stem: "Two similar shapes have length scale factor $3$. What is the ratio of their areas?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$3:1$"
                    },
                    {
                              "id": "b",
                              "text": "$6:1$"
                    },
                    {
                              "id": "c",
                              "text": "$9:1$"
                    },
                    {
                              "id": "d",
                              "text": "$27:1$"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Area scale factor",
                              "statement": "Areas scale by $k^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3^2=9$.",
                              "working": "3^2=9",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** $9:1$",
          "commonErrors": [
                    "Answering $27:1$ (that is the volume factor)."
          ]
},
        },
        {
          id: "edm10-u6-scalefac-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 2,
          stem: "Two similar solids have volumes in the ratio $8:1$. Find the length scale factor from the smaller to the larger solid.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Length scale factor",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Volume scale factor",
                              "statement": "Volumes scale by $k^3$, so $k=\\sqrt[3]{\\text{volume ratio}}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take the cube root of the volume ratio.",
                              "working": "k=\\sqrt[3]{8}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "k=2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Using $\\sqrt{8}$ instead of $\\sqrt[3]{8}$."
          ]
},
        },
        {
          id: "edm10-u6-scalefac-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Two similar solids have volumes in the ratio $27:8$. Find the ratio of their surface areas, giving your answer in its simplest form.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Area ratio",
                              "answer": 2.25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Scale factors",
                              "statement": "$k=\\sqrt[3]{\\text{volume ratio}}$; areas scale by $k^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Length scale factor.",
                              "working": "k=\\sqrt[3]{\\frac{27}{8}}=\\frac{3}{2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Square it for areas.",
                              "working": "k^2=\\frac{9}{4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the ratio.",
                              "working": "9:4=2.25",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$9:4$ (i.e. $2.25$)",
          "commonErrors": [
                    "Answering $27:8$ or $9:8$ instead of squaring $\\frac32$."
          ]
},
        },
        {
          id: "edm10-u6-scalefac-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "A model car is made to a scale of $1:20$. The model is $24\\text{ cm}$ long and $15\\text{ cm}$ wide.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the length of the real car, in metres.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the width of the real car, in metres.",
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
                              "name": "Scale",
                              "statement": "Multiply model lengths by 20 to get real lengths; convert cm to m at the end."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Multiply by the scale factor.",
                              "working": "24\\times20=480\\text{ cm}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Convert to metres.",
                              "working": "480\\text{ cm}=4.8\\text{ m}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the answer.",
                              "working": "4.8\\text{ m}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Multiply by 20.",
                              "working": "15\\times20=300\\text{ cm}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Convert and state.",
                              "working": "3\\text{ m}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $4.8\\text{ m}$ (b) $3\\text{ m}$",
          "commonErrors": [
                    "Forgetting to convert cm to m.",
                    "Dividing by 20 instead of multiplying."
          ]
},
        },
        {
          id: "edm10-u6-scalefac-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "Two similar solids have volumes $125\\text{ cm}^3$ and $64\\text{ cm}^3$. The height of the smaller solid is $8\\text{ cm}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the length scale factor from the smaller to the larger solid.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the ratio of their surface areas.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the height of the larger solid.",
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
                              "name": "Scale factors",
                              "statement": "$k=\\sqrt[3]{\\text{volume ratio}}$; areas scale by $k^2$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Volume ratio $125:64$, take cube roots.",
                              "working": "k=\\frac{5}{4}=1.25",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the scale factor.",
                              "working": "1.25",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Square the length scale factor.",
                              "working": "\\left(\\frac{5}{4}\\right)^2=\\frac{25}{16}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the ratio.",
                              "working": "25:16",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Multiply the height by $k$.",
                              "working": "8\\times\\frac{5}{4}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluate.",
                              "working": "10\\text{ cm}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $\\frac{5}{4}$ (b) $25:16$ (c) $10\\text{ cm}$",
          "commonErrors": [
                    "Using $\\sqrt{\\frac{125}{64}}$ instead of the cube root."
          ]
},
        },
        {
          id: "edm10-u6-scalefac-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A map uses a scale of $1\\text{ cm}:5\\text{ km}$. A region on the map has area $12\\text{ cm}^2$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the area scale factor from the map to the real region.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the real area of the region, in $\\text{km}^2$.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Two similar solids have volumes in the ratio $216:27$. Find the length scale factor.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "For the solids in part (c), find the ratio of their surface areas.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Area scale factor",
                              "statement": "$1\\text{ cm}^2$ on the map $=25\\text{ km}^2$ real."
                    },
                    {
                              "kind": "property",
                              "name": "Scale factors",
                              "statement": "$k=\\sqrt[3]{\\text{volume ratio}}$; areas scale by $k^2$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$1\\text{ cm}$ represents $5\\text{ km}$, so $1\\text{ cm}^2$ represents $25\\text{ km}^2$.",
                              "working": "25",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the factor.",
                              "working": "25",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Multiply the map area by 25.",
                              "working": "12\\times25=300",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the units.",
                              "working": "300\\text{ km}^2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Justify: each linear dimension is multiplied by 5 km per cm, so areas by $5^2=25$.",
                              "working": "5^2=25\\Rightarrow 12\\times25",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Take cube roots of $216$ and $27$.",
                              "working": "k=\\frac{6}{3}=2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the scale factor.",
                              "working": "k=2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Square the length scale factor.",
                              "working": "k^2=4",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "State the ratio.",
                              "working": "4:1",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Check: $216:27=8:1$ volumes, consistent with $k=2$.",
                              "working": "216\\div27=8=2^3",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $25$ (b) $300\\text{ km}^2$ (c) $k=2$ (d) $4:1$",
          "commonErrors": [
                    "Multiplying map area by 5 instead of 25.",
                    "Answering $8:1$ (the volume ratio) for surface areas."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u6-similarity-notes",
      title: "Similarity and enlargement — notes",
      summary: "Scale factor k for lengths, k² for areas, k³ for volumes; enlargement formula and finding the centre.",
      sections: [
        { heading: "Key idea", body: "Length scale factor $k$ multiplies all lengths; areas scale by $k^2$, volumes by $k^3$." },
        { heading: "Enlargements", body: "Image $=(a+k(x-a),\\,b+k(y-b))$; the centre can be found by solving for $a$ and $b$ from one vertex pair." },
        { heading: "Maps and models", body: "Area scale = square of length scale; convert units carefully." },
      ],
    },
  ],
};
