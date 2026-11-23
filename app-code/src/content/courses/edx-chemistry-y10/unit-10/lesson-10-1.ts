import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ech10-u10-lesson-10-1",
  code: "10-1",
  title: "Alcohols: Production, Properties and Reactions",
  goal: "I CAN describe alcohols, compare methods of producing ethanol, write equations for its reactions and explain its uses.",
  standards: ["4CH1 4.29C", "4CH1 4.30C", "4CH1 4.31C", "4CH1 4.32C", "4CH1 4.33C"],
  
  vocabulary: [
    { term: "Alcohol", definition: "An organic compound containing the hydroxyl functional group -OH bonded to a carbon atom." },
    { term: "Functional group", definition: "The atom or group of atoms responsible for the characteristic chemical properties of a family of compounds." },
    { term: "Ethanol", definition: "The alcohol in alcoholic drinks, produced by fermentation or hydration of ethene." },
    { term: "Fermentation", definition: "The conversion of glucose to ethanol by yeast enzymes in the absence of air." },
    { term: "Hydration", definition: "The addition of water to ethene to form ethanol, using steam and a catalyst." },
    { term: "Oxidation", definition: "A reaction in which a substance loses electrons, gains oxygen or loses hydrogen." },
  ],
  concepts: [
    {
      id: "ech10-u10-alcohols-production",
      title: "Alcohols: structure, production and properties",
      skill: "Name simple alcohols, compare fermentation and hydration and describe the properties of ethanol.",
      lesson: {
        sections: [
          {
            heading: "Alcohols and their formulae",
            body: "Alcohols contain the **-OH** functional group. Their names end in **-ol**. The four required examples are methanol CH3OH, ethanol C2H5OH, propan-1-ol CH3CH2CH2OH and butan-1-ol C4H9OH. In a displayed formula every bond is shown, including the O-H bond. Alcohols are not alkalis because the -OH group is covalently bonded, not a hydroxide ion.",
          },
          {
            heading: "Producing ethanol",
            body: "Ethanol can be made by **fermentation** of glucose using yeast enzymes under anaerobic conditions at about 30 °C: C6H12O6 -> 2C2H5OH + 2CO2. It can also be made by **hydration of ethene** using steam, a phosphoric acid catalyst, high temperature and pressure: C2H4 + H2O -> C2H5OH. Fermentation uses renewable sugar but gives dilute ethanol; hydration gives purer ethanol quickly but depends on crude oil.",
          },
        ],
        keyFormulas: [
          { name: "Alcohol functional group", statement: "-OH" },
          { name: "General formula", statement: "CnH2n+1OH" },
          { name: "Fermentation", statement: "C6H12O6 -> 2C2H5OH + 2CO2" },
          { name: "Hydration", statement: "C2H4 + H2O -> C2H5OH" },
        ],
        workedExample: {
          problem: "Compare the production of ethanol by fermentation and by hydration of ethene.",
          solution: "Fermentation uses glucose and yeast anaerobically at about 30 °C, giving dilute ethanol and CO2. Hydration uses ethene, steam and a phosphoric acid catalyst at high temperature/pressure, giving purer ethanol quickly but using a non-renewable feedstock.",
        },
      },
      questions: [
        {
          id: "ech10-u10-alcohols-production-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which group is present in all alcohols?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-COOH"
                    },
                    {
                              "id": "b",
                              "text": "-OH"
                    },
                    {
                              "id": "c",
                              "text": "-COO-"
                    },
                    {
                              "id": "d",
                              "text": "C=C"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alcohol",
                              "statement": "Contains the hydroxyl group -OH."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alcohols are defined by the -OH functional group.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) -OH",
          "commonErrors": [
                    "Confusing alcohols with carboxylic acids (-COOH) or alkenes (C=C)."
          ]
},
        },
        {
          id: "ech10-u10-alcohols-production-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the names and displayed/structural formulae of methanol, ethanol and propan-1-ol.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alcohols",
                              "statement": "Names end in -ol; formulae show C-OH."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Methanol CH3OH, ethanol C2H5OH (or CH3CH2OH), propan-1-ol CH3CH2CH2OH.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Each contains an -OH group bonded to carbon, not a hydroxide ion.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "CH3OH, C2H5OH, CH3CH2CH2OH; all contain -OH."
},
        },
        {
          id: "ech10-u10-alcohols-production-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the equation for fermentation of glucose and state the conditions needed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Fermentation",
                              "statement": "C6H12O6 -> 2C2H5OH + 2CO2"
                    },
                    {
                              "kind": "method",
                              "name": "Fermentation conditions",
                              "statement": "Yeast enzymes, anaerobic, about 30 °C."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equation: C6H12O6 -> 2C2H5OH + 2CO2.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Yeast supplies enzymes that catalyse the reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Oxygen must be absent and temperature about 30 °C.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "C6H12O6 -> 2C2H5OH + 2CO2; yeast, anaerobic, ~30 °C."
},
        },
        {
          id: "ech10-u10-alcohols-production-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Ethanol can be produced industrially by fermentation of glucose or by hydration of ethene.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the equation for each method.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Compare the two methods in terms of feedstock, conditions and product purity.",
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
                              "name": "Ethanol production",
                              "statement": "Fermentation and hydration equations."
                    },
                    {
                              "kind": "method",
                              "name": "Feedstock and conditions",
                              "statement": "Renewable sugar vs ethene; mild vs high pressure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Fermentation: C6H12O6 -> 2C2H5OH + 2CO2.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Hydration: C2H4 + H2O -> C2H5OH.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Fermentation uses renewable glucose, yeast and anaerobic conditions at ~30 °C.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Hydration uses ethene from crude oil, steam and a catalyst at high temperature/pressure.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Hydration gives purer ethanol faster; fermentation gives a dilute solution.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Fermentation renewable/dilute; hydration fast/pure but uses crude oil."
},
        },
        {
          id: "ech10-u10-alcohols-production-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Ethanol can be oxidised to ethanoic acid by three methods: complete combustion, microbial oxidation and heating with acidified potassium dichromate(VI).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the equation for complete combustion of ethanol.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how microbial oxidation and the dichromate test produce ethanoic acid.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State the colour change observed with dichromate(VI).",
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
                              "name": "Combustion",
                              "statement": "C2H5OH + 3O2 -> 2CO2 + 3H2O"
                    },
                    {
                              "kind": "definition",
                              "name": "Oxidation",
                              "statement": "Ethanol to ethanoic acid is oxidation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) C2H5OH + 3O2 -> 2CO2 + 3H2O.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Three O2 are needed because ethanol contains one oxygen atom.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Microbes use oxygen from air to oxidise ethanol to ethanoic acid.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Acidified dichromate(VI) is an oxidising agent when heated with ethanol.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) The product is ethanoic acid.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Dichromate(VI) changes from orange to green.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) The green colour indicates reduction of dichromate(VI) to Cr3+.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Combustion gives CO2/H2O; oxidation gives ethanoic acid; dichromate orange→green."
},
        },
        {
          id: "ech10-u10-alcohols-production-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A government considers using bioethanol produced by fermentation as a vehicle fuel.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two advantages of bioethanol compared with petrol from crude oil.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two disadvantages or limitations.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest how the ethanol could be purified and used as a fuel.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Renewability",
                              "statement": "Bioethanol comes from plant sugars."
                    },
                    {
                              "kind": "principle",
                              "name": "Energy balance",
                              "statement": "Production, transport and purification affect net benefit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Feedstock is renewable plant material rather than finite crude oil.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It can be produced locally from crops or waste biomass.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It may be considered carbon-neutral if plant growth absorbs CO2.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Fermentation gives dilute ethanol needing energy-intensive distillation.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Growing crops for fuel may compete with food production and land use.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Fertilisers, machinery and transport still produce emissions.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Fermented broth is distilled to concentrate ethanol.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) It may be dehydrated to remove water before use.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Ethanol burns to CO2 and H2O and can be blended with petrol.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Engine modifications or blends such as E10/E85 may be needed.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Advantages renewable/local; disadvantages purification and land competition; distil/dehydrate then blend or burn."
},
        },
      ],
    },
    {
      id: "ech10-u10-alcohol-reactions-uses",
      title: "Reactions and uses of alcohols",
      skill: "Write equations for alcohol combustion and oxidation and evaluate ethanol as a fuel and solvent.",
      lesson: {
        sections: [
          {
            heading: "Reactions of alcohols",
            body: "Alcohols undergo **complete combustion** to form carbon dioxide and water. Ethanol: C2H5OH + 3O2 -> 2CO2 + 3H2O. Ethanol can be **oxidised** to ethanoic acid by microbes or by heating with acidified potassium dichromate(VI), which changes orange to green. Alcohols also react to form esters with carboxylic acids, but that is covered separately.",
          },
          {
            heading: "Uses of ethanol",
            body: "Ethanol is used as a **fuel** (alone or blended with petrol), a **solvent** in medicines, perfumes and hand sanitisers, and as the alcohol in drinks. As a fuel it burns cleanly compared with some hydrocarbons, but its production energy and land use affect sustainability.",
          },
        ],
        keyFormulas: [
          { name: "Combustion", statement: "C2H5OH + 3O2 -> 2CO2 + 3H2O" },
          { name: "Oxidation", statement: "ethanol -> ethanoic acid" },
          { name: "Uses", statement: "fuel, solvent, antiseptic, drink" },
        ],
        workedExample: {
          problem: "Write the equation for complete combustion of ethanol and identify the products.",
          solution: "C2H5OH + 3O2 -> 2CO2 + 3H2O. Products are carbon dioxide and water.",
        },
      },
      questions: [
        {
          id: "ech10-u10-alcohol-reactions-uses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of complete combustion of ethanol?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carbon monoxide and water"
                    },
                    {
                              "id": "b",
                              "text": "Carbon dioxide and water"
                    },
                    {
                              "id": "c",
                              "text": "Ethanoic acid and hydrogen"
                    },
                    {
                              "id": "d",
                              "text": "Carbon and hydrogen"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Combustion",
                              "statement": "Hydrocarbon/oxygen -> CO2 + H2O"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complete combustion gives carbon dioxide and water.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Carbon dioxide and water",
          "commonErrors": [
                    "Choosing incomplete-combustion product carbon monoxide."
          ]
},
        },
        {
          id: "ech10-u10-alcohol-reactions-uses-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the balanced equation for complete combustion of ethanol.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Combustion",
                              "statement": "C2H5OH + 3O2 -> 2CO2 + 3H2O"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equation: C2H5OH + 3O2 -> 2CO2 + 3H2O.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Atoms balance: 2 C, 6 H and 7 O on each side.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "C2H5OH + 3O2 -> 2CO2 + 3H2O"
},
        },
        {
          id: "ech10-u10-alcohol-reactions-uses-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how ethanol is oxidised to ethanoic acid by microbial oxidation and by acidified dichromate(VI).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Oxidation",
                              "statement": "Ethanol loses hydrogen/gains oxygen to form ethanoic acid."
                    },
                    {
                              "kind": "property",
                              "name": "Dichromate(VI)",
                              "statement": "Orange oxidising agent turns green when reduced."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Microbes use oxygen from air to oxidise ethanol to ethanoic acid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Heating with acidified dichromate(VI) also oxidises ethanol.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Dichromate(VI) changes orange to green as it is reduced.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Both methods oxidise ethanol to ethanoic acid; dichromate orange→green."
},
        },
        {
          id: "ech10-u10-alcohol-reactions-uses-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Ethanol is described as a useful solvent and fuel.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two reasons why ethanol is a good solvent.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two advantages and one disadvantage of using ethanol as a fuel.",
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
                              "name": "Solvent",
                              "statement": "Ethanol dissolves many organic molecules and mixes with water."
                    },
                    {
                              "kind": "principle",
                              "name": "Fuel evaluation",
                              "statement": "Compare energy content, emissions and sustainability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) It dissolves many organic substances because it is polar and organic.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It mixes completely with water, useful for solutions and hand sanitisers.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Advantages: burns to CO2 and H2O and can be renewable.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Disadvantage: production may require distillation energy and land.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It has lower energy density than some hydrocarbon fuels.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Good solvent for organics/water; renewable and cleaner but energy/land costs."
},
        },
        {
          id: "ech10-u10-alcohol-reactions-uses-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A student compares ethanol made by fermentation with ethanol made by hydration of ethene.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the reactants and conditions for each method.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest which method is more sustainable and justify your choice.",
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
                              "name": "Fermentation vs hydration",
                              "statement": "Different feedstocks, conditions and sustainability."
                    },
                    {
                              "kind": "principle",
                              "name": "Sustainability",
                              "statement": "Renewable feedstock and energy use matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Fermentation: glucose, yeast, anaerobic, ~30 °C.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Hydration: ethene, steam, phosphoric acid catalyst, high temperature/pressure.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Fermentation gives dilute ethanol plus CO2.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Hydration gives purer ethanol directly.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Fermentation may be more sustainable because glucose is renewable.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Hydration depends on crude oil but is faster and purer.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) The better choice depends on energy use, purification and feedstock availability.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Fermentation renewable/dilute; hydration fast/pure/non-renewable; sustainability is context-dependent."
},
        },
        {
          id: "ech10-u10-alcohol-reactions-uses-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A hospital uses ethanol in hand sanitisers and as a disinfectant. A fuel company uses ethanol-petrol blends.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why ethanol is effective as a disinfectant/solvent.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why blending ethanol with petrol may reduce some emissions.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Discuss one safety or practical issue with ethanol fuels.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Solvent",
                              "statement": "Ethanol dissolves fats/oils and mixes with water."
                    },
                    {
                              "kind": "principle",
                              "name": "Combustion",
                              "statement": "Ethanol contains oxygen, which can reduce CO/CO2 formation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Ethanol dissolves many organic molecules and can disrupt microbial membranes.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It evaporates readily, helping remove contaminants.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Mixing with water makes it suitable for sanitisers.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Ethanol already contains oxygen atoms.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) This can reduce the amount of oxygen needed for complete combustion.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Blends may produce less carbon monoxide than petrol alone.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Ethanol is flammable and vapour can form explosive mixtures.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) It can absorb water, causing corrosion in fuel systems.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Engine materials may need modification for high ethanol blends.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Safe storage and handling are therefore essential.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Ethanol solvent/disinfectant; oxygen content may reduce CO; flammability/corrosion are issues."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u10-alcohols-notes",
      title: "Alcohols — notes",
      summary: "Alcohols contain -OH. Ethanol is made by fermentation or hydration; it burns to CO2/H2O and oxidises to ethanoic acid.",
      sections: [
        { heading: "Key idea", body: "-OH defines alcohols; names end in -ol." },
        { heading: "Equations", body: "C6H12O6 -> 2C2H5OH + 2CO2; C2H4 + H2O -> C2H5OH; C2H5OH + 3O2 -> 2CO2 + 3H2O." },
      ],
    },
  ],
};
