import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cipc-u2-lesson-2-1",
  code: "2-1",
  title: "Stage 4 — Variables, Operators and Data Types",
  goal: "I CAN use variables of different types and apply operators to calculate and compare values.",
  standards: ["Cambridge Primary Computing 0059 Stage 4: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
  stage: 4,
  vocabulary: [
    { term: "Data type", definition: "The kind of value a variable holds — number, text, Boolean." },
    { term: "Number", definition: "Numeric data used for maths — scores, counts." },
    { term: "String", definition: "Text data — letters and words in quotes." },
    { term: "Operator", definition: "A symbol that performs an operation — +, -, ×, ÷." },
    { term: "Assignment", definition: "Giving a variable a value, e.g. score = 10." },
    { term: "Concatenate", definition: "Joining text strings together." },
  ],
  concepts: [
    {
      id: "cipc-u2-s4-vars",
      title: "Data types and operators",
      skill: "Use number/string/Boolean variables and arithmetic operators at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Data types",
            body: "Variables hold different types: numbers (score = 10), strings/text (name = 'Sam'), and Booleans (gameOver = true). Using the right type matters — you can't add numbers to text meaningfully, but you can join text with strings.",
          },
          {
            heading: "Operators",
            body: "Operators act on values: +, -, ×, ÷ for maths; =, <, > for comparisons; 'join' for text. 'set score to score + 10' uses both assignment and an operator. Parentheses control order: (a + b) × c.",
          },
        ],
        keyFormulas: [
          { name: "Types", statement: "number, string, Boolean" },
          { name: "Operators", statement: "+ - × ÷ = < > join" },
        ],
        workedExample: {
          problem: "name = 'Sam'; set name to name join ' Smith'. What is name? What type is it?",
          solution: "name = 'Sam Smith' — a string. The join operator concatenates text.",
        },
      },
      questions: [
        {
          id: "cipc-u2-dt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a valid string variable assignment?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "name = 42"
                    },
                    {
                              "id": "b",
                              "text": "name = score"
                    },
                    {
                              "id": "c",
                              "text": "name = true"
                    },
                    {
                              "id": "d",
                              "text": "name = 'Sam'"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "String",
                              "statement": "Text in quotes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strings are quoted text; numbers and Booleans differ.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "name = 'Sam'"
},
        },
        {
          id: "cipc-u2-dt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What do +, -, ×, ÷ do, and what do =, <, > do?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Operators",
                              "statement": "Maths vs comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "+ - × ÷ = arithmetic operators.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "= equal, < less, > greater — comparisons.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Arithmetic vs comparison operators"
},
        },
        {
          id: "cipc-u2-dt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "score = 10; set score to score × 2 + 5. What is score? Explain each operator's effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Operators and assignment",
                              "statement": "Compute then assign."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 × 2 = 20.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "20 + 5 = 25.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "score = 25.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "score = 25"
},
        },
        {
          id: "cipc-u2-dt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Name three data types with examples. (b) What is an operator? (c) Trace: lives=3, set lives to lives - 1, then set lives to lives × 2. (d) What does 'join' do to strings? (e) Why can't you add '5' + '3' meaningfully as numbers? (f) What are comparison operators used for? (g) Compute: (10 + 5) × 2 vs 10 + 5 × 2 — why differ? (h) Design a variable setup for a timer counting down from 60.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Data types and operators",
                              "statement": "Types, ops, precedence, variables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) number/string/Boolean with examples.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Symbol performing operations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 3→2→4.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Concatenates text: 'a' join 'b' = 'ab'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) They're strings — join gives '53' not 8.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) IF conditions/decisions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Brackets first: 30 vs 20 — order matters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) time=60, change by -1 each second.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Data types, operators, precedence, string join, timer design."
},
        },
        {
          id: "cipc-u2-dt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a valid integer variable assignment?",
          response: { type: "mcq", choices: [
            { id: "a", text: "score = 25" },
            { id: "b", text: "score = hello" },
            { id: "c", text: "score = true" },
            { id: "d", text: "score = '25'" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Integer", statement: "Whole number, no quotes." }],
            steps: [
              { reasoning: "Integers are whole numbers assigned without quotes.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** score = 25",
          },
        },
        {
          id: "cipc-u2-dt-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two data types and give an example value for each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Data types", statement: "Number, string, Boolean." }],
            steps: [
              { reasoning: "Two valid types: number (e.g. 42), string (e.g. 'cat'), Boolean (true/false).", marks: 1, markCode: "M" },
              { reasoning: "Each type has a matching example value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. number 42; string 'cat'; Boolean true.",
          },
        },
        {
          id: "cipc-u2-dt-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "x = 8. Compute x × 3 - 4. What is the result?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Order of operations", statement: "Multiply before subtract." }],
            steps: [
              { reasoning: "8 × 3 = 24; 24 - 4 = 20.", marks: 1, markCode: "M" },
              { reasoning: "Result is 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cipc-u2-dt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the '÷' operator do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Divides one number by another" },
            { id: "b", text: "Joins two strings" },
            { id: "c", text: "Multiplies numbers" },
            { id: "d", text: "Compares two numbers" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Division operator", statement: "÷ divides." }],
            steps: [
              { reasoning: "÷ is the division operator.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Divides one number by another",
          },
        },
        {
          id: "cipc-u2-dt-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trace: n = 6; set n to n + 4; set n to n × 2. What is n at the end?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tracing expressions", statement: "Compute right side, then assign." }],
            steps: [
              { reasoning: "n = 6 + 4 = 10.", marks: 1, markCode: "M" },
              { reasoning: "n = 10 × 2 = 20.", marks: 1, markCode: "M" },
              { reasoning: "Final n = 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cipc-u2-dt-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the difference between '10 + 5 × 2' and '(10 + 5) × 2'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Both give 20" },
            { id: "b", text: "First is 20, second is 30 — brackets change order" },
            { id: "c", text: "Brackets do nothing" },
            { id: "d", text: "Both give 30" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Operator precedence", statement: "× before +; brackets override." }],
            steps: [
              { reasoning: "10 + 5 × 2 = 10 + 10 = 20 (multiply first).", marks: 1, markCode: "M" },
              { reasoning: "(10 + 5) × 2 = 15 × 2 = 30 — brackets force addition first.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 20 vs 30 — brackets change the order",
          },
        },
        {
          id: "cipc-u2-dt-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What does the 'join' operator do to strings? Show an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Join", statement: "Concatenates strings." }],
            steps: [
              { reasoning: "Join combines two strings end to end.", marks: 1, markCode: "M" },
              { reasoning: "Example: 'Hello' join 'World' = 'HelloWorld' (or 'Hello World' with space).", marks: 1, markCode: "M" },
              { reasoning: "Result is a single longer string.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Combines strings; 'Hello' join 'World' = 'HelloWorld'.",
          },
        },
        {
          id: "cipc-u2-dt-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a Boolean value? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Boolean", statement: "True or false." }],
            steps: [
              { reasoning: "Boolean = a value that is only true or false.", marks: 1, markCode: "M" },
              { reasoning: "Example: isRaining = true.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "True or false; e.g. isRaining = true.",
          },
        },
        {
          id: "cipc-u2-dt-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "a = 12, b = 3. Compute a ÷ b + a. What is the result?",
          response: { type: "numeric", parts: [{ label: "a", answer: 16 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Order of operations", statement: "Divide first, then add." }],
            steps: [
              { reasoning: "12 ÷ 3 = 4; 4 + 12 = 16.", marks: 1, markCode: "M" },
              { reasoning: "Result is 16.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16",
          },
        },
        {
          id: "cipc-u2-dt-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can't you meaningfully compute '5' + '3' as numbers if they are stored as strings?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Type awareness", statement: "Quoted values are text." }],
            steps: [
              { reasoning: "Quoted values '5' and '3' are strings (text), not numbers.", marks: 1, markCode: "M" },
              { reasoning: "Adding strings joins them: '5' + '3' = '53', not 8.", marks: 1, markCode: "M" },
              { reasoning: "To add numerically, store them without quotes as numbers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strings join to '53', not 8; use numbers for maths.",
          },
        },
        {
          id: "cipc-u2-dt-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compute both: (7 - 2) × 4 and 7 - 2 × 4. Explain why they differ.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Precedence", statement: "Brackets vs multiply-first." }],
            steps: [
              { reasoning: "(7 - 2) × 4 = 5 × 4 = 20.", marks: 1, markCode: "M" },
              { reasoning: "7 - 2 × 4 = 7 - 8 = -1 (multiply before subtract).", marks: 1, markCode: "M" },
              { reasoning: "Brackets force subtraction first; without them × has priority.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 vs -1 — brackets change the order.",
          },
        },
        {
          id: "cipc-u2-dt-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name three data types with examples. (b) What is an operator? (c) Trace: lives=3, set lives to lives - 1, then set lives to lives × 2. (d) What does 'join' do to strings? (e) Why can't you add '5' + '3' meaningfully as numbers? (f) What are comparison operators used for? (g) Compute: (10 + 5) × 2 vs 10 + 5 × 2 — why differ? (h) Design a variable setup for a timer counting down from 60.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Data types and operators", statement: "Types, ops, precedence, variables." }],
            steps: [
              { reasoning: "(a) number/string/Boolean with examples.", marks: 1, markCode: "M" },
              { reasoning: "(b) Symbol performing operations.", marks: 1, markCode: "M" },
              { reasoning: "(c) 3-1=2, 2×2=4.", marks: 1, markCode: "M" },
              { reasoning: "(d) Join combines strings end to end.", marks: 1, markCode: "M" },
              { reasoning: "(e) Quoted values are strings; joining gives '53' not 8.", marks: 1, markCode: "M" },
              { reasoning: "(f) Comparisons produce true/false for decisions.", marks: 1, markCode: "M" },
              { reasoning: "(g) 30 vs 20 — brackets vs multiply-first.", marks: 1, markCode: "M" },
              { reasoning: "(h) timer = 60; change timer by -1 each second.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Types, operators, trace, join, string addition, comparisons, precedence, countdown design.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-dt-notes",
      title: "Data types — notes",
      summary: "Numbers, strings, Booleans. Operators: arithmetic + comparison. Brackets control order; 'join' merges text.",
      sections: [
        { heading: "Key idea", body: "Right type + right operator = correct result." },
        { heading: "Watch", body: "'5' as string + '3' gives '53', not 8." },
      ],
    },
  ],
};
