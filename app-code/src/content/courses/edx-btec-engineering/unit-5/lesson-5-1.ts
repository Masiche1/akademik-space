import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "edxbteceng-u5-lesson-5-1",
  code: "5-1",
  title: "Heat Capacity and Specific Heat",
  goal: "I CAN calculate heat energy using Q = mcΔT, apply specific heat capacity and latent heat, and solve heating and cooling problems.",
  standards: ["Pearson BTEC L3 National Engineering — Unit 5: Thermal and Fluid Principles", "Engineering calculations: energy, specific heat capacity, latent heat"],
  
  vocabulary: [
    { term: "Heat energy", definition: "Energy transferred between bodies because of a temperature difference, measured in joules (J)." },
    { term: "Specific heat capacity", definition: "The energy needed to raise the temperature of 1 kg of a material by 1 °C, in J/(kg °C)." },
    { term: "Latent heat", definition: "The energy needed to change the state of a material without a temperature change, in J/kg." },
    { term: "Thermal equilibrium", definition: "The state reached when connected bodies are at the same temperature and net heat transfer stops." },
    { term: "Temperature change", definition: "The difference between final and initial temperature, ΔT, in °C or K." },
  ],
  concepts: [
    {
      id: "edxbteceng-u5-1-heatcapacity",
      title: "Heat energy, specific heat capacity and latent heat",
      skill: "Calculate heat energy transferred using mass, specific heat capacity and temperature change, and apply latent heat during a change of state.",
      lesson: {
        sections: [
          {
            heading: "The Q = mcΔT relationship",
            body: "When a body is heated or cooled, the energy transferred is $Q = mc\\Delta T$, where $Q$ is energy in joules, $m$ is mass in kilograms, $c$ is specific heat capacity in J/(kg °C) and $\\Delta T$ is the temperature change in °C (equal to the change in kelvin).\n\nSubstances with a **high specific heat capacity** (water ≈ 4200 J/(kg °C)) need a lot of energy for a small temperature rise, which is why water is used as a coolant. Metals such as aluminium (≈ 900) and iron (≈ 450) heat up much faster.",
          },
          {
            heading: "Latent heat and change of state",
            body: "During a change of state — melting, boiling, freezing or condensing — energy is transferred but the temperature stays constant. The energy required is $Q = mL$, where $L$ is the **specific latent heat** in J/kg.\n\nA complete heating calculation may combine both parts: first $mc\\Delta T$ to reach the melting/boiling point, then $mL$ for the state change, then $mc\\Delta T$ again for the new state. For example, heating ice from −10 °C to steam at 100 °C requires sensible heat, latent heat of fusion, latent heat of vaporisation and more sensible heat.",
          },
        ],
        keyFormulas: [
          { name: "Heat energy", statement: "$Q = mc\\Delta T$" },
          { name: "Latent heat", statement: "$Q = mL$" },
          { name: "Specific heat capacity", statement: "$c = \\dfrac{Q}{m\\Delta T}$" },
        ],
        workedExample: {
          problem: "An aluminium block of mass 0.4 kg and specific heat capacity 900 J/(kg °C) is heated from 20 °C to 80 °C. Calculate the energy transferred.",
          solution: "$\\Delta T = 80 - 20 = 60\\ °\\text{C}$\n$Q = mc\\Delta T = 0.4 \\times 900 \\times 60 = 21\\ 600\\ \\text{J} = 21.6\\ \\text{kJ}$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u5-1-heatcapacity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct SI unit for specific heat capacity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "J/(kg °C)"
                    },
                    {
                              "id": "b",
                              "text": "J/kg"
                    },
                    {
                              "id": "c",
                              "text": "W/(m °C)"
                    },
                    {
                              "id": "d",
                              "text": "J/°C"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Specific heat capacity",
                              "statement": "Energy per kilogram per degree Celsius: J/(kg °C)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specific heat capacity includes mass and temperature, so its unit is J/(kg °C).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) J/(kg °C)",
          "commonErrors": [
                    "Confusing J/(kg °C) with J/kg, which is the unit of specific latent heat."
          ]
},
        },
        {
          id: "edxbteceng-u5-1-heatcapacity-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate the energy needed to raise the temperature of a 0.5 kg aluminium block (c = 900 J/(kg °C)) by 200 °C. Give your answer in joules.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "energy",
                              "answer": 90000,
                              "unit": "J"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Heat energy",
                              "statement": "$Q = mc\\Delta T$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute m = 0.5 kg, c = 900 J/(kg °C), ΔT = 200 °C.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$Q = 0.5 \\times 900 \\times 200 = 90\\ 000\\ \\text{J}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$90\\ 000\\ \\text{J}$ (90 kJ)"
},
        },
        {
          id: "edxbteceng-u5-1-heatcapacity-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between specific heat capacity and specific latent heat, giving the formula and unit for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Specific heat capacity",
                              "statement": "Energy to raise 1 kg by 1 °C, in J/(kg °C)."
                    },
                    {
                              "kind": "definition",
                              "name": "Specific latent heat",
                              "statement": "Energy to change the state of 1 kg, in J/kg."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specific heat capacity applies to temperature change with no state change; formula $Q = mc\\Delta T$, unit J/(kg °C).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Specific latent heat applies during melting/boiling at constant temperature; formula $Q = mL$, unit J/kg.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Both describe energy per kilogram but for different processes — sensible vs latent heat.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Specific heat capacity = energy per kg per °C for temperature change; latent heat = energy per kg for state change at constant temperature.",
          "commonErrors": [
                    "Saying latent heat causes a temperature change — it is absorbed/released at constant temperature."
          ]
},
        },
        {
          id: "edxbteceng-u5-1-heatcapacity-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A 1.5 kg block of copper (c = 390 J/(kg °C)) is heated from 20 °C to 80 °C by a 2 kW heater.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the energy transferred to the copper.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the time taken assuming all the heater energy goes into the copper.",
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
                              "name": "Heat energy",
                              "statement": "$Q = mc\\Delta T$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\Delta T = 80 - 20 = 60\\ °\\text{C}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$Q = 1.5 \\times 390 \\times 60$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$Q = 35\\ 100\\ \\text{J}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$t = Q / P = 35\\ 100 / 2000$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$t = 17.55\\ \\text{s}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $35\\ 100\\ \\text{J}$ (b) $17.55\\ \\text{s}$"
},
        },
        {
          id: "edxbteceng-u5-1-heatcapacity-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A 2 kg block of ice at 0 °C is completely melted using an electric heater, then the resulting water is heated from 0 °C to 30 °C. Specific latent heat of fusion of ice = 334 000 J/kg; specific heat capacity of water = 4200 J/(kg °C).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the energy needed to melt the ice.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the energy needed to heat the melted water to 30 °C.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the total energy required.",
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
                              "name": "Latent heat",
                              "statement": "$Q = mL$"
                    },
                    {
                              "kind": "formula",
                              "name": "Heat energy",
                              "statement": "$Q = mc\\Delta T$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$Q = mL = 2 \\times 334\\ 000$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$Q = 668\\ 000\\ \\text{J}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$Q = mc\\Delta T = 2 \\times 4200 \\times 30$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$Q = 252\\ 000\\ \\text{J}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Total $= 668\\ 000 + 252\\ 000$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "$= 920\\ 000\\ \\text{J}$ (920 kJ).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) 668 kJ (b) 252 kJ (c) 920 kJ",
          "commonErrors": [
                    "Using the same formula for melting and heating — melting needs $mL$, not $mc\\Delta T$."
          ]
},
        },
        {
          id: "edxbteceng-u5-1-heatcapacity-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A 3 kg brass engine component (c = 380 J/(kg °C)) is heated from 15 °C to 95 °C by a 1500 W heater. A designer is comparing brass with aluminium (c = 900 J/(kg °C)) for the same component.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the formula used to calculate the heat energy transferred.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the energy needed to heat the brass component.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Calculate the time the heater must run, assuming no heat losses.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how choosing aluminium instead of brass would change the energy needed for the same temperature rise.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Convert your answer to part (b) into kilojoules.",
                    "marks": 1
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
                              "statement": "$Q = mc\\Delta T$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$Q = mc\\Delta T$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\Delta T = 95 - 15 = 80\\ °\\text{C}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$Q = 3 \\times 380 \\times 80$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$Q = 91\\ 200\\ \\text{J}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$t = Q / P = 91\\ 200 / 1500$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "$t = 60.8\\ \\text{s}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Aluminium has a higher specific heat capacity (900 vs 380 J/(kg °C)).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "So more energy is needed for the same mass and temperature rise: $Q$ is larger by a factor of $900/380 \\approx 2.4$.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "$91\\ 200\\ \\text{J} = 91.2\\ \\text{kJ}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $Q = mc\\Delta T$ (b) 91 200 J (c) 60.8 s (d) more energy needed, ~2.4× (e) 91.2 kJ",
          "commonErrors": [
                    "Dividing by 1000 incorrectly when converting J to kJ."
          ]
},
        },
      ],
    },
    {
      id: "edxbteceng-u5-1-heattransfer",
      title: "Conduction, convection and radiation",
      skill: "Explain and calculate rates of heat transfer by conduction, convection and radiation, and identify how each is reduced or increased in engineering systems.",
      lesson: {
        sections: [
          {
            heading: "The three mechanisms",
            body: "**Conduction** transfers heat through a material without bulk movement of the material — molecular vibrations pass energy along. Rate increases with thermal conductivity $\\lambda$, cross-sectional area $A$ and temperature difference $\\Delta T$, and decreases with thickness $d$: $P = \\lambda A\\Delta T / d$.\n\n**Convection** transfers heat by the movement of a fluid (liquid or gas). Warm fluid expands, becomes less dense and rises; cooler fluid sinks to replace it, creating a convection current. Forced convection (fans, pumps) is faster than natural convection.\n\n**Radiation** transfers heat as electromagnetic waves — it needs no medium and travels through a vacuum. Dark, matt surfaces absorb and emit radiation well; light, shiny surfaces reflect it and emit poorly.",
          },
          {
            heading: "Applications and control",
            body: "Insulation combines the three: a vacuum gap stops conduction and convection (nothing to conduct through, no fluid to convect), silvered surfaces reduce radiation, and trapped air pockets in fibreglass or foam slow convection.\n\nHeat sinks use high-conductivity metals and large surface areas with fins to maximise conduction and convection away from hot components. Cooking relies on all three: a frying pan conducts into food, boiling water convects, and an oven radiates infrared.",
          },
        ],
        keyFormulas: [
          { name: "Conductive heat rate", statement: "$P = \\dfrac{\\lambda A\\Delta T}{d}$" },
          { name: "Radiation", statement: "dark matt surfaces emit and absorb more; shiny light surfaces less" },
          { name: "Convection", statement: "requires a fluid; warm fluid rises" },
        ],
        workedExample: {
          problem: "Heat conducts through a steel plate of thickness 0.02 m and area 0.5 m². Thermal conductivity = 50 W/(m °C) and the temperature difference is 60 °C. Find the rate of heat transfer.",
          solution: "$P = \\dfrac{\\lambda A\\Delta T}{d} = \\dfrac{50 \\times 0.5 \\times 60}{0.02} = \\dfrac{1500}{0.02} = 75\\ 000\\ \\text{W} = 75\\ \\text{kW}$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u5-1-heattransfer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is the best thermal conductor of these?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Copper"
                    },
                    {
                              "id": "b",
                              "text": "Glass"
                    },
                    {
                              "id": "c",
                              "text": "Wood"
                    },
                    {
                              "id": "d",
                              "text": "Plastic"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Thermal conductivity",
                              "statement": "Metals conduct heat best; copper has very high conductivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Copper is a metal with very high thermal conductivity compared with glass, wood or plastic.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) Copper"
},
        },
        {
          id: "edxbteceng-u5-1-heattransfer-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Heat conducts through a wall of thermal conductivity 0.5 W/(m °C), area 10 m², thickness 0.2 m and temperature difference 20 °C. Calculate the rate of heat transfer in watts.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "rate",
                              "answer": 500,
                              "unit": "W"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Conductive heat rate",
                              "statement": "$P = \\lambda A\\Delta T / d$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute $\\lambda = 0.5$, $A = 10$, $\\Delta T = 20$, $d = 0.2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$P = (0.5 \\times 10 \\times 20) / 0.2 = 500\\ \\text{W}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$500\\ \\text{W}$"
},
        },
        {
          id: "edxbteceng-u5-1-heattransfer-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how each of conduction, convection and radiation transfers heat, and state one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Conduction",
                              "statement": "Heat transfer through a material without bulk movement."
                    },
                    {
                              "kind": "principle",
                              "name": "Convection",
                              "statement": "Heat transfer by movement of a fluid."
                    },
                    {
                              "kind": "principle",
                              "name": "Radiation",
                              "statement": "Heat transfer as electromagnetic waves; needs no medium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conduction: vibrations pass through a solid/liquid, e.g. heat along a metal spoon in soup.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Convection: warm fluid rises and cool fluid sinks, e.g. boiling water or air in a room.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Radiation: infrared waves, e.g. heat from the Sun or an oven element; travels through vacuum.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Conduction through material, convection by fluid movement, radiation as waves needing no medium."
},
        },
        {
          id: "edxbteceng-u5-1-heattransfer-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Heat conducts through a glass window pane of conductivity 0.8 W/(m °C), area 1.5 m², thickness 0.004 m. The temperature difference across the pane is 15 °C.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the rate of heat transfer through the pane.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the inside surface of a vacuum flask is silvered.",
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
                              "name": "Conductive heat rate",
                              "statement": "$P = \\lambda A\\Delta T / d$"
                    },
                    {
                              "kind": "principle",
                              "name": "Radiation",
                              "statement": "Shiny light surfaces emit and absorb less radiation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$P = (0.8 \\times 1.5 \\times 15) / 0.004$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$P = 18 / 0.004$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$P = 4500\\ \\text{W}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Silvered surfaces are shiny and reflect infrared radiation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This reduces radiative heat transfer in and out of the flask.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $4500\\ \\text{W}$ (b) reflects infrared radiation, reducing radiative heat loss",
          "commonErrors": [
                    "Forgetting that a thinner wall increases the rate of conduction."
          ]
},
        },
        {
          id: "edxbteceng-u5-1-heattransfer-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A thermos flask keeps drinks hot for hours.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the three methods of heat transfer and state which two the vacuum gap between the walls prevents.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain why the silvered inner wall helps.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why a lid is still needed even though the walls are vacuum-insulated.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Give one other engineering application of radiation control.",
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
                              "name": "Heat transfer",
                              "statement": "Conduction, convection and radiation."
                    },
                    {
                              "kind": "principle",
                              "name": "Radiation control",
                              "statement": "Shiny surfaces reflect; dark matt surfaces emit."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Conduction, convection, radiation; the vacuum prevents conduction and convection.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Silvering reflects infrared radiation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This reduces radiative heat loss from the hot drink.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "The lid stops convection and evaporation at the top opening.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Without it, hot air/vapour escapes and cool air enters, and water vapour condenses on cool walls.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any valid example: space blankets, radiant heaters, car radiators, solar panels, cooking foil.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Conduction, convection and radiation; vacuum stops conduction/convection, silvering stops radiation, lid stops convection/evaporation."
},
        },
        {
          id: "edxbteceng-u5-1-heattransfer-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A heat sink in an electronic device has fins made of aluminium (thermal conductivity 200 W/(m °C)). Consider a section of fin of area 0.02 m², thickness 0.005 m, with a temperature difference of 45 °C between its base and tip.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the formula for the rate of conductive heat transfer.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the rate of heat transfer through the fin section.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two design features that help a heat sink transfer heat to the air.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why forced convection (a fan) improves cooling compared with natural convection.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State the SI unit of thermal conductivity.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Conductive heat rate",
                              "statement": "$P = \\lambda A\\Delta T / d$"
                    },
                    {
                              "kind": "principle",
                              "name": "Convection",
                              "statement": "Moving fluid removes heat faster than still fluid."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$P = \\lambda A\\Delta T / d$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$P = (200 \\times 0.02 \\times 45) / 0.005$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$P = 180 / 0.005$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$P = 36\\ 000\\ \\text{W}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Fins increase surface area; high-conductivity metal conducts heat to the surface quickly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Large area and thin fins maximise $A/d$ and convection to air.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "A fan moves air across the fins, carrying away warm air faster.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Forced convection is much faster than natural convection, maintaining a larger $\\Delta T$.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "W/(m °C).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $P = \\lambda A\\Delta T/d$ (b) 36 000 W (c) fins + high conductivity (d) fan increases convective heat removal (e) W/(m °C)"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u5-heat-notes",
      title: "Heat and heat transfer — notes",
      summary: "Q = mcΔT for temperature change, Q = mL for state change. Conduction P = λAΔT/d; convection needs fluid; radiation needs no medium.",
      sections: [
        { heading: "Key formulas", body: "$Q = mc\\Delta T$ (no state change), $Q = mL$ (state change), $P = \\lambda A\\Delta T / d$ (conduction)." },
        { heading: "Comparing materials", body: "Water has very high specific heat capacity — excellent coolant but slow to heat. Metals have high conductivity — good heat spreaders." },
        { heading: "Insulation logic", body: "Vacuum gap stops conduction and convection; silvering stops radiation; trapped air slows convection." },
      ],
    },
  ],
};
