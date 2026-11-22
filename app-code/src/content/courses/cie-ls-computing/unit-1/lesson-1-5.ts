import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "cils-c-u1-lesson-1-5",
  code: "1-5",
  title: "Stage 8 — Debugging and Systematic Testing",
  goal: "I CAN test programs systematically, identify bugs and apply debugging strategies.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
  stage: 8,
  vocabulary: [
    { term: "Test plan", definition: "A list of cases a program will be checked against." },
    { term: "Edge case", definition: "Unusual input testing limits — 0, negative, max value." },
    { term: "Trace table", definition: "A table tracking variable values step by step." },
    { term: "Logic error", definition: "Bug where program runs but gives wrong results." },
    { term: "Syntax error", definition: "Code that won't run — wrong commands/format." },
    { term: "Dry run", definition: "Stepping through code mentally or on paper." },
  ],
  concepts: [
    {
      id: "cils-c-u1-s5-debug",
      title: "Testing and debugging",
      skill: "Plan tests, trace execution and fix bugs at Stage 8 level.",
      lesson: {
        sections: [
          {
            heading: "Test planning",
            body: "Good testing needs a plan: normal cases, edge cases (0, negative, huge numbers), and boundary values. Write expected outputs before running — then compare. A program that only works for 'nice' inputs isn't finished.",
          },
          {
            heading: "Debugging strategies",
            body: "Syntax errors stop the program — read the error message. Logic errors run but compute wrong — use a trace table to follow variable values step by step. Isolate the bug: comment out sections, test functions individually.",
          },
        ],
        keyFormulas: [
          { name: "Test plan", statement: "normal + edge + boundary cases" },
          { name: "Trace table", statement: "track variables step by step" },
        ],
        workedExample: {
          problem: "Program returns wrong average. Trace: total=0, count=0, for each: total+=x, count+=1, avg=total/count. Input: 4,8. What's wrong?",
          solution: "If loop skipped or count not incremented, avg wrong. Check loop runs and count updates — trace table shows count=2 needed.",
        },
      },
      questions: [
        {
          id: "cils-c-u1-dg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an edge case?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of bug"
                    },
                    {
                              "id": "b",
                              "text": "Unusual input testing program limits"
                    },
                    {
                              "id": "c",
                              "text": "A fast computer"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Edge case",
                              "statement": "Boundary testing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Edge cases test extremes: 0, negative, max.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Boundary input test"
},
        },
        {
          id: "cils-c-u1-dg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a syntax error and a logic error?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Error types",
                              "statement": "Won't run vs wrong result."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Syntax = code won't run; logic = runs but wrong.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example for each.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Run-fail vs wrong-result"
},
        },
        {
          id: "cils-c-u1-dg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A program computing 'multiply by 2' returns correct results except for input 0 (returns 1). How do you debug this?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Debugging",
                              "statement": "Isolate and trace."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Edge case reveals bug — 0 special.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check for IF/initialisation affecting 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trace with input 0 step by step.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Edge-case bug; trace input 0"
},
        },
        {
          id: "cils-c-u1-dg-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define test plan, edge case, trace table, logic error, syntax error, dry run. (b) Design a test plan for 'is_adult(age)'. (c) What's an edge case for it? (d) Trace this: x=5; x=x+3; x=x*2 — final x? (e) Program crashes — first thing to check? (f) Program runs but wrong answer — strategy? (g) Why test before and after each fix? (h) Design a trace table for 'sum of 1 to n'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Testing",
                              "statement": "Plans, traces, error types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid test plan with cases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Edge: age=0, 17, 18, 120.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 16.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Error message/syntax first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Trace table, isolate sections.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Fix may break other parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid trace table.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Testing methodology, tracing, debugging."
},
        },
        {
          id: "cils-c-u1-dg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a trace table?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A table tracking variable values step by step"
                    },
                    {
                              "id": "b",
                              "text": "A type of error message"
                    },
                    {
                              "id": "c",
                              "text": "A network diagram"
                    },
                    {
                              "id": "d",
                              "text": "A list of test cases"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trace table",
                              "statement": "Step-by-step variable tracking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trace tables record each variable's value at each step.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Variable tracking table"
},
        },
        {
          id: "cils-c-u1-dg-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "x = 3; x = x + 4; x = x * 2. What is the final value of x?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 14 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Tracing",
                              "statement": "Follow assignments in order."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "3+4 = 7, then 7*2 = 14.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "14"
},
        },
        {
          id: "cils-c-u1-dg-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A program adds the values 2, 3 and 4 into total starting at 0. What is the final total?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 9 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Accumulation",
                              "statement": "Add each value in turn."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "0+2+3+4 = 9.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "9"
},
        },
        {
          id: "cils-c-u1-dg-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A program won't run and shows 'IndentationError: unexpected indent'. What type of error is this, and what is the first thing to check?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Syntax error",
                              "statement": "Code won't run due to format."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Syntax error — program won't run.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check indentation of the reported line.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fix spacing, rerun, retest.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Syntax error; fix indentation"
},
        },
        {
          id: "cils-c-u1-dg-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a program asking 'Enter your age', which input is an edge case?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0"
                    },
                    {
                              "id": "b",
                              "text": "30"
                    },
                    {
                              "id": "c",
                              "text": "25"
                    },
                    {
                              "id": "d",
                              "text": "40"
                    }
          ],
          "aorrectChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Edge case",
                              "statement": "Unusual input testing limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0 is outside normal ages — tests program limits.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "0"
},
        },
        {
          id: "cils-c-u1-dg-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An average program uses values 4, 8 and 12. What is the sum used in the calculation?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 24 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Averages",
                              "statement": "Average = total / count."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "4 + 8 + 12 = 24.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "24"
},
        },
        {
          id: "cils-c-u1-dg-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A program runs without errors but produces the wrong answer. What is the best first debugging tool?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rewrite the whole program"
                    },
                    {
                              "id": "b",
                              "text": "Delete the output statement"
                    },
                    {
                              "id": "c",
                              "text": "Change every line randomly"
                    },
                    {
                              "id": "d",
                              "text": "Use a trace table to follow variable values"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Debugging",
                              "statement": "Trace to find logic errors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Logic errors need tracing, not guessing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Trace table"
},
        },
        {
          id: "cils-c-u1-dg-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define edge case and give three examples for a password checker. (b) What is a 'dry run'? (c) Why write expected outputs before running a test? (d) Why retest the whole program after each fix? (e) Design a short test plan for a function 'is_palindrome(word)'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Testing",
                              "statement": "Edge cases, dry runs, regression."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Edge case = limit input; e.g. empty password, 1 char, very long password.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Stepping through code mentally/on paper before running.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Expected outputs written first prevent self-deception.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Fix may break other parts — regression check.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid test plan: 'level', 'racecar', 'a', ''.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Edge cases, dry run, test plans."
},
        },
        {
          id: "cils-c-u1-dg-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A program stops immediately with 'SyntaxError: invalid syntax'. What does this tell you?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The program runs but gives wrong results"
                    },
                    {
                              "id": "b",
                              "text": "The program won't run — code format is wrong"
                    },
                    {
                              "id": "c",
                              "text": "The network is down"
                    },
                    {
                              "id": "d",
                              "text": "The computer needs more memory"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Syntax error",
                              "statement": "Won't run — format wrong."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Syntax errors stop execution at the reported line.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Won't run; fix format"
},
        },
        {
          id: "cils-c-u1-dg-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "count = 0. A loop runs 5 times, each doing count = count + 1. What is count at the end?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 5 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Loop tracing",
                              "statement": "Count iterations."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "count goes 1,2,3,4,5 → 5.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "5"
},
        },
        {
          id: "cils-c-u1-dg-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A program accepts exam scores from 0 to 100. Which input is a boundary case?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "60"
                    },
                    {
                              "id": "b",
                              "text": "50"
                    },
                    {
                              "id": "c",
                              "text": "100"
                    },
                    {
                              "id": "d",
                              "text": "75"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Boundary case",
                              "statement": "Value at the limit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100 is the maximum allowed — boundary of range.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "100"
},
        },
        {
          id: "cils-c-u1-dg-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define test plan, trace table, logic error, syntax error, dry run. (b) Trace: a = 2, b = 3, c = a * b, c = c + 1 — final c? (c) A program crashes immediately — what do you check first? (d) A program runs but gives wrong results — what strategy do you use? (e) Why write expected outputs before running tests? (f) Give one edge case for a program that divides two numbers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Testing",
                              "statement": "Plans, traces, error types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 7.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Error message/syntax first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Trace table; isolate sections.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Prevents accepting wrong output as correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) e.g. divisor = 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Testing methodology, tracing, debugging."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u1-dg-notes",
      title: "Debugging — notes",
      summary: "Test normal + edge cases; trace variables; syntax=won't run, logic=wrong result.",
      sections: [
        { heading: "Key idea", body: "Systematic testing beats guessing — plan cases, trace values." },
        { heading: "Trace table", body: "Track each variable step-by-step to find where it goes wrong." },
      ],
    },
  ],
};
