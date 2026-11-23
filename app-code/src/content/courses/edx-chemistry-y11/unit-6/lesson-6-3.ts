import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ech11-u6-lesson-6-3",
  code: "6-3",
  title: "Water Treatment and Purification",
  goal: "I CAN describe how water is treated to make it safe to drink, explain purification methods such as distillation and desalination, and compare their suitability.",
  standards: ["4CH1 2.28", "4CH1 2.29", "4CH1 2.30", "4CH1 1.16"],
  
  vocabulary: [
    { term: "Water treatment", definition: "The series of processes that removes solids, microbes and dissolved substances to make water safe to drink." },
    { term: "Coagulation", definition: "Adding chemicals (e.g. aluminium sulfate) so fine particles clump together into flocs." },
    { term: "Flocculation", definition: "The gentle stirring that mixes flocs so they grow large enough to settle." },
    { term: "Sedimentation", definition: "Heavy flocs settle to the bottom of a tank as sludge." },
    { term: "Filtration", definition: "Passing water through sand and gravel beds to remove remaining suspended solids." },
    { term: "Chlorination", definition: "Adding chlorine (or ozone/chlorine dioxide) to kill remaining microorganisms." },
    { term: "Desalination", definition: "Removing dissolved salts from seawater, usually by distillation or reverse osmosis." },
  ],
  concepts: [
    {
      id: "ech11-u6-water-treatment",
      title: "Treating water to make it safe to drink",
      skill: "Describe the stages of water treatment — screening, coagulation, sedimentation, filtration and chlorination — and explain the purpose of each.",
      lesson: {
        sections: [
          {
            heading: "Sources of water",
            body: "Most drinking water comes from **rivers**, **reservoirs** and **groundwater** (wells). Some regions use **desalination** of seawater where fresh water is scarce. All surface water needs treatment before drinking because it contains suspended solids, microorganisms, dissolved salts and pollutants.",
          },
          {
            heading: "The treatment stages",
            body: "1. **Screening:** large debris (twigs, plastic, leaves) is removed by bars.\n2. **Coagulation:** aluminium sulfate is added so tiny clay particles stick together into **flocs**.\n3. **Flocculation:** gentle stirring helps flocs grow and merge.\n4. **Sedimentation:** water flows slowly so heavy flocs settle as **sludge** at the bottom.\n5. **Filtration:** water passes through beds of sand and gravel, removing remaining fine particles.\n6. **Chlorination:** chlorine is added to kill harmful microorganisms such as bacteria that cause disease.\n\nSometimes fluoride is added for dental health and pH is adjusted.",
          },
          {
            heading: "Why each stage is needed",
            body: "Screening protects pumps and filters. Coagulation/flocculation makes tiny particles big enough to settle. Sedimentation and filtration physically remove solids. Chlorination is essential because filters cannot remove all microbes — chlorine disinfects the water so it stays safe through the pipes to the tap.",
          },
        ],
        keyFormulas: [
          { name: "Treatment sequence", statement: "screening → coagulation → flocculation → sedimentation → filtration → chlorination" },
          { name: "Floc", statement: "clay particles clumped by coagulant, removed by settling/filtration" },
          { name: "Chlorine", statement: "disinfectant that kills microorganisms" },
        ],
        workedExample: {
          problem: "Describe the role of coagulation and chlorination in water treatment and explain why both are needed.",
          solution: "Coagulation adds aluminium sulfate so suspended clay particles clump into flocs that can be settled and filtered out — it removes solids. Chlorination adds chlorine to kill disease-causing microorganisms that pass through filters. Both are needed: coagulation removes particles, chlorination makes the water microbiologically safe.",
        },
      },
      questions: [
        {
          id: "ech11-u6-water-treatment-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stage of water treatment kills harmful microorganisms?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Screening"
                    },
                    {
                              "id": "b",
                              "text": "Sedimentation"
                    },
                    {
                              "id": "c",
                              "text": "Chlorination"
                    },
                    {
                              "id": "d",
                              "text": "Flocculation"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Chlorination",
                              "statement": "Adding chlorine to kill microorganisms in treated water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chlorine is a disinfectant added at the final stage.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Chlorination",
          "commonErrors": [
                    "Choosing filtration — it removes solids but not all microbes."
          ]
},
        },
        {
          id: "ech11-u6-water-treatment-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two natural sources of water used for drinking supplies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Water sources",
                              "statement": "Rivers, reservoirs, groundwater and seawater (desalinated) are used."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two of rivers, reservoirs, lakes, groundwater/wells, desalinated seawater.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Rivers; reservoirs; groundwater; desalinated sea (any two).",
          "commonErrors": [
                    "Listing only 'tap water' — that is the product, not a source."
          ]
},
        },
        {
          id: "ech11-u6-water-treatment-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the purpose of adding chlorine during water treatment and explain why it is still needed after filtration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Chlorination",
                              "statement": "Chlorine disinfects water by killing microorganisms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chlorine kills bacteria and other microbes that cause water-borne diseases.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Filters remove particles but some microbes are too small to be trapped.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Chlorine provides a residual disinfectant that keeps water safe in the distribution pipes.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Kills microbes; needed because filters miss some and chlorine protects in pipes.",
          "commonErrors": [
                    "Saying chlorine removes dirt — it disinfects; solids are removed earlier."
          ]
},
        },
        {
          id: "ech11-u6-water-treatment-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The stages of water treatment are listed in a jumbled order: filtration, chlorination, coagulation, screening, sedimentation, flocculation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Put the stages in the correct order.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of the coagulation and flocculation stages.",
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
                              "name": "Water treatment sequence",
                              "statement": "screening → coagulation → flocculation → sedimentation → filtration → chlorination"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Correct order: screening, coagulation, flocculation, sedimentation, filtration, chlorination.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Coagulation adds chemicals (e.g. aluminium sulfate) so tiny particles clump together.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Flocculation gently stirs so the clumps (flocs) grow larger.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Big flocs can then settle out in sedimentation and be removed by filtration.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) screening→coagulation→flocculation→sedimentation→filtration→chlorination (b) clump fine particles for removal.",
          "commonErrors": [
                    "Putting chlorination before filtration — disinfection is the last stage."
          ]
},
        },
        {
          id: "ech11-u6-water-treatment-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A reservoir supplies water to a town.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe what happens during the sedimentation stage.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why sedimentation uses a large, shallow tank with slow flow.",
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
                              "name": "Sedimentation",
                              "statement": "Heavy flocs settle to the bottom when water flows slowly."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Water containing flocs flows slowly into a large settling tank.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "The heavy flocs sink to the bottom under gravity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Clear water passes over the top to the next stage; sludge is removed periodically.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Slow flow gives flocs time to settle before reaching the outlet.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A large shallow tank increases the settling distance area and reduces turbulence that would re-suspend particles.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fast or deep turbulent flow would carry flocs through to filtration, overloading it.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) flocs settle, sludge removed, clear water overflows (b) slow flow + large area → efficient settling.",
          "commonErrors": [
                    "Thinking sedimentation uses filters — it relies on gravity settling."
          ]
},
        },
        {
          id: "ech11-u6-water-treatment-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A town's water company reports an outbreak of water-borne disease traced to its supply.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the complete treatment sequence the water should pass through.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Identify which stage failed if harmful bacteria reached consumers despite clear-looking water.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two other measures that could improve safety.",
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
                              "name": "Water treatment",
                              "statement": "Remove solids then disinfect; chlorination is the microbiological safety step."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Screening removes large debris.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Coagulation + flocculation clump fine particles.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sedimentation + filtration remove the flocs and remaining solids.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Chlorination kills remaining microorganisms.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Chlorination is the disinfecting stage — its failure explains live bacteria.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Clear water only proves solids were removed; microbes are invisible.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Possible causes: too little chlorine, contact time too short, or contamination after treatment.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any two valid: increase chlorine dose/contact time, use ozone or UV, monitor regularly, protect pipes from contamination.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) screen→coagulate→flocculate→settle→filter→chlorinate (b) chlorination failed (c) more chlorine/UV/monitoring.",
          "commonErrors": [
                    "Blaming filtration — clear water can still contain microbes; disinfection is the key stage."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u6-purifying-water",
      title: "Purifying water: distillation and desalination",
      skill: "Explain how distillation and desalination produce pure or fresh water, and evaluate their costs and uses.",
      lesson: {
        sections: [
          {
            heading: "Distillation",
            body: "**Distillation** separates water from dissolved solids by evaporation and condensation. Impure water is boiled; only water vapour rises, leaving dissolved salts, microbes and most impurities behind. The vapour is cooled and condenses as **pure water** (distillate). It is used in laboratories, in car batteries and where very pure water is needed, but it uses a lot of energy so it is expensive for large supplies.",
          },
          {
            heading: "Desalination",
            body: "**Desalination** removes salt from seawater to make fresh water — essential in arid coastal regions. Methods include **distillation** (multi-stage flash distillation) and **reverse osmosis** (forcing seawater through a membrane that lets water molecules through but not salt ions). Both need large amounts of energy, so desalinated water costs more than treated river water, but it provides a reliable supply where fresh water is scarce.",
          },
          {
            heading: "Comparing purification methods",
            body: "| Method | Removes dissolved salts? | Removes microbes? | Cost |\n|---|---|---|\n| Filtration | No | Some | cheap |\n| Chlorination | No | Yes | cheap |\n| Distillation | Yes | Yes | expensive |\n| Reverse osmosis | Yes | Most | moderate–expensive |\n\nFor drinking water, treatment (coagulation→filtration→chlorination) is cheapest; distillation or reverse osmosis is needed only where water is very salty or ultra-pure.",
          },
        ],
        keyFormulas: [
          { name: "Distillation", statement: "evaporate pure water → condense → dissolved solids left behind" },
          { name: "Reverse osmosis", statement: "pressure forces water through a membrane; salt ions are retained" },
          { name: "Desalination", statement: "removing dissolved salts from seawater" },
        ],
        workedExample: {
          problem: "A coastal city with no rivers must choose between building a desalination plant and piping water from a distant reservoir. Discuss the chemical and practical factors.",
          solution: "Desalination by reverse osmosis or distillation produces fresh water locally but consumes large amounts of energy, raising cost and CO$_2$ emissions. Piping reservoir water is cheaper per litre but needs long pipelines, pumping energy and is vulnerable to drought upstream. The choice depends on energy price, distance, water demand and environmental impact.",
        },
      },
      questions: [
        {
          id: "ech11-u6-purifying-water-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method produces pure water by evaporating and then condensing it?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Filtration"
                    },
                    {
                              "id": "b",
                              "text": "Chlorination"
                    },
                    {
                              "id": "c",
                              "text": "Distillation"
                    },
                    {
                              "id": "d",
                              "text": "Sedimentation"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Distillation",
                              "statement": "Boil → vapour → condense pure water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only distillation separates water as a vapour from dissolved solids.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Distillation",
          "commonErrors": [
                    "Choosing filtration — it cannot remove dissolved substances."
          ]
},
        },
        {
          id: "ech11-u6-purifying-water-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'desalination' and state one place where it is commonly needed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Desalination",
                              "statement": "Removing dissolved salts from seawater to produce fresh water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Desalination is the removal of dissolved salts, usually from seawater.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It is commonly needed in arid coastal regions with no fresh water source.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Removing salts from seawater; e.g. arid coastal regions.",
          "commonErrors": [
                    "Defining it as removing microbes — it targets dissolved salts."
          ]
},
        },
        {
          id: "ech11-u6-purifying-water-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two tests or observations that could show a sample of water is pure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Testing pure water",
                              "statement": "Pure water boils at 100 °C and leaves no residue on evaporation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It boils at exactly 100 °C at standard pressure (dissolved solids raise the boiling point).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Evaporating a sample leaves no solid residue.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It does not conduct electricity (no dissolved ions) — also acceptable.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Boils at 100 °C; no residue on evaporation; does not conduct.",
          "commonErrors": [
                    "Saying pure water 'looks clear' — many impure waters are clear."
          ]
},
        },
        {
          id: "ech11-u6-purifying-water-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A laboratory needs ultrapure water for preparing standard solutions.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why tap water is unsuitable and which purification method is needed.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two reasons distilled water is preferred for analytical chemistry.",
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
                              "name": "Ultrapure water",
                              "statement": "Water free of dissolved ions and contaminants, made by distillation or deionisation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Tap water contains dissolved salts, chlorine and microbes that would contaminate results.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Distillation (or deionisation) removes dissolved ions entirely.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Only distillation/DI gives the purity needed for standard solutions.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "It contains no extra ions that could react with reagents or affect measurements.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It gives consistent, reproducible results in titrations and analyses.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) tap has dissolved impurities; use distillation/DI (b) no interfering ions; reproducible results.",
          "commonErrors": [
                    "Using filtered tap water — filtration does not remove dissolved ions."
          ]
},
        },
        {
          id: "ech11-u6-purifying-water-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A small island relies on desalination of seawater for all its fresh water.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare distillation and reverse osmosis as desalination methods.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why desalinated water costs more than water from a river supply.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Desalination methods",
                              "statement": "Distillation uses heat; reverse osmosis uses pressure through a membrane — both need energy."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Distillation boils seawater and condenses pure vapour — simple but energy-hungry.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Reverse osmosis pushes water through a membrane under pressure — less heat needed but membranes cost and need maintenance.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both remove nearly all dissolved salts.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both methods consume large amounts of energy (heat or electricity for pumps).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Energy cost dominates the price of the water produced.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "River water needs only treatment, which is much cheaper per litre.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) distil=heat/condense; RO=pressure/membrane (b) high energy demand → high cost.",
          "commonErrors": [
                    "Saying desalination is cheap — the energy requirement is the main cost."
          ]
},
        },
        {
          id: "ech11-u6-purifying-water-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A region must decide between piping treated river water 200 km or building a desalination plant.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the treatment river water needs before it reaches homes.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Discuss the energy and environmental issues of each option.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Give a justified recommendation for a coastal city with no nearby river.",
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
                              "name": "Water supply options",
                              "statement": "Treatment is cheap per litre; desalination and long pipelines cost energy."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Screening removes debris.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Coagulation/flocculation clump fine particles.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sedimentation and filtration remove the solids.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Chlorination disinfects the water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Piping needs pumping energy over 200 km and the source river may be polluted or drought-affected.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Desalination needs large energy inputs and produces concentrated brine waste.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both have CO$_2$ impacts if fossil energy is used.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Coastal city with no river → desalination (reverse osmosis) is the practical choice despite cost; justify by reliability of supply.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) treat: screen→coagulate→settle→filter→chlorinate (b) pipeline energy vs desal energy+brine (c) desalination justified for coastal city.",
          "commonErrors": [
                    "Ignoring the brine waste from desalination or the source-water risk of a distant river."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u6-treatment-notes",
      title: "Water treatment and purification — notes",
      summary: "Drinking water: screen → coagulate → flocculate → settle → filter → chlorinate. Pure water by distillation; fresh water from seawater by desalination (reverse osmosis/distillation).",
      sections: [
        { heading: "Treatment sequence", body: "Screening → coagulation → flocculation → sedimentation → filtration → chlorination. Chlorine is the microbiological safety step." },
        { heading: "Purification", body: "Distillation = boil + condense (pure water). Desalination = remove salts from seawater; reverse osmosis uses a membrane under pressure." },
        { heading: "Cost", body: "Treatment is cheap; distillation and desalination are energy-hungry and expensive — used only when necessary." },
      ],
    },
  ],
};
