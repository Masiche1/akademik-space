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
                              "text": "Repeats a loop"
                    },
                    {
                              "id": "b",
                              "text": "Checks another condition if earlier ones were false"
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
          "correctChoiceId": "b"
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
        {
          id: "cipc-u2-ms-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an ELIF block check?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The same condition again" },
            { id: "b", text: "Always the last condition" },
            { id: "c", text: "Nothing — it is decorative" },
            { id: "d", text: "Another condition, only if earlier conditions were false" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "ELIF", statement: "'Else if' — next condition in chain." }],
            steps: [
              { reasoning: "ELIF checks its condition only when all previous IF/ELIF conditions were false.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Another condition, only if earlier ones were false",
          },
        },
        {
          id: "cipc-u2-ms-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens if no condition in an IF/ELIF/ELSE chain is true and there is no ELSE?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Missing ELSE", statement: "Nothing runs if all conditions false." }],
            steps: [
              { reasoning: "No branch runs — the program skips the whole chain.", marks: 1, markCode: "M" },
              { reasoning: "ELSE is needed to catch the 'none of the above' case.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nothing runs; add ELSE for the remaining case.",
          },
        },
        {
          id: "cipc-u2-ms-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "score = 85. Chain: 'IF score >= 90 THEN 'A' ELIF score >= 80 THEN 'B' ELSE 'C''. What is output?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
            { id: "d", text: "Nothing" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tracing ELIF", statement: "First true condition wins." }],
            steps: [
              { reasoning: "85 >= 90 false; 85 >= 80 true → 'B'.", marks: 1, markCode: "M" },
              { reasoning: "Output is B.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** B",
          },
        },
        {
          id: "cipc-u2-ms-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an IF/ELIF/ELSE chain, how many branches can run for a single input?",
          response: { type: "mcq", choices: [
            { id: "a", text: "All of them" },
            { id: "b", text: "Two" },
            { id: "c", text: "It depends on the colour" },
            { id: "d", text: "Only one" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Selection", statement: "Exactly one branch runs." }],
            steps: [
              { reasoning: "Once a condition is true its branch runs and the rest are skipped — one branch only.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Only one",
          },
        },
        {
          id: "cipc-u2-ms-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trace: x = 50. 'IF x > 100 THEN say A ELIF x > 10 THEN say B ELSE say C'. What is said? Explain each check.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "ELIF tracing", statement: "Evaluate each condition in order." }],
            steps: [
              { reasoning: "50 > 100 is false → check ELIF.", marks: 1, markCode: "M" },
              { reasoning: "50 > 10 is true → 'say B' runs.", marks: 1, markCode: "M" },
              { reasoning: "Output: B; ELSE never reached.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Says B.",
          },
        },
        {
          id: "cipc-u2-ms-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should specific conditions come BEFORE general ones in an IF/ELIF chain?",
          response: { type: "mcq", choices: [
            { id: "a", text: "ELSE must come first" },
            { id: "b", text: "Specific conditions are faster to type" },
            { id: "c", text: "Order never matters" },
            { id: "d", text: "A general condition first would 'catch' cases meant for later specific checks" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Condition ordering", statement: "First true wins — order matters." }],
            steps: [
              { reasoning: "A broad condition checked first would run for cases that should match a later specific branch.", marks: 1, markCode: "M" },
              { reasoning: "Specific-first ensures special cases are handled correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Broad conditions would steal special cases",
          },
        },
        {
          id: "cipc-u2-ms-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A chain checks 'IF temp > 30 hot ELIF temp > 20 warm ELSE cold'. temp = 20. Output? Explain the boundary.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Boundary conditions", statement: "Check > carefully at the limit." }],
            steps: [
              { reasoning: "20 > 30 false; 20 > 20 false (strictly greater).", marks: 1, markCode: "M" },
              { reasoning: "Both conditions false → ELSE runs: 'cold'.", marks: 1, markCode: "M" },
              { reasoning: "20 is exactly the boundary — not greater than 20, so 'cold'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "cold — 20 is not > 20.",
          },
        },
        {
          id: "cipc-u2-ms-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a nested IF? Give a simple example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Nested IF", statement: "An IF inside another IF." }],
            steps: [
              { reasoning: "Nested IF = an IF statement placed inside another IF's branch.", marks: 1, markCode: "M" },
              { reasoning: "Example: IF hasTicket THEN IF age > 12 THEN say ADULT price ELSE say CHILD price.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "IF inside IF; e.g. check ticket then age.",
          },
        },
        {
          id: "cipc-u2-ms-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "level = 3. Chain: 'IF level = 1 THEN 'easy' ELIF level = 2 THEN 'medium' ELIF level = 3 THEN 'hard' ELSE 'unknown''. What is output?",
          response: { type: "mcq", choices: [
            { id: "a", text: "hard" },
            { id: "b", text: "unknown" },
            { id: "c", text: "medium" },
            { id: "d", text: "easy" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tracing equality chain", statement: "Match the exact value." }],
            steps: [
              { reasoning: "level = 3 fails first two checks, matches 'level = 3' → 'hard'.", marks: 1, markCode: "M" },
              { reasoning: "Output is hard.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** hard",
          },
        },
        {
          id: "cipc-u2-ms-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the output for each input of 'IF n > 0 THEN say POSITIVE ELSE say NOT POSITIVE': n = 5, n = 0, n = -3.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Multi-input tracing", statement: "Evaluate per input." }],
            steps: [
              { reasoning: "n = 5: 5 > 0 true → 'POSITIVE'.", marks: 1, markCode: "M" },
              { reasoning: "n = 0: 0 > 0 false → 'NOT POSITIVE'.", marks: 1, markCode: "M" },
              { reasoning: "n = -3: -3 > 0 false → 'NOT POSITIVE'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "POSITIVE, NOT POSITIVE, NOT POSITIVE.",
          },
        },
        {
          id: "cipc-u2-ms-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Design an IF/ELIF/ELSE chain for exam grades: 80+ = 'A', 60-79 = 'B', 40-59 = 'C', below 40 = 'D'. Write the conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Designing chains", statement: "Descending thresholds, specific first." }],
            steps: [
              { reasoning: "IF grade >= 80 THEN 'A'.", marks: 1, markCode: "M" },
              { reasoning: "ELIF grade >= 60 THEN 'B'; ELIF grade >= 40 THEN 'C'.", marks: 1, markCode: "M" },
              { reasoning: "ELSE 'D' — catches everything below 40.", marks: 1, markCode: "A" },
            ],
            finalAnswer: ">=80 A; >=60 B; >=40 C; else D.",
          },
        },
        {
          id: "cipc-u2-ms-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) What is ELIF? (b) Why does condition order matter? (c) Trace: x=50, 'IF x>100 A ELIF x>10 B ELSE C'. (d) What runs if no condition is true and no ELSE? (e) Write a chain for BMI categories. (f) What is a nested IF? (g) Why check specific conditions before general? (h) Design a 3-way choice for traffic light colours.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Selection", statement: "ELIF, ordering, tracing, nesting, design." }],
            steps: [
              { reasoning: "(a) 'Else if' — next condition when earlier ones fail.", marks: 1, markCode: "M" },
              { reasoning: "(b) First true branch wins — wrong order gives wrong results.", marks: 1, markCode: "M" },
              { reasoning: "(c) 50>100 false, 50>10 true → B.", marks: 1, markCode: "M" },
              { reasoning: "(d) Nothing runs.", marks: 1, markCode: "M" },
              { reasoning: "(e) e.g. <18 underweight, 18-25 healthy, >25 overweight.", marks: 1, markCode: "M" },
              { reasoning: "(f) IF inside another IF.", marks: 1, markCode: "M" },
              { reasoning: "(g) General conditions would catch special cases first.", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. IF red stop ELIF amber slow ELSE green go.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "ELIF, order, trace B, nothing without ELSE, BMI chain, nested IF, specific-first, traffic lights.",
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
