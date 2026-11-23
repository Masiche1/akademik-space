import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apbio-u1-lesson-1-3",
  code: "1-3",
  title: "Photosynthesis and Cellular Respiration",
  goal: "I CAN compare the inputs, outputs, and locations of photosynthesis and respiration.",
  standards: ["ENER-1"],
  vocabulary: [
    { term: "Photosynthesis", definition: "$6CO_2 + 6H_2O + \\text{light} \\to C_6H_{12}O_6 + 6O_2$ — stores energy in glucose." },
    { term: "Chloroplast", definition: "Organelle where photosynthesis occurs; contains thylakoids and stroma." },
    { term: "Calvin cycle", definition: "Light-independent reactions in the stroma fixing $CO_2$ into sugar." },
    { term: "Cellular respiration", definition: "$C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\text{ATP}$ — releases energy." },
    { term: "ATP", definition: "Adenosine triphosphate — the cell's energy currency." },
  ],
  concepts: [
    {
      id: "apbio-u1-photosynthesis-respiration",
      title: "Energy flow in cells",
      skill: "Relate photosynthesis and respiration as complementary processes.",
      lesson: {
        sections: [
          {
            heading: "Photosynthesis",
            body: "In chloroplasts: light reactions in thylakoid membranes capture light energy to make ATP and NADPH; the Calvin cycle in the stroma uses them to fix $CO_2$ into glucose. Net equation: $6CO_2 + 6H_2O \\to C_6H_{12}O_6 + 6O_2$.",
          },
          {
            heading: "Respiration",
            body: "In mitochondria (and cytoplasm for glycolysis): glucose is oxidized stepwise — glycolysis, Krebs cycle, oxidative phosphorylation — producing ATP. The processes are near-mirror images: photosynthesis stores energy, respiration releases it. C$_3$, C$_4$, and CAM plants are adaptations to minimize photorespiration.",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis", statement: "$6CO_2 + 6H_2O + \\text{light} \\to C_6H_{12}O_6 + 6O_2$" },
          { name: "Respiration", statement: "$C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\text{ATP}$" },
        ],
        workedExample: {
          problem: "Where do the light reactions and Calvin cycle occur, and what do they produce?",
          solution: "Light reactions occur in thylakoid membranes producing ATP, NADPH, and $O_2$. The Calvin cycle occurs in the stroma using ATP and NADPH to fix $CO_2$ into G3P (then glucose).",
        },
      },
      questions: [
        {
          id: "apbio-u1-photosynthesis-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The light reactions of photosynthesis occur in the ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stroma"
                    },
                    {
                              "id": "b",
                              "text": "thylakoid membranes"
                    },
                    {
                              "id": "c",
                              "text": "cytoplasm"
                    },
                    {
                              "id": "d",
                              "text": "mitochondria"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Thylakoid",
                              "statement": "Membrane discs inside chloroplasts housing photosystems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light-dependent reactions happen in thylakoids; Calvin cycle in stroma.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Thylakoid membranes",
          "commonErrors": [
                    "Mixing up thylakoid and stroma locations."
          ]
},
        },
        {
          id: "apbio-u1-photosynthesis-respiration-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which gas is a product of the light reactions and a reactant of respiration?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$CO_2$"
                    },
                    {
                              "id": "b",
                              "text": "$O_2$"
                    },
                    {
                              "id": "c",
                              "text": "$N_2$"
                    },
                    {
                              "id": "d",
                              "text": "$H_2$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Gas exchange",
                              "statement": "Photosynthesis releases $O_2$; respiration consumes it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$O_2$ is produced by photolysis of water in light reactions and consumed in oxidative phosphorylation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$O_2$",
          "commonErrors": [
                    "Thinking $CO_2$ is the shared gas — it goes the other direction."
          ]
},
        },
        {
          id: "apbio-u1-photosynthesis-respiration-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many $CO_2$ molecules are fixed to produce one glucose molecule in the Calvin cycle? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$CO_2$ molecules",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Calvin cycle",
                              "statement": "Each turn fixes one $CO_2$; glucose needs six turns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$6CO_2$ per glucose — matching the photosynthesis equation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: $6$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$6$",
          "commonErrors": [
                    "Forgetting each turn fixes only one carbon."
          ]
},
        },
        {
          id: "apbio-u1-photosynthesis-respiration-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare aerobic respiration and photosynthesis in terms of location, reactants, products, and energy flow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Complementary processes",
                              "statement": "Near-reverse equations."
                    },
                    {
                              "kind": "concept",
                              "name": "Energy",
                              "statement": "Photosynthesis stores; respiration releases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Photosynthesis: chloroplasts, uses $CO_2 + H_2O + light$, produces glucose + $O_2$, stores energy. Respiration: mitochondria/cytoplasm, uses glucose + $O_2$, produces $CO_2 + H_2O + ATP$, releases energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They are essentially reverse reactions — the $O_2$ and $CO_2$ swap roles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct comparison covering all four aspects.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Reverse processes; chloroplasts vs mitochondria; store vs release energy",
          "commonErrors": [
                    "Listing only the equations without locations or energy flow."
          ]
},
        },
      ],
    },
  ],
};
