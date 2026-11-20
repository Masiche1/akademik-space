import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cie-ol-el-lesson-4-2",
  code: "4-2",
  title: "Sentence structure and style",
  goal: "I CAN analyse and use sentence structures for effect.",
  standards: ["1123 Writing: sentence variety"],
  vocabulary: [
    { term: "Sentence variety", definition: "Mixing short and long sentences for effect." },
    { term: "Parallel structure", definition: "Consistent grammatical form in lists/series." },
    { term: "Emphasis", definition: "Making something stand out — punctuation, position, repetition." },
    { term: "Rhythm", definition: "Flow and pace created by sentence structure." },
    { term: "Climax", definition: "Building to a peak — order of importance." },
    { term: "Antithesis", definition: "Contrasting ideas in balanced structure." },
  ],
  concepts: [
    {
      id: "cie-ol-el-sentence-variety",
      title: "Sentence variety",
      skill: "Use varied sentence structures for rhythm and emphasis.",
      lesson: {
        sections: [
          {
            heading: "Short vs long sentences",
            body: "Short sentences: punchy, dramatic, urgent. Long sentences: flowing, complex ideas, descriptive. Vary for effect.",
          },
          {
            heading: "Parallel structure",
            body: "Lists and series should use consistent grammatical form — 'I came, I saw, I conquered' not 'I came, saw, and was conquering'.",
          },
          {
            heading: "Emphasis techniques",
            body: "Front-load important information, use repetition, place key words at end, use punctuation for pause/emphasis.",
          },
        ],
        keyFormulas: [
          { name: "Sentence variety", statement: "Short=punchy; long=flowing; parallel=consistent; emphasis=position/repetition/punctuation." },
        ],
        workedExample: {
          problem: "Improve: 'The cat sat on the mat and the dog sat on the rug.'",
          solution: "'The cat sat on the mat; the dog, on the rug.' — varied structure, parallel meaning.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-sv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'parallel structure'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consistent grammatical form" },
              { id: "b", text: "Random sentence length" },
              { id: "c", text: "Only long sentences" },
              { id: "d", text: "Only short sentences" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel structure", statement: "Consistent grammatical form in lists/series." },
            ],
            steps: [
              { reasoning: "Parallel = consistent form.", working: "consistent", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Consistent grammatical form",
            commonErrors: ["Choosing (b) — that's variety, not parallel."],
          },
        },
        {
          id: "cie-ol-el-sv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two uses of short sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Short sentences", statement: "Punchy, dramatic, urgent, emphasis." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "uses", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Punchy, dramatic, urgent, emphasis (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-sv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how sentence position creates emphasis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Emphasis", statement: "Important info at start/end; repetition emphasises; punctuation creates pause." },
            ],
            steps: [
              { reasoning: "Front-load or end-load important information.", working: "position", marks: 1, markCode: "AO2" },
              { reasoning: "Repetition emphasises key ideas.", working: "repetition", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation (dash, colon) creates pause for emphasis.", working: "punctuation", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Position, repetition, punctuation create emphasis.",
            commonErrors: ["Not using emphasis techniques — key points get lost."],
          },
        },
        {
          id: "cie-ol-el-sv-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply sentence variety skills.",
          parts: [
            { label: "a", prompt: "Define parallel structure.", marks: 1 },
            { label: "b", prompt: "Name short sentence uses.", marks: 2 },
            { label: "c", prompt: "Explain emphasis techniques.", marks: 3 },
            { label: "d", prompt: "How does rhythm affect reading?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence variety", statement: "Parallel structure, short sentences, emphasis, rhythm." },
            ],
            steps: [
              { part: "a", reasoning: "Consistent grammatical form in lists/series.", working: "parallel", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Punchy, dramatic, urgent, emphasis.", working: "uses", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Position, repetition, punctuation.", working: "emphasis", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple techniques.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Varied rhythm creates interest; consistent rhythm can be monotonous.", working: "rhythm", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) consistent form (b) punchy/dramatic/urgent (c) position/repetition/punctuation (d) variety=interest",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple uses.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple techniques.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Rhythm explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Monotonous rhythm — all sentences same length."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-advanced-techniques",
      title: "Advanced stylistic techniques",
      skill: "Use advanced techniques for emphasis and effect.",
      lesson: {
        sections: [
          {
            heading: "Antithesis",
            body: "Balanced contrast — 'To be or not to be'. Creates memorable, impactful statements.",
          },
          {
            heading: "Anaphora",
            body: "Repetition at start of successive clauses — 'We shall fight on the beaches, we shall fight on the landing grounds'. Creates rhythm and emphasis.",
          },
          {
            heading: "Triads",
            body: "Three-part lists — 'government of the people, by the people, for the people'. Memorable and persuasive.",
          },
        ],
        keyFormulas: [
          { name: "Advanced techniques", statement: "Antithesis=contrast; anaphora=repetition at start; triads=three-part lists." },
        ],
        workedExample: {
          problem: "Identify technique: 'I came, I saw, I conquered.'",
          solution: "Anaphora — repetition of 'I' at start of each clause creates rhythm and emphasis.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-at-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'antithesis'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Balanced contrast" },
              { id: "b", text: "Repetition at start" },
              { id: "c", text: "Three-part list" },
              { id: "d", text: "Sound repetition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Antithesis", statement: "Balanced contrast of ideas." },
            ],
            steps: [
              { reasoning: "Antithesis = contrast.", working: "contrast", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Balanced contrast",
            commonErrors: ["Choosing (b) — that's anaphora."],
          },
        },
        {
          id: "cie-ol-el-at-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two advanced stylistic techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Antithesis, anaphora, triads." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Antithesis, anaphora, triads (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-at-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the effect of triads.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Triads", statement: "Three-part lists are memorable, persuasive, rhythmic." },
            ],
            steps: [
              { reasoning: "Three-part lists are memorable — easier to recall.", working: "memorable", marks: 1, markCode: "AO2" },
              { reasoning: "Creates rhythm — pleasing to hear.", working: "rhythm", marks: 1, markCode: "AO2" },
              { reasoning: "Persuasive — suggests completeness/thoroughness.", working: "persuasive", marks: 1, markCode: "AO2" },
              { reasoning: "Effects explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Memorable, rhythmic, persuasive — effective technique.",
            commonErrors: ["Thinking it's just a list — has rhetorical effect."],
          },
        },
        {
          id: "cie-ol-el-at-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply advanced stylistic techniques.",
          parts: [
            { label: "a", prompt: "Define antithesis.", marks: 1 },
            { label: "b", prompt: "Define anaphora.", marks: 2 },
            { label: "c", prompt: "Define triads.", marks: 2 },
            { label: "d", prompt: "How to use techniques effectively?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Stylistic techniques", statement: "Antithesis, anaphora, triads — for emphasis." },
            ],
            steps: [
              { part: "a", reasoning: "Balanced contrast of ideas.", working: "antithesis", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Repetition at start of successive clauses.", working: "anaphora", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Three-part lists — memorable, rhythmic.", working: "triads", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Use for emphasis, don't overuse, match to purpose.", working: "effective", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple guidelines.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) contrast (b) repetition at start (c) three-part lists (d) emphasis/balance/purpose",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 4", marks: "3-4", descriptor: "Guidelines clear.", part: "d" },
              { level: "Level 3", marks: "2", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Overusing techniques — becomes pretentious."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-rhetorical-analysis",
      title: "Rhetorical analysis",
      skill: "Analyse persuasive language in texts.",
      lesson: {
        sections: [
          {
            heading: "Persuasive techniques",
            body: "Rhetorical questions, emotive language, statistics, expert endorsements, inclusive language ('we'), direct address ('you').",
          },
          {
            heading: "Logical vs emotional appeals",
            body: "Logical: facts, statistics, reasoning. Emotional: feelings, values, fears, hopes. Effective persuasion uses both.",
          },
          {
            heading: "Audience awareness",
            body: "Techniques chosen based on audience — formal for officials, emotional for general public, technical for experts.",
          },
        ],
        keyFormulas: [
          { name: "Rhetorical analysis", statement: "Persuasive techniques: rhetorical Q, emotive, statistics, inclusive; logical+emotional appeals." },
        ],
        workedExample: {
          problem: "Analyse: 'Don't you want a brighter future for your children?'",
          solution: "Rhetorical question + emotive language ('brighter future', 'children') + direct address — appeals to emotion and self-interest.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-ra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'rhetorical question'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Question not expecting answer" },
              { id: "b", text: "Real question" },
              { id: "c", text: "Command" },
              { id: "d", text: "Statement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhetorical question", statement: "Question asked for effect, not expecting answer." },
            ],
            steps: [
              { reasoning: "Rhetorical = for effect.", working: "effect", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Question not expecting answer",
            commonErrors: ["Thinking it's a real question."],
          },
        },
        {
          id: "cie-ol-el-ra-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two persuasive techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Techniques", statement: "Rhetorical questions, emotive language, statistics, expert endorsements." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rhetorical questions, emotive language, statistics, expert endorsements (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-ra-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain logical vs emotional appeals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Appeals", statement: "Logical=facts/reasoning; emotional=feelings/values; both effective together." },
            ],
            steps: [
              { reasoning: "Logical appeals use facts, statistics, reasoning.", working: "logical", marks: 1, markCode: "AO2" },
              { reasoning: "Emotional appeals use feelings, values, fears, hopes.", working: "emotional", marks: 1, markCode: "AO2" },
              { reasoning: "Both together create stronger persuasion.", working: "together", marks: 1, markCode: "AO2" },
              { reasoning: "Difference explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Logical=facts/reasoning; emotional=feelings/values; both effective.",
            commonErrors: ["Only one type — best persuasion uses both."],
          },
        },
        {
          id: "cie-ol-el-ra-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse persuasive techniques.",
          parts: [
            { label: "a", prompt: "Define rhetorical question.", marks: 1 },
            { label: "b", prompt: "Name persuasive techniques.", marks: 3 },
            { label: "c", prompt: "Explain logical vs emotional.", marks: 2 },
            { label: "d", prompt: "How does audience affect technique choice?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical analysis", statement: "Rhetorical Q, techniques, appeals, audience." },
            ],
            steps: [
              { part: "a", reasoning: "Question asked for effect, not expecting answer.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Rhetorical Q, emotive, statistics, expert, inclusive, direct address.", working: "techniques", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Three+ valid.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Logical=facts/reasoning; emotional=feelings/values.", working: "appeals", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Formal for officials, emotional for public, technical for experts.", working: "audience", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple audiences.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) rhetorical Q (b) techniques (c) logical/emotional (d) audience determines",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Three+ techniques.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Audience explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Not considering audience — technique must match."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-unit4b-notes",
      title: "Unit 4 — revision notes (part 2)",
      summary: "Sentence variety, stylistic techniques, rhetorical analysis.",
      sections: [
        {
          heading: "Style",
          body: "Sentence variety: short=punchy, long=flowing. Parallel structure, emphasis, rhythm. Advanced: antithesis, anaphora, triads. Rhetorical: questions, emotive, statistics.",
        },
      ],
    },
  ],
};
