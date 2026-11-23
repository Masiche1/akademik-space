import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ebi11-u5-lesson-5-3",
  code: "5-3",
  title: "Cell Differentiation and Stem Cells",
  goal: "I CAN explain cell differentiation, its advantages and disadvantages, and describe stem cells and their uses.",
  standards: ["4BI1 2.5B", "4BI1 2.6B"],
  
  vocabulary: [
    { term: "Differentiation", definition: "Process by which cells become specialised for particular functions." },
    { term: "Stem cell", definition: "Undifferentiated cell capable of dividing and becoming specialised cells." },
    { term: "Embryonic stem cell", definition: "Stem cell from early embryo that can become any cell type." },
    { term: "Adult stem cell", definition: "Stem cell found in adult tissues that can become limited cell types." },
    { term: "Therapeutic cloning", definition: "Use of stem cells to produce tissues for medical treatment." },
    { term: "Potency", definition: "Range of cell types a stem cell can become." },
  ],
  concepts: [
    {
      id: "ebi11-u5-differentiation",
      title: "Cell differentiation",
      skill: "Explain how cells differentiate and the advantages and disadvantages of specialisation.",
      lesson: {
        sections: [
          {
            heading: "What differentiation is",
            body: "All cells in an organism contain the same DNA, but only some genes are switched on in each cell type. **Differentiation** is the process by which cells become specialised, changing shape and containing different organelles to perform specific functions. Once differentiated, most cells cannot revert to unspecialised stem cells.",
          },
          {
            heading: "Advantages and disadvantages",
            body: "Advantages: specialised cells perform functions efficiently; division of labour allows complex organisms; tissues/organs can work together. Disadvantages: specialised cells may lose ability to divide and repair; damage to some tissues may be hard to repair; errors in differentiation can cause disease such as cancer.",
          },
          {
            heading: "Examples",
            body: "A red blood cell loses its nucleus and organelles to carry more haemoglobin. A mesophyll cell develops many chloroplasts for photosynthesis. A guard cell develops a shape that can change to control stomata.",
          },
        ],
        keyFormulas: [
          { name: "Differentiation", statement: "Same DNA; different genes active; specialised structure/function" },
          { name: "Advantages", statement: "Efficient specialised functions; division of labour" },
          { name: "Disadvantages", statement: "Reduced ability to divide/repair; risk of errors" },
        ],
        workedExample: {
          problem: "Why do all cells in an organism contain the same DNA?",
          solution: "Differentiation changes which genes are expressed, not the DNA itself. Cells become specialised by activating different genes.",
        },
      },
      questions: [
        {
          id: "ebi11-u5-diff-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cell differentiation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cells becoming specialised"
                    },
                    {
                              "id": "b",
                              "text": "Cells dividing rapidly"
                    },
                    {
                              "id": "c",
                              "text": "Cells losing DNA"
                    },
                    {
                              "id": "d",
                              "text": "Cells becoming larger only"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Differentiation",
                              "statement": "Cells become specialised for functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Differentiation = specialisation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Cells becoming specialised"
},
        },
        {
          id: "ebi11-u5-diff-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State one advantage of cell specialisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Specialisation",
                              "statement": "Efficient division of labour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specialised cells perform functions efficiently.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Allows complex multicellular organisation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Efficient specialised functions"
},
        },
        {
          id: "ebi11-u5-diff-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a red blood cell is an example of differentiation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Differentiation example",
                              "statement": "Cell structure changes to suit function."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Red blood cell loses nucleus and organelles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It contains haemoglobin for oxygen transport.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Biconcave shape increases surface area.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "RBC differentiated for oxygen transport"
},
        },
        {
          id: "ebi11-u5-diff-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "State one advantage and one disadvantage of cell specialisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Specialisation trade-off",
                              "statement": "Efficiency vs reduced flexibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage: efficient specialised function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Disadvantage: reduced ability to divide/repair.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both linked to division of labour.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Errors can cause disease.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Efficient but less flexible"
},
        },
        {
          id: "ebi11-u5-diff-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why specialised cells often cannot revert to stem cells.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain gene expression changes.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain loss of division ability.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one consequence.",
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
                              "name": "Differentiation irreversibility",
                              "statement": "Specialised cells have fixed gene expression."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different genes are switched on/off during differentiation.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Many specialised cells lose ability to divide.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Damage may be hard to repair.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Specialised cells have fixed gene expression and limited division"
},
        },
        {
          id: "ebi11-u5-diff-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define differentiation. (b) Explain why cells have same DNA but different functions. (c) State two advantages. (d) State two disadvantages. (e) Give one example. (f) Explain why specialised cells may not repair damage.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Differentiation.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Same DNA/different function.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Advantages.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Disadvantages.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Example.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Repair limitation.",
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
                              "name": "Differentiation",
                              "statement": "Specialisation by gene expression."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cells become specialised.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Same DNA; different genes active.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Efficient function; division of labour.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Reduced division/repair; risk of errors.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "Example: red blood cell or guard cell.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "e"
                    },
                    {
                              "reasoning": "Specialised cells often cannot divide to replace lost cells.",
                              "marks": 2,
                              "markCode": "R",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Differentiation gives efficiency but reduces flexibility."
},
        },
      ],
    },
    {
      id: "ebi11-u5-stem-cells",
      title: "Stem cells and their uses",
      skill: "Describe types of stem cells, therapeutic uses and ethical issues.",
      lesson: {
        sections: [
          {
            heading: "Types of stem cells",
            body: "**Stem cells** are undifferentiated cells that can divide and become specialised cells. **Embryonic stem cells** come from early embryos and can become any cell type (totipotent/pluripotent). **Adult stem cells** are found in tissues such as bone marrow and can become limited cell types. Adult stem cells are already differentiated partially and have lower potency.",
          },
          {
            heading: "Uses",
            body: "Stem cells can be used in medicine to replace damaged cells, treat diseases such as leukaemia, Parkinson's disease and spinal cord injury, and grow tissues for transplantation. Therapeutic cloning produces stem cells genetically identical to a patient, reducing rejection risk. Bone marrow transplants treat blood disorders.",
          },
          {
            heading: "Ethical issues",
            body: "Using embryonic stem cells requires destroying embryos, raising ethical concerns for some people. Adult stem cells avoid this issue but are less versatile. There are also concerns about uncontrolled cell growth/cancer, informed consent and cloning. Regulation aims to balance medical benefits with ethical concerns.",
          },
        ],
        keyFormulas: [
          { name: "Stem cell", statement: "Undifferentiated cell capable of becoming specialised cells" },
          { name: "Embryonic stem cell", statement: "High potency; can become many cell types" },
          { name: "Adult stem cell", statement: "Lower potency; limited cell types" },
        ],
        workedExample: {
          problem: "Why might adult stem cells be preferred ethically over embryonic stem cells?",
          solution: "Adult stem cells can be obtained without destroying embryos, avoiding the main ethical objection, though they are less versatile.",
        },
      },
      questions: [
        {
          id: "ebi11-u5-stem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stem cell?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A red blood cell"
                    },
                    {
                              "id": "b",
                              "text": "An undifferentiated cell that can become specialised"
                    },
                    {
                              "id": "c",
                              "text": "A plant cell wall"
                    },
                    {
                              "id": "d",
                              "text": "A nerve impulse"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stem cell",
                              "statement": "Undifferentiated cell capable of specialisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stem cells are undifferentiated.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** An undifferentiated cell that can become specialised"
},
        },
        {
          id: "ebi11-u5-stem-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one use of stem cells in medicine.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stem cell uses",
                              "statement": "Replace damaged cells/treat disease."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Replace damaged cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Treat disease such as leukaemia/Parkinson's.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Replace damaged cells/treat disease"
},
        },
        {
          id: "ebi11-u5-stem-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare embryonic and adult stem cells.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Embryonic vs adult stem cells",
                              "statement": "Potency and ethical issues differ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Embryonic stem cells can become many cell types.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Adult stem cells are more limited.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Embryonic use raises ethical concerns; adult less so.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Embryonic higher potency; adult lower but ethical advantage"
},
        },
        {
          id: "ebi11-u5-stem-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one ethical issue with embryonic stem cells.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Stem cell ethics",
                              "statement": "Embryo destruction concerns some people."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Obtaining embryonic stem cells destroys embryo.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Some people believe embryo has moral status.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This creates ethical debate.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Regulation tries to balance benefits/concerns.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Embryo destruction raises ethical concerns"
},
        },
        {
          id: "ebi11-u5-stem-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how therapeutic cloning could help treat disease.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain cloning process.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain stem cell production.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain advantage.",
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
                              "name": "Therapeutic cloning",
                              "statement": "Patient-specific stem cells reduce rejection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Patient cell nucleus inserted into egg cell.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Stem cells produced are genetically identical to patient.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Reduced immune rejection when transplanting tissues.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Therapeutic cloning makes patient-specific stem cells"
},
        },
        {
          id: "ebi11-u5-stem-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define stem cell. (b) Compare embryonic and adult stem cells. (c) State two medical uses. (d) Explain one ethical issue. (e) Explain therapeutic cloning. (f) State one risk of stem cell treatment.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Stem cell.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Embryonic vs adult.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Medical uses.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Ethical issue.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Therapeutic cloning.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Risk.",
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
                              "name": "Stem cells",
                              "statement": "Undifferentiated cells with therapeutic potential."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Undifferentiated cell that can become specialised.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Embryonic high potency/ethical concerns; adult lower potency/ethical advantage.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Replace damaged cells; treat diseases like leukaemia/Parkinson's.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Embryo destruction raises moral concerns.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "Patient-specific stem cells reduce rejection.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Risk: uncontrolled growth/cancer.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Stem cells offer medical benefits but raise ethical and safety issues."
},
        },
      ],
    },
  ],

};
