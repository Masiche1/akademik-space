import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "cils-c-u1-lesson-1-4",
  code: "1-4",
  title: "Stage 8 — Functions and Modular Programming",
  goal: "I CAN design and use functions to organise programs into reusable modules.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
  stage: 8,
  vocabulary: [
    { term: "Function", definition: "A named block of code performing a task, callable with parameters." },
    { term: "Parameter", definition: "Input value passed to a function." },
    { term: "Return value", definition: "Result a function sends back." },
    { term: "Modularity", definition: "Organising code into independent reusable parts." },
    { term: "Scope", definition: "Where a variable is visible/accessible." },
    { term: "Abstraction layer", definition: "Hiding complex details behind a simple interface." },
  ],
  concepts: [
    {
      id: "cils-c-u1-s4-func",
      title: "Functions and modularity",
      skill: "Create parameterised functions and reason about scope at Stage 8 level.",
      lesson: {
        sections: [
          {
            heading: "Functions as modules",
            body: "Functions package code into reusable units: def area(w,h): return w*h. Parameters customise; return values send results back. Modularity means each function does ONE thing well — easier to test, debug and reuse.",
          },
          {
            heading: "Scope",
            body: "Variables inside a function are local — they don't exist outside. This prevents accidental changes: two functions can both have 'x' without conflict. Global variables are visible everywhere — use sparingly.",
          },
        ],
        keyFormulas: [
          { name: "def/call", statement: "function(params): body ... call with args" },
          { name: "Scope", statement: "local inside function; global everywhere" },
        ],
        workedExample: {
          problem: "def double(n): return n*2. What is double(5)? What is double('a')?",
          solution: "10. 'aa'? Depends — if * concatenates strings, 'aa'; if type-checked, error. Type matters.",
        },
      },
      questions: [
        {
          id: "cils-c-u1-fn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a function parameter?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Input passed to a function when called"
                    },
                    {
                              "id": "b",
                              "text": "A type of loop"
                    },
                    {
                              "id": "c",
                              "text": "A computer part"
                    },
                    {
                              "id": "d",
                              "text": "A file format"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Parameter",
                              "statement": "Function input."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Parameters receive values at call time.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Input to function"
},
        },
        {
          id: "cils-c-u1-fn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "def greet(name): print('Hi '+name). What does greet('Lee') output? What is the parameter?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Functions",
                              "statement": "Calls and parameters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Outputs 'Hi Lee'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Parameter = name; argument = 'Lee'.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Hi Lee; param=name"
},
        },
        {
          id: "cils-c-u1-fn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "def area(w,h): return w*h. What does area(4,5) return? Why is this better than writing the multiplication twice?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reuse",
                              "statement": "One definition, many calls."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Change once → all calls update; less duplication.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Easier to test and maintain.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "20; reuse benefits"
},
        },
        {
          id: "cils-c-u1-fn-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define function, parameter, return value, modularity, scope, abstraction layer. (b) Write def cube(n). (c) What does cube(3) return? (d) What is local vs global scope? (e) Why use functions instead of repeating code? (f) Write def is_even(n) returning Boolean. (g) Can a function call another function? (h) Design a function set for a quiz game.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Functions",
                              "statement": "Params, returns, scope, reuse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) def cube(n): return n*n*n.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 27.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Local=inside only; global=everywhere.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) DRY, easier fixes, consistency.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) def is_even(n): return n%2==0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Yes — composition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid function set.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Functions, parameters, scope, modularity."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u1-fn-notes",
      title: "Functions — notes",
      summary: "Functions package reusable code. Parameters customise; returns send results; local scope protects variables.",
      sections: [
        { heading: "Key idea", body: "Modularity = one job per function, easy to test and reuse." },
        { heading: "Scope", body: "Local variables stay inside functions — safe from outside changes." },
      ],
    },
  ],
};
