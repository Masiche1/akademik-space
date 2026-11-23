import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "sci6-u3-lesson-3-3",
  code: "3-3",
  title: "Elements and Compounds",
  goal: "I CAN distinguish elements from compounds.",
  standards: ["MS-PS1-1"],
  vocabulary: [
    { term: "Element", definition: "One type of atom." },
    { term: "Compound", definition: "Two+ elements combined." },
    { term: "Molecule", definition: "Group of atoms." },
    { term: "Formula", definition: "Chemical shorthand." },
    { term: "H2O", definition: "Water." },
    { term: "CO2", definition: "Carbon dioxide." },
    { term: "NaCl", definition: "Salt." },
    { term: "Properties", definition: "Characteristics." },
  ],
  concepts: [
    {
      id: "sci6-u3-elements-compounds",
      title: "Elements and compounds",
      skill: "Distinguish between elements (one atom type) and compounds (multiple elements).",
      lesson: {
        sections: [
          {
            heading: "Elements",
            body: "An **element** has only one type of atom (gold, oxygen, carbon). Cannot be broken down by chemical means.",
          },
          {
            heading: "Compounds",
            body: "A **compound** has two or more elements chemically combined (water H2O, salt NaCl, carbon dioxide CO2).",
          },
        ],
        keyFormulas: [
          { name: "Element", statement: "One type of atom." },
          { name: "Compound", statement: "Two+ elements combined." },
        ],
        workedExample: {
          problem: "Is water (H2O) an element or compound? Is oxygen (O2) an element or compound?",
          solution: "**Water = compound (H + O); Oxygen = element (only O atoms).**",
        },
      },
      questions: [
        {
          id: "sci6-u3-elements-compounds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'element' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "two+ atoms"
                    },
                    {
                              "id": "b",
                              "text": "one type of atom"
                    },
                    {
                              "id": "c",
                              "text": "a mixture"
                    },
                    {
                              "id": "d",
                              "text": "a compound"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "One type of atom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One type of atom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "one type of atom",
          "commonErrors": [
                    "Confuses with compound."
          ]
},
        },
        {
          id: "sci6-u3-elements-compounds-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'compound' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one element"
                    },
                    {
                              "id": "b",
                              "text": "two+ elements combined"
                    },
                    {
                              "id": "c",
                              "text": "only metals"
                    },
                    {
                              "id": "d",
                              "text": "only gases"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Two+ elements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two+ elements.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "two+ elements combined",
          "commonErrors": [
                    "Confuses with element."
          ]
},
        },
        {
          id: "sci6-u3-elements-compounds-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify these as element or compound: oxygen (O2), water (H2O), gold (Au), salt (NaCl), carbon dioxide (CO2).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Elements",
                              "statement": "All five classified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all five.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Elements: O2, Au; Compounds: H2O, NaCl, CO2.**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci6-u3-elements-compounds-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Water (H2O) is a compound because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it has one element"
                    },
                    {
                              "id": "b",
                              "text": "it has hydrogen and oxygen combined"
                    },
                    {
                              "id": "c",
                              "text": "it's a liquid"
                    },
                    {
                              "id": "d",
                              "text": "it's common"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "H + O combined."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "H + O combined.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it has hydrogen and oxygen combined",
          "commonErrors": [
                    "Wrong reason."
          ]
},
        },
        {
          id: "sci6-u3-elements-compounds-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between an element and a compound, giving two examples of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Elements",
                              "statement": "Difference + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Element: one atom type (gold Au, oxygen O2); Compound: multiple elements (water H2O, salt NaCl).**",
          "commonErrors": [
                    "Cannot explain.",
                    "No examples."
          ]
},
        },
        {
          id: "sci6-u3-elements-compounds-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Element\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two+ elements combined."
                    },
                    {
                              "id": "b",
                              "text": "One type of atom."
                    },
                    {
                              "id": "c",
                              "text": "Group of atoms."
                    },
                    {
                              "id": "d",
                              "text": "Chemical shorthand."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Element\" means One type of atom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Element\" means One type of atom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Element** = One type of atom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-elements-compounds-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group of atoms."
                    },
                    {
                              "id": "b",
                              "text": "Chemical shorthand."
                    },
                    {
                              "id": "c",
                              "text": "Water."
                    },
                    {
                              "id": "d",
                              "text": "Two+ elements combined."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compound\" means Two+ elements combined."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compound\" means Two+ elements combined.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compound** = Two+ elements combined.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-elements-compounds-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Molecule\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Chemical shorthand."
                    },
                    {
                              "id": "b",
                              "text": "Group of atoms."
                    },
                    {
                              "id": "c",
                              "text": "Water."
                    },
                    {
                              "id": "d",
                              "text": "Carbon dioxide."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Molecule\" means Group of atoms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Molecule\" means Group of atoms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Molecule** = Group of atoms.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
