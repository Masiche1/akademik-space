import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ebz11-u8-lesson-8-2",
  code: "8-2",
  title: "Employee Participation and Empowerment",
  goal: "I CAN explain how employee participation, teams and empowerment improve performance.",
  standards: ["Edexcel IGCSE Business 4BS0 — People in Business: participation and teams"],
  
  vocabulary: [
    { term: "Employee participation", definition: "Involving employees in decision-making that affects their work." },
    { term: "Works council", definition: "Body of elected employee representatives who discuss issues with management." },
    { term: "Suggestion scheme", definition: "System for employees to submit ideas for improving the business." },
    { term: "Quality circle", definition: "Small group of employees who meet regularly to solve work-related problems." },
    { term: "Empowerment", definition: "Giving employees authority and responsibility to make decisions." },
    { term: "Self-managed team", definition: "Team that plans, organises and controls its own work with little supervision." },
    { term: "Delayering", definition: "Removing layers of management to flatten the organisation structure." },
  ],
  concepts: [
    {
      id: "ebz11-u8-participation",
      title: "Employee Participation Schemes",
      skill: "Describe participation methods and evaluate their benefits and drawbacks.",
      lesson: {
        sections: [
          {
            heading: "Forms of participation",
            body: "**Works councils** — elected employee representatives meet management on issues like pay, conditions and redundancy. **Suggestion schemes** — employees submit ideas; successful ones may be rewarded. **Quality circles** — small groups meet regularly to identify and solve workplace problems. **Team briefings** — managers update staff on performance and plans. **Profit-sharing** — employees receive a share of profits, linking their interests to the firm's success.",
          },
          {
            heading: "Benefits and drawbacks",
            body: "**Benefits**: employees feel valued → higher motivation and commitment; management gains ideas and information from the shop floor; faster problem-solving; better industrial relations and less conflict. **Drawbacks**: schemes can be time-consuming; management may see them as a threat to authority; employees may become cynical if suggestions are ignored; in some industries works councils are legally required, adding cost. Participation works best when management genuinely acts on employee input.",
          },
        ],
        keyFormulas: [
          { name: "Participation spectrum", statement: "information → consultation → shared decision-making" },
        ],
        workedExample: {
          problem: "A factory introduces quality circles. Output rises and staff report feeling more involved. Explain one benefit and one risk for management.",
          solution: "Benefit: employees closest to problems generate practical solutions — improved quality and motivation. Risk: if management ignores circle recommendations, staff lose trust and participation declines; also meetings take time away from production.",
        },
      },
      questions: [
        {
          id: "ebz11-u8-participation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a suggestion scheme?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A system for employees to submit ideas for improving the business"
                    },
                    {
                              "id": "b",
                              "text": "A method of paying bonuses"
                    },
                    {
                              "id": "c",
                              "text": "A disciplinary procedure"
                    },
                    {
                              "id": "d",
                              "text": "A type of job rotation"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Suggestion scheme",
                              "statement": "Employees submit improvement ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Suggestion scheme = employee ideas channel.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** System for employee improvement ideas"
},
        },
        {
          id: "ebz11-u8-participation-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three forms of employee participation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Participation forms",
                              "statement": "Works councils, suggestion schemes, quality circles, team briefings, profit-sharing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Works councils — elected reps discuss issues with management.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Suggestion schemes and quality circles — ideas and problem-solving groups.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Team briefings or profit-sharing — information sharing or shared rewards.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three: works councils, suggestion schemes, quality circles, briefings, profit-sharing.",
          "commonErrors": [
                    "Listing only one or repeating."
          ]
},
        },
        {
          id: "ebz11-u8-participation-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two benefits to a business of involving employees in decision-making.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Participation benefits",
                              "statement": "Motivation, better decisions, improved industrial relations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefit 1: employees feel valued → higher motivation, commitment and productivity.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Benefit 2: management gains practical ideas and information from people doing the work.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Motivation/commitment and better ideas/information — or better industrial relations.",
          "commonErrors": [
                    "Benefits that only help employees, not the business."
          ]
},
        },
        {
          id: "ebz11-u8-participation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A company introduces a suggestion scheme but managers never respond to employees' ideas.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the likely effect on employee motivation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the company could make the scheme more effective.",
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
                              "name": "Participation credibility",
                              "statement": "Ignored input breeds cynicism; acted-on input builds trust."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Employees will see the scheme as tokenism — motivation falls and fewer suggestions are made.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Respond to every suggestion — accept, reject with reasons, or defer with a timeline.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Implement good ideas and reward contributors.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Communicate results so staff see their input matters.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) cynicism, falling motivation. (b) respond, implement, reward, communicate.",
          "commonErrors": [
                    "Suggesting scrapping participation entirely.",
                    "No mechanism for response."
          ]
},
        },
        {
          id: "ebz11-u8-participation-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A factory is considering introducing quality circles.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what a quality circle is.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits the factory might gain.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain one drawback for the factory.",
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
                              "name": "Quality circles",
                              "statement": "Employee problem-solving groups — benefits and time costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Small group of employees meeting regularly to identify and solve work problems.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit: employees closest to problems generate practical solutions — better quality/efficiency.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Benefit: involvement raises motivation and morale.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Drawback: meetings take employees away from production — time cost; or management may resist losing control.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) employee problem-solving groups. (b) practical solutions + motivation. (c) time cost/resistance.",
          "commonErrors": [
                    "Confusing quality circles with works councils.",
                    "Drawback unrelated to the scheme."
          ]
},
        },
        {
          id: "ebz11-u8-participation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An engineering firm wants to improve employee involvement.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define employee participation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe three methods of participation the firm could use.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two benefits participation could bring.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Explain one condition needed for participation to succeed.",
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
                              "name": "Participation evaluation",
                              "statement": "Methods exist; success requires genuine management commitment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Involving employees in decisions that affect their work.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Methods: works councils, suggestion schemes, quality circles, team briefings, profit-sharing.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Benefit: higher motivation, commitment and productivity.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Benefit: better ideas/information from staff; improved industrial relations.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Condition: management must genuinely act on employee input and communicate results.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) involve staff in decisions; (b) three methods; (c) two benefits; (d) genuine commitment.",
          "commonErrors": [
                    "Methods without description.",
                    "Condition that is not about management action."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u8-empowerment",
      title: "Empowerment and Teamworking",
      skill: "Explain how delegation, teams and empowerment affect motivation and performance.",
      lesson: {
        sections: [
          {
            heading: "Empowerment and delegation",
            body: "**Empowerment** gives employees authority to make decisions about their own work — it satisfies the need for responsibility and achievement. **Delegation** is the practical tool: a manager passes a task plus the authority and resources to complete it. Effective delegation includes clear instructions, authority to act, and accountability for results. **Delayering** removes middle-management layers, shortening chains of command — it speeds decisions and empowers staff but can overload senior managers and reduce supervision.",
          },
          {
            heading: "Teamworking",
            body: "**Self-managed teams** plan, organise and control their own work with little supervision — members share tasks and hold each other accountable. Teams suit complex, interdependent work and can raise motivation (peer recognition, variety, shared goals). Drawbacks: some employees dislike group dependence; teams can be slow to decide; individual contribution may be hard to measure; conflict within teams needs managing. Team-based pay (group bonuses) can align effort but may cause free-riding if contributions are unequal.",
          },
        ],
        keyFormulas: [
          { name: "Delegation", statement: "task + authority + resources + accountability" },
          { name: "Delayering", statement: "fewer management layers → faster decisions, more empowerment" },
        ],
        workedExample: {
          problem: "A supervisor delegates 'improve stock rotation in your area' to a team leader, but gives no budget authority and criticises every decision. Has delegation worked?",
          solution: "No — authority was not genuinely transferred. The team leader has responsibility without power, so decisions will be slow and blame-shifting likely. Effective delegation requires authority, resources and trust alongside accountability.",
        },
      },
      questions: [
        {
          id: "ebz11-u8-empowerment-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does empowerment mean in the workplace?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Giving employees more authority to make decisions about their work"
                    },
                    {
                              "id": "b",
                              "text": "Paying employees higher wages"
                    },
                    {
                              "id": "c",
                              "text": "Reducing the number of employees"
                    },
                    {
                              "id": "d",
                              "text": "Working longer hours"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Empowerment",
                              "statement": "Authority to decide about one's own work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Empowerment = giving decision-making authority to employees.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Giving decision authority to employees"
},
        },
        {
          id: "ebz11-u8-empowerment-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What four elements should effective delegation include?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Delegation elements",
                              "statement": "Task, authority, resources, accountability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear task/objective to be completed.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Authority to make decisions needed to complete it.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Resources (time, budget, people) to do the job.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Task, authority, resources (and accountability).",
          "commonErrors": [
                    "Listing only 'giving work to others'."
          ]
},
        },
        {
          id: "ebz11-u8-empowerment-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways empowerment can improve employee motivation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Empowerment and motivation",
                              "statement": "Responsibility and achievement satisfy higher-level needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Employees gain responsibility and a sense of achievement — higher-level needs are met.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Being trusted increases job satisfaction and commitment to the business.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Responsibility/achievement and trust → higher motivation and commitment.",
          "commonErrors": [
                    "Saying empowerment always motivates — some staff dislike it."
          ]
},
        },
        {
          id: "ebz11-u8-empowerment-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A manager delegates a task but keeps approving every minor decision the employee makes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why this is ineffective delegation.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what the manager should do differently.",
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
                              "name": "Delegation failure",
                              "statement": "Responsibility without authority creates frustration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Employee has responsibility but not real authority — every decision still needs approval, so nothing is truly delegated.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Define the objective and boundaries, then let the employee decide within them.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Give resources and trust; review outcomes rather than every step.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) responsibility without authority. (b) clear boundaries, trust, review outcomes.",
          "commonErrors": [
                    "Blaming the employee.",
                    "No mention of authority/boundaries."
          ]
},
        },
        {
          id: "ebz11-u8-empowerment-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A company is thinking of introducing self-managed teams in its production department.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what a self-managed team is.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two potential benefits.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give two potential problems.",
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
                              "name": "Self-managed teams",
                              "statement": "Teams control own work — autonomy vs coordination costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Team that plans, organises and controls its own work with little supervision.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit: motivation and commitment from autonomy and shared responsibility.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Benefit: faster problem-solving and flexibility — team adapts without waiting for orders.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Problem: some employees dislike group dependence or free-riding by weak members.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Problem: slower decisions or conflict within teams; individual contribution hard to measure.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) autonomous teams. (b) motivation, flexibility. (c) free-riding, conflict/slow decisions.",
          "commonErrors": [
                    "Benefits listed as problems.",
                    "No production-department relevance."
          ]
},
        },
        {
          id: "ebz11-u8-empowerment-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A hierarchical company wants to empower employees and speed up decision-making.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define empowerment and delayering.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits of delayering for this company.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain one risk of delayering.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Suggest one way the company could empower staff without delayering.",
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
                              "name": "Structure and empowerment",
                              "statement": "Delayering flattens structure; delegation empowers within it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Empowerment = giving employees authority over their work; delayering = removing management layers.",
                              "marks": 3,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit: shorter chains of command — faster decisions and communication.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Benefit: lower admin costs and empowered staff closer to decisions.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Risk: senior managers lose control/span of control widens; less supervision of staff.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) e.g. delegate decision authority to team leaders within existing structure.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "finalAnswer": "(a) definitions; (b) faster decisions, lower costs; (c) wider span/less control; (d) delegation.",
          "commonErrors": [
                    "Delayering confused with delegation.",
                    "Risk unrelated to structure."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u8-participation-notes",
      title: "Participation and empowerment — revision notes",
      summary: "Participation schemes (works councils, suggestion schemes, quality circles) involve staff in decisions — motivation up, but ignored input breeds cynicism. Empowerment = authority over work; delegation needs task + authority + resources + accountability. Self-managed teams give autonomy but risk free-riding and conflict.",
      sections: [
        { heading: "Key idea", body: "Participation and empowerment raise motivation only when management genuinely acts on employee input." },
        { heading: "Delegation", body: "Task + authority + resources + accountability — responsibility without authority fails." },
        { heading: "Teams", body: "Self-managed teams suit interdependent work; watch for free-riding and slow decisions." },
      ],
    },
  ],
};
