import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cie-ol-el-lesson-5-1",
  code: "5-1",
  title: "Formal letter writing",
  goal: "I CAN write formal letters for different purposes.",
  standards: ["1123 Writing: formal letters"],
  vocabulary: [
    { term: "Formal letter", definition: "Official correspondence with standard format." },
    { term: "Salutation", definition: "Greeting — 'Dear Sir/Madam' or 'Dear Mr Smith'." },
    { term: "Valediction", definition: "Closing — 'Yours faithfully' or 'Yours sincerely'." },
    { term: "Subject line", definition: "Brief summary of letter purpose." },
    { term: "Enclosure", definition: "Additional documents attached." },
    { term: "Postscript", definition: "Additional note after signature — 'P.S.'" },
  ],
  concepts: [
    {
      id: "cie-ol-el-formal-letter",
      title: "Formal letter format",
      skill: "Write formal letters with correct format and register.",
      lesson: {
        sections: [
          {
            heading: "Format",
            body: "Sender's address → date → recipient's address → salutation → subject line → body → valediction → signature → name. Optional: enclosure, postscript.",
          },
          {
            heading: "Salutations and valedictions",
            body: "'Dear Sir/Madam' → 'Yours faithfully' (unknown name); 'Dear Mr Smith' → 'Yours sincerely' (known name).",
          },
          {
            heading: "Body structure",
            body: "Opening (purpose) → main points → closing (request/next steps). Formal, polite, clear.",
          },
        ],
        keyFormulas: [
          { name: "Formal letter", statement: "Address→date→recipient→salutation→subject→body→valediction→signature→name." },
        ],
        workedExample: {
          problem: "Write a formal complaint letter.",
          solution: "Sender's address, date, company address, 'Dear Sir/Madam', subject 'Complaint about...', problem details, request remedy, 'Yours faithfully'.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-fl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes first in a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sender's address" },
              { id: "b", text: "Recipient's address" },
              { id: "c", text: "Salutation" },
              { id: "d", text: "Body" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Format", statement: "Sender's address first." },
            ],
            steps: [
              { reasoning: "Sender's address first.", working: "address", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Sender's address",
            commonErrors: ["Starting with recipient — wrong order."],
          },
        },
        {
          id: "cie-ol-el-fl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two formal letter elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Elements", statement: "Salutation, valediction, subject line, signature." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "elements", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Salutation, valediction, subject line, signature (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-fl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "When to use 'Yours faithfully' vs 'Yours sincerely'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Valediction", statement: "'Yours faithfully'=unknown name; 'Yours sincerely'=known name." },
            ],
            steps: [
              { reasoning: "'Yours faithfully' with 'Dear Sir/Madam' — unknown recipient.", working: "faithfully", marks: 1, markCode: "AO2" },
              { reasoning: "'Yours sincerely' with 'Dear Mr Smith' — known recipient.", working: "sincerely", marks: 1, markCode: "AO2" },
              { reasoning: "Match valediction to salutation.", working: "match", marks: 1, markCode: "AO2" },
              { reasoning: "Rule clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Yours faithfully'=unknown name; 'Yours sincerely'=known name.",
            commonErrors: ["Mismatching — check salutation."],
          },
        },
        {
          id: "cie-ol-el-fl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate formal letters.",
          parts: [
            { label: "a", prompt: "Describe letter format.", marks: 3 },
            { label: "b", prompt: "When 'Yours faithfully'?", marks: 2 },
            { label: "c", prompt: "When 'Yours sincerely'?", marks: 2 },
            { label: "d", prompt: "How to structure body?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal letters", statement: "Format, valedictions, body structure." },
            ],
            steps: [
              { part: "a", reasoning: "Sender's address→date→recipient→salutation→subject→body→valediction→signature→name.", working: "format", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Unknown recipient name — 'Dear Sir/Madam'.", working: "faithfully", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Known recipient name — 'Dear Mr Smith'.", working: "sincerely", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Opening (purpose)→main points→closing (request/next steps).", working: "body", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) format (b) unknown name (c) known name (d) purpose→points→request",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Complete format.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Mismatched salutation/valediction."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-u5-letter-types",
      title: "Letter types and purposes",
      skill: "Write letters for different purposes — complaints, applications, requests.",
      lesson: {
        sections: [
          {
            heading: "Complaint letter",
            body: "State problem clearly → provide details → request remedy → polite but firm. Formal register.",
          },
          {
            heading: "Application letter",
            body: "Introduce self → state position → highlight qualifications → request opportunity → formal register.",
          },
          {
            heading: "Request letter",
            body: "State request clearly → provide reasons → specify what you need → polite closing.",
          },
        ],
        keyFormulas: [
          { name: "Letter types", statement: "Complaint: problem→details→remedy. Application: self→position→qualifications→request." },
        ],
        workedExample: {
          problem: "Write a letter requesting information about a course.",
          solution: "Formal register, state request clearly, provide reasons, specify information needed, polite closing.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-lt2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a complaint letter include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Problem, details, remedy" },
              { id: "b", text: "Only greeting" },
              { id: "c", text: "Only signature" },
              { id: "d", text: "Only date" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Complaint", statement: "Problem→details→remedy request." },
            ],
            steps: [
              { reasoning: "Problem, details, remedy.", working: "elements", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Problem, details, remedy",
            commonErrors: ["Missing remedy — key element."],
          },
        },
        {
          id: "cie-ol-el-lt2-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two letter types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Types", statement: "Complaint, application, request, invitation, thank-you." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Complaint, application, request, invitation, thank-you (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-lt2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of an application letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Application", statement: "Introduce→position→qualifications→request opportunity." },
            ],
            steps: [
              { reasoning: "Introduce self and purpose.", working: "introduce", marks: 1, markCode: "AO2" },
              { reasoning: "State position and highlight qualifications/experience.", working: "qualifications", marks: 1, markCode: "AO2" },
              { reasoning: "Request opportunity — formal closing.", working: "request", marks: 1, markCode: "AO2" },
              { reasoning: "Structure clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Introduce→position→qualifications→request opportunity.",
            commonErrors: ["Missing qualifications — key selling point."],
          },
        },
        {
          id: "cie-ol-el-lt2-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate letter types.",
          parts: [
            { label: "a", prompt: "Name three letter types.", marks: 2 },
            { label: "b", prompt: "Describe complaint letter.", marks: 3 },
            { label: "c", prompt: "Describe application letter.", marks: 2 },
            { label: "d", prompt: "Describe request letter.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter types", statement: "Complaint, application, request." },
            ],
            steps: [
              { part: "a", reasoning: "Complaint, application, request, invitation, thank-you.", working: "types", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Three+ valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Problem→details→remedy→polite but firm.", working: "complaint", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Introduce→position→qualifications→request.", working: "application", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Request→reasons→specify→polite closing.", working: "request", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) types (b) complaint structure (c) application structure (d) request structure",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three+ types.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Complaint too aggressive — must stay polite."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-email-writing",
      title: "Email writing",
      skill: "Write effective emails for different purposes.",
      lesson: {
        sections: [
          {
            heading: "Email format",
            body: "Subject line → greeting → body → closing → signature. More flexible than letters.",
          },
          {
            heading: "Subject lines",
            body: "Brief, clear, informative — 'Meeting request: Project update Friday 3pm'. Not vague.",
          },
          {
            heading: "Email types",
            body: "Formal (business), semi-formal (colleagues), informal (friends). Register varies accordingly.",
          },
        ],
        keyFormulas: [
          { name: "Email writing", statement: "Subject→greeting→body→closing→signature; subject must be clear." },
        ],
        workedExample: {
          problem: "Write email requesting meeting.",
          solution: "Subject: 'Meeting request: Project update', greeting 'Dear [name]', state purpose, propose time, closing, signature.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-email-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should an email subject line do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarise content clearly" },
              { id: "b", text: "Be vague" },
              { id: "c", text: "Be long" },
              { id: "d", text: "Be confusing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject line", statement: "Brief, clear, informative summary." },
            ],
            steps: [
              { reasoning: "Subject = clear summary.", working: "summary", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Summarise content clearly",
            commonErrors: ["Vague subject — must be clear."],
          },
        },
        {
          id: "cie-ol-el-email-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two email types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email types", statement: "Formal, semi-formal, informal." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal, semi-formal, informal (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-email-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does email differ from formal letter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email vs letter", statement: "Email: subject line, more flexible, faster; letter: formal format, physical." },
            ],
            steps: [
              { reasoning: "Email has subject line; letter has addresses.", working: "format", marks: 1, markCode: "AO2" },
              { reasoning: "Email more flexible/instant; letter formal/physical.", working: "flexibility", marks: 1, markCode: "AO2" },
              { reasoning: "Register can vary more in email.", working: "register", marks: 1, markCode: "AO2" },
              { reasoning: "Differences clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Email: subject, flexible, instant; letter: formal format, physical.",
            commonErrors: ["Treating them the same — formats differ."],
          },
        },
        {
          id: "cie-ol-el-email-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate emails.",
          parts: [
            { label: "a", prompt: "Describe email format.", marks: 2 },
            { label: "b", prompt: "How to write subject line?", marks: 2 },
            { label: "c", prompt: "Name email types.", marks: 2 },
            { label: "d", prompt: "Email vs letter differences?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email writing", statement: "Format, subject line, types, vs letters." },
            ],
            steps: [
              { part: "a", reasoning: "Subject→greeting→body→closing→signature.", working: "format", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Brief, clear, informative summary.", working: "subject", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Formal, semi-formal, informal.", working: "types", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Email: subject, flexible, instant; letter: formal, physical.", working: "differences", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple differences.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) format (b) clear subject (c) types (d) email vs letter",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple types.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Differences clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Vague subject line — must be clear."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-reports-proposals",
      title: "Reports and proposals",
      skill: "Write structured reports and proposals.",
      lesson: {
        sections: [
          {
            heading: "Report structure",
            body: "Title → introduction (purpose) → findings/method → conclusion → recommendations. Factual, objective.",
          },
          {
            heading: "Proposal structure",
            body: "Title → introduction (problem) → proposed solution → benefits → implementation → conclusion.",
          },
          {
            heading: "Language features",
            body: "Formal register, passive voice, technical terms, statistics, organised paragraphs, headings.",
          },
        ],
        keyFormulas: [
          { name: "Reports/proposals", statement: "Report: title→intro→findings→conclusion→recommendations; proposal: problem→solution→benefits→implementation." },
        ],
        workedExample: {
          problem: "Write a proposal for school recycling programme.",
          solution: "Problem (waste) → solution (recycling bins) → benefits (environment, cost) → implementation (timeline) → conclusion.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main feature of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factual account" },
              { id: "b", text: "Personal opinion" },
              { id: "c", text: "Story" },
              { id: "d", text: "Poem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report", statement: "Factual account of events/findings." },
            ],
            steps: [
              { reasoning: "Report = factual.", working: "factual", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Factual account",
            commonErrors: ["Choosing (b) — reports are objective."],
          },
        },
        {
          id: "cie-ol-el-rp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two report sections.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sections", statement: "Introduction, findings, conclusion, recommendations." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "sections", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Introduction, findings, conclusion, recommendations (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-rp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of a proposal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proposal", statement: "Problem→solution→benefits→implementation→conclusion." },
            ],
            steps: [
              { reasoning: "Introduce problem clearly.", working: "problem", marks: 1, markCode: "AO2" },
              { reasoning: "Propose solution with details.", working: "solution", marks: 1, markCode: "AO2" },
              { reasoning: "Explain benefits and implementation plan.", working: "benefits", marks: 1, markCode: "AO2" },
              { reasoning: "Structure clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Problem→solution→benefits→implementation→conclusion.",
            commonErrors: ["Missing problem — context needed."],
          },
        },
        {
          id: "cie-ol-el-rp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate reports/proposals.",
          parts: [
            { label: "a", prompt: "Define report.", marks: 1 },
            { label: "b", prompt: "Describe report structure.", marks: 3 },
            { label: "c", prompt: "Describe proposal structure.", marks: 3 },
            { label: "d", prompt: "Name language features.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reports/proposals", statement: "Factual reports, structured proposals, formal language." },
            ],
            steps: [
              { part: "a", reasoning: "Factual account of events/findings.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Title→intro→findings→conclusion→recommendations.", working: "report", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Problem→solution→benefits→implementation→conclusion.", working: "proposal", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Formal register, passive voice, technical terms, statistics.", working: "features", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) factual (b) report structure (c) proposal structure (d) formal features",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple features.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Proposal without problem context — needs justification."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-transactional-exam",
      title: "Transactional writing exam skills",
      skill: "Apply transactional writing techniques in exams.",
      lesson: {
        sections: [
          {
            heading: "Reading the task",
            body: "Identify purpose, audience, format requirements. Check word count. Note specific content requirements.",
          },
          {
            heading: "Planning",
            body: "Brainstorm ideas, structure response, draft mentally before writing. Check format conventions.",
          },
          {
            heading: "Common mistakes",
            body: "Wrong register, missing format elements, ignoring word limits, not addressing purpose, poor structure.",
          },
        ],
        keyFormulas: [
          { name: "Exam skills", statement: "Identify purpose/audience/format→plan→write→check conventions." },
        ],
        workedExample: {
          problem: "How to approach directed writing task?",
          solution: "Read task → identify purpose/audience/format → plan structure → write → check word count and format.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-te-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you identify first in directed writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Purpose and audience" },
              { id: "b", text: "Word count only" },
              { id: "c", text: "Font" },
              { id: "d", text: "Paper" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Task analysis", statement: "Purpose and audience first." },
            ],
            steps: [
              { reasoning: "Purpose/audience first.", working: "purpose", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Purpose and audience",
            commonErrors: ["Starting to write — need to analyse task."],
          },
        },
        {
          id: "cie-ol-el-te-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two common transactional writing mistakes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Mistakes", statement: "Wrong register, missing format, ignoring word limits." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "mistakes", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Wrong register, missing format, ignoring word limits, not addressing purpose (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-te-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to plan a transactional writing response?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "Identify requirements→brainstorm→structure→check format." },
            ],
            steps: [
              { reasoning: "Identify purpose, audience, format, word count.", working: "identify", marks: 1, markCode: "AO2" },
              { reasoning: "Brainstorm ideas and structure response.", working: "brainstorm", marks: 1, markCode: "AO2" },
              { reasoning: "Check format conventions before writing.", working: "check", marks: 1, markCode: "AO2" },
              { reasoning: "Process clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Identify→brainstorm→structure→check format.",
            commonErrors: ["Writing without planning — loses marks."],
          },
        },
        {
          id: "cie-ol-el-te-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply transactional writing exam skills.",
          parts: [
            { label: "a", prompt: "What to identify first?", marks: 1 },
            { label: "b", prompt: "Name common mistakes.", marks: 2 },
            { label: "c", prompt: "How to plan response?", marks: 3 },
            { label: "d", prompt: "How to check work?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam skills", statement: "Task analysis, mistakes, planning, checking." },
            ],
            steps: [
              { part: "a", reasoning: "Purpose and audience first.", working: "identify", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Wrong register, missing format, word limits, purpose.", working: "mistakes", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Identify→brainstorm→structure→check format.", working: "plan", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check format, word count, register, complete all requirements.", working: "check", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple checks.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) purpose/audience (b) mistakes (c) identify→plan→check (d) format/word count/register",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple mistakes.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Process clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Checks clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["No planning — loses marks on structure."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-unit5-notes",
      title: "Unit 5 — revision notes",
      summary: "Formal letters, emails, reports, proposals, exam skills.",
      sections: [
        {
          heading: "Transactional writing",
          body: "Letters: format+valedictions. Emails: subject+flexibility. Reports: factual structure. Proposals: problem→solution→benefits. Exam: identify→plan→check.",
        },
      ],
    },
  ],
};
