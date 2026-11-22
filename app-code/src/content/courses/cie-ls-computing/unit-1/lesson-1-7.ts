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
                              "text": "Error"
                    },
                    {
                              "id": "b",
                              "text": "92"
                    },
                    {
                              "id": "c",
                              "text": "85"
                    },
                    {
                              "id": "d",
                              "text": "78"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "cils-c-u1-adv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For scores = [10, 20, 30], what is scores[2]?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Error"
                    },
                    {
                              "id": "b",
                              "text": "30"
                    },
                    {
                              "id": "c",
                              "text": "20"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "borrectChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Index",
                              "statement": "0-based positions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Index 2 = third item = 30.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "30"
},
        },
        {
          id: "cils-c-u1-adv-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "scores = [5, 10, 15]. What is scores[1] * 2?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 20 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Lists",
                              "statement": "Index then operate."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "scores[1] = 10, 10 * 2 = 20.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "20"
},
        },
        {
          id: "cils-c-u1-adv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the sum of all items in nums = [1, 2, 3, 4]?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 10 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Lists",
                              "statement": "Add each item."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "1+2+3+4 = 10.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "10"
},
        },
        {
          id: "cils-c-u1-adv-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write Python code that prints each name in names = ['Ana', 'Bo'] on its own line.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Iteration",
                              "statement": "for x in list."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "for name in names: print(name)",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Outputs 'Ana' then 'Bo'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct indentation of print.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Valid iteration code"
},
        },
        {
          id: "cils-c-u1-adv-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "For nums = [1, 2, 3], what does nums.append(9) do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Adds 9 to the start of the list"
                    },
                    {
                              "id": "b",
                              "text": "Adds 9 to the end of the list"
                    },
                    {
                              "id": "c",
                              "text": "Deletes 9 from the list"
                    },
                    {
                              "id": "d",
                              "text": "Replaces the first item with 9"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "append()",
                              "statement": "Adds item to list end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "append adds at the end: [1,2,3,9].",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Adds to end"
},
        },
        {
          id: "cils-c-u1-adv-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "vals = [3, 6, 9]. What is vals[-1] + vals[0]?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 12 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Negative index",
                              "statement": "-1 = last item."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "vals[-1] = 9, vals[0] = 3, 9+3 = 12.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "12"
},
        },
        {
          id: "cils-c-u1-adv-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A program calculates total / count without try/except. What happens if count is 0?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It waits for more input"
                    },
                    {
                              "id": "b",
                              "text": "It prints 0"
                    },
                    {
                              "id": "c",
                              "text": "It returns an infinite number"
                    },
                    {
                              "id": "d",
                              "text": "It crashes with a division-by-zero exception"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Exception",
                              "statement": "Runtime error — e.g. divide by zero."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Division by zero raises an exception; without try/except the program crashes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Crashes with exception"
},
        },
        {
          id: "cils-c-u1-adv-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) What is an index in a list? (b) How do you add an item to the end of a list in Python? (c) Write a loop that sums all items in scores = [80, 90, 70]. (d) What is try/except used for? (e) Why should a file be closed after reading?",
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
                              "reasoning": "(a) Position of an item, starting at 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) append() e.g. scores.append(100).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) total = 0; for s in scores: total = total + s → 240.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Catches runtime errors so program doesn't crash.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Releases the file; prevents data loss/corruption.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lists, summing, exceptions, files."
},
        },
        {
          id: "cils-c-u1-adv-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'for x in mylist:' do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Deletes the list"
                    },
                    {
                              "id": "b",
                              "text": "Prints the list once"
                    },
                    {
                              "id": "c",
                              "text": "Iterates through each item in the list"
                    },
                    {
                              "id": "d",
                              "text": "Sorts the list"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Iteration",
                              "statement": "Loop through items."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "for...in visits each item in turn.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Iterates each item"
},
        },
        {
          id: "cils-c-u1-adv-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "data = [4, 8]. What is data[0] + data[1]?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 12 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Lists",
                              "statement": "Access by index."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "4 + 8 = 12.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "12"
},
        },
        {
          id: "cils-c-u1-adv-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does try/except do in Python?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeats code forever"
                    },
                    {
                              "id": "b",
                              "text": "Catches runtime errors so the program doesn't crash"
                    },
                    {
                              "id": "c",
                              "text": "Sorts a list"
                    },
                    {
                              "id": "d",
                              "text": "Reads a file faster"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "try/except",
                              "statement": "Graceful error handling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "try runs code; except handles errors without crashing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Handles runtime errors"
},
        },
        {
          id: "cils-c-u1-adv-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define list, index, file handling, nested condition, exception. (b) What is nums[-1] for nums = [5, 10, 15]? (c) Write Python to find the largest number in scores = [70, 95, 82]. (d) Write code reading 'data.txt' and printing its contents. (e) Why use a nested IF? Give an example. (f) Design a program storing 5 exam marks and printing the average.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Advanced Python",
                              "statement": "Lists, files, logic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 15 — last item via negative index.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid max-finding loop or max() usage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid open/read/print/close code.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) For multi-condition decisions, e.g. IF score>=90 THEN IF attendance>90 THEN grade A.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid marks-storage and average program.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Lists, files, nested logic, design."
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
