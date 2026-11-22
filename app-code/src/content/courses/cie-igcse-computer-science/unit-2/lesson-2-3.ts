import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ciecs-u2-lesson-2-3",
  code: "2-3",
  title: "Software: Operating Systems and Utilities",
  goal: "I CAN describe operating systems, utility software and their functions.",
  standards: ["Cambridge IGCSE Computer Science 0478: software", "0478 section 4: software"],
  
  vocabulary: [
    { term: "Operating system", definition: "Software managing hardware and running programs." },
    { term: "Utility software", definition: "Tools helping maintain/manage the system." },
    { term: "Driver", definition: "Software letting OS communicate with hardware." },
    { term: "File management", definition: "Organising, storing and retrieving files." },
    { term: "Memory management", definition: "Allocating RAM to programs." },
    { term: "User interface", definition: "How users interact with the computer." },
  ],
  concepts: [
    {
      id: "ciecs-u2-s3-sw",
      title: "Operating systems and utilities",
      skill: "Describe OS functions and utility software at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Operating system roles",
            body: "OS manages hardware resources, runs programs, handles file storage, provides user interface (GUI/CLI). Examples: Windows, macOS, Linux, Android, iOS. Drivers let OS talk to specific hardware.",
          },
          {
            heading: "Utility software",
            body: "Utilities maintain the system: antivirus (protect), backup (copy data), defragmentation (organise disk), compression tools, disk cleanup, system updates.",
          },
        ],
        keyFormulas: [
          { name: "OS", statement: "manages hardware + runs programs" },
          { name: "Driver", statement: "OS↔hardware translator" },
          { name: "Utility", statement: "maintenance tools" },
        ],
        workedExample: {
          problem: "What happens when you double-click a file? Trace the OS's role.",
          solution: "OS reads file association → launches correct app → allocates memory → app displays file.",
        },
      },
      questions: [
        {
          id: "ciecs-u2-sw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an operating system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A programming language"
                    },
                    {
                              "id": "b",
                              "text": "Software managing hardware and running programs"
                    },
                    {
                              "id": "c",
                              "text": "A network cable"
                    },
                    {
                              "id": "d",
                              "text": "A type of hardware"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Operating system",
                              "statement": "System manager."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OS manages resources and runs programs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "System management software"
},
        },
        {
          id: "ciecs-u2-sw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name three functions of an operating system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OS functions",
                              "statement": "Resource management."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. file management, memory allocation, user interface.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Three valid functions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. files/memory/UI"
},
        },
        {
          id: "ciecs-u2-sw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a driver and why is it needed? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Driver",
                              "statement": "OS-hardware translator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Driver lets OS communicate with specific hardware.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. printer driver lets OS send print jobs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Without it, hardware won't work properly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "OS↔hardware translator"
},
        },
        {
          id: "ciecs-u2-sw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define operating system, utility software, driver, file management, memory management, user interface. (b) Name 3 OS functions. (c) What is a GUI vs CLI? (d) Give 3 examples of utility software. (e) Why update drivers? (f) What does antivirus software do? (g) What is defragmentation? (h) Design an OS feature wishlist for students.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Software",
                              "statement": "OS, utilities, drivers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three valid OS functions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) GUI=visual; CLI=text commands.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Three valid utilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Fix bugs, add features, security.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Detects/removes malware.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Organises disk data for faster access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid OS feature wishlist.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Operating systems and utility software."
},
        },
        {
          id: "ciecs-u2-sw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a function of an operating system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replacing all utility software" },
              { id: "b", text: "Storing a permanent copy of every file" },
              { id: "c", text: "Creating spreadsheet formulas" },
              { id: "d", text: "Managing hardware resources and running programs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Operating system", statement: "Manages hardware and runs programs." },
            ],
            steps: [
              { reasoning: "The OS coordinates hardware, memory, files and applications.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Managing hardware and running programs",
          },
        },
        {
          id: "ciecs-u2-sw-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is a driver needed when a new printer is connected?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It lets the operating system communicate correctly with the printer" },
              { id: "b", text: "It stores all printed documents" },
              { id: "c", text: "It replaces the operating system" },
              { id: "d", text: "It increases the printer's physical size" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Driver", statement: "Software translating between OS and hardware." },
            ],
            steps: [
              { reasoning: "The driver allows the OS to send correct commands to the specific hardware.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Lets the OS communicate with the printer",
          },
        },
        {
          id: "ciecs-u2-sw-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which utility software protects a computer from malware?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paint program" },
              { id: "b", text: "Web browser" },
              { id: "c", text: "Word processor" },
              { id: "d", text: "Antivirus software" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Antivirus utility", statement: "Detects and removes malware." },
            ],
            steps: [
              { reasoning: "Antivirus software scans for and removes malicious programs.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Antivirus software",
          },
        },
        {
          id: "ciecs-u2-sw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the difference between a GUI and a CLI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are two names for the same interface" },
              { id: "b", text: "GUI uses graphics; CLI uses typed commands" },
              { id: "c", text: "CLI cannot run programs" },
              { id: "d", text: "GUI is always faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "GUI vs CLI", statement: "Graphical interface vs command-line interface." },
            ],
            steps: [
              { reasoning: "A GUI uses windows/icons; a CLI accepts typed commands.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** GUI uses graphics; CLI uses typed commands",
          },
        },
        {
          id: "ciecs-u2-sw-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is backup utility software important?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It creates copies so data can be recovered after loss or damage" },
              { id: "b", text: "It makes the CPU faster" },
              { id: "c", text: "It removes all viruses automatically" },
              { id: "d", text: "It increases monitor resolution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Backup", statement: "Copies allow recovery from data loss." },
            ],
            steps: [
              { reasoning: "Backups preserve data so it can be restored after failure or corruption.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Allows data recovery",
          },
        },
        {
          id: "ciecs-u2-sw-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should operating system and driver updates be installed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They only change the desktop colour" },
              { id: "b", text: "They remove the need for antivirus software" },
              { id: "c", text: "They increase the number of files a disk can store" },
              { id: "d", text: "They can fix bugs, improve compatibility and patch security flaws" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "System updates", statement: "Updates fix faults and vulnerabilities." },
            ],
            steps: [
              { reasoning: "Updates patch security flaws and improve stability or hardware support.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Fix bugs and patch security flaws",
          },
        },
        {
          id: "ciecs-u2-sw-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An operating system manages $8$ GB of RAM and reserves $1.25$ GB for itself. How many GB remain for applications?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6.75 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Memory allocation", statement: "Available RAM = total - reserved." },
            ],
            steps: [
              { reasoning: "8 - 1.25 = 6.75 GB.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "6.75",
          },
        },
        {
          id: "ciecs-u2-sw-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three programs need $1.5$ GB, $2.25$ GB and $0.75$ GB of RAM. What total RAM do they need?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4.5 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Total memory", statement: "Add all program memory requirements." },
            ],
            steps: [
              { reasoning: "1.5 + 2.25 + 0.75 = 4.5 GB.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "4.5",
          },
        },
        {
          id: "ciecs-u2-sw-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A PC has $16$ GB RAM. The OS uses $2$ GB and applications need $15$ GB. (a) What is the total software memory demand? (b) How many GB short are the applications if the OS must also run?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 17 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Memory demand", statement: "Compare total demand with available RAM." },
            ],
            steps: [
              { reasoning: "Total demand = 2 + 15 = 17 GB.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Available for apps = 16 - 2 = 14 GB, so shortfall = 15 - 14 = 1 GB.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 17; (b) 1",
          },
        },
        {
          id: "ciecs-u2-sw-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $120$ GB disk has $15$ GB of system files and $80$ GB of user files. A cleanup policy requires at least $10$ GB free. (a) How much free space remains before applying the policy? (b) How much free space remains after keeping the required $10$ GB?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25 },
              { label: "b", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Disk space", statement: "Free space = capacity - used space." },
            ],
            steps: [
              { reasoning: "Free before policy = 120 - 15 - 80 = 25 GB.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "After keeping 10 GB free, remaining surplus = 25 - 10 = 15 GB.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 25; (b) 15",
          },
        },
        {
          id: "ciecs-u2-sw-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An $8$ GB system runs an OS needing $1.5$ GB, App A needing $2.5$ GB, App B needing $3$ GB and App C needing $2$ GB. (a) What is the total demand including the OS? (b) How much RAM is available for applications? (c) What is the application shortfall if all apps run together?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 9 },
              { label: "b", answer: 6.5 },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Resource scheduling", statement: "Separate OS reservation from application demand." },
            ],
            steps: [
              { reasoning: "Total demand = 1.5 + 2.5 + 3 + 2 = 9 GB.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Available for apps = 8 - 1.5 = 6.5 GB.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "App demand = 2.5 + 3 + 2 = 7.5 GB, so shortfall = 7.5 - 6.5 = 1 GB.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 9; (b) 6.5; (c) 1",
          },
        },
        {
          id: "ciecs-u2-sw-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A school computer lab needs reliable, secure machines for students. Recommend four utility software tools and explain how each supports the lab. Justify why an operating system alone is not enough.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Utility selection", statement: "Utilities maintain security, data safety and performance." },
            ],
            steps: [
              { reasoning: "Antivirus protects machines from malware and viruses.", marks: 1, markCode: "M" },
              { reasoning: "Backup software preserves work and allows recovery after failure.", marks: 1, markCode: "M" },
              { reasoning: "Updates and cleanup/defragmentation tools maintain stability and performance.", marks: 1, markCode: "M" },
              { reasoning: "The OS manages resources but utilities provide specialist maintenance and protection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Combine OS management with specialist utilities",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u2-sw-notes",
      title: "Software — notes",
      summary: "OS manages hardware+programs; drivers translate for hardware; utilities maintain the system.",
      sections: [
        { heading: "Key idea", body: "OS is the bridge between users, programs and hardware." },
        { heading: "Utilities", body: "Antivirus, backup, cleanup — keep the system healthy." },
      ],
    },
  ],
};
