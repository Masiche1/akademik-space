import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "ela4-u4-lesson-4-4",
  code: "4-4",
  title: "Fact vs Opinion",
  goal: "I CAN distinguish facts from opinions in informational texts.",
  standards: ["RI.4.8"],
  vocabulary: [
    { term: "Fact", definition: "True thing." },
    { term: "Opinion", definition: "What someone thinks." },
    { term: "Distinguish", definition: "Tell apart." },
    { term: "Evidence", definition: "Proof." },
    { term: "Bias", definition: "Slanted view." },
    { term: "Objective", definition: "Fair." },
    { term: "Subjective", definition: "Personal view." },
    { term: "Reason", definition: "Why it matters." },
  ],
  concepts: [
    {
      id: "ela4-u4-fact-opinion",
      title: "Fact vs opinion",
      skill: "Distinguish facts from opinions in informational texts.",
      lesson: {
        sections: [
          {
            heading: "True vs believed",
            body: "A **fact** can be proven true; an **opinion** is what someone **thinks** or **believes**. 'Water boils at 100°C' = fact; 'Water is the best drink' = opinion.",
          },
          {
            heading: "Why it matters",
            body: "Authors may include **opinions** disguised as facts. Look for **evidence** to tell the difference.",
          },
        ],
        keyFormulas: [
          { name: "Fact", statement: "Provable = fact; Believed = opinion." },
        ],
        workedExample: {
          problem: "Which is a fact: 'Dogs are mammals' or 'Dogs are the best pets'?",
          solution: "'Dogs are mammals' = **fact** (provable); 'best pets' = **opinion** (belief).",
        },
      },
      questions: [
        {
          id: "ela4-u4-fact-opinion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'fact' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an opinion"
                    },
                    {
                              "id": "b",
                              "text": "something provable as true"
                    },
                    {
                              "id": "c",
                              "text": "a guess"
                    },
                    {
                              "id": "d",
                              "text": "a feeling"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Fact = provable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fact = provable.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**something provable as true**",
          "commonErrors": [
                    "Confuses with opinion."
          ]
},
        },
        {
          id: "ela4-u4-fact-opinion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'The sky is blue' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an opinion"
                    },
                    {
                              "id": "b",
                              "text": "a fact"
                    },
                    {
                              "id": "c",
                              "text": "a guess"
                    },
                    {
                              "id": "d",
                              "text": "a belief"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Sky is blue = fact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sky is blue = fact.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a fact**",
          "commonErrors": [
                    "Thinks it's opinion."
          ]
},
        },
        {
          id: "ela4-u4-fact-opinion-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find two statements: one fact and one opinion. Explain how you know which is which.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fact/opinion",
                              "statement": "Fact + opinion + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies both.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Fact: Earth orbits the Sun (provable); Opinion: Earth is the best planet (belief).'**",
          "commonErrors": [
                    "Two facts.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela4-u4-fact-opinion-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'opinion' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a fact"
                    },
                    {
                              "id": "b",
                              "text": "what someone thinks or believes"
                    },
                    {
                              "id": "c",
                              "text": "a proof"
                    },
                    {
                              "id": "d",
                              "text": "a statistic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Opinion = belief."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opinion = belief.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what someone thinks or believes**",
          "commonErrors": [
                    "Confuses with fact."
          ]
},
        },
        {
          id: "ela4-u4-fact-opinion-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read an informational text. Find one fact and one opinion. How might the opinion influence the reader?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fact/opinion",
                              "statement": "Fact + opinion + influence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds both.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains influence.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Fact: study shows X; Opinion: 'clearly the best'; opinion makes reader lean toward author's view.'**",
          "commonErrors": [
                    "Only one type.",
                    "No influence."
          ]
},
        },
        {
          id: "ela4-u4-fact-opinion-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What someone thinks."
                    },
                    {
                              "id": "b",
                              "text": "True thing."
                    },
                    {
                              "id": "c",
                              "text": "Tell apart."
                    },
                    {
                              "id": "d",
                              "text": "Proof."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means True thing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means True thing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = True thing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-fact-opinion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opinion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell apart."
                    },
                    {
                              "id": "b",
                              "text": "Proof."
                    },
                    {
                              "id": "c",
                              "text": "Slanted view."
                    },
                    {
                              "id": "d",
                              "text": "What someone thinks."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Opinion\" means What someone thinks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Opinion\" means What someone thinks.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Opinion** = What someone thinks.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-fact-opinion-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Distinguish\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Proof."
                    },
                    {
                              "id": "b",
                              "text": "Tell apart."
                    },
                    {
                              "id": "c",
                              "text": "Slanted view."
                    },
                    {
                              "id": "d",
                              "text": "Fair."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Distinguish\" means Tell apart."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Distinguish\" means Tell apart.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Distinguish** = Tell apart.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
