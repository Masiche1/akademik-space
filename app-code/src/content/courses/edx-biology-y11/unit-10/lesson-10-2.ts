import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ebi11-u10-lesson-10-2",
  code: "10-2",
  title: "Organs and Organ Systems",
  goal: "I CAN explain how tissues form organs and organs cooperate in systems.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Organisation of multicellular organisms", "4BI1 organs and systems"],
  
  vocabulary: [
    { term: "Organ", definition: "Structure made of different tissues working together for a function." },
    { term: "Organ system", definition: "Group of organs cooperating to perform a major body function." },
    { term: "Digestive system", definition: "System breaking down and absorbing food (mouth to anus)." },
    { term: "Circulatory system", definition: "System of heart, blood vessels and blood transporting substances." },
    { term: "Respiratory system", definition: "System of lungs, airways and diaphragm for gas exchange." },
    { term: "Nervous system", definition: "System of brain, spinal cord and nerves coordinating responses." },
    { term: "Excretory system", definition: "System of kidneys and bladder removing nitrogenous waste." },
  ],
  concepts: [
    {
      id: "ebi11-u10-organs",
      title: "Organs and their structure",
      skill: "Define an organ and describe how multiple tissues combine in examples such as the heart and leaf.",
      lesson: {
        sections: [
          {
            heading: "What makes an organ",
            body: "An organ contains several different tissues arranged to perform a specific function — more than the sum of its parts. Examples: heart, stomach, lung, kidney, leaf, root.",
          },
          {
            heading: "The heart as an organ",
            body: "Heart contains cardiac muscle (contracts), connective tissue (structure/valves), epithelial tissue (lining), nerve tissue (coordination) and blood vessels. Together they pump blood.",
          },
          {
            heading: "The leaf as an organ",
            body: "Leaf contains epidermal tissue (protection), palisade and spongy mesophyll (photosynthesis), vascular bundles (transport), guard cells (stomatal control). Together they photosynthesise and exchange gases.",
          },
        ],
        keyFormulas: [
          { name: "Organ", statement: "Different tissues → one coordinated function" },
          { name: "Examples", statement: "Heart, stomach, lung, leaf, root, kidney" },
        ],
        workedExample: {
          problem: "Explain why the leaf qualifies as an organ.",
          solution: "It is made of several different tissues — epidermis, mesophyll, vascular bundles and guard cells — organised to carry out photosynthesis and gas exchange.",
        },
      },
      questions: [
        {
          id: "ebi11-u10-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an organ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A single cell"
                    },
                    {
                              "id": "b",
                              "text": "A group of identical cells"
                    },
                    {
                              "id": "c",
                              "text": "Different tissues working together"
                    },
                    {
                              "id": "d",
                              "text": "A whole organ system"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Organ",
                              "statement": "Different tissues, one function."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organ = different tissues working together.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Different tissues working together"
},
        },
        {
          id: "ebi11-u10-org-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two organs in the human body.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Organ",
                              "statement": "Examples: heart, lung, stomach."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heart, lung, stomach, kidney, leaf (any two).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Heart and lung (any two organs)"
},
        },
        {
          id: "ebi11-u10-org-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the tissues found in the heart and their roles.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Heart tissues",
                              "statement": "Multiple tissues for pumping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cardiac muscle tissue contracts to pump blood.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Connective tissue supports and forms valves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Epithelial tissue lines chambers and vessels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Nerve tissue coordinates the heartbeat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Muscle+connective+epithelial+nerve → pump"
},
        },
        {
          id: "ebi11-u10-org-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how the tissues of a leaf work together to photosynthesise.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Leaf as organ",
                              "statement": "Tissues cooperate for photosynthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Palisade mesophyll contains chloroplasts for photosynthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Epidermis protects leaf surface.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Stomata/guard cells allow CO2 entry.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Vascular bundles supply water and remove sugars.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Spongy mesophyll allows gas diffusion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Mesophyll photosynthesises; epidermis protects; stomata exchange; vascular supplies"
},
        },
        {
          id: "ebi11-u10-org-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define organ.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Name two organs and their functions.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two tissues found in the heart.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "State two tissues found in a leaf.",
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
                              "name": "Organs",
                              "statement": "Tissue combinations."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Different tissues working together.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Heart pumps; lung exchanges; stomach digests (any two).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Muscle/connective/epithelial/nerve (any two).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Epidermis/mesophyll/vascular (any two).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Organ def; examples; heart tissues; leaf tissues"
},
        },
        {
          id: "ebi11-u10-org-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define organ. (b) Name three organs. (c) State the function of each. (d) Name two tissues in the heart. (e) Name two tissues in a leaf. (f) Why is an organ more than a tissue?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Organ definition.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Three organs.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Functions.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Heart tissues.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Leaf tissues.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Organ vs tissue.",
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
                              "name": "Organs",
                              "statement": "Tissue-level organisation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Different tissues working together for a function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Heart, lung, stomach, leaf (any three).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pump/exchange/digest/photosynthesise (any three correct).",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Muscle + connective/epithelial/nerve (any two).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Epidermis + mesophyll/vascular (any two).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Organs integrate multiple tissue types for complex function.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Def; organs; functions; heart/leaf tissues; organ>tissue"
},
        },
      ],
    },
    {
      id: "ebi11-u10-systems",
      title: "Organ systems",
      skill: "Describe major organ systems and explain how they depend on each other.",
      lesson: {
        sections: [
          {
            heading: "Major systems",
            body: "Digestive (mouth→stomach→intestines): breaks down and absorbs food. Circulatory (heart, blood vessels, blood): transports substances. Respiratory (lungs, airways, diaphragm): gas exchange. Nervous (brain, spinal cord, nerves): coordinates responses. Excretory (kidneys, bladder): removes nitrogenous waste. Reproductive: produces offspring.",
          },
          {
            heading: "Systems are interdependent",
            body: "Respiratory supplies O2 to blood; circulatory delivers it to cells. Digestive provides nutrients; circulatory transports them. Nervous controls muscle contraction and glands. Excretory removes wastes produced by respiration.",
          },
          {
            heading: "Homeostasis",
            body: "Healthy function requires all systems working together — the body maintains constant internal conditions (temperature, glucose, water) through coordinated organ systems.",
          },
        ],
        keyFormulas: [
          { name: "Organ system", statement: "Organs cooperating for a major function" },
          { name: "Interdependence", statement: "Systems depend on each other for homeostasis" },
        ],
        workedExample: {
          problem: "Why can the respiratory and circulatory systems not function independently?",
          solution: "Lungs oxygenate blood but cannot deliver it; the heart pumps oxygenated blood to cells and returns CO2 to lungs. Each is essential to the other's function.",
        },
      },
      questions: [
        {
          id: "ebi11-u10-sys-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an organ system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A single organ"
                    },
                    {
                              "id": "b",
                              "text": "A group of organs working together"
                    },
                    {
                              "id": "c",
                              "text": "A single tissue"
                    },
                    {
                              "id": "d",
                              "text": "A cell type"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Organ system",
                              "statement": "Organs cooperating."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "System = group of organs working together.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Group of organs working together"
},
        },
        {
          id: "ebi11-u10-sys-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one organ system and its main function.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Organ system",
                              "statement": "System + function."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. circulatory = transport; respiratory = gas exchange.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "System and function correctly matched.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. circulatory = transport"
},
        },
        {
          id: "ebi11-u10-sys-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the respiratory and circulatory systems depend on each other.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "System interdependence",
                              "statement": "Lungs oxygenate; circulation distributes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lungs oxygenate blood and remove CO2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Heart pumps oxygenated blood to body cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cells respire, using O2 and producing CO2.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "CO2 returns to lungs via blood for removal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lungs↔circulation exchange gases continuously"
},
        },
        {
          id: "ebi11-u10-sys-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe how the digestive and circulatory systems work together.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "System interaction",
                              "statement": "Nutrition supply chain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Digestive system breaks food into absorbable products.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Products absorbed into blood in small intestine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Circulatory system transports nutrients to all cells.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Also transports oxygen needed for respiration.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Wastes carried to excretory organs for removal.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Digestion→absorption→circulation distributes nutrients"
},
        },
        {
          id: "ebi11-u10-sys-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define organ system.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Name two organ systems.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "State the function of each.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how two systems depend on each other.",
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
                              "name": "Organ systems",
                              "statement": "Cooperating organs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Organs cooperating for a major function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Circulatory, respiratory, digestive, nervous (any two).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Transport/gas exchange/digestion/coordination (any two).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "e.g. respiratory supplies O2; circulatory distributes.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "System def; examples; functions; interdependence"
},
        },
        {
          id: "ebi11-u10-sys-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define organ system. (b) Name three organ systems. (c) State the function of each. (d) Explain how the circulatory and respiratory systems interact. (e) Explain how the digestive and circulatory systems interact.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Definition.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Three systems.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Functions.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Circulatory + respiratory.",
                    "marks": 3
          },
          {
                    "label": "e",
                    "prompt": "Digestive + circulatory.",
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
                              "name": "Organ systems",
                              "statement": "Cooperation for homeostasis."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Organs cooperating for a major function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Circulatory, respiratory, digestive, nervous, excretory (any three).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Transport/gas exchange/digestion/coordination/waste removal.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Lungs oxygenate blood; heart pumps it; CO2 returns.",
                              "marks": 3,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Digested nutrients absorbed into blood and distributed.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Def; systems; functions; interactions"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebi11-u10-systems-notes",
      title: "Organs and systems — notes",
      summary: "Organs = different tissues for one function. Systems = organs for a major function. Systems are interdependent for homeostasis.",
      sections: [
        { heading: "Key idea", body: "Levels: cell→tissue→organ→system→organism." },
        { heading: "Examples", body: "Heart=organ; circulatory=system; lungs+heart cooperate." },
      ],
    },
  ],
};
