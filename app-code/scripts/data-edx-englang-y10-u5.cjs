// Edexcel International GCSE English Language A (4EA1) - Unit 5
// Language Accuracy and Variation
// Run: node scripts/gen-lesson.cjs scripts/data-edx-englang-y10-u5.cjs src/content/courses/edx-englang-y10/unit-5

const bands = (top, part) => {
  const base = part ? { part } : {};
  const hi = "Perceptive, secure and well-developed answer with precise terminology and integrated evidence.";
  const mid = "Clear, relevant points with some development and supporting detail.";
  const lo = "Simple or partial points; limited development or relevance.";
  if (top <= 4) {
    return [
      { ...base, level: "Level 2", marks: `1-${top}`, descriptor: mid },
      { ...base, level: "Level 1", marks: "1-1", descriptor: lo },
    ];
  }
  return [
    { ...base, level: "Level 3", marks: `${top - 1}-${top}`, descriptor: hi },
    { ...base, level: "Level 2", marks: `3-${top - 2}`, descriptor: mid },
    { ...base, level: "Level 1", marks: "1-2", descriptor: lo },
  ];
};

const LETTER_FORMAL = {
  title: "Job application letter",
  author: "Student applicant",
  source: "Transactional writing extract",
  text: "Dear Ms Khan,\nI am writing to apply for the position of Library Assistant advertised in the Gazette. I have attached my CV and would be grateful for the opportunity to discuss my application at your convenience.\nYours faithfully,\nA. Rahman",
};

const TEXT_MSG = {
  title: "Text message to a friend",
  author: "Student",
  source: "Digital communication extract",
  text: "hi, sorry im running late 4 the interview, train is delayed. ill be there soon as i can, so sorry! a",
};

const PUNCT_AMBIGUOUS = {
  title: "Punctuation and meaning",
  author: "Language exercise",
  source: "Grammar extract",
  text: "Let's eat Grandma.\nLet's eat, Grandma.\nI saw the man with the telescope.\nI saw the man, with the telescope.",
};

const FLAWED = {
  title: "A student's draft paragraph",
  author: "Year 10 student",
  source: "Editing exercise",
  text: "The essay was wrote by me last week and it was very good. Me and my friend we went to the library and done some research. Their going to help me with the presentation. Its important to revise you're notes before hand.",
};

const WEAK_VOCAB = {
  title: "A student's descriptive paragraph",
  author: "Year 10 student",
  source: "Vocabulary exercise",
  text: "The old building was very big and it looked very old and scary. There were a lot of dark corridors and the rooms were very big and empty. It made me feel very scared and I wanted to get out very quickly.",
};

const SLANG_EXTRACT = {
  title: "Comments on a school podcast",
  author: "Student listeners",
  source: "Digital communication extract",
  text: "That episode was lowkey fire, the guest was so real. No cap, the ending gave me chills. We stan the new series, it is mid at worst.",
};

const UNCLEAR = {
  title: "An ambiguous instruction",
  author: "Language exercise",
  source: "Clarity exercise",
  text: "Students should hand in their essays to the teacher when they are finished so they can be marked.",
};

