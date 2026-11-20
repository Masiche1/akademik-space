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
                              "text": "Unusual input testing program limits"
                    },
                    {
                              "id": "b",
                              "text": "A fast computer"
                    },
                    {
                              "id": "c",
                              "text": "A type of bug"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "a"
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
