import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ech11-u5-lesson-5-1",
  code: "5-1",
  title: "Air, the Carbon Cycle and Photosynthesis",
  goal: "I CAN describe the composition of air, explain how air is separated industrially, and outline the carbon and oxygen cycles.",
  standards: ["4CH1 1.1", "4CH1 2.16", "4CH1 2.17", "4CH1 2.18"],
  
  vocabulary: [
    { term: "Dry air", definition: "Air with all water vapour removed; about 78% nitrogen, 21% oxygen, 0.9% argon and 0.04% carbon dioxide by volume." },
    { term: "Carbon cycle", definition: "The continuous movement of carbon between the atmosphere, living organisms, fossil fuels and rocks such as limestone." },
    { term: "Photosynthesis", definition: "The process by which green plants use light energy to convert carbon dioxide and water into glucose and oxygen." },
    { term: "Respiration", definition: "The process by which living cells release energy from glucose, using oxygen and producing carbon dioxide and water." },
    { term: "Combustion", definition: "Rapid reaction of a fuel with oxygen, releasing energy and producing carbon dioxide and water." },
    { term: "Fossil fuel", definition: "A fuel formed from the remains of ancient organisms over millions of years, such as coal, oil and natural gas." },
  ],
  concepts: [
    {
      id: "ech11-u5-air-composition",
      title: "The composition of air and its uses",
      skill: "Recall the percentages of gases in dry air, give uses of each major gas and describe how air is separated industrially.",
      lesson: {
        sections: [
          {
            heading: "What air is made of",
            body: "**Dry air** is a mixture of gases. By volume it is about **78% nitrogen**, **21% oxygen**, **0.9% argon**, **0.04% carbon dioxide** and small amounts of other gases. Water vapour makes up a variable proportion of moist air and is removed before the percentages above are quoted.\n\nNitrogen and oxygen make up about 99% of dry air, which is why early experiments such as burning phosphorus in a sealed bell jar show that about one fifth of air is 'used up' — the oxygen is consumed while the nitrogen remains.",
          },
          {
            heading: "Uses of the gases in air",
            body: "- **Nitrogen:** used to make ammonia (for fertilisers), as an inert atmosphere in food packaging to prevent oxidation, and to purge pipelines and tanks.\n- **Oxygen:** essential for respiration, used in steel making, welding and hospital oxygen therapy.\n- **Argon:** used inside light bulbs and welding because it is unreactive.\n- **Carbon dioxide:** used in fire extinguishers (it smothers flames), in fizzy drinks and in photosynthesis research.",
          },
          {
            heading: "Separating air industrially",
            body: "Air is first filtered and cooled until it liquefies. The liquid air is then warmed slowly in a **fractionating column**. Because the gases have different boiling points — nitrogen boils at $-196^\\circ\\text{C}$, oxygen at $-183^\\circ\\text{C}$ and argon at $-186^\\circ\\text{C}$ — each gas evaporates at a different height and is collected separately. This is the same principle as fractional distillation of crude oil: separate by boiling point.",
          },
        ],
        keyFormulas: [
          { name: "Composition of dry air", statement: "N$_2$ 78%, O$_2$ 21%, Ar 0.9%, CO$_2$ 0.04% by volume" },
          { name: "Boiling points", statement: "N$_2$ -196 °C, O$_2$ -183 °C, Ar -186 °C" },
          { name: "Gas percentage", statement: "volume of gas = percentage ÷ 100 × total volume of air" },
        ],
        workedExample: {
          problem: "A student collects 2.0 dm$^3$ of dry air at room temperature. Calculate the volume of oxygen it contains and state one use of nitrogen obtained from air.",
          solution: "Oxygen is 21% of dry air by volume. Volume of O$_2$ = $\\frac{21}{100} \\times 2.0 = 0.42$ dm$^3$. Nitrogen from air is used to make ammonia fertiliser (or as an inert packaging atmosphere).",
        },
      },
      questions: [
        {
          id: "ech11-u5-air-composition-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas makes up the largest percentage of dry air?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Oxygen"
                    },
                    {
                              "id": "b",
                              "text": "Nitrogen"
                    },
                    {
                              "id": "c",
                              "text": "Argon"
                    },
                    {
                              "id": "d",
                              "text": "Carbon dioxide"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Composition of dry air",
                              "statement": "Dry air is about 78% nitrogen and 21% oxygen by volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nitrogen at 78% is the largest component.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Nitrogen",
          "commonErrors": [
                    "Choosing oxygen because it is essential for life, but it is only about 21% of air."
          ]
},
        },
        {
          id: "ech11-u5-air-composition-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the percentage by volume of oxygen and of nitrogen in dry air, and name one use of each gas.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Composition of dry air",
                              "statement": "About 21% oxygen and 78% nitrogen by volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oxygen is about 21% and nitrogen about 78% of dry air.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Uses: oxygen for respiration/welding; nitrogen for ammonia production or inert packaging (any valid pair).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "O$_2$ 21%, N$_2$ 78%; e.g. oxygen for respiration, nitrogen for fertiliser manufacture.",
          "commonErrors": [
                    "Swapping the percentages — oxygen is the smaller of the two."
          ]
},
        },
        {
          id: "ech11-u5-air-composition-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why nitrogen gas is used to fill the packaging of foods such as crisps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Nitrogen inertness",
                              "statement": "Nitrogen is unreactive under normal conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nitrogen is unreactive and does not support combustion.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It excludes oxygen from the packet, so oxidative reactions and the growth of aerobic microorganisms are prevented.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "This stops the food going rancid or stale and preserves its quality.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Nitrogen is inert; it excludes oxygen, preventing oxidation and spoilage.",
          "commonErrors": [
                    "Saying nitrogen 'adds flavour' — it is used because it is unreactive, not for taste."
          ]
},
        },
        {
          id: "ech11-u5-air-composition-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Air is cooled and liquefied, then allowed to warm slowly in a fractionating column. Nitrogen, oxygen and argon are collected separately.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the property of the gases that allows them to be separated in this way.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the order in which the gases leave the top of the column.",
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
                              "name": "Fractional distillation",
                              "statement": "Gases with different boiling points separate when a liquid mixture is warmed."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The gases have different boiling points: N$_2$ -196 °C, Ar -186 °C, O$_2$ -183 °C.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each gas evaporates at the temperature of its own boiling point, so it separates from the others.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Nitrogen has the lowest boiling point so it evaporates first and leaves near the top.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Argon boils next at -186 °C and is collected below nitrogen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Oxygen has the highest boiling point (-183 °C) so it leaves last, nearest the bottom of the column.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Different boiling points (b) nitrogen first (top), then argon, then oxygen.",
          "commonErrors": [
                    "Reversing the order — the gas with the lowest boiling point leaves first."
          ]
},
        },
        {
          id: "ech11-u5-air-composition-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student places a burning candle inside a bell jar sealed over a trough of water. After a few minutes the candle goes out and the water level inside the jar rises by about one fifth of the jar's volume.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the candle goes out.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the water level rises by about one fifth.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Composition of dry air",
                              "statement": "Oxygen is about 21% (one fifth) of dry air."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The candle flame needs oxygen to keep burning.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The oxygen inside the sealed jar is used up, so combustion stops.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "The burning candle consumes oxygen and produces carbon dioxide and water vapour.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The carbon dioxide produced dissolves in / is absorbed by the water, so gas volume inside falls.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The water is pushed up by the greater atmospheric pressure outside the jar.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "The rise of about one fifth shows oxygen is about one fifth of air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) Oxygen is used up (b) O$_2$ consumed and CO$_2$ absorbed, so water rises ~1/5.",
          "commonErrors": [
                    "Saying the candle 'uses up all the air' — only oxygen is consumed; nitrogen remains."
          ]
},
        },
        {
          id: "ech11-u5-air-composition-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "An industrial company obtains nitrogen, oxygen and argon from air.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give the approximate percentage of each gas in dry air.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Name one important use of nitrogen and one of argon obtained from air.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why fractional distillation of liquid air works, naming the key property of the gases.",
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
                              "name": "Fractional distillation",
                              "statement": "Mixtures separate by differences in boiling point."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Nitrogen about 78%.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Oxygen about 21%.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Argon about 0.9% (accept 1%).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Nitrogen: ammonia/fertiliser manufacture or inert packaging.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Argon: filler gas in light bulbs or shielding gas in welding.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The gases have different boiling points.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "As liquid air warms, each gas boils at its own temperature.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "They evaporate at different heights in the column.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Each vapour is condensed and collected separately.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) N$_2$ 78%, O$_2$ 21%, Ar 0.9% (b) N$_2$: fertilisers; Ar: light bulbs (c) different boiling points → separate vapours.",
          "commonErrors": [
                    "Saying the gases are separated because they have different densities — it is boiling point."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u5-carbon-oxygen-cycles",
      title: "The carbon and oxygen cycles",
      skill: "Describe how carbon and oxygen move between the atmosphere, organisms, fossil fuels and rocks.",
      lesson: {
        sections: [
          {
            heading: "The carbon cycle",
            body: "Carbon moves between stores in a cycle:\n\n- **Photosynthesis** removes $\\text{CO}_2$ from the air and builds it into glucose in plants.\n- **Respiration** by plants, animals and microorganisms releases $\\text{CO}_2$ back to the air.\n- **Combustion** of fossil fuels (coal, oil, natural gas) and wood releases stored carbon as $\\text{CO}_2$.\n- **Decomposition** of dead organisms returns carbon to the soil and air.\n- Over millions of years, carbon can be locked away as **fossil fuels** or as **calcium carbonate** in limestone shells and rocks. Weathering and reactions can return some of this carbon to the atmosphere.",
          },
          {
            heading: "The oxygen cycle",
            body: "Oxygen is cycled mainly by **photosynthesis**, which releases $\\text{O}_2$, and by **respiration** and **combustion**, which consume it. A small amount of oxygen also comes from the decomposition of water by ultraviolet light. Because photosynthesis and respiration are roughly balanced over long periods, the percentage of oxygen in air stays almost constant at about 21%.",
          },
          {
            heading: "Human impact on the cycles",
            body: "Burning fossil fuels adds carbon dioxide to the atmosphere much faster than natural processes remove it. **Deforestation** reduces the number of trees photosynthesising and removes a carbon sink. Together these processes have increased the atmospheric $\\text{CO}_2$ concentration, which is linked to the **enhanced greenhouse effect** studied in the next lesson.",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis", statement: "carbon dioxide + water $\\xrightarrow{light}$ glucose + oxygen" },
          { name: "Aerobic respiration", statement: "glucose + oxygen $\\rightarrow$ carbon dioxide + water + energy" },
          { name: "Combustion of methane", statement: "$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$" },
          { name: "Carbon sink", statement: "a store that absorbs more carbon than it releases" },
        ],
        workedExample: {
          problem: "Explain, using the carbon cycle, why burning a lump of coal increases the carbon dioxide concentration of the atmosphere.",
          solution: "Coal is a fossil fuel in which carbon was locked away for millions of years. Burning it reacts the carbon with oxygen to form $\\text{CO}_2$, which enters the atmosphere. This adds carbon dioxide faster than photosynthesis and other natural processes can remove it, so the atmospheric concentration rises.",
        },
      },
      questions: [
        {
          id: "ech11-u5-carbon-oxygen-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process removes carbon dioxide from the atmosphere?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Respiration"
                    },
                    {
                              "id": "b",
                              "text": "Combustion"
                    },
                    {
                              "id": "c",
                              "text": "Photosynthesis"
                    },
                    {
                              "id": "d",
                              "text": "Decomposition"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Photosynthesis",
                              "statement": "Green plants convert carbon dioxide and water into glucose and oxygen using light energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Photosynthesis consumes CO$_2$; respiration and combustion release it.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Photosynthesis",
          "commonErrors": [
                    "Choosing respiration — it releases CO$_2$ rather than removing it."
          ]
},
        },
        {
          id: "ech11-u5-carbon-oxygen-cycles-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the carbon cycle and state two processes that release carbon dioxide into the atmosphere.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Carbon cycle",
                              "statement": "The movement of carbon between the atmosphere, organisms, fossil fuels and rocks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The carbon cycle is the continuous movement of carbon between stores.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Any two of respiration, combustion, decomposition, volcanic activity.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "The carbon cycle; e.g. respiration and combustion.",
          "commonErrors": [
                    "Naming the oxygen cycle — oxygen is cycled mainly by photosynthesis and respiration."
          ]
},
        },
        {
          id: "ech11-u5-carbon-oxygen-cycles-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a word equation for photosynthesis and explain why plants need light for this process.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Photosynthesis",
                              "statement": "carbon dioxide + water $\\rightarrow$ glucose + oxygen, using light energy and chlorophyll."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Word equation: carbon dioxide + water $\\rightarrow$ glucose + oxygen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Light provides the energy needed to drive the reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Without light the reaction cannot proceed, so plants cannot make glucose or release oxygen.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "carbon dioxide + water $\\rightarrow$ glucose + oxygen; light supplies the energy.",
          "commonErrors": [
                    "Writing the equation backwards or omitting oxygen as a product."
          ]
},
        },
        {
          id: "ech11-u5-carbon-oxygen-cycles-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Consider the carbon cycle as it operates today.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two processes that add carbon dioxide to the atmosphere.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State two processes that remove carbon dioxide from the atmosphere.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Carbon cycle",
                              "statement": "Carbon moves between atmospheric CO$_2$, living organisms, fossil fuels and rocks."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Any two of: respiration, combustion of fossil fuels/wood, decomposition.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Photosynthesis by plants and algae.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Dissolution of CO$_2$ in oceans/water forming carbonates and hydrogencarbonates.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Formation of limestone/calcium carbonate shells over long timescales.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) respiration, combustion (b) photosynthesis, ocean uptake, carbonate formation.",
          "commonErrors": [
                    "Listing nitrogen fixation or other nitrogen-cycle processes as carbon sinks."
          ]
},
        },
        {
          id: "ech11-u5-carbon-oxygen-cycles-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Natural gas is mostly methane, $\\text{CH}_4$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the balanced symbol equation for the complete combustion of methane.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how burning natural gas affects the carbon cycle and the atmosphere.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Combustion of methane",
                              "statement": "$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Correct formulae: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Atoms balanced: 1 C, 4 H, 4 O on each side.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Methane is a fossil fuel whose carbon was locked away for millions of years.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Combustion transfers that carbon to $\\text{CO}_2$ in the atmosphere.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This happens faster than photosynthesis and ocean uptake can remove it.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "The atmospheric $\\text{CO}_2$ concentration therefore rises, enhancing the greenhouse effect.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$ (b) adds fossil carbon as CO$_2$ faster than it is removed.",
          "commonErrors": [
                    "Forgetting to balance the equation — methane needs 2 O$_2$ and forms 2 H$_2$O."
          ]
},
        },
        {
          id: "ech11-u5-carbon-oxygen-cycles-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A country clears a large area of tropical rainforest for farmland and burns much of the wood.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the role of the rainforest in the carbon cycle before clearance.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how clearance and burning change the carbon dioxide concentration of the atmosphere.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "State one other consequence for the oxygen cycle.",
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
                              "name": "Carbon sinks",
                              "statement": "Forests absorb CO$_2$ by photosynthesis and store carbon in biomass and soil."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Trees photosynthesise, removing CO$_2$ from the atmosphere.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Carbon is stored in wood, leaves and soil — the forest is a carbon sink.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Respiration and decomposition return some carbon, but net removal occurs while the forest grows.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decomposers break down dead material, returning carbon slowly to soil and air.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Clearing removes photosynthesising trees, reducing CO$_2$ uptake.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Burning the wood releases stored carbon quickly as CO$_2$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Less uptake plus extra release means atmospheric CO$_2$ rises.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The effect is compounded because the sink is permanently lost if land is farmed.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Less photosynthesis means less oxygen released to the atmosphere.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Over time the oxygen percentage could fall slightly (long-term effect is small).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) forest is a carbon sink via photosynthesis (b) less uptake + burning → more CO$_2$ (c) reduced O$_2$ release.",
          "commonErrors": [
                    "Claiming the oxygen percentage would drop noticeably — it is buffered by the huge atmospheric reservoir."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u5-air-carbon-notes",
      title: "Air and the carbon cycle — notes",
      summary: "Dry air is ~78% N$_2$, 21% O$_2$, 0.9% Ar, 0.04% CO$_2$. Carbon cycles via photosynthesis, respiration, combustion and fossil fuel formation.",
      sections: [
        { heading: "Key composition", body: "Nitrogen 78%, oxygen 21%, argon 0.9%, carbon dioxide 0.04% by volume. Separation uses fractional distillation of liquid air by boiling point." },
        { heading: "Carbon cycle in one line", body: "CO$_2$ $\\xrightarrow{\\text{photosynthesis}}$ glucose $\\xrightarrow{\\text{respiration/combustion}}$ CO$_2$; fossil fuels store carbon for millions of years." },
        { heading: "Exam focus", body: "Be ready to explain how deforestation and fossil fuel burning raise atmospheric CO$_2$, linking to the enhanced greenhouse effect." },
      ],
    },
  ],
};
