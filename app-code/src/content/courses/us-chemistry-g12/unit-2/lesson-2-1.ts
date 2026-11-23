import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "chem12-u2-lesson-2-1",
  code: "2-1",
  title: "Types of Chemical Bonds",
  goal: "I CAN distinguish ionic, covalent and metallic bonding.",
  standards: ["HS-PS1-2", "HS-PS1-3"],
  vocabulary: [
    { term: "Ionic bond", definition: "Electron transfer, ions attract." },
    { term: "Covalent bond", definition: "Electron sharing." },
    { term: "Metallic bond", definition: "Electron sea in metals." },
    { term: "Electronegativity", definition: "Electron attraction." },
    { term: "Ion", definition: "Charged atom." },
  ],
  concepts: [
    {
      id: "chem12-u2-bonding-types",
      title: "Types of bonding",
      skill: "Distinguish ionic, covalent and metallic bonds.",
      lesson: {
        sections: [
          {
            heading: "Ionic vs covalent",
            body: "Ionic bonds form when one atom transfers electrons to another (metal + nonmetal) — ions attract (NaCl). Covalent bonds form when atoms share electrons (nonmetal + nonmetal) — molecules (H2O, CO2).",
          },
          {
            heading: "Metallic bonding",
            body: "Metals share a 'sea' of delocalized electrons — explains conductivity, malleability and luster. Bond type predicts properties: ionic = brittle solids, covalent = molecules, metallic = conductive.",
          },
        ],
        keyFormulas: [
          { name: "Ionic", statement: "Transfer → ions." },
          { name: "Covalent", statement: "Share → molecules." },
          { name: "Metallic", statement: "Electron sea." },
        ],
        workedExample: {
          problem: "What type of bond is in water (H2O)?",
          solution: "Covalent — hydrogen and oxygen share electrons to form molecules.",
        },
      },
      questions: [
        {
          id: "chem12-u2-bonding-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ionic bond involves ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "electron sharing"
                    },
                    {
                              "id": "b",
                              "text": "electron transfer"
                    },
                    {
                              "id": "c",
                              "text": "electron sea"
                    },
                    {
                              "id": "d",
                              "text": "no electrons"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ionic",
                              "statement": "Electron transfer between atoms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ionic bonds form through electron transfer creating ions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** electron transfer",
          "commonErrors": [
                    "Confusing with covalent."
          ]
},
        },
        {
          id: "chem12-u2-bonding-types-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which compound has ionic bonding?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "H2O"
                    },
                    {
                              "id": "b",
                              "text": "CO2"
                    },
                    {
                              "id": "c",
                              "text": "NaCl"
                    },
                    {
                              "id": "d",
                              "text": "CH4"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ionic",
                              "statement": "Metal + nonmetal = NaCl."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NaCl is ionic (Na metal + Cl nonmetal); the others are covalent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** NaCl",
          "commonErrors": [
                    "Choosing a molecular compound."
          ]
},
        },
        {
          id: "chem12-u2-bonding-types-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 3 main types of chemical bonds. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Types",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Ionic, covalent, metallic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 types.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Missing metallic."
          ]
},
        },
        {
          id: "chem12-u2-bonding-types-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why metals conduct electricity but ionic compounds do not (in solid form).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Metallic",
                              "statement": "Delocalized electrons move."
                    },
                    {
                              "kind": "definition",
                              "name": "Ionic",
                              "statement": "Fixed ions, no free electrons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Metals have a 'sea' of delocalized electrons that move freely, carrying current. Solid ionic compounds have fixed ions in a lattice — electrons can't move, so no conduction (though they conduct when molten/dissolved).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains electron mobility difference.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Metals: free electrons; ionic solids: locked ions.**",
          "commonErrors": [
                    "Saying ionic compounds never conduct."
          ]
},
        },
      ],
    },
  ],
};
