import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "cipc-u1-lesson-1-7",
  code: "1-7",
  title: "Stage 3 — Logical Thinking and Conditions",
  goal: "I CAN use IF/ELSE decisions in programs and explain how computers make choices.",
  standards: ["Cambridge Primary Computing 0059 Stage 3: computational thinking", "Cambridge Primary Computing 0059 framework strands: Computational thinking"],
  stage: 3,
  vocabulary: [
    { term: "Condition", definition: "A rule that can be true or false, e.g. 'score > 10'." },
    { term: "IF", definition: "A block that runs instructions only when a condition is true." },
    { term: "ELSE", definition: "The instructions that run when the IF condition is false." },
    { term: "Decision", definition: "Choosing between actions based on a condition." },
    { term: "Boolean", definition: "A value that is either true or false." },
    { term: "Branch", definition: "A different path a program can take." },
  ],
  concepts: [
    {
      id: "cipc-u1-s3-logic",
      title: "Conditions and decisions",
      skill: "Write IF/ELSE logic and trace program branches at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Decisions in programs",
            body: "Real programs must decide things: 'IF score > 10 THEN say well done ELSE say try again'. The condition is checked first — if true, the IF instructions run; if false, the ELSE instructions run. Computers make decisions by checking conditions that are either true or false.",
          },
          {
            heading: "Reading conditions",
            body: "Conditions compare values: 'score > 10' means greater than, '<' less than, '=' equal. Trace programs by checking each condition in order and following the correct branch.",
          },
        ],
        keyFormulas: [
          { name: "IF/ELSE", statement: "true → IF branch; false → ELSE branch" },
          { name: "Condition", statement: "comparison that is true or false" },
        ],
        workedExample: {
          problem: "Score = 15. What does 'IF score > 10 THEN say YES ELSE say NO' output?",
          solution: "15 > 10 is true → output is YES.",
        },
      },
      questions: [
        {
          id: "cipc-u1-cd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a program, what does an IF block do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeats forever"
                    },
                    {
                              "id": "b",
                              "text": "Deletes the program"
                    },
                    {
                              "id": "c",
                              "text": "Speeds up the computer"
                    },
                    {
                              "id": "d",
                              "text": "Runs instructions only if a condition is true"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IF",
                              "statement": "Conditional execution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IF runs only when its condition is true.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Runs when condition is true"
},
        },
        {
          id: "cipc-u1-cd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Score = 8. For 'IF score > 10 THEN say YES ELSE say NO', what is output? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Tracing conditions",
                              "statement": "Check true/false."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 > 10 is false.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "ELSE branch runs → NO.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "NO"
},
        },
        {
          id: "cipc-u1-cd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write an IF/ELSE that makes a sprite say 'warm' if temperature > 20 and 'cold' otherwise. What happens at temperature = 20?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "IF/ELSE logic",
                              "statement": "Conditional branches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IF temp > 20 THEN say warm ELSE say cold.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "20 > 20 is false → says cold.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains boundary behaviour.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "warm if >20 else cold; at 20 says cold"
},
        },
        {
          id: "cipc-u1-cd-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define condition and Boolean. (b) What do '>' '<' '=' mean? (c) Trace: score=12, 'IF score >= 10 THEN add point ELSE lose point'. (d) When does ELSE run? (e) Give a real example needing a decision. (f) What is a branch? (g) Can a condition be 'maybe'? Explain. (h) Design an IF/ELSE for a game: player has 3 lives.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Logic and conditions",
                              "statement": "Comparisons, branches, decisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Condition=true/false test; Boolean=true/false value.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) greater than, less than, equal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 12>=10 true → add point.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) When IF condition is false.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid decision example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Alternative program path.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) No — conditions are only true or false.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid IF/ELSE for lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Conditions, comparisons, tracing, ELSE, branches, Boolean logic."
},
        },
        {
          id: "cipc-u1-cd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a program, what does an ELSE block do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stops the program" },
            { id: "b", text: "Repeats the IF forever" },
            { id: "c", text: "Always runs first" },
            { id: "d", text: "Runs only when the IF condition is false" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "ELSE", statement: "Runs when condition is false." }],
            steps: [
              { reasoning: "ELSE provides the 'otherwise' path when the IF condition fails.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Runs only when the IF condition is false",
          },
        },
        {
          id: "cipc-u1-cd-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What do the symbols '>' and '<' mean in a condition?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Comparison operators", statement: "Greater than / less than." }],
            steps: [
              { reasoning: "'>' means greater than.", marks: 1, markCode: "M" },
              { reasoning: "'<' means less than.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "> = greater than, < = less than.",
          },
        },
        {
          id: "cipc-u1-cd-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "x = 7. For the program 'IF x > 5 THEN say BIG ELSE say SMALL', what is said?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Tracing IF", statement: "Check condition, run matching branch." }],
            steps: [
              { reasoning: "7 > 5 is true, so the IF branch runs: 'say BIG'.", marks: 1, markCode: "M" },
              { reasoning: "1 output: BIG.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "BIG",
          },
        },
        {
          id: "cipc-u1-cd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which condition is TRUE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "10 > 4" },
            { id: "b", text: "8 = 8 is false" },
            { id: "c", text: "3 > 9" },
            { id: "d", text: "5 < 2" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluating conditions", statement: "Compare values." }],
            steps: [
              { reasoning: "10 > 4 is true; the others are false.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** 10 > 4",
          },
        },
        {
          id: "cipc-u1-cd-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trace this program: score = 9; IF score >= 10 THEN add 1 point ELSE say 'try again'. What happens and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tracing conditions", statement: "Evaluate condition then branch." }],
            steps: [
              { reasoning: "Condition: 9 >= 10 is false.", marks: 1, markCode: "M" },
              { reasoning: "ELSE branch runs: 'say try again'.", marks: 1, markCode: "M" },
              { reasoning: "No point is added because the score did not reach 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Says 'try again'; no point added.",
          },
        },
        {
          id: "cipc-u1-cd-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why do programmers check the most specific condition first in a chain of IF statements?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Order never matters in IF chains" },
            { id: "b", text: "It makes the program shorter" },
            { id: "c", text: "Specific conditions always run faster" },
            { id: "d", text: "A general condition checked first could catch cases meant for later checks" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Condition order", statement: "First true condition wins." }],
            steps: [
              { reasoning: "Once a condition is true its branch runs — later checks are skipped.", marks: 1, markCode: "M" },
              { reasoning: "Specific-first prevents a broad condition 'stealing' special cases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Broad conditions could catch special cases first",
          },
        },
        {
          id: "cipc-u1-cd-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Program: 'IF age >= 13 THEN say TEEN ELSE say CHILD'. Trace it for age = 13 and for age = 12.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Boundary tracing", statement: "Check >= carefully at the limit." }],
            steps: [
              { reasoning: "age = 13: 13 >= 13 is true → 'TEEN'.", marks: 1, markCode: "M" },
              { reasoning: "age = 12: 12 >= 13 is false → 'CHILD'.", marks: 1, markCode: "M" },
              { reasoning: ">= includes the boundary value 13 itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13 → TEEN; 12 → CHILD.",
          },
        },
        {
          id: "cipc-u1-cd-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give one real-life example where you make a decision using an IF/ELSE rule.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Real-life decisions", statement: "If rain then take umbrella else go without." }],
            steps: [
              { reasoning: "Valid example: 'If it is raining, take an umbrella; else don't'.", marks: 1, markCode: "M" },
              { reasoning: "Clear condition and two possible actions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. if raining take umbrella else don't.",
          },
        },
        {
          id: "cipc-u1-cd-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "lives = 2. Program: 'IF lives > 0 THEN say PLAY ELSE say GAME OVER'. What is said? If lives changes to 0, what is said then?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tracing with changing values", statement: "Re-evaluate condition each run." }],
            steps: [
              { reasoning: "lives = 2: 2 > 0 true → 'PLAY'.", marks: 1, markCode: "M" },
              { reasoning: "lives = 0: 0 > 0 false → 'GAME OVER'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "PLAY, then GAME OVER.",
          },
        },
        {
          id: "cipc-u1-cd-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement about conditions is TRUE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "ELSE always runs before IF" },
            { id: "b", text: "A condition can only be true or false" },
            { id: "c", text: "A condition can be 'maybe'" },
            { id: "d", text: "Conditions cannot compare numbers" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Boolean conditions", statement: "True or false only." }],
            steps: [
              { reasoning: "Conditions are Boolean: only true or false, never 'maybe'.", marks: 1, markCode: "M" },
              { reasoning: "They can compare numbers (>, <, =) and decide branches.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A condition can only be true or false",
          },
        },
        {
          id: "cipc-u1-cd-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Design an IF/ELSE for this rule: 'If the player has 3 or more coins, the shopkeeper says THANK YOU; otherwise the shopkeeper says COME BACK LATER.' Write the condition and both branches.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Designing IF/ELSE", statement: "Condition + two branches." }],
            steps: [
              { reasoning: "Condition: coins >= 3.", marks: 1, markCode: "M" },
              { reasoning: "IF branch: say 'THANK YOU'; ELSE branch: say 'COME BACK LATER'.", marks: 1, markCode: "M" },
              { reasoning: "Complete IF/ELSE covering both cases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "IF coins >= 3 THEN say THANK YOU ELSE say COME BACK LATER.",
          },
        },
        {
          id: "cipc-u1-cd-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define condition and Boolean. (b) What do '>' '<' '=' mean? (c) Trace: score=12, 'IF score >= 10 THEN add point ELSE lose point'. (d) When does ELSE run? (e) Give a real example needing a decision. (f) What is a branch? (g) Can a condition be 'maybe'? Explain. (h) Design an IF/ELSE for a game: player has 3 lives.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Selection", statement: "Conditions, operators, tracing, branches." }],
            steps: [
              { reasoning: "(a) Condition = test that is true/false; Boolean = true/false value.", marks: 1, markCode: "M" },
              { reasoning: "(b) > greater than, < less than, = equal to.", marks: 1, markCode: "M" },
              { reasoning: "(c) 12 >= 10 true → add point.", marks: 1, markCode: "M" },
              { reasoning: "(d) ELSE runs when the IF condition is false.", marks: 1, markCode: "M" },
              { reasoning: "(e) e.g. umbrella if raining.", marks: 1, markCode: "M" },
              { reasoning: "(f) A branch = one of the paths (IF or ELSE) the program can take.", marks: 1, markCode: "M" },
              { reasoning: "(g) No — conditions are only true or false.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. IF lives > 0 THEN continue game ELSE game over.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Condition/Boolean, operators, trace, ELSE rule, real example, branches, no 'maybe', lives IF/ELSE.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-cd-notes",
      title: "Conditions — notes",
      summary: "IF runs when condition true; ELSE when false. Conditions are true/false only.",
      sections: [
        { heading: "Key idea", body: "Programs decide by checking conditions — trace carefully." },
        { heading: "Comparisons", body: "> greater, < less, = equal, >= at least." },
      ],
    },
  ],
};
