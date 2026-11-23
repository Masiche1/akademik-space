import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ela1-u4-lesson-4-3",
  code: "4-3",
  title: "Give a Reason",
  goal: "I CAN give a reason for my opinion.",
  standards: ["W.1.1"],
  vocabulary: [
    { term: "Reason", definition: "Why we think or like." },
    { term: "Because", definition: "Gives the reason." },
    { term: "Opinion", definition: "What we think." },
    { term: "Support", definition: "Back up opinion." },
    { term: "Why", definition: "Asks for reason." },
    { term: "Explain", definition: "Tell why." },
    { term: "Detail", definition: "Fact supporting reason." },
    { term: "Strong", definition: "Well-supported." },
  ],
  concepts: [
    {
      id: "ela1-u4-give-reason",
      title: "Giving a reason",
      skill: "Support an opinion with a reason using 'because'.",
      lesson: {
        sections: [
          {
            heading: "Opinions need reasons",
            body: "A strong opinion has a **reason** — why you think or like something. 'I like dogs **because** they are friendly' gives a reason.",
          },
          {
            heading: "Use 'because'",
            body: "**Because** introduces the reason, connecting your opinion to why you think it.",
          },
        ],
        keyFormulas: [
          { name: "Give reason", statement: "Opinion + 'because' + reason = supported opinion." },
        ],
        workedExample: {
          problem: "Write an opinion with a reason about your favorite season.",
          solution: "'My favorite season is **summer because** I can play outside and swim.'",
        },
      },
      questions: [
        {
          id: "ela1-u4-give-reason-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'reason' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what we like"
                    },
                    {
                              "id": "b",
                              "text": "why we think or like something"
                    },
                    {
                              "id": "c",
                              "text": "a fact only"
                    },
                    {
                              "id": "d",
                              "text": "a question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Reason = why we think."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reason = why we think.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**why we think**",
          "commonErrors": [
                    "Confuses with opinion."
          ]
},
        },
        {
          id: "ela1-u4-give-reason-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence gives a reason?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "I like pizza."
                    },
                    {
                              "id": "b",
                              "text": "I like pizza because it tastes good."
                    },
                    {
                              "id": "c",
                              "text": "Pizza is food."
                    },
                    {
                              "id": "d",
                              "text": "I eat pizza."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'because it tastes good' gives reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'because it tastes good' gives reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**because + reason**",
          "commonErrors": [
                    "No reason."
          ]
},
        },
        {
          id: "ela1-u4-give-reason-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write an opinion about something you like and give a reason using 'because'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Give reason",
                              "statement": "Opinion + because + reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes opinion + reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I like rain because I can splash in puddles.'**",
          "commonErrors": [
                    "No reason.",
                    "Not opinion."
          ]
},
        },
        {
          id: "ela1-u4-give-reason-q4",
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
          id: "ela1-u4-give-reason-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write an opinion about a book and give two reasons using 'because'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Give reasons",
                              "statement": "Opinion + 2 because-reasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes opinion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Gives 2 reasons.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I like the book because it is funny and because characters are kind.'**",
          "commonErrors": [
                    "No reasons.",
                    "Only one reason."
          ]
},
        },
        {
          id: "ela1-u4-give-reason-q6",
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
                              "text": "Why we think or like."
                    },
                    {
                              "id": "c",
                              "text": "What we think."
                    },
                    {
                              "id": "d",
                              "text": "Back up opinion."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reason\" means Why we think or like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reason\" means Why we think or like.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reason** = Why we think or like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u4-give-reason-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Because\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we think."
                    },
                    {
                              "id": "b",
                              "text": "Back up opinion."
                    },
                    {
                              "id": "c",
                              "text": "Asks for reason."
                    },
                    {
                              "id": "d",
                              "text": "Gives the reason."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ela1-u4-give-reason-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opinion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Back up opinion."
                    },
                    {
                              "id": "b",
                              "text": "What we think."
                    },
                    {
                              "id": "c",
                              "text": "Asks for reason."
                    },
                    {
                              "id": "d",
                              "text": "Tell why."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Opinion\" means What we think."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Opinion\" means What we think.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Opinion** = What we think.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
