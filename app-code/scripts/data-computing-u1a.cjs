// Data specs for cie-primary-computing unit-1 lessons 3-13
module.exports = [
  {
    file: "lesson-1-3.ts", exportName: "lesson13",
    lesson: {
      id: "cipc-u1-lesson-1-3", code: "1-3",
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
      concept: {
        id: "cipc-u1-s1-data", title: "Sorting and classifying data",
        skill: "Sort items by rules and describe how data is stored at Stage 1 level.",
        sections: [
          { heading: "Sorting and classifying", body: "Sorting means arranging things by a rule — colour, size, type. Classifying means putting things into groups that share a feature — animals with legs, vehicles with wheels. Computers sort data the same way: by name, date, size or type." },
          { heading: "Storing data", body: "Data on a computer is stored in files. Files are kept in folders so they are easy to find — like toys in a toy box. Photos, songs, documents and games are all files stored on the device's memory." },
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
        questions: [
          {
            id: "cipc-u1-sd-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does it mean to sort data?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Arrange items by a rule" }, { id: "b", text: "Delete old files" }, { id: "c", text: "Make the screen brighter" }, { id: "d", text: "Connect to the internet" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Sorting", statement: "Arrange by a rule." }],
              steps: [{ reasoning: "Sorting = arranging by criteria like size or name.", marks: 1, markCode: "M" }],
              finalAnswer: "Arrange items by a rule",
            },
          },
          {
            id: "cipc-u1-sd-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two ways you could group these shapes: circle, square, triangle, star.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Classifying", statement: "Group by features." }],
              steps: [
                { reasoning: "By number of sides: 0 (circle), 3 (triangle), 4 (square), many (star).", marks: 1, markCode: "M" },
                { reasoning: "By curves vs straight edges, or size.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. by sides or by curved/straight edges",
            },
          },
          {
            id: "cipc-u1-sd-q3", difficulty: "core", totalMarks: 3,
            stem: "A folder on a tablet is called 'Photos'. Explain what a folder is and why we use them. Give one more example of data that could be stored.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Files and folders", statement: "Storage organisation." }],
              steps: [
                { reasoning: "Folder = container that stores related files together.", marks: 1, markCode: "M" },
                { reasoning: "Used so files are easy to find and organised.", marks: 1, markCode: "M" },
                { reasoning: "Valid data example: songs, documents, videos.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Folder organises files; e.g. songs/documents",
            },
          },
          {
            id: "cipc-u1-sd-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define data. (b) Explain the difference between sorting and classifying. (c) Sort these into two groups by a rule you choose: apple, banana, carrot, grape, potato. (d) What is a file? (e) What is a folder and why are they useful? (f) Name three types of data a computer might store. (g) How does a computer sort names alphabetically? (h) Give an example of data you have sorted yourself.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Data management", statement: "Definitions, sorting rules, storage." }],
              steps: [
                { reasoning: "(a) Information a computer stores or processes.", marks: 1, markCode: "M" },
                { reasoning: "(b) Sorting=arrange; classifying=group by features.", marks: 1, markCode: "M" },
                { reasoning: "(c) Valid two-group sort (fruit vs vegetable) with consistent rule.", marks: 1, markCode: "M" },
                { reasoning: "(d) Named collection of stored data.", marks: 1, markCode: "M" },
                { reasoning: "(e) Folder stores files; keeps things organised/findable.", marks: 1, markCode: "M" },
                { reasoning: "(f) Three types: photos, music, documents/videos.", marks: 1, markCode: "M" },
                { reasoning: "(g) Compares first letters then following letters.", marks: 1, markCode: "M" },
                { reasoning: "(h) Personal sorting example.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Data, sorting vs classifying, fruit/veg sort, files/folders, data types, alphabetical sorting.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-sd-notes", title: "Sorting and data — notes",
      summary: "Sort by rules; classify by features. Files store data, folders organise files.",
      sections: [
        { heading: "Key idea", body: "Good sorting needs a clear, consistent rule." },
        { heading: "Storage", body: "Files = data; folders = containers that keep files organised." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson14",
    lesson: {
      id: "cipc-u1-lesson-1-4", code: "1-4",
      title: "Stage 2 — Decomposition and Simple Programs",
      goal: "I CAN break a big task into small steps and build simple programs using blocks.",
      standards: ["Cambridge Primary Computing 0059 Stage 2: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
      stage: 2,
      vocabulary: [
        { term: "Decomposition", definition: "Breaking a big problem into smaller parts." },
        { term: "Block", definition: "A puzzle-piece instruction in visual programming." },
        { term: "Sprite", definition: "A character or object in a Scratch program." },
        { term: "Script", definition: "The stack of blocks that makes a sprite act." },
        { term: "Sequence", definition: "Blocks run from top to bottom." },
        { term: "Event", definition: "Something that starts a program, like clicking a flag." },
      ],
      concept: {
        id: "cipc-u1-s2-program", title: "Decomposition and block programming",
        skill: "Break tasks into steps and assemble simple block programs at Stage 2 level.",
        sections: [
          { heading: "Breaking problems down", body: "Decomposition means splitting a hard task into small, easy steps — like planning a party: invite guests, buy food, decorate. In computing, you break a program idea into small instructions before building it." },
          { heading: "Block programming", body: "Scratch uses coloured blocks that snap together like puzzle pieces. Yellow blocks control events, blue blocks move sprites, purple blocks look/sound. Blocks run in order from top to bottom, starting when an event like the green flag is clicked." },
        ],
        keyFormulas: [
          { name: "Decompose", statement: "big task → small steps" },
          { name: "Blocks", statement: "snap together; run top to bottom" },
          { name: "Event", statement: "green flag / key press starts the script" },
        ],
        workedExample: {
          problem: "Decompose 'make the cat walk to the edge and meow' into Scratch blocks.",
          solution: "1. When green flag clicked 2. Move 10 steps 3. Repeat until touching edge 4. Play meow sound. Each block is one small step.",
        },
        questions: [
          {
            id: "cipc-u1-dp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is decomposition?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Breaking a big task into smaller steps" }, { id: "b", text: "Deleting a program" }, { id: "c", text: "Making the screen bigger" }, { id: "d", text: "Connecting two computers" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Decomposition", statement: "Split problem into parts." }],
              steps: [{ reasoning: "Decomposition = dividing a problem into manageable steps.", marks: 1, markCode: "M" }],
              finalAnswer: "Breaking a task into small steps",
            },
          },
          {
            id: "cipc-u1-dp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name the Scratch block that starts most programs and describe what a sprite is.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Events and sprites", statement: "Starter block and character." }],
              steps: [
                { reasoning: "'When green flag clicked' event block.", marks: 1, markCode: "M" },
                { reasoning: "Sprite = character/object that follows scripts.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Green flag event; sprite = program character",
            },
          },
          {
            id: "cipc-u1-dp-q3", difficulty: "core", totalMarks: 3,
            stem: "Decompose 'draw a square' into four simple instructions a sprite could follow.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Decomposition", statement: "Ordered simple steps." }],
              steps: [
                { reasoning: "Move forward, turn 90°, repeat pattern 4 times.", marks: 1, markCode: "M" },
                { reasoning: "Steps are small and ordered.", marks: 1, markCode: "M" },
                { reasoning: "Each step is one clear action.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "move → turn 90° → repeat ×4",
            },
          },
          {
            id: "cipc-u1-dp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define decomposition with an example. (b) What is a block in Scratch? (c) What is a sprite? (d) What event usually starts a Scratch program? (e) Decompose 'make a sprite say hello and move right' into blocks. (f) Why must blocks be in the right order? (g) What colour are motion blocks in Scratch? (h) Describe how you would test your program.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Programming basics", statement: "Decomposition, blocks, sprites, events, testing." }],
              steps: [
                { reasoning: "(a) Splitting task into steps; e.g. party planning.", marks: 1, markCode: "M" },
                { reasoning: "(b) Snapping instruction piece.", marks: 1, markCode: "M" },
                { reasoning: "(c) Program character/object.", marks: 1, markCode: "M" },
                { reasoning: "(d) Green flag clicked.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid block sequence (say → move).", marks: 1, markCode: "M" },
                { reasoning: "(f) Blocks run top-to-bottom — order changes result.", marks: 1, markCode: "M" },
                { reasoning: "(g) Blue.", marks: 1, markCode: "M" },
                { reasoning: "(h) Click flag and watch for expected behaviour.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Decomposition, blocks, sprites, flag event, sequence order, testing.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-dp-notes", title: "Decomposition and blocks — notes",
      summary: "Break big tasks into small steps. Scratch blocks snap together and run top to bottom from an event.",
      sections: [
        { heading: "Key idea", body: "Decompose first, then build with ordered blocks." },
        { heading: "Scratch", body: "Green flag event starts scripts; blue = motion; sprites are the actors." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson15",
    lesson: {
      id: "cipc-u1-lesson-1-5", code: "1-5",
      title: "Stage 2 — Patterns and Sequences",
      goal: "I CAN recognise and continue patterns, and explain how patterns help computers repeat actions.",
      standards: ["Cambridge Primary Computing 0059 Stage 2: computational thinking", "Cambridge Primary Computing 0059 framework strands: Computational thinking"],
      stage: 2,
      vocabulary: [
        { term: "Pattern", definition: "Something that repeats in a rule-based way." },
        { term: "Sequence", definition: "An ordered list where each item follows a rule." },
        { term: "Repeat", definition: "To do something again the same way." },
        { term: "Rule", definition: "The pattern's instruction for what comes next." },
        { term: "Continue", definition: "To extend a pattern with the next items." },
        { term: "Loop", definition: "A program structure that repeats instructions." },
      ],
      concept: {
        id: "cipc-u1-s2-pattern", title: "Recognising and continuing patterns",
        skill: "Identify pattern rules and extend sequences at Stage 2 level.",
        sections: [
          { heading: "Finding the rule", body: "Patterns repeat by a rule: 2, 4, 6, 8... adds 2 each time. Look at what changes between items — size, colour, number. Once you find the rule, you can continue the pattern forever." },
          { heading: "Patterns in computing", body: "Computers love patterns — repeating instructions is how programs do lots of work with few commands. A loop repeats a set of instructions, like 'move forward, turn left' repeated to draw a shape." },
        ],
        keyFormulas: [
          { name: "Pattern rule", statement: "find what changes each step" },
          { name: "Repeat/loop", statement: "same instructions again and again" },
        ],
        workedExample: {
          problem: "Continue the pattern: 🔴🔵🔴🔵🔴... What comes next? What is the rule?",
          solution: "Next is 🔵. Rule: alternate red, blue. Repeat the pair over and over.",
        },
        questions: [
          {
            id: "cipc-u1-pt-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a pattern?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Something that repeats by a rule" }, { id: "b", text: "A broken program" }, { id: "c", text: "A type of virus" }, { id: "d", text: "A fast processor" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Pattern", statement: "Rule-based repetition." }],
              steps: [{ reasoning: "Pattern repeats following a rule.", marks: 1, markCode: "M" }],
              finalAnswer: "Rule-based repetition",
            },
          },
          {
            id: "cipc-u1-pt-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Continue: 5, 10, 15, 20, __, __. What is the rule?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Number patterns", statement: "Add the same amount." }],
              steps: [
                { reasoning: "Next: 25, 30.", marks: 1, markCode: "M" },
                { reasoning: "Rule: add 5 each time.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "25, 30; add 5",
            },
          },
          {
            id: "cipc-u1-pt-q3", difficulty: "core", totalMarks: 3,
            stem: "A sprite moves 'forward 10, turn right' repeatedly. What shape will it draw? Explain how a loop helps here.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Loops and patterns", statement: "Repetition creates shapes." }],
              steps: [
                { reasoning: "Draws a square (4 equal sides/turns).", marks: 1, markCode: "M" },
                { reasoning: "Loop repeats the two instructions automatically.", marks: 1, markCode: "M" },
                { reasoning: "Fewer blocks needed than writing each step.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Square; loop repeats instructions",
            },
          },
          {
            id: "cipc-u1-pt-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define pattern. (b) Continue: A, B, A, B, A, __. (c) Continue: 3, 6, 12, 24, __. (d) What is a loop? (e) Explain how repeating 'move, turn 90°' draws a square. (f) Why do programmers use loops instead of repeating blocks? (g) Find the rule: 1, 4, 9, 16, __. (h) Give a real-life pattern example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Patterns and loops", statement: "Rules, sequences, repetition." }],
              steps: [
                { reasoning: "(a) Rule-based repetition.", marks: 1, markCode: "M" },
                { reasoning: "(b) B.", marks: 1, markCode: "M" },
                { reasoning: "(c) 48 (doubling).", marks: 1, markCode: "M" },
                { reasoning: "(d) Repeats instructions.", marks: 1, markCode: "M" },
                { reasoning: "(e) 4 sides × 90° turns = closed square.", marks: 1, markCode: "M" },
                { reasoning: "(f) Shorter programs, easier to change.", marks: 1, markCode: "M" },
                { reasoning: "(g) 25 (square numbers).", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid pattern example.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Patterns, sequences, loops, square-drawing, efficiency.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-pt-notes", title: "Patterns — notes",
      summary: "Find the rule, then continue. Loops repeat instructions — 'move, turn 90°' ×4 draws a square.",
      sections: [
        { heading: "Key idea", body: "Every pattern has a rule; loops exploit repetition in code." },
        { heading: "Loops", body: "Repeat blocks instead of copying them — shorter, easier programs." },
      ],
    },
  },
];
