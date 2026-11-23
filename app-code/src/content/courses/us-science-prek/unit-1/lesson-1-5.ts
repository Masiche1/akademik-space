import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "spk-u1-lesson-1-5",
  code: "1-5",
  title: "Observing Review",
  goal: "I CAN use my senses, notice details, sort and compare objects.",
  standards: ["ELOF-PK.SCI.OBSERVE.2"],
  vocabulary: [
    { term: "Review", definition: "Practice all observing skills." },
    { term: "Sense", definition: "A way we notice." },
    { term: "Detail", definition: "A small thing noticed." },
    { term: "Sort", definition: "Group alike things." },
    { term: "Compare", definition: "Find same and different." },
    { term: "Describe", definition: "Say what something is like." },
  ],
  concepts: [
    {
      id: "spk-u1-observe-review",
      title: "Observing review",
      skill: "Combine senses, observation, sorting and comparing.",
      lesson: {
        sections: [
          {
            heading: "All the observing skills",
            body: "Observing includes: **using senses**, **noticing details**, **sorting** objects, **comparing** them, and **describing** what you find. These are the foundations of science.",
          },
          {
            heading: "Put it together",
            body: "Pick an object. Observe it with your senses, notice its details, sort it with similar objects, and compare it to a different one. Describe everything you find.",
          },
        ],
        keyFormulas: [
          { name: "Observing", statement: "Senses + details + sorting + comparing + describing = scientific observation." },
        ],
        workedExample: {
          problem: "Observe two leaves: one big, one small. What do you notice?",
          solution: "Both leaves (same), but one is **bigger** with **more veins**; the other is **smaller** and **smoother**.",
        },
      },
      questions: [
        {
          id: "spk-u1-observe-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Scientific observation includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only guessing"
                    },
                    {
                              "id": "b",
                              "text": "Senses + details + sorting + comparing + describing"
                    },
                    {
                              "id": "c",
                              "text": "Only counting"
                    },
                    {
                              "id": "d",
                              "text": "Only drawing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All observing skills together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All observing skills together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**All observing skills**",
          "commonErrors": [
                    "Lists only one skill."
          ]
},
        },
        {
          id: "spk-u1-observe-review-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a sense?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sight"
                    },
                    {
                              "id": "b",
                              "text": "hearing"
                    },
                    {
                              "id": "c",
                              "text": "telepathy"
                    },
                    {
                              "id": "d",
                              "text": "touch"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Telepathy is not a real sense; sight, hearing, touch are."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Telepathy is not a real sense; sight, hearing, touch are.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**telepathy**",
          "commonErrors": [
                    "Picks a real sense."
          ]
},
        },
        {
          id: "spk-u1-observe-review-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Observe an object. Describe it using two senses, name one detail, and compare it to a similar object.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Observing",
                              "statement": "Senses + detail + compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses 2 senses.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names detail and compares.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I see it's red, feel it's rough; it's bigger than the other one.'**",
          "commonErrors": [
                    "Only 1 sense.",
                    "Cannot compare."
          ]
},
        },
        {
          id: "spk-u1-observe-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sorting objects helps scientists...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make them disappear"
                    },
                    {
                              "id": "b",
                              "text": "see patterns and groups"
                    },
                    {
                              "id": "c",
                              "text": "count to infinity"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sorting reveals patterns and groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorting reveals patterns and groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**See patterns/groups**",
          "commonErrors": [
                    "Thinks sorting is pointless."
          ]
},
        },
        {
          id: "spk-u1-observe-review-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find two objects that are alike and two that are different. Sort them into groups and explain your rule.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sort + compare",
                              "statement": "Group alike, separate different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts into groups correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains the sorting rule.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Group 1: round things; Group 2: pointy things — rule is shape.'**",
          "commonErrors": [
                    "No clear groups.",
                    "Cannot explain rule."
          ]
},
        },
        {
          id: "spk-u1-observe-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Review\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A way we notice."
                    },
                    {
                              "id": "b",
                              "text": "Practice all observing skills."
                    },
                    {
                              "id": "c",
                              "text": "A small thing noticed."
                    },
                    {
                              "id": "d",
                              "text": "Group alike things."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Review\" means Practice all observing skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Review\" means Practice all observing skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Review** = Practice all observing skills.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-observe-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sense\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A small thing noticed."
                    },
                    {
                              "id": "b",
                              "text": "Group alike things."
                    },
                    {
                              "id": "c",
                              "text": "Find same and different."
                    },
                    {
                              "id": "d",
                              "text": "A way we notice."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sense\" means A way we notice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sense\" means A way we notice.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sense** = A way we notice.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-observe-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group alike things."
                    },
                    {
                              "id": "b",
                              "text": "A small thing noticed."
                    },
                    {
                              "id": "c",
                              "text": "Find same and different."
                    },
                    {
                              "id": "d",
                              "text": "Say what something is like."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Detail\" means A small thing noticed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Detail\" means A small thing noticed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Detail** = A small thing noticed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
