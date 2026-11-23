import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edxpc-u1-lesson-1-3",
  code: "1-3",
  title: "Files, Folders and Saving Work",
  goal: "I CAN save work in files and folders and find it again.",
  standards: ["Y2-Y3 Digital literacy", "Files and storage"],
  vocabulary: [
    {
      term: "File",
      definition: "A saved piece of work on a device, like a picture or story.",
    },
    {
      term: "Folder",
      definition: "A place on a device that holds files and other folders.",
    },
    {
      term: "Save",
      definition: "To store work on a device so it is not lost.",
    },
    { term: "Open", definition: "To find and show a saved file." },
  ],
  concepts: [
    {
      id: "edxpc-u1-files",
      title: "Files and Folders",
      skill: "Explain what files and folders are and how they organise work.",
      lesson: {
        sections: [
          {
            heading: "What is a file?",
            body: "A file is a saved piece of work. A drawing you made, a story you wrote or a photo you took is saved as a file. Files have names so you can recognise them. Each file has a type — a picture file, a text file or a sound file.",
          },
          {
            heading: "What is a folder?",
            body: "A folder is like a box that holds files. You might have a folder called 'My Pictures' for drawings and photos, and a folder called 'School Work' for stories and projects. Folders can hold other folders — like a box inside a box. Organising files into folders makes them easy to find.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Where should a photo of your pet be saved?",
          solution: "In a folder called 'Photos' or 'My Pictures'.",
        },
      },
      questions: [
        {
          id: "edxpc-u1-file-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a file?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A folder" },
              { id: "b", text: "Saved work on a device" },
              { id: "c", text: "A screen" },
              { id: "d", text: "A cable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "File",
                statement: "Saved work on a device.",
              },
            ],
            steps: [
              {
                reasoning: "A file holds saved work.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Saved work",
            commonErrors: ["Confusing files with folders."],
          },
        },
        {
          id: "edxpc-u1-file-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why do we put files into folders?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Folders",
                statement: "Folders organise files so they are easy to find.",
              },
            ],
            steps: [
              {
                reasoning: "Folders keep files organised and easy to find.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "To keep them organised and easy to find",
            commonErrors: ["Saying folders make files faster."],
          },
        },
        {
          id: "edxpc-u1-file-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You drew a picture on a tablet. Describe how to save it in a folder called 'Art'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Saving files",
                statement: "Save → choose folder → name it.",
              },
            ],
            steps: [
              {
                reasoning: "Tap save on the drawing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Choose or create the 'Art' folder.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Give the file a name and confirm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Save → choose 'Art' folder → name it",
            commonErrors: ["Not naming the file or folder."],
          },
        },
        {
          id: "edxpc-u1-file-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a file and a folder, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "File vs folder",
                statement: "Files hold work; folders hold files.",
              },
            ],
            steps: [
              {
                reasoning: "File correctly defined — saved work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Folder correctly defined — holds files.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Clear example, e.g. 'My Pictures' folder holds photo files.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "File = work; folder = container for files",
            commonErrors: ["Reversing the definitions."],
          },
        },
      ],
    },
    {
      id: "edxpc-u1-saving",
      title: "Saving and Finding Work",
      skill: "Save work regularly and find saved files again.",
      lesson: {
        sections: [
          {
            heading: "Why save?",
            body: "If you do not save your work, it is lost when the device turns off or the app closes. Save often — after every few changes — so you never lose much work. Most apps have a save button (usually a floppy-disk picture or the word 'Save').",
          },
          {
            heading: "Finding saved work",
            body: "To find a saved file, open the app you made it in, or open the Files/Documents area on the device. Look for the file's name, or look inside the folder you saved it to. Files are usually listed newest first, so your latest work is near the top.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Your story disappeared after the tablet turned off. Why?",
          solution: "It was not saved before the tablet turned off.",
        },
      },
      questions: [
        {
          id: "edxpc-u1-save-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to unsaved work when a device turns off?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is saved automatically" },
              { id: "b", text: "It is lost" },
              { id: "c", text: "It moves to a folder" },
              { id: "d", text: "It prints" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Saving",
                statement: "Unsaved work is lost when the device turns off.",
              },
            ],
            steps: [
              {
                reasoning: "Without saving, the work disappears.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** It is lost",
            commonErrors: ["Thinking devices always auto-save."],
          },
        },
        {
          id: "edxpc-u1-save-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When should you save your work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Saving often",
                statement: "Save regularly so little work is lost.",
              },
            ],
            steps: [
              {
                reasoning: "Save often, e.g. after every few changes.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Often / after every few changes",
            commonErrors: ["Saying only at the end."],
          },
        },
        {
          id: "edxpc-u1-save-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how to find a drawing you saved yesterday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Finding files",
                statement:
                  "Open the app or Files area and look for the name/folder.",
              },
            ],
            steps: [
              {
                reasoning: "Open the app or the Files/Documents area.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Look for the file name or the folder it is in.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Open the file to see the drawing again.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Open app/Files → find name/folder → open file",
            commonErrors: ["Not knowing where to look."],
          },
        },
        {
          id: "edxpc-u1-save-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it a good habit to save work in a named folder instead of leaving it loose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Organising files",
                statement: "Named folders make files easy to find later.",
              },
            ],
            steps: [
              {
                reasoning: "Files in a folder are easier to find.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A named folder groups related files, e.g. all school work together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It saves time and avoids losing work.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Easier to find, grouped together, saves time",
            commonErrors: ["No real reason given."],
          },
        },
      ],
    },
  ],
};
