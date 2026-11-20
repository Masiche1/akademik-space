import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cie-ol-el-lesson-3-2",
  code: "3-2",
  title: "Transactional writing",
  goal: "I CAN write formal letters, reports, emails and other transactional texts.",
  standards: ["1123 Writing: transactional"],
  vocabulary: [
    { term: "Transactional writing", definition: "Writing with practical purpose — letters, emails, reports." },
    { term: "Register", definition: "Level of formality appropriate to context." },
    { term: "Salutation", definition: "Greeting at start of letter/email." },
    { term: "Valediction", definition: "Closing phrase — 'Yours faithfully', 'Kind regards'." },
    { term: "Subject line", definition: "Brief summary of email content." },
    { term: "Tone", definition: "Attitude conveyed — formal, friendly, urgent." },
  ],
  concepts: [
    {
      id: "cie-ol-el-transactional",
      title: "Transactional writing",
      skill: "Write formal and informal transactional texts with appropriate register.",
      lesson: {
        sections: [
          {
            heading: "Formal letter format",
            body: "Sender's address → date → recipient's address → salutation ('Dear Sir/Madam') → body → valediction ('Yours faithfully') → signature → name.",
          },
          {
            heading: "Email format",
            body: "Subject line → greeting → body → closing → signature. More informal than letter but still structured.",
          },
          {
            heading: "Register",
            body: "Formal: official/business — 'Dear Sir', 'Yours faithfully'. Informal: friends — 'Hi', 'Cheers'. Match register to recipient.",
          },
        ],
        keyFormulas: [
          { name: "Transactional", statement: "Formal letter: address→date→recipient→salutation→body→valediction→signature." },
        ],
        workedExample: {
          problem: "Write a formal complaint letter.",
          solution: "Formal register, letter format, state problem clearly, request remedy, polite but firm.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-trans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'register' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Level of formality" },
              { id: "b", text: "Word count" },
              { id: "c", text: "Font size" },
              { id: "d", text: "Paper quality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register", statement: "Level of formality appropriate to context." },
            ],
            steps: [
              { reasoning: "Register = formality level.", working: "formality", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Level of formality",
            commonErrors: ["Choosing (b) — that's word count."],
          },
        },
        {
          id: "cie-ol-el-trans-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two formal letter elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter elements", statement: "Salutation, valediction, addresses, signature." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "elements", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Salutation, valediction, addresses, signature (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-trans-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to choose formal vs informal register?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register choice", statement: "Recipient determines register — official=business, friends=casual." },
            ],
            steps: [
              { reasoning: "Official/business → formal register.", working: "formal", marks: 1, markCode: "AO2" },
              { reasoning: "Friends/family → informal register.", working: "informal", marks: 1, markCode: "AO2" },
              { reasoning: "Match language, greeting, closing to recipient.", working: "match", marks: 1, markCode: "AO2" },
              { reasoning: "Choice explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Official→formal; friends→informal; match language to recipient.",
            commonErrors: ["Same register for all — must adapt."],
          },
        },
        {
          id: "cie-ol-el-trans-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate transactional texts.",
          parts: [
            { label: "a", prompt: "Define register.", marks: 1 },
            { label: "b", prompt: "Describe formal letter format.", marks: 3 },
            { label: "c", prompt: "How to choose register?", marks: 2 },
            { label: "d", prompt: "Describe email format.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transactional writing", statement: "Register, letter format, email format." },
            ],
            steps: [
              { part: "a", reasoning: "Level of formality appropriate to context.", working: "register", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Sender's address→date→recipient→salutation→body→valediction→signature.", working: "letter", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Official→formal; friends→informal; match language.", working: "choice", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Subject line→greeting→body→closing→signature.", working: "email", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Complete.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) formality (b) letter format (c) recipient determines (d) email format",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete format.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete format.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Wrong register for recipient — formal for friends."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-letter-types",
      title: "Letter and email types",
      skill: "Write different types of transactional correspondence.",
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
            heading: "Informal email",
            body: "Casual greeting → updates/news → personal touch → informal closing. Relaxed register.",
          },
        ],
        keyFormulas: [
          { name: "Letter types", statement: "Complaint: problem→details→remedy. Application: self→position→qualifications→request." },
        ],
        workedExample: {
          problem: "Write a job application letter.",
          solution: "Formal register, introduce self, state position, highlight relevant qualifications/experience, request opportunity.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-lt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a complaint letter include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Problem, details, remedy request" },
              { id: "b", text: "Only greeting" },
              { id: "c", text: "Only signature" },
              { id: "d", text: "Only date" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Complaint letter", statement: "Problem→details→remedy request." },
            ],
            steps: [
              { reasoning: "Problem, details, remedy.", working: "elements", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Problem, details, remedy request",
            commonErrors: ["Missing remedy request — key element."],
          },
        },
        {
          id: "cie-ol-el-lt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two letter types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter types", statement: "Complaint, application, invitation, thank-you, apology." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Complaint, application, invitation, thank-you, apology (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-lt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of an application letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Application letter", statement: "Introduce→position→qualifications→request opportunity." },
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
          id: "cie-ol-el-lt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate letter types.",
          parts: [
            { label: "a", prompt: "Name three letter types.", marks: 2 },
            { label: "b", prompt: "Describe complaint letter.", marks: 3 },
            { label: "c", prompt: "Describe application letter.", marks: 2 },
            { label: "d", prompt: "When to use informal email?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter types", statement: "Complaint, application, informal email." },
            ],
            steps: [
              { part: "a", reasoning: "Complaint, application, invitation, thank-you, apology.", working: "types", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Three+ valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Problem→details→remedy request→polite but firm.", working: "complaint", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Introduce→position→qualifications→request.", working: "application", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Friends/family — casual, personal, relaxed.", working: "informal", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) types (b) complaint structure (c) application structure (d) friends/family",
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
      id: "cie-ol-el-reports",
      title: "Report writing",
      skill: "Write structured reports for factual accounts.",
      lesson: {
        sections: [
          {
            heading: "Report structure",
            body: "Title → introduction (purpose) → findings/method → conclusion → recommendations. Factual, objective.",
          },
          {
            heading: "Language features",
            body: "Formal register, passive voice ('was conducted'), technical terms, statistics, organised paragraphs.",
          },
          {
            heading: "Objectivity",
            body: "Reports state facts without personal opinion. Use evidence, data, observations — not feelings.",
          },
        ],
        keyFormulas: [
          { name: "Report writing", statement: "Title→intro→findings→conclusion→recommendations; factual, objective." },
        ],
        workedExample: {
          problem: "Write a report about school event.",
          solution: "Title, introduction, what happened, outcomes, conclusion — factual, structured, objective.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-rep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main feature of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factual account" },
              { id: "b", text: "Personal opinion" },
              { id: "c", text: "Story format" },
              { id: "d", text: "Poetic language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report", statement: "Factual account of events/findings." },
            ],
            steps: [
              { reasoning: "Report = factual, objective.", working: "factual", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Factual account",
            commonErrors: ["Choosing (b) — reports are objective."],
          },
        },
        {
          id: "cie-ol-el-rep-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two report sections.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report sections", statement: "Introduction, findings/method, conclusion, recommendations." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "sections", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Introduction, findings/method, conclusion, recommendations (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-rep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the importance of objectivity in reports.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Objectivity", statement: "Reports state facts — no personal opinion; credibility depends on it." },
            ],
            steps: [
              { reasoning: "Objectivity makes report credible and trustworthy.", working: "credible", marks: 1, markCode: "AO2" },
              { reasoning: "Personal opinion would bias the findings.", working: "bias", marks: 1, markCode: "AO2" },
              { reasoning: "Readers rely on reports for facts — must be accurate.", working: "accurate", marks: 1, markCode: "AO2" },
              { reasoning: "Importance explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Credibility, avoids bias, accuracy — essential for factual reports.",
            commonErrors: ["Including opinions — violates objectivity."],
          },
        },
        {
          id: "cie-ol-el-rep-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate reports.",
          parts: [
            { label: "a", prompt: "Define report.", marks: 1 },
            { label: "b", prompt: "Describe report structure.", marks: 3 },
            { label: "c", prompt: "Why objectivity matters.", marks: 2 },
            { label: "d", prompt: "Name language features.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report writing", statement: "Factual account, structure, objectivity, formal language." },
            ],
            steps: [
              { part: "a", reasoning: "Factual account of events/findings.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Title→intro→findings→conclusion→recommendations.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Credibility, avoids bias, accuracy.", working: "objectivity", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Formal register, passive voice, technical terms, statistics.", working: "features", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) factual account (b) structure (c) credibility (d) formal/passive/technical",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple features.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Including personal opinions — violates objectivity."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-articles",
      title: "Article and review writing",
      skill: "Write engaging articles and critical reviews.",
      lesson: {
        sections: [
          {
            heading: "Article structure",
            body: "Engaging headline → introduction (hook) → body (main points) → conclusion. Written for publication audience.",
          },
          {
            heading: "Review structure",
            body: "Title → brief introduction → detailed assessment → strengths/weaknesses → recommendation. Critical but fair.",
          },
          {
            heading: "Audience awareness",
            body: "Articles entertain and inform — use engaging language. Reviews evaluate critically — balanced judgement.",
          },
        ],
        keyFormulas: [
          { name: "Articles/reviews", statement: "Article: headline→hook→body→conclusion; review: assessment→strengths/weaknesses→recommendation." },
        ],
        workedExample: {
          problem: "Write a review of a film.",
          solution: "Title, brief intro, plot summary, assessment of acting/technique, strengths/weaknesses, recommendation.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-art-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of an article headline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grab attention" },
              { id: "b", text: "Give full summary" },
              { id: "c", text: "List sources" },
              { id: "d", text: "End the article" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Headline", statement: "Grabs attention — engages reader." },
            ],
            steps: [
              { reasoning: "Headline = attention grabber.", working: "attention", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Grab attention",
            commonErrors: ["Choosing (b) — that's summary, not headline."],
          },
        },
        {
          id: "cie-ol-el-art-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of reviews.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review types", statement: "Film, book, product, restaurant, performance." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Film, book, product, restaurant, performance (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-art-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should a review be balanced?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced review", statement: "Acknowledge strengths AND weaknesses — fair judgement." },
            ],
            steps: [
              { reasoning: "Identify strengths with examples.", working: "strengths", marks: 1, markCode: "AO2" },
              { reasoning: "Identify weaknesses with examples.", working: "weaknesses", marks: 1, markCode: "AO2" },
              { reasoning: "Weigh both to form fair judgement.", working: "judgement", marks: 1, markCode: "AO2" },
              { reasoning: "Balance explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Strengths+weaknesses with examples → fair judgement.",
            commonErrors: ["One-sided review — must be balanced."],
          },
        },
        {
          id: "cie-ol-el-art-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate articles/reviews.",
          parts: [
            { label: "a", prompt: "Describe article structure.", marks: 2 },
            { label: "b", prompt: "Describe review structure.", marks: 3 },
            { label: "c", prompt: "How to write engaging headline?", marks: 2 },
            { label: "d", prompt: "Why balance reviews?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Articles/reviews", statement: "Structure, headlines, balanced judgement." },
            ],
            steps: [
              { part: "a", reasoning: "Headline→hook→body→conclusion.", working: "article", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Title→intro→assessment→strengths/weaknesses→recommendation.", working: "review", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Short, catchy, intriguing — grab attention.", working: "headline", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Fair judgement, credibility, reader trust.", working: "balance", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) article structure (b) review structure (c) catchy headline (d) fair judgement",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["One-sided review — only praise or only criticism."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-transactional-notes",
      title: "Transactional writing — revision notes",
      summary: "Letters, emails, reports, articles, reviews.",
      sections: [
        {
          heading: "Formats",
          body: "Formal letter: address→date→recipient→salutation→body→valediction→signature. Email: subject→greeting→body→closing→signature. Report: factual, objective. Article: engaging. Review: balanced.",
        },
      ],
    },
  ],
};
