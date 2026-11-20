module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson21",
    lesson: {
      id: "cipc-u2-lesson-2-1", code: "2-1",
      title: "Stage 4 — Variables, Operators and Data Types",
      goal: "I CAN use variables of different types and apply operators to calculate and compare values.",
      standards: ["Cambridge Primary Computing 0059 Stage 4: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
      stage: 4,
      vocabulary: [
        { term: "Data type", definition: "The kind of value a variable holds — number, text, Boolean." },
        { term: "Number", definition: "Numeric data used for maths — scores, counts." },
        { term: "String", definition: "Text data — letters and words in quotes." },
        { term: "Operator", definition: "A symbol that performs an operation — +, -, ×, ÷." },
        { term: "Assignment", definition: "Giving a variable a value, e.g. score = 10." },
        { term: "Concatenate", definition: "Joining text strings together." },
      ],
      concept: {
        id: "cipc-u2-s4-vars", title: "Data types and operators",
        skill: "Use number/string/Boolean variables and arithmetic operators at Stage 4 level.",
        sections: [
          { heading: "Data types", body: "Variables hold different types: numbers (score = 10), strings/text (name = 'Sam'), and Booleans (gameOver = true). Using the right type matters — you can't add numbers to text meaningfully, but you can join text with strings." },
          { heading: "Operators", body: "Operators act on values: +, -, ×, ÷ for maths; =, <, > for comparisons; 'join' for text. 'set score to score + 10' uses both assignment and an operator. Parentheses control order: (a + b) × c." },
        ],
        keyFormulas: [
          { name: "Types", statement: "number, string, Boolean" },
          { name: "Operators", statement: "+ - × ÷ = < > join" },
        ],
        workedExample: {
          problem: "name = 'Sam'; set name to name join ' Smith'. What is name? What type is it?",
          solution: "name = 'Sam Smith' — a string. The join operator concatenates text.",
        },
        questions: [
          {
            id: "cipc-u2-dt-q1", difficulty: "foundation", totalMarks: 1,
            stem: "Which is a valid string variable assignment?",
            response: { type: "mcq", choices: [
              { id: "a", text: "name = 'Sam'" }, { id: "b", text: "name = 42" }, { id: "c", text: "name = true" }, { id: "d", text: "name = score" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "String", statement: "Text in quotes." }],
              steps: [{ reasoning: "Strings are quoted text; numbers and Booleans differ.", marks: 1, markCode: "M" }],
              finalAnswer: "name = 'Sam'",
            },
          },
          {
            id: "cipc-u2-dt-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What do +, -, ×, ÷ do, and what do =, <, > do?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Operators", statement: "Maths vs comparison." }],
              steps: [
                { reasoning: "+ - × ÷ = arithmetic operators.", marks: 1, markCode: "M" },
                { reasoning: "= equal, < less, > greater — comparisons.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Arithmetic vs comparison operators",
            },
          },
          {
            id: "cipc-u2-dt-q3", difficulty: "core", totalMarks: 3,
            stem: "score = 10; set score to score × 2 + 5. What is score? Explain each operator's effect.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Operators and assignment", statement: "Compute then assign." }],
              steps: [
                { reasoning: "10 × 2 = 20.", marks: 1, markCode: "M" },
                { reasoning: "20 + 5 = 25.", marks: 1, markCode: "M" },
                { reasoning: "score = 25.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "score = 25",
            },
          },
          {
            id: "cipc-u2-dt-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Name three data types with examples. (b) What is an operator? (c) Trace: lives=3, set lives to lives - 1, then set lives to lives × 2. (d) What does 'join' do to strings? (e) Why can't you add '5' + '3' meaningfully as numbers? (f) What are comparison operators used for? (g) Compute: (10 + 5) × 2 vs 10 + 5 × 2 — why differ? (h) Design a variable setup for a timer counting down from 60.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Data types and operators", statement: "Types, ops, precedence, variables." }],
              steps: [
                { reasoning: "(a) number/string/Boolean with examples.", marks: 1, markCode: "M" },
                { reasoning: "(b) Symbol performing operations.", marks: 1, markCode: "M" },
                { reasoning: "(c) 3→2→4.", marks: 1, markCode: "M" },
                { reasoning: "(d) Concatenates text: 'a' join 'b' = 'ab'.", marks: 1, markCode: "M" },
                { reasoning: "(e) They're strings — join gives '53' not 8.", marks: 1, markCode: "M" },
                { reasoning: "(f) IF conditions/decisions.", marks: 1, markCode: "M" },
                { reasoning: "(g) Brackets first: 30 vs 20 — order matters.", marks: 1, markCode: "M" },
                { reasoning: "(h) time=60, change by -1 each second.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Data types, operators, precedence, string join, timer design.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-dt-notes", title: "Data types — notes",
      summary: "Numbers, strings, Booleans. Operators: arithmetic + comparison. Brackets control order; 'join' merges text.",
      sections: [
        { heading: "Key idea", body: "Right type + right operator = correct result." },
        { heading: "Watch", body: "'5' as string + '3' gives '53', not 8." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson22",
    lesson: {
      id: "cipc-u2-lesson-2-2", code: "2-2",
      title: "Stage 4 — Selection and IF/ELIF/ELSE",
      goal: "I CAN build multi-branch decisions using IF, ELIF and ELSE.",
      standards: ["Cambridge Primary Computing 0059 Stage 4: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
      stage: 4,
      vocabulary: [
        { term: "ELIF", definition: "Else-if — checks another condition if the first was false." },
        { term: "Nested IF", definition: "An IF inside another IF's branch." },
        { term: "Branch", definition: "One possible path through a decision." },
        { term: "Condition chain", definition: "Multiple conditions checked in order." },
        { term: "Priority", definition: "Order matters — first true condition wins." },
        { term: "Fall-through", definition: "When no condition matches, ELSE or nothing runs." },
      ],
      concept: {
        id: "cipc-u2-s4-select", title: "Multi-way selection",
        skill: "Write IF/ELIF/ELSE chains and trace which branch executes at Stage 4 level.",
        sections: [
          { heading: "Multiple branches", body: "ELIF lets you check several conditions in order: 'IF score >= 90 THEN say A ELIF score >= 80 THEN say B ELSE say C'. The first true condition runs; later ones are skipped. Order matters — check the most specific conditions first." },
          { heading: "Reading decision trees", body: "Trace by evaluating each condition top to bottom until one is true. If none match and there's an ELSE, that runs. Nested IFs put decisions inside decisions — powerful but harder to debug." },
        ],
        keyFormulas: [
          { name: "IF/ELIF/ELSE", statement: "first true condition wins" },
          { name: "Order", statement: "check specific conditions before general ones" },
        ],
        workedExample: {
          problem: "score = 85. IF score >= 90 THEN 'A' ELIF score >= 80 THEN 'B' ELSE 'C'. What prints?",
          solution: "85 >= 90 false → check ELIF: 85 >= 80 true → prints B.",
        },
        questions: [
          {
            id: "cipc-u2-ms-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does ELIF do?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Checks another condition if earlier ones were false" }, { id: "b", text: "Repeats a loop" }, { id: "c", text: "Ends the program" }, { id: "d", text: "Creates a variable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "ELIF", statement: "Else-if condition check." }],
              steps: [{ reasoning: "ELIF = additional condition tested in order.", marks: 1, markCode: "M" }],
              finalAnswer: "Checks next condition if false",
            },
          },
          {
            id: "cipc-u2-ms-q2", difficulty: "foundation", totalMarks: 2,
            stem: "temp = 25. 'IF temp > 30 THEN hot ELIF temp > 20 THEN warm ELSE cold'. Output?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Tracing ELIF", statement: "First true wins." }],
              steps: [
                { reasoning: "25 > 30 false; 25 > 20 true.", marks: 1, markCode: "M" },
                { reasoning: "Output: warm.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "warm",
            },
          },
          {
            id: "cipc-u2-ms-q3", difficulty: "core", totalMarks: 3,
            stem: "Write an IF/ELIF/ELSE for grades: 90+ = 'Distinction', 70-89 = 'Merit', below 70 = 'Pass'. What happens at exactly 90?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Multi-branch logic", statement: "Ordered conditions." }],
              steps: [
                { reasoning: "IF >=90 Distinction; ELIF >=70 Merit; ELSE Pass.", marks: 1, markCode: "M" },
                { reasoning: "Check highest first so lower bands don't catch.", marks: 1, markCode: "M" },
                { reasoning: "At 90: first condition true → Distinction.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Correct chain; 90 → Distinction",
            },
          },
          {
            id: "cipc-u2-ms-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) What is ELIF? (b) Why does condition order matter? (c) Trace: x=50, 'IF x>100 A ELIF x>10 B ELSE C'. (d) What runs if no condition is true and no ELSE? (e) Write a chain for BMI categories. (f) What is a nested IF? (g) Why check specific conditions before general? (h) Design a 3-way choice for traffic light colours.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Selection", statement: "ELIF, order, nesting, tracing." }],
              steps: [
                { reasoning: "(a) Else-if — next condition check.", marks: 1, markCode: "M" },
                { reasoning: "(b) First true wins; wrong order gives wrong branch.", marks: 1, markCode: "M" },
                { reasoning: "(c) x>100 false; x>10 true → B.", marks: 1, markCode: "M" },
                { reasoning: "(d) Nothing runs — no matching branch.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid BMI IF/ELIF chain.", marks: 1, markCode: "M" },
                { reasoning: "(f) IF inside another IF.", marks: 1, markCode: "M" },
                { reasoning: "(g) General condition would catch specific cases early.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid 3-branch colour logic.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "ELIF, ordering, tracing, nested IFs, real-world chains.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-ms-notes", title: "Selection — notes",
      summary: "IF/ELIF/ELSE: first true condition wins. Order conditions from specific to general.",
      sections: [
        { heading: "Key idea", body: "Decision chains need careful ordering — check highest thresholds first." },
        { heading: "Trace", body: "Evaluate each condition top-down until one is true." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson23",
    lesson: {
      id: "cipc-u2-lesson-2-3", code: "2-3",
      title: "Stage 4 — Loops: For, While and Nested",
      goal: "I CAN choose the right loop type and write nested loops for complex repetition.",
      standards: ["Cambridge Primary Computing 0059 Stage 4: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
      stage: 4,
      vocabulary: [
        { term: "For loop", definition: "Repeats a set number of times using a counter." },
        { term: "While loop", definition: "Repeats while a condition stays true." },
        { term: "Nested loop", definition: "A loop inside another loop." },
        { term: "Counter variable", definition: "A variable tracking loop iterations." },
        { term: "Loop condition", definition: "The rule that keeps a while loop running." },
        { term: "Iteration count", definition: "Total runs = outer × inner for nested loops." },
      ],
      concept: {
        id: "cipc-u2-s4-loops", title: "Loop types and nesting",
        skill: "Select for/while loops and compute nested loop iterations at Stage 4 level.",
        sections: [
          { heading: "For vs while", body: "For loops repeat a known number of times: 'for i in 1..10'. While loops repeat until a condition fails: 'while score < 100'. Use for when you know the count; while when the end depends on data or events." },
          { heading: "Nested loops", body: "A loop inside a loop multiplies work: 'for i in 1..3: for j in 1..4' runs the inner body 3×4=12 times. Nested loops draw grids, tables and patterns — but can be slow if too deep." },
        ],
        keyFormulas: [
          { name: "For", statement: "known count; counter variable" },
          { name: "While", statement: "runs until condition false" },
          { name: "Nested", statement: "outer × inner = total iterations" },
        ],
        workedExample: {
          problem: "for i in 1..3: for j in 1..5: print '.'. How many dots?",
          solution: "3 × 5 = 15 dots printed.",
        },
        questions: [
          {
            id: "cipc-u2-lt-q1", difficulty: "foundation", totalMarks: 1,
            stem: "When should you use a for loop vs a while loop?",
            response: { type: "mcq", choices: [
              { id: "a", text: "For = known count; while = until condition fails" }, { id: "b", text: "For = fast; while = slow" }, { id: "c", text: "They are identical" }, { id: "d", text: "While is always better" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Loop types", statement: "Count vs condition." }],
              steps: [{ reasoning: "For needs known iterations; while checks a condition.", marks: 1, markCode: "M" }],
              finalAnswer: "For=count; while=condition",
            },
          },
          {
            id: "cipc-u2-lt-q2", difficulty: "foundation", totalMarks: 2,
            stem: "'for i in 1..5' — how many iterations? What is i during the 3rd iteration?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "For loops", statement: "Counter values." }],
              steps: [
                { reasoning: "5 iterations.", marks: 1, markCode: "M" },
                { reasoning: "i = 3 on the third run.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "5; i=3",
            },
          },
          {
            id: "cipc-u2-lt-q3", difficulty: "core", totalMarks: 3,
            stem: "'while lives > 0: play' — when does it stop? What could make it infinite?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "While loops", statement: "Condition-based repetition." }],
              steps: [
                { reasoning: "Stops when lives reaches 0.", marks: 1, markCode: "M" },
                { reasoning: "If lives never decreases → infinite loop.", marks: 1, markCode: "M" },
                { reasoning: "Condition must be updated inside loop.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "lives=0; must update condition inside",
            },
          },
          {
            id: "cipc-u2-lt-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Compare for and while loops. (b) What is a nested loop? (c) for i 1..4, for j 1..3 — total iterations? (d) Write a for loop to print numbers 1-10. (e) Write a while loop that counts down from 10. (f) Why update the while condition inside? (g) What does a counter variable do? (h) Design a nested loop that draws a 5×5 grid of dots.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Loops", statement: "Types, nesting, counters." }],
              steps: [
                { reasoning: "(a) For=count; while=until condition false.", marks: 1, markCode: "M" },
                { reasoning: "(b) Loop inside loop.", marks: 1, markCode: "M" },
                { reasoning: "(c) 4×3=12.", marks: 1, markCode: "M" },
                { reasoning: "(d) for i in 1..10: print i.", marks: 1, markCode: "M" },
                { reasoning: "(e) while n>0: print n; n=n-1.", marks: 1, markCode: "M" },
                { reasoning: "(f) Else condition never changes → infinite.", marks: 1, markCode: "M" },
                { reasoning: "(g) Tracks iteration number/value.", marks: 1, markCode: "M" },
                { reasoning: "(h) Nested 5×5 loops printing dots.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Loop types, nesting math, counters, while-condition updates.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-lt-notes", title: "Loops — notes",
      summary: "For=known count; while=condition. Nested loops multiply iterations (outer × inner).",
      sections: [
        { heading: "Key idea", body: "Choose loop type by whether you know the count beforehand." },
        { heading: "Nested", body: "Inner loop runs fully for each outer iteration." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson24",
    lesson: {
      id: "cipc-u2-lesson-2-4", code: "2-4",
      title: "Stage 4 — Sorting and Searching Algorithms",
      goal: "I CAN describe and apply simple sorting and searching algorithms to data.",
      standards: ["Cambridge Primary Computing 0059 Stage 4: managing data", "Cambridge Primary Computing 0059 framework strands: Managing data"],
      stage: 4,
      vocabulary: [
        { term: "Sort", definition: "Arranging data in order — ascending or descending." },
        { term: "Search", definition: "Finding an item in a collection." },
        { term: "Linear search", definition: "Check items one by one until found." },
        { term: "Binary search", definition: "Halve the search space each step (sorted data only)." },
        { term: "Algorithm efficiency", definition: "How few steps an algorithm needs." },
        { term: "Compare", definition: "Checking which of two items comes first." },
      ],
      concept: {
        id: "cipc-u2-s4-search", title: "Sorting and searching",
        skill: "Apply linear/binary search and basic sorting at Stage 4 level.",
        sections: [
          { heading: "Searching", body: "Linear search checks each item in turn — simple but slow for big lists. Binary search needs sorted data: check the middle, discard the half that can't contain the target, repeat — much faster." },
          { heading: "Sorting", body: "Sorting arranges data for searching and display. Simple methods: bubble sort (compare neighbours, swap if out of order) or selection (find smallest, move to front). Sorted data enables binary search." },
        ],
        keyFormulas: [
          { name: "Linear search", statement: "check each item until found — O(n)" },
          { name: "Binary search", statement: "halve list each step — needs sorted data" },
        ],
        workedExample: {
          problem: "Find 7 in [1,3,5,7,9,11] using binary search. How many checks?",
          solution: "Middle=7 → found in 1 check. If target were 9: middle 7 <9 → search upper half [9,11], middle 9 → found. ~log₂(n) checks.",
        },
        questions: [
          {
            id: "cipc-u2-ss-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What must be true before using binary search?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Data must be sorted" }, { id: "b", text: "List must be long" }, { id: "c", text: "Data must be text" }, { id: "d", text: "No requirements" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Binary search", statement: "Requires sorted data." }],
              steps: [{ reasoning: "Binary search halves a sorted list.", marks: 1, markCode: "M" }],
              finalAnswer: "Data must be sorted",
            },
          },
          {
            id: "cipc-u2-ss-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Compare linear and binary search in one sentence each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Search types", statement: "Sequential vs halving." }],
              steps: [
                { reasoning: "Linear: check items one by one.", marks: 1, markCode: "M" },
                { reasoning: "Binary: halve sorted list each step.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Linear=each item; binary=halve sorted",
            },
          },
          {
            id: "cipc-u2-ss-q3", difficulty: "core", totalMarks: 3,
            stem: "Find 8 in [2,4,6,8,10,12,14] by binary search — describe each step.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Binary search", statement: "Middle-out halving." }],
              steps: [
                { reasoning: "Middle=8 → found immediately.", marks: 1, markCode: "M" },
                { reasoning: "If not found: compare, discard half, repeat.", marks: 1, markCode: "M" },
                { reasoning: "~log₂(7)≈3 checks max for 7 items.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Middle=8 found in 1 step",
            },
          },
          {
            id: "cipc-u2-ss-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define sorting and searching. (b) Why sort before binary searching? (c) Find 5 in [1,3,5,7,9] linearly — how many checks? (d) Same by binary — how many? (e) Why is binary faster on big lists? (f) What is bubble sort? (g) When is linear search better? (h) Sort [5,2,8,1] by selection method — show steps.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Algorithms", statement: "Sort/search methods, efficiency." }],
              steps: [
                { reasoning: "(a) Sort=order data; search=find item.", marks: 1, markCode: "M" },
                { reasoning: "(b) Halving needs order to discard halves.", marks: 1, markCode: "M" },
                { reasoning: "(c) 3 checks (1,3,5).", marks: 1, markCode: "M" },
                { reasoning: "(d) 2 checks (middle 5 found).", marks: 1, markCode: "M" },
                { reasoning: "(e) log₂(n) vs n — much fewer steps.", marks: 1, markCode: "M" },
                { reasoning: "(f) Compare neighbours, swap if out of order.", marks: 1, markCode: "M" },
                { reasoning: "(g) Unsorted/small lists — simpler, no sort needed.", marks: 1, markCode: "M" },
                { reasoning: "(h) Find min, swap to front repeatedly → [1,2,5,8].", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Sorting/searching, binary efficiency, bubble/selection sorts.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-ss-notes", title: "Sorting and searching — notes",
      summary: "Linear=each item; binary=halve sorted list (much faster). Sort first to enable binary search.",
      sections: [
        { heading: "Key idea", body: "Sorted data unlocks fast searching." },
        { heading: "Efficiency", body: "Binary ~log₂(n) vs linear ~n checks." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson25",
    lesson: {
      id: "cipc-u2-lesson-2-5", code: "2-5",
      title: "Stage 4 — Functions and Procedures",
      goal: "I CAN create reusable blocks of code using functions and explain why they help.",
      standards: ["Cambridge Primary Computing 0059 Stage 4: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
      stage: 4,
      vocabulary: [
        { term: "Function", definition: "A named block of code that performs a task and can be reused." },
        { term: "Procedure", definition: "A function that performs actions without returning a value." },
        { term: "Parameter", definition: "Input passed to a function to customise it." },
        { term: "Return value", definition: "The result a function sends back." },
        { term: "Call", definition: "Using a function by name in code." },
        { term: "Reuse", definition: "Using the same code for multiple tasks." },
      ],
      concept: {
        id: "cipc-u2-s4-func", title: "Functions and reuse",
        skill: "Define, call and parameterise functions at Stage 4 level.",
        sections: [
          { heading: "What is a function?", body: "A function packages instructions under a name so you can reuse them: 'define drawSquare(size): move size steps; turn 90; repeat 4'. Call it anywhere with drawSquare(50) or drawSquare(100) — the parameter changes behaviour." },
          { heading: "Why functions help", body: "Less repetition = shorter, easier-to-fix programs. Change the function once and every call updates. Parameters make one function flexible for many uses." },
        ],
        keyFormulas: [
          { name: "define/call", statement: "name(params): body ... call name(args)" },
          { name: "Parameter", statement: "input that customises the function" },
        ],
        workedExample: {
          problem: "define greet(name): say 'Hello ' + name. What does greet('Ana') output?",
          solution: "'Hello Ana' — the parameter name is replaced by the argument 'Ana'.",
        },
        questions: [
          {
            id: "cipc-u2-fn-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a function?",
            response: { type: "mcq", choices: [
              { id: "a", text: "A named reusable block of code" }, { id: "b", text: "A type of computer" }, { id: "c", text: "A network device" }, { id: "d", text: "A screen colour" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Function", statement: "Reusable named code." }],
              steps: [{ reasoning: "Function = packaged instructions callable by name.", marks: 1, markCode: "M" }],
              finalAnswer: "Reusable named code block",
            },
          },
          {
            id: "cipc-u2-fn-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a parameter and how does it differ from the code inside the function?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Parameters", statement: "Inputs vs body." }],
              steps: [
                { reasoning: "Parameter = input value passed when calling.", marks: 1, markCode: "M" },
                { reasoning: "Body = fixed instructions using the parameter.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Input vs fixed instructions",
            },
          },
          {
            id: "cipc-u2-fn-q3", difficulty: "core", totalMarks: 3,
            stem: "define double(n): return n × 2. What does double(7) return? What does double(0) return?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Function calls", statement: "Parameter substitution." }],
              steps: [
                { reasoning: "double(7) = 14.", marks: 1, markCode: "M" },
                { reasoning: "double(0) = 0.", marks: 1, markCode: "M" },
                { reasoning: "Parameter n replaced by argument.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "14 and 0",
            },
          },
          {
            id: "cipc-u2-fn-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define function, parameter, call. (b) Why use functions instead of repeating code? (c) define area(w,h): return w×h — what does area(3,4) return? (d) What is a return value? (e) How could parameters make drawSquare flexible? (f) What is the difference between a function and a procedure? (g) Rewrite 'repeat move+turn 90 four times' as a function. (h) Design a function 'greet' used three times in a program.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Functions", statement: "Definition, parameters, returns, reuse." }],
              steps: [
                { reasoning: "(a) Function=reusable code; parameter=input; call=use by name.", marks: 1, markCode: "M" },
                { reasoning: "(b) Shorter, easier to fix, consistent.", marks: 1, markCode: "M" },
                { reasoning: "(c) 12.", marks: 1, markCode: "M" },
                { reasoning: "(d) Result sent back by function.", marks: 1, markCode: "M" },
                { reasoning: "(e) size parameter → different square sizes.", marks: 1, markCode: "M" },
                { reasoning: "(f) Function returns value; procedure just acts.", marks: 1, markCode: "M" },
                { reasoning: "(g) define square(): move+turn90 repeat4.", marks: 1, markCode: "M" },
                { reasoning: "(h) define greet(n): say hello n; call 3×.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Functions, parameters, returns, reuse benefits.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u2-fn-notes", title: "Functions — notes",
      summary: "Function = named reusable code. Parameters customise behaviour; calls pass arguments; return sends result back.",
      sections: [
        { heading: "Key idea", body: "Write once, call many times — DRY principle." },
        { heading: "Parameters", body: "Same function, different inputs → different outputs." },
      ],
    },
  },
];
