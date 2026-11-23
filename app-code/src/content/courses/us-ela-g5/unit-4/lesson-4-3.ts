import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ela5-u4-lesson-4-3",
  code: "4-3",
  title: "Visual Information",
  goal: "I CAN integrate information from illustrations, charts and diagrams with text.",
  standards: ["RI.5.7"],
  vocabulary: [
    { term: "Visual", definition: "Picture/diagram." },
    { term: "Illustration", definition: "Picture in text." },
    { term: "Chart", definition: "Data display." },
    { term: "Diagram", definition: "Visual explanation." },
    { term: "Caption", definition: "Text under picture." },
    { term: "Integrate", definition: "Combine info." },
    { term: "Label", definition: "Name on diagram." },
    { term: "Legend", definition: "Key to symbols." },
  ],
  concepts: [
    {
      id: "ela5-u4-visual-information",
      title: "Visual information",
      skill: "Use illustrations, charts and diagrams to understand informational texts.",
      lesson: {
        sections: [
          {
            heading: "Text + visuals",
            body: "Informational texts often have **visuals**: illustrations, charts, diagrams. These **add information** or **show what words describe**.",
          },
          {
            heading: "Reading visuals",
            body: "Check the **caption**, **labels**, and **legend** to understand what the visual shows. Compare it to the text.",
          },
        ],
        keyFormulas: [
          { name: "Visuals", statement: "Caption + labels + legend = understand visual." },
        ],
        workedExample: {
          problem: "A diagram shows the water cycle with labeled arrows. What does it add?",
          solution: "Shows the **process visually** — arrows show direction of water movement that text describes.",
        },
      },
      questions: [
        {
          id: "ela5-u4-visual-information-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Visuals in informational texts include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only pictures"
                    },
                    {
                              "id": "b",
                              "text": "illustrations, charts, diagrams"
                    },
                    {
                              "id": "c",
                              "text": "only text"
                    },
                    {
                              "id": "d",
                              "text": "only tables"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Illustrations, charts, diagrams."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Illustrations, charts, diagrams.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "illustrations, charts, diagrams",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela5-u4-visual-information-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'legend' on a chart is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the title"
                    },
                    {
                              "id": "b",
                              "text": "the key that explains symbols/colors"
                    },
                    {
                              "id": "c",
                              "text": "the data"
                    },
                    {
                              "id": "d",
                              "text": "the caption"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Key to symbols."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key to symbols.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the key that explains symbols/colors",
          "commonErrors": [
                    "Confuses with other parts."
          ]
},
        },
        {
          id: "ela5-u4-visual-information-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Look at an illustration or diagram in a text. Explain what information it adds that the text doesn't.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Visual",
                              "statement": "What visual adds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies visual.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains added info.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Diagram shows water cycle arrows; text only describes steps.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No added info."
          ]
},
        },
        {
          id: "ela5-u4-visual-information-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When reading visuals, you should check...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only the picture"
                    },
                    {
                              "id": "b",
                              "text": "caption, labels and legend"
                    },
                    {
                              "id": "c",
                              "text": "only the title"
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
                              "statement": "Caption, labels, legend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Caption, labels, legend.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "caption, labels and legend",
          "commonErrors": [
                    "Ignores key parts."
          ]
},
        },
        {
          id: "ela5-u4-visual-information-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How do visuals and text work together in an informational text? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Visual",
                              "statement": "How they work together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains relationship.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Text describes; visuals show — together give complete understanding.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "ela5-u4-visual-information-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Visual\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Picture in text."
                    },
                    {
                              "id": "b",
                              "text": "Picture/diagram."
                    },
                    {
                              "id": "c",
                              "text": "Data display."
                    },
                    {
                              "id": "d",
                              "text": "Visual explanation."
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
        {
          id: "ela5-u4-visual-information-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Illustration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Data display."
                    },
                    {
                              "id": "b",
                              "text": "Visual explanation."
                    },
                    {
                              "id": "c",
                              "text": "Text under picture."
                    },
                    {
                              "id": "d",
                              "text": "Picture in text."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Illustration\" means Picture in text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Illustration\" means Picture in text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Illustration** = Picture in text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-visual-information-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Chart\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Visual explanation."
                    },
                    {
                              "id": "b",
                              "text": "Data display."
                    },
                    {
                              "id": "c",
                              "text": "Text under picture."
                    },
                    {
                              "id": "d",
                              "text": "Combine info."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Chart\" means Data display."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Chart\" means Data display.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Chart** = Data display.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
