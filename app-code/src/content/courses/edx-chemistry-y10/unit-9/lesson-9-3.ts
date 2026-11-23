import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ech10-u9-lesson-9-3",
  code: "9-3",
  title: "Alkenes, Cracking and Unsaturation",
  goal: "I CAN describe the structure and reactions of alkenes, use the bromine water test for unsaturation and explain cracking of hydrocarbons.",
  standards: ["4CH1 4.10", "4CH1 4.11", "4CH1 4.12", "4CH1 4.13", "4CH1 4.14", "4CH1 4.15"],
  
  vocabulary: [
    { term: "Alkene", definition: "An unsaturated hydrocarbon containing at least one carbon–carbon double bond, with general formula $\\text{C}_n\\text{H}_{2n}$." },
    { term: "Unsaturated", definition: "Containing at least one $\\text{C=C}$ double bond, so other atoms can be added across it." },
    { term: "Addition reaction", definition: "A reaction in which two reactants join to form one product, for example a molecule adding across a $\\text{C=C}$ bond." },
    { term: "Bromine water test", definition: "A test for unsaturation: orange bromine water is decolourised when it reacts with a $\\text{C=C}$ bond." },
    { term: "Cracking", definition: "The thermal decomposition of long-chain hydrocarbons into shorter, more useful alkanes and alkenes." },
    { term: "Catalyst", definition: "A substance that speeds up a reaction without being used up; cracking uses a heated catalyst such as aluminium oxide." },
  ],
  concepts: [
    {
      id: "ech10-u9-alkenes-addition",
      title: "Alkenes and addition reactions",
      skill: "Describe alkene structure, use the bromine water test to distinguish alkenes from alkanes and write addition reactions.",
      lesson: {
        sections: [
          {
            heading: "Alkene structure",
            body: "**Alkenes** are unsaturated hydrocarbons containing at least one carbon–carbon **double bond** $\\text{C=C}$. Their general formula is:\n\n\n\n$$\\text{C}_n\\text{H}_{2n}$$\n\n\n\nEthene is $\\text{C}_2\\text{H}_4$, propene $\\text{C}_3\\text{H}_6$, butene $\\text{C}_4\\text{H}_8$. The double bond means alkenes are **unsaturated** — they can undergo **addition reactions**, where atoms add across the $\\text{C=C}$ bond to form a single product.",
          },
          {
            heading: "The bromine water test and addition reactions",
            body: "**Bromine water test**: shake the hydrocarbon with orange bromine water.\n\n- **Alkene**: the $\\text{C=C}$ bond adds bromine, so the orange colour **disappears** (goes colourless).\n- **Alkane**: no reaction, so the solution **stays orange**.\n\nOther addition reactions: hydrogen adds across $\\text{C=C}$ (hydrogenation) to make an alkane; steam can add to make an alcohol. Addition reactions are characteristic of alkenes.",
          },
        ],
        keyFormulas: [
          { name: "Alkene general formula", statement: "$\\text{C}_n\\text{H}_{2n}$" },
          { name: "Saturated vs unsaturated", statement: "alkane $\\text{C}_n\\text{H}_{2n+2}$ (single bonds); alkene $\\text{C}_n\\text{H}_{2n}$ (one $\\text{C=C}$)" },
          { name: "Bromine water test", statement: "alkene decolourises orange bromine water; alkane does not" },
        ],
        workedExample: {
          problem: "Two colourless gases, X and Y, are tested with bromine water. X decolourises the orange bromine water; Y leaves it orange. Identify which is the alkene and explain.",
          solution: "X is the alkene: its $\\text{C=C}$ double bond undergoes an addition reaction with bromine, using up the orange $\\text{Br}_2$. Y is the alkane, which has only single bonds and does not react, so the bromine water stays orange.",
        },
      },
      questions: [
        {
          id: "ech10-u9-alkenes-addition-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the general formula of the alkenes?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\text{C}_n\\text{H}_{2n+2}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\text{C}_n\\text{H}_{2n}$"
                    },
                    {
                              "id": "c",
                              "text": "$\\text{C}_n\\text{H}_{2n-2}$"
                    },
                    {
                              "id": "d",
                              "text": "$\\text{C}_n\\text{H}_n$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alkene general formula",
                              "statement": "Alkenes are $\\text{C}_n\\text{H}_{2n}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alkenes contain one $\\text{C=C}$ double bond, giving formula $\\text{C}_n\\text{H}_{2n}$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) $\\text{C}_n\\text{H}_{2n}$",
          "commonErrors": [
                    "Using the alkane formula $\\text{C}_n\\text{H}_{2n+2}$."
          ]
},
        },
        {
          id: "ech10-u9-alkenes-addition-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is observed when an alkene is shaken with orange bromine water, and what does this show?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Bromine water test",
                              "statement": "Alkenes decolourise bromine water by addition across C=C."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The orange colour disappears (solution becomes colourless).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "This shows the compound is unsaturated — it has a $\\text{C=C}$ double bond that adds bromine.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Orange → colourless; shows unsaturation ($\\text{C=C}$ present).",
          "commonErrors": [
                    "Saying the colour turns blue or that all hydrocarbons do this."
          ]
},
        },
        {
          id: "ech10-u9-alkenes-addition-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ethene, $\\text{C}_2\\text{H}_4$, reacts with bromine, $\\text{Br}_2$, in an addition reaction. Write the balanced equation and name the product.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Addition reaction",
                              "statement": "Two reactants join to form one product across the $\\text{C=C}$ bond."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Addition across the double bond: $\\text{C}_2\\text{H}_4 + \\text{Br}_2 \\rightarrow \\text{C}_2\\text{H}_4\\text{Br}_2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The product has the two bromine atoms on the two carbons that formed the double bond.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The product is 1,2-dibromoethane.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\text{C}_2\\text{H}_4 + \\text{Br}_2 \\rightarrow \\text{C}_2\\text{H}_4\\text{Br}_2$; 1,2-dibromoethane.",
          "commonErrors": [
                    "Writing a substitution product or two separate products."
          ]
},
        },
        {
          id: "ech10-u9-alkenes-addition-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two hydrocarbons are tested: P has molecular formula $\\text{C}_3\\text{H}_8$ and Q has molecular formula $\\text{C}_3\\text{H}_6$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which is the alkane and which is the alkene.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Predict the result of the bromine water test for each compound.",
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
                              "name": "Alkane vs alkene",
                              "statement": "Alkane $\\text{C}_n\\text{H}_{2n+2}$ saturated; alkene $\\text{C}_n\\text{H}_{2n}$ unsaturated."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "P ($\\text{C}_3\\text{H}_8$) is the alkane propane; Q ($\\text{C}_3\\text{H}_6$) is the alkene propene.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Correct identification of both.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "P stays orange (no reaction — saturated).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Q decolourises the bromine water (unsaturated $\\text{C=C}$ adds $\\text{Br}_2$).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "P propane (alkane, stays orange); Q propene (alkene, decolourises).",
          "commonErrors": [
                    "Reversing which decolourises bromine water."
          ]
},
        },
        {
          id: "ech10-u9-alkenes-addition-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Propene, $\\text{C}_3\\text{H}_6$, undergoes addition reactions.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the balanced equation for the reaction of propene with bromine.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write the balanced equation for the hydrogenation of propene to form propane.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why alkenes undergo addition reactions while alkanes do not.",
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
                              "name": "Addition reaction",
                              "statement": "Atoms add across the $\\text{C=C}$ double bond to form a single product."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\text{C}_3\\text{H}_6 + \\text{Br}_2 \\rightarrow \\text{C}_3\\text{H}_6\\text{Br}_2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Product is 1,2-dibromopropane.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\text{C}_3\\text{H}_6 + \\text{H}_2 \\rightarrow \\text{C}_3\\text{H}_8$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hydrogen adds across the double bond to form propane.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The $\\text{C=C}$ double bond is a site where atoms can add; single bonds in alkanes cannot break open the same way.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Alkenes are unsaturated, so addition is possible; alkanes are saturated.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $\\text{C}_3\\text{H}_6 + \\text{Br}_2 \\rightarrow \\text{C}_3\\text{H}_6\\text{Br}_2$ (b) $\\text{C}_3\\text{H}_6 + \\text{H}_2 \\rightarrow \\text{C}_3\\text{H}_8$ (c) C=C allows addition; single bonds do not.",
          "commonErrors": [
                    "Writing substitution equations for alkenes."
          ]
},
        },
        {
          id: "ech10-u9-alkenes-addition-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student has three unknown hydrocarbon liquids: hexane $\\text{C}_6\\text{H}_{14}$, hexene $\\text{C}_6\\text{H}_{12}$ and cyclohexane $\\text{C}_6\\text{H}_{12}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which is the alkane and which are the alkenes (or explain if one is neither).",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how bromine water can be used to identify the alkane.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why hexane and hexene cannot be distinguished by molecular formula alone.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Suggest a second test that could help identify the cycloalkane if needed.",
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
                              "name": "Alkane vs alkene",
                              "statement": "Alkane $\\text{C}_n\\text{H}_{2n+2}$; alkene $\\text{C}_n\\text{H}_{2n}$ with $\\text{C=C}$."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Hexane $\\text{C}_6\\text{H}_{14}$ is the alkane (saturated).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Hexene $\\text{C}_6\\text{H}_{12}$ is the alkene; cyclohexane $\\text{C}_6\\text{H}_{12}$ is a cycloalkane with only single bonds in a ring.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Shake each with orange bromine water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The one that stays orange is the alkane; the one that decolourises contains $\\text{C=C}$.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Hexene and cyclohexane have the same molecular formula $\\text{C}_6\\text{H}_{12}$ but different structures.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Molecular formula does not show whether the bonds are single in a ring or include a double bond.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Cycloalkanes have only single bonds in a ring, so like alkanes they do not react with bromine water — the test cannot separate hexane from cyclohexane; use boiling point or another property instead.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Justification that the test distinguishes unsaturation, not ring structure.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) hexane alkane, hexene alkene, cyclohexane cycloalkane (b) bromine water stays orange for alkane (c) same molecular formula, different bonding (d) bromine water cannot separate them; use another property.",
          "commonErrors": [
                    "Assuming all $\\text{C}_n\\text{H}_{2n}$ compounds are alkenes."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u9-cracking-fuels",
      title: "Cracking and the uses of hydrocarbons",
      skill: "Explain why cracking is needed, describe the process and write equations for the thermal decomposition of hydrocarbons.",
      lesson: {
        sections: [
          {
            heading: "Why cracking is needed",
            body: "Crude oil contains far more large hydrocarbon molecules (diesel, fuel oil, bitumen) than small ones (petrol, refinery gas). But demand for **petrol** and **gases** is much higher than their natural supply.\n\n**Cracking** solves this problem: it breaks large hydrocarbon molecules into smaller, more useful ones. It also produces **alkenes**, which are needed to make plastics and other chemicals.",
          },
          {
            heading: "The cracking process",
            body: "Cracking is **thermal decomposition**: large molecules are heated to about $600$–$700^\\circ\\text{C}$, often with a catalyst such as aluminium oxide or silica.\n\n$$\\text{long-chain alkane} \\rightarrow \\text{shorter alkane} + \\text{alkene}$$\n\n\nFor example, decane can crack to pentane and pentene: $\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_5\\text{H}_{12} + \\text{C}_5\\text{H}_{10}$. The products are a mixture of smaller alkanes and alkenes, which are then separated by fractional distillation.",
          },
        ],
        keyFormulas: [
          { name: "Cracking", statement: "$\\text{long-chain alkane} \\rightarrow \\text{shorter alkane} + \\text{alkene}$" },
          { name: "Conditions", statement: "heat ~$600$–$700^\\circ\\text{C}$, catalyst e.g. $\\text{Al}_2\\text{O}_3$" },
          { name: "Example", statement: "$\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_5\\text{H}_{12} + \\text{C}_5\\text{H}_{10}$" },
        ],
        workedExample: {
          problem: "Explain why cracking is used in oil refineries and state two products of cracking.",
          solution: "Cracking converts surplus large hydrocarbons (fuel oil, bitumen) into smaller, more valuable ones. It is used because demand for petrol and gases exceeds their natural supply. Products include shorter alkanes (petrol components) and alkenes (for plastics).",
        },
      },
      questions: [
        {
          id: "ech10-u9-cracking-fuels-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cracking?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The separation of crude oil into fractions"
                    },
                    {
                              "id": "b",
                              "text": "The thermal decomposition of large hydrocarbons into smaller ones"
                    },
                    {
                              "id": "c",
                              "text": "The complete combustion of fuels"
                    },
                    {
                              "id": "d",
                              "text": "The removal of sulfur from fuels"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cracking",
                              "statement": "Thermal decomposition of long-chain hydrocarbons into shorter alkanes and alkenes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cracking breaks large molecules into smaller, more useful ones by heating.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Thermal decomposition of large hydrocarbons.",
          "commonErrors": [
                    "Confusing cracking with fractional distillation."
          ]
},
        },
        {
          id: "ech10-u9-cracking-fuels-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two reasons why cracking is carried out in oil refineries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cracking",
                              "statement": "Converts surplus heavy fractions into high-demand light products and alkenes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Demand for petrol and small gases exceeds their natural supply in crude oil.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It produces alkenes needed to manufacture plastics and other chemicals (or: uses up less valuable heavy fractions).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Makes more petrol/gases from heavy fractions; produces alkenes for plastics.",
          "commonErrors": [
                    "Saying cracking purifies the oil."
          ]
},
        },
        {
          id: "ech10-u9-cracking-fuels-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "During cracking, decane $\\text{C}_{10}\\text{H}_{22}$ decomposes to pentane $\\text{C}_5\\text{H}_{12}$ and pentene $\\text{C}_5\\text{H}_{10}$. Write the balanced equation and state the conditions used for cracking.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Cracking",
                              "statement": "$\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_5\\text{H}_{12} + \\text{C}_5\\text{H}_{10}$; heat + catalyst."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equation: $\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_5\\text{H}_{12} + \\text{C}_5\\text{H}_{10}$ (atoms balance: 10 C, 22 H each side).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conditions: heating to about $600$–$700^\\circ\\text{C}$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A catalyst such as aluminium oxide (or silica) is used.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_5\\text{H}_{12} + \\text{C}_5\\text{H}_{10}$; ~$600$–$700^\\circ\\text{C}$ with a catalyst.",
          "commonErrors": [
                    "Getting the hydrogen count wrong on one side."
          ]
},
        },
        {
          id: "ech10-u9-cracking-fuels-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A fractionating column produces $200\\text{ kg}$ of fuel oil but only $80\\text{ kg}$ of petrol from a batch of crude oil. The refinery wants more petrol.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the refinery has a surplus of fuel oil.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how cracking could increase the petrol yield.",
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
                              "name": "Cracking",
                              "statement": "Heavy fractions are cracked into lighter, more valuable products."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Crude oil naturally contains more large hydrocarbon molecules than small ones.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Most heavy molecules end up as fuel oil, bitumen etc., while little petrol forms naturally.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pass the fuel oil through a cracker at high temperature with a catalyst.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Large molecules break into smaller alkanes (petrol-range) and alkenes, increasing petrol yield.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) crude oil has few small molecules (b) crack fuel oil → smaller alkanes = more petrol.",
          "commonErrors": [
                    "Saying the column is broken and needs repair."
          ]
},
        },
        {
          id: "ech10-u9-cracking-fuels-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Hexane $\\text{C}_6\\text{H}_{14}$ is cracked. One possible pair of products is propane $\\text{C}_3\\text{H}_8$ and propene $\\text{C}_3\\text{H}_6$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the balanced equation for this cracking reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State two conditions needed for cracking to occur.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why the products of cracking are more useful than the original hexane for making plastics.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Cracking",
                              "statement": "Long-chain alkane → shorter alkane + alkene."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\text{C}_6\\text{H}_{14} \\rightarrow \\text{C}_3\\text{H}_8 + \\text{C}_3\\text{H}_6$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Atoms balance: 6 C and 14 H on each side.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "High temperature (~$600$–$700^\\circ\\text{C}$).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A catalyst such as aluminium oxide.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cracking produces alkenes, which have $\\text{C=C}$ bonds that can polymerise.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Alkanes cannot polymerise, so the alkene products are essential feedstocks for plastics.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $\\text{C}_6\\text{H}_{14} \\rightarrow \\text{C}_3\\text{H}_8 + \\text{C}_3\\text{H}_6$ (b) heat + catalyst (c) alkenes can polymerise; alkanes cannot.",
          "commonErrors": [
                    "Forgetting the alkene product must have two fewer hydrogens than the alkane."
          ]
},
        },
        {
          id: "ech10-u9-cracking-fuels-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A refinery cracks $500\\text{ kg}$ of a heavy fraction. The products are separated into alkanes and alkenes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the general equation for cracking an alkane $\\text{C}_n\\text{H}_{2n+2}$.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why the products always include at least one alkene.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "The cracked products are separated by fractional distillation. Explain how this works.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Suggest two uses of the alkene products.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Cracking",
                              "statement": "Alkane → shorter alkane + alkene; products separated by boiling point."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\text{C}_n\\text{H}_{2n+2} \\rightarrow \\text{C}_x\\text{H}_{2x+2} + \\text{C}_y\\text{H}_{2y}$ where $x + y = n$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "The second product is an alkene because it has 2 fewer H than an alkane of the same carbon count.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cracking breaks C–C bonds in the chain; the two fragments cannot both be saturated without adding hydrogen.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "One fragment must lose hydrogens to form a $\\text{C=C}$ double bond, so an alkene is always produced.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "The cracked mixture is heated and passed up a fractionating column.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Each product condenses at the height matching its boiling point, so gases, petrol-range liquids and heavier fractions are collected separately.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any two of: feedstock for plastics/polymerisation, making solvents, hydrogen production, chemical feedstock.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Alkenes' $\\text{C=C}$ bonds make them valuable for addition reactions and polymerisation.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $\\text{C}_n\\text{H}_{2n+2} \\rightarrow \\text{shorter alkane} + \\text{alkene}$ (b) one fragment must form C=C (c) fractional distillation by boiling point (d) plastics feedstock, solvents etc.",
          "commonErrors": [
                    "Writing products that do not balance carbon and hydrogen."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u9-alkenes-notes",
      title: "Alkenes and cracking — revision notes",
      summary: "Alkenes $\\text{C}_n\\text{H}_{2n}$ have C=C bonds, undergo addition reactions and decolourise bromine water. Cracking makes smaller alkanes + alkenes from big molecules.",
      sections: [
        { heading: "Key idea", body: "Alkene = unsaturated (one C=C); alkane = saturated (single bonds only). Bromine water distinguishes them." },
        { heading: "Cracking", body: "Heat large hydrocarbons (~$600$–$700^\\circ\\text{C}$) with a catalyst → shorter alkane + alkene. Needed because petrol/gas demand > supply." },
        { heading: "Tests", body: "Bromine water: alkene decolourises, alkane stays orange." },
      ],
    },
  ],
};
