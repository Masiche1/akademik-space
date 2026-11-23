import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ecn11-u7-lesson-7-2",
  code: "7-2",
  title: "Types of Business Organisation",
  goal: "I CAN compare sole traders, partnerships, companies and other forms of business organisation.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
  
  vocabulary: [
    { term: "Sole trader", definition: "A business owned and controlled by one person who keeps all the profit and bears all the risk." },
    { term: "Partnership", definition: "A business owned by two or more people who share profit, risk and usually unlimited liability." },
    { term: "Limited liability", definition: "Owners' responsibility for business debts is limited to the amount they invested." },
    { term: "Private limited company (Ltd)", definition: "A company whose shares are not offered to the general public; often has limited liability." },
    { term: "Public limited company (PLC)", definition: "A company that can sell shares to the general public on the stock exchange." },
    { term: "Franchise", definition: "A business that pays a fee to use an established brand, system and support." },
    { term: "Unlimited liability", definition: "Owners are personally responsible for all business debts." },
  ],
  concepts: [
    {
      id: "ecn11-u7-unincorporated",
      title: "Sole Traders, Partnerships and Franchises",
      skill: "Explain the features, advantages and disadvantages of unincorporated businesses.",
      lesson: {
        sections: [
          {
            heading: "Sole traders",
            body: "A **sole trader** is owned and run by one person. **Advantages**: easy and cheap to set up; owner keeps all profit; full control; flexible and quick decisions. **Disadvantages**: unlimited liability — personal assets can be seized to pay business debts; limited capital and skills; no continuity if the owner dies or retires.",
          },
          {
            heading: "Partnerships and franchises",
            body: "A **partnership** has two or more owners who share work, capital, profit and risk; it usually has **unlimited liability** unless it is a limited liability partnership. **Advantages**: more capital and skills; shared decisions and workload. **Disadvantages**: disagreements between partners; each partner is liable for the others' mistakes. A **franchise** lets a business buy the right to trade under an established brand (e.g. a fast-food chain), gaining training and marketing support but paying fees and following the franchisor's rules.",
          },
        ],
        keyFormulas: [
          { name: "Liability", statement: "unlimited = personal assets at risk; limited = only the investment at risk" },
        ],
        workedExample: {
          problem: "Two friends open a café as a partnership. The business fails owing £50,000. Explain what happens to their personal savings.",
          solution: "In an ordinary partnership each partner has unlimited liability — both friends are personally responsible for the £50,000 debt, so their personal savings and possessions can be used to pay it.",
        },
      },
      questions: [
        {
          id: "ecn11-u7-unincorporated-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'unlimited liability' mean for a business owner?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The owner can only lose the money they invested"
                    },
                    {
                              "id": "b",
                              "text": "The owner is personally responsible for all business debts"
                    },
                    {
                              "id": "c",
                              "text": "The business cannot borrow money"
                    },
                    {
                              "id": "d",
                              "text": "The owner must pay unlimited tax"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unlimited liability",
                              "statement": "Personal assets can be used to settle business debts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unlimited liability means the owner's personal wealth is at risk for business debts.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Personally responsible for all debts",
          "commonErrors": [
                    "Confusing limited and unlimited liability."
          ]
},
        },
        {
          id: "ecn11-u7-unincorporated-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three advantages of operating as a sole trader.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sole trader advantages",
                              "statement": "Easy setup, full control, keep all profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Easy and cheap to set up and run.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Owner keeps all the profit.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Full control over decisions — fast and flexible.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Easy setup, keep all profit, full control.",
          "commonErrors": [
                    "Listing disadvantages instead.",
                    "Only one advantage."
          ]
},
        },
        {
          id: "ecn11-u7-unincorporated-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two disadvantages of running a business as a partnership.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Partnership disadvantages",
                              "statement": "Unlimited liability and shared decision-making risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unlimited liability — partners are personally responsible for all debts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Each partner is liable for the mistakes or debts of the others.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Disagreements between partners can disrupt the business.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Profit must be shared, reducing each partner's reward.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Unlimited liability, joint liability for partners' actions, disagreements, shared profit.",
          "commonErrors": [
                    "Only advantages given.",
                    "No explanation of liability."
          ]
},
        },
        {
          id: "ecn11-u7-unincorporated-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two friends want to start a hairdressing business.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare operating as two sole traders versus a partnership.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State one advantage a franchise might offer this business instead.",
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
                              "name": "Business forms",
                              "statement": "Sole trader = one owner, all profit/risk; partnership = shared."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Two sole traders: each keeps all own profit, full control, but separate businesses — less capital and no sharing.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Partnership: share capital, skills and workload; share profit and risk; unlimited liability for both.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) A franchise provides a known brand, training, suppliers and marketing support.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Partnership shares capital/skills but shares risk; sole traders keep control and profit. (b) Brand, training, support.",
          "commonErrors": [
                    "No comparison — only one form described.",
                    "Franchise advantage too vague."
          ]
},
        },
        {
          id: "ecn11-u7-unincorporated-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A partnership of three builders is expanding and wants to reduce the owners' personal risk.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why unlimited liability is a risk for the partners.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways the business could be reorganised to reduce this risk.",
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
                              "name": "Liability and structure",
                              "statement": "Business form determines how much personal wealth is at risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) If the business fails, partners must pay all debts from personal savings.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) One partner's mistakes can create debts the others must repay.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Personal assets — homes, savings — can be seized.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Convert to a limited company — owners' liability limited to shares invested.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Or take out appropriate insurance, or split risky work into a separate firm.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Personal assets at risk for all debts. (b) Incorporate as limited company or insure/split risks.",
          "commonErrors": [
                    "No link to personal assets.",
                    "Suggestions unrelated to liability."
          ]
},
        },
        {
          id: "ecn11-u7-unincorporated-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Amara wants to open a bakery and is choosing between being a sole trader, joining a partnership or buying a franchise.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the term sole trader.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two advantages and two disadvantages of being a sole trader.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain what a franchise is and one advantage it offers.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Recommend a business form for Amara and justify your choice.",
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
                              "name": "Choosing a business form",
                              "statement": "Match structure to control, capital needs and risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Business owned and controlled by one person.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Advantages: easy setup, keep all profit, full control.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Disadvantages: unlimited liability, limited capital/skills, no continuity.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Franchise = buying the right to trade under an established brand; gains support/training.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Any justified choice — e.g. franchise if Amara wants a proven model and support; sole trader if she wants control.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) one owner; (b) two advantages + two disadvantages; (c) franchise definition + advantage; (d) justified recommendation.",
          "commonErrors": [
                    "Recommendation with no justification.",
                    "Unbalanced advantages/disadvantages."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u7-corporate",
      title: "Companies and Other Business Forms",
      skill: "Compare limited companies, public limited companies, public sector bodies and social enterprises.",
      lesson: {
        sections: [
          {
            heading: "Limited companies",
            body: "A **private limited company (Ltd)** is owned by shareholders but shares are not sold publicly; it has **limited liability** — owners risk only their investment. A **public limited company (PLC)** can sell shares on the stock exchange, raising large amounts of capital, but must meet stricter legal requirements and disclose more information. Companies are **separate legal entities** — they can own property, sue and be sued in their own name, giving **perpetual succession** (the business survives owners' deaths).",
          },
          {
            heading: "Public sector and social enterprises",
            body: "The **public sector** includes government-owned businesses providing services such as transport or postal services; they serve public aims rather than profit. **Social enterprises** trade commercially but reinvest most profit into social or environmental goals. **Co-operatives** are owned and controlled by their members (e.g. workers or customers), who share profits.",
          },
        ],
        keyFormulas: [
          { name: "Limited liability", statement: "maximum loss = amount invested in shares" },
        ],
        workedExample: {
          problem: "A PLC raises £50m by issuing shares. One shareholder owns shares worth £10,000. The company collapses owing £50m. What does the shareholder lose?",
          solution: "Only the £10,000 invested — limited liability means shareholders cannot be made to pay the company's debts beyond their shareholding.",
        },
      },
      questions: [
        {
          id: "ecn11-u7-corporate-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main advantage of limited liability for shareholders?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They can sell shares easily"
                    },
                    {
                              "id": "b",
                              "text": "They keep all the profit"
                    },
                    {
                              "id": "c",
                              "text": "They can only lose what they invested"
                    },
                    {
                              "id": "d",
                              "text": "They do not pay tax"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Limited liability",
                              "statement": "Loss limited to the amount invested."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Limited liability caps shareholders' losses at their investment.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Only lose what they invested",
          "commonErrors": [
                    "Confusing limited liability with tax."
          ]
},
        },
        {
          id: "ecn11-u7-corporate-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State three differences between a private limited company and a public limited company.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Ltd vs PLC",
                              "statement": "Share sale, regulation and disclosure differ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PLC can sell shares to the general public; Ltd cannot.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "PLC faces stricter legal requirements and more disclosure.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "PLC can raise more capital through share sales; Ltd raises capital privately.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Public share sales, stricter rules/disclosure, greater capital-raising for PLCs.",
          "commonErrors": [
                    "Saying they are identical.",
                    "Confusing Ltd with sole trader."
          ]
},
        },
        {
          id: "ecn11-u7-corporate-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the concept of 'perpetual succession' and why it benefits a company.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Perpetual succession",
                              "statement": "The business continues regardless of changes in ownership."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A company is a separate legal entity from its owners.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "If a shareholder dies or sells shares, the company continues.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Unlike a sole trader, there is no interruption to trading.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This gives stability for customers, employees and investors.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Company survives changes in ownership — continuity and stability.",
          "commonErrors": [
                    "No link to separate legal entity."
          ]
},
        },
        {
          id: "ecn11-u7-corporate-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A successful family restaurant wants to raise £2 million to open new branches but the owners do not want to give up control.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two forms of business organisation that could raise this capital.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the trade-off the owners face between raising capital and losing control.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Capital vs control",
                              "statement": "More capital often means sharing ownership and decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Private limited company selling shares privately; or a PLC issuing shares publicly.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Alternatively retaining profits over time, or bank loans (though this adds debt).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) New shareholders gain a say in decisions — the family may lose control.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Keeping control may mean slower growth or higher debt costs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Ltd/PLC share issue or retained profits/loans. (b) Capital comes with shared ownership and decisions.",
          "commonErrors": [
                    "Suggesting a sole trader — cannot raise this capital.",
                    "No trade-off explained."
          ]
},
        },
        {
          id: "ecn11-u7-corporate-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A city council runs its own waste collection service, while a private company also offers waste collection to households.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the sector each organisation operates in and explain the difference.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two reasons why a government might choose to provide a service itself rather than via a private company.",
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
                              "name": "Public vs private sector",
                              "statement": "Public aims at service; private aims at profit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Council = public sector — owned by government, aims to serve the public.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Private company = private sector — owned by shareholders, aims at profit.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Essential services may be unprofitable but necessary — private firms may refuse them.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Public provision ensures accountability and universal coverage.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Public vs private sector. (b) Service may be unprofitable; accountability/universal coverage.",
          "commonErrors": [
                    "Sectors reversed.",
                    "Only one reason given."
          ]
},
        },
        {
          id: "ecn11-u7-corporate-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two friends want to build a large tech company. They must choose between a private limited company, a public limited company or staying a partnership.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define limited liability.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State one advantage and one disadvantage of becoming a PLC.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why a partnership would be unsuitable if they want to raise very large amounts of capital.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Recommend a business form and justify your recommendation.",
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
                              "name": "Company structures",
                              "statement": "Companies offer limited liability and capital access; partnerships offer control but limited capital."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Owners' losses limited to the amount they invested.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Advantage: can sell shares publicly to raise large capital.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Disadvantage: stricter rules, more disclosure, loss of control to shareholders.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Partnerships cannot sell shares publicly — capital limited to partners' savings and loans.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Any justified choice — e.g. PLC for maximum capital; Ltd if they want limited liability without public disclosure.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) loss capped at investment; (b) capital access vs disclosure/control; (c) partnerships cannot sell shares; (d) justified recommendation.",
          "commonErrors": [
                    "Unjustified recommendation.",
                    "Confusing Ltd and PLC."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u7-organisation-notes",
      title: "Types of business organisation — revision notes",
      summary: "Sole traders and partnerships have unlimited liability; companies have limited liability and perpetual succession. PLCs can sell shares publicly; social enterprises and public sector bodies pursue non-profit aims.",
      sections: [
        { heading: "Unincorporated", body: "Sole trader: one owner, all profit, unlimited liability. Partnership: shared capital/skills, shared risk." },
        { heading: "Companies", body: "Ltd = private shares, limited liability. PLC = public share sales, more capital, more regulation." },
        { heading: "Other forms", body: "Franchise = buy a brand/system. Public sector = government-owned. Social enterprise/co-operative = member or mission-owned." },
      ],
    },
  ],
};
