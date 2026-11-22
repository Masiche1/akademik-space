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
                              "text": "A network device"
                    },
                    {
                              "id": "b",
                              "text": "A screen colour"
                    },
                    {
                              "id": "c",
                              "text": "A type of computer"
                    },
                    {
                              "id": "d",
                              "text": "A named reusable block of code"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "cipc-u2-fn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'calling' a function mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Renaming it" },
            { id: "b", text: "Printing it on paper" },
            { id: "c", text: "Deleting the function" },
            { id: "d", text: "Running the function's code by using its name" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Function call", statement: "Invoking stored code." }],
            steps: [
              { reasoning: "Calling a function runs its stored code wherever the name is used.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Running the function's code by name",
          },
        },
        {
          id: "cipc-u2-fn-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why use a function instead of writing the same code twice?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reuse", statement: "Write once, use many times." }],
            steps: [
              { reasoning: "Less code to write and fewer mistakes.", marks: 1, markCode: "M" },
              { reasoning: "One fix updates every place it is used.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Write once, reuse; easier to fix.",
          },
        },
        {
          id: "cipc-u2-fn-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "define triple(n): return n × 3. What does triple(4) return?",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Function call", statement: "n = 4 → 4 × 3." }],
            steps: [
              { reasoning: "n = 4, so return 4 × 3 = 12.", marks: 1, markCode: "M" },
              { reasoning: "triple(4) returns 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cipc-u2-fn-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 'define greet(name): return 'Hi ' + name', what is the parameter?",
          response: { type: "mcq", choices: [
            { id: "a", text: "greet" },
            { id: "b", text: "name" },
            { id: "c", text: "'Hi '" },
            { id: "d", text: "return" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Parameter", statement: "Input slot in the definition." }],
            steps: [
              { reasoning: "The parameter is the placeholder 'name' that receives the value.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** name",
          },
        },
        {
          id: "cipc-u2-fn-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "define square(n): return n × n. What do square(5) and square(0) return? Explain what the parameter does.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Function evaluation", statement: "Parameter takes the call's value." }],
            steps: [
              { reasoning: "square(5): n=5 → 25.", marks: 1, markCode: "M" },
              { reasoning: "square(0): n=0 → 0.", marks: 1, markCode: "M" },
              { reasoning: "The parameter n receives whatever value is passed in the call.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25 and 0; n holds the passed value.",
          },
        },
        {
          id: "cipc-u2-fn-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the difference between a function and a procedure?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A procedure returns a value; a function does not" },
            { id: "b", text: "A function returns a value; a procedure just does actions" },
            { id: "c", text: "They are identical" },
            { id: "d", text: "Functions cannot have parameters" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Function vs procedure", statement: "Return value vs actions." }],
            steps: [
              { reasoning: "Functions return a result value; procedures perform actions without returning.", marks: 1, markCode: "M" },
              { reasoning: "e.g. 'return n×2' is a function; 'move forward' is a procedure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Function returns a value; procedure does actions",
          },
        },
        {
          id: "cipc-u2-fn-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "define add(a, b): return a + b. What does add(7, 5) return? How many parameters does it have?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Multiple parameters", statement: "Each parameter gets one argument." }],
            steps: [
              { reasoning: "a=7, b=5 → return 12.", marks: 1, markCode: "M" },
              { reasoning: "It has 2 parameters (a and b).", marks: 1, markCode: "M" },
              { reasoning: "add(7, 5) returns 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12; 2 parameters.",
          },
        },
        {
          id: "cipc-u2-fn-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'return value'? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Return value", statement: "Result handed back to caller." }],
            steps: [
              { reasoning: "Return value = the result a function sends back when called.", marks: 1, markCode: "M" },
              { reasoning: "Example: double(4) returns 8 — 8 is the return value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Result sent back; e.g. double(4) returns 8.",
          },
        },
        {
          id: "cipc-u2-fn-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "define halve(n): return n ÷ 2. What does halve(18) return?",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Function evaluation", statement: "18 ÷ 2." }],
            steps: [
              { reasoning: "n = 18 → 18 ÷ 2 = 9.", marks: 1, markCode: "M" },
              { reasoning: "halve(18) returns 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cipc-u2-fn-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "How could parameters make a 'drawSquare' function more flexible? Explain with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Parameter flexibility", statement: "Parameters let one function do many jobs." }],
            steps: [
              { reasoning: "Add a parameter for side length: drawSquare(size).", marks: 1, markCode: "M" },
              { reasoning: "drawSquare(10) draws small; drawSquare(100) draws large — same code.", marks: 1, markCode: "M" },
              { reasoning: "One function replaces many fixed-size versions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Parameter 'size' lets one function draw any square size.",
          },
        },
        {
          id: "cipc-u2-fn-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Rewrite 'move forward 10; turn right 90' repeated 4 times as a function with a parameter. Write the definition.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Designing functions", statement: "Wrap repeated pattern with parameter." }],
            steps: [
              { reasoning: "define drawSide(length): move forward length; turn right 90.", marks: 1, markCode: "M" },
              { reasoning: "Parameter 'length' controls how far it moves.", marks: 1, markCode: "M" },
              { reasoning: "Call it 4 times (or in a loop) to draw the square.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "define drawSide(length): move forward length; turn right 90.",
          },
        },
        {
          id: "cipc-u2-fn-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define function, parameter, call. (b) Why use functions instead of repeating code? (c) define area(w,h): return w×h — what does area(3,4) return? (d) What is a return value? (e) How could parameters make drawSquare flexible? (f) What is the difference between a function and a procedure? (g) Rewrite 'repeat move+turn 90 four times' as a function. (h) Design a function 'greet' used three times in a program.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Functions", statement: "Definitions, parameters, calls, returns, design." }],
            steps: [
              { reasoning: "(a) Function=reusable code; parameter=input slot; call=run it.", marks: 1, markCode: "M" },
              { reasoning: "(b) Write once, reuse; fewer errors, easier fixes.", marks: 1, markCode: "M" },
              { reasoning: "(c) 12.", marks: 1, markCode: "M" },
              { reasoning: "(d) Result sent back to the caller.", marks: 1, markCode: "M" },
              { reasoning: "(e) size parameter → any square size.", marks: 1, markCode: "M" },
              { reasoning: "(f) Function returns value; procedure does actions.", marks: 1, markCode: "M" },
              { reasoning: "(g) define side(len): move len; turn 90 — call 4×.", marks: 1, markCode: "M" },
              { reasoning: "(h) define greet(n): say 'Hi '+n — call for 3 names.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Function/parameter/call, reuse, area=12, return value, flexible parameters, function vs procedure, square function, greet design.",
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
