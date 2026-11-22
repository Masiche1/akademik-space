import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ciege-u3-lesson-3-1",
  code: "3-1",
  title: "Narrative Structure and Openings",
  goal: "I CAN plan and write an effective narrative opening.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: narrative"],
  vocabulary: [
    { term: "Narrative", definition: "A story with characters, setting and events." },
    { term: "Opening", definition: "The first part of a story that hooks the reader." },
    { term: "In medias res", definition: "Starting in the middle of the action." },
    { term: "Exposition", definition: "Background information at the start." },
    { term: "Hook", definition: "An attention-grabbing opening device." },
  ],
  concepts: [
    {
      id: "ciege-u3-s1-structure",
      title: "Story structure",
      skill: "Plan a narrative with clear beginning, middle and end.",
      lesson: {
        sections: [
          {
            heading: "The three parts",
            body: "Beginning: introduce character, setting and situation. Middle: the problem develops and events unfold. End: the problem resolves — the character changes or learns something.",
          },
          {
            heading: "Plot vs character",
            body: "A strong narrative links plot (what happens) to character (how they change). The best endings show growth — the character is different because of what happened.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Plan a story about a lost dog. What is the structure?",
          solution: "Beginning: girl loses dog. Middle: searches, asks for help, finds clues. End: dog returns — girl learns about asking for help.",
        },
      },
      questions: [
        {
          id: "ciege-u3-s1-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a narrative?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Beginning, middle, end" },
            { id: "b", text: "Start, problem, solution" },
            { id: "c", text: "Characters, setting, problem" },
            { id: "d", text: "Title, middle, end" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Narrative structure", statement: "Beginning, middle, end." }],
            steps: [
              { reasoning: "Every story has beginning, middle and end.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Beginning, middle, end",
          },
        },
        {
          id: "ciege-u3-s1-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a topic sentence for the opening of a story about a mysterious package.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Opening sentence", statement: "Hook the reader immediately." }],
            steps: [
              { reasoning: "The sentence introduces intrigue or a character.", marks: 1, markCode: "AO2" },
              { reasoning: "It is a complete, punctuated sentence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One engaging opening sentence",
          },
        },
        {
          id: "ciege-u3-s1-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two sentences that could open a story set on a beach at sunset.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Descriptive opening", statement: "Setting + mood." }],
            steps: [
              { reasoning: "Both sentences describe the setting or mood.", marks: 1, markCode: "AO2" },
              { reasoning: "Uses sensory or descriptive language.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two descriptive sentences",
          },
        },
        {
          id: "ciege-u3-s1-st-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Plan a three-part outline for a story about finding a treasure map.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story planning", statement: "Clear beginning, middle, end." }],
            steps: [
              { reasoning: "Beginning introduces character and discovery of map.", marks: 1, markCode: "AO2" },
              { reasoning: "Middle develops the search and obstacles.", marks: 1, markCode: "AO2" },
              { reasoning: "End resolves — treasure found or lesson learned.", marks: 1, markCode: "AO2" },
              { reasoning: "All three parts are coherent.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three-part outline",
          },
        },
        {
          id: "ciege-u3-s1-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should the beginning of a narrative introduce?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The character, setting and situation" },
            { id: "b", text: "The climax" },
            { id: "c", text: "The ending" },
            { id: "d", text: "The resolution" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Narrative structure", statement: "Beginning introduces character and setting." }],
            steps: [
              { reasoning: "The beginning sets up who, where and what — character, setting, situation.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Character, setting and situation",
          },
        },
        {
          id: "ciege-u3-s1-st-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the sentence \"The cat sat on the mat\", how many words are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 6 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words accurately." }],
            steps: [
              { reasoning: "The / cat / sat / on / the / mat = 6 words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "ciege-u3-s1-st-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which events best belong in the middle of a story about a lost dog?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The search, clues and setbacks" },
            { id: "b", text: "The story ends" },
            { id: "c", text: "The owner gives up" },
            { id: "d", text: "The dog returns home" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Middle section", statement: "Problem develops through events." }],
            steps: [
              { reasoning: "The middle develops the problem — searching, clues and setbacks belong here.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Search, clues and setbacks",
          },
        },
        {
          id: "ciege-u3-s1-st-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the sentence \"The big red ball bounced high\", how many adjectives are there?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Big' and 'red' describe the ball — 2 adjectives ('high' is an adverb).", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u3-s1-st-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should a strong narrative ending show how the character has changed?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To show growth or a lesson learned" },
            { id: "b", text: "To make the story longer" },
            { id: "c", text: "To include a flashback" },
            { id: "d", text: "To confuse the reader" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Character change", statement: "Endings show growth." }],
            steps: [
              { reasoning: "Linking plot to character change gives the story meaning — the character is different.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "To show growth or a lesson learned",
          },
        },
        {
          id: "ciege-u3-s1-st-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In \"First she woke. Then she dressed.\", how many sentences and how many sequence words are there?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 2 },
            { label: "Sequence words", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Sequence words", statement: "First, then order events." }],
            steps: [
              { reasoning: "Two sentences — 'First she woke.' and 'Then she dressed.'", marks: 1, markCode: "AO2" },
              { reasoning: "'First' and 'Then' are the 2 sequence words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2 sentences, 2 sequence words",
          },
        },
        {
          id: "ciege-u3-s1-st-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence best belongs in the middle of a story about climbing a mountain?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mountains are big." },
            { id: "b", text: "Halfway up, the fog closed in and they lost the path." },
            { id: "c", text: "The end." },
            { id: "d", text: "They reached the summit." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Middle development", statement: "Problem develops mid-story." }],
            steps: [
              { reasoning: "Losing the path is a developing problem — it belongs in the middle, not the resolution.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Fog closes in, path lost",
          },
        },
        {
          id: "ciege-u3-s1-st-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A story begins and ends at the same park bench but shows the character years apart. What effect might this circular structure have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It emphasises how much the character has changed" },
            { id: "b", text: "It confuses the reader" },
            { id: "c", text: "It shortens the story" },
            { id: "d", text: "It creates suspense" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circular structure", statement: "Ends where it began." }],
            steps: [
              { reasoning: "Same location at start and end creates a circular structure.", marks: 1, markCode: "AO2" },
              { reasoning: "The repetition highlights change over time — the character is different.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Emphasises change over time",
          },
        },
        {
          id: "ciege-u3-s1-st-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In \"Once upon a time there was a dragon\", how many words are there, and how many are articles (a, an, the)?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 8 },
            { label: "Articles", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Article", statement: "a, an, the." }],
            steps: [
              { reasoning: "Once / upon / a / time / there / was / a / dragon = 8 words.", marks: 1, markCode: "AO2" },
              { reasoning: "Two 'a' articles appear — 2.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "8 words, 2 articles",
          },
        },
        {
          id: "ciege-u3-s1-st-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the middle section of a story also called?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Development" },
            { id: "b", text: "Opening" },
            { id: "c", text: "Climax" },
            { id: "d", text: "Resolution" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Narrative structure", statement: "Middle develops events." }],
            steps: [
              { reasoning: "The middle is where the problem develops — also called development.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Development",
          },
        },
        {
          id: "ciege-u3-s1-st-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many verbs are in the sentence \"The dog barked and ran\"?",
          response: { type: "numeric", parts: [
            { label: "Verbs", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action or state word." }],
            steps: [
              { reasoning: "'Barked' and 'ran' are the two verbs — 2.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u3-s1-st-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a three-part outline for a story about a student who fails a test, works hard and then succeeds.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story planning", statement: "Clear beginning, middle, end." }],
            steps: [
              { reasoning: "Beginning: the student fails and feels discouraged.", marks: 1, markCode: "AO2" },
              { reasoning: "Middle: the student studies hard and faces setbacks.", marks: 1, markCode: "AO2" },
              { reasoning: "End: the student succeeds and learns a lesson.", marks: 1, markCode: "AO2" },
              { reasoning: "All three parts are coherent and linked.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Fail → work hard → succeed",
          },
        },
      ],
    },
    {
      id: "ciege-u3-s1-openings",
      title: "Effective openings",
      skill: "Use hooks, dialogue and in medias res to open stories.",
      lesson: {
        sections: [
          {
            heading: "Hooks",
            body: "Start with action, a question, dialogue, or an unusual image. Avoid lengthy description or background — get to the point quickly.",
          },
          {
            heading: "In medias res",
            body: "Starting in the middle of the action ('The ship was sinking.') immediately creates tension and makes readers want to know what happened before.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write an opening using dialogue.",
          solution: "'Don't touch that,' whispered Mara, pointing at the strange box on the doorstep.",
        },
      },
      questions: [
        {
          id: "ciege-u3-s1-op-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'in medias res'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Starting at the beginning" },
            { id: "b", text: "Using flashback" },
            { id: "c", text: "Ending the story" },
            { id: "d", text: "Starting in the middle of the action" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "In medias res", statement: "Start in the middle of action." }],
            steps: [
              { reasoning: "It means beginning mid-action for immediate interest.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Middle of action",
          },
        },
        {
          id: "ciege-u3-s1-op-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which opening is most likely to hook a reader?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It was a nice day." },
            { id: "b", text: "I will tell you about my day." },
            { id: "c", text: "The bomb was ticking." },
            { id: "d", text: "There was a boy." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Hook", statement: "Immediate tension or curiosity." }],
            steps: [
              { reasoning: "'The bomb was ticking' creates instant suspense.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The bomb was ticking.",
          },
        },
        {
          id: "ciege-u3-s1-op-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write an opening sentence for a story using dialogue.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Dialogue opening", statement: "Speech + attribution." }],
            steps: [
              { reasoning: "The sentence contains dialogue in inverted commas.", marks: 1, markCode: "AO2" },
              { reasoning: "It creates intrigue or character voice.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One dialogue opening",
          },
        },
        {
          id: "ciege-u3-s1-op-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two different opening sentences for the same story idea — one using action, one using description.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Varied openings", statement: "Different approaches." }],
            steps: [
              { reasoning: "First opening uses action or dialogue.", marks: 1, markCode: "AO2" },
              { reasoning: "Second uses descriptive language.", marks: 1, markCode: "AO2" },
              { reasoning: "Both are engaging and punctuated correctly.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two different openings",
          },
        },
        {
          id: "ciege-u3-s1-op-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which opening is most likely to hook a reader?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It was Monday." },
            { id: "b", text: "This is a story." },
            { id: "c", text: "The knife was already in his hand." },
            { id: "d", text: "I woke up." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Hook", statement: "Immediate tension or curiosity." }],
            steps: [
              { reasoning: "'The knife was already in his hand' creates instant danger and curiosity.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The knife was already in his hand.",
          },
        },
        {
          id: "ciege-u3-s1-op-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In \"Run!\", how many words and how many letters are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 1 },
            { label: "Letters", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words and letters." }],
            steps: [
              { reasoning: "One word ('Run'), three letters (R-u-n).", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1 word, 3 letters",
          },
        },
        {
          id: "ciege-u3-s1-op-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence uses in medias res?",
          response: { type: "mcq", choices: [
            { id: "a", text: "My name is Sam." },
            { id: "b", text: "Long ago, in a land far away, there lived a king." },
            { id: "c", text: "The bridge was collapsing beneath them." },
            { id: "d", text: "It was a bright day." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "In medias res", statement: "Start in the middle of the action." }],
            steps: [
              { reasoning: "'The bridge was collapsing' drops us into the middle of danger — in medias res.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The bridge was collapsing beneath them.",
          },
        },
        {
          id: "ciege-u3-s1-op-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many words are in the sentence \"Don't touch that!\"?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words accurately." }],
            steps: [
              { reasoning: "Don't / touch / that = 3 words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u3-s1-op-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do strong writers avoid opening a story with long description or background?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To save words" },
            { id: "b", text: "Writers are lazy" },
            { id: "c", text: "Readers dislike description" },
            { id: "d", text: "Readers need immediate interest and engagement" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Openings", statement: "Hooks engage immediately." }],
            steps: [
              { reasoning: "Long openings lose readers — immediate action or intrigue keeps them reading.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Readers need immediate interest",
          },
        },
        {
          id: "ciege-u3-s1-op-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In \"She whispered, 'I know what you did.'\", how many words and how many commas are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 7 },
            { label: "Commas", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words and punctuation." }],
            steps: [
              { reasoning: "She / whispered / I / know / what / you / did = 7 words.", marks: 1, markCode: "AO2" },
              { reasoning: "One comma after 'whispered' — 1.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "7 words, 1 comma",
          },
        },
        {
          id: "ciege-u3-s1-op-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which opening uses a rhetorical question to hook the reader?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The dragon slept." },
            { id: "b", text: "What would you do if you found a dragon?" },
            { id: "c", text: "Dragons exist." },
            { id: "d", text: "It was a dragon." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhetorical question", statement: "Question engages reader directly." }],
            steps: [
              { reasoning: "'What would you do...' asks the reader to imagine — a rhetorical hook.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "What would you do if you found a dragon?",
          },
        },
        {
          id: "ciege-u3-s1-op-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which opening hooks a reader more effectively: 'It was a cold day' or 'The snow was already knee-deep when Ana stepped outside'? Why?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The second — it creates an immediate vivid image" },
            { id: "b", text: "The first — it is simpler" },
            { id: "c", text: "Neither hooks" },
            { id: "d", text: "Both are equally good" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Descriptive hook", statement: "Specific detail engages." }],
            steps: [
              { reasoning: "'Knee-deep snow' and 'Ana' create a vivid, specific picture.", marks: 1, markCode: "AO2" },
              { reasoning: "'It was a cold day' is vague and unengaging.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Second — vivid detail hooks",
          },
        },
        {
          id: "ciege-u3-s1-op-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In \"The dark forest was silent.\", how many adjectives and how many words are there?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 2 },
            { label: "Words", answer: 5 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Dark' and 'silent' describe the forest — 2 adjectives.", marks: 1, markCode: "AO2" },
              { reasoning: "The / dark / forest / was / silent = 5 words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2 adjectives, 5 words",
          },
        },
        {
          id: "ciege-u3-s1-op-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'exposition' provide in a story opening?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dialogue" },
            { id: "b", text: "The ending" },
            { id: "c", text: "The climax" },
            { id: "d", text: "Background information" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Exposition", statement: "Background information at the start." }],
            steps: [
              { reasoning: "Exposition gives the reader the background they need.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Background information",
          },
        },
        {
          id: "ciege-u3-s1-op-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many verbs are in the sentence \"The wind howled through the trees\"?",
          response: { type: "numeric", parts: [
            { label: "Verbs", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action or state word." }],
            steps: [
              { reasoning: "'Howled' is the only verb — 1.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "ciege-u3-s1-op-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write two openings for a story about a shipwreck — one using in medias res, one using dialogue.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Varied openings", statement: "Different hook techniques." }],
            steps: [
              { reasoning: "First opening drops into the action (in medias res).", marks: 1, markCode: "AO2" },
              { reasoning: "Second opening uses dialogue in inverted commas.", marks: 1, markCode: "AO2" },
              { reasoning: "Both create immediate interest or intrigue.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two different openings",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u3-s1-narr-notes",
      title: "Narrative structure and openings — revision notes",
      summary: "Beginning-middle-end, hooks, in medias res.",
      sections: [
        { heading: "Structure", body: "Plan beginning (character+setting), middle (problem develops), end (resolution + change)." },
        { heading: "Openings", body: "Use action, dialogue, question or striking image. In medias res drops readers into the action immediately." },
      ],
    },
  ],
};
