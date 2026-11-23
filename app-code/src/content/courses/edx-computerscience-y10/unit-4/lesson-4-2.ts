import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ecs10-u4-lesson-4-2",
  code: "4-2",
  title: "Logic Gates and Circuits",
  goal: "I CAN interpret logic gates, derive Boolean expressions from circuits and predict circuit outputs.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — computational thinking and programming", "4CP1 Boolean logic: logic gates and circuits"],
  
  vocabulary: [
    { term: "Logic gate", definition: "A physical or symbolic device that performs a Boolean operation on one or two inputs." },
    { term: "NOT gate", definition: "A gate with one input whose output is the opposite Boolean value." },
    { term: "AND gate", definition: "A gate whose output is TRUE only when both inputs are TRUE." },
    { term: "OR gate", definition: "A gate whose output is TRUE when at least one input is TRUE." },
    { term: "XOR gate", definition: "A gate whose output is TRUE when its inputs are different." },
    { term: "Logic circuit", definition: "A network of logic gates connected so outputs become inputs to later gates." },
  ],
  concepts: [
    {
      id: "ecs10-u4-gate-functions",
      title: "Logic gate functions",
      skill: "Identify NOT, AND, OR and XOR gates and predict their outputs from input values.",
      lesson: {
        sections: [
          {
            heading: "Gate symbols and functions",
            body: "A **NOT gate** has one input and one output and inverts the signal. An **AND gate** has two inputs and outputs TRUE only when both inputs are TRUE. An **OR gate** outputs TRUE when at least one input is TRUE. An **XOR gate** outputs TRUE when exactly one input is TRUE.\n\nGate symbols are drawn as distinctive shapes, but the function is what matters: match the gate to its truth table before predicting an output.",
          },
          {
            heading: "Inputs and outputs",
            body: "In a circuit, each wire carries a Boolean value. Label every wire or node with a variable such as A, B or X so intermediate results can be tracked. The final output is the value at the last gate.\n\nWhen several gates are present, evaluate from the inputs towards the output, recording each gate result. Do not guess the output before the intermediate values are known.",
          },
        ],
        keyFormulas: [
          { name: "NOT gate", statement: "output = NOT input" },
          { name: "AND gate", statement: "output = input1 AND input2" },
          { name: "OR gate", statement: "output = input1 OR input2" },
          { name: "XOR gate", statement: "output = TRUE when inputs differ" },
        ],
        workedExample: {
          problem: "A circuit has inputs A = TRUE and B = FALSE feeding an XOR gate, then a NOT gate. Find the output.",
          solution: "XOR: TRUE XOR FALSE = TRUE because the inputs differ. NOT TRUE = FALSE. Final output = FALSE.",
        },
      },
      questions: [
        {
          id: "ecs10-u4-gate-functions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gate has only one input and reverses its Boolean value?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "AND"
                    },
                    {
                              "id": "b",
                              "text": "OR"
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
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "NOT gate",
                              "statement": "One input; output is the inverse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NOT is the only one-input inverter; AND, OR and XOR are two-input gates.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) NOT"
},
        },
        {
          id: "ecs10-u4-gate-functions-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An AND gate has inputs TRUE and FALSE. State the output.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND gate",
                              "statement": "Output TRUE only when both inputs are TRUE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AND needs both inputs TRUE.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "One input is FALSE, so output = FALSE.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "FALSE"
},
        },
        {
          id: "ecs10-u4-gate-functions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Inputs A = TRUE, B = TRUE and C = FALSE feed a circuit: first A OR B, then that result AND C. Find the final output.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Circuit evaluation",
                              "statement": "Evaluate each gate from inputs to output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First gate: A OR B = TRUE OR TRUE = TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Second gate uses TRUE and C = FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "TRUE AND FALSE = FALSE.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "FALSE"
},
        },
        {
          id: "ecs10-u4-gate-functions-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A NOT gate is followed by an OR gate.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the function of each gate.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "If the NOT gate input is FALSE and the other OR input is FALSE, find the output.",
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
                              "name": "Gate functions",
                              "statement": "NOT inverts; OR outputs TRUE if any input is TRUE."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "NOT reverses its input; OR outputs TRUE when at least one input is TRUE.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "NOT FALSE = TRUE; TRUE OR FALSE = TRUE.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "NOT inverts; OR gives TRUE if any input is TRUE; output TRUE"
},
        },
        {
          id: "ecs10-u4-gate-functions-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A circuit uses inputs P and Q. Gate 1 is P XOR Q. Gate 2 is NOT Gate 1. Gate 3 is Gate 2 OR Q.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find Gate 1 when P = TRUE and Q = TRUE.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find Gate 2 for the same inputs.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Find the final output at Gate 3.",
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
                              "name": "Sequential gate evaluation",
                              "statement": "Use each gate output as the next input."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "P XOR Q with TRUE and TRUE: inputs are the same, so XOR = FALSE.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Gate 2 = NOT FALSE = TRUE.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gate 3 = TRUE OR Q(TRUE) = TRUE.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Gate1 FALSE, Gate2 TRUE, output TRUE"
},
        },
        {
          id: "ecs10-u4-gate-functions-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A security light has inputs motion and darkness. It turns on when motion is detected AND it is dark. The light also has an override input that forces the light on when TRUE.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Choose appropriate gate types for the two conditions and justify each choice.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write a Boolean expression for lightOn.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate lightOn when motion = TRUE, darkness = TRUE and override = FALSE.",
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
                              "name": "Gate selection",
                              "statement": "Choose gates whose truth tables match the required condition."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use AND for motion AND darkness because both must be TRUE; use OR for override because override alone can turn the light on.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "lightOn = override OR (motion AND darkness).",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "motion AND darkness = TRUE; override OR TRUE = TRUE, so lightOn = TRUE.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "lightOn = override OR (motion AND darkness); evaluated TRUE",
          "commonErrors": [
                    "Using OR between motion and darkness, which would light the lamp in daylight motion or darkness without motion."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u4-circuit-expressions",
      title: "Circuits and Boolean expressions",
      skill: "Derive Boolean expressions from logic circuits and design circuits for required expressions.",
      lesson: {
        sections: [
          {
            heading: "From circuit to expression",
            body: "Label each gate output with a temporary variable, working from inputs to the final output. Replace each gate by the Boolean operator it performs. For example, an AND gate becomes `AND`, an OR gate becomes `OR` and a NOT gate becomes `NOT`.\n\nIf a gate output feeds more than one later gate, keep the same temporary label so the expression remains consistent.",
          },
          {
            heading: "From expression to circuit",
            body: "Start with the innermost operator or the operator with highest precedence. Draw the corresponding gate, connect the required inputs, then use its output as an input to the next gate. Use NOT gates wherever `NOT` appears.\n\nCheck the circuit by choosing at least two input combinations and comparing the output with the expression evaluated directly.",
          },
        ],
        keyFormulas: [
          { name: "Gate to operator", statement: "AND gate → AND, OR gate → OR, NOT gate → NOT, XOR gate → XOR" },
          { name: "Circuit expression", statement: "label intermediate wires, then substitute gate operators" },
          { name: "Verification", statement: "test at least two input combinations" },
        ],
        workedExample: {
          problem: "A circuit computes (A AND B) OR NOT C. Find the output for A = TRUE, B = FALSE, C = FALSE.",
          solution: "A AND B = TRUE AND FALSE = FALSE. NOT C = NOT FALSE = TRUE. FALSE OR TRUE = TRUE.",
        },
      },
      questions: [
        {
          id: "ecs10-u4-circuit-expressions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circuit contains an AND gate followed by an OR gate. Which Boolean operator is applied first if both gates use the same two inputs independently?",
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
                              "kind": "principle",
                              "name": "Precedence",
                              "statement": "AND has higher precedence than OR."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In Boolean precedence, AND is evaluated before OR.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) AND"
},
        },
        {
          id: "ecs10-u4-circuit-expressions-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the Boolean expression for a circuit with inputs A and B joined by an OR gate, then NOT applied to the result.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Circuit to expression",
                              "statement": "Replace each gate by its operator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OR gate gives A OR B.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "NOT gate gives NOT (A OR B).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "NOT (A OR B)"
},
        },
        {
          id: "ecs10-u4-circuit-expressions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A circuit computes NOT A AND (B OR C). Evaluate it for A = FALSE, B = FALSE, C = TRUE.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Circuit evaluation",
                              "statement": "Evaluate sub-expressions before combining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NOT A = NOT FALSE = TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "B OR C = FALSE OR TRUE = TRUE.",
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
          id: "ecs10-u4-circuit-expressions-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An expression is (X OR Y) AND NOT Z.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State which gate should be used for each operator.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the order in which gates should be evaluated conceptually.",
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
                              "name": "Expression to circuit",
                              "statement": "Map operators to gates and respect precedence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "OR uses an OR gate, AND uses an AND gate and NOT uses a NOT gate.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "First evaluate X OR Y and NOT Z, then combine those results with AND.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "OR gate, NOT gate, then AND gate"
},
        },
        {
          id: "ecs10-u4-circuit-expressions-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A circuit has inputs A and B. Gate 1 computes A AND B. Gate 2 computes A OR B. Gate 3 computes Gate1 XOR Gate2.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the Boolean expression for the circuit.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Evaluate the expression for A = TRUE and B = FALSE.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State whether the circuit output is TRUE or FALSE and justify it.",
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
                              "name": "Circuit analysis",
                              "statement": "Derive expression, substitute values, then interpret result."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Expression: (A AND B) XOR (A OR B).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "A AND B = FALSE; A OR B = TRUE; FALSE XOR TRUE = TRUE.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Output is TRUE because XOR is TRUE when its two inputs differ.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(A AND B) XOR (A OR B); output TRUE"
},
        },
        {
          id: "ecs10-u4-circuit-expressions-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Design a circuit for a two-person door entry system. The door opens only when both badges are present AND the door is not already open. An emergency release can open the door regardless.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define Boolean variables for badge1, badge2, doorAlreadyOpen and emergencyRelease.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write the Boolean expression for doorOpen.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate doorOpen when badge1 = TRUE, badge2 = TRUE, doorAlreadyOpen = FALSE and emergencyRelease = FALSE.",
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
                              "name": "Control logic design",
                              "statement": "Combine required conditions with AND/OR/NOT to model a system."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "badge1/badge2 TRUE means that badge is presented; doorAlreadyOpen TRUE means the door is already open; emergencyRelease TRUE means the emergency release is active.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "doorOpen = emergencyRelease OR (badge1 AND badge2 AND NOT doorAlreadyOpen).",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "badge1 AND badge2 AND NOT doorAlreadyOpen = TRUE; emergencyRelease OR TRUE = TRUE.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "doorOpen = emergencyRelease OR (badge1 AND badge2 AND NOT doorAlreadyOpen); evaluated TRUE",
          "commonErrors": [
                    "Forgetting NOT doorAlreadyOpen, which could keep the door closed when it is already open."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u4-lesson-4-2-notes",
      title: "Logic gates and circuits — notes",
      summary: "Logic gates implement Boolean operators; circuits combine gates so outputs feed later inputs.",
      sections: [
        { heading: "Gate functions", body: "NOT inverts one input. AND needs both TRUE. OR needs any TRUE. XOR needs different inputs." },
        { heading: "Circuit method", body: "Label intermediate wires, replace gates with operators, then evaluate from inputs to output." },
        { heading: "Design check", body: "Build the expression from the required condition, then test at least two input combinations." },
      ],
    },
  ],
};
