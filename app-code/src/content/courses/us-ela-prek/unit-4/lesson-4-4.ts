import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "epk-u4-lesson-4-4",
  code: "4-4",
  title: "Answer Questions About Stories",
  goal: "I CAN answer who, what, where and when questions about a story.",
  standards: ["ELOF-PK.LL.LISTEN.2"],
  vocabulary: [
    { term: "Question", definition: "Something you ask to find out." },
    { term: "Who", definition: "Asks about a person or animal." },
    { term: "What", definition: "Asks about a thing or action." },
    { term: "Where", definition: "Asks about a place." },
    { term: "When", definition: "Asks about a time." },
  ],
  concepts: [
    {
      id: "epk-u4-answer-questions",
      title: "Answering story questions",
      skill: "Answer who/what/where/when questions about a story.",
      lesson: {
        sections: [
          {
            heading: "Question words",
            body: "**Who** asks about a person/animal, **what** about a thing/action, **where** about a place, **when** about a time. Each question word points to a different kind of answer.",
          },
          {
            heading: "Find the answer",
            body: "Listen to the story and find the part that answers the question. 'Who is the story about?' — that's the character. 'Where does it happen?' — that's the setting.",
          },
        ],
        keyFormulas: [
          { name: "Question words", statement: "Who=person, What=thing/action, Where=place, When=time." },
        ],
        workedExample: {
          problem: "Story: 'A cat sleeps on the mat.' Question: 'Where is the cat?'",
          solution: "The cat is **on the mat** — that answers 'where'.",
        },
      },
      questions: [
        {
          id: "epk-u4-answer-questions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Who' questions ask about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a place"
                    },
                    {
                              "id": "b",
                              "text": "a person or animal"
                    },
                    {
                              "id": "c",
                              "text": "a time"
                    },
                    {
                              "id": "d",
                              "text": "a thing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Who' asks about a person or animal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Who' asks about a person or animal.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Person or animal**",
          "commonErrors": [
                    "Confuses with 'where'."
          ]
},
        },
        {
          id: "epk-u4-answer-questions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Where' questions ask about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a person"
                    },
                    {
                              "id": "b",
                              "text": "a place"
                    },
                    {
                              "id": "c",
                              "text": "a time"
                    },
                    {
                              "id": "d",
                              "text": "an action"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Where' asks about a place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Where' asks about a place.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**A place**",
          "commonErrors": [
                    "Confuses with 'who'."
          ]
},
        },
        {
          id: "epk-u4-answer-questions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Story: 'The dog runs in the park.' Answer: 'Where does the dog run?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Answer questions",
                              "statement": "Where = place: in the park."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Answers 'in the park'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**In the park**",
          "commonErrors": [
                    "Wrong answer.",
                    "Cannot answer."
          ]
},
        },
        {
          id: "epk-u4-answer-questions-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'When' questions ask about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a place"
                    },
                    {
                              "id": "b",
                              "text": "a person"
                    },
                    {
                              "id": "c",
                              "text": "a time"
                    },
                    {
                              "id": "d",
                              "text": "a thing"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'When' asks about a time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'When' asks about a time.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**A time**",
          "commonErrors": [
                    "Confuses with 'where'."
          ]
},
        },
        {
          id: "epk-u4-answer-questions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Story: 'A girl named Mia finds a red ball in the yard.' Answer: Who? What? Where?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Answer questions",
                              "statement": "Who=Mia, What=red ball, Where=yard."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Answers 'who' = Mia.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Answers 'what' = red ball and 'where' = yard.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Who: Mia; What: red ball; Where: yard**",
          "commonErrors": [
                    "Wrong answers.",
                    "Cannot answer."
          ]
},
        },
        {
          id: "epk-u4-answer-questions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Asks about a person or animal."
                    },
                    {
                              "id": "b",
                              "text": "Something you ask to find out."
                    },
                    {
                              "id": "c",
                              "text": "Asks about a thing or action."
                    },
                    {
                              "id": "d",
                              "text": "Asks about a place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Question\" means Something you ask to find out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Question\" means Something you ask to find out.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Question** = Something you ask to find out.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u4-answer-questions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Who\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Asks about a thing or action."
                    },
                    {
                              "id": "b",
                              "text": "Asks about a place."
                    },
                    {
                              "id": "c",
                              "text": "Asks about a time."
                    },
                    {
                              "id": "d",
                              "text": "Asks about a person or animal."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Who\" means Asks about a person or animal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Who\" means Asks about a person or animal.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Who** = Asks about a person or animal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u4-answer-questions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"What\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Asks about a place."
                    },
                    {
                              "id": "b",
                              "text": "Asks about a thing or action."
                    },
                    {
                              "id": "c",
                              "text": "Asks about a time."
                    },
                    {
                              "id": "d",
                              "text": "Something you ask to find out."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"What\" means Asks about a thing or action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"What\" means Asks about a thing or action.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**What** = Asks about a thing or action.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
