import type { Lesson } from "../../../types.ts";

export const lesson601: Lesson = {
  id: "edxbtecit-u6-lesson-6-1",
  code: "6-1",
  title: "Project Initiation and Planning",
  goal: "I CAN define project objectives, scope, stakeholders and deliverables and produce a basic project plan.",
  standards: ["Pearson Level 3 AAQ BTEC National in Information Technology — applied IT content", "Project initiation, scope, stakeholders and planning"],
  
  vocabulary: [
    { term: "Project", definition: "Temporary effort with defined objectives, resources and an end date." },
    { term: "Project sponsor", definition: "Senior owner providing authority, funding and support." },
    { term: "Stakeholder", definition: "Person or group affected by or able to influence the project." },
    { term: "Scope", definition: "Work included in and excluded from the project." },
    { term: "Deliverable", definition: "Tangible output produced by the project." },
    { term: "Work breakdown structure", definition: "Hierarchy dividing project work into manageable tasks." },
  ],
  concepts: [
    {
      id: "edxbtecit-u6-l1-objectives",
      title: "Objectives, Scope and Deliverables",
      skill: "Define SMART objectives, scope boundaries and project deliverables.",
      lesson: {
        sections: [
          {
            heading: "Project definition",
            body: "A project is temporary and unique, with a defined start, end, objectives and resources. It differs from operations, which are ongoing. A project brief or charter confirms the business case, appoints a sponsor and states high-level scope, constraints and success criteria.",
          },
          {
            heading: "SMART objectives",
            body: "Objectives should be Specific, Measurable, Achievable, Relevant and Time-bound. Vague aims such as 'improve IT' cannot be managed or verified. Good objectives link to business benefits and can be tested at project closure.",
          },
          {
            heading: "Scope and deliverables",
            body: "Scope defines what is included and explicitly excluded. Deliverables are outputs such as installed systems, documentation or training. Scope creep occurs when extra work is added without adjusting time, cost or resources; change control prevents unmanaged growth.",
          },
        ],
        keyFormulas: [
          { name: "SMART", statement: "Specific, Measurable, Achievable, Relevant, Time-bound." },
          { name: "Project vs operations", statement: "Temporary unique effort vs ongoing activity." },
          { name: "Scope", statement: "Included work minus excluded work." },
        ],
        workedExample: {
          problem: "Rewrite 'improve the website' as a SMART project objective.",
          solution: "Redesign the checkout process so cart abandonment falls by 10% within three months using the existing platform.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u6-l1-objectives-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a SMART objective?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make the system better"
                    },
                    {
                              "id": "b",
                              "text": "Reduce login time by 30% within 6 weeks"
                    },
                    {
                              "id": "c",
                              "text": "Do some IT work"
                    },
                    {
                              "id": "d",
                              "text": "Improve everything"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SMART objective",
                              "statement": "Specific, measurable, achievable, relevant and time-bound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only option b is measurable and time-bound.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Reduce login time by 30% within 6 weeks"
},
        },
        {
          id: "edxbtecit-u6-l1-objectives-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State three items that belong in a project brief.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Project brief",
                              "statement": "Summarises purpose, scope, stakeholders, constraints and success."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Objectives and scope.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Stakeholders and constraints.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Deliverables, risks or success criteria.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Objectives/scope, stakeholders/constraints, deliverables/success criteria."
},
        },
        {
          id: "edxbtecit-u6-l1-objectives-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between a project and ongoing operations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Project vs operations",
                              "statement": "Projects are temporary and unique; operations are continuous."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Project has defined start/end and unique objective.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Operations repeat continuously, e.g. payroll.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Projects create change; operations sustain it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear distinction stated.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Project = temporary unique change; operations = ongoing routine."
},
        },
        {
          id: "edxbtecit-u6-l1-objectives-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how scope creep affects a project.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Scope creep",
                              "statement": "Uncontrolled additions expand work without adjusting constraints."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Extra work increases effort and time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Costs and resources rise beyond plan.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Quality may suffer as deadlines tighten.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Team morale and stakeholder trust can fall.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Change control limits creep.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Scope creep causes delays, cost overruns and quality risk; control changes formally."
},
        },
        {
          id: "edxbtecit-u6-l1-objectives-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A charity wants a donation website in three months.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write one SMART objective.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Identify two deliverables and one excluded item.",
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
                              "name": "Project definition",
                              "statement": "Objectives, deliverables and exclusions define success and boundaries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specific: secure online donation pages.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Measurable/time-bound: launch within 3 months.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Relevant to fundraising goal.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Deliverables: website, payment integration, training.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Second deliverable or clear outputs.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Exclusion e.g. no mobile app or marketing campaign.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "SMART launch objective; website/payment/training deliverables; clear exclusions."
},
        },
        {
          id: "edxbtecit-u6-l1-objectives-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Define the first stage of an inventory management project.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a SMART objective and business case reason.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "List three deliverables and two exclusions.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why scope boundaries matter.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Project initiation",
                              "statement": "Clear objectives, deliverables and exclusions align delivery with business need."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Objective specific: implement stock tracking.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Measurable/time-bound: reduce stock errors by X in Y months.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Business reason: lower losses/improve ordering.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Relevant to operations efficiency.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Deliverables: requirements doc, database, trained staff.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Two exclusions e.g. no supplier portal or hardware purchase.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Boundaries prevent uncontrolled expansion.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "They make planning and acceptance possible.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "SMART objective/business case; deliverables/exclusions; boundaries control scope."
},
        },
      ],
    },
    {
      id: "edxbtecit-u6-l1-planning",
      title: "Stakeholders and Work Planning",
      skill: "Identify stakeholders, build a work breakdown structure and estimate work.",
      lesson: {
        sections: [
          {
            heading: "Stakeholder analysis",
            body: "Stakeholders include sponsor, users, managers, developers, suppliers and regulators. Analysis identifies their interests, influence, expectations and communication needs. High-influence/high-interest stakeholders need close engagement; keep everyone informed appropriately.",
          },
          {
            heading: "Work breakdown structure",
            body: "A WBS divides the project into phases, deliverables and tasks small enough to estimate and assign. Each task should have a clear owner, duration and dependency. The WBS is the foundation for scheduling, resource planning and progress tracking.",
          },
          {
            heading: "Estimation and dependencies",
            body: "Effort estimates should use historical data, expert judgement or analogous projects. Dependencies state which tasks must finish before others start. Accurate estimates and dependencies prevent impossible schedules and expose risks early.",
          },
        ],
        keyFormulas: [
          { name: "Stakeholder grid", statement: "Interest × influence guides engagement." },
          { name: "WBS", statement: "Project → deliverables → tasks." },
          { name: "Dependency", statement: "Task B cannot start until task A finishes." },
        ],
        workedExample: {
          problem: "List stakeholders for a school timetable system and identify the most influential.",
          solution: "Headteacher/sponsor, timetable coordinators, teachers, students, IT support, parents. Sponsor and coordinators have high influence and interest.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u6-l1-planning-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who typically has the highest authority over a project?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Project sponsor"
                    },
                    {
                              "id": "b",
                              "text": "End user"
                    },
                    {
                              "id": "c",
                              "text": "Printer supplier"
                    },
                    {
                              "id": "d",
                              "text": "Visitor"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Project sponsor",
                              "statement": "Senior owner providing authority, funding and support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sponsor has highest authority.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Project sponsor"
},
        },
        {
          id: "edxbtecit-u6-l1-planning-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three groups that could be stakeholders in an IT project.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stakeholders",
                              "statement": "Anyone affected by or able to influence the project."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Project sponsor/management.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "End users/customers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Developers, IT support or suppliers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sponsor, users, developers/support/suppliers."
},
        },
        {
          id: "edxbtecit-u6-l1-planning-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a WBS improves project planning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "WBS",
                              "statement": "Decomposes work into estimable, assignable tasks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Breaks large project into manageable tasks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enables effort estimation and responsibility assignment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reveals dependencies between tasks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Supports progress measurement and control.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "WBS enables estimation, assignment, dependencies and progress tracking."
},
        },
        {
          id: "edxbtecit-u6-l1-planning-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why stakeholder analysis should happen early.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Stakeholder analysis",
                              "statement": "Early identification shapes requirements, communication and risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key stakeholders can shape objectives and scope.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Their needs become requirements early.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Influential opponents can be engaged before conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Communication plan can match audience needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduces late surprises and resistance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Early analysis shapes scope, requirements, communication and risk."
},
        },
        {
          id: "edxbtecit-u6-l1-planning-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A project team must plan a new intranet.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three stakeholder groups and their likely interests.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two examples of tasks in a WBS for this project.",
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
                              "name": "Stakeholder and WBS planning",
                              "statement": "Analysis identifies interests; WBS decomposes delivery work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Employees/users: easy access and relevant content.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "IT/management: security, cost and maintainability.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Content owners: control and update of pages.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Task example: requirements/design phase.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Task example: server setup/testing/training.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Tasks are deliverable-oriented and estimable.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Users/IT/owners interests; design, setup, testing, training tasks."
},
        },
        {
          id: "edxbtecit-u6-l1-planning-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Plan the work breakdown for an office relocation project.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify four stakeholders and one interest each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Create a three-level WBS outline.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain how dependencies should be recorded.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Project planning",
                              "statement": "Stakeholders, WBS and dependencies form the execution plan."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Employees: minimal disruption.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Management: budget and deadline.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "IT: connectivity and equipment move.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Facilities: lease, logistics and safety.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Level 1 project → level 2 phases (plan, move, settle).",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Level 3 tasks: inventory, packing, transport, setup.",
                              "marks": 2,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Dependencies: packing before transport, setup after arrival.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Record owner, duration and predecessor for each task.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Stakeholders; phased WBS; dependencies with owner/duration/predecessor."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u6-l1-notes",
      title: "Initiation and planning — notes",
      summary: "Define SMART objectives, scope, deliverables and stakeholders; use a WBS to decompose work into estimable tasks.",
      sections: [
        { heading: "Objectives", body: "SMART objectives make success measurable and time-bound." },
        { heading: "Scope", body: "State inclusions and exclusions; control changes to avoid scope creep." },
        { heading: "Planning", body: "Stakeholder analysis plus WBS produces assignable tasks and dependencies." },
      ],
    },
  ],
};
