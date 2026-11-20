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
            { id: "a", text: "Breaking a problem into smaller parts" }, { id: "b", text: "Deleting code" }, { id: "c", text: "Compressing a file" }, { id: "d", text: "Speeding up a computer" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Decomposition", statement: "Split into sub-problems." }], steps: [{ reasoning: "Decompose = break down.", working: "\\text{break down}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Breaking into parts" },
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
            { id: "a", text: "Analysis" }, { id: "b", text: "Coding" }, { id: "c", text: "Testing" }, { id: "d", text: "Maintenance" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "PDLC order", statement: "Analysis first." }], steps: [{ reasoning: "Analysis comes first.", working: "\\text{analysis}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Analysis" },
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
