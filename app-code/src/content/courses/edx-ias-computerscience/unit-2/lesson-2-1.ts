import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "eiascs-u2-lesson-2-1",
  code: "2-1",
  title: "Algorithms and Flowcharts",
  goal: "I CAN design algorithms and represent them using flowcharts/pseudocode.",
  standards: [
    "Edexcel IAS Computer Science 9CP01 Unit 2 — Algorithms and Programming",
  ],
  vocabulary: [
    {
      term: "Algorithm",
      definition: "Step-by-step procedure to solve a problem.",
    },
    {
      term: "Flowchart",
      definition: "Diagram showing algorithm using symbols.",
    },
    {
      term: "Pseudocode",
      definition: "Plain-language description of algorithm.",
    },
    {
      term: "Sequence",
      definition: "Instructions in order — one after another.",
    },
    { term: "Selection", definition: "Decision point — IF/ELSE branches." },
    { term: "Iteration", definition: "Loop — repeat instructions." },
  ],
  concepts: [
    {
      id: "eiascs-u2-algorithms",
      title: "Algorithm Design",
      skill: "Design algorithms using sequence, selection, iteration.",
      lesson: {
        sections: [
          {
            heading: "Algorithm structures",
            body: "**Sequence**: steps in order — input, process, output. **Selection**: IF condition THEN action ELSE different action — decision. **Iteration**: WHILE/UNTIL/ FOR loops — repeat until condition met.\n\n**Example**: find largest of 3 numbers — input 3 → compare pairs → output largest. Selection needed.",
          },
          {
            heading: "Representation",
            body: "**Flowchart**: visual symbols — oval (start/end), rectangle (process), diamond (decision), parallelogram (input/output). **Pseudocode**: plain language — 'IF score >= 50 THEN print Pass'.\n\n**Decomposition**: break problem into sub-problems — easier to solve. **Abstraction**: focus on essential features, ignore details.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Algorithm: if temperature > 30 print 'hot' else 'cool'. Structure?",
          solution: "Selection.",
        },
      },
      questions: [
        {
          id: "eiascs-u2-alg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an algorithm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Computer hardware" },
              { id: "b", text: "Step-by-step procedure" },
              { id: "c", text: "Programming language" },
              { id: "d", text: "Data storage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Algorithm",
                statement: "Step-by-step.",
              },
            ],
            steps: [
              {
                reasoning: "Algorithm = procedure.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Step-by-step",
            commonErrors: ["Hardware confused."],
          },
        },
        {
          id: "eiascs-u2-alg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two algorithm structures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structures",
                statement: "Sequence, selection, iteration.",
              },
            ],
            steps: [
              {
                reasoning: "Sequence — steps in order.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Selection — IF/ELSE decision.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Iteration — loop/repeat.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Sequence, selection, iteration.",
            commonErrors: ["Only one.", "Wrong structure."],
          },
        },
        {
          id: "eiascs-u2-alg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between sequence and iteration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Sequence vs iteration",
                statement: "Once vs repeat.",
              },
            ],
            steps: [
              {
                reasoning: "Sequence: instructions once, in order.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Iteration: instructions repeated until condition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: sequence = steps to make tea; iteration = wash dishes until clean.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Iteration needs exit condition — avoid infinite loop.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Once vs repeat.",
            commonErrors: ["Same.", "No example."],
          },
        },
        {
          id: "eiascs-u2-alg-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design algorithm to check if number is even.",
          parts: [
            { label: "a", prompt: "Write pseudocode.", marks: 4 },
            { label: "b", prompt: "Identify structures used.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Algorithm design",
                statement: "Pseudocode + structures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) INPUT number → IF number MOD 2 = 0 THEN output 'even' ELSE 'odd'.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Clear steps, correct logic.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Sequence — input, process, output.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Selection — IF/ELSE for even/odd.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) IF MOD 2 (b) sequence+selection",
            commonErrors: ["No pseudocode.", "Wrong structures."],
          },
        },
      ],
    },
    {
      id: "eiascs-u2-flowchart",
      title: "Flowcharts",
      skill: "Create and interpret flowcharts.",
      lesson: {
        sections: [
          {
            heading: "Flowchart symbols",
            body: "**Oval**: start/end. **Rectangle**: process/action. **Diamond**: decision — yes/no branches. **Parallelogram**: input/output. **Arrow**: flow direction. **Rectangle with sides**: predefined process/subroutine.\n\n**Rules**: one start, one end; decisions have two exits (yes/no); flow goes top-down or left-right.",
          },
          {
            heading: "Creating flowcharts",
            body: "**Top-down**: start at top, work down. **Break complex**: use subroutines for complex parts. **Label clearly**: decisions labeled 'yes'/'no'.\n\n**Example**: login system — start → input credentials → IF correct THEN access ELSE retry.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Diamond symbol in flowchart. Purpose?",
          solution: "Decision point.",
        },
      },
      questions: [
        {
          id: "eiascs-u2-flow-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a diamond represent in flowchart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start/end" },
              { id: "b", text: "Decision" },
              { id: "c", text: "Process" },
              { id: "d", text: "Input/output" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diamond", statement: "Decision." },
            ],
            steps: [
              { reasoning: "Diamond = decision.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Decision",
            commonErrors: ["Oval confused."],
          },
        },
        {
          id: "eiascs-u2-flow-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two flowchart symbols and uses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flowchart symbols",
                statement: "Oval, rectangle, diamond.",
              },
            ],
            steps: [
              { reasoning: "Oval — start/end.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Rectangle — process/action.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Diamond — decision.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Oval, rectangle, diamond, parallelogram.",
            commonErrors: ["Only one.", "Wrong symbol."],
          },
        },
        {
          id: "eiascs-u2-flow-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why flowcharts are useful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flowchart benefits",
                statement: "Visual + clear.",
              },
            ],
            steps: [
              {
                reasoning: "Visual representation — easier to understand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identifies errors — see logic flaws.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Communication — share with others.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Documentation — record of algorithm.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Visual+identify errors+communication.",
            commonErrors: ["No benefit.", "One benefit."],
          },
        },
        {
          id: "eiascs-u2-flow-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Draw flowchart for: input age, IF age >= 18 output 'adult' ELSE 'minor'.",
          parts: [
            { label: "a", prompt: "List symbols in order.", marks: 4 },
            { label: "b", prompt: "Explain decision branches.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flowchart creation",
                statement: "Symbols + logic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Oval(start) → parallelogram(input age) → diamond(age>=18?).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) → rectangle(output) → oval(end).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Yes branch → 'adult'; No branch → 'minor'.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Two paths — both lead to end.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) oval→parallelogram→diamond→rectangle→oval (b) yes=adult, no=minor",
            commonErrors: ["Wrong symbols.", "No branches."],
          },
        },
      ],
    },
    {
      id: "eiascs-u2-problem",
      title: "Problem Solving and Decomposition",
      skill: "Apply decomposition and abstraction to programming problems.",
      lesson: {
        sections: [
          {
            heading: "Decomposition",
            body: "**Breaking down**: complex problem → smaller sub-problems — each solvable. **Example**: build website → design, code, test, deploy — each sub-problem addressed separately.\n\n**Benefits**: easier to manage, test individually, reuse parts, parallel work.",
          },
          {
            heading: "Abstraction",
            body: "**Focusing on essentials**: ignore unnecessary details — model only what's needed. **Example**: map shows roads, not every building — abstraction of reality. **Levels**: high-level (what) vs low-level (how).\n\n**Evaluation**: abstraction simplifies but may hide important details — balance needed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Solve 'sort list' by splitting into smaller sorts. Technique?",
          solution: "Decomposition.",
        },
      },
      questions: [
        {
          id: "eiascs-u2-prob-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is decomposition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making problem harder" },
              { id: "b", text: "Breaking into sub-problems" },
              { id: "c", text: "Ignoring details" },
              { id: "d", text: "Writing code" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decomposition",
                statement: "Break down.",
              },
            ],
            steps: [
              {
                reasoning: "Decomposition = break into parts.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Break down",
            commonErrors: ["Abstraction confused."],
          },
        },
        {
          id: "eiascs-u2-prob-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of decomposition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decomposition benefits",
                statement: "Manage + test.",
              },
            ],
            steps: [
              {
                reasoning: "Easier to manage — smaller problems.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Test individually — find errors faster.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reuse parts — modules, functions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Manage, test, reuse.",
            commonErrors: ["Only one.", "Wrong benefit."],
          },
        },
        {
          id: "eiascs-u2-prob-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain abstraction with example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Abstraction",
                statement: "Essentials only.",
              },
            ],
            steps: [
              {
                reasoning: "Focus on essential features, ignore details.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: map shows roads, not buildings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: car interface — steering, pedals, not engine details.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Simplifies understanding and use.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Essentials only — map/car examples.",
            commonErrors: ["Include everything.", "No example."],
          },
        },
        {
          id: "eiascs-u2-prob-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Build a program to calculate exam average.",
          parts: [
            { label: "a", prompt: "Decompose into sub-problems.", marks: 4 },
            { label: "b", prompt: "Explain abstraction level.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Problem solving",
                statement: "Decompose + abstract.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Input scores → sum → count → divide → output.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Each step is sub-problem — input, process, output.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Abstract: 'get average' not 'how to add numbers'.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Focus on result — ignore input method details.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) input+sum+divide+output (b) average not details",
            commonErrors: ["No decomposition.", "Too detailed."],
          },
        },
      ],
    },
  ],
};
