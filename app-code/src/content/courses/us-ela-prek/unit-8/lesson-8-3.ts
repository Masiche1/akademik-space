import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "epk-u8-lesson-8-3",
  code: "8-3",
  title: "Review: Reading and Writing",
  goal: "I CAN read with strategies and write my name and stories.",
  standards: ["ELOF-PK.LL.REVIEW.3"],
  vocabulary: [
    { term: "Read", definition: "Understand print." },
    { term: "Write", definition: "Make letters and words." },
    { term: "Sight word", definition: "Word recognized instantly." },
    { term: "Picture clue", definition: "Picture that helps reading." },
    { term: "Story picture", definition: "Drawing that tells events." },
  ],
  concepts: [
    {
      id: "epk-u8-review-reading-writing",
      title: "Reading and writing review",
      skill: "Combine emergent reading and writing skills.",
      lesson: {
        sections: [
          {
            heading: "Read + write together",
            body: "Reading uses sight words and picture clues to understand. Writing uses letter formation and story pictures to communicate. Both build literacy.",
          },
          {
            heading: "Read then write",
            body: "Read a story, then draw or write about it. Reading feeds writing; writing feeds reading.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Emergent reading (sight words + picture clues) + writing (name + letters + story pictures) = literacy." },
        ],
        workedExample: {
          problem: "Read 'The dog runs.' then draw what it means.",
          solution: "Read using sight words 'the' + picture clue of dog; draw a dog running.",
        },
      },
      questions: [
        {
          id: "epk-u8-review-reading-writing-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Emergent reading uses which strategies?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only guessing"
                    },
                    {
                              "id": "b",
                              "text": "Sight words + picture clues"
                    },
                    {
                              "id": "c",
                              "text": "Only memorizing"
                    },
                    {
                              "id": "d",
                              "text": "Skipping words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Sight words + picture clues."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sight words + picture clues.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sight words + picture clues**",
          "commonErrors": [
                    "Uses one strategy only."
          ]
},
        },
        {
          id: "epk-u8-review-reading-writing-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pre-K writing includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only cursive"
                    },
                    {
                              "id": "b",
                              "text": "name writing + letter formation + story pictures"
                    },
                    {
                              "id": "c",
                              "text": "only spelling"
                    },
                    {
                              "id": "d",
                              "text": "only reading"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Name + letters + story pictures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Name + letters + story pictures.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Name, letters, story pictures**",
          "commonErrors": [
                    "Lists wrong skills."
          ]
},
        },
        {
          id: "epk-u8-review-reading-writing-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a simple sentence. Then draw a picture of what it means. What did you read and draw?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Read + write",
                              "statement": "Read with strategies, draw meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reads correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Draws matching picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'The cat sleeps.' -> draw sleeping cat**",
          "commonErrors": [
                    "Cannot read.",
                    "Drawing doesn't match."
          ]
},
        },
        {
          id: "epk-u8-review-reading-writing-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'sight word' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a long word"
                    },
                    {
                              "id": "b",
                              "text": "a word recognized instantly"
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
                              "statement": "Sight word = recognized instantly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sight word = recognized instantly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Recognized instantly**",
          "commonErrors": [
                    "Thinks sight words are long."
          ]
},
        },
        {
          id: "epk-u8-review-reading-writing-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write your name, then read a simple sentence and draw what it means.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Read + write",
                              "statement": "Name writing + reading + drawing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes name correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reads and draws matching picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sam' + reads 'The sun is hot' + draws sun**",
          "commonErrors": [
                    "Cannot write name.",
                    "Drawing doesn't match reading."
          ]
},
        },
        {
          id: "epk-u8-review-reading-writing-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Read\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make letters and words."
                    },
                    {
                              "id": "b",
                              "text": "Understand print."
                    },
                    {
                              "id": "c",
                              "text": "Word recognized instantly."
                    },
                    {
                              "id": "d",
                              "text": "Picture that helps reading."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Read\" means Understand print."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Read\" means Understand print.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Read** = Understand print.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u8-review-reading-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Write\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Word recognized instantly."
                    },
                    {
                              "id": "b",
                              "text": "Picture that helps reading."
                    },
                    {
                              "id": "c",
                              "text": "Drawing that tells events."
                    },
                    {
                              "id": "d",
                              "text": "Make letters and words."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Write\" means Make letters and words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Write\" means Make letters and words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Write** = Make letters and words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u8-review-reading-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sight word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Picture that helps reading."
                    },
                    {
                              "id": "b",
                              "text": "Word recognized instantly."
                    },
                    {
                              "id": "c",
                              "text": "Drawing that tells events."
                    },
                    {
                              "id": "d",
                              "text": "Understand print."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sight word\" means Word recognized instantly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sight word\" means Word recognized instantly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sight word** = Word recognized instantly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
