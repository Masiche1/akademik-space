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
            { id: "a", text: "Step-by-step instructions for a task" }, { id: "b", text: "A type of computer" }, { id: "c", text: "A fast internet connection" }, { id: "d", text: "A picture on screen" },
          ], correctChoiceId: "a" },
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
