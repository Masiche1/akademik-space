import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "ecs10-u2-lesson-2-1",
  code: "2-1",
  title: "Algorithms and Decomposition",
  goal: "I CAN define algorithms and break problems into sub-problems.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming"],
  vocabulary: [
    {
      term: "Algorithm",
      definition: "Step-by-step procedure to solve a problem.",
    },
    {
      term: "Decomposition",
      definition: "Breaking a problem into smaller sub-problems.",
    },
    {
      term: "Abstraction",
      definition: "Focusing on key details, hiding complexity.",
    },
    { term: "Sequence", definition: "Instructions executed in order." },
    { term: "Iteration", definition: "Repeating instructions (loops)." },
  ],
  concepts: [
    {
      id: "ecs10-u2-algorithms",
      title: "Algorithms and Computational Thinking",
      skill: "Define algorithms and apply decomposition/abstraction.",
      lesson: {
        sections: [
          {
            heading: "What is an algorithm?",
            body: "**Algorithm**: finite sequence of unambiguous steps solving a problem — like a recipe. **Properties**: finite (ends), definite (no ambiguity), effective (solves problem), input/output defined.\n\n**Computational thinking**: decomposition (break down), pattern recognition, abstraction (ignore irrelevant detail), algorithm design.",
          },
          {
            heading: "Decomposition example",
            body: "**Problem**: build a website. **Decompose**: design layout, write content, code pages, test, deploy. Each sub-problem solved separately then combined.\n\n**Abstraction**: when designing a login system, focus on 'verify credentials' — ignore how encryption works internally.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write an algorithm for making a cup of tea.",
          solution:
            "1. Boil water 2. Add teabag 3. Pour water 4. Wait 3 min 5. Remove bag.",
        },
      },
      questions: [
        {
          id: "ecs10-u2-algorithms-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an algorithm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A computer language" },
              { id: "b", text: "A network protocol" },
              { id: "c", text: "Step-by-step procedure to solve a problem" },
              { id: "d", text: "A hardware device" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Algorithm",
                statement: "Step-by-step procedure.",
              },
            ],
            steps: [
              {
                reasoning: "Algorithm = ordered steps.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Step-by-step procedure",
            commonErrors: ["Language confused."],
          },
        },
        {
          id: "ecs10-u2-algorithms-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is decomposition? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decomposition",
                statement: "Break into sub-problems.",
              },
            ],
            steps: [
              {
                reasoning: "Breaking a large problem into smaller parts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each part solved independently then combined.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: website → layout, content, code, test.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Break problem into sub-problems — e.g., website parts.",
            commonErrors: ["Abstraction confused.", "No example."],
          },
        },
        {
          id: "ecs10-u2-algorithms-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what makes an algorithm 'definite'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Definite algorithm",
                statement: "No ambiguity.",
              },
            ],
            steps: [
              {
                reasoning: "Each step has one clear interpretation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No vague terms like 'a bit' or 'wait a while'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Same input → same output every time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: 'wait 3 minutes' vs 'wait a bit'.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Unambiguous steps — same result every time.",
            commonErrors: ["Vague definition.", "No example."],
          },
        },
        {
          id: "ecs10-u2-algorithms-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school wants to automate attendance recording.",
          parts: [
            {
              label: "a",
              prompt: "Decompose this into three sub-problems.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Write an algorithm for one sub-problem.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Problem solving",
                statement: "Decompose then algorithm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) ID scanning, record storage, report generation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Any three sensible sub-problems.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Clear ordered steps for chosen sub-problem.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Steps definite and complete.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) 3 sub-problems (b) definite algorithm",
            commonErrors: ["No decomposition.", "Ambiguous steps."],
          },
        },
      ],
    },
    {
      id: "ecs10-u2-flowchart",
      title: "Flowcharts and Pseudocode",
      skill: "Represent algorithms using flowchart symbols and pseudocode.",
      lesson: {
        sections: [
          {
            heading: "Flowchart symbols",
            body: "**Oval**: start/end. **Rectangle**: process/action. **Diamond**: decision (yes/no). **Parallelogram**: input/output. **Arrow**: flow direction.\n\n**Example**: login system — oval start → parallelogram input username → diamond 'correct?' → rectangle grant access or rectangle deny.",
          },
          {
            heading: "Pseudocode",
            body: "Plain-English algorithm notation — closer to code but language-independent. **Keywords**: INPUT, OUTPUT, IF...THEN...ELSE, WHILE, FOR, DECLARE.\n\nExample: `INPUT password` `IF password = correct THEN OUTPUT 'Welcome' ELSE OUTPUT 'Denied'`.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Draw flowchart for 'is number positive?'",
          solution:
            "Start → input number → diamond 'n>0?' → yes: output 'positive' / no: output 'not positive' → end.",
        },
      },
      questions: [
        {
          id: "ecs10-u2-flowchart-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a diamond shape represent in a flowchart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start/end" },
              { id: "b", text: "Process" },
              { id: "c", text: "Decision" },
              { id: "d", text: "Input" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diamond",
                statement: "Decision point.",
              },
            ],
            steps: [
              { reasoning: "Diamond = decision.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Decision",
            commonErrors: ["Rectangle confused."],
          },
        },
        {
          id: "ecs10-u2-flowchart-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write pseudocode to check if a number is even.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pseudocode",
                statement: "INPUT, IF, MOD.",
              },
            ],
            steps: [
              { reasoning: "INPUT number.", marks: 1, markCode: "AO2" },
              {
                reasoning: "IF number MOD 2 = 0 THEN OUTPUT 'even'.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "ELSE OUTPUT 'odd'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "INPUT n; IF n MOD 2 = 0 → 'even' ELSE 'odd'",
            commonErrors: ["Wrong logic.", "No input."],
          },
        },
        {
          id: "ecs10-u2-flowchart-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a flowchart and pseudocode.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Flowchart vs pseudocode",
                statement: "Visual vs text.",
              },
            ],
            steps: [
              {
                reasoning: "Flowchart: visual symbols showing flow.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pseudocode: text-based, closer to programming.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both represent same algorithm logic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Flowchart better for branching; pseudocode for detail.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Visual symbols vs text notation — same logic.",
            commonErrors: ["Same thing.", "No difference."],
          },
        },
        {
          id: "ecs10-u2-flowchart-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write an algorithm (pseudocode) to find the largest of three numbers.",
          parts: [
            { label: "a", prompt: "Write the pseudocode.", marks: 4 },
            { label: "b", prompt: "Identify where decisions occur.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Algorithm design",
                statement: "INPUT, compare, OUTPUT.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) INPUT a,b,c; IF a>b AND a>c THEN largest=a etc.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct logic and output.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Two IF decisions — comparisons.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Each decision has branches for largest.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) compare-and-select pseudocode (b) IF decisions",
            commonErrors: ["No comparisons.", "Wrong logic."],
          },
        },
      ],
    },
    {
      id: "ecs10-u2-logic",
      title: "Selection and Iteration",
      skill: "Use IF/ELSE and loops in algorithms.",
      lesson: {
        sections: [
          {
            heading: "Selection",
            body: "**IF...THEN...ELSE**: executes different paths based on condition. **IF (no ELSE)**: executes only if condition true. **Nested IF**: decisions within decisions.\n\nExample: `IF score >= 50 THEN OUTPUT 'Pass' ELSE OUTPUT 'Fail'`.",
          },
          {
            heading: "Iteration",
            body: "**Count-controlled (FOR)**: repeat fixed number of times — `FOR i = 1 TO 10`. **Condition-controlled (WHILE)**: repeat while condition true — `WHILE balance > 0`. **Infinite loop risk**: WHILE without proper exit.\n\n**Nested loops**: loops inside loops — e.g., print 5×5 grid.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Print numbers 1 to 5 using FOR loop.",
          solution: "FOR i = 1 TO 5 DO OUTPUT i",
        },
      },
      questions: [
        {
          id: "ecs10-u2-logic-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between FOR and WHILE loops?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same thing" },
              { id: "b", text: "WHILE can't loop" },
              { id: "c", text: "FOR is faster" },
              { id: "d", text: "FOR = fixed count; WHILE = condition-based" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FOR vs WHILE",
                statement: "Count vs condition.",
              },
            ],
            steps: [
              {
                reasoning: "FOR = count; WHILE = condition.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Count vs condition",
            commonErrors: ["Same confused."],
          },
        },
        {
          id: "ecs10-u2-logic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write pseudocode to output 'Even' or 'Odd' for input number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "IF/ELSE",
                statement: "Condition → branches.",
              },
            ],
            steps: [
              { reasoning: "INPUT n.", marks: 1, markCode: "AO2" },
              {
                reasoning:
                  "IF n MOD 2 = 0 THEN OUTPUT 'Even' ELSE OUTPUT 'Odd'.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "INPUT n; IF n MOD 2=0 → 'Even' ELSE 'Odd'",
            commonErrors: ["Wrong condition.", "No else."],
          },
        },
        {
          id: "ecs10-u2-logic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a WHILE loop might never end.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Infinite loop",
                statement: "Condition never false.",
              },
            ],
            steps: [
              {
                reasoning: "Condition inside loop never becomes false.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Variable not updated or wrong condition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: `WHILE x > 0` without changing x.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Program hangs — must ensure exit condition reachable.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Condition never false → infinite loop.",
            commonErrors: ["No example.", "FOR confused."],
          },
        },
        {
          id: "ecs10-u2-logic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write pseudocode to calculate sum of numbers 1 to 100.",
          parts: [
            { label: "a", prompt: "Write the pseudocode.", marks: 4 },
            {
              label: "b",
              prompt: "Explain the loop variable's role.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Accumulation loop",
                statement: "sum += i.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) DECLARE sum=0; FOR i=1 TO 100 DO sum=sum+i; OUTPUT sum.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct accumulation and output.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) i tracks current number 1-100.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) sum accumulates each value.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) FOR loop accumulating sum (b) i iterates, sum accumulates",
            commonErrors: ["No accumulation.", "Wrong bounds."],
          },
        },
      ],
    },
  ],
};
