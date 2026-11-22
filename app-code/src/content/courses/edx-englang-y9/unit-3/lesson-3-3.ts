import type { Lesson, TextExtract } from "../../../types.ts";

const DRAFT_TEXT: TextExtract = {
  title: "A Draft Letter to be Proofread",
  author: "Written for Akademik Space",
  source: "Original student draft containing deliberate errors",
  text: "Dear Mr Hargreaves\n\nI am writing to complain about the state of the changing rooms at the leisure centre. Last saturday me and my brother visited the centre for a swimming lesson, but we was shocked by what we found. The floor was covered in water, there were no towels and the lockers was broken.\n\nIt's not acceptable for a public facility to be in such a state. Their are many families who use the centre every week and they deserve better. Furthermore the staff were unhelpful, when I asked for a mop, a member of staff just shrugged.\n\nI would be grateful if you could look into this matter, and let me know what action you will take. I look forward to hearing from you.\n\nYours sincerely\nPriya Nair",
};

const REGISTER_TEXT: TextExtract = {
  title: "Two Versions of the Same Message",
  author: "Written for Akademik Space",
  source: "Original examples of informal and formal register",
  text: "Version 1: Hey, so the match got called off cos it was chucking it down. Gutted, honestly. Loads of us had been training for weeks.\n\nVersion 2: Unfortunately, the fixture was cancelled owing to heavy rainfall. This was disappointing for the whole squad, who had trained intensively for several weeks.",
};

