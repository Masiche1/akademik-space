import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ela4-u5-lesson-5-3",
  code: "5-3",
  title: "Linking Words",
  goal: "I CAN use linking words to connect reasons and evidence.",
  standards: ["W.4.1c"],
  vocabulary: [
    { term: "Linking word", definition: "Connects ideas." },
    { term: "Because", definition: "Shows reason." },
    { term: "For example", definition: "Gives example." },
    { term: "Also", definition: "Adds more." },
    { term: "In addition", definition: "Adds more." },
    { term: "However", definition: "Shows contrast." },
    { term: "Therefore", definition: "Shows result." },
    { term: "First/second", definition: "Order of points." },
  ],
  concepts: [
    {
      id: "ela4-u5-linking-words",
      title: "Linking words",
      skill: "Use linking words to connect reasons, evidence and conclusions.",
      lesson: {
        sections: [
          {
            heading: "Connect ideas",
            body: "**Linking words** connect your ideas smoothly: 'because' (reason), 'for example' (example), 'also' (addition), 'however' (contrast), 'therefore' (result).",
          },
          {
            heading: "Example",
            body: "'Recess is important **because** students need exercise. **For example**, running improves focus **and** health.'",
          },
        ],
        keyFormulas: [
          { name: "Linking", statement: "Claim + linking words + evidence = smooth argument." },
        ],
        workedExample: {
          problem: "Add a linking word: 'Exercise is good. ___ it makes you strong.'",
          solution: "'**Because** it makes you strong.'",
        },
      },
      questions: [
        {
          id: "ela4-u5-linking-words-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Because' is a linking word that shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "contrast"
                    },
                    {
                              "id": "b",
                              "text": "reason"
                    },
                    {
                              "id": "c",
                              "text": "addition"
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
                              "statement": "Because = reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Because = reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**reason**",
          "commonErrors": [
                    "Wrong function."
          ]
},
        },
        {
          id: "ela4-u5-linking-words-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'However' shows...",
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
                              "text": "reason"
                    },
                    {
                              "id": "d",
                              "text": "example"
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
          "finalAnswer": "**contrast**",
          "commonErrors": [
                    "Wrong function."
          ]
},
        },
        {
          id: "ela4-u5-linking-words-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a claim with two reasons connected by linking words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Linking",
                              "statement": "Claim + 2 reasons + linkers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses linking words correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'Exercise is good because it helps health and because it improves mood.'**",
          "commonErrors": [
                    "No linkers.",
                    "Wrong linkers."
          ]
},
        },
        {
          id: "ela4-u5-linking-words-q4",
          difficulty: "foundation",
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
                              "text": "show reason"
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
                              "statement": "For example = example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For example = example.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**give an example**",
          "commonErrors": [
                    "Wrong function."
          ]
},
        },
        {
          id: "ela4-u5-linking-words-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Rewrite a paragraph adding linking words (because, for example, however, therefore) to improve flow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Linking",
                              "statement": "Added linkers + improved flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adds linkers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Improves flow.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Exercise helps because... For example,... However,... Therefore,...'**",
          "commonErrors": [
                    "No linkers.",
                    "No improvement."
          ]
},
        },
        {
          id: "ela4-u5-linking-words-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Linking word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shows reason."
                    },
                    {
                              "id": "b",
                              "text": "Connects ideas."
                    },
                    {
                              "id": "c",
                              "text": "Gives example."
                    },
                    {
                              "id": "d",
                              "text": "Adds more."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Linking word\" means Connects ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Linking word\" means Connects ideas.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Linking word** = Connects ideas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-linking-words-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Because\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gives example."
                    },
                    {
                              "id": "b",
                              "text": "Adds more."
                    },
                    {
                              "id": "c",
                              "text": "Shows contrast."
                    },
                    {
                              "id": "d",
                              "text": "Shows reason."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Because\" means Shows reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Because\" means Shows reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Because** = Shows reason.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-linking-words-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"For example\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Adds more."
                    },
                    {
                              "id": "b",
                              "text": "Gives example."
                    },
                    {
                              "id": "c",
                              "text": "Shows contrast."
                    },
                    {
                              "id": "d",
                              "text": "Shows result."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"For example\" means Gives example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"For example\" means Gives example.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**For example** = Gives example.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
