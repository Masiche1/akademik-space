import type { Lesson } from "../../../types.ts";

export const lesson18: Lesson = {
  id: "cipc-u1-lesson-1-8",
  code: "1-8",
  title: "Stage 3 — Loops and Repetition",
  goal: "I CAN use repeat loops in programs to avoid writing the same instructions many times.",
  standards: ["Cambridge Primary Computing 0059 Stage 3: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
  stage: 3,
  vocabulary: [
    { term: "Loop", definition: "A block that repeats instructions." },
    { term: "Repeat", definition: "How many times a loop runs." },
    { term: "Iteration", definition: "One single run of a loop." },
    { term: "Counter", definition: "A variable that counts loop iterations." },
    { term: "Infinite loop", definition: "A loop that never stops — a bug." },
    { term: "Nested loop", definition: "A loop inside another loop." },
  ],
  concepts: [
    {
      id: "cipc-u1-s3-loops",
      title: "Loops and repetition",
      skill: "Use repeat loops correctly and identify loop bugs at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Repeat loops",
            body: "A repeat block runs its instructions a set number of times. 'Repeat 10: move 10 steps' moves the sprite 100 steps total. Loops save time and make programs shorter — instead of 10 move blocks, use one repeat.",
          },
          {
            heading: "Loop pitfalls",
            body: "If the repeat number is missing or the loop has no end condition, it can run forever — an infinite loop, which freezes the program. Always check how many times your loop should run.",
          },
        ],
        keyFormulas: [
          { name: "Repeat n", statement: "instructions run n times" },
          { name: "Infinite loop", statement: "loop never ends — program stuck" },
        ],
        workedExample: {
          problem: "How many steps does 'repeat 4: move 15 steps' take? What shape does 'repeat 4: move 20; turn 90' draw?",
          solution: "4×15 = 60 steps. The second draws a square: 4 sides of 20 with 90° turns.",
        },
      },
      questions: [
        {
          id: "cipc-u1-lp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a repeat loop do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Speeds up the screen"
                    },
                    {
                              "id": "b",
                              "text": "Deletes instructions"
                    },
                    {
                              "id": "c",
                              "text": "Changes colours"
                    },
                    {
                              "id": "d",
                              "text": "Runs instructions a set number of times"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Loop",
                              "statement": "Repetition structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Loop repeats instructions a chosen number of times.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Repeats instructions"
},
        },
        {
          id: "cipc-u1-lp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Repeat 5: say hello' — how many times is hello said? What is one iteration?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Loop counting",
                              "statement": "Repeat count = runs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 times.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "One iteration = one run of the loop body.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "5; one run = one iteration"
},
        },
        {
          id: "cipc-u1-lp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A program freezes. The code is 'repeat forever: move 10 steps'. Explain the problem and how to fix it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Infinite loops",
                              "statement": "Unending repetition bug."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Infinite loop — never stops, program stuck.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fix: give a finite repeat number or an exit condition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. repeat 10 or until touching edge.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Infinite loop; add a stop condition/number"
},
        },
        {
          id: "cipc-u1-lp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define loop and iteration. (b) What does 'repeat 6: change colour' do? (c) Why use loops instead of copying blocks? (d) What is an infinite loop and why is it a bug? (e) 'Repeat 3: move 10; repeat 2: say hi' — how many times is hi said? (f) Draw/describe a square using a loop. (g) What is a nested loop? (h) How would you make a sprite walk to the edge using a loop?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Loops",
                              "statement": "Definition, counting, debugging, shapes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Loop=repeats instructions; iteration=one run.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Changes colour 6 times.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Shorter, easier to change programs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Never-ending loop; freezes program.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 3×2=6 times.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Repeat 4: move+turn 90°.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Loop inside a loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Repeat until touching edge: move.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Loops, iterations, infinite loop bug, nested loops, square drawing."
},
        },
        {
          id: "cipc-u1-lp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'repeat 6' do in a Scratch program?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Moves the sprite 6 steps" },
            { id: "b", text: "Runs the blocks inside 6 times" },
            { id: "c", text: "Creates 6 sprites" },
            { id: "d", text: "Waits 6 seconds" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Repeat loop", statement: "Repeats inner blocks N times." }],
            steps: [
              { reasoning: "'repeat 6' runs everything inside the loop 6 times.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Runs the blocks inside 6 times",
          },
        },
        {
          id: "cipc-u1-lp-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an iteration? Give the number of iterations in 'repeat 8: move 5 steps'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Iteration", statement: "One run through a loop." }],
            steps: [
              { reasoning: "Iteration = one single run/turn of the loop.", marks: 1, markCode: "M" },
              { reasoning: "'repeat 8' has 8 iterations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "One loop run; 8 iterations.",
          },
        },
        {
          id: "cipc-u1-lp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "'repeat 3: say hi' — how many times is 'hi' said?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Loop counting", statement: "Iterations = repeat count." }],
            steps: [
              { reasoning: "The loop body runs once per repeat: 3 times.", marks: 1, markCode: "M" },
              { reasoning: "'hi' is said 3 times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipc-u1-lp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an infinite loop?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A loop that runs exactly once" },
            { id: "b", text: "A loop that never stops because its end condition is never met" },
            { id: "c", text: "A loop inside another loop" },
            { id: "d", text: "A loop that draws circles" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Infinite loop", statement: "Never-ending loop — a bug." }],
            steps: [
              { reasoning: "An infinite loop repeats forever; it is a bug that freezes programs.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** A loop that never stops",
          },
        },
        {
          id: "cipc-u1-lp-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Program: 'repeat 2: say A; repeat 3: say B'. How many times is 'A' said and how many times is 'B' said? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Nested loops", statement: "Outer loop runs inner loop each time." }],
            steps: [
              { reasoning: "'say A' runs once per outer repeat: 2 times.", marks: 1, markCode: "M" },
              { reasoning: "Inner loop runs 3 times per outer repeat: 2 × 3 = 6 times.", marks: 1, markCode: "M" },
              { reasoning: "A: 2 times, B: 6 times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A: 2, B: 6.",
          },
        },
        {
          id: "cipc-u1-lp-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A sprite program 'repeat forever: move 10 steps' makes Scratch freeze. What is the bug and how do you fix it?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The sprite is too slow — delete the move block" },
            { id: "b", text: "Loops cannot move sprites" },
            { id: "c", text: "It is an infinite loop — replace 'forever' with a fixed number like 'repeat 20'" },
            { id: "d", text: "Change 'move' to 'turn'" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Fixing infinite loops", statement: "Give the loop a finite count." }],
            steps: [
              { reasoning: "'repeat forever' never ends — that is the bug.", marks: 1, markCode: "M" },
              { reasoning: "Fix: use a counted repeat (e.g. repeat 20) or a condition that ends.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Infinite loop — use a counted repeat",
          },
        },
        {
          id: "cipc-u1-lp-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Draw or describe how you would use a repeat loop to make a sprite draw a triangle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Loops for shapes", statement: "Repeat sides with turns." }],
            steps: [
              { reasoning: "repeat 3 times: move forward (equal distance), then turn.", marks: 1, markCode: "M" },
              { reasoning: "Turn angle for a triangle = 360 ÷ 3 = 120 degrees.", marks: 1, markCode: "M" },
              { reasoning: "3 equal sides with 120° turns close into a triangle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "repeat 3: move forward, turn 120°.",
          },
        },
        {
          id: "cipc-u1-lp-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is 'repeat forever' dangerous in a program?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Infinite loops", statement: "Never-ending loops freeze programs." }],
            steps: [
              { reasoning: "It never stops, so the program freezes and nothing after it can run.", marks: 1, markCode: "M" },
              { reasoning: "The user sees a stuck program — it is a bug.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It freezes the program — a bug.",
          },
        },
        {
          id: "cipc-u1-lp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "'repeat 5: change colour by 20' — what is the total colour change after the loop finishes?",
          response: { type: "numeric", parts: [{ label: "a", answer: 100 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Accumulating changes", statement: "Repeats × change each time." }],
            steps: [
              { reasoning: "5 repeats × 20 = 100 total colour change.", marks: 1, markCode: "M" },
              { reasoning: "Total change is 100.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100",
          },
        },
        {
          id: "cipc-u1-lp-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is more efficient: copying 'move 10 steps' 20 times, or one 'repeat 20: move 10 steps'? Why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Loop efficiency", statement: "One loop replaces many blocks." }],
            steps: [
              { reasoning: "The repeat loop — one block replaces 20 copies.", marks: 1, markCode: "M" },
              { reasoning: "Shorter program is easier to read and change (change 20 once).", marks: 1, markCode: "M" },
              { reasoning: "Same result with less work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The loop — less work, easier to change.",
          },
        },
        {
          id: "cipc-u1-lp-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "'repeat 4: repeat 2: say X' — how many times is X said? Show your working.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Nested loop multiplication", statement: "Outer × inner iterations." }],
            steps: [
              { reasoning: "Outer loop runs 4 times; inner loop runs 2 times each.", marks: 1, markCode: "M" },
              { reasoning: "Total = 4 × 2 = 8.", marks: 1, markCode: "M" },
              { reasoning: "X is said 8 times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cipc-u1-lp-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define loop and iteration. (b) What does 'repeat 6: change colour' do? (c) Why use loops instead of copying blocks? (d) What is an infinite loop and why is it a bug? (e) 'Repeat 4: say go' — how many times is 'go' said? (f) Draw/describe a square using a loop. (g) What is a nested loop? (h) How would you make a sprite walk to the edge using a loop?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Loops", statement: "Definitions, counts, nesting, shapes, debugging." }],
            steps: [
              { reasoning: "(a) Loop = repeating instructions; iteration = one run.", marks: 1, markCode: "M" },
              { reasoning: "(b) Changes colour 6 times.", marks: 1, markCode: "M" },
              { reasoning: "(c) Less work, easier to change.", marks: 1, markCode: "M" },
              { reasoning: "(d) Never-ending loop; freezes program = bug.", marks: 1, markCode: "M" },
              { reasoning: "(e) 4 times (the say block repeats 4 times).", marks: 1, markCode: "M" },
              { reasoning: "(f) repeat 4: move forward, turn 90°.", marks: 1, markCode: "M" },
              { reasoning: "(g) A loop inside another loop.", marks: 1, markCode: "M" },
              { reasoning: "(h) repeat move forward until touching edge / repeat N times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Loop/iteration, repeat 6, loop benefits, infinite loop, 'go' count, square, nested loop, walk-to-edge.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-lp-notes",
      title: "Loops — notes",
      summary: "Repeat blocks run instructions n times. Infinite loops freeze programs — always set an end.",
      sections: [
        { heading: "Key idea", body: "Loops = efficient repetition; check the repeat count." },
        { heading: "Debugging", body: "Frozen program? Look for a loop with no end." },
      ],
    },
  ],
};
