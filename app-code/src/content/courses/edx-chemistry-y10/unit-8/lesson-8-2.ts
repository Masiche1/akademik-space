import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ech10-u8-lesson-8-2",
  code: "8-2",
  title: "Rates of Reaction and Collision Theory",
  goal: "I CAN explain how temperature, concentration, surface area and catalysts affect the rate of reaction using collision theory, and interpret rate graphs.",
  standards: ["4CH1 3.9", "4CH1 3.10", "4CH1 3.11", "4CH1 3.12", "4CH1 3.13", "4CH1 3.14"],
  
  vocabulary: [
    { term: "Rate of reaction", definition: "How quickly reactants are used up or products are formed, measured as the change in quantity per unit time." },
    { term: "Collision theory", definition: "Reactions happen when particles collide with at least the activation energy; more frequent or more energetic collisions give a faster rate." },
    { term: "Activation energy", definition: "The minimum energy that colliding particles must have in order to react." },
    { term: "Catalyst", definition: "A substance that speeds up a reaction by providing an alternative pathway with a lower activation energy; it is not used up." },
    { term: "Surface area", definition: "The total area of a solid exposed to a reacting liquid or gas. Smaller pieces have a larger surface area for the same mass." },
    { term: "Precipitate", definition: "An insoluble solid formed in a reaction in solution, for example the yellow sulfur formed when acid reacts with sodium thiosulfate." },
  ],
  concepts: [
    {
      id: "ech10-u8-collision-theory",
      title: "Collision theory and factors affecting rate",
      skill: "Explain the effect of temperature, concentration, surface area and catalysts on rate using collision theory.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "Reactions take place when particles **collide**. A collision only leads to a reaction if the particles have **at least the activation energy** and collide with the correct orientation.\n\nThe **rate** of a reaction depends on:\n\n- **Frequency of collisions** — more collisions per second means a faster rate.\n- **Energy of collisions** — a larger fraction of collisions must exceed the activation energy.\n\nAnything that increases the number of successful collisions per second increases the rate.",
          },
          {
            heading: "Factors that change the rate",
            body: "- **Temperature**: particles move faster, so collisions are more frequent **and** more energetic — a large increase in rate.\n- **Concentration or pressure**: more particles per unit volume, so collisions are more frequent.\n- **Surface area**: smaller pieces of solid expose more particles to the reactant, so more collisions occur.\n- **Catalyst**: provides an alternative pathway with a **lower activation energy**, so a larger fraction of collisions are successful. The catalyst is unchanged at the end.",
          },
        ],
        keyFormulas: [
          { name: "Rate", statement: "$\\text{rate} = \\frac{\\text{change in quantity}}{\\text{time}}$" },
          { name: "Collision theory", statement: "rate depends on collision frequency and the fraction of collisions with energy $\\geq E_a$" },
          { name: "Catalyst", statement: "lowers $E_a$ by providing an alternative pathway; not used up" },
        ],
        workedExample: {
          problem: "Marble chips react with hydrochloric acid. Explain why powdered marble reacts faster than large chips of the same mass.",
          solution: "Powdered marble has a larger surface area, so more calcium carbonate particles are in contact with the acid at any time. Collisions between reacting particles are more frequent, so the rate is higher.",
        },
      },
      questions: [
        {
          id: "ech10-u8-collision-theory-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to collision theory, which change would increase the rate of a reaction between a solid and a solution?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Using larger lumps of the solid"
                    },
                    {
                              "id": "b",
                              "text": "Using powdered solid with a larger surface area"
                    },
                    {
                              "id": "c",
                              "text": "Cooling the mixture"
                    },
                    {
                              "id": "d",
                              "text": "Diluting the solution"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Collision theory",
                              "statement": "Rate increases when collisions are more frequent or more energetic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A larger surface area means more particles are exposed, so collisions are more frequent.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Powdered solid with a larger surface area",
          "commonErrors": [
                    "Thinking a catalyst is needed for any rate increase."
          ]
},
        },
        {
          id: "ech10-u8-collision-theory-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the two conditions that must be met for a collision between particles to result in a reaction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Collision theory",
                              "statement": "Collisions must have at least the activation energy and the correct orientation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The particles must collide with at least the activation energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The particles must collide with the correct orientation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Sufficient energy (activation energy) and correct orientation.",
          "commonErrors": [
                    "Omitting the orientation condition."
          ]
},
        },
        {
          id: "ech10-u8-collision-theory-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Powdered calcium carbonate reacts faster with hydrochloric acid than large pieces of calcium carbonate of the same mass. Explain this observation using collision theory.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Surface area",
                              "statement": "Smaller pieces have a larger surface area, so more particles are exposed to the reactant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Powdered calcium carbonate has a larger surface area than large pieces.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "More calcium carbonate particles are in contact with the acid at any moment.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Collisions between acid particles and carbonate particles are more frequent, so the rate is higher.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Larger surface area → more frequent collisions → faster rate.",
          "commonErrors": [
                    "Saying the powder 'reacts more easily' without referring to collision frequency."
          ]
},
        },
        {
          id: "ech10-u8-collision-theory-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student investigates the reaction between magnesium ribbon and hydrochloric acid at three temperatures: $20^\\circ\\text{C}$, $40^\\circ\\text{C}$ and $60^\\circ\\text{C}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict the order of rates of reaction at the three temperatures.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain, using collision theory, why increasing the temperature increases the rate.",
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
                              "name": "Collision theory",
                              "statement": "Higher temperature means faster-moving particles, so collisions are more frequent and more energetic."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rate at $60^\\circ\\text{C}$ > rate at $40^\\circ\\text{C}$ > rate at $20^\\circ\\text{C}$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Particles gain kinetic energy and move faster.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Collisions are more frequent because particles travel faster.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A larger fraction of collisions have energy greater than the activation energy, so more collisions are successful.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Fastest at $60^\\circ\\text{C}$; higher temperature increases collision frequency and the fraction of successful collisions.",
          "commonErrors": [
                    "Mentioning only more frequent collisions and ignoring the energy effect."
          ]
},
        },
        {
          id: "ech10-u8-collision-theory-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Hydrogen peroxide decomposes slowly at room temperature. Adding manganese(IV) oxide makes it decompose rapidly, producing oxygen gas.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the substance that speeds up the reaction and state what happens to it during the reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain, using collision theory, how manganese(IV) oxide increases the rate.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe how you would show that manganese(IV) oxide is a catalyst in this experiment.",
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
                              "name": "Catalyst",
                              "statement": "Speeds up a reaction by lowering activation energy and is not used up."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Manganese(IV) oxide is the catalyst.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It is unchanged at the end of the reaction (its mass stays the same).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It provides an alternative reaction pathway with a lower activation energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A larger fraction of collisions have enough energy, so successful collisions are more frequent.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Filter, dry and weigh the manganese(IV) oxide before and after the reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "If its mass is unchanged, it has not been used up, confirming it is a catalyst.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Manganese(IV) oxide is a catalyst, unchanged at the end; it lowers activation energy.",
          "commonErrors": [
                    "Saying the catalyst is 'used up slowly'."
          ]
},
        },
        {
          id: "ech10-u8-collision-theory-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates the reaction between sodium thiosulfate solution and dilute hydrochloric acid. The reaction produces a yellow precipitate of sulfur, which makes the solution go cloudy. The time taken for a mark underneath the flask to disappear is measured.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the independent variable, dependent variable and two variables that must be controlled.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the time taken is inversely related to the rate of reaction.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Predict and explain the effect of using a more concentrated sodium thiosulfate solution on the time taken.",
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
                              "name": "Rate experiment",
                              "statement": "Rate = change in quantity / time; the disappearing cross method uses the time for a fixed amount of product."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Independent variable: concentration of sodium thiosulfate (or temperature).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Dependent variable: time taken for the cross to disappear.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Controlled variables: volume of acid, temperature, total volume of mixture (any two).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The same amount of sulfur must form before the cross disappears.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A faster rate produces that amount sooner, so the time is shorter.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Time taken decreases (rate increases).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Higher concentration means more thiosulfate particles per unit volume.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Collisions with acid particles are more frequent, so the reaction is faster.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) IV concentration, DV time, control volumes/temperature (b) fixed amount of product forms faster (c) shorter time — more frequent collisions.",
          "commonErrors": [
                    "Reversing the relationship and saying a faster rate takes longer."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u8-rates-graphs",
      title: "Measuring rates and interpreting graphs",
      skill: "Calculate rates from experimental data and interpret graphs of quantity against time for reactions.",
      lesson: {
        sections: [
          {
            heading: "Ways of measuring rate",
            body: "The rate of a reaction can be measured by following the change in quantity of a reactant or product over time:\n\n- **Gas volume**: collect gas in a gas syringe or measure mass loss on a balance.\n- **Colour change**: time how long a colour takes to disappear or appear.\n- **Precipitate**: time how long until a cloudy suspension hides a mark.\n- **Temperature or pH change**: follow with a sensor or indicator.\n\n$$\\text{rate} = \\frac{\\text{change in quantity}}{\\text{time}}$$\n\nFor example, if $40\\text{ cm}^3$ of gas is collected in $20\\text{ s}$, the rate is $2\\text{ cm}^3/\\text{s}$.",
          },
          {
            heading: "Rate graphs",
            body: "A graph of product formed (or reactant used up) against time is steepest at the start, when concentrations are highest, and levels off when a reactant is used up or equilibrium is reached.\n\n- The **gradient** of the curve at any point gives the rate at that moment.\n- A **steeper** curve means a **faster** rate.\n- The curve **levels off** when the reaction stops (a reactant is exhausted) or reaches equilibrium.\n- Raising the temperature or concentration makes the initial gradient steeper.",
          },
        ],
        keyFormulas: [
          { name: "Rate", statement: "$\\text{rate} = \\frac{\\text{change in quantity}}{\\text{time}}$" },
          { name: "Rate from graph", statement: "rate = gradient of quantity–time curve" },
          { name: "Units", statement: "e.g. $\\text{cm}^3/\\text{s}$, $\\text{g/s}$, $\\text{mol/dm}^3\\text{ per s}$" },
        ],
        workedExample: {
          problem: "In an experiment, $60\\text{ cm}^3$ of carbon dioxide is collected in the first $30\\text{ s}$. Calculate the average rate of gas production.",
          solution: "Rate $= \\frac{\\text{volume}}{\\text{time}} = \\frac{60}{30} = 2\\text{ cm}^3/\\text{s}$.",
        },
      },
      questions: [
        {
          id: "ech10-u8-rates-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of units is suitable for measuring the rate of a gas-producing reaction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\text{g}$ and $^\\circ\\text{C}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\text{cm}^3$ and $\\text{s}$"
                    },
                    {
                              "id": "c",
                              "text": "$\\text{mol}$ and $^\\circ\\text{C}$"
                    },
                    {
                              "id": "d",
                              "text": "$\\text{dm}^3$ and $\\text{g}$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Rate",
                              "statement": "Rate = change in quantity per unit time, e.g. $\\text{cm}^3/\\text{s}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rate needs a quantity (e.g. volume in $\\text{cm}^3$) divided by time in seconds.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) $\\text{cm}^3$ and $\\text{s}$",
          "commonErrors": [
                    "Choosing units without a time measurement."
          ]
},
        },
        {
          id: "ech10-u8-rates-graphs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the formula for rate of reaction and describe two practical ways of measuring it in a laboratory experiment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Rate",
                              "statement": "Rate = change in quantity / time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rate $= \\frac{\\text{change in quantity}}{\\text{time}}$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Any two of: gas syringe volume, mass loss on balance, colour-change timing, precipitation timing, pH/temperature sensor.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Rate = quantity change ÷ time; e.g. gas syringe or colour change.",
          "commonErrors": [
                    "Giving only one measurement method."
          ]
},
        },
        {
          id: "ech10-u8-rates-graphs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "When magnesium ribbon reacts with hydrochloric acid, $45\\text{ cm}^3$ of hydrogen gas is collected in $15\\text{ s}$. Calculate the average rate of production of hydrogen, in $\\text{cm}^3/\\text{s}$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Rate",
                              "answer": 3,
                              "tolerance": 0.01,
                              "unit": "cm^3/s"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Rate",
                              "statement": "Rate = change in quantity / time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use rate $= \\frac{\\text{volume}}{\\text{time}}$.",
                              "working": "\\frac{45}{15}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Divide the values.",
                              "working": "= 3\\text{ cm}^3/\\text{s}",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State the units correctly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3\\text{ cm}^3/\\text{s}$",
          "commonErrors": [
                    "Dividing time by volume instead of volume by time."
          ]
},
        },
        {
          id: "ech10-u8-rates-graphs-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student plots the volume of gas produced against time for a reaction between a metal carbonate and acid. The curve rises steeply at first and then levels off.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the curve is steepest at the beginning of the reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the curve levels off.",
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
                              "name": "Rate graphs",
                              "statement": "Gradient = rate; rate falls as reactants are used up."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "At the start the reactant concentrations are highest.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Collisions are most frequent, so the rate (gradient) is greatest.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "A reactant is gradually used up / its concentration falls.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Collisions become less frequent until one reactant is exhausted and the reaction stops, so the curve levels off.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Steepest at start (highest concentration); levels off when a reactant is used up.",
          "commonErrors": [
                    "Saying the curve levels because the temperature falls."
          ]
},
        },
        {
          id: "ech10-u8-rates-graphs-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Magnesium ribbon reacts with excess hydrochloric acid. The mass of the reaction mixture is recorded every $30\\text{ s}$. The mass falls quickly at first, then more slowly, and finally becomes constant.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the mass falls during the reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what the gradient of the mass–time graph represents.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the mass becomes constant.",
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
                              "name": "Rate graphs",
                              "statement": "The gradient gives the rate; mass falls as hydrogen gas escapes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Hydrogen gas is produced and escapes from the mixture.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The escaping gas means the measured mass decreases.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The gradient represents the rate of loss of mass.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It equals the rate at which hydrogen is produced (mass per second).",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "The magnesium (or acid) is completely used up.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "No more gas is produced, so the mass stays constant.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) H2 gas escapes (b) gradient = rate of gas production (c) a reactant is used up.",
          "commonErrors": [
                    "Thinking the mass rises as products form."
          ]
},
        },
        {
          id: "ech10-u8-rates-graphs-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two identical samples of calcium carbonate chips react with excess hydrochloric acid. In experiment 1 the acid is at $20^\\circ\\text{C}$; in experiment 2 it is at $50^\\circ\\text{C}$. Both produce $100\\text{ cm}^3$ of carbon dioxide.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which experiment finishes first and explain why.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe two differences between the two volume–time graphs.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why both graphs end at the same total volume of gas.",
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
                              "name": "Temperature and rate",
                              "statement": "Higher temperature gives a faster rate but the same total product when a reactant is limiting."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Experiment 2 (hotter) finishes first.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Higher temperature increases collision frequency and energy, so the rate is higher.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "The curve for experiment 2 is steeper at the start (faster initial rate).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It reaches $100\\text{ cm}^3$ sooner.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both curves level off at the same volume of $100\\text{ cm}^3$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The shape of curve 1 is less steep throughout.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The same mass of calcium carbonate is used in both experiments.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The acid is in excess, so the same amount of $\\text{CO}_2$ is produced regardless of rate.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Hotter experiment finishes first (b) steeper curve, reaches 100 cm3 sooner, same final volume (c) same limiting reactant mass.",
          "commonErrors": [
                    "Saying the hotter experiment produces more gas."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u8-rates-notes",
      title: "Rates of reaction — revision notes",
      summary: "Rate = change in quantity ÷ time. Collision theory explains temperature, concentration, surface area and catalyst effects.",
      sections: [
        { heading: "Key idea", body: "A reaction needs collisions with at least the activation energy. Rate rises when collisions are more frequent or more energetic." },
        { heading: "Factors", body: "Temperature (big effect), concentration/pressure, surface area, catalyst (lowers $E_a$)." },
        { heading: "Graphs", body: "Quantity–time curves are steepest at the start and level off when a reactant runs out. Gradient = rate." },
      ],
    },
  ],
};
