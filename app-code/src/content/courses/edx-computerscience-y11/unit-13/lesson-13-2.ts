import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "ecs11-u13-lesson-13-2",
  code: "13-2",
  title: "Pseudocode and Program Design",
  goal: "I CAN write and interpret pseudocode using sequence, selection and iteration, declare variables and use trace tables to follow execution.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming: pseudocode, variables and trace tables"],
  
  vocabulary: [
    { term: "Pseudocode", definition: "Plain-language structured steps describing an algorithm before coding." },
    { term: "Variable", definition: "A named storage location whose value can change during execution." },
    { term: "Constant", definition: "A named value that does not change during execution." },
    { term: "Trace table", definition: "A table recording variable values at each step to follow program execution." },
    { term: "Iteration", definition: "Repeating a block of steps, e.g. FOR or WHILE loops." },
    { term: "Selection", definition: "Choosing which steps to run based on a condition, e.g. IF...THEN...ELSE." },
    { term: "Input/output", definition: "Receiving data (INPUT) or displaying results (OUTPUT)." },
  ],
  concepts: [
    {
      id: "ecs11-u13-pseudocode",
      title: "Writing and reading pseudocode",
      skill: "Write pseudocode using standard structures and interpret given pseudocode.",
      lesson: {
        sections: [
          {
            heading: "Pseudocode structure",
            body: "Pseudocode describes algorithms in structured plain language. Standard elements: INPUT to receive data, OUTPUT to display results, assignments like x = 5, selection with IF...THEN...ELSE...ENDIF, and iteration with FOR...NEXT or WHILE...ENDWHILE loops.\n\nPseudocode sits between the problem description and real code: precise enough to check logic, readable enough for non-programmers. Indentation shows which lines belong to a loop or branch.",
          },
          {
            heading: "Reading pseudocode",
            body: "To interpret pseudocode, track each line in order. When a loop appears, its body repeats for the given range or until the condition fails. When IF appears, only the matching branch runs.\n\nWorked habit: write a trace table — one column per variable, one row per step — to record values as execution proceeds. This is the same skill used to debug real programs.",
          },
        ],
        keyFormulas: [
          { name: "Sequence", statement: "Steps run in order, top to bottom" },
          { name: "Selection", statement: "IF condition THEN ... ELSE ... ENDIF" },
          { name: "Iteration", statement: "FOR i FROM a TO b ... NEXT / WHILE condition ... ENDWHILE" },
        ],
        workedExample: {
          problem: "Write pseudocode that asks for a number and outputs 'positive' or 'not positive'.",
          solution: "INPUT n\nIF n > 0 THEN\n  OUTPUT \"positive\"\nELSE\n  OUTPUT \"not positive\"\nENDIF",
        },
      },
      questions: [
        {
          id: "ecs11-u13-pseudo-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the purpose of pseudocode?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To make programs run faster"
                    },
                    {
                              "id": "b",
                              "text": "To describe an algorithm's logic in plain language before coding"
                    },
                    {
                              "id": "c",
                              "text": "To store data permanently"
                    },
                    {
                              "id": "d",
                              "text": "To encrypt sensitive data"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pseudocode",
                              "statement": "Plain-language algorithm description."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pseudocode expresses logic clearly before writing real code.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Plain-language description of algorithm logic before coding"
},
        },
        {
          id: "ecs11-u13-pseudo-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write pseudocode that inputs a number n and outputs n multiplied by 2.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Pseudocode syntax",
                              "statement": "INPUT, assignment, OUTPUT."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "INPUT n — receive the number.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "result = n * 2 — compute the doubled value.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "OUTPUT result — display the answer.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "INPUT n / result = n * 2 / OUTPUT result"
},
        },
        {
          id: "ecs11-u13-pseudo-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "What does this pseudocode output?\n\ncount = 0\nFOR i FROM 1 TO 5\n  count = count + i\nENDFOR\nOUTPUT count",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tracing loops",
                              "statement": "Accumulate sum 1+2+3+4+5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The loop adds i to count for i = 1, 2, 3, 4, 5.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "count becomes 1, then 3, then 6, then 10, then 15.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "After the loop, OUTPUT count displays 15.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Final output: 15.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "15"
},
        },
        {
          id: "ecs11-u13-pseudo-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A teacher records three test scores.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode to input three scores a, b, c and output their average.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the variables used and their role.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Pseudocode design",
                              "statement": "INPUT, arithmetic, OUTPUT."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "INPUT a, b, c (or three separate INPUT lines).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "average = (a + b + c) / 3.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "OUTPUT average.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "a, b, c hold the three input scores.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "average holds the calculated mean, used only for output.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(a) INPUT a,b,c; average=(a+b+c)/3; OUTPUT average (b) inputs a,b,c; result average"
},
        },
        {
          id: "ecs11-u13-pseudo-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A café wants a program that gives a 10% discount when a bill is over 20.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode for the discount calculation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two reasons for writing pseudocode before the real program.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Selection in pseudocode",
                              "statement": "IF...THEN...ELSE handles the discount rule."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "INPUT bill.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "IF bill > 20 THEN total = bill * 0.9 ELSE total = bill ENDIF (or bill - bill*0.1).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "OUTPUT total.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pseudocode lets you check the logic is correct before coding.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "It is language-independent, so it can be reviewed by non-programmers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "It makes planning structure (loops, branches) clear before implementation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) IF bill>20 THEN apply 10% off (b) verify logic, language-independent, plan structure"
},
        },
        {
          id: "ecs11-u13-pseudo-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write and verify pseudocode that outputs the even numbers from 2 to 10.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode that outputs 2, 4, 6, 8, 10.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Trace the loop to show the values of i on each iteration.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how the loop structure could be adapted to output odd numbers instead.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Iteration design",
                              "statement": "FOR loop with step or conditional filtering."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "FOR i FROM 2 TO 10 STEP 2 with OUTPUT i inside; NEXT i.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Alternatively: FOR i FROM 1 TO 10 with IF i is even THEN OUTPUT i.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The loop must be bounded (2 to 10) so it is finite.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "OUTPUT inside the loop so each even value is displayed.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "With STEP 2, i takes values 2, 4, 6, 8, 10.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each iteration outputs the current i: 2 then 4 then 6 then 8 then 10.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "After i exceeds 10 the loop ends — five outputs total.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Change STEP 2 to start at 1 (i = 1, 3, 5, 7, 9) or adjust the range.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "For the IF approach, change the condition to 'i is odd'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The loop structure stays the same — only the start value or condition changes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) FOR i FROM 2 TO 10 STEP 2 OUTPUT i (b) i = 2,4,6,8,10 → outputs same (c) start at 1 or test for odd"
},
        },
      ],
    },
    {
      id: "ecs11-u13-variables-trace",
      title: "Variables and trace tables",
      skill: "Declare and use variables and constants, and trace algorithm execution step by step.",
      lesson: {
        sections: [
          {
            heading: "Variables and constants",
            body: "A variable is a named storage location whose value can change during execution — e.g. score, total, count. A constant is a named value that never changes, e.g. PI = 3.14 or MAX_SCORE = 100; using names instead of magic numbers makes code clearer and easier to update.\n\nAssignments like x = x + 1 update the stored value; the right side is evaluated first using the old value, then stored.",
          },
          {
            heading: "Trace tables",
            body: "A trace table records the value of each variable at each step of execution. Columns are variables; rows are steps. It is used to check algorithms by hand, find logic errors and predict output.\n\nTo trace: initialise variables, then update one row per statement or iteration, writing the new value after each assignment. When the program ends, the final row shows the result.",
          },
        ],
        keyFormulas: [
          { name: "Variable", statement: "Named storage whose value changes" },
          { name: "Constant", statement: "Named fixed value, e.g. MAX = 100" },
          { name: "Trace table", statement: "Columns = variables, rows = execution steps" },
        ],
        workedExample: {
          problem: "Trace: x = 4, y = 2; x = x + y; y = y * 2. What are x and y at the end?",
          solution: "x=4, y=2 → x = 4+2 = 6 → y = 2*2 = 4. Final: x = 6, y = 4.",
        },
      },
      questions: [
        {
          id: "ecs11-u13-trace-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a variable in programming?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A value that never changes"
                    },
                    {
                              "id": "b",
                              "text": "A named storage location whose value can change during execution"
                    },
                    {
                              "id": "c",
                              "text": "A type of loop"
                    },
                    {
                              "id": "d",
                              "text": "A fixed output value"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Variable",
                              "statement": "Named storage, changeable value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A variable stores a value that can be updated during execution.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Named storage location whose value can change"
},
        },
        {
          id: "ecs11-u13-trace-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What are the final values of x and y after this pseudocode?\n\nx = 5\ny = x + 3\nx = x * 2",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tracing assignments",
                              "statement": "Evaluate right side, then store."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "x = 5, then y = x + 3 = 5 + 3 = 8.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Then x = x * 2 = 5 * 2 = 10.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Final values: x = 10, y = 8.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "x = 10, y = 8"
},
        },
        {
          id: "ecs11-u13-trace-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "What does this pseudocode output?\n\ni = 0\nWHILE i < 4\n  OUTPUT i\n  i = i + 1\nENDWHILE",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tracing WHILE loops",
                              "statement": "Loop runs while condition true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "i starts at 0; condition 0 < 4 is true so OUTPUT 0.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "i becomes 1, outputs 1; becomes 2, outputs 2; becomes 3, outputs 3.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "i becomes 4; condition 4 < 4 is false so the loop ends.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Output: 0, 1, 2, 3.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "0, 1, 2, 3"
},
        },
        {
          id: "ecs11-u13-trace-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Trace this pseudocode and report the final value of total:\n\ntotal = 1\nFOR i FROM 1 TO 4\n  total = total * i\nENDFOR",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give the value of total after each iteration.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the final value of total.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "List the values i takes during the loop.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Trace tables",
                              "statement": "Record each variable per step."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "total goes 1*1=1, then *2=2, then *3=6, then *4=24.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "After iterations: 1, 2, 6, 24.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Final total = 24 (which is 4 factorial, 1*2*3*4).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "i takes values 1, 2, 3, 4.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "FOR i FROM 1 TO 4 runs exactly four iterations.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(a) 1, 2, 6, 24 (b) 24 (c) i = 1, 2, 3, 4"
},
        },
        {
          id: "ecs11-u13-trace-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A program is meant to output the sum of 1 to 10 but outputs 55 incorrectly shown as a bug report 'output too large'. Explain how a trace table would help investigate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Debugging with trace tables",
                              "statement": "Compare expected vs actual variable values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First confirm the expected result: 1+2+...+10 = 55, so the output may actually be correct.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Build a trace table with columns for i, total and the loop condition.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Trace each iteration to check total accumulates correctly: 1, 3, 6, 10, ... , 55.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "If a row shows an unexpected value, the faulty statement is identified.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The 'bug' may be a misunderstanding — 55 is the correct sum.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Trace tables turn vague reports into verifiable step-by-step evidence.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Trace to verify each step; 55 is correct for 1..10 — the report may be a misunderstanding."
},
        },
        {
          id: "ecs11-u13-trace-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A program sums the even numbers from 2 to 10.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode using a FOR loop to compute the sum.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Trace it — what is the final sum? Show the running total.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why constants (rather than typing numbers directly) improve such programs.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Loop + trace + constants",
                              "statement": "Accumulate evens; record steps; name fixed values."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "total = 0; FOR i FROM 2 TO 10 STEP 2: total = total + i; NEXT i.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Alternative: loop 1 to 10 and add i only when i is even.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "OUTPUT total at the end.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Running total: 2, then 6, then 12, then 20, then 30.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Steps: 0+2=2; 2+4=6; 6+6=12; 12+8=20; 20+10=30.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "i values: 2, 4, 6, 8, 10 — five iterations.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Final sum = 30.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Constants like START=2, END=10, STEP=2 make the range easy to change.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Named values document intent — MAX_SCORE is clearer than 100.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Changing one constant updates the whole program consistently, reducing errors.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) loop 2..10 step 2 accumulating (b) total = 30 (c) constants ease changes and clarify intent"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u13-pseudocode-notes",
      title: "Pseudocode and Program Design — notes",
      summary: "Pseudocode = structured plain language; variables store changeable values; trace tables verify execution step by step.",
      sections: [
        { heading: "Structures", body: "Sequence, selection (IF...ELSE) and iteration (FOR/WHILE) cover all algorithms." },
        { heading: "Tracing", body: "One row per step per variable — catches logic errors before coding." },
        { heading: "Design habit", body: "Plan in pseudocode first; test with sample data and edge cases." },
      ],
    },
  ],
};
