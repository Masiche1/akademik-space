import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ecn10-u8-lesson-8-3",
  code: "8-3",
  title: "Unemployment and Labour Market Policy",
  goal: "I CAN classify unemployment, explain its costs and evaluate labour market policies.",
  standards: ["Edexcel IGCSE Economics 4EC1/01 — The labour market: unemployment and policy"],
  
  vocabulary: [
    { term: "Unemployment rate", definition: "Unemployed people as a percentage of the labour force." },
    { term: "Cyclical unemployment", definition: "Unemployment caused by falls in aggregate demand." },
    { term: "Structural unemployment", definition: "Unemployment from changes in the structure of the economy or skills mismatch." },
    { term: "Frictional unemployment", definition: "Short-term unemployment while people search or move between jobs." },
    { term: "Seasonal unemployment", definition: "Unemployment that varies with seasons or holiday periods." },
    { term: "Supply-side policy", definition: "Policies improving the efficiency of labour and product markets." },
  ],
  concepts: [
    {
      id: "ecn10-u8-unemployment",
      title: "Types and Costs of Unemployment",
      skill: "Calculate and classify unemployment and explain its economic and social costs.",
      lesson: {
        sections: [
          {
            heading: "Measuring unemployment",
            body: "The **unemployment rate** is unemployed people ÷ labour force × 100. The labour force is employed plus unemployed people actively seeking work. People not seeking work or unable to work are not counted as unemployed.",
          },
          {
            heading: "Types and costs",
            body: "**Cyclical** unemployment rises in recessions when demand falls. **Structural** unemployment comes from skills mismatch or declining industries. **Frictional** unemployment is short-term job search. **Seasonal** unemployment varies with demand cycles.\n\nCosts include lost output, lower incomes, higher government spending on benefits and wider social problems.",
          },
        ],
        keyFormulas: [
          { name: "Unemployment rate", statement: "Unemployed ÷ labour force × 100." },
          { name: "Cyclical unemployment", statement: "Caused by weak aggregate demand." },
          { name: "Structural unemployment", statement: "Caused by skills or industry mismatch." },
        ],
        workedExample: {
          problem: "A country has 25 million in the labour force and 2 million unemployed. Calculate the unemployment rate.",
          solution: "Unemployment rate = 2 ÷ 25 × 100 = 8%.",
        },
      },
      questions: [
        {
          id: "ecn10-u8-unemployment-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the unemployment rate formula?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unemployed ÷ working-age population × 100"
                    },
                    {
                              "id": "b",
                              "text": "Unemployed ÷ labour force × 100"
                    },
                    {
                              "id": "c",
                              "text": "Employed ÷ labour force × 100"
                    },
                    {
                              "id": "d",
                              "text": "Unemployed ÷ employed × 100"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Unemployment rate",
                              "statement": "Unemployed ÷ labour force × 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rate uses unemployed as a share of labour force.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Unemployed ÷ labour force × 100"
},
        },
        {
          id: "ecn10-u8-unemployment-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Labour force is 20 million and unemployed is 2 million. Calculate the unemployment rate.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Unemployment rate",
                              "answer": 10,
                              "unit": "%"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Unemployment rate",
                              "statement": "Unemployed ÷ labour force × 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use unemployed divided by labour force.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "2 ÷ 20 = 0.10.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Unemployment rate = 10%.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "10%"
},
        },
        {
          id: "ecn10-u8-unemployment-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish cyclical and structural unemployment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Cyclical vs structural",
                              "statement": "Demand downturn versus skills/industry mismatch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cyclical unemployment is caused by falls in aggregate demand.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It often falls when demand recovers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Structural unemployment comes from skills mismatch or declining industries.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Comparison is clear and accurate.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Cyclical = demand fall; structural = skills/industry mismatch."
},
        },
        {
          id: "ecn10-u8-unemployment-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A recession causes factory closures across a region.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the likely type of unemployment.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two costs of the unemployment.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cyclical unemployment",
                              "statement": "Unemployment from weak demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Cyclical unemployment — demand for goods and labour falls.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Lost output and incomes reduce living standards.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Government benefit spending rises and skills may deteriorate.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) cyclical (b) lost output/incomes and higher benefits"
},
        },
        {
          id: "ecn10-u8-unemployment-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A coal-mining town loses jobs as mines close, but many workers lack digital skills.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the type of unemployment.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why retraining may be needed.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain one limitation of retraining.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Structural unemployment",
                              "statement": "Mismatch between workers' skills and available jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Structural unemployment — industry decline plus skills mismatch.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Retraining can move workers into growing sectors.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Limitation: training takes time, costs money and jobs may not exist locally.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) structural (b) retraining helps transition (c) time/cost/location limits"
},
        },
        {
          id: "ecn10-u8-unemployment-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A country has rising unemployment after a recession and an ageing population.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate unemployment rate if labour force is 40 million and unemployed is 4 million.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how cyclical and structural unemployment may both be present.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two social costs of unemployment.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate one policy to reduce unemployment.",
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
                              "name": "Unemployment analysis",
                              "statement": "Classify causes, measure costs and choose policy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Unemployment rate = 4 ÷ 40 × 100 = 10%.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Cyclical unemployment follows weak demand; structural follows skills/industry change.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Both can occur if recession hits declining industries.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Social costs: poverty, poorer health and family stress.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Demand stimulus helps cyclical unemployment; training helps structural, but each has limits.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) 10% (b) cyclical+structural possible (c) poverty/health/family (d) policy depends on cause",
          "commonErrors": [
                    "Wrong formula.",
                    "One type only.",
                    "No evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u8-labour-policy",
      title: "Labour Market Policies",
      skill: "Evaluate policies to reduce unemployment and improve labour market flexibility.",
      lesson: {
        sections: [
          {
            heading: "Demand and supply policies",
            body: "**Demand-side policies** such as government spending or lower interest rates can raise aggregate demand and reduce cyclical unemployment. **Supply-side policies** improve labour market efficiency through education, training, flexible contracts, migration and benefit/tax reforms.",
          },
          {
            heading: "Evaluation",
            body: "Policies can have trade-offs: training takes time, generous benefits may reduce work incentives, immigration can cause short-term pressures, and minimum wages may affect employment. Effective policy depends on the cause of unemployment and labour market conditions.",
          },
        ],
        keyFormulas: [
          { name: "Demand-side policy", statement: "Raises aggregate demand to cut cyclical unemployment." },
          { name: "Supply-side policy", statement: "Improves skills, flexibility and incentives." },
          { name: "Policy evaluation", statement: "Weigh benefits against costs and time lags." },
        ],
        workedExample: {
          problem: "Structural unemployment is rising because workers lack digital skills. Which policy is most appropriate?",
          solution: "Education and training subsidies are most appropriate because they address the skills mismatch.",
        },
      },
      questions: [
        {
          id: "ecn10-u8-policy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which policy is most likely to reduce cyclical unemployment?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Higher interest rates"
                    },
                    {
                              "id": "b",
                              "text": "Government spending to boost demand"
                    },
                    {
                              "id": "c",
                              "text": "Reducing education spending"
                    },
                    {
                              "id": "d",
                              "text": "Increasing taxes on work"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Demand-side policy",
                              "statement": "Boost demand to reduce cyclical unemployment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher demand raises output and hiring.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Government spending to boost demand"
},
        },
        {
          id: "ecn10-u8-policy-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define supply-side policy and give one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Supply-side policy",
                              "statement": "Improves efficiency of markets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Definition correct.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: training, flexible labour laws or benefit reform.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example linked to improved efficiency.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Policy improving market efficiency, e.g. training or flexible contracts."
},
        },
        {
          id: "ecn10-u8-policy-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two supply-side policies that could reduce structural unemployment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Supply-side policy",
                              "statement": "Skills and flexibility reduce structural unemployment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Education and training can match workers to available jobs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Apprenticeships and employer partnerships build relevant skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Flexible labour laws can make hiring easier.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both policies address skills mismatch.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Training/education and flexible labour markets reduce structural unemployment."
},
        },
        {
          id: "ecn10-u8-policy-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A government offers retraining grants to workers in declining industries.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one benefit of the policy.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one limitation.",
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
                              "name": "Retraining policy",
                              "statement": "Addresses skills mismatch but takes time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Grants help workers gain skills for growing sectors, reducing structural unemployment.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Limitation: training takes time and may not match local job vacancies.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Limitation: some workers may struggle to complete training or relocate.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Fiscal cost and uncertain outcomes are drawbacks.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) reduces skills mismatch (b) time, cost, location and completion limits"
},
        },
        {
          id: "ecn10-u8-policy-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country debates generous unemployment benefits versus strict job-search requirements.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one argument for generous benefits.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one argument for strict requirements.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest a balanced policy.",
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
                              "name": "Benefit policy",
                              "statement": "Support income but preserve work incentives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Generous benefits protect living standards while people search or retrain.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Strict requirements can encourage job search and reduce long-term unemployment.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Balanced: time-limited benefits plus training and job-search support.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) income protection (b) work incentives (c) balanced support with conditions"
},
        },
        {
          id: "ecn10-u8-policy-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A country faces both cyclical and structural unemployment.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how demand-side policy could reduce cyclical unemployment.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how supply-side policy could reduce structural unemployment.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain one drawback of using only one policy type.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate a mixed policy approach.",
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
                              "name": "Mixed labour policy",
                              "statement": "Different unemployment types need different policies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Demand stimulus raises aggregate demand, output and hiring.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It mainly helps cyclical unemployment caused by weak demand.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Training, education and flexible markets improve skills and job matching.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) They mainly help structural unemployment from mismatch.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) One policy alone cannot address both demand weakness and skills mismatch.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Mixed approach is more effective but costly and requires coordination.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) demand stimulus (b) training/flexibility (c) one policy insufficient (d) mixed approach best with coordination",
          "commonErrors": [
                    "Same policy for both causes.",
                    "No evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u8-unemployment-policy-notes",
      title: "Unemployment and labour market policy — notes",
      summary: "Classify unemployment by cause; measure with labour force; choose demand-side or supply-side policy accordingly.",
      sections: [
        { heading: "Measurement", body: "Unemployment rate = unemployed ÷ labour force × 100." },
        { heading: "Types", body: "Cyclical = demand fall; structural = skills/industry mismatch; frictional = job search; seasonal = seasonal demand." },
        { heading: "Policy", body: "Demand-side policy helps cyclical unemployment; supply-side policy helps structural unemployment." },
      ],
    },
  ],
};
