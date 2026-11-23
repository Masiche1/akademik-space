module.exports = [
  {
    file: "lesson-10-1.ts", exportName: "lesson101",
    lesson: {
      id: "edxbtecit-u10-lesson-10-1", code: "10-1",
      title: "The Software Development Life Cycle",
      goal: "I CAN describe the phases of the SDLC and compare development methodologies and requirements gathering.",
      standards: [
        "Pearson BTEC Level 3 National Information Technology — Specialist unit: Systems Development and Implementation",
        "SDLC phases, methodologies, requirements analysis",
      ],
      vocabulary: [
        { term: "SDLC", definition: "Software Development Life Cycle — structured process for building software." },
        { term: "Feasibility study", definition: "Assessment of whether a project is technically, economically and operationally viable." },
        { term: "Requirements specification", definition: "Document listing what the system must do (functional) and how well (non-functional)." },
        { term: "Waterfall model", definition: "Linear SDLC where each phase must finish before the next begins." },
        { term: "Agile methodology", definition: "Iterative approach delivering working software in short sprints." },
        { term: "Prototype", definition: "Early working model used to gather feedback before full development." },
        { term: "Stakeholder", definition: "Anyone affected by or with an interest in the system." },
      ],
      concepts: [
        {
          id: "edxbtecit-u10-l1-sdlc", title: "SDLC phases",
          skill: "Describe each phase of the software development life cycle and its outputs.",
          sections: [
            { heading: "The phases", body: "**1. Planning/feasibility**: is the project worthwhile? Technical, economic, operational feasibility. **2. Requirements analysis**: gather what users need — functional (features) and non-functional (performance, security) requirements. **3. Design**: architecture, databases, interfaces, algorithms — produces design documents. **4. Implementation/coding**: developers write the program. **5. Testing**: verify it meets requirements and is bug-free. **6. Deployment/implementation**: install and roll out to users. **7. Maintenance**: fix bugs, add features, adapt to change — often the longest phase." },
            { heading: "Why structure matters", body: "A structured SDLC reduces risk, ensures documentation, and makes maintenance possible years later. Skipping phases (e.g. no testing or no requirements) causes costly failures — most software projects fail due to unclear requirements, not bad code.\n\nDeliverables per phase: feasibility report → requirements spec → design docs → source code → test results → deployed system → maintenance logs." },
          ],
          keyFormulas: [
            { name: "SDLC order", statement: "Plan → requirements → design → code → test → deploy → maintain" },
            { name: "Feasibility types", statement: "Technical, economic, operational, legal" },
          ],
          workedExample: {
            problem: "A library wants software to manage loans. List the SDLC phases it would go through.",
            solution: "Feasibility study → gather librarian/user requirements → design database and screens → code → test loan/return scenarios → deploy to library PCs → maintain and update.",
          },
          questions: [
            {
              id: "edxbtecit-u10-l1-sdlc-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which SDLC phase produces the requirements specification?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Implementation" }, { id: "b", text: "Requirements analysis" }, { id: "c", text: "Maintenance" }, { id: "d", text: "Deployment" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Requirements analysis", statement: "Phase producing the requirements specification." }],
                steps: [{ reasoning: "Requirements analysis gathers and documents needs.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Requirements analysis",
              },
            },
            {
              id: "edxbtecit-u10-l1-sdlc-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the first phase of the SDLC and its purpose.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Planning/feasibility", statement: "Assess viability before committing resources." }],
                steps: [
                  { reasoning: "Planning/feasibility study.", marks: 1, markCode: "M" },
                  { reasoning: "Decides if the project is viable (technical/economic/operational).", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Feasibility study — check viability first",
              },
            },
            {
              id: "edxbtecit-u10-l1-sdlc-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why maintenance is often the longest phase of the SDLC.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Maintenance phase", statement: "System lives for years after release." }],
                steps: [
                  { reasoning: "Software is used for years after deployment.", marks: 1, markCode: "M" },
                  { reasoning: "Bugs found in use, requirements change, technology evolves.", marks: 1, markCode: "M" },
                  { reasoning: "Ongoing fixes and enhancements continue throughout its life.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "System used for years → continuous fixes and enhancements",
              },
            },
            {
              id: "edxbtecit-u10-l1-sdlc-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A school skips the testing phase to save time. Explain three likely consequences.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Testing necessity", statement: "Untested software ships defects to users." }],
                steps: [
                  { reasoning: "Undetected bugs reach users — crashes, wrong results.", marks: 1, markCode: "M" },
                  { reasoning: "Errors discovered in production cost far more to fix.", marks: 1, markCode: "M" },
                  { reasoning: "Loss of trust; may need emergency rollback.", marks: 1, markCode: "M" },
                  { reasoning: "Time 'saved' is repaid with rework later.", marks: 1, markCode: "A" },
                  { reasoning: "Link to real-world impact.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Bugs ship to users, costly fixes, lost trust, rework",
              },
            },
            {
              id: "edxbtecit-u10-l1-sdlc-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "List the SDLC phases in order.", marks: 3 },
                { label: "b", prompt: "State the output (deliverable) of the design phase.", marks: 1 },
                { label: "c", prompt: "Name two types of feasibility study.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "SDLC structure", statement: "Phases produce defined deliverables." }],
                steps: [
                  { part: "a", reasoning: "Plan, requirements, design, code, test, deploy, maintain.", marks: 2, markCode: "M" },
                  { part: "a", reasoning: "All seven in correct order.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Design documents (architecture, database, interfaces).", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Technical and economic (or operational/legal).", marks: 2, markCode: "M" },
                ],
                finalAnswer: "7 phases in order; design docs; technical+economic feasibility",
              },
            },
            {
              id: "edxbtecit-u10-l1-sdlc-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define the SDLC. (b) List its phases in order. (c) State the purpose of the feasibility study. (d) What does the requirements analysis phase produce? (e) Explain why testing cannot be skipped. (f) What happens during maintenance?",
              parts: [
                { label: "a", prompt: "Define SDLC.", marks: 1 },
                { label: "b", prompt: "Phases in order.", marks: 3 },
                { label: "c", prompt: "Feasibility purpose.", marks: 1 },
                { label: "d", prompt: "Requirements analysis output.", marks: 1 },
                { label: "e", prompt: "Why testing is essential.", marks: 2 },
                { label: "f", prompt: "Maintenance activities.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "SDLC", statement: "Structured software development process." }],
                steps: [
                  { part: "a", reasoning: "Structured process for planning, building, testing and maintaining software.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Plan, requirements, design, code, test, deploy, maintain.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "All seven correct.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Decides if project is viable before committing resources.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Requirements specification (functional + non-functional).", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Finds defects before users do.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Cheaper than fixing in production.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "Bug fixes, updates, enhancements over system life.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "SDLC phases, feasibility, requirements, testing and maintenance.",
              },
            },
          ],
        },
        {
          id: "edxbtecit-u10-l1-methods", title: "Methodologies and requirements",
          skill: "Compare waterfall and agile methodologies and distinguish functional from non-functional requirements.",
          sections: [
            { heading: "Development methodologies", body: "**Waterfall**: sequential phases, each completed before the next — good for fixed, well-understood requirements; rigid if needs change. **Iterative**: cycles of design-build-test refining the system. **Agile/Scrum**: short sprints (1-4 weeks) delivering working increments; daily stand-ups, backlog prioritisation, client feedback each sprint.\n\n**Prototyping**: build a quick model early to validate ideas. **RAD** (Rapid Application Development) compresses phases for fast delivery." },
            { heading: "Requirements", body: "**Functional requirements**: what the system does — features, inputs, outputs (e.g. 'calculate total price'). **Non-functional**: how well it does it — performance, security, usability, reliability, maintainability (e.g. 'respond in <2 seconds').\n\nGathered via interviews, questionnaires, observation, workshops. **Use cases** describe interactions between actors (users) and the system. Poor requirements are the #1 cause of project failure." },
          ],
          keyFormulas: [
            { name: "Waterfall", statement: "Sequential; rigid; fixed requirements" },
            { name: "Agile", statement: "Iterative sprints; changing requirements OK" },
            { name: "Functional vs non-functional", statement: "What it does vs how well" },
          ],
          workedExample: {
            problem: "Classify: (a) 'user can search the catalogue', (b) 'search returns results within 1 second'.",
            solution: "(a) Functional — describes a feature. (b) Non-functional — describes performance/quality.",
          },
          questions: [
            {
              id: "edxbtecit-u10-l1-methods-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which methodology delivers working software in short sprints with frequent client feedback?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Waterfall" }, { id: "b", text: "Agile" }, { id: "c", text: "Big bang" }, { id: "d", text: "Code and fix" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Agile", statement: "Iterative sprints delivering working increments." }],
                steps: [{ reasoning: "Agile uses short sprints and feedback.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Agile",
              },
            },
            {
              id: "edxbtecit-u10-l1-methods-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Distinguish functional from non-functional requirements.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Requirement types", statement: "What system does vs how well." }],
                steps: [
                  { reasoning: "Functional = features/behaviours the system must have.", marks: 1, markCode: "M" },
                  { reasoning: "Non-functional = quality attributes (speed, security, usability).", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Functional = what; non-functional = how well",
              },
            },
            {
              id: "edxbtecit-u10-l1-methods-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain when the waterfall model is appropriate and when agile is better.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Waterfall vs agile", statement: "Fixed requirements vs changing needs." }],
                steps: [
                  { reasoning: "Waterfall suits fixed, well-understood requirements (e.g. regulatory systems).", marks: 1, markCode: "M" },
                  { reasoning: "Agile suits evolving needs where feedback matters (apps, websites).", marks: 1, markCode: "M" },
                  { reasoning: "Waterfall cannot easily accommodate late changes; agile welcomes them.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Waterfall = fixed requirements; agile = evolving needs",
              },
            },
            {
              id: "edxbtecit-u10-l1-methods-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A startup building a social media app expects requirements to change constantly. Recommend a methodology and justify it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Methodology selection", statement: "Match methodology to requirement stability." }],
                steps: [
                  { reasoning: "Agile recommended — handles changing requirements.", marks: 1, markCode: "M" },
                  { reasoning: "Sprints deliver working increments users can try early.", marks: 1, markCode: "M" },
                  { reasoning: "Frequent feedback prevents building unwanted features.", marks: 1, markCode: "M" },
                  { reasoning: "Justified against waterfall's rigidity.", marks: 1, markCode: "A" },
                  { reasoning: "Linked to startup/social app scenario.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Agile — iterative sprints accommodate changing requirements",
              },
            },
            {
              id: "edxbtecit-u10-l1-methods-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Classify: 'users can reset their password'.", marks: 1 },
                { label: "b", prompt: "Classify: 'the system must handle 500 concurrent users'.", marks: 1 },
                { label: "c", prompt: "State two techniques for gathering requirements.", marks: 2 },
                { label: "d", prompt: "Explain what a use case describes.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Requirements gathering", statement: "Functional/non-functional; interviews, observation, use cases." }],
                steps: [
                  { part: "a", reasoning: "Functional — a feature the system must provide.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Non-functional — performance/scalability.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Interviews, questionnaires, observation, workshops.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Interaction between an actor and the system.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Describes steps to achieve a goal.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Functional vs non-functional; gathering techniques; use case = actor-system interaction",
              },
            },
            {
              id: "edxbtecit-u10-l1-methods-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Compare waterfall and agile methodologies. (b) Define functional and non-functional requirements. (c) Give one example of each. (d) Name two techniques for gathering requirements. (e) Explain why unclear requirements cause project failure. (f) When is prototyping useful?",
              parts: [
                { label: "a", prompt: "Waterfall vs agile.", marks: 3 },
                { label: "b", prompt: "Functional vs non-functional.", marks: 2 },
                { label: "c", prompt: "One example of each.", marks: 1 },
                { label: "d", prompt: "Two gathering techniques.", marks: 1 },
                { label: "e", prompt: "Why unclear requirements fail.", marks: 2 },
                { label: "f", prompt: "When prototyping helps.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Methodologies and requirements", statement: "Approaches and requirement types." }],
                steps: [
                  { part: "a", reasoning: "Waterfall sequential/rigid; agile iterative/flexible.", marks: 2, markCode: "M" },
                  { part: "a", reasoning: "Both contrasted.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Functional = what system does; non-functional = how well.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "E.g. 'login button' (functional); 'loads in 2s' (non-functional).", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Interviews, observation, questionnaires, workshops.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Team builds wrong system — costly rework.", marks: 2, markCode: "M" },
                  { part: "f", reasoning: "To validate ideas early when requirements uncertain.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Methodologies, requirement types, gathering and failure causes.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtecit-u10-n101-notes", title: "Systems dev 10-1 — notes",
      summary: "SDLC = plan→requirements→design→code→test→deploy→maintain; waterfall rigid vs agile iterative; functional=what, non-functional=how well.",
      sections: [
        { heading: "Key idea", body: "Structure reduces risk; skipping phases causes expensive failures." },
        { heading: "Requirements", body: "Unclear requirements are the top cause of project failure." },
        { heading: "Choice", body: "Fixed requirements → waterfall; evolving needs → agile." },
      ],
    },
  },
  {
    file: "lesson-10-2.ts", exportName: "lesson102",
    lesson: {
      id: "edxbtecit-u10-lesson-10-2", code: "10-2",
      title: "Programming Concepts and Testing",
      goal: "I CAN explain core programming constructs and describe testing and debugging techniques.",
      standards: [
        "Pearson BTEC Level 3 National Information Technology — Specialist unit: Systems Development and Implementation",
        "Programming fundamentals, testing and debugging",
      ],
      vocabulary: [
        { term: "Variable", definition: "Named storage location holding a value that can change during execution." },
        { term: "Data type", definition: "Classification of data — integer, real, string, Boolean." },
        { term: "Selection", definition: "Program structure choosing between paths using IF/ELSE conditions." },
        { term: "Iteration", definition: "Program structure repeating actions — loops (FOR, WHILE)." },
        { term: "Algorithm", definition: "Step-by-step procedure for solving a problem." },
        { term: "Bug", definition: "Defect in a program causing incorrect behaviour." },
        { term: "Dry run", definition: "Manually tracing algorithm execution to find errors." },
      ],
      concepts: [
        {
          id: "edxbtecit-u10-l2-programming", title: "Programming constructs",
          skill: "Explain variables, data types, selection, iteration and basic algorithm design.",
          sections: [
            { heading: "Variables and data types", body: "**Variables** store values that change during execution: `total = 0`. **Data types**: integer (whole numbers), real/float (decimals), string (text), Boolean (TRUE/FALSE). Choosing the right type prevents errors and saves memory.\n\n**Constants** hold fixed values (e.g. PI = 3.14159). **Operators**: arithmetic (+, −, ×, ÷), comparison (=, ≠, <, >), logical (AND, OR, NOT)." },
            { heading: "Selection and iteration", body: "**Selection** (IF/ELSE): executes different code paths based on conditions — `IF score >= 50 THEN pass ELSE fail`. **Iteration**: loops repeat actions — **FOR** (known number of times), **WHILE** (until condition false). Nested structures combine both.\n\n**Algorithms**: precise step-by-step procedures — flowcharts, pseudocode. Must be unambiguous, finite, and have clear input/output. Decomposition breaks problems into sub-problems." },
          ],
          keyFormulas: [
            { name: "Selection", statement: "IF condition THEN action ELSE alternative" },
            { name: "Iteration", statement: "FOR n times / WHILE condition do action" },
            { name: "Data types", statement: "integer, real, string, Boolean" },
          ],
          workedExample: {
            problem: "Write pseudocode to input 10 numbers and output their sum.",
            solution: "total ← 0\nFOR i ← 1 TO 10\n  INPUT number\n  total ← total + number\nNEXT i\nOUTPUT total",
          },
          questions: [
            {
              id: "edxbtecit-u10-l2-programming-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which data type stores TRUE or FALSE?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Integer" }, { id: "b", text: "String" }, { id: "c", text: "Boolean" }, { id: "d", text: "Real" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Boolean", statement: "Data type storing TRUE/FALSE." }],
                steps: [{ reasoning: "Boolean holds logical values.", marks: 1, markCode: "B" }],
                finalAnswer: "**(c)** Boolean",
              },
            },
            {
              id: "edxbtecit-u10-l2-programming-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is the difference between a variable and a constant?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Variable vs constant", statement: "Changeable vs fixed value." }],
                steps: [
                  { reasoning: "Variable value can change during execution.", marks: 1, markCode: "M" },
                  { reasoning: "Constant value stays fixed.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Variable changes; constant fixed",
              },
            },
            {
              id: "edxbtecit-u10-l2-programming-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the difference between selection (IF/ELSE) and iteration (loops).",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Selection vs iteration", statement: "Choose path vs repeat action." }],
                steps: [
                  { reasoning: "Selection chooses between paths based on a condition.", marks: 1, markCode: "M" },
                  { reasoning: "Iteration repeats actions a set number of times or until a condition.", marks: 1, markCode: "M" },
                  { reasoning: "Clear distinction with purpose.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "IF/ELSE selects path; loops repeat",
              },
            },
            {
              id: "edxbtecit-u10-l2-programming-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Write pseudocode to input a student's mark and output 'Pass' if it is 40 or above, otherwise 'Fail'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Pseudocode", statement: "Clear sequential instructions." }],
                steps: [
                  { reasoning: "INPUT mark.", marks: 1, markCode: "M" },
                  { reasoning: "IF mark >= 40 THEN ...", marks: 1, markCode: "M" },
                  { reasoning: "OUTPUT 'Pass' in true branch.", marks: 1, markCode: "M" },
                  { reasoning: "ELSE OUTPUT 'Fail'.", marks: 1, markCode: "A" },
                  { reasoning: "Correct logic and structure.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "INPUT mark; IF mark >= 40 OUTPUT Pass ELSE Fail",
              },
            },
            {
              id: "edxbtecit-u10-l2-programming-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Define variable and data type.", marks: 2 },
                { label: "b", prompt: "Name the four basic data types.", marks: 1 },
                { label: "c", prompt: "Write pseudocode for a loop that outputs numbers 1 to 5.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Programming basics", statement: "Variables, types, loop structure." }],
                steps: [
                  { part: "a", reasoning: "Variable = named storage; data type = data classification.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Integer, real, string, Boolean.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "FOR i ← 1 TO 5 ... NEXT i structure.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "OUTPUT i inside loop.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Correct complete pseudocode.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Variable/type defs; 4 types; FOR loop outputs 1-5",
              },
            },
            {
              id: "edxbtecit-u10-l2-programming-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define variable, constant and data type. (b) Name four data types. (c) Explain selection with an example. (d) Explain iteration with an example. (e) What makes a good algorithm? (f) Write pseudocode to find the largest of three input numbers.",
              parts: [
                { label: "a", prompt: "Define variable, constant, data type.", marks: 2 },
                { label: "b", prompt: "Four data types.", marks: 1 },
                { label: "c", prompt: "Selection explanation.", marks: 2 },
                { label: "d", prompt: "Iteration explanation.", marks: 2 },
                { label: "e", prompt: "Good algorithm traits.", marks: 1 },
                { label: "f", prompt: "Pseudocode for largest of three.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Programming constructs", statement: "Variables, types, selection, iteration, algorithms." }],
                steps: [
                  { part: "a", reasoning: "Variable changes; constant fixed; type classifies data.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Integer, real, string, Boolean.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "IF/ELSE chooses path by condition (e.g. pass/fail).", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Loops repeat (FOR count / WHILE condition).", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Unambiguous, finite, clear input/output.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "INPUT a,b,c; IF a>b AND a>c largest=a ... correct comparisons.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Constructs and pseudocode for max of three.",
              },
            },
          ],
        },
        {
          id: "edxbtecit-u10-l2-testing", title: "Testing and debugging",
          skill: "Describe types of testing, test cases and debugging techniques used in software development.",
          sections: [
            { heading: "Types of testing", body: "**Unit testing**: individual modules/components in isolation. **Integration testing**: modules tested together to check interfaces. **System testing**: whole system against requirements. **Acceptance testing**: users verify it meets their needs — alpha (developers' site) and beta (real users).\n\n**Test cases** document inputs, expected and actual results. **Black-box** testing checks outputs without seeing code; **white-box** examines internal logic. **Regression testing** re-checks after changes." },
            { heading: "Debugging", body: "**Debugging** = finding and fixing defects. Techniques: **dry run** (trace by hand), **trace tables** (track variable values), **breakpoints** (pause execution), **print/logging statements**, **stepping** through code line by line.\n\nA **bug** is the defect; an **error** is the human mistake; a **failure** is when the bug manifests. Prevention: code reviews, version control, testing early and often." },
          ],
          keyFormulas: [
            { name: "Testing levels", statement: "Unit → integration → system → acceptance" },
            { name: "Bug vs error vs failure", statement: "Mistake → defect → manifestation" },
            { name: "Dry run", statement: "Manual trace to find errors" },
          ],
          workedExample: {
            problem: "A program outputs the wrong total. Describe how a developer would debug it.",
            solution: "Dry-run the algorithm with known inputs; use a trace table to track variables; add print statements; check the loop bounds and accumulation line; fix and retest.",
          },
          questions: [
            {
              id: "edxbtecit-u10-l2-testing-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which testing level checks individual modules in isolation?",
              response: { type: "mcq", choices: [
                { id: "a", text: "System testing" }, { id: "b", text: "Unit testing" }, { id: "c", text: "Acceptance testing" }, { id: "d", text: "Regression testing" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Unit testing", statement: "Tests individual components in isolation." }],
                steps: [{ reasoning: "Unit testing = isolated module testing.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Unit testing",
              },
            },
            {
              id: "edxbtecit-u10-l2-testing-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is a dry run?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Dry run", statement: "Manual tracing of algorithm execution." }],
                steps: [
                  { reasoning: "Manually trace through code/algorithm.", marks: 1, markCode: "M" },
                  { reasoning: "To find logical errors before running.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Manual trace of execution to find errors",
              },
            },
            {
              id: "edxbtecit-u10-l2-testing-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the difference between a bug, an error and a failure.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Bug/error/failure", statement: "Mistake → defect → manifestation." }],
                steps: [
                  { reasoning: "Error = human mistake during development.", marks: 1, markCode: "M" },
                  { reasoning: "Bug = defect introduced into the code.", marks: 1, markCode: "M" },
                  { reasoning: "Failure = when the bug causes wrong behaviour.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Error→bug→failure chain",
              },
            },
            {
              id: "edxbtecit-u10-l2-testing-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Describe three debugging techniques a developer could use to locate a bug.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Debugging techniques", statement: "Trace, breakpoints, logging." }],
                steps: [
                  { reasoning: "Dry run/trace table to trace variable values manually.", marks: 1, markCode: "M" },
                  { reasoning: "Breakpoints/stepping to pause and inspect execution.", marks: 1, markCode: "M" },
                  { reasoning: "Print/logging statements to output intermediate values.", marks: 1, markCode: "M" },
                  { reasoning: "Each technique explained.", marks: 1, markCode: "A" },
                  { reasoning: "Techniques appropriate to bug hunting.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Trace tables, breakpoints/stepping, logging",
              },
            },
            {
              id: "edxbtecit-u10-l2-testing-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the four levels of testing in order.", marks: 2 },
                { label: "b", prompt: "State what acceptance testing checks.", marks: 2 },
                { label: "c", prompt: "Distinguish black-box from white-box testing.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Testing levels", statement: "Unit to acceptance; box approaches." }],
                steps: [
                  { part: "a", reasoning: "Unit, integration, system, acceptance.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Whether system meets user requirements.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Performed by users/end-users.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Black-box = outputs only; white-box = internal logic.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "4 levels; acceptance=user validation; black vs white box",
              },
            },
            {
              id: "edxbtecit-u10-l2-testing-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name the levels of testing in order. (b) Define black-box testing. (c) Explain what a trace table does. (d) Distinguish bug, error and failure. (e) Name two debugging techniques. (f) Why is regression testing needed?",
              parts: [
                { label: "a", prompt: "Testing levels in order.", marks: 2 },
                { label: "b", prompt: "Black-box testing.", marks: 1 },
                { label: "c", prompt: "Trace table purpose.", marks: 2 },
                { label: "d", prompt: "Bug vs error vs failure.", marks: 2 },
                { label: "e", prompt: "Two debugging techniques.", marks: 2 },
                { label: "f", prompt: "Why regression testing.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Testing and debugging", statement: "Levels, trace tables, debugging." }],
                steps: [
                  { part: "a", reasoning: "Unit, integration, system, acceptance.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Tests outputs without examining internal code.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Tracks variable values through execution steps.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Reveals where values go wrong.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Error=mistake, bug=defect, failure=manifestation.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Breakpoints/stepping or print statements; dry run/trace.", marks: 2, markCode: "M" },
                  { part: "f", reasoning: "Ensures changes didn't break existing features.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Testing levels, trace tables, debugging techniques.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtecit-u10-n102-notes", title: "Systems dev 10-2 — notes",
      summary: "Variables/types; IF-ELSE selection, FOR/WHILE iteration; unit→integration→system→acceptance testing; dry runs and trace tables debug.",
      sections: [
        { heading: "Key idea", body: "Algorithms = precise steps; selection chooses, iteration repeats." },
        { heading: "Testing", body: "Test small → large: unit, integration, system, acceptance." },
        { heading: "Debugging", body: "Trace tables and breakpoints reveal where values go wrong." },
      ],
    },
  },
  {
    file: "lesson-10-3.ts", exportName: "lesson103",
    lesson: {
      id: "edxbtecit-u10-lesson-10-3", code: "10-3",
      title: "Implementation, Maintenance and Usability",
      goal: "I CAN describe implementation strategies, maintenance types and usability principles for user interfaces.",
      standards: [
        "Pearson BTEC Level 3 National Information Technology — Specialist unit: Systems Development and Implementation",
        "Implementation strategies, maintenance, usability and HCI",
      ],
      vocabulary: [
        { term: "Implementation", definition: "Process of installing and rolling out the new system to users." },
        { term: "Parallel running", definition: "Running old and new systems simultaneously to compare results." },
        { term: "Phased implementation", definition: "Introducing the new system gradually, department by department." },
        { term: "Pilot implementation", definition: "Testing the new system with one department before full rollout." },
        { term: "Maintenance", definition: "Ongoing changes to a system after release — corrective, adaptive, perfective." },
        { term: "Usability", definition: "How easily and effectively users can achieve their goals with a system." },
        { term: "HCI", definition: "Human-Computer Interaction — study of how people interact with systems." },
      ],
      concepts: [
        {
          id: "edxbtecit-u10-l3-impl", title: "Implementation and maintenance",
          skill: "Compare implementation strategies and explain types of system maintenance.",
          sections: [
            { heading: "Implementation strategies", body: "**Direct (big bang)**: switch everyone at once — fast but risky. **Parallel running**: old and new run together — safe, allows comparison, but doubles workload. **Phased**: roll out to departments gradually — manageable risk. **Pilot**: one department tests first — limited blast radius.\n\nOther factors: data conversion, user training, documentation, hardware/software installation, change management." },
            { heading: "Types of maintenance", body: "**Corrective**: fix bugs/errors found after release. **Adaptive**: modify system for new hardware, OS or regulations. **Perfective**: enhancements and improvements users request. **Preventive**: proactive updates to avoid future problems.\n\nMaintenance dominates the system life cycle — typically 60%+ of total cost. Documentation (technical and user manuals) is essential for all maintenance." },
          ],
          keyFormulas: [
            { name: "Implementation", statement: "Direct, parallel, phased, pilot" },
            { name: "Maintenance", statement: "Corrective, adaptive, perfective, preventive" },
          ],
          workedExample: {
            problem: "A hospital is replacing its records system. Recommend an implementation strategy and justify it.",
            solution: "Phased or pilot — patient safety means gradual rollout with parallel running for critical data; direct switch risks losing records.",
          },
          questions: [
            {
              id: "edxbtecit-u10-l3-impl-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which implementation strategy runs old and new systems simultaneously?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Direct" }, { id: "b", text: "Parallel running" }, { id: "c", text: "Phased" }, { id: "d", text: "Pilot" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Parallel running", statement: "Old and new systems operate together for comparison." }],
                steps: [{ reasoning: "Parallel = both systems run at once.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Parallel running",
              },
            },
            {
              id: "edxbtecit-u10-l3-impl-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name two types of system maintenance.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Maintenance types", statement: "Corrective, adaptive, perfective, preventive." }],
                steps: [
                  { reasoning: "Any two: corrective, adaptive, perfective, preventive.", marks: 1, markCode: "M" },
                  { reasoning: "Both named correctly.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Corrective/adaptive/perfective/preventive",
              },
            },
            {
              id: "edxbtecit-u10-l3-impl-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain the advantage and disadvantage of phased implementation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Phased implementation", statement: "Gradual rollout by department." }],
                steps: [
                  { reasoning: "Advantage: manageable risk — problems found early affect few users.", marks: 1, markCode: "M" },
                  { reasoning: "Disadvantage: takes longer; mixed systems coexist temporarily.", marks: 1, markCode: "M" },
                  { reasoning: "Balanced view.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Lower risk, gradual; slower and temporary dual systems",
              },
            },
            {
              id: "edxbtecit-u10-l3-impl-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A bank must replace its core banking system with minimal disruption. Recommend an implementation strategy and justify it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Implementation choice", statement: "Match strategy to risk tolerance." }],
                steps: [
                  { reasoning: "Parallel running recommended for safety.", marks: 1, markCode: "M" },
                  { reasoning: "Old system remains fallback if new one fails.", marks: 1, markCode: "M" },
                  { reasoning: "Allows data comparison between systems.", marks: 1, markCode: "M" },
                  { reasoning: "Acknowledges higher cost/complexity trade-off.", marks: 1, markCode: "A" },
                  { reasoning: "Justified for banking's criticality.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Parallel running — safety and comparison outweigh cost",
              },
            },
            {
              id: "edxbtecit-u10-l3-impl-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the four implementation strategies.", marks: 2 },
                { label: "b", prompt: "State what corrective maintenance does.", marks: 1 },
                { label: "c", prompt: "State what adaptive maintenance does.", marks: 1 },
                { label: "d", prompt: "Explain why documentation matters for maintenance.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Implementation and maintenance", statement: "Rollout strategies and upkeep types." }],
                steps: [
                  { part: "a", reasoning: "Direct, parallel, phased, pilot.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Fixes bugs/errors after release.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Adapts system to new environment/requirements.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Without docs, maintainers can't understand the system.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Increases cost/time of changes.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "4 strategies; corrective=fix bugs; adaptive=environment; docs essential",
              },
            },
            {
              id: "edxbtecit-u10-l3-impl-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name four implementation strategies. (b) Describe parallel running. (c) Name four types of maintenance. (d) Explain why maintenance is the costliest phase. (e) State two non-technical factors in implementation. (f) Why is user training important?",
              parts: [
                { label: "a", prompt: "Four implementation strategies.", marks: 2 },
                { label: "b", prompt: "Describe parallel running.", marks: 2 },
                { label: "c", prompt: "Four maintenance types.", marks: 2 },
                { label: "d", prompt: "Why maintenance is costliest.", marks: 1 },
                { label: "e", prompt: "Two non-technical factors.", marks: 2 },
                { label: "f", prompt: "Why user training matters.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Implementation and maintenance", statement: "Rollout, upkeep, change factors." }],
                steps: [
                  { part: "a", reasoning: "Direct, parallel, phased, pilot.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Old and new run simultaneously for comparison.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Safe but doubles workload.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Corrective, adaptive, perfective, preventive.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "System used for years → ongoing fixes/enhancements dominate cost.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "User training and documentation (or change management).", marks: 2, markCode: "M" },
                  { part: "f", reasoning: "Untrained users can't use the system effectively → wasted investment.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Implementation strategies, maintenance types and supporting factors.",
              },
            },
          ],
        },
        {
          id: "edxbtecit-u10-l3-usability", title: "Usability and user interface design",
          skill: "Apply usability principles and HCI guidelines to design effective user interfaces.",
          sections: [
            { heading: "Usability principles", body: "**Usability** = effectiveness, efficiency and satisfaction when users achieve goals. Key principles: **visibility** of system status, **consistency**, **error prevention**, **recognition over recall**, **user control**, **help/documentation**.\n\n**HCI** studies how people interact with computers. Good interfaces: clear navigation, familiar conventions (icons, menus), immediate feedback, forgiving error handling, logical information grouping." },
            { heading: "Interface design and accessibility", body: "**Navigation**: consistent menus, breadcrumbs, clear labels. **Feedback**: loading indicators, confirmations, progress bars. **Error messages**: say what went wrong and how to fix it.\n\n**Accessibility**: sufficient colour contrast, keyboard navigation, screen-reader support, captions. **Usability testing**: observe real users performing tasks to find problems — task success rate and time measure usability.\n\nMetaphors (desktop, folders) make systems intuitive by borrowing familiar concepts." },
          ],
          keyFormulas: [
            { name: "Usability", statement: "Effective, efficient, satisfying" },
            { name: "Key principles", statement: "Visibility, consistency, error prevention, recognition" },
            { name: "Accessibility", statement: "Contrast, keyboard nav, screen readers" },
          ],
          workedExample: {
            problem: "A form clears all fields when submitted with an error. Identify usability problems and fixes.",
            solution: "Problems: no error prevention, data loss frustrates users. Fixes: validate inline before submit, keep entered data, show specific error messages per field.",
          },
          questions: [
            {
              id: "edxbtecit-u10-l3-usability-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which principle means users should see what the system is doing?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Consistency" }, { id: "b", text: "Visibility of status" }, { id: "c", text: "User control" }, { id: "d", text: "Error prevention" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Visibility", statement: "System should always keep users informed of status." }],
                steps: [{ reasoning: "Visibility of status = show what system is doing.", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** Visibility of status",
              },
            },
            {
              id: "edxbtecit-u10-l3-usability-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Define usability.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Usability", statement: "Effectiveness, efficiency and satisfaction." }],
                steps: [
                  { reasoning: "How easily/effectively users achieve goals.", marks: 1, markCode: "M" },
                  { reasoning: "Measured by effectiveness, efficiency, satisfaction.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Ease and effectiveness of achieving user goals",
              },
            },
            {
              id: "edxbtecit-u10-l3-usability-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why consistency is important in interface design.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Consistency", statement: "Same actions look/behave the same throughout." }],
                steps: [
                  { reasoning: "Users learn patterns once and apply them everywhere.", marks: 1, markCode: "M" },
                  { reasoning: "Reduces errors and learning time.", marks: 1, markCode: "M" },
                  { reasoning: "Builds user confidence and predictability.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Consistency = faster learning, fewer errors",
              },
            },
            {
              id: "edxbtecit-u10-l3-usability-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A banking app deletes a user's entered form data whenever a validation error occurs. Explain the usability problems and suggest fixes.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Error prevention", statement: "Design should prevent errors and preserve user work." }],
                steps: [
                  { reasoning: "Data loss violates user control and wastes effort.", marks: 1, markCode: "M" },
                  { reasoning: "Poor error prevention — errors should be anticipated.", marks: 1, markCode: "M" },
                  { reasoning: "Fix: preserve entered data on error.", marks: 1, markCode: "M" },
                  { reasoning: "Fix: inline validation before submission.", marks: 1, markCode: "A" },
                  { reasoning: "Fix: clear specific error messages.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Data loss = poor usability; preserve data + inline validation",
              },
            },
            {
              id: "edxbtecit-u10-l3-usability-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State three usability principles.", marks: 2 },
                { label: "b", prompt: "Define HCI.", marks: 1 },
                { label: "c", prompt: "Name two accessibility features for interfaces.", marks: 2 },
                { label: "d", prompt: "What does usability testing measure?", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Usability and HCI", statement: "Principles, accessibility, testing." }],
                steps: [
                  { part: "a", reasoning: "Visibility, consistency, error prevention, recognition, user control.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Study of how people interact with computer systems.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Keyboard nav, screen readers, contrast, captions.", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "How easily/effectively users complete tasks.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Usability principles; HCI; accessibility; task-based testing",
              },
            },
            {
              id: "edxbtecit-u10-l3-usability-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define usability and HCI. (b) Name three usability principles. (c) Explain why error messages should be specific. (d) Name two accessibility requirements. (e) Describe what usability testing involves. (f) Give one example of a design metaphor.",
              parts: [
                { label: "a", prompt: "Define usability and HCI.", marks: 2 },
                { label: "b", prompt: "Three usability principles.", marks: 1 },
                { label: "c", prompt: "Why error messages should be specific.", marks: 2 },
                { label: "d", prompt: "Two accessibility requirements.", marks: 2 },
                { label: "e", prompt: "What usability testing involves.", marks: 2 },
                { label: "f", prompt: "One design metaphor.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Usability and HCI", statement: "Principles, accessibility, testing." }],
                steps: [
                  { part: "a", reasoning: "Usability = ease/effectiveness of goal achievement.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "HCI = study of human-computer interaction.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Visibility, consistency, error prevention etc.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Generic messages don't tell users how to fix problems.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Specific messages guide recovery.", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Contrast, keyboard nav, screen readers, captions.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Observe users performing tasks; measure success/time/errors.", marks: 2, markCode: "M" },
                  { part: "f", reasoning: "Desktop/folders metaphor etc.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Usability principles, accessibility, testing and metaphors.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtecit-u10-n103-notes", title: "Systems dev 10-3 — notes",
      summary: "Direct/parallel/phased/pilot rollout; corrective/adaptive/perfective/preventive maintenance; usability = effective+efficient+satisfying.",
      sections: [
        { heading: "Key idea", body: "Implementation risk varies — match strategy to criticality; maintenance dominates lifecycle cost." },
        { heading: "Usability", body: "Visibility, consistency, error prevention, recognition over recall." },
        { heading: "Accessibility", body: "Contrast, keyboard navigation, screen readers, captions." },
      ],
    },
  },
];
