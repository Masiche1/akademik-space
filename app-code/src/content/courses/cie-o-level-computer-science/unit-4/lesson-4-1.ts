import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "olcs-u4-lesson-4-1",
  code: "4-1",
  title: "Types of Software and Operating Systems",
  goal: "I CAN distinguish system, application and utility software and describe the functions of an operating system.",
  standards: ["2210 4.1.1", "2210 4.1.2", "2210 4.1.4"],
  vocabulary: [
    { term: "System software", definition: "Software that manages the computer itself — OS, drivers, utilities." },
    { term: "Application software", definition: "Software that performs user tasks — word processors, browsers, games." },
    { term: "Operating system (OS)", definition: "System software managing hardware resources and providing services to applications." },
    { term: "Driver", definition: "Software allowing the OS to communicate with a specific hardware device." },
    { term: "Utility software", definition: "Tools for maintenance — antivirus, disk defragmenter, backup tools." },
    { term: "Interrupt", definition: "Signal that pauses the CPU's current work to handle an urgent event." },
  ],
  concepts: [
    {
      id: "olcs-u4-software-types",
      title: "System, application and utility software",
      skill: "Classify software and explain how the OS manages hardware.",
      lesson: {
        sections: [
          { heading: "Categories", body: "- **System software**: OS, device drivers, firmware-adjacent tools — runs the machine.\n- **Application software**: user-facing programs — browsers, office suites, games, compilers.\n- **Utility software**: maintenance tools — antivirus, backup, defragmentation, compression." },
          { heading: "Operating system functions", body: "The OS:\n\n- Manages memory allocation (RAM to programs).\n- Schedules CPU time between processes.\n- Provides a user interface (GUI/CLI).\n- Manages files and peripherals via drivers.\n- Handles security and user accounts.\n\nWithout an OS, applications couldn't access hardware directly." },
          { heading: "Hardware, firmware, OS", body: "Hardware = physical parts. Firmware = permanent low-level control software on chips. OS = the main system software loaded at boot that manages everything above firmware." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Classify: Windows, Microsoft Word, a printer driver, an antivirus program.",
          solution: "Windows = system software (OS); Word = application; driver = system; antivirus = utility.",
        },
      },
      questions: [
        {
          id: "olcs-u4-st-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which is system software?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Operating system" }, { id: "b", text: "Web browser" }, { id: "c", text: "Spreadsheet" }, { id: "d", text: "Photo editor" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "System software", statement: "Manages the machine." }], steps: [{ reasoning: "OS is system software.", working: "\\text{OS}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Operating system" },
        },
        {
          id: "olcs-u4-st-q2", difficulty: "core", totalMarks: 2,
          stem: "State two functions of an operating system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "OS functions", statement: "Memory, CPU, files, UI." }], steps: [
            { reasoning: "Any two valid functions.", working: "\\text{memory/CPU/files/UI}", marks: 1, markCode: "M" },
            { reasoning: "Correct functions.", marks: 1, markCode: "A" },
          ], finalAnswer: "Manages memory, schedules CPU, manages files, provides user interface." },
        },
        {
          id: "olcs-u4-st-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why device drivers are necessary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Drivers", statement: "Translate OS commands to device-specific signals." }], steps: [
            { reasoning: "Each device speaks a different language.", working: "\\text{different protocols}", marks: 1, markCode: "M" },
            { reasoning: "Driver translates OS commands for that device.", working: "\\text{translate}", marks: 1, markCode: "M" },
            { reasoning: "Without driver, OS can't use the device.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Drivers translate OS instructions into device-specific commands so hardware can be used." },
        },
        {
          id: "olcs-u4-st-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Software types review.",
          parts: [
            { label: "a", prompt: "Classify: antivirus, browser, OS, printer driver.", marks: 2 },
            { label: "b", prompt: "State three OS functions.", marks: 3 },
            { label: "c", prompt: "Distinguish firmware from the OS.", marks: 2 },
            { label: "d", prompt: "Explain what happens when an interrupt occurs.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Interrupt", statement: "Signal pausing CPU for urgent event." },
          ], steps: [
            { part: "a", reasoning: "utility/app/system/system.", working: "\\text{classify}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Memory/CPU/files/UI — any three.", working: "\\text{functions}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Second function.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Third function.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Firmware: permanent chip software.", working: "\\text{firmware}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "OS: loaded general-purpose manager.", working: "\\text{OS}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "CPU pauses current task.", working: "\\text{pause}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Handles urgent event then resumes.", working: "\\text{resume}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) util/app/sys/sys (b) any 3 OS functions (c) firmware vs OS (d) pause→handle→resume" },
        },
      ],
    },
    {
      id: "olcs-u4-interrupts",
      title: "Interrupts",
      skill: "Explain how interrupts let devices get CPU attention without constant polling.",
      lesson: {
        sections: [
          { heading: "The problem", body: "Without interrupts, the CPU would constantly check every device (**polling**) — wasting time. Interrupts let devices signal when they need attention." },
          { heading: "How it works", body: "1. Device raises an **interrupt** signal.\n2. CPU finishes its current instruction, saves state.\n3. CPU runs the **interrupt service routine (ISR)** for that device.\n4. CPU restores state and resumes normal work.\n\nExamples: keyboard keypress, network packet arrival, disk transfer complete, timer tick." },
          { heading: "Priority", body: "Interrupts have priorities — a high-priority interrupt (e.g. power failure warning) can preempt a low-priority one. Some interrupts are maskable (can be disabled), others non-maskable (e.g. hardware failure)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why are interrupts more efficient than polling?",
          solution: "CPU only spends time on devices that actually need it, instead of checking all devices constantly.",
        },
      },
      questions: [
        {
          id: "olcs-u4-int-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An interrupt is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A signal requesting CPU attention" }, { id: "b", text: "A type of virus" }, { id: "c", text: "A storage device" }, { id: "d", text: "A programming language" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Interrupt", statement: "Signal for CPU attention." }], steps: [{ reasoning: "Interrupt = attention signal.", working: "\\text{signal}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Signal for CPU" },
        },
        {
          id: "olcs-u4-int-q2", difficulty: "core", totalMarks: 2,
          stem: "Give one example of an event that generates an interrupt.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Interrupt sources", statement: "Devices needing attention." }], steps: [
            { reasoning: "Valid example.", working: "\\text{keypress/network/timer}", marks: 1, markCode: "M" },
            { reasoning: "Correct type.", marks: 1, markCode: "A" },
          ], finalAnswer: "Keyboard press / network packet / timer tick / disk complete." },
        },
        {
          id: "olcs-u4-int-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the steps the CPU takes when an interrupt occurs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "ISR", statement: "Save state → run handler → restore." }], steps: [
            { reasoning: "Finish current instruction, save state.", working: "\\text{save state}", marks: 1, markCode: "M" },
            { reasoning: "Run interrupt service routine.", working: "\\text{ISR}", marks: 1, markCode: "M" },
            { reasoning: "Restore state, resume task.", working: "\\text{restore}", marks: 1, markCode: "M" },
            { reasoning: "Correct sequence.", marks: 1, markCode: "A" },
          ], finalAnswer: "Finish instruction → save state → run ISR → restore and resume." },
        },
        {
          id: "olcs-u4-int-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Interrupts and software review.",
          parts: [
            { label: "a", prompt: "Define interrupt.", marks: 2 },
            { label: "b", prompt: "State two advantages over polling.", marks: 2 },
            { label: "c", prompt: "Distinguish maskable from non-maskable interrupts.", marks: 2 },
            { label: "d", prompt: "Describe the sequence when a key is pressed on a keyboard.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Maskable", statement: "Can be disabled vs critical non-maskable." },
          ], steps: [
            { part: "a", reasoning: "Signal pausing CPU for urgent event.", working: "\\text{signal}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "No wasted polling time.", working: "\\text{efficient}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Immediate response to events.", working: "\\text{fast response}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Maskable can be ignored/disabled.", working: "\\text{maskable}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Non-maskable always handled (critical).", working: "\\text{non-maskable}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Keyboard raises interrupt.", working: "\\text{interrupt}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "CPU runs keyboard ISR, stores key.", working: "\\text{ISR}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Resumes previous task.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) attention signal (b) efficient/fast (c) can disable vs critical (d) interrupt→ISR→resume" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u4-4-1-notes", title: "Software types and OS — notes", summary: "System/app/utility software, OS functions, interrupts.",
      sections: [
        { heading: "Categories", body: "System = OS/drivers; application = user tasks; utility = maintenance tools." },
        { heading: "Interrupts", body: "Device signals CPU → save state → run ISR → restore. More efficient than polling." },
      ] },
  ],
};
