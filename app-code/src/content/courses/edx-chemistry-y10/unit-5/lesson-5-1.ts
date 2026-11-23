import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ech10-u5-lesson-5-1",
  code: "5-1",
  title: "Rates of Reaction",
  goal: "I CAN define rate of reaction, measure it experimentally and explain how concentration, surface area, temperature and pressure affect rate using collision theory.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Physical Chemistry", "4CH1 rates of reaction"],
  
  vocabulary: [
    { term: "Rate of reaction", definition: "The change in amount of a reactant or product per unit time." },
    { term: "Collision theory", definition: "Reactions occur when particles collide with sufficient energy and the correct orientation." },
    { term: "Activation energy", definition: "The minimum energy particles need in a collision for a reaction to occur." },
    { term: "Effective collision", definition: "A collision with energy at least equal to the activation energy and the correct orientation." },
    { term: "Surface area", definition: "The total area of a solid that is exposed to other reactants." },
    { term: "Concentration", definition: "The amount of solute dissolved in a given volume of solution." },
  ],
  concepts: [
    {
      id: "ech10-u5-rate-factors",
      title: "Rate of reaction and the factors that affect it",
      skill: "Calculate and compare rates of reaction and explain the effects of concentration, surface area, temperature and pressure.",
      lesson: {
        sections: [
          {
            heading: "What is rate?",
            body: "**Rate of reaction** is the change in the amount of a reactant used up or product formed **per unit of time**. For a gas-producing reaction it is often measured in cm³/s; for a reaction on a balance it is measured in g/s; for a colour change it is measured as 1 ÷ time taken.\nExample: if 48 cm³ of gas is collected in 60 s, rate = 48 ÷ 60 = 0.80 cm³/s.",
          },
          {
            heading: "Factors affecting rate",
            body: "**Concentration**: a higher concentration means more particles in the same volume, so collisions happen more often. **Surface area**: breaking a solid into smaller pieces exposes more particles, so more collisions can occur. **Temperature**: particles have more kinetic energy, move faster and a much larger proportion exceed the activation energy. **Pressure** (for gases): higher pressure means the same number of particles in a smaller volume, so collisions are more frequent.",
          },
        ],
        keyFormulas: [
          { name: "Rate of reaction", statement: "rate = amount of product formed ÷ time (or amount of reactant used ÷ time)" },
          { name: "Units of rate", statement: "cm³/s for gases; g/s for mass loss; s⁻¹ for 1 ÷ time" },
        ],
        workedExample: {
          problem: "A reaction produces 96 cm³ of carbon dioxide in 80 s. Calculate the rate of reaction.",
          solution: "rate = volume of gas ÷ time = 96 ÷ 80 = 1.2 cm³/s.",
        },
      },
      questions: [
        {
          id: "ech10-u5-rate-factors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change would increase the rate of reaction between marble chips and hydrochloric acid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Decrease the temperature of the acid"
                    },
                    {
                              "id": "b",
                              "text": "Use larger marble chips"
                    },
                    {
                              "id": "c",
                              "text": "Increase the concentration of the acid"
                    },
                    {
                              "id": "d",
                              "text": "Add water to the mixture"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Factors affecting rate",
                              "statement": "Higher concentration gives more frequent collisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Increasing acid concentration increases collision frequency; the other options decrease rate or have no benefit.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Increase the concentration of the acid",
          "commonErrors": [
                    "Choosing larger chips — these reduce surface area and slow the reaction."
          ]
},
        },
        {
          id: "ech10-u5-rate-factors-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two ways in which the rate of a reaction that produces a gas could be measured.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rate of reaction",
                              "statement": "Change in amount per unit time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Measure the volume of gas produced over time, e.g. with a gas syringe or burette inverted over water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Measure the loss in mass of the reaction mixture on a balance as gas escapes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Volume of gas per unit time, or loss of mass per unit time.",
          "commonErrors": [
                    "Describing the measurement but not linking it to time."
          ]
},
        },
        {
          id: "ech10-u5-rate-factors-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why increasing the concentration of hydrochloric acid increases the rate of reaction with marble chips.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Concentration and collisions",
                              "statement": "Higher concentration gives more particles per unit volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A higher concentration means more acid particles in the same volume of solution.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Particles collide more frequently with the marble chips.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "More effective collisions occur per second, so the rate increases.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "More particles per volume → more frequent collisions → higher rate.",
          "commonErrors": [
                    "Claiming particles move faster — concentration does not change particle speed."
          ]
},
        },
        {
          id: "ech10-u5-rate-factors-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Powdered zinc reacts noticeably faster than zinc granules of the same mass with the same acid.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what is meant by the rate of a reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the powdered zinc reacts faster than the granules.",
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
                              "name": "Surface area",
                              "statement": "Smaller pieces expose more particles to the other reactant."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rate is the change in amount of reactant or product per unit time.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It can be measured as gas volume per second, mass loss per second or 1 ÷ time for a colour change.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Powder has a much larger surface area than granules of the same mass.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "More zinc particles are in contact with the acid at any moment.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Collisions between zinc and acid particles happen more often, so the rate is higher.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Change in amount per unit time (b) larger surface area → more frequent collisions → faster rate.",
          "commonErrors": [
                    "Saying the powder 'has more zinc' — the mass is identical; only the exposed area differs."
          ]
},
        },
        {
          id: "ech10-u5-rate-factors-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "The reaction N₂ + 3H₂ ⇌ 2NH₃ is carried out at a higher pressure and at a higher temperature.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the effect of the higher pressure on the rate of reaction.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of the higher temperature on the rate of reaction.",
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
                              "name": "Collision theory",
                              "statement": "Rate depends on collision frequency and the proportion of particles exceeding activation energy."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Higher pressure squeezes the gases into a smaller volume.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The same number of particles now occupies less space, so collisions are more frequent.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "More effective collisions per second gives a higher rate.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Higher temperature gives particles more kinetic energy and faster movement.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Collisions occur more frequently.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A much larger proportion of particles have energy at least equal to the activation energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both effects increase the number of effective collisions per second, so the rate rises sharply.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Higher pressure → smaller volume → more frequent collisions (b) Higher temperature → faster particles and far more exceeding Ea → much higher rate.",
          "commonErrors": [
                    "Saying pressure changes particle speed — it changes collision frequency only."
          ]
},
        },
        {
          id: "ech10-u5-rate-factors-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student investigates the effect of sodium thiosulfate concentration on the rate of reaction with hydrochloric acid, using the 'disappearing cross' method.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the independent variable, the dependent variable and three variables that must be controlled.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe the expected observation as the reaction proceeds and how the rate is calculated.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain, using collision theory, why increasing the thiosulfate concentration increases the rate.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Rate investigation",
                              "statement": "Vary one factor, control the rest, measure time for a fixed observable change."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Independent variable: concentration of sodium thiosulfate solution.",
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
                              "reasoning": "Controlled variables: volume of acid, temperature, total volume, same cross position.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A cloudy yellow precipitate of sulfur forms and the cross becomes hidden.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The rate is calculated as 1 ÷ time taken, since the amount of reactant is fixed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Shorter time means a faster rate.",
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
                              "reasoning": "Particles collide with hydrogen ions more frequently.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "More effective collisions occur each second.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Therefore the rate of formation of sulfur increases and the cross disappears sooner.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) conc. of thiosulfate; time for cross to disappear; control acid volume, temperature, total volume (b) sulfur cloud hides cross; rate = 1 ÷ time (c) more particles → more collisions → faster rate.",
          "commonErrors": [
                    "Using the time itself as 'rate' without inverting it — shorter time is a faster rate."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u5-collision-theory",
      title: "Collision theory and catalysts",
      skill: "Explain collision theory, activation energy and the role of catalysts in increasing reaction rate.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "For a chemical reaction to occur, reacting particles must **collide**. Not every collision works: the colliding particles must have energy **at least equal to the activation energy** and must collide with the **correct orientation**. Such a collision is called an **effective collision**. The more effective collisions per second, the faster the reaction.",
          },
          {
            heading: "Activation energy and catalysts",
            body: "**Activation energy** is the minimum energy needed to start a reaction — it is the 'energy barrier' particles must overcome. A **catalyst** provides an alternative reaction pathway with a **lower activation energy**, so a larger proportion of collisions are effective. Catalysts speed up both forward and reverse reactions and are not used up, but they do not change the overall energy change or the position of equilibrium.",
          },
        ],
        keyFormulas: [
          { name: "Effective collision", statement: "collision energy ≥ activation energy AND correct orientation" },
          { name: "Catalyst effect", statement: "provides pathway with lower activation energy; rate increases; catalyst unchanged" },
        ],
        workedExample: {
          problem: "Explain why a catalyst increases the rate of decomposition of hydrogen peroxide but is not used up.",
          solution: "The catalyst (MnO₂) provides an alternative pathway with lower activation energy. More collisions have enough energy to be effective, so rate rises. The catalyst is regenerated unchanged at the end of the reaction.",
        },
      },
      questions: [
        {
          id: "ech10-u5-collision-theory-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a chemical reaction to occur, colliding particles must…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "have any energy at all"
                    },
                    {
                              "id": "b",
                              "text": "have energy at least equal to the activation energy and the correct orientation"
                    },
                    {
                              "id": "c",
                              "text": "be moving in the same direction"
                    },
                    {
                              "id": "d",
                              "text": "be charged particles only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Effective collision",
                              "statement": "Energy ≥ Ea and correct orientation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only collisions meeting both conditions lead to reaction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) energy ≥ activation energy and correct orientation",
          "commonErrors": [
                    "Ignoring the orientation requirement."
          ]
},
        },
        {
          id: "ech10-u5-collision-theory-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define activation energy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Activation energy",
                              "statement": "Minimum energy needed for a reaction to occur."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It is the minimum energy that colliding particles must have.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Collisions with less energy do not cause reaction even if particles collide.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "The minimum energy particles need in a collision for a reaction to occur.",
          "commonErrors": [
                    "Confusing it with the overall energy change of the reaction."
          ]
},
        },
        {
          id: "ech10-u5-collision-theory-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a catalyst increases the rate of a reaction without being used up.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Catalysis",
                              "statement": "Catalysts provide an alternative pathway of lower activation energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The catalyst offers an alternative reaction pathway.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "This pathway has a lower activation energy, so more collisions are effective.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The catalyst is regenerated unchanged, so it is not consumed by the reaction.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Alternative pathway with lower Ea → more effective collisions; catalyst regenerated unchanged.",
          "commonErrors": [
                    "Claiming the catalyst is 'used up' — it is regenerated."
          ]
},
        },
        {
          id: "ech10-u5-collision-theory-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An energy level diagram is drawn for a reaction with and without a catalyst.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the energy level diagram for the uncatalysed reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how the catalysed pathway differs on the same diagram.",
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
                              "name": "Energy level diagrams",
                              "statement": "Ea is the gap from reactants to the peak; catalysts lower the peak only."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Reactants start at a lower energy level; the line rises to a peak representing the activated complex.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The vertical gap from reactants to the peak is the activation energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A second, lower peak is drawn for the catalysed pathway.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The catalysed activation energy is smaller, so more particles can reach it.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The start and finish energy levels (overall energy change) are unchanged.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) reactants → peak (Ea) → products (b) catalysed peak is lower; same overall energy change.",
          "commonErrors": [
                    "Drawing the catalysed line below the reactants — it lowers Ea only, not ΔH."
          ]
},
        },
        {
          id: "ech10-u5-collision-theory-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain why increasing the temperature has a greater effect on the rate of reaction than increasing the concentration.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the effect of concentration on collision frequency.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of temperature on the proportion of effective collisions.",
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
                              "name": "Rate factors compared",
                              "statement": "Temperature changes both collision frequency and the energy distribution of particles."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Higher concentration gives more particles per unit volume.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Collisions are more frequent but the proportion exceeding Ea is unchanged.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Higher temperature increases kinetic energy and particle speed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Collisions are more frequent.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Crucially, a much larger proportion of particles now exceed the activation energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The combined effect on effective collisions per second is therefore much larger, giving a greater rate increase.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Concentration only raises collision frequency; temperature also raises the fraction exceeding Ea — a bigger combined effect.",
          "commonErrors": [
                    "Claiming temperature only makes particles move faster; the energy distribution change is the bigger factor."
          ]
},
        },
        {
          id: "ech10-u5-collision-theory-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student investigates the decomposition of hydrogen peroxide using manganese(IV) oxide as a catalyst, collecting oxygen in a gas syringe.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the independent variable, the dependent variable and three variables to control.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of the manganese(IV) oxide catalyst in this reaction.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Predict and explain the effect on the rate of doubling the temperature and of using twice the mass of catalyst.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Catalysis investigation",
                              "statement": "Control variables; catalyst lowers Ea without being consumed."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Independent variable: temperature of the hydrogen peroxide (or volume/time of oxygen).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Dependent variable: volume of oxygen collected per unit time / rate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Controlled variables: volume and concentration of peroxide, mass of catalyst, same apparatus.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "MnO₂ provides an alternative pathway with lower activation energy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "More collisions are effective each second, so oxygen forms faster.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "MnO₂ is unchanged at the end and can be filtered off and reused.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Doubling temperature raises particle energy and greatly increases the proportion exceeding Ea.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The rate increases significantly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Doubling the catalyst mass provides more surface for the alternative pathway.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "More effective collisions occur, so the rate increases (though not necessarily doubles).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) temperature; O₂ volume per time; control peroxide volume/conc., catalyst mass (b) lower Ea pathway, regenerated (c) both increase rate; temperature via Ea, catalyst via more active surface.",
          "commonErrors": [
                    "Assuming doubling catalyst mass doubles rate — rate depends on available surface area."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u5-rates-notes",
      title: "Rates of reaction — notes",
      summary: "Rate = amount ÷ time; concentration, surface area, temperature and pressure raise collision frequency; temperature also raises the proportion exceeding activation energy; catalysts lower Ea.",
      sections: [
        { heading: "Key idea", body: "Rate measures how fast reactants are used or products formed. It can be found from gas volume per second, mass loss per second, or 1 ÷ time for a colour change." },
        { heading: "Collision theory", body: "Only collisions with energy ≥ activation energy and the correct orientation are effective. More effective collisions per second = faster reaction." },
        { heading: "Factors", body: "Concentration, surface area and pressure raise collision frequency. Temperature does that AND increases the fraction of particles exceeding Ea — the biggest effect. Catalysts lower Ea without being used up." },
      ],
    },
  ],
};
