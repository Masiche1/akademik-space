import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "olict-u5-lesson-5-1",
  code: "5-1",
  title: "Types of Software",
  goal: "I CAN distinguish system software, utility software and application software.",
  standards: ["7014 7.1"],
  vocabulary: [
    { term: "System software", definition: "Software managing the computer — OS and utilities." },
    { term: "Operating system (OS)", definition: "Core software managing hardware and running applications." },
    { term: "Utility software", definition: "Tools maintaining/improving the system — antivirus, backup, disk tools." },
    { term: "Application software", definition: "Programs for user tasks — word processing, spreadsheets, games." },
    { term: "Open source", definition: "Software with source code freely available for modification." },
    { term: "Proprietary", definition: "Commercial software owned by a company, closed source." },
    { term: "Firmware", definition: "Software embedded in hardware devices." },
  ],
  concepts: [
    {
      id: "olict-u5-types",
      title: "Categories of software",
      skill: "Distinguish system, utility and application software.",
      lesson: {
        sections: [
          { heading: "System software", body: "The **operating system** (Windows, macOS, Linux, Android) manages hardware, memory, files and runs applications. Without it, hardware can't be used." },
          { heading: "Utility software", body: "Tools that maintain the system: antivirus, backup tools, disk defragmentation/cleanup, compression tools." },
          { heading: "Application software", body: "Programs for specific user tasks: word processors, spreadsheets, web browsers, games, CAD, databases. This is what most people interact with daily." },
          { heading: "Open vs proprietary", body: "**Open source** (Linux, LibreOffice): code free to view/modify. **Proprietary** (Windows, MS Office): owned by company, paid licence." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Classify: antivirus, Windows, a word processor.",
          solution: "Antivirus = utility; Windows = system software (OS); word processor = application.",
        },
      },
      questions: [
        {
          id: "olict-u5-ty-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An operating system is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A file" },
            { id: "b", text: "A game" },
            { id: "c", text: "A printer" },
            { id: "d", text: "System software managing hardware" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "OS", statement: "Manages hardware." }], steps: [{ reasoning: "OS = system software.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** System software" },
        },
        {
          id: "olict-u5-ty-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish utility software from application software.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Utility vs application", statement: "Maintain vs user tasks." }], steps: [
            { reasoning: "Utility: maintains system (antivirus, backup).", marks: 1, markCode: "M" },
            { reasoning: "Application: user tasks (word processor).", marks: 1, markCode: "A" },
          ], finalAnswer: "Utility maintains the system; applications perform user tasks." },
        },
        {
          id: "olict-u5-ty-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two advantages of open-source software.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Open source", statement: "Free + modifiable." }], steps: [
            { reasoning: "Usually free to use.", marks: 1, markCode: "M" },
            { reasoning: "Source code open for inspection/customisation.", marks: 1, markCode: "M" },
            { reasoning: "Community support/improvement.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Free to use, modifiable source code, community-driven improvements." },
        },
        {
          id: "olict-u5-ty-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Software types review.",
          parts: [
            { label: "a", prompt: "Define system software.", marks: 2 },
            { label: "b", prompt: "Define utility software with an example.", marks: 2 },
            { label: "c", prompt: "Define application software with an example.", marks: 2 },
            { label: "d", prompt: "Distinguish open source from proprietary.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Software types", statement: "System, utility, application, licensing." },
          ], steps: [
            { part: "a", reasoning: "Manages hardware/OS.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Maintains system.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "e.g. antivirus.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "User task programs.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "e.g. word processor.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Open: free code.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Proprietary: owned/closed.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) manages hw (b) maintains, AV (c) user tasks, WP (d) free vs owned" },
        },
        {
          id: "olict-u5-ty-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is utility software?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A word processor" },
            { id: "b", text: "Antivirus" },
            { id: "c", text: "A game" },
            { id: "d", text: "A browser" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Utility software", statement: "Maintains system." }], steps: [{ reasoning: "Antivirus maintains/protects the system.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Antivirus" },
        },
        {
          id: "olict-u5-ty-q6", difficulty: "foundation", totalMarks: 2,
          stem: "How many broad categories of software are described: system, utility and application?",
          response: { type: "numeric", parts: [{ label: "categories", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Software categories", statement: "Count types." }], steps: [
            { reasoning: "System, utility and application = 3 categories.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 categories" },
        },
        {
          id: "olict-u5-ty-q7", difficulty: "core", totalMarks: 1,
          stem: "Open-source software is software whose…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It cannot be copied" },
            { id: "b", text: "It always costs money" },
            { id: "c", text: "Code is kept secret" },
            { id: "d", text: "Source code is freely available for modification" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Open source", statement: "Open code." }], steps: [{ reasoning: "Open source = inspectable/modifiable code.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Source code freely available" },
        },
        {
          id: "olict-u5-ty-q8", difficulty: "core", totalMarks: 1,
          stem: "Which of these is application software?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Device driver" },
            { id: "b", text: "Disk cleanup tool" },
            { id: "c", text: "Operating system" },
            { id: "d", text: "Word processor" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Application software", statement: "User tasks." }], steps: [{ reasoning: "Word processor performs a user task.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Word processor" },
        },
        {
          id: "olict-u5-ty-q9", difficulty: "core", totalMarks: 2,
          stem: "A shop buys single-user licences for software on 12 computers. How many licences are needed?",
          response: { type: "numeric", parts: [{ label: "licences", answer: 12 }] },
          markscheme: { principles: [{ kind: "principle", name: "Licences", statement: "One per machine." }], steps: [
            { reasoning: "Single-user licence covers one computer each.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 12 licences.", marks: 1, markCode: "A" },
          ], finalAnswer: "12 licences" },
        },
        {
          id: "olict-u5-ty-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why an operating system is essential system software.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "OS role", statement: "Manages hardware." }], steps: [
            { reasoning: "It manages hardware resources such as memory and storage.", marks: 1, markCode: "M" },
            { reasoning: "It runs and manages applications.", marks: 1, markCode: "M" },
            { reasoning: "It provides the user interface.", marks: 1, markCode: "M" },
            { reasoning: "Without it, hardware cannot be used.", marks: 1, markCode: "A" },
          ], finalAnswer: "The OS manages hardware, runs applications and provides the interface — without it the computer is unusable." },
        },
        {
          id: "olict-u5-ty-q11", difficulty: "core", totalMarks: 1,
          stem: "Proprietary software is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Modifiable by anyone" },
            { id: "b", text: "Owned by a company with closed source code" },
            { id: "c", text: "Open source" },
            { id: "d", text: "Always free" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Proprietary", statement: "Closed, owned." }], steps: [{ reasoning: "Proprietary = company-owned, closed code.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Company-owned, closed source" },
        },
        {
          id: "olict-u5-ty-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Of 20 programs installed on a PC, 5 are system software and 4 are utility software. How many are application software?",
          response: { type: "numeric", parts: [{ label: "applications", answer: 11 }] },
          markscheme: { principles: [{ kind: "principle", name: "Software count", statement: "Total − others." }], steps: [
            { reasoning: "20 − 5 − 4 = 11.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 11 applications.", marks: 1, markCode: "A" },
          ], finalAnswer: "11 applications" },
        },
        {
          id: "olict-u5-ty-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A school must choose between an open-source and a proprietary office suite. Discuss two factors in the decision.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Software choice", statement: "Cost vs support." }], steps: [
            { reasoning: "Cost: open source is usually free; proprietary needs licences.", marks: 1, markCode: "M" },
            { reasoning: "Customisation: open source can be modified to suit needs.", marks: 1, markCode: "M" },
            { reasoning: "Support: proprietary often includes vendor support/training.", marks: 1, markCode: "M" },
            { reasoning: "Both factors weighed for the decision.", marks: 1, markCode: "A" },
          ], finalAnswer: "Weigh cost/licensing against support and customisation needs." },
        },
        {
          id: "olict-u5-ty-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Firmware is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Software embedded in hardware devices" },
            { id: "b", text: "A web browser" },
            { id: "c", text: "A network cable" },
            { id: "d", text: "A type of virus" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Firmware", statement: "Embedded software." }], steps: [{ reasoning: "Firmware lives inside hardware.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Embedded in hardware" },
        },
        {
          id: "olict-u5-ty-q15", difficulty: "foundation", totalMarks: 2,
          stem: "How many operating systems are named in the lesson: Windows, macOS, Linux, Android, iOS?",
          response: { type: "numeric", parts: [{ label: "systems", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "OS examples", statement: "Count named." }], steps: [
            { reasoning: "Windows, macOS, Linux, Android, iOS = 5.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 operating systems" },
        },
        {
          id: "olict-u5-ty-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Classify each item as system, utility or application software: antivirus, Windows, a spreadsheet, a backup tool.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Classification", statement: "System/utility/application." }], steps: [
            { reasoning: "Windows is system software (the OS).", marks: 1, markCode: "M" },
            { reasoning: "Antivirus and backup tool are utility software.", marks: 1, markCode: "M" },
            { reasoning: "A spreadsheet is application software.", marks: 1, markCode: "M" },
            { reasoning: "All four classified correctly.", marks: 1, markCode: "A" },
          ], finalAnswer: "Windows = system; antivirus + backup = utility; spreadsheet = application." },
        },
      ],
    },
    {
      id: "olict-u5-os",
      title: "The Operating System",
      skill: "Explain what an OS does: memory, files, users and running applications.",
      lesson: {
        sections: [
          { heading: "OS functions", body: "- **Memory management**: allocates RAM to programs.\n- **File management**: stores/organises files, controls access.\n- **User interface**: desktop, icons, menus (GUI).\n- **Security**: user accounts, passwords, permissions.\n- **Running applications**: launches and manages programs." },
          { heading: "Examples", body: "Windows, macOS, Linux (desktop); Android, iOS (mobile). All perform the same core functions." },
          { heading: "GUI", body: "Graphical User Interface — windows, icons, menus, pointer. Made computers accessible to non-experts." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What happens when you open two programs at once?",
          solution: "The OS allocates memory to both, schedules CPU time, and manages their windows and file access.",
        },
      },
      questions: [
        {
          id: "olict-u5-os-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An OS manages…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hardware and applications" },
            { id: "b", text: "Only users" },
            { id: "c", text: "Only printing" },
            { id: "d", text: "Only files" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "OS", statement: "Manages hardware+apps." }], steps: [{ reasoning: "OS manages all.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Hardware and apps" },
        },
        {
          id: "olict-u5-os-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two functions of an operating system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "OS functions", statement: "Memory, files, users." }], steps: [
            { reasoning: "Memory management / file management.", marks: 1, markCode: "M" },
            { reasoning: "User interface / security / running apps.", marks: 1, markCode: "A" },
          ], finalAnswer: "Memory management, file management, user interface, security, running applications." },
        },
        {
          id: "olict-u5-os-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what a GUI is and why it matters.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "GUI", statement: "Visual interface." }], steps: [
            { reasoning: "Windows, icons, menus, pointer.", marks: 1, markCode: "M" },
            { reasoning: "Replaced text commands with visual interaction.", marks: 1, markCode: "M" },
            { reasoning: "Made computers accessible to everyone.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "GUI = graphical interface (windows/icons/menus) making computers usable without memorising commands." },
        },
        {
          id: "olict-u5-os-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Operating system review.",
          parts: [
            { label: "a", prompt: "What is an operating system?", marks: 2 },
            { label: "b", prompt: "Name two OS functions.", marks: 2 },
            { label: "c", prompt: "What is a GUI?", marks: 2 },
            { label: "d", prompt: "Name two desktop and two mobile OS examples.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "OS", statement: "Functions, GUI, examples." },
          ], steps: [
            { part: "a", reasoning: "Core software managing computer.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Memory/files/etc.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Two functions.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Graphical user interface.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Windows/icons/menus.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Windows/macOS/Linux.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Android/iOS.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct examples.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) core software (b) memory+files (c) graphical UI (d) Win/macOS, Android/iOS" },
        },
        {
          id: "olict-u5-os-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Memory management means the OS…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Prints documents" },
            { id: "b", text: "Scans for viruses" },
            { id: "c", text: "Allocates RAM to programs" },
            { id: "d", text: "Connects to the internet" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Memory management", statement: "RAM allocation." }], steps: [{ reasoning: "OS allocates memory to programs.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Allocates RAM" },
        },
        {
          id: "olict-u5-os-q6", difficulty: "core", totalMarks: 2,
          stem: "A PC has 8 GB of RAM. If 3 open programs each use 2 GB, how much RAM do they use in total?",
          response: { type: "numeric", parts: [{ label: "GB", answer: 6, unit: "GB" }] },
          markscheme: { principles: [{ kind: "principle", name: "Memory use", statement: "Programs × usage." }], steps: [
            { reasoning: "3 × 2 GB = 6 GB.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 6 GB.", marks: 1, markCode: "A" },
          ], finalAnswer: "6 GB" },
        },
        {
          id: "olict-u5-os-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A GUI (graphical user interface) includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only text commands" },
            { id: "b", text: "Physical buttons only" },
            { id: "c", text: "Windows, icons, menus and a pointer" },
            { id: "d", text: "Paper printouts" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "GUI", statement: "Visual interface." }], steps: [{ reasoning: "GUI = windows/icons/menus/pointer.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Windows, icons, menus, pointer" },
        },
        {
          id: "olict-u5-os-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is NOT a function of an operating system?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Running applications" },
            { id: "b", text: "File management" },
            { id: "c", text: "Memory management" },
            { id: "d", text: "Printing photographs" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "OS functions", statement: "Identify non-function." }], steps: [{ reasoning: "Printing is a task; the OS manages hardware/apps/files.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Printing photographs" },
        },
        {
          id: "olict-u5-os-q9", difficulty: "foundation", totalMarks: 2,
          stem: "How many OS functions are listed: memory management, file management, user interface, security, running applications?",
          response: { type: "numeric", parts: [{ label: "functions", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "OS functions", statement: "Count functions." }], steps: [
            { reasoning: "Five functions are listed.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 functions" },
        },
        {
          id: "olict-u5-os-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how an OS protects data using user accounts and permissions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "OS security", statement: "Accounts + permissions." }], steps: [
            { reasoning: "Each user has an account with a password.", marks: 1, markCode: "M" },
            { reasoning: "Passwords prevent unauthorised access.", marks: 1, markCode: "M" },
            { reasoning: "Permissions control what each user can do.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation of protection.", marks: 1, markCode: "A" },
          ], finalAnswer: "Accounts with passwords limit access; permissions restrict what each user can do." },
        },
        {
          id: "olict-u5-os-q11", difficulty: "core", totalMarks: 1,
          stem: "Which of these is a mobile operating system?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Linux" },
            { id: "b", text: "macOS" },
            { id: "c", text: "Windows" },
            { id: "d", text: "Android" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Mobile OS", statement: "Android/iOS." }], steps: [{ reasoning: "Android is a mobile OS.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Android" },
        },
        {
          id: "olict-u5-os-q12", difficulty: "core", totalMarks: 2,
          stem: "An OS checks system files every 30 minutes. How many checks does it run in 24 hours?",
          response: { type: "numeric", parts: [{ label: "checks", answer: 48 }] },
          markscheme: { principles: [{ kind: "principle", name: "Check frequency", statement: "24h × 2 per hour." }], steps: [
            { reasoning: "2 checks per hour × 24 = 48.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 48 checks.", marks: 1, markCode: "A" },
          ], finalAnswer: "48 checks" },
        },
        {
          id: "olict-u5-os-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe what the OS does when a user opens a program.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Launching apps", statement: "OS manages launch." }], steps: [
            { reasoning: "The OS allocates memory to the program.", marks: 1, markCode: "M" },
            { reasoning: "It loads the program into memory and starts it.", marks: 1, markCode: "M" },
            { reasoning: "It manages the program's window on screen.", marks: 1, markCode: "M" },
            { reasoning: "It controls the program's access to files and devices.", marks: 1, markCode: "A" },
          ], finalAnswer: "The OS allocates memory, loads and runs the program, manages its window and controls its access." },
        },
        {
          id: "olict-u5-os-q14", difficulty: "core", totalMarks: 1,
          stem: "Which OS function organises files on the disk?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Printing" },
            { id: "b", text: "Gaming" },
            { id: "c", text: "Browsing" },
            { id: "d", text: "File management" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "File management", statement: "Stores files." }], steps: [{ reasoning: "File management organises files.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** File management" },
        },
        {
          id: "olict-u5-os-q15", difficulty: "core", totalMarks: 2,
          stem: "A class of 30 students each needs an account on the school OS, which supports 40 accounts. How many spare account slots are there?",
          response: { type: "numeric", parts: [{ label: "slots", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "Accounts", statement: "Capacity − used." }], steps: [
            { reasoning: "40 − 30 = 10.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 10 spare slots.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 spare slots" },
        },
        {
          id: "olict-u5-os-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a computer needs an operating system even if the user only runs one program.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "OS necessity", statement: "Manages all resources." }], steps: [
            { reasoning: "The OS manages hardware such as memory and storage.", marks: 1, markCode: "M" },
            { reasoning: "It provides the interface the user interacts with.", marks: 1, markCode: "M" },
            { reasoning: "It controls the program's access to files and devices.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation of necessity.", marks: 1, markCode: "A" },
          ], finalAnswer: "The OS manages hardware, provides the interface and controls the program — it is needed regardless." },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u5-5-1-notes", title: "Types of software — notes", summary: "System, utility, application software; OS functions and GUI.",
      sections: [
        { heading: "Types", body: "System (OS) manages hardware; utility maintains; applications do user tasks." },
        { heading: "OS", body: "Manages memory, files, users, security; GUI = visual interface." },
      ] },
  ],
};
