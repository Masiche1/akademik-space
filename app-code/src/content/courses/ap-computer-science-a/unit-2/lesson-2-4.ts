import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "apcsa-u2-lesson-2-4",
  code: "2-4",
  title: "Methods and Parameters",
  goal: "I CAN write methods with parameters and return values.",
  standards: ["CSA-3.3"],
  vocabulary: [
    { term: "Method", definition: "Reusable block of code with a name." },
    { term: "Parameter", definition: "Variable in method signature receiving argument." },
    { term: "Argument", definition: "Actual value passed to parameter." },
    { term: "Return value", definition: "Result method sends back via return." },
    { term: "void", definition: "Method returning nothing." },
    { term: "Scope", definition: "Variable visibility — local to method/block." },
  ],
  concepts: [
    {
      id: "apcsa-u2-methods",
      title: "Methods",
      skill: "Write and call methods with parameters and return values.",
      lesson: {
        sections: [
          {
            heading: "Method anatomy",
            body: "`returnType name(paramType param, ...) { body; return value; }` — `void` means no return value. Parameters receive ARGUMENTS by value (copies) — changes to parameters inside the method do NOT affect the caller's variables. Return sends a value back.",
          },
          {
            heading: "Pass by value",
            body: "Java passes primitive arguments BY VALUE — the method gets a copy; modifications inside don't affect the original. For objects (arrays, Strings), the REFERENCE is copied — the method can modify the object's contents but can't reassign the caller's variable.",
          },
        ],
        keyFormulas: [
          { name: "Signature", statement: "$\\text{returnType}\\; \\text{name}(\\text{type}\\; \\text{param}, \\ldots)$" },
          { name: "Pass by value", statement: "Primitives copied; object references copied (contents modifiable)" },
        ],
        workedExample: {
          problem: "Does this method modify the caller's variable? `void change(int x) { x = 99; }` called as `change(a)` where `a = 5`.",
          solution: "No — `x` is a copy of `a`'s value; changing `x` inside doesn't affect `a`. After the call, `a` is still 5. For objects like arrays, the reference is copied but contents CAN be modified.",
        },
      },
      questions: [
        {
          id: "apcsa-u2-methods-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A method with no return value is declared ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "int name()"
                    },
                    {
                              "id": "b",
                              "text": "void name()"
                    },
                    {
                              "id": "c",
                              "text": "null name()"
                    },
                    {
                              "id": "d",
                              "text": "empty name()"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "void",
                              "statement": "No return type."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`void` means the method performs an action but returns nothing — use `return;` (bare) to exit early if needed.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "void",
          "commonErrors": [
                    "Using a return type for side-effect methods."
          ]
},
        },
        {
          id: "apcsa-u2-methods-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Java passes primitive arguments ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "by reference"
                    },
                    {
                              "id": "b",
                              "text": "by value — a copy"
                    },
                    {
                              "id": "c",
                              "text": "by pointer"
                    },
                    {
                              "id": "d",
                              "text": "by name"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Pass by value",
                              "statement": "Copies for primitives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primitives are copied — method changes to parameters don't affect caller's variables; object references are also copied but contents remain modifiable.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "By value (copy)",
          "commonErrors": [
                    "Thinking primitives pass by reference."
          ]
},
        },
        {
          id: "apcsa-u2-methods-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does this return? `int f(int x) { return x * 2 + 1; }` called as `f(4)`.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Result",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Substitute and compute",
                              "statement": "$4 \\times 2 + 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(4) = 4 \\times 2 + 1 = 9$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result: 9.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "9",
          "commonErrors": [
                    "Operator precedence errors — multiply before add."
          ]
},
        },
        {
          id: "apcsa-u2-methods-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between passing a primitive and an array to a method — what can the method modify?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Pass semantics",
                              "statement": "Value vs reference copy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primitives: method gets a COPY — can't modify caller's variable; arrays/objects: method gets a COPY OF THE REFERENCE — points to same object, so contents CAN be modified (e.g., `arr[0] = 99` affects caller's array) but reassigning the parameter doesn't affect caller's variable.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example: `void change(int[] a) { a[0] = 99; }` modifies caller's array; `void change(int x) { x = 99; }` does nothing to caller's int.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AP exam tests this distinction — 'can the method modify the argument?' depends on type.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Primitive=copy (no modify); array=ref copy (contents modifiable)",
          "commonErrors": [
                    "Thinking all arguments are unmodifiable or all modifiable."
          ]
},
        },
      ],
    },
  ],
};
