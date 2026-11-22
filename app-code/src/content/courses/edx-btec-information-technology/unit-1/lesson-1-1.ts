import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edxbtecit-u1-lesson-1-1",
  code: "1-1",
  title: "IT System Components",
  goal: "I CAN identify and explain the components of an IT system: hardware, software, data, people and procedures.",
  standards: [
    "BTEC L3 National Information Technology — Unit 1: Information Technology Systems",
  ],
  vocabulary: [
    {
      term: "IT system",
      definition:
        "An organised combination of hardware, software, data, people and procedures working together to process information.",
    },
    {
      term: "Hardware",
      definition:
        "Physical components of a computer system — CPU, memory, storage, input/output devices.",
    },
    {
      term: "Software",
      definition:
        "Programs that tell hardware what to do — system software (OS) and application software.",
    },
    {
      term: "Firmware",
      definition:
        "Software embedded in hardware — e.g. BIOS/UEFI — bridging hardware and OS.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u1-l1-components",
      title: "Hardware, Software and Data",
      skill:
        "Identify the hardware, software and data components of an IT system.",
      lesson: {
        sections: [
          {
            heading: "Hardware components",
            body: "**Input devices**: keyboard, mouse, scanner, microphone, webcam, sensors. **Processing**: CPU (central processing unit), GPU, motherboard, RAM. **Output devices**: monitor, printer, speakers, projector. **Storage**: HDD, SSD, optical media, cloud storage. **Storage vs memory**: RAM is volatile working memory; storage persists when powered off.\n\nModern systems also include network interface cards, USB ports, and embedded hardware in IoT devices.",
          },
          {
            heading: "Software and data",
            body: "**System software**: operating system (Windows, Linux, macOS) managing hardware resources and providing services. **Application software**: word processors, browsers, databases — tasks for users. **Utility software**: antivirus, backup, compression.\n\n**Data** is raw facts; **information** is processed data. Data flows through the system: input → processing → storage → output. Data types include text, numbers, images, audio, video.",
          },
        ],
        keyFormulas: [
          {
            name: "System model",
            statement: "Input → processing → storage → output.",
          },
          {
            name: "RAM vs storage",
            statement: "RAM volatile (working memory); storage persistent.",
          },
        ],
        workedExample: {
          problem:
            "Classify: (a) keyboard, (b) Windows, (c) a spreadsheet file, (d) SSD.",
          solution:
            "(a) input hardware, (b) system software, (c) data, (d) storage hardware.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u1-l1-components-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which component is volatile working memory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "RAM" },
              { id: "b", text: "SSD" },
              { id: "c", text: "Blu-ray disc" },
              { id: "d", text: "HDD" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RAM",
                statement:
                  "Volatile working memory — contents lost on power off.",
              },
            ],
            steps: [{ reasoning: "RAM is volatile.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** RAM",
            commonErrors: ["Confusing RAM with storage."],
          },
        },
        {
          id: "edxbtecit-u1-l1-components-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between system software and application software with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "System vs application",
                statement:
                  "System software manages hardware/OS; application software performs user tasks.",
              },
            ],
            steps: [
              {
                reasoning: "System software defined + example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Application software defined + example.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "System: OS/drivers manage hardware. Application: word processor/browser for user tasks.",
            commonErrors: ["No examples.", "Conflated."],
          },
        },
        {
          id: "edxbtecit-u1-l1-components-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a computer with plenty of storage can still run slowly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Performance bottlenecks",
                statement:
                  "Storage capacity ≠ speed; CPU, RAM and storage type all affect performance.",
              },
            ],
            steps: [
              {
                reasoning: "Insufficient RAM causes swapping to slow storage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Slow HDD vs fast SSD affects load times.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CPU limitations affect processing.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Storage capacity doesn't determine speed — RAM shortage, slow HDD and weak CPU all slow systems.",
            commonErrors: ["Only storage blamed.", "No mechanisms."],
          },
        },
        {
          id: "edxbtecit-u1-l1-components-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school is buying computers for students.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify three hardware components essential for the task.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Identify two types of software needed and why.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why data storage type matters for a school.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System requirements",
                statement:
                  "Match hardware/software/data to user needs and workload.",
              },
            ],
            steps: [
              {
                reasoning: "Component 1 e.g. sufficient RAM.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Component 2 e.g. fast SSD.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Component 3 e.g. adequate CPU.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Software 1 e.g. OS.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Software 2 e.g. productivity/browser.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Justification linked to needs.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Storage type matters for speed/longevity.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "SSD preferred over HDD for school use.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) RAM/SSD/CPU (b) OS + productivity (c) SSD faster, durable",
            commonErrors: ["Generic answers.", "No justification."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u1-l1-systems",
      title: "People and Procedures",
      skill: "Explain the roles of people and procedures within an IT system.",
      lesson: {
        sections: [
          {
            heading: "People in IT systems",
            body: "IT systems depend on people: **users** who input data and consume output; **developers** who design/build software; **system administrators** who maintain servers/networks; **IT support** who troubleshoot; **data analysts** who extract insights.\n\nPeople determine system effectiveness — poor training or unclear roles cause errors regardless of technology quality. Usability and user adoption are as important as technical capability.",
          },
          {
            heading: "Procedures and documentation",
            body: "**Procedures** define how the system is used: login processes, backup routines, data entry standards, incident reporting, change management. Without procedures, systems produce inconsistent results.\n\n**Documentation** includes user manuals, system specifications, configuration records and training materials. Good documentation enables maintenance, audit and knowledge transfer when staff change.",
          },
        ],
        keyFormulas: [
          {
            name: "People component",
            statement:
              "Users, developers, admins, support — roles determine effectiveness.",
          },
          {
            name: "Procedures",
            statement:
              "Documented routines ensure consistent, correct system use.",
          },
        ],
        workedExample: {
          problem:
            "A company installs new software but staff still make errors.",
          solution:
            "Problem likely procedural — missing training, unclear procedures or poor documentation, not the software itself.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u1-l1-systems-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which role maintains servers and network infrastructure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "System administrator" },
              { id: "b", text: "Data analyst" },
              { id: "c", text: "Software developer" },
              { id: "d", text: "End user" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "System administrator",
                statement: "Maintains servers, networks and infrastructure.",
              },
            ],
            steps: [
              {
                reasoning: "Sysadmin maintains infrastructure.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** System administrator",
            commonErrors: ["Confusing with developer."],
          },
        },
        {
          id: "edxbtecit-u1-l1-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why procedures are essential in an IT system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Procedures",
                statement:
                  "Standardised routines ensure consistency, correctness and auditability.",
              },
            ],
            steps: [
              {
                reasoning: "Consistency: same process every time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correctness: reduces errors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Auditability/compliance benefit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Procedures ensure consistent, correct use and enable auditing — without them systems produce unreliable results.",
            commonErrors: ["Generic 'helps'.", "No mechanisms."],
          },
        },
        {
          id: "edxbtecit-u1-l1-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse why 'technology alone' rarely solves organisational problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: " socio-technical systems",
                statement:
                  "Technology effectiveness depends on people, procedures and culture.",
              },
            ],
            steps: [
              {
                reasoning: "People must adopt and use technology correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Procedures must support the technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cultural/organisational factors matter.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Technology is one component — people skills, procedures and culture determine whether it delivers value.",
            commonErrors: [
              "Technology-determinist view.",
              "No people/procedure focus.",
            ],
          },
        },
        {
          id: "edxbtecit-u1-l1-systems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A hospital implements an electronic patient records system.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify three groups of people affected and their roles.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two essential procedures for safe use.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain one risk if procedures are ignored.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EPR system",
                statement:
                  "Healthcare IT requires trained staff, clear procedures and strong governance.",
              },
            ],
            steps: [
              {
                reasoning: "People 1 e.g. clinicians (data entry/access).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "People 2 e.g. IT support/admin.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "People 3 e.g. patients (data subjects).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Procedure 1 e.g. access control/login.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Procedure 2 e.g. backup/audit trail.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Procedures justified for safety.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Risk e.g. data breach/misdiagnosis.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Risk linked to ignored procedures.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) clinicians/admin/patients (b) access control + audit (c) breach/misdiagnosis risk",
            commonErrors: ["Technology-only focus.", "No procedures."],
          },
        },
      ],
    },
  ],
};
