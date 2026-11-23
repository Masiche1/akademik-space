import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ech10-u5-lesson-5-2",
  code: "5-2",
  title: "Energy Changes and Reversible Reactions",
  goal: "I CAN distinguish exothermic and endothermic reactions using energy level diagrams, and explain reversible reactions and dynamic equilibrium qualitatively.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Physical Chemistry", "4CH1 energy changes"],
  
  vocabulary: [
    { term: "Exothermic reaction", definition: "A reaction that releases energy to the surroundings, often as heat." },
    { term: "Endothermic reaction", definition: "A reaction that absorbs energy from the surroundings." },
    { term: "Energy level diagram", definition: "A graph showing relative energy of reactants and products with the activation-energy peak." },
    { term: "Reversible reaction", definition: "A reaction that can proceed in both directions." },
    { term: "Dynamic equilibrium", definition: "The state in a reversible reaction where forward and reverse rates are equal and concentrations stay constant." },
    { term: "Le Chatelier's principle", definition: "If a system at equilibrium is disturbed, it shifts to oppose the change." },
  ],
  concepts: [
    {
      id: "ech10-u5-energy-changes",
      title: "Exothermic and endothermic reactions",
      skill: "Classify reactions by energy change and interpret energy level diagrams.",
      lesson: {
        sections: [
          {
            heading: "Exothermic and endothermic",
            body: "In an **exothermic** reaction energy is released to the surroundings — the products have **less** energy than the reactants, so ΔH is negative. Examples: combustion, respiration, neutralisation. In an **endothermic** reaction energy is absorbed — the products have **more** energy than the reactants, so ΔH is positive. Examples: thermal decomposition of calcium carbonate, photosynthesis, electrolysis.",
          },
          {
            heading: "Energy level diagrams and bond energies",
            body: "An **energy level diagram** plots energy against reaction progress. Reactants sit at one level, products at another, and a peak between them is the activated complex. The gap reactants → peak is the **activation energy**; the gap reactants → products is **ΔH**. Breaking bonds **absorbs** energy; forming bonds **releases** energy. If energy released exceeds energy absorbed the reaction is exothermic, and vice versa.",
          },
        ],
        keyFormulas: [
          { name: "Exothermic", statement: "products lower in energy than reactants; ΔH < 0; energy released" },
          { name: "Endothermic", statement: "products higher in energy than reactants; ΔH > 0; energy absorbed" },
          { name: "Net energy change", statement: "ΔH = energy absorbed in bond breaking − energy released in bond forming" },
        ],
        workedExample: {
          problem: "Combustion of methane warms the surroundings. Classify the reaction and explain the energy change.",
          solution: "It is exothermic: energy released by forming the new bonds in CO₂ and H₂O is greater than the energy absorbed in breaking the bonds in CH₄ and O₂, so heat is given out and products are lower in energy than reactants.",
        },
      },
      questions: [
        {
          id: "ech10-u5-energy-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an exothermic reaction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Photosynthesis"
                    },
                    {
                              "id": "b",
                              "text": "Thermal decomposition of calcium carbonate"
                    },
                    {
                              "id": "c",
                              "text": "Combustion of methane"
                    },
                    {
                              "id": "d",
                              "text": "Electrolysis of water"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exothermic reaction",
                              "statement": "Releases energy to the surroundings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combustion releases heat; the others absorb energy.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Combustion of methane",
          "commonErrors": [
                    "Confusing endothermic decomposition with exothermic combustion."
          ]
},
        },
        {
          id: "ech10-u5-energy-changes-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define an exothermic reaction and state what happens to the temperature of the surroundings.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exothermic reaction",
                              "statement": "A reaction that releases energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It is a reaction that transfers energy to the surroundings, usually as heat.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The temperature of the surroundings rises.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Releases energy to surroundings; temperature of surroundings increases.",
          "commonErrors": [
                    "Saying the reaction 'gets hotter' — it is the surroundings that warm."
          ]
},
        },
        {
          id: "ech10-u5-energy-changes-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain, in terms of bond breaking and bond forming, why some reactions are exothermic and others endothermic.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bond energies",
                              "statement": "Breaking bonds absorbs energy; forming bonds releases energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy must be absorbed to break the bonds in the reactants.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Energy is released when the new bonds in the products form.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "If released energy exceeds absorbed energy the reaction is exothermic; if absorbed exceeds released it is endothermic.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Net ΔH = energy absorbed − energy released; sign decides exo/endo.",
          "commonErrors": [
                    "Reversing the rule — bond breaking absorbs, bond forming releases."
          ]
},
        },
        {
          id: "ech10-u5-energy-changes-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An energy level diagram is drawn for an exothermic reaction.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the positions of the reactants, the peak and the products on the diagram.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State how the activation energy and the overall energy change are shown.",
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
                              "name": "Energy level diagram",
                              "statement": "Shows relative energies and the activation-energy peak."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Reactants start at a higher level than products for an exothermic reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "A peak between them represents the activated complex at the highest energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Activation energy is the vertical gap from reactants up to the peak.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The overall energy change ΔH is the vertical gap from reactants down to products.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "For exothermic, products are lower, so ΔH is negative.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) reactants high, peak higher, products lower (b) Ea = reactants→peak; ΔH = reactants→products (negative).",
          "commonErrors": [
                    "Labelling ΔH as the peak height — the peak height is the activation energy."
          ]
},
        },
        {
          id: "ech10-u5-energy-changes-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare exothermic and endothermic reactions.",
          parts: [
          {
                    "label": "a",
                    "prompt": "For each type, state the sign of ΔH, the energy flow and two examples.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State what happens to the temperature of the surroundings in each case.",
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
                              "name": "Energy changes",
                              "statement": "ΔH sign and energy flow define exo/endo."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Exothermic: ΔH negative, energy released, e.g. combustion and neutralisation.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Endothermic: ΔH positive, energy absorbed, e.g. thermal decomposition and photosynthesis.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Exothermic reactions warm the surroundings.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Endothermic reactions cool the surroundings.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Temperature change is the practical test for the direction of energy transfer.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Exo: ΔH<0, releases heat, warms surroundings. Endo: ΔH>0, absorbs heat, cools surroundings.",
          "commonErrors": [
                    "Swapping the signs of ΔH for the two types."
          ]
},
        },
        {
          id: "ech10-u5-energy-changes-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The neutralisation of hydrochloric acid with sodium hydroxide releases about 57 kJ per mole, while the thermal decomposition of calcium carbonate absorbs about 178 kJ per mole.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Classify each reaction as exothermic or endothermic.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain, using bond breaking and bond forming, why the neutralisation releases energy.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "State what would be observed in the flask during each reaction.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Give one practical application of an exothermic reaction and one of an endothermic reaction.",
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
                              "name": "Energy classification",
                              "statement": "Energy released → exothermic; absorbed → endothermic."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Neutralisation releases energy → exothermic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decomposition absorbs energy → endothermic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bonds in HCl and NaOH must be broken, absorbing energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "New bonds form in NaCl and water, releasing energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The energy released forming the new bonds is greater than the energy absorbed breaking the old ones.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The net energy is released to the surroundings as heat.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Neutralisation flask warms; decomposition mixture cools.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any valid pair, e.g. self-heating cans (exo) and cold packs / photosynthesis (endo).",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) neutralisation exo; decomposition endo (b) bond forming releases more than breaking absorbs (c) warms vs cools (d) e.g. hand warmers vs instant cold packs.",
          "commonErrors": [
                    "Quoting ΔH magnitude without checking the sign of energy flow."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u5-reversible-equilibrium",
      title: "Reversible reactions and equilibrium",
      skill: "Explain reversible reactions and dynamic equilibrium and predict qualitatively how conditions shift equilibrium.",
      lesson: {
        sections: [
          {
            heading: "Reversible reactions",
            body: "Some reactions can proceed in **both directions** — the products can react together to re-form the reactants. They are written with the reversible symbol ⇌, e.g. N₂ + 3H₂ ⇌ 2NH₃. In practice, the forward and reverse reactions occur simultaneously.",
          },
          {
            heading: "Dynamic equilibrium",
            body: "In a **closed system** a reversible reaction reaches **dynamic equilibrium** when the rate of the forward reaction equals the rate of the reverse reaction. The concentrations of reactants and products then stay constant — but reactions are still occurring at molecular level ('dynamic'). Changing temperature, pressure or concentration shifts the equilibrium to oppose the change (**Le Chatelier's principle**). A catalyst speeds up both directions equally and does not change the equilibrium position.",
          },
        ],
        keyFormulas: [
          { name: "Dynamic equilibrium", statement: "rate forward = rate reverse; concentrations constant in a closed system" },
          { name: "Le Chatelier", statement: "equilibrium shifts to oppose the imposed change" },
          { name: "Catalyst and equilibrium", statement: "speeds attainment; does not change position" },
        ],
        workedExample: {
          problem: "Hydrated copper(II) sulfate is heated and turns white; water is added and it turns blue again. Explain.",
          solution: "The reaction CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O is reversible. Heating drives off water (forward); adding water drives the reverse, rehydrating the solid.",
        },
      },
      questions: [
        {
          id: "ech10-u5-reversible-equilibrium-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At dynamic equilibrium in a reversible reaction…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all the reactants have been used up"
                    },
                    {
                              "id": "b",
                              "text": "the forward and reverse reactions occur at the same rate"
                    },
                    {
                              "id": "c",
                              "text": "the reaction has stopped completely"
                    },
                    {
                              "id": "d",
                              "text": "only the forward reaction is happening"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dynamic equilibrium",
                              "statement": "Forward and reverse rates are equal; concentrations constant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equilibrium means equal rates, not zero rate.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) forward and reverse reactions occur at the same rate",
          "commonErrors": [
                    "Thinking equilibrium means the reaction stops — it continues dynamically."
          ]
},
        },
        {
          id: "ech10-u5-reversible-equilibrium-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define a reversible reaction and give one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reversible reaction",
                              "statement": "A reaction that can proceed in both directions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It is a reaction whose products can react together to re-form the reactants.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example: N₂ + 3H₂ ⇌ 2NH₃ or hydrated copper sulfate ⇌ anhydrous + water.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Reaction proceeding in both directions, e.g. Haber process or CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O.",
          "commonErrors": [
                    "Giving a one-way reaction as an example."
          ]
},
        },
        {
          id: "ech10-u5-reversible-equilibrium-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain, using Le Chatelier's principle, the effect of increasing the pressure on the equilibrium N₂ + 3H₂ ⇌ 2NH₃.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Le Chatelier's principle",
                              "statement": "Equilibrium shifts to oppose the imposed change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher pressure favours the side with fewer gas molecules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Left side has 4 gas molecules; right side has 2, so the forward reaction is favoured.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "More ammonia is produced and the equilibrium shifts right.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Shifts right — fewer gas molecules (4 → 2) relieves the pressure.",
          "commonErrors": [
                    "Counting only N₂ and forgetting the 3H₂ — total is 4 moles of gas."
          ]
},
        },
        {
          id: "ech10-u5-reversible-equilibrium-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A catalyst is added to a reversible reaction at equilibrium.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the effect of the catalyst on the forward and reverse rates.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State and explain the effect on the position of equilibrium.",
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
                              "name": "Catalyst and equilibrium",
                              "statement": "Catalyst speeds both directions equally; position unchanged."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The catalyst lowers the activation energy of both forward and reverse reactions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both rates increase by the same factor.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The position of equilibrium does not change.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Because both rates increase equally, they remain equal at equilibrium.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "The catalyst only lets equilibrium be reached faster.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) both rates increase equally (b) position unchanged — equilibrium reached faster.",
          "commonErrors": [
                    "Claiming a catalyst shifts equilibrium — it does not change the position."
          ]
},
        },
        {
          id: "ech10-u5-reversible-equilibrium-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "In the Haber process, N₂ + 3H₂ ⇌ 2NH₃ is run at about 450 °C, 200 atm and with an iron catalyst.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why a high pressure is used.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the temperature is moderate rather than very high.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why a catalyst is used.",
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
                              "name": "Industrial conditions",
                              "statement": "Conditions balance rate against equilibrium yield."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "High pressure favours the side with fewer gas molecules (4 → 2).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The equilibrium shifts right, increasing the ammonia yield.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "The reaction is exothermic, so very high temperature shifts equilibrium left and lowers yield.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A moderate temperature gives an acceptable rate without sacrificing too much yield.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "The iron catalyst speeds up attainment of equilibrium without changing its position.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "This allows a lower temperature to be used, improving yield while keeping rate reasonable.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) high pressure → more NH₃ (b) exothermic so high T lowers yield (c) catalyst speeds rate without shifting equilibrium.",
          "commonErrors": [
                    "Saying high temperature 'speeds up equilibrium' — it speeds rate but lowers yield for exothermic reactions."
          ]
},
        },
        {
          id: "ech10-u5-reversible-equilibrium-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Blue hydrated copper(II) sulfate crystals are heated strongly in a sealed tube, then cooled and water added.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the colour changes observed on heating and on adding water.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the reaction CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O is reversible.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest how a student could show that the white solid still contains copper(II) ions.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Reversibility",
                              "statement": "Products can re-form reactants under different conditions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "On heating the blue crystals turn white as water of crystallisation is driven off.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "On cooling in a sealed tube some water remains, so the solid may turn pale blue/pink.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Adding water turns the white solid blue again as it rehydrates.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The products (anhydrous CuSO₄ and water) can react together to re-form the hydrated crystals.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Heating favours the forward (dehydration) direction; adding water favours the reverse.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both directions occur, so the reaction is reversible.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Dissolve some white solid in water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Add sodium hydroxide solution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "A blue precipitate of copper(II) hydroxide confirms Cu²⁺ ions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Alternatively add ammonia for a deep blue solution, or compare colour after rehydration.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) blue→white on heating; white→blue with water (b) products re-form reactant (c) NaOH → blue ppt confirms Cu²⁺.",
          "commonErrors": [
                    "Assuming the white solid lost copper — only water of crystallisation was removed."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u5-energy-notes",
      title: "Energy changes and reversible reactions — notes",
      summary: "Exothermic releases energy (ΔH<0); endothermic absorbs (ΔH>0). Energy level diagrams show Ea and ΔH. Reversible reactions reach dynamic equilibrium when forward and reverse rates are equal; Le Chatelier predicts shifts.",
      sections: [
        { heading: "Energy changes", body: "Bond breaking absorbs energy, bond forming releases it. Net release → exothermic (products lower, ΔH negative); net absorption → endothermic (products higher, ΔH positive). Combustion/neutralisation are exothermic; decomposition/photosynthesis are endothermic." },
        { heading: "Energy level diagram", body: "Reactants and products are flat levels; the peak is the activated complex. Ea = reactants→peak; ΔH = reactants→products. A catalyst lowers only the peak." },
        { heading: "Equilibrium", body: "⇌ means both directions. Dynamic equilibrium: equal forward/reverse rates in a closed system. Increase pressure → fewer gas molecules side; increase temperature → endothermic direction; catalysts don't shift position." },
      ],
    },
  ],
};
