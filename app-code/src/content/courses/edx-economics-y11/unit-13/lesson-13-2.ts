import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "ecn11-u13-lesson-13-2",
  code: "13-2",
  title: "Wage Determination",
  goal: "I CAN explain how wages are determined in competitive labour markets and analyse wage differentials.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure", "4EC1: labour markets"],
  
  vocabulary: [
    { term: "Wage rate", definition: "The price of labour — payment per hour or per unit of work." },
    { term: "Equilibrium wage", definition: "The wage at which the quantity of labour demanded equals the quantity supplied." },
    { term: "Wage differential", definition: "A difference in pay between jobs or workers." },
    { term: "Compensating differential", definition: "Extra pay for unpleasant or risky working conditions." },
    { term: "Efficiency wage", definition: "A wage above equilibrium paid to motivate workers and reduce turnover." },
    { term: "Monopsony", definition: "A labour market with a single dominant employer." },
  ],
  concepts: [
    {
      id: "ecn11-u13-wagedet",
      title: "Wage determination in competitive markets",
      skill: "Explain how wages are set where many firms compete for workers.",
      lesson: {
        sections: [
          {
            heading: "The competitive labour market",
            body: "With many firms and many workers, the wage is set by **supply and demand** for labour — just like any market. The **equilibrium wage** occurs where labour demanded equals labour supplied. If wages are above equilibrium, labour supply exceeds demand → unemployment. If below, demand exceeds supply → labour shortages and upward wage pressure. Firms hire until MRP = wage.",
          },
          {
            heading: "Shifts in labour market equilibrium",
            body: "A rise in **labour demand** (stronger product demand, higher productivity) shifts demand right → higher wages and more employment. A rise in **labour supply** (more workers, immigration, higher participation) shifts supply right → lower wages, more employment. A fall in supply (retirement, emigration, reduced training) shifts supply left → higher wages, less employment. Policy like the minimum wage can push wages above the free-market equilibrium.",
          },
        ],
        keyFormulas: [
          { name: "Equilibrium", statement: "Quantity of labour demanded = quantity supplied" },
          { name: "Hiring rule", statement: "MRP = wage at profit-maximising employment" },
        ],
        workedExample: {
          problem: "Demand for warehouse workers rises while supply stays constant. What happens to wages and employment?",
          solution: "Demand shifts right → equilibrium wage rises and equilibrium employment increases.",
        },
      },
      questions: [
        {
          id: "ecn11-u13-wagedet-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a competitive labour market, what determines the wage rate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Government decree"
                    },
                    {
                              "id": "b",
                              "text": "Supply and demand for labour"
                    },
                    {
                              "id": "c",
                              "text": "The firm's profit target"
                    },
                    {
                              "id": "d",
                              "text": "Workers' union demands"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Wage determination",
                              "statement": "Supply and demand for labour set wages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Like other markets, the labour market price (wage) is set by supply and demand.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Supply and demand for labour",
          "commonErrors": [
                    "Ignoring the market mechanism."
          ]
},
        },
        {
          id: "ecn11-u13-wagedet-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the equilibrium wage in a labour market?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Equilibrium wage",
                              "statement": "Wage where labour demanded equals labour supplied."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The wage at which quantity of labour demanded equals quantity supplied.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "No labour shortage or unemployment at this wage.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Wage where labour demand equals labour supply.",
          "commonErrors": [
                    "Confusing with minimum wage."
          ]
},
        },
        {
          id: "ecn11-u13-wagedet-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens to wages and employment if demand for labour increases while supply stays the same.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Labour market shifts",
                              "statement": "Demand increase → higher wage, higher employment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Demand curve shifts right.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "New equilibrium: higher wage rate.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "New equilibrium: more workers employed.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Wage rises and employment rises.",
          "commonErrors": [
                    "Wrong direction of shift."
          ]
},
        },
        {
          id: "ecn11-u13-wagedet-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A country's population ages: fewer young workers enter the labour market while demand for care workers rises.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the effect on the equilibrium wage for care workers.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one way the government could increase labour supply.",
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
                              "name": "Labour market equilibrium",
                              "statement": "Demand up + supply down → wage pressure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Demand for care workers rises (right shift); supply of young workers falls (left shift).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Both shifts push the equilibrium wage up; employment change is ambiguous.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) e.g. raise retirement age, subsidise training, encourage participation of older workers or immigrants.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) wage rises; employment ambiguous (b) raise participation/retraining",
          "commonErrors": [
                    "Ignoring one of the two shifts."
          ]
},
        },
        {
          id: "ecn11-u13-wagedet-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse the likely effects of a large inflow of migrant workers on wages and employment in a low-skilled sector.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Labour supply shock",
                              "statement": "More workers → supply right → wage pressure down, employment up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labour supply curve shifts right (more workers available).",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Equilibrium wage falls; quantity of labour employed rises.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Existing low-skilled workers may see wage cuts or reduced hours — possible job displacement.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Effects depend on whether migrants fill vacancies or compete directly; demand may also rise if migrants consume goods/services.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Supply up → wages down, employment up; possible wage pressure on incumbents.",
          "commonErrors": [
                    "One-sided answer; ignoring demand-side effects."
          ]
},
        },
        {
          id: "ecn11-u13-wagedet-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define equilibrium wage.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain how firms decide how many workers to hire.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State two factors that shift labour demand.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State two factors that shift labour supply.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain why wages above equilibrium can cause unemployment.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Wage determination",
                              "statement": "Equilibrium, hiring, shifts, unemployment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Wage where labour demanded = labour supplied.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Hire until MRP = wage; stop when MRP < wage.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) e.g. product demand, productivity, output price, capital costs.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) e.g. wages offered, demographics, participation, training, migration.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Wage floor above equilibrium → labour supplied exceeds demanded → surplus of workers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "e"
                    }
          ],
          "finalAnswer": "(a) D=S (b) MRP=wage (c) demand factors (d) supply factors (e) surplus labour",
          "commonErrors": [
                    "Confusing shifts of demand and supply."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u13-wagefail",
      title: "Wage differentials and labour market failure",
      skill: "Explain why wages differ between workers and jobs, and identify labour market failures.",
      lesson: {
        sections: [
          {
            heading: "Why wages differ",
            body: "Wage differentials arise from: **human capital** — education, skills and experience raise productivity and pay; **discrimination** — unequal pay by gender, ethnicity or age; **geography** — wages differ by region and cost of living; **job characteristics** — unpleasant or risky work commands a **compensating differential**; **bargaining power** — unions or scarce skills raise wages; and **monopsony** — a single dominant employer can pay below competitive wages.",
          },
          {
            heading: "Labour market failures",
            body: "Labour markets can fail like other markets. **Monopsony power** lets one employer restrict wages below the competitive level. **Information failure** means workers may not know market rates or face hidden discrimination. **Discrimination** creates unjustified pay gaps unrelated to productivity. **Efficiency wages** — paying above equilibrium — can raise motivation and reduce turnover, but may also price workers out of jobs. Some differentials are economically justified (skills); others reflect market failure or unfairness.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "Miners earn more than office workers. Is this always unfair?",
          solution: "Not necessarily — mining may involve danger and discomfort, so a compensating differential is economically justified; but if the gap exceeds risk compensation, other factors (skills, unions) also matter.",
        },
      },
      questions: [
        {
          id: "ecn11-u13-wagefail-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a wage differential?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The difference between gross and net pay"
                    },
                    {
                              "id": "b",
                              "text": "A difference in pay between jobs or workers"
                    },
                    {
                              "id": "c",
                              "text": "The gap between wages and profits"
                    },
                    {
                              "id": "d",
                              "text": "Pay differences caused only by unions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Wage differential",
                              "statement": "Pay differences between jobs/workers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wage differentials are differences in pay rates between occupations, regions or groups.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Pay differences between jobs or workers",
          "commonErrors": [
                    "Confusing with tax deductions."
          ]
},
        },
        {
          id: "ecn11-u13-wagefail-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a compensating differential?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Compensating differential",
                              "statement": "Extra pay for unpleasant/risky conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Additional pay offered to compensate for unpleasant, dangerous or inconvenient work.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "e.g. mining, offshore work, night shifts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Extra pay for risky or unpleasant working conditions.",
          "commonErrors": [
                    "Confusing with efficiency wage."
          ]
},
        },
        {
          id: "ecn11-u13-wagefail-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a software engineer typically earns more than a retail assistant.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Wage differentials",
                              "statement": "Pay reflects productivity, skills and demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Software engineering requires scarce, high human capital (degree, coding skills).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Engineers' MRP is high — they create valuable output firms pay for.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Demand for engineers exceeds supply of qualified people → higher equilibrium wage.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Scarce skills → high MRP → high demand vs limited supply → higher wage.",
          "commonErrors": [
                    "No economic mechanism."
          ]
},
        },
        {
          id: "ecn11-u13-wagefail-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A town has only one large employer. Workers report wages below what similar towns pay.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the labour market problem.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why wages are below competitive levels.",
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
                              "name": "Monopsony",
                              "statement": "Single employer restricts wages below competitive level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Monopsony — one dominant employer in the local labour market.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) With one buyer of labour, the firm faces the labour supply curve — hiring more raises the wage for all workers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Profit-maximising monopsonist hires where MRP = marginal cost of labour (above the wage) → wage below competitive level.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) monopsony (b) single employer pays below competitive wage to maximise profit",
          "commonErrors": [
                    "Calling it a monopoly without explaining wage-setting."
          ]
},
        },
        {
          id: "ecn11-u13-wagefail-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether all wage differentials are economically justified.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Justified vs unjustified differentials",
                              "statement": "Some reflect productivity; others reflect failure or discrimination."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Justified: differentials for skills, experience, productivity, compensating differentials for risk/discomfort.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Unjustified: discrimination (gender, ethnicity), monopsony power, information failure about market rates.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Justified differentials reward factors that raise output; unjustified ones reduce efficiency and fairness.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Policy (equal pay laws, minimum wage, unionisation) can reduce unjustified gaps.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Some differentials reflect productivity/compensation; others reflect discrimination or market power.",
          "commonErrors": [
                    "All-or-nothing answer."
          ]
},
        },
        {
          id: "ecn11-u13-wagefail-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define wage differential.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Give two economically justified reasons for wage differentials.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Define monopsony and explain its effect on wages.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain what discrimination in the labour market means.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Give one policy to reduce unjustified wage gaps.",
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
                              "name": "Wage differentials",
                              "statement": "Definitions, justification, market failure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Difference in pay between jobs or workers.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) e.g. skills/human capital; compensating differentials for risk or unpleasant work.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Single dominant employer; pays below competitive wage to maximise profit.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Unequal pay/hiring based on characteristics unrelated to productivity (gender, ethnicity, age).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) e.g. equal pay legislation, minimum wage, anti-discrimination enforcement.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "(a) pay gaps (b) skills/compensation (c) single employer→low wage (d) unfair pay (e) equal pay law",
          "commonErrors": [
                    "Treating all differentials as unfair."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u13-wagedet-notes",
      title: "Wage determination — notes",
      summary: "Competitive labour markets set wages by supply and demand; differentials reflect skills, risk, geography or market failure.",
      sections: [
        { heading: "Equilibrium", body: "Wage where labour demanded = supplied; firms hire until MRP = wage." },
        { heading: "Shifts", body: "Product demand, productivity, participation, migration and demographics shift the equilibrium." },
        { heading: "Differentials", body: "Skills, compensating differentials justify some gaps; discrimination and monopsony do not." },
      ],
    },
  ],
};
