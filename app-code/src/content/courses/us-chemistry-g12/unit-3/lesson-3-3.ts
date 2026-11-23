import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "chem12-u3-lesson-3-3",
  code: "3-3",
  title: "Acids, Bases and pH",
  goal: "I CAN describe acids and bases and interpret pH.",
  standards: ["HS-PS1-8"],
  vocabulary: [
    { term: "Acid", definition: "Donates H+ ions." },
    { term: "Base", definition: "Accepts H+ ions." },
    { term: "pH", definition: "Acidity scale 0-14." },
    { term: "Neutral", definition: "pH 7." },
    { term: "Neutralization", definition: "Acid + base → salt + water." },
  ],
  concepts: [
    {
      id: "chem12-u3-acids-bases",
      title: "Acids, bases and pH",
      skill: "Describe acids/bases and interpret pH.",
      lesson: {
        sections: [
          {
            heading: "Acids and bases",
            body: "Acids donate H+ ions (sour taste, pH < 7): HCl, H2SO4. Bases accept H+ ions (bitter, slippery, pH > 7): NaOH. pH scale 0-14: <7 acidic, 7 neutral, >7 basic. Each pH unit is a 10x change in H+ concentration.",
          },
          {
            heading: "Neutralization",
            body: "Acid + base → salt + water: $HCl + NaOH \\rightarrow NaCl + H_2O$. This is why antacids relieve heartburn (base neutralizes stomach acid) and why soil is limed to reduce acidity.",
          },
        ],
        keyFormulas: [
          { name: "pH", statement: "0-14 scale." },
          { name: "Acid", statement: "pH < 7." },
          { name: "Base", statement: "pH > 7." },
          { name: "Neutralization", statement: "Salt + water." },
        ],
        workedExample: {
          problem: "Lemon juice has pH 2, water pH 7. Which is more acidic and by how much H+ concentration?",
          solution: "Lemon juice — pH 2 vs 7 means 5 units × 10x = 100,000 times more H+ ions.",
        },
      },
      questions: [
        {
          id: "chem12-u3-acids-bases-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A substance with pH 3 is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "basic"
                    },
                    {
                              "id": "b",
                              "text": "acidic"
                    },
                    {
                              "id": "c",
                              "text": "neutral"
                    },
                    {
                              "id": "d",
                              "text": "a salt"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "pH",
                              "statement": "<7 acidic, 7 neutral, >7 basic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "pH 3 < 7 → acidic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** acidic",
          "commonErrors": [
                    "Thinking higher pH = more acidic."
          ]
},
        },
        {
          id: "chem12-u3-acids-bases-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Neutralization of HCl by NaOH produces ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "more acid"
                    },
                    {
                              "id": "b",
                              "text": "NaCl + water"
                    },
                    {
                              "id": "c",
                              "text": "only water"
                    },
                    {
                              "id": "d",
                              "text": "a gas"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Neutralization",
                              "statement": "Acid + base → salt + water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$HCl + NaOH \\rightarrow NaCl + H_2O$ — salt and water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** NaCl + water",
          "commonErrors": [
                    "Missing the salt."
          ]
},
        },
        {
          id: "chem12-u3-acids-bases-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "The pH scale ranges from 0 to 14. How many units?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Units",
                              "answer": 14
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "pH scale",
                              "statement": "0-14."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "14 units (0 through 14).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$14$",
          "commonErrors": [
                    "Saying 7 or 10."
          ]
},
        },
        {
          id: "chem12-u3-acids-bases-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A solution has pH 9. Is it acidic or basic? How does its H+ concentration compare to pure water (pH 7)?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "pH",
                              "statement": ">7 basic."
                    },
                    {
                              "kind": "formula",
                              "name": "pH",
                              "statement": "Each unit = 10x H+."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "pH 9 > 7 → basic. Compared to water (pH 7), it has 2 fewer pH units → $10^2 = 100$ times LESS H+ concentration (more OH-).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly identifies basic and compares H+.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Basic; 100x less H+ than water.**",
          "commonErrors": [
                    "Saying it has more H+ than water."
          ]
},
        },
      ],
    },
  ],
};
