import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mla4-u3-lesson-3-2",
  code: "3-2",
  title: "Academic Vocabulary and Cohesive Paragraphs",
  goal: "I CAN use precise academic vocabulary and linking words to write clear, cohesive paragraphs.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion B: Reading",
    "Criterion C: Speaking",
  ],
  vocabulary: [
    { term: "Academic vocabulary", definition: "Words commonly used in school subjects and formal writing." },
    { term: "Cohesion", definition: "The way ideas in a text are connected." },
    { term: "Linking word", definition: "A word that connects ideas, such as 'however' or 'therefore'." },
    { term: "Paragraph", definition: "A group of sentences developing one main idea." },
    { term: "Topic sentence", definition: "The sentence that states the main idea of a paragraph." },
  ],
  concepts: [
    {
      id: "mla4-u3-academic-vocabulary",
      title: "Using academic vocabulary",
      skill: "Choose precise academic words instead of informal or vague language.",
      lesson: {
        sections: [
          {
            heading: "Precise vs informal",
            body: "Academic writing uses precise words: 'significant' instead of 'big', 'demonstrate' instead of 'show', 'analyse' instead of 'look at'. Precise words make your meaning clearer and more professional.",
          },
          {
            heading: "Common academic words",
            body: "Useful words include: **important**, **significant**, **however**, **therefore**, **furthermore**, **in addition**, **as a result**, **in conclusion**. Use them naturally; do not force them into every sentence.",
          },
          {
            heading: "Avoiding vague language",
            body: "Avoid words like 'stuff', 'things', 'a lot' and 'very'. Replace them with specific nouns and precise adjectives: 'many students' instead of 'a lot of kids', 'important issue' instead of 'big problem'.",
          },
        ],
        keyFormulas: [
          { name: "Academic words", statement: "significant / demonstrate / analyse / however / therefore" },
          { name: "Avoid", statement: "stuff / things / a lot / very" },
        ],
        workedExample: {
          problem: "Improve: 'The study showed a big effect on students.'",
          solution: "'The study demonstrated a significant effect on students.'",
        },
      },
      questions: [
        {
          id: "mla4-u3-academic-vocabulary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is most academic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'stuff'" },
              { id: "b", text: "'significant'" },
              { id: "c", text: "'a lot'" },
              { id: "d", text: "'really big'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Academic register", statement: "Academic writing uses precise vocabulary." }],
            steps: [{ reasoning: "Criterion D: Writing — 'significant' is precise and academic.", working: "precise", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** 'significant'",
            commonErrors: ["Choosing informal but understandable words."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Sentence Comparison",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Version A: 'The experiment showed a big change in results.'\nVersion B: 'The experiment demonstrated a significant change in the results.'",
          },
          stem: "Explain why Version B is more academic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Academic word choice", statement: "Precise verbs and adjectives improve academic style." }],
            steps: [
              { reasoning: "Criterion D: Writing — 'demonstrated' is more precise than 'showed'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'significant' is more precise than 'big'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — B sounds more formal and analytical.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "B uses precise academic vocabulary: 'demonstrated' and 'significant' instead of 'showed' and 'big'.",
            commonErrors: ["Thinking longer words are always better."],
            examinerNote: "Must explain precision, not just length.",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Improve the Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Rewrite using academic vocabulary.\n\n'The teacher looked at the results and found a lot of problems with the study.'",
          },
          stem: "Rewrite the sentence and identify two improvements.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Academic rewriting", statement: "Replace informal/vague words with precise academic terms." }],
            steps: [
              { reasoning: "Criterion D: Writing — replaces 'looked at' with 'analysed' or 'examined'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — replaces 'a lot of problems' with 'several issues' or 'significant problems'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — sentence is clearer and more formal.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — identifies improvements accurately.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'The teacher analysed the results and found several significant issues with the study.'",
            commonErrors: ["Using rare words incorrectly."],
            examinerNote: "Improvements must be accurate and meaningful.",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Vocabulary Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Write a short paragraph (60-80 words) about the benefits of reading. Use at least three academic vocabulary items.",
          },
          stem: "Write the paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Academic vocabulary production", statement: "Precise vocabulary in context." }],
            steps: [
              { reasoning: "Criterion D: Writing — uses at least three appropriate academic terms.", marks: 2, markCode: "D" },
              { reasoning: "Criterion D: Writing — vocabulary is used accurately.", marks: 2, markCode: "D" },
              { reasoning: "Criterion D: Writing — paragraph is coherent and within range.", marks: 2, markCode: "D" },
              { reasoning: "Criterion C: Speaking — ideas are clear and relevant.", marks: 2, markCode: "C" },
            ],
            finalAnswer: "Academic paragraph with vocabulary, accuracy, cohesion and clarity.",
            commonErrors: ["Forcing words without meaning."],
            examinerNote: "Vocabulary must be natural and accurate.",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is most academic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'stuff'" },
              { id: "b", text: "'demonstrate'" },
              { id: "c", text: "'a lot'" },
              { id: "d", text: "'very big'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Academic register", statement: "Precise verbs are academic." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'demonstrate' is precise and academic.", working: "academic", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'demonstrate'",
            commonErrors: ["Choosing informal words."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase should be avoided in academic writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'significant'" },
              { id: "b", text: "'a lot of'" },
              { id: "c", text: "'however'" },
              { id: "d", text: "'analyse'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Vague language", statement: "Avoid vague quantifiers." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'a lot of' is vague; use 'many' or 'significant'.", working: "vague", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'a lot of'",
            commonErrors: ["Choosing precise academic words."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Sentence Comparison",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Version A: 'The study showed a big change.'\nVersion B: 'The study demonstrated a significant change.'",
          },
          stem: "Identify two words in Version B that are more academic than Version A.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic word choice", statement: "Precise words improve register." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'demonstrated' replaces 'showed'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'significant' replaces 'big'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'demonstrated' and 'significant'.",
            commonErrors: ["Choosing words that appear in both."],
            examinerNote: "Both needed.",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "'The teacher looked at the data and found a lot of problems.'",
          },
          stem: "How many vague or informal words does this sentence contain? (looked at, a lot of, problems)",
          response: {
            type: "numeric",
            parts: [
              { label: "words", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vague language identification", statement: "Count informal/vague items." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'looked at', 'a lot of', 'problems' = 3 vague items.", working: "3", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**3**",
            commonErrors: ["Missing one vague phrase."],
            examinerNote: "D1 for 3.",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Sentence Comparison",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Version A: 'The kids did a big project about climate.'\nVersion B: 'The students conducted a significant project on climate change.'",
          },
          stem: "Explain why Version B is more academic.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is longer" },
              { id: "b", text: "It uses precise, formal vocabulary" },
              { id: "c", text: "It uses simpler words" },
              { id: "d", text: "It is easier to read" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic register", statement: "Formal, precise words signal academic style." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'students/conducted/significant' are precise and formal.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — Version A uses informal 'kids' and vague 'big'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It uses precise, formal vocabulary",
            commonErrors: ["Thinking longer = more academic."],
            examinerNote: "D2 for (b).",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Improve the Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Rewrite using academic vocabulary: 'The teacher looked at the results and found a lot of problems with the study.'",
          },
          stem: "Rewrite the sentence and identify two improvements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic rewriting", statement: "Replace informal/vague with precise terms." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — replaces 'looked at' with 'analysed' or 'examined'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — replaces 'a lot of problems' with 'several issues' or similar.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — sentence is clearer and more formal.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'The teacher analysed the results and found several issues with the study.'",
            commonErrors: ["Using rare words incorrectly."],
            examinerNote: "Improvements must be accurate.",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Sentence Comparison",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Version A: 'The experiment was very interesting.'\nVersion B: 'The experiment yielded significant results.'",
          },
          stem: "Explain why Version B is stronger academically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic precision", statement: "Precise verbs and adjectives improve writing." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'yielded' is more precise than 'was'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'significant results' is more precise than 'very interesting'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explanation links precision to academic style.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "B uses precise academic vocabulary: 'yielded' and 'significant results'.",
            commonErrors: ["Saying B is better without explaining why."],
            examinerNote: "Must explain precision, not just preference.",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best academic replacement for 'big problem'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'huge issue'" },
              { id: "b", text: "'significant issue'" },
              { id: "c", text: "'massive thing'" },
              { id: "d", text: "'really bad stuff'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Academic vocabulary", statement: "'Significant issue' is precise and formal." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'significant issue' is precise academic language.", working: "significant", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'significant issue'",
            commonErrors: ["Choosing informal intensifiers."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "'The data shows that students like reading.'",
          },
          stem: "Improve this sentence using academic vocabulary.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The data shows that students like reading.'" },
              { id: "b", text: "'The data demonstrates that students enjoy reading.'" },
              { id: "c", text: "'The data is really cool.'" },
              { id: "d", text: "'Students like reading a lot.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic rewriting", statement: "Use precise verbs and formal tone." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'demonstrates' and 'enjoy' are more academic than 'shows'/'like'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — option b is the most improved.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'The data demonstrates that students enjoy reading.'",
            commonErrors: ["Keeping the original or choosing informal options."],
            examinerNote: "D2 for (b).",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Rewrite Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Rewrite this paragraph using academic vocabulary.\n\n'The study was really interesting. The kids did a big survey. They found a lot of cool stuff about what students like.'",
          },
          stem: "Rewrite the paragraph and identify three improvements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic paragraph rewriting", statement: "Replace informal/vague throughout." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'really interesting' → 'significant' or 'notable'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'kids' → 'students'; 'did a big survey' → 'conducted a survey'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'a lot of cool stuff' → 'significant findings'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — overall register is academic.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'The study yielded significant findings. The students conducted a survey. They discovered important insights into student preferences.'",
            commonErrors: ["Changing only one word."],
            examinerNote: "Must rewrite whole paragraph academically.",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Sentence",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "'The results were very good.'",
          },
          stem: "Which is the most academic improvement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The results were super good.'" },
              { id: "b", text: "'The results were positive.'" },
              { id: "c", text: "'The results were really nice.'" },
              { id: "d", text: "'The results were awesome.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Academic adjectives", statement: "'Positive' is precise and formal." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'positive' is precise academic adjective.", working: "positive", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'The results were positive.'",
            commonErrors: ["Choosing informal intensifiers."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-academic-vocabulary-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Vocabulary Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Write a short paragraph (60-80 words) about the benefits of technology in education. Use at least three academic vocabulary items.",
          },
          stem: "Write the paragraph.",
          parts: [
            { label: "a", prompt: "Write the paragraph (60-80 words).", marks: 2 },
            { label: "b", prompt: "Use at least three academic vocabulary items.", marks: 2 },
            { label: "c", prompt: "Ensure vocabulary is used accurately.", marks: 1 },
            { label: "d", prompt: "Ensure the paragraph is coherent.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic vocabulary production", statement: "Precise vocabulary in context." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — paragraph within word range.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — content is relevant and clear.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — at least three academic terms used.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — vocabulary is appropriate.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — vocabulary used accurately.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — paragraph is coherent and logical.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) paragraph (b) 3+ academic words (c) accurate (d) coherent.",
            commonErrors: ["Forcing words without meaning."],
            examinerNote: "Vocabulary must be natural.",
          },
        },
      ],
    },
    {
      id: "mla4-u3-cohesive-paragraphs",
      title: "Building cohesive paragraphs",
      skill: "Use topic sentences and linking words to create clear, connected paragraphs.",
      lesson: {
        sections: [
          {
            heading: "Topic sentence first",
            body: "Start each paragraph with a **topic sentence** that states the main idea. Then add supporting details and examples. The paragraph should develop only that one idea.",
          },
          {
            heading: "Linking words",
            body: "Use linking words to connect sentences: **addition** ('also', 'furthermore'), **contrast** ('however', 'but'), **cause** ('because', 'so', 'therefore') and **example** ('for example', 'such as'). They help readers follow your logic.",
          },
          {
            heading: "Paragraph flow",
            body: "A cohesive paragraph moves logically: idea -> explanation -> example -> result. Avoid jumping between unrelated ideas. If you need to change topic, start a new paragraph.",
          },
        ],
        keyFormulas: [
          { name: "Paragraph structure", statement: "Topic sentence -> explanation -> example -> result" },
          { name: "Linking categories", statement: "Addition / contrast / cause / example" },
        ],
        workedExample: {
          problem: "Write a topic sentence for a paragraph about homework benefits.",
          solution: "'Homework can help students practise what they learn in class.'",
        },
      },
      questions: [
        {
          id: "mla4-u3-cohesive-paragraphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence best starts a paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'For example, the experiment worked well.'" },
              { id: "b", text: "'One benefit of exercise is better health.'" },
              { id: "c", text: "'However, the results were unclear.'" },
              { id: "d", text: "'In conclusion, we learned a lot.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Topic sentence", statement: "A paragraph usually starts with its main idea." }],
            steps: [{ reasoning: "Criterion D: Writing — option b states a main idea.", working: "topic", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** 'One benefit of exercise is better health.'",
            commonErrors: ["Starting with examples or conclusions."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Reading is important for students. It improves vocabulary and imagination. For example, students who read regularly often write better essays. Therefore, schools should encourage reading every day.",
          },
          stem: "Identify the topic sentence, example and linking words.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Paragraph analysis", statement: "Topic sentence, supporting details and links." }],
            steps: [
              { reasoning: "Criterion D: Writing — topic sentence: reading is important for students.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — example: students who read write better essays.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — linking words: 'For example', 'Therefore'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Topic: reading important; example: better essays; links: For example, Therefore.",
            commonErrors: ["Missing the linking words."],
            examinerNote: "All three elements required.",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Disjointed Paragraph",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "The experiment failed. The sample was too small. The results were surprising. We need more research. Technology changes fast. Students use phones.",
          },
          stem: "Rewrite the paragraph cohesively and explain two changes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Cohesive rewriting", statement: "Connect ideas logically and remove irrelevant jumps." }],
            steps: [
              { reasoning: "Criterion D: Writing — adds cause link: small sample may explain limited results.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — links conclusion: therefore more research needed.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — removes or bridges irrelevant jump to phones.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — explains cohesion choices.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Rewrite uses 'because', 'therefore' and removes unrelated technology jump; ideas flow logically.",
            commonErrors: ["Adding linking words without logical relation."],
            examinerNote: "Links must match meaning.",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Paragraph Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Write a cohesive paragraph about 'Why school uniforms can be useful' or 'Why students should read more'.",
          },
          stem: "Write the paragraph.",
          parts: [
            { label: "a", prompt: "Write a topic sentence.", marks: 1 },
            { label: "b", prompt: "Write two supporting sentences with details or examples.", marks: 2 },
            { label: "c", prompt: "Add two linking words.", marks: 2 },
            { label: "d", prompt: "Write a concluding sentence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Paragraph production", statement: "Topic sentence, support, links and conclusion." }],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — topic sentence states main idea.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — supporting sentence 1 with detail/example.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — supporting sentence 2 with detail/example.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — linking word 1 used appropriately.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — linking word 2 used appropriately.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion summarises paragraph.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — language is accurate and cohesive.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — paragraph is logical and clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) topic sentence (b) two supports (c) two links (d) conclusion.",
            commonErrors: ["Writing unrelated sentences without links."],
            examinerNote: "Paragraph should develop one idea cohesively.",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence best starts a paragraph about homework benefits?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'For example, homework helps.'" },
              { id: "b", text: "'Homework can help students practise what they learn.'" },
              { id: "c", text: "'However, homework is difficult.'" },
              { id: "d", text: "'In conclusion, homework matters.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Topic sentence", statement: "Paragraph starts with main idea." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — option b states the main idea.", working: "topic", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'Homework can help students practise what they learn.'",
            commonErrors: ["Starting with example or conclusion."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word shows contrast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'also'" },
              { id: "b", text: "'however'" },
              { id: "c", text: "'for example'" },
              { id: "d", text: "'because'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linking words", statement: "'However' signals contrast." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'however' introduces contrast.", working: "contrast", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'however'",
            commonErrors: ["Confusing with addition ('also')."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Exercise is important for students. It improves health and concentration. For example, students who exercise regularly often focus better in class.",
          },
          stem: "Identify the topic sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph analysis", statement: "Topic sentence = main idea." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — topic sentence: 'Exercise is important for students.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correctly identified as first sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'Exercise is important for students.'",
            commonErrors: ["Choosing a supporting sentence."],
            examinerNote: "Exact sentence needed.",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Reading is important. It improves vocabulary. For example, students who read write better essays. Therefore, schools should encourage reading.",
          },
          stem: "How many linking words does this paragraph contain? (For example, Therefore)",
          response: {
            type: "numeric",
            parts: [
              { label: "links", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Link counting", statement: "Count connecting phrases." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'For example' and 'Therefore' = 2 linking phrases.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**2**",
            commonErrors: ["Counting every sentence."],
            examinerNote: "D1 for 2.",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "The experiment failed. The sample was too small. The results were surprising. We need more research.",
          },
          stem: "What is the main cohesion problem in this paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too long" },
              { id: "b", text: "Ideas are not connected with linking words or logic" },
              { id: "c", text: "It uses too many examples" },
              { id: "d", text: "It has a clear topic sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion", statement: "Ideas need logical links." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — sentences are disconnected; no links showing cause/effect.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — needs linking like 'because' or 'therefore'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Ideas are not connected with linking words or logic",
            commonErrors: ["Thinking short sentences = cohesive."],
            examinerNote: "D2 for (b).",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Reading improves vocabulary. It also improves imagination. For example, students who read regularly often write better essays. Therefore, schools should encourage reading every day.",
          },
          stem: "Identify the topic sentence, example and linking words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph analysis", statement: "Topic + example + links." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — topic: reading improves vocabulary/imagination.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — example: better essays for regular readers.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — links: 'also', 'For example', 'Therefore'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Topic: reading improves skills; example: better essays; links: also, For example, Therefore.",
            commonErrors: ["Missing the linking words."],
            examinerNote: "All three elements needed.",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Disjointed Paragraph",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "The experiment failed. The sample was too small. The results were surprising. We need more research. Technology changes fast. Students use phones.",
          },
          stem: "Rewrite the paragraph cohesively using linking words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesive rewriting", statement: "Connect ideas logically." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — adds cause link: 'because the sample was too small'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — links conclusion: 'Therefore, more research is needed'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — removes or bridges irrelevant 'technology/phones' jump.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'The experiment failed because the sample was too small. The results were surprising, so more research is needed.'",
            commonErrors: ["Adding links without logical meaning."],
            examinerNote: "Links must match meaning.",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which linking word shows cause or result?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'however'" },
              { id: "b", text: "'therefore'" },
              { id: "c", text: "'for example'" },
              { id: "d", text: "'also'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linking categories", statement: "'Therefore' signals cause/result." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'therefore' shows result.", working: "cause", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'therefore'",
            commonErrors: ["Confusing with contrast or addition."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "School uniforms reduce bullying. They also save time in the morning. However, some students feel they limit self-expression.",
          },
          stem: "How does 'However' affect the paragraph's cohesion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It introduces a contrasting point smoothly" },
              { id: "b", text: "It confuses the reader" },
              { id: "c", text: "It repeats the same idea" },
              { id: "d", text: "It ends the paragraph" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contrast linking", statement: "'However' connects opposing ideas." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'However' introduces the opposing view cohesively.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — maintains paragraph unity despite contrast.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** It introduces a contrasting point smoothly",
            commonErrors: ["Thinking contrast breaks cohesion."],
            examinerNote: "D2 for (a).",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Paragraph Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Exercise is good. It helps health. It helps the mind. Some people do not exercise. They should try.",
          },
          stem: "Improve this paragraph by adding cohesion: write a revised version and explain two changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesive improvement", statement: "Add topic sentence, links, logical flow." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — adds/clarifies topic sentence.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — adds linking words (also, therefore, for example).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — explains two cohesion improvements.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — revised paragraph is coherent.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Exercise is beneficial for students. It improves health and concentration. Therefore, everyone should exercise regularly.'",
            commonErrors: ["Adding words without improving flow."],
            examinerNote: "Must explain changes made.",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Paragraph Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "The results were surprising. We need more research. Technology changes fast.",
          },
          stem: "Which sentence breaks the paragraph's cohesion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The results were surprising.'" },
              { id: "b", text: "'We need more research.'" },
              { id: "c", text: "'Technology changes fast.'" },
              { id: "d", text: "All sentences are cohesive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion detection", statement: "Irrelevant jumps break cohesion." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Technology changes fast' is unrelated to experiment results.", working: "irrelevant", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** 'Technology changes fast.'",
            commonErrors: ["Not identifying the topic jump."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla4-u3-cohesive-paragraphs-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Paragraph Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Write a cohesive paragraph about 'Why students should read more' or 'Why school uniforms can be useful'.",
          },
          stem: "Write the paragraph.",
          parts: [
            { label: "a", prompt: "Write a topic sentence.", marks: 1 },
            { label: "b", prompt: "Write two supporting sentences with details or examples.", marks: 2 },
            { label: "c", prompt: "Add two linking words.", marks: 2 },
            { label: "d", prompt: "Write a concluding sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph production", statement: "Topic, support, links, conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — topic sentence states main idea.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — supporting sentence 1 with detail/example.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — supporting sentence 2 with detail/example.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — linking word 1 used appropriately.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — linking word 2 used appropriately.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — conclusion summarises paragraph.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) topic (b) two supports (c) two links (d) conclusion.",
            commonErrors: ["Unrelated sentences without links."],
            examinerNote: "Paragraph should develop one idea cohesively.",
          },
        },
      ],
    },
  ],
};
