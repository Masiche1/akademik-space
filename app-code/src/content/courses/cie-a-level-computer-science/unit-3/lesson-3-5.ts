import type { Lesson } from "../../../types.ts";

export const lesson145: Lesson = {
  id: "ciealc-u3-lesson-3-5",
  code: "3-5",
  title: "Programming in Practice: Strings, Lists, Files",
  goal: "I CAN manipulate strings and lists and handle file input/output.",
  standards: [
    "Cambridge A Level Computer Science 9618: programming",
    "9618: data structures",
  ],

  vocabulary: [
    { term: "String", definition: "Sequence of characters." },
    { term: "List/array", definition: "Ordered collection of elements." },
    { term: "Index", definition: "Position of element in list/string." },
    { term: "Substring", definition: "Portion of a string." },
    {
      term: "File I/O",
      definition: "Reading/writing files for persistent data.",
    },
    { term: "Validation", definition: "Checking input meets requirements." },
  ],
  concepts: [
    {
      id: "ciealc-u3-s5-prac",
      title: "Practical programming",
      skill: "Manipulate strings/lists and handle files.",
      lesson: {
        sections: [
          {
            heading: "Strings and lists",
            body: "Strings: access by index, slicing, concatenation, methods (len, upper, find). Lists: index access, append, insert, remove, sort, iterate. Lists are mutable; strings often immutable.",
          },
          {
            heading: "File handling",
            body: "Read: open file → read data → close. Write: open file → write data → close. Always validate input before processing. Exception handling for errors (file not found, bad input).",
          },
        ],
        keyFormulas: [
          { name: "Index", statement: "0-based position" },
          { name: "String ops", statement: "concat, slice, len, find" },
          { name: "List ops", statement: "append, insert, remove, sort" },
        ],
        workedExample: {
          problem: "Write pseudocode to count vowels in a string.",
          solution:
            "count = 0; FOR i = 0 TO len(str)-1 DO IF str[i] IN 'aeiou' THEN count = count + 1; ENDIF; ENDFOR; OUTPUT count.",
        },
      },
      questions: [
        {
          id: "ciealc-u3-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a string?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Sequence of characters",
              },
              {
                id: "b",
                text: "A file",
              },
              {
                id: "c",
                text: "A list of numbers",
              },
              {
                id: "d",
                text: "A number",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "String",
                statement: "Character sequence.",
              },
            ],
            steps: [
              {
                reasoning: "String = sequence of characters.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Character sequence",
          },
        },
        {
          id: "ciealc-u3-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a list/array?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "List",
                statement: "Ordered collection.",
              },
            ],
            steps: [
              {
                reasoning: "List = ordered collection of elements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Accessed by index.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Ordered element collection",
          },
        },
        {
          id: "ciealc-u3-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is file I/O and why is it important?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "File I/O",
                statement: "Read/write files.",
              },
            ],
            steps: [
              {
                reasoning: "File I/O = reading/writing data to files.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enables persistent data storage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Data survives program termination.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Persistent file storage",
          },
        },
        {
          id: "ciealc-u3-pr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define string, list, index, substring, file I/O, validation. (b) What is string indexing? (c) What is list indexing? (d) What is string concatenation? (e) Write pseudocode to reverse a string. (f) What is validation? (g) What happens if file doesn't exist? (h) Write pseudocode to save user data to a file.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Practical programming",
                statement: "Strings, lists, files.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Access char by position.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Access element by position.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Joining strings with +.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Valid reverse string pseudocode.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Checking input requirements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Exception/error handling needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid file write pseudocode.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Strings, lists and file handling.",
          },
        },
        {
          id: "ciealc-u3-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In most programming languages, what index does the first character of a string have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "Depends on the language" },
              { id: "c", text: "0" },
              { id: "d", text: "-1" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "String index",
                statement: "Indexing is 0-based.",
              },
            ],
            steps: [
              {
                reasoning: "The first character is at index 0.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** 0",
          },
        },
        {
          id: "ciealc-u3-pr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: 'What is the length of the string "HELLO"? Give your answer as a number.',
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "String length",
                statement: "len() counts the characters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "H-E-L-L-O = 5 characters.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "ciealc-u3-pr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which list operation adds a new element to the end of a list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "append" },
              { id: "b", text: "find" },
              { id: "c", text: "remove" },
              { id: "d", text: "slice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "List operations",
                statement: "append adds to the end.",
              },
            ],
            steps: [
              {
                reasoning:
                  "append() adds an element at the end; remove() deletes one.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** append",
          },
        },
        {
          id: "ciealc-u3-pr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A list is defined as values = [10, 20, 30]. The operation values.append(40) is performed. What is the new length of the list? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "List append",
                statement: "append adds one element.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "3 elements + 1 appended = 4.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "ciealc-u3-pr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between mutable and immutable data types, using a string and a list as examples.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mutable vs immutable",
                statement: "Can vs cannot be changed in place.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A list is mutable — elements can be changed, appended or removed in place.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A string is typically immutable — operations create a new string rather than changing the original.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Lists change in place; strings are recreated",
          },
        },
        {
          id: "ciealc-u3-pr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct general order of steps for reading data from a file?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Open the file, delete it, close the file" },
              { id: "b", text: "Open the file, read the data, close the file" },
              { id: "c", text: "Close the file, open the file, read the data" },
              {
                id: "d",
                text: "Read the data, delete the file, open the file",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "File handling",
                statement: "Open → read/write → close.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A file must be opened before access and closed afterwards to free resources.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Open, read, close",
          },
        },
        {
          id: "ciealc-u3-pr-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: 'Using the string s = "education", how many vowels (a, e, i, o, u) does it contain? Give your answer as a number.',
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "String iteration",
                statement: "Check each character against vowels.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "e-d-u-c-a-t-i-o-n: vowels e, u, a, i, o = 5.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "ciealc-u3-pr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should input be validated before it is used in file processing or calculations?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Input validation",
                statement: "Reject bad data before processing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Invalid input can cause crashes, wrong results or corrupted files.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Validation checks data type, range and format before use.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Prevents errors and corrupted data",
          },
        },
        {
          id: "ciealc-u3-pr-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: 'What does the slice s[1:4] return for the string s = "python"?',
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: '"yth"' },
              { id: "b", text: '"ytho"' },
              { id: "c", text: '"hon"' },
              { id: "d", text: '"pyth"' },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "String slicing",
                statement:
                  "s[a:b] returns characters from index a up to (not including) b.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Indices 1, 2, 3 are 'y', 't', 'h' — the slice is \"yth\".",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: '**(a)** "yth"',
          },
        },
        {
          id: "ciealc-u3-pr-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A list values = [5, 3, 8] is sorted in ascending order. What is the value of the first element? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "List sorting",
                statement: "Ascending order puts smallest first.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sorted: [3, 5, 8]; first element = 3.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciealc-u3-pr-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write pseudocode that opens a text file, reads all of its lines and outputs the number of lines in the file, then closes the file.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "File handling",
                statement: "Open, read, process, close.",
              },
            ],
            steps: [
              {
                reasoning: "Open the file for reading.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Read the lines into a list and determine its length.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Output the count and close the file.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "OPEN file; read lines; OUTPUT length; CLOSE file",
          },
        },
        {
          id: "ciealc-u3-pr-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the purpose of exception handling when working with files?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To compress the file automatically" },
              { id: "b", text: "To make the program run faster" },
              {
                id: "c",
                text: "To handle errors such as a missing file gracefully instead of crashing",
              },
              { id: "d", text: "To encrypt the file contents" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exception handling",
                statement: "Graceful handling of runtime errors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It catches errors like file-not-found so the program can respond appropriately.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Handle errors gracefully",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u3-pr-notes",
      title: "Practical programming — notes",
      summary:
        "Strings=char sequences; lists=ordered collections; files= persistent storage. Validate input, handle exceptions.",
      sections: [
        {
          heading: "Key idea",
          body: "Always validate input and handle file errors gracefully.",
        },
        {
          heading: "Strings vs lists",
          body: "Strings immutable (often); lists mutable — different operations.",
        },
      ],
    },
  ],
};
