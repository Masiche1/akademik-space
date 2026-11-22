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
              { id: "a", text: "It prevents all syntax errors" },
              { id: "b", text: "It removes the need for variables" },
              {
                id: "c",
                text: "It makes the program run faster on all computers",
              },
              { id: "d", text: "Code can be reused and tested in one place" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cilc-u3-s8-f-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a function call, what is a parameter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An input value passed into the function" },
              { id: "b", text: "The final result printed by the program" },
              { id: "c", text: "A comment explaining the code" },
              { id: "d", text: "The name of the programming language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parameter",
                statement: "An input value supplied to a function.",
              },
            ],
            steps: [
              {
                reasoning: "Parameters receive the arguments used in a function call.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "An input value passed into the function",
          },
        },
        {
          id: "cilc-u3-s8-f-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use these functions: FUNCTION triple(n) RETURN n * 3 and FUNCTION add(a, b) RETURN a + b. Give (a) triple(4), (b) add(7, 5) and (c) triple(add(2, 1)).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 12 },
              { label: "c", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function call",
                statement:
                  "Replace parameters with argument values and evaluate nested calls inside out.",
              },
            ],
            steps: [
              {
                reasoning: "triple(4) = 4 * 3 = 12.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "add(7, 5) = 7 + 5 = 12.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "add(2, 1) = 3, then triple(3) = 9.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 12; (b) 12; (c) 9",
          },
        },
        {
          id: "cilc-u3-s8-f-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main advantage of a function returning a value rather than only printing it?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The result can be stored or used in further processing",
              },
              { id: "b", text: "Returned values cannot be tested" },
              { id: "c", text: "Functions cannot use parameters" },
              { id: "d", text: "Printing is always faster" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Return value",
                statement:
                  "A function can pass its result back for further processing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A returned value can be stored or used inside another calculation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The result can be stored or used in further processing",
          },
        },
        {
          id: "cilc-u3-s8-f-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in systematic debugging?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rewrite the whole program" },
              { id: "b", text: "Delete all comments" },
              { id: "c", text: "Change every variable name" },
              { id: "d", text: "Reproduce the error with known inputs" },
            ],
            correctChoiceId: "d",
          },
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
                  "You must reproduce the problem reliably before tracing its cause.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reproduce the error with known inputs",
          },
        },
        {
          id: "cilc-u3-s8-f-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A function is defined as FUNCTION f(x) RETURN x * x - 1. Give (a) f(3) and (b) f(5).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function call",
                statement:
                  "Substitute the argument for x, then evaluate the expression.",
              },
            ],
            steps: [
              {
                reasoning: "f(3) = 3 * 3 - 1 = 8.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "f(5) = 5 * 5 - 1 = 24.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "f(3) = 8; f(5) = 24",
          },
        },
        {
          id: "cilc-u3-s8-f-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is calling area(6, 4) easier to understand than repeating w * h in several places?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It removes the need to store any data",
              },
              {
                id: "b",
                text: "It makes all numbers prime",
              },
              {
                id: "c",
                text: "It guarantees the program has no bugs",
              },
              {
                id: "d",
                text: "The function name states the task and the arguments show the inputs",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Abstraction",
                statement:
                  "A named function hides detailed steps behind a clear purpose.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The call is readable and the calculation is defined once.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The function name and arguments make the purpose clear",
          },
        },
        {
          id: "cilc-u3-s8-f-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A function average(a, b, c) is supposed to return the mean of three scores but returns a + b + c. Describe how you would find and fix the bug.",
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
                  "Call the function with known values, e.g. average(10, 20, 30).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trace the return expression and see that it adds but never divides by 3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Change the return to (a + b + c) / 3 and retest with several inputs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Test with known scores, trace the missing division, return (a + b + c) / 3, retest",
          },
        },
        {
          id: "cilc-u3-s8-f-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use these functions: FUNCTION discount(price) RETURN price * 0.9 and FUNCTION twice(n) RETURN n + n. Give (a) discount(50), (b) discount(20) and (c) twice(9).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 45 },
              { label: "b", answer: 18 },
              { label: "c", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function call",
                statement:
                  "Replace each parameter with its argument value.",
              },
            ],
            steps: [
              {
                reasoning: "discount(50) = 50 * 0.9 = 45.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "discount(20) = 20 * 0.9 = 18.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "twice(9) = 9 + 9 = 18.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "discount(50) = 45; discount(20) = 18; twice(9) = 18",
          },
        },
        {
          id: "cilc-u3-s8-f-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do functions make testing easier?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They stop users from entering data",
              },
              {
                id: "b",
                text: "They remove the need for a markscheme",
              },
              {
                id: "c",
                text: "They make every program run instantly",
              },
              {
                id: "d",
                text: "They can be tested separately using known inputs",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Modular testing",
                statement:
                  "Small functions can be checked independently.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Known inputs and expected outputs isolate errors to one function.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "They can be tested separately using known inputs",
          },
        },
        {
          id: "cilc-u3-s8-f-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a function isEven(n) that returns TRUE when n is divisible by 2 and FALSE otherwise. Explain two test inputs you would use.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function design and testing",
                statement:
                  "Use a clear rule, then test both true and false cases.",
              },
            ],
            steps: [
              {
                reasoning:
                  "FUNCTION isEven(n): RETURN n mod 2 = 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The return gives TRUE for even n and FALSE for odd n.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Test an even input such as isEven(8), expecting TRUE.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Test an odd input such as isEven(7), expecting FALSE.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "isEven(n) returns n mod 2 = 0; test even and odd inputs",
          },
        },
        {
          id: "cilc-u3-s8-f-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use these functions: FUNCTION bonus(points) RETURN points + 10 and FUNCTION half(n) RETURN n / 2. Give (a) bonus(25), (b) bonus(0) and (c) half(18).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 35 },
              { label: "b", answer: 10 },
              { label: "c", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function call",
                statement:
                  "Substitute arguments and evaluate the returned expression.",
              },
            ],
            steps: [
              {
                reasoning: "bonus(25) = 25 + 10 = 35.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "bonus(0) = 0 + 10 = 10.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "half(18) = 18 / 2 = 9.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "bonus(25) = 35; bonus(0) = 10; half(18) = 9",
          },
        },
        {
          id: "cilc-u3-s8-f-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A function works for positive inputs but returns the wrong result for negative inputs. What is the best next debugging step?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delete the function immediately" },
              { id: "b", text: "Assume negative inputs cannot occur" },
              {
                id: "c",
                text: "Trace the function with a negative input and inspect each step"
              },
              { id: "d", text: "Change every number in the program" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Boundary testing",
                statement:
                  "Test edge cases that may expose faulty conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The failing input class identifies where the logic breaks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Trace the function with a negative input and inspect each step",
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
              { id: "a", text: "32" },
              { id: "b", text: "4" },
              { id: "c", text: "8" },
              { id: "d", text: "16" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cilc-u3-s8-s-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a network protocol such as TCP/IP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make every file smaller" },
              { id: "b", text: "To store data permanently" },
              {
                id: "c",
                text: "To provide agreed rules for sending and receiving data"
              },
              { id: "d", text: "To remove the need for packets" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protocol",
                statement: "Agreed rules for communication between devices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protocols define how devices format, send and interpret data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "To provide agreed rules for sending and receiving data",
          },
        },
        {
          id: "cilc-u3-s8-s-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert each binary number to decimal: (a) 0101, (b) 1111 and (c) 10000.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 15 },
              { label: "c", answer: 16 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Binary conversion",
                statement: "Add the place values of bits that are 1.",
              },
            ],
            steps: [
              {
                reasoning: "0101 = 4 + 1 = 5.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "1111 = 8 + 4 + 2 + 1 = 15.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "10000 = 16.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 5; (b) 15; (c) 16",
          },
        },
        {
          id: "cilc-u3-s8-s-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does a packet include an address and sequence number?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The sequence number stores the whole file permanently",
              },
              {
                id: "b",
                text: "The address encrypts the file and the sequence number deletes errors",
              },
              { id: "c", text: "The address removes the need for protocols" },
              {
                id: "d",
                text: "The address helps route it and the sequence number helps reorder the data",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Packet header",
                statement:
                  "Control information used to route and reassemble data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Addressing routes packets and sequence numbers support reassembly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The address helps route it and the sequence number helps reorder the data",
          },
        },
        {
          id: "cilc-u3-s8-s-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which binary number is largest in decimal value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1010" },
              { id: "b", text: "1001" },
              { id: "c", text: "1110" },
              { id: "d", text: "1100" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Binary comparison",
                statement: "Compare place values or convert to decimal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "1110 = 8 + 4 + 2 = 14, larger than 10, 12 and 9.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1110",
          },
        },
        {
          id: "cilc-u3-s8-s-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An 800-byte file is sent in packets of 50 bytes of data. Give (a) the number of packets and (b) the total bytes sent if each packet also has a 10-byte header.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16 },
              { label: "b", answer: 960 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Packet calculation",
                statement:
                  "Packets = data / packet size; total = packets × (data + header).",
              },
            ],
            steps: [
              {
                reasoning: "Packets = 800 / 50 = 16.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Each packet is 60 bytes, so total = 16 × 60 = 960.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "16 packets; 960 bytes",
          },
        },
        {
          id: "cilc-u3-s8-s-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a router mainly do on a network?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Directs packets towards their destination network"
              },
              { id: "b", text: "Converts all data to binary" },
              { id: "c", text: "Removes the need for protocols" },
              { id: "d", text: "Stores every website permanently" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Router",
                statement: "Device that forwards packets between networks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Routers inspect packet destinations and choose the next route.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Directs packets towards their destination network",
          },
        },
        {
          id: "cilc-u3-s8-s-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why different devices need agreed protocols before they can communicate over a network.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protocol",
                statement:
                  "Shared rules for formatting, sending and interpreting data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Devices may use different hardware or software, so common rules are required.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Protocols define packet structure, addressing and error handling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without agreed rules, sent bits could be interpreted incorrectly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Protocols provide shared rules for packet format, addressing and interpretation",
          },
        },
        {
          id: "cilc-u3-s8-s-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert each binary number to decimal: (a) 10001, (b) 10101 and (c) 11100.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 17 },
              { label: "b", answer: 21 },
              { label: "c", answer: 28 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Binary conversion",
                statement: "Sum the place values where bits are 1.",
              },
            ],
            steps: [
              {
                reasoning: "10001 = 16 + 1 = 17.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "10101 = 16 + 4 + 1 = 21.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "11100 = 16 + 8 + 4 = 28.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 17; (b) 21; (c) 28",
          },
        },
        {
          id: "cilc-u3-s8-s-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which digits are used in the binary number system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A to F" },
              { id: "b", text: "0 and 1" },
              { id: "c", text: "0 to 9" },
              { id: "d", text: "1 and 2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binary",
                statement: "A base-2 number system using only 0 and 1.",
              },
            ],
            steps: [
              {
                reasoning: "Binary digits are limited to 0 and 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0 and 1",
          },
        },
        {
          id: "cilc-u3-s8-s-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare binary 1011 and 1101. Show the decimal value of each and state which is larger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Binary conversion",
                statement: "Use place values 8, 4, 2, 1 for four-bit numbers.",
              },
            ],
            steps: [
              {
                reasoning: "1011 = 8 + 0 + 2 + 1 = 11.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "1101 = 8 + 4 + 0 + 1 = 13.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both use the same place values, so decimal values can be compared directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "13 > 11, so 1101 is larger.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1011 = 11; 1101 = 13; 1101 is larger",
          },
        },
        {
          id: "cilc-u3-s8-s-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three answers: (a) the number of bits in 5 bytes, (b) the number of packets needed for 600 bytes using 75-byte packets, and (c) the decimal value of binary 11010.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 8 },
              { label: "c", answer: 26 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Bits, packets and binary",
                statement: "8 bits per byte; packets = data / size; sum binary place values.",
              },
            ],
            steps: [
              {
                reasoning: "5 bytes × 8 bits = 40 bits.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Packets = 600 / 75 = 8.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "11010 = 16 + 8 + 2 = 26.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "40 bits; 8 packets; 26",
          },
        },
        {
          id: "cilc-u3-s8-s-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Packets from one file arrive at a receiver out of order. Which packet information most directly helps put them back in order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sequence number" },
              { id: "b", text: "File name" },
              { id: "c", text: "Packet colour" },
              { id: "d", text: "Sender's phone number" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sequence number",
                statement: "Identifies a packet's position in the original data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sequence numbers show the original order of packet data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sequence number",
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
