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
            { id: "a", text: "She walks to school." }, { id: "b", text: "She walked to school." }, { id: "c", text: "She will walk to school." }, { id: "d", text: "She is walking." },
          ], correctChoiceId: "b" },
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
