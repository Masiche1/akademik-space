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
                              "text": "Runs instructions only if a condition is true"
                    },
                    {
                              "id": "b",
                              "text": "Repeats forever"
                    },
                    {
                              "id": "c",
                              "text": "Deletes the program"
                    },
                    {
                              "id": "d",
                              "text": "Speeds up the computer"
                    }
          ],
          "correctChoiceId": "a"
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
