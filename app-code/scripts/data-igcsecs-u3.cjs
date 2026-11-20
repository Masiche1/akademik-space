module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson71",
    lesson: {
      id: "ciecs-u3-lesson-3-1", code: "3-1",
      title: "Algorithm Design: Flowcharts and Pseudocode",
      goal: "I CAN design algorithms using flowcharts and pseudocode for given problems.",
      standards: ["Cambridge IGCSE Computer Science 0478: algorithm design and problem-solving", "0478 section 7: algorithms"],
      vocabulary: [
        { term: "Algorithm", definition: "Precise step-by-step method for solving a problem." },
        { term: "Flowchart", definition: "Diagram showing algorithm steps and decisions." },
        { term: "Pseudocode", definition: "Plain-language description of algorithm steps." },
        { term: "Decomposition", definition: "Breaking problems into smaller sub-problems." },
        { term: "Decision", definition: "Point where algorithm branches based on condition." },
        { term: "Iteration", definition: "Repeating steps — loops." },
      ],
      concept: {
        id: "ciecs-u3-s1-algo", title: "Algorithm design",
        skill: "Express algorithms via flowcharts and pseudocode at IGCSE level.",
        sections: [
          { heading: "Flowchart symbols", body: "Oval=start/end, rectangle=process, diamond=decision, parallelogram=input/output, arrows=flow. Decisions branch YES/NO; loops return to earlier steps." },
          { heading: "Pseudocode", body: "Plain-language algorithm description: INPUT, OUTPUT, IF...THEN...ELSE, FOR...TO...DO, WHILE...DO. More precise than prose, language-independent." },
        ],
        keyFormulas: [
          { name: "Flowchart", statement: "symbols: oval/rect/diamond/parallelogram" },
          { name: "Pseudocode", statement: "INPUT/OUTPUT/IF/FOR/WHILE" },
        ],
        workedExample: {
          problem: "Write pseudocode to find the largest of three numbers.",
          solution: "INPUT a,b,c\nmax = a\nIF b > max THEN max = b\nIF c > max THEN max = c\nOUTPUT max",
        },
        questions: [
          {
            id: "ciecs-u3-al-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does a diamond shape represent in a flowchart?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Decision" }, { id: "b", text: "Start/end" }, { id: "c", text: "Process" }, { id: "d", text: "Input/output" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Flowchart symbols", statement: "Diamond=decision." }],
              steps: [{ reasoning: "Diamond = decision point.", marks: 1, markCode: "M" }],
              finalAnswer: "Decision",
            },
          },
          {
            id: "ciecs-u3-al-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is pseudocode and why use it instead of a programming language?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Pseudocode", statement: "Language-independent algorithm description." }],
              steps: [
                { reasoning: "Pseudocode = plain-language algorithm steps.", marks: 1, markCode: "M" },
                { reasoning: "Language-independent; focuses on logic not syntax.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Language-independent algorithm description",
            },
          },
          {
            id: "ciecs-u3-al-q3", difficulty: "core", totalMarks: 3,
            stem: "Write pseudocode to check if a number is even or odd.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Pseudocode", statement: "Decision structure." }],
              steps: [
                { reasoning: "INPUT n; IF n MOD 2 = 0 THEN OUTPUT 'even' ELSE OUTPUT 'odd'.", marks: 1, markCode: "M" },
                { reasoning: "Correct IF/ELSE structure.", marks: 1, markCode: "M" },
                { reasoning: "Valid pseudocode syntax.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "IF n MOD 2 = 0 THEN even ELSE odd",
            },
          },
          {
            id: "ciecs-u3-al-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define algorithm, flowchart, pseudocode, decomposition, decision, iteration. (b) Name 4 flowchart symbols and their meanings. (c) Write pseudocode for 'is_palindrome(s)'. (d) What is decomposition? (e) Write pseudocode for 'sum of numbers 1 to 100'. (f) How do loops appear in pseudocode? (g) Draw/describe flowchart for 'if temperature > 30 then alert'. (h) Design an algorithm for 'find missing number in 1..n sequence'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Algorithm design", statement: "Flowcharts, pseudocode, decomposition." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Four valid symbols.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid palindrome pseudocode.", marks: 1, markCode: "M" },
                { reasoning: "(d) Breaking into sub-problems.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid sum loop pseudocode.", marks: 1, markCode: "M" },
                { reasoning: "(f) FOR/WHILE/REPEAT.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid decision flowchart.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid missing-number algorithm.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Algorithm design with flowcharts and pseudocode.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u3-al-notes", title: "Algorithm design — notes",
      summary: "Flowchart symbols: oval=start, rect=process, diamond=decision, parallelogram=I/O. Pseudocode=INPUT/OUTPUT/IF/FOR/WHILE.",
      sections: [
        { heading: "Key idea", body: "Design algorithms before coding — flowcharts and pseudocode focus on logic." },
        { heading: "Pseudocode", body: "More precise than prose, independent of programming language." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson72",
    lesson: {
      id: "ciecs-u3-lesson-3-2", code: "3-2",
      title: "Searching and Sorting Algorithms",
      goal: "I CAN explain and apply linear/binary search and bubble/merge sort algorithms.",
      standards: ["Cambridge IGCSE Computer Science 0478: algorithm design", "0478 section 7: searching/sorting"],
      vocabulary: [
        { term: "Linear search", definition: "Check each item sequentially — O(n)." },
        { term: "Binary search", definition: "Halve sorted list each step — O(log n)." },
        { term: "Bubble sort", definition: "Compare neighbours, swap if out of order — O(n²)." },
        { term: "Merge sort", definition: "Divide and conquer sorting — O(n log n)." },
        { term: "Efficiency", definition: "How few steps/resources algorithm needs." },
        { term: "Sorted", definition: "Data in ascending or descending order." },
      ],
      concept: {
        id: "ciecs-u3-s2-search", title: "Searching and sorting",
        skill: "Apply and evaluate search/sort algorithms at IGCSE level.",
        sections: [
          { heading: "Searching", body: "Linear search checks each item — worst case n checks, works on any data. Binary search on sorted data halves each step — ~log₂n checks. Binary needs sorted data; linear doesn't." },
          { heading: "Sorting", body: "Bubble sort compares neighbours and swaps — simple but O(n²). Merge sort divides list, sorts halves, merges — O(n log n), efficient on large data. Choice depends on data size." },
        ],
        keyFormulas: [
          { name: "Linear", statement: "O(n) — check each" },
          { name: "Binary", statement: "O(log n) — halve sorted" },
          { name: "Merge sort", statement: "O(n log n) — divide & conquer" },
        ],
        workedExample: {
          problem: "Find 30 in [10,20,30,40,50]. Linear vs binary — count checks.",
          solution: "Linear: 3 checks. Binary: middle=30 → 1 check. Binary faster on large lists.",
        },
        questions: [
          {
            id: "ciecs-u3-ss-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What must be true for binary search?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Data must be sorted" }, { id: "b", text: "List must be small" }, { id: "c", text: "Data must be numbers" }, { id: "d", text: "No requirement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Binary search", statement: "Needs sorted data." }],
              steps: [{ reasoning: "Halving requires order.", marks: 1, markCode: "M" }],
              finalAnswer: "Data must be sorted",
            },
          },
          {
            id: "ciecs-u3-ss-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Compare linear and binary search in terms of efficiency.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Search efficiency", statement: "n vs log n." }],
              steps: [
                { reasoning: "Linear ~n checks; binary ~log₂n.", marks: 1, markCode: "M" },
                { reasoning: "Binary much faster on large lists.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "n vs log₂n",
            },
          },
          {
            id: "ciecs-u3-ss-q3", difficulty: "core", totalMarks: 3,
            stem: "Find 70 in [10,20,30,40,50,60,70,80]. Show binary search steps.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Binary search", statement: "Middle-out halving." }],
              steps: [
                { reasoning: "Middle=40/50 → compare 70 → search upper half.", marks: 1, markCode: "M" },
                { reasoning: "Continue halving until found.", marks: 1, markCode: "M" },
                { reasoning: "~log₂(8)=3 checks.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Binary search steps shown",
            },
          },
          {
            id: "ciecs-u3-ss-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define linear search, binary search, bubble sort, merge sort, efficiency, sorted. (b) When is linear better? (c) Find 15 in [5,10,15,20,25] both ways — count checks. (d) Why sort before binary? (e) What is bubble sort? (f) What is merge sort's advantage? (g) Compare O(n) vs O(n²) for 1000 items. (h) Design a search strategy for a library catalogue app.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Algorithms", statement: "Search/sort efficiency." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Small/unsorted lists — simpler.", marks: 1, markCode: "M" },
                { reasoning: "(c) Linear 3 checks; binary ~2.", marks: 1, markCode: "M" },
                { reasoning: "(d) Halving needs order.", marks: 1, markCode: "M" },
                { reasoning: "(e) Compare neighbours, swap if wrong.", marks: 1, markCode: "M" },
                { reasoning: "(f) O(n log n) — fast on large data.", marks: 1, markCode: "M" },
                { reasoning: "(g) 1000 vs 1M — huge difference.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid search strategy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Algorithm efficiency: search and sort.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u3-ss-notes", title: "Search and sort — notes",
      summary: "Linear=O(n), binary=O(log n) needs sorted. Merge sort O(n log n) for large data.",
      sections: [
        { heading: "Key idea", body: "Algorithm choice depends on data size and order." },
        { heading: "Efficiency", body: "log₂n grows slowly — binary search scales well." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson73",
    lesson: {
      id: "ciecs-u3-lesson-3-3", code: "3-3",
      title: "Programming Fundamentals",
      goal: "I CAN write programs using variables, selection, iteration and functions.",
      standards: ["Cambridge IGCSE Computer Science 0478: programming", "0478 section 8: programming"],
      vocabulary: [
        { term: "Variable", definition: "Named storage location whose value can change." },
        { term: "Selection", definition: "Choosing which instructions run based on condition." },
        { term: "Iteration", definition: "Repeating instructions — loops." },
        { term: "Function", definition: "Named code block performing a task." },
        { term: "Parameter", definition: "Input passed to a function." },
        { term: "Return value", definition: "Result a function sends back." },
      ],
      concept: {
        id: "ciecs-u3-s3-prog", title: "Programming fundamentals",
        skill: "Write programs using core constructs at IGCSE level.",
        sections: [
          { heading: "Core constructs", body: "Every program uses: sequence (ordered steps), selection (IF/ELSE), iteration (loops), functions (reusable code). Variables store data; operators manipulate it." },
          { heading: "Functions and scope", body: "Functions package reusable code: def area(w,h): return w*h. Parameters customise; return values send results. Local variables stay inside functions — prevent conflicts." },
        ],
        keyFormulas: [
          { name: "Selection", statement: "IF condition THEN...ELSE..." },
          { name: "Iteration", statement: "FOR/WHILE loops" },
          { name: "Function", statement: "def name(params): return value" },
        ],
        workedExample: {
          problem: "Write Python: function is_prime(n) returning True if n is prime.",
          solution: "def is_prime(n):\n    if n < 2: return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0: return False\n    return True",
        },
        questions: [
          {
            id: "ciecs-u3-pf-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What are the three core programming constructs?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Sequence, selection, iteration" }, { id: "b", text: "Input, process, output" }, { id: "c", text: "Variables, functions, loops" }, { id: "d", text: "Hardware, software, data" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Constructs", statement: "Seq/select/iterate." }],
              steps: [{ reasoning: "The three building blocks.", marks: 1, markCode: "M" }],
              finalAnswer: "Sequence, selection, iteration",
            },
          },
          {
            id: "ciecs-u3-pf-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between a parameter and a return value?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Parameter vs return", statement: "Input vs output." }],
              steps: [
                { reasoning: "Parameter = input to function.", marks: 1, markCode: "M" },
                { reasoning: "Return value = output/result.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Input vs output",
            },
          },
          {
            id: "ciecs-u3-pf-q3", difficulty: "core", totalMarks: 3,
            stem: "Write Python: function that returns the sum of two numbers.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Functions", statement: "Parameter and return." }],
              steps: [
                { reasoning: "def add(a,b): return a+b", marks: 1, markCode: "M" },
                { reasoning: "Correct syntax.", marks: 1, markCode: "M" },
                { reasoning: "Valid function.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "def add(a,b): return a+b",
            },
          },
          {
            id: "ciecs-u3-pf-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define variable, selection, iteration, function, parameter, return value. (b) Write def square(n). (c) What does square(5) return? (d) What is local vs global scope? (e) Why use functions? (f) Write def is_even(n) returning Boolean. (g) Can functions call functions? (h) Design a function set for a quiz game.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Programming", statement: "Constructs, functions, scope." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) def square(n): return n*n.", marks: 1, markCode: "M" },
                { reasoning: "(c) 25.", marks: 1, markCode: "M" },
                { reasoning: "(d) Local=inside; global=everywhere.", marks: 1, markCode: "M" },
                { reasoning: "(e) DRY, reusable, testable.", marks: 1, markCode: "M" },
                { reasoning: "(f) def is_even(n): return n%2==0.", marks: 1, markCode: "M" },
                { reasoning: "(g) Yes — composition.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid function set.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Programming fundamentals and functions.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u3-pf-notes", title: "Programming — notes",
      summary: "Sequence+selection+iteration+functions = all programs. Parameters in, return values out.",
      sections: [
        { heading: "Key idea", body: "Functions enable modular, reusable, testable code." },
        { heading: "Scope", body: "Local variables protect against conflicts." },
      ],
    },
  },
  {
    file: "lesson-3-4.ts", exportName: "lesson74",
    lesson: {
      id: "ciecs-u3-lesson-3-4", code: "3-4",
      title: "Data Structures: Strings and Lists",
      goal: "I CAN manipulate strings and lists using indexing, slicing and methods.",
      standards: ["Cambridge IGCSE Computer Science 0478: programming", "0478 section 8: data structures"],
      vocabulary: [
        { term: "String", definition: "Sequence of characters." },
        { term: "List", definition: "Ordered collection of items." },
        { term: "Index", definition: "Position of item — starts at 0." },
        { term: "Slice", definition: "Subsequence of a string or list." },
        { term: "Method", definition: "Built-in function operating on data." },
        { term: "Iteration", definition: "Looping through each item." },
      ],
      concept: {
        id: "ciecs-u3-s4-ds", title: "Strings and lists",
        skill: "Manipulate strings and lists at IGCSE level.",
        sections: [
          { heading: "Strings", body: "Strings are character sequences: s='hello'. Index s[0]='h', slice s[1:4]='ell'. Methods: .upper(), .lower(), .len(), .replace(). Strings are immutable — can't change individual characters." },
          { heading: "Lists", body: "Lists are ordered collections: nums=[1,2,3]. Index nums[0]=1. Methods: .append(), .remove(), .sort(), .len(). Lists are mutable — can change items. Can hold mixed types." },
        ],
        keyFormulas: [
          { name: "s[i]", statement: "index starts at 0" },
          { name: "s[i:j]", statement: "slice" },
          { name: ".append()", statement: "add to list" },
        ],
        workedExample: {
          problem: "s='programming'. Print s[0:7].upper() and len(s).",
          solution: "s[0:7]='program' → 'PROGRAM'; len(s)=11.",
        },
        questions: [
          {
            id: "ciecs-u3-ds-q1", difficulty: "foundation", totalMarks: 1,
            stem: "In Python, what is s[0] for s='hello'?",
            response: { type: "mcq", choices: [
              { id: "a", text: "'h'" }, { id: "b", text: "'e'" }, { id: "c", text: "'l'" }, { id: "d", text: "Error" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Index", statement: "Starts at 0." }],
              steps: [{ reasoning: "Index 0 = first character.", marks: 1, markCode: "M" }],
              finalAnswer: "'h'",
            },
          },
          {
            id: "ciecs-u3-ds-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between a string and a list?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "String vs list", statement: "Chars vs items." }],
              steps: [
                { reasoning: "String = characters; list = any items.", marks: 1, markCode: "M" },
                { reasoning: "Strings immutable; lists mutable.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Chars vs items; immutable vs mutable",
            },
          },
          {
            id: "ciecs-u3-ds-q3", difficulty: "core", totalMarks: 3,
            stem: "Write Python: given word='stressed', print it reversed.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "String slicing", statement: "Reverse via negative step." }],
              steps: [
                { reasoning: "word[::-1] reverses.", marks: 1, markCode: "M" },
                { reasoning: "Outputs 'desserts'.", marks: 1, markCode: "M" },
                { reasoning: "Valid Python.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "'desserts'",
            },
          },
          {
            id: "ciecs-u3-ds-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define string, list, index, slice, method, iteration. (b) What is nums[-1] for [10,20,30]? (c) How to add item to list? (d) Write Python: count vowels in a string. (e) What is slicing? (f) How do you sort a list? (g) Can a list hold mixed types? (h) Design a program storing and analysing student grades.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Data structures", statement: "Strings, lists, methods." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 30 — negative index.", marks: 1, markCode: "M" },
                { reasoning: "(c) .append() or + [item].", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid vowel-counting code.", marks: 1, markCode: "M" },
                { reasoning: "(e) Subsequence s[i:j].", marks: 1, markCode: "M" },
                { reasoning: "(f) .sort() or sorted().", marks: 1, markCode: "M" },
                { reasoning: "(g) Yes — mixed types allowed.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid grades program.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Strings and lists manipulation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u3-ds-notes", title: "Strings and lists — notes",
      summary: "Index 0-based; slicing s[i:j]; strings immutable, lists mutable. Methods: append, sort, upper.",
      sections: [
        { heading: "Key idea", body: "Both use indexing and slicing — negative indices count from end." },
        { heading: "Mutability", body: "Strings can't change; lists can — important difference." },
      ],
    },
  },
  {
    file: "lesson-3-5.ts", exportName: "lesson75",
    lesson: {
      id: "ciecs-u3-lesson-3-5", code: "3-5",
      title: "Databases and SQL",
      goal: "I CAN design database tables and write SQL queries to retrieve specific data.",
      standards: ["Cambridge IGCSE Computer Science 0478: databases", "0478 section 9: databases"],
      vocabulary: [
        { term: "Database", definition: "Organised collection of related data in tables." },
        { term: "Table", definition: "Grid of records (rows) and fields (columns)." },
        { term: "Record", definition: "One complete row of data." },
        { term: "Field", definition: "One column — a specific data attribute." },
        { term: "Primary key", definition: "Unique ID identifying each record." },
        { term: "Query", definition: "Request retrieving specific records." },
      ],
      concept: {
        id: "ciecs-u3-s5-db", title: "Databases and SQL",
        skill: "Design tables and query data at IGCSE level.",
        sections: [
          { heading: "Database structure", body: "Tables hold records (rows) and fields (columns). Each record has a primary key — unique ID. Fields have data types (text, number, date). Relationships link tables — one student has many book loans." },
          { heading: "SQL queries", body: "SELECT retrieves data: SELECT * FROM students WHERE year=10. ORDER BY sorts, COUNT counts, INSERT adds, UPDATE modifies, DELETE removes. Queries extract exactly the data needed." },
        ],
        keyFormulas: [
          { name: "Table", statement: "records × fields" },
          { name: "SELECT", statement: "retrieve data" },
          { name: "WHERE", statement: "filter conditions" },
        ],
        workedExample: {
          problem: "Students(id, name, year, grade). Find all Year 11 students with grade A*.",
          solution: "SELECT name FROM students WHERE year=11 AND grade='A*' ORDER BY name.",
        },
        questions: [
          {
            id: "ciecs-u3-db-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a primary key?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Unique ID identifying each record" }, { id: "b", text: "A password" }, { id: "c", text: "A type of query" }, { id: "d", text: "A table column" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary key", statement: "Unique record ID." }],
              steps: [{ reasoning: "PK uniquely identifies each row.", marks: 1, markCode: "M" }],
              finalAnswer: "Unique record identifier",
            },
          },
          {
            id: "ciecs-u3-db-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between a record and a field?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Record vs field", statement: "Row vs column." }],
              steps: [
                { reasoning: "Record = one complete row.", marks: 1, markCode: "M" },
                { reasoning: "Field = one column/attribute.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Row vs column",
            },
          },
          {
            id: "ciecs-u3-db-q3", difficulty: "core", totalMarks: 3,
            stem: "Write a query: products(id, name, price, stock). Find products costing over $50 with stock > 10.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "SQL queries", statement: "SELECT...WHERE." }],
              steps: [
                { reasoning: "SELECT name FROM products WHERE price>50 AND stock>10.", marks: 1, markCode: "M" },
                { reasoning: "Correct conditions.", marks: 1, markCode: "M" },
                { reasoning: "Valid SQL syntax.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "SELECT...WHERE price>50 AND stock>10",
            },
          },
          {
            id: "ciecs-u3-db-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define database, table, record, field, primary key, query. (b) Design a 'library books' table with 5 fields. (c) What type for each field? (d) Write query for books published after 2020. (e) What is a relationship between tables? (f) Why use primary keys? (g) What does ORDER BY do? (h) Design a 2-table school system (students + courses).",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Databases", statement: "Tables, queries, relationships." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid table with 5 fields.", marks: 1, markCode: "M" },
                { reasoning: "(c) Appropriate data types.", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid date query.", marks: 1, markCode: "M" },
                { reasoning: "(e) Links between tables via keys.", marks: 1, markCode: "M" },
                { reasoning: "(f) Unique identification, relationships.", marks: 1, markCode: "M" },
                { reasoning: "(g) Sorts results.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid 2-table design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Database design and SQL querying.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciecs-u3-db-notes", title: "Databases — notes",
      summary: "Tables=records×fields; PK=unique ID; SQL=SELECT/INSERT/UPDATE/DELETE/WHERE/ORDER BY.",
      sections: [
        { heading: "Key idea", body: "Databases organise huge data for fast retrieval." },
        { heading: "SQL", body: "Queries let you extract exactly what you need." },
      ],
    },
  },
];
