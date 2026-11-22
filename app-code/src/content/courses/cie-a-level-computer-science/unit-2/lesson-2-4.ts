import type { Lesson } from "../../../types.ts";

export const lesson134: Lesson = {
  id: "ciealc-u2-lesson-2-4",
  code: "2-4",
  title: "Operating Systems and Software",
  goal: "I CAN describe operating system functions and types of software.",
  standards: ["Cambridge A Level Computer Science 9618: software", "9618: OS"],

  vocabulary: [
    {
      term: "Operating system",
      definition: "Software managing hardware and running programs.",
    },
    { term: "Kernel", definition: "Core OS component managing resources." },
    { term: "User interface", definition: "How users interact with computer." },
    {
      term: "Utility software",
      definition: "Tools maintaining/managing system.",
    },
    {
      term: "Application software",
      definition: "Programs for specific tasks.",
    },
    {
      term: "Driver",
      definition: "Software letting OS communicate with hardware.",
    },
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
          solution:
            "OS reads file association → launches correct app → allocates memory → app displays file.",
        },
      },
      questions: [
        {
          id: "ciealc-u2-os-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an operating system?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A network cable",
              },
              {
                id: "b",
                text: "A programming language",
              },
              {
                id: "c",
                text: "Software managing hardware and running programs",
              },
              {
                id: "d",
                text: "A type of hardware",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Operating system",
                statement: "System manager.",
              },
            ],
            steps: [
              {
                reasoning: "OS manages resources and runs programs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "System management software",
          },
        },
        {
          id: "ciealc-u2-os-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the kernel?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kernel",
                statement: "Core OS component.",
              },
            ],
            steps: [
              {
                reasoning: "Kernel = core OS managing resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Handles memory, processes, devices.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Core OS component",
          },
        },
        {
          id: "ciealc-u2-os-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a driver and why is it needed? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Driver",
                statement: "OS-hardware translator.",
              },
            ],
            steps: [
              {
                reasoning: "Driver lets OS communicate with specific hardware.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. printer driver lets OS send print jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Without it, hardware won't work properly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "OS↔hardware translator",
          },
        },
        {
          id: "ciealc-u2-os-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define operating system, kernel, user interface, utility software, application software, driver. (b) Name 3 OS functions. (c) What is GUI vs CLI? (d) Give 3 examples of utility software. (e) Why update drivers? (f) What does antivirus do? (g) What is defragmentation? (h) Design an OS feature wishlist for students.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Software",
                statement: "OS, utilities, drivers.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Three valid OS functions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) GUI=visual; CLI=text commands.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Three valid utilities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Fix bugs, add features, security.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Detects/removes malware.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Organises disk data for faster access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid OS feature wishlist.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Operating systems and software types.",
          },
        },
        {
          id: "ciealc-u2-os-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the primary role of an operating system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To store files permanently" },
              { id: "b", text: "To create documents for the user" },
              { id: "c", text: "To connect to the internet only" },
              {
                id: "d",
                text: "To manage hardware resources and run programs",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Operating system",
                statement: "Manages hardware and runs programs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The OS is the interface between users, applications and hardware.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Manages hardware and runs programs",
          },
        },
        {
          id: "ciealc-u2-os-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A computer has 16 GB of RAM. The operating system and open applications are using 11 GB. How many GB of RAM are still available? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "RAM calculation",
                statement: "Free RAM = total − used.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "16 − 11 = 5 GB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5 GB",
          },
        },
        {
          id: "ciealc-u2-os-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the kernel of an operating system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The user interface only" },
              {
                id: "b",
                text: "The core component that manages system resources",
              },
              { id: "c", text: "A hardware circuit" },
              { id: "d", text: "A type of application software" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kernel",
                statement: "Core OS component managing resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The kernel handles memory, CPU and device management at the lowest level.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Core component managing resources",
          },
        },
        {
          id: "ciealc-u2-os-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A computer has 2 GB (2048 MB) of RAM. Four applications each require 512 MB. How many MB of RAM remain after all four are loaded? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Memory allocation",
                statement: "Total required = number of apps × size each.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "4 × 512 = 2048 MB, so 2048 − 2048 = 0 MB remain.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "0 MB",
          },
        },
        {
          id: "ciealc-u2-os-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a device driver and why is it needed?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Driver",
                statement:
                  "Software translating OS commands for specific hardware.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A driver is software that lets the OS communicate with a specific hardware device.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is needed because each device has its own commands and interface requirements.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "OS–hardware translator software",
          },
        },
        {
          id: "ciealc-u2-os-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is application software?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The operating system kernel" },
              { id: "b", text: "A disk defragmentation utility" },
              { id: "c", text: "A device driver" },
              { id: "d", text: "A word processor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Application software",
                statement: "Programs for specific user tasks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A word processor performs a user task; the others are system software.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Word processor",
          },
        },
        {
          id: "ciealc-u2-os-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "An operating system update of 250 MB downloads at a steady rate of 10 MB per second. How many seconds does the download take? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Download time",
                statement: "Time = size ÷ rate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "250 ÷ 10 = 25 seconds.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "25 s",
          },
        },
        {
          id: "ciealc-u2-os-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare a graphical user interface (GUI) with a command-line interface (CLI), giving one advantage of each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GUI vs CLI",
                statement: "Visual vs text-based interaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A GUI uses icons, windows and menus; easier for beginners and visual tasks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A CLI uses typed commands; faster for experts, easier to automate and uses fewer resources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "GUI=visual/easy; CLI=text/efficient",
          },
        },
        {
          id: "ciealc-u2-os-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is utility software?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Antivirus software" },
              { id: "b", text: "A spreadsheet application" },
              { id: "c", text: "A web browser" },
              { id: "d", text: "A video game" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Utility software",
                statement: "Tools that maintain and manage the system.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Antivirus maintains system security; browsers, games and spreadsheets are applications.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Antivirus software",
          },
        },
        {
          id: "ciealc-u2-os-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A computer has 1 GB (1024 MB) of RAM. Three processes each require 400 MB. How many MB of memory must be handled using virtual memory? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 176 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Virtual memory overflow",
                statement: "Overflow = total required − physical RAM.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "3 × 400 = 1200 MB; 1200 − 1024 = 176 MB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "176 MB",
          },
        },
        {
          id: "ciealc-u2-os-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate the role of the operating system in a smartphone, considering resource management, security and the user interface.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OS roles",
                statement:
                  "Manages hardware, runs apps, provides interface and security.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It manages limited CPU, memory and battery resources across apps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It enforces security through permissions, sandboxing and encryption.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It provides the touch-based GUI through which users interact with the device.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Resource management, security and UI",
          },
        },
        {
          id: "ciealc-u2-os-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the operating system do when a user opens a file?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It identifies the associated application, allocates memory and launches the program",
              },
              { id: "b", text: "It shuts down the computer" },
              { id: "c", text: "It converts the file into a virus" },
              { id: "d", text: "It deletes the file automatically" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "File handling",
                statement: "OS reads file association and launches the app.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The OS checks the file type, starts the correct application and allocates resources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Launches the associated application",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u2-os-notes",
      title: "OS — notes",
      summary:
        "OS manages hardware+programs; kernel=core; drivers translate for hardware; utilities maintain system.",
      sections: [
        {
          heading: "Key idea",
          body: "OS is the bridge between users, programs and hardware.",
        },
        {
          heading: "Utilities",
          body: "Antivirus, backup, cleanup — keep system healthy.",
        },
      ],
    },
  ],
};
