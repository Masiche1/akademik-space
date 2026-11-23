import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ebz10-u6-lesson-6-3",
  code: "6-3",
  title: "Business Growth and Digital Business",
  goal: "I CAN evaluate growth strategies, economies of scale and digital business opportunities.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences and Growth"],
  
  vocabulary: [
    { term: "Organic growth", definition: "Growth achieved by expanding existing operations." },
    { term: "Market penetration", definition: "Selling more of existing products to existing markets." },
    { term: "Product development", definition: "Improving or launching new products for existing markets." },
    { term: "Market development", definition: "Selling existing products in new markets." },
    { term: "Diversification", definition: "Moving into new products or markets." },
    { term: "Merger and takeover", definition: "External growth through combining businesses or acquiring control." },
    { term: "Economies of scale", definition: "Cost advantages from increased output." },
  ],
  concepts: [
    {
      id: "ebz10-u6-growth-strategies",
      title: "Business Growth Strategies",
      skill: "Evaluate internal and external growth options and economies of scale.",
      lesson: {
        sections: [
          {
            heading: "Organic growth",
            body: "Organic growth means expanding internally through **market penetration**, **product development** and **market development**. **Diversification** moves into new products or markets and may be riskier because the business lacks experience.",
          },
          {
            heading: "External growth",
            body: "External growth includes **mergers**, where firms combine, and **takeovers**, where one firm gains control of another. Joint ventures and franchises also allow shared resources or expansion. External growth can be fast but costly and may create integration problems.",
          },
          {
            heading: "Economies and diseconomies of scale",
            body: "As output rises, businesses may benefit from lower bulk-buying costs, specialisation, better technology and spreading fixed costs — **economies of scale**. Beyond a point, communication problems, bureaucracy and inefficiency may cause **diseconomies of scale**.",
          },
        ],
        keyFormulas: [
          { name: "Market penetration", statement: "More sales of existing products in existing markets" },
          { name: "Diversification", statement: "New products or new markets" },
          { name: "Economies of scale", statement: "Unit costs fall as output rises" },
        ],
        workedExample: {
          problem: "A coffee shop opens a second branch in another town. What growth strategy is this?",
          solution: "Market development: selling existing products in a new market.",
        },
      },
      questions: [
        {
          id: "ebz10-u6-growth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which strategy involves selling existing products in a new market?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Market penetration"
                    },
                    {
                              "id": "b",
                              "text": "Product development"
                    },
                    {
                              "id": "c",
                              "text": "Market development"
                    },
                    {
                              "id": "d",
                              "text": "Diversification"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Market development",
                              "statement": "Existing products sold into new markets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Market development keeps the product but changes the market.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Market development",
          "commonErrors": [
                    "Confusing with product development or penetration."
          ]
},
        },
        {
          id: "ebz10-u6-growth-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three organic growth strategies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Organic growth",
                              "statement": "Growth through internal expansion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Market penetration — sell more to existing customers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Product development — improve or launch new products.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Market development — enter new markets or regions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Market penetration, product development and market development.",
          "commonErrors": [
                    "External growth listed.",
                    "Only one strategy."
          ]
},
        },
        {
          id: "ebz10-u6-growth-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between a merger and a takeover.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Merger vs takeover",
                              "statement": "Combination versus acquisition of control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A merger combines two businesses as relatively equal partners.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A takeover occurs when one business gains control of another.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A merger may be more consensual while a takeover may be resisted.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both can create scale but may cause integration problems.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Merger = equal combination; takeover = one firm acquires control.",
          "commonErrors": [
                    "Same thing assumed.",
                    "No control difference."
          ]
},
        },
        {
          id: "ebz10-u6-growth-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A regional bakery wants to grow but fears losing its local reputation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two organic growth strategies.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one advantage and one risk of each.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Organic growth choice",
                              "statement": "Grow gradually while protecting brand and quality."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Increase sales to existing customers through loyalty schemes or catering.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Open a second branch or sell online in nearby areas.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Advantage: builds on existing reputation and skills; risk: capacity or quality may suffer if too fast.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "New branch/online can reach more customers; risk: less personal service or higher costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Use loyalty/catering and local expansion; both protect growth but need quality control.",
          "commonErrors": [
                    "Only one strategy.",
                    "No risk or advantage."
          ]
},
        },
        {
          id: "ebz10-u6-growth-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A manufacturer doubles output but finds unit costs initially fall and later rise.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two economies of scale it may have experienced.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two diseconomies that may have appeared.",
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
                              "name": "Scale effects",
                              "statement": "Growth can lower then raise unit costs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Bulk buying may reduce material costs per unit.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Specialisation or spreading fixed costs can improve efficiency.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Communication and coordination become harder in a larger firm.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bureaucracy, congestion or management issues can raise unit costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Early growth may bring bulk-buying and specialisation benefits; later growth may bring coordination and bureaucracy costs.",
          "commonErrors": [
                    "Only economies or only diseconomies.",
                    "No mechanism."
          ]
},
        },
        {
          id: "ebz10-u6-growth-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A small electronics firm must choose between opening abroad, launching a new product line and acquiring a competitor.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the growth strategy in each option.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one advantage and one risk of external growth.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest which option suits a small firm and why.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether economies of scale would justify the acquisition.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Growth strategy evaluation",
                              "statement": "Match growth route to resources, risk and scale benefits."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Opening abroad is market development.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Launching a new product line is product development or diversification.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Acquiring a competitor is a takeover/external growth.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Advantage: external growth can be rapid and add customers or skills.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Risk: high cost, debt and integration problems.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "A small firm may prefer organic expansion or a joint venture before a takeover.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Scale benefits may justify acquisition only if combined output creates real cost savings.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Match route to stage: organic for control, takeover for speed; acquisition justified only by real scale gains.",
          "commonErrors": [
                    "Strategies mislabeled.",
                    "No risk or scale evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u6-digital-business",
      title: "Digital Business and E-Commerce",
      skill: "Evaluate digital channels, data use and technology risks.",
      lesson: {
        sections: [
          {
            heading: "Digital channels",
            body: "Businesses use websites, online marketplaces, social media, apps and electronic payments to reach customers. Digital channels can reduce costs, widen markets and provide customer data, but require technology investment and digital skills.",
          },
          {
            heading: "Data and personalisation",
            body: "Online businesses collect data on browsing, purchases and preferences. This supports targeted marketing, recommendations and inventory planning. However, businesses must protect customer data and comply with privacy rules.",
          },
          {
            heading: "Risks and transformation",
            body: "Digital business faces cybersecurity threats, online fraud, technical failures and dependence on platforms. **Digital transformation** means changing processes and culture to use technology effectively. Success requires training, reliable systems and customer trust.",
          },
        ],
        keyFormulas: [
          { name: "E-commerce", statement: "Buying and selling goods or services online" },
          { name: "Digital transformation", statement: "Integrating digital technology into business processes" },
        ],
        workedExample: {
          problem: "A bakery adds online ordering and delivery. What digital benefits and risks apply?",
          solution: "Benefits include wider reach and convenience; risks include website security, data protection and delivery reliability.",
        },
      },
      questions: [
        {
          id: "ebz10-u6-digital-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is e-commerce?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Selling only through physical shops"
                    },
                    {
                              "id": "b",
                              "text": "Buying and selling goods or services online"
                    },
                    {
                              "id": "c",
                              "text": "Using cash registers"
                    },
                    {
                              "id": "d",
                              "text": "Printing product catalogs"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "E-commerce",
                              "statement": "Commercial transactions conducted online."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "E-commerce involves online buying, selling or payment for goods and services.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Buying and selling goods or services online",
          "commonErrors": [
                    "Confusing e-commerce with digital marketing only."
          ]
},
        },
        {
          id: "ebz10-u6-digital-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three benefits of digital channels for a small business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Digital benefits",
                              "statement": "Reach, data and lower costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reach customers beyond the local area.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Collect data to personalise offers and improve decisions.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Reduce some costs compared with physical expansion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Wider reach, customer data and potentially lower costs.",
          "commonErrors": [
                    "Only marketing benefit.",
                    "No business outcome."
          ]
},
        },
        {
          id: "ebz10-u6-digital-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two risks of collecting customer data online.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Data risks",
                              "statement": "Personal data requires security and privacy compliance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data breaches or cyberattacks could expose customer information.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Misuse of data could damage trust and lead to legal penalties.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Businesses must secure systems and follow privacy rules.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Data theft and privacy breaches can harm customers, reputation and compliance.",
          "commonErrors": [
                    "Only one risk.",
                    "No security or privacy link."
          ]
},
        },
        {
          id: "ebz10-u6-digital-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A retailer currently sells only in a physical store but considers adding an online shop.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two digital channels it could use.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one advantage and one risk of going online.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Digital expansion",
                              "statement": "Use channels that match customers and capabilities."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Create an e-commerce website for online sales.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Use social media or online marketplaces to promote products.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Advantage: reach more customers and gather sales data.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Risk: cybersecurity, delivery costs and competition from online rivals.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Use website, marketplaces or social media; gain reach but manage security and logistics.",
          "commonErrors": [
                    "Only one channel.",
                    "No risk."
          ]
},
        },
        {
          id: "ebz10-u6-digital-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A company wants to become a 'digital business' but staff resist new systems.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits of digital transformation.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways to overcome staff resistance.",
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
                              "name": "Digital transformation",
                              "statement": "Technology must be supported by training and change management."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Automation and data tools can improve efficiency and decisions.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Digital channels can improve customer service and market reach.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Provide training and involve staff in choosing systems.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Explain benefits clearly and offer support during transition.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Digital transformation improves efficiency and service but needs training and staff involvement.",
          "commonErrors": [
                    "Technology only.",
                    "No resistance solution."
          ]
},
        },
        {
          id: "ebz10-u6-digital-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A restaurant chain wants to use an app for orders, loyalty rewards and customer feedback.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits of the app.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two risks of the app.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two data uses that could improve the business.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether the chain should invest in the app.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Digital customer platform",
                              "statement": "Apps can improve service but require security and adoption."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It can increase convenience and repeat orders through loyalty rewards.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "It can collect feedback to improve products and service.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Customer data could be breached if security is weak.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Customers may not adopt the app or delivery costs may rise.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Analyse order patterns to improve menu and staffing.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use feedback to identify service problems quickly.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Invest if expected customer gains exceed development, security and support costs.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The app can boost convenience, loyalty and feedback but needs security, adoption and cost control.",
          "commonErrors": [
                    "Only benefits or only risks.",
                    "No data or investment evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u6-growth-digital-notes",
      title: "Growth and digital business — notes",
      summary: "Choose growth routes carefully, use scale benefits where possible, and evaluate digital channels with security, data and cost in mind.",
      sections: [
        { heading: "Growth", body: "Organic strategies include penetration, product and market development; external growth includes mergers and takeovers." },
        { heading: "Scale", body: "Economies of scale lower unit costs; diseconomies appear when firms become too large." },
        { heading: "Digital", body: "E-commerce and data improve reach and service but create security and privacy risks." },
        { heading: "Decision", body: "Evaluate cost, risk, capability and customer benefit before growing or digitising." },
      ],
    },
  ],
};
