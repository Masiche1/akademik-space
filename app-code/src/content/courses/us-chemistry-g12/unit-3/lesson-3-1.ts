import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "chem12-u3-lesson-3-1",
  code: "3-1",
  title: "Reaction Rates and Kinetics",
  goal: "I CAN explain factors affecting reaction rates.",
  standards: ["HS-PS1-5", "HS-PS1-6"],
  vocabulary: [
    { term: "Rate", definition: "How fast reaction proceeds." },
    { term: "Catalyst", definition: "Speeds reaction, unchanged." },
    { term: "Activation energy", definition: "Minimum energy to react." },
    { term: "Concentration", definition: "Amount per volume." },
    { term: "Temperature", definition: "Average particle energy." },
  ],
  concepts: [
    {
      id: "chem12-u3-reaction-rates",
      title: "Reaction rates",
      skill: "Explain factors affecting reaction speed.",
      lesson: {
        sections: [
          {
            heading: "Factors affecting rate",
            body: "Rate increases with: higher temperature (more collisions), higher concentration (more particles), larger surface area (more exposure), and catalysts (lower activation energy). Rate = how fast reactants convert to products.",
          },
          {
            heading: "Activation energy",
            body: "Reactions need minimum energy (activation energy) to start. Catalysts provide alternative pathways with lower activation energy — enzymes are biological catalysts. Without catalysts, many reactions would be too slow for life.",
          },
        ],
        keyFormulas: [
          { name: "Rate", statement: "Speed of reaction." },
          { name: "Catalyst", statement: "Lowers Ea." },
          { name: "Factors", statement: "Temp, conc, area, catalyst." },
        ],
        workedExample: {
          problem: "Why does food cook faster in a pressure cooker?",
          solution: "Higher temperature increases particle kinetic energy and collision frequency, speeding the cooking reactions.",
        },
      },
      questions: [
        {
          id: "chem12-u3-reaction-rates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A catalyst ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is consumed in reaction"
                    },
                    {
                              "id": "b",
                              "text": "speeds reaction without being consumed"
                    },
                    {
                              "id": "c",
                              "text": "slows reactions"
                    },
                    {
                              "id": "d",
                              "text": "is a reactant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Catalyst",
                              "statement": "Speeds reaction, unchanged at end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Catalysts speed reactions by lowering activation energy and are not consumed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** speeds reaction without being consumed",
          "commonErrors": [
                    "Thinking catalysts are used up."
          ]
},
        },
        {
          id: "chem12-u3-reaction-rates-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which increases reaction rate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "lower temperature"
                    },
                    {
                              "id": "b",
                              "text": "lower concentration"
                    },
                    {
                              "id": "c",
                              "text": "higher temperature"
                    },
                    {
                              "id": "d",
                              "text": "larger chunks"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Factors",
                              "statement": "Higher temp = faster rate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher temperature increases particle energy and collision frequency → faster rate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** higher temperature",
          "commonErrors": [
                    "Choosing a rate-decreasing factor."
          ]
},
        },
        {
          id: "chem12-u3-reaction-rates-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Factors affecting rate: temperature, concentration, surface area, catalyst — how many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Factors",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Count factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 factors.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Missing surface area."
          ]
},
        },
        {
          id: "chem12-u3-reaction-rates-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how a catalyst speeds a reaction using activation energy, and why it isn't consumed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Activation energy",
                              "statement": "Minimum energy barrier."
                    },
                    {
                              "kind": "definition",
                              "name": "Catalyst",
                              "statement": "Alternative pathway."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A catalyst provides an alternative reaction pathway with lower activation energy, so more particles have enough energy to react. It's not consumed because it only lowers the barrier — it emerges unchanged.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains mechanism and non-consumption.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Lower Ea via alternative path; catalyst unchanged.**",
          "commonErrors": [
                    "Saying catalyst is used up."
          ]
},
        },
      ],
    },
  ],
};
