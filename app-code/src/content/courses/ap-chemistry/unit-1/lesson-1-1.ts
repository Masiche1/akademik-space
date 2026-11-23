import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apch-u1-lesson-1-1",
  code: "1-1",
  title: "Atomic Structure and Electron Configuration",
  goal: "I CAN describe subatomic particles, write electron configurations, and apply periodic trends.",
  standards: ["ATO-1"],
  vocabulary: [
    { term: "Proton", definition: "Positively charged particle in the nucleus; defines the element." },
    { term: "Neutron", definition: "Neutral particle in the nucleus; contributes mass." },
    { term: "Electron", definition: "Negatively charged particle in orbitals; determines chemistry." },
    { term: "Atomic number", definition: "Number of protons — identifies the element." },
    { term: "Mass number", definition: "Protons + neutrons in the nucleus." },
    { term: "Electron configuration", definition: "Arrangement of electrons in orbitals, e.g., $1s^2 2s^2 2p^6$." },
    { term: "Orbital", definition: "Region of space where an electron is most likely found; holds max $2$ electrons." },
  ],
  concepts: [
    {
      id: "apch-u1-atomic-structure",
      title: "Atomic structure",
      skill: "Relate atomic composition to identity and electron arrangement.",
      lesson: {
        sections: [
          {
            heading: "Subatomic particles",
            body: "Protons ($+1$) and neutrons (0) form the nucleus; electrons ($-1$) occupy orbitals outside. Atomic number $Z$ = protons = electrons in a neutral atom; mass number $A$ = protons + neutrons. Isotopes share $Z$ but differ in neutrons.",
          },
          {
            heading: "Electron configuration",
            body: "Electrons fill orbitals by the aufbau principle: $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, \\ldots$ — note $4s$ fills before $3d$. Each orbital holds max $2$ electrons with opposite spins (Pauli). Configurations explain periodicity: same valence configuration = same group = similar chemistry.",
          },
        ],
        keyFormulas: [
          { name: "Neutral atom", statement: "$Z = \\text{protons} = \\text{electrons}$" },
          { name: "Mass number", statement: "$A = \\text{protons} + \\text{neutrons}$" },
          { name: "Orbital capacity", statement: "Each orbital holds max $2$ electrons" },
        ],
        workedExample: {
          problem: "Write the electron configuration of oxygen (atomic number $8$).",
          solution: "Fill by aufbau: $1s^2 2s^2 2p^4$ — total $2 + 2 + 4 = 8$ electrons. Noble gas shorthand: $[He]\\,2s^2 2p^4$.",
        },
      },
      questions: [
        {
          id: "apch-u1-atomic-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The atomic number of an element equals its number of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "neutrons"
                    },
                    {
                              "id": "b",
                              "text": "protons"
                    },
                    {
                              "id": "c",
                              "text": "electrons + neutrons"
                    },
                    {
                              "id": "d",
                              "text": "orbitals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Atomic number",
                              "statement": "$Z$ = proton count = element identity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Atomic number counts protons; in neutral atoms it also equals electrons.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Protons",
          "commonErrors": [
                    "Confusing atomic number with mass number."
          ]
},
        },
        {
          id: "apch-u1-atomic-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which electron configuration is correct for sodium ($Z = 11$)?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$1s^2 2s^2 2p^6 3s^2 3p^1$"
                    },
                    {
                              "id": "b",
                              "text": "$1s^2 2s^2 2p^6 3s^1$"
                    },
                    {
                              "id": "c",
                              "text": "$1s^2 2s^2 2p^6 3p^3$"
                    },
                    {
                              "id": "d",
                              "text": "$1s^2 2s^2 2p^5 3s^2$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Aufbau",
                              "statement": "Fill $1s \\to 2s \\to 2p \\to 3s$ in order: $2+2+6+1 = 11$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1s^2 2s^2 2p^6 3s^1$ totals $11$ electrons — sodium's single valence electron explains its reactivity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$1s^2 2s^2 2p^6 3s^1$",
          "commonErrors": [
                    "Putting electrons in $3p$ before $3s$ fills."
          ]
},
        },
        {
          id: "apch-u1-atomic-structure-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "An atom has $6$ protons and $8$ neutrons. What is its mass number? Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$A$",
                              "answer": 14
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Mass number",
                              "statement": "$A = Z + N = 6 + 8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$A = 6 + 8 = 14$ — this is carbon-14.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$A = 14$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$14$",
          "commonErrors": [
                    "Adding atomic number twice or forgetting neutrons."
          ]
},
        },
        {
          id: "apch-u1-atomic-structure-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why elements in the same group have similar chemical properties, referencing electron configuration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Valence electrons",
                              "statement": "Outer-shell electrons determine reactivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Elements in a group share the same number of valence electrons (e.g., all Group 1 have $ns^1$).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Chemical bonding involves valence electrons — same valence configuration means same bonding behavior and similar compounds.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Inner electrons are shielded and don't participate, so they don't affect chemistry.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Same valence electron configuration = similar chemistry",
          "commonErrors": [
                    "Saying all electrons matter equally."
          ]
},
        },
      ],
    },
  ],
};
