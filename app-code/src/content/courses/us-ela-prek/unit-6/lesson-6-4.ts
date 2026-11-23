import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "epk-u6-lesson-6-4",
  code: "6-4",
  title: "Writing Review",
  goal: "I CAN write my name, form letters and draw to tell stories.",
  standards: ["ELOF-PK.LL.WRITE.4"],
  vocabulary: [
    { term: "Write", definition: "Make letters and words." },
    { term: "Name", definition: "Your first name." },
    { term: "Letter form", definition: "The shape of a letter." },
    { term: "Story picture", definition: "Drawing that tells events." },
    { term: "Label", definition: "A word next to a picture." },
  ],
  concepts: [
    {
      id: "epk-u6-writing-review",
      title: "Writing review",
      skill: "Combine name writing, letter formation and story drawing.",
      lesson: {
        sections: [
          {
            heading: "Three writing skills",
            body: "Writing in Pre-K has three parts: **writing your name**, **forming letters correctly**, and **drawing pictures that tell stories**. All three build early literacy.",
          },
          {
            heading: "Put it together",
            body: "Write your name at the top of a page, draw a story below it, and label your pictures. This is real writing!",
          },
        ],
        keyFormulas: [
          { name: "Pre-K writing", statement: "Name + letter formation + story pictures = early writing." },
        ],
        workedExample: {
          problem: "Create a page: write your name, then draw a 2-panel story.",
          solution: "Name at top, then 2 drawings showing beginning and end of a story.",
        },
      },
      questions: [
        {
          id: "epk-u6-writing-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pre-K writing includes which three skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reading, spelling, grammar"
                    },
                    {
                              "id": "b",
                              "text": "Name writing, letter formation, story drawing"
                    },
                    {
                              "id": "c",
                              "text": "Cursive, printing, calligraphy"
                    },
                    {
                              "id": "d",
                              "text": "Only drawing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Pre-K writing = name + letters + story pictures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pre-K writing = name + letters + story pictures.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Name, letters, story drawing**",
          "commonErrors": [
                    "Lists advanced skills."
          ]
},
        },
        {
          id: "epk-u6-writing-review-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you write at the top of your story page?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A number"
                    },
                    {
                              "id": "b",
                              "text": "Your name"
                    },
                    {
                              "id": "c",
                              "text": "A picture"
                    },
                    {
                              "id": "d",
                              "text": "Nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Write your name at the top."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Write your name at the top.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Your name**",
          "commonErrors": [
                    "Writes wrong thing."
          ]
},
        },
        {
          id: "epk-u6-writing-review-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write your name and draw one picture of something you did today. What did you draw?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Pre-K writing",
                              "statement": "Name + story picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes name correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Draws relevant picture and explains.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sam' + picture of playing outside**",
          "commonErrors": [
                    "No name.",
                    "Cannot explain drawing."
          ]
},
        },
        {
          id: "epk-u6-writing-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'label' in writing is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a sticker"
                    },
                    {
                              "id": "b",
                              "text": "a word written next to a picture"
                    },
                    {
                              "id": "c",
                              "text": "a border"
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
                              "statement": "A label is a word next to a picture naming it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A label is a word next to a picture naming it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Word next to picture**",
          "commonErrors": [
                    "Confuses label with decoration."
          ]
},
        },
        {
          id: "epk-u6-writing-review-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Make a writing page: your name at top, a 2-panel story drawing, and one label. Describe your story.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Pre-K writing",
                              "statement": "Name + story + label."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes name, story drawing, label.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Describes the story correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sam; drew waking up then eating breakfast; label: breakfast'**",
          "commonErrors": [
                    "Missing elements.",
                    "Cannot describe story."
          ]
},
        },
        {
          id: "epk-u6-writing-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Write\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Your first name."
                    },
                    {
                              "id": "b",
                              "text": "Make letters and words."
                    },
                    {
                              "id": "c",
                              "text": "The shape of a letter."
                    },
                    {
                              "id": "d",
                              "text": "Drawing that tells events."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "epk-u6-writing-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Name\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The shape of a letter."
                    },
                    {
                              "id": "b",
                              "text": "Drawing that tells events."
                    },
                    {
                              "id": "c",
                              "text": "A word next to a picture."
                    },
                    {
                              "id": "d",
                              "text": "Your first name."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Name\" means Your first name."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Name\" means Your first name.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Name** = Your first name.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u6-writing-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Letter form\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Drawing that tells events."
                    },
                    {
                              "id": "b",
                              "text": "The shape of a letter."
                    },
                    {
                              "id": "c",
                              "text": "A word next to a picture."
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
                              "statement": "\"Letter form\" means The shape of a letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Letter form\" means The shape of a letter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Letter form** = The shape of a letter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
