import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "ebz11-u12-lesson-12-3",
  code: "12-3",
  title: "Location Decisions and Relocation",
  goal: "I CAN evaluate the factors influencing where a business locates and why it may relocate.",
  standards: ["Edexcel IGCSE Business 4BS0 — Business Activity and Influences on Business", "4BS0 1.4 Decisions on location"],
  
  vocabulary: [
    { term: "Location decision", definition: "Choosing where a business will operate." },
    { term: "Market proximity", definition: "Distance to customers and ease of reaching them." },
    { term: "Labour supply", definition: "Availability of workers with needed skills." },
    { term: "Raw materials", definition: "Inputs needed before production begins." },
    { term: "Relocation", definition: "Moving a business from one location to another." },
    { term: "E-commerce", definition: "Buying and selling online, reducing reliance on a prime shop location." },
    { term: "Free trade zone", definition: "Area where businesses may receive tax or customs advantages." },
  ],
  concepts: [
    {
      id: "ebz11-u12-location",
      title: "Factors Influencing Location",
      skill: "Evaluate market, labour, materials, transport, cost and legal factors in location choices.",
      lesson: {
        sections: [
          {
            heading: "Market, labour and materials",
            body: "Businesses often locate near **customers** to reduce transport costs and improve service, especially retailers and restaurants. They may locate near **labour** where workers are plentiful or skilled, such as technology hubs. **Raw materials** matter for bulky or heavy inputs — a steel plant may be near ore and coal, while a bakery may locate near flour suppliers.\n\n**Transport links** affect access to markets, suppliers and workers. Good road, rail, port or airport connections can reduce distribution costs.",
          },
          {
            heading: "Costs, competition, infrastructure and legal controls",
            body: "**Costs** include rent, rates, wages and utilities. Cheaper locations attract cost-sensitive businesses, but may be far from markets. **Competitors and clusters** can help through shared suppliers and labour pools, but also increase rivalry. **Infrastructure** includes broadband, power, water and waste disposal.\n\n**Legal and planning controls** can encourage or restrict location through zoning, environmental rules, trade blocs and incentives such as free trade zones.",
          },
        ],
        keyFormulas: [
          { name: "Location factors", statement: "Market + labour + materials + transport + cost + legal" },
          { name: "Trade-off", statement: "Lower costs may mean greater distance from customers" },
        ],
        workedExample: {
          problem: "A coffee shop is choosing between a busy high street and a cheaper industrial estate. Identify two relevant factors.",
          solution: "High street gives market proximity; industrial estate gives lower rent but may reduce footfall.",
        },
      },
      questions: [
        {
          id: "ebz11-u12-location-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which factor is most important for a high-street retailer choosing a location?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distance from competitors"
                    },
                    {
                              "id": "b",
                              "text": "Proximity to customers"
                    },
                    {
                              "id": "c",
                              "text": "Access to raw materials"
                    },
                    {
                              "id": "d",
                              "text": "Availability of farmland"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Market proximity",
                              "statement": "Retailers need access to customers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retail sales depend on customer footfall and access.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Proximity to customers",
          "commonErrors": [
                    "Applying raw-material factors to retail."
          ]
},
        },
        {
          id: "ebz11-u12-location-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two location factors a manufacturing business should consider.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Location factors",
                              "statement": "Inputs, transport, labour, cost and legal controls."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Proximity to raw materials or suppliers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Transport links for distributing finished goods.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Availability of labour and suitable premises.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Materials/suppliers, transport, labour and premises.",
          "commonErrors": [
                    "Only customer proximity for a manufacturer."
          ]
},
        },
        {
          id: "ebz11-u12-location-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a software company might locate in a city with many universities.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Labour supply",
                              "statement": "Location near skilled workers reduces recruitment difficulty."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Universities supply graduates with relevant skills.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Access to a large labour pool improves recruitment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "City infrastructure and transport support business links.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Proximity to clients and partners may help sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Skilled labour supply, infrastructure and client access.",
          "commonErrors": [
                    "Ignoring labour skills."
          ]
},
        },
        {
          id: "ebz11-u12-location-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the location needs of a supermarket and a shipbuilding firm.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Location by activity",
                              "statement": "Different industries weight factors differently."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Supermarket needs customer access and parking.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Shipbuilder needs deep-water port and heavy transport links.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Supermarket relies on distribution from depots.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Shipbuilder needs large site and specialist labour.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both need labour, but different skills and volumes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Retail prioritises customers; shipbuilding prioritises port access, space and heavy logistics.",
          "commonErrors": [
                    "Using identical factors without weighting."
          ]
},
        },
        {
          id: "ebz11-u12-location-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A business is choosing between a cheap location far from customers and an expensive location near customers. Evaluate the decision.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Location trade-off",
                              "statement": "Cost savings must be weighed against access and sales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cheap location lowers rent and possibly wages.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Distance may reduce footfall and impulse sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Transport costs for customers or deliveries may rise.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Near customers can support higher sales and service.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "For a retailer, market access may outweigh rent savings.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "For a warehouse, cheap location may be better if delivery links are good.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Decision depends on product, distribution and demand.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Choose based on whether cost savings exceed lost sales and extra transport costs.",
          "commonErrors": [
                    "Assuming cheap is always better."
          ]
},
        },
        {
          id: "ebz11-u12-location-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A food manufacturer must choose where to build a new factory. Evaluate the importance of raw materials, labour, transport, costs, competition and government incentives.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Location evaluation",
                              "statement": "Weight each factor for the specific business."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Raw materials matter if inputs are bulky or perishable.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Labour availability affects production and wages.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Transport links affect input delivery and product distribution.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Costs include land, rent, utilities and taxes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Competitors nearby may create rivalry or a skilled labour pool.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Government incentives can reduce costs but may have conditions.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Environmental and planning rules may restrict options.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Market access matters if products are fresh or customer-specific.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "A scorecard can compare locations across factors.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Final recommendation should justify the highest-weighted factors.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Select the location that best balances input access, labour, transport, cost, competition and incentives.",
          "commonErrors": [
                    "Ignoring legal or environmental factors."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u12-relocation",
      title: "Relocation and E-commerce",
      skill: "Explain why businesses relocate and how online selling affects location.",
      lesson: {
        sections: [
          {
            heading: "Why businesses relocate",
            body: "Businesses relocate to reduce costs, access cheaper labour or premises, move closer to markets, receive government incentives, expand capacity or escape declining areas. Relocation may involve **push factors** (high costs, poor infrastructure, congestion) and **pull factors** (lower costs, incentives, better links).\n\nRelocation has costs: removal expenses, disruption, loss of customers, retraining and possible redundancy. It is worthwhile only if long-term benefits exceed short-term costs.",
          },
          {
            heading: "E-commerce and changing markets",
            body: "**E-commerce** allows businesses to sell online, reducing the need for a prime high-street location. However, businesses still need warehouses, delivery networks, IT systems and customer service. A click-and-collect store or fulfilment centre may replace a traditional shop.\n\nRelocation decisions must also respond to changing customer behaviour, transport costs and local competition. Moving can open new markets or reduce costs, but only if the benefits outweigh disruption.",
          },
        ],
        keyFormulas: [
          { name: "Push factors", statement: "Reasons to leave a location" },
          { name: "Pull factors", statement: "Reasons attracting a business to a new location" },
        ],
        workedExample: {
          problem: "A retailer closes a city-centre store and opens an online fulfilment centre in a cheaper region. Explain two location effects.",
          solution: "Lower operating costs improve margins; online reach reduces dependence on footfall but requires logistics investment.",
        },
      },
      questions: [
        {
          id: "ebz11-u12-relocation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a pull factor encouraging a business to relocate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rising local rents"
                    },
                    {
                              "id": "b",
                              "text": "Government relocation grants"
                    },
                    {
                              "id": "c",
                              "text": "Poor transport links"
                    },
                    {
                              "id": "d",
                              "text": "Increasing congestion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pull factor",
                              "statement": "Attraction of a new location."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grants attract businesses to a location.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Government relocation grants",
          "commonErrors": [
                    "Confusing push and pull factors."
          ]
},
        },
        {
          id: "ebz11-u12-relocation-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two costs a business may face when relocating.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Relocation costs",
                              "statement": "Financial and operational disruption."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Physical removal and fit-out costs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Disruption to trading and possible customer loss.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Staff may need retraining or may leave.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Removal costs, disruption and staff issues.",
          "commonErrors": [
                    "Only mentioning rent."
          ]
},
        },
        {
          id: "ebz11-u12-relocation-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how e-commerce changes the importance of a business's location.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "E-commerce location",
                              "statement": "Online sales reduce need for prime retail sites but increase logistics needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Customers can buy online without visiting a shop.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A prime high-street location becomes less essential.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Warehouses and delivery networks become more important.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Businesses still need reliable IT and customer service.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "E-commerce shifts importance from shop location to logistics and online systems.",
          "commonErrors": [
                    "Claiming location no longer matters."
          ]
},
        },
        {
          id: "ebz11-u12-relocation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the location needs of a high-street shop and an online fulfilment centre.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Location by sales channel",
                              "statement": "Shops need footfall; fulfilment centres need logistics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "High-street shop needs customer access and visibility.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Shop needs parking and convenient transport links.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fulfilment centre needs space and cheap land.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Centre needs delivery links to customers nationwide.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Centre needs IT systems and reliable suppliers.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Shop prioritises footfall; fulfilment centre prioritises space, cost and logistics.",
          "commonErrors": [
                    "Using identical factors for both."
          ]
},
        },
        {
          id: "ebz11-u12-relocation-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A town-centre shop is losing customers to online retailers. Discuss whether it should relocate to a cheaper out-of-town site.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Relocation decision",
                              "statement": "Weigh lower costs against loss of footfall and access."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Online competition reduces town-centre sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Out-of-town rent may be lower.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Parking and access may be easier for car customers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Losing footfall may reduce impulse purchases.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Relocation costs may be high for a small shop.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Online selling may be a better response than moving.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Decision depends on customer behaviour and product type.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Relocation may cut costs but risks losing customers; online selling may be more effective.",
          "commonErrors": [
                    "Ignoring online competition."
          ]
},
        },
        {
          id: "ebz11-u12-relocation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A software firm must decide whether to keep its office near universities and city clients or move to a cheaper suburb with better transport links. Evaluate the relocation decision.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Relocation evaluation",
                              "statement": "Weigh cost, labour, access, disruption and growth."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Recommend a justified location."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "City location gives access to graduates and clients.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "City rent and wages may be higher.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Suburb offers lower costs and transport links.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Suburb may reduce access to university talent pools.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Relocation costs and staff disruption are significant.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Remote/hybrid working may reduce location dependence.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Growth plans should influence the choice.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Client relationships and brand image may favour the city.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Staff morale and retention affect the decision.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Best choice depends on skills, cost and long-term strategy.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Keep city access for talent/clients or move for cost if skills and clients can still be reached.",
          "commonErrors": [
                    "No recommendation.",
                    "Ignoring relocation costs."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u12-location-notes",
      title: "Location decisions — notes",
      summary: "Location depends on market, labour, materials, transport, cost, competition, infrastructure and legal controls.",
      sections: [
        { heading: "Key idea", body: "Different businesses weight location factors differently: retailers need customers; manufacturers need inputs and transport." },
        { heading: "Relocation", body: "Push factors drive businesses away; pull factors attract them. Relocation has costs and benefits." },
        { heading: "Online and relocation", body: "E-commerce reduces dependence on prime shop sites but increases logistics needs; relocation balances push and pull factors." },
      ],
    },
  ],
};
