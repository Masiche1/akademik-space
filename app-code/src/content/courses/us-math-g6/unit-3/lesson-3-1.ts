import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m6-u3-lesson-3-1",
  code: "3-1",
  title: "Expressions",
  goal: "I CAN write and evaluate algebraic expressions.",
  standards: ["6.EE.A.2"],
  vocabulary: [
    { term: "Expression", definition: "Math phrase." },
    { term: "Variable", definition: "Letter for unknown." },
    { term: "Coefficient", definition: "Number before variable." },
    { term: "Term", definition: "Part of expression." },
    { term: "Evaluate", definition: "Find value." },
    { term: "Substitute", definition: "Replace variable." },
    { term: "Simplify", definition: "Make simpler." },
    { term: "Constant", definition: "Number alone." },
  ],
  concepts: [
    {
      id: "m6-u3-expressions",
      title: "Expressions",
      skill: "Write and evaluate algebraic expressions.",
      lesson: {
        sections: [
          {
            heading: "Math phrases",
            body: "An **expression** is a math phrase with numbers, variables, and operations: $3x + 5$, $2(a + b)$. It doesn't have an equals sign.",
          },
          {
            heading: "Evaluating",
            body: "To **evaluate**, **substitute** values for variables: if $x = 4$, then $3x + 5 = 3(4) + 5 = 17$.",
          },
        ],
        keyFormulas: [
          { name: "Evaluate", statement: "Substitute values -> compute." },
          { name: "Expression", statement: "Numbers + variables + operations (no =)." },
        ],
        workedExample: {
          problem: "Evaluate 2x + 3 when x = 5.",
          solution: "2(5) + 3 = 10 + 3 = **13**.",
        },
      },
      questions: [
        {
          id: "m6-u3-expressions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'expression' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "has equals sign"
                    },
                    {
                              "id": "b",
                              "text": "math phrase without equals sign"
                    },
                    {
                              "id": "c",
                              "text": "only numbers"
                    },
                    {
                              "id": "d",
                              "text": "only variables"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Math phrase, no equals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Math phrase, no equals.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "math phrase without equals sign",
          "commonErrors": [
                    "Confuses with equation."
          ]
},
        },
        {
          id: "m6-u3-expressions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To evaluate 4x - 2 when x = 3, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add"
                    },
                    {
                              "id": "b",
                              "text": "substitute 3 for x and compute"
                    },
                    {
                              "id": "c",
                              "text": "guess"
                    },
                    {
                              "id": "d",
                              "text": "ignore x"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Substitute + compute."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute + compute.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "substitute 3 for x and compute",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m6-u3-expressions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaluate these expressions: 3x + 2 when x = 4; 2(a + b) when a = 3, b = 5; 5y - 1 when y = 2.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Expressions",
                              "statement": "14, 16, 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaluates all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**3(4)+2=14; 2(3+5)=16; 5(2)-1=9.**",
          "commonErrors": [
                    "Wrong values.",
                    "Missing expressions."
          ]
},
        },
        {
          id: "m6-u3-expressions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'variable' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a number"
                    },
                    {
                              "id": "b",
                              "text": "a letter representing an unknown"
                    },
                    {
                              "id": "c",
                              "text": "an operation"
                    },
                    {
                              "id": "d",
                              "text": "a constant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Letter for unknown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Letter for unknown.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a letter representing an unknown",
          "commonErrors": [
                    "Confuses with constant."
          ]
},
        },
        {
          id: "m6-u3-expressions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write an expression for 'three more than twice a number' and evaluate it when the number is 7.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Expressions",
                              "statement": "2x+3 = 17."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes expression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluates.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Expression: 2x + 3; When x=7: 2(7)+3 = 17.**",
          "commonErrors": [
                    "Wrong expression.",
                    "Cannot evaluate."
          ]
},
        },
        {
          id: "m6-u3-expressions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Expression\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Letter for unknown."
                    },
                    {
                              "id": "b",
                              "text": "Math phrase."
                    },
                    {
                              "id": "c",
                              "text": "Number before variable."
                    },
                    {
                              "id": "d",
                              "text": "Part of expression."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Expression\" means Math phrase."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Expression\" means Math phrase.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Expression** = Math phrase.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u3-expressions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Variable\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number before variable."
                    },
                    {
                              "id": "b",
                              "text": "Part of expression."
                    },
                    {
                              "id": "c",
                              "text": "Find value."
                    },
                    {
                              "id": "d",
                              "text": "Letter for unknown."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Variable\" means Letter for unknown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Variable\" means Letter for unknown.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Variable** = Letter for unknown.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u3-expressions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Coefficient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of expression."
                    },
                    {
                              "id": "b",
                              "text": "Number before variable."
                    },
                    {
                              "id": "c",
                              "text": "Find value."
                    },
                    {
                              "id": "d",
                              "text": "Replace variable."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Coefficient\" means Number before variable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Coefficient\" means Number before variable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Coefficient** = Number before variable.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
