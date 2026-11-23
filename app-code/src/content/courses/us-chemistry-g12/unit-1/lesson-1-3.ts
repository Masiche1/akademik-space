import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "chem12-u1-lesson-1-3",
  code: "1-3",
  title: "Electron Configuration",
  goal: "I CAN write electron configurations and relate them to chemical properties.",
  standards: ["HS-PS1-1"],
  vocabulary: [
    { term: "Electron config", definition: "Electron arrangement." },
    { term: "Orbital", definition: "Electron region." },
    { term: "Valence electrons", definition: "Outer shell electrons." },
    { term: "Aufbau", definition: "Fill order principle." },
    { term: "Hund's rule", definition: "Electrons spread singly first." },
  ],
  concepts: [
    {
      id: "chem12-u1-electron-config",
      title: "Electron configuration",
      skill: "Write configurations and link to reactivity.",
      lesson: {
        sections: [
          {
            heading: "Writing configurations",
            body: "Electrons fill orbitals by energy order (Aufbau principle): 1s, 2s, 2p, 3s, 3p, 4s, 3d... Example: oxygen (8 electrons) = 1s² 2s² 2p⁴. Valence electrons (outer shell) determine chemical behavior.",
          },
          {
            heading: "Config and properties",
            body: "Elements in the same group have similar valence configurations → similar properties. Alkali metals (group 1) have 1 valence electron → very reactive. Noble gases have full outer shells → inert.",
          },
        ],
        keyFormulas: [
          { name: "Aufbau", statement: "1s 2s 2p 3s 3p 4s 3d..." },
          { name: "Valence", statement: "Outer electrons." },
          { name: "Group 1", statement: "ns¹ → reactive." },
        ],
        workedExample: {
          problem: "Write the electron configuration for sodium (11 electrons).",
          solution: "1s² 2s² 2p⁶ 3s¹ — the single 3s electron makes sodium very reactive.",
        },
      },
      questions: [
        {
          id: "chem12-u1-electron-config-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Valence electrons are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "inner shell electrons"
                    },
                    {
                              "id": "b",
                              "text": "outer shell electrons"
                    },
                    {
                              "id": "c",
                              "text": "protons"
                    },
                    {
                              "id": "d",
                              "text": "all electrons"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Valence",
                              "statement": "Outer shell electrons determine reactivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Valence electrons are the outermost shell electrons.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** outer shell electrons",
          "commonErrors": [
                    "Thinking all electrons count."
          ]
},
        },
        {
          id: "chem12-u1-electron-config-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sodium's electron configuration ends in ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3p⁶"
                    },
                    {
                              "id": "b",
                              "text": "3s¹"
                    },
                    {
                              "id": "c",
                              "text": "2p⁶"
                    },
                    {
                              "id": "d",
                              "text": "4s¹"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Sodium",
                              "statement": "11e⁻: 1s²2s²2p⁶3s¹."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Na (Z=11): 1s² 2s² 2p⁶ 3s¹ — ends with single 3s electron.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** 3s¹",
          "commonErrors": [
                    "Ending at argon core."
          ]
},
        },
        {
          id: "chem12-u1-electron-config-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Noble gases have a full outer shell of 8 electrons (octet). How many valence electrons is that?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Electrons",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Octet",
                              "statement": "8 valence electrons = stable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 valence electrons.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Saying 2 (helium's shell)."
          ]
},
        },
        {
          id: "chem12-u1-electron-config-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why alkali metals (group 1) are extremely reactive using electron configuration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Valence",
                              "statement": "1 outer electron."
                    },
                    {
                              "kind": "skill",
                              "name": "Reactivity",
                              "statement": "Easy to lose electron."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alkali metals have configuration ending ns¹ — just one valence electron. Losing it achieves a stable octet, so they react violently to donate that electron (e.g., Na + water).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Links 1 valence electron to reactivity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**ns¹ → easily loses electron → very reactive.**",
          "commonErrors": [
                    "Not connecting config to reactivity."
          ]
},
        },
      ],
    },
  ],
};
