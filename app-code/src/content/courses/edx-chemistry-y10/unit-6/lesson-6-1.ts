import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ech10-u6-lesson-6-1",
  code: "6-1",
  title: "Crude Oil and Fractional Distillation",
  goal: "I CAN describe crude oil as a mixture of hydrocarbons, explain fractional distillation and describe the fractions and their properties and uses.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Organic Chemistry", "4CH1 crude oil"],
  
  vocabulary: [
    { term: "Crude oil", definition: "A complex mixture of many different hydrocarbons obtained from underground." },
    { term: "Fractional distillation", definition: "Separating a mixture of liquids with different boiling points by heating and condensing." },
    { term: "Fraction", definition: "A group of hydrocarbons with similar boiling points separated from crude oil." },
    { term: "Alkane", definition: "A saturated hydrocarbon containing only single C–C bonds, general formula CₙH₂ₙ₊₂." },
    { term: "Viscosity", definition: "How thick or runny a liquid is." },
    { term: "Homologous series", definition: "A family of compounds with the same functional group and general formula, differing by CH₂." },
  ],
  concepts: [
    {
      id: "ech10-u6-crude-distillation",
      title: "Crude oil and fractional distillation",
      skill: "Describe crude oil composition and the fractional distillation process and identify the main fractions.",
      lesson: {
        sections: [
          {
            heading: "Crude oil",
            body: "**Crude oil** is a naturally occurring mixture of thousands of different **hydrocarbons** — compounds of carbon and hydrogen only. It formed from the remains of ancient marine organisms over millions of years. The hydrocarbons range from small molecules (gases) to very large ones (oils and waxes).",
          },
          {
            heading: "Fractional distillation",
            body: "Crude oil is heated and passed into a **fractionating column**. The mixture vaporises and rises; **larger molecules have higher boiling points** and condense near the bottom, while **smaller molecules boil more easily** and rise higher before condensing. Each fraction is drawn off at a different level and contains molecules of similar size. Main fractions from top to bottom: refinery gases, petrol, naphtha, kerosene, diesel, fuel oil, bitumen.",
          },
        ],
        keyFormulas: [
          { name: "Fraction order", statement: "refinery gases → petrol → naphtha → kerosene → diesel → fuel oil → bitumen (lightest at top)" },
          { name: "Separation principle", statement: "different boiling points → different condensation heights" },
        ],
        workedExample: {
          problem: "Explain why bitumen collects at the bottom of a fractionating column while petrol collects near the top.",
          solution: "Bitumen molecules are the largest with the highest boiling point, so they condense first near the bottom where it is hottest. Petrol molecules are small with low boiling points, so they stay as vapour until the cooler top of the column.",
        },
      },
      questions: [
        {
          id: "ech10-u6-crude-distillation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Crude oil is best described as…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a pure compound of carbon and hydrogen"
                    },
                    {
                              "id": "b",
                              "text": "a mixture of many different hydrocarbons"
                    },
                    {
                              "id": "c",
                              "text": "a mixture of hydrocarbons and oxygen compounds"
                    },
                    {
                              "id": "d",
                              "text": "a single type of alkane"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Crude oil",
                              "statement": "Complex mixture of hydrocarbons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crude oil contains thousands of different hydrocarbon molecules.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) a mixture of many different hydrocarbons",
          "commonErrors": [
                    "Calling it a pure compound — it is a complex mixture."
          ]
},
        },
        {
          id: "ech10-u6-crude-distillation-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define fractional distillation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fractional distillation",
                              "statement": "Separating liquids by boiling point using a fractionating column."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It is a method of separating a mixture of liquids with different boiling points.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The mixture is vaporised and the vapours condense at different heights in a fractionating column.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Separating liquids of different boiling points by heating and condensing vapours in a column.",
          "commonErrors": [
                    "Confusing it with simple distillation — the column gives repeated condensation/evaporation."
          ]
},
        },
        {
          id: "ech10-u6-crude-distillation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the fractions of crude oil are separated according to their boiling points.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Boiling point and chain length",
                              "statement": "Larger molecules have higher boiling points."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different hydrocarbons in crude oil have different numbers of carbon atoms.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Larger molecules have stronger intermolecular forces and higher boiling points.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "So each fraction condenses at a different temperature and height in the column.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Boiling point increases with molecular size → fractions condense at different levels.",
          "commonErrors": [
                    "Saying fractions are separated by colour or density — it is boiling point."
          ]
},
        },
        {
          id: "ech10-u6-crude-distillation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Crude oil is processed in a fractionating column.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the process of fractional distillation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State where the smallest and the largest molecules collect.",
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
                              "name": "Fractional distillation",
                              "statement": "Heat → vapour → condense at different heights by boiling point."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Crude oil is heated until it vaporises and enters the bottom of the column.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The column is hottest at the bottom and coolest at the top; vapours rise and condense at their boiling-point level.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each fraction is drawn off through outlets at its level and condensed for collection.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Smallest molecules (lowest boiling point) collect near the top; largest near the bottom.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) heat → vapour rises → condenses at boiling-point height → collected (b) small at top, large at bottom.",
          "commonErrors": [
                    "Reversing the temperature gradient — the column is hottest at the bottom."
          ]
},
        },
        {
          id: "ech10-u6-crude-distillation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A fractionating column is shown with temperatures decreasing from bottom to top. Four fractions condense at different levels.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the fraction expected at the highest outlet (coolest part) and the lowest outlet (hottest part).",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain your answer in terms of boiling points and molecular size.",
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
                              "name": "Fraction order",
                              "statement": "Lightest/smallest fractions at top; heaviest at bottom."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Top outlet: refinery gases (or petrol if gases removed); bottom: bitumen or fuel oil.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Accept petrol/naphtha for top if gases not considered; must name a light vs heavy fraction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Small molecules have low boiling points and stay vapour until the cool top.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Large molecules have high boiling points and condense in the hot lower region.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Boiling point increases with chain length, so size determines position.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) light fraction top (e.g. refinery gas/petrol), heavy bottom (e.g. fuel oil/bitumen) (b) boiling point rises with molecular size.",
          "commonErrors": [
                    "Naming fractions without linking them to boiling point/size."
          ]
},
        },
        {
          id: "ech10-u6-crude-distillation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A refinery processes 1000 kg of crude oil. Fractional distillation yields approximately 4% petrol, 18% diesel and 35% fuel oil by mass.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mass of petrol produced.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the combined mass of diesel and fuel oil produced.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why bitumen cannot be vaporised in the column and where it is collected.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Suggest why a refinery might want to convert some of the fuel oil into petrol.",
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
                              "name": "Percentage yield from fraction",
                              "statement": "mass = percentage × total mass."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "mass of petrol = 4% × 1000 = 40 kg.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "diesel + fuel oil = (18 + 35)% × 1000 = 530 kg.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bitumen molecules are extremely large with very high boiling points.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "They do not vaporise at the column temperature and remain as liquid residue.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "They are drawn off from the bottom of the column.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Demand for petrol exceeds its natural supply from distillation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Fuel oil contains large molecules that can be cracked into smaller petrol-range molecules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "This increases the valuable petrol output and matches supply to demand.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 40 kg (b) 530 kg (c) too large to vaporise → residue at bottom (d) cracking fuel oil increases petrol supply.",
          "commonErrors": [
                    "Calculating percentages of a fraction instead of total crude oil."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u6-fraction-properties",
      title: "Properties and uses of fractions",
      skill: "Describe how viscosity, boiling point and flammability vary across fractions and match fractions to uses.",
      lesson: {
        sections: [
          {
            heading: "Trends across fractions",
            body: "Going from light to heavy fractions (top to bottom of the column): **molecular size increases**, **boiling point increases**, **viscosity increases** (liquid becomes thicker), and **flammability decreases** (harder to ignite). Light fractions are gases or volatile liquids; heavy fractions are thick oils or solids.",
          },
          {
            heading: "Uses of fractions",
            body: "**Refinery gases** → bottled gas; **petrol** → car fuel; **naphtha** → chemicals feedstock; **kerosene** → aircraft fuel and heating; **diesel** → lorries and trains; **fuel oil** → ships and power stations; **bitumen** → road surfacing. The use matches the properties: volatile, flammable fractions are used as fuels; thick, non-flammable bitumen is used for roads.",
          },
        ],
        keyFormulas: [
          { name: "Trend with size", statement: "larger molecules → higher bp, higher viscosity, lower flammability" },
          { name: "Uses", statement: "volatile flammable fractions → fuels; thick non-flammable → roads/roofs" },
        ],
        workedExample: {
          problem: "Explain why petrol is used as a car fuel rather than bitumen.",
          solution: "Petrol consists of small molecules with low boiling points — it vaporises easily and ignites readily in an engine. Bitumen is a large, viscous, non-flammable solid unsuitable as a fuel.",
        },
      },
      questions: [
        {
          id: "ech10-u6-fraction-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction of crude oil has the highest viscosity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Petrol"
                    },
                    {
                              "id": "b",
                              "text": "Kerosene"
                    },
                    {
                              "id": "c",
                              "text": "Bitumen"
                    },
                    {
                              "id": "d",
                              "text": "Refinery gases"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Viscosity trend",
                              "statement": "Viscosity increases with molecular size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bitumen has the largest molecules and is the thickest fraction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Bitumen",
          "commonErrors": [
                    "Choosing fuel oil — bitumen is heavier and more viscous."
          ]
},
        },
        {
          id: "ech10-u6-fraction-properties-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the trend in boiling point and molecular size from the top to the bottom of a fractionating column.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Fraction trends",
                              "statement": "Both boiling point and molecular size increase downwards."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Molecular size increases from top to bottom.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Boiling point also increases from top to bottom.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Both molecular size and boiling point increase from top to bottom.",
          "commonErrors": [
                    "Stating only one trend — both increase together."
          ]
},
        },
        {
          id: "ech10-u6-fraction-properties-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why lighter fractions of crude oil are more flammable than heavier fractions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Flammability trend",
                              "statement": "Small molecules vaporise and ignite more easily."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light fractions contain small molecules with low boiling points.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They vaporise easily, so fuel vapour mixes with air and ignites readily.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Heavy fractions are viscous and harder to vaporise, so they burn less easily.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Small molecules vaporise easily → flammable vapour forms → easy ignition.",
          "commonErrors": [
                    "Saying heavy fractions 'don't burn' — they burn less readily but can still combust."
          ]
},
        },
        {
          id: "ech10-u6-fraction-properties-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Match each fraction to its main use: petrol, kerosene, diesel, fuel oil, bitumen.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Match four of the fractions to these uses: car fuel, aircraft fuel, road surfacing, ship fuel.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why petrol is suitable as a car fuel.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fraction uses",
                              "statement": "Use matches volatility and viscosity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Petrol → car fuel; kerosene → aircraft fuel; diesel → (not listed here but lorries) ; fuel oil → ship fuel; bitumen → road surfacing.",
                              "marks": 4,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Petrol is volatile and flammable, so it vaporises and ignites easily in an engine.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) petrol-car, kerosene-aircraft, fuel oil-ships, bitumen-roads (b) volatile + flammable.",
          "commonErrors": [
                    "Matching bitumen to fuel — it is non-flammable and used for roads."
          ]
},
        },
        {
          id: "ech10-u6-fraction-properties-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare petrol and diesel, two fractions from the same crude oil.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare their molecular sizes and viscosities.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Compare their flammability and typical uses.",
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
                              "name": "Petrol vs diesel",
                              "statement": "Petrol is lighter, less viscous, more flammable; diesel heavier."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Petrol molecules are smaller than diesel molecules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Petrol is less viscous (more runny) than diesel.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Diesel condenses lower in the column and contains larger molecules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Petrol is more volatile and flammable than diesel.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Petrol is used in cars; diesel in lorries, trains and some cars.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Heavier diesel burns less violently, suiting compression-ignition engines.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Petrol smaller/less viscous/more flammable → cars; diesel larger/more viscous → lorries/trains.",
          "commonErrors": [
                    "Claiming diesel is 'thicker because it is colder' — viscosity depends on molecular size."
          ]
},
        },
        {
          id: "ech10-u6-fraction-properties-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company compares three fractions: A (boiling range 30–200 °C), B (200–350 °C) and C (350–700 °C).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict the relative viscosity of A, B and C and explain why.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Predict which fraction is most flammable and which is least, with reasons.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Recommend which fraction to use for (i) car fuel and (ii) road surfacing, justifying each choice.",
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
                              "name": "Fraction properties",
                              "statement": "Higher boiling range → larger molecules → higher viscosity, lower flammability."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A has smallest molecules → least viscous; C largest → most viscous.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Viscosity increases with boiling range/molecular size: A < B < C.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A is most flammable — small molecules vaporise and ignite easily.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "C is least flammable — large molecules are hard to vaporise.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Volatility decreases as boiling point rises.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Car fuel: A — volatile, flammable petrol-range molecules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Road surfacing: C — bitumen-like, viscous and non-flammable.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Choice matches properties to use.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) viscosity A<B<C (b) A most flammable, C least (c) car=A, roads=C.",
          "commonErrors": [
                    "Reversing flammability — lighter fractions ignite more easily."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u6-crude-notes",
      title: "Crude oil and fractional distillation — notes",
      summary: "Crude oil = mixture of hydrocarbons. Fractional distillation separates by boiling point; light fractions at top, heavy at bottom. Size ↑ → bp ↑, viscosity ↑, flammability ↓.",
      sections: [
        { heading: "Fractional distillation", body: "Heat crude oil → vapour rises a fractionating column (hot bottom, cool top) → each fraction condenses at its boiling-point height → collected separately." },
        { heading: "Fraction order", body: "Top (light): refinery gases, petrol, naphtha, kerosene, diesel, fuel oil, bitumen (bottom, heavy)." },
        { heading: "Property trends", body: "Down the column: molecular size ↑, boiling point ↑, viscosity ↑, flammability ↓. Uses: petrol→cars, kerosene→aircraft, diesel→lorries, fuel oil→ships, bitumen→roads." },
      ],
    },
  ],
};
