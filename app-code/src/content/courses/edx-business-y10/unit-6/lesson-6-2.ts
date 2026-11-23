import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ebz10-u6-lesson-6-2",
  code: "6-2",
  title: "Government, Legal and Competitive Influences",
  goal: "I CAN explain how government policy, law and competition affect business decisions.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences"],
  
  vocabulary: [
    { term: "Fiscal policy", definition: "Government decisions on taxation and spending." },
    { term: "Subsidy", definition: "Government financial support to businesses or industries." },
    { term: "Regulation", definition: "Rules businesses must follow to protect stakeholders." },
    { term: "Consumer protection", definition: "Laws ensuring products are safe and descriptions accurate." },
    { term: "Competition law", definition: "Rules preventing anti-competitive behaviour." },
    { term: "Market structure", definition: "Number and size of firms competing in a market." },
    { term: "Barrier to entry", definition: "Obstacle making it hard for new firms to enter a market." },
  ],
  concepts: [
    {
      id: "ebz10-u6-government-policy",
      title: "Government Policy and Regulation",
      skill: "Evaluate taxes, subsidies, laws and regulations affecting business.",
      lesson: {
        sections: [
          {
            heading: "Government influence",
            body: "Governments affect business through taxes, subsidies, grants, interest rates and regulation. Fiscal policy changes taxes and spending; monetary policy influences interest rates and money supply. Support can help growth, but higher taxes or stricter rules can raise costs.",
          },
          {
            heading: "Key regulations",
            body: "Businesses must follow consumer protection laws, employment laws, health and safety rules, environmental regulations and competition law. These protect customers, workers, communities and fair competition but may increase compliance costs.",
          },
          {
            heading: "Evaluation",
            body: "Regulation can improve quality, safety and fairness while reducing pollution and unfair competition. However, excessive regulation may discourage investment or burden small businesses. Effective policy balances protection with competitiveness.",
          },
        ],
        keyFormulas: [
          { name: "Tax effect", statement: "Tax reduces profit but may fund public services" },
          { name: "Subsidy effect", statement: "Government support lowers costs or encourages production" },
        ],
        workedExample: {
          problem: "A government gives a subsidy to solar-panel firms. How might this affect them?",
          solution: "Costs fall or prices become more competitive, encouraging investment and expansion, but the firm may become dependent on continued support.",
        },
      },
      questions: [
        {
          id: "ebz10-u6-gov-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a subsidy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A tax on imports"
                    },
                    {
                              "id": "b",
                              "text": "Government financial support to a business or industry"
                    },
                    {
                              "id": "c",
                              "text": "A fine for breaking rules"
                    },
                    {
                              "id": "d",
                              "text": "A loan that must be repaid with interest"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subsidy",
                              "statement": "Government financial assistance to support production or prices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A subsidy lowers costs or supports an industry rather than being a loan or tax.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Government financial support",
          "commonErrors": [
                    "Confusing subsidy with tax or loan."
          ]
},
        },
        {
          id: "ebz10-u6-gov-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A business makes a profit of £100,000 before tax. Corporation tax is 19%. Calculate tax and profit after tax.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Tax",
                              "answer": 19000,
                              "unit": "£"
                    },
                    {
                              "label": "Profit after tax",
                              "answer": 81000,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Tax calculation",
                              "statement": "Tax = profit × tax rate; profit after tax = profit − tax."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculate tax at 19%: £100,000 × 0.19 = £19,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Subtract tax from profit: £100,000 − £19,000 = £81,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "State both figures: tax £19,000 and profit after tax £81,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Tax £19,000; profit after tax £81,000.",
          "commonErrors": [
                    "Using 19 as pounds rather than percent.",
                    "Forgetting to subtract tax."
          ]
},
        },
        {
          id: "ebz10-u6-gov-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two laws or regulations that affect most businesses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Business regulation",
                              "statement": "Laws protect stakeholders and competition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Consumer protection laws require accurate descriptions and safe products.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Employment and health and safety laws protect workers' rights and wellbeing.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Consumer protection and employment/health and safety regulations affect most businesses.",
          "commonErrors": [
                    "Only one regulation.",
                    "No explanation of purpose."
          ]
},
        },
        {
          id: "ebz10-u6-gov-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government wants to support a declining manufacturing industry.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two policies it could use.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one benefit and one drawback of subsidies.",
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
                              "name": "Industrial policy",
                              "statement": "Support can preserve jobs but may distort markets."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Provide subsidies or grants for investment and modernisation.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Offer training support or tax incentives to firms that retain jobs.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Benefit: subsidies lower costs and protect employment.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Drawback: they cost taxpayers and may support inefficient firms.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Use subsidies or incentives; benefit is support, drawback is cost and possible inefficiency.",
          "commonErrors": [
                    "No policy.",
                    "Only benefit or only drawback."
          ]
},
        },
        {
          id: "ebz10-u6-gov-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "New environmental regulations require factories to reduce emissions.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits of the regulation.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two costs to businesses.",
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
                              "name": "Environmental regulation",
                              "statement": "Protects society but imposes compliance costs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It reduces pollution and protects public health.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "It may encourage cleaner technology and sustainable practices.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Businesses may need expensive equipment or process changes.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Monitoring and compliance can raise administrative costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Regulation improves environment and health but raises costs and compliance burdens.",
          "commonErrors": [
                    "Only benefits or only costs.",
                    "No business-specific cost."
          ]
},
        },
        {
          id: "ebz10-u6-gov-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A fast-food chain faces new rules on packaging, advertising to children and food labelling.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two ways the rules could affect the business.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits of complying with consumer protection rules.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two practical changes the chain could make.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether strict regulation helps or harms the industry.",
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
                              "name": "Compliance strategy",
                              "statement": "Rules can raise costs but improve reputation and reduce risk."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Packaging and labelling changes may increase costs.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Advertising restrictions may reduce marketing reach to children.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Compliance can protect customers and avoid fines or legal action.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A responsible image may improve trust and customer loyalty.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Switch to recyclable packaging and clearer labels.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Review advertising to ensure it meets the rules.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Strict rules may raise costs but also improve public health and fair competition.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Rules raise costs and limit marketing but improve safety, reputation and fair competition if managed well.",
          "commonErrors": [
                    "Only costs or only benefits.",
                    "No practical response."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u6-competition-market-change",
      title: "Competition and Market Change",
      skill: "Explain market structures, competitive pressures and globalisation.",
      lesson: {
        sections: [
          {
            heading: "Market structures",
            body: "In **perfect competition**, many small firms sell similar products and prices are set by the market. In a **monopoly**, one firm dominates and may set prices. **Oligopoly** has a few large firms, often with high barriers to entry. **Monopolistic competition** has many firms selling differentiated products.",
          },
          {
            heading: "Competitive pressures",
            body: "Businesses face rivalry from existing competitors, new entrants, substitute products and changing customer preferences. **Barriers to entry** such as high capital costs, patents, licences and brand loyalty can protect established firms but may limit consumer choice.",
          },
          {
            heading: "Globalisation",
            body: "Globalisation means businesses compete internationally through trade, investment and digital markets. It creates opportunities for larger markets and cheaper inputs but also exposes firms to foreign competitors, exchange-rate changes and global supply-chain risks.",
          },
        ],
        keyFormulas: [
          { name: "Barriers to entry", statement: "Obstacles that make new competition difficult" },
          { name: "Market share", statement: "Firm's sales as a percentage of total market sales" },
        ],
        workedExample: {
          problem: "A local bakery faces a new supermarket selling cheap bread. What competitive pressure is this?",
          solution: "New competition and possibly a substitute product, forcing the bakery to improve quality, service or price.",
        },
      },
      questions: [
        {
          id: "ebz10-u6-comp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In which market structure does one firm dominate the market?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Perfect competition"
                    },
                    {
                              "id": "b",
                              "text": "Monopoly"
                    },
                    {
                              "id": "c",
                              "text": "Oligopoly"
                    },
                    {
                              "id": "d",
                              "text": "Monopolistic competition"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monopoly",
                              "statement": "Single dominant firm in a market."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A monopoly has one dominant seller; oligopoly has a few firms.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Monopoly",
          "commonErrors": [
                    "Confusing monopoly with oligopoly."
          ]
},
        },
        {
          id: "ebz10-u6-comp-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three barriers to entry.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Barriers to entry",
                              "statement": "Obstacles protecting existing firms from new competitors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "High startup capital or expensive equipment.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Patents, licences or legal restrictions.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Strong brand loyalty or established distribution channels.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Capital costs, patents/licences and brand loyalty.",
          "commonErrors": [
                    "Only one barrier.",
                    "Advantages of competition confused."
          ]
},
        },
        {
          id: "ebz10-u6-comp-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare perfect competition and monopoly in terms of pricing power.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Perfect competition vs monopoly",
                              "statement": "Many price-takers versus one price-setter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In perfect competition, many firms sell identical products.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Firms are price takers because customers can switch easily.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A monopolist has no close substitute and can influence price.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "This may lead to higher prices or restricted output without regulation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Perfect competition firms are price takers; a monopolist has more pricing power.",
          "commonErrors": [
                    "No comparison.",
                    "Monopoly assumed always illegal."
          ]
},
        },
        {
          id: "ebz10-u6-comp-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A smartphone market is dominated by four large firms.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the likely market structure.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two competitive pressures the firms face.",
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
                              "name": "Oligopoly competition",
                              "statement": "Few large firms compete through product, price and innovation."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Four dominant firms suggests an oligopoly.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "They compete on features, price, quality and brand.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "They may face new entrants, substitutes or changing customer preferences.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Oligopoly; firms compete through differentiation, pricing and innovation despite high entry barriers.",
          "commonErrors": [
                    "Monopoly assumed.",
                    "No competitive pressure identified."
          ]
},
        },
        {
          id: "ebz10-u6-comp-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A local clothing shop now competes with international online retailers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two opportunities globalisation creates.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two threats it creates.",
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
                              "name": "Globalisation effects",
                              "statement": "Wider markets but stronger foreign competition."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The shop could sell online to customers abroad.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "It may access cheaper suppliers or trends from global markets.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Large online retailers may offer lower prices and wider choice.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Exchange rates and shipping costs can affect competitiveness.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Globalisation opens markets and suppliers but exposes the shop to powerful online rivals.",
          "commonErrors": [
                    "Only opportunities or only threats.",
                    "No online retail link."
          ]
},
        },
        {
          id: "ebz10-u6-comp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A national airline faces new low-cost competitors, rising fuel costs and changing travel demand.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two forms of competitive pressure.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways market structure affects pricing.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two strategies the airline could use.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether government subsidies would help.",
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
                              "name": "Competitive strategy",
                              "statement": "Respond to rivals through differentiation, cost control or niche focus."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "New low-cost entrants increase rivalry and price pressure.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Substitute transport or changing demand alters customer choices.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "In an oligopoly, a few firms may avoid aggressive price wars.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "If competition becomes intense, prices may fall toward cost levels.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Differentiate through service, routes or loyalty programmes.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reduce costs or focus on profitable routes and customer segments.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Subsidies may preserve jobs but could delay efficiency and distort competition.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Face price and entrant pressure; compete through differentiation or efficiency, with cautious subsidy use.",
          "commonErrors": [
                    "No market structure link.",
                    "Subsidy accepted without evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u6-government-competition-notes",
      title: "Government, legal and competitive influences — notes",
      summary: "Taxes, subsidies and regulation shape costs and behaviour; market structure and globalisation determine competitive pressure.",
      sections: [
        { heading: "Government", body: "Fiscal and monetary policy plus laws affect costs, demand and compliance." },
        { heading: "Regulation", body: "Consumer, employment, environmental and competition rules protect stakeholders." },
        { heading: "Competition", body: "Market structure, barriers, substitutes and global rivals shape strategy." },
      ],
    },
  ],
};
