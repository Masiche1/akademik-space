import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ech11-u6-lesson-6-1",
  code: "6-1",
  title: "Solutions, Solubility and Concentration",
  goal: "I CAN describe solutions and solubility, use solubility data in calculations and distinguish solubility from concentration.",
  standards: ["4CH1 1.12", "4CH1 1.13", "4CH1 1.14", "4CH1 1.15"],
  
  vocabulary: [
    { term: "Solution", definition: "A homogeneous mixture of a solute dissolved in a solvent." },
    { term: "Solute", definition: "The substance that is dissolved in a solution." },
    { term: "Solvent", definition: "The liquid (usually water) in which the solute is dissolved." },
    { term: "Solubility", definition: "The maximum mass of solute that dissolves in 100 g of solvent at a given temperature, in g per 100 g of water." },
    { term: "Saturated solution", definition: "A solution containing the maximum amount of dissolved solute at that temperature; extra solute remains undissolved." },
    { term: "Unsaturated solution", definition: "A solution that can dissolve more solute at that temperature." },
    { term: "Concentration", definition: "The amount of solute dissolved per unit volume (or mass) of solution or solvent." },
  ],
  concepts: [
    {
      id: "ech11-u6-solutions-solubility",
      title: "Solutions, solubility and saturation",
      skill: "Define solution terms, calculate solubility from mass data and explain saturated and unsaturated solutions.",
      lesson: {
        sections: [
          {
            heading: "Solution vocabulary",
            body: "A **solution** is a uniform mixture made by dissolving a **solute** (the solid, e.g. salt) in a **solvent** (the liquid, usually water). The result looks clear because the particles are too small to see and do not settle out — it is homogeneous.\n\n**Solubility** is the maximum mass of solute that will dissolve in 100 g of water at a stated temperature. It is quoted in g per 100 g of water. A solution holding that maximum is **saturated**; one holding less is **unsaturated** and can dissolve more solute.",
          },
          {
            heading: "Solubility calculations",
            body: "To find solubility, scale the mass dissolved up to 100 g of water:\n\n$$\\text{solubility} = \\frac{\\text{mass of solute (g)}}{\\text{mass of water (g)}} \\times 100$$\n\nIf 18 g of salt dissolves in 90 g of water, solubility = $\\frac{18}{90} \\times 100 = 20$ g per 100 g water.",
          },
          {
            heading: "Solubility versus concentration",
            body: "**Solubility** is a fixed property of a solute at a given temperature — the maximum possible. **Concentration** describes how much solute is actually present per unit volume and can be any value up to the solubility limit. A concentrated solution may still be unsaturated; a dilute solution of a very soluble salt can be saturated.",
          },
        ],
        keyFormulas: [
          { name: "Solubility", statement: "solubility = $\\frac{\\text{mass of solute}}{\\text{mass of water}} \\times 100$ g per 100 g water" },
          { name: "Saturated", statement: "contains the maximum solute that can dissolve at that temperature" },
          { name: "Unsaturated", statement: "can dissolve more solute at that temperature" },
        ],
        workedExample: {
          problem: "At 30 °C, 36 g of potassium nitrate dissolves in 200 g of water. Calculate its solubility at 30 °C and state whether a solution containing 50 g in 250 g of water is saturated.",
          solution: "Solubility = $\\frac{36}{200} \\times 100 = 18$ g per 100 g water. For 250 g water the maximum is $\\frac{18}{100} \\times 250 = 45$ g. Since 50 g exceeds 45 g, the solution is saturated (5 g would remain undissolved).",
        },
      },
      questions: [
        {
          id: "ech11-u6-solutions-solubility-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum mass of solute that can dissolve in 100 g of water at a given temperature called?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Concentration"
                    },
                    {
                              "id": "b",
                              "text": "Solubility"
                    },
                    {
                              "id": "c",
                              "text": "Saturation point"
                    },
                    {
                              "id": "d",
                              "text": "Density"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Solubility",
                              "statement": "Maximum mass of solute per 100 g of water at a given temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solubility is expressed as g per 100 g water; concentration is amount per volume.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Solubility",
          "commonErrors": [
                    "Choosing concentration — that is amount per unit volume, not per 100 g water."
          ]
},
        },
        {
          id: "ech11-u6-solutions-solubility-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'saturated solution' and state what happens if more solute is added to one.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Saturated solution",
                              "statement": "A solution holding the maximum solute that can dissolve at that temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A saturated solution contains the maximum amount of dissolved solute at that temperature.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Any extra solute added will not dissolve and remains as solid at the bottom.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Max solute dissolved; extra solute stays undissolved.",
          "commonErrors": [
                    "Saying the solution 'cannot hold any more of anything' — it cannot hold more of that solute at that temperature."
          ]
},
        },
        {
          id: "ech11-u6-solutions-solubility-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "At 25 °C, 45 g of a salt dissolves in 150 g of water. Calculate the solubility of the salt at 25 °C.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "solubility",
                              "answer": 30,
                              "unit": "g per 100 g water"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Solubility",
                              "statement": "solubility = $\\frac{\\text{mass solute}}{\\text{mass water}} \\times 100$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Set up the ratio: solubility = $\\frac{45}{150} \\times 100$.",
                              "working": "45 / 150 = 0.3",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "0.3 × 100 = 30 g per 100 g water.",
                              "working": "0.3 \\times 100 = 30",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer 30 g per 100 g water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "30 g per 100 g water",
          "commonErrors": [
                    "Forgetting to scale to 100 g of water — answer must be per 100 g."
          ]
},
        },
        {
          id: "ech11-u6-solutions-solubility-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two students prepare solutions of the same salt.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what is meant by 'solute', 'solvent' and 'solution'.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how they could test whether each solution is saturated.",
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
                              "name": "Solution terms",
                              "statement": "Solute dissolves in solvent to form a solution."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Solute = dissolved substance; solvent = dissolving liquid; solution = the homogeneous mixture.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Add a small amount of the same solid solute to each solution and stir.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "If it dissolves completely, the solution is unsaturated.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "If solid remains undissolved, the solution is saturated.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) solute/solvent/solution definitions (b) add solute — dissolves = unsaturated, remains = saturated.",
          "commonErrors": [
                    "Testing with a different substance — saturation applies to the same solute."
          ]
},
        },
        {
          id: "ech11-u6-solutions-solubility-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A chemist has a solution containing 50 g of potassium nitrate dissolved in 250 g of water at 30 °C, where the solubility is 18 g per 100 g water.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the maximum mass of potassium nitrate that can dissolve in 250 g of water.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State whether the chemist's solution is saturated or unsaturated, justifying your answer.",
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
                              "name": "Solubility scaling",
                              "statement": "mass dissolved scales with mass of water."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Scale solubility to 250 g water: $\\frac{18}{100} \\times 250$.",
                              "working": "18 \\times 2.5 = 45",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Maximum = 45 g.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Answer 45 g.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "50 g exceeds the maximum of 45 g.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The solution is saturated.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "5 g of the nitrate remains undissolved at the bottom.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 45 g (b) saturated — 50 g > 45 g, 5 g undissolved.",
          "commonErrors": [
                    "Comparing 50 g to 18 g directly instead of scaling solubility to 250 g water."
          ]
},
        },
        {
          id: "ech11-u6-solutions-solubility-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A factory needs to dissolve a salt in water for a process.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why a solution can look clear yet be saturated.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two factors that affect how much solute dissolves.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the difference between solubility and concentration, giving an example.",
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
                              "name": "Solubility vs concentration",
                              "statement": "Solubility = maximum possible; concentration = amount actually present per volume."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Dissolved particles are too small to see, so the solution looks clear even at saturation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The limit is on dissolved particles, not visible ones.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Only when the solution is truly saturated does extra solute remain visible as solid.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Temperature — most solids are more soluble when hot.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Nature of the solute and solvent — 'like dissolves like'.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Solubility is a fixed maximum for that solute at that temperature (g per 100 g water).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Concentration is the actual amount per unit volume and can be below the maximum.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Example: a very soluble salt can make a concentrated yet unsaturated solution; a sparingly soluble salt can be saturated while dilute.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Saturation is about reaching the solubility limit; concentration is about how much is present.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) particles invisible until saturation (b) temperature, solute/solvent nature (c) solubility = max, concentration = actual.",
          "commonErrors": [
                    "Equating 'saturated' with 'concentrated' — a saturated solution can be dilute if solubility is low."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u6-solubility-curves",
      title: "Solubility curves and temperature effects",
      skill: "Interpret solubility curves, calculate masses crystallising on cooling and explain how temperature affects solubility of solids and gases.",
      lesson: {
        sections: [
          {
            heading: "Reading a solubility curve",
            body: "A **solubility curve** plots solubility (g per 100 g water, vertical axis) against temperature (°C, horizontal axis) for one solute. Each point gives the maximum mass that dissolves in 100 g of water at that temperature. Curves for most solids rise steeply with temperature — hotter water dissolves more. Gases behave differently: their solubility **falls** as temperature rises, so cold water holds more dissolved gas.",
          },
          {
            heading: "Using curves to find crystallised mass",
            body: "If a saturated solution is cooled, the solubility drops and the excess solute crystallises:\n\n$$\\text{mass crystallised} = \\text{mass dissolved when hot} - \\text{solubility when cold (scaled to the water mass)}$$\n\nExample: a saturated solution in 100 g water at 80 °C holds 170 g of solute. At 20 °C solubility is 40 g, so cooling crystallises $170 - 40 = 130$ g.",
          },
          {
            heading: "Comparing solutes",
            body: "A steeper curve means solubility changes more with temperature — ideal for purification by crystallisation, because cooling gives a large yield of crystals. A flatter curve means temperature has little effect. Two curves can cross: a salt more soluble when cold may be less soluble than another salt when hot.",
          },
        ],
        keyFormulas: [
          { name: "Solubility curve", statement: "solubility (g/100 g water) vs temperature (°C)" },
          { name: "Crystallised mass", statement: "mass hot − solubility cold, scaled to the water present" },
          { name: "Gas solubility", statement: "decreases as temperature increases" },
        ],
        workedExample: {
          problem: "The solubility of a salt is 90 g per 100 g water at 60 °C and 30 g per 100 g water at 10 °C. A saturated solution in 200 g of water is cooled from 60 °C to 10 °C. Calculate the mass of crystals formed.",
          solution: "At 60 °C dissolved mass = $\\frac{90}{100} \\times 200 = 180$ g. At 10 °C it can hold $\\frac{30}{100} \\times 200 = 60$ g. Crystals formed = $180 - 60 = 120$ g.",
        },
      },
      questions: [
        {
          id: "ech11-u6-solubility-curves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a solubility curve, what does the vertical axis usually show?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Temperature in °C"
                    },
                    {
                              "id": "b",
                              "text": "Solubility in g per 100 g water"
                    },
                    {
                              "id": "c",
                              "text": "Mass of solution in g"
                    },
                    {
                              "id": "d",
                              "text": "Time in seconds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Solubility curve",
                              "statement": "Graph of solubility (g/100 g water) against temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solubility is plotted vertically against temperature horizontally.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Solubility in g per 100 g water",
          "commonErrors": [
                    "Swapping the axes — temperature is the horizontal axis."
          ]
},
        },
        {
          id: "ech11-u6-solubility-curves-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The solubility of a solid is 60 g per 100 g water at 40 °C. How many grams of the solid dissolve in 150 g of water at 40 °C?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "mass",
                              "answer": 90,
                              "unit": "g"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Solubility scaling",
                              "statement": "mass dissolved = solubility × mass of water ÷ 100"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Scale to 150 g water: $\\frac{60}{100} \\times 150$.",
                              "working": "60 \\times 1.5 = 90",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer 90 g.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "90 g",
          "commonErrors": [
                    "Multiplying 60 × 150 without dividing by 100."
          ]
},
        },
        {
          id: "ech11-u6-solubility-curves-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the solubility of a gas in water decreases as temperature increases.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Gas solubility",
                              "statement": "Gas solubility falls as temperature rises — opposite to most solids."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gas particles gain kinetic energy as temperature rises.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They can escape the liquid more easily, so less gas stays dissolved.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "This is why warm water holds less oxygen — relevant to fish in heated rivers.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Warmer water → gas particles escape more easily → lower solubility.",
          "commonErrors": [
                    "Applying the solid-solubility trend to gases — they behave oppositely."
          ]
},
        },
        {
          id: "ech11-u6-solubility-curves-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A saturated solution of a salt in 100 g of water is made at 80 °C, where the solubility is 170 g per 100 g water. The solution is cooled to 20 °C, where solubility is 40 g per 100 g water.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the axes of a solubility curve for this salt.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the mass of crystals formed on cooling.",
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
                              "name": "Crystallised mass",
                              "statement": "mass dissolved hot − solubility cold (same water mass)"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Horizontal axis: temperature in °C; vertical axis: solubility in g per 100 g water.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Dissolved at 80 °C = 170 g (already per 100 g water).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Still dissolved at 20 °C = 40 g; excess = 170 − 40.",
                              "working": "170 - 40 = 130",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "130 g crystallises.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) temp vs solubility (b) 130 g crystallise.",
          "commonErrors": [
                    "Using 170 − 40 = 130 correctly but forgetting water mass is already 100 g — scaling needed only for other masses."
          ]
},
        },
        {
          id: "ech11-u6-solubility-curves-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Salt A's solubility rises from 36 g to 39 g per 100 g water between 0 °C and 100 °C. Salt B's rises from 0.1 g to 40 g over the same range.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe what each curve looks like and which salt is better for purification by crystallisation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain your choice in terms of yield of crystals on cooling.",
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
                              "name": "Solubility curve slope",
                              "statement": "Steeper curves give more crystals on cooling."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Salt A's curve is nearly flat — solubility barely changes with temperature.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Salt B's curve rises steeply from very low solubility.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Salt B is better for crystallisation purification.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "On cooling, salt B's solubility falls dramatically, so most of it crystallises.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Salt A stays almost fully dissolved even when cold — little solid forms.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "High yield of crystals means efficient purification.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) B steep, A flat; B better (b) B crystallises more on cooling → higher yield.",
          "commonErrors": [
                    "Choosing the salt with higher solubility — it is the change on cooling that matters."
          ]
},
        },
        {
          id: "ech11-u6-solubility-curves-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student wants to find the solubility of a salt at 50 °C.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe a practical method to determine the solubility, including how to check saturation.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how the result would be recorded on a solubility curve.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State one limitation of this method for very soluble or very insoluble salts.",
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
                              "name": "Measuring solubility",
                              "statement": "Dissolve solute in known mass of water at fixed temperature until saturated; weigh dissolved solid."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Weigh a known mass of water (e.g. 100 g) and heat to 50 °C in a water bath.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Add the salt in portions, stirring until no more dissolves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Filter off and dry the undissolved solid; subtract from mass added to find dissolved mass.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Scale to 100 g water to get solubility in g per 100 g.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Plot the point at 50 °C on the temperature axis.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Plot solubility on the vertical axis and mark the point.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Repeat at other temperatures and draw a smooth curve through the points.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Very soluble salts may dissolve everything before saturation is reached — need larger masses.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Very insoluble salts give tiny masses that are hard to weigh accurately.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) dissolve to saturation at 50 °C, weigh difference (b) plot point at 50 °C (c) extremes hard to measure accurately.",
          "commonErrors": [
                    "Weighing the solution instead of the undissolved solid — water must be accounted for."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u6-solubility-notes",
      title: "Solutions and solubility — notes",
      summary: "Solubility = max g per 100 g water at a temperature. Curves plot solubility vs temperature; solids' solubility rises, gases' falls.",
      sections: [
        { heading: "Key formula", body: "solubility = $\\frac{\\text{mass solute}}{\\text{mass water}} \\times 100$ g per 100 g water" },
        { heading: "Crystallisation", body: "Cool a saturated solution; mass crystallised = hot dissolved mass − cold solubility (same water mass)." },
        { heading: "Trends", body: "Most solids: solubility rises with temperature. Gases: solubility falls with temperature." },
      ],
    },
  ],
};
