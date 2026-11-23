import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ech11-u8-lesson-8-3",
  code: "8-3",
  title: "Salts and Their Preparation",
  goal: "I CAN describe methods for preparing soluble and insoluble salts and apply solubility rules to predict precipitates.",
  standards: ["4CH1 2.16", "4CH1 2.17", "4CH1 2.18", "4CH1 2.19"],
  
  vocabulary: [
    { term: "Soluble salt", definition: "A salt that dissolves in water, e.g. NaCl, CuSO$_4$ (most salts are soluble)." },
    { term: "Insoluble salt", definition: "A salt that does not dissolve in water and forms a precipitate, e.g. BaSO$_4$, AgCl." },
    { term: "Precipitate", definition: "An insoluble solid formed when two solutions are mixed." },
    { term: "Crystallisation", definition: "Evaporating water from a solution so dissolved solid forms crystals." },
    { term: "Filtration", definition: "Separating an insoluble solid from a liquid by passing through filter paper." },
    { term: "Solubility rules", definition: "Guidelines predicting which salts dissolve: all nitrates soluble; most chlorides soluble except AgCl, PbCl$_2$; most carbonates insoluble except Group 1; most hydroxides insoluble except Group 1 and Ba." },
  ],
  concepts: [
    {
      id: "ech11-u8-preparing-soluble-salts",
      title: "Preparing soluble salts",
      skill: "Describe the methods used to prepare soluble salts from acids and choose the correct method for different reactants.",
      lesson: {
        sections: [
          {
            heading: "Three methods",
            body: "Soluble salts can be prepared by reacting an acid with:\n\n1. **An insoluble solid** (metal, metal oxide, metal hydroxide or carbonate): use the **excess solid method** — add the solid to excess acid, warm, filter off leftover solid, then crystallise the filtrate. E.g. CuO + H$_2$SO$_4$ $\\rightarrow$ CuSO$_4$ + H$_2$O.\n\n2. **An insoluble carbonate**: same excess-solid method. E.g. CaCO$_3$ + 2HCl.\n\n3. **A soluble alkali** (NaOH, KOH): cannot use excess solid — instead **titrate** with an indicator to find the exact end point, then evaporate and crystallise. E.g. NaOH + HCl $\\rightarrow$ NaCl + H$_2$O.",
          },
          {
            heading: "Crystallisation",
            body: "After filtration (or titration), the salt solution is heated gently to evaporate some water, then left to cool. As the solution cools, crystals of the salt form because the solubility decreases. The crystals are filtered and dried between filter papers. Very soluble salts like NaCl may need full evaporation instead.",
          },
          {
            heading: "Why the methods differ",
            body: "With an insoluble solid you can simply add excess solid and filter — the leftover solid guarantees all the acid has reacted. With a soluble alkali there is nothing to filter, so the exact volume of acid must be found using an indicator. Using excess acid with a soluble alkali would leave free acid contaminating the crystals.",
          },
        ],
        keyFormulas: [
          { name: "Soluble salt prep", statement: "acid + excess insoluble solid $\\rightarrow$ filter $\\rightarrow$ crystallise" },
          { name: "Alkali method", statement: "acid + alkali, titrate to indicator end point, evaporate, crystallise" },
          { name: "Crystallisation", statement: "cool saturated solution → crystals form" },
        ],
        workedExample: {
          problem: "Describe how you would prepare pure dry crystals of copper(II) sulfate starting from copper(II) oxide and dilute sulfuric acid.",
          solution: "Add excess black CuO powder to warm dilute H$_2$SO$_4$ and stir until no more dissolves. Filter off the excess solid. Heat the blue filtrate to evaporate some water, then cool. Filter and dry the blue CuSO$_4$ crystals. Equation: CuO + H$_2$SO$_4$ $\\rightarrow$ CuSO$_4$ + H$_2$O.",
        },
      },
      questions: [
        {
          id: "ech11-u8-preparing-soluble-salts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method is used to prepare copper(II) sulfate from copper(II) oxide and sulfuric acid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Titration with an indicator"
                    },
                    {
                              "id": "b",
                              "text": "Add excess solid, filter, then crystallise"
                    },
                    {
                              "id": "c",
                              "text": "Precipitation by mixing two solutions"
                    },
                    {
                              "id": "d",
                              "text": "Electrolysis of the mixture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Salt preparation",
                              "statement": "Insoluble solid + excess acid → filter → crystallise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CuO is insoluble, so excess-solid method is used.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) add excess solid, filter, crystallise",
          "commonErrors": [
                    "Choosing titration — that is for soluble alkali reactants."
          ]
},
        },
        {
          id: "ech11-u8-preparing-soluble-salts-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List the steps, in order, for preparing crystals of a soluble salt from an insoluble solid and an acid.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Salt preparation",
                              "statement": "Add excess solid to acid, warm, filter, crystallise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add the insoluble solid to excess acid (warm and stir).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Filter off leftover solid, then heat filtrate to evaporate and cool to crystallise.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "excess solid + acid → filter → evaporate → cool/crystallise → dry.",
          "commonErrors": [
                    "Crystallising before filtering — the leftover solid would contaminate crystals."
          ]
},
        },
        {
          id: "ech11-u8-preparing-soluble-salts-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why excess insoluble solid is used when preparing a salt from an acid and an insoluble solid.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Excess solid method",
                              "statement": "Excess solid guarantees all acid reacts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The salt solution must not contain leftover acid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Adding excess solid ensures the acid is completely used up.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The unreacted solid is then filtered off, leaving pure salt solution.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Excess solid ensures all acid reacts; leftover solid is filtered off.",
          "commonErrors": [
                    "Saying excess solid 'speeds up' the reaction — it ensures completeness."
          ]
},
        },
        {
          id: "ech11-u8-preparing-soluble-salts-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Sodium chloride is prepared by reacting sodium hydroxide solution with dilute hydrochloric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why an indicator is needed in this preparation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State what happens at the end point and why it matters.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe how the salt crystals are obtained after the reaction.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Acid + alkali salt prep",
                              "statement": "Use indicator to find exact end point; both reactants colourless."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Both NaOH and HCl solutions are colourless, so no visible change shows when reaction is complete.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "An indicator shows the end point where acid and alkali exactly neutralise.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "At the end point the indicator changes colour (e.g. phenolphthalein pink→colourless).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This ensures neither reactant is in excess, so the crystals are pure NaCl.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaporate water to dryness (or partly then cool) and collect NaCl crystals.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) colourless reactants — need indicator (b) colour change = exact neutralisation (c) evaporate to dryness.",
          "commonErrors": [
                    "Using excess acid or alkali — contaminates the salt."
          ]
},
        },
        {
          id: "ech11-u8-preparing-soluble-salts-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two methods are used to prepare soluble salts: (A) excess insoluble solid + acid, then filter; (B) acid + soluble alkali with indicator.",
          parts: [
          {
                    "label": "a",
                    "prompt": "For each method, state a suitable pair of reactants.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why method B needs an indicator but method A does not.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest why method A cannot be used when the base is a soluble alkali.",
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
                              "name": "Choosing a salt preparation method",
                              "statement": "Insoluble base → excess solid; soluble alkali → indicator titration."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A: e.g. CuO + H$_2$SO$_4$ or CaCO$_3$ + HCl.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "B: e.g. NaOH + HCl or KOH + HNO$_3$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "In B both reactants are soluble and colourless, so no visible end point.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "In A the excess solid can be filtered off, showing when acid has reacted.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "A soluble alkali cannot be filtered off, so excess would remain in the product.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "An indicator is needed to add exactly the right amount of acid.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) A: insoluble base + acid; B: alkali + acid (b) B has no filterable excess; A's excess solid filters (c) soluble alkali can't be removed by filtration.",
          "commonErrors": [
                    "Thinking excess alkali can be filtered — it dissolves."
          ]
},
        },
        {
          id: "ech11-u8-preparing-soluble-salts-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student is asked to prepare pure, dry zinc sulfate crystals starting from zinc granules and dilute sulfuric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State one safety precaution when reacting a metal with an acid.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Describe the full procedure to obtain pure dry crystals, including how you know when to stop adding zinc.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a balanced symbol equation for the reaction.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how the crystals are dried.",
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
                              "name": "Preparing ZnSO$_4$",
                              "statement": "Zn + H$_2$SO$_4$; add excess Zn until fizzing stops; filter; crystallise."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Wear eye protection / work in a fume cupboard / handle acid carefully (hydrogen flammable).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Add zinc granules to warm dilute H$_2$SO$_4$ and stir.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Keep adding zinc until effervescence stops (excess zinc remains).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Filter off excess zinc; heat filtrate to evaporate some water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cool to crystallise, then filter crystals.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Zn + H$_2$SO$_4$ $\\rightarrow$ ZnSO$_4$ + H$_2$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Press crystals between filter papers, or dry in a warm oven below decomposition temperature.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) eye protection (b) excess Zn until no fizz, filter, evaporate, cool (c) Zn + H$_2$SO$_4$ $\\rightarrow$ ZnSO$_4$ + H$_2$ (d) filter papers/warm oven.",
          "commonErrors": [
                    "Adding measured amount of zinc instead of excess — acid would remain."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u8-precipitation-solubility",
      title: "Precipitation and solubility rules",
      skill: "Apply solubility rules to predict whether salts dissolve and write equations for precipitation reactions.",
      lesson: {
        sections: [
          {
            heading: "Solubility rules",
            body: "Use these rules to predict whether a salt is soluble:\n- **All nitrates** are soluble.\n- **All Group 1 (alkali metal) salts** and ammonium salts are soluble.\n- **Chlorides:** all soluble except AgCl and PbCl$_2$.\n- **Sulfates:** all soluble except BaSO$_4$, PbSO$_4$ (CaSO$_4$ is slightly soluble).\n- **Carbonates:** only Group 1 and ammonium carbonates are soluble; most others (e.g. CaCO$_3$, CuCO$_3$) are insoluble.\n- **Hydroxides:** only Group 1 and Ba(OH)$_2$ are soluble; most others (e.g. Cu(OH)$_2$, Fe(OH)$_3$) are insoluble.",
          },
          {
            heading: "Precipitation reactions",
            body: "Mixing two soluble solutions can produce an **insoluble salt (precipitate)**:\n\n$$\\text{BaCl}_2 + \\text{Na}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4\\downarrow + 2\\text{NaCl}$$\n\nBarium sulfate is insoluble and appears as a white precipitate; the sodium and chloride ions stay in solution (**spectator ions**). The net ionic equation is:\n\n$$\\text{Ba}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{BaSO}_4$$\n\nPrecipitation is used to prepare insoluble salts, to test for ions (e.g. AgNO$_3$ tests for halides), and in water treatment to remove ions.",
          },
          {
            heading: "Identifying ions",
            body: "Precipitation tests identify ions in solution:\n- **Cl$^-$:** add AgNO$_3$ → white precipitate AgCl (dissolves in ammonia).\n- **SO$_4^{2-}$:** add BaCl$_2$ or Ba(NO$_3$)$_2$ → white precipitate BaSO$_4$ (insoluble in acid).\n- **CO$_3^{2-}$:** add acid → effervescence; or add CaCl$_2$ → white CaCO$_3$ precipitate, which dissolves in acid with CO$_2$.",
          },
        ],
        keyFormulas: [
          { name: "Solubility rules", statement: "nitrates & Group 1 soluble; AgCl/PbCl$_2$ insoluble; BaSO$_4$/PbSO$_4$ insoluble; most carbonates & hydroxides insoluble" },
          { name: "Precipitation", statement: "two soluble solutions → insoluble salt ($\\downarrow$) + soluble salt" },
          { name: "Net ionic", statement: "Ba$^{2+}$ + SO$_4^{2-}$ $\\rightarrow$ BaSO$_4$" },
        ],
        workedExample: {
          problem: "Solutions of potassium sulfate and barium chloride are mixed. Predict the observation and write a balanced symbol equation plus the ionic equation.",
          solution: "A white precipitate of barium sulfate forms. K$_2$SO$_4$ + BaCl$_2$ $\\rightarrow$ BaSO$_4\\downarrow$ + 2KCl. Ionic equation: Ba$^{2+}$ + SO$_4^{2-}$ $\\rightarrow$ BaSO$_4$.",
        },
      },
      questions: [
        {
          id: "ech11-u8-precipitation-solubility-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these salts is insoluble in water?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "NaCl"
                    },
                    {
                              "id": "b",
                              "text": "BaSO$_4$"
                    },
                    {
                              "id": "c",
                              "text": "KNO$_3$"
                    },
                    {
                              "id": "d",
                              "text": "Cu(NO$_3$)$_2$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Solubility rules",
                              "statement": "Barium sulfate is insoluble; nitrates and Group 1 salts are soluble."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "BaSO$_4$ is a classic insoluble salt; the others are soluble.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) BaSO$_4$",
          "commonErrors": [
                    "Choosing AgCl-type answers not offered — all nitrates are soluble."
          ]
},
        },
        {
          id: "ech11-u8-precipitation-solubility-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the solubility of sodium carbonate and of copper(II) carbonate, referring to the solubility rules.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Solubility rules",
                              "statement": "Group 1 carbonates are soluble; most other carbonates are insoluble."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Na$_2$CO$_3$ is soluble because sodium is a Group 1 metal.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "CuCO$_3$ is insoluble because most carbonates are insoluble except Group 1/ammonium.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Na$_2$CO$_3$ soluble (Group 1); CuCO$_3$ insoluble.",
          "commonErrors": [
                    "Assuming all carbonates are insoluble — Group 1 carbonates dissolve."
          ]
},
        },
        {
          id: "ech11-u8-precipitation-solubility-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens when barium chloride solution is added to sodium sulfate solution, and name the precipitate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Precipitation",
                              "statement": "BaCl$_2$ + Na$_2$SO$_4$ $\\rightarrow$ BaSO$_4\\downarrow$ + 2NaCl"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Barium sulfate is insoluble according to the solubility rules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A white precipitate of BaSO$_4$ forms.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Sodium and chloride ions remain in solution as spectator ions.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "White BaSO$_4$ precipitate forms.",
          "commonErrors": [
                    "Saying all four ions form precipitates — only BaSO$_4$ is insoluble."
          ]
},
        },
        {
          id: "ech11-u8-precipitation-solubility-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Solutions of lead(II) nitrate and potassium iodide are mixed in a beaker.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict the observation and give the precipitate formed.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write a balanced symbol equation for the reaction.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State which ions are spectator ions.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Solubility rules",
                              "statement": "Most iodides are soluble except PbI$_2$ and AgI."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A yellow precipitate of lead(II) iodide forms.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pb(NO$_3$)$_2$ + 2KI $\\rightarrow$ PbI$_2\\downarrow$ + 2KNO$_3$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "K$^+$ and NO$_3^-$ are spectator ions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) yellow PbI$_2$ precipitate (b) Pb(NO$_3$)$_2$ + 2KI $\\rightarrow$ PbI$_2$ + 2KNO$_3$ (c) K$^+$, NO$_3^-$.",
          "commonErrors": [
                    "Writing PbI instead of PbI$_2$ — lead(II) needs two iodides."
          ]
},
        },
        {
          id: "ech11-u8-precipitation-solubility-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An unknown colourless solution X is tested by adding silver nitrate solution, producing a white precipitate.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the ion present in X and name the precipitate.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write the ionic equation for the precipitation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one other test reagent that could confirm the identity of X.",
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
                              "name": "Halide test",
                              "statement": "AgNO$_3$ + Cl$^-$ $\\rightarrow$ white AgCl precipitate."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "X contains chloride ions (Cl$^-$).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The precipitate is silver chloride, AgCl.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ag$^+$ + Cl$^-$ $\\rightarrow$ AgCl.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Add dilute ammonia: AgCl dissolves; or add Ba(NO$_3$)$_2$ to check for sulfate (no precipitate means not sulfate); or acidify and test.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Cl$^-$; AgCl (b) Ag$^+$ + Cl$^-$ $\\rightarrow$ AgCl (c) dilute ammonia dissolves AgCl.",
          "commonErrors": [
                    "Identifying bromide/iodide — those give cream/yellow precipitates, not white."
          ]
},
        },
        {
          id: "ech11-u8-precipitation-solubility-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Three colourless solutions, P, Q and R, each contain one of NaCl, Na$_2$SO$_4$ and Na$_2$CO$_3$. A student must identify each.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe a test using dilute hydrochloric acid and state the result for each possible solution.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe a test using barium chloride solution and state the results.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Combine the results to show how all three solutions can be identified.",
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
                              "name": "Identifying sodium salts",
                              "statement": "Carbonate gives CO$_2$ with acid; sulfate gives BaSO$_4$ with Ba$^{2+}$; chloride gives AgCl with Ag$^+$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Add dilute HCl: Na$_2$CO$_3$ fizzes (CO$_2$); NaCl and Na$_2$SO$_4$ no reaction.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Limewater turns milky confirming CO$_2$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Add BaCl$_2$: Na$_2$SO$_4$ gives white BaSO$_4$ precipitate; NaCl and Na$_2$CO$_3$ give none (BaCO$_3$ also precipitates — dissolve in acid to distinguish).",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Solution that fizzes with acid = Na$_2$CO$_3$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Of remaining two, white precipitate with BaCl$_2$ = Na$_2$SO$_4$; no precipitate = NaCl.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) acid: only carbonate fizzes (b) BaCl$_2$: sulfate (and carbonate) precipitate (c) combine to identify all three.",
          "commonErrors": [
                    "Forgetting BaCO$_3$ also precipitates — must use acid test first or dissolve precipitate in acid."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u8-salts-notes",
      title: "Salts and preparation — notes",
      summary: "Soluble salts: excess insoluble solid + acid → filter → crystallise; alkali + acid → indicator → evaporate. Insoluble salts: precipitation from two solutions.",
      sections: [
        { heading: "Choosing the method", body: "Insoluble solid/metal/carbonate → excess solid method (filter off excess). Soluble alkali → indicator end point (exact volumes)." },
        { heading: "Solubility quick rules", body: "All nitrates & Group 1 soluble. Chlorides: except AgCl, PbCl$_2$. Sulfates: except BaSO$_4$, PbSO$_4$. Carbonates/hydroxides: mostly insoluble (Group 1 soluble)." },
        { heading: "Precipitation", body: "Mix two solutions → insoluble salt $\\downarrow$. Net ionic equation drops spectator ions. Used in ion tests (AgNO$_3$ for Cl$^-$, Ba$^{2+}$ for SO$_4^{2-}$)." },
      ],
    },
  ],
};
