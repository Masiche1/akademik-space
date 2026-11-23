import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ecn10-u6-lesson-6-3",
  code: "6-3",
  title: "Sustainable Development and the Environment",
  goal: "I CAN explain sustainable development and evaluate policies for environmental sustainability.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: sustainable development"],
  
  vocabulary: [
    { term: "Sustainable development", definition: "Development that meets present needs without compromising future generations' ability to meet theirs." },
    { term: "External cost", definition: "A cost of production borne by third parties, not the producer — e.g. pollution." },
    { term: "Carbon footprint", definition: "The total greenhouse gas emissions caused by an activity." },
    { term: "Renewable energy", definition: "Energy from sources that replenish naturally — solar, wind, hydro." },
    { term: "Intergenerational equity", definition: "Fairness between current and future generations." },
    { term: "Tragedy of the commons", definition: "Overuse of shared resources because no one owns them." },
  ],
  concepts: [
    {
      id: "ecn10-u6-sust",
      title: "Limits to Growth and Sustainability",
      skill: "Explain why unlimited growth is environmentally unsustainable and what sustainable development means.",
      lesson: {
        sections: [
          {
            heading: "Limits to growth",
            body: "Continuous economic growth requires ever more **resources** (energy, raw materials, land) and produces ever more **waste** (emissions, pollution). The planet's resources are finite — at some point growth hits **environmental limits**: climate change, deforestation, resource depletion, pollution.",
          },
          {
            heading: "Environmental externalities of growth",
            body: "Growth creates **negative externalities**: air pollution, water contamination, habitat loss, greenhouse gas emissions. These are **external costs** — borne by society, not the producer. Markets under-price goods that damage the environment because producers do not pay the full social cost.",
          },
          {
            heading: "Sustainable development",
            body: "**Sustainable development** (Brundtland definition) meets present needs without compromising future generations. It balances **economic growth**, **social equity** and **environmental protection** — the three pillars. Requires **intergenerational equity**: today's growth must not destroy tomorrow's resources.",
          },
        ],
        keyFormulas: [
          { name: "Sustainable development", statement: "Meet present needs without compromising future generations" },
          { name: "External cost", statement: "Cost borne by third parties, not the producer" },
          { name: "Tragedy of the commons", statement: "Shared resources overused because unowned" },
        ],
        workedExample: {
          problem: "A factory grows GDP by 5% but emits pollution that damages health. Is this sustainable development?",
          solution: "No — the growth ignores environmental costs; sustainable development requires growth that does not compromise future wellbeing.",
        },
      },
      questions: [
        {
          id: "ecn10-u6-sust-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is sustainable development?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Growth at any cost"
                    },
                    {
                              "id": "b",
                              "text": "Development meeting present needs without compromising future generations"
                    },
                    {
                              "id": "c",
                              "text": "Development funded by foreign aid"
                    },
                    {
                              "id": "d",
                              "text": "Zero economic growth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sustainable development",
                              "statement": "Present needs without compromising future."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sustainable = balanced across time and pillars.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Present needs without compromising future",
          "commonErrors": [
                    "Confusing with no growth at all."
          ]
},
        },
        {
          id: "ecn10-u6-sust-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three environmental limits to continuous economic growth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Limits to growth",
                              "statement": "Finite resources, waste absorption, climate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finite resources — energy, raw materials, land.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Waste absorption — pollution, emissions, climate change.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ecosystem collapse — deforestation, biodiversity loss.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Finite resources, waste absorption, ecosystem collapse.",
          "commonErrors": [
                    "Listing economic rather than environmental limits."
          ]
},
        },
        {
          id: "ecn10-u6-sust-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what an external cost is and give an example related to growth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "External cost",
                              "statement": "Cost borne by third parties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "External cost = cost of production borne by someone other than producer/consumer.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: factory pollution damaging health of nearby residents.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The producer does not pay this cost — it is externalised.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This makes polluting goods artificially cheap.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Cost borne by third parties — e.g. pollution health damage; makes goods artificially cheap.",
          "commonErrors": [
                    "Confusing with private cost."
          ]
},
        },
        {
          id: "ecn10-u6-sust-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Economic growth of 6% last year increased CO2 emissions by 4%.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why this growth may not be sustainable.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what 'sustainable growth' would require.",
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
                              "name": "Sustainable growth",
                              "statement": "Growth without environmental degradation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Rising emissions contribute to climate change — a negative externality.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) At this rate, environmental limits will eventually constrain growth.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Growth must be decoupled from emissions — cleaner technology.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Or growth in services rather than polluting industries.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) emissions rise with growth — externality (b) decouple growth from emissions",
          "commonErrors": [
                    "Assuming all growth is sustainable."
          ]
},
        },
        {
          id: "ecn10-u6-sust-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The 'tragedy of the commons' explains overfishing of shared seas.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what the tragedy of the commons means.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how it applies to climate change.",
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
                              "name": "Tragedy of the commons",
                              "statement": "Shared resources overused because unowned."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Shared resources have no owner — each user gains from using more.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) But costs of depletion are shared — overuse destroys the resource for all.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Atmosphere is a commons — each country benefits from emitting.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) But all suffer from climate change — leading to under-provision of action.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) unowned resource overused (b) atmosphere commons → climate inaction",
          "commonErrors": [
                    "Not applying the concept to climate."
          ]
},
        },
        {
          id: "ecn10-u6-sust-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A country must choose between rapid economic growth and environmental protection.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits of prioritising economic growth.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits of prioritising environmental protection.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the two goals are truly in conflict.",
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
                              "name": "Growth vs environment",
                              "statement": "Short-term conflict but long-term interdependence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Growth raises incomes, jobs and living standards now.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Poor countries need growth to fund environmental protection later.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Protection preserves resources for future growth.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Avoids costly environmental damage — health, disasters.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Not truly in conflict — sustainable development integrates both.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) incomes, jobs now (b) future resources, avoided damage (c) compatible via sustainable development",
          "commonErrors": [
                    "Treating as pure either/or."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u6-sustp",
      title: "Sustainable Development Policy",
      skill: "Evaluate policies for achieving sustainable development.",
      lesson: {
        sections: [
          {
            heading: "Policy approaches",
            body: "**Market-based**: carbon taxes, cap-and-trade, subsidies for renewables — price pollution into decisions. **Regulation**: emissions standards, pollution limits, protected areas. **Investment**: renewable energy, public transport, green technology. **International**: climate agreements (Paris), global funds for developing countries.",
          },
          {
            heading: "Challenges",
            body: "**Free-rider problem** — countries benefit from others' cuts without acting. **Cost** — green policies are expensive short-term. **Competitiveness** — strict rules may drive industry abroad. **Developing countries** — need growth but face pressure to protect environment they did not damage.",
          },
          {
            heading: "Evaluation",
            body: "Effective sustainable development policy balances **economic needs** with **environmental limits** and **social equity**. Success requires **long-term commitment**, **international cooperation**, and **technology transfer** so developing countries can grow cleanly.",
          },
        ],
        keyFormulas: [
          { name: "Carbon tax", statement: "Tax on emissions to internalise environmental cost" },
          { name: "Free-rider problem", statement: "Benefit from others' action without contributing" },
        ],
        workedExample: {
          problem: "Country E introduces a carbon tax on factories. Explain one benefit and one cost.",
          solution: "Benefit: encourages cleaner production, raises revenue for green spending. Cost: higher production costs may reduce competitiveness.",
        },
      },
      questions: [
        {
          id: "ecn10-u6-sustp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a carbon tax?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A tax on all carbon-based products"
                    },
                    {
                              "id": "b",
                              "text": "A tax on greenhouse gas emissions"
                    },
                    {
                              "id": "c",
                              "text": "A tax on renewable energy"
                    },
                    {
                              "id": "d",
                              "text": "A subsidy for clean energy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Carbon tax",
                              "statement": "Tax on emissions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carbon tax prices emissions to reduce them.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Tax on greenhouse gas emissions",
          "commonErrors": [
                    "Confusing with carbon trading."
          ]
},
        },
        {
          id: "ecn10-u6-sustp-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three policies governments can use to promote sustainable development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sustainability policy",
                              "statement": "Tax, regulate, invest, cooperate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Market-based — carbon taxes, subsidies for renewables.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Regulation — emissions standards, pollution limits.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Investment — renewable energy, green technology, public transport.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Carbon taxes, regulation, green investment.",
          "commonErrors": [
                    "Only listing one approach."
          ]
},
        },
        {
          id: "ecn10-u6-sustp-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the free-rider problem in international climate policy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Free-rider",
                              "statement": "Benefit from others' cuts without acting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Climate benefits are global — all countries gain from reduced emissions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Each country prefers others to cut — saving money while still benefiting.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This leads to under-provision of climate action.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "International agreements try to solve this via coordination.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "All benefit but few act → under-provision → need coordination.",
          "commonErrors": [
                    "Thinking free-riding is costless for the world."
          ]
},
        },
        {
          id: "ecn10-u6-sustp-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Country F introduces a carbon tax while Country G does not.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two effects of the carbon tax on Country F's economy.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one risk for Country F relative to Country G.",
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
                              "name": "Carbon tax effects",
                              "statement": "Raises costs but incentivises clean production."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Encourages firms to cut emissions — cleaner production.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Raises revenue for green spending or tax cuts.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Higher production costs may make F's goods less competitive than G's.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Industries may relocate to G — carbon leakage.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) cleaner production, revenue (b) competitiveness loss, carbon leakage",
          "commonErrors": [
                    "Ignoring competitiveness effects."
          ]
},
        },
        {
          id: "ecn10-u6-sustp-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A developing country is pressured to protect its forests while rich countries industrialised by cutting theirs.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the fairness argument regarding historical emissions.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one policy that could reconcile development and conservation.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Climate justice",
                              "statement": "Historical emissions vs current needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Rich countries caused most historical emissions while industrialising.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Poor countries need growth now — asking them to protect forests limits development.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Payments for ecosystem services — rich countries pay for conservation.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Technology transfer — clean energy without sacrificing growth.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) historical responsibility vs development need (b) PES, clean tech transfer",
          "commonErrors": [
                    "Ignoring equity dimension."
          ]
},
        },
        {
          id: "ecn10-u6-sustp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The world must transition to sustainable development within 30 years.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two policies that could achieve this at national level.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two policies that could achieve this at international level.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the main obstacle to achieving sustainable development.",
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
                              "name": "Sustainability transition",
                              "statement": "National action plus international cooperation needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Carbon pricing — tax or cap-and-trade on emissions.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Investment in renewables, public transport, green technology.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) International agreements with binding targets — e.g. Paris-style deals.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Climate funds transferring resources to developing countries.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Main obstacle: short-term costs vs long-term benefits — political will lacking.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) carbon pricing, green investment (b) agreements, climate funds (c) political will/costs",
          "commonErrors": [
                    "No evaluation of obstacles."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u6-sustp-notes",
      title: "Sustainable development — notes",
      summary: "Sustainable development balances growth, equity and environment; policies include carbon pricing, regulation and green investment.",
      sections: [
        { heading: "Key idea", body: "Growth must not compromise future generations — balance economic, social and environmental pillars." },
        { heading: "Limits", body: "Finite resources, waste absorption, climate change constrain unlimited growth." },
        { heading: "Policy", body: "Carbon taxes, regulation, green investment, international agreements; free-rider problem is the key barrier." },
      ],
    },
  ],
};
