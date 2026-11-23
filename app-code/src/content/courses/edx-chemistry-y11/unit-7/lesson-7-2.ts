import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ech11-u7-lesson-7-2",
  code: "7-2",
  title: "Hydrogen and Fuel Cells",
  goal: "I CAN describe how hydrogen is produced, explain why it is a clean fuel and outline how hydrogen-oxygen fuel cells generate electricity.",
  standards: ["4CH1 1.51", "4CH1 2.31", "4CH1 3.23", "4CH1 4.19"],
  
  vocabulary: [
    { term: "Hydrogen fuel", definition: "Hydrogen gas used as an energy carrier; burns to form only water." },
    { term: "Electrolysis of water", definition: "Using electricity to split water into hydrogen and oxygen: $2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$." },
    { term: "Steam reforming", definition: "Industrial production of hydrogen by reacting methane with steam, producing CO$_2$ as a by-product." },
    { term: "Fuel cell", definition: "A device that converts the chemical energy of a fuel directly into electrical energy without burning." },
    { term: "Green hydrogen", definition: "Hydrogen produced by electrolysis using renewable electricity, giving near-zero lifecycle emissions." },
    { term: "Grey hydrogen", definition: "Hydrogen produced from fossil fuels (e.g. steam reforming of methane), which emits CO$_2$." },
  ],
  concepts: [
    {
      id: "ech11-u7-hydrogen-fuel",
      title: "Hydrogen as a fuel",
      skill: "Describe methods of producing hydrogen, explain its advantages and disadvantages as a fuel and distinguish green from grey hydrogen.",
      lesson: {
        sections: [
          {
            heading: "Producing hydrogen",
            body: "- **Electrolysis of water:** $2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$ — needs electricity; if the electricity is renewable the hydrogen is **green**.\n- **Steam reforming of methane:** $\\text{CH}_4 + \\text{H}_2\\text{O} \\rightarrow \\text{CO} + 3\\text{H}_2$ — cheap and common but emits CO$_2$ (**grey** hydrogen).\n- Other sources: coal gasification, biomass gasification, and as a by-product of chemical industries.",
          },
          {
            heading: "Hydrogen as a fuel",
            body: "Hydrogen burns: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ — the only product is water, so there are no CO$_2$, CO, SO$_2$ or particulate emissions at the point of use. It has a very high energy content per gram and is the lightest element.\n\nProblems: hydrogen gas is hard to store (it must be compressed to high pressure or liquefied at very low temperature), transport infrastructure is limited, and 'grey' hydrogen production still emits CO$_2$.",
          },
          {
            heading: "Green versus grey hydrogen",
            body: "Whether hydrogen is sustainable depends on how it is made. **Green hydrogen** uses renewable electricity for electrolysis — near-zero lifecycle emissions but currently expensive. **Grey hydrogen** from methane reforming is cheap but emits CO$_2$ and is not a long-term solution unless the CO$_2$ is captured and stored.",
          },
        ],
        keyFormulas: [
          { name: "Electrolysis", statement: "$2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$" },
          { name: "Combustion", statement: "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$" },
          { name: "Steam reforming", statement: "$\\text{CH}_4 + \\text{H}_2\\text{O} \\rightarrow \\text{CO} + 3\\text{H}_2$" },
        ],
        workedExample: {
          problem: "A company wants to produce hydrogen for buses. Compare electrolysis using wind power with steam reforming of methane, considering cost and emissions.",
          solution: "Electrolysis with wind power gives green hydrogen with near-zero emissions, but electrolysers and storage are expensive and the hydrogen must be compressed. Steam reforming is cheaper and produces hydrogen at scale but releases CO$_2$ — grey hydrogen. For climate goals, green hydrogen is preferable if the extra cost is acceptable.",
        },
      },
      questions: [
        {
          id: "ech11-u7-hydrogen-fuel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the only product when hydrogen burns in oxygen?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carbon dioxide"
                    },
                    {
                              "id": "b",
                              "text": "Water"
                    },
                    {
                              "id": "c",
                              "text": "Carbon monoxide"
                    },
                    {
                              "id": "d",
                              "text": "Soot"
                    }
          ],
          "correctChoiceId": "b"
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
                              "reasoning": "Hydrogen contains no carbon, so only water forms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Water",
          "commonErrors": [
                    "Choosing carbon dioxide — hydrogen has no carbon atoms."
          ]
},
        },
        {
          id: "ech11-u7-hydrogen-fuel-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two methods used to produce hydrogen industrially.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hydrogen production",
                              "statement": "Electrolysis of water and steam reforming of methane are the main methods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two of: electrolysis of water, steam reforming of methane, coal/biomass gasification, industrial by-product.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Electrolysis of water; steam reforming of methane (or other valid pair).",
          "commonErrors": [
                    "Saying hydrogen is 'mined' — it must be produced from compounds."
          ]
},
        },
        {
          id: "ech11-u7-hydrogen-fuel-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the electrolysis of water, $2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$. Calculate the mass of hydrogen produced from 36 g of water. ($A_r$: H = 1, O = 16)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "mass of H$_2$",
                              "answer": 4,
                              "unit": "g"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Electrolysis of water",
                              "statement": "$2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "36 g water = 2 mol H$_2$O ($M_r$ = 18), giving 2 mol H$_2$ = 4 g.",
                              "working": "36/18 = 2\\ \\mathrm{mol}\\ \\mathrm{H_2O};\\ 2\\ \\mathrm{mol}\\ \\mathrm{H_2} = 2 \\times 2 = 4\\ \\mathrm{g}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer 4 g.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4 g",
          "commonErrors": [
                    "Answering 2 g — 2 mol H$_2$O gives 2 mol H$_2$, and each mol H$_2$ is 2 g."
          ]
},
        },
        {
          id: "ech11-u7-hydrogen-fuel-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Hydrogen is proposed as a replacement for petrol in cars.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the equations for producing hydrogen by electrolysis and by steam reforming.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why hydrogen is called a 'clean' fuel when it is burned.",
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
                              "name": "Hydrogen reactions",
                              "statement": "Electrolysis: $2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$; combustion: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$ (electrolysis).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$\\text{CH}_4 + \\text{H}_2\\text{O} \\rightarrow \\text{CO} + 3\\text{H}_2$ (steam reforming).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Combustion of hydrogen produces only water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "No CO$_2$, CO, SO$_2$, NO$_x$ or particulates are released at the point of use.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "So tailpipe emissions are clean — though production method still matters.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) electrolysis + reforming equations (b) only water produced on burning.",
          "commonErrors": [
                    "Ignoring production emissions — 'clean' refers to point-of-use combustion."
          ]
},
        },
        {
          id: "ech11-u7-hydrogen-fuel-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Hydrogen cars are being developed.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two practical problems with storing and transporting hydrogen.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why steam-reformed hydrogen is not a long-term climate solution on its own.",
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
                              "name": "Hydrogen storage",
                              "statement": "H$_2$ must be compressed to high pressure or liquefied at very low temperature."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Hydrogen gas has very low density — huge volumes are needed unless compressed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Compression to 350–700 atm or liquefaction at -253 °C is costly and needs special tanks.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Few refuelling stations exist, limiting uptake.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Steam reforming uses methane, a fossil fuel, and emits CO$_2$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The CO$_2$ released in production outweighs the clean burning benefit unless captured.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Only green hydrogen (renewable electrolysis) is truly low-carbon.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) low density → compression/liquefaction costs; few stations (b) reforming emits CO$_2$.",
          "commonErrors": [
                    "Treating all hydrogen as clean — grey hydrogen still emits CO$_2$ upstream."
          ]
},
        },
        {
          id: "ech11-u7-hydrogen-fuel-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A government must choose how to produce hydrogen for a new fuel-cell bus network.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare electrolysis of water and steam reforming of methane as production methods.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Evaluate hydrogen fuel-cell buses against battery-electric buses.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Green vs grey hydrogen",
                              "statement": "Electrolysis + renewables = green; methane reforming = grey with CO$_2$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Electrolysis: $2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$; emissions depend on electricity source.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Renewable-powered electrolysis gives green hydrogen with near-zero emissions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Steam reforming is cheaper and established but emits CO$_2$ — grey hydrogen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Electrolysis currently costs more but is the only truly low-carbon route at scale.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fuel-cell buses: fast refuelling, long range, but need hydrogen supply and costly storage.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Battery buses: simpler, quieter, use existing grid but need long charging and heavy batteries.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both produce zero tailpipe emissions; lifecycle depends on how H$_2$/electricity is made.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Battery electric is more efficient end-to-end; hydrogen suits heavier/longer routes.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "A justified recommendation weighing cost, range and infrastructure is required.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) electrolysis=green/costly; reforming=grey/cheap (b) H$_2$ fast refuel vs battery efficient/charging — justified choice.",
          "commonErrors": [
                    "Comparing only tailpipe emissions — lifecycle of hydrogen production is decisive."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u7-fuel-cells",
      title: "Fuel cells and electrochemical energy",
      skill: "Explain how a hydrogen-oxygen fuel cell generates electricity, compare it with combustion and evaluate its uses.",
      lesson: {
        sections: [
          {
            heading: "How a fuel cell works",
            body: "A **fuel cell** converts chemical energy directly into electrical energy — no burning, no combustion. In a **hydrogen-oxygen fuel cell**:\n\n- Hydrogen gas enters the **anode**, where it is oxidised: $\\text{H}_2 \\rightarrow 2\\text{H}^+ + 2\\text{e}^-$\n- Electrons flow through an external circuit — this is the **electric current** that powers the device.\n- At the **cathode**, oxygen combines with the electrons and H$^+$ ions to form water: $\\text{O}_2 + 4\\text{H}^+ + 4\\text{e}^- \\rightarrow 2\\text{H}_2\\text{O}$\n\nOverall: $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ + electrical energy. Only water is produced.",
          },
          {
            heading: "Fuel cell versus combustion",
            body: "In a combustion engine, fuel burns and heat is converted to motion via several steps — most energy is lost as heat. A fuel cell converts chemical energy to electricity directly, so it is **more efficient** (often 40–60% versus ~20% for an engine). It produces no pollutants at the point of use and runs quietly.",
          },
          {
            heading: "Uses and limitations",
            body: "Fuel cells power spacecraft, submarines, some buses and cars, and backup generators. Limitations: hydrogen must be produced and stored (costly), platinum catalysts are expensive, and the overall efficiency depends on how the hydrogen was made — a fuel cell running on grey hydrogen still has lifecycle CO$_2$ emissions.",
          },
        ],
        keyFormulas: [
          { name: "Fuel cell overall", statement: "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ + electrical energy" },
          { name: "Anode", statement: "$\\text{H}_2 \\rightarrow 2\\text{H}^+ + 2\\text{e}^-$" },
          { name: "Cathode", statement: "$\\text{O}_2 + 4\\text{H}^+ + 4\\text{e}^- \\rightarrow 2\\text{H}_2\\text{O}$" },
          { name: "Efficiency", statement: "fuel cell ~40–60% vs internal combustion ~20%" },
        ],
        workedExample: {
          problem: "Explain, using electrode processes, how a hydrogen-oxygen fuel cell produces electricity and water.",
          solution: "At the anode hydrogen is oxidised to H$^+$ ions and electrons. The electrons flow through the external circuit (useful current) to the cathode. At the cathode oxygen, H$^+$ ions and electrons combine to form water. The overall reaction is $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ plus electrical energy.",
        },
      },
      questions: [
        {
          id: "ech11-u7-fuel-cells-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What energy change occurs in a hydrogen-oxygen fuel cell?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Chemical to thermal only"
                    },
                    {
                              "id": "b",
                              "text": "Chemical to electrical"
                    },
                    {
                              "id": "c",
                              "text": "Electrical to chemical"
                    },
                    {
                              "id": "d",
                              "text": "Thermal to mechanical"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fuel cell",
                              "statement": "Converts chemical energy of a fuel directly into electrical energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A fuel cell produces electricity directly from the fuel's chemical energy.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Chemical to electrical",
          "commonErrors": [
                    "Choosing 'chemical to thermal' — combustion gives heat; fuel cells give electricity."
          ]
},
        },
        {
          id: "ech11-u7-fuel-cells-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the overall reaction that takes place in a hydrogen-oxygen fuel cell.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Fuel cell overall",
                              "statement": "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ plus electrical energy.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ + electricity",
          "commonErrors": [
                    "Writing the combustion products wrong — only water forms."
          ]
},
        },
        {
          id: "ech11-u7-fuel-cells-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two advantages of a fuel cell over an internal combustion engine burning the same fuel.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fuel cell efficiency",
                              "statement": "Direct chemical→electrical conversion avoids combustion losses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher efficiency — no energy lost as waste heat through a combustion/heat-engine cycle.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "No pollutants at point of use (only water) and quiet operation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Fewer moving parts → lower maintenance.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Higher efficiency; no exhaust pollutants; quiet/fewer moving parts.",
          "commonErrors": [
                    "Saying fuel cells are 100% efficient — they still lose energy as heat."
          ]
},
        },
        {
          id: "ech11-u7-fuel-cells-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "In a hydrogen-oxygen fuel cell, hydrogen is supplied to the anode and oxygen to the cathode.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the half-equations at the anode and cathode.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what happens to the electrons produced at the anode.",
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
                              "name": "Fuel cell electrodes",
                              "statement": "Anode: $\\text{H}_2 \\rightarrow 2\\text{H}^+ + 2\\text{e}^-$; cathode: $\\text{O}_2 + 4\\text{H}^+ + 4\\text{e}^- \\rightarrow 2\\text{H}_2\\text{O}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Anode: $\\text{H}_2 \\rightarrow 2\\text{H}^+ + 2\\text{e}^-$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Cathode: $\\text{O}_2 + 4\\text{H}^+ + 4\\text{e}^- \\rightarrow 2\\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both half-equations are balanced for atoms and charge.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Electrons flow through the external circuit to the cathode.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This flow is the electric current that does useful work.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) anode H$_2$→2H$^+$+2e$^-$; cathode O$_2$+4H$^+$+4e$^-$→2H$_2$O (b) e$^-$ flow through circuit = current.",
          "commonErrors": [
                    "Swapping the half-equations — hydrogen is oxidised at the anode."
          ]
},
        },
        {
          id: "ech11-u7-fuel-cells-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Fuel cells are used in spacecraft, submarines and some vehicles.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two applications of fuel cells and explain why they suit each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "State two limitations of fuel cells.",
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
                              "name": "Fuel cell applications",
                              "statement": "Used where clean, quiet, reliable power is needed."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Spacecraft/submarines: fuel cells give power plus pure water as a by-product — valuable where water is scarce.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Vehicles/backup power: zero local emissions, quiet, efficient.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hydrogen must be produced and stored — costly infrastructure.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Precious-metal catalysts (platinum) are expensive and the cell lifetime is limited.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) spacecraft (water by-product), vehicles (clean/quiet) (b) H$_2$ supply cost, catalyst cost.",
          "commonErrors": [
                    "Listing combustion-engine advantages — fuel cells' benefits are cleanliness and efficiency."
          ]
},
        },
        {
          id: "ech11-u7-fuel-cells-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A car manufacturer compares hydrogen fuel-cell cars with petrol cars.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how a hydrogen fuel cell produces electricity, including the role of the electrodes.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Compare fuel-cell cars with petrol cars on emissions and efficiency.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether fuel-cell cars are likely to replace petrol cars in the next 20 years.",
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
                              "name": "Fuel cell operation",
                              "statement": "H$_2$ oxidised at anode, O$_2$ reduced at cathode, electrons flow through circuit."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Hydrogen enters the anode and is oxidised to H$^+$ and electrons.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Electrons flow through the external circuit powering the motor.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Oxygen enters the cathode where it reacts with H$^+$ and electrons to form water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Overall $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ + electricity.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fuel cell: only water at tailpipe, ~40–60% efficient; petrol: CO$_2$, NO$_x$, particulates, ~20–30% efficient.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lifecycle emissions depend on hydrogen production (green vs grey).",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Depends on cost of green hydrogen, refuelling infrastructure and battery progress.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Battery electrics are currently cheaper and simpler; hydrogen may suit heavy/long-range uses.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "A justified conclusion weighing costs, infrastructure and emissions is needed.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) anode/cathode processes (b) clean+efficient vs petrol emissions (c) justified evaluation.",
          "commonErrors": [
                    "Claiming fuel cells are emission-free overall — depends on hydrogen source."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u7-hydrogen-fuelcells-notes",
      title: "Hydrogen and fuel cells — notes",
      summary: "H$_2$ made by electrolysis (green) or steam reforming (grey). Fuel cells convert H$_2$ + O$_2$ → H$_2$O + electricity directly; only water produced.",
      sections: [
        { heading: "Production", body: "Electrolysis: $2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2 + \\text{O}_2$ (green if renewable). Steam reforming: $\\text{CH}_4 + \\text{H}_2\\text{O} \\rightarrow \\text{CO} + 3\\text{H}_2$ (grey, emits CO$_2$)." },
        { heading: "Fuel cell", body: "Anode: H$_2$ → 2H$^+$ + 2e$^-$. Cathode: O$_2$ + 4H$^+$ + 4e$^-$ → 2H$_2$O. Electrons through circuit = current." },
        { heading: "Trade-offs", body: "Clean at point of use, efficient, quiet — but H$_2$ storage/production and catalyst costs are barriers. Lifecycle emissions depend on source." },
      ],
    },
  ],
};
