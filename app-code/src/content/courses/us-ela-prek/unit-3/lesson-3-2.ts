import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "epk-u3-lesson-3-2",
  code: "3-2",
  title: "Uppercase and Lowercase",
  goal: "I CAN match uppercase letters to their lowercase partners.",
  standards: ["ELOF-PK.LL.ALPH.2"],
  vocabulary: [
    { term: "Uppercase", definition: "Capital letters: A, B, C." },
    { term: "Lowercase", definition: "Small letters: a, b, c." },
    { term: "Match", definition: "Pair letters that are the same." },
    { term: "Partner", definition: "The uppercase/lowercase pair." },
    { term: "Same letter", definition: "A and a are the same letter, different size." },
  ],
  concepts: [
    {
      id: "epk-u3-uppercase-lowercase",
      title: "Upper and lowercase",
      skill: "Match uppercase to lowercase letters.",
      lesson: {
        sections: [
          {
            heading: "Two sizes",
            body: "Every letter has an **uppercase** (big) and **lowercase** (small) form: A-a, B-b, C-c. They are the same letter, just different size.",
          },
          {
            heading: "Match them",
            body: "Practice matching: point to 'A' and find 'a'. Point to 'B' and find 'b'. This helps you recognize letters in both forms.",
          },
        ],
        keyFormulas: [
          { name: "Upper/lowercase", statement: "A-a, B-b, C-c... same letter, two sizes." },
        ],
        workedExample: {
          problem: "Match A to its lowercase partner.",
          solution: "A matches **a** — same letter, different size.",
        },
      },
      questions: [
        {
          id: "epk-u3-uppercase-lowercase-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the lowercase partner of A?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A"
                    },
                    {
                              "id": "b",
                              "text": "a"
                    },
                    {
                              "id": "c",
                              "text": "B"
                    },
                    {
                              "id": "d",
                              "text": "b"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "A's lowercase partner is 'a'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A's lowercase partner is 'a'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a**",
          "commonErrors": [
                    "Picks wrong letter or case."
          ]
},
        },
        {
          id: "epk-u3-uppercase-lowercase-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair shows the SAME letter in upper and lowercase?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A and b"
                    },
                    {
                              "id": "b",
                              "text": "B and b"
                    },
                    {
                              "id": "c",
                              "text": "C and d"
                    },
                    {
                              "id": "d",
                              "text": "D and c"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "B and b are the same letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B and b are the same letter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**B and b**",
          "commonErrors": [
                    "Picks different letters."
          ]
},
        },
        {
          id: "epk-u3-uppercase-lowercase-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Match these uppercase letters to lowercase: M, S, T.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Upper/lowercase match",
                              "statement": "M-m, S-s, T-t."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Matches all three correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**M-m, S-s, T-t**",
          "commonErrors": [
                    "Mismatches letters.",
                    "Cannot match."
          ]
},
        },
        {
          id: "epk-u3-uppercase-lowercase-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Lowercase letters are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "big letters"
                    },
                    {
                              "id": "b",
                              "text": "small letters"
                    },
                    {
                              "id": "c",
                              "text": "numbers"
                    },
                    {
                              "id": "d",
                              "text": "pictures"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Lowercase = small letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lowercase = small letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Small letters**",
          "commonErrors": [
                    "Confuses with uppercase."
          ]
},
        },
        {
          id: "epk-u3-uppercase-lowercase-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write or point to three uppercase letters and their lowercase partners.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Upper/lowercase",
                              "statement": "Each uppercase has a lowercase partner."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 uppercase letters.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Gives correct lowercase partners.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., A-a, B-b, C-c**",
          "commonErrors": [
                    "Wrong partners.",
                    "Cannot identify case."
          ]
},
        },
        {
          id: "epk-u3-uppercase-lowercase-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Uppercase\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small letters: a, b, c."
                    },
                    {
                              "id": "b",
                              "text": "Capital letters: A, B, C."
                    },
                    {
                              "id": "c",
                              "text": "Pair letters that are the same."
                    },
                    {
                              "id": "d",
                              "text": "The uppercase/lowercase pair."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Uppercase\" means Capital letters: A, B, C."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Uppercase\" means Capital letters: A, B, C.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Uppercase** = Capital letters: A, B, C.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u3-uppercase-lowercase-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Lowercase\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pair letters that are the same."
                    },
                    {
                              "id": "b",
                              "text": "The uppercase/lowercase pair."
                    },
                    {
                              "id": "c",
                              "text": "A and a are the same letter, different size."
                    },
                    {
                              "id": "d",
                              "text": "Small letters: a, b, c."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Lowercase\" means Small letters: a, b, c."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Lowercase\" means Small letters: a, b, c.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Lowercase** = Small letters: a, b, c.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u3-uppercase-lowercase-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Match\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The uppercase/lowercase pair."
                    },
                    {
                              "id": "b",
                              "text": "Pair letters that are the same."
                    },
                    {
                              "id": "c",
                              "text": "A and a are the same letter, different size."
                    },
                    {
                              "id": "d",
                              "text": "Capital letters: A, B, C."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Match\" means Pair letters that are the same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Match\" means Pair letters that are the same.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Match** = Pair letters that are the same.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
