import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "cipc-u1-lesson-1-5",
  code: "1-5",
  title: "Stage 2 — Patterns and Sequences",
  goal: "I CAN recognise and continue patterns, and explain how patterns help computers repeat actions.",
  standards: ["Cambridge Primary Computing 0059 Stage 2: computational thinking", "Cambridge Primary Computing 0059 framework strands: Computational thinking"],
  stage: 2,
  vocabulary: [
    { term: "Pattern", definition: "Something that repeats in a rule-based way." },
    { term: "Sequence", definition: "An ordered list where each item follows a rule." },
    { term: "Repeat", definition: "To do something again the same way." },
    { term: "Rule", definition: "The pattern's instruction for what comes next." },
    { term: "Continue", definition: "To extend a pattern with the next items." },
    { term: "Loop", definition: "A program structure that repeats instructions." },
  ],
  concepts: [
    {
      id: "cipc-u1-s2-pattern",
      title: "Recognising and continuing patterns",
      skill: "Identify pattern rules and extend sequences at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Finding the rule",
            body: "Patterns repeat by a rule: 2, 4, 6, 8... adds 2 each time. Look at what changes between items — size, colour, number. Once you find the rule, you can continue the pattern forever.",
          },
          {
            heading: "Patterns in computing",
            body: "Computers love patterns — repeating instructions is how programs do lots of work with few commands. A loop repeats a set of instructions, like 'move forward, turn left' repeated to draw a shape.",
          },
        ],
        keyFormulas: [
          { name: "Pattern rule", statement: "find what changes each step" },
          { name: "Repeat/loop", statement: "same instructions again and again" },
        ],
        workedExample: {
          problem: "Continue the pattern: 🔴🔵🔴🔵🔴... What comes next? What is the rule?",
          solution: "Next is 🔵. Rule: alternate red, blue. Repeat the pair over and over.",
        },
      },
      questions: [
        {
          id: "cipc-u1-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a pattern?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something that repeats by a rule"
                    },
                    {
                              "id": "b",
                              "text": "A broken program"
                    },
                    {
                              "id": "c",
                              "text": "A type of virus"
                    },
                    {
                              "id": "d",
                              "text": "A fast processor"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pattern",
                              "statement": "Rule-based repetition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pattern repeats following a rule.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Rule-based repetition"
},
        },
        {
          id: "cipc-u1-pt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Continue: 5, 10, 15, 20, __, __. What is the rule?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Number patterns",
                              "statement": "Add the same amount."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Next: 25, 30.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rule: add 5 each time.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "25, 30; add 5"
},
        },
        {
          id: "cipc-u1-pt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sprite moves 'forward 10, turn right' repeatedly. What shape will it draw? Explain how a loop helps here.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Loops and patterns",
                              "statement": "Repetition creates shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Draws a square (4 equal sides/turns).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Loop repeats the two instructions automatically.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fewer blocks needed than writing each step.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Square; loop repeats instructions"
},
        },
        {
          id: "cipc-u1-pt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define pattern. (b) Continue: A, B, A, B, A, __. (c) Continue: 3, 6, 12, 24, __. (d) What is a loop? (e) Explain how repeating 'move, turn 90°' draws a square. (f) Why do programmers use loops instead of repeating blocks? (g) Find the rule: 1, 4, 9, 16, __. (h) Give a real-life pattern example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Patterns and loops",
                              "statement": "Rules, sequences, repetition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Rule-based repetition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) B.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 48 (doubling).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Repeats instructions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 4 sides × 90° turns = closed square.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Shorter programs, easier to change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) 25 (square numbers).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid pattern example.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Patterns, sequences, loops, square-drawing, efficiency."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-pt-notes",
      title: "Patterns — notes",
      summary: "Find the rule, then continue. Loops repeat instructions — 'move, turn 90°' ×4 draws a square.",
      sections: [
        { heading: "Key idea", body: "Every pattern has a rule; loops exploit repetition in code." },
        { heading: "Loops", body: "Repeat blocks instead of copying them — shorter, easier programs." },
      ],
    },
  ],
};
