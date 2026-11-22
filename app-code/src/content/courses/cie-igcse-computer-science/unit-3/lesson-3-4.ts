import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "ciecs-u3-lesson-3-4",
  code: "3-4",
  title: "Data Structures: Strings and Lists",
  goal: "I CAN manipulate strings and lists using indexing, slicing and methods.",
  standards: ["Cambridge IGCSE Computer Science 0478: programming", "0478 section 8: data structures"],
  
  vocabulary: [
    { term: "String", definition: "Sequence of characters." },
    { term: "List", definition: "Ordered collection of items." },
    { term: "Index", definition: "Position of item — starts at 0." },
    { term: "Slice", definition: "Subsequence of a string or list." },
    { term: "Method", definition: "Built-in function operating on data." },
    { term: "Iteration", definition: "Looping through each item." },
  ],
  concepts: [
    {
      id: "ciecs-u3-s4-ds",
      title: "Strings and lists",
      skill: "Manipulate strings and lists at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Strings",
            body: "Strings are character sequences: s='hello'. Index s[0]='h', slice s[1:4]='ell'. Methods: .upper(), .lower(), .len(), .replace(). Strings are immutable — can't change individual characters.",
          },
          {
            heading: "Lists",
            body: "Lists are ordered collections: nums=[1,2,3]. Index nums[0]=1. Methods: .append(), .remove(), .sort(), .len(). Lists are mutable — can change items. Can hold mixed types.",
          },
        ],
        keyFormulas: [
          { name: "s[i]", statement: "index starts at 0" },
          { name: "s[i:j]", statement: "slice" },
          { name: ".append()", statement: "add to list" },
        ],
        workedExample: {
          problem: "s='programming'. Print s[0:7].upper() and len(s).",
          solution: "s[0:7]='program' → 'PROGRAM'; len(s)=11.",
        },
      },
      questions: [
        {
          id: "ciecs-u3-ds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Python, what is s[0] for s='hello'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'l'"
                    },
                    {
                              "id": "b",
                              "text": "'h'"
                    },
                    {
                              "id": "c",
                              "text": "'e'"
                    },
                    {
                              "id": "d",
                              "text": "Error"
                    }
          ],
          "correctChoiceId": "b"
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
                              "reasoning": "Index 0 = first character.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "'h'"
},
        },
        {
          id: "ciecs-u3-ds-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a string and a list?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "String vs list",
                              "statement": "Chars vs items."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "String = characters; list = any items.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strings immutable; lists mutable.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Chars vs items; immutable vs mutable"
},
        },
        {
          id: "ciecs-u3-ds-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write Python: given word='stressed', print it reversed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "String slicing",
                              "statement": "Reverse via negative step."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "word[::-1] reverses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Outputs 'desserts'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid Python.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "'desserts'"
},
        },
        {
          id: "ciecs-u3-ds-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define string, list, index, slice, method, iteration. (b) What is nums[-1] for [10,20,30]? (c) How to add item to list? (d) Write Python: count vowels in a string. (e) What is slicing? (f) How do you sort a list? (g) Can a list hold mixed types? (h) Design a program storing and analysing student grades.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Data structures",
                              "statement": "Strings, lists, methods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 30 — negative index.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) .append() or + [item].",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid vowel-counting code.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Subsequence s[i:j].",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) .sort() or sorted().",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Yes — mixed types allowed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid grades program.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Strings and lists manipulation."
},
        },
        {
          id: "ciecs-u3-ds-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For s = 'data', what is s[0]?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'a'" },
              { id: "b", text: "'d'" },
              { id: "c", text: "'t'" },
              { id: "d", text: "An error" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Zero-based index", statement: "Index 0 is the first character." },
            ],
            steps: [
              { reasoning: "Python strings use zero-based indexing, so s[0] is 'd'.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** 'd'",
          },
        },
        {
          id: "ciecs-u3-ds-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "For nums = [10, 20, 30], what is nums[-1]?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "An error" },
              { id: "c", text: "30" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Negative indexing", statement: "Index -1 refers to the last item." },
            ],
            steps: [
              { reasoning: "Negative indices count backward from the end, so -1 is 30.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** 30",
          },
        },
        {
          id: "ciecs-u3-ds-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "For s = 'python', what does s[1:4] return?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'pyth'" },
              { id: "b", text: "'hon'" },
              { id: "c", text: "'yth'" },
              { id: "d", text: "'ytho'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Slicing", statement: "s[i:j] includes i but excludes j." },
            ],
            steps: [
              { reasoning: "Indices 1, 2 and 3 give 'yth'; index 4 is excluded.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 'yth'",
          },
        },
        {
          id: "ciecs-u3-ds-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which list method adds an item to the end of a list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: ".remove()" },
              { id: "b", text: ".replace()" },
              { id: "c", text: ".append()" },
              { id: "d", text: ".upper()" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "List methods", statement: "append adds items to a list." },
            ],
            steps: [
              { reasoning: "nums.append(x) adds x to the end of nums.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** .append()",
          },
        },
        {
          id: "ciecs-u3-ds-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why can't you change one character of a Python string directly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strings have no index" },
              { id: "b", text: "All strings are encrypted" },
              { id: "c", text: "Strings can only store numbers" },
              { id: "d", text: "Strings are immutable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Immutability", statement: "String contents cannot be changed in place." },
            ],
            steps: [
              { reasoning: "Strings are immutable, so a new string must be created for changes.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Strings are immutable",
          },
        },
        {
          id: "ciecs-u3-ds-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about Python lists is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They can only store numbers" },
              { id: "b", text: "They can store mixed data types" },
              { id: "c", text: "They always sort automatically" },
              { id: "d", text: "They cannot be changed after creation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "List flexibility", statement: "Lists are mutable and may hold mixed types." },
            ],
            steps: [
              { reasoning: "A list can contain numbers, strings, Booleans and other items.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Can store mixed types",
          },
        },
        {
          id: "ciecs-u3-ds-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the length of the string 'computer'?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "String length", statement: "Count each character once." },
            ],
            steps: [
              { reasoning: "c-o-m-p-u-t-e-r has 8 characters.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "ciecs-u3-ds-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the length of the list [4, 8, 15, 16, 23, 42]?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "List length", statement: "Count the number of items." },
            ],
            steps: [
              { reasoning: "The list contains 6 numbers.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "ciecs-u3-ds-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "For s = 'python': (a) What is len(s)? (b) What is the index of the last character?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "String indexing", statement: "Length is count; last index is length - 1." },
            ],
            steps: [
              { reasoning: "len('python') = 6.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Last index = 6 - 1 = 5.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 6; (b) 5",
          },
        },
        {
          id: "ciecs-u3-ds-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "For nums = [3, 1, 4, 1, 5, 9, 2, 6], the code nums.append(7) is run. (a) What is the new length of nums? (b) What is the index of the newly added item?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 9 },
              { label: "b", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "List append", statement: "append increases length by one." },
            ],
            steps: [
              { reasoning: "Original length 8 becomes 9 after append.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "New last index = 9 - 1 = 8.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 9; (b) 8",
          },
        },
        {
          id: "ciecs-u3-ds-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For s = 'abracadabra': (a) What is len(s)? (b) What is the index of the last character? (c) How many times does the letter 'a' occur?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 11 },
              { label: "b", answer: 10 },
              { label: "c", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "String analysis", statement: "Length, indexing and character counts." },
            ],
            steps: [
              { reasoning: "len('abracadabra') = 11.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Last index = 11 - 1 = 10.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Counting 'a' gives 5 occurrences.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 11; (b) 10; (c) 5",
          },
        },
        {
          id: "ciecs-u3-ds-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write Python code that reverses a string using slicing and finds the largest number in a list using a loop. Explain indexing, slicing and iteration used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "String/list algorithms", statement: "Use slicing for strings and iteration for lists." },
            ],
            steps: [
              { reasoning: "The reversed string is produced with s[::-1].", marks: 1, markCode: "M" },
              { reasoning: "The loop initialises a maximum and compares each list item.", marks: 1, markCode: "M" },
              { reasoning: "Indexing/slicing and iteration are explained correctly.", marks: 1, markCode: "M" },
              { reasoning: "Valid Python syntax is provided for both tasks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "s[::-1] and loop-based maximum",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u3-ds-notes",
      title: "Strings and lists — notes",
      summary: "Index 0-based; slicing s[i:j]; strings immutable, lists mutable. Methods: append, sort, upper.",
      sections: [
        { heading: "Key idea", body: "Both use indexing and slicing — negative indices count from end." },
        { heading: "Mutability", body: "Strings can't change; lists can — important difference." },
      ],
    },
  ],
};
