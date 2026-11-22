import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "cipc-u1-lesson-1-6",
  code: "1-6",
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
  concepts: [
    {
      id: "cipc-u1-s2-files",
      title: "Types of data and files",
      skill: "Create, save and organise different data types at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Kinds of data",
            body: "Computers store many kinds of data: text (documents, stories), images (photos, drawings), sound (songs, recordings) and numbers. Each kind has a file type — pictures often end .jpg or .png, documents .docx, songs .mp3.",
          },
          {
            heading: "Creating and saving",
            body: "You create data with apps — write a story in a word processor, draw in a paint app, record a song. Always save your work so it isn't lost, and give files clear names so you can find them later.",
          },
        ],
        keyFormulas: [
          { name: "Data types", statement: "text, image, sound, numbers" },
          { name: "File type", statement: "extension shows data kind (.jpg, .mp3)" },
        ],
        workedExample: {
          problem: "You drew a picture and recorded your voice. Name the data types and suggest file names.",
          solution: "Picture = image data (e.g. 'my-drawing.png'); voice = sound data (e.g. 'my-song.mp3').",
        },
      },
      questions: [
        {
          id: "cipc-u1-ft-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which file type would a photograph most likely be?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": ".jpg"
                    },
                    {
                              "id": "b",
                              "text": ".txt"
                    },
                    {
                              "id": "c",
                              "text": ".mp3"
                    },
                    {
                              "id": "d",
                              "text": ".docx"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "File types",
                              "statement": "Extension shows data kind."
                    }
          ],
          "steps": [
                    {
                              "reasoning": ".jpg is an image format.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": ".jpg"
},
        },
        {
          id: "cipc-u1-ft-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two types of data a computer can store and one app that creates each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Data types",
                              "statement": "Kinds of stored information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. text → word processor.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. image → paint app / sound → recorder.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. text+document app, image+paint app"
},
        },
        {
          id: "cipc-u1-ft-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should you save files with clear names? What happens if you don't save your work?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Saving data",
                              "statement": "Organisation and safety."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear names let you find files quickly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unsaved work is lost when device closes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Saving stores data on device memory.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Findability; unsaved work is lost"
},
        },
        {
          id: "cipc-u1-ft-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) List four kinds of data computers store. (b) What does a file extension tell you? (c) You made a story — what data type is it and what app creates it? (d) Why save work regularly? (e) Give a good file name for a holiday photo and explain why. (f) What is the difference between text and image data? (g) Name one sound file type. (h) How could a folder help organise school work?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Data files",
                              "statement": "Types, extensions, saving, organising."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Text, image, sound, numbers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) File's data kind (.jpg=image etc).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Text; word processor.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Prevents losing work.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Descriptive name e.g. 'beach-2024.jpg' — findable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Text=words/letters; image=pictures.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) e.g. .mp3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Folder per subject keeps files together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Data types, extensions, saving, naming, folders."
},
        },
        {
          id: "cipc-u1-ft-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which file type would a music song most likely be?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A document file such as DOCX" },
            { id: "b", text: "A spreadsheet" },
            { id: "c", text: "A sound file such as MP3" },
            { id: "d", text: "A photo file" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "File types", statement: "Different data needs different file types." }],
            steps: [
              { reasoning: "Songs are sound data, stored in sound file formats like MP3.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** A sound file such as MP3",
          },
        },
        {
          id: "cipc-u1-ft-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two kinds of data a computer can store, and one app that creates each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Data types", statement: "Text, images, sound, video." }],
            steps: [
              { reasoning: "Two valid data kinds, e.g. photos and text.", marks: 1, markCode: "M" },
              { reasoning: "Matching apps: camera app for photos, word processor for text.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. photos (camera app) and documents (word processor).",
          },
        },
        {
          id: "cipc-u1-ft-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A folder 'Games' has 8 game files. You delete 3 of them. How many game files remain?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Deleting files", statement: "8 - 3." }],
            steps: [
              { reasoning: "8 - 3 = 5 files remain.", marks: 1, markCode: "M" },
              { reasoning: "5 game files are left in the folder.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipc-u1-ft-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a file extension (like .jpg or .txt) tell you?",
          response: { type: "mcq", choices: [
            { id: "a", text: "How large the file is" },
            { id: "b", text: "Who created the file" },
            { id: "c", text: "When the file was made" },
            { id: "d", text: "What type of data the file contains" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "File extension", statement: "Indicates file type." }],
            steps: [
              { reasoning: "The extension shows the file's type so the right app can open it.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** What type of data the file contains",
          },
        },
        {
          id: "cipc-u1-ft-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "You have written a story on the computer. Explain what type of data it is, which kind of app you used, and why you should save the file.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Files and saving", statement: "Text data, word processor, save to keep work." }],
            steps: [
              { reasoning: "The story is text data.", marks: 1, markCode: "M" },
              { reasoning: "Created in a word-processing app (or similar).", marks: 1, markCode: "M" },
              { reasoning: "Saving keeps the work so it isn't lost when the app closes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Text data in a word processor; save to keep the work.",
          },
        },
        {
          id: "cipc-u1-ft-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which file name is BEST for a photo taken on a school trip to the museum?",
          response: { type: "mcq", choices: [
            { id: "a", text: "photo.jpg" },
            { id: "b", text: "museum-trip-2024.jpg" },
            { id: "c", text: "newest file" },
            { id: "d", text: "IMG_0001.jpg" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Naming files", statement: "Clear, descriptive names help find files." }],
            steps: [
              { reasoning: "A good name describes what and when: 'museum-trip-2024'.", marks: 1, markCode: "M" },
              { reasoning: "Generic names like IMG_0001 or photo.jpg are hard to identify later.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** museum-trip-2024.jpg",
          },
        },
        {
          id: "cipc-u1-ft-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between text data and image data, and give one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Text vs image", statement: "Characters vs pictures." }],
            steps: [
              { reasoning: "Text data = letters, words, numbers (e.g. a story or essay).", marks: 1, markCode: "M" },
              { reasoning: "Image data = pictures made of pixels (e.g. a photograph).", marks: 1, markCode: "M" },
              { reasoning: "Different data needs different apps and file types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Text = characters (story); image = picture (photo).",
          },
        },
        {
          id: "cipc-u1-ft-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why should you save your work regularly while using an app?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Saving", statement: "Save stores work to a file." }],
            steps: [
              { reasoning: "Saving writes the work into a file on the device.", marks: 1, markCode: "M" },
              { reasoning: "If you don't save and the app closes or the device loses power, work is lost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Saving keeps work safe from being lost.",
          },
        },
        {
          id: "cipc-u1-ft-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'Music' folder contains 6 songs. You copy (not move) 2 songs into a 'Party' folder. How many songs are now in 'Party'? How many are in 'Music'?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }, { label: "b", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Copy vs move", statement: "Copy duplicates; original stays." }],
            steps: [
              { reasoning: "Copying puts 2 songs in Party; originals remain in Music.", marks: 1, markCode: "M" },
              { reasoning: "Party has 2 songs; Music still has all 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Party: 2, Music: 6",
          },
        },
        {
          id: "cipc-u1-ft-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is a sound file most likely to contain?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A photograph" },
            { id: "b", text: "A video clip" },
            { id: "c", text: "A song or recording" },
            { id: "d", text: "A written essay" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sound files", statement: "Store audio data." }],
            steps: [
              { reasoning: "Sound files store audio — songs, recordings, sound effects.", marks: 1, markCode: "M" },
              { reasoning: "Essays are text, photos are images, videos are video files.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A song or recording",
          },
        },
        {
          id: "cipc-u1-ft-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "You have 30 files on your tablet but cannot find your homework. Suggest three ways folders and clear names could have helped, and describe how you would organise the files now.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Organising files", statement: "Folders by topic + descriptive names." }],
            steps: [
              { reasoning: "Use folders per subject/topic (e.g. 'Maths', 'English').", marks: 1, markCode: "M" },
              { reasoning: "Name files clearly, e.g. 'maths-homework-2024' not 'untitled1'.", marks: 1, markCode: "M" },
              { reasoning: "Now: create folders, sort existing files into them, rename unclear ones.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Folders by subject + clear names; sort files into folders now.",
          },
        },
        {
          id: "cipc-u1-ft-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) List four kinds of data computers store. (b) What does a file extension tell you? (c) You made a story — what data type is it and what app creates it? (d) Why save work regularly? (e) Give a good file name for a holiday photo and explain why. (f) What is the difference between text and image data? (g) Name one sound file type. (h) How could a folder help organise school work?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Files and data", statement: "Data types, extensions, naming, saving, folders." }],
            steps: [
              { reasoning: "(a) Text, images, sound, video (or numbers).", marks: 1, markCode: "M" },
              { reasoning: "(b) The file's data type so the right app opens it.", marks: 1, markCode: "M" },
              { reasoning: "(c) Text data; word-processing app.", marks: 1, markCode: "M" },
              { reasoning: "(d) Saving prevents losing work if app closes/power fails.", marks: 1, markCode: "M" },
              { reasoning: "(e) e.g. 'spain-holiday-2024.jpg' — says what and when.", marks: 1, markCode: "M" },
              { reasoning: "(f) Text=characters; image=picture of pixels.", marks: 1, markCode: "M" },
              { reasoning: "(g) e.g. MP3, WAV.", marks: 1, markCode: "M" },
              { reasoning: "(h) Folders per subject keep work organised and findable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Data types, extensions, story=text/word processor, saving, file naming, text vs image, sound types, folders.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-ft-notes",
      title: "Data files — notes",
      summary: "Text, images, sound, numbers = data types. Extensions (.jpg, .mp3) show type. Save often, name clearly, use folders.",
      sections: [
        { heading: "Key idea", body: "Different data needs different apps and file types." },
        { heading: "Organisation", body: "Folders + clear names = easy file finding." },
      ],
    },
  ],
};
