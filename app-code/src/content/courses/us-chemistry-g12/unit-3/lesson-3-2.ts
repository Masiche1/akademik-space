import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "chem12-u3-lesson-3-2",
  code: "3-2",
  title: "Chemical Equilibrium",
  goal: "I CAN explain equilibrium and Le Chatelier's principle.",
  standards: ["HS-PS1-6"],
  vocabulary: [
    { term: "Equilibrium", definition: "Forward and reverse rates equal." },
    { term: "Dynamic", definition: "Reactions still occur." },
    { term: "Le Chatelier", definition: "System shifts to relieve stress." },
    { term: "Concentration", definition: "Amount of substance." },
    { term: "Shift", definition: "Move toward products or reactants." },
  ],
  concepts: [
    {
      id: "chem12-u3-equilibrium",
      title: "Chemical equilibrium",
      skill: "Explain equilibrium and stress responses.",
      lesson: {
        sections: [
          {
            heading: "Dynamic equilibrium",
            body: "At equilibrium, forward and reverse reaction rates are equal — concentrations stay constant but reactions continue. It's dynamic, not static: molecules still react and reform constantly.",
          },
          {
            heading: "Le Chatelier's principle",
            body: "If stress is applied, equilibrium shifts to relieve it: adding reactant shifts right (more product); removing product shifts right; increasing temperature shifts toward endothermic direction; increasing pressure shifts toward fewer gas moles.",
          },
        ],
        keyFormulas: [
          { name: "Equilibrium", statement: "Rates equal." },
          { name: "Le Chatelier", statement: "Shift to relieve stress." },
          { name: "Stress", statement: "Conc, temp, pressure." },
        ],
        workedExample: {
          problem: "For $N_2 + 3H_2 \\rightleftharpoons 2NH_3$ (exothermic), what happens if temperature increases?",
          solution: "Equilibrium shifts left (toward reactants) — heat favors the endothermic reverse direction, producing less NH3.",
        },
      },
      questions: [
        {
          id: "chem12-u3-equilibrium-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At equilibrium, ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reactions stop"
                    },
                    {
                              "id": "b",
                              "text": "forward and reverse rates are equal"
                    },
                    {
                              "id": "c",
                              "text": "only products exist"
                    },
                    {
                              "id": "d",
                              "text": "concentrations are zero"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Equilibrium",
                              "statement": "Equal forward/reverse rates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At equilibrium, forward and reverse rates are equal — it's dynamic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** forward and reverse rates are equal",
          "commonErrors": [
                    "Thinking reactions stop."
          ]
},
        },
        {
          id: "chem12-u3-equilibrium-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Adding more reactant to an equilibrium system shifts it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "left"
                    },
                    {
                              "id": "b",
                              "text": "right toward products"
                    },
                    {
                              "id": "c",
                              "text": "nowhere"
                    },
                    {
                              "id": "d",
                              "text": "to zero"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Le Chatelier",
                              "statement": "System relieves stress."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adding reactant shifts equilibrium right, producing more product.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** right toward products",
          "commonErrors": [
                    "Shifting the wrong way."
          ]
},
        },
        {
          id: "chem12-u3-equilibrium-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Le Chatelier's principle addresses 3 stresses: concentration, temperature, pressure. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Stresses",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Count stresses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 stresses.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Missing temperature."
          ]
},
        },
        {
          id: "chem12-u3-equilibrium-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For the exothermic reaction $2SO_2 + O_2 \\rightleftharpoons 2SO_3$, predict the effect of (a) adding O2 and (b) increasing temperature.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Le Chatelier",
                              "statement": "Shift to relieve stress."
                    },
                    {
                              "kind": "skill",
                              "name": "Apply",
                              "statement": "Conc vs temp effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Adding O2 (reactant) shifts right → more SO3. (b) Increasing temperature favors the endothermic reverse direction → shifts left → less SO3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both predictions correct with reasoning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a) right/more SO3; (b) left/less SO3.**",
          "commonErrors": [
                    "Treating temperature like concentration."
          ]
},
        },
      ],
    },
  ],
};
