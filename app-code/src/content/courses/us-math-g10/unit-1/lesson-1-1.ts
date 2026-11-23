import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m10-u1-lesson-1-1",
  code: "1-1",
  title: "Angle Relationships",
  goal: "I CAN use vertical angles, linear pairs and the triangle angle sum to find missing measures.",
  standards: ["G-CO.10", "G-CO.11"],
  vocabulary: [
    { term: "Vertical angles", definition: "Opposite angles formed by two intersecting lines; they are always equal." },
    { term: "Linear pair", definition: "Two adjacent angles that form a straight line; their measures sum to $180^\\circ$." },
    { term: "Triangle angle sum", definition: "The three interior angles of any triangle add to $180^\\circ$." },
    { term: "Exterior angle", definition: "An angle formed by one side of a triangle and the extension of another side; it equals the sum of the two remote interior angles." },
    { term: "Complementary / supplementary", definition: "Pairs of angles summing to $90^\\circ$ or $180^\\circ$." },
  ],
  concepts: [
    {
      id: "m10-u1-angle-relationships",
      title: "Angle relationships",
      skill: "Chain angle facts to solve for unknown measures.",
      lesson: {
        sections: [
          {
            heading: "Pairs of angles",
            body: "When two lines intersect, **vertical angles** are equal and adjacent angles form **linear pairs** summing to $180^\\circ$. Complementary angles sum to $90^\\circ$; supplementary to $180^\\circ$. These facts let you transfer measures around a figure.",
          },
          {
            heading: "Triangles",
            body: "Every triangle's angles sum to $180^\\circ$, so knowing two angles finds the third. An **exterior angle** equals the sum of the two **remote interior angles** — often the fastest route to an unknown angle.",
          },
        ],
        keyFormulas: [
          { name: "Linear pair", statement: "$a + b = 180^\\circ$" },
          { name: "Triangle sum", statement: "$A + B + C = 180^\\circ$" },
          { name: "Exterior angle", statement: "$\\text{ext} = \\text{sum of remote interior angles}$" },
        ],
        workedExample: {
          problem: "Two angles are supplementary. One is $30^\\circ$ more than twice the other. Find both angles.",
          solution: "Let the smaller be $x$; the larger is $2x + 30$. Then $x + 2x + 30 = 180$, so $3x = 150$ and $x = 50$. The angles are $50^\\circ$ and $130^\\circ$; check: $50 + 130 = 180$. ✓",
        },
      },
      questions: [
        {
          id: "m10-u1-angle-relationships-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles form a linear pair. One measures $64^\\circ$. What is the other?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$26^\\circ$"
                    },
                    {
                              "id": "b",
                              "text": "$64^\\circ$"
                    },
                    {
                              "id": "c",
                              "text": "$116^\\circ$"
                    },
                    {
                              "id": "d",
                              "text": "$90^\\circ$"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Linear pair",
                              "statement": "Adjacent angles on a straight line sum to $180^\\circ$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$180 - 64 = 116^\\circ$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** $116^\\circ$",
          "commonErrors": [
                    "Using vertical angles (equal) instead of supplementary."
          ]
},
        },
        {
          id: "m10-u1-angle-relationships-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a triangle, two angles measure $47^\\circ$ and $68^\\circ$. What is the third angle?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$55^\\circ$"
                    },
                    {
                              "id": "b",
                              "text": "$65^\\circ$"
                    },
                    {
                              "id": "c",
                              "text": "$115^\\circ$"
                    },
                    {
                              "id": "d",
                              "text": "$45^\\circ$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Triangle sum",
                              "statement": "Angles sum to $180^\\circ$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$180 - 47 - 68 = 65^\\circ$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct third angle.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $65^\\circ$",
          "commonErrors": [
                    "Adding instead of subtracting from $180$."
          ]
},
        },
        {
          id: "m10-u1-angle-relationships-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "An exterior angle of a triangle measures $110^\\circ$. One remote interior angle is $45^\\circ$. What is the other remote interior angle?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Angle",
                              "answer": 65,
                              "unit": "degrees"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Exterior angle",
                              "statement": "Exterior angle = sum of remote interior angles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Other angle $= 110 - 45 = 65^\\circ$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$65^\\circ$",
          "commonErrors": [
                    "Adding the angles instead of subtracting."
          ]
},
        },
        {
          id: "m10-u1-angle-relationships-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Lines $AB$ and $CD$ intersect at $E$. Angle $AEC$ measures $(5x + 10)^\\circ$ and angle $BED$ measures $(3x + 30)^\\circ$. Find $x$ and all four angles, explaining which angle facts you used.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Vertical angles",
                              "statement": "$\\angle AEC = \\angle BED$ (vertical)."
                    },
                    {
                              "kind": "theorem",
                              "name": "Linear pair",
                              "statement": "Adjacent angles sum to $180^\\circ$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vertical angles are equal: $5x + 10 = 3x + 30$, so $x = 10$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each vertical pair measures $5(10)+10 = 60^\\circ$; adjacent angles measure $180 - 60 = 120^\\circ$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All four angles: $60^\\circ, 120^\\circ, 60^\\circ, 120^\\circ$ — verified by linear pairs.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 10$; angles $60^\\circ, 120^\\circ, 60^\\circ, 120^\\circ$",
          "commonErrors": [
                    "Setting vertical angles supplementary instead of equal."
          ]
},
        },
      ],
    },
  ],
};
