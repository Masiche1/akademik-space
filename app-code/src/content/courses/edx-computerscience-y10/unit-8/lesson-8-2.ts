import type { Lesson } from "../../../types.ts";

export const lesson282: Lesson = {
  id: "ecs10-u8-lesson-8-2",
  code: "8-2",
  title: "Boolean Logic and Selection",
  goal: "I CAN use Boolean operators in expressions and truth tables and design complex selection logic with compound and nested conditions.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming"],
  
  vocabulary: [
    { term: "Boolean value", definition: "A value that is either TRUE or FALSE." },
    { term: "AND", definition: "Boolean operator — TRUE only when both inputs are TRUE." },
    { term: "OR", definition: "Boolean operator — TRUE when at least one input is TRUE." },
    { term: "NOT", definition: "Boolean operator — reverses the input: TRUE becomes FALSE and vice versa." },
    { term: "XOR", definition: "Boolean operator — TRUE when exactly one input is TRUE." },
    { term: "Truth table", definition: "A table showing output for every combination of inputs." },
    { term: "Nested selection", definition: "IF statements placed inside other IF statements for multi-level decisions." },
    { term: "Decision table", definition: "A table mapping combinations of conditions to actions." },
  ],
  concepts: [
    {
      id: "ecs10-u8-boolean-operators",
      title: "Boolean operators and truth tables",
      skill: "Evaluate and construct truth tables for AND, OR, NOT and XOR expressions.",
      lesson: {
        sections: [
          {
            heading: "Boolean operators",
            body: "Computers make decisions using **Boolean logic** — values are TRUE or FALSE. **AND** is TRUE only when both inputs are TRUE. **OR** is TRUE when at least one input is TRUE. **NOT** reverses a single input. **XOR** (exclusive OR) is TRUE when exactly one input is TRUE — both TRUE gives FALSE. In pseudocode: AND, OR, NOT are written between conditions; NOT precedes a condition.",
          },
          {
            heading: "Truth tables",
            body: "A **truth table** lists every combination of inputs and the resulting output. For two inputs there are 4 rows; for three inputs, 8 rows. Building a truth table is the surest way to check a Boolean expression — e.g. to verify that 'A AND NOT A' can never be TRUE. Parentheses define evaluation order: NOT binds first, then AND, then OR.",
          },
        ],
        keyFormulas: [
          { name: "AND", statement: "TRUE AND TRUE = TRUE; anything else = FALSE" },
          { name: "OR", statement: "FALSE OR FALSE = FALSE; anything else = TRUE" },
          { name: "NOT", statement: "NOT TRUE = FALSE; NOT FALSE = TRUE" },
          { name: "XOR", statement: "TRUE when exactly one input is TRUE" },
        ],
        workedExample: {
          problem: "Evaluate: A = TRUE, B = FALSE. Find the value of (A OR B) AND NOT B.",
          solution: "NOT B = NOT FALSE = TRUE. A OR B = TRUE OR FALSE = TRUE. TRUE AND TRUE = TRUE. Result: TRUE.",
        },
      },
      questions: [
        {
          id: "ecs10-u8-boolean-operators-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When is 'A AND B' TRUE?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When at least one of A or B is TRUE"
                    },
                    {
                              "id": "b",
                              "text": "Only when both A and B are TRUE"
                    },
                    {
                              "id": "c",
                              "text": "When both are FALSE"
                    },
                    {
                              "id": "d",
                              "text": "Always"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AND",
                              "statement": "TRUE only if both inputs TRUE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AND requires both conditions to be TRUE simultaneously.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Both TRUE",
          "commonErrors": [
                    "Confusing AND with OR."
          ]
},
        },
        {
          id: "ecs10-u8-boolean-operators-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Complete the truth table for 'A OR B': list the output for A=TRUE,B=TRUE; A=TRUE,B=FALSE; A=FALSE,B=TRUE; A=FALSE,B=FALSE.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OR",
                              "statement": "TRUE if at least one input TRUE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A=TRUE,B=TRUE → TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A=TRUE,B=FALSE → TRUE; A=FALSE,B=TRUE → TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A=FALSE,B=FALSE → FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "TRUE, TRUE, TRUE, FALSE",
          "commonErrors": [
                    "Giving FALSE for mixed inputs — OR only needs one TRUE."
          ]
},
        },
        {
          id: "ecs10-u8-boolean-operators-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate these expressions: (a) NOT (3 > 5); (b) (7 > 3) AND (2 < 4); (c) (5 = 5) XOR (5 = 6); (d) NOT (4 < 4).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Boolean evaluation",
                              "statement": "Evaluate comparisons first, then operators."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 3 > 5 is FALSE; NOT FALSE = TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 7>3 TRUE and 2<4 TRUE → TRUE AND TRUE = TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 5=5 TRUE, 5=6 FALSE → exactly one TRUE → XOR = TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 4<4 is FALSE; NOT FALSE = TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) TRUE (b) TRUE (c) TRUE (d) TRUE",
          "commonErrors": [
                    "Treating XOR like OR — both TRUE must give FALSE for XOR."
          ]
},
        },
        {
          id: "ecs10-u8-boolean-operators-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Consider the expression 'A AND NOT A'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Build its truth table for all combinations of A (use a single variable A: A=TRUE and A=FALSE).",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State what this shows about the expression and give a real-world example of such a condition.",
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
                              "name": "Logical contradiction",
                              "statement": "X AND NOT X is always FALSE."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A=TRUE: NOT A = FALSE → TRUE AND FALSE = FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "A=FALSE: NOT A = TRUE → FALSE AND TRUE = FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both rows give FALSE — the expression is always FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "It is a contradiction — a condition that can never be satisfied.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Example: 'user is logged in AND not logged in' can never both be true.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Such conditions should be removed — they indicate a design error or impossible state.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) always FALSE (b) logical contradiction — impossible condition like 'logged in AND not logged in'.",
          "commonErrors": [
                    "Thinking A AND NOT A could be TRUE for some input."
          ]
},
        },
        {
          id: "ecs10-u8-boolean-operators-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A security door unlocks when: (door_open = TRUE AND badge_valid = TRUE) OR master_key = TRUE. Given door_open=FALSE, badge_valid=TRUE, master_key=FALSE.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Evaluate the condition step by step and state whether the door unlocks.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain which single change would unlock the door and why.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Boolean evaluation",
                              "statement": "AND before OR; parentheses matter."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "door_open AND badge_valid = FALSE AND TRUE = FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "FALSE OR master_key = FALSE OR FALSE = FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Condition is FALSE — door stays locked.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Changing door_open to TRUE gives TRUE AND TRUE = TRUE → unlocks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Setting master_key = TRUE also gives FALSE OR TRUE = TRUE → unlocks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Either change alone is sufficient because of the OR branch.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "This shows how OR creates alternative conditions — any one TRUE unlocks.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) FALSE — stays locked (b) door_open=TRUE or master_key=TRUE both unlock.",
          "commonErrors": [
                    "Evaluating OR before AND — AND has higher precedence."
          ]
},
        },
        {
          id: "ecs10-u8-boolean-operators-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A lift should move when: (requested = TRUE AND doors_closed = TRUE) AND NOT overloaded = TRUE.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define AND, OR, NOT and XOR and give the output when both inputs are TRUE for each.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Build a truth table for the lift condition using variables R (requested), C (doors_closed), O (overloaded) — show whether the lift moves for all 8 combinations.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain in words the rule the lift follows.",
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
                              "name": "Boolean operators",
                              "statement": "AND/OR/NOT/XOR rules."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "AND: TRUE only if both TRUE; OR: TRUE if at least one TRUE; NOT: reverses; XOR: TRUE if exactly one TRUE.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both TRUE results: AND=TRUE, OR=TRUE, NOT=n/a (single input), XOR=FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All four operators correctly defined.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lift moves only when R=TRUE, C=TRUE and O=FALSE — all other 7 combinations stay still.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Correctly identified the single TRUE row: R=T, C=T, O=F.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "NOT overloaded inverts O, so overloaded=FALSE is required.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The lift moves only when someone has requested it AND the doors are closed AND it is not overloaded.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "All three conditions must hold simultaneously (AND chain).",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) operator definitions + both-TRUE results (b) moves only for R=T,C=T,O=F (c) needs request + closed doors + not overloaded.",
          "commonErrors": [
                    "Forgetting NOT inverts 'overloaded' — need overloaded=FALSE."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u8-selection-logic",
      title: "Complex selection logic",
      skill: "Design nested and compound selection structures including decision tables and pseudocode.",
      lesson: {
        sections: [
          {
            heading: "Compound and nested selection",
            body: "**Compound conditions** combine tests with AND/OR/NOT inside one IF — e.g. IF age >= 18 AND has_ticket THEN ... **Nested selection** places an IF inside another IF's branch — useful when one decision depends on another, e.g. first check if a user is logged in, then inside that check their role. ELSE IF chains test conditions in order — only the first TRUE branch runs, so order matters. Indentation shows the structure.",
          },
          {
            heading: "Decision tables and pseudocode",
            body: "A **decision table** maps every combination of conditions (Y/N) to an action — it guarantees no case is missed. Pseudocode for selection uses IF ... THEN ... ELSEIF ... ELSE ... ENDIF. For multi-way choices, ELSE IF is clearer than deeply nested IFs. Always include a final ELSE for the 'none of the above' case.",
          },
        ],
        keyFormulas: [
          { name: "Compound condition", statement: "IF (A AND B) / IF (A OR B) / IF NOT A" },
          { name: "ELSE IF", statement: "test conditions in order; first TRUE branch runs" },
          { name: "Decision table", statement: "all condition combinations → actions; no gaps" },
        ],
        workedExample: {
          problem: "Write pseudocode for a ticket price: children under 5 free; ages 5-15 pay £5; adults pay £10; seniors over 65 pay £7.",
          solution: "IF age < 5 THEN price = 0 ELSEIF age < 16 THEN price = 5 ELSEIF age > 65 THEN price = 7 ELSE price = 10 ENDIF",
        },
      },
      questions: [
        {
          id: "ecs10-u8-selection-logic-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main advantage of ELSE IF over separate IF statements?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It runs faster"
                    },
                    {
                              "id": "b",
                              "text": "Only the first TRUE branch runs, so conditions are tested in order"
                    },
                    {
                              "id": "c",
                              "text": "It uses less memory"
                    },
                    {
                              "id": "d",
                              "text": "It removes the need for ELSE"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ELSE IF",
                              "statement": "First TRUE branch executes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ELSE IF tests conditions top-to-bottom and stops at the first TRUE — later branches are skipped.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) First TRUE branch runs",
          "commonErrors": [
                    "Thinking all matching branches run as with separate IFs."
          ]
},
        },
        {
          id: "ecs10-u8-selection-logic-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write pseudocode for: if score >= 50 output 'Pass', otherwise output 'Fail'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Pseudocode selection",
                              "statement": "IF condition THEN action ELSE action ENDIF."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IF score >= 50 THEN",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "OUTPUT 'Pass'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "ELSE OUTPUT 'Fail' ENDIF (structure complete and correct).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "IF score >= 50 THEN OUTPUT 'Pass' ELSE OUTPUT 'Fail' ENDIF",
          "commonErrors": [
                    "Missing ENDIF or writing the condition backwards."
          ]
},
        },
        {
          id: "ecs10-u8-selection-logic-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between a compound condition and a nested IF, with an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Compound vs nested",
                              "statement": "One IF with combined tests vs IF inside IF."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compound condition combines tests in one IF using AND/OR/NOT.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: IF age >= 18 AND has_id = TRUE THEN ...",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Nested IF places a whole IF inside a branch — inner decision only reached if outer is TRUE.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: IF logged_in THEN IF role = 'admin' THEN ... — checks role only for logged-in users.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Compound = combined tests in one IF; nested = IF inside IF for dependent decisions.",
          "commonErrors": [
                    "Giving only one type or no example."
          ]
},
        },
        {
          id: "ecs10-u8-selection-logic-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A cinema charges: children (under 12) £4; students £6 with ID; adults £9; pensioners (65+) £7 with ID.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Draw a decision table mapping the conditions (age group + ID status) to ticket prices, or list the rules.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write pseudocode using ELSE IF to calculate the price for a given age and has_id flag.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Decision table + pseudocode",
                              "statement": "All cases covered, tested in order."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rules: under 12 → £4 (no ID needed); student with ID → £6; 65+ with ID → £7; otherwise adult → £9.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "All combinations covered with no gaps or overlaps.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "ID requirement correctly applied only to student/pensioner prices.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "IF age < 12 THEN price = 4 ELSEIF is_student AND has_id THEN price = 6 ELSEIF age >= 65 AND has_id THEN price = 7 ELSE price = 9 ENDIF.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Compound conditions correctly use AND for ID checks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Order correct — under-12 tested first so a 10-year-old never falls through to adult price.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) under12=£4; student+ID=£6; 65++ID=£7; else=£9 (b) ordered ELSE IF chain with AND conditions.",
          "commonErrors": [
                    "Testing adult price first — order matters in ELSE IF."
          ]
},
        },
        {
          id: "ecs10-u8-selection-logic-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A login system allows 3 attempts. Write the selection/iteration logic and explain the lockout.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode that lets a user try a password up to 3 times, stopping early on success.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what happens after the third failed attempt and why this matters for security.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Loop + selection",
                              "statement": "Repeat attempts; exit on success or limit."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "attempts = 0; logged_in = FALSE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "WHILE attempts < 3 AND logged_in = FALSE: ask password; IF correct THEN logged_in = TRUE ELSE attempts = attempts + 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Loop structure correct — stops on success or after 3 failures.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "After 3 failures the account is locked and further attempts are blocked.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "This slows brute-force attacks that guess passwords by trial and error.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Without a limit an attacker could try thousands of passwords automatically.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Lockout also alerts the legitimate user that someone may be attacking their account.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) loop max 3 attempts, exit on success (b) lockout blocks brute-force guessing and signals attack.",
          "commonErrors": [
                    "Allowing unlimited attempts — defeats the security purpose."
          ]
},
        },
        {
          id: "ecs10-u8-selection-logic-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An online shop offers discounts: 10% off orders over £50; extra 5% for members; free delivery over £30.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Draw or describe a decision table covering all combinations of order value, membership and delivery choice.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Write pseudocode that calculates the final price and delivery charge for a £60 order placed by a member choosing delivery.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Identify one edge case the logic must handle and explain how.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Decision table",
                              "statement": "Map all condition combinations to actions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Discount conditions: total > £50 → 10%; member → extra 5%; delivery free if total > £30.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "All combinations of the three conditions represented (e.g. member + >£50 + delivery).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each combination maps to a clear price/delivery outcome — no gaps.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Non-member or <=£50 cases still covered.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "discount = 10% + 5% = 15% → price = 60 × 0.85 = £51.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Delivery: £60 > £30 so delivery charge = 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pseudocode uses compound/nested IFs correctly for the two independent conditions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Edge case: order exactly £50 — must use >= vs > correctly (10% needs over £50).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Or £30 delivery boundary — 'over £30' excludes exactly £30.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Boundary values must match the business rule exactly or customers are over/undercharged.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) all condition combos → outcomes (b) £51, free delivery (c) boundary values £50/£30 need exact comparisons.",
          "commonErrors": [
                    "Ignoring that member discount stacks with the over-£50 discount."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u8-boolean-notes",
      title: "Boolean logic and selection — notes",
      summary: "AND/OR/NOT/XOR truth tables, compound conditions, ELSE IF chains, nested selection and decision tables.",
      sections: [
        { heading: "Operators", body: "AND needs both TRUE; OR needs one; NOT reverses; XOR needs exactly one." },
        { heading: "Selection", body: "ELSE IF tests in order — first TRUE wins; compound conditions combine tests in one IF." },
        { heading: "Decision tables", body: "List every condition combination to guarantee no case is missed; watch boundary values." },
      ],
    },
  ],
};
