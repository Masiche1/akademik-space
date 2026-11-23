import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "sci4-u4-lesson-4-1",
  code: "4-1",
  title: "What are Traits?",
  goal: "I CAN explain what traits are and how they're inherited.",
  standards: ["LS3.A"],
  vocabulary: [
    { term: "Trait", definition: "Characteristic." },
    { term: "Inherited", definition: "Passed from parents." },
    { term: "Gene", definition: "Unit of inheritance." },
    { term: "DNA", definition: "Genetic material." },
    { term: "Variation", definition: "Differences between individuals." },
    { term: "Dominant", definition: "Stronger trait." },
    { term: "Recessive", definition: "Weaker trait." },
    { term: "Allele", definition: "Gene version." },
  ],
  concepts: [
    {
      id: "sci4-u4-traits-basics",
      title: "What are traits?",
      skill: "Explain that traits are inherited characteristics passed from parents.",
      lesson: {
        sections: [
          {
            heading: "What you inherit",
            body: "A **trait** is a characteristic (eye color, height). **Inherited** traits are passed from **parents** to **offspring** through **genes** (units of inheritance made of DNA).",
          },
          {
            heading: "Variation",
            body: "**Variation** means individuals have different traits. Some traits are **dominant** (shown if present); others **recessive** (need two copies).",
          },
        ],
        keyFormulas: [
          { name: "Inheritance", statement: "Genes from parents -> traits in offspring." },
        ],
        workedExample: {
          problem: "Why do children look like their parents?",
          solution: "They **inherit genes** from both parents, which determine traits like eye color, hair color, height.",
        },
      },
      questions: [
        {
          id: "sci4-u4-traits-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'trait' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a behavior"
                    },
                    {
                              "id": "b",
                              "text": "an inherited characteristic"
                    },
                    {
                              "id": "c",
                              "text": "a skill"
                    },
                    {
                              "id": "d",
                              "text": "an environment"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Trait = characteristic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trait = characteristic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "an inherited characteristic",
          "commonErrors": [
                    "Confuses with behavior."
          ]
},
        },
        {
          id: "sci4-u4-traits-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Inherited' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "learned"
                    },
                    {
                              "id": "b",
                              "text": "passed from parents"
                    },
                    {
                              "id": "c",
                              "text": "random"
                    },
                    {
                              "id": "d",
                              "text": "environmental"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Inherited = from parents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inherited = from parents.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "passed from parents",
          "commonErrors": [
                    "Confuses with learned."
          ]
},
        },
        {
          id: "sci4-u4-traits-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain how traits are passed from parents to offspring. What carries the information?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Traits",
                              "statement": "Gene explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains genes + inheritance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Genes (DNA) carry trait info; offspring get genes from both parents.'**",
          "commonErrors": [
                    "No gene mention.",
                    "Wrong mechanism."
          ]
},
        },
        {
          id: "sci4-u4-traits-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Dominant' trait means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weaker"
                    },
                    {
                              "id": "b",
                              "text": "shown if present"
                    },
                    {
                              "id": "c",
                              "text": "hidden"
                    },
                    {
                              "id": "d",
                              "text": "rare"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Dominant = shown if present."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dominant = shown if present.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "shown if present",
          "commonErrors": [
                    "Confuses with recessive."
          ]
},
        },
        {
          id: "sci4-u4-traits-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare dominant and recessive traits. Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Traits",
                              "statement": "Comparison + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares traits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Dominant: brown eyes (shown with one copy); Recessive: blue eyes (needs two copies).'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No examples."
          ]
},
        },
        {
          id: "sci4-u4-traits-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trait\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Passed from parents."
                    },
                    {
                              "id": "b",
                              "text": "Characteristic."
                    },
                    {
                              "id": "c",
                              "text": "Unit of inheritance."
                    },
                    {
                              "id": "d",
                              "text": "Genetic material."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Trait\" means Characteristic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trait\" means Characteristic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Trait** = Characteristic.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u4-traits-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inherited\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unit of inheritance."
                    },
                    {
                              "id": "b",
                              "text": "Genetic material."
                    },
                    {
                              "id": "c",
                              "text": "Differences between individuals."
                    },
                    {
                              "id": "d",
                              "text": "Passed from parents."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inherited\" means Passed from parents."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inherited\" means Passed from parents.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inherited** = Passed from parents.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u4-traits-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gene\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Genetic material."
                    },
                    {
                              "id": "b",
                              "text": "Unit of inheritance."
                    },
                    {
                              "id": "c",
                              "text": "Differences between individuals."
                    },
                    {
                              "id": "d",
                              "text": "Stronger trait."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gene\" means Unit of inheritance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gene\" means Unit of inheritance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gene** = Unit of inheritance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
