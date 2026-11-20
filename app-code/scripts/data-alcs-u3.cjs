module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson141",
    lesson: {
      id: "ciealc-u3-lesson-3-1", code: "3-1",
      title: "Algorithm Design and Representation",
      goal: "I CAN design algorithms using flowcharts, pseudocode and top-down decomposition.",
      standards: ["Cambridge A Level Computer Science 9618: algorithms", "9618: algorithm design"],
      vocabulary: [
        { term: "Algorithm", definition: "Step-by-step procedure to solve a problem." },
        { term: "Flowchart", definition: "Visual diagram of algorithm steps." },
        { term: "Pseudocode", definition: "Text representation of algorithm logic." },
        { term: "Decomposition", definition: "Breaking problems into smaller sub-problems." },
        { term: "Abstraction", definition: "Focusing on essential details, ignoring others." },
        { term: "Dry run", definition: "Manually tracing algorithm with sample data." },
      ],
      concept: {
        id: "ciealc-u3-s1-algo", title: "Algorithm design",
        skill: "Represent algorithms with flowcharts and pseudocode.",
        sections: [
          { heading: "Algorithm representations", body: "Flowchart: standard symbols (oval=start/end, rectangle=process, diamond=decision, parallelogram=input/output, arrow=flow). Pseudocode: structured text with keywords (INPUT, OUTPUT, IF, FOR, WHILE, CALL)." },
          { heading: "Decomposition and abstraction", body: "Decompose complex problems into sub-problems (functions). Abstract: focus on what matters, hide implementation details. Both make problems tractable." },
        ],
        keyFormulas: [
          { name: "Flowchart symbols", statement: "oval/rect/diamond/parallelogram/arrow" },
          { name: "Decomposition", statement: "break into sub-problems" },
          { name: "Abstraction", statement: "hide non-essential details" },
        ],
        workedExample: {
          problem: "Write pseudocode to check if a number is prime.",
          solution: "INPUT n; IF n < 2 THEN OUTPUT 'not prime'; ELSE count = 0; FOR i = 2 TO n-1 DO IF n MOD i = 0 THEN count = count + 1; ENDIF; ENDFOR; IF count = 0 THEN OUTPUT 'prime' ELSE OUTPUT 'not prime'; ENDIF; ENDIF.",
        },
        questions: [
          {
            id: "ciealc-u3-al-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an algorithm?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Step-by-step procedure to solve a problem" }, { id: "b", text: "A type of computer" }, { id: "c", text: "A programming language" }, { id: "d", text: "A network protocol" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Algorithm", statement: "Problem-solving procedure." }],
              steps: [{ reasoning: "Algorithm = precise step-by-step solution.", marks: 1, markCode: "M" }],
              finalAnswer: "Step-by-step procedure",
            },
          },
          {
            id: "ciealc-u3-al-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name 3 flowchart symbols and their meanings.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Flowchart symbols", statement: "Standard symbols." }],
              steps: [
                { reasoning: "Three valid symbols (e.g. diamond=decision, rectangle=process).", marks: 1, markCode: "M" },
                { reasoning: "All correctly named.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Three flowchart symbols",
            },
          },
          {
            id: "ciealc-u3-al-q3", difficulty: "core", totalMarks: 3,
            stem: "What is decomposition and why is it useful?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Decomposition", statement: "Break into sub-problems." }],
              steps: [
                { reasoning: "Decomposition = breaking into smaller parts.", marks: 1, markCode: "M" },
                { reasoning: "Makes complex problems manageable.", marks: 1, markCode: "M" },
                { reasoning: "Enables testing and reuse.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Break into sub-problems",
            },
          },
          {
            id: "ciealc-u3-al-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define algorithm, flowchart, pseudocode, decomposition, abstraction, dry run. (b) What do these symbols mean: oval, rectangle, diamond, parallelogram? (c) Write pseudocode for 'output 'Hello' three times'. (d) Decompose 'sort a list' into sub-problems. (e) Why use pseudocode over code? (f) What is abstraction? (g) Dry-run: n=3, find factorial. (h) Design flowchart for 'is number even?'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Algorithms", statement: "Design, representation, decomposition." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Correct symbol meanings.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid pseudocode for 3 outputs.", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid decomposition.", marks: 1, markCode: "M" },
                { reasoning: "(e) Language-independent, clearer logic.", marks: 1, markCode: "M" },
                { reasoning: "(f) Focus on essentials, hide details.", marks: 1, markCode: "M" },
                { reasoning: "(g) Correct dry-run trace.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid flowchart design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Algorithm design and representation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u3-al-notes", title: "Algorithms — notes",
      summary: "Algorithms=step-by-step solutions; flowcharts/pseudocode represent them; decompose complex problems.",
      sections: [
        { heading: "Key idea", body: "Good algorithms are precise, efficient and testable." },
        { heading: "Flowcharts", body: "Standard symbols enable universal understanding." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson142",
    lesson: {
      id: "ciealc-u3-lesson-3-2", code: "3-2",
      title: "Searching and Sorting Algorithms",
      goal: "I CAN describe linear/binary search and bubble/selection/merge sort, and analyse complexity.",
      standards: ["Cambridge A Level Computer Science 9618: algorithms", "9618: searching/sorting"],
      vocabulary: [
        { term: "Linear search", definition: "Check each item in turn until found." },
        { term: "Binary search", definition: "Divide sorted list in half, eliminate half each step." },
        { term: "Bubble sort", definition: "Compare adjacent pairs, swap if out of order." },
        { term: "Selection sort", definition: "Find minimum, place at front, repeat." },
        { term: "Merge sort", definition: "Divide list in half, sort each, merge." },
        { term: "Complexity", definition: "Time/space efficiency measure — O(n), O(n²), O(n log n)." },
      ],
      concept: {
        id: "ciealc-u3-s2-search", title: "Searching and sorting",
        skill: "Describe and analyse search/sort algorithms.",
        sections: [
          { heading: "Searching", body: "Linear: O(n) — check each item. Binary: O(log n) — requires sorted list, halve each step. Binary much faster for large sorted data." },
          { heading: "Sorting", body: "Bubble: O(n²) — simple but slow. Selection: O(n²) — finds minimum each pass. Merge: O(n log n) — divide and conquer, efficient but needs memory. Choose based on data size and requirements." },
        ],
        keyFormulas: [
          { name: "Linear", statement: "O(n)" },
          { name: "Binary", statement: "O(log n) — sorted only" },
          { name: "Bubble/selection", statement: "O(n²)" },
          { name: "Merge", statement: "O(n log n)" },
        ],
        workedExample: {
          problem: "Sort [5,2,8,1] using bubble sort — show passes.",
          solution: "Pass1: [2,5,1,8]→[2,1,5,8]→[2,1,5,8]. Pass2: [1,2,5,8]. Pass3: no swaps—done. Sorted: [1,2,5,8].",
        },
        questions: [
          {
            id: "ciealc-u3-ss-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is linear search?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Check each item in turn until found" }, { id: "b", text: "Halve the list each step" }, { id: "c", text: "Sort the list first" }, { id: "d", text: "Use a hash table" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Linear search", statement: "Sequential check." }],
              steps: [{ reasoning: "Linear search checks items one by one.", marks: 1, markCode: "M" }],
              finalAnswer: "Check each item in turn",
            },
          },
          {
            id: "ciealc-u3-ss-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Why does binary search require sorted data?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Binary search", statement: "Requires sorting." }],
              steps: [
                { reasoning: "Binary search eliminates half based on comparison.", marks: 1, markCode: "M" },
                { reasoning: "Requires sorted order to know which half to discard.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Needs sorted data to eliminate halves",
            },
          },
          {
            id: "ciealc-u3-ss-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare bubble sort and merge sort in terms of complexity and efficiency.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Sorting comparison", statement: "Complexity analysis." }],
              steps: [
                { reasoning: "Bubble O(n²) — simple but slow.", marks: 1, markCode: "M" },
                { reasoning: "Merge O(n log n) — faster for large data.", marks: 1, markCode: "M" },
                { reasoning: "Merge needs more memory.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "O(n²) vs O(n log n)",
            },
          },
          {
            id: "ciealc-u3-ss-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define linear search, binary search, bubble sort, selection sort, merge sort, complexity. (b) What's the complexity of linear search? (c) What's the complexity of binary search? (d) What's the complexity of bubble sort? (e) Why is binary search faster? (f) Sort [3,7,1] using bubble sort — show passes. (g) When would you choose selection over bubble? (h) Design a search strategy for a library catalogue.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Search/sort", statement: "Algorithms and complexity." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) O(n).", marks: 1, markCode: "M" },
                { reasoning: "(c) O(log n).", marks: 1, markCode: "M" },
                { reasoning: "(d) O(n²).", marks: 1, markCode: "M" },
                { reasoning: "(e) Halves search space each step.", marks: 1, markCode: "M" },
                { reasoning: "(f) Correct bubble sort trace.", marks: 1, markCode: "M" },
                { reasoning: "(g) Fewer swaps; more efficient for some data.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid search strategy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Search and sort algorithms.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u3-ss-notes", title: "Search/sort — notes",
      summary: "Linear=O(n), binary=O(log n), bubble/selection=O(n²), merge=O(n log n). Choose by data size.",
      sections: [
        { heading: "Key idea", body: "Complexity notation measures efficiency — critical for large datasets." },
        { heading: "Binary search", body: "Requires sorted data — worth sorting upfront for repeated searches." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson143",
    lesson: {
      id: "ciealc-u3-lesson-3-3", code: "3-3",
      title: "Object-Oriented Programming Concepts",
      goal: "I CAN explain classes, objects, attributes, methods, inheritance and polymorphism.",
      standards: ["Cambridge A Level Computer Science 9618: programming", "9618: OOP"],
      vocabulary: [
        { term: "Class", definition: "Blueprint/template defining object properties and methods." },
        { term: "Object", definition: "Instance of a class with its own data." },
        { term: "Attribute", definition: "Data stored in an object." },
        { term: "Method", definition: "Function defined within a class." },
        { term: "Inheritance", definition: "Subclass inherits properties/methods from superclass." },
        { term: "Polymorphism", definition: "Same interface, different implementations." },
      ],
      concept: {
        id: "ciealc-u3-s3-oop", title: "OOP concepts",
        skill: "Explain OOP principles at A Level.",
        sections: [
          { heading: "Core concepts", body: "Class=blueprint; Object=instance. Attributes=data; Methods=functions. Encapsulation=hiding internal state. Inheritance=child class gets parent's properties. Polymorphism=same method name, different behaviour." },
          { heading: "Why OOP?", body: "Modularity: reuse code via classes. Maintainability: change one class, affects all objects. Abstraction: hide complexity. Suitable for large, complex systems." },
        ],
        keyFormulas: [
          { name: "Class", statement: "blueprint for objects" },
          { name: "Object", statement: "instance of class" },
          { name: "Inheritance", statement: "subclass gets superclass properties" },
        ],
        workedExample: {
          problem: "Design a Vehicle class hierarchy.",
          solution: "class Vehicle {speed, colour} → class Car extends Vehicle {doors} → class ElectricCar extends Car {battery}. Each inherits parent properties.",
        },
        questions: [
          {
            id: "ciealc-u3-oop-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a class in OOP?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Blueprint/template for creating objects" }, { id: "b", text: "A type of variable" }, { id: "c", text: "A loop" }, { id: "d", text: "A file" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Class", statement: "Object blueprint." }],
              steps: [{ reasoning: "Class defines object structure.", marks: 1, markCode: "M" }],
              finalAnswer: "Object blueprint",
            },
          },
          {
            id: "ciealc-u3-oop-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between a class and an object?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Class vs object", statement: "Blueprint vs instance." }],
              steps: [
                { reasoning: "Class=blueprint; object=instance created from class.", marks: 1, markCode: "M" },
                { reasoning: "Many objects can come from one class.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Blueprint vs instance",
            },
          },
          {
            id: "ciealc-u3-oop-q3", difficulty: "core", totalMarks: 3,
            stem: "What is inheritance? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Inheritance", statement: "Subclass gets parent properties." }],
              steps: [
                { reasoning: "Inheritance = subclass inherits superclass properties/methods.", marks: 1, markCode: "M" },
                { reasoning: "e.g. Car inherits from Vehicle.", marks: 1, markCode: "M" },
                { reasoning: "Enables code reuse.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Subclass inherits superclass properties",
            },
          },
          {
            id: "ciealc-u3-oop-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define class, object, attribute, method, inheritance, polymorphism, encapsulation. (b) Give an example of a class. (c) Give an example of an object. (d) What is inheritance? (e) What is polymorphism? (f) What is encapsulation? (g) Why use OOP for large projects? (h) Design a Student class with attributes and methods.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "OOP", statement: "Classes, objects, principles." }],
              steps: [
                { reasoning: "(a) All seven definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid class example.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid object example.", marks: 1, markCode: "M" },
                { reasoning: "(d) Subclass inherits superclass.", marks: 1, markCode: "M" },
                { reasoning: "(e) Same interface, different implementations.", marks: 1, markCode: "M" },
                { reasoning: "(f) Hide internal state.", marks: 1, markCode: "M" },
                { reasoning: "(g) Modularity, reusability, maintainability.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid Student class design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "OOP concepts and design.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u3-oop-notes", title: "OOP — notes",
      summary: "Class=blueprint, object=instance. Attributes=data, methods=functions. Inheritance=reuse; polymorphism=flexibility.",
      sections: [
        { heading: "Key idea", body: "OOP structures code around objects mirroring real-world entities." },
        { heading: "Inheritance", body: "Subclasses extend superclasses — avoids code duplication." },
      ],
    },
  },
  {
    file: "lesson-3-4.ts", exportName: "lesson144",
    lesson: {
      id: "ciealc-u3-lesson-3-4", code: "3-4",
      title: "Programming Constructs: Variables, Control Flow, Functions",
      goal: "I CAN use variables, selection, iteration and functions in programming.",
      standards: ["Cambridge A Level Computer Science 9618: programming", "9618: control structures"],
      vocabulary: [
        { term: "Variable", definition: "Named storage location for data." },
        { term: "Selection", definition: "If/else conditional execution." },
        { term: "Iteration", definition: "Repeating code — for/while loops." },
        { term: "Function", definition: "Reusable block of code with inputs/outputs." },
        { term: "Parameter", definition: "Value passed into a function." },
        { term: "Return value", definition: "Result sent back from a function." },
      ],
      concept: {
        id: "ciealc-u3-s4-ctrl", title: "Programming constructs",
        skill: "Use core programming constructs at A Level.",
        sections: [
          { heading: "Variables and control flow", body: "Variables store data with types (int, float, string, boolean). Selection: IF/ELSE IF/ELSE. Iteration: FOR (known count), WHILE (unknown count), nested loops. BREAK/CONTINUE for loop control." },
          { heading: "Functions", body: "Functions take parameters, return values. Advantages: reusability, modularity, testability. Scope: local variables inside function vs global." },
        ],
        keyFormulas: [
          { name: "Selection", statement: "IF/ELSE IF/ELSE" },
          { name: "Iteration", statement: "FOR (count), WHILE (condition)" },
          { name: "Function", statement: "inputs→process→return" },
        ],
        workedExample: {
          problem: "Write a function to calculate factorial recursively.",
          solution: "FUNCTION factorial(n): IF n <= 1 THEN RETURN 1; ELSE RETURN n * factorial(n-1); ENDIF; ENDFUNCTION.",
        },
        questions: [
          {
            id: "ciealc-u3-ct-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a variable?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Named storage location for data" }, { id: "b", text: "A type of loop" }, { id: "c", text: "A function" }, { id: "d", text: "A file" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Variable", statement: "Named data storage." }],
              steps: [{ reasoning: "Variable stores data with a name.", marks: 1, markCode: "M" }],
              finalAnswer: "Named data storage",
            },
          },
          {
            id: "ciealc-u3-ct-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between FOR and WHILE loops?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "FOR vs WHILE", statement: "Count vs condition." }],
              steps: [
                { reasoning: "FOR=known iteration count; WHILE=condition-based.", marks: 1, markCode: "M" },
                { reasoning: "FOR uses counter; WHILE checks condition.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Count vs condition",
            },
          },
          {
            id: "ciealc-u3-ct-q3", difficulty: "core", totalMarks: 3,
            stem: "Why use functions? Give 3 advantages.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Functions", statement: "Reusable code blocks." }],
              steps: [
                { reasoning: "Reusability — write once, use many times.", marks: 1, markCode: "M" },
                { reasoning: "Modularity — break into manageable parts.", marks: 1, markCode: "M" },
                { reasoning: "Testability — test functions independently.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Reuse, modularity, testability",
            },
          },
          {
            id: "ciealc-u3-ct-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define variable, selection, iteration, function, parameter, return value, local/global scope. (b) What is FOR loop? (c) What is WHILE loop? (d) What is IF/ELSE? (e) Write pseudocode for a function that doubles a number. (f) What is recursion? (g) Why use functions? (h) Write pseudocode for bubble sort.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Programming", statement: "Constructs, functions, loops." }],
              steps: [
                { reasoning: "(a) All seven definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Known-count loop.", marks: 1, markCode: "M" },
                { reasoning: "(c) Condition-based loop.", marks: 1, markCode: "M" },
                { reasoning: "(d) Conditional execution.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid doubling function.", marks: 1, markCode: "M" },
                { reasoning: "(f) Function calls itself.", marks: 1, markCode: "M" },
                { reasoning: "(g) Three advantages.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid bubble sort pseudocode.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Programming constructs and functions.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u3-ct-notes", title: "Constructs — notes",
      summary: "Variables store data; selection=IF/ELSE; iteration=FOR/WHILE; functions=reusable code.",
      sections: [
        { heading: "Key idea", body: "Functions enable modular, testable code — essential for complex programs." },
        { heading: "Loops", body: "FOR for known counts; WHILE for conditions; nested for complex patterns." },
      ],
    },
  },
  {
    file: "lesson-3-5.ts", exportName: "lesson145",
    lesson: {
      id: "ciealc-u3-lesson-3-5", code: "3-5",
      title: "Programming in Practice: Strings, Lists, Files",
      goal: "I CAN manipulate strings and lists and handle file input/output.",
      standards: ["Cambridge A Level Computer Science 9618: programming", "9618: data structures"],
      vocabulary: [
        { term: "String", definition: "Sequence of characters." },
        { term: "List/array", definition: "Ordered collection of elements." },
        { term: "Index", definition: "Position of element in list/string." },
        { term: "Substring", definition: "Portion of a string." },
        { term: "File I/O", definition: "Reading/writing files for persistent data." },
        { term: "Validation", definition: "Checking input meets requirements." },
      ],
      concept: {
        id: "ciealc-u3-s5-prac", title: "Practical programming",
        skill: "Manipulate strings/lists and handle files.",
        sections: [
          { heading: "Strings and lists", body: "Strings: access by index, slicing, concatenation, methods (len, upper, find). Lists: index access, append, insert, remove, sort, iterate. Lists are mutable; strings often immutable." },
          { heading: "File handling", body: "Read: open file → read data → close. Write: open file → write data → close. Always validate input before processing. Exception handling for errors (file not found, bad input)." },
        ],
        keyFormulas: [
          { name: "Index", statement: "0-based position" },
          { name: "String ops", statement: "concat, slice, len, find" },
          { name: "List ops", statement: "append, insert, remove, sort" },
        ],
        workedExample: {
          problem: "Write pseudocode to count vowels in a string.",
          solution: "count = 0; FOR i = 0 TO len(str)-1 DO IF str[i] IN 'aeiou' THEN count = count + 1; ENDIF; ENDFOR; OUTPUT count.",
        },
        questions: [
          {
            id: "ciealc-u3-pr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a string?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Sequence of characters" }, { id: "b", text: "A number" }, { id: "c", text: "A list of numbers" }, { id: "d", text: "A file" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "String", statement: "Character sequence." }],
              steps: [{ reasoning: "String = sequence of characters.", marks: 1, markCode: "M" }],
              finalAnswer: "Character sequence",
            },
          },
          {
            id: "ciealc-u3-pr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a list/array?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "List", statement: "Ordered collection." }],
              steps: [
                { reasoning: "List = ordered collection of elements.", marks: 1, markCode: "M" },
                { reasoning: "Accessed by index.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Ordered element collection",
            },
          },
          {
            id: "ciealc-u3-pr-q3", difficulty: "core", totalMarks: 3,
            stem: "What is file I/O and why is it important?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "File I/O", statement: "Read/write files." }],
              steps: [
                { reasoning: "File I/O = reading/writing data to files.", marks: 1, markCode: "M" },
                { reasoning: "Enables persistent data storage.", marks: 1, markCode: "M" },
                { reasoning: "Data survives program termination.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Persistent file storage",
            },
          },
          {
            id: "ciealc-u3-pr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define string, list, index, substring, file I/O, validation. (b) What is string indexing? (c) What is list indexing? (d) What is string concatenation? (e) Write pseudocode to reverse a string. (f) What is validation? (g) What happens if file doesn't exist? (h) Write pseudocode to save user data to a file.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Practical programming", statement: "Strings, lists, files." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Access char by position.", marks: 1, markCode: "M" },
                { reasoning: "(c) Access element by position.", marks: 1, markCode: "M" },
                { reasoning: "(d) Joining strings with +.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid reverse string pseudocode.", marks: 1, markCode: "M" },
                { reasoning: "(f) Checking input requirements.", marks: 1, markCode: "M" },
                { reasoning: "(g) Exception/error handling needed.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid file write pseudocode.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Strings, lists and file handling.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u3-pr-notes", title: "Practical programming — notes",
      summary: "Strings=char sequences; lists=ordered collections; files= persistent storage. Validate input, handle exceptions.",
      sections: [
        { heading: "Key idea", body: "Always validate input and handle file errors gracefully." },
        { heading: "Strings vs lists", body: "Strings immutable (often); lists mutable — different operations." },
      ],
    },
  },
];
