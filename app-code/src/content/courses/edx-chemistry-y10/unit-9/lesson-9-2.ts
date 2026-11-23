import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ech10-u9-lesson-9-2",
  code: "9-2",
  title: "Alkanes: Structure, Formulae and Combustion",
  goal: "I CAN use the general formula of alkanes to find molecular formulae, name simple alkanes and write equations for complete and incomplete combustion.",
  standards: ["4CH1 4.5", "4CH1 4.6", "4CH1 4.7", "4CH1 4.8", "4CH1 4.9"],
  
  vocabulary: [
    { term: "Alkane", definition: "A saturated hydrocarbon containing only single C–C and C–H bonds, with general formula $\\text{C}_n\\text{H}_{2n+2}$." },
    { term: "Homologous series", definition: "A family of compounds with the same functional group and general formula, each member differing by a $\\text{CH}_2$ unit." },
    { term: "Saturated", definition: "Containing only single bonds between carbon atoms, so no more atoms can be added across the carbon chain." },
    { term: "Complete combustion", definition: "Burning in a plentiful supply of oxygen to produce carbon dioxide and water only." },
    { term: "Incomplete combustion", definition: "Burning in a limited supply of oxygen to produce carbon monoxide (or carbon) as well as carbon dioxide and water." },
    { term: "Isomer", definition: "A compound with the same molecular formula as another but a different structural arrangement of atoms." },
  ],
  concepts: [
    {
      id: "ech10-u9-alkane-structure",
      title: "Alkane structure and formulae",
      skill: "Use the general formula $\\text{C}_n\\text{H}_{2n+2}$ to find molecular formulae, names and relative molecular masses of alkanes.",
      lesson: {
        sections: [
          {
            heading: "The alkane homologous series",
            body: "**Alkanes** are saturated hydrocarbons with only single bonds. They form a **homologous series** with general formula:\n\n\n\n$$\\text{C}_n\\text{H}_{2n+2}$$\n\n\n\nThe first members are methane $\\text{CH}_4$, ethane $\\text{C}_2\\text{H}_6$, propane $\\text{C}_3\\text{H}_8$, butane $\\text{C}_4\\text{H}_{10}$ and pentane $\\text{C}_5\\text{H}_{12}$. Each successive member adds a $\\text{CH}_2$ unit.",
          },
          {
            heading: "Naming and isomers",
            body: "Alkane names use prefixes for the number of carbon atoms: meth- (1), eth- (2), prop- (3), but- (4), pent- (5), hex- (6), ending in **-ane**. The name tells you the longest continuous carbon chain; branches are named as alkyl groups such as methyl ($\\text{-CH}_3$).\n\n**Structural isomers** have the same molecular formula but different arrangements, e.g. butane $\\text{C}_4\\text{H}_{10}$ exists as straight-chain butane and 2-methylpropane.",
          },
        ],
        keyFormulas: [
          { name: "Alkane general formula", statement: "$\\text{C}_n\\text{H}_{2n+2}$" },
          { name: "Homologous series step", statement: "each member differs by $\\text{CH}_2$" },
          { name: "Naming", statement: "meth/eth/prop/but/pent/hex + -ane" },
        ],
        workedExample: {
          problem: "Find the molecular formula of the alkane with 6 carbon atoms and calculate its relative molecular mass ($A_r$: C $= 12$, H $= 1$).",
          solution: "For an alkane $\\text{C}_n\\text{H}_{2n+2}$, so $n = 6$ gives $\\text{C}_6\\text{H}_{14}$ (hexane). $M_r = 6 \\times 12 + 14 \\times 1 = 72 + 14 = 86$.",
        },
      },
      questions: [
        {
          id: "ech10-u9-alkane-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the general formula of the alkanes?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\text{C}_n\\text{H}_{2n}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\text{C}_n\\text{H}_{2n+2}$"
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
                              "name": "Alkane general formula",
                              "statement": "Alkanes are $\\text{C}_n\\text{H}_{2n+2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alkanes are saturated hydrocarbons with formula $\\text{C}_n\\text{H}_{2n+2}$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) $\\text{C}_n\\text{H}_{2n+2}$",
          "commonErrors": [
                    "Confusing alkanes with alkenes ($\\text{C}_n\\text{H}_{2n}$)."
          ]
},
        },
        {
          id: "ech10-u9-alkane-structure-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the molecular formulae of ethane and butane, and state what the prefix 'but-' tells you.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alkane formulae",
                              "statement": "C$_n$H$_{2n+2}$; prefixes give carbon count."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethane is $\\text{C}_2\\text{H}_6$; butane is $\\text{C}_4\\text{H}_{10}$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "'but-' means the longest carbon chain has 4 carbon atoms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\text{C}_2\\text{H}_6$ and $\\text{C}_4\\text{H}_{10}$; but- = 4 carbons.",
          "commonErrors": [
                    "Writing $\\text{C}_4\\text{H}_8$ for butane (that is an alkene)."
          ]
},
        },
        {
          id: "ech10-u9-alkane-structure-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "An alkane has the molecular formula $\\text{C}_5\\text{H}_{12}$. (a) Name the alkane. (b) Calculate its relative molecular mass. ($A_r$: C $= 12$, H $= 1$)",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Alkane formulae",
                              "statement": "$\\text{C}_n\\text{H}_{2n+2}$; $M_r = \\sum nA_r$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Five carbon atoms gives the prefix pent-, so the name is pentane.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "$M_r = 5 \\times 12 + 12 \\times 1$.",
                              "working": "60 + 12",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$M_r = 72$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Pentane; $M_r = 72$.",
          "commonErrors": [
                    "Using $2n$ instead of $2n+2$ hydrogens."
          ]
},
        },
        {
          id: "ech10-u9-alkane-structure-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two compounds both have the molecular formula $\\text{C}_4\\text{H}_{10}$: one is a straight chain and one has a branched chain.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the straight-chain isomer.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Draw or describe the branched isomer and give its name.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the term for compounds with the same molecular formula but different structures.",
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
                              "name": "Isomers",
                              "statement": "Same molecular formula, different structural arrangement."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The straight-chain isomer is butane.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The branched isomer has a three-carbon chain with a methyl group on the middle carbon: $\\text{CH}_3\\text{CH(CH}_3\\text{)CH}_3$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Its name is 2-methylpropane.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "They are structural isomers.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) butane (b) 2-methylpropane, $\\text{CH}_3\\text{CH(CH}_3\\text{)CH}_3$ (c) structural isomers.",
          "commonErrors": [
                    "Calling them the same compound rather than isomers."
          ]
},
        },
        {
          id: "ech10-u9-alkane-structure-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The alkane series has general formula $\\text{C}_n\\text{H}_{2n+2}$.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the molecular formulae of the alkanes with 3 and 7 carbon atoms.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what is meant by a homologous series.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the relative molecular mass of the alkane with 8 carbon atoms. ($A_r$: C $= 12$, H $= 1$)",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Alkane general formula",
                              "statement": "$\\text{C}_n\\text{H}_{2n+2}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$n = 3$: $\\text{C}_3\\text{H}_8$ (propane).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$n = 7$: $\\text{C}_7\\text{H}_{16}$ (heptane).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "A homologous series is a family of compounds with the same functional group and general formula.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each member differs from the next by a $\\text{CH}_2$ unit and shows a gradual trend in properties.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "$n = 8$: $\\text{C}_8\\text{H}_{18}$; $M_r = 8 \\times 12 + 18 \\times 1$.",
                              "working": "96 + 18",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "$M_r = 114$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $\\text{C}_3\\text{H}_8$, $\\text{C}_7\\text{H}_{16}$ (b) same general formula, differ by $\\text{CH}_2$ (c) $M_r = 114$.",
          "commonErrors": [
                    "Using $2n$ hydrogens for $n = 8$ ($\\text{C}_8\\text{H}_{16}$ is wrong)."
          ]
},
        },
        {
          id: "ech10-u9-alkane-structure-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An alkane X has relative molecular mass $72$. ($A_r$: C $= 12$, H $= 1$)",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the molecular formula of X.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Name X.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Write the empirical formula of X and explain why it differs from (or equals) the molecular formula.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State how many structural isomers X has at this carbon number, giving the names of the two simplest.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Alkane formulae",
                              "statement": "$\\text{C}_n\\text{H}_{2n+2}$, $M_r = 14n + 2$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Try $n = 5$: $M_r = 5 \\times 12 + 12 \\times 1 = 72$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Check formula: $2n + 2 = 12$ hydrogens for $n = 5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Molecular formula is $\\text{C}_5\\text{H}_{12}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Five carbons: pentane.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Empirical formula is $\\text{C}_5\\text{H}_{12}$ — same as molecular because the ratio cannot be simplified.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The ratio $5:12$ has no common factor, so empirical = molecular.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Pentane has three structural isomers.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "The two simplest are pentane (straight chain) and 2-methylbutane.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $\\text{C}_5\\text{H}_{12}$ (b) pentane (c) empirical = molecular, ratio 5:12 (d) three isomers incl. pentane and 2-methylbutane.",
          "commonErrors": [
                    "Giving $\\text{C}_4\\text{H}_{10}$ for $M_r = 72$ — butane's $M_r$ is 58."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u9-alkane-combustion",
      title: "Combustion of alkanes and their uses as fuels",
      skill: "Write and balance equations for complete and incomplete combustion of alkanes and explain the products and their effects.",
      lesson: {
        sections: [
          {
            heading: "Complete combustion",
            body: "Alkanes are used as **fuels** because they release a lot of energy when burned. In a **plentiful supply of oxygen**, an alkane undergoes **complete combustion**:\n\n\n\n$$\\text{alkane} + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$$\n\n\n\nFor methane: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$. The products are carbon dioxide and water only. Balancing uses the general rule: balance C first, then H, then O.",
          },
          {
            heading: "Incomplete combustion",
            body: "When oxygen is **limited** (e.g. a poorly adjusted gas burner or a car engine in a traffic jam), incomplete combustion occurs. Possible products include **carbon monoxide (CO)** — a toxic gas — and **carbon (soot)**, as well as $\\text{CO}_2$ and $\\text{H}_2\\text{O}$.\n\n\n\n$$\\text{CH}_4 + \\text{O}_2 \\rightarrow \\text{CO} + \\text{H}_2\\text{O} \\quad \\text{or} \\quad \\text{C} + \\text{H}_2\\text{O}$$\n\n\n\nSulfur impurities in fuels also burn to form $\\text{SO}_2$, which causes acid rain.",
          },
        ],
        keyFormulas: [
          { name: "Complete combustion", statement: "$\\text{C}_n\\text{H}_{2n+2} + \\left(\\frac{3n+1}{2}\\right)\\text{O}_2 \\rightarrow n\\text{CO}_2 + (n+1)\\text{H}_2\\text{O}$" },
          { name: "Incomplete combustion", statement: "limited $\\text{O}_2$ → CO and/or C as well as $\\text{CO}_2$ and $\\text{H}_2\\text{O}$" },
          { name: "CO hazard", statement: "carbon monoxide is toxic and odourless" },
        ],
        workedExample: {
          problem: "Balance the equation for the complete combustion of propane, $\\text{C}_3\\text{H}_8$.",
          solution: "$\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$. Oxygen atoms needed on the right: $6 + 4 = 10$, so $5\\text{O}_2$ on the left: $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$.",
        },
      },
      questions: [
        {
          id: "ech10-u9-alkane-combustion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of the complete combustion of an alkane in a plentiful supply of oxygen?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carbon monoxide and water"
                    },
                    {
                              "id": "b",
                              "text": "Carbon dioxide and water"
                    },
                    {
                              "id": "c",
                              "text": "Carbon and hydrogen"
                    },
                    {
                              "id": "d",
                              "text": "Carbon dioxide and hydrogen"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Complete combustion",
                              "statement": "Alkane + O2 → CO2 + H2O only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complete combustion in excess oxygen produces carbon dioxide and water only.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Carbon dioxide and water",
          "commonErrors": [
                    "Including carbon monoxide, which forms only in incomplete combustion."
          ]
},
        },
        {
          id: "ech10-u9-alkane-combustion-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the balanced equation for the complete combustion of methane.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Balancing equations",
                              "statement": "Same number of each atom on both sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unbalanced: $\\text{CH}_4 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balance: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$",
          "commonErrors": [
                    "Writing $\\text{CH}_4 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$ unbalanced."
          ]
},
        },
        {
          id: "ech10-u9-alkane-combustion-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ethane undergoes complete combustion. (a) Write the balanced equation. (b) Explain why this reaction is exothermic.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Balancing equations",
                              "statement": "Balance C, then H, then O."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\text{C}_2\\text{H}_6 + \\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Oxygen atoms needed: $4 + 3 = 7$, so $3.5\\text{O}_2$; doubling gives $2\\text{C}_2\\text{H}_6 + 7\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 6\\text{H}_2\\text{O}$, or accept $\\text{C}_2\\text{H}_6 + 3.5\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "More energy is released forming the bonds in $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ than is needed to break the bonds in ethane and oxygen.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "$\\text{C}_2\\text{H}_6 + 3.5\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$; exothermic because bond making releases more energy than bond breaking needs.",
          "commonErrors": [
                    "Leaving fractional $\\text{O}_2$ without doubling all coefficients."
          ]
},
        },
        {
          id: "ech10-u9-alkane-combustion-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A gas cooker is not receiving enough oxygen. Black soot forms on the pan and a carbon monoxide alarm sounds.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what has happened chemically.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name two harmful products formed and state why each is dangerous.",
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
                              "name": "Incomplete combustion",
                              "statement": "Limited oxygen produces CO and/or carbon as well as CO2 and H2O."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Oxygen supply is limited, so the fuel undergoes incomplete combustion.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Instead of only $\\text{CO}_2$ and $\\text{H}_2\\text{O}$, carbon monoxide and soot (carbon) are produced.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Carbon monoxide is toxic — it binds to haemoglobin and reduces oxygen transport; it is odourless so hard to detect.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Soot (carbon particles) can cause breathing problems; also less energy is released so the flame is yellow and sooty.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) incomplete combustion due to limited O2 → CO and soot (b) CO toxic, soot harmful to lungs.",
          "commonErrors": [
                    "Saying the fuel 'burned too well'."
          ]
},
        },
        {
          id: "ech10-u9-alkane-combustion-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Butane, $\\text{C}_4\\text{H}_{10}$, is used as bottled gas.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the balanced equation for complete combustion of butane.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write a possible equation for incomplete combustion producing carbon monoxide.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why butane is a convenient fuel for camping despite being a gas at room temperature.",
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
                              "name": "Combustion equations",
                              "statement": "Complete: alkane + O2 → CO2 + H2O; incomplete: → CO/C + H2O."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\text{C}_4\\text{H}_{10} + \\text{O}_2 \\rightarrow 4\\text{CO}_2 + 5\\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "O needed: $8 + 5 = 13$, so $6.5\\text{O}_2$: $\\text{C}_4\\text{H}_{10} + 6.5\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 5\\text{H}_2\\text{O}$ (or doubled version).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\text{C}_4\\text{H}_{10} + \\text{O}_2 \\rightarrow 4\\text{CO} + 5\\text{H}_2\\text{O}$ unbalanced; balanced: $2\\text{C}_4\\text{H}_{10} + 9\\text{O}_2 \\rightarrow 8\\text{CO} + 10\\text{H}_2\\text{O}$ or accept $\\text{C}_4\\text{H}_{10} + 4.5\\text{O}_2 \\rightarrow 4\\text{CO} + 5\\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "CO balanced correctly (accept fractional O2).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Butane is easily liquefied under pressure into a small, portable canister.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "It releases a lot of energy per gram and burns with a clean blue flame when oxygen is sufficient.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $\\text{C}_4\\text{H}_{10} + 6.5\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 5\\text{H}_2\\text{O}$ (b) $\\text{C}_4\\text{H}_{10} + 4.5\\text{O}_2 \\rightarrow 4\\text{CO} + 5\\text{H}_2\\text{O}$ (c) portable, high energy density, clean burn.",
          "commonErrors": [
                    "Using odd numbers of O atoms incorrectly when balancing."
          ]
},
        },
        {
          id: "ech10-u9-alkane-combustion-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Propane, $\\text{C}_3\\text{H}_8$, is burned in a camping stove.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the balanced equation for complete combustion.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "A faulty stove produces carbon monoxide. Write a balanced equation for incomplete combustion producing CO.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why carbon monoxide is dangerous and how the risk can be reduced.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Combustion equations",
                              "statement": "Balance C, then H, then O."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Balanced: $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow 3\\text{CO} + 4\\text{H}_2\\text{O}$ unbalanced; O needed: $3 + 4 = 7$, so $3.5\\text{O}_2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Balanced: $\\text{C}_3\\text{H}_8 + 3.5\\text{O}_2 \\rightarrow 3\\text{CO} + 4\\text{H}_2\\text{O}$ (or doubled).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Oxygen coefficient correct.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "CO is toxic and odourless — it binds to haemoglobin, reducing oxygen carriage; victims may not notice.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use the stove in a well-ventilated area.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Ensure enough air supply / service the appliance so combustion is complete.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$ (b) $\\text{C}_3\\text{H}_8 + 3.5\\text{O}_2 \\rightarrow 3\\text{CO} + 4\\text{H}_2\\text{O}$ (c) CO toxic/odourless; ventilate and ensure complete combustion.",
          "commonErrors": [
                    "Producing CO without balancing the equation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u9-alkanes-notes",
      title: "Alkanes — revision notes",
      summary: "Alkanes are saturated hydrocarbons $\\text{C}_n\\text{H}_{2n+2}$. Complete combustion gives $\\text{CO}_2 + \\text{H}_2\\text{O}$; incomplete gives CO/C.",
      sections: [
        { heading: "Key idea", body: "General formula $\\text{C}_n\\text{H}_{2n+2}$; names use meth/eth/prop/but/pent/hex + -ane." },
        { heading: "Combustion", body: "Complete: $\\text{CO}_2 + \\text{H}_2\\text{O}$. Incomplete (limited O2): CO and/or soot." },
        { heading: "Balancing", body: "Balance C first, then H, then O. Fractional $\\text{O}_2$ is acceptable or double all coefficients." },
      ],
    },
  ],
};
