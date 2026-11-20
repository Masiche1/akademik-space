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
                              "text": "Breaking complex phenomena into simpler parts"
                    },
                    {
                              "id": "b",
                              "text": "Understanding as whole"
                    },
                    {
                              "id": "c",
                              "text": "A type of experiment"
                    },
                    {
                              "id": "d",
                              "text": "A memory model"
                    }
          ],
          "correctChoiceId": "a"
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
