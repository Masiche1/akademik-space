import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apch-u1-lesson-1-2",
  code: "1-2",
  title: "Periodic Trends",
  goal: "I CAN predict trends in atomic radius, ionization energy, and electronegativity.",
  standards: ["PER-1"],
  vocabulary: [
    { term: "Atomic radius", definition: "Size of the atom; decreases across a period, increases down a group." },
    { term: "Ionization energy", definition: "Energy required to remove an electron; increases across, decreases down." },
    { term: "Electronegativity", definition: "Ability to attract bonding electrons; increases across, decreases down." },
    { term: "Shielding effect", definition: "Inner electrons reduce nuclear pull on outer electrons." },
    { term: "Effective nuclear charge", definition: "Net positive charge felt by valence electrons: $Z_{eff} = Z - \\text{shielding}$." },
  ],
  concepts: [
    {
      id: "apch-u1-periodic-trends",
      title: "Periodic trends",
      skill: "Rank elements by radius, ionization energy, and electronegativity.",
      lesson: {
        sections: [
          {
            heading: "Across a period",
            body: "Moving left to right, protons are added to the same shell — $Z_{eff}$ rises, pulling electrons closer (radius shrinks) and making electrons harder to remove (ionization energy rises) or share (electronegativity rises). Noble gases are the peak.",
          },
          {
            heading: "Down a group",
            body: "Each step adds a shell — radius grows despite more protons. Outer electrons are farther and more shielded, so ionization energy and electronegativity decrease. Fluorine is the most electronegative element; cesium/francium the least (excluding noble gases).",
          },
        ],
        keyFormulas: [
          { name: "Trend", statement: "Radius: $\\downarrow$ across, $\\uparrow$ down" },
          { name: "IE/EN", statement: "$\\uparrow$ across, $\\downarrow$ down" },
        ],
        workedExample: {
          problem: "Rank Na, Mg, Al by atomic radius (same period).",
          solution: "Radius decreases across a period: Na $>$ Mg $>$ Al — each added proton pulls electrons tighter.",
        },
      },
      questions: [
        {
          id: "apch-u1-periodic-trends-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Atomic radius generally ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "increases across a period"
                    },
                    {
                              "id": "b",
                              "text": "decreases across a period"
                    },
                    {
                              "id": "c",
                              "text": "stays constant"
                    },
                    {
                              "id": "d",
                              "text": "depends only on mass"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Periodic trend",
                              "statement": "$Z_{eff}$ increases across a period."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "More protons in the same shell pull electrons closer — radius shrinks left to right.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Decreases across",
          "commonErrors": [
                    "Thinking more electrons always means bigger atoms."
          ]
},
        },
        {
          id: "apch-u1-periodic-trends-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which has the highest electronegativity: F, Cl, or Br?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Br"
                    },
                    {
                              "id": "b",
                              "text": "Cl"
                    },
                    {
                              "id": "c",
                              "text": "F"
                    },
                    {
                              "id": "d",
                              "text": "They are equal"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "EN trend",
                              "statement": "EN increases across and decreases down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "F is top-right of the halogens — smallest atom, least shielding, highest EN.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "F",
          "commonErrors": [
                    "Thinking heavier halogens are more electronegative."
          ]
},
        },
        {
          id: "apch-u1-periodic-trends-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Ionization energy of Li is $520$ kJ/mol and Na is $496$ kJ/mol. Which is easier to ionize? Answer 1 for Li, 2 for Na.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Easier",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "IE trend",
                              "statement": "IE decreases down a group."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Na is below Li — its valence electron is farther and more shielded, so easier to remove: Na (2).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$2$ (Na)",
          "commonErrors": [
                    "Reversing the down-group trend."
          ]
},
        },
        {
          id: "apch-u1-periodic-trends-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why noble gases have the highest ionization energies in their periods.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Stable octet",
                              "statement": "Full valence shell resists electron loss."
                    },
                    {
                              "kind": "theorem",
                              "name": "Trend",
                              "statement": "IE increases across periods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Noble gases have completely filled valence shells — maximum stability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They also have the highest $Z_{eff}$ in their period, pulling electrons tightest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both factors make electron removal hardest — hence peak IE before the period resets.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Full shell + highest $Z_{eff}$ in period",
          "commonErrors": [
                    "Only citing the octet without the nuclear charge factor."
          ]
},
        },
      ],
    },
  ],
};
