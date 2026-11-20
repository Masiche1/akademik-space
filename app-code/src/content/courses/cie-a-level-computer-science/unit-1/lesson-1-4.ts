import type { Lesson } from "../../../types.ts";

export const lesson124: Lesson = {
  id: "ciealc-u1-lesson-1-4",
  code: "1-4",
  title: "Boolean Logic",
  goal: "I CAN construct and analyse logic circuits using Boolean operators and truth tables.",
  standards: ["Cambridge A Level Computer Science 9618: data representation", "9618: Boolean logic"],
  
  vocabulary: [
    { term: "Boolean", definition: "Logic system with values TRUE/FALSE (1/0)." },
    { term: "AND", definition: "Output TRUE only if all inputs TRUE." },
    { term: "OR", definition: "Output TRUE if any input TRUE." },
    { term: "NOT", definition: "Output is opposite of input." },
    { term: "Logic gate", definition: "Physical circuit implementing Boolean operation." },
    { term: "Truth table", definition: "Table showing output for all input combinations." },
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
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0"
                    },
                    {
                              "id": "b",
                              "text": "1"
                    },
                    {
                              "id": "c",
                              "text": "Depends"
                    },
                    {
                              "id": "d",
                              "text": "Error"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND gate",
                              "statement": "1 only if all 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AND needs all inputs 1.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "0"
},
        },
        {
          id: "ciealc-u1-bl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between OR and XOR?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OR vs XOR",
                              "statement": "Any vs differ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OR=1 if any input 1; XOR=1 only if inputs differ.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "XOR excludes both-1 case.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Any vs differ"
},
        },
        {
          id: "ciealc-u1-bl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify: A AND 1, A OR 0, A AND NOT A.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Boolean algebra",
                              "statement": "Simplification rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A AND 1 = A; A OR 0 = A.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A AND NOT A = 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All three simplified.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "A, A, 0"
},
        },
        {
          id: "ciealc-u1-bl-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Boolean, AND, OR, NOT, logic gate, truth table, XOR, NAND. (b) Draw truth table for AND. (c) Draw truth table for OR. (d) What is XOR? (e) What is NAND? (f) Simplify: A OR 1, A AND 0, NOT NOT A. (g) What is a logic gate? (h) Design a circuit for 'both inputs must be 1 to activate'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Boolean logic",
                              "statement": "Gates, truth tables, simplification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All eight definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) AND truth table correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) OR truth table correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1 if inputs differ.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) NOT AND — 0 only if all 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) 1, 0, A.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Physical circuit for Boolean ops.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) AND gate design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Boolean logic and circuits."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u1-bl-notes",
      title: "Boolean logic — notes",
      summary: "AND=all 1, OR=any 1, NOT=inverse, XOR=differ. Gates implement logic; truth tables verify.",
      sections: [
        { heading: "Key idea", body: "Boolean algebra simplifies circuits — A AND 0 = 0." },
        { heading: "Gates", body: "AND/OR/NOT/NAND/NOR/XOR — combine for complex logic." },
      ],
    },
  ],
};
