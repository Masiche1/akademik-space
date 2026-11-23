import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edxbtecit-u10-lesson-10-1",
  code: "10-1",
  title: "The Software Development Life Cycle",
  goal: "I CAN describe the phases of the SDLC and compare development methodologies and requirements gathering.",
  standards: ["Pearson BTEC Level 3 National Information Technology — Specialist unit: Systems Development and Implementation", "SDLC phases, methodologies, requirements analysis"],
  
  vocabulary: [
    { term: "SDLC", definition: "Software Development Life Cycle — structured process for building software." },
    { term: "Feasibility study", definition: "Assessment of whether a project is technically, economically and operationally viable." },
    { term: "Requirements specification", definition: "Document listing what the system must do (functional) and how well (non-functional)." },
    { term: "Waterfall model", definition: "Linear SDLC where each phase must finish before the next begins." },
    { term: "Agile methodology", definition: "Iterative approach delivering working software in short sprints." },
    { term: "Prototype", definition: "Early working model used to gather feedback before full development." },
    { term: "Stakeholder", definition: "Anyone affected by or with an interest in the system." },
  ],
  concepts: [
    {
      id: "edxbtecit-u10-l1-sdlc",
      title: "SDLC phases",
      skill: "Describe each phase of the software development life cycle and its outputs.",
      lesson: {
        sections: [
          {
            heading: "The phases",
            body: "**1. Planning/feasibility**: is the project worthwhile? Technical, economic, operational feasibility. **2. Requirements analysis**: gather what users need — functional (features) and non-functional (performance, security) requirements. **3. Design**: architecture, databases, interfaces, algorithms — produces design documents. **4. Implementation/coding**: developers write the program. **5. Testing**: verify it meets requirements and is bug-free. **6. Deployment/implementation**: install and roll out to users. **7. Maintenance**: fix bugs, add features, adapt to change — often the longest phase.",
          },
          {
            heading: "Why structure matters",
            body: "A structured SDLC reduces risk, ensures documentation, and makes maintenance possible years later. Skipping phases (e.g. no testing or no requirements) causes costly failures — most software projects fail due to unclear requirements, not bad code.\n\nDeliverables per phase: feasibility report → requirements spec → design docs → source code → test results → deployed system → maintenance logs.",
          },
        ],
        keyFormulas: [
          { name: "SDLC order", statement: "Plan → requirements → design → code → test → deploy → maintain" },
          { name: "Feasibility types", statement: "Technical, economic, operational, legal" },
        ],
        workedExample: {
          problem: "A library wants software to manage loans. List the SDLC phases it would go through.",
          solution: "Feasibility study → gather librarian/user requirements → design database and screens → code → test loan/return scenarios → deploy to library PCs → maintain and update.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u10-l1-sdlc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which SDLC phase produces the requirements specification?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Implementation"
                    },
                    {
                              "id": "b",
                              "text": "Requirements analysis"
                    },
                    {
                              "id": "c",
                              "text": "Maintenance"
                    },
                    {
                              "id": "d",
                              "text": "Deployment"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Requirements analysis",
                              "statement": "Phase producing the requirements specification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Requirements analysis gathers and documents needs.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Requirements analysis"
},
        },
        {
          id: "edxbtecit-u10-l1-sdlc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the first phase of the SDLC and its purpose.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Planning/feasibility",
                              "statement": "Assess viability before committing resources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Planning/feasibility study.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Decides if the project is viable (technical/economic/operational).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Feasibility study — check viability first"
},
        },
        {
          id: "edxbtecit-u10-l1-sdlc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why maintenance is often the longest phase of the SDLC.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Maintenance phase",
                              "statement": "System lives for years after release."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Software is used for years after deployment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bugs found in use, requirements change, technology evolves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Ongoing fixes and enhancements continue throughout its life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "System used for years → continuous fixes and enhancements"
},
        },
        {
          id: "edxbtecit-u10-l1-sdlc-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A school skips the testing phase to save time. Explain three likely consequences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Testing necessity",
                              "statement": "Untested software ships defects to users."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Undetected bugs reach users — crashes, wrong results.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Errors discovered in production cost far more to fix.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Loss of trust; may need emergency rollback.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Time 'saved' is repaid with rework later.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Link to real-world impact.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Bugs ship to users, costly fixes, lost trust, rework"
},
        },
        {
          id: "edxbtecit-u10-l1-sdlc-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "List the SDLC phases in order.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the output (deliverable) of the design phase.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Name two types of feasibility study.",
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
                              "name": "SDLC structure",
                              "statement": "Phases produce defined deliverables."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Plan, requirements, design, code, test, deploy, maintain.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All seven in correct order.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Design documents (architecture, database, interfaces).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Technical and economic (or operational/legal).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "7 phases in order; design docs; technical+economic feasibility"
},
        },
        {
          id: "edxbtecit-u10-l1-sdlc-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define the SDLC. (b) List its phases in order. (c) State the purpose of the feasibility study. (d) What does the requirements analysis phase produce? (e) Explain why testing cannot be skipped. (f) What happens during maintenance?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define SDLC.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Phases in order.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Feasibility purpose.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Requirements analysis output.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Why testing is essential.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Maintenance activities.",
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
                              "name": "SDLC",
                              "statement": "Structured software development process."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Structured process for planning, building, testing and maintaining software.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Plan, requirements, design, code, test, deploy, maintain.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All seven correct.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Decides if project is viable before committing resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Requirements specification (functional + non-functional).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Finds defects before users do.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Cheaper than fixing in production.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Bug fixes, updates, enhancements over system life.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "SDLC phases, feasibility, requirements, testing and maintenance."
},
        },
      ],
    },
    {
      id: "edxbtecit-u10-l1-methods",
      title: "Methodologies and requirements",
      skill: "Compare waterfall and agile methodologies and distinguish functional from non-functional requirements.",
      lesson: {
        sections: [
          {
            heading: "Development methodologies",
            body: "**Waterfall**: sequential phases, each completed before the next — good for fixed, well-understood requirements; rigid if needs change. **Iterative**: cycles of design-build-test refining the system. **Agile/Scrum**: short sprints (1-4 weeks) delivering working increments; daily stand-ups, backlog prioritisation, client feedback each sprint.\n\n**Prototyping**: build a quick model early to validate ideas. **RAD** (Rapid Application Development) compresses phases for fast delivery.",
          },
          {
            heading: "Requirements",
            body: "**Functional requirements**: what the system does — features, inputs, outputs (e.g. 'calculate total price'). **Non-functional**: how well it does it — performance, security, usability, reliability, maintainability (e.g. 'respond in <2 seconds').\n\nGathered via interviews, questionnaires, observation, workshops. **Use cases** describe interactions between actors (users) and the system. Poor requirements are the #1 cause of project failure.",
          },
        ],
        keyFormulas: [
          { name: "Waterfall", statement: "Sequential; rigid; fixed requirements" },
          { name: "Agile", statement: "Iterative sprints; changing requirements OK" },
          { name: "Functional vs non-functional", statement: "What it does vs how well" },
        ],
        workedExample: {
          problem: "Classify: (a) 'user can search the catalogue', (b) 'search returns results within 1 second'.",
          solution: "(a) Functional — describes a feature. (b) Non-functional — describes performance/quality.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u10-l1-methods-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which methodology delivers working software in short sprints with frequent client feedback?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Waterfall"
                    },
                    {
                              "id": "b",
                              "text": "Agile"
                    },
                    {
                              "id": "c",
                              "text": "Big bang"
                    },
                    {
                              "id": "d",
                              "text": "Code and fix"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Agile",
                              "statement": "Iterative sprints delivering working increments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Agile uses short sprints and feedback.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Agile"
},
        },
        {
          id: "edxbtecit-u10-l1-methods-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish functional from non-functional requirements.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Requirement types",
                              "statement": "What system does vs how well."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Functional = features/behaviours the system must have.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Non-functional = quality attributes (speed, security, usability).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Functional = what; non-functional = how well"
},
        },
        {
          id: "edxbtecit-u10-l1-methods-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when the waterfall model is appropriate and when agile is better.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Waterfall vs agile",
                              "statement": "Fixed requirements vs changing needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Waterfall suits fixed, well-understood requirements (e.g. regulatory systems).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Agile suits evolving needs where feedback matters (apps, websites).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Waterfall cannot easily accommodate late changes; agile welcomes them.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Waterfall = fixed requirements; agile = evolving needs"
},
        },
        {
          id: "edxbtecit-u10-l1-methods-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A startup building a social media app expects requirements to change constantly. Recommend a methodology and justify it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Methodology selection",
                              "statement": "Match methodology to requirement stability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Agile recommended — handles changing requirements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sprints deliver working increments users can try early.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Frequent feedback prevents building unwanted features.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Justified against waterfall's rigidity.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Linked to startup/social app scenario.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Agile — iterative sprints accommodate changing requirements"
},
        },
        {
          id: "edxbtecit-u10-l1-methods-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Classify: 'users can reset their password'.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Classify: 'the system must handle 500 concurrent users'.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "State two techniques for gathering requirements.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain what a use case describes.",
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
                              "name": "Requirements gathering",
                              "statement": "Functional/non-functional; interviews, observation, use cases."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Functional — a feature the system must provide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Non-functional — performance/scalability.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Interviews, questionnaires, observation, workshops.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Interaction between an actor and the system.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Describes steps to achieve a goal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Functional vs non-functional; gathering techniques; use case = actor-system interaction"
},
        },
        {
          id: "edxbtecit-u10-l1-methods-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Compare waterfall and agile methodologies. (b) Define functional and non-functional requirements. (c) Give one example of each. (d) Name two techniques for gathering requirements. (e) Explain why unclear requirements cause project failure. (f) When is prototyping useful?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Waterfall vs agile.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Functional vs non-functional.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "One example of each.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Two gathering techniques.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Why unclear requirements fail.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "When prototyping helps.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Methodologies and requirements",
                              "statement": "Approaches and requirement types."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Waterfall sequential/rigid; agile iterative/flexible.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both contrasted.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Functional = what system does; non-functional = how well.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "E.g. 'login button' (functional); 'loads in 2s' (non-functional).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Interviews, observation, questionnaires, workshops.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Team builds wrong system — costly rework.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "To validate ideas early when requirements uncertain.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Methodologies, requirement types, gathering and failure causes."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u10-n101-notes",
      title: "Systems dev 10-1 — notes",
      summary: "SDLC = plan→requirements→design→code→test→deploy→maintain; waterfall rigid vs agile iterative; functional=what, non-functional=how well.",
      sections: [
        { heading: "Key idea", body: "Structure reduces risk; skipping phases causes expensive failures." },
        { heading: "Requirements", body: "Unclear requirements are the top cause of project failure." },
        { heading: "Choice", body: "Fixed requirements → waterfall; evolving needs → agile." },
      ],
    },
  ],
};
