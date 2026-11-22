import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cils-c-u1-lesson-1-3",
  code: "1-3",
  title: "Stage 7 — Variables and Data Types",
  goal: "I CAN use variables of different data types and apply operators correctly.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 7: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
  stage: 7,
  vocabulary: [
    { term: "Variable", definition: "A named storage location whose value can change." },
    { term: "Data type", definition: "The kind of value: integer, float, string, Boolean." },
    { term: "Integer", definition: "Whole number data type." },
    { term: "Float", definition: "Decimal number data type." },
    { term: "String", definition: "Text data type." },
    { term: "Boolean", definition: "True/false data type." },
  ],
  concepts: [
    {
      id: "cils-c-u1-s3-vars",
      title: "Variables and data types",
      skill: "Choose correct types and use operators at Stage 7 level.",
      lesson: {
        sections: [
          {
            heading: "Data types",
            body: "Variables hold typed data: integer (42), float (4.2), string ('hello'), Boolean (true/false). Type matters — '5' as string ≠ 5 as integer; adding strings concatenates, adding numbers calculates.",
          },
          {
            heading: "Operators",
            body: "Arithmetic: + - × ÷, //, %. Comparison: =, ≠, <, >, ≤, ≥. Logic: AND, OR, NOT. String ops: concatenation (+ or join), length.",
          },
        ],
        keyFormulas: [
          { name: "Types", statement: "integer, float, string, Boolean" },
          { name: "Operators", statement: "arith + comparison + logic" },
        ],
        workedExample: {
          problem: "a=7 (integer), b='7' (string). What is a+b vs b+b?",
          solution: "Depends: if + is arithmetic on a and b-as-number → 14; if b is string, a+b may error or concatenate → '77'. Type determines result.",
        },
      },
      questions: [
        {
          id: "cils-c-u1-vr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct type for 'name = \"Sam\"'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Float"
                    },
                    {
                              "id": "b",
                              "text": "String"
                    },
                    {
                              "id": "c",
                              "text": "Boolean"
                    },
                    {
                              "id": "d",
                              "text": "Integer"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "String",
                              "statement": "Text data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quoted text = string type.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "String"
},
        },
        {
          id: "cils-c-u1-vr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the four main data types with one example each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Data types",
                              "statement": "int/float/string/bool."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "integer 5, float 5.5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "string 'hi', Boolean true.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "int/float/string/Boolean"
},
        },
        {
          id: "cils-c-u1-vr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "x=10, y=3. Evaluate: x//y, x%y, x/y, x>y AND y>0.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Operators",
                              "statement": "Division variants, logic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "// = integer division: 3; % = remainder: 1; / = 3.33.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "10>3 true AND 3>0 true → true.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All four evaluated.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3, 1, 3.33, true"
},
        },
        {
          id: "cils-c-u1-vr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define variable, data type, integer, float, string, Boolean. (b) Why does type matter? (c) Evaluate with a=8, b=2: a+b, a-b, a*b, a/b, a//b, a%b. (d) What is '5'+'3' if strings? (e) What do AND/OR/NOT do? (f) Write a Boolean expression for 'age >= 13 AND hasID = true'. (g) Convert 7.0 to integer — valid? (h) Design variables for a bank account (balance, name, isActive).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Variables",
                              "statement": "Types, operators, logic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Wrong type → wrong operation/error.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 10,6,16,4,4,0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) '53' — concatenation not addition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) AND=both true; OR=either; NOT=reverse.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid Boolean expression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Yes — truncate to 7.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid typed variables.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Data types, operators, Boolean logic."
},
        },
        {
          id: "cils-c-u1-vr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the data type of balance = 250.75?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Boolean"
                    },
                    {
                              "id": "b",
                              "text": "String"
                    },
                    {
                              "id": "c",
                              "text": "Integer"
                    },
                    {
                              "id": "d",
                              "text": "Float"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Float",
                              "statement": "Decimal number type."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "250.75 has a decimal point — float.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Float"
},
        },
        {
          id: "cils-c-u1-vr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "x = 14, y = 4. What is x // y?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integer division",
                              "statement": "// discards remainder."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "14 // 4 = 3 (remainder 2 discarded).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "cils-c-u1-vr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 9 % 4?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 1 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Modulo",
                              "statement": "% gives remainder."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "9 divided by 4 leaves remainder 1.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1"
},
        },
        {
          id: "cils-c-u1-vr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "a = 20, b = 6. Evaluate: a+b, a-b, a*b, a//b, a%b.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Operators",
                              "statement": "Arithmetic and division variants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "a+b = 26, a-b = 14.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "a*b = 120, a//b = 3, a%b = 2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All five values correct.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "26, 14, 120, 3, 2"
},
        },
        {
          id: "cils-c-u1-vr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "s1 = 'cat', s2 = 'dog'. What is s1 + s2?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An error"
                    },
                    {
                              "id": "b",
                              "text": "'cat dog'"
                    },
                    {
                              "id": "c",
                              "text": "'dogcat'"
                    },
                    {
                              "id": "d",
                              "text": "'catdog'"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Concatenation",
                              "statement": "+ joins strings end to end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "String + joins without adding space.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "'catdog'"
},
        },
        {
          id: "cils-c-u1-vr-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "n starts at 7. After n = n + 3 then n = n * 2, what is n?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 20 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Variable update",
                              "statement": "Follow assignments in order."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "7+3 = 10, then 10*2 = 20.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "20"
},
        },
        {
          id: "cils-c-u1-vr-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which Boolean expression evaluates to False?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "(3 > 1) AND (5 < 2)"
                    },
                    {
                              "id": "b",
                              "text": "(1 = 1) OR (2 = 3)"
                    },
                    {
                              "id": "c",
                              "text": "(2 < 4) OR (9 > 10)"
                    },
                    {
                              "id": "d",
                              "text": "(3 > 1) AND (5 > 2)"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Boolean logic",
                              "statement": "AND needs both true; OR needs one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "b: true AND false = false; others all true.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(3 > 1) AND (5 < 2)"
},
        },
        {
          id: "cils-c-u1-vr-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "(a) Choose a suitable type for isMember (true/false). (b) Write a Boolean expression for 'score >= 40 AND attendance >= 80'. (c) What does '12' + '3' give if both are strings, and how does it differ from 12 + 3? (d) Trace: x = 5; x = x * 2; x = x + 1 — final x?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Variables",
                              "statement": "Types, Boolean logic, evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Boolean.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) score >= 40 AND attendance >= 80.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) '123' (concatenation) vs 15 (addition).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 11.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Boolean type, valid expression, type effect, 11"
},
        },
        {
          id: "cils-c-u1-vr-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a Boolean value?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'false'"
                    },
                    {
                              "id": "b",
                              "text": "1"
                    },
                    {
                              "id": "c",
                              "text": "true"
                    },
                    {
                              "id": "d",
                              "text": "'true'"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Boolean",
                              "statement": "True/false without quotes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quoted 'true' is a string; bare true is Boolean.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "true"
},
        },
        {
          id: "cils-c-u1-vr-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 100 // 7?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 14 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integer division",
                              "statement": "// floors to whole number."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "100 // 7 = 14 (remainder 2 discarded).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "14"
},
        },
        {
          id: "cils-c-u1-vr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "If '5' and '3' are both strings, what does '5' + '3' produce?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "'5' '3'"
                    },
                    {
                              "id": "c",
                              "text": "An error"
                    },
                    {
                              "id": "d",
                              "text": "'53'"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Concatenation",
                              "statement": "Strings join, not add."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strings concatenate → '53', not 8.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "'53'"
},
        },
        {
          id: "cils-c-u1-vr-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define variable and data type. (b) Choose types for: examScore (whole mark), studentName, passed (yes/no), averageMark (decimal). (c) Write a Boolean expression for 'age >= 13 AND hasID = true'. (d) Evaluate m = 7, n = 2: m//n, m%n, m*n. (e) What is '7' + '2' when both are strings? (f) Design variables for a pizza order (size, toppings, price).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Variables",
                              "statement": "Types, operators, Boolean logic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Variable = named storage; type = kind of value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) integer, string, Boolean, float.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid expression e.g. age >= 13 AND hasID = true.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 3, 1, 14.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) '72' — concatenation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid typed variables for pizza order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Types, expressions, operators, design."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u1-vr-notes",
      title: "Variables — notes",
      summary: "Types: integer, float, string, Boolean. Operators: arithmetic, comparison, logic. Type determines behaviour.",
      sections: [
        { heading: "Key idea", body: "'5' string + '3' string = '53', not 8." },
        { heading: "Logic", body: "AND/OR/NOT combine Boolean conditions." },
      ],
    },
  ],
};
