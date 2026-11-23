import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ebz10-u8-lesson-8-2",
  code: "8-2",
  title: "Social, Technological and Legal Influences",
  goal: "I CAN explain how social, technological and legal changes affect business activity.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences on Business Activity"],
  
  vocabulary: [
    { term: "Demographics", definition: "Statistical study of populations — age, income, location." },
    { term: "Consumer trend", definition: "Changing pattern in what customers want to buy." },
    { term: "Technology", definition: "Tools, machines and systems used in production and communication." },
    { term: "Automation", definition: "Using machines to perform tasks with little human input." },
    { term: "Legislation", definition: "Laws made by government that businesses must follow." },
    { term: "Ethics", definition: "Principles of right and wrong behaviour in business." },
  ],
  concepts: [
    {
      id: "ebz10-u8-socialtech",
      title: "Social and Technological Change",
      skill: "Explain demographic, consumer and technology trends and their business impact.",
      lesson: {
        sections: [
          {
            heading: "Social influences",
            body: "**Demographics**: an ageing population creates demand for healthcare and retirement products; younger populations drive tech and fashion. Rising incomes increase demand for luxury goods; falling incomes shift demand to essentials. **Consumer trends** like health-consciousness, sustainability and convenience reshape what sells — businesses must research and adapt.",
          },
          {
            heading: "Technological change",
            body: "Technology transforms operations and markets: e-commerce, automation, robotics, digital marketing. Benefits: lower costs, new markets, better data. Challenges: high setup costs, skills gaps, job losses, rapid obsolescence. Businesses that ignore technology risk losing competitiveness.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A country's population is ageing. Which businesses benefit most and why?",
          solution: "Healthcare, pharmacies, mobility aids, insurance and retirement housing — demand for age-related products and services rises.",
        },
      },
      questions: [
        {
          id: "ebz10-u8-st-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is demographics?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Study of population characteristics like age and income"
                    },
                    {
                              "id": "b",
                              "text": "Study of business profits"
                    },
                    {
                              "id": "c",
                              "text": "Government economic policy"
                    },
                    {
                              "id": "d",
                              "text": "A type of market research survey"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Demographics",
                              "statement": "Population statistics: age, income, location."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Demographics describe who lives in a market.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Population characteristics"
},
        },
        {
          id: "ebz10-u8-st-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two benefits of technology for a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Technology benefits",
                              "statement": "Efficiency, reach, data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Automation lowers costs and speeds up production.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "E-commerce and digital marketing reach global customers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Data and analytics improve decisions and customer service.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Lower costs, wider reach, better data."
},
        },
        {
          id: "ebz10-u8-st-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how an ageing population could create business opportunities.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Demographic opportunity",
                              "statement": "New demand from changing population."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "More elderly people need healthcare, medicines and care services.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Mobility aids, home adaptations and insurance demand rises.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Retirement products — pensions, housing, travel — grow.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Businesses can target this growing, often wealthier segment.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Healthcare, mobility, insurance and retirement products see rising demand."
},
        },
        {
          id: "ebz10-u8-st-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A clothing retailer notices growing demand for sustainable, ethically made products.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways this social trend could affect the retailer.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two responses the retailer could make.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Consumer trends",
                              "statement": "Values-driven purchasing reshapes demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Customers may switch to competitors offering sustainable ranges.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Existing products may be seen as unethical — reputation risk.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) New product lines aligned with values could capture growth.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Source sustainable materials and audit suppliers; promote ethical credentials.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Reposition branding around sustainability to win loyal customers.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) customer switching, reputation risk, growth opportunity (b) sustainable sourcing, ethical branding."
},
        },
        {
          id: "ebz10-u8-st-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A factory introduces automated machinery that replaces 40 assembly-line workers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits and two drawbacks of this technological change for the business.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest one way the business could reduce the negative social impact.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Automation",
                              "statement": "Efficiency gains vs job losses and costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Benefits: lower labour costs, higher output/consistency, fewer errors.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Drawbacks: high capital cost, 40 workers lose jobs, skills become obsolete.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Retrain displaced workers for technical/maintenance roles or offer redundancy support.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Reskilling preserves goodwill and retains institutional knowledge.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) lower costs/higher output vs job losses/high cost (b) retrain or support displaced workers."
},
        },
        {
          id: "ebz10-u8-st-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A regional supermarket chain faces competition from online grocery delivery and changing consumer habits.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two technological changes driving this competition.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways changing consumer habits affect the chain.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the chain should invest heavily in online delivery.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Digital disruption",
                              "statement": "Technology plus changing habits reshape retail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) E-commerce platforms and apps enable home delivery at scale.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Mobile payments, same-day logistics and data analytics improve service.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Competitors use technology to cut costs and personalise offers.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Customers want convenience — fewer shop visits, more home delivery.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Value and ethical sourcing expectations rise alongside convenience.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Health and sustainability trends shift product demand.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) For: protects market share, captures growing channel, data benefits; Against: high investment, thin margins, may cannibalise stores.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Recommendation: invest but phase it — partner for delivery or pilot before full commitment.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) e-commerce, logistics, data (b) convenience, ethics, health demand (c) invest cautiously — partner/pilot first."
},
        },
      ],
    },
    {
      id: "ebz10-u8-legalethics",
      title: "Legal and Ethical Influences",
      skill: "Explain how legislation and ethical expectations constrain and guide business.",
      lesson: {
        sections: [
          {
            heading: "Legislation",
            body: "Laws set minimum standards businesses must meet: **employment law** (contracts, minimum wage, discrimination, health and safety), **consumer protection** (accurate pricing, product safety, refunds), **environmental law** (waste disposal, emissions limits). Breaking the law brings fines, prosecution and reputational damage. Compliance costs money but also protects workers and customers.",
          },
          {
            heading: "Ethics and pressure groups",
            body: "Beyond legal minimums, businesses face ethical expectations from customers, employees and **pressure groups** (e.g. environmental or consumer campaigners). Acting ethically can build loyalty and reputation; ignoring ethics risks boycotts and lost sales. Many firms adopt CSR policies voluntarily to stay ahead of regulation and public opinion.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A factory dumps waste into a river. Which influence is violated and what could happen?",
          solution: "Environmental legislation — the firm faces fines/prosecution, cleanup costs and reputational damage; pressure groups may campaign against it.",
        },
      },
      questions: [
        {
          id: "ebz10-u8-le-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is legislation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Laws made by government that businesses must follow"
                    },
                    {
                              "id": "b",
                              "text": "Company rules made by managers"
                    },
                    {
                              "id": "c",
                              "text": "Voluntary industry codes"
                    },
                    {
                              "id": "d",
                              "text": "Customer complaints"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Legislation",
                              "statement": "Binding laws governing business conduct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Legislation is compulsory — unlike voluntary ethics.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Government-made laws"
},
        },
        {
          id: "ebz10-u8-le-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two examples of employment legislation that affects businesses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Employment law",
                              "statement": "Laws protecting workers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minimum wage and working-time rules.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Health and safety requirements in the workplace.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Anti-discrimination laws in hiring and promotion.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Minimum wage, health & safety, anti-discrimination laws."
},
        },
        {
          id: "ebz10-u8-le-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why businesses must comply with consumer protection laws.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Compliance",
                              "statement": "Legal minimums protect customers and the firm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Laws require accurate pricing, safe products and fair contracts.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Non-compliance brings fines, lawsuits and prosecution.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reputation damage loses customers and investor confidence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Compliance also builds trust — customers return to reliable firms.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Avoid penalties and protect reputation; compliance builds customer trust."
},
        },
        {
          id: "ebz10-u8-le-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A fashion retailer discovers its supplier uses child labour.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two legal or ethical problems this creates for the retailer.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two actions the retailer should take.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Supply chain ethics",
                              "statement": "Responsibility extends to suppliers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Possible breach of labour/ethical sourcing standards and laws.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Consumer boycotts and pressure-group campaigns could damage sales.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Brand reputation — a core asset — is at risk.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Terminate the supplier contract and audit the supply chain.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Publish ethical sourcing policy and switch to certified suppliers.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) legal/ethical breach, boycott risk, reputation damage (b) audit, switch suppliers, publish policy."
},
        },
        {
          id: "ebz10-u8-le-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "New environmental law requires all manufacturers to cut emissions by 30% within two years.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two costs the law imposes on manufacturers.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits manufacturers might gain from early compliance.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Environmental regulation",
                              "statement": "Compliance costs now, advantages later."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Capital cost of cleaner equipment or technology.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Fines or shutdown if targets are missed.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Possible higher operating costs during transition.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Avoid penalties and maintain operating licences.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) 'Green' image attracts environmentally aware customers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Efficiency gains — less waste often means lower costs long-term.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) equipment costs, fines, transition costs (b) avoid penalties, green image, efficiency gains."
},
        },
        {
          id: "ebz10-u8-le-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A food company uses palm oil linked to deforestation. Pressure groups launch a boycott campaign.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways the campaign could harm the company.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the difference between legal compliance and ethical responsibility in this case.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how the company should respond to protect its future.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Ethical pressure",
                              "statement": "Reputation risk even when technically legal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sales fall as customers switch to competitors.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Retailers may delist the product; investors may sell shares.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Long-term brand damage outlasts the campaign.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Legal: palm oil use may not break any law — minimum standard met.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Ethical: stakeholders expect sustainable sourcing regardless of legality.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Ethics = doing what is right; law = doing what is required.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Respond quickly: commit to certified sustainable palm oil, audit supply chain.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Communicate transparently; engage with pressure groups rather than ignoring them.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Long-term: ethical sourcing becomes a selling point and shields against future regulation.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) sales loss, delisting, brand damage (b) law = minimum, ethics = stakeholder expectations (c) switch to certified sources, engage stakeholders."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u8-env2-notes",
      title: "Social, technology, legal and ethical influences — notes",
      summary: "Demographics and trends shift demand; technology transforms operations; law sets minimums; ethics shapes reputation.",
      sections: [
        { heading: "Social", body: "Age, income and lifestyle trends create new demand — research customers and adapt products." },
        { heading: "Technology", body: "Automation and e-commerce cut costs and open markets but require investment and reskilling." },
        { heading: "Legal vs ethical", body: "Laws are compulsory minimums; ethics are voluntary standards that protect reputation and stakeholder trust." },
      ],
    },
  ],
};
