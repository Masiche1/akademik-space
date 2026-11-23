import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ebi11-u6-lesson-6-2",
  code: "6-2",
  title: "Enzyme Action and Specificity",
  goal: "I CAN explain how enzymes catalyse reactions, the lock-and-key model and enzyme-substrate specificity.",
  standards: ["4BI1 2.10", "4BI1 2.11", "4BI1 2.13"],
  
  vocabulary: [
    { term: "Enzyme", definition: "Protein that acts as a biological catalyst." },
    { term: "Active site", definition: "Region of enzyme with specific shape that binds substrate." },
    { term: "Substrate", definition: "Molecule that binds to enzyme active site and is changed to products." },
    { term: "Catalyst", definition: "Substance that speeds up reaction without being used up." },
    { term: "Enzyme–substrate complex", definition: "Temporary structure formed when substrate binds to active site." },
    { term: "Specificity", definition: "Each enzyme acts only on substrates with complementary shape." },
  ],
  concepts: [
    {
      id: "ebi11-u6-enzyme-action",
      title: "Enzyme action and lock-and-key",
      skill: "Describe how enzymes catalyse reactions and the lock-and-key model.",
      lesson: {
        sections: [
          {
            heading: "Enzymes as catalysts",
            body: "Enzymes are proteins that act as biological catalysts. They speed up metabolic reactions without being used up. Enzymes catalyse both breakdown reactions, such as digestion and respiration, and synthesis reactions, such as building starch or proteins. A small amount of enzyme can catalyse many reactions.",
          },
          {
            heading: "Lock and key",
            body: "Each enzyme has an active site with a shape complementary to its substrate. The substrate fits the active site like a key in a lock, forming an enzyme–substrate complex. The substrate is then changed into products, which leave the active site. The enzyme is unchanged and can be used again.",
          },
          {
            heading: "Metabolic reactions",
            body: "Enzymes are involved in all metabolic reactions: digestion, respiration, protein synthesis, photosynthesis and active transport. Without enzymes, these reactions would be too slow for life.",
          },
        ],
        keyFormulas: [
          { name: "Enzyme action", statement: "Enzyme + substrate → enzyme–substrate complex → enzyme + products" },
          { name: "Catalyst", statement: "Speeds reaction without being used up" },
          { name: "Lock and key", statement: "Substrate fits complementary active site" },
        ],
        workedExample: {
          problem: "What happens when a substrate binds to an enzyme?",
          solution: "They form an enzyme–substrate complex; the substrate is changed into products, which leave; the enzyme is released unchanged.",
        },
      },
      questions: [
        {
          id: "ebi11-u6-action-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of molecule is an enzyme?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carbohydrate"
                    },
                    {
                              "id": "b",
                              "text": "Lipid"
                    },
                    {
                              "id": "c",
                              "text": "Protein"
                    },
                    {
                              "id": "d",
                              "text": "Vitamin"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Enzyme",
                              "statement": "Protein biological catalyst."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enzymes are proteins.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Protein"
},
        },
        {
          id: "ebi11-u6-action-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define active site.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Active site",
                              "statement": "Region where substrate binds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Region of enzyme with specific shape.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Binds complementary substrate.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Specific-shaped region that binds substrate"
},
        },
        {
          id: "ebi11-u6-action-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why enzymes are described as catalysts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Catalyst",
                              "statement": "Speeds reaction without being used up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enzymes speed up metabolic reactions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They are not used up or changed permanently.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "One enzyme can catalyse many reactions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Catalyst = speeds reaction, not used up"
},
        },
        {
          id: "ebi11-u6-action-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the lock-and-key model of enzyme action.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Lock and key",
                              "statement": "Substrate fits complementary active site."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substrate has complementary shape to active site.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They form enzyme–substrate complex.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Substrate is changed to products.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enzyme is released unchanged.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Substrate fits active site → complex → products"
},
        },
        {
          id: "ebi11-u6-action-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how enzymes are involved in digestion and respiration.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain digestion enzymes.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain respiration enzymes.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State why enzymes are needed.",
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
                              "name": "Enzyme roles",
                              "statement": "Enzymes catalyse breakdown and energy-release reactions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Amylase/protease/lipase digest food molecules.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Respiration enzymes release energy from glucose.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Without enzymes reactions too slow for life.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Enzymes catalyse digestion and respiration"
},
        },
        {
          id: "ebi11-u6-action-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define enzyme. (b) Define active site and substrate. (c) Explain lock-and-key model. (d) Explain why enzymes are catalysts. (e) Give two examples of enzyme-catalysed reactions. (f) State what happens to enzyme after reaction.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Enzyme.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Active site/substrate.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Lock and key.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Catalyst.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Examples.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Enzyme after reaction.",
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
                              "name": "Enzyme",
                              "statement": "Specific protein catalyst."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protein biological catalyst.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Active site binds substrate; substrate is molecule acted on.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Complementary shapes form complex → products.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Speeds reaction without being used up.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "Digestion, respiration, protein synthesis.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Enzyme is released unchanged and can be reused.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Enzymes are specific protein catalysts acting via active sites."
},
        },
      ],
    },
    {
      id: "ebi11-u6-specificity",
      title: "Enzyme specificity",
      skill: "Explain why enzymes are specific to their substrates and give examples.",
      lesson: {
        sections: [
          {
            heading: "Specificity",
            body: "Enzymes are specific: only substrates with a complementary shape fit the active site. Amylase acts on starch but not protein; protease acts on protein but not starch; lipase acts on lipids. This specificity is why different enzymes are needed for different food molecules.",
          },
          {
            heading: "Examples",
            body: "Salivary amylase starts starch digestion in mouth; pancreatic amylase continues in duodenum; maltase finishes to glucose. Pepsin/proteases digest proteins in stomach and intestine. Lipase digests lipids after bile emulsifies them. Each enzyme has optimum pH and temperature.",
          },
          {
            heading: "Factors affecting specificity",
            body: "Changes in temperature or pH can alter active-site shape, reducing or preventing substrate binding. Denaturation is permanent loss of activity. Competitive inhibitors can also block active sites.",
          },
        ],
        keyFormulas: [
          { name: "Specificity", statement: "Only complementary substrates bind" },
          { name: "Amylase", statement: "Acts on starch → maltose" },
          { name: "Protease", statement: "Acts on protein → peptides/amino acids" },
          { name: "Lipase", statement: "Acts on lipids → fatty acids + glycerol" },
        ],
        workedExample: {
          problem: "Why does amylase not digest protein?",
          solution: "Amylase's active site has a shape complementary to starch, not protein. Protein cannot fit, so amylase cannot catalyse its breakdown.",
        },
      },
      questions: [
        {
          id: "ebi11-u6-spec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does enzyme specificity mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Each enzyme acts on a specific substrate"
                    },
                    {
                              "id": "b",
                              "text": "Enzymes work at all temperatures"
                    },
                    {
                              "id": "c",
                              "text": "Enzymes are destroyed after use"
                    },
                    {
                              "id": "d",
                              "text": "Enzymes can act on any molecule"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Specificity",
                              "statement": "Only complementary substrates bind."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specificity means specific substrate.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Each enzyme acts on a specific substrate"
},
        },
        {
          id: "ebi11-u6-spec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the substrate of lipase.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lipase",
                              "statement": "Acts on lipids."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lipids/triglycerides.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lipase acts on lipids.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Lipids/triglycerides"
},
        },
        {
          id: "ebi11-u6-spec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why protease cannot digest starch.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Specificity",
                              "statement": "Active site shape must match substrate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Protease active site fits protein.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Starch has different shape and cannot bind.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "So protease cannot catalyse starch breakdown.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Shape mismatch prevents action"
},
        },
        {
          id: "ebi11-u6-spec-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Match three enzymes to their substrates and products.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Enzyme-substrate pairs",
                              "statement": "Amylase-starch, protease-protein, lipase-lipid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Amylase → starch/maltose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Protease → protein/peptides/amino acids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lipase → lipid/fatty acids + glycerol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each specific to substrate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Amylase-starch; protease-protein; lipase-lipid"
},
        },
        {
          id: "ebi11-u6-spec-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how temperature or pH changes can reduce enzyme activity.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain active-site shape change.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain substrate binding.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Define denaturation.",
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
                              "name": "Enzyme factors",
                              "statement": "Temperature/pH alter active-site shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Temperature/pH changes alter active-site shape.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Substrate cannot bind if shape changes.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Denaturation is permanent loss of activity.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Temperature/pH alter active-site shape"
},
        },
        {
          id: "ebi11-u6-spec-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define specificity. (b) Explain lock-and-key. (c) Give three enzyme-substrate examples. (d) Explain why amylase cannot digest protein. (e) Explain how pH affects enzyme activity. (f) State one consequence of denaturation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Specificity.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Lock-and-key.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Examples.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Amylase/protein.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "pH effect.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Denaturation.",
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
                              "name": "Specificity",
                              "statement": "Enzymes act only on complementary substrates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only specific substrates bind.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Substrate fits active site → complex → products.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Amylase-starch; protease-protein; lipase-lipid.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Active site shape fits starch not protein.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "d"
                    },
                    {
                              "reasoning": "pH changes active-site shape and binding.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "Permanent loss of activity.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "f"
                    }
          ],
          "finalAnswer": "Enzyme specificity depends on active-site shape."
},
        },
      ],
    },
  ],

};
