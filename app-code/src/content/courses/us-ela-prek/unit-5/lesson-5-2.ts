import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "epk-u5-lesson-5-2",
  code: "5-2",
  title: "Picture Clues",
  goal: "I CAN use pictures to help me read and understand.",
  standards: ["ELOF-PK.LL.READ.2"],
  vocabulary: [
    { term: "Picture clue", definition: "A picture that helps you figure out a word or idea." },
    { term: "Illustration", definition: "A picture in a book." },
    { term: "Predict", definition: "Guess what comes next." },
    { term: "Confirm", definition: "Check if your guess was right." },
    { term: "Context", definition: "The words and pictures around a word." },
  ],
  concepts: [
    {
      id: "epk-u5-picture-clues",
      title: "Picture clues",
      skill: "Use illustrations to aid reading and understanding.",
      lesson: {
        sections: [
          {
            heading: "Pictures help",
            body: "When you see a word you don't know, look at the **picture** nearby. The picture gives a **clue** about what the word means.",
          },
          {
            heading: "Predict and check",
            body: "Look at the picture and **predict** what might happen. Then read to **confirm** — did the words match your guess?",
          },
        ],
        keyFormulas: [
          { name: "Picture clue", statement: "Use the illustration to guess a word's meaning, then confirm by reading." },
        ],
        workedExample: {
          problem: "You see the word 'bark' next to a picture of a dog. What might 'bark' mean?",
          solution: "The picture of a dog is a clue — 'bark' probably means **the sound a dog makes**.",
        },
      },
      questions: [
        {
          id: "epk-u5-picture-clues-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'picture clue'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A picture that is decoration only"
                    },
                    {
                              "id": "b",
                              "text": "A picture that helps you figure out a word"
                    },
                    {
                              "id": "c",
                              "text": "A hidden message"
                    },
                    {
                              "id": "d",
                              "text": "A type of letter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Picture clues help you understand words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Picture clues help you understand words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Helps figure out a word**",
          "commonErrors": [
                    "Thinks pictures are just decoration."
          ]
},
        },
        {
          id: "epk-u5-picture-clues-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "You don't know the word 'roar' but see a picture of a lion. What should you do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Skip it"
                    },
                    {
                              "id": "b",
                              "text": "Use the picture as a clue — lion roars"
                    },
                    {
                              "id": "c",
                              "text": "Guess randomly"
                    },
                    {
                              "id": "d",
                              "text": "Close the book"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "The lion picture clues that 'roar' is a loud animal sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lion picture clues that 'roar' is a loud animal sound.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Use picture as clue**",
          "commonErrors": [
                    "Ignores the helpful picture."
          ]
},
        },
        {
          id: "epk-u5-picture-clues-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Look at a picture in a book. What do you think is happening? Then read the words — were you right?",
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
          "finalAnswer": "**e.g., 'Picture shows dog running; text says dog runs fast — correct!'**",
          "commonErrors": [
                    "Cannot use picture.",
                    "Does not read to confirm."
          ]
},
        },
        {
          id: "epk-u5-picture-clues-q4",
          difficulty: "core",
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
          "finalAnswer": "**Guess what comes next**",
          "commonErrors": [
                    "Confuses predict with read."
          ]
},
        },
        {
          id: "epk-u5-picture-clues-q5",
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
                              "reasoning": "Makes a prediction from picture.",
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
          id: "epk-u5-picture-clues-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Picture clue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A picture in a book."
                    },
                    {
                              "id": "b",
                              "text": "A picture that helps you figure out a word or idea."
                    },
                    {
                              "id": "c",
                              "text": "Guess what comes next."
                    },
                    {
                              "id": "d",
                              "text": "Check if your guess was right."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Picture clue\" means A picture that helps you figure out a word or idea."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Picture clue\" means A picture that helps you figure out a word or idea.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Picture clue** = A picture that helps you figure out a word or idea.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u5-picture-clues-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Illustration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Guess what comes next."
                    },
                    {
                              "id": "b",
                              "text": "Check if your guess was right."
                    },
                    {
                              "id": "c",
                              "text": "The words and pictures around a word."
                    },
                    {
                              "id": "d",
                              "text": "A picture in a book."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "epk-u5-picture-clues-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Predict\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Check if your guess was right."
                    },
                    {
                              "id": "b",
                              "text": "Guess what comes next."
                    },
                    {
                              "id": "c",
                              "text": "The words and pictures around a word."
                    },
                    {
                              "id": "d",
                              "text": "A picture that helps you figure out a word or idea."
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
