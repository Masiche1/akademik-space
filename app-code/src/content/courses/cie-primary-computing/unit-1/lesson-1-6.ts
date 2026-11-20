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
                              "text": ".mp3"
                    },
                    {
                              "id": "c",
                              "text": ".docx"
                    },
                    {
                              "id": "d",
                              "text": ".txt"
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
