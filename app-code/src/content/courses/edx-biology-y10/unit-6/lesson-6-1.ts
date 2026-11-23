import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ebi10-u6-lesson-6-1",
  code: "6-1",
  title: "Sexual and Asexual Reproduction in Plants",
  goal: "I CAN distinguish sexual and asexual reproduction, describe pollination and fertilisation in flowering plants and explain seed germination.",
  standards: ["4BI1 3.1", "4BI1 3.2", "4BI1 3.3", "4BI1 3.4", "4BI1 3.5", "4BI1 3.6", "4BI1 3.7"],
  
  vocabulary: [
    { term: "Asexual reproduction", definition: "Production of offspring from one parent without gamete fusion, producing genetically identical offspring." },
    { term: "Sexual reproduction", definition: "Production of offspring by fusion of male and female gametes, producing genetic variation." },
    { term: "Gamete", definition: "A sex cell such as a sperm, egg or pollen grain that fuses during fertilisation." },
    { term: "Pollination", definition: "Transfer of pollen from an anther to a stigma." },
    { term: "Fertilisation", definition: "Fusion of a male and female gamete nucleus to form a zygote." },
    { term: "Germination", definition: "The growth of a seed into a seedling when conditions are suitable." },
    { term: "Runner", definition: "A horizontal stem that produces new plantlets, an example of natural asexual reproduction." },
  ],
  concepts: [
    {
      id: "ebi10-u6-sexual-asexual",
      title: "Sexual and asexual reproduction",
      skill: "Compare sexual and asexual reproduction and identify natural and artificial plant cloning methods.",
      lesson: {
        sections: [
          {
            heading: "Sexual and asexual reproduction",
            body: "**Sexual reproduction** involves the fusion of male and female **gametes** during fertilisation to form a **zygote**, which develops into an embryo. Because genetic material is mixed, offspring usually show variation. **Asexual reproduction** involves only one parent and no gamete fusion; offspring are genetically identical clones.\n\nAsexual reproduction is fast and needs only one parent, but all offspring share the same weaknesses. Sexual reproduction is slower but produces variation, which may help survival if conditions change.",
          },
          {
            heading: "Plant asexual reproduction",
            body: "Plants can reproduce asexually **naturally** by methods such as **runners**: horizontal stems grow away from the parent and develop new roots and shoots. Strawberries use runners. Plants can also reproduce asexually **artificially** by taking **cuttings**: a piece of stem is placed in suitable conditions and grows roots. Both methods produce genetically identical offspring.",
          },
        ],
        keyFormulas: [
          { name: "Sexual reproduction", statement: "male gamete + female gamete → zygote → embryo" },
          { name: "Asexual reproduction", statement: "one parent → genetically identical offspring" },
          { name: "Runner", statement: "horizontal stem → new roots and shoots" },
          { name: "Cutting", statement: "stem piece → roots → new plant" },
        ],
        workedExample: {
          problem: "A gardener takes cuttings from a rose plant. Explain whether the new roses are genetically identical to the parent and why.",
          solution: "Yes. A cutting grows from part of one parent without gamete fusion, so it is a clone. The new plants have the same genetic material as the parent.",
        },
      },
      questions: [
        {
          id: "ebi10-u6-sexual-asexual-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of reproduction produces genetically identical offspring from one parent?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sexual reproduction"
                    },
                    {
                              "id": "b",
                              "text": "Asexual reproduction"
                    },
                    {
                              "id": "c",
                              "text": "Fertilisation"
                    },
                    {
                              "id": "d",
                              "text": "Pollination"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Asexual reproduction",
                              "statement": "One parent produces identical clones without gamete fusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Asexual reproduction uses one parent and no fertilisation, so offspring are clones.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Asexual reproduction",
          "commonErrors": [
                    "Choosing sexual reproduction, which involves two gametes and variation."
          ]
},
        },
        {
          id: "ebi10-u6-sexual-asexual-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define zygote and embryo.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Zygote and embryo",
                              "statement": "Zygote is formed by fertilisation; embryo develops from it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A zygote is the cell formed when male and female gametes fuse.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "An embryo is the developing organism formed by division of the zygote.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Zygote = fertilised cell; embryo = developing stage.",
          "commonErrors": [
                    "Using embryo for the single fertilised cell before division."
          ]
},
        },
        {
          id: "ebi10-u6-sexual-asexual-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages and one disadvantage of asexual reproduction compared with sexual reproduction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Asexual vs sexual",
                              "statement": "Asexual is faster and needs one parent; sexual gives variation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Advantage: only one parent is needed and offspring are produced quickly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Advantage: if the parent is well adapted, offspring inherit the same successful characteristics.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Disadvantage: all offspring are genetically identical, so a disease or environmental change may affect them all.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Fast/one parent/same successful traits; disadvantage is no genetic variation.",
          "commonErrors": [
                    "Claiming asexual reproduction creates variation."
          ]
},
        },
        {
          id: "ebi10-u6-sexual-asexual-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A strawberry plant produces runners and new plants.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the type of reproduction and explain why.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two advantages of this method for the plant.",
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
                              "name": "Runner reproduction",
                              "statement": "Runners produce clones without gametes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It is asexual because new plants grow from the parent without fertilisation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The offspring are genetically identical to the parent.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "New plants can spread away from the parent and colonise nearby suitable ground.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It is fast and does not require pollinators or seed production.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Successful parental characteristics are passed on exactly.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Asexual, no gametes/identical offspring (b) fast spread, no pollination needed, preserves traits.",
          "commonErrors": [
                    "Describing runners as sexual because they are stems; reproduction is still asexual."
          ]
},
        },
        {
          id: "ebi10-u6-sexual-asexual-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A farmer wants to reproduce a rose plant with especially red flowers. The plant can be propagated by cuttings or by crossing it with another rose.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict whether cuttings will preserve the red flower trait and explain why.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Predict whether crossing may preserve the trait and explain the uncertainty.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Clone vs cross",
                              "statement": "Cuttings preserve genotype; crossing may reshuffle alleles."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Cuttings are asexual and genetically identical to the parent.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Therefore they should have the same red flower trait if it is genetically controlled.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "There is little uncertainty unless the trait depends on environment or mutation.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Crossing involves meiosis and fertilisation, which shuffle alleles.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Offspring may inherit the red allele but also alleles from the other parent.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Some offspring may show red, some pink or other colours depending on dominance.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Selective breeding would be needed to increase the chance of red offspring.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Cuttings preserve red trait because clones (b) crossing may or may not; alleles can be lost or combined.",
          "commonErrors": [
                    "Assuming crossing always produces offspring identical to one parent."
          ]
},
        },
        {
          id: "ebi10-u6-sexual-asexual-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A scientist compares three methods of producing plants: seeds from pollinated flowers, runners and stem cuttings.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Classify each method as sexual or asexual and justify your answer.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain which method produces the greatest genetic variation and why.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate which method a farmer might choose to reproduce a rare, disease-resistant plant quickly.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Plant propagation",
                              "statement": "Sexual gives variation; asexual gives speed and identical traits."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Seeds from pollinated flowers are sexual because gametes fuse.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Runners and cuttings are asexual because they grow from one parent without fertilisation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Asexual offspring are clones.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Seed production gives greatest variation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Meiosis and fertilisation combine alleles from two parents randomly.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Runners and cuttings produce identical copies with no new combinations.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cuttings or runners are fastest for reproducing a known disease-resistant plant.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "They preserve the exact resistant genotype.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Seeds may be slower and produce variable offspring, some less resistant.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Asexual methods are best when the parent trait is already ideal.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Seeds sexual; runners/cuttings asexual (b) seeds greatest variation (c) asexual for rapid identical resistant plants.",
          "commonErrors": [
                    "Choosing seeds if the goal is identical disease resistance rather than variation."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u6-flowering-plants",
      title: "Flowering plant reproduction",
      skill: "Describe flower structure, pollination, fertilisation, seed formation and germination.",
      lesson: {
        sections: [
          {
            heading: "Flowers, pollination and fertilisation",
            body: "A typical flower has **sepals** protecting the bud, **petals** attracting pollinators, **stamens** producing pollen and a **carpel** containing the ovary, ovules and stigma. **Insect-pollinated flowers** often have bright petals, scent and nectar; their pollen is sticky and stigma is feathery. **Wind-pollinated flowers** often have small petals, produce large amounts of light pollen and have exposed stigmas.\n\nAfter pollination, a **pollen tube** grows down the style to the ovule. The male nucleus fuses with the female nucleus in **fertilisation**, forming a zygote. The ovule becomes a seed and the ovary becomes a fruit.",
          },
          {
            heading: "Seed germination",
            body: "Seeds need **water**, **oxygen** and a suitable **temperature** to germinate. Water softens the seed coat and activates enzymes; oxygen is needed for respiration to release energy; temperature must be within the optimum range. Light may affect some species but is not always essential.\n\nDuring germination the stored food reserve is used until the seedling can photosynthesise. In dicots the food is often stored in cotyledons; in monocots such as maize it is stored in the endosperm.",
          },
        ],
        keyFormulas: [
          { name: "Pollination", statement: "pollen: anther → stigma" },
          { name: "Fertilisation", statement: "pollen nucleus + ovule nucleus → zygote" },
          { name: "Seed/fruit", statement: "ovule → seed; ovary → fruit" },
          { name: "Germination conditions", statement: "water + oxygen + suitable temperature" },
        ],
        workedExample: {
          problem: "A wind-pollinated grass flower releases pollen on a dry, breezy day. Explain two features that help pollination and fertilisation succeed.",
          solution: "Large amounts of light pollen can be carried by wind to other flowers. Exposed, feathery stigmas catch pollen, and the pollen tube can grow to the ovule if compatible pollen lands.",
        },
      },
      questions: [
        {
          id: "ebi10-u6-flowering-plants-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which flower feature is most typical of an insect-pollinated flower?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Large amounts of light pollen"
                    },
                    {
                              "id": "b",
                              "text": "Bright petals and nectar"
                    },
                    {
                              "id": "c",
                              "text": "Exposed feathery stigma"
                    },
                    {
                              "id": "d",
                              "text": "No petals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Insect pollination",
                              "statement": "Bright petals and nectar attract insects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insect-pollinated flowers use visual and scent cues plus rewards to attract pollinators.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Bright petals and nectar",
          "commonErrors": [
                    "Choosing wind-pollination features such as light pollen."
          ]
},
        },
        {
          id: "ebi10-u6-flowering-plants-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the three main conditions needed for seed germination.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Germination",
                              "statement": "Water, oxygen and suitable temperature are required."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water is needed to activate metabolism and soften the seed coat.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Oxygen is needed for aerobic respiration and a suitable temperature keeps enzymes active.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Water, oxygen and suitable temperature.",
          "commonErrors": [
                    "Listing light as essential for all seeds; many germinate in darkness."
          ]
},
        },
        {
          id: "ebi10-u6-flowering-plants-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the events that occur after pollen lands on a compatible stigma.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Pollination to fertilisation",
                              "statement": "Pollen tube growth leads to fertilisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A pollen tube grows down the style towards the ovule.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The male nucleus travels through the pollen tube to the ovule.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Fertilisation fuses the male and female nuclei to form a zygote.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Pollen tube grows → male nucleus reaches ovule → fertilisation forms zygote.",
          "commonErrors": [
                    "Saying the whole pollen grain fuses with the ovule."
          ]
},
        },
        {
          id: "ebi10-u6-flowering-plants-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A flower has large sticky pollen grains, bright petals, a scented centre and a feathery stigma.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict whether it is mainly insect- or wind-pollinated and justify your answer.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how two features help successful pollination.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Pollination syndromes",
                              "statement": "Features match the pollinating agent."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It is mainly insect-pollinated.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Bright petals, scent and sticky pollen are adapted for animal vectors rather than wind.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bright petals and scent attract insects to the flower.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sticky pollen grains attach to the insect's body.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The pollen can then be transferred to another flower's sticky or receptive stigma.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) Insect-pollinated (b) attraction, sticky pollen transfer.",
          "commonErrors": [
                    "Ignoring that large sticky pollen is inefficient for wind dispersal."
          ]
},
        },
        {
          id: "ebi10-u6-flowering-plants-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Students place identical seeds in four dishes: A has water only, B has water and air, C has water, air and warm temperature, D has water, air, warm temperature and light.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Predict which dishes are most likely to show germination.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of oxygen during germination.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest why dish D may not germinate faster than C for many species.",
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
                              "name": "Germination variables",
                              "statement": "Water, oxygen and temperature are key; light is often optional."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A lacks oxygen so is unlikely to germinate well.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "B has water and air but may be too cold or otherwise unsuitable.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "C and D have water, air and suitable warmth, so both should germinate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Germinating seeds respire aerobically to release energy for growth.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Oxygen is needed for this respiration.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Many seeds do not require light for germination.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Light may affect some species but is not a universal requirement.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) C and D likely; A lacks oxygen (b) oxygen for respiration (c) light often unnecessary.",
          "commonErrors": [
                    "Assuming all seeds need light to germinate."
          ]
},
        },
        {
          id: "ebi10-u6-flowering-plants-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A farmer grows maize and observes that after fertilisation the ovules become kernels on a cob and the ovary wall becomes the cob covering.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what happens to the ovary and ovules after fertilisation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why a seedling can grow before it can photosynthesise.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Describe an investigation to test whether temperature affects germination rate.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Seed development",
                              "statement": "Ovary becomes fruit; stored reserves support early growth."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The ovary develops into the fruit/cob.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each fertilised ovule develops into a seed/kernel.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The ovary wall protects the developing seeds.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The seed contains a stored food reserve such as endosperm or cotyledons.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The seedling respired to release energy from this reserve.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This supports growth until leaves can photosynthesise.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use identical seeds and keep water and oxygen constant.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Place groups at different controlled temperatures.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Measure time to germination or number germinated after a set time.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Repeat trials and compare results to find the optimum temperature.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) ovary→fruit, ovule→seed (b) stored food reserve fuels growth (c) control water/oxygen, vary temperature, measure germination.",
          "commonErrors": [
                    "Saying the seedling photosynthesises before leaves develop."
          ]
},
        },
      ],
    },
  ],

};
