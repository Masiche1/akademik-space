import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ebz10-u10-lesson-10-1",
  code: "10-1",
  title: "Business Ethics and Corporate Responsibility",
  goal: "I CAN explain business ethics, ethical issues and corporate social responsibility.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences: business ethics and CSR"],
  
  vocabulary: [
    { term: "Business ethics", definition: "Moral principles guiding how a business should behave." },
    { term: "Ethical issue", definition: "A situation where a business must choose between profit and doing what is right." },
    { term: "Corporate social responsibility (CSR)", definition: "A business's voluntary responsibility to society and the environment." },
    { term: "Stakeholder", definition: "Anyone affected by or affecting a business." },
    { term: "Pressure group", definition: "An organised group that campaigns to influence business or government decisions." },
  ],
  concepts: [
    {
      id: "ebz10-u10-ethics",
      title: "Business Ethics",
      skill: "Identify ethical issues and apply ethical reasoning to business decisions.",
      lesson: {
        sections: [
          {
            heading: "What are business ethics?",
            body: "**Business ethics** are the moral principles that guide how a business treats people, the environment and society — beyond simply obeying the law. Ethical businesses consider whether actions are fair, honest and responsible, even when the law does not force them to.",
          },
          {
            heading: "Common ethical issues",
            body: "**Labour**: child labour, sweatshop conditions, low wages, discrimination. **Marketing**: misleading advertising, planned obsolescence, targeting vulnerable groups. **Environment**: pollution, waste, resource depletion. **Finance**: tax avoidance, bribery, insider dealing. **Products**: unsafe goods, animal testing.",
          },
          {
            heading: "Making ethical decisions",
            body: "Businesses weigh **short-term profit** against **long-term reputation**. An ethical approach considers all **stakeholders** — workers, customers, communities, the environment — not just shareholders. Many firms adopt a **code of ethics** and ethics training; breaches can trigger boycotts, lawsuits and lost customers.",
          },
        ],
        keyFormulas: [
          { name: "Ethics vs law", statement: "Ethics = what is right; law = what is required" },
          { name: "Stakeholder", statement: "Anyone affected by or affecting the business" },
        ],
        workedExample: {
          problem: "A factory can cut costs by dumping waste illegally at night. Is this ethical even if it saves money?",
          solution: "No — illegal dumping harms the environment and community; the short-term saving damages long-term reputation and risks prosecution.",
        },
      },
      questions: [
        {
          id: "ebz10-u10-ethics-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are business ethics?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Laws that businesses must follow"
                    },
                    {
                              "id": "b",
                              "text": "Moral principles guiding how a business should behave"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax on profits"
                    },
                    {
                              "id": "d",
                              "text": "Rules set by trade unions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Business ethics",
                              "statement": "Moral principles guiding business behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethics = moral principles, distinct from legal requirements.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Moral principles guiding behaviour",
          "commonErrors": [
                    "Confused with law or regulations."
          ]
},
        },
        {
          id: "ebz10-u10-ethics-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three examples of ethical issues a business might face.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ethical issues",
                              "statement": "Labour, marketing, environment, finance, product safety."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labour issues — child labour, poor conditions, discrimination.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Marketing issues — misleading ads, targeting vulnerable groups.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Environmental issues — pollution, waste, resource use.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Labour, marketing, environmental or financial/product ethical issues.",
          "commonErrors": [
                    "Legal issues only — ethics goes beyond law."
          ]
},
        },
        {
          id: "ebz10-u10-ethics-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a business might choose to act ethically even when the law does not require it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Reasons for ethical conduct",
                              "statement": "Reputation, customer loyalty, staff motivation, long-term profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Builds reputation and customer trust.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Attracts and retains motivated staff.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Avoids future legal risk and boycotts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ethical branding can command premium prices.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Reputation, staff, risk avoidance and premium branding all reward ethical behaviour.",
          "commonErrors": [
                    "Only moral reasons given, no business reasons."
          ]
},
        },
        {
          id: "ebz10-u10-ethics-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A clothing brand discovers its supplier uses child labour.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two ethical issues this raises.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways the brand could respond ethically.",
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
                              "name": "Ethical response to supplier abuse",
                              "statement": "Stop sourcing, investigate, support remediation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Exploitation of children and unsafe/poor working conditions.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Brand shares responsibility through its supply chain.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Immediately stop orders until conditions are verified.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Fund audits and require the supplier to remediate conditions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Publicly report findings and support affected workers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) child exploitation, supply-chain responsibility (b) stop orders, audit, remediate",
          "commonErrors": [
                    "Response limited to ignoring the issue or just ending the contract."
          ]
},
        },
        {
          id: "ebz10-u10-ethics-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A fast-food chain profits from advertising sugary products to children.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ethical concerns with this marketing.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Evaluate whether profit should take priority over these concerns.",
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
                              "name": "Marketing ethics",
                              "statement": "Exploiting vulnerability damages health and reputation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Targets a vulnerable group unable to make informed choices.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Contributes to childhood obesity and health problems.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Undermines parents' authority and children's wellbeing.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Profit motive conflicts with responsibility to vulnerable consumers.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Long-term reputation and regulation risk may outweigh short-term gains.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) A balanced response: responsible marketing can still be profitable.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) vulnerability exploited, health harm (b) ethics should limit profit-seeking; reputation supports restraint",
          "commonErrors": [
                    "Profit priority assumed without evaluation."
          ]
},
        },
        {
          id: "ebz10-u10-ethics-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A profitable electronics firm is accused of dumping toxic e-waste in developing countries.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define business ethics.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Define a stakeholder and name two stakeholders harmed here.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two ethical issues raised by the dumping.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two consequences the firm could face if exposed.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Recommend and justify how the firm should respond.",
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
                              "name": "Environmental ethics",
                              "statement": "Cost-shifting harms communities; exposure risks reputation and law."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Moral principles guiding how a business should behave.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Anyone affected by/affecting the business — local communities and workers.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Environmental damage to host communities; cost-shifting of disposal responsibility.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Consumer boycotts/lost sales and legal action or fines.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Stop dumping, fund safe recycling, compensate communities — justified by ethics and long-term reputation.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Definitions; issues and consequences explained; ethical remediation recommended.",
          "commonErrors": [
                    "No justified response.",
                    "Stakeholders not identified."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u10-csr",
      title: "Corporate Social Responsibility",
      skill: "Describe CSR activities and evaluate their benefits and limitations.",
      lesson: {
        sections: [
          {
            heading: "What is CSR?",
            body: "**Corporate social responsibility (CSR)** is a business's voluntary commitment to operate in ways that benefit society and the environment — going beyond legal requirements to consider the impact of its activities on all stakeholders. It ranges from ethical sourcing and fair wages to community investment and environmental programmes.",
          },
          {
            heading: "Types of CSR activity",
            body: "**Environmental**: reducing waste and emissions, sustainable sourcing, renewable energy. **Community**: supporting local charities, schools and infrastructure. **Employee**: fair pay, training, health programmes, diversity. **Ethical trading**: auditing suppliers, refusing child labour. **Philanthropy**: donations and volunteering.",
          },
          {
            heading: "Benefits and criticisms of CSR",
            body: "**Benefits**: stronger reputation and brand loyalty; attracts customers and investors; motivates staff; pre-empts regulation; reduces long-term risk. **Criticisms**: costs money that could raise prices or profits; may be 'greenwashing' — publicity without real change; hard to measure; some argue firms' only duty is to shareholders (profit maximisation).",
          },
        ],
        keyFormulas: [
          { name: "CSR", statement: "Voluntary responsibility to society and environment beyond legal minimums" },
          { name: "Greenwashing", statement: "Exaggerating environmental claims without real action" },
        ],
        workedExample: {
          problem: "A supermarket donates to local food banks and audits suppliers for ethical labour. Is this CSR?",
          solution: "Yes — voluntary actions benefiting community (food banks) and ensuring ethical supply chains go beyond legal requirements.",
        },
      },
      questions: [
        {
          id: "ebz10-u10-csr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does CSR stand for, and what does it require of a business?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Company Share Returns — mandatory profit sharing"
                    },
                    {
                              "id": "b",
                              "text": "Corporate Social Responsibility — voluntary benefit to society and environment"
                    },
                    {
                              "id": "c",
                              "text": "Customer Service Rules — legally required service standards"
                    },
                    {
                              "id": "d",
                              "text": "Corporate Safety Regulations — government health rules"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CSR",
                              "statement": "Voluntary responsibility to society/environment beyond legal minimums."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CSR = voluntary social/environmental responsibility, not mandatory rules.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Corporate Social Responsibility",
          "commonErrors": [
                    "Treated as a legal requirement."
          ]
},
        },
        {
          id: "ebz10-u10-csr-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three examples of CSR activities a business might undertake.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CSR activities",
                              "statement": "Environmental, community, employee, ethical-trading and philanthropic actions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Environmental — reduce waste/emissions, sustainable sourcing.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Community — support charities, schools, local projects.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Employees/ethics — fair pay, training, supplier audits.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Environmental programmes, community investment, fair staff practices, ethical sourcing.",
          "commonErrors": [
                    "Legal compliance listed as CSR — CSR is voluntary."
          ]
},
        },
        {
          id: "ebz10-u10-csr-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two benefits a business gains from genuine CSR.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "CSR benefits",
                              "statement": "Reputation, loyalty, staff motivation, risk reduction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improved reputation attracts customers and investors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Brand loyalty — customers prefer ethical firms.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Motivated staff and easier recruitment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Reduces long-term regulatory and reputational risk.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Reputation/loyalty, staff motivation and reduced risk.",
          "commonErrors": [
                    "Benefits not explained — just listed."
          ]
},
        },
        {
          id: "ebz10-u10-csr-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A drinks company launches a 'green' brand while continuing to pollute rivers near its factories.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why this could be accused of greenwashing.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two risks the company faces if the contradiction is exposed.",
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
                              "name": "Greenwashing",
                              "statement": "Marketing environmental claims without matching real action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'Green' branding claims environmental care while real pollution continues.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Reputational damage and loss of customer trust.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Boycotts, falling sales of the green brand.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Legal action for misleading advertising / fines.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) claims contradict real pollution (b) lost trust, boycotts, legal/fine risk",
          "commonErrors": [
                    "Greenwashing not defined or linked."
          ]
},
        },
        {
          id: "ebz10-u10-csr-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A shareholder argues the firm's only duty is to maximise profit, so CSR spending is wasteful.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the shareholder's argument.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Evaluate this argument against the case for CSR.",
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
                              "name": "Profit vs CSR debate",
                              "statement": "Short-term profit focus vs long-term stakeholder value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) CSR costs reduce short-term profit available to shareholders.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Shareholders' money should not fund social projects.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) CSR can raise long-term profit via reputation and loyalty.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Stakeholders beyond shareholders are affected and deserve consideration.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Risk of regulation and reputational damage if ignored.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) CSR costs cut shareholder returns (b) long-term gains and stakeholder duty outweigh short-term cost",
          "commonErrors": [
                    "Only one side argued."
          ]
},
        },
        {
          id: "ebz10-u10-csr-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A mid-size bakery is considering adopting a formal CSR programme.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define CSR.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two examples of CSR activities suitable for a bakery.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain two benefits the bakery could gain.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain two costs or criticisms of the programme.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Reach a justified recommendation on whether to adopt CSR.",
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
                              "name": "CSR decision",
                              "statement": "Weigh reputational and social gains against costs and greenwashing risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Voluntary responsibility to benefit society and the environment beyond legal minimums.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Local sourcing, food-waste donation, community sponsorship.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Reputation/loyalty and staff motivation.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Programme costs reduce profit; risk of being seen as greenwashing.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Balanced recommendation — e.g. adopt modest, genuine CSR.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Definition; examples; benefits vs costs weighed; justified recommendation.",
          "commonErrors": [
                    "No costs considered.",
                    "Recommendation unsupported."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u10-101-notes",
      title: "Ethics and CSR — notes",
      summary: "Business ethics = moral principles beyond the law. CSR = voluntary benefit to society/environment — benefits reputation but costs money and risks greenwashing.",
      sections: [
        { heading: "Ethics", body: "Issues span labour, marketing, environment, finance and product safety. Ethical firms gain reputation, staff and loyalty." },
        { heading: "CSR types", body: "Environmental programmes, community investment, fair staff practices, ethical supplier audits, philanthropy." },
        { heading: "Debate", body: "Genuine CSR builds trust and reduces risk; critics cite cost and 'greenwashing'. Shareholder-profit view vs stakeholder view." },
      ],
    },
  ],
};
