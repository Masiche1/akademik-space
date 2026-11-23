import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "epk-u1-lesson-1-3",
  code: "1-3",
  title: "Handle Books",
  goal: "I CAN hold a book right-side up and turn pages carefully.",
  standards: ["ELOF-PK.LL.PRINT.3"],
  vocabulary: [
    { term: "Front cover", definition: "The first page of a book with the title." },
    { term: "Back cover", definition: "The last page of a book." },
    { term: "Spine", definition: "The middle where pages are bound." },
    { term: "Page", definition: "One side of paper in a book." },
    { term: "Turn", definition: "Move a page to the next side." },
  ],
  concepts: [
    {
      id: "epk-u1-book-handling",
      title: "Handling books",
      skill: "Hold and turn book pages correctly.",
      lesson: {
        sections: [
          {
            heading: "Hold it right",
            body: "Hold the book **right-side up** — the front cover faces you, the spine is on the left (for English books). Don't hold it upside down!",
          },
          {
            heading: "Turn pages gently",
            body: "Turn one page at a time from the **right side** to the **left**. Be gentle so pages don't tear.",
          },
        ],
        keyFormulas: [
          { name: "Book handling", statement: "Right-side up; turn pages right to left, one at a time." },
        ],
        workedExample: {
          problem: "How do you open a book to read?",
          solution: "Hold it right-side up, open the front cover, turn pages gently **right to left**.",
        },
      },
      questions: [
        {
          id: "epk-u1-book-handling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which way should a book face when you read it?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Upside down"
                    },
                    {
                              "id": "b",
                              "text": "Right-side up"
                    },
                    {
                              "id": "c",
                              "text": "Sideways"
                    },
                    {
                              "id": "d",
                              "text": "Backward"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Books are held right-side up, front cover facing you."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Books are held right-side up, front cover facing you.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Right-side up**",
          "commonErrors": [
                    "Holds book upside down."
          ]
},
        },
        {
          id: "epk-u1-book-handling-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which way do you turn pages in an English book?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Left to right"
                    },
                    {
                              "id": "b",
                              "text": "Right to left"
                    },
                    {
                              "id": "c",
                              "text": "Both ways"
                    },
                    {
                              "id": "d",
                              "text": "Don't turn"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Pages turn right to left (like reading direction)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pages turn right to left (like reading direction).",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Right to left**",
          "commonErrors": [
                    "Turns pages the wrong way."
          ]
},
        },
        {
          id: "epk-u1-book-handling-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show how you would pick up a book and open it to the first page.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Book handling",
                              "statement": "Hold right-side up, open gently."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Demonstrates correct handling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Right-side up, open front cover, turn right to left**",
          "commonErrors": [
                    "Holds upside down.",
                    "Rips pages."
          ]
},
        },
        {
          id: "epk-u1-book-handling-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'spine' of a book is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the front cover"
                    },
                    {
                              "id": "b",
                              "text": "the middle where pages are bound"
                    },
                    {
                              "id": "c",
                              "text": "a page"
                    },
                    {
                              "id": "d",
                              "text": "the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "The spine is the bound middle edge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The spine is the bound middle edge.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**The bound middle**",
          "commonErrors": [
                    "Confuses spine with cover."
          ]
},
        },
        {
          id: "epk-u1-book-handling-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the steps to open a book and start reading the first page.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Book handling",
                              "statement": "Right-side up, open gently, turn right to left."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes holding book right-side up.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Describes turning pages correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Hold right-side up, open front cover, turn pages right to left.**",
          "commonErrors": [
                    "Missing steps.",
                    "Wrong direction."
          ]
},
        },
        {
          id: "epk-u1-book-handling-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Front cover\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The last page of a book."
                    },
                    {
                              "id": "b",
                              "text": "The first page of a book with the title."
                    },
                    {
                              "id": "c",
                              "text": "The middle where pages are bound."
                    },
                    {
                              "id": "d",
                              "text": "One side of paper in a book."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Front cover\" means The first page of a book with the title."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Front cover\" means The first page of a book with the title.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Front cover** = The first page of a book with the title.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u1-book-handling-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Back cover\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The middle where pages are bound."
                    },
                    {
                              "id": "b",
                              "text": "One side of paper in a book."
                    },
                    {
                              "id": "c",
                              "text": "Move a page to the next side."
                    },
                    {
                              "id": "d",
                              "text": "The last page of a book."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Back cover\" means The last page of a book."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Back cover\" means The last page of a book.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Back cover** = The last page of a book.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u1-book-handling-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Spine\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One side of paper in a book."
                    },
                    {
                              "id": "b",
                              "text": "The middle where pages are bound."
                    },
                    {
                              "id": "c",
                              "text": "Move a page to the next side."
                    },
                    {
                              "id": "d",
                              "text": "The first page of a book with the title."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Spine\" means The middle where pages are bound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Spine\" means The middle where pages are bound.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Spine** = The middle where pages are bound.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
