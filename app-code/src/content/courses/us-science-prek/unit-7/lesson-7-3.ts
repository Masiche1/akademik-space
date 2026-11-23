import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "spk-u7-lesson-7-3",
  code: "7-3",
  title: "Keeping Our Bodies Healthy",
  goal: "I CAN describe ways to keep my body healthy.",
  standards: ["ELOF-PK.SCI.BODY.3"],
  vocabulary: [
    { term: "Healthy", definition: "Feeling good and strong." },
    { term: "Exercise", definition: "Move your body to stay strong." },
    { term: "Sleep", definition: "Rest your body at night." },
    { term: "Eat well", definition: "Choose healthy foods." },
    { term: "Clean", definition: "Wash to stay germ-free." },
    { term: "Rest", definition: "Take time to relax." },
    { term: "Grow", definition: "Get bigger and stronger over time." },
  ],
  concepts: [
    {
      id: "spk-u7-healthy-body",
      title: "Keeping our bodies healthy",
      skill: "Describe ways to keep the body healthy.",
      lesson: {
        sections: [
          {
            heading: "Healthy habits",
            body: "To stay **healthy**, you need to **exercise** (move your body), get enough **sleep**, **eat well** (healthy foods), stay **clean** (wash hands), and take time to **rest**.",
          },
          {
            heading: "Why it matters",
            body: "Your body is still **growing**. Healthy habits help you grow strong, fight germs, and have energy to learn and play.",
          },
        ],
        keyFormulas: [
          { name: "Healthy body", statement: "Exercise + sleep + good food + clean + rest = healthy body." },
        ],
        workedExample: {
          problem: "Name two ways to keep your body healthy.",
          solution: "**Exercise** and **eat healthy food** (or get enough sleep, wash hands).",
        },
      },
      questions: [
        {
          id: "spk-u7-healthy-body-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which helps keep your body healthy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "staying up late"
                    },
                    {
                              "id": "b",
                              "text": "getting enough sleep"
                    },
                    {
                              "id": "c",
                              "text": "eating only candy"
                    },
                    {
                              "id": "d",
                              "text": "never washing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sleep helps the body rest and grow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sleep helps the body rest and grow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Enough sleep**",
          "commonErrors": [
                    "Picks unhealthy habit."
          ]
},
        },
        {
          id: "spk-u7-healthy-body-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Exercise' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sitting still"
                    },
                    {
                              "id": "b",
                              "text": "moving your body to stay strong"
                    },
                    {
                              "id": "c",
                              "text": "eating snacks"
                    },
                    {
                              "id": "d",
                              "text": "sleeping all day"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Exercise = moving body to stay strong."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exercise = moving body to stay strong.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Move body**",
          "commonErrors": [
                    "Confuses with rest."
          ]
},
        },
        {
          id: "spk-u7-healthy-body-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three healthy habits. Why does each one help your body?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Healthy habits",
                              "statement": "Exercise, sleep, food, clean, rest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 habits + reasons.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Exercise strengthens muscles, sleep lets body rest, washing hands prevents germs.'**",
          "commonErrors": [
                    "Cannot name habits.",
                    "No reasons."
          ]
},
        },
        {
          id: "spk-u7-healthy-body-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Washing your hands helps because it...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "makes them smell bad"
                    },
                    {
                              "id": "b",
                              "text": "removes germs that can make you sick"
                    },
                    {
                              "id": "c",
                              "text": "is boring"
                    },
                    {
                              "id": "d",
                              "text": "wastes water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Washing removes germs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Washing removes germs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Removes germs**",
          "commonErrors": [
                    "Thinks washing is pointless."
          ]
},
        },
        {
          id: "spk-u7-healthy-body-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Make a 'healthy body' plan for one day: what will you eat, when will you exercise, when will you sleep? Explain why each choice is healthy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Healthy body",
                              "statement": "Plan day with healthy choices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Makes a plan.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains health benefits.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Eat fruit+veg for vitamins, play outside for exercise, sleep 10 hours for growth.'**",
          "commonErrors": [
                    "No plan.",
                    "No health reasoning."
          ]
},
        },
        {
          id: "spk-u7-healthy-body-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Healthy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move your body to stay strong."
                    },
                    {
                              "id": "b",
                              "text": "Feeling good and strong."
                    },
                    {
                              "id": "c",
                              "text": "Rest your body at night."
                    },
                    {
                              "id": "d",
                              "text": "Choose healthy foods."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Healthy\" means Feeling good and strong."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Healthy\" means Feeling good and strong.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Healthy** = Feeling good and strong.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u7-healthy-body-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Exercise\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rest your body at night."
                    },
                    {
                              "id": "b",
                              "text": "Choose healthy foods."
                    },
                    {
                              "id": "c",
                              "text": "Wash to stay germ-free."
                    },
                    {
                              "id": "d",
                              "text": "Move your body to stay strong."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Exercise\" means Move your body to stay strong."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Exercise\" means Move your body to stay strong.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Exercise** = Move your body to stay strong.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u7-healthy-body-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sleep\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Choose healthy foods."
                    },
                    {
                              "id": "b",
                              "text": "Rest your body at night."
                    },
                    {
                              "id": "c",
                              "text": "Wash to stay germ-free."
                    },
                    {
                              "id": "d",
                              "text": "Take time to relax."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sleep\" means Rest your body at night."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sleep\" means Rest your body at night.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sleep** = Rest your body at night.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
