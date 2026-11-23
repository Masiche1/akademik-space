import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apch-u3-lesson-3-2",
  code: "3-2",
  title: "Electrochemistry",
  goal: "I CAN balance redox reactions and predict electrochemical cells.",
  standards: ["ELC-1"],
  vocabulary: [
    { term: "Oxidation", definition: "Loss of electrons — oxidation number increases." },
    { term: "Reduction", definition: "Gain of electrons — oxidation number decreases." },
    { term: "Redox", definition: "Simultaneous oxidation and reduction." },
    { term: "Anode", definition: "Electrode where oxidation occurs (negative in voltaic, positive in electrolytic)." },
    { term: "Cathode", definition: "Electrode where reduction occurs (positive in voltaic, negative in electrolytic)." },
    { term: "Voltaic cell", definition: "Spontaneous redox generating electrical energy." },
    { term: "Electrolytic cell", definition: "Nonspontaneous redox driven by external power." },
  ],
  concepts: [
    {
      id: "apch-u3-electrochemistry",
      title: "Electrochemistry",
      skill: "Identify redox processes and cell types.",
      lesson: {
        sections: [
          {
            heading: "Redox basics",
            body: "Oxidation = electron loss (OIL RIG), reduction = electron gain. Balance half-reactions separately: balance atoms, then add electrons to balance charge, then combine so electrons cancel. In a **voltaic** cell, spontaneous redox produces current — anode is negative (oxidation), cathode positive (reduction).",
          },
          {
            heading: "Cell types",
            body: "**Voltaic** (galvanic): $\\Delta G < 0$, $E > 0$, spontaneous — batteries. **Electrolytic**: $\\Delta G > 0$, driven by external voltage — electrolysis, charging. **Concentration cells**: same electrodes, different concentrations generate voltage.",
          },
        ],
        keyFormulas: [
          { name: "OIL RIG", statement: "Oxidation Is Loss, Reduction Is Gain of electrons" },
          { name: "Cell potential", statement: "$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$" },
        ],
        workedExample: {
          problem: "Zinc metal in $CuSO_4$ solution: $Zn + Cu^{2+} \\to Zn^{2+} + Cu$. Which is oxidized?",
          solution: "Zn goes $0 \\to +2$ (loses electrons = oxidized, anode). $Cu^{2+}$ goes $+2 \\to 0$ (gains electrons = reduced, cathode). Zinc dissolves, copper plates out — spontaneous voltaic.",
        },
      },
      questions: [
        {
          id: "apch-u3-electrochemistry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a voltaic cell, oxidation occurs at the ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cathode"
                    },
                    {
                              "id": "b",
                              "text": "anode"
                    },
                    {
                              "id": "c",
                              "text": "salt bridge"
                    },
                    {
                              "id": "d",
                              "text": "electrolyte"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Anode",
                              "statement": "Oxidation always occurs at the anode."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Anode = oxidation in both cell types; it's the negative electrode in voltaic cells.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Anode",
          "commonErrors": [
                    "Memorizing 'anode = negative' which flips for electrolytic cells — remember anode = oxidation."
          ]
},
        },
        {
          id: "apch-u3-electrochemistry-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$Zn \\to Zn^{2+} + 2e^-$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reduction"
                    },
                    {
                              "id": "b",
                              "text": "oxidation"
                    },
                    {
                              "id": "c",
                              "text": "neutralization"
                    },
                    {
                              "id": "d",
                              "text": "disproportionation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Oxidation",
                              "statement": "Loss of electrons; oxidation number rises $0 \\to +2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Zn loses electrons — oxidation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Oxidation",
          "commonErrors": [
                    "Thinking gaining positive charge means reduction."
          ]
},
        },
        {
          id: "apch-u3-electrochemistry-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "In $2Al + 3Cu^{2+} \\to 2Al^{3+} + 3Cu$, how many electrons does each Al atom lose? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Electrons",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Oxidation number",
                              "statement": "Al: $0 \\to +3$ loses $3$ electrons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aluminum goes from $0$ to $+3$ — each Al loses $3$ electrons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$3$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Using the coefficient $2$ instead of the charge change."
          ]
},
        },
        {
          id: "apch-u3-electrochemistry-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Distinguish voltaic and electrolytic cells in terms of spontaneity, electrode signs, and energy flow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Voltaic",
                              "statement": "Spontaneous, $E > 0$, chemical $\\to$ electrical energy."
                    },
                    {
                              "kind": "comparison",
                              "name": "Electrolytic",
                              "statement": "Nonspontaneous, external power, electrical $\\to$ chemical energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Voltaic: $\\Delta G < 0$, spontaneous redox produces current; anode negative, cathode positive; batteries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Electrolytic: $\\Delta G > 0$, external voltage drives nonspontaneous reaction; anode positive, cathode negative; electrolysis/charging.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key insight: anode is ALWAYS oxidation but its charge sign flips between cell types.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Voltaic = spontaneous/chemical→electrical; electrolytic = driven/electrical→chemical",
          "commonErrors": [
                    "Swapping the electrode signs or energy directions."
          ]
},
        },
      ],
    },
  ],
};
