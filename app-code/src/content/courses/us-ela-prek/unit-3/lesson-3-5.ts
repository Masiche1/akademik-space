import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "epk-u3-lesson-3-5",
  code: "3-5",
  title: "Alphabet Order",
  goal: "I CAN say and arrange letters in alphabetical order.",
  standards: ["ELOF-PK.LL.ALPH.5"],
  vocabulary: [
    { term: "Alphabet order", definition: "Letters in their proper sequence A to Z." },
    { term: "Sequence", definition: "One after another in order." },
    { term: "Before", definition: "Comes earlier in the alphabet." },
    { term: "After", definition: "Comes later in the alphabet." },
    { term: "Arrange", definition: "Put in order." },
  ],
  concepts: [
    {
      id: "epk-u3-alphabet-order",
      title: "Alphabet order",
      skill: "Recite and arrange letters in alphabetical order.",
      lesson: {
        sections: [
          {
            heading: "Letters in order",
            body: "The alphabet has a **sequence**: A, B, C, D... Z. Knowing the order helps you look up words and understand how letters work together.",
          },
          {
            heading: "Before and after",
            body: "In the alphabet, A comes **before** B, B comes **before** C. 'Which letter comes after M?' — N. Practice saying the order aloud.",
          },
        ],
        keyFormulas: [
          { name: "Alphabet order", statement: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z — each letter has a before and after." },
        ],
        workedExample: {
          problem: "What letter comes after L in the alphabet?",
          solution: "Alphabet order: K, L, **M** — M comes after L.",
        },
      },
      questions: [
        {
          id: "epk-u3-alphabet-order-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which letter comes first in the alphabet?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "B"
                    },
                    {
                              "id": "b",
                              "text": "A"
                    },
                    {
                              "id": "c",
                              "text": "C"
                    },
                    {
                              "id": "d",
                              "text": "Z"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "A is the first letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A is the first letter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**A**",
          "commonErrors": [
                    "Picks wrong letter."
          ]
},
        },
        {
          id: "epk-u3-alphabet-order-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What letter comes after M?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "L"
                    },
                    {
                              "id": "b",
                              "text": "N"
                    },
                    {
                              "id": "c",
                              "text": "O"
                    },
                    {
                              "id": "d",
                              "text": "K"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Alphabet order: L, M, **N**."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alphabet order: L, M, **N**.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**N**",
          "commonErrors": [
                    "Wrong position."
          ]
},
        },
        {
          id: "epk-u3-alphabet-order-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Say the alphabet from A to J. Did you say them in order?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Alphabet order",
                              "statement": "A B C D E F G H I J in sequence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says A-J in correct order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**A B C D E F G H I J**",
          "commonErrors": [
                    "Out of order.",
                    "Cannot recite."
          ]
},
        },
        {
          id: "epk-u3-alphabet-order-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which letter comes before P?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "O"
                    },
                    {
                              "id": "b",
                              "text": "Q"
                    },
                    {
                              "id": "c",
                              "text": "R"
                    },
                    {
                              "id": "d",
                              "text": "N"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Alphabet order: O, **P**, Q — O comes before P."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alphabet order: O, **P**, Q — O comes before P.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**O**",
          "commonErrors": [
                    "Picks letter after P."
          ]
},
        },
        {
          id: "epk-u3-alphabet-order-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Arrange these letters in alphabetical order: T, R, Q. Then say what comes after Q.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Alphabet order",
                              "statement": "Q R T order; after Q is R."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Arranges Q, R, T correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says R comes after Q.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Q, R, T; after Q is R**",
          "commonErrors": [
                    "Wrong order.",
                    "Wrong letter after Q."
          ]
},
        },
        {
          id: "epk-u3-alphabet-order-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Alphabet order\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One after another in order."
                    },
                    {
                              "id": "b",
                              "text": "Letters in their proper sequence A to Z."
                    },
                    {
                              "id": "c",
                              "text": "Comes earlier in the alphabet."
                    },
                    {
                              "id": "d",
                              "text": "Comes later in the alphabet."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Alphabet order\" means Letters in their proper sequence A to Z."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Alphabet order\" means Letters in their proper sequence A to Z.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Alphabet order** = Letters in their proper sequence A to Z.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u3-alphabet-order-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sequence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Comes earlier in the alphabet."
                    },
                    {
                              "id": "b",
                              "text": "Comes later in the alphabet."
                    },
                    {
                              "id": "c",
                              "text": "Put in order."
                    },
                    {
                              "id": "d",
                              "text": "One after another in order."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sequence\" means One after another in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sequence\" means One after another in order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sequence** = One after another in order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u3-alphabet-order-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Before\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Comes later in the alphabet."
                    },
                    {
                              "id": "b",
                              "text": "Comes earlier in the alphabet."
                    },
                    {
                              "id": "c",
                              "text": "Put in order."
                    },
                    {
                              "id": "d",
                              "text": "Letters in their proper sequence A to Z."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Before\" means Comes earlier in the alphabet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Before\" means Comes earlier in the alphabet.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Before** = Comes earlier in the alphabet.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
