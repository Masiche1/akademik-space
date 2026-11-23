module.exports = [
  {
    file: "lesson-13-1.ts", exportName: "lesson131",
    lesson: {
      id: "ecs11-u13-lesson-13-1", code: "13-1",
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
          id: "ecs11-u13-decomp-abstract", title: "Decomposition and abstraction",
          skill: "Break complex problems into sub-problems and identify the essential features to model.",
          sections: [
            { heading: "Decomposition", body: "Decomposition means splitting a complex problem into smaller parts that are easier to understand and solve. Each sub-problem can then be solved separately, often by different people, and the solutions combined.\n\nExample: building an online booking system decomposes into user login, searching availability, making a booking and sending a confirmation — each a manageable sub-system." },
            { heading: "Abstraction", body: "Abstraction means ignoring unnecessary detail and focusing on what matters for the problem at hand. A map abstracts a city to roads and landmarks; a booking algorithm abstracts users to names and dates.\n\nAbstraction reduces complexity so the essential logic is clear. It also lets the same model be reused — for example, a 'customer' abstraction works for shops, libraries and banks." },
          ],
          keyFormulas: [
            { name: "Decomposition", statement: "Complex problem → smaller solvable sub-problems" },
            { name: "Abstraction", statement: "Keep essential features; discard irrelevant detail" },
          ],
          workedExample: {
            problem: "A school wants an app to report attendance. Apply decomposition.",
            solution: "Sub-problems: register students and classes; record daily attendance; calculate statistics; generate reports for parents and teachers. Each part can be designed and tested separately.",
          },
          questions: [
            {
              id: "ecs11-u13-decomp-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is decomposition in computational thinking?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Removing all detail from a problem" },
                { id: "b", text: "Breaking a complex problem into smaller sub-problems" },
                { id: "c", text: "Writing code as quickly as possible" },
                { id: "d", text: "Testing a finished program" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Decomposition", statement: "Splitting problems into manageable parts." }],
                steps: [{ reasoning: "Decomposition breaks complex problems into smaller sub-problems.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Breaking a complex problem into smaller sub-problems",
              },
            },
            {
              id: "ecs11-u13-decomp-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Define abstraction and explain why it is useful when solving problems.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Abstraction", statement: "Focusing on essential features only." }],
                steps: [
                  { reasoning: "Abstraction keeps only the important details of a problem and ignores the rest.", marks: 1, markCode: "AO1" },
                  { reasoning: "It reduces complexity so the core logic is easier to see and solve.", marks: 1, markCode: "AO2" },
                  { reasoning: "It allows the same simplified model to be reused in different situations.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Keeping essential features only — simplifies problems and enables reuse.",
              },
            },
            {
              id: "ecs11-u13-decomp-q3", difficulty: "core", totalMarks: 4,
              stem: "A town wants a website where residents can report potholes. Decompose this into four sub-problems.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Decomposition", statement: "Split into independently solvable parts." }],
                steps: [
                  { reasoning: "A form or interface for residents to submit a report with location and details.", marks: 1, markCode: "AO2" },
                  { reasoning: "Storage of reports in a database.", marks: 1, markCode: "AO2" },
                  { reasoning: "A way for council staff to view, prioritise and assign reports.", marks: 1, markCode: "AO2" },
                  { reasoning: "A way to update residents on the status of their report.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Submission form, storage, staff management view, status updates.",
              },
            },
            {
              id: "ecs11-u13-decomp-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A streaming service wants a 'recommended for you' feature.",
              parts: [
                { label: "a", prompt: "Decompose the feature into three sub-problems.", marks: 2 },
                { label: "b", prompt: "For one sub-problem, describe the abstraction you would use.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Decomposition + abstraction", statement: "Split, then simplify each part." }],
                steps: [
                  { part: "a", reasoning: "Collect each user's viewing history.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Compare it with other users' or content similarity data.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Abstraction: represent users only by the films/shows they watched — ignore age, location, payment details.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Abstraction: represent titles only by genre, actors and rating — ignore video files, descriptions.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "This keeps the recommendation logic simple and focused on matching.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) collect history, match patterns, display recommendations (b) users/titles reduced to relevant attributes",
              },
            },
            {
              id: "ecs11-u13-decomp-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Explain how decomposition and abstraction would each help design a program that finds the fastest route for a delivery driver.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "CT techniques in practice", statement: "Decompose routes; abstract the road network." }],
                steps: [
                  { reasoning: "Decomposition: split the journey into legs between stops, solve each leg, then combine.", marks: 1, markCode: "AO2" },
                  { reasoning: "Decomposition: separate collecting parcels from choosing and ordering the route.", marks: 1, markCode: "AO2" },
                  { reasoning: "Abstraction: model the map as nodes (junctions) and edges (roads) with only travel times.", marks: 1, markCode: "AO2" },
                  { reasoning: "Ignore irrelevant detail like building colours, shop names and scenery.", marks: 1, markCode: "AO2" },
                  { reasoning: "This keeps the problem small enough for the algorithm to handle.", marks: 1, markCode: "AO3" },
                  { reasoning: "The simplified model can be reused for other drivers or cities.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Decompose into legs and tasks; abstract map to timed nodes/edges; solve and recombine.",
              },
            },
            {
              id: "ecs11-u13-decomp-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A school library wants software to manage book loans.",
              parts: [
                { label: "a", prompt: "Decompose the problem into four sub-problems.", marks: 3 },
                { label: "b", prompt: "Describe the abstraction you would use for books and borrowers, giving the attributes each needs.", marks: 4 },
                { label: "c", prompt: "Explain why abstraction helps when testing the loan rules.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "CT in system design", statement: "Split responsibilities; model only what rules need." }],
                steps: [
                  { part: "a", reasoning: "Catalogue management — adding, editing and removing books.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Borrower management — registering members and checking loan limits.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Loan processing — issuing and returning books, calculating due dates.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Book abstraction: ID, title, author, due date rules — ignore cover images, shelf location.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Book attributes needed: unique ID and loan-period rules.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Borrower abstraction: ID, name, list of current loans — ignore address, photos.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Borrower attributes needed: unique ID and current loan count.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "c", reasoning: "Testing needs only the abstract attributes, not real book/bio data.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Simple test data makes loan-rule checks quick and repeatable.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Abstraction prevents irrelevant details from hiding bugs in the rules.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) catalogue, borrowers, loans, reporting (b) minimal attributes for rules (c) simple, focused test data",
              },
            },
          ],
        },
        {
          id: "ecs11-u13-patterns-algorithms", title: "Pattern recognition and algorithm design",
          skill: "Identify patterns in problems and design step-by-step algorithms to solve them.",
          sections: [
            { heading: "Pattern recognition", body: "Pattern recognition means spotting similarities, repetitions or trends that can be exploited. Loops handle repeated actions; sorting handles ordering problems; many data problems share the same underlying pattern even when the data differs.\n\nRecognising a pattern lets you reuse a known solution instead of inventing a new one — e.g. 'find the largest' appears in scores, temperatures and prices." },
            { heading: "Designing algorithms", body: "Algorithm design turns a problem specification into precise steps. A good algorithm is unambiguous, finite (it must stop), and produces a correct result. Pseudocode describes the steps in plain structured language before coding.\n\nCommon structures: sequence (do steps in order), selection (IF...THEN...ELSE), iteration (loops). Always test the algorithm with sample data and check edge cases like empty input or boundary values." },
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
          questions: [
            {
              id: "ecs11-u13-pattern-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is an algorithm?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A random set of instructions" },
                { id: "b", text: "A precise, finite, step-by-step method for solving a problem" },
                { id: "c", text: "A type of computer hardware" },
                { id: "d", text: "A diagram of a network" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Algorithm", statement: "Unambiguous finite steps." }],
                steps: [{ reasoning: "An algorithm is a precise, finite, step-by-step problem-solving method.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Precise, finite, step-by-step solution method",
              },
            },
            {
              id: "ecs11-u13-pattern-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Define pattern recognition and give one example in computing.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Pattern recognition", statement: "Spotting similarities to reuse solutions." }],
                steps: [
                  { reasoning: "Pattern recognition identifies similarities or trends in data or problems.", marks: 1, markCode: "AO1" },
                  { reasoning: "It lets solvers reuse known approaches instead of starting from scratch.", marks: 1, markCode: "AO2" },
                  { reasoning: "Example: 'find the maximum' recurs in scores, prices and temperatures — one algorithm fits all.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Spotting similarities/trends; e.g. 'find maximum' reused across domains.",
              },
            },
            {
              id: "ecs11-u13-pattern-q3", difficulty: "core", totalMarks: 4,
              stem: "State three properties a good algorithm must have.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Algorithm quality", statement: "Unambiguous, finite, correct." }],
                steps: [
                  { reasoning: "Unambiguous — each step has one clear meaning.", marks: 1, markCode: "AO1" },
                  { reasoning: "Finite — it must eventually stop and produce a result.", marks: 1, markCode: "AO1" },
                  { reasoning: "Correct — it must produce the right output for all valid inputs.", marks: 1, markCode: "AO1" },
                  { reasoning: "Efficient — it should not waste time or resources (an important extra property).", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Unambiguous, finite, correct (and ideally efficient).",
              },
            },
            {
              id: "ecs11-u13-pattern-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A teacher wants a program that counts how many students scored above 50.",
              parts: [
                { label: "a", prompt: "Identify the pattern in this problem that suggests a known approach.", marks: 2 },
                { label: "b", prompt: "Describe the algorithm in three steps.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Algorithm design", statement: "Recognise repetition → use a loop." }],
                steps: [
                  { part: "a", reasoning: "The same check ('is score > 50?') repeats for every student — a counting loop pattern.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "This is the classic count-with-condition pattern solvable by iteration.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Set count = 0.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "For each score, if score > 50 then add 1 to count.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "After all scores are checked, output count.", marks: 1, markCode: "AO1", part: "b" },
                ],
                finalAnswer: "(a) repeated conditional count → loop (b) count=0; if score>50 count+1; output count",
              },
            },
            {
              id: "ecs11-u13-pattern-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A shop wants to flag orders over $500 for manual review (represent the threshold as 500). Compare a simple approach with a more efficient one.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Algorithm efficiency", statement: "Correctness first, then efficiency." }],
                steps: [
                  { reasoning: "Simple approach: check every order individually as it arrives — correct but may be slow at scale.", marks: 1, markCode: "AO2" },
                  { reasoning: "Efficient approach: process orders in batches overnight, flagging high values in one pass.", marks: 1, markCode: "AO2" },
                  { reasoning: "Both must implement the same rule: flag when total > 500.", marks: 1, markCode: "AO1" },
                  { reasoning: "Efficiency matters when order volume is large — batch processing reduces per-order overhead.", marks: 1, markCode: "AO3" },
                  { reasoning: "Pattern recognition: 'flag values above threshold' is a filter pattern reused across domains.", marks: 1, markCode: "AO2" },
                  { reasoning: "Correctness must be verified first with test orders before optimising.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Same rule either way; batching improves efficiency at scale; verify correctness first.",
              },
            },
            {
              id: "ecs11-u13-pattern-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Design an algorithm that finds the lowest and highest temperatures recorded in a week.",
              parts: [
                { label: "a", prompt: "Describe the algorithm step by step.", marks: 4 },
                { label: "b", prompt: "Trace it on the data [12, 9, 15, 7, 14, 10, 11] — what are the outputs?", marks: 3 },
                { label: "c", prompt: "Explain how you would test the algorithm for correctness.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Min-max algorithm", statement: "Track running min and max in one pass." }],
                steps: [
                  { part: "a", reasoning: "Set lowest = first value and highest = first value.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "For each remaining value, if it is less than lowest, update lowest.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "If it is greater than highest, update highest.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "After checking all values, output lowest and highest.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "b", reasoning: "lowest becomes 7 and highest becomes 15 after scanning all values.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Trace check: 9<12 updates lowest; 15>12 updates highest; 7 updates lowest; 14 does not exceed 15.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Final values: lowest = 7, highest = 15.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "c", reasoning: "Test with known lists where min and max are obvious, e.g. [5,1,9] gives 1 and 9.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Test edge cases: single value, all equal values, negative temperatures.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Verify by comparing outputs against a manual check of each test set.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) track running min/max in one pass (b) lowest=7, highest=15 (c) test known cases and edge cases",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u13-ct-notes", title: "Computational Thinking — notes",
      summary: "Decompose big problems, abstract the essential, recognise reusable patterns, then design precise algorithms.",
      sections: [
        { heading: "Key idea", body: "Computational thinking = decomposition + abstraction + pattern recognition + algorithm design." },
        { heading: "Decompose vs abstract", body: "Decomposition splits the problem; abstraction strips irrelevant detail." },
        { heading: "Algorithms", body: "Unambiguous, finite, correct steps — sequence, selection and iteration cover everything." },
      ],
    },
  },
  {
    file: "lesson-13-2.ts", exportName: "lesson132",
    lesson: {
      id: "ecs11-u13-lesson-13-2", code: "13-2",
      title: "Pseudocode and Program Design",
      goal: "I CAN write and interpret pseudocode using sequence, selection and iteration, declare variables and use trace tables to follow execution.",
      standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming: pseudocode, variables and trace tables"],
      vocabulary: [
        { term: "Pseudocode", definition: "Plain-language structured steps describing an algorithm before coding." },
        { term: "Variable", definition: "A named storage location whose value can change during execution." },
        { term: "Constant", definition: "A named value that does not change during execution." },
        { term: "Trace table", definition: "A table recording variable values at each step to follow program execution." },
        { term: "Iteration", definition: "Repeating a block of steps, e.g. FOR or WHILE loops." },
        { term: "Selection", definition: "Choosing which steps to run based on a condition, e.g. IF...THEN...ELSE." },
        { term: "Input/output", definition: "Receiving data (INPUT) or displaying results (OUTPUT)." },
      ],
      concepts: [
        {
          id: "ecs11-u13-pseudocode", title: "Writing and reading pseudocode",
          skill: "Write pseudocode using standard structures and interpret given pseudocode.",
          sections: [
            { heading: "Pseudocode structure", body: "Pseudocode describes algorithms in structured plain language. Standard elements: INPUT to receive data, OUTPUT to display results, assignments like x = 5, selection with IF...THEN...ELSE...ENDIF, and iteration with FOR...NEXT or WHILE...ENDWHILE loops.\n\nPseudocode sits between the problem description and real code: precise enough to check logic, readable enough for non-programmers. Indentation shows which lines belong to a loop or branch." },
            { heading: "Reading pseudocode", body: "To interpret pseudocode, track each line in order. When a loop appears, its body repeats for the given range or until the condition fails. When IF appears, only the matching branch runs.\n\nWorked habit: write a trace table — one column per variable, one row per step — to record values as execution proceeds. This is the same skill used to debug real programs." },
          ],
          keyFormulas: [
            { name: "Sequence", statement: "Steps run in order, top to bottom" },
            { name: "Selection", statement: "IF condition THEN ... ELSE ... ENDIF" },
            { name: "Iteration", statement: "FOR i FROM a TO b ... NEXT / WHILE condition ... ENDWHILE" },
          ],
          workedExample: {
            problem: "Write pseudocode that asks for a number and outputs 'positive' or 'not positive'.",
            solution: "INPUT n\nIF n > 0 THEN\n  OUTPUT \"positive\"\nELSE\n  OUTPUT \"not positive\"\nENDIF",
          },
          questions: [
            {
              id: "ecs11-u13-pseudo-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the purpose of pseudocode?",
              response: { type: "mcq", choices: [
                { id: "a", text: "To make programs run faster" },
                { id: "b", text: "To describe an algorithm's logic in plain language before coding" },
                { id: "c", text: "To store data permanently" },
                { id: "d", text: "To encrypt sensitive data" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Pseudocode", statement: "Plain-language algorithm description." }],
                steps: [{ reasoning: "Pseudocode expresses logic clearly before writing real code.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Plain-language description of algorithm logic before coding",
              },
            },
            {
              id: "ecs11-u13-pseudo-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Write pseudocode that inputs a number n and outputs n multiplied by 2.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Pseudocode syntax", statement: "INPUT, assignment, OUTPUT." }],
                steps: [
                  { reasoning: "INPUT n — receive the number.", marks: 1, markCode: "AO1" },
                  { reasoning: "result = n * 2 — compute the doubled value.", marks: 1, markCode: "AO1" },
                  { reasoning: "OUTPUT result — display the answer.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "INPUT n / result = n * 2 / OUTPUT result",
              },
            },
            {
              id: "ecs11-u13-pseudo-q3", difficulty: "core", totalMarks: 4,
              stem: "What does this pseudocode output?\n\ncount = 0\nFOR i FROM 1 TO 5\n  count = count + i\nENDFOR\nOUTPUT count",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Tracing loops", statement: "Accumulate sum 1+2+3+4+5." }],
                steps: [
                  { reasoning: "The loop adds i to count for i = 1, 2, 3, 4, 5.", marks: 1, markCode: "AO1" },
                  { reasoning: "count becomes 1, then 3, then 6, then 10, then 15.", marks: 1, markCode: "AO2" },
                  { reasoning: "After the loop, OUTPUT count displays 15.", marks: 1, markCode: "AO1" },
                  { reasoning: "Final output: 15.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "15",
              },
            },
            {
              id: "ecs11-u13-pseudo-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A teacher records three test scores.",
              parts: [
                { label: "a", prompt: "Write pseudocode to input three scores a, b, c and output their average.", marks: 3 },
                { label: "b", prompt: "State the variables used and their role.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Pseudocode design", statement: "INPUT, arithmetic, OUTPUT." }],
                steps: [
                  { part: "a", reasoning: "INPUT a, b, c (or three separate INPUT lines).", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "average = (a + b + c) / 3.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "OUTPUT average.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "b", reasoning: "a, b, c hold the three input scores.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "average holds the calculated mean, used only for output.", marks: 1, markCode: "AO1", part: "b" },
                ],
                finalAnswer: "(a) INPUT a,b,c; average=(a+b+c)/3; OUTPUT average (b) inputs a,b,c; result average",
              },
            },
            {
              id: "ecs11-u13-pseudo-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A café wants a program that gives a 10% discount when a bill is over 20.",
              parts: [
                { label: "a", prompt: "Write pseudocode for the discount calculation.", marks: 3 },
                { label: "b", prompt: "Give two reasons for writing pseudocode before the real program.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Selection in pseudocode", statement: "IF...THEN...ELSE handles the discount rule." }],
                steps: [
                  { part: "a", reasoning: "INPUT bill.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "IF bill > 20 THEN total = bill * 0.9 ELSE total = bill ENDIF (or bill - bill*0.1).", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "OUTPUT total.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "b", reasoning: "Pseudocode lets you check the logic is correct before coding.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "It is language-independent, so it can be reviewed by non-programmers.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "It makes planning structure (loops, branches) clear before implementation.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) IF bill>20 THEN apply 10% off (b) verify logic, language-independent, plan structure",
              },
            },
            {
              id: "ecs11-u13-pseudo-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write and verify pseudocode that outputs the even numbers from 2 to 10.",
              parts: [
                { label: "a", prompt: "Write pseudocode that outputs 2, 4, 6, 8, 10.", marks: 4 },
                { label: "b", prompt: "Trace the loop to show the values of i on each iteration.", marks: 3 },
                { label: "c", prompt: "Explain how the loop structure could be adapted to output odd numbers instead.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Iteration design", statement: "FOR loop with step or conditional filtering." }],
                steps: [
                  { part: "a", reasoning: "FOR i FROM 2 TO 10 STEP 2 with OUTPUT i inside; NEXT i.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "Alternatively: FOR i FROM 1 TO 10 with IF i is even THEN OUTPUT i.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "The loop must be bounded (2 to 10) so it is finite.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "OUTPUT inside the loop so each even value is displayed.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "b", reasoning: "With STEP 2, i takes values 2, 4, 6, 8, 10.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Each iteration outputs the current i: 2 then 4 then 6 then 8 then 10.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "After i exceeds 10 the loop ends — five outputs total.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "c", reasoning: "Change STEP 2 to start at 1 (i = 1, 3, 5, 7, 9) or adjust the range.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "For the IF approach, change the condition to 'i is odd'.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "The loop structure stays the same — only the start value or condition changes.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) FOR i FROM 2 TO 10 STEP 2 OUTPUT i (b) i = 2,4,6,8,10 → outputs same (c) start at 1 or test for odd",
              },
            },
          ],
        },
        {
          id: "ecs11-u13-variables-trace", title: "Variables and trace tables",
          skill: "Declare and use variables and constants, and trace algorithm execution step by step.",
          sections: [
            { heading: "Variables and constants", body: "A variable is a named storage location whose value can change during execution — e.g. score, total, count. A constant is a named value that never changes, e.g. PI = 3.14 or MAX_SCORE = 100; using names instead of magic numbers makes code clearer and easier to update.\n\nAssignments like x = x + 1 update the stored value; the right side is evaluated first using the old value, then stored." },
            { heading: "Trace tables", body: "A trace table records the value of each variable at each step of execution. Columns are variables; rows are steps. It is used to check algorithms by hand, find logic errors and predict output.\n\nTo trace: initialise variables, then update one row per statement or iteration, writing the new value after each assignment. When the program ends, the final row shows the result." },
          ],
          keyFormulas: [
            { name: "Variable", statement: "Named storage whose value changes" },
            { name: "Constant", statement: "Named fixed value, e.g. MAX = 100" },
            { name: "Trace table", statement: "Columns = variables, rows = execution steps" },
          ],
          workedExample: {
            problem: "Trace: x = 4, y = 2; x = x + y; y = y * 2. What are x and y at the end?",
            solution: "x=4, y=2 → x = 4+2 = 6 → y = 2*2 = 4. Final: x = 6, y = 4.",
          },
          questions: [
            {
              id: "ecs11-u13-trace-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a variable in programming?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A value that never changes" },
                { id: "b", text: "A named storage location whose value can change during execution" },
                { id: "c", text: "A type of loop" },
                { id: "d", text: "A fixed output value" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Variable", statement: "Named storage, changeable value." }],
                steps: [{ reasoning: "A variable stores a value that can be updated during execution.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Named storage location whose value can change",
              },
            },
            {
              id: "ecs11-u13-trace-q2", difficulty: "foundation", totalMarks: 3,
              stem: "What are the final values of x and y after this pseudocode?\n\nx = 5\ny = x + 3\nx = x * 2",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Tracing assignments", statement: "Evaluate right side, then store." }],
                steps: [
                  { reasoning: "x = 5, then y = x + 3 = 5 + 3 = 8.", marks: 1, markCode: "AO1" },
                  { reasoning: "Then x = x * 2 = 5 * 2 = 10.", marks: 1, markCode: "AO1" },
                  { reasoning: "Final values: x = 10, y = 8.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "x = 10, y = 8",
              },
            },
            {
              id: "ecs11-u13-trace-q3", difficulty: "core", totalMarks: 4,
              stem: "What does this pseudocode output?\n\ni = 0\nWHILE i < 4\n  OUTPUT i\n  i = i + 1\nENDWHILE",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Tracing WHILE loops", statement: "Loop runs while condition true." }],
                steps: [
                  { reasoning: "i starts at 0; condition 0 < 4 is true so OUTPUT 0.", marks: 1, markCode: "AO1" },
                  { reasoning: "i becomes 1, outputs 1; becomes 2, outputs 2; becomes 3, outputs 3.", marks: 1, markCode: "AO1" },
                  { reasoning: "i becomes 4; condition 4 < 4 is false so the loop ends.", marks: 1, markCode: "AO1" },
                  { reasoning: "Output: 0, 1, 2, 3.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "0, 1, 2, 3",
              },
            },
            {
              id: "ecs11-u13-trace-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Trace this pseudocode and report the final value of total:\n\ntotal = 1\nFOR i FROM 1 TO 4\n  total = total * i\nENDFOR",
              parts: [
                { label: "a", prompt: "Give the value of total after each iteration.", marks: 2 },
                { label: "b", prompt: "State the final value of total.", marks: 1 },
                { label: "c", prompt: "List the values i takes during the loop.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Trace tables", statement: "Record each variable per step." }],
                steps: [
                  { part: "a", reasoning: "total goes 1*1=1, then *2=2, then *3=6, then *4=24.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "After iterations: 1, 2, 6, 24.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Final total = 24 (which is 4 factorial, 1*2*3*4).", marks: 1, markCode: "AO2", part: "b" },
                  { part: "c", reasoning: "i takes values 1, 2, 3, 4.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "FOR i FROM 1 TO 4 runs exactly four iterations.", marks: 1, markCode: "AO1", part: "c" },
                ],
                finalAnswer: "(a) 1, 2, 6, 24 (b) 24 (c) i = 1, 2, 3, 4",
              },
            },
            {
              id: "ecs11-u13-trace-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A program is meant to output the sum of 1 to 10 but outputs 55 incorrectly shown as a bug report 'output too large'. Explain how a trace table would help investigate.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Debugging with trace tables", statement: "Compare expected vs actual variable values." }],
                steps: [
                  { reasoning: "First confirm the expected result: 1+2+...+10 = 55, so the output may actually be correct.", marks: 1, markCode: "AO2" },
                  { reasoning: "Build a trace table with columns for i, total and the loop condition.", marks: 1, markCode: "AO1" },
                  { reasoning: "Trace each iteration to check total accumulates correctly: 1, 3, 6, 10, ... , 55.", marks: 1, markCode: "AO2" },
                  { reasoning: "If a row shows an unexpected value, the faulty statement is identified.", marks: 1, markCode: "AO2" },
                  { reasoning: "The 'bug' may be a misunderstanding — 55 is the correct sum.", marks: 1, markCode: "AO3" },
                  { reasoning: "Trace tables turn vague reports into verifiable step-by-step evidence.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Trace to verify each step; 55 is correct for 1..10 — the report may be a misunderstanding.",
              },
            },
            {
              id: "ecs11-u13-trace-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A program sums the even numbers from 2 to 10.",
              parts: [
                { label: "a", prompt: "Write pseudocode using a FOR loop to compute the sum.", marks: 3 },
                { label: "b", prompt: "Trace it — what is the final sum? Show the running total.", marks: 4 },
                { label: "c", prompt: "Explain why constants (rather than typing numbers directly) improve such programs.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Loop + trace + constants", statement: "Accumulate evens; record steps; name fixed values." }],
                steps: [
                  { part: "a", reasoning: "total = 0; FOR i FROM 2 TO 10 STEP 2: total = total + i; NEXT i.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "Alternative: loop 1 to 10 and add i only when i is even.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "OUTPUT total at the end.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "b", reasoning: "Running total: 2, then 6, then 12, then 20, then 30.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Steps: 0+2=2; 2+4=6; 6+6=12; 12+8=20; 20+10=30.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "i values: 2, 4, 6, 8, 10 — five iterations.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "Final sum = 30.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "c", reasoning: "Constants like START=2, END=10, STEP=2 make the range easy to change.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Named values document intent — MAX_SCORE is clearer than 100.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "Changing one constant updates the whole program consistently, reducing errors.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) loop 2..10 step 2 accumulating (b) total = 30 (c) constants ease changes and clarify intent",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u13-pseudocode-notes", title: "Pseudocode and Program Design — notes",
      summary: "Pseudocode = structured plain language; variables store changeable values; trace tables verify execution step by step.",
      sections: [
        { heading: "Structures", body: "Sequence, selection (IF...ELSE) and iteration (FOR/WHILE) cover all algorithms." },
        { heading: "Tracing", body: "One row per step per variable — catches logic errors before coding." },
        { heading: "Design habit", body: "Plan in pseudocode first; test with sample data and edge cases." },
      ],
    },
  },
  {
    file: "lesson-13-3.ts", exportName: "lesson133",
    lesson: {
      id: "ecs11-u13-lesson-13-3", code: "13-3",
      title: "Searching, Sorting and Efficiency",
      goal: "I CAN compare linear and binary search, describe sorting algorithms and explain efficiency using Big-O ideas.",
      standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Algorithms: searching, sorting and efficiency"],
      vocabulary: [
        { term: "Linear search", definition: "Checking each item in turn until the target is found or the list ends." },
        { term: "Binary search", definition: "Repeatedly halving a sorted list to locate a target." },
        { term: "Bubble sort", definition: "Repeatedly swapping adjacent out-of-order items until sorted." },
        { term: "Merge sort", definition: "Dividing a list in half, sorting each half, then merging." },
        { term: "Efficiency", definition: "How much time and resources an algorithm needs as input grows." },
        { term: "Big-O notation", definition: "A way of describing how an algorithm's cost grows with input size." },
        { term: "Worst case", definition: "The largest number of steps an algorithm may need." },
      ],
      concepts: [
        {
          id: "ecs11-u13-searching", title: "Linear and binary search",
          skill: "Compare linear and binary search and trace binary search on sorted data.",
          sections: [
            { heading: "Linear search", body: "Linear search checks each item in order until it finds the target or reaches the end. It works on any list — sorted or not. Worst case: n comparisons for n items (target last or absent). Average case: about n/2.\n\nSimple to implement and fine for small lists, but slow for large data." },
            { heading: "Binary search", body: "Binary search requires a sorted list. It compares the target with the middle item: if equal, done; if target is smaller, search the lower half; if larger, search the upper half. Each step halves the remaining items.\n\nWorst case is about log2(n) comparisons — for 1,000,000 items roughly 20 comparisons instead of 1,000,000. The trade-off: the list must be sorted first, and the halving logic is more complex." },
          ],
          keyFormulas: [
            { name: "Linear search", statement: "Worst case n comparisons; works on any list" },
            { name: "Binary search", statement: "Worst case ~log2(n); requires sorted data" },
          ],
          workedExample: {
            problem: "Find 23 in the sorted list [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] using binary search.",
            solution: "Middle (position 5) = 16 < 23, search right half. Middle of [23,38,56,72,91] region = 56 > 23, search left. Middle = 23 — found in 3 comparisons.",
          },
          questions: [
            {
              id: "ecs11-u13-search-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is linear search?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Searching only the middle of a list" },
                { id: "b", text: "Checking each item in turn until the target is found or the list ends" },
                { id: "c", text: "Sorting items before searching" },
                { id: "d", text: "A type of encryption" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Linear search", statement: "Item-by-item scan." }],
                steps: [{ reasoning: "Linear search checks items one at a time in order.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Checking each item in turn until found or list ends",
              },
            },
            {
              id: "ecs11-u13-search-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Describe the steps of binary search.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Binary search", statement: "Compare middle, discard half." }],
                steps: [
                  { reasoning: "The list must be sorted first.", marks: 1, markCode: "AO1" },
                  { reasoning: "Compare the target with the middle item of the remaining range.", marks: 1, markCode: "AO1" },
                  { reasoning: "If equal, stop; if smaller, keep the lower half; if larger, keep the upper half; repeat.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Sorted list → compare middle → discard half → repeat.",
              },
            },
            {
              id: "ecs11-u13-search-q3", difficulty: "core", totalMarks: 4,
              stem: "Why does binary search require the list to be sorted? Explain what would go wrong otherwise.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Binary search precondition", statement: "Halving only works on ordered data." }],
                steps: [
                  { reasoning: "Binary search discards half the list based on the middle item's value.", marks: 1, markCode: "AO1" },
                  { reasoning: "This logic assumes all items in the lower half are smaller and all in the upper half larger.", marks: 1, markCode: "AO2" },
                  { reasoning: "On an unsorted list the target could be in the discarded half — the search would fail or give wrong results.", marks: 1, markCode: "AO2" },
                  { reasoning: "Sorting must happen first, adding a cost that must be weighed against search savings.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Halving assumes order; unsorted data could hide the target in the discarded half.",
              },
            },
            {
              id: "ecs11-u13-search-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A library catalogue has 500,000 books.",
              parts: [
                { label: "a", prompt: "Compare linear and binary search for finding one book in this catalogue.", marks: 2 },
                { label: "b", prompt: "Explain when linear search would still be the better choice.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Search choice", statement: "Binary for large sorted data; linear for small or unsorted." }],
                steps: [
                  { part: "a", reasoning: "Binary search needs ~log2(500000) ≈ 19 comparisons after sorting; linear needs up to 500,000.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Binary is far faster for this size if the catalogue can be kept sorted.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Linear is better for small lists where sorting overhead exceeds search savings.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "It is better when the list cannot be sorted or changes too often to maintain order.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "It is simpler to implement and has no precondition.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) binary ~19 vs linear up to 500k comparisons (b) linear for small/unsorted/volatile lists",
              },
            },
            {
              id: "ecs11-u13-search-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Binary search is used to find 29 in the sorted list [3, 7, 12, 18, 22, 29, 31, 40].",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Binary search trace", statement: "Mid = floor((low+high)/2); discard half." }],
                steps: [
                  { reasoning: "low=1, high=8, mid=4 → value 18 < 29, so low becomes 5.", marks: 1, markCode: "AO2" },
                  { reasoning: "low=5, high=8, mid=6 → value 29 equals target — found.", marks: 1, markCode: "AO2" },
                  { reasoning: "29 was found in 2 comparisons; linear search could need up to 8.", marks: 1, markCode: "AO2" },
                  { reasoning: "If the target were absent, the range would shrink until low > high.", marks: 1, markCode: "AO1" },
                  { reasoning: "Each step halves the remaining range, giving logarithmic growth.", marks: 1, markCode: "AO2" },
                  { reasoning: "For n items the worst case is about log2(n) comparisons.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Found at position 6 after 2 comparisons (18<29 then 29).",
              },
            },
            {
              id: "ecs11-u13-search-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A company must search a sorted customer database of 1,000,000 records many times per second.",
              parts: [
                { label: "a", prompt: "Describe the binary search procedure for this database.", marks: 3 },
                { label: "b", prompt: "Estimate the worst-case number of comparisons binary search needs for 1,000,000 records, showing your reasoning.", marks: 4 },
                { label: "c", prompt: "Explain why the database being sorted is essential and what happens if new records arrive unsorted.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Search at scale", statement: "Logarithmic comparisons need ordered data." }],
                steps: [
                  { part: "a", reasoning: "Set low to first record and high to last.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "Compare target with the middle record; discard the half that cannot contain it.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "Repeat until found or low exceeds high.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "b", reasoning: "Each comparison halves the search range.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "log2(1,000,000) is about 20 (2^20 ≈ 1,048,576).", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "So roughly 20 comparisons worst case versus up to 1,000,000 linearly.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "This makes many searches per second feasible.", marks: 1, markCode: "AO3", part: "b" },
                  { part: "c", reasoning: "Sorting is essential because binary search discards halves assuming order.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Unsorted arrivals must be inserted in the correct position to maintain order.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Otherwise searches could miss records entirely.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) halve range each step (b) ~log2(10^6) ≈ 20 comparisons (c) order required; insert new records in position",
              },
            },
          ],
        },
        {
          id: "ecs11-u13-sorting-efficiency", title: "Sorting algorithms and efficiency",
          skill: "Describe bubble sort and merge sort, compare their efficiency and explain Big-O growth.",
          sections: [
            { heading: "Sorting algorithms", body: "Bubble sort compares adjacent pairs and swaps them if out of order, repeating passes until no swaps occur. It is simple and uses little extra memory, but slow — worst case n(n-1)/2 comparisons.\n\nMerge sort divides the list into halves, sorts each half recursively, then merges them in order. It is much faster — about n log2(n) comparisons — but needs extra space for merging and is harder to implement." },
            { heading: "Efficiency and Big-O", body: "Efficiency measures how an algorithm's cost grows with input size n. Big-O notation describes the growth class: O(n) grows linearly, O(n log n) slightly faster than quadratic, O(n^2) grows fast.\n\nFor bubble sort, doubling n roughly quadruples the work. For merge sort it only slightly more than doubles. Choosing the right algorithm matters most for large inputs — a slow algorithm on small data is harmless." },
          ],
          keyFormulas: [
            { name: "Bubble sort", statement: "Adjacent swaps per pass; worst case n(n-1)/2 comparisons" },
            { name: "Merge sort", statement: "Divide, sort halves, merge; ~n log2(n) comparisons" },
            { name: "Big-O", statement: "Describes growth: O(n), O(n log n), O(n^2)" },
          ],
          workedExample: {
            problem: "Bubble-sort one pass of [5, 2, 8, 1]. What is the array afterwards?",
            solution: "Compare 5,2 → swap → [2,5,8,1]; compare 5,8 → ok; compare 8,1 → swap → [2,5,1,8]. After one pass: [2,5,1,8].",
          },
          questions: [
            {
              id: "ecs11-u13-sort-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does bubble sort do?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Divides the list in half and merges sorted halves" },
                { id: "b", text: "Repeatedly swaps adjacent out-of-order items until sorted" },
                { id: "c", text: "Checks each item against every other item" },
                { id: "d", text: "Randomly shuffles items into order" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bubble sort", statement: "Adjacent-swap passes." }],
                steps: [{ reasoning: "Bubble sort swaps adjacent out-of-order pairs over repeated passes.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Repeatedly swaps adjacent out-of-order items",
              },
            },
            {
              id: "ecs11-u13-sort-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Describe one pass of bubble sort on [4, 1, 3].",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Bubble sort pass", statement: "Compare adjacent, swap if needed." }],
                steps: [
                  { reasoning: "Compare 4 and 1: out of order, swap → [1, 4, 3].", marks: 1, markCode: "AO1" },
                  { reasoning: "Compare 4 and 3: out of order, swap → [1, 3, 4].", marks: 1, markCode: "AO1" },
                  { reasoning: "End of pass: [1, 3, 4] — the largest item (4) bubbled to the end.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "[4,1,3] → swap 4,1 → swap 4,3 → [1,3,4]",
              },
            },
            {
              id: "ecs11-u13-sort-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how merge sort works on the list [8, 3, 9, 1].",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Merge sort", statement: "Divide, sort, merge." }],
                steps: [
                  { reasoning: "Split into halves: [8, 3] and [9, 1].", marks: 1, markCode: "AO1" },
                  { reasoning: "Sort each half recursively: [3, 8] and [1, 9].", marks: 1, markCode: "AO1" },
                  { reasoning: "Merge by comparing heads: take 1, then 3, then 8, then 9.", marks: 1, markCode: "AO2" },
                  { reasoning: "Result: [1, 3, 8, 9].", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Split [8,3]|[9,1] → sort to [3,8],[1,9] → merge to [1,3,8,9]",
              },
            },
            {
              id: "ecs11-u13-sort-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Bubble sort is applied to [5, 2, 8, 1].",
              parts: [
                { label: "a", prompt: "State the array after the first complete pass.", marks: 2 },
                { label: "b", prompt: "Explain why bubble sort becomes inefficient for large lists.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Bubble sort analysis", statement: "One pass places largest at end; cost grows quadratically." }],
                steps: [
                  { part: "a", reasoning: "Pass 1: swap 5,2 → [2,5,8,1]; 5,8 ok; swap 8,1 → [2,5,1,8].", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "After first pass: [2, 5, 1, 8].", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Worst case needs n(n-1)/2 comparisons — for 100 items that is 4,950.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Cost grows roughly with n squared, so doubling n quadruples the work.", marks: 1, markCode: "AO2", part: "b" },
                  { part: "b", reasoning: "Merge sort's n log n growth is far cheaper at large sizes.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) [2,5,1,8] (b) O(n^2) growth — thousands of comparisons for large n",
              },
            },
            {
              id: "ecs11-u13-sort-q5", difficulty: "challenge", totalMarks: 6,
              stem: "In the worst case, bubble sort on n items needs n(n-1)/2 comparisons. Calculate the worst-case comparisons for n = 100 items.",
              response: { type: "numeric", parts: [{ label: "comparisons", answer: 4950 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Bubble sort worst case", statement: "n(n-1)/2 comparisons." }],
                steps: [
                  { reasoning: "Substitute n = 100 into n(n-1)/2.", marks: 1, markCode: "AO1" },
                  { reasoning: "100 * 99 = 9,900.", marks: 1, markCode: "AO2" },
                  { reasoning: "9,900 / 2 = 4,950 comparisons.", marks: 1, markCode: "AO2" },
                  { reasoning: "This shows why bubble sort is impractical for large datasets.", marks: 1, markCode: "AO3" },
                  { reasoning: "Answer checked: 100*99/2 = 4,950.", marks: 1, markCode: "AO2" },
                  { reasoning: "For contrast, merge sort needs roughly n log2(n) ≈ 664 comparisons.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "4,950 comparisons",
              },
            },
            {
              id: "ecs11-u13-sort-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A school must sort exam results for 5,000 students before analysis.",
              parts: [
                { label: "a", prompt: "Explain why sorting is often needed before searching a list.", marks: 3 },
                { label: "b", prompt: "Describe how merge sort would sort the results and why it suits 5,000 items.", marks: 3 },
                { label: "c", prompt: "Compare the efficiency of bubble sort and merge sort using Big-O growth, and recommend one.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Sorting for search", statement: "Order enables fast search; algorithm choice depends on scale." }],
                steps: [
                  { part: "a", reasoning: "Binary search only works on sorted data.", marks: 1, markCode: "AO1", part: "a" },
                  { part: "a", reasoning: "Sorted data also makes range queries and reporting easier.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "a", reasoning: "Sorting once enables many fast searches afterwards.", marks: 1, markCode: "AO2", part: "a" },
                  { part: "b", reasoning: "Split the 5,000 results in half recursively until single items remain.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "Sort each half and merge them back in order.", marks: 1, markCode: "AO1", part: "b" },
                  { part: "b", reasoning: "n log n growth keeps it fast at 5,000 items; extra space is acceptable.", marks: 1, markCode: "AO3", part: "b" },
                  { part: "c", reasoning: "Bubble sort is O(n^2) — about 12.5 million comparisons worst case for 5,000.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Merge sort is O(n log n) — roughly 5,000 × 12 ≈ 60,000 comparisons.", marks: 1, markCode: "AO2", part: "c" },
                  { part: "c", reasoning: "Big-O describes how cost grows with n, not exact times.", marks: 1, markCode: "AO1", part: "c" },
                  { part: "c", reasoning: "Recommend merge sort — vastly fewer comparisons at this scale.", marks: 1, markCode: "AO3", part: "c" },
                ],
                finalAnswer: "(a) sorted data enables binary search (b) divide-sort-merge suits large n (c) O(n^2) vs O(n log n) — choose merge sort",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u13-efficiency-notes", title: "Searching, Sorting and Efficiency — notes",
      summary: "Linear works anywhere but scans all; binary halves a sorted list; merge sort scales better than bubble sort.",
      sections: [
        { heading: "Search", body: "Linear = n worst case, any list. Binary = ~log2(n), sorted only." },
        { heading: "Sort", body: "Bubble = simple, O(n^2). Merge = divide-and-conquer, O(n log n), needs space." },
        { heading: "Efficiency", body: "Big-O describes growth with n — choose algorithms by input size, not just correctness." },
      ],
    },
  },
];
