import type { Lesson } from "../../../types.ts";

export const lesson144: Lesson = {
  id: "ciealc-u3-lesson-3-4",
  code: "3-4",
  title: "Programming Constructs: Variables, Control Flow, Functions",
  goal: "I CAN use variables, selection, iteration and functions in programming.",
  standards: [
    "Cambridge A Level Computer Science 9618: programming",
    "9618: control structures",
  ],

  vocabulary: [
    { term: "Variable", definition: "Named storage location for data." },
    { term: "Selection", definition: "If/else conditional execution." },
    { term: "Iteration", definition: "Repeating code — for/while loops." },
    {
      term: "Function",
      definition: "Reusable block of code with inputs/outputs.",
    },
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
          solution:
            "FUNCTION factorial(n): IF n <= 1 THEN RETURN 1; ELSE RETURN n * factorial(n-1); ENDIF; ENDFUNCTION.",
        },
      },
      questions: [
        {
          id: "ciealc-u3-ct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a variable?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A function",
              },
              {
                id: "b",
                text: "Named storage location for data",
              },
              {
                id: "c",
                text: "A type of loop",
              },
              {
                id: "d",
                text: "A file",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variable",
                statement: "Named data storage.",
              },
            ],
            steps: [
              {
                reasoning: "Variable stores data with a name.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Named data storage",
          },
        },
        {
          id: "ciealc-u3-ct-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between FOR and WHILE loops?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FOR vs WHILE",
                statement: "Count vs condition.",
              },
            ],
            steps: [
              {
                reasoning: "FOR=known iteration count; WHILE=condition-based.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "FOR uses counter; WHILE checks condition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Count vs condition",
          },
        },
        {
          id: "ciealc-u3-ct-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why use functions? Give 3 advantages.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Functions",
                statement: "Reusable code blocks.",
              },
            ],
            steps: [
              {
                reasoning: "Reusability — write once, use many times.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Modularity — break into manageable parts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Testability — test functions independently.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reuse, modularity, testability",
          },
        },
        {
          id: "ciealc-u3-ct-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define variable, selection, iteration, function, parameter, return value, local/global scope. (b) What is FOR loop? (c) What is WHILE loop? (d) What is IF/ELSE? (e) Write pseudocode for a function that doubles a number. (f) What is recursion? (g) Why use functions? (h) Write pseudocode for bubble sort.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Programming",
                statement: "Constructs, functions, loops.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All seven definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Known-count loop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Condition-based loop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Conditional execution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Valid doubling function.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Function calls itself.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Three advantages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid bubble sort pseudocode.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Programming constructs and functions.",
          },
        },
        {
          id: "ciealc-u3-ct-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When should a FOR loop be used instead of a WHILE loop?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When the loop should never end" },
              {
                id: "b",
                text: "When the number of iterations is known in advance",
              },
              { id: "c", text: "Only for printing output" },
              { id: "d", text: "When no variables are needed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FOR vs WHILE",
                statement: "FOR = known count; WHILE = condition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "FOR loops iterate a fixed number of times; WHILE repeats until a condition fails.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Known iteration count",
          },
        },
        {
          id: "ciealc-u3-ct-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pseudocode: x = 1; WHILE x < 5 DO x = x + 1; ENDWHILE. What value does x hold when the loop ends? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "WHILE loop trace",
                statement: "Loop ends when condition becomes false.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "x increments until x = 5, when 5 < 5 is false.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "ciealc-u3-ct-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the purpose of the RETURN statement in a function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To delete a variable" },
              { id: "b", text: "To create a new function" },
              { id: "c", text: "To start the program" },
              { id: "d", text: "To send a result back to the caller" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Return value",
                statement: "Function output sent to caller.",
              },
            ],
            steps: [
              {
                reasoning:
                  "RETURN passes a value back so the calling code can use it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Sends result to caller",
          },
        },
        {
          id: "ciealc-u3-ct-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pseudocode: total = 0; FOR i = 1 TO 4 DO total = total + i; ENDFOR. What is the value of total? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Accumulator trace",
                statement: "Sum 1+2+3+4 = 10.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "total = 1+2+3+4 = 10.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "ciealc-u3-ct-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between a local variable and a global variable.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variable scope",
                statement: "Local = inside function; global = whole program.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A local variable exists only inside the function where it is declared.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A global variable is accessible throughout the whole program.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Local=function scope; global=program scope",
          },
        },
        {
          id: "ciealc-u3-ct-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which data type should be used to store a whole number such as a student's age?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Boolean" },
              { id: "b", text: "Character" },
              { id: "c", text: "Integer" },
              { id: "d", text: "String" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data types",
                statement: "Integer stores whole numbers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Whole numbers are stored as integers; strings hold text.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** Integer",
          },
        },
        {
          id: "ciealc-u3-ct-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A recursive function computes factorial as: factorial(n) = n × factorial(n − 1), with factorial(1) = 1. What is the value of factorial(4)? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 24 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Factorial",
                statement: "n! = n × (n−1) × ... × 1.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "4! = 4 × 3 × 2 × 1 = 24.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "ciealc-u3-ct-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two advantages of using functions in a program.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Function benefits",
                statement: "Reusability, modularity, testability.",
              },
            ],
            steps: [
              {
                reasoning: "Code can be reused, avoiding duplication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Functions make code modular and easier to test and maintain.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Reuse and modularity/testability",
          },
        },
        {
          id: "ciealc-u3-ct-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the BREAK statement do inside a loop?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It skips to the next iteration" },
              { id: "b", text: "It exits the loop immediately" },
              { id: "c", text: "It pauses the loop" },
              { id: "d", text: "It restarts the loop" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "BREAK",
                statement: "Exits the loop immediately.",
              },
            ],
            steps: [
              {
                reasoning:
                  "BREAK terminates the loop; CONTINUE would skip to the next iteration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Exits the loop immediately",
          },
        },
        {
          id: "ciealc-u3-ct-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pseudocode: attempts = 0; WHILE attempts < 3 DO attempts = attempts + 1; ENDWHILE. How many times does the loop body execute? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "WHILE loop count",
                statement: "Runs while condition is true.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "attempts goes 0→1→2→3; the loop runs 3 times.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciealc-u3-ct-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write pseudocode for a function isEven(n) that returns TRUE if n is even and FALSE otherwise.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Function design",
                statement: "Use MOD operator and IF selection.",
              },
            ],
            steps: [
              {
                reasoning: "Define FUNCTION isEven(n) with parameter n.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "IF n MOD 2 = 0 THEN RETURN TRUE ELSE RETURN FALSE (with ENDIF).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Close with ENDFUNCTION.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "IF n MOD 2 = 0 THEN RETURN TRUE ELSE RETURN FALSE",
          },
        },
        {
          id: "ciealc-u3-ct-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the difference between a parameter and an argument in a function call?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An argument is always a string" },
              {
                id: "b",
                text: "A parameter stores the result; an argument stores the input",
              },
              {
                id: "c",
                text: "A parameter is the variable in the function definition; an argument is the value passed in the call",
              },
              { id: "d", text: "They are exactly the same thing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parameter vs argument",
                statement: "Definition variable vs call value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Parameters are declared in the function; arguments are supplied when calling it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** Parameter in definition; argument in call",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u3-ct-notes",
      title: "Constructs — notes",
      summary:
        "Variables store data; selection=IF/ELSE; iteration=FOR/WHILE; functions=reusable code.",
      sections: [
        {
          heading: "Key idea",
          body: "Functions enable modular, testable code — essential for complex programs.",
        },
        {
          heading: "Loops",
          body: "FOR for known counts; WHILE for conditions; nested for complex patterns.",
        },
      ],
    },
  ],
};
