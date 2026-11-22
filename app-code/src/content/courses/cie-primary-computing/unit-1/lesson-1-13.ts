import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cipc-u1-lesson-1-13",
  code: "1-13",
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
  concepts: [
    {
      id: "cipc-u1-s3-var",
      title: "Variables in programs",
      skill: "Create, assign and update variables at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "What is a variable?",
            body: "A variable is a named storage box for a value that can change. 'score = 0' creates a variable called score holding 0. Later 'change score by 10' updates it to 10. Variables let programs remember and update information.",
          },
          {
            heading: "Using variables",
            body: "Always initialise variables before use — set a starting value. Use clear names: 'score' not 'x'. Variables can hold numbers or text. Update them with 'set to' or 'change by' blocks.",
          },
        ],
        keyFormulas: [
          { name: "Variable", statement: "named storage; value can change" },
          { name: "score = 0", statement: "initialise before use" },
        ],
        workedExample: {
          problem: "score = 5, then 'change score by 3'. What is score now? What if you do it twice?",
          solution: "score = 8 after first change; 11 after second. Each 'change by' adds to current value.",
        },
      },
      questions: [
        {
          id: "cipc-u1-vr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a variable?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of computer"
                    },
                    {
                              "id": "b",
                              "text": "A named storage that holds a changeable value"
                    },
                    {
                              "id": "c",
                              "text": "A screen colour"
                    },
                    {
                              "id": "d",
                              "text": "A network cable"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Variable",
                              "statement": "Named changeable storage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variable stores a value that can be updated.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Named changeable storage"
},
        },
        {
          id: "cipc-u1-vr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'set score to 10' do? What does 'change score by 5' do after that?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Assign and update",
                              "statement": "Set vs change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sets score = 10.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Adds 5 → score = 15.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "score=10; then 15"
},
        },
        {
          id: "cipc-u1-vr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why initialise variables before using them? What happens if 'lives' is never set and the program says 'change lives by -1'?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Initialisation",
                              "statement": "Start values needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variables need a known starting value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Undefined/empty value → error or unpredictable result.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fix: set lives to a starting number first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Need start value; undefined → error"
},
        },
        {
          id: "cipc-u1-vr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define variable. (b) What is the difference between 'set' and 'change by'? (c) lives=3; change lives by -1 twice — value? (d) Why use clear variable names? (e) Can variables store text? Give example. (f) What is initialisation? (g) Trace: score=0, change by 10, set to 5 — final score? (h) Design variables for a quiz game (score, question number).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Variables",
                              "statement": "Set/change, tracing, naming, types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Named changeable storage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Set=assign value; change by=add/subtract.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 3→2→1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Understandable programs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Yes — e.g. name='Sam'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Setting starting value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) 5 (set overwrites).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) score=0, question=1 initialised.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Variables, set vs change, tracing, naming, initialisation."
},
        },
        {
          id: "cipc-u1-vr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'set score to 10' do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Makes score equal to 10, whatever it was before" },
            { id: "b", text: "Shows score on screen" },
            { id: "c", text: "Subtracts 10 from score" },
            { id: "d", text: "Adds 10 to score" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Set", statement: "Assigns a value directly." }],
            steps: [
              { reasoning: "'set to' assigns the exact value, replacing the old one.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Makes score equal to 10",
          },
        },
        {
          id: "cipc-u1-vr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between 'set' and 'change by' for a variable?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Set vs change", statement: "Assign vs adjust." }],
            steps: [
              { reasoning: "'set' makes the variable equal to a value.", marks: 1, markCode: "M" },
              { reasoning: "'change by' adds/subtracts from the current value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Set = assign exact value; change by = adjust current value.",
          },
        },
        {
          id: "cipc-u1-vr-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "lives = 5. Run 'change lives by -2' once. What is lives now?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Change by", statement: "5 + (-2)." }],
            steps: [
              { reasoning: "5 - 2 = 3.", marks: 1, markCode: "M" },
              { reasoning: "lives is now 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipc-u1-vr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should variables have clear names like 'score' instead of 'x1'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Clear names make the program easier to read and debug" },
            { id: "b", text: "Names do not matter" },
            { id: "c", text: "Short names run faster" },
            { id: "d", text: "Computers require long names" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Naming variables", statement: "Readable names help understanding." }],
            steps: [
              { reasoning: "Clear names show what the variable holds — easier to read and fix.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Easier to read and debug",
          },
        },
        {
          id: "cipc-u1-vr-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trace this program: score = 0; change score by 10; change score by 5; set score to 20. What is the final score? Show each step.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tracing variables", statement: "Track value through each step." }],
            steps: [
              { reasoning: "score = 0 → 0.", marks: 1, markCode: "M" },
              { reasoning: "change by 10 → 10; change by 5 → 15.", marks: 1, markCode: "M" },
              { reasoning: "set to 20 → final score = 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cipc-u1-vr-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Can a variable store text as well as numbers? Give an example.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only if it is called 'text'" },
            { id: "b", text: "No — only numbers" },
            { id: "c", text: "Only on tablets" },
            { id: "d", text: "Yes — e.g. name = 'Sam'" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Variable types", statement: "Can store numbers and text." }],
            steps: [
              { reasoning: "Variables can store text (strings) as well as numbers.", marks: 1, markCode: "M" },
              { reasoning: "e.g. name = 'Sam' stores text.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Yes — e.g. name = 'Sam'",
          },
        },
        {
          id: "cipc-u1-vr-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is initialisation, and why must variables be initialised before use?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Initialisation", statement: "Setting a starting value." }],
            steps: [
              { reasoning: "Initialisation = giving a variable a starting value before the program uses it.", marks: 1, markCode: "M" },
              { reasoning: "Without it the variable has no defined value — 'change by' would be meaningless.", marks: 1, markCode: "M" },
              { reasoning: "e.g. 'lives' must start at 3 before 'change lives by -1'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Set a starting value first so changes make sense.",
          },
        },
        {
          id: "cipc-u1-vr-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A quiz game needs to remember the player's score and which question they are on. Name two variables it would need.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Designing variables", statement: "One variable per thing to remember." }],
            steps: [
              { reasoning: "score — to store points.", marks: 1, markCode: "M" },
              { reasoning: "question number (or level) — to track progress.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. score and question number.",
          },
        },
        {
          id: "cipc-u1-vr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "coins = 4. Run 'set coins to coins × 2'. What is coins now?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Self-reference", statement: "Uses current value on the right." }],
            steps: [
              { reasoning: "coins × 2 = 4 × 2 = 8.", marks: 1, markCode: "M" },
              { reasoning: "coins is now 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cipc-u1-vr-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement about variables is TRUE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A variable's value can change during the program" },
            { id: "b", text: "Variables are only for games" },
            { id: "c", text: "A variable can only hold one fixed number forever" },
            { id: "d", text: "Variables cannot store text" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Variables", statement: "Named storage whose value can change." }],
            steps: [
              { reasoning: "Variables hold values that can change as the program runs.", marks: 1, markCode: "M" },
              { reasoning: "They store numbers or text and are used in any program.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A variable's value can change",
          },
        },
        {
          id: "cipc-u1-vr-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A timer variable starts at 60 and 'change timer by -1' runs every second. After 10 seconds, what is the timer value?",
          response: { type: "numeric", parts: [{ label: "a", answer: 50 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Countdown", statement: "60 - (1 × 10)." }],
            steps: [
              { reasoning: "Each second subtracts 1: 10 × 1 = 10 total.", marks: 1, markCode: "M" },
              { reasoning: "60 - 10 = 50.", marks: 1, markCode: "M" },
              { reasoning: "Timer is 50 after 10 seconds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50",
          },
        },
        {
          id: "cipc-u1-vr-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define variable. (b) What is the difference between 'set' and 'change by'? (c) lives=3; change lives by -1 twice — value? (d) Why use clear variable names? (e) Can variables store text? Give example. (f) What is initialisation? (g) Trace: score=0, change by 10, set to 5 — final score? (h) Design variables for a quiz game (score, question number).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Variables", statement: "Definition, set vs change, tracing, naming, init." }],
            steps: [
              { reasoning: "(a) Named storage whose value can change.", marks: 1, markCode: "M" },
              { reasoning: "(b) Set=assign exact; change by=adjust current.", marks: 1, markCode: "M" },
              { reasoning: "(c) 3-1=2, 2-1=1.", marks: 1, markCode: "M" },
              { reasoning: "(d) Clear names make programs readable/debuggable.", marks: 1, markCode: "M" },
              { reasoning: "(e) Yes; e.g. name='Sam'.", marks: 1, markCode: "M" },
              { reasoning: "(f) Setting a starting value before use.", marks: 1, markCode: "M" },
              { reasoning: "(g) 0→10→5; final 5.", marks: 1, markCode: "M" },
              { reasoning: "(h) score and question_number variables.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Variable, set vs change, lives trace, naming, text storage, initialisation, score trace, quiz variables.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-vr-notes",
      title: "Variables — notes",
      summary: "Variable = named storage for changeable values. Set starting values; use clear names; 'set' assigns, 'change by' updates.",
      sections: [
        { heading: "Key idea", body: "Variables let programs remember scores, lives, names — anything that changes." },
        { heading: "Tip", body: "Initialise before use; trace each change carefully." },
      ],
    },
  ],
};
