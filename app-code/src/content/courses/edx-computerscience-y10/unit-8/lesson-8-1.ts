import type { Lesson } from "../../../types.ts";

export const lesson281: Lesson = {
  id: "ecs10-u8-lesson-8-1",
  code: "8-1",
  title: "Computational Thinking and Problem Solving",
  goal: "I CAN apply decomposition, abstraction and pattern recognition to break down problems and evaluate algorithms by tracing them.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming"],
  
  vocabulary: [
    { term: "Decomposition", definition: "Breaking a complex problem into smaller, manageable sub-problems." },
    { term: "Abstraction", definition: "Hiding unnecessary detail to focus on the essential features of a problem." },
    { term: "Pattern recognition", definition: "Identifying similarities or trends in data or problems to reuse solutions." },
    { term: "Algorithm", definition: "A finite set of unambiguous steps to solve a problem." },
    { term: "Trace table", definition: "A table recording variable values at each step of an algorithm." },
    { term: "Dry run", definition: "Manually stepping through an algorithm with sample data to check it works." },
  ],
  concepts: [
    {
      id: "ecs10-u8-thinking-techniques",
      title: "Decomposition, abstraction and pattern recognition",
      skill: "Apply computational thinking techniques to break down real-world problems and identify reusable patterns.",
      lesson: {
        sections: [
          {
            heading: "Decomposition and abstraction",
            body: "**Decomposition** breaks a large problem into smaller sub-problems that are easier to solve — e.g. planning a school fair becomes: book venue, organise stalls, advertise, manage tickets, evaluate. Each sub-problem can then be solved or programmed separately and combined into the overall solution. **Abstraction** hides unnecessary detail so attention stays on what matters — a map abstracts away buildings' interiors; a program abstracts a car as speed + position, ignoring paint colour.",
          },
          {
            heading: "Pattern recognition and algorithms",
            body: "**Pattern recognition** spots similarities between problems so a known solution can be reused — e.g. finding the largest number in a list uses the same 'compare and keep the bigger' pattern whether the list holds scores or temperatures. Once decomposed and abstracted, the solution is written as an **algorithm**: a finite sequence of unambiguous steps that always produces an output.",
          },
        ],
        keyFormulas: [
          { name: "Decomposition", statement: "complex problem → smaller sub-problems → combine solutions" },
          { name: "Abstraction", statement: "keep essential features, hide unnecessary detail" },
          { name: "Pattern recognition", statement: "similar problems → reuse proven solution" },
        ],
        workedExample: {
          problem: "A school wants an algorithm to find the highest score in a list of 30 exam marks. Apply decomposition, abstraction and pattern recognition.",
          solution: "Decompose: (1) store the marks, (2) compare each mark to the current highest, (3) output the highest. Abstract: only the mark values matter, not names or subjects. Pattern: this is the same 'track maximum' pattern used for prices, ages or temperatures — one general algorithm works for all.",
        },
      },
      questions: [
        {
          id: "ecs10-u8-thinking-techniques-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is decomposition in computational thinking?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hiding unnecessary details"
                    },
                    {
                              "id": "b",
                              "text": "Breaking a problem into smaller sub-problems"
                    },
                    {
                              "id": "c",
                              "text": "Writing code faster"
                    },
                    {
                              "id": "d",
                              "text": "Finding patterns in data"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Decomposition",
                              "statement": "Split problem into sub-problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decomposition divides a complex problem into smaller parts that are easier to solve separately.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Breaking into smaller sub-problems",
          "commonErrors": [
                    "Confusing decomposition with abstraction — abstraction is hiding detail."
          ]
},
        },
        {
          id: "ecs10-u8-thinking-techniques-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Use decomposition to break down the task 'organise a school sports day' into three sub-tasks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Decomposition",
                              "statement": "Problem → sub-problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any three sensible sub-tasks, e.g. book the field and equipment.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Further sub-tasks: organise teams/entries and schedule events.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Further sub-tasks: arrange catering, first aid, results and cleanup.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. venue/equipment, teams & schedule, catering/medical/results.",
          "commonErrors": [
                    "Listing unrelated tasks rather than components of the sports day."
          ]
},
        },
        {
          id: "ecs10-u8-thinking-techniques-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what abstraction means in computing and give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Abstraction",
                              "statement": "Keep essential features, hide detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Abstraction hides unnecessary detail so focus stays on what matters.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: a map shows roads and places but hides building interiors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "In programs, a 'car' object might store speed and position but ignore paint colour.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This simplifies the model, making problems easier to solve and code easier to write.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Hiding detail to focus on essentials; e.g. maps or simplified objects in code.",
          "commonErrors": [
                    "Describing abstraction as deletion of data rather than simplification."
          ]
},
        },
        {
          id: "ecs10-u8-thinking-techniques-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A library wants a computer system to issue and return books.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Decompose the problem into four sub-problems.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give one example of abstraction that could apply to this system.",
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
                              "name": "Computational thinking",
                              "statement": "Decompose, abstract, recognise patterns, algorithmise."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sub-problem 1: store book and member records (catalogue/database).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sub-problem 2: process issuing a book — check availability and record borrower.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sub-problem 3: process returns — update availability and calculate fines.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Represent a 'book' only by essential fields (ID, title, borrower, due date).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hide irrelevant details like book cover colour or shelf position.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Simplifies code and data storage while keeping required functions.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) catalogue, issue, return, (e.g.) fines/reports (b) model books by essential fields only.",
          "commonErrors": [
                    "Sub-problems that are not actually parts of issuing/returning books."
          ]
},
        },
        {
          id: "ecs10-u8-thinking-techniques-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Daily temperatures for a week were recorded: 14, 17, 16, 19, 22, 21, 25 °C.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the pattern in this data.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Use pattern recognition to suggest a simple algorithm that finds the highest temperature.",
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
                              "name": "Pattern recognition",
                              "statement": "Spot trends to reuse solutions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Temperatures generally rise through the week, peaking at 25 °C.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "There is a dip on day 4 (16 after 17) then a steady climb.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The pattern is 'track the maximum value' — same as finding the highest score.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Set highest = first value (14).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "For each remaining temperature, compare it with highest.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "If the new value is greater, replace highest with it.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "After all comparisons output highest — result is 25 °C.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) rising trend, peak 25 (b) track-max algorithm: compare each value, keep larger → 25.",
          "commonErrors": [
                    "Describing the pattern but not linking it to a reusable algorithm."
          ]
},
        },
        {
          id: "ecs10-u8-thinking-techniques-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A delivery company wants software to plan the fastest route for its drivers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define decomposition, abstraction, pattern recognition and algorithm.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Apply two of these techniques to the delivery routing problem.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate one benefit and one limitation of using computational thinking for this task.",
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
                              "name": "Computational thinking",
                              "statement": "Decompose, abstract, recognise patterns, design algorithms."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Decomposition: split problem into sub-problems.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Abstraction: keep essential details only.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Pattern recognition: spot similarities for reuse.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Algorithm: finite unambiguous steps solving the problem.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Decompose into: store stops, compute distances, choose next stop, update remaining stops.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Abstract by ignoring irrelevant details like scenery; model only locations and distances.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pattern: 'visit nearest remaining stop' resembles other scheduling problems, so a known approach can be reused.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Benefit: produces a clear step-by-step solution that a program can execute reliably.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Limitation: real traffic and changing conditions mean the model may be oversimplified.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Computational thinking helps structure the problem but cannot eliminate real-world unpredictability.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) four definitions (b) decomposed routing + abstraction + pattern reuse (c) clear solution vs real-world complexity.",
          "commonErrors": [
                    "Definitions without application to the scenario."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u8-tracing-algorithms",
      title: "Tracing and evaluating algorithms",
      skill: "Dry-run and trace algorithms using trace tables and compare algorithms by efficiency and correctness.",
      lesson: {
        sections: [
          {
            heading: "Dry runs and trace tables",
            body: "A **dry run** means executing an algorithm by hand with sample data, before writing code. A **trace table** records the value of each variable after every step, letting you verify the algorithm produces the expected output. Dry runs reveal logic errors — wrong comparisons, incorrect updates, infinite loops. They are cheap and quick compared with debugging a finished program.",
          },
          {
            heading: "Evaluating algorithms",
            body: "Two algorithms solving the same problem can differ in **efficiency**: how many steps or how much memory they use. Counting steps shows which is faster as data grows — e.g. checking every item in a list (linear search) is simple but slow for large lists. Correctness matters more than speed: an efficient algorithm that gives wrong answers is useless. Evaluation asks: does it produce correct output for all valid inputs, and is it efficient enough?",
          },
        ],
        keyFormulas: [
          { name: "Dry run", statement: "execute algorithm by hand with sample data" },
          { name: "Trace table", statement: "record each variable's value at every step" },
          { name: "Efficiency", statement: "fewer steps/memory = more efficient" },
        ],
        workedExample: {
          problem: "Dry run this algorithm and find the output: count = 0; FOR i = 1 TO 4; count = count + i; ENDFOR; OUTPUT count.",
          solution: "i=1: count=1; i=2: count=3; i=3: count=6; i=4: count=10. Output: 10.",
        },
      },
      questions: [
        {
          id: "ecs10-u8-tracing-algorithms-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the purpose of a trace table?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To store program files"
                    },
                    {
                              "id": "b",
                              "text": "To record variable values at each step of an algorithm"
                    },
                    {
                              "id": "c",
                              "text": "To encrypt data"
                    },
                    {
                              "id": "d",
                              "text": "To print the final output only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trace table",
                              "statement": "Records variable values step by step."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A trace table shows how variables change through each step, helping verify correctness.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Records variable values at each step",
          "commonErrors": [
                    "Confusing trace tables with data tables in databases."
          ]
},
        },
        {
          id: "ecs10-u8-tracing-algorithms-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Dry run this algorithm: x = 5; y = 3; z = x * y + 2; OUTPUT z. What is the output?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Dry run",
                              "statement": "Step through with sample data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "x = 5, y = 3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "z = 5 × 3 + 2 = 15 + 2 = 17.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Output is 17.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "17",
          "commonErrors": [
                    "Computing 5 × (3+2) instead of (5×3)+2."
          ]
},
        },
        {
          id: "ecs10-u8-tracing-algorithms-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Trace this algorithm for input n = 4 and state the final value of total. total = 0; FOR i = 1 TO n; total = total + 2 * i; ENDFOR.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Trace table",
                              "statement": "Track variables each iteration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "i=1: total = 0 + 2×1 = 2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "i=2: total = 2 + 2×2 = 6; i=3: total = 6 + 2×3 = 12.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "i=4: total = 12 + 2×4 = 20.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Final total = 20.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "20",
          "commonErrors": [
                    "Adding i instead of 2*i, or stopping after n-1 iterations."
          ]
},
        },
        {
          id: "ecs10-u8-tracing-algorithms-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Algorithm: score = 0; FOR EACH mark IN marks; IF mark >= 40 THEN score = score + 1; ENDIF; ENDFOR; OUTPUT score. The list marks = [35, 42, 55, 38, 60].",
          parts: [
          {
                    "label": "a",
                    "prompt": "Complete a trace of the score variable through the algorithm.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the output and explain what the algorithm counts.",
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
                              "name": "Trace table",
                              "statement": "Record score after each mark."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "35 < 40 → score stays 0; 42 ≥ 40 → score = 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "55 ≥ 40 → score = 2; 38 < 40 → stays 2; 60 ≥ 40 → score = 3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Correct sequence: 0, 0, 1, 2, 2, 3 across the five marks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Output = 3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "The algorithm counts how many marks are 40 or above (a pass count).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Marks below 40 leave score unchanged.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) score goes 0→0→1→2→2→3 (b) output 3 — counts marks ≥ 40.",
          "commonErrors": [
                    "Counting all marks instead of only those ≥ 40."
          ]
},
        },
        {
          id: "ecs10-u8-tracing-algorithms-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Two algorithms find a name in a list of 1000 names. Algorithm A checks names one by one from the start. Algorithm B jumps to the middle and halves the search area each time (binary search), but requires the list sorted by name.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare the efficiency of the two algorithms for this list.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one situation where Algorithm A would still be preferable.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Algorithm efficiency",
                              "statement": "Fewer steps = more efficient; correctness and constraints matter."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A checks up to 1000 names — many steps on average (~500).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "B halves the search area each step — only ~10 comparisons needed for 1000 items.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "B is far more efficient for large lists, but needs sorted data.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "If the list is not sorted, B cannot work — A works on any order.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "For a very small list, the setup cost of sorting for B may outweigh its speed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A is simpler to implement and verify — fewer chances for logic errors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "If names must be found in original order or list changes constantly, re-sorting costs extra.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) B far fewer steps but needs sorted list (b) A works unsorted, simpler, better for tiny lists.",
          "commonErrors": [
                    "Declaring B always better — its sorted-data requirement is a real constraint."
          ]
},
        },
        {
          id: "ecs10-u8-tracing-algorithms-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A programmer writes an algorithm to calculate the average of exam scores.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define dry run and trace table and explain why each is useful before coding.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Dry run this algorithm with scores = [60, 70, 80] and show the result: total = 0; count = 0; FOR EACH s IN scores; total = total + s; count = count + 1; ENDFOR; average = total / count; OUTPUT average.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate what could go wrong if the list is empty and how the algorithm should be improved.",
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
                              "name": "Dry run & trace",
                              "statement": "Manual execution catches errors early."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A dry run executes the algorithm by hand with sample data.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "A trace table records variable values at each step.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Both reveal logic errors before coding, saving debugging time.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "After s=60: total=60, count=1; s=70: total=130, count=2; s=80: total=210, count=3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "average = 210 / 3 = 70.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Output: 70.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "All three iterations traced correctly — algorithm is correct for non-empty input.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "With an empty list, count = 0 and total/count divides by zero.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The program may crash or produce an error instead of a meaningful message.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Improve by checking count > 0 before dividing, or handling the empty case explicitly.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) dry run + trace table catch errors early (b) trace gives total=210, count=3, average=70 (c) division by zero — add empty-list check.",
          "commonErrors": [
                    "Dry-running only one iteration — must trace all steps."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u8-thinking-notes",
      title: "Computational thinking — notes",
      summary: "Decomposition, abstraction, pattern recognition, and dry runs with trace tables for checking algorithms.",
      sections: [
        { heading: "Thinking techniques", body: "Decompose into sub-problems; abstract essential details; recognise patterns to reuse solutions." },
        { heading: "Checking algorithms", body: "Dry run by hand and record variables in a trace table before coding." },
        { heading: "Efficiency", body: "Fewer steps/memory is better — but only if the algorithm stays correct and its constraints are met." },
      ],
    },
  ],
};
