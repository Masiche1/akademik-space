import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "epk-u4-lesson-4-3",
  code: "4-3",
  title: "Listen to Stories",
  goal: "I CAN listen to a story and remember what happened.",
  standards: ["ELOF-PK.LL.LISTEN.1"],
  vocabulary: [
    { term: "Listen", definition: "Pay attention to what you hear." },
    { term: "Story", definition: "A tale with a beginning, middle and end." },
    { term: "Character", definition: "The person or animal in the story." },
    { term: "Remember", definition: "Keep in your mind what happened." },
    { term: "Retell", definition: "Tell the story again in your own words." },
  ],
  concepts: [
    {
      id: "epk-u4-listen-stories",
      title: "Listening to stories",
      skill: "Listen carefully and remember story events.",
      lesson: {
        sections: [
          {
            heading: "Listen carefully",
            body: "When someone reads a story, **listen** with your whole body — eyes on the book, ears open, mouth quiet. Try to remember what happens.",
          },
          {
            heading: "Remember the parts",
            body: "Stories have a **beginning** (how it starts), **middle** (what happens), and **end** (how it finishes). Remembering these helps you retell the story.",
          },
        ],
        keyFormulas: [
          { name: "Story", statement: "Beginning, middle, end — listen and remember each part." },
        ],
        workedExample: {
          problem: "A story: 'A bunny hops to the garden, finds a carrot, and eats it happily.' What is the beginning?",
          solution: "The **beginning** is 'a bunny hops to the garden'.",
        },
      },
      questions: [
        {
          id: "epk-u4-listen-stories-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a story?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Start, stop, finish"
                    },
                    {
                              "id": "b",
                              "text": "Beginning, middle, end"
                    },
                    {
                              "id": "c",
                              "text": "Left, right, center"
                    },
                    {
                              "id": "d",
                              "text": "Up, down, sideways"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Stories have beginning, middle and end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stories have beginning, middle and end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Beginning, middle, end**",
          "commonErrors": [
                    "Cannot name story parts."
          ]
},
        },
        {
          id: "epk-u4-listen-stories-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who is the 'character' in a story?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The reader"
                    },
                    {
                              "id": "b",
                              "text": "The person or animal in the story"
                    },
                    {
                              "id": "c",
                              "text": "The book"
                    },
                    {
                              "id": "d",
                              "text": "The page"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "The character is who the story is about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The character is who the story is about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Person or animal in the story**",
          "commonErrors": [
                    "Confuses character with reader."
          ]
},
        },
        {
          id: "epk-u4-listen-stories-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Listen to a short story. What was the beginning, middle and end?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Story comprehension",
                              "statement": "Identify beginning, middle, end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retells the three parts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Beginning: bunny wakes. Middle: finds carrot. End: eats it.'**",
          "commonErrors": [
                    "Cannot remember.",
                    "Mixes up parts."
          ]
},
        },
        {
          id: "epk-u4-listen-stories-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Retell' a story means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read it again"
                    },
                    {
                              "id": "b",
                              "text": "tell it again in your own words"
                    },
                    {
                              "id": "c",
                              "text": "write it down"
                    },
                    {
                              "id": "d",
                              "text": "act it out only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Retell = tell again in your own words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retell = tell again in your own words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Tell it again**",
          "commonErrors": [
                    "Confuses retell with reread."
          ]
},
        },
        {
          id: "epk-u4-listen-stories-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "After hearing a story, retell what happened from beginning to end.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Retell",
                              "statement": "Tell the story in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retells beginning correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Retells middle and end in order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'First X, then Y, finally Z.'**",
          "commonErrors": [
                    "Out of order.",
                    "Cannot retell."
          ]
},
        },
        {
          id: "epk-u4-listen-stories-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Listen\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A tale with a beginning, middle and end."
                    },
                    {
                              "id": "b",
                              "text": "Pay attention to what you hear."
                    },
                    {
                              "id": "c",
                              "text": "The person or animal in the story."
                    },
                    {
                              "id": "d",
                              "text": "Keep in your mind what happened."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Listen\" means Pay attention to what you hear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Listen\" means Pay attention to what you hear.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Listen** = Pay attention to what you hear.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u4-listen-stories-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Story\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The person or animal in the story."
                    },
                    {
                              "id": "b",
                              "text": "Keep in your mind what happened."
                    },
                    {
                              "id": "c",
                              "text": "Tell the story again in your own words."
                    },
                    {
                              "id": "d",
                              "text": "A tale with a beginning, middle and end."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Story\" means A tale with a beginning, middle and end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Story\" means A tale with a beginning, middle and end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Story** = A tale with a beginning, middle and end.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u4-listen-stories-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Keep in your mind what happened."
                    },
                    {
                              "id": "b",
                              "text": "The person or animal in the story."
                    },
                    {
                              "id": "c",
                              "text": "Tell the story again in your own words."
                    },
                    {
                              "id": "d",
                              "text": "Pay attention to what you hear."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means The person or animal in the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means The person or animal in the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = The person or animal in the story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
