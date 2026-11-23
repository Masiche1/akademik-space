import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ech11-u10-lesson-10-2",
  code: "10-2",
  title: "Displacement Reactions and Uses of Metals",
  goal: "I CAN predict displacement reactions between metals and salt solutions and link metal properties to their uses.",
  standards: ["4CH1 2.27", "4CH1 2.28", "4CH1 2.29", "4CH1 2.30"],
  
  vocabulary: [
    { term: "Displacement reaction", definition: "A more reactive metal displaces a less reactive metal from its salt solution." },
    { term: "Salt solution", definition: "A dissolved ionic compound, e.g. copper(II) sulfate solution." },
    { term: "Spectator ions", definition: "Ions that do not take part in a reaction and remain in solution." },
    { term: "Extraction", definition: "Obtaining a metal from its ore; more reactive metals need electrolysis, less reactive can be displaced or heated." },
    { term: "Protective oxide layer", definition: "A thin oxide coating (e.g. on aluminium) that prevents further corrosion." },
  ],
  concepts: [
    {
      id: "ech11-u10-displacement-reactions",
      title: "Displacement reactions",
      skill: "Predict products of metal–salt displacement reactions and explain observations.",
      lesson: {
        sections: [
          {
            heading: "The rule",
            body: "A more reactive metal displaces a less reactive metal from its salt solution:\n\n$$\\text{more reactive metal} + \\text{salt of less reactive metal} \\rightarrow \\text{new salt} + \\text{less reactive metal}$\n\nExample: $\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$. Zinc is above copper in the series, so it displaces copper. The blue colour fades as Cu$^{2+}$ is removed and zinc metal deposits on the zinc.",
          },
          {
            heading: "Observations",
            body: "- The more reactive metal dissolves/disappears gradually.\n- The less reactive metal is deposited as a solid (often a coloured coating).\n- The solution colour may change (e.g. blue CuSO$_4$ → colourless ZnSO$_4$).\n- If the metal is below the salt's metal in the series, **no reaction** occurs.",
          },
          {
            heading: "Uses",
            body: "Displacement is used to **extract metals** from their ores (e.g. iron from iron oxide using carbon/CO — a form of displacement) and to **predict reactivity order**: if metal X displaces metal Y from solution, X is more reactive than Y.",
          },
        ],
        keyFormulas: [
          { name: "Displacement", statement: "more reactive metal + salt solution $\\rightarrow$ new salt + less reactive metal" },
          { name: "Example", statement: "Zn + CuSO$_4$ $\\rightarrow$ ZnSO$_4$ + Cu" },
          { name: "Test", statement: "X displaces Y $Rightarrow$ X more reactive than Y" },
        ],
        workedExample: {
          problem: "An iron nail is placed in copper(II) sulfate solution. Predict the observation and write the equation.",
          solution: "Iron is above copper in the series, so it displaces copper: Fe + CuSO$_4$ $\\rightarrow$ FeSO$_4$ + Cu. The blue colour fades and reddish-brown copper coats the nail; pale green FeSO$_4$ forms.",
        },
      },
      questions: [
        {
          id: "ech11-u10-displacement-reactions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products when zinc is added to copper(II) sulfate solution?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Zinc sulfate and copper"
                    },
                    {
                              "id": "b",
                              "text": "Zinc copper oxide and sulfur"
                    },
                    {
                              "id": "c",
                              "text": "Copper sulfate and zinc"
                    },
                    {
                              "id": "d",
                              "text": "No reaction"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Displacement",
                              "statement": "Zn + CuSO$_4$ $\\rightarrow$ ZnSO$_4$ + Cu"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Zn above Cu displaces it; products are ZnSO$_4$ + Cu.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) zinc sulfate and copper",
          "commonErrors": [
                    "Keeping the same salt — the more reactive metal forms the new salt."
          ]
},
        },
        {
          id: "ech11-u10-displacement-reactions-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Predict the products when iron filings are added to copper(II) sulfate solution, and state whether a reaction occurs.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Displacement",
                              "statement": "Fe + CuSO$_4$ $\\rightarrow$ FeSO$_4$ + Cu"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iron is above copper in the reactivity series, so it displaces copper.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Products: iron(II) sulfate and copper metal.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Fe + CuSO$_4$ $\\rightarrow$ FeSO$_4$ + Cu — reaction occurs.",
          "commonErrors": [
                    "Writing Fe$_2$(SO$_4$)$_3$ — displacement gives Fe$^{2+}$ with sulfate solutions."
          ]
},
        },
        {
          id: "ech11-u10-displacement-reactions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "When zinc is added to blue copper(II) sulfate solution, the blue colour fades and a reddish-brown solid appears. Explain these observations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Displacement observations",
                              "statement": "Cu$^{2+}$ removed → colour fades; Cu metal deposited → brown solid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Zinc displaces copper: Cu$^{2+}$ ions are removed from solution.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The blue colour fades as copper(II) ions are replaced by colourless Zn$^{2+}$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Copper metal is deposited as a reddish-brown solid on the zinc.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Cu$^{2+}$ removed (blue fades); Cu metal deposited (brown solid).",
          "commonErrors": [
                    "Saying the solution turns green — it becomes colourless zinc sulfate."
          ]
},
        },
        {
          id: "ech11-u10-displacement-reactions-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Magnesium ribbon is placed in copper(II) sulfate solution.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict whether a reaction occurs, referring to the reactivity series.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Write a balanced symbol equation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe two observations.",
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
                              "name": "Displacement",
                              "statement": "Mg + CuSO$_4$ $\\rightarrow$ MgSO$_4$ + Cu"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mg is above Cu in the series, so it displaces copper — reaction occurs.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mg + CuSO$_4$ $\\rightarrow$ MgSO$_4$ + Cu.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Blue colour fades; reddish-brown copper deposits; magnesium dissolves; vigorous effervescence possible (H$_2$ if acid present — not here).",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) yes, Mg above Cu (b) Mg + CuSO$_4$ $\\rightarrow$ MgSO$_4$ + Cu (c) blue fades, Cu deposits.",
          "commonErrors": [
                    "Expecting hydrogen gas — no acid is present, so no H$_2$."
          ]
},
        },
        {
          id: "ech11-u10-displacement-reactions-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student tests four combinations: (1) Cu + ZnSO$_4$, (2) Zn + CuSO$_4$, (3) Fe + CuSO$_4$, (4) Ag + CuSO$_4$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict which combinations react and which do not.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write equations for the reactions that occur.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how these results confirm the order Cu < Zn, Fe and Ag < Cu in the series.",
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
                              "name": "Displacement rule",
                              "statement": "Metal displaces only metals below it in the series."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "(2) Zn + CuSO$_4$ and (3) Fe + CuSO$_4$ react; (1) and (4) do not.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Zn + CuSO$_4$ $\\rightarrow$ ZnSO$_4$ + Cu; Fe + CuSO$_4$ $\\rightarrow$ FeSO$_4$ + Cu.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Zn and Fe displace Cu so they are above it; Cu cannot displace Zn or Ag is below Cu so no displacement.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 2,3 react (b) two equations (c) displacement confirms reactivity order.",
          "commonErrors": [
                    "Expecting Cu to displace Zn — Cu is less reactive."
          ]
},
        },
        {
          id: "ech11-u10-displacement-reactions-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Four metals W, X, Y and Z are tested with salt solutions. Results: W displaces X from XSO$_4$ but not Y from YSO$_4$; X displaces Y but not Z; Y displaces Z.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Deduce the reactivity order of W, X, Y, Z.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write the displacement equation for X reacting with YSO$_4$.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Predict whether W reacts with ZSO$_4$ and justify.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how displacement reactions are used in the extraction of metals.",
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
                              "name": "Displacement and reactivity",
                              "statement": "If A displaces B, A is more reactive."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "W > X, X > Y, Y > Z, so order is W > X > Y > Z.",
                              "marks": 3,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "X + YSO$_4$ $\\rightarrow$ XSO$_4$ + Y.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Yes — W > X > Y > Z means W is above Z, so W displaces Z from ZSO$_4$.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Less reactive metals are extracted by heating their oxides with carbon (carbon displaces the metal).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Very reactive metals need electrolysis instead.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) W>X>Y>Z (b) X + YSO$_4$ $\\rightarrow$ XSO$_4$ + Y (c) yes, W above Z (d) carbon displacement for less reactive metals.",
          "commonErrors": [
                    "Reversing the order — the displacing metal is MORE reactive."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u10-uses-of-metals",
      title: "Uses of metals",
      skill: "Link the position and properties of metals in the reactivity series to their uses.",
      lesson: {
        sections: [
          {
            heading: "Choosing a metal",
            body: "The best metal for a job balances **reactivity**, **strength**, **density**, **cost** and **appearance**:\n- **Unreactive metals (Cu, Ag, Au):** resist corrosion — used for pipes, jewellery, electrical contacts.\n- **Aluminium:** light, strong, forms protective oxide — aircraft, cans, overhead cables.\n- **Iron/steel:** strong and cheap but rusts — needs protection (paint, galvanising, stainless steel).\n- **Zinc:** used to protect iron (galvanising) because it is more reactive and corrodes first.",
          },
          {
            heading: "Specific uses",
            body: "- **Copper:** excellent electrical conductor, unreactive — wiring, plumbing.\n- **Gold:** unreactive and attractive — jewellery, electronic contacts.\n- **Titanium:** strong, light, corrosion-resistant — implants, aircraft.\n- **Aluminium alloys:** light and strong — aircraft bodies.",
          },
          {
            heading: "Why unreactive metals are valuable",
            body: "Copper, silver and gold are found as native metals (uncombined) in the Earth because they do not react easily. Their corrosion resistance makes them ideal where long life without maintenance is needed, even though they are expensive.",
          },
        ],
        keyFormulas: [
          { name: "Use = properties", statement: "choose metal by reactivity, strength, density, cost, appearance" },
          { name: "Unreactive metals", statement: "Cu, Ag, Au — corrosion resistant" },
          { name: "Aluminium", statement: "light + protective oxide layer" },
        ],
        workedExample: {
          problem: "Explain why copper is used for electrical wiring and water pipes.",
          solution: "Copper is an excellent electrical conductor, is ductile so can be drawn into wires, is unreactive so does not corrode in water, and is relatively cheap compared with silver or gold.",
        },
      },
      questions: [
        {
          id: "ech11-u10-uses-of-metals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is aluminium used for aircraft bodies rather than iron?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It is cheaper"
                    },
                    {
                              "id": "b",
                              "text": "It is lighter and corrosion-resistant"
                    },
                    {
                              "id": "c",
                              "text": "It conducts electricity better"
                    },
                    {
                              "id": "d",
                              "text": "It is more reactive"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Aluminium properties",
                              "statement": "Low density + protective oxide layer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aluminium is light (low density) and resists corrosion — ideal for aircraft.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) lighter and corrosion-resistant",
          "commonErrors": [
                    "Choosing 'cheaper' — aluminium is more expensive than iron."
          ]
},
        },
        {
          id: "ech11-u10-uses-of-metals-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two uses of copper and explain why it is suitable for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Copper properties",
                              "statement": "Good conductor, ductile, corrosion resistant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Electrical wiring — excellent conductor and ductile.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Water pipes — unreactive/corrosion resistant (or jewellery — attractive, unreactive).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Wiring (conductor); pipes/jewellery (unreactive).",
          "commonErrors": [
                    "Saying copper is used because it is cheap — it is chosen for properties."
          ]
},
        },
        {
          id: "ech11-u10-uses-of-metals-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why gold is used for jewellery even though it is expensive.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Gold properties",
                              "statement": "Very unreactive — does not tarnish or corrode."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gold is at the bottom of the reactivity series — very unreactive.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It does not react with air, water or most acids, so it keeps its appearance.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Its attractive colour and rarity justify the cost for jewellery.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Unreactive → never tarnishes; attractive and rare → worth the cost.",
          "commonErrors": [
                    "Saying gold is used because it is strong — it is actually quite soft."
          ]
},
        },
        {
          id: "ech11-u10-uses-of-metals-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Iron gates are often coated with a layer of zinc (galvanised) or painted.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how galvanising protects iron.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why paint also protects iron.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one disadvantage of each method.",
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
                              "name": "Corrosion protection",
                              "statement": "Barrier or sacrificial protection."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Zinc is more reactive than iron and oxidises first, protecting the iron (sacrificial).",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Paint forms a barrier stopping oxygen and water reaching the iron.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Zinc layer can be scratched/worn; paint chips and needs repainting.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Zn sacrificial (b) paint barrier (c) both can be damaged.",
          "commonErrors": [
                    "Saying zinc 'seals' iron like paint — it works sacrificially by corroding first."
          ]
},
        },
        {
          id: "ech11-u10-uses-of-metals-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A manufacturer must choose a metal for three products: a saucepan, a coin, and a chemical storage tank.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest a suitable metal for each and give one reason.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how reactivity affects the choice for the storage tank.",
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
                              "name": "Choosing metals",
                              "statement": "Match properties to use."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Saucepan: stainless steel (strong, corrosion resistant, conducts heat).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Coin: copper/nickel alloy or stainless steel (hard, unreactive, cheap).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Storage tank: stainless steel or plastic-coated metal (resists corrosion).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reactive metals corrode in contact with water/air/acids.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "An unreactive or protected metal is needed so the tank does not dissolve or contaminate contents.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reactivity series guides choice — lower reactivity or protective coating.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) steel/copper alloy/steel (b) unreactive or protected metal needed.",
          "commonErrors": [
                    "Choosing a very reactive metal like sodium for any of these — obviously unsuitable."
          ]
},
        },
        {
          id: "ech11-u10-uses-of-metals-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "An engineer is choosing a material for a suspension bridge in a coastal (salty, wet) environment.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List four properties the metal must have.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Compare mild steel, stainless steel and aluminium for this use.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Recommend a material and justify your choice.",
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
                              "name": "Material selection",
                              "statement": "Strength, corrosion resistance, cost, weight."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Any two of: high strength, corrosion resistance, reasonable cost, durability.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mild steel: strong and cheap but rusts in salty air — needs heavy protection.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Stainless steel: strong and very corrosion resistant but expensive.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Aluminium: light and corrosion resistant but less strong — needs larger sections.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "All can work with appropriate design/protection.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Recommend stainless steel (or protected steel) for strength + corrosion resistance.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Justify: coastal salt accelerates rust; long lifespan justifies higher cost.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) strength, corrosion resistance, cost, durability (b) steel cheap/rusts, stainless strong/resistant, Al light/weaker (c) stainless steel justified.",
          "commonErrors": [
                    "Choosing mild steel without protection — will rust quickly in salt air."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u10-displacement-uses-notes",
      title: "Displacement and uses — notes",
      summary: "More reactive metal displaces less reactive from salt solution. Uses match properties: Cu unreactive for wiring/pipes, Al light for aircraft, Zn protects iron.",
      sections: [
        { heading: "Displacement rule", body: "A + salt of B → reaction only if A is above B in series. New salt contains the MORE reactive metal." },
        { heading: "Observations", body: "Blue fades (Cu$^{2+}$ removed), reddish-brown Cu deposits, metal dissolves. No reaction if metal below salt metal." },
        { heading: "Uses logic", body: "Unreactive (Cu/Ag/Au): pipes, jewellery, contacts. Al: light aircraft. Steel: strong structures (needs protection). Zn: sacrificial coating." },
      ],
    },
  ],
};
