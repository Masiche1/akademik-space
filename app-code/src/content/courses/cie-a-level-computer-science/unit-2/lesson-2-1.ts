import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "ciealc-u2-lesson-2-1",
  code: "2-1",
  title: "CPU Architecture and Instruction Set",
  goal: "I CAN describe the fetch-decode-execute cycle and CPU components.",
  standards: ["Cambridge A Level Computer Science 9618: hardware", "9618: CPU"],

  vocabulary: [
    {
      term: "CPU",
      definition: "Central processing unit — executes instructions.",
    },
    {
      term: "ALU",
      definition: "Arithmetic Logic Unit — performs calculations.",
    },
    { term: "CU", definition: "Control Unit — coordinates operations." },
    { term: "Registers", definition: "Small fast memory inside CPU." },
    {
      term: "Fetch-decode-execute",
      definition: "Cycle: fetch instruction → decode → execute.",
    },
    { term: "Clock speed", definition: "CPU cycles per second — GHz." },
  ],
  concepts: [
    {
      id: "ciealc-u2-s1-cpu",
      title: "CPU architecture",
      skill: "Describe CPU components and the FDE cycle at A Level.",
      lesson: {
        sections: [
          {
            heading: "CPU components",
            body: "ALU performs arithmetic/logic operations. CU coordinates instruction execution. Registers: PC (program counter), MAR (memory address register), MDR (memory data register), accumulator, status register. Cache stores frequently accessed data.",
          },
          {
            heading: "Fetch-decode-execute cycle",
            body: "FETCH: PC sends address via MAR; instruction fetched into MDR. DECODE: CU interprets instruction. EXECUTE: ALU/CU performs operation; result stored; PC increments. Repeats billions of times per second.",
          },
        ],
        keyFormulas: [
          { name: "FDE cycle", statement: "fetch→decode→execute" },
          {
            name: "PC",
            statement: "program counter — next instruction address",
          },
          { name: "Registers", statement: "PC, MAR, MDR, accumulator, status" },
        ],
        workedExample: {
          problem:
            "Trace FDE cycle for instruction 'ADD 5' stored at address 100.",
          solution:
            "PC=100→MAR; fetch instruction to MDR; CU decodes 'ADD 5'; ALU adds 5 to accumulator; PC=101; repeat.",
        },
      },
      questions: [
        {
          id: "ciealc-u2-cpu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the ALU do?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Displays output",
              },
              {
                id: "b",
                text: "Coordinates instructions",
              },
              {
                id: "c",
                text: "Performs arithmetic and logic operations",
              },
              {
                id: "d",
                text: "Stores files",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ALU",
                statement: "Arithmetic/logic unit.",
              },
            ],
            steps: [
              {
                reasoning: "ALU performs calculations and comparisons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Arithmetic and logic operations",
          },
        },
        {
          id: "ciealc-u2-cpu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the three stages of the fetch-decode-execute cycle?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FDE cycle",
                statement: "Fetch→decode→execute.",
              },
            ],
            steps: [
              {
                reasoning: "Fetch instruction from memory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Decode instruction; execute operation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Fetch→decode→execute",
          },
        },
        {
          id: "ciealc-u2-cpu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the program counter (PC) and what does it do?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Program counter",
                statement: "Next instruction address.",
              },
            ],
            steps: [
              {
                reasoning: "PC holds address of next instruction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increments after each instruction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Jumps for loops/branches.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Next instruction address",
          },
        },
        {
          id: "ciealc-u2-cpu-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define CPU, ALU, CU, registers, FDE cycle, clock speed, PC, MAR/MDR. (b) What does ALU do? (c) What does CU do? (d) What is the FDE cycle? (e) What is PC? (f) What is MAR/MDR? (g) What is cache? (h) Trace FDE for 'LOAD 10' at address 50.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "CPU",
                statement: "Components and FDE cycle.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All eight definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Arithmetic/logic operations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Coordinates instruction execution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Fetch→decode→execute.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Next instruction address.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Memory address/data registers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Fast memory for frequent data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid FDE trace.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CPU architecture and FDE cycle.",
          },
        },
        {
          id: "ciealc-u2-cpu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main function of the Control Unit (CU)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stores the operating system" },
              { id: "b", text: "It performs arithmetic calculations" },
              { id: "c", text: "It displays images on screen" },
              {
                id: "d",
                text: "It coordinates and controls the execution of instructions",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Control Unit",
                statement: "Coordinates instruction execution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The CU directs the ALU, registers and memory during each cycle.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Coordinates instruction execution",
          },
        },
        {
          id: "ciealc-u2-cpu-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A CPU has a clock speed of 3 GHz. How many clock cycles does it perform per second? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3000000000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clock speed",
                statement: "1 GHz = 1 billion cycles per second.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "3 GHz = 3 × 10^9 = 3,000,000,000 cycles per second.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3000000000",
          },
        },
        {
          id: "ciealc-u2-cpu-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which CPU register holds the memory address of the next instruction to be executed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Program Counter (PC)" },
              { id: "b", text: "Status register" },
              { id: "c", text: "Memory Data Register (MDR)" },
              { id: "d", text: "Accumulator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Program Counter",
                statement: "Holds the address of the next instruction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The PC stores the address of the next instruction to fetch.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Program Counter (PC)",
          },
        },
        {
          id: "ciealc-u2-cpu-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 4-byte instruction is stored at memory address 100 and the Program Counter currently holds 100. After this instruction is executed, what value does the Program Counter hold? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 104 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "PC increment",
                statement: "PC advances by the instruction length.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "100 + 4 = 104.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "104",
          },
        },
        {
          id: "ciealc-u2-cpu-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the roles of the Memory Address Register (MAR) and the Memory Data Register (MDR) during the fetch stage.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MAR and MDR",
                statement: "Address and data registers for memory access.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The PC value is copied to the MAR to specify which memory address to access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The instruction fetched from that address is placed in the MDR for decoding.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "MAR holds the address; MDR holds the fetched data",
          },
        },
        {
          id: "ciealc-u2-cpu-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the accumulator register typically store during processing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The operating system kernel" },
              {
                id: "b",
                text: "Intermediate results of arithmetic and logic operations",
              },
              { id: "c", text: "The address of the next instruction" },
              { id: "d", text: "Permanent file backups" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accumulator",
                statement: "Holds intermediate calculation results.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The accumulator holds the result of the most recent ALU operation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Intermediate results",
          },
        },
        {
          id: "ciealc-u2-cpu-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A CPU runs at 2 GHz. How many clock cycles does it complete in 5 seconds? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10000000000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clock speed",
                statement: "Cycles = GHz × 10^9 × seconds.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "2 × 10^9 × 5 = 10,000,000,000 cycles.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "10000000000",
          },
        },
        {
          id: "ciealc-u2-cpu-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe what happens during the FETCH stage of the fetch-decode-execute cycle.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fetch stage",
                statement: "Retrieve the next instruction from memory.",
              },
            ],
            steps: [
              {
                reasoning: "The PC's address is copied to the MAR.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The instruction at that address is copied into the MDR.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "PC → MAR; instruction → MDR",
          },
        },
        {
          id: "ciealc-u2-cpu-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the purpose of cache memory in a CPU?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To slow down the CPU to save power" },
              { id: "b", text: "To encrypt data before it reaches memory" },
              {
                id: "c",
                text: "To store frequently accessed data and instructions for faster retrieval",
              },
              { id: "d", text: "To permanently store the user's files" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cache",
                statement: "Fast memory for frequently accessed data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cache provides quicker access to data the CPU uses often.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** Faster access to frequent data",
          },
        },
        {
          id: "ciealc-u2-cpu-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Program Counter holds 200 and the instruction stored at address 200 is executed. Assuming each instruction occupies one addressable unit, what value does the PC hold next? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 201 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "PC increment",
                statement: "PC advances to the next instruction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "200 + 1 = 201.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "201",
          },
        },
        {
          id: "ciealc-u2-cpu-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student claims that a CPU with a higher clock speed is always faster overall than one with a lower clock speed. Explain why this claim is not necessarily true, referring to at least two other factors.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CPU performance",
                statement: "Clock speed is only one performance factor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cache size affects how quickly frequently used data is accessed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The number of cores allows parallel processing of tasks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Other factors include bus width, pipelining and instruction set efficiency.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Cache, cores and other factors also matter",
          },
        },
        {
          id: "ciealc-u2-cpu-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During the fetch stage, the instruction retrieved from memory is placed into which register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memory Data Register (MDR)" },
              { id: "b", text: "Accumulator" },
              { id: "c", text: "Program Counter (PC)" },
              { id: "d", text: "Memory Address Register (MAR)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MDR",
                statement: "Holds data fetched from memory.",
              },
            ],
            steps: [
              {
                reasoning: "The fetched instruction is copied into the MDR.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Memory Data Register (MDR)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u2-cpu-notes",
      title: "CPU — notes",
      summary:
        "ALU=calculations, CU=coordination, registers=fast memory. FDE cycle: fetch→decode→execute.",
      sections: [
        {
          heading: "Key idea",
          body: "CPU executes billions of FDE cycles per second.",
        },
        {
          heading: "Registers",
          body: "PC tracks next instruction; MAR/MDR handle memory access.",
        },
      ],
    },
  ],
};
