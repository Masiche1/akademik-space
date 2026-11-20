import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "olict-u5-lesson-5-2",
  code: "5-2",
  title: "Productivity Applications",
  goal: "I CAN describe word processors, spreadsheets, databases and presentation software.",
  standards: ["7014 8.1"],
  vocabulary: [
    { term: "Word processor", definition: "Software for creating/editing text documents." },
    { term: "Spreadsheet", definition: "Software organising data in rows/columns with automatic calculations." },
    { term: "Cell", definition: "Single data location in a spreadsheet." },
    { term: "Formula", definition: "Spreadsheet expression performing calculations." },
    { term: "Database software", definition: "Software for storing and querying structured data." },
    { term: "Presentation software", definition: "Software for creating slide shows." },
    { term: "Desktop publishing (DTP)", definition: "Software for designing printed materials — leaflets, posters." },
  ],
  concepts: [
    {
      id: "olict-u5-productivity",
      title: "Productivity software",
      skill: "Describe word processors, spreadsheets, databases and presentations.",
      lesson: {
        sections: [
          { heading: "Word processing", body: "Create letters, reports, essays. Features: formatting (fonts, styles), spell check, tables, mail merge for personalised bulk letters." },
          { heading: "Spreadsheets", body: "Data in rows/columns (**cells**). **Formulas** (=A1+B1) calculate automatically. Used for budgets, grades, inventories — recalculates instantly when data changes." },
          { heading: "Databases", body: "Store structured data in tables with fields/records; run queries and produce reports — used for library catalogues, customer records." },
          { heading: "Presentations & DTP", body: "**Presentation software**: slide shows with text, images, charts. **DTP**: designs leaflets/posters for print." },
        ],
        keyFormulas: [
          { name: "Spreadsheet", statement: "Data in cells; formulas calculate" },
        ],
        workedExample: {
          problem: "A shop wants to track sales and calculate monthly totals. Which software?",
          solution: "Spreadsheet — enter sales in cells, use SUM formulas for totals, charts for analysis.",
        },
      },
      questions: [
        {
          id: "olict-u5-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A spreadsheet stores data in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cells in rows and columns" }, { id: "b", text: "Paragraphs" }, { id: "c", text: "Slides" }, { id: "d", text: "Folders" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Spreadsheet", statement: "Cells grid." }], steps: [{ reasoning: "Cells grid.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Cells" },
        },
        {
          id: "olict-u5-pr-q2", difficulty: "core", totalMarks: 2,
          stem: "What is a formula in a spreadsheet?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Formula", statement: "Calculates from cells." }], steps: [
            { reasoning: "Expression performing calculations on cells.", marks: 1, markCode: "M" },
            { reasoning: "Updates automatically when data changes.", marks: 1, markCode: "A" },
          ], finalAnswer: "An expression like =A1+B1 that calculates automatically and updates with data." },
        },
        {
          id: "olict-u5-pr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a database is better than a spreadsheet for a library catalogue.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "DB vs spreadsheet", statement: "Structured querying." }], steps: [
            { reasoning: "Handles large structured data better.", marks: 1, markCode: "M" },
            { reasoning: "Queries find records by criteria.", marks: 1, markCode: "M" },
            { reasoning: "Multiple users can access simultaneously.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Databases handle large data with powerful queries and multiple users — spreadsheets suit small personal data." },
        },
        {
          id: "olict-u5-pr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Productivity software review.",
          parts: [
            { label: "a", prompt: "What does a word processor do?", marks: 2 },
            { label: "b", prompt: "What is a spreadsheet cell?", marks: 1 },
            { label: "c", prompt: "What does a formula do?", marks: 2 },
            { label: "d", prompt: "When choose database over spreadsheet?", marks: 2 },
            { label: "e", prompt: "Name two presentation/DTP uses.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Productivity", statement: "Word, sheet, DB, presentation." },
          ], steps: [
            { part: "a", reasoning: "Creates/edits text documents.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Single data location.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Calculates from cells.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Auto-updates.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Large structured data.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Multi-user queries.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Slideshows/posters.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Two uses named.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) text docs (b) data location (c) auto-calc (d) large/multi-user (e) slides+print" },
        },
      ],
    },
    {
      id: "olict-u5-choosing",
      title: "Choosing Software",
      skill: "Select appropriate software for given tasks.",
      lesson: {
        sections: [
          { heading: "Matching software to task", body: "- Write a report → word processor\n- Budget/marks analysis → spreadsheet\n- Stock/customer records → database\n- Class presentation → presentation software\n- Design a poster → DTP or graphics software" },
          { heading: "Factors", body: "Task requirements, user skill, cost, compatibility, training needs, support availability." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A teacher needs to produce personalised certificates for 200 students. Which software and feature?",
          solution: "Word processor with mail merge — one template + student list generates all certificates.",
        },
      },
      questions: [
        {
          id: "olict-u5-cs-q1", difficulty: "foundation", totalMarks: 1,
          stem: "For analysing exam results statistically, use…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Spreadsheet" }, { id: "b", text: "Presentation software" }, { id: "c", text: "Word processor" }, { id: "d", text: "Paint" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Software choice", statement: "Match task." }], steps: [{ reasoning: "Spreadsheet for calculations.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Spreadsheet" },
        },
        {
          id: "olict-u5-cs-q2", difficulty: "core", totalMarks: 2,
          stem: "Suggest software for designing a school newsletter and justify.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Software choice", statement: "DTP for layout." }], steps: [
            { reasoning: "DTP or word processor with columns.", marks: 1, markCode: "M" },
            { reasoning: "Justified: handles layout/design.", marks: 1, markCode: "A" },
          ], finalAnswer: "Desktop publishing software — designed for multi-column print layouts." },
        },
        {
          id: "olict-u5-cs-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain three factors when choosing software for an organisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Selection factors", statement: "Task, cost, support." }], steps: [
            { reasoning: "Does it meet task requirements?", marks: 1, markCode: "M" },
            { reasoning: "Cost/licensing fits budget?", marks: 1, markCode: "M" },
            { reasoning: "User skill/training/support available?", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Task fit, cost/licensing, user skill, training and support." },
        },
        {
          id: "olict-u5-cs-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Software selection review.",
          parts: [
            { label: "a", prompt: "Best software for a budget spreadsheet?", marks: 1 },
            { label: "b", prompt: "Best software for a hospital's patient database?", marks: 1 },
            { label: "c", prompt: "Best software for a slide presentation?", marks: 1 },
            { label: "d", prompt: "Name three selection factors.", marks: 3 },
            { label: "e", prompt: "A charity needs personalised donation letters to 5000 donors. What feature helps?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Selection", statement: "Task-appropriate software." },
          ], steps: [
            { part: "a", reasoning: "Spreadsheet software.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Database software.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Presentation software.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Task fit.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Cost.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Support/skill.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Mail merge.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Merges template + donor list.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct feature.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) sheet (b) DB (c) presentation (d) fit/cost/support (e) mail merge" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u5-5-2-notes", title: "Productivity software — notes", summary: "Word processing, spreadsheets, databases and choosing software.",
      sections: [
        { heading: "Applications", body: "Word processor=text; spreadsheet=cells+formulas; database=structured data; presentation=slides; DTP=print design." },
        { heading: "Choosing", body: "Match task, cost, user skill and support." },
      ] },
  ],
};
