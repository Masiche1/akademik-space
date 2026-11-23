import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ela4-u4-lesson-4-3",
  code: "4-3",
  title: "Integrating Knowledge and Ideas",
  goal: "I CAN combine information from text and visuals.",
  standards: ["RI.4.7"],
  vocabulary: [
    { term: "Integrate", definition: "Combine sources." },
    { term: "Text", definition: "Written words." },
    { term: "Visual", definition: "Picture/diagram." },
    { term: "Connect", definition: "Link information." },
    { term: "Synthesize", definition: "Combine into whole." },
    { term: "Evidence", definition: "Supporting detail." },
    { term: "Interpret", definition: "Figure out." },
    { term: "Understand", definition: "Make sense of." },
  ],
  concepts: [
    {
      id: "ela4-u4-integrate-knowledge",
      title: "Integrating knowledge and ideas",
      skill: "Combine information from text and visuals to build understanding.",
      lesson: {
        sections: [
          {
            heading: "Text + visuals",
            body: "**Integrating** means combining what you read (text) with what you see (diagrams, charts, pictures) to get the **full picture**.",
          },
          {
            heading: "Example",
            body: "A paragraph about the water cycle + a diagram showing evaporation/condensation/precipitation = complete understanding.",
          },
        ],
        keyFormulas: [
          { name: "Integrate", statement: "Text + visual = complete understanding." },
        ],
        workedExample: {
          problem: "Text describes photosynthesis; diagram labels chlorophyll, sunlight, CO2. What do you learn?",
          solution: "You learn **how** plants use sunlight, water, and CO2 to make food — the diagram shows what text describes.",
        },
      },
      questions: [
        {
          id: "ela4-u4-integrate-knowledge-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Integrating' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "skipping details"
                    },
                    {
                              "id": "b",
                              "text": "combining text and visuals"
                    },
                    {
                              "id": "c",
                              "text": "counting words"
                    },
                    {
                              "id": "d",
                              "text": "memorizing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Integrate = combine sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Integrate = combine sources.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**combining text and visuals**",
          "commonErrors": [
                    "Thinks it's memorizing."
          ]
},
        },
        {
          id: "ela4-u4-integrate-knowledge-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Text and visuals work together because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're separate"
                    },
                    {
                              "id": "b",
                              "text": "they show different parts of the same idea"
                    },
                    {
                              "id": "c",
                              "text": "visuals are optional"
                    },
                    {
                              "id": "d",
                              "text": "text is enough"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Both show parts of idea."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both show parts of idea.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**they show different parts of the same idea**",
          "commonErrors": [
                    "Thinks one is enough."
          ]
},
        },
        {
          id: "ela4-u4-integrate-knowledge-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a text with a diagram. Explain how the diagram adds information the text doesn't say.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integrate",
                              "statement": "What diagram adds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains what diagram adds.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'Text says 'water evaporates'; diagram shows arrows and labels the process.'**",
          "commonErrors": [
                    "Repeats text.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "ela4-u4-integrate-knowledge-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Synthesize' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "repeat"
                    },
                    {
                              "id": "b",
                              "text": "combine parts into a whole"
                    },
                    {
                              "id": "c",
                              "text": "summarize only"
                    },
                    {
                              "id": "d",
                              "text": "list details"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Synthesize = combine into whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Synthesize = combine into whole.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**combine parts into a whole**",
          "commonErrors": [
                    "Confuses with summarize."
          ]
},
        },
        {
          id: "ela4-u4-integrate-knowledge-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find a text with both words and a diagram. How does each help you understand differently?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integrate",
                              "statement": "Two ways text/visual help."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains text role.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains visual role.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Text: describes process steps; Diagram: shows spatial relationships and labels.'**",
          "commonErrors": [
                    "Only one role.",
                    "No difference."
          ]
},
        },
        {
          id: "ela4-u4-integrate-knowledge-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integrate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Written words."
                    },
                    {
                              "id": "b",
                              "text": "Combine sources."
                    },
                    {
                              "id": "c",
                              "text": "Picture/diagram."
                    },
                    {
                              "id": "d",
                              "text": "Link information."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Integrate\" means Combine sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integrate\" means Combine sources.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Integrate** = Combine sources.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-integrate-knowledge-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Picture/diagram."
                    },
                    {
                              "id": "b",
                              "text": "Link information."
                    },
                    {
                              "id": "c",
                              "text": "Combine into whole."
                    },
                    {
                              "id": "d",
                              "text": "Written words."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text\" means Written words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text\" means Written words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text** = Written words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-integrate-knowledge-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Visual\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Link information."
                    },
                    {
                              "id": "b",
                              "text": "Picture/diagram."
                    },
                    {
                              "id": "c",
                              "text": "Combine into whole."
                    },
                    {
                              "id": "d",
                              "text": "Supporting detail."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Visual\" means Picture/diagram."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Visual\" means Picture/diagram.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Visual** = Picture/diagram.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
