module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson11",
    lesson: {
      id: "cils-c-u1-lesson-1-1", code: "1-1",
      title: "Stage 7 — Algorithms and Decomposition",
      goal: "I CAN break problems into precise steps and write algorithms in words and diagrams.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 7: computational thinking", "Cambridge Lower Secondary Computing 0860 strand: Computational thinking"],
      stage: 7,
      vocabulary: [
        { term: "Algorithm", definition: "A precise step-by-step method for solving a problem." },
        { term: "Decomposition", definition: "Breaking a problem into smaller sub-problems." },
        { term: "Abstraction", definition: "Focusing on important details and ignoring irrelevant ones." },
        { term: "Flowchart", definition: "A diagram showing the steps of an algorithm." },
        { term: "Pseudocode", definition: "Plain-language description of an algorithm's steps." },
        { term: "Precision", definition: "Instructions that are unambiguous and complete." },
      ],
      concept: {
        id: "cils-c-u1-s1-algo", title: "Algorithms and decomposition",
        skill: "Decompose problems and express algorithms precisely at Stage 7 level.",
        sections: [
          { heading: "Precise algorithms", body: "An algorithm must be precise — every step clear enough that a computer (or person) could follow it without guessing. 'Get a drink' is vague; 'open fridge, take bottle, close fridge, pour into glass' is precise." },
          { heading: "Decomposition and abstraction", body: "Break big problems into smaller parts — 'make a cake' becomes: gather ingredients, mix, bake, decorate. Abstraction means ignoring irrelevant detail: a recipe doesn't need to describe the oven's wiring." },
        ],
        keyFormulas: [
          { name: "Algorithm", statement: "precise ordered steps" },
          { name: "Decompose", statement: "big problem → sub-problems" },
          { name: "Abstract", statement: "ignore irrelevant detail" },
        ],
        workedExample: {
          problem: "Write a precise algorithm for making a cup of tea. Identify one abstraction you made.",
          solution: "1. Fill kettle, boil. 2. Put tea bag in cup. 3. Pour boiling water. 4. Wait 3 min. 5. Remove bag. Abstraction: ignoring water chemistry/temperature details beyond 'boiling'.",
        },
        questions: [
          {
            id: "cils-c-u1-al-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What makes an algorithm 'precise'?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Steps are clear and unambiguous" }, { id: "b", text: "It's written in code" }, { id: "c", text: "It's very long" }, { id: "d", text: "It uses big words" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Precise algorithm", statement: "Unambiguous steps." }],
              steps: [{ reasoning: "Precision = no guessing needed.", marks: 1, markCode: "M" }],
              finalAnswer: "Clear unambiguous steps",
            },
          },
          {
            id: "cils-c-u1-al-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Decompose 'clean your room' into 4 sub-tasks.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Decomposition", statement: "Sub-task breakdown." }],
              steps: [
                { reasoning: "e.g. collect rubbish, put clothes away.", marks: 1, markCode: "M" },
                { reasoning: "e.g. make bed, organise desk.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. rubbish→clothes→bed→desk",
            },
          },
          {
            id: "cils-c-u1-al-q3", difficulty: "core", totalMarks: 3,
            stem: "What is abstraction? Give an example of an irrelevant detail a road-crossing algorithm would ignore.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Abstraction", statement: "Ignore irrelevant detail." }],
              steps: [
                { reasoning: "Abstraction = focus on key details only.", marks: 1, markCode: "M" },
                { reasoning: "e.g. ignore road material/paint colour; only need 'wait for green'.", marks: 1, markCode: "M" },
                { reasoning: "Simplifies without losing function.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Key details only; e.g. ignore road colour",
            },
          },
          {
            id: "cils-c-u1-al-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define algorithm, decomposition, abstraction, flowchart, pseudocode, precision. (b) Write a 5-step algorithm for brushing teeth precisely. (c) Decompose 'plan a party' into sub-problems. (d) What detail would you abstract away? (e) Draw/describe a flowchart for 'is it raining?'. (f) Write pseudocode for a simple decision. (g) Why must algorithms be precise? (h) Improve this vague algorithm: 'make breakfast'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Algorithms", statement: "Precision, decomposition, abstraction." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 5 precise ordered steps.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid sub-problem breakdown.", marks: 1, markCode: "M" },
                { reasoning: "(d) Irrelevant detail identified.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid decision flowchart.", marks: 1, markCode: "M" },
                { reasoning: "(f) Valid pseudocode.", marks: 1, markCode: "M" },
                { reasoning: "(g) Computers need exact instructions.", marks: 1, markCode: "M" },
                { reasoning: "(h) Improved precise version.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Algorithms, decomposition, abstraction, flowcharts, pseudocode.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u1-al-notes", title: "Algorithms — notes",
      summary: "Precise ordered steps; decompose big problems; abstract irrelevant detail; flowcharts/pseudocode express them.",
      sections: [
        { heading: "Key idea", body: "Computers can't guess — every step must be exact." },
        { heading: "Tools", body: "Flowcharts for visual logic; pseudocode for text." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson12",
    lesson: {
      id: "cils-c-u1-lesson-1-2", code: "1-2",
      title: "Stage 7 — Programming Constructs: Sequence, Selection, Iteration",
      goal: "I CAN identify and use the three core programming constructs in algorithms.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 7: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
      stage: 7,
      vocabulary: [
        { term: "Sequence", definition: "Instructions executed one after another in order." },
        { term: "Selection", definition: "Choosing which instructions run based on a condition." },
        { term: "Iteration", definition: "Repeating instructions — loops." },
        { term: "Construct", definition: "A basic building block of programs." },
        { term: "Conditional", definition: "A decision point in a program." },
        { term: "Loop", definition: "Repeated execution of instructions." },
      ],
      concept: {
        id: "cils-c-u1-s2-constructs", title: "Core programming constructs",
        skill: "Recognise and apply sequence, selection and iteration at Stage 7 level.",
        sections: [
          { heading: "The three constructs", body: "Every program uses three building blocks: sequence (steps in order), selection (IF/ELSE decisions), iteration (loops repeating). Together they can express any algorithm — this is the structured programming theorem." },
          { heading: "Identifying constructs", body: "Read any algorithm and label each part: 'step 1, step 2' = sequence; 'if x then' = selection; 'repeat until' = iteration. Real programs mix all three constantly." },
        ],
        keyFormulas: [
          { name: "Sequence", statement: "ordered steps" },
          { name: "Selection", statement: "IF condition THEN...ELSE..." },
          { name: "Iteration", statement: "REPEAT...UNTIL / WHILE" },
        ],
        workedExample: {
          problem: "Classify: 'REPEAT 5 times: move forward; IF at edge THEN turn left'.",
          solution: "Iteration (repeat 5) containing sequence (move) and selection (IF at edge).",
        },
        questions: [
          {
            id: "cils-c-u1-ct-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What are the three core programming constructs?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Sequence, selection, iteration" }, { id: "b", text: "Input, process, output" }, { id: "c", text: "Variables, functions, loops" }, { id: "d", text: "Hardware, software, data" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Constructs", statement: "Seq/select/iterate." }],
              steps: [{ reasoning: "The three building blocks of all programs.", marks: 1, markCode: "M" }],
              finalAnswer: "Sequence, selection, iteration",
            },
          },
          {
            id: "cils-c-u1-ct-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Label each: 'move forward' / 'IF score > 10 THEN win' / 'REPEAT 3 times: jump'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Constructs", statement: "Identify types." }],
              steps: [
                { reasoning: "move = sequence; IF = selection.", marks: 1, markCode: "M" },
                { reasoning: "REPEAT = iteration.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "seq/select/iterate",
            },
          },
          {
            id: "cils-c-u1-ct-q3", difficulty: "core", totalMarks: 3,
            stem: "Write pseudocode using all three constructs for 'cross the road safely'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Mixed constructs", statement: "All three in one algorithm." }],
              steps: [
                { reasoning: "Sequence: walk to kerb, look.", marks: 1, markCode: "M" },
                { reasoning: "Selection: IF green THEN cross ELSE wait.", marks: 1, markCode: "M" },
                { reasoning: "Iteration: repeat until crossed.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "All three constructs used",
            },
          },
          {
            id: "cils-c-u1-ct-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define sequence, selection, iteration, construct, conditional, loop. (b) Why are these called 'constructs'? (c) Write pseudocode for a number-guessing game using all three. (d) Which construct handles 'choose between options'? (e) Which handles 'do it again'? (f) Can a program work with only sequence? Explain. (g) Identify constructs in: 'FOR each student: IF absent THEN mark'. (h) Design an algorithm needing all three constructs.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Constructs", statement: "Seq/select/iterate theory." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Building blocks every program uses.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid game pseudocode with all three.", marks: 1, markCode: "M" },
                { reasoning: "(d) Selection.", marks: 1, markCode: "M" },
                { reasoning: "(e) Iteration.", marks: 1, markCode: "M" },
                { reasoning: "(f) Only straight-line tasks — no decisions/repeats.", marks: 1, markCode: "M" },
                { reasoning: "(g) Iteration (FOR) + selection (IF).", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid multi-construct algorithm.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Three constructs theory and application.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u1-ct-notes", title: "Constructs — notes",
      summary: "Sequence=order, selection=decisions, iteration=repetition. All programs are built from these three.",
      sections: [
        { heading: "Key idea", body: "Any algorithm = sequences + selections + iterations." },
        { heading: "Identify", body: "Label each part of any algorithm by construct type." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson13",
    lesson: {
      id: "cils-c-u1-lesson-1-3", code: "1-3",
      title: "Stage 7 — Variables and Data Types",
      goal: "I CAN use variables of different data types and apply operators correctly.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 7: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
      stage: 7,
      vocabulary: [
        { term: "Variable", definition: "A named storage location whose value can change." },
        { term: "Data type", definition: "The kind of value: integer, float, string, Boolean." },
        { term: "Integer", definition: "Whole number data type." },
        { term: "Float", definition: "Decimal number data type." },
        { term: "String", definition: "Text data type." },
        { term: "Boolean", definition: "True/false data type." },
      ],
      concept: {
        id: "cils-c-u1-s3-vars", title: "Variables and data types",
        skill: "Choose correct types and use operators at Stage 7 level.",
        sections: [
          { heading: "Data types", body: "Variables hold typed data: integer (42), float (4.2), string ('hello'), Boolean (true/false). Type matters — '5' as string ≠ 5 as integer; adding strings concatenates, adding numbers calculates." },
          { heading: "Operators", body: "Arithmetic: + - × ÷, //, %. Comparison: =, ≠, <, >, ≤, ≥. Logic: AND, OR, NOT. String ops: concatenation (+ or join), length." },
        ],
        keyFormulas: [
          { name: "Types", statement: "integer, float, string, Boolean" },
          { name: "Operators", statement: "arith + comparison + logic" },
        ],
        workedExample: {
          problem: "a=7 (integer), b='7' (string). What is a+b vs b+b?",
          solution: "Depends: if + is arithmetic on a and b-as-number → 14; if b is string, a+b may error or concatenate → '77'. Type determines result.",
        },
        questions: [
          {
            id: "cils-c-u1-vr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "Which is the correct type for 'name = \"Sam\"'?",
            response: { type: "mcq", choices: [
              { id: "a", text: "String" }, { id: "b", text: "Integer" }, { id: "c", text: "Boolean" }, { id: "d", text: "Float" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "String", statement: "Text data." }],
              steps: [{ reasoning: "Quoted text = string type.", marks: 1, markCode: "M" }],
              finalAnswer: "String",
            },
          },
          {
            id: "cils-c-u1-vr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name the four main data types with one example each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Data types", statement: "int/float/string/bool." }],
              steps: [
                { reasoning: "integer 5, float 5.5.", marks: 1, markCode: "M" },
                { reasoning: "string 'hi', Boolean true.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "int/float/string/Boolean",
            },
          },
          {
            id: "cils-c-u1-vr-q3", difficulty: "core", totalMarks: 3,
            stem: "x=10, y=3. Evaluate: x//y, x%y, x/y, x>y AND y>0.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Operators", statement: "Division variants, logic." }],
              steps: [
                { reasoning: "// = integer division: 3; % = remainder: 1; / = 3.33.", marks: 1, markCode: "M" },
                { reasoning: "10>3 true AND 3>0 true → true.", marks: 1, markCode: "M" },
                { reasoning: "All four evaluated.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "3, 1, 3.33, true",
            },
          },
          {
            id: "cils-c-u1-vr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define variable, data type, integer, float, string, Boolean. (b) Why does type matter? (c) Evaluate with a=8, b=2: a+b, a-b, a*b, a/b, a//b, a%b. (d) What is '5'+'3' if strings? (e) What do AND/OR/NOT do? (f) Write a Boolean expression for 'age >= 13 AND hasID = true'. (g) Convert 7.0 to integer — valid? (h) Design variables for a bank account (balance, name, isActive).",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Variables", statement: "Types, operators, logic." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Wrong type → wrong operation/error.", marks: 1, markCode: "M" },
                { reasoning: "(c) 10,6,16,4,4,0.", marks: 1, markCode: "M" },
                { reasoning: "(d) '53' — concatenation not addition.", marks: 1, markCode: "M" },
                { reasoning: "(e) AND=both true; OR=either; NOT=reverse.", marks: 1, markCode: "M" },
                { reasoning: "(f) Valid Boolean expression.", marks: 1, markCode: "M" },
                { reasoning: "(g) Yes — truncate to 7.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid typed variables.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Data types, operators, Boolean logic.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u1-vr-notes", title: "Variables — notes",
      summary: "Types: integer, float, string, Boolean. Operators: arithmetic, comparison, logic. Type determines behaviour.",
      sections: [
        { heading: "Key idea", body: "'5' string + '3' string = '53', not 8." },
        { heading: "Logic", body: "AND/OR/NOT combine Boolean conditions." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson14",
    lesson: {
      id: "cils-c-u1-lesson-1-4", code: "1-4",
      title: "Stage 8 — Functions and Modular Programming",
      goal: "I CAN design and use functions to organise programs into reusable modules.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
      stage: 8,
      vocabulary: [
        { term: "Function", definition: "A named block of code performing a task, callable with parameters." },
        { term: "Parameter", definition: "Input value passed to a function." },
        { term: "Return value", definition: "Result a function sends back." },
        { term: "Modularity", definition: "Organising code into independent reusable parts." },
        { term: "Scope", definition: "Where a variable is visible/accessible." },
        { term: "Abstraction layer", definition: "Hiding complex details behind a simple interface." },
      ],
      concept: {
        id: "cils-c-u1-s4-func", title: "Functions and modularity",
        skill: "Create parameterised functions and reason about scope at Stage 8 level.",
        sections: [
          { heading: "Functions as modules", body: "Functions package code into reusable units: def area(w,h): return w*h. Parameters customise; return values send results back. Modularity means each function does ONE thing well — easier to test, debug and reuse." },
          { heading: "Scope", body: "Variables inside a function are local — they don't exist outside. This prevents accidental changes: two functions can both have 'x' without conflict. Global variables are visible everywhere — use sparingly." },
        ],
        keyFormulas: [
          { name: "def/call", statement: "function(params): body ... call with args" },
          { name: "Scope", statement: "local inside function; global everywhere" },
        ],
        workedExample: {
          problem: "def double(n): return n*2. What is double(5)? What is double('a')?",
          solution: "10. 'aa'? Depends — if * concatenates strings, 'aa'; if type-checked, error. Type matters.",
        },
        questions: [
          {
            id: "cils-c-u1-fn-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a function parameter?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Input passed to a function when called" }, { id: "b", text: "A type of loop" }, { id: "c", text: "A computer part" }, { id: "d", text: "A file format" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Parameter", statement: "Function input." }],
              steps: [{ reasoning: "Parameters receive values at call time.", marks: 1, markCode: "M" }],
              finalAnswer: "Input to function",
            },
          },
          {
            id: "cils-c-u1-fn-q2", difficulty: "foundation", totalMarks: 2,
            stem: "def greet(name): print('Hi '+name). What does greet('Lee') output? What is the parameter?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Functions", statement: "Calls and parameters." }],
              steps: [
                { reasoning: "Outputs 'Hi Lee'.", marks: 1, markCode: "M" },
                { reasoning: "Parameter = name; argument = 'Lee'.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Hi Lee; param=name",
            },
          },
          {
            id: "cils-c-u1-fn-q3", difficulty: "core", totalMarks: 3,
            stem: "def area(w,h): return w*h. What does area(4,5) return? Why is this better than writing the multiplication twice?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Reuse", statement: "One definition, many calls." }],
              steps: [
                { reasoning: "20.", marks: 1, markCode: "M" },
                { reasoning: "Change once → all calls update; less duplication.", marks: 1, markCode: "M" },
                { reasoning: "Easier to test and maintain.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "20; reuse benefits",
            },
          },
          {
            id: "cils-c-u1-fn-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define function, parameter, return value, modularity, scope, abstraction layer. (b) Write def cube(n). (c) What does cube(3) return? (d) What is local vs global scope? (e) Why use functions instead of repeating code? (f) Write def is_even(n) returning Boolean. (g) Can a function call another function? (h) Design a function set for a quiz game.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Functions", statement: "Params, returns, scope, reuse." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) def cube(n): return n*n*n.", marks: 1, markCode: "M" },
                { reasoning: "(c) 27.", marks: 1, markCode: "M" },
                { reasoning: "(d) Local=inside only; global=everywhere.", marks: 1, markCode: "M" },
                { reasoning: "(e) DRY, easier fixes, consistency.", marks: 1, markCode: "M" },
                { reasoning: "(f) def is_even(n): return n%2==0.", marks: 1, markCode: "M" },
                { reasoning: "(g) Yes — composition.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid function set.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Functions, parameters, scope, modularity.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u1-fn-notes", title: "Functions — notes",
      summary: "Functions package reusable code. Parameters customise; returns send results; local scope protects variables.",
      sections: [
        { heading: "Key idea", body: "Modularity = one job per function, easy to test and reuse." },
        { heading: "Scope", body: "Local variables stay inside functions — safe from outside changes." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson15",
    lesson: {
      id: "cils-c-u1-lesson-1-5", code: "1-5",
      title: "Stage 8 — Debugging and Systematic Testing",
      goal: "I CAN test programs systematically, identify bugs and apply debugging strategies.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
      stage: 8,
      vocabulary: [
        { term: "Test plan", definition: "A list of cases a program will be checked against." },
        { term: "Edge case", definition: "Unusual input testing limits — 0, negative, max value." },
        { term: "Trace table", definition: "A table tracking variable values step by step." },
        { term: "Logic error", definition: "Bug where program runs but gives wrong results." },
        { term: "Syntax error", definition: "Code that won't run — wrong commands/format." },
        { term: "Dry run", definition: "Stepping through code mentally or on paper." },
      ],
      concept: {
        id: "cils-c-u1-s5-debug", title: "Testing and debugging",
        skill: "Plan tests, trace execution and fix bugs at Stage 8 level.",
        sections: [
          { heading: "Test planning", body: "Good testing needs a plan: normal cases, edge cases (0, negative, huge numbers), and boundary values. Write expected outputs before running — then compare. A program that only works for 'nice' inputs isn't finished." },
          { heading: "Debugging strategies", body: "Syntax errors stop the program — read the error message. Logic errors run but compute wrong — use a trace table to follow variable values step by step. Isolate the bug: comment out sections, test functions individually." },
        ],
        keyFormulas: [
          { name: "Test plan", statement: "normal + edge + boundary cases" },
          { name: "Trace table", statement: "track variables step by step" },
        ],
        workedExample: {
          problem: "Program returns wrong average. Trace: total=0, count=0, for each: total+=x, count+=1, avg=total/count. Input: 4,8. What's wrong?",
          solution: "If loop skipped or count not incremented, avg wrong. Check loop runs and count updates — trace table shows count=2 needed.",
        },
        questions: [
          {
            id: "cils-c-u1-dg-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an edge case?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Unusual input testing program limits" }, { id: "b", text: "A fast computer" }, { id: "c", text: "A type of bug" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Edge case", statement: "Boundary testing." }],
              steps: [{ reasoning: "Edge cases test extremes: 0, negative, max.", marks: 1, markCode: "M" }],
              finalAnswer: "Boundary input test",
            },
          },
          {
            id: "cils-c-u1-dg-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between a syntax error and a logic error?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Error types", statement: "Won't run vs wrong result." }],
              steps: [
                { reasoning: "Syntax = code won't run; logic = runs but wrong.", marks: 1, markCode: "M" },
                { reasoning: "Example for each.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Run-fail vs wrong-result",
            },
          },
          {
            id: "cils-c-u1-dg-q3", difficulty: "core", totalMarks: 3,
            stem: "A program computing 'multiply by 2' returns correct results except for input 0 (returns 1). How do you debug this?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Debugging", statement: "Isolate and trace." }],
              steps: [
                { reasoning: "Edge case reveals bug — 0 special.", marks: 1, markCode: "M" },
                { reasoning: "Check for IF/initialisation affecting 0.", marks: 1, markCode: "M" },
                { reasoning: "Trace with input 0 step by step.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Edge-case bug; trace input 0",
            },
          },
          {
            id: "cils-c-u1-dg-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define test plan, edge case, trace table, logic error, syntax error, dry run. (b) Design a test plan for 'is_adult(age)'. (c) What's an edge case for it? (d) Trace this: x=5; x=x+3; x=x*2 — final x? (e) Program crashes — first thing to check? (f) Program runs but wrong answer — strategy? (g) Why test before and after each fix? (h) Design a trace table for 'sum of 1 to n'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Testing", statement: "Plans, traces, error types." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid test plan with cases.", marks: 1, markCode: "M" },
                { reasoning: "(c) Edge: age=0, 17, 18, 120.", marks: 1, markCode: "M" },
                { reasoning: "(d) 16.", marks: 1, markCode: "M" },
                { reasoning: "(e) Error message/syntax first.", marks: 1, markCode: "M" },
                { reasoning: "(f) Trace table, isolate sections.", marks: 1, markCode: "M" },
                { reasoning: "(g) Fix may break other parts.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid trace table.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Testing methodology, tracing, debugging.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u1-dg-notes", title: "Debugging — notes",
      summary: "Test normal + edge cases; trace variables; syntax=won't run, logic=wrong result.",
      sections: [
        { heading: "Key idea", body: "Systematic testing beats guessing — plan cases, trace values." },
        { heading: "Trace table", body: "Track each variable step-by-step to find where it goes wrong." },
      ],
    },
  },
  {
    file: "lesson-1-6.ts", exportName: "lesson16",
    lesson: {
      id: "cils-c-u1-lesson-1-6", code: "1-6",
      title: "Stage 8 — Introduction to Text-Based Programming",
      goal: "I CAN write simple programs in a text language like Python.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
      stage: 8,
      vocabulary: [
        { term: "Syntax", definition: "The rules of a programming language's grammar." },
        { term: "print()", definition: "Python function outputting text." },
        { term: "input()", definition: "Python function reading user input." },
        { term: "Indentation", definition: "Spaces showing code blocks — Python requires it." },
        { term: "Comment", definition: "# notes ignored by the computer." },
        { term: "Error message", definition: "Program's report of what went wrong." },
      ],
      concept: {
        id: "cils-c-u1-s6-python", title: "Text-based programming basics",
        skill: "Write simple Python programs with print, input and comments at Stage 8 level.",
        sections: [
          { heading: "From blocks to text", body: "Text languages like Python write instructions as words and symbols. print('Hello') outputs text; name = input('Name? ') reads input. Indentation (spaces) shows code blocks — Python requires it for IF and loops." },
          { heading: "Reading errors", body: "Syntax errors show line numbers and messages: 'SyntaxError: expected ':'' means missing colon. Read the message, fix the line, rerun. Comments (#) explain code without affecting it." },
        ],
        keyFormulas: [
          { name: "print()", statement: "output text" },
          { name: "input()", statement: "read user input" },
          { name: "#", statement: "comment" },
        ],
        workedExample: {
          problem: "Write Python: ask name, greet them, say their name has N letters.",
          solution: "name = input('Name? ')\nprint('Hello ' + name)\nprint('You have', len(name), 'letters')",
        },
        questions: [
          {
            id: "cils-c-u1-py-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does print('Hi') do in Python?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Outputs 'Hi' to the screen" }, { id: "b", text: "Saves to a file" }, { id: "c", text: "Asks for input" }, { id: "d", text: "Deletes text" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "print()", statement: "Output function." }],
              steps: [{ reasoning: "print outputs to console.", marks: 1, markCode: "M" }],
              finalAnswer: "Outputs text",
            },
          },
          {
            id: "cils-c-u1-py-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is indentation in Python and why does it matter?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Indentation", statement: "Code blocks." }],
              steps: [
                { reasoning: "Spaces showing which lines belong to a block.", marks: 1, markCode: "M" },
                { reasoning: "Python uses it for IF/loops — wrong indent = error.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Block structure; errors if wrong",
            },
          },
          {
            id: "cils-c-u1-py-q3", difficulty: "core", totalMarks: 3,
            stem: "Write Python to ask for age, then print 'adult' if >=18 else 'minor'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Python basics", statement: "Input + IF/ELSE." }],
              steps: [
                { reasoning: "age = int(input('Age? '))", marks: 1, markCode: "M" },
                { reasoning: "if age >= 18: print('adult') else: print('minor').", marks: 1, markCode: "M" },
                { reasoning: "Correct indentation shown.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Valid Python with input+IF",
            },
          },
          {
            id: "cils-c-u1-py-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define syntax, print(), input(), indentation, comment, error message. (b) Write Python printing your name 3 times. (c) What does # do? (d) Why convert input to int? (e) Write Python: ask 2 numbers, print sum. (f) What error if you forget ':'? (g) How do you fix an error message? (h) Write a comment explaining your code.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Python", statement: "Syntax, I/O, errors." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid repeat loop or 3 prints.", marks: 1, markCode: "M" },
                { reasoning: "(c) Comment — ignored by Python.", marks: 1, markCode: "M" },
                { reasoning: "(d) input gives string; int needed for maths.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid sum program.", marks: 1, markCode: "M" },
                { reasoning: "(f) SyntaxError: expected ':'.", marks: 1, markCode: "M" },
                { reasoning: "(g) Read line number, fix syntax, rerun.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid explanatory comment.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Python basics: print, input, IF, errors.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u1-py-notes", title: "Python basics — notes",
      summary: "print=output, input=read, #=comment, indentation=blocks. Read error messages for line numbers.",
      sections: [
        { heading: "Key idea", body: "Text languages need exact syntax — errors tell you where." },
        { heading: "Tip", body: "Always convert input() to int/float for maths." },
      ],
    },
  },
  {
    file: "lesson-1-7.ts", exportName: "lesson17",
    lesson: {
      id: "cils-c-u1-lesson-1-7", code: "1-7",
      title: "Stage 9 — Advanced Programming: Files, Lists and Logic",
      goal: "I CAN use lists, file handling and complex logic in text-based programs.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
      stage: 9,
      vocabulary: [
        { term: "List", definition: "Ordered collection of items — Python's [ ]." },
        { term: "Index", definition: "Position of an item in a list, starting at 0." },
        { term: "File handling", definition: "Reading/writing data to files." },
        { term: "Iteration over list", definition: "Looping through each item." },
        { term: "Nested condition", definition: "IF inside IF for complex decisions." },
        { term: "Exception", definition: "Error during runtime — e.g. division by zero." },
      ],
      concept: {
        id: "cils-c-u1-s7-adv", title: "Lists, files and complex logic",
        skill: "Use lists, file I/O and nested logic at Stage 9 level.",
        sections: [
          { heading: "Lists", body: "Lists store ordered collections: scores = [85, 92, 78]. Access by index scores[0]=85. Loop through with for s in scores. Lists can hold any type and change size — append adds items." },
          { heading: "Files and exceptions", body: "Files store data permanently: open('data.txt').read(). Exceptions are runtime errors — division by zero crashes. Use try/except to handle them gracefully instead of crashing." },
        ],
        keyFormulas: [
          { name: "list[i]", statement: "index starts at 0" },
          { name: "for x in list", statement: "iterate items" },
          { name: "try/except", statement: "handle runtime errors" },
        ],
        workedExample: {
          problem: "scores=[80,90,70]. Print each score doubled. Then read 'names.txt' and print first name.",
          solution: "for s in scores: print(s*2) → 160,180,140. f=open('names.txt'); print(f.readline()); f.close()",
        },
        questions: [
          {
            id: "cils-c-u1-adv-q1", difficulty: "foundation", totalMarks: 1,
            stem: "In Python, what is scores[0] for scores=[85,92,78]?",
            response: { type: "mcq", choices: [
              { id: "a", text: "85" }, { id: "b", text: "92" }, { id: "c", text: "78" }, { id: "d", text: "Error" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Index", statement: "Starts at 0." }],
              steps: [{ reasoning: "Index 0 = first item = 85.", marks: 1, markCode: "M" }],
              finalAnswer: "85",
            },
          },
          {
            id: "cils-c-u1-adv-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What does 'for s in scores:' do? What does try/except prevent?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Iteration and exceptions", statement: "Loop items; catch errors." }],
              steps: [
                { reasoning: "Iterates each item in list.", marks: 1, markCode: "M" },
                { reasoning: "try/except catches runtime errors gracefully.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Loops items; prevents crashes",
            },
          },
          {
            id: "cils-c-u1-adv-q3", difficulty: "core", totalMarks: 3,
            stem: "Write Python: given list temps=[18,22,25,19], print only temps above 20.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Lists and conditions", statement: "Filter by condition." }],
              steps: [
                { reasoning: "for t in temps: if t > 20: print(t)", marks: 1, markCode: "M" },
                { reasoning: "Outputs 22, 25.", marks: 1, markCode: "M" },
                { reasoning: "Correct indentation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "22 and 25",
            },
          },
          {
            id: "cils-c-u1-adv-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define list, index, file handling, iteration, nested condition, exception. (b) What is scores[-1] for [10,20,30]? (c) How to add item to list? (d) Write Python reading a file and counting lines. (e) What is a runtime exception? (f) Why use try/except? (g) Write nested IF for 'if score>=90 and attendance>90 then grade A'. (h) Design a program storing and analysing exam marks.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Advanced Python", statement: "Lists, files, exceptions." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 30 — negative index from end.", marks: 1, markCode: "M" },
                { reasoning: "(c) append() or + [item].", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid file-reading count program.", marks: 1, markCode: "M" },
                { reasoning: "(e) Error during execution (e.g. ÷0).", marks: 1, markCode: "M" },
                { reasoning: "(f) Prevents crash; handles gracefully.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid nested IF.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid marks-analysis program.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Lists, files, exceptions, complex logic.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u1-adv-notes", title: "Advanced Python — notes",
      summary: "Lists store collections (index 0-based); files persist data; try/except handles runtime errors.",
      sections: [
        { heading: "Key idea", body: "Lists + loops + conditions = powerful data programs." },
        { heading: "Files", body: "open/read/write/close — data survives between runs." },
      ],
    },
  },
  {
    file: "lesson-1-8.ts", exportName: "lesson18",
    lesson: {
      id: "cils-c-u1-lesson-1-8", code: "1-8",
      title: "Stage 9 — Programming Project: Full Lifecycle",
      goal: "I CAN manage a complete programming project from specification to evaluation.",
      standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
      stage: 9,
      vocabulary: [
        { term: "Specification", definition: "Document defining what the program must do." },
        { term: "Design document", definition: "Plan of structure, functions, data." },
        { term: "Version control", definition: "Tracking changes to code over time." },
        { term: "User acceptance", definition: "Program meets the user's actual needs." },
        { term: "Maintenance", definition: "Ongoing fixes and improvements after release." },
        { term: "Technical debt", definition: "Shortcuts that make future changes harder." },
      ],
      concept: {
        id: "cils-c-u1-s8-proj", title: "Programming project lifecycle",
        skill: "Manage spec→design→build→test→deploy→maintain at Stage 9 level.",
        sections: [
          { heading: "The lifecycle", body: "Professional programming: write specification → design architecture → build incrementally → test thoroughly → deploy → maintain and improve. Each stage has deliverables and checkpoints." },
          { heading: "Real-world concerns", body: "Version control tracks changes (Git). Technical debt accumulates from shortcuts. User acceptance testing ensures the program solves the real problem, not just the imagined one." },
        ],
        keyFormulas: [
          { name: "Lifecycle", statement: "spec→design→build→test→deploy→maintain" },
          { name: "Version control", statement: "track and revert code changes" },
        ],
        workedExample: {
          problem: "Your team built a school library app. List the lifecycle stages it went through and one risk at each.",
          solution: "Spec: misunderstood requirements. Design: poor architecture. Build: bugs. Test: missed edge cases. Deploy: downtime. Maintain: technical debt from shortcuts.",
        },
        questions: [
          {
            id: "cils-c-u1-pj-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a program specification?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Document defining what the program must do" }, { id: "b", text: "A type of code" }, { id: "c", text: "A computer part" }, { id: "d", text: "A network device" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Specification", statement: "Requirements document." }],
              steps: [{ reasoning: "Spec defines requirements before coding.", marks: 1, markCode: "M" }],
              finalAnswer: "Requirements document",
            },
          },
          {
            id: "cils-c-u1-pj-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name the stages of the programming lifecycle in order.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Lifecycle", statement: "Development stages." }],
              steps: [
                { reasoning: "Spec→design→build→test→deploy→maintain.", marks: 1, markCode: "M" },
                { reasoning: "Correct order.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "spec→design→build→test→deploy→maintain",
            },
          },
          {
            id: "cils-c-u1-pj-q3", difficulty: "core", totalMarks: 3,
            stem: "What is technical debt and why does it matter? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Technical debt", statement: "Shortcut costs." }],
              steps: [
                { reasoning: "Shortcuts that make future work harder.", marks: 1, markCode: "M" },
                { reasoning: "e.g. copying code instead of function → harder to fix later.", marks: 1, markCode: "M" },
                { reasoning: "Accumulates 'interest' over time.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Future cost of shortcuts",
            },
          },
          {
            id: "cils-c-u1-pj-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define specification, design document, version control, user acceptance, maintenance, technical debt. (b) Describe the lifecycle stages. (c) Why write a spec first? (d) What is version control for? (e) What is user acceptance testing? (f) What is maintenance after release? (g) How do you avoid technical debt? (h) Design a project plan for a 'school club finder' app.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Project lifecycle", statement: "Spec to maintenance." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) All stages in order.", marks: 1, markCode: "M" },
                { reasoning: "(c) Clear target prevents rework.", marks: 1, markCode: "M" },
                { reasoning: "(d) Track changes, revert, collaborate.", marks: 1, markCode: "M" },
                { reasoning: "(e) Users verify it meets real needs.", marks: 1, markCode: "M" },
                { reasoning: "(f) Ongoing fixes/improvements.", marks: 1, markCode: "M" },
                { reasoning: "(g) Write clean code, refactor, document.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid project plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Programming lifecycle and project management.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cils-c-u1-pj-notes", title: "Project lifecycle — notes",
      summary: "Spec→design→build→test→deploy→maintain. Version control tracks changes; avoid technical debt.",
      sections: [
        { heading: "Key idea", body: "Professional software is managed through a full lifecycle." },
        { heading: "Debt", body: "Shortcuts cost more later — write clean code." },
      ],
    },
  },
];
