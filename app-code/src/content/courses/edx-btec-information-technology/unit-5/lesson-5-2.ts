import type { Lesson } from "../../../types.ts";

export const lesson502: Lesson = {
  id: "edxbtecit-u5-lesson-5-2",
  code: "5-2",
  title: "Backup, Recovery and Maintenance",
  goal: "I CAN design backup strategies, restore systems and perform routine IT maintenance.",
  standards: ["Pearson Level 3 AAQ BTEC National in Information Technology — applied IT content", "Backup, disaster recovery and system maintenance"],
  
  vocabulary: [
    { term: "Backup", definition: "Copy of data kept so it can be restored after loss or corruption." },
    { term: "Full backup", definition: "Copy of all selected data at one point in time." },
    { term: "Incremental backup", definition: "Copies only data changed since the last backup." },
    { term: "Differential backup", definition: "Copies data changed since the last full backup." },
    { term: "Recovery point objective", definition: "Maximum acceptable data loss measured in time." },
    { term: "Maintenance window", definition: "Scheduled period for updates, checks and repairs." },
  ],
  concepts: [
    {
      id: "edxbtecit-u5-l2-backup",
      title: "Backup and Recovery",
      skill: "Choose backup types, schedules and recovery procedures for business data.",
      lesson: {
        sections: [
          {
            heading: "Backup types",
            body: "Full backups copy everything and are simplest to restore but slow and large. Incremental backups copy only changes since the last backup — fast but restore needs the full plus all increments. Differential backups copy changes since the last full — faster restore than incremental but larger each time.",
          },
          {
            heading: "Backup strategy",
            body: "A common rule is 3-2-1: three copies, two different media, one offsite or offline. Backups should be scheduled regularly, tested by restoring samples, encrypted and protected from ransomware. Critical systems need shorter recovery point and recovery time objectives.",
          },
          {
            heading: "Recovery procedures",
            body: "Recovery requires identifying the failure, choosing the correct backup point, restoring data, validating integrity and resuming service. Documentation, responsible owners and rehearsed procedures reduce downtime. Untested backups may be useless when needed.",
          },
        ],
        keyFormulas: [
          { name: "3-2-1 rule", statement: "3 copies, 2 media types, 1 offsite." },
          { name: "Backup choice", statement: "Full=simple/slow; incremental=fast/small; differential=medium/restore balance." },
          { name: "RPO/RTO", statement: "RPO = tolerable data loss; RTO = tolerable downtime." },
        ],
        workedExample: {
          problem: "A company needs daily backups with fast restore. Recommend a strategy.",
          solution: "Weekly full backup plus daily differential backups gives a reasonable restore point and simpler recovery than many increments.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u5-l2-backup-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which backup copies only data changed since the last backup?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Full"
                    },
                    {
                              "id": "b",
                              "text": "Incremental"
                    },
                    {
                              "id": "c",
                              "text": "Mirror"
                    },
                    {
                              "id": "d",
                              "text": "Snapshot"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Incremental backup",
                              "statement": "Copies changes since the previous backup."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Incremental copies only recent changes.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Incremental"
},
        },
        {
          id: "edxbtecit-u5-l2-backup-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the 3-2-1 backup rule.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "3-2-1 rule",
                              "statement": "Three copies, two media, one offsite."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three copies of data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Two different storage media.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "One copy offsite or offline.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3 copies, 2 media, 1 offsite."
},
        },
        {
          id: "edxbtecit-u5-l2-backup-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare full, incremental and differential backups.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Backup types",
                              "statement": "Full copies all; incremental copies changes since last backup; differential since last full."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Full is simplest to restore but largest/slowest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Incremental is fastest/smallest but restore needs chain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Differential balances speed and restore simplicity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear comparison of trade-offs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Full=simple; incremental=fast/small; differential=balanced."
},
        },
        {
          id: "edxbtecit-u5-l2-backup-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why backups must be tested regularly.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Backup testing",
                              "statement": "A backup is only useful if it can be restored successfully."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Corrupt or incomplete backups may go unnoticed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Software changes can break restore compatibility.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Missing files or credentials cause failed recovery.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Testing reveals problems before a real disaster.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Restore drills validate procedures and speed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Testing proves backups restore correctly and procedures work."
},
        },
        {
          id: "edxbtecit-u5-l2-backup-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business has a maximum tolerable data loss of 24 hours and downtime of 4 hours.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what RPO and RTO mean here.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest a backup schedule matching these objectives.",
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
                              "name": "RPO/RTO planning",
                              "statement": "Objectives drive backup frequency and recovery capability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RPO = up to 24 hours of data may be lost.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "RTO = service must resume within 4 hours.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Objectives define acceptable loss/downtime.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Daily backups satisfy 24-hour RPO.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Weekly full plus daily differential/incremental supports restore.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Test restores to meet 4-hour RTO.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "RPO 24h data loss, RTO 4h downtime; daily backups and tested restores."
},
        },
        {
          id: "edxbtecit-u5-l2-backup-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design a backup and recovery plan for a school management system.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Choose backup types and schedule.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain storage and protection measures.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Describe recovery testing and responsibilities.",
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
                              "name": "Backup planning",
                              "statement": "Schedule, redundancy, protection and tested recovery minimise data loss."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weekly full plus daily incremental/differential.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Schedule aligns to low-usage periods.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Retention policy keeps enough restore points.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Plan covers database and configuration files.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Store copies on different media and offsite.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Encrypt backups and restrict access.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Protect against ransomware/deletion with immutable/offline copy.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Monitor backup success and failures.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Quarterly restore tests verify data and procedures.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Assign owner and document recovery steps.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Scheduled full+incremental, offsite/encrypted backups, monitored and tested recovery."
},
        },
      ],
    },
    {
      id: "edxbtecit-u5-l2-maintenance",
      title: "System Maintenance and Updates",
      skill: "Perform preventive maintenance, apply updates safely and use logs for diagnosis.",
      lesson: {
        sections: [
          {
            heading: "Preventive maintenance",
            body: "Regular checks reduce failures: disk space and health, memory usage, temperature, fan operation, cable condition and software updates. Maintenance windows minimise disruption. Documentation records checks, faults and actions taken.",
          },
          {
            heading: "Updates and patches",
            body: "Security patches should be applied promptly but tested first. Feature updates may change interfaces or introduce faults. Administrators should maintain rollback options, verify applications after updates and schedule reboots where needed.",
          },
          {
            heading: "Logs and monitoring",
            body: "System logs record events, errors, logins and service failures. Event viewers and performance monitors help identify bottlenecks. Log retention and review support troubleshooting, audit and capacity planning.",
          },
        ],
        keyFormulas: [
          { name: "Preventive maintenance", statement: "Regular checks reduce unexpected failures." },
          { name: "Patch testing", statement: "Test updates, schedule windows, verify and keep rollback." },
          { name: "Logs", statement: "Record events/errors for diagnosis and audit." },
        ],
        workedExample: {
          problem: "Servers are slowing down. Give three maintenance checks an administrator should perform.",
          solution: "Check disk space/health, review memory/CPU usage in performance monitors, and inspect event logs for errors.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u5-l2-maintenance-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which maintenance approach aims to prevent failures before they happen?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Preventive"
                    },
                    {
                              "id": "b",
                              "text": "Corrective only"
                    },
                    {
                              "id": "c",
                              "text": "Emergency"
                    },
                    {
                              "id": "d",
                              "text": "Deferred"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Preventive maintenance",
                              "statement": "Scheduled checks to avoid failures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Preventive maintenance prevents faults.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Preventive"
},
        },
        {
          id: "edxbtecit-u5-l2-maintenance-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three things to check during routine hardware maintenance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Hardware checks",
                              "statement": "Physical and environmental checks prevent hardware faults."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Disk space/health and SMART status.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fans, temperature and airflow.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cables, connectors and physical damage.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Disk health, cooling/temperature, cables/connectors."
},
        },
        {
          id: "edxbtecit-u5-l2-maintenance-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why updates should be tested before deployment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Update testing",
                              "statement": "Updates can introduce faults or incompatibilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Updates may break applications or drivers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Testing in staging identifies issues safely.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rollback plan restores service if problems occur.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduces downtime and user disruption.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Testing prevents update faults and enables safe rollback."
},
        },
        {
          id: "edxbtecit-u5-l2-maintenance-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of system logs in IT administration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Log analysis",
                              "statement": "Logs provide evidence for diagnosis, security and capacity decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Logs record errors, logins and service events.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They help identify recurring faults.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They support security monitoring and audit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They reveal performance trends and capacity needs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Only useful if retained and reviewed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Logs aid diagnosis, security, audit and capacity planning."
},
        },
        {
          id: "edxbtecit-u5-l2-maintenance-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Plan a monthly maintenance routine for office PCs.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List three hardware checks.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "List three software checks.",
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
                              "name": "Maintenance routine",
                              "statement": "Regular hardware and software checks prevent failures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Check disk health/free space.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Inspect fans/temperature/cables.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Test backup/restore readiness.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Apply approved patches/updates.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Review event logs for errors.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Check antivirus and performance trends.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Hardware checks + software updates/log/performance checks monthly."
},
        },
        {
          id: "edxbtecit-u5-l2-maintenance-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A critical server will receive a major OS update.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe pre-update preparation.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe safe deployment steps.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain post-update verification.",
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
                              "name": "Update management",
                              "statement": "Prepare, test, deploy in window and verify to minimise risk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take verified backup before update.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Test update on staging/replica system.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Schedule maintenance window and notify users.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Confirm rollback plan and dependencies.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Deploy during agreed window.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Monitor installation for errors.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Verify critical services after reboot.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Keep previous version available for rollback.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Check logs, performance and user functionality.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Document outcome and any issues.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Backup, test, windowed deployment, verify services/logs and document."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u5-l2-notes",
      title: "Backup and maintenance — notes",
      summary: "Use 3-2-1 backups, test restores and match RPO/RTO; perform preventive maintenance, patch safely and review logs.",
      sections: [
        { heading: "Backup", body: "Full/incremental/differential backups; keep copies offsite and test restores." },
        { heading: "Recovery", body: "RPO limits data loss; RTO limits downtime; rehearse procedures." },
        { heading: "Maintenance", body: "Check hardware/software regularly, patch carefully and monitor logs." },
      ],
    },
  ],
};
