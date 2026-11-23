import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "phys10-u2-lesson-2-1",
  code: "2-1",
  title: "Heat Transfer",
  goal: "I CAN describe the three methods of heat transfer and apply them.",
  standards: ["HS-PS3-3", "HS-PS3-4"],
  vocabulary: [
    { term: "Conduction", definition: "Heat through direct contact." },
    { term: "Convection", definition: "Heat by fluid movement." },
    { term: "Radiation", definition: "Heat by EM waves." },
    { term: "Thermal conductor", definition: "Transfers heat well." },
    { term: "Insulator", definition: "Poor heat transfer." },
  ],
  concepts: [
    {
      id: "phys10-u2-heat-transfer",
      title: "Heat transfer",
      skill: "Describe and apply heat transfer methods.",
      lesson: {
        sections: [
          {
            heading: "Three methods",
            body: "Conduction: heat flows through direct contact (metal spoon in hot soup). Convection: heat carried by moving fluid (warm air rises). Radiation: heat travels as EM waves, needing no medium (sun warms Earth).",
          },
          {
            heading: "Conductors and insulators",
            body: "Thermal conductors (metals) transfer heat easily. Insulators (wood, plastic, air) resist heat flow — used in handles, jackets and building insulation.",
          },
        ],
        keyFormulas: [
          { name: "Conduction", statement: "Contact." },
          { name: "Convection", statement: "Fluid flow." },
          { name: "Radiation", statement: "EM waves." },
        ],
        workedExample: {
          problem: "Why does a metal spoon feel hotter than a wooden spoon in the same hot soup?",
          solution: "Metal is a good conductor — it transfers heat to your hand faster. Wood is an insulator.",
        },
      },
      questions: [
        {
          id: "phys10-u2-heat-transfer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heat transfer by moving fluids is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "conduction"
                    },
                    {
                              "id": "b",
                              "text": "convection"
                    },
                    {
                              "id": "c",
                              "text": "radiation"
                    },
                    {
                              "id": "d",
                              "text": "insulation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Convection",
                              "statement": "Heat by fluid movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Convection is heat transfer by moving fluids like air or water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** convection",
          "commonErrors": [
                    "Confusing with conduction."
          ]
},
        },
        {
          id: "phys10-u2-heat-transfer-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best insulator?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "copper"
                    },
                    {
                              "id": "b",
                              "text": "aluminum"
                    },
                    {
                              "id": "c",
                              "text": "plastic"
                    },
                    {
                              "id": "d",
                              "text": "iron"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Insulator",
                              "statement": "Poor heat conductor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plastic is an insulator; metals conduct heat well.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** plastic",
          "commonErrors": [
                    "Choosing a metal."
          ]
},
        },
        {
          id: "phys10-u2-heat-transfer-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A house loses heat by 3 methods. How many methods of heat transfer exist?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Methods",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Heat transfer",
                              "statement": "Conduction, convection, radiation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 methods.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Missing radiation."
          ]
},
        },
        {
          id: "phys10-u2-heat-transfer-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how all three heat transfer methods occur when you hold a cold drink on a warm day.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Apply",
                              "statement": "All three methods."
                    },
                    {
                              "kind": "technique",
                              "name": "Explain",
                              "statement": "Real scenario."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conduction: heat flows from warm hand to cold can. Convection: warm air circulates around the can. Radiation: the sun's EM waves warm the can directly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All three methods correctly identified.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Conduction + convection + radiation.**",
          "commonErrors": [
                    "Listing only one method."
          ]
},
        },
      ],
    },
  ],
};
