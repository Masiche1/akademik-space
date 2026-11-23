import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "epk-u3-lesson-3-1",
  code: "3-1",
  title: "Letter Names",
  goal: "I CAN name uppercase letters of the alphabet.",
  standards: ["ELOF-PK.LL.ALPH.1"],
  vocabulary: [
    { term: "Letter name", definition: "What we call a letter, like 'ay' for A." },
    { term: "Alphabet", definition: "All 26 letters in order." },
    { term: "Uppercase", definition: "Big letters: A, B, C." },
    { term: "Sequence", definition: "Letters in their proper order." },
    { term: "Name", definition: "The sound-free label for a letter." },
  ],
  concepts: [
    {
      id: "epk-u3-letter-names",
      title: "Letter names",
      skill: "Name uppercase letters A-Z.",
      lesson: {
        sections: [
          {
            heading: "The alphabet",
            body: "There are **26 letters** in the English alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. Each has a name we say.",
          },
          {
            heading: "Names vs sounds",
            body: "The letter **A** is named 'ay' but makes the sound 'ah' (as in 'apple'). Names and sounds are different — learn both.",
          },
        ],
        keyFormulas: [
          { name: "Alphabet", statement: "A-Z: 26 letters, each with a name." },
        ],
        workedExample: {
          problem: "What is the name of the letter B?",
          solution: "The letter B is named **'bee'**.",
        },
      },
      questions: [
        {
          id: "epk-u3-letter-names-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many letters are in the English alphabet?",
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
                              "statement": "The alphabet has 26 letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The alphabet has 26 letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**26**",
          "commonErrors": [
                    "Miscounts the alphabet."
          ]
},
        },
        {
          id: "epk-u3-letter-names-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the name of the letter C?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "see"
                    },
                    {
                              "id": "b",
                              "text": "say"
                    },
                    {
                              "id": "c",
                              "text": "cee"
                    },
                    {
                              "id": "d",
                              "text": "key"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "C is named 'cee'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "C is named 'cee'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**cee**",
          "commonErrors": [
                    "Confuses name with sound."
          ]
},
        },
        {
          id: "epk-u3-letter-names-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point to a letter and say its name.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Letter names",
                              "statement": "Say the letter's name."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names a letter correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'A' = ay, 'B' = bee**",
          "commonErrors": [
                    "Cannot name letters.",
                    "Says sound not name."
          ]
},
        },
        {
          id: "epk-u3-letter-names-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which letter comes after D in the alphabet?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "C"
                    },
                    {
                              "id": "b",
                              "text": "E"
                    },
                    {
                              "id": "c",
                              "text": "F"
                    },
                    {
                              "id": "d",
                              "text": "B"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Alphabet order: C, D, E — E comes after D."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alphabet order: C, D, E — E comes after D.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**E**",
          "commonErrors": [
                    "Wrong position."
          ]
},
        },
        {
          id: "epk-u3-letter-names-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Say the alphabet from A to E. Then name the letter that comes after F.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Alphabet sequence",
                              "statement": "A B C D E; letter after F is G."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says A-E correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names letter after F = G.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**A B C D E; after F is G**",
          "commonErrors": [
                    "Wrong sequence.",
                    "Wrong letter after F."
          ]
},
        },
        {
          id: "epk-u3-letter-names-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Letter name\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "All 26 letters in order."
                    },
                    {
                              "id": "b",
                              "text": "What we call a letter, like 'ay' for A."
                    },
                    {
                              "id": "c",
                              "text": "Big letters: A, B, C."
                    },
                    {
                              "id": "d",
                              "text": "Letters in their proper order."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Letter name\" means What we call a letter, like 'ay' for A."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Letter name\" means What we call a letter, like 'ay' for A.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Letter name** = What we call a letter, like 'ay' for A.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u3-letter-names-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Alphabet\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Big letters: A, B, C."
                    },
                    {
                              "id": "b",
                              "text": "Letters in their proper order."
                    },
                    {
                              "id": "c",
                              "text": "The sound-free label for a letter."
                    },
                    {
                              "id": "d",
                              "text": "All 26 letters in order."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Alphabet\" means All 26 letters in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Alphabet\" means All 26 letters in order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Alphabet** = All 26 letters in order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u3-letter-names-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Uppercase\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Letters in their proper order."
                    },
                    {
                              "id": "b",
                              "text": "Big letters: A, B, C."
                    },
                    {
                              "id": "c",
                              "text": "The sound-free label for a letter."
                    },
                    {
                              "id": "d",
                              "text": "What we call a letter, like 'ay' for A."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Uppercase\" means Big letters: A, B, C."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Uppercase\" means Big letters: A, B, C.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Uppercase** = Big letters: A, B, C.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
