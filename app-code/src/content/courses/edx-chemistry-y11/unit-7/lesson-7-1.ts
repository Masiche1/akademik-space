import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ech11-u7-lesson-7-1",
  code: "7-1",
  title: "Fuels and Energy Release",
  goal: "I CAN define calorific value, calculate energy released by a fuel and compare different fuels as energy sources.",
  standards: ["4CH1 3.21", "4CH1 3.22", "4CH1 4.17", "4CH1 4.18"],
  
  vocabulary: [
    { term: "Fuel", definition: "A substance that releases energy when it burns or reacts with oxygen." },
    { term: "Calorific value", definition: "The energy released per gram (or per kilogram) when a fuel burns completely, in kJ/g or kJ/kg." },
    { term: "Combustion", definition: "Rapid oxidation of a fuel releasing heat and light energy." },
    { term: "Fossil fuel", definition: "A non-renewable fuel formed from ancient organisms: coal, oil and natural gas." },
    { term: "Biofuel", definition: "A fuel made from recently living or dead biological material, e.g. ethanol or biodiesel." },
    { term: "Hydrogen fuel", definition: "Hydrogen gas used as a fuel; burns to form only water." },
  ],
  concepts: [
    {
      id: "ech11-u7-calorific-value",
      title: "Calorific value and energy from fuels",
      skill: "Define calorific value, calculate the energy released by a given mass of fuel and explain why measured values differ from theoretical ones.",
      lesson: {
        sections: [
          {
            heading: "Calorific value",
            body: "The **calorific value** of a fuel is the energy released per unit mass when it burns completely. It is measured in **kJ/g** (or kJ/kg). Hydrogen has a very high calorific value per gram; coal has a lower one but is cheap per kilogram. Fuels are compared on this value when choosing an energy source.",
          },
          {
            heading: "Calculating energy released",
            body: "$$\\text{energy released (kJ)} = \\text{mass of fuel (g)} \\times \\text{calorific value (kJ/g)}$$\n\nExample: 5 g of a fuel with calorific value 46 kJ/g releases $5 \\times 46 = 230$ kJ. Conversely, calorific value = energy released ÷ mass burned.",
          },
          {
            heading: "Why measured values are lower",
            body: "In practice, measured calorific values are lower than theoretical because:\n- not all the fuel burns completely\n- heat is lost to the surroundings (container, air)\n- some energy goes into heating the apparatus\n- combustion may be incomplete, producing CO or soot instead of fully oxidised products.",
          },
        ],
        keyFormulas: [
          { name: "Calorific value", statement: "energy released per gram of fuel burned completely (kJ/g)" },
          { name: "Energy released", statement: "mass (g) × calorific value (kJ/g) = kJ" },
          { name: "Calorific value from data", statement: "calorific value = energy released ÷ mass burned" },
        ],
        workedExample: {
          problem: "Burning 2.0 g of a fuel in a calorimeter releases 88 kJ of heat. Calculate its calorific value. If the fuel's theoretical value is 50 kJ/g, suggest one reason for the difference.",
          solution: "Calorific value = $\\frac{88}{2.0} = 44$ kJ/g. The measured 44 kJ/g is below the theoretical 50 kJ/g because some heat is lost to the surroundings or the combustion was incomplete.",
        },
      },
      questions: [
        {
          id: "ech11-u7-calorific-value-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the calorific value of a fuel?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The total energy in a tank of fuel"
                    },
                    {
                              "id": "b",
                              "text": "The energy released per gram when the fuel burns completely"
                    },
                    {
                              "id": "c",
                              "text": "The temperature at which the fuel ignites"
                    },
                    {
                              "id": "d",
                              "text": "The mass of fuel needed to boil 1 g of water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Calorific value",
                              "statement": "Energy released per gram of fuel on complete combustion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calorific value is an energy-per-mass measure, not total energy.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) energy per gram on complete combustion",
          "commonErrors": [
                    "Confusing calorific value with total energy content of a fuel supply."
          ]
},
        },
        {
          id: "ech11-u7-calorific-value-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A fuel has a calorific value of 30 kJ/g. Calculate the energy released by burning 4.0 g of it.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "energy",
                              "answer": 120,
                              "unit": "kJ"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Energy released",
                              "statement": "energy = mass × calorific value"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "energy = 4.0 × 30.",
                              "working": "4 \\times 30 = 120",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer 120 kJ.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "120 kJ",
          "commonErrors": [
                    "Dividing instead of multiplying — energy = mass × calorific value."
          ]
},
        },
        {
          id: "ech11-u7-calorific-value-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why hydrogen has a very high calorific value per gram compared with most hydrocarbon fuels.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Calorific value",
                              "statement": "Energy released per gram of fuel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calorific value is measured per gram, and hydrogen is the lightest element.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A gram of hydrogen contains many H$_2$ molecules, each releasing energy on combustion.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Per unit volume or per tank, hydrogen's low density means it stores less total energy — an important practical limit.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Lightest fuel → most molecules per gram → highest kJ/g, but low energy per volume.",
          "commonErrors": [
                    "Claiming hydrogen stores more total energy — per gram yes, per volume no."
          ]
},
        },
        {
          id: "ech11-u7-calorific-value-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student burns 3.0 g of ethanol in a simple calorimeter and the temperature of 200 g of water rises by 44 °C.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the energy transferred to the water. (Specific heat capacity of water = 4.2 J/g °C)",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Hence calculate the calorific value of ethanol and comment on whether it is complete.",
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
                              "name": "Heat energy",
                              "statement": "Q = m c ΔT"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Q = 200 × 4.2 × 44 = 36 960 J ≈ 37 kJ.",
                              "working": "200 \\times 4.2 \\times 44 = 36960",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Calorific value = energy ÷ mass = 36.96 kJ ÷ 3.0 g ≈ 12.3 kJ/g.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "The accepted value for ethanol is about 30 kJ/g, so the measured value is much lower.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Heat losses to surroundings/apparatus and incomplete combustion explain the shortfall.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) ≈37 kJ (b) ≈12.3 kJ/g — below true value due to heat loss/incomplete combustion.",
          "commonErrors": [
                    "Using mass of ethanol instead of water in Q = mcΔT."
          ]
},
        },
        {
          id: "ech11-u7-calorific-value-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two fuels, X and Y, are compared in a calorimetry experiment.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List three factors that affect the accuracy of a measured calorific value.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how each factor you listed causes the measured value to be lower than the true value.",
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
                              "name": "Calorimetry errors",
                              "statement": "Heat losses and incomplete combustion lower measured values."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Any three of: heat loss to surroundings, incomplete combustion, unburnt fuel, heat absorbed by apparatus, water evaporation.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Heat lost to air/container means less energy measured in the water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Incomplete combustion produces CO/soot instead of CO$_2$, releasing less energy per gram.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Some energy is also absorbed by heating the apparatus and evaporating water.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) heat loss, incomplete combustion, apparatus heating (b) each reduces measured energy.",
          "commonErrors": [
                    "Listing factors without explaining the direction of the error."
          ]
},
        },
        {
          id: "ech11-u7-calorific-value-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A company compares three fuels for a heater: fuel P with calorific value 50 kJ/g, fuel Q with 30 kJ/g and fuel R with 45 kJ/g.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define calorific value and state its units.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the mass of each fuel needed to release 900 kJ.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Discuss whether calorific value alone should decide which fuel to buy.",
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
                              "name": "Energy released",
                              "statement": "mass = energy ÷ calorific value"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Calorific value = energy released per gram of fuel on complete combustion.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Units: kJ/g (or kJ/kg).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "P: 900 ÷ 50 = 18 g.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Q: 900 ÷ 30 = 30 g.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "R: 900 ÷ 45 = 20 g.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Calorific value ignores cost per kg — a lower-CV fuel may be cheaper overall.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Emissions, storage, renewability and safety also matter.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Fuel P needs least mass but may cost more per gram or pollute more.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "A balanced decision weighs energy, cost and environmental impact together.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) energy/g, kJ/g (b) P=18 g, Q=30 g, R=20 g (c) CV alone insufficient — consider cost/emissions.",
          "commonErrors": [
                    "Choosing fuel P automatically — cost and emissions matter too."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u7-comparing-fuels",
      title: "Comparing fossil, hydrogen and biofuels",
      skill: "Compare fuels using energy content, emissions, renewability and practicality, and justify a fuel choice for a given use.",
      lesson: {
        sections: [
          {
            heading: "Main fuel types",
            body: "- **Coal:** solid fossil fuel, cheap per tonne but produces lots of CO$_2$, SO$_2$, NO$_x$ and particulates; used in power stations.\n- **Oil (petrol/diesel):** liquid fossil fuel, energy-dense, convenient for transport; emits CO$_2$ and pollutants.\n- **Natural gas (methane):** gaseous fossil fuel, burns cleaner than coal/oil with less SO$_2$ and particulates; used for heating and electricity.\n- **Hydrogen:** burns to only water; can be green (electrolysis with renewables) or grey (from methane, emits CO$_2$); storage/transport costly.\n- **Biofuels:** ethanol and biodiesel from crops; carbon neutral in principle but land-use and processing emissions matter.",
          },
          {
            heading: "What to compare",
            body: "Evaluate fuels on:\n\n- **Energy density** — kJ per gram or per litre\n- **Emissions** — CO$_2$ per unit energy, plus SO$_2$, NO$_x$, particulates\n- **Renewability** — will supplies last?\n- **Cost and infrastructure** — fuel price, vehicle/engine compatibility, storage\n- **Life-cycle emissions** — including production, transport and processing, not just burning",
          },
          {
            heading: "Trade-offs",
            body: "Fossil fuels are cheap and convenient but finite and polluting. Hydrogen is clean at the point of use but expensive to make and store. Biofuels are renewable but compete with food crops and still emit some pollutants. The 'best' fuel depends on the application — e.g. aviation needs high energy density, while cars can use electricity or hydrogen.",
          },
        ],
        keyFormulas: [
          { name: "Fuel comparison", statement: "energy density, emissions, renewability, cost, life-cycle impact" },
          { name: "Methane combustion", statement: "$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$" },
          { name: "Hydrogen combustion", statement: "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$" },
        ],
        workedExample: {
          problem: "Compare natural gas and coal as fuels for generating electricity, considering emissions and renewability.",
          solution: "Natural gas burns more cleanly than coal: it produces less SO$_2$, NO$_x$ and particulates per unit energy and has a higher hydrogen-to-carbon ratio so somewhat less CO$_2$ per kJ. However, both are fossil fuels and non-renewable. Natural gas is the cleaner short-term choice but neither solves the emissions problem long-term; renewables or carbon capture would be needed.",
        },
      },
      questions: [
        {
          id: "ech11-u7-comparing-fuels-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a fossil fuel?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ethanol"
                    },
                    {
                              "id": "b",
                              "text": "Natural gas"
                    },
                    {
                              "id": "c",
                              "text": "Hydrogen"
                    },
                    {
                              "id": "d",
                              "text": "Biodiesel"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fossil fuel",
                              "statement": "Non-renewable fuel from ancient organisms: coal, oil, natural gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Natural gas (methane) is a fossil fuel; the others are biofuels or hydrogen.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Natural gas",
          "commonErrors": [
                    "Choosing ethanol or biodiesel — they are biofuels, made from recent biomass."
          ]
},
        },
        {
          id: "ech11-u7-comparing-fuels-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'biofuel' and state one advantage over fossil fuels.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Biofuel",
                              "statement": "Fuel made from recently living or recently dead biological material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A biofuel comes from biomass such as crops or waste.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Advantage: renewable and can be carbon neutral over its life cycle.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Fuel from biomass; renewable / carbon neutral in principle.",
          "commonErrors": [
                    "Saying biofuels emit no CO$_2$ at all — they release CO$_2$ when burned, but the carbon was recently absorbed."
          ]
},
        },
        {
          id: "ech11-u7-comparing-fuels-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two advantages of natural gas over coal as a fuel for generating electricity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cleaner burning",
                              "statement": "Natural gas contains no sulfur and burns more completely, giving fewer pollutants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Natural gas produces little or no SO$_2$ (no sulfur) and fewer particulates than coal.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It burns more cleanly and efficiently, releasing less CO per unit energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It is easier to transport and use in combined-cycle power stations, giving higher efficiency.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Less SO$_2$/particulates; cleaner, more efficient burn.",
          "commonErrors": [
                    "Claiming natural gas produces no CO$_2$ — it still emits CO$_2$, just less than coal per kJ."
          ]
},
        },
        {
          id: "ech11-u7-comparing-fuels-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A poorly maintained gas heater burns methane in limited air.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the equations for complete and incomplete combustion of methane.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why incomplete combustion is dangerous in a home.",
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
                              "name": "Methane combustion",
                              "statement": "Complete: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$; incomplete: $\\text{CH}_4 + \\text{O}_2 \\rightarrow \\text{CO} + \\text{H}_2\\text{O}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Complete: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Incomplete: $\\text{CH}_4 + \\text{O}_2 \\rightarrow \\text{CO} + 2\\text{H}_2\\text{O}$ (or C/soot variant).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Limited air causes incomplete combustion producing carbon monoxide.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "CO is colourless and odourless, so it cannot be detected.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It binds haemoglobin, reducing oxygen transport and causing poisoning/fatality.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) complete → CO$_2$+2H$_2$O; incomplete → CO+2H$_2$O (b) CO is odourless and poisonous.",
          "commonErrors": [
                    "Forgetting water is still produced in incomplete combustion."
          ]
},
        },
        {
          id: "ech11-u7-comparing-fuels-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An airline considers biofuel blends to reduce its carbon footprint.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the idea of 'life-cycle' carbon emissions for a fuel.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two reasons a biofuel blend might not eliminate the airline's emissions.",
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
                              "name": "Life-cycle emissions",
                              "statement": "Total CO$_2$ equivalent from producing, transporting and burning the fuel."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Life-cycle emissions count CO$_2$ from every stage: growing feedstock, processing, transport and final combustion.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It avoids judging a fuel only by what comes out of the exhaust.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Fossil energy used in farming and refining adds to the total.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "The blend still contains fossil kerosene, which emits CO$_2$ when burned.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Growing and processing the biofuel uses energy and may release nitrous oxide and other gases.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Land-use change for feedstock crops can release stored carbon.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) all CO$_2$ from production to combustion (b) blend has fossil fraction + processing emissions.",
          "commonErrors": [
                    "Counting only exhaust emissions — life-cycle includes upstream energy use."
          ]
},
        },
        {
          id: "ech11-u7-comparing-fuels-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A country plans its future energy supply for electricity and transport.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare coal, natural gas, oil and hydrogen as fuels for electricity generation.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why transport fuels have different requirements from power-station fuels.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest a balanced short-term and long-term strategy.",
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
                              "name": "Fuel selection",
                              "statement": "Choose by energy density, emissions, cost, storage and infrastructure."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Coal: cheapest per kWh historically, high CO$_2$, SO$_2$, NO$_x$, particulates, non-renewable.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Natural gas: cleaner than coal, lower CO$_2$ per kJ, still fossil and finite.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Oil: less used for power; high energy density but polluting.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Hydrogen: zero CO$_2$ at point of use but costly to produce/store; needs new infrastructure.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Transport needs portable, high energy-density fuel and existing vehicle compatibility.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Power stations can use lower-grade fuels and are fixed, so infrastructure matters less per kWh.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Electricity for transport can come from any generation source, decoupling fuel from vehicle.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Short-term: switch power to gas/renewables and improve efficiency; long-term: build hydrogen/battery infrastructure.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) coal dirty/cheap; gas cleaner; oil dense; H$_2$ clean but costly (b) transport needs portable dense fuel (c) phased transition.",
          "commonErrors": [
                    "Recommending one fuel for everything — different uses have different requirements."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u7-fuels-energy-notes",
      title: "Fuels and energy — notes",
      summary: "Calorific value = kJ per gram. Energy = mass × CV. Compare fuels on energy, emissions, cost, renewability and life-cycle impact.",
      sections: [
        { heading: "Key calculation", body: "energy (kJ) = mass (g) × calorific value (kJ/g); CV = energy ÷ mass." },
        { heading: "Fuel types", body: "Fossil: coal/oil/gas (finite, polluting). Biofuels: ethanol/biodiesel (renewable, land issues). Hydrogen: clean at use, costly to store/make." },
        { heading: "Exam focus", body: "Measured CV is below theoretical due to heat loss and incomplete combustion. Always compare fuels on multiple criteria, not just energy." },
      ],
    },
  ],
};
