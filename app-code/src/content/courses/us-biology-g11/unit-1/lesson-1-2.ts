import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "bio11-u1-lesson-1-2",
  code: "1-2",
  title: "Cell Processes",
  goal: "I CAN explain photosynthesis, cellular respiration and cell division.",
  standards: ["HS-LS1-5", "HS-LS1-6", "HS-LS1-7"],
  vocabulary: [
    { term: "Photosynthesis", definition: "Making glucose from light." },
    { term: "Respiration", definition: "Breaking glucose for ATP." },
    { term: "Mitosis", definition: "Cell division for growth." },
    { term: "ATP", definition: "Energy currency." },
    { term: "Enzyme", definition: "Speeds reactions." },
  ],
  concepts: [
    {
      id: "bio11-u1-cell-processes",
      title: "Cell processes",
      skill: "Explain photosynthesis, respiration and division.",
      lesson: {
        sections: [
          {
            heading: "Photosynthesis vs respiration",
            body: "Photosynthesis (in chloroplasts): $6CO_2 + 6H_2O + light \\rightarrow C_6H_{12}O_6 + 6O_2$ — makes glucose, releases oxygen. Cellular respiration (in mitochondria): glucose + oxygen → ATP + CO2 + water — releases energy.",
          },
          {
            heading: "Cell division",
            body: "Mitosis produces two identical daughter cells for growth and repair (diploid). Meiosis produces four genetically different cells for reproduction (haploid).",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis", statement: "CO2 + H2O → glucose + O2." },
          { name: "Respiration", statement: "Glucose + O2 → ATP + CO2 + H2O." },
          { name: "Mitosis", statement: "2 identical diploid cells." },
        ],
        workedExample: {
          problem: "Where does most ATP production occur in a cell?",
          solution: "Mitochondria — cellular respiration generates ATP there.",
        },
      },
      questions: [
        {
          id: "bio11-u1-cell-processes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Photosynthesis produces ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "carbon dioxide"
                    },
                    {
                              "id": "b",
                              "text": "glucose and oxygen"
                    },
                    {
                              "id": "c",
                              "text": "only water"
                    },
                    {
                              "id": "d",
                              "text": "ATP only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Photosynthesis",
                              "statement": "Makes glucose + releases O2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Photosynthesis produces glucose and releases oxygen.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** glucose and oxygen",
          "commonErrors": [
                    "Thinking it consumes oxygen."
          ]
},
        },
        {
          id: "bio11-u1-cell-processes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Mitosis produces ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 different cells"
                    },
                    {
                              "id": "b",
                              "text": "2 identical cells"
                    },
                    {
                              "id": "c",
                              "text": "1 cell"
                    },
                    {
                              "id": "d",
                              "text": "gametes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mitosis",
                              "statement": "2 identical diploid daughter cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mitosis produces two genetically identical diploid cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** 2 identical cells",
          "commonErrors": [
                    "Confusing with meiosis."
          ]
},
        },
        {
          id: "bio11-u1-cell-processes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Photosynthesis uses 6 CO2 + 6 H2O to make glucose. How many CO2 molecules?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "CO2",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Photosynthesis",
                              "statement": "$6CO_2$ in equation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 CO2 molecules.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$6$",
          "commonErrors": [
                    "Counting products instead of reactants."
          ]
},
        },
        {
          id: "bio11-u1-cell-processes-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Distinguish mitosis from meiosis: number of divisions, daughter cells produced, and purpose.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mitosis",
                              "statement": "1 division → 2 identical diploid."
                    },
                    {
                              "kind": "definition",
                              "name": "Meiosis",
                              "statement": "2 divisions → 4 different haploid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mitosis: one division, two identical diploid cells for growth/repair. Meiosis: two divisions, four genetically different haploid cells for reproduction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All three distinctions correct.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mitosis: 2 identical; meiosis: 4 different.**",
          "commonErrors": [
                    "Mixing up the outcomes."
          ]
},
        },
      ],
    },
  ],
};
