import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ecn10-u8-lesson-8-2",
  code: "8-2",
  title: "Wages and Productivity",
  goal: "I CAN explain wage determination, minimum wages and ways to improve labour productivity.",
  standards: ["Edexcel IGCSE Economics 4EC1/01 — The labour market: wages and productivity"],
  
  vocabulary: [
    { term: "Equilibrium wage", definition: "Wage where labour demand equals labour supply." },
    { term: "Minimum wage", definition: "Lowest legal wage employers can pay." },
    { term: "Monopsony", definition: "A market where one employer dominates hiring." },
    { term: "Wage differential", definition: "Pay differences between jobs or workers." },
    { term: "Human capital", definition: "Workers' skills, knowledge and experience." },
    { term: "Labour productivity", definition: "Output per worker or per hour worked." },
  ],
  concepts: [
    {
      id: "ecn10-u8-wages",
      title: "Wage Determination",
      skill: "Explain how wages are determined and evaluate minimum wages and monopsony power.",
      lesson: {
        sections: [
          {
            heading: "Equilibrium wage",
            body: "The **equilibrium wage** is where labour demand equals labour supply. Higher wages attract more workers but reduce the number firms want to hire; lower wages do the opposite. Market forces tend to move wages toward equilibrium.",
          },
          {
            heading: "Minimum wage and monopsony",
            body: "A **minimum wage** set above equilibrium can raise pay for some workers but may reduce employment if firms cannot afford it. A **monopsony** occurs when one employer dominates hiring and may pay below the competitive wage. Wage differentials reflect skills, risk, working conditions and productivity.",
          },
        ],
        keyFormulas: [
          { name: "Equilibrium wage", statement: "Labour demand equals labour supply." },
          { name: "Minimum wage", statement: "Legal wage floor." },
          { name: "Monopsony", statement: "One dominant employer in a labour market." },
        ],
        workedExample: {
          problem: "A minimum wage is set above the equilibrium wage in a competitive labour market. What may happen to employment?",
          solution: "Employment may fall because firms face higher labour costs and demand fewer workers.",
        },
      },
      questions: [
        {
          id: "ecn10-u8-wages-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the equilibrium wage?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The wage where labour demand equals labour supply"
                    },
                    {
                              "id": "b",
                              "text": "The highest legal wage"
                    },
                    {
                              "id": "c",
                              "text": "The lowest possible wage"
                    },
                    {
                              "id": "d",
                              "text": "The wage set by government only"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Equilibrium wage",
                              "statement": "Demand equals supply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equilibrium occurs where labour demand and supply intersect.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Where labour demand equals labour supply"
},
        },
        {
          id: "ecn10-u8-wages-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define monopsony and explain why it may lead to lower wages.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monopsony",
                              "statement": "One dominant employer in labour market."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Definition correct.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Dominant employer can restrict hiring and set wages.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Less competition means workers may be paid below competitive wage.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "One dominant employer can pay below competitive wage."
},
        },
        {
          id: "ecn10-u8-wages-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give two reasons why wages differ between occupations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Wage differentials",
                              "statement": "Pay varies with skills, risk, conditions and productivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Training and skills raise productivity and wages.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Dangerous or unpleasant jobs often pay more.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Scarcity of workers or union strength can raise wages.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both reasons linked to labour market outcomes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Skills, risk, conditions, scarcity and productivity explain wage differences."
},
        },
        {
          id: "ecn10-u8-wages-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A minimum wage is introduced just above the equilibrium wage in a competitive market.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the effect on the wage received by workers who remain employed.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the likely effect on employment.",
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
                              "name": "Minimum wage",
                              "statement": "Wage floor can raise pay but reduce employment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Workers who keep jobs receive the higher minimum wage.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Firms face higher labour costs and may hire fewer workers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Some workers may lose jobs or hours if supply exceeds demand.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) higher pay for those employed (b) possible employment fall"
},
        },
        {
          id: "ecn10-u8-wages-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A large retailer is the only major employer in a rural town.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the labour market structure.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why wages may be below the competitive level.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest one policy to protect workers.",
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
                              "name": "Monopsony",
                              "statement": "Dominant employer can set wages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Monopsony — one dominant employer.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) With little competition, the firm can pay less than workers would earn in a competitive market.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Minimum wage, union recognition or competition policy can protect workers.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) monopsony (b) employer power lowers wages (c) minimum wage/competition"
},
        },
        {
          id: "ecn10-u8-wages-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A government considers raising the minimum wage to reduce poverty.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define minimum wage and equilibrium wage.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits of a higher minimum wage.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two drawbacks.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether the minimum wage should be raised.",
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
                              "name": "Minimum wage evaluation",
                              "statement": "Higher pay may reduce poverty but can cost jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Minimum wage = legal floor; equilibrium wage = demand equals supply.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefits: higher incomes for low-paid workers and reduced poverty.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Benefits: may improve motivation and reduce turnover.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Drawbacks: higher costs may reduce employment or hours.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Drawbacks: firms may raise prices or relocate.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Raise if set near equilibrium and targeted; avoid if likely to cause unemployment.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definitions (b) income/poverty/motivation (c) jobs/prices/relocation (d) balanced judgement",
          "commonErrors": [
                    "Only benefits or only costs.",
                    "No judgement."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u8-productivity-human-capital",
      title: "Productivity and Human Capital",
      skill: "Explain labour productivity, human capital and policies to improve them.",
      lesson: {
        sections: [
          {
            heading: "Productivity and human capital",
            body: "**Labour productivity** is output per worker or per hour. **Human capital** is the skills, knowledge, health and experience workers bring. Better education, training, motivation and technology can raise productivity and wages.",
          },
          {
            heading: "Improving productivity",
            body: "Firms can invest in training, better machinery, flexible working, health and safety, and motivation. Governments can support education, apprenticeships and infrastructure. Higher productivity can raise living standards but may change job tasks.",
          },
        ],
        keyFormulas: [
          { name: "Labour productivity", statement: "Output ÷ workers or hours." },
          { name: "Human capital", statement: "Skills, knowledge, health and experience." },
          { name: "Productivity policy", statement: "Training, technology and motivation raise output per worker." },
        ],
        workedExample: {
          problem: "A firm trains staff and output rises from 10,000 to 12,000 units with the same 50 workers. Calculate productivity before and after.",
          solution: "Before = 10,000 ÷ 50 = 200 units per worker. After = 12,000 ÷ 50 = 240 units per worker.",
        },
      },
      questions: [
        {
          id: "ecn10-u8-productivity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is human capital?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Money invested in factories"
                    },
                    {
                              "id": "b",
                              "text": "Workers' skills, knowledge, health and experience"
                    },
                    {
                              "id": "c",
                              "text": "Physical machinery"
                    },
                    {
                              "id": "d",
                              "text": "Government debt"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Human capital",
                              "statement": "Skills, knowledge, health and experience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Human capital refers to worker attributes.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Worker skills, knowledge, health and experience"
},
        },
        {
          id: "ecn10-u8-productivity-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A factory produces 9,000 units with 30 workers. Calculate labour productivity.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Productivity",
                              "answer": 300,
                              "unit": "units per worker"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Labour productivity",
                              "statement": "Output ÷ workers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use output divided by workers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "9,000 ÷ 30 = 300 units per worker.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Answer stated with correct units.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "300 units per worker"
},
        },
        {
          id: "ecn10-u8-productivity-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways a firm can improve labour productivity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Productivity improvement",
                              "statement": "Training, technology and motivation raise output per worker."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Training raises skills and reduces errors.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Better machinery or technology increases output per worker.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Motivation and flexible working can reduce absenteeism and improve effort.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both methods linked to higher productivity.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Training, technology, motivation or better organisation raise productivity."
},
        },
        {
          id: "ecn10-u8-productivity-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A company introduces new software but does not train staff.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why productivity might not rise.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest one additional policy to raise productivity.",
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
                              "name": "Technology and training",
                              "statement": "Technology needs skills to raise productivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Without training, staff may not use software effectively or may make errors.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Training on the software would build human capital.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Motivation, incentives or better management could also improve use.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Policy should address skills and motivation together.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) skills lacking (b) training plus motivation/management"
},
        },
        {
          id: "ecn10-u8-productivity-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Output rises from 8,000 to 10,000 units while workers rise from 40 to 45.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate productivity before and after.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain whether productivity improved.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Labour productivity",
                              "statement": "Output ÷ workers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Before = 8,000 ÷ 40 = 200 units per worker.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) After = 10,000 ÷ 45 ≈ 222.2 units per worker.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Productivity improved because output per worker rose despite more workers.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 200 and about 222 (b) productivity improved"
},
        },
        {
          id: "ecn10-u8-productivity-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A government wants to raise labour productivity in its economy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define labour productivity and human capital.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two policies that could raise productivity.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain one possible drawback of focusing only on productivity.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether productivity growth always benefits workers.",
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
                              "name": "Productivity policy",
                              "statement": "Skills and technology raise output but may change jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Productivity = output per worker; human capital = skills, knowledge, health and experience.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Policies: education/training and investment in technology or infrastructure.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Policies: tax incentives for firm training or R&D.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Drawback: automation may displace workers or increase stress if jobs change.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Benefits include higher wages and living standards, but gains depend on sharing and retraining.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definitions (b) education+technology (c) displacement/stress (d) benefits depend on distribution",
          "commonErrors": [
                    "No drawback.",
                    "Assuming all workers gain automatically."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u8-wages-productivity-notes",
      title: "Wages and productivity — notes",
      summary: "Wages balance labour demand and supply; minimum wages and monopsony need evaluation; productivity depends on human capital.",
      sections: [
        { heading: "Wages", body: "Equilibrium wage is where labour demand equals supply; minimum wage can help or harm employment." },
        { heading: "Monopsony", body: "A dominant employer may pay below competitive wage." },
        { heading: "Productivity", body: "Output per worker rises through training, technology and motivation." },
      ],
    },
  ],
};
