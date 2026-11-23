import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ech10-u6-lesson-6-2",
  code: "6-2",
  title: "Alkanes and Alkenes",
  goal: "I CAN describe the structure and properties of alkanes and alkenes, write their formulae, and distinguish them using the bromine water test.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Organic Chemistry", "4CH1 hydrocarbons"],
  
  vocabulary: [
    { term: "Alkane", definition: "Saturated hydrocarbon, C–C single bonds only, general formula CₙH₂ₙ₊₂." },
    { term: "Alkene", definition: "Unsaturated hydrocarbon containing a C=C double bond, general formula CₙH₂ₙ." },
    { term: "Saturated", definition: "Containing only single bonds — no double or triple bonds." },
    { term: "Unsaturated", definition: "Containing at least one double or triple bond." },
    { term: "Addition reaction", definition: "A reaction where one molecule adds across a double bond." },
    { term: "Substitution reaction", definition: "A reaction where one atom or group is replaced by another." },
    { term: "Bromine water test", definition: "Orange bromine water is decolourised by unsaturated hydrocarbons." },
  ],
  concepts: [
    {
      id: "ech10-u6-alkanes",
      title: "Alkanes",
      skill: "Write formulae and names of alkanes and describe their combustion and substitution reactions.",
      lesson: {
        sections: [
          {
            heading: "Structure of alkanes",
            body: "**Alkanes** are **saturated** hydrocarbons — every carbon atom is bonded to four other atoms by single bonds. General formula **CₙH₂ₙ₊₂**. The first members are methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀. Names end in **-ane**: pentane C₅H₁₂, hexane C₆H₁₄, heptane, octane, nonane, decane.",
          },
          {
            heading: "Reactions of alkanes",
            body: "Alkanes burn in oxygen. **Complete combustion** gives carbon dioxide and water: CH₄ + 2O₂ → CO₂ + 2H₂O. With limited oxygen, **incomplete combustion** produces carbon monoxide and/or soot. Alkanes also undergo **substitution** with halogens in UV light, e.g. CH₄ + Cl₂ → CH₃Cl + HCl — one H is replaced by Cl. Alkanes are relatively unreactive compared with alkenes.",
          },
        ],
        keyFormulas: [
          { name: "Alkane general formula", statement: "CₙH₂ₙ₊₂" },
          { name: "Complete combustion", statement: "hydrocarbon + O₂ → CO₂ + H₂O" },
          { name: "Substitution", statement: "CH₄ + Cl₂ → CH₃Cl + HCl (UV light)" },
        ],
        workedExample: {
          problem: "Write the balanced equation for complete combustion of propane, C₃H₈.",
          solution: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Check: 3 C and 8 H on each side; O: 10 left, 6+4=10 right.",
        },
      },
      questions: [
        {
          id: "ech10-u6-alkanes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The general formula of the alkanes is…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "CₙH₂ₙ"
                    },
                    {
                              "id": "b",
                              "text": "CₙH₂ₙ₊₂"
                    },
                    {
                              "id": "c",
                              "text": "CₙH₂ₙ₋₂"
                    },
                    {
                              "id": "d",
                              "text": "CₙHₙ"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alkane formula",
                              "statement": "CₙH₂ₙ₊₂."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alkanes are saturated: each extra C adds CH₂.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) CₙH₂ₙ₊₂",
          "commonErrors": [
                    "Confusing with alkenes CₙH₂ₙ."
          ]
},
        },
        {
          id: "ech10-u6-alkanes-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the molecular formula and name the alkane containing 6 carbon atoms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Alkane naming",
                              "statement": "CₙH₂ₙ₊₂; prefixes: meth-, eth-, prop-, but-, pent-, hex-."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "C₆ → hexane.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Formula C₆H₂₍₆₎₊₂ = C₆H₁₄.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Hexane, C₆H₁₄",
          "commonErrors": [
                    "Writing C₆H₁₂ — that is the alkene formula."
          ]
},
        },
        {
          id: "ech10-u6-alkanes-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why alkanes are described as saturated hydrocarbons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Saturated",
                              "statement": "Only single bonds — maximum hydrogen atoms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alkanes contain only single C–C bonds.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Each carbon is bonded to the maximum number of hydrogen atoms.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "No double or triple bonds are present, so they cannot add more hydrogen.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Only single bonds; maximum H per carbon; cannot add more H.",
          "commonErrors": [
                    "Saying saturated means 'no carbon' — it refers to bonding."
          ]
},
        },
        {
          id: "ech10-u6-alkanes-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Methane burns in a limited supply of oxygen in a faulty gas fire.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the balanced equation for complete combustion of methane.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the products of incomplete combustion and explain why they are dangerous.",
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
                              "name": "Combustion equations",
                              "statement": "Complete: CO₂ + H₂O; incomplete: CO and/or C."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "CH₄ + 2O₂ → CO₂ + 2H₂O.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Incomplete combustion produces carbon monoxide (and possibly soot/carbon).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Carbon monoxide is a toxic gas that binds to haemoglobin.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It reduces oxygen transport and can be fatal in enclosed spaces.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) CH₄ + 2O₂ → CO₂ + 2H₂O (b) CO/soot; CO is toxic.",
          "commonErrors": [
                    "Unbalanced equation — check C, H and O atoms."
          ]
},
        },
        {
          id: "ech10-u6-alkanes-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Methane reacts with chlorine in the presence of ultraviolet light.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the type of reaction and write the equation for the first substitution.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why ultraviolet light is needed.",
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
                              "name": "Free-radical substitution",
                              "statement": "UV provides energy to break the Cl–Cl bond."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It is a substitution (free-radical) reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "CH₄ + Cl₂ → CH₃Cl + HCl.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "The Cl–Cl bond is strong and needs energy to break homolytically.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "UV light supplies this energy, starting the radical chain reaction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Without UV the reaction does not proceed at an appreciable rate.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) substitution: CH₄ + Cl₂ → CH₃Cl + HCl (b) UV breaks Cl–Cl bond.",
          "commonErrors": [
                    "Calling it addition — one H is replaced, not added across a double bond."
          ]
},
        },
        {
          id: "ech10-u6-alkanes-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A mixture of methane and chlorine is exposed to UV light.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the difference between substitution and addition reactions, giving an example of each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Write the equations for the formation of chloromethane and then dichloromethane.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why the product is a mixture of chlorinated methanes rather than a single product.",
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
                              "name": "Substitution vs addition",
                              "statement": "Substitution replaces an atom; addition uses a double bond."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Substitution: one atom/group replaced, e.g. CH₄ + Cl₂ → CH₃Cl + HCl.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Addition: a molecule adds across a C=C bond, e.g. C₂H₄ + Br₂ → C₂H₄Br₂.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "CH₄ + Cl₂ → CH₃Cl + HCl.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "CH₃Cl + Cl₂ → CH₂Cl₂ + HCl.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "The product chloromethane still contains C–H bonds that can undergo further substitution.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Successive substitutions give dichloro-, trichloro- and tetrachloromethane.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Statistical mixtures are unavoidable, so several products form.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) substitution replaces H; addition uses C=C (b) CH₃Cl then CH₂Cl₂ equations (c) further substitution possible → mixture.",
          "commonErrors": [
                    "Stopping after one substitution — products can react again."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u6-alkenes",
      title: "Alkenes",
      skill: "Describe alkene structure and reactivity, write addition reactions and use the bromine water test to distinguish alkenes from alkanes.",
      lesson: {
        sections: [
          {
            heading: "Structure of alkenes",
            body: "**Alkenes** are **unsaturated** hydrocarbons containing at least one **C=C double bond**. General formula **CₙH₂ₙ**. The first members are ethene C₂H₄ and propene C₃H₆. Names end in **-ene**: butene C₄H₈, pentene, hexene.",
          },
          {
            heading: "Reactions of alkenes",
            body: "The C=C double bond makes alkenes **much more reactive** than alkanes. They undergo **addition reactions**: one molecule adds across the double bond. With bromine water, orange Br₂ adds across C=C and is used up, **decolourising** the solution — the standard test for unsaturation. Ethene + bromine → 1,2-dibromoethane: C₂H₄ + Br₂ → C₂H₄Br₂.",
          },
        ],
        keyFormulas: [
          { name: "Alkene general formula", statement: "CₙH₂ₙ; contains C=C" },
          { name: "Bromine water test", statement: "orange → colourless with alkenes; stays orange with alkanes" },
          { name: "Addition reaction", statement: "C₂H₄ + Br₂ → C₂H₄Br₂" },
        ],
        workedExample: {
          problem: "Explain how bromine water can distinguish ethene from ethane.",
          solution: "Ethene has a C=C double bond and undergoes addition with bromine, decolourising the orange bromine water. Ethane is saturated and does not react, so the orange colour remains.",
        },
      },
      questions: [
        {
          id: "ech10-u6-alkenes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The general formula of the alkenes is…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "CₙH₂ₙ₊₂"
                    },
                    {
                              "id": "b",
                              "text": "CₙH₂ₙ"
                    },
                    {
                              "id": "c",
                              "text": "CₙH₂ₙ₋₂"
                    },
                    {
                              "id": "d",
                              "text": "CₙHₙ₊₂"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alkene formula",
                              "statement": "CₙH₂ₙ with a C=C bond."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The double bond means two fewer H than the corresponding alkane.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) CₙH₂ₙ",
          "commonErrors": [
                    "Confusing with alkane CₙH₂ₙ₊₂."
          ]
},
        },
        {
          id: "ech10-u6-alkenes-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the functional group that makes alkenes unsaturated?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "C=C double bond",
                              "statement": "The unsaturation in alkenes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It is the carbon–carbon double bond (C=C).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It allows addition reactions that alkanes cannot undergo.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "The C=C double bond.",
          "commonErrors": [
                    "Answering 'double bond' without specifying C=C."
          ]
},
        },
        {
          id: "ech10-u6-alkenes-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the bromine water test for an unsaturated hydrocarbon, including the observation and explanation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Bromine water test",
                              "statement": "Orange Br₂ decolourised by C=C addition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add orange bromine water to the hydrocarbon.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "With an alkene the orange colour disappears as Br₂ adds across the double bond.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "With an alkane the solution stays orange because no addition occurs.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Orange → colourless for alkenes; stays orange for alkanes.",
          "commonErrors": [
                    "Saying 'bubbles appear' — the key observation is decolourisation."
          ]
},
        },
        {
          id: "ech10-u6-alkenes-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Ethene reacts with bromine water.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the balanced equation for the reaction.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the type of reaction and state the observation.",
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
                              "name": "Addition reaction",
                              "statement": "Br₂ adds across C=C."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "C₂H₄ + Br₂ → C₂H₄Br₂ (1,2-dibromoethane).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "It is an addition reaction — one molecule adds across the double bond.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The orange bromine water is decolourised.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bromine is consumed, proving the C=C bond reacted.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) C₂H₄ + Br₂ → C₂H₄Br₂ (b) addition; orange→colourless.",
          "commonErrors": [
                    "Writing a substitution product — alkenes add, they do not substitute here."
          ]
},
        },
        {
          id: "ech10-u6-alkenes-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare alkanes and alkenes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare their general formulae, bonding and saturation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Compare their reactivity and give a test to distinguish them.",
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
                              "name": "Alkane vs alkene",
                              "statement": "CnH2n+2 saturated vs CnH2n unsaturated."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Alkanes CₙH₂ₙ₊₂, single bonds only, saturated.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Alkenes CₙH₂ₙ, contain C=C, unsaturated.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Alkenes have two fewer H per molecule than the matching alkane.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Alkenes are more reactive due to the C=C bond undergoing addition.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bromine water test: alkenes decolourise it, alkanes do not.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Both burn, but only alkenes give a positive bromine water result.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) CnH2n+2 single bonds saturated vs CnH2n C=C unsaturated (b) alkenes more reactive; bromine water distinguishes.",
          "commonErrors": [
                    "Saying alkanes are unreactive — they react via combustion and substitution."
          ]
},
        },
        {
          id: "ech10-u6-alkenes-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student has two gas jars labelled only 'X' and 'Y'. One contains methane and the other contains ethene.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe a test to distinguish them using bromine water, including procedure and observations.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why ethene reacts with bromine water but methane does not.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write the balanced equation for the reaction of ethene with bromine.",
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
                              "name": "Distinguishing test",
                              "statement": "Bromine water decolourises only with unsaturation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Add bromine water to each gas (bubble gas through or shake with it).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ethene decolourises the orange bromine water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Methane leaves the bromine water orange.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The jar that decolourises is ethene.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ethene has a C=C double bond that undergoes addition with Br₂.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Methane is saturated with only single bonds, so no addition occurs.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bromine remains unreacted in the methane jar.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "C₂H₄ + Br₂ → C₂H₄Br₂.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Balanced: 2 C, 4 H, 2 Br on each side.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) bromine water: ethene decolourises, methane doesn't (b) C=C addition vs saturated (c) C₂H₄ + Br₂ → C₂H₄Br₂.",
          "commonErrors": [
                    "Forgetting that methane could react with chlorine but NOT bromine water under these conditions."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u6-hydrocarbons-notes",
      title: "Alkanes and alkenes — notes",
      summary: "Alkanes CnH2n+2 saturated (combustion + substitution); alkenes CnH2n with C=C (addition reactions, bromine water test).",
      sections: [
        { heading: "Alkanes", body: "CₙH₂ₙ₊₂, single bonds, saturated. Names: methane→decane. Burn completely to CO₂+H₂O; incomplete gives CO/soot. Substitute with halogens in UV light." },
        { heading: "Alkenes", body: "CₙH₂ₙ, C=C double bond, unsaturated. Undergo addition across the double bond. C₂H₄ + Br₂ → C₂H₄Br₂." },
        { heading: "Distinguishing test", body: "Bromine water (orange) is decolourised by alkenes via addition; stays orange with alkanes." },
      ],
    },
  ],
};
