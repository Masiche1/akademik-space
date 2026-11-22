import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mla4-u3-lesson-3-1",
  code: "3-1",
  title: "Passive Voice and Conditionals",
  goal: "I CAN use the passive voice and first and second conditionals accurately in academic English.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion B: Reading",
    "Criterion C: Speaking",
  ],
  vocabulary: [
    { term: "Passive voice", definition: "A sentence structure where the subject receives the action, e.g. 'The letter was written.'" },
    { term: "Conditional", definition: "A sentence that describes a possible result depending on a condition." },
    { term: "If-clause", definition: "The part of a conditional sentence that states the condition." },
    { term: "Main clause", definition: "The part of a conditional sentence that states the result." },
    { term: "Real possibility", definition: "A situation that may happen, expressed with present tense in the if-clause." },
  ],
  concepts: [
    {
      id: "mla4-u3-passive-voice",
      title: "Using the passive voice",
      skill: "Form and use the passive voice to describe processes and actions where the doer is unknown or unimportant.",
      lesson: {
        sections: [
          {
            heading: "Active vs passive",
            body: "In an **active** sentence the subject does the action: 'The students wrote the essay.' In a **passive** sentence the subject receives the action: 'The essay was written by the students.' Use passive when the action matters more than who did it.",
          },
          {
            heading: "Forming the passive",
            body: "Use **be + past participle**: 'is made', 'was built', 'will be tested', 'has been completed'. The past participle often ends in -ed, but irregular verbs differ: 'written', 'eaten', 'taken', 'broken'.",
          },
          {
            heading: "When to use passive",
            body: "Use passive for processes and reports: 'The experiment was conducted...', 'The results were analysed...', 'New rules have been introduced...'. It is common in science, news and formal writing. Do not use it too often in conversation.",
          },
        ],
        keyFormulas: [
          { name: "Passive formula", statement: "be + past participle" },
          { name: "Examples", statement: "is made / was built / will be tested / has been completed" },
        ],
        workedExample: {
          problem: "Change to passive: 'The teacher marked the tests.'",
          solution: "'The tests were marked by the teacher.'",
        },
      },
      questions: [
        {
          id: "mla4-u3-passive-voice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is passive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The report was written by the students.'" },
              { id: "b", text: "'The students wrote the report.'" },
              { id: "c", text: "'The students will write the report.'" },
              { id: "d", text: "'The students are writing the report.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Passive voice", statement: "Subject receives action; uses be + past participle." }],
            steps: [{ reasoning: "Criterion B: Reading — option b is passive.", working: "passive", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 'The report was written by the students.'",
            commonErrors: ["Choosing active sentences."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-passive-voice-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Process Description",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "First, the ingredients are mixed. Then the mixture is heated for ten minutes. Finally, the bread is baked in the oven.",
          },
          stem: "Identify the passive verbs and explain why passive is used.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Passive recognition", statement: "Passive describes process steps where the doer is not important." }],
            steps: [
              { reasoning: "Criterion B: Reading — passive verbs: are mixed, is heated, is baked.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — passive focuses on process, not the person doing it.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — explanation is clear.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Passive verbs: are mixed, is heated, is baked; used because the process matters more than the doer.",
            commonErrors: ["Missing that passive focuses on process."],
            examinerNote: "Must identify verbs and function.",
          },
        },
        {
          id: "mla4-u3-passive-voice-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Active to Passive",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Rewrite these sentences in the passive voice.\n1. 'The scientists conducted the experiment.'\n2. 'A famous artist painted the mural.'\n3. 'The committee will announce the results tomorrow.'",
          },
          stem: "Rewrite the sentences in passive voice.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Passive formation", statement: "Use be + past participle correctly." }],
            steps: [
              { reasoning: "Criterion D: Writing — sentence 1: 'The experiment was conducted by the scientists.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — sentence 2: 'The mural was painted by a famous artist.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — sentence 3: 'The results will be announced by the committee tomorrow.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — all forms grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "1. The experiment was conducted by the scientists. 2. The mural was painted by a famous artist. 3. The results will be announced by the committee tomorrow.",
            commonErrors: ["Using wrong tense or past participle."],
            examinerNote: "All three sentences must be correct.",
          },
        },
        {
          id: "mla4-u3-passive-voice-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Writing Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Write a short process description using the passive voice. Topic: 'How chocolate is made' or 'How recycling works in our school'.",
          },
          stem: "Write the process description.",
          parts: [
            { label: "a", prompt: "Write one passive sentence describing the first step.", marks: 1 },
            { label: "b", prompt: "Write two passive sentences describing middle steps.", marks: 2 },
            { label: "c", prompt: "Write one passive sentence describing the final step.", marks: 2 },
            { label: "d", prompt: "Write a concluding sentence in active or passive voice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Process writing", statement: "Passive voice for process steps." }],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — first step uses correct passive.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — middle step 1 uses passive.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — middle step 2 uses passive.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final step uses passive.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final step is clear and relevant.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion is accurate and appropriate.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — language is clear and grammatical.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — process is logical and easy to follow.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) first passive step (b) two middle steps (c) final step (d) conclusion.",
            commonErrors: ["Mixing active and passive unnecessarily."],
            examinerNote: "Passive should be used consistently for process.",
          },
        },
        {
          id: "mla4-u3-passive-voice-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is in the passive voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The chef cooked the meal.'" },
              { id: "b", text: "'The chef is cooking the meal.'" },
              { id: "c", text: "'The chef will cook the meal.'" },
              { id: "d", text: "'The meal was cooked by the chef.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Passive voice", statement: "be + past participle; subject receives action." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'was cooked' is passive.", working: "passive", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 'The meal was cooked by the chef.'",
            commonErrors: ["Choosing active sentences."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-passive-voice-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the passive form of 'The students completed the project'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The project completed the students.'" },
              { id: "b", text: "'The project is completing.'" },
              { id: "c", text: "'The project was completed by the students.'" },
              { id: "d", text: "'The students were completed.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Passive formation", statement: "Object becomes subject + be + past participle." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'project' becomes subject; 'was completed' is passive.", working: "was completed", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'The project was completed by the students.'",
            commonErrors: ["Wrong past participle or tense."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-passive-voice-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Process Description",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "First, the water is boiled. Then the tea leaves are added. Finally, the tea is poured into cups.",
          },
          stem: "Identify the passive verbs in the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Passive recognition", statement: "be + past participle forms passive." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — passive verbs: is boiled, are added, is poured.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — all three correctly identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "is boiled, are added, is poured",
            commonErrors: ["Missing one verb."],
            examinerNote: "All three needed.",
          },
        },
        {
          id: "mla4-u3-passive-voice-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "'The letter was written yesterday.'",
          },
          stem: "How many words form the passive verb phrase 'was written'?",
          response: {
            type: "numeric",
            parts: [
              { label: "words", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Passive structure", statement: "Passive = auxiliary 'be' + past participle." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'was written' = 2 words (be + participle).", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**2** words",
            commonErrors: ["Counting the whole sentence."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mla4-u3-passive-voice-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Sentences",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "1. 'The windows were cleaned this morning.'\n2. 'The students cleaned the windows.'\n3. 'The windows are being cleaned.'",
          },
          stem: "Which sentences use the passive voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All three sentences" },
              { id: "b", text: "None of them" },
              { id: "c", text: "Sentences 1 and 3" },
              { id: "d", text: "Only sentence 2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Passive recognition", statement: "be + past participle = passive." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 1: 'were cleaned' passive; 2: 'students cleaned' active; 3: 'are being cleaned' passive.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — correct pair identified.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sentences 1 and 3",
            commonErrors: ["Missing the continuous passive in 3."],
            examinerNote: "B2 for (b).",
          },
        },
        {
          id: "mla4-u3-passive-voice-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Active to Passive",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Rewrite in the passive voice: 'The factory produces cars.'",
          },
          stem: "Rewrite the sentence in the passive voice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Passive formation", statement: "be + past participle with correct tense." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'cars' becomes subject: 'Cars are produced...'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct present passive: 'are produced'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — optional 'by the factory' included correctly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'Cars are produced by the factory.'",
            commonErrors: ["Wrong tense or missing 'be'."],
            examinerNote: "Present simple passive needed.",
          },
        },
        {
          id: "mla4-u3-passive-voice-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Sentence Choice",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "A science report describes an experiment. Should the writer use 'We heated the solution' or 'The solution was heated'?",
          },
          stem: "Explain which is better for a formal report and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Passive in reports", statement: "Passive focuses on process, not the doer." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'The solution was heated' is better for formal reports.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — passive focuses on the process/result, not 'we'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explanation is clear and accurate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'The solution was heated' — passive is standard in formal/scientific reports.",
            commonErrors: ["Choosing active without justification."],
            examinerNote: "Must link to report conventions.",
          },
        },
        {
          id: "mla4-u3-passive-voice-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the correct passive form of 'They will test the new drug'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The new drug tested.'" },
              { id: "b", text: "'The new drug is tested.'" },
              { id: "c", text: "'The new drug will be tested.'" },
              { id: "d", text: "'The new drug was tested.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Future passive", statement: "will be + past participle." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — future passive: 'will be tested'.", working: "will be tested", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** 'The new drug will be tested.'",
            commonErrors: ["Wrong tense."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla4-u3-passive-voice-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "'The results have been analysed by the team.'",
          },
          stem: "Which tense is used in this passive sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Present perfect" },
              { id: "b", text: "Past simple" },
              { id: "c", text: "Present simple" },
              { id: "d", text: "Future" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Passive tenses", statement: "have/has been + participle = present perfect passive." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'have been analysed' = present perfect passive.", working: "present perfect", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'been' + participle signals perfect aspect.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Present perfect",
            commonErrors: ["Confusing with past simple."],
            examinerNote: "B2 for (c).",
          },
        },
        {
          id: "mla4-u3-passive-voice-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Rewrite Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Rewrite these sentences in the passive voice.\n1. 'The government introduced new rules.'\n2. 'Someone broke the window last night.'\n3. 'The company will open a new branch.'",
          },
          stem: "Rewrite all three sentences in the passive voice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Passive production", statement: "Correct tense + participle for each." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 1: 'New rules were introduced (by the government).'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 2: 'The window was broken last night.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 3: 'A new branch will be opened (by the company).'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — all forms grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "1. New rules were introduced. 2. The window was broken. 3. A new branch will be opened.",
            commonErrors: ["Wrong tense or participle."],
            examinerNote: "All three must be correct.",
          },
        },
        {
          id: "mla4-u3-passive-voice-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "'The cake was eaten by the children.'",
          },
          stem: "Why might a writer choose the passive here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To hide who ate the cake" },
              { id: "b", text: "To emphasise the cake rather than the children" },
              { id: "c", text: "Because it is shorter" },
              { id: "d", text: "Because active is impossible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Passive purpose", statement: "Passive shifts focus to the receiver." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — passive makes 'the cake' the focus.", working: "focus", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** To emphasise the cake rather than the children",
            commonErrors: ["Thinking passive is only for hiding the doer."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla4-u3-passive-voice-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Writing Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Write a short process description using the passive voice. Topic: 'How paper is made' or 'How recycling works'.",
          },
          stem: "Write the process description.",
          parts: [
            { label: "a", prompt: "Write one passive sentence for the first step.", marks: 1 },
            { label: "b", prompt: "Write two passive sentences for middle steps.", marks: 2 },
            { label: "c", prompt: "Write one passive sentence for the final step.", marks: 1 },
            { label: "d", prompt: "Write a concluding sentence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Process writing", statement: "Passive for process steps." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — first step uses correct passive.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — middle step 1 passive.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — middle step 2 passive.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final step passive.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion is clear and accurate.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — process is logical and easy to follow.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) first step (b) two middle (c) final (d) conclusion.",
            commonErrors: ["Mixing active and passive."],
            examinerNote: "Passive should be used consistently.",
          },
        },
      ],
    },
    {
      id: "mla4-u3-conditionals",
      title: "First and second conditionals",
      skill: "Use first and second conditionals to talk about real and unreal situations.",
      lesson: {
        sections: [
          {
            heading: "First conditional",
            body: "Use the **first conditional** for real or likely future situations: 'If it rains, we will stay inside.' Structure: **If + present simple, will + base verb**. It describes a possible result.",
          },
          {
            heading: "Second conditional",
            body: "Use the **second conditional** for unreal or imaginary situations: 'If I had more time, I would study more.' Structure: **If + past simple, would + base verb**. It describes a hypothetical result.",
          },
          {
            heading: "Choosing the right conditional",
            body: "Ask: Is the situation real and possible? Use first conditional. Is it imaginary or unlikely? Use second conditional. Compare: 'If I study, I will pass' (real) vs 'If I studied harder, I would pass' (hypothetical).",
          },
        ],
        keyFormulas: [
          { name: "First conditional", statement: "If + present simple, will + base verb" },
          { name: "Second conditional", statement: "If + past simple, would + base verb" },
        ],
        workedExample: {
          problem: "Complete: 'If she ___ (study) more, she ___ (pass) the exam.' (real possibility)",
          solution: "'If she studies more, she will pass the exam.'",
        },
      },
      questions: [
        {
          id: "mla4-u3-conditionals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the first conditional?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'If it rains, we will cancel the trip.'" },
              { id: "b", text: "'If I had time, I would help.'" },
              { id: "c", text: "'If I were rich, I would travel.'" },
              { id: "d", text: "'If she studied, she would pass.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "First conditional", statement: "If + present, will + base for real possibilities." }],
            steps: [{ reasoning: "Criterion B: Reading — option b is first conditional.", working: "first", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 'If it rains, we will cancel the trip.'",
            commonErrors: ["Choosing second conditional sentences."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-conditionals-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Conditional Examples",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "1. If you study regularly, you will improve.\n2. If I were the teacher, I would give more feedback.\n3. If it doesn't rain tomorrow, we will play outside.",
          },
          stem: "Identify which sentences are first conditional and which are second conditional.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conditional recognition", statement: "First = real; second = unreal." }],
            steps: [
              { reasoning: "Criterion B: Reading — sentence 1 is first conditional (will).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — sentence 2 is second conditional (were/would).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — sentence 3 is first conditional (will).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "First conditional: 1 and 3; second conditional: 2.",
            commonErrors: ["Misclassifying sentence 2."],
            examinerNote: "All three must be classified.",
          },
        },
        {
          id: "mla4-u3-conditionals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Complete the Sentences",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "1. If she ___ (study) tonight, she ___ (be) ready for the test.\n2. If I ___ (have) more money, I ___ (buy) a new laptop.\n3. If they ___ (not hurry), they ___ (miss) the bus.",
          },
          stem: "Complete the sentences with the correct verb forms.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conditional production", statement: "Choose correct tense and modal." }],
            steps: [
              { reasoning: "Criterion D: Writing — sentence 1: studies / will be (first conditional).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — sentence 2: had / would buy (second conditional).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — sentence 3: don't hurry / will miss (first conditional).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — all forms grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "1. studies / will be 2. had / would buy 3. don't hurry / will miss",
            commonErrors: ["Using would in first conditional or will in second."],
            examinerNote: "Verb forms must match conditional type.",
          },
        },
        {
          id: "mla4-u3-conditionals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Writing Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Write three conditional sentences: one first conditional about a real plan, one second conditional about an imaginary situation, and one mixed explanation.",
          },
          stem: "Write the conditional sentences.",
          parts: [
            { label: "a", prompt: "Write a first conditional sentence about a real plan.", marks: 1 },
            { label: "b", prompt: "Write a second conditional sentence about an imaginary situation.", marks: 2 },
            { label: "c", prompt: "Explain why each sentence uses that conditional.", marks: 2 },
            { label: "d", prompt: "Write a third conditional sentence and explain it.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conditional production", statement: "Correct structure and explanation." }],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — first conditional is grammatically correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — second conditional uses past + would.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — situation is clearly imaginary.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains first conditional as real/likely.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains second conditional as unreal.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — third sentence uses a conditional correctly.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — explanation is accurate.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — examples are relevant and clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) first conditional (b) second conditional (c) explanations (d) third sentence+explanation.",
            commonErrors: ["Mixing conditional structures."],
            examinerNote: "All sentences must be grammatically correct.",
          },
        },
        {
          id: "mla4-u3-conditionals-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the second conditional?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'If she studies, she will pass.'" },
              { id: "b", text: "'If it rains, we will stay inside.'" },
              { id: "c", text: "'If they hurry, they will catch the bus.'" },
              { id: "d", text: "'If I had more time, I would study more.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Second conditional", statement: "If + past simple, would + base for unreal situations." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'had... would' = second conditional.", working: "second", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 'If I had more time, I would study more.'",
            commonErrors: ["Choosing first conditional sentences."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla4-u3-conditionals-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct form: 'If she ___ (study) tonight, she will be ready.'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is studying" },
              { id: "b", text: "will study" },
              { id: "c", text: "studied" },
              { id: "d", text: "studies" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "First conditional form", statement: "If + present simple for real possibility." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — first conditional needs present simple 'studies'.", working: "studies", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** studies",
            commonErrors: ["Using past or future in if-clause."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla4-u3-conditionals-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Conditional Examples",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "1. If you practice daily, you will improve.\n2. If I were taller, I would play basketball.",
          },
          stem: "Identify which sentence is first conditional and which is second.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conditional recognition", statement: "First = real (will); second = unreal (would)." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — sentence 1 is first conditional (will improve).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — sentence 2 is second conditional (were/would).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "First: 1; second: 2.",
            commonErrors: ["Misclassifying sentence 2."],
            examinerNote: "Both needed.",
          },
        },
        {
          id: "mla4-u3-conditionals-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "'If it rains, we will cancel the trip.'",
          },
          stem: "How many clauses does this conditional sentence have?",
          response: {
            type: "numeric",
            parts: [
              { label: "clauses", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clause counting", statement: "Conditional = if-clause + main clause." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'If it rains' + 'we will cancel' = 2 clauses.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**2** clauses",
            commonErrors: ["Counting phrases instead."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mla4-u3-conditionals-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Complete the Sentences",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "1. If she ___ (study) more, she will pass.\n2. If I ___ (have) a car, I would drive to school.",
          },
          stem: "Choose the correct verb forms.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1. studied; 2. have" },
              { id: "b", text: "1. studies; 2. have" },
              { id: "c", text: "1. will study; 2. had" },
              { id: "d", text: "1. studies; 2. had" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conditional production", statement: "First = present; second = past." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 1: 'studies' (first conditional, present); 2: 'had' (second conditional, past).", working: "studies/had", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — both correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** 1. studies; 2. had",
            commonErrors: ["Using 'will' in if-clause or 'have' in second conditional."],
            examinerNote: "D2 for (c).",
          },
        },
        {
          id: "mla4-u3-conditionals-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Complete the Sentences",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Complete: 'If we ___ (leave) now, we ___ (arrive) on time.'",
          },
          stem: "Complete the sentence with the correct verb forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conditional production", statement: "First conditional: present + will." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'leave' (present simple in if-clause).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'will arrive' (will + base in main clause).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — sentence is grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'If we leave now, we will arrive on time.'",
            commonErrors: ["Using 'will leave' in if-clause."],
            examinerNote: "First conditional required.",
          },
        },
        {
          id: "mla4-u3-conditionals-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Sentence Choice",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "A student wants to say: 'I don't have a car, so I can't drive to school — but if I did have one, I would drive.'",
          },
          stem: "Write the conditional sentence that matches this meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Second conditional", statement: "If + past simple, would + base for unreal." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'If I had a car' (past simple for unreal).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'I would drive' (would + base).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — full sentence is correct and clear.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'If I had a car, I would drive to school.'",
            commonErrors: ["Using 'will' instead of 'would'."],
            examinerNote: "Second conditional required.",
          },
        },
        {
          id: "mla4-u3-conditionals-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is correct: 'If I ___ (be) you, I would study harder.'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "will be" },
              { id: "b", text: "was" },
              { id: "c", text: "am" },
              { id: "d", text: "were" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Second conditional 'be'", statement: "Use 'were' for all persons in second conditional." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — second conditional uses 'were' (not 'was') for hypothetical.", working: "were", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** were",
            commonErrors: ["Using 'was' or 'am'."],
            examinerNote: "D1 for (d).",
          },
        },
        {
          id: "mla4-u3-conditionals-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "'If I studied harder, I would have passed the exam.'",
          },
          stem: "Why does this sentence use the second conditional?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it is a command" },
              { id: "b", text: "Because it is a question" },
              { id: "c", text: "Because it describes a real future plan" },
              { id: "d", text: "Because it describes an unreal or hypothetical past situation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conditional meaning", statement: "Second conditional = unreal/hypothetical." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'would have passed' implies the exam is past and unreal.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — hypothetical situation → second conditional.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Because it describes an unreal or hypothetical past situation",
            commonErrors: ["Thinking second conditional is only for future."],
            examinerNote: "B2 for (b).",
          },
        },
        {
          id: "mla4-u3-conditionals-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Complete the Sentences",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Complete with correct verb forms.\n1. If they ___ (not hurry), they will miss the bus.\n2. If I ___ (win) the lottery, I would travel the world.\n3. If she ___ (had) more time, she would help us.",
          },
          stem: "Complete all three sentences correctly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conditional production", statement: "Match tense to conditional type." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 1: 'don't hurry' (present, first conditional).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 2: 'won' (past, second conditional).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 3: 'had' (past, second conditional — already correct).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — all forms grammatically correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "1. don't hurry 2. won 3. had",
            commonErrors: ["Using 'will' in if-clause."],
            examinerNote: "All three must be correct.",
          },
        },
        {
          id: "mla4-u3-conditionals-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "'If I had studied more, I would have passed.'",
          },
          stem: "What is unusual about this conditional sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses the first conditional" },
              { id: "b", text: "It is grammatically wrong" },
              { id: "c", text: "It is a question" },
              { id: "d", text: "It uses the second conditional for a past unreal situation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conditional nuance", statement: "Second conditional can refer to unreal past." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'had studied / would have passed' = unreal past (second conditional used for past).", working: "unreal past", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It uses the second conditional for a past unreal situation",
            commonErrors: ["Thinking it must be third conditional."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla4-u3-conditionals-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Writing Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Write three conditional sentences: one first conditional about a real plan, one second conditional about an imaginary situation, and one explanation of why each is correct.",
          },
          stem: "Write the conditional sentences and explanations.",
          parts: [
            { label: "a", prompt: "Write a first conditional sentence.", marks: 1 },
            { label: "b", prompt: "Write a second conditional sentence.", marks: 1 },
            { label: "c", prompt: "Explain why the first is correct.", marks: 2 },
            { label: "d", prompt: "Explain why the second is correct.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conditional production + explanation", statement: "Correct structure and reasoning." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — first conditional grammatically correct (present + will).", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — second conditional grammatically correct (past + would).", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains first conditional as real/likely.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explanation is accurate.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — explains second conditional as unreal.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — examples are clear and relevant.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) first conditional (b) second conditional (c) real explanation (d) unreal explanation.",
            commonErrors: ["Mixing conditional structures."],
            examinerNote: "All sentences must be correct.",
          },
        },
      ],
    },
  ],
};
