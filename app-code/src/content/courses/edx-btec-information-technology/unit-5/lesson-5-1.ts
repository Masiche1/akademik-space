import type { Lesson } from "../../../types.ts";

export const lesson501: Lesson = {
  id: "edxbtecit-u5-lesson-5-1",
  code: "5-1",
  title: "Operating Systems and User Administration",
  goal: "I CAN administer users, permissions, processes and operating system updates in a managed IT environment.",
  standards: ["Pearson Level 3 AAQ BTEC National in Information Technology — applied IT content", "Operating system administration, users and access control"],
  
  vocabulary: [
    { term: "Operating system", definition: "Software managing hardware resources and providing services to applications and users." },
    { term: "User account", definition: "Identity used to log in and access system resources." },
    { term: "User group", definition: "Collection of accounts sharing permissions and policies." },
    { term: "Process", definition: "Running instance of a program managed by the operating system." },
    { term: "Service", definition: "Background program performing system functions." },
    { term: "Patch", definition: "Software update fixing faults or security weaknesses." },
  ],
  concepts: [
    {
      id: "edxbtecit-u5-l1-osadmin",
      title: "Operating System Administration",
      skill: "Manage OS resources, user accounts, file permissions and system updates.",
      lesson: {
        sections: [
          {
            heading: "OS administration tasks",
            body: "Administrators install and configure operating systems, create users and groups, assign permissions, manage processes and services, monitor performance, apply patches and maintain file systems. The OS kernel schedules processes, manages memory and devices, and enforces security policies.",
          },
          {
            heading: "Users, groups and permissions",
            body: "Users should have individual accounts for accountability. Groups simplify administration: members inherit group permissions. Permissions control read, write and execute access to files and folders. Least privilege gives users only the access needed for their role.",
          },
          {
            heading: "Updates and drivers",
            body: "Patches fix bugs and vulnerabilities; updates add features or compatibility. Drivers let the OS communicate with hardware. Administrators should test updates, schedule maintenance windows and keep rollback options for critical systems.",
          },
        ],
        keyFormulas: [
          { name: "OS role", statement: "Manage hardware, processes, memory, users and security policies." },
          { name: "Least privilege", statement: "Grant only the minimum access required for the role." },
          { name: "Patch management", statement: "Test, schedule, apply and verify updates." },
        ],
        workedExample: {
          problem: "A new employee needs access to shared project files but not payroll records. How should the administrator set this up?",
          solution: "Create an individual account, add it to the Project group with read/write access to project files, and deny access to payroll data.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u5-l1-osadmin-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which component manages hardware resources and provides services to applications?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Word processor"
                    },
                    {
                              "id": "b",
                              "text": "Operating system"
                    },
                    {
                              "id": "c",
                              "text": "Spreadsheet"
                    },
                    {
                              "id": "d",
                              "text": "Browser"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Operating system",
                              "statement": "Manages hardware and provides services to applications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The OS manages resources and services.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Operating system"
},
        },
        {
          id: "edxbtecit-u5-l1-osadmin-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain why individual user accounts are preferred over shared accounts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Accountability",
                              "statement": "Individual accounts provide traceability and controlled access."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Actions can be traced to a specific person.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Permissions can match each role precisely.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accounts can be revoked without affecting others.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Individual accounts improve accountability, permissions and revocation."
},
        },
        {
          id: "edxbtecit-u5-l1-osadmin-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain least privilege with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Least privilege",
                              "statement": "Users receive only the minimum access needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Principle defined: minimum necessary access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: cashier gets POS access, not admin rights.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduces damage from mistakes or misuse.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Supports security and auditability.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Least privilege grants only needed access, e.g. cashier without admin rights."
},
        },
        {
          id: "edxbtecit-u5-l1-osadmin-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the roles of processes, services and drivers in an OS.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OS components",
                              "statement": "Processes run programs, services run background functions, drivers control hardware."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Process = running program instance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Service = background function such as printing or updates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Driver = software translating OS commands for hardware.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All three described accurately.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Relationship to OS administration implied.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Processes run programs; services run background tasks; drivers control hardware."
},
        },
        {
          id: "edxbtecit-u5-l1-osadmin-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A company needs to set up accounts for five staff roles.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why groups should be used rather than individual permissions for every user.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State two administrative benefits of standard account templates or groups.",
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
                              "name": "User administration",
                              "statement": "Groups centralise permissions and simplify lifecycle management."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Groups apply consistent permissions to all members.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Changes affect the group once, not every user.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Reduces admin errors and inconsistency.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "a"
                    },
                    {
                              "reasoning": "Faster onboarding/offboarding via group membership.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Easier auditing of who has access.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Standard templates enforce least privilege.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Groups standardise access, ease changes and simplify auditing."
},
        },
        {
          id: "edxbtecit-u5-l1-osadmin-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Plan OS administration for a new branch office with 30 PCs.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify three user administration tasks.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe how permissions should be assigned.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain the role of updates and drivers.",
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
                              "name": "OS administration plan",
                              "statement": "Accounts, least privilege, updates and drivers keep systems usable and secure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Create individual accounts for staff.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Define groups by role/department.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Plan joiner/leaver/mover processes.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Assign permissions based on role needs.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Apply least privilege to limit access.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Use groups for shared resources.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Review permissions periodically.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Updates patch faults and vulnerabilities.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Drivers enable hardware communication.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Test updates/drivers before rollout.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Accounts/groups, least-privilege permissions, tested updates and drivers."
},
        },
      ],
    },
    {
      id: "edxbtecit-u5-l1-access",
      title: "Authentication and Access Control",
      skill: "Apply authentication, authorisation and account lifecycle controls.",
      lesson: {
        sections: [
          {
            heading: "Authentication",
            body: "Authentication proves identity. Factors include something you know (password/PIN), something you have (token/smart card) and something you are (biometric). Multi-factor authentication combines factors. Strong unique passwords, password managers and account lockout policies reduce unauthorised access.",
          },
          {
            heading: "Authorisation",
            body: "Authorisation determines what an authenticated user may do. Permissions may be read, write, execute or administer. Role-based access control assigns permissions by job role. Access should be granted for a defined period and reviewed regularly.",
          },
          {
            heading: "Account lifecycle",
            body: "Accounts move through creation, active use, review and removal. Joiners get minimal required access; movers change roles and permissions; leavers are disabled promptly. Regular access reviews remove stale privileges and detect anomalies.",
          },
        ],
        keyFormulas: [
          { name: "Authentication", statement: "Prove identity using one or more factors." },
          { name: "Authorisation", statement: "Decide what an authenticated user may access." },
          { name: "MFA", statement: "Combines two or more authentication factors." },
        ],
        workedExample: {
          problem: "An employee leaves the company. What account actions should the administrator take?",
          solution: "Disable the account immediately, revoke sessions/tokens, review shared resources and retain audit logs as required.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u5-l1-access-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is multi-factor authentication?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Using two or more different verification factors"
                    },
                    {
                              "id": "b",
                              "text": "Using a very long password"
                    },
                    {
                              "id": "c",
                              "text": "Sharing one password with two people"
                    },
                    {
                              "id": "d",
                              "text": "Logging in twice daily"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MFA",
                              "statement": "Combines two or more authentication factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MFA uses multiple factors.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Two or more verification factors"
},
        },
        {
          id: "edxbtecit-u5-l1-access-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name the three authentication factor types.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Authentication factors",
                              "statement": "Knowledge, possession and inherence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Something you know: password/PIN.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Something you have: token/smart card.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Something you are: biometric.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Knowledge, possession, inherence."
},
        },
        {
          id: "edxbtecit-u5-l1-access-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish authentication from authorisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AuthN vs AuthZ",
                              "statement": "Authentication verifies identity; authorisation grants permissions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Authentication proves who the user is.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Authorisation decides what they may do.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: login authenticates; file permissions authorise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear distinction stated.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Authentication = identity; authorisation = permissions."
},
        },
        {
          id: "edxbtecit-u5-l1-access-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why access reviews are necessary.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Access review",
                              "statement": "Periodic review removes stale or excessive privileges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roles change but permissions may remain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Former projects may leave unnecessary access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reviews detect orphaned or suspicious accounts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They enforce least privilege over time.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reduce risk of misuse and data exposure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Reviews remove stale/excess privileges and enforce least privilege."
},
        },
        {
          id: "edxbtecit-u5-l1-access-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An employee changes from sales to HR.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the account lifecycle actions required.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why old sales permissions should be removed.",
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
                              "name": "Access lifecycle",
                              "statement": "Joiners, movers and leavers need timely permission changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Update role/group membership for HR.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Grant HR permissions needed for new duties.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Review and retain audit trail.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Old permissions no longer match responsibilities.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Retaining them violates least privilege.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Increases risk of data exposure or misuse.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Move groups/permissions to HR role; remove sales access to enforce least privilege."
},
        },
        {
          id: "edxbtecit-u5-l1-access-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design access control for a clinic computer used by reception, nurses and doctors.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe authentication controls for each role.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Assign authorisation levels for patient records.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain account review and offboarding controls.",
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
                              "name": "Role-based access",
                              "statement": "Authentication verifies users; authorisation limits access by role and sensitivity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reception: password/MFA for scheduling access.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Nurses/doctors: stronger MFA for clinical systems.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Unique accounts prevent shared login ambiguity.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "a"
                    },
                    {
                              "reasoning": "Reception sees limited administrative fields.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Nurses access assigned patient records for care.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Doctors access broader clinical records as needed.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "b"
                    },
                    {
                              "reasoning": "Least privilege applied to all roles.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "b"
                    },
                    {
                              "reasoning": "Regular reviews confirm access still matches role.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Leavers disabled immediately and sessions revoked.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "c"
                    },
                    {
                              "reasoning": "Audit logs track access for accountability.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Role-based authentication/authorisation, least privilege, reviews and offboarding."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u5-l1-notes",
      title: "OS and access administration — notes",
      summary: "Administrators manage users, groups, permissions, processes, updates and drivers; authentication proves identity and authorisation grants access.",
      sections: [
        { heading: "Administration", body: "Use groups, least privilege and individual accounts for controlled, auditable access." },
        { heading: "Access control", body: "Authentication verifies identity; authorisation sets permissions; MFA strengthens login." },
        { heading: "Lifecycle", body: "Joiners get minimal access, movers change permissions, leavers are disabled promptly." },
      ],
    },
  ],
};
