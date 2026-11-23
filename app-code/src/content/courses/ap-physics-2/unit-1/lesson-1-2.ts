import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "app2-u1-lesson-1-2",
  code: "1-2",
  title: "Heat and Thermodynamics",
  goal: "I CAN apply heat transfer, gas laws, and thermodynamic processes.",
  standards: ["THM-1"],
  vocabulary: [
    { term: "Heat", definition: "Energy transferred due to temperature difference — not 'contained' in objects." },
    { term: "Specific heat", definition: "$Q = mc\\Delta T$ — energy to change temperature." },
    { term: "Conduction", definition: "Heat transfer through direct contact — solids, metals best." },
    { term: "Convection", definition: "Heat transfer by fluid circulation — liquids/gases." },
    { term: "Radiation", definition: "Heat transfer by electromagnetic waves — needs no medium." },
    { term: "Ideal gas law", definition: "$PV = nRT$ — relates pressure, volume, temperature, moles." },
    { term: "First law of thermo", definition: "$\\Delta U = Q - W$ — internal energy change = heat in minus work done." },
  ],
  concepts: [
    {
      id: "app2-u1-heat-thermo",
      title: "Heat and thermodynamics",
      skill: "Apply heat equations, gas laws, and energy conservation.",
      lesson: {
        sections: [
          {
            heading: "Heat transfer",
            body: "**Conduction**: molecular collisions pass energy (best in metals). **Convection**: fluid circulation carries heat (boiling water, weather). **Radiation**: EM waves — works in vacuum (sunlight). All three drive systems toward thermal equilibrium.",
          },
          {
            heading: "Gas laws and thermo",
            body: "$PV = nRT$ links gas variables — at constant T, $P \\propto 1/V$ (Boyle); at constant P, $V \\propto T$ (Charles). **First law**: $\\Delta U = Q - W$ — heat added minus work done equals internal energy change. Isothermal ($\\Delta T = 0$, $\\Delta U = 0$), adiabatic (no heat exchange), isobaric, isochoric are the four standard processes.",
          },
        ],
        keyFormulas: [
          { name: "Heat", statement: "$Q = mc\\Delta T$" },
          { name: "Ideal gas", statement: "$PV = nRT$" },
          { name: "First law", statement: "$\\Delta U = Q - W$" },
        ],
        workedExample: {
          problem: "How much heat raises $2$ kg of water ($c = 4186$ J/kg·K) by $10$°C?",
          solution: "$Q = mc\\Delta T = 2 \\times 4186 \\times 10 = 83{,}720$ J $\\approx 83.7$ kJ.",
        },
      },
      questions: [
        {
          id: "app2-u1-heat-thermo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heat always transfers ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hot to cold"
                    },
                    {
                              "id": "b",
                              "text": "cold to hot"
                    },
                    {
                              "id": "c",
                              "text": "randomly"
                    },
                    {
                              "id": "d",
                              "text": "only upward"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "2nd law direction",
                              "statement": "Spontaneous heat flow is hot $\\to$ cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heat flows spontaneously from higher to lower temperature — reversing requires work (refrigerators).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Hot to cold",
          "commonErrors": [
                    "Thinking heat rises like a substance — direction is temperature-determined."
          ]
},
        },
        {
          id: "app2-u1-heat-thermo-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an isothermal process, ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\Delta U > 0$"
                    },
                    {
                              "id": "b",
                              "text": "$\\Delta T = 0$ and $\\Delta U = 0$"
                    },
                    {
                              "id": "c",
                              "text": "$Q = 0$"
                    },
                    {
                              "id": "d",
                              "text": "$W = 0$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Isothermal",
                              "statement": "Constant temperature — ideal gas internal energy depends only on T."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\Delta T = 0 \\Rightarrow \\Delta U = 0$; heat in equals work out ($Q = W$).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Confusing isothermal with adiabatic ($Q=0$)."
          ]
},
        },
        {
          id: "app2-u1-heat-thermo-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas at constant temperature has $P_1 = 2$ atm, $V_1 = 3$ L. If compressed to $V_2 = 1$ L, find $P_2$ (Boyle's law). Enter atm.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$P_2$",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Boyle's law",
                              "statement": "$P_1V_1 = P_2V_2$ at constant T."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$P_2 = \\frac{2 \\times 3}{1} = 6$ atm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$P_2 = 6$ atm.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$6$ atm",
          "commonErrors": [
                    "Inverting the proportion or using Charles's law."
          ]
},
        },
        {
          id: "app2-u1-heat-thermo-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Use the first law of thermodynamics to explain why a gas heats up when compressed adiabatically.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "First law",
                              "statement": "$\\Delta U = Q - W$."
                    },
                    {
                              "kind": "definition",
                              "name": "Adiabatic",
                              "statement": "$Q = 0$ — no heat exchange."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adiabatic means $Q = 0$, so $\\Delta U = -W$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compressing the gas means work is done ON it — $W < 0$ in the convention where $W$ is work done BY gas.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\Delta U = -W > 0$ — internal energy rises, temperature increases. This is why diesel engines need no spark plug.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\Delta U = -W > 0$ — compression heats gas",
          "commonErrors": [
                    "Sign confusion on $W$ — clarify work done ON vs BY the gas."
          ]
},
        },
      ],
    },
  ],
};
