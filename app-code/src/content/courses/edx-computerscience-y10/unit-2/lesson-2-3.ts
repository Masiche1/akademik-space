import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "ecs10-u2-lesson-2-3",
  code: "2-3",
  title: "String Manipulation and Functions",
  goal: "I CAN manipulate strings and use subroutines.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming"],
  vocabulary: [
    {
      term: "Subroutine",
      definition: "Named block of code performing a task.",
    },
    { term: "Parameter", definition: "Value passed to a subroutine." },
    { term: "Return value", definition: "Result sent back from subroutine." },
    { term: "Concatenation", definition: "Joining strings together." },
    { term: "Substring", definition: "Part of a string." },
  ],
  concepts: [
    {
      id: "ecs10-u2-strings",
      title: "String Operations",
      skill: "Use string functions: length, substring, concatenation.",
      lesson: {
        sections: [
          {
            heading: "String functions",
            body: "**LENGTH(s)**: number of characters. **SUBSTRING(s, start, length)**: extract part — `SUBSTRING('Hello', 2, 3)` = 'ell'. **CONCATENATE/ +**: join strings — 'Hello' + ' ' + 'World'. **UPPERCASE/LOWERCASE**: change case.\n\n**Character access**: `s[i]` gets character at position i (0 or 1-indexed depending on language).",
          },
          {
            heading: "String processing",
            body: "**Example**: count vowels in name — loop through characters, check if in 'aeiou'. **Palindromes**: string equals its reverse — 'level'. **Searching**: find if substring exists — 'Find @ in email'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Get first letter of 'Alice'.",
          solution: "s[0] or SUBSTRING('Alice',1,1) = 'A'.",
        },
      },
      questions: [
        {
          id: "ecs10-u2-strings-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does `LENGTH('Hello')` return?",
          response: {
            type: "numeric",
            parts: [{ label: "answer", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "LENGTH",
                statement: "Counts characters.",
              },
            ],
            steps: [
              {
                reasoning: "'Hello' has 5 characters.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
            commonErrors: ["Includes spaces."],
          },
        },
        {
          id: "ecs10-u2-strings-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the result of `'Hello' + ' ' + 'World'`?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Concatenation",
                statement: "+ joins strings.",
              },
            ],
            steps: [
              {
                reasoning: "Concatenation joins strings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Result: 'Hello World'.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "'Hello World'",
            commonErrors: ["Adds numbers.", "No space."],
          },
        },
        {
          id: "ecs10-u2-strings-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to check if a string is a palindrome.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Palindrome",
                statement: "String = reverse.",
              },
            ],
            steps: [
              { reasoning: "Reverse the string.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Compare original with reversed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "If equal → palindrome ('level', 'radar').",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Case-insensitive comparison usually needed.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Reverse and compare — equal = palindrome.",
            commonErrors: ["No method.", "Case issue."],
          },
        },
        {
          id: "ecs10-u2-strings-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write pseudocode to count vowels in a string.",
          parts: [
            { label: "a", prompt: "Write the pseudocode.", marks: 4 },
            { label: "b", prompt: "Explain the loop logic.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vowel count",
                statement: "Loop + check each char.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) DECLARE count=0; FOR i=1 TO LENGTH(s) DO IF s[i] IN 'aeiou' THEN count=count+1.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) OUTPUT count.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Loop iterates each character position.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) IF checks if char is a vowel, increments count.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) loop+vowel check (b) iterate chars, count vowels",
            commonErrors: ["No loop.", "Wrong check."],
          },
        },
      ],
    },
    {
      id: "ecs10-u2-functions",
      title: "Subroutines and Functions",
      skill: "Define and call subroutines with parameters and return values.",
      lesson: {
        sections: [
          {
            heading: "Why subroutines?",
            body: "**Benefits**: reusable code, modularity, easier debugging, abstraction. **Procedure**: performs task, no return value. **Function**: returns a value.\n\n**Definition**: `PROCEDURE greet(name)` ... `ENDPROCEDURE`. **Call**: `greet('Alice')`. **Parameters**: values passed in — `name` inside procedure. **Return**: `RETURN result`.",
          },
          {
            heading: "Example",
            body: "`FUNCTION add(a, b) RETURN a + b END FUNCTION`. Call: `result = add(5, 3)` → result = 8. Parameters a=5, b=3 passed; return value 8 sent back.\n\n**Scope**: parameters local to subroutine; global variables accessible everywhere (use carefully).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Define function to double a number.",
          solution: "FUNCTION double(x) RETURN x*2 END FUNCTION",
        },
      },
      questions: [
        {
          id: "ecs10-u2-functions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a subroutine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Named block of reusable code" },
              { id: "b", text: "A data type" },
              { id: "c", text: "A type of variable" },
              { id: "d", text: "A network device" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subroutine",
                statement: "Reusable code block.",
              },
            ],
            steps: [
              {
                reasoning: "Subroutine = reusable named code.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Reusable code block",
            commonErrors: ["Variable confused."],
          },
        },
        {
          id: "ecs10-u2-functions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of using subroutines.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subroutine benefits",
                statement: "Reuse, modularity.",
              },
            ],
            steps: [
              {
                reasoning: "Code reuse — write once, call many times.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Easier debugging — isolate problems.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Modularity — break complex programs into parts.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Reuse, debugging, modularity.",
            commonErrors: ["Only one.", "No benefit."],
          },
        },
        {
          id: "ecs10-u2-functions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a procedure and a function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Procedure vs function",
                statement: "No return vs returns value.",
              },
            ],
            steps: [
              {
                reasoning: "Procedure: performs task, no return value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Function: returns a value to caller.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Function used in expressions; procedure called as statement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: print (procedure) vs calculate (function).",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Procedure = no return; function = returns value.",
            commonErrors: ["Same thing.", "No example."],
          },
        },
        {
          id: "ecs10-u2-functions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a function `max(a,b)` that returns the larger number.",
          parts: [
            { label: "a", prompt: "Write the function definition.", marks: 4 },
            { label: "b", prompt: "Show how to call it.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function definition",
                statement: "IF compare RETURN.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) FUNCTION max(a,b): IF a > b THEN RETURN a ELSE RETURN b.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct return logic.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) result = max(10, 20) → result = 20.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Parameters passed, return value captured.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) IF-RETURN function (b) result = max(x,y)",
            commonErrors: ["No return.", "Wrong call syntax."],
          },
        },
      ],
    },
  ],
};
