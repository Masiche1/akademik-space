import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edxbtecit-u1-lesson-1-2",
  code: "1-2",
  title: "Operating Systems and Software",
  goal: "I CAN explain the functions of operating systems and common software utilities.",
  standards: [
    "BTEC L3 National Information Technology — Unit 1: Information Technology Systems",
  ],
  vocabulary: [
    {
      term: "Operating system (OS)",
      definition:
        "System software that manages hardware resources, provides user interface and runs applications.",
    },
    {
      term: "Kernel",
      definition:
        "Core of the OS managing memory, processes and device drivers.",
    },
    {
      term: "Driver",
      definition:
        "Software allowing the OS to communicate with a hardware device.",
    },
    {
      term: "Utility software",
      definition:
        "Tools supporting system maintenance — antivirus, backup, compression, disk tools.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u1-l2-os",
      title: "Operating System Functions",
      skill: "Describe the key functions of an operating system.",
      lesson: {
        sections: [
          {
            heading: "Core OS functions",
            body: "The OS **manages hardware resources**: allocates CPU time between processes (scheduling), manages RAM (memory allocation, virtual memory), controls storage access and handles input/output through device drivers.\n\nIt provides the **user interface** (GUI or command line) and **application programming interface (API)** so programs can use hardware without programmers writing low-level code. It also handles **file management** — organising, storing and retrieving files — and **security** — user accounts, permissions, access control.",
          },
          {
            heading: "Types and examples",
            body: "**Desktop OS**: Windows, macOS, Linux — single-user with GUI. **Mobile OS**: Android, iOS — touch-optimised, sandboxed apps. **Server OS**: Windows Server, Linux distributions — multi-user, headless operation.\n\n**Embedded OS**: real-time systems in devices (car ECUs, routers, appliances). **Virtualisation** lets one physical machine run multiple virtual machines, each with its own OS — common in cloud computing.",
          },
        ],
        keyFormulas: [
          {
            name: "OS functions",
            statement:
              "Resource management, UI/API, file management, security.",
          },
          {
            name: "Virtualisation",
            statement: "Multiple virtual machines on one physical host.",
          },
        ],
        workedExample: {
          problem: "Why does an OS need device drivers?",
          solution:
            "Hardware varies — drivers translate OS commands into device-specific instructions so applications work across different hardware.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u1-l2-os-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is NOT a function of an operating system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Managing memory" },
              { id: "b", text: "Managing files" },
              { id: "c", text: "Scheduling CPU processes" },
              { id: "d", text: "Editing documents" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "OS functions",
                statement:
                  "Resource/file/process management, UI — not application tasks.",
              },
            ],
            steps: [
              {
                reasoning: "Document editing is application software's role.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Editing documents",
            commonErrors: ["Thinking OS does all tasks."],
          },
        },
        {
          id: "edxbtecit-u1-l2-os-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of device drivers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Device drivers",
                statement:
                  "Translate OS commands into device-specific instructions.",
              },
            ],
            steps: [
              {
                reasoning: "Hardware variety requires translation layer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Drivers enable OS-device communication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Without drivers devices don't work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Drivers let the OS control diverse hardware — they translate generic OS commands into device-specific instructions.",
            commonErrors: [
              "Drivers confused with applications.",
              "No purpose explained.",
            ],
          },
        },
        {
          id: "edxbtecit-u1-l2-os-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare desktop and mobile operating systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OS comparison",
                statement:
                  "Desktop: powerful multi-tasking; mobile: constrained, sandboxed, battery-optimised.",
              },
            ],
            steps: [
              {
                reasoning: "Desktop: full computing power, peripherals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Mobile: touch UI, battery constraints, app sandboxing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Security differences noted.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Desktop OS handle complex multi-tasking/peripherals; mobile OS optimise for touch, battery and sandboxed security.",
            commonErrors: ["Only similarities.", "No technical basis."],
          },
        },
        {
          id: "edxbtecit-u1-l2-os-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school runs a server hosting website, email and student records.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a server OS is more suitable than a desktop OS.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Identify two OS functions critical for this server.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest why virtualisation might help.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Server OS",
                statement:
                  "Optimised for multi-user, continuous operation, remote administration.",
              },
            ],
            steps: [
              {
                reasoning: "Multi-user support.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Continuous operation/stability.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Remote admin/network services.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Function 1 e.g. process scheduling for concurrent users.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Function 2 e.g. file/network service management.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Justification for server workload.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Virtualisation isolates services on one machine.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Cost/efficiency benefit stated.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) multi-user/stable/remote (b) scheduling + file services (c) isolation + cost saving",
            commonErrors: [
              "Desktop OS assumed fine.",
              "No server-specific reasoning.",
            ],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u1-l2-utilities",
      title: "Utility Software and Maintenance",
      skill: "Describe common utility software and system maintenance tasks.",
      lesson: {
        sections: [
          {
            heading: "Essential utilities",
            body: "**Antivirus/antimalware**: detects and removes malware — essential protection. **Backup software**: copies data for recovery — scheduled backups prevent data loss. **Disk utilities**: defragmentation (HDDs), disk cleanup, error checking. **Compression tools**: reduce file sizes for storage/transfer.\n\n**System monitoring** tools track CPU, memory, disk and network usage — identifying bottlenecks. **Update managers** keep OS and software patched against vulnerabilities.",
          },
          {
            heading: "System maintenance",
            body: "Routine maintenance includes: applying security updates promptly, running antivirus scans, checking disk health, managing startup programs, clearing temporary files, and monitoring for unusual activity.\n\n**Preventive maintenance** reduces failures; **corrective maintenance** fixes problems after they occur. Documentation of maintenance activities supports troubleshooting and compliance.",
          },
        ],
        keyFormulas: [
          {
            name: "Utility types",
            statement:
              "Antivirus, backup, disk tools, compression, monitoring.",
          },
          {
            name: "Maintenance types",
            statement: "Preventive (before failure) vs corrective (after).",
          },
        ],
        workedExample: {
          problem:
            "A PC is slow and showing pop-ups. What maintenance steps apply?",
          solution:
            "Run antivirus scan, check startup programs, clear temp files, check disk health, ensure updates installed.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u1-l2-utilities-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which utility protects against malicious software?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Defragmenter" },
              { id: "b", text: "Compression tool" },
              { id: "c", text: "Backup software" },
              { id: "d", text: "Antivirus software" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Antivirus",
                statement: "Detects/removes malware.",
              },
            ],
            steps: [
              {
                reasoning: "Antivirus = malware protection.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Antivirus",
            commonErrors: ["Confusing with backup."],
          },
        },
        {
          id: "edxbtecit-u1-l2-utilities-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why regular backups are essential.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Backups",
                statement:
                  "Protect against data loss from hardware failure, malware, human error.",
              },
            ],
            steps: [
              {
                reasoning: "Hardware failure/virus can destroy data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Backups enable recovery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Scheduled testing ensures backups work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Backups protect against data loss — scheduled and tested backups enable recovery.",
            commonErrors: [
              "Backup = prevention not recovery.",
              "No testing mention.",
            ],
          },
        },
        {
          id: "edxbtecit-u1-l2-utilities-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the difference between preventive and corrective maintenance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Maintenance types",
                statement:
                  "Preventive avoids failures; corrective fixes after failure.",
              },
            ],
            steps: [
              {
                reasoning: "Preventive defined with example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Corrective defined with example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cost/efficiency comparison.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Preventive (updates, scans) avoids failures; corrective fixes problems — preventive is cheaper long-term.",
            commonErrors: ["No examples.", "No cost comparison."],
          },
        },
        {
          id: "edxbtecit-u1-l2-utilities-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A small business's computers keep crashing and losing data.",
          parts: [
            { label: "a", prompt: "Identify three likely causes.", marks: 3 },
            {
              label: "b",
              prompt:
                "Suggest three maintenance actions to prevent recurrence.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain how to recover lost data.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System maintenance",
                statement:
                  "Diagnose causes, implement preventive maintenance, recover via backups.",
              },
            ],
            steps: [
              {
                reasoning: "Cause 1 e.g. malware.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Cause 2 e.g. failing hardware/overheating.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Cause 3 e.g. no backups.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Action 1 e.g. antivirus scan/update.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Action 2 e.g. scheduled backups.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Action 3 e.g. hardware check/replace.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Recovery via backups.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Data recovery services as alternative.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) malware/hardware/no backups (b) AV+backups+hardware (c) backups or recovery services",
            commonErrors: ["No backup plan.", "Generic fixes."],
          },
        },
      ],
    },
  ],
};
