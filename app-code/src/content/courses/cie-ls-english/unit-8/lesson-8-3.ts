import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "cile-u8-lesson-8-3",
  code: "8-3",
  title: "Tense, agreement and paragraph mechanics",
  goal: "I CAN maintain tense consistency, subject-verb agreement and coherent paragraphing in extended writing.",
  standards: ["0861 Grammar: accuracy and mechanics"],
  vocabulary: [
    { term: "Tense consistency", definition: "Keeping the same time frame throughout a text unless deliberately shifting." },
    { term: "Subject-verb agreement", definition: "The verb must match the subject in number — 'she walks', 'they walk'." },
    { term: "Singular/plural", definition: "One vs many — affects verb form and pronoun choice." },
    { term: "Paragraph unity", definition: "Every paragraph develops one main idea." },
    { term: "Run-on sentence", definition: "Two independent clauses joined without proper punctuation or conjunction." },
    { term: "Fragment", definition: "An incomplete sentence missing a subject or verb." },
  ],
  concepts: [
    {
      id: "cile-u8-tense-agreement",
      title: "Tense and agreement",
      skill: "Maintain tense consistency and subject-verb agreement throughout extended writing.",
      lesson: {
        sections: [
          {
            heading: "Tense consistency",
            body: "Choose a time frame and hold it:\n\n- **Past**: 'She walked to school.' (narrative, recount)\n- **Present**: 'She walks to school.' (general truth, instructions)\n- **Future**: 'She will walk to school.' (predictions, plans)\n\nShifts must be deliberate — 'She walked in, then she is tired' is an error unless intentional.",
          },
          {
            heading: "Subject-verb agreement",
            body: "The verb matches the subject's number:\n\n- Singular: 'The dog barks', 'She is', 'He has'.\n- Plural: 'The dogs bark', 'They are', 'They have'.\n\nTricky cases: 'The group of students is' (singular — group is the subject), 'Neither of them is' (singular).",
          },
          {
            heading: "Common errors",
            body: "- 'She don't' → 'She doesn't'\n- 'They was' → 'They were'\n- 'The data is' → 'The data are' (or 'data is' in informal usage — check style guide)\n- Run-ons: 'I went home I was tired' → needs punctuation/conjunction.",
          },
        ],
        keyFormulas: [
          { name: "Accuracy rules", statement: "Hold tense; match verb to subject number; punctuate clause boundaries." },
        ],
        workedExample: {
          problem: "Fix: 'The team of players are winning. They was happy.'",
          solution: "'The team of players is winning. They were happy.' — 'team' is singular (is); 'they' is plural (were).",
        },
      },
      questions: [
        {
          id: "cile-u8-tense-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence has correct subject-verb agreement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The team are winning." },
              { id: "b", text: "The team is winning." },
              { id: "c", text: "The team were winning." },
              { id: "d", text: "The team be winning." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Agreement", statement: "'Team' is singular → 'is'." },
            ],
            steps: [
              { reasoning: "'Team' is singular collective noun → 'is'.", working: "\\text{'is'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The team is winning.",
            commonErrors: ["Choosing (a) — 'players' might tempt plural, but 'team' is the subject."],
          },
        },
        {
          id: "cile-u8-tense-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fix the tense inconsistency: 'She walked to school. She is late for class.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tense consistency", statement: "Keep the same time frame unless shifting deliberately." },
            ],
            steps: [
              { reasoning: "Problem: 'walked' (past) then 'is' (present) — inconsistent.", working: "\\text{inconsistent}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: 'She walked to school. She was late for class.' — both past.", working: "\\text{both past}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'She walked to school. She was late for class.' — consistent past tense.",
            commonErrors: ["Changing 'walked' to 'walks' — either fix works, but consistency is key."],
          },
        },
        {
          id: "cile-u8-tense-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify and correct all errors: 'The group of students are studying. They was excited about the trip. Me and him went to the shop.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Agreement and case", statement: "Subject-verb agreement and pronoun case must be correct." },
            ],
            steps: [
              { reasoning: "Error 1: 'group...are' → 'group...is' (singular).", working: "\\text{'is'}", marks: 1, markCode: "AO2" },
              { reasoning: "Error 2: 'was' → 'were' (they = plural).", working: "\\text{'were'}", marks: 1, markCode: "AO2" },
              { reasoning: "Error 3: 'Me and him' → 'He and I' (subject pronouns).", working: "\\text{'He and I'}", marks: 1, markCode: "AO2" },
              { reasoning: "All corrections applied.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'The group of students is studying. They were excited about the trip. He and I went to the shop.'",
            commonErrors: ["Missing 'Me and him' — check pronoun case, not just agreement."],
          },
        },
        {
          id: "cile-u8-tense-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are proofreading an extended passage for accuracy.",
          parts: [
            { label: "a", prompt: "Identify a tense inconsistency.", marks: 2 },
            { label: "b", prompt: "Identify a subject-verb agreement error.", marks: 2 },
            { label: "c", prompt: "Identify a pronoun case error.", marks: 2 },
            { label: "d", prompt: "Correct all three errors.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Accuracy checking", statement: "Tense, agreement and pronoun case are the main accuracy checks." },
            ],
            steps: [
              { part: "a", reasoning: "Tense inconsistency identified.", working: "\\text{tense}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Example given.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Agreement error identified.", working: "\\text{agreement}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Example given.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Pronoun case error identified.", working: "\\text{case}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Example given.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "All corrections accurate.", working: "\\text{corrections}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Corrections maintain meaning.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "No new errors introduced.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) tense error + example (b) agreement error + example (c) pronoun error + example (d) all corrected",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Tense error identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Agreement error identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Pronoun error identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "All corrections accurate.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Missing pronoun case — check 'I/me', 'he/him', 'she/her', 'they/them'."],
          },
        },
      ],
    },
    {
      id: "cile-u8-paragraph-mechanics",
      title: "Paragraph and sentence mechanics",
      skill: "Avoid fragments, run-ons and ensure paragraphs develop one coherent idea.",
      lesson: {
        sections: [
          {
            heading: "Fragments",
            body: "A fragment is an incomplete sentence — missing subject or verb:\n\n- 'Running down the street.' (no subject)\n- 'Because it was late.' (dependent clause alone)\n\nFix: add the missing element or attach to another sentence.",
          },
          {
            heading: "Run-ons",
            body: "A run-on joins two independent clauses without proper punctuation:\n\n- 'I went home I was tired.' → 'I went home. I was tired.' or 'I went home because I was tired.'\n\nFix: full stop, semicolon, comma + conjunction, or subordinating conjunction.",
          },
          {
            heading: "Paragraph unity",
            body: "Each paragraph develops ONE idea:\n\n- Topic sentence states the idea.\n- Supporting sentences develop it.\n- If a paragraph has two ideas, split it or combine them logically.",
          },
        ],
        keyFormulas: [
          { name: "Sentence health", statement: "Complete sentence = subject + verb + complete thought. Paragraph = one idea." },
        ],
        workedExample: {
          problem: "Fix: 'The bell rang. Everyone rushed out. Because it was recess.'",
          solution: "'Because it was recess, everyone rushed out when the bell rang.' — the fragment is absorbed into a complete complex sentence.",
        },
      },
      questions: [
        {
          id: "cile-u8-mech-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a fragment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The bell rang." },
              { id: "b", text: "Running down the street." },
              { id: "c", text: "Everyone left." },
              { id: "d", text: "She was tired." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fragment", statement: "Incomplete sentence missing subject or verb." },
            ],
            steps: [
              { reasoning: "'Running down the street' has no subject — who is running?",
                working: "\\text{no subject}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Running down the street.",
            commonErrors: ["Choosing (a) — that is complete."],
          },
        },
        {
          id: "cile-u8-mech-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fix the run-on: 'I went home I was tired.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Run-on fix", statement: "Two independent clauses need punctuation or conjunction." },
            ],
            steps: [
              { reasoning: "Problem: two complete thoughts joined without punctuation.", working: "\\text{run-on}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: 'I went home. I was tired.' or 'I went home because I was tired.'", working: "\\text{period or 'because'}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'I went home. I was tired.' or 'I went home because I was tired.'",
            commonErrors: ["'I went home, I was tired' — comma splice is still wrong."],
          },
        },
        {
          id: "cile-u8-mech-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A paragraph reads: 'The market was busy. The food was delicious. My friend lives in Paris. The weather was sunny.' Identify the paragraph unity problem and fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Paragraph unity", statement: "One paragraph = one idea; unrelated sentences break unity." },
            ],
            steps: [
              { reasoning: "Problem: 'My friend lives in Paris' is unrelated to market/food/weather.", working: "\\text{unrelated}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: remove the unrelated sentence or move it to a different paragraph.", marks: 1, markCode: "AO2" },
              { reasoning: "The remaining sentences share a theme (market visit).", working: "\\text{theme}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: unified paragraph.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Remove 'My friend lives in Paris' — it breaks the paragraph's unity. The remaining sentences (market, food, weather) all describe the visit coherently.",
            commonErrors: ["Keeping all sentences — unity requires relevance, not just grammatical correctness."],
          },
        },
        {
          id: "cile-u8-mech-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are proofreading a paragraph for sentence-level errors.",
          parts: [
            { label: "a", prompt: "Identify a fragment.", marks: 2 },
            { label: "b", prompt: "Identify a run-on.", marks: 2 },
            { label: "c", prompt: "Identify a paragraph unity problem.", marks: 2 },
            { label: "d", prompt: "Correct all three issues.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mechanics checking", statement: "Fragments, run-ons and unity are the main sentence-level checks." },
            ],
            steps: [
              { part: "a", reasoning: "Fragment identified.", working: "\\text{fragment}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Example given.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Run-on identified.", working: "\\text{run-on}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Example given.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Unity problem identified.", working: "\\text{unity}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Example given.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Corrections accurate.", working: "\\text{corrections}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Corrections maintain meaning.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "All issues resolved.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) fragment + example (b) run-on + example (c) unity problem + example (d) all corrected",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Fragment identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Run-on identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Unity problem identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "All corrections accurate.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Missing one error type — check fragments, run-ons AND unity."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u8-accuracy-mechanics-notes",
      title: "Tense, agreement and mechanics — revision notes",
      summary: "Tense consistency, subject-verb agreement, fragments, run-ons and paragraph unity.",
      sections: [
        {
          heading: "Accuracy",
          body: "Hold tense; match verb to subject number ('team is', 'they were'); check pronoun case ('he and I', not 'me and him').",
        },
        {
          heading: "Sentence mechanics",
          body: "Fragments = incomplete (missing subject/verb). Run-ons = two clauses without punctuation. Fix with full stops, conjunctions or restructuring.",
        },
        {
          heading: "Paragraph unity",
          body: "One idea per paragraph. Unrelated sentences break unity — remove or relocate them.",
        },
      ],
    },
  ],
};
