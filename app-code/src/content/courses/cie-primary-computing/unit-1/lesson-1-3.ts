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
                              "text": "Connect to the internet"
                    },
                    {
                              "id": "b",
                              "text": "Make the screen brighter"
                    },
                    {
                              "id": "c",
                              "text": "Arrange items by a rule"
                    },
                    {
                              "id": "d",
                              "text": "Delete old files"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "cipc-u1-sd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rule would sort these items: apple, banana, carrot, grape?",
          response: { type: "mcq", choices: [
            { id: "a", text: "By whether they are fruit or a vegetable" },
            { id: "b", text: "Randomly" },
            { id: "c", text: "By size only" },
            { id: "d", text: "By colour" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sort rule", statement: "Arrange by a clear, consistent rule." }],
            steps: [
              { reasoning: "Fruit vs vegetable is a clear feature-based rule; colour would also work but 'fruit or vegetable' best matches the mixed list.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** By whether they are fruit or a vegetable",
          },
        },
        {
          id: "cipc-u1-sd-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sort these items into two groups by a rule you choose: pen, pencil, ruler, eraser, scissors.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Classifying", statement: "Group items by a shared feature." }],
            steps: [
              { reasoning: "e.g. writing tools (pen, pencil, eraser) vs measuring/cutting tools (ruler, scissors).", marks: 1, markCode: "M" },
              { reasoning: "Any clear consistent rule with all items placed in a group.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. writing tools vs measuring/cutting tools",
          },
        },
        {
          id: "cipc-u1-sd-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A folder called 'School' holds 5 worksheets, 3 photos and 2 videos. How many files are in the folder?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Total files", statement: "5 + 3 + 2." }],
            steps: [
              { reasoning: "Count all items: 5 + 3 + 2 = 10.", marks: 1, markCode: "M" },
              { reasoning: "The folder contains 10 files.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipc-u1-sd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an example of classifying data?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Turning on the computer" },
            { id: "b", text: "Charging the battery" },
            { id: "c", text: "Deleting old files" },
            { id: "d", text: "Putting all the red pens in one pot" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Classify", statement: "Group by shared features." }],
            steps: [
              { reasoning: "Grouping red pens together uses the shared feature 'red' — that is classifying.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Putting all the red pens in one pot",
          },
        },
        {
          id: "cipc-u1-sd-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a computer might sort a class list of names alphabetically. What does it compare first?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Alphabetical sorting", statement: "Compare letter by letter." }],
            steps: [
              { reasoning: "The computer compares the first letter of each name.", marks: 1, markCode: "M" },
              { reasoning: "Names starting with earlier letters come first (A before B).", marks: 1, markCode: "M" },
              { reasoning: "If first letters match, it compares the next letters; ties keep order or use another rule.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Compare first letters, then next letters if tied.",
          },
        },
        {
          id: "cipc-u1-sd-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which is NOT a sensible rule for sorting toys in a toy box?",
          response: { type: "mcq", choices: [
            { id: "a", text: "By colour" },
            { id: "b", text: "By how much you personally like each toy" },
            { id: "c", text: "By size" },
            { id: "d", text: "By type (cars, dolls, balls)" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Good sorting rules", statement: "Rules must be clear and consistent." }],
            steps: [
              { reasoning: "Colour, type and size are objective features everyone can apply consistently.", marks: 1, markCode: "M" },
              { reasoning: "'How much you like it' is a personal feeling — different people would sort differently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** By how much you personally like each toy",
          },
        },
        {
          id: "cipc-u1-sd-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A class has 24 children. 10 have a pet and 9 have a bike. 8 children have neither. How many children have BOTH a pet and a bike?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Overlap", statement: "Pets + bikes - (total - neither)." }],
            steps: [
              { reasoning: "Children with a pet or bike or both: 24 - 8 = 16.", marks: 1, markCode: "M" },
              { reasoning: "Both = 10 + 9 - 16 = 3.", marks: 1, markCode: "M" },
              { reasoning: "3 children have both a pet and a bike.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipc-u1-sd-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Your tablet has a folder called 'Homework'. Describe two reasons folders like this are useful.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Folders", statement: "Containers that organise files." }],
            steps: [
              { reasoning: "Keeps related files together so they are easy to find.", marks: 1, markCode: "M" },
              { reasoning: "Stops the device getting cluttered; homework files stay separate from games/photos.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Organises files and makes them easy to find.",
          },
        },
        {
          id: "cipc-u1-sd-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sort these into two groups by 'can fly or cannot fly': sparrow, goldfish, eagle, cat, bat, turtle. Explain your rule in one sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sort and explain", statement: "Apply rule and state it." }],
            steps: [
              { reasoning: "Can fly: sparrow, eagle, bat; cannot fly: goldfish, cat, turtle.", marks: 1, markCode: "M" },
              { reasoning: "Every item placed in exactly one group.", marks: 1, markCode: "M" },
              { reasoning: "Rule stated clearly: 'sorted by whether the animal can fly'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Can fly: sparrow, eagle, bat; cannot fly: goldfish, cat, turtle.",
          },
        },
        {
          id: "cipc-u1-sd-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'Photos' folder has 12 pictures. You add 5 more photos to it. How many pictures are in the folder now?",
          response: { type: "numeric", parts: [{ label: "a", answer: 17 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Adding files", statement: "12 + 5." }],
            steps: [
              { reasoning: "12 + 5 = 17 pictures.", marks: 1, markCode: "M" },
              { reasoning: "The folder now holds 17 pictures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "cipc-u1-sd-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A computer sorts song titles by length, shortest first. The titles are: 'Sky', 'Rain song', 'A beautiful day', 'Go'. List them in the order the computer would show them.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sort by length", statement: "Count characters, shortest first." }],
            steps: [
              { reasoning: "Lengths: 'Go'=2, 'Sky'=3, 'Rain song'=9, 'A beautiful day'=15.", marks: 1, markCode: "M" },
              { reasoning: "Order: Go, Sky, Rain song, A beautiful day.", marks: 1, markCode: "M" },
              { reasoning: "Sorted correctly by ascending length.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Go, Sky, Rain song, A beautiful day",
          },
        },
        {
          id: "cipc-u1-sd-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define data and give two examples. (b) What is the difference between sorting and classifying? (c) Sort these into two groups by a rule you choose: book, banana, pencil, apple, ruler. (d) What is a file? (e) What is a folder and why are they useful? (f) Name three types of data a computer might store. (g) Why must a sorting rule be consistent? (h) Describe how you would organise photos on a tablet.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Data management", statement: "Definitions, sorting rules, storage, organisation." }],
            steps: [
              { reasoning: "(a) Information stored/processed; e.g. photos, numbers, text.", marks: 1, markCode: "M" },
              { reasoning: "(b) Sorting=arrange by rule; classifying=group by shared features.", marks: 1, markCode: "M" },
              { reasoning: "(c) Valid two-group sort (fruit vs stationery) with consistent rule.", marks: 1, markCode: "M" },
              { reasoning: "(d) Named collection of stored data.", marks: 1, markCode: "M" },
              { reasoning: "(e) Folder stores files; keeps things organised and findable.", marks: 1, markCode: "M" },
              { reasoning: "(f) Three types: photos, music/songs, documents/text.", marks: 1, markCode: "M" },
              { reasoning: "(g) Inconsistent rules make groups unfair/overlapping and hard to find things.", marks: 1, markCode: "M" },
              { reasoning: "(h) Sensible plan: folders by event/year, clear names.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Data, sorting vs classifying, fruit/stationery sort, files/folders, data types, consistent rules, photo organisation.",
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
