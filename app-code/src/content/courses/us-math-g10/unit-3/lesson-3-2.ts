import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m10-u3-lesson-3-2",
  code: "3-2",
  title: "Arc Length and Sector Area",
  goal: "I CAN compute arc length and sector area using proportions of a circle.",
  standards: ["G-C.5", "G-GMD.1"],
  vocabulary: [
    { term: "Arc length", definition: "The distance along a circle's edge: $s = r\\theta$ with $\\theta$ in radians, or $s = 2\\pi r \\cdot \\frac{\\theta}{360}$ in degrees." },
    { term: "Sector", definition: "A 'pie slice' of a circle bounded by two radii and an arc." },
    { term: "Sector area", definition: "The fraction $\\frac{\\theta}{360}$ of the full circle area $\\pi r^2$." },
    { term: "Radian", definition: "Angle measure where the arc length equals the radius; $180^\\circ = \\pi$ radians." },
    { term: "Proportion method", definition: "Arc/sector quantities are the same fraction of the whole as the central angle is of $360^\\circ$." },
  ],
  concepts: [
    {
      id: "m10-u3-arc-length-sector-area",
      title: "Arc length and sectors",
      skill: "Apply the fraction $\\frac{\\theta}{360}$ to circumference and area.",
      lesson: {
        sections: [
          {
            heading: "Arc length",
            body: "The full circumference is $2\\pi r$. An arc spanning $\\theta$ degrees is the fraction $\\frac{\\theta}{360}$ of that: $s = 2\\pi r \\cdot \\frac{\\theta}{360} = \\frac{\\pi r \\theta}{180}$. In radians it simplifies beautifully to $s = r\\theta$.",
          },
          {
            heading: "Sector area",
            body: "The full area is $\\pi r^2$, so a sector's area is $A = \\pi r^2 \\cdot \\frac{\\theta}{360}$. Equivalently $A = \\frac{1}{2}rs$ — half the radius times the arc length, just like a triangle's $\\frac{1}{2}bh$.",
          },
        ],
        keyFormulas: [
          { name: "Arc length (deg)", statement: "$s = 2\\pi r \\cdot \\frac{\\theta}{360}$" },
          { name: "Arc length (rad)", statement: "$s = r\\theta$" },
          { name: "Sector area", statement: "$A = \\pi r^2 \\cdot \\frac{\\theta}{360} = \\frac{1}{2}rs$" },
        ],
        workedExample: {
          problem: "A circle has radius $6$ cm. Find the arc length and sector area for a $60^\\circ$ central angle.",
          solution: "Arc: $s = 2\\pi(6) \\cdot \\frac{60}{360} = 12\\pi \\cdot \\frac{1}{6} = 2\\pi$ cm. Sector: $A = \\pi(36) \\cdot \\frac{1}{6} = 6\\pi$ cm².",
        },
      },
      questions: [
        {
          id: "m10-u3-arc-length-sector-area-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A semicircle ($\\theta = 180^\\circ$) of radius $r$ has arc length ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\pi r$"
                    },
                    {
                              "id": "b",
                              "text": "$2\\pi r$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{\\pi r}{2}$"
                    },
                    {
                              "id": "d",
                              "text": "$4\\pi r$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Arc length",
                              "statement": "$s = 2\\pi r \\cdot \\frac{180}{360} = \\pi r$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Half the circumference $2\\pi r$ is $\\pi r$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $\\pi r$",
          "commonErrors": [
                    "Using the full circumference."
          ]
},
        },
        {
          id: "m10-u3-arc-length-sector-area-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circle of radius $9$ has a sector with central angle $80^\\circ$. What fraction of the circle's area is the sector?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\frac{80}{180}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\frac{80}{360}$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{1}{80}$"
                    },
                    {
                              "id": "d",
                              "text": "$\\frac{80}{2\\pi}$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Sector proportion",
                              "statement": "Sector area fraction = $\\frac{\\theta}{360}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{80}{360} = \\frac{2}{9}$ of the area.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct fraction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $\\frac{80}{360}$",
          "commonErrors": [
                    "Dividing by $180$ instead of $360$."
          ]
},
        },
        {
          id: "m10-u3-arc-length-sector-area-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circle has radius $4$. What is the arc length of a $90^\\circ$ arc? Give an exact answer in terms of $\\pi$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Arc length",
                              "statement": "$s = 2\\pi(4) \\cdot \\frac{90}{360} = 8\\pi \\cdot \\frac{1}{4} = 2\\pi$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$s = 2\\pi$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct exact value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$2\\pi$",
          "commonErrors": [
                    "Reporting a decimal approximation instead of exact."
          ]
},
        },
        {
          id: "m10-u3-arc-length-sector-area-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A pizza has radius $15$ cm. One slice has a central angle of $40^\\circ$. Find the slice's crust length (arc) and area, then find how many such slices make a whole pizza.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Arc + sector",
                              "statement": "$s = 2\\pi r \\cdot \\frac{\\theta}{360}$; $A = \\pi r^2 \\cdot \\frac{\\theta}{360}$."
                    },
                    {
                              "kind": "method",
                              "name": "Count",
                              "statement": "$360 / 40 = 9$ slices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Arc: $s = 2\\pi(15) \\cdot \\frac{40}{360} = 30\\pi \\cdot \\frac{1}{9} = \\frac{10\\pi}{3} \\approx 10.47$ cm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Area: $A = \\pi(225) \\cdot \\frac{1}{9} = 25\\pi \\approx 78.5$ cm².",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$360/40 = 9$ slices per pizza.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Arc $\\approx 10.47$ cm; area $\\approx 78.5$ cm²; $9$ slices",
          "commonErrors": [
                    "Using $\\theta$ in radians without converting."
          ]
},
        },
      ],
    },
  ],
};
