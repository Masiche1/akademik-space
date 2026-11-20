import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cipc-u2-lesson-2-3",
  code: "2-3",
  title: "Stage 4 — Loops: For, While and Nested",
  goal: "I CAN choose the right loop type and write nested loops for complex repetition.",
  standards: ["Cambridge Primary Computing 0059 Stage 4: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
  stage: 4,
  vocabulary: [
    { term: "For loop", definition: "Repeats a set number of times using a counter." },
    { term: "While loop", definition: "Repeats while a condition stays true." },
    { term: "Nested loop", definition: "A loop inside another loop." },
    { term: "Counter variable", definition: "A variable tracking loop iterations." },
    { term: "Loop condition", definition: "The rule that keeps a while loop running." },
    { term: "Iteration count", definition: "Total runs = outer × inner for nested loops." },
  ],
  concepts: [
    {
      id: "cipc-u2-s4-loops",
      title: "Loop types and nesting",
      skill: "Select for/while loops and compute nested loop iterations at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "For vs while",
            body: "For loops repeat a known number of times: 'for i in 1..10'. While loops repeat until a condition fails: 'while score < 100'. Use for when you know the count; while when the end depends on data or events.",
          },
          {
            heading: "Nested loops",
            body: "A loop inside a loop multiplies work: 'for i in 1..3: for j in 1..4' runs the inner body 3×4=12 times. Nested loops draw grids, tables and patterns — but can be slow if too deep.",
          },
        ],
        keyFormulas: [
          { name: "For", statement: "known count; counter variable" },
          { name: "While", statement: "runs until condition false" },
          { name: "Nested", statement: "outer × inner = total iterations" },
        ],
        workedExample: {
          problem: "for i in 1..3: for j in 1..5: print '.'. How many dots?",
          solution: "3 × 5 = 15 dots printed.",
        },
      },
      questions: [
        {
          id: "cipc-u2-lt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When should you use a for loop vs a while loop?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "For = known count; while = until condition fails"
                    },
                    {
                              "id": "b",
                              "text": "For = fast; while = slow"
                    },
                    {
                              "id": "c",
                              "text": "They are identical"
                    },
                    {
                              "id": "d",
                              "text": "While is always better"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Loop types",
                              "statement": "Count vs condition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For needs known iterations; while checks a condition.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "For=count; while=condition"
},
        },
        {
          id: "cipc-u2-lt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'for i in 1..5' — how many iterations? What is i during the 3rd iteration?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "For loops",
                              "statement": "Counter values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 iterations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "i = 3 on the third run.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "5; i=3"
},
        },
        {
          id: "cipc-u2-lt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "'while lives > 0: play' — when does it stop? What could make it infinite?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "While loops",
                              "statement": "Condition-based repetition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stops when lives reaches 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If lives never decreases → infinite loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Condition must be updated inside loop.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "lives=0; must update condition inside"
},
        },
        {
          id: "cipc-u2-lt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Compare for and while loops. (b) What is a nested loop? (c) for i 1..4, for j 1..3 — total iterations? (d) Write a for loop to print numbers 1-10. (e) Write a while loop that counts down from 10. (f) Why update the while condition inside? (g) What does a counter variable do? (h) Design a nested loop that draws a 5×5 grid of dots.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Loops",
                              "statement": "Types, nesting, counters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) For=count; while=until condition false.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Loop inside loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 4×3=12.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) for i in 1..10: print i.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) while n>0: print n; n=n-1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Else condition never changes → infinite.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Tracks iteration number/value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Nested 5×5 loops printing dots.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Loop types, nesting math, counters, while-condition updates."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-lt-notes",
      title: "Loops — notes",
      summary: "For=known count; while=condition. Nested loops multiply iterations (outer × inner).",
      sections: [
        { heading: "Key idea", body: "Choose loop type by whether you know the count beforehand." },
        { heading: "Nested", body: "Inner loop runs fully for each outer iteration." },
      ],
    },
  ],
};
