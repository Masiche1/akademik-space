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
                              "text": "A fast processor"
                    },
                    {
                              "id": "b",
                              "text": "A type of virus"
                    },
                    {
                              "id": "c",
                              "text": "Something that repeats by a rule"
                    },
                    {
                              "id": "d",
                              "text": "A broken program"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "cipc-u1-pt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a pattern?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of computer virus" },
            { id: "b", text: "Something that repeats in a regular way" },
            { id: "c", text: "A folder of files" },
            { id: "d", text: "A drawing program" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pattern", statement: "Repeating regular sequence." }],
            steps: [
              { reasoning: "A pattern repeats or follows a regular rule.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Something that repeats in a regular way",
          },
        },
        {
          id: "cipc-u1-pt-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Continue the pattern: 2, 4, 8, 16, __, __. What is the rule?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Number patterns", statement: "Find the rule then extend." }],
            steps: [
              { reasoning: "Each number doubles: ×2 each time, so next are 32 and 64.", marks: 1, markCode: "M" },
              { reasoning: "Rule stated: 'multiply by 2' (or 'double').", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32, 64 — rule: multiply by 2.",
          },
        },
        {
          id: "cipc-u1-pt-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Repeat 4: move 10 steps' — how many steps does the sprite move in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Loop total", statement: "Repeats × steps each time." }],
            steps: [
              { reasoning: "4 repeats × 10 steps = 40 steps.", marks: 1, markCode: "M" },
              { reasoning: "The sprite moves 40 steps in total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40",
          },
        },
        {
          id: "cipc-u1-pt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What shape does 'repeat 4: move 10 steps, turn 90 degrees' draw?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A circle" },
            { id: "b", text: "A square" },
            { id: "c", text: "A triangle" },
            { id: "d", text: "A star" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Shape patterns", statement: "Turns and sides make shapes." }],
            steps: [
              { reasoning: "4 equal sides with 90° turns make a square.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** A square",
          },
        },
        {
          id: "cipc-u1-pt-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Continue the pattern and state the rule: 1, 3, 6, 10, __, __.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Growing patterns", statement: "Differences increase by 1." }],
            steps: [
              { reasoning: "Differences: +2, +3, +4, so next +5 and +6.", marks: 1, markCode: "M" },
              { reasoning: "Next numbers: 10 + 5 = 15, 15 + 6 = 21.", marks: 1, markCode: "M" },
              { reasoning: "Rule: add increasing numbers (triangular numbers).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15, 21 — add 5 then 6 (increasing steps).",
          },
        },
        {
          id: "cipc-u1-pt-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A pattern block is: 'move 5 steps, turn left 60 degrees', repeated. What shape will the sprite trace?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A hexagon" },
            { id: "b", text: "A straight line" },
            { id: "c", text: "A square" },
            { id: "d", text: "Nothing — 60 degrees is too small" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Polygon patterns", statement: "360 ÷ turn = number of sides." }],
            steps: [
              { reasoning: "360 ÷ 60 = 6 turns to complete a full turn.", marks: 1, markCode: "M" },
              { reasoning: "6 equal sides with 60° turns make a hexagon.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A hexagon",
          },
        },
        {
          id: "cipc-u1-pt-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "'Repeat 3: say A, say B' — how many times is 'A' said? How many times is 'B' said? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Nested patterns in loops", statement: "Each repeat runs the whole block." }],
            steps: [
              { reasoning: "Each of the 3 repeats says A once and B once.", marks: 1, markCode: "M" },
              { reasoning: "A is said 3 times and B is said 3 times.", marks: 1, markCode: "M" },
              { reasoning: "The pattern A,B repeats three times in total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A: 3 times, B: 3 times.",
          },
        },
        {
          id: "cipc-u1-pt-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why do programmers use a repeat loop instead of copying the same block many times?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Why loops", statement: "Less work, easier to change." }],
            steps: [
              { reasoning: "One loop replaces many copied blocks — less work to build.", marks: 1, markCode: "M" },
              { reasoning: "Changing the repeat number changes everything at once.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shorter program, easier to change.",
          },
        },
        {
          id: "cipc-u1-pt-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the missing number: 7, 14, 21, __, 35. What is the rule?",
          response: { type: "numeric", parts: [{ label: "a", answer: 28 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Counting pattern", statement: "Add the same amount each time." }],
            steps: [
              { reasoning: "Pattern adds 7 each time: 21 + 7 = 28.", marks: 1, markCode: "M" },
              { reasoning: "Missing number is 28 (multiples of 7).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "cipc-u1-pt-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sprite follows 'repeat 5: move 4 steps'. How far does it travel? If the same sprite instead used 'repeat 10: move 2 steps', would it travel further, the same, or less?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparing loops", statement: "Total = repeats × steps per repeat." }],
            steps: [
              { reasoning: "5 × 4 = 20 steps.", marks: 1, markCode: "M" },
              { reasoning: "10 × 2 = 20 steps.", marks: 1, markCode: "M" },
              { reasoning: "Same distance — different splits of the same total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 steps; the same distance.",
          },
        },
        {
          id: "cipc-u1-pt-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Look at the pattern: ▲ ■ ▲ ■ ▲ __ __. Describe the rule and predict the next two shapes. Then give a real-life example of a repeating pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "AB patterns", statement: "Two items alternate." }],
            steps: [
              { reasoning: "Rule: triangle and square alternate; next are ■ then ▲ (or square then triangle).", marks: 1, markCode: "M" },
              { reasoning: "Real-life example: stripes on a football shirt, day/night cycle, zebra stripes.", marks: 1, markCode: "M" },
              { reasoning: "Pattern identified and extended correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "■ ▲ (square, triangle); e.g. zebra stripes.",
          },
        },
        {
          id: "cipc-u1-pt-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define pattern. (b) Continue: A, B, A, B, A, __. (c) Continue: 3, 6, 12, 24, __. (d) What is a loop? (e) Explain how repeating 'move, turn 90°' draws a square. (f) Why do programmers use loops instead of repeating blocks? (g) Find the rule: 1, 4, 9, 16, __. (h) Give a real-life pattern example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Patterns and loops", statement: "Pattern rules, sequences, loops, shapes." }],
            steps: [
              { reasoning: "(a) Something that repeats in a regular way.", marks: 1, markCode: "M" },
              { reasoning: "(b) B.", marks: 1, markCode: "M" },
              { reasoning: "(c) 48 — doubling each time.", marks: 1, markCode: "M" },
              { reasoning: "(d) Repeating a set of instructions.", marks: 1, markCode: "M" },
              { reasoning: "(e) 4 sides of equal length with 90° turns close into a square.", marks: 1, markCode: "M" },
              { reasoning: "(f) Less work and easier to change one number.", marks: 1, markCode: "M" },
              { reasoning: "(g) 25 — square numbers (1², 2², 3², 4², 5²).", marks: 1, markCode: "M" },
              { reasoning: "(h) Valid example: seasons, stripes, footsteps rhythm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pattern definition, continuations, loop definition, square drawing, loop benefits, square numbers, real-life example.",
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
