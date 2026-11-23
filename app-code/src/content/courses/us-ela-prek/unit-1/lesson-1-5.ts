import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "epk-u1-lesson-1-5",
  code: "1-5",
  title: "Concepts of Print Review",
  goal: "I CAN show I understand how print works: direction, letters, words and pictures.",
  standards: ["ELOF-PK.LL.PRINT.5"],
  vocabulary: [
    { term: "Concepts of print", definition: "The basic ideas about how print works." },
    { term: "Directionality", definition: "Knowing we read left to right, top to bottom." },
    { term: "Letter", definition: "One symbol." },
    { term: "Word", definition: "Letters grouped." },
    { term: "Picture", definition: "An image on the page." },
  ],
  concepts: [
    {
      id: "epk-u1-concepts-of-print",
      title: "Concepts of print",
      skill: "Combine print awareness skills: direction, letters, words, pictures.",
      lesson: {
        sections: [
          {
            heading: "Put it together",
            body: "Print awareness = knowing **where** to start (left), which way to go (right, then down), and **what** things are (letters make words; pictures are images).",
          },
          {
            heading: "Show what you know",
            body: "Point to where a book starts, track a sentence, and tell a letter from a picture. These are the foundations of reading.",
          },
        ],
        keyFormulas: [
          { name: "Print awareness", statement: "Start left, go right, top to bottom; letters -> words; pictures are images." },
        ],
        workedExample: {
          problem: "Show me where reading starts on a page and which way it goes.",
          solution: "Start at the **top left**, read **left to right**, then **down** to the next line.",
        },
      },
      questions: [
        {
          id: "epk-u1-concepts-of-print-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reading English starts at the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bottom right"
                    },
                    {
                              "id": "b",
                              "text": "top left"
                    },
                    {
                              "id": "c",
                              "text": "middle"
                    },
                    {
                              "id": "d",
                              "text": "top right"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Start top left, go right, then down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Start top left, go right, then down.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Top left**",
          "commonErrors": [
                    "Starts at wrong corner."
          ]
},
        },
        {
          id: "epk-u1-concepts-of-print-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which comes first when reading a page?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The pictures"
                    },
                    {
                              "id": "b",
                              "text": "The first word at the top left"
                    },
                    {
                              "id": "c",
                              "text": "The last page"
                    },
                    {
                              "id": "d",
                              "text": "The numbers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Start at top left with the first word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Start at top left with the first word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**First word, top left**",
          "commonErrors": [
                    "Starts anywhere."
          ]
},
        },
        {
          id: "epk-u1-concepts-of-print-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point to a word, then a picture on the same page. Which is which and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Word vs picture",
                              "statement": "Word=letters read; picture=image looked at."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correctly distinguishes word and picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Word is letters to read; picture is an image to look at**",
          "commonErrors": [
                    "Cannot tell them apart.",
                    "Reverses them."
          ]
},
        },
        {
          id: "epk-u1-concepts-of-print-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Letters combine to make...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "pictures"
                    },
                    {
                              "id": "b",
                              "text": "words"
                    },
                    {
                              "id": "c",
                              "text": "numbers only"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Letters grouped together form words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Letters grouped together form words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Words**",
          "commonErrors": [
                    "Thinks letters make pictures."
          ]
},
        },
        {
          id: "epk-u1-concepts-of-print-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how you would read a page of a book from start to finish: where you start, which way you go, and how you know when to move to the next line.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reading direction",
                              "statement": "Start top left, left to right, return sweep down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Starts at top left.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Describes left-to-right and return sweep.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Start top left, read left to right, sweep back left and go down.**",
          "commonErrors": [
                    "Wrong start or direction.",
                    "Cannot describe return sweep."
          ]
},
        },
        {
          id: "epk-u1-concepts-of-print-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Concepts of print\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Knowing we read left to right, top to bottom."
                    },
                    {
                              "id": "b",
                              "text": "The basic ideas about how print works."
                    },
                    {
                              "id": "c",
                              "text": "One symbol."
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
                              "statement": "\"Concepts of print\" means The basic ideas about how print works."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Concepts of print\" means The basic ideas about how print works.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Concepts of print** = The basic ideas about how print works.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u1-concepts-of-print-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Directionality\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One symbol."
                    },
                    {
                              "id": "b",
                              "text": "Letters grouped."
                    },
                    {
                              "id": "c",
                              "text": "An image on the page."
                    },
                    {
                              "id": "d",
                              "text": "Knowing we read left to right, top to bottom."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Directionality\" means Knowing we read left to right, top to bottom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Directionality\" means Knowing we read left to right, top to bottom.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Directionality** = Knowing we read left to right, top to bottom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u1-concepts-of-print-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Letter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Letters grouped."
                    },
                    {
                              "id": "b",
                              "text": "One symbol."
                    },
                    {
                              "id": "c",
                              "text": "An image on the page."
                    },
                    {
                              "id": "d",
                              "text": "The basic ideas about how print works."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Letter\" means One symbol."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Letter\" means One symbol.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Letter** = One symbol.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
