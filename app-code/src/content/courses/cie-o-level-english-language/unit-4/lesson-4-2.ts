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
              { id: "a", text: "Random sentence length" },
              { id: "b", text: "Consistent grammatical form" },
              { id: "c", text: "Only long sentences" },
              { id: "d", text: "Only short sentences" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-el-sv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'sentence variety'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using only long sentences" },
              { id: "b", text: "Using only short sentences" },
              { id: "c", text: "Repeating sentences" },
              { id: "d", text: "Using different sentence lengths and structures" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sentence variety", statement: "Different lengths and structures." },
            ],
            steps: [
              { reasoning: "Variety = different lengths/structures.", working: "variety", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Using different sentence lengths and structures",
            commonErrors: ["Choosing (b) — that's monotony."],
          },
        },
        {
          id: "cie-ol-el-sv-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph has 10 sentences; 4 are short and 6 are long. (a) How many sentences are there? (b) How many are long sentences?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence counting", statement: "Count short vs long sentences." },
            ],
            steps: [
              { reasoning: "10 sentences are given.", working: "10", marks: 1, markCode: "AO1" },
              { reasoning: "6 are long sentences.", working: "6", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 10; (b) 6",
            commonErrors: ["Confusing short and long."],
          },
        },
        {
          id: "cie-ol-el-sv-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of sentence variety?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mixing short and long sentences" },
              { id: "b", text: "All sentences same length" },
              { id: "c", text: "All sentences long" },
              { id: "d", text: "All sentences short" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sentence variety", statement: "Mixing lengths and structures." },
            ],
            steps: [
              { reasoning: "Mixing = variety.", working: "mixing", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Mixing short and long sentences",
            commonErrors: ["Choosing (b) — that's monotony."],
          },
        },
        {
          id: "cie-ol-el-sv-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of sentence structures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence structures", statement: "Simple, compound, complex, compound-complex." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "structures", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Simple, compound, complex, compound-complex (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-sv-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A paragraph has 5 simple sentences, 3 compound sentences and 2 complex sentences. (a) How many simple sentences are there? (b) How many compound sentences are there? (c) How many total sentences are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
              { label: "c", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence structure counting", statement: "Count each sentence type." },
            ],
            steps: [
              { reasoning: "5 simple sentences are given.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "3 compound sentences are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "5 plus 3 plus 2 equals 10 total sentences.", working: "5 + 3 + 2 = 10", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 5; (b) 3; (c) 10",
            commonErrors: ["Forgetting complex sentences in total."],
          },
        },
        {
          id: "cie-ol-el-sv-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence structure is most engaging?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All long" },
              { id: "b", text: "All short" },
              { id: "c", text: "Varied — mix of short and long" },
              { id: "d", text: "All same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Variety effect", statement: "Varied structure engages reader." },
            ],
            steps: [
              { reasoning: "Varied = engaging.", working: "varied", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Varied — mix of short and long",
            commonErrors: ["Choosing (b) — monotony."],
          },
        },
        {
          id: "cie-ol-el-sv-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why sentence variety improves writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Variety benefit", statement: "Engages reader, controls pace, adds emphasis." },
            ],
            steps: [
              { reasoning: "Variety engages reader — avoids monotony.", working: "engage", marks: 1, markCode: "AO2" },
              { reasoning: "Controls pace — short for action, long for description.", working: "pace", marks: 1, markCode: "AO2" },
              { reasoning: "Adds emphasis and rhythm.", working: "emphasis", marks: 1, markCode: "AO2" },
              { reasoning: "Benefits explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Engages, controls pace, adds emphasis.",
            commonErrors: ["Monotony — all same length."],
          },
        },
        {
          id: "cie-ol-el-sv-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a complex sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It rained" },
              { id: "b", text: "Although it rained, we went out" },
              { id: "c", text: "Rain and out" },
              { id: "d", text: "We went out" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complex sentence", statement: "Independent + dependent clause." },
            ],
            steps: [
              { reasoning: "(a) has dependent clause 'although'.", working: "complex", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Although it rained, we went out",
            commonErrors: ["Choosing (b) — that's simple."],
          },
        },
        {
          id: "cie-ol-el-sv-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A paragraph has 8 sentences; 5 are short and 3 are long. How many total sentences are there? (b) If 30% of 50 sentences are complex, how many complex sentences are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 15, unit: "sentences" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence analysis", statement: "Count sentences; calculate percentages." },
            ],
            steps: [
              { reasoning: "8 sentences are given.", working: "8", marks: 1, markCode: "AO1" },
              { reasoning: "30% of 50 equals 15 complex sentences.", working: "0.3 x 50 = 15", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 8; (b) 15 sentences",
            commonErrors: ["Not calculating percentages correctly."],
          },
        },
        {
          id: "cie-ol-el-sv-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply sentence variety skills.",
          parts: [
            { label: "a", prompt: "Define sentence variety.", marks: 2 },
            { label: "b", prompt: "Name two sentence structures.", marks: 2 },
            { label: "c", prompt: "Why does variety improve writing?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence variety", statement: "Definition, structures, benefits." },
            ],
            steps: [
              { part: "a", reasoning: "Different lengths and structures.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Simple, compound, complex, compound-complex — any two.", working: "structures", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Engages, controls pace, adds emphasis.", working: "benefits", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) different lengths (b) two structures (c) engage+pace+emphasis",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Monotony — all same length."],
          },
        },
        {
          id: "cie-ol-el-sv-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a compound sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Although she ran" },
              { id: "b", text: "She ran and he walked" },
              { id: "c", text: "She ran quickly" },
              { id: "d", text: "She ran" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound sentence", statement: "Two independent clauses joined." },
            ],
            steps: [
              { reasoning: "(a) has two independent clauses.", working: "compound", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** She ran and he walked",
            commonErrors: ["Choosing (b) — that's simple."],
          },
        },
        {
          id: "cie-ol-el-sv-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A paragraph has 12 sentences; 4 are simple, 4 are compound and 4 are complex. How many total sentences are there? (b) If 25% of 80 sentences are complex, how many complex sentences are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 20, unit: "sentences" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence analysis", statement: "Count sentences; calculate percentages." },
            ],
            steps: [
              { reasoning: "12 sentences are given.", working: "12", marks: 1, markCode: "AO1" },
              { reasoning: "25% of 80 equals 20 complex sentences.", working: "0.25 x 80 = 20", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 12; (b) 20 sentences",
            commonErrors: ["Not calculating percentages correctly."],
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
              { id: "b", text: "Three-part list" },
              { id: "c", text: "Repetition at start" },
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
        {
          id: "cie-ol-el-at-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'personification'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Giving human qualities to non-human things" },
              { id: "b", text: "Exaggerating" },
              { id: "c", text: "Repeating sounds" },
              { id: "d", text: "Comparing using 'like'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personification", statement: "Human qualities to non-human." },
            ],
            steps: [
              { reasoning: "Personification = human qualities.", working: "human", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Giving human qualities to non-human things",
            commonErrors: ["Choosing (b) — that's simile."],
          },
        },
        {
          id: "cie-ol-el-at-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A poem uses 4 metaphors and 3 similes. (a) How many metaphors are there? (b) How many figurative devices are used in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Device counting", statement: "Count figurative devices." },
            ],
            steps: [
              { reasoning: "4 metaphors are given.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "4 plus 3 equals 7 total devices.", working: "4 + 3 = 7", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 4; (b) 7",
            commonErrors: ["Forgetting similes in total."],
          },
        },
        {
          id: "cie-ol-el-at-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'alliteration'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exaggerating" },
              { id: "b", text: "Giving human qualities" },
              { id: "c", text: "Repetition of initial consonant sounds" },
              { id: "d", text: "Comparing using 'like'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alliteration", statement: "Repetition of initial consonant sounds." },
            ],
            steps: [
              { reasoning: "Alliteration = consonant repetition.", working: "consonant", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Repetition of initial consonant sounds",
            commonErrors: ["Choosing (b) — that's simile."],
          },
        },
        {
          id: "cie-ol-el-at-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two poetic devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Poetic devices", statement: "Alliteration, assonance, rhyme, metaphor, simile." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "devices", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Alliteration, assonance, rhyme, metaphor, simile (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-at-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A poem has 5 alliterations, 3 metaphors and 2 personifications. (a) How many alliterations are there? (b) How many metaphors are there? (c) How many poetic devices are used in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 3 },
              { label: "c", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poetic device counting", statement: "Count each device type." },
            ],
            steps: [
              { reasoning: "5 alliterations are given.", working: "5", marks: 1, markCode: "AO1" },
              { reasoning: "3 metaphors are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "5 plus 3 plus 2 equals 10 devices.", working: "5 + 3 + 2 = 10", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 5; (b) 3; (c) 10",
            commonErrors: ["Forgetting personifications in total."],
          },
        },
        {
          id: "cie-ol-el-at-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of hyperbole?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He runs fast" },
              { id: "b", text: "I've told you a million times" },
              { id: "c", text: "The sky is blue" },
              { id: "d", text: "She is tall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hyperbole", statement: "Exaggeration for effect." },
            ],
            steps: [
              { reasoning: "'Million times' = exaggeration.", working: "exaggeration", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** I've told you a million times",
            commonErrors: ["Choosing (b) — literal."],
          },
        },
        {
          id: "cie-ol-el-at-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how advanced techniques enhance writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Advanced techniques", statement: "Figurative language, rhythm, imagery create depth." },
            ],
            steps: [
              { reasoning: "Figurative language creates vivid imagery.", working: "imagery", marks: 1, markCode: "AO2" },
              { reasoning: "Rhythm and sound devices add musicality.", working: "rhythm", marks: 1, markCode: "AO2" },
              { reasoning: "Techniques add depth and emotional impact.", working: "depth", marks: 1, markCode: "AO2" },
              { reasoning: "Enhancement explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Imagery + rhythm + depth.",
            commonErrors: ["Plain writing — no techniques."],
          },
        },
        {
          id: "cie-ol-el-at-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of personification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The wind whispered" },
              { id: "b", text: "The wind moved" },
              { id: "c", text: "The wind blew" },
              { id: "d", text: "The wind was strong" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personification example", statement: "Wind 'whispered' = human quality." },
            ],
            steps: [
              { reasoning: "'Whispered' gives human quality.", working: "whispered", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The wind whispered",
            commonErrors: ["Choosing (b) — literal."],
          },
        },
        {
          id: "cie-ol-el-at-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A poem uses 8 figurative devices in 100 words. What percentage is figurative? (b) If they add 2 more devices, how many are there in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "%" },
              { label: "b", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Technique analysis", statement: "Calculate figurative percentage; count devices." },
            ],
            steps: [
              { reasoning: "8 out of 100 equals 8%.", working: "8%", marks: 1, markCode: "AO2" },
              { reasoning: "8 plus 2 equals 10 devices.", working: "8 + 2 = 10", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 8%; (b) 10",
            commonErrors: ["Not calculating percentage correctly."],
          },
        },
        {
          id: "cie-ol-el-at-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply advanced techniques.",
          parts: [
            { label: "a", prompt: "Define personification.", marks: 2 },
            { label: "b", prompt: "Name two poetic devices.", marks: 2 },
            { label: "c", prompt: "How do techniques enhance writing?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Advanced techniques", statement: "Personification, devices, enhancement." },
            ],
            steps: [
              { part: "a", reasoning: "Human qualities to non-human.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Alliteration, assonance, rhyme, metaphor — any two.", working: "devices", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Imagery + rhythm + depth.", working: "enhance", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) human qualities (b) two devices (c) imagery+rhythm+depth",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Plain writing — no techniques."],
          },
        },
        {
          id: "cie-ol-el-at-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of alliteration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He walked slowly" },
              { id: "b", text: "She ran fast" },
              { id: "c", text: "The cat sat" },
              { id: "d", text: "Peter Piper picked peppers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alliteration example", statement: "Repetition of initial consonants." },
            ],
            steps: [
              { reasoning: "'Peter Piper' = alliteration.", working: "alliteration", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Peter Piper picked peppers",
            commonErrors: ["Choosing (b) — no repetition."],
          },
        },
        {
          id: "cie-ol-el-at-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A poem uses 6 alliterations and 4 metaphors. How many total devices are there? (b) If 15% of 80 words are figurative, how many figurative words are there?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 12, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Technique analysis", statement: "Count devices; calculate percentages." },
            ],
            steps: [
              { reasoning: "6 plus 4 equals 10 total devices.", working: "6 + 4 = 10", marks: 1, markCode: "AO2" },
              { reasoning: "15% of 80 equals 12 figurative words.", working: "0.15 x 80 = 12", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 10; (b) 12 words",
            commonErrors: ["Not calculating percentages correctly."],
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
              { id: "a", text: "Statement" },
              { id: "b", text: "Question not expecting answer" },
              { id: "c", text: "Command" },
              { id: "d", text: "Real question" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-el-ra-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'rhetorical analysis'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarising text" },
              { id: "b", text: "Correcting grammar" },
              { id: "c", text: "Analysing how a writer persuades readers" },
              { id: "d", text: "Counting words" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhetorical analysis", statement: "Analysing persuasive techniques." },
            ],
            steps: [
              { reasoning: "Rhetorical analysis = persuasive techniques.", working: "persuasive", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Analysing how a writer persuades readers",
            commonErrors: ["Choosing (c) — that's summarising."],
          },
        },
        {
          id: "cie-ol-el-ra-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A speech uses 3 rhetorical questions and 2 metaphors. (a) How many rhetorical questions are there? (b) How many persuasive devices are used in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical device counting", statement: "Count persuasive devices." },
            ],
            steps: [
              { reasoning: "3 rhetorical questions are given.", working: "3", marks: 1, markCode: "AO1" },
              { reasoning: "3 plus 2 equals 5 total devices.", working: "3 + 2 = 5", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) 3; (b) 5",
            commonErrors: ["Forgetting metaphors in total."],
          },
        },
        {
          id: "cie-ol-el-ra-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'rhetorical question'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Question needing answer" },
              { id: "b", text: "Question asked for effect, not answer" },
              { id: "c", text: "Exclamation" },
              { id: "d", text: "Statement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhetorical question", statement: "Question for effect, not answer." },
            ],
            steps: [
              { reasoning: "Rhetorical = for effect.", working: "effect", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Question asked for effect, not answer",
            commonErrors: ["Choosing (b) — that's genuine question."],
          },
        },
        {
          id: "cie-ol-el-ra-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two rhetorical devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rhetorical devices", statement: "Rhetorical question, repetition, metaphor, parallelism." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "devices", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Rhetorical question, repetition, metaphor, parallelism (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-ra-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A speech uses 4 repetitions, 3 metaphors and 2 rhetorical questions. (a) How many repetitions are there? (b) How many metaphors are there? (c) How many rhetorical devices are used in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
              { label: "c", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical device counting", statement: "Count each device type." },
            ],
            steps: [
              { reasoning: "4 repetitions are given.", working: "4", marks: 1, markCode: "AO1" },
              { reasoning: "3 metaphors are given.", working: "3", marks: 1, markCode: "AO2" },
              { reasoning: "4 plus 3 plus 2 equals 9 devices.", working: "4 + 3 + 2 = 9", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4; (b) 3; (c) 9",
            commonErrors: ["Forgetting rhetorical questions in total."],
          },
        },
        {
          id: "cie-ol-el-ra-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of parallelism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soldiers died" },
              { id: "b", text: "We fought" },
              { id: "c", text: "We shall fight on the beaches, we shall fight on the landing grounds" },
              { id: "d", text: "The war ended" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallelism", statement: "Repeated grammatical structure." },
            ],
            steps: [
              { reasoning: "Repeated structure = parallelism.", working: "parallel", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** We shall fight on the beaches, we shall fight on the landing grounds",
            commonErrors: ["Choosing (b) — no repetition."],
          },
        },
        {
          id: "cie-ol-el-ra-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how rhetorical devices persuade readers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical persuasion", statement: "Devices create emphasis, emotion, engagement." },
            ],
            steps: [
              { reasoning: "Devices create emphasis and memorability.", working: "emphasis", marks: 1, markCode: "AO2" },
              { reasoning: "Emotive language creates emotional response.", working: "emotional", marks: 1, markCode: "AO2" },
              { reasoning: "Rhetorical questions engage reader thinking.", working: "engage", marks: 1, markCode: "AO2" },
              { reasoning: "Persuasion explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Emphasis + emotion + engagement.",
            commonErrors: ["Not linking devices to persuasion."],
          },
        },
        {
          id: "cie-ol-el-ra-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of repetition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "We fought" },
              { id: "b", text: "We must fight, we must win, we must never surrender" },
              { id: "c", text: "Soldiers died" },
              { id: "d", text: "The war ended" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Repetition example", statement: "Repeated words/phrases for emphasis." },
            ],
            steps: [
              { reasoning: "Repeated 'we must' = repetition.", working: "repetition", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** We must fight, we must win, we must never surrender",
            commonErrors: ["Choosing (b) — no repetition."],
          },
        },
        {
          id: "cie-ol-el-ra-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A speech uses 5 rhetorical devices; a student identifies only 3 of them. How many are missed? (b) If the speech is 400 words and has 4 devices, how many words per device on average?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 100, unit: "words" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical analysis", statement: "Identify all devices; calculate distribution." },
            ],
            steps: [
              { reasoning: "5 minus 3 equals 2 missed devices.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "400 divided by 4 equals 100 words per device.", working: "400 / 4 = 100", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 2; (b) 100 words",
            commonErrors: ["Missing rhetorical devices."],
          },
        },
        {
          id: "cie-ol-el-ra-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Apply rhetorical analysis skills.",
          parts: [
            { label: "a", prompt: "Define rhetorical analysis.", marks: 2 },
            { label: "b", prompt: "Name two rhetorical devices.", marks: 2 },
            { label: "c", prompt: "How do devices persuade?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical analysis", statement: "Definition, devices, persuasion." },
            ],
            steps: [
              { part: "a", reasoning: "Analysing persuasive techniques.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Rhetorical question, repetition, metaphor, parallelism — any two.", working: "devices", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Two valid.", working: "two", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Emphasis + emotion + engagement.", working: "persuade", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) persuasive techniques (b) two devices (c) emphasis+emotion+engagement",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Missing rhetorical devices."],
          },
        },
        {
          id: "cie-ol-el-ra-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of a rhetorical question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where is the station?" },
              { id: "b", text: "What is the time?" },
              { id: "c", text: "Who are you?" },
              { id: "d", text: "How long will we wait?" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhetorical question example", statement: "Question for effect, not answer." },
            ],
            steps: [
              { reasoning: "'How long will we wait?' = rhetorical.", working: "rhetorical", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** How long will we wait?",
            commonErrors: ["Choosing (b) — genuine question."],
          },
        },
        {
          id: "cie-ol-el-ra-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) A speech uses 8 rhetorical devices in 200 words. What percentage is rhetorical? (b) If they add 2 more devices, how many are there in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4, unit: "%" },
              { label: "b", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhetorical analysis", statement: "Calculate rhetorical percentage; count devices." },
            ],
            steps: [
              { reasoning: "8 divided by 200 equals 4%.", working: "8 / 200 = 4%", marks: 1, markCode: "AO2" },
              { reasoning: "8 plus 2 equals 10 devices.", working: "8 + 2 = 10", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 4%; (b) 10",
            commonErrors: ["Not calculating percentage correctly."],
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
