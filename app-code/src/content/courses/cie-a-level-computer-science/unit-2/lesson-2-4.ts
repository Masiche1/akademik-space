import type { Lesson } from "../../../types.ts";

export const lesson134: Lesson = {
  id: "ciealc-u2-lesson-2-4",
  code: "2-4",
  title: "Operating Systems and Software",
  goal: "I CAN describe operating system functions and types of software.",
  standards: ["Cambridge A Level Computer Science 9618: software", "9618: OS"],
  
  vocabulary: [
    { term: "Operating system", definition: "Software managing hardware and running programs." },
    { term: "Kernel", definition: "Core OS component managing resources." },
    { term: "User interface", definition: "How users interact with computer." },
    { term: "Utility software", definition: "Tools maintaining/managing system." },
    { term: "Application software", definition: "Programs for specific tasks." },
    { term: "Driver", definition: "Software letting OS communicate with hardware." },
  ],
  concepts: [
    {
      id: "ciealc-u2-s4-os",
      title: "Operating systems",
      skill: "Describe OS functions at A Level.",
      lesson: {
        sections: [
          {
            heading: "OS functions",
            body: "OS manages hardware resources (CPU, memory, storage, devices), runs programs, handles files, provides user interface (GUI/CLI). Kernel is core component. Drivers let OS talk to specific hardware.",
          },
          {
            heading: "Software types",
            body: "System software: OS, utilities, drivers. Application software: word processors, browsers, games. Utility software: antivirus, backup, compression, defragmentation. Each layer builds on the one below.",
          },
        ],
        keyFormulas: [
          { name: "OS", statement: "manages hardware + runs programs" },
          { name: "Kernel", statement: "core OS component" },
          { name: "Driver", statement: "OS↔hardware translator" },
        ],
        workedExample: {
          problem: "What happens when you double-click a file? Trace OS role.",
          solution: "OS reads file association → launches correct app → allocates memory → app displays file.",
        },
      },
      questions: [
        {
          id: "ciealc-u2-os-q1",
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
          id: "ciealc-u2-os-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the kernel?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Kernel",
                              "statement": "Core OS component."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Kernel = core OS managing resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Handles memory, processes, devices.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Core OS component"
},
        },
        {
          id: "ciealc-u2-os-q3",
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
          id: "ciealc-u2-os-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define operating system, kernel, user interface, utility software, application software, driver. (b) Name 3 OS functions. (c) What is GUI vs CLI? (d) Give 3 examples of utility software. (e) Why update drivers? (f) What does antivirus do? (g) What is defragmentation? (h) Design an OS feature wishlist for students.",
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
          "finalAnswer": "Operating systems and software types."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u2-os-notes",
      title: "OS — notes",
      summary: "OS manages hardware+programs; kernel=core; drivers translate for hardware; utilities maintain system.",
      sections: [
        { heading: "Key idea", body: "OS is the bridge between users, programs and hardware." },
        { heading: "Utilities", body: "Antivirus, backup, cleanup — keep system healthy." },
      ],
    },
  ],
};
