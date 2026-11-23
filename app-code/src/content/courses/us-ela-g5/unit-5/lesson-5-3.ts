import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ela5-u5-lesson-5-3",
  code: "5-3",
  title: "Linking Words and Phrases",
  goal: "I CAN use linking words to connect ideas in my writing.",
  standards: ["W.5.1"],
  vocabulary: [
    { term: "Linking words", definition: "Connectors." },
    { term: "Transition", definition: "Word that moves to next idea." },
    { term: "First/second", definition: "Order." },
    { term: "However", definition: "Contrast." },
    { term: "For example", definition: "Give example." },
    { term: "In addition", definition: "Add info." },
    { term: "Therefore", definition: "Result." },
    { term: "Finally", definition: "End." },
  ],
  concepts: [
    {
      id: "ela5-u5-linking-words",
      title: "Linking words",
      skill: "Use transition words to connect ideas smoothly in writing.",
      lesson: {
        sections: [
          {
            heading: "Smooth connections",
            body: "**Linking words** (transitions) connect ideas: 'first', 'however', 'for example', 'in addition', 'therefore'. They make writing **flow**.",
          },
          {
            heading: "Types",
            body: "**Order**: first, then, finally. **Contrast**: however, but, on the other hand. **Example**: for example, such as. **Result**: therefore, so, as a result.",
          },
        ],
        keyFormulas: [
          { name: "Linking", statement: "Order + contrast + example + result = transitions." },
        ],
        workedExample: {
          problem: "Rewrite: 'I like apples. I like oranges.' with linking words.",
          solution: "'I like apples. **In addition**, I like oranges.' or 'I like apples **and** oranges.'",
        },
      },
      questions: [
        {
          id: "ela5-u5-linking-words-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'However' is a linking word that shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "addition"
                    },
                    {
                              "id": "b",
                              "text": "contrast"
                    },
                    {
                              "id": "c",
                              "text": "example"
                    },
                    {
                              "id": "d",
                              "text": "result"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "However = contrast."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "However = contrast.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "contrast",
          "commonErrors": [
                    "Wrong type."
          ]
},
        },
        {
          id: "ela5-u5-linking-words-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'For example' is used to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "contrast"
                    },
                    {
                              "id": "b",
                              "text": "give an example"
                    },
                    {
                              "id": "c",
                              "text": "add info"
                    },
                    {
                              "id": "d",
                              "text": "conclude"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Give example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Give example.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "give an example",
          "commonErrors": [
                    "Wrong purpose."
          ]
},
        },
        {
          id: "ela5-u5-linking-words-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite a paragraph using at least three different linking words. Identify which type each is.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Linking",
                              "statement": "3+ linking words used."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses linking words.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies types.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'First, ... However, ... For example, ...' — order, contrast, example.**",
          "commonErrors": [
                    "Missing linking words.",
                    "Cannot identify types."
          ]
},
        },
        {
          id: "ela5-u5-linking-words-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Linking words help writing by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "making it confusing"
                    },
                    {
                              "id": "b",
                              "text": "connecting ideas smoothly"
                    },
                    {
                              "id": "c",
                              "text": "adding length"
                    },
                    {
                              "id": "d",
                              "text": "changing meaning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Connect ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Connect ideas.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "connecting ideas smoothly",
          "commonErrors": [
                    "Thinks they confuse."
          ]
},
        },
        {
          id: "ela5-u5-linking-words-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how different linking words serve different purposes in writing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Linking",
                              "statement": "Purposes explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies purposes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Order words sequence; contrast words show difference; example words illustrate; result words show outcome.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No examples."
          ]
},
        },
        {
          id: "ela5-u5-linking-words-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Linking words\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Word that moves to next idea."
                    },
                    {
                              "id": "b",
                              "text": "Connectors."
                    },
                    {
                              "id": "c",
                              "text": "Order."
                    },
                    {
                              "id": "d",
                              "text": "Contrast."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Linking words\" means Connectors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Linking words\" means Connectors.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Linking words** = Connectors.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u5-linking-words-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Transition\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Order."
                    },
                    {
                              "id": "b",
                              "text": "Contrast."
                    },
                    {
                              "id": "c",
                              "text": "Give example."
                    },
                    {
                              "id": "d",
                              "text": "Word that moves to next idea."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Transition\" means Word that moves to next idea."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Transition\" means Word that moves to next idea.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Transition** = Word that moves to next idea.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u5-linking-words-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"First/second\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Contrast."
                    },
                    {
                              "id": "b",
                              "text": "Order."
                    },
                    {
                              "id": "c",
                              "text": "Give example."
                    },
                    {
                              "id": "d",
                              "text": "Add info."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"First/second\" means Order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"First/second\" means Order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**First/second** = Order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
