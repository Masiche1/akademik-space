import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ech10-u8-lesson-8-1",
  code: "8-1",
  title: "Energetics: Exothermic and Endothermic Reactions",
  goal: "I CAN classify reactions as exothermic or endothermic, interpret energy profile diagrams and calculate energy changes using calorimetry and bond energies.",
  standards: ["4CH1 3.1", "4CH1 3.2", "4CH1 3.3", "4CH1 3.4", "4CH1 3.5", "4CH1 3.6"],
  
  vocabulary: [
    { term: "Exothermic reaction", definition: "A reaction that transfers energy to the surroundings, so the temperature of the surroundings rises. $\\Delta H$ is negative." },
    { term: "Endothermic reaction", definition: "A reaction that takes in energy from the surroundings, so the temperature of the surroundings falls. $\\Delta H$ is positive." },
    { term: "Activation energy", definition: "The minimum energy that colliding particles must have for a reaction to occur." },
    { term: "Enthalpy change, $\\Delta H$", definition: "The energy change of a reaction: energy of products minus energy of reactants, in $\\text{kJ/mol}$." },
    { term: "Energy profile", definition: "A diagram plotting the energy of reactants and products against the progress of the reaction, with a peak at the activated complex." },
    { term: "Calorimetry", definition: "Measuring the energy transferred in a reaction from the temperature change of a known mass of water." },
    { term: "Bond energy", definition: "The energy needed to break one mole of a particular covalent bond in gaseous molecules, in $\\text{kJ/mol}$." },
  ],
  concepts: [
    {
      id: "ech10-u8-energy-changes",
      title: "Energy changes and energy profiles",
      skill: "Classify reactions as exothermic or endothermic and describe energy profile diagrams, including activation energy and the sign of $\\Delta H$.",
      lesson: {
        sections: [
          {
            heading: "Exothermic and endothermic reactions",
            body: "Every chemical reaction involves a transfer of energy between the reacting chemicals and their surroundings.\n\n- **Exothermic**: energy is transferred **to** the surroundings, so the temperature **rises**. Examples: combustion of fuels, neutralisation of acids by alkalis, reactions of metals with acids, respiration.\n- **Endothermic**: energy is taken **in from** the surroundings, so the temperature **falls**. Examples: thermal decomposition of calcium carbonate, photosynthesis, dissolving ammonium nitrate in water.\n\nThe enthalpy change $\\Delta H$ is negative for an exothermic reaction and positive for an endothermic reaction.",
          },
          {
            heading: "Energy profile diagrams",
            body: "An energy profile plots energy against the progress of the reaction. Reactants start at one level, rise to a peak (the activated complex) and finish at the level of the products.\n\n- The **activation energy** $E_a$ is the height from the reactants up to the peak.\n- $\\Delta H = \\text{energy of products} - \\text{energy of reactants}$.\n- Exothermic: products are **lower** than reactants, so $\\Delta H < 0$.\n- Endothermic: products are **higher** than reactants, so $\\Delta H > 0$.\n\nEven exothermic reactions need activation energy to start, which is why a fuel needs a flame or spark to ignite.",
          },
          {
            heading: "Bonds and energy",
            body: "Breaking bonds is **endothermic** — energy must be supplied. Making bonds is **exothermic** — energy is released. A reaction is exothermic overall if more energy is released when the new bonds in the products form than is needed to break the bonds in the reactants.",
          },
        ],
        keyFormulas: [
          { name: "Enthalpy change", statement: "$\\Delta H = \\text{energy of products} - \\text{energy of reactants}$" },
          { name: "Activation energy", statement: "$E_a = \\text{energy at peak} - \\text{energy of reactants}$" },
          { name: "Exothermic", statement: "Temperature rises, $\\Delta H < 0$, products lower in energy than reactants" },
          { name: "Endothermic", statement: "Temperature falls, $\\Delta H > 0$, products higher in energy than reactants" },
        ],
        workedExample: {
          problem: "In a reaction the energy of the reactants is $200\\text{ kJ/mol}$ and the energy of the products is $150\\text{ kJ/mol}$. Calculate $\\Delta H$ and state whether the reaction is exothermic or endothermic.",
          solution: "$\\Delta H = 150 - 200 = -50\\text{ kJ/mol}$. The negative sign means energy is released to the surroundings, so the reaction is exothermic.",
        },
      },
      questions: [
        {
          id: "ech10-u8-energy-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an exothermic reaction the temperature of the surroundings:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rises"
                    },
                    {
                              "id": "b",
                              "text": "falls"
                    },
                    {
                              "id": "c",
                              "text": "stays the same"
                    },
                    {
                              "id": "d",
                              "text": "falls only if a catalyst is used"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exothermic reaction",
                              "statement": "Energy is transferred to the surroundings and the temperature rises."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exothermic reactions release energy to the surroundings, so the temperature rises.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) rises",
          "commonErrors": [
                    "Confusing exothermic with endothermic."
          ]
},
        },
        {
          id: "ech10-u8-energy-changes-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define an exothermic reaction and an endothermic reaction, stating the sign of $\\Delta H$ in each case.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exothermic and endothermic",
                              "statement": "Exothermic releases energy to the surroundings ($\\Delta H < 0$); endothermic absorbs energy from the surroundings ($\\Delta H > 0$)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exothermic: energy transferred to the surroundings, temperature rises, $\\Delta H$ is negative.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Endothermic: energy taken in from the surroundings, temperature falls, $\\Delta H$ is positive.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Exothermic releases energy, $\\Delta H < 0$; endothermic absorbs energy, $\\Delta H > 0$.",
          "commonErrors": [
                    "Reversing the signs of $\\Delta H$."
          ]
},
        },
        {
          id: "ech10-u8-energy-changes-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The thermal decomposition of calcium carbonate, $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$, is endothermic. Describe what happens to the energy and the temperature of the surroundings, and describe the energy profile diagram for this reaction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Energy profile",
                              "statement": "Reactants rise to a peak then fall or rise to the product level; $\\Delta H$ is products minus reactants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy is taken in from the surroundings, so the temperature of the surroundings falls.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Reactants are at a lower level than products, so $\\Delta H$ is positive.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The profile rises from reactants to a peak (activation energy) then falls slightly but ends higher than the reactants.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Energy absorbed, surroundings cool, products higher in energy than reactants ($\\Delta H > 0$).",
          "commonErrors": [
                    "Drawing the products lower than the reactants for an endothermic reaction."
          ]
},
        },
        {
          id: "ech10-u8-energy-changes-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Reaction A raises the temperature of $100\\text{ g}$ of water by $12^\\circ\\text{C}$. Reaction B lowers the temperature of the same mass of water by $8^\\circ\\text{C}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Classify each reaction as exothermic or endothermic.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "For reaction B, state whether the energy of the products is higher or lower than the energy of the reactants, and justify your answer.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exothermic and endothermic",
                              "statement": "Temperature rise = exothermic; temperature fall = endothermic."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Reaction A: temperature rises, so exothermic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Reaction B: temperature falls, so endothermic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Products are higher in energy than reactants.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The reaction absorbs energy from the surroundings (temperature falls), so $\\Delta H > 0$.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) A exothermic, B endothermic (b) products higher in energy because energy is absorbed.",
          "commonErrors": [
                    "Saying products are lower because 'the reaction used up energy'."
          ]
},
        },
        {
          id: "ech10-u8-energy-changes-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Consider the exothermic reaction $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$, which has an activation energy of $50\\text{ kJ/mol}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define activation energy.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the sign of $\\Delta H$ for this reaction and describe the relative energy levels of reactants and products.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the reaction still needs a spark or flame to start, even though it releases energy overall.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Activation energy",
                              "statement": "The minimum energy colliding particles need for a reaction to occur."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Activation energy is the minimum energy particles must have when they collide.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It is the energy gap from the reactants up to the peak of the energy profile.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\Delta H$ is negative; products are lower in energy than reactants.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Energy is released overall, so the reaction is exothermic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reactant particles must first reach the activation energy before bonds can break and reform.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The spark supplies this energy; once started the reaction releases enough energy to continue.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Minimum collision energy for reaction (b) $\\Delta H < 0$, products lower (c) spark supplies activation energy to start.",
          "commonErrors": [
                    "Saying no energy is needed because the reaction is exothermic."
          ]
},
        },
        {
          id: "ech10-u8-energy-changes-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two reactions are compared on energy profile diagrams. Reaction 1: reactants at $300\\text{ kJ/mol}$, peak at $450\\text{ kJ/mol}$, products at $200\\text{ kJ/mol}$. Reaction 2: reactants at $300\\text{ kJ/mol}$, peak at $500\\text{ kJ/mol}$, products at $350\\text{ kJ/mol}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate $\\Delta H$ for each reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the activation energy for each reaction.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Classify each reaction as exothermic or endothermic.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State which reaction has the higher activation energy and explain what this means for the rate at which each starts.",
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
                              "name": "Enthalpy change",
                              "statement": "$\\Delta H = \\text{products} - \\text{reactants}$; $E_a = \\text{peak} - \\text{reactants}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Reaction 1: $\\Delta H = 200 - 300 = -100\\text{ kJ/mol}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Reaction 2: $\\Delta H = 350 - 300 = +50\\text{ kJ/mol}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reaction 1: $E_a = 450 - 300 = 150\\text{ kJ/mol}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reaction 2: $E_a = 500 - 300 = 200\\text{ kJ/mol}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reaction 1 is exothermic ($\\Delta H < 0$); reaction 2 is endothermic ($\\Delta H > 0$).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Correct classification of both reactions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Reaction 2 has the higher activation energy ($200$ vs $150\\text{ kJ/mol}$).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Fewer particles have enough energy, so reaction 2 starts more slowly than reaction 1.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "$\\Delta H_1 = -100$, $\\Delta H_2 = +50\\text{ kJ/mol}$; $E_{a1} = 150$, $E_{a2} = 200\\text{ kJ/mol}$; reaction 2 has higher $E_a$ and starts more slowly.",
          "commonErrors": [
                    "Calculating $\\Delta H$ as reactants minus products.",
                    "Confusing the peak height with $\\Delta H$."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u8-calorimetry-bonds",
      title: "Calorimetry and bond energies",
      skill: "Calculate energy changes using $q = mc\\Delta T$ and bond energies, and explain energy changes in terms of bonds broken and made.",
      lesson: {
        sections: [
          {
            heading: "Measuring energy changes: calorimetry",
            body: "When a reaction takes place in a known mass of water, the temperature change can be used to find the energy transferred.\n\n$$q = mc\\Delta T$$\n\nwhere $q$ is the energy transferred in joules (J), $m$ is the mass of water in grams (g), $c$ is the specific heat capacity of water ($4.2\\text{ J/g}^\\circ\\text{C}$) and $\\Delta T$ is the temperature change in $^\\circ\\text{C}$.\n\nIf the temperature rises the reaction is exothermic; if it falls the reaction is endothermic. Some energy is always lost to the surroundings, so measured values are smaller than the true value.",
          },
          {
            heading: "Bond energies",
            body: "In a chemical reaction, bonds in the reactants must be **broken** (which requires energy) and new bonds in the products are **made** (which releases energy).\n\n$$\\Delta H = \\text{total energy to break bonds} - \\text{total energy released making bonds}$$\n\n- If more energy is released making bonds than is needed to break them, $\\Delta H$ is negative: exothermic.\n- If more energy is needed to break bonds than is released making them, $\\Delta H$ is positive: endothermic.",
          },
        ],
        keyFormulas: [
          { name: "Energy transferred", statement: "$q = mc\\Delta T$ ($c = 4.2\\text{ J/g}^\\circ\\text{C}$ for water)" },
          { name: "Enthalpy from bond energies", statement: "$\\Delta H = \\text{bonds broken} - \\text{bonds made}$" },
          { name: "Specific heat capacity", statement: "Energy needed to raise $1\\text{ g}$ of a substance by $1^\\circ\\text{C}$" },
        ],
        workedExample: {
          problem: "A reaction raises the temperature of $50\\text{ g}$ of water by $8^\\circ\\text{C}$. Calculate the energy transferred. ($c = 4.2\\text{ J/g}^\\circ\\text{C}$)",
          solution: "$q = mc\\Delta T = 50 \\times 4.2 \\times 8 = 1680\\text{ J} = 1.68\\text{ kJ}$. The temperature rose, so the reaction is exothermic.",
        },
      },
      questions: [
        {
          id: "ech10-u8-calorimetry-bonds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the equation $q = mc\\Delta T$, what does $c$ represent?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The speed of light"
                    },
                    {
                              "id": "b",
                              "text": "The specific heat capacity of the substance"
                    },
                    {
                              "id": "c",
                              "text": "The concentration of the solution"
                    },
                    {
                              "id": "d",
                              "text": "The charge on an ion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Specific heat capacity",
                              "statement": "Energy needed to raise 1 g of a substance by $1^\\circ\\text{C}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$c$ is the specific heat capacity of the substance, $4.2\\text{ J/g}^\\circ\\text{C}$ for water.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) The specific heat capacity of the substance",
          "commonErrors": [
                    "Confusing $c$ with concentration."
          ]
},
        },
        {
          id: "ech10-u8-calorimetry-bonds-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the formula used to calculate the energy transferred in a calorimetry experiment, and give the value of the specific heat capacity of water with its units.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Calorimetry",
                              "statement": "$q = mc\\Delta T$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The formula is $q = mc\\Delta T$ where $q$ is energy in J, $m$ mass in g, $c$ specific heat capacity and $\\Delta T$ temperature change.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "For water $c = 4.2\\text{ J/g}^\\circ\\text{C}$ (accept $4.18$).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$q = mc\\Delta T$; $c = 4.2\\text{ J/g}^\\circ\\text{C}$.",
          "commonErrors": [
                    "Writing $q = mct$ without the change $\\Delta T$."
          ]
},
        },
        {
          id: "ech10-u8-calorimetry-bonds-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "An exothermic reaction is carried out in $100\\text{ g}$ of water. The temperature rises by $7.5^\\circ\\text{C}$. Calculate the energy transferred to the water, in joules. ($c = 4.2\\text{ J/g}^\\circ\\text{C}$)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Energy transferred",
                              "answer": 3150,
                              "tolerance": 1,
                              "unit": "J"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Calorimetry",
                              "statement": "$q = mc\\Delta T$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute values into $q = mc\\Delta T$.",
                              "working": "q = 100 \\times 4.2 \\times 7.5",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Calculate the product.",
                              "working": "q = 3150\\text{ J}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Convert to kJ if required: $3.15\\text{ kJ}$; the temperature rose so the reaction is exothermic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3150\\text{ J}$ ($3.15\\text{ kJ}$)",
          "commonErrors": [
                    "Multiplying by $1000$ twice when converting to kJ."
          ]
},
        },
        {
          id: "ech10-u8-calorimetry-bonds-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a reaction, breaking the bonds in the reactants requires $840\\text{ kJ/mol}$ and making the bonds in the products releases $1120\\text{ kJ/mol}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define bond energy.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate $\\Delta H$ for the reaction and state whether it is exothermic or endothermic.",
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
                              "name": "Bond energies",
                              "statement": "$\\Delta H = \\text{bonds broken} - \\text{bonds made}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bond energy is the energy needed to break one mole of a particular covalent bond.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It is measured in $\\text{kJ/mol}$ for bonds in gaseous molecules.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\Delta H = 840 - 1120 = -280\\text{ kJ/mol}$.",
                              "working": "840 - 1120 = -280",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "More energy is released making bonds than is needed to break them, so the reaction is exothermic.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "$\\Delta H = -280\\text{ kJ/mol}$, exothermic.",
          "commonErrors": [
                    "Calculating bonds made minus bonds broken, giving $+280$."
          ]
},
        },
        {
          id: "ech10-u8-calorimetry-bonds-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student burns $0.50\\text{ g}$ of a fuel in a calorimeter containing $200\\text{ g}$ of water. The temperature of the water rises by $12^\\circ\\text{C}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the energy transferred to the water, in kJ. ($c = 4.2\\text{ J/g}^\\circ\\text{C}$)",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the energy released per gram of fuel.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest one reason why the student's value is lower than the true energy content of the fuel.",
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
                              "name": "Calorimetry",
                              "statement": "$q = mc\\Delta T$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Substitute into $q = mc\\Delta T$.",
                              "working": "q = 200 \\times 4.2 \\times 12",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$q = 10080\\text{ J}$.",
                              "working": "10080\\text{ J}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Convert to kJ: $10.08\\text{ kJ}$.",
                              "working": "10.08\\text{ kJ}",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Divide by the mass of fuel.",
                              "working": "10.08 \\div 0.50 = 20.16\\text{ kJ/g}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Energy per gram is $20.16\\text{ kJ/g}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any one of: heat lost to surroundings/container, not all fuel burned completely, energy used to heat the calorimeter.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $10.08\\text{ kJ}$ (b) $20.16\\text{ kJ/g}$ (c) heat losses to surroundings or incomplete combustion.",
          "commonErrors": [
                    "Forgetting to convert J to kJ in part (a).",
                    "Dividing by the mass of water instead of fuel."
          ]
},
        },
        {
          id: "ech10-u8-calorimetry-bonds-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Breaking one mole of $\\text{H}-\\text{H}$ bonds requires $436\\text{ kJ}$, one mole of $\\text{O}=\\text{O}$ bonds requires $498\\text{ kJ}$, forming one mole of $\\text{O}-\\text{H}$ bonds releases $463\\text{ kJ}$ and forming one mole of $\\text{H}-\\text{O}$ bonds is the same value. For the reaction $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$:",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the total energy needed to break all the bonds in the reactants.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the total energy released when all the bonds in the products are formed.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate $\\Delta H$ for the reaction.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain, in terms of bonds, why this reaction is exothermic.",
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
                              "name": "Bond energies",
                              "statement": "$\\Delta H = \\text{bonds broken} - \\text{bonds made}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Two $\\text{H}-\\text{H}$ bonds and one $\\text{O}=\\text{O}$ bond are broken.",
                              "working": "2 \\times 436 + 498 = 1370\\text{ kJ}",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Four $\\text{O}-\\text{H}$ bonds are formed in $2\\text{H}_2\\text{O}$.",
                              "working": "4 \\times 463 = 1852\\text{ kJ released}",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "$\\Delta H = 1370 - 1852 = -482\\text{ kJ/mol}$.",
                              "working": "1370 - 1852 = -482",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "More energy is released forming the bonds in water than is needed to break the bonds in hydrogen and oxygen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "The net energy is released to the surroundings, so the reaction is exothermic ($\\Delta H < 0$).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Bonds broken $= 1370\\text{ kJ}$; bonds made $= 1852\\text{ kJ}$; $\\Delta H = -482\\text{ kJ/mol}$, exothermic.",
          "commonErrors": [
                    "Counting two $\\text{O}-\\text{H}$ bonds instead of four.",
                    "Adding instead of subtracting for $\\Delta H$."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u8-energetics-notes",
      title: "Energetics — revision notes",
      summary: "Exothermic releases energy ($\\Delta H < 0$), endothermic absorbs it ($\\Delta H > 0$). Use $q = mc\\Delta T$ and $\\Delta H = \\text{bonds broken} - \\text{bonds made}$.",
      sections: [
        { heading: "Key idea", body: "Temperature rise = exothermic; temperature fall = endothermic. The activation energy is always needed to start a reaction." },
        { heading: "Calculations", body: "Calorimetry: $q = mc\\Delta T$ with $c = 4.2\\text{ J/g}^\\circ\\text{C}$. Bond energies: $\\Delta H = \\text{broken} - \\text{made}$." },
        { heading: "Common trap", body: "Measured calorimetry values are lower than true values because heat escapes to the surroundings." },
      ],
    },
  ],
};
