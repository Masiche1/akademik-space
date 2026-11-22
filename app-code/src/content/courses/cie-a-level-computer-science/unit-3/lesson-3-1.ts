import type { Lesson } from "../../../types.ts";

export const lesson141: Lesson = {
  id: "ciealc-u3-lesson-3-1",
  code: "3-1",
  title: "Algorithm Design and Representation",
  goal: "I CAN design algorithms using flowcharts, pseudocode and top-down decomposition.",
  standards: [
    "Cambridge A Level Computer Science 9618: algorithms",
    "9618: algorithm design",
  ],

  vocabulary: [
    {
      term: "Algorithm",
      definition: "Step-by-step procedure to solve a problem.",
    },
    { term: "Flowchart", definition: "Visual diagram of algorithm steps." },
    {
      term: "Pseudocode",
      definition: "Text representation of algorithm logic.",
    },
    {
      term: "Decomposition",
      definition: "Breaking problems into smaller sub-problems.",
    },
    {
      term: "Abstraction",
      definition: "Focusing on essential details, ignoring others.",
    },
    {
      term: "Dry run",
      definition: "Manually tracing algorithm with sample data.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u3-s1-algo",
      title: "Algorithm design",
      skill: "Represent algorithms with flowcharts and pseudocode.",
      lesson: {
        sections: [
          {
            heading: "Algorithm representations",
            body: "Flowchart: standard symbols (oval=start/end, rectangle=process, diamond=decision, parallelogram=input/output, arrow=flow). Pseudocode: structured text with keywords (INPUT, OUTPUT, IF, FOR, WHILE, CALL).",
          },
          {
            heading: "Decomposition and abstraction",
            body: "Decompose complex problems into sub-problems (functions). Abstract: focus on what matters, hide implementation details. Both make problems tractable.",
          },
        ],
        keyFormulas: [
          {
            name: "Flowchart symbols",
            statement: "oval/rect/diamond/parallelogram/arrow",
          },
          { name: "Decomposition", statement: "break into sub-problems" },
          { name: "Abstraction", statement: "hide non-essential details" },
        ],
        workedExample: {
          problem: "Write pseudocode to check if a number is prime.",
          solution:
            "INPUT n; IF n < 2 THEN OUTPUT 'not prime'; ELSE count = 0; FOR i = 2 TO n-1 DO IF n MOD i = 0 THEN count = count + 1; ENDIF; ENDFOR; IF count = 0 THEN OUTPUT 'prime' ELSE OUTPUT 'not prime'; ENDIF; ENDIF.",
        },
      },
      questions: [
        {
          id: "ciealc-u3-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an algorithm?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of computer",
              },
              {
                id: "b",
                text: "Step-by-step procedure to solve a problem",
              },
              {
                id: "c",
                text: "A programming language",
              },
              {
                id: "d",
                text: "A network protocol",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Algorithm",
                statement: "Problem-solving procedure.",
              },
            ],
            steps: [
              {
                reasoning: "Algorithm = precise step-by-step solution.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Step-by-step procedure",
          },
        },
        {
          id: "ciealc-u3-al-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name 3 flowchart symbols and their meanings.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Flowchart symbols",
                statement: "Standard symbols.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Three valid symbols (e.g. diamond=decision, rectangle=process).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All correctly named.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Three flowchart symbols",
          },
        },
        {
          id: "ciealc-u3-al-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is decomposition and why is it useful?",
          response: {
            type: "open",
          },
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
                reasoning: "Decomposition = breaking into smaller parts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Makes complex problems manageable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enables testing and reuse.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Break into sub-problems",
          },
        },
        {
          id: "ciealc-u3-al-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define algorithm, flowchart, pseudocode, decomposition, abstraction, dry run. (b) What do these symbols mean: oval, rectangle, diamond, parallelogram? (c) Write pseudocode for 'output 'Hello' three times'. (d) Decompose 'sort a list' into sub-problems. (e) Why use pseudocode over code? (f) What is abstraction? (g) Dry-run: n=3, find factorial. (h) Design flowchart for 'is number even?'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Algorithms",
                statement: "Design, representation, decomposition.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Correct symbol meanings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid pseudocode for 3 outputs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Valid decomposition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Language-independent, clearer logic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Focus on essentials, hide details.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Correct dry-run trace.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid flowchart design.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Algorithm design and representation.",
          },
        },
        {
          id: "ciealc-u3-al-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a flowchart, which symbol represents a decision point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oval" },
              { id: "b", text: "Diamond" },
              { id: "c", text: "Parallelogram" },
              { id: "d", text: "Rectangle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flowchart symbols",
                statement: "Diamond = decision.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The diamond shape marks where a condition is tested.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Diamond",
          },
        },
        {
          id: "ciealc-u3-al-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pseudocode loop is written as FOR i = 1 TO 10. How many times does the loop body execute? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "FOR loop count",
                statement: "Iterations = end − start + 1.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "i runs from 1 to 10 inclusive: 10 iterations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "ciealc-u3-al-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which flowchart symbol is used for input and output operations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diamond" },
              { id: "b", text: "Oval" },
              { id: "c", text: "Parallelogram" },
              { id: "d", text: "Rectangle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flowchart symbols",
                statement: "Parallelogram = input/output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The slanted parallelogram represents data entering or leaving the system.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** Parallelogram",
          },
        },
        {
          id: "ciealc-u3-al-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pseudocode: count = 0; FOR i = 1 TO 5 DO count = count + 1; ENDFOR. What value does count hold at the end? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pseudocode trace",
                statement: "Loop increments count once per iteration.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The loop runs 5 times, adding 1 each time: count = 5.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "ciealc-u3-al-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between decomposition and abstraction in algorithm design.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decomposition vs abstraction",
                statement: "Break into parts vs hide details.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Decomposition breaks a complex problem into smaller sub-problems (e.g. functions).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Abstraction hides non-essential implementation details to focus on what matters.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Decompose=split; abstract=hide details",
          },
        },
        {
          id: "ciealc-u3-al-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a flowchart, what does the oval (terminator) symbol represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "User input only" },
              { id: "b", text: "A calculation step" },
              { id: "c", text: "A loop counter" },
              { id: "d", text: "The start or end of the algorithm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flowchart symbols",
                statement: "Oval = start/end.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The oval terminator marks where the flowchart begins and ends.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Start or end",
          },
        },
        {
          id: "ciealc-u3-al-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Pseudocode: x = 1; FOR i = 1 TO 3 DO FOR j = 1 TO 2 DO x = x + 1; ENDFOR; ENDFOR. What value does x hold at the end? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Nested loop trace",
                statement: "Inner loop runs once per outer iteration.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Inner loop adds 1 twice per outer iteration: 3 × 2 = 6 additions; x = 1 + 6 = 7.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "ciealc-u3-al-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write pseudocode that calculates and outputs the sum of the integers from 1 to 10.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pseudocode construction",
                statement: "Use accumulator variable and FOR loop.",
              },
            ],
            steps: [
              {
                reasoning: "Initialise an accumulator, e.g. total = 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use FOR i = 1 TO 10 DO total = total + i; ENDFOR.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "OUTPUT total.", marks: 1, markCode: "M" },
            ],
            finalAnswer:
              "total = 0; FOR i = 1 TO 10 DO total = total + i; ENDFOR; OUTPUT total",
          },
        },
        {
          id: "ciealc-u3-al-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pseudocode keyword is used for conditional selection (executing code only when a condition is true)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DECLARE" },
              { id: "b", text: "IF ... THEN ... ELSE ... ENDIF" },
              { id: "c", text: "STOP" },
              { id: "d", text: "PRINT" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pseudocode keywords",
                statement: "IF/THEN/ELSE for selection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "IF ... THEN ... ELSE ... ENDIF implements conditional selection.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** IF ... THEN ... ELSE ... ENDIF",
          },
        },
        {
          id: "ciealc-u3-al-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many standard flowchart symbols are listed in the lesson: oval, rectangle, diamond, parallelogram and arrow? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Flowchart symbols",
                statement: "Five standard symbols.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Oval, rectangle, diamond, parallelogram and arrow = 5 symbols.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "ciealc-u3-al-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write pseudocode that inputs three numbers a, b and c and outputs the largest of the three.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Selection logic",
                statement: "Compare values with IF statements.",
              },
            ],
            steps: [
              {
                reasoning: "INPUT a, b, c and initialise max = a.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "IF b > max THEN max = b; IF c > max THEN max = c (with ENDIFs).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "OUTPUT max.", marks: 1, markCode: "M" },
            ],
            finalAnswer:
              "max = a; IF b > max THEN max = b; IF c > max THEN max = c; OUTPUT max",
          },
        },
        {
          id: "ciealc-u3-al-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "In algorithm design, what does abstraction mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing the longest possible algorithm" },
              {
                id: "b",
                text: "Focusing on essential details while hiding non-essential implementation",
              },
              { id: "c", text: "Using as many variables as possible" },
              { id: "d", text: "Removing all decisions from the algorithm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Abstraction",
                statement: "Hide non-essential details.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Abstraction keeps only what matters for the problem at hand.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Focus on essential details",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u3-al-notes",
      title: "Algorithms — notes",
      summary:
        "Algorithms=step-by-step solutions; flowcharts/pseudocode represent them; decompose complex problems.",
      sections: [
        {
          heading: "Key idea",
          body: "Good algorithms are precise, efficient and testable.",
        },
        {
          heading: "Flowcharts",
          body: "Standard symbols enable universal understanding.",
        },
      ],
    },
  ],
};
