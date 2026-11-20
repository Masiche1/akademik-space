import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ciecs-u3-lesson-3-1",
  code: "3-1",
  title: "Algorithm Design: Flowcharts and Pseudocode",
  goal: "I CAN design algorithms using flowcharts and pseudocode for given problems.",
  standards: ["Cambridge IGCSE Computer Science 0478: algorithm design and problem-solving", "0478 section 7: algorithms"],
  
  vocabulary: [
    { term: "Algorithm", definition: "Precise step-by-step method for solving a problem." },
    { term: "Flowchart", definition: "Diagram showing algorithm steps and decisions." },
    { term: "Pseudocode", definition: "Plain-language description of algorithm steps." },
    { term: "Decomposition", definition: "Breaking problems into smaller sub-problems." },
    { term: "Decision", definition: "Point where algorithm branches based on condition." },
    { term: "Iteration", definition: "Repeating steps — loops." },
  ],
  concepts: [
    {
      id: "ciecs-u3-s1-algo",
      title: "Algorithm design",
      skill: "Express algorithms via flowcharts and pseudocode at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Flowchart symbols",
            body: "Oval=start/end, rectangle=process, diamond=decision, parallelogram=input/output, arrows=flow. Decisions branch YES/NO; loops return to earlier steps.",
          },
          {
            heading: "Pseudocode",
            body: "Plain-language algorithm description: INPUT, OUTPUT, IF...THEN...ELSE, FOR...TO...DO, WHILE...DO. More precise than prose, language-independent.",
          },
        ],
        keyFormulas: [
          { name: "Flowchart", statement: "symbols: oval/rect/diamond/parallelogram" },
          { name: "Pseudocode", statement: "INPUT/OUTPUT/IF/FOR/WHILE" },
        ],
        workedExample: {
          problem: "Write pseudocode to find the largest of three numbers.",
          solution: "INPUT a,b,c\nmax = a\nIF b > max THEN max = b\nIF c > max THEN max = c\nOUTPUT max",
        },
      },
      questions: [
        {
          id: "ciecs-u3-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a diamond shape represent in a flowchart?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Decision"
                    },
                    {
                              "id": "b",
                              "text": "Start/end"
                    },
                    {
                              "id": "c",
                              "text": "Process"
                    },
                    {
                              "id": "d",
                              "text": "Input/output"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Flowchart symbols",
                              "statement": "Diamond=decision."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Diamond = decision point.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Decision"
},
        },
        {
          id: "ciecs-u3-al-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is pseudocode and why use it instead of a programming language?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Pseudocode",
                              "statement": "Language-independent algorithm description."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pseudocode = plain-language algorithm steps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Language-independent; focuses on logic not syntax.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Language-independent algorithm description"
},
        },
        {
          id: "ciecs-u3-al-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write pseudocode to check if a number is even or odd.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Pseudocode",
                              "statement": "Decision structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "INPUT n; IF n MOD 2 = 0 THEN OUTPUT 'even' ELSE OUTPUT 'odd'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct IF/ELSE structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid pseudocode syntax.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "IF n MOD 2 = 0 THEN even ELSE odd"
},
        },
        {
          id: "ciecs-u3-al-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define algorithm, flowchart, pseudocode, decomposition, decision, iteration. (b) Name 4 flowchart symbols and their meanings. (c) Write pseudocode for 'is_palindrome(s)'. (d) What is decomposition? (e) Write pseudocode for 'sum of numbers 1 to 100'. (f) How do loops appear in pseudocode? (g) Draw/describe flowchart for 'if temperature > 30 then alert'. (h) Design an algorithm for 'find missing number in 1..n sequence'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Algorithm design",
                              "statement": "Flowcharts, pseudocode, decomposition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Four valid symbols.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid palindrome pseudocode.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Breaking into sub-problems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid sum loop pseudocode.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) FOR/WHILE/REPEAT.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid decision flowchart.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid missing-number algorithm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Algorithm design with flowcharts and pseudocode."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u3-al-notes",
      title: "Algorithm design — notes",
      summary: "Flowchart symbols: oval=start, rect=process, diamond=decision, parallelogram=I/O. Pseudocode=INPUT/OUTPUT/IF/FOR/WHILE.",
      sections: [
        { heading: "Key idea", body: "Design algorithms before coding — flowcharts and pseudocode focus on logic." },
        { heading: "Pseudocode", body: "More precise than prose, independent of programming language." },
      ],
    },
  ],
};
