import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ech11-u8-lesson-8-2",
  code: "8-2",
  title: "Reactions of Acids",
  goal: "I CAN write equations for the reactions of acids with metals, carbonates, metal oxides, hydroxides and alkalis, and describe their uses.",
  standards: ["4CH1 2.13", "4CH1 2.14", "4CH1 2.15", "4CH1 2.22"],
  
  vocabulary: [
    { term: "Hydrogen gas", definition: "H$_2$, produced when a reactive metal reacts with an acid; tested with a lighted splint (pop)." },
    { term: "Carbonate", definition: "A compound containing CO$_3^{2-}$, e.g. calcium carbonate in limestone and marble." },
    { term: "Limewater", definition: "A solution of calcium hydroxide used to test for carbon dioxide — turns milky with CO$_2$." },
    { term: "Salt", definition: "An ionic compound formed when the replaceable H$^+$ of an acid is replaced by a metal or ammonium ion." },
    { term: "Metal oxide", definition: "A compound of a metal and oxygen; many are basic and react with acids to form salts." },
    { term: "Effervescence", definition: "The production of gas bubbles in a liquid, seen as fizzing." },
  ],
  concepts: [
    {
      id: "ech11-u8-acids-metals-carbonates",
      title: "Acids with metals and carbonates",
      skill: "Describe and write equations for reactions of acids with reactive metals and carbonates, and test for the gases produced.",
      lesson: {
        sections: [
          {
            heading: "Acid + metal",
            body: "Reactive metals (those above hydrogen in the reactivity series, such as Mg, Zn, Fe) react with dilute acids to form a **salt** and **hydrogen gas**:\n\n$$\\text{metal} + \\text{acid} \\rightarrow \\text{salt} + \\text{hydrogen}$$\n\nExample: $\\text{Zn} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{H}_2$. The metal dissolves, bubbles of hydrogen are given off (effervescence) and the mixture warms up. The hydrogen can be tested by holding a lighted splint near the gas — it burns with a characteristic 'pop'. Unreactive metals such as copper, silver and gold do not react with dilute acids.",
          },
          {
            heading: "Acid + carbonate",
            body: "Carbonates (e.g. calcium carbonate in limestone, sodium carbonate) react with acids to form a **salt**, **water** and **carbon dioxide**:\n\n$$\\text{carbonate} + \\text{acid} \\rightarrow \\text{salt} + \\text{water} + \\text{CO}_2$$\n\nExample: $\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$. The solid dissolves with vigorous effervescence of CO$_2$. The gas is tested by bubbling it through **limewater**, which turns **milky** because of the white precipitate of calcium carbonate.",
          },
          {
            heading: "Using these reactions",
            body: "These reactions are used to prepare salts (next lesson), to test for hydrogen and carbon dioxide, and to explain phenomena such as acid rain attacking limestone buildings and the fizzing of indigestion tablets in water.",
          },
        ],
        keyFormulas: [
          { name: "Metal + acid", statement: "$\\text{metal} + \\text{acid} \\rightarrow \\text{salt} + \\text{H}_2$" },
          { name: "Example", statement: "Zn + H$_2$SO$_4$ $\\rightarrow$ ZnSO$_4$ + H$_2$" },
          { name: "Carbonate + acid", statement: "$\\text{carbonate} + \\text{acid} \\rightarrow \\text{salt} + \\text{H}_2\\text{O} + \\text{CO}_2$" },
          { name: "CO$_2$ test", statement: "limewater turns milky" },
        ],
        workedExample: {
          problem: "A student adds dilute hydrochloric acid to a piece of magnesium ribbon. Describe the observations and write a balanced symbol equation.",
          solution: "Effervescence is seen as hydrogen gas is produced, the magnesium ribbon dissolves and the tube gets warm. Equation: $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$.",
        },
      },
      questions: [
        {
          id: "ech11-u8-acids-metals-carbonates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products when magnesium reacts with dilute hydrochloric acid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Magnesium chloride and hydrogen"
                    },
                    {
                              "id": "b",
                              "text": "Magnesium oxide and water"
                    },
                    {
                              "id": "c",
                              "text": "Magnesium hydroxide and hydrogen"
                    },
                    {
                              "id": "d",
                              "text": "Magnesium chloride and carbon dioxide"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Metal + acid",
                              "statement": "metal + acid $\\rightarrow$ salt + hydrogen"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reactive metal + dilute acid gives salt + H$_2$; MgCl$_2$ is the salt.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) magnesium chloride and hydrogen",
          "commonErrors": [
                    "Choosing carbon dioxide — that gas comes from carbonates, not metals."
          ]
},
        },
        {
          id: "ech11-u8-acids-metals-carbonates-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a balanced symbol equation for the reaction of zinc with dilute sulfuric acid.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Metal + acid",
                              "statement": "Zn + H$_2$SO$_4$ $\\rightarrow$ ZnSO$_4$ + H$_2$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct formulae: Zn + H$_2$SO$_4$ $\\rightarrow$ ZnSO$_4$ + H$_2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced: 1 Zn, 2 H, 1 S, 4 O each side.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Zn + H$_2$SO$_4$ $\\rightarrow$ ZnSO$_4$ + H$_2$",
          "commonErrors": [
                    "Writing H$_2$SO$_4$ incorrectly or producing H$_2$O instead of H$_2$."
          ]
},
        },
        {
          id: "ech11-u8-acids-metals-carbonates-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the observations when dilute hydrochloric acid is added to zinc granules in a test tube.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Metal + acid observations",
                              "statement": "Effervescence of hydrogen; metal dissolves; solution warms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bubbles of gas (effervescence) are produced as hydrogen is released.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The zinc granules gradually dissolve/disappear.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The mixture warms up because the reaction is exothermic; a colourless zinc chloride solution forms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Effervescence, zinc dissolves, tube warms, colourless solution.",
          "commonErrors": [
                    "Saying the gas is carbon dioxide — metals produce hydrogen."
          ]
},
        },
        {
          id: "ech11-u8-acids-metals-carbonates-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student adds dilute hydrochloric acid to lumps of calcium carbonate (marble chips) in a conical flask, and bubbles the gas through limewater.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the gas produced and describe what happens to the limewater.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write a balanced symbol equation for the reaction.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Carbonate + acid",
                              "statement": "CaCO$_3$ + 2HCl $\\rightarrow$ CaCl$_2$ + H$_2$O + CO$_2$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Carbon dioxide gas is produced.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The limewater turns milky.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Equation: CaCO$_3$ + 2HCl $\\rightarrow$ CaCl$_2$ + H$_2$O + CO$_2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Balanced: 1 Ca, 2 Cl, 2 H, 5 O each side.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Products are salt + water + CO$_2$ as required.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) CO$_2$; limewater milky (b) CaCO$_3$ + 2HCl $\\rightarrow$ CaCl$_2$ + H$_2$O + CO$_2$.",
          "commonErrors": [
                    "Writing CaCl instead of CaCl$_2$; forgetting the coefficient 2 on HCl."
          ]
},
        },
        {
          id: "ech11-u8-acids-metals-carbonates-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student adds dilute hydrochloric acid to four metals: magnesium, zinc, iron and copper.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which metals react with the acid and which do not.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why copper does not react with dilute hydrochloric acid.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe a test for the gas produced and its expected result.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Reactivity of metals",
                              "statement": "Only metals above hydrogen in the reactivity series react with dilute acids."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mg, Zn and Fe react; copper does not.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from the acid.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hold a lighted splint near the gas.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "A 'pop' sound confirms hydrogen.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Mg, Zn, Fe react; Cu does not (b) Cu below H in series (c) lighted splint → pop.",
          "commonErrors": [
                    "Saying copper reacts slowly — it does not react with dilute non-oxidising acids."
          ]
},
        },
        {
          id: "ech11-u8-acids-metals-carbonates-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Magnesium ribbon and copper turnings are each placed in separate tubes of dilute hydrochloric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the observations for each metal.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write balanced symbol equations for any reactions that occur.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain the difference in reactivity in terms of the reactivity series.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Metal + acid",
                              "statement": "More reactive metals react faster with acids; metals below H do not react."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mg: vigorous effervescence, ribbon dissolves quickly, tube warms.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Cu: no reaction, no bubbles, copper unchanged.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Mg produces more hydrogen gas than a less reactive metal would.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mg + 2HCl $\\rightarrow$ MgCl$_2$ + H$_2$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "No equation for copper since no reaction occurs.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Mg is high in the reactivity series (above H) so reacts readily.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cu is below H so cannot displace hydrogen from the acid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The further above H, the more vigorous the reaction.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Mg fizzes and dissolves; Cu no reaction (b) Mg + 2HCl $\\rightarrow$ MgCl$_2$ + H$_2$ (c) Mg above H, Cu below H.",
          "commonErrors": [
                    "Writing an equation for copper — no reaction means no equation."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u8-acids-bases-oxides",
      title: "Acids with bases, oxides and hydroxides",
      skill: "Write equations for reactions of acids with metal oxides, hydroxides, alkalis and insoluble bases, and describe uses of acids.",
      lesson: {
        sections: [
          {
            heading: "Acid + metal oxide or hydroxide",
            body: "Metal oxides and hydroxides are bases. With an acid they form a **salt** and **water** (neutralisation):\n\n$$\\text{metal oxide/hydroxide} + \\text{acid} \\rightarrow \\text{salt} + \\text{H}_2\\text{O}$$\n\nExamples:\n- $\\text{CuO} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{CuSO}_4 + \\text{H}_2\\text{O}$\n- $\\text{NaOH} + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$\n\nEven **insoluble** bases such as copper(II) oxide react with acids — the solid dissolves as it neutralises the acid.",
          },
          {
            heading: "Acid + alkali",
            body: "The reaction of an acid with an alkali is also neutralisation and produces salt + water. Because both reactants are colourless, an indicator is needed to find the exact end point (see the titration lessons).",
          },
          {
            heading: "Uses of acids",
            body: "- **Hydrochloric acid:** present in the stomach to digest food and kill bacteria; used in cleaning products.\n- **Sulfuric acid:** used in car batteries, fertiliser manufacture and the chemical industry.\n- **Nitric acid:** used in fertiliser and explosives manufacture.\n- **Ethanoic acid:** vinegar; used in food and in preserving.\n- Acids are used to remove limescale (calcium carbonate) from kettles and bathrooms — the acid reacts with the carbonate to form a soluble salt.",
          },
        ],
        keyFormulas: [
          { name: "Base + acid", statement: "$\\text{base} + \\text{acid} \\rightarrow \\text{salt} + \\text{water}$" },
          { name: "Example", statement: "CuO + H$_2$SO$_4$ $\\rightarrow$ CuSO$_4$ + H$_2$O" },
          { name: "Ionic equation", statement: "$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$ (for hydroxide bases)" },
        ],
        workedExample: {
          problem: "Black copper(II) oxide powder is added to warm dilute sulfuric acid. Describe the observations and write a balanced symbol equation.",
          solution: "The black solid dissolves and the mixture turns blue as copper(II) sulfate solution forms. Equation: $\\text{CuO} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{CuSO}_4 + \\text{H}_2\\text{O}$.",
        },
      },
      questions: [
        {
          id: "ech11-u8-acids-bases-oxides-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of reaction is the reaction of an acid with a metal oxide?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Decomposition"
                    },
                    {
                              "id": "b",
                              "text": "Neutralisation"
                    },
                    {
                              "id": "c",
                              "text": "Displacement"
                    },
                    {
                              "id": "d",
                              "text": "Combustion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Neutralisation",
                              "statement": "acid + base $\\rightarrow$ salt + water"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Metal oxides are basic oxides; acid + base is neutralisation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) neutralisation",
          "commonErrors": [
                    "Calling it displacement — no element is displaced; ions are exchanged."
          ]
},
        },
        {
          id: "ech11-u8-acids-bases-oxides-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a balanced symbol equation for the reaction of nitric acid with potassium hydroxide.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Neutralisation",
                              "statement": "HNO$_3$ + KOH $\\rightarrow$ KNO$_3$ + H$_2$O"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct equation: HNO$_3$ + KOH $\\rightarrow$ KNO$_3$ + H$_2$O.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balanced: 1 K, 1 N, 3 O + 1 H... total H=2 each side.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "HNO$_3$ + KOH $\\rightarrow$ KNO$_3$ + H$_2$O",
          "commonErrors": [
                    "Writing KNO$_2$ or forgetting the water product."
          ]
},
        },
        {
          id: "ech11-u8-acids-bases-oxides-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Copper(II) oxide is insoluble in water, yet it still reacts with dilute sulfuric acid. Explain this.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Insoluble bases",
                              "statement": "Insoluble metal oxides/hydroxides still react with acids at their surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CuO is a basic oxide even though it does not dissolve in water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Acid reacts with the surface of the solid, dissolving it to form copper(II) sulfate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Water is produced in neutralisation, so the solid gradually disappears as acid is consumed.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "CuO is basic; acid dissolves it forming CuSO$_4$ + water.",
          "commonErrors": [
                    "Saying insoluble substances cannot react — they react at the surface."
          ]
},
        },
        {
          id: "ech11-u8-acids-bases-oxides-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Copper(II) hydroxide, Cu(OH)$_2$, is added to dilute sulfuric acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a balanced symbol equation for the reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the salt formed and identify the type of reaction.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Neutralisation",
                              "statement": "Cu(OH)$_2$ + H$_2$SO$_4$ $\\rightarrow$ CuSO$_4$ + 2H$_2$O"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Equation: Cu(OH)$_2$ + H$_2$SO$_4$ $\\rightarrow$ CuSO$_4$ + 2H$_2$O.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Balanced: 1 Cu, 1 S, 6 O and 4 H on each side.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "The salt is copper(II) sulfate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The reaction is neutralisation (base + acid).",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Cu(OH)$_2$ + H$_2$SO$_4$ $\\rightarrow$ CuSO$_4$ + 2H$_2$O (b) copper(II) sulfate; neutralisation.",
          "commonErrors": [
                    "Writing CuSO$_4$ + H$_2$O without balancing the 2 waters."
          ]
},
        },
        {
          id: "ech11-u8-acids-bases-oxides-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Sulfuric acid is the most widely produced industrial chemical.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two industrial uses of sulfuric acid.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why dilute sulfuric acid is used to remove limescale from a kettle.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why concentrated acid must be diluted by adding acid to water, never water to acid.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Uses of sulfuric acid",
                              "statement": "Fertiliser manufacture, car batteries, chemical industry."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Any two: fertiliser manufacture, car batteries, production of other chemicals, oil refining.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Limescale is calcium carbonate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The acid reacts with it to form soluble calcium sulfate, which is washed away.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Dilution is very exothermic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Adding acid to water lets heat spread through the larger volume of water; adding water to acid can boil and splash concentrated acid.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) fertilisers, car batteries (b) acid dissolves CaCO$_3$ (c) exothermic dilution — acid into water.",
          "commonErrors": [
                    "Saying water is added to acid — always acid to water."
          ]
},
        },
        {
          id: "ech11-u8-acids-bases-oxides-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student reacts dilute hydrochloric acid with three bases: copper(II) oxide, sodium hydroxide solution and calcium carbonate.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a balanced symbol equation for each reaction.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe the expected observations for each reaction.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Identify the salt formed in each case.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Acid + base/carbonate",
                              "statement": "metal oxide/hydroxide + acid $\\rightarrow$ salt + water; carbonate + acid $\\rightarrow$ salt + water + CO$_2$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "CuO + 2HCl $\\rightarrow$ CuCl$_2$ + H$_2$O.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "NaOH + HCl $\\rightarrow$ NaCl + H$_2$O.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "CaCO$_3$ + 2HCl $\\rightarrow$ CaCl$_2$ + H$_2$O + CO$_2$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "CuO: black solid dissolves, solution turns blue-green.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "NaOH: no visible change (colourless solutions) unless indicator used.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "CaCO$_3$: effervescence of CO$_2$, solid dissolves.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Copper(II) chloride, sodium chloride, calcium chloride.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) three balanced equations (b) dissolve/colourless/fizz (c) CuCl$_2$, NaCl, CaCl$_2$.",
          "commonErrors": [
                    "Giving CO$_2$ for the CuO or NaOH reactions — only carbonates give CO$_2$."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u8-acid-reactions-notes",
      title: "Reactions of acids — notes",
      summary: "Acid + metal $\\rightarrow$ salt + H$_2$; acid + carbonate $\\rightarrow$ salt + H$_2$O + CO$_2$; acid + base $\\rightarrow$ salt + H$_2$O.",
      sections: [
        { heading: "Three reaction types", body: "Metal (above H): salt + hydrogen (test: pop). Carbonate: salt + water + CO$_2$ (test: limewater milky). Base/oxide/hydroxide: salt + water (neutralisation)." },
        { heading: "Observations checklist", body: "Metal: fizzing, dissolves, warms. Carbonate: vigorous fizzing. Insoluble base: solid dissolves, often colour change. Alkali + acid: no visible change without indicator." },
        { heading: "Salts", body: "Salt = acid's H$^+$ replaced by metal/NH$_4^+$. Name = metal name + acid name (chloride, sulfate, nitrate)." },
      ],
    },
  ],
};
