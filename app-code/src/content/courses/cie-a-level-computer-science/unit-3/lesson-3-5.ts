import type { Lesson } from "../../../types.ts";

export const lesson145: Lesson = {
  id: "ciealc-u3-lesson-3-5",
  code: "3-5",
  title: "Programming in Practice: Strings, Lists, Files",
  goal: "I CAN manipulate strings and lists and handle file input/output.",
  standards: ["Cambridge A Level Computer Science 9618: programming", "9618: data structures"],
  
  vocabulary: [
    { term: "String", definition: "Sequence of characters." },
    { term: "List/array", definition: "Ordered collection of elements." },
    { term: "Index", definition: "Position of element in list/string." },
    { term: "Substring", definition: "Portion of a string." },
    { term: "File I/O", definition: "Reading/writing files for persistent data." },
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
          solution: "count = 0; FOR i = 0 TO len(str)-1 DO IF str[i] IN 'aeiou' THEN count = count + 1; ENDIF; ENDFOR; OUTPUT count.",
        },
      },
      questions: [
        {
          id: "ciealc-u3-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a string?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sequence of characters"
                    },
                    {
                              "id": "b",
                              "text": "A number"
                    },
                    {
                              "id": "c",
                              "text": "A list of numbers"
                    },
                    {
                              "id": "d",
                              "text": "A file"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "String",
                              "statement": "Character sequence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "String = sequence of characters.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Character sequence"
},
        },
        {
          id: "ciealc-u3-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a list/array?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "List",
                              "statement": "Ordered collection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "List = ordered collection of elements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accessed by index.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ordered element collection"
},
        },
        {
          id: "ciealc-u3-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is file I/O and why is it important?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "File I/O",
                              "statement": "Read/write files."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "File I/O = reading/writing data to files.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enables persistent data storage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Data survives program termination.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Persistent file storage"
},
        },
        {
          id: "ciealc-u3-pr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define string, list, index, substring, file I/O, validation. (b) What is string indexing? (c) What is list indexing? (d) What is string concatenation? (e) Write pseudocode to reverse a string. (f) What is validation? (g) What happens if file doesn't exist? (h) Write pseudocode to save user data to a file.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Practical programming",
                              "statement": "Strings, lists, files."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Access char by position.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Access element by position.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Joining strings with +.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid reverse string pseudocode.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Checking input requirements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Exception/error handling needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid file write pseudocode.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Strings, lists and file handling."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u3-pr-notes",
      title: "Practical programming — notes",
      summary: "Strings=char sequences; lists=ordered collections; files= persistent storage. Validate input, handle exceptions.",
      sections: [
        { heading: "Key idea", body: "Always validate input and handle file errors gracefully." },
        { heading: "Strings vs lists", body: "Strings immutable (often); lists mutable — different operations." },
      ],
    },
  ],
};
