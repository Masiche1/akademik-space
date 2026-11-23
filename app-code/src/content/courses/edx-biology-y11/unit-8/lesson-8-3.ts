import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ebi11-u8-lesson-8-3",
  code: "8-3",
  title: "Absorption, Assimilation and Digestive Health",
  goal: "I CAN explain absorption in the small intestine, assimilation and digestive health issues.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Animal nutrition", "4BI1 absorption and assimilation"],
  
  vocabulary: [
    { term: "Villus", definition: "Finger-like projection of the ileum wall increasing surface area for absorption." },
    { term: "Absorption", definition: "Movement of digested food products from the gut lumen into blood or lymph." },
    { term: "Assimilation", definition: "Use of absorbed products by cells to build new material or release energy." },
    { term: "Lacteal", definition: "Lymph vessel inside a villus that absorbs lipid products." },
    { term: "Egestion", definition: "Removal of undigested food material (faeces) from the body." },
    { term: "Peristalsis", definition: "Muscular waves moving food along the gut." },
    { term: "Constipation", definition: "Difficulty passing faeces, often due to low fibre intake." },
  ],
  concepts: [
    {
      id: "ebi11-u8-absorb",
      title: "Villi and absorption",
      skill: "Explain how the small intestine is adapted for absorption and the routes of absorbed products.",
      lesson: {
        sections: [
          {
            heading: "Structure of the ileum",
            body: "The ileum is long and folded, with millions of villi. Each villus contains a capillary network and a lacteal (lymph vessel). Villi greatly increase surface area. Microvilli on epithelial cells further increase area. Muscle layers allow peristalsis.",
          },
          {
            heading: "Absorption",
            body: "Monosaccharides (glucose) and amino acids diffuse into capillaries → hepatic portal vein → liver. Fatty acids and glycerol re-form lipids and enter lacteals → lymph → blood. Most absorption occurs in the ileum.",
          },
          {
            heading: "Assimilation and egestion",
            body: "Assimilation: absorbed products are used by cells — glucose for respiration, amino acids for protein synthesis, lipids for membranes/storage. Egestion: undigested material (mostly fibre) passes to the large intestine where water is absorbed, forming faeces expelled via the rectum.",
          },
        ],
        keyFormulas: [
          { name: "Surface area adaptation", statement: "Long ileum + villi + microvilli → huge surface area" },
          { name: "Absorption routes", statement: "Glucose/amino acids → blood capillaries; lipids → lacteal → lymph" },
        ],
        workedExample: {
          problem: "Why is the ileum so folded and full of villi?",
          solution: "The folds, villi and microvilli massively increase surface area, allowing rapid absorption of digested food products into blood and lymph.",
        },
      },
      questions: [
        {
          id: "ebi11-u8-absorb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the small intestine is the main site of absorption?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Duodenum"
                    },
                    {
                              "id": "b",
                              "text": "Ileum"
                    },
                    {
                              "id": "c",
                              "text": "Stomach"
                    },
                    {
                              "id": "d",
                              "text": "Oesophagus"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ileum",
                              "statement": "Main absorption site."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The ileum has villi for absorption.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Ileum"
},
        },
        {
          id: "ebi11-u8-absorb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the lymph vessel inside a villus.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lacteal",
                              "statement": "Lymph vessel in villus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lacteal absorbs lipid products.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Lacteal"
},
        },
        {
          id: "ebi11-u8-absorb-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two structural adaptations of a villus that help absorption.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Villus adaptation",
                              "statement": "Large SA and thin wall aid diffusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Villi greatly increase surface area of ileum wall.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each villus has a dense capillary network close to the surface.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Short diffusion distance into blood.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Lacteal present for lipid absorption.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Large SA; capillaries+lacteal for short diffusion"
},
        },
        {
          id: "ebi11-u8-absorb-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the absorption of glucose and fatty acids after digestion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Absorption routes",
                              "statement": "Monosaccharides to blood; lipids to lymph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Glucose diffuses into blood capillaries of villus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Then carried via hepatic portal vein to liver.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Fatty acids + glycerol re-form lipids and enter lacteal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lacteal drains into lymph then blood.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Amino acids go to blood like glucose.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Glucose→blood capillaries; lipids→lacteal→lymph"
},
        },
        {
          id: "ebi11-u8-absorb-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define absorption and assimilation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State two uses of absorbed glucose and one use of amino acids.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "What happens to undigested food in the large intestine?",
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
                              "name": "Absorption/assimilation",
                              "statement": "Uptake vs use of products."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Absorption: products into blood/lymph; assimilation: cells use them.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both defined distinctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Glucose: respiration energy / glycogen store.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Amino acids: protein synthesis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Water absorbed; faeces formed and egested.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Absorption=uptake; assimilation=use; water absorbed in large intestine"
},
        },
        {
          id: "ebi11-u8-absorb-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name the main absorption site. (b) Define villus. (c) State two adaptations of villi. (d) Where do glucose and lipids go after absorption? (e) Define assimilation. (f) What is egestion?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Site.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Villus.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Two adaptations.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Routes.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Assimilation.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Egestion.",
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
                              "name": "Absorption",
                              "statement": "Ileum villi absorb products."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ileum (small intestine).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Finger-like projection of ileum wall.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Large SA / capillary network + lacteal / thin wall.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Glucose→blood capillaries; lipids→lacteal→lymph.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Cells using absorbed products to build tissue or release energy.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Removal of undigested material (faeces).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ileum; villus; SA adaptations; blood vs lymph; assimilation; egestion"
},
        },
      ],
    },
    {
      id: "ebi11-u8-health",
      title: "Peristalsis, egestion and digestive health",
      skill: "Explain the role of the large intestine and fibre, and describe diet-related digestive problems.",
      lesson: {
        sections: [
          {
            heading: "Large intestine",
            body: "Receives undigested material. Water and some mineral ions are absorbed here, leaving semi-solid faeces. Peristalsis moves material along; the rectum stores faeces until egested via the anus. Gut bacteria produce some vitamins (e.g. vitamin K).",
          },
          {
            heading: "Role of fibre",
            body: "Fibre adds bulk to faeces, stimulates peristalsis and prevents constipation. A low-fibre diet slows gut movement and can cause constipation or bowel disorders.",
          },
          {
            heading: "Diet-related health",
            body: "Excess energy intake → obesity (risk of heart disease, diabetes). Excess saturated fat and salt linked to cardiovascular problems. High sugar linked to tooth decay. Imbalanced diets cause deficiency diseases (scurvy, rickets, anaemia).",
          },
        ],
        keyFormulas: [
          { name: "Fibre function", statement: "Adds bulk → stimulates peristalsis → prevents constipation" },
          { name: "Energy balance", statement: "Energy in food vs energy used; excess stored as fat" },
        ],
        workedExample: {
          problem: "A person eats little fruit, vegetables or whole grains. Predict a likely digestive problem.",
          solution: "Low fibre intake reduces faecal bulk, slowing peristalsis and likely causing constipation.",
        },
      },
      questions: [
        {
          id: "ebi11-u8-health-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is egestion?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Breaking down food"
                    },
                    {
                              "id": "b",
                              "text": "Removing undigested faeces"
                    },
                    {
                              "id": "c",
                              "text": "Absorbing glucose"
                    },
                    {
                              "id": "d",
                              "text": "Chewing food"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Egestion",
                              "statement": "Removal of undigested material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Egestion = removal of faeces.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Removing undigested faeces"
},
        },
        {
          id: "ebi11-u8-health-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the main function of the large intestine.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Large intestine",
                              "statement": "Absorbs water; forms faeces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Absorbs water from undigested material.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Forms and stores faeces for egestion.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Absorbs water; forms faeces"
},
        },
        {
          id: "ebi11-u8-health-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how fibre prevents constipation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fibre and constipation",
                              "statement": "Bulk stimulates peristalsis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fibre is indigestible and adds bulk to faeces.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bulk stretches gut wall, stimulating peristaltic waves.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Faster movement prevents faeces drying and hardening.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Low fibre → slow transit → constipation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fibre bulk → peristalsis → prevents constipation"
},
        },
        {
          id: "ebi11-u8-health-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how a diet consistently high in energy can lead to health problems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Energy balance",
                              "statement": "Excess energy stored as fat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy intake exceeds energy used in respiration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Excess glucose converted to fat and stored.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Leads to obesity.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Obesity increases risk of heart disease, diabetes, joint problems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Often linked to high fat/sugar and low fibre diet.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Excess energy → fat storage → obesity → disease risk"
},
        },
        {
          id: "ebi11-u8-health-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State the function of the large intestine.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of fibre in gut health.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Name two health problems linked to a poor diet.",
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
                              "name": "Gut health",
                              "statement": "Water absorption, fibre, diet balance."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Absorbs water; forms faeces.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Adds bulk, stimulates peristalsis, prevents constipation.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "e.g. obesity, constipation, tooth decay, scurvy.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Water absorption; fibre prevents constipation; obesity/decay"
},
        },
        {
          id: "ebi11-u8-health-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define egestion. (b) State the function of the large intestine. (c) Explain the role of fibre. (d) Name two deficiency diseases. (e) Explain how excess energy intake causes obesity. (f) State one health risk of obesity.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Egestion.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Large intestine.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Fibre role.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Two deficiencies.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Obesity mechanism.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "One risk.",
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
                              "name": "Digestive health",
                              "statement": "Egestion to diet disease."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Removal of undigested faeces.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Absorbs water; forms/stores faeces.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bulk → peristalsis → prevents constipation.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "e.g. scurvy (vit C), rickets (vit D), anaemia (Fe).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Energy in > used → stored as fat → obesity.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Heart disease / diabetes / joint problems.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Egestion; water absorption; fibre; deficiencies; obesity mechanism"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebi11-u8-absorb-notes",
      title: "Absorption — notes",
      summary: "Ileum villi absorb products; glucose→blood, lipids→lacteal→lymph. Large intestine absorbs water; fibre prevents constipation.",
      sections: [
        { heading: "Key idea", body: "Surface area adaptations maximise absorption." },
        { heading: "Health", body: "Low fibre → constipation; excess energy → obesity." },
      ],
    },
  ],
};
