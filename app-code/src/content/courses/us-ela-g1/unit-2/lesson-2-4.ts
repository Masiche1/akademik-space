import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "ela1-u2-lesson-2-4",
  code: "2-4",
  title: "Character Choices",
  goal: "I CAN explain why characters make the choices they do.",
  standards: ["RL.1.3"],
  vocabulary: [
    { term: "Choice", definition: "What a character decides." },
    { term: "Reason", definition: "Why they chose it." },
    { term: "Because", definition: "Gives the reason." },
    { term: "Motivate", definition: "What makes them act." },
    { term: "Decision", definition: "A choice." },
    { term: "Want", definition: "What they wish for." },
    { term: "Need", definition: "What they require." },
    { term: "Feel", definition: "Their emotion." },
  ],
  concepts: [
    {
      id: "ela1-u2-character-choices",
      title: "Character choices",
      skill: "Explain why characters make the choices they do.",
      lesson: {
        sections: [
          {
            heading: "Why do characters act?",
            body: "Characters make **choices** based on what they **want** or **need** and how they **feel**. A character who is **hungry** might choose to eat; a **scared** character might choose to hide.",
          },
          {
            heading: "Use 'because'",
            body: "Explain the reason: 'Sam chose to share **because** he wanted to be kind.'",
          },
        ],
        keyFormulas: [
          { name: "Choice", statement: "Character choice + 'because' reason = understanding motivation." },
        ],
        workedExample: {
          problem: "Story: 'The boy gave his sandwich to a hungry friend.' Why did he choose to share?",
          solution: "He shared **because** he wanted to be **kind** / help his friend.",
        },
      },
      questions: [
        {
          id: "ela1-u2-character-choices-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'choice' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what a character does by accident"
                    },
                    {
                              "id": "b",
                              "text": "what a character decides to do"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
                    },
                    {
                              "id": "d",
                              "text": "the ending"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Choice = what they decide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Choice = what they decide.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what they decide**",
          "commonErrors": [
                    "Confuses with accident."
          ]
},
        },
        {
          id: "ela1-u2-character-choices-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Characters choose based on what they...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "own"
                    },
                    {
                              "id": "b",
                              "text": "want, need, or feel"
                    },
                    {
                              "id": "c",
                              "text": "read"
                    },
                    {
                              "id": "d",
                              "text": "wear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Choices come from wants/needs/feelings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Choices come from wants/needs/feelings.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**want, need, feel**",
          "commonErrors": [
                    "Picks wrong cause."
          ]
},
        },
        {
          id: "ela1-u2-character-choices-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a character from a story. What choice did they make? Why (use 'because')?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Choices",
                              "statement": "Choice + because-reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names choice + reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sam shared because he wanted to be kind.'**",
          "commonErrors": [
                    "Cannot identify choice.",
                    "No reason."
          ]
},
        },
        {
          id: "ela1-u2-character-choices-q4",
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
          id: "ela1-u2-character-choices-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tell about a character's choice. Give two reasons why they might have made it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Choices",
                              "statement": "Choice + 2 reasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names a choice.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Gives 2 reasons.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'She ran home because it was dark and because she was scared.'**",
          "commonErrors": [
                    "No choice.",
                    "Fewer than 2 reasons."
          ]
},
        },
        {
          id: "ela1-u2-character-choices-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Choice\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why they chose it."
                    },
                    {
                              "id": "b",
                              "text": "What a character decides."
                    },
                    {
                              "id": "c",
                              "text": "Gives the reason."
                    },
                    {
                              "id": "d",
                              "text": "What makes them act."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Choice\" means What a character decides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Choice\" means What a character decides.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Choice** = What a character decides.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u2-character-choices-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reason\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gives the reason."
                    },
                    {
                              "id": "b",
                              "text": "What makes them act."
                    },
                    {
                              "id": "c",
                              "text": "A choice."
                    },
                    {
                              "id": "d",
                              "text": "Why they chose it."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reason\" means Why they chose it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reason\" means Why they chose it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reason** = Why they chose it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u2-character-choices-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Because\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What makes them act."
                    },
                    {
                              "id": "b",
                              "text": "Gives the reason."
                    },
                    {
                              "id": "c",
                              "text": "A choice."
                    },
                    {
                              "id": "d",
                              "text": "What they wish for."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Because\" means Gives the reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Because\" means Gives the reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Because** = Gives the reason.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
