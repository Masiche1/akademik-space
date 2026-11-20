import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "cils-c-u1-lesson-1-7",
  code: "1-7",
  title: "Stage 9 — Advanced Programming: Files, Lists and Logic",
  goal: "I CAN use lists, file handling and complex logic in text-based programs.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: programming", "Cambridge Lower Secondary Computing 0860 strand: Programming"],
  stage: 9,
  vocabulary: [
    { term: "List", definition: "Ordered collection of items — Python's [ ]." },
    { term: "Index", definition: "Position of an item in a list, starting at 0." },
    { term: "File handling", definition: "Reading/writing data to files." },
    { term: "Iteration over list", definition: "Looping through each item." },
    { term: "Nested condition", definition: "IF inside IF for complex decisions." },
    { term: "Exception", definition: "Error during runtime — e.g. division by zero." },
  ],
  concepts: [
    {
      id: "cils-c-u1-s7-adv",
      title: "Lists, files and complex logic",
      skill: "Use lists, file I/O and nested logic at Stage 9 level.",
      lesson: {
        sections: [
          {
            heading: "Lists",
            body: "Lists store ordered collections: scores = [85, 92, 78]. Access by index scores[0]=85. Loop through with for s in scores. Lists can hold any type and change size — append adds items.",
          },
          {
            heading: "Files and exceptions",
            body: "Files store data permanently: open('data.txt').read(). Exceptions are runtime errors — division by zero crashes. Use try/except to handle them gracefully instead of crashing.",
          },
        ],
        keyFormulas: [
          { name: "list[i]", statement: "index starts at 0" },
          { name: "for x in list", statement: "iterate items" },
          { name: "try/except", statement: "handle runtime errors" },
        ],
        workedExample: {
          problem: "scores=[80,90,70]. Print each score doubled. Then read 'names.txt' and print first name.",
          solution: "for s in scores: print(s*2) → 160,180,140. f=open('names.txt'); print(f.readline()); f.close()",
        },
      },
      questions: [
        {
          id: "cils-c-u1-adv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Python, what is scores[0] for scores=[85,92,78]?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "85"
                    },
                    {
                              "id": "b",
                              "text": "92"
                    },
                    {
                              "id": "c",
                              "text": "78"
                    },
                    {
                              "id": "d",
                              "text": "Error"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Index",
                              "statement": "Starts at 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Index 0 = first item = 85.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "85"
},
        },
        {
          id: "cils-c-u1-adv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'for s in scores:' do? What does try/except prevent?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Iteration and exceptions",
                              "statement": "Loop items; catch errors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iterates each item in list.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "try/except catches runtime errors gracefully.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Loops items; prevents crashes"
},
        },
        {
          id: "cils-c-u1-adv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write Python: given list temps=[18,22,25,19], print only temps above 20.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Lists and conditions",
                              "statement": "Filter by condition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "for t in temps: if t > 20: print(t)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Outputs 22, 25.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct indentation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "22 and 25"
},
        },
        {
          id: "cils-c-u1-adv-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define list, index, file handling, iteration, nested condition, exception. (b) What is scores[-1] for [10,20,30]? (c) How to add item to list? (d) Write Python reading a file and counting lines. (e) What is a runtime exception? (f) Why use try/except? (g) Write nested IF for 'if score>=90 and attendance>90 then grade A'. (h) Design a program storing and analysing exam marks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Advanced Python",
                              "statement": "Lists, files, exceptions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 30 — negative index from end.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) append() or + [item].",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid file-reading count program.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Error during execution (e.g. ÷0).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Prevents crash; handles gracefully.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid nested IF.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid marks-analysis program.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lists, files, exceptions, complex logic."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u1-adv-notes",
      title: "Advanced Python — notes",
      summary: "Lists store collections (index 0-based); files persist data; try/except handles runtime errors.",
      sections: [
        { heading: "Key idea", body: "Lists + loops + conditions = powerful data programs." },
        { heading: "Files", body: "open/read/write/close — data survives between runs." },
      ],
    },
  ],
};
