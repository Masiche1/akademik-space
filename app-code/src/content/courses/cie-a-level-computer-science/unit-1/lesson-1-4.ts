import type { Lesson } from "../../../types.ts";

export const lesson124: Lesson = {
  id: "ciealc-u1-lesson-1-4",
  code: "1-4",
  title: "Boolean Logic",
  goal: "I CAN construct and analyse logic circuits using Boolean operators and truth tables.",
  standards: [
    "Cambridge A Level Computer Science 9618: data representation",
    "9618: Boolean logic",
  ],

  vocabulary: [
    {
      term: "Boolean",
      definition: "Logic system with values TRUE/FALSE (1/0).",
    },
    { term: "AND", definition: "Output TRUE only if all inputs TRUE." },
    { term: "OR", definition: "Output TRUE if any input TRUE." },
    { term: "NOT", definition: "Output is opposite of input." },
    {
      term: "Logic gate",
      definition: "Physical circuit implementing Boolean operation.",
    },
    {
      term: "Truth table",
      definition: "Table showing output for all input combinations.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u1-s4-bool",
      title: "Boolean logic",
      skill: "Construct and analyse logic circuits at A Level.",
      lesson: {
        sections: [
          {
            heading: "Boolean operators",
            body: "AND: output 1 only if all inputs 1. OR: output 1 if any input 1. NOT: output is inverse. NAND = NOT AND, NOR = NOT OR, XOR = exclusive OR (1 if inputs differ).",
          },
          {
            heading: "Logic circuits",
            body: "Gates combine: AND/OR/NOT/NAND/NOR/XOR. Build truth tables to verify circuits. Simplify using Boolean algebra: A AND 0 = 0, A OR 1 = 1, A AND A = A.",
          },
        ],
        keyFormulas: [
          { name: "AND", statement: "1 only if all inputs 1" },
          { name: "OR", statement: "1 if any input 1" },
          { name: "NOT", statement: "inverse output" },
          { name: "XOR", statement: "1 if inputs differ" },
        ],
        workedExample: {
          problem: "Draw truth table for XOR gate and simplify A XOR 0.",
          solution: "XOR: 0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0. A XOR 0 = A.",
        },
      },
      questions: [
        {
          id: "ciealc-u1-bl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an AND gate output when inputs are 1 and 0?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "1",
              },
              {
                id: "b",
                text: "Error",
              },
              {
                id: "c",
                text: "Depends",
              },
              {
                id: "d",
                text: "0",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AND gate",
                statement: "1 only if all 1.",
              },
            ],
            steps: [
              {
                reasoning: "AND needs all inputs 1.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "0",
          },
        },
        {
          id: "ciealc-u1-bl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between OR and XOR?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "OR vs XOR",
                statement: "Any vs differ.",
              },
            ],
            steps: [
              {
                reasoning: "OR=1 if any input 1; XOR=1 only if inputs differ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "XOR excludes both-1 case.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Any vs differ",
          },
        },
        {
          id: "ciealc-u1-bl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify: A AND 1, A OR 0, A AND NOT A.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Boolean algebra",
                statement: "Simplification rules.",
              },
            ],
            steps: [
              {
                reasoning: "A AND 1 = A; A OR 0 = A.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A AND NOT A = 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three simplified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A, A, 0",
          },
        },
        {
          id: "ciealc-u1-bl-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Boolean, AND, OR, NOT, logic gate, truth table, XOR, NAND. (b) Draw truth table for AND. (c) Draw truth table for OR. (d) What is XOR? (e) What is NAND? (f) Simplify: A OR 1, A AND 0, NOT NOT A. (g) What is a logic gate? (h) Design a circuit for 'both inputs must be 1 to activate'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Boolean logic",
                statement: "Gates, truth tables, simplification.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All eight definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) AND truth table correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) OR truth table correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) 1 if inputs differ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) NOT AND — 0 only if all 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) 1, 0, A.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Physical circuit for Boolean ops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) AND gate design.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Boolean logic and circuits.",
          },
        },
        {
          id: "ciealc-u1-bl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a NOT gate output when its input is 1?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It depends on a second input" },
              { id: "b", text: "0" },
              { id: "c", text: "1" },
              { id: "d", text: "An error" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NOT gate",
                statement: "Output is the inverse of the input.",
              },
            ],
            steps: [
              {
                reasoning: "NOT inverts the input, so 1 becomes 0.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** 0",
          },
        },
        {
          id: "ciealc-u1-bl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A truth table for a logic circuit with 3 inputs must list how many input combinations? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Truth table size",
                statement: "n inputs give 2^n rows.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "2^3 = 8 combinations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "ciealc-u1-bl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does an XOR gate output when both of its inputs are 1?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "0" },
              { id: "c", text: "It stays unchanged" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "XOR gate",
                statement: "Output is 1 only when inputs differ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "XOR outputs 1 only when the inputs are different; equal inputs give 0.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** 0",
          },
        },
        {
          id: "ciealc-u1-bl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Given A = 1 and B = 0, evaluate (A AND B) OR NOT A. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Boolean evaluation",
                statement: "Evaluate inner gates first, then combine.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A AND B = 1 AND 0 = 0; NOT A = 0; 0 OR 0 = 0.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "0",
          },
        },
        {
          id: "ciealc-u1-bl-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an OR gate output when both of its inputs are 0?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "0" },
              { id: "c", text: "An invalid state" },
              { id: "d", text: "It depends on the gate order" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "OR gate",
                statement: "Output is 1 if any input is 1.",
              },
            ],
            steps: [
              {
                reasoning: "No input is 1, so the OR output is 0.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** 0",
          },
        },
        {
          id: "ciealc-u1-bl-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Draw (describe) the truth table for a 2-input NAND gate: list the output for each input combination.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NAND gate",
                statement: "NOT AND: 0 only when all inputs are 1.",
              },
            ],
            steps: [
              {
                reasoning: "Inputs 0,0 → 1; 0,1 → 1; 1,0 → 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inputs 1,1 → 0; all four combinations listed correctly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "0,0→1; 0,1→1; 1,0→1; 1,1→0",
          },
        },
        {
          id: "ciealc-u1-bl-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which Boolean expression is equivalent to NOT (A AND B)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A AND NOT B" },
              { id: "b", text: "A XOR B XOR 1" },
              { id: "c", text: "NOT A OR B" },
              { id: "d", text: "A NAND B" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NAND gate",
                statement: "Outputs the inverse of AND.",
              },
            ],
            steps: [
              {
                reasoning: "NAND is defined as NOT (A AND B).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** A NAND B",
          },
        },
        {
          id: "ciealc-u1-bl-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Given A = 1, B = 0 and C = 1, evaluate (A OR B) AND NOT C. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Boolean evaluation",
                statement: "Evaluate inner gates first, then combine.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A OR B = 1; NOT C = 0; 1 AND 0 = 0.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "0",
          },
        },
        {
          id: "ciealc-u1-bl-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify the Boolean expression A OR 1.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "NOT A" },
              { id: "c", text: "1" },
              { id: "d", text: "A" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Boolean algebra",
                statement: "A OR 1 = 1.",
              },
            ],
            steps: [
              {
                reasoning: "OR with a 1 input is always 1.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** 1",
          },
        },
        {
          id: "ciealc-u1-bl-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a 2-input XOR truth table, how many rows produce an output of 1? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "XOR truth table",
                statement: "Output 1 only when inputs differ.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Inputs 0,1 and 1,0 give output 1 — 2 rows.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciealc-u1-bl-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Use De Morgan's law to rewrite NOT (A OR B) using only AND and NOT gates, then state the output when A = 1 and B = 1.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "De Morgan's law",
                statement: "NOT (A OR B) = NOT A AND NOT B.",
              },
            ],
            steps: [
              {
                reasoning: "De Morgan's law gives NOT A AND NOT B.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "With A = 1 and B = 1, NOT A = 0 and NOT B = 0.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "0 AND 0 = 0.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "NOT A AND NOT B; output 0",
          },
        },
        {
          id: "ciealc-u1-bl-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Construct a logic circuit that outputs 1 only when exactly one of two inputs A and B is 1. State which single gate performs this function and justify your answer.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "XOR gate",
                statement: "Output 1 when inputs differ.",
              },
            ],
            steps: [
              {
                reasoning: "XOR outputs 1 only when the inputs differ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inputs 0,1 → 1 and 1,0 → 1 satisfy 'exactly one'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inputs 0,0 and 1,1 both give 0, completing justification.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "XOR gate",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u1-bl-notes",
      title: "Boolean logic — notes",
      summary:
        "AND=all 1, OR=any 1, NOT=inverse, XOR=differ. Gates implement logic; truth tables verify.",
      sections: [
        {
          heading: "Key idea",
          body: "Boolean algebra simplifies circuits — A AND 0 = 0.",
        },
        {
          heading: "Gates",
          body: "AND/OR/NOT/NAND/NOR/XOR — combine for complex logic.",
        },
      ],
    },
  ],
};
