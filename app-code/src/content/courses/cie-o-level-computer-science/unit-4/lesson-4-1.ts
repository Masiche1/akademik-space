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
            { id: "a", text: "Web browser" },
            { id: "b", text: "Operating system" },
            { id: "c", text: "Photo editor" },
            { id: "d", text: "Spreadsheet" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "System software", statement: "Manages the machine." }], steps: [{ reasoning: "OS is system software.", working: "\\text{OS}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Operating system" },
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
        {
          id: "olcs-u4-st-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is utility software?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Antivirus program" },
            { id: "b", text: "Device driver" },
            { id: "c", text: "Operating system" },
            { id: "d", text: "Word processor" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Utility software", statement: "Maintenance tools." }], steps: [{ reasoning: "Antivirus is a maintenance tool.", working: "\\text{antivirus}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Antivirus program" },
        },
        {
          id: "olcs-u4-st-q6", difficulty: "core", totalMarks: 1,
          stem: "Which piece of software manages the computer's hardware resources?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Spreadsheet" },
            { id: "b", text: "Web browser" },
            { id: "c", text: "Photo editor" },
            { id: "d", text: "Operating system" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "OS", statement: "Manages hardware resources." }], steps: [{ reasoning: "The OS manages hardware.", working: "\\text{OS}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Operating system" },
        },
        {
          id: "olcs-u4-st-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A computer runs 1 operating system and 3 device drivers. How many pieces of system software are running?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "System software", statement: "OS plus drivers." }], steps: [
            { reasoning: "System software = OS + drivers = 1 + 3.", working: "1+3", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u4-st-q8", difficulty: "core", totalMarks: 2,
          stem: "A computer has 1 OS, 2 device drivers, 3 applications and 1 utility program. (a) How many pieces of system software are present? (b) How many pieces of application software are present?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }, { label: "b", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Categories", statement: "System = OS + drivers; application = user tasks." }], steps: [
            { reasoning: "System software = 1 OS + 2 drivers = 3.", working: "1+2", marks: 1, markCode: "A" },
            { reasoning: "Application software = 3.", working: "3", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 3 (b) 3" },
        },
        {
          id: "olcs-u4-st-q9", difficulty: "core", totalMarks: 2,
          stem: "State the purpose of firmware.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Firmware", statement: "Low-level control software on chips." }], steps: [
            { reasoning: "Software stored permanently on a chip.", working: "\\text{chip software}", marks: 1, markCode: "M" },
            { reasoning: "Controls the hardware it is built into.", working: "\\text{control}", marks: 1, markCode: "A" },
          ], finalAnswer: "Firmware is low-level software on a chip that controls its hardware." },
        },
        {
          id: "olcs-u4-st-q10", difficulty: "core", totalMarks: 3,
          stem: "Explain two ways an operating system manages hardware resources.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "OS resource management", statement: "Allocates memory and CPU time." }], steps: [
            { reasoning: "Allocates RAM to programs.", working: "\\text{memory}", marks: 1, markCode: "M" },
            { reasoning: "Schedules CPU time between processes.", working: "\\text{CPU}", marks: 1, markCode: "M" },
            { reasoning: "Both stated correctly.", marks: 1, markCode: "A" },
          ], finalAnswer: "Manages memory allocation and schedules CPU time between processes." },
        },
        {
          id: "olcs-u4-st-q11", difficulty: "core", totalMarks: 1,
          stem: "Utility software is mainly used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Browse the web" },
            { id: "b", text: "Write documents" },
            { id: "c", text: "Play games" },
            { id: "d", text: "Maintain and protect the computer" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Utility", statement: "Maintenance tools." }], steps: [{ reasoning: "Utilities maintain/protect.", working: "\\text{maintenance}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Maintain and protect" },
        },
        {
          id: "olcs-u4-st-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why applications cannot run properly without an operating system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "OS role", statement: "Bridge between apps and hardware." }], steps: [
            { reasoning: "Apps need hardware access (memory, CPU, devices).", working: "\\text{hardware access}", marks: 1, markCode: "M" },
            { reasoning: "OS manages and allocates those resources.", working: "\\text{manage}", marks: 1, markCode: "M" },
            { reasoning: "Without OS, apps can't share hardware safely.", working: "\\text{conflict}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Apps depend on the OS to allocate memory/CPU and access devices; without it they cannot run." },
        },
        {
          id: "olcs-u4-st-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Firmware is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A user application" },
            { id: "b", text: "Software stored on a chip controlling hardware" },
            { id: "c", text: "A type of virus" },
            { id: "d", text: "A network cable" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Firmware", statement: "Chip-based control software." }], steps: [{ reasoning: "Firmware lives on chips.", working: "\\text{chip}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Chip control software" },
        },
        {
          id: "olcs-u4-st-q14", difficulty: "core", totalMarks: 1,
          stem: "A PC runs Windows, two device drivers, a word processor and an antivirus program. How many of these are system software?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "System software", statement: "OS + drivers (+ firmware tools)." }], steps: [
            { reasoning: "Windows + 2 drivers = 3; word processor is application, antivirus is utility.", working: "1+2", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u4-st-q15", difficulty: "core", totalMarks: 2,
          stem: "Give one example of utility software and state its purpose.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Utility software", statement: "Maintenance tools." }], steps: [
            { reasoning: "Valid example (antivirus, backup, defragmenter).", working: "\\text{example}", marks: 1, markCode: "M" },
            { reasoning: "Correct purpose stated.", working: "\\text{purpose}", marks: 1, markCode: "A" },
          ], finalAnswer: "e.g. antivirus — scans and removes malicious software." },
        },
        {
          id: "olcs-u4-st-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Software types and operating systems review.",
          parts: [
            { label: "a", prompt: "Classify: backup tool, spreadsheet, OS, mouse driver.", marks: 2 },
            { label: "b", prompt: "State three functions of an operating system.", marks: 3 },
            { label: "c", prompt: "Distinguish system software from utility software.", marks: 2 },
            { label: "d", prompt: "Explain why device drivers are needed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Driver", statement: "OS-to-device translator." },
          ], steps: [
            { part: "a", reasoning: "utility/application/system/system.", working: "\\text{classify}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Memory/CPU/files/UI — any three.", working: "\\text{functions}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Second function.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Third function.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "System software runs the machine (OS/drivers).", working: "\\text{system}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Utility software maintains it (antivirus/backup).", working: "\\text{utility}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Each device uses a different protocol.", working: "\\text{protocol}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Driver translates OS commands for that device.", working: "\\text{translate}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) util/app/sys/sys (b) any 3 OS functions (c) runs vs maintains (d) translates commands" },
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
            { id: "a", text: "A signal requesting CPU attention" },
            { id: "b", text: "A programming language" },
            { id: "c", text: "A storage device" },
            { id: "d", text: "A type of virus" },
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
        {
          id: "olcs-u4-int-q5", difficulty: "foundation", totalMarks: 1,
          stem: "When an interrupt occurs, the CPU first…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deletes the current program" },
            { id: "b", text: "Finishes its current instruction" },
            { id: "c", text: "Ignores the device" },
            { id: "d", text: "Shuts down immediately" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Interrupt handling", statement: "Finish instruction, then handle." }], steps: [{ reasoning: "CPU completes the current instruction first.", working: "\\text{finish}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Finishes current instruction" },
        },
        {
          id: "olcs-u4-int-q6", difficulty: "core", totalMarks: 1,
          stem: "ISR stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Internal system register" },
            { id: "b", text: "Instant software repair" },
            { id: "c", text: "Interrupt service routine" },
            { id: "d", text: "Input/output signal router" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "ISR", statement: "Interrupt service routine." }], steps: [{ reasoning: "ISR = interrupt service routine.", working: "\\text{ISR}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Interrupt service routine" },
        },
        {
          id: "olcs-u4-int-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A system receives 5 keyboard interrupts and 3 timer interrupts. How many interrupts occur in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "principle", name: "Interrupt sources", statement: "Each device event raises an interrupt." }], steps: [
            { reasoning: "Total = 5 + 3.", working: "5+3", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "olcs-u4-int-q8", difficulty: "core", totalMarks: 2,
          stem: "(a) How many steps does the CPU take when handling an interrupt? (b) How many interrupt sources are named in the lesson (keyboard press, network packet, disk transfer, timer tick)?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }, { label: "b", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "ISR sequence", statement: "Finish → save → run ISR → restore." }], steps: [
            { reasoning: "Four steps: finish, save state, run ISR, restore.", working: "4", marks: 1, markCode: "A" },
            { reasoning: "Four sources named.", working: "4", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 4 (b) 4" },
        },
        {
          id: "olcs-u4-int-q9", difficulty: "core", totalMarks: 2,
          stem: "Define polling.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Polling", statement: "CPU repeatedly checks all devices." }], steps: [
            { reasoning: "CPU checks each device in turn.", working: "\\text{check}", marks: 1, markCode: "M" },
            { reasoning: "Regardless of whether the device needs attention.", working: "\\text{constantly}", marks: 1, markCode: "A" },
          ], finalAnswer: "Polling is the CPU repeatedly checking every device for attention, even when none need it." },
        },
        {
          id: "olcs-u4-int-q10", difficulty: "core", totalMarks: 3,
          stem: "Explain why interrupts are more efficient than polling.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Efficiency", statement: "Devices signal only when needed." }], steps: [
            { reasoning: "Polling wastes CPU time checking idle devices.", working: "\\text{waste}", marks: 1, markCode: "M" },
            { reasoning: "Interrupts only occur when a device needs attention.", working: "\\text{on demand}", marks: 1, markCode: "M" },
            { reasoning: "CPU stays free for other work until signalled.", marks: 1, markCode: "A" },
          ], finalAnswer: "Devices interrupt only when needed, so the CPU isn't wasting time polling idle devices." },
        },
        {
          id: "olcs-u4-int-q11", difficulty: "core", totalMarks: 1,
          stem: "Which interrupt would normally be non-maskable?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mouse click" },
            { id: "b", text: "Hardware failure warning" },
            { id: "c", text: "Screen update" },
            { id: "d", text: "Keyboard keypress" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Non-maskable", statement: "Critical interrupts cannot be disabled." }], steps: [{ reasoning: "Hardware failure is critical and always handled.", working: "\\text{failure}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Hardware failure" },
        },
        {
          id: "olcs-u4-int-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A low-priority interrupt service routine is running when a high-priority interrupt arrives. Describe what the CPU does.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Interrupt priority", statement: "High priority can preempt low." }], steps: [
            { reasoning: "Finishes the current instruction.", working: "\\text{finish}", marks: 1, markCode: "M" },
            { reasoning: "Recognises the high-priority interrupt.", working: "\\text{priority}", marks: 1, markCode: "M" },
            { reasoning: "Pauses the low-priority ISR (preempts it).", working: "\\text{preempt}", marks: 1, markCode: "M" },
            { reasoning: "Runs the urgent handler, then resumes the paused ISR.", working: "\\text{resume}", marks: 1, markCode: "A" },
          ], finalAnswer: "CPU pauses the low-priority ISR, handles the urgent interrupt, then resumes where it left off." },
        },
        {
          id: "olcs-u4-int-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these would NOT normally generate an interrupt?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Keyboard keypress" },
            { id: "b", text: "Changing the desktop wallpaper" },
            { id: "c", text: "Network packet arrival" },
            { id: "d", text: "Timer tick" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Interrupt sources", statement: "Devices needing attention." }], steps: [{ reasoning: "Wallpaper change is a user action, not a device interrupt.", working: "\\text{wallpaper}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Changing the desktop wallpaper" },
        },
        {
          id: "olcs-u4-int-q14", difficulty: "core", totalMarks: 1,
          stem: "Three devices each raise one interrupt, and the CPU needs 2 ms to handle each. How many milliseconds does the CPU spend handling interrupts?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "principle", name: "ISR cost", statement: "Each interrupt costs handling time." }], steps: [
            { reasoning: "Total time = 3 interrupts × 2 ms.", working: "3 \\times 2", marks: 1, markCode: "A" },
          ], finalAnswer: "6 ms" },
        },
        {
          id: "olcs-u4-int-q15", difficulty: "core", totalMarks: 2,
          stem: "Give one example of a maskable interrupt and one of a non-maskable interrupt.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Maskable vs non-maskable", statement: "Can be disabled vs always handled." }], steps: [
            { reasoning: "Maskable example: keyboard/network/timer.", working: "\\text{maskable}", marks: 1, markCode: "M" },
            { reasoning: "Non-maskable example: hardware failure.", working: "\\text{non-maskable}", marks: 1, markCode: "A" },
          ], finalAnswer: "Maskable: keyboard press. Non-maskable: hardware failure." },
        },
        {
          id: "olcs-u4-int-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Interrupts review.",
          parts: [
            { label: "a", prompt: "Define an interrupt.", marks: 2 },
            { label: "b", prompt: "State the four steps the CPU takes when an interrupt occurs.", marks: 3 },
            { label: "c", prompt: "Distinguish maskable from non-maskable interrupts.", marks: 2 },
            { label: "d", prompt: "Explain one advantage of interrupts over polling.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Interrupt", statement: "Signal pausing CPU for urgent event." },
          ], steps: [
            { part: "a", reasoning: "Signal requesting CPU attention.", working: "\\text{signal}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Finish current instruction.", working: "\\text{finish}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Save state, run ISR.", working: "\\text{ISR}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Restore state and resume.", working: "\\text{restore}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Maskable can be disabled.", working: "\\text{maskable}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Non-maskable is always handled (critical).", working: "\\text{non-maskable}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "CPU only handles devices that need attention.", working: "\\text{on demand}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "No wasted polling time.", working: "\\text{efficient}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) attention signal (b) finish→save→ISR→restore (c) disable vs critical (d) no wasted polling" },
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
