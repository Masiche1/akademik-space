import type { Lesson } from "../../../types.ts";

export const lesson141: Lesson = {
  id: "ciealc-u3-lesson-3-1",
  code: "3-1",
  title: "Algorithm Design and Representation",
  goal: "I CAN design algorithms using flowcharts, pseudocode and top-down decomposition.",
  standards: ["Cambridge A Level Computer Science 9618: algorithms", "9618: algorithm design"],
  
  vocabulary: [
    { term: "Algorithm", definition: "Step-by-step procedure to solve a problem." },
    { term: "Flowchart", definition: "Visual diagram of algorithm steps." },
    { term: "Pseudocode", definition: "Text representation of algorithm logic." },
    { term: "Decomposition", definition: "Breaking problems into smaller sub-problems." },
    { term: "Abstraction", definition: "Focusing on essential details, ignoring others." },
    { term: "Dry run", definition: "Manually tracing algorithm with sample data." },
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
          { name: "Flowchart symbols", statement: "oval/rect/diamond/parallelogram/arrow" },
          { name: "Decomposition", statement: "break into sub-problems" },
          { name: "Abstraction", statement: "hide non-essential details" },
        ],
        workedExample: {
          problem: "Write pseudocode to check if a number is prime.",
          solution: "INPUT n; IF n < 2 THEN OUTPUT 'not prime'; ELSE count = 0; FOR i = 2 TO n-1 DO IF n MOD i = 0 THEN count = count + 1; ENDIF; ENDFOR; IF count = 0 THEN OUTPUT 'prime' ELSE OUTPUT 'not prime'; ENDIF; ENDIF.",
        },
      },
      questions: [
        {
          id: "ciealc-u3-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an algorithm?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Step-by-step procedure to solve a problem"
                    },
                    {
                              "id": "b",
                              "text": "A type of computer"
                    },
                    {
                              "id": "c",
                              "text": "A programming language"
                    },
                    {
                              "id": "d",
                              "text": "A network protocol"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Algorithm",
                              "statement": "Problem-solving procedure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Algorithm = precise step-by-step solution.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Step-by-step procedure"
},
        },
        {
          id: "ciealc-u3-al-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name 3 flowchart symbols and their meanings.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Flowchart symbols",
                              "statement": "Standard symbols."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three valid symbols (e.g. diamond=decision, rectangle=process).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All correctly named.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Three flowchart symbols"
},
        },
        {
          id: "ciealc-u3-al-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is decomposition and why is it useful?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Decomposition",
                              "statement": "Break into sub-problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decomposition = breaking into smaller parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Makes complex problems manageable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enables testing and reuse.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Break into sub-problems"
},
        },
        {
          id: "ciealc-u3-al-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define algorithm, flowchart, pseudocode, decomposition, abstraction, dry run. (b) What do these symbols mean: oval, rectangle, diamond, parallelogram? (c) Write pseudocode for 'output 'Hello' three times'. (d) Decompose 'sort a list' into sub-problems. (e) Why use pseudocode over code? (f) What is abstraction? (g) Dry-run: n=3, find factorial. (h) Design flowchart for 'is number even?'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Algorithms",
                              "statement": "Design, representation, decomposition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Correct symbol meanings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid pseudocode for 3 outputs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid decomposition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Language-independent, clearer logic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Focus on essentials, hide details.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Correct dry-run trace.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid flowchart design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Algorithm design and representation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u3-al-notes",
      title: "Algorithms — notes",
      summary: "Algorithms=step-by-step solutions; flowcharts/pseudocode represent them; decompose complex problems.",
      sections: [
        { heading: "Key idea", body: "Good algorithms are precise, efficient and testable." },
        { heading: "Flowcharts", body: "Standard symbols enable universal understanding." },
      ],
    },
  ],
};
