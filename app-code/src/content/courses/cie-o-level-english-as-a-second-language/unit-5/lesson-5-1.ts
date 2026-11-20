import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "oles-u5-lesson-5-1",
  code: "5-1",
  title: "Sentence structure and verb forms",
  goal: "I CAN write grammatically correct sentences with accurate verb forms.",
  standards: ["1120 Grammar: sentences and verbs"],
  vocabulary: [
    { term: "Clause", definition: "A group of words with a subject and verb." },
    { term: "Tense", definition: "The form of a verb showing time — past, present, future." },
    { term: "Subject-verb agreement", definition: "The verb must match the subject in number — 'he goes', 'they go'." },
    { term: "Fragment", definition: "An incomplete sentence missing a subject or verb." },
    { term: "Run-on", definition: "Two complete sentences joined without punctuation or a conjunction." },
  ],
  concepts: [
    {
      id: "oles-u5-sentence",
      title: "Building correct sentences",
      skill: "Avoid fragments, run-ons and agreement errors.",
      lesson: {
        sections: [
          { heading: "Sentence completeness", body: "Every sentence needs a subject and a verb expressing a complete thought. 'Running down the street' is a fragment — add 'was' and a subject: 'She was running down the street.' Check each sentence can stand alone." },
          { heading: "Agreement", body: "The verb agrees with its subject: 'The students study' but 'The student studies'. Tricky cases: 'Everyone is' (singular), 'The team are' (British plural acceptable). Watch for phrases between subject and verb that confuse agreement." },
        ],
        keyFormulas: [
          { name: "Agreement", statement: "Subject number = verb form: he goes / they go." },
        ],
        workedExample: {
          problem: "Correct: 'The list of items are on the desk.'",
          solution: "Subject is 'list' (singular), not 'items' → 'The list of items is on the desk.'",
        },
      },
      questions: [
        {
          id: "oles-u5-se-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A complete sentence needs…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A subject and a verb" },
            { id: "b", text: "Only a verb" },
            { id: "c", text: "Only a noun" },
            { id: "d", text: "A question mark" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Sentence", statement: "Subject + verb + complete thought." }], steps: [{ reasoning: "Both subject and verb are required.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** A subject and a verb" },
        },
        {
          id: "oles-u5-se-q2", difficulty: "core", totalMarks: 2,
          stem: "Choose the correct verb: 'Everyone ___ welcome.' (is/are)",
          response: { type: "mcq", choices: [
            { id: "a", text: "is" }, { id: "b", text: "are" }, { id: "c", text: "were" }, { id: "d", text: "be" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Indefinite pronouns", statement: "Everyone/everybody = singular." }], steps: [
            { reasoning: "'Everyone' is singular → 'is'.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** is" },
        },
        {
          id: "oles-u5-se-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to check a sentence for subject-verb agreement.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Agreement check", statement: "Find true subject, ignore middle phrases." }], steps: [
            { reasoning: "Identify the true subject — ignore words between subject and verb.", marks: 1, markCode: "AO2" },
            { reasoning: "Decide if subject is singular or plural.", marks: 1, markCode: "AO2" },
            { reasoning: "Match the verb form to that number.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear method.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Find true subject → number → match verb." },
        },
        {
          id: "oles-u5-se-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Sentence accuracy review.",
          parts: [
            { label: "a", prompt: "What makes a complete sentence?", marks: 2 },
            { label: "b", prompt: "What is a fragment?", marks: 2 },
            { label: "c", prompt: "What is subject-verb agreement?", marks: 2 },
            { label: "d", prompt: "How do you fix a run-on?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Sentences", statement: "Complete + agreed + punctuated." }], steps: [
            { part: "a", reasoning: "Subject + verb expressing a complete thought.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "An incomplete sentence missing subject or verb.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Verb form matches subject number.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Split into two sentences or join with conjunction/semicolon.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Two valid fixes.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) subject+verb (b) incomplete (c) number match (d) split or join",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u5-se-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is a complete sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The old man fed the birds." },
            { id: "b", text: "Running down the street." },
            { id: "c", text: "Because it was late." },
            { id: "d", text: "The big red car." },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Complete sentence", statement: "Subject + verb + complete thought." }], steps: [{ reasoning: "Only (a) has a subject, a verb and a complete thought.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** The old man fed the birds." },
        },
        {
          id: "oles-u5-se-q6", difficulty: "core", totalMarks: 2,
          stem: "Choose the correct verb: 'Neither of the answers ___ correct.' (is/are)",
          response: { type: "mcq", choices: [
            { id: "a", text: "is" }, { id: "b", text: "are" }, { id: "c", text: "were" }, { id: "d", text: "be" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Agreement", statement: "Neither = singular." }], steps: [
            { reasoning: "'Neither' takes a singular verb.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** is" },
        },
        {
          id: "oles-u5-se-q7", difficulty: "core", totalMarks: 2,
          stem: "Rewrite as a complete sentence: 'Walking to school every morning.'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Fixing fragments", statement: "Add subject and finite verb." }], steps: [
            { reasoning: "Add a subject and a finite verb, e.g. 'She walks to school every morning.'", marks: 1, markCode: "AO2" },
            { reasoning: "The result is a complete sentence.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'She walks to school every morning.'" },
        },
        {
          id: "oles-u5-se-q8", difficulty: "challenge", totalMarks: 4,
          stem: "Correct this sentence and name the error: 'The boys was playing football.'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Agreement", statement: "Plural subject needs plural verb." }], steps: [
            { reasoning: "The error is subject-verb agreement.", marks: 1, markCode: "AO2" },
            { reasoning: "The subject 'boys' is plural.", marks: 1, markCode: "AO1" },
            { reasoning: "Use 'were' instead of 'was'.", marks: 1, markCode: "AO2" },
            { reasoning: "'The boys were playing football.'", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Agreement error → 'The boys were playing football.'" },
        },
        {
          id: "oles-u5-se-q9", difficulty: "foundation", totalMarks: 1,
          stem: "A fragment is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An incomplete sentence" },
            { id: "b", text: "A very short sentence" },
            { id: "c", text: "A question" },
            { id: "d", text: "A command" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Fragment", statement: "Missing subject or verb." }], steps: [{ reasoning: "A fragment cannot stand alone as a complete thought.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** An incomplete sentence" },
        },
        {
          id: "oles-u5-se-q10", difficulty: "core", totalMarks: 2,
          stem: "What is a run-on sentence?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Run-on", statement: "Two sentences joined without punctuation or conjunction." }], steps: [
            { reasoning: "Two complete sentences joined with no punctuation or linking word.", marks: 1, markCode: "AO2" },
            { reasoning: "Example: 'I like tea I drink it every day.'", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Two complete sentences joined without punctuation or a conjunction." },
        },
        {
          id: "oles-u5-se-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two ways to fix a run-on sentence, with an example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Fixing run-ons", statement: "Split or join properly." }], steps: [
            { reasoning: "Split it into two separate sentences with a full stop.", marks: 1, markCode: "AO2" },
            { reasoning: "Join with a conjunction or semicolon.", marks: 1, markCode: "AO2" },
            { reasoning: "Example: 'I like tea, and I drink it every day.' or two sentences.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Split into two sentences, or join with a conjunction/semicolon." },
        },
        {
          id: "oles-u5-se-q12", difficulty: "core", totalMarks: 2,
          stem: "Choose the correct verb: 'She ___ her homework yesterday.' (do/does/did/done)",
          response: { type: "mcq", choices: [
            { id: "a", text: "did" }, { id: "b", text: "do" }, { id: "c", text: "does" }, { id: "d", text: "done" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Past tense", statement: "'Yesterday' needs past form." }], steps: [
            { reasoning: "'Yesterday' signals past tense → 'did'.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** did" },
        },
        {
          id: "oles-u5-se-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Why is 'The news are good' wrong?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Uncountable nouns", statement: "News is singular." }], steps: [
            { reasoning: "'News' is uncountable and always singular.", marks: 1, markCode: "AO1" },
            { reasoning: "It takes 'is', not 'are'.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct: 'The news is good.'", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "'News' is singular → 'The news is good.'" },
        },
        {
          id: "oles-u5-se-q14", difficulty: "foundation", totalMarks: 1,
          stem: "'The furniture ___ new.' — choose the verb.",
          response: { type: "mcq", choices: [
            { id: "a", text: "is" }, { id: "b", text: "are" }, { id: "c", text: "were" }, { id: "d", text: "be" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Uncountable", statement: "Furniture is singular." }], steps: [{ reasoning: "'Furniture' is uncountable → singular 'is'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** is" },
        },
        {
          id: "oles-u5-se-q15", difficulty: "challenge", totalMarks: 9,
          stem: "Sentence accuracy practice.",
          parts: [
            { label: "a", prompt: "Fix the fragment: 'Because it was raining.'", marks: 2 },
            { label: "b", prompt: "Fix the agreement: 'Each of the boys have a pen.'", marks: 2 },
            { label: "c", prompt: "Fix the run-on: 'I like tea I drink it daily.'", marks: 2 },
            { label: "d", prompt: "Why does sentence accuracy matter in the exam?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Sentence accuracy", statement: "Complete, agreed, punctuated." }], steps: [
            { part: "a", reasoning: "Add a main clause, e.g. 'We stayed home because it was raining.'", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Complete sentence given.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "'Each' is singular → 'Each of the boys has a pen.'", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct fix.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Split or join: 'I like tea, and I drink it daily.'", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct fix.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Errors hide meaning and lose marks across all writing tasks.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Exam consequence explained.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Justified answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) add clause (b) has (c) split/join (d) errors lose marks",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u5-se-q16", difficulty: "core", totalMarks: 2,
          stem: "Which sentence has correct subject-verb agreement?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Each of the students have a book." },
            { id: "b", text: "Each of the students has a book." },
            { id: "c", text: "The students has a book." },
            { id: "d", text: "A book have many pages." },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Agreement", statement: "Each = singular; students = plural." }], steps: [
            { reasoning: "'Each' is singular → 'has'; 'students' is plural → 'have'.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(b)** Each of the students has a book." },
        },
      ],
    },
    {
      id: "oles-u5-verbs",
      title: "Verb forms and tenses",
      skill: "Use correct tense forms consistently in writing.",
      lesson: {
        sections: [
          { heading: "Tense consistency", body: "Keep one main tense unless the time actually changes. A story in past tense stays past: 'She walked to school and opened her bag.' Shifting to present ('She walks... and opens') without reason confuses the reader." },
          { heading: "Common verb errors", body: "Watch: third person -s ('he goes' not 'he go'); past of irregular verbs ('went' not 'goed'); present perfect with 'have/has' ('I have finished'); and -ing forms needing helpers ('is running' not 'is run')." },
        ],
        keyFormulas: [
          { name: "Tense", statement: "One main tense per text; irregular past forms must be memorised." },
        ],
        workedExample: {
          problem: "Correct the tense shift: 'Yesterday I go to the market and buy fruit.'",
          solution: "All past: 'Yesterday I went to the market and bought fruit.'",
        },
      },
      questions: [
        {
          id: "oles-u5-vb-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The past tense of 'go' is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "went" }, { id: "b", text: "goed" }, { id: "c", text: "gone" }, { id: "d", text: "going" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Irregular verb", statement: "go → went → gone." }], steps: [{ reasoning: "'Go' is irregular: went.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** went" },
        },
        {
          id: "oles-u5-vb-q2", difficulty: "core", totalMarks: 2,
          stem: "Choose the correct form: 'She ___ to school every day.' (walk/walks/walking)",
          response: { type: "mcq", choices: [
            { id: "a", text: "walks" }, { id: "b", text: "walk" }, { id: "c", text: "walking" }, { id: "d", text: "walked" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Third person -s", statement: "He/she/it + verb-s." }], steps: [
            { reasoning: "'She' is third person singular → 'walks'.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** walks" },
        },
        {
          id: "oles-u5-vb-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why tense consistency matters in a story.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Tense consistency", statement: "Stable time frame keeps reader oriented." }], steps: [
            { reasoning: "A story set in the past must stay in the past.", marks: 1, markCode: "AO2" },
            { reasoning: "Shifts confuse the timeline and break immersion.", marks: 1, markCode: "AO2" },
            { reasoning: "Only change tense when the time genuinely changes.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Consistent tense keeps the timeline clear for the reader." },
        },
        {
          id: "oles-u5-vb-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Verb forms review.",
          parts: [
            { label: "a", prompt: "What is tense consistency?", marks: 2 },
            { label: "b", prompt: "Give the past of 'go' and 'buy'.", marks: 2 },
            { label: "c", prompt: "When is third-person -s needed?", marks: 2 },
            { label: "d", prompt: "Why learn irregular verbs?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Verbs", statement: "Consistent tense + correct forms." }], steps: [
            { part: "a", reasoning: "Keeping one main tense unless time genuinely changes.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "went and bought.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "With he/she/it or singular subjects in present simple.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct rule.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "They don't follow the -ed rule — must be memorised.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains difficulty.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Common exam errors.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) one tense (b) went/bought (c) he/she/it (d) no -ed rule",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u5-5-1-notes", title: "Sentences and verbs — notes", summary: "Completeness, agreement and tense control.",
      sections: [
        { heading: "Sentences", body: "Subject + verb + complete thought. Watch fragments, run-ons and agreement traps like 'the list of items is'." },
        { heading: "Verbs", body: "One main tense per text; third-person -s; irregular past forms (went, bought) must be memorised." },
      ] },
  ],
};
