import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "cipc-u2-lesson-2-5",
  code: "2-5",
  title: "Stage 4 — Functions and Procedures",
  goal: "I CAN create reusable blocks of code using functions and explain why they help.",
  standards: ["Cambridge Primary Computing 0059 Stage 4: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
  stage: 4,
  vocabulary: [
    { term: "Function", definition: "A named block of code that performs a task and can be reused." },
    { term: "Procedure", definition: "A function that performs actions without returning a value." },
    { term: "Parameter", definition: "Input passed to a function to customise it." },
    { term: "Return value", definition: "The result a function sends back." },
    { term: "Call", definition: "Using a function by name in code." },
    { term: "Reuse", definition: "Using the same code for multiple tasks." },
  ],
  concepts: [
    {
      id: "cipc-u2-s4-func",
      title: "Functions and reuse",
      skill: "Define, call and parameterise functions at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "What is a function?",
            body: "A function packages instructions under a name so you can reuse them: 'define drawSquare(size): move size steps; turn 90; repeat 4'. Call it anywhere with drawSquare(50) or drawSquare(100) — the parameter changes behaviour.",
          },
          {
            heading: "Why functions help",
            body: "Less repetition = shorter, easier-to-fix programs. Change the function once and every call updates. Parameters make one function flexible for many uses.",
          },
        ],
        keyFormulas: [
          { name: "define/call", statement: "name(params): body ... call name(args)" },
          { name: "Parameter", statement: "input that customises the function" },
        ],
        workedExample: {
          problem: "define greet(name): say 'Hello ' + name. What does greet('Ana') output?",
          solution: "'Hello Ana' — the parameter name is replaced by the argument 'Ana'.",
        },
      },
      questions: [
        {
          id: "cipc-u2-fn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a function?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A named reusable block of code"
                    },
                    {
                              "id": "b",
                              "text": "A type of computer"
                    },
                    {
                              "id": "c",
                              "text": "A network device"
                    },
                    {
                              "id": "d",
                              "text": "A screen colour"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Function",
                              "statement": "Reusable named code."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Function = packaged instructions callable by name.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Reusable named code block"
},
        },
        {
          id: "cipc-u2-fn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a parameter and how does it differ from the code inside the function?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Parameters",
                              "statement": "Inputs vs body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Parameter = input value passed when calling.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Body = fixed instructions using the parameter.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Input vs fixed instructions"
},
        },
        {
          id: "cipc-u2-fn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "define double(n): return n × 2. What does double(7) return? What does double(0) return?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Function calls",
                              "statement": "Parameter substitution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "double(7) = 14.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "double(0) = 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Parameter n replaced by argument.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "14 and 0"
},
        },
        {
          id: "cipc-u2-fn-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define function, parameter, call. (b) Why use functions instead of repeating code? (c) define area(w,h): return w×h — what does area(3,4) return? (d) What is a return value? (e) How could parameters make drawSquare flexible? (f) What is the difference between a function and a procedure? (g) Rewrite 'repeat move+turn 90 four times' as a function. (h) Design a function 'greet' used three times in a program.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Functions",
                              "statement": "Definition, parameters, returns, reuse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Function=reusable code; parameter=input; call=use by name.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Shorter, easier to fix, consistent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 12.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Result sent back by function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) size parameter → different square sizes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Function returns value; procedure just acts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) define square(): move+turn90 repeat4.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) define greet(n): say hello n; call 3×.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Functions, parameters, returns, reuse benefits."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-fn-notes",
      title: "Functions — notes",
      summary: "Function = named reusable code. Parameters customise behaviour; calls pass arguments; return sends result back.",
      sections: [
        { heading: "Key idea", body: "Write once, call many times — DRY principle." },
        { heading: "Parameters", body: "Same function, different inputs → different outputs." },
      ],
    },
  ],
};
