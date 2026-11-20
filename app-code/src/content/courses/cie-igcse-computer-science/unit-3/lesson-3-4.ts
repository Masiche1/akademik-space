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
                              "text": "'h'"
                    },
                    {
                              "id": "b",
                              "text": "'e'"
                    },
                    {
                              "id": "c",
                              "text": "'l'"
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
