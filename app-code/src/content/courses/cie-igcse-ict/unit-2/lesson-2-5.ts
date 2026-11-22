import type { Lesson } from "../../../types.ts";

export const lesson95: Lesson = {
  id: "cieict-u2-lesson-2-5",
  code: "2-5",
  title: "ICT Systems and File Management",
  goal: "I CAN manage files and understand ICT system components and workflows.",
  standards: ["Cambridge IGCSE ICT 0417: ICT systems", "0417: file management"],

  vocabulary: [
    {
      term: "File management",
      definition: "Organising, storing and retrieving files.",
    },
    {
      term: "Directory",
      definition: "Folder containing files and subfolders.",
    },
    {
      term: "File extension",
      definition: "Suffix indicating file type — .docx, .xlsx.",
    },
    { term: "Backup", definition: "Copy of data for recovery." },
    {
      term: "Version control",
      definition: "Tracking changes to files over time.",
    },
    { term: "Workflow", definition: "Sequence of steps in a process." },
  ],
  concepts: [
    {
      id: "cieict-u2-s5-files",
      title: "File management and systems",
      skill: "Organise files and understand ICT workflows at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "File organisation",
            body: "Use meaningful folder structures, consistent naming conventions, appropriate file formats. File extensions indicate type: .docx documents, .xlsx spreadsheets, .pptx presentations, .pdf final versions.",
          },
          {
            heading: "Backups and versions",
            body: "Regular backups protect against data loss. Version control tracks changes — save dated versions or use 'Save As' with version numbers. Cloud storage enables access and automatic backup.",
          },
        ],
        keyFormulas: [
          { name: "File extension", statement: ".docx/.xlsx/.pptx/.pdf" },
          { name: "Backup", statement: "copy for recovery" },
          { name: "Naming", statement: "consistent meaningful names" },
        ],
        workedExample: {
          problem:
            "Organise files for a school project with documents, images and spreadsheets.",
          solution:
            "Folders: /project/docs, /project/images, /project/data. Naming: projectname_v1.docx, projectname_v2.docx for versions.",
        },
      },
      questions: [
        {
          id: "cieict-u2-fm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a file extension indicate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "File type",
              },
              {
                id: "b",
                text: "File date",
              },
              {
                id: "c",
                text: "File author",
              },
              {
                id: "d",
                text: "File size",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "File extension",
                statement: "Type indicator.",
              },
            ],
            steps: [
              {
                reasoning: "Extension = file type (.docx, .xlsx).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "File type",
          },
        },
        {
          id: "cieict-u2-fm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a backup and why is it important?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Backup",
                statement: "Data copy for recovery.",
              },
            ],
            steps: [
              {
                reasoning: "Backup = copy of data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Protects against loss/corruption.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Recovery copy; prevents data loss",
          },
        },
        {
          id: "cieict-u2-fm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a good file naming convention? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Naming",
                statement: "Clear, consistent names.",
              },
            ],
            steps: [
              {
                reasoning: "Meaningful, consistent, dated/versioned.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. projectname_v1_2024.docx.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Avoids confusion, enables sorting.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Meaningful consistent dated names",
          },
        },
        {
          id: "cieict-u2-fm-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define file management, directory, file extension, backup, version control, workflow. (b) What is a good folder structure? (c) What do .docx/.xlsx/.pptx/.pdf indicate? (d) Why use version control? (e) What is a workflow? (f) When use PDF vs editable format? (g) How do you organise a shared project folder? (h) Design a file management system for a school department.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "File management",
                statement: "Organisation, versions, workflows.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Logical folders by project/type.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Document/spreadsheet/presentation/PDF.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Track changes, recover versions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Step sequence in process.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) PDF=final/share; editable=working.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Clear structure + naming + permissions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid department file system.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "File management and ICT systems.",
          },
        },
        {
          id: "cieict-u2-fm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of file is indicated by the extension .xlsx?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A spreadsheet",
              },
              {
                id: "b",
                text: "A presentation",
              },
              {
                id: "c",
                text: "A word-processed document",
              },
              {
                id: "d",
                text: "An image",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "File extensions",
                statement:
                  ".docx documents, .xlsx spreadsheets, .pptx presentations.",
              },
            ],
            steps: [
              {
                reasoning: ".xlsx is the Excel spreadsheet format.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Spreadsheet",
          },
        },
        {
          id: "cieict-u2-fm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A folder contains three files of sizes 2 MB, 4 MB and 6 MB. What is the total size of the folder contents in MB?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 12,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Storage",
                statement: "Sum file sizes.",
              },
            ],
            steps: [
              {
                reasoning: "2 + 4 + 6 = 12 MB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "12 MB",
          },
        },
        {
          id: "cieict-u2-fm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A project folder structure has 3 main folders, and each main folder contains 4 subfolders. How many folders are there in total including the main folders?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 15,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Directory tree",
                statement: "Parents + children.",
              },
            ],
            steps: [
              {
                reasoning: "3 main + (3 x 4) subfolders = 3 + 12 = 15 folders.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "15 folders",
          },
        },
        {
          id: "cieict-u2-fm-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of making regular backups of your files?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To encrypt files permanently",
              },
              {
                id: "b",
                text: "To reduce file size",
              },
              {
                id: "c",
                text: "To protect against data loss from hardware failure, viruses or mistakes",
              },
              {
                id: "d",
                text: "To make files open faster",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Backup",
                statement: "Copy of data for recovery.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Backups allow recovery if the original data is lost or corrupted.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Recovery from data loss",
          },
        },
        {
          id: "cieict-u2-fm-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two benefits of using a consistent file naming convention such as 'projectname_v2_date.docx'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Naming conventions",
                statement: "Meaningful, consistent, dated names.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Files are easy to identify and sort without opening them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Versions and dates are clear, preventing accidental use of old files.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Easy identification and version tracking",
          },
        },
        {
          id: "cieict-u2-fm-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student makes a backup of their work every day for 14 days. How many backups are created?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 14,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Backups",
                statement: "One per scheduled day.",
              },
            ],
            steps: [
              {
                reasoning: "1 backup per day x 14 days = 14 backups.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "14 backups",
          },
        },
        {
          id: "cieict-u2-fm-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'version control' mean in file management?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Locking files so nobody can edit them",
              },
              {
                id: "b",
                text: "Renaming files randomly",
              },
              {
                id: "c",
                text: "Deleting old versions of files",
              },
              {
                id: "d",
                text: "Tracking changes to a file over time so earlier versions can be recovered",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Version control",
                statement: "Tracking changes over time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Version history allows viewing or reverting to earlier states.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Tracking changes over time",
          },
        },
        {
          id: "cieict-u2-fm-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A storage drive of 2 GB contains 500 MB of files. What percentage of the drive is used?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 25,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Storage usage",
                statement: "Used / total x 100 (same units).",
              },
            ],
            steps: [
              {
                reasoning: "2 GB = 2000 MB; 500 / 2000 x 100 = 25%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "cieict-u2-fm-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it good practice to save the final version of a document as a PDF before distributing it?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Final formats",
                statement: "PDF locks layout for distribution.",
              },
            ],
            steps: [
              {
                reasoning: "PDF preserves the layout exactly on any device.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It prevents accidental editing and font/display problems for recipients.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Fixed layout, no accidental edits",
          },
        },
        {
          id: "cieict-u2-fm-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which file extension is used for a presentation file?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: ".pdf",
              },
              {
                id: "b",
                text: ".docx",
              },
              {
                id: "c",
                text: ".pptx",
              },
              {
                id: "d",
                text: ".xlsx",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "File extensions",
                statement: ".pptx = presentation.",
              },
            ],
            steps: [
              {
                reasoning: ".pptx is the PowerPoint presentation format.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: ".pptx",
          },
        },
        {
          id: "cieict-u2-fm-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main advantage of storing project files in cloud storage instead of only on one computer?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Files become impossible to lose",
              },
              {
                id: "b",
                text: "No internet is ever needed",
              },
              {
                id: "c",
                text: "Files are automatically encrypted for free",
              },
              {
                id: "d",
                text: "Files can be accessed from any device and are automatically backed up",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cloud storage",
                statement: "Remote storage with access and backup.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cloud storage enables access anywhere and reduces single-point data loss.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Access anywhere + automatic backup",
          },
        },
        {
          id: "cieict-u2-fm-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student is organising files for a school research project containing documents, images, data and drafts. Design a folder structure and naming convention for them.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "File organisation",
                statement: "Folders by type + consistent naming.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Create folders by content type, e.g. /project/docs, /project/images, /project/data, /project/drafts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use meaningful consistent names with dates or version numbers, e.g. report_v1_2024.docx.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Keep backups or final versions clearly separated and use appropriate formats (.docx working, .pdf final).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Type folders + consistent dated names",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u2-fm-notes",
      title: "File management — notes",
      summary:
        "Meaningful folders + consistent naming + backups + version control = organised ICT work.",
      sections: [
        {
          heading: "Key idea",
          body: "Good file management saves time and prevents data loss.",
        },
        {
          heading: "Formats",
          body: "Editable for working; PDF for final distribution.",
        },
      ],
    },
  ],
};
