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
                              "text": "name = 'Sam'"
                    },
                    {
                              "id": "b",
                              "text": "name = 42"
                    },
                    {
                              "id": "c",
                              "text": "name = true"
                    },
                    {
                              "id": "d",
                              "text": "name = score"
                    }
          ],
          "correctChoiceId": "a"
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
