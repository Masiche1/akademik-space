import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ecs10-u4-lesson-4-1",
  code: "4-1",
  title: "Truth Tables and Boolean Operators",
  goal: "I CAN construct truth tables for Boolean operators and evaluate compound expressions.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — computational thinking and programming", "4CP1 Boolean logic: operators, truth tables and precedence"],
  
  vocabulary: [
    { term: "Boolean value", definition: "A value that is either TRUE or FALSE." },
    { term: "Boolean variable", definition: "A named value that can be TRUE or FALSE, such as A or isRaining." },
    { term: "Truth table", definition: "A table listing every possible input combination and the resulting output." },
    { term: "NOT", definition: "Unary operator that reverses a Boolean value: NOT TRUE is FALSE." },
    { term: "AND", definition: "Binary operator that is TRUE only when both inputs are TRUE." },
    { term: "OR", definition: "Binary operator that is TRUE when at least one input is TRUE." },
    { term: "XOR", definition: "Binary operator that is TRUE when the inputs are different." },
  ],
  concepts: [
    {
      id: "ecs10-u4-operators-tables",
      title: "Boolean operators and truth tables",
      skill: "Build truth tables for NOT, AND, OR and XOR and read output rows correctly.",
      lesson: {
        sections: [
          {
            heading: "Boolean values",
            body: "A Boolean value is either **TRUE** or **FALSE**. In programming, variables such as `isLoggedIn`, `hasPassed` or `alarmOn` store Boolean values. Conditions in `IF` statements usually produce Boolean results.\n\nA **truth table** lists every possible combination of inputs and the output produced by an operator or expression. For two inputs A and B there are four rows; for three inputs there are eight rows.",
          },
          {
            heading: "Core operators",
            body: "**NOT A** reverses the value. **A AND B** is TRUE only when both A and B are TRUE. **A OR B** is TRUE when at least one input is TRUE. **A XOR B** is TRUE when exactly one input is TRUE, so the inputs must differ.\n\nWhen an expression has several operators, evaluate **parentheses first**, then NOT, then AND, then OR. Always state the convention if a question gives a different order.",
          },
        ],
        keyFormulas: [
          { name: "NOT", statement: "NOT TRUE = FALSE and NOT FALSE = TRUE" },
          { name: "AND", statement: "A AND B is TRUE only when A = TRUE and B = TRUE" },
          { name: "OR", statement: "A OR B is TRUE when A = TRUE or B = TRUE or both are TRUE" },
          { name: "XOR", statement: "A XOR B is TRUE when A and B are different" },
          { name: "Truth-table size", statement: "n Boolean inputs give 2^n rows" },
        ],
        workedExample: {
          problem: "Evaluate NOT A OR (B AND C) when A = FALSE, B = TRUE and C = FALSE.",
          solution: "A AND part first inside parentheses: B AND C = TRUE AND FALSE = FALSE. NOT A = NOT FALSE = TRUE. Final result: TRUE OR FALSE = TRUE.",
        },
      },
      questions: [
        {
          id: "ecs10-u4-operators-tables-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which Boolean operator gives TRUE only when both inputs are TRUE?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "OR"
                    },
                    {
                              "id": "b",
                              "text": "AND"
                    },
                    {
                              "id": "c",
                              "text": "NOT"
                    },
                    {
                              "id": "d",
                              "text": "XOR"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND",
                              "statement": "TRUE only when both inputs are TRUE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AND requires both inputs to be TRUE; OR needs only one and XOR needs different inputs.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) AND",
          "commonErrors": [
                    "Confusing AND with OR because both can produce TRUE."
          ]
},
        },
        {
          id: "ecs10-u4-operators-tables-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many rows are needed in a truth table for the expression A AND B AND C?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "rows",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Truth-table size",
                              "statement": "n inputs produce 2^n rows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "There are three Boolean inputs: A, B and C.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rows = 2^3 = 8.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "8 rows"
},
        },
        {
          id: "ecs10-u4-operators-tables-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate NOT (A AND B) OR C when A = TRUE, B = FALSE and C = TRUE. Show each intermediate result.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Operator precedence",
                              "statement": "Parentheses, then NOT, then AND, then OR."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inside the parentheses: A AND B = TRUE AND FALSE = FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "NOT (FALSE) = TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "TRUE OR C, and C = TRUE, so the result is TRUE.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "TRUE",
          "commonErrors": [
                    "Evaluating OR before AND or forgetting that parentheses are evaluated first."
          ]
},
        },
        {
          id: "ecs10-u4-operators-tables-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider the expression A XOR B.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what a truth table is used for.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give the output of A XOR B when A = TRUE and B = FALSE.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Truth table",
                              "statement": "Lists all input combinations and outputs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A truth table shows every possible combination of input values.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "It records the output produced for each combination, so behaviour can be checked systematically.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "XOR is TRUE when the inputs are different.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "TRUE and FALSE are different, so A XOR B = TRUE.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) systematic input-output table (b) TRUE"
},
        },
        {
          id: "ecs10-u4-operators-tables-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Let A = FALSE, B = TRUE and C = TRUE. Evaluate each expression.",
          parts: [
          {
                    "label": "a",
                    "prompt": "A OR (NOT B AND C)",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(A OR B) AND NOT C",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "A XOR B XOR C",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compound evaluation",
                              "statement": "Apply parentheses and operator precedence step by step."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "NOT B = FALSE; FALSE AND C = FALSE; A OR FALSE = FALSE OR FALSE = FALSE.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "A OR B = TRUE; NOT C = FALSE; TRUE AND FALSE = FALSE.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Using left-to-right XOR: A XOR B = TRUE, then TRUE XOR C(TRUE) = FALSE.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) FALSE (b) FALSE (c) FALSE",
          "commonErrors": [
                    "Treating XOR as OR; XOR is TRUE only when inputs differ."
          ]
},
        },
        {
          id: "ecs10-u4-operators-tables-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A school door alarm has three Boolean inputs: doorOpen, motionDetected and systemEnabled. The alarm should sound only when the system is enabled AND the door is closed AND motion is detected.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the three Boolean variables and state what TRUE means for each.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write a Boolean expression for alarmOn.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate alarmOn when systemEnabled = TRUE, doorOpen = FALSE and motionDetected = TRUE.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Boolean modelling",
                              "statement": "Real conditions can be represented by Boolean variables and operators."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "doorOpen TRUE means the door is open; motionDetected TRUE means movement is detected; systemEnabled TRUE means the alarm system is active.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Alarm requires enabled AND not door open AND motion: alarmOn = systemEnabled AND NOT doorOpen AND motionDetected.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "NOT doorOpen = NOT FALSE = TRUE; TRUE AND TRUE AND TRUE = TRUE, so the alarm sounds.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "alarmOn = systemEnabled AND NOT doorOpen AND motionDetected; evaluated TRUE",
          "commonErrors": [
                    "Using doorOpen instead of NOT doorOpen, which would sound the alarm when the door is open rather than closed."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u4-expression-eval",
      title: "Precedence and compound expressions",
      skill: "Apply precedence rules and parentheses to evaluate multi-operator Boolean expressions.",
      lesson: {
        sections: [
          {
            heading: "Order of evaluation",
            body: "Without parentheses, a standard convention is: **parentheses first**, then **NOT**, then **AND**, then **OR**. Some courses place XOR with OR; in an exam, follow the stated rule or write parentheses to remove ambiguity.\n\nParentheses are the safest way to make an expression unambiguous. For example, `A OR B AND C` can be misread, whereas `A OR (B AND C)` is explicit.",
          },
          {
            heading: "Checking expressions",
            body: "To check an expression, substitute one input combination at a time and record intermediate results. A useful method is to underline or rewrite each operator result before moving to the next operator.\n\nEquivalent expressions can be compared by building truth tables. If two expressions have identical output columns, they are equivalent.",
          },
        ],
        keyFormulas: [
          { name: "Precedence", statement: "parentheses → NOT → AND → OR" },
          { name: "Substitution", statement: "replace each variable with TRUE or FALSE, then evaluate operators" },
          { name: "Equivalence", statement: "two expressions are equivalent when every truth-table row matches" },
        ],
        workedExample: {
          problem: "Evaluate (NOT A OR B) AND C for A = TRUE, B = FALSE, C = TRUE.",
          solution: "NOT A = FALSE. FALSE OR B(FALSE) = FALSE. Then FALSE AND C(TRUE) = FALSE.",
        },
      },
      questions: [
        {
          id: "ecs10-u4-expression-eval-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the expression A OR B AND C, which operator should normally be evaluated first?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "OR"
                    },
                    {
                              "id": "b",
                              "text": "AND"
                    },
                    {
                              "id": "c",
                              "text": "A OR B first from left to right"
                    },
                    {
                              "id": "d",
                              "text": "C first"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Precedence",
                              "statement": "AND has higher precedence than OR."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Under the usual convention, AND is evaluated before OR.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) AND"
},
        },
        {
          id: "ecs10-u4-expression-eval-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate NOT FALSE AND TRUE. Give the final Boolean value.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Substitution",
                              "statement": "Evaluate NOT before AND."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NOT FALSE = TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "TRUE AND TRUE = TRUE.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "TRUE"
},
        },
        {
          id: "ecs10-u4-expression-eval-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate A OR NOT B AND C for A = FALSE, B = TRUE, C = FALSE. Show intermediate values.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Precedence",
                              "statement": "NOT, then AND, then OR."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NOT B = NOT TRUE = FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "FALSE AND C(FALSE) = FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A(FALSE) OR FALSE = FALSE.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "FALSE",
          "commonErrors": [
                    "Computing A OR NOT B before AND C, which changes the meaning."
          ]
},
        },
        {
          id: "ecs10-u4-expression-eval-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two students evaluate X AND Y OR Z.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the standard precedence that removes ambiguity.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Rewrite the expression with parentheses to show that precedence.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Explicit precedence",
                              "statement": "Parentheses make evaluation order clear."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "AND is evaluated before OR under the usual Boolean precedence convention.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The equivalent explicit form is (X AND Y) OR Z.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(X AND Y) OR Z"
},
        },
        {
          id: "ecs10-u4-expression-eval-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Let P = TRUE, Q = FALSE and R = TRUE. Evaluate each expression.",
          parts: [
          {
                    "label": "a",
                    "prompt": "NOT (P OR Q) AND R",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "(P XOR Q) OR (Q AND R)",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "P AND NOT (Q OR R)",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Parentheses and precedence",
                              "statement": "Evaluate inside brackets before applying outer operators."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "P OR Q = TRUE; NOT TRUE = FALSE; FALSE AND R = FALSE.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "P XOR Q = TRUE; Q AND R = FALSE; TRUE OR FALSE = TRUE.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Q OR R = TRUE; NOT TRUE = FALSE; P AND FALSE = FALSE.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) FALSE (b) TRUE (c) FALSE"
},
        },
        {
          id: "ecs10-u4-expression-eval-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A factory machine stops when emergencyStop is TRUE OR when (powerOn is FALSE AND guardClosed is FALSE).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define variables for emergencyStop, powerOn and guardClosed.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write a Boolean expression for machineStopped.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate machineStopped for emergencyStop = FALSE, powerOn = TRUE and guardClosed = FALSE.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Boolean modelling",
                              "statement": "Conditions in control systems can be expressed using Boolean operators."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "emergencyStop TRUE means the emergency stop is pressed; powerOn TRUE means power is available; guardClosed TRUE means the guard is closed.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "machineStopped = emergencyStop OR (NOT powerOn AND NOT guardClosed).",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "NOT powerOn = FALSE and NOT guardClosed = TRUE, so the second term is FALSE; emergencyStop is FALSE, so machineStopped = FALSE.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "machineStopped = emergencyStop OR (NOT powerOn AND NOT guardClosed); evaluated FALSE",
          "commonErrors": [
                    "Writing powerOn AND guardClosed instead of NOT powerOn AND NOT guardClosed."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u4-lesson-4-1-notes",
      title: "Truth tables and Boolean operators — notes",
      summary: "Boolean values are TRUE or FALSE; truth tables list all input combinations and outputs.",
      sections: [
        { heading: "Key operators", body: "NOT reverses a value. AND needs both inputs TRUE. OR needs at least one TRUE. XOR needs different inputs." },
        { heading: "Precedence", body: "Use parentheses first, then NOT, then AND, then OR. Parentheses remove ambiguity." },
        { heading: "Check method", body: "Substitute values one row at a time and record each intermediate result." },
      ],
    },
  ],
};
