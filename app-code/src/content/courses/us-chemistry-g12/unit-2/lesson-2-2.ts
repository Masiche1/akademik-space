import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "chem12-u2-lesson-2-2",
  code: "2-2",
  title: "Chemical Equations",
  goal: "I CAN write and balance chemical equations.",
  standards: ["HS-PS1-7"],
  vocabulary: [
    { term: "Reactant", definition: "Starting substance." },
    { term: "Product", definition: "Resulting substance." },
    { term: "Coefficient", definition: "Number before formula." },
    { term: "Conservation", definition: "Atoms balanced." },
    { term: "State symbol", definition: "s/l/g/aq." },
  ],
  concepts: [
    {
      id: "chem12-u2-chemical-equations",
      title: "Chemical equations",
      skill: "Write and balance equations.",
      lesson: {
        sections: [
          {
            heading: "Reading equations",
            body: "Reactants → products. Coefficients show molecule counts; subscripts show atoms per molecule. Balancing means equal atoms of each element on both sides — mass is conserved.",
          },
          {
            heading: "Balancing method",
            body: "Balance one element at a time, save H and O for last. Example: $CH_4 + O_2 \\rightarrow CO_2 + H_2O$ balances to $CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$. Never change subscripts — only coefficients.",
          },
        ],
        keyFormulas: [
          { name: "Reactants", statement: "Left side." },
          { name: "Products", statement: "Right side." },
          { name: "Balance", statement: "Coefficients only." },
        ],
        workedExample: {
          problem: "Balance: $H_2 + O_2 \\rightarrow H_2O$",
          solution: "$2H_2 + O_2 \\rightarrow 2H_2O$ — 4 H and 2 O on each side.",
        },
      },
      questions: [
        {
          id: "chem12-u2-chemical-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a balanced equation, ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "coefficients differ"
                    },
                    {
                              "id": "b",
                              "text": "atoms of each element are equal on both sides"
                    },
                    {
                              "id": "c",
                              "text": "subscripts change"
                    },
                    {
                              "id": "d",
                              "text": "products < reactants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Balance",
                              "statement": "Atom conservation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A balanced equation has equal atoms of each element on both sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** atoms of each element are equal on both sides",
          "commonErrors": [
                    "Changing subscripts to balance."
          ]
},
        },
        {
          id: "chem12-u2-chemical-equations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Balance: $N_2 + H_2 \\rightarrow NH_3$. What coefficient goes before H2?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "2"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "4"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Balance",
                              "statement": "$N_2 + 3H_2 \\rightarrow 2NH_3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$N_2 + 3H_2 \\rightarrow 2NH_3$: 2 N and 6 H each side. H2 coefficient is 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** 3",
          "commonErrors": [
                    "Balancing N first and stopping."
          ]
},
        },
        {
          id: "chem12-u2-chemical-equations-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "$2H_2 + O_2 \\rightarrow 2H_2O$ — how many water molecules are produced?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "H2O",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Coefficient",
                              "statement": "2 before H2O = 2 molecules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Coefficient 2 → 2 H2O molecules.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Counting atoms instead of molecules."
          ]
},
        },
        {
          id: "chem12-u2-chemical-equations-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Balance $C_3H_8 + O_2 \\rightarrow CO_2 + H_2O$ and explain why you cannot change subscripts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Balance",
                              "statement": "Coefficients only."
                    },
                    {
                              "kind": "definition",
                              "name": "Subscript",
                              "statement": "Defines the compound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O$. Subscripts define which compound it is — changing $H_2O$ to $H_2O_2$ makes a different substance, so only coefficients may change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced correctly with subscript explanation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**$C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O$; subscripts fixed.**",
          "commonErrors": [
                    "Changing subscripts to balance."
          ]
},
        },
      ],
    },
  ],
};
