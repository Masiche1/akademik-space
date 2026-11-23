import type { Lesson } from "../../../types.ts";

export const lesson603: Lesson = {
  id: "edxbtecit-u6-lesson-6-3",
  code: "6-3",
  title: "Quality, Communication and Evaluation",
  goal: "I CAN control project quality, manage communication and evaluate project success at closure.",
  standards: ["Pearson Level 3 AAQ BTEC National in Information Technology — applied IT content", "Quality assurance, communication and project evaluation"],
  
  vocabulary: [
    { term: "Quality assurance", definition: "Planned activities ensuring processes meet required standards." },
    { term: "Quality control", definition: "Checking outputs against requirements and standards." },
    { term: "Acceptance criteria", definition: "Conditions a deliverable must meet to be accepted." },
    { term: "Communication plan", definition: "Defines what information goes to whom, when and how." },
    { term: "Lessons learned", definition: "Review of what worked and what should improve." },
    { term: "Project closure", definition: "Formal end including acceptance, handover and evaluation." },
  ],
  concepts: [
    {
      id: "edxbtecit-u6-l3-quality",
      title: "Quality Management",
      skill: "Plan quality, apply QA/QC and use acceptance criteria for deliverables.",
      lesson: {
        sections: [
          {
            heading: "Quality planning",
            body: "Quality planning defines standards, methods and responsibilities before work begins. Quality requirements may include reliability, usability, security, documentation and compliance. Acceptance criteria make 'done' objective and testable.",
          },
          {
            heading: "QA and QC",
            body: "Quality assurance improves processes: reviews, checklists, standards and training. Quality control checks outputs: inspections, tests, audits and measurements. QA prevents defects; QC detects remaining defects. Both are needed.",
          },
          {
            heading: "Quality control tools",
            body: "Checklists verify requirements; inspections review deliverables; testing checks behaviour; statistical methods track defect rates; peer review improves code/documents. Findings should trigger corrective action and prevent recurrence.",
          },
        ],
        keyFormulas: [
          { name: "QA vs QC", statement: "QA improves processes; QC checks outputs." },
          { name: "Acceptance criteria", statement: "Objective conditions for deliverable acceptance." },
          { name: "Corrective action", statement: "Fix defect and prevent recurrence." },
        ],
        workedExample: {
          problem: "A deliverable meets features but documentation is incomplete. Should it be accepted?",
          solution: "No — if documentation is an acceptance criterion, the deliverable fails QC until corrected.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u6-l3-quality-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which activity checks finished outputs against requirements?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quality control"
                    },
                    {
                              "id": "b",
                              "text": "Brainstorming"
                    },
                    {
                              "id": "c",
                              "text": "Negotiation"
                    },
                    {
                              "id": "d",
                              "text": "Advertising"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quality control",
                              "statement": "Checks outputs against requirements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "QC checks finished outputs.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Quality control"
},
        },
        {
          id: "edxbtecit-u6-l3-quality-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three quality assurance activities.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Quality assurance",
                              "statement": "Process-focused activities prevent defects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Define standards and checklists.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conduct reviews/inspections of process.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Train staff and improve methods.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Standards/checklists, reviews, training/process improvement."
},
        },
        {
          id: "edxbtecit-u6-l3-quality-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between QA and QC.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "QA vs QC",
                              "statement": "QA prevents defects through process; QC detects defects in outputs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "QA focuses on processes and standards.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "QC focuses on inspecting/testing deliverables.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "QA prevents problems; QC finds remaining issues.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both needed for reliable quality.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "QA improves processes; QC checks outputs."
},
        },
        {
          id: "edxbtecit-u6-l3-quality-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why acceptance criteria should be defined before work starts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Acceptance criteria",
                              "statement": "Objective criteria agreed early prevent disputes and rework."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "They define 'done' objectively.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Stakeholders know what will be tested.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They guide design and testing efforts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They reduce late disputes and scope creep.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Acceptance becomes measurable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Early criteria define done, guide work and prevent disputes."
},
        },
        {
          id: "edxbtecit-u6-l3-quality-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A deliverable fails acceptance testing.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two possible causes.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe the quality response.",
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
                              "name": "Quality response",
                              "statement": "Failed acceptance triggers correction, re-test and root-cause action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Requirements misunderstood or changed.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Defects in build or test environment.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Acceptance criteria unclear/incomplete.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Reject deliverable and log defects.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Fix and re-test against criteria.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Review process to prevent recurrence.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Clarify requirements/fix defects; reject, correct, retest and review process."
},
        },
        {
          id: "edxbtecit-u6-l3-quality-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Implement quality management for a website redesign project.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define two quality standards and acceptance criteria.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe QA and QC activities.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain corrective action for a failed review.",
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
                              "name": "Quality management",
                              "statement": "Standards, criteria, QA/QC and corrective action ensure deliverables meet needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Standard: accessibility and performance targets.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Criterion: pages load under agreed time and pass checks.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Second standard/criterion e.g. content approval.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Criteria measurable and agreed.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "QA: reviews, checklists, design standards.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "QC: test pages, inspect content, audit accessibility.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Record defects and verify fixes.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Link checks to acceptance criteria.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Log defect, assign fix and retest.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Review why defect occurred to prevent recurrence.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Standards/criteria; QA process + QC output checks; log, fix, retest, review."
},
        },
      ],
    },
    {
      id: "edxbtecit-u6-l3-communication",
      title: "Communication and Project Evaluation",
      skill: "Plan communication, report progress and evaluate project outcomes at closure.",
      lesson: {
        sections: [
          {
            heading: "Communication plan",
            body: "Identify audiences, information needs, frequency, channel and owner. Stakeholders need different detail: executives want status/RAG, users want impacts, teams need tasks. Poor communication causes missed requirements, duplicated work and loss of trust.",
          },
          {
            heading: "Progress reporting",
            body: "Reports compare actual progress with baseline for scope, schedule, cost and quality. Use RAG status (red/amber/green), highlight risks/issues, decisions needed and next steps. Reports should be consistent and honest.",
          },
          {
            heading: "Evaluation and closure",
            body: "Closure includes formal acceptance of deliverables, handover to operations, documentation, releasing resources and lessons learned. Evaluation compares outcomes with objectives and business case. Benefits realisation may continue after project end.",
          },
        ],
        keyFormulas: [
          { name: "Communication plan", statement: "Audience × information × frequency × channel." },
          { name: "RAG status", statement: "Red=at risk, amber=concern, green=on track." },
          { name: "Lessons learned", statement: "Review successes/failures to improve future projects." },
        ],
        workedExample: {
          problem: "A project is 2 weeks late but within budget. What should the status report say?",
          solution: "Amber/red for schedule, green for cost, explain cause, impact, recovery options and decisions needed.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u6-l3-communication-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a communication plan define?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What information goes to whom and when"
                    },
                    {
                              "id": "b",
                              "text": "Only the budget"
                    },
                    {
                              "id": "c",
                              "text": "Only the schedule"
                    },
                    {
                              "id": "d",
                              "text": "Only the risks"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Communication plan",
                              "statement": "Defines audience, information, frequency and channel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plan defines information flow to stakeholders.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** What information goes to whom and when"
},
        },
        {
          id: "edxbtecit-u6-l3-communication-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three items for a project status report.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Status report",
                              "statement": "Reports progress, issues, risks and next steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Progress against plan/schedule.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Risks/issues and their status.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cost/resources and next steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Progress, risks/issues, cost/resources/next steps."
},
        },
        {
          id: "edxbtecit-u6-l3-communication-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why different stakeholders need different communication.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Audience-tailored communication",
                              "statement": "Information should match stakeholder role and influence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Executives need summary/status/RAG.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Teams need task-level detail.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Users need impacts and timelines.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Tailoring improves understanding and decisions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Tailor detail/channel to audience role and influence."
},
        },
        {
          id: "edxbtecit-u6-l3-communication-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the value of lessons learned at project closure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Lessons learned",
                              "statement": "Review improves future project performance and organisational knowledge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies what worked and should be repeated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies failures to avoid recurrence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Updates processes, templates and training.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Captures knowledge before team disperses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Improves future estimates and risk management.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lessons learned capture successes/failures to improve future projects."
},
        },
        {
          id: "edxbtecit-u6-l3-communication-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A project is finishing but benefits are not yet visible.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why closure should not wait only for benefits.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe what closure should include.",
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
                              "name": "Project closure",
                              "statement": "Closure accepts deliverables and hands over; benefits may be realised later."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Projects end when deliverables are accepted.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Benefits often take time to emerge.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Keeping project open wastes resources.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Formal acceptance of deliverables.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Handover, documentation and resource release.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Lessons learned and benefits review plan.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Close on accepted deliverables/handover; monitor benefits separately."
},
        },
        {
          id: "edxbtecit-u6-l3-communication-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Close a completed IT upgrade project.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the communication needed before closure.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "List four closure activities.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain how success should be evaluated.",
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
                              "name": "Project closure",
                              "statement": "Communicate completion, accept deliverables, hand over and evaluate outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Notify stakeholders of completion status.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Request formal acceptance of deliverables.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Communicate handover and support arrangements.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Obtain acceptance sign-off.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Hand over documentation and trained users.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Release team/resources and close contracts.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Conduct lessons-learned review.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Compare outcomes with SMART objectives/business case.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Review schedule, cost and quality performance.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Identify benefits realisation follow-up.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Communicate acceptance; sign-off, handover, release, lessons; evaluate vs objectives."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u6-l3-notes",
      title: "Quality, communication and evaluation — notes",
      summary: "QA improves processes and QC checks outputs; communication plans tailor reporting; closure accepts deliverables and captures lessons learned.",
      sections: [
        { heading: "Quality", body: "Define acceptance criteria early; use QA for process and QC for outputs." },
        { heading: "Communication", body: "Match information, frequency and channel to stakeholder needs." },
        { heading: "Closure", body: "Accept deliverables, hand over, release resources and review lessons/benefits." },
      ],
    },
  ],
};
