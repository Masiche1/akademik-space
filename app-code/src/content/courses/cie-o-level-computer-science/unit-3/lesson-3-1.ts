import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "olcs-u3-lesson-3-1",
  code: "3-1",
  title: "Computer Architecture and the CPU",
  goal: "I CAN describe the CPU's components, the fetch-decode-execute cycle, and factors affecting processor performance.",
  standards: ["2210 3.1.1", "2210 3.1.2", "2210 3.1.3"],
  vocabulary: [
    { term: "CPU", definition: "Central Processing Unit — the 'brain' that executes program instructions." },
    { term: "Fetch-decode-execute cycle", definition: "The repeating loop: fetch instruction from memory, decode it, execute it." },
    { term: "ALU", definition: "Arithmetic Logic Unit — performs calculations and logical operations." },
    { term: "Control Unit", definition: "Directs the operation of the CPU and coordinates other components." },
    { term: "Cache", definition: "Small fast memory inside/near the CPU holding frequently used data and instructions." },
    { term: "Clock speed", definition: "How many cycles per second the CPU runs, measured in GHz." },
    { term: "Embedded system", definition: "A computer built into a device to perform one dedicated task." },
  ],
  concepts: [
    {
      id: "olcs-u3-cpu",
      title: "The CPU and fetch-decode-execute",
      skill: "Describe CPU components and the instruction cycle.",
      lesson: {
        sections: [
          { heading: "CPU components", body: "- **Arithmetic Logic Unit (ALU)**: performs arithmetic (+, −, ×, ÷) and logic (AND, OR, NOT) operations.\n- **Control Unit (CU)**: fetches and decodes instructions, sends control signals to coordinate the ALU, registers and memory.\n- **Registers**: tiny, ultra-fast storage inside the CPU (accumulator, program counter, instruction register)." },
          { heading: "Fetch-decode-execute", body: "Every instruction runs the same three-step cycle:\n\n1. **Fetch**: the program counter gives the address of the next instruction; it is copied from main memory into the instruction register.\n2. **Decode**: the control unit interprets what the instruction does.\n3. **Execute**: the ALU or other components carry out the instruction; results stored back.\n\nThis repeats millions of times per second." },
          { heading: "Microprocessors and instruction sets", body: "A **microprocessor** is a CPU on a single chip. The **instruction set** is the fixed list of commands the CPU understands — different processors have different sets. **Cores**: modern CPUs have multiple cores, each executing instructions in parallel for multitasking." },
        ],
        keyFormulas: [
          { name: "Cycle", statement: "Fetch → Decode → Execute (repeat)" },
        ],
        workedExample: {
          problem: "Describe what happens during each stage when a CPU executes an 'ADD' instruction.",
          solution: "Fetch: instruction fetched from memory. Decode: CU identifies it as addition. Execute: ALU adds the values and stores the result.",
        },
      },
      questions: [
        {
          id: "olcs-u3-cpu-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which CPU component performs arithmetic and logic operations?",
          response: { type: "mcq", choices: [
            { id: "a", text: "ALU" }, { id: "b", text: "Control Unit" }, { id: "c", text: "Cache" }, { id: "d", text: "RAM" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "ALU", statement: "Arithmetic and logic." }], steps: [{ reasoning: "ALU does calculations.", working: "\\text{ALU}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** ALU" },
        },
        {
          id: "olcs-u3-cpu-q2", difficulty: "core", totalMarks: 2,
          stem: "List the three stages of the fetch-decode-execute cycle in order.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "FDE cycle", statement: "Fetch, decode, execute." }], steps: [
            { reasoning: "Correct order.", working: "\\text{fetch-decode-execute}", marks: 1, markCode: "M" },
            { reasoning: "All three stages named.", marks: 1, markCode: "A" },
          ], finalAnswer: "Fetch, decode, execute" },
        },
        {
          id: "olcs-u3-cpu-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a multi-core CPU improves performance over a single-core CPU.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Multi-core", statement: "Parallel instruction execution." }], steps: [
            { reasoning: "Each core executes instructions independently.", working: "\\text{parallel}", marks: 1, markCode: "M" },
            { reasoning: "Multiple tasks run simultaneously.", working: "\\text{simultaneous}", marks: 1, markCode: "M" },
            { reasoning: "Better for multitasking and multi-threaded programs.", marks: 1, markCode: "M" },
            { reasoning: "Higher throughput.", marks: 1, markCode: "A" },
          ], finalAnswer: "Cores execute instructions in parallel, improving multitasking and throughput." },
        },
        {
          id: "olcs-u3-cpu-q4", difficulty: "challenge", totalMarks: 9,
          stem: "CPU architecture review.",
          parts: [
            { label: "a", prompt: "State the function of the ALU.", marks: 2 },
            { label: "b", prompt: "State the function of the Control Unit.", marks: 2 },
            { label: "c", prompt: "Describe the fetch stage of the cycle.", marks: 2 },
            { label: "d", prompt: "Explain two factors that affect CPU performance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Performance factors", statement: "Clock speed, cores, cache." },
          ], steps: [
            { part: "a", reasoning: "Arithmetic and logic operations.", working: "\\text{calc+logic}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct function.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Coordinates/decode/execute instructions.", working: "\\text{coordinate}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct function.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Instruction copied from memory to register.", working: "\\text{memory→register}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct description.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Clock speed: more cycles/sec.", working: "\\text{GHz}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "More cores: parallel execution.", working: "\\text{cores}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Cache: faster access to frequent data.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) arithmetic/logic (b) coordinate (c) fetch from memory (d) clock speed, cores, cache" },
        },
      ],
    },
    {
      id: "olcs-u3-performance",
      title: "Performance and embedded systems",
      skill: "Explain how clock speed, cores, cache and instruction sets affect performance, and describe embedded systems.",
      lesson: {
        sections: [
          { heading: "Performance factors", body: "- **Clock speed**: GHz — cycles per second; higher = faster instruction processing (but more heat/power).\n- **Cores**: parallel processing for multitasking.\n- **Cache**: small ultra-fast memory holding frequently used data; bigger/faster cache = fewer slow RAM accesses.\n- **Instruction set**: more powerful instructions can do more per cycle." },
          { heading: "Embedded systems", body: "A computer built into a device for a dedicated task: washing machines, traffic lights, medical devices, car ECUs. They use a microprocessor + sensors + actuators, often with firmware (software burned into ROM) rather than a full OS." },
          { heading: "Firmware vs software", body: "**Firmware** is software permanently stored on a chip (BIOS, device control). **System software** (OS) manages hardware and runs applications. **Application software** does user tasks." },
        ],
        keyFormulas: [
          { name: "Clock speed", statement: "GHz = billions of cycles per second" },
        ],
        workedExample: {
          problem: "Why does a larger cache improve CPU performance?",
          solution: "Frequently used data is fetched from fast cache instead of slower main memory, reducing wait time.",
        },
      },
      questions: [
        {
          id: "olcs-u3-perf-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Clock speed is measured in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "GHz" }, { id: "b", text: "GB" }, { id: "c", text: "MB" }, { id: "d", text: "Hz/s" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Clock speed", statement: "Cycles per second, GHz." }], steps: [{ reasoning: "GHz = cycles/sec.", working: "\\text{GHz}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** GHz" },
        },
        {
          id: "olcs-u3-perf-q2", difficulty: "core", totalMarks: 2,
          stem: "State one example of an embedded system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Embedded", statement: "Dedicated computer in a device." }], steps: [
            { reasoning: "Valid example.", working: "\\text{traffic light/medical/ECU}", marks: 1, markCode: "M" },
            { reasoning: "Correct category.", marks: 1, markCode: "A" },
          ], finalAnswer: "Traffic light / washing machine / medical device / car engine control." },
        },
        {
          id: "olcs-u3-perf-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between firmware and an operating system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Firmware", statement: "Permanent chip software; OS is general-purpose." }], steps: [
            { reasoning: "Firmware: burned into ROM/flash, fixed task.", working: "\\text{ROM, fixed}", marks: 1, markCode: "M" },
            { reasoning: "OS: loaded into RAM, manages hardware/apps.", working: "\\text{OS, general}", marks: 1, markCode: "M" },
            { reasoning: "Firmware often runs without an OS (embedded).", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Firmware is permanent low-level control software; an OS is general-purpose system software managing hardware and apps." },
        },
        {
          id: "olcs-u3-perf-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Performance and embedded systems review.",
          parts: [
            { label: "a", prompt: "State two factors affecting CPU performance.", marks: 2 },
            { label: "b", prompt: "Define an embedded system with an example.", marks: 2 },
            { label: "c", prompt: "Distinguish firmware from application software.", marks: 2 },
            { label: "d", prompt: "Explain why embedded systems often use firmware rather than a full OS.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Embedded design", statement: "Dedicated task → minimal software." },
          ], steps: [
            { part: "a", reasoning: "Clock speed / cores / cache.", working: "\\text{GHz/cores/cache}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Second factor.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Computer dedicated to one task in a device.", working: "\\text{dedicated}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Example: traffic light.", working: "\\text{traffic light}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Firmware: permanent chip-level control.", working: "\\text{firmware}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Application: user-task programs.", working: "\\text{app}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Embedded = one fixed task → no need for general OS.", working: "\\text{fixed task}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Firmware is smaller, faster, more reliable.", working: "\\text{efficient}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Conclusion.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) clock/cores (b) dedicated device (c) firmware vs app (d) fixed task needs minimal firmware" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u3-3-1-notes", title: "CPU and architecture — notes", summary: "ALU/CU, fetch-decode-execute, cores, cache, clock, embedded systems.",
      sections: [
        { heading: "Cycle", body: "Fetch (memory→register) → Decode (CU interprets) → Execute (ALU acts). Repeats billions of times/sec." },
        { heading: "Performance", body: "Clock speed (GHz), core count, cache size/speed, instruction set." },
      ] },
  ],
};
