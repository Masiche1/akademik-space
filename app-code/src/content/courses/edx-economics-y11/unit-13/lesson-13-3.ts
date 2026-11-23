import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "ecn11-u13-lesson-13-3",
  code: "13-3",
  title: "Minimum Wage, Trade Unions and Policy",
  goal: "I CAN evaluate the effects of minimum wages and trade union activity on labour markets.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure", "4EC1: labour markets and government intervention"],
  
  vocabulary: [
    { term: "Minimum wage", definition: "A legal floor below which wages cannot be paid." },
    { term: "National minimum wage (NMW)", definition: "The statutory minimum hourly rate set by government." },
    { term: "Trade union", definition: "An organisation of workers that negotiates pay and conditions collectively." },
    { term: "Collective bargaining", definition: "Negotiation between employers and unions over pay and conditions." },
    { term: "Strike", definition: "A collective withdrawal of labour to press demands." },
    { term: "Monopsony power", definition: "A dominant employer's ability to set wages below competitive levels." },
  ],
  concepts: [
    {
      id: "ecn11-u13-minwage",
      title: "Minimum wage",
      skill: "Analyse the effects of a minimum wage on employment, wages and poverty.",
      lesson: {
        sections: [
          {
            heading: "How a minimum wage works",
            body: "A **minimum wage** sets a legal floor on pay. If set **below** the equilibrium wage, it has no effect. If set **above** equilibrium, it creates a **surplus of labour**: more workers want jobs at that wage than firms are willing to hire → unemployment among low-skilled workers. However, some evidence suggests small increases above equilibrium may have limited job losses, especially where employers have monopsony power or can raise prices/productivity.",
          },
          {
            heading: "Evaluating the minimum wage",
            body: "**Benefits**: raises incomes of low-paid workers; reduces poverty and inequality; may boost motivation/productivity; counteracts monopsony power. **Costs**: possible job losses for low-skilled workers; higher labour costs may raise prices; may encourage informal work; small firms may struggle. The effect depends on how far the minimum wage is above equilibrium and the state of the labour market.",
          },
        ],
        keyFormulas: [
          { name: "Minimum wage", statement: "Legal floor on the wage rate" },
          { name: "Above-equilibrium wage", statement: "Labour supplied > labour demanded → unemployment" },
        ],
        workedExample: {
          problem: "Equilibrium wage for cleaners is £8/hour; NMW is set at £10/hour. What is the likely effect?",
          solution: "Wage floor above equilibrium → labour supplied exceeds demanded → some cleaners lose jobs or hours; remaining workers earn £10.",
        },
      },
      questions: [
        {
          id: "ecn11-u13-minwage-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a minimum wage?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The average wage in an industry"
                    },
                    {
                              "id": "b",
                              "text": "A legal floor below which wages cannot be paid"
                    },
                    {
                              "id": "c",
                              "text": "The wage set by a trade union"
                    },
                    {
                              "id": "d",
                              "text": "The highest wage an employer may pay"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Minimum wage",
                              "statement": "Legal floor on wages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minimum wage = statutory minimum hourly rate employers must pay.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Legal floor on wages",
          "commonErrors": [
                    "Confusing with maximum wage."
          ]
},
        },
        {
          id: "ecn11-u13-minwage-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When does a minimum wage have no effect on employment?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Minimum wage",
                              "statement": "Only binds if above equilibrium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If the minimum wage is below the equilibrium wage, firms already pay more — no effect.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Only a binding (above-equilibrium) minimum wage changes outcomes.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "When set below the equilibrium wage.",
          "commonErrors": [
                    "Saying it always reduces employment."
          ]
},
        },
        {
          id: "ecn11-u13-minwage-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a minimum wage set above the equilibrium wage can cause unemployment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Wage floor",
                              "statement": "Above-equilibrium wage → labour surplus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At the higher wage, more workers want jobs (supply rises along curve).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Firms hire fewer workers because labour is now more expensive relative to MRP.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Quantity of labour supplied exceeds quantity demanded → unemployment among low-wage workers.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Wage floor above equilibrium → surplus of labour → unemployment.",
          "commonErrors": [
                    "Saying all workers benefit regardless."
          ]
},
        },
        {
          id: "ecn11-u13-minwage-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A government raises the minimum wage from £9 to £11 per hour.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one benefit for low-paid workers.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one risk for employment.",
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
                              "name": "Minimum wage evaluation",
                              "statement": "Higher pay vs possible job losses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Workers who keep jobs earn more → higher incomes, less poverty.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) If above equilibrium, firms cut jobs or hours for low-skilled workers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Small firms may raise prices or reduce hiring; informal work may rise.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) higher pay for retained workers (b) possible job losses/hours cuts",
          "commonErrors": [
                    "No employment mechanism."
          ]
},
        },
        {
          id: "ecn11-u13-minwage-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Some economists argue the minimum wage has little effect on jobs; others argue it causes significant unemployment. Discuss both views.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Minimum wage debate",
                              "statement": "Textbook model vs empirical evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Model view: wage floor above equilibrium → surplus labour → unemployment (esp. low-skilled).",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Evidence view: modest increases often show small or no job losses; firms may absorb costs via prices, productivity or monopsony correction.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect depends on the size of the increase and labour market conditions.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Conclusion: context matters; large jumps above equilibrium are riskier.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Theory predicts job losses; evidence suggests modest effects depend on context.",
          "commonErrors": [
                    "One-sided answer; no evaluation."
          ]
},
        },
        {
          id: "ecn11-u13-minwage-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define minimum wage.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain when it has no effect.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain the unemployment mechanism when set above equilibrium.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Give two benefits of a minimum wage.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Give two costs of a minimum wage.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Reach a judgement on whether the minimum wage is worthwhile.",
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
                              "name": "Minimum wage",
                              "statement": "Definition, mechanism, evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Legal floor on the wage rate.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) When set below the equilibrium wage.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Labour supplied > demanded → surplus → unemployment.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) e.g. higher pay for low earners; reduced poverty/inequality; counters monopsony.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) e.g. possible job losses; higher prices or reduced hours for small firms.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "e"
                    },
                    {
                              "reasoning": "(f) Judgement weighing pay gains vs employment risk; depends on level set.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "f"
                    }
          ],
          "finalAnswer": "(a) floor (b) below eq (c) surplus labour (d)-(e) pros/cons (f) context-dependent",
          "commonErrors": [
                    "No judgement; only one side."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u13-unions",
      title: "Trade unions and collective bargaining",
      skill: "Explain the role of trade unions and evaluate their effect on wages and employment.",
      lesson: {
        sections: [
          {
            heading: "What trade unions do",
            body: "**Trade unions** are organisations of workers that negotiate with employers through **collective bargaining** over pay, hours and conditions. They can: negotiate higher wages and better conditions; provide legal support and redundancy payments; lobby government on labour issues. If bargaining fails, unions may call a **strike** — a collective withdrawal of labour — which can force employers to concede but costs workers pay and may harm the firm's competitiveness.",
          },
          {
            heading: "Evaluating union power",
            body: "**Benefits**: unions counter employer power (especially monopsony), raise wages for members, improve safety and conditions, reduce turnover. **Costs**: higher wages may reduce employment if demand for labour is elastic; strikes disrupt production; union demands may make firms less competitive; benefits may go mainly to already-secure 'insider' workers, widening gaps with non-members. Effects depend on union density, bargaining power and labour market conditions.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A factory's union negotiates a 5% pay rise. The firm says it will have to cut 20 jobs. Analyse.",
          solution: "Union bargaining raised wages; if labour demand is elastic, higher wages reduce employment — a classic union trade-off.",
        },
      },
      questions: [
        {
          id: "ecn11-u13-unions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is collective bargaining?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Workers negotiating individually with employers"
                    },
                    {
                              "id": "b",
                              "text": "Unions negotiating pay and conditions on behalf of members"
                    },
                    {
                              "id": "c",
                              "text": "Government setting wages by law"
                    },
                    {
                              "id": "d",
                              "text": "Employers competing for workers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Collective bargaining",
                              "statement": "Union-employer negotiation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unions negotiate pay and conditions collectively on behalf of members.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Union-employer negotiation",
          "commonErrors": [
                    "Confusing with individual negotiation."
          ]
},
        },
        {
          id: "ecn11-u13-unions-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a strike?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Strike",
                              "statement": "Collective withdrawal of labour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Workers collectively stop working to press demands in negotiations.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Costs workers pay; can halt production.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "A collective withdrawal of labour to press demands.",
          "commonErrors": [
                    "Describing a protest or demonstration."
          ]
},
        },
        {
          id: "ecn11-u13-unions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain one way trade unions can improve working conditions for their members.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Union benefits",
                              "statement": "Collective bargaining improves pay/conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negotiate higher wages through collective bargaining — more bargaining power than individuals.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Negotiate safer conditions, reasonable hours, holiday entitlement.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Provide legal support and represent members in disputes.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Higher pay, better conditions, legal support via collective bargaining.",
          "commonErrors": [
                    "No mechanism of union action."
          ]
},
        },
        {
          id: "ecn11-u13-unions-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A union secures a 10% pay rise for factory workers. Evaluate the likely effects.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one benefit for workers.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one possible cost for the firm and employment.",
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
                              "name": "Union wage effects",
                              "statement": "Higher member pay vs employment/cost risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Members earn more; motivation and retention may improve.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Higher wage costs may reduce profits or raise prices.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) If labour demand is elastic, firm may cut jobs or hours; competitiveness may fall.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) higher pay/motivation (b) cost pressure, possible job cuts",
          "commonErrors": [
                    "Ignoring the employment elasticity."
          ]
},
        },
        {
          id: "ecn11-u13-unions-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss whether trade unions help or harm the wider economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Union impact",
                              "statement": "Worker gains vs efficiency costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Help: raise pay for members, improve conditions, reduce inequality for covered workers, counter monopsony power.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Harm: higher labour costs may reduce employment if demand elastic; strikes disrupt output; may benefit 'insider' members at expense of others.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Net effect depends on union density, bargaining power and labour market conditions.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Conclusion: unions can correct power imbalances but may impose efficiency costs.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Unions raise member pay/conditions but may cost jobs and competitiveness — context-dependent.",
          "commonErrors": [
                    "One-sided answer."
          ]
},
        },
        {
          id: "ecn11-u13-unions-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define trade union and collective bargaining.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State two benefits of union membership for workers.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how unions can raise wages.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain one possible cost of union power for the economy.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Suggest one alternative to strikes in disputes.",
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
                              "name": "Trade unions",
                              "statement": "Definitions, benefits, costs, alternatives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Union = workers' organisation; bargaining = collective negotiation of pay/conditions.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) e.g. higher pay; better conditions/safety; legal support.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Collective bargaining gives workers more power vs employer; threatens strike action.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) e.g. higher labour costs → job losses if demand elastic; strike disruption.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) e.g. mediation, arbitration, negotiation, work-to-rule.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "(a) defs (b) pay/conditions (c) bargaining power (d) job loss/disruption (e) mediation/arbitration",
          "commonErrors": [
                    "Only describing unions positively or negatively."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u13-minwage-notes",
      title: "Minimum wage and unions — notes",
      summary: "Minimum wages and unions redistribute bargaining power to workers; evaluate pay gains against employment and efficiency costs.",
      sections: [
        { heading: "Minimum wage", body: "Binds only above equilibrium; can raise pay but risk unemployment — effect is context-dependent." },
        { heading: "Unions", body: "Collective bargaining raises member pay/conditions; strikes are the ultimate lever but costly." },
        { heading: "Evaluation", body: "Both correct employer power but may impose efficiency costs — weigh equity vs employment." },
      ],
    },
  ],
};
