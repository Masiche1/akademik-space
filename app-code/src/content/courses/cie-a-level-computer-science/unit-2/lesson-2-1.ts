import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "ciealc-u2-lesson-2-1",
  code: "2-1",
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
          { name: "PC", statement: "program counter — next instruction address" },
          { name: "Registers", statement: "PC, MAR, MDR, accumulator, status" },
        ],
        workedExample: {
          problem: "Trace FDE cycle for instruction 'ADD 5' stored at address 100.",
          solution: "PC=100→MAR; fetch instruction to MDR; CU decodes 'ADD 5'; ALU adds 5 to accumulator; PC=101; repeat.",
        },
      },
      questions: [
        {
          id: "ciealc-u2-cpu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the ALU do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Performs arithmetic and logic operations"
                    },
                    {
                              "id": "b",
                              "text": "Coordinates instructions"
                    },
                    {
                              "id": "c",
                              "text": "Stores files"
                    },
                    {
                              "id": "d",
                              "text": "Displays output"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ALU",
                              "statement": "Arithmetic/logic unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ALU performs calculations and comparisons.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Arithmetic and logic operations"
},
        },
        {
          id: "ciealc-u2-cpu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the three stages of the fetch-decode-execute cycle?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "FDE cycle",
                              "statement": "Fetch→decode→execute."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fetch instruction from memory.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Decode instruction; execute operation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fetch→decode→execute"
},
        },
        {
          id: "ciealc-u2-cpu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the program counter (PC) and what does it do?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Program counter",
                              "statement": "Next instruction address."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PC holds address of next instruction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increments after each instruction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Jumps for loops/branches.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Next instruction address"
},
        },
        {
          id: "ciealc-u2-cpu-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define CPU, ALU, CU, registers, FDE cycle, clock speed, PC, MAR/MDR. (b) What does ALU do? (c) What does CU do? (d) What is the FDE cycle? (e) What is PC? (f) What is MAR/MDR? (g) What is cache? (h) Trace FDE for 'LOAD 10' at address 50.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "CPU",
                              "statement": "Components and FDE cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All eight definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Arithmetic/logic operations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Coordinates instruction execution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Fetch→decode→execute.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Next instruction address.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Memory address/data registers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Fast memory for frequent data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid FDE trace.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "CPU architecture and FDE cycle."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u2-cpu-notes",
      title: "CPU — notes",
      summary: "ALU=calculations, CU=coordination, registers=fast memory. FDE cycle: fetch→decode→execute.",
      sections: [
        { heading: "Key idea", body: "CPU executes billions of FDE cycles per second." },
        { heading: "Registers", body: "PC tracks next instruction; MAR/MDR handle memory access." },
      ],
    },
  ],
};
