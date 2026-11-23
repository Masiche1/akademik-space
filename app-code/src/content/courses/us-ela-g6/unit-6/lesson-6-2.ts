import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ela6-u6-lesson-6-2",
  code: "6-2",
  title: "Informative Writing",
  goal: "I CAN write informative/explanatory texts.",
  standards: ["W.6.2"],
  vocabulary: [
    { term: "Informative", definition: "Teaches facts." },
    { term: "Explanatory", definition: "Explains concepts." },
    { term: "Topic", definition: "Subject." },
    { term: "Facts", definition: "True info." },
    { term: "Details", definition: "Supporting info." },
    { term: "Organization", definition: "Structure." },
    { term: "Introduction", definition: "Opening." },
    { term: "Conclusion", definition: "Ending." },
  ],
  concepts: [
    {
      id: "ela6-u6-informative-writing",
      title: "Informative writing",
      skill: "Write informative/explanatory texts that teach and explain clearly.",
      lesson: {
        sections: [
          {
            heading: "Teaching",
            body: "**Informative writing** teaches readers about a topic using facts, examples, and explanations.",
          },
          {
            heading: "Organization",
            body: "Use clear **structure**: introduction (what you'll cover), body (facts/details), conclusion (summary).",
          },
        ],
        keyFormulas: [
          { name: "Informative", statement: "Facts + details + clear structure = effective explanation." },
        ],
        workedExample: {
          problem: "Write the introduction to an informative text about the water cycle.",
          solution: "**'The water cycle is a continuous process that moves water between Earth's surface and atmosphere. In this text, we'll explore evaporation, condensation, precipitation, and collection.'**",
        },
      },
      questions: [
        {
          id: "ela6-u6-informative-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Informative writing should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "tell a story"
                    },
                    {
                              "id": "b",
                              "text": "teach readers about a topic"
                    },
                    {
                              "id": "c",
                              "text": "persuade"
                    },
                    {
                              "id": "d",
                              "text": "entertain only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Teach about topic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Teach about topic.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "teach readers about a topic",
          "commonErrors": [
                    "Confuses with narrative."
          ]
},
        },
        {
          id: "ela6-u6-informative-writing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Informative texts should be organized with...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random facts"
                    },
                    {
                              "id": "b",
                              "text": "clear intro, body, conclusion"
                    },
                    {
                              "id": "c",
                              "text": "only examples"
                    },
                    {
                              "id": "d",
                              "text": "only opinions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Clear structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear structure.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "clear intro, body, conclusion",
          "commonErrors": [
                    "Too disorganized."
          ]
},
        },
        {
          id: "ela6-u6-informative-writing-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write an informative paragraph explaining how photosynthesis works, using facts and clear organization.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Informative",
                              "statement": "Facts + structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes informative.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Photosynthesis is how plants make food. Plants take in carbon dioxide and water, use sunlight energy, and produce glucose and oxygen. This process is essential for life on Earth.'**",
          "commonErrors": [
                    "No facts.",
                    "Poor organization."
          ]
},
        },
        {
          id: "ela6-u6-informative-writing-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Explanatory' writing means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "telling stories"
                    },
                    {
                              "id": "b",
                              "text": "making concepts clear"
                    },
                    {
                              "id": "c",
                              "text": "persuading"
                    },
                    {
                              "id": "d",
                              "text": "describing only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Making clear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Making clear.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "making concepts clear",
          "commonErrors": [
                    "Confuses with other types."
          ]
},
        },
        {
          id: "ela6-u6-informative-writing-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write an informative text that explains a process, using clear structure and supporting facts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Informative",
                              "statement": "Process + structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes informative.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Uses structure.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'How to make a volcano model: 1. Mix flour, salt, water; 2. Build cone shape; 3. Add vinegar and baking soda; 4. Watch it erupt.'**",
          "commonErrors": [
                    "No explanation.",
                    "Poor structure."
          ]
},
        },
        {
          id: "ela6-u6-informative-writing-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Explains concepts."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "Subject."
                    },
                    {
                              "id": "d",
                              "text": "True info."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informative\" means Teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informative\" means Teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informative** = Teaches facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-informative-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Explanatory\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Subject."
                    },
                    {
                              "id": "b",
                              "text": "True info."
                    },
                    {
                              "id": "c",
                              "text": "Supporting info."
                    },
                    {
                              "id": "d",
                              "text": "Explains concepts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Explanatory\" means Explains concepts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Explanatory\" means Explains concepts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Explanatory** = Explains concepts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-informative-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "True info."
                    },
                    {
                              "id": "b",
                              "text": "Subject."
                    },
                    {
                              "id": "c",
                              "text": "Supporting info."
                    },
                    {
                              "id": "d",
                              "text": "Structure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Topic\" means Subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Topic\" means Subject.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Topic** = Subject.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
