import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "ela3-u1-lesson-1-4",
  code: "1-4",
  title: "Character Feelings",
  goal: "I CAN tell how characters feel and why.",
  standards: ["RL.3.3"],
  vocabulary: [
    { term: "Feeling", definition: "An emotion." },
    { term: "Happy", definition: "Feeling good." },
    { term: "Sad", definition: "Feeling unhappy." },
    { term: "Mad", definition: "Feeling angry." },
    { term: "Scared", definition: "Feeling afraid." },
    { term: "Excited", definition: "Feeling thrilled." },
    { term: "Because", definition: "Gives reason." },
    { term: "Why", definition: "The reason." },
  ],
  concepts: [
    {
      id: "ela3-u1-character-feelings",
      title: "Character feelings",
      skill: "Identify how characters feel and explain why.",
      lesson: {
        sections: [
          {
            heading: "How do they feel?",
            body: "Characters have **feelings**: happy, sad, mad, scared, excited. To know how they feel, look at what happens and how they act.",
          },
          {
            heading: "Explain why",
            body: "Use **because** to explain: 'Sam is sad **because** his kite broke.' The reason connects event to feeling.",
          },
        ],
        keyFormulas: [
          { name: "Feelings", statement: "Identify emotion + explain why with 'because'." },
        ],
        workedExample: {
          problem: "Story: 'The puppy lost its ball and whined.' How does it feel? Why?",
          solution: "The puppy feels **sad because** it lost its ball.",
        },
      },
      questions: [
        {
          id: "ela3-u1-character-feelings-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word names a feeling?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "run"
                    },
                    {
                              "id": "b",
                              "text": "happy"
                    },
                    {
                              "id": "c",
                              "text": "big"
                    },
                    {
                              "id": "d",
                              "text": "blue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'happy' is a feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'happy' is a feeling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**happy**",
          "commonErrors": [
                    "Picks action or color."
          ]
},
        },
        {
          id: "ela3-u1-character-feelings-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a character loses a toy, they might feel...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "happy"
                    },
                    {
                              "id": "b",
                              "text": "sad"
                    },
                    {
                              "id": "c",
                              "text": "excited"
                    },
                    {
                              "id": "d",
                              "text": "proud"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Losing toy = sad."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Losing toy = sad.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**sad**",
          "commonErrors": [
                    "Picks wrong feeling."
          ]
},
        },
        {
          id: "ela3-u1-character-feelings-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. How does the main character feel? Why? Use 'because'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Feelings",
                              "statement": "Feeling + reason with 'because'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names feeling + reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sam feels sad because his kite broke.'**",
          "commonErrors": [
                    "No feeling.",
                    "No reason."
          ]
},
        },
        {
          id: "ela3-u1-character-feelings-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Because' is used to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ask a question"
                    },
                    {
                              "id": "b",
                              "text": "give a reason"
                    },
                    {
                              "id": "c",
                              "text": "name a person"
                    },
                    {
                              "id": "d",
                              "text": "describe a place"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Because' gives a reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Because' gives a reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**give reason**",
          "commonErrors": [
                    "Confuses with question word."
          ]
},
        },
        {
          id: "ela3-u1-character-feelings-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tell how two characters feel in a story and explain why for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Feelings",
                              "statement": "Two feelings + two reasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names two feelings.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Gives reasons for both.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog happy because treat; cat scared because thunder.'**",
          "commonErrors": [
                    "Only one character.",
                    "No reasons."
          ]
},
        },
        {
          id: "ela3-u1-character-feelings-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Feeling\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feeling good."
                    },
                    {
                              "id": "b",
                              "text": "An emotion."
                    },
                    {
                              "id": "c",
                              "text": "Feeling unhappy."
                    },
                    {
                              "id": "d",
                              "text": "Feeling angry."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Feeling\" means An emotion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Feeling\" means An emotion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Feeling** = An emotion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u1-character-feelings-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Happy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feeling unhappy."
                    },
                    {
                              "id": "b",
                              "text": "Feeling angry."
                    },
                    {
                              "id": "c",
                              "text": "Feeling afraid."
                    },
                    {
                              "id": "d",
                              "text": "Feeling good."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Happy\" means Feeling good."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Happy\" means Feeling good.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Happy** = Feeling good.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u1-character-feelings-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sad\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feeling angry."
                    },
                    {
                              "id": "b",
                              "text": "Feeling unhappy."
                    },
                    {
                              "id": "c",
                              "text": "Feeling afraid."
                    },
                    {
                              "id": "d",
                              "text": "Feeling thrilled."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sad\" means Feeling unhappy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sad\" means Feeling unhappy.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sad** = Feeling unhappy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
