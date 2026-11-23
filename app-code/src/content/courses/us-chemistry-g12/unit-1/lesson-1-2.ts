import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "chem12-u1-lesson-1-2",
  code: "1-2",
  title: "Periodic Trends",
  goal: "I CAN explain periodic trends in atomic radius, ionization energy and electronegativity.",
  standards: ["HS-PS1-1"],
  vocabulary: [
    { term: "Atomic radius", definition: "Atom size." },
    { term: "Ionization energy", definition: "Energy to remove electron." },
    { term: "Electronegativity", definition: "Electron attraction." },
    { term: "Period", definition: "Horizontal row." },
    { term: "Group", definition: "Vertical column, similar properties." },
  ],
  concepts: [
    {
      id: "chem12-u1-periodic-trends",
      title: "Periodic trends",
      skill: "Explain trends across periods and down groups.",
      lesson: {
        sections: [
          {
            heading: "Across a period",
            body: "Moving left to right: atomic radius decreases (more protons pull electrons closer), ionization energy increases (harder to remove electrons), electronegativity increases (stronger pull on shared electrons).",
          },
          {
            heading: "Down a group",
            body: "Moving top to bottom: atomic radius increases (more electron shells), ionization energy decreases (outer electrons farther away), electronegativity decreases (except noble gases). Metals tend left/bottom, nonmetals right/top.",
          },
        ],
        keyFormulas: [
          { name: "Across", statement: "Radius ↓, IE ↑, EN ↑." },
          { name: "Down", statement: "Radius ↑, IE ↓, EN ↓." },
        ],
        workedExample: {
          problem: "Which has higher electronegativity: Na or Cl?",
          solution: "Cl — it's to the right in period 3, so higher electronegativity.",
        },
      },
      questions: [
        {
          id: "chem12-u1-periodic-trends-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Atomic radius generally ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "increases across a period"
                    },
                    {
                              "id": "b",
                              "text": "decreases across a period"
                    },
                    {
                              "id": "c",
                              "text": "stays constant"
                    },
                    {
                              "id": "d",
                              "text": "doubles each period"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Atomic radius",
                              "statement": "Decreases left→right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Atomic radius decreases across a period due to increased nuclear charge.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** decreases across a period",
          "commonErrors": [
                    "Reversing the trend."
          ]
},
        },
        {
          id: "chem12-u1-periodic-trends-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which element has the highest electronegativity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Na"
                    },
                    {
                              "id": "b",
                              "text": "Cl"
                    },
                    {
                              "id": "c",
                              "text": "K"
                    },
                    {
                              "id": "d",
                              "text": "Ca"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Electronegativity",
                              "statement": "Increases right and up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cl is top-right region — highest electronegativity among these.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** Cl",
          "commonErrors": [
                    "Choosing a metal."
          ]
},
        },
        {
          id: "chem12-u1-periodic-trends-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "The periodic table has 18 groups (columns). How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Groups",
                              "answer": 18
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Group",
                              "statement": "18 vertical columns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "18 groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$18$",
          "commonErrors": [
                    "Counting periods instead."
          ]
},
        },
        {
          id: "chem12-u1-periodic-trends-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why sodium has a larger atomic radius than chlorine despite having more total protons... wait, explain why Cl has smaller radius than Na.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Radius",
                              "statement": "Decreases across period."
                    },
                    {
                              "kind": "skill",
                              "name": "Nuclear charge",
                              "statement": "More protons pull harder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both are in period 3. Cl has 17 protons vs Na's 11 — greater nuclear charge pulls electrons closer, so Cl's radius is smaller despite more electrons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly explains nuclear charge effect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**More protons = smaller radius across period.**",
          "commonErrors": [
                    "Thinking more electrons = bigger always."
          ]
},
        },
      ],
    },
  ],
};
