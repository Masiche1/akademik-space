module.exports = [
  {
    file: "lesson-1-10.ts", exportName: "lesson110",
    lesson: {
      id: "cipc-u1-lesson-1-10", code: "1-10",
      title: "Stage 3 — Computer Systems: Hardware and Software",
      goal: "I CAN describe the main parts of a computer system and explain hardware vs software.",
      standards: ["Cambridge Primary Computing 0059 Stage 3: computer systems", "Cambridge Primary Computing 0059 framework strands: Computer systems"],
      stage: 3,
      vocabulary: [
        { term: "Hardware", definition: "The physical parts of a computer you can touch." },
        { term: "Software", definition: "The programs and apps that run on hardware." },
        { term: "CPU", definition: "The processor — the 'brain' that follows instructions." },
        { term: "Memory", definition: "Storage that holds data and programs while running." },
        { term: "Input device", definition: "Hardware that sends data in — keyboard, mouse." },
        { term: "Output device", definition: "Hardware that shows results — screen, printer." },
      ],
      concept: {
        id: "cipc-u1-s3-systems", title: "Hardware, software and system parts",
        skill: "Identify hardware/software components and their jobs at Stage 3 level.",
        sections: [
          { heading: "Hardware and software", body: "Hardware is the physical machine — screen, keyboard, processor. Software is the programs — apps, games, the operating system. Hardware without software does nothing; software needs hardware to run." },
          { heading: "Inside the system", body: "The CPU (central processing unit) is the brain — it follows instructions fast. Memory (RAM) holds the programs and data currently in use. Input devices (keyboard, mouse, touchscreen) send data in; output devices (screen, speakers, printer) show results." },
        ],
        keyFormulas: [
          { name: "Hardware", statement: "physical parts you can touch" },
          { name: "Software", statement: "programs/apps that run" },
          { name: "CPU/memory", statement: "brain that processes / workspace holding data" },
        ],
        workedExample: {
          problem: "Is a keyboard hardware or software? Is the photo app hardware or software?",
          solution: "Keyboard = hardware (physical). Photo app = software (program). The app needs the keyboard? No — the app needs the screen/CPU to display; keyboard is just an input.",
        },
        questions: [
          {
            id: "cipc-u1-hw-q1", difficulty: "foundation", totalMarks: 1,
            stem: "Which is hardware?",
            response: { type: "mcq", choices: [
              { id: "a", text: "The screen" }, { id: "b", text: "A photo app" }, { id: "c", text: "A game program" }, { id: "d", text: "An operating system" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Hardware", statement: "Physical parts." }],
              steps: [{ reasoning: "Screen is physical; apps and OS are software.", marks: 1, markCode: "M" }],
              finalAnswer: "The screen",
            },
          },
          {
            id: "cipc-u1-hw-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name the 'brain' of the computer and one input device.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "CPU and inputs", statement: "Processor + input hardware." }],
              steps: [
                { reasoning: "CPU/processor.", marks: 1, markCode: "M" },
                { reasoning: "Keyboard/mouse/touchscreen.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "CPU; e.g. keyboard",
            },
          },
          {
            id: "cipc-u1-hw-q3", difficulty: "core", totalMarks: 3,
            stem: "Explain why hardware alone cannot do useful work, and what role memory plays.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Systems", statement: "Hardware+software+memory roles." }],
              steps: [
                { reasoning: "Hardware needs software/programs to give instructions.", marks: 1, markCode: "M" },
                { reasoning: "Memory holds programs/data while in use.", marks: 1, markCode: "M" },
                { reasoning: "CPU processes instructions using that data.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Needs software; memory holds active data",
            },
          },
          {
            id: "cipc-u1-hw-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define hardware and software with examples. (b) What is the CPU and what does it do? (c) What is memory used for? (d) Name two input and two output devices. (e) Is a printer input or output? Explain. (f) Why does software need hardware? (g) What does the operating system do? (h) Sort these: mouse, game, keyboard, spreadsheet app, screen, OS.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Computer systems", statement: "Hw/sw, CPU, memory, devices, OS." }],
              steps: [
                { reasoning: "(a) Hardware=physical (screen); software=programs (app).", marks: 1, markCode: "M" },
                { reasoning: "(b) Brain; follows/processes instructions.", marks: 1, markCode: "M" },
                { reasoning: "(c) Holds data/programs in use.", marks: 1, markCode: "M" },
                { reasoning: "(d) Inputs: keyboard/mouse; outputs: screen/printer.", marks: 1, markCode: "M" },
                { reasoning: "(e) Output — produces paper copy.", marks: 1, markCode: "M" },
                { reasoning: "(f) Software needs hardware to run on.", marks: 1, markCode: "M" },
                { reasoning: "(g) Manages hardware and runs other software.", marks: 1, markCode: "M" },
                { reasoning: "(h) Hardware: mouse, keyboard, screen; software: game, spreadsheet, OS.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Hw/sw, CPU, memory, devices, OS, sorting exercise.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-hw-notes", title: "Hardware and software — notes",
      summary: "Hardware = physical; software = programs. CPU processes, memory holds data, OS manages everything.",
      sections: [
        { heading: "Key idea", body: "Hardware without software is useless; software needs hardware to run." },
        { heading: "Devices", body: "Inputs send data in (keyboard); outputs show results (screen, printer)." },
      ],
    },
  },
  {
    file: "lesson-1-11.ts", exportName: "lesson111",
    lesson: {
      id: "cipc-u1-lesson-1-11", code: "1-11",
      title: "Stage 3 — Being Safe and Responsible Online",
      goal: "I CAN describe how to stay safe online and protect personal information.",
      standards: ["Cambridge Primary Computing 0059 Stage 3: digital literacy", "Cambridge Primary Computing 0059 framework strands: Networks and digital communication"],
      stage: 3,
      vocabulary: [
        { term: "E-safety", definition: "Staying safe when using the internet and devices." },
        { term: "Personal information", definition: "Private details — name, address, school, passwords." },
        { term: "Password", definition: "A secret code that protects your accounts." },
        { term: "Stranger", definition: "Someone you don't know — be careful online." },
        { term: "Cyberbullying", definition: "Being mean or hurtful to someone online." },
        { term: "Tell a trusted adult", definition: "Report anything online that worries or scares you." },
      ],
      concept: {
        id: "cipc-u1-s3-safe", title: "Online safety basics",
        skill: "Apply e-safety rules to protect personal information at Stage 3 level.",
        sections: [
          { heading: "Protecting information", body: "Never share personal information online — full name, address, school, phone number, passwords. Use strong passwords mixing letters, numbers and symbols, and never share them. Keep devices locked with a PIN." },
          { heading: "Safe behaviour", body: "Don't talk to strangers online or arrange to meet people you only know digitally. If something online makes you worried, upset or confused — stop and tell a trusted adult. Never post or share anything mean to others." },
        ],
        keyFormulas: [
          { name: "Never share", statement: "personal info, passwords, photos" },
          { name: "Tell an adult", statement: "anything worrying online" },
        ],
        workedExample: {
          problem: "A game asks for your full name and school to 'win a prize'. What should you do?",
          solution: "Don't enter it — that's personal information. Real prizes don't need private details. Close it and tell a trusted adult.",
        },
        questions: [
          {
            id: "cipc-u1-es-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is e-safety?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Staying safe when using the internet and devices" }, { id: "b", text: "A type of computer game" }, { id: "c", text: "A password manager" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "E-safety", statement: "Online safety." }],
              steps: [{ reasoning: "E-safety = safe internet/device use.", marks: 1, markCode: "M" }],
              finalAnswer: "Staying safe online",
            },
          },
          {
            id: "cipc-u1-es-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two things you should never share online.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Personal information", statement: "Private details." }],
              steps: [
                { reasoning: "e.g. full name, address, school, passwords.", marks: 1, markCode: "M" },
                { reasoning: "Second valid private item.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. address and passwords",
            },
          },
          {
            id: "cipc-u1-es-q3", difficulty: "core", totalMarks: 3,
            stem: "Explain why passwords should be strong and never shared, and what to do if a stranger messages you online.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "E-safety", statement: "Passwords and strangers." }],
              steps: [
                { reasoning: "Strong passwords harder to guess; sharing lets others access accounts.", marks: 1, markCode: "M" },
                { reasoning: "Don't reply to strangers; don't share info.", marks: 1, markCode: "M" },
                { reasoning: "Tell a trusted adult immediately.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Passwords protect accounts; ignore strangers, tell adult",
            },
          },
          {
            id: "cipc-u1-es-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define e-safety. (b) List three types of personal information to protect. (c) What makes a password strong? (d) Why never share passwords? (e) What should you do if someone online asks to meet you? (f) What is cyberbullying and how should you respond? (g) Why tell a trusted adult about worrying content? (h) Give two good e-safety habits.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "E-safety", statement: "Info protection, passwords, strangers, bullying." }],
              steps: [
                { reasoning: "(a) Safe internet/device use.", marks: 1, markCode: "M" },
                { reasoning: "(b) Name, address, school/phone/passwords.", marks: 1, markCode: "M" },
                { reasoning: "(c) Letters+numbers+symbols, not guessable.", marks: 1, markCode: "M" },
                { reasoning: "(d) Sharing lets others access your accounts.", marks: 1, markCode: "M" },
                { reasoning: "(e) Refuse; never meet online strangers; tell adult.", marks: 1, markCode: "M" },
                { reasoning: "(f) Online meanness; don't respond, save evidence, tell adult.", marks: 1, markCode: "M" },
                { reasoning: "(g) Adults can help/block/report; you're not alone.", marks: 1, markCode: "M" },
                { reasoning: "(h) Two habits: lock devices, think before posting.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "E-safety rules: info, passwords, strangers, cyberbullying, trusted adults.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-es-notes", title: "Online safety — notes",
      summary: "Never share personal info or passwords. Ignore strangers; tell a trusted adult about anything worrying.",
      sections: [
        { heading: "Key idea", body: "Once posted online, information can be hard to take back." },
        { heading: "Rule", body: "Worried or unsure online? Stop and tell a trusted adult." },
      ],
    },
  },
  {
    file: "lesson-1-12.ts", exportName: "lesson112",
    lesson: {
      id: "cipc-u1-lesson-1-12", code: "1-12",
      title: "Stage 3 — Debugging and Testing Programs",
      goal: "I CAN test programs systematically, find errors and fix them.",
      standards: ["Cambridge Primary Computing 0059 Stage 3: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
      stage: 3,
      vocabulary: [
        { term: "Test", definition: "Running a program to check it works correctly." },
        { term: "Bug", definition: "An error or mistake in a program." },
        { term: "Debug", definition: "Finding and fixing bugs." },
        { term: "Test case", definition: "A specific input used to check a program." },
        { term: "Expected result", definition: "What the program should output if correct." },
        { term: "Actual result", definition: "What the program really outputs." },
      ],
      concept: {
        id: "cipc-u1-s3-debug", title: "Testing and debugging",
        skill: "Plan tests, identify bugs and fix programs at Stage 3 level.",
        sections: [
          { heading: "Why test?", body: "Programs rarely work perfectly first time. Testing means running the program with different inputs and checking the output matches what you expected. Comparing expected vs actual results reveals bugs." },
          { heading: "Debugging systematically", body: "When a bug appears: check the logic step by step, look for typos or wrong blocks, test one change at a time. Fixing one bug may reveal another — keep testing until all cases pass." },
        ],
        keyFormulas: [
          { name: "Test", statement: "input → run → compare expected vs actual" },
          { name: "Debug", statement: "find bug → fix → retest" },
        ],
        workedExample: {
          problem: "A 'add two numbers' program outputs 7 for inputs 3 and 4. What should you check first?",
          solution: "Check the maths block — it may be subtracting instead of adding, or reading inputs in wrong order. Test with 10 and 5 to confirm.",
        },
        questions: [
          {
            id: "cipc-u1-db-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a bug?",
            response: { type: "mcq", choices: [
              { id: "a", text: "An error in a program" }, { id: "b", text: "A fast computer" }, { id: "c", text: "A type of file" }, { id: "d", text: "A network device" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Bug", statement: "Program error." }],
              steps: [{ reasoning: "Bug = mistake causing wrong behaviour.", marks: 1, markCode: "M" }],
              finalAnswer: "An error in a program",
            },
          },
          {
            id: "cipc-u1-db-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between expected and actual results when testing?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Testing", statement: "Compare results." }],
              steps: [
                { reasoning: "Expected = what should happen.", marks: 1, markCode: "M" },
                { reasoning: "Actual = what really happens; mismatch reveals bug.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Should vs actually happens",
            },
          },
          {
            id: "cipc-u1-db-q3", difficulty: "core", totalMarks: 3,
            stem: "A program should say 'even' for even numbers but says 'odd' for 4. List three things to check when debugging.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Debugging", statement: "Systematic checks." }],
              steps: [
                { reasoning: "Check the condition uses correct comparison (÷2 remainder).", marks: 1, markCode: "M" },
                { reasoning: "Check IF/ELSE branches aren't swapped.", marks: 1, markCode: "M" },
                { reasoning: "Check input is being read correctly.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Condition, branches, input checks",
            },
          },
          {
            id: "cipc-u1-db-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define bug, test and debug. (b) Why test with different inputs? (c) What is a test case? (d) Program outputs 12 for 3×4 — is it correct? (e) Describe a systematic debugging approach. (f) Why retest after each fix? (g) What is an edge case? (h) Design two test cases for a 'double the number' program.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Testing and debugging", statement: "Definitions, cases, process." }],
              steps: [
                { reasoning: "(a) Bug=error; test=check run; debug=find+fix.", marks: 1, markCode: "M" },
                { reasoning: "(b) Different inputs expose different bugs.", marks: 1, markCode: "M" },
                { reasoning: "(c) Specific input for checking.", marks: 1, markCode: "M" },
                { reasoning: "(d) Yes — 12 is correct for 3×4.", marks: 1, markCode: "M" },
                { reasoning: "(e) Trace logic, check blocks, fix one thing, retest.", marks: 1, markCode: "M" },
                { reasoning: "(f) Fix may break other parts; verify all still work.", marks: 1, markCode: "M" },
                { reasoning: "(g) Unusual/extreme input testing limits.", marks: 1, markCode: "M" },
                { reasoning: "(h) e.g. input 5→10, input 0→0.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Bug/test/debug, test cases, systematic fixes, edge cases.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-db-notes", title: "Debugging — notes",
      summary: "Test = input → compare expected vs actual. Debug = find bug, fix one thing, retest.",
      sections: [
        { heading: "Key idea", body: "Good programmers test early and often with varied inputs." },
        { heading: "Process", body: "Reproduce bug → trace logic → fix → retest everything." },
      ],
    },
  },
  {
    file: "lesson-1-13.ts", exportName: "lesson113",
    lesson: {
      id: "cipc-u1-lesson-1-13", code: "1-13",
      title: "Stage 3 — Variables and Simple Data in Programs",
      goal: "I CAN use variables to store and change values in programs.",
      standards: ["Cambridge Primary Computing 0059 Stage 3: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
      stage: 3,
      vocabulary: [
        { term: "Variable", definition: "A named box that stores a value which can change." },
        { term: "Assign", definition: "To give a variable a value." },
        { term: "Value", definition: "The data stored in a variable — number or text." },
        { term: "Update", definition: "To change a variable's value." },
        { term: "Score", definition: "A common variable tracking points in a game." },
        { term: "Initialise", definition: "To set a variable's starting value." },
      ],
      concept: {
        id: "cipc-u1-s3-var", title: "Variables in programs",
        skill: "Create, assign and update variables at Stage 3 level.",
        sections: [
          { heading: "What is a variable?", body: "A variable is a named storage box for a value that can change. 'score = 0' creates a variable called score holding 0. Later 'change score by 10' updates it to 10. Variables let programs remember and update information." },
          { heading: "Using variables", body: "Always initialise variables before use — set a starting value. Use clear names: 'score' not 'x'. Variables can hold numbers or text. Update them with 'set to' or 'change by' blocks." },
        ],
        keyFormulas: [
          { name: "Variable", statement: "named storage; value can change" },
          { name: "score = 0", statement: "initialise before use" },
        ],
        workedExample: {
          problem: "score = 5, then 'change score by 3'. What is score now? What if you do it twice?",
          solution: "score = 8 after first change; 11 after second. Each 'change by' adds to current value.",
        },
        questions: [
          {
            id: "cipc-u1-vr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a variable?",
            response: { type: "mcq", choices: [
              { id: "a", text: "A named storage that holds a changeable value" }, { id: "b", text: "A type of computer" }, { id: "c", text: "A network cable" }, { id: "d", text: "A screen colour" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Variable", statement: "Named changeable storage." }],
              steps: [{ reasoning: "Variable stores a value that can be updated.", marks: 1, markCode: "M" }],
              finalAnswer: "Named changeable storage",
            },
          },
          {
            id: "cipc-u1-vr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What does 'set score to 10' do? What does 'change score by 5' do after that?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Assign and update", statement: "Set vs change." }],
              steps: [
                { reasoning: "Sets score = 10.", marks: 1, markCode: "M" },
                { reasoning: "Adds 5 → score = 15.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "score=10; then 15",
            },
          },
          {
            id: "cipc-u1-vr-q3", difficulty: "core", totalMarks: 3,
            stem: "Why initialise variables before using them? What happens if 'lives' is never set and the program says 'change lives by -1'?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Initialisation", statement: "Start values needed." }],
              steps: [
                { reasoning: "Variables need a known starting value.", marks: 1, markCode: "M" },
                { reasoning: "Undefined/empty value → error or unpredictable result.", marks: 1, markCode: "M" },
                { reasoning: "Fix: set lives to a starting number first.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Need start value; undefined → error",
            },
          },
          {
            id: "cipc-u1-vr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define variable. (b) What is the difference between 'set' and 'change by'? (c) lives=3; change lives by -1 twice — value? (d) Why use clear variable names? (e) Can variables store text? Give example. (f) What is initialisation? (g) Trace: score=0, change by 10, set to 5 — final score? (h) Design variables for a quiz game (score, question number).",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Variables", statement: "Set/change, tracing, naming, types." }],
              steps: [
                { reasoning: "(a) Named changeable storage.", marks: 1, markCode: "M" },
                { reasoning: "(b) Set=assign value; change by=add/subtract.", marks: 1, markCode: "M" },
                { reasoning: "(c) 3→2→1.", marks: 1, markCode: "M" },
                { reasoning: "(d) Understandable programs.", marks: 1, markCode: "M" },
                { reasoning: "(e) Yes — e.g. name='Sam'.", marks: 1, markCode: "M" },
                { reasoning: "(f) Setting starting value.", marks: 1, markCode: "M" },
                { reasoning: "(g) 5 (set overwrites).", marks: 1, markCode: "M" },
                { reasoning: "(h) score=0, question=1 initialised.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Variables, set vs change, tracing, naming, initialisation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-vr-notes", title: "Variables — notes",
      summary: "Variable = named storage for changeable values. Set starting values; use clear names; 'set' assigns, 'change by' updates.",
      sections: [
        { heading: "Key idea", body: "Variables let programs remember scores, lives, names — anything that changes." },
        { heading: "Tip", body: "Initialise before use; trace each change carefully." },
      ],
    },
  },
];
