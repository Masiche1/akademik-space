import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ech11-u7-lesson-7-3",
  code: "7-3",
  title: "Energy Efficiency and Sustainable Choices",
  goal: "I CAN calculate energy efficiency, explain ways to conserve energy and evaluate energy sources for sustainability.",
  standards: ["4CH1 3.24", "4CH1 3.25", "4CH1 3.26", "4CH1 3.27"],
  
  vocabulary: [
    { term: "Energy efficiency", definition: "The proportion of energy input that is converted into useful output, expressed as a percentage." },
    { term: "Useful energy", definition: "The energy output that performs the intended task (e.g. light, movement, heat in a room)." },
    { term: "Wasted energy", definition: "Energy output that is not useful, usually dissipated as heat to the surroundings." },
    { term: "Renewable energy", definition: "Energy from sources that are naturally replaced, such as solar, wind, hydro, geothermal and biomass." },
    { term: "Non-renewable energy", definition: "Energy from finite stocks, such as fossil fuels and nuclear fuel." },
    { term: "Sustainability", definition: "Meeting present energy needs without compromising the ability of future generations to meet theirs." },
    { term: "Life-cycle assessment", definition: "Evaluating the total environmental impact of a product or energy source from manufacture to disposal." },
  ],
  concepts: [
    {
      id: "ech11-u7-energy-efficiency",
      title: "Energy efficiency and conservation",
      skill: "Calculate energy efficiency, identify sources of wasted energy and suggest ways to conserve energy.",
      lesson: {
        sections: [
          {
            heading: "Calculating efficiency",
            body: "**Efficiency** compares useful output to total input:\n\n$$\\text{efficiency} = \\frac{\\text{useful energy output}}{\\text{total energy input}} \\times 100\\%$$\n\nExample: a device uses 100 J of electricity and produces 25 J of light — efficiency = $\\frac{25}{100} \\times 100 = 25\\%$. The other 75 J is wasted, mostly as heat.",
          },
          {
            heading: "Where energy is wasted",
            body: "No energy conversion is 100% efficient — the second law of thermodynamics means some energy is always dissipated, usually as heat. Examples:\n\n- incandescent bulb: ~5% light, 95% heat\n- petrol engine: ~20–30% useful motion\n- power station: ~35–45% electricity from fuel\n\nImproving efficiency means reducing these losses: better insulation, LED bulbs, efficient motors, combined heat and power.",
          },
          {
            heading: "Conserving energy",
            body: "Using less energy is often the cheapest and cleanest option:\n\n- **Insulation** in homes reduces heating demand\n- **LED lighting** uses ~90% less energy than filament bulbs for the same light\n- **Efficient appliances** (A-rated) use less electricity\n- **Behavioural changes:** switching off unused devices, lower thermostat settings, public transport\n\nConservation reduces fuel use, emissions and cost simultaneously.",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%$" },
          { name: "Wasted energy", statement: "total input − useful output (mostly heat)" },
          { name: "LED vs filament", statement: "LED uses ~10% of the energy for the same light output" },
        ],
        workedExample: {
          problem: "A power station burns fuel to produce 1000 MJ of electricity, but only 400 MJ reaches consumers as useful electricity. Calculate the efficiency and explain where the rest goes.",
          solution: "Efficiency = $\\frac{400}{1000} \\times 100 = 40\\%$. The remaining 600 MJ is wasted, mostly as heat lost in the power station, in transmission cables and in appliances.",
        },
      },
      questions: [
        {
          id: "ech11-u7-energy-efficiency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for energy efficiency?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "useful output ÷ total input"
                    },
                    {
                              "id": "b",
                              "text": "total input ÷ useful output"
                    },
                    {
                              "id": "c",
                              "text": "useful output × 100"
                    },
                    {
                              "id": "d",
                              "text": "total input − useful output"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Efficiency",
                              "statement": "efficiency = useful output ÷ total input × 100%"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Efficiency is a ratio of useful to total energy, expressed as a percentage.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) useful output ÷ total input",
          "commonErrors": [
                    "Inverting the ratio — efficiency must be ≤ 100%."
          ]
},
        },
        {
          id: "ech11-u7-energy-efficiency-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A device uses 200 J of energy and produces 50 J of useful output. Calculate its efficiency.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "efficiency",
                              "answer": 25,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Efficiency",
                              "statement": "efficiency = useful ÷ total × 100%"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "efficiency = $\\frac{50}{200} \\times 100$.",
                              "working": "50/200 = 0.25",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer 25%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "25%",
          "commonErrors": [
                    "Forgetting to multiply by 100 — answer must be a percentage."
          ]
},
        },
        {
          id: "ech11-u7-energy-efficiency-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two ways a household could reduce its energy use without reducing comfort.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Energy conservation",
                              "statement": "Reduce demand through efficiency and behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two valid: loft/wall insulation, LED bulbs, A-rated appliances, lower thermostat, draught-proofing, turning off standby devices.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Each reduces energy demand while maintaining the same service (warmth, light).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Insulation; LED lighting; efficient appliances; lower thermostat (any two).",
          "commonErrors": [
                    "Suggesting 'use less heating' — that reduces comfort, not efficiency."
          ]
},
        },
        {
          id: "ech11-u7-energy-efficiency-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A boiler supplies 84 MJ of useful heat to a house and wastes 16 MJ up the flue and through the fabric.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the efficiency of the heating system.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways to improve the efficiency.",
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
                              "name": "Efficiency",
                              "statement": "efficiency = useful output ÷ total input × 100%"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Total input = 84 + 16 = 100 MJ.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Efficiency = $\\frac{84}{100} \\times 100 = 84\\%$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Any two valid improvements: better insulation to cut fabric losses, condensing boiler to recover flue heat, lower flow temperature, regular servicing.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each reduces wasted energy, raising the useful fraction.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 84% (b) insulation, condensing boiler, lower flow temp (any two).",
          "commonErrors": [
                    "Using 84 ÷ 16 instead of 84 ÷ 100 — total input includes wasted energy."
          ]
},
        },
        {
          id: "ech11-u7-energy-efficiency-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two light bulbs produce the same brightness. Bulb A is a filament bulb using 60 W; Bulb B is an LED using 9 W.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the efficiency of each bulb if each produces 3 W of visible light.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the LED is more efficient and what happens to the rest of the energy.",
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
                              "name": "Efficiency",
                              "statement": "efficiency = useful output ÷ input × 100%"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Filament: $\\frac{3}{60} \\times 100 = 5\\%$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "LED: $\\frac{3}{9} \\times 100 ≈ 33\\%$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "LED is about 6–7 times more efficient.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "The filament wastes most energy as heat (it must get very hot to glow).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The LED converts a larger fraction directly to light without needing heat.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The rest is dissipated as heat to the surroundings.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) filament 5%, LED ~33% (b) LED wastes less as heat.",
          "commonErrors": [
                    "Saying the LED 'creates more light from nothing' — it wastes less energy as heat."
          ]
},
        },
        {
          id: "ech11-u7-energy-efficiency-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A national government wants to reduce household energy demand by 20%.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why improving efficiency is often better than simply 'using less'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe three policies or technologies that could achieve the target.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Discuss one limitation of relying on efficiency alone.",
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
                              "name": "Energy efficiency vs conservation",
                              "statement": "Efficiency delivers the same service with less energy; conservation reduces the service."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Efficiency keeps comfort/services the same while cutting energy — politically and socially acceptable.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Simply using less (e.g. colder homes) reduces quality of life and may not be sustained.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Efficiency gains also cut emissions without demanding behavioural sacrifice.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Any three valid: insulation grants, LED/efficient appliance standards, smart meters/controls, heat pumps, building regulations.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each reduces energy input for the same output.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rebound effect: cheaper energy may lead people to use more, offsetting savings.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) same service, less energy (b) insulation/LEDs/heat pumps/standards (c) rebound effect.",
          "commonErrors": [
                    "Ignoring the rebound effect — efficiency can increase total consumption if prices fall."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u7-energy-sustainability",
      title: "Renewable and non-renewable energy sources",
      skill: "Classify energy sources, evaluate their sustainability using life-cycle thinking and suggest strategies for a sustainable energy mix.",
      lesson: {
        sections: [
          {
            heading: "Renewable versus non-renewable",
            body: "**Non-renewable** sources are finite stocks that take millions of years to form: **fossil fuels** (coal, oil, gas) and **nuclear fuel** (uranium). They will run out and most emit CO$_2$.\n\n**Renewable** sources are naturally replenished: **solar** (photovoltaic panels, solar thermal), **wind**, **hydro** (dams, tides), **geothermal** (heat from the Earth) and **biomass** (wood, waste, biofuels). They produce little or no direct CO$_2$ but depend on weather and need storage or backup.",
          },
          {
            heading: "Evaluating sustainability",
            body: "Sustainability means meeting today's needs without compromising future generations. Judge an energy source by its **life-cycle impact**:\n\n- CO$_2$ and other emissions from manufacture, operation and disposal\n- Land use, wildlife impact and visual pollution\n- Cost per kWh including storage and grid upgrades\n- Reliability — intermittent sources (solar, wind) need storage or backup\n- Waste — nuclear produces radioactive waste; batteries need recycling\n\nNo source is perfect; a **mixed energy portfolio** is usually most sustainable.",
          },
          {
            heading: "Building a sustainable mix",
            body: "Strategies include: increasing the share of renewables, improving efficiency to reduce demand, storing energy (batteries, pumped hydro, hydrogen), developing smart grids, and phasing out fossil fuels. The best mix depends on local resources — sunny regions suit solar, windy coasts suit wind, volcanic regions suit geothermal.",
          },
        ],
        keyFormulas: [
          { name: "Renewable", statement: "naturally replenished: solar, wind, hydro, geothermal, biomass" },
          { name: "Non-renewable", statement: "finite stocks: fossil fuels, nuclear fuel" },
          { name: "Sustainability", statement: "meet present needs without compromising future generations" },
          { name: "Intermittency", statement: "solar/wind output varies — needs storage or backup" },
        ],
        workedExample: {
          problem: "A country generates 70% of its electricity from coal and 30% from solar. Discuss the sustainability of this mix and suggest improvements.",
          solution: "The 70% coal share gives high CO$_2$ emissions and air pollution — not sustainable long-term. The 30% solar is renewable and clean but intermittent. Improvements: replace coal with wind, hydro or nuclear; add battery storage for solar; improve efficiency to cut demand; phase out coal entirely.",
        },
      },
      questions: [
        {
          id: "ech11-u7-energy-sustainability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Coal"
                    },
                    {
                              "id": "b",
                              "text": "Natural gas"
                    },
                    {
                              "id": "c",
                              "text": "Solar"
                    },
                    {
                              "id": "d",
                              "text": "Uranium"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Renewable energy",
                              "statement": "Energy from naturally replenished sources such as solar, wind, hydro."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solar is renewable; coal, gas and uranium are non-renewable.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Solar",
          "commonErrors": [
                    "Choosing uranium — nuclear fuel is finite/non-renewable."
          ]
},
        },
        {
          id: "ech11-u7-energy-sustainability-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'sustainable energy' and give one example of a sustainable source.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sustainable energy",
                              "statement": "Energy that can be supplied indefinitely without depleting resources or causing unacceptable environmental harm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sustainable energy meets present needs without compromising future generations.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Any example: solar, wind, hydro, geothermal, sustainable biomass.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Energy meeting needs without harming future supply; e.g. solar/wind.",
          "commonErrors": [
                    "Equating renewable with sustainable — biomass can be renewable but unsustainable if over-harvested."
          ]
},
        },
        {
          id: "ech11-u7-energy-sustainability-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two advantages of renewable energy over fossil fuels.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Renewable benefits",
                              "statement": "Renewables produce little direct CO$_2$ and will not run out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Renewables produce little or no direct CO$_2$ or air pollutants during operation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They are naturally replenished and will not run out like fossil fuels.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They reduce dependence on imported fuels and price volatility.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Low emissions; inexhaustible; energy security.",
          "commonErrors": [
                    "Claiming renewables have zero lifecycle emissions — manufacture and backup still have impacts."
          ]
},
        },
        {
          id: "ech11-u7-energy-sustainability-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A region has strong winds but limited sunshine and wants to increase renewable generation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the intermittency problem for wind power.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways the region could manage intermittency.",
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
                              "name": "Intermittency",
                              "statement": "Wind/solar output varies with weather, so supply does not always match demand."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Wind speed varies, so power output fluctuates and may drop to zero in calm periods.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Demand does not vary the same way, so mismatches need balancing.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Any two of: battery/grid storage, pumped hydro storage, backup gas/hydro plants, interconnectors to other regions, demand-side management.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each stores surplus or supplies backup when wind is low.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) output varies with wind, mismatched to demand (b) storage, backup, interconnectors, demand management.",
          "commonErrors": [
                    "Saying wind power 'does not work' — it works but needs balancing/storage."
          ]
},
        },
        {
          id: "ech11-u7-energy-sustainability-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Nuclear power is debated as an energy source.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two advantages and two disadvantages of nuclear power.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why 'low-carbon' does not automatically mean 'sustainable'.",
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
                              "name": "Nuclear evaluation",
                              "statement": "Low CO$_2$ but finite fuel and radioactive waste."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Advantages: almost no CO$_2$ during operation; reliable baseload power.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Disadvantages: uranium is finite; produces long-lived radioactive waste; accident risk.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sustainability includes resource depletion and waste, not just emissions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Uranium will eventually run out and waste must be managed for thousands of years.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Therefore nuclear is low-carbon but only partly sustainable long-term.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) low CO$_2$, reliable vs finite fuel, radioactive waste (b) sustainability > low-carbon.",
          "commonErrors": [
                    "Equating low-carbon with fully sustainable — waste and fuel limits matter."
          ]
},
        },
        {
          id: "ech11-u7-energy-sustainability-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A country gets 60% of its electricity from coal, 25% from gas, 10% from nuclear and 5% from renewables.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Assess the sustainability of this energy mix.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest a realistic 20-year plan to make the mix more sustainable.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Discuss one social or economic barrier to your plan.",
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
                              "name": "Energy mix",
                              "statement": "Sustainability requires low emissions, reliable supply and resource longevity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "85% fossil (coal+gas) gives high CO$_2$ and air pollution — unsustainable long-term.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Coal is the dirtiest; gas is cleaner but still finite and emitting.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Nuclear is low-carbon but has waste/fuel limits.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Only 5% renewables is too low for a sustainable future.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Phase out coal first (dirtiest), replacing with gas temporarily and renewables permanently.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Invest in wind/solar plus storage and grid upgrades to handle intermittency.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Improve efficiency to reduce total demand.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Keep some nuclear as low-carbon backup while renewables scale up.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any valid barrier: cost of transition, job losses in coal regions, intermittency/backup needs, public acceptance of nuclear/wind farms.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 85% fossil = unsustainable (b) phase out coal, build renewables+storage, keep nuclear (c) cost/jobs/intermittency.",
          "commonErrors": [
                    "Recommending an immediate 100% renewable switch without addressing intermittency and storage."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u7-efficiency-sustainability-notes",
      title: "Energy efficiency and sustainability — notes",
      summary: "Efficiency = useful output ÷ input × 100%. Renewables (solar, wind, hydro) vs non-renewables (fossil, nuclear). Sustainability needs low emissions + resource longevity.",
      sections: [
        { heading: "Efficiency", body: "$\\text{efficiency} = \\frac{\\text{useful output}}{\\text{total input}} \\times 100\\%$ — rest is wasted, mostly as heat." },
        { heading: "Sources", body: "Renewable: solar, wind, hydro, geothermal, biomass. Non-renewable: coal, oil, gas, uranium." },
        { heading: "Sustainability", body: "Judge by life-cycle: emissions, land use, cost, reliability (intermittency), waste. A mixed portfolio is usually best." },
      ],
    },
  ],
};
