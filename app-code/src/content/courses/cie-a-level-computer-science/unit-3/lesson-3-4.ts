import type { Lesson } from "../../../types.ts";

export const lesson144: Lesson = {
  id: "ciealc-u3-lesson-3-4",
  code: "3-4",
  title: "Programming Constructs: Variables, Control Flow, Functions",
  goal: "I CAN use variables, selection, iteration and functions in programming.",
  standards: ["Cambridge A Level Computer Science 9618: programming", "9618: control structures"],
  
  vocabulary: [
    { term: "Variable", definition: "Named storage location for data." },
    { term: "Selection", definition: "If/else conditional execution." },
    { term: "Iteration", definition: "Repeating code — for/while loops." },
    { term: "Function", definition: "Reusable block of code with inputs/outputs." },
    { term: "Parameter", definition: "Value passed into a function." },
    { term: "Return value", definition: "Result sent back from a function." },
  ],
  concepts: [
    {
      id: "ciealc-u3-s4-ctrl",
      title: "Programming constructs",
      skill: "Use core programming constructs at A Level.",
      lesson: {
        sections: [
          {
            heading: "Variables and control flow",
            body: "Variables store data with types (int, float, string, boolean). Selection: IF/ELSE IF/ELSE. Iteration: FOR (known count), WHILE (unknown count), nested loops. BREAK/CONTINUE for loop control.",
          },
          {
            heading: "Functions",
            body: "Functions take parameters, return values. Advantages: reusability, modularity, testability. Scope: local variables inside function vs global.",
          },
        ],
        keyFormulas: [
          { name: "Selection", statement: "IF/ELSE IF/ELSE" },
          { name: "Iteration", statement: "FOR (count), WHILE (condition)" },
          { name: "Function", statement: "inputs→process→return" },
        ],
        workedExample: {
          problem: "Write a function to calculate factorial recursively.",
          solution: "FUNCTION factorial(n): IF n <= 1 THEN RETURN 1; ELSE RETURN n * factorial(n-1); ENDIF; ENDFUNCTION.",
        },
      },
      questions: [
        {
          id: "ciealc-u3-ct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a variable?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Named storage location for data"
                    },
                    {
                              "id": "b",
                              "text": "A type of loop"
                    },
                    {
                              "id": "c",
                              "text": "A function"
                    },
                    {
                              "id": "d",
                              "text": "A file"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Variable",
                              "statement": "Named data storage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variable stores data with a name.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Named data storage"
},
        },
        {
          id: "ciealc-u3-ct-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between FOR and WHILE loops?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "FOR vs WHILE",
                              "statement": "Count vs condition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "FOR=known iteration count; WHILE=condition-based.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "FOR uses counter; WHILE checks condition.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Count vs condition"
},
        },
        {
          id: "ciealc-u3-ct-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why use functions? Give 3 advantages.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Functions",
                              "statement": "Reusable code blocks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reusability — write once, use many times.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Modularity — break into manageable parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Testability — test functions independently.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Reuse, modularity, testability"
},
        },
        {
          id: "ciealc-u3-ct-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define variable, selection, iteration, function, parameter, return value, local/global scope. (b) What is FOR loop? (c) What is WHILE loop? (d) What is IF/ELSE? (e) Write pseudocode for a function that doubles a number. (f) What is recursion? (g) Why use functions? (h) Write pseudocode for bubble sort.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Programming",
                              "statement": "Constructs, functions, loops."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Known-count loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Condition-based loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Conditional execution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid doubling function.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Function calls itself.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Three advantages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid bubble sort pseudocode.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Programming constructs and functions."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u3-ct-notes",
      title: "Constructs — notes",
      summary: "Variables store data; selection=IF/ELSE; iteration=FOR/WHILE; functions=reusable code.",
      sections: [
        { heading: "Key idea", body: "Functions enable modular, testable code — essential for complex programs." },
        { heading: "Loops", body: "FOR for known counts; WHILE for conditions; nested for complex patterns." },
      ],
    },
  ],
};
