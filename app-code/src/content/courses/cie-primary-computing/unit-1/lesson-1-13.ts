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
                              "text": "A named storage that holds a changeable value"
                    },
                    {
                              "id": "b",
                              "text": "A type of computer"
                    },
                    {
                              "id": "c",
                              "text": "A network cable"
                    },
                    {
                              "id": "d",
                              "text": "A screen colour"
                    }
          ],
          "correctChoiceId": "a"
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
