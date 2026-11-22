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
                              "text": "While is always better"
                    },
                    {
                              "id": "b",
                              "text": "They are identical"
                    },
                    {
                              "id": "c",
                              "text": "For = known count; while = until condition fails"
                    },
                    {
                              "id": "d",
                              "text": "For = fast; while = slow"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "cipc-u2-lt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When is a FOR loop the best choice?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only for drawing" },
            { id: "b", text: "Never — while loops are always better" },
            { id: "c", text: "When you know exactly how many times to repeat" },
            { id: "d", text: "When you don't know how many times" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "For loop", statement: "Fixed number of iterations." }],
            steps: [
              { reasoning: "FOR loops repeat a set number of times — best when the count is known.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** When you know exactly how many times",
          },
        },
        {
          id: "cipc-u2-lt-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a counter variable do in a loop?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Counter variable", statement: "Tracks iteration number." }],
            steps: [
              { reasoning: "A counter variable counts how many times the loop has run.", marks: 1, markCode: "M" },
              { reasoning: "e.g. 'i' in for i in 1..5 counts 1,2,3,4,5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Counts iterations; e.g. i in for i in 1..5.",
          },
        },
        {
          id: "cipc-u2-lt-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "'for i in 1..4' — how many iterations does the loop run?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "For loop count", statement: "Last - first + 1." }],
            steps: [
              { reasoning: "i takes values 1, 2, 3, 4 — 4 iterations.", marks: 1, markCode: "M" },
              { reasoning: "4 iterations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipc-u2-lt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What must a WHILE loop condition be true for the loop to keep running?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It always runs forever" },
            { id: "b", text: "The condition must stay true — it stops when false" },
            { id: "c", text: "It cannot use conditions" },
            { id: "d", text: "The condition must be false" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "While loop", statement: "Repeats while condition true." }],
            steps: [
              { reasoning: "WHILE repeats as long as its condition is true; stops when false.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Condition must stay true",
          },
        },
        {
          id: "cipc-u2-lt-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trace 'for i in 1..3: say i'. What is printed, and what is i during the last iteration?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tracing for loops", statement: "Counter values each iteration." }],
            steps: [
              { reasoning: "Prints 1, 2, 3.", marks: 1, markCode: "M" },
              { reasoning: "i takes 1, then 2, then 3.", marks: 1, markCode: "M" },
              { reasoning: "Last iteration i = 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prints 1, 2, 3; i = 3 last.",
          },
        },
        {
          id: "cipc-u2-lt-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why must the condition in a WHILE loop eventually become false, or what must change inside it?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It uses less memory" },
            { id: "b", text: "Nothing — while loops always stop" },
            { id: "c", text: "Otherwise it becomes an infinite loop" },
            { id: "d", text: "It runs faster" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "While loop safety", statement: "Condition must change to stop." }],
            steps: [
              { reasoning: "If the condition never becomes false the loop never ends — an infinite loop bug.", marks: 1, markCode: "M" },
              { reasoning: "Something inside (counter, variable) must change the condition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Otherwise it becomes an infinite loop",
          },
        },
        {
          id: "cipc-u2-lt-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "'for i in 1..3, for j in 1..2: print i,j' — how many lines are printed? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Nested loops", statement: "Total = outer × inner iterations." }],
            steps: [
              { reasoning: "Outer loop runs 3 times; inner loop runs 2 times each.", marks: 1, markCode: "M" },
              { reasoning: "Total = 3 × 2 = 6 lines.", marks: 1, markCode: "M" },
              { reasoning: "6 lines printed (1,1 1,2 2,1 2,2 3,1 3,2).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 lines.",
          },
        },
        {
          id: "cipc-u2-lt-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why update the WHILE loop's variable inside the loop?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "While loop design", statement: "Change condition to eventually stop." }],
            steps: [
              { reasoning: "If nothing changes, the condition stays true forever — infinite loop.", marks: 1, markCode: "M" },
              { reasoning: "Updating the variable (e.g. lives = lives - 1) makes the condition eventually false.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "So the condition eventually becomes false.",
          },
        },
        {
          id: "cipc-u2-lt-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "n = 10. 'while n > 5: n = n - 3'. How many times does the loop body run? (Trace n: 10 → 7 → 4.)",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Tracing while", statement: "Check condition before each run." }],
            steps: [
              { reasoning: "10 > 5 → run, n=7; 7 > 5 → run, n=4; 4 > 5 false → stop.", marks: 1, markCode: "M" },
              { reasoning: "Body ran 2 times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipc-u2-lt-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a FOR loop that prints the numbers 1 to 10. What range do you use?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Writing for loops", statement: "Range 1..10." }],
            steps: [
              { reasoning: "for i in 1..10: print i.", marks: 1, markCode: "M" },
              { reasoning: "Range 1..10 includes both endpoints — 10 iterations.", marks: 1, markCode: "M" },
              { reasoning: "Loop prints 1 through 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "for i in 1..10: print i.",
          },
        },
        {
          id: "cipc-u2-lt-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A WHILE loop 'while lives > 0: play level; lives = lives - 1' starts with lives = 3. How many times is 'play level' run?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Counting while iterations", statement: "Runs until condition false." }],
            steps: [
              { reasoning: "lives = 3, 2, 1 → condition true 3 times; at 0 it stops.", marks: 1, markCode: "M" },
              { reasoning: "'play level' runs 3 times.", marks: 1, markCode: "M" },
              { reasoning: "3 iterations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipc-u2-lt-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Compare for and while loops. (b) What is a nested loop? (c) for i 1..4, for j 1..3 — total iterations? (d) Write a for loop to print numbers 1-10. (e) Write a while loop that counts down from 10. (f) Why update the while condition inside? (g) What does a counter variable do? (h) Design a nested loop that draws a 5×5 grid of dots.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Loops", statement: "For vs while, nesting, counters, design." }],
            steps: [
              { reasoning: "(a) For=fixed count; while=until condition false.", marks: 1, markCode: "M" },
              { reasoning: "(b) A loop inside another loop.", marks: 1, markCode: "M" },
              { reasoning: "(c) 4 × 3 = 12 iterations.", marks: 1, markCode: "M" },
              { reasoning: "(d) for i in 1..10: print i.", marks: 1, markCode: "M" },
              { reasoning: "(e) while n > 0: print n; n = n - 1 (from n=10).", marks: 1, markCode: "M" },
              { reasoning: "(f) So the condition eventually becomes false.", marks: 1, markCode: "M" },
              { reasoning: "(g) Counts iterations / current value.", marks: 1, markCode: "M" },
              { reasoning: "(h) Outer 5 rows × inner 5 dots = 25 dots.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "For vs while, nested loop, 12 iterations, print loop, countdown loop, condition updates, counter, 5×5 grid.",
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
