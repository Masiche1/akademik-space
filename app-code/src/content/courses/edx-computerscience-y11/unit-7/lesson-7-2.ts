import type { Lesson } from "../../../types.ts";

export const lesson332: Lesson = {
  id: "ecs11-u7-lesson-7-2",
  code: "7-2",
  title: "Boolean Logic",
  goal: "I CAN use Boolean operators, complete truth tables and write logic expressions.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Boolean logic and truth tables"],
  
  vocabulary: [
    { term: "Boolean", definition: "A data type with only two values: TRUE (1) and FALSE (0)." },
    { term: "NOT", definition: "Unary operator that reverses the input: NOT 1 = 0." },
    { term: "AND", definition: "Binary operator; output is 1 only when both inputs are 1." },
    { term: "OR", definition: "Binary operator; output is 1 when at least one input is 1." },
    { term: "XOR", definition: "Binary operator; output is 1 when exactly one input is 1 (inputs differ)." },
    { term: "Truth table", definition: "A table listing every possible input combination and the resulting output." },
    { term: "Logic expression", definition: "A symbolic statement combining inputs with operators, e.g. A AND NOT B." },
  ],
  concepts: [
    {
      id: "ecs11-u7-boolean-operators",
      title: "Boolean Operators and Truth Tables",
      skill: "Apply NOT, AND, OR and XOR and complete truth tables.",
      lesson: {
        sections: [
          {
            heading: "The basic operators",
            body: "**NOT** has one input and reverses it: NOT 0 = 1, NOT 1 = 0. **AND** outputs 1 only when both inputs are 1. **OR** outputs 1 when at least one input is 1. **XOR** outputs 1 when the inputs are different (exactly one is 1).\n\nTwo-input operators have 4 possible input combinations, so their truth tables have 4 rows (or 8 rows for three inputs).",
          },
          {
            heading: "Reading truth tables",
            body: "Truth tables list inputs in binary counting order: 00, 01, 10, 11 for two inputs. The output column is the operator's result for each row.\n\n**Quick reference** — output is 1 for: AND only on row 11 (1 row); OR on rows 01, 10, 11 (3 rows); XOR on rows 01 and 10 (2 rows). Memorising these counts makes exam questions faster.",
          },
        ],
        keyFormulas: [
          { name: "NOT", statement: "NOT 0 = 1, NOT 1 = 0" },
          { name: "AND", statement: "1 only when both inputs are 1" },
          { name: "OR", statement: "1 when at least one input is 1" },
          { name: "XOR", statement: "1 when exactly one input is 1" },
        ],
        workedExample: {
          problem: "Complete the truth table for A AND NOT B.",
          solution: "Rows (A,B): 00 -> 0, 01 -> 0, 10 -> 1, 11 -> 0. The output is 1 only on row A=1, B=0.",
        },
      },
      questions: [
        {
          id: "ecs11-u7-boolean-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the output of NOT 1?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0"
                    },
                    {
                              "id": "b",
                              "text": "1"
                    },
                    {
                              "id": "c",
                              "text": "2"
                    },
                    {
                              "id": "d",
                              "text": "undefined"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "NOT operator",
                              "statement": "Reverses its single input: NOT 1 = 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NOT inverts the input, so NOT 1 = 0.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** 0",
          "commonErrors": [
                    "Thinking NOT returns the same value."
          ]
},
        },
        {
          id: "ecs11-u7-boolean-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many rows does the truth table for a logic circuit with 3 inputs have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Rows",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Truth table size",
                              "statement": "n inputs produce 2^n rows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each input can be 0 or 1, so rows = 2^3.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "2^3 = 8 rows.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Answering 6 (counting combinations incorrectly)."
          ]
},
        },
        {
          id: "ecs11-u7-boolean-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the outputs of the OR operator for the input pairs 00, 01, 10 and 11.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OR operator",
                              "statement": "Output is 1 when at least one input is 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "00 -> 0 (neither input is 1).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "01 -> 1 and 10 -> 1 (one input is 1).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "11 -> 1 (both inputs are 1).",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "0, 1, 1, 1",
          "commonErrors": [
                    "Writing 0 for row 11, confusing OR with AND."
          ]
},
        },
        {
          id: "ecs11-u7-boolean-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the expression (A AND B) OR NOT C when A = 1, B = 0 and C = 0.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Operator precedence",
                              "statement": "NOT is applied first, then AND, then OR."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaluate NOT C: NOT 0 = 1.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Evaluate A AND B: 1 AND 0 = 0.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Combine with OR: 0 OR 1 = 1.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Final result is 1 (TRUE).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Correct order of evaluation stated or implied.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "1 (TRUE)",
          "commonErrors": [
                    "Evaluating left-to-right and getting a different answer."
          ]
},
        },
        {
          id: "ecs11-u7-boolean-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Consider the logic expression E = A AND NOT B.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Complete the truth table for E for inputs 00, 01, 10 and 11.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State on how many rows the output E is 1.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND with NOT",
                              "statement": "E = 1 only when A = 1 and B = 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) NOT B gives 1,0,1,0 for B = 0,0,1,1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) A AND NOT B gives 0, 0, 1, 0.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) All four rows listed correctly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Only row 10 produces output 1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Count = 1 row.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Cross-checked against the completed table.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 0, 0, 1, 0  (b) 1 row",
          "commonErrors": [
                    "Treating NOT B as applying to the whole expression.",
                    "Counting 2 rows instead of 1."
          ]
},
        },
        {
          id: "ecs11-u7-boolean-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A security alarm sounds when motion is detected AND it is night-time. Let M = motion detected, N = night-time.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a logic expression for the alarm output A.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Complete the truth table and state which input combination triggers the alarm.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND condition",
                              "statement": "Both conditions must be true, so the operator is AND."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Both conditions must hold, so A = M AND N.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Expression correctly links the two named inputs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Output labelled A (or equivalent).",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Truth table rows (M,N): 00->0, 01->0, 10->0, 11->1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) All four rows correct.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Alarm triggers only when M = 1 and N = 1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Interpretation matches the 'AND' requirement in words.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) A = M AND N  (b) triggers at M=1, N=1",
          "commonErrors": [
                    "Using OR, which would trigger the alarm in daytime too."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u7-logic-expressions",
      title: "Logic Expressions and Simplification",
      skill: "Write, evaluate and simplify logic expressions using Boolean identities.",
      lesson: {
        sections: [
          {
            heading: "Writing expressions",
            body: "English conditions translate directly into logic:\n\n- 'A and B' -> A AND B\n- 'A or B' -> A OR B\n- 'not A' -> NOT A\n- 'A but not B' -> A AND NOT B\n- 'either A or B but not both' -> A XOR B\n\nPrecedence is NOT first, then AND, then OR. Brackets override this: (A OR B) AND C is different from A OR (B AND C).",
          },
          {
            heading: "Simplifying with identities",
            body: "Useful identities let expressions be shortened:\n\n- A AND 1 = A ; A AND 0 = 0\n- A OR 1 = 1 ; A OR 0 = A\n- A AND A = A ; A OR A = A\n- A AND NOT A = 0 ; A OR NOT A = 1\n\nExample: (A AND 1) OR (B AND 0) = A OR 0 = A. A truth table is the safest way to check a simplification — both forms must give identical outputs.",
          },
        ],
        keyFormulas: [
          { name: "Identity laws", statement: "A AND 1 = A, A OR 0 = A, A AND 0 = 0, A OR 1 = 1" },
          { name: "Complement laws", statement: "A AND NOT A = 0, A OR NOT A = 1" },
          { name: "Idempotent laws", statement: "A AND A = A, A OR A = A" },
        ],
        workedExample: {
          problem: "Simplify (A AND 1) OR (B AND 0).",
          solution: "A AND 1 = A and B AND 0 = 0, so the expression becomes A OR 0 = A.",
        },
      },
      questions: [
        {
          id: "ecs11-u7-expressions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the output of A OR B when A = 1 and B = 0?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0"
                    },
                    {
                              "id": "b",
                              "text": "1"
                    },
                    {
                              "id": "c",
                              "text": "undefined"
                    },
                    {
                              "id": "d",
                              "text": "2"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OR operator",
                              "statement": "Output is 1 when at least one input is 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A = 1 is enough for OR to output 1.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** 1",
          "commonErrors": [
                    "Confusing OR with AND, which would give 0."
          ]
},
        },
        {
          id: "ecs11-u7-expressions-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On how many of the four input rows is A AND B equal to 1?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Rows",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND truth table",
                              "statement": "Output is 1 only on row 11."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AND outputs 1 only when both inputs are 1.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Only row 11 qualifies, so the count is 1.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Answering 3, which is the OR count."
          ]
},
        },
        {
          id: "ecs11-u7-expressions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "On how many of the four input rows is A OR B equal to 1?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Rows",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OR truth table",
                              "statement": "Output is 1 on rows 01, 10 and 11."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OR outputs 0 only on row 00.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Therefore 3 of the 4 rows output 1.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Check: rows 01, 10, 11 all contain at least one 1.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "3",
          "commonErrors": [
                    "Answering 1 by confusing OR with AND."
          ]
},
        },
        {
          id: "ecs11-u7-expressions-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Simplify the expression (A AND 1) OR (B AND 0), showing each identity you use.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Identity laws",
                              "statement": "A AND 1 = A; A AND 0 = 0; A OR 0 = A."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Apply A AND 1 = A to the first term.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Apply A AND 0 = 0 to the second term.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Expression reduces to A OR 0.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Apply A OR 0 = A.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Final simplified expression: A.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "A",
          "commonErrors": [
                    "Applying OR identities to AND terms.",
                    "Stopping at A OR 0."
          ]
},
        },
        {
          id: "ecs11-u7-expressions-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Consider the expression E = NOT (A OR B).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Evaluate E when A = 0 and B = 1.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write the expression in words: 'it is not the case that A and B are both true'.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Nested evaluation",
                              "statement": "Evaluate inside brackets first, then apply NOT."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) A OR B = 0 OR 1 = 1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) NOT 1 = 0.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) E = 0 (FALSE).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) 'Both true' means A AND B.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) 'Not the case that' means NOT applied to the whole expression.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Expression: NOT (A AND B).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 0  (b) NOT (A AND B)",
          "commonErrors": [
                    "Writing NOT A AND NOT B, which is a different expression."
          ]
},
        },
        {
          id: "ecs11-u7-expressions-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A truth table has inputs A and B and produces outputs 0, 1, 1, 0 for rows 00, 01, 10, 11.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a logic expression that produces this output.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Verify your expression by evaluating it for A = 1 and B = 1.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "XOR pattern",
                              "statement": "Output 1 when exactly one input is 1 matches A XOR B."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Output is 1 on rows 01 and 10 — the inputs differ.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'Inputs differ' is exactly the definition of XOR.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Expression: A XOR B.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Equivalent forms accepted, e.g. (A AND NOT B) OR (NOT A AND B).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Substitute A = 1, B = 1 into A XOR B.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) 1 XOR 1 = 0 because the inputs are the same.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Row 11 in the table has output 0 — matches.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Verification confirms the expression is correct.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) A XOR B  (b) outputs 0, matching row 11",
          "commonErrors": [
                    "Writing A OR B, which outputs 1 on row 11."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u7-lesson-7-2-notes",
      title: "Boolean Logic Revision Notes",
      summary: "NOT, AND, OR and XOR operators, truth tables and logic expressions.",
      sections: [
        { heading: "Operator quick reference", body: "NOT: one input, reverses it. AND: 1 only when both inputs are 1 (1 row out of 4). OR: 1 when at least one input is 1 (3 rows). XOR: 1 when inputs differ (2 rows)." },
        { heading: "Precedence and brackets", body: "Evaluate NOT first, then AND, then OR. Brackets override precedence: (A OR B) AND C differs from A OR (B AND C). When in doubt, evaluate step by step." },
        { heading: "Identities for simplification", body: "A AND 1 = A, A AND 0 = 0, A OR 0 = A, A OR 1 = 1, A AND A = A, A OR A = A, A AND NOT A = 0, A OR NOT A = 1. Always verify simplifications with a truth table." },
      ],
    },
  ],
};
