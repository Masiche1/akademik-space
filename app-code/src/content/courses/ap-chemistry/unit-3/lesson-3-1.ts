import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apch-u3-lesson-3-1",
  code: "3-1",
  title: "Thermodynamics: Enthalpy, Entropy, Gibbs",
  goal: "I CAN apply $\\Delta H$, $\\Delta S$, and $\\Delta G$ to predict spontaneity.",
  standards: ["THM-1"],
  vocabulary: [
    { term: "Enthalpy", definition: "$\\Delta H$ — heat change at constant pressure; exothermic $<0$, endothermic $>0$." },
    { term: "Entropy", definition: "$\\Delta S$ — disorder/randomness change; positive = more disorder." },
    { term: "Gibbs free energy", definition: "$\\Delta G = \\Delta H - T\\Delta S$ — spontaneity criterion." },
    { term: "Spontaneous", definition: "$\\Delta G < 0$ — proceeds without outside energy input." },
    { term: "Nonspontaneous", definition: "$\\Delta G > 0$ — requires energy input." },
    { term: "Hess's law", definition: "Total $\\Delta H$ is path-independent — sum of steps." },
  ],
  concepts: [
    {
      id: "apch-u3-thermodynamics",
      title: "Thermodynamics",
      skill: "Predict spontaneity from $\\Delta H$, $\\Delta S$, and temperature.",
      lesson: {
        sections: [
          {
            heading: "Energy changes",
            body: "$\\Delta H < 0$ (exothermic) releases heat — energetically favorable. $\\Delta S > 0$ increases disorder — entropically favorable. Neither alone guarantees spontaneity; $\\Delta G = \\Delta H - T\\Delta S$ combines both.",
          },
          {
            heading: "Spontaneity rules",
            body: "$\\Delta G < 0$ spontaneous. Sign depends on temperature: exothermic + entropy increase ($\\Delta H<0, \\Delta S>0$) is spontaneous at ALL temperatures; endothermic + entropy decrease is never spontaneous; the mixed cases depend on whether $T\\Delta S$ or $\\Delta H$ dominates.",
          },
        ],
        keyFormulas: [
          { name: "Gibbs", statement: "$\\Delta G = \\Delta H - T\\Delta S$" },
          { name: "Spontaneous", statement: "$\\Delta G < 0$" },
        ],
        workedExample: {
          problem: "$\\Delta H = -50$ kJ, $\\Delta S = +0.1$ kJ/K, $T = 298$ K. Is the reaction spontaneous?",
          solution: "$\\Delta G = -50 - 298(0.1) = -50 - 29.8 = -79.8$ kJ $< 0$ — spontaneous (both factors favorable).",
        },
      },
      questions: [
        {
          id: "apch-u3-thermodynamics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reaction is spontaneous when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\Delta G > 0$"
                    },
                    {
                              "id": "b",
                              "text": "$\\Delta G < 0$"
                    },
                    {
                              "id": "c",
                              "text": "$\\Delta H > 0$"
                    },
                    {
                              "id": "d",
                              "text": "$\\Delta S < 0$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Spontaneity",
                              "statement": "$\\Delta G$ determines spontaneity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative $\\Delta G$ means the process proceeds without energy input.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\Delta G < 0$",
          "commonErrors": [
                    "Confusing spontaneity with reaction rate."
          ]
},
        },
        {
          id: "apch-u3-thermodynamics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a reaction with $\\Delta H < 0$ and $\\Delta S > 0$, spontaneity is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "never"
                    },
                    {
                              "id": "b",
                              "text": "always"
                    },
                    {
                              "id": "c",
                              "text": "only at high T"
                    },
                    {
                              "id": "d",
                              "text": "only at low T"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Gibbs",
                              "statement": "$\\Delta G = \\Delta H - T\\Delta S$: both terms negative $\\Rightarrow$ always negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\Delta H < 0$ and $-T\\Delta S < 0$ (since $\\Delta S > 0$) — $\\Delta G < 0$ at all temperatures.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Always spontaneous",
          "commonErrors": [
                    "Thinking temperature matters when both factors align."
          ]
},
        },
        {
          id: "apch-u3-thermodynamics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\Delta H = +40$ kJ, $\\Delta S = +0.2$ kJ/K. At what temperature does $\\Delta G = 0$? Enter K.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$T$",
                              "answer": 200
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Set $\\Delta G = 0$",
                              "statement": "$\\Delta H = T\\Delta S \\Rightarrow T = \\frac{\\Delta H}{\\Delta S}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$T = \\frac{40}{0.2} = 200$ K — above this, entropy term dominates and reaction becomes spontaneous.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$T = 200$ K.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$200$ K",
          "commonErrors": [
                    "Dividing in the wrong order or sign error."
          ]
},
        },
        {
          id: "apch-u3-thermodynamics-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why ice melting at room temperature is spontaneous despite being endothermic ($\\Delta H > 0$).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Entropy",
                              "statement": "Solid $\\to$ liquid increases disorder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Melting ice has $\\Delta H > 0$ (endothermic) but $\\Delta S > 0$ — liquid water is more disordered than ice.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "At room temperature ($\\sim 298$ K), the $T\\Delta S$ term exceeds $\\Delta H$: $\\Delta G = \\Delta H - T\\Delta S < 0$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Entropy drives spontaneity even against enthalpy — heat from surroundings supplies the energy.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\Delta G < 0$ via entropy term dominating",
          "commonErrors": [
                    "Claiming endothermic reactions can't be spontaneous."
          ]
},
        },
      ],
    },
  ],
};
