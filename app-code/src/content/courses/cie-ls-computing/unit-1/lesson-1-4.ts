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
                              "text": "A type of loop"
                    },
                    {
                              "id": "b",
                              "text": "A file format"
                    },
                    {
                              "id": "c",
                              "text": "A computer part"
                    },
                    {
                              "id": "d",
                              "text": "Input passed to a function when called"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "cils-c-u1-fn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'return' statement do in a function?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Prints text to the screen"
                    },
                    {
                              "id": "b",
                              "text": "Ends the whole program"
                    },
                    {
                              "id": "c",
                              "text": "Sends a result back to where the function was called"
                    },
                    {
                              "id": "d",
                              "text": "Deletes a variable"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Return value",
                              "statement": "Result sent back to caller."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "return passes a value back to the calling code.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sends result back"
},
        },
        {
          id: "cils-c-u1-fn-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "def double(n): return n * 2. What does double(6) return?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 12 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Function calls",
                              "statement": "Substitute argument for parameter."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "6 * 2 = 12.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "12"
},
        },
        {
          id: "cils-c-u1-fn-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "def add(a, b): return a + b. What does add(7, 8) return?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 15 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Parameters",
                              "statement": "a=7, b=8 at call."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "7 + 8 = 15.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "15"
},
        },
        {
          id: "cils-c-u1-fn-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "def square(x): return x * x. (a) What does square(9) return? (b) Why is writing this as a function better than writing '9 * 9' each time? (c) What is the parameter and what is the argument in square(9)?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Functions",
                              "statement": "Calls, parameters, reuse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 81.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Reusable for any input; change once.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Parameter = x; argument = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "81; reuse; param x, arg 9"
},
        },
        {
          id: "cils-c-u1-fn-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'local scope' in a function?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of loop"
                    },
                    {
                              "id": "b",
                              "text": "A variable that exists only inside the function"
                    },
                    {
                              "id": "c",
                              "text": "A network setting"
                    },
                    {
                              "id": "d",
                              "text": "A variable visible to the whole program"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Local scope",
                              "statement": "Visible only inside function."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Local variables don't exist outside the function.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Inside function only"
},
        },
        {
          id: "cils-c-u1-fn-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "def f(n): return n * 2 + 1. What does f(5) return?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 11 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Function evaluation",
                              "statement": "Apply operations in order."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "5 * 2 + 1 = 11.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "11"
},
        },
        {
          id: "cils-c-u1-fn-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two different functions both use a variable named 'total'. Does this cause a conflict?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No — local scope keeps them separate"
                    },
                    {
                              "id": "b",
                              "text": "Yes — duplicate names always crash"
                    },
                    {
                              "id": "c",
                              "text": "Yes — the second function overwrites the first"
                    },
                    {
                              "id": "d",
                              "text": "Only if both return a value"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Scope",
                              "statement": "Local variables are independent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each function's 'total' is local — no conflict.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "No conflict — local scope"
},
        },
        {
          id: "cils-c-u1-fn-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define parameter and argument. (b) Write def is_positive(n) returning a Boolean. (c) What does it return for n = -3? (d) Give an example showing why local variables are safer than global ones. (e) Give one reason modularity makes programs easier to debug.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Functions",
                              "statement": "Params, scope, modularity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Parameter = named input in definition; argument = value passed at call.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) def is_positive(n): return n > 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) False.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Local var can't be changed by other code; global can be overwritten accidentally.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Each function tested separately; bugs isolated.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Parameters, Boolean function, scope, modularity."
},
        },
        {
          id: "cils-c-u1-fn-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the call area(4, 5), what are 4 and 5 called?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Arguments"
                    },
                    {
                              "id": "b",
                              "text": "Variables"
                    },
                    {
                              "id": "c",
                              "text": "Parameters"
                    },
                    {
                              "id": "d",
                              "text": "Return values"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Argument",
                              "statement": "Value passed at call time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Values supplied when calling are arguments.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Arguments"
},
        },
        {
          id: "cils-c-u1-fn-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "def cube(n): return n * n * n. What does cube(4) return?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 64 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Function calls",
                              "statement": "n = 4 substituted."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "4 * 4 * 4 = 64.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "64"
},
        },
        {
          id: "cils-c-u1-fn-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "def area(w, h): return w * h. What does area(3, 7) return?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "21"
                    },
                    {
                              "id": "b",
                              "text": "An error"
                    },
                    {
                              "id": "c",
                              "text": "37"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Function calls",
                              "statement": "w=3, h=7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 * 7 = 21.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "21"
},
        },
        {
          id: "cils-c-u1-fn-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define function, parameter, return value, local scope. (b) Write def discount(price): return price * 0.9. (c) What does discount(50) return? (d) Can a function call another function? Give an example. (e) Why should global variables be used sparingly? (f) Design two functions for a simple calculator.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Functions",
                              "statement": "Params, returns, scope, composition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All four definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) def discount(price): return price * 0.9.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 45.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Yes, e.g. def total(x,y): return add(x,y) * tax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Globals visible everywhere — easy to change accidentally.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid calculator function set.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Functions, composition, scope, design."
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
