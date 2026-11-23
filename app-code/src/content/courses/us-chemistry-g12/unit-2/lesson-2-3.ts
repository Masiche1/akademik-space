import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "chem12-u2-lesson-2-3",
  code: "2-3",
  title: "Types of Reactions",
  goal: "I CAN identify and predict types of chemical reactions.",
  standards: ["HS-PS1-2", "HS-PS1-7"],
  vocabulary: [
    { term: "Synthesis", definition: "A + B → AB." },
    { term: "Decomposition", definition: "AB → A + B." },
    { term: "Combustion", definition: "Fuel + O2 → CO2 + H2O." },
    { term: "Single replacement", definition: "A + BC → AC + B." },
    { term: "Double replacement", definition: "AB + CD → AD + CB." },
  ],
  concepts: [
    {
      id: "chem12-u2-reaction-types",
      title: "Types of reactions",
      skill: "Classify reactions by pattern.",
      lesson: {
        sections: [
          {
            heading: "Five main types",
            body: "Synthesis: $2H_2 + O_2 \\rightarrow 2H_2O$ (combine). Decomposition: $2H_2O \\rightarrow 2H_2 + O_2$ (split). Combustion: fuel + oxygen → CO2 + water. Single/double replacement: elements/ions swap partners.",
          },
          {
            heading: "Recognizing types",
            body: "Count reactants/products to identify: 2→1 = synthesis, 1→2 = decomposition, O2 reactant with CO2/H2O products = combustion. Replacements involve swapping partners between compounds.",
          },
        ],
        keyFormulas: [
          { name: "Synthesis", statement: "2 → 1." },
          { name: "Decomposition", statement: "1 → 2." },
          { name: "Combustion", statement: "O2 → CO2 + H2O." },
        ],
        workedExample: {
          problem: "Classify: $2KClO_3 \\rightarrow 2KCl + 3O_2$",
          solution: "Decomposition — one reactant splits into multiple products.",
        },
      },
      questions: [
        {
          id: "chem12-u2-reaction-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A synthesis reaction has ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 reactant"
                    },
                    {
                              "id": "b",
                              "text": "multiple reactants forming one product"
                    },
                    {
                              "id": "c",
                              "text": "only gases"
                    },
                    {
                              "id": "d",
                              "text": "no products"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis",
                              "statement": "Combine into one product."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Synthesis combines multiple reactants into a single product.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** multiple reactants forming one product",
          "commonErrors": [
                    "Confusing with decomposition."
          ]
},
        },
        {
          id: "chem12-u2-reaction-types-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify: $CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "synthesis"
                    },
                    {
                              "id": "b",
                              "text": "combustion"
                    },
                    {
                              "id": "c",
                              "text": "decomposition"
                    },
                    {
                              "id": "d",
                              "text": "double replacement"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Combustion",
                              "statement": "Fuel + O2 → CO2 + H2O."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Methane burning with O2 producing CO2 and H2O = combustion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** combustion",
          "commonErrors": [
                    "Missing the O2 signature."
          ]
},
        },
        {
          id: "chem12-u2-reaction-types-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 5 main types of chemical reactions. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Types",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Synthesis, decomposition, combustion, single, double."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 types.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Missing replacement types."
          ]
},
        },
        {
          id: "chem12-u2-reaction-types-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Classify each: (a) $2Na + Cl_2 \\rightarrow 2NaCl$ (b) $CaCO_3 \\rightarrow CaO + CO_2$. Explain your reasoning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis",
                              "statement": "2→1."
                    },
                    {
                              "kind": "definition",
                              "name": "Decomposition",
                              "statement": "1→2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Synthesis — two reactants combine into one product. (b) Decomposition — one reactant splits into two products.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both classified with correct reasoning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a) synthesis; (b) decomposition.**",
          "commonErrors": [
                    "Swapping the classifications."
          ]
},
        },
      ],
    },
  ],
};
