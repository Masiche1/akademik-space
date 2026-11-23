import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ebi11-u5-lesson-5-2",
  code: "5-2",
  title: "Specialised Cells",
  goal: "I CAN describe specialised animal and plant cells and explain how their structure relates to function.",
  standards: ["4BI1 2.5B"],
  
  vocabulary: [
    { term: "Specialised cell", definition: "Cell differentiated to perform a specific function." },
    { term: "Red blood cell", definition: "Animal cell adapted to transport oxygen; no nucleus, biconcave shape." },
    { term: "Nerve cell", definition: "Cell with long fibres adapted to carry electrical impulses." },
    { term: "Muscle cell", definition: "Cell adapted to contract; contains many mitochondria." },
    { term: "Root hair cell", definition: "Plant cell with hair-like extension increasing absorption surface." },
    { term: "Guard cell", definition: "Plant cell controlling stomatal opening." },
  ],
  concepts: [
    {
      id: "ebi11-u5-animal-cells",
      title: "Specialised animal cells",
      skill: "Describe red blood cells, nerve cells, muscle cells and gametes and their adaptations.",
      lesson: {
        sections: [
          {
            heading: "Red blood cells",
            body: "Red blood cells transport oxygen. They have no nucleus, freeing space for haemoglobin, and a biconcave shape increasing surface area for oxygen diffusion. They are flexible and small enough to pass through capillaries.",
          },
          {
            heading: "Nerve and muscle cells",
            body: "**Nerve cells** have long fibres (axons) carrying electrical impulses over long distances; they have many dendrites receiving signals. **Muscle cells** contain many mitochondria and contractile proteins for movement. **Sperm cells** have a tail for swimming and many mitochondria for energy. **Egg cells** are large and contain nutrients for the embryo.",
          },
          {
            heading: "Advantages of specialisation",
            body: "Specialised cells perform specific functions efficiently, allowing multicellular organisms to grow large and complex. Different tissues and organs work together as systems.",
          },
        ],
        keyFormulas: [
          { name: "Red blood cell", statement: "No nucleus; biconcave; haemoglobin; oxygen transport" },
          { name: "Nerve cell", statement: "Long fibres; carries impulses" },
          { name: "Muscle cell", statement: "Many mitochondria; contractile proteins" },
        ],
        workedExample: {
          problem: "Why do red blood cells have no nucleus?",
          solution: "Removing the nucleus frees space for more haemoglobin, increasing oxygen-carrying capacity.",
        },
      },
      questions: [
        {
          id: "ebi11-u5-animal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which specialised cell transports oxygen?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "White blood cell"
                    },
                    {
                              "id": "b",
                              "text": "Red blood cell"
                    },
                    {
                              "id": "c",
                              "text": "Nerve cell"
                    },
                    {
                              "id": "d",
                              "text": "Muscle cell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Red blood cell",
                              "statement": "Transports oxygen using haemoglobin."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Red blood cells transport oxygen.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Red blood cell"
},
        },
        {
          id: "ebi11-u5-animal-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two adaptations of red blood cells.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Red blood cell adaptations",
                              "statement": "No nucleus; biconcave shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "No nucleus frees space for haemoglobin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Biconcave shape increases surface area.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "No nucleus; biconcave shape"
},
        },
        {
          id: "ebi11-u5-animal-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a nerve cell is adapted to carry impulses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Nerve cell",
                              "statement": "Long fibres carry impulses over distance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Long axon carries impulse over distance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Dendrites receive signals from other cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Myelin sheath speeds impulse conduction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Long fibres and dendrites for impulse transmission"
},
        },
        {
          id: "ebi11-u5-animal-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare sperm and egg cells.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sperm vs egg",
                              "statement": "Different sizes, structures and roles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sperm is small with tail for swimming.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Egg is large with nutrients for embryo.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both are gametes but differ in structure.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Sperm has many mitochondria for energy.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Sperm small/mobile; egg large/nutritive"
},
        },
        {
          id: "ebi11-u5-animal-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why muscle cells contain many mitochondria.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain muscle contraction energy demand.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain role of mitochondria.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Relate to exercise.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Muscle cell",
                              "statement": "High energy demand requires many mitochondria."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Muscle contraction requires ATP.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Mitochondria carry out aerobic respiration.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "More mitochondria support sustained activity.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Many mitochondria for high energy demand"
},
        },
        {
          id: "ebi11-u5-animal-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Describe red blood cell adaptations. (b) Explain nerve cell function. (c) Explain muscle cell adaptations. (d) Compare sperm and egg cells. (e) State why red blood cells have no nucleus. (f) Give one example of specialised animal cell.",
          parts: [
          {
                    "label": "a",
                    "prompt": "RBC adaptations.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Nerve cell.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Muscle cell.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Sperm vs egg.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "No nucleus.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Example.",
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
                              "name": "Specialised cells",
                              "statement": "Cells differentiated for specific functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "No nucleus; biconcave; haemoglobin.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Long fibres carry impulses; dendrites receive signals.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Many mitochondria and contractile proteins.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Sperm small/mobile; egg large/nutritive.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "Frees space for haemoglobin.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "e"
                    },
                    {
                              "reasoning": "Example: red blood cell, nerve cell or muscle cell.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Animal cells are specialised for transport, conduction, contraction and reproduction."
},
        },
      ],
    },
    {
      id: "ebi11-u5-plant-cells",
      title: "Specialised plant cells",
      skill: "Describe root hair, palisade, spongy mesophyll and guard cells and their adaptations.",
      lesson: {
        sections: [
          {
            heading: "Root hair cells",
            body: "Root hair cells absorb water and mineral ions from soil. The hair-like extension increases surface area enormously. Thin cell walls shorten diffusion distance, and many mitochondria support active transport of mineral ions. The large vacuole maintains turgor.",
          },
          {
            heading: "Palisade and spongy mesophyll cells",
            body: "**Palisade mesophyll cells** are packed with chloroplasts near the upper leaf surface to absorb light efficiently for photosynthesis. **Spongy mesophyll cells** are loosely arranged with air spaces to allow gas exchange by diffusion.",
          },
          {
            heading: "Guard cells",
            body: "**Guard cells** surround stomata and control their opening. When guard cells take in water they become turgid and curve, opening the stoma; when they lose water they become flaccid and close it. This controls gas exchange and reduces water loss.",
          },
        ],
        keyFormulas: [
          { name: "Root hair", statement: "Large surface area; mitochondria for active transport" },
          { name: "Palisade mesophyll", statement: "Many chloroplasts near upper surface for photosynthesis" },
          { name: "Spongy mesophyll", statement: "Air spaces allow gas exchange" },
          { name: "Guard cell", statement: "Controls stoma opening by changing turgor" },
        ],
        workedExample: {
          problem: "Why does a root hair cell have a long extension?",
          solution: "The extension increases surface area for absorption of water and mineral ions from soil.",
        },
      },
      questions: [
        {
          id: "ebi11-u5-plant-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which plant cell absorbs water and mineral ions from soil?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Palisade cell"
                    },
                    {
                              "id": "b",
                              "text": "Epidermal cell"
                    },
                    {
                              "id": "c",
                              "text": "Guard cell"
                    },
                    {
                              "id": "d",
                              "text": "Root hair cell"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Root hair cell",
                              "statement": "Absorbs water and minerals from soil."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Root hair cells absorb from soil.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(d)** Root hair cell"
},
        },
        {
          id: "ebi11-u5-plant-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the function of palisade mesophyll cells.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Palisade mesophyll",
                              "statement": "Main site of photosynthesis in leaf."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Photosynthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Many chloroplasts absorb light.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Photosynthesis"
},
        },
        {
          id: "ebi11-u5-plant-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how root hair cells are adapted for absorption.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Root hair adaptation",
                              "statement": "Large surface area and mitochondria."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hair-like extension increases surface area.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Thin wall shortens diffusion distance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mitochondria support active transport of ions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Large surface area; mitochondria for active transport"
},
        },
        {
          id: "ebi11-u5-plant-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how guard cells control stomatal opening.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Guard cells",
                              "statement": "Turgor changes open/close stomata."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Guard cells take in water and become turgid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They curve and open the stoma.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Loss of water makes them flaccid and closes stoma.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Controls gas exchange and water loss.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Guard cells change turgor to open/close stomata"
},
        },
        {
          id: "ebi11-u5-plant-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare palisade and spongy mesophyll cells in a leaf.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Structure of palisade cells.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Function of palisade cells.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Contrast with spongy cells.",
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
                              "name": "Palisade vs spongy mesophyll",
                              "statement": "Different arrangements suit photosynthesis and gas exchange."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Palisade cells are elongated and packed near upper surface.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Palisade cells photosynthesise.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Spongy cells are loosely arranged with air spaces for gas exchange.",
                              "marks": 2,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Palisade photosynthesises; spongy allows gas exchange"
},
        },
        {
          id: "ebi11-u5-plant-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Describe root hair cell adaptations. (b) State function of palisade mesophyll. (c) Explain spongy mesophyll adaptation. (d) Explain guard cell function. (e) Compare palisade and spongy mesophyll. (f) Give one example of plant cell specialisation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Root hair adaptations.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Palisade function.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Spongy adaptation.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Guard cells.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Palisade vs spongy.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Example.",
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
                              "name": "Specialised plant cells",
                              "statement": "Cells adapted for absorption, photosynthesis and gas exchange."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Large surface area; mitochondria for active transport.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Photosynthesis in leaf.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Air spaces allow gas exchange by diffusion.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Control stomatal opening by changing turgor.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "Palisade packed for light; spongy loose for air spaces.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Example: root hair, palisade, spongy or guard cell.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Plant cells are specialised for absorption, photosynthesis and gas exchange."
},
        },
      ],
    },
  ],

};
