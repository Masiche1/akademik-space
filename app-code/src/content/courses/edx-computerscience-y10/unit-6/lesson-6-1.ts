import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ecs10-u6-lesson-6-1",
  code: "6-1",
  title: "Program Testing and Test Data",
  goal: "I CAN explain why programs are tested and choose suitable normal, boundary and erroneous test data.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — programming", "4CP1 testing: purposes, stages and test data"],
  
  vocabulary: [
    { term: "Testing", definition: "Running a program with selected inputs to check whether it behaves correctly." },
    { term: "Test plan", definition: "A document listing what will be tested, the inputs used and the expected results." },
    { term: "Test data", definition: "Input values chosen specifically to test a program." },
    { term: "Normal data", definition: "Typical valid input that the program is expected to handle." },
    { term: "Boundary data", definition: "Input at the edge of a valid range, such as minimum or maximum." },
    { term: "Erroneous data", definition: "Invalid input used to check that the program rejects or handles it safely." },
    { term: "Expected result", definition: "The correct output predicted before the test is run." },
  ],
  concepts: [
    {
      id: "ecs10-u6-testing-purpose",
      title: "Why test programs?",
      skill: "Explain the purpose of testing and identify common testing stages.",
      lesson: {
        sections: [
          {
            heading: "Purpose of testing",
            body: "Testing checks whether a program meets its requirements and finds errors before release. It is not only for finding crashes; it also checks that outputs are correct for typical, extreme and invalid inputs.\n\nA good test compares the **actual result** produced by the program with the **expected result** decided from the specification. A mismatch indicates a possible error, although it could also mean the expected result was wrong.",
          },
          {
            heading: "Testing stages",
            body: "Testing can happen at several levels. **Unit testing** checks one module or subroutine. **System testing** checks the whole program working together. **Acceptance testing** checks whether the finished product meets the user's needs.\n\nTesting should be planned, not random. A test plan records the purpose, inputs, expected outputs and actual results so problems can be reproduced.",
          },
        ],
        keyFormulas: [
          { name: "Test result", statement: "pass if actual result = expected result" },
          { name: "Test levels", statement: "unit → system → acceptance" },
          { name: "Test plan", statement: "inputs + expected results + actual results" },
        ],
        workedExample: {
          problem: "A program should output 'PASS' when score >= 50. Test score = 50.",
          solution: "Expected result is PASS because 50 meets the boundary. If the program outputs FAIL, there is an error in the condition.",
        },
      },
      questions: [
        {
          id: "ecs10-u6-testing-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of testing a program?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To make the program run faster"
                    },
                    {
                              "id": "b",
                              "text": "To check it behaves as required"
                    },
                    {
                              "id": "c",
                              "text": "To remove all comments"
                    },
                    {
                              "id": "d",
                              "text": "To increase memory use"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Testing",
                              "statement": "Checking behaviour against requirements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Testing compares actual behaviour with expected behaviour to find errors.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) To check it behaves as required"
},
        },
        {
          id: "ecs10-u6-testing-purpose-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the difference between the expected result and the actual result in a test.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Expected vs actual",
                              "statement": "Expected is predicted; actual is produced."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expected result is what the specification says should happen.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Actual result is what the program really outputs.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Expected = predicted correct output; actual = output produced"
},
        },
        {
          id: "ecs10-u6-testing-purpose-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three levels of testing and state what each checks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Testing levels",
                              "statement": "Testing can focus on parts or the whole system."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unit testing checks a single module or subroutine.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "System testing checks the complete program as a whole.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Acceptance testing checks whether the product meets user requirements.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Unit, system and acceptance testing"
},
        },
        {
          id: "ecs10-u6-testing-purpose-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A program should display 'Adult' for age >= 18 and 'Child' otherwise.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the expected result for input age = 18.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the expected result for input age = 17.",
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
                              "name": "Expected results",
                              "statement": "Derive expected output from the rule before testing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "18 >= 18 is TRUE, so expected output is Adult.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "17 >= 18 is FALSE, so expected output is Child.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "age 18 → Adult; age 17 → Child"
},
        },
        {
          id: "ecs10-u6-testing-purpose-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A login program should accept a username and password. It should reject empty fields and wrong passwords.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two purposes of testing this program.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest three test inputs and the expected result for each.",
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
                              "name": "Test design",
                              "statement": "Choose inputs that check normal, boundary and invalid behaviour."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Testing checks correct login and correct rejection of invalid attempts.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Valid username/password → access granted; empty username → rejected; correct username wrong password → rejected.",
                              "marks": 4,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Verify acceptance and rejection; test valid, empty and wrong-password cases"
},
        },
        {
          id: "ecs10-u6-testing-purpose-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A school report program calculates average = total / count. It must handle count = 0 safely.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why testing is needed before release.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe what could happen if count = 0 is not handled.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest an expected result or safe behaviour for count = 0.",
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
                              "name": "Robust testing",
                              "statement": "Test edge cases that could cause errors or misleading output."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Testing finds errors before users rely on the report, especially division and boundary cases.",
                              "marks": 3,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Division by zero may crash the program or produce an undefined/invalid average.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Display 'No data' or 0 average with a message rather than dividing by zero.",
                              "marks": 3,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Test edge cases; count=0 can cause division by zero; handle with a safe message/default"
},
        },
      ],
    },
    {
      id: "ecs10-u6-test-data",
      title: "Types of test data",
      skill: "Choose normal, boundary, extreme and erroneous test data and predict expected results.",
      lesson: {
        sections: [
          {
            heading: "Categories of test data",
            body: "**Normal data** is typical valid input, such as age 16 for a student record. **Boundary data** sits at the edge of validity, such as 0 and 120 for age, or 49 and 50 for a pass mark. **Extreme data** is at the very limit of what the system can store or process. **Erroneous data** is invalid, such as text where a number is required or a negative age.\n\nGood tests include several categories because each can reveal different faults.",
          },
          {
            heading: "Choosing tests",
            body: "For a condition like `age >= 18`, boundary tests should include 17 and 18. For `mark <= 100`, test 100 and 101. For required text, test an empty string. For numeric input, test letters or symbols.\n\nAlways decide the expected result before running the test, otherwise the tester may accept whatever the program produces.",
          },
        ],
        keyFormulas: [
          { name: "Normal data", statement: "typical valid input" },
          { name: "Boundary data", statement: "minimum, maximum or just outside limit" },
          { name: "Erroneous data", statement: "invalid input that should be rejected or handled safely" },
          { name: "Extreme data", statement: "largest or smallest value the system can process" },
        ],
        workedExample: {
          problem: "A field accepts marks from 0 to 100 inclusive. Choose boundary and erroneous test data.",
          solution: "Boundary: 0 and 100. Erroneous: -1 and 101 or non-numeric text.",
        },
      },
      questions: [
        {
          id: "ecs10-u6-test-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which test data type checks the edge of a valid range?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Normal"
                    },
                    {
                              "id": "b",
                              "text": "Boundary"
                    },
                    {
                              "id": "c",
                              "text": "Erroneous"
                    },
                    {
                              "id": "d",
                              "text": "Random"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Boundary data",
                              "statement": "Input at the edge of validity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Boundary tests target limits such as minimum and maximum.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Boundary"
},
        },
        {
          id: "ecs10-u6-test-data-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A program accepts ages from 5 to 18 inclusive. Give the upper boundary test value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "value",
                              "answer": 18
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Boundary data",
                              "statement": "Use minimum or maximum valid values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Valid range ends at 18.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "18 is the maximum valid value, so it is the upper boundary.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "18"
},
        },
        {
          id: "ecs10-u6-test-data-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For an input field that must contain a whole number from 1 to 50, choose one normal, one boundary and one erroneous test value.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Test data selection",
                              "statement": "Cover typical, edge and invalid inputs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Normal: 25.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Boundary: 1 or 50.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Erroneous: 0, 51 or text such as 'abc'.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Normal 25; boundary 1/50; erroneous 0/51/text"
},
        },
        {
          id: "ecs10-u6-test-data-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A password field requires at least 8 characters.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State a boundary test input.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State an erroneous test input and expected behaviour.",
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
                              "name": "Boundary and invalid tests",
                              "statement": "Test exact limits and invalid input."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use a password of exactly 8 characters, the minimum valid length.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use 7 characters; expected result is rejection or a prompt to enter a longer password.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Boundary: 8 characters; erroneous: 7 characters should be rejected"
},
        },
        {
          id: "ecs10-u6-test-data-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A program calculates discount: 10% if total >= 100, otherwise no discount.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Choose three test totals covering boundary and normal cases.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State expected discount for each chosen total.",
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
                              "name": "Boundary testing",
                              "statement": "Test just below, at and above the threshold."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Choose 99, 100 and 150.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "99 → 0; 100 → 10; 150 → 15.",
                              "marks": 4,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "99→0; 100→10; 150→15"
},
        },
        {
          id: "ecs10-u6-test-data-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Design test data for a program that accepts an exam score from 0 to 100 inclusive and awards 'Pass' for score >= 40.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List four test inputs covering normal, boundary and erroneous data.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the expected output for each input.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why erroneous data should still be tested even though it is invalid.",
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
                              "name": "Comprehensive test data",
                              "statement": "Cover valid ranges, limits and invalid inputs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Examples: 65 normal, 40 boundary pass, 39 boundary fail, 105 erroneous.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "65 Pass; 40 Pass; 39 Fail; 105 rejected/error message.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Invalid input can crash or corrupt data if not handled safely.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "65 Pass, 40 Pass, 39 Fail, 105 rejected; invalid data tests safety",
          "commonErrors": [
                    "Testing only normal values and missing boundary errors."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u6-lesson-6-1-notes",
      title: "Testing and test data — notes",
      summary: "Testing compares expected and actual results; good test data covers normal, boundary, extreme and erroneous inputs.",
      sections: [
        { heading: "Purpose", body: "Testing finds errors and checks that outputs match requirements before release." },
        { heading: "Data types", body: "Normal data is typical; boundary data tests limits; erroneous data checks invalid input." },
        { heading: "Test plan", body: "Record inputs, expected results and actual results so tests can be repeated." },
      ],
    },
  ],
};
