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
                              "text": "Software managing hardware and running programs"
                    },
                    {
                              "id": "b",
                              "text": "A type of hardware"
                    },
                    {
                              "id": "c",
                              "text": "A network cable"
                    },
                    {
                              "id": "d",
                              "text": "A programming language"
                    }
          ],
          "correctChoiceId": "a"
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
