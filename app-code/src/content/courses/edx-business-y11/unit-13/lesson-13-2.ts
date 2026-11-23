import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "ebz11-u13-lesson-13-2",
  code: "13-2",
  title: "Functional Areas and Accountability",
  goal: "I CAN explain functional departments, interdependence and employee accountability.",
  standards: ["Edexcel IGCSE Business 4BS0 — People in Business", "4BS0 2.5 Organisation structure and employees"],
  
  vocabulary: [
    { term: "Functional area", definition: "Group of related activities with a particular purpose." },
    { term: "Department", definition: "Part of a business where employees specialise in related work." },
    { term: "Interdependence", definition: "Departments relying on each other's outputs." },
    { term: "Role", definition: "Expected duties and responsibilities of an employee." },
    { term: "Compliance", definition: "Following rules, policies and legal requirements." },
    { term: "Accountability", definition: "Answering to someone for performance." },
  ],
  concepts: [
    {
      id: "ebz11-u13-departments",
      title: "Functional Departments and Interdependence",
      skill: "Explain functional areas and how departments depend on one another.",
      lesson: {
        sections: [
          {
            heading: "Functional departments",
            body: "Large businesses divide work into **functional departments**: production makes goods/services, marketing researches and sells, human resources manages people, finance controls money and administration supports operations. Each department has specialist skills.\n\nDepartments are **interdependent** — marketing needs production to supply products; production needs finance for resources; HR supports all departments. Poor coordination between departments can cause delays and errors.",
          },
          {
            heading: "Functional areas in practice",
            body: "**Production** focuses on making goods or services efficiently and safely. **Marketing** focuses on customers, products and sales. **Human resources** focuses on people, recruitment and welfare. **Finance** focuses on budgets, costs and cash flow. **Administration** supports records, systems and office services.\n\nEach area has its own priorities, but the business succeeds only when their outputs fit together. For example, marketing cannot sell a product that production cannot supply, and finance cannot fund a plan without reliable cost information.",
          },
        ],
        keyFormulas: [
          { name: "Interdependence", statement: "Departments rely on each other's outputs" },
          { name: "Functional areas", statement: "Production + marketing + HR + finance + administration" },
        ],
        workedExample: {
          problem: "Marketing promises a product launch date that production cannot meet. What interdependence problem is shown?",
          solution: "Marketing and production are interdependent; poor communication caused a conflicting promise.",
        },
      },
      questions: [
        {
          id: "ebz11-u13-departments-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which department is mainly responsible for recruiting and training staff?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Production"
                    },
                    {
                              "id": "b",
                              "text": "Marketing"
                    },
                    {
                              "id": "c",
                              "text": "Human resources"
                    },
                    {
                              "id": "d",
                              "text": "Finance"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "HR department",
                              "statement": "Manages recruitment, training and employee relations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Recruitment and training are HR functions.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Human resources",
          "commonErrors": [
                    "Confusing HR with finance."
          ]
},
        },
        {
          id: "ebz11-u13-departments-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain what is meant by departmental interdependence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Interdependence",
                              "statement": "Departments rely on each other's work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Marketing depends on production for products.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Production depends on finance for resources.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Delays in one department affect others.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Departments rely on each other's outputs; problems spread across the business.",
          "commonErrors": [
                    "Thinking departments are isolated."
          ]
},
        },
        {
          id: "ebz11-u13-departments-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Identify two functional areas and state the main purpose of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Functional areas",
                              "statement": "Production, marketing, HR, finance and administration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Production makes goods/services efficiently.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Marketing researches customers and sells products.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "HR manages recruitment, training and welfare.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Finance controls budgets, costs and cash flow.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Production=make; marketing=sell; HR=people; finance=money control.",
          "commonErrors": [
                    "Only one area."
          ]
},
        },
        {
          id: "ebz11-u13-departments-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the goals of finance and marketing departments.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Functional goals",
                              "statement": "Money control versus customer focus."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finance aims for cost control, budgets and profit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Marketing aims for sales, customers and market share.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Finance may resist spending on promotion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Marketing may push for campaigns that raise costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Shared targets align spending with profitable sales.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Finance controls costs/profit; marketing drives sales; they must be aligned.",
          "commonErrors": [
                    "Assuming both departments have identical goals."
          ]
},
        },
        {
          id: "ebz11-u13-departments-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate the coordination needed between functional areas for launching a new product.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Functional coordination",
                              "statement": "Different departments must align outputs for one launch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Marketing must confirm customer demand and launch plan.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Production must confirm capacity and quality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Finance must approve budget and cash flow.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "HR must ensure staffing and training are ready.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Conflicting priorities can delay the launch.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear leadership and shared objectives are needed.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Coordination improves the chance of a successful launch.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Align marketing, production, finance and HR through shared goals and clear coordination.",
          "commonErrors": [
                    "Only listing departments without evaluation."
          ]
},
        },
        {
          id: "ebz11-u13-departments-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Sales and production departments frequently blame each other for missed deadlines. Recommend improvements to coordination and accountability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Interdepartmental coordination",
                              "statement": "Shared goals, meetings, information systems and clear roles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Set shared objectives linking sales targets to production capacity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Hold regular joint planning meetings.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Use a shared information system for orders and stock.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Clarify responsibilities and deadlines for each department.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Create a liaison role or project manager.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Encourage early warning when problems arise.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Review performance together rather than blaming one side.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Train staff in problem-solving and conflict resolution.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Align incentives so both departments benefit from success.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Monitor and adjust the coordination system over time.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Use shared goals, meetings, systems, liaison roles and aligned incentives.",
          "commonErrors": [
                    "Only blaming one department."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u13-roles",
      title: "Roles, Compliance and Accountability",
      skill: "Explain employee roles, compliance with rules and who answers for performance.",
      lesson: {
        sections: [
          {
            heading: "Roles and compliance",
            body: "Each employee has a **role** — expected duties, responsibilities and standards. Roles must be clear so work is covered and accountability is possible. **Compliance** means following policies, procedures, contracts and legal requirements such as health and safety or equal opportunities.\n\nEmployees are accountable to managers; managers are accountable to senior managers or the board. Accountability can exist even when a subordinate performs the task — the manager remains answerable for the team's results.",
          },
          {
            heading: "Why clarity matters",
            body: "Unclear roles cause duplication, gaps, blame and poor performance. Clear roles help employees know what is expected, support appraisal and disciplinary procedures, and make delegation fair.\n\nFunctional areas have different goals: production wants efficiency and quality; marketing wants sales and customer satisfaction; finance wants control and profit; HR wants motivated, safe employees. Conflicts are resolved through shared objectives and clear accountability.",
          },
        ],
        keyFormulas: [
          { name: "Role", statement: "Expected duties and standards" },
          { name: "Compliance", statement: "Following rules, policies and law" },
          { name: "Accountability chain", statement: "Employee → manager → senior manager/board" },
        ],
        workedExample: {
          problem: "Two employees both think the other should check stock levels. What problem is this and how should it be fixed?",
          solution: "Roles are unclear; define who is responsible for stock checks and who is accountable for errors.",
        },
      },
      questions: [
        {
          id: "ebz11-u13-roles-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is compliance in the workplace?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Working extra hours"
                    },
                    {
                              "id": "b",
                              "text": "Following rules, policies and legal requirements"
                    },
                    {
                              "id": "c",
                              "text": "Sharing workload equally"
                    },
                    {
                              "id": "d",
                              "text": "Earning a bonus"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Compliance",
                              "statement": "Following rules, policies and law."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compliance = following rules/policies/law.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Following rules, policies and legal requirements",
          "commonErrors": [
                    "Confusing compliance with productivity."
          ]
},
        },
        {
          id: "ebz11-u13-roles-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between an employee's role and their accountability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Role vs accountability",
                              "statement": "Duties versus answerability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Role = expected duties and responsibilities.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Accountability = answer to someone for results.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A person can have duties without being the final answerable manager.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Role = duties; accountability = answerability to a higher level.",
          "commonErrors": [
                    "Treating them as identical."
          ]
},
        },
        {
          id: "ebz11-u13-roles-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why compliance with company policies matters to a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Compliance",
                              "statement": "Policies support safety, quality, legality and fairness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compliance reduces accidents and legal breaches.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It maintains consistent standards and quality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It protects employees and customers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Non-compliance can cause fines, dismissal and reputational damage.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Compliance supports safety, quality, legality and reputation.",
          "commonErrors": [
                    "Only mentioning discipline."
          ]
},
        },
        {
          id: "ebz11-u13-roles-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the goals of production and marketing departments.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Functional goals",
                              "statement": "Different departments prioritise different outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Production aims for efficiency, quality and reliable supply.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Marketing aims for sales, customers and market share.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Production may resist frequent design changes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Marketing may promise features production cannot meet.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Shared objectives and coordination reduce conflict.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Production prioritises efficiency/quality; marketing prioritises sales; coordination aligns them.",
          "commonErrors": [
                    "Assuming all departments have identical goals."
          ]
},
        },
        {
          id: "ebz11-u13-roles-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Discuss how unclear roles can cause conflict between employees and managers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Role clarity",
                              "statement": "Unclear roles create duplication, gaps and blame."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tasks may be duplicated or left undone.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Employees may blame each other for failures.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Managers may not know who to hold accountable.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Performance appraisal becomes unfair.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Morale falls when expectations are unclear.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear job descriptions and objectives reduce conflict.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Regular review keeps roles aligned with business needs.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Unclear roles cause duplication, blame and unfair accountability; clarity and review fix this.",
          "commonErrors": [
                    "Only blaming employees."
          ]
},
        },
        {
          id: "ebz11-u13-roles-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A product launch involves marketing, production, finance and HR. Design an accountability framework showing who is responsible and answerable for key tasks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Accountability framework",
                              "statement": "Assign responsibility and answerability across departments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Marketing is responsible for launch plan and customer demand.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Production is responsible for manufacturing capacity and quality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Finance is responsible for budget and cash flow.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "HR is responsible for staffing and training.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A project manager coordinates across departments.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Each department head answers to senior management.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear deadlines and milestones are agreed.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Regular progress reviews identify problems early.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Escalation routes handle unresolved issues.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Final accountability sits with the project sponsor or board.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Assign tasks to departments, coordinate via project manager, and escalate to senior management.",
          "commonErrors": [
                    "No clear answerable person."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u13-functions-notes",
      title: "Functional areas and accountability — notes",
      summary: "Departments specialise but depend on each other; clear roles and accountability prevent conflict.",
      sections: [
        { heading: "Departments", body: "Production, marketing, HR, finance and administration divide work but must coordinate outputs." },
        { heading: "Interdependence", body: "Marketing needs products; production needs resources; finance supports all. Delays spread across departments." },
        { heading: "Accountability", body: "Roles define duties; compliance follows rules; managers answer for team results." },
      ],
    },
  ],
};
