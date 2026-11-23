import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ecn10-u5-lesson-5-2",
  code: "5-2",
  title: "Causes and Consequences of Poverty",
  goal: "I CAN explain why poverty persists and evaluate its consequences for individuals and the economy.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Government and the Economy: poverty"],
  
  vocabulary: [
    { term: "Vicious circle of poverty", definition: "A self-reinforcing cycle where poverty causes conditions that reproduce poverty." },
    { term: "Poverty trap", definition: "A situation where low income prevents escape from poverty." },
    { term: "Human capital", definition: "The skills, education and health of workers that determine productivity." },
    { term: "Social exclusion", definition: "Being unable to participate fully in the economic, social and political life of society." },
    { term: "Subsistence", definition: "Producing barely enough to survive, with nothing left over for investment." },
  ],
  concepts: [
    {
      id: "ecn10-u5-povc",
      title: "Causes of Poverty",
      skill: "Explain how poverty is caused and why it can persist across generations.",
      lesson: {
        sections: [
          {
            heading: "The vicious circle of poverty",
            body: "Poverty is self-reinforcing: **low income** → cannot afford **education, health or capital** → low **productivity** → low income again. Poor households spend most income on survival, leaving nothing for investment. This is the **vicious circle of poverty**.",
          },
          {
            heading: "Structural causes",
            body: "Beyond individual circumstances: **low agricultural productivity**, **lack of infrastructure**, **weak institutions and corruption**, **conflict**, **overpopulation** relative to resources, **unfair trade terms**, and **lack of access to credit** keep poverty entrenched.",
          },
          {
            heading: "Poverty traps",
            body: "A **poverty trap** is a threshold below which escape is very difficult: low income → no investment → low growth → low income. Breaking the trap usually requires external help — aid, remittances, or a big push in education and infrastructure.",
          },
        ],
        keyFormulas: [
          { name: "Vicious circle", statement: "Low income → low investment → low productivity → low income" },
          { name: "Poverty trap", statement: "Below a threshold, escape requires external intervention" },
        ],
        workedExample: {
          problem: "A farming family earns barely enough to eat. Why might they remain poor for generations?",
          solution: "No surplus for seeds, tools or schooling → productivity stays low → income stays at subsistence → the vicious circle continues.",
        },
      },
      questions: [
        {
          id: "ecn10-u5-povc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the vicious circle of poverty?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Poverty caused only by bad luck"
                    },
                    {
                              "id": "b",
                              "text": "A self-reinforcing cycle where poverty reproduces poverty"
                    },
                    {
                              "id": "c",
                              "text": "Poverty that ends after one year"
                    },
                    {
                              "id": "d",
                              "text": "Wealth passing from parents to children"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vicious circle",
                              "statement": "Poverty reproduces itself through low investment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The circle links low income to low investment to low income.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Self-reinforcing cycle",
          "commonErrors": [
                    "Confusing with a poverty trap."
          ]
},
        },
        {
          id: "ecn10-u5-povc-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the link between low income and low investment in the vicious circle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Vicious circle",
                              "statement": "Low income leaves nothing for investment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poor households spend most income on basic survival.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Little is left for education, health or capital goods.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Low investment keeps productivity and income low — the cycle continues.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Low income → no surplus → no investment → low productivity → low income.",
          "commonErrors": [
                    "Missing the 'no surplus' step."
          ]
},
        },
        {
          id: "ecn10-u5-povc-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give four structural causes of persistent poverty in developing countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Structural causes",
                              "statement": "Low productivity, weak institutions, conflict, poor infrastructure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Low agricultural productivity and dependence on primary products.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Weak institutions, corruption and poor governance.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Conflict and political instability.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lack of infrastructure, credit and market access.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Low productivity, weak institutions, conflict, poor infrastructure/credit.",
          "commonErrors": [
                    "Blaming only individual behaviour."
          ]
},
        },
        {
          id: "ecn10-u5-povc-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country has widespread absolute poverty and low investment in education.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how low education investment reinforces poverty.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how low education investment affects the wider economy.",
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
                              "name": "Human capital",
                              "statement": "Education builds skills and productivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Poor families cannot afford schooling → children stay uneducated.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Low skills → low productivity → low income → poverty persists.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Low-skilled labour limits industrialisation and growth.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Weak human capital reduces the economy's long-term capacity.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) poverty → no schooling → low skills → low income (b) limits growth and industrialisation",
          "commonErrors": [
                    "Ignoring the intergenerational link."
          ]
},
        },
        {
          id: "ecn10-u5-povc-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Microfinance institutions lend small loans to poor households.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how microfinance could help break the vicious circle.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one reason microfinance may fail to reduce poverty.",
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
                              "name": "Microfinance",
                              "statement": "Small loans enable investment by the poor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Loans fund tools, stock or skills that raise productivity.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Higher income allows investment in health and education.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Loans may be used for consumption, not investment.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) High interest rates can deepen debt for the poorest.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) enables investment → productivity → income (b) misuse or debt risk",
          "commonErrors": [
                    "Assuming loans automatically end poverty."
          ]
},
        },
        {
          id: "ecn10-u5-povc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A region has been stuck in poverty for three generations.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the vicious circle of poverty using this region's example.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways the cycle could be broken.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate which intervention is likely to be most effective.",
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
                              "name": "Breaking poverty",
                              "statement": "Investment in human and physical capital plus external support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Low income → no surplus → no schooling or capital → low productivity → low income.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Each generation inherits poverty, not just poverty itself.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Aid or investment in education and health builds human capital.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Infrastructure and credit enable investment and markets.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Combined 'big push' is most effective — single interventions are often insufficient.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) self-reinforcing low investment (b) human capital, infrastructure/credit (c) combined intervention best",
          "commonErrors": [
                    "One-sided solution without evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u5-povcon",
      title: "Consequences of Poverty",
      skill: "Evaluate the effects of poverty on individuals, society and the economy.",
      lesson: {
        sections: [
          {
            heading: "Individual consequences",
            body: "Poverty leads to **malnutrition and poor health**, **low education attainment** (children leave school to work), **poor housing**, **stress and mental health problems**, and **social exclusion** — inability to participate in normal society.",
          },
          {
            heading: "Economic consequences",
            body: "For the economy: **low productivity** (sick, unskilled workers), **low consumer demand**, **low tax revenue**, **brain drain** (skilled workers emigrate), and a **larger informal economy**. Poverty also reduces **human capital formation** for the future.",
          },
          {
            heading: "Social consequences",
            body: "Higher **crime** (especially property crime), **social unrest**, **poor health outcomes**, **lower life expectancy**, and **intergenerational poverty** — children of the poor are more likely to be poor as adults.",
          },
        ],
        keyFormulas: [
          { name: "Human capital", statement: "Skills and health of workers → productivity" },
          { name: "Social exclusion", statement: "Inability to participate in society's normal life" },
        ],
        workedExample: {
          problem: "A country has 30% of children leaving school early due to poverty. What are two long-term economic effects?",
          solution: "Lower skilled workforce → lower productivity and growth; smaller tax base → less revenue for public services.",
        },
      },
      questions: [
        {
          id: "ecn10-u5-povcon-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is social exclusion?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Being unemployed for one month"
                    },
                    {
                              "id": "b",
                              "text": "Inability to participate fully in society's normal life"
                    },
                    {
                              "id": "c",
                              "text": "Living below the poverty line"
                    },
                    {
                              "id": "d",
                              "text": "Having low income"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Social exclusion",
                              "statement": "Cannot participate fully in society."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Social exclusion = marginalisation from economic and social life.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Inability to participate fully",
          "commonErrors": [
                    "Confusing with poverty itself."
          ]
},
        },
        {
          id: "ecn10-u5-povcon-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three individual consequences of poverty.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Poverty effects",
                              "statement": "Health, education, housing, stress."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poor health — malnutrition, lack of healthcare.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Low education — children leave school early.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Poor housing and stress/mental health problems.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Poor health, low education, poor housing/stress.",
          "commonErrors": [
                    "Listing economic rather than individual effects."
          ]
},
        },
        {
          id: "ecn10-u5-povcon-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two economic consequences of widespread poverty.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Economic effects",
                              "statement": "Low productivity, weak demand, low tax base."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Low productivity — sick and unskilled workers produce less.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Low consumer demand — poor households cannot buy much.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Low tax revenue — fewer taxpayers and lower incomes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Brain drain — skilled workers leave for better opportunities.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Low productivity, weak demand, low tax revenue, brain drain.",
          "commonErrors": [
                    "Only listing social effects."
          ]
},
        },
        {
          id: "ecn10-u5-povcon-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "High poverty is linked to higher crime rates.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways poverty can lead to higher crime.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one way crime can reinforce poverty.",
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
                              "name": "Poverty and crime",
                              "statement": "Desperation and lack of opportunity drive crime; crime destroys opportunity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Desperation — theft to meet basic needs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Lack of legitimate opportunities — unemployment and low wages.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Weak social controls in deprived areas.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Crime deters investment and jobs in the area.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Incarceration removes workers and breaks families.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) desperation, no opportunities (b) deters investment, removes workers",
          "commonErrors": [
                    "One-directional analysis only."
          ]
},
        },
        {
          id: "ecn10-u5-povcon-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A country has high poverty, low education and a large informal economy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how these three features reinforce each other.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one long-term consequence for the country's development.",
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
                              "name": "Poverty cycle",
                              "statement": "Poverty, low skills and informality form a self-reinforcing system."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Poverty → children leave school → low skills → informal low-paid work.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Informal work earns little and pays no tax → no revenue for schools → cycle continues.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The country cannot build the human capital needed for industrialisation.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Growth remains slow and dependent on primary production.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) self-reinforcing poverty-skills-informality cycle (b) slow, primary-dependent development",
          "commonErrors": [
                    "Treating the features in isolation."
          ]
},
        },
        {
          id: "ecn10-u5-povcon-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A developing country wants to reduce the economic consequences of poverty.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two economic consequences of poverty that policy could address.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two policies that could address them.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the likely effectiveness of these policies.",
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
                              "name": "Poverty policy",
                              "statement": "Education and health investment raise productivity; cash transfers raise demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Low productivity from poor health and skills.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Weak consumer demand from low incomes.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Investment in education and healthcare builds human capital.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Cash transfers or benefits raise poor households' spending.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Effective but slow — results take years; requires sustained funding.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) productivity, demand (b) human capital, transfers (c) effective but slow",
          "commonErrors": [
                    "No evaluation of time lags and costs."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u5-povc-notes",
      title: "Causes and consequences of poverty — notes",
      summary: "The vicious circle links low income to low investment; poverty harms health, education, productivity and social cohesion.",
      sections: [
        { heading: "Key idea", body: "Poverty reproduces itself: low income → no investment → low productivity → low income." },
        { heading: "Causes", body: "Structural: low productivity, weak institutions, conflict, poor infrastructure, lack of credit." },
        { heading: "Consequences", body: "Individual: health, education. Economic: productivity, demand, tax base. Social: crime, exclusion." },
      ],
    },
  ],
};
