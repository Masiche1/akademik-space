import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ebi11-u10-lesson-10-3",
  code: "10-3",
  title: "Structure and Function of Major Organs",
  goal: "I CAN relate the structure of major animal and plant organs to their functions.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Organisation of multicellular organisms", "4BI1 organ structure-function"],
  
  vocabulary: [
    { term: "Heart", definition: "Muscular organ pumping blood around the body." },
    { term: "Lung", definition: "Organ where gas exchange occurs in alveoli." },
    { term: "Leaf", definition: "Plant organ specialised for photosynthesis." },
    { term: "Root", definition: "Plant organ for anchorage and water/mineral absorption." },
    { term: "Stem", definition: "Plant organ supporting leaves and transporting materials." },
    { term: "Coronary artery", definition: "Vessel supplying oxygenated blood to heart muscle." },
    { term: "Cuticle", definition: "Waxy waterproof layer on leaf epidermis reducing water loss." },
    { term: "Vascular bundle", definition: "Cluster of xylem and phloem conducting materials in plants." },
  ],
  concepts: [
    {
      id: "ebi11-u10-animal-organs",
      title: "Animal organs: heart, lung and gut",
      skill: "Describe how heart, lung and digestive organs are structured for their functions.",
      lesson: {
        sections: [
          {
            heading: "Heart",
            body: "Four chambers (two atria, two ventricles), valves preventing backflow, thick muscular walls (left ventricle thickest), coronary arteries feeding heart muscle. Pumps blood in double circulation.",
          },
          {
            heading: "Lung",
            body: "Airways branch to bronchioles ending in alveoli. Alveoli have huge surface area, one-cell walls, moist lining and dense capillaries for efficient gas exchange. Diaphragm and intercostal muscles ventilate.",
          },
          {
            heading: "Digestive organs",
            body: "Mouth (teeth/tongue), oesophagus (peristalsis), stomach (churns + acid + protease), small intestine (villi for absorption), large intestine (absorbs water). Each organ's structure matches its digestive role.",
          },
        ],
        keyFormulas: [
          { name: "Heart", statement: "Chambers + valves + thick walls → efficient pumping" },
          { name: "Alveoli", statement: "Large SA + thin + moist + capillaries → gas exchange" },
        ],
        workedExample: {
          problem: "How does the heart's structure suit its pumping function?",
          solution: "Thick muscular walls generate pressure; four chambers separate oxygenated/deoxygenated blood; valves prevent backflow; coronary arteries supply the muscle itself.",
        },
      },
      questions: [
        {
          id: "ebi11-u10-ao-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ pumps blood around the body?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lung"
                    },
                    {
                              "id": "b",
                              "text": "Heart"
                    },
                    {
                              "id": "c",
                              "text": "Stomach"
                    },
                    {
                              "id": "d",
                              "text": "Kidney"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Heart",
                              "statement": "Muscular blood pump."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heart pumps blood.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Heart"
},
        },
        {
          id: "ebi11-u10-ao-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the organ where gas exchange occurs in humans.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lung",
                              "statement": "Gas exchange organ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lungs (alveoli) exchange gases.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Lungs"
},
        },
        {
          id: "ebi11-u10-ao-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the structure of the heart suits its function.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Heart structure",
                              "statement": "Adapted pump."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thick muscular walls generate pumping pressure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Four chambers keep oxygenated/deoxygenated blood separate.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Valves prevent backflow during contraction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Coronary arteries supply the heart muscle with O2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Muscular walls, chambers, valves, coronary supply"
},
        },
        {
          id: "ebi11-u10-ao-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how the alveoli are adapted for gas exchange.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Alveolus",
                              "statement": "Efficient exchange surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Millions of alveoli give huge surface area.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "One-cell-thick wall → short diffusion distance.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Moist lining dissolves gases for diffusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Dense capillary network maintains concentration gradients.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Together these maximise rate of gas exchange.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Large SA, thin, moist, capillary supply"
},
        },
        {
          id: "ebi11-u10-ao-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name two animal organs and their functions.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State two structural features of the heart.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two adaptations of the small intestine for absorption.",
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
                              "name": "Organ structure",
                              "statement": "Structure suits function."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Heart pumps; lung exchanges; stomach digests; kidney filters.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Four chambers; valves; thick walls.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Villi; long/coiled; capillary supply.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Organs+functions; heart features; intestine adaptations"
},
        },
        {
          id: "ebi11-u10-ao-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name two animal organs. (b) State the function of each. (c) Name two structural features of the heart. (d) Name two adaptations of alveoli. (e) State the function of the small intestine. (f) Name two tissues found in the heart.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Two organs.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Functions.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Heart features.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Alveolar adaptations.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Small intestine.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Heart tissues.",
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
                              "name": "Animal organs",
                              "statement": "Structure suits function."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Heart, lung, stomach, kidney (any two).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pump/exchange/digest/filter (any two correct).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Chambers/valves/thick walls (any two).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Large SA/thin wall/moist/capillaries (any two).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Absorption of digested food.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Muscle + connective + epithelial + nerve (any two).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Organs; functions; heart/alveoli features; intestine; tissues"
},
        },
      ],
    },
    {
      id: "ebi11-u10-plant-organs",
      title: "Plant organs: leaf, root and stem",
      skill: "Describe how leaf, root and stem structure supports plant function.",
      lesson: {
        sections: [
          {
            heading: "Leaf",
            body: "Broad and thin for maximum light capture; palisade mesophyll packed with chloroplasts; stomata for gas exchange; spongy mesophyll air spaces for diffusion; vascular bundles for transport; waxy cuticle reduces water loss.",
          },
          {
            heading: "Root",
            body: "Anchors the plant; root hairs massively increase surface area for water/mineral absorption by osmosis; meristem at tip for growth; root cap protects tip; may store food (e.g. carrot).",
          },
          {
            heading: "Stem",
            body: "Supports leaves and flowers; vascular bundles (xylem+phloem) transport water upward and sugars between source and sink; may store food or photosynthesise if green; turgor pressure provides support.",
          },
        ],
        keyFormulas: [
          { name: "Leaf", statement: "Broad, thin, chloroplast-rich, stomata → photosynthesis" },
          { name: "Root", statement: "Root hairs + meristem → absorption + growth" },
        ],
        workedExample: {
          problem: "How is a leaf adapted for photosynthesis?",
          solution: "Broad thin shape maximises light capture; palisade cells packed with chloroplasts; stomata allow CO2 entry; vascular bundles supply water and remove sugars.",
        },
      },
      questions: [
        {
          id: "ebi11-u10-po-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which plant organ is the main site of photosynthesis?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Root"
                    },
                    {
                              "id": "b",
                              "text": "Stem"
                    },
                    {
                              "id": "c",
                              "text": "Leaf"
                    },
                    {
                              "id": "d",
                              "text": "Flower"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Leaf",
                              "statement": "Photosynthesis organ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leaves photosynthesise.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Leaf"
},
        },
        {
          id: "ebi11-u10-po-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the plant organ that absorbs most water and minerals.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Root",
                              "statement": "Absorption and anchorage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roots (root hairs) absorb water and minerals.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Roots"
},
        },
        {
          id: "ebi11-u10-po-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the leaf is adapted for photosynthesis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Leaf adaptations",
                              "statement": "Shape, tissues, stomata."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Broad, thin shape maximises light capture.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Palisade mesophyll packed with chloroplasts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Stomata allow CO2 entry for photosynthesis.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Vascular bundles supply water and remove sugars.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Broad shape, chloroplasts, stomata, vascular supply"
},
        },
        {
          id: "ebi11-u10-po-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the functions of root, stem and leaf in a plant.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Plant organs",
                              "statement": "Distinct roles per organ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Root: anchors plant; absorbs water/minerals.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Stem: supports; transports water/sugars; stores food.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Leaf: photosynthesises; gas exchange; transpiration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They work together for whole-plant function.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Vascular tissue links them for transport.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Root absorb/anchor; stem support/transport; leaf photosynthesise"
},
        },
        {
          id: "ebi11-u10-po-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name three plant organs.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State the main function of each.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State two leaf adaptations for photosynthesis.",
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
                              "name": "Plant organs",
                              "statement": "Root, stem, leaf."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Root, stem, leaf.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Absorb/anchor; support/transport; photosynthesis.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Chloroplast-rich palisade; stomata; broad thin shape (any two).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Root/stem/leaf; functions; leaf adaptations"
},
        },
        {
          id: "ebi11-u10-po-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name three plant organs. (b) State the function of each. (c) State two adaptations of the leaf. (d) State two adaptations of the root. (e) What is a vascular bundle? (f) What is the cuticle?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Three organs.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Functions.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Leaf adaptations.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Root adaptations.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Vascular bundle.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Cuticle.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Plant organs",
                              "statement": "Structure suits function."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Root, stem, leaf.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Absorb/anchor; support/transport; photosynthesis.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Chloroplasts/palisade; stomata; broad shape (any two).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Root hairs; meristem tip; large SA (any two).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Cluster of xylem and phloem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Waxy waterproof layer reducing water loss.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Organs+functions; leaf/root adaptations; vascular bundle; cuticle"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebi11-u10-structure-notes",
      title: "Organ structure — notes",
      summary: "Animal organs (heart, lung, gut) and plant organs (leaf, root, stem) are structured for their functions.",
      sections: [
        { heading: "Key idea", body: "Structure always supports function at every level." },
        { heading: "Plants", body: "Leaf=photosynthesis; root=absorption; stem=transport/support." },
      ],
    },
  ],
};
