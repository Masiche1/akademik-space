import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "ecn11-u13-lesson-13-1",
  code: "13-1",
  title: "Demand for and Supply of Labour",
  goal: "I CAN explain the derived demand for labour and the factors determining labour supply.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure", "4EC1: labour markets"],
  
  vocabulary: [
    { term: "Derived demand", definition: "Demand for labour that arises from demand for the goods or services labour produces." },
    { term: "Marginal revenue product (MRP)", definition: "The extra revenue a firm gains from employing one more worker." },
    { term: "Marginal product of labour (MPL)", definition: "The extra output produced by one additional worker." },
    { term: "Labour supply", definition: "The number of workers willing and able to work at each wage rate." },
    { term: "Labour force participation", definition: "The proportion of the working-age population in work or seeking work." },
    { term: "Wage elasticity of labour supply", definition: "Responsiveness of labour supply to a change in the wage rate." },
  ],
  concepts: [
    {
      id: "ecn11-u13-demandlab",
      title: "Derived demand for labour",
      skill: "Explain derived demand and the factors that shift the demand for labour.",
      lesson: {
        sections: [
          {
            heading: "Derived demand and MRP",
            body: "Firms do not demand labour for its own sake — they demand it because labour **produces output** that can be sold. This is **derived demand**: demand for workers depends on demand for the final product. A rise in demand for cars increases demand for car workers.\n\nFirms hire up to the point where the **marginal revenue product (MRP)** of labour equals the wage. MRP = marginal product of labour (MPL) × price of output. If MRP exceeds the wage, hiring another worker adds more revenue than cost, so the firm expands; if MRP falls below the wage, it contracts.",
          },
          {
            heading: "Shifts in labour demand",
            body: "Labour demand rises when: **product demand** rises; **labour productivity** improves (technology, training); the **price of output** rises; or the **cost of substitute inputs** (e.g. machinery) rises. It falls when firms expect weaker sales, when labour becomes more expensive relative to capital, or when production moves abroad. Labour demand is generally **inelastic** in the long run because firms cannot easily substitute machines for people.",
          },
        ],
        keyFormulas: [
          { name: "MRP", statement: "MRP = MPL × price of output" },
          { name: "Hiring rule", statement: "Hire while MRP ≥ wage" },
        ],
        workedExample: {
          problem: "A worker adds 4 units of output per day; each unit sells for £10. The wage is £30/day. Should the firm hire?",
          solution: "MRP = 4 × £10 = £40 > £30 wage — yes, the worker adds more revenue than cost.",
        },
      },
      questions: [
        {
          id: "ecn11-u13-demandlab-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is derived demand for labour?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Demand created by workers' unions"
                    },
                    {
                              "id": "b",
                              "text": "Demand for labour arising from demand for the output it produces"
                    },
                    {
                              "id": "c",
                              "text": "Demand for imported labour"
                    },
                    {
                              "id": "d",
                              "text": "Demand for jobs advertised online"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Derived demand",
                              "statement": "Labour demand comes from output demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Firms hire labour to produce goods/services that are then sold.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** From demand for the output produced",
          "commonErrors": [
                    "Thinking workers are demanded for their own sake."
          ]
},
        },
        {
          id: "ecn11-u13-demandlab-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define the marginal revenue product (MRP) of labour.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MRP",
                              "statement": "Extra revenue from one more worker."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The additional revenue a firm gains by employing one more worker.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "MRP = marginal product of labour × price of output.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Extra revenue from hiring one more worker; MRP = MPL × price.",
          "commonErrors": [
                    "Confusing MRP with the wage."
          ]
},
        },
        {
          id: "ecn11-u13-demandlab-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a rise in consumer demand for smartphones would increase demand for electronics workers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Derived demand",
                              "statement": "Output demand drives labour demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Firms expect to sell more smartphones → need more output.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "To produce more, firms hire additional workers (labour is derived demand).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Labour demand curve shifts right → more workers employed, possibly higher wages.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Higher product demand → higher labour demand for producers.",
          "commonErrors": [
                    "No derived-demand link."
          ]
},
        },
        {
          id: "ecn11-u13-demandlab-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A car firm installs robots that can weld twice as fast as human welders.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the likely effect on demand for human welders.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one factor that might limit the fall in welder employment.",
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
                              "name": "Labour-capital substitution",
                              "statement": "Cheaper/faster machines reduce labour demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Robots raise productivity per unit of capital; human labour becomes relatively more expensive.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Firms substitute capital for labour → demand for human welders falls.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Welders may still be needed for complex/ bespoke work robots cannot do; demand for car output may rise, increasing total labour demand.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) substitution reduces welder demand (b) complementarity or output growth may offset",
          "commonErrors": [
                    "Assuming technology always destroys all jobs."
          ]
},
        },
        {
          id: "ecn11-u13-demandlab-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse how a government's subsidised apprenticeship scheme might affect the demand for and supply of skilled labour.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Skills policy",
                              "statement": "Training affects both sides of the labour market."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Demand side: more skilled workers raise productivity → firms may demand more skilled labour.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Supply side: apprenticeships increase the number of trained workers entering the market.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Net effect on wages is ambiguous — depends on which side shifts more.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "In the long run, better skills can raise productivity and growth.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Raises skilled labour supply and possibly demand; wage effect ambiguous; long-run productivity gain.",
          "commonErrors": [
                    "One-sided analysis (only supply or only demand)."
          ]
},
        },
        {
          id: "ecn11-u13-demandlab-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define derived demand for labour.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State the formula for MRP and explain each term.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain the hiring rule firms use for labour.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Give two factors that increase the demand for labour.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Give one reason labour demand may be price inelastic.",
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
                              "name": "Labour demand",
                              "statement": "Derived demand, MRP, hiring rule, shifts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Labour demand arising from demand for the output produced.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) MRP = MPL × price; MPL = extra output per worker; price = output price.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Hire while MRP ≥ wage; stop when MRP < wage.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) e.g. higher product demand; higher labour productivity.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Hard to substitute capital for labour in the short run; labour is a small share of costs.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "(a) output-driven (b) MRP=MPL×price (c) MRP≥wage (d) demand/productivity (e) substitution limits",
          "commonErrors": [
                    "Confusing MPL and MRP; wrong hiring rule."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u13-supplylab",
      title: "Supply of labour",
      skill: "Explain the determinants of labour supply and its wage elasticity.",
      lesson: {
        sections: [
          {
            heading: "What determines labour supply",
            body: "**Labour supply** is the number of people willing and able to work at each wage. It depends on: **participation** — the share of working-age people in work or seeking it; **demographics** — age structure and population size; **wages and benefits** — higher wages attract workers but may reduce hours (income vs substitution effect); **education/training** — skills affect employability; and **social factors** — culture, childcare availability, discrimination.",
          },
          {
            heading: "Wage elasticity of labour supply",
            body: "If a small wage rise causes a large increase in labour supplied, supply is **elastic** — common where many people are not currently working (e.g. parents re-entering, retirees). If supply barely responds, it is **inelastic** — e.g. for highly specialised professionals or where only few workers have the skills. In the **long run** supply is more elastic because people can retrain and migrate; in the **short run** it is more inelastic.",
          },
        ],
        keyFormulas: [
          { name: "Labour supply", statement: "Workers willing and able to work at each wage" },
          { name: "Elastic supply", statement: "Large change in quantity supplied for a small wage change" },
        ],
        workedExample: {
          problem: "A wage rise in nursing leads many unemployed qualified nurses to apply for posts. Is labour supply elastic or inelastic here?",
          solution: "Elastic — a modest wage rise drew a large increase in quantity supplied because many trained nurses were available.",
        },
      },
      questions: [
        {
          id: "ecn11-u13-supplylab-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does labour supply measure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number of jobs advertised"
                    },
                    {
                              "id": "b",
                              "text": "The number of workers willing and able to work at each wage"
                    },
                    {
                              "id": "c",
                              "text": "The number of unemployed people"
                    },
                    {
                              "id": "d",
                              "text": "Total hours worked in the economy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Labour supply",
                              "statement": "Willing and able workers at each wage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labour supply = workers willing and able to supply labour at each wage rate.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Willing and able workers per wage",
          "commonErrors": [
                    "Confusing supply with demand for labour."
          ]
},
        },
        {
          id: "ecn11-u13-supplylab-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is labour force participation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Participation",
                              "statement": "Share of working-age population in work or seeking work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Proportion of working-age population that is employed or unemployed and seeking work.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Excludes students, retirees, carers not seeking work.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Share of working-age people in work or seeking work.",
          "commonErrors": [
                    "Including all adults regardless of activity."
          ]
},
        },
        {
          id: "ecn11-u13-supplylab-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why labour supply might be elastic for unskilled workers but inelastic for specialist surgeons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Elasticity of labour supply",
                              "statement": "Depends on availability of substitute workers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Many people can do unskilled work → wage rise attracts large numbers → elastic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Few people have surgical qualifications → even high wages cannot quickly expand supply → inelastic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Skills and training take time → specialist supply responds slowly.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Elastic where many can substitute; inelastic where skills are scarce.",
          "commonErrors": [
                    "Ignoring the role of skills/qualifications."
          ]
},
        },
        {
          id: "ecn11-u13-supplylab-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A government introduces subsidised childcare. Analyse the effect on labour supply.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the direct effect on labour supply.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one possible limitation of this policy.",
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
                              "name": "Childcare and labour supply",
                              "statement": "Lower childcare costs raise participation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Parents (especially mothers) previously unable to work can now afford childcare.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Labour supply curve shifts right; participation rises; may increase hours worked.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Cost to government; quality/availability of places may limit effect; some may still choose not to work.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) raises participation/supply (b) cost and availability limits",
          "commonErrors": [
                    "Ignoring the cost side."
          ]
},
        },
        {
          id: "ecn11-u13-supplylab-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss whether a higher minimum wage would increase or decrease the quantity of labour supplied.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Wage and labour supply",
                              "statement": "Higher wages can attract workers but also reduce hours (income vs substitution effects)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitution effect: higher wage makes work more attractive vs leisure → more labour supplied.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Income effect: higher wage lets workers earn the same income in fewer hours → less labour supplied.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Net effect is ambiguous — depends on which effect dominates for the group.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "For low-wage workers the substitution effect often dominates → supply may rise slightly.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Ambiguous: substitution effect raises supply, income effect lowers it; net depends on context.",
          "commonErrors": [
                    "One-sided answer; ignoring income/substitution effects."
          ]
},
        },
        {
          id: "ecn11-u13-supplylab-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define labour supply.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Name three factors that affect labour supply.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain what is meant by wage elasticity of labour supply.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Give one reason labour supply is usually more elastic in the long run.",
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
                              "name": "Labour supply",
                              "statement": "Definition, determinants, elasticity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Workers willing and able to work at each wage.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) e.g. wages, demographics, education/training, childcare, benefits.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Responsiveness of quantity of labour supplied to a change in wage.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) People can retrain, migrate or change careers over time.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) willing+able (b) wages/demographics/skills (c) wage responsiveness (d) retraining/migration",
          "commonErrors": [
                    "Confusing labour supply with labour demand."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u13-demandlab-notes",
      title: "Labour demand and supply — notes",
      summary: "Labour demand is derived from output demand; MRP decides hiring. Supply depends on participation, skills and wages.",
      sections: [
        { heading: "Derived demand", body: "Firms hire labour to produce output; MRP = MPL × price; hire while MRP ≥ wage." },
        { heading: "Shifts", body: "Product demand, productivity, output price and capital costs shift labour demand." },
        { heading: "Supply side", body: "Participation, demographics, skills, childcare and benefits determine supply; elasticity depends on substitutes." },
      ],
    },
  ],
};
