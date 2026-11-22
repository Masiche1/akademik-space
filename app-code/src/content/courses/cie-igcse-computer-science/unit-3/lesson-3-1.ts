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
                              "text": "Process"
                    },
                    {
                              "id": "b",
                              "text": "Start/end"
                    },
                    {
                              "id": "c",
                              "text": "Input/output"
                    },
                    {
                              "id": "d",
                              "text": "Decision"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ciecs-u3-al-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which flowchart symbol represents the start or end of an algorithm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diamond" },
              { id: "b", text: "Parallelogram" },
              { id: "c", text: "Rectangle" },
              { id: "d", text: "Oval" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flowchart symbols", statement: "Oval marks start/end." },
            ],
            steps: [
              { reasoning: "The oval terminator shows where the algorithm begins or ends.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Oval",
          },
        },
        {
          id: "ciecs-u3-al-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which flowchart symbol represents a process or calculation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Arrow" },
              { id: "b", text: "Oval" },
              { id: "c", text: "Diamond" },
              { id: "d", text: "Rectangle" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flowchart symbols", statement: "Rectangle marks a process step." },
            ],
            steps: [
              { reasoning: "A rectangle contains an action or calculation in a flowchart.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Rectangle",
          },
        },
        {
          id: "ciecs-u3-al-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which flowchart symbol represents input or output?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parallelogram" },
              { id: "b", text: "Circle" },
              { id: "c", text: "Oval" },
              { id: "d", text: "Diamond" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flowchart symbols", statement: "Parallelogram marks input/output." },
            ],
            steps: [
              { reasoning: "The parallelogram is used for data entering or leaving the algorithm.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Parallelogram",
          },
        },
        {
          id: "ciecs-u3-al-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In pseudocode, what does IF ... THEN ... ELSE represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Input only" },
              { id: "b", text: "Output only" },
              { id: "c", text: "Iteration" },
              { id: "d", text: "Selection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Selection", statement: "Chooses instructions using a condition." },
            ],
            steps: [
              { reasoning: "IF/ELSE chooses between alternatives based on a condition.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Selection",
          },
        },
        {
          id: "ciecs-u3-al-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is decomposition in algorithm design?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing code in a programming language" },
              { id: "b", text: "Deleting failed attempts" },
              { id: "c", text: "Breaking a problem into smaller sub-problems" },
              { id: "d", text: "Drawing only the final flowchart" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decomposition", statement: "Split complex problems into parts." },
            ],
            steps: [
              { reasoning: "Decomposition makes large problems easier to design and test.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Breaking into sub-problems",
          },
        },
        {
          id: "ciecs-u3-al-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which pseudocode construct repeats instructions a set number of times?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "FOR ... TO ... DO" },
              { id: "b", text: "OUTPUT" },
              { id: "c", text: "END" },
              { id: "d", text: "INPUT" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Iteration", statement: "Loops repeat instructions." },
            ],
            steps: [
              { reasoning: "FOR loops repeat a block for a counted range of values.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** FOR ... TO ... DO",
          },
        },
        {
          id: "ciecs-u3-al-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pseudocode: x = 5; FOR i = 1 TO 3 DO x = x + i. What is the final value of x?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 11 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Trace algorithm", statement: "Apply each loop iteration in order." },
            ],
            steps: [
              { reasoning: "x = 5 + 1 + 2 + 3 = 11.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "ciecs-u3-al-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pseudocode: total = 0; FOR i = 1 TO 10 DO total = total + i. What is the final value of total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 55 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sum loop", statement: "Add each loop value to the total." },
            ],
            steps: [
              { reasoning: "1 + 2 + ... + 10 = 55.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "55",
          },
        },
        {
          id: "ciecs-u3-al-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Pseudocode: total = 0; FOR i = 1 TO 4 DO total = total + i * i. (a) How many times does the loop body run? (b) What is the final value of total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Trace loop", statement: "Loop runs once per value in range." },
            ],
            steps: [
              { reasoning: "The loop runs for i = 1, 2, 3, 4: 4 iterations.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Total = 1 + 4 + 9 + 16 = 30.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 4; (b) 30",
          },
        },
        {
          id: "ciecs-u3-al-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the word 'education': (a) How many vowels does it contain? (b) How many consonants does it contain?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Character classification", statement: "Count vowels and consonants separately." },
            ],
            steps: [
              { reasoning: "Vowels are e, u, a, i, o: 5.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "The word has 9 letters, so consonants = 9 - 5 = 4.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 5; (b) 4",
          },
        },
        {
          id: "ciecs-u3-al-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Pseudocode computes a factorial: result = 1; FOR i = 1 TO n DO result = result * i. For n = 5: (a) How many times does the loop body run? (b) What is result? (c) What would result be if n = 4 instead?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 120 },
              { label: "c", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Factorial trace", statement: "Multiply result by each loop value." },
            ],
            steps: [
              { reasoning: "For n = 5 the loop runs 5 times.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "5! = 1 * 2 * 3 * 4 * 5 = 120.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "4! = 1 * 2 * 3 * 4 = 24.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 5; (b) 120; (c) 24",
          },
        },
        {
          id: "ciecs-u3-al-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write pseudocode for a program that prints 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for multiples of both, and the number otherwise, for 1 to 20. Explain the decisions and loop used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "FizzBuzz algorithm", statement: "Loop with nested selection handles all cases." },
            ],
            steps: [
              { reasoning: "A FOR loop runs i from 1 to 20.", marks: 1, markCode: "M" },
              { reasoning: "IF i MOD 15 = 0 outputs FizzBuzz before checking 3 or 5 alone.", marks: 1, markCode: "M" },
              { reasoning: "ELSE IF checks multiples of 3 and 5, otherwise outputs i.", marks: 1, markCode: "M" },
              { reasoning: "The algorithm is clear, correct and uses appropriate selection and iteration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Loop plus ordered IF/ELSE selection",
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
