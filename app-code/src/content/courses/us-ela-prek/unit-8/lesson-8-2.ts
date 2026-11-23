import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "epk-u8-lesson-8-2",
  code: "8-2",
  title: "Review: Alphabet and Vocabulary",
  goal: "I CAN name letters, match upper/lowercase and use new words.",
  standards: ["ELOF-PK.LL.REVIEW.2"],
  vocabulary: [
    { term: "Alphabet", definition: "All 26 letters." },
    { term: "Uppercase", definition: "Big letters." },
    { term: "Lowercase", definition: "Small letters." },
    { term: "Vocabulary", definition: "Words we know." },
    { term: "Meaning", definition: "What a word tells us." },
  ],
  concepts: [
    {
      id: "epk-u8-review-alphabet-vocab",
      title: "Alphabet and vocabulary review",
      skill: "Combine letter knowledge and vocabulary.",
      lesson: {
        sections: [
          {
            heading: "Letters + words",
            body: "Knowing letters (names, sounds, upper/lowercase) helps you read and write. Knowing words (vocabulary) helps you understand. Both are essential.",
          },
          {
            heading: "Use them together",
            body: "Match A to a, say the sound B makes, and use a new word in a sentence. Letter knowledge + vocabulary = literacy.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Letter knowledge + vocabulary = literacy foundation." },
        ],
        workedExample: {
          problem: "Match M to lowercase, say its sound, and use 'mighty' in a sentence.",
          solution: "M-m, sound 'mmm', 'The mighty lion roared.'",
        },
      },
      questions: [
        {
          id: "epk-u8-review-alphabet-vocab-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the lowercase partner of S?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "S"
                    },
                    {
                              "id": "b",
                              "text": "s"
                    },
                    {
                              "id": "c",
                              "text": "T"
                    },
                    {
                              "id": "d",
                              "text": "t"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "S's lowercase partner is 's'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "S's lowercase partner is 's'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**s**",
          "commonErrors": [
                    "Wrong letter or case."
          ]
},
        },
        {
          id: "epk-u8-review-alphabet-vocab-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What sound does B make?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bee"
                    },
                    {
                              "id": "b",
                              "text": "buh"
                    },
                    {
                              "id": "c",
                              "text": "ah"
                    },
                    {
                              "id": "d",
                              "text": "eh"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "B makes 'buh' (not 'bee')."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B makes 'buh' (not 'bee').",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**buh**",
          "commonErrors": [
                    "Confuses name with sound."
          ]
},
        },
        {
          id: "epk-u8-review-alphabet-vocab-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Use the word 'tiny' in a sentence. Then name the lowercase partner of T.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vocabulary + letters",
                              "statement": "Use word + match letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses 'tiny' correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names T's partner = t.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'The ant is tiny.' T -> t**",
          "commonErrors": [
                    "Wrong word usage.",
                    "Wrong letter."
          ]
},
        },
        {
          id: "epk-u8-review-alphabet-vocab-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many letters in the alphabet?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "24"
                    },
                    {
                              "id": "b",
                              "text": "26"
                    },
                    {
                              "id": "c",
                              "text": "28"
                    },
                    {
                              "id": "d",
                              "text": "30"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "26 letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "26 letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**26**",
          "commonErrors": [
                    "Miscounts."
          ]
},
        },
        {
          id: "epk-u8-review-alphabet-vocab-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Match three uppercase letters to lowercase, say one letter sound, and define one vocabulary word.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Alphabet + vocab",
                              "statement": "Match letters, sound, define word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Matches 3 letters correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says sound and defines word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., A-a, B-b, C-c; B->buh; 'enormous'=very big**",
          "commonErrors": [
                    "Wrong matches.",
                    "Cannot define word."
          ]
},
        },
        {
          id: "epk-u8-review-alphabet-vocab-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Alphabet\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Big letters."
                    },
                    {
                              "id": "b",
                              "text": "All 26 letters."
                    },
                    {
                              "id": "c",
                              "text": "Small letters."
                    },
                    {
                              "id": "d",
                              "text": "Words we know."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Alphabet\" means All 26 letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Alphabet\" means All 26 letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Alphabet** = All 26 letters.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u8-review-alphabet-vocab-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Uppercase\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small letters."
                    },
                    {
                              "id": "b",
                              "text": "Words we know."
                    },
                    {
                              "id": "c",
                              "text": "What a word tells us."
                    },
                    {
                              "id": "d",
                              "text": "Big letters."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Uppercase\" means Big letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Uppercase\" means Big letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Uppercase** = Big letters.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u8-review-alphabet-vocab-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Lowercase\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Words we know."
                    },
                    {
                              "id": "b",
                              "text": "Small letters."
                    },
                    {
                              "id": "c",
                              "text": "What a word tells us."
                    },
                    {
                              "id": "d",
                              "text": "All 26 letters."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Lowercase\" means Small letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Lowercase\" means Small letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Lowercase** = Small letters.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
