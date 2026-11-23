import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ech10-u8-lesson-8-3",
  code: "8-3",
  title: "Reversible Reactions, Catalysts and Equilibrium",
  goal: "I CAN describe reversible reactions and dynamic equilibrium, apply Le Chatelier's principle and explain the conditions used in the Haber process.",
  standards: ["4CH1 3.15", "4CH1 3.16", "4CH1 3.17", "4CH1 3.18", "4CH1 3.19"],
  
  vocabulary: [
    { term: "Reversible reaction", definition: "A reaction in which the products can react to re-form the reactants, shown with the symbol $\\rightleftharpoons$." },
    { term: "Dynamic equilibrium", definition: "The state in a closed system where the rate of the forward reaction equals the rate of the reverse reaction, so the amounts of reactants and products stay constant." },
    { term: "Position of equilibrium", definition: "Whether the equilibrium mixture contains more products (to the right) or more reactants (to the left)." },
    { term: "Le Chatelier's principle", definition: "If a change is made to a system at equilibrium, the position of equilibrium shifts to oppose the change." },
    { term: "Yield", definition: "The amount of product obtained, often expressed as a percentage of the maximum possible amount." },
    { term: "Haber process", definition: "The industrial manufacture of ammonia from nitrogen and hydrogen using an iron catalyst." },
  ],
  concepts: [
    {
      id: "ech10-u8-reversible-equilibrium",
      title: "Reversible reactions and dynamic equilibrium",
      skill: "Describe reversible reactions, define dynamic equilibrium and explain why a closed system is needed.",
      lesson: {
        sections: [
          {
            heading: "Reversible reactions",
            body: "Some reactions do not go to completion. In a **reversible reaction** the products can react together to re-form the reactants. This is shown with the equilibrium symbol $\\rightleftharpoons$ instead of a single arrow:\n\n$$\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$$\n\nThe reaction can go in both directions: forward (reactants → products) and reverse (products → reactants).",
          },
          {
            heading: "Dynamic equilibrium",
            body: "In a **closed system**, a reversible reaction reaches **dynamic equilibrium** when:\n\n- the rate of the forward reaction equals the rate of the reverse reaction,\n- the concentrations of reactants and products stay constant,\n- the reaction has not stopped — particles are still reacting in both directions.\n\nEquilibrium can only be reached in a **closed system**, because if products can escape (or more reactant can enter), the forward reaction keeps being favoured.",
          },
        ],
        keyFormulas: [
          { name: "Reversible reaction", statement: "$\\text{reactants} \\rightleftharpoons \\text{products}$" },
          { name: "Dynamic equilibrium", statement: "rate of forward reaction = rate of reverse reaction; concentrations constant" },
          { name: "Closed system", statement: "no reactants or products enter or leave" },
        ],
        workedExample: {
          problem: "Hydrated copper(II) sulfate, $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$, loses water when heated to form anhydrous copper(II) sulfate and water vapour. The reverse happens when water is added. Write the equation with the equilibrium symbol and explain why this is reversible.",
          solution: "$\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O} \\rightleftharpoons \\text{CuSO}_4 + 5\\text{H}_2\\text{O}$. It is reversible because the anhydrous salt reacts with water to re-form the hydrated compound, so the reaction goes in both directions.",
        },
      },
      questions: [
        {
          id: "ech10-u8-reversible-equilibrium-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which symbol is used in equations for reversible reactions?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\rightarrow$"
                    },
                    {
                              "id": "b",
                              "text": "$\\rightleftharpoons$"
                    },
                    {
                              "id": "c",
                              "text": "$\\Leftarrow$"
                    },
                    {
                              "id": "d",
                              "text": "$\\times$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Equilibrium symbol",
                              "statement": "$\\rightleftharpoons$ shows a reversible reaction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The double arrow $\\rightleftharpoons$ indicates the reaction can go in both directions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) $\\rightleftharpoons$",
          "commonErrors": [
                    "Using a single arrow for a reversible reaction."
          ]
},
        },
        {
          id: "ech10-u8-reversible-equilibrium-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define dynamic equilibrium.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dynamic equilibrium",
                              "statement": "Rate of forward reaction equals rate of reverse reaction; concentrations stay constant in a closed system."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In a closed system the rate of the forward reaction equals the rate of the reverse reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The concentrations of reactants and products stay constant even though reactions continue in both directions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Forward and reverse rates equal; concentrations constant; reactions continue.",
          "commonErrors": [
                    "Saying all reactions have stopped at equilibrium."
          ]
},
        },
        {
          id: "ech10-u8-reversible-equilibrium-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a reversible reaction can only reach equilibrium in a closed system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Closed system",
                              "statement": "Equilibrium requires that no reactants or products enter or leave."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In an open system, products could escape or extra reactant could enter.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The forward reaction would keep being favoured and the reverse reaction could not balance it.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Only when nothing enters or leaves can the forward and reverse rates become equal.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "A closed system prevents reactants/products escaping, allowing forward and reverse rates to equalise.",
          "commonErrors": [
                    "Saying equilibrium needs equal amounts of reactants and products (it needs equal rates)."
          ]
},
        },
        {
          id: "ech10-u8-reversible-equilibrium-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The reaction $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$ is exothermic in the forward direction.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the equilibrium symbol version of this equation and identify which is the forward and which is the reverse reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State what happens to the rates of the forward and reverse reactions if the temperature is increased.",
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
                              "name": "Reversible reaction",
                              "statement": "Forward: reactants → products; reverse: products → reactants."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Write $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Forward is $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$; reverse is $2\\text{NH}_3 \\rightarrow \\text{N}_2 + 3\\text{H}_2$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Raising temperature increases both rates, but the reverse (endothermic) reaction is favoured more.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "So the rate of the reverse reaction becomes greater than the forward rate, shifting equilibrium left.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $\\rightleftharpoons$; forward makes ammonia, reverse decomposes it (b) reverse rate increases more; equilibrium shifts left.",
          "commonErrors": [
                    "Saying the forward rate increases more for an exothermic forward reaction."
          ]
},
        },
        {
          id: "ech10-u8-reversible-equilibrium-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Consider the reversible reaction $\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{D}$, which is exothermic in the forward direction.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two features of a system at dynamic equilibrium.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State how increasing the temperature affects the position of equilibrium and explain why.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State how increasing the pressure affects the position of equilibrium if all species are gases, and explain why.",
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
                              "name": "Le Chatelier's principle",
                              "statement": "Equilibrium shifts to oppose the change made."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rate of forward reaction equals rate of reverse reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Concentrations of reactants and products remain constant (in a closed system).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Equilibrium shifts to the left (towards reactants).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The forward reaction is exothermic, so the system absorbs the added heat by favouring the endothermic reverse reaction.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "No shift, because there are equal numbers of gas molecules on each side (2 → 2).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pressure affects position only when the number of gas molecules differs on the two sides.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) equal rates, constant concentrations (b) shifts left, absorbs heat (c) no shift — equal moles of gas.",
          "commonErrors": [
                    "Saying pressure always shifts equilibrium regardless of mole numbers."
          ]
},
        },
        {
          id: "ech10-u8-reversible-equilibrium-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Haber process makes ammonia: $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$, $\\Delta H = -92\\text{ kJ/mol}$. The industrial conditions are about $450^\\circ\\text{C}$, $200\\text{ atm}$ and an iron catalyst.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State why a catalyst is used and what effect it has on the position of equilibrium.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why a high pressure is used.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the temperature used is a compromise between yield and rate.",
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
                              "name": "Le Chatelier's principle",
                              "statement": "The position of equilibrium shifts to oppose changes in temperature, pressure and concentration."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The catalyst speeds up both forward and reverse reactions equally.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It does not change the position of equilibrium or the yield, only how quickly equilibrium is reached.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "There are fewer gas molecules on the product side (4 → 2).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "High pressure shifts equilibrium towards the products, increasing the yield of ammonia.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "The forward reaction is exothermic, so a lower temperature would give a higher yield.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "But a low temperature makes the reaction very slow.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "$450^\\circ\\text{C}$ is a compromise: fast enough rate while still giving a reasonable yield.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "The catalyst also helps achieve a reasonable rate at this temperature.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) catalyst speeds both directions equally, no yield change (b) high pressure favours fewer gas molecules = more NH3 (c) temperature balances yield vs rate.",
          "commonErrors": [
                    "Saying the catalyst increases yield.",
                    "Choosing a very low temperature without considering rate."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u8-le-chatelier-haber",
      title: "Le Chatelier's principle and industrial processes",
      skill: "Predict how changes in concentration, pressure and temperature affect the position of equilibrium and apply this to the Haber process.",
      lesson: {
        sections: [
          {
            heading: "Le Chatelier's principle",
            body: "**Le Chatelier's principle**: if a change is made to a system at equilibrium, the position of equilibrium shifts to **oppose** the change.\n\n- **Concentration**: increasing the concentration of a reactant shifts equilibrium towards the products; decreasing it shifts towards the reactants.\n- **Pressure** (gases only): increasing pressure shifts equilibrium towards the side with **fewer gas molecules**; decreasing pressure shifts towards the side with **more gas molecules**.\n- **Temperature**: increasing temperature shifts equilibrium in the **endothermic** direction (absorbs the added heat); decreasing temperature shifts in the **exothermic** direction.\n\nA **catalyst** does not change the position of equilibrium — it only speeds up the rate at which equilibrium is reached.",
          },
          {
            heading: "The Haber process",
            body: "Ammonia is made industrially from nitrogen (from air) and hydrogen (from natural gas):\n\n$$\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3 \\qquad \\Delta H = -92\\text{ kJ/mol}$$\n\nConditions: about $450^\\circ\\text{C}$, $200\\text{ atm}$, iron catalyst.\n\n- **High pressure** favours the side with fewer gas molecules, giving more ammonia.\n- **Moderate temperature**: the reaction is exothermic, so lower temperature gives more ammonia, but the rate would be too slow — $450^\\circ\\text{C}$ is a compromise.\n- **Iron catalyst** speeds up the reaction without changing the yield.\n- Ammonia is used to make fertilisers.",
          },
        ],
        keyFormulas: [
          { name: "Le Chatelier — concentration", statement: "More reactant → shift to products; less reactant → shift to reactants" },
          { name: "Le Chatelier — pressure", statement: "Higher pressure → fewer gas molecules side; lower pressure → more gas molecules side" },
          { name: "Le Chatelier — temperature", statement: "Higher temperature → endothermic direction; lower temperature → exothermic direction" },
          { name: "Haber process", statement: "$\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$, $\\Delta H = -92\\text{ kJ/mol}$, Fe catalyst, ~$450^\\circ\\text{C}$, $200\\text{ atm}$" },
        ],
        workedExample: {
          problem: "For $\\text{N}_2O_4 \\rightleftharpoons 2\\text{NO}_2$ (endothermic forward), predict the effect of increasing the temperature on the position of equilibrium.",
          solution: "The forward reaction is endothermic, so increasing temperature shifts equilibrium in the endothermic direction — towards $\\text{NO}_2$ (the products). The mixture becomes darker brown.",
        },
      },
      questions: [
        {
          id: "ech10-u8-le-chatelier-haber-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State Le Chatelier's principle.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Equilibrium always shifts to produce more products"
                    },
                    {
                              "id": "b",
                              "text": "If a change is made to a system at equilibrium, the position shifts to oppose the change"
                    },
                    {
                              "id": "c",
                              "text": "A catalyst shifts equilibrium towards the products"
                    },
                    {
                              "id": "d",
                              "text": "Higher temperature always increases the yield"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Le Chatelier's principle",
                              "statement": "The position of equilibrium shifts to oppose any change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Le Chatelier's principle states the system shifts to oppose the imposed change.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Shifts to oppose the change.",
          "commonErrors": [
                    "Thinking catalysts change the position of equilibrium."
          ]
},
        },
        {
          id: "ech10-u8-le-chatelier-haber-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For the reaction $\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$, state what happens to the position of equilibrium when the concentration of A is increased, and explain why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Le Chatelier — concentration",
                              "statement": "Increasing a reactant's concentration shifts equilibrium towards the products."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equilibrium shifts to the right, towards the products.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "More A increases the forward rate; the system uses up the extra A by making more products until rates equalise again.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Shifts right towards products; extra reactant is consumed.",
          "commonErrors": [
                    "Saying equilibrium shifts left when a reactant is added."
          ]
},
        },
        {
          id: "ech10-u8-le-chatelier-haber-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3$ (exothermic forward), all species are gases. Predict and explain the effect of increasing the pressure on the position of equilibrium.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Le Chatelier — pressure",
                              "statement": "Higher pressure shifts equilibrium towards fewer gas molecules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count gas molecules: 3 on the left, 2 on the right.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Higher pressure shifts equilibrium towards the side with fewer gas molecules, i.e. the products.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The system reduces the pressure by decreasing the total number of gas molecules.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Shifts right towards $\\text{SO}_3$ because there are fewer gas molecules on the product side.",
          "commonErrors": [
                    "Saying pressure always shifts left, or ignoring the mole count."
          ]
},
        },
        {
          id: "ech10-u8-le-chatelier-haber-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The reaction $\\text{N}_2O_4 \\rightleftharpoons 2\\text{NO}_2$ is endothermic in the forward direction. The mixture is brown due to $\\text{NO}_2$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict the effect of increasing temperature on the position of equilibrium and on the colour of the mixture.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Predict the effect of decreasing pressure on the position of equilibrium.",
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
                              "name": "Le Chatelier's principle",
                              "statement": "Equilibrium shifts to oppose temperature and pressure changes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Higher temperature shifts equilibrium in the endothermic direction, towards $\\text{NO}_2$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "More brown $\\text{NO}_2$ forms, so the colour becomes darker.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lower pressure shifts equilibrium towards more gas molecules: 1 → 2, so towards $\\text{NO}_2$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The mixture becomes darker brown as more $\\text{NO}_2$ forms.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) darker — equilibrium shifts towards NO2 (b) darker — lower pressure favours the side with more gas molecules, also towards NO2.",
          "commonErrors": [
                    "Forgetting that decreasing pressure favours the side with MORE gas molecules."
          ]
},
        },
        {
          id: "ech10-u8-le-chatelier-haber-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "In the Haber process, $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$ ($\\Delta H = -92\\text{ kJ/mol}$), the gases are passed over an iron catalyst at about $450^\\circ\\text{C}$ and $200\\text{ atm}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the effect of the iron catalyst on the rate and the position of equilibrium.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why a high pressure is used, referring to the numbers of gas molecules.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why $450^\\circ\\text{C}$ is chosen rather than a lower or higher temperature.",
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
                              "name": "Haber process",
                              "statement": "Conditions chosen to balance rate and yield."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The catalyst increases the rate of both forward and reverse reactions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It does not change the position of equilibrium or the final yield.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "4 mol gas on the left, 2 mol on the right.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "High pressure shifts equilibrium towards fewer gas molecules, i.e. more ammonia.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Lower temperature would give a higher yield (exothermic reaction) but too slow a rate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "$450^\\circ\\text{C}$ gives a reasonable rate and a reasonable yield — a compromise.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) faster rate, no yield change (b) fewer gas molecules → more NH3 (c) compromise between yield and rate.",
          "commonErrors": [
                    "Saying the catalyst increases the yield of ammonia."
          ]
},
        },
        {
          id: "ech10-u8-le-chatelier-haber-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A reversible reaction $\\text{P} + \\text{Q} \\rightleftharpoons \\text{R}$ is exothermic in the forward direction. R is a gas; P and Q are also gases.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe what happens at dynamic equilibrium in terms of the forward and reverse rates.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Predict and explain the effect of doubling the pressure on the position of equilibrium.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Predict and explain the effect of decreasing the temperature on the position of equilibrium.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why a catalyst does not change the position of equilibrium.",
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
                              "name": "Le Chatelier's principle",
                              "statement": "Equilibrium shifts to oppose imposed changes; catalysts affect only rate."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rate of forward reaction equals rate of reverse reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Concentrations of P, Q and R stay constant in the closed system.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "2 gas molecules on each side, so pressure has no effect on position.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Equal numbers of gas molecules means pressure change does not favour either side.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Lower temperature shifts equilibrium in the exothermic direction, towards R (products).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The system releases heat by favouring the exothermic forward reaction.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "A catalyst lowers the activation energy for both directions equally.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Both rates increase by the same factor, so the equilibrium position and yield are unchanged.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) equal rates, constant concentrations (b) no shift — equal gas moles (c) shifts right — exothermic direction (d) speeds both directions equally.",
          "commonErrors": [
                    "Thinking pressure always shifts equilibrium; it only matters when gas mole numbers differ."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u8-equilibrium-notes",
      title: "Reversible reactions and equilibrium — revision notes",
      summary: "Dynamic equilibrium: equal forward and reverse rates in a closed system. Le Chatelier: shift to oppose changes in concentration, pressure and temperature.",
      sections: [
        { heading: "Key idea", body: "Equilibrium is dynamic — reactions continue in both directions at equal rates. It needs a closed system." },
        { heading: "Le Chatelier", body: "Concentration: more reactant → products. Pressure: fewer gas molecules side. Temperature: endothermic direction when heated." },
        { heading: "Haber", body: "$\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$; high pressure and Fe catalyst; $450^\\circ\\text{C}$ balances rate and yield." },
      ],
    },
  ],
};
