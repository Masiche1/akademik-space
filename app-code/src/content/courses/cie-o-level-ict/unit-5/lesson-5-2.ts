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
            { id: "a", text: "Slides" },
            { id: "b", text: "Cells in rows and columns" },
            { id: "c", text: "Paragraphs" },
            { id: "d", text: "Folders" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Spreadsheet", statement: "Cells grid." }], steps: [{ reasoning: "Cells grid.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Cells" },
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
        {
          id: "olict-u5-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A word processor is mainly used for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Storing structured records" },
            { id: "b", text: "Creating and editing text documents" },
            { id: "c", text: "Sending emails" },
            { id: "d", text: "Drawing images" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Word processor", statement: "Text documents." }], steps: [{ reasoning: "Word processor handles text documents.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Text documents" },
        },
        {
          id: "olict-u5-pr-q6", difficulty: "core", totalMarks: 2,
          stem: "A spreadsheet has 10 columns and 20 rows. How many cells does it contain?",
          response: { type: "numeric", parts: [{ label: "cells", answer: 200 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cell count", statement: "Rows × columns." }], steps: [
            { reasoning: "10 × 20 = 200 cells.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 200 cells.", marks: 1, markCode: "A" },
          ], finalAnswer: "200 cells" },
        },
        {
          id: "olict-u5-pr-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Mail merge is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Send emails automatically" },
            { id: "b", text: "Design posters" },
            { id: "c", text: "Create personalised bulk letters" },
            { id: "d", text: "Sort spreadsheets" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Mail merge", statement: "Personalised bulk letters." }], steps: [{ reasoning: "Mail merge personalises bulk letters.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Personalised bulk letters" },
        },
        {
          id: "olict-u5-pr-q8", difficulty: "core", totalMarks: 1,
          stem: "Database software stores…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only images" },
            { id: "b", text: "Structured data in tables" },
            { id: "c", text: "Slide shows" },
            { id: "d", text: "Letters" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Database", statement: "Structured tables." }], steps: [{ reasoning: "Databases store structured table data.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Structured tables" },
        },
        {
          id: "olict-u5-pr-q9", difficulty: "core", totalMarks: 2,
          stem: "A shop tracks 500 products and stores 8 fields for each product. How many fields of data are stored in total?",
          response: { type: "numeric", parts: [{ label: "fields", answer: 4000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Database size", statement: "Records × fields." }], steps: [
            { reasoning: "500 × 8 = 4000 fields.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 4000 fields.", marks: 1, markCode: "A" },
          ], finalAnswer: "4000 fields" },
        },
        {
          id: "olict-u5-pr-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a spreadsheet recalculates instantly when a value is changed.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Formulas", statement: "Automatic recalculation." }], steps: [
            { reasoning: "Cells contain formulas linked to other cells.", marks: 1, markCode: "M" },
            { reasoning: "When an input changes, the formula detects it.", marks: 1, markCode: "M" },
            { reasoning: "The spreadsheet recomputes all dependent results.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation of auto-update.", marks: 1, markCode: "A" },
          ], finalAnswer: "Formulas reference other cells, so any change triggers automatic recalculation." },
        },
        {
          id: "olict-u5-pr-q11", difficulty: "core", totalMarks: 1,
          stem: "Presentation software is used to create…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Slide shows" },
            { id: "b", text: "Emails" },
            { id: "c", text: "Databases" },
            { id: "d", text: "Spreadsheets" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Presentation software", statement: "Slide shows." }], steps: [{ reasoning: "Presentations make slides.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Slide shows" },
        },
        {
          id: "olict-u5-pr-q12", difficulty: "core", totalMarks: 2,
          stem: "A teacher uses mail merge with one template and a list of 25 students. How many personalised letters are produced?",
          response: { type: "numeric", parts: [{ label: "letters", answer: 25 }] },
          markscheme: { principles: [{ kind: "principle", name: "Mail merge", statement: "One per record." }], steps: [
            { reasoning: "One letter is produced per record.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 25 letters.", marks: 1, markCode: "A" },
          ], finalAnswer: "25 letters" },
        },
        {
          id: "olict-u5-pr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Compare using a word processor versus desktop publishing software for producing a school poster.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "Word processor vs DTP", statement: "Text vs layout." }], steps: [
            { reasoning: "Word processor is good for text-based documents.", marks: 1, markCode: "M" },
            { reasoning: "DTP is designed for visual page layout and design.", marks: 1, markCode: "M" },
            { reasoning: "A poster needs columns, images and precise positioning.", marks: 1, markCode: "M" },
            { reasoning: "DTP justified as the better choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "DTP is better — it handles layout, images and positioning that a poster needs." },
        },
        {
          id: "olict-u5-pr-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Which software is most suitable for tracking a library's book loans?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Presentation software" },
            { id: "b", text: "Paint" },
            { id: "c", text: "Database software" },
            { id: "d", text: "A word processor" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Software choice", statement: "Match task." }], steps: [{ reasoning: "Book loans are structured records → database.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Database software" },
        },
        {
          id: "olict-u5-pr-q15", difficulty: "core", totalMarks: 2,
          stem: "A budget spreadsheet has 12 months and 5 expense categories. How many cells hold expense data?",
          response: { type: "numeric", parts: [{ label: "cells", answer: 60 }] },
          markscheme: { principles: [{ kind: "principle", name: "Grid size", statement: "Rows × columns." }], steps: [
            { reasoning: "12 × 5 = 60 cells.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 60 cells.", marks: 1, markCode: "A" },
          ], finalAnswer: "60 cells" },
        },
        {
          id: "olict-u5-pr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A teacher wants personalised certificates for 200 students. Suggest a solution and explain how it works.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Mail merge", statement: "Template + records." }], steps: [
            { reasoning: "Use a word processor with mail merge.", marks: 1, markCode: "M" },
            { reasoning: "Create one certificate template with placeholders.", marks: 1, markCode: "M" },
            { reasoning: "Merge it with the student list of 200 records.", marks: 1, markCode: "M" },
            { reasoning: "Produces 200 personalised certificates automatically.", marks: 1, markCode: "A" },
          ], finalAnswer: "Mail merge: one template merged with the student list generates all certificates." },
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
            { id: "a", text: "Word processor" },
            { id: "b", text: "Paint" },
            { id: "c", text: "Presentation software" },
            { id: "d", text: "Spreadsheet" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Software choice", statement: "Match task." }], steps: [{ reasoning: "Spreadsheet for calculations.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Spreadsheet" },
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
        {
          id: "olict-u5-cs-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Best software for designing a school newsletter layout?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A database" },
            { id: "b", text: "A game engine" },
            { id: "c", text: "Presentation software" },
            { id: "d", text: "Desktop publishing software" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Software choice", statement: "Match task." }], steps: [{ reasoning: "DTP handles print layouts.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Desktop publishing" },
        },
        {
          id: "olict-u5-cs-q6", difficulty: "core", totalMarks: 2,
          stem: "A charity must send donation letters to 800 donors using mail merge. How many personalised letters are produced?",
          response: { type: "numeric", parts: [{ label: "letters", answer: 800 }] },
          markscheme: { principles: [{ kind: "principle", name: "Mail merge", statement: "One per record." }], steps: [
            { reasoning: "One letter per donor record.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 800 letters.", marks: 1, markCode: "A" },
          ], finalAnswer: "800 letters" },
        },
        {
          id: "olict-u5-cs-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is NOT a factor when choosing software?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The user's favourite colour" },
            { id: "b", text: "Availability of support" },
            { id: "c", text: "Task requirements" },
            { id: "d", text: "Cost" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Selection factors", statement: "Identify non-factor." }], steps: [{ reasoning: "Colour preference is not a selection factor.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Favourite colour" },
        },
        {
          id: "olict-u5-cs-q8", difficulty: "core", totalMarks: 1,
          stem: "Best software for developing a 3D computer game?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mail merge" },
            { id: "b", text: "An antivirus" },
            { id: "c", text: "A spreadsheet" },
            { id: "d", text: "Game development software" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Software choice", statement: "Match task." }], steps: [{ reasoning: "Game development software suits game creation.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Game development software" },
        },
        {
          id: "olict-u5-cs-q9", difficulty: "core", totalMarks: 2,
          stem: "An organisation evaluates 6 software packages but only 3 meet its task requirements. How many packages are rejected?",
          response: { type: "numeric", parts: [{ label: "packages", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Selection", statement: "Total − accepted." }], steps: [
            { reasoning: "6 − 3 = 3 rejected.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 3 packages.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 packages" },
        },
        {
          id: "olict-u5-cs-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why 'task fit' is considered the most important factor when choosing software.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Task fit", statement: "Software must match need." }], steps: [
            { reasoning: "Software must actually perform the required task.", marks: 1, markCode: "M" },
            { reasoning: "If it cannot do the job, cost and support are irrelevant.", marks: 1, markCode: "M" },
            { reasoning: "Cheaper software that fails wastes money and time.", marks: 1, markCode: "M" },
            { reasoning: "Clear justification.", marks: 1, markCode: "A" },
          ], finalAnswer: "If software cannot perform the task, no other factor matters — task fit is essential." },
        },
        {
          id: "olict-u5-cs-q11", difficulty: "core", totalMarks: 1,
          stem: "Which software suits creating a company's logo?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Graphics or DTP software" },
            { id: "b", text: "Presentation software" },
            { id: "c", text: "A database" },
            { id: "d", text: "A spreadsheet" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Software choice", statement: "Match task." }], steps: [{ reasoning: "Logos need graphics/DTP tools.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Graphics/DTP software" },
        },
        {
          id: "olict-u5-cs-q12", difficulty: "challenge", totalMarks: 2,
          stem: "An office needs word processing on 40 computers. Single-user licences cost $90 each. What is the total cost of individual licences?",
          response: { type: "numeric", parts: [{ label: "USD", answer: 3600, unit: "USD" }] },
          markscheme: { principles: [{ kind: "principle", name: "Licence cost", statement: "Price × machines." }], steps: [
            { reasoning: "40 × $90 = $3600.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $3600.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3600" },
        },
        {
          id: "olict-u5-cs-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A hospital is choosing software to manage patient records. Discuss three factors it should consider.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Selection factors", statement: "Fit, cost, security." }], steps: [
            { reasoning: "Task fit: it must handle patient records reliably.", marks: 1, markCode: "M" },
            { reasoning: "Cost: licences and hardware must fit the budget.", marks: 1, markCode: "M" },
            { reasoning: "Security/support: patient data needs protection and vendor support.", marks: 1, markCode: "M" },
            { reasoning: "All three factors discussed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Task fit, cost/licensing, and security/support for sensitive data." },
        },
        {
          id: "olict-u5-cs-q14", difficulty: "core", totalMarks: 1,
          stem: "Software compatibility matters because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It removes the need for licences" },
            { id: "b", text: "All software is identical" },
            { id: "c", text: "It makes computers faster" },
            { id: "d", text: "New software may not run on old hardware or file formats" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Compatibility", statement: "Hardware + formats." }], steps: [{ reasoning: "Compatibility affects whether software runs.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** May not run on old hardware/formats" },
        },
        {
          id: "olict-u5-cs-q15", difficulty: "core", totalMarks: 2,
          stem: "A business needs word processing for 15 staff. Single-user licences cost $80 each. What is the total cost?",
          response: { type: "numeric", parts: [{ label: "USD", answer: 1200, unit: "USD" }] },
          markscheme: { principles: [{ kind: "principle", name: "Licence cost", statement: "Price × staff." }], steps: [
            { reasoning: "15 × $80 = $1200.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $1200.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1200" },
        },
        {
          id: "olict-u5-cs-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A company must (a) analyse monthly sales figures and (b) present the results to the board. Suggest suitable software for each task and justify.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Software choice", statement: "Analysis vs presentation." }], steps: [
            { reasoning: "Spreadsheet software for analysing sales figures.", marks: 1, markCode: "M" },
            { reasoning: "Justified: formulas, charts and automatic calculations.", marks: 1, markCode: "A" },
            { reasoning: "Presentation software for the board presentation.", marks: 1, markCode: "M" },
            { reasoning: "Justified: creates clear slide shows for audiences.", marks: 1, markCode: "A" },
          ], finalAnswer: "Spreadsheet for analysis; presentation software for the board slides." },
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
