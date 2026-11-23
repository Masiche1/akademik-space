import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "sci6-u3-lesson-3-2",
  code: "3-2",
  title: "Atomic Structure",
  goal: "I CAN describe the structure of an atom.",
  standards: ["MS-PS1-1"],
  vocabulary: [
    { term: "Atom", definition: "Basic unit of matter." },
    { term: "Nucleus", definition: "Center." },
    { term: "Proton", definition: "Positive charge." },
    { term: "Neutron", definition: "No charge." },
    { term: "Electron", definition: "Negative charge." },
    { term: "Shell", definition: "Electron layer." },
    { term: "Element", definition: "One type of atom." },
    { term: "Atomic number", definition: "Number of protons." },
  ],
  concepts: [
    {
      id: "sci6-u3-atomic-structure",
      title: "Atomic structure",
      skill: "Describe the parts of an atom: protons, neutrons and electrons.",
      lesson: {
        sections: [
          {
            heading: "Atom parts",
            body: "An **atom** has a **nucleus** (protons + neutrons) surrounded by **electrons** in shells. Protons are positive, neutrons neutral, electrons negative.",
          },
          {
            heading: "Elements",
            body: "**Atomic number** = number of protons = identifies the element. Carbon has 6 protons.",
          },
        ],
        keyFormulas: [
          { name: "Atom", statement: "Nucleus (protons+neutrons) + electrons = atom." },
        ],
        workedExample: {
          problem: "How many protons does oxygen have? (Atomic number 8)",
          solution: "**8 protons** — atomic number = protons.",
        },
      },
      questions: [
        {
          id: "sci6-u3-atomic-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'nucleus' of an atom contains...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only electrons"
                    },
                    {
                              "id": "b",
                              "text": "protons and neutrons"
                    },
                    {
                              "id": "c",
                              "text": "only protons"
                    },
                    {
                              "id": "d",
                              "text": "only neutrons"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Protons + neutrons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protons + neutrons.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "protons and neutrons",
          "commonErrors": [
                    "Missing particles."
          ]
},
        },
        {
          id: "sci6-u3-atomic-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Atomic number' tells you the number of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "electrons"
                    },
                    {
                              "id": "b",
                              "text": "protons"
                    },
                    {
                              "id": "c",
                              "text": "neutrons"
                    },
                    {
                              "id": "d",
                              "text": "shells"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Protons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protons.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "protons",
          "commonErrors": [
                    "Wrong particle."
          ]
},
        },
        {
          id: "sci6-u3-atomic-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the structure of a carbon atom (atomic number 6).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Atom",
                              "statement": "6 protons + neutrons + electrons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes structure.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Carbon: 6 protons, 6 neutrons (usually), 6 electrons; nucleus + electron shells.**",
          "commonErrors": [
                    "Wrong numbers.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "sci6-u3-atomic-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Protons' have...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "negative charge"
                    },
                    {
                              "id": "b",
                              "text": "positive charge"
                    },
                    {
                              "id": "c",
                              "text": "no charge"
                    },
                    {
                              "id": "d",
                              "text": "neutral charge"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Positive charge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive charge.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "positive charge",
          "commonErrors": [
                    "Wrong charge."
          ]
},
        },
        {
          id: "sci6-u3-atomic-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw and label the parts of an atom, explaining the charge of each particle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Atom",
                              "statement": "Parts + charges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labels parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains charges.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Protons: positive, in nucleus; Neutrons: neutral, in nucleus; Electrons: negative, in shells.**",
          "commonErrors": [
                    "Missing parts.",
                    "Wrong charges."
          ]
},
        },
        {
          id: "sci6-u3-atomic-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Atom\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Center."
                    },
                    {
                              "id": "b",
                              "text": "Basic unit of matter."
                    },
                    {
                              "id": "c",
                              "text": "Positive charge."
                    },
                    {
                              "id": "d",
                              "text": "No charge."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Atom\" means Basic unit of matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Atom\" means Basic unit of matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Atom** = Basic unit of matter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-atomic-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nucleus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Positive charge."
                    },
                    {
                              "id": "b",
                              "text": "No charge."
                    },
                    {
                              "id": "c",
                              "text": "Negative charge."
                    },
                    {
                              "id": "d",
                              "text": "Center."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nucleus\" means Center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nucleus\" means Center.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nucleus** = Center.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-atomic-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Proton\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No charge."
                    },
                    {
                              "id": "b",
                              "text": "Positive charge."
                    },
                    {
                              "id": "c",
                              "text": "Negative charge."
                    },
                    {
                              "id": "d",
                              "text": "Electron layer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Proton\" means Positive charge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Proton\" means Positive charge.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Proton** = Positive charge.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
