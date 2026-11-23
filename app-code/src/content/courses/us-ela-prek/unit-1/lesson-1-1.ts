import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "epk-u1-lesson-1-1",
  code: "1-1",
  title: "Print Carries Meaning",
  goal: "I CAN understand that words in books and signs carry meaning.",
  standards: ["ELOF-PK.LL.PRINT.1"],
  vocabulary: [
    { term: "Print", definition: "Words and letters we read." },
    { term: "Meaning", definition: "What words tell us." },
    { term: "Word", definition: "A group of letters that means something." },
    { term: "Sentence", definition: "Words that go together to tell something." },
    { term: "Read", definition: "Look at print and understand it." },
  ],
  concepts: [
    {
      id: "epk-u1-print-carries-meaning",
      title: "Print carries meaning",
      skill: "Recognize that printed words have meaning.",
      lesson: {
        sections: [
          {
            heading: "Words mean things",
            body: "Every word on a page tells us something. The word 'cat' means a furry animal. Print is not just pictures — it is **meaning made visible**.",
          },
          {
            heading: "Print is everywhere",
            body: "We see print on books, signs, labels, cereal boxes and doors. Everywhere there are words, there is meaning to read.",
          },
        ],
        keyFormulas: [
          { name: "Print", statement: "Words on a page carry meaning." },
        ],
        workedExample: {
          problem: "A sign says 'STOP'. What does it mean?",
          solution: "The print 'STOP' tells us to halt — **print carries meaning**.",
        },
      },
      questions: [
        {
          id: "epk-u1-print-carries-meaning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the word 'cat' on a page tell us?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Nothing"
                    },
                    {
                              "id": "b",
                              "text": "About a furry animal"
                    },
                    {
                              "id": "c",
                              "text": "How to draw"
                    },
                    {
                              "id": "d",
                              "text": "A color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "The word 'cat' means a furry animal — print carries meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The word 'cat' means a furry animal — print carries meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**About a furry animal**",
          "commonErrors": [
                    "Thinks print is just decoration."
          ]
},
        },
        {
          id: "epk-u1-print-carries-meaning-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where do we see print in everyday life?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only in books"
                    },
                    {
                              "id": "b",
                              "text": "On signs, labels and boxes too"
                    },
                    {
                              "id": "c",
                              "text": "Nowhere"
                    },
                    {
                              "id": "d",
                              "text": "Only on computers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Print is everywhere: signs, cereal boxes, doors, labels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Print is everywhere: signs, cereal boxes, doors, labels.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Signs, labels and boxes**",
          "commonErrors": [
                    "Thinks print is only in books."
          ]
},
        },
        {
          id: "epk-u1-print-carries-meaning-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Look at a book or sign near you. What does the print say or mean?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Print meaning",
                              "statement": "Printed words carry meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies real print and its meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'STOP' means halt; 'EXIT' means way out**",
          "commonErrors": [
                    "Cannot find any print.",
                    "Cannot say what it means."
          ]
},
        },
        {
          id: "epk-u1-print-carries-meaning-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A word is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a single letter"
                    },
                    {
                              "id": "b",
                              "text": "a group of letters that means something"
                    },
                    {
                              "id": "c",
                              "text": "a picture"
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
                              "statement": "A word is letters grouped to mean something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A word is letters grouped to mean something.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Letters that mean something**",
          "commonErrors": [
                    "Confuses word with letter."
          ]
},
        },
        {
          id: "epk-u1-print-carries-meaning-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find two examples of print around you (a sign, a label, a book). What does each one say or mean?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Print",
                              "statement": "Words on a page or sign carry meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds 2 real examples of print.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says what each means.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'EXIT' on a door, 'MILK' on a carton**",
          "commonErrors": [
                    "Only finds 1 example.",
                    "Cannot explain meaning."
          ]
},
        },
        {
          id: "epk-u1-print-carries-meaning-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Print\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What words tell us."
                    },
                    {
                              "id": "b",
                              "text": "Words and letters we read."
                    },
                    {
                              "id": "c",
                              "text": "A group of letters that means something."
                    },
                    {
                              "id": "d",
                              "text": "Words that go together to tell something."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Print\" means Words and letters we read."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Print\" means Words and letters we read.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Print** = Words and letters we read.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u1-print-carries-meaning-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Meaning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A group of letters that means something."
                    },
                    {
                              "id": "b",
                              "text": "Words that go together to tell something."
                    },
                    {
                              "id": "c",
                              "text": "Look at print and understand it."
                    },
                    {
                              "id": "d",
                              "text": "What words tell us."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Meaning\" means What words tell us."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Meaning\" means What words tell us.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Meaning** = What words tell us.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u1-print-carries-meaning-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Words that go together to tell something."
                    },
                    {
                              "id": "b",
                              "text": "A group of letters that means something."
                    },
                    {
                              "id": "c",
                              "text": "Look at print and understand it."
                    },
                    {
                              "id": "d",
                              "text": "Words and letters we read."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Word\" means A group of letters that means something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word\" means A group of letters that means something.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Word** = A group of letters that means something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
