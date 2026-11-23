import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ebz10-u10-lesson-10-2",
  code: "10-2",
  title: "Environmental Sustainability",
  goal: "I CAN explain environmental pressures on business and evaluate sustainable practices.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences: environmental sustainability"],
  
  vocabulary: [
    { term: "Sustainability", definition: "Meeting present needs without compromising the ability of future generations to meet theirs." },
    { term: "Carbon footprint", definition: "Total greenhouse-gas emissions caused by an activity or product." },
    { term: "Circular economy", definition: "Economic system where waste is minimised by reusing, repairing and recycling materials." },
    { term: "Sustainable sourcing", definition: "Obtaining materials in ways that protect the environment and workers." },
    { term: "Renewable energy", definition: "Energy from sources that replenish naturally, e.g. solar and wind." },
    { term: "Eco-label", definition: "Certification mark showing a product meets environmental standards." },
  ],
  concepts: [
    {
      id: "ebz10-u10-env-issues",
      title: "Environmental Issues Facing Business",
      skill: "Identify environmental pressures and explain why they matter to businesses.",
      lesson: {
        sections: [
          {
            heading: "Key environmental issues",
            body: "**Pollution**: air (emissions), water (effluent, plastic), noise and light pollution. **Resource depletion**: using finite raw materials faster than they can be replaced. **Climate change**: rising temperatures, extreme weather, sea-level rise driven by greenhouse gases. **Waste**: landfill growth, single-use plastics, electronic waste.",
          },
          {
            heading: "Why businesses should care",
            body: "**Legal**: governments impose environmental laws — fines and sanctions for breaches. **Reputational**: consumers and pressure groups punish polluters. **Cost**: waste and energy are expensive inputs; efficient resource use cuts costs. **Supply risk**: depleted resources and climate disruption threaten inputs. **Investor pressure**: funds increasingly avoid unsustainable firms.",
          },
          {
            heading: "External pressures on firms",
            body: "Businesses face a web of pressures: **government regulation** (emissions limits, waste rules, carbon pricing), **consumer demand** for greener products, **pressure groups** campaigning on pollution, **investor expectations** (ESG criteria), and **physical risks** such as floods damaging premises or droughts disrupting supply.",
          },
        ],
        keyFormulas: [
          { name: "Carbon footprint", statement: "Total greenhouse-gas emissions of an activity/product" },
          { name: "Sustainability", statement: "Meet present needs without harming future generations" },
        ],
        workedExample: {
          problem: "A factory's energy bill keeps rising and a campaign group protests its river pollution. Give two reasons the firm should act.",
          solution: "Rising energy costs hurt profits, and pollution risks fines, boycotts and reputational damage — both push the firm toward cleaner, more efficient operations.",
        },
      },
      questions: [
        {
          id: "ebz10-u10-env-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is meant by sustainability?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Producing goods as cheaply as possible"
                    },
                    {
                              "id": "b",
                              "text": "Meeting present needs without compromising future generations' ability to meet theirs"
                    },
                    {
                              "id": "c",
                              "text": "Keeping a business profitable forever"
                    },
                    {
                              "id": "d",
                              "text": "Using only renewable materials"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sustainability",
                              "statement": "Present needs met without harming future capacity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sustainability = intergenerational balance of resource use.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Meet present needs without harming future generations",
          "commonErrors": [
                    "Confused with profitability or pure cost-cutting."
          ]
},
        },
        {
          id: "ebz10-u10-env-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three environmental issues that businesses contribute to.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Environmental issues",
                              "statement": "Pollution, resource depletion, climate change, waste."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pollution — air, water, noise from production.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Resource depletion — using finite materials unsustainably.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Waste/climate change — landfill, emissions, greenhouse gases.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Pollution, resource depletion, waste and climate-change contributions.",
          "commonErrors": [
                    "Only one type of pollution named."
          ]
},
        },
        {
          id: "ebz10-u10-env-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a business might face rising costs from environmental pressures.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Environmental cost pressures",
                              "statement": "Regulation, energy prices, waste disposal and reputational risk raise costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Environmental taxes and compliance costs increase.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Energy and raw-material prices rise as resources deplete.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Waste disposal and pollution-control costs grow.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Pollution incidents trigger fines and lost sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Taxes, resource prices, waste costs and fines all raise environmental costs.",
          "commonErrors": [
                    "Costs attributed only to fines."
          ]
},
        },
        {
          id: "ebz10-u10-env-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A government introduces a carbon tax on businesses based on emissions.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways the tax pressures businesses to change behaviour.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one way the tax could harm a small business.",
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
                              "name": "Carbon tax effects",
                              "statement": "Prices emissions → firms cut pollution or pay; small firms feel costs most."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) High-emission firms pay more → incentive to cut emissions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Encourages investment in cleaner technology and energy.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Rewards low-carbon firms with lower costs vs rivals.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Small firms lack funds to switch technology → higher costs squeeze margins.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) price signal, tech investment, rewards low-carbon (b) small firms can't afford transition",
          "commonErrors": [
                    "Only costs mentioned, no behavioural incentive."
          ]
},
        },
        {
          id: "ebz10-u10-env-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A clothing company faces protests over water pollution from its dyeing factories.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two external pressures the company faces.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Evaluate one benefit to the company of cleaning up its operations.",
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
                              "name": "Environmental pressure response",
                              "statement": "Protests, regulation and reputation push firms toward sustainable operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Pressure groups campaign and consumers may boycott.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Government may impose fines or stricter pollution laws.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Investors may withdraw funds over ESG concerns.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Restores reputation and customer trust → protects sales.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Avoids future fines and secures licence to operate.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) protests/boycotts, regulation, investors (b) reputation recovery, legal security",
          "commonErrors": [
                    "Benefit not evaluated against costs."
          ]
},
        },
        {
          id: "ebz10-u10-env-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A food-processing firm wants to reduce its environmental impact.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define sustainability.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Define carbon footprint.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two environmental issues relevant to the firm.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two reasons the firm should reduce its impact.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Recommend and justify one action the firm could take.",
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
                              "name": "Environmental action",
                              "statement": "Measure footprint, cut waste/emissions, gain reputation and cost savings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Meet present needs without compromising future generations.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Total greenhouse-gas emissions caused by an activity or product.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Water/air pollution from processing; packaging waste.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Legal compliance and reputation; lower energy/waste costs.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) E.g. switch to renewable energy — cuts emissions and long-term costs.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Definitions; issues and reasons explained; justified environmental action.",
          "commonErrors": [
                    "Action not justified.",
                    "Issues not linked to the firm."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u10-green",
      title: "Sustainable Business Practices",
      skill: "Describe and evaluate green business strategies such as recycling and circular economy.",
      lesson: {
        sections: [
          {
            heading: "Resource and waste strategies",
            body: "**Sustainable sourcing**: choosing suppliers and materials that protect forests, fisheries and workers. **Energy efficiency**: LED lighting, efficient machinery, smart heating — cuts costs and emissions. **Waste reduction**: minimising packaging, reusing materials, recycling. The **circular economy** keeps products and materials in use — repair, remanufacture, recycle — instead of the 'take-make-dispose' model.",
          },
          {
            heading: "Green products and marketing",
            body: "Firms develop **eco-friendly products** (recyclable packaging, organic ingredients, energy-efficient goods) and win **eco-labels/certifications** that signal standards to consumers. **Green marketing** promotes environmental credentials — but claims must be genuine or the firm risks 'greenwashing' accusations and legal penalties for misleading advertising.",
          },
          {
            heading: "Costs and benefits of going green",
            body: "**Costs**: investment in new equipment, certification and sustainable materials; possible higher prices. **Benefits**: lower energy and waste-disposal costs over time; access to green markets and ethically-minded consumers; compliance with tightening regulation; improved reputation; reduced risk of fines and boycotts.",
          },
        ],
        keyFormulas: [
          { name: "Circular economy", statement: "Reuse, repair, recycle — minimise waste" },
          { name: "Eco-label", statement: "Certification of environmental standards" },
        ],
        workedExample: {
          problem: "A coffee shop switches to compostable cups and donates leftover food. Which sustainable strategies is it using?",
          solution: "Waste reduction (compostable packaging) and resource efficiency (donating surplus food instead of binning it) — part of a circular-economy approach.",
        },
      },
      questions: [
        {
          id: "ebz10-u10-green-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the circular economy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An economy based only on services"
                    },
                    {
                              "id": "b",
                              "text": "A system where materials are reused, repaired and recycled to minimise waste"
                    },
                    {
                              "id": "c",
                              "text": "A business owned by its workers"
                    },
                    {
                              "id": "d",
                              "text": "A market for second-hand goods only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Circular economy",
                              "statement": "Reuse/repair/recycle to minimise waste."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Circular economy keeps materials in use rather than discarding them.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Reuse, repair and recycle to minimise waste",
          "commonErrors": [
                    "Confused with recycling alone or sharing economy."
          ]
},
        },
        {
          id: "ebz10-u10-green-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three sustainable business practices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sustainable practices",
                              "statement": "Sourcing, efficiency, waste reduction, renewable energy, eco-labelling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sustainable sourcing of materials.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Energy efficiency measures.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Waste reduction/recycling or renewable energy use.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Sustainable sourcing, energy efficiency, recycling/waste reduction, renewables.",
          "commonErrors": [
                    "CSR donations listed — practices must be operational."
          ]
},
        },
        {
          id: "ebz10-u10-green-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how energy efficiency benefits both a business and the environment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Energy efficiency",
                              "statement": "Lower costs for the firm; lower emissions for the environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Efficient equipment uses less energy per unit of output.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Business benefit: lower fuel/electricity bills → higher profit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Environmental benefit: reduced fossil-fuel use → lower emissions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Helps meet regulation and green credentials.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Cuts costs for the firm and emissions for the environment — a win-win.",
          "commonErrors": [
                    "Only one side of the benefit explained."
          ]
},
        },
        {
          id: "ebz10-u10-green-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A supermarket switches to 100% recyclable packaging but raises prices by 3%.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two environmental benefits of the change.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one risk for the supermarket.",
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
                              "name": "Green packaging trade-off",
                              "statement": "Less landfill vs higher shelf prices and possible demand loss."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Less packaging waste sent to landfill.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Materials re-enter use via recycling — circular economy gain.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Lower resource depletion and pollution from production.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Higher prices may reduce demand and sales.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) less waste, material reuse, less pollution (b) price rise may cut demand",
          "commonErrors": [
                    "Only environmental side covered."
          ]
},
        },
        {
          id: "ebz10-u10-green-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A smartphone maker claims its new model is 'the greenest phone ever' but provides no evidence.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways the claim could be genuine CSR/green marketing.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Evaluate the risk if the claim is challenged.",
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
                              "name": "Green marketing risk",
                              "statement": "Unsubstantiated claims invite greenwashing accusations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Uses recycled materials / renewable-energy manufacturing.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Designed for repairability and recycling.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Backed by eco-certification.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) If unproven, accused of greenwashing → reputational damage.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Possible fines for misleading advertising and lost sales.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) recycled materials, repairable design, certification (b) greenwashing risk — fines and lost trust",
          "commonErrors": [
                    "Claim accepted at face value."
          ]
},
        },
        {
          id: "ebz10-u10-green-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A furniture company wants to become more sustainable.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define sustainable sourcing.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Define the circular economy.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two ways the company could reduce its environmental impact.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two benefits of going green for the business.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Recommend and justify one sustainable practice for the company.",
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
                              "name": "Sustainable strategy",
                              "statement": "Source responsibly, cut waste, gain efficiency and market appeal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Obtaining materials in ways protecting environment and workers.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Reuse/repair/recycle materials to minimise waste.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Certified sustainable timber; energy-efficient production; take-back/recycling scheme.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Lower energy/waste costs and appeal to green consumers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) E.g. FSC-certified wood — protects forests and attracts eco-buyers.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Definitions; impact reductions and benefits explained; justified practice.",
          "commonErrors": [
                    "Practice not justified.",
                    "Definitions missing."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u10-102-notes",
      title: "Environmental sustainability — notes",
      summary: "Pollution, resource depletion and climate change pressure firms via law, cost and reputation. Green practices cut costs and win eco-markets — but greenwashing risks backlash.",
      sections: [
        { heading: "Pressures", body: "Carbon taxes, emissions rules, consumer demand, pressure groups, investor ESG criteria, physical climate risks." },
        { heading: "Green practices", body: "Sustainable sourcing, energy efficiency, waste reduction, circular economy, eco-labels, green marketing." },
        { heading: "Trade-off", body: "Upfront investment vs long-term savings, compliance and market appeal; claims must be genuine." },
      ],
    },
  ],
};
