import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ela0-u1-lesson-1-2",
  code: "1-2",
  title: "Who, What, Where",
  goal: "I CAN answer who, what and where questions about stories.",
  standards: ["RL.K.1"],
  vocabulary: [
    { term: "Who", definition: "Asks about a person or animal." },
    { term: "What", definition: "Asks about a thing or action." },
    { term: "Where", definition: "Asks about a place." },
    { term: "Character", definition: "The person or animal in the story." },
    { term: "Setting", definition: "Where the story happens." },
    { term: "Event", definition: "Something that happens in the story." },
  ],
  concepts: [
    {
      id: "ela0-u1-who-what-where",
      title: "Who, what and where",
      skill: "Answer who/what/where questions about stories.",
      lesson: {
        sections: [
          {
            heading: "Question words",
            body: "**Who** asks about a person/animal, **what** about a thing/action, **where** about a place. Each points to a different kind of answer.",
          },
          {
            heading: "Find the answer",
            body: "Listen to the story and find the part that answers the question. 'Who is the story about?' = the character. 'Where does it happen?' = the setting.",
          },
        ],
        keyFormulas: [
          { name: "Question words", statement: "Who=person, What=thing/action, Where=place." },
        ],
        workedExample: {
          problem: "Story: 'A cat sleeps on the mat.' Question: 'Where is the cat?'",
          solution: "The cat is **on the mat** — that answers 'where'.",
        },
      },
      questions: [
        {
          id: "ela0-u1-who-what-where-q1",
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
          "finalAnswer": "**person or animal**",
          "commonErrors": [
                    "Confuses with 'where'."
          ]
},
        },
        {
          id: "ela0-u1-who-what-where-q2",
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
          "finalAnswer": "**a place**",
          "commonErrors": [
                    "Confuses with 'who'."
          ]
},
        },
        {
          id: "ela0-u1-who-what-where-q3",
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
          id: "ela0-u1-who-what-where-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'character' in a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the reader"
                    },
                    {
                              "id": "b",
                              "text": "the person or animal the story is about"
                    },
                    {
                              "id": "c",
                              "text": "the book"
                    },
                    {
                              "id": "d",
                              "text": "the author"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Character = who the story is about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Character = who the story is about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**person or animal**",
          "commonErrors": [
                    "Confuses with reader."
          ]
},
        },
        {
          id: "ela0-u1-who-what-where-q5",
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
                              "reasoning": "Answers 'what' and 'where'.",
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
          id: "ela0-u1-who-what-where-q6",
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
                              "text": "Asks about a person or animal."
                    },
                    {
                              "id": "c",
                              "text": "Asks about a place."
                    },
                    {
                              "id": "d",
                              "text": "The person or animal in the story."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "ela0-u1-who-what-where-q7",
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
                              "text": "The person or animal in the story."
                    },
                    {
                              "id": "c",
                              "text": "Where the story happens."
                    },
                    {
                              "id": "d",
                              "text": "Asks about a thing or action."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ela0-u1-who-what-where-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Where\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The person or animal in the story."
                    },
                    {
                              "id": "b",
                              "text": "Asks about a place."
                    },
                    {
                              "id": "c",
                              "text": "Where the story happens."
                    },
                    {
                              "id": "d",
                              "text": "Something that happens in the story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Where\" means Asks about a place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Where\" means Asks about a place.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Where** = Asks about a place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
