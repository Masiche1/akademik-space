import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ecs10-u4-lesson-4-3",
  code: "4-3",
  title: "Boolean Laws and Applications",
  goal: "I CAN simplify Boolean expressions using laws and apply logic to real control systems.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — computational thinking and programming", "4CP1 Boolean logic: laws, simplification and applications"],
  
  vocabulary: [
    { term: "Boolean identity", definition: "A law that keeps an expression unchanged, such as A AND TRUE = A." },
    { term: "Commutative law", definition: "Changing input order does not change the result: A AND B = B AND A." },
    { term: "Associative law", definition: "Grouping does not change the result: (A AND B) AND C = A AND (B AND C)." },
    { term: "Distributive law", definition: "A AND (B OR C) = (A AND B) OR (A AND C)." },
    { term: "De Morgan's laws", definition: "NOT (A AND B) = NOT A OR NOT B and NOT (A OR B) = NOT A AND NOT B." },
    { term: "Equivalent expressions", definition: "Expressions with identical outputs for every input combination." },
  ],
  concepts: [
    {
      id: "ecs10-u4-boolean-laws",
      title: "Boolean laws and simplification",
      skill: "Use Boolean identities, commutative, associative, distributive and De Morgan laws to simplify expressions.",
      lesson: {
        sections: [
          {
            heading: "Useful laws",
            body: "Identities include `A AND TRUE = A`, `A OR FALSE = A`, `A AND FALSE = FALSE` and `A OR TRUE = TRUE`. The commutative law allows `A AND B = B AND A`; the associative law allows regrouping. The distributive law expands `A AND (B OR C)` into `(A AND B) OR (A AND C)`.\n\n**De Morgan's laws** are especially useful: `NOT (A AND B) = NOT A OR NOT B` and `NOT (A OR B) = NOT A AND NOT B`. They let a NOT be moved through AND/OR while changing the operator.",
          },
          {
            heading: "Proving equivalence",
            body: "Two expressions are equivalent when their truth tables match for every input combination. A quick check is to test the row that is most likely to differ, but a full truth table is the safe proof for an exam.\n\nSimplification should preserve meaning. Always substitute the original and simplified expressions for the same inputs before claiming they are equivalent.",
          },
        ],
        keyFormulas: [
          { name: "Identities", statement: "A AND TRUE = A; A OR FALSE = A; A AND FALSE = FALSE; A OR TRUE = TRUE" },
          { name: "Commutative", statement: "A AND B = B AND A; A OR B = B OR A" },
          { name: "Distributive", statement: "A AND (B OR C) = (A AND B) OR (A AND C)" },
          { name: "De Morgan", statement: "NOT (A AND B) = NOT A OR NOT B; NOT (A OR B) = NOT A AND NOT B" },
        ],
        workedExample: {
          problem: "Simplify NOT (A OR B) using De Morgan's law.",
          solution: "NOT (A OR B) = NOT A AND NOT B. The OR becomes AND and each input is negated.",
        },
      },
      questions: [
        {
          id: "ecs10-u4-boolean-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which law states that A AND B = B AND A?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Associative law"
                    },
                    {
                              "id": "b",
                              "text": "Commutative law"
                    },
                    {
                              "id": "c",
                              "text": "Distributive law"
                    },
                    {
                              "id": "d",
                              "text": "De Morgan's law"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Commutative law",
                              "statement": "Changing input order does not change the result."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Swapping A and B without changing parentheses is the commutative law.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Commutative law"
},
        },
        {
          id: "ecs10-u4-boolean-laws-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Simplify A OR FALSE.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "OR identity",
                              "statement": "A OR FALSE = A."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OR with FALSE leaves the other input unchanged.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Therefore A OR FALSE = A.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "A"
},
        },
        {
          id: "ecs10-u4-boolean-laws-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use De Morgan's law to rewrite NOT (A AND B).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "De Morgan",
                              "statement": "NOT (A AND B) = NOT A OR NOT B."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Move NOT inside the parentheses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Change AND to OR.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Negate each input: NOT A OR NOT B.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "NOT A OR NOT B"
},
        },
        {
          id: "ecs10-u4-boolean-laws-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider the expression A AND (B OR C).",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the distributive law for AND over OR.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Rewrite the expression in expanded form.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Distributive law",
                              "statement": "A AND (B OR C) = (A AND B) OR (A AND C)."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Distribute A across the OR: multiply A by each term inside the bracket.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Expanded form: (A AND B) OR (A AND C).",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(A AND B) OR (A AND C)"
},
        },
        {
          id: "ecs10-u4-boolean-laws-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Simplify or rewrite each expression.",
          parts: [
          {
                    "label": "a",
                    "prompt": "A AND TRUE",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "NOT (A OR B)",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "A OR (A AND B)",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Boolean simplification",
                              "statement": "Use identities and De Morgan laws without changing meaning."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A AND TRUE = A by the AND identity.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "By De Morgan, NOT (A OR B) = NOT A AND NOT B.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "If A is TRUE the whole expression is TRUE; if A is FALSE both terms are FALSE, so the expression equals A.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) A (b) NOT A AND NOT B (c) A"
},
        },
        {
          id: "ecs10-u4-boolean-laws-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student claims that NOT (A AND B) is always equal to NOT A AND NOT B.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the correct De Morgan equivalent of NOT (A AND B).",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Test the student's claim when A = TRUE and B = FALSE.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why a truth table is a reliable way to check equivalence.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "De Morgan and equivalence",
                              "statement": "Negating a compound changes the operator and negates inputs; equivalence requires identical outputs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Correct equivalent: NOT A OR NOT B.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "A AND B = FALSE, so NOT(A AND B)=TRUE; NOT A AND NOT B = FALSE AND TRUE = FALSE, so the claim fails.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "A truth table lists every input combination, so if all output rows match the expressions are equivalent for every possible input.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "NOT (A AND B) = NOT A OR NOT B; the student's claim is false; truth tables prove equivalence.",
          "commonErrors": [
                    "Changing AND to AND instead of OR when applying De Morgan."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u4-logic-applications",
      title: "Logic in control systems",
      skill: "Apply Boolean logic to alarms, access control, safety interlocks and simple control decisions.",
      lesson: {
        sections: [
          {
            heading: "Modelling conditions",
            body: "Real systems often combine several conditions. Define each condition as a Boolean variable, then combine variables with AND when all conditions must be true, OR when any condition can trigger the action, and NOT when a condition must be absent.\n\nExamples: a lift door opens when requested AND the lift is stopped; an alarm sounds when smoke is detected OR heat is excessive; a machine is safe only when power is on AND guard is closed AND emergency stop is not pressed.",
          },
          {
            heading: "Safety and override",
            body: "Safety systems usually give overrides or fail-safe states priority. An emergency stop should force a safe output even if the normal condition would otherwise allow operation. When designing logic, identify which conditions are mandatory and which are exceptions.\n\nAlways evaluate the expression for the most dangerous input combination, not only the normal case.",
          },
        ],
        keyFormulas: [
          { name: "AND condition", statement: "all required conditions must be TRUE" },
          { name: "OR condition", statement: "at least one trigger condition must be TRUE" },
          { name: "NOT condition", statement: "a condition must be FALSE for the output to be TRUE" },
          { name: "Fail-safe", statement: "unsafe or unknown states should produce the safe output" },
        ],
        workedExample: {
          problem: "A furnace ignition requires fuelFlow = TRUE, pilotLit = TRUE and emergencyStop = FALSE. Write the expression.",
          solution: "ignite = fuelFlow AND pilotLit AND NOT emergencyStop.",
        },
      },
      questions: [
        {
          id: "ecs10-u4-logic-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A machine should run only when power is on AND the guard is closed. Which operator joins the conditions?",
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
                              "name": "AND condition",
                              "statement": "All required conditions must be TRUE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both power and guard conditions are required, so AND is used.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) AND"
},
        },
        {
          id: "ecs10-u4-logic-applications-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An alarm sounds when smokeDetected OR heatTooHigh is TRUE. State the output when smokeDetected = FALSE and heatTooHigh = TRUE.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "OR trigger",
                              "statement": "Any TRUE trigger makes the output TRUE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OR requires at least one TRUE input.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "heatTooHigh = TRUE, so alarm = TRUE.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "TRUE"
},
        },
        {
          id: "ecs10-u4-logic-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A door lock opens when badgeValid = TRUE and doorLocked = FALSE. Write the Boolean expression for doorUnlock.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Boolean modelling",
                              "statement": "Combine required conditions with the matching operator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both badgeValid and NOT doorLocked are required.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Use AND because both conditions must be TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "doorUnlock = badgeValid AND NOT doorLocked.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "badgeValid AND NOT doorLocked"
},
        },
        {
          id: "ecs10-u4-logic-applications-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A greenhouse heater should be on when temperatureLow = TRUE AND windowOpen = FALSE. A manual override can turn it on at any time.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a Boolean expression for heaterOn.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Evaluate heaterOn for temperatureLow = TRUE, windowOpen = TRUE and override = FALSE.",
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
                              "name": "Control expression",
                              "statement": "Normal condition OR override."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "heaterOn = override OR (temperatureLow AND NOT windowOpen).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "NOT windowOpen = FALSE; temperatureLow AND FALSE = FALSE; override OR FALSE = FALSE.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "heaterOn = override OR (temperatureLow AND NOT windowOpen); evaluated FALSE"
},
        },
        {
          id: "ecs10-u4-logic-applications-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A laboratory fridge alarm should sound if temperatureHigh = TRUE OR doorOpenTooLong = TRUE, but never during maintenanceMode = TRUE.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a Boolean expression for alarmOn.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Evaluate alarmOn for temperatureHigh = TRUE, doorOpenTooLong = FALSE and maintenanceMode = FALSE.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Evaluate alarmOn for temperatureHigh = TRUE, doorOpenTooLong = TRUE and maintenanceMode = TRUE.",
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
                              "name": "Exception handling",
                              "statement": "Maintenance mode suppresses the alarm even when trigger conditions are TRUE."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "alarmOn = NOT maintenanceMode AND (temperatureHigh OR doorOpenTooLong).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Trigger = TRUE OR FALSE = TRUE; NOT maintenanceMode = TRUE; TRUE AND TRUE = TRUE.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Trigger = TRUE; NOT maintenanceMode = FALSE; FALSE AND TRUE = FALSE.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "alarmOn = NOT maintenanceMode AND (temperatureHigh OR doorOpenTooLong); TRUE then FALSE"
},
        },
        {
          id: "ecs10-u4-logic-applications-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A lift should move only when requested AND the doors are closed AND it is not overloaded. An emergency stop must prevent movement even if all other conditions are TRUE.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define Boolean variables for request, doorsClosed, overloaded and emergencyStop.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write a Boolean expression for liftCanMove.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate liftCanMove for request = TRUE, doorsClosed = TRUE, overloaded = FALSE and emergencyStop = TRUE.",
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
                              "name": "Fail-safe control",
                              "statement": "Emergency conditions override normal operating conditions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "request TRUE means a floor has been requested; doorsClosed TRUE means doors are shut; overloaded TRUE means capacity is exceeded; emergencyStop TRUE means emergency stop is active.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "liftCanMove = NOT emergencyStop AND request AND doorsClosed AND NOT overloaded.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "NOT emergencyStop = FALSE; FALSE AND any other values = FALSE, so liftCanMove = FALSE.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "liftCanMove = NOT emergencyStop AND request AND doorsClosed AND NOT overloaded; evaluated FALSE",
          "commonErrors": [
                    "Allowing emergencyStop to be ignored because the other conditions are TRUE."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u4-lesson-4-3-notes",
      title: "Boolean laws and applications — notes",
      summary: "Boolean laws simplify expressions; real control systems combine conditions with AND, OR and NOT.",
      sections: [
        { heading: "Laws", body: "Identities remove redundant terms; commutative and associative laws reorder safely; distributive and De Morgan laws rewrite expressions." },
        { heading: "Modelling", body: "Use AND for required conditions, OR for alternative triggers and NOT for conditions that must be absent." },
        { heading: "Safety", body: "Check emergency and unsafe states; overrides and fail-safe outputs should take priority." },
      ],
    },
  ],
};
