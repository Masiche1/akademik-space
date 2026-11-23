import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "epk-u6-lesson-6-3",
  code: "6-3",
  title: "Draw to Tell Stories",
  goal: "I CAN draw pictures that tell a story.",
  standards: ["ELOF-PK.LL.WRITE.3"],
  vocabulary: [
    { term: "Draw", definition: "Make a picture with lines and shapes." },
    { term: "Story picture", definition: "A drawing that shows what happens." },
    { term: "Sequence", definition: "The order of events in a story." },
    { term: "Detail", definition: "Small parts that make a picture clear." },
    { term: "Label", definition: "Write a word next to a picture." },
  ],
  concepts: [
    {
      id: "epk-u6-draw-to-tell",
      title: "Drawing to tell stories",
      skill: "Draw pictures that show a sequence of events.",
      lesson: {
        sections: [
          {
            heading: "Pictures tell stories",
            body: "You can **tell a story with drawings**: draw what happens first, then next, then last. Three pictures = beginning, middle, end.",
          },
          {
            heading: "Add details",
            body: "Add **details** to make your story clear: faces, expressions, background. A label (a word) can name who or what is in the picture.",
          },
        ],
        keyFormulas: [
          { name: "Story drawing", statement: "Draw beginning, middle, end; add details and labels." },
        ],
        workedExample: {
          problem: "Draw a story: 'A bird builds a nest.'",
          solution: "Draw 3 panels: bird finds twigs (beginning), weaves them (middle), sits in nest (end).",
        },
      },
      questions: [
        {
          id: "epk-u6-draw-to-tell-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'story picture' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any drawing"
                    },
                    {
                              "id": "b",
                              "text": "a drawing that shows what happens in a story"
                    },
                    {
                              "id": "c",
                              "text": "a photo"
                    },
                    {
                              "id": "d",
                              "text": "a letter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Story pictures show events in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Story pictures show events in order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Drawing showing story events**",
          "commonErrors": [
                    "Thinks any drawing is a story picture."
          ]
},
        },
        {
          id: "epk-u6-draw-to-tell-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To tell a story with drawings, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "draw one random picture"
                    },
                    {
                              "id": "b",
                              "text": "draw beginning, middle and end"
                    },
                    {
                              "id": "c",
                              "text": "only draw the end"
                    },
                    {
                              "id": "d",
                              "text": "not draw at all"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Story drawings show beginning, middle, end in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Story drawings show beginning, middle, end in order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Beginning, middle, end**",
          "commonErrors": [
                    "Draws only one scene."
          ]
},
        },
        {
          id: "epk-u6-draw-to-tell-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Draw a simple story: something happens first, then next, then last. What story did you tell?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Story drawing",
                              "statement": "Draw sequence of events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Draws 3-part story.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun rises, bird flies, lands on branch.'**",
          "commonErrors": [
                    "Only 1 picture.",
                    "Cannot explain story."
          ]
},
        },
        {
          id: "epk-u6-draw-to-tell-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Details' in a drawing help...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make it messy"
                    },
                    {
                              "id": "b",
                              "text": "make the story clearer"
                    },
                    {
                              "id": "c",
                              "text": "hide the story"
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
                              "statement": "Details (faces, expressions, background) clarify the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Details (faces, expressions, background) clarify the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Make story clearer**",
          "commonErrors": [
                    "Thinks details are pointless."
          ]
},
        },
        {
          id: "epk-u6-draw-to-tell-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw a 3-panel story about your morning. Label each panel with one word.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Story drawing",
                              "statement": "3 panels + labels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Draws 3-panel sequence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Adds word labels to each.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'wake up', 'eat breakfast', 'go to school'**",
          "commonErrors": [
                    "Not 3 panels.",
                    "No labels."
          ]
},
        },
        {
          id: "epk-u6-draw-to-tell-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Draw\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A drawing that shows what happens."
                    },
                    {
                              "id": "b",
                              "text": "Make a picture with lines and shapes."
                    },
                    {
                              "id": "c",
                              "text": "The order of events in a story."
                    },
                    {
                              "id": "d",
                              "text": "Small parts that make a picture clear."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Draw\" means Make a picture with lines and shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Draw\" means Make a picture with lines and shapes.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Draw** = Make a picture with lines and shapes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u6-draw-to-tell-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Story picture\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The order of events in a story."
                    },
                    {
                              "id": "b",
                              "text": "Small parts that make a picture clear."
                    },
                    {
                              "id": "c",
                              "text": "Write a word next to a picture."
                    },
                    {
                              "id": "d",
                              "text": "A drawing that shows what happens."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Story picture\" means A drawing that shows what happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Story picture\" means A drawing that shows what happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Story picture** = A drawing that shows what happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u6-draw-to-tell-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sequence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small parts that make a picture clear."
                    },
                    {
                              "id": "b",
                              "text": "The order of events in a story."
                    },
                    {
                              "id": "c",
                              "text": "Write a word next to a picture."
                    },
                    {
                              "id": "d",
                              "text": "Make a picture with lines and shapes."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sequence\" means The order of events in a story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sequence\" means The order of events in a story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sequence** = The order of events in a story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
