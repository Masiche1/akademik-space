import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edxpc-u3-lesson-3-2",
  code: "3-2",
  title: "Sorting and Searching Data",
  goal: "I CAN sort data into order and find items quickly.",
  standards: ["Y4-Y6 Data and information", "Sorting and searching"],
  vocabulary: [
    {
      term: "Sort",
      definition: "To arrange data in order, e.g. smallest to largest.",
    },
    { term: "Ascending", definition: "Order from smallest to largest." },
    { term: "Descending", definition: "Order from largest to smallest." },
    {
      term: "Binary search",
      definition: "A fast way to find an item by halving the list each time.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u3-sorting",
      title: "Sorting Data",
      skill: "Sort data into ascending or descending order.",
      lesson: {
        sections: [
          {
            heading: "Why sort?",
            body: "Sorted data is easy to read and find things in. A list of scores sorted from highest to lowest shows the winner immediately. Names sorted alphabetically make a register easy to search. Sorting brings order to data.",
          },
          {
            heading: "How to sort",
            body: "Ascending order: smallest to largest (3, 7, 12, 20) or A to Z. Descending order: largest to smallest (20, 12, 7, 3) or Z to A. Compare one pair at a time — which comes first? Put them in order step by step.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Sort into ascending order: 15, 8, 23, 11.",
          solution: "8, 11, 15, 23.",
        },
      },
      questions: [
        {
          id: "edxpc-u3-sort-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does ascending order mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Largest to smallest" },
              { id: "b", text: "Smallest to largest" },
              { id: "c", text: "Random order" },
              { id: "d", text: "Alphabetical only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ascending",
                statement: "Smallest to largest.",
              },
            ],
            steps: [
              {
                reasoning: "Ascending = smallest first.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Smallest to largest",
            commonErrors: ["Reversing ascending and descending."],
          },
        },
        {
          id: "edxpc-u3-sort-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sort into ascending order: 9, 4, 17, 12.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "17, 12, 9, 4" },
              { id: "b", text: "4, 9, 12, 17" },
              { id: "c", text: "4, 12, 9, 17" },
              { id: "d", text: "9, 4, 17, 12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sorting numbers",
                statement: "Compare and order smallest to largest.",
              },
            ],
            steps: [
              {
                reasoning: "4, 9, 12, 17 is ascending.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4, 9, 12, 17",
            commonErrors: ["Not fully sorted."],
          },
        },
        {
          id: "edxpc-u3-sort-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sort these names alphabetically: Zoe, Amy, Ben, Mia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Alphabetical sort",
                statement: "Compare first letters, then second.",
              },
            ],
            steps: [
              {
                reasoning: "First letters: A, B, M, Z.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct full order: Amy, Ben, Mia, Zoe.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Order is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amy, Ben, Mia, Zoe",
            commonErrors: ["Wrong alphabetical order."],
          },
        },
        {
          id: "edxpc-u3-sort-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is sorted data easier to search than unsorted data? Explain with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sorting benefits",
                statement: "Sorted data allows faster, easier searching.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sorted data has a known order — you know where to look.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example — in a sorted name list you can skip sections that cannot contain the name.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Saves time on large lists.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Known order = faster searching, e.g. skip sections",
            commonErrors: ["No real explanation."],
          },
        },
      ],
    },
    {
      id: "edxpc-u3-searching",
      title: "Searching for Data",
      skill: "Use simple search methods to find data quickly.",
      lesson: {
        sections: [
          {
            heading: "Linear search",
            body: "The simplest search: check each item one by one until you find it. Works for any list, but slow for big lists — you might check hundreds of items. Good for small lists or unsorted data.",
          },
          {
            heading: "Binary search",
            body: "A much faster method for SORTED lists. Look at the middle item: if it is what you want, done. If it is too small, search the upper half; if too big, search the lower half. Repeat — each step halves the list. Finding a name in a sorted register of 1000 is quick with binary search.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Find 42 in sorted list [10, 21, 35, 42, 58, 70, 85] using binary search.",
          solution: "Middle is 42 — found immediately.",
        },
      },
      questions: [
        {
          id: "edxpc-u3-search-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a linear search?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Checking items one by one in order" },
              { id: "b", text: "Halving the list each time" },
              { id: "c", text: "Random checking" },
              { id: "d", text: "Using a calculator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Linear search",
                statement: "Check each item one by one.",
              },
            ],
            steps: [
              { reasoning: "Linear = one by one.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** One by one",
            commonErrors: ["Confusing with binary search."],
          },
        },
        {
          id: "edxpc-u3-search-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does binary search require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An unsorted list" },
              { id: "b", text: "A sorted list" },
              { id: "c", text: "A computer" },
              { id: "d", text: "A big list" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Binary search",
                statement: "Requires sorted data to halve the list.",
              },
            ],
            steps: [
              {
                reasoning: "Binary search needs sorted data.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A sorted list",
            commonErrors: ["Thinking any list works."],
          },
        },
        {
          id: "edxpc-u3-search-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find 15 in this sorted list using binary search: [3, 8, 12, 15, 20, 25, 30]. Show your steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Binary search",
                statement: "Check middle, halve the list.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Middle item checked first (15 or 20 depending on split).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correctly narrows to correct half.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Finds 15 and states it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. middle 15 → found",
            commonErrors: ["Checking items one by one instead of halving."],
          },
        },
        {
          id: "edxpc-u3-search-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A school has 500 students in a register sorted by name. Compare linear vs binary search for finding one student.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Search comparison",
                statement: "Binary search is faster on sorted data.",
              },
            ],
            steps: [
              {
                reasoning: "Linear: could check up to 500 names one by one.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Binary: halves each time — about 9 checks max (500→250→125→...).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Binary much faster but needs sorted data.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Linear slow (up to 500); binary ~9 checks",
            commonErrors: ["Not quantifying the difference."],
          },
        },
      ],
    },
    {
      id: "edxpc-u3-queries",
      title: "Asking Questions of Data",
      skill: "Use simple queries to find specific data.",
      lesson: {
        sections: [
          {
            heading: "What is a query?",
            body: "A query is a question you ask of a database. 'Show me all students in Year 5' is a query. 'Which books were borrowed in March?' is a query. Queries let you find exactly the data you need without reading everything.",
          },
          {
            heading: "Simple queries",
            body: "Queries can ask for: all records matching a condition ('score > 10'), specific fields ('show names only'), or sorted results ('highest score first'). Database software like spreadsheets can answer queries with filters and sort tools.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Write a query: show all children who scored over 10 in a quiz.",
          solution: "Show records where score > 10.",
        },
      },
      questions: [
        {
          id: "edxpc-u3-query-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a query?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of file" },
              { id: "b", text: "A question asked of a database" },
              { id: "c", text: "A program" },
              { id: "d", text: "A chart" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Query",
                statement: "A question asked of a database.",
              },
            ],
            steps: [
              {
                reasoning: "Query = question for data.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Question for database",
            commonErrors: ["Confusing query with a file type."],
          },
        },
        {
          id: "edxpc-u3-query-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a query?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Save the file" },
              { id: "b", text: "Show all students in Year 5" },
              { id: "c", text: "Print the list" },
              { id: "d", text: "Close the app" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Queries",
                statement: "Queries ask questions of stored data.",
              },
            ],
            steps: [
              {
                reasoning: "'Show all in Year 5' is a query.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Show all Year 5 students",
            commonErrors: ["Choosing file operations."],
          },
        },
        {
          id: "edxpc-u3-query-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A library database has columns: Title, Author, Borrowed (yes/no). Write a query to find all books currently borrowed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Writing queries",
                statement: "State the condition clearly.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies condition — Borrowed = yes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "States query clearly, e.g. 'Show records where Borrowed is yes'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Could specify which columns to show.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Show records where Borrowed = yes",
            commonErrors: ["Vague or no condition."],
          },
        },
        {
          id: "edxpc-u3-query-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why queries are useful when a database has thousands of records.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Query value",
                statement:
                  "Queries find specific data without reading everything.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without queries you would have to read every record.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Queries return only matching records — saves time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Can combine conditions and sorting for precise answers.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Finds specific data fast in huge databases",
            commonErrors: ["Saying queries are only for small lists."],
          },
        },
      ],
    },
  ],
};
