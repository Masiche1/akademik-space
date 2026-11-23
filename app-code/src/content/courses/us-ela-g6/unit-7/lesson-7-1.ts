import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ela6-u7-lesson-7-1",
  code: "7-1",
  title: "Grammar Conventions",
  goal: "I CAN use correct grammar conventions.",
  standards: ["L.6.1"],
  vocabulary: [
    { term: "Convention", definition: "Grammar rule." },
    { term: "Pronoun", definition: "Replaces noun." },
    { term: "Antecedent", definition: "What pronoun refers to." },
    { term: "Agreement", definition: "Match in number/gender." },
    { term: "Verb tense", definition: "When action happens." },
    { term: "Subject-verb", definition: "Agreement." },
    { term: "Comma", definition: "Pause mark." },
    { term: "Sentence", definition: "Complete thought." },
  ],
  concepts: [
    {
      id: "ela6-u7-grammar-conventions",
      title: "Grammar conventions",
      skill: "Use correct pronoun-antecedent agreement, verb tense, and punctuation.",
      lesson: {
        sections: [
          {
            heading: "Pronouns",
            body: "A **pronoun** replaces a noun. It must **agree** with its **antecedent** (the noun it replaces) in number and gender.",
          },
          {
            heading: "Verb tense",
            body: "Use correct **verb tense** consistently. **Commas** separate items in lists, after introductory elements, and in compound sentences.",
          },
        ],
        keyFormulas: [
          { name: "Grammar", statement: "Pronoun-antecedent agreement + verb tense + punctuation = correct writing." },
        ],
        workedExample: {
          problem: "Fix this sentence: 'Each of the students should bring their books.'",
          solution: "**'Each of the students should bring his or her books'** or **'The students should bring their books.'**",
        },
      },
      questions: [
        {
          id: "ela6-u7-grammar-conventions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'pronoun' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a noun"
                    },
                    {
                              "id": "b",
                              "text": "a word that replaces a noun"
                    },
                    {
                              "id": "c",
                              "text": "a verb"
                    },
                    {
                              "id": "d",
                              "text": "an adjective"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Replaces noun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Replaces noun.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a word that replaces a noun",
          "commonErrors": [
                    "Confuses with noun."
          ]
},
        },
        {
          id: "ela6-u7-grammar-conventions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Antecedent' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the pronoun"
                    },
                    {
                              "id": "b",
                              "text": "the noun the pronoun replaces"
                    },
                    {
                              "id": "c",
                              "text": "the verb"
                    },
                    {
                              "id": "d",
                              "text": "the adjective"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Noun pronoun replaces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Noun pronoun replaces.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the noun the pronoun replaces",
          "commonErrors": [
                    "Confuses with pronoun."
          ]
},
        },
        {
          id: "ela6-u7-grammar-conventions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fix this sentence for pronoun-antecedent agreement: 'Every student must submit their homework on time.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Grammar",
                              "statement": "Corrected sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixes agreement.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**'Every student must submit his or her homework on time'** or **'All students must submit their homework on time.'**",
          "commonErrors": [
                    "No fix.",
                    "Wrong fix."
          ]
},
        },
        {
          id: "ela6-u7-grammar-conventions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Verb tense' indicates...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "who is speaking"
                    },
                    {
                              "id": "b",
                              "text": "when the action happens"
                    },
                    {
                              "id": "c",
                              "text": "where it happens"
                    },
                    {
                              "id": "d",
                              "text": "how it happens"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "When action happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When action happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "when the action happens",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela6-u7-grammar-conventions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Correct a sentence with pronoun-antecedent agreement issues and explain the rule.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Grammar",
                              "statement": "Corrected + explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Corrects sentence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains rule.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Neither of the boys brought his book' (singular antecedent -> singular pronoun).'**",
          "commonErrors": [
                    "Cannot correct.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela6-u7-grammar-conventions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convention\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Replaces noun."
                    },
                    {
                              "id": "b",
                              "text": "Grammar rule."
                    },
                    {
                              "id": "c",
                              "text": "What pronoun refers to."
                    },
                    {
                              "id": "d",
                              "text": "Match in number/gender."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Convention\" means Grammar rule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convention\" means Grammar rule.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Convention** = Grammar rule.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-grammar-conventions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pronoun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What pronoun refers to."
                    },
                    {
                              "id": "b",
                              "text": "Match in number/gender."
                    },
                    {
                              "id": "c",
                              "text": "When action happens."
                    },
                    {
                              "id": "d",
                              "text": "Replaces noun."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Pronoun\" means Replaces noun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pronoun\" means Replaces noun.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Pronoun** = Replaces noun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-grammar-conventions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Antecedent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Match in number/gender."
                    },
                    {
                              "id": "b",
                              "text": "What pronoun refers to."
                    },
                    {
                              "id": "c",
                              "text": "When action happens."
                    },
                    {
                              "id": "d",
                              "text": "Agreement."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Antecedent\" means What pronoun refers to."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Antecedent\" means What pronoun refers to.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Antecedent** = What pronoun refers to.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
