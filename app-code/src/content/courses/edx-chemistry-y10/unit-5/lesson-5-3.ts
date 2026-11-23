import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ech10-u5-lesson-5-3",
  code: "5-3",
  title: "Electrolysis",
  goal: "I CAN explain how electrolysis works, write half-equations at electrodes and predict the products of electrolysing molten and aqueous ionic compounds, including industrial uses.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Physical Chemistry", "4CH1 electrolysis"],
  
  vocabulary: [
    { term: "Electrolysis", definition: "The use of electricity to drive a non-spontaneous chemical reaction." },
    { term: "Electrolyte", definition: "A molten ionic compound or aqueous solution containing free-moving ions." },
    { term: "Electrode", definition: "A conductor through which current enters or leaves the electrolyte." },
    { term: "Anode", definition: "The positive electrode where oxidation occurs." },
    { term: "Cathode", definition: "The negative electrode where reduction occurs." },
    { term: "Half-equation", definition: "An equation showing the change at one electrode, including electron transfer." },
    { term: "Electroplating", definition: "Using electrolysis to deposit a thin layer of metal onto an object." },
  ],
  concepts: [
    {
      id: "ech10-u5-electrolysis-basics",
      title: "How electrolysis works",
      skill: "Describe electrode processes and predict products of electrolysis of molten and aqueous ionic compounds.",
      lesson: {
        sections: [
          {
            heading: "The process",
            body: "An **electrolyte** (molten ionic compound or aqueous solution) contains free-moving ions. When a DC supply is connected, the **cathode** (negative) attracts positive ions (cations) which are **reduced** (gain electrons); the **anode** (positive) attracts negative ions (anions) which are **oxidised** (lose electrons). Solid ionic compounds do not conduct because their ions cannot move.",
          },
          {
            heading: "Predicting products",
            body: "In a **molten** ionic compound, only the ions of that compound are present, so products are predictable: e.g. molten NaCl gives sodium at the cathode and chlorine at the anode. In an **aqueous** solution, water also supplies H⁺ and OH⁻, so competition occurs — the less reactive metal ions and OH⁻/water are often discharged instead. Example: electrolysis of aqueous copper(II) sulfate deposits copper at the cathode and releases oxygen at the anode.",
          },
        ],
        keyFormulas: [
          { name: "Cathode", statement: "negative electrode; cations gain electrons (reduction)" },
          { name: "Anode", statement: "positive electrode; anions lose electrons (oxidation)" },
          { name: "Half-equation example", statement: "2Cl⁻ → Cl₂ + 2e⁻ (oxidation at anode)" },
        ],
        workedExample: {
          problem: "Describe the products when molten lead(II) bromide is electrolysed.",
          solution: "Pb²⁺ ions move to the cathode and are reduced to lead metal: Pb²⁺ + 2e⁻ → Pb. Br⁻ ions move to the anode and are oxidised to bromine gas: 2Br⁻ → Br₂ + 2e⁻.",
        },
      },
      questions: [
        {
          id: "ech10-u5-electrolysis-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In electrolysis, oxidation occurs at the…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cathode"
                    },
                    {
                              "id": "b",
                              "text": "anode"
                    },
                    {
                              "id": "c",
                              "text": "positive terminal of the cell only"
                    },
                    {
                              "id": "d",
                              "text": "electrolyte surface"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Anode",
                              "statement": "Positive electrode where oxidation (loss of electrons) occurs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Anions are oxidised at the anode; cations are reduced at the cathode.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) anode",
          "commonErrors": [
                    "Swapping anode and cathode — remember 'anode = oxidation'."
          ]
},
        },
        {
          id: "ech10-u5-electrolysis-basics-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define an electrolyte and state the two forms it can take.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Electrolyte",
                              "statement": "A substance containing free-moving ions that conducts electricity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It is a molten ionic compound or an aqueous solution of an ionic compound.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The ions must be free to move for current to flow.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Molten ionic compound or aqueous ionic solution with mobile ions.",
          "commonErrors": [
                    "Listing solid ionic compounds — ions cannot move in the solid state."
          ]
},
        },
        {
          id: "ech10-u5-electrolysis-basics-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why molten sodium chloride conducts electricity but solid sodium chloride does not.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Ionic conduction",
                              "statement": "Current flows when ions are mobile."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In the solid, ions are held in fixed positions in the lattice.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "In the melt, the lattice breaks down and Na⁺ and Cl⁻ ions are free to move.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Moving ions carry charge, so the molten compound conducts.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Solid ions are fixed; molten ions move and carry current.",
          "commonErrors": [
                    "Saying the solid 'has no ions' — it has ions but they cannot move."
          ]
},
        },
        {
          id: "ech10-u5-electrolysis-basics-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Molten sodium chloride is electrolysed using inert graphite electrodes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the half-equation for the reaction at the cathode.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write the half-equation for the reaction at the anode.",
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
                              "name": "Half-equations",
                              "statement": "Balance atoms and charge; show electron transfer."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Na⁺ ions are reduced at the cathode: Na⁺ + e⁻ → Na.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cl⁻ ions are oxidised at the anode: 2Cl⁻ → Cl₂ + 2e⁻.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Atoms and charge are balanced (2 negative charges on each side).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) Na⁺ + e⁻ → Na (b) 2Cl⁻ → Cl₂ + 2e⁻",
          "commonErrors": [
                    "Writing Cl⁻ → Cl₂ without the coefficient 2 and electrons."
          ]
},
        },
        {
          id: "ech10-u5-electrolysis-basics-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Aqueous copper(II) sulfate solution is electrolysed using inert platinum electrodes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State and explain the product at the cathode.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State and explain the product at the anode.",
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
                              "name": "Aqueous electrolysis",
                              "statement": "Water supplies competing H⁺ and OH⁻ ions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Copper metal is deposited at the cathode.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Cu²⁺ is below hydrogen in the reactivity series, so it is preferentially discharged over H⁺.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Half-equation: Cu²⁺ + 2e⁻ → Cu.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Oxygen gas is released at the anode.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "OH⁻ from water is discharged in preference to sulfate, which is not easily oxidised.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Half-equation: 4OH⁻ → O₂ + 2H₂O + 4e⁻ (or 2H₂O → O₂ + 4H⁺ + 4e⁻).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) Cu deposited — Cu²⁺ reduced preferentially (b) O₂ at anode from water/OH⁻ oxidation.",
          "commonErrors": [
                    "Predicting H₂ at the cathode — Cu²⁺ is discharged first because copper is less reactive than hydrogen."
          ]
},
        },
        {
          id: "ech10-u5-electrolysis-basics-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Concentrated aqueous sodium chloride (brine) is electrolysed in a diaphragm cell with inert electrodes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List the ions present in the electrolyte.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Predict the product at the cathode and give the half-equation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why chlorine, not oxygen, is produced at the anode.",
                    "marks": 4
          },
          {
                    "label": "d",
                    "prompt": "Name all three products of the electrolysis and state one use of each.",
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
                              "name": "Brine electrolysis",
                              "statement": "Na⁺, Cl⁻, H⁺, OH⁻ compete at electrodes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Na⁺, Cl⁻ from sodium chloride plus H⁺ and OH⁻ from water.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hydrogen is produced: 2H⁺ + 2e⁻ → H₂ (or 2H₂O + 2e⁻ → H₂ + 2OH⁻).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "At the anode, Cl⁻ is discharged in preference to OH⁻.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Concentrated chloride means Cl⁻ is much more abundant than OH⁻.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Half-equation: 2Cl⁻ → Cl₂ + 2e⁻.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "The remaining solution becomes alkaline as NaOH forms in the cathode region.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Products: chlorine (water treatment), hydrogen (fuel/ammonia), sodium hydroxide (soap/chemicals).",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Na⁺, Cl⁻, H⁺, OH⁻ (b) H₂ at cathode (c) concentrated Cl⁻ discharged preferentially → Cl₂ (d) Cl₂, H₂, NaOH and their uses.",
          "commonErrors": [
                    "Predicting O₂ at the anode — concentrated Cl⁻ is discharged preferentially."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u5-electrolysis-uses",
      title: "Uses of electrolysis",
      skill: "Explain industrial applications of electrolysis including aluminium extraction, electrorefining, electroplating and brine products.",
      lesson: {
        sections: [
          {
            heading: "Industrial processes",
            body: "**Aluminium extraction**: aluminium oxide is electrolysed in molten cryolite; aluminium forms at the cathode and oxygen at the anode. **Electrorefining**: impure copper is the anode, pure copper the cathode; copper dissolves and re-deposits pure. **Brine electrolysis** gives chlorine, hydrogen and sodium hydroxide. **Electroplating** coats objects (cutlery, car parts) with a thin layer of metal such as silver or chromium for appearance and protection.",
          },
          {
            heading: "Why electrolysis is needed",
            body: "Electrolysis is used when a metal is **more reactive than carbon**, so it cannot be extracted by reduction with carbon — e.g. aluminium and sodium. It is also used for **purification** and **coating**, where precise control of the metal deposited is needed. Electrolysis is energy-intensive, so cheaper methods (blast furnace for iron) are preferred where possible.",
          },
        ],
        keyFormulas: [
          { name: "Electrolysis vs carbon reduction", statement: "metals above carbon in reactivity series need electrolysis" },
          { name: "Electrorefining", statement: "impure anode dissolves; pure metal deposits at cathode" },
        ],
        workedExample: {
          problem: "Why is aluminium extracted by electrolysis rather than by heating its oxide with carbon?",
          solution: "Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide. Electrolysis of molten aluminium oxide (in cryolite) provides the energy needed to reduce Al³⁺ to aluminium metal.",
        },
      },
      questions: [
        {
          id: "ech10-u5-electrolysis-uses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Electroplating uses electrolysis to…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "remove all metal from an object"
                    },
                    {
                              "id": "b",
                              "text": "deposit a thin layer of one metal onto another"
                    },
                    {
                              "id": "c",
                              "text": "make an object magnetic"
                    },
                    {
                              "id": "d",
                              "text": "dissolve the electrolyte completely"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Electroplating",
                              "statement": "Depositing a metal coating via electrolysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The object is the cathode; metal ions plate onto it.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) deposit a thin layer of one metal onto another",
          "commonErrors": [
                    "Confusing electroplating with electrorefining — plating coats an object."
          ]
},
        },
        {
          id: "ech10-u5-electrolysis-uses-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State why aluminium is extracted by electrolysis rather than by reduction with carbon.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Extraction method",
                              "statement": "Metals above carbon need electrolysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aluminium is more reactive than carbon.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Carbon cannot reduce aluminium oxide, so electrolysis is required.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Aluminium is above carbon in the reactivity series; only electrolysis can reduce its oxide.",
          "commonErrors": [
                    "Saying aluminium is 'too expensive' — the reason is its high reactivity."
          ]
},
        },
        {
          id: "ech10-u5-electrolysis-uses-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how electrolysis is used to purify impure copper.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Electrorefining",
                              "statement": "Impure anode dissolves; pure copper deposits at cathode."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impure copper is used as the anode and pure copper as the cathode in copper(II) sulfate solution.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Copper dissolves from the anode into solution as Cu²⁺.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Pure copper deposits on the cathode; impurities fall as anode sludge.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Anode dissolves Cu²⁺; pure Cu plates at cathode; impurities drop as sludge.",
          "commonErrors": [
                    "Mixing up anode and cathode roles in electrorefining."
          ]
},
        },
        {
          id: "ech10-u5-electrolysis-uses-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Brine (concentrated aqueous sodium chloride) is electrolysed industrially.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the three products formed.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State one use for each product.",
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
                              "name": "Brine electrolysis",
                              "statement": "Produces chlorine, hydrogen and sodium hydroxide."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Chlorine at the anode, hydrogen at the cathode, and sodium hydroxide remains in solution.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Any valid uses, e.g. chlorine for water treatment, hydrogen as fuel, NaOH for soap manufacture.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Cl₂, H₂, NaOH (b) water treatment / fuel / soap etc.",
          "commonErrors": [
                    "Omitting NaOH — it forms in solution rather than at an electrode."
          ]
},
        },
        {
          id: "ech10-u5-electrolysis-uses-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A jeweller wants to electroplate a steel spoon with a thin layer of silver.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which electrode the spoon should be connected to and why.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the electrolyte that should be used.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State what the silver electrode should be made of and why.",
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
                              "name": "Electroplating setup",
                              "statement": "Object = cathode; metal-ion electrolyte; sacrificial anode."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The spoon is the cathode (negative) so Ag⁺ ions are attracted and reduced onto its surface.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A solution containing silver ions, e.g. silver nitrate.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "A silver anode, so silver dissolves to replace the ions plated, keeping concentration constant.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) cathode — Ag⁺ reduced onto it (b) AgNO₃ solution (c) silver anode — replenishes Ag⁺.",
          "commonErrors": [
                    "Connecting the spoon to the anode — metal only deposits at the cathode."
          ]
},
        },
        {
          id: "ech10-u5-electrolysis-uses-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Aluminium is extracted by electrolysis of aluminium oxide dissolved in molten cryolite.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the half-equation for the formation of aluminium.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the product at the anode and the half-equation for its formation.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why cryolite is added to the aluminium oxide.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "State one environmental or energy-related problem with this process.",
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
                              "name": "Aluminium electrolysis",
                              "statement": "Al³⁺ + 3e⁻ → Al at cathode; oxide oxidised at anode; cryolite lowers melting point."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Al³⁺ + 3e⁻ → Al.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Oxygen is formed at the anode.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "2O²⁻ → O₂ + 4e⁻ (or 2O²⁻ − 4e⁻ → O₂).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pure aluminium oxide has a very high melting point (~2000 °C).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cryolite lowers the melting point so less energy is needed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The electrolyte can then be kept molten at a much lower temperature.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Uses very large amounts of electricity, so CO₂ may be produced if fossil fuels generate it; carbon anodes are consumed forming CO₂.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Al³⁺ + 3e⁻ → Al (b) O₂ at anode (c) cryolite lowers mp, saving energy (d) high electricity use / CO₂ from carbon anodes.",
          "commonErrors": [
                    "Saying cryolite 'reacts' with the oxide — it lowers the melting point."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u5-electrolysis-notes",
      title: "Electrolysis — notes",
      summary: "Cathode = reduction, anode = oxidation. Molten compounds give predictable products; aqueous solutions involve H⁺/OH⁻ competition. Uses: aluminium extraction, electrorefining, electroplating, brine products.",
      sections: [
        { heading: "Electrode rules", body: "Negative cathode attracts cations → reduction (gain e⁻). Positive anode attracts anions → oxidation (lose e⁻). Solid ionic compounds do not conduct — ions must be mobile." },
        { heading: "Molten vs aqueous", body: "Molten: only the compound's ions react. Aqueous: H⁺ and OH⁻ from water compete — H₂ at cathode if metal is above H, O₂ at anode if halides absent or dilute." },
        { heading: "Industrial uses", body: "Aluminium (Al is above carbon → needs electrolysis; cryolite lowers mp). Electrorefining copper. Electroplating = object as cathode + sacrificial metal anode. Brine → Cl₂ + H₂ + NaOH." },
      ],
    },
  ],
};
