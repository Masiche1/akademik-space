import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cilc-u3-lesson-3-2",
  code: "3-2",
  title: "Stage 8 Checkpoint — Functions, Testing and Systems",
  goal: "I CAN apply functions, debugging, networks and number systems at Stage 8 checkpoint standard.",
  standards: [
    "Cambridge Lower Secondary Computing 0860 Checkpoint Stage 8: functions, systems",
  ],
  stage: 8,
  vocabulary: [
    {
      term: "Function",
      definition: "Reusable block of code performing a task.",
    },
    { term: "Parameter", definition: "Input value passed to a function." },
    { term: "Debugging", definition: "Finding and fixing errors in code." },
    {
      term: "Packet",
      definition: "Small chunk of data sent across a network.",
    },
    { term: "Binary", definition: "Number system using only 0 and 1." },
  ],
  concepts: [
    {
      id: "cilc-u3-s8-functions",
      title: "Stage 8 functions and testing checkpoint",
      skill: "Use functions, parameters and systematic debugging.",
      lesson: {
        sections: [
          {
            heading: "Functions and debugging",
            body: "Functions take parameters, do a task and return a result — they make code reusable and testable. Debugging means tracing values, checking logic and testing with known inputs.",
          },
        ],
        keyFormulas: [
          { name: "Function", statement: "name(parameters) → result" },
          { name: "Debugging", statement: "reproduce → trace → fix → retest" },
        ],
        workedExample: {
          problem:
            "Function double(n) returns n * 2. What does double(7) return?",
          solution:
            "14 — the parameter n is replaced by 7 inside the function.",
        },
      },
      questions: [
        {
          id: "cilc-u3-s8-f-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main advantage of using a function in a program?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It makes the program run faster on all computers",
              },
              { id: "b", text: "Code can be reused and tested in one place" },
              { id: "c", text: "It removes the need for variables" },
              { id: "d", text: "It prevents all syntax errors" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function",
                statement: "Reusable block of code.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Functions allow reuse, modularity and easier testing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reusable and testable code",
          },
        },
        {
          id: "cilc-u3-s8-f-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A function is defined as: FUNCTION area(w, h) RETURN w * h. What does area(6, 4) return?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function call",
                statement:
                  "Parameters take the argument values inside the function.",
              },
            ],
            steps: [
              {
                reasoning: "w = 6 and h = 4 inside the function.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Returns 6 * 4 = 24.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "cilc-u3-s8-f-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A program should print the average of three test scores but always prints the sum instead. Describe how you would debug this systematically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Debugging",
                statement: "Reproduce, trace, fix, retest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reproduce with known inputs, e.g. scores 10, 20, 30.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trace the calculation: sum is 60, but average needs division by 3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fix by dividing by the count, then retest with the same and new inputs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reproduce with test data, trace the formula, add the missing division, retest",
          },
        },
        {
          id: "cilc-u3-s8-f-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a function isAdult(age) that returns TRUE if age >= 18 and FALSE otherwise, then explain why a function is better here than repeating the check in three places.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function design",
                statement: "Single responsibility, reusable logic.",
              },
            ],
            steps: [
              {
                reasoning: "FUNCTION isAdult(age): RETURN age >= 18.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct Boolean return for both branches.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One place to change the rule if the age threshold changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Less duplication, fewer errors, easier testing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "isAdult(age) returns age >= 18; reuse avoids duplicated logic and inconsistent bugs",
          },
        },
      ],
    },
    {
      id: "cilc-u3-s8-systems",
      title: "Stage 8 networks and number systems checkpoint",
      skill: "Explain networks, packets and binary conversion.",
      lesson: {
        sections: [
          {
            heading: "Networks and binary",
            body: "Data travels across networks in packets using protocols like TCP/IP. Computers store everything in binary — each binary digit (bit) is 0 or 1, and 8 bits make a byte.",
          },
        ],
        keyFormulas: [
          {
            name: "Packet",
            statement:
              "Data split into chunks, each with address and sequence info",
          },
          {
            name: "Binary place values",
            statement: "128, 64, 32, 16, 8, 4, 2, 1",
          },
        ],
        workedExample: {
          problem: "Convert binary 1010 to decimal.",
          solution: "8 + 0 + 2 + 0 = 10.",
        },
      },
      questions: [
        {
          id: "cilc-u3-s8-s-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bits are in one byte?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "8" },
              { id: "c", text: "16" },
              { id: "d", text: "32" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Byte", statement: "8 bits." },
            ],
            steps: [
              { reasoning: "One byte = 8 bits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cilc-u3-s8-s-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert binary 1101 to decimal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Binary conversion",
                statement: "Add place values where bits are 1.",
              },
            ],
            steps: [
              {
                reasoning: "Place values: 8, 4, 2, 1 → bits 1,1,0,1.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "8 + 4 + 0 + 1 = 13.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13",
          },
        },
        {
          id: "cilc-u3-s8-s-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why data is split into packets when sent across the internet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Packet switching",
                statement: "Data split into chunks routed independently.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Packets can travel different routes and be reassembled at the destination.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If one packet is lost or delayed, only it needs resending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This makes transmission efficient and resilient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Packets route independently and can be resent individually — efficient and resilient",
          },
        },
        {
          id: "cilc-u3-s8-s-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A file of 1000 bytes is sent as packets of 100 bytes. How many packets are needed? If each packet is 100 bytes of data plus 20 bytes of header, how many bytes travel in total?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Packet calculation",
                statement:
                  "Packets = data / size; total = packets × (data + header).",
              },
            ],
            steps: [
              {
                reasoning: "Packets = 1000 / 100 = 10.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each packet carries 120 bytes total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total bytes = 10 × 120 = 1200.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "10 packets; 1200 bytes including headers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10 packets; 1200 bytes",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilc-u3-stage8-systems-notes",
      title: "Stage 8 computing checkpoint — revision notes",
      summary: "Functions, parameters, debugging, packets, protocols, binary.",
      sections: [
        {
          heading: "Key skills",
          body: "Trace function calls by substituting arguments; debug by reproducing with test data; convert binary by place values; explain packet switching.",
        },
        {
          heading: "Exam tips",
          body: "For binary, write place values above the digits first. For functions, show the parameter substitution step explicitly.",
        },
      ],
    },
  ],
};
