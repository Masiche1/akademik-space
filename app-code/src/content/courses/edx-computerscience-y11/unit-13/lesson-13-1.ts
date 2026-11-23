import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "ecs11-u13-lesson-13-1",
  code: "13-1",
  title: "Computational Thinking",
  goal: "I CAN apply decomposition, abstraction and pattern recognition to break down problems and design algorithms.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Computational thinking"],
  
  vocabulary: [
    { term: "Computational thinking", definition: "A problem-solving approach using decomposition, abstraction, pattern recognition and algorithm design." },
    { term: "Decomposition", definition: "Breaking a complex problem into smaller, manageable sub-problems." },
    { term: "Abstraction", definition: "Focusing on the important details of a problem and ignoring irrelevant ones." },
    { term: "Pattern recognition", definition: "Identifying similarities or trends in data or problems that can be exploited." },
    { term: "Algorithm", definition: "A precise step-by-step set of instructions for solving a problem." },
    { term: "Problem specification", definition: "A clear statement of what a solution must achieve." },
  ],
  concepts: [
    {
      id: "ecs11-u13-decomp-abstract",
      title: "Decomposition and abstraction",
      skill: "Break complex problems into sub-problems and identify the essential features to model.",
      lesson: {
        sections: [
          {
            heading: "Decomposition",
            body: "Decomposition means splitting a complex problem into smaller parts that are easier to understand and solve. Each sub-problem can then be solved separately, often by different people, and the solutions combined.\n\nExample: building an online booking system decomposes into user login, searching availability, making a booking and sending a confirmation — each a manageable sub-system.",
          },
          {
            heading: "Abstraction",
            body: "Abstraction means ignoring unnecessary detail and focusing on what matters for the problem at hand. A map abstracts a city to roads and landmarks; a booking algorithm abstracts users to names and dates.\n\nAbstraction reduces complexity so the essential logic is clear. It also lets the same model be reused — for example, a 'customer' abstraction works for shops, libraries and banks.",
          },
        ],
        keyFormulas: [
          { name: "Decomposition", statement: "Complex problem → smaller solvable sub-problems" },
          { name: "Abstraction", statement: "Keep essential features; discard irrelevant detail" },
        ],
        workedExample: {
          problem: "A school wants an app to report attendance. Apply decomposition.",
          solution: "Sub-problems: register students and classes; record daily attendance; calculate statistics; generate reports for parents and teachers. Each part can be designed and tested separately.",
        },
      },
      questions: [
        {
          id: "ecs11-u13-decomp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is decomposition in computational thinking?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Removing all detail from a problem"
                    },
                    {
                              "id": "b",
                              "text": "Breaking a complex problem into smaller sub-problems"
                    },
                    {
                              "id": "c",
                              "text": "Writing code as quickly as possible"
                    },
                    {
                              "id": "d",
                              "text": "Testing a finished program"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Decomposition",
                              "statement": "Splitting problems into manageable parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decomposition breaks complex problems into smaller sub-problems.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Breaking a complex problem into smaller sub-problems"
},
        },
        {
          id: "ecs11-u13-decomp-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define abstraction and explain why it is useful when solving problems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Abstraction",
                              "statement": "Focusing on essential features only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Abstraction keeps only the important details of a problem and ignores the rest.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It reduces complexity so the core logic is easier to see and solve.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It allows the same simplified model to be reused in different situations.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Keeping essential features only — simplifies problems and enables reuse."
},
        },
        {
          id: "ecs11-u13-decomp-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A town wants a website where residents can report potholes. Decompose this into four sub-problems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Decomposition",
                              "statement": "Split into independently solvable parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A form or interface for residents to submit a report with location and details.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Storage of reports in a database.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A way for council staff to view, prioritise and assign reports.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A way to update residents on the status of their report.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Submission form, storage, staff management view, status updates."
},
        },
        {
          id: "ecs11-u13-decomp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A streaming service wants a 'recommended for you' feature.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Decompose the feature into three sub-problems.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "For one sub-problem, describe the abstraction you would use.",
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
                              "name": "Decomposition + abstraction",
                              "statement": "Split, then simplify each part."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Collect each user's viewing history.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Compare it with other users' or content similarity data.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Abstraction: represent users only by the films/shows they watched — ignore age, location, payment details.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Abstraction: represent titles only by genre, actors and rating — ignore video files, descriptions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "This keeps the recommendation logic simple and focused on matching.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) collect history, match patterns, display recommendations (b) users/titles reduced to relevant attributes"
},
        },
        {
          id: "ecs11-u13-decomp-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how decomposition and abstraction would each help design a program that finds the fastest route for a delivery driver.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "CT techniques in practice",
                              "statement": "Decompose routes; abstract the road network."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decomposition: split the journey into legs between stops, solve each leg, then combine.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Decomposition: separate collecting parcels from choosing and ordering the route.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Abstraction: model the map as nodes (junctions) and edges (roads) with only travel times.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ignore irrelevant detail like building colours, shop names and scenery.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This keeps the problem small enough for the algorithm to handle.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The simplified model can be reused for other drivers or cities.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Decompose into legs and tasks; abstract map to timed nodes/edges; solve and recombine."
},
        },
        {
          id: "ecs11-u13-decomp-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school library wants software to manage book loans.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Decompose the problem into four sub-problems.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe the abstraction you would use for books and borrowers, giving the attributes each needs.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why abstraction helps when testing the loan rules.",
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
                              "name": "CT in system design",
                              "statement": "Split responsibilities; model only what rules need."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Catalogue management — adding, editing and removing books.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Borrower management — registering members and checking loan limits.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Loan processing — issuing and returning books, calculating due dates.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Book abstraction: ID, title, author, due date rules — ignore cover images, shelf location.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Book attributes needed: unique ID and loan-period rules.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Borrower abstraction: ID, name, list of current loans — ignore address, photos.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Borrower attributes needed: unique ID and current loan count.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Testing needs only the abstract attributes, not real book/bio data.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Simple test data makes loan-rule checks quick and repeatable.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Abstraction prevents irrelevant details from hiding bugs in the rules.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) catalogue, borrowers, loans, reporting (b) minimal attributes for rules (c) simple, focused test data"
},
        },
      ],
    },
    {
      id: "ecs11-u13-patterns-algorithms",
      title: "Pattern recognition and algorithm design",
      skill: "Identify patterns in problems and design step-by-step algorithms to solve them.",
      lesson: {
        sections: [
          {
            heading: "Pattern recognition",
            body: "Pattern recognition means spotting similarities, repetitions or trends that can be exploited. Loops handle repeated actions; sorting handles ordering problems; many data problems share the same underlying pattern even when the data differs.\n\nRecognising a pattern lets you reuse a known solution instead of inventing a new one — e.g. 'find the largest' appears in scores, temperatures and prices.",
          },
          {
            heading: "Designing algorithms",
            body: "Algorithm design turns a problem specification into precise steps. A good algorithm is unambiguous, finite (it must stop), and produces a correct result. Pseudocode describes the steps in plain structured language before coding.\n\nCommon structures: sequence (do steps in order), selection (IF...THEN...ELSE), iteration (loops). Always test the algorithm with sample data and check edge cases like empty input or boundary values.",
          },
        ],
        keyFormulas: [
          { name: "Algorithm", statement: "Unambiguous, finite, correct steps" },
          { name: "Structures", statement: "Sequence + selection + iteration" },
          { name: "Pattern recognition", statement: "Spot similarities → reuse known approaches" },
        ],
        workedExample: {
          problem: "Design an algorithm to find the highest score in a list.",
          solution: "Set highest = first score. For each remaining score, if it is greater than highest, set highest to it. At the end, highest contains the maximum.",
        },
      },
      questions: [
        {
          id: "ecs11-u13-pattern-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an algorithm?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A random set of instructions"
                    },
                    {
                              "id": "b",
                              "text": "A precise, finite, step-by-step method for solving a problem"
                    },
                    {
                              "id": "c",
                              "text": "A type of computer hardware"
                    },
                    {
                              "id": "d",
                              "text": "A diagram of a network"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Algorithm",
                              "statement": "Unambiguous finite steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An algorithm is a precise, finite, step-by-step problem-solving method.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Precise, finite, step-by-step solution method"
},
        },
        {
          id: "ecs11-u13-pattern-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define pattern recognition and give one example in computing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pattern recognition",
                              "statement": "Spotting similarities to reuse solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pattern recognition identifies similarities or trends in data or problems.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It lets solvers reuse known approaches instead of starting from scratch.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: 'find the maximum' recurs in scores, prices and temperatures — one algorithm fits all.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Spotting similarities/trends; e.g. 'find maximum' reused across domains."
},
        },
        {
          id: "ecs11-u13-pattern-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "State three properties a good algorithm must have.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Algorithm quality",
                              "statement": "Unambiguous, finite, correct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unambiguous — each step has one clear meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Finite — it must eventually stop and produce a result.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Correct — it must produce the right output for all valid inputs.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Efficient — it should not waste time or resources (an important extra property).",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Unambiguous, finite, correct (and ideally efficient)."
},
        },
        {
          id: "ecs11-u13-pattern-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A teacher wants a program that counts how many students scored above 50.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the pattern in this problem that suggests a known approach.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe the algorithm in three steps.",
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
                              "name": "Algorithm design",
                              "statement": "Recognise repetition → use a loop."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The same check ('is score > 50?') repeats for every student — a counting loop pattern.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "This is the classic count-with-condition pattern solvable by iteration.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Set count = 0.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "For each score, if score > 50 then add 1 to count.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "After all scores are checked, output count.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(a) repeated conditional count → loop (b) count=0; if score>50 count+1; output count"
},
        },
        {
          id: "ecs11-u13-pattern-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A shop wants to flag orders over $500 for manual review (represent the threshold as 500). Compare a simple approach with a more efficient one.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Algorithm efficiency",
                              "statement": "Correctness first, then efficiency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Simple approach: check every order individually as it arrives — correct but may be slow at scale.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Efficient approach: process orders in batches overnight, flagging high values in one pass.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both must implement the same rule: flag when total > 500.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Efficiency matters when order volume is large — batch processing reduces per-order overhead.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Pattern recognition: 'flag values above threshold' is a filter pattern reused across domains.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Correctness must be verified first with test orders before optimising.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Same rule either way; batching improves efficiency at scale; verify correctness first."
},
        },
        {
          id: "ecs11-u13-pattern-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design an algorithm that finds the lowest and highest temperatures recorded in a week.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the algorithm step by step.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Trace it on the data [12, 9, 15, 7, 14, 10, 11] — what are the outputs?",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how you would test the algorithm for correctness.",
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
                              "name": "Min-max algorithm",
                              "statement": "Track running min and max in one pass."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Set lowest = first value and highest = first value.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "For each remaining value, if it is less than lowest, update lowest.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "If it is greater than highest, update highest.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "After checking all values, output lowest and highest.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "lowest becomes 7 and highest becomes 15 after scanning all values.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Trace check: 9<12 updates lowest; 15>12 updates highest; 7 updates lowest; 14 does not exceed 15.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Final values: lowest = 7, highest = 15.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Test with known lists where min and max are obvious, e.g. [5,1,9] gives 1 and 9.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Test edge cases: single value, all equal values, negative temperatures.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Verify by comparing outputs against a manual check of each test set.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) track running min/max in one pass (b) lowest=7, highest=15 (c) test known cases and edge cases"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u13-ct-notes",
      title: "Computational Thinking — notes",
      summary: "Decompose big problems, abstract the essential, recognise reusable patterns, then design precise algorithms.",
      sections: [
        { heading: "Key idea", body: "Computational thinking = decomposition + abstraction + pattern recognition + algorithm design." },
        { heading: "Decompose vs abstract", body: "Decomposition splits the problem; abstraction strips irrelevant detail." },
        { heading: "Algorithms", body: "Unambiguous, finite, correct steps — sequence, selection and iteration cover everything." },
      ],
    },
  ],
};
