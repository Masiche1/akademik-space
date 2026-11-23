import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apch-u2-lesson-2-1",
  code: "2-1",
  title: "Reaction Types and Stoichiometry",
  goal: "I CAN classify reactions and solve stoichiometric problems.",
  standards: ["RXN-1"],
  vocabulary: [
    { term: "Synthesis", definition: "$A + B \\to AB$ — combine into one product." },
    { term: "Decomposition", definition: "$AB \\to A + B$ — one reactant splits." },
    { term: "Combustion", definition: "Hydrocarbon + $O_2 \\to CO_2 + H_2O$ — releases energy." },
    { term: "Single replacement", definition: "$A + BC \\to AC + B$." },
    { term: "Double replacement", definition: "$AB + CD \\to AD + CB$ — often forms precipitate/gas/water." },
    { term: "Mole ratio", definition: "Coefficients in a balanced equation give mole proportions." },
  ],
  concepts: [
    {
      id: "apch-u2-reaction-types-stoichiometry",
      title: "Reactions and stoichiometry",
      skill: "Balance equations and use mole ratios to compute quantities.",
      lesson: {
        sections: [
          {
            heading: "Reaction types",
            body: "Classify by pattern: **synthesis** (many-to-one), **decomposition** (one-to-many), **combustion** (fuel + $O_2$), **single/double replacement** (swap partners). Double replacements often produce a precipitate, gas, or water — the driving force.",
          },
          {
            heading: "Stoichiometry",
            body: "Balanced equations give **mole ratios** from coefficients. Convert grams $\\leftrightarrow$ moles via molar mass, use ratios to find unknown quantities, then convert back. The **limiting reagent** runs out first and determines actual yield; percent yield = actual/theoretical $\\times 100\\%$.",
          },
        ],
        keyFormulas: [
          { name: "Mole ratio", statement: "Coefficients = mole proportions" },
          { name: "Percent yield", statement: "$\\frac{\\text{actual}}{\\text{theoretical}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "$2H_2 + O_2 \\to 2H_2O$. How many moles of $O_2$ react with $6$ mol $H_2$?",
          solution: "Ratio $H_2 : O_2 = 2:1$, so $6$ mol $H_2$ needs $6 \\times \\frac{1}{2} = 3$ mol $O_2$.",
        },
      },
      questions: [
        {
          id: "apch-u2-reaction-types-stoichiometry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$CH_4 + 2O_2 \\to CO_2 + 2H_2O$ is a ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "decomposition"
                    },
                    {
                              "id": "b",
                              "text": "combustion"
                    },
                    {
                              "id": "c",
                              "text": "single replacement"
                    },
                    {
                              "id": "d",
                              "text": "synthesis"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Combustion",
                              "statement": "Hydrocarbon burning in oxygen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Methane reacting with $O_2$ to give $CO_2 + H_2O$ is combustion.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Combustion",
          "commonErrors": [
                    "Classifying by number of reactants instead of the reaction pattern."
          ]
},
        },
        {
          id: "apch-u2-reaction-types-stoichiometry-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In $2H_2 + O_2 \\to 2H_2O$, how many moles of water form from $4$ mol $H_2$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2$"
                    },
                    {
                              "id": "b",
                              "text": "$4$"
                    },
                    {
                              "id": "c",
                              "text": "$8$"
                    },
                    {
                              "id": "d",
                              "text": "$1$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Mole ratio",
                              "statement": "$H_2 : H_2O = 2:2 = 1:1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$4$ mol $H_2$ produces $4$ mol $H_2O$ (1:1 ratio).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$4$ mol",
          "commonErrors": [
                    "Using the $O_2$ coefficient or misreading the ratio."
          ]
},
        },
        {
          id: "apch-u2-reaction-types-stoichiometry-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Molar mass of $H_2O = 18$ g/mol. How many grams of water form from $2$ mol $H_2$ (complete reaction)? Enter grams.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Grams",
                              "answer": 36
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Stoichiometry",
                              "statement": "2 mol $H_2 \\to 2$ mol $H_2O$; $2 \\times 18$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2$ mol $H_2O \\times 18$ g/mol $= 36$ g.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$36$ g.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$36$ g",
          "commonErrors": [
                    "Using $O_2$'s molar mass or halving the moles."
          ]
},
        },
        {
          id: "apch-u2-reaction-types-stoichiometry-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain what a limiting reagent is and how it affects percent yield.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Limiting reagent",
                              "statement": "Runs out first, caps product amount."
                    },
                    {
                              "kind": "concept",
                              "name": "Percent yield",
                              "statement": "Actual/theoretical $\\times 100$."
                    },
                    {
                              "kind": "concept",
                              "name": "Excess reagent",
                              "statement": "Left over after reaction completes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The limiting reagent is consumed first — it determines the maximum (theoretical) product via mole ratios.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The other reagent is in excess and remains partially unreacted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Actual yield is usually below theoretical due to side reactions, losses, or incomplete reaction — percent yield quantifies this.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Limiting reagent caps theoretical yield; percent yield measures efficiency",
          "commonErrors": [
                    "Confusing limiting and excess reagents."
          ]
},
        },
      ],
    },
  ],
};
