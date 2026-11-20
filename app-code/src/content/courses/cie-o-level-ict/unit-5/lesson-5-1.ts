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
            { id: "a", text: "System software managing hardware" }, { id: "b", text: "A game" }, { id: "c", text: "A printer" }, { id: "d", text: "A file" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Hardware and applications" }, { id: "b", text: "Only printing" }, { id: "c", text: "Only files" }, { id: "d", text: "Only users" },
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
