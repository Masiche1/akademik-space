import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "bio11-u1-lesson-1-3",
  code: "1-3",
  title: "Homeostasis and Feedback",
  goal: "I CAN explain how organisms maintain homeostasis through feedback loops.",
  standards: ["HS-LS1-3"],
  vocabulary: [
    { term: "Homeostasis", definition: "Stable internal conditions." },
    { term: "Feedback loop", definition: "Response to change." },
    { term: "Negative feedback", definition: "Counters the change." },
    { term: "Positive feedback", definition: "Amplifies the change." },
    { term: "Hormone", definition: "Chemical messenger." },
  ],
  concepts: [
    {
      id: "bio11-u1-homeostasis",
      title: "Homeostasis and feedback",
      skill: "Explain feedback loops maintaining homeostasis.",
      lesson: {
        sections: [
          {
            heading: "Negative feedback",
            body: "Most homeostatic loops are negative feedback — they counteract change. Body temperature: if too hot, sweat to cool; if too cold, shiver to warm. Blood sugar: insulin lowers it, glucagon raises it.",
          },
          {
            heading: "Positive feedback",
            body: "Positive feedback amplifies change — rare, used for rapid completion: childbirth contractions intensify until birth, blood clotting cascades.",
          },
        ],
        keyFormulas: [
          { name: "Negative", statement: "Counters change." },
          { name: "Positive", statement: "Amplifies change." },
          { name: "Homeostasis", statement: "Stable conditions." },
        ],
        workedExample: {
          problem: "Is body temperature regulation negative or positive feedback?",
          solution: "Negative — sweating when hot and shivering when cold counteract temperature changes, returning to set point.",
        },
      },
      questions: [
        {
          id: "bio11-u1-homeostasis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Homeostasis is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "constant growth"
                    },
                    {
                              "id": "b",
                              "text": "maintaining stable internal conditions"
                    },
                    {
                              "id": "c",
                              "text": "rapid change"
                    },
                    {
                              "id": "d",
                              "text": "extinction"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Homeostasis",
                              "statement": "Stable internal conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Homeostasis is maintaining stable internal conditions despite external changes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** maintaining stable internal conditions",
          "commonErrors": [
                    "Thinking it means no change ever."
          ]
},
        },
        {
          id: "bio11-u1-homeostasis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sweating when hot is an example of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "positive feedback"
                    },
                    {
                              "id": "b",
                              "text": "negative feedback"
                    },
                    {
                              "id": "c",
                              "text": "homeostasis failure"
                    },
                    {
                              "id": "d",
                              "text": "osmosis"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative feedback",
                              "statement": "Counters temperature rise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sweating counters the temperature rise — negative feedback.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** negative feedback",
          "commonErrors": [
                    "Choosing positive feedback."
          ]
},
        },
        {
          id: "bio11-u1-homeostasis-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A feedback loop has a sensor, integrator and effector — 3 parts. How many parts?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Parts",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Count loop parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Counting only sensor+effector."
          ]
},
        },
        {
          id: "bio11-u1-homeostasis-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how blood glucose is regulated by insulin and glucagon using negative feedback.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative feedback",
                              "statement": "Counters change."
                    },
                    {
                              "kind": "skill",
                              "name": "Hormones",
                              "statement": "Insulin lowers, glucagon raises."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When blood sugar rises, pancreas releases insulin → cells absorb glucose → sugar drops. When sugar falls, glucagon releases stored glucose → sugar rises. Each hormone counters the change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both hormones and their counteracting roles explained.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Insulin lowers, glucagon raises — negative feedback.**",
          "commonErrors": [
                    "Describing only one hormone."
          ]
},
        },
      ],
    },
  ],
};
