import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "ech10-u9-lesson-9-1",
  code: "9-1",
  title: "Crude Oil and Fractional Distillation",
  goal: "I CAN describe crude oil as a mixture of hydrocarbons, explain fractional distillation and identify the main fractions and their uses.",
  standards: ["4CH1 4.1", "4CH1 4.2", "4CH1 4.3", "4CH1 4.4"],
  
  vocabulary: [
    { term: "Hydrocarbon", definition: "A compound that contains only hydrogen and carbon atoms." },
    { term: "Crude oil", definition: "A mixture of many hydrocarbons, mostly alkanes, formed over millions of years from the remains of ancient marine organisms." },
    { term: "Fraction", definition: "A group of hydrocarbons with similar boiling points, collected together during fractional distillation." },
    { term: "Fractional distillation", definition: "Separating a mixture of liquids by their different boiling points using a fractionating column." },
    { term: "Viscosity", definition: "How easily a liquid flows. Thick fractions such as fuel oil are more viscous than thin fractions such as petrol." },
    { term: "Refinery gas", definition: "The fraction collected at the top of the fractionating column; it contains small molecules such as methane and is used as bottled gas fuel." },
  ],
  concepts: [
    {
      id: "ech10-u9-crude-oil-fractions",
      title: "Crude oil and its fractions",
      skill: "Describe crude oil, list the main fractions in order and relate their properties to their uses.",
      lesson: {
        sections: [
          {
            heading: "What is crude oil?",
            body: "**Crude oil** is a thick, black liquid mixture of many different hydrocarbons, mostly **alkanes**. It formed over millions of years from the remains of ancient marine organisms that were buried and heated underground. Because it is a mixture, it must be separated before use.\n\nThe hydrocarbons in crude oil range from small molecules with few carbon atoms (gases) to very large molecules (thick, viscous liquids and solids).",
          },
          {
            heading: "The main fractions",
            body: "Fractional distillation separates crude oil into **fractions**. From top (lowest boiling point) to bottom (highest boiling point):\n\n| Fraction | Approx. boiling range | Uses |\n| --- | --- | --- |\n| Refinery gas | below $40^\\circ\\text{C}$ | bottled gas fuel |\n| Petrol | $40$–$100^\\circ\\text{C}$ | car fuel |\n| Naphtha | $100$–$150^\\circ\\text{C}$ | chemicals feedstock |\n| Kerosene | $150$–$250^\\circ\\text{C}$ | jet fuel, heating oil |\n| Diesel | $250$–$350^\\circ\\text{C}$ | diesel engines |\n| Fuel oil | $350$–$400^\\circ\\text{C}$ | ship and power-station fuel |\n| Bitumen | above $400^\\circ\\text{C}$ | road surfacing |\n\nSmaller molecules have lower boiling points and are less viscous; larger molecules boil higher and are more viscous.",
          },
        ],
        keyFormulas: [
          { name: "Hydrocarbon", statement: "contains only C and H atoms" },
          { name: "Fraction order", statement: "refinery gas → petrol → naphtha → kerosene → diesel → fuel oil → bitumen (increasing boiling point)" },
          { name: "Trend", statement: "smaller molecules: lower boiling point, less viscous; larger molecules: higher boiling point, more viscous" },
        ],
        workedExample: {
          problem: "A fraction of crude oil boils at $200^\\circ\\text{C}$ and is used as aircraft fuel. Name the fraction and state whether its molecules are relatively small or large.",
          solution: "A boiling point of $200^\\circ\\text{C}$ places it in the kerosene fraction (boiling range $150$–$250^\\circ\\text{C}$), which is used as jet fuel. Its molecules are of medium size — smaller than diesel molecules but larger than petrol molecules.",
        },
      },
      questions: [
        {
          id: "ech10-u9-crude-oil-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about crude oil is correct?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It is a pure compound made of alkanes only"
                    },
                    {
                              "id": "b",
                              "text": "It is a mixture of many hydrocarbons"
                    },
                    {
                              "id": "c",
                              "text": "It contains only small gas molecules"
                    },
                    {
                              "id": "d",
                              "text": "It is formed quickly from decaying plants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Crude oil",
                              "statement": "A mixture of many hydrocarbons, mostly alkanes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crude oil is a mixture of many different hydrocarbons formed over millions of years.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) It is a mixture of many hydrocarbons",
          "commonErrors": [
                    "Calling crude oil a pure substance or a single compound."
          ]
},
        },
        {
          id: "ech10-u9-crude-oil-fractions-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define the term 'fraction' and give one example of a fraction obtained from crude oil with its main use.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fraction",
                              "statement": "A group of hydrocarbons with similar boiling points collected during fractional distillation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A fraction is a group of hydrocarbons with similar boiling points, separated from crude oil.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Any one correct pair, e.g. petrol — car fuel; diesel — diesel engines; bitumen — road surfacing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Fraction = similar-boiling hydrocarbons; e.g. petrol for car fuel.",
          "commonErrors": [
                    "Naming a pure compound such as methane as a fraction."
          ]
},
        },
        {
          id: "ech10-u9-crude-oil-fractions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The table shows part of a fractionating column. Put the fractions in the correct order from top to bottom of the column and explain the trend in boiling point.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Order these fractions: diesel, petrol, bitumen, refinery gas.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain why this is the correct order.",
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
                              "name": "Fraction trend",
                              "statement": "Boiling point increases down the column; smaller molecules rise higher."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Order: refinery gas, petrol, diesel, bitumen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Boiling point increases with the size of the hydrocarbon molecules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Small molecules boil at low temperatures and rise to the top; large molecules need higher temperatures and condense lower down.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "refinery gas → petrol → diesel → bitumen; boiling point increases with molecular size.",
          "commonErrors": [
                    "Putting bitumen at the top because it is 'heaviest'."
          ]
},
        },
        {
          id: "ech10-u9-crude-oil-fractions-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A fractionating column separates crude oil. Three fractions are collected: one used for bottled gas, one for jet fuel and one for road surfacing.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Match each use to the correct fraction.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State which of the three fractions has the highest boiling point and explain why.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Fraction uses",
                              "statement": "Refinery gas — bottled gas; kerosene — jet fuel; bitumen — road surfacing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bottled gas: refinery gas.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Jet fuel: kerosene.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Road surfacing: bitumen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bitumen has the highest boiling point because it contains the largest hydrocarbon molecules.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Bottled gas = refinery gas; jet fuel = kerosene; roads = bitumen; bitumen boils highest (largest molecules).",
          "commonErrors": [
                    "Matching jet fuel to diesel."
          ]
},
        },
        {
          id: "ech10-u9-crude-oil-fractions-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Crude oil is heated and passed into a fractionating column. Vaporised fractions rise and cool at different heights, where they condense and are collected.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why crude oil is heated before entering the column.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why different fractions condense at different heights in the column.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the temperature is highest at the bottom of the column.",
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
                              "statement": "Separate liquids by boiling point: heat to vaporise, cool so each fraction condenses at its boiling point."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Heating vaporises the hydrocarbons so they can rise up the column as a gas.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Only vapour can separate by boiling point; liquid would not rise.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each fraction has a different boiling point.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A fraction condenses when the column temperature falls below its boiling point, so each collects at a different height.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "The bottom is hottest so that all fractions, including the high-boiling ones, are vaporised.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Temperature falls towards the top, so low-boiling fractions stay as gas longest and are collected highest.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) vaporise the mixture (b) different boiling points condense at different heights (c) bottom hottest to vaporise all fractions.",
          "commonErrors": [
                    "Saying fractions are separated by density rather than boiling point."
          ]
},
        },
        {
          id: "ech10-u9-crude-oil-fractions-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student is given four unidentified fractions from crude oil, labelled W, X, Y and Z. Their boiling ranges and one use each are shown below.\n\n| Fraction | Boiling range ($^\\circ\\text{C}$) | Use |\n| --- | --- | --- |\n| W | $40$–$100$ | fuel for cars |\n| X | $250$–$350$ | fuel for lorries |\n| Y | below $40$ | camping gas |\n| Z | above $400$ | surfacing roads |",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name each fraction W, X, Y and Z.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "State which fraction is the most viscous and explain your answer.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why fraction Y is a gas at room temperature while fraction Z is a thick liquid or solid.",
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
                              "name": "Fraction properties",
                              "statement": "Boiling point and viscosity increase with hydrocarbon chain length."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "W is petrol ($40$–$100^\\circ\\text{C}$, car fuel).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "X is diesel ($250$–$350^\\circ\\text{C}$, lorry fuel).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Y is refinery gas (below $40^\\circ\\text{C}$, camping gas).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Z is bitumen (above $400^\\circ\\text{C}$, road surfacing).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Z (bitumen) is the most viscous.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It contains the largest hydrocarbon molecules, which do not flow easily.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Y contains very small molecules with weak intermolecular forces, so they are gases at room temperature.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Z contains very large molecules with strong intermolecular forces, so it is a thick liquid or solid.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "W petrol, X diesel, Y refinery gas, Z bitumen; Z most viscous; Y small molecules = gas, Z large = viscous.",
          "commonErrors": [
                    "Matching lorry fuel to kerosene instead of diesel."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u9-fractional-distillation",
      title: "How fractional distillation works and uses of fractions",
      skill: "Explain the fractional distillation process and link fraction properties to their industrial uses.",
      lesson: {
        sections: [
          {
            heading: "The fractionating column",
            body: "Crude oil is heated to about $400^\\circ\\text{C}$ and enters a tall **fractionating column**. As the vapour rises it cools. Each fraction condenses at the height where the temperature falls below its boiling point and is collected through a side pipe.\n\n- **Bottom** (hottest): fuel oil and bitumen condense.\n- **Middle**: diesel, kerosene and naphtha.\n- **Top** (coolest): petrol and refinery gas remain vapour longest.\n\nThe process is continuous: crude oil is constantly fed in and fractions are constantly drawn off.",
          },
          {
            heading: "Why the fractions are useful",
            body: "Each fraction's properties suit particular uses:\n\n- **Refinery gas and petrol**: small molecules, volatile, ignite easily — ideal fuels for camping gas and cars.\n- **Kerosene**: burns cleanly with a hot flame — jet engine fuel.\n- **Diesel**: less volatile, higher energy density — lorries and ships.\n- **Fuel oil**: very viscous, burned in power stations and ships.\n- **Bitumen**: sticky, waterproof solid — road surfacing.\n- **Naphtha**: feedstock for making plastics and chemicals.\n\nDemand for petrol and gases often exceeds supply, so large hydrocarbon molecules are converted into smaller ones by **cracking**.",
          },
        ],
        keyFormulas: [
          { name: "Fractional distillation", statement: "separate by boiling point in a fractionating column" },
          { name: "Column", statement: "hot at bottom, cool at top; each fraction condenses at its boiling point" },
          { name: "Use rule", statement: "volatile fractions = fuels; viscous fractions = oils/bitumen; naphtha = chemicals feedstock" },
        ],
        workedExample: {
          problem: "Explain why petrol is collected near the top of the fractionating column while bitumen is collected at the bottom.",
          solution: "Petrol has a low boiling point ($40$–$100^\\circ\\text{C}$), so it stays as a gas until the column is quite cool near the top. Bitumen has a very high boiling point (above $400^\\circ\\text{C}$), so it condenses in the hottest part at the bottom.",
        },
      },
      questions: [
        {
          id: "ech10-u9-fractional-distillation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where in a fractionating column is the temperature highest?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "At the top"
                    },
                    {
                              "id": "b",
                              "text": "At the bottom"
                    },
                    {
                              "id": "c",
                              "text": "It is the same throughout"
                    },
                    {
                              "id": "d",
                              "text": "In the middle only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Fractionating column",
                              "statement": "Hottest at the bottom, coolest at the top."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crude oil enters hot at the bottom; vapour rises and cools towards the top.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) At the bottom",
          "commonErrors": [
                    "Reversing the temperature gradient."
          ]
},
        },
        {
          id: "ech10-u9-fractional-distillation-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the purpose of the fractionating column in the processing of crude oil.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Fractional distillation",
                              "statement": "Separates crude oil into fractions by boiling point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It separates crude oil into fractions according to their boiling points.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Each fraction can then be used for a different purpose (fuels, bitumen, chemicals feedstock).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Separates crude oil into useful fractions by boiling point.",
          "commonErrors": [
                    "Saying it 'cleans' or 'purifies' the oil chemically."
          ]
},
        },
        {
          id: "ech10-u9-fractional-distillation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why naphtha is more useful as a feedstock for the chemical industry than as a fuel, while diesel is mainly used as a fuel.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Fraction uses",
                              "statement": "Match fraction properties to uses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Naphtha contains medium-sized molecules that are valuable raw materials for making plastics and other chemicals.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Diesel's larger molecules release more energy per litre and burn steadily in engines.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "So each fraction is used where its properties are most valuable.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Naphtha → chemicals feedstock; diesel → fuel, matched to molecular size and energy content.",
          "commonErrors": [
                    "Saying all fractions are interchangeable fuels."
          ]
},
        },
        {
          id: "ech10-u9-fractional-distillation-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Crude oil contains hydrocarbons ranging from $\\text{C}_1$ to over $\\text{C}_{40}$. The demand for petrol and refinery gas is greater than the supply obtained directly from distillation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which fractions are in short supply relative to demand.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain why there is a mismatch between supply and demand.",
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
                              "name": "Fraction demand",
                              "statement": "Small fractions (petrol, gases) are in high demand but low natural abundance in crude oil."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Petrol and refinery gas (small hydrocarbons) are in short supply.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Crude oil naturally contains relatively few small molecules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Most of the oil is made of larger molecules such as diesel, fuel oil and bitumen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Demand for petrol and gases exceeds what distillation alone can supply, so larger molecules must be converted to smaller ones by cracking.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) petrol and refinery gas (b) crude oil has few small molecules; cracking converts large ones.",
          "commonErrors": [
                    "Saying there is too much petrol in crude oil."
          ]
},
        },
        {
          id: "ech10-u9-fractional-distillation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A refinery processes $1000\\text{ kg}$ of crude oil. The fractions obtained include $180\\text{ kg}$ of petrol, $220\\text{ kg}$ of diesel, $90\\text{ kg}$ of kerosene, $300\\text{ kg}$ of fuel oil and the rest bitumen and gases.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the mass of bitumen and gases obtained.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State which fraction has the greatest mass and suggest why this might be a concern for the refinery.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how cracking could help the refinery use its product mix more profitably.",
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
                              "statement": "Mass balance: total in = total out."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sum known fractions: $180 + 220 + 90 + 300 = 790\\text{ kg}$.",
                              "working": "1000 - 790",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Remainder $= 210\\text{ kg}$ of bitumen and gases.",
                              "working": "1000 - 790 = 210\\text{ kg}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fuel oil has the greatest mass ($300\\text{ kg}$).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fuel oil is worth less than petrol, so a large proportion earns less profit.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cracking converts surplus heavy fractions into more petrol and gases.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "This increases the proportion of high-demand, high-value products.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $210\\text{ kg}$ (b) fuel oil — low value per kg (c) cracking makes more petrol/gases from heavy fractions.",
          "commonErrors": [
                    "Adding the masses incorrectly or forgetting units."
          ]
},
        },
        {
          id: "ech10-u9-fractional-distillation-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two students test samples of four fractions: A (boiling range $40$–$100^\\circ\\text{C}$), B ($150$–$250^\\circ\\text{C}$), C ($250$–$350^\\circ\\text{C}$) and D (above $400^\\circ\\text{C}$).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name fraction A and state its main use.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name fractions B, C and D and state one use of each.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Predict which fraction would be the easiest to ignite and explain why.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Predict which fraction would flow most slowly and explain why.",
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
                              "name": "Fraction properties",
                              "statement": "Lower boiling point = smaller molecules = more volatile; higher = larger = more viscous."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A is petrol.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Main use: fuel for cars.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "B is kerosene — jet fuel or heating oil.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "C is diesel — lorry/engine fuel.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "D is bitumen — road surfacing.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "A (petrol) ignites most easily because its small molecules evaporate and mix with oxygen readily.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "D (bitumen) flows most slowly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "It contains the largest molecules, giving the highest viscosity.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "A petrol/car fuel; B kerosene/jet fuel; C diesel/lorries; D bitumen/roads; A ignites easiest; D most viscous.",
          "commonErrors": [
                    "Matching kerosene to car fuel instead of jet fuel."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u9-crude-oil-notes",
      title: "Crude oil — revision notes",
      summary: "Crude oil is a mixture of hydrocarbons separated by fractional distillation into fractions ordered by boiling point: gas → petrol → naphtha → kerosene → diesel → fuel oil → bitumen.",
      sections: [
        { heading: "Key idea", body: "Small molecules boil low and are volatile fuels; large molecules boil high and are viscous (fuel oil, bitumen)." },
        { heading: "Column", body: "Hot at the bottom, cool at the top; each fraction condenses where the temperature drops below its boiling point." },
        { heading: "Uses", body: "Refinery gas/camping gas, petrol/cars, kerosene/jets, diesel/lorries, fuel oil/ships, bitumen/roads, naphtha/chemicals." },
      ],
    },
  ],
};
