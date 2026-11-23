import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ech10-u7-lesson-7-1",
  code: "7-1",
  title: "Alcohols",
  goal: "I CAN describe how ethanol is produced, explain its properties and reactions, and state its uses as a fuel and solvent.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Organic Chemistry", "4CH1 alcohols"],
  
  vocabulary: [
    { term: "Alcohol", definition: "An organic compound containing the –OH (hydroxyl) functional group." },
    { term: "Ethanol", definition: "The alcohol C₂H₅OH, produced by fermentation or hydration of ethene." },
    { term: "Fermentation", definition: "Breakdown of glucose by yeast into ethanol and carbon dioxide, without oxygen." },
    { term: "Hydration", definition: "Addition of water across a double bond, e.g. ethene → ethanol." },
    { term: "Oxidation", definition: "Loss of hydrogen or gain of oxygen; ethanol oxidises to ethanoic acid." },
    { term: "Homologous series", definition: "Family of compounds differing by CH₂ with the same functional group." },
  ],
  concepts: [
    {
      id: "ech10-u7-ethanol-production",
      title: "Producing and properties of ethanol",
      skill: "Describe the two industrial routes to ethanol and explain its physical properties and uses.",
      lesson: {
        sections: [
          {
            heading: "Two ways to make ethanol",
            body: "**Fermentation**: yeast enzymes break down glucose anaerobically (no oxygen) at about 30–40 °C: glucose → ethanol + carbon dioxide. Used for alcoholic drinks and some biofuels. **Hydration of ethene**: steam is added across the C=C double bond of ethene using a phosphoric acid catalyst at high temperature and pressure — faster and gives pure ethanol for fuel and industry.",
          },
          {
            heading: "Properties and uses of ethanol",
            body: "Ethanol (C₂H₅OH) is a colourless liquid that **mixes completely with water** (it has an –OH group like water), **evaporates easily** (volatile) and **burns readily** — used as a biofuel and in alcoholic drinks. Its –OH group makes it a useful **solvent** for many organic substances and it reacts with sodium metal to give hydrogen.",
          },
        ],
        keyFormulas: [
          { name: "Fermentation", statement: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (yeast, anaerobic, ~35 °C)" },
          { name: "Hydration", statement: "C₂H₄ + H₂O → C₂H₅OH (H₃PO₄ catalyst, high T and P)" },
          { name: "Ethanol with sodium", statement: "2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂" },
        ],
        workedExample: {
          problem: "Compare fermentation and hydration of ethene as methods of producing ethanol.",
          solution: "Fermentation uses yeast on glucose at ~35 °C, is slow and gives a dilute solution needing distillation. Hydration adds steam to ethene with an acid catalyst at high T/P — faster and gives pure ethanol, but uses fossil-feedstock ethene.",
        },
      },
      questions: [
        {
          id: "ech10-u7-ethanol-production-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The functional group present in all alcohols is…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "–COOH"
                    },
                    {
                              "id": "b",
                              "text": "–OH"
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
                              "name": "Alcohol functional group",
                              "statement": "The hydroxyl group –OH."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alcohols are defined by the –OH group.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) –OH",
          "commonErrors": [
                    "Choosing –COOH — that is the carboxylic acid group."
          ]
},
        },
        {
          id: "ech10-u7-ethanol-production-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the two main industrial methods for producing ethanol.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ethanol production",
                              "statement": "Fermentation or hydration of ethene."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fermentation of glucose by yeast.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Hydration of ethene (addition of steam with acid catalyst).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Fermentation and hydration of ethene.",
          "commonErrors": [
                    "Listing distillation — that purifies ethanol, it does not produce it."
          ]
},
        },
        {
          id: "ech10-u7-ethanol-production-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the fermentation of glucose to ethanol, including the conditions and products.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Fermentation",
                              "statement": "Yeast, anaerobic, ~30–40 °C; glucose → ethanol + CO₂."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Yeast enzymes convert glucose in the absence of oxygen (anaerobic).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The temperature is kept around 30–40 °C — warm enough for enzymes but not so hot they denature.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Products are ethanol and carbon dioxide: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Yeast + glucose, no oxygen, ~35 °C → ethanol + CO₂.",
          "commonErrors": [
                    "Forgetting it is anaerobic — oxygen would cause aerobic respiration instead."
          ]
},
        },
        {
          id: "ech10-u7-ethanol-production-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the fermentation and hydration methods for producing ethanol.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the reactants, catalyst/agent and conditions for each method.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State one advantage of each method.",
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
                              "name": "Ethanol production methods",
                              "statement": "Biological vs chemical route."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Fermentation: glucose + yeast, anaerobic, ~35 °C.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Hydration: ethene + steam, phosphoric acid catalyst, high T and pressure.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fermentation uses renewable plant material / makes alcoholic drinks.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hydration is faster and produces pure ethanol directly.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) fermentation: glucose/yeast/anaerobic/~35 °C; hydration: ethene/steam/H₃PO₄/high T,P (b) renewable vs fast+pure.",
          "commonErrors": [
                    "Claiming hydration needs oxygen — it is addition of water vapour."
          ]
},
        },
        {
          id: "ech10-u7-ethanol-production-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Ethanol is widely used as a fuel and as a solvent.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why ethanol burns well as a fuel.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why ethanol is a good solvent for many organic substances.",
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
                              "name": "Ethanol properties",
                              "statement": "Volatile, flammable, miscible with water."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ethanol is volatile — it vaporises easily and mixes with air.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It burns readily, releasing energy as heat.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "As a biofuel it can be carbon-neutral if from renewable sources.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ethanol has an –OH group like water, so it dissolves polar substances.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It also has a hydrocarbon chain, so it dissolves many organic (non-polar) substances.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This dual nature makes it a versatile solvent.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) volatile + flammable + renewable (b) –OH dissolves polar, chain dissolves non-polar.",
          "commonErrors": [
                    "Saying ethanol 'dissolves everything' — it is good for many but not all substances."
          ]
},
        },
        {
          id: "ech10-u7-ethanol-production-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A biofuel company wants to produce ethanol from sugar cane waste for use as a vehicle fuel.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the word equation for fermentation of glucose.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the conditions needed for fermentation.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two advantages of using ethanol as a vehicle fuel compared with petrol.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "State one limitation of producing ethanol by fermentation.",
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
                              "name": "Biofuel production",
                              "statement": "Fermentation of plant sugars → ethanol fuel."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Glucose → ethanol + carbon dioxide (by yeast).",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Yeast (source of enzymes).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Anaerobic conditions (no oxygen).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Warm temperature about 30–40 °C.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Made from renewable plant material — more sustainable.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Burns cleanly, producing CO₂ and water; CO₂ was recently absorbed by plants (carbon neutral).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Can be blended with petrol reducing fossil fuel use.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Fermentation is slow and gives dilute ethanol needing energy-intensive distillation; large land/water use.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) glucose→ethanol+CO₂ (b) yeast, anaerobic, ~35 °C (c) renewable, cleaner, blends with petrol (d) slow + dilute needs distillation.",
          "commonErrors": [
                    "Claiming bioethanol produces no CO₂ — it does, but the carbon cycle makes it near-neutral."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u7-ethanol-reactions",
      title: "Reactions of ethanol",
      skill: "Describe the reactions of ethanol with sodium, oxidising agents and oxygen, and link them to carboxylic acid formation.",
      lesson: {
        sections: [
          {
            heading: "Ethanol with metals and oxidising agents",
            body: "Ethanol reacts with **sodium** to give sodium ethoxide and hydrogen: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂ — showing the O–H bond can break. With an **oxidising agent** such as acidified potassium dichromate(VI), ethanol is oxidised first to **ethanoic acid** (CH₃COOH): the orange dichromate turns **green** (Cr³⁺). This is how vinegar is made on an industrial scale.",
          },
          {
            heading: "Combustion of ethanol",
            body: "Ethanol undergoes **complete combustion** like other fuels: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Because it contains oxygen already, it needs less O₂ per molecule than a hydrocarbon of similar size. Its flammability makes it useful as a fuel additive and in spirit burners.",
          },
        ],
        keyFormulas: [
          { name: "Ethanol + sodium", statement: "2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂" },
          { name: "Oxidation of ethanol", statement: "C₂H₅OH → CH₃COOH (acidified K₂Cr₂O₇; orange → green)" },
          { name: "Combustion of ethanol", statement: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O" },
        ],
        workedExample: {
          problem: "What happens when ethanol is warmed with acidified potassium dichromate(VI)?",
          solution: "Ethanol is oxidised to ethanoic acid; the orange dichromate(VI) is reduced to green Cr³⁺, so the colour changes orange → green.",
        },
      },
      questions: [
        {
          id: "ech10-u7-ethanol-reactions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When ethanol is oxidised, the product formed is…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ethane"
                    },
                    {
                              "id": "b",
                              "text": "ethanoic acid"
                    },
                    {
                              "id": "c",
                              "text": "ethene"
                    },
                    {
                              "id": "d",
                              "text": "methanoic acid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Alcohol oxidation",
                              "statement": "Primary alcohol → carboxylic acid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethanol C₂H₅OH oxidises to ethanoic acid CH₃COOH.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) ethanoic acid",
          "commonErrors": [
                    "Choosing ethene — dehydration is different from oxidation."
          ]
},
        },
        {
          id: "ech10-u7-ethanol-reactions-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the oxidising agent used to convert ethanol to ethanoic acid and the colour change observed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Dichromate oxidation",
                              "statement": "Acidified K₂Cr₂O₇ oxidises alcohols; orange → green."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acidified potassium dichromate(VI).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Orange dichromate changes to green Cr³⁺.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Acidified potassium dichromate(VI); orange → green.",
          "commonErrors": [
                    "Saying 'turns blue' — Cr³⁺ is green, not blue."
          ]
},
        },
        {
          id: "ech10-u7-ethanol-reactions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why ethanol reacts with sodium metal but water reacts much more vigorously.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "O–H bond acidity",
                              "statement": "Water's O–H is more polar; ethanol reacts more slowly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both contain O–H bonds that can break to release H⁺.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Water is more polar, so its O–H bond breaks more easily.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The hydrocarbon group in ethanol makes the O–H bond less polar, so the reaction is slower.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Both release H₂; water's O–H is more polar → faster reaction.",
          "commonErrors": [
                    "Saying ethanol 'cannot' react — it does, just more slowly than water."
          ]
},
        },
        {
          id: "ech10-u7-ethanol-reactions-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Ethanol is heated under reflux with acidified potassium dichromate(VI).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the organic product formed.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Describe the colour change of the dichromate.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain what 'reflux' means and why it is used.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State the role of the acid in this reaction.",
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
                              "name": "Oxidation of ethanol",
                              "statement": "Ethanol → ethanoic acid; dichromate orange→green."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ethanoic acid (CH₃COOH).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Orange → green.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reflux = heating with a condenser returning vapour to the flask.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "It prevents loss of volatile ethanol while allowing the reaction to proceed.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Acid provides H⁺ ions needed for the redox reaction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) ethanoic acid (b) orange→green (c) condenser returns vapour, no loss (d) supplies H⁺.",
          "commonErrors": [
                    "Naming ethanol as product — it is the reactant being oxidised."
          ]
},
        },
        {
          id: "ech10-u7-ethanol-reactions-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Ethanol undergoes complete combustion in a spirit burner.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the balanced equation for complete combustion of ethanol.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why ethanol needs less oxygen per molecule than propane for complete combustion.",
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
                              "name": "Alcohol combustion",
                              "statement": "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Balanced: 2C, 6H, 7O each side.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ethanol already contains one oxygen atom.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Propane C₃H₈ needs 5O₂ despite having 3 carbons — more C–H bonds to oxidise.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Oxygen demand depends on total oxidation of C and H, not just molecule size.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O (b) ethanol contains O; propane needs more O₂ for its C–H bonds.",
          "commonErrors": [
                    "Comparing only carbon numbers — H content and built-in O matter."
          ]
},
        },
        {
          id: "ech10-u7-ethanol-reactions-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Vinegar is dilute ethanoic acid produced industrially by oxidising ethanol.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the oxidation of ethanol to ethanoic acid, including the reagent and conditions.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State a simple chemical test to confirm the product is a carboxylic acid.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Give two uses of vinegar and one safety precaution when handling concentrated ethanoic acid.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Alcohol to acid",
                              "statement": "Oxidation with acidified dichromate → carboxylic acid."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Heat ethanol under reflux with acidified potassium dichromate(VI).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ethanol is oxidised to ethanoic acid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Orange dichromate turns green as Cr³⁺ forms.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Add sodium hydrogencarbonate (or carbonate).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Effervescence of CO₂ confirms the carboxylic acid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Carboxylic acids react with carbonates releasing CO₂.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Uses: flavouring food, removing limescale, preservative.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Precaution: wear gloves/goggles — concentrated acid is corrosive.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) reflux + acidified K₂Cr₂O₇ → ethanoic acid (b) NaHCO₃ → CO₂ effervescence (c) food flavour/limescale; corrosive.",
          "commonErrors": [
                    "Using limewater for the acid test — carboxylic acids give CO₂ with carbonates."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u7-alcohols-notes",
      title: "Alcohols — notes",
      summary: "Alcohols contain –OH. Ethanol made by fermentation (glucose/yeast/anaerobic/~35 °C) or hydration of ethene (steam/H₃PO₄). Oxidises to ethanoic acid (dichromate orange→green); combusts to CO₂+H₂O.",
      sections: [
        { heading: "Production", body: "Fermentation: glucose → ethanol + CO₂ (yeast, no O₂, ~35 °C). Hydration: C₂H₄ + H₂O → C₂H₅OH (H₃PO₄ catalyst, high T/P)." },
        { heading: "Properties", body: "Miscible with water, volatile, flammable, good solvent. –OH allows reaction with Na (→ H₂)." },
        { heading: "Reactions", body: "Oxidation: ethanol → ethanoic acid with acidified K₂Cr₂O₇ (orange→green). Combustion: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O." },
      ],
    },
  ],
};
