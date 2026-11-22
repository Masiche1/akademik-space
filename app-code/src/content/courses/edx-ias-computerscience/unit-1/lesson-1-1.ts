import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "eiascs-u1-lesson-1-1",
  code: "1-1",
  title: "Computer Components and CPU",
  goal: "I CAN explain the components of a computer system and CPU operation.",
  standards: ["Edexcel IAS Computer Science 9CP01 Unit 1 — Computer Systems"],
  vocabulary: [
    { term: "CPU", definition: "Central Processing Unit — executes instructions." },
    { term: "Fetch-decode-execute cycle", definition: "CPU cycle: fetch instruction, decode, execute." },
    { term: "Register", definition: "Small fast storage inside CPU." },
    { term: "ALU", definition: "Arithmetic Logic Unit — performs calculations." },
    { term: "CU", definition: "Control Unit — coordinates operations." },
    { term: "Cache", definition: "Fast memory storing frequently used data." },
  ],
  concepts: [
    {
      id: "eiascs-u1-cpu",
      title: "CPU and Fetch-Decode-Execute",
      skill: "Explain CPU components and the FDE cycle.",
      lesson: {
        sections: [
          { heading: "CPU components", body: "**ALU**: performs arithmetic/logic operations — add, subtract, compare. **CU**: coordinates operations — fetches, decodes, controls execution. **Registers**: MAR (memory address), MDR (memory data), PC (program counter), ACC (accumulator).\n\n**Cache**: fast memory between CPU and RAM — stores frequently used data/instructions — speeds up processing." },
          { heading: "Fetch-decode-execute cycle", body: "**Fetch**: PC holds next instruction address → instruction fetched from memory to MDR → PC incremented. **Decode**: CU interprets instruction — determines operation. **Execute**: ALU/CU performs operation — result stored.\n\n**Clock speed**: measured in GHz — faster clock = more cycles/sec = faster processing (but other factors matter)." },
        ],
        keyFormulas: [],
        workedExample: { problem: "CPU instruction 'add 5, 3'. Which component performs calculation?", solution: "ALU." },
      },
      questions: [
        {
          id: "eiascs-u1-cpu-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What is the ALU?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Memory unit" }, { id: "b", text: "Performs arithmetic/logic operations" },
            { id: "c", text: "Control unit" }, { id: "d", text: "Clock" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "ALU", statement: "Calculations." }],
            steps: [{ reasoning: "ALU = arithmetic logic.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** Arithmetic/logic", commonErrors: ["CU confused."] },
        },
        {
          id: "eiascs-u1-cpu-q2", difficulty: "core", totalMarks: 3,
          stem: "Give two CPU components and their functions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "CPU components", statement: "ALU + CU." }],
            steps: [
              { reasoning: "ALU — performs calculations/logic.", marks: 1, markCode: "AO2" },
              { reasoning: "CU — coordinates operations.", marks: 1, markCode: "AO2" },
              { reasoning: "Registers — fast temporary storage.", marks: 1, markCode: "AO2" }],
            finalAnswer: "ALU, CU, registers.", commonErrors: ["Only one.", "Wrong component."] },
        },
        {
          id: "eiascs-u1-cpu-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the fetch-decode-execute cycle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "FDE cycle", statement: "Three stages." }],
            steps: [
              { reasoning: "Fetch — instruction retrieved from memory.", marks: 1, markCode: "AO2" },
              { reasoning: "Decode — CU interprets instruction.", marks: 1, markCode: "AO2" },
              { reasoning: "Execute — operation performed.", marks: 1, markCode: "AO2" },
              { reasoning: "Repeats billions of times per second.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Fetch→decode→execute, repeated.", commonErrors: ["Two stages.", "No repetition."] },
        },
        {
          id: "eiascs-u1-cpu-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Program 'print hello' runs on computer.",
          parts: [
            { label: "a", prompt: "Describe what happens in CPU.", marks: 4 },
            { label: "b", prompt: "Explain role of registers.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "CPU operation", statement: "FDE + registers." }],
            steps: [
              { reasoning: "(a) PC fetches instruction address → MDR.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) CU decodes → ALU executes → output.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(b) PC holds next instruction address.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) MAR/MDR hold memory addresses/data.", marks: 2, markCode: "AO2", part: "b" }],
            finalAnswer: "(a) FDE cycle (b) PC+MAR/MDR", commonErrors: ["No cycle.", "No registers."] },
        },
      ],
    },
    {
      id: "eiascs-u1-memory",
      title: "Memory and Storage",
      skill: "Compare memory types and storage devices.",
      lesson: {
        sections: [
          { heading: "Memory hierarchy", body: "**Cache**: fastest, smallest — inside CPU, ~KB. **RAM**: fast, volatile — loses data on power off. **ROM**: non-volatile — stores BIOS/firmware. **Virtual memory**: uses disk as extension of RAM — slower but larger.\n\n**Volatile vs non-volatile**: volatile = loses data (RAM), non-volatile = keeps (ROM, storage)." },
          { heading: "Storage devices", body: "**Primary storage**: RAM, ROM — directly accessed by CPU. **Secondary storage**: HDD (magnetic, cheap, slow), SSD (flash, fast, expensive), optical (CD/DVD — slow, large). **Cloud storage**: remote servers — accessible anywhere but needs internet.\n\n**Capacity/speed trade-off**: faster storage costs more — hierarchy balances cost, speed, capacity." },
        ],
        keyFormulas: [],
        workedExample: { problem: "Computer loses all data when powered off. Memory type?", solution: "RAM — volatile." },
      },
      questions: [
        {
          id: "eiascs-u1-mem-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What is RAM?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Permanent storage" }, { id: "b", text: "Volatile fast memory" },
            { id: "c", text: "Slow storage" }, { id: "d", text: "CPU register" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "RAM", statement: "Volatile fast." }],
            steps: [{ reasoning: "RAM = volatile memory.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** Volatile fast", commonErrors: ["ROM confused."] },
        },
        {
          id: "eiascs-u1-mem-q2", difficulty: "core", totalMarks: 3,
          stem: "Give two differences between RAM and ROM.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "RAM vs ROM", statement: "Volatile vs permanent." }],
            steps: [
              { reasoning: "RAM volatile — loses data on power off.", marks: 1, markCode: "AO2" },
              { reasoning: "ROM non-volatile — keeps data permanently.", marks: 1, markCode: "AO2" },
              { reasoning: "RAM read/write; ROM read-only (mostly).", marks: 1, markCode: "AO2" }],
            finalAnswer: "RAM=volatile, ROM=permanent.", commonErrors: ["Same.", "Only one difference."] },
        },
        {
          id: "eiascs-u1-mem-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain virtual memory.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Virtual memory", statement: "RAM extension." }],
            steps: [
              { reasoning: "Uses disk storage as extension of RAM.", marks: 1, markCode: "AO2" },
              { reasoning: "Allows more programs than RAM alone.", marks: 1, markCode: "AO2" },
              { reasoning: "Slower — disk access much slower than RAM.", marks: 1, markCode: "AO2" },
              { reasoning: "OS manages swapping — moves data between RAM/disk.", marks: 1, markCode: "AO3" }],
            finalAnswer: "Disk as RAM extension — slower.", commonErrors: ["Faster than RAM.", "No mechanism."] },
        },
        {
          id: "eiascs-u1-mem-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Laptop with HDD vs SSD comparison.",
          parts: [
            { label: "a", prompt: "Identify two advantages of SSD.", marks: 4 },
            { label: "b", prompt: "Identify one advantage of HDD.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Storage comparison", statement: "Speed vs cost." }],
            steps: [
              { reasoning: "(a) SSD faster — no moving parts, flash memory.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) SSD more durable — resistant to shock.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(b) HDD cheaper per GB — more storage for less.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) HDD larger capacities available.", marks: 2, markCode: "AO2", part: "b" }],
            finalAnswer: "(a) fast+durable (b) cheap+large", commonErrors: ["SSD worse.", "No comparison."] },
        },
      ],
    },
    {
      id: "eiascs-u1-software",
      title: "Software and Operating Systems",
      skill: "Explain software types and operating system functions.",
      lesson: {
        sections: [
          { heading: "Software types", body: "**System software**: OS, device drivers, utilities — manages hardware. **Application software**: word processors, browsers, games — user tasks. **Firmware**: embedded software in hardware — BIOS/UEFI.\n\n**Open source vs proprietary**: open source = free, modifiable (Linux); proprietary = licensed, closed (Windows)." },
          { heading: "Operating system functions", body: "**Memory management**: allocates RAM to programs. **File management**: organizes storage. **Process management**: schedules CPU time — multitasking. **Device management**: drivers interface hardware. **Security**: user accounts, permissions.\n\n**Examples**: Windows, macOS, Linux — different user interfaces, features." },
        ],
        keyFormulas: [],
        workedExample: { problem: "Windows allocates memory to running programs. OS function?", solution: "Memory management." },
      },
      questions: [
        {
          id: "eiascs-u1-sw-q1", difficulty: "foundation", totalMarks: 2,
          stem: "What is system software?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Games" }, { id: "b", text: "OS, drivers, utilities" },
            { id: "c", text: "Word processors" }, { id: "d", text: "Browsers" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "System software", statement: "Manages hardware." }],
            steps: [{ reasoning: "System software = OS/drivers.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** OS/drivers", commonErrors: ["Application confused."] },
        },
        {
          id: "eiascs-u1-sw-q2", difficulty: "core", totalMarks: 3,
          stem: "Give two functions of an operating system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "OS functions", statement: "Memory, process, file." }],
            steps: [
              { reasoning: "Memory management — allocates RAM.", marks: 1, markCode: "AO2" },
              { reasoning: "Process management — schedules CPU time.", marks: 1, markCode: "AO2" },
              { reasoning: "File management — organizes storage.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Memory, process, file management.", commonErrors: ["Only one.", "Wrong function."] },
        },
        {
          id: "eiascs-u1-sw-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between open source and proprietary software.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "Open vs proprietary", statement: "Free vs licensed." }],
            steps: [
              { reasoning: "Open source: free, source code available, modifiable.", marks: 1, markCode: "AO2" },
              { reasoning: "Proprietary: licensed, closed source, paid.", marks: 1, markCode: "AO2" },
              { reasoning: "Open source: community development (Linux).", marks: 1, markCode: "AO2" },
              { reasoning: "Proprietary: company-controlled (Windows).", marks: 1, markCode: "AO2" }],
            finalAnswer: "Open=free/modifiable, proprietary=licensed.", commonErrors: ["Same.", "No difference."] },
        },
        {
          id: "eiascs-u1-sw-q4", difficulty: "challenge", totalMarks: 8,
          stem: "Computer runs multiple programs simultaneously.",
          parts: [
            { label: "a", prompt: "Explain OS role.", marks: 4 },
            { label: "b", prompt: "Explain multitasking.", marks: 4 }],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "OS multitasking", statement: "Scheduling + memory." }],
            steps: [
              { reasoning: "(a) OS allocates memory, CPU time to each program.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(a) Manages resources — prevents conflicts.", marks: 2, markCode: "AO2", part: "a" },
              { reasoning: "(b) Multitasking: rapid switching between programs.", marks: 2, markCode: "AO2", part: "b" },
              { reasoning: "(b) Appears simultaneous but actually sequential.", marks: 2, markCode: "AO2", part: "b" }],
            finalAnswer: "(a) resource management (b) rapid switching", commonErrors: ["True parallel.", "No OS role."] },
        },
      ],
    },
  ],
};
