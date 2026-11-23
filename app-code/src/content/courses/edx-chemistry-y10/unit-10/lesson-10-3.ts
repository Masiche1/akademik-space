import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ech10-u10-lesson-10-3",
  code: "10-3",
  title: "Synthetic Polymers",
  goal: "I CAN describe addition and condensation polymerisation, identify common polymers and discuss disposal and biodegradability.",
  standards: ["4CH1 4.44", "4CH1 4.45", "4CH1 4.46", "4CH1 4.47", "4CH1 4.48C", "4CH1 4.49C", "4CH1 4.50C"],
  
  vocabulary: [
    { term: "Polymer", definition: "A very large molecule made by joining many small monomer units together." },
    { term: "Monomer", definition: "The small molecule that joins repeatedly to form a polymer." },
    { term: "Repeat unit", definition: "The section of a polymer chain that repeats along the molecule." },
    { term: "Addition polymer", definition: "A polymer formed when alkene monomers join without losing any atoms." },
    { term: "Condensation polymer", definition: "A polymer formed when monomers join with loss of a small molecule such as water." },
    { term: "Biodegradable", definition: "Able to be broken down by microorganisms into simpler substances." },
  ],
  concepts: [
    {
      id: "ech10-u10-addition-polymers",
      title: "Addition polymers",
      skill: "Identify monomers and repeat units for common addition polymers and explain disposal problems.",
      lesson: {
        sections: [
          {
            heading: "Addition polymerisation",
            body: "An **addition polymer** forms when many **alkene** monomers join together. The C=C double bond opens and each monomer links to the next, with **no atoms lost**. For example, ethene CH2=CH2 forms poly(ethene), propene forms poly(propene), chloroethene forms poly(chloroethene) (PVC) and tetrafluoroethene forms PTFE.",
          },
          {
            heading: "Repeat units and disposal",
            body: "The **repeat unit** is the part that repeats in the chain. Poly(ethene) repeat unit is -CH2-CH2-, poly(propene) is -CH2-CH(CH3)-, PVC is -CH2-CHCl- and PTFE is -CF2-CF2-. Addition polymers are often strong, waterproof and unreactive, which makes them useful but also slow to degrade and hard to dispose of. Recycling or using biodegradable alternatives can reduce environmental impact.",
          },
        ],
        keyFormulas: [
          { name: "Addition polymer", statement: "alkene monomers join; no atoms lost" },
          { name: "Repeat unit", statement: "section repeated along the chain" },
          { name: "Poly(ethene)", statement: "from ethene CH2=CH2" },
          { name: "PVC", statement: "from chloroethene CH2=CHCl" },
        ],
        workedExample: {
          problem: "Identify the monomer of poly(chloroethene) and write its repeat unit.",
          solution: "The monomer is chloroethene CH2=CHCl. The repeat unit is -CH2-CHCl-.",
        },
      },
      questions: [
        {
          id: "ech10-u10-addition-polymers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is lost when addition polymers form from alkene monomers?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water"
                    },
                    {
                              "id": "b",
                              "text": "Carbon dioxide"
                    },
                    {
                              "id": "c",
                              "text": "Nothing"
                    },
                    {
                              "id": "d",
                              "text": "Hydrogen"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Addition polymer",
                              "statement": "Monomers join without losing atoms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Addition polymerisation loses no atoms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Nothing",
          "commonErrors": [
                    "Confusing addition with condensation polymerisation, which loses water."
          ]
},
        },
        {
          id: "ech10-u10-addition-polymers-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define polymer, monomer and repeat unit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Polymer terms",
                              "statement": "Polymer=large molecule; monomer=small unit; repeat unit=repeated section."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A polymer is a very large molecule made from monomers.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The repeat unit is the section that repeats along the chain.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Polymer=large molecule; monomer=building block; repeat unit=repeated section."
},
        },
        {
          id: "ech10-u10-addition-polymers-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name the monomer and repeat unit for poly(ethene), poly(propene), poly(chloroethene) and PTFE.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Addition polymers",
                              "statement": "Alkene monomers form the named polymers."
                    },
                    {
                              "kind": "property",
                              "name": "Repeat unit",
                              "statement": "Derived from the monomer's C=C."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poly(ethene) from ethene CH2=CH2; repeat -CH2-CH2-.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Poly(propene) from propene CH3CH=CH2; repeat -CH2-CH(CH3)-.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "PVC from chloroethene CH2=CHCl; PTFE from tetrafluoroethene CF2=CF2.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Ethene→PE; propene→PP; chloroethene→PVC; tetrafluoroethene→PTFE."
},
        },
        {
          id: "ech10-u10-addition-polymers-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The repeat unit of a polymer is -CH2-CHCl-.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Deduce the monomer.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the polymer.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain why the repeat unit has single bonds.",
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
                              "name": "Repeat unit",
                              "statement": "Two-carbon unit with Cl substituent."
                    },
                    {
                              "kind": "principle",
                              "name": "Addition polymerisation",
                              "statement": "C=C opens to form single bonds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Monomer is chloroethene CH2=CHCl.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The repeat unit shows two carbons joined by single bonds after polymerisation.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The polymer is poly(chloroethene), also called PVC.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Addition polymerisation opens the C=C double bond.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) The spare bonds form new C-C single bonds between monomers.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Monomer CH2=CHCl; PVC; repeat unit has single bonds because C=C opened."
},
        },
        {
          id: "ech10-u10-addition-polymers-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Compare the formation of poly(ethene) from ethene with condensation polymerisation of a dicarboxylic acid and a diol.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what is lost in each process.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why addition polymers contain only C and H/halogen atoms while polyesters also contain O.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Give one use for each type of polymer.",
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
                              "name": "Addition vs condensation",
                              "statement": "Addition loses nothing; condensation loses water."
                    },
                    {
                              "kind": "property",
                              "name": "Polymer composition",
                              "statement": "Monomers determine atoms in polymer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Addition loses nothing; condensation loses water.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Ethene is C2H4; the polyester monomers contain O atoms.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Addition polymer atoms all come from alkene monomers (C/H/halogen).",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Condensation monomers contain O in -COOH/-OH groups, so polyester contains O.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Water is lost when -COOH and -OH join.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Poly(ethene) used for bags/packaging; polyester used for fibres/fabrics.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Uses depend on strength, flexibility and barrier properties.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Addition no loss; condensation loses water; composition/use differ."
},
        },
        {
          id: "ech10-u10-addition-polymers-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Plastic waste is a major environmental problem.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two properties of addition polymers that make them useful but hard to dispose of.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe two methods of reducing plastic waste.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Discuss whether biodegradable plastics are a complete solution.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Polymer properties",
                              "statement": "Strong, waterproof, unreactive."
                    },
                    {
                              "kind": "principle",
                              "name": "Disposal",
                              "statement": "Slow degradation increases persistence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) They are strong and flexible, useful for packaging.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) They are waterproof and chemically unreactive.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) These same properties make them resistant to biodegradation.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) They can persist in landfills and oceans for many years.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Recycling reprocesses polymers into new products.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Reducing single-use plastics and reusing items lowers waste.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Biodegradable polymers can be broken down by microbes.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Biodegradable plastics help only if disposed of correctly.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) They may still need industrial composting conditions.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Prevention and recycling remain important alongside biodegradability.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Useful properties cause persistence; recycling/reuse/biodegradable help but not complete."
},
        },
      ],
    },
    {
      id: "ech10-u10-condensation-polymers",
      title: "Condensation polymers and polymer properties",
      skill: "Describe condensation polymerisation, identify polyesters and compare polymer disposal options.",
      lesson: {
        sections: [
          {
            heading: "Condensation polymerisation",
            body: "A **condensation polymer** forms when monomers join with loss of a small molecule, usually **water**. A **dicarboxylic acid** reacts with a **diol** to form a **polyester**. For example, ethanedioic acid (or similar dicarboxylic acid) plus ethane-1,2-diol gives a polyester and water. The polymer contains ester linkages -COO- and often oxygen atoms.",
          },
          {
            heading: "Polyesters and biodegradability",
            body: "Polyesters can be used for fibres, fabrics and bottles. **Biopolyesters** are polyesters designed to be **biodegradable**, meaning microorganisms can break them down. This can reduce long-term pollution, but they still need appropriate disposal conditions such as industrial composting. Comparing addition and condensation polymers helps explain why some plastics degrade easily and others do not.",
          },
        ],
        keyFormulas: [
          { name: "Condensation polymer", statement: "monomers join with loss of water" },
          { name: "Polyester", statement: "dicarboxylic acid + diol polymer" },
          { name: "Biodegradable", statement: "broken down by microorganisms" },
        ],
        workedExample: {
          problem: "Explain how a polyester forms from a dicarboxylic acid and a diol.",
          solution: "Each -COOH group reacts with an -OH group to form an ester linkage -COO- and water. Repeating this joins many monomers into a polyester chain.",
        },
      },
      questions: [
        {
          id: "ech10-u10-condensation-polymers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What small molecule is usually lost in condensation polymerisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carbon dioxide"
                    },
                    {
                              "id": "b",
                              "text": "Hydrogen"
                    },
                    {
                              "id": "c",
                              "text": "Water"
                    },
                    {
                              "id": "d",
                              "text": "Methane"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Condensation polymer",
                              "statement": "Monomers join with loss of a small molecule, often water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water is lost when -COOH and -OH groups react.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Water",
          "commonErrors": [
                    "Confusing condensation with addition polymerisation, which loses nothing."
          ]
},
        },
        {
          id: "ech10-u10-condensation-polymers-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define condensation polymerisation and biodegradable polymer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Condensation polymer",
                              "statement": "Monomers join with loss of water."
                    },
                    {
                              "kind": "definition",
                              "name": "Biodegradable",
                              "statement": "Broken down by microorganisms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Condensation polymerisation joins monomers while losing water.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A biodegradable polymer can be broken down by microorganisms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Condensation loses water; biodegradable means microbes can break it down."
},
        },
        {
          id: "ech10-u10-condensation-polymers-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how a dicarboxylic acid and a diol form a polyester.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Polyester",
                              "statement": "Dicarboxylic acid + diol -> polyester + water."
                    },
                    {
                              "kind": "property",
                              "name": "Ester linkages",
                              "statement": "-COO- groups join the monomers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each -COOH group reacts with an -OH group.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "An ester linkage -COO- forms and water is lost.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Repeating this joins many monomers into a polyester chain.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "-COOH + -OH -> -COO- + H2O; repeated to form polyester."
},
        },
        {
          id: "ech10-u10-condensation-polymers-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A polyester is made from ethanedioic acid (HOOC-COOH) and ethane-1,2-diol (HO-CH2-CH2-OH).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the type of bond/linkage formed between monomers.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the small molecule released.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain why the polymer is called a polyester.",
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
                              "name": "Ester linkage",
                              "statement": "-COO- formed from acid + alcohol groups."
                    },
                    {
                              "kind": "property",
                              "name": "Polyester",
                              "statement": "Contains many ester linkages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Ester linkages -COO- form between the monomers.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Each link is formed by condensation.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Water is released.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) It is called polyester because it contains many ester groups.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) The monomers are a dicarboxylic acid and a diol.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Ester linkages; water released; many esters = polyester."
},
        },
        {
          id: "ech10-u10-condensation-polymers-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A company develops a biodegradable polyester for food packaging.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how a biodegradable polyester differs from a conventional addition polymer.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two conditions needed for effective biodegradation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Discuss one advantage and one limitation of biodegradable packaging.",
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
                              "name": "Biodegradable",
                              "statement": "Microorganisms can break down the polymer."
                    },
                    {
                              "kind": "property",
                              "name": "Disposal",
                              "statement": "Conditions determine whether degradation occurs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) It is designed to be broken down by microbes; addition polymers are usually unreactive.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Condensation polymers contain ester linkages that can be hydrolysed.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Biodegradation produces simpler substances rather than persistent fragments.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Microorganisms must be present.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Suitable moisture, oxygen and temperature conditions are needed.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Advantage: reduces long-term litter if disposed correctly.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Limitation: may still need industrial composting and can contaminate recycling.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Biodegradable polyester can be broken down; needs microbes/conditions; useful but disposal-dependent."
},
        },
        {
          id: "ech10-u10-condensation-polymers-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare addition polymers such as poly(ethene) with condensation polymers such as polyester for use in bottles and fibres.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare how each polymer is formed.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Compare their typical properties and uses.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate which type is more environmentally friendly and why.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Addition vs condensation",
                              "statement": "No loss vs loss of water."
                    },
                    {
                              "kind": "property",
                              "name": "Uses",
                              "statement": "Packaging vs fibres; persistence vs biodegradability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Addition: alkene monomers join without losing atoms.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Condensation: monomers join with loss of water.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Addition often gives hydrocarbon/halogen polymers; condensation gives polyesters with O.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Poly(ethene) is cheap, strong and used for bags/bottles.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Polyester fibres are strong and used in clothing.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Polyesters can be biodegradable if designed for it.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Biodegradable polyesters can reduce persistence if composted.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Conventional poly(ethene) is highly persistent and hard to degrade.",
                              "marks": 1,
                              "markCode": "B",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Recycling can make either more sustainable.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) The best choice depends on use, disposal route and lifecycle impact.",
                              "marks": 1,
                              "markCode": "R",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Addition vs condensation formation; properties/uses differ; biodegradability/recycling determine impact."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech10-u10-polymers-notes",
      title: "Synthetic polymers — notes",
      summary: "Addition polymers lose nothing; condensation polymers lose water. Polyesters contain ester linkages and may be biodegradable.",
      sections: [
        { heading: "Key idea", body: "Alkene monomers → addition polymers; acid+diol → polyester + water." },
        { heading: "Environment", body: "Persistent plastics need recycling; biodegradable polymers need correct disposal." },
      ],
    },
  ],
};
