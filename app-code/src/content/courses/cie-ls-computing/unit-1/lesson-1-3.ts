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
                              "text": "String"
                    },
                    {
                              "id": "b",
                              "text": "Integer"
                    },
                    {
                              "id": "c",
                              "text": "Boolean"
                    },
                    {
                              "id": "d",
                              "text": "Float"
                    }
          ],
          "correctChoiceId": "a"
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
