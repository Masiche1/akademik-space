import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ech11-u5-lesson-5-3",
  code: "5-3",
  title: "Air Pollution and Sustainable Fuels",
  goal: "I CAN describe the main air pollutants and their effects, and evaluate different fuels for sustainability.",
  standards: ["4CH1 2.22", "4CH1 2.23", "4CH1 4.15", "4CH1 4.16"],
  
  vocabulary: [
    { term: "Carbon monoxide", definition: "A poisonous gas formed by incomplete combustion of carbon-containing fuels." },
    { term: "Sulfur dioxide", definition: "A gas formed when sulfur impurities in fuels burn; contributes to acid rain." },
    { term: "Nitrogen oxides", definition: "Gases such as NO and NO$_2$ formed in hot engines; contribute to acid rain and smog." },
    { term: "Particulate matter", definition: "Tiny solid particles (soot) released by incomplete combustion." },
    { term: "Acid rain", definition: "Rain with a pH below about 5.6, formed when SO$_2$ and NO$_x$ dissolve in water." },
    { term: "Catalytic converter", definition: "A device in a car exhaust that converts CO, NO and unburnt hydrocarbons into less harmful gases." },
    { term: "Biofuel", definition: "A fuel made from recently living or recently dead biological material, such as ethanol from sugar cane or biodiesel from vegetable oils." },
  ],
  concepts: [
    {
      id: "ech11-u5-air-pollutants",
      title: "Air pollutants and their effects",
      skill: "Identify the sources and effects of carbon monoxide, sulfur dioxide, nitrogen oxides and particulates, and explain acid rain and catalytic converters.",
      lesson: {
        sections: [
          {
            heading: "The main pollutants",
            body: "- **Carbon monoxide (CO):** formed by **incomplete combustion** when oxygen is limited. It is colourless and odourless but poisonous — it binds to haemoglobin and reduces oxygen transport.\n- **Sulfur dioxide (SO$_2$):** formed when **sulfur impurities** in coal and oil burn: $\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2$. Causes breathing problems and acid rain.\n- **Nitrogen oxides (NO$_x$):** formed in **hot car engines** when nitrogen and oxygen from the air react at high temperature. Contribute to acid rain, smog and breathing problems.\n- **Particulates (soot):** tiny carbon particles from incomplete combustion; damage lungs and cause global dimming.",
          },
          {
            heading: "Acid rain",
            body: "SO$_2$ and NO$_x$ dissolve in atmospheric water to form sulfuric and nitric acids. Rain with pH below about 5.6 is **acid rain**. It damages limestone buildings and statues ($\\text{CaCO}_3 + \\text{acid} \\rightarrow$ soluble salts), acidifies lakes and soils, and damages trees and aquatic life. Catalytic converters and low-sulfur fuels reduce emissions.",
          },
          {
            heading: "Complete versus incomplete combustion",
            body: "**Complete combustion** in plenty of oxygen produces carbon dioxide and water only. **Incomplete combustion** in limited oxygen produces **carbon monoxide** and/or **carbon (soot)** as well as water. Badly tuned or oxygen-starved engines produce more CO and particulates; catalytic converters then oxidise CO to $\\text{CO}_2$ and reduce NO$_x$ to $\\text{N}_2$.",
          },
        ],
        keyFormulas: [
          { name: "Incomplete combustion", statement: "fuel + limited O$_2$ $\\rightarrow$ CO and/or C (soot) + H$_2$O" },
          { name: "Acid rain", statement: "SO$_2$ + NO$_x$ dissolve in rainwater → pH below ~5.6" },
          { name: "Catalytic converter", statement: "$2\\text{CO} + 2\\text{NO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$" },
        ],
        workedExample: {
          problem: "A car engine burns petrol in a limited supply of air. Identify two pollutants likely to be produced and explain how a catalytic converter reduces one of them.",
          solution: "Limited oxygen causes incomplete combustion, producing carbon monoxide and soot (particulates). A catalytic converter oxidises CO to $\\text{CO}_2$ and reduces nitrogen oxides to $\\text{N}_2$, so less toxic CO reaches the air.",
        },
      },
      questions: [
        {
          id: "ech11-u5-air-pollutants-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pollutant is mainly responsible for acid rain, along with sulfur dioxide?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Oxygen"
                    },
                    {
                              "id": "b",
                              "text": "Nitrogen oxides"
                    },
                    {
                              "id": "c",
                              "text": "Argon"
                    },
                    {
                              "id": "d",
                              "text": "Helium"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Acid rain gases",
                              "statement": "SO$_2$ and NO$_x$ dissolve in water to form acids."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nitrogen oxides (NO$_x$) and sulfur dioxide both form acid rain.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Nitrogen oxides",
          "commonErrors": [
                    "Choosing carbon monoxide — it is toxic but does not cause acid rain."
          ]
},
        },
        {
          id: "ech11-u5-air-pollutants-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the source of sulfur dioxide pollution and one effect it has on the environment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sulfur dioxide",
                              "statement": "SO$_2$ forms when sulfur impurities in fossil fuels burn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SO$_2$ comes from burning coal and oil containing sulfur impurities.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Any one effect: acid rain, breathing problems, damage to limestone/trees.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Burning sulfur-containing fossil fuels; e.g. acid rain.",
          "commonErrors": [
                    "Saying SO$_2$ comes only from car exhausts — the main source is sulfur in fuels."
          ]
},
        },
        {
          id: "ech11-u5-air-pollutants-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how nitrogen oxides form in car engines and why they are a pollution problem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "NOx formation",
                              "statement": "At high engine temperatures, N$_2$ and O$_2$ from air react to form NO and NO$_2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The high temperature in the engine cylinder makes nitrogen and oxygen from the air react.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "NO$_x$ dissolves in rainwater to form nitric acid, contributing to acid rain.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It also causes respiratory problems and photochemical smog, harming health.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Hot engines → N$_2$ + O$_2$ react → NO$_x$ → acid rain and smog.",
          "commonErrors": [
                    "Saying NO$_x$ comes from fuel impurities — it forms from air's own N$_2$ and O$_2$ at high temperature."
          ]
},
        },
        {
          id: "ech11-u5-air-pollutants-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A power station burns coal containing sulfur impurities.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the symbol equation for the formation of sulfur dioxide.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe the chain of events by which this leads to damage to a limestone building.",
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
                              "name": "Sulfur combustion",
                              "statement": "$\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sulfur + oxygen $\\rightarrow$ sulfur dioxide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Balanced: $\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "SO$_2$ dissolves in atmospheric water to form sulfurous/sulfuric acid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Acid rain falls on the limestone building.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The acid reacts with calcium carbonate, dissolving the stone and causing surface damage.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2$ (b) SO$_2$ → acid rain → dissolves CaCO$_3$.",
          "commonErrors": [
                    "Writing SO$_3$ instead of SO$_2$ as the direct product of burning sulfur."
          ]
},
        },
        {
          id: "ech11-u5-air-pollutants-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Cars are fitted with catalytic converters.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the overall reaction by which CO and NO are converted in a catalytic converter.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why this reduces air pollution.",
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
                              "name": "Catalytic converter",
                              "statement": "$2\\text{CO} + 2\\text{NO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "CO is oxidised to CO$_2$: $2\\text{CO} + \\text{O}_2 \\rightarrow 2\\text{CO}_2$ (or combined form).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "NO is reduced to N$_2$: $2\\text{NO} \\rightarrow \\text{N}_2 + \\text{O}_2$ (or combined form).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Overall: $2\\text{CO} + 2\\text{NO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Toxic carbon monoxide is converted to less harmful carbon dioxide.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Harmful nitrogen oxides are converted to harmless nitrogen gas.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "So fewer pollutants reach the air, reducing smog, acid rain and health effects.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $2\\text{CO} + 2\\text{NO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$ (b) converts toxic gases to harmless ones.",
          "commonErrors": [
                    "Producing NO$_2$ instead of N$_2$ — the converter reduces NO$_x$ to nitrogen."
          ]
},
        },
        {
          id: "ech11-u5-air-pollutants-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A poorly maintained boiler burns oil in a confined space with limited air.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the difference between complete and incomplete combustion, naming the products of each.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two dangers of the gases produced by incomplete combustion in this situation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how soot contributes to 'global dimming'.",
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
                              "name": "Complete vs incomplete combustion",
                              "statement": "Plenty of O$_2$ → CO$_2$ + H$_2$O; limited O$_2$ → CO and/or C + H$_2$O."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Complete combustion in plentiful oxygen gives carbon dioxide and water only.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Incomplete combustion in limited oxygen gives carbon monoxide and/or carbon (soot) as well as water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The limited air supply in the boiler favours incomplete combustion.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Carbon monoxide is poisonous — it binds haemoglobin and reduces oxygen transport.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Soot/CO in a confined space can cause breathing problems or fatal poisoning.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Soot particles reflect incoming sunlight back to space.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "They also absorb some radiation and help form haze that reflects light.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Less sunlight reaches the surface, so it has a cooling effect.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "This partly masks greenhouse warming — global dimming.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) complete: CO$_2$+H$_2$O; incomplete: CO/C+H$_2$O (b) CO poisoning, soot (c) soot reflects sunlight → cooling.",
          "commonErrors": [
                    "Saying soot causes global warming — it reflects sunlight and causes cooling (dimming)."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u5-sustainable-fuels",
      title: "Comparing and choosing sustainable fuels",
      skill: "Evaluate fuels using criteria such as energy content, emissions, cost and renewability, and compare fossil, hydrogen and biofuels.",
      lesson: {
        sections: [
          {
            heading: "Types of fuel",
            body: "- **Fossil fuels:** coal, oil and natural gas — non-renewable, formed over millions of years. Burning releases CO$_2$ that was locked away, increasing atmospheric carbon.\n- **Hydrogen:** burns to form only water; can be produced by electrolysis of water or from methane. Light and energy-dense but hard to store and transport.\n- **Biofuels:** ethanol (from sugar cane or corn) and biodiesel (from vegetable oils). Made from recently living material so the CO$_2$ released was recently absorbed — often called carbon neutral, though land use and processing matter.\n- **Others:** nuclear fuel, and renewable sources such as solar, wind and hydro used to generate electricity.",
          },
          {
            heading: "Criteria for choosing a fuel",
            body: "When comparing fuels, consider:\n\n- **Energy released per unit mass/volume** (calorific value)\n- **Greenhouse gas emissions** per unit energy — including 'life-cycle' emissions from production and transport\n- **Pollutants** such as SO$_2$, NO$_x$ and particulates\n- **Cost and availability** of the fuel and of engines that use it\n- **Renewability and sustainability** — will supplies last, and can waste be managed?\n- **Safety and storage** — flammability, toxicity, infrastructure needed",
          },
          {
            heading: "Trade-offs in practice",
            body: "Hydrogen produces no CO$_2$ at the point of use and is very light, but producing it from methane releases CO$_2$, and storing/compressing it is expensive. Biofuels recycle recent carbon but can compete with food crops for land. No fuel is perfect — the best choice depends on the use, local resources and how the whole life cycle is counted.",
          },
        ],
        keyFormulas: [
          { name: "Fuel comparison criteria", statement: "energy content, CO$_2$/life-cycle emissions, pollutants, cost, renewability, safety" },
          { name: "Hydrogen combustion", statement: "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$" },
          { name: "Carbon neutral", statement: "CO$_2$ released $\\approx$ CO$_2$ recently absorbed by the biomass" },
        ],
        workedExample: {
          problem: "A delivery company must choose between diesel, hydrogen and biodiesel for its lorries. Evaluate the three options.",
          solution: "Diesel is cheap and energy-dense with existing infrastructure but emits CO$_2$, NO$_x$ and particulates and is non-renewable. Hydrogen gives only water at the point of use and is renewable if made by electrolysis, but storage, refuelling infrastructure and production cost are problems. Biodiesel is renewable and burns cleaner than diesel, but competes with food production and still emits some pollutants. The best choice depends on priorities: lowest emissions favours hydrogen/biodiesel; lowest cost and convenience favours diesel in the short term.",
        },
      },
      questions: [
        {
          id: "ech11-u5-sustainable-fuels-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fuel produces only water when it burns completely?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Methane"
                    },
                    {
                              "id": "b",
                              "text": "Petrol"
                    },
                    {
                              "id": "c",
                              "text": "Hydrogen"
                    },
                    {
                              "id": "d",
                              "text": "Coal"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Hydrogen combustion",
                              "statement": "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hydrogen contains no carbon, so no CO$_2$ forms — only water.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Hydrogen",
          "commonErrors": [
                    "Choosing methane — it burns to CO$_2$ and water."
          ]
},
        },
        {
          id: "ech11-u5-sustainable-fuels-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define the term 'biofuel' and give one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Biofuel",
                              "statement": "A fuel produced from recently living or recently dead biological material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A biofuel is made from biological material such as crops, waste or oils.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Any one example: ethanol, biodiesel, biogas/methane from fermentation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Fuel from biological material; e.g. ethanol or biodiesel.",
          "commonErrors": [
                    "Calling any liquid fuel a biofuel — it must come from biological feedstock."
          ]
},
        },
        {
          id: "ech11-u5-sustainable-fuels-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of hydrogen over petrol as a vehicle fuel.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Hydrogen vs petrol",
                              "statement": "Hydrogen burns to water only; petrol produces CO$_2$, NO$_x$, particulates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combustion of hydrogen produces only water — no CO$_2$, CO, NO$_x$ or particulates at the point of use.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Hydrogen is very light and has a high energy content per unit mass.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It can be produced from water using renewable electricity (electrolysis), making it potentially sustainable.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Only water produced; renewable production possible; high energy density.",
          "commonErrors": [
                    "Ignoring that producing hydrogen from methane emits CO$_2$ — the advantage is at the point of use and with green production."
          ]
},
        },
        {
          id: "ech11-u5-sustainable-fuels-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Methane and hydrogen are both considered as vehicle fuels.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write balanced equations for the complete combustion of each fuel.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Compare the carbon dioxide produced when each fuel releases the same amount of energy.",
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
                              "name": "Combustion equations",
                              "statement": "$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$; $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Methane combustion produces CO$_2$; hydrogen combustion produces none.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Per mole of fuel hydrogen releases less energy than methane, but per unit mass it is higher.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "For the same energy output, methane emits CO$_2$ while hydrogen emits only water — hydrogen has lower carbon emissions.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) CH$_4$ + 2O$_2$ → CO$_2$ + 2H$_2$O; 2H$_2$ + O$_2$ → 2H$_2$O (b) hydrogen gives zero CO$_2$ per unit energy.",
          "commonErrors": [
                    "Assuming more moles of H$_2$ needed means more CO$_2$ — hydrogen produces no CO$_2$ at all."
          ]
},
        },
        {
          id: "ech11-u5-sustainable-fuels-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Biodiesel is marketed as a 'carbon neutral' fuel.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what 'carbon neutral' means for biodiesel.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two reasons why biodiesel may not be completely carbon neutral in practice.",
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
                              "name": "Carbon neutral",
                              "statement": "CO$_2$ released equals CO$_2$ recently absorbed by the feedstock."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The plants (e.g. oilseed rape, soy) absorbed CO$_2$ from the air as they grew.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "When the biodiesel burns, it releases that same carbon back as CO$_2$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Over the fuel's life cycle the net CO$_2$ added to the atmosphere is roughly zero.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fossil fuels are used to run farm machinery, transport and processing, adding CO$_2$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fertiliser production and nitrous oxide emissions from soils add greenhouse gases.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Land-use change (clearing forests for crops) can release more carbon than the crop absorbs.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) absorbs CO$_2$ while growing, releases on burning — net ~zero (b) processing energy, fertilisers, land-use change.",
          "commonErrors": [
                    "Treating 'carbon neutral' as 'zero emissions' — it is net zero over the life cycle only."
          ]
},
        },
        {
          id: "ech11-u5-sustainable-fuels-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A city council must choose a fuel for its new bus fleet: diesel, hydrogen or biodiesel.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List four criteria the council should use to compare the fuels.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Apply the criteria to compare diesel with hydrogen.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Give a justified recommendation.",
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
                              "name": "Fuel evaluation",
                              "statement": "Compare fuels on energy content, emissions, cost, infrastructure and sustainability."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Energy released per unit mass/volume (calorific value).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Greenhouse gas and pollutant emissions per unit energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Cost of fuel plus cost of vehicles/engines needed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Renewability and life-cycle sustainability.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Diesel is cheap, energy-dense and infrastructure exists, but emits CO$_2$, NO$_x$, particulates and is non-renewable.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hydrogen emits only water at point of use and is potentially renewable, but storage, refuelling and production cost are barriers.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any justified choice: e.g. hydrogen for lowest emissions if infrastructure affordable; diesel/biodiesel blend as a cheaper interim.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) energy, emissions, cost, sustainability (b) diesel cheap/polluting; H$_2$ clean/costly (c) justified recommendation.",
          "commonErrors": [
                    "Comparing fuels only by price or only by emissions — a balanced evaluation needs several criteria."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u5-pollution-fuels-notes",
      title: "Air pollution and fuels — notes",
      summary: "Pollutants: CO, SO$_2$, NO$_x$, particulates → acid rain, smog, health effects. Choose fuels by energy, emissions, cost and renewability.",
      sections: [
        { heading: "Pollutant sources", body: "CO: incomplete combustion. SO$_2$: sulfur in fuels. NO$_x$: hot engines. Particulates: soot. Acid rain = SO$_2$ + NO$_x$ + water." },
        { heading: "Catalytic converter", body: "$2\\text{CO} + 2\\text{NO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$" },
        { heading: "Fuel choice", body: "Fossil = cheap, polluting, finite. Hydrogen = clean at use, hard to store/make. Biofuel = carbon neutral in theory, land-use issues." },
      ],
    },
  ],
};
