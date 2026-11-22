import type { Lesson } from "../../../types.ts";

export const lesson210: Lesson = {
  id: "cipe-u2-lesson-2-10",
  code: "2-10",
  title: "Stage 4 — Tense, Agreement and Complex Sentences",
  goal: "I CAN use correct tense, subject-verb agreement and complex sentences.",
  standards: ["Cambridge Primary English 0058 Stage 4: grammar",
  "Cambridge Primary English 0058 framework substrands: 4Rg, 4Wg"],
  stage: 4,
  vocabulary: [
    { term: "Tense", definition: "When the action happens: past, present or future." },
    { term: "Subject-verb agreement", definition: "Verb matches subject: 'he runs' not 'he run'." },
    { term: "Complex sentence", definition: "Main clause + subordinate clause joined by a connective." },
    { term: "Connective", definition: "Joining word: because, although, when, if." },
    { term: "Clause", definition: "Part of a sentence with its own verb." },
  ],
  concepts: [
    {
      id: "cipe-u2-s10-grammar",
      title: "Tense, agreement and complex sentences",
      skill: "Use correct tenses, agreement and subordinate clauses at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Tense and agreement",
            body: "Past tense tells what happened (walked, ate); present tells now (walk, eats); future tells what will happen (will walk). Verbs must agree with the subject — singular subjects take -s in present tense: 'she walks', 'they walk'. Irregular verbs change completely: go→went, eat→ate, run→ran.",
          },
          {
            heading: "Complex sentences",
            body: "A complex sentence combines a main clause (complete idea) with a subordinate clause (needs the main clause): 'We stayed inside because it was raining.' The subordinate clause starts with a connective — because, although, when, if, while, since. It adds reason, time or condition to the main idea.",
          },
        ],
        keyFormulas: [
          { name: "Agreement", statement: "singular subject + verb-s: he walks" },
          { name: "Complex sentence", statement: "main clause + connective + subordinate clause" },
        ],
        workedExample: {
          problem: "Fix the agreement: 'The dogs barks loudly.'",
          solution: "'The dogs bark loudly.' — plural subject takes plural verb (no -s).",
        },
      },
      questions: [
        {
          id: "cipe-u2-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is in the past tense?",
          response: { type: "mcq", choices: [
            { id: "a", text: "She walks to school." },
            { id: "b", text: "She will walk to school." },
            { id: "c", text: "She is walking." },
            { id: "d", text: "She walked to school." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Past tense", statement: "Describes completed actions." }],
            steps: [{ reasoning: "'walked' is past tense.", marks: 1, markCode: "AO1" }],
            finalAnswer: "She walked to school.",
          },
        },
        {
          id: "cipe-u2-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Choose the correct verb: 'The cat ___ on the mat.' (sit/sits)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Agreement", statement: "Singular subject takes -s verb." }],
            steps: [
              { reasoning: "'The cat' is singular → sits.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: sits.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "sits",
          },
        },
        {
          id: "cipe-u2-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add a subordinate clause: 'We went home.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Complex sentences", statement: "Main clause + connective + subordinate." }],
            steps: [
              { reasoning: "Choose a connective: because/when/although.", marks: 1, markCode: "AO2" },
              { reasoning: "Add subordinate clause with its own verb.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. 'We went home because it was dark.'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'We went home because it was dark.'",
          },
        },
        {
          id: "cipe-u2-gr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Correct this paragraph's grammar and tense: 'Yesterday the boy walk to shop. He buyed some bread. The bread was good so him eat it all. Now he go home.' Rewrite with correct verbs and explain each change.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tense and agreement editing", statement: "Past tense verbs; correct agreement; standard forms." }],
            steps: [
              { reasoning: "'walk' → 'walked' (past tense, yesterday).", marks: 1, markCode: "AO2" },
              { reasoning: "'buyed' → 'bought' (irregular past).", marks: 1, markCode: "AO2" },
              { reasoning: "'him eat' → 'he ate' (subject pronoun + past tense).", marks: 1, markCode: "AO2" },
              { reasoning: "'go home' → 'goes home' or 'went home' (present/future agreement).", marks: 1, markCode: "AO2" },
              { reasoning: "Corrected: 'Yesterday the boy walked to the shop. He bought some bread…'", marks: 1, markCode: "AO2" },
              { reasoning: "Each change explained with reason.", marks: 1, markCode: "AO3" },
              { reasoning: "Consistent tense maintained.", marks: 1, markCode: "AO3" },
              { reasoning: "Full corrected paragraph coherent.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'Yesterday the boy walked to the shop. He bought some bread. The bread was good so he ate it all. Now he goes home.'",
            levels: [
              { level: "Level 3", marks: "7-8", descriptor: "All verbs corrected with accurate explanations; consistent tense." },
              { level: "Level 2", marks: "4-6", descriptor: "Most errors corrected; explanations partly given." },
              { level: "Level 1", marks: "1-3", descriptor: "Some corrections; limited explanation." },
            ],
          },
        },
        {
          id: "cipe-u2-gr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is in the future tense?",
          response: { type: "mcq", choices: [
            { id: "a", text: "She is playing football." },
            { id: "b", text: "She plays football." },
            { id: "c", text: "She will play football." },
            { id: "d", text: "She played football." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Future tense", statement: "Describes what will happen." }],
            steps: [{ reasoning: "'will play' shows the future.", marks: 1, markCode: "AO1" }],
            finalAnswer: "She will play football.",
          },
        },
        {
          id: "cipe-u2-gr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct past tense of 'go'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "going" },
            { id: "b", text: "gone to" },
            { id: "c", text: "went" },
            { id: "d", text: "goed" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Irregular verbs", statement: "Some verbs change completely." }],
            steps: [{ reasoning: "go → went is an irregular past tense.", marks: 1, markCode: "AO1" }],
            finalAnswer: "went",
          },
        },
        {
          id: "cipe-u2-gr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "There are three tenses: past, present and future. How many is that? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Tenses", statement: "Past, present, future." }],
            steps: [
              { reasoning: "Three tenses listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-gr-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many words are in the sentence 'We stayed inside because it was raining'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Word counting", statement: "Count each word once." }],
            steps: [
              { reasoning: "We-stayed-inside-because-it-was-raining = 7 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cipe-u2-gr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a complex sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Run fast!" },
            { id: "b", text: "Cats and dogs." },
            { id: "c", text: "The dog barked." },
            { id: "d", text: "We stayed inside because it was raining." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Complex sentence", statement: "Main clause + subordinate clause." }],
            steps: [{ reasoning: "Option b has a main clause plus 'because' clause.", marks: 1, markCode: "AO2" }],
            finalAnswer: "We stayed inside because it was raining.",
          },
        },
        {
          id: "cipe-u2-gr-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Correct the agreement: 'He run to school every day.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Subject-verb agreement", statement: "Singular subject takes -s verb." }],
            steps: [
              { reasoning: "'He' is singular → 'runs'.", marks: 1, markCode: "AO1" },
              { reasoning: "Answer: 'He runs to school every day.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "He runs to school every day.",
          },
        },
        {
          id: "cipe-u2-gr-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word can start a subordinate clause?",
          response: { type: "mcq", choices: [
            { id: "a", text: "quickly" },
            { id: "b", text: "big" },
            { id: "c", text: "because" },
            { id: "d", text: "dog" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Connective", statement: "because/although/when/if start subordinate clauses." }],
            steps: [{ reasoning: "'because' is a connective that introduces a subordinate clause.", marks: 1, markCode: "AO1" }],
            finalAnswer: "because",
          },
        },
        {
          id: "cipe-u2-gr-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Join these sentences into one complex sentence: 'It was raining. We went for a walk.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Complex sentences", statement: "Connective + subordinate clause." }],
            steps: [
              { reasoning: "Choose a connective such as 'although' or 'because'.", marks: 1, markCode: "AO2" },
              { reasoning: "Combine into one sentence with correct punctuation.", marks: 1, markCode: "AO2" },
              { reasoning: "e.g. 'Although it was raining, we went for a walk.'", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. 'Although it was raining, we went for a walk.'",
          },
        },
        {
          id: "cipe-u2-gr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many clauses are in the sentence 'When the bell rang, the students ran outside'? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Clause", statement: "Part of a sentence with its own verb." }],
            steps: [
              { reasoning: "'When the bell rang' + 'the students ran outside' = 2 clauses.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipe-u2-gr-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between a main clause and a subordinate clause?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The main clause makes complete sense alone; the subordinate clause needs the main clause" },
            { id: "b", text: "They are the same" },
            { id: "c", text: "Subordinate clauses are always questions" },
            { id: "d", text: "Main clauses have no verbs" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Clause", statement: "Main = complete; subordinate = dependent." }],
            steps: [{ reasoning: "A subordinate clause cannot stand alone.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Main clause stands alone; subordinate needs it",
          },
        },
        {
          id: "cipe-u2-gr-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write three complex sentences about the weather, each using a different connective (because, although, when/if).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Complex sentences", statement: "Main + subordinate with varied connectives." }],
            steps: [
              { reasoning: "Three complex sentences written.", marks: 1, markCode: "AO2" },
              { reasoning: "Different connectives used (because, although, when/if).", marks: 1, markCode: "AO2" },
              { reasoning: "Each has a main clause and a subordinate clause.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'We stayed inside because it was raining. Although it was cold, we went out. When the sun came out, we played.'",
          },
        },
        {
          id: "cipe-u2-gr-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Edit this paragraph for tense consistency: 'Yesterday I walk to the park. I see a dog and it run fast. Now I am home and I eat my lunch.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Tense consistency", statement: "Match verbs to time." }],
            steps: [
              { reasoning: "'walk' → 'walked' (past, yesterday).", marks: 1, markCode: "AO1" },
              { reasoning: "'see' → 'saw', 'run' → 'ran' (past tense).", marks: 1, markCode: "AO1" },
              { reasoning: "'eat' → 'ate' (past) or kept consistent with 'now'.", marks: 1, markCode: "AO1" },
              { reasoning: "Corrected paragraph provided.", marks: 1, markCode: "AO2" },
              { reasoning: "Each correction explained or tense kept consistent.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Yesterday I walked to the park. I saw a dog and it ran fast. Now I am home and I ate my lunch.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-gr-notes",
      title: "Grammar — revision notes",
      summary: "Past/present/future; singular verb takes -s; complex = main + subordinate.",
      sections: [
        { heading: "Tense/agreement", body: "Match verb to time and subject; irregular verbs: go→went, eat→ate." },
        { heading: "Complex sentences", body: "Subordinate clause needs connective (because/when/although) and own verb." },
      ],
    },
  ],
};
