import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "bio11-u3-lesson-3-1",
  code: "3-1",
  title: "Natural Selection and Evolution",
  goal: "I CAN explain natural selection and evidence for evolution.",
  standards: ["HS-LS4-1", "HS-LS4-2", "HS-LS4-3", "HS-LS4-5", "HS-LS4-6"],
  vocabulary: [
    { term: "Natural selection", definition: "Traits favored by environment survive." },
    { term: "Fitness", definition: "Reproductive success." },
    { term: "Adaptation", definition: "Inherited helpful trait." },
    { term: "Speciation", definition: "Formation of new species." },
    { term: "Common descent", definition: "All life shares ancestors." },
  ],
  concepts: [
    {
      id: "bio11-u3-natural-selection",
      title: "Natural selection",
      skill: "Explain natural selection and evolutionary evidence.",
      lesson: {
        sections: [
          {
            heading: "How selection works",
            body: "Natural selection: variation exists → environment selects → advantageous traits increase in frequency. Over generations, populations evolve. Example: antibiotic-resistant bacteria survive treatment and multiply.",
          },
          {
            heading: "Evidence for evolution",
            body: "Fossil record shows changing forms over time. Comparative anatomy (homologous structures) shows shared ancestry. DNA similarities confirm relationships. Observed examples: Darwin's finches, peppered moths.",
          },
        ],
        keyFormulas: [
          { name: "Selection", statement: "Variation → selection → change." },
          { name: "Fitness", statement: "Reproductive success." },
          { name: "Speciation", statement: "New species forms." },
        ],
        workedExample: {
          problem: "Explain how antibiotic resistance evolves in bacteria.",
          solution: "Random mutation creates resistance in some bacteria → antibiotics kill susceptible ones → resistant survivors reproduce → resistance spreads through population.",
        },
      },
      questions: [
        {
          id: "bio11-u3-natural-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Natural selection acts on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "individual organisms"
                    },
                    {
                              "id": "b",
                              "text": "populations over generations"
                    },
                    {
                              "id": "c",
                              "text": "only fossils"
                    },
                    {
                              "id": "d",
                              "text": "ecosystems"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Natural selection",
                              "statement": "Population-level change over generations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Natural selection changes populations over generations, not individuals.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** populations over generations",
          "commonErrors": [
                    "Thinking individuals evolve."
          ]
},
        },
        {
          id: "bio11-u3-natural-selection-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The peppered moth example shows ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no evolution"
                    },
                    {
                              "id": "b",
                              "text": "natural selection changing moth color frequency"
                    },
                    {
                              "id": "c",
                              "text": "acquired traits"
                    },
                    {
                              "id": "d",
                              "text": "extinction"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Peppered moth",
                              "statement": "Industrial melanism — dark moths survived pollution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dark moths were camouflaged on soot-covered trees and survived predation — selection changed the population.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** natural selection changing moth color frequency",
          "commonErrors": [
                    "Thinking it's random change."
          ]
},
        },
        {
          id: "bio11-u3-natural-selection-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evolution has 4 main lines of evidence. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Evidence",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Fossils, anatomy, DNA, observed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 evidence types.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Missing comparative anatomy."
          ]
},
        },
        {
          id: "bio11-u3-natural-selection-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe the steps of natural selection using antibiotic resistance as an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Natural selection",
                              "statement": "Variation → selection → reproduction."
                    },
                    {
                              "kind": "technique",
                              "name": "Example",
                              "statement": "Antibiotic resistance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1) Variation: random mutation makes some bacteria resistant. 2) Selection: antibiotic kills susceptible bacteria. 3) Reproduction: resistant survivors multiply. 4) Result: resistant population grows over generations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All four steps in correct order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Variation → antibiotic selection → resistant reproduction.**",
          "commonErrors": [
                    "Missing the variation step."
          ]
},
        },
      ],
    },
  ],
};
