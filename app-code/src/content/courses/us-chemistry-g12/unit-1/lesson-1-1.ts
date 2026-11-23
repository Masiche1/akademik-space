import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "chem12-u1-lesson-1-1",
  code: "1-1",
  title: "Atomic Structure",
  goal: "I CAN describe atomic structure and calculate subatomic particles.",
  standards: ["HS-PS1-1"],
  vocabulary: [
    { term: "Proton", definition: "Positive particle in nucleus." },
    { term: "Neutron", definition: "Neutral particle in nucleus." },
    { term: "Electron", definition: "Negative particle in orbitals." },
    { term: "Atomic number", definition: "Proton count." },
    { term: "Mass number", definition: "Protons + neutrons." },
  ],
  concepts: [
    {
      id: "chem12-u1-atomic-structure",
      title: "Atomic structure",
      skill: "Describe atoms and calculate particle counts.",
      lesson: {
        sections: [
          {
            heading: "Subatomic particles",
            body: "Atoms have protons (positive, in nucleus), neutrons (neutral, in nucleus) and electrons (negative, in orbitals). Atomic number = proton count (defines the element). Mass number = protons + neutrons.",
          },
          {
            heading: "Isotopes and ions",
            body: "Isotopes are same element with different neutron counts (e.g., C-12, C-14). Ions are charged atoms — lost/gained electrons. Electron configuration describes electron arrangement in shells/orbitals.",
          },
        ],
        keyFormulas: [
          { name: "Atomic number", statement: "Protons." },
          { name: "Mass number", statement: "p + n." },
          { name: "Neutrons", statement: "Mass - atomic #." },
        ],
        workedExample: {
          problem: "An atom has 6 protons and 8 neutrons. What is its atomic number, mass number and electron count?",
          solution: "Atomic number = 6 (carbon), mass number = 14, electrons = 6 (neutral atom).",
        },
      },
      questions: [
        {
          id: "chem12-u1-atomic-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The atomic number equals the number of ___.",
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
                              "text": "electrons + protons"
                    },
                    {
                              "id": "d",
                              "text": "nucleons"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Atomic number",
                              "statement": "Proton count defines element."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Atomic number = number of protons.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** protons",
          "commonErrors": [
                    "Confusing with mass number."
          ]
},
        },
        {
          id: "chem12-u1-atomic-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An atom has atomic number 8 and mass number 16. How many neutrons?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "16"
                    },
                    {
                              "id": "c",
                              "text": "24"
                    },
                    {
                              "id": "d",
                              "text": "4"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Neutrons",
                              "statement": "$16 - 8 = 8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Neutrons = mass number - atomic number = $16 - 8 = 8$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** 8",
          "commonErrors": [
                    "Adding instead of subtracting."
          ]
},
        },
        {
          id: "chem12-u1-atomic-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A neutral atom has 11 protons. How many electrons?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Electrons",
                              "answer": 11
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Neutral atom",
                              "statement": "Electrons = protons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Neutral atom: 11 electrons balance 11 protons.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$11$",
          "commonErrors": [
                    "Thinking electrons = neutrons."
          ]
},
        },
        {
          id: "chem12-u1-atomic-structure-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Distinguish an isotope from an ion, giving an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Isotope",
                              "statement": "Same element, different neutrons."
                    },
                    {
                              "kind": "definition",
                              "name": "Ion",
                              "statement": "Charged atom, different electrons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Isotope: C-12 vs C-14 — same protons, different neutrons. Ion: Na+ lost an electron → positive charge; Cl- gained one → negative charge.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both distinguished with correct examples.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Isotope = neutron variant; ion = charged.**",
          "commonErrors": [
                    "Swapping the definitions."
          ]
},
        },
      ],
    },
  ],
};