module.exports = [
  // ============================== UNIT 5, LESSON 1 ==============================
  {
    file: "lesson-5-1.ts",
    exportName: "lesson51",
    lesson: {
      id: "el10-u5-lesson-5-1",
      code: "5-1",
      title: "Standard English, Grammar and Punctuation",
      goal: "I CAN distinguish standard and non-standard English and apply accurate grammar and punctuation.",
      standards: ["4EA1 Paper 1", "4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO5"],
      vocabulary: [
        { term: "Standard English", definition: "The formally accepted variety of English used in education, media and formal writing." },
        { term: "Dialect", definition: "A regional or social variety of English with its own vocabulary and grammar." },
        { term: "Register", definition: "The level of formality appropriate to context; Standard English suits formal contexts." },
        { term: "Comma splice", definition: "Joining two complete sentences with only a comma, which is incorrect." },
        { term: "Apostrophe", definition: "Punctuation mark showing possession or contraction, as in 'it's' for 'it is'." },
        { term: "Sentence variety", definition: "Mixing simple, compound and complex sentences for effective writing." },
      ],
      concepts: [
        {
          id: "el10-u5-standard-english",
          title: "Standard and non-standard English",
          skill: "Distinguish standard and non-standard English and explain when each is appropriate.",
          sections: [
            {
              heading: "What is Standard English?",
              body: "**Standard English** is the formally accepted variety used in education, exams, media and formal writing. It has agreed grammar rules: 'I did it', not 'I done it'; 'we were', not 'we was'. It is not better than other varieties — it is the variety expected in formal contexts.",
            },
            {
              heading: "Dialect and non-standard forms",
              body: "**Dialects** are regional or social varieties with their own grammar and vocabulary ('we was going', 'I done it', 'ain't'). They are not wrong; they are appropriate in informal, familiar contexts. Non-standard forms become errors only when used in contexts expecting Standard English, such as exams and formal letters.",
            },
            {
              heading: "Context decides",
              body: "The same speaker might text 'im running late' to a friend but write 'I am running late' in a job application. The choice is **register**: informal for friends, formal for authority. Exam answers and transactional writing require Standard English to be judged accurate.",
            },
          ],
          keyFormulas: [
            { name: "Standard English", statement: "The formally accepted variety required in education and formal writing." },
            { name: "Dialect", statement: "A regional/social variety; appropriate informally, not in formal contexts." },
            { name: "Register", statement: "Formality level chosen to suit audience and purpose." },
          ],
          workedExample: {
            problem: "A student writes 'Me and my friend we was going to the park' in a formal essay. Identify the non-standard features and correct them.",
            solution: "Non-standard features: 'Me and my friend' should be 'My friend and I' (subject pronoun needed); 'we was' should be 'we were' (Standard English agreement). Corrected: 'My friend and I were going to the park.' In a text message to a friend, the original might be acceptable, but in an essay Standard English is required.",
          },
          questions: [
            {
              id: "el10-u5-standard-english-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which sentence uses Standard English?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "We was going to the park." },
                  { id: "b", text: "We were going to the park." },
                  { id: "c", text: "Us was going to the park." },
                  { id: "d", text: "We be going to the park." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Standard English", statement: "Formally accepted grammar required in formal contexts." }],
                steps: [{ reasoning: "'We were' is the standard past tense of 'be'; the others are non-standard.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** 'We were going to the park.'",
                commonErrors: ["Choosing a dialect form as if it were standard."],
              },
            },
            {
              id: "el10-u5-standard-english-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Explain the difference between dialect and Standard English, and why dialect is not simply 'wrong'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Dialect vs Standard", statement: "Both are systematic varieties; context determines appropriateness." }],
                steps: [
                  { reasoning: "Dialect is a regional/social variety with its own consistent grammar and vocabulary.", marks: 1, markCode: "AO1" },
                  { reasoning: "It is appropriate in informal contexts; Standard English is required in formal ones — neither is inherently superior.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Dialect and Standard English are different varieties; dialect is valid informally but not in formal writing.",
                commonErrors: ["Calling dialect ungrammatical or inferior."],
              },
            },
            {
              id: "el10-u5-standard-english-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A student writes 'We was going to the park.' Correct it to Standard English and explain when the original form might be acceptable.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Correcting non-standard forms", statement: "Standard English is required in formal contexts." }],
                steps: [
                  { reasoning: "Correct to 'We were going to the park.' — 'were' is the standard past of 'be'.", marks: 1, markCode: "AO5" },
                  { reasoning: "'We was' is a dialect form, common in informal spoken and written contexts.", marks: 1, markCode: "AO1" },
                  { reasoning: "It would be acceptable in a text to a friend but not in an exam answer or formal letter.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Correct to 'We were going to the park'; 'we was' is acceptable only informally.",
                commonErrors: ["Correcting without explaining context, or saying dialect is always wrong."],
              },
            },
            {
              id: "el10-u5-standard-english-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: LETTER_FORMAL,
              stem: "Compare the register of the job application letter with the text message. Explain why the difference is appropriate.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Register", statement: "Formality level is chosen to suit audience and purpose." },
                  { kind: "context", name: "Audience", statement: "Formal writing to employers requires Standard English." },
                ],
                steps: [
                  { reasoning: "The letter uses Standard English: complete sentences, formal vocabulary ('position', 'advertised', 'convenience').", evidence: "I am writing to apply for the position", marks: 1, markCode: "AO2" },
                  { reasoning: "It follows formal conventions: 'Dear Ms Khan', 'Yours faithfully', structured paragraphs.", marks: 1, markCode: "AO2" },
                  { reasoning: "The text message is informal: abbreviations ('im', 'ill'), no punctuation, casual apology.", evidence: "sorry im running late 4 the interview", marks: 1, markCode: "AO2" },
                  { reasoning: "The contrast is appropriate: the employer expects formal Standard English; a friend expects casual informality.", marks: 1, markCode: "AO2" },
                  { reasoning: "Using the text-message register in the application would undermine the applicant's credibility.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "The letter's formal Standard English suits an employer; the message's informal register suits a friend. The difference is contextually appropriate.",
                commonErrors: ["Describing registers without linking them to audience and purpose."],
              },
            },
            {
              id: "el10-u5-standard-english-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: TEXT_MSG,
              stem: "The text message uses non-standard forms ('im', 'ill', '4'). Explain why these are acceptable here but would not be in a job application, and what this reveals about language variation.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Contextual appropriateness", statement: "The same form can be right in one context and wrong in another." },
                  { kind: "definition", name: "Language variation", statement: "English varies by context, audience and medium." },
                ],
                steps: [
                  { reasoning: "Abbreviations and missing apostrophes are normal in texting, where speed and informality are expected.", evidence: "sorry im running late", marks: 1, markCode: "AO2" },
                  { reasoning: "The recipient is a friend who will understand the casual register instantly.", marks: 1, markCode: "AO2" },
                  { reasoning: "In a job application, such forms would signal carelessness and lack of professionalism.", marks: 1, markCode: "AO2" },
                  { reasoning: "This shows language is not simply correct or incorrect; appropriateness depends on context.", marks: 2, markCode: "AO2" },
                  { reasoning: "Speakers and writers command a range of varieties and choose the one that fits.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(6),
                finalAnswer: "Texting abbreviations are acceptable to friends but not employers; appropriateness depends on context, revealing that English varies by situation.",
                commonErrors: ["Declaring abbreviations always wrong rather than context-dependent."],
              },
            },
            {
              id: "el10-u5-standard-english-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Read the two extracts and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify two features of Standard English in the job application letter.", marks: 2 },
                { label: "b", prompt: "Identify two non-standard or informal features in the text message.", marks: 2 },
                { label: "c", prompt: "Explain why each register is appropriate for its audience.", marks: 3 },
                { label: "d", prompt: "Evaluate what would happen if the student used the text-message register in the job application.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Register appropriateness", statement: "Formality must match audience and purpose." },
                  { kind: "definition", name: "Standard English", statement: "The formally accepted variety required in formal contexts." },
                ],
                steps: [
                  { part: "a", reasoning: "Complete, grammatically correct sentences with standard verb forms.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Formal vocabulary and conventions: 'position', 'convenience', 'Yours faithfully'.", evidence: "would be grateful for the opportunity", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Missing apostrophes and abbreviations: 'im', 'ill', '4'.", evidence: "im running late 4 the interview", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Casual tone and minimal punctuation suited to texting.", marks: 1, markCode: "AO1" },
                  { part: "c", reasoning: "The letter's formal register respects the employer's expectations and the seriousness of a job application.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "The message's informal register suits a friend and the speed of texting.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Each is appropriate because register follows audience and medium.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "The employer would likely reject it as careless and unprofessional.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "It would undermine the applicant's credibility regardless of qualifications.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "The contrast proves that accuracy and appropriateness, not just content, determine success.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(2, "a"),
                  ...bands(2, "b"),
                  ...bands(3, "c"),
                  ...bands(3, "d"),
                ],
                finalAnswer: "(a) Standard sentences and formal conventions. (b) Abbreviations and casual tone. (c) Each register suits its audience and medium. (d) Using informal register would damage credibility and likely lose the application.",
                commonErrors: ["Describing features without linking to audience.", "Judging informal features as always wrong."],
              },
            },
          ],
        },
        {
          id: "el10-u5-grammar-punctuation",
          title: "Grammar and punctuation for accuracy",
          skill: "Apply accurate grammar and punctuation in formal writing.",
          sections: [
            {
              heading: "Common grammar errors",
              body: "Watch for **subject-verb agreement** ('she was' not 'she were'), **pronoun case** ('my friend and I' not 'me and my friend' as subject), **tense consistency** and **apostrophe errors** ('its' possessive vs 'it's' = it is). Read each sentence aloud to check agreement.",
            },
            {
              heading: "Punctuation that shapes meaning",
              body: "Punctuation is not decoration; it controls meaning. 'Let's eat Grandma' vs 'Let's eat, Grandma' — the comma decides whether Grandma is dinner or a dinner guest. 'I saw the man with the telescope' is ambiguous: who had the telescope? The comma 'I saw the man, with the telescope' clarifies the speaker did. A **comma splice** joins two sentences with only a comma — fix with a full stop, semicolon or conjunction.",
            },
            {
              heading: "Checking your work",
              body: "After writing, proofread in passes: first for **spelling**, then **grammar and punctuation**, then **meaning**. Read aloud to catch errors the eye skips. In exams, accuracy in Sentence 1 builds the foundation for higher-band responses.",
            },
          ],
          keyFormulas: [
            { name: "Comma splice", statement: "Two complete sentences joined by only a comma — use a full stop, semicolon or conjunction." },
            { name: "its / it's", statement: "'its' = belonging to it; 'it's' = it is." },
            { name: "Ambiguity", statement: "Punctuation can change meaning: 'eat Grandma' vs 'eat, Grandma'." },
          ],
          workedExample: {
            problem: "Correct this sentence and explain the punctuation change: 'I saw the man with the telescope.'",
            solution: "Without punctuation the sentence is ambiguous — the man may have had the telescope. Adding commas clarifies: 'I saw the man, with the telescope.' Now the speaker is the one with the telescope. Alternatively, 'I saw the man with the telescope' could mean the man had it; context decides which meaning is intended.",
          },
          questions: [
            {
              id: "el10-u5-grammar-punctuation-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which sentence is punctuated correctly?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Its raining, so were staying inside." },
                  { id: "b", text: "It's raining, so we're staying inside." },
                  { id: "c", text: "Its raining so were staying inside." },
                  { id: "d", text: "It's raining so were staying inside." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "its / it's", statement: "'it's' = it is; 'its' = belonging to it." }],
                steps: [{ reasoning: "'It's' is needed for 'it is'; 'we're' for 'we are'; the comma separates the clauses.", marks: 1, markCode: "AO5" }],
                finalAnswer: "**(b)** It's raining, so we're staying inside.",
                commonErrors: ["Confusing 'its' and 'it's', or 'were' and 'we're'."],
              },
            },
            {
              id: "el10-u5-grammar-punctuation-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Explain why 'I like pasta, I eat it every day' is incorrect and how to fix it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Comma splice", statement: "Two complete sentences joined by only a comma." }],
                steps: [
                  { reasoning: "Two independent clauses ('I like pasta' / 'I eat it every day') are joined by only a comma — a comma splice.", marks: 1, markCode: "AO5" },
                  { reasoning: "Fix with a full stop ('I like pasta. I eat it every day'), semicolon, or conjunction ('because').", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "It is a comma splice; fix with a full stop, semicolon or conjunction.",
                commonErrors: ["Calling it correct because the ideas are related."],
              },
            },
            {
              id: "el10-u5-grammar-punctuation-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Correct the errors in this sentence and name each error type: 'Me and him was going too the park its to late.'",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Error correction", statement: "Grammar errors fall into recognisable categories." }],
                steps: [
                  { reasoning: "'Me and him' → 'He and I' (subject pronoun case).", marks: 1, markCode: "AO5" },
                  { reasoning: "'was' → 'were' (subject-verb agreement); 'too' → 'to' (spelling/preposition); 'its' → 'it's' (contraction).", marks: 1, markCode: "AO5" },
                  { reasoning: "Corrected: 'He and I were going to the park; it's too late.'", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "'He and I were going to the park; it's too late.' Errors: pronoun case, agreement, spelling, apostrophe.",
                commonErrors: ["Missing the 'its/it's' or 'too/to' errors."],
              },
            },
            {
              id: "el10-u5-grammar-punctuation-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: PUNCT_AMBIGUOUS,
              stem: "Explain how punctuation changes the meaning of the two pairs of sentences in the extract.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Punctuation and meaning", statement: "Marks control how a sentence is parsed." },
                  { kind: "skill", name: "Ambiguity", statement: "Unclear punctuation creates multiple possible readings." },
                ],
                steps: [
                  { reasoning: "'Let's eat Grandma' reads as an instruction to eat Grandma (horror); 'Let's eat, Grandma' addresses Grandma as a dinner guest.", evidence: "Let's eat Grandma.", marks: 2, markCode: "AO2" },
                  { reasoning: "'I saw the man with the telescope' is ambiguous — who had the telescope?", evidence: "I saw the man with the telescope.", marks: 1, markCode: "AO2" },
                  { reasoning: "'I saw the man, with the telescope' clarifies the speaker had the telescope.", evidence: "I saw the man, with the telescope.", marks: 2, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "Punctuation decides whether Grandma is food or guest, and who owns the telescope; marks control meaning.",
                commonErrors: ["Ignoring the semantic shift caused by the comma."],
              },
            },
            {
              id: "el10-u5-grammar-punctuation-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Discuss how grammatical and punctuation accuracy affects the credibility of a student's transactional writing (e.g., a letter of application).",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Accuracy and credibility", statement: "Errors signal carelessness to the reader." },
                  { kind: "skill", name: "Accuracy", statement: "Correct grammar and punctuation are expected in formal writing." },
                ],
                steps: [
                  { reasoning: "Errors such as 'their/there' confusion or comma splices make the writer seem careless.", marks: 1, markCode: "AO4" },
                  { reasoning: "In a job application, accuracy errors can cost the candidate the position regardless of merit.", marks: 1, markCode: "AO4" },
                  { reasoning: "Correct punctuation also prevents ambiguity, ensuring the message is understood as intended.", marks: 1, markCode: "AO4" },
                  { reasoning: "Accuracy builds trust: a reader who sees careful writing trusts the content.", marks: 1, markCode: "AO4" },
                  { reasoning: "In exams, accuracy in Sentence 1 underpins higher-band responses.", marks: 1, markCode: "AO4" },
                  { reasoning: "Therefore accuracy is not optional polish but a core requirement of formal transactional writing.", marks: 1, markCode: "AO4" },
                ],
                levels: bands(6),
                finalAnswer: "Accuracy errors damage credibility and can lose opportunities; correct grammar and punctuation are essential in formal writing.",
                commonErrors: ["Treating accuracy as secondary to content."],
              },
            },
            {
              id: "el10-u5-grammar-punctuation-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Read the flawed paragraph and answer the questions that follow.",
              extract: FLAWED,
              parts: [
                { label: "a", prompt: "Identify three grammatical errors in the paragraph.", marks: 3 },
                { label: "b", prompt: "Correct the paragraph fully.", marks: 4 },
                { label: "c", prompt: "Explain the effect of the errors on a reader's impression.", marks: 2 },
                { label: "d", prompt: "Describe a proofreading strategy to avoid such errors.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Proofreading", statement: "Systematic checking catches grammar, spelling and punctuation errors." },
                  { kind: "context", name: "Accuracy", statement: "Errors damage credibility in formal writing." },
                ],
                steps: [
                  { part: "a", reasoning: "'was wrote' → passive/verb error; should be 'was written' or 'I wrote'.", evidence: "The essay was wrote by me", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "'Me and my friend' → 'My friend and I' (pronoun case).", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "'done' → 'did' (tense); 'Their' → 'They're' (they are); 'Its' → 'It's'; 'you're' → 'your'.", evidence: "Its important to revise you're notes", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "'The essay was written by me last week and it was very good.'", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "'My friend and I went to the library and did some research.'", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "'They're going to help me with the presentation.'", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "'It's important to revise your notes beforehand.'", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Errors make the writer seem careless and undermine trust in the content.", marks: 1, markCode: "AO4" },
                  { part: "c", reasoning: "Repeated errors suggest weak language control, lowering the overall impression.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "Proofread in passes: spelling, then grammar/punctuation, then meaning; read aloud.", marks: 1, markCode: "AO5" },
                ],
                levels: [
                  ...bands(3, "a"),
                  ...bands(4, "b"),
                  ...bands(2, "c"),
                  ...bands(1, "d"),
                ],
                finalAnswer: "(a) Verb error, pronoun case, tense and homophone errors. (b) Fully corrected paragraph. (c) Errors damage credibility. (d) Proofread in passes and read aloud.",
                commonErrors: ["Correcting some errors but missing homophones.", "Not explaining the effect on the reader."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u5-standard-grammar-notes",
      title: "Standard English and accuracy — notes",
      summary: "Standard English is required in formal contexts; dialect is valid informally. Accuracy in grammar and punctuation protects credibility.",
      sections: [
        { heading: "Key idea", body: "Language varies by context; appropriateness, not inherent correctness, determines the right variety." },
        { heading: "Standard English", body: "Required in exams and formal writing; dialect and abbreviations are fine informally." },
        { heading: "Accuracy", body: "Proofread for spelling, grammar and punctuation; errors damage credibility and clarity." },
      ],
    },
  },
  // ============================== UNIT 5, LESSON 2 ==============================
  {
    file: "lesson-5-2.ts",
    exportName: "lesson52",
    lesson: {
      id: "el10-u5-lesson-5-2",
      code: "5-2",
      title: "Vocabulary, Spelling and Language Change",
      goal: "I CAN choose precise vocabulary, spell accurately and explain how English changes over time.",
      standards: ["4EA1 Paper 1", "4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO4"],
      vocabulary: [
        { term: "Precise vocabulary", definition: "Specific, exact word choice that conveys meaning clearly." },
        { term: "Weak vocabulary", definition: "Vague or overused words such as 'good', 'nice' or 'very' that dull writing." },
        { term: "Homophone", definition: "Words that sound alike but differ in meaning and spelling, such as 'their' and 'there'." },
        { term: "Neologism", definition: "A newly coined word, often from technology, such as 'selfie' or 'hashtag'." },
        { term: "Semantic shift", definition: "A change in a word's meaning over time, such as 'sick' meaning 'excellent'." },
        { term: "Borrowing", definition: "Taking words from another language, such as 'rendezvous' from French." },
      ],
      concepts: [
        {
          id: "el10-u5-vocabulary-spelling",
          title: "Vocabulary choice and spelling",
          skill: "Select precise vocabulary and spell accurately in formal writing.",
          sections: [
            {
              heading: "Why vocabulary matters",
              body: "Precise words convey meaning efficiently. 'The old building was very big and scary' is weaker than 'The dilapidated mansion loomed menacingly'. Vague words ('very', 'nice', 'good', 'a lot of') pad sentences without adding meaning. Strong writing replaces them with specific adjectives, powerful verbs and varied nouns.",
            },
            {
              heading: "Spelling strategies",
              body: "Common pitfalls include **homophones** ('their/there/they're', 'your/you're', 'its/it's'), **-ible/-able** endings and doubled letters. Strategies: learn the most common confusions, use mnemonics ('because = Big Elephants Can Always Understand Small Elephants'), break words into syllables, and always proofread spelling separately.",
            },
            {
              heading: "Improving word choice",
              body: "Replace weak phrases: 'very big' → 'enormous' or 'colossal'; 'nice' → 'delightful', 'charming', 'pleasant'; 'a lot of' → 'numerous', 'countless', 'a swarm of'. Strong verbs beat adverbs: 'ran quickly' → 'sprinted', 'dashed'. Choose words that fit the register — formal writing needs formal vocabulary.",
            },
          ],
          keyFormulas: [
            { name: "Precise vocabulary", statement: "Specific word choice that conveys exact meaning." },
            { name: "Homophone", statement: "Sound-alike words with different spellings: their/there/they're." },
            { name: "Weak to strong", statement: "'very big' → 'enormous'; 'nice' → 'delightful'." },
          ],
          workedExample: {
            problem: "Improve this sentence: 'The old building was very big and it looked very old and scary.'",
            solution: "Replace weak vocabulary with precise words: 'The dilapidated mansion loomed menacingly over the street.' This removes 'very' twice, upgrades 'big' to 'mansion'/'loomed', and makes 'scary' more specific as 'menacingly'. The sentence is shorter, clearer and more vivid.",
          },
          questions: [
            {
              id: "el10-u5-vocabulary-spelling-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which sentence uses the correct homophone?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Their going to the park over their." },
                  { id: "b", text: "They're going to the park over there." },
                  { id: "c", text: "There going to the park over their." },
                  { id: "d", text: "They're going to the park over their." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Homophone", statement: "Sound-alike words with different meanings: they're = they are, there = place, their = belonging." }],
                steps: [{ reasoning: "'They're' = they are; 'there' = place. The sentence needs both.", marks: 1, markCode: "AO5" }],
                finalAnswer: "**(b)** They're going to the park over there.",
                commonErrors: ["Confusing 'their' (possession), 'there' (place) and 'they're' (they are)."],
              },
            },
            {
              id: "el10-u5-vocabulary-spelling-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Explain two strategies for improving spelling accuracy in formal writing.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Spelling strategies", statement: "Systematic approaches reduce errors." }],
                steps: [
                  { reasoning: "Learn the most common homophone confusions (their/there/they're) and check them deliberately.", marks: 1, markCode: "AO5" },
                  { reasoning: "Proofread spelling in a separate pass, reading slowly or aloud, rather than relying on the first draft.", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "Learn common confusions and proofread spelling separately.",
                commonErrors: ["Relying on spellcheck alone, which misses homophones."],
              },
            },
            {
              id: "el10-u5-vocabulary-spelling-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: WEAK_VOCAB,
              stem: "Identify three weak vocabulary choices in the extract and suggest stronger alternatives.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Weak vocabulary", statement: "Vague words like 'very', 'nice', 'big' dull writing." }],
                steps: [
                  { reasoning: "'very big' → 'enormous' or 'colossal'; the intensifier 'very' is weak padding.", evidence: "it was very big", marks: 1, markCode: "AO2" },
                  { reasoning: "'very old and scary' → 'dilapidated' and 'menacing' or 'foreboding'.", evidence: "it looked very old and scary", marks: 1, markCode: "AO2" },
                  { reasoning: "'very scared' and 'very quickly' → 'terrified' and 'fled' — strong verbs beat adverbs.", evidence: "I wanted to get out very quickly", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Replace 'very big/old/scared/quickly' with 'enormous', 'dilapidated', 'terrified' and 'fled'.",
                commonErrors: ["Adding more 'very' phrases instead of replacing weak words."],
              },
            },
            {
              id: "el10-u5-vocabulary-spelling-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: WEAK_VOCAB,
              stem: "Rewrite the extract using precise vocabulary and explain how the improved version creates a stronger effect.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Precise vocabulary", statement: "Specific words create vivid, efficient writing." },
                  { kind: "skill", name: "Style", statement: "Word choice shapes tone and atmosphere." },
                ],
                steps: [
                  { reasoning: "'old building' → 'dilapidated mansion' adds decay and scale.", marks: 1, markCode: "AO2" },
                  { reasoning: "'very big and scary' → 'loomed menacingly' uses a powerful verb and precise adverb.", marks: 1, markCode: "AO2" },
                  { reasoning: "'dark corridors' and 'empty rooms' → 'shadowed corridors' and 'deserted chambers' for atmosphere.", marks: 1, markCode: "AO2" },
                  { reasoning: "'very scared... get out quickly' → 'terrified... fled' uses strong verbs.", marks: 1, markCode: "AO2" },
                  { reasoning: "The rewrite is shorter yet more vivid, creating a clearer sense of fear.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "Replacing weak words with precise vocabulary ('dilapidated mansion', 'loomed menacingly', 'fled') makes the writing shorter, clearer and more atmospheric.",
                commonErrors: ["Keeping 'very' phrases while adding synonyms elsewhere."],
              },
            },
            {
              id: "el10-u5-vocabulary-spelling-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Explain why spelling errors in words like 'their/there/they're' are particularly damaging in formal writing, and describe how to avoid them.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Homophone errors", statement: "Sound-alike errors are common and noticeable." },
                  { kind: "skill", name: "Accuracy", statement: "Formal writing requires careful word-level accuracy." },
                ],
                steps: [
                  { reasoning: "Homophones sound correct when read aloud, so they slip past ear-based proofreading.", marks: 1, markCode: "AO4" },
                  { reasoning: "They are highly noticeable to readers and signal carelessness.", marks: 1, markCode: "AO4" },
                  { reasoning: "They change meaning: 'their going' vs 'they're going' alters the sentence entirely.", marks: 1, markCode: "AO4" },
                  { reasoning: "Avoid by learning the small set of common confusions and checking each deliberately.", marks: 1, markCode: "AO4" },
                  { reasoning: "Use a checklist (their = possession, there = place, they're = they are) during proofreading.", marks: 1, markCode: "AO4" },
                  { reasoning: "In exams, such errors lower the accuracy mark even when ideas are strong.", marks: 1, markCode: "AO4" },
                ],
                levels: bands(6),
                finalAnswer: "Homophone errors are subtle, change meaning and damage credibility; learn the confusions and check them deliberately.",
                commonErrors: ["Relying on spellcheck, which cannot detect homophones."],
              },
            },
            {
              id: "el10-u5-vocabulary-spelling-q6",
              difficulty: "challenge",
              totalMarks: 10,
              stem: "Read the student's paragraph and answer the questions that follow.",
              extract: WEAK_VOCAB,
              parts: [
                { label: "a", prompt: "Identify three weak vocabulary choices.", marks: 3 },
                { label: "b", prompt: "Rewrite two sentences using precise vocabulary.", marks: 3 },
                { label: "c", prompt: "Explain how the rewrite improves the writing.", marks: 2 },
                { label: "d", prompt: "Describe a proofreading habit that would catch spelling errors like 'seperate'.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Precise vocabulary", statement: "Specific words create vivid, efficient writing." },
                  { kind: "skill", name: "Proofreading", statement: "Systematic checking catches word-level errors." },
                ],
                steps: [
                  { part: "a", reasoning: "'very big' is weak padding.", evidence: "it was very big", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "'very old and scary' is vague.", evidence: "it looked very old and scary", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "'very scared' and 'very quickly' are weak intensifiers.", evidence: "I was very scared", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "'The dilapidated mansion loomed menacingly over the street.'", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "'The deserted corridors and empty chambers filled me with terror, and I fled.'", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "Precise words replace every 'very' phrase.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "The rewrite is shorter yet more vivid, creating clearer atmosphere.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Strong verbs ('loomed', 'fled') replace weak adverb phrases.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "Learn common misspellings and check them in a separate spelling pass.", marks: 1, markCode: "AO5" },
                  { part: "d", reasoning: "Reading aloud catches errors spellcheck misses; keep a personal error list.", marks: 1, markCode: "AO5" },
                ],
                levels: [
                  ...bands(3, "a"),
                  ...bands(3, "b"),
                  ...bands(2, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) 'very big', 'very old and scary', 'very scared/quickly'. (b) Rewritten with 'dilapidated mansion', 'loomed menacingly', 'fled'. (c) Shorter, more vivid, clearer atmosphere. (d) Learn common errors, proofread separately, read aloud.",
                commonErrors: ["Keeping 'very' phrases while adding synonyms.", "Ignoring spelling in the editing task."],
              },
            },
          ],
        },
        {
          id: "el10-u5-language-change",
          title: "Language change and new words",
          skill: "Explain how English changes through neologisms, semantic shift and borrowing.",
          sections: [
            {
              heading: "How English changes",
              body: "English is constantly changing. New words (**neologisms**) enter through technology ('selfie', 'hashtag', 'influencer'), social change and contact with other languages (**borrowing**, e.g. 'rendezvous' from French, 'bungalow' from Hindi). Words also change meaning (**semantic shift**): 'sick' once meant ill, now can mean excellent; 'gay' shifted from 'happy' to its current meaning.",
            },
            {
              heading: "Slang and informal varieties",
              body: "**Slang** is informal, often temporary vocabulary shared by a group ('fire', 'mid', 'no cap'). It spreads fast through media and music but is usually inappropriate in formal writing. Some slang eventually enters mainstream usage; most fades. 'Lowkey' and 'no cap' in the podcast comments are current slang.",
            },
            {
              heading: "Standard English and change",
              body: "Change is natural and inevitable; 'Standard English' itself was once a dialect. The question is not whether language changes but whether a particular form suits a particular context. Formal writing still expects established Standard English; informal contexts welcome innovation.",
            },
          ],
          keyFormulas: [
            { name: "Neologism", statement: "A newly coined word, often from technology or social change." },
            { name: "Semantic shift", statement: "A word's meaning changes over time ('sick' = excellent)." },
            { name: "Borrowing", statement: "Taking words from other languages ('rendezvous', 'bungalow')." },
            { name: "Slang", statement: "Informal group vocabulary; often temporary and context-bound." },
          ],
          workedExample: {
            problem: "Explain how 'selfie' and 'sick' illustrate different types of language change.",
            solution: "'Selfie' is a neologism — a newly coined word created for the digital camera era. 'Sick' illustrates semantic shift — its meaning changed from 'ill' to 'excellent' through informal usage. Both show English adapting to new technologies and social attitudes, though 'sick' changed meaning while 'selfie' added a new word.",
          },
          questions: [
            {
              id: "el10-u5-language-change-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is a neologism?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A word borrowed from another language" },
                  { id: "b", text: "A newly coined word" },
                  { id: "c", text: "A word whose meaning has changed" },
                  { id: "d", text: "An old-fashioned word" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Neologism", statement: "A newly coined word." }],
                steps: [{ reasoning: "'Selfie' and 'hashtag' are examples of newly created words.", marks: 1, markCode: "AO1" }],
                finalAnswer: "**(b)** A newly coined word.",
                commonErrors: ["Confusing neologism with borrowing or semantic shift."],
              },
            },
            {
              id: "el10-u5-language-change-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Give one example of semantic shift and explain what changed.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Semantic shift", statement: "A word's meaning changes over time." }],
                steps: [
                  { reasoning: "Example: 'sick' meant 'ill' but now can mean 'excellent' in informal English.", marks: 1, markCode: "AO1" },
                  { reasoning: "The meaning shifted through social usage, especially among younger speakers.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "'Sick' shifted from 'ill' to 'excellent' through informal usage.",
                commonErrors: ["Giving a neologism example instead of a meaning change."],
              },
            },
            {
              id: "el10-u5-language-change-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain two reasons why new words enter the English language.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "context", name: "Language change", statement: "New words arise from technology, social change and contact." }],
                steps: [
                  { reasoning: "Technology creates new concepts needing names: 'selfie', 'hashtag', 'influencer'.", marks: 1, markCode: "AO1" },
                  { reasoning: "Contact with other languages borrows words: 'rendezvous' (French), 'bungalow' (Hindi).", marks: 1, markCode: "AO1" },
                  { reasoning: "Social groups invent slang that may spread: 'no cap', 'lowkey'.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Technology, borrowing from other languages, and social slang drive new words.",
                commonErrors: ["Listing reasons without examples."],
              },
            },
            {
              id: "el10-u5-language-change-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: SLANG_EXTRACT,
              stem: "Analyse the slang in the podcast comments and explain its effect on tone and audience.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Slang", statement: "Informal group vocabulary creates in-group identity." },
                  { kind: "context", name: "Audience", statement: "Slang suits peers but not formal contexts." },
                ],
                steps: [
                  { reasoning: "'lowkey fire', 'no cap', 'gave me chills' are current slang expressing enthusiasm informally.", evidence: "That episode was lowkey fire", marks: 1, markCode: "AO2" },
                  { reasoning: "'We stan' and 'it is mid' show in-group vocabulary that signals shared youth culture.", evidence: "We stan the new series", marks: 1, markCode: "AO2" },
                  { reasoning: "The slang creates a casual, peer-to-peer tone, as if listeners are chatting with friends.", marks: 1, markCode: "AO2" },
                  { reasoning: "It also dates the comments — these words may fade as slang changes.", marks: 1, markCode: "AO2" },
                  { reasoning: "The effect is friendly and contemporary, but inappropriate for formal review or exam writing.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "The slang creates a casual, in-group tone suited to peers but inappropriate for formal contexts; it also dates the comments.",
                commonErrors: ["Treating slang as simply wrong rather than context-bound."],
              },
            },
            {
              id: "el10-u5-language-change-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "Discuss whether slang and neologisms belong in formal transactional writing (e.g., a letter of complaint or job application).",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Register and change", statement: "New words may enter formal English over time, but not instantly." },
                  { kind: "skill", name: "Judgement", statement: "Formal writing requires established Standard English." },
                ],
                steps: [
                  { reasoning: "Most slang is too informal and temporary for formal writing; it undermines credibility.", marks: 1, markCode: "AO4" },
                  { reasoning: "Neologisms like 'selfie' may eventually enter dictionaries, but many remain too new or niche.", marks: 1, markCode: "AO4" },
                  { reasoning: "Formal contexts expect established vocabulary that all readers understand.", marks: 1, markCode: "AO4" },
                  { reasoning: "However, some once-informal words have become standard ('cool', 'OK'), showing change is gradual.", marks: 1, markCode: "AO4" },
                  { reasoning: "The safe approach: use established Standard English in formal writing, reserve slang for informal contexts.", marks: 1, markCode: "AO4" },
                  { reasoning: "Judgement depends on audience: younger audiences may accept some informal words that older formal readers would not.", marks: 1, markCode: "AO4" },
                ],
                levels: bands(6),
                finalAnswer: "Slang and most neologisms are inappropriate in formal writing; only established words belong, though language change gradually admits new terms.",
                commonErrors: ["Arguing all new words are always wrong, ignoring gradual standardisation."],
              },
            },
            {
              id: "el10-u5-language-change-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: SLANG_EXTRACT,
              stem: "Read the podcast comments and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify three slang or informal expressions in the comments.", marks: 3 },
                { label: "b", prompt: "Explain what 'semantic shift' is and give an example.", marks: 2 },
                { label: "c", prompt: "Analyse how the slang creates a particular tone for the audience.", marks: 3 },
                { label: "d", prompt: "Evaluate whether the comments would be suitable for a formal review of the podcast.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Slang and semantic shift", statement: "Informal group words and words whose meanings change." },
                  { kind: "context", name: "Register", statement: "Slang suits informal audiences, not formal contexts." },
                ],
                steps: [
                  { part: "a", reasoning: "'lowkey fire', 'no cap', 'gave me chills' are slang.", evidence: "That episode was lowkey fire", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "'We stan' and 'it is mid' are in-group informal expressions.", evidence: "We stan the new series", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "'so real' is informal intensification.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Semantic shift = a word's meaning changes over time.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Example: 'sick' changed from 'ill' to 'excellent'.", marks: 1, markCode: "AO1" },
                  { part: "c", reasoning: "The slang creates a casual, excited, peer-to-peer tone.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "In-group vocabulary signals shared youth culture and belonging.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "It makes the comments feel spontaneous and enthusiastic rather than measured.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "The comments are unsuitable for a formal review: slang undermines objectivity and credibility.", marks: 1, markCode: "AO4" },
                  { part: "d", reasoning: "A formal review requires precise, established vocabulary; the slang would seem unprofessional.", marks: 1, markCode: "AO4" },
                ],
                levels: [
                  ...bands(3, "a"),
                  ...bands(2, "b"),
                  ...bands(3, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) 'lowkey fire', 'no cap', 'gave me chills', 'stan', 'mid', 'so real'. (b) Meaning changes over time; 'sick' = excellent. (c) Casual, in-group, enthusiastic tone. (d) Unsuitable for formal review.",
                commonErrors: ["Listing slang without analysing tone.", "Ignoring why slang fails in formal contexts."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u5-vocab-change-notes",
      title: "Vocabulary, spelling and language change — notes",
      summary: "Precise vocabulary strengthens writing; homophones need careful checking. English changes via neologisms, semantic shift and borrowing.",
      sections: [
        { heading: "Key idea", body: "Replace weak words ('very', 'nice') with precise vocabulary; check homophones deliberately." },
        { heading: "Spelling", body: "Learn common confusions (their/there/they're) and proofread spelling separately." },
        { heading: "Language change", body: "Neologisms, semantic shift and borrowing constantly update English; slang suits informal contexts only." },
      ],
    },
  },
  // ============================== UNIT 5, LESSON 3 ==============================
  {
    file: "lesson-5-3.ts",
    exportName: "lesson53",
    lesson: {
      id: "el10-u5-lesson-5-3",
      code: "5-3",
      title: "Editing and Improving Writing",
      goal: "I CAN identify and correct errors and improve clarity, concision and sentence variety in writing.",
      standards: ["4EA1 Paper 1", "4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO5"],
      vocabulary: [
        { term: "Editing", definition: "Reviewing and improving a draft for accuracy, clarity and style." },
        { term: "Concision", definition: "Expressing ideas in the fewest necessary words." },
        { term: "Active voice", definition: "Sentence where the subject performs the action: 'She wrote the essay.'" },
        { term: "Passive voice", definition: "Sentence where the subject receives the action: 'The essay was written by her.'" },
        { term: "Ambiguity", definition: "A sentence that can be understood in more than one way." },
        { term: "Sentence variety", definition: "Mixing simple, compound and complex sentences for rhythm and emphasis." },
      ],
      concepts: [
        {
          id: "el10-u5-error-correction",
          title: "Identifying and correcting errors",
          skill: "Systematically identify and correct errors in drafts.",
          sections: [
            {
              heading: "A systematic editing approach",
              body: "Edit in **passes**, not all at once: (1) read for **meaning** — does it say what you intend? (2) check **spelling**; (3) check **grammar and punctuation**; (4) check **word choice**; (5) check **structure and flow**. Each pass focuses on one thing, so errors are not missed.",
            },
            {
              heading: "Common error types",
              body: "Recognise categories: **spelling** ('seperate'), **homophones** ('their/there'), **grammar** ('was wrote', 'me and him'), **punctuation** (comma splices, missing apostrophes), **word choice** (repetition, vague words) and **sentence structure** (fragments, run-ons). Naming the error type helps correct it accurately.",
            },
            {
              heading: "Using feedback",
              body: "When a teacher marks errors, don't just fix them — **categorise** them. If you keep making 'their/there' mistakes, add that pair to your personal checklist. Track recurring errors across essays; patterns reveal your weak spots.",
            },
          ],
          keyFormulas: [
            { name: "Editing passes", statement: "Meaning → spelling → grammar/punctuation → word choice → structure." },
            { name: "Error categories", statement: "Spelling, homophones, grammar, punctuation, word choice, structure." },
            { name: "Recurring errors", statement: "Track repeated mistakes to target your weaknesses." },
          ],
          workedExample: {
            problem: "A draft contains 'The essay was wrote by me and me and my friend we went to the library.' Identify the error types and correct.",
            solution: "Errors: passive construction error ('was wrote' → 'was written' or active 'I wrote'), pronoun case ('me and my friend' → 'my friend and I'), comma splice (two sentences joined without punctuation). Corrected: 'I wrote the essay last week, and my friend and I went to the library.' Naming each error type ensures each is fixed properly.",
          },
          questions: [
            {
              id: "el10-u5-error-correction-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "What is the first pass in systematic editing?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Checking spelling" },
                  { id: "b", text: "Reading for meaning" },
                  { id: "c", text: "Checking punctuation" },
                  { id: "d", text: "Adding detail" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Editing passes", statement: "Start with meaning, then work through accuracy checks." }],
                steps: [{ reasoning: "Meaning comes first: if the draft does not say what you intend, later fixes are wasted.", marks: 1, markCode: "AO5" }],
                finalAnswer: "**(b)** Reading for meaning.",
                commonErrors: ["Starting with spelling rather than meaning."],
              },
            },
            {
              id: "el10-u5-error-correction-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Correct this sentence and name the error: 'Their going to revise they're notes.'",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Homophone error", statement: "Sound-alike words confused: their/there/they're." }],
                steps: [
                  { reasoning: "'Their' should be 'They're' (they are); 'they're' should be 'their' (possessive).", evidence: "Their going to revise they're notes", marks: 1, markCode: "AO5" },
                  { reasoning: "Corrected: 'They're going to revise their notes.'", marks: 1, markCode: "AO5" },
                ],
                finalAnswer: "'They're going to revise their notes.' Homophone error.",
                commonErrors: ["Swapping the two homophones incorrectly."],
              },
            },
            {
              id: "el10-u5-error-correction-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: FLAWED,
              stem: "List three distinct error types in the flawed paragraph and give an example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Error identification", statement: "Naming error types aids accurate correction." }],
                steps: [
                  { reasoning: "Grammar/verb error: 'was wrote' (should be 'was written' or 'I wrote').", evidence: "The essay was wrote by me", marks: 1, markCode: "AO1" },
                  { reasoning: "Pronoun case: 'Me and my friend' (should be 'my friend and I').", evidence: "Me and my friend we went", marks: 1, markCode: "AO1" },
                  { reasoning: "Homophone/apostrophe errors: 'Their'/'Its'/'you're' misused.", evidence: "Its important to revise you're notes", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Verb error, pronoun case error, and homophone/apostrophe errors.",
                commonErrors: ["Listing errors without categorising them."],
              },
            },
            {
              id: "el10-u5-error-correction-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: FLAWED,
              stem: "Analyse the flawed paragraph: identify the main error patterns and explain how they affect readability.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Error analysis", statement: "Patterns of errors reveal systematic weaknesses." },
                  { kind: "context", name: "Readability", statement: "Errors force the reader to work harder." },
                ],
                steps: [
                  { reasoning: "Verb errors ('was wrote', 'done') suggest tense and participle confusion.", evidence: "was wrote by me", marks: 1, markCode: "AO2" },
                  { reasoning: "Pronoun errors ('Me and my friend we') suggest case and agreement problems.", evidence: "Me and my friend we went", marks: 1, markCode: "AO2" },
                  { reasoning: "Homophone errors ('Their', 'Its', 'you're') suggest weak word-level checking.", evidence: "Its important to revise you're notes", marks: 1, markCode: "AO2" },
                  { reasoning: "Together these patterns make the paragraph hard to read and undermine credibility.", marks: 1, markCode: "AO2" },
                  { reasoning: "The errors are systematic, not random, so targeted proofreading would fix most.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "The paragraph shows systematic verb, pronoun and homophone errors that hamper readability and credibility; targeted editing would help.",
                commonErrors: ["Listing errors without analysing the patterns."],
              },
            },
            {
              id: "el10-u5-error-correction-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A teacher marks the same three errors on every essay you submit. Explain why this happens and describe a strategy to eliminate them permanently.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Error tracking", statement: "Recurring errors reveal personal weaknesses." },
                  { kind: "context", name: "Habit formation", statement: "Targeted practice fixes systematic mistakes." },
                ],
                steps: [
                  { reasoning: "Recurring errors mean the mistakes are habitual, not accidental — the writer has not internalised the rule.", marks: 1, markCode: "AO4" },
                  { reasoning: "Simply fixing them on the marked essay does not address the underlying habit.", marks: 1, markCode: "AO4" },
                  { reasoning: "Create a personal checklist of your recurring errors (e.g., their/there/they're).", marks: 1, markCode: "AO4" },
                  { reasoning: "Proofread specifically for those errors in every draft, in a dedicated pass.", marks: 1, markCode: "AO4" },
                  { reasoning: "Study the rule and find examples until the correct form becomes automatic.", marks: 1, markCode: "AO4" },
                  { reasoning: "Over time, targeted attention converts conscious checking into habit.", marks: 1, markCode: "AO4" },
                ],
                levels: bands(6),
                finalAnswer: "Recurring errors are habitual; build a personal checklist, proofread for them specifically and study until automatic.",
                commonErrors: ["Fixing errors only on the marked essay without addressing the habit."],
              },
            },
            {
              id: "el10-u5-error-correction-q6",
              difficulty: "challenge",
              totalMarks: 11,
              extract: FLAWED,
              stem: "Read the flawed paragraph and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Identify four errors in the paragraph, naming each type.", marks: 4 },
                { label: "b", prompt: "Correct the paragraph fully.", marks: 4 },
                { label: "c", prompt: "Explain why systematic editing is more effective than one read-through.", marks: 2 },
                { label: "d", prompt: "Describe one proofreading habit that would prevent these errors.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Editing", statement: "Systematic passes catch errors a single read misses." },
                  { kind: "context", name: "Accuracy", statement: "Corrected writing protects credibility." },
                ],
                steps: [
                  { part: "a", reasoning: "Verb error: 'was wrote' → 'was written' or 'I wrote'.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Pronoun case: 'Me and my friend' → 'My friend and I'.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Homophone: 'Their' → 'They're'; 'Its' → 'It's'; 'you're' → 'your'.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Comma splice / run-on: sentences joined without punctuation.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "'I wrote the essay last week, and it was very good.'", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "'My friend and I went to the library and did some research.'", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "'They're going to help me with the presentation.'", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "'It's important to revise your notes beforehand.'", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "One read-through tries to catch everything at once; separate passes focus attention on one error type at a time.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "This prevents overlooking errors because each pass has a single, clear target.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "Proofread in separate passes and keep a personal checklist of recurring errors.", marks: 1, markCode: "AO5" },
                ],
                levels: [
                  ...bands(4, "a"),
                  ...bands(4, "b"),
                  ...bands(2, "c"),
                  ...bands(1, "d"),
                ],
                finalAnswer: "(a) Verb error, pronoun case, homophone errors, comma splice. (b) Fully corrected paragraph. (c) Separate passes focus attention and catch more errors. (d) Proofread in passes and keep a personal error checklist.",
                commonErrors: ["Correcting without naming error types.", "Trying to fix everything in one pass."],
              },
            },
          ],
        },
        {
          id: "el10-u5-clarity-precision",
          title: "Improving clarity and precision",
          skill: "Improve writing through concision, sentence variety, active voice and removing ambiguity.",
          sections: [
            {
              heading: "Concision and active voice",
              body: "**Concision** means using the fewest words needed. Cut filler ('very', 'really', 'in order to' → 'to'), redundant pairs ('past history', 'future plans') and weak phrases. **Active voice** ('She wrote the essay') is clearer and more direct than passive ('The essay was written by her'), though passive is useful when the doer is unknown or unimportant.",
            },
            {
              heading: "Removing ambiguity",
              body: "Ambiguous sentences can mean two things. 'Students should hand in essays when they are finished' — who is finished, students or essays? Clarify: 'Students should hand in their essays when the students have finished writing.' Check every sentence for who does what.",
            },
            {
              heading: "Sentence variety",
              body: "Monotonous writing uses only simple sentences. Mix **simple** ('She ran'), **compound** ('She ran, and he walked') and **complex** ('Because she ran, she was late') sentences. Variety creates rhythm and emphasis; all long sentences or all short sentences both fatigue the reader.",
            },
          ],
          keyFormulas: [
            { name: "Concision", statement: "Fewest necessary words; cut filler and redundancy." },
            { name: "Active voice", statement: "Subject performs the action — clearer and more direct." },
            { name: "Sentence variety", statement: "Mix simple, compound and complex sentences for rhythm." },
            { name: "Ambiguity", statement: "A sentence with more than one possible meaning must be clarified." },
          ],
          workedExample: {
            problem: "Improve this ambiguous sentence: 'Students should hand in their essays to the teacher when they are finished so they can be marked.'",
            solution: "The sentence is ambiguous — 'they' could refer to students or essays. Clarify: 'When students have finished writing their essays, they should hand them to the teacher so the teacher can mark them.' This removes ambiguity by making each pronoun's referent clear.",
          },
          questions: [
            {
              id: "el10-u5-clarity-precision-q1",
              difficulty: "foundation",
              totalMarks: 1,
              stem: "Which sentence is clearest?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The essay was written by me in a very quick way." },
                  { id: "b", text: "I quickly wrote the essay." },
                  { id: "c", text: "The writing of the essay by me was done quickly." },
                  { id: "d", text: "It was written by me quickly." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "technique", name: "Clarity", statement: "Active voice and concise phrasing are clearest." }],
                steps: [{ reasoning: "'I quickly wrote the essay' is active, concise and unambiguous.", marks: 1, markCode: "AO2" }],
                finalAnswer: "**(b)** I quickly wrote the essay.",
                commonErrors: ["Choosing a passive or wordy option."],
              },
            },
            {
              id: "el10-u5-clarity-precision-q2",
              difficulty: "core",
              totalMarks: 2,
              stem: "Explain what concision means and give one example of cutting filler words.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Concision", statement: "Expressing ideas in the fewest necessary words." }],
                steps: [
                  { reasoning: "Concision removes words that add no meaning, making writing tighter.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: 'in order to' → 'to'; 'very big' → 'enormous'; 'at this point in time' → 'now'.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Concision cuts filler; 'in order to' becomes 'to', 'very big' becomes 'enormous'.",
                commonErrors: ["Confusing concision with simply writing shorter sentences."],
              },
            },
            {
              id: "el10-u5-clarity-precision-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Explain the difference between active and passive voice and when each is appropriate.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Active vs passive voice", statement: "Who performs the action determines the voice." }],
                steps: [
                  { reasoning: "Active: subject performs the action ('She wrote the essay'); clearer and more direct.", marks: 1, markCode: "AO1" },
                  { reasoning: "Passive: subject receives the action ('The essay was written'); useful when the doer is unknown or unimportant.", marks: 1, markCode: "AO1" },
                  { reasoning: "Active is generally preferred in formal writing for clarity and energy.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Active voice is direct and clear; passive is useful when the doer is unknown or unimportant.",
                commonErrors: ["Saying passive is always wrong; it has legitimate uses."],
              },
            },
            {
              id: "el10-u5-clarity-precision-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: UNCLEAR,
              stem: "Explain the ambiguity in the extract's sentence and rewrite it to remove the ambiguity.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Ambiguity", statement: "Unclear pronoun reference creates multiple meanings." },
                  { kind: "skill", name: "Clarification", statement: "Rewriting with explicit subjects removes ambiguity." },
                ],
                steps: [
                  { reasoning: "'they are finished' is ambiguous: does it mean the students are finished or the essays are finished?", evidence: "when they are finished", marks: 1, markCode: "AO2" },
                  { reasoning: "'so they can be marked' adds another unclear 'they' — essays or students?", marks: 1, markCode: "AO2" },
                  { reasoning: "Rewrite: 'When students have finished writing their essays, they should hand them to the teacher so the teacher can mark them.'", marks: 2, markCode: "AO2" },
                  { reasoning: "Explicit subjects ('students', 'the teacher') remove all pronoun ambiguity.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(5),
                finalAnswer: "The pronoun 'they' is ambiguous; rewrite with explicit subjects: 'When students have finished writing their essays, they should hand them to the teacher so the teacher can mark them.'",
                commonErrors: ["Identifying ambiguity without rewriting the sentence."],
              },
            },
            {
              id: "el10-u5-clarity-precision-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A student's essay uses only short simple sentences: 'She ran. She was fast. She won. She was happy.' Analyse the effect and explain how sentence variety would improve it.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Sentence variety", statement: "Mixing sentence types creates rhythm and emphasis." },
                  { kind: "skill", name: "Style", statement: "Monotonous structure bores the reader." },
                ],
                steps: [
                  { reasoning: "The repeated simple sentences create a monotonous, childish rhythm.", evidence: "She ran. She was fast. She won. She was happy.", marks: 1, markCode: "AO2" },
                  { reasoning: "All sentences are similar length and structure, so nothing stands out.", marks: 1, markCode: "AO2" },
                  { reasoning: "Combine with compound/complex: 'Because she was fast, she ran ahead and won; she was delighted.'", marks: 1, markCode: "AO2" },
                  { reasoning: "Variety creates rhythm: a longer sentence builds, a short one lands with emphasis.", marks: 1, markCode: "AO2" },
                  { reasoning: "It also allows causal links ('because') to show relationships between ideas.", marks: 1, markCode: "AO2" },
                  { reasoning: "Effective writing alternates sentence types to guide the reader's pace and attention.", marks: 1, markCode: "AO2" },
                ],
                levels: bands(6),
                finalAnswer: "Uniform simple sentences are monotonous; mixing compound and complex sentences creates rhythm, emphasis and clearer relationships.",
                commonErrors: ["Suggesting only longer sentences; variety means mixing types."],
              },
            },
            {
              id: "el10-u5-clarity-precision-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: UNCLEAR,
              stem: "Read the ambiguous sentence and answer the questions that follow.",
              parts: [
                { label: "a", prompt: "Explain the two possible meanings of the sentence.", marks: 3 },
                { label: "b", prompt: "Rewrite the sentence to remove the ambiguity.", marks: 3 },
                { label: "c", prompt: "Explain two techniques you used to clarify it.", marks: 2 },
                { label: "d", prompt: "Describe how you would check a whole essay for ambiguity.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Ambiguity", statement: "Unclear pronoun reference creates multiple readings." },
                  { kind: "skill", name: "Editing for clarity", statement: "Explicit subjects and careful pronouns prevent ambiguity." },
                ],
                steps: [
                  { part: "a", reasoning: "Meaning 1: students hand in essays when the students have finished writing.", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "Meaning 2: students hand in essays when the essays are finished (already written).", marks: 1, markCode: "AO1" },
                  { part: "a", reasoning: "The pronoun 'they' could refer to students or essays.", marks: 1, markCode: "AO1" },
                  { part: "b", reasoning: "Rewrite: 'When students have finished writing their essays, they should hand them to the teacher so the teacher can mark them.'", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "Explicit subject 'students' replaces ambiguous 'they'.", marks: 1, markCode: "AO5" },
                  { part: "b", reasoning: "'the teacher can mark them' clarifies who marks.", marks: 1, markCode: "AO5" },
                  { part: "c", reasoning: "Technique 1: replaced ambiguous pronouns with explicit subjects.", marks: 1, markCode: "AO2" },
                  { part: "c", reasoning: "Technique 2: split the sentence to make the sequence of actions clear.", marks: 1, markCode: "AO2" },
                  { part: "d", reasoning: "Read each sentence asking 'who does what?'; check every pronoun's referent.", marks: 1, markCode: "AO5" },
                  { part: "d", reasoning: "If a sentence has two possible meanings, rewrite with explicit subjects.", marks: 1, markCode: "AO5" },
                ],
                levels: [
                  ...bands(3, "a"),
                  ...bands(3, "b"),
                  ...bands(2, "c"),
                  ...bands(2, "d"),
                ],
                finalAnswer: "(a) 'they' = students or essays. (b) 'When students have finished writing their essays, they should hand them to the teacher so the teacher can mark them.' (c) Explicit subjects and sentence splitting. (d) Check each pronoun's referent.",
                commonErrors: ["Identifying ambiguity without a clean rewrite.", "Leaving pronouns that could still confuse."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "el10-u5-editing-notes",
      title: "Editing and improving writing — notes",
      summary: "Edit in passes (meaning, spelling, grammar, word choice, structure); improve clarity with concision, active voice, sentence variety and unambiguous pronouns.",
      sections: [
        { heading: "Key idea", body: "Systematic editing in passes catches more errors than one read-through." },
        { heading: "Error types", body: "Spelling, homophones, grammar, punctuation, word choice and structure each need separate attention." },
        { heading: "Improvement", body: "Concision, active voice, sentence variety and clear pronoun reference strengthen writing." },
      ],
    },
  },
];
