import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m10-u3-lesson-3-3",
  code: "3-3",
  title: "Surface Area and Volume",
  goal: "I CAN compute surface area and volume of prisms, pyramids, cylinders, cones and spheres.",
  standards: ["G-GMD.3", "G-GMD.1", "G-MG.2"],
  vocabulary: [
    { term: "Volume", definition: "The space inside a solid, in cubic units." },
    { term: "Surface area", definition: "The total area of all faces, in square units." },
    { term: "Prism / cylinder", definition: "Volume $=$ base area $\\times$ height." },
    { term: "Pyramid / cone", definition: "Volume $= \\frac{1}{3} \\times$ base area $\\times$ height." },
    { term: "Sphere", definition: "Volume $= \\frac{4}{3}\\pi r^3$; surface area $= 4\\pi r^2$." },
  ],
  concepts: [
    {
      id: "m10-u3-surface-area-volume",
      title: "Area and volume of solids",
      skill: "Select the right formula and compute surface area or volume.",
      lesson: {
        sections: [
          {
            heading: "Prisms and cylinders",
            body: "Both fill at a constant cross-section: $V = Bh$ where $B$ is the base area. A cylinder is a circular prism ($B = \\pi r^2$); a rectangular prism has $B = lw$. Surface area sums all faces — for a cylinder, $2\\pi r^2 + 2\\pi rh$.",
          },
          {
            heading: "Pyramids, cones, spheres",
            body: "Pyramids and cones hold exactly **one third** of the corresponding prism or cylinder: $V = \\frac{1}{3}Bh$. Cones use $B = \\pi r^2$. A sphere has $V = \\frac{4}{3}\\pi r^3$ and surface area $4\\pi r^2$ — memorize these two.",
          },
        ],
        keyFormulas: [
          { name: "Prism / cylinder", statement: "$V = Bh$" },
          { name: "Pyramid / cone", statement: "$V = \\frac{1}{3}Bh$" },
          { name: "Sphere", statement: "$V = \\frac{4}{3}\\pi r^3$; $SA = 4\\pi r^2$" },
        ],
        workedExample: {
          problem: "Find the volume of a cone with radius $3$ and height $10$.",
          solution: "$V = \\frac{1}{3} \\pi (3^2)(10) = \\frac{1}{3} \\pi \\cdot 90 = 30\\pi \\approx 94.2$ cubic units.",
        },
      },
      questions: [
        {
          id: "m10-u3-surface-area-volume-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The volume of a cylinder is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\pi r^2 h$"
                    },
                    {
                              "id": "b",
                              "text": "$2\\pi rh$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{1}{3}\\pi r^2 h$"
                    },
                    {
                              "id": "d",
                              "text": "$4\\pi r^3$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cylinder",
                              "statement": "$V = Bh = \\pi r^2 h$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Base area times height.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** $\\pi r^2 h$",
          "commonErrors": [
                    "Using the cone formula $\\frac{1}{3}\\pi r^2 h$."
          ]
},
        },
        {
          id: "m10-u3-surface-area-volume-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sphere has radius $6$. Its volume is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$288\\pi$"
                    },
                    {
                              "id": "b",
                              "text": "$144\\pi$"
                    },
                    {
                              "id": "c",
                              "text": "$36\\pi$"
                    },
                    {
                              "id": "d",
                              "text": "$216\\pi$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Sphere",
                              "statement": "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(216) = 288\\pi$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$r^3 = 216$; $\\frac{4}{3} \\times 216 = 288$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct volume.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $288\\pi$",
          "commonErrors": [
                    "Using $r^2$ instead of $r^3$."
          ]
},
        },
        {
          id: "m10-u3-surface-area-volume-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangular prism is $5 \\times 3 \\times 8$. What is its volume?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Volume",
                              "answer": 120,
                              "unit": "cubic units"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Prism",
                              "statement": "$V = lwh = 5 \\times 3 \\times 8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$V = 120$ cubic units.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$120$",
          "commonErrors": [
                    "Adding dimensions instead of multiplying."
          ]
},
        },
        {
          id: "m10-u3-surface-area-volume-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An ice-cream cone (cone) has radius $4$ cm and height $12$ cm. A scoop of ice cream is a hemisphere of radius $4$ cm sitting on top. Find the total volume of ice cream + cone, and state whether the cone's volume formula applies to the hemisphere.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cone + hemisphere",
                              "statement": "$V_{cone} = \\frac{1}{3}\\pi r^2 h$; hemisphere $= \\frac{2}{3}\\pi r^3$."
                    },
                    {
                              "kind": "concept",
                              "name": "Half sphere",
                              "statement": "Hemisphere is half a sphere."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cone: $V = \\frac{1}{3}\\pi(16)(12) = 64\\pi$ cm³.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hemisphere: $\\frac{1}{2} \\cdot \\frac{4}{3}\\pi(64) = \\frac{128\\pi}{3}$ cm³.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Total $= 64\\pi + \\frac{128\\pi}{3} = \\frac{320\\pi}{3} \\approx 335$ cm³.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\frac{320\\pi}{3} \\approx 335$ cm³",
          "commonErrors": [
                    "Using the full sphere formula for the hemisphere."
          ]
},
        },
      ],
    },
  ],
};
