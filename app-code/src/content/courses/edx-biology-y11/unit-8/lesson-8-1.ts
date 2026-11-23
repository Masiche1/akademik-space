import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ebi11-u8-lesson-8-1",
  code: "8-1",
  title: "Balanced Diet, Nutrients and Teeth",
  goal: "I CAN describe the balanced diet, the functions of nutrients and the structure of teeth.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Animal nutrition", "4BI1 nutrition and balanced diet"],
  
  vocabulary: [
    { term: "Balanced diet", definition: "A diet containing all the nutrients needed in the correct proportions for good health." },
    { term: "Carbohydrate", definition: "Energy-yielding nutrient; includes sugars and starch." },
    { term: "Protein", definition: "Nutrient used for growth, repair and enzyme/hormone production." },
    { term: "Lipid", definition: "Energy store and insulator; includes fats and oils." },
    { term: "Fibre", definition: "Plant material that cannot be digested; aids peristalsis and prevents constipation." },
    { term: "Incisor", definition: "Chisel-edged front tooth used for cutting food." },
    { term: "Molar", definition: "Broad back tooth with a large surface area used for grinding food." },
  ],
  concepts: [
    {
      id: "ebi11-u8-diet",
      title: "Balanced diet and nutrient requirements",
      skill: "Describe the components of a balanced diet and the functions and deficiency effects of nutrients.",
      lesson: {
        sections: [
          {
            heading: "Components of a balanced diet",
            body: "Carbohydrates (energy), proteins (growth and repair), lipids (energy store), vitamins and minerals (protection and regulation), water and fibre. The proportions needed vary with age, sex, activity level and health. Fats are concentrated energy stores; fibre (roughage) is indigestible plant material that adds bulk to the faeces.",
          },
          {
            heading: "Vitamins and minerals",
            body: "Vitamin C prevents scurvy; vitamin D and calcium are needed for healthy bones; iron is needed to make haemoglobin. Iodine is needed for the thyroid hormone thyroxine. Deficiencies cause specific diseases, e.g. scurvy (bleeding gums, poor wound healing), rickets (soft, deformed bones) and anaemia (tiredness from low haemoglobin).",
          },
          {
            heading: "Energy and nutrients",
            body: "Energy in food is measured in kilojoules (kJ). Energy intake must balance energy used in respiration, plus extra for growth. Excess energy is stored as fat; insufficient intake causes malnutrition. Water makes up most of the body and is needed for transport, temperature control and chemical reactions.",
          },
        ],
        keyFormulas: [
          { name: "Energy balance", statement: "Energy in food = energy used in respiration (+ growth/storage)" },
          { name: "Deficiency examples", statement: "Vitamin C → scurvy; vitamin D/Ca → rickets; Fe → anaemia; I → goitre" },
        ],
        workedExample: {
          problem: "A teenager plays sport daily. Why might their balanced diet differ from a sedentary adult's?",
          solution: "Higher activity means more energy is used in respiration, so more carbohydrate/lipid is needed. Growth also requires more protein, calcium and other nutrients than an adult who is not growing.",
        },
      },
      questions: [
        {
          id: "ebi11-u8-diet-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nutrient is the main source of energy in the diet?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Protein"
                    },
                    {
                              "id": "b",
                              "text": "Carbohydrate"
                    },
                    {
                              "id": "c",
                              "text": "Vitamin C"
                    },
                    {
                              "id": "d",
                              "text": "Fibre"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Carbohydrate",
                              "statement": "Main dietary energy source."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carbohydrates provide most dietary energy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Carbohydrate"
},
        },
        {
          id: "ebi11-u8-diet-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two functions of protein in the diet.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Protein",
                              "statement": "Used for growth, repair and cell processes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Growth and repair of body tissues.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Production of enzymes and hormones (any one correct second function).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Growth/repair; enzymes or hormones"
},
        },
        {
          id: "ebi11-u8-diet-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A child develops bleeding gums and slow wound healing. (a) Name the vitamin likely deficient. (b) Name the deficiency disease. (c) Explain how this affects the diet needed to recover. (d) State one other vitamin deficiency disease and its vitamin.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Vitamin deficiency",
                              "statement": "Missing vitamins cause specific diseases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Vitamin C.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Scurvy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Diet must include vitamin-C-rich foods (fruit/vegetables) to restore levels.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(d) e.g. rickets — vitamin D (or calcium); anaemia — iron.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Vitamin C; scurvy; fruit/vegetables; e.g. rickets–vitamin D",
          "commonErrors": [
                    "Confusing vitamin C deficiency with anaemia."
          ]
},
        },
        {
          id: "ebi11-u8-diet-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why a balanced diet must contain fibre, and why fibre itself is not digested. Include the effects of too little fibre.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fibre function",
                              "statement": "Fibre adds bulk and aids peristalsis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fibre is indigestible plant material — no enzymes break it down.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It adds bulk to the faeces, stimulating peristalsis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This prevents constipation and may reduce bowel disease risk.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Too little fibre → slow movement, constipation.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Found in whole grains, fruit and vegetables.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Indigestible bulk → peristalsis; prevents constipation"
},
        },
        {
          id: "ebi11-u8-diet-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State the main function of carbohydrates, proteins and lipids.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why energy needs differ between a child and an elderly person.",
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
                              "name": "Nutrient functions",
                              "statement": "Each nutrient class has a distinct role."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Carbohydrate: energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Protein: growth and repair.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lipid: energy store/insulation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Child needs more energy for growth and often more activity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Elderly person has lower metabolic rate and activity, so needs less energy.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Needs measured in kJ and matched to respiration use.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "C:energy P:growth/repair L:energy store; children need more"
},
        },
        {
          id: "ebi11-u8-diet-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) List the seven components of a balanced diet. (b) State the function of carbohydrates, protein and lipid. (c) Name the vitamin whose deficiency causes scurvy. (d) Name the mineral needed for haemoglobin. (e) Explain the role of fibre. (f) State two factors that change nutrient requirements.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List components.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Functions of the three nutrients.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Scurvy vitamin.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Haemoglobin mineral.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Fibre role.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Two factors.",
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
                              "name": "Balanced diet",
                              "statement": "All nutrients in correct proportions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Carbohydrates, proteins, lipids.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Vitamins, minerals, water, fibre.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Carbohydrate: energy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Protein: growth/repair.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lipid: energy store.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Vitamin C.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Iron.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Adds bulk, aids peristalsis, prevents constipation.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Age/activity/health/sex (any two).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "7 components; functions; scurvy=vit C; Fe; fibre aids gut"
},
        },
      ],
    },
    {
      id: "ebi11-u8-teeth",
      title: "Teeth and mechanical digestion",
      skill: "Describe the types of teeth, their structure and their role in mechanical digestion.",
      lesson: {
        sections: [
          {
            heading: "Types of teeth",
            body: "Incisors (front, chisel-edged) cut food; canines (pointed) tear food; premolars and molars (broad, ridged) crush and grind food. Humans are omnivores with a generalised dentition suited to a varied diet. Dental formula for an adult: 2 incisors, 1 canine, 2 premolars, 3 molars per half jaw.",
          },
          {
            heading: "Tooth structure",
            body: "Crown (visible) covered by enamel — the hardest substance in the body, protects against decay. Under enamel is dentine, softer and sensitive to temperature. Pulp cavity contains nerves and blood vessels. Cement covers the root, anchoring the tooth in the jaw via the periodontal ligament.",
          },
          {
            heading: "Mechanical digestion",
            body: "Chewing (mastication) increases surface area of food so enzymes can act efficiently. The tongue manipulates food into a ball (bolus) and pushes it to the back of the throat for swallowing. Saliva moistens food and contains salivary amylase.",
          },
        ],
        keyFormulas: [
          { name: "Adult dental formula", statement: "2I, 1C, 2PM, 3M per half jaw (×2 halves = 32 teeth)" },
          { name: "Enamel", statement: "Hardest substance in the body; protects tooth crown" },
        ],
        workedExample: {
          problem: "Why does chewing food improve digestion?",
          solution: "Chewing breaks food into smaller pieces and mixes it with saliva. This greatly increases the surface area to volume ratio, so digestive enzymes can act faster and more efficiently.",
        },
      },
      questions: [
        {
          id: "ebi11-u8-teeth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tooth type is used for tearing food?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Incisor"
                    },
                    {
                              "id": "b",
                              "text": "Canine"
                    },
                    {
                              "id": "c",
                              "text": "Molar"
                    },
                    {
                              "id": "d",
                              "text": "Premolar"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Canine",
                              "statement": "Pointed tooth for tearing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Canines are pointed and tear food.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Canine"
},
        },
        {
          id: "ebi11-u8-teeth-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the hardest substance in the human body.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Enamel",
                              "statement": "Hardest substance in body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enamel covers the crown of each tooth.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Enamel"
},
        },
        {
          id: "ebi11-u8-teeth-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how the structure of a molar is suited to its function of grinding food.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Molar adaptation",
                              "statement": "Broad surface and ridges maximise grinding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Molars have a large, flat crown with ridges.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This gives a large surface area for grinding food into small pieces.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Small pieces increase surface area for enzyme action later.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Enamel protects the molar during this process.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Broad ridged crown → large area for grinding"
},
        },
        {
          id: "ebi11-u8-teeth-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the role of the tongue and saliva in the mouth during mechanical digestion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Mechanical digestion",
                              "statement": "Physical breakdown increases surface area."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tongue mixes food with saliva and manipulates it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It forms food into a bolus for swallowing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Teeth cut, tear and grind food into smaller pieces.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Smaller pieces greatly increase surface area to volume ratio.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Saliva moistens food and begins starch digestion with amylase.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Tongue+teeth break food down → larger SA:V for enzymes"
},
        },
        {
          id: "ebi11-u8-teeth-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "State the function of incisors and canines.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the layer covering the crown and the pulp cavity contents.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why tooth decay can cause pain.",
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
                              "name": "Tooth structure",
                              "statement": "Enamel, dentine, pulp cavity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Incisors: cut food; canines: tear food.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both functions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Enamel covers the crown.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pulp cavity contains nerves and blood vessels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Decay exposes dentine/pulp; nerves detect pain.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Explains link between decay and pain sensation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Incisors cut, canines tear; enamel+pulp; decay exposes nerves"
},
        },
        {
          id: "ebi11-u8-teeth-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name the four types of human teeth. (b) State the function of each. (c) Name the hardest substance in the body. (d) Name the layer beneath enamel. (e) State what the pulp cavity contains. (f) Explain how chewing helps digestion. (g) How many teeth does an adult human have?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Four tooth types.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Functions.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Hardest substance.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Layer under enamel.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Pulp contents.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Chewing benefit.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Adult tooth count.",
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
                              "name": "Teeth",
                              "statement": "Incisors, canines, premolars, molars."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Incisors, canines, premolars, molars.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Incisors cut; canines tear; premolars crush; molars grind.",
                              "marks": 4,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Enamel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Dentine.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Nerves and blood vessels.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Increases surface area for enzymes.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "g",
                              "reasoning": "32.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4 tooth types; enamel; dentine; pulp; 32 teeth"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebi11-u8-diet-notes",
      title: "Nutrition — notes",
      summary: "Balanced diet = carbs, proteins, lipids, vitamins, minerals, water, fibre. Teeth cut, tear, grind; enamel is hardest substance.",
      sections: [
        { heading: "Key idea", body: "Nutrient needs vary with age, activity and health." },
        { heading: "Deficiencies", body: "Vit C→scurvy; Vit D/Ca→rickets; Fe→anaemia; I→goitre." },
      ],
    },
  ],
};
