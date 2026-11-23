import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ela5-u6-lesson-6-3",
  code: "6-3",
  title: "Informative/Explanatory Writing",
  goal: "I CAN write an informative/explanatory piece with facts.",
  standards: ["W.5.2"],
  vocabulary: [
    { term: "Informative", definition: "Teaches facts." },
    { term: "Explanatory", definition: "Explains how/why." },
    { term: "Fact", definition: "True information." },
    { term: "Topic", definition: "Subject." },
    { term: "Detail", definition: "Supporting fact." },
    { term: "Organize", definition: "Arrange logically." },
    { term: "Clear", definition: "Easy to understand." },
    { term: "Introduce", definition: "Start with topic." },
  ],
  concepts: [
    {
      id: "ela5-u6-informative-explanatory",
      title: "Informative/explanatory writing",
      skill: "Write an informative piece that teaches facts clearly.",
      lesson: {
        sections: [
          {
            heading: "Teaching facts",
            body: "**Informative** writing **teaches** the reader about a topic; **explanatory** writing **explains** how or why something works.",
          },
          {
            heading: "Structure",
            body: "**Introduce** the topic -> give **facts and details** in logical order -> **conclude**. Use **clear organization** and **specific information**.",
          },
        ],
        keyFormulas: [
          { name: "Informative", statement: "Topic + facts + organization + conclusion = informative piece." },
        ],
        workedExample: {
          problem: "Write an informative piece about how volcanoes form.",
          solution: "**Intro: what volcanoes are; Facts: magma, pressure, eruption; Conclusion: summary of process.**",
        },
      },
      questions: [
        {
          id: "ela5-u6-informative-explanatory-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Informative' writing is meant to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "entertain"
                    },
                    {
                              "id": "b",
                              "text": "teach facts"
                    },
                    {
                              "id": "c",
                              "text": "persuade"
                    },
                    {
                              "id": "d",
                              "text": "describe feelings"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Teach facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Teach facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "teach facts",
          "commonErrors": [
                    "Confuses with other purposes."
          ]
},
        },
        {
          id: "ela5-u6-informative-explanatory-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Explanatory' writing...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "tells stories"
                    },
                    {
                              "id": "b",
                              "text": "explains how or why something works"
                    },
                    {
                              "id": "c",
                              "text": "gives opinions"
                    },
                    {
                              "id": "d",
                              "text": "describes places"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Explains how/why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains how/why.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "explains how or why something works",
          "commonErrors": [
                    "Confuses with informative."
          ]
},
        },
        {
          id: "ela5-u6-informative-explanatory-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write an informative paragraph about a topic you know well. Include a clear topic sentence, two facts, and a conclusion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Informative",
                              "statement": "Complete piece."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Has topic sentence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives facts + conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Topic sentence; Fact 1; Fact 2; Conclusion.'**",
          "commonErrors": [
                    "Missing parts.",
                    "Not informative."
          ]
},
        },
        {
          id: "ela5-u6-informative-explanatory-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Informative writing should be...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "emotional"
                    },
                    {
                              "id": "b",
                              "text": "clear and factual"
                    },
                    {
                              "id": "c",
                              "text": "fictional"
                    },
                    {
                              "id": "d",
                              "text": "long"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Clear and factual."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear and factual.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "clear and factual",
          "commonErrors": [
                    "Not factual."
          ]
},
        },
        {
          id: "ela5-u6-informative-explanatory-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write an informative piece and explain how you organized the facts logically.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Informative",
                              "statement": "Piece + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes piece.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains organization.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Piece with facts; Explanation: organized by importance or sequence for clarity.**",
          "commonErrors": [
                    "Cannot write.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela5-u6-informative-explanatory-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Explains how/why."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "True information."
                    },
                    {
                              "id": "d",
                              "text": "Subject."
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
          id: "ela5-u6-informative-explanatory-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Explanatory\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "True information."
                    },
                    {
                              "id": "b",
                              "text": "Subject."
                    },
                    {
                              "id": "c",
                              "text": "Supporting fact."
                    },
                    {
                              "id": "d",
                              "text": "Explains how/why."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Explanatory\" means Explains how/why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Explanatory\" means Explains how/why.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Explanatory** = Explains how/why.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u6-informative-explanatory-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Subject."
                    },
                    {
                              "id": "b",
                              "text": "True information."
                    },
                    {
                              "id": "c",
                              "text": "Supporting fact."
                    },
                    {
                              "id": "d",
                              "text": "Arrange logically."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means True information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means True information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = True information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
