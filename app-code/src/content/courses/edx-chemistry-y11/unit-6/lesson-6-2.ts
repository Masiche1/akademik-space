import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ech11-u6-lesson-6-2",
  code: "6-2",
  title: "Hard and Soft Water",
  goal: "I CAN explain what makes water hard, distinguish temporary from permanent hardness and describe methods of softening water.",
  standards: ["4CH1 2.24", "4CH1 2.25", "4CH1 2.26", "4CH1 2.27"],
  
  vocabulary: [
    { term: "Hard water", definition: "Water containing dissolved calcium and/or magnesium ions, which react with soap to form scum." },
    { term: "Soft water", definition: "Water with low concentrations of calcium and magnesium ions; lathers easily with soap." },
    { term: "Temporary hardness", definition: "Hardness caused by dissolved calcium or magnesium hydrogencarbonates, removed by boiling." },
    { term: "Permanent hardness", definition: "Hardness caused by dissolved calcium or magnesium sulfates or chlorides, not removed by boiling." },
    { term: "Limescale", definition: "The hard, chalky deposit of calcium carbonate formed when temporary hardness is heated." },
    { term: "Scum", definition: "The greyish precipitate formed when soap reacts with calcium/magnesium ions in hard water." },
    { term: "Ion-exchange resin", definition: "A material that swaps sodium ions for calcium and magnesium ions to soften water." },
  ],
  concepts: [
    {
      id: "ech11-u6-hard-water",
      title: "What makes water hard",
      skill: "Explain the cause of hardness, distinguish temporary from permanent hardness and describe the effects of hard water.",
      lesson: {
        sections: [
          {
            heading: "Cause of hardness",
            body: "Hardness is caused by dissolved **calcium ions ($\\text{Ca}^{2+}$)** and **magnesium ions ($\\text{Mg}^{2+}$)**, which enter water as it flows over rocks such as limestone and chalk, or from soil. These ions react with the fatty acids in soap to form an insoluble **scum** instead of a lather, so more soap is needed. When hard water is heated, calcium hydrogencarbonate decomposes to form **limescale** (calcium carbonate) in kettles, boilers and pipes.",
          },
          {
            heading: "Temporary hardness",
            body: "Temporary hardness is caused by dissolved **calcium or magnesium hydrogencarbonates**, e.g. $\\text{Ca(HCO}_3\\text{)}_2$. On boiling, the hydrogencarbonate decomposes:\n\n$$\\text{Ca(HCO}_3\\text{)}_2 \\rightarrow \\text{CaCO}_3 + \\text{CO}_2 + \\text{H}_2\\text{O}$$\n\nThe insoluble $\\text{CaCO}_3$ is the **limescale**. Because boiling removes it, this type is called **temporary**.",
          },
          {
            heading: "Permanent hardness and effects",
            body: "Permanent hardness is caused by dissolved **calcium or magnesium sulfates and chlorides**, which stay in solution even when boiled.\n\nEffects of hard water:\n- more soap needed; scum forms on baths and fabrics\n- limescale in kettles, boilers and pipes reduces efficiency and can block them\n- advantages: calcium and magnesium are good for teeth and bones; hard water may taste better",
          },
        ],
        keyFormulas: [
          { name: "Temporary hardness", statement: "Ca/Mg hydrogencarbonates — removed by boiling" },
          { name: "Permanent hardness", statement: "Ca/Mg sulfates or chlorides — not removed by boiling" },
          { name: "Boiling", statement: "$\\text{Ca(HCO}_3\\text{)}_2 \\rightarrow \\text{CaCO}_3 + \\text{CO}_2 + \\text{H}_2\\text{O}$" },
        ],
        workedExample: {
          problem: "A kettle in a hard-water area furred up with limescale. The homeowner found that boiling the water first removed most of the problem. Explain the chemistry involved.",
          solution: "The water contained calcium hydrogencarbonate (temporary hardness). Boiling decomposes it: $\\text{Ca(HCO}_3\\text{)}_2 \\rightarrow \\text{CaCO}_3 + \\text{CO}_2 + \\text{H}_2\\text{O}$. The insoluble calcium carbonate forms limescale. Removing the temporary hardness before the water is used reduces further scale in the kettle.",
        },
      },
      questions: [
        {
          id: "ech11-u6-hard-water-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which ion is mainly responsible for the hardness of water?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sodium ion, Na$^+$"
                    },
                    {
                              "id": "b",
                              "text": "Calcium ion, Ca$^{2+}$"
                    },
                    {
                              "id": "c",
                              "text": "Chloride ion, Cl$^-$"
                    },
                    {
                              "id": "d",
                              "text": "Hydrogen ion, H$^+$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hard water",
                              "statement": "Water containing dissolved Ca$^{2+}$ and/or Mg$^{2+}$ ions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calcium and magnesium ions cause hardness; calcium is the most common example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Calcium ion",
          "commonErrors": [
                    "Choosing sodium — Na$^+$ does not cause hardness."
          ]
},
        },
        {
          id: "ech11-u6-hard-water-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'hard water' and state one problem it causes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hard water",
                              "statement": "Water containing dissolved calcium and/or magnesium ions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hard water contains dissolved Ca$^{2+}$ or Mg$^{2+}$ ions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Any one problem: scum with soap, limescale in pipes/kettles, extra soap needed.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Water with Ca/Mg ions; e.g. limescale or soap scum.",
          "commonErrors": [
                    "Saying hard water is 'dirty' — hardness is dissolved minerals, not dirt."
          ]
},
        },
        {
          id: "ech11-u6-hard-water-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between temporary and permanent hardness of water.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Temporary vs permanent hardness",
                              "statement": "Temporary = hydrogencarbonates (removed by boiling); permanent = sulfates/chlorides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Temporary hardness is caused by Ca/Mg hydrogencarbonates.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Permanent hardness is caused by Ca/Mg sulfates or chlorides.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Only temporary hardness is removed by boiling — hence the names.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Temporary: hydrogencarbonates, removed by boiling. Permanent: sulfates/chlorides, stays.",
          "commonErrors": [
                    "Saying permanent hardness can be removed by boiling — it cannot."
          ]
},
        },
        {
          id: "ech11-u6-hard-water-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Hard water containing calcium hydrogencarbonate is boiled in a kettle.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the word equation for the decomposition that occurs.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the solid formed and explain where the limescale comes from.",
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
                              "name": "Hydrogencarbonate decomposition",
                              "statement": "$\\text{Ca(HCO}_3\\text{)}_2 \\rightarrow \\text{CaCO}_3 + \\text{CO}_2 + \\text{H}_2\\text{O}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Calcium hydrogencarbonate $\\rightarrow$ calcium carbonate + carbon dioxide + water.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The solid is calcium carbonate ($\\text{CaCO}_3$), which is insoluble.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It is deposited on heating elements and kettle walls as a hard, chalky layer.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This layer is limescale, formed from the temporary hardness in the water.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Ca(HCO$_3$)$_2$ → CaCO$_3$ + CO$_2$ + H$_2$O (b) CaCO$_3$ limescale.",
          "commonErrors": [
                    "Writing CaO or Ca(OH)$_2$ as the product — it is CaCO$_3$."
          ]
},
        },
        {
          id: "ech11-u6-hard-water-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student tests two water samples with soap solution.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how the soap test is carried out.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Predict and explain the results for hard water compared with soft water.",
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
                              "name": "Soap test",
                              "statement": "Shake equal volumes of water with the same amount of soap solution; lather indicates softness."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Add the same volume of soap solution to equal volumes of each water sample.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Stopper and shake each mixture vigorously for the same time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Observe and compare the amount of lather produced.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Soft water gives a good, lasting lather immediately.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hard water gives little or no lather at first because Ca$^{2+}$/Mg$^{2+}$ form insoluble scum with soap.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Only after the hardness ions are used up does lather finally form — so more soap is needed.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) equal volumes + same soap + shake (b) soft lathers easily; hard forms scum first.",
          "commonErrors": [
                    "Using different amounts of soap or water — results cannot be compared."
          ]
},
        },
        {
          id: "ech11-u6-hard-water-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A village gets its water from a chalk aquifer and suffers from hard water.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why chalk bedrock makes the water hard.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe one advantage and one disadvantage of drinking hard water.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest why the village might not want to remove all the hardness.",
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
                              "name": "Hardness source",
                              "statement": "Water dissolves CaCO$_3$ from limestone/chalk, picking up Ca$^{2+}$ and HCO$_3^-$ ions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rainwater is slightly acidic and dissolves calcium carbonate from chalk.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "This adds Ca$^{2+}$ ions (with hydrogencarbonate) to the groundwater.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Calcium ions are what make the water hard.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Advantage: calcium in drinking water contributes to healthy teeth and bones.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Disadvantage: scum wastes soap and limescale damages kettles, boilers and pipes.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Removing all hardness loses the dietary calcium benefit.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Soft water can be slightly corrosive to metal pipes, while a little hardness protects them.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Treatment costs money and energy — some hardness may be acceptable.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) chalk dissolves → Ca$^{2+}$ ions (b) adv: dental health; dis: scum/limescale (c) calcium benefit + cost.",
          "commonErrors": [
                    "Saying all hardness must be removed — moderate hardness has benefits."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u6-softening-water",
      title: "Removing hardness from water",
      skill: "Describe methods of softening water — boiling, washing soda, ion exchange and distillation — and evaluate their suitability.",
      lesson: {
        sections: [
          {
            heading: "Methods of softening",
            body: "- **Boiling:** removes temporary hardness only; the hydrogencarbonate decomposes to insoluble CaCO$_3$.\n- **Washing soda (sodium carbonate, $\\text{Na}_2\\text{CO}_3$):** adds carbonate ions that precipitate Ca$^{2+}$ and Mg$^{2+}$ as insoluble carbonates, which are filtered off. Removes both types.\n- **Ion-exchange resin:** beads containing sodium ions swap them for Ca$^{2+}$/Mg$^{2+}$ ions in the water, which are trapped on the resin. Regenerated with concentrated salt solution.\n- **Distillation:** evaporates and condenses pure water — removes everything dissolved, including all hardness ions.",
          },
          {
            heading: "Comparing the methods",
            body: "| Method | Removes temporary? | Removes permanent? | Cost/scale |\n|---|---|---|\n| Boiling | Yes | No | cheap, domestic only |\n| Washing soda | Yes | Yes | cheap, batch treatment |\n| Ion exchange | Yes | Yes | continuous, needs regeneration |\n| Distillation | Yes | Yes | expensive, small volumes |\n\nFor a whole house, ion-exchange is common; for drinking water at a treatment works, other processes are used; for laboratory pure water, distillation or deionisation.",
          },
          {
            heading: "Soft water — pros and cons",
            body: "Soft water lathers easily with soap and prevents limescale. However, very soft (pure) water can dissolve metals from pipes and may taste 'flat' to some people. Water companies often aim for moderate hardness rather than zero.",
          },
        ],
        keyFormulas: [
          { name: "Washing soda", statement: "$\\text{Na}_2\\text{CO}_3$ — precipitates Ca$^{2+}$/Mg$^{2+}$ as carbonates" },
          { name: "Ion exchange", statement: "resin: Na$_2$R + Ca$^{2+}$ → CaR + 2Na$^+$" },
          { name: "Distillation", statement: "evaporate then condense — gives pure water" },
        ],
        workedExample: {
          problem: "A homeowner wants to soften permanently hard water in a washing machine. Recommend a method and explain why boiling alone would not work.",
          solution: "Use an ion-exchange softener or add washing soda. Permanent hardness comes from Ca/Mg sulfates and chlorides, which do not decompose on boiling — only the hydrogencarbonates of temporary hardness do. Ion exchange swaps the Ca$^{2+}$ and Mg$^{2+}$ for Na$^+$ on the resin, giving soft water.",
        },
      },
      questions: [
        {
          id: "ech11-u6-softening-water-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method removes temporary hardness by decomposing calcium hydrogencarbonate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Adding washing soda"
                    },
                    {
                              "id": "b",
                              "text": "Boiling"
                    },
                    {
                              "id": "c",
                              "text": "Ion exchange"
                    },
                    {
                              "id": "d",
                              "text": "Filtration"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Temporary hardness removal",
                              "statement": "Boiling decomposes Ca/Mg hydrogencarbonates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only boiling decomposes the hydrogencarbonates; the other methods remove ions by precipitation, exchange or distillation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Boiling",
          "commonErrors": [
                    "Choosing washing soda — it removes hardness but by precipitation, not decomposition."
          ]
},
        },
        {
          id: "ech11-u6-softening-water-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two methods of softening hard water other than boiling.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Softening methods",
                              "statement": "Washing soda, ion-exchange resin and distillation all remove hardness ions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two of: adding washing soda (sodium carbonate), ion-exchange resin, distillation.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Washing soda; ion exchange; distillation (any two).",
          "commonErrors": [
                    "Listing 'filtering' alone — dissolved ions pass through a filter."
          ]
},
        },
        {
          id: "ech11-u6-softening-water-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how adding washing soda softens hard water.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Precipitation of hardness ions",
                              "statement": "Carbonate ions precipitate Ca$^{2+}$ and Mg$^{2+}$ as insoluble carbonates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Washing soda (Na$_2$CO$_3$) dissolves to give carbonate ions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Carbonate ions react with Ca$^{2+}$ and Mg$^{2+}$ to form insoluble carbonates.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The solid precipitate is filtered off, leaving softened water.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "CO$_3^{2-}$ precipitates Ca/Mg as insoluble carbonates → filtered off.",
          "commonErrors": [
                    "Saying washing soda 'neutralises' hardness — it precipitates the ions."
          ]
},
        },
        {
          id: "ech11-u6-softening-water-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An ion-exchange softener is fitted to a house's incoming water supply.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how the resin softens the water.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the resin is regenerated when exhausted.",
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
                              "name": "Ion exchange",
                              "statement": "Resin releases Na$^+$ ions and binds Ca$^{2+}$/Mg$^{2+}$ ions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Hard water flows past resin beads loaded with sodium ions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ca$^{2+}$/Mg$^{2+}$ ions swap places with Na$^+$, which pass into the water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A concentrated sodium chloride (salt) solution is passed through the resin.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The high Na$^+$ concentration drives the reverse exchange, flushing Ca$^{2+}$/Mg$^{2+}$ off the resin.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The resin is then ready to soften water again.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Na$^+$ ↔ Ca$^{2+}$/Mg$^{2+}$ swap (b) regenerate with concentrated NaCl solution.",
          "commonErrors": [
                    "Saying the resin 'filters' the ions — it exchanges them chemically."
          ]
},
        },
        {
          id: "ech11-u6-softening-water-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A laboratory needs 500 cm$^3$ of pure (distilled) water for an experiment.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how distillation produces pure water.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why distilled water is 'soft' and free of dissolved minerals.",
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
                              "name": "Distillation",
                              "statement": "Boil the water, condense the pure steam — dissolved solids are left behind."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Heat the impure water to boiling in a flask.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Only water evaporates; dissolved solids and most microbes stay behind.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Cool the steam in a condenser so it condenses to pure liquid water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All dissolved ions, including Ca$^{2+}$ and Mg$^{2+}$, are left in the original flask.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The condensed water contains only H$_2$O molecules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "With no hardness ions it is the softest possible water.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) boil → condense steam (b) ions left behind → pure soft water.",
          "commonErrors": [
                    "Thinking distillation removes hardness by boiling alone — it is the separation of pure water vapour that matters."
          ]
},
        },
        {
          id: "ech11-u6-softening-water-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hotel in a hard-water area must choose how to supply soft water for guests and laundry.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare boiling, washing soda and ion exchange for this purpose.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why ion exchange is the most practical continuous method for a hotel.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Give one disadvantage of supplying completely soft water to guests.",
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
                              "name": "Softening methods",
                              "statement": "Boiling: temporary only, domestic scale. Washing soda: batch. Ion exchange: continuous. Distillation: small volumes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Boiling removes temporary hardness only and is impractical for a whole hotel supply.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Washing soda removes both types but must be added per batch and filtered off.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ion exchange treats water continuously as it flows through a column.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Distillation gives pure water but is far too expensive for hotel volumes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It treats the whole incoming supply automatically without stopping for batches.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The resin is regenerated periodically with salt solution, minimising labour.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It removes both temporary and permanent hardness.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Very soft water can taste flat and may corrode metal fittings/pipes slightly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Some people prefer the taste of moderately hard water.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) boil=temp only; soda=batch; exchange=continuous; distil=expensive (b) automatic continuous treatment (c) taste/corrosion.",
          "commonErrors": [
                    "Recommending distillation for a hotel — it is prohibitively expensive at scale."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u6-hardness-notes",
      title: "Hard and soft water — notes",
      summary: "Hardness = Ca$^{2+}$/Mg$^{2+}$ ions. Temporary = hydrogencarbonates (boiling removes); permanent = sulfates/chlorides. Soften with washing soda, ion exchange or distillation.",
      sections: [
        { heading: "Two types", body: "Temporary: Ca/Mg hydrogencarbonates → boiling gives CaCO$_3$ limescale. Permanent: Ca/Mg sulfates/chlorides → needs other methods." },
        { heading: "Softening", body: "Boiling (temporary only), washing soda (precipitates carbonates), ion exchange (Na$^+$ ↔ Ca$^{2+}$/Mg$^{2+}$), distillation (pure water)." },
        { heading: "Trade-off", body: "Soft water lathers well but very soft water can taste flat and corrode pipes; moderate hardness has dental benefits." },
      ],
    },
  ],
};
