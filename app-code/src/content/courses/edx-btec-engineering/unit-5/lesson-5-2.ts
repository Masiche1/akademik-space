import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edxbteceng-u5-lesson-5-2",
  code: "5-2",
  title: "Fluid Pressure and Hydrostatics",
  goal: "I CAN calculate pressure from force and area, apply hydrostatic pressure P = ρgh, and explain Pascal's law in hydraulic systems.",
  standards: ["Pearson BTEC L3 National Engineering — Unit 5: Thermal and Fluid Principles", "Engineering calculations: pressure, density, hydrostatics"],
  
  vocabulary: [
    { term: "Pressure", definition: "Force per unit area, measured in pascals (Pa = N/m²)." },
    { term: "Density", definition: "Mass per unit volume, in kg/m³." },
    { term: "Hydrostatic pressure", definition: "The pressure exerted by a stationary fluid due to its weight, increasing with depth." },
    { term: "Pascal's law", definition: "Pressure applied to an enclosed fluid is transmitted equally in all directions." },
    { term: "Gauge pressure", definition: "Pressure measured relative to atmospheric pressure." },
    { term: "Atmospheric pressure", definition: "The pressure exerted by the weight of the atmosphere, about 101 325 Pa at sea level." },
  ],
  concepts: [
    {
      id: "edxbteceng-u5-2-pressure",
      title: "Pressure = force ÷ area",
      skill: "Calculate pressure from force and contact area, convert between Pa and kPa, and explain why pressure depends on both force and area.",
      lesson: {
        sections: [
          {
            heading: "Pressure definition",
            body: "Pressure is the force acting perpendicularly on a surface divided by the area over which it acts: $P = F / A$. The SI unit is the **pascal** (Pa), where $1\\ \\text{Pa} = 1\\ \\text{N/m}^2$. Larger forces or smaller areas give higher pressure.\n\nThis is why a sharp knife cuts easily — the same cutting force acts on a tiny edge area, producing very high pressure. Snowshoes do the opposite: spreading the same weight over a larger area reduces pressure so the wearer does not sink.",
          },
          {
            heading: "Pressure in engineering",
            body: "Tyre pressure, hydraulic presses and pneumatic tools all rely on $P = F/A$. Pressure is also the quantity transmitted unchanged through an enclosed fluid (Pascal's law), which is the basis of hydraulic machinery covered in the next lesson.\n\nEngineers often work in kilopascals (1 kPa = 1000 Pa) or bar (1 bar ≈ 100 kPa). Atmospheric pressure at sea level is about 101 kPa — significant in vacuum and sealed systems.",
          },
        ],
        keyFormulas: [
          { name: "Pressure", statement: "$P = \\dfrac{F}{A}$" },
          { name: "Pascal", statement: "$1\\ \\text{Pa} = 1\\ \\text{N/m}^2$" },
          { name: "Force from pressure", statement: "$F = PA$" },
        ],
        workedExample: {
          problem: "A crate weighing 1200 N rests on a pallet with contact area 0.6 m². Calculate the pressure on the floor.",
          solution: "$P = F/A = 1200 / 0.6 = 2000\\ \\text{Pa} = 2\\ \\text{kPa}$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u5-2-pressure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of pressure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pascal (Pa)"
                    },
                    {
                              "id": "b",
                              "text": "Newton (N)"
                    },
                    {
                              "id": "c",
                              "text": "Joule (J)"
                    },
                    {
                              "id": "d",
                              "text": "Watt (W)"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pressure unit",
                              "statement": "Pressure is force per area; the unit is the pascal, Pa = N/m²."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pressure = force/area, so its unit is N/m², the pascal.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) Pascal (Pa)"
},
        },
        {
          id: "edxbteceng-u5-2-pressure-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A force of 2400 N acts on an area of 0.12 m². Calculate the pressure in pascals.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "pressure",
                              "answer": 20000,
                              "unit": "Pa"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Pressure",
                              "statement": "$P = F/A$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute $F = 2400\\ \\text{N}$ and $A = 0.12\\ \\text{m}^2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$P = 2400 / 0.12 = 20\\ 000\\ \\text{Pa}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$20\\ 000\\ \\text{Pa}$ (20 kPa)"
},
        },
        {
          id: "edxbteceng-u5-2-pressure-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why pressure depends on both the force applied and the area it acts on. Use an example to support your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Pressure",
                              "statement": "$P = F/A$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$P = F/A$: larger force increases pressure; larger area decreases it.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The same force spread over a bigger area produces lower pressure because each point carries less load.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Valid example: knife edge vs blunt blade, stiletto heels vs flat soles, snowshoes, wider tyres.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Pressure = force/area; force increases it, area decreases it.",
          "commonErrors": [
                    "Saying only the force matters and ignoring area."
          ]
},
        },
        {
          id: "edxbteceng-u5-2-pressure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A punch presses on a workpiece with a force of 600 N through a die of area 0.05 m².",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the pressure on the workpiece.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "The die is replaced by one of area 0.02 m² with the same force. Calculate the new pressure.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the name of the unit Pa in terms of base units.",
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
                              "name": "Pressure",
                              "statement": "$P = F/A$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$P = 600 / 0.05 = 12\\ 000\\ \\text{Pa}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$12\\ \\text{kPa}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$P = 600 / 0.02 = 30\\ 000\\ \\text{Pa} = 30\\ \\text{kPa}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pa = N/m² = kg/(m s²).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) 12 kPa (b) 30 kPa (c) N/m²"
},
        },
        {
          id: "edxbteceng-u5-2-pressure-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A car tyre supports part of a 3000 N load over a contact patch of area 0.015 m².",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define pressure.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the pressure exerted on the road surface.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why wide, low-pressure tyres are used on sand.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "State the SI unit of pressure.",
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
                              "name": "Pressure",
                              "statement": "$P = F/A$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pressure is force per unit area.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "$P = F/A = 3000 / 0.015$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$= 200\\ 000\\ \\text{Pa}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$= 200\\ \\text{kPa}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "A larger contact area spreads the weight, lowering pressure so the vehicle does not sink into soft sand.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Pascal (Pa) = N/m².",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) force per unit area (b) 200 kPa (c) larger area lowers pressure on soft ground (d) Pa"
},
        },
        {
          id: "edxbteceng-u5-2-pressure-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A person of weight 700 N stands on one foot with a contact area of 0.02 m². When standing on both feet the total contact area is 0.05 m².",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the formula for pressure.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the pressure on the floor when standing on one foot.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the pressure when standing on both feet.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why high-heeled shoes can damage floors despite the same body weight.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Calculate the force on the floor if the person lies down with a contact area of 0.4 m².",
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
                              "name": "Pressure",
                              "statement": "$P = F/A$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$P = F/A$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$P = 700 / 0.02 = 35\\ 000\\ \\text{Pa} = 35\\ \\text{kPa}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$P = 700 / 0.05 = 14\\ 000\\ \\text{Pa} = 14\\ \\text{kPa}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Heels have a very small contact area.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "The same weight over a smaller area produces much higher pressure, which can crack tiles or dent floors.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "$F = PA = (700/0.4) \\times 0.4 = 700\\ \\text{N}$ — the force equals the weight.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $P = F/A$ (b) 35 kPa (c) 14 kPa (d) small heel area → high pressure (e) 700 N",
          "commonErrors": [
                    "Adding pressure when both feet are used — the same total force is shared, but area doubles."
          ]
},
        },
      ],
    },
    {
      id: "edxbteceng-u5-2-hydrostatics",
      title: "Hydrostatic pressure and density",
      skill: "Calculate hydrostatic pressure using P = ρgh, relate pressure to depth and density, and explain pressure distribution in fluids.",
      lesson: {
        sections: [
          {
            heading: "Hydrostatic pressure",
            body: "A fluid at rest exerts pressure because of its own weight. At depth $h$ below the surface, pressure is $P = \\rho g h$, where $\\rho$ is fluid density in kg/m³, $g = 9.81\\ \\text{m/s}^2$ and $h$ is depth in metres. Pressure increases linearly with depth and is greater in denser fluids — sea water ($\\rho \\approx 1025\\ \\text{kg/m}^3$) gives higher pressure than fresh water (1000 kg/m³).\n\nPressure at a given depth acts **equally in all directions** — this is why a dam must be much thicker at the base, where pressure is greatest.",
          },
          {
            heading: "Absolute and gauge pressure",
            body: "**Gauge pressure** measures pressure above atmospheric pressure and is what most pressure gauges show. **Absolute pressure** adds atmospheric pressure: $P_{\\text{abs}} = P_{\\text{gauge}} + P_{\\text{atm}}$, with $P_{\\text{atm}} \\approx 101\\ 325\\ \\text{Pa}$.\n\nSubmarines, dams, oil rigs and hydraulic systems all design for hydrostatic pressure. Divers' ears 'pop' because pressure increases about 1 atm every 10 m of water depth.",
          },
        ],
        keyFormulas: [
          { name: "Hydrostatic pressure", statement: "$P = \\rho g h$" },
          { name: "Absolute pressure", statement: "$P_{\\text{abs}} = \\rho gh + P_{\\text{atm}}$" },
          { name: "Density", statement: "$\\rho = m/V$" },
        ],
        workedExample: {
          problem: "Find the pressure at a depth of 8 m in fresh water (ρ = 1000 kg/m³, g = 9.81 m/s²).",
          solution: "$P = \\rho g h = 1000 \\times 9.81 \\times 8 = 78\\ 480\\ \\text{Pa} \\approx 78.5\\ \\text{kPa}$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u5-2-hydrostatics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hydrostatic pressure in a fluid depends on which of these?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Depth, density and gravitational field strength"
                    },
                    {
                              "id": "b",
                              "text": "Depth and temperature only"
                    },
                    {
                              "id": "c",
                              "text": "Surface area of the container"
                    },
                    {
                              "id": "d",
                              "text": "The colour of the fluid"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Hydrostatic pressure",
                              "statement": "$P = \\rho g h$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$P = \\rho g h$ depends on density $\\rho$, gravity $g$ and depth $h$ — not container shape or colour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) Depth, density and g"
},
        },
        {
          id: "edxbteceng-u5-2-hydrostatics-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate the hydrostatic pressure at a depth of 5 m in water of density 1000 kg/m³. Use g = 9.81 m/s².",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "pressure",
                              "answer": 49050,
                              "unit": "Pa"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Hydrostatic pressure",
                              "statement": "$P = \\rho g h$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute $\\rho = 1000$, $g = 9.81$, $h = 5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$P = 1000 \\times 9.81 \\times 5 = 49\\ 050\\ \\text{Pa}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$49\\ 050\\ \\text{Pa}$ (49.05 kPa)"
},
        },
        {
          id: "edxbteceng-u5-2-hydrostatics-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a concrete dam is much thicker at its base than at its top, using ideas about hydrostatic pressure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Hydrostatic pressure",
                              "statement": "$P = \\rho g h$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pressure increases with depth $h$: $P = \\rho g h$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The base of the dam is deepest, so water pressure there is greatest.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "A thicker base provides more material and cross-section to resist the greater force; it also lowers the average pressure on the foundation.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Pressure grows with depth, so the base must be thicker to withstand the larger force."
},
        },
        {
          id: "edxbteceng-u5-2-hydrostatics-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A pressure sensor is mounted 10 m below the surface of the sea. Sea water density = 1025 kg/m³; g = 9.81 m/s²; atmospheric pressure = 101 325 Pa.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the hydrostatic (gauge) pressure at the sensor.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the absolute pressure at the sensor.",
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
                              "name": "Hydrostatic pressure",
                              "statement": "$P = \\rho g h$"
                    },
                    {
                              "kind": "formula",
                              "name": "Absolute pressure",
                              "statement": "$P_{\\text{abs}} = \\rho gh + P_{\\text{atm}}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$P = 1025 \\times 9.81 \\times 10$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$P = 100\\ 552.5\\ \\text{Pa} \\approx 100.6\\ \\text{kPa}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$P_{\\text{abs}} = 100\\ 552.5 + 101\\ 325$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$= 201\\ 877.5\\ \\text{Pa} \\approx 201.9\\ \\text{kPa}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $\\approx 100.6\\ \\text{kPa}$ (b) $\\approx 201.9\\ \\text{kPa}$"
},
        },
        {
          id: "edxbteceng-u5-2-hydrostatics-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Water in a reservoir has density 1000 kg/m³ and g = 9.81 m/s².",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down the formula for hydrostatic pressure and state what each symbol represents.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the depth at which the gauge pressure is 200 kPa.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the shape of the container does not affect the pressure at a given depth.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "State one engineering structure that must be designed for hydrostatic pressure.",
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
                              "name": "Hydrostatic pressure",
                              "statement": "$P = \\rho g h$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$P = \\rho g h$: $\\rho$ = density (kg/m³), $g$ = gravitational field strength (m/s²), $h$ = depth (m).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$h = P/(\\rho g) = 200\\ 000 / (1000 \\times 9.81)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$h \\approx 20.4\\ \\text{m}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pressure depends only on depth and density, not on the weight or shape of the fluid above or container walls.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any valid: dam, submarine hull, oil rig, water tank, ship's side.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $P = \\rho gh$ (b) $\\approx 20.4\\ \\text{m}$ (c) pressure depends on depth and density only (d) e.g. dam"
},
        },
        {
          id: "edxbteceng-u5-2-hydrostatics-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A submarine hatch of area 0.5 m² is at a depth of 25 m in fresh water ($\\rho = 1000\\ \\text{kg/m}^3$, $g = 9.81\\ \\text{m/s}^2$).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define hydrostatic pressure.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the hydrostatic pressure at the hatch.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Calculate the force on the hatch due to the water pressure.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why the submarine hull must be very strong.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State what happens to the pressure if the submarine dives to 50 m.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hydrostatic pressure",
                              "statement": "Pressure due to the weight of a fluid at rest."
                    },
                    {
                              "kind": "formula",
                              "name": "Hydrostatic pressure",
                              "statement": "$P = \\rho g h$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pressure exerted by a stationary fluid due to its weight.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "$P = 1000 \\times 9.81 \\times 25$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$P = 245\\ 250\\ \\text{Pa} = 245.25\\ \\text{kPa}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$F = PA = 245\\ 250 \\times 0.5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "$F = 122\\ 625\\ \\text{N} \\approx 122.6\\ \\text{kN}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Pressure rises with depth, so the hull must resist huge forces without collapsing.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Failure would flood the vessel; thick steel or strong materials and rounded shapes distribute stress.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Pressure doubles, since $P \\propto h$: $\\approx 490.5\\ \\text{kPa}$.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) fluid weight pressure (b) 245.25 kPa (c) 122.6 kN (d) must resist large forces (e) doubles to ~490.5 kPa"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u5-pressure-notes",
      title: "Pressure and hydrostatics — notes",
      summary: "P = F/A for solids; P = ρgh for fluids. Pressure rises with depth; Pascal's law underpins hydraulics.",
      sections: [
        { heading: "Key formulas", body: "$P = F/A$ (solid contact), $P = \\rho g h$ (fluid depth), $1\\ \\text{Pa} = 1\\ \\text{N/m}^2$, $1\\ \\text{kPa} = 1000\\ \\text{Pa}$." },
        { heading: "Pressure insight", body: "Same force over smaller area = higher pressure. Same depth in any connected fluid = same pressure." },
        { heading: "Applications", body: "Tyres, brakes, dams, submarines, diving, hydraulic presses all exploit P = F/A and P = ρgh." },
      ],
    },
  ],
};
