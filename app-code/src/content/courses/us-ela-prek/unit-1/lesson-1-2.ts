import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "epk-u1-lesson-1-2",
  code: "1-2",
  title: "Follow Words Left to Right",
  goal: "I CAN track words on a page from left to right and top to bottom.",
  standards: ["ELOF-PK.LL.PRINT.2"],
  vocabulary: [
    { term: "Left to right", definition: "The direction we read English words." },
    { term: "Top to bottom", definition: "We read from the top of the page down." },
    { term: "Track", definition: "Follow along with your eyes or finger." },
    { term: "Return sweep", definition: "Going back to the left to start the next line." },
    { term: "One-to-one", definition: "Match one spoken word to one printed word." },
  ],
  concepts: [
    {
      id: "epk-u1-follow-words",
      title: "Tracking print",
      skill: "Follow text left to right and top to bottom.",
      lesson: {
        sections: [
          {
            heading: "Left to right",
            body: "English words are read from **left to right**. Start at the left edge and move your eyes (or finger) to the right as you read each word.",
          },
          {
            heading: "Top to bottom",
            body: "We read pages from the **top to the bottom**. When we finish a line, we sweep back to the left and start the next line down.",
          },
        ],
        keyFormulas: [
          { name: "Reading direction", statement: "Left to right, top to bottom." },
        ],
        workedExample: {
          problem: "Point to the words in 'The cat sat' from left to right.",
          solution: "Point to 'The', then 'cat', then 'sat' — **left to right**.",
        },
      },
      questions: [
        {
          id: "epk-u1-follow-words-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When we read English, we start at the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "right"
                    },
                    {
                              "id": "b",
                              "text": "left"
                    },
                    {
                              "id": "c",
                              "text": "top and go down first"
                    },
                    {
                              "id": "d",
                              "text": "middle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "English reads left to right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "English reads left to right.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Left**",
          "commonErrors": [
                    "Thinks we read right to left."
          ]
},
        },
        {
          id: "epk-u1-follow-words-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "After finishing a line of text, what do we do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stop reading"
                    },
                    {
                              "id": "b",
                              "text": "Sweep back to the left and go down"
                    },
                    {
                              "id": "c",
                              "text": "Start at the right"
                    },
                    {
                              "id": "d",
                              "text": "Read backward"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Return sweep: back to left, down to next line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Return sweep: back to left, down to next line.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Back to left, down**",
          "commonErrors": [
                    "Thinks we keep going right forever."
          ]
},
        },
        {
          id: "epk-u1-follow-words-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point to a line of words in a book. Show how you track from left to right.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Track print",
                              "statement": "Follow words left to right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Points to words in correct order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Tracks left to right**",
          "commonErrors": [
                    "Points randomly.",
                    "Reads right to left."
          ]
},
        },
        {
          id: "epk-u1-follow-words-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Top to bottom' means we read...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "from the bottom up"
                    },
                    {
                              "id": "b",
                              "text": "from the top of the page down"
                    },
                    {
                              "id": "c",
                              "text": "only the top line"
                    },
                    {
                              "id": "d",
                              "text": "sideways"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Pages are read top to bottom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pages are read top to bottom.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Top down**",
          "commonErrors": [
                    "Reverses the direction."
          ]
},
        },
        {
          id: "epk-u1-follow-words-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read a short sentence aloud while pointing to each word. Did you match one spoken word to one printed word?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "One-to-one matching",
                              "statement": "Match each spoken word to one printed word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Points to each word as spoken.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Matches words one-to-one.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Yes — one spoken word per printed word**",
          "commonErrors": [
                    "Skips words.",
                    "Points to whole lines."
          ]
},
        },
        {
          id: "epk-u1-follow-words-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Left to right\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "We read from the top of the page down."
                    },
                    {
                              "id": "b",
                              "text": "The direction we read English words."
                    },
                    {
                              "id": "c",
                              "text": "Follow along with your eyes or finger."
                    },
                    {
                              "id": "d",
                              "text": "Going back to the left to start the next line."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Left to right\" means The direction we read English words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Left to right\" means The direction we read English words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Left to right** = The direction we read English words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u1-follow-words-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Top to bottom\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Follow along with your eyes or finger."
                    },
                    {
                              "id": "b",
                              "text": "Going back to the left to start the next line."
                    },
                    {
                              "id": "c",
                              "text": "Match one spoken word to one printed word."
                    },
                    {
                              "id": "d",
                              "text": "We read from the top of the page down."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Top to bottom\" means We read from the top of the page down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Top to bottom\" means We read from the top of the page down.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Top to bottom** = We read from the top of the page down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u1-follow-words-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Track\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Going back to the left to start the next line."
                    },
                    {
                              "id": "b",
                              "text": "Follow along with your eyes or finger."
                    },
                    {
                              "id": "c",
                              "text": "Match one spoken word to one printed word."
                    },
                    {
                              "id": "d",
                              "text": "The direction we read English words."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Track\" means Follow along with your eyes or finger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Track\" means Follow along with your eyes or finger.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Track** = Follow along with your eyes or finger.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
