import type { Lesson } from "../../../types.ts";

export const lesson95: Lesson = {
  id: "cieict-u2-lesson-2-5",
  code: "2-5",
  title: "ICT Systems and File Management",
  goal: "I CAN manage files and understand ICT system components and workflows.",
  standards: ["Cambridge IGCSE ICT 0417: ICT systems", "0417: file management"],
  
  vocabulary: [
    { term: "File management", definition: "Organising, storing and retrieving files." },
    { term: "Directory", definition: "Folder containing files and subfolders." },
    { term: "File extension", definition: "Suffix indicating file type — .docx, .xlsx." },
    { term: "Backup", definition: "Copy of data for recovery." },
    { term: "Version control", definition: "Tracking changes to files over time." },
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
          problem: "Organise files for a school project with documents, images and spreadsheets.",
          solution: "Folders: /project/docs, /project/images, /project/data. Naming: projectname_v1.docx, projectname_v2.docx for versions.",
        },
      },
      questions: [
        {
          id: "cieict-u2-fm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a file extension indicate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "File type"
                    },
                    {
                              "id": "b",
                              "text": "File size"
                    },
                    {
                              "id": "c",
                              "text": "File date"
                    },
                    {
                              "id": "d",
                              "text": "File author"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "File extension",
                              "statement": "Type indicator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Extension = file type (.docx, .xlsx).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "File type"
},
        },
        {
          id: "cieict-u2-fm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a backup and why is it important?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Backup",
                              "statement": "Data copy for recovery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Backup = copy of data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Protects against loss/corruption.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Recovery copy; prevents data loss"
},
        },
        {
          id: "cieict-u2-fm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a good file naming convention? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Naming",
                              "statement": "Clear, consistent names."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Meaningful, consistent, dated/versioned.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. projectname_v1_2024.docx.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Avoids confusion, enables sorting.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Meaningful consistent dated names"
},
        },
        {
          id: "cieict-u2-fm-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define file management, directory, file extension, backup, version control, workflow. (b) What is a good folder structure? (c) What do .docx/.xlsx/.pptx/.pdf indicate? (d) Why use version control? (e) What is a workflow? (f) When use PDF vs editable format? (g) How do you organise a shared project folder? (h) Design a file management system for a school department.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "File management",
                              "statement": "Organisation, versions, workflows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Logical folders by project/type.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Document/spreadsheet/presentation/PDF.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Track changes, recover versions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Step sequence in process.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) PDF=final/share; editable=working.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Clear structure + naming + permissions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid department file system.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "File management and ICT systems."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u2-fm-notes",
      title: "File management — notes",
      summary: "Meaningful folders + consistent naming + backups + version control = organised ICT work.",
      sections: [
        { heading: "Key idea", body: "Good file management saves time and prevents data loss." },
        { heading: "Formats", body: "Editable for working; PDF for final distribution." },
      ],
    },
  ],
};
