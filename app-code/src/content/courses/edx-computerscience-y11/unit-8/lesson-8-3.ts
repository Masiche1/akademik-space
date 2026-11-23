import type { Lesson } from "../../../types.ts";

export const lesson343: Lesson = {
  id: "ecs11-u8-lesson-8-3",
  code: "8-3",
  title: "Testing Techniques",
  goal: "I CAN choose appropriate test data, build trace tables and describe levels of testing.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Testing programs"],
  
  vocabulary: [
    { term: "Test plan", definition: "A document listing what will be tested, the test data and the expected results." },
    { term: "Normal test data", definition: "Valid input within the expected range, testing typical use." },
    { term: "Boundary test data", definition: "Values at the edge of the acceptable range, e.g. minimum and maximum." },
    { term: "Erroneous test data", definition: "Invalid input used to check the program rejects it correctly." },
    { term: "Trace table", definition: "A table tracking variable values through each step of an algorithm." },
    { term: "Dry run", definition: "Manually stepping through code or an algorithm to check its logic." },
    { term: "Alpha testing", definition: "Testing by the developer's own team before wider release." },
  ],
  concepts: [
    {
      id: "ecs11-u8-test-levels",
      title: "Levels of Testing",
      skill: "Distinguish unit, integration, system and acceptance testing.",
      lesson: {
        sections: [
          {
            heading: "Testing levels",
            body: "**Unit testing** checks each module or subroutine on its own, using test data designed for that module's task.\n\n**Integration testing** checks that modules work correctly together — interfaces and data passing between them.\n\n**System testing** checks the complete program in its intended environment, including performance and usability.\n\n**Acceptance testing** is done by the client or end users to confirm the program meets the original requirements before sign-off.",
          },
          {
            heading: "Alpha and beta testing",
            body: "**Alpha testing** is carried out by the developer's own team in a controlled environment before release. **Beta testing** releases the program to a limited group of real users who report faults in real-world conditions.\n\nTesting at every level catches different classes of fault: unit tests catch local logic errors, integration tests catch interface problems, and acceptance testing catches mismatches with user needs.",
          },
        ],
        keyFormulas: [
          { name: "Test levels", statement: "Unit -> Integration -> System -> Acceptance." },
          { name: "Alpha vs beta", statement: "Developer team vs limited real users." },
        ],
        workedExample: {
          problem: "A calculation module works alone but produces wrong totals when the main program calls it. Which test level should have caught this?",
          solution: "Integration testing — the fault is in how modules interact, not in either module alone.",
        },
      },
      questions: [
        {
          id: "ecs11-u8-testlevels-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which level of testing checks each module on its own?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "System testing"
                    },
                    {
                              "id": "b",
                              "text": "Unit testing"
                    },
                    {
                              "id": "c",
                              "text": "Acceptance testing"
                    },
                    {
                              "id": "d",
                              "text": "Beta testing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unit testing",
                              "statement": "Tests individual modules in isolation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Testing modules individually is unit testing.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Unit testing",
          "commonErrors": [
                    "Confusing unit with system testing."
          ]
},
        },
        {
          id: "ecs11-u8-testlevels-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who typically carries out acceptance testing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The programmer"
                    },
                    {
                              "id": "b",
                              "text": "The client's end users"
                    },
                    {
                              "id": "c",
                              "text": "The hardware supplier"
                    },
                    {
                              "id": "d",
                              "text": "The compiler"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Acceptance testing",
                              "statement": "Performed by the client or end users to confirm requirements are met."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acceptance testing is done by those who will use the system.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The client's end users",
          "commonErrors": [
                    "Thinking the developer does acceptance testing — that is alpha testing."
          ]
},
        },
        {
          id: "ecs11-u8-testlevels-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the purpose of integration testing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Integration testing",
                              "statement": "Checks that modules work correctly together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It verifies modules interact correctly when combined.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It checks data passed between modules is correct.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It catches interface faults that unit tests cannot find.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Checks that combined modules pass data and control correctly.",
          "commonErrors": [
                    "Saying it tests modules individually — that is unit testing."
          ]
},
        },
        {
          id: "ecs11-u8-testlevels-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why a program should be tested at several levels rather than only tested once at the end.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Layered testing",
                              "statement": "Each level catches different fault types at different costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unit tests catch local faults while modules are small and easy to fix.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Integration tests catch interface faults between modules.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "System testing checks the whole program in its real environment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Finding faults early is cheaper than finding them in a finished product.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Reasoned conclusion.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Layered testing finds different faults early and cheaply.",
          "commonErrors": [
                    "Claiming one final test is enough because 'the program is finished'."
          ]
},
        },
        {
          id: "ecs11-u8-testlevels-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A company releases version 1.0 of an app to 50 selected users before the public launch.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the type of testing this describes.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two benefits of this approach compared with releasing to everyone at once.",
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
                              "name": "Beta testing",
                              "statement": "Limited release to real users before full launch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) This is beta testing — real users, limited group, pre-launch.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Distinguished from alpha (developer's own team).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Correctly named.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Real-world faults are found before full release.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Problems affect only 50 users, not the whole market.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Feedback improves the final product.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Beta testing.  (b) Finds real faults early; limits exposure; gathers feedback.",
          "commonErrors": [
                    "Calling it alpha testing — alpha is done by the developer's team."
          ]
},
        },
        {
          id: "ecs11-u8-testlevels-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school develops a program to calculate exam grades.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe what should happen at the unit, integration and system testing stages for this program.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain who should carry out acceptance testing and what they would check.",
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
                              "name": "Testing pyramid",
                              "statement": "Unit -> integration -> system -> acceptance, each broader in scope."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Unit: test the grade-calculation function alone with known scores.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Integration: test input module feeding the calculator and results module.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) System: test the whole program on school computers with real data.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Each stage described with a relevant example.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Acceptance testing is done by the school (the client/users).",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) They check grades match official results for sample students.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) They confirm the program meets the original requirements.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Sign-off or rejection decision based on results.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Unit: calc function; Integration: modules together; System: whole app.  (b) School checks against real grades.",
          "commonErrors": [
                    "Describing testing stages without concrete examples for the scenario."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u8-test-data",
      title: "Test Data and Trace Tables",
      skill: "Choose normal, boundary and erroneous test data and complete trace tables.",
      lesson: {
        sections: [
          {
            heading: "Types of test data",
            body: "A good **test plan** uses three kinds of data:\n\n- **Normal data** — valid values inside the expected range, e.g. age = 16 for a program expecting 11-18.\n- **Boundary data** — values at the edges of the range: the minimum, the maximum, and just outside them (10, 11, 18, 19). Boundary bugs are very common.\n- **Erroneous data** — invalid values that must be rejected, e.g. age = -5, age = 'abc', or an empty field.\n\nA program should accept normal and boundary values, and reject erroneous data with a suitable message.",
          },
          {
            heading: "Trace tables and dry runs",
            body: "A **trace table** records the value of each variable after every step of an algorithm, letting you verify the logic by hand. Columns are variables; rows are steps or loop iterations.\n\nA **dry run** is tracing the algorithm manually — the same idea applied to pseudocode. Tracing is especially useful for loops, where variables change repeatedly and it is easy to miscount iterations.",
          },
        ],
        keyFormulas: [
          { name: "Test data types", statement: "Normal (valid), boundary (edges), erroneous (invalid)." },
          { name: "Trace table", statement: "Rows = steps/iterations; columns = variables." },
        ],
        workedExample: {
          problem: "A program accepts ages 11 to 18. Give one example of each test data type.",
          solution: "Normal: 15. Boundary: 11, 18, also 10 and 19 to test rejection. Erroneous: -3 or 'abc'.",
        },
      },
      questions: [
        {
          id: "ecs11-u8-testdata-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is boundary test data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Any valid input"
                    },
                    {
                              "id": "b",
                              "text": "Values at the edge of the acceptable range"
                    },
                    {
                              "id": "c",
                              "text": "Input that crashes the program"
                    },
                    {
                              "id": "d",
                              "text": "Random numbers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Boundary data",
                              "statement": "Values at the edges of the acceptable range."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Boundary data tests the limits of valid input.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Values at the edge of the acceptable range",
          "commonErrors": [
                    "Confusing boundary data with normal data."
          ]
},
        },
        {
          id: "ecs11-u8-testdata-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a trace table used for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Recording variable values at each step"
                    },
                    {
                              "id": "b",
                              "text": "Measuring program speed"
                    },
                    {
                              "id": "c",
                              "text": "Storing user passwords"
                    },
                    {
                              "id": "d",
                              "text": "Printing the final result"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trace table",
                              "statement": "Tracks variable values through each algorithm step."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A trace table records variable values step by step.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Recording variable values at each step",
          "commonErrors": [
                    "Thinking it measures performance rather than logic."
          ]
},
        },
        {
          id: "ecs11-u8-testdata-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A program requires a password between 8 and 12 characters. Give one example each of normal, boundary and erroneous test data.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Test data selection",
                              "statement": "Normal inside range; boundary at edges; erroneous outside or wrong type."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Normal: e.g. 'password1' (9 characters, valid).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Boundary: exactly 8 or exactly 12 characters (edges of the range).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Erroneous: 7 characters, 13 characters, or a number instead of text.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. 'password1' / 8 or 12 chars / 7 chars or numeric input",
          "commonErrors": [
                    "Giving three normal values and no boundary or erroneous data."
          ]
},
        },
        {
          id: "ecs11-u8-testdata-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why boundary test data is especially important, using an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Boundary faults",
                              "statement": "Off-by-one errors cluster at range edges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Programmers often confuse < with <= at range limits.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Example: age limit 18 — should 18 be accepted? Tests at 17, 18, 19 reveal the rule.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Boundary data also tests just-outside values that must be rejected.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Many real-world faults are off-by-one errors found only at boundaries.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Example and explanation clearly linked.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Boundary tests expose off-by-one errors, e.g. whether 18 is accepted at an 18 limit.",
          "commonErrors": [
                    "Generic answer without a concrete example."
          ]
},
        },
        {
          id: "ecs11-u8-testdata-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An algorithm counts how many of the numbers 3, 7, 12 and 20 are greater than 10.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Complete a trace table showing a counter c starting at 0, processing each number in turn.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the final value of c and verify it is correct.",
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
                              "name": "Tracing a counter",
                              "statement": "Increment c only when the condition number > 10 is true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Trace: c=0; 3 not >10 -> c=0; 7 not >10 -> c=0.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 12 > 10 -> c=1; 20 > 10 -> c=2.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Table shows c = 0, 0, 0, 1, 2 across the five rows.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Final c = 2.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Check: only 12 and 20 exceed 10 — two numbers.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Verification confirms the trace.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) c ends at 2.  (b) Correct — 12 and 20 are the only values > 10.",
          "commonErrors": [
                    "Counting 3 or 7 as greater than 10."
          ]
},
        },
        {
          id: "ecs11-u8-testdata-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A program asks for an exam score 0-100 and prints 'Pass' if score >= 40, otherwise 'Fail'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Design a test plan with at least four test cases covering normal, boundary and erroneous data.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "For one boundary case, explain what the program should output and why.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Test plan design",
                              "statement": "Cover valid, boundary and invalid inputs with expected outputs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Normal case e.g. score 75 -> Pass.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Boundary cases e.g. 40 -> Pass and 39 -> Fail (the >= edge).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Outer boundaries e.g. 0 -> Fail and 100 -> Pass.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Erroneous case e.g. -5 or 105 or 'abc' -> rejected with error message.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Chosen boundary: score = 40 is the minimum pass mark.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Since the rule is >= 40, output must be 'Pass'.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Justification: 40 satisfies the condition; this tests the <= vs < boundary.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Clear link between test data, rule and expected output.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) e.g. 75->Pass, 40->Pass, 39->Fail, -5->error.  (b) 40 -> Pass (>= rule).",
          "commonErrors": [
                    "Missing the critical 39/40 boundary pair."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u8-lesson-8-3-notes",
      title: "Testing Techniques Notes",
      summary: "Test levels, test data types, trace tables and dry runs.",
      sections: [
        { heading: "Levels of testing", body: "Unit: individual modules. Integration: modules together. System: whole program in its environment. Acceptance: client/end users confirm requirements. Alpha = developer team; beta = limited real users before launch." },
        { heading: "Test data", body: "Normal: typical valid input. Boundary: min, max and just-outside values — catches off-by-one errors. Erroneous: invalid input that must be rejected. Always state expected outputs in a test plan." },
        { heading: "Trace tables", body: "Columns = variables, rows = steps or loop iterations. Fill in values after each operation to verify logic manually. Essential for checking loops and counters." },
      ],
    },
  ],
};
