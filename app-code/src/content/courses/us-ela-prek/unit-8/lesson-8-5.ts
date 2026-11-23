import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "epk-u8-lesson-8-5",
  code: "8-5",
  title: "Review: Everything",
  goal: "I CAN use all Pre-K ELA skills together.",
  standards: ["ELOF-PK.LL.REVIEW.5"],
  vocabulary: [
    { term: "Review", definition: "Practice all ELA skills." },
    { term: "Print", definition: "Words we read." },
    { term: "Sound", definition: "What letters make." },
    { term: "Word", definition: "Letters grouped." },
    { term: "Story", definition: "Beginning, middle, end." },
    { term: "Write", definition: "Make letters and words." },
    { term: "Speak", definition: "Tell stories and converse." },
    { term: "Listen", definition: "Pay attention to others." },
  ],
  concepts: [
    {
      id: "epk-u8-review-everything",
      title: "Everything review",
      skill: "Combine all Pre-K ELA skills: print, phonics, vocabulary, reading, writing, speaking.",
      lesson: {
        sections: [
          {
            heading: "All the skills together",
            body: "Pre-K ELA has many parts: **print awareness** (how to read), **phonological awareness** (sounds), **alphabet** (letters), **vocabulary** (words), **emergent reading** (strategies), **writing** (name + letters + stories), and **speaking/listening** (oral language).",
          },
          {
            heading: "You are a reader and writer!",
            body: "You already know how to hold a book, track words, hear sounds, recognize letters, learn words, read simple texts, write your name and tell stories. These are the foundations of literacy!",
          },
        ],
        keyFormulas: [
          { name: "Pre-K ELA", statement: "Print + phonics + alphabet + vocabulary + reading + writing + speaking = literacy foundation." },
        ],
        workedExample: {
          problem: "Show everything you learned: point to print, say a sound, read a sight word, draw a story, tell about it.",
          solution: "Point to word 'the' (print), say /t/-/h/-/e/ sounds, read 'the' (sight word), draw story, tell it aloud.",
        },
      },
      questions: [
        {
          id: "epk-u8-review-everything-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pre-K ELA includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only reading"
                    },
                    {
                              "id": "b",
                              "text": "Print, phonics, alphabet, vocab, reading, writing, speaking"
                    },
                    {
                              "id": "c",
                              "text": "Only writing"
                    },
                    {
                              "id": "d",
                              "text": "Only spelling"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All ELA skills together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All ELA skills together.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**All ELA skills**",
          "commonErrors": [
                    "Lists only one skill."
          ]
},
        },
        {
          id: "epk-u8-review-everything-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which shows 'print awareness'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Saying letter sounds"
                    },
                    {
                              "id": "b",
                              "text": "Knowing we read left to right"
                    },
                    {
                              "id": "c",
                              "text": "Drawing a picture"
                    },
                    {
                              "id": "d",
                              "text": "Telling a story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Print awareness = knowing how to read (direction, letters, words)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Print awareness = knowing how to read (direction, letters, words).",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Knowing reading direction**",
          "commonErrors": [
                    "Confuses with phonics."
          ]
},
        },
        {
          id: "epk-u8-review-everything-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show print awareness, say a letter sound, read a sight word, and draw a story picture.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "All ELA skills",
                              "statement": "Print + sound + sight word + story picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Demonstrates all four skills.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., point left-to-right, /b/ for B, read 'the', draw story**",
          "commonErrors": [
                    "Only does one skill.",
                    "Cannot demonstrate."
          ]
},
        },
        {
          id: "epk-u8-review-everything-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "You are ready for Kindergarten because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read chapter books"
                    },
                    {
                              "id": "b",
                              "text": "hold books, track words, hear sounds, know letters, tell stories"
                    },
                    {
                              "id": "c",
                              "text": "write essays"
                    },
                    {
                              "id": "d",
                              "text": "do calculus"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Pre-K skills prepare you for K: print, phonics, letters, stories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pre-K skills prepare you for K: print, phonics, letters, stories.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Pre-K literacy skills**",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "epk-u8-review-everything-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a literacy portfolio: write your name, draw a story, point to print in a book, say a sound, and tell your story.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "All ELA skills",
                              "statement": "Name + story + print + sound + oral."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes name writing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Includes story drawing + print + sound + oral.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sam' + story drawing + point to 'the' + /b/ + tell story**",
          "commonErrors": [
                    "Missing elements.",
                    "Cannot combine skills."
          ]
},
        },
        {
          id: "epk-u8-review-everything-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Review\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Words we read."
                    },
                    {
                              "id": "b",
                              "text": "Practice all ELA skills."
                    },
                    {
                              "id": "c",
                              "text": "What letters make."
                    },
                    {
                              "id": "d",
                              "text": "Letters grouped."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Review\" means Practice all ELA skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Review\" means Practice all ELA skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Review** = Practice all ELA skills.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u8-review-everything-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Print\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What letters make."
                    },
                    {
                              "id": "b",
                              "text": "Letters grouped."
                    },
                    {
                              "id": "c",
                              "text": "Beginning, middle, end."
                    },
                    {
                              "id": "d",
                              "text": "Words we read."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Print\" means Words we read."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Print\" means Words we read.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Print** = Words we read.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u8-review-everything-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Letters grouped."
                    },
                    {
                              "id": "b",
                              "text": "What letters make."
                    },
                    {
                              "id": "c",
                              "text": "Beginning, middle, end."
                    },
                    {
                              "id": "d",
                              "text": "Make letters and words."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sound\" means What letters make."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sound\" means What letters make.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sound** = What letters make.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
