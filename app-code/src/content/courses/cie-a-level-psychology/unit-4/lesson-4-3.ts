import type { Lesson } from "../../../types.ts";

export const lesson743: Lesson = {
  id: "ciealpsy-u4-lesson-4-3",
  code: "4-3",
  title: "Issues and Debates: Reductionism and Holism",
  goal: "I CAN explain reductionism and holism in psychology.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: issues & debates"],
  
  vocabulary: [
    { term: "Reductionism", definition: "Breaking complex phenomena into simpler parts." },
    { term: "Holism", definition: "Understanding behaviour as whole, not parts." },
    { term: "Biological reductionism", definition: "Explaining behaviour by biology alone." },
    { term: "Environmental reductionism", definition: "Explaining behaviour by environment alone." },
    { term: "Emergent properties", definition: "Whole has properties parts don't." },
    { term: "Levels of explanation", definition: "Different levels of analysis." },
  ],
  concepts: [
    {
      id: "ciealpsy-u4-s3-reduc",
      title: "Reductionism & holism",
      skill: "Explain reductionism and holism.",
      lesson: {
        sections: [
          {
            heading: "Reductionism",
            body: "Break complex into simple parts. Biological: behaviour = brain chemistry. Behaviourist: behaviour = conditioning. Advantage: scientific, testable. Disadvantage: oversimplifies, ignores context.",
          },
          {
            heading: "Holism",
            body: "Behaviour understood as whole — person + environment + history. Gestalt psychology. Advantage: captures complexity. Disadvantage: hard to test scientifically.",
          },
          {
            heading: "Emergent properties",
            body: "Whole has properties parts don't — water is wet though H and O aren't. Behaviour emerges from interaction, not just parts.",
          },
        ],
        keyFormulas: [
          { name: "Reductionism", statement: "break into parts" },
          { name: "Holism", statement: "whole understanding" },
          { name: "Emergent", statement: "whole > parts" },
        ],
        workedExample: {
          problem: "Is depression reductionist or holistic?",
          solution: "Biological reductionist: serotonin. Cognitive: negative thoughts. Holistic: person + environment + biology together.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u4-red-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is reductionism?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of experiment"
                    },
                    {
                              "id": "b",
                              "text": "Breaking complex phenomena into simpler parts"
                    },
                    {
                              "id": "c",
                              "text": "Understanding as whole"
                    },
                    {
                              "id": "d",
                              "text": "A memory model"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reductionism",
                              "statement": "Break into parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reductionism = break into parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Break into parts"
},
        },
        {
          id: "ciealpsy-u4-red-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is holism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Holism",
                              "statement": "Whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understanding behaviour as whole.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Considers person + environment + history.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Whole understanding"
},
        },
        {
          id: "ciealpsy-u4-red-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are emergent properties?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Emergent",
                              "statement": "Whole properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Whole has properties parts don't.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Water wet though H/O aren't.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Behaviour emerges from interaction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Whole > parts"
},
        },
        {
          id: "ciealpsy-u4-red-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define reductionism, holism, biological reductionism, environmental reductionism, emergent properties, levels of explanation. (b) What is reductionism? (c) What is holism? (d) What are emergent properties? (e) What is biological reductionism? (f) What is environmental reductionism? (g) How do approaches differ? (h) Evaluate reductionism vs holism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Reductionism",
                              "statement": "Debate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Break into parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Whole understanding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Whole > parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Biology alone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Environment alone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Parts vs whole.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Reductionist scientific; holistic complete.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Reductionism/holism analysis."
},
        },
        {
          id: "ciealpsy-u4-red-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Holism in psychology means:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Breaking behaviour into simple components"
                    },
                    {
                              "id": "b",
                              "text": "Understanding behaviour as a whole rather than reducing it to parts"
                    },
                    {
                              "id": "c",
                              "text": "Studying only the brain"
                    },
                    {
                              "id": "d",
                              "text": "Ignoring the person's context"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Holism",
                              "statement": "Whole understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Holism argues that behaviour must be understood as a unified whole, considering the person, environment and history together.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Understanding behaviour as a whole"
},
        },
        {
          id: "ciealpsy-u4-red-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many types of reductionism are described in the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Reductionism",
                              "statement": "Biological and environmental."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson describes biological reductionism and environmental reductionism.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u4-red-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Biological reductionism explains behaviour by:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reducing it to conditioning alone"
                    },
                    {
                              "id": "b",
                              "text": "Reducing it to biological factors such as genes and brain chemistry"
                    },
                    {
                              "id": "c",
                              "text": "Ignoring biology entirely"
                    },
                    {
                              "id": "d",
                              "text": "Considering the whole person"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Biological reductionism",
                              "statement": "Behaviour = biology."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Biological reductionism explains all behaviour in terms of biological factors such as genes, brain structure and neurotransmitters.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Reducing behaviour to biology"
},
        },
        {
          id: "ciealpsy-u4-red-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many perspectives are compared in this lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Debate",
                              "statement": "Reductionism vs holism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson compares reductionism and holism.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u4-red-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Emergent properties refers to the idea that:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Parts always equal the whole"
                    },
                    {
                              "id": "b",
                              "text": "The whole has properties that its individual parts do not"
                    },
                    {
                              "id": "c",
                              "text": "Behaviour can always be predicted from parts alone"
                    },
                    {
                              "id": "d",
                              "text": "Reductionism is always correct"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Emergent properties",
                              "statement": "Whole > parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Emergent properties are characteristics of the whole system that cannot be predicted from, or found in, its constituent parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Whole has properties parts lack"
},
        },
        {
          id: "ciealpsy-u4-red-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the water example used to illustrate emergent properties, how many elements combine to produce the emergent property of wetness?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Emergent properties",
                              "statement": "H and O are not wet; water is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water is made of hydrogen and oxygen — two elements that are not themselves wet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u4-red-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a strength of the holistic approach?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It ignores emergent properties"
                    },
                    {
                              "id": "b",
                              "text": "It is easy to test scientifically"
                    },
                    {
                              "id": "c",
                              "text": "It simplifies psychological research"
                    },
                    {
                              "id": "d",
                              "text": "It captures the complexity of behaviour by considering the whole person in context"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Holism strength",
                              "statement": "Captures complexity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Holism considers the person, their environment and history together, capturing complexity that reductionist accounts miss.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Captures complexity of the whole"
},
        },
        {
          id: "ciealpsy-u4-red-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many levels of explanation are commonly distinguished in psychology?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Levels",
                              "statement": "Biological, psychological, social."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Psychology commonly distinguishes biological, psychological and social levels of explanation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u4-red-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might a purely reductionist explanation of depression be criticised?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It cannot be tested scientifically"
                    },
                    {
                              "id": "b",
                              "text": "It oversimplifies by ignoring psychological and social factors that interact with biology"
                    },
                    {
                              "id": "c",
                              "text": "It ignores biological factors"
                    },
                    {
                              "id": "d",
                              "text": "It is too holistic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Reductionism weakness",
                              "statement": "Oversimplifies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reducing depression to a single factor ignores the interaction of biological, psychological and social influences.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Oversimplifies by ignoring other levels"
},
        },
        {
          id: "ciealpsy-u4-red-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by emergent properties, using an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Emergent properties",
                              "statement": "Whole > parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Emergent properties are characteristics of a whole system that cannot be found in, or predicted from, its individual parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: water is wet, yet hydrogen and oxygen are not wet.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "In psychology, behaviour emerges from the interaction of person and environment rather than from parts alone.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Whole has properties its parts lack"
},
        },
        {
          id: "ciealpsy-u4-red-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare reductionism and holism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Reductionism vs holism",
                              "statement": "Parts vs whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reductionism breaks complex phenomena into simpler components, e.g. behaviour into biology or conditioning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Holism understands behaviour as a whole, considering the person, environment and history together.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reductionism is scientific and testable but oversimplifies and ignores context; holism is complete but hard to test.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Emergent properties suggest the whole cannot be fully understood by studying parts alone.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Reductionism testable; holism complete but untestable"
},
        },
        {
          id: "ciealpsy-u4-red-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define reductionism, holism, biological reductionism, environmental reductionism, emergent properties and levels of explanation. (b) What is reductionism? (c) What is holism? (d) What are emergent properties? (e) What is biological reductionism? (f) What is environmental reductionism? (g) How do psychological approaches vary in their level of reductionism? (h) Evaluate reductionism versus holism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Reductionism",
                              "statement": "Debate and evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Breaking complex phenomena into simpler parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Understanding behaviour as a whole.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Whole has properties its parts lack.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Explaining behaviour by biology alone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Explaining behaviour by environment alone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Biological and behaviourist approaches are highly reductionist; cognitive and humanistic approaches are less so.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Reductionism is testable but oversimplifies; holism captures complexity but is hard to investigate scientifically.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Reductionism and holism analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u4-red-notes",
      title: "Reductionism — notes",
      summary: "Reductionism=parts; holism=whole. Emergent properties exceed parts.",
      sections: [
        { heading: "Key idea", body: "Different levels of explanation — biological, psychological, social." },
        { heading: "Trade-off", body: "Reductionism testable but oversimplifies; holism complete but untestable." },
      ],
    },
  ],
};
