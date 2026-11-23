import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ebi11-u9-lesson-9-3",
  code: "9-3",
  title: "Transport in Plants",
  goal: "I CAN explain water uptake, transpiration, xylem and phloem transport and mineral requirements.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Transport in plants", "4BI1 plant transport"],
  
  vocabulary: [
    { term: "Xylem", definition: "Vascular tissue transporting water and dissolved minerals from roots to leaves." },
    { term: "Phloem", definition: "Vascular tissue transporting sugars (sucrose) from sources to sinks." },
    { term: "Transpiration", definition: "Loss of water vapour from leaves through stomata." },
    { term: "Root hair", definition: "Extension of a root epidermal cell increasing surface area for water absorption." },
    { term: "Stoma", definition: "Pore in leaf epidermis (guard cells control it) allowing gas exchange and transpiration." },
    { term: "Translocation", definition: "Transport of sucrose in phloem from source to sink." },
    { term: "Mineral ions", definition: "Nitrates, phosphates etc. absorbed by roots for plant growth." },
  ],
  concepts: [
    {
      id: "ebi11-u9-xylem",
      title: "Water uptake and transpiration",
      skill: "Explain water absorption by roots, transpiration pull and xylem transport.",
      lesson: {
        sections: [
          {
            heading: "Water uptake",
            body: "Root hair cells have a large surface area and thin walls. Water enters by osmosis because soil water has higher water potential than root cell sap. Water then moves through root cells to xylem vessels.",
          },
          {
            heading: "Transpiration",
            body: "Water evaporates from mesophyll cells and diffuses out through stomata as water vapour — transpiration. It creates a transpiration pull (cohesion-tension) that draws water up the xylem. Factors increasing transpiration: high temperature, wind, low humidity, bright light (stomata open).",
          },
          {
            heading: "Xylem",
            body: "Xylem vessels are dead, hollow tubes with lignin-reinforced walls — no end walls, continuous columns. Water and dissolved minerals move upward by transpiration pull and root pressure. Lignin also supports the plant.",
          },
        ],
        keyFormulas: [
          { name: "Transpiration pull", statement: "Water loss → tension → pulls water column up xylem" },
          { name: "Osmosis uptake", statement: "Water moves from high water potential (soil) to low (root cells)" },
        ],
        workedExample: {
          problem: "Why does a plant wilt in hot, windy conditions?",
          solution: "Transpiration rate exceeds water uptake; water loss from leaves is not replaced fast enough, so cells lose turgor and the plant wilts.",
        },
      },
      questions: [
        {
          id: "ebi11-u9-xylem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tissue transports water and minerals upward in plants?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Phloem"
                    },
                    {
                              "id": "b",
                              "text": "Xylem"
                    },
                    {
                              "id": "c",
                              "text": "Palisade"
                    },
                    {
                              "id": "d",
                              "text": "Epidermis"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Xylem",
                              "statement": "Water/mineral transport tissue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Xylem transports water upward.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Xylem"
},
        },
        {
          id: "ebi11-u9-xylem-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define transpiration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Transpiration",
                              "statement": "Water vapour loss from leaves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Loss of water vapour from leaves through stomata.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Water vapour loss from leaves"
},
        },
        {
          id: "ebi11-u9-xylem-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how root hair cells absorb water from the soil.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Osmotic uptake",
                              "statement": "Water moves down water-potential gradient."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Root hair cells have large surface area and thin walls.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Soil water has higher water potential than root cell sap.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Water enters by osmosis across partially permeable membrane.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Water then passes through root cells to xylem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Osmosis into root hairs → across root to xylem"
},
        },
        {
          id: "ebi11-u9-xylem-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how transpiration pulls water up the xylem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Transpiration pull",
                              "statement": "Cohesion-tension raises water column."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water evaporates from mesophyll cells and exits via stomata.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Loss creates tension in the water column in xylem.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Water molecules cohere (stick together) forming continuous column.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Tension pulls the whole column upward from roots.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Adhesion to xylem walls prevents column breaking.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Transpiration → tension → cohesion pulls water up xylem"
},
        },
        {
          id: "ebi11-u9-xylem-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State two adaptations of root hair cells for absorption.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of stomata in transpiration.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Name two factors that increase transpiration rate.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Plant water transport",
                              "statement": "Root uptake and transpiration pull."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Large surface area; thin wall / close to xylem.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Stomata are pores for water vapour loss; guard cells control opening.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "High temp, wind, low humidity, bright light (any two).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Root hairs; stomata pores; wind/temp/humidity/light"
},
        },
        {
          id: "ebi11-u9-xylem-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define transpiration. (b) Name the tissue transporting water upward. (c) Explain root hair water uptake. (d) Explain transpiration pull. (e) State two factors increasing transpiration. (f) Why does wilting occur?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Transpiration.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Tissue.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Water uptake.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Pull mechanism.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Two factors.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Wilting.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Transpiration",
                              "statement": "Water movement in plants."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Water vapour loss from leaves via stomata.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Xylem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Osmosis into root hairs (high→low water potential).",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Water loss → tension → cohesion pulls column up.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Wind, high temp, low humidity, bright light (any two).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Transpiration exceeds uptake.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Cells lose turgor.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Plant wilts until water balance restored.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Transpiration; xylem; osmosis; cohesion-tension; factors; wilting"
},
        },
      ],
    },
    {
      id: "ebi11-u9-phloem",
      title: "Phloem transport and mineral ions",
      skill: "Explain translocation of sugars in phloem and the role of mineral ions in plants.",
      lesson: {
        sections: [
          {
            heading: "Phloem and translocation",
            body: "Phloem transports sucrose from sources (e.g. photosynthesising leaves) to sinks (growing roots, fruits, storage organs). Sucrose is loaded into phloem at sources and moves by mass flow/translocation to sinks. Companion cells support sieve tube elements.",
          },
          {
            heading: "Mineral ions",
            body: "Roots absorb dissolved mineral ions (nitrates, phosphates, potassium, magnesium) from soil. Nitrates needed for amino acids/proteins — deficiency causes stunted growth and yellow leaves. Magnesium needed for chlorophyll — deficiency causes yellowing between leaf veins. Phosphates for respiration/DNA; potassium for enzymes.",
          },
          {
            heading: "Xylem vs phloem",
            body: "Xylem: dead hollow vessels, water + minerals upward, driven by transpiration. Phloem: living sieve tubes + companion cells, sucrose both directions (source→sink), requires energy for loading.",
          },
        ],
        keyFormulas: [
          { name: "Translocation", statement: "Sucrose source → phloem → sink" },
          { name: "Nitrate deficiency", statement: "Stunted growth, yellow leaves" },
        ],
        workedExample: {
          problem: "Why do mineral deficiencies cause yellow leaves?",
          solution: "Magnesium is needed to make chlorophyll; without it leaves lose green colour. Nitrates are needed for protein/amino acid production; deficiency causes yellowing and stunted growth.",
        },
      },
      questions: [
        {
          id: "ebi11-u9-phloem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tissue transports sucrose in plants?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Xylem"
                    },
                    {
                              "id": "b",
                              "text": "Phloem"
                    },
                    {
                              "id": "c",
                              "text": "Cambium"
                    },
                    {
                              "id": "d",
                              "text": "Pith"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phloem",
                              "statement": "Sucrose transport tissue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phloem carries sugars.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Phloem"
},
        },
        {
          id: "ebi11-u9-phloem-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a source and a sink in translocation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Source/sink",
                              "statement": "Source produces sucrose; sink uses/stores it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Source: where sucrose is made (leaf).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sink: where it is used/stored (root, fruit).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Source=producer; sink=user/storer"
},
        },
        {
          id: "ebi11-u9-phloem-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the role of nitrate ions in plant growth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nitrate",
                              "statement": "Needed for amino acids/proteins."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nitrates absorbed by roots from soil.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Used to make amino acids and proteins for growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Deficiency → stunted growth.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Deficiency → yellow (chlorotic) leaves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Nitrates → amino acids/proteins; deficiency stunts + yellows"
},
        },
        {
          id: "ebi11-u9-phloem-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare xylem and phloem transport.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Xylem vs phloem",
                              "statement": "Different tissues, substances, directions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Xylem transports water + minerals upward.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Phloem transports sucrose source→sink.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Xylem vessels dead/hollow; phloem living sieve tubes.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Xylem driven by transpiration; phloem by loading/energy.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Both part of vascular tissue in roots/stems/leaves.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Xylem=water up; phloem=sucrose source→sink"
},
        },
        {
          id: "ebi11-u9-phloem-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the tissue transporting sugars and its direction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the role of magnesium in plants.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the effect of nitrate deficiency.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Plant transport",
                              "statement": "Phloem and minerals."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Phloem; source → sink.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Needed for chlorophyll production.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Stunted growth; yellow leaves.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Phloem source→sink; Mg→chlorophyll; nitrate deficiency symptoms"
},
        },
        {
          id: "ebi11-u9-phloem-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name the tissue transporting sucrose. (b) Define source and sink. (c) Name two minerals plants need and their roles. (d) State the effect of nitrate deficiency. (e) Compare xylem and phloem.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Tissue.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Source/sink.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Two minerals + roles.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Nitrate deficiency.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Xylem vs phloem.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phloem and minerals",
                              "statement": "Translocation and nutrition."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Phloem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Source produces sucrose; sink uses/stores.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Nitrate→proteins; magnesium→chlorophyll; phosphate→DNA/respiration.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Stunted growth, yellow leaves.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Xylem water/minerals up; phloem sucrose source→sink.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Phloem; source/sink; minerals; deficiency; xylem vs phloem"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebi11-u9-plant-notes",
      title: "Plant transport — notes",
      summary: "Xylem carries water/minerals up by transpiration pull; phloem carries sucrose source→sink; minerals like nitrate and magnesium are essential.",
      sections: [
        { heading: "Key idea", body: "Transpiration drives water uptake; translocation moves sugars." },
        { heading: "Minerals", body: "Nitrate→protein; Mg→chlorophyll; phosphate→growth." },
      ],
    },
  ],
};
