import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ebi11-u5-lesson-5-1",
  code: "5-1",
  title: "Cells and Organelles",
  goal: "I CAN describe levels of organisation, compare plant and animal cells and state the functions of major organelles.",
  standards: ["4BI1 2.1", "4BI1 2.2", "4BI1 2.3", "4BI1 2.4"],
  
  vocabulary: [
    { term: "Cell", definition: "The basic structural and functional unit of living organisms." },
    { term: "Organelle", definition: "Specialised structure inside a cell that performs a particular function." },
    { term: "Nucleus", definition: "Organelle containing DNA that controls cell activities." },
    { term: "Cytoplasm", definition: "Jelly-like substance where many chemical reactions occur." },
    { term: "Cell membrane", definition: "Partially permeable boundary controlling what enters and leaves the cell." },
    { term: "Cell wall", definition: "Rigid cellulose layer outside plant cell membrane providing support." },
  ],
  concepts: [
    {
      id: "ebi11-u5-cell-structure",
      title: "Cell structure: plant and animal cells",
      skill: "Compare the structures of plant and animal cells and identify organelles.",
      lesson: {
        sections: [
          {
            heading: "Levels of organisation",
            body: "Cells are the basic units of living organisms. Similar cells form tissues, tissues form organs, organs work together in systems and systems make up an organism. Multicellular organisms depend on cell specialisation for efficient function.",
          },
          {
            heading: "Plant and animal cells",
            body: "Both animal and plant cells have a nucleus, cytoplasm, cell membrane, mitochondria and ribosomes. Plant cells also have a cellulose cell wall, chloroplasts in green parts and a large vacuole containing cell sap. The cell wall supports the cell; chloroplasts photosynthesise; the vacuole maintains turgor.",
          },
          {
            heading: "Microscopy and cell size",
            body: "Cells are too small to see with the naked eye, so microscopes are used. Magnification = image size ÷ actual size. A scale bar or graticule allows measurement of cell structures. Most cells are between 1 and 100 micrometres.",
          },
        ],
        keyFormulas: [
          { name: "Levels", statement: "Cell → tissue → organ → system → organism" },
          { name: "Magnification", statement: "$\\text{magnification} = \\frac{\\text{image size}}{\\text{actual size}}$" },
          { name: "Plant vs animal", statement: "Plant cells have cell wall, chloroplasts and large vacuole" },
        ],
        workedExample: {
          problem: "An image of a cell is 40 mm wide; actual width is 40 µm. Calculate magnification.",
          solution: "Convert 40 mm to 40000 µm. Magnification = 40000 ÷ 40 = ×1000.",
        },
      },
      questions: [
        {
          id: "ebi11-u5-cell-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure is found in plant cells but not animal cells?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Nucleus"
                    },
                    {
                              "id": "b",
                              "text": "Cell membrane"
                    },
                    {
                              "id": "c",
                              "text": "Mitochondrion"
                    },
                    {
                              "id": "d",
                              "text": "Cell wall"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Plant cell",
                              "statement": "Has cell wall, chloroplasts and large vacuole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cell wall is a plant-cell feature.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(d)** Cell wall"
},
        },
        {
          id: "ebi11-u5-cell-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two structures present in both plant and animal cells.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Eukaryotic cell",
                              "statement": "Both have nucleus, cytoplasm, membrane, mitochondria and ribosomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nucleus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cell membrane/cytoplasm/mitochondria/ribosomes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Nucleus; cell membrane/cytoplasm/mitochondria/ribosomes"
},
        },
        {
          id: "ebi11-u5-cell-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare plant and animal cells.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Plant vs animal cell",
                              "statement": "Plant cells have extra structures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both have nucleus, cytoplasm, membrane, mitochondria, ribosomes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Plant cells have cell wall, chloroplasts and large vacuole.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Animal cells lack these structures.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Similar basics; plants have wall/chloroplasts/vacuole"
},
        },
        {
          id: "ebi11-u5-cell-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate magnification if an image is 60 mm and actual size is 30 µm.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Magnification",
                              "answer": 2000,
                              "unit": "×"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Magnification",
                              "statement": "Magnification = image size ÷ actual size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Convert 60 mm to 60000 µm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Use magnification = image size ÷ actual size.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "60000 ÷ 30 = 2000.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Final magnification is ×2000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2000"
},
        },
        {
          id: "ebi11-u5-cell-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why cells are the basic units of living organisms.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define cell.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain organisation levels.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain advantage of multicellular organisation.",
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
                              "name": "Cell",
                              "statement": "Basic structural and functional unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cell is basic unit of living organisms.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Cells form tissues, organs, systems and organisms.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Specialised cells allow efficient division of labour.",
                              "marks": 2,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Cells are basic units organised into tissues/organs/systems"
},
        },
        {
          id: "ebi11-u5-cell-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define cell. (b) List levels of organisation. (c) Compare plant and animal cells. (d) State function of cell wall. (e) Calculate magnification for image 50 mm, actual 25 µm. (f) Explain why multicellular organisms need specialised cells.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Cell definition.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Levels.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Plant vs animal.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Cell wall.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Magnification.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Specialisation.",
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
                              "name": "Cell structure",
                              "statement": "Cells are organised into tissues, organs and systems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Basic structural/functional unit.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Cell, tissue, organ, system, organism.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Plants have wall/chloroplasts/vacuole; animals lack them.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Provides support.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "50 mm = 50000 µm; 50000 ÷ 25 = 2000.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Specialised cells perform specific functions efficiently.",
                              "marks": 2,
                              "markCode": "R",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Cells are organised units that differentiate for specific functions."
},
        },
      ],
    },
    {
      id: "ebi11-u5-organelles",
      title: "Organelles and their functions",
      skill: "State the functions of nucleus, cytoplasm, membrane, mitochondria, ribosomes, chloroplasts, vacuole and cell wall.",
      lesson: {
        sections: [
          {
            heading: "Key organelles",
            body: "The **nucleus** contains DNA and controls cell activities. **Cytoplasm** is where many chemical reactions occur. The **cell membrane** controls what enters and leaves. **Mitochondria** release energy by aerobic respiration. **Ribosomes** make proteins. **Chloroplasts** contain chlorophyll for photosynthesis. The large **vacuole** stores cell sap and maintains turgor. The **cell wall** supports plant cells.",
          },
          {
            heading: "Matching structure to function",
            body: "Cells with high energy demand, such as muscle cells, have many mitochondria. Cells that photosynthesise have chloroplasts. Cells that secrete proteins have many ribosomes. Exam answers should link each organelle to its function clearly.",
          },
          {
            heading: "Animal vs plant organelles",
            body: "Animal cells lack chloroplasts, a cell wall and a large permanent vacuole. Plant cells have all three. Both have nucleus, cytoplasm, cell membrane, mitochondria and ribosomes.",
          },
        ],
        keyFormulas: [
          { name: "Nucleus", statement: "Contains DNA; controls cell" },
          { name: "Mitochondrion", statement: "Aerobic respiration; releases energy" },
          { name: "Ribosome", statement: "Protein synthesis" },
          { name: "Chloroplast", statement: "Photosynthesis" },
        ],
        workedExample: {
          problem: "Why does a leaf cell contain chloroplasts but a root cell does not?",
          solution: "Leaf cells photosynthesise, so they need chloroplasts containing chlorophyll. Root cells are underground and do not photosynthesise.",
        },
      },
      questions: [
        {
          id: "ebi11-u5-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organelle releases energy by aerobic respiration?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Nucleus"
                    },
                    {
                              "id": "b",
                              "text": "Ribosome"
                    },
                    {
                              "id": "c",
                              "text": "Mitochondrion"
                    },
                    {
                              "id": "d",
                              "text": "Chloroplast"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mitochondrion",
                              "statement": "Site of aerobic respiration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mitochondria release energy.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Mitochondrion"
},
        },
        {
          id: "ebi11-u5-org-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the function of ribosomes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ribosome",
                              "statement": "Makes proteins."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protein synthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They make proteins.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Protein synthesis"
},
        },
        {
          id: "ebi11-u5-org-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Match three organelles to their functions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Organelle functions",
                              "statement": "Each organelle performs a specific role."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nucleus controls cell/DNA.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mitochondria release energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Chloroplasts photosynthesise.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Nucleus control; mitochondria energy; chloroplasts photosynthesis"
},
        },
        {
          id: "ebi11-u5-org-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why muscle cells contain many mitochondria.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Mitochondria in muscle",
                              "statement": "High energy demand requires many mitochondria."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Muscle contraction requires ATP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mitochondria carry out aerobic respiration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Many mitochondria increase ATP production.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Supports sustained contraction.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Many mitochondria for high ATP demand"
},
        },
        {
          id: "ebi11-u5-org-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how cell structure relates to function using three examples.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Root hair cell.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Red blood cell.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Guard cell.",
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
                              "name": "Structure-function",
                              "statement": "Cell structures are adapted to their roles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Root hair: large surface area for absorption.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Red blood cell: no nucleus, biconcave for oxygen transport.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Guard cell: chloroplasts and shape change control stomata.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Structure is adapted to function"
},
        },
        {
          id: "ebi11-u5-org-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) State function of nucleus, mitochondria, ribosomes and chloroplasts. (b) Explain why muscle cells have many mitochondria. (c) Explain why root cells lack chloroplasts. (d) State function of cell membrane. (e) State function of large vacuole. (f) Give one example of structure-function adaptation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Organelle functions.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Muscle mitochondria.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Root chloroplasts.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Cell membrane.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Vacuole.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Adaptation example.",
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
                              "name": "Organelle functions",
                              "statement": "Each organelle performs a specific role."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nucleus control; mitochondria respiration; ribosomes protein; chloroplasts photosynthesis.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "High energy demand needs many mitochondria.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Roots are underground and do not photosynthesise.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Controls what enters/leaves.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "Stores cell sap; maintains turgor.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Example: root hair surface area or red blood cell shape.",
                              "marks": 2,
                              "markCode": "B",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Organelles perform specific functions adapted to cell needs."
},
        },
      ],
    },
  ],

};
