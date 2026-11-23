import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ech10-u7-lesson-7-2",
  code: "7-2",
  title: "Carboxylic Acids and Esters",
  goal: "I CAN describe the properties and reactions of carboxylic acids, write esterification equations and explain the uses of esters.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Organic Chemistry", "4CH1 carboxylic acids and esters"],
  
  vocabulary: [
    { term: "Carboxylic acid", definition: "Organic acid containing the –COOH functional group." },
    { term: "Ethanoic acid", definition: "CH₃COOH, the carboxylic acid in vinegar." },
    { term: "Weak acid", definition: "An acid that only partially ionises in water." },
    { term: "Ester", definition: "Organic compound formed from an alcohol and a carboxylic acid, containing –COO–." },
    { term: "Esterification", definition: "Reaction of an alcohol with a carboxylic acid to form an ester and water." },
    { term: "Conc. sulfuric acid", definition: "Catalyst/dehydrating agent used in esterification." },
  ],
  concepts: [
    {
      id: "ech10-u7-carboxylic-acids",
      title: "Carboxylic acids",
      skill: "Describe the –COOH group, the properties of ethanoic acid and its reactions with metals, carbonates and indicators.",
      lesson: {
        sections: [
          {
            heading: "The –COOH group",
            body: "**Carboxylic acids** contain the **carboxyl group –COOH**. The first member is **methanoic acid** HCOOH; the common one is **ethanoic acid** CH₃COOH (in vinegar). They are **weak acids** — they only partially ionise in water, unlike strong acids such as HCl which ionise completely. They still react with metals, carbonates and bases, but more slowly.",
          },
          {
            heading: "Reactions of carboxylic acids",
            body: "Ethanoic acid reacts with **metals** to give a salt + hydrogen: 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂. With **carbonates** it gives a salt + water + CO₂: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂ — the CO₂ turns limewater milky. With **bases** it forms salts and water. Its acidic nature makes vinegar useful for removing limescale (calcium carbonate).",
          },
        ],
        keyFormulas: [
          { name: "Carboxylic acid group", statement: "–COOH; e.g. ethanoic acid CH₃COOH" },
          { name: "With carbonate", statement: "acid + carbonate → salt + water + CO₂" },
          { name: "With metal", statement: "acid + metal → salt + H₂" },
        ],
        workedExample: {
          problem: "Write the equation for the reaction of ethanoic acid with sodium carbonate.",
          solution: "2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂. Check: Na 2 each side; C: 4 each side; H: 8 each side; O: 6 each side.",
        },
      },
      questions: [
        {
          id: "ech10-u7-carboxylic-acids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The functional group of carboxylic acids is…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "–OH"
                    },
                    {
                              "id": "b",
                              "text": "–COOH"
                    },
                    {
                              "id": "c",
                              "text": "C=C"
                    },
                    {
                              "id": "d",
                              "text": "–CHO"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Carboxyl group",
                              "statement": "–COOH defines carboxylic acids."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carboxylic acids contain –COOH.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) –COOH",
          "commonErrors": [
                    "Confusing with –OH of alcohols."
          ]
},
        },
        {
          id: "ech10-u7-carboxylic-acids-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give the name and formula of the carboxylic acid found in vinegar.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ethanoic acid",
                              "statement": "CH₃COOH in vinegar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethanoic acid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Formula CH₃COOH.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Ethanoic acid, CH₃COOH",
          "commonErrors": [
                    "Writing CH₃CH₂OH — that is ethanol."
          ]
},
        },
        {
          id: "ech10-u7-carboxylic-acids-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why ethanoic acid is described as a weak acid even though it reacts with carbonates.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Weak acid",
                              "statement": "Partially ionises in water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A weak acid only partially ionises — few H⁺ ions in solution.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The few H⁺ ions are still enough to react with carbonates and metals.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It is 'weak' because of incomplete ionisation, not because it is unreactive.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Partial ionisation → few H⁺ but still acidic enough to react.",
          "commonErrors": [
                    "Saying weak acids 'don't react' — they react, just less completely."
          ]
},
        },
        {
          id: "ech10-u7-carboxylic-acids-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Ethanoic acid is added to sodium carbonate powder in a test tube.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the balanced equation for the reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the observation and explain how it confirms the acid.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Acid + carbonate test",
                              "statement": "Salt + water + CO₂; CO₂ turns limewater milky."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Effervescence — bubbles of CO₂ gas.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The gas turns limewater milky, confirming CO₂.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "CO₂ release proves an acid reacted with a carbonate.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂ (b) effervescence; limewater milky.",
          "commonErrors": [
                    "Unbalanced Na or charge — use 2 CH₃COOH for 2 Na."
          ]
},
        },
        {
          id: "ech10-u7-carboxylic-acids-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the reactions of ethanoic acid and hydrochloric acid with magnesium ribbon.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the equation for each reaction.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State one similarity and one difference in the observations.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Weak vs strong acid",
                              "statement": "Both give salt + H₂; rates differ."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "2HCl + Mg → MgCl₂ + H₂.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Similarity: both produce hydrogen gas and a salt.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Difference: HCl reacts faster/more vigorously (strong acid).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ethanoic acid reacts more slowly because it is weak/partially ionised.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) HCl→MgCl₂+H₂; ethanoic→magnesium ethanoate+H₂ (b) same products; HCl faster.",
          "commonErrors": [
                    "Saying ethanoic acid doesn't react with Mg — it does, slower."
          ]
},
        },
        {
          id: "ech10-u7-carboxylic-acids-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A kettle has limescale (calcium carbonate) that is removed using vinegar.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain, using an equation, why vinegar removes limescale.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "State the products of the reaction.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why a stronger acid such as hydrochloric acid would also work but is less suitable for a kettle.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Acid + carbonate",
                              "statement": "Acid dissolves carbonate as CO₂; weak acid is safer."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Vinegar contains ethanoic acid which reacts with CaCO₃.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "2CH₃COOH + CaCO₃ → (CH₃COO)₂Ca + H₂O + CO₂.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "The insoluble limescale is converted to soluble calcium ethanoate and CO₂ gas.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Calcium ethanoate, water and carbon dioxide.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "HCl also reacts with CaCO₃ and would remove limescale.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "But HCl is corrosive and could damage the kettle metal.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Ethanoic acid is weak and safe enough for household use.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "It is also food-safe, unlike strong mineral acids.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) 2CH₃COOH+CaCO₃→(CH₃COO)₂Ca+H₂O+CO₂ (b) calcium ethanoate+water+CO₂ (c) HCl corrosive; vinegar safe/weak.",
          "commonErrors": [
                    "Forgetting CO₂ is the gas that carries limescale away."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u7-esters",
      title: "Esters and esterification",
      skill: "Write esterification equations, name esters and describe their uses as flavourings and solvents.",
      lesson: {
        sections: [
          {
            heading: "Esterification",
            body: "An **ester** forms when an **alcohol** reacts with a **carboxylic acid** in the presence of concentrated sulfuric acid as catalyst (and dehydrating agent). The reaction is **reversible**. General equation: alcohol + carboxylic acid → ester + water. Example: ethanol + ethanoic acid → ethyl ethanoate + water.",
          },
          {
            heading: "Naming and uses of esters",
            body: "The ester name combines the **alcohol's alkyl group** first and the **acid's name minus 'ic acid' plus 'ate'** second: methanol + ethanoic acid → **methyl ethanoate**; ethanol + propanoic acid → **ethyl propanoate**. Esters have pleasant fruity smells and are used as **flavourings and perfumes**, and as **solvents** in paints, inks and nail varnish because they evaporate easily.",
          },
        ],
        keyFormulas: [
          { name: "Esterification", statement: "alcohol + carboxylic acid → ester + water (conc. H₂SO₄ catalyst)" },
          { name: "Example", statement: "C₂H₅OH + CH₃COOH → CH₃COOC₂H₅ + H₂O" },
          { name: "Naming", statement: "alcohol alkyl + acid (minus -ic) + -ate" },
        ],
        workedExample: {
          problem: "Write the equation and name the ester formed from methanol and ethanoic acid.",
          solution: "CH₃OH + CH₃COOH → CH₃COOCH₃ + H₂O. Name: methyl ethanoate (methanol gives 'methyl', ethanoic acid gives 'ethanoate').",
        },
      },
      questions: [
        {
          id: "ech10-u7-esters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ester is produced by reacting…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "two alcohols"
                    },
                    {
                              "id": "b",
                              "text": "an alcohol and a carboxylic acid"
                    },
                    {
                              "id": "c",
                              "text": "an alkane and an alkene"
                    },
                    {
                              "id": "d",
                              "text": "two carboxylic acids"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Esterification",
                              "statement": "Alcohol + carboxylic acid → ester + water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Esterification requires an alcohol and a carboxylic acid.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) an alcohol and a carboxylic acid",
          "commonErrors": [
                    "Thinking two acids or two alcohols make an ester."
          ]
},
        },
        {
          id: "ech10-u7-esters-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the ester formed from ethanol and ethanoic acid.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Ester naming",
                              "statement": "Alkyl from alcohol + 'ate' from acid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethanol → 'ethyl' prefix.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Ethanoic acid → 'ethanoate' suffix.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Ethyl ethanoate",
          "commonErrors": [
                    "Writing 'ethanol ethanoate' — use the alkyl name 'ethyl'."
          ]
},
        },
        {
          id: "ech10-u7-esters-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the esterification reaction, including the catalyst and the products.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Esterification",
                              "statement": "Alcohol + carboxylic acid → ester + water; conc. H₂SO₄."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An alcohol reacts with a carboxylic acid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Concentrated sulfuric acid acts as catalyst and dehydrating agent.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The products are an ester and water; the reaction is reversible.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Alcohol + acid → ester + water; H₂SO₄ catalyst; reversible.",
          "commonErrors": [
                    "Omitting water as a product — esterification always produces water."
          ]
},
        },
        {
          id: "ech10-u7-esters-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Ethanol is reacted with propanoic acid under reflux with concentrated sulfuric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the word equation and name the ester.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the role of the concentrated sulfuric acid.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Esterification equation",
                              "statement": "Alcohol + acid → ester + water."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ethanol + propanoic acid → ethyl propanoate + water.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ester name: ethyl propanoate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It is a catalyst, speeding the reaction without being used up.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It also absorbs water, shifting the reversible reaction towards the ester.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) ethanol + propanoic acid → ethyl propanoate + water (b) catalyst + removes water.",
          "commonErrors": [
                    "Naming 'propyl ethanoate' — check which reactant is the alcohol."
          ]
},
        },
        {
          id: "ech10-u7-esters-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Esters are used in perfumes, flavourings and solvents.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two uses of esters.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why esters have pleasant smells and are used in perfumes.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why esters are used as solvents in paints and nail varnish.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Ester uses",
                              "statement": "Volatile pleasant-smelling solvents."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Any two of: food flavourings, perfumes/fragrances, solvents.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Esters are volatile — they evaporate and reach the nose.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Many have sweet fruity odours suitable for perfumes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Esters dissolve many organic substances (like paints).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "They evaporate quickly, leaving the solute behind as the varnish dries.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) flavourings/perfumes/solvents (b) volatile + fruity smell (c) dissolve organics + evaporate.",
          "commonErrors": [
                    "Saying esters are 'sticky' — they are volatile solvents."
          ]
},
        },
        {
          id: "ech10-u7-esters-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A perfume manufacturer wants to make a compound with a pineapple-like smell.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how to produce an ester by esterification, including conditions.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write the general equation for esterification.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two properties of esters that make them suitable for perfumes.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why the reaction is carried out under reflux.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Ester manufacture",
                              "statement": "Alcohol + acid, H₂SO₄ catalyst, reflux, reversible."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mix an alcohol and a carboxylic acid with concentrated sulfuric acid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Heat under reflux to speed the reaction without losing vapours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "The ester and water form; water is removed to drive equilibrium forward.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "alcohol + carboxylic acid → ester + water.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Volatile — evaporates to be smelled.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pleasant fruity odour.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Reflux = condenser returns vapour to the flask.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Ethanol and the acid are volatile and would be lost by distillation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Reflux keeps reactants in the flask while heating speeds the reaction.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) alcohol+acid+H₂SO₄, reflux, remove water (b) alcohol+acid→ester+water (c) volatile, pleasant smell (d) prevents loss of volatiles.",
          "commonErrors": [
                    "Open heating — volatiles would escape; reflux is essential."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u7-esters-notes",
      title: "Carboxylic acids and esters — notes",
      summary: "Carboxylic acids have –COOH, are weak acids, react with metals/carbonates (salt+H₂O+CO₂). Esters form from alcohol+acid with H₂SO₄ → used in perfumes/flavours/solvents.",
      sections: [
        { heading: "Carboxylic acids", body: "–COOH group; ethanoic acid CH₃COOH in vinegar. Weak acid — partial ionisation. Reactions: +metal→salt+H₂; +carbonate→salt+water+CO₂; +base→salt+water." },
        { heading: "Esterification", body: "Alcohol + carboxylic acid → ester + water (conc. H₂SO₄ catalyst/dehydrating agent, reversible). Naming: alcohol alkyl + acid-ate." },
        { heading: "Ester uses", body: "Volatile, pleasant smells → perfumes/flavourings; good solvents → paints/varnishes. Evaporate easily." },
      ],
    },
  ],
};
