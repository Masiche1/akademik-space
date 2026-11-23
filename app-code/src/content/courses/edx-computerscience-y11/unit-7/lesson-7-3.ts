import type { Lesson } from "../../../types.ts";

export const lesson333: Lesson = {
  id: "ecs11-u7-lesson-7-3",
  code: "7-3",
  title: "Logic Gates and Circuits",
  goal: "I CAN identify logic gates, analyse circuits and design circuits from expressions.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Logic gates and circuits"],
  
  vocabulary: [
    { term: "Logic gate", definition: "A physical or simulated component implementing a Boolean operation on one or two inputs." },
    { term: "Logic circuit", definition: "A combination of logic gates connected so the output depends on the inputs." },
    { term: "AND gate", definition: "Gate outputting 1 only when both inputs are 1." },
    { term: "OR gate", definition: "Gate outputting 1 when at least one input is 1." },
    { term: "NOT gate", definition: "Gate with one input that outputs the inverse of its input." },
    { term: "XOR gate", definition: "Gate outputting 1 when exactly one input is 1." },
    { term: "Half adder", definition: "A circuit using XOR for the sum bit and AND for the carry bit when adding two binary digits." },
  ],
  concepts: [
    {
      id: "ecs11-u7-logic-gates",
      title: "Logic Gates",
      skill: "Identify gates from their truth tables and describe gate behaviour.",
      lesson: {
        sections: [
          {
            heading: "Gate types",
            body: "Each logic gate implements one Boolean operator. **AND** and **OR** gates have two inputs; **NOT** (also called an inverter) has one input and one output; **XOR** has two inputs and outputs 1 when they differ.\n\nGates are drawn with standard symbols: AND is a D-shape, OR is curved, NOT is a triangle with a bubble, XOR is OR with an extra curved line.",
          },
          {
            heading: "Identifying a gate from its table",
            body: "To identify an unknown gate, write its truth table for inputs 00, 01, 10, 11 and compare with the known patterns:\n\n- AND: 0, 0, 0, 1\n- OR: 0, 1, 1, 1\n- XOR: 0, 1, 1, 0\n- NAND (NOT AND): 1, 1, 1, 0\n- NOR (NOT OR): 1, 0, 0, 0\n\nIf the output is inverted relative to a known gate, a NOT gate (bubble) is present.",
          },
        ],
        keyFormulas: [
          { name: "AND", statement: "0,0,0,1" },
          { name: "OR", statement: "0,1,1,1" },
          { name: "XOR", statement: "0,1,1,0" },
          { name: "NOT", statement: "Reverses the single input" },
        ],
        workedExample: {
          problem: "A gate has truth table outputs 0, 1, 1, 1 for inputs 00, 01, 10, 11. Which gate is it?",
          solution: "The pattern 0,1,1,1 matches the OR gate.",
        },
      },
      questions: [
        {
          id: "ecs11-u7-gates-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which gate outputs 1 only when both of its inputs are 1?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "OR gate"
                    },
                    {
                              "id": "b",
                              "text": "NOT gate"
                    },
                    {
                              "id": "c",
                              "text": "AND gate"
                    },
                    {
                              "id": "d",
                              "text": "XOR gate"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND gate",
                              "statement": "Output 1 only when both inputs are 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The AND gate is defined by the condition 'both inputs are 1'.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** AND gate",
          "commonErrors": [
                    "Confusing AND with OR."
          ]
},
        },
        {
          id: "ecs11-u7-gates-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many inputs does a NOT gate have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Inputs",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "NOT gate",
                              "statement": "A single-input inverter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NOT is a unary operator — it works on one input.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Therefore the answer is 1.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Answering 2, confusing NOT with AND/OR."
          ]
},
        },
        {
          id: "ecs11-u7-gates-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the behaviour of an XOR gate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "XOR gate",
                              "statement": "Outputs 1 when exactly one input is 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "XOR has two inputs and one output.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Output is 1 when the inputs are different (01 or 10).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Output is 0 when both inputs are equal (00 or 11).",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "1 when inputs differ, 0 when they match",
          "commonErrors": [
                    "Describing OR instead of XOR — OR also outputs 1 on row 11."
          ]
},
        },
        {
          id: "ecs11-u7-gates-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A logic gate produces outputs 0, 1, 1, 0 for input pairs 00, 01, 10 and 11. Identify the gate and justify your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Gate identification",
                              "statement": "Compare the output pattern with known gate tables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The pattern 0,1,1,0 means output is 1 exactly on rows 01 and 10.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Output 1 on rows where inputs differ.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This matches the XOR gate definition.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Rule out OR (which also gives 1 on row 11) and AND (which gives 1 only on row 11).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Conclusion: the gate is XOR.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "XOR gate",
          "commonErrors": [
                    "Answering OR without checking row 11."
          ]
},
        },
        {
          id: "ecs11-u7-gates-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Consider the combined gate NAND (a NOT gate after an AND gate).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the truth table for NAND for inputs 00, 01, 10 and 11.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State which single-input gate would invert a signal, and what it is called.",
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
                              "name": "NAND",
                              "statement": "NOT of AND: 1 unless both inputs are 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) AND outputs 0,0,0,1; NOT of that is 1,1,1,0.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) All four rows correct: 1, 1, 1, 0.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Table correctly ordered by input pair.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The NOT gate inverts its input.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It is also called an inverter.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Output is always the opposite of the input.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 1,1,1,0  (b) NOT gate / inverter",
          "commonErrors": [
                    "Writing the AND table instead of its inverse."
          ]
},
        },
        {
          id: "ecs11-u7-gates-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two unknown gates G1 and G2 are tested.",
          parts: [
          {
                    "label": "a",
                    "prompt": "G1 outputs 0, 0, 0, 1 for inputs 00, 01, 10, 11. Identify G1.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "G2 is an AND gate followed by a NOT gate. Describe the circuit and give its output for input 11.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Pattern matching",
                              "statement": "Match output rows to known gate truth tables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Output 1 appears only on row 11.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) This is the defining pattern of the AND gate.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) G1 = AND gate.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Justification references the truth table pattern.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The circuit is a NAND gate: AND followed by NOT.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) For input 11, the AND stage outputs 1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) The NOT stage inverts it, so final output = 0.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Stated conclusion: output 0 for input 11.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) AND gate  (b) NAND circuit; output 0 for 11",
          "commonErrors": [
                    "Identifying G2 as AND without applying the NOT stage."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u7-logic-circuits",
      title: "Logic Circuits",
      skill: "Analyse combined circuits and design circuits from logic expressions.",
      lesson: {
        sections: [
          {
            heading: "Analysing a circuit",
            body: "To find a circuit's output, work stage by stage from the inputs: evaluate each gate in order of dependency, using its truth table. Brackets in the equivalent expression show the grouping — e.g. A OR (B AND C) means the AND is evaluated before the OR.\n\nA circuit and its expression are interchangeable: the expression A AND (B OR C) describes exactly the circuit where B and C feed an OR gate whose output feeds an AND gate with A.",
          },
          {
            heading: "The half adder",
            body: "A **half adder** adds two binary digits A and B. It uses two gates: **sum = A XOR B** (the sum bit, 1 when inputs differ) and **carry = A AND B** (the carry bit, 1 only when both inputs are 1).\n\nFor A = 1, B = 1: sum = 0, carry = 1 — representing 1 + 1 = 10₂. Half adders are the building blocks of binary addition circuits in processors.",
          },
        ],
        keyFormulas: [
          { name: "Half adder", statement: "sum = A XOR B; carry = A AND B" },
          { name: "Circuit = expression", statement: "Each gate corresponds to one operator; nesting shows evaluation order." },
        ],
        workedExample: {
          problem: "For the expression A OR (B AND C), find the output when A = 0, B = 1, C = 1.",
          solution: "B AND C = 1 AND 1 = 1; then A OR 1 = 0 OR 1 = 1. Output = 1.",
        },
      },
      questions: [
        {
          id: "ecs11-u7-circuits-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A circuit consists of a single AND gate with inputs A = 1 and B = 1. What is the output?",
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
                              "name": "AND gate",
                              "statement": "Output 1 only when both inputs are 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both inputs are 1, so AND outputs 1.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** 1",
          "commonErrors": [
                    "Answering 0 by confusing AND with OR."
          ]
},
        },
        {
          id: "ecs11-u7-circuits-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the output of an OR gate circuit with inputs 0 and 1?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Output",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OR gate",
                              "statement": "Output 1 when at least one input is 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One input is 1, which is enough for OR.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Output = 1.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Answering 0 by requiring both inputs to be 1."
          ]
},
        },
        {
          id: "ecs11-u7-circuits-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the steps needed to analyse a multi-gate logic circuit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Circuit analysis",
                              "statement": "Evaluate gates stage by stage from inputs to output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify the input values for the circuit.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Evaluate each gate in dependency order using its truth table.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final gate's output is the circuit output.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Inputs -> gate by gate -> output",
          "commonErrors": [
                    "Evaluating gates in drawing order rather than dependency order."
          ]
},
        },
        {
          id: "ecs11-u7-circuits-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A circuit implements the expression (A OR B) AND NOT C. Find the output when A = 1, B = 0 and C = 1.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Stepwise evaluation",
                              "statement": "Evaluate brackets, then NOT, then AND."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A OR B = 1 OR 0 = 1.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "NOT C = NOT 1 = 0.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Final AND: 1 AND 0 = 0.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Output = 0.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both intermediate results shown correctly.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "0",
          "commonErrors": [
                    "Applying NOT to the whole expression instead of just C."
          ]
},
        },
        {
          id: "ecs11-u7-circuits-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A half adder adds two binary digits using sum = A XOR B and carry = A AND B.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the sum and carry outputs when A = 1 and B = 1.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State which gate produces the carry bit and why.",
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
                              "name": "Half adder",
                              "statement": "Sum uses XOR; carry uses AND."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sum = 1 XOR 1 = 0.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Carry = 1 AND 1 = 1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Result represents 1 + 1 = 10₂.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The carry bit is produced by an AND gate.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) AND outputs 1 only when both inputs are 1 — exactly when a carry is needed.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Clear link between gate behaviour and arithmetic requirement.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) sum = 0, carry = 1  (b) AND gate",
          "commonErrors": [
                    "Swapping the gates: using AND for sum and XOR for carry."
          ]
},
        },
        {
          id: "ecs11-u7-circuits-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A system needs an output that is 1 when input A is 1, OR when both B and C are 1.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a logic expression for the output X.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Evaluate X for A = 0, B = 1 and C = 1, and state whether the condition is met.",
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
                              "name": "Condition translation",
                              "statement": "'A or both B and C' = A OR (B AND C)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 'Both B and C' = B AND C.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 'A or ...' = A OR (B AND C).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Brackets essential because AND has higher precedence than OR.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Expression: X = A OR (B AND C).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) B AND C = 1 AND 1 = 1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) X = 0 OR 1 = 1.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Output = 1, so the condition is met.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Explanation notes that the second clause alone satisfied the OR.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) X = A OR (B AND C)  (b) X = 1, condition met",
          "commonErrors": [
                    "Writing A OR B AND C without brackets, which changes the meaning."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u7-lesson-7-3-notes",
      title: "Logic Gates and Circuits Revision Notes",
      summary: "Gate types, identifying gates from truth tables, analysing circuits and the half adder.",
      sections: [
        { heading: "Gate truth tables", body: "For inputs 00, 01, 10, 11: AND = 0,0,0,1; OR = 0,1,1,1; XOR = 0,1,1,0; NAND = 1,1,1,0; NOR = 1,0,0,0. NOT has one input and simply inverts it." },
        { heading: "Circuit analysis", body: "Work from inputs to output, evaluating each gate in dependency order. The expression equivalent to a circuit uses brackets to show gate grouping; evaluate inner brackets first." },
        { heading: "Half adder", body: "Sum bit = A XOR B; carry bit = A AND B. When A = B = 1 the result is sum 0, carry 1 — i.e. 1 + 1 = 10₂. Half adders are the basis of binary addition in CPUs." },
      ],
    },
  ],
};
