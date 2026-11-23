import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ediasbio-u4-lesson-4-1",
  code: "4-1",
  title: "Digestion and Absorption",
  goal: "I CAN describe digestion in the alimentary canal and explain absorption of food products.",
  standards: ["WBI15 Internal environment", "Digestion and absorption"],
  
  vocabulary: [
    { term: "Alimentary canal", definition: "The continuous muscular tube from mouth to anus through which food passes." },
    { term: "Peristalsis", definition: "Wave-like muscular contractions that push food along the alimentary canal." },
    { term: "Emulsification", definition: "Breaking large lipid droplets into smaller droplets using bile salts to increase surface area." },
    { term: "Absorption", definition: "Movement of digested food products from the gut lumen into the blood or lymph." },
    { term: "Assimilation", definition: "Use of absorbed food products by cells to make new cell material or release energy." },
    { term: "Villus", definition: "Finger-like projection of the ileum wall that increases surface area for absorption." },
    { term: "Lacteal", definition: "Lymph vessel inside a villus that absorbs lipid products." },
  ],
  concepts: [
    {
      id: "ediasbio-u4-gut",
      title: "Alimentary canal and digestive enzymes",
      skill: "Describe the alimentary canal and the enzymes that digest carbohydrates, proteins and lipids.",
      lesson: {
        sections: [
          {
            heading: "The alimentary canal",
            body: "Food passes: mouth (teeth, tongue, salivary amylase) → oesophagus → stomach → duodenum → ileum → large intestine → rectum → anus. Peristalsis moves food; sphincter muscles control entry to the stomach and movement through the gut.",
          },
          {
            heading: "Digestive secretions",
            body: "Saliva contains amylase (starch → maltose) at near-neutral pH. Gastric juice contains HCl (lowers pH to about 2) and proteases. Bile from the liver is stored in the gall bladder and released into the duodenum: bile salts emulsify lipids and the alkaline fluid neutralises stomach acid. Pancreatic juice and intestinal juice supply amylase, proteases and lipase.",
          },
          {
            heading: "Enzyme action",
            body: "Amylase breaks starch into maltose; maltase finishes it to glucose. Proteases break proteins to peptides then amino acids. Lipase hydrolyses triglycerides to fatty acids and glycerol. Each enzyme is specific to its substrate and works best at an optimum pH.",
          },
        ],
        keyFormulas: [
          { name: "Starch digestion", statement: "Starch →(amylase) maltose →(maltase) glucose" },
          { name: "Protein digestion", statement: "Protein →(protease) peptides →(protease) amino acids" },
          { name: "Lipid digestion", statement: "Triglyceride + water →(lipase) fatty acids + glycerol" },
          { name: "Bile", statement: "Emulsifies lipids; alkaline pH provides optimum for pancreatic enzymes" },
        ],
        workedExample: {
          problem: "Why is bile essential for the digestion of lipids, even though it contains no digestive enzymes?",
          solution: "Lipids are insoluble and form large droplets with little surface area. Bile salts emulsify them into tiny droplets, greatly increasing surface area so lipase can act faster. The alkaline bile also neutralises stomach acid so pancreatic enzymes work at their optimum pH.",
        },
      },
      questions: [
        {
          id: "ediasbio-u4-gut-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme digests starch in the mouth and duodenum?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lipase"
                    },
                    {
                              "id": "b",
                              "text": "Protease"
                    },
                    {
                              "id": "c",
                              "text": "Amylase"
                    },
                    {
                              "id": "d",
                              "text": "Maltase only"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Amylase",
                              "statement": "Enzyme that hydrolyses starch to maltose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Amylase acts on starch.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Amylase"
},
        },
        {
          id: "ediasbio-u4-gut-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the substrate and product of lipase.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lipase",
                              "statement": "Hydrolyses lipids to fatty acids and glycerol."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substrate: triglycerides (lipids).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Products: fatty acids and glycerol.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Triglycerides → fatty acids + glycerol"
},
        },
        {
          id: "ediasbio-u4-gut-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the role of bile in the digestion of lipids.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Emulsification",
                              "statement": "Bile breaks lipids into small droplets for enzyme action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bile salts emulsify large lipid droplets into smaller droplets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This greatly increases the surface area to volume ratio.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lipase can then digest lipids faster at the droplet surfaces.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "The alkaline pH of bile also neutralises stomach acid for optimal enzyme action.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Emulsifies lipids → more surface area for lipase",
          "commonErrors": [
                    "Saying bile digests lipids chemically."
          ]
},
        },
        {
          id: "ediasbio-u4-gut-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the digestion of a starch molecule from the mouth to the ileum.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Sequential digestion",
                              "statement": "Each enzyme acts in sequence on its substrate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Salivary amylase in the mouth begins hydrolysis of starch to maltose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Stomach acid denatures salivary amylase, temporarily stopping starch digestion.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "In the duodenum, pancreatic amylase continues starch → maltose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Maltase in the ileum converts maltose → glucose.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Glucose is then ready for absorption.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Starch → maltose (amylase) → glucose (maltase)"
},
        },
        {
          id: "ediasbio-u4-gut-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the enzyme that digests proteins in the stomach and its optimum pH.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how stomach acid helps protein digestion but must later be neutralised.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State where lipid digestion begins and the enzyme responsible.",
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
                              "name": "Site and pH",
                              "statement": "Each enzyme works best at its optimum pH."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Protease (pepsin); optimum pH about 2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both enzyme and pH named correctly.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "HCl provides low pH for pepsin and kills many microbes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bile neutralises acid in the duodenum so pancreatic enzymes work.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Duodenum; pancreatic lipase (after bile emulsification).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Both site and enzyme correct.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Pepsin pH 2; bile neutralises; lipase in duodenum"
},
        },
        {
          id: "ediasbio-u4-gut-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define ingestion, digestion, absorption, assimilation and egestion. (b) Name the main regions of the alimentary canal in order. (c) State the enzyme that digests protein in the stomach. (d) Explain the role of bile. (e) State where most absorption occurs. (f) What is peristalsis?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the five processes.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "List the regions of the alimentary canal.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Name the stomach protease.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Explain bile's role.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Name the main absorption site.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Define peristalsis.",
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
                              "name": "Gut processes",
                              "statement": "Ingestion to egestion."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ingestion: taking food in; digestion: breaking food down.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Absorption: into blood/lymph; assimilation: use by cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Egestion: removal of undigested waste.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All five terms correctly distinguished.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mouth, oesophagus, stomach, duodenum, ileum, large intestine, rectum, anus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All regions in correct order.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Pepsin/protease.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Emulsifies lipids (and neutralises acid).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Ileum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Wave-like muscular contractions moving food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Digestive tract processes and enzymes",
          "commonErrors": [
                    "Confusing absorption with assimilation."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u4-absorb",
      title: "Absorption and assimilation",
      skill: "Explain how digested food products are absorbed and used by the body.",
      lesson: {
        sections: [
          {
            heading: "Absorption in the ileum",
            body: "The ileum is lined with villi carrying microvilli — a huge surface area. Glucose and amino acids pass into capillaries by diffusion and facilitated diffusion. Lipid products (fatty acids, glycerol) diffuse into lacteals (lymph vessels), which drain to the blood via the lymphatic system.",
          },
          {
            heading: "Adaptations for absorption",
            body: "Villi have a thin epithelium (one cell thick), a rich blood supply and lacteals. Peristaltic mixing and segmentation increase contact between food and the wall. Most water is absorbed in the large intestine.",
          },
          {
            heading: "Assimilation and egestion",
            body: "Glucose and amino acids reach the liver via the hepatic portal vein. Glucose is respired or stored as glycogen; amino acids build proteins or are deaminated in the liver (ammonia → urea). Lipids are stored or used in membranes and hormones. Undigested material forms faeces and is egested.",
          },
        ],
        keyFormulas: [
          { name: "Ileum adaptations", statement: "Villi + microvilli → large surface area; thin wall; blood + lacteals" },
          { name: "Routes", statement: "Glucose/amino acids → blood; lipids → lymph → blood" },
        ],
        workedExample: {
          problem: "Why do fatty acids travel in the lymph rather than directly into blood capillaries?",
          solution: "Fatty acids are insoluble in water and cannot enter blood plasma directly. They diffuse into lacteals in the villi, travel via the lymphatic system and eventually enter the bloodstream through the thoracic duct.",
        },
      },
      questions: [
        {
          id: "ediasbio-u4-abs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does most absorption of digested food occur?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stomach"
                    },
                    {
                              "id": "b",
                              "text": "Ileum"
                    },
                    {
                              "id": "c",
                              "text": "Large intestine only"
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
                              "statement": "Main site of absorption."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ileum is the absorption organ.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Ileum"
},
        },
        {
          id: "ediasbio-u4-abs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two adaptations of the ileum wall that increase absorption.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Villus adaptations",
                              "statement": "Surface area and thin epithelium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Villi and microvilli greatly increase surface area.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Thin (one-cell) epithelium gives a short diffusion distance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Villi/microvilli; thin epithelium"
},
        },
        {
          id: "ediasbio-u4-abs-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how glucose is absorbed from the ileum into the blood.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Absorption",
                              "statement": "Down a concentration gradient into capillaries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Digested glucose moves through the epithelium of a villus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It diffuses/facilitated-diffuses down its concentration gradient into the capillary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Capillaries carry it to the hepatic portal vein and liver.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "No ATP is needed for this passive movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Glucose diffuses into villus capillaries → hepatic portal vein"
},
        },
        {
          id: "ediasbio-u4-abs-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the absorption of glucose with that of fatty acids and glycerol.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Two absorption routes",
                              "statement": "Blood capillaries vs lacteals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Glucose is water-soluble and enters blood capillaries directly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fatty acids and glycerol are insoluble in water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They diffuse into lacteals (lymph vessels) inside the villi instead.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Lymph drains to the blood via the thoracic duct, so lipids reach blood later.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Both ultimately deliver products to body cells for assimilation.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Glucose → blood; lipids → lymph → blood"
},
        },
        {
          id: "ediasbio-u4-abs-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how the structure of a villus aids absorption.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the role of the hepatic portal vein.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain what is meant by assimilation.",
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
                              "name": "Villus function",
                              "statement": "Surface area + transport vessels."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Villus + microvilli increase surface area for absorption.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Thin epithelium shortens diffusion distance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Blood capillaries and lacteals carry products away quickly.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Carries absorbed glucose and amino acids to the liver.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use of absorbed products by cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "E.g. glucose → glycogen or respiration; amino acids → proteins.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Villus structure, portal vein and assimilation"
},
        },
        {
          id: "ediasbio-u4-abs-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define absorption and assimilation. (b) Name the main absorption site. (c) State two adaptations of the ileum. (d) Describe how glucose is absorbed. (e) Describe how lipid products are absorbed. (f) What is a lacteal? (g) Where does absorbed glucose go first? (h) What happens to amino acids in the liver?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define absorption and assimilation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the main absorption site.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "State two ileum adaptations.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Describe glucose absorption.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Describe lipid absorption.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Define lacteal.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Name first destination of glucose.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Describe amino acid fate in the liver.",
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
                              "name": "Absorption",
                              "statement": "Products into blood/lymph then used."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Absorption: digested products move into blood/lymph.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Assimilation: cells use products for growth/energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ileum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Villi/microvilli (surface area).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Thin epithelium / blood supply / lacteals.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Diffuses/facilitated into villus capillaries.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Fatty acids/glycerol diffuse into lacteals.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Lymph vessel inside a villus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Liver (via hepatic portal vein).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Used to make proteins or deaminated to urea.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Absorption routes and assimilation",
          "commonErrors": [
                    "Saying lipids enter blood capillaries directly."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u4-digest-notes",
      title: "Digestion and absorption — notes",
      summary: "Enzymes hydrolyse food in sequence; bile emulsifies lipids; ileum absorbs products into blood (glucose, amino acids) or lymph (lipids).",
      sections: [
        { heading: "Enzyme summary", body: "Amylase: starch→maltose; protease: protein→amino acids; lipase: lipid→fatty acids+glycerol; maltase: maltose→glucose." },
        { heading: "Absorption routes", body: "Glucose and amino acids → blood capillaries → hepatic portal vein → liver. Lipids → lacteals → lymph → blood." },
        { heading: "Key adaptations", body: "Villi + microvilli, thin epithelium, dense capillary network, peristalsis and segmentation." },
      ],
    },
  ],
};
