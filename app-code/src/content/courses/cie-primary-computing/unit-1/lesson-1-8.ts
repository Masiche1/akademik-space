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
                              "text": "Runs instructions a set number of times"
                    },
                    {
                              "id": "b",
                              "text": "Deletes instructions"
                    },
                    {
                              "id": "c",
                              "text": "Speeds up the screen"
                    },
                    {
                              "id": "d",
                              "text": "Changes colours"
                    }
          ],
          "correctChoiceId": "a"
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
