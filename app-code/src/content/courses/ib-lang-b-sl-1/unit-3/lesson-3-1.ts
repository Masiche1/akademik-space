import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "langb-u3-lesson-3-1",
  code: "3-1",
  title: "Listening Comprehension and Note-Taking",
  goal: "I CAN listen for gist and specific information and take useful notes while listening in any language.",
  standards: ["Listening", "Comprehension", "Note-taking", "Language B SL"],
  vocabulary: [
    { term: "Gist listening", definition: "Listening to grasp the main idea of a spoken text without catching every word." },
    { term: "Note-taking", definition: "Recording key words and ideas while listening, using abbreviations and symbols." },
    { term: "Dictation", definition: "Writing down exactly what is heard — a common Language B listening exercise." },
    { term: "Signal words", definition: "Words like 'first', 'however', 'for example' that structure a spoken text." },
    { term: "Accent", definition: "The way a language is pronounced by a particular group or region." },
    { term: "Predictive listening", definition: "Guessing what will be said next from context before it is heard." },
  ],
  concepts: [
    {
      id: "langb-u3-listening-strategies",
      title: "Listening strategies for gist and detail",
      skill: "Use prediction, signal words and selective attention to understand spoken texts in a target language.",
      lesson: {
        sections: [
          {
            heading: "You cannot re-listen",
            body: "In exams, audio plays once or twice. Unlike reading, you cannot go back. **Gist listening** means catching the overall topic — listen for tone, repeated key words and the conclusion. **Detail listening** means catching specific facts: names, dates, numbers. Know which type each question needs before the audio starts.",
          },
          {
            heading: "Prediction and signal words",
            body: "Before listening, read the questions and **predict** likely vocabulary. While listening, **signal words** mark structure: 'first/then/finally' order points, 'however' signals contrast, 'for example' introduces detail. Numbers are often tested — write them down immediately. Familiar accents take practice; exposure to varied speakers builds tolerance.",
          },
          {
            heading: "Active listening habits",
            body: "Listen in short bursts of full attention rather than passively. If you miss a word, keep listening — the meaning often becomes clear later. Do not translate everything mentally; aim for comprehension of the whole. Practise with graded audio daily — even 10 minutes builds ear-training faster than occasional long sessions.",
          },
        ],
        keyFormulas: [
          { name: "Listen once", statement: "Read questions first -> predict -> catch gist, then details on second play" },
          { name: "Signal words", statement: "first/then = sequence; however = contrast; for example = detail; numbers = test targets" },
        ],
        workedExample: {
          problem: "A question asks 'When does the trip leave?' during a listening. What do you do?",
          solution: "Before audio: predict time expressions (o'clock, am/pm, days). During: write any time you hear immediately — do not wait to process the sentence.",
        },
      },
      questions: [
        {
          id: "langb-u3-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'gist listening'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing down every word heard" },
              { id: "b", text: "Catching the main idea of a spoken text" },
              { id: "c", text: "Translating speech word by word" },
              { id: "d", text: "Memorising the whole recording" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gist listening", statement: "Listening to understand the overall topic, not every word." },
            ],
            steps: [
              { reasoning: "Gist listening targets the main idea of speech.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Catching the main idea of a spoken text",
            commonErrors: ["Trying to catch every word and missing the overall meaning."],
          },
        },
        {
          id: "langb-u3-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three signal words that help structure a spoken text and explain what each signals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Signal words", statement: "Sequence, contrast and example markers organise spoken discourse." },
            ],
            steps: [
              { reasoning: "Sequence: 'first', 'then', 'finally' signal the order of points.", marks: 1, markCode: "M" },
              { reasoning: "Contrast: 'however', 'but', 'on the other hand' signal a change or opposite idea.", marks: 1, markCode: "M" },
              { reasoning: "Example/detail: 'for example', 'such as' signal supporting information is coming.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "first/then (sequence), however (contrast), for example (detail).",
            commonErrors: ["Ignoring signal words and treating speech as an unstructured stream."],
          },
        },
        {
          id: "langb-u3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why reading the questions before a listening exam improves performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Predictive listening", statement: "Questions reveal what to listen for — names, numbers, opinions." },
            ],
            steps: [
              { reasoning: "Questions tell you whether you need gist or specific detail.", marks: 1, markCode: "M" },
              { reasoning: "They let you predict likely vocabulary and prepare to catch it.", marks: 1, markCode: "M" },
              { reasoning: "You can prioritise attention — e.g. write numbers immediately when a date is asked.", marks: 1, markCode: "R" },
              { reasoning: "This focused listening beats passive hearing, which catches everything and retains nothing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Questions focus attention, enable prediction and prioritise what to catch.",
            commonErrors: ["Starting to listen without knowing what is being tested."],
          },
        },
        {
          id: "langb-u3-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You will hear a short announcement about a school event. Practise the pre-listening routine.",
          parts: [
            { label: "a", prompt: "List three things you would do before the audio begins.", marks: 2 },
            { label: "b", prompt: "Explain what you would listen for if a question asks 'How much does it cost?'", marks: 2 },
            { label: "c", prompt: "Explain why you should not panic if you miss one word.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening preparation", statement: "Prepare before, target during, recover after — panic loses marks." },
            ],
            steps: [
              { part: "a", reasoning: "Read all questions first.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Predict key vocabulary and decide gist vs detail needs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Listen for numbers, currency words, 'free', 'costs', 'price' — write immediately.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Numbers are exact facts that cannot be inferred — must be caught on first hearing.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One missed word rarely blocks overall comprehension.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Meaning often becomes clear from surrounding context later in the text.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Stopping to worry means missing the next information — keep listening.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Read questions, predict vocabulary, decide gist/detail. (b) Catch numbers/cost words instantly. (c) Missed words recover via context; keep listening.",
            commonErrors: ["Freezing after missing a word instead of continuing."],
          },
        },
        {
          id: "langb-u3-q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main advantage of reading the questions before a listening exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You can memorise the answers in advance" },
              { id: "b", text: "It focuses your attention on what to listen for" },
              { id: "c", text: "The recording becomes easier to understand" },
              { id: "d", text: "You can skip parts of the audio" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pre-listening preparation", statement: "Questions reveal the target information before the audio begins." },
            ],
            steps: [
              { reasoning: "Reading questions first tells you whether you need gist or specific details.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It focuses your attention on what to listen for",
            commonErrors: ["Thinking preparation means memorising answers rather than focusing attention."],
          },
        },
        {
          id: "langb-u3-q26",
          difficulty: "core",
          totalMarks: 2,
          stem: "The signal word 'however' usually signals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sequence of events" },
              { id: "b", text: "A contrast or change of idea" },
              { id: "c", text: "An example or detail" },
              { id: "d", text: "The conclusion of the talk" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Signal words", statement: "Signal words mark the structure of spoken discourse." },
            ],
            steps: [
              { reasoning: "'However' marks a contrast or opposing idea in speech.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A contrast or change of idea",
            commonErrors: ["Confusing contrast markers with sequence markers like 'first' or 'then'."],
          },
        },
        {
          id: "langb-u3-q27",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why should numbers be written down immediately during listening?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are always repeated later" },
              { id: "b", text: "They are exact facts needed for answers" },
              { id: "c", text: "They take a long time to write" },
              { id: "d", text: "They are unimportant details" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Detail catching", statement: "Numbers and dates are exact facts that cannot be inferred later." },
            ],
            steps: [
              { reasoning: "Numbers are precise facts often tested in questions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They are exact facts needed for answers",
            commonErrors: ["Waiting to process the full sentence and forgetting the number."],
          },
        },
        {
          id: "langb-u3-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Detail listening' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing down every word of the recording" },
              { id: "b", text: "Catching specific facts such as names, dates and numbers" },
              { id: "c", text: "Guessing the meaning of unknown words" },
              { id: "d", text: "Listening only for the main topic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Detail listening", statement: "Catching specific information within a spoken text." },
            ],
            steps: [
              { reasoning: "Detail listening targets specific facts, not the overall topic.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Catching specific facts such as names, dates and numbers",
            commonErrors: ["Confusing detail listening with writing a full transcript."],
          },
        },
        {
          id: "langb-u3-q29",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You miss one word in the middle of a recording. What is the best response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop listening and wait for the next section" },
              { id: "b", text: "Panic and try to guess what was said" },
              { id: "c", text: "Keep listening and use context to recover the meaning" },
              { id: "d", text: "Ask the examiner to replay that part" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Listening recovery", statement: "Context usually clarifies a missed word if you keep listening." },
            ],
            steps: [
              { reasoning: "One missed word rarely blocks comprehension; surrounding context often clarifies it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Keep listening and use context to recover the meaning",
            commonErrors: ["Freezing or dwelling on the missed word instead of continuing."],
          },
        },
        {
          id: "langb-u3-q30",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Predictive listening' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guessing the correct answers before listening" },
              { id: "b", text: "Predicting likely content and vocabulary before hearing it" },
              { id: "c", text: "Repeating what the speaker says aloud" },
              { id: "d", text: "Predicting the speaker's accent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Predictive listening", statement: "Anticipating likely words and content from context before they are heard." },
            ],
            steps: [
              { reasoning: "Prediction prepares the ear for likely vocabulary based on questions and context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Predicting likely content and vocabulary before hearing it",
            commonErrors: ["Confusing prediction with guessing answers rather than preparing to recognise words."],
          },
        },
        {
          id: "langb-u3-q31",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is part of a good pre-listening routine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading all the questions before the audio starts" },
              { id: "b", text: "Writing down every word you hear" },
              { id: "c", text: "Translating the questions into your first language" },
              { id: "d", text: "Waiting silently until the recording ends" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pre-listening routine", statement: "Preparation before the audio directs attention during it." },
            ],
            steps: [
              { reasoning: "Reading questions first reveals what to listen for.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reading all the questions before the audio starts",
            commonErrors: ["Starting to listen without knowing what the questions ask."],
          },
        },
        {
          id: "langb-u3-q32",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why translating every word mentally slows down listening comprehension.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comprehension strategy", statement: "Whole-text comprehension beats word-by-word translation while listening." },
            ],
            steps: [
              { reasoning: "Listening and translating compete for the same limited attention.", marks: 1, markCode: "R" },
              { reasoning: "Translation is slower than speech, so you fall behind the recording.", marks: 1, markCode: "M" },
              { reasoning: "While decoding words you miss the next information.", marks: 1, markCode: "R" },
              { reasoning: "Aiming for overall meaning keeps pace with normal speech speed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translation is slower than speech and splits attention, causing you to miss information.",
            commonErrors: ["Believing every word must be understood for comprehension."],
          },
        },
        {
          id: "langb-u3-q33",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A speaker says: 'First, the festival begins on Friday. However, tickets are limited, so book early.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Signal word analysis", statement: "Signal words mark sequence, contrast and consequence in speech." },
            ],
            steps: [
              { reasoning: "'First' signals the start of a sequence of information.", marks: 1, markCode: "M" },
              { reasoning: "'However' signals a contrast — limited tickets work against the positive news.", marks: 1, markCode: "M" },
              { reasoning: "'So' signals a consequence — an action (booking early) is needed.", marks: 1, markCode: "M" },
              { reasoning: "'Friday' is an exact fact likely to be tested, so it should be noted immediately.", marks: 1, markCode: "A" },
              { reasoning: "Signal words let the listener prioritise which information matters most.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "'First' = sequence, 'however' = contrast, 'so' = consequence; 'Friday' is a testable fact.",
            commonErrors: ["Treating speech as an unstructured stream and missing the signal words' guidance."],
          },
        },
        {
          id: "langb-u3-q34",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain what 'predictive listening' means and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Predictive listening", statement: "Anticipating likely content and vocabulary from context before it is heard." },
            ],
            steps: [
              { reasoning: "It means guessing what will probably be said next from context.", marks: 1, markCode: "M" },
              { reasoning: "Predictions are based on the questions and the topic of the recording.", marks: 1, markCode: "M" },
              { reasoning: "Example: if asked 'When does it start?', predict time words like 'o'clock' or days.", marks: 1, markCode: "A" },
              { reasoning: "Prediction frees attention during listening because likely words are already primed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Predicting likely words/content before hearing it; e.g. expecting time expressions when asked 'when'.",
            commonErrors: ["Confusing prediction with guessing the answers themselves."],
          },
        },
        {
          id: "langb-u3-q35",
          difficulty: "core",
          totalMarks: 5,
          stem: "A question asks 'Where does the ceremony take place?' Describe exactly what you would listen for and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Targeted listening", statement: "Different question types require catching different categories of information." },
            ],
            steps: [
              { reasoning: "Listen for place vocabulary: 'hall', 'stadium', 'school', 'online', 'at the...'.", marks: 1, markCode: "M" },
              { reasoning: "Watch for prepositions 'in' and 'at' which often introduce places.", marks: 1, markCode: "M" },
              { reasoning: "Write the place down immediately as an exact fact.", marks: 1, markCode: "M" },
              { reasoning: "A place cannot be inferred from context later, so it must be caught on first hearing.", marks: 1, markCode: "R" },
              { reasoning: "Beforehand, predict venue-related vocabulary so it is recognised instantly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Catch place words after 'in/at', note them instantly; predict venue vocabulary beforehand.",
            commonErrors: ["Listening generally instead of targeting place expressions."],
          },
        },
        {
          id: "langb-u3-q36",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You will hear a talk about a new sports centre opening next month.",
          parts: [
            { label: "a", prompt: "Decide whether 'What is the main purpose of the talk?' needs gist or detail listening, and explain why.", marks: 2 },
            { label: "b", prompt: "List two signal words you would listen for and explain what each signals.", marks: 2 },
            { label: "c", prompt: "Explain what you should do if you miss a word during the talk.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Strategic listening", statement: "Match listening type to question type and recover gracefully from missed words." },
            ],
            steps: [
              { part: "a", reasoning: "'Main purpose' asks for the overall idea, so gist listening is needed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The purpose is the main message, not a specific fact, so no detail catching is required.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "E.g. 'however' signals a contrast or important change; 'for example' signals supporting detail.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both signal words mark where key information is likely to appear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Keep listening rather than stopping or panicking.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The meaning of the missed word usually becomes clear from surrounding context.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Dwelling on the missed word means missing the next information.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Gist listening — purpose is the main idea. (b) 'However' = contrast, 'for example' = detail. (c) Keep listening; context usually clarifies.",
            commonErrors: ["Using detail listening for a gist question and missing the overall message."],
          },
        },
      ],
    },
    {
      id: "langb-u3-note-taking",
      title: "Note-taking techniques",
      skill: "Take efficient notes while listening using abbreviations, symbols and structured layouts.",
      lesson: {
        sections: [
          {
            heading: "Notes, not transcripts",
            body: "Good listening notes capture **keywords**, not full sentences. You are listening, not typing — write fast. Use abbreviations ('b4' for before, 'w/' for with), symbols (arrows for cause, '+' for and), and short phrases. The notes are a memory aid for answering questions, not a record of the speech.",
          },
          {
            heading: "Structured layouts",
            body: "Match your note layout to the text's structure. For an ordered talk, use a **linear list** with numbers. For a comparison, use a **two-column table**. For a topic with aspects, use **branching/spider notes** — topic in the centre, details around it. Structured notes make answers easier to find under time pressure.",
          },
          {
            heading: "Note-taking for exams",
            body: "In Language B listening papers you may take notes during the audio and answer after. Develop a personal shorthand system and practise it daily. Leave space between notes for additions. If a section repeats information, underline it — repetition signals importance. Review your notes immediately after listening while memory is fresh.",
          },
        ],
        keyFormulas: [
          { name: "Note rules", statement: "Keywords + abbreviations + symbols; structure matches the talk's shape" },
          { name: "Layout choice", statement: "Sequence -> list; comparison -> table; topic + aspects -> spider" },
        ],
        workedExample: {
          problem: "A talk lists 'three reasons for the festival': food, music, community. How should you note it?",
          solution: "Spider or numbered list: 'Festival: 1) food 2) music 3) community' — keywords only, matching the talk's enumeration.",
        },
      },
      questions: [
        {
          id: "langb-u3-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should listening notes primarily contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete sentences copied exactly" },
              { id: "b", text: "Keywords and abbreviations" },
              { id: "c", text: "A summary paragraph" },
              { id: "d", text: "Translations of every phrase" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Efficient notes", statement: "Notes are memory aids — keywords and symbols, not transcripts." },
            ],
            steps: [
              { reasoning: "Full sentences cannot be written fast enough while listening.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Keywords and abbreviations",
            commonErrors: ["Trying to write full sentences and missing the next information."],
          },
        },
        {
          id: "langb-u3-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Match each note layout to the kind of talk it suits: list, table, spider diagram.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Layout matching", statement: "Note structure mirrors the talk's structure for fast retrieval." },
            ],
            steps: [
              { reasoning: "List (numbered): suits sequential or enumerated talks — steps, reasons, events.", marks: 1, markCode: "M" },
              { reasoning: "Table (columns): suits comparisons — two or more options side by side.", marks: 1, markCode: "M" },
              { reasoning: "Spider/branching: suits a central topic with several aspects around it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "List = sequence; table = comparison; spider = topic with aspects.",
            commonErrors: ["Using one layout for every talk regardless of structure."],
          },
        },
        {
          id: "langb-u3-q7",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why abbreviations and symbols make notes more effective during listening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Shorthand", statement: "Abbreviations reduce writing time so attention stays on listening." },
            ],
            steps: [
              { reasoning: "Listening and writing compete for attention — faster writing means less missed speech.", marks: 1, markCode: "R" },
              { reasoning: "Abbreviations ('b4', 'w/', 'info') and symbols (arrows, ticks) cut writing time dramatically.", marks: 1, markCode: "M" },
              { reasoning: "A personal consistent system becomes automatic with practice.", marks: 1, markCode: "M" },
              { reasoning: "The result: notes that keep pace with normal speech speed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Abbreviations/symbols write faster, keeping pace with speech and preserving attention.",
            commonErrors: ["Developing a system too complex to use quickly."],
          },
        },
        {
          id: "langb-u3-q8",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "During a talk you hear: 'There are three main problems: cost, transport and safety. Cost is the biggest issue.'",
          parts: [
            { label: "a", prompt: "Write notes for this information using keywords only.", marks: 2 },
            { label: "b", prompt: "Explain why you chose numbers or symbols in your notes.", marks: 2 },
            { label: "c", prompt: "Explain how these notes would help you answer 'What is the biggest problem?' afterwards.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Selective note-taking", statement: "Capture the list + the emphasised item; keywords suffice." },
            ],
            steps: [
              { part: "a", reasoning: "Notes capture: 3 problems = cost, transport, safety; cost = biggest.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Keywords only, no full sentences — e.g. '3 problems: cost, transport, safety. cost = biggest'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Numbers show there were exactly three items; symbols/marking show 'biggest' was emphasised.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Symbols like '=' or '*' capture relationships faster than words.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Notes already contain the answer keyword 'cost = biggest' for instant retrieval.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Structured notes prevent confusion with the other two problems.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The reader does not need to replay the audio mentally — notes carry the fact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) '3 problems: cost, transport, safety; cost = biggest'. (b) Numbers show count; symbols capture emphasis. (c) Answer is retrievable instantly from notes.",
            commonErrors: ["Writing full sentences and missing later information."],
          },
        },
        {
          id: "langb-u3-q37",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why are abbreviations useful in listening notes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They make notes look more professional" },
              { id: "b", text: "They let you write faster so you keep up with speech" },
              { id: "c", text: "They replace the need to listen carefully" },
              { id: "d", text: "They are required in all exams" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Shorthand", statement: "Abbreviations reduce writing time so attention stays on listening." },
            ],
            steps: [
              { reasoning: "Writing speed determines whether notes keep pace with speech.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They let you write faster so you keep up with speech",
            commonErrors: ["Choosing a system that is too complex to use quickly."],
          },
        },
        {
          id: "langb-u3-q38",
          difficulty: "core",
          totalMarks: 2,
          stem: "A talk compares the features of two different phones. Which note layout suits it best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A numbered list" },
              { id: "b", text: "A two-column table" },
              { id: "c", text: "A spider diagram" },
              { id: "d", text: "A single long sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Layout matching", statement: "Comparisons suit side-by-side columns." },
            ],
            steps: [
              { reasoning: "Comparing two items is clearest in columns so features align.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A two-column table",
            commonErrors: ["Using a list layout for a comparison and losing the side-by-side view."],
          },
        },
        {
          id: "langb-u3-q39",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Listening notes should primarily contain:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Full sentences in the target language" },
              { id: "b", text: "Keywords and abbreviations" },
              { id: "c", text: "A translation of the whole talk" },
              { id: "d", text: "Every word the speaker says" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Efficient notes", statement: "Notes are memory aids built from keywords, not transcripts." },
            ],
            steps: [
              { reasoning: "Keywords and abbreviations capture meaning fast enough while listening.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Keywords and abbreviations",
            commonErrors: ["Writing full sentences and missing later information."],
          },
        },
        {
          id: "langb-u3-q40",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a speaker repeats a piece of information during a talk, you should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore it because it was already said" },
              { id: "b", text: "Underline or mark it because repetition signals importance" },
              { id: "c", text: "Write it out in full as a sentence" },
              { id: "d", text: "Stop taking notes until the repetition ends" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Selective attention", statement: "Repetition in speech signals that information is important." },
            ],
            steps: [
              { reasoning: "Speakers repeat points they want the audience to remember.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Underline or mark it because repetition signals importance",
            commonErrors: ["Assuming repeated information is redundant rather than emphasised."],
          },
        },
        {
          id: "langb-u3-q41",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should you leave space between lines in your listening notes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the notes look neater" },
              { id: "b", text: "It gives room to add forgotten details later" },
              { id: "c", text: "It slows you down so you listen more" },
              { id: "d", text: "It is a rule of all examinations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Note layout", statement: "Space between notes allows later additions without rewriting." },
            ],
            steps: [
              { reasoning: "Details missed while listening can be added in the gaps afterwards.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It gives room to add forgotten details later",
            commonErrors: ["Filling every line and having no space for additions."],
          },
        },
        {
          id: "langb-u3-q42",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it useful to review your notes immediately after a listening?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The audio will be played again" },
              { id: "b", text: "Your memory of the talk is still fresh" },
              { id: "c", text: "It is required before answering questions" },
              { id: "d", text: "The notes will disappear otherwise" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Note review", statement: "Reviewing notes while memory is fresh fills gaps and checks accuracy." },
            ],
            steps: [
              { reasoning: "Memory fades quickly after listening, so immediate review is most accurate.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Your memory of the talk is still fresh",
            commonErrors: ["Waiting too long to review notes and forgetting context."],
          },
        },
        {
          id: "langb-u3-q43",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the best example of an abbreviation for listening notes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'b4' meaning 'before'" },
              { id: "b", text: "'xylophone' meaning 'before'" },
              { id: "c", text: "'zzzz' meaning 'before'" },
              { id: "d", text: "Spelling 'before' out in full every time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Personal shorthand", statement: "Short, consistent abbreviations speed up note-taking." },
            ],
            steps: [
              { reasoning: "'b4' is short, clear and easy to write quickly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 'b4' meaning 'before'",
            commonErrors: ["Inventing too many symbols that cannot be remembered under pressure."],
          },
        },
        {
          id: "langb-u3-q44",
          difficulty: "core",
          totalMarks: 4,
          stem: "A speaker lists three reasons for joining the club: it is cheap, it is fun, and you meet people. Describe how you would note this.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structured notes", statement: "Match the note layout to the talk's enumeration." },
            ],
            steps: [
              { reasoning: "Use a numbered list or spider layout matching the three-point structure.", marks: 1, markCode: "M" },
              { reasoning: "Record keywords only, e.g. 'club: 1) cheap 2) fun 3) meet ppl'.", marks: 1, markCode: "M" },
              { reasoning: "Numbers capture that there were exactly three reasons.", marks: 1, markCode: "A" },
              { reasoning: "The mirrored layout makes each reason easy to retrieve when answering.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'club: 1) cheap 2) fun 3) meet ppl' — numbered keywords matching the talk's structure.",
            commonErrors: ["Writing full sentences and losing track of later points."],
          },
        },
        {
          id: "langb-u3-q45",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why the layout of your notes should match the structure of the talk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structural mirroring", statement: "Notes organised like the talk are faster to write and faster to search." },
            ],
            steps: [
              { reasoning: "You can usually predict the talk's structure from the questions or topic.", marks: 1, markCode: "R" },
              { reasoning: "Sequence suits lists, comparisons suit tables, topics with aspects suit spider notes.", marks: 1, markCode: "M" },
              { reasoning: "A matching layout lets you write faster because you know where each new point goes.", marks: 1, markCode: "M" },
              { reasoning: "A mismatched layout loses track of the structure and slows retrieval.", marks: 1, markCode: "R" },
              { reasoning: "Under exam time pressure, organised notes mean faster, more accurate answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Matching layout speeds writing and retrieval; mismatched layouts lose structure and cost time.",
            commonErrors: ["Using one layout for every talk regardless of its shape."],
          },
        },
        {
          id: "langb-u3-q46",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You hear: 'The trip leaves at 9 am from the main gate. It costs 20 euros. Bring a packed lunch.'",
          parts: [
            { label: "a", prompt: "Write notes for this information using keywords and symbols.", marks: 2 },
            { label: "b", prompt: "Explain why you used the symbols or numbers you chose.", marks: 2 },
            { label: "c", prompt: "Explain how your notes would help answer 'When does the trip leave?', 'Where does it leave from?' and 'What does it cost?'", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Selective note-taking", statement: "Capture exact facts as keywords and symbols; answers become instant lookups." },
            ],
            steps: [
              { part: "a", reasoning: "Notes capture all three facts, e.g. 'trip: 9am, main gate, 20€, packed lunch'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Keywords and symbols only, no full sentences.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Numbers like '9' and '20' are exact facts that cannot be guessed, and '€' saves writing time.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Symbols write faster than words, keeping pace with speech.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each answer is directly retrievable from the notes without replaying the audio mentally.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The labelled facts ('9am', 'gate', '20€') cannot be confused with each other.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Structured notes turn three scattered facts into instant answers under time pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'trip: 9am, main gate, 20€, packed lunch'. (b) Numbers are exact; symbols are fast. (c) Each answer is an instant lookup.",
            commonErrors: ["Writing full sentences and missing later information."],
          },
        },
        {
          id: "langb-u3-q47",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "List four features of effective listening notes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Note quality", statement: "Effective notes are fast to write, structured and easy to search." },
            ],
            steps: [
              { reasoning: "Keywords only, not full sentences.", marks: 1, markCode: "M" },
              { reasoning: "Abbreviations and symbols for speed.", marks: 1, markCode: "M" },
              { reasoning: "A layout that mirrors the talk's structure.", marks: 1, markCode: "M" },
              { reasoning: "Legible and spaced so details can be added later.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Keywords, abbreviations/symbols, matching layout, space for additions.",
            commonErrors: ["Listing features of essays rather than notes."],
          },
        },
        {
          id: "langb-u3-q48",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain the difference between notes and a transcript, and why notes are better during exams.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Notes vs transcript", statement: "A transcript records every word; notes record only what is needed." },
            ],
            steps: [
              { reasoning: "A transcript copies every word in full sentences.", marks: 1, markCode: "M" },
              { reasoning: "It is impossible to write at speech speed, so a transcript cannot keep pace while listening.", marks: 1, markCode: "R" },
              { reasoning: "Notes capture only keywords and key facts.", marks: 1, markCode: "M" },
              { reasoning: "Faster writing keeps your attention on listening rather than on the page.", marks: 1, markCode: "M" },
              { reasoning: "Exam questions need facts and ideas, not verbatim text, so notes serve the purpose better.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transcripts cannot keep pace with speech; keyword notes preserve attention and still hold the needed facts.",
            commonErrors: ["Believing more writing equals better listening performance."],
          },
        },
      ],
    },
  ],
};
