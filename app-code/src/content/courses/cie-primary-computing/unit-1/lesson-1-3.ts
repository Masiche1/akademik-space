import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cipc-u1-lesson-1-3",
  code: "1-3",
  title: "Stage 1 — Sorting and Classifying Data",
  goal: "I CAN sort objects and data into groups and explain how computers store and organise information.",
  standards: ["Cambridge Primary Computing 0059 Stage 1: managing data", "Cambridge Primary Computing 0059 framework strands: Managing data"],
  stage: 1,
  vocabulary: [
    { term: "Data", definition: "Information that a computer stores or processes." },
    { term: "Sort", definition: "To arrange items into groups by a rule." },
    { term: "Classify", definition: "To group things that share a feature." },
    { term: "Group", definition: "A set of items with something in common." },
    { term: "File", definition: "A named collection of data stored on a device." },
    { term: "Folder", definition: "A place that stores files together." },
  ],
  concepts: [
    {
      id: "cipc-u1-s1-data",
      title: "Sorting and classifying data",
      skill: "Sort items by rules and describe how data is stored at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Sorting and classifying",
            body: "Sorting means arranging things by a rule — colour, size, type. Classifying means putting things into groups that share a feature — animals with legs, vehicles with wheels. Computers sort data the same way: by name, date, size or type.",
          },
          {
            heading: "Storing data",
            body: "Data on a computer is stored in files. Files are kept in folders so they are easy to find — like toys in a toy box. Photos, songs, documents and games are all files stored on the device's memory.",
          },
        ],
        keyFormulas: [
          { name: "Sort", statement: "arrange by a rule (size, colour, name)" },
          { name: "Classify", statement: "group by shared features" },
          { name: "File/folder", statement: "named data collection / container for files" },
        ],
        workedExample: {
          problem: "Sort these animals: cat, dog, eagle, sparrow, goldfish. Which rule did you use?",
          solution: "By where they live/breathe: pets (cat, dog), flying birds (eagle, sparrow), water animal (goldfish). Any clear rule works if applied consistently.",
        },
      },
      questions: [
        {
          id: "cipc-u1-sd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to sort data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Arrange items by a rule"
                    },
                    {
                              "id": "b",
                              "text": "Delete old files"
                    },
                    {
                              "id": "c",
                              "text": "Make the screen brighter"
                    },
                    {
                              "id": "d",
                              "text": "Connect to the internet"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sorting",
                              "statement": "Arrange by a rule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorting = arranging by criteria like size or name.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Arrange items by a rule"
},
        },
        {
          id: "cipc-u1-sd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways you could group these shapes: circle, square, triangle, star.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Classifying",
                              "statement": "Group by features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "By number of sides: 0 (circle), 3 (triangle), 4 (square), many (star).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "By curves vs straight edges, or size.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. by sides or by curved/straight edges"
},
        },
        {
          id: "cipc-u1-sd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A folder on a tablet is called 'Photos'. Explain what a folder is and why we use them. Give one more example of data that could be stored.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Files and folders",
                              "statement": "Storage organisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Folder = container that stores related files together.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Used so files are easy to find and organised.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid data example: songs, documents, videos.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Folder organises files; e.g. songs/documents"
},
        },
        {
          id: "cipc-u1-sd-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define data. (b) Explain the difference between sorting and classifying. (c) Sort these into two groups by a rule you choose: apple, banana, carrot, grape, potato. (d) What is a file? (e) What is a folder and why are they useful? (f) Name three types of data a computer might store. (g) How does a computer sort names alphabetically? (h) Give an example of data you have sorted yourself.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Data management",
                              "statement": "Definitions, sorting rules, storage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Information a computer stores or processes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Sorting=arrange; classifying=group by features.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid two-group sort (fruit vs vegetable) with consistent rule.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Named collection of stored data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Folder stores files; keeps things organised/findable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three types: photos, music, documents/videos.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Compares first letters then following letters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Personal sorting example.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Data, sorting vs classifying, fruit/veg sort, files/folders, data types, alphabetical sorting."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-sd-notes",
      title: "Sorting and data — notes",
      summary: "Sort by rules; classify by features. Files store data, folders organise files.",
      sections: [
        { heading: "Key idea", body: "Good sorting needs a clear, consistent rule." },
        { heading: "Storage", body: "Files = data; folders = containers that keep files organised." },
      ],
    },
  ],
};