export const lesson33: Lesson = {
  id: "el9-u3-lesson-3-3",
  code: "3-3",
  title: "Vocabulary, Register and Editing",
  goal: "I CAN choose ambitious vocabulary and an appropriate register, and proofread and edit my own writing for accuracy.",
  standards: ["KS3 Writing", "AO4", "AO5"],
  vocabulary: [
    { term: "Register", definition: "The level of formality of language, chosen to suit audience and purpose." },
    { term: "Formal", definition: "Careful, polite language used for official or professional audiences." },
    { term: "Colloquial", definition: "Informal, conversational language such as slang and contractions." },
    { term: "Synonym", definition: "A word with a similar meaning to another word." },
    { term: "Proofreading", definition: "Checking a piece of writing for errors in spelling, punctuation and grammar." },
    { term: "Subject-verb agreement", definition: "The verb must match its subject in number: 'the lockers were', not 'the lockers was'." },
    { term: "Comma splice", definition: "An error where two complete sentences are joined with only a comma." },
  ],
  concepts: [
    {
      id: "el9-u3-vocabulary-register",
      title: "Ambitious vocabulary and register",
      skill: "Select precise, ambitious vocabulary and match your register to audience and purpose.",
      lesson: {
        sections: [
          {
            heading: "Precise, not just long",
            body: "Ambitious vocabulary does not mean the longest word. It means the most **precise** one. 'Said' becomes 'murmured', 'snapped' or 'declared' depending on the feeling. 'Big' becomes 'vast', 'bulky' or 'towering'. Always check the connotation: 'thrifty' is positive, 'stingy' negative, though both mean careful with money. Use a thesaurus as a prompt, but only use words you understand.",
          },
          {
            heading: "Matching register to audience",
            body: "**Register** is the level of formality. A formal letter or report uses full forms ('did not'), impersonal phrasing and precise words ('cancelled owing to heavy rainfall'). Informal writing uses contractions and slang ('called off cos it was chucking it down'). Choose consciously: a message to a headteacher needs formal register; a diary or a character's speech may need informal. Never mix registers by accident.",
          },
        ],
        keyFormulas: [
          { name: "Precision", statement: "Choose the word whose meaning and connotation fit exactly." },
          { name: "Formal register", statement: "Full forms, no slang, impersonal and polite phrasing." },
          { name: "Informal register", statement: "Contractions, slang, conversational tone." },
        ],
        workedExample: {
          problem: "Rewrite 'The teacher was really cross and shouted at everyone' using more precise vocabulary.",
          solution: "'The teacher was furious and bellowed at the class.' The adjective 'furious' replaces 'really cross' with a single, stronger word, and 'bellowed' is a precise verb that conveys loudness and anger. 'The class' is more concise than 'everyone'.",
        },
      },
      questions: [
        {
          id: "el9-u3-vocabulary-register-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REGISTER_TEXT,
          stem: "Which phrase from Version 1 is an example of informal language (slang)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "training for weeks" },
              { id: "b", text: "honestly" },
              { id: "c", text: "the match" },
              { id: "d", text: "chucking it down" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Register", statement: "Slang and idioms mark an informal register." }],
            steps: [{ reasoning: "'Chucking it down' is a colloquial idiom for heavy rain, replaced in Version 2 by 'heavy rainfall'.", evidence: "chucking it down", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(d)** 'Chucking it down' is slang; the formal equivalent is 'heavy rainfall'.",
            commonErrors: ["Choosing (d) because 'honestly' is chatty, though it is not slang."],
          },
        },
        {
          id: "el9-u3-vocabulary-register-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this sentence in a formal register for a letter to a headteacher: 'The school trip got cancelled which is really rubbish because loads of us were looking forward to it.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal register", statement: "No slang, full forms, polite and precise." },
              { kind: "skill", name: "Precise vocabulary", statement: "Choose formal equivalents of colloquial words." },
            ],
            steps: [
              { reasoning: "Replace 'got cancelled' with 'was cancelled'.", evidence: "was cancelled", marks: 1, markCode: "AO5" },
              { reasoning: "Replace 'really rubbish' with a formal evaluation such as 'extremely disappointing'.", evidence: "extremely disappointing", marks: 1, markCode: "AO4" },
              { reasoning: "Replace 'loads of us' with 'many students' and keep the sentence controlled.", evidence: "many students", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The school trip was cancelled, which is extremely disappointing, as many students had been looking forward to it.",
            commonErrors: ["Keeping slang such as 'rubbish'.", "Making it long without making it formal."],
          },
        },
        {
          id: "el9-u3-vocabulary-register-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a paragraph (about 100 words) describing a crowded market for a travel magazine. Use at least five precise or ambitious words, and keep a consistent register.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Precise vocabulary", statement: "Choose words for exact meaning and connotation." },
              { kind: "convention", name: "Consistent register", statement: "Maintain one level of formality throughout." },
            ],
            steps: [
              { reasoning: "Precise, ambitious vocabulary used accurately and purposefully.", marks: 3, markCode: "AO4" },
              { reasoning: "Consistent register appropriate to a travel magazine, engaging yet polished.", marks: 2, markCode: "AO4" },
              { reasoning: "Accurate spelling, punctuation and varied sentences.", marks: 3, markCode: "AO5" },
            ],
            levels: [
              { level: "Level 4", marks: "7-8", descriptor: "Precise, ambitious vocabulary used with control; consistent register; accurate and varied sentences." },
              { level: "Level 3", marks: "5-6", descriptor: "Some ambitious vocabulary used effectively; mostly consistent register and accurate." },
              { level: "Level 2", marks: "3-4", descriptor: "Some attempt at ambitious words, not always precise; errors present." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple vocabulary; register inconsistent; frequent errors." },
            ],
            finalAnswer: "A strong response might use words such as 'bustling', 'cacophony', 'aromatic', 'jostled' and 'kaleidoscope' accurately, keeping an engaging yet polished register throughout.",
            commonErrors: ["Using words incorrectly to sound impressive.", "Mixing slang with formal terms.", "Overloading sentences with adjectives."],
          },
        },
        {
          id: "el9-u3-vocabulary-register-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: REGISTER_TEXT,
          stem: "Use the two versions to answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two features of Version 1 that make it informal.", marks: 2 },
            { label: "b", prompt: "Explain how the vocabulary in Version 2 makes it more formal. Use two examples.", marks: 4 },
            { label: "c", prompt: "Rewrite Version 1 as a formal report to a headteacher (about 100 words), using ambitious, precise vocabulary and a consistent register.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Informal: contractions, slang, chatty tone. Formal: full forms, precise vocabulary." },
              { kind: "skill", name: "Precise vocabulary", statement: "Select exact, ambitious words." },
              { kind: "skill", name: "Technical accuracy", statement: "AO5 accuracy and sentence variety." },
            ],
            steps: [
              { part: "a", reasoning: "Slang or colloquial phrases such as 'cos' and 'chucking it down'.", evidence: "cos it was chucking it down", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "A conversational, emotive tone: 'Gutted, honestly' with minor sentences.", evidence: "Gutted, honestly.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Fixture' is a more precise noun than 'match'.", evidence: "the fixture was cancelled", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "'Owing to heavy rainfall' and 'trained intensively' replace colloquial phrases with precise, formal words.", evidence: "owing to heavy rainfall", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Appropriate formal register, sustained throughout.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Precise and ambitious vocabulary used accurately.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Clear organisation of content for a report with an appropriate opening and closing.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Accurate punctuation and spelling with varied sentences.", marks: 3, markCode: "AO5" },
            ],
            levels: [
              { part: "c", level: "Level 5", marks: "11-12", descriptor: "Assured formal register with precise, sophisticated vocabulary and secure accuracy." },
              { part: "c", level: "Level 4", marks: "9-10", descriptor: "Convincing register and well-chosen vocabulary; accurate and varied." },
              { part: "c", level: "Level 3", marks: "6-8", descriptor: "Clear formal register with some ambitious vocabulary; mostly accurate." },
              { part: "c", level: "Level 2", marks: "3-5", descriptor: "Some formality; register may slip; errors present." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited; informal features remain; frequent errors." },
            ],
            finalAnswer: "(a) Slang ('cos', 'chucking it down') and a chatty, emotive tone. (b) 'Fixture' and 'owing to heavy rainfall' are precise, formal word choices. (c) A strong report states that the fixture was cancelled owing to adverse weather, notes the squad's disappointment after weeks of intensive training, and proposes rearranging the match.",
            commonErrors: ["Leaving slang in the rewrite.", "Using contractions in a formal report.", "Copying Version 2."],
          },
        },
      ],
    },
    {
      id: "el9-u3-proofreading-editing",
      title: "Proofreading and editing",
      skill: "Find and correct errors in spelling, punctuation and grammar, and improve the clarity and style of a draft.",
      lesson: {
        sections: [
          {
            heading: "Proofreading systematically",
            body: "Read your work slowly, ideally aloud, and check one type of error at a time. Common errors include: missing capital letters for days and names ('saturday'), subject-verb agreement ('the lockers was'), 'me and my brother' as a subject ('my brother and I'), homophones ('their' and 'there'), missing commas after introductory words ('Furthermore,'), and comma splices where a comma wrongly joins two sentences.",
          },
          {
            heading: "Editing for style",
            body: "Proofreading fixes errors; **editing** improves the writing. Cut repetition, replace vague words, vary sentence openings and combine short choppy sentences. Check that the register fits the audience and that each paragraph has a clear purpose. Always leave time at the end of an exam for a final read-through: it is one of the easiest ways to gain AO5 marks.",
          },
        ],
        keyFormulas: [
          { name: "Subject-verb agreement", statement: "The verb matches its subject: 'the lockers were broken'." },
          { name: "Comma splice", statement: "Fix with a full stop, a semicolon or a conjunction." },
          { name: "Homophones", statement: "Words that sound alike but differ in meaning: their, there, they're." },
        ],
        workedExample: {
          problem: "Correct this sentence: 'Last saturday me and my brother visited the centre, we was shocked.'",
          solution: "'Last Saturday, my brother and I visited the centre; we were shocked.' Corrections: capital letter for Saturday; comma after the introductory phrase; 'my brother and I' as the subject; the comma splice replaced by a semicolon; 'was' corrected to 'were' to agree with 'we'.",
        },
      },
      questions: [
        {
          id: "el9-u3-proofreading-editing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The lockers were broken and the floor was wet." },
              { id: "b", text: "The lockers were broken and the floor were wet." },
              { id: "c", text: "The lockers was broken and the floor were wet." },
              { id: "d", text: "The lockers was broken and the floor was wet." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Subject-verb agreement", statement: "Plural subjects take 'were'; singular subjects take 'was'." }],
            steps: [{ reasoning: "'Lockers' is plural so takes 'were'; 'floor' is singular so takes 'was'.", evidence: "The lockers were broken and the floor was wet.", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(a)** 'Lockers were' (plural) and 'floor was' (singular).",
            commonErrors: ["Choosing (c), treating both subjects as singular."],
          },
        },
        {
          id: "el9-u3-proofreading-editing-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT_TEXT,
          stem: "Find and correct three errors in the first paragraph of the draft letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading", statement: "Check capital letters, agreement and pronoun case." },
              { kind: "convention", name: "Standard English", statement: "Use 'my brother and I' as a subject and 'were' with plural subjects." },
            ],
            steps: [
              { reasoning: "'saturday' needs a capital letter: Saturday.", evidence: "Last saturday", marks: 1, markCode: "AO5" },
              { reasoning: "'me and my brother' should be 'my brother and I' as the subject of the verb.", evidence: "me and my brother", marks: 1, markCode: "AO5" },
              { reasoning: "'we was' and 'the lockers was' should be 'we were' and 'the lockers were'.", evidence: "we was shocked", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "Saturday (capital); my brother and I; we were shocked / the lockers were broken.",
            commonErrors: ["Correcting only spelling and missing grammar.", "Introducing new errors."],
          },
        },
        {
          id: "el9-u3-proofreading-editing-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: DRAFT_TEXT,
          stem: "Rewrite the second paragraph of the draft letter, correcting all errors and improving the clarity and formality of the style.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Editing", statement: "Correct errors and improve style." },
              { kind: "convention", name: "Formal register", statement: "Formal letters avoid contractions and informal phrasing." },
            ],
            steps: [
              { reasoning: "Correct 'It's not acceptable' to 'It is not acceptable' for formal register.", evidence: "It is not acceptable", marks: 1, markCode: "AO5" },
              { reasoning: "Correct 'Their are' to 'There are'.", evidence: "There are many families", marks: 1, markCode: "AO5" },
              { reasoning: "Add the comma after 'Furthermore' and fix the comma splice with a full stop or semicolon.", evidence: "Furthermore, the staff were unhelpful.", marks: 2, markCode: "AO5" },
              { reasoning: "Improve the final sentence for formality, for example 'a member of staff merely shrugged when I requested a mop'.", evidence: "when I requested a mop", marks: 2, markCode: "AO4" },
            ],
            levels: [
              { level: "Level 3", marks: "5-6", descriptor: "Most errors corrected accurately; style improved with a consistently formal register." },
              { level: "Level 2", marks: "3-4", descriptor: "Some errors corrected; some stylistic improvement." },
              { level: "Level 1", marks: "1-2", descriptor: "Few corrections; limited improvement." },
            ],
            finalAnswer: "It is not acceptable for a public facility to be in such a state. There are many families who use the centre every week, and they deserve better. Furthermore, the staff were unhelpful: when I requested a mop, a member of staff merely shrugged.",
            commonErrors: ["Leaving the contraction 'It's'.", "Missing the homophone error 'Their'.", "Leaving the comma splice."],
          },
        },
        {
          id: "el9-u3-proofreading-editing-q4",
          difficulty: "challenge",
          totalMarks: 24,
          extract: DRAFT_TEXT,
          stem: "Use the draft letter to answer the questions below.",
          parts: [
            { label: "a", prompt: "Identify two errors in the greeting and sign-off of the letter and explain how to correct them.", marks: 2 },
            { label: "b", prompt: "Explain what is wrong with the sentence 'Furthermore the staff were unhelpful, when I asked for a mop, a member of staff just shrugged.'", marks: 4 },
            { label: "c", prompt: "Rewrite the whole letter (about 150 words), correcting all errors and improving its vocabulary and formal register.", marks: 18 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal letter conventions", statement: "Punctuate 'Dear Mr Hargreaves,' and 'Yours sincerely,' and keep a formal tone." },
              { kind: "skill", name: "Proofreading and editing", statement: "Correct errors and improve style." },
              { kind: "skill", name: "Technical accuracy", statement: "AO5 accuracy and sentence variety." },
            ],
            steps: [
              { part: "a", reasoning: "A comma is conventionally placed after the greeting: 'Dear Mr Hargreaves,'.", evidence: "Dear Mr Hargreaves,", marks: 1, markCode: "AO5" },
              { part: "a", reasoning: "A comma is conventionally placed after the sign-off: 'Yours sincerely,'.", evidence: "Yours sincerely,", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "A comma is needed after 'Furthermore'.", evidence: "Furthermore,", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "The sentence is a comma splice: two complete clauses are joined by only a comma.", evidence: "unhelpful, when I asked", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "It can be fixed with a colon, semicolon or full stop.", evidence: "unhelpful: when I asked for a mop", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "'Just shrugged' is too informal; replace with 'merely shrugged'.", evidence: "merely shrugged", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "All errors corrected: capital letters, agreement, pronoun case, homophones and contractions.", marks: 6, markCode: "AO5" },
              { part: "c", reasoning: "Vocabulary upgraded precisely, for example 'deplorable' and 'inadequate'.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Consistent formal register and clear organisation of the complaint and request.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Varied sentence structures and secure punctuation including colons and semicolons.", marks: 4, markCode: "AO5" },
            ],
            levels: [
              { part: "c", level: "Level 5", marks: "16-18", descriptor: "Assured, fully accurate rewrite with sophisticated vocabulary and consistent formal register." },
              { part: "c", level: "Level 4", marks: "13-15", descriptor: "Accurate rewrite with well-chosen vocabulary and secure register." },
              { part: "c", level: "Level 3", marks: "9-12", descriptor: "Most errors corrected with some improved vocabulary; mostly formal." },
              { part: "c", level: "Level 2", marks: "5-8", descriptor: "Some errors corrected; limited improvement of style." },
              { part: "c", level: "Level 1", marks: "1-4", descriptor: "Few corrections; limited style." },
            ],
            finalAnswer: "(a) Add commas: 'Dear Mr Hargreaves,' and 'Yours sincerely,'. (b) The comma after 'Furthermore' is missing, and the comma splice joins two full sentences; use a colon or full stop and replace 'just' with 'merely'. (c) A top rewrite corrects every error and upgrades vocabulary, for example describing the changing rooms as 'in a deplorable condition' and requesting a response 'at your earliest convenience'.",
            commonErrors: ["Fixing spelling but leaving grammar errors.", "Introducing slang.", "Forgetting the sign-off punctuation."],
          },
        },
      ],
    },
  ],
};
