import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "edm10-u6-lesson-6-1",
  code: "6-1",
  title: "Areas and Volumes of Solids",
  goal: "I CAN calculate the volumes and surface areas of prisms, cylinders and composite solids.",
  standards: ["4MA1 3.3", "4MA1 3.4H"],
  
  vocabulary: [
    { term: "Prism", definition: "A solid with a constant cross-section along its length." },
    { term: "Cross-sectional area", definition: "The area of the face cut at right angles to the length of a prism." },
    { term: "Cylinder", definition: "A prism whose cross-section is a circle." },
    { term: "Curved surface area", definition: "The area of the curved part of a cylinder, $2\\pi rh$." },
    { term: "Surface area", definition: "The total area of all faces of a solid." },
    { term: "Composite solid", definition: "A solid made by joining or cutting shapes together." },
  ],
  concepts: [
    {
      id: "edm10-u6-prisms-cylinders",
      title: "Prisms and cylinders",
      skill: "Calculate volumes of prisms and cylinders, and solve capacity problems.",
      lesson: {
        sections: [
          {
            heading: "Volume of a prism",
            body: "A prism has the same cross-section all the way along its length. Its volume is $V=(\\text{area of cross-section})\\times(\\text{length})$. For a cuboid the cross-section is a rectangle, giving $V=lwh$; for a triangular prism the cross-section is a triangle, so first find $\\frac12\\times\\text{base}\\times\\text{height}$ of the triangle.",
          },
          {
            heading: "Volume of a cylinder",
            body: "A cylinder is a prism with a circular cross-section, so $V=\\pi r^2h$ where $r$ is the radius and $h$ is the height. Always use the radius, not the diameter. Keep $\\pi$ exact until the final step, then round sensibly.",
          },
          {
            heading: "Capacity problems",
            body: "$1\\text{ m}^3=1000\\text{ litres}$, so multiply a volume in cubic metres by 1000 to get litres. For filling problems, divide the volume by the flow rate to get the time. Remember $1\\text{ cm}^3=1\\text{ ml}$.",
          },
        ],
        keyFormulas: [
          { name: "Prism volume", statement: "$V=A\\times l$" },
          { name: "Cylinder volume", statement: "$V=\\pi r^2h$" },
          { name: "Unit conversions", statement: "$1\\text{ m}^3=1000\\text{ litres}=10^6\\text{ cm}^3$" },
        ],
        workedExample: {
          problem: "A cylinder has radius 3 cm and height 10 cm. Find its volume in terms of $\\pi$.",
          solution: "$V=\\pi r^2h=\\pi\\times9\\times10=90\\pi\\text{ cm}^3\\approx282.7\\text{ cm}^3$.",
        },
      },
      questions: [
        {
          id: "edm10-u6-prismcyl-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "A prism has a cross-sectional area of $15\\text{ cm}^2$ and a length of $8\\text{ cm}$. What is its volume?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$23\\text{ cm}^3$"
                    },
                    {
                              "id": "b",
                              "text": "$120\\text{ cm}^3$"
                    },
                    {
                              "id": "c",
                              "text": "$1200\\text{ cm}^3$"
                    },
                    {
                              "id": "d",
                              "text": "$13\\text{ cm}^3$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Prism volume",
                              "statement": "$V=A\\times l$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$15\\times8=120$.",
                              "working": "15\\times8=120",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $120\\text{ cm}^3$",
          "commonErrors": [
                    "Adding instead of multiplying.",
                    "Multiplying by the square of the length."
          ]
},
        },
        {
          id: "edm10-u6-prismcyl-q2",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "A cylinder has radius $4\\text{ cm}$ and height $5\\text{ cm}$. Calculate its volume. Give your answer correct to 1 decimal place.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Volume",
                              "answer": 251.3,
                              "tolerance": 0.1,
                              "unit": "cm³"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cylinder volume",
                              "statement": "$V=\\pi r^2h$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute into the formula.",
                              "working": "V=\\pi\\times4^2\\times5=80\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "80\\pi=251.3",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$251.3\\text{ cm}^3$",
          "commonErrors": [
                    "Using the diameter 8 instead of the radius 4, giving a volume 4 times too large.",
                    "Using $2\\pi r$ instead of $\\pi r^2$."
          ]
},
        },
        {
          id: "edm10-u6-prismcyl-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "A cylindrical water tank has radius $7\\text{ m}$ and height $12\\text{ m}$. Calculate its capacity in cubic metres, giving your answer correct to 1 decimal place.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Volume",
                              "answer": 1847.3,
                              "tolerance": 0.5,
                              "unit": "m³"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cylinder volume",
                              "statement": "$V=\\pi r^2h$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute the radius and height.",
                              "working": "V=\\pi\\times7^2\\times12",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplify.",
                              "working": "V=588\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "588\\pi=1847.3",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$1847.3\\text{ m}^3$",
          "commonErrors": [
                    "Using $14$ (diameter) as the radius."
          ]
},
        },
        {
          id: "edm10-u6-prismcyl-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "A right triangular prism has a cross-section which is a right-angled triangle with legs $6\\text{ cm}$ and $8\\text{ cm}$, and a length of $15\\text{ cm}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the area of the triangular cross-section.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the volume of the prism.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the units of your answer to part (b).",
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
                              "name": "Prism volume",
                              "statement": "$V=(\\text{cross-sectional area})\\times(\\text{length})$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Area of a right-angled triangle is half the product of the legs.",
                              "working": "\\frac12\\times6\\times8",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Evaluate.",
                              "working": "24\\text{ cm}^2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Multiply by the length.",
                              "working": "24\\times15",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evaluate.",
                              "working": "360\\text{ cm}^3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Volume units are cubic centimetres.",
                              "working": "\\text{cm}^3",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $24\\text{ cm}^2$ (b) $360\\text{ cm}^3$ (c) cubic centimetres",
          "commonErrors": [
                    "Using $6\\times8=48$ without halving for the triangle area.",
                    "Using the hypotenuse 10 instead of the legs for the cross-section."
          ]
},
        },
        {
          id: "edm10-u6-prismcyl-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 7,
          stem: "A cylindrical tank has radius $0.5\\text{ m}$ and height $1.2\\text{ m}$. Water is pumped into the tank at a rate of $2\\text{ litres per second}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the volume of the tank in cubic metres, giving your answer in terms of $\\pi$.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the capacity of the tank in litres, correct to the nearest litre.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the time taken to fill the tank completely, in seconds.",
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
                              "name": "Cylinder volume",
                              "statement": "$V=\\pi r^2h$."
                    },
                    {
                              "kind": "definition",
                              "name": "Capacity conversion",
                              "statement": "$1\\text{ m}^3=1000\\text{ litres}$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Substitute into $V=\\pi r^2h$.",
                              "working": "V=\\pi\\times0.5^2\\times1.2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Simplify: $0.5^2=0.25$ and $0.25\\times1.2=0.3$.",
                              "working": "V=0.3\\pi\\text{ m}^3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the answer.",
                              "working": "0.3\\pi\\text{ m}^3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Convert using $1\\text{ m}^3=1000\\text{ litres}$.",
                              "working": "0.3\\pi\\times1000=300\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evaluate.",
                              "working": "942\\text{ litres (3 s.f.)}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Divide capacity by flow rate.",
                              "working": "\\frac{300\\pi}{2}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluate.",
                              "working": "471\\text{ seconds (3 s.f.)}",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $0.3\\pi\\text{ m}^3$ (b) $942\\text{ litres}$ (c) $471\\text{ seconds}$",
          "commonErrors": [
                    "Converting litres to cubic metres the wrong way.",
                    "Forgetting that the tank volume uses radius, not diameter."
          ],
          "examinerNote": "Accept $942.5$ litres and $471.2$ seconds (3 s.f. from $300\\pi$)."
},
        },
        {
          id: "edm10-u6-prismcyl-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A cylindrical storage drum has radius $8\\text{ cm}$ and height $15\\text{ cm}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the formula for the volume of a cylinder.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the volume of the drum, giving your answer in terms of $\\pi$ and as a decimal correct to 1 decimal place.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Calculate the curved surface area of the drum, in terms of $\\pi$.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Calculate the total surface area of the drum, including both circular ends, as a decimal correct to 1 decimal place.",
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
                              "name": "Cylinder volume",
                              "statement": "$V=\\pi r^2h$."
                    },
                    {
                              "kind": "formula",
                              "name": "Cylinder surface area",
                              "statement": "Curved $=2\\pi rh$; total $=2\\pi rh+2\\pi r^2$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "State the formula.",
                              "working": "V=\\pi r^2h",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Substitute.",
                              "working": "V=\\pi\\times8^2\\times15=960\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State in terms of $\\pi$.",
                              "working": "960\\pi\\text{ cm}^3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evaluate as a decimal.",
                              "working": "3015.9\\text{ cm}^3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use $2\\pi rh$.",
                              "working": "2\\pi\\times8\\times15",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Simplify.",
                              "working": "240\\pi\\text{ cm}^2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "State the answer.",
                              "working": "240\\pi\\text{ cm}^2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Add the two circular ends $2\\pi r^2=2\\pi\\times64=128\\pi$.",
                              "working": "240\\pi+128\\pi=368\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Simplify.",
                              "working": "368\\pi\\text{ cm}^2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Evaluate.",
                              "working": "1156.1\\text{ cm}^2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(b) $960\\pi\\approx3015.9\\text{ cm}^3$ (c) $240\\pi\\text{ cm}^2$ (d) $368\\pi\\approx1156.1\\text{ cm}^2$",
          "commonErrors": [
                    "Using $\\pi r^2$ for the curved surface area instead of $2\\pi rh$.",
                    "Forgetting one of the two ends in (d)."
          ]
},
        },
      ],
    },
    {
      id: "edm10-u6-surface-areas",
      title: "Surface areas and composite solids",
      skill: "Calculate surface areas of cuboids, cylinders and composite solids.",
      lesson: {
        sections: [
          {
            heading: "Surface area of cuboids and cubes",
            body: "A cuboid has 6 rectangular faces. Pair the opposite faces: $A=2(lw+lh+wh)$. A cube of side $s$ has $A=6s^2$. Always check whether the solid is open or closed — an open-top box has no top face.",
          },
          {
            heading: "Surface area of a cylinder",
            body: "Unroll the curved surface into a rectangle of width $2\\pi r$ and height $h$: curved area $=2\\pi rh$. Add the two circular ends $\\pi r^2$ each for a closed cylinder: total $=2\\pi rh+2\\pi r^2$. For a cylinder open at one end, add only one $\\pi r^2$.",
          },
          {
            heading: "Composite solids",
            body: "For solids made by joining shapes, add the surface areas of the parts and subtract twice the area of each joining face (once for each solid). For a solid with a part removed, subtract the removed surface. Work out each piece separately and keep track of which faces are hidden.",
          },
        ],
        keyFormulas: [
          { name: "Cuboid surface area", statement: "$A=2(lw+lh+wh)$" },
          { name: "Cube surface area", statement: "$A=6s^2$" },
          { name: "Cylinder surface area", statement: "Curved $=2\\pi rh$; total $=2\\pi rh+2\\pi r^2$" },
        ],
        workedExample: {
          problem: "Find the total surface area of a closed cuboid measuring $3\\text{ cm} \\times 4\\text{ cm} \\times 5\\text{ cm}$.",
          solution: "$A=2(3\\times4+3\\times5+4\\times5)=2(12+15+20)=2\\times47=94\\text{ cm}^2$.",
        },
      },
      questions: [
        {
          id: "edm10-u6-surfaces-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "A cube has side length $4\\text{ cm}$. What is its total surface area?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$64\\text{ cm}^2$"
                    },
                    {
                              "id": "b",
                              "text": "$96\\text{ cm}^2$"
                    },
                    {
                              "id": "c",
                              "text": "$24\\text{ cm}^2$"
                    },
                    {
                              "id": "d",
                              "text": "$48\\text{ cm}^2$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cube surface area",
                              "statement": "$A=6s^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$6\\times4^2=6\\times16=96$.",
                              "working": "6\\times16=96",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $96\\text{ cm}^2$",
          "commonErrors": [
                    "Using $s^3=64$ (that is the volume).",
                    "Counting only 4 faces."
          ]
},
        },
        {
          id: "edm10-u6-surfaces-q2",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "A cuboid measures $2\\text{ cm} \\times 3\\text{ cm} \\times 4\\text{ cm}$. Calculate its total surface area.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Surface area",
                              "answer": 52,
                              "unit": "cm²"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cuboid surface area",
                              "statement": "$A=2(lw+lh+wh)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compute the three face areas.",
                              "working": "2\\times3=6,\\ 2\\times4=8,\\ 3\\times4=12",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Double the sum.",
                              "working": "2(6+8+12)=52",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$52\\text{ cm}^2$",
          "commonErrors": [
                    "Forgetting to double, giving 26.",
                    "Adding all six faces separately but making an arithmetic slip."
          ]
},
        },
        {
          id: "edm10-u6-surfaces-q3",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "A closed cylindrical can has radius $3\\text{ cm}$ and height $10\\text{ cm}$. Calculate its total surface area, giving your answer correct to 1 decimal place.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Surface area",
                              "answer": 245,
                              "tolerance": 0.5,
                              "unit": "cm²"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cylinder surface area",
                              "statement": "$A=2\\pi rh+2\\pi r^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Curved area: $2\\pi\\times3\\times10=60\\pi$; ends: $2\\pi\\times9=18\\pi$.",
                              "working": "60\\pi+18\\pi=78\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplify.",
                              "working": "A=78\\pi\\text{ cm}^2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluate.",
                              "working": "78\\pi=245.0",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$245.0\\text{ cm}^2$",
          "commonErrors": [
                    "Using only the curved area $60\\pi$.",
                    "Using diameter instead of radius for the ends."
          ]
},
        },
        {
          id: "edm10-u6-surfaces-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "A capsule-shaped container consists of a cylinder of radius $3\\text{ cm}$ and length $8\\text{ cm}$ with a hemisphere of radius $3\\text{ cm}$ attached at each end.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the curved surface area of the cylindrical part.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the total curved surface area of the whole capsule (cylinder plus both hemispheres).",
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
                              "name": "Cylinder curved area",
                              "statement": "$2\\pi rh$."
                    },
                    {
                              "kind": "formula",
                              "name": "Hemisphere area",
                              "statement": "Two hemispheres make one sphere: $4\\pi r^2$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use $2\\pi rh$.",
                              "working": "2\\pi\\times3\\times8=48\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the answer.",
                              "working": "48\\pi\\text{ cm}^2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two hemispheres of radius 3 together form a sphere of surface area $4\\pi r^2$.",
                              "working": "4\\pi\\times3^2=36\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Add to the cylinder's curved area.",
                              "working": "48\\pi+36\\pi=84\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the total.",
                              "working": "84\\pi\\text{ cm}^2\\approx263.9\\text{ cm}^2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $48\\pi\\text{ cm}^2$ (b) $84\\pi\\approx263.9\\text{ cm}^2$",
          "commonErrors": [
                    "Using the full sphere area $4\\pi r^2$ for each hemisphere (double counting).",
                    "Adding the flat circular ends — a capsule has none."
          ]
},
        },
        {
          id: "edm10-u6-surfaces-q5",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 6,
          stem: "An open-top cylindrical water trough has radius $5\\text{ m}$ and height $12\\text{ m}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the curved surface area of the trough.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the area of the base.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the total surface area of the trough, correct to 1 decimal place.",
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
                              "name": "Cylinder curved area",
                              "statement": "$2\\pi rh$."
                    },
                    {
                              "kind": "formula",
                              "name": "Circle area",
                              "statement": "$\\pi r^2$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Curved area is $2\\pi rh$.",
                              "working": "2\\pi\\times5\\times12=120\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the answer.",
                              "working": "120\\pi\\text{ m}^2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Base is a circle of radius 5.",
                              "working": "\\pi\\times5^2=25\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the answer.",
                              "working": "25\\pi\\text{ m}^2",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Add curved area and base only — the trough is open at the top.",
                              "working": "120\\pi+25\\pi=145\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluate.",
                              "working": "145\\pi=455.5\\text{ m}^2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $120\\pi\\text{ m}^2$ (b) $25\\pi\\text{ m}^2$ (c) $455.5\\text{ m}^2$",
          "commonErrors": [
                    "Including a top face for an open trough.",
                    "Using $2\\pi r^2$ for the base instead of $\\pi r^2$."
          ]
},
        },
        {
          id: "edm10-u6-surfaces-q6",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A grain silo consists of a cylinder of radius $3\\text{ m}$ and height $10\\text{ m}$ with a hemisphere of radius $3\\text{ m}$ on top. The silo stands on its flat circular base.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the volume of the cylindrical part, as a multiple of $\\pi$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the volume of the hemispherical part, as a multiple of $\\pi$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the total volume of the silo as a decimal correct to 1 decimal place.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Calculate the total surface area of the silo, including the base, as a decimal correct to 1 decimal place.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cylinder volume",
                              "statement": "$V=\\pi r^2h$."
                    },
                    {
                              "kind": "formula",
                              "name": "Hemisphere volume",
                              "statement": "$V=\\frac{2}{3}\\pi r^3$."
                    },
                    {
                              "kind": "formula",
                              "name": "Surface areas",
                              "statement": "Cylinder curved $2\\pi rh$; hemisphere curved $2\\pi r^2$; base $\\pi r^2$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use $\\pi r^2h$.",
                              "working": "\\pi\\times9\\times10=90\\pi\\text{ m}^3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "State the answer.",
                              "working": "90\\pi\\text{ m}^3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hemisphere is half a sphere: $\\frac{1}{2}\\times\\frac{4}{3}\\pi r^3$.",
                              "working": "\\frac{2}{3}\\pi\\times27=18\\pi\\text{ m}^3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "State the answer.",
                              "working": "18\\pi\\text{ m}^3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Add the volumes.",
                              "working": "90\\pi+18\\pi=108\\pi",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluate.",
                              "working": "339.3\\text{ m}^3",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Curved cylinder area $2\\pi rh=60\\pi$; curved hemisphere $2\\pi r^2=18\\pi$; base $\\pi r^2=9\\pi$.",
                              "working": "60\\pi+18\\pi+9\\pi=87\\pi",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Simplify.",
                              "working": "87\\pi\\text{ m}^2",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Evaluate.",
                              "working": "273.3\\text{ m}^2",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $90\\pi\\text{ m}^3$ (b) $18\\pi\\text{ m}^3$ (c) $339.3\\text{ m}^3$ (d) $273.3\\text{ m}^2$",
          "commonErrors": [
                    "Using the full sphere area for the hemisphere.",
                    "Forgetting the flat base or double-counting the joining circle."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edm10-u6-solids-notes",
      title: "Areas and volumes of solids — notes",
      summary: "Prism volume = cross-section × length; cylinder V=πr²h; surface areas of cuboids and cylinders; composite solids.",
      sections: [
        { heading: "Key idea", body: "A cylinder is a circular prism: use $\\pi r^2$ for its cross-section and $2\\pi rh$ for its curved surface." },
        { heading: "Composite solids", body: "Add parts, subtract joining faces (twice) and removed parts; track which faces are hidden." },
        { heading: "Units", body: "$1\\text{ m}^3=1000\\text{ litres}$; keep $\\pi$ until the final step." },
      ],
    },
  ],
};
