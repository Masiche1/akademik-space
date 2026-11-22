import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cie-ol-el-lesson-3-3",
  code: "3-3",
  title: "Grammar and punctuation for writing",
  goal: "I CAN apply accurate grammar and punctuation in all writing.",
  standards: ["1123 Writing: grammar"],
  vocabulary: [
    { term: "Clause", definition: "Part of sentence with subject and verb." },
    { term: "Phrase", definition: "Group of words without subject-verb pair." },
    { term: "Fragment", definition: "Incomplete sentence missing subject or verb." },
    { term: "Run-on", definition: "Two sentences joined without proper punctuation." },
    { term: "Comma splice", definition: "Two independent clauses joined by comma only." },
    { term: "Parallel structure", definition: "Consistent grammatical form in lists/series." },
  ],
  concepts: [
    {
      id: "cie-ol-el-u3-grammar",
      title: "Grammar accuracy",
      skill: "Use correct grammar — sentence types, clauses, punctuation.",
      lesson: {
        sections: [
          {
            heading: "Sentence types",
            body: "Simple (one clause), compound (two independent joined by conjunction/punctuation), complex (main+subordinate). Vary for effect.",
          },
          {
            heading: "Clauses and phrases",
            body: "Clause: has subject+verb. Phrase: no subject-verb pair. Fragments are incomplete — avoid in formal writing.",
          },
          {
            heading: "Common errors",
            body: "Run-ons (missing punctuation), comma splices (comma only), fragments, subject-verb disagreement, tense errors.",
          },
        ],
        keyFormulas: [
          { name: "Grammar", statement: "Clause=subject+verb; phrase=no subject-verb; avoid fragments/run-ons/comma splices." },
        ],
        workedExample: {
          problem: "Fix: 'I like apples oranges and bananas.'",
          solution: "I like apples, oranges and bananas. — commas needed in list.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-u3gram-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'clause'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete paragraph" },
              { id: "b", text: "Subject + verb" },
              { id: "c", text: "Punctuation mark" },
              { id: "d", text: "Group of words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clause", statement: "Has subject and verb." },
            ],
            steps: [
              { reasoning: "Clause = subject+verb.", working: "subject+verb", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Subject + verb",
            commonErrors: ["Choosing (b) — that's phrase."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two common sentence errors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Errors", statement: "Run-ons, comma splices, fragments, subject-verb disagreement." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "errors", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Run-ons, comma splices, fragments, subject-verb disagreement (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between run-on and comma splice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence errors", statement: "Run-on=no punctuation; comma splice=comma only." },
            ],
            steps: [
              { reasoning: "Run-on: two sentences joined with no punctuation.", working: "run-on", marks: 1, markCode: "AO2" },
              { reasoning: "Comma splice: two independent clauses joined by comma only.", working: "comma splice", marks: 1, markCode: "AO2" },
              { reasoning: "Both incorrect — need proper punctuation/conjunction.", working: "incorrect", marks: 1, markCode: "AO2" },
              { reasoning: "Difference clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Run-on=no punctuation; comma splice=comma only — both incorrect.",
            commonErrors: ["Confusing the two — key distinction."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply grammar and punctuation rules.",
          parts: [
            { label: "a", prompt: "Define clause and phrase.", marks: 2 },
            { label: "b", prompt: "Name sentence types.", marks: 2 },
            { label: "c", prompt: "Explain comma splice.", marks: 2 },
            { label: "d", prompt: "Name punctuation marks.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar", statement: "Clause/phrase, sentence types, punctuation." },
            ],
            steps: [
              { part: "a", reasoning: "Clause=subject+verb; phrase=no subject-verb.", working: "definitions", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Simple, compound, complex.", working: "types", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "All three.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Two independent clauses joined by comma only — incorrect.", working: "comma splice", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Full stop, comma, colon, semicolon, dash, quotes, apostrophe.", working: "marks", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) clause/phrase (b) sentence types (c) comma splice (d) punctuation marks",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Three types.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple marks.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Comma splice — comma alone can't join clauses."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses correct subject-verb agreement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The students writing essays" },
              { id: "b", text: "The students written essays" },
              { id: "c", text: "The students writes essays" },
              { id: "d", text: "The students write essays" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subject-verb agreement", statement: "Singular subject = singular verb; plural = plural." },
            ],
            steps: [
              { reasoning: "Plural subject needs plural verb.", working: "plural", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** The students write essays",
            commonErrors: ["Choosing (b) — singular verb with plural subject."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph has 8 sentences; 3 have subject-verb agreement errors. (a) How many sentences are there? (b) How many have errors?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar error counting", statement: "Count sentences and errors." },
            ],
            steps: [
              { reasoning: "8 sentences are given.", working: "8", marks: 1, markCode: "AO1" },
              { reasoning: "3 have errors.", working: "3 errors", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 8; (b) 3",
            commonErrors: ["Not counting errors correctly."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tense is used for completed actions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Past simple" },
              { id: "b", text: "Present perfect continuous" },
              { id: "c", text: "Present continuous" },
              { id: "d", text: "Future perfect" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Past simple", statement: "Completed actions in the past." },
            ],
            steps: [
              { reasoning: "Past simple = completed.", working: "past", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Past simple",
            commonErrors: ["Choosing (b) — that's ongoing."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two common grammar errors in student writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common errors", statement: "Subject-verb agreement, tense consistency, articles." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "errors", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Subject-verb agreement, tense consistency, articles, pronouns (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes 10 sentences; 4 have tense errors and 3 have agreement errors. (a) How many tense errors are there? (b) How many agreement errors are there? (c) How many sentences have errors in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
              { label: "c", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar error counting", statement: "Count each error type." },
            ],
            steps: [
              { reasoning: "4 tense errors are given.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "3 agreement errors are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "4 plus 3 equals 7 sentences with errors.", working: "4 + 3 = 7", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 3; (c) 7",
            commonErrors: ["Assuming errors overlap — count separately."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence has correct tense consistency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She walks to school and opened the door" },
              { id: "b", text: "She walked to school and opened the door" },
              { id: "c", text: "She walked to school and opens the door" },
              { id: "d", text: "She walk to school and opened the door" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tense consistency", statement: "Keep same tense throughout." },
            ],
            steps: [
              { reasoning: "(a) uses consistent past tense.", working: "past", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** She walked to school and opened the door",
            commonErrors: ["Mixing tenses inconsistently."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why grammar accuracy matters in exam writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar importance", statement: "Accuracy shows control; errors reduce marks." },
            ],
            steps: [
              { reasoning: "Grammar accuracy shows language control.", working: "control", marks: 1, markCode: "AO2" },
              { reasoning: "Errors can reduce marks and confuse meaning.", working: "marks", marks: 1, markCode: "AO2" },
              { reasoning: "Correct grammar makes writing clearer.", working: "clarity", marks: 1, markCode: "AO2" },
              { reasoning: "Importance explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Accuracy shows control, errors reduce marks, clarity.",
            commonErrors: ["Ignoring grammar — costs marks."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a correct use of an article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I saw the bird in a tree" },
              { id: "b", text: "I saw bird in the tree" },
              { id: "c", text: "I saw a bird in the tree" },
              { id: "d", text: "I saw bird in tree" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Articles", statement: "a/an for indefinite, the for definite." },
            ],
            steps: [
              { reasoning: "(a) uses articles correctly.", working: "articles", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** I saw a bird in the tree",
            commonErrors: ["Missing articles."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A paragraph has 12 sentences; 5 have grammar errors. How many are correct? (b) If a student writes 200 words and makes 1 error per 50 words, how many errors are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar checking", statement: "Count correct sentences; calculate error rate." },
            ],
            steps: [
              { reasoning: "12 minus 5 equals 7 correct sentences.", working: "12 - 5 = 7", marks: 1, markCode: "AO2" },
              { reasoning: "200 divided by 50 equals 4 errors.", working: "200 / 50 = 4", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 7; (b) 4",
            commonErrors: ["Not calculating error rate correctly."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply grammar skills.",
          parts: [
            { label: "a", prompt: "Explain subject-verb agreement.", marks: 2 },
            { label: "b", prompt: "Name two common errors.", marks: 2 },
            { label: "c", prompt: "Why is tense consistency important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar", statement: "Agreement, errors, tense." },
            ],
            steps: [
              { part: "a", reasoning: "Subject and verb must match in number.", working: "agreement", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Subject-verb agreement, tense consistency, articles — any two.", working: "errors", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Keeps timeline clear; avoids confusion.", working: "tense", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) match number (b) two errors (c) clear timeline",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Mixing tenses inconsistently."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pronoun should replace 'the students' in 'The students submitted their work'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It" },
              { id: "b", text: "They" },
              { id: "c", text: "She" },
              { id: "d", text: "He" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pronouns", statement: "Plural subject = they." },
            ],
            steps: [
              { reasoning: "Students = they.", working: "they", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** They",
            commonErrors: ["Choosing (b) — singular pronoun."],
          },
        },
        {
          id: "cie-ol-el-u3gram-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A paragraph has 15 sentences; 6 have errors. How many are correct? (b) If a student writes 300 words and makes 1 error per 60 words, how many errors are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 9 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Grammar checking", statement: "Count correct sentences; calculate error rate." },
            ],
            steps: [
              { reasoning: "15 minus 6 equals 9 correct sentences.", working: "15 - 6 = 9", marks: 1, markCode: "AO2" },
              { reasoning: "300 divided by 60 equals 5 errors.", working: "300 / 60 = 5", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 9; (b) 5",
            commonErrors: ["Not calculating error rate correctly."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-punctuation",
      title: "Punctuation mastery",
      skill: "Use punctuation correctly for clarity and effect.",
      lesson: {
        sections: [
          {
            heading: "Basic punctuation",
            body: "Full stop (end), comma (pause/list), question mark, exclamation mark. Each has specific use.",
          },
          {
            heading: "Advanced punctuation",
            body: "Colon (introduces list/explanation), semicolon (links related clauses), dash (interruption/emphasis), brackets (additional info).",
          },
          {
            heading: "Apostrophes",
            body: "Contraction (don't, it's) and possession (John's, students'). Not for plurals.",
          },
        ],
        keyFormulas: [
          { name: "Punctuation", statement: "Full stop=end; comma=pause/list; colon=introduces; semicolon=links; apostrophe=contraction/possession." },
        ],
        workedExample: {
          problem: "When to use semicolon vs colon?",
          solution: "Semicolon links related independent clauses; colon introduces list/explanation.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-punct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main use of a colon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduce list/explanation" },
              { id: "b", text: "Show possession" },
              { id: "c", text: "Pause briefly" },
              { id: "d", text: "End sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Colon", statement: "Introduces list or explanation." },
            ],
            steps: [
              { reasoning: "Colon = introduces.", working: "introduces", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Introduce list/explanation",
            commonErrors: ["Choosing (b) — that's full stop."],
          },
        },
        {
          id: "cie-ol-el-punct-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two uses of apostrophe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Apostrophe", statement: "Contraction (don't) and possession (John's)." },
            ],
            steps: [
              { reasoning: "Contraction and possession.", working: "uses", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Contraction (don't) and possession (John's).",
            commonErrors: ["Using for plurals — incorrect."],
          },
        },
        {
          id: "cie-ol-el-punct-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between semicolon and colon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation", statement: "Semicolon=links related clauses; colon=introduces list/explanation." },
            ],
            steps: [
              { reasoning: "Semicolon joins two related independent clauses.", working: "semicolon", marks: 1, markCode: "AO2" },
              { reasoning: "Colon introduces what follows — list or explanation.", working: "colon", marks: 1, markCode: "AO2" },
              { reasoning: "Different functions — not interchangeable.", working: "different", marks: 1, markCode: "AO2" },
              { reasoning: "Difference clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Semicolon=links clauses; colon=introduces list/explanation.",
            commonErrors: ["Using interchangeably — different functions."],
          },
        },
        {
          id: "cie-ol-el-punct-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply punctuation rules.",
          parts: [
            { label: "a", prompt: "Name basic punctuation marks.", marks: 2 },
            { label: "b", prompt: "Name advanced punctuation marks.", marks: 3 },
            { label: "c", prompt: "Explain apostrophe uses.", marks: 2 },
            { label: "d", prompt: "When to use dash?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation", statement: "Basic/advanced marks, apostrophes, dashes." },
            ],
            steps: [
              { part: "a", reasoning: "Full stop, comma, question mark, exclamation mark.", working: "basic", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Colon, semicolon, dash, brackets, quotation marks.", working: "advanced", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Contraction (don't) and possession (John's).", working: "apostrophe", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Both uses.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Interruption, emphasis, additional information.", working: "dash", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) basic marks (b) advanced marks (c) contraction/possession (d) interruption/emphasis",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Multiple marks.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple marks.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Both uses.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Apostrophe for plural — only contraction/possession."],
          },
        },
        {
          id: "cie-ol-el-punct-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation mark ends a question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colon" },
              { id: "b", text: "Comma" },
              { id: "c", text: "Question mark" },
              { id: "d", text: "Full stop" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Question mark", statement: "Ends questions." },
            ],
            steps: [
              { reasoning: "Question mark ends questions.", working: "?", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Question mark",
            commonErrors: ["Choosing (b) — full stop for statements."],
          },
        },
        {
          id: "cie-ol-el-punct-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph has 10 sentences; 3 are missing full stops. (a) How many sentences are there? (b) How many are missing punctuation?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation counting", statement: "Count sentences and punctuation errors." },
            ],
            steps: [
              { reasoning: "10 sentences are given.", working: "10", marks: 1, markCode: "AO1" },
              { reasoning: "3 are missing punctuation.", working: "3", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 10; (b) 3",
            commonErrors: ["Not counting punctuation errors."],
          },
        },
        {
          id: "cie-ol-el-punct-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which punctuation mark separates items in a list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Question mark" },
              { id: "b", text: "Apostrophe" },
              { id: "c", text: "Full stop" },
              { id: "d", text: "Comma" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Comma", statement: "Separates list items." },
            ],
            steps: [
              { reasoning: "Comma separates lists.", working: "comma", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Comma",
            commonErrors: ["Choosing (b) — full stop ends sentences."],
          },
        },
        {
          id: "cie-ol-el-punct-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two uses of the apostrophe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Apostrophe uses", statement: "Contractions and possession." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "uses", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Contractions, possession (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-punct-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes 15 sentences; 4 have comma errors and 2 have apostrophe errors. (a) How many comma errors are there? (b) How many apostrophe errors are there? (c) How many sentences have punctuation errors in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 2 },
              { label: "c", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation error counting", statement: "Count each error type." },
            ],
            steps: [
              { reasoning: "4 comma errors are given.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "2 apostrophe errors are given.", working: "2", marks: 1, markCode: "AO2" },
              { reasoning: "4 plus 2 equals 6 sentences with errors.", working: "4 + 2 = 6", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 2; (c) 6",
            commonErrors: ["Assuming errors overlap — count separately."],
          },
        },
        {
          id: "cie-ol-el-punct-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence uses correct punctuation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She bought apples oranges, and bananas" },
              { id: "b", text: "She bought apples oranges and bananas" },
              { id: "c", text: "She bought apples, oranges and bananas." },
              { id: "d", text: "She bought apples, oranges, and bananas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comma usage", statement: "Commas separate list items." },
            ],
            steps: [
              { reasoning: "(a) has correct commas in list.", working: "commas", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** She bought apples, oranges, and bananas",
            commonErrors: ["Missing commas in list."],
          },
        },
        {
          id: "cie-ol-el-punct-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why punctuation matters in exam writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation importance", statement: "Clarity, professionalism, marks." },
            ],
            steps: [
              { reasoning: "Punctuation makes meaning clear.", working: "clarity", marks: 1, markCode: "AO2" },
              { reasoning: "Correct punctuation shows professionalism.", working: "professional", marks: 1, markCode: "AO2" },
              { reasoning: "Errors can reduce marks.", working: "marks", marks: 1, markCode: "AO2" },
              { reasoning: "Importance explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Clarity + professionalism + marks.",
            commonErrors: ["Ignoring punctuation — costs marks."],
          },
        },
        {
          id: "cie-ol-el-punct-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which punctuation mark is used for direct speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comma" },
              { id: "b", text: "Colon" },
              { id: "c", text: "Quotation marks" },
              { id: "d", text: "Full stop" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quotation marks", statement: "Used for direct speech." },
            ],
            steps: [
              { reasoning: "Quotation marks = direct speech.", working: "quotes", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Quotation marks",
            commonErrors: ["Choosing (b) — full stop for statements."],
          },
        },
        {
          id: "cie-ol-el-punct-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A paragraph has 12 sentences; 3 have punctuation errors. How many are correct? (b) If a student writes 200 words and makes 1 punctuation error per 40 words, how many errors are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 9 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation checking", statement: "Count correct sentences; calculate error rate." },
            ],
            steps: [
              { reasoning: "12 minus 3 equals 9 correct sentences.", working: "12 - 3 = 9", marks: 1, markCode: "AO2" },
              { reasoning: "200 divided by 40 equals 5 errors.", working: "200 / 40 = 5", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 9; (b) 5",
            commonErrors: ["Not calculating error rate correctly."],
          },
        },
        {
          id: "cie-ol-el-punct-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply punctuation skills.",
          parts: [
            { label: "a", prompt: "Name three punctuation marks and their uses.", marks: 2 },
            { label: "b", prompt: "Explain apostrophe uses.", marks: 2 },
            { label: "c", prompt: "Why is punctuation important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation", statement: "Marks, apostrophe, importance." },
            ],
            steps: [
              { part: "a", reasoning: "Full stop, comma, question mark, colon — any three with uses.", working: "marks", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Three valid.", working: "three", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Contractions and possession.", working: "apostrophe", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Clarity, professionalism, marks.", working: "importance", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) three marks (b) contractions+possession (c) clarity+marks",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Missing punctuation — unclear meaning."],
          },
        },
        {
          id: "cie-ol-el-punct-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence uses correct apostrophe for possession?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The students book" },
              { id: "b", text: "The student's' book" },
              { id: "c", text: "The student's book" },
              { id: "d", text: "The students' book" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Possessive apostrophe", statement: "Singular: student's; plural: students'." },
            ],
            steps: [
              { reasoning: "(a) singular possessive correct.", working: "singular", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The student's book",
            commonErrors: ["Choosing (b) — plural possessive."],
          },
        },
        {
          id: "cie-ol-el-punct-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A paragraph has 8 sentences; 4 have punctuation errors. How many are correct? (b) If a student writes 240 words and makes 1 error per 30 words, how many errors are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Punctuation checking", statement: "Count correct sentences; calculate error rate." },
            ],
            steps: [
              { reasoning: "8 minus 4 equals 4 correct sentences.", working: "8 - 4 = 4", marks: 1, markCode: "AO2" },
              { reasoning: "240 divided by 30 equals 8 errors.", working: "240 / 30 = 8", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 8",
            commonErrors: ["Not calculating error rate correctly."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-vocabulary",
      title: "Vocabulary development",
      skill: "Expand and use vocabulary precisely in writing.",
      lesson: {
        sections: [
          {
            heading: "Word choice",
            body: "Precise vocabulary conveys meaning clearly — 'walked' vs 'strode', 'said' vs 'whispered/shouted'. Choose words deliberately.",
          },
          {
            heading: "Synonyms and connotation",
            body: "Synonyms have different connotations — 'slim' vs 'skinny', 'frugal' vs 'stingy'. Word choice affects tone.",
          },
          {
            heading: "Avoiding repetition",
            body: "Use varied vocabulary instead of repeating same words. But don't use complex words just to sound clever — clarity matters.",
          },
        ],
        keyFormulas: [
          { name: "Vocabulary", statement: "Precise words convey meaning; synonyms differ in connotation; vary vocabulary." },
        ],
        workedExample: {
          problem: "Improve: 'The man walked into the room and sat down.'",
          solution: "'The man strode into the room and sank into the chair.' — more precise, vivid.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-vocab-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'connotation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pronunciation" },
              { id: "b", text: "Word length" },
              { id: "c", text: "Spelling" },
              { id: "d", text: "Associated feelings/ideas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Connotation", statement: "Associated feelings or ideas beyond literal meaning." },
            ],
            steps: [
              { reasoning: "Connotation = associated meaning.", working: "associated", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Associated feelings/ideas",
            commonErrors: ["Choosing (b) — that's spelling."],
          },
        },
        {
          id: "cie-ol-el-vocab-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is precise vocabulary important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Precise vocabulary", statement: "Conveys meaning clearly — avoids ambiguity." },
            ],
            steps: [
              { reasoning: "Precise words convey exact meaning.", working: "precise", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Conveys exact meaning clearly — avoids ambiguity.",
            commonErrors: ["Using complex words — precision matters more."],
          },
        },
        {
          id: "cie-ol-el-vocab-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how synonyms differ in connotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Connotation", statement: "Synonyms have different associations — 'slim' vs 'skinny'." },
            ],
            steps: [
              { reasoning: "'Slim' has positive connotation; 'skinny' negative.", working: "slim/skinny", marks: 1, markCode: "AO2" },
              { reasoning: "'Frugal' positive; 'stingy' negative — same meaning, different feeling.", working: "frugal/stingy", marks: 1, markCode: "AO2" },
              { reasoning: "Word choice affects tone and reader perception.", working: "tone", marks: 1, markCode: "AO2" },
              { reasoning: "Connotation explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Synonyms differ in connotation — same meaning, different feeling/tone.",
            commonErrors: ["Thinking synonyms are interchangeable — connotation differs."],
          },
        },
        {
          id: "cie-ol-el-vocab-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply vocabulary skills.",
          parts: [
            { label: "a", prompt: "Define connotation.", marks: 1 },
            { label: "b", prompt: "Why precise vocabulary?", marks: 2 },
            { label: "c", prompt: "How synonyms differ?", marks: 3 },
            { label: "d", prompt: "How to avoid repetition?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary", statement: "Connotation, precision, synonym differences, variety." },
            ],
            steps: [
              { part: "a", reasoning: "Associated feelings/ideas beyond literal meaning.", working: "connotation", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Conveys exact meaning, avoids ambiguity.", working: "precision", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Same meaning, different connotations — positive/negative.", working: "synonyms", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Examples: slim/skinny, frugal/stingy.", working: "examples", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Use synonyms, vary sentence structure, but maintain clarity.", working: "variety", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple methods.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) associated meaning (b) precision (c) connotation differences (d) synonyms+variety",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Examples+explanation.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple methods.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Using complex words — precision and clarity matter more."],
          },
        },
        {
          id: "cie-ol-el-vocab-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'vocabulary' refer to in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The words you use" },
              { id: "b", text: "Paragraphing" },
              { id: "c", text: "Sentence structure" },
              { id: "d", text: "Punctuation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vocabulary", statement: "Words used in writing." },
            ],
            steps: [
              { reasoning: "Vocabulary = words used.", working: "words", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The words you use",
            commonErrors: ["Choosing (b) — that's grammar."],
          },
        },
        {
          id: "cie-ol-el-vocab-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph uses 20 words; 5 are repeated. (a) How many words are there? (b) How many are repeated?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary counting", statement: "Count words and repetitions." },
            ],
            steps: [
              { reasoning: "20 words are given.", working: "20", marks: 1, markCode: "AO1" },
              { reasoning: "5 are repeated.", working: "5", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 20; (b) 5",
            commonErrors: ["Not counting repetitions."],
          },
        },
        {
          id: "cie-ol-el-vocab-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is more formal than 'big'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Massive" },
              { id: "b", text: "Enormous" },
              { id: "c", text: "Substantial" },
              { id: "d", text: "Huge" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal vocabulary", statement: "Substantial is more formal." },
            ],
            steps: [
              { reasoning: "Substantial = formal.", working: "substantial", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Substantial",
            commonErrors: ["Choosing (c) — informal."],
          },
        },
        {
          id: "cie-ol-el-vocab-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two strategies for improving vocabulary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Vocabulary strategies", statement: "Read widely, use thesaurus, learn word families." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "strategies", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Read widely, use thesaurus, learn word families (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-vocab-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes 100 words; 10% are repeated words. (a) How many words are repeated? (b) How many unique words are there? (c) What percentage of words are unique?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 90 },
              { label: "c", answer: 90 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary analysis", statement: "Calculate repetitions and unique words." },
            ],
            steps: [
              { reasoning: "10% of 100 equals 10 repeated words.", working: "0.1 x 100 = 10", marks: 1, markCode: "AO2" },
              { reasoning: "100 minus 10 equals 90 unique words.", working: "100 - 10 = 90", marks: 1, markCode: "AO2" },
              { reasoning: "90% of words are unique.", working: "90%", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 10; (b) 90; (c) 90%",
            commonErrors: ["Not calculating percentages correctly."],
          },
        },
        {
          id: "cie-ol-el-vocab-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of 'emotive language'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Objective" },
              { id: "b", text: "Factual" },
              { id: "c", text: "Neutral" },
              { id: "d", text: "Devastating" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Emotive language", statement: "Words with emotional connotation." },
            ],
            steps: [
              { reasoning: "Devastating is emotive.", working: "emotive", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Devastating",
            commonErrors: ["Choosing (b) — that's neutral."],
          },
        },
        {
          id: "cie-ol-el-vocab-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how vocabulary choice affects tone in writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary and tone", statement: "Word choice creates register and mood." },
            ],
            steps: [
              { reasoning: "Formal words create formal tone.", working: "formal", marks: 1, markCode: "AO2" },
              { reasoning: "Emotive words create emotional tone.", working: "emotive", marks: 1, markCode: "AO2" },
              { reasoning: "Slang creates casual tone.", working: "slang", marks: 1, markCode: "AO2" },
              { reasoning: "Effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal→formal tone; emotive→emotional; slang→casual.",
            commonErrors: ["Not connecting word choice to tone."],
          },
        },
        {
          id: "cie-ol-el-vocab-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best synonym for 'important'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Big" },
              { id: "b", text: "Large" },
              { id: "c", text: "Significant" },
              { id: "d", text: "Huge" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synonyms", statement: "Significant = important." },
            ],
            steps: [
              { reasoning: "Significant is best synonym.", working: "significant", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Significant",
            commonErrors: ["Choosing (b) — informal."],
          },
        },
        {
          id: "cie-ol-el-vocab-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A student writes 150 words; 15% are repeated. How many words are repeated? (b) If they replace 10 repeated words with unique ones, how many unique words do they have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 22.5 },
              { label: "b", answer: 127.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary improvement", statement: "Calculate repetitions; track improvements." },
            ],
            steps: [
              { reasoning: "15% of 150 equals 22.5 words.", working: "0.15 x 150 = 22.5", marks: 1, markCode: "AO2" },
              { reasoning: "150 minus 22.5 equals 127.5 unique words.", working: "150 - 22.5 = 127.5", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 22.5; (b) 127.5",
            commonErrors: ["Not calculating percentages correctly."],
          },
        },
        {
          id: "cie-ol-el-vocab-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply vocabulary skills.",
          parts: [
            { label: "a", prompt: "Explain why vocabulary matters.", marks: 2 },
            { label: "b", prompt: "Name two strategies to improve vocabulary.", marks: 2 },
            { label: "c", prompt: "How does vocabulary affect tone?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary", statement: "Importance, strategies, tone." },
            ],
            steps: [
              { part: "a", reasoning: "Precise words convey meaning; varied words engage.", working: "importance", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Read widely, use thesaurus, learn word families — any two.", working: "strategies", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Formal→formal; emotive→emotional; slang→casual.", working: "tone", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) precise+varied (b) two strategies (c) word choice→tone",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Repetitive vocabulary — boring and imprecise."],
          },
        },
        {
          id: "cie-ol-el-vocab-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of 'formal' vocabulary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About" },
              { id: "b", text: "Around" },
              { id: "c", text: "Roughly" },
              { id: "d", text: "Approximately" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal vocabulary", statement: "Approximately is most formal." },
            ],
            steps: [
              { reasoning: "Approximately = formal.", working: "approximately", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Approximately",
            commonErrors: ["Choosing (b) — informal."],
          },
        },
        {
          id: "cie-ol-el-vocab-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A paragraph has 50 words; 5 are repeated. What percentage is repeated? (b) If the student replaces 3 repeated words with unique ones, how many unique words do they have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "%" },
              { label: "b", answer: 48 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary improvement", statement: "Calculate percentages; track unique words." },
            ],
            steps: [
              { reasoning: "5 divided by 50 equals 10%.", working: "5 / 50 = 10%", marks: 1, markCode: "AO2" },
              { reasoning: "50 minus 5 equals 45 unique words; plus 3 replaced equals 48.", working: "45 + 3 = 48", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 10%; (b) 48",
            commonErrors: ["Not calculating percentages correctly."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-u3-grammar-notes",
      title: "Grammar and vocabulary — revision notes",
      summary: "Sentence types, punctuation, vocabulary precision.",
      sections: [
        {
          heading: "Grammar",
          body: "Clause=subject+verb; phrase=no subject-verb. Sentence types: simple/compound/complex. Errors: run-ons, comma splices, fragments.",
        },
        {
          heading: "Punctuation/Vocabulary",
          body: "Punctuation: full stop, comma, colon, semicolon, apostrophe. Vocabulary: precise words, connotation, synonyms, variety.",
        },
      ],
    },
  ],
};
