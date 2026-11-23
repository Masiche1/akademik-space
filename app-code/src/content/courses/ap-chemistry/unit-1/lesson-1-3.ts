import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apch-u1-lesson-1-3",
  code: "1-3",
  title: "Intermolecular Forces and Properties",
  goal: "I CAN compare IMF types and predict physical properties.",
  standards: ["IMF-1"],
  vocabulary: [
    { term: "IMF", definition: "Forces BETWEEN molecules — weaker than bonds, determine physical properties." },
    { term: "London dispersion", definition: "Temporary dipoles in all molecules; strength grows with molar mass/polarizability." },
    { term: "Dipole-dipole", definition: "Attraction between permanent dipoles — polar molecules only." },
    { term: "Hydrogen bonding", definition: "Strong dipole-dipole between H bonded to N, O, or F." },
    { term: "Ion-dipole", definition: "Attraction between ions and polar molecules — dissolving salts." },
    { term: "Viscosity/surface tension", definition: "Properties that increase with IMF strength." },
  ],
  concepts: [
    {
      id: "apch-u1-intermolecular-forces",
      title: "Intermolecular forces",
      skill: "Rank substances by boiling point, solubility, and physical properties.",
      lesson: {
        sections: [
          {
            heading: "Force hierarchy",
            body: "**Ion-dipole** (strongest, for dissolving) $>$ **hydrogen bonding** $>$ **dipole-dipole** $>$ **London dispersion** (weakest, universal). Hydrogen bonding requires H bonded to N/O/F — explains water's unusually high boiling point ($100^\\circ$C vs $\\sim -60^\\circ$C expected).",
          },
          {
            heading: "Property predictions",
            body: "Stronger IMFs mean higher boiling/melting points, greater viscosity, higher surface tension. For nonpolar substances, larger molar mass means stronger London forces and higher boiling points — why $I_2$ is solid while $Cl_2$ is gas.",
          },
        ],
        keyFormulas: [
          { name: "IMF order", statement: "Ion-dipole $>$ H-bond $>$ dipole-dipole $>$ London" },
          { name: "H-bond requirement", statement: "H bonded to N, O, or F" },
        ],
        workedExample: {
          problem: "Rank $H_2O$, $H_2S$, $CH_4$ by boiling point.",
          solution: "$H_2O$ ($100^\\circ$C, hydrogen bonding) $>$ $H_2S$ ($-60^\\circ$C, dipole-dipole) $>$ $CH_4$ ($-161^\\circ$C, only London). Hydrogen bonding dominates.",
        },
      },
      questions: [
        {
          id: "apch-u1-intermolecular-forces-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which IMF is present in ALL molecules?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hydrogen bonding"
                    },
                    {
                              "id": "b",
                              "text": "London dispersion"
                    },
                    {
                              "id": "c",
                              "text": "Dipole-dipole"
                    },
                    {
                              "id": "d",
                              "text": "Ion-dipole"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "London forces",
                              "statement": "Temporary dipoles occur in every molecule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "London dispersion forces are universal; the others require polarity or ions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "London dispersion",
          "commonErrors": [
                    "Thinking only polar molecules have IMFs."
          ]
},
        },
        {
          id: "apch-u1-intermolecular-forces-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does water have an unusually high boiling point?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Strong London forces"
                    },
                    {
                              "id": "b",
                              "text": "Hydrogen bonding"
                    },
                    {
                              "id": "c",
                              "text": "High molar mass"
                    },
                    {
                              "id": "d",
                              "text": "Ionic bonding"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "H-bonding",
                              "statement": "O-H bonds enable strong intermolecular hydrogen bonds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each water molecule H-bonds to neighbors — much stronger than typical dipole forces, raising bp dramatically.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Hydrogen bonding",
          "commonErrors": [
                    "Attributing it to molar mass — $H_2S$ has similar mass but lower bp."
          ]
},
        },
        {
          id: "apch-u1-intermolecular-forces-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which has the higher boiling point: $Br_2$ (M = 160) or $I_2$ (M = 254)? Answer 1 for $Br_2$, 2 for $I_2$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Higher bp",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "London forces",
                              "statement": "Strength scales with molar mass/polarizability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$I_2$ is larger and more polarizable — stronger London forces, higher bp: $I_2$ (2).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$2$ ($I_2$)",
          "commonErrors": [
                    "Ignoring molar mass in London force comparisons."
          ]
},
        },
        {
          id: "apch-u1-intermolecular-forces-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why NaCl dissolves in water but not in hexane, using IMF concepts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Ion-dipole",
                              "statement": "Water's polarity attracts ions strongly."
                    },
                    {
                              "kind": "concept",
                              "name": "'Like dissolves like'",
                              "statement": "Nonpolar hexane can't solvate ions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NaCl is ionic — dissolving requires ion-dipole forces between $Na^+$/$Cl^-$ and polar water molecules.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Water's partial charges hydrate the ions, overcoming the lattice energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hexane is nonpolar — only weak London forces, cannot compete with ionic lattice, so NaCl won't dissolve.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Water's ion-dipole hydration vs hexane's weak London forces",
          "commonErrors": [
                    "Saying 'like dissolves like' without explaining the mechanism."
          ]
},
        },
      ],
    },
  ],
};
