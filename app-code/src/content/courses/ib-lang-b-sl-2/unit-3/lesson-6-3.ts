import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "langb-u6-lesson-6-3",
  code: "6-3",
  title: "Reflecting on Language Learning Progress",
  goal: "I CAN evaluate my own progress, identify strengths and weaknesses, and set informed next steps for language learning.",
  standards: ["Reflection", "Self-assessment", "Independent learning", "Language B SL"],
  vocabulary: [
    { term: "Reflection", definition: "Thinking critically about your own learning — what worked, what didn't, why." },
    { term: "Self-assessment", definition: "Judging your own work against criteria to identify strengths and gaps." },
    { term: "Learning journal", definition: "A record of what you studied, struggled with and achieved over time." },
    { term: "Strengths and weaknesses", definition: "The skills you do well versus those needing improvement — the basis of targeted practice." },
    { term: "Feedback loop", definition: "Using assessment results or teacher feedback to adjust your learning strategy." },
    { term: "Growth mindset", definition: "The belief that abilities improve through effort — errors are learning opportunities." },
  ],
  concepts: [
    {
      id: "langb-u6-self-assessment",
      title: "Self-assessing language skills",
      skill: "Evaluate your own performance against Language B criteria and identify specific areas for improvement.",
      lesson: {
        sections: [
          {
            heading: "Honest self-assessment",
            body: "Effective language learners assess themselves honestly against the same criteria examiners use: task fulfilment, organisation, language accuracy and range, communication. The goal is not self-criticism but accurate diagnosis — knowing exactly where you stand. Save your work and compare old vs new: improvement you can't see feels like no improvement.",
          },
          {
            heading: "Identifying strengths and weaknesses",
            body: "After each assessed task, ask: What did I do well? (strengths — protect and extend them). Where did I lose marks? (weaknesses — target specifically). 'My vocabulary is weak' is too vague — 'I repeat the same 10 adjectives' is actionable. Specific diagnosis leads to specific practice. Keep an error log of recurring mistakes.",
          },
          {
            heading: "Using feedback",
            body: "Teacher and examiner feedback is data, not judgement. Read comments carefully — they point to patterns, not isolated errors. If the same comment appears twice ('tense errors', 'no conclusion'), that's your priority. Implement one change at a time; trying to fix everything at once leads to fixing nothing. Feedback loops turn assessment into improvement.",
          },
        ],
        keyFormulas: [
          { name: "Assessment criteria", statement: "Task fulfilment + organisation + language + communication" },
          { name: "Specific diagnosis", statement: "'I repeat adjectives' beats 'my vocabulary is weak'" },
        ],
        workedExample: {
          problem: "Your essay scored well on organisation but poorly on language. What do you do?",
          solution: "Keep the organisational strength; target language specifically — error log for grammar patterns, vocabulary expansion exercises, sentence-structure variety practice.",
        },
      },
      questions: [
        {
          id: "langb-u6-q17",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of self-assessment in language learning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To impress the teacher" },
              { id: "b", text: "To accurately identify strengths and weaknesses for targeted improvement" },
              { id: "c", text: "To replace all teacher feedback" },
              { id: "d", text: "To avoid doing any practice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-assessment", statement: "Judging your own work against criteria to guide improvement." },
            ],
            steps: [
              { reasoning: "Self-assessment diagnoses strengths and weaknesses accurately.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To accurately identify strengths and weaknesses for targeted improvement",
            commonErrors: ["Self-assessing vaguely or only looking for praise."],
          },
        },
        {
          id: "langb-u6-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three questions to ask when self-assessing a writing task.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Self-assessment questions", statement: "Task fulfilment, organisation, language range/accuracy." },
            ],
            steps: [
              { reasoning: "Did I answer the task fully in the right format and register?", marks: 1, markCode: "M" },
              { reasoning: "Was my structure clear — intro, body, conclusion, logical order?", marks: 1, markCode: "M" },
              { reasoning: "Did I use varied, accurate language — or repeat weak patterns?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Task fulfilled? Structure clear? Language varied and accurate?",
            commonErrors: ["Asking only 'was it good?' instead of criterion-specific questions."],
          },
        },
        {
          id: "langb-u6-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 'specific' weakness identification beats 'general' weakness identification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Specific diagnosis", statement: "Actionable weaknesses produce targeted practice; vague ones produce anxiety." },
            ],
            steps: [
              { reasoning: "'My vocabulary is weak' tells you nothing actionable — where? which words?", marks: 1, markCode: "R" },
              { reasoning: "'I repeat the same 10 adjectives' identifies exactly what to fix.", marks: 1, markCode: "M" },
              { reasoning: "Specific diagnosis enables targeted practice — the most efficient improvement path.", marks: 1, markCode: "M" },
              { reasoning: "Vague weaknesses feel overwhelming; specific ones feel manageable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific weaknesses enable targeted practice; vague ones produce anxiety without direction.",
            commonErrors: ["Writing 'I need to improve my English' — useless for planning."],
          },
        },
        {
          id: "langb-u6-q20",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You receive feedback on an essay: 'Good structure, but tense errors throughout and limited vocabulary range.'",
          parts: [
            { label: "a", prompt: "Identify your strength and your two weaknesses from this feedback.", marks: 2 },
            { label: "b", prompt: "Explain why fixing one weakness at a time is more effective.", marks: 2 },
            { label: "c", prompt: "Describe a specific action you would take for each weakness.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback implementation", statement: "Strengths protected; weaknesses targeted one at a time with specific actions." },
            ],
            steps: [
              { part: "a", reasoning: "Strength: good structure/organisation. Weaknesses: tense errors + limited vocabulary range.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three elements correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fixing everything at once spreads attention thin — nothing gets fixed properly.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "One weakness at a time allows focused, measurable improvement.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Tense action: error log for tense patterns, drill past/present/future forms.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Vocabulary action: learn word families, replace repeated adjectives.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both actions are specific and targeted, not vague resolutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Strength: structure; weaknesses: tense + vocabulary. (b) One at a time = focused improvement. (c) Tense drills + vocabulary expansion.",
            commonErrors: ["Trying to fix everything simultaneously and fixing nothing."],
          },
        },
        {
          id: "langb-u6-q77",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The main purpose of honest self-assessment in language learning is to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Accurately identify strengths and weaknesses so practice targets real gaps" },
              { id: "b", text: "Impress examiners" },
              { id: "c", text: "Avoid doing any practice" },
              { id: "d", text: "Replace all teacher feedback" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-assessment", statement: "Honest judgement of work against criteria to guide targeted improvement." },
            ],
            steps: [
              { reasoning: "Self-assessment is diagnostic — it locates strengths and gaps for targeted practice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Accurately identify strengths and weaknesses so practice targets real gaps",
            commonErrors: ["Self-assessing only to feel good rather than to diagnose."],
          },
        },
        {
          id: "langb-u6-q78",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is one of the Language B assessment criteria for productive skills?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed of writing" },
              { id: "b", text: "Length of the response only" },
              { id: "c", text: "Task fulfilment and organisation" },
              { id: "d", text: "Neatness of handwriting" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Language B criteria", statement: "Task fulfilment, organisation, language (accuracy/range), communication." },
            ],
            steps: [
              { reasoning: "Language B productive criteria include task fulfilment, organisation, language and communication.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Task fulfilment and organisation",
            commonErrors: ["Confusing assessment criteria with surface features like handwriting."],
          },
        },
        {
          id: "langb-u6-q79",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is 'I repeat the same 10 adjectives' a better self-assessment than 'my vocabulary is weak'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it identifies exactly what to fix, enabling targeted practice" },
              { id: "b", text: "Because it is shorter" },
              { id: "c", text: "Because teachers prefer numbers" },
              { id: "d", text: "Because adjectives are the only vocabulary that matters" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Specific diagnosis", statement: "Specific weaknesses are actionable; vague ones produce anxiety without direction." },
            ],
            steps: [
              { reasoning: "Specific diagnosis names the exact pattern to fix — it can be drilled directly.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Because it identifies exactly what to fix, enabling targeted practice",
            commonErrors: ["Accepting vague weakness labels as sufficient diagnosis."],
          },
        },
        {
          id: "langb-u6-q80",
          difficulty: "core",
          totalMarks: 2,
          stem: "An 'error log' is useful because it...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replaces practice entirely" },
              { id: "b", text: "Reveals recurring error patterns so you can target them specifically" },
              { id: "c", text: "Collects every mistake you ever made" },
              { id: "d", text: "Is required by the IB" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error log", statement: "Recording recurring mistakes reveals patterns for targeted correction." },
            ],
            steps: [
              { reasoning: "Error logs turn isolated mistakes into visible patterns — the basis of deliberate practice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reveals recurring error patterns so you can target them specifically",
            commonErrors: ["Logging every trivial slip instead of tracking recurring patterns."],
          },
        },
        {
          id: "langb-u6-q81",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Teacher and examiner feedback should primarily be treated as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Something to argue with" },
              { id: "b", text: "Personal judgement of you as a person" },
              { id: "c", text: "Optional reading" },
              { id: "d", text: "Data pointing to patterns you can act on" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feedback as data", statement: "Comments point to patterns — use them to adjust strategy." },
            ],
            steps: [
              { reasoning: "Feedback is information about performance, not a verdict on the person.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Data pointing to patterns you can act on",
            commonErrors: ["Taking feedback personally or dismissing it."],
          },
        },
        {
          id: "langb-u6-q82",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "If the same comment ('tense errors', 'no conclusion') appears twice in your feedback, this suggests...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The comment was random" },
              { id: "b", text: "It is a recurring pattern — your highest-priority area to fix" },
              { id: "c", text: "The teacher is lazy" },
              { id: "d", text: "You should ignore it this time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback patterns", statement: "Repeated comments signal recurring weaknesses — prioritise them." },
            ],
            steps: [
              { reasoning: "Repetition across assessments indicates a persistent, systematic weakness.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It is a recurring pattern — your highest-priority area to fix",
            commonErrors: ["Treating each comment as an isolated, one-off issue."],
          },
        },
        {
          id: "langb-u6-q83",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it better to implement one change at a time after receiving feedback?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because students can only remember one thing" },
              { id: "b", text: "Because teachers only allow one change" },
              { id: "c", text: "Because focused change allows measurable improvement — fixing everything at once fixes nothing" },
              { id: "d", text: "Because it saves time" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Focused improvement", statement: "One change at a time allows attention and measurable results." },
            ],
            steps: [
              { reasoning: "Simultaneous changes split attention; single changes can be practised and verified.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Because focused change allows measurable improvement — fixing everything at once fixes nothing",
            commonErrors: ["Trying to overhaul all weaknesses simultaneously."],
          },
        },
        {
          id: "langb-u6-q84",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two criteria you could use to self-assess a Language B writing task.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Assessment criteria", statement: "Task fulfilment, organisation, language accuracy/range, communication." },
            ],
            steps: [
              { reasoning: "Any two valid: task fulfilment, organisation, language accuracy/range, communication.", marks: 1, markCode: "M" },
              { reasoning: "Both are genuine Language B assessment criteria.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. task fulfilment and organisation (also: language accuracy/range, communication).",
            commonErrors: ["Using vague criteria like 'was it good?' instead of exam criteria."],
          },
        },
        {
          id: "langb-u6-q85",
          difficulty: "core",
          totalMarks: 3,
          stem: "Turn the vague self-assessment 'my writing is bad' into a specific, actionable weakness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Specific diagnosis", statement: "Actionable weaknesses name the exact pattern to fix." },
            ],
            steps: [
              { reasoning: "Vague version identifies nothing fixable — 'bad' could mean grammar, vocabulary, structure or register.", marks: 1, markCode: "R" },
              { reasoning: "Specific version names the pattern, e.g. 'my paragraphs lack linking words' or 'I confuse past tenses'.", marks: 1, markCode: "M" },
              { reasoning: "The specific version can be drilled; the vague version cannot.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. 'My paragraphs lack linking devices' or 'I make tense errors in the past tense' — exact pattern named.",
            commonErrors: ["Just adding detail words without identifying an actual fixable pattern."],
          },
        },
        {
          id: "langb-u6-q86",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how to use written feedback comments to decide what to work on next.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback implementation", statement: "Look for repeated patterns; prioritise them; fix one at a time." },
            ],
            steps: [
              { reasoning: "Read all comments and group them by criterion — language, organisation, task fulfilment.", marks: 1, markCode: "M" },
              { reasoning: "Count repetitions — a comment appearing twice signals a persistent pattern.", marks: 1, markCode: "M" },
              { reasoning: "Prioritise the repeated/pattern comments over one-off slips.", marks: 1, markCode: "R" },
              { reasoning: "Choose ONE to fix first — focused correction beats scattered attempts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Group comments by criterion, prioritise repeated patterns, and fix one at a time.",
            commonErrors: ["Trying to address every comment at once."],
          },
        },
        {
          id: "langb-u6-q87",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why keeping old pieces of work helps accurate self-assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Progress evidence", statement: "Comparing old vs new work makes improvement visible." },
            ],
            steps: [
              { reasoning: "Memory is unreliable — you may feel you've improved without evidence or vice versa.", marks: 1, markCode: "R" },
              { reasoning: "Old work provides a baseline to compare against current performance objectively.", marks: 1, markCode: "M" },
              { reasoning: "Side-by-side comparison reveals real gains in vocabulary, structure and accuracy.", marks: 1, markCode: "M" },
              { reasoning: "It also reveals persistent weaknesses that feeling-based assessment would miss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Old work provides objective baselines — comparison reveals real improvement and persistent gaps.",
            commonErrors: ["Assessing only from memory of recent performance."],
          },
        },
        {
          id: "langb-u6-q88",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You scored well on task fulfilment in an essay but lost most marks on language accuracy. Explain your approach to the next essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Targeted improvement", statement: "Protect strengths; target the diagnosed weakness specifically." },
            ],
            steps: [
              { reasoning: "Keep doing what worked — task fulfilment was strong, so maintain the same planning/format approach.", marks: 1, markCode: "M" },
              { reasoning: "Target language accuracy specifically: error log for grammar patterns, tense drills, proofreading habit.", marks: 1, markCode: "M" },
              { reasoning: "Add a final check pass specifically for the identified error patterns.", marks: 1, markCode: "R" },
              { reasoning: "Next assessment will show whether the targeted fix worked — data to adjust further.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maintain task fulfilment strength; drill language accuracy with error log + proofreading pass.",
            commonErrors: ["Changing everything instead of targeting the diagnosed weakness."],
          },
        },
        {
          id: "langb-u6-q89",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "After a speaking assessment you receive this feedback: 'Good pronunciation and confident delivery, but you spoke too fast to be fully understood and your answers were sometimes off-topic.'",
          parts: [
            { label: "a", prompt: "Identify one strength and two weaknesses from this feedback.", marks: 2 },
            { label: "b", prompt: "Explain which Language B criterion each weakness relates to.", marks: 2 },
            { label: "c", prompt: "Suggest one specific action to improve each weakness.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback implementation", statement: "Strengths protected; weaknesses mapped to criteria and targeted." },
            ],
            steps: [
              { part: "a", reasoning: "Strength: pronunciation/confident delivery. Weaknesses: speaking too fast; off-topic answers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three elements correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Speed/clarity relates to communication; off-topic answers relate to task fulfilment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct criterion mapping for both weaknesses.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Speed action: record yourself, practise pauses, consciously slow 20%.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Topic action: plan answers around the question before speaking; note key points.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both actions are specific and trainable, not vague resolutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Strength: pronunciation/delivery; weaknesses: speed + off-topic answers. (b) Communication + task fulfilment. (c) Slow-down practice + answer planning.",
            commonErrors: ["Ignoring the strengths or treating both weaknesses identically."],
          },
        },
      ],
    },
    {
      id: "langb-u6-reflection",
      title: "Building a reflective learning practice",
      skill: "Maintain a learning journal, track progress over time, and use reflection to set informed next steps.",
      lesson: {
        sections: [
          {
            heading: "The learning journal",
            body: "A **learning journal** records your language journey: what you studied, what was hard, what improved, what strategies worked. Write briefly after each study session or assessed task. Over weeks and months, patterns emerge — you can see which methods actually help you and which don't. The journal is your personal evidence of progress.",
          },
          {
            heading: "Growth mindset in language learning",
            body: "Language learning is inherently error-filled — every mistake is data, not failure. A **growth mindset** treats errors as information: 'I made this mistake, now I know to avoid it.' This attitude sustains motivation through the long plateau periods of language acquisition. Students who see errors as learning opportunities progress faster and enjoy the process more.",
          },
          {
            heading: "Setting next steps",
            body: "Reflection ends with action. After reviewing your journal and assessments, set your next SMART goal — informed by what actually worked, not what you think should work. Review your journal monthly: are you progressing? Which strategies need adjusting? This cycle — study, reflect, adjust — is the engine of independent language learning.",
          },
        ],
        keyFormulas: [
          { name: "Journal cycle", statement: "Study -> record -> review patterns -> adjust strategy -> repeat" },
          { name: "Growth mindset", statement: "Errors = data, not failure; effort produces improvement" },
        ],
        workedExample: {
          problem: "After a month of study, your journal shows vocabulary improved but speaking didn't. What next?",
          solution: "Your input strategies worked; output lagged. Next goal: add speaking practice — record yourself, find conversation partners, do oral presentations. Adjust strategy to the diagnosed gap.",
        },
      },
      questions: [
        {
          id: "langb-u6-q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'learning journal'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A record of what you studied, struggled with and achieved over time" },
              { id: "b", text: "A diary of personal feelings only" },
              { id: "c", text: "A grammar textbook" },
              { id: "d", text: "A list of vocabulary words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Learning journal", statement: "A record tracking study, struggles and achievements for reflection." },
            ],
            steps: [
              { reasoning: "Learning journals track the learning process over time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A record of what you studied, struggled with and achieved over time",
            commonErrors: ["Confusing a learning journal with a personal diary."],
          },
        },
        {
          id: "langb-u6-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three things you should record in a language learning journal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Journal content", statement: "Study activities, difficulties, progress and effective strategies." },
            ],
            steps: [
              { reasoning: "What you studied — skills, materials, time spent.", marks: 1, markCode: "M" },
              { reasoning: "What was difficult — specific struggles and errors.", marks: 1, markCode: "M" },
              { reasoning: "What improved and which strategies worked — progress evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Study activities, difficulties, progress/working strategies.",
            commonErrors: ["Recording only study time without reflecting on what worked."],
          },
        },
        {
          id: "langb-u6-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a 'growth mindset' changes your response to making errors in language learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Growth mindset", statement: "Errors are learning data, not evidence of fixed inability." },
            ],
            steps: [
              { reasoning: "Fixed mindset: errors = 'I'm bad at languages' — discouraging, leads to avoidance.", marks: 1, markCode: "R" },
              { reasoning: "Growth mindset: errors = 'I made this mistake, now I know to avoid it' — data for improvement.", marks: 1, markCode: "M" },
              { reasoning: "This attitude sustains motivation through the long plateau periods of language learning.", marks: 1, markCode: "M" },
              { reasoning: "Students who see errors as information progress faster and persist longer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth mindset reframes errors as learning data — sustaining motivation and accelerating progress.",
            commonErrors: ["Interpreting errors as proof of inability rather than information."],
          },
        },
        {
          id: "langb-u6-q24",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Review your language learning so far and plan your next steps.",
          parts: [
            { label: "a", prompt: "Identify one strength and one weakness in your current language skills.", marks: 2 },
            { label: "b", prompt: "Explain what evidence (assessments, journal, feedback) supports your diagnosis.", marks: 2 },
            { label: "c", prompt: "Set one SMART goal for your next improvement step.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflective goal-setting", statement: "Evidence-based diagnosis -> targeted SMART goal." },
            ],
            steps: [
              { part: "a", reasoning: "One genuine strength + one genuine weakness identified specifically.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both specific enough to act on.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evidence cited: assessment scores, journal observations, teacher feedback.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Diagnosis is grounded in data, not guesswork.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "SMART goal targets the identified weakness specifically.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Goal is measurable and time-bound.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Goal is achievable and directly relevant to improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Specific strength + weakness. (b) Evidence-based. (c) SMART goal targeting the weakness.",
            commonErrors: ["Setting goals without evidence or targeting strengths instead of weaknesses."],
          },
        },
        {
          id: "langb-u6-q90",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'learning journal' is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A record of what you studied, struggled with and achieved over time" },
              { id: "b", text: "A personal diary about your feelings" },
              { id: "c", text: "A vocabulary list" },
              { id: "d", text: "A grammar textbook" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Learning journal", statement: "A record tracking study, struggles and achievements for reflection." },
            ],
            steps: [
              { reasoning: "Learning journals track the learning process, not just emotions or word lists.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A record of what you studied, struggled with and achieved over time",
            commonErrors: ["Confusing a learning journal with a personal diary."],
          },
        },
        {
          id: "langb-u6-q91",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'growth mindset' in language learning means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Believing you are naturally talented at languages" },
              { id: "b", text: "Comparing yourself only to weaker students" },
              { id: "c", text: "Avoiding difficult tasks to prevent mistakes" },
              { id: "d", text: "Treating errors as learning data — abilities improve through effort" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Growth mindset", statement: "Errors are learning data; effort produces improvement." },
            ],
            steps: [
              { reasoning: "Growth mindset reframes errors as information rather than proof of inability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Treating errors as learning data — abilities improve through effort",
            commonErrors: ["Confusing growth mindset with fixed talent beliefs."],
          },
        },
        {
          id: "langb-u6-q92",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "After months of journaling, what is the journal most likely to reveal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Which study strategies actually work for you — and which don't" },
              { id: "b", text: "Nothing useful" },
              { id: "c", text: "Your exact future exam score" },
              { id: "d", text: "That journaling replaces practice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Journal patterns", statement: "Over time, journals reveal which methods genuinely help you." },
            ],
            steps: [
              { reasoning: "Patterns in the journal show which strategies produced improvement vs wasted effort.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Which study strategies actually work for you — and which don't",
            commonErrors: ["Expecting the journal to predict scores rather than reveal effective methods."],
          },
        },
        {
          id: "langb-u6-q93",
          difficulty: "core",
          totalMarks: 2,
          stem: "The reflective learning cycle is best described as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read -> copy -> paste" },
              { id: "b", text: "Study -> record -> review patterns -> adjust strategy -> repeat" },
              { id: "c", text: "Study -> forget -> restart" },
              { id: "d", text: "Cram -> test -> forget" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Journal cycle", statement: "Study, record, review, adjust, repeat — the engine of independent learning." },
            ],
            steps: [
              { reasoning: "Reflection completes the loop: evidence from records drives strategy adjustment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Study -> record -> review patterns -> adjust strategy -> repeat",
            commonErrors: ["Studying without the record-review-adjust loop."],
          },
        },
        {
          id: "langb-u6-q94",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Your next learning step should be informed by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What other students are doing" },
              { id: "b", text: "Evidence — your journal, assessments and feedback" },
              { id: "c", text: "Random choice" },
              { id: "d", text: "Whatever feels easiest" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence-based next steps", statement: "Reflection ends with action informed by real data." },
            ],
            steps: [
              { reasoning: "Informed next steps come from diagnosed evidence, not convenience or guessing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Evidence — your journal, assessments and feedback",
            commonErrors: ["Choosing next steps by guesswork rather than evidence."],
          },
        },
        {
          id: "langb-u6-q95",
          difficulty: "core",
          totalMarks: 2,
          stem: "Reviewing your journal monthly helps you...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fill time productively" },
              { id: "b", text: "Prove you have a journal" },
              { id: "c", text: "Avoid studying" },
              { id: "d", text: "Check whether you are progressing and which strategies need adjusting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Periodic review", statement: "Monthly review checks progress and triggers strategy adjustment." },
            ],
            steps: [
              { reasoning: "Periodic review converts records into decisions about what to keep or change.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Check whether you are progressing and which strategies need adjusting",
            commonErrors: ["Journaling without ever reviewing the entries."],
          },
        },
        {
          id: "langb-u6-q96",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the reflective cycle, 'setting next steps' means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Turning diagnosis into a new informed goal — reflection ends with action" },
              { id: "b", text: "Copying someone else's plan" },
              { id: "c", text: "Reflection is complete — nothing follows" },
              { id: "d", text: "Stopping all language study" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection ends with action", statement: "Diagnosis must convert into a new informed goal." },
            ],
            steps: [
              { reasoning: "Reflection without action is just thinking — the cycle requires a new SMART goal.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Turning diagnosis into a new informed goal — reflection ends with action",
            commonErrors: ["Treating reflection as an endpoint rather than a cycle."],
          },
        },
        {
          id: "langb-u6-q97",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things you should record in a language learning journal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Journal content", statement: "Study activities, difficulties, progress and working strategies." },
            ],
            steps: [
              { reasoning: "Any two valid: what you studied, what was difficult, what improved, which strategies worked.", marks: 1, markCode: "M" },
              { reasoning: "Both entries relate to the learning process.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. what you studied and what you struggled with (also: improvements, effective strategies).",
            commonErrors: ["Recording only emotions rather than study and progress data."],
          },
        },
        {
          id: "langb-u6-q98",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a learning journal can show you over several months.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Long-term reflection", statement: "Patterns in the journal reveal effective methods and real progress." },
            ],
            steps: [
              { reasoning: "Progress trajectory — which skills improved and how fast.", marks: 1, markCode: "M" },
              { reasoning: "Strategy effectiveness — which methods produced gains vs wasted effort.", marks: 1, markCode: "M" },
              { reasoning: "Persistent weaknesses — problems that recur across entries and need targeting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Progress trajectory, effective vs ineffective strategies, and recurring weaknesses.",
            commonErrors: ["Expecting the journal to show progress after only a few days."],
          },
        },
        {
          id: "langb-u6-q99",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a growth mindset would change your response to making an error in a speaking task.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Growth mindset", statement: "Errors are learning data, not evidence of fixed inability." },
            ],
            steps: [
              { reasoning: "Fixed response: 'I can't speak well' — shame, avoidance of future speaking practice.", marks: 1, markCode: "R" },
              { reasoning: "Growth response: 'I made this mistake — now I know what to fix' — the error becomes specific data.", marks: 1, markCode: "M" },
              { reasoning: "The error is logged, the pattern identified, and targeted practice planned.", marks: 1, markCode: "M" },
              { reasoning: "This keeps motivation through the long plateau periods of language learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Errors become specific data to fix rather than proof of inability — sustaining motivation and targeting practice.",
            commonErrors: ["Describing growth mindset without applying it to a concrete error."],
          },
        },
        {
          id: "langb-u6-q100",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the phrase: 'improvement you can't see feels like no improvement.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Visible progress", statement: "Unrecorded improvement is imperceptible — records make it real." },
            ],
            steps: [
              { reasoning: "Language gains are gradual — day-to-day you can't feel vocabulary or fluency growing.", marks: 1, markCode: "M" },
              { reasoning: "Without records, the accumulated improvement is invisible, so motivation drops.", marks: 1, markCode: "M" },
              { reasoning: "Old work, journals and scores make the accumulated change visible and concrete.", marks: 1, markCode: "R" },
              { reasoning: "Seen progress sustains effort — the journal is evidence against discouragement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradual gains are imperceptible without records — tracking makes improvement visible and motivating.",
            commonErrors: ["Quoting the phrase without explaining the mechanism."],
          },
        },
        {
          id: "langb-u6-q101",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your journal shows reading skills improved steadily but writing stayed flat for two months. What does this suggest and what should you do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Diagnosed adjustment", statement: "Journal evidence identifies which skills lag — adjust strategy to the gap." },
            ],
            steps: [
              { reasoning: "Diagnosis: your input strategies (reading) worked, but output practice (writing) is missing or ineffective.", marks: 1, markCode: "M" },
              { reasoning: "Explanation: input builds recognition; output requires separate production practice.", marks: 1, markCode: "R" },
              { reasoning: "Action: add writing tasks to the plan — essays, journals, rewriting, self-correction.", marks: 1, markCode: "M" },
              { reasoning: "Then track writing in the journal to verify the adjustment works.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Input strategies worked but output lags — add deliberate writing practice and track it.",
            commonErrors: ["Doing more reading when the diagnosed gap is writing."],
          },
        },
        {
          id: "langb-u6-q102",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "It is the end of term. Plan your reflective review and next steps for Language B.",
          parts: [
            { label: "a", prompt: "Describe what evidence you would review (journal, assessments, feedback).", marks: 2 },
            { label: "b", prompt: "Explain how you would identify one strength and one weakness from that evidence.", marks: 2 },
            { label: "c", prompt: "Set one SMART goal for next term based on your diagnosis.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflective planning", statement: "Evidence review -> specific diagnosis -> informed SMART goal." },
            ],
            steps: [
              { part: "a", reasoning: "Review journal entries, assessment scores, teacher comments — multiple evidence sources.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evidence sources are concrete, not vague impressions.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strength = criterion where scores/comments consistently high; weakness = repeated pattern of lost marks.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both identified specifically and grounded in the evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "SMART goal targets the diagnosed weakness with measurable, time-bound action.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Goal is achievable for level and relevant to Language B needs.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Goal explicitly follows from the diagnosis — not generic resolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Journal + assessments + feedback review. (b) Evidence-based strength/weakness. (c) SMART goal targeting the weakness.",
            commonErrors: ["Setting a generic goal without evidence-based diagnosis."],
          },
        },
      ],
    },
  ],
};
