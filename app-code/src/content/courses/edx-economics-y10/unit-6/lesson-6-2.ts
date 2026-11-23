import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ecn10-u6-lesson-6-2",
  code: "6-2",
  title: "Aid and Development Finance",
  goal: "I CAN explain types of aid and evaluate their effectiveness for development.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy: aid and development"],
  
  vocabulary: [
    { term: "Aid", definition: "Resources transferred from rich to poor countries to support development." },
    { term: "Bilateral aid", definition: "Aid given directly by one country to another." },
    { term: "Multilateral aid", definition: "Aid channelled through international organisations like the UN or World Bank." },
    { term: "Tied aid", definition: "Aid that must be spent on goods or services from the donor country." },
    { term: "Development aid", definition: "Long-term aid for projects like schools, hospitals and infrastructure." },
    { term: "Emergency aid", definition: "Short-term aid for crises — famine, floods, conflict." },
  ],
  concepts: [
    {
      id: "ecn10-u6-aid",
      title: "Types of Aid",
      skill: "Distinguish types of aid and evaluate their effectiveness.",
      lesson: {
        sections: [
          {
            heading: "Types of aid",
            body: "**Bilateral aid**: country-to-country — e.g. UK aid to Kenya. **Multilateral aid**: via organisations — UN, World Bank, IMF. **Tied aid**: must buy donor's goods — less efficient but benefits donor firms. **Emergency aid**: food, medicine in crises. **Development aid**: long-term projects — schools, roads, hospitals.",
          },
          {
            heading: "Effectiveness of aid",
            body: "Aid **works** when it funds productive investment, builds infrastructure, and reaches those in need. It **fails** when it is tied (overpriced goods), misused by corrupt governments, creates **dependency**, or is spent on consumption rather than investment. Evidence is mixed — some countries grew with aid, others did not.",
          },
          {
            heading: "Alternatives to aid",
            body: "**FDI and trade** may be more sustainable than aid. **Remittances** from migrants often exceed aid. **Debt relief** frees resources for development. **Fair trade** gives producers better prices. **Microfinance** empowers small entrepreneurs.",
          },
        ],
        keyFormulas: [
          { name: "Bilateral aid", statement: "Direct country-to-country transfer" },
          { name: "Multilateral aid", statement: "Via international organisations" },
          { name: "Tied aid", statement: "Must be spent on donor country's goods" },
        ],
        workedExample: {
          problem: "Country A gives £100m of tied aid for hospitals, but the equipment must be bought from Country A at inflated prices. Is this efficient aid?",
          solution: "Partly — it delivers hospitals but much of the £100m leaks back to donor firms; untied aid would buy more for the same money.",
        },
      },
      questions: [
        {
          id: "ecn10-u6-aid-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is bilateral aid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Aid given through the UN"
                    },
                    {
                              "id": "b",
                              "text": "Aid given directly by one country to another"
                    },
                    {
                              "id": "c",
                              "text": "Aid that must be spent on donor goods"
                    },
                    {
                              "id": "d",
                              "text": "Emergency food aid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bilateral aid",
                              "statement": "Country-to-country aid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bilateral = two parties, direct transfer.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Direct country-to-country",
          "commonErrors": [
                    "Confusing with multilateral."
          ]
},
        },
        {
          id: "ecn10-u6-aid-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between tied and untied aid.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Tied vs untied",
                              "statement": "Tied must buy donor goods; untied can be spent freely."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tied aid must be spent on the donor country's goods/services.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Untied aid can be spent on whatever the recipient needs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Tied aid often delivers less value for money but benefits donor firms.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Tied = restricted to donor goods; untied = free spending.",
          "commonErrors": [
                    "Thinking tied aid is always better for the recipient."
          ]
},
        },
        {
          id: "ecn10-u6-aid-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways aid can support development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Aid for development",
                              "statement": "Funds investment, services and capacity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Funds infrastructure — roads, schools, hospitals, water.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Supports services — healthcare, education, food security.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Builds capacity — training, technical expertise, institutions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Emergency aid saves lives in crises, enabling recovery.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Infrastructure, services, capacity building, emergency relief.",
          "commonErrors": [
                    "Only describing emergency aid."
          ]
},
        },
        {
          id: "ecn10-u6-aid-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country receives large amounts of foreign aid but its economy stagnates.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons aid might fail to produce development.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one reason aid might still be worthwhile.",
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
                              "name": "Aid effectiveness",
                              "statement": "Aid works only if well-used and targeted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Corruption — aid embezzled by officials.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Aid spent on consumption, not investment.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Tied aid delivers overpriced goods — little real value.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Even poorly-used aid may fund essential services — health, food.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It prevents worse outcomes — famine, disease, collapse.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) corruption, consumption, tied inefficiency (b) still prevents worse outcomes",
          "commonErrors": [
                    "All-or-nothing view of aid."
          ]
},
        },
        {
          id: "ecn10-u6-aid-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare aid, foreign direct investment and remittances as sources of finance for development.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one advantage of FDI over aid.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one advantage of remittances over aid.",
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
                              "name": "Development finance",
                              "statement": "FDI brings jobs; remittances reach families directly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) FDI creates jobs and transfers technology — more sustainable than aid.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) FDI does not create dependency or require repayment.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Remittances go directly to families — bypass corrupt governments.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Often larger than aid flows and spent on health, education, housing.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) FDI = jobs/technology, no dependency (b) remittances = direct to families, often larger",
          "commonErrors": [
                    "Comparing without advantages."
          ]
},
        },
        {
          id: "ecn10-u6-aid-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A donor country is deciding how to spend its aid budget.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two factors that should influence the choice of aid projects.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two risks of giving aid to a corrupt government.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the donor should give aid at all.",
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
                              "name": "Aid design",
                              "statement": "Aid is most effective when targeted, untied and accountable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Recipient need — where poverty and deprivation are greatest.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Likelihood of success — governance, capacity, sustainability.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Aid may be embezzled — little reaches the poor.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) May entrench bad governments — reduce pressure for reform.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Aid still worthwhile if targeted well — but conditions and monitoring matter.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) need, capacity (b) embezzlement, entrenchment (c) give with conditions and monitoring",
          "commonErrors": [
                    "No evaluation of whether to give at all."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u6-debt",
      title: "Debt and Development Finance",
      skill: "Explain how debt affects development and evaluate debt relief.",
      lesson: {
        sections: [
          {
            heading: "The debt problem",
            body: "Many developing countries borrowed heavily in the 1970s-80s. High interest rates, falling export prices and poor management created **debt crises**. Debt repayments consume a large share of export earnings — money that could fund schools, hospitals and infrastructure instead goes to creditors.",
          },
          {
            heading: "Debt relief",
            body: "**Debt relief** cancels or reduces debt — freeing resources for development. The **HIPC initiative** (Heavily Indebted Poor Countries) cancelled billions for the poorest nations. **Debt-for-nature swaps** forgive debt in exchange for conservation. Critics argue relief rewards bad governance; supporters say it breaks the debt trap.",
          },
          {
            heading: "Other development finance",
            body: "**Microfinance** — small loans to entrepreneurs. **Fair trade** — guaranteed prices for producers. **Social enterprise and impact investing** — businesses with social goals. **Remittances** — often the largest private flow to developing countries.",
          },
        ],
        keyFormulas: [
          { name: "Debt trap", statement: "Repayments exceed capacity → must borrow more" },
          { name: "HIPC", statement: "Heavily Indebted Poor Countries debt relief initiative" },
          { name: "Remittances", statement: "Money sent home by migrant workers" },
        ],
        workedExample: {
          problem: "Country D spends 40% of export earnings on debt repayments. What is the opportunity cost?",
          solution: "40% of export earnings cannot fund health, education or infrastructure — the debt burden crowds out development spending.",
        },
      },
      questions: [
        {
          id: "ecn10-u6-debt-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is debt relief?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Borrowing more money"
                    },
                    {
                              "id": "b",
                              "text": "Cancelling or reducing a country's debt"
                    },
                    {
                              "id": "c",
                              "text": "Paying interest on time"
                    },
                    {
                              "id": "d",
                              "text": "A type of foreign aid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Debt relief",
                              "statement": "Cancelling or reducing debt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Debt relief = forgiveness or restructuring of debt.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Cancelling or reducing debt",
          "commonErrors": [
                    "Confusing with debt restructuring."
          ]
},
        },
        {
          id: "ecn10-u6-debt-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain how heavy debt burdens affect a developing country's development.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Debt burden",
                              "statement": "Repayments crowd out development spending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Debt repayments consume export earnings needed for imports.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Less money available for health, education, infrastructure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "May need to borrow more — the debt trap deepens.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Repayments crowd out development spending → debt trap.",
          "commonErrors": [
                    "Ignoring opportunity cost."
          ]
},
        },
        {
          id: "ecn10-u6-debt-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two arguments for and two arguments against debt relief for poor countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Debt relief debate",
                              "statement": "Frees resources vs rewards bad governance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For: frees resources for health, education, infrastructure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "For: breaks the debt trap — enables growth.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Against: may reward corrupt or reckless governments.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Against: reduces incentive to manage finances prudently.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "For: resources, growth. Against: rewards bad governance, weakens discipline.",
          "commonErrors": [
                    "Only one side of the debate."
          ]
},
        },
        {
          id: "ecn10-u6-debt-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A heavily indebted poor country spends 45% of government revenue on debt repayments.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two consequences of this for the country's population.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how debt relief could change the situation.",
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
                              "name": "Debt burden",
                              "statement": "Repayments crowd out essential spending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Less spending on health and education — worse services.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Less infrastructure investment — slower growth.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Cancelled debt frees revenue for services and investment.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Breaks the debt trap — country can invest in growth.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) worse services, slower growth (b) frees resources, breaks trap",
          "commonErrors": [
                    "Not linking repayments to opportunity cost."
          ]
},
        },
        {
          id: "ecn10-u6-debt-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Remittances to a developing country exceed its foreign aid receipts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons remittances might be more effective for development than aid.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one reason remittances might not reduce poverty.",
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
                              "name": "Remittances",
                              "statement": "Private transfers directly to households."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Go directly to families — bypass corrupt governments.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Spent on health, education, housing — immediate welfare gains.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Remittances can reduce work incentives — 'Dutch disease' of labour.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Dependence on migrants abroad — vulnerable to their job losses.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) direct to families, welfare spending (b) work disincentive, dependence",
          "commonErrors": [
                    "Assuming remittances are pure benefit."
          ]
},
        },
        {
          id: "ecn10-u6-debt-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The international community debates debt relief for the world's poorest countries.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two arguments in favour of debt relief.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two arguments against debt relief.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the case for debt relief.",
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
                              "name": "Debt relief debate",
                              "statement": "Frees resources vs moral hazard."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Frees resources for health, education and infrastructure.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Breaks the debt trap — enables long-term growth.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Rewards poor governance — moral hazard for future borrowing.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Creditor nations lose money — unfair to those who repaid.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Relief with conditions is justified — unconditional relief risks repeat crises.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) resources, growth (b) moral hazard, unfairness (c) conditional relief justified",
          "commonErrors": [
                    "No balanced evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u6-debt-notes",
      title: "Aid and development finance — notes",
      summary: "Aid types: bilateral, multilateral, tied, emergency, development; debt relief frees resources but risks moral hazard.",
      sections: [
        { heading: "Key idea", body: "Aid effectiveness depends on targeting, governance and whether it funds investment vs consumption." },
        { heading: "Types", body: "Bilateral (direct), multilateral (via UN/WB), tied (donor goods), emergency (crises), development (long-term)." },
        { heading: "Debt", body: "Heavy debt crowds out development; relief frees resources but needs conditions to prevent repeat." },
      ],
    },
  ],
};
