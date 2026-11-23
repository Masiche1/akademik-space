import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ecn11-u8-lesson-8-3",
  code: "8-3",
  title: "People in Business",
  goal: "I CAN explain motivation, recruitment and industrial relations in business.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Paper 1: Investigating small businesses"],
  
  vocabulary: [
    { term: "Motivation", definition: "The factors that drive workers to work hard and achieve business aims." },
    { term: "Financial rewards", definition: "Pay-based motivators: wages, salaries, bonuses, profit-sharing, fringe benefits." },
    { term: "Non-financial rewards", definition: "Non-pay motivators: job satisfaction, recognition, teamwork, responsibility." },
    { term: "Recruitment", definition: "The process of attracting and appointing suitable workers." },
    { term: "Training", definition: "Teaching workers the skills needed for their jobs." },
    { term: "Industrial relations", definition: "The relationship between employers and employees, including unions and disputes." },
    { term: "Trade union", definition: "An organisation representing workers' interests in negotiations with employers." },
  ],
  concepts: [
    {
      id: "ecn11-u8-motivation",
      title: "Motivating Workers",
      skill: "Explain financial and non-financial methods of motivation.",
      lesson: {
        sections: [
          {
            heading: "Why motivation matters",
            body: "Motivated workers are more productive, make fewer mistakes, stay longer (reducing recruitment costs) and give better customer service. Demotivated workers are absent more, produce lower quality and may leave.",
          },
          {
            heading: "Financial and non-financial rewards",
            body: "**Financial rewards**: wages/salaries, **overtime pay**, **bonuses**, **profit-sharing**, **fringe benefits** (pension, health cover, company car). **Non-financial rewards**: job satisfaction, recognition/appraisal, teamwork, responsibility, training opportunities, good working conditions, flexible hours. Most businesses use a **combination** — money attracts and retains, but non-financial factors often drive effort.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A call centre wants to cut staff turnover. Suggest two financial and two non-financial motivators.",
          solution: "Financial: performance bonuses and profit-sharing. Non-financial: clearer career progression and flexible working hours.",
        },
      },
      questions: [
        {
          id: "ecn11-u8-motivation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a financial method of motivation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Job satisfaction"
                    },
                    {
                              "id": "b",
                              "text": "Recognition from managers"
                    },
                    {
                              "id": "c",
                              "text": "Performance bonuses"
                    },
                    {
                              "id": "d",
                              "text": "Teamworking"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Financial rewards",
                              "statement": "Pay-based motivators such as bonuses and benefits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Performance bonuses are a financial reward.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Performance bonuses",
          "commonErrors": [
                    "Confusing financial and non-financial."
          ]
},
        },
        {
          id: "ecn11-u8-motivation-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three non-financial ways a business can motivate workers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Non-financial rewards",
                              "statement": "Satisfaction, recognition, responsibility, teamwork."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Job satisfaction / interesting work.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Recognition and appraisal from managers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Responsibility, training opportunities or flexible hours.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Job satisfaction, recognition, responsibility/training/flexibility.",
          "commonErrors": [
                    "Listing financial rewards."
          ]
},
        },
        {
          id: "ecn11-u8-motivation-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a business might use non-financial methods of motivation as well as pay.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Non-financial motivation",
                              "statement": "Satisfies needs pay cannot; cheaper and longer-lasting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Money has limits — workers also want satisfaction and recognition.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Non-financial methods cost less than raising pay for all staff.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They build loyalty and reduce turnover.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Different workers are motivated by different things.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Satisfaction beyond pay; cheaper; loyalty; different needs.",
          "commonErrors": [
                    "Saying non-financial replaces pay entirely."
          ]
},
        },
        {
          id: "ecn11-u8-motivation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A retail store has high staff turnover and low morale.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two financial and two non-financial motivators the store could introduce.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how these might reduce turnover.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Applying motivation",
                              "statement": "Match motivators to the problem of low morale and turnover."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Financial: staff discount, bonus scheme/profit-sharing. Non-financial: training/career progression, flexible hours or recognition.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Better rewards and satisfaction make staff stay — fewer resignations.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Two financial + two non-financial. (b) Staff stay when motivated.",
          "commonErrors": [
                    "Unbalanced or irrelevant motivators."
          ]
},
        },
        {
          id: "ecn11-u8-motivation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two identical warehouses employ the same number of workers. Warehouse A pays higher wages; Warehouse B offers job rotation, training and team bonuses based on output.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways Warehouse B might achieve higher productivity than Warehouse A.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest one disadvantage Warehouse B faces compared with A.",
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
                              "name": "Motivation and productivity",
                              "statement": "Non-financial motivators can outperform pay alone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Job rotation reduces boredom; training raises skills.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Team bonuses link pay to output — workers push harder.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) B may struggle to attract/retain staff if rivals pay more; bonuses may cause rushing/quality issues.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) rotation, training, output-linked pay. (b) may lose staff to higher payers.",
          "commonErrors": [
                    "Assuming higher pay always wins.",
                    "No disadvantage given."
          ]
},
        },
        {
          id: "ecn11-u8-motivation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A hotel chain wants to improve staff motivation across its hotels.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the term motivation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Distinguish between financial and non-financial rewards.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest three motivators the hotel could use, stating whether each is financial or non-financial.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether financial rewards are the best way to motivate staff.",
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
                              "name": "Motivation",
                              "statement": "Financial + non-financial rewards drive effort; best mix depends on workers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Factors that drive workers to work hard toward business aims.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Financial = pay/benefits; non-financial = satisfaction, recognition, responsibility.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Any three correctly labelled: bonus (F), training (NF), flexible hours (NF), profit-share (F), recognition (NF).",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Pay is important but limited — non-financial factors often sustain motivation better; a mix is best.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definition; (b) F vs NF; (c) three labelled motivators; (d) mix beats pay alone.",
          "commonErrors": [
                    "Motivators not labelled.",
                    "One-sided evaluation in (d)."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u8-people",
      title: "Recruitment, Training and Industrial Relations",
      skill: "Explain recruitment and training and describe industrial relations.",
      lesson: {
        sections: [
          {
            heading: "Recruitment and training",
            body: "**Recruitment** is attracting and appointing the right people: **job analysis**, **advertising**, **selection** (interviews, tests), then **induction**. Getting recruitment wrong is costly — training and turnover expenses are high. **Training** develops workers' skills: **induction** (starting), **on-the-job** (learning while working, cheap but can disrupt), **off-the-job** (courses, colleges — focused but workers are absent). Training raises productivity and motivation but costs money.",
          },
          {
            heading: "Industrial relations",
            body: "**Industrial relations** covers the relationship between employers and employees. **Trade unions** represent workers, negotiating pay and conditions through **collective bargaining**. Disputes can lead to **strikes** or **lock-outs**, hurting both sides. Good relations — communication, fair pay, grievance procedures — reduce conflict. The government may also set employment laws (minimum wage, health and safety, anti-discrimination).",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A factory installs new robots and must retrain 50 workers. Explain the steps and benefits.",
          solution: "Identify skills needed (job analysis), provide off-the-job training on the robots, then supervise on the job. Benefits: workers keep pace with technology, productivity rises, morale improves and fewer redundancies are needed.",
        },
      },
      questions: [
        {
          id: "ecn11-u8-people-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of training in a business?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To reduce the number of workers"
                    },
                    {
                              "id": "b",
                              "text": "To teach workers the skills needed for their jobs"
                    },
                    {
                              "id": "c",
                              "text": "To increase wages"
                    },
                    {
                              "id": "d",
                              "text": "To replace managers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Training",
                              "statement": "Developing workers' skills for their jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Training equips workers with the skills their roles require.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Teach job skills",
          "commonErrors": [
                    "Confusing training with recruitment."
          ]
},
        },
        {
          id: "ecn11-u8-people-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between on-the-job and off-the-job training.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Training types",
                              "statement": "Learn while working vs dedicated courses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "On-the-job: learn while working — cheap, immediate, but can disrupt work.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Off-the-job: courses/colleges — focused and thorough, but workers are absent and it costs more.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Businesses often combine both.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "On-the-job = learn while working; off-the-job = dedicated courses.",
          "commonErrors": [
                    "Advantages and disadvantages swapped."
          ]
},
        },
        {
          id: "ecn11-u8-people-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two benefits of effective recruitment for a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Recruitment benefits",
                              "statement": "Right people improve performance and reduce costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Right skills from the start — higher productivity and quality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lower turnover — good hires stay, saving recruitment/training costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Better team morale and customer service.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Avoids costly mistakes of hiring unsuitable staff.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Productivity, lower turnover/costs, morale, fewer hiring mistakes.",
          "commonErrors": [
                    "Only one benefit."
          ]
},
        },
        {
          id: "ecn11-u8-people-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A call centre wants to reduce staff turnover and improve service quality.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two recruitment improvements the centre could make.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how training could help reduce turnover and improve quality.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Recruitment and training",
                              "statement": "Right hiring plus skills development reduce turnover and raise quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Any two: clearer job descriptions, better selection interviews/tests, realistic job previews.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Training gives confidence and competence — staff feel valued.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Better skills mean better customer service and fewer errors.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Career progression through training gives reasons to stay — less turnover.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Two recruitment fixes. (b) Confidence, service quality, reasons to stay.",
          "commonErrors": [
                    "Recruitment suggestions not specific.",
                    "Training linked only to productivity."
          ]
},
        },
        {
          id: "ecn11-u8-people-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Workers at a factory are threatening to strike over pay.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the term industrial relations.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the role of a trade union in this situation.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest two ways the dispute could be resolved.",
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
                              "name": "Industrial relations",
                              "statement": "Employer-employee relationship, including unions and disputes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) The relationship between employers and employees, incl. negotiation and disputes.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The union represents workers, negotiating pay via collective bargaining.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Negotiation/conciliation; or arbitration by an independent third party.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) definition; (b) union negotiates for workers; (c) negotiation/arbitration.",
          "commonErrors": [
                    "Union role described as management.",
                    "No resolution suggested."
          ]
},
        },
        {
          id: "ecn11-u8-people-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A growing restaurant chain needs to recruit 30 new staff and improve staff retention.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List the main stages of the recruitment process.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two reasons why good training benefits both the business and workers.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain what industrial relations means and give one example of a dispute.",
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
                              "name": "People in business",
                              "statement": "Recruit right, train well, manage relations to retain staff."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Job analysis, advertising, selection (interviews/tests), induction.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Business: higher productivity and quality; workers: better skills, pay prospects, motivation.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Industrial relations = employer-employee relationship; example: strike over pay or working conditions.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) stages of recruitment; (b) mutual benefits; (c) definition + example.",
          "commonErrors": [
                    "Recruitment stages incomplete.",
                    "No dispute example."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u8-people-notes",
      title: "People in business — revision notes",
      summary: "Motivation uses financial (pay, bonuses) and non-financial (satisfaction, recognition) rewards. Recruitment stages: analysis, advertising, selection, induction. Training: on/off-the-job. Industrial relations: unions, bargaining, disputes.",
      sections: [
        { heading: "Motivation", body: "Financial rewards attract; non-financial rewards often drive effort — use a mix." },
        { heading: "Recruitment and training", body: "Analyse job, advertise, select, induct. On-the-job = cheap/flexible; off-the-job = thorough." },
        { heading: "Industrial relations", body: "Unions negotiate via collective bargaining; disputes can cause strikes — good relations prevent them." },
      ],
    },
  ],
};
