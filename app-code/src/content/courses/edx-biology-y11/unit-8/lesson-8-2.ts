import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ebi11-u8-lesson-8-2",
  code: "8-2",
  title: "The Digestive System and Enzymes",
  goal: "I CAN describe the alimentary canal, the digestive enzymes and the role of stomach acid and bile.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Animal nutrition", "4BI1 digestion and enzymes"],
  
  vocabulary: [
    { term: "Alimentary canal", definition: "Continuous muscular tube from mouth to anus through which food passes." },
    { term: "Peristalsis", definition: "Wave-like muscular contractions that push food along the canal." },
    { term: "Amylase", definition: "Enzyme that hydrolyses starch into maltose." },
    { term: "Protease", definition: "Enzyme that hydrolyses proteins into peptides and amino acids." },
    { term: "Lipase", definition: "Enzyme that hydrolyses lipids into fatty acids and glycerol." },
    { term: "Bile", definition: "Greenish fluid from the liver that emulsifies lipids and neutralises acid." },
    { term: "Emulsification", definition: "Breaking large lipid droplets into smaller droplets to increase surface area." },
  ],
  concepts: [
    {
      id: "ebi11-u8-gut",
      title: "Alimentary canal and digestive enzymes",
      skill: "Describe the regions of the alimentary canal and the enzymes that digest carbohydrates, proteins and lipids.",
      lesson: {
        sections: [
          {
            heading: "Route of food",
            body: "Mouth (teeth, tongue, salivary amylase) → oesophagus → stomach → duodenum → ileum → large intestine → rectum → anus. Peristalsis moves food; sphincter muscles control movement between regions. The stomach churns food into chyme.",
          },
          {
            heading: "Digestive enzymes",
            body: "Salivary amylase starts starch → maltose in the mouth. Gastric protease (pepsin) digests protein in the acidic stomach. Pancreatic and intestinal juice supply amylase, proteases and lipase in the duodenum/ileum. Maltase converts maltose → glucose. Each enzyme is substrate-specific and works best at its optimum pH.",
          },
          {
            heading: "Products of digestion",
            body: "Carbohydrates end as monosaccharides (glucose), proteins as amino acids, lipids as fatty acids and glycerol. These small soluble products can be absorbed in the small intestine.",
          },
        ],
        keyFormulas: [
          { name: "Starch digestion", statement: "Starch →(amylase) maltose →(maltase) glucose" },
          { name: "Protein digestion", statement: "Protein →(protease) peptides →(protease) amino acids" },
          { name: "Lipid digestion", statement: "Triglyceride + water →(lipase) fatty acids + glycerol" },
        ],
        workedExample: {
          problem: "Trace the digestion of a piece of bread from mouth to ileum.",
          solution: "Starch is partly digested to maltose by salivary amylase in the mouth. In the stomach, acid stops amylase. In the duodenum pancreatic amylase resumes starch → maltose, and maltase in the ileum converts maltose → glucose, ready for absorption.",
        },
      },
      questions: [
        {
          id: "ebi11-u8-gut-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme begins starch digestion in the mouth?",
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
                              "text": "Maltase"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Amylase",
                              "statement": "Hydrolyses starch to maltose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Salivary amylase acts on starch.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Amylase"
},
        },
        {
          id: "ebi11-u8-gut-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the substrate and products of lipase.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lipase",
                              "statement": "Hydrolyses lipids."
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
          "finalAnswer": "Triglyceride → fatty acids + glycerol"
},
        },
        {
          id: "ebi11-u8-gut-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how peristalsis moves food through the alimentary canal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Peristalsis",
                              "statement": "Muscular waves push food along."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Circular and longitudinal muscles contract in waves along the gut wall.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The wave squeezes food forward into the next region.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sphincter muscles control entry into the stomach and between regions.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "This works even against gravity (e.g. swallowing).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Muscular waves push food along the canal"
},
        },
        {
          id: "ebi11-u8-gut-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the digestion of protein from the stomach to the ileum.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Sequential digestion",
                              "statement": "Enzymes act in sequence by site and pH."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stomach acid (HCl) gives optimum pH ~2 for protease (pepsin).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Pepsin breaks protein into peptides.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bile neutralises acid in the duodenum.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Pancreatic/intestinal proteases continue peptide → amino acids.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Amino acids are then ready for absorption in the ileum.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Protein → peptides (pepsin) → amino acids (proteases)"
},
        },
        {
          id: "ebi11-u8-gut-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the regions of the alimentary canal in order.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State which enzyme digests starch in the mouth and which finishes carbohydrate digestion in the ileum.",
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
                              "name": "Alimentary canal",
                              "statement": "Mouth to anus route."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mouth, oesophagus, stomach.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Duodenum, ileum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Large intestine, rectum, anus.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Salivary amylase in the mouth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pancreatic amylase in duodenum/ileum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Maltase converts maltose → glucose in ileum.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Mouth→stomach→ileum→anus; amylase; maltase"
},
        },
        {
          id: "ebi11-u8-gut-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) List the alimentary canal regions in order. (b) Name the enzyme for starch, protein and lipid digestion. (c) State the products of each digestion. (d) Define peristalsis. (e) Where does most digestion and absorption occur?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Regions in order.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Three enzymes.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Three product sets.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Peristalsis.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Main site.",
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
                              "name": "Digestion",
                              "statement": "Enzymatic breakdown of food."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mouth, oesophagus, stomach, duodenum, ileum, large intestine, rectum, anus.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Amylase (starch), protease (protein), lipase (lipid).",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Glucose/maltose; amino acids; fatty acids + glycerol.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Muscular waves pushing food along the canal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Small intestine (duodenum + ileum).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Regions; amylase/protease/lipase; products; peristalsis; small intestine"
},
        },
      ],
    },
    {
      id: "ebi11-u8-bile",
      title: "Stomach acid, bile and pH control",
      skill: "Explain the roles of stomach acid and bile, and how pH affects digestive enzymes.",
      lesson: {
        sections: [
          {
            heading: "Stomach acid",
            body: "Hydrochloric acid in gastric juice lowers stomach pH to about 2. This provides the optimum pH for protease (pepsin), helps denature proteins and kills many harmful microbes in food.",
          },
          {
            heading: "Bile",
            body: "Bile is produced by the liver, stored in the gall bladder and released into the duodenum. Bile salts emulsify large lipid droplets into tiny droplets, greatly increasing surface area for lipase. The alkaline bile neutralises stomach acid so pancreatic enzymes work at their optimum pH.",
          },
          {
            heading: "pH and enzymes",
            body: "Each digestive enzyme works best at a specific pH: pepsin ~pH 2, amylase and lipase ~neutral/alkaline. Changes in pH can denature enzymes. Therefore acid must be neutralised before pancreatic juice acts.",
          },
        ],
        keyFormulas: [
          { name: "Emulsification", statement: "Large lipid droplets → small droplets → more surface area for lipase" },
          { name: "Stomach pH", statement: "About pH 2 — optimum for pepsin" },
        ],
        workedExample: {
          problem: "Why is bile essential for lipid digestion even though it contains no enzymes?",
          solution: "Bile salts break large lipid droplets into tiny droplets, massively increasing surface area so lipase can digest them faster. Its alkaline pH also neutralises stomach acid so pancreatic enzymes function.",
        },
      },
      questions: [
        {
          id: "ebi11-u8-bile-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ produces bile?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stomach"
                    },
                    {
                              "id": "b",
                              "text": "Pancreas"
                    },
                    {
                              "id": "c",
                              "text": "Liver"
                    },
                    {
                              "id": "d",
                              "text": "Gall bladder"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bile",
                              "statement": "Made by liver, stored in gall bladder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bile is produced by the liver.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Liver"
},
        },
        {
          id: "ebi11-u8-bile-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the approximate pH of the stomach contents during digestion?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gastric pH",
                              "statement": "About pH 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hydrochloric acid lowers pH to ~2.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "About pH 2"
},
        },
        {
          id: "ebi11-u8-bile-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the two functions of bile in the duodenum.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bile function",
                              "statement": "Emulsifies lipids; neutralises acid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bile salts emulsify large lipid droplets into smaller ones.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This increases surface area for lipase action.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Bile is alkaline and neutralises stomach acid.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "This gives optimum pH for pancreatic/intestinal enzymes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Emulsifies lipids; neutralises acid"
},
        },
        {
          id: "ebi11-u8-bile-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why stomach acid is necessary and why it must be neutralised later.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "pH control",
                              "statement": "Each enzyme needs its optimum pH."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HCl provides pH ~2 for pepsin activity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Acid helps denature proteins and kills many microbes.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Pancreatic amylase/lipase need near-neutral pH.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Bile neutralises acid in the duodenum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This prevents denaturing the pancreatic enzymes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Acid for pepsin + kills microbes; bile neutralises for pancreatic enzymes"
},
        },
        {
          id: "ebi11-u8-bile-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State where bile is produced and stored.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what emulsification is.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Why does bile contain no digestive enzymes yet aid lipid digestion?",
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
                              "name": "Bile and emulsification",
                              "statement": "Bile aids digestion without enzymes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Produced by liver; stored in gall bladder.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Breaking large lipid droplets into small droplets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "To increase surface area for enzyme action.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "It increases surface area for lipase, not digesting chemically itself.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Plus neutralises acid for optimal pH.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Liver/gall bladder; droplets→SA; aids lipase + pH"
},
        },
        {
          id: "ebi11-u8-bile-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name the organ producing bile and where it is stored. (b) Explain the role of bile salts. (c) Explain the role of stomach acid. (d) Why must acid be neutralised in the duodenum? (e) What is the optimum pH for pepsin?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Source and storage of bile.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Bile salts role.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Stomach acid role.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Neutralisation reason.",
                    "marks": 3
          },
          {
                    "label": "e",
                    "prompt": "Pepsin pH.",
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
                              "name": "Bile and acid",
                              "statement": "pH control of digestion."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Liver produces; gall bladder stores.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Emulsify lipids → more surface area for lipase.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Provides pH ~2 for pepsin; kills microbes.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Pancreatic enzymes need neutral pH.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Bile neutralises stomach acid.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Prevents denaturing pancreatic enzymes.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "About pH 2.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Liver/gall bladder; emulsify; acid pH 2; bile neutralises"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebi11-u8-gut-notes",
      title: "Digestion — notes",
      summary: "Food: mouth→stomach→small intestine→large intestine→anus. Amylase/protease/lipase; bile emulsifies and neutralises.",
      sections: [
        { heading: "Key idea", body: "Each enzyme is substrate-specific and pH-dependent." },
        { heading: "Bile", body: "Emulsifies lipids; alkaline pH protects pancreatic enzymes." },
      ],
    },
  ],
};
