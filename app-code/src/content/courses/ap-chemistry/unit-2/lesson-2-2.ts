import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apch-u2-lesson-2-2",
  code: "2-2",
  title: "Reaction Kinetics",
  goal: "I CAN write rate laws, determine orders, and analyze activation energy.",
  standards: ["KIN-1"],
  vocabulary: [
    { term: "Rate", definition: "Change in concentration per time: $\\text{rate} = -\\frac{d[A]}{dt}$ for reactants." },
    { term: "Rate law", definition: "Rate $= k[A]^m[B]^n$ — determined experimentally, not from the equation." },
    { term: "Order", definition: "Exponent in the rate law; sum of orders = overall order." },
    { term: "Rate constant", definition: "$k$ — depends on temperature, not concentrations." },
    { term: "Activation energy", definition: "$E_a$ — minimum energy for reaction; higher $E_a$ = slower." },
    { term: "Catalyst", definition: "Lowers $E_a$ without being consumed — speeds reaction." },
    { term: "Collision theory", definition: "Reactions need sufficient energy and proper orientation." },
  ],
  concepts: [
    {
      id: "apch-u2-kinetics",
      title: "Kinetics",
      skill: "Determine rate laws experimentally and explain rate factors.",
      lesson: {
        sections: [
          {
            heading: "Rate laws",
            body: "Rate $= k[A]^m[B]^n$ is found by **initial rates** experiments — vary one concentration at a time and see how rate responds. The exponents (orders) are NOT the stoichiometric coefficients. Overall order = sum of exponents; units of $k$ depend on overall order.",
          },
          {
            heading: "Factors affecting rate",
            body: "**Temperature**: raises $k$ exponentially (Arrhenius). **Concentration**: more collisions per time. **Surface area**: more contact for heterogeneous reactions. **Catalysts**: provide alternative pathway with lower $E_a$ — enzymes are biological catalysts. The **activation energy** barrier explains why reactions need energy input even when exothermic.",
          },
        ],
        keyFormulas: [
          { name: "Rate law", statement: "$\\text{rate} = k[A]^m[B]^n$" },
          { name: "Arrhenius", statement: "$k = Ae^{-E_a/RT}$" },
          { name: "Activation energy", statement: "Energy barrier reactants must overcome" },
        ],
        workedExample: {
          problem: "Rate doubles when $[A]$ doubles and is unchanged when $[B]$ doubles. What is the rate law?",
          solution: "Rate $\\propto [A]^1[B]^0 = k[A]$ — first order in $A$, zero order in $B$. Doubling $A$ doubles rate; $B$ has no effect.",
        },
      },
      questions: [
        {
          id: "apch-u2-kinetics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The rate law is determined by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the balanced equation"
                    },
                    {
                              "id": "b",
                              "text": "experiment"
                    },
                    {
                              "id": "c",
                              "text": "the catalyst"
                    },
                    {
                              "id": "d",
                              "text": "temperature only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rate law",
                              "statement": "Exponents found experimentally, not from stoichiometry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only initial-rates experiments reveal the true rate law — coefficients can mislead.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Experiment",
          "commonErrors": [
                    "Assuming rate law exponents match equation coefficients."
          ]
},
        },
        {
          id: "apch-u2-kinetics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A catalyst speeds a reaction by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "raising temperature"
                    },
                    {
                              "id": "b",
                              "text": "lowering activation energy"
                    },
                    {
                              "id": "c",
                              "text": "increasing concentration"
                    },
                    {
                              "id": "d",
                              "text": "shifting equilibrium"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Catalyst",
                              "statement": "Provides alternative pathway with lower $E_a$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Catalysts don't change $\\Delta H$ or equilibrium — they lower the energy barrier.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Lowering activation energy",
          "commonErrors": [
                    "Thinking catalysts are consumed or change thermodynamics."
          ]
},
        },
        {
          id: "apch-u2-kinetics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rate $= k[A]^2$. If $[A]$ triples, by what factor does the rate change? Enter the factor.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Factor",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Rate law",
                              "statement": "Rate $\\propto [A]^2$; $3^2 = 9$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tripling $[A]$ multiplies rate by $3^2 = 9$ — second-order dependence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Factor $= 9$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$9$",
          "commonErrors": [
                    "Multiplying by $3$ (first-order thinking) instead of $3^2$."
          ]
},
        },
        {
          id: "apch-u2-kinetics-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why increasing temperature speeds up reactions, referencing both collision frequency and energy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Collision theory",
                              "statement": "More collisions per second at higher T."
                    },
                    {
                              "kind": "concept",
                              "name": "Maxwell-Boltzmann",
                              "statement": "More molecules exceed $E_a$ at higher T."
                    },
                    {
                              "kind": "theorem",
                              "name": "Arrhenius",
                              "statement": "$k$ grows exponentially with T."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher temperature increases molecular speed — more collisions per unit time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More importantly, the fraction of molecules with energy $\\ge E_a$ grows exponentially (Arrhenius), so far more successful collisions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both effects multiply — small T changes cause large rate changes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "More collisions + exponentially more molecules exceed $E_a$",
          "commonErrors": [
                    "Only mentioning 'faster molecules' without the energy distribution argument."
          ]
},
        },
      ],
    },
  ],
};
