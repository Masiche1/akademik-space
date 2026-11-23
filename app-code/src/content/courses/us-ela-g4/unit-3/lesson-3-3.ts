import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ela4-u3-lesson-3-3",
  code: "3-3",
  title: "Summarizing Stories",
  goal: "I CAN summarize a story's key events in order.",
  standards: ["RL.4.2"],
  vocabulary: [
    { term: "Summarize", definition: "Short version." },
    { term: "Key events", definition: "Important things." },
    { term: "Sequence", definition: "Order of events." },
    { term: "Main idea", definition: "Big idea." },
    { term: "Details", definition: "Small facts." },
    { term: "Beginning", definition: "How it starts." },
    { term: "End", definition: "How it finishes." },
    { term: "Retell", definition: "Tell again." },
  ],
  concepts: [
    {
      id: "ela4-u3-summarize-stories",
      title: "Summarizing stories",
      skill: "Summarize key events in order without unnecessary details.",
      lesson: {
        sections: [
          {
            heading: "Short version",
            body: "A **summary** tells the **key events** in order — beginning, middle, end — without all the small details. It's like a **movie trailer** for the story.",
          },
          {
            heading: "What to include",
            body: "Include **who, what, where, when** for each key event. Skip minor details.",
          },
        ],
        keyFormulas: [
          { name: "Summary", statement: "Beginning + middle + end, key events only, in order." },
        ],
        workedExample: {
          problem: "Story: 'Mia lost her dog, searched everywhere, finally found it hiding under the porch.' Summary?",
          solution: "'Mia lost her dog and searched everywhere before finding it under the porch.'",
        },
      },
      questions: [
        {
          id: "ela4-u3-summarize-stories-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'summary' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "every detail"
                    },
                    {
                              "id": "b",
                              "text": "the key events in order, shortened"
                    },
                    {
                              "id": "c",
                              "text": "the title"
                    },
                    {
                              "id": "d",
                              "text": "a review"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Summary = key events shortened."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Summary = key events shortened.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the key events in order, shortened**",
          "commonErrors": [
                    "Thinks it's all details."
          ]
},
        },
        {
          id: "ela4-u3-summarize-stories-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When summarizing, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "include every detail"
                    },
                    {
                              "id": "b",
                              "text": "include only key events"
                    },
                    {
                              "id": "c",
                              "text": "skip the ending"
                    },
                    {
                              "id": "d",
                              "text": "add opinions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Only key events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only key events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**include only key events**",
          "commonErrors": [
                    "Includes everything."
          ]
},
        },
        {
          id: "ela4-u3-summarize-stories-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Write a 2-3 sentence summary that includes the key events in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Summarize",
                              "statement": "2-3 sentences, key events, in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Summarizes in order.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'Mia wanted a pet. She found a puppy and begged for it. Her parents said yes.'**",
          "commonErrors": [
                    "Too many details.",
                    "Out of order."
          ]
},
        },
        {
          id: "ela4-u3-summarize-stories-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A summary should NOT include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "key events"
                    },
                    {
                              "id": "b",
                              "text": "minor details"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
                    },
                    {
                              "id": "d",
                              "text": "the order"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Minor details excluded."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minor details excluded.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**minor details**",
          "commonErrors": [
                    "Thinks everything is included."
          ]
},
        },
        {
          id: "ela4-u3-summarize-stories-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Summarize a story in exactly 3 sentences. Check that each sentence covers beginning, middle, and end.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Summarize",
                              "statement": "3 sentences covering all parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Covers all three parts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Only key events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'B: Mia wanted a dog. M: She searched everywhere. E: She found it under the porch.'**",
          "commonErrors": [
                    "Wrong length.",
                    "Missing parts."
          ]
},
        },
        {
          id: "ela4-u3-summarize-stories-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summarize\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Important things."
                    },
                    {
                              "id": "b",
                              "text": "Short version."
                    },
                    {
                              "id": "c",
                              "text": "Order of events."
                    },
                    {
                              "id": "d",
                              "text": "Big idea."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Summarize\" means Short version."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Summarize\" means Short version.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Summarize** = Short version.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-summarize-stories-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key events\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Order of events."
                    },
                    {
                              "id": "b",
                              "text": "Big idea."
                    },
                    {
                              "id": "c",
                              "text": "Small facts."
                    },
                    {
                              "id": "d",
                              "text": "Important things."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Key events\" means Important things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Key events\" means Important things.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Key events** = Important things.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-summarize-stories-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sequence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Big idea."
                    },
                    {
                              "id": "b",
                              "text": "Order of events."
                    },
                    {
                              "id": "c",
                              "text": "Small facts."
                    },
                    {
                              "id": "d",
                              "text": "How it starts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sequence\" means Order of events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sequence\" means Order of events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sequence** = Order of events.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
