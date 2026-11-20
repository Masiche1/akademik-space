module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson131",
    lesson: {
      id: "ciealc-u2-lesson-2-1", code: "2-1",
      title: "CPU Architecture and Instruction Set",
      goal: "I CAN describe the fetch-decode-execute cycle and CPU components.",
      standards: ["Cambridge A Level Computer Science 9618: hardware", "9618: CPU"],
      vocabulary: [
        { term: "CPU", definition: "Central processing unit — executes instructions." },
        { term: "ALU", definition: "Arithmetic Logic Unit — performs calculations." },
        { term: "CU", definition: "Control Unit — coordinates operations." },
        { term: "Registers", definition: "Small fast memory inside CPU." },
        { term: "Fetch-decode-execute", definition: "Cycle: fetch instruction → decode → execute." },
        { term: "Clock speed", definition: "CPU cycles per second — GHz." },
      ],
      concept: {
        id: "ciealc-u2-s1-cpu", title: "CPU architecture",
        skill: "Describe CPU components and the FDE cycle at A Level.",
        sections: [
          { heading: "CPU components", body: "ALU performs arithmetic/logic operations. CU coordinates instruction execution. Registers: PC (program counter), MAR (memory address register), MDR (memory data register), accumulator, status register. Cache stores frequently accessed data." },
          { heading: "Fetch-decode-execute cycle", body: "FETCH: PC sends address via MAR; instruction fetched into MDR. DECODE: CU interprets instruction. EXECUTE: ALU/CU performs operation; result stored; PC increments. Repeats billions of times per second." },
        ],
        keyFormulas: [
          { name: "FDE cycle", statement: "fetch→decode→execute" },
          { name: "PC", statement: "program counter — next instruction address" },
          { name: "Registers", statement: "PC, MAR, MDR, accumulator, status" },
        ],
        workedExample: {
          problem: "Trace FDE cycle for instruction 'ADD 5' stored at address 100.",
          solution: "PC=100→MAR; fetch instruction to MDR; CU decodes 'ADD 5'; ALU adds 5 to accumulator; PC=101; repeat.",
        },
        questions: [
          {
            id: "ciealc-u2-cpu-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does the ALU do?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Performs arithmetic and logic operations" }, { id: "b", text: "Coordinates instructions" }, { id: "c", text: "Stores files" }, { id: "d", text: "Displays output" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "ALU", statement: "Arithmetic/logic unit." }],
              steps: [{ reasoning: "ALU performs calculations and comparisons.", marks: 1, markCode: "M" }],
              finalAnswer: "Arithmetic and logic operations",
            },
          },
          {
            id: "ciealc-u2-cpu-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are the three stages of the fetch-decode-execute cycle?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "FDE cycle", statement: "Fetch→decode→execute." }],
              steps: [
                { reasoning: "Fetch instruction from memory.", marks: 1, markCode: "M" },
                { reasoning: "Decode instruction; execute operation.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Fetch→decode→execute",
            },
          },
          {
            id: "ciealc-u2-cpu-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the program counter (PC) and what does it do?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Program counter", statement: "Next instruction address." }],
              steps: [
                { reasoning: "PC holds address of next instruction.", marks: 1, markCode: "M" },
                { reasoning: "Increments after each instruction.", marks: 1, markCode: "M" },
                { reasoning: "Jumps for loops/branches.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Next instruction address",
            },
          },
          {
            id: "ciealc-u2-cpu-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define CPU, ALU, CU, registers, FDE cycle, clock speed, PC, MAR/MDR. (b) What does ALU do? (c) What does CU do? (d) What is the FDE cycle? (e) What is PC? (f) What is MAR/MDR? (g) What is cache? (h) Trace FDE for 'LOAD 10' at address 50.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "CPU", statement: "Components and FDE cycle." }],
              steps: [
                { reasoning: "(a) All eight definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Arithmetic/logic operations.", marks: 1, markCode: "M" },
                { reasoning: "(c) Coordinates instruction execution.", marks: 1, markCode: "M" },
                { reasoning: "(d) Fetch→decode→execute.", marks: 1, markCode: "M" },
                { reasoning: "(e) Next instruction address.", marks: 1, markCode: "M" },
                { reasoning: "(f) Memory address/data registers.", marks: 1, markCode: "M" },
                { reasoning: "(g) Fast memory for frequent data.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid FDE trace.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "CPU architecture and FDE cycle.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u2-cpu-notes", title: "CPU — notes",
      summary: "ALU=calculations, CU=coordination, registers=fast memory. FDE cycle: fetch→decode→execute.",
      sections: [
        { heading: "Key idea", body: "CPU executes billions of FDE cycles per second." },
        { heading: "Registers", body: "PC tracks next instruction; MAR/MDR handle memory access." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson132",
    lesson: {
      id: "ciealc-u2-lesson-2-2", code: "2-2",
      title: "Memory Hierarchy and Storage",
      goal: "I CAN describe the memory hierarchy and compare storage technologies.",
      standards: ["Cambridge A Level Computer Science 9618: hardware", "9618: memory/storage"],
      vocabulary: [
        { term: "Memory hierarchy", definition: "Levels of memory from fastest/smallest to slowest/largest." },
        { term: "Cache", definition: "Small fast memory inside CPU for frequent data." },
        { term: "RAM", definition: "Random access memory — temporary working memory." },
        { term: "Virtual memory", definition: "Using disk as extra RAM when physical RAM full." },
        { term: "HDD", definition: "Hard disk drive — magnetic storage with moving parts." },
        { term: "SSD", definition: "Solid-state drive — flash memory, no moving parts." },
      ],
      concept: {
        id: "ciealc-u2-s2-mem", title: "Memory hierarchy",
        skill: "Describe memory levels and storage types at A Level.",
        sections: [
          { heading: "Memory hierarchy", body: "Registers (fastest, smallest) → cache (fast, small) → RAM (medium speed, larger) → storage (slowest, largest). CPU accesses registers first, then cache, then RAM, then storage. Faster = smaller = more expensive." },
          { heading: "Storage types", body: "HDD: magnetic platters, moving read/write heads, slower, cheaper, larger capacity. SSD: flash memory, no moving parts, faster, more expensive, less durable. Cloud storage: remote servers, accessible anywhere." },
        ],
        keyFormulas: [
          { name: "Hierarchy", statement: "registers→cache→RAM→storage" },
          { name: "Speed/size trade-off", statement: "faster = smaller = costlier" },
        ],
        workedExample: {
          problem: "Why does adding RAM help a computer that freezes with many apps?",
          solution: "More apps need more active memory. With little RAM, system swaps to slow storage → lag. More RAM = more apps run smoothly.",
        },
        questions: [
          {
            id: "ciealc-u2-mem-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the memory hierarchy?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Levels from fastest/smallest to slowest/largest" }, { id: "b", text: "A type of software" }, { id: "c", text: "A network protocol" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Memory hierarchy", statement: "Speed/size levels." }],
              steps: [{ reasoning: "Hierarchy orders memory by speed and size.", marks: 1, markCode: "M" }],
              finalAnswer: "Fastest/smallest to slowest/largest",
            },
          },
          {
            id: "ciealc-u2-mem-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is virtual memory and when is it used?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Virtual memory", statement: "Disk as extra RAM." }],
              steps: [
                { reasoning: "Virtual memory = using disk space as extra RAM.", marks: 1, markCode: "M" },
                { reasoning: "Used when physical RAM is full.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Disk as extra RAM",
            },
          },
          {
            id: "ciealc-u2-mem-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare HDD and SSD in terms of speed, cost and durability.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Storage types", statement: "HDD vs SSD." }],
              steps: [
                { reasoning: "HDD: slower, cheaper, larger capacity, moving parts.", marks: 1, markCode: "M" },
                { reasoning: "SSD: faster, costlier, smaller capacity, no moving parts.", marks: 1, markCode: "M" },
                { reasoning: "SSD more durable (no mechanical failure).", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Speed/cost/durability comparison",
            },
          },
          {
            id: "ciealc-u2-mem-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define memory hierarchy, cache, RAM, virtual memory, HDD, SSD. (b) What is the hierarchy order? (c) Why is cache faster than RAM? (d) What is virtual memory? (e) When is virtual memory used? (f) Compare HDD vs SSD speed. (g) Compare HDD vs SSD cost. (h) Design a storage strategy for a school server.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Memory/storage", statement: "Hierarchy, types, comparison." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Registers→cache→RAM→storage.", marks: 1, markCode: "M" },
                { reasoning: "(c) Smaller, closer to CPU, faster access.", marks: 1, markCode: "M" },
                { reasoning: "(d) Disk as extra RAM.", marks: 1, markCode: "M" },
                { reasoning: "(e) When physical RAM full.", marks: 1, markCode: "M" },
                { reasoning: "(f) SSD faster (no moving parts).", marks: 1, markCode: "M" },
                { reasoning: "(g) HDD cheaper per GB.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid storage strategy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Memory hierarchy and storage types.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u2-mem-notes", title: "Memory — notes",
      summary: "Hierarchy: registers→cache→RAM→storage. Faster=smaller=costlier. SSD faster than HDD.",
      sections: [
        { heading: "Key idea", body: "CPU accesses fastest memory first — hierarchy optimises speed." },
        { heading: "Virtual memory", body: "Disk as overflow RAM — slower but prevents crashes." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson133",
    lesson: {
      id: "ciealc-u2-lesson-2-3", code: "2-3",
      title: "Input/Output Devices and Interfaces",
      goal: "I CAN classify I/O devices and describe interface types and their characteristics.",
      standards: ["Cambridge A Level Computer Science 9618: hardware", "9618: I/O devices"],
      vocabulary: [
        { term: "Input device", definition: "Sends data to computer." },
        { term: "Output device", definition: "Receives data from computer." },
        { term: "Interface", definition: "Point where devices connect." },
        { term: "Serial", definition: "Data sent one bit at a time." },
        { term: "Parallel", definition: "Data sent multiple bits simultaneously." },
        { term: "Wireless", definition: "Data sent via radio waves/Bluetooth/Wi-Fi." },
      ],
      concept: {
        id: "ciealc-u2-s3-io", title: "I/O devices and interfaces",
        skill: "Classify devices and interfaces at A Level.",
        sections: [
          { heading: "I/O devices", body: "Input: keyboard, mouse, scanner, microphone, sensors, camera. Output: monitor, printer, speakers, actuators. Some devices are both (touchscreen). Sensors detect physical world; actuators act on it." },
          { heading: "Interfaces", body: "Serial: one bit at a time (USB, RS-232) — simpler, longer cables. Parallel: multiple bits simultaneously — faster but shorter cables. Wireless: Bluetooth (short range), Wi-Fi (network), NFC (touch)." },
        ],
        keyFormulas: [
          { name: "Input", statement: "sends data to computer" },
          { name: "Output", statement: "receives data from computer" },
          { name: "Serial/parallel", statement: "one bit vs multiple bits" },
        ],
        workedExample: {
          problem: "Compare USB (serial) vs old parallel port for printer connection.",
          solution: "USB: serial, one bit at a time, simpler, longer cable, ubiquitous. Parallel: multiple bits, faster theoretically but shorter range, obsolete.",
        },
        questions: [
          {
            id: "ciealc-u2-io-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an input device?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Sends data to computer" }, { id: "b", text: "Receives data from computer" }, { id: "c", text: "Stores files" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Input device", statement: "Data to computer." }],
              steps: [{ reasoning: "Input sends data INTO computer.", marks: 1, markCode: "M" }],
              finalAnswer: "Sends data to computer",
            },
          },
          {
            id: "ciealc-u2-io-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between serial and parallel interfaces?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Serial vs parallel", statement: "One bit vs multiple." }],
              steps: [
                { reasoning: "Serial=one bit at a time; parallel=multiple bits.", marks: 1, markCode: "M" },
                { reasoning: "Serial simpler/longer; parallel faster/shorter.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "One bit vs multiple bits",
            },
          },
          {
            id: "ciealc-u2-io-q3", difficulty: "core", totalMarks: 3,
            stem: "Classify: keyboard, monitor, temperature sensor, motor, microphone, printer.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Device classification", statement: "Input/output/sensor/actuator." }],
              steps: [
                { reasoning: "Input: keyboard, mic, temp sensor.", marks: 1, markCode: "M" },
                { reasoning: "Output: monitor, printer; actuator: motor.", marks: 1, markCode: "M" },
                { reasoning: "All six classified.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Input/output/sensor/actuator",
            },
          },
          {
            id: "ciealc-u2-io-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define input device, output device, interface, serial, parallel, wireless. (b) Classify: scanner, speakers, webcam, motor, touchscreen. (c) Why is touchscreen both input and output? (d) What is an interface? (e) Give 3 wireless technologies. (f) Compare serial vs parallel. (g) How do sensors/actuators enable robotics? (h) Design an automatic plant watering system.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "I/O devices", statement: "Classification, interfaces." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Correct classifications.", marks: 1, markCode: "M" },
                { reasoning: "(c) Displays output + accepts touch.", marks: 1, markCode: "M" },
                { reasoning: "(d) Connection point for communication.", marks: 1, markCode: "M" },
                { reasoning: "(e) Bluetooth, Wi-Fi, NFC.", marks: 1, markCode: "M" },
                { reasoning: "(f) One bit vs multiple bits.", marks: 1, markCode: "M" },
                { reasoning: "(g) Sensors detect → computer decides → actuators act.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid watering system design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "I/O devices and interfaces.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u2-io-notes", title: "I/O devices — notes",
      summary: "Input=sends, output=receives. Serial=one bit, parallel=multiple bits. Sensors/actuators connect to physical world.",
      sections: [
        { heading: "Key idea", body: "Interfaces determine how devices connect — serial/parallel/wireless." },
        { heading: "Embedded", body: "Sensors+actuators enable automation and robotics." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson134",
    lesson: {
      id: "ciealc-u2-lesson-2-4", code: "2-4",
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
      concept: {
        id: "ciealc-u2-s4-os", title: "Operating systems",
        skill: "Describe OS functions at A Level.",
        sections: [
          { heading: "OS functions", body: "OS manages hardware resources (CPU, memory, storage, devices), runs programs, handles files, provides user interface (GUI/CLI). Kernel is core component. Drivers let OS talk to specific hardware." },
          { heading: "Software types", body: "System software: OS, utilities, drivers. Application software: word processors, browsers, games. Utility software: antivirus, backup, compression, defragmentation. Each layer builds on the one below." },
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
        questions: [
          {
            id: "ciealc-u2-os-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an operating system?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Software managing hardware and running programs" }, { id: "b", text: "A type of hardware" }, { id: "c", text: "A network cable" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Operating system", statement: "System manager." }],
              steps: [{ reasoning: "OS manages resources and runs programs.", marks: 1, markCode: "M" }],
              finalAnswer: "System management software",
            },
          },
          {
            id: "ciealc-u2-os-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the kernel?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Kernel", statement: "Core OS component." }],
              steps: [
                { reasoning: "Kernel = core OS managing resources.", marks: 1, markCode: "M" },
                { reasoning: "Handles memory, processes, devices.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Core OS component",
            },
          },
          {
            id: "ciealc-u2-os-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a driver and why is it needed? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Driver", statement: "OS-hardware translator." }],
              steps: [
                { reasoning: "Driver lets OS communicate with specific hardware.", marks: 1, markCode: "M" },
                { reasoning: "e.g. printer driver lets OS send print jobs.", marks: 1, markCode: "M" },
                { reasoning: "Without it, hardware won't work properly.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "OS↔hardware translator",
            },
          },
          {
            id: "ciealc-u2-os-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define operating system, kernel, user interface, utility software, application software, driver. (b) Name 3 OS functions. (c) What is GUI vs CLI? (d) Give 3 examples of utility software. (e) Why update drivers? (f) What does antivirus do? (g) What is defragmentation? (h) Design an OS feature wishlist for students.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Software", statement: "OS, utilities, drivers." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Three valid OS functions.", marks: 1, markCode: "M" },
                { reasoning: "(c) GUI=visual; CLI=text commands.", marks: 1, markCode: "M" },
                { reasoning: "(d) Three valid utilities.", marks: 1, markCode: "M" },
                { reasoning: "(e) Fix bugs, add features, security.", marks: 1, markCode: "M" },
                { reasoning: "(f) Detects/removes malware.", marks: 1, markCode: "M" },
                { reasoning: "(g) Organises disk data for faster access.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid OS feature wishlist.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Operating systems and software types.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u2-os-notes", title: "OS — notes",
      summary: "OS manages hardware+programs; kernel=core; drivers translate for hardware; utilities maintain system.",
      sections: [
        { heading: "Key idea", body: "OS is the bridge between users, programs and hardware." },
        { heading: "Utilities", body: "Antivirus, backup, cleanup — keep system healthy." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson135",
    lesson: {
      id: "ciealc-u2-lesson-2-5", code: "2-5",
      title: "Automatic Systems and Embedded Computing",
      goal: "I CAN describe embedded systems and automatic control systems.",
      standards: ["Cambridge A Level Computer Science 9618: automatic systems", "9618: embedded"],
      vocabulary: [
        { term: "Embedded system", definition: "Computer built into a device for specific function." },
        { term: "Sensor", definition: "Device detecting physical properties." },
        { term: "Actuator", definition: "Device performing physical action." },
        { term: "Feedback", definition: "Output returned as input to adjust behaviour." },
        { term: "Closed-loop", definition: "System using feedback to self-correct." },
        { term: "Open-loop", definition: "System without feedback check." },
      ],
      concept: {
        id: "ciealc-u2-s5-auto", title: "Automatic and embedded systems",
        skill: "Describe embedded systems and control loops at A Level.",
        sections: [
          { heading: "Embedded systems", body: "Computers built into devices: car engine management, washing machines, smart thermostats, medical devices. Dedicated hardware+software for specific function — efficient but limited flexibility." },
          { heading: "Control systems", body: "Automatic systems: sensor→processor→actuator. Closed-loop uses feedback to self-correct (thermostat); open-loop doesn't check result (timer irrigation). Feedback enables accuracy." },
        ],
        keyFormulas: [
          { name: "Embedded", statement: "computer in device for specific function" },
          { name: "Closed-loop", statement: "feedback self-corrects" },
          { name: "Open-loop", statement: "no feedback check" },
        ],
        workedExample: {
          problem: "Describe how a smart thermostat works.",
          solution: "Temperature sensor detects → processor compares to setpoint → heater/cooler activates → sensor monitors → adjusts until target reached. Closed-loop feedback.",
        },
        questions: [
          {
            id: "ciealc-u2-au-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an embedded system?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Computer built into a device for specific function" }, { id: "b", text: "A type of software" }, { id: "c", text: "A network protocol" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Embedded system", statement: "Device-specific computer." }],
              steps: [{ reasoning: "Embedded = computer inside device.", marks: 1, markCode: "M" }],
              finalAnswer: "Device-specific computer",
            },
          },
          {
            id: "ciealc-u2-au-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is feedback in a control system?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Feedback", statement: "Output→input loop." }],
              steps: [
                { reasoning: "Feedback = output returned as input.", marks: 1, markCode: "M" },
                { reasoning: "Enables self-correction.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Output fed back as input",
            },
          },
          {
            id: "ciealc-u2-au-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare open-loop and closed-loop control. Give an example of each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Control types", statement: "Feedback vs no feedback." }],
              steps: [
                { reasoning: "Open=no feedback; closed=feedback corrects.", marks: 1, markCode: "M" },
                { reasoning: "e.g. open=timer irrigation; closed=thermostat.", marks: 1, markCode: "M" },
                { reasoning: "Closed-loop more accurate.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Open vs closed loop + examples",
            },
          },
          {
            id: "ciealc-u2-au-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define embedded system, sensor, actuator, feedback, closed-loop, open-loop. (b) Give 3 examples of embedded systems. (c) Describe the control cycle. (d) What is a thermostat's feedback loop? (e) Why is closed-loop more accurate? (f) What is open-loop? (g) Name sensors/actuators in a smart sprinkler. (h) Design an automatic system for school lighting.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Automatic systems", statement: "Embedded, feedback, control." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Three valid embedded examples.", marks: 1, markCode: "M" },
                { reasoning: "(c) Sense→process→act→feedback.", marks: 1, markCode: "M" },
                { reasoning: "(d) Senses temp → adjusts heating.", marks: 1, markCode: "M" },
                { reasoning: "(e) Feedback corrects errors.", marks: 1, markCode: "M" },
                { reasoning: "(f) No feedback check.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid sensor/actuator list.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid lighting system design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Embedded and automatic systems.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u2-au-notes", title: "Embedded systems — notes",
      summary: "Embedded=computer in device; control cycle=sense→process→act; closed-loop=self-corrects.",
      sections: [
        { heading: "Key idea", body: "Embedded systems are everywhere — efficient but task-specific." },
        { heading: "Feedback", body: "Closed-loop=accurate; open-loop=simple but uncorrected." },
      ],
    },
  },
];
