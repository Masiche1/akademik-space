module.exports = [
  {
    file: "lesson-6-1.ts",
    exportName: "lesson61",
    lesson: {
      id: "ecs10-u6-lesson-6-1",
      code: "6-1",
      title: "Program Testing and Test Data",
      goal: "I CAN explain why programs are tested and choose suitable normal, boundary and erroneous test data.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — programming",
        "4CP1 testing: purposes, stages and test data",
      ],
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
          questions: [
            {
              id: "ecs10-u6-testing-purpose-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is the main purpose of testing a program?",
              response: { type: "mcq", choices: [
                { id: "a", text: "To make the program run faster" },
                { id: "b", text: "To check it behaves as required" },
                { id: "c", text: "To remove all comments" },
                { id: "d", text: "To increase memory use" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Testing", statement: "Checking behaviour against requirements." }],
                steps: [{ reasoning: "Testing compares actual behaviour with expected behaviour to find errors.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) To check it behaves as required",
              },
            },
            {
              id: "ecs10-u6-testing-purpose-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "State the difference between the expected result and the actual result in a test.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Expected vs actual", statement: "Expected is predicted; actual is produced." }],
                steps: [
                  { reasoning: "Expected result is what the specification says should happen.", marks: 1, markCode: "B" },
                  { reasoning: "Actual result is what the program really outputs.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Expected = predicted correct output; actual = output produced",
              },
            },
            {
              id: "ecs10-u6-testing-purpose-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Name three levels of testing and state what each checks.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Testing levels", statement: "Testing can focus on parts or the whole system." }],
                steps: [
                  { reasoning: "Unit testing checks a single module or subroutine.", marks: 1, markCode: "B" },
                  { reasoning: "System testing checks the complete program as a whole.", marks: 1, markCode: "B" },
                  { reasoning: "Acceptance testing checks whether the product meets user requirements.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Unit, system and acceptance testing",
              },
            },
            {
              id: "ecs10-u6-testing-purpose-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "A program should display 'Adult' for age >= 18 and 'Child' otherwise.",
              parts: [
                { label: "a", prompt: "State the expected result for input age = 18.", marks: 2 },
                { label: "b", prompt: "State the expected result for input age = 17.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Expected results", statement: "Derive expected output from the rule before testing." }],
                steps: [
                  { part: "a", reasoning: "18 >= 18 is TRUE, so expected output is Adult.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "17 >= 18 is FALSE, so expected output is Child.", marks: 2, markCode: "B" },
                ],
                finalAnswer: "age 18 → Adult; age 17 → Child",
              },
            },
            {
              id: "ecs10-u6-testing-purpose-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A login program should accept a username and password. It should reject empty fields and wrong passwords.",
              parts: [
                { label: "a", prompt: "State two purposes of testing this program.", marks: 2 },
                { label: "b", prompt: "Suggest three test inputs and the expected result for each.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Test design", statement: "Choose inputs that check normal, boundary and invalid behaviour." }],
                steps: [
                  { part: "a", reasoning: "Testing checks correct login and correct rejection of invalid attempts.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Valid username/password → access granted; empty username → rejected; correct username wrong password → rejected.", marks: 4, markCode: "M" },
                ],
                finalAnswer: "Verify acceptance and rejection; test valid, empty and wrong-password cases",
              },
            },
            {
              id: "ecs10-u6-testing-purpose-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A school report program calculates average = total / count. It must handle count = 0 safely.",
              parts: [
                { label: "a", prompt: "Explain why testing is needed before release.", marks: 3 },
                { label: "b", prompt: "Describe what could happen if count = 0 is not handled.", marks: 3 },
                { label: "c", prompt: "Suggest an expected result or safe behaviour for count = 0.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Robust testing", statement: "Test edge cases that could cause errors or misleading output." }],
                steps: [
                  { part: "a", reasoning: "Testing finds errors before users rely on the report, especially division and boundary cases.", marks: 3, markCode: "R" },
                  { part: "b", reasoning: "Division by zero may crash the program or produce an undefined/invalid average.", marks: 3, markCode: "B" },
                  { part: "c", reasoning: "Display 'No data' or 0 average with a message rather than dividing by zero.", marks: 3, markCode: "M" },
                ],
                finalAnswer: "Test edge cases; count=0 can cause division by zero; handle with a safe message/default",
              },
            },
          ],
        },
        {
          id: "ecs10-u6-test-data",
          title: "Types of test data",
          skill: "Choose normal, boundary, extreme and erroneous test data and predict expected results.",
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
          questions: [
            {
              id: "ecs10-u6-test-data-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which test data type checks the edge of a valid range?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Normal" },
                { id: "b", text: "Boundary" },
                { id: "c", text: "Erroneous" },
                { id: "d", text: "Random" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Boundary data", statement: "Input at the edge of validity." }],
                steps: [{ reasoning: "Boundary tests target limits such as minimum and maximum.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) Boundary",
              },
            },
            {
              id: "ecs10-u6-test-data-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "A program accepts ages from 5 to 18 inclusive. Give the upper boundary test value.",
              response: { type: "numeric", parts: [{ label: "value", answer: 18 }] },
              markscheme: {
                principles: [{ kind: "definition", name: "Boundary data", statement: "Use minimum or maximum valid values." }],
                steps: [
                  { reasoning: "Valid range ends at 18.", marks: 1, markCode: "B" },
                  { reasoning: "18 is the maximum valid value, so it is the upper boundary.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "18",
              },
            },
            {
              id: "ecs10-u6-test-data-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "For an input field that must contain a whole number from 1 to 50, choose one normal, one boundary and one erroneous test value.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Test data selection", statement: "Cover typical, edge and invalid inputs." }],
                steps: [
                  { reasoning: "Normal: 25.", marks: 1, markCode: "B" },
                  { reasoning: "Boundary: 1 or 50.", marks: 1, markCode: "B" },
                  { reasoning: "Erroneous: 0, 51 or text such as 'abc'.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Normal 25; boundary 1/50; erroneous 0/51/text",
              },
            },
            {
              id: "ecs10-u6-test-data-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "A password field requires at least 8 characters.",
              parts: [
                { label: "a", prompt: "State a boundary test input.", marks: 2 },
                { label: "b", prompt: "State an erroneous test input and expected behaviour.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Boundary and invalid tests", statement: "Test exact limits and invalid input." }],
                steps: [
                  { part: "a", reasoning: "Use a password of exactly 8 characters, the minimum valid length.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Use 7 characters; expected result is rejection or a prompt to enter a longer password.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Boundary: 8 characters; erroneous: 7 characters should be rejected",
              },
            },
            {
              id: "ecs10-u6-test-data-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A program calculates discount: 10% if total >= 100, otherwise no discount.",
              parts: [
                { label: "a", prompt: "Choose three test totals covering boundary and normal cases.", marks: 2 },
                { label: "b", prompt: "State expected discount for each chosen total.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Boundary testing", statement: "Test just below, at and above the threshold." }],
                steps: [
                  { part: "a", reasoning: "Choose 99, 100 and 150.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "99 → 0; 100 → 10; 150 → 15.", marks: 4, markCode: "M" },
                ],
                finalAnswer: "99→0; 100→10; 150→15",
              },
            },
            {
              id: "ecs10-u6-test-data-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "Design test data for a program that accepts an exam score from 0 to 100 inclusive and awards 'Pass' for score >= 40.",
              parts: [
                { label: "a", prompt: "List four test inputs covering normal, boundary and erroneous data.", marks: 3 },
                { label: "b", prompt: "State the expected output for each input.", marks: 3 },
                { label: "c", prompt: "Explain why erroneous data should still be tested even though it is invalid.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Comprehensive test data", statement: "Cover valid ranges, limits and invalid inputs." }],
                steps: [
                  { part: "a", reasoning: "Examples: 65 normal, 40 boundary pass, 39 boundary fail, 105 erroneous.", marks: 3, markCode: "B" },
                  { part: "b", reasoning: "65 Pass; 40 Pass; 39 Fail; 105 rejected/error message.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Invalid input can crash or corrupt data if not handled safely.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "65 Pass, 40 Pass, 39 Fail, 105 rejected; invalid data tests safety",
                commonErrors: ["Testing only normal values and missing boundary errors."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs10-u6-lesson-6-1-notes",
      title: "Testing and test data — notes",
      summary: "Testing compares expected and actual results; good test data covers normal, boundary, extreme and erroneous inputs.",
      sections: [
        { heading: "Purpose", body: "Testing finds errors and checks that outputs match requirements before release." },
        { heading: "Data types", body: "Normal data is typical; boundary data tests limits; erroneous data checks invalid input." },
        { heading: "Test plan", body: "Record inputs, expected results and actual results so tests can be repeated." },
      ],
    },
  },
  {
    file: "lesson-6-2.ts",
    exportName: "lesson62",
    lesson: {
      id: "ecs10-u6-lesson-6-2",
      code: "6-2",
      title: "Debugging and Error Handling",
      goal: "I CAN identify syntax, logic and runtime errors and use debugging techniques to locate faults.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — programming",
        "4CP1 debugging: error types, trace tables and error handling",
      ],
      vocabulary: [
        { term: "Syntax error", definition: "An error in the program's structure or rules, preventing it from running." },
        { term: "Logic error", definition: "An error where the program runs but produces wrong results." },
        { term: "Runtime error", definition: "An error that occurs while the program is running, such as division by zero." },
        { term: "Dry run", definition: "Manually tracing an algorithm or program with sample data without running it." },
        { term: "Trace table", definition: "A table recording variable values at each step to find where logic goes wrong." },
        { term: "Breakpoint", definition: "A marked point where execution pauses so variables can be inspected." },
        { term: "Exception handling", definition: "Code that responds safely when an error occurs during execution." },
      ],
      concepts: [
        {
          id: "ecs10-u6-error-types",
          title: "Types of program errors",
          skill: "Distinguish syntax, logic and runtime errors using examples.",
          sections: [
            {
              heading: "Syntax errors",
              body: "A **syntax error** breaks the language rules, such as a missing bracket, misspelt keyword or incorrect punctuation. The program usually will not compile or run until the syntax error is fixed.\n\nExample: `IF score > 50` without THEN/ENDIF in pseudocode, or `prin('Hello')` instead of `print('Hello')`.",
            },
            {
              heading: "Logic and runtime errors",
              body: "A **logic error** lets the program run but gives wrong results, such as using `>` instead of `>=`. A **runtime error** happens during execution, such as dividing by zero or reading input of the wrong type.\n\nLogic errors are often harder to find because there is no crash; tests with known expected results are essential.",
            },
          ],
          keyFormulas: [
            { name: "Syntax error", statement: "program cannot run because rules are broken" },
            { name: "Logic error", statement: "program runs but output is wrong" },
            { name: "Runtime error", statement: "program fails during execution" },
          ],
          workedExample: {
            problem: "A program should pass scores >= 50 but uses >. Classify the error.",
            solution: "It is a logic error: a score of exactly 50 is wrongly failed even though the program runs.",
          },
          questions: [
            {
              id: "ecs10-u6-error-types-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which error prevents a program from compiling or starting?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Logic error" },
                { id: "b", text: "Runtime error" },
                { id: "c", text: "Syntax error" },
                { id: "d", text: "Design error" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Syntax error", statement: "Breaks language rules before execution." }],
                steps: [{ reasoning: "Syntax errors stop the program from being parsed or run.", marks: 1, markCode: "B" }],
                finalAnswer: "(c) Syntax error",
              },
            },
            {
              id: "ecs10-u6-error-types-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Give one example of a runtime error.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Runtime error", statement: "Occurs during execution." }],
                steps: [
                  { reasoning: "Division by zero is a common runtime error.", marks: 1, markCode: "B" },
                  { reasoning: "Other valid examples include invalid memory access or wrong input type causing a crash.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Division by zero (or similar execution-time failure)",
              },
            },
            {
              id: "ecs10-u6-error-types-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A program runs without crashing but gives the wrong average. Classify the error and explain how it could be found.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Logic error", statement: "Runs but produces incorrect results." }],
                steps: [
                  { reasoning: "This is a logic error because execution continues.", marks: 1, markCode: "B" },
                  { reasoning: "It could be found by testing with known inputs and comparing to expected results.", marks: 1, markCode: "M" },
                  { reasoning: "A trace table or dry run can reveal where variables become wrong.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Logic error; found by testing/tracing against expected results",
              },
            },
            {
              id: "ecs10-u6-error-types-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "Classify each described fault.",
              parts: [
                { label: "a", prompt: "Missing ENDIF in an IF block.", marks: 2 },
                { label: "b", prompt: "Using >= where the requirement is >.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Error classification", statement: "Syntax breaks rules; logic changes results." }],
                steps: [
                  { part: "a", reasoning: "Missing ENDIF is a syntax/structure error.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Wrong comparison operator is a logic error.", marks: 2, markCode: "B" },
                ],
                finalAnswer: "(a) syntax error (b) logic error",
              },
            },
            {
              id: "ecs10-u6-error-types-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A program calculates tax = income * 0.2 but the requirement is tax = income * 0.25. It only crashes when income is negative.",
              parts: [
                { label: "a", prompt: "Identify the logic error.", marks: 2 },
                { label: "b", prompt: "Identify the possible runtime error.", marks: 2 },
                { label: "c", prompt: "Explain why tests should include negative income.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Error types", statement: "Wrong formula is logic; execution failure is runtime." }],
                steps: [
                  { part: "a", reasoning: "Using 0.2 instead of 0.25 gives wrong tax for all incomes.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Negative income may trigger a crash or invalid calculation at runtime.", marks: 2, markCode: "B" },
                  { part: "c", reasoning: "Erroneous/boundary data can expose crashes that normal positive inputs miss.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Logic: wrong rate; runtime: negative income crash; test invalid inputs",
              },
            },
            {
              id: "ecs10-u6-error-types-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A student program should output the larger of two numbers but sometimes outputs the smaller.",
              parts: [
                { label: "a", prompt: "State whether this is a syntax, logic or runtime error and justify.", marks: 3 },
                { label: "b", prompt: "Give two input pairs that would reveal the fault.", marks: 3 },
                { label: "c", prompt: "Explain how a trace table would help locate the fault.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Logic error", statement: "Program runs but selection of larger value is wrong." }],
                steps: [
                  { part: "a", reasoning: "It is a logic error because the program runs but chooses the wrong result.", marks: 3, markCode: "B" },
                  { part: "b", reasoning: "Examples: 5 and 2 should output 5; 3 and 9 should output 9.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "A trace table records variable values each step, showing where the comparison or assignment fails.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "Logic error; test pairs like (5,2) and (3,9); trace variables to find wrong comparison",
              },
            },
          ],
        },
        {
          id: "ecs10-u6-debugging-techniques",
          title: "Debugging techniques",
          skill: "Use dry runs, trace tables, breakpoints and validation to locate and fix faults.",
          sections: [
            {
              heading: "Manual techniques",
              body: "A **dry run** means tracing the algorithm or code by hand with sample data. A **trace table** records variable values after each step, making it easy to see where a value first becomes wrong. These techniques are especially useful for logic errors.\n\nBreakpoints pause execution at chosen lines so the programmer can inspect variables. Stepping executes one line at a time, helping identify the exact instruction that changes state unexpectedly.",
            },
            {
              heading: "Preventing faults",
              body: "**Input validation** checks data before use, reducing runtime errors. Clear variable names, comments and modular subroutines make faults easier to isolate. Testing each module separately limits the search area.\n\nWhen a fault is found, reproduce it with the smallest possible input, fix it, then retest the same input and related boundary cases.",
            },
          ],
          keyFormulas: [
            { name: "Dry run", statement: "trace algorithm manually with sample data" },
            { name: "Trace table", statement: "record variable values at each step" },
            { name: "Breakpoint", statement: "pause execution to inspect state" },
            { name: "Validation", statement: "check input before processing" },
          ],
          workedExample: {
            problem: "A loop adds 1 to total but starts total at 1. Use a trace table to show the error.",
            solution: "For values [2,3], expected total 5; traced total becomes 6 because it started at 1 instead of 0.",
          },
          questions: [
            {
              id: "ecs10-u6-debugging-techniques-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is a dry run?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Running the program at high speed" },
                { id: "b", text: "Tracing the algorithm manually with sample data" },
                { id: "c", text: "Deleting all errors automatically" },
                { id: "d", text: "Printing the source code" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Dry run", statement: "Manual trace with sample data." }],
                steps: [{ reasoning: "A dry run follows the steps by hand to check logic without executing code.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) Manual trace with sample data",
              },
            },
            {
              id: "ecs10-u6-debugging-techniques-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What does a breakpoint do in a debugger?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Breakpoint", statement: "Pauses execution at a chosen point." }],
                steps: [
                  { reasoning: "It stops the program at a selected line.", marks: 1, markCode: "B" },
                  { reasoning: "The programmer can then inspect variables and step through later lines.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Pauses execution so variables/state can be inspected",
              },
            },
            {
              id: "ecs10-u6-debugging-techniques-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain how a trace table helps find a logic error in a loop.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Trace table", statement: "Records variable values step by step." }],
                steps: [
                  { reasoning: "It shows the value of each variable after every iteration.", marks: 1, markCode: "B" },
                  { reasoning: "The first row where a value differs from expected identifies the faulty step.", marks: 1, markCode: "M" },
                  { reasoning: "This is especially useful when the program runs but gives wrong results.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Records variables each step; first wrong value reveals faulty instruction",
              },
            },
            {
              id: "ecs10-u6-debugging-techniques-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "A program crashes when the user enters text for a numeric field.",
              parts: [
                { label: "a", prompt: "Classify the error type.", marks: 2 },
                { label: "b", prompt: "Suggest one way to prevent the crash.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Input validation", statement: "Check input type/range before processing." }],
                steps: [
                  { part: "a", reasoning: "Runtime error caused by invalid input type.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Validate that input is numeric before converting or calculating; reject invalid input safely.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Runtime error; validate input type before use",
              },
            },
            {
              id: "ecs10-u6-debugging-techniques-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A loop should print numbers 1 to 5 but prints 1 to 4. The code uses FOR i ← 1 TO 5 but the body is inside the loop incorrectly.",
              parts: [
                { label: "a", prompt: "State two possible causes for the missing 5.", marks: 2 },
                { label: "b", prompt: "Describe how stepping through the code would help.", marks: 2 },
                { label: "c", prompt: "State one preventive coding practice.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Debugging loop bounds", statement: "Check loop limits and body placement." }],
                steps: [
                  { part: "a", reasoning: "Possible causes: loop ends at 4, output uses i-1, or last iteration is skipped by an EXIT/IF error.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Stepping shows i values and whether the body executes for i=5.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Use clear bounds, test boundary values and keep loop body inside ENDFOR.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Check loop bound/body placement; step to see i=5 execution; test boundaries",
              },
            },
            {
              id: "ecs10-u6-debugging-techniques-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A program calculates average = total / count but sometimes returns a huge negative number instead of crashing.",
              parts: [
                { label: "a", prompt: "Suggest why a huge negative result might occur instead of a clear crash.", marks: 3 },
                { label: "b", prompt: "Describe how a trace table would investigate count and total values.", marks: 3 },
                { label: "c", prompt: "Suggest two safeguards to prevent the problem.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Debugging numeric faults", statement: "Inspect accumulator values and guard invalid states." }],
                steps: [
                  { part: "a", reasoning: "Integer overflow, uninitialised count or wrong sign could produce a large negative value without an immediate crash.", marks: 3, markCode: "R" },
                  { part: "b", reasoning: "Record total and count after each addition; find where count becomes 0 or negative or total becomes wrong.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Initialise variables, validate count > 0 before division, and handle division-by-zero safely.", marks: 3, markCode: "M" },
                ],
                finalAnswer: "Inspect total/count; initialise and validate before division; handle zero safely",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs10-u6-lesson-6-2-notes",
      title: "Debugging and error handling — notes",
      summary: "Syntax errors stop execution, logic errors give wrong results and runtime errors occur during execution.",
      sections: [
        { heading: "Error types", body: "Syntax breaks rules; logic changes output; runtime fails during execution." },
        { heading: "Techniques", body: "Dry runs, trace tables, breakpoints and stepping locate where values go wrong." },
        { heading: "Prevention", body: "Validate input, initialise variables and test boundary cases." },
      ],
    },
  },
  {
    file: "lesson-6-3.ts",
    exportName: "lesson63",
    lesson: {
      id: "ecs10-u6-lesson-6-3",
      code: "6-3",
      title: "Software Development and Documentation",
      goal: "I CAN describe stages of software development and explain the role of comments, guides and maintenance.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — programming",
        "4CP1 software development: lifecycle, documentation and maintenance",
      ],
      vocabulary: [
        { term: "Requirements", definition: "The needs and features the software must satisfy." },
        { term: "Design", definition: "Planning the structure, inputs, outputs and algorithms before coding." },
        { term: "Implementation", definition: "Writing the actual program code." },
        { term: "Maintenance", definition: "Updating and repairing software after release." },
        { term: "Comment", definition: "Text in code ignored by the compiler that explains purpose or logic." },
        { term: "User guide", definition: "Documentation explaining how an end user operates the software." },
        { term: "Technical documentation", definition: "Documentation for developers describing structure, variables and algorithms." },
      ],
      concepts: [
        {
          id: "ecs10-u6-development-stages",
          title: "Software development stages",
          skill: "Describe requirements, design, implementation, testing and maintenance in the software lifecycle.",
          sections: [
            {
              heading: "Lifecycle overview",
              body: "Software development usually begins with **requirements gathering**, where user needs are identified. **Design** plans the solution before coding. **Implementation** writes the program. **Testing** checks correctness. **Deployment** releases it to users, and **maintenance** fixes faults and adds improvements.\n\nDifferent projects may repeat stages. An iterative approach builds a small working version, tests it, learns from feedback and improves it, rather than trying to finish everything at once.",
            },
            {
              heading: "Why stages matter",
              body: "Skipping requirements can produce software that solves the wrong problem. Poor design makes coding harder and bugs more likely. Testing too late leaves little time to fix faults. Maintenance is not optional because real data, users and environments change.\n\nFor small school projects, a simple cycle is enough: define the task, plan the algorithm, code, test with sample data and review.",
            },
          ],
          keyFormulas: [
            { name: "Lifecycle", statement: "requirements → design → implementation → testing → deployment → maintenance" },
            { name: "Iterative development", statement: "build, test, feedback, improve" },
            { name: "Requirements", statement: "what the software must do" },
          ],
          workedExample: {
            problem: "A club wants a program to record member names and dues. Outline the development stages.",
            solution: "Requirements: store names/due amounts. Design: choose array/database and menu. Implement: code input/output. Test: normal and invalid data. Maintain: fix bugs and add features.",
          },
          questions: [
            {
              id: "ecs10-u6-development-stages-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which stage comes before coding in software development?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Maintenance" },
                { id: "b", text: "Design" },
                { id: "c", text: "Deployment" },
                { id: "d", text: "Documentation only" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "principle", name: "Development order", statement: "Plan before implementing." }],
                steps: [{ reasoning: "Design planning precedes writing code.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) Design",
              },
            },
            {
              id: "ecs10-u6-development-stages-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What are requirements in software development?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Requirements", statement: "Needs and features the software must satisfy." }],
                steps: [
                  { reasoning: "They describe what the software should do.", marks: 1, markCode: "B" },
                  { reasoning: "They guide design, coding and testing.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "The needs/features the software must satisfy",
              },
            },
            {
              id: "ecs10-u6-development-stages-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "List the main stages of the software development lifecycle in order.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Lifecycle", statement: "Requirements to maintenance." }],
                steps: [
                  { reasoning: "Requirements and design come first.", marks: 1, markCode: "B" },
                  { reasoning: "Implementation and testing follow.", marks: 1, markCode: "B" },
                  { reasoning: "Deployment and maintenance complete the cycle.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Requirements → design → implementation → testing → deployment → maintenance",
              },
            },
            {
              id: "ecs10-u6-development-stages-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "A team builds a simple quiz app.",
              parts: [
                { label: "a", prompt: "State one requirement for the app.", marks: 2 },
                { label: "b", prompt: "State one design decision needed before coding.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Project planning", statement: "Define needs and structure before coding." }],
                steps: [
                  { part: "a", reasoning: "Example requirement: ask 10 questions and show a final score.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Example design decision: store questions in an array and use a loop.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Requirement example; design example",
              },
            },
            {
              id: "ecs10-u6-development-stages-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A school library program is released but later needs a new feature for reservations.",
              parts: [
                { label: "a", prompt: "Identify the lifecycle stage that covers this new work.", marks: 2 },
                { label: "b", prompt: "Explain why maintenance is needed after release.", marks: 2 },
                { label: "c", prompt: "Suggest one testing activity for the new reservation feature.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Maintenance", statement: "Software evolves after release." }],
                steps: [
                  { part: "a", reasoning: "Maintenance/update stage.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "User needs, data and environments change, so faults and improvements arise.", marks: 2, markCode: "R" },
                  { part: "c", reasoning: "Test reservation with valid member, duplicate reservation and invalid date cases.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Maintenance; needs change after release; test new feature with normal/boundary/invalid data",
              },
            },
            {
              id: "ecs10-u6-development-stages-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A small team wants to build a timetable app for students.",
              parts: [
                { label: "a", prompt: "Describe how an iterative approach differs from writing the whole program at once.", marks: 3 },
                { label: "b", prompt: "Give an example of an early working version and what feedback would improve it.", marks: 3 },
                { label: "c", prompt: "Explain why testing should happen during development, not only at the end.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Iterative development", statement: "Build small versions, test, learn and improve." }],
                steps: [
                  { part: "a", reasoning: "Iterative builds a small working version first, then improves it after feedback; waterfall-like coding tries to finish everything before review.", marks: 3, markCode: "R" },
                  { part: "b", reasoning: "Early version could show Monday timetable only; feedback might add other days and clash warnings.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Early testing catches faults while context is fresh and prevents building later features on broken code.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "Iterative = small working versions improved by feedback; early version + feedback; early testing prevents late faults",
              },
            },
          ],
        },
        {
          id: "ecs10-u6-documentation",
          title: "Documentation and maintenance",
          skill: "Explain comments, user guides, technical documentation and software maintenance.",
          sections: [
            {
              heading: "Types of documentation",
              body: "**Comments** inside code explain tricky logic or why a decision was made; they are ignored by the compiler. A **user guide** tells end users how to operate the software. **Technical documentation** helps developers understand variables, algorithms, file formats and structure.\n\nGood documentation is written for its audience. A user guide should avoid unnecessary technical detail; technical notes should be precise enough for another programmer to maintain the code.",
            },
            {
              heading: "Maintenance",
              body: "Maintenance includes fixing bugs, improving performance, updating for new requirements and keeping documentation accurate. Even small changes should be tested because documentation and code can drift apart.\n\nVersion notes or change logs record what changed and why, helping future developers understand the software's history.",
            },
          ],
          keyFormulas: [
            { name: "Comment", statement: "explanation inside code ignored by compiler" },
            { name: "User guide", statement: "how to operate the software" },
            { name: "Technical documentation", statement: "how the software is built" },
            { name: "Maintenance", statement: "fix, update and improve after release" },
          ],
          workedExample: {
            problem: "A function calculates a grade. Give one comment and one user-guide note.",
            solution: "Comment: '// Convert mark to grade using boundaries.' User guide: 'Enter marks from 0 to 100; grades A-E are shown.'",
          },
          questions: [
            {
              id: "ecs10-u6-documentation-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is a comment in program code?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A command that runs the program" },
                { id: "b", text: "Text ignored by the compiler that explains code" },
                { id: "c", text: "A type of variable" },
                { id: "d", text: "A test result" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Comment", statement: "Ignored by compiler; explains code." }],
                steps: [{ reasoning: "Comments are for humans and do not affect execution.", marks: 1, markCode: "B" }],
                finalAnswer: "(b) Text ignored by the compiler",
              },
            },
            {
              id: "ecs10-u6-documentation-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "State the difference between a user guide and technical documentation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Documentation types", statement: "User vs developer audience." }],
                steps: [
                  { reasoning: "User guide explains how to operate the software.", marks: 1, markCode: "B" },
                  { reasoning: "Technical documentation explains how the software is designed and coded.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "User guide = how to use; technical docs = how it is built",
              },
            },
            {
              id: "ecs10-u6-documentation-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain two benefits of adding comments to a program.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Code comments", statement: "Improve understanding and maintenance." }],
                steps: [
                  { reasoning: "Comments explain complex logic or reasons for decisions.", marks: 1, markCode: "B" },
                  { reasoning: "They help other programmers debug and modify the code later.", marks: 1, markCode: "B" },
                  { reasoning: "They reduce the need to reverse-engineer the programmer's intention.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Explain logic and help future maintenance/debugging",
              },
            },
            {
              id: "ecs10-u6-documentation-q4",
              difficulty: "challenge",
              totalMarks: 4,
              stem: "A released program has a bug and the school wants a new report feature.",
              parts: [
                { label: "a", prompt: "Classify the bug fix as maintenance.", marks: 2 },
                { label: "b", prompt: "State one documentation update needed for the new feature.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Maintenance and docs", statement: "Changes require code and documentation updates." }],
                steps: [
                  { part: "a", reasoning: "Fixing a released bug is corrective maintenance.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Update the user guide and/or technical notes to describe the new report.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Bug fix = maintenance; update user/technical documentation",
              },
            },
            {
              id: "ecs10-u6-documentation-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A student submits code with no comments and no guide. The teacher cannot understand the variables.",
              parts: [
                { label: "a", prompt: "Explain why meaningful variable names are a form of documentation.", marks: 2 },
                { label: "b", prompt: "Suggest two improvements for future submissions.", marks: 2 },
                { label: "c", prompt: "Explain why documentation should be updated when code changes.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Documentation quality", statement: "Names, comments and guides communicate intent." }],
                steps: [
                  { part: "a", reasoning: "Names like totalScore reveal purpose better than x or temp.", marks: 2, markCode: "B" },
                  { part: "b", reasoning: "Add comments for complex logic and provide a short user/technical guide.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Outdated docs mislead maintainers and can cause new bugs.", marks: 2, markCode: "R" },
                ],
                finalAnswer: "Good names document intent; add comments/guides; keep docs in sync with code",
              },
            },
            {
              id: "ecs10-u6-documentation-q6",
              difficulty: "challenge",
              totalMarks: 9,
              stem: "A company releases a payroll program and later must add pension calculations.",
              parts: [
                { label: "a", prompt: "Identify the development stage for adding pensions.", marks: 3 },
                { label: "b", prompt: "List three documentation items that should be updated.", marks: 3 },
                { label: "c", prompt: "Explain why testing the pension feature requires boundary and erroneous data.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Maintenance lifecycle", statement: "New requirements trigger design, code, test and documentation updates." }],
                steps: [
                  { part: "a", reasoning: "Maintenance/update stage, possibly with new requirements and design.", marks: 3, markCode: "B" },
                  { part: "b", reasoning: "Update user guide, technical documentation and comments/change log.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Boundary tests check limits like 0% or maximum pension; erroneous data checks invalid inputs that could crash payroll.", marks: 3, markCode: "R" },
                ],
                finalAnswer: "Maintenance stage; update guides/comments/change log; boundary+erroneous tests protect payroll accuracy",
                commonErrors: ["Changing code without updating documentation."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs10-u6-lesson-6-3-notes",
      title: "Software development and documentation — notes",
      summary: "Software moves through requirements, design, implementation, testing, deployment and maintenance.",
      sections: [
        { heading: "Lifecycle", body: "Plan before coding; test during development; maintain after release." },
        { heading: "Documentation", body: "Comments explain code, user guides explain operation and technical docs explain structure." },
        { heading: "Maintenance", body: "Fix bugs, add features and keep documentation accurate as needs change." },
      ],
    },
  },
];
