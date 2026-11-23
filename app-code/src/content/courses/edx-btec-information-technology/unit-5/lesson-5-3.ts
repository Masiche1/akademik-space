import type { Lesson } from "../../../types.ts";

export const lesson503: Lesson = {
  id: "edxbtecit-u5-lesson-5-3",
  code: "5-3",
  title: "IT Support and Troubleshooting",
  goal: "I CAN follow IT support workflows and systematically diagnose common hardware, software and user problems.",
  standards: ["Pearson Level 3 AAQ BTEC National in Information Technology — applied IT content", "IT support workflows, diagnostics and troubleshooting"],
  
  vocabulary: [
    { term: "Helpdesk", definition: "Function receiving and resolving user IT problems." },
    { term: "Ticket", definition: "Record of a support request with status and history." },
    { term: "SLA", definition: "Service level agreement defining response and resolution targets." },
    { term: "Escalation", definition: "Passing a problem to a higher support level when needed." },
    { term: "Diagnostic tool", definition: "Utility gathering information about faults." },
    { term: "Known error", definition: "Documented fault with known cause and workaround." },
  ],
  concepts: [
    {
      id: "edxbtecit-u5-l3-support",
      title: "IT Support Workflows",
      skill: "Handle user requests through logging, prioritisation, resolution and escalation.",
      lesson: {
        sections: [
          {
            heading: "Support process",
            body: "A good support workflow logs every request as a ticket, records symptoms and environment, prioritises by impact/urgency, attempts diagnosis, resolves or escalates, and closes with user confirmation. Documentation enables knowledge reuse and audit.",
          },
          {
            heading: "Prioritisation and SLA",
            body: "Priority depends on business impact and urgency: system down for many users is critical; a single-user printer issue may be lower. SLAs define response and resolution times. Critical incidents may bypass normal queues but still need logging.",
          },
          {
            heading: "Escalation and knowledge",
            body: "Escalate when the issue exceeds skill, requires specialist access or persists beyond SLA. Known errors should be documented with workarounds. Feedback and root-cause analysis improve future support and prevent recurrence.",
          },
        ],
        keyFormulas: [
          { name: "Support flow", statement: "Log → prioritise → diagnose → resolve/escalate → close." },
          { name: "Priority", statement: "Impact × urgency determines queue position." },
          { name: "SLA", statement: "Agreed response and resolution targets." },
        ],
        workedExample: {
          problem: "Twenty users cannot access email. How should the helpdesk prioritise and handle this?",
          solution: "Log as critical/high-impact ticket, notify incident owner, check mail service and authentication, escalate if needed and update users until resolved.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u5-l3-support-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the purpose of a support ticket?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To record and track a support request"
                    },
                    {
                              "id": "b",
                              "text": "To store backups"
                    },
                    {
                              "id": "c",
                              "text": "To install software"
                    },
                    {
                              "id": "d",
                              "text": "To print invoices"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ticket",
                              "statement": "Record tracking a support request and its resolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tickets track requests and history.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Record and track a support request"
},
        },
        {
          id: "edxbtecit-u5-l3-support-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State three stages of a typical IT support workflow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Support workflow",
                              "statement": "Requests are logged, prioritised, resolved and closed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Log/record the request.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Prioritise and diagnose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resolve/escalate and close.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Log, prioritise/diagnose, resolve/close."
},
        },
        {
          id: "edxbtecit-u5-l3-support-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how impact and urgency affect ticket priority.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Prioritisation",
                              "statement": "Priority combines business impact and time sensitivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impact = number/users/departments affected.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Urgency = how quickly resolution is needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "High impact + high urgency = critical priority.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Low impact issues can wait for scheduled fixes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Priority = impact × urgency; critical issues get fastest response."
},
        },
        {
          id: "edxbtecit-u5-l3-support-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the benefits of documenting known errors.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Knowledge management",
                              "statement": "Documented errors speed resolution and reduce repeated diagnosis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Agents recognise recurring faults quickly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Workarounds restore service while permanent fix is planned.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Documentation preserves knowledge when staff change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Supports trend analysis and root-cause fixes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Improves SLA compliance and user satisfaction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Known-error docs speed fixes, preserve knowledge and support root-cause analysis."
},
        },
        {
          id: "edxbtecit-u5-l3-support-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A user reports 'the computer is broken'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State three questions the support agent should ask.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why gathering symptoms matters before fixing.",
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
                              "name": "Incident diagnosis",
                              "statement": "Clear symptoms narrow possible causes before changes are made."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "What exactly is not working?",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "When did it start and what changed?",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Any error messages or affected files/apps?",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Symptoms identify affected component/layer.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Prevents random changes that worsen the fault.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Improves first-time fix rate.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Ask what/when/errors; symptoms guide diagnosis before changes."
},
        },
        {
          id: "edxbtecit-u5-l3-support-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Handle a critical outage affecting a whole department.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe immediate response actions.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain communication and escalation.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Describe closure and follow-up.",
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
                              "name": "Incident management",
                              "statement": "Critical incidents need rapid triage, communication, escalation and follow-up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Log incident and assess scope/impact.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Check common causes: power, network, service, recent change.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Apply workaround if available.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Escalate to specialist if unresolved.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Notify affected users and stakeholders.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Provide updates until resolution.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Record timeline and decisions in ticket.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Confirm service restored with users.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Document root cause and resolution.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Schedule preventive action if needed.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Triage, workaround/escalation, communicate, document root cause and prevent recurrence."
},
        },
      ],
    },
    {
      id: "edxbtecit-u5-l3-diagnostics",
      title: "Diagnostics and Common Faults",
      skill: "Use diagnostic tools and a systematic method to resolve common IT problems.",
      lesson: {
        sections: [
          {
            heading: "Diagnostic tools",
            body: "Event Viewer shows system/application errors. Device Manager checks hardware status. Performance monitors show CPU, memory and disk usage. Disk tools check health/free space. Safe Mode helps isolate software vs hardware faults. Built-in utilities and logs provide evidence before changes.",
          },
          {
            heading: "Common faults",
            body: "Slow performance may be low memory, full disk or malware. Failure to boot may be OS corruption, drivers or hardware. Printer issues include drivers, connectivity and queue faults. Application crashes may be updates, conflicts or corrupted profiles. Software licensing errors require checks of keys and activations.",
          },
          {
            heading: "Troubleshooting method",
            body: "Identify symptoms, gather evidence, form hypotheses, test the most likely cause, apply the least invasive fix and verify. Avoid random changes; document each step. If a fix fails, revert and try the next hypothesis.",
          },
        ],
        keyFormulas: [
          { name: "Troubleshooting", statement: "Symptoms → evidence → hypothesis → test → fix → verify." },
          { name: "Safe Mode", statement: "Loads minimal drivers/software to isolate faults." },
          { name: "Event Viewer", statement: "Logs system/application errors for diagnosis." },
        ],
        workedExample: {
          problem: "A PC boots to Safe Mode but not normally. What does this suggest?",
          solution: "Likely a software/driver/startup fault rather than core hardware, since minimal mode works.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u5-l3-diagnostics-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which tool shows system and application error logs?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Event Viewer"
                    },
                    {
                              "id": "b",
                              "text": "Calculator"
                    },
                    {
                              "id": "c",
                              "text": "Paint"
                    },
                    {
                              "id": "d",
                              "text": "Clock"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Event Viewer",
                              "statement": "Displays system and application event/error logs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Event Viewer shows logs/errors.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Event Viewer"
},
        },
        {
          id: "edxbtecit-u5-l3-diagnostics-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State three steps in a systematic troubleshooting method.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Troubleshooting method",
                              "statement": "Evidence-based diagnosis reduces random changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify symptoms and gather evidence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Form hypothesis and test likely cause.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Apply fix and verify result.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Symptoms/evidence → hypothesis/test → fix/verify."
},
        },
        {
          id: "edxbtecit-u5-l3-diagnostics-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how Safe Mode helps diagnose PC faults.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Safe Mode",
                              "statement": "Minimal drivers/software isolate whether fault is software or hardware."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Safe Mode loads only essential drivers/services.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If PC works in Safe Mode, fault likely software/startup.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If it fails in Safe Mode, hardware/core OS may be faulty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Narrows investigation area.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Safe Mode separates software/startup faults from hardware faults."
},
        },
        {
          id: "edxbtecit-u5-l3-diagnostics-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why random 'fixes' can make troubleshooting worse.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Systematic diagnosis",
                              "statement": "Uncontrolled changes obscure evidence and may introduce new faults."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiple changes hide which one caused improvement/worsening.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They may corrupt settings or delete needed files.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They destroy evidence needed for root cause.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Wastes time and reduces first-time fix rate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A methodical approach is safer and faster.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Random fixes obscure cause and risk new faults; diagnose systematically."
},
        },
        {
          id: "edxbtecit-u5-l3-diagnostics-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A PC is very slow and occasionally crashes.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three possible causes.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest one diagnostic check for each cause.",
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
                              "name": "Performance diagnosis",
                              "statement": "Check resources, software and logs before changing hardware."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Low memory/RAM causing paging.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Full or failing disk.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Malware or runaway process.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Check memory usage in Task Manager/monitor.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Check disk free space and health.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Review event logs and antivirus scan.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Memory/disk/malware; check usage, disk health and logs/scan."
},
        },
        {
          id: "edxbtecit-u5-l3-diagnostics-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A user cannot print to a shared office printer.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three possible causes.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe diagnostic steps in order.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain how to close the ticket safely.",
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
                              "name": "Fault diagnosis",
                              "statement": "Check simplest causes first and verify before closing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Printer offline, out of paper or jammed.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Wrong printer selected or driver issue.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Network/share permissions or connectivity.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Print queue stuck/corrupted job.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Check printer status/paper and queue.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Verify selected printer and driver.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Test local vs shared print to isolate.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Check network/share permissions if needed.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Ask user to print a test page.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Document fix and close after confirmation.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Check hardware/driver/network/queue; test and confirm before closing."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u5-l3-notes",
      title: "IT support and troubleshooting — notes",
      summary: "Log tickets, prioritise by impact/urgency, escalate when needed; diagnose systematically with tools and verify fixes.",
      sections: [
        { heading: "Support", body: "Tickets, SLAs, prioritisation and known-error documentation improve service." },
        { heading: "Tools", body: "Event Viewer, Device Manager, performance monitors and Safe Mode provide evidence." },
        { heading: "Method", body: "Identify symptoms → gather evidence → test hypothesis → fix → verify." },
      ],
    },
  ],
};
