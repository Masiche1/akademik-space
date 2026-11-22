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
            { id: "a", text: "RAM" },
            { id: "b", text: "Cache" },
            { id: "c", text: "ALU" },
            { id: "d", text: "Control Unit" },
          ], correctChoiceId: "c" },
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
        {
          id: "olcs-u3-cpu-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The Control Unit's role in the CPU is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Coordinate and direct operations" },
            { id: "b", text: "Connect to the internet" },
            { id: "c", text: "Store large files" },
            { id: "d", text: "Display images" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Control Unit", statement: "Directs CPU operations." }], steps: [{ reasoning: "CU coordinates components.", working: "\\text{coordinate}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Coordinate operations" },
        },
        {
          id: "olcs-u3-cpu-q6", difficulty: "core", totalMarks: 2,
          stem: "A CPU has a clock speed of 3 GHz. How many cycles does it perform per second?",
          response: { type: "numeric", parts: [{ label: "Cycles", answer: 3000000000 }] },
          markscheme: { principles: [{ kind: "definition", name: "GHz", statement: "1 GHz = $10^9$ cycles per second." }], steps: [
            { reasoning: "$3\\times10^9$ cycles/s.", working: "3\\times10^9", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "3000000000", marks: 1, markCode: "A" },
          ], finalAnswer: "3 000 000 000 cycles/s" },
        },
        {
          id: "olcs-u3-cpu-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Registers inside the CPU are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Tiny, ultra-fast storage locations" },
            { id: "b", text: "Cooling fans" },
            { id: "c", text: "Network cables" },
            { id: "d", text: "Large slow hard drives" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Registers", statement: "Fast internal storage." }], steps: [{ reasoning: "Registers are tiny and fast.", working: "\\text{fast}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Tiny fast storage" },
        },
        {
          id: "olcs-u3-cpu-q8", difficulty: "core", totalMarks: 2,
          stem: "A 4 GHz CPU completes 4 instructions per clock cycle. How many instructions can it execute per second?",
          response: { type: "numeric", parts: [{ label: "Instructions", answer: 16000000000 }] },
          markscheme: { principles: [{ kind: "formula", name: "Throughput", statement: "instructions/s = IPC × clock frequency." }], steps: [
            { reasoning: "$4\\times4\\times10^9=1.6\\times10^{10}$.", working: "1.6\\times10^{10}", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "16000000000", marks: 1, markCode: "A" },
          ], finalAnswer: "16 000 000 000 instructions/s" },
        },
        {
          id: "olcs-u3-cpu-q9", difficulty: "core", totalMarks: 2,
          stem: "Describe what happens during the decode stage of the fetch-decode-execute cycle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Decode", statement: "CU interprets the instruction." }], steps: [
            { reasoning: "Control unit interprets the fetched instruction.", working: "\\text{interpret}", marks: 1, markCode: "M" },
            { reasoning: "Determines what operation is needed.", marks: 1, markCode: "A" },
          ], finalAnswer: "The control unit decodes (interprets) the instruction to work out what operation to perform." },
        },
        {
          id: "olcs-u3-cpu-q10", difficulty: "core", totalMarks: 1,
          stem: "An instruction set is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of memory" },
            { id: "b", text: "A programming language" },
            { id: "c", text: "A cooling system" },
            { id: "d", text: "The list of commands a CPU understands" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Instruction set", statement: "Fixed list of CPU commands." }], steps: [{ reasoning: "CPU understands only its instruction set.", working: "\\text{commands}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** List of commands" },
        },
        {
          id: "olcs-u3-cpu-q11", difficulty: "core", totalMarks: 2,
          stem: "Ideally, a 4-core CPU running one identical task per core completes 4 tasks in the time a single-core CPU completes 1. If the single-core CPU finishes one task in 4 seconds, how many tasks can the 4-core CPU finish in 4 seconds?",
          response: { type: "numeric", parts: [{ label: "Tasks", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Multi-core", statement: "Cores work in parallel." }], steps: [
            { reasoning: "4 cores × 1 task each = 4 tasks.", working: "4", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "4", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u3-cpu-q12", difficulty: "core", totalMarks: 2,
          stem: "Cache memory improves CPU performance because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Produces heat" },
            { id: "b", text: "Connects to the internet" },
            { id: "c", text: "Holds frequently used data for faster access" },
            { id: "d", text: "Stores files permanently" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Cache", statement: "Fast memory for frequent data." }], steps: [{ reasoning: "Cache avoids slow RAM access.", working: "\\text{fast access}", marks: 1, markCode: "M" }, { reasoning: "Reduces waiting time.", marks: 1, markCode: "A" }], finalAnswer: "**(a)** Fast access to frequent data" },
        },
        {
          id: "olcs-u3-cpu-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe in detail what happens during the fetch stage of the fetch-decode-execute cycle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Fetch", statement: "Instruction copied from memory to register." }], steps: [
            { reasoning: "Program counter supplies the next instruction address.", working: "\\text{PC}", marks: 1, markCode: "M" },
            { reasoning: "Instruction copied from main memory.", working: "\\text{memory}", marks: 1, markCode: "M" },
            { reasoning: "Placed in the instruction register.", working: "\\text{IR}", marks: 1, markCode: "M" },
            { reasoning: "Program counter updated for next fetch.", marks: 1, markCode: "A" },
          ], finalAnswer: "The program counter gives the address; the instruction is fetched from memory into the instruction register and the counter is updated." },
        },
        {
          id: "olcs-u3-cpu-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A microprocessor is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of printer" },
            { id: "b", text: "A CPU built on a single chip" },
            { id: "c", text: "A network protocol" },
            { id: "d", text: "A storage device" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Microprocessor", statement: "CPU on one chip." }], steps: [{ reasoning: "Microprocessor = single-chip CPU.", working: "\\text{one chip}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Single-chip CPU" },
        },
        {
          id: "olcs-u3-cpu-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A CPU running at 2.5 GHz executes one instruction per cycle. How many instructions does it execute in 0.001 seconds?",
          response: { type: "numeric", parts: [{ label: "Instructions", answer: 2500000 }] },
          markscheme: { principles: [{ kind: "formula", name: "Throughput", statement: "instructions = frequency × time." }], steps: [
            { reasoning: "$2.5\\times10^9\\times0.001=2.5\\times10^6$.", working: "2.5\\times10^6", marks: 1, markCode: "M" },
            { reasoning: "Convert to integer.", working: "2500000", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "2500000", marks: 1, markCode: "A" },
          ], finalAnswer: "2 500 000" },
        },
        {
          id: "olcs-u3-cpu-q16", difficulty: "foundation", totalMarks: 1,
          stem: "The ALU performs…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only storage" },
            { id: "b", text: "Arithmetic and logic operations" },
            { id: "c", text: "Only display" },
            { id: "d", text: "Only networking" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "ALU", statement: "Arithmetic + logic." }], steps: [{ reasoning: "ALU does calculations and logic.", working: "\\text{ALU}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Arithmetic and logic" },
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
            { id: "a", text: "GB" },
            { id: "b", text: "GHz" },
            { id: "c", text: "MB" },
            { id: "d", text: "Hz/s" },
          ], correctChoiceId: "b" },
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
        {
          id: "olcs-u3-perf-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Clock speed is measured in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gigahertz (GHz)" },
            { id: "b", text: "Watts only" },
            { id: "c", text: "Gigabytes (GB)" },
            { id: "d", text: "Megabits (Mb)" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Clock speed", statement: "GHz = billions of cycles/sec." }], steps: [{ reasoning: "GHz measures cycles per second.", working: "\\text{GHz}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** GHz" },
        },
        {
          id: "olcs-u3-perf-q6", difficulty: "core", totalMarks: 2,
          stem: "A task requires 8 billion CPU cycles. How long does it take on a 4 GHz processor?",
          response: { type: "numeric", parts: [{ label: "Seconds", answer: 2 }] },
          markscheme: { principles: [{ kind: "formula", name: "Time", statement: "$t=\\text{cycles}/\\text{frequency}$." }], steps: [
            { reasoning: "$8\\times10^9/4\\times10^9=2$ s.", working: "2", marks: 1, markCode: "M" },
            { reasoning: "Correct time.", working: "2", marks: 1, markCode: "A" },
          ], finalAnswer: "2 s" },
        },
        {
          id: "olcs-u3-perf-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A larger CPU cache improves performance mainly by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reducing slow accesses to main memory" },
            { id: "b", text: "Increasing file storage" },
            { id: "c", text: "Adding more cores" },
            { id: "d", text: "Cooling the CPU" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Cache", statement: "Fast memory avoids RAM waits." }], steps: [{ reasoning: "Fewer slow memory accesses.", working: "\\text{faster}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Fewer slow RAM accesses" },
        },
        {
          id: "olcs-u3-perf-q8", difficulty: "core", totalMarks: 2,
          stem: "Two CPUs run the same program. CPU A has a 3 GHz clock, CPU B has 1.5 GHz. Assuming identical work per cycle, what is the speed ratio A:B?",
          response: { type: "numeric", parts: [{ label: "Ratio", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Clock ratio", statement: "Speed $\\propto$ clock frequency." }], steps: [
            { reasoning: "$3/1.5=2$.", working: "2", marks: 1, markCode: "M" },
            { reasoning: "Ratio 2:1.", working: "2", marks: 1, markCode: "A" },
          ], finalAnswer: "2:1" },
        },
        {
          id: "olcs-u3-perf-q9", difficulty: "core", totalMarks: 2,
          stem: "Why does a higher clock speed increase heat and power consumption?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Power", statement: "More cycles/sec → more switching → more power." }], steps: [
            { reasoning: "Transistors switch more often per second.", working: "\\text{more switching}", marks: 1, markCode: "M" },
            { reasoning: "More energy used → more heat.", marks: 1, markCode: "A" },
          ], finalAnswer: "Higher clock = more switching per second = more power drawn and more heat produced." },
        },
        {
          id: "olcs-u3-perf-q10", difficulty: "core", totalMarks: 1,
          stem: "Firmware is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A network cable" },
            { id: "b", text: "Software permanently stored on a chip" },
            { id: "c", text: "A programming language" },
            { id: "d", text: "A type of monitor" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Firmware", statement: "Permanent low-level software." }], steps: [{ reasoning: "Firmware lives in ROM/flash.", working: "\\text{ROM}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Permanent chip software" },
        },
        {
          id: "olcs-u3-perf-q11", difficulty: "core", totalMarks: 2,
          stem: "A RAM access takes 100 ns and a cache access takes 1 ns. How much time is saved per cache hit?",
          response: { type: "numeric", parts: [{ label: "ns", answer: 99 }] },
          markscheme: { principles: [{ kind: "formula", name: "Saving", statement: "saving = RAM time − cache time." }], steps: [
            { reasoning: "$100-1=99$ ns.", working: "99", marks: 1, markCode: "M" },
            { reasoning: "Correct saving.", working: "99", marks: 1, markCode: "A" },
          ], finalAnswer: "99 ns" },
        },
        {
          id: "olcs-u3-perf-q12", difficulty: "core", totalMarks: 2,
          stem: "More CPU cores mainly improve…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Multitasking and parallel processing" },
            { id: "b", text: "Storage capacity" },
            { id: "c", text: "Battery life only" },
            { id: "d", text: "Screen size" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Cores", statement: "Parallel instruction execution." }], steps: [{ reasoning: "Cores run tasks simultaneously.", working: "\\text{parallel}", marks: 1, markCode: "M" }, { reasoning: "Better multitasking.", marks: 1, markCode: "A" }], finalAnswer: "**(a)** Multitasking/parallel" },
        },
        {
          id: "olcs-u3-perf-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Distinguish between system software, application software and firmware.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Software types", statement: "OS manages hardware; apps do user tasks; firmware is permanent control." }], steps: [
            { reasoning: "System software (OS) manages hardware and runs apps.", working: "\\text{OS}", marks: 1, markCode: "M" },
            { reasoning: "Application software performs user tasks.", working: "\\text{apps}", marks: 1, markCode: "M" },
            { reasoning: "Firmware is permanently stored low-level control software.", working: "\\text{firmware}", marks: 1, markCode: "M" },
            { reasoning: "Clear three-way distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "OS manages hardware/apps; applications do user tasks; firmware is permanent chip-level control software." },
        },
        {
          id: "olcs-u3-perf-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A more powerful instruction set improves performance by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increasing file size" },
            { id: "b", text: "Using less electricity only" },
            { id: "c", text: "Adding more RAM" },
            { id: "d", text: "Doing more work per clock cycle" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Instruction set", statement: "Richer instructions = more per cycle." }], steps: [{ reasoning: "Better instructions do more per cycle.", working: "\\text{per cycle}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** More work per cycle" },
        },
        {
          id: "olcs-u3-perf-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A program needs 12 billion CPU cycles. How long does it take on a 3 GHz processor?",
          response: { type: "numeric", parts: [{ label: "Seconds", answer: 4 }] },
          markscheme: { principles: [{ kind: "formula", name: "Time", statement: "$t=\\text{cycles}/\\text{frequency}$." }], steps: [
            { reasoning: "$12\\times10^9/3\\times10^9=4$ s.", working: "4", marks: 1, markCode: "M" },
            { reasoning: "Correct calculation.", working: "4", marks: 1, markCode: "M" },
            { reasoning: "Units in seconds.", working: "s", marks: 1, markCode: "A" },
          ], finalAnswer: "4 s" },
        },
        {
          id: "olcs-u3-perf-q16", difficulty: "foundation", totalMarks: 1,
          stem: "An embedded system is a computer that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only runs games" },
            { id: "b", text: "Is built into a device for one dedicated task" },
            { id: "c", text: "Has no processor" },
            { id: "d", text: "Requires a full OS always" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Embedded", statement: "Dedicated-task computer." }], steps: [{ reasoning: "Embedded = one fixed task.", working: "\\text{dedicated}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Dedicated task device" },
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
