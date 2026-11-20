module.exports = [
  {
    file: "lesson-1-6.ts", exportName: "lesson16",
    lesson: {
      id: "cipc-u1-lesson-1-6", code: "1-6",
      title: "Stage 2 — Data: Pictures, Text and Files",
      goal: "I CAN create and organise different types of data files on a computer.",
      standards: ["Cambridge Primary Computing 0059 Stage 2: managing data", "Cambridge Primary Computing 0059 framework strands: Managing data"],
      stage: 2,
      vocabulary: [
        { term: "Text", definition: "Written words and letters stored as data." },
        { term: "Image", definition: "A picture stored as data — photo or drawing." },
        { term: "Sound", definition: "Audio data — music or recordings." },
        { term: "File type", definition: "The kind of data a file holds, e.g. .jpg for pictures." },
        { term: "Save", definition: "To store your work on the device." },
        { term: "Open", definition: "To load a saved file back onto the screen." },
      ],
      concept: {
        id: "cipc-u1-s2-files", title: "Types of data and files",
        skill: "Create, save and organise different data types at Stage 2 level.",
        sections: [
          { heading: "Kinds of data", body: "Computers store many kinds of data: text (documents, stories), images (photos, drawings), sound (songs, recordings) and numbers. Each kind has a file type — pictures often end .jpg or .png, documents .docx, songs .mp3." },
          { heading: "Creating and saving", body: "You create data with apps — write a story in a word processor, draw in a paint app, record a song. Always save your work so it isn't lost, and give files clear names so you can find them later." },
        ],
        keyFormulas: [
          { name: "Data types", statement: "text, image, sound, numbers" },
          { name: "File type", statement: "extension shows data kind (.jpg, .mp3)" },
        ],
        workedExample: {
          problem: "You drew a picture and recorded your voice. Name the data types and suggest file names.",
          solution: "Picture = image data (e.g. 'my-drawing.png'); voice = sound data (e.g. 'my-song.mp3').",
        },
        questions: [
          {
            id: "cipc-u1-ft-q1", difficulty: "foundation", totalMarks: 1,
            stem: "Which file type would a photograph most likely be?",
            response: { type: "mcq", choices: [
              { id: "a", text: ".jpg" }, { id: "b", text: ".mp3" }, { id: "c", text: ".docx" }, { id: "d", text: ".txt" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "File types", statement: "Extension shows data kind." }],
              steps: [{ reasoning: ".jpg is an image format.", marks: 1, markCode: "M" }],
              finalAnswer: ".jpg",
            },
          },
          {
            id: "cipc-u1-ft-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two types of data a computer can store and one app that creates each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Data types", statement: "Kinds of stored information." }],
              steps: [
                { reasoning: "e.g. text → word processor.", marks: 1, markCode: "M" },
                { reasoning: "e.g. image → paint app / sound → recorder.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "e.g. text+document app, image+paint app",
            },
          },
          {
            id: "cipc-u1-ft-q3", difficulty: "core", totalMarks: 3,
            stem: "Why should you save files with clear names? What happens if you don't save your work?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Saving data", statement: "Organisation and safety." }],
              steps: [
                { reasoning: "Clear names let you find files quickly.", marks: 1, markCode: "M" },
                { reasoning: "Unsaved work is lost when device closes.", marks: 1, markCode: "M" },
                { reasoning: "Saving stores data on device memory.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Findability; unsaved work is lost",
            },
          },
          {
            id: "cipc-u1-ft-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) List four kinds of data computers store. (b) What does a file extension tell you? (c) You made a story — what data type is it and what app creates it? (d) Why save work regularly? (e) Give a good file name for a holiday photo and explain why. (f) What is the difference between text and image data? (g) Name one sound file type. (h) How could a folder help organise school work?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Data files", statement: "Types, extensions, saving, organising." }],
              steps: [
                { reasoning: "(a) Text, image, sound, numbers.", marks: 1, markCode: "M" },
                { reasoning: "(b) File's data kind (.jpg=image etc).", marks: 1, markCode: "M" },
                { reasoning: "(c) Text; word processor.", marks: 1, markCode: "M" },
                { reasoning: "(d) Prevents losing work.", marks: 1, markCode: "M" },
                { reasoning: "(e) Descriptive name e.g. 'beach-2024.jpg' — findable.", marks: 1, markCode: "M" },
                { reasoning: "(f) Text=words/letters; image=pictures.", marks: 1, markCode: "M" },
                { reasoning: "(g) e.g. .mp3.", marks: 1, markCode: "M" },
                { reasoning: "(h) Folder per subject keeps files together.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Data types, extensions, saving, naming, folders.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-ft-notes", title: "Data files — notes",
      summary: "Text, images, sound, numbers = data types. Extensions (.jpg, .mp3) show type. Save often, name clearly, use folders.",
      sections: [
        { heading: "Key idea", body: "Different data needs different apps and file types." },
        { heading: "Organisation", body: "Folders + clear names = easy file finding." },
      ],
    },
  },
  {
    file: "lesson-1-7.ts", exportName: "lesson17",
    lesson: {
      id: "cipc-u1-lesson-1-7", code: "1-7",
      title: "Stage 3 — Logical Thinking and Conditions",
      goal: "I CAN use IF/ELSE decisions in programs and explain how computers make choices.",
      standards: ["Cambridge Primary Computing 0059 Stage 3: computational thinking", "Cambridge Primary Computing 0059 framework strands: Computational thinking"],
      stage: 3,
      vocabulary: [
        { term: "Condition", definition: "A rule that can be true or false, e.g. 'score > 10'." },
        { term: "IF", definition: "A block that runs instructions only when a condition is true." },
        { term: "ELSE", definition: "The instructions that run when the IF condition is false." },
        { term: "Decision", definition: "Choosing between actions based on a condition." },
        { term: "Boolean", definition: "A value that is either true or false." },
        { term: "Branch", definition: "A different path a program can take." },
      ],
      concept: {
        id: "cipc-u1-s3-logic", title: "Conditions and decisions",
        skill: "Write IF/ELSE logic and trace program branches at Stage 3 level.",
        sections: [
          { heading: "Decisions in programs", body: "Real programs must decide things: 'IF score > 10 THEN say well done ELSE say try again'. The condition is checked first — if true, the IF instructions run; if false, the ELSE instructions run. Computers make decisions by checking conditions that are either true or false." },
          { heading: "Reading conditions", body: "Conditions compare values: 'score > 10' means greater than, '<' less than, '=' equal. Trace programs by checking each condition in order and following the correct branch." },
        ],
        keyFormulas: [
          { name: "IF/ELSE", statement: "true → IF branch; false → ELSE branch" },
          { name: "Condition", statement: "comparison that is true or false" },
        ],
        workedExample: {
          problem: "Score = 15. What does 'IF score > 10 THEN say YES ELSE say NO' output?",
          solution: "15 > 10 is true → output is YES.",
        },
        questions: [
          {
            id: "cipc-u1-cd-q1", difficulty: "foundation", totalMarks: 1,
            stem: "In a program, what does an IF block do?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Runs instructions only if a condition is true" }, { id: "b", text: "Repeats forever" }, { id: "c", text: "Deletes the program" }, { id: "d", text: "Speeds up the computer" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "IF", statement: "Conditional execution." }],
              steps: [{ reasoning: "IF runs only when its condition is true.", marks: 1, markCode: "M" }],
              finalAnswer: "Runs when condition is true",
            },
          },
          {
            id: "cipc-u1-cd-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Score = 8. For 'IF score > 10 THEN say YES ELSE say NO', what is output? Explain.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Tracing conditions", statement: "Check true/false." }],
              steps: [
                { reasoning: "8 > 10 is false.", marks: 1, markCode: "M" },
                { reasoning: "ELSE branch runs → NO.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "NO",
            },
          },
          {
            id: "cipc-u1-cd-q3", difficulty: "core", totalMarks: 3,
            stem: "Write an IF/ELSE that makes a sprite say 'warm' if temperature > 20 and 'cold' otherwise. What happens at temperature = 20?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "IF/ELSE logic", statement: "Conditional branches." }],
              steps: [
                { reasoning: "IF temp > 20 THEN say warm ELSE say cold.", marks: 1, markCode: "M" },
                { reasoning: "20 > 20 is false → says cold.", marks: 1, markCode: "M" },
                { reasoning: "Explains boundary behaviour.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "warm if >20 else cold; at 20 says cold",
            },
          },
          {
            id: "cipc-u1-cd-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define condition and Boolean. (b) What do '>' '<' '=' mean? (c) Trace: score=12, 'IF score >= 10 THEN add point ELSE lose point'. (d) When does ELSE run? (e) Give a real example needing a decision. (f) What is a branch? (g) Can a condition be 'maybe'? Explain. (h) Design an IF/ELSE for a game: player has 3 lives.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Logic and conditions", statement: "Comparisons, branches, decisions." }],
              steps: [
                { reasoning: "(a) Condition=true/false test; Boolean=true/false value.", marks: 1, markCode: "M" },
                { reasoning: "(b) greater than, less than, equal.", marks: 1, markCode: "M" },
                { reasoning: "(c) 12>=10 true → add point.", marks: 1, markCode: "M" },
                { reasoning: "(d) When IF condition is false.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid decision example.", marks: 1, markCode: "M" },
                { reasoning: "(f) Alternative program path.", marks: 1, markCode: "M" },
                { reasoning: "(g) No — conditions are only true or false.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid IF/ELSE for lives.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Conditions, comparisons, tracing, ELSE, branches, Boolean logic.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-cd-notes", title: "Conditions — notes",
      summary: "IF runs when condition true; ELSE when false. Conditions are true/false only.",
      sections: [
        { heading: "Key idea", body: "Programs decide by checking conditions — trace carefully." },
        { heading: "Comparisons", body: "> greater, < less, = equal, >= at least." },
      ],
    },
  },
  {
    file: "lesson-1-8.ts", exportName: "lesson18",
    lesson: {
      id: "cipc-u1-lesson-1-8", code: "1-8",
      title: "Stage 3 — Loops and Repetition",
      goal: "I CAN use repeat loops in programs to avoid writing the same instructions many times.",
      standards: ["Cambridge Primary Computing 0059 Stage 3: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
      stage: 3,
      vocabulary: [
        { term: "Loop", definition: "A block that repeats instructions." },
        { term: "Repeat", definition: "How many times a loop runs." },
        { term: "Iteration", definition: "One single run of a loop." },
        { term: "Counter", definition: "A variable that counts loop iterations." },
        { term: "Infinite loop", definition: "A loop that never stops — a bug." },
        { term: "Nested loop", definition: "A loop inside another loop." },
      ],
      concept: {
        id: "cipc-u1-s3-loops", title: "Loops and repetition",
        skill: "Use repeat loops correctly and identify loop bugs at Stage 3 level.",
        sections: [
          { heading: "Repeat loops", body: "A repeat block runs its instructions a set number of times. 'Repeat 10: move 10 steps' moves the sprite 100 steps total. Loops save time and make programs shorter — instead of 10 move blocks, use one repeat." },
          { heading: "Loop pitfalls", body: "If the repeat number is missing or the loop has no end condition, it can run forever — an infinite loop, which freezes the program. Always check how many times your loop should run." },
        ],
        keyFormulas: [
          { name: "Repeat n", statement: "instructions run n times" },
          { name: "Infinite loop", statement: "loop never ends — program stuck" },
        ],
        workedExample: {
          problem: "How many steps does 'repeat 4: move 15 steps' take? What shape does 'repeat 4: move 20; turn 90' draw?",
          solution: "4×15 = 60 steps. The second draws a square: 4 sides of 20 with 90° turns.",
        },
        questions: [
          {
            id: "cipc-u1-lp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does a repeat loop do?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Runs instructions a set number of times" }, { id: "b", text: "Deletes instructions" }, { id: "c", text: "Speeds up the screen" }, { id: "d", text: "Changes colours" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Loop", statement: "Repetition structure." }],
              steps: [{ reasoning: "Loop repeats instructions a chosen number of times.", marks: 1, markCode: "M" }],
              finalAnswer: "Repeats instructions",
            },
          },
          {
            id: "cipc-u1-lp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "'Repeat 5: say hello' — how many times is hello said? What is one iteration?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Loop counting", statement: "Repeat count = runs." }],
              steps: [
                { reasoning: "5 times.", marks: 1, markCode: "M" },
                { reasoning: "One iteration = one run of the loop body.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "5; one run = one iteration",
            },
          },
          {
            id: "cipc-u1-lp-q3", difficulty: "core", totalMarks: 3,
            stem: "A program freezes. The code is 'repeat forever: move 10 steps'. Explain the problem and how to fix it.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Infinite loops", statement: "Unending repetition bug." }],
              steps: [
                { reasoning: "Infinite loop — never stops, program stuck.", marks: 1, markCode: "M" },
                { reasoning: "Fix: give a finite repeat number or an exit condition.", marks: 1, markCode: "M" },
                { reasoning: "e.g. repeat 10 or until touching edge.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Infinite loop; add a stop condition/number",
            },
          },
          {
            id: "cipc-u1-lp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define loop and iteration. (b) What does 'repeat 6: change colour' do? (c) Why use loops instead of copying blocks? (d) What is an infinite loop and why is it a bug? (e) 'Repeat 3: move 10; repeat 2: say hi' — how many times is hi said? (f) Draw/describe a square using a loop. (g) What is a nested loop? (h) How would you make a sprite walk to the edge using a loop?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Loops", statement: "Definition, counting, debugging, shapes." }],
              steps: [
                { reasoning: "(a) Loop=repeats instructions; iteration=one run.", marks: 1, markCode: "M" },
                { reasoning: "(b) Changes colour 6 times.", marks: 1, markCode: "M" },
                { reasoning: "(c) Shorter, easier to change programs.", marks: 1, markCode: "M" },
                { reasoning: "(d) Never-ending loop; freezes program.", marks: 1, markCode: "M" },
                { reasoning: "(e) 3×2=6 times.", marks: 1, markCode: "M" },
                { reasoning: "(f) Repeat 4: move+turn 90°.", marks: 1, markCode: "M" },
                { reasoning: "(g) Loop inside a loop.", marks: 1, markCode: "M" },
                { reasoning: "(h) Repeat until touching edge: move.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Loops, iterations, infinite loop bug, nested loops, square drawing.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-lp-notes", title: "Loops — notes",
      summary: "Repeat blocks run instructions n times. Infinite loops freeze programs — always set an end.",
      sections: [
        { heading: "Key idea", body: "Loops = efficient repetition; check the repeat count." },
        { heading: "Debugging", body: "Frozen program? Look for a loop with no end." },
      ],
    },
  },
  {
    file: "lesson-1-9.ts", exportName: "lesson19",
    lesson: {
      id: "cipc-u1-lesson-1-9", code: "1-9",
      title: "Stage 3 — Networks: How Devices Connect",
      goal: "I CAN explain how computers connect to share data and describe wired and wireless networks.",
      standards: ["Cambridge Primary Computing 0059 Stage 3: networks", "Cambridge Primary Computing 0059 framework strands: Networks and digital communication"],
      stage: 3,
      vocabulary: [
        { term: "Network", definition: "Two or more devices connected to share data." },
        { term: "Internet", definition: "A huge worldwide network of networks." },
        { term: "Wi-Fi", definition: "Wireless connection using radio waves." },
        { term: "Cable", definition: "A wire that connects devices, e.g. Ethernet." },
        { term: "Router", definition: "A device that directs data between networks." },
        { term: "Share", definition: "To let other devices access your data." },
      ],
      concept: {
        id: "cipc-u1-s3-net", title: "Networks and connections",
        skill: "Describe wired/wireless networks and data sharing at Stage 3 level.",
        sections: [
          { heading: "What is a network?", body: "A network connects devices so they can share data — like phones in a family sharing photos. The internet is the biggest network: millions of devices worldwide connected together." },
          { heading: "Wired vs wireless", body: "Devices connect by cable (Ethernet wire) or wirelessly (Wi-Fi radio waves). A router links your home devices to each other and to the internet. Sharing lets you send photos, play games together or print from another device." },
        ],
        keyFormulas: [
          { name: "Network", statement: "connected devices that share data" },
          { name: "Wi-Fi vs cable", statement: "wireless radio vs physical wire" },
          { name: "Router", statement: "directs data between networks" },
        ],
        workedExample: {
          problem: "Your tablet shows a photo stored on your laptop. What must be true?",
          solution: "Both devices must be on the same network (e.g. home Wi-Fi) and sharing must be enabled.",
        },
        questions: [
          {
            id: "cipc-u1-nt-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a network?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Connected devices that share data" }, { id: "b", text: "A type of virus" }, { id: "c", text: "A computer brand" }, { id: "d", text: "A storage folder" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Network", statement: "Connected devices sharing data." }],
              steps: [{ reasoning: "Network = devices connected to share data.", marks: 1, markCode: "M" }],
              finalAnswer: "Connected devices sharing data",
            },
          },
          {
            id: "cipc-u1-nt-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name two ways devices can connect to a network and one device that links networks.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Connections", statement: "Wired, wireless, router." }],
              steps: [
                { reasoning: "Wi-Fi (wireless) and Ethernet cable (wired).", marks: 1, markCode: "M" },
                { reasoning: "Router links networks.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Wi-Fi/cable; router",
            },
          },
          {
            id: "cipc-u1-nt-q3", difficulty: "core", totalMarks: 3,
            stem: "Explain the difference between the internet and a home network. Why is the internet called 'a network of networks'?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Networks", statement: "Scale and connection." }],
              steps: [
                { reasoning: "Home network = few devices in one place.", marks: 1, markCode: "M" },
                { reasoning: "Internet = billions of devices worldwide.", marks: 1, markCode: "M" },
                { reasoning: "Networks connect to other networks → network of networks.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Home=small; internet=worldwide linked networks",
            },
          },
          {
            id: "cipc-u1-nt-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define network. (b) What is the internet? (c) Compare Wi-Fi and cable connections. (d) What does a router do? (e) Give two reasons to connect devices in a network. (f) What does 'sharing' mean on a network? (g) Is a standalone calculator on a network? Explain. (h) Draw/describe how your home connects to the internet.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Networks", statement: "Definition, internet, connections, sharing." }],
              steps: [
                { reasoning: "(a) Connected devices sharing data.", marks: 1, markCode: "M" },
                { reasoning: "(b) Worldwide network of networks.", marks: 1, markCode: "M" },
                { reasoning: "(c) Wi-Fi=wireless radio; cable=physical wire.", marks: 1, markCode: "M" },
                { reasoning: "(d) Directs data between networks.", marks: 1, markCode: "M" },
                { reasoning: "(e) Two reasons: share files, play together/print.", marks: 1, markCode: "M" },
                { reasoning: "(f) Letting other devices access your data.", marks: 1, markCode: "M" },
                { reasoning: "(g) No — not connected; network requires connection.", marks: 1, markCode: "M" },
                { reasoning: "(h) Devices → router → internet service provider → internet.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Networks, internet, Wi-Fi/cable, router, sharing, home setup.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cipc-u1-nt-notes", title: "Networks — notes",
      summary: "Network = connected devices sharing data. Wi-Fi wireless, cable wired, router directs traffic. Internet = network of networks.",
      sections: [
        { heading: "Key idea", body: "Networks let devices share files, games and printers." },
        { heading: "Internet", body: "Millions of networks joined together worldwide." },
      ],
    },
  },
];
