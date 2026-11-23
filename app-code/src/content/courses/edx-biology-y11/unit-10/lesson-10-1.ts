import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ebi11-u10-lesson-10-1",
  code: "10-1",
  title: "Tissues in Animals and Plants",
  goal: "I CAN identify major tissue types in animals and plants and state their functions.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Organisation of multicellular organisms", "4BI1 tissues"],
  
  vocabulary: [
    { term: "Tissue", definition: "Group of similar cells organised to perform a shared function." },
    { term: "Epithelial tissue", definition: "Animal tissue covering surfaces and lining organs." },
    { term: "Muscle tissue", definition: "Animal tissue that contracts to produce movement." },
    { term: "Glandular tissue", definition: "Animal tissue that secretes enzymes or hormones." },
    { term: "Connective tissue", definition: "Animal tissue that supports and connects body parts (e.g. blood, bone)." },
    { term: "Epidermal tissue", definition: "Plant tissue forming the outer protective layer." },
    { term: "Mesophyll", definition: "Plant photosynthetic tissue of palisade and spongy cells." },
    { term: "Meristem", definition: "Plant tissue of dividing cells responsible for growth." },
  ],
  concepts: [
    {
      id: "ebi11-u10-animal-tissues",
      title: "Animal tissues",
      skill: "Describe epithelial, muscle, glandular, connective and nerve tissues and their roles.",
      lesson: {
        sections: [
          {
            heading: "Covering and lining tissues",
            body: "Epithelial tissue covers body surfaces and lines organs (skin, gut lining) — protects and allows exchange. Glandular tissue is modified epithelial tissue that secretes digestive enzymes and hormones.",
          },
          {
            heading: "Contractile and supporting tissues",
            body: "Muscle tissue contracts to produce movement — cardiac (heart), skeletal (limbs) and smooth (gut wall). Connective tissue supports and connects: blood, bone, cartilage, adipose (fat) tissue.",
          },
          {
            heading: "Nerve tissue",
            body: "Nerve tissue consists of neurones that transmit electrical impulses, coordinating responses. It is found throughout the body, especially brain, spinal cord and nerves.",
          },
        ],
        keyFormulas: [
          { name: "Animal tissues", statement: "Epithelial, muscle, glandular, connective, nerve" },
          { name: "Levels", statement: "Cell → tissue → organ → system → organism" },
        ],
        workedExample: {
          problem: "Which tissues are found in the stomach wall and what does each do?",
          solution: "Muscle tissue churns food; glandular tissue secretes gastric juice; epithelial tissue lines and protects the wall.",
        },
      },
      questions: [
        {
          id: "ebi11-u10-at-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tissue contracts to produce movement?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Epithelial"
                    },
                    {
                              "id": "b",
                              "text": "Muscle"
                    },
                    {
                              "id": "c",
                              "text": "Connective"
                    },
                    {
                              "id": "d",
                              "text": "Glandular"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Muscle tissue",
                              "statement": "Contractile tissue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Muscle tissue contracts for movement.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Muscle"
},
        },
        {
          id: "ebi11-u10-at-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the function of epithelial tissue.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Epithelial tissue",
                              "statement": "Covers surfaces and lines organs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Covers body surfaces and lines organs for protection/exchange.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Protection and lining of surfaces"
},
        },
        {
          id: "ebi11-u10-at-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the function of glandular tissue with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Glandular tissue",
                              "statement": "Secretory tissue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Glandular tissue secretes substances.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: stomach glands secrete gastric juice/enzymes.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Or endocrine glands secrete hormones.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Secretions aid digestion or regulate body functions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Secretory tissue — enzymes/hormones"
},
        },
        {
          id: "ebi11-u10-at-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare muscle tissue and connective tissue in structure and function.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Tissue comparison",
                              "statement": "Different roles in body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Muscle: elongated cells that contract for movement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Connective: varied cells in matrix — supports/connects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Muscle function = force/motion; connective = support/transport.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Examples: muscle in heart/limbs; connective = blood/bone.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both essential but serve different purposes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Muscle contracts; connective supports/connects"
},
        },
        {
          id: "ebi11-u10-at-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name three animal tissues.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State the function of each.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Name the tissue that transmits impulses.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Give one example of connective tissue.",
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
                              "name": "Animal tissues",
                              "statement": "Types and roles."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Epithelial/muscle/glandular/connective/nerve (any three).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Protection/contraction/secretion/support/impulse (matched).",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Nerve tissue.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Blood/bone/cartilage/adipose.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tissue types; functions; nerve; connective example"
},
        },
        {
          id: "ebi11-u10-at-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define tissue. (b) Name four animal tissues. (c) State the function of muscle and glandular tissue. (d) What is connective tissue? (e) What does nerve tissue do? (f) Name two organs made of these tissues.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Tissue definition.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Four tissues.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Muscle + glandular functions.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Connective tissue.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Nerve tissue.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Two organs.",
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
                              "name": "Animal tissues",
                              "statement": "Structure and roles."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Group of similar cells with shared function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Epithelial, muscle, glandular, connective, nerve (any four).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Muscle contracts; glandular secretes.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Supports/connects — blood, bone, cartilage.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Carries electrical impulses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Heart, stomach, skin, lung (any two).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tissue def; types; functions; connective; nerve; organs"
},
        },
      ],
    },
    {
      id: "ebi11-u10-plant-tissues",
      title: "Plant tissues",
      skill: "Describe epidermal, photosynthetic, vascular and meristem tissues in plants.",
      lesson: {
        sections: [
          {
            heading: "Protective and photosynthetic tissues",
            body: "Epidermal tissue forms the outer protective layer with a waxy cuticle reducing water loss. Palisade and spongy mesophyll are photosynthetic tissues inside leaves. Guard cells (modified epidermal) control stomata.",
          },
          {
            heading: "Vascular and growing tissues",
            body: "Xylem transports water and minerals upward; phloem transports sucrose between source and sink. Vascular bundles contain both. Meristematic tissue at root and shoot tips divides for growth — the plant equivalent of stem-cell activity.",
          },
          {
            heading: "Tissue organisation",
            body: "Plant tissues are arranged in organs: leaf = epidermis + mesophyll + vascular bundles; stem = epidermis + cortex + vascular bundles; root = epidermis + cortex + vascular cylinder.",
          },
        ],
        keyFormulas: [
          { name: "Plant tissues", statement: "Epidermal, mesophyll, xylem/phloem, meristem" },
          { name: "Meristem", statement: "Dividing tissue at tips → growth" },
        ],
        workedExample: {
          problem: "What tissues would you find in a leaf cross-section?",
          solution: "Upper/lower epidermis (protection), palisade mesophyll (photosynthesis), spongy mesophyll (gas exchange), vascular bundles (xylem+phloem transport), guard cells (stomatal control).",
        },
      },
      questions: [
        {
          id: "ebi11-u10-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which plant tissue transports water and minerals?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Palisade mesophyll"
                    },
                    {
                              "id": "b",
                              "text": "Phloem"
                    },
                    {
                              "id": "c",
                              "text": "Xylem"
                    },
                    {
                              "id": "d",
                              "text": "Epidermis"
                    }
          ],
          "correctChoiceId": "c"
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
                              "reasoning": "Xylem carries water and minerals.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Xylem"
},
        },
        {
          id: "ebi11-u10-pt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the function of epidermal tissue in plants?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Epidermal tissue",
                              "statement": "Protective outer layer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Forms protective outer layer; cuticle reduces water loss.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Protection / waterproofing"
},
        },
        {
          id: "ebi11-u10-pt-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the role of meristem tissue in plant growth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Meristem",
                              "statement": "Dividing tissue for growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Meristem cells are unspecialised and divide rapidly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Found at root tips and shoot tips.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "New cells differentiate into specialised tissues.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Enables lengthwise growth of roots and shoots.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Dividing cells at tips → growth and differentiation"
},
        },
        {
          id: "ebi11-u10-pt-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the tissues found in a leaf and their functions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Leaf tissues",
                              "statement": "Each tissue has a role in the leaf."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Epidermis protects leaf surface.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Palisade mesophyll photosynthesises.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Spongy mesophyll allows gas diffusion.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Vascular bundles (xylem/phloem) transport.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Guard cells control stomata.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Epidermis, palisade, spongy, vascular, guard cells"
},
        },
        {
          id: "ebi11-u10-pt-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name three plant tissues.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State the function of xylem and phloem.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the function of epidermal and meristem tissues.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Name the tissue containing chloroplasts for photosynthesis.",
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
                              "name": "Plant tissues",
                              "statement": "Types and roles."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Epidermal/mesophyll/xylem/phloem/meristem (any three).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Xylem water/minerals up; phloem sucrose source→sink.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Epidermis protects; meristem divides for growth.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Palisade (and spongy) mesophyll.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Tissue types; vascular functions; epidermis/meristem; mesophyll"
},
        },
        {
          id: "ebi11-u10-pt-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define tissue. (b) Name three plant tissues. (c) State the function of xylem and phloem. (d) State the function of epidermal and meristem tissue. (e) Name the photosynthetic tissue. (f) How does tissue organisation differ between leaf and stem?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Tissue definition.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Three tissues.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Vascular functions.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Epidermis + meristem.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Photosynthetic tissue.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Leaf vs stem organisation.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Plant tissues",
                              "statement": "Hierarchy and roles."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Group of similar cells with shared function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Epidermal, mesophyll, xylem, phloem, meristem (any three).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Xylem water up; phloem sucrose source→sink.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Epidermis protects; meristem divides for growth.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Palisade/spongy mesophyll.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Leaf: mesophyll for photosynthesis; stem: cortex/vascular for support+transport.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Def; tissues; vascular; epidermis/meristem; mesophyll; leaf vs stem"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebi11-u10-tissues-notes",
      title: "Tissues — notes",
      summary: "Animal tissues: epithelial, muscle, glandular, connective, nerve. Plant tissues: epidermal, mesophyll, vascular, meristem.",
      sections: [
        { heading: "Key idea", body: "Tissues are groups of similar cells with a shared function." },
        { heading: "Examples", body: "Heart = muscle+connective+epithelial+nerve; leaf = epidermis+mesophyll+vascular." },
      ],
    },
  ],
};
