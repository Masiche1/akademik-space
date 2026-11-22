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
              { id: "a", text: "h" },
              { id: "b", text: "Error" },
              { id: "c", text: "5" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "c",
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
        {
          id: "ciecs-u4-fn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'Hello'.upper() return in Python?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An error" },
              { id: "b", text: "hello" },
              { id: "c", text: "HELLO" },
              { id: "d", text: "Hello" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "upper()",
                statement: "Converts all characters to uppercase.",
              },
            ],
            steps: [
              {
                reasoning: "upper() turns every letter uppercase → 'HELLO'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** HELLO",
          },
        },
        {
          id: "ciecs-u4-fn-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does this code print?\n\ndef double(x):\n    return x * 2\n\nprint(double(5))",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "double(5)" },
              { id: "b", text: "10" },
              { id: "c", text: "x * 2" },
              { id: "d", text: "5" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function call",
                statement: "Argument replaces parameter; return gives the result.",
              },
            ],
            steps: [
              {
                reasoning: "double(5) passes x = 5 into the function.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "returns 5 * 2 = 10, which is printed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 10",
          },
        },
        {
          id: "ciecs-u4-fn-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For scores = [10, 20, 30, 40]: (a) how many items does the list contain, and (b) what is the index of the last item?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "List length and index",
                statement: "len() counts items; last index = len - 1.",
              },
            ],
            steps: [
              {
                reasoning: "(a) len(scores) = 4 items.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) Indexing starts at 0, so the last item is index 3.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "(a) 4; (b) 3",
          },
        },
        {
          id: "ciecs-u4-fn-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a Python function is_even(n) that returns True if n is even and False otherwise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Function",
                statement: "def with a returned Boolean value.",
              },
            ],
            steps: [
              { reasoning: "def is_even(n):", marks: 1, markCode: "M" },
              {
                reasoning: "return n % 2 == 0 — correct even test.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Returns True/False correctly with proper indentation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "def is_even(n):\n    return n % 2 == 0",
          },
        },
        {
          id: "ciecs-u4-fn-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which Python method adds a new item to the end of a list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "insert()" },
              { id: "b", text: "add()" },
              { id: "c", text: "append()" },
              { id: "d", text: "push()" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "List methods",
                statement: "append adds to the end of a list.",
              },
            ],
            steps: [
              {
                reasoning: "lst.append(x) adds x at the end.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** append()",
          },
        },
        {
          id: "ciecs-u4-fn-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does sum([2, 4, 6]) return?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "sum()",
                statement: "Adds all items in a list.",
              },
            ],
            steps: [
              {
                reasoning: "2 + 4 + 6 = 12.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "ciecs-u4-fn-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a Python function max_list(lst) that returns the largest value in a non-empty list, without using the max() built-in.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Maximum pattern",
                statement: "Track largest with an if comparison.",
              },
            ],
            steps: [
              { reasoning: "def max_list(lst):", marks: 1, markCode: "M" },
              {
                reasoning: "Initialise largest = lst[0].",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Loop through the list; if item > largest: largest = item.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "return largest with correct indentation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "def max_list(lst):\n    largest = lst[0]\n    for item in lst:\n        if item > largest:\n            largest = item\n    return largest",
          },
        },
        {
          id: "ciecs-u4-fn-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'a b c'.split() return in Python?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The string 'abc'" },
              { id: "b", text: "The list ['a', 'b', 'c']" },
              { id: "c", text: "The number 3" },
              { id: "d", text: "The string 'a b c'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "split()",
                statement: "Splits a string into a list of words.",
              },
            ],
            steps: [
              {
                reasoning: "split() divides on spaces, returning a list of three strings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result: ['a', 'b', 'c'].",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The list ['a', 'b', 'c']",
          },
        },
        {
          id: "ciecs-u4-fn-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a Python function evens_only(lst) that returns a new list containing only the even numbers from the input list.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Filter with list",
                statement: "Build a new list, appending matches.",
              },
            ],
            steps: [
              { reasoning: "def evens_only(lst):", marks: 1, markCode: "M" },
              {
                reasoning: "Create an empty result list before the loop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Loop through lst; if item % 2 == 0 append item to result.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "return result with correct indentation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "def evens_only(lst):\n    result = []\n    for item in lst:\n        if item % 2 == 0:\n            result.append(item)\n    return result",
          },
        },
        {
          id: "ciecs-u4-fn-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Python, what is the index of the first element in a list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It depends on the list" },
              { id: "b", text: "0" },
              { id: "c", text: "-1" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Index",
                statement: "Python lists are 0-indexed.",
              },
            ],
            steps: [
              {
                reasoning: "Indexing starts at 0, so the first element is index 0.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 0",
          },
        },
        {
          id: "ciecs-u4-fn-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "For nums = [5, 3, 8, 1], what is the sum of the first and last elements?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "List indexing",
                statement: "First = index 0; last = index len - 1.",
              },
            ],
            steps: [
              {
                reasoning: "First element nums[0] = 5; last element nums[3] = 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "5 + 1 = 6.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "ciecs-u4-fn-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a Python function is_palindrome(s) that returns True if the string reads the same forwards and backwards, e.g. 'level'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "String reversal",
                statement: "Compare s with its reverse.",
              },
            ],
            steps: [
              { reasoning: "def is_palindrome(s):", marks: 1, markCode: "M" },
              {
                reasoning: "Reverse the string, e.g. s[::-1] or a manual loop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compare s == reversed and return True/False.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct syntax and indentation throughout.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "def is_palindrome(s):\n    return s == s[::-1]",
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
