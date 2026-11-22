import type { Lesson } from "../../../types.ts";

export const lesson322: Lesson = {
  id: "ecs11-u6-lesson-6-2",
  code: "6-2",
  title: "File Handling",
  goal: "I CAN read from and write to files in programs.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming"],
  vocabulary: [
    { term: "File handling", definition: "Reading/writing data to files." },
    { term: "Sequential access", definition: "Read/write in order." },
    { term: "Text file", definition: "Plain text data — line by line." },
    { term: "CSV", definition: "Comma-separated values file." },
    { term: "Buffer", definition: "Temporary storage during file operations." },
  ],
  concepts: [
    {
      id: "ecs11-u6-fileops",
      title: "Reading and Writing Files",
      skill: "Use file operations: open, read, write, close.",
      lesson: {
        sections: [
          {
            heading: "File operations",
            body: "**Open**: connect to file — modes: read ('r'), write ('w'), append ('a'). **Read**: get data — line by line or whole file. **Write**: save data to file. **Close**: release file — must always close.\n\n**Example pseudocode**: `OPEN file FOR READ` → `READ line` → `PROCESS` → `CLOSE file`.",
          },
          {
            heading: "Use cases",
            body: "**Save data**: persist settings, high scores, user data. **Load data**: restore state on startup. **Logs**: record activity/errors. **Data exchange**: CSV exports, config files.\n\n**Error handling**: file may not exist — check before opening. Permissions may deny access.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Save high score to file.",
          solution: "OPEN 'scores.txt' FOR WRITE; WRITE score; CLOSE file.",
        },
      },
      questions: [
        {
          id: "ecs11-u6-fileops-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the main file operations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only read" },
              { id: "b", text: "Delete, copy" },
              { id: "c", text: "Print only" },
              { id: "d", text: "Open, read/write, close" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "File operations",
                statement: "Open/read/write/close.",
              },
            ],
            steps: [
              {
                reasoning: "Core ops = open/read/write/close.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Open, read/write, close",
            commonErrors: ["Only one."],
          },
        },
        {
          id: "ecs11-u6-fileops-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the differences between write and append modes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Write vs append",
                statement: "Overwrite vs add.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Write mode: overwrites existing content — data lost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Append mode: adds to end — preserves existing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Use append for logs; write for new files.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Write=overwrite, append=add to end.",
            commonErrors: ["Same thing.", "No difference."],
          },
        },
        {
          id: "ecs11-u6-fileops-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why files must be closed after operations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "File closing",
                statement: "Release resources.",
              },
            ],
            steps: [
              {
                reasoning: "Releases file handle/system resources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ensures data is written to disk (buffer flush).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Allows other programs to access file.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prevents corruption/locks.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Flush data, release resources, prevent locks.",
            commonErrors: ["Optional.", "No reason."],
          },
        },
        {
          id: "ecs11-u6-fileops-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write pseudocode to save and load a user's high score.",
          parts: [
            { label: "a", prompt: "Write save procedure.", marks: 4 },
            { label: "b", prompt: "Write load procedure.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "File persistence",
                statement: "Write then read.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) OPEN 'score.txt' FOR WRITE; WRITE score; CLOSE.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct mode and operations.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) OPEN 'score.txt' FOR READ; READ score; CLOSE.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Check file exists first — error handling.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) write+close (b) read+exists check",
            commonErrors: ["No close.", "No error check."],
          },
        },
      ],
    },
    {
      id: "ecs11-u6-csv",
      title: "CSV Files and Data Processing",
      skill: "Parse and process CSV data files.",
      lesson: {
        sections: [
          {
            heading: "CSV format",
            body: "**CSV** (Comma-Separated Values): each line = record, fields separated by commas. `name,age,class` header then `Alice,16,10A`. Simple, human-readable, spreadsheet-compatible.\n\n**Parsing**: split each line by comma → extract fields. **Issues**: commas in data (use quotes), missing values, inconsistent formatting.",
          },
          {
            heading: "Processing CSV",
            body: "**Read**: line by line, split fields, store in array/records. **Analyse**: count, sum, filter, sort. **Write**: generate reports, export data.\n\nExample: read student CSV → calculate average age → output results.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "CSV: `Alice,16,10A` — extract class.",
          solution: "Split by comma → field[2] = '10A'.",
        },
      },
      questions: [
        {
          id: "ecs11-u6-csv-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does CSV stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Computer System Variables" },
              { id: "b", text: "Code Syntax Variables" },
              { id: "c", text: "Central Storage Vault" },
              { id: "d", text: "Comma-Separated Values" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CSV",
                statement: "Comma-Separated Values.",
              },
            ],
            steps: [
              {
                reasoning: "CSV = comma-separated.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Comma-Separated Values",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "ecs11-u6-csv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How would you extract the age from `Alice,16,10A`?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "CSV parsing",
                statement: "Split by comma.",
              },
            ],
            steps: [
              {
                reasoning: "Split line by comma → ['Alice','16','10A'].",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Access field[1] = '16'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Convert to integer if needed for maths.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Split by comma, take field index 1.",
            commonErrors: ["Wrong field.", "No split."],
          },
        },
        {
          id: "ecs11-u6-csv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two problems that can occur with CSV files.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CSV issues",
                statement: "Delimiters, missing data.",
              },
            ],
            steps: [
              {
                reasoning: "Commas inside data break parsing — need quotes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Missing values shift fields — misaligned data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inconsistent formatting — dates, numbers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Encoding issues — special characters.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Delimiter conflicts, missing values, format issues.",
            commonErrors: ["Perfect format.", "Only one."],
          },
        },
        {
          id: "ecs11-u6-csv-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write pseudocode to read a CSV of student scores and output the average.",
          parts: [
            { label: "a", prompt: "Write the pseudocode.", marks: 4 },
            { label: "b", prompt: "Explain the processing steps.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "CSV processing",
                statement: "Read→parse→accumulate→output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) OPEN file; WHILE not EOF READ line; split; sum += score; count++. OUTPUT sum/count.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct accumulation logic.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Open file, read each line.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Split fields, extract score, accumulate sum and count.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Calculate and output average.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) read+accumulate+average (b) steps explained",
            commonErrors: ["No accumulation.", "No average."],
          },
        },
      ],
    },
    {
      id: "ecs11-u6-project",
      title: "Programming Project",
      skill: "Plan and structure a complete programming project.",
      lesson: {
        sections: [
          {
            heading: "Project planning",
            body: "**Specification**: what problem? Requirements, inputs, outputs. **Design**: algorithms, data structures, UI. **Implementation**: code in modules. **Testing**: verify each part + whole. **Evaluation**: does it meet spec? Improvements?\n\n**Modular design**: break into functions/subroutines — each does one thing.",
          },
          {
            heading: "Testing strategies",
            body: "**Unit testing**: test individual functions. **Integration testing**: test combined modules. **System testing**: test whole program. **User acceptance**: end users verify.\n\n**Test cases**: normal input, boundary values, invalid input, edge cases. **Documentation**: comments, user guide, technical docs.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Plan a quiz program.",
          solution:
            "Spec: 10 questions, score tracking. Design: question array, loop, scoring function.",
        },
      },
      questions: [
        {
          id: "ecs11-u6-project-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the first step in a programming project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Define the problem/specification" },
              { id: "b", text: "Write code" },
              { id: "c", text: "Test the program" },
              { id: "d", text: "Document code" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Project stages",
                statement: "Spec first.",
              },
            ],
            steps: [
              {
                reasoning: "Specification before coding.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Define specification",
            commonErrors: ["Code first."],
          },
        },
        {
          id: "ecs11-u6-project-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of modular programming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Modularity",
                statement: "Reusable, testable parts.",
              },
            ],
            steps: [
              {
                reasoning: "Easier debugging — isolate problems to modules.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Code reuse — use module in multiple places.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Team collaboration — different people work on modules.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Debugging, reuse, collaboration.",
            commonErrors: ["Only one.", "No benefit."],
          },
        },
        {
          id: "ecs11-u6-project-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between unit testing and system testing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Test levels",
                statement: "Parts vs whole.",
              },
            ],
            steps: [
              {
                reasoning: "Unit testing: individual functions/modules.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "System testing: whole program integrated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Unit finds local bugs; system finds interaction bugs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both needed for quality.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Unit=parts, system=whole.",
            commonErrors: ["Same thing.", "No difference."],
          },
        },
        {
          id: "ecs11-u6-project-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan a program to manage a school library.",
          parts: [
            { label: "a", prompt: "Write a brief specification.", marks: 4 },
            {
              label: "b",
              prompt: "Identify three modules/functions.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Project planning",
                statement: "Spec + modular design.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Store book/member data; add/remove/search books.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Track loans/returns; report overdue.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) addBook(), searchBook(), issueBook(), returnBook().",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Each function does one task — modular.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) features spec (b) 3+ functions",
            commonErrors: ["No spec.", "No modules."],
          },
        },
      ],
    },
  ],
};
