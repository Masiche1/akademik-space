import type { Lesson } from "../../../types.ts";

export const lesson201: Lesson = {
  id: "ecs10-u1-lesson-1-1",
  code: "1-1",
  title: "Data Representation",
  goal: "I CAN explain binary, denary and how computers represent data.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Computer Systems"],
  vocabulary: [
    { term: "Binary", definition: "Base-2 number system using only 0 and 1." },
    { term: "Bit", definition: "Binary digit — single 0 or 1." },
    { term: "Byte", definition: "Group of 8 bits." },
    { term: "Denary", definition: "Base-10 number system (0-9)." },
    {
      term: "ASCII",
      definition: "Character encoding mapping characters to binary.",
    },
  ],
  concepts: [
    {
      id: "ecs10-u1-binary",
      title: "Binary and Denary",
      skill: "Convert between binary and denary; explain bit/byte.",
      lesson: {
        sections: [
          {
            heading: "Number systems",
            body: "**Denary**: base 10 — digits 0-9, place values powers of 10. **Binary**: base 2 — digits 0-1, place values powers of 2 (1,2,4,8,16...).\n\n**Conversion binary→denary**: add place values of 1-bits. 1011 = 8+2+1 = 11. **Denary→binary**: repeatedly divide by 2, read remainders bottom-up. 13 → 1101.",
          },
          {
            heading: "Bits, bytes and data",
            body: "**Bit** = single binary digit. **Byte** = 8 bits = 256 values. **Kilobyte** = 1024 bytes (2^10). **Data types**: text (ASCII/Unicode), images (pixels + colour depth), sound (samples + sample rate).",
          },
        ],
        keyFormulas: [
          {
            name: "Binary to denary",
            statement: "Sum place values (1,2,4,8...) where bit = 1.",
          },
          {
            name: "Image size",
            statement: "Width × height × colour depth (bits).",
          },
        ],
        workedExample: {
          problem: "Convert 01011011 to denary.",
          solution: "64+0+16+8+0+2+1 = 91.",
        },
      },
      questions: [
        {
          id: "ecs10-u1-binary-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many bits are in a byte?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "8" },
              { id: "c", text: "10" },
              { id: "d", text: "16" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Byte", statement: "8 bits." },
            ],
            steps: [{ reasoning: "Byte = 8 bits.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(b)** 8",
            commonErrors: ["Confused with nibble."],
          },
        },
        {
          id: "ecs10-u1-binary-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert binary 1101 to denary.",
          response: {
            type: "numeric",
            parts: [{ label: "answer", answer: 13 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Binary conversion",
                statement: "8+4+0+1 = 13.",
              },
            ],
            steps: [{ reasoning: "8+4+1 = 13.", marks: 3, markCode: "M" }],
            finalAnswer: "13",
            commonErrors: ["Wrong place values."],
          },
        },
        {
          id: "ecs10-u1-binary-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 200×100 pixel image uses 8-bit colour depth. Calculate file size in bytes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Image size",
                statement: "w×h×depth ÷ 8 = bytes.",
              },
            ],
            steps: [
              {
                reasoning: "Total bits = 200×100×8 = 160,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bytes = 160,000 ÷ 8 = 20,000 bytes.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Could express as ~19.5 KB.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20,000 bytes (~19.5 KB)",
            commonErrors: ["Forgot ÷8.", "Wrong formula."],
          },
        },
        {
          id: "ecs10-u1-binary-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how a computer stores text and an image digitally.",
          parts: [
            { label: "a", prompt: "Explain text storage.", marks: 4 },
            { label: "b", prompt: "Explain image storage.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digital storage",
                statement: "Everything → binary.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Characters mapped to binary codes (ASCII/Unicode).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Each character = fixed binary pattern.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Image = grid of pixels, each with colour value.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Colour depth determines bits per pixel.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) char→binary codes (b) pixels→colour values",
            commonErrors: ["Vague answers.", "No binary link."],
          },
        },
      ],
    },
    {
      id: "ecs10-u1-hardware",
      title: "Hardware Components",
      skill: "Identify CPU, memory, storage and input/output devices.",
      lesson: {
        sections: [
          {
            heading: "Inside the computer",
            body: "**CPU**: executes instructions — ALU (calculations), CU (control), registers. **Clock speed** GHz — cycles/sec. **Cache** fast memory. **RAM**: volatile working memory — lost on power off. **ROM**: non-volatile — BIOS/firmware.\n\n**Storage**: HDD (magnetic, cheap, slow), SSD (flash, fast, expensive), optical (CD/DVD), removable (USB). **Input**: keyboard, mouse, scanner, microphone. **Output**: monitor, printer, speakers.",
          },
          {
            heading: "Performance factors",
            body: "CPU speed, RAM amount, storage type/speed all affect performance. **Von Neumann architecture**: stored-program — instructions and data share same memory. **Fetch-decode-execute cycle**: CPU processes instructions.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Computer slow — which upgrade helps most?",
          solution: "SSD replaces HDD — biggest speed gain typically.",
        },
      },
      questions: [
        {
          id: "ecs10-u1-hardware-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does RAM store?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing" },
              { id: "b", text: "The operating system only" },
              { id: "c", text: "Permanent files" },
              { id: "d", text: "Data currently in use — volatile" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "RAM",
                statement: "Volatile working memory.",
              },
            ],
            steps: [
              {
                reasoning: "RAM = current data, lost on shutdown.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Current data, volatile",
            commonErrors: ["Confused with storage."],
          },
        },
        {
          id: "ecs10-u1-hardware-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between RAM and ROM.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "RAM vs ROM",
                statement: "Volatile vs permanent.",
              },
            ],
            steps: [
              {
                reasoning: "RAM is volatile — loses data on power off.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "ROM is non-volatile — keeps data permanently.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "RAM holds working data; ROM holds firmware/BIOS.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Volatility + purpose differ.",
            commonErrors: ["Same thing.", "Only one difference."],
          },
        },
        {
          id: "ecs10-u1-hardware-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the fetch-decode-execute cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FDE cycle",
                statement: "Fetch instruction → decode → execute.",
              },
            ],
            steps: [
              {
                reasoning: "Fetch: instruction retrieved from memory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Decode: CU interprets instruction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Execute: ALU/CU carry out operation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Repeats millions of times per second.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Fetch→decode→execute, repeated billions of times.",
            commonErrors: ["Wrong order.", "No cycle."],
          },
        },
        {
          id: "ecs10-u1-hardware-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student wants to speed up an old laptop.",
          parts: [
            { label: "a", prompt: "Identify two hardware upgrades.", marks: 4 },
            { label: "b", prompt: "Explain why each helps.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Upgrades",
                statement: "RAM, SSD, CPU.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Replace HDD with SSD.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Increase RAM capacity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) SSD = much faster read/write → quicker boot/apps.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) More RAM = more programs run simultaneously.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) SSD+RAM (b) speed+multitasking",
            commonErrors: ["Vague upgrades.", "No reasoning."],
          },
        },
      ],
    },
    {
      id: "ecs10-u1-software",
      title: "Software and Operating Systems",
      skill: "Distinguish system/application software and OS functions.",
      lesson: {
        sections: [
          {
            heading: "Types of software",
            body: "**System software**: OS (Windows, Linux, macOS), drivers, utilities — manages hardware. **Application software**: word processors, browsers, games — user tasks. **Firmware**: embedded software (BIOS, router OS).",
          },
          {
            heading: "OS functions",
            body: "**Memory management**: allocates RAM to programs. **File management**: organise storage. **User interface**: GUI/CLI. **Security**: passwords, permissions, firewalls. **Device management**: drivers, peripheral control. **Multitasking**: runs programs concurrently.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which software manages hardware?",
          solution: "Operating system — system software.",
        },
      },
      questions: [
        {
          id: "ecs10-u1-software-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the role of an operating system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Manage hardware and software resources" },
              { id: "b", text: "Browse the web" },
              { id: "c", text: "Print documents" },
              { id: "d", text: "Write documents" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "OS",
                statement: "Manages hardware/software.",
              },
            ],
            steps: [
              {
                reasoning: "OS = resource manager.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Manage resources",
            commonErrors: ["Application confused."],
          },
        },
        {
          id: "ecs10-u1-software-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two functions of an operating system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OS functions",
                statement: "Memory, files, security, UI.",
              },
            ],
            steps: [
              {
                reasoning: "Memory management — allocate RAM.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "File management — organise storage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Security/user interface.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Memory, files, security, UI.",
            commonErrors: ["Only one.", "Application tasks."],
          },
        },
        {
          id: "ecs10-u1-software-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between system and application software.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "System vs application",
                statement: "Manages vs user tasks.",
              },
            ],
            steps: [
              {
                reasoning: "System software manages hardware/OS resources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Application software performs user tasks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "System: OS, drivers, utilities. Application: Word, browsers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Applications rely on OS to run.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "System manages; applications do user tasks.",
            commonErrors: ["Same thing.", "No examples."],
          },
        },
        {
          id: "ecs10-u1-software-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school is choosing an operating system for its computers.",
          parts: [
            {
              label: "a",
              prompt: "Give two OS features the school should consider.",
              marks: 4,
            },
            { label: "b", prompt: "Explain why each matters.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "OS choice",
                statement: "Security, compatibility, cost.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Security features — protect student data.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Software compatibility — runs needed programs.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Security prevents unauthorised access to records.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Compatibility ensures teaching software works.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) security+compatibility (b) data protection+software runs",
            commonErrors: ["Vague features.", "No reasoning."],
          },
        },
      ],
    },
  ],
};
