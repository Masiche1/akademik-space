import type { Lesson } from "../../../types.ts";

export const lesson283: Lesson = {
  id: "ecs10-u8-lesson-8-3",
  code: "8-3",
  title: "Arrays, Testing and Debugging",
  goal: "I CAN use arrays to store collections of data and apply structured testing and debugging techniques to find and fix program errors.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming"],
  
  vocabulary: [
    { term: "Array", definition: "A data structure storing multiple values of the same type under one name." },
    { term: "Index", definition: "The position of an element in an array; most languages start at 0." },
    { term: "Syntax error", definition: "A mistake in the program's grammar that stops it compiling or running." },
    { term: "Logic error", definition: "A mistake in the algorithm's reasoning — program runs but gives wrong results." },
    { term: "Runtime error", definition: "An error occurring during execution, e.g. dividing by zero." },
    { term: "Test plan", definition: "A set of test cases with expected results used to check a program." },
    { term: "Debugging", definition: "Finding and fixing errors in a program." },
  ],
  concepts: [
    {
      id: "ecs10-u8-arrays",
      title: "Arrays and lists",
      skill: "Declare, access and process arrays using indices and loops in pseudocode.",
      lesson: {
        sections: [
          {
            heading: "Arrays",
            body: "An **array** stores many values of the same type under one name — e.g. scores = [45, 78, 62, 91]. Each value has an **index**; most languages number from 0, so scores[0] = 45 and scores[3] = 91. Loops are essential: FOR EACH processes every element, and FOR i = 0 TO LENGTH-1 accesses by index. Arrays suit fixed-size collections like monthly totals or sensor readings.",
          },
          {
            heading: "Processing arrays",
            body: "Common patterns: **sum/total** (accumulate each element), **find maximum/minimum** (compare and keep the extreme), **count/search** (check each element against a condition), and **transform** (store a modified value back). Always initialise an accumulator (total = 0) before looping. Watch for off-by-one errors — loops must cover indices 0 to length-1, not 1 to length.",
          },
        ],
        keyFormulas: [
          { name: "Indexing", statement: "first element = index 0; last = index length-1" },
          { name: "Sum pattern", statement: "total = 0; FOR EACH x: total = total + x" },
          { name: "Find max", statement: "highest = first; compare each; keep larger" },
        ],
        workedExample: {
          problem: "Array marks = [50, 65, 40, 80]. Write pseudocode to find the highest mark.",
          solution: "highest = marks[0] (= 50). FOR i = 1 TO 3: IF marks[i] > highest THEN highest = marks[i]. Comparisons: 65>50→highest=65; 40 no; 80>65→highest=80. Output: 80.",
        },
      },
      questions: [
        {
          id: "ecs10-u8-arrays-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In most programming languages, what is the index of the first element in an array?",
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
                              "text": "It depends on the language"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Array index",
                              "statement": "Most languages index from 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Arrays are zero-indexed in most languages (Python, Java, C); a few use 1.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(a) 0",
          "commonErrors": [
                    "Assuming 1-based indexing everywhere."
          ]
},
        },
        {
          id: "ecs10-u8-arrays-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Given scores = [12, 25, 8, 30], what is scores[2]?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "answer",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Indexing",
                              "statement": "scores[2] is the third element."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Index 0=12, 1=25, 2=8, 3=30 — scores[2] = 8.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Using 1-based thinking and answering 25."
          ]
},
        },
        {
          id: "ecs10-u8-arrays-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write pseudocode that outputs the sum of all elements in an array called values.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Array sum",
                              "statement": "Accumulate each element into a total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Initialise total = 0 before the loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Loop through elements: FOR EACH x IN values ... or FOR i = 0 TO LENGTH(values)-1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Inside loop: total = total + x (or total + values[i]).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "After loop: OUTPUT total.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "total=0; FOR EACH x IN values: total=total+x; OUTPUT total",
          "commonErrors": [
                    "Forgetting to initialise total — accumulator needs a starting value."
          ]
},
        },
        {
          id: "ecs10-u8-arrays-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The array temps = [18, 22, 19, 25, 21] holds daily temperatures.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode to output every temperature.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write pseudocode to count how many days were above 20 °C.",
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
                              "name": "Array iteration",
                              "statement": "FOR EACH for output; count with condition inside loop."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "FOR EACH t IN temps: OUTPUT t (or FOR i = 0 TO 4: OUTPUT temps[i]).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Loop must cover all 5 elements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Correct iteration syntax and output statement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "count = 0 initialised before loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "FOR EACH t IN temps: IF t > 20 THEN count = count + 1 ENDIF.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "OUTPUT count — result is 3 (22, 25, 21).",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) FOR EACH t IN temps OUTPUT t (b) count days with t>20 → count=3.",
          "commonErrors": [
                    "Off-by-one in index loop — 0 TO 5 would go out of bounds."
          ]
},
        },
        {
          id: "ecs10-u8-arrays-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A program must find whether the name 'Ali' appears in the array members = ['Sam', 'Jo', 'Ali', 'Kim'].",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write pseudocode for a linear search that outputs 'Found' or 'Not found'.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Dry run your algorithm and state the output.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one limitation of linear search for very large lists.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Linear search",
                              "statement": "Check each element until match or end."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "found = FALSE; FOR EACH m IN members: IF m = 'Ali' THEN found = TRUE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "After loop: IF found = TRUE THEN OUTPUT 'Found' ELSE OUTPUT 'Not found'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Algorithm structure correct — checks all elements with a flag.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sam: no; Jo: no; Ali: match → found=TRUE; Kim: checked; output 'Found'.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Linear search checks elements one by one — up to n comparisons for n items.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "For very large lists this is slow; alternatives like binary search (sorted data) or hash tables are faster.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) flag + FOR EACH + IF = 'Ali' (b) output 'Found' after checking Sam, Jo, Ali (c) slow for large lists — O(n) comparisons.",
          "commonErrors": [
                    "Exiting the loop before checking all elements when not found."
          ]
},
        },
        {
          id: "ecs10-u8-arrays-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A weather station stores hourly temperatures for a day in an array.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define an array and explain what an index is, using this example.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Write pseudocode to find the lowest temperature recorded.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate one advantage and one limitation of using a fixed-size array for this data.",
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
                              "name": "Array & index",
                              "statement": "Named collection; position number per element."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "An array stores multiple values of the same type under one name.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each value has a position called an index, usually starting at 0.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Example: temps[0] is the first hour's temperature, temps[23] the last.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "This lets the program process all 24 readings with a single loop.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "lowest = temps[0] initialised before loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "FOR EACH t IN temps (or index loop): IF t < lowest THEN lowest = t.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "OUTPUT lowest after loop — correct min-finding pattern.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Advantage: simple, fast access by index, predictable memory use.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Limitation: fixed size — cannot store more than 24 readings without resizing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Lists/dynamic arrays or linked structures handle variable amounts of data better.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) array + index definitions with temps example (b) min pattern: init first, keep smaller (c) simple/fast but fixed size.",
          "commonErrors": [
                    "Initialising lowest to 0 — must start from an actual element."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u8-testing-debugging",
      title: "Testing and debugging",
      skill: "Distinguish error types, design test cases and use dry runs and systematic methods to find and fix bugs.",
      lesson: {
        sections: [
          {
            heading: "Types of errors",
            body: "**Syntax errors** break the program's grammar — missing brackets, misspelled keywords — and are usually caught at compile time. **Logic errors** are mistakes in the algorithm's reasoning: the program runs but gives wrong answers, e.g. using + instead of -. **Runtime errors** occur during execution — dividing by zero, accessing an invalid array index — and typically crash the program. Some languages have **semantic errors**: valid syntax with unintended meaning.",
          },
          {
            heading: "Testing and debugging",
            body: "A **test plan** lists test cases with expected results. Good tests cover **normal** data, **abnormal** data (invalid inputs) and **extreme/boundary** values (0, empty, maximum). **Debugging** finds and fixes errors: dry runs and trace tables locate logic errors, print statements reveal variable values, and binary search-style narrowing halves the suspect code. Always re-test after a fix — one fix can create another bug.",
          },
        ],
        keyFormulas: [
          { name: "Syntax error", statement: "grammar mistake — won't compile/run" },
          { name: "Logic error", statement: "runs but wrong results" },
          { name: "Runtime error", statement: "crashes during execution, e.g. ÷0" },
          { name: "Test types", statement: "normal, abnormal, extreme/boundary" },
        ],
        workedExample: {
          problem: "A program calculates average = total / count and crashes when no scores are entered. Identify the error type and fix.",
          solution: "Runtime error — division by zero when count = 0. Fix: check IF count > 0 before dividing, else output a message like 'No scores entered'.",
        },
      },
      questions: [
        {
          id: "ecs10-u8-testing-debugging-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a syntax error and a logic error?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They are the same"
                    },
                    {
                              "id": "b",
                              "text": "Syntax error = grammar mistake; logic error = runs but wrong results"
                    },
                    {
                              "id": "c",
                              "text": "Syntax error crashes; logic error won't compile"
                    },
                    {
                              "id": "d",
                              "text": "Logic error is caught by the compiler"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Error types",
                              "statement": "Syntax vs logic vs runtime."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Syntax errors break grammar (caught early); logic errors let the program run but produce wrong output.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Grammar vs wrong results",
          "commonErrors": [
                    "Reversing the two definitions."
          ]
},
        },
        {
          id: "ecs10-u8-testing-debugging-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A program converts temperatures from Celsius to Fahrenheit. Give one example each of a normal, abnormal and extreme test input.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Test types",
                              "statement": "Normal, abnormal, extreme."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Normal: a typical value like 20 °C → expect 68 °F.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Abnormal: invalid input like 'abc' or -999 where a temperature is impossible.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Extreme: boundary values like 0 °C (freezing, 32 °F) or -273 °C (absolute zero).",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Normal e.g. 20; abnormal e.g. text; extreme e.g. 0 or -273 °C.",
          "commonErrors": [
                    "Only giving normal inputs — testing must cover edge cases."
          ]
},
        },
        {
          id: "ecs10-u8-testing-debugging-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A program should output 'Even' for even numbers and 'Odd' for odd, but it always outputs 'Even'. Explain how a dry run could help find the bug.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Dry run debugging",
                              "statement": "Step through with test data to expose wrong logic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dry run with input 7 (odd) and record each variable value.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Trace reveals the IF condition — e.g. checking n / 2 = 0 or wrong comparison.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The error is a logic error: the condition never evaluates TRUE for odd inputs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Correct condition is e.g. n MOD 2 = 0 for even; fix and re-test with both parities.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Dry run with odd input exposes the failing condition; it's a logic error fixed by correct MOD test.",
          "commonErrors": [
                    "Assuming it's a syntax error — the program runs, so the logic is wrong."
          ]
},
        },
        {
          id: "ecs10-u8-testing-debugging-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student's program calculates the total of an array but gives wrong answers for some inputs.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two likely error types that could cause this.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe a systematic debugging approach to find the bug.",
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
                              "name": "Debugging",
                              "statement": "Isolate, inspect, fix, retest."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Logic error — e.g. loop bounds wrong (0 TO length instead of length-1) or accumulator not initialised.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Off-by-one is a classic logic error causing wrong totals for some inputs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "A semantic error — valid code doing the wrong thing, e.g. adding index instead of value.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Reproduce with a small known array, e.g. [1, 2, 3] expecting 6.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Dry run / trace table recording total after each element to find where it diverges.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fix the specific line, then re-test with normal, abnormal and boundary cases.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) logic/off-by-one/semantic errors (b) reproduce small, trace values, fix, retest.",
          "commonErrors": [
                    "Randomly changing code without tracing — debugging must be systematic."
          ]
},
        },
        {
          id: "ecs10-u8-testing-debugging-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A program computes the average of exam marks entered by a teacher.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Design three test cases (normal, abnormal, extreme) with expected results.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how the program should handle an abnormal input and why.",
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
                              "name": "Test design",
                              "statement": "Normal, abnormal, extreme cases with expected outputs."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Normal: marks [50, 60, 70] → average 60.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Abnormal: enter 'abc' or negative mark → reject with error message.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Extreme: empty list or single mark [100] → handle gracefully (no division by zero; average 100).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Input validation must check each mark is numeric and within 0-100.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Invalid input should be rejected or re-prompted, not silently accepted.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Without validation, a text entry causes a runtime error or corrupts the average.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Robust handling prevents crashes and ensures results teachers can trust.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) normal [50,60,70]→60; abnormal 'abc'→reject; extreme empty→no crash (b) validate numeric range, reject bad input.",
          "commonErrors": [
                    "Testing only valid inputs — abnormal cases reveal real bugs."
          ]
},
        },
        {
          id: "ecs10-u8-testing-debugging-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student claims 'testing is a waste of time — just write the code correctly the first time'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define syntax, logic and runtime errors and give an example of each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two debugging techniques and when each is most useful.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the student's claim about testing.",
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
                              "name": "Error taxonomy",
                              "statement": "Syntax, logic, runtime — different detection and fixes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Syntax: grammar error, e.g. missing bracket — program won't compile.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Logic: wrong algorithm reasoning, e.g. + instead of - — runs but wrong output.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Runtime: error during execution, e.g. divide by zero — crashes mid-run.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "A valid example given for each type.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Dry run/trace table: step through with sample data — best for logic errors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Print statements/output checks: reveal actual variable values — good for finding where values diverge.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each technique suited to a stage: dry run before coding, prints during debugging.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Testing is essential — even careful programmers make mistakes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "It catches errors early when they are cheap to fix, before release.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Untested code in real systems risks crashes, wrong decisions and security flaws — testing is not optional.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) three error types + examples (b) dry run for logic, prints for values (c) testing essential — mistakes inevitable, early fixes cheap.",
          "commonErrors": [
                    "Agreeing testing is wasteful — ignoring that errors are inevitable."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u8-data-notes",
      title: "Arrays, testing and debugging — notes",
      summary: "Zero-indexed arrays and loop patterns; error types, test cases and debugging techniques.",
      sections: [
        { heading: "Arrays", body: "Index from 0; loop with FOR EACH or index loop; patterns: sum, max/min, count, search." },
        { heading: "Errors", body: "Syntax = grammar; logic = wrong results; runtime = crash during execution (e.g. ÷0)." },
        { heading: "Testing", body: "Normal + abnormal + extreme cases; debug with dry runs, trace tables and print checks." },
      ],
    },
  ],
};
