import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ess12-u3-lesson-3-2",
  code: "3-2",
  title: "Soil and Erosion",
  goal: "I CAN explain soil formation and erosion processes.",
  standards: ["HS-ESS2-2", "HS-ESS2-3"],
  vocabulary: [
    { term: "Soil", definition: "Weathered rock + organic matter." },
    { term: "Weathering", definition: "Rock breakdown." },
    { term: "Erosion", definition: "Soil/rock movement." },
    { term: "Topsoil", definition: "Fertile upper layer." },
    { term: "Soil conservation", definition: "Preventing erosion." },
  ],
  concepts: [
    {
      id: "ess12-u3-soil-erosion",
      title: "Soil and erosion",
      skill: "Explain soil formation and erosion.",
      lesson: {
        sections: [
          {
            heading: "Soil formation",
            body: "Soil forms over centuries as weathering breaks rock and organic matter decomposes. Topsoil (upper layer) is most fertile — contains humus, nutrients and organisms. Soil formation is slow: ~1 cm per century in many areas.",
          },
          {
            heading: "Erosion",
            body: "Wind and water erode soil faster than it forms — a major sustainability challenge. Causes: deforestation, overgrazing, poor farming. Conservation: contour plowing, cover crops, terracing, reduced tillage.",
          },
        ],
        keyFormulas: [
          { name: "Soil", statement: "Rock + organic." },
          { name: "Erosion", statement: "Soil loss." },
          { name: "Topsoil", statement: "Fertile layer." },
        ],
        workedExample: {
          problem: "Why is topsoil loss a serious problem?",
          solution: "Topsoil contains the nutrients and organisms needed for plant growth; once lost, soil fertility drops and regeneration takes centuries.",
        },
      },
      questions: [
        {
          id: "ess12-u3-soil-erosion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Soil forms from ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only sand"
                    },
                    {
                              "id": "b",
                              "text": "weathered rock + organic matter"
                    },
                    {
                              "id": "c",
                              "text": "only clay"
                    },
                    {
                              "id": "d",
                              "text": "lava"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Soil",
                              "statement": "Rock + organic matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soil forms from weathered rock mixed with decomposed organic matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** weathered rock + organic matter",
          "commonErrors": [
                    "Thinking soil is just rock."
          ]
},
        },
        {
          id: "ess12-u3-soil-erosion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a soil conservation method?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "deforestation"
                    },
                    {
                              "id": "b",
                              "text": "overgrazing"
                    },
                    {
                              "id": "c",
                              "text": "contour plowing"
                    },
                    {
                              "id": "d",
                              "text": "bare fields"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Conservation",
                              "statement": "Contour plowing reduces erosion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contour plowing follows land contours to slow water runoff and prevent erosion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** contour plowing",
          "commonErrors": [
                    "Choosing an erosion-causing practice."
          ]
},
        },
        {
          id: "ess12-u3-soil-erosion-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Soil formation takes roughly 1 cm per century. How many years for 1 cm?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 100
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Soil formation",
                              "statement": "~100 years per cm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100 years per cm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$100$",
          "commonErrors": [
                    "Saying 1 or 10 years."
          ]
},
        },
        {
          id: "ess12-u3-soil-erosion-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why soil erosion is unsustainable even though soil technically 'renews' over time.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sustainability",
                              "statement": "Formation vs loss rate."
                    },
                    {
                              "kind": "technique",
                              "name": "Rate",
                              "statement": "Erosion >> formation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soil forms at ~1 cm/century but erosion can remove topsoil in years. Human activities accelerate erosion far beyond natural formation rates, depleting fertile topsoil faster than it regenerates — unsustainable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares formation vs erosion rates.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Erosion outpaces formation by orders of magnitude.**",
          "commonErrors": [
                    "Thinking soil is unlimited."
          ]
},
        },
      ],
    },
  ],
};
