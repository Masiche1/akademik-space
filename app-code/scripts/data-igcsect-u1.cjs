module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson81",
    lesson: {
      id: "cieict-u1-lesson-1-1", code: "1-1",
      title: "Document Production",
      goal: "I CAN create and format professional documents using word processing software.",
      standards: ["Cambridge IGCSE ICT 0417: documents", "0417 section 2: word processing"],
      vocabulary: [
        { term: "Word processor", definition: "Software for creating/editing text documents." },
        { term: "Template", definition: "Pre-designed document layout for reuse." },
        { term: "Mail merge", definition: "Combining template with data to produce personalised documents." },
        { term: "Header/footer", definition: "Text appearing at top/bottom of every page." },
        { term: "Styles", definition: "Predefined formatting applied to text." },
        { term: "Track changes", definition: "Recording edits for review." },
      ],
      concept: {
        id: "cieict-u1-s1-docs", title: "Document production",
        skill: "Create formatted documents with word processors at IGCSE level.",
        sections: [
          { heading: "Document features", body: "Word processors offer styles (headings, body), headers/footers, page numbers, tables, images, mail merge. Templates provide consistent professional layouts. Track changes enables collaborative editing." },
          { heading: "Mail merge", body: "Mail merge combines a template letter with a data source (spreadsheet) to produce personalised documents — letters, labels, certificates. Each record fills placeholders." },
        ],
        keyFormulas: [
          { name: "Mail merge", statement: "template + data source → personalised docs" },
          { name: "Styles", statement: "consistent formatting" },
        ],
        workedExample: {
          problem: "Create personalised invitation letters for 50 guests from a spreadsheet.",
          solution: "Template letter with <<Name>> placeholders + spreadsheet of names → mail merge → 50 personalised letters.",
        },
        questions: [
          {
            id: "cieict-u1-dp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is mail merge?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Combining template with data for personalised documents" }, { id: "b", text: "A type of printer" }, { id: "c", text: "A network protocol" }, { id: "d", text: "A spreadsheet function" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Mail merge", statement: "Template + data → personalised." }],
              steps: [{ reasoning: "Mail merge automates personalised documents.", marks: 1, markCode: "M" }],
              finalAnswer: "Template+data→personalised docs",
            },
          },
          {
            id: "cieict-u1-dp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are styles in a word processor and why use them?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Styles", statement: "Predefined formatting." }],
              steps: [
                { reasoning: "Styles = predefined formatting (headings, body).", marks: 1, markCode: "M" },
                { reasoning: "Consistent formatting, easy updates.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Consistent formatting",
            },
          },
          {
            id: "cieict-u1-dp-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between a header and a footer? Give uses for each.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Header/footer", statement: "Top vs bottom page text." }],
              steps: [
                { reasoning: "Header=top of page; footer=bottom.", marks: 1, markCode: "M" },
                { reasoning: "Uses: title/page numbers/date.", marks: 1, markCode: "M" },
                { reasoning: "Both described.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Top vs bottom page text",
            },
          },
          {
            id: "cieict-u1-dp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define word processor, template, mail merge, header/footer, styles, track changes. (b) When use mail merge? (c) What is a template for? (d) How do styles improve documents? (e) What is track changes for? (f) List 5 word processor features. (g) How would you create personalised certificates? (h) Design a letter template for a school newsletter.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Documents", statement: "Word processing features." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Mass personalised documents.", marks: 1, markCode: "M" },
                { reasoning: "(c) Consistent professional layout.", marks: 1, markCode: "M" },
                { reasoning: "(d) Consistency + easy updates.", marks: 1, markCode: "M" },
                { reasoning: "(e) Review edits before accepting.", marks: 1, markCode: "M" },
                { reasoning: "(f) Five valid features.", marks: 1, markCode: "M" },
                { reasoning: "(g) Mail merge with data source.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid newsletter template.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Document production techniques.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u1-dp-notes", title: "Document production — notes",
      summary: "Styles for consistency; headers/footers for page info; mail merge for personalised mass documents.",
      sections: [
        { heading: "Key idea", body: "Templates + styles = professional consistent documents." },
        { heading: "Mail merge", body: "Template + data source = personalised letters/labels/certificates." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson82",
    lesson: {
      id: "cieict-u1-lesson-1-2", code: "1-2",
      title: "Spreadsheets",
      goal: "I CAN use formulas, functions and data analysis tools in spreadsheets.",
      standards: ["Cambridge IGCSE ICT 0417: spreadsheets", "0417 section 3: spreadsheets"],
      vocabulary: [
        { term: "Spreadsheet", definition: "Grid of cells for calculations and data analysis." },
        { term: "Formula", definition: "Equation starting with = performing calculations." },
        { term: "Function", definition: "Built-in formula — SUM, AVERAGE, VLOOKUP." },
        { term: "Cell reference", definition: "Address of a cell — A1, B2." },
        { term: "What-if analysis", definition: "Testing how changes affect results." },
        { term: "Chart", definition: "Graphical display of spreadsheet data." },
      ],
      concept: {
        id: "cieict-u1-s2-sheets", title: "Spreadsheet skills",
        skill: "Use formulas, functions and charts at IGCSE level.",
        sections: [
          { heading: "Formulas and functions", body: "Formulas start with =: =A1+B2. Functions: SUM(range), AVERAGE(range), COUNT, MAX, MIN, VLOOKUP for lookups. Relative vs absolute references ($A$1) for copying formulas." },
          { heading: "Analysis and visualisation", body: "Charts (bar, line, pie) visualise data. What-if analysis tests scenarios by changing inputs. Sorting/filtering organises data. Conditional formatting highlights patterns." },
        ],
        keyFormulas: [
          { name: "=SUM(A1:A10)", statement: "sum range" },
          { name: "=AVERAGE(B2:B20)", statement: "average range" },
          { name: "$A$1", statement: "absolute reference" },
        ],
        workedExample: {
          problem: "Calculate total sales and average for a range of products.",
          solution: "=SUM(C2:C10) for total; =AVERAGE(C2:C10) for average; chart for visual comparison.",
        },
        questions: [
          {
            id: "cieict-u1-sp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does a formula start with in a spreadsheet?",
            response: { type: "mcq", choices: [
              { id: "a", text: "=" }, { id: "b", text: "+" }, { id: "c", text: "@" }, { id: "d", text: "#" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Formula", statement: "Starts with =." }],
              steps: [{ reasoning: "Formulas begin with =.", marks: 1, markCode: "M" }],
              finalAnswer: "=",
            },
          },
          {
            id: "cieict-u1-sp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "Name three common spreadsheet functions and what they do.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Functions", statement: "Built-in calculations." }],
              steps: [
                { reasoning: "SUM, AVERAGE, COUNT/MAX/MIN.", marks: 1, markCode: "M" },
                { reasoning: "Each correctly described.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "SUM/AVERAGE/COUNT etc.",
            },
          },
          {
            id: "cieict-u1-sp-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between a relative and absolute cell reference? When use absolute?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Cell references", statement: "Relative vs absolute." }],
              steps: [
                { reasoning: "Relative changes when copied; absolute ($A$1) doesn't.", marks: 1, markCode: "M" },
                { reasoning: "Absolute for fixed values (tax rates, constants).", marks: 1, markCode: "M" },
                { reasoning: "Both explained.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Relative vs absolute + use case",
            },
          },
          {
            id: "cieict-u1-sp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define spreadsheet, formula, function, cell reference, what-if analysis, chart. (b) What does =SUM(A1:A10) do? (c) What does =AVERAGE do? (d) What is VLOOKUP for? (e) What is what-if analysis? (f) When use a pie chart vs bar chart? (g) What is conditional formatting? (h) Design a spreadsheet for a school tuck shop budget.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Spreadsheets", statement: "Formulas, functions, charts." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Sums range A1:A10.", marks: 1, markCode: "M" },
                { reasoning: "(c) Mean of range.", marks: 1, markCode: "M" },
                { reasoning: "(d) Looks up value in table.", marks: 1, markCode: "M" },
                { reasoning: "(e) Test scenarios by changing inputs.", marks: 1, markCode: "M" },
                { reasoning: "(f) Pie=proportions; bar=comparison.", marks: 1, markCode: "M" },
                { reasoning: "(g) Highlights cells by condition.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid tuck shop spreadsheet.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Spreadsheet formulas, functions and analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u1-sp-notes", title: "Spreadsheets — notes",
      summary: "Formulas start with =; SUM/AVERAGE/COUNT functions; absolute refs $A$1 for constants.",
      sections: [
        { heading: "Key idea", body: "Spreadsheets turn data into calculations, analysis and charts." },
        { heading: "What-if", body: "Change inputs to see how outputs change." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson83",
    lesson: {
      id: "cieict-u1-lesson-1-3", code: "1-3",
      title: "Databases and Queries",
      goal: "I CAN design database tables and write queries to retrieve and manipulate data.",
      standards: ["Cambridge IGCSE ICT 0417: databases", "0417 section 4: databases"],
      vocabulary: [
        { term: "Database", definition: "Organised collection of related data." },
        { term: "Table", definition: "Grid of records (rows) and fields (columns)." },
        { term: "Record", definition: "One complete row of data." },
        { term: "Field", definition: "One column — a specific attribute." },
        { term: "Query", definition: "Request retrieving/manipulating specific records." },
        { term: "Primary key", definition: "Unique ID identifying each record." },
      ],
      concept: {
        id: "cieict-u1-s3-db", title: "Databases",
        skill: "Design tables and query data at IGCSE ICT level.",
        sections: [
          { heading: "Database structure", body: "Tables hold records (rows) and fields (columns). Primary key uniquely identifies each record. Data types: text, number, date, Boolean. Relationships link tables — one customer has many orders." },
          { heading: "Queries", body: "Queries ask questions: SELECT specific fields, WHERE conditions filter, ORDER BY sorts, COUNT totals. INSERT adds records, UPDATE modifies, DELETE removes. Queries extract exactly what's needed." },
        ],
        keyFormulas: [
          { name: "Table", statement: "records × fields" },
          { name: "SELECT...WHERE", statement: "retrieve filtered data" },
          { name: "Primary key", statement: "unique record ID" },
        ],
        workedExample: {
          problem: "Library DB: books(id, title, genre, available). Find available fiction books sorted by title.",
          solution: "SELECT title FROM books WHERE genre='fiction' AND available=true ORDER BY title.",
        },
        questions: [
          {
            id: "cieict-u1-db-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a primary key?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Unique ID identifying each record" }, { id: "b", text: "A password" }, { id: "c", text: "A type of query" }, { id: "d", text: "A table column" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary key", statement: "Unique record ID." }],
              steps: [{ reasoning: "PK uniquely identifies each row.", marks: 1, markCode: "M" }],
              finalAnswer: "Unique record identifier",
            },
          },
          {
            id: "cieict-u1-db-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between a record and a field?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Record vs field", statement: "Row vs column." }],
              steps: [
                { reasoning: "Record = one complete row.", marks: 1, markCode: "M" },
                { reasoning: "Field = one column/attribute.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Row vs column",
            },
          },
          {
            id: "cieict-u1-db-q3", difficulty: "core", totalMarks: 3,
            stem: "Write a query: employees(id, name, dept, salary). Find employees in 'Sales' earning over 50000.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Queries", statement: "SELECT...WHERE." }],
              steps: [
                { reasoning: "SELECT name FROM employees WHERE dept='Sales' AND salary>50000.", marks: 1, markCode: "M" },
                { reasoning: "Correct conditions.", marks: 1, markCode: "M" },
                { reasoning: "Valid query syntax.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "SELECT...WHERE dept='Sales' AND salary>50000",
            },
          },
          {
            id: "cieict-u1-db-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define database, table, record, field, primary key, query. (b) Design a 'club members' table with 5 fields. (c) What type for each field? (d) Write query for members who joined after 2020. (e) What is a relationship between tables? (f) Why use primary keys? (g) What does ORDER BY do? (h) Design a 2-table school system (students + courses).",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Databases", statement: "Tables, queries, relationships." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Valid table with 5 fields.", marks: 1, markCode: "M" },
                { reasoning: "(c) Appropriate data types.", marks: 1, markCode: "M" },
                { reasoning: "(d) Valid date query.", marks: 1, markCode: "M" },
                { reasoning: "(e) Links between tables via keys.", marks: 1, markCode: "M" },
                { reasoning: "(f) Unique identification, relationships.", marks: 1, markCode: "M" },
                { reasoning: "(g) Sorts results.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid 2-table design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Database design and querying.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u1-db-notes", title: "Databases — notes",
      summary: "Tables=records×fields; PK=unique ID; queries=SELECT/WHERE/ORDER BY to extract data.",
      sections: [
        { heading: "Key idea", body: "Databases organise huge data for fast retrieval." },
        { heading: "Queries", body: "WHERE filters, ORDER BY sorts, COUNT totals." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson84",
    lesson: {
      id: "cieict-u1-lesson-1-4", code: "1-4",
      title: "Web Authoring and Multimedia",
      goal: "I CAN create web pages and multimedia presentations using appropriate software.",
      standards: ["Cambridge IGCSE ICT 0417: web authoring and multimedia", "0417 section 5: web/multimedia"],
      vocabulary: [
        { term: "Web authoring", definition: "Creating web pages with HTML/CSS or tools." },
        { term: "HTML", definition: "HyperText Markup Language — structures web pages." },
        { term: "CSS", definition: "Cascading Style Sheets — styles web pages." },
        { term: "Multimedia", definition: "Combined text, images, audio, video." },
        { term: "Presentation software", definition: "Creating slide shows." },
        { term: "Animation", definition: "Moving graphics or transitions." },
      ],
      concept: {
        id: "cieict-u1-s4-web", title: "Web authoring and multimedia",
        skill: "Create web pages and multimedia content at IGCSE ICT level.",
        sections: [
          { heading: "Web authoring", body: "HTML structures content (headings, paragraphs, links, images); CSS styles it (colours, fonts, layout). Tools like WordPress or drag-and-drop editors simplify creation." },
          { heading: "Multimedia", body: "Presentation software creates slides with text, images, transitions, animations. Multimedia combines text+images+audio+video. Effective design: consistent theme, clear hierarchy, appropriate media." },
        ],
        keyFormulas: [
          { name: "HTML", statement: "structure: <h1>, <p>, <a>, <img>" },
          { name: "CSS", statement: "style: colours, fonts, layout" },
        ],
        workedExample: {
          problem: "Create a simple web page with a heading, paragraph and link.",
          solution: "<h1>My Page</h1><p>Welcome!</p><a href='https://example.com'>Link</a> styled with CSS.",
        },
        questions: [
          {
            id: "cieict-u1-wa-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does HTML stand for?",
            response: { type: "mcq", choices: [
              { id: "a", text: "HyperText Markup Language" }, { id: "b", text: "High Tech Modern Language" }, { id: "c", text: "Home Tool Markup Language" }, { id: "d", text: "Hyperlink Text Markup" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "HTML", statement: "HyperText Markup Language." }],
              steps: [{ reasoning: "HTML = web page structure.", marks: 1, markCode: "M" }],
              finalAnswer: "HyperText Markup Language",
            },
          },
          {
            id: "cieict-u1-wa-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between HTML and CSS?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "HTML vs CSS", statement: "Structure vs style." }],
              steps: [
                { reasoning: "HTML=structure (content); CSS=style (appearance).", marks: 1, markCode: "M" },
                { reasoning: "Separation allows consistent styling.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Structure vs style",
            },
          },
          {
            id: "cieict-u1-wa-q3", difficulty: "core", totalMarks: 3,
            stem: "What are 3 design principles for effective presentations?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Presentation design", statement: "Clarity, consistency, appropriateness." }],
              steps: [
                { reasoning: "Consistent theme/fonts.", marks: 1, markCode: "M" },
                { reasoning: "Clear hierarchy, minimal text.", marks: 1, markCode: "M" },
                { reasoning: "Appropriate media for audience.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Consistency, clarity, appropriateness",
            },
          },
          {
            id: "cieict-u1-wa-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define web authoring, HTML, CSS, multimedia, presentation software, animation. (b) What does <a href> do? (c) What does <img src> do? (d) How does CSS change appearance? (e) What is multimedia? (f) When use animation in presentations? (g) What makes a web page accessible? (h) Design a 5-slide presentation on 'our school'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Web/multimedia", statement: "HTML, CSS, presentations." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Creates hyperlink.", marks: 1, markCode: "M" },
                { reasoning: "(c) Embeds image.", marks: 1, markCode: "M" },
                { reasoning: "(d) Colours, fonts, layout.", marks: 1, markCode: "M" },
                { reasoning: "(e) Combined media types.", marks: 1, markCode: "M" },
                { reasoning: "(f) Emphasise points, guide attention.", marks: 1, markCode: "M" },
                { reasoning: "(g) Alt text, contrast, structure.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid presentation outline.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Web authoring and multimedia creation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u1-wa-notes", title: "Web and multimedia — notes",
      summary: "HTML=structure, CSS=style. Multimedia combines text/images/audio/video for engaging content.",
      sections: [
        { heading: "Key idea", body: "Separation of structure (HTML) and style (CSS) is best practice." },
        { heading: "Design", body: "Consistency, clarity, appropriate media = effective presentations." },
      ],
    },
  },
  {
    file: "lesson-1-5.ts", exportName: "lesson85",
    lesson: {
      id: "cieict-u1-lesson-1-5", code: "1-5",
      title: "Digital Communication and Online Safety",
      goal: "I CAN use digital communication tools effectively and apply online safety practices.",
      standards: ["Cambridge IGCSE ICT 0417: digital communication", "0417 section 6: communication/safety"],
      vocabulary: [
        { term: "Digital communication", definition: "Exchanging information electronically." },
        { term: "Netiquette", definition: "Rules of polite online behaviour." },
        { term: "Phishing", definition: "Fake messages tricking users into revealing credentials." },
        { term: "Digital footprint", definition: "The trail of data you leave online." },
        { term: "Privacy settings", definition: "Controls deciding who sees your content." },
        { term: "Cyberbullying", definition: "Bullying using digital technologies." },
      ],
      concept: {
        id: "cieict-u1-s5-comm", title: "Digital communication and safety",
        skill: "Communicate effectively online and stay safe at IGCSE ICT level.",
        sections: [
          { heading: "Digital communication", body: "Email, instant messaging, video calls, social media, forums. Choose appropriate tool for audience and purpose. Netiquette: be polite, clear, respect privacy, check before posting." },
          { heading: "Online safety", body: "Protect personal information, use strong passwords, privacy settings, think before posting (footprint is permanent), recognise phishing, report cyberbullying, verify information sources." },
        ],
        keyFormulas: [
          { name: "Netiquette", statement: "polite, clear, respectful online behaviour" },
          { name: "Footprint", statement: "everything you post persists" },
        ],
        workedExample: {
          problem: "Should you post a photo with location tag showing your home address?",
          solution: "No — reveals location/privacy risk. Remove tag or blur location before posting.",
        },
        questions: [
          {
            id: "cieict-u1-dc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is netiquette?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Rules of polite online behaviour" }, { id: "b", text: "A network cable" }, { id: "c", text: "A type of software" }, { id: "d", text: "A security protocol" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Netiquette", statement: "Online politeness rules." }],
              steps: [{ reasoning: "Netiquette = online etiquette.", marks: 1, markCode: "M" }],
              finalAnswer: "Online politeness rules",
            },
          },
          {
            id: "cieict-u1-dc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a digital footprint and why does it matter?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Digital footprint", statement: "Online data trail." }],
              steps: [
                { reasoning: "Footprint = everything you post/like/search.", marks: 1, markCode: "M" },
                { reasoning: "Persists; affects reputation/opportunities.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Online trail; permanent impact",
            },
          },
          {
            id: "cieict-u1-dc-q3", difficulty: "core", totalMarks: 3,
            stem: "What is phishing and how do you recognise it? Give 3 red flags.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Phishing", statement: "Deceptive credential theft." }],
              steps: [
                { reasoning: "Phishing = fake messages for credentials.", marks: 1, markCode: "M" },
                { reasoning: "Red flags: urgency, generic greeting, suspicious link.", marks: 1, markCode: "M" },
                { reasoning: "Three valid red flags.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Fake messages; urgency/links/greetings",
            },
          },
          {
            id: "cieict-u1-dc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define digital communication, netiquette, phishing, digital footprint, privacy settings, cyberbullying. (b) What is cyberbullying? (c) How do you respond to cyberbullying? (d) Why use privacy settings? (e) What is a digital footprint? (f) Give 3 online safety practices. (g) What is netiquette? (h) Design online safety guidelines for a school.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Digital safety", statement: "Communication, footprint, threats." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Bullying via digital means.", marks: 1, markCode: "M" },
                { reasoning: "(c) Don't respond, save evidence, report.", marks: 1, markCode: "M" },
                { reasoning: "(d) Control who sees content.", marks: 1, markCode: "M" },
                { reasoning: "(e) Online data trail.", marks: 1, markCode: "M" },
                { reasoning: "(f) Three valid practices.", marks: 1, markCode: "M" },
                { reasoning: "(g) Polite online behaviour rules.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid school safety guidelines.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Digital communication and online safety.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieict-u1-dc-notes", title: "Digital communication — notes",
      summary: "Netiquette for polite online behaviour; footprint is permanent; phishing/cyberbullying need vigilance.",
      sections: [
        { heading: "Key idea", body: "Think before posting — digital footprint is permanent." },
        { heading: "Safety", body: "Privacy settings + strong passwords + verify sources." },
      ],
    },
  },
];
