import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "olcs-u7-lesson-7-1",
  code: "7-1",
  title: "Problem Solving and the Program Development Life Cycle",
  goal: "I CAN break problems into sub-problems and describe the stages of the program development life cycle.",
  standards: ["2210 7.1", "2210 7.2", "2210 7.3"],
  vocabulary: [
    { term: "Algorithm", definition: "A precise, step-by-step set of instructions to solve a problem." },
    { term: "Decomposition", definition: "Breaking a large problem into smaller, manageable sub-problems." },
    { term: "PDLC", definition: "Program Development Life Cycle — the stages of designing and building software." },
    { term: "Analysis", definition: "First PDLC stage: understanding the problem and requirements." },
    { term: "Design", definition: "Second stage: planning the solution — algorithms, data structures, interfaces." },
    { term: "Implementation", definition: "Writing the actual code from the design." },
    { term: "Maintenance", definition: "Final stage: fixing bugs and updating the program after release." },
  ],
  concepts: [
    {
      id: "olcs-u7-decompose",
      title: "Decomposing problems",
      skill: "Break complex problems into sub-problems and design solutions.",
      lesson: {
        sections: [
          { heading: "What is an algorithm", body: "An algorithm is a finite, unambiguous sequence of steps that solves a problem — like a recipe. It must have clear inputs, outputs, and terminate." },
          { heading: "Decomposition", body: "Large problems are too complex to solve at once. **Decompose** them:\n\n1. Identify the main task.\n2. Split into smaller sub-tasks.\n3. Solve each sub-task (possibly recursively decomposing further).\n4. Combine the solutions.\n\nExample: 'Build a website' → design layout, write content, code pages, test, deploy — each a sub-problem." },
          { heading: "Describing algorithms", body: "Algorithms can be expressed as:\n\n- **Pseudocode**: plain-language structured steps (INPUT, IF...THEN, FOR...NEXT).\n- **Flowcharts**: visual boxes and arrows showing flow and decisions.\n- **Structured English**: numbered steps with indentation." },
        ],
        keyFormulas: [
          { name: "Decomposition", statement: "Big problem → sub-problems → combine" },
        ],
        workedExample: {
          problem: "Decompose the problem 'calculate a student's average grade'.",
          solution: "Sub-problems: (1) get the list of grades, (2) sum them, (3) divide by count, (4) display result.",
        },
      },
      questions: [
        {
          id: "olcs-u7-dc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Decomposition means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deleting code" },
            { id: "b", text: "Compressing a file" },
            { id: "c", text: "Speeding up a computer" },
            { id: "d", text: "Breaking a problem into smaller parts" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Decomposition", statement: "Split into sub-problems." }], steps: [{ reasoning: "Decompose = break down.", working: "\\text{break down}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Breaking into parts" },
        },
        {
          id: "olcs-u7-dc-q2", difficulty: "core", totalMarks: 2,
          stem: "State two ways algorithms can be expressed.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Algorithm forms", statement: "Pseudocode, flowchart, structured English." }], steps: [
            { reasoning: "Pseudocode / flowchart.", working: "\\text{pseudocode/flowchart}", marks: 1, markCode: "M" },
            { reasoning: "Correct forms.", marks: 1, markCode: "A" },
          ], finalAnswer: "Pseudocode, flowcharts, structured English." },
        },
        {
          id: "olcs-u7-dc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why decomposition makes problem-solving easier.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Decomposition benefit", statement: "Smaller problems are manageable." }], steps: [
            { reasoning: "Each sub-problem is simpler.", working: "\\text{simpler}", marks: 1, markCode: "M" },
            { reasoning: "Can be solved/tested independently.", working: "\\text{independent}", marks: 1, markCode: "M" },
            { reasoning: "Errors isolated to one part.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Smaller sub-problems are easier to understand, solve, test and debug independently." },
        },
        {
          id: "olcs-u7-dc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Problem solving review.",
          parts: [
            { label: "a", prompt: "Define algorithm.", marks: 2 },
            { label: "b", prompt: "Define decomposition.", marks: 2 },
            { label: "c", prompt: "Name two ways to express an algorithm.", marks: 2 },
            { label: "d", prompt: "Decompose 'find the largest number in a list'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Algorithm", statement: "Finite step-by-step solution." },
          ], steps: [
            { part: "a", reasoning: "Precise steps to solve a problem.", working: "\\text{steps}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Must terminate/be unambiguous.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Splitting into sub-problems.", working: "\\text{split}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Pseudocode / flowchart.", working: "\\text{forms}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Second form.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Start with first as max.", working: "\\text{init max}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Compare each item to max.", working: "\\text{compare}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Update max if larger; output max.", working: "\\text{update}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) steps to solve (b) split problems (c) pseudocode/flowchart (d) init-compare-update" },
        },
        {
          id: "olcs-u7-dc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "When decomposing a problem, the first step is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Choose a programming language" },
            { id: "b", text: "Write the code" },
            { id: "c", text: "Identify the main task" },
            { id: "d", text: "Test the program" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Decomposition", statement: "Start with the main task." }], steps: [{ reasoning: "First identify the overall task.", working: "\\text{main task}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Identify the main task" },
        },
        {
          id: "olcs-u7-dc-q6", difficulty: "core", totalMarks: 2,
          stem: "A main problem is decomposed into 2 sub-problems, and each sub-problem is decomposed into 3 smaller tasks. How many leaf tasks are there in total?",
          response: { type: "numeric", parts: [{ label: "Leaf tasks", answer: 6 }] },
          markscheme: { principles: [{ kind: "principle", name: "Decomposition tree", statement: "Multiply branch counts." }], steps: [
            { reasoning: "$2 \\times 3 = 6$ leaf tasks.", working: "2 \\times 3 = 6", marks: 1, markCode: "M" },
            { reasoning: "Correct total.", working: "6", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olcs-u7-dc-q7", difficulty: "core", totalMarks: 2,
          stem: "State one advantage of describing an algorithm in pseudocode rather than a specific programming language.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Pseudocode", statement: "Language-independent logic." }], steps: [
            { reasoning: "Pseudocode is not tied to one language.", working: "\\text{independent}", marks: 1, markCode: "M" },
            { reasoning: "Focuses on the logic/steps.", marks: 1, markCode: "A" },
          ], finalAnswer: "It is language-independent and focuses purely on the logic." },
        },
        {
          id: "olcs-u7-dc-q8", difficulty: "core", totalMarks: 1,
          stem: "Which of these is NOT a valid way to express an algorithm?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Flowchart" },
            { id: "b", text: "Random guessing" },
            { id: "c", text: "Structured English" },
            { id: "d", text: "Pseudocode" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Algorithm forms", statement: "Pseudocode, flowchart, structured English." }], steps: [{ reasoning: "Random guessing is not an algorithm.", working: "\\text{guessing}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Random guessing" },
        },
        {
          id: "olcs-u7-dc-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Decomposition splits a problem into 4 sub-problems, and each sub-problem is split into 2 leaf tasks. How many leaf tasks result?",
          response: { type: "numeric", parts: [{ label: "Leaf tasks", answer: 8 }] },
          markscheme: { principles: [{ kind: "principle", name: "Decomposition", statement: "Multiply branch counts." }], steps: [{ reasoning: "$4 \\times 2 = 8$.", working: "8", marks: 1, markCode: "A" }], finalAnswer: "8" },
        },
        {
          id: "olcs-u7-dc-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Decompose the problem 'find the average of five numbers' into a sequence of sub-problems.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Decomposition", statement: "Split into solvable sub-tasks." }], steps: [
            { reasoning: "Read/collect the five numbers.", working: "\\text{input}", marks: 1, markCode: "M" },
            { reasoning: "Sum the numbers.", working: "\\text{sum}", marks: 1, markCode: "M" },
            { reasoning: "Divide the sum by 5.", working: "\\text{divide}", marks: 1, markCode: "M" },
            { reasoning: "Output the average.", marks: 1, markCode: "A" },
          ], finalAnswer: "Input numbers → sum them → divide by 5 → output average." },
        },
        {
          id: "olcs-u7-dc-q11", difficulty: "foundation", totalMarks: 1,
          stem: "Decomposition is useful because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It speeds up the computer" },
            { id: "b", text: "It makes programs longer" },
            { id: "c", text: "Smaller sub-problems are easier to solve and test" },
            { id: "d", text: "It removes the need for testing" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Decomposition benefit", statement: "Smaller problems are manageable." }], steps: [{ reasoning: "Sub-problems are simpler to handle.", working: "\\text{simpler}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Easier to solve and test" },
        },
        {
          id: "olcs-u7-dc-q12", difficulty: "core", totalMarks: 2,
          stem: "A problem is split into sub-problems A and B. A is split into A1 and A2; B is split into B1 and B2. How many leaf sub-problems are there?",
          response: { type: "numeric", parts: [{ label: "Leaf sub-problems", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Decomposition tree", statement: "Count the leaves." }], steps: [
            { reasoning: "A gives 2 leaves, B gives 2 leaves.", working: "2+2", marks: 1, markCode: "M" },
            { reasoning: "Total $= 4$.", working: "4", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u7-dc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the solutions to sub-problems must be combined correctly.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Combination", statement: "Sub-solutions build the final answer." }], steps: [
            { reasoning: "Sub-solutions feed into the main solution.", working: "\\text{feed}", marks: 1, markCode: "M" },
            { reasoning: "Wrong combination gives a wrong final result.", working: "\\text{wrong result}", marks: 1, markCode: "M" },
            { reasoning: "Order and dependencies matter.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sub-problems only help if their results are combined in the right way to form the final solution." },
        },
        {
          id: "olcs-u7-dc-q14", difficulty: "core", totalMarks: 1,
          stem: "Which property must every algorithm have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It must use arrays" },
            { id: "b", text: "It must be written in binary" },
            { id: "c", text: "It must run forever" },
            { id: "d", text: "It must terminate" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Algorithm", statement: "Finite — must terminate." }], steps: [{ reasoning: "Algorithms are finite and must end.", working: "\\text{terminate}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** It must terminate" },
        },
        {
          id: "olcs-u7-dc-q15", difficulty: "foundation", totalMarks: 1,
          stem: "How many main ways can an algorithm be expressed (pseudocode, flowcharts and structured English)?",
          response: { type: "numeric", parts: [{ label: "Number of forms", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Algorithm forms", statement: "Three common forms." }], steps: [{ reasoning: "Pseudocode, flowchart, structured English $= 3$.", working: "3", marks: 1, markCode: "A" }], finalAnswer: "3" },
        },
        {
          id: "olcs-u7-dc-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Describe how you would decompose the problem 'organise a school sports day'.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Decomposition", statement: "Split into manageable sub-tasks." }], steps: [
            { reasoning: "Identify main tasks: venue, teams, equipment, schedule.", working: "\\text{main tasks}", marks: 1, markCode: "M" },
            { reasoning: "Break each into sub-tasks, e.g. schedule → fixtures, timings.", working: "\\text{sub-tasks}", marks: 1, markCode: "M" },
            { reasoning: "Each sub-task can be solved and checked separately.", working: "\\text{separate}", marks: 1, markCode: "M" },
            { reasoning: "Combine results into the full event plan.", marks: 1, markCode: "A" },
          ], finalAnswer: "Identify main tasks (venue, teams, equipment), split into sub-tasks, solve each, then combine." },
        },
      ],
    },
    {
      id: "olcs-u7-pdlc",
      title: "Program development life cycle",
      skill: "Describe the stages of the PDLC and their purposes.",
      lesson: {
        sections: [
          { heading: "The stages", body: "1. **Analysis**: understand the problem, requirements and constraints.\n2. **Design**: plan the solution — algorithms, data structures, user interface.\n3. **Implementation**: write the actual code.\n4. **Testing**: check the program works correctly (see lesson 7-3).\n5. **Installation/implementation**: deploy to users.\n6. **Maintenance**: fix bugs, update, improve after release." },
          { heading: "Why follow a cycle", body: "Skipping stages causes problems: unclear requirements → wrong solution; no design → messy unmaintainable code; no testing → bugs reach users. The PDLC ensures quality and manageability." },
          { heading: "Iterative vs waterfall", body: "Classic PDLC is sequential (waterfall). Modern development is often **iterative/Agile** — build in small increments, test and refine repeatedly." },
        ],
        keyFormulas: [
          { name: "PDLC", statement: "Analysis → Design → Implementation → Testing → Maintenance" },
        ],
        workedExample: {
          problem: "A team skips testing to save time. What is the likely consequence?",
          solution: "Bugs reach users, causing crashes and lost trust — testing catches problems early when they're cheap to fix.",
        },
      },
      questions: [
        {
          id: "olcs-u7-pdlc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The first stage of the PDLC is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Coding" },
            { id: "b", text: "Analysis" },
            { id: "c", text: "Testing" },
            { id: "d", text: "Maintenance" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "PDLC order", statement: "Analysis first." }], steps: [{ reasoning: "Analysis comes first.", working: "\\text{analysis}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Analysis" },
        },
        {
          id: "olcs-u7-pdlc-q2", difficulty: "core", totalMarks: 2,
          stem: "State the purpose of the design stage.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Design", statement: "Plan the solution before coding." }], steps: [
            { reasoning: "Plan algorithms/data structures.", working: "\\text{plan}", marks: 1, markCode: "M" },
            { reasoning: "Before implementation.", marks: 1, markCode: "A" },
          ], finalAnswer: "To plan the solution — algorithms and structures — before writing code." },
        },
        {
          id: "olcs-u7-pdlc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why testing is a distinct stage rather than part of implementation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Testing", statement: "Separate verification step." }], steps: [
            { reasoning: "Testing verifies against requirements independently.", working: "\\text{verify}", marks: 1, markCode: "M" },
            { reasoning: "Separate stage allows systematic checking.", working: "\\text{systematic}", marks: 1, markCode: "M" },
            { reasoning: "Catches errors before release.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Testing is a dedicated verification stage that systematically finds errors before release." },
        },
        {
          id: "olcs-u7-pdlc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "PDLC review.",
          parts: [
            { label: "a", prompt: "List the main PDLC stages in order.", marks: 3 },
            { label: "b", prompt: "State the purpose of analysis.", marks: 2 },
            { label: "c", prompt: "State the purpose of maintenance.", marks: 2 },
            { label: "d", prompt: "Explain why skipping testing is risky.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "PDLC", statement: "Analysis→Design→Implement→Test→Maintain." },
          ], steps: [
            { part: "a", reasoning: "Analysis/design/implementation.", working: "\\text{stages}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Testing/maintenance.", working: "\\text{more}", marks: 1, markCode: "A" },
            { part: "a", reasoning: "Correct order.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Understand problem/requirements.", working: "\\text{understand}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct purpose.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Fix bugs/update after release.", working: "\\text{fix/update}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct purpose.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Bugs reach users → crashes/lost trust.", working: "\\text{bugs}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Testing catches them early.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) analysis→design→impl→test→maintain (b) understand (c) fix/update (d) bugs reach users" },
        },
        {
          id: "olcs-u7-pdlc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which PDLC stage involves writing the actual program code?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Implementation" },
            { id: "b", text: "Maintenance" },
            { id: "c", text: "Analysis" },
            { id: "d", text: "Design" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "PDLC", statement: "Implementation = writing code." }], steps: [{ reasoning: "Implementation writes the code.", working: "\\text{code}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Implementation" },
        },
        {
          id: "olcs-u7-pdlc-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many stages are there in the classic PDLC (analysis, design, implementation, testing, installation, maintenance)?",
          response: { type: "numeric", parts: [{ label: "Number of stages", answer: 6 }] },
          markscheme: { principles: [{ kind: "definition", name: "PDLC", statement: "Six main stages." }], steps: [{ reasoning: "Count the stages: $6$.", working: "6", marks: 1, markCode: "A" }], finalAnswer: "6" },
        },
        {
          id: "olcs-u7-pdlc-q7", difficulty: "core", totalMarks: 2,
          stem: "State the purpose of the analysis stage.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Analysis", statement: "Understand the problem." }], steps: [
            { reasoning: "Understand the problem and requirements.", working: "\\text{understand}", marks: 1, markCode: "M" },
            { reasoning: "Identify constraints before designing.", marks: 1, markCode: "A" },
          ], finalAnswer: "To understand the problem, its requirements and constraints." },
        },
        {
          id: "olcs-u7-pdlc-q8", difficulty: "core", totalMarks: 1,
          stem: "Skipping which stage most directly leads to bugs reaching users?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Design" },
            { id: "b", text: "Maintenance" },
            { id: "c", text: "Testing" },
            { id: "d", text: "Analysis" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Testing", statement: "Catches bugs before release." }], steps: [{ reasoning: "Testing finds errors early.", working: "\\text{testing}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Testing" },
        },
        {
          id: "olcs-u7-pdlc-q9", difficulty: "core", totalMarks: 1,
          stem: "If testing is the 4th of the 6 PDLC stages, how many stages come after it?",
          response: { type: "numeric", parts: [{ label: "Stages after testing", answer: 2 }] },
          markscheme: { principles: [{ kind: "definition", name: "PDLC order", statement: "Testing → installation → maintenance." }], steps: [{ reasoning: "Installation and maintenance remain: $6-4=2$.", working: "2", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "olcs-u7-pdlc-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between waterfall and iterative (Agile) development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Development models", statement: "Sequential vs incremental." }], steps: [
            { reasoning: "Waterfall completes each stage once in order.", working: "\\text{waterfall}", marks: 1, markCode: "M" },
            { reasoning: "Iterative builds in small increments.", working: "\\text{increments}", marks: 1, markCode: "M" },
            { reasoning: "Iterative tests and refines repeatedly.", working: "\\text{refine}", marks: 1, markCode: "M" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "Waterfall is sequential; iterative builds, tests and refines in small repeated cycles." },
        },
        {
          id: "olcs-u7-pdlc-q11", difficulty: "foundation", totalMarks: 1,
          stem: "The maintenance stage involves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Writing the first draft" },
            { id: "b", text: "Designing the layout" },
            { id: "c", text: "Fixing bugs and updating after release" },
            { id: "d", text: "Buying hardware" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Maintenance", statement: "Fix/update after release." }], steps: [{ reasoning: "Maintenance happens post-release.", working: "\\text{post-release}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Fixing bugs and updating" },
        },
        {
          id: "olcs-u7-pdlc-q12", difficulty: "core", totalMarks: 1,
          stem: "How many stages does the classic PDLC have?",
          response: { type: "numeric", parts: [{ label: "Stages", answer: 6 }] },
          markscheme: { principles: [{ kind: "definition", name: "PDLC", statement: "Six stages." }], steps: [{ reasoning: "Analysis→design→implementation→testing→installation→maintenance $= 6$.", working: "6", marks: 1, markCode: "A" }], finalAnswer: "6" },
        },
        {
          id: "olcs-u7-pdlc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the design stage should happen before implementation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Design", statement: "Plan before coding." }], steps: [
            { reasoning: "Design plans algorithms and structures first.", working: "\\text{plan}", marks: 1, markCode: "M" },
            { reasoning: "Avoids costly rework during coding.", working: "\\text{rework}", marks: 1, markCode: "M" },
            { reasoning: "Clarifies data structures and interfaces.", working: "\\text{structures}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Design plans the solution first, preventing rework and clarifying structures before code is written." },
        },
        {
          id: "olcs-u7-pdlc-q14", difficulty: "core", totalMarks: 1,
          stem: "Which is an example of the maintenance stage?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fixing a bug reported by users" },
            { id: "b", text: "Writing the first version" },
            { id: "c", text: "Drawing a flowchart" },
            { id: "d", text: "Gathering requirements" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Maintenance", statement: "Post-release fixes." }], steps: [{ reasoning: "Fixing reported bugs is maintenance.", working: "\\text{fix}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Fixing a reported bug" },
        },
        {
          id: "olcs-u7-pdlc-q15", difficulty: "core", totalMarks: 2,
          stem: "A class project has 3 sub-tasks in analysis, 2 in design, 4 in implementation and 1 in testing. How many sub-tasks are there in total?",
          response: { type: "numeric", parts: [{ label: "Total sub-tasks", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "PDLC", statement: "Sum stage sub-tasks." }], steps: [
            { reasoning: "$3+2+4+1 = 10$.", working: "3+2+4+1=10", marks: 1, markCode: "M" },
            { reasoning: "Correct total.", working: "10", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olcs-u7-pdlc-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A team wants to add a new feature to an existing program. Which PDLC stages are most relevant and why?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PDLC", statement: "Stages repeat for changes." }], steps: [
            { reasoning: "Analysis: understand the new requirement.", working: "\\text{analysis}", marks: 1, markCode: "M" },
            { reasoning: "Design and implementation: plan and code the feature.", working: "\\text{design+code}", marks: 1, markCode: "M" },
            { reasoning: "Testing: verify the feature works and breaks nothing.", working: "\\text{test}", marks: 1, markCode: "M" },
            { reasoning: "Release/maintenance: deploy and support it.", marks: 1, markCode: "A" },
          ], finalAnswer: "Analysis of the requirement, design, implementation, testing, then release — the PDLC applies to changes too." },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u7-7-1-notes", title: "Problem solving and PDLC — notes", summary: "Algorithms, decomposition, PDLC stages.",
      sections: [
        { heading: "Algorithm", body: "Finite unambiguous steps to solve a problem; expressed as pseudocode/flowchart." },
        { heading: "PDLC", body: "Analysis → Design → Implementation → Testing → Installation → Maintenance." },
      ] },
  ],
};
