import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cie-ol-el-lesson-1-3",
  code: "1-3",
  title: "Practical writing applications",
  goal: "I CAN apply writing skills to real-world tasks and exam scenarios.",
  standards: ["1123 Writing: applications"],
  vocabulary: [
    { term: "Letter", definition: "Formal or informal written communication." },
    { term: "Report", definition: "Factual account of events/findings." },
    { term: "Article", definition: "Piece of writing for publication — newspaper, magazine." },
    { term: "Review", definition: "Critical assessment of product/event/work." },
    { term: "Proposal", definition: "Suggested plan or course of action." },
    { term: "Memo", definition: "Brief internal communication — short and direct." },
  ],
  concepts: [
    {
      id: "cie-ol-el-applications",
      title: "Writing applications",
      skill: "Apply writing skills to letters, reports, articles and other formats.",
      lesson: {
        sections: [
          {
            heading: "Letter types",
            body: "- **Formal**: job applications, complaints, official correspondence\n- **Informal**: friends, family — relaxed tone",
          },
          {
            heading: "Report writing",
            body: "Title → introduction → findings/method → conclusion → recommendations. Factual, objective, structured.",
          },
          {
            heading: "Article writing",
            body: "Engaging headline → introduction → body → conclusion. Written for publication audience — entertaining and informative.",
          },
        ],
        keyFormulas: [
          { name: "Applications", statement: "Letter=personal communication; report=factual account; article=publication piece." },
        ],
        workedExample: {
          problem: "Write a report about a school event.",
          solution: "Title, introduction, what happened, outcomes, conclusion — factual, structured, objective.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-app-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main feature of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factual account" },
              { id: "b", text: "Poetic language" },
              { id: "c", text: "Story format" },
              { id: "d", text: "Personal opinion" },
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
          id: "cie-ol-el-app-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three letter types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter types", statement: "Formal, informal, complaint, application." },
            ],
            steps: [
              { reasoning: "Any three valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal, informal, complaint, application (any three).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-app-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of a formal letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter format", statement: "Sender's address→date→recipient→greeting→body→closing→signature." },
            ],
            steps: [
              { reasoning: "Sender's address, date, recipient's address.", working: "header", marks: 1, markCode: "AO2" },
              { reasoning: "Greeting ('Dear Sir/Madam'), body, closing ('Yours faithfully').", working: "body", marks: 1, markCode: "AO2" },
              { reasoning: "Signature — complete format.", working: "signature", marks: 1, markCode: "AO2" },
              { reasoning: "Structure complete.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sender's address→date→recipient→greeting→body→closing→signature.",
            commonErrors: ["Missing elements — check format conventions."],
          },
        },
        {
          id: "cie-ol-el-app-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply writing skills to real tasks.",
          parts: [
            { label: "a", prompt: "When to use formal vs informal letter?", marks: 2 },
            { label: "b", prompt: "Describe report structure.", marks: 3 },
            { label: "c", prompt: "How to write engaging article?", marks: 2 },
            { label: "d", prompt: "What is a proposal?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Applications", statement: "Formal/informal letters; reports; articles; proposals." },
            ],
            steps: [
              { part: "a", reasoning: "Formal: official/business; informal: friends/family.", working: "formal/informal", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Title→introduction→findings→conclusion→recommendations.", working: "report", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Engaging headline, introduction, body, conclusion — for publication audience.", working: "article", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Suggested plan/course of action — problem→solution→benefits.", working: "proposal", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) formal/business vs informal/friends (b) report structure (c) engaging article (d) plan/suggestion",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Structure complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Report with opinions — must be factual."],
          },
        },
        {
          id: "cie-ol-el-app-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To give a factual account" },
              { id: "b", text: "To tell a joke" },
              { id: "c", text: "To entertain readers" },
              { id: "d", text: "To persuade buyers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report", statement: "Factual, objective account of events or findings." },
            ],
            steps: [
              { reasoning: "Report = factual account.", working: "factual", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** To give a factual account",
            commonErrors: ["Choosing (c) — that's advertising."],
          },
        },
        {
          id: "cie-ol-el-app-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A report has 5 required sections: title, introduction, findings, conclusion, recommendations. A student writes all except the recommendations. (a) How many sections has the student written? (b) How many are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report checklist", statement: "All sections must be present." },
            ],
            steps: [
              { reasoning: "5 minus 1 equals 4 sections written.", working: "5 - 1 = 4", marks: 1, markCode: "AO2" },
              { reasoning: "Only the recommendations section is missing.", working: "1 missing", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 1",
            commonErrors: ["Forgetting recommendations is a required section."],
          },
        },
        {
          id: "cie-ol-el-app-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which situation calls for a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A shopping list" },
              { id: "b", text: "A diary entry" },
              { id: "c", text: "A job application" },
              { id: "d", text: "A birthday wish to a friend" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal letter uses", statement: "Job applications, complaints, official correspondence." },
            ],
            steps: [
              { reasoning: "Job applications are formal correspondence.", working: "job application", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** A job application",
            commonErrors: ["Choosing (b) — that's informal."],
          },
        },
        {
          id: "cie-ol-el-app-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two differences between a formal and an informal letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter registers", statement: "Formal: standard English, conventions; informal: casual, contractions." },
            ],
            steps: [
              { reasoning: "Formal uses standard English and set format; informal is casual.", working: "register", marks: 1, markCode: "AO2" },
              { reasoning: "Formal has strict conventions; informal is relaxed.", working: "conventions", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal: standard English, strict format. Informal: casual tone, contractions.",
            commonErrors: ["Only one difference — need two."],
          },
        },
        {
          id: "cie-ol-el-app-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An article has 4 required parts: headline, introduction, body, conclusion. (a) How many parts are required? (b) If the headline must be no more than 10 words, what is the maximum headline length? (c) If the article limit is 400 words and the body uses 200, how many words remain for other parts?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 10, unit: "words" },
              { label: "c", answer: 200, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Article planning", statement: "Know required parts and word allocations." },
            ],
            steps: [
              { reasoning: "4 parts are listed.", working: "4 parts", marks: 1, markCode: "AO1" },
              { reasoning: "Maximum headline is 10 words.", working: "10 words", marks: 1, markCode: "AO2" },
              { reasoning: "400 minus 200 equals 200 words remaining.", working: "400 - 200 = 200", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 10 words; (c) 200 words",
            commonErrors: ["Exceeding the headline limit."],
          },
        },
        {
          id: "cie-ol-el-app-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which text type gives a critical assessment of a film?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Report" },
              { id: "b", text: "Review" },
              { id: "c", text: "Memo" },
              { id: "d", text: "Proposal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Review", statement: "Critical assessment of a product, event or work." },
            ],
            steps: [
              { reasoning: "A review evaluates critically.", working: "review", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Review",
            commonErrors: ["Choosing (b) — reports are factual, not evaluative."],
          },
        },
        {
          id: "cie-ol-el-app-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of a formal letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter format", statement: "Sender's address→date→recipient→salutation→body→valediction→signature." },
            ],
            steps: [
              { reasoning: "Sender's address and date at the top.", working: "header", marks: 1, markCode: "AO2" },
              { reasoning: "Recipient's address, then salutation ('Dear Sir/Madam').", working: "salutation", marks: 1, markCode: "AO2" },
              { reasoning: "Body paragraphs state the purpose clearly.", working: "body", marks: 1, markCode: "AO2" },
              { reasoning: "Valediction ('Yours faithfully') and signature close it.", working: "closing", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sender's address→date→recipient→salutation→body→valediction→signature.",
            commonErrors: ["Missing the date or recipient's address."],
          },
        },
        {
          id: "cie-ol-el-app-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A memo is best described as what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A poem" },
              { id: "b", text: "An advertisement" },
              { id: "c", text: "A brief internal communication" },
              { id: "d", text: "A long formal essay" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Memo", statement: "Brief internal communication — short and direct." },
            ],
            steps: [
              { reasoning: "Memo = short internal note.", working: "internal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** A brief internal communication",
            commonErrors: ["Thinking memos are formal external letters."],
          },
        },
        {
          id: "cie-ol-el-app-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A letter format needs 7 elements; a student includes 5. (a) How many are missing? (b) An article has 4 parts; a student writes all 4. How many parts are complete?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Format checking", statement: "Count required vs included elements." },
            ],
            steps: [
              { reasoning: "7 minus 5 equals 2 missing elements.", working: "7 - 5 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "All 4 article parts are written.", working: "4 complete", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 4",
            commonErrors: ["Not counting format elements carefully."],
          },
        },
        {
          id: "cie-ol-el-app-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply writing format skills.",
          parts: [
            { label: "a", prompt: "Name three letter types.", marks: 2 },
            { label: "b", prompt: "State the purpose and key feature of a report.", marks: 2 },
            { label: "c", prompt: "Who is the typical audience for an article?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Writing applications", statement: "Letter types, reports, articles." },
            ],
            steps: [
              { part: "a", reasoning: "Formal, informal, complaint, application, invitation — any three.", working: "types", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Three valid.", working: "three", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Factual account; objective, structured.", working: "report", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Publication readers — general public interested in the topic.", working: "audience", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) letter types (b) factual/objective (c) publication readers",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Confusing report (factual) with article (engaging)."],
          },
        },
        {
          id: "cie-ol-el-app-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which register suits a letter to the school principal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Informal" },
              { id: "b", text: "Formal" },
              { id: "c", text: "Slang" },
              { id: "d", text: "Text-speak" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Official recipients require formal register." },
            ],
            steps: [
              { reasoning: "A principal is an official recipient.", working: "formal", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Formal",
            commonErrors: ["Choosing (b) — school staff are not friends."],
          },
        },
        {
          id: "cie-ol-el-app-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A report title must be under 15 words; a draft title has 18 words. By how many words does it exceed the limit? (b) If a report body must be between 100 and 150 words and the draft is 120 words, how many words are spare up to the maximum?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "words" },
              { label: "b", answer: 30, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word limits", statement: "Stay within stated limits." },
            ],
            steps: [
              { reasoning: "18 minus 15 equals 3 words over.", working: "18 - 15 = 3", marks: 1, markCode: "AO2" },
              { reasoning: "150 minus 120 equals 30 spare words.", working: "150 - 120 = 30", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3 words; (b) 30 words",
            commonErrors: ["Exceeding the title limit."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-grammar",
      title: "Grammar and punctuation review",
      skill: "Apply correct grammar and punctuation in writing.",
      lesson: {
        sections: [
          {
            heading: "Sentence types",
            body: "Simple (one clause), compound (two independent), complex (main+subordinate). Vary for effect.",
          },
          {
            heading: "Punctuation",
            body: "Full stop, comma, colon, semicolon, dash, quotation marks, apostrophe. Each has specific use.",
          },
          {
            heading: "Common errors",
            body: "Run-on sentences, comma splices, missing apostrophes, incorrect verb tense, subject-verb disagreement.",
          },
        ],
        keyFormulas: [
          { name: "Grammar", statement: "Sentence types: simple/compound/complex; punctuation rules; avoid common errors." },
        ],
        workedExample: {
          problem: "Fix: 'I like apples oranges and bananas.'",
          solution: "I like apples, oranges and bananas. — commas needed in list.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-gram-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a compound sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One clause only" },
              { id: "b", text: "Main + subordinate clause" },
              { id: "c", text: "Question only" },
              { id: "d", text: "Two independent clauses joined" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound sentence", statement: "Two independent clauses joined." },
            ],
            steps: [
              { reasoning: "Compound = two independent clauses.", working: "two clauses", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Two independent clauses joined",
            commonErrors: ["Choosing (c) — that's complex."],
          },
        },
        {
          id: "cie-ol-el-gram-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three punctuation marks and their uses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Punctuation", statement: "Full stop=end; comma=pause/list; colon=introduces." },
            ],
            steps: [
              { reasoning: "Any three with uses.", working: "punctuation", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Full stop (end), comma (pause/list), colon (introduces), semicolon (link), apostrophe (possessive).",
            commonErrors: ["Marks without uses."],
          },
        },
        {
          id: "cie-ol-el-gram-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the importance of varied sentence structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence variety", statement: "Varied structure creates rhythm, emphasis, readability." },
            ],
            steps: [
              { reasoning: "Short sentences: punchy, dramatic effect.", working: "short", marks: 1, markCode: "AO2" },
              { reasoning: "Long sentences: flowing, complex ideas.", working: "long", marks: 1, markCode: "AO2" },
              { reasoning: "Variety prevents monotony — engages reader.", working: "variety", marks: 1, markCode: "AO2" },
              { reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Varied sentences create rhythm and emphasis — prevents monotony, engages reader.",
            commonErrors: ["All same length — boring and unclear emphasis."],
          },
        },
        {
          id: "cie-ol-el-gram-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review grammar and punctuation.",
          parts: [
            { label: "a", prompt: "Name sentence types.", marks: 2 },
            { label: "b", prompt: "List punctuation marks.", marks: 3 },
            { label: "c", prompt: "Explain apostrophe uses.", marks: 2 },
            { label: "d", prompt: "Name common errors.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar", statement: "Sentence types, punctuation, apostrophes, common errors." },
            ],
            steps: [
              { part: "a", reasoning: "Simple, compound, complex.", working: "types", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All three.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Full stop, comma, colon, semicolon, dash, quotes, apostrophe.", working: "marks", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Contraction (don't), possession (John's).", working: "apostrophe", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Both uses.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Run-ons, comma splices, missing apostrophes, tense errors, subject-verb disagreement.", working: "errors", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) simple/compound/complex (b) punctuation marks (c) contraction/possession (d) common errors",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three types.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple marks.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Both uses.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple errors.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Apostrophe for plural — only for possession/contraction."],
          },
        },
        {
          id: "cie-ol-el-gram-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a simple sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two independent clauses" },
              { id: "b", text: "A question" },
              { id: "c", text: "An incomplete sentence" },
              { id: "d", text: "One independent clause" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simple sentence", statement: "One independent clause." },
            ],
            steps: [
              { reasoning: "Simple = one clause.", working: "one clause", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** One independent clause",
            commonErrors: ["Choosing (b) — that's compound."],
          },
        },
        {
          id: "cie-ol-el-gram-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph has 6 sentences: 2 simple, 3 compound and 1 complex. (a) How many sentences are there in total? (b) How many are compound sentences?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence counting", statement: "Count sentence types carefully." },
            ],
            steps: [
              { reasoning: "2 plus 3 plus 1 equals 6 sentences.", working: "2 + 3 + 1 = 6", marks: 1, markCode: "AO2" },
              { reasoning: "3 sentences are compound.", working: "3 compound", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 6; (b) 3",
            commonErrors: ["Miscounting sentence types."],
          },
        },
        {
          id: "cie-ol-el-gram-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation mark ends a question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Full stop" },
              { id: "b", text: "Comma" },
              { id: "c", text: "Question mark" },
              { id: "d", text: "Colon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question mark", statement: "Ends a question." },
            ],
            steps: [
              { reasoning: "Questions end with '?'.", working: "?", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Question mark",
            commonErrors: ["Using a full stop — loses the question signal."],
          },
        },
        {
          id: "cie-ol-el-gram-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two common punctuation errors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Punctuation errors", statement: "Run-ons, comma splices, missing apostrophes, wrong marks." },
            ],
            steps: [
              { reasoning: "Any two valid — e.g. comma splice, missing apostrophe.", working: "errors", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Run-ons, comma splices, missing apostrophes, wrong marks (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-gram-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A text contains 4 run-on sentences and 2 comma splices. (a) How many sentence-boundary errors are there in total? (b) How many are run-ons? (c) How many are comma splices?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 4 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error counting", statement: "Count each error type separately then total." },
            ],
            steps: [
              { reasoning: "4 plus 2 equals 6 boundary errors.", working: "4 + 2 = 6", marks: 1, markCode: "AO2" },
              { reasoning: "4 run-ons are given.", working: "4 run-ons", marks: 1, markCode: "AO2" },
              { reasoning: "2 comma splices are given.", working: "2 splices", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 6; (b) 4; (c) 2",
            commonErrors: ["Missing that both are sentence-boundary errors."],
          },
        },
        {
          id: "cie-ol-el-gram-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is a comma splice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I came and I saw." },
              { id: "b", text: "I came. I saw." },
              { id: "c", text: "I came, I saw." },
              { id: "d", text: "I came; I saw." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Comma splice", statement: "Two independent clauses joined by a comma only." },
            ],
            steps: [
              { reasoning: "(a) joins two clauses with just a comma.", working: "comma only", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** I came, I saw.",
            commonErrors: ["Choosing (b) — 'and' makes it compound, which is correct."],
          },
        },
        {
          id: "cie-ol-el-gram-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why varied sentence structure improves writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence variety", statement: "Varied length creates rhythm, emphasis and interest." },
            ],
            steps: [
              { reasoning: "Short sentences are punchy and dramatic.", working: "short", marks: 1, markCode: "AO2" },
              { reasoning: "Long sentences allow complex, flowing ideas.", working: "long", marks: 1, markCode: "AO2" },
              { reasoning: "Variety prevents monotony and keeps the reader engaged.", working: "variety", marks: 1, markCode: "AO2" },
              { reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Varied sentences create rhythm and emphasis — prevents monotony, engages the reader.",
            commonErrors: ["All sentences the same length — boring and flat."],
          },
        },
        {
          id: "cie-ol-el-gram-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence shows correct use of the apostrophe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The teacher desk" },
              { id: "b", text: "The teacher's desk" },
              { id: "c", text: "The teachers desk" },
              { id: "d", text: "The teachers's desk" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Apostrophe possession", statement: "Singular possession adds 's." },
            ],
            steps: [
              { reasoning: "Singular 'teacher' + 's shows possession.", working: "teacher's", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The teacher's desk",
            commonErrors: ["Choosing (c) — missing apostrophe for singular possession."],
          },
        },
        {
          id: "cie-ol-el-gram-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 200-word essay has 12 sentences needing commas in lists; the student adds commas to 9 of them. (a) How many sentences still need commas? (b) If the essay has 8 run-on sentences and the student fixes 5, how many remain?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error correction counting", statement: "Subtract fixed from total errors." },
            ],
            steps: [
              { reasoning: "12 minus 9 equals 3 sentences still needing commas.", working: "12 - 9 = 3", marks: 1, markCode: "AO2" },
              { reasoning: "8 minus 5 equals 3 run-ons remaining.", working: "8 - 5 = 3", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 3; (b) 3",
            commonErrors: ["Miscounting remaining errors — subtract carefully."],
          },
        },
        {
          id: "cie-ol-el-gram-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Review grammar and punctuation.",
          parts: [
            { label: "a", prompt: "Name the three sentence types.", marks: 2 },
            { label: "b", prompt: "Give two uses of punctuation marks.", marks: 2 },
            { label: "c", prompt: "Name two common grammar errors.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar review", statement: "Sentence types, punctuation, common errors." },
            ],
            steps: [
              { part: "a", reasoning: "Simple, compound, complex — all three.", working: "types", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "All named.", working: "all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Full stop ends sentences; comma separates/pause.", working: "uses", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Run-ons, comma splices, fragments, tense errors — any two.", working: "errors", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) simple/compound/complex (b) two uses (c) two errors",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three types.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
            ],
            commonErrors: ["Confusing compound and complex sentences."],
          },
        },
        {
          id: "cie-ol-el-gram-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is grammatically correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She not know." },
              { id: "b", text: "She doesn't know." },
              { id: "c", text: "She don't know." },
              { id: "d", text: "She knowing." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject-verb agreement", statement: "Correct verb form for the subject." },
            ],
            steps: [
              { reasoning: "'She doesn't know' is correct standard English.", working: "doesn't", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** She doesn't know.",
            commonErrors: ["Choosing (a) — 'don't' doesn't agree with 'she'."],
          },
        },
        {
          id: "cie-ol-el-gram-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A paragraph of 9 sentences contains 3 fragments. How many sentences are complete? (b) An essay has 5 errors; the student fixes 2 of them. How many errors remain?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error analysis", statement: "Fragments are incomplete; subtract fixed errors." },
            ],
            steps: [
              { reasoning: "9 minus 3 equals 6 complete sentences.", working: "9 - 3 = 6", marks: 1, markCode: "AO2" },
              { reasoning: "5 minus 2 equals 3 errors remaining.", working: "5 - 2 = 3", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 6; (b) 3",
            commonErrors: ["Counting fragments as complete sentences."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-exam",
      title: "Exam skills for O Level English",
      skill: "Apply exam techniques for reading and writing papers.",
      lesson: {
        sections: [
          {
            heading: "Reading paper",
            body: "Time management: skim all questions first, allocate time per marks, answer easier first, review at end.",
          },
          {
            heading: "Writing paper",
            body: "Plan before writing — brainstorm ideas, structure, then write. Check word count, proofread for errors.",
          },
          {
            heading: "Common mistakes",
            body: "Not answering question set, ignoring word limits, poor paragraphing, grammar errors, not checking work.",
          },
        ],
        keyFormulas: [
          { name: "Exam skills", statement: "Time management, planning, proofreading — essential for success." },
        ],
        workedExample: {
          problem: "How much time for each section?",
          solution: "Calculate: total time ÷ total marks × marks per section. Allocate proportionally, leave review time.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-exam-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do first in a reading exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start writing immediately" },
              { id: "b", text: "Guess answers" },
              { id: "c", text: "Skip reading" },
              { id: "d", text: "Read all questions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exam strategy", statement: "Read questions first — plan approach." },
            ],
            steps: [
              { reasoning: "Read all questions first.", working: "read", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Read all questions",
            commonErrors: ["Starting immediately — no plan."],
          },
        },
        {
          id: "cie-ol-el-exam-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two writing exam techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Writing techniques", statement: "Plan, brainstorm, structure, proofread." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Plan, brainstorm, structure, proofread (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-exam-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to manage time in exams?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Allocate by marks, easy first, review at end." },
            ],
            steps: [
              { reasoning: "Calculate time per mark — allocate proportionally.", working: "allocate", marks: 1, markCode: "AO2" },
              { reasoning: "Answer easier questions first for confidence.", working: "easy first", marks: 1, markCode: "AO2" },
              { reasoning: "Leave time for review and checking.", working: "review", marks: 1, markCode: "AO2" },
              { reasoning: "Strategy clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Allocate by marks, answer easy first, leave review time.",
            commonErrors: ["No time plan — runs out."],
          },
        },
        {
          id: "cie-ol-el-exam-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prepare for O Level English exam.",
          parts: [
            { label: "a", prompt: "How to approach reading paper?", marks: 2 },
            { label: "b", prompt: "How to approach writing paper?", marks: 3 },
            { label: "c", prompt: "What are common mistakes?", marks: 2 },
            { label: "d", prompt: "How to check work?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam prep", statement: "Reading: read questions first; writing: plan+proofread; check work." },
            ],
            steps: [
              { part: "a", reasoning: "Read all questions, allocate time, answer with evidence.", working: "reading", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Plan, brainstorm, structure, write, check word count, proofread.", working: "writing", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Wrong question set, word limits, poor paragraphing, grammar errors.", working: "mistakes", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check units/format, complete all questions, proofread for errors.", working: "check", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) read/plan (b) plan/write/proofread (c) common mistakes (d) check units/all questions",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete process.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple mistakes.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["No proofreading — grammar errors remain."],
          },
        },
        {
          id: "cie-ol-el-exam-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do FIRST when you receive a writing task in the exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proofread" },
              { id: "b", text: "Write the final version" },
              { id: "c", text: "Plan your answer" },
              { id: "d", text: "Count the words" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Writing strategy", statement: "Plan before writing." },
            ],
            steps: [
              { reasoning: "Planning comes first — brainstorm and structure.", working: "plan", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Plan your answer",
            commonErrors: ["Starting to write immediately — loses structure."],
          },
        },
        {
          id: "cie-ol-el-exam-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "An exam lasts 90 minutes and is worth 45 marks. (a) How many minutes are available per mark? (b) How much time should a 10-mark question take?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "minutes" },
              { label: "b", answer: 20, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time allocation", statement: "Divide total time by total marks." },
            ],
            steps: [
              { reasoning: "90 divided by 45 equals 2 minutes per mark.", working: "90 / 45 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "10 marks times 2 minutes equals 20 minutes.", working: "10 x 2 = 20", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2 minutes per mark; (b) 20 minutes",
            commonErrors: ["Dividing marks by time instead of time by marks."],
          },
        },
        {
          id: "cie-ol-el-exam-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is it a good strategy to answer easier questions first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only saves time" },
              { id: "b", text: "There is no reason" },
              { id: "c", text: "Hard questions do not count" },
              { id: "d", text: "It builds confidence and secures marks" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam strategy", statement: "Easy questions first — secure marks early." },
            ],
            steps: [
              { reasoning: "Easy questions guarantee marks and build confidence.", working: "confidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** It builds confidence and secures marks",
            commonErrors: ["Choosing (b) — all questions count."],
          },
        },
        {
          id: "cie-ol-el-exam-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two things to check when proofreading your work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading", statement: "Check spelling, grammar, punctuation, word limits." },
            ],
            steps: [
              { reasoning: "Any two valid — spelling, grammar, punctuation, word count.", working: "checks", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Spelling, grammar, punctuation, word limits, completeness (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-exam-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 2-hour exam has three sections: Paper 1 worth 60 marks, Paper 2 worth 40 marks and a planning period of no marks. (a) What is the total number of marks? (b) If time is split in proportion to marks, how many minutes does Paper 1 get? (c) How many minutes does Paper 2 get?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100 },
              { label: "b", answer: 72, unit: "minutes" },
              { label: "c", answer: 48, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proportional time allocation", statement: "Time per section proportional to marks." },
            ],
            steps: [
              { reasoning: "60 plus 40 equals 100 marks.", working: "60 + 40 = 100", marks: 1, markCode: "AO2" },
              { reasoning: "60 percent of 120 minutes equals 72 minutes.", working: "0.6 x 120 = 72", marks: 1, markCode: "AO2" },
              { reasoning: "40 percent of 120 minutes equals 48 minutes.", working: "0.4 x 120 = 48", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 100 marks; (b) 72 minutes; (c) 48 minutes",
            commonErrors: ["Splitting time equally instead of proportionally."],
          },
        },
        {
          id: "cie-ol-el-exam-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the best use of the last 5 minutes of an exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guess randomly" },
              { id: "b", text: "Stop working" },
              { id: "c", text: "Review and proofread your answers" },
              { id: "d", text: "Start a brand new answer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Review time", statement: "Leave time to check and correct work." },
            ],
            steps: [
              { reasoning: "Review time catches errors and improves marks.", working: "review", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Review and proofread your answers",
            commonErrors: ["Starting new work — leaves it unfinished."],
          },
        },
        {
          id: "cie-ol-el-exam-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to allocate time effectively in an exam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Allocate by marks, easy first, review buffer." },
            ],
            steps: [
              { reasoning: "Calculate minutes per mark and allocate proportionally.", working: "allocate", marks: 1, markCode: "AO2" },
              { reasoning: "Answer easier questions first to secure marks.", working: "easy first", marks: 1, markCode: "AO2" },
              { reasoning: "Leave buffer time for review at the end.", working: "buffer", marks: 1, markCode: "AO2" },
              { reasoning: "Strategy clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Allocate by marks, answer easy first, leave review time.",
            commonErrors: ["No time plan — running out of time."],
          },
        },
        {
          id: "cie-ol-el-exam-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a common exam mistake?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignoring the word limit" },
              { id: "b", text: "Planning first" },
              { id: "c", text: "Reading the questions" },
              { id: "d", text: "Checking work" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exam mistakes", statement: "Word limits and question sets must be followed." },
            ],
            steps: [
              { reasoning: "Exceeding word limits loses marks.", working: "word limit", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Ignoring the word limit",
            commonErrors: ["Choosing (d) — checking work is good practice."],
          },
        },
        {
          id: "cie-ol-el-exam-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 120-minute exam has 60 marks. (a) How many minutes are available per mark? (b) How much time should a 15-mark question take?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "minutes" },
              { label: "b", answer: 30, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time per mark", statement: "Total time divided by total marks." },
            ],
            steps: [
              { reasoning: "120 divided by 60 equals 2 minutes per mark.", working: "120 / 60 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "15 marks times 2 minutes equals 30 minutes.", working: "15 x 2 = 30", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2 minutes per mark; (b) 30 minutes",
            commonErrors: ["Forgetting to multiply by question marks."],
          },
        },
        {
          id: "cie-ol-el-exam-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Prepare for the O Level English exam.",
          parts: [
            { label: "a", prompt: "Describe your approach to the reading paper.", marks: 2 },
            { label: "b", prompt: "Describe your approach to the writing paper.", marks: 2 },
            { label: "c", prompt: "How will you review your work?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam preparation", statement: "Reading, writing, review strategies." },
            ],
            steps: [
              { part: "a", reasoning: "Read all questions first, allocate time, answer with evidence.", working: "reading", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Plan, brainstorm, structure, write, check word count.", working: "writing", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete process.", working: "complete", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Check all questions answered, proofread for errors, verify word limits.", working: "review", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) read/plan (b) plan/write/check (c) review/proofread",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Complete.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["No review time — errors remain unchecked."],
          },
        },
        {
          id: "cie-ol-el-exam-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is planning before writing important in the exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It improves structure and organisation" },
              { id: "b", text: "It reduces your marks" },
              { id: "c", text: "It wastes time" },
              { id: "d", text: "It is a required format" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "Planning gives structure and better answers." },
            ],
            steps: [
              { reasoning: "Planning produces organised, coherent writing.", working: "structure", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** It improves structure and organisation",
            commonErrors: ["Skipping planning — answers become disorganised."],
          },
        },
        {
          id: "cie-ol-el-exam-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In a 60-minute exam, a student plans to spend 50 minutes on a section worth 20 of the 40 total marks. The fair share is 30 minutes — by how many minutes did they overspend? (b) If the exam is 60 minutes and 10% should be left for review, how many review minutes are needed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "minutes" },
              { label: "b", answer: 6, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time checking", statement: "Compare actual vs fair share; reserve review time." },
            ],
            steps: [
              { reasoning: "50 minus 30 equals 20 minutes overspent.", working: "50 - 30 = 20", marks: 1, markCode: "AO2" },
              { reasoning: "10% of 60 equals 6 review minutes.", working: "0.1 x 60 = 6", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 20 minutes; (b) 6 minutes",
            commonErrors: ["Not comparing time to marks proportionally."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-app-notes",
      title: "Applications and exam skills — revision notes",
      summary: "Writing formats, grammar, exam techniques.",
      sections: [
        {
          heading: "Applications",
          body: "Letters (formal/informal), reports (factual), articles (engaging), proposals (plans). Grammar: sentence types, punctuation. Exam: time management, planning, proofreading.",
        },
      ],
    },
  ],
};
