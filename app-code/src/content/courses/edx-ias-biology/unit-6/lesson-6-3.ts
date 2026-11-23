import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ediasbio-u6-lesson-6-3",
  code: "6-3",
  title: "Biotechnology and Practical Skills II",
  goal: "I CAN describe fermentation, genetic engineering and tissue culture in biotechnology.",
  standards: ["WBI14 Biotechnology", "WBI16 Practical Skills in Biology II"],
  
  vocabulary: [
    { term: "Biotechnology", definition: "Use of organisms or their products for useful purposes." },
    { term: "Fermenter", definition: "Vessel for large-scale microbial culture with controlled conditions." },
    { term: "Fermentation", definition: "Microbial breakdown of substrates, often producing useful products." },
    { term: "Genetic engineering", definition: "Direct manipulation of DNA to produce desired organisms/products." },
    { term: "Plasmid", definition: "Small circular DNA in bacteria used as a vector for genes." },
    { term: "Restriction enzyme", definition: "Enzyme cutting DNA at specific sequences." },
    { term: "Tissue culture", definition: "Growing plant cells/tissues in sterile conditions to clone plants." },
    { term: "Micropropagation", definition: "Mass production of identical plants from tissue culture." },
  ],
  concepts: [
    {
      id: "ediasbio-u6-ferm",
      title: "Microorganisms and fermentation",
      skill: "Describe fermenter conditions and industrial uses of microorganisms.",
      lesson: {
        sections: [
          {
            heading: "Industrial microbes",
            body: "Bacteria and fungi produce useful substances: penicillin (Penicillium mould), insulin (genetically modified bacteria), enzymes for biological washing powders, single-cell protein, biogas (methane from anaerobic digestion).",
          },
          {
            heading: "The fermenter",
            body: "A fermenter is a sterile vessel for large-scale culture. Conditions controlled: temperature (optimum for microbe), pH, oxygen supply (aerobic vs anaerobic), nutrient medium, stirring for mixing/oxygen, waste removal. Sterile conditions prevent contamination.",
          },
          {
            heading: "Fermentation products",
            body: "Aerobic fermentation: penicillin, citric acid, single-cell protein. Anaerobic fermentation: ethanol/alcohol, lactic acid (yogurt), biogas. Products are harvested after the culture phase.",
          },
        ],
        keyFormulas: [
          { name: "Fermenter controls", statement: "Temperature, pH, O₂, nutrients, sterility" },
          { name: "Aerobic", statement: "Needs oxygen — penicillin, SCP" },
          { name: "Anaerobic", statement: "No oxygen — ethanol, biogas, yogurt" },
        ],
        workedExample: {
          problem: "Why must a fermenter be kept sterile and at a constant temperature?",
          solution: "Sterility prevents contaminating microbes competing for nutrients or producing toxins. Constant optimum temperature keeps enzymes working at maximum rate for maximum product yield.",
        },
      },
      questions: [
        {
          id: "ediasbio-u6-fer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism produces penicillin?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bacterium E. coli"
                    },
                    {
                              "id": "b",
                              "text": "Penicillium mould"
                    },
                    {
                              "id": "c",
                              "text": "Yeast"
                    },
                    {
                              "id": "d",
                              "text": "Virus"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Penicillin",
                              "statement": "Antibiotic from Penicillium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Penicillin is made by Penicillium mould.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Penicillium mould"
},
        },
        {
          id: "ediasbio-u6-fer-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two conditions that must be controlled in a fermenter.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Fermenter conditions",
                              "statement": "Optimised environment for microbes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two: temperature, pH, oxygen, nutrient supply, sterility.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second condition named.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "E.g. temperature and pH"
},
        },
        {
          id: "ediasbio-u6-fer-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why oxygen supply differs between aerobic and anaerobic fermentation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Aerobic vs anaerobic",
                              "statement": "Oxygen requirement differs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Aerobic microbes respire using oxygen for maximum growth/product.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Anaerobic microbes grow without oxygen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "E.g. penicillin production is aerobic; biogas/ethanol anaerobic.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Fermenter must supply or exclude oxygen accordingly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Aerobic needs O₂; anaerobic does not"
},
        },
        {
          id: "ediasbio-u6-fer-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the stages of batch fermentation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Batch fermentation",
                              "statement": "Inoculate → grow → harvest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sterilise fermenter and medium.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Inoculate with desired microbe under optimum conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lag phase: cells adapt; log phase: rapid growth/product formation.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Stationary phase: nutrients depleted; product harvested.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Product separated and purified.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Sterilise → inoculate → grow → harvest product"
},
        },
        {
          id: "ediasbio-u6-fer-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name three industrial products of microorganisms.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the role of stirring in a fermenter.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Fermentation uses",
                              "statement": "Products and mixing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Penicillin, insulin, enzymes for washing powder.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Second product: biogas/SCP/ethanol.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "a",
                              "reasoning": "Third product named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Stirring mixes nutrients evenly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Distributes oxygen to all microbes (aerobic).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Prevents cells settling; removes waste heat.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Products; stirring for mixing/oxygen"
},
        },
        {
          id: "ediasbio-u6-fer-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define biotechnology. (b) Name two industrial microbes. (c) Name two products made by fermentation. (d) Define fermenter. (e) State three conditions controlled in a fermenter. (f) Why is sterility important? (g) Distinguish aerobic from anaerobic fermentation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define biotechnology.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Two industrial microbes.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Two fermentation products.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Define fermenter.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Three controlled conditions.",
                    "marks": 3
          },
          {
                    "label": "f",
                    "prompt": "Why sterility matters.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Aerobic vs anaerobic.",
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
                              "name": "Biotechnology",
                              "statement": "Microbes for useful products."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use of organisms/products for useful purposes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bacteria/fungi/yeast (e.g. Penicillium, E. coli).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second microbe named.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Penicillin, insulin, ethanol, biogas (any two).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Vessel for large-scale microbial culture.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Temperature, pH, oxygen, nutrients (any three).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Second condition.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Third condition.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Prevents contamination and product loss.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "g",
                              "reasoning": "Aerobic uses O₂ (penicillin); anaerobic without (ethanol/biogas).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Fermentation and fermenter conditions",
          "commonErrors": [
                    "Leaving fermenters open to contaminants."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u6-ge",
      title: "Genetic engineering and tissue culture",
      skill: "Describe recombinant DNA technology, GM organisms and plant tissue culture.",
      lesson: {
        sections: [
          {
            heading: "Genetic engineering",
            body: "Steps: isolate gene of interest → cut with restriction enzymes → insert into plasmid vector with DNA ligase → introduce into host (bacteria) → select and culture transformed cells. Example: human insulin gene into E. coli produces insulin.",
          },
          {
            heading: "GM organisms",
            body: "GM crops: herbicide-resistant (survive spraying), pest-resistant (Bt toxin), golden rice (vitamin A). Advantages: higher yields, less pesticide; concerns: gene escape, biodiversity, unknown long-term effects.",
          },
          {
            heading: "Plant tissue culture",
            body: "Small plant tissue sample (explants) grown on sterile nutrient agar with growth hormones → callus → shoots/roots → whole plantlets. Micropropagation produces thousands of identical disease-free plants rapidly. Used for orchids, bananas, conservation.",
          },
        ],
        keyFormulas: [
          { name: "GE steps", statement: "Isolate gene → restriction cut → ligate into plasmid → transform host" },
          { name: "Tissue culture", statement: "Explants → sterile agar + hormones → callus → plantlets" },
        ],
        workedExample: {
          problem: "Outline how bacteria are used to produce human insulin.",
          solution: "Human insulin gene is cut out with restriction enzymes and ligated into a bacterial plasmid; the plasmid is inserted into E. coli; bacteria multiply making insulin which is harvested and purified.",
        },
      },
      questions: [
        {
          id: "ediasbio-u6-ge-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a plasmid used for in genetic engineering?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cutting DNA"
                    },
                    {
                              "id": "b",
                              "text": "Vector carrying the gene into a cell"
                    },
                    {
                              "id": "c",
                              "text": "Making protein"
                    },
                    {
                              "id": "d",
                              "text": "Sterilising media"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Plasmid",
                              "statement": "Circular DNA vector in bacteria."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plasmid carries the foreign gene into the host.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Vector carrying the gene"
},
        },
        {
          id: "ediasbio-u6-ge-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the enzyme used to cut DNA at specific sequences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Restriction enzyme",
                              "statement": "Cuts DNA at specific sites."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Restriction enzyme.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly identified.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Restriction enzyme"
},
        },
        {
          id: "ediasbio-u6-ge-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the steps of inserting a gene into bacteria.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Recombinant DNA",
                              "statement": "Gene → plasmid → host."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gene of interest isolated using restriction enzymes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gene ligated into plasmid vector with DNA ligase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Plasmid inserted into bacterial host cells.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Transformed bacteria cultured to produce the protein.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cut → ligate → transform → culture"
},
        },
        {
          id: "ediasbio-u6-ge-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how plant tissue culture produces many identical plants.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Micropropagation",
                              "statement": "Sterile tissue → identical plantlets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Small tissue samples (explants) placed on sterile nutrient agar.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Growth hormones induce callus formation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Callus develops shoots and roots forming plantlets.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "All plantlets are genetically identical clones.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Rapid, disease-free mass production.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Explants → callus → identical plantlets (clones)"
},
        },
        {
          id: "ediasbio-u6-ge-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two advantages of GM crops.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two concerns about GM organisms.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one advantage of micropropagation.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "GM and tissue culture",
                              "statement": "Benefits and concerns."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Higher yields / pest or herbicide resistance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Second advantage: less pesticide use or better nutrition.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Gene escape to wild relatives / unknown long-term effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second concern: biodiversity loss or ethics.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Mass production of identical disease-free plants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rapid and uniform crop production.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "GM pros/cons; micropropagation advantage"
},
        },
        {
          id: "ediasbio-u6-ge-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define genetic engineering. (b) Name the enzyme cutting DNA. (c) Name the enzyme joining DNA. (d) What is a plasmid? (e) Give one example of a GM product. (f) Define tissue culture. (g) What is a callus? (h) Why is tissue culture done in sterile conditions? (i) Give one use of micropropagation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define genetic engineering.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "DNA-cutting enzyme.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "DNA-joining enzyme.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Define plasmid.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "GM product example.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Define tissue culture.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Define callus.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Why sterile conditions.",
                    "marks": 1
          },
          {
                    "label": "i",
                    "prompt": "One micropropagation use.",
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
                              "name": "Biotechnology",
                              "statement": "GE and tissue culture."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Direct manipulation of DNA for desired products.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Restriction enzyme.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "DNA ligase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Small circular bacterial DNA used as vector.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Human insulin, GM crops, enzymes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Growing plant tissues in sterile nutrient medium.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Undifferentiated mass of dividing plant cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "h",
                              "reasoning": "Prevents microbial contamination killing cultures.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "i",
                              "reasoning": "Mass produce identical plants (orchids, disease-free stock).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "i",
                              "reasoning": "Correct use stated.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "GE and tissue culture summary",
          "commonErrors": [
                    "Confusing restriction enzyme with ligase."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u6-biotech-notes",
      title: "Biotechnology — notes",
      summary: "Fermenters grow microbes for products (penicillin, insulin, ethanol); GE uses restriction enzymes/plasmids; tissue culture clones plants.",
      sections: [
        { heading: "Fermentation", body: "Fermenter controls temperature, pH, O₂, nutrients, sterility. Aerobic: penicillin; anaerobic: ethanol/biogas." },
        { heading: "Genetic engineering", body: "Restriction enzyme cuts gene → DNA ligase inserts into plasmid → bacteria produce protein (e.g. insulin)." },
        { heading: "Tissue culture", body: "Sterile explants → callus → identical plantlets; micropropagation for mass production." },
      ],
    },
  ],
};
