import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apbio-u1-lesson-1-2",
  code: "1-2",
  title: "Cell Structure and Membrane Transport",
  goal: "I CAN compare prokaryotic and eukaryotic cells and describe membrane transport mechanisms.",
  standards: ["CELL-1"],
  vocabulary: [
    { term: "Prokaryote", definition: "Cell without a nucleus or membrane-bound organelles (bacteria, archaea)." },
    { term: "Eukaryote", definition: "Cell with a nucleus and membrane-bound organelles (protists, fungi, plants, animals)." },
    { term: "Selectively permeable", definition: "Membrane allows some substances to pass but not others." },
    { term: "Passive transport", definition: "Movement down the concentration gradient without energy: diffusion, osmosis, facilitated diffusion." },
    { term: "Active transport", definition: "Movement against the gradient using energy, e.g., the sodium-potassium pump." },
  ],
  concepts: [
    {
      id: "apbio-u1-cell-structure",
      title: "Cells and transport",
      skill: "Compare cell types and classify transport across membranes.",
      lesson: {
        sections: [
          {
            heading: "Cell organization",
            body: "Prokaryotes lack a nucleus — DNA floats in the nucleoid — and have no membrane-bound organelles. Eukaryotes compartmentalize functions: nucleus (DNA), mitochondria (respiration), chloroplasts (photosynthesis in plants/algae), ER and Golgi (protein processing).",
          },
          {
            heading: "Transport across membranes",
            body: "The phospholipid bilayer is selectively permeable. **Passive** transport (diffusion, osmosis, facilitated diffusion through channel/carrier proteins) moves down gradients without ATP. **Active** transport (pumps, endocytosis, exocytosis) moves against gradients using energy.",
          },
        ],
        keyFormulas: [
          { name: "Diffusion", statement: "Net movement from high to low concentration" },
          { name: "Osmosis", statement: "Diffusion of water across a selectively permeable membrane" },
        ],
        workedExample: {
          problem: "A cell is placed in a hypertonic solution. What happens and why?",
          solution: "Hypertonic = higher solute concentration outside. Water leaves the cell by osmosis, so the cell shrinks (crenates in animal cells, plasmolyzes in plant cells).",
        },
      },
      questions: [
        {
          id: "apbio-u1-cell-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which cell type has membrane-bound organelles?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Prokaryote"
                    },
                    {
                              "id": "b",
                              "text": "Eukaryote"
                    },
                    {
                              "id": "c",
                              "text": "Both equally"
                    },
                    {
                              "id": "d",
                              "text": "Neither"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Eukaryote",
                              "statement": "Membrane-bound nucleus and organelles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eukaryotes have a true nucleus and organelles; prokaryotes do not.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Eukaryote",
          "commonErrors": [
                    "Reversing the definitions of pro- and eukaryote."
          ]
},
        },
        {
          id: "apbio-u1-cell-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Oxygen moving from alveoli into blood is an example of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "active transport"
                    },
                    {
                              "id": "b",
                              "text": "simple diffusion"
                    },
                    {
                              "id": "c",
                              "text": "endocytosis"
                    },
                    {
                              "id": "d",
                              "text": "facilitated diffusion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Diffusion",
                              "statement": "Small nonpolar molecules cross membranes down their gradient without help."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$O_2$ is small and nonpolar — it diffuses directly through the bilayer.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Simple diffusion",
          "commonErrors": [
                    "Overcomplicating with protein-mediated transport."
          ]
},
        },
        {
          id: "apbio-u1-cell-structure-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The sodium-potassium pump moves $3$ Na$^+$ out and $2$ K$^+$ in per cycle. How many ions move per cycle in total? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Ions",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Pump stoichiometry",
                              "statement": "$3 + 2 = 5$ ions per cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3 + 2 = 5$ ions moved per ATP-powered cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: $5$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Subtracting instead of adding the ion counts."
          ]
},
        },
        {
          id: "apbio-u1-cell-structure-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Distinguish between facilitated diffusion and active transport, giving one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Facilitated diffusion",
                              "statement": "Protein-mediated, down gradient, no energy."
                    },
                    {
                              "kind": "definition",
                              "name": "Active transport",
                              "statement": "Against gradient, requires energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Facilitated diffusion uses channel/carrier proteins but moves WITH the gradient — no ATP needed. Example: glucose entering cells via GLUT transporters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Active transport moves AGAINST the gradient using energy. Example: sodium-potassium pump using ATP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both mechanisms correctly contrasted.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Facilitated = with gradient/no ATP; active = against gradient/ATP",
          "commonErrors": [
                    "Saying facilitated diffusion requires energy."
          ]
},
        },
      ],
    },
  ],
};
