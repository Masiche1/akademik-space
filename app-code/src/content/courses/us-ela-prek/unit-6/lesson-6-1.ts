import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "epk-u6-lesson-6-1",
  code: "6-1",
  title: "Write Your Name",
  goal: "I CAN write my first name using letters.",
  standards: ["ELOF-PK.LL.WRITE.1"],
  vocabulary: [
    { term: "Write", definition: "Make letters and words on paper." },
    { term: "Name", definition: "What we call ourselves." },
    { term: "Letter", definition: "A symbol we write." },
    { term: "First name", definition: "The name we are called." },
    { term: "Form", definition: "The shape of a letter." },
  ],
  concepts: [
    {
      id: "epk-u6-write-name",
      title: "Writing your name",
      skill: "Write your first name with correct letters.",
      lesson: {
        sections: [
          {
            heading: "Your name has letters",
            body: "Your **first name** is made of letters: S-a-m, A-n-n, L-i-a-m. Practice writing each letter in order.",
          },
          {
            heading: "Letter formation",
            body: "Each letter has a special **form** — where to start, which way to go. 'S' starts at the top, curves around. Practice makes it automatic.",
          },
        ],
        keyFormulas: [
          { name: "Name writing", statement: "Write your first name letter by letter in order." },
        ],
        workedExample: {
          problem: "Write the name 'Sam'.",
          solution: "S-a-m — capital S, then lowercase a, then lowercase m. **Sam**",
        },
      },
      questions: [
        {
          id: "epk-u6-write-name-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Your first name is made of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "pictures"
                    },
                    {
                              "id": "b",
                              "text": "letters"
                    },
                    {
                              "id": "c",
                              "text": "numbers"
                    },
                    {
                              "id": "d",
                              "text": "symbols"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Names are written with letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names are written with letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Letters**",
          "commonErrors": [
                    "Thinks names are pictures."
          ]
},
        },
        {
          id: "epk-u6-write-name-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When writing your name, the first letter should be...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "lowercase"
                    },
                    {
                              "id": "b",
                              "text": "uppercase (capital)"
                    },
                    {
                              "id": "c",
                              "text": "any letter"
                    },
                    {
                              "id": "d",
                              "text": "a number"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Names start with a capital letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names start with a capital letter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Capital letter**",
          "commonErrors": [
                    "Uses lowercase first."
          ]
},
        },
        {
          id: "epk-u6-write-name-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write your first name. Say each letter as you write it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Name writing",
                              "statement": "Write first name letter by letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes name with correct letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'S-a-m'**",
          "commonErrors": [
                    "Cannot write name.",
                    "Wrong letters."
          ]
},
        },
        {
          id: "epk-u6-write-name-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct way to write the name 'ann'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ann"
                    },
                    {
                              "id": "b",
                              "text": "Ann"
                    },
                    {
                              "id": "c",
                              "text": "ANN"
                    },
                    {
                              "id": "d",
                              "text": "aNn"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Names start with capital: **Ann**."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names start with capital: **Ann**.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Ann**",
          "commonErrors": [
                    "No capital letter."
          ]
},
        },
        {
          id: "epk-u6-write-name-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write your first name three times. Does it get easier each time?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Letter formation",
                              "statement": "Practice improves letter formation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes name 3 times.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says if it gets easier.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Yes, practice makes it easier**",
          "commonErrors": [
                    "Only writes once.",
                    "Cannot form letters."
          ]
},
        },
        {
          id: "epk-u6-write-name-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Write\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we call ourselves."
                    },
                    {
                              "id": "b",
                              "text": "Make letters and words on paper."
                    },
                    {
                              "id": "c",
                              "text": "A symbol we write."
                    },
                    {
                              "id": "d",
                              "text": "The name we are called."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Write\" means Make letters and words on paper."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Write\" means Make letters and words on paper.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Write** = Make letters and words on paper.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u6-write-name-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Name\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A symbol we write."
                    },
                    {
                              "id": "b",
                              "text": "The name we are called."
                    },
                    {
                              "id": "c",
                              "text": "The shape of a letter."
                    },
                    {
                              "id": "d",
                              "text": "What we call ourselves."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Name\" means What we call ourselves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Name\" means What we call ourselves.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Name** = What we call ourselves.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u6-write-name-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Letter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The name we are called."
                    },
                    {
                              "id": "b",
                              "text": "A symbol we write."
                    },
                    {
                              "id": "c",
                              "text": "The shape of a letter."
                    },
                    {
                              "id": "d",
                              "text": "Make letters and words on paper."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Letter\" means A symbol we write."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Letter\" means A symbol we write.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Letter** = A symbol we write.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
