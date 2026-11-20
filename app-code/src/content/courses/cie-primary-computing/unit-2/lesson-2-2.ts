import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cipc-u2-lesson-2-2",
  code: "2-2",
  title: "Stage 4 — Selection and IF/ELIF/ELSE",
  goal: "I CAN build multi-branch decisions using IF, ELIF and ELSE.",
  standards: ["Cambridge Primary Computing 0059 Stage 4: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
  stage: 4,
  vocabulary: [
    { term: "ELIF", definition: "Else-if — checks another condition if the first was false." },
    { term: "Nested IF", definition: "An IF inside another IF's branch." },
    { term: "Branch", definition: "One possible path through a decision." },
    { term: "Condition chain", definition: "Multiple conditions checked in order." },
    { term: "Priority", definition: "Order matters — first true condition wins." },
    { term: "Fall-through", definition: "When no condition matches, ELSE or nothing runs." },
  ],
  concepts: [
    {
      id: "cipc-u2-s4-select",
      title: "Multi-way selection",
      skill: "Write IF/ELIF/ELSE chains and trace which branch executes at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Multiple branches",
            body: "ELIF lets you check several conditions in order: 'IF score >= 90 THEN say A ELIF score >= 80 THEN say B ELSE say C'. The first true condition runs; later ones are skipped. Order matters — check the most specific conditions first.",
          },
          {
            heading: "Reading decision trees",
            body: "Trace by evaluating each condition top to bottom until one is true. If none match and there's an ELSE, that runs. Nested IFs put decisions inside decisions — powerful but harder to debug.",
          },
        ],
        keyFormulas: [
          { name: "IF/ELIF/ELSE", statement: "first true condition wins" },
          { name: "Order", statement: "check specific conditions before general ones" },
        ],
        workedExample: {
          problem: "score = 85. IF score >= 90 THEN 'A' ELIF score >= 80 THEN 'B' ELSE 'C'. What prints?",
          solution: "85 >= 90 false → check ELIF: 85 >= 80 true → prints B.",
        },
      },
      questions: [
        {
          id: "cipc-u2-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does ELIF do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Checks another condition if earlier ones were false"
                    },
                    {
                              "id": "b",
                              "text": "Repeats a loop"
                    },
                    {
                              "id": "c",
                              "text": "Ends the program"
                    },
                    {
                              "id": "d",
                              "text": "Creates a variable"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ELIF",
                              "statement": "Else-if condition check."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ELIF = additional condition tested in order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Checks next condition if false"
},
        },
        {
          id: "cipc-u2-ms-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "temp = 25. 'IF temp > 30 THEN hot ELIF temp > 20 THEN warm ELSE cold'. Output?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Tracing ELIF",
                              "statement": "First true wins."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "25 > 30 false; 25 > 20 true.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Output: warm.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "warm"
},
        },
        {
          id: "cipc-u2-ms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write an IF/ELIF/ELSE for grades: 90+ = 'Distinction', 70-89 = 'Merit', below 70 = 'Pass'. What happens at exactly 90?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multi-branch logic",
                              "statement": "Ordered conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IF >=90 Distinction; ELIF >=70 Merit; ELSE Pass.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check highest first so lower bands don't catch.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "At 90: first condition true → Distinction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Correct chain; 90 → Distinction"
},
        },
        {
          id: "cipc-u2-ms-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) What is ELIF? (b) Why does condition order matter? (c) Trace: x=50, 'IF x>100 A ELIF x>10 B ELSE C'. (d) What runs if no condition is true and no ELSE? (e) Write a chain for BMI categories. (f) What is a nested IF? (g) Why check specific conditions before general? (h) Design a 3-way choice for traffic light colours.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Selection",
                              "statement": "ELIF, order, nesting, tracing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Else-if — next condition check.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) First true wins; wrong order gives wrong branch.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) x>100 false; x>10 true → B.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Nothing runs — no matching branch.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid BMI IF/ELIF chain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) IF inside another IF.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) General condition would catch specific cases early.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid 3-branch colour logic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "ELIF, ordering, tracing, nested IFs, real-world chains."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-ms-notes",
      title: "Selection — notes",
      summary: "IF/ELIF/ELSE: first true condition wins. Order conditions from specific to general.",
      sections: [
        { heading: "Key idea", body: "Decision chains need careful ordering — check highest thresholds first." },
        { heading: "Trace", body: "Evaluate each condition top-down until one is true." },
      ],
    },
  ],
};
