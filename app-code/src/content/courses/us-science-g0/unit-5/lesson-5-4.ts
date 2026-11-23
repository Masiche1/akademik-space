import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "s0-u5-lesson-5-4",
  code: "5-4",
  title: "How Plants Change",
  goal: "I CAN describe how plants change as they grow.",
  standards: ["K-LS1-1", "K-LS1-2"],
  vocabulary: [
    { term: "Change", definition: "Something different happens." },
    { term: "Grow", definition: "Get bigger." },
    { term: "Develop", definition: "Change and mature." },
    { term: "Season", definition: "Time of year." },
    { term: "Spring", definition: "Plants wake up and grow." },
    { term: "Summer", definition: "Plants grow tall and bloom." },
    { term: "Fall", definition: "Leaves change color." },
    { term: "Winter", definition: "Plants rest/dormant." },
    { term: "Observation", definition: "Watch carefully over time." },
  ],
  concepts: [
    {
      id: "s0-u5-plant-changes",
      title: "How plants change",
      skill: "Describe how plants change as they grow and across seasons.",
      lesson: {
        sections: [
          {
            heading: "Plants change over time",
            body: "Plants **change** as they **grow** — a seed becomes a sprout, then a seedling, then an adult. They also change with **seasons** — grow in spring/summer, rest in winter.",
          },
          {
            heading: "Observe changes",
            body: "To see changes, **observe** the plant over time — each week it may be bigger, have more leaves, or bloom. Write or draw what you see.",
          },
        ],
        keyFormulas: [
          { name: "Plant changes", statement: "Grow (size) + develop (stages) + seasonal changes = observing plants." },
        ],
        workedExample: {
          problem: "How does a bean plant change from week 1 to week 4?",
          solution: "Week 1: tiny sprout. Week 4: taller with more leaves, maybe flowers.",
        },
      },
      questions: [
        {
          id: "s0-u5-plant-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "As a plant grows, it usually gets...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "smaller"
                    },
                    {
                              "id": "b",
                              "text": "bigger"
                    },
                    {
                              "id": "c",
                              "text": "the same size"
                    },
                    {
                              "id": "d",
                              "text": "invisible"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants get bigger as they grow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants get bigger as they grow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**bigger**",
          "commonErrors": [
                    "Thinks it shrinks."
          ]
},
        },
        {
          id: "s0-u5-plant-changes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In winter, many plants...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "grow fast"
                    },
                    {
                              "id": "b",
                              "text": "rest or go dormant"
                    },
                    {
                              "id": "c",
                              "text": "bloom"
                    },
                    {
                              "id": "d",
                              "text": "change color only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Winter = rest/dormant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Winter = rest/dormant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rest**",
          "commonErrors": [
                    "Picks wrong season behavior."
          ]
},
        },
        {
          id: "s0-u5-plant-changes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Observe a plant over time. Describe two ways it changed (size, leaves, flowers).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant changes",
                              "statement": "Two observed changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes two changes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'It got taller and grew more leaves.'**",
          "commonErrors": [
                    "Cannot observe.",
                    "No changes."
          ]
},
        },
        {
          id: "s0-u5-plant-changes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Develop' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stay the same"
                    },
                    {
                              "id": "b",
                              "text": "change and mature"
                    },
                    {
                              "id": "c",
                              "text": "die"
                    },
                    {
                              "id": "d",
                              "text": "sleep"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Develop = change/mature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Develop = change/mature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**change/mature**",
          "commonErrors": [
                    "Confuses with stay same."
          ]
},
        },
        {
          id: "s0-u5-plant-changes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Watch a plant for a week. Describe how it changed. What might it look like next week?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant changes",
                              "statement": "Observed change + prediction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes observed change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Predicts next change.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'It grew taller; next week it may bloom.'**",
          "commonErrors": [
                    "No observation.",
                    "No prediction."
          ]
},
        },
        {
          id: "s0-u5-plant-changes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Get bigger."
                    },
                    {
                              "id": "b",
                              "text": "Something different happens."
                    },
                    {
                              "id": "c",
                              "text": "Change and mature."
                    },
                    {
                              "id": "d",
                              "text": "Time of year."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Change\" means Something different happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Change\" means Something different happens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Change** = Something different happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plant-changes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Grow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change and mature."
                    },
                    {
                              "id": "b",
                              "text": "Time of year."
                    },
                    {
                              "id": "c",
                              "text": "Plants wake up and grow."
                    },
                    {
                              "id": "d",
                              "text": "Get bigger."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Grow\" means Get bigger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Grow\" means Get bigger.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Grow** = Get bigger.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plant-changes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Develop\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Time of year."
                    },
                    {
                              "id": "b",
                              "text": "Change and mature."
                    },
                    {
                              "id": "c",
                              "text": "Plants wake up and grow."
                    },
                    {
                              "id": "d",
                              "text": "Plants grow tall and bloom."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Develop\" means Change and mature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Develop\" means Change and mature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Develop** = Change and mature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
