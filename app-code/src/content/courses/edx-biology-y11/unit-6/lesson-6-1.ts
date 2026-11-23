import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ebi11-u6-lesson-6-1",
  code: "6-1",
  title: "Biological Molecules",
  goal: "I CAN describe the elements and basic units of carbohydrates, proteins and lipids and explain why large molecules are useful.",
  standards: ["4BI1 2.7", "4BI1 2.8", "4BI1 2.9"],
  
  vocabulary: [
    { term: "Carbohydrate", definition: "Molecule containing carbon, hydrogen and oxygen; includes sugars, starch and glycogen." },
    { term: "Protein", definition: "Molecule containing carbon, hydrogen, oxygen and nitrogen; made from amino acids." },
    { term: "Lipid", definition: "Molecule containing carbon, hydrogen and oxygen; made from fatty acids and glycerol." },
    { term: "Monomer", definition: "Small basic unit from which a polymer is built." },
    { term: "Polymer", definition: "Large molecule made from repeated monomers." },
    { term: "Amino acid", definition: "Basic unit of proteins." },
  ],
  concepts: [
    {
      id: "ebi11-u6-molecules",
      title: "Elements and building blocks",
      skill: "Identify elements and basic units of carbohydrates, proteins and lipids.",
      lesson: {
        sections: [
          {
            heading: "Elements",
            body: "Carbohydrates contain carbon, hydrogen and oxygen. Proteins contain carbon, hydrogen, oxygen and nitrogen (some also sulfur). Lipids contain carbon, hydrogen and oxygen. Nitrogen is a useful indicator of protein.",
          },
          {
            heading: "Building blocks",
            body: "Carbohydrates are built from simple sugars; starch (plants) and glycogen (animals) are polymers of glucose. Proteins are built from amino acids. Lipids are built from fatty acids and glycerol. Large molecules are useful because they are insoluble or less soluble, so they do not draw water into cells by osmosis.",
          },
          {
            heading: "Storage and structure",
            body: "Starch and glycogen store glucose; proteins form enzymes, haemoglobin and structural tissues; lipids store energy, insulate and form membranes. Large molecules pack a lot of energy or material into a small space.",
          },
        ],
        keyFormulas: [
          { name: "Carbohydrate", statement: "C, H, O; built from simple sugars; starch/glycogen polymers" },
          { name: "Protein", statement: "C, H, O, N; built from amino acids" },
          { name: "Lipid", statement: "C, H, O; built from fatty acids + glycerol" },
        ],
        workedExample: {
          problem: "Why is starch a better storage molecule than glucose in plants?",
          solution: "Starch is a polymer of glucose, insoluble and compact, so it stores a large amount of glucose without affecting osmosis.",
        },
      },
      questions: [
        {
          id: "ebi11-u6-mol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which element is present in proteins but not carbohydrates?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carbon"
                    },
                    {
                              "id": "b",
                              "text": "Hydrogen"
                    },
                    {
                              "id": "c",
                              "text": "Oxygen"
                    },
                    {
                              "id": "d",
                              "text": "Nitrogen"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Protein elements",
                              "statement": "Proteins contain nitrogen; carbohydrates do not."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Proteins contain nitrogen.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(d)** Nitrogen"
},
        },
        {
          id: "ebi11-u6-mol-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the basic units of proteins and lipids.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monomers",
                              "statement": "Amino acids for protein; fatty acids + glycerol for lipid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protein: amino acids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lipid: fatty acids and glycerol.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Amino acids; fatty acids + glycerol"
},
        },
        {
          id: "ebi11-u6-mol-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why starch is a better storage molecule than glucose in plants.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Storage molecules",
                              "statement": "Polymers are insoluble and do not affect osmosis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Starch is a polymer of glucose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It is insoluble and does not draw water into cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It packs a large amount of glucose into small space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Starch is insoluble and compact storage"
},
        },
        {
          id: "ebi11-u6-mol-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare carbohydrates, proteins and lipids.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Biological molecules",
                              "statement": "Different elements and building blocks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carbohydrates C,H,O from sugars.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Proteins C,H,O,N from amino acids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lipids C,H,O from fatty acids + glycerol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Proteins contain nitrogen.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Different elements and units"
},
        },
        {
          id: "ebi11-u6-mol-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why large molecules are useful storage molecules in cells.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain insolubility.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain compactness.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one example.",
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
                              "name": "Storage molecules",
                              "statement": "Large insoluble molecules store material without affecting osmosis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insoluble molecules do not dissolve and draw water into cells.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Polymers pack many monomers into small space.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Example: starch/glycogen or lipid.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Large insoluble molecules are compact storage"
},
        },
        {
          id: "ebi11-u6-mol-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) State elements in carbohydrates, proteins and lipids. (b) Name basic units. (c) Explain why proteins contain nitrogen. (d) Explain why starch/glycogen are good storage molecules. (e) Give one function of proteins. (f) Give one function of lipids.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Elements.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Units.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Nitrogen in protein.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Storage advantage.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Protein function.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Lipid function.",
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
                              "name": "Biological molecules",
                              "statement": "Carbohydrates, proteins and lipids have characteristic elements and units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carbohydrates C,H,O; proteins C,H,O,N; lipids C,H,O.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Carbohydrates from sugars; proteins from amino acids; lipids from fatty acids + glycerol.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Nitrogen is part of amino acids.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Insoluble and compact storage.",
                              "marks": 2,
                              "markCode": "R",
                              "part": "d"
                    },
                    {
                              "reasoning": "Growth/repair/enzymes/hormones.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Energy storage/insulation/membranes.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Biological molecules have characteristic elements and units."
},
        },
      ],
    },
    {
      id: "ebi11-u6-food-tests",
      title: "Food tests",
      skill: "Describe and interpret tests for glucose, starch, protein and lipid.",
      lesson: {
        sections: [
          {
            heading: "Food tests",
            body: "Tests identify molecules by colour change:\n\n- Benedict's solution detects reducing sugars such as glucose: blue → green → yellow → orange → brick-red after heating.\n- Iodine solution detects starch: orange-brown → blue-black.\n- Biuret solution detects protein: blue → purple.\n- Ethanol emulsion test detects lipid: shake with ethanol, pour into water → cloudy white emulsion.",
          },
          {
            heading: "Fair testing",
            body: "Use equal volumes of sample and reagent, same heating temperature and time, and a control. Absence of colour change means the substance is not present, but controls confirm the reagent works. Ethanol is flammable; heat Benedict's in a water bath; wear eye protection for Biuret.",
          },
          {
            heading: "Interpreting results",
            body: "Benedict's final colour depends on concentration: green for low, brick-red for high. Blue-black iodine confirms starch. Purple Biuret confirms protein. Cloudy emulsion confirms lipid. A positive result shows the molecule is present; a negative result shows it is absent if controls are correct.",
          },
        ],
        keyFormulas: [
          { name: "Benedict's", statement: "Blue → brick-red = reducing sugar" },
          { name: "Iodine", statement: "Orange-brown → blue-black = starch" },
          { name: "Biuret", statement: "Blue → purple = protein" },
          { name: "Ethanol emulsion", statement: "Cloudy white emulsion = lipid" },
        ],
        workedExample: {
          problem: "A sample turns Biuret solution purple. What does this show?",
          solution: "Purple is a positive Biuret test, so the sample contains protein.",
        },
      },
      questions: [
        {
          id: "ebi11-u6-test-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which reagent detects starch?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Benedict's solution"
                    },
                    {
                              "id": "b",
                              "text": "Biuret solution"
                    },
                    {
                              "id": "c",
                              "text": "Iodine solution"
                    },
                    {
                              "id": "d",
                              "text": "Ethanol"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Iodine test",
                              "statement": "Detects starch by blue-black colour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iodine detects starch.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Iodine solution"
},
        },
        {
          id: "ebi11-u6-test-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the positive result for the Biuret test.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Biuret test",
                              "statement": "Blue → purple = protein."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purple colour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Indicates protein present.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Purple"
},
        },
        {
          id: "ebi11-u6-test-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the Benedict's test for reducing sugar.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Benedict's test",
                              "statement": "Heat sample with reagent; colour change indicates sugar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add Benedict's solution to sample.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Heat in water bath.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Blue → green/yellow/orange/brick-red = reducing sugar.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Heat with Benedict's; colour change = sugar"
},
        },
        {
          id: "ebi11-u6-test-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to test for lipid in a food sample.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Ethanol emulsion test",
                              "statement": "Shake with ethanol, pour into water; cloudy emulsion = lipid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shake sample with ethanol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pour into water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cloudy white emulsion = lipid present.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Clear solution = no lipid.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Ethanol + water → cloudy emulsion = lipid"
},
        },
        {
          id: "ebi11-u6-test-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student tests four foods for starch and protein. Describe a fair method and expected results.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe starch test.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe protein test.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State fairness controls.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Food tests",
                              "statement": "Colour changes identify molecules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add iodine; blue-black = starch.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Add Biuret; purple = protein.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Use equal volumes and controls.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Iodine for starch; Biuret for protein; controls needed"
},
        },
        {
          id: "ebi11-u6-test-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) State test for glucose, starch, protein and lipid. (b) Describe positive result for each. (c) Explain why heating is needed for Benedict's. (d) Explain why controls are needed. (e) State safety precaution for ethanol test. (f) Interpret: sample turns orange with Benedict's and stays blue with iodine.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Tests.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Positive results.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Heating reason.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Controls.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Safety.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Interpretation.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Food tests",
                              "statement": "Colour changes identify molecules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benedict's, iodine, Biuret, ethanol emulsion.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Brick-red/colour; blue-black; purple; cloudy emulsion.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Heating speeds reaction for Benedict's.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Controls confirm reagents work.",
                              "marks": 2,
                              "markCode": "R",
                              "part": "d"
                    },
                    {
                              "reasoning": "Ethanol is flammable; no flames.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "e"
                    },
                    {
                              "reasoning": "Reducing sugar present; starch absent.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Food tests identify molecules by characteristic colour changes."
},
        },
      ],
    },
  ],

};
