import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cipc-u1-lesson-1-2",
  code: "1-2",
  title: "Stage 1 — Instructions and Algorithms",
  goal: "I CAN give and follow simple instructions in the correct order to complete a task.",
  standards: ["Cambridge Primary Computing 0059 Stage 1: computational thinking",
  "Cambridge Primary Computing 0059 framework strands: Computational thinking"],
  stage: 1,
  vocabulary: [
    { term: "Algorithm", definition: "A step-by-step set of instructions to complete a task." },
    { term: "Sequence", definition: "The order in which instructions are given." },
    { term: "Step", definition: "One instruction in an algorithm." },
    { term: "Order", definition: "Doing things in the right sequence." },
    { term: "Direction", definition: "Which way to move or face — forward, left, right." },
    { term: "Debug", definition: "To find and fix a mistake in instructions." },
  ],
  concepts: [
    {
      id: "cipc-u1-s1-algo",
      title: "Algorithms and sequences",
      skill: "Write and follow ordered instructions for simple tasks at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "What is an algorithm?",
            body: "An algorithm is a step-by-step set of instructions for completing a task — like a recipe or directions. Computers follow algorithms exactly, so every step must be clear and in the right order.",
          },
          {
            heading: "Order matters",
            body: "Instructions must be in the correct sequence. 'Put on socks, then shoes' works; 'put on shoes, then socks' fails. Try giving directions to a friend or robot — if they get lost, the algorithm has a mistake. Finding and fixing the mistake is called debugging.",
          },
        ],
        keyFormulas: [
          { name: "Algorithm", statement: "step-by-step instructions in correct order" },
          { name: "Debugging", statement: "finding and fixing mistakes in instructions" },
        ],
        workedExample: {
          problem: "Write an algorithm to make a cup of squash. What could go wrong if steps are out of order?",
          solution: "1. Get cup 2. Add squash 3. Add water 4. Stir. If you stir before adding squash, the squash sits at the bottom — order matters.",
        },
      },
      questions: [
        {
          id: "cipc-u1-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an algorithm?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A fast internet connection" },
            { id: "b", text: "Step-by-step instructions for a task" },
            { id: "c", text: "A picture on screen" },
            { id: "d", text: "A type of computer" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Algorithm", statement: "Ordered instructions." }],
            steps: [{ reasoning: "Algorithm = clear ordered steps.", marks: 1, markCode: "M" }],
            finalAnswer: "Step-by-step instructions",
          },
        },
        {
          id: "cipc-u1-al-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Put these in the correct order for brushing teeth: rinse mouth, put toothpaste on brush, brush teeth.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing", statement: "Logical order." }],
            steps: [
              { reasoning: "1. Put toothpaste on brush.", marks: 1, markCode: "M" },
              { reasoning: "2. Brush teeth; 3. Rinse mouth.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "toothpaste → brush → rinse",
          },
        },
        {
          id: "cipc-u1-al-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A friend gives directions: 'turn left, walk straight, turn right' but ends up lost. Explain two possible mistakes and what debugging means.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Debugging", statement: "Find and fix instruction errors." }],
            steps: [
              { reasoning: "Possible missing step: distance/'walk straight' needs a length.", marks: 1, markCode: "M" },
              { reasoning: "Possible wrong turn or missing landmark.", marks: 1, markCode: "M" },
              { reasoning: "Debugging = finding and correcting the mistake.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vague/wrong steps; debugging = fixing errors",
          },
        },
        {
          id: "cipc-u1-al-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define algorithm. (b) Write a 4-step algorithm for making a sandwich. (c) Explain why order is important with an example. (d) A robot is told 'move forward' but has no distance — why might it fail? (e) What is debugging? (f) Give an example of a real-life algorithm (recipe/directions). (g) Why must instructions be precise? (h) Write one instruction to fix the robot problem.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Algorithms", statement: "Definition, writing, order, precision, debugging." }],
            steps: [
              { reasoning: "(a) Step-by-step instructions for a task.", marks: 1, markCode: "M" },
              { reasoning: "(b) 4 sensible ordered steps.", marks: 1, markCode: "M" },
              { reasoning: "(c) Order example: can't wear shoes before socks.", marks: 1, markCode: "M" },
              { reasoning: "(d) No distance specified — robot won't know how far.", marks: 1, markCode: "M" },
              { reasoning: "(e) Finding/fixing mistakes in instructions.", marks: 1, markCode: "M" },
              { reasoning: "(f) Valid real-life algorithm example.", marks: 1, markCode: "M" },
              { reasoning: "(g) Computers follow exactly — vague steps cause errors.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. 'move forward 10 steps'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Algorithm definition, sandwich steps, order importance, precision, debugging, real-life example.",
          },
        },
        {
          id: "cipc-u1-al-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an algorithm?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A picture file" },
            { id: "b", type: "text", text: "A type of cable" },
            { id: "c", text: "A computer screen" },
            { id: "d", text: "A recipe with ordered steps" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Algorithm", statement: "Ordered step-by-step instructions." }],
            steps: [{ reasoning: "A recipe is ordered steps for a task; the others are not algorithms.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** A recipe with ordered steps",
          },
        },
        {
          id: "cipc-u1-al-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Put these steps in the correct order for getting dressed: put on shoes, put on socks, put on trousers.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequencing", statement: "Logical order of steps." }],
            steps: [
              { reasoning: "1. Put on socks (before shoes).", marks: 1, markCode: "M" },
              { reasoning: "2. Put on trousers; 3. Put on shoes — or socks, trousers, shoes.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "socks → trousers → shoes",
          },
        },
        {
          id: "cipc-u1-al-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A set of directions says 'walk straight, then turn left' but forgets to say how far to walk. Why might the person get lost?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Turning left is always wrong" },
            { id: "b", text: "The person is not listening" },
            { id: "c", text: "The instruction is too vague — no distance given" },
            { id: "d", text: "Directions never work" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Precise instructions", statement: "Steps must be clear and complete." }],
            steps: [
              { reasoning: "'Walk straight' has no distance — the walker cannot know when to stop.", marks: 1, markCode: "M" },
              { reasoning: "Vague instructions cause errors; precision fixes them.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The instruction is too vague — no distance given",
          },
        },
        {
          id: "cipc-u1-al-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a 3-step algorithm for making a jam sandwich. Explain why the order matters.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Writing algorithms", statement: "Ordered, clear steps." }],
            steps: [
              { reasoning: "Three sensible ordered steps (e.g. get bread, spread jam, put slices together).", marks: 1, markCode: "M" },
              { reasoning: "Steps are clear and in a workable sequence.", marks: 1, markCode: "M" },
              { reasoning: "Order matters — e.g. must spread jam before closing the sandwich.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 ordered steps + order explanation",
          },
        },
        {
          id: "cipc-u1-al-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An algorithm for planting a seed has steps: 'dig hole, plant seed, water, cover with soil'. A friend swapped 'water' and 'cover with soil'. How many steps are now in the wrong order?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequence check", statement: "Water must come before covering." }],
            steps: [
              { reasoning: "Watering before covering is correct; covering before watering is wrong.", marks: 1, markCode: "M" },
              { reasoning: "The two swapped steps ('water' and 'cover with soil') are out of order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipc-u1-al-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A robot is told 'move to the door'. It bumps into a wall. Suggest two ways the instructions could be improved (debugged).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Debugging directions", statement: "Add missing or clearer steps." }],
            steps: [
              { reasoning: "Add a route/landmarks: e.g. 'turn left at the table, then move forward'.", marks: 1, markCode: "M" },
              { reasoning: "Add distances or stops: e.g. 'move forward 10 steps, then turn'.", marks: 1, markCode: "M" },
              { reasoning: "Debugging = finding and fixing the unclear/wrong steps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add route details and distances; debugging fixes unclear steps.",
          },
        },
        {
          id: "cipc-u1-al-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which is the BEST first step when writing an algorithm for a computer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Guess what the computer wants" },
            { id: "b", text: "Break the task into small ordered steps" },
            { id: "c", text: "Write as few steps as possible" },
            { id: "d", text: "Start coding immediately" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Decompose then sequence", statement: "Small ordered steps first." }],
            steps: [
              { reasoning: "Algorithms are step-by-step instructions — planning steps comes first.", marks: 1, markCode: "M" },
              { reasoning: "Breaking into small ordered steps avoids confusion and errors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Break the task into small ordered steps",
          },
        },
        {
          id: "cipc-u1-al-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two friends follow the same directions but one gets lost. What is the most likely cause?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Computers cannot follow directions" },
            { id: "b", text: "One friend walked too fast" },
            { id: "c", text: "The directions were too vague or had a mistake" },
            { id: "d", text: "Directions always work perfectly" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Debugging", statement: "Errors in instructions cause failure." }],
            steps: [
              { reasoning: "Same directions, different result — the instructions likely contain a mistake or vagueness.", marks: 1, markCode: "M" },
              { reasoning: "Debugging means finding and fixing that mistake.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The directions were too vague or had a mistake",
          },
        },
        {
          id: "cipc-u1-al-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 'make a drink' algorithm has 5 steps. Two steps were accidentally deleted, then 1 step was added twice by mistake. How many steps does the algorithm have now?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Step counting", statement: "5 - 2 + 1." }],
            steps: [
              { reasoning: "Start with 5 steps.", marks: 1, markCode: "M" },
              { reasoning: "Remove 2 steps: 5 - 2 = 3.", marks: 1, markCode: "M" },
              { reasoning: "Add 1 duplicated step: 3 + 1 = 4 steps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipc-u1-al-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which set of instructions is in the correct order for a morning routine?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Get dressed, eat breakfast, wake up, brush teeth" },
            { id: "b", text: "Eat breakfast, get dressed, wake up, brush teeth" },
            { id: "c", text: "Brush teeth, wake up, eat breakfast, get dressed" },
            { id: "d", text: "Wake up, get dressed, brush teeth, eat breakfast" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequence", statement: "Logical order of routine." }],
            steps: [
              { reasoning: "Waking up must come first; eating before brushing teeth is also illogical.", marks: 1, markCode: "M" },
              { reasoning: "Only (b) gives a sensible order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Wake up, get dressed, brush teeth, eat breakfast",
          },
        },
        {
          id: "cipc-u1-al-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A treasure hunt has 6 clues. Each clue tells you where to go next. If clue 3 is removed, how many clues still work correctly to lead you to the treasure? Explain.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sequence dependency", statement: "Each step depends on the previous one." }],
            steps: [
              { reasoning: "Clues 4, 5, 6 depend on clue 3's location, so they also fail.", marks: 1, markCode: "M" },
              { reasoning: "Only clues 1 and 2 still work correctly.", marks: 1, markCode: "M" },
              { reasoning: "2 clues work — not 5, because the chain is broken.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipc-u1-al-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define algorithm. (b) Give two real-life examples of algorithms. (c) Write a 4-step algorithm for making a drink. (d) Explain why instructions must be in the right order, with an example. (e) What is debugging? (f) A program does nothing when the flag is clicked — suggest two things to check. (g) Why must instructions be precise? (h) Fix this step: 'move forward' — make it a better instruction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Algorithms", statement: "Definition, examples, ordering, precision, debugging." }],
            steps: [
              { reasoning: "(a) Step-by-step instructions for completing a task.", marks: 1, markCode: "M" },
              { reasoning: "(b) Two valid examples (recipe, directions, rules of a game).", marks: 1, markCode: "M" },
              { reasoning: "(c) 4 sensible ordered steps for a drink.", marks: 1, markCode: "M" },
              { reasoning: "(d) Order example: can't put shoes on before socks.", marks: 1, markCode: "M" },
              { reasoning: "(e) Finding and fixing mistakes in instructions.", marks: 1, markCode: "M" },
              { reasoning: "(f) Two valid checks (blocks missing, event not connected, syntax error).", marks: 1, markCode: "M" },
              { reasoning: "(g) Computers follow exactly — vague steps cause errors.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. 'move forward 10 steps' — adds a distance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Algorithm definition, real-life examples, drink algorithm, order importance, debugging, checks, precision, fixed instruction.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-al-notes",
      title: "Algorithms — notes",
      summary: "Algorithm = ordered steps for a task. Order and precision matter. Debugging = finding and fixing mistakes.",
      sections: [
        { heading: "Key idea", body: "Every algorithm is a sequence — wrong order or vague steps cause failure." },
        { heading: "Debugging", body: "When a program or set of directions fails, find the bad step and fix it." },
      ],
    },
  ],
};
