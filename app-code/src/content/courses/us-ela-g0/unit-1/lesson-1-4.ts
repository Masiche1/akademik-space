import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "ela0-u1-lesson-1-4",
  code: "1-4",
  title: "Picture Clues",
  goal: "I CAN use pictures to help me understand stories.",
  standards: ["RL.K.7"],
  vocabulary: [
    { term: "Illustration", definition: "A picture in a book." },
    { term: "Picture clue", definition: "A picture that helps us understand." },
    { term: "Predict", definition: "Guess what comes next." },
    { term: "Confirm", definition: "Check if our guess was right." },
    { term: "Visual", definition: "Something we can see." },
    { term: "Detail", definition: "A small part we notice." },
    { term: "Setting", definition: "Where the story happens, often shown in pictures." },
  ],
  concepts: [
    {
      id: "ela0-u1-picture-clues",
      title: "Using picture clues",
      skill: "Use illustrations to predict, understand and confirm story details.",
      lesson: {
        sections: [
          {
            heading: "Pictures help",
            body: "**Illustrations** give us **picture clues** — details we can see. They show us the setting, characters and what is happening.",
          },
          {
            heading: "Predict and check",
            body: "Look at a picture and **predict** what might happen. Then read to **confirm** — did the words match your guess?",
          },
        ],
        keyFormulas: [
          { name: "Picture clues", statement: "Use illustrations to predict, understand, and confirm details." },
        ],
        workedExample: {
          problem: "You see a picture of a dog next to the word 'bark'. What might 'bark' mean?",
          solution: "The picture is a clue — 'bark' probably means **the sound a dog makes**.",
        },
      },
      questions: [
        {
          id: "ela0-u1-picture-clues-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'picture clue' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a decoration only"
                    },
                    {
                              "id": "b",
                              "text": "a picture that helps us understand"
                    },
                    {
                              "id": "c",
                              "text": "a hidden message"
                    },
                    {
                              "id": "d",
                              "text": "a type of letter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Picture clues help us understand stories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Picture clues help us understand stories.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**helps us understand**",
          "commonErrors": [
                    "Thinks pictures are just decoration."
          ]
},
        },
        {
          id: "ela0-u1-picture-clues-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "You don't know a word but see a picture of a lion. What should you do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "skip it"
                    },
                    {
                              "id": "b",
                              "text": "use the picture as a clue"
                    },
                    {
                              "id": "c",
                              "text": "guess randomly"
                    },
                    {
                              "id": "d",
                              "text": "close the book"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "The lion picture clues the word's meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lion picture clues the word's meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**use picture as clue**",
          "commonErrors": [
                    "Ignores the helpful picture."
          ]
},
        },
        {
          id: "ela0-u1-picture-clues-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Look at a picture in a book. What do you think is happening? Then read — were you right?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Picture clues",
                              "statement": "Predict from picture, confirm by reading."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predicts from picture.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Confirms or adjusts after reading.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Picture shows dog running; text says dog runs — correct!'**",
          "commonErrors": [
                    "Cannot use picture.",
                    "Does not read to confirm."
          ]
},
        },
        {
          id: "ela0-u1-picture-clues-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Predict' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read the whole book"
                    },
                    {
                              "id": "b",
                              "text": "guess what comes next"
                    },
                    {
                              "id": "c",
                              "text": "close the book"
                    },
                    {
                              "id": "d",
                              "text": "draw a picture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Predict = guess what comes next."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predict = guess what comes next.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**guess what comes next**",
          "commonErrors": [
                    "Confuses predict with read."
          ]
},
        },
        {
          id: "ela0-u1-picture-clues-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Look at a picture in a storybook. Predict what will happen, then read the next page to check. Were you right?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Predict and confirm",
                              "statement": "Guess from picture, verify by reading."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Makes a prediction.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reads to confirm and says if correct.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I predicted X; the story said X — I was right!'**",
          "commonErrors": [
                    "No prediction.",
                    "Does not check."
          ]
},
        },
        {
          id: "ela0-u1-picture-clues-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Illustration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A picture that helps us understand."
                    },
                    {
                              "id": "b",
                              "text": "A picture in a book."
                    },
                    {
                              "id": "c",
                              "text": "Guess what comes next."
                    },
                    {
                              "id": "d",
                              "text": "Check if our guess was right."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Illustration\" means A picture in a book."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Illustration\" means A picture in a book.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Illustration** = A picture in a book.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u1-picture-clues-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Picture clue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Guess what comes next."
                    },
                    {
                              "id": "b",
                              "text": "Check if our guess was right."
                    },
                    {
                              "id": "c",
                              "text": "Something we can see."
                    },
                    {
                              "id": "d",
                              "text": "A picture that helps us understand."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Picture clue\" means A picture that helps us understand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Picture clue\" means A picture that helps us understand.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Picture clue** = A picture that helps us understand.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u1-picture-clues-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Predict\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Check if our guess was right."
                    },
                    {
                              "id": "b",
                              "text": "Guess what comes next."
                    },
                    {
                              "id": "c",
                              "text": "Something we can see."
                    },
                    {
                              "id": "d",
                              "text": "A small part we notice."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Predict\" means Guess what comes next."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Predict\" means Guess what comes next.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Predict** = Guess what comes next.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
