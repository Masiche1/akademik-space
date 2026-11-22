import type { Lesson } from "../../../types.ts";

export const lesson212: Lesson = {
  id: "ecs10-u2-lesson-2-2",
  code: "2-2",
  title: "Variables and Data Types",
  goal: "I CAN declare variables and distinguish data types.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming"],
  vocabulary: [
    { term: "Variable", definition: "Named storage location for data." },
    { term: "Constant", definition: "Variable whose value never changes." },
    { term: "Integer", definition: "Whole number data type." },
    { term: "String", definition: "Text data type." },
    { term: "Boolean", definition: "True/false data type." },
  ],
  concepts: [
    {
      id: "ecs10-u2-variables",
      title: "Variables and Assignment",
      skill: "Declare, assign and use variables correctly.",
      lesson: {
        sections: [
          {
            heading: "Variables",
            body: "**Variable**: named memory location holding a value — `age = 15`. **Assignment**: `=` stores value (not equals comparison). **Constants**: fixed values — `PI = 3.14`, shouldn't change.\n\n**Rules**: names can't start with digit, no spaces, meaningful names preferred (`totalScore` not `x`).",
          },
          {
            heading: "Using variables",
            body: "Variables enable reusable code — change value once, used everywhere. **Example**: `price = 10`, `total = price * quantity` — change price, total updates automatically.\n\n**Scope**: variable available where declared — global vs local.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write pseudocode: input two numbers, output sum.",
          solution: "INPUT a, b; sum = a + b; OUTPUT sum",
        },
      },
      questions: [
        {
          id: "ecs10-u2-variables-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fixed value" },
              { id: "b", text: "A hardware device" },
              { id: "c", text: "A network" },
              { id: "d", text: "Named storage for data that can change" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variable",
                statement: "Named storage, changeable.",
              },
            ],
            steps: [
              {
                reasoning: "Variable = named, changeable storage.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Named storage",
            commonErrors: ["Constant confused."],
          },
        },
        {
          id: "ecs10-u2-variables-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a variable and a constant?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Variable vs constant",
                statement: "Changeable vs fixed.",
              },
            ],
            steps: [
              {
                reasoning: "Variable value can change during program.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Constant value never changes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: score (variable) vs PI (constant).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Variable changes; constant fixed.",
            commonErrors: ["Same thing.", "No example."],
          },
        },
        {
          id: "ecs10-u2-variables-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why meaningful variable names matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Naming",
                statement: "Readability and maintainability.",
              },
            ],
            steps: [
              {
                reasoning: "`totalScore` clearer than `x`.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Easier to understand code purpose.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Easier to debug and modify.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduces errors when sharing code.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Clarity → easier understanding, debugging, maintenance.",
            commonErrors: ["No benefit.", "Only style."],
          },
        },
        {
          id: "ecs10-u2-variables-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write pseudocode to swap two variables a and b.",
          parts: [
            { label: "a", prompt: "Write the pseudocode.", marks: 4 },
            {
              label: "b",
              prompt: "Explain why a temporary variable is needed.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Swap",
                statement: "temp = a; a = b; b = temp.",
              },
            ],
            steps: [
              {
                reasoning: "(a) temp = a; a = b; b = temp.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct order of operations.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Direct swap `a=b; b=a` loses original a.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Temp stores original value safely.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) temp=a;a=b;b=temp (b) prevents data loss",
            commonErrors: ["Wrong order.", "No temp."],
          },
        },
      ],
    },
    {
      id: "ecs10-u2-datatypes",
      title: "Data Types",
      skill: "Distinguish integer, real, string, Boolean and char.",
      lesson: {
        sections: [
          {
            heading: "Primitive types",
            body: "**Integer**: whole numbers — 42, -7. **Real/float**: decimals — 3.14. **Char**: single character — 'A'. **String**: text sequence — 'Hello'. **Boolean**: TRUE/FALSE.\n\n**Choosing type**: age → integer, price → real, name → string, isLoggedIn → Boolean.",
          },
          {
            heading: "Type operations",
            body: "**Arithmetic**: + - * / on numbers. **String concatenation**: `+` joins strings — 'Hello' + 'World'. **Comparison**: =, <>, <, >. **Type conversion**: string '5' → integer 5 for maths.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What's wrong with `age = '16'` for calculations?",
          solution: "String can't do arithmetic — need integer 16.",
        },
      },
      questions: [
        {
          id: "ecs10-u2-datatypes-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which data type stores TRUE/FALSE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "String" },
              { id: "b", text: "Integer" },
              { id: "c", text: "Real" },
              { id: "d", text: "Boolean" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Boolean", statement: "True/false." },
            ],
            steps: [
              { reasoning: "Boolean = TRUE/FALSE.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Boolean",
            commonErrors: ["Integer confused."],
          },
        },
        {
          id: "ecs10-u2-datatypes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give the correct data type for: name, age, height, isStudent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data types",
                statement: "Match type to data.",
              },
            ],
            steps: [
              {
                reasoning: "name = string, age = integer.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "height = real, isStudent = Boolean.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "All four correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "string, integer, real, Boolean",
            commonErrors: ["Wrong types.", "Only some."],
          },
        },
        {
          id: "ecs10-u2-datatypes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what happens if you try `'5' + '3'` in programming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Type coercion",
                statement: "Strings concatenate.",
              },
            ],
            steps: [
              {
                reasoning: "Strings concatenate — result '53' not 8.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Need conversion to integer for arithmetic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "`'5' + '3'` = '53' (text).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Type errors cause bugs — check types.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "'53' — strings concatenate, not add.",
            commonErrors: ["Says 8.", "No conversion."],
          },
        },
        {
          id: "ecs10-u2-datatypes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write pseudocode to calculate average of three test scores.",
          parts: [
            {
              label: "a",
              prompt: "Declare variables with correct types.",
              marks: 3,
            },
            { label: "b", prompt: "Calculate and output average.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Typed variables",
                statement: "Integer scores, real average.",
              },
            ],
            steps: [
              {
                reasoning: "(a) DECLARE score1, score2, score3 AS INTEGER.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) DECLARE average AS REAL.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) INPUT scores.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) average = (score1+score2+score3)/3.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) OUTPUT average.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) typed declarations (b) sum/3 output",
            commonErrors: ["Wrong types.", "Integer division issue."],
          },
        },
      ],
    },
    {
      id: "ecs10-u2-validation",
      title: "Input Validation",
      skill: "Use validation techniques to ensure correct data entry.",
      lesson: {
        sections: [
          {
            heading: "Why validate?",
            body: "Invalid data causes crashes, wrong results, security issues. **Validation**: checks data meets rules before accepting. **Verification**: confirms data entered correctly (e.g., retype password).",
          },
          {
            heading: "Validation types",
            body: "**Presence check**: field not empty. **Length check**: within limits. **Range check**: number within bounds — age 0-120. **Format check**: matches pattern — email has @. **Type check**: correct data type. **Lookup check**: value in allowed list.\n\nExample: `IF age < 0 OR age > 120 THEN OUTPUT 'Invalid'`.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Validate age input 0-120.",
          solution: "IF age >= 0 AND age <= 120 THEN accept ELSE reject",
        },
      },
      questions: [
        {
          id: "ecs10-u2-validation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is validation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Printing data" },
              { id: "b", text: "Encrypting data" },
              { id: "c", text: "Checking data meets rules before accepting" },
              { id: "d", text: "Deleting data" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Validation",
                statement: "Check rules before accept.",
              },
            ],
            steps: [
              {
                reasoning: "Validation = rule checking.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Check rules",
            commonErrors: ["Verification confused."],
          },
        },
        {
          id: "ecs10-u2-validation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of validation with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Validation types",
                statement: "Range, format, length.",
              },
            ],
            steps: [
              {
                reasoning: "Range check — age between 0-120.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Format check — email contains @.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Length check — password 8+ chars.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Range, format, length checks.",
            commonErrors: ["Only one.", "No examples."],
          },
        },
        {
          id: "ecs10-u2-validation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between validation and verification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Validation vs verification",
                statement: "Rules vs accuracy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Validation: checks data meets rules — before processing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Verification: confirms data entered correctly — e.g., retype.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Validation catches errors; verification catches typos.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both needed for data quality.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Validation = rules; verification = accuracy.",
            commonErrors: ["Same thing.", "No difference."],
          },
        },
        {
          id: "ecs10-u2-validation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write pseudocode to validate a password: 8+ chars, contains a digit.",
          parts: [
            { label: "a", prompt: "Write the validation logic.", marks: 4 },
            { label: "b", prompt: "Explain each check.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Validation logic",
                statement: "Length + digit checks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) INPUT password; IF LENGTH(password) >= 8 AND contains digit THEN accept.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct combined conditions.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Length check ensures minimum size.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Digit check adds complexity/security.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) length+digit checks (b) security rationale",
            commonErrors: ["Only one check.", "No explanation."],
          },
        },
      ],
    },
  ],
};
