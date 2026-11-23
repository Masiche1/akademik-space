import type { Lesson } from "../../../types.ts";

export const lesson602: Lesson = {
  id: "edxbtecit-u6-lesson-6-2",
  code: "6-2",
  title: "Scheduling, Resources and Risk",
  goal: "I CAN schedule project tasks, allocate resources and manage project risks.",
  standards: ["Pearson Level 3 AAQ BTEC National in Information Technology — applied IT content", "Project scheduling, resources and risk management"],
  
  vocabulary: [
    { term: "Gantt chart", definition: "Bar chart showing tasks, durations and dependencies over time." },
    { term: "Critical path", definition: "Longest chain of dependent tasks determining minimum duration." },
    { term: "Float", definition: "Amount a task can be delayed without affecting project finish." },
    { term: "Resource", definition: "People, equipment, software or budget needed for tasks." },
    { term: "Risk", definition: "Uncertain event that may affect project objectives." },
    { term: "Risk register", definition: "Record of identified risks, responses and owners." },
  ],
  concepts: [
    {
      id: "edxbtecit-u6-l2-scheduling",
      title: "Scheduling and the Critical Path",
      skill: "Build schedules, identify dependencies and interpret float and critical path.",
      lesson: {
        sections: [
          {
            heading: "Scheduling tools",
            body: "A Gantt chart displays tasks as bars on a timeline with dependencies. A network diagram shows task sequences and the critical path. Milestones mark key deliverables. Schedule must balance task durations, dependencies, resources and deadlines.",
          },
          {
            heading: "Critical path and float",
            body: "The critical path is the longest dependent sequence; any delay on it delays the project. Tasks off the critical path have float and can be delayed without affecting finish. Float can be used to absorb minor delays or reallocate resources.",
          },
          {
            heading: "Schedule control",
            body: "Monitor actual progress against baseline, update estimates, manage changes through change control and communicate impacts. Baseline changes require approval because they affect cost, scope or quality.",
          },
        ],
        keyFormulas: [
          { name: "Critical path", statement: "Longest dependency chain sets minimum duration." },
          { name: "Float", statement: "Slack time before project finish is affected." },
          { name: "Milestone", statement: "Key checkpoint/deliverable in schedule." },
        ],
        workedExample: {
          problem: "Task A=5 days, B depends on A=3 days, C can run parallel=4 days. Find minimum duration.",
          solution: "A→B = 8 days; C = 4 days. Critical path A→B determines 8-day minimum.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u6-l2-scheduling-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which chart shows tasks over time with dependencies?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gantt chart"
                    },
                    {
                              "id": "b",
                              "text": "Pie chart"
                    },
                    {
                              "id": "c",
                              "text": "Scatter graph"
                    },
                    {
                              "id": "d",
                              "text": "Org chart"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gantt chart",
                              "statement": "Timeline chart of tasks, durations and dependencies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gantt shows schedule over time.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Gantt chart"
},
        },
        {
          id: "edxbtecit-u6-l2-scheduling-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define critical path and float.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Critical path/float",
                              "statement": "Critical path sets duration; float is available delay."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Critical path = longest dependent task chain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Float = time a task can slip without delaying finish.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both terms accurately defined.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Critical path sets duration; float is slack time."
},
        },
        {
          id: "edxbtecit-u6-l2-scheduling-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the critical path matters in scheduling.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Critical path",
                              "statement": "Delays on critical tasks delay the whole project."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Critical tasks have zero float.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Any delay there extends project finish.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Non-critical tasks can absorb delays.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resources/attention should prioritise critical path.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Critical path determines finish; protect it from delays."
},
        },
        {
          id: "edxbtecit-u6-l2-scheduling-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how dependencies affect project duration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Dependencies",
                              "statement": "Task order constrains when work can start and finish."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Some tasks cannot start until predecessors finish.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Long dependency chains create critical path.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Parallel tasks can shorten schedule if resources allow.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Missing dependencies cause unrealistic plans.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accurate dependency mapping is essential.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Dependencies sequence work; critical path and parallelism determine duration."
},
        },
        {
          id: "edxbtecit-u6-l2-scheduling-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A project has tasks A(4 days), B depends on A(3 days), C(2 days) independent.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the minimum project duration.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify the critical path.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State how much C could be delayed without affecting finish.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Schedule calculation",
                              "statement": "Duration = longest dependency path; float = difference from critical path."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Path A→B = 4+3 = 7 days.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Independent C = 2 days, so minimum = 7.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Critical path is A then B.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "C is off critical path.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Float for C = 7-2 = 5 days.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "c"
                    }
          ],
          "finalAnswer": "7 days; critical path A→B; C float = 5 days."
},
        },
        {
          id: "edxbtecit-u6-l2-scheduling-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A software rollout is behind schedule.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe two schedule-control measures.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how float can help recover time.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "State two risks of compressing the schedule.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Schedule control",
                              "statement": "Monitor variance, use float and manage changes to protect deadlines."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare actual vs baseline progress.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Identify which tasks are on critical path.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Reallocate resources or resequence tasks.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Update schedule through change control.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Float allows non-critical delays without affecting finish.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Use float to absorb minor slippage.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Critical path has no float; must be protected.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Crashing adds cost for limited time savings.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Fast-tracking increases risk of rework/errors.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Quality and team workload may suffer.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Monitor variance, protect critical path, use float; compression risks cost/quality."
},
        },
      ],
    },
    {
      id: "edxbtecit-u6-l2-resources",
      title: "Resources and Risk Management",
      skill: "Allocate resources effectively and identify, assess and respond to project risks.",
      lesson: {
        sections: [
          {
            heading: "Resource management",
            body: "Resources include people, hardware, software, facilities and budget. Resource planning matches skills to tasks, avoids overallocation and levels peaks. Crashing adds resources to shorten critical tasks; fast-tracking overlaps tasks to save time but increases risk.",
          },
          {
            heading: "Risk identification",
            body: "Risks may be technical, schedule, cost, resource, stakeholder or external. Brainstorming, checklists, interviews and historical data identify them. A risk register records description, likelihood, impact, owner, response and review date.",
          },
          {
            heading: "Risk assessment and response",
            body: "Likelihood × impact prioritises risks. Responses include avoid (change plan), transfer (insurance/contract), mitigate (reduce probability/impact) or accept (with contingency). High risks need proactive owners and monitoring.",
          },
        ],
        keyFormulas: [
          { name: "Resource types", statement: "People, equipment, software, facilities, budget." },
          { name: "Risk priority", statement: "Likelihood × impact." },
          { name: "Risk responses", statement: "Avoid, transfer, mitigate, accept." },
        ],
        workedExample: {
          problem: "A supplier delay risk has high impact but medium likelihood. Suggest two responses.",
          solution: "Mitigate by identifying an alternative supplier and add schedule buffer; transfer part of risk through contract terms.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u6-l2-resources-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of a project resource?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Budget"
                    },
                    {
                              "id": "b",
                              "text": "Cloud"
                    },
                    {
                              "id": "c",
                              "text": "Logo"
                    },
                    {
                              "id": "d",
                              "text": "Poster"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Resource",
                              "statement": "People, equipment, software, facilities or budget needed for tasks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Budget is a project resource.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Budget"
},
        },
        {
          id: "edxbtecit-u6-l2-resources-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three types of project risk.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Risk types",
                              "statement": "Risks may be technical, schedule, cost, resource, stakeholder or external."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Technical risk e.g. software failure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Schedule/cost risk.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resource/stakeholder/external risk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Technical, schedule/cost, resource/stakeholder/external."
},
        },
        {
          id: "edxbtecit-u6-l2-resources-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between crashing and fast-tracking.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Schedule compression",
                              "statement": "Crashing adds resources; fast-tracking overlaps dependent tasks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crashing adds resources to critical tasks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fast-tracking performs tasks in parallel despite dependencies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both save time but increase cost/risk.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fast-tracking may cause rework if assumptions fail.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Crashing adds resources; fast-tracking overlaps tasks at higher risk."
},
        },
        {
          id: "edxbtecit-u6-l2-resources-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how resource overallocation affects a project.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Resource allocation",
                              "statement": "Overloaded resources cause delays, errors and burnout."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tasks compete for the same person/equipment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Work queues delay critical path.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rushed work increases defects and rework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Team fatigue reduces productivity and morale.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Levelling and prioritisation prevent overload.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Overallocation delays work, causes errors and burnout; level resources."
},
        },
        {
          id: "edxbtecit-u6-l2-resources-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A project faces a high-impact vendor delay risk.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Assess likelihood and impact for prioritisation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Choose two risk responses and explain them.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Risk assessment",
                              "statement": "Priority = likelihood × impact guides response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Likelihood based on vendor history/availability.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Impact on schedule, cost and quality.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "High impact justifies high-priority response.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Mitigate: backup supplier or buffer time.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Transfer: contract penalty/service credits.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Response matched to priority.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Assess likelihood × impact; mitigate with backup/buffer and transfer via contract."
},
        },
        {
          id: "edxbtecit-u6-l2-resources-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Manage resources and risks for a server migration project.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three resource types needed.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe a resource allocation plan.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Identify two risks and responses.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Resource and risk planning",
                              "statement": "Match resources to tasks and prepare responses for likely risks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "People: sysadmins, testers, communications.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Equipment/software: new servers, licences, tools.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Budget/facilities for migration window.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Assign skilled staff to critical tasks first.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Avoid overlapping peak demands.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Review utilisation and adjust plan.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Risk: data loss during migration.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Response: verified backups and rollback plan.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Risk: downtime exceeding window.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Response: rehearsal, buffer and staged cutover.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "People/equipment/budget; prioritised allocation; backup/downtime risks with mitigation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u6-l2-notes",
      title: "Scheduling, resources and risk — notes",
      summary: "Use Gantt/network diagrams; protect critical path; allocate resources without overload; assess likelihood × impact and respond to risks.",
      sections: [
        { heading: "Schedule", body: "Critical path sets duration; float absorbs delays; control changes formally." },
        { heading: "Resources", body: "Match skills to tasks; avoid overallocation; crashing/fast-tracking trade cost for time." },
        { heading: "Risk", body: "Register risks, score likelihood × impact, assign owners and responses." },
      ],
    },
  ],
};
