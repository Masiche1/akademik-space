import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ebz11-u9-lesson-9-3",
  code: "9-3",
  title: "E-commerce and Globalisation",
  goal: "I CAN explain e-commerce models and the impact of globalisation on businesses.",
  standards: ["Edexcel IGCSE Business 4BS0 — E-commerce and global influences"],
  
  vocabulary: [
    { term: "E-commerce", definition: "Buying and selling goods or services over the internet." },
    { term: "B2C", definition: "Business-to-consumer e-commerce — firms selling directly to individual customers." },
    { term: "B2B", definition: "Business-to-business e-commerce — firms selling to other businesses." },
    { term: "C2C", definition: "Consumer-to-consumer e-commerce — individuals selling to each other, e.g. auction sites." },
    { term: "Bricks and mortar", definition: "Traditional physical shop premises, as opposed to online-only selling." },
    { term: "Globalisation", definition: "The growing integration of world markets, driven by trade, technology and investment." },
    { term: "Multinational corporation (MNC)", definition: "A company operating in more than one country." },
    { term: "Outsourcing", definition: "Contracting work or production to another firm, often abroad." },
  ],
  concepts: [
    {
      id: "ebz11-u9-ecommerce",
      title: "E-commerce Models",
      skill: "Describe e-commerce types and evaluate its benefits and limitations.",
      lesson: {
        sections: [
          {
            heading: "Types of e-commerce",
            body: "**B2C** — businesses sell to individual consumers online (e.g. online clothing shops). **B2B** — businesses sell to other businesses (e.g. a wholesaler's online catalogue). **C2C** — consumers sell to each other via platforms (e.g. auction and marketplace sites). Businesses can be **pure e-tailers** (online only), **bricks-and-mortar** (shops only), or **bricks-and-clicks** (both — e.g. click-and-collect).",
          },
          {
            heading: "Benefits and limitations",
            body: "**Benefits**: reach customers nationally/globally 24/7; lower costs (no shop rent, less staff); easy price comparison and personalised marketing; quick setup and scaling. **Limitations**: customers cannot see/touch products — returns and trust issues; delivery costs and delays; need for IT skills and website maintenance; online competition is intense; some products (fresh food, bulky items) are hard to sell online; security/privacy concerns; smaller firms struggle against big online rivals.",
          },
        ],
        keyFormulas: [
          { name: "B2C / B2B / C2C", statement: "who sells to whom: business→consumer, business→business, consumer→consumer" },
          { name: "Bricks-and-clicks", statement: "physical shops + online sales combined" },
        ],
        workedExample: {
          problem: "A local bookstore opens a website selling to individuals and also lists used books for customers to sell to each other. Classify both activities.",
          solution: "Selling books on its website to individuals = B2C e-commerce. The platform letting customers sell to each other = C2C (marketplace). If it also buys stock from publishers online, those transactions would be B2B.",
        },
      },
      questions: [
        {
          id: "ebz11-u9-ecommerce-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is B2C e-commerce?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Business selling to another business"
                    },
                    {
                              "id": "b",
                              "text": "Business selling directly to individual consumers"
                    },
                    {
                              "id": "c",
                              "text": "Consumers selling to each other"
                    },
                    {
                              "id": "d",
                              "text": "Selling in a physical shop"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "B2C",
                              "statement": "Business-to-consumer online sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B2C = business sells directly to individual customers online.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Business to individual consumers"
},
        },
        {
          id: "ebz11-u9-ecommerce-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between B2B and C2C e-commerce.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "B2B vs C2C",
                              "statement": "Who sells to whom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B2B: a business sells goods/services to another business — e.g. wholesale supplies ordered online.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "C2C: individual consumers sell to each other — e.g. auction/marketplace sites.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Clear contrast of seller and buyer in each.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "B2B=firm→firm; C2C=consumer→consumer.",
          "commonErrors": [
                    "Confusing B2C with C2C."
          ]
},
        },
        {
          id: "ebz11-u9-ecommerce-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two benefits a small business gains from selling online.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "E-commerce benefits",
                              "statement": "Reach, cost, convenience, data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefit 1: reaches customers beyond the local area — national/global market 24/7.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Benefit 2: lower costs — no shop rent, fewer staff; or better customer data for marketing.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Wider reach/24-7 trading and lower costs or better customer data.",
          "commonErrors": [
                    "Benefits that apply only to large firms."
          ]
},
        },
        {
          id: "ebz11-u9-ecommerce-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A clothing shop currently sells only in its store and is considering going online.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits of adding online sales for this shop.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one limitation of selling clothes online.",
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
                              "name": "Bricks-and-clicks",
                              "statement": "Online extends reach but has product-specific limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Benefit: reach customers who cannot visit the store — wider market.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Benefit: sell 24/7; existing stock and brand support online sales (bricks-and-clicks).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Limitation: customers cannot try clothes on — sizing/returns problems and trust issues.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) wider reach, 24/7 sales. (b) cannot try on → returns/trust issues.",
          "commonErrors": [
                    "Limitation unrelated to clothing."
          ]
},
        },
        {
          id: "ebz11-u9-ecommerce-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An online-only toy seller competes with a chain of physical toy shops.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two advantages the online seller has over the shops.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two advantages the physical shops have over the online seller.",
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
                              "name": "Online vs physical",
                              "statement": "Reach/cost vs experience/immediacy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Advantage: lower costs — no shop rent; wider reach — sell nationally 24/7.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Advantage: easy for customers to compare prices; personalised marketing via data.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Advantage: customers can see/touch toys and get immediate purchase — no delivery wait.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Advantage: personal service/advice builds loyalty; no delivery costs for buyers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) cost + reach. (b) experience/immediacy + service.",
          "commonErrors": [
                    "Advantages that belong to the wrong side."
          ]
},
        },
        {
          id: "ebz11-u9-ecommerce-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A traditional retailer is deciding whether to move fully online.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define e-commerce.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits of selling online.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two limitations of selling online.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Suggest why keeping the physical shop as well (bricks-and-clicks) might be better than going fully online.",
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
                              "name": "E-commerce decision",
                              "statement": "Online = reach/cost; physical = experience/trust; hybrid balances both."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) E-commerce = buying and selling goods/services over the internet.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit 1: reach customers nationally/globally, trading 24/7.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Benefit 2: lower costs (no rent/staff) or better customer data.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Limitation 1: customers cannot see/touch products — returns and trust issues.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Limitation 2: delivery costs/delays; intense online competition; need IT skills.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Keeps both customer groups — online reach plus in-store experience/trust; hedges risk.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definition; (b) reach/cost; (c) experience/delivery limits; (d) hybrid serves both.",
          "commonErrors": [
                    "Limitations that are actually benefits.",
                    "(d) answer that just repeats benefits."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u9-globalisation",
      title: "Globalisation",
      skill: "Explain drivers of globalisation and evaluate its impact on businesses.",
      lesson: {
        sections: [
          {
            heading: "What globalisation is",
            body: "**Globalisation** is the increasing integration of national economies into a global market. Drivers: **trade liberalisation** (tariffs and trade barriers falling); **ICT and transport** (cheap communication and faster shipping); **MNCs** investing across borders; **labour mobility**; consumer demand for variety and lower prices. The result: businesses can buy inputs and sell products almost anywhere, face competitors worldwide, and source production where costs are lowest.",
          },
          {
            heading: "Impacts on business",
            body: "**Opportunities**: access to huge new markets; cheaper inputs from low-cost suppliers; overseas production reduces costs (outsourcing/offshoring); economies of scale from global sales. **Threats**: intense foreign competition at home; jobs moved abroad to cheaper labour; dependence on exchange rates and global supply chains; ethical issues (labour standards, environmental impact overseas); vulnerability to global shocks (pandemics, trade disputes). Success depends on adapting products to local markets, managing currency risk and competing on more than price.",
          },
        ],
        keyFormulas: [
          { name: "Globalisation drivers", statement: "trade liberalisation, ICT, transport, MNC investment" },
          { name: "MNC", statement: "company operating in more than one country" },
        ],
        workedExample: {
          problem: "A UK clothing brand moves production to a lower-cost country. Explain one benefit and one risk.",
          solution: "Benefit: lower labour/production costs → higher profit margins or lower prices to compete. Risk: dependence on foreign suppliers — exchange rate changes, shipping delays or ethical/labour-standard criticism can hurt the brand.",
        },
      },
      questions: [
        {
          id: "ebz11-u9-globalisation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is globalisation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of company tax"
                    },
                    {
                              "id": "b",
                              "text": "The growing integration of world markets and economies"
                    },
                    {
                              "id": "c",
                              "text": "Selling only within one country"
                    },
                    {
                              "id": "d",
                              "text": "A government trade ban"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Globalisation",
                              "statement": "Integration of world markets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Globalisation = economies becoming more interconnected.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Integration of world markets"
},
        },
        {
          id: "ebz11-u9-globalisation-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three drivers of globalisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Globalisation drivers",
                              "statement": "Trade liberalisation, ICT/transport, MNCs, labour mobility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Falling trade barriers — tariffs and quotas reduced.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "ICT and transport — cheap communication and faster shipping.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "MNC investment and labour mobility across borders.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three: trade liberalisation, ICT/transport, MNCs, labour mobility.",
          "commonErrors": [
                    "Listing impacts rather than drivers."
          ]
},
        },
        {
          id: "ebz11-u9-globalisation-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two opportunities globalisation gives to businesses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Globalisation opportunities",
                              "statement": "New markets, cheaper inputs, scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opportunity 1: access to huge overseas markets — more customers for products.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Opportunity 2: cheaper inputs/production abroad → lower costs; or economies of scale from global sales.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "New markets and cheaper inputs/scale.",
          "commonErrors": [
                    "Threats listed as opportunities."
          ]
},
        },
        {
          id: "ebz11-u9-globalisation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A domestic manufacturer faces cheaper imports and considers moving production abroad.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one opportunity moving production abroad gives the manufacturer.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two threats the manufacturer faces from globalisation.",
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
                              "name": "Globalisation trade-offs",
                              "statement": "Cost advantages abroad vs competition and dependency at home."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Opportunity: lower production costs in a lower-wage country → higher margins or lower prices.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Threat 1: cheaper foreign imports compete on price at home.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Threat 2: dependence on foreign suppliers — exchange rates, shipping, ethical criticism; or job losses at home.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) lower costs. (b) price competition + dependency/job losses.",
          "commonErrors": [
                    "Opportunity that is actually a threat.",
                    "Threats unrelated to globalisation."
          ]
},
        },
        {
          id: "ebz11-u9-globalisation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A UK company sets up factories in three countries.",
          parts: [
          {
                    "label": "a",
                    "prompt": "What term describes a company operating in more than one country?",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits of being a multinational for this company.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain one ethical issue the company should consider overseas.",
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
                              "name": "MNC impacts",
                              "statement": "Global reach brings scale and access but ethical and dependency risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Multinational corporation (MNC).",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit: access to local markets, customers and resources in each country.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Benefit: economies of scale and ability to source production where costs are lowest.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Ethical issue: labour standards/wages of overseas workers, or environmental impact of factories.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) MNC. (b) markets/access, scale/costs. (c) labour standards or environment.",
          "commonErrors": [
                    "Benefits that are not multinational-specific.",
                    "Ethical issue unrelated to overseas operations."
          ]
},
        },
        {
          id: "ebz11-u9-globalisation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Globalisation is increasing competition for businesses in the firm's home country.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define globalisation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two drivers of globalisation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two ways globalisation threatens domestic businesses.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Explain two ways a domestic business could respond to globalisation.",
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
                              "name": "Globalisation response",
                              "statement": "Threats: foreign competition, job/cost pressures; responses: innovate, differentiate, export."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Globalisation = growing integration of world markets and economies.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Drivers: falling trade barriers, ICT/transport, MNC investment.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Threat 1: cheaper foreign imports undercut domestic prices.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Threat 2: jobs moved abroad; or pressure on wages/costs; loss of market share.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Response 1: innovate/differentiate — quality, service, niche products rivals cannot match.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(d) Response 2: export to new markets or outsource production to cut costs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definition; (b) drivers; (c) price competition/jobs; (d) differentiate/innovate, export/outsource.",
          "commonErrors": [
                    "Drivers listed as impacts.",
                    "Responses that ignore competition."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u9-globalisation-notes",
      title: "E-commerce and globalisation — revision notes",
      summary: "E-commerce types: B2C, B2B, C2C; online = reach/cost, physical = experience/trust. Globalisation = integrated world markets driven by trade liberalisation, ICT and MNCs — opportunities (markets, cheap inputs) vs threats (foreign competition, job losses, dependency).",
      sections: [
        { heading: "Key idea", body: "Match the sales channel to the product and customer; compete globally on more than price." },
        { heading: "E-commerce", body: "Bricks-and-clicks hedges risk — online reach plus in-store trust and experience." },
        { heading: "Globalisation", body: "MNCs gain scale and market access but face ethical issues and supply-chain dependence." },
      ],
    },
  ],
};
