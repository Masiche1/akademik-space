import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ech10-u7-lesson-7-3",
  code: "7-3",
  title: "Polymers",
  goal: "I CAN describe addition polymerisation, identify common polymers and their uses, and discuss the problems of polymer disposal.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Organic Chemistry", "4CH1 polymers"],
  
  vocabulary: [
    { term: "Polymer", definition: "A large molecule made by joining many small monomer units." },
    { term: "Monomer", definition: "The small molecule that joins to form a polymer." },
    { term: "Addition polymerisation", definition: "Polymerisation where monomers add across C=C double bonds without losing atoms." },
    { term: "Repeating unit", definition: "The structural unit that repeats along the polymer chain." },
    { term: "Biodegradable", definition: "Able to be broken down by microorganisms." },
    { term: "Plasticiser", definition: "Additive that makes a polymer more flexible." },
  ],
  concepts: [
    {
      id: "ech10-u7-addition-polymers",
      title: "Addition polymerisation",
      skill: "Explain how alkenes polymerise, write the formation of common polymers and identify their uses.",
      lesson: {
        sections: [
          {
            heading: "How polymers form",
            body: "**Addition polymerisation** joins many **alkene monomers** together. The C=C double bonds open and each monomer links to the next, forming a long chain. No atoms are lost — the polymer has the same overall formula as the monomers combined. The **repeating unit** is the structural pattern that repeats along the chain.",
          },
          {
            heading: "Common polymers",
            body: "**Polyethene (polythene)** from ethene — bags, bottles, packaging. **Polypropene** from propene — ropes, crates, furniture. **PVC** (polyvinyl chloride) from chloroethene — pipes, window frames; made flexible with **plasticisers**. **PTFE (Teflon)** from tetrafluoroethene — non-stick coatings. Polymers are strong, light, inert and cheap — which is why they are everywhere, but also why disposal is a problem.",
          },
        ],
        keyFormulas: [
          { name: "Addition polymerisation", statement: "n(alkene monomer) → polymer; C=C bonds open and link" },
          { name: "Polyethene", statement: "n C₂H₄ → (–CH₂–CH₂–)ₙ" },
          { name: "Atom conservation", statement: "polymer formula = sum of monomer formulae" },
        ],
        workedExample: {
          problem: "Write the equation for the formation of polyethene from ethene and identify the repeating unit.",
          solution: "nC₂H₄ → (–CH₂–CH₂–)ₙ. The repeating unit is –CH₂–CH₂–; each ethene molecule contributes one unit and no atoms are lost.",
        },
      },
      questions: [
        {
          id: "ech10-u7-addition-polymers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Polymers are formed by joining many small molecules called…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "polymers"
                    },
                    {
                              "id": "b",
                              "text": "monomers"
                    },
                    {
                              "id": "c",
                              "text": "isomers"
                    },
                    {
                              "id": "d",
                              "text": "electrolytes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monomer",
                              "statement": "Small unit that polymerises."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Monomers join to form polymers.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) monomers",
          "commonErrors": [
                    "Reversing the terms — monomers are small, polymers are large."
          ]
},
        },
        {
          id: "ech10-u7-addition-polymers-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the repeating unit of polyethene?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Repeating unit",
                              "statement": "Structural unit repeated along the chain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It is –CH₂–CH₂– (two CH₂ groups joined).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It comes from one ethene molecule C₂H₄ opening its double bond.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "–CH₂–CH₂–",
          "commonErrors": [
                    "Writing –CH₂– only — the repeating unit needs two carbons."
          ]
},
        },
        {
          id: "ech10-u7-addition-polymers-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how polyethene forms from ethene molecules.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Addition polymerisation",
                              "statement": "C=C bonds open; monomers link without losing atoms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethene molecules have C=C double bonds.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The double bonds open and each monomer bonds to neighbouring monomers.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A long chain of –CH₂–CH₂– units forms; no atoms are lost or added.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "C=C opens; monomers link → long –CH₂CH₂– chain.",
          "commonErrors": [
                    "Saying atoms are 'lost' — addition polymerisation conserves all atoms."
          ]
},
        },
        {
          id: "ech10-u7-addition-polymers-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Poly(propene) is made from propene, CH₂=CHCH₃.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the monomer and its functional group.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write the repeating unit of poly(propene).",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the conditions needed for polymerisation.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Polymer repeating unit",
                              "statement": "Monomer's C=C opens; side groups remain."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Monomer: propene; functional group C=C double bond.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Repeating unit: –CH₂–CH(CH₃)–.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Heat and/or a catalyst initiates addition polymerisation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) propene, C=C (b) –CH₂–CH(CH₃)– (c) heat/catalyst.",
          "commonErrors": [
                    "Forgetting the CH₃ side group in the repeating unit."
          ]
},
        },
        {
          id: "ech10-u7-addition-polymers-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare a monomer and the polymer made from it.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare their molecular sizes and structures.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Compare their physical properties using polyethene as an example.",
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
                              "name": "Monomer vs polymer",
                              "statement": "Small molecule vs long chain; properties change."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Monomer is a small molecule; polymer is a very long chain of repeated units.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Monomer has C=C bonds; polymer has only single bonds in the backbone.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Polymer formula = many times the monomer formula.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Polyethene is solid, strong and flexible at room temperature.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Ethene is a gas — totally different physical state.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Long chains give polymers their strength and flexibility.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) small C=C molecule vs long single-bonded chain (b) gas vs solid; strength from chain length.",
          "commonErrors": [
                    "Saying polymer still has C=C bonds — they opened during polymerisation."
          ]
},
        },
        {
          id: "ech10-u7-addition-polymers-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "PVC (polyvinyl chloride) is made by polymerising chloroethene.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the monomer and write its formula.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two uses of PVC and explain why it is useful for them.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how plasticisers change the properties of PVC.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "State one problem with disposing of PVC waste.",
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
                              "name": "PVC",
                              "statement": "Chloroethene polymer; rigid or flexible with plasticisers."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Monomer: chloroethene (vinyl chloride), C₂H₃Cl.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Uses: pipes, window frames, cables, flooring.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It is strong, durable and resistant to water/corrosion.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "With plasticisers it becomes flexible for cables/flooring.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Plasticisers are small molecules that slip between polymer chains.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "They reduce the forces between chains, making the polymer flexible.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Without plasticiser PVC is rigid; with it, it bends.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "PVC is non-biodegradable and can release harmful chlorine compounds when burned.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) chloroethene C₂H₃Cl (b) pipes/frames/cables — strong, water-resistant (c) plasticisers lubricate chains → flexible (d) non-biodegradable, toxic fumes when burned.",
          "commonErrors": [
                    "Saying PVC is 'always flexible' — rigid PVC exists; plasticisers make it flexible."
          ]
},
        },
      ],
    },
    {
      id: "ech10-u7-polymer-uses",
      title: "Uses and disposal of polymers",
      skill: "Evaluate the uses of polymers and explain the environmental problems of non-biodegradable plastics and possible solutions.",
      lesson: {
        sections: [
          {
            heading: "Why polymers are useful",
            body: "Polymers are **strong, light, chemically inert, cheap and easily moulded** into any shape. They are used for packaging, bottles, fibres (clothing), medical devices, building materials and electronics. Their very usefulness — durability — means they persist in the environment for hundreds of years.",
          },
          {
            heading: "Disposal problems and solutions",
            body: "Most polymers are **non-biodegradable** — microbes cannot digest the strong C–C and C–H bonds — so waste accumulates in landfills and oceans. Options: **recycling** (reprocessing into new products — saves raw materials and energy), **incineration** (burning for energy — but may release toxic gases), **biodegradable polymers** (designed to be broken down by microbes — slower decomposition, higher cost), and **reduction/reuse** (using less plastic).",
          },
        ],
        keyFormulas: [
          { name: "Non-biodegradable", statement: "strong C–C/C–H bonds resist microbial breakdown" },
          { name: "Disposal options", statement: "recycle / incinerate / biodegradable / reduce-use" },
        ],
        workedExample: {
          problem: "Explain why a plastic bottle persists in the environment for centuries.",
          solution: "The polymer has strong C–C and C–H bonds that microorganisms cannot break down, so it is non-biodegradable and remains intact for a very long time.",
        },
      },
      questions: [
        {
          id: "ech10-u7-polymer-uses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Most synthetic polymers are…",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "biodegradable"
                    },
                    {
                              "id": "b",
                              "text": "non-biodegradable"
                    },
                    {
                              "id": "c",
                              "text": "water-soluble"
                    },
                    {
                              "id": "d",
                              "text": "easily digested by microbes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Polymer disposal",
                              "statement": "Strong bonds → non-biodegradable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Most plastics resist microbial breakdown.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) non-biodegradable",
          "commonErrors": [
                    "Assuming all plastics biodegrade — most do not."
          ]
},
        },
        {
          id: "ech10-u7-polymer-uses-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain why plastic waste persists in the environment for such a long time.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Polymer stability",
                              "statement": "Strong C–C/C–H bonds resist breakdown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Polymers have very strong carbon–carbon and carbon–hydrogen bonds.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Microorganisms cannot produce enzymes to break these bonds, so decomposition is extremely slow.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Strong C–C/C–H bonds → microbes cannot digest → persists for centuries.",
          "commonErrors": [
                    "Saying plastic 'dissolves' in water — it is insoluble and inert."
          ]
},
        },
        {
          id: "ech10-u7-polymer-uses-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three uses of polymers and link each use to a property.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Polymer properties",
                              "statement": "Strong, light, inert, mouldable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Packaging/bottles — light, strong, inert (does not react with contents).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Clothing fibres — flexible, cheap, washable.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Medical devices/pipework — inert, water-resistant, can be sterilised.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Packaging (light/inert), fibres (flexible/cheap), medical (inert/sterilisable).",
          "commonErrors": [
                    "Listing uses without linking to properties."
          ]
},
        },
        {
          id: "ech10-u7-polymer-uses-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A town wants to reduce the environmental impact of plastic waste.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe two methods of disposing of plastic waste.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State one problem with each method.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest one alternative to disposal that reduces plastic use.",
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
                              "name": "Waste management",
                              "statement": "Landfill/incineration/recycling have trade-offs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Landfill burial or incineration (burning) — or recycling.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Landfill: takes space, leaks pollutants; incineration: may release toxic gases.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use biodegradable plastics or reduce/reuse plastic (e.g. bags for life).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) landfill/incineration/recycling (b) space+leachate / toxic fumes (c) biodegradable or reduce use.",
          "commonErrors": [
                    "Saying incineration is 'clean' — it can release dioxins/toxic gases."
          ]
},
        },
        {
          id: "ech10-u7-polymer-uses-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare recycling and incineration as methods of dealing with polymer waste.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State one advantage of each method.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State one disadvantage of each method.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why recycling is generally preferred environmentally.",
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
                              "name": "Recycling vs incineration",
                              "statement": "Recycling saves resources; incineration recovers energy but pollutes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Recycling saves raw materials/energy; incineration recovers heat energy.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Recycling needs sorting/cleaning; incineration may emit toxic gases.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Recycling reduces demand for new plastic production and landfill use.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "It avoids the pollution associated with burning polymers.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) recycle saves resources; incinerate recovers energy (b) sorting cost vs toxic emissions (c) less pollution + resource saving.",
          "commonErrors": [
                    "Claiming recycling is always better — contaminated/mixed plastics are hard to recycle."
          ]
},
        },
        {
          id: "ech10-u7-polymer-uses-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Scientists are developing biodegradable plastics made from plant starch.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how a biodegradable polymer differs from a conventional polymer.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two advantages of biodegradable plastics.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two limitations of biodegradable plastics.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Suggest why biodegradable plastics have not completely replaced conventional plastics.",
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
                              "name": "Biodegradable polymers",
                              "statement": "Designed to be broken down by microbes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Conventional polymers have strong C–C/C–H bonds microbes cannot digest.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Biodegradable polymers contain bonds/structures microbes can break down.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "They decompose to harmless products within a reasonable time.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reduce landfill/ocean pollution.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Made from renewable plant sources (e.g. starch).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "More expensive to produce than conventional plastics.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Decompose only under specific conditions (e.g. industrial composting).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Cost is higher than conventional plastics.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Performance (strength, shelf-life) may be inferior for some uses.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Requires special disposal infrastructure (composting facilities).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) microbe-digestible bonds vs strong C–C (b) less pollution, renewable (c) cost, needs composting (d) cost+performance+infrastructure.",
          "commonErrors": [
                    "Claiming biodegradable means 'disappears instantly' — it still needs the right conditions."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u7-polymers-notes",
      title: "Polymers — notes",
      summary: "Addition polymerisation joins alkene monomers via opened C=C bonds — no atoms lost. Common polymers: polyethene, polypropene, PVC, PTFE. Non-biodegradable → disposal problems; solutions: recycle, incinerate, biodegradable plastics.",
      sections: [
        { heading: "Polymerisation", body: "n(alkene) → polymer. C=C opens, monomers link. Repeating unit = the monomer's skeleton (e.g. –CH₂–CH₂– for polyethene)." },
        { heading: "Common polymers", body: "Polyethene (packaging), polypropene (ropes/furniture), PVC (pipes — flexible with plasticisers), PTFE (non-stick). Properties: strong, light, inert, mouldable." },
        { heading: "Disposal", body: "Non-biodegradable (strong C–C/C–H bonds). Options: recycling, incineration (toxic gas risk), biodegradable plastics (cost/conditions), reduction/reuse." },
      ],
    },
  ],
};
