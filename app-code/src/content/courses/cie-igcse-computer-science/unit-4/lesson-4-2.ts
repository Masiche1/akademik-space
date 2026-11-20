import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ciecs-u4-lesson-4-2",
  code: "4-2",
  title: "Python Practice: Functions, Strings and Lists",
  goal: "I CAN use functions, string methods and list operations at IGCSE Paper 2 standard.",
  standards: [
    "Cambridge IGCSE Computer Science 0478",
    "Paper 2: functions, data structures",
  ],
  vocabulary: [
    {
      term: "Function",
      definition: "Reusable block taking parameters and returning a value.",
    },
    { term: "Return", definition: "Sending a result back to the caller." },
    {
      term: "String method",
      definition: "Built-in operation on text, e.g. len(), upper().",
    },
    { term: "List", definition: "Ordered collection of items." },
    { term: "Index", definition: "Position of an item, starting at 0." },
  ],
  concepts: [
    {
      id: "ciecs-u4-s2-func",
      title: "Functions, strings and lists",
      skill: "Write functions and manipulate strings and lists in Python.",
      lesson: {
        sections: [
          {
            heading: "Functions",
            body: "def name(param): ... return value. Functions must return a value to be useful in expressions. Call them like built-ins: result = double(5). Parameters are placeholders replaced by arguments at call time.",
          },
          {
            heading: "Strings and lists",
            body: "Strings: len(s), s.upper(), s.lower(), s[i] for characters, s.split() for words. Lists: len(lst), lst.append(x), lst[i] indexing, lst.sort(), sum(lst). Lists are 0-indexed — lst[0] is first.",
          },
        ],
        keyFormulas: [
          { name: "Function", statement: "def name(param): return expression" },
          {
            name: "List index",
            statement: "first item = index 0; last = len(list)-1",
          },
        ],
        workedExample: {
          problem:
            "Write a function that returns the number of vowels in a string.",
          solution:
            "def vowels(s):\n    count = 0\n    for ch in s.lower():\n        if ch in 'aeiou':\n            count += 1\n    return count",
        },
      },
      questions: [
        {
          id: "ciecs-u4-fn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: 'What does len("hello") return in Python?',
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "5" },
              { id: "c", text: "h" },
              { id: "d", text: "Error" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "len()",
                statement: "Returns number of characters.",
              },
            ],
            steps: [
              {
                reasoning: '"hello" has 5 characters.',
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "ciecs-u4-fn-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a Python function square(n) that returns n squared.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function",
                statement: "def with return.",
              },
            ],
            steps: [
              { reasoning: "def square(n):", marks: 1, markCode: "M" },
              {
                reasoning: "return n * n (indented).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "def square(n):\n    return n * n",
          },
        },
        {
          id: "ciecs-u4-fn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given the list scores = [45, 62, 38, 71], what does scores[1] return and what is sum(scores)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "List indexing",
                statement: "Index 0 is first element.",
              },
            ],
            steps: [
              {
                reasoning: "scores[1] = 62 (second element).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "sum = 45+62+38+71 = 216.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answers: 62 and 216.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "62; 216",
          },
        },
        {
          id: "ciecs-u4-fn-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a Python function average(lst) that returns the mean of a non-empty list of numbers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function + list",
                statement: "sum/len gives the mean.",
              },
            ],
            steps: [
              { reasoning: "def average(lst):", marks: 1, markCode: "M" },
              {
                reasoning: "return sum(lst) / len(lst) — correct built-ins.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Handles non-empty list as specified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct syntax and indentation throughout.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "def average(lst):\n    return sum(lst) / len(lst)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u4-fn-notes",
      title: "Functions/strings/lists — revision notes",
      summary:
        "def/return, len(), string methods, list indexing and built-ins.",
      sections: [
        {
          heading: "Key skills",
          body: "Lists are 0-indexed; sum(), len(), append(), sort() are the workhorses; functions need return to give results back.",
        },
        {
          heading: "Exam tips",
          body: "For 'write a function' questions, include def line, correct indentation and a return statement — all three earn marks.",
        },
      ],
    },
  ],
};
