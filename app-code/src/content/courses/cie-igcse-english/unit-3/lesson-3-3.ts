import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ciege-u3-lesson-3-3",
  code: "3-3",
  title: "Character and Dialogue",
  goal: "I CAN create believable characters and write effective dialogue.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: narrative"],
  vocabulary: [
    { term: "Character", definition: "A person or animal in a story." },
    { term: "Dialogue", definition: "Speech between characters." },
    { term: "Characterisation", definition: "How a writer reveals character." },
    { term: "Protagonist", definition: "The main character." },
    { term: "Antagonist", definition: "The character who opposes the protagonist." },
  ],
  concepts: [
    {
      id: "ciege-u3-s3-character",
      title: "Creating characters",
      skill: "Develop characters through action, dialogue and detail.",
      lesson: {
        sections: [
          {
            heading: "Revealing character",
            body: "Show character through what they do, say and think — not just description. 'He counted his change twice before paying' reveals carefulness better than 'he was careful'.",
          },
          {
            heading: "Consistent characters",
            body: "Characters should act consistently with their established personality — unless the story shows them changing. Give each character a distinct voice in dialogue.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Show a character is brave without saying 'brave'.",
          solution: "'She stepped forward before anyone else, her voice steady though her hands shook.'",
        },
      },
      questions: [
        {
          id: "ciege-u3-s3-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the protagonist?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The villain" },
            { id: "b", text: "A minor character" },
            { id: "c", text: "The main character" },
            { id: "d", text: "The narrator" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Protagonist", statement: "Main character." }],
            steps: [
              { reasoning: "The protagonist is the main character.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Main character",
          },
        },
        {
          id: "ciege-u3-s3-ch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence showing a character is kind without using the word 'kind'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Character through action", statement: "Action reveals trait." }],
            steps: [
              { reasoning: "The sentence shows a kind action.", marks: 1, markCode: "AO2" },
              { reasoning: "It does not use 'kind'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One showing sentence",
          },
        },
        {
          id: "ciege-u3-s3-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write two sentences of dialogue between a parent and child about homework.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Dialogue", statement: "Two speakers, natural speech." }],
            steps: [
              { reasoning: "Speech in inverted commas.", marks: 1, markCode: "AO2" },
              { reasoning: "Two different speakers.", marks: 1, markCode: "AO2" },
              { reasoning: "Sounds natural and punctuated correctly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two lines of dialogue",
          },
        },
        {
          id: "ciege-u3-s3-ch-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe a character using three details that reveal their personality.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Characterisation", statement: "Three revealing details." }],
            steps: [
              { reasoning: "Three distinct details (appearance, action, speech).", marks: 1, markCode: "AO2" },
              { reasoning: "Each detail suggests a personality trait.", marks: 1, markCode: "AO2" },
              { reasoning: "Complete sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three character details",
          },
        },
        {
          id: "ciege-u3-s3-ch-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the antagonist?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The character who opposes the protagonist" },
            { id: "b", text: "The main character" },
            { id: "c", text: "The narrator" },
            { id: "d", text: "A minor character" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Antagonist", statement: "Opposes the protagonist." }],
            steps: [
              { reasoning: "The antagonist is the character who opposes the protagonist.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Character who opposes the protagonist",
          },
        },
        {
          id: "ciege-u3-s3-ch-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In \"She ran quickly home\", how many words and how many adverbs are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 4 },
            { label: "Adverbs", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adverb", statement: "A word describing a verb." }],
            steps: [
              { reasoning: "She / ran / quickly / home = 4 words.", marks: 1, markCode: "AO2" },
              { reasoning: "'Quickly' describes how she ran — 1 adverb.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "4 words, 1 adverb",
          },
        },
        {
          id: "ciege-u3-s3-ch-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which detail best shows a character is generous?",
          response: { type: "mcq", choices: [
            { id: "a", text: "He was generous." },
            { id: "b", text: "He had a lot of money." },
            { id: "c", text: "He smiled." },
            { id: "d", text: "He shared his lunch with a stranger." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Character through action", statement: "Actions reveal traits." }],
            steps: [
              { reasoning: "Sharing lunch shows generosity through action — not just stating it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "He shared his lunch with a stranger.",
          },
        },
        {
          id: "ciege-u3-s3-ch-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many adjectives are in the sentence \"The tall thin boy waited\"?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Tall' and 'thin' describe the boy — 2 adjectives.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u3-s3-ch-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is it important to give each character a distinct voice in dialogue?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To confuse the reader" },
            { id: "b", text: "To make the story longer" },
            { id: "c", text: "To reveal their personality and make them believable" },
            { id: "d", text: "It is just a rule" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Character voice", statement: "Speech reveals personality." }],
            steps: [
              { reasoning: "Different speech patterns show who each character is — making them believable.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Reveals personality",
          },
        },
        {
          id: "ciege-u3-s3-ch-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In \"She checked her watch three times\", how many verbs and how many words are there?",
          response: { type: "numeric", parts: [
            { label: "Verbs", answer: 1 },
            { label: "Words", answer: 6 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action or state word." }],
            steps: [
              { reasoning: "'Checked' is the only verb — 1.", marks: 1, markCode: "AO2" },
              { reasoning: "She / checked / her / watch / three / times = 6 words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1 verb, 6 words",
          },
        },
        {
          id: "ciege-u3-s3-ch-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "When might a character's behaviour change unexpectedly in a story?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Never — characters must stay the same" },
            { id: "b", text: "Always, randomly" },
            { id: "c", text: "Only in dreams" },
            { id: "d", text: "When the story shows them growing or learning" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Character consistency", statement: "Change should be motivated." }],
            steps: [
              { reasoning: "Characters may change when the plot motivates it — showing growth.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "When the story shows growth",
          },
        },
        {
          id: "ciege-u3-s3-ch-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How can dialogue reveal character without any description of appearance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Through word choice, rhythm and what is said — speech shows personality" },
            { id: "b", text: "It cannot — description is needed" },
            { id: "c", text: "Through punctuation" },
            { id: "d", text: "Only through actions" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Character through dialogue", statement: "Speech reveals personality." }],
            steps: [
              { reasoning: "Word choice and speech patterns reveal personality directly.", marks: 1, markCode: "AO2" },
              { reasoning: "A formal speaker differs from a casual one — no description needed.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Speech patterns reveal personality",
          },
        },
        {
          id: "ciege-u3-s3-ch-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the line \"The old man muttered, 'Not again'\", how many words, commas and quotation marks are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 6 },
            { label: "Commas", answer: 1 },
            { label: "Quotation marks", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue punctuation", statement: "Inverted commas mark speech." }],
            steps: [
              { reasoning: "The / old / man / muttered / Not / again = 6 words.", marks: 1, markCode: "AO2" },
              { reasoning: "1 comma after 'muttered' and 2 quotation marks around 'Not again'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "6 words, 1 comma, 2 quotation marks",
          },
        },
        {
          id: "ciege-u3-s3-ch-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'characterisation'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Punctuating dialogue" },
            { id: "b", text: "Techniques for revealing character" },
            { id: "c", text: "Describing the setting" },
            { id: "d", text: "Describing the plot" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Characterisation", statement: "How a writer reveals character." }],
            steps: [
              { reasoning: "Characterisation is how writers reveal character through action, speech and detail.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Techniques for revealing character",
          },
        },
        {
          id: "ciege-u3-s3-ch-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many adjectives are in the sentence \"Her brave quiet friend smiled\"?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Brave' and 'quiet' describe the friend — 2 adjectives.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u3-s3-ch-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe a character using one action, one line of dialogue and one physical detail — without stating any personality traits.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Characterisation", statement: "Action + dialogue + detail." }],
            steps: [
              { reasoning: "Includes an action that reveals character.", marks: 1, markCode: "AO2" },
              { reasoning: "Includes a line of dialogue in inverted commas.", marks: 1, markCode: "AO2" },
              { reasoning: "Includes a physical detail.", marks: 1, markCode: "AO2" },
              { reasoning: "No personality traits are stated directly; punctuation is correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Action + dialogue + detail",
          },
        },
      ],
    },
    {
      id: "ciege-u3-s3-dialogue",
      title: "Writing dialogue",
      skill: "Write natural dialogue with correct punctuation and subtext.",
      lesson: {
        sections: [
          {
            heading: "Dialogue punctuation",
            body: "Speech goes in inverted commas. 'Come here,' she said. Each new speaker starts a new paragraph. The punctuation goes inside the quotes: 'I'm tired,' he said, not 'I'm tired', he said.",
          },
          {
            heading: "Subtext",
            body: "Good dialogue often means more than it says. 'Fine,' she said, slamming the door — the action reveals she's not fine. Show feelings through what characters do while speaking.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write dialogue where a character is hiding disappointment.",
          solution: "'That's great,' Tom said, staring at his shoes. 'Really great.'",
        },
      },
      questions: [
        {
          id: "ciege-u3-s3-dl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which dialogue is punctuated correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "\"Hello\", she said." },
            { id: "b", text: "\"Hello,\" she said." },
            { id: "c", text: "\"Hello\" she said." },
            { id: "d", text: "Hello, she said." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue punctuation", statement: "Comma inside quotes." }],
            steps: [
              { reasoning: "Comma goes inside the inverted commas before 'she said'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "\"Hello,\" she said.",
          },
        },
        {
          id: "ciege-u3-s3-dl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is subtext in dialogue?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Subtext", statement: "Hidden meaning." }],
            steps: [
              { reasoning: "Subtext is what is meant but not said.", marks: 1, markCode: "AO2" },
              { reasoning: "Shown through actions or tone.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Hidden meaning in speech",
          },
        },
        {
          id: "ciege-u3-s3-dl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a line of dialogue where a character says one thing but means another.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Subtext", statement: "Surface vs meaning." }],
            steps: [
              { reasoning: "The spoken words contrast with the intended meaning.", marks: 1, markCode: "AO2" },
              { reasoning: "Context or action reveals the true meaning.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One subtext dialogue",
          },
        },
        {
          id: "ciege-u3-s3-dl-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write three lines of dialogue between two characters arguing about something.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Dialogue writing", statement: "Three speakers' turns." }],
            steps: [
              { reasoning: "Each speaker has a distinct voice.", marks: 1, markCode: "AO2" },
              { reasoning: "Dialogue advances the argument.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct throughout.", marks: 1, markCode: "AO2" },
              { reasoning: "Sounds natural.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three lines of argument",
          },
        },
        {
          id: "ciege-u3-s3-dl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does punctuation go in direct speech?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Nowhere" },
            { id: "b", text: "Outside the inverted commas" },
            { id: "c", text: "Either inside or outside" },
            { id: "d", text: "Inside the inverted commas" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue punctuation", statement: "Punctuation inside quotes." }],
            steps: [
              { reasoning: "The comma and full stop go inside the inverted commas: 'Hello,' she said.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Inside the inverted commas",
          },
        },
        {
          id: "ciege-u3-s3-dl-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the line \"Hello,\" she said — how many words and how many commas are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 3 },
            { label: "Commas", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words and punctuation." }],
            steps: [
              { reasoning: "Hello / she / said = 3 words.", marks: 1, markCode: "AO2" },
              { reasoning: "One comma after 'Hello' — 1.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3 words, 1 comma",
          },
        },
        {
          id: "ciege-u3-s3-dl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When does a new speaker need a new paragraph?",
          response: { type: "mcq", choices: [
            { id: "a", text: "When the speaker changes" },
            { id: "b", text: "Always, for every sentence" },
            { id: "c", text: "After each comma" },
            { id: "d", text: "Never" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue layout", statement: "New speaker = new paragraph." }],
            steps: [
              { reasoning: "Each time the speaker changes, a new paragraph begins.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "When the speaker changes",
          },
        },
        {
          id: "ciege-u3-s3-dl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sentences of direct speech are in \"I'm tired,\" he said, \"and I want to go home\"?",
          response: { type: "numeric", parts: [
            { label: "Speech sentences", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count sentences in speech." }],
            steps: [
              { reasoning: "'I'm tired' and 'and I want to go home' are the 2 sentences of speech.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u3-s3-dl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'subtext' in dialogue?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The literal meaning of words" },
            { id: "b", text: "Grammar rules" },
            { id: "c", text: "A summary of the plot" },
            { id: "d", text: "The hidden meaning behind what is said" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Subtext", statement: "Hidden meaning." }],
            steps: [
              { reasoning: "Subtext is what is meant but not said — shown through action or tone.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Hidden meaning",
          },
        },
        {
          id: "ciege-u3-s3-dl-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In \"Fine,\" she said, slamming the door — how many words and how many verbs are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 6 },
            { label: "Verbs", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words and verbs." }],
            steps: [
              { reasoning: "Fine / she / said / slamming / the / door = 6 words.", marks: 1, markCode: "AO2" },
              { reasoning: "'Said' and 'slamming' are the two verbs.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "6 words, 2 verbs",
          },
        },
        {
          id: "ciege-u3-s3-dl-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why might a character say \"I'm fine\" while crying?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They are genuinely fine" },
            { id: "b", text: "It is a grammar rule" },
            { id: "c", text: "They are hiding their true feelings — the action reveals the subtext" },
            { id: "d", text: "They like lying" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtext", statement: "Action contradicts speech." }],
            steps: [
              { reasoning: "Crying contradicts 'I'm fine' — the action reveals the hidden truth.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Hiding true feelings",
          },
        },
        {
          id: "ciege-u3-s3-dl-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How can a character's actions during dialogue reveal what their speech hides?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Actions show true feelings that contradict the words spoken" },
            { id: "b", text: "Only in plays" },
            { id: "c", text: "Actions only slow the scene" },
            { id: "d", text: "They cannot — only speech matters" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtext", statement: "Action reveals hidden meaning." }],
            steps: [
              { reasoning: "A character may say 'I'm fine' while their actions show distress.", marks: 1, markCode: "AO2" },
              { reasoning: "The contrast between words and actions creates subtext.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Actions contradict words",
          },
        },
        {
          id: "ciege-u3-s3-dl-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In the line \"Stop it!\" he shouted — how many words and how many exclamation marks are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 4 },
            { label: "Exclamation marks", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words and punctuation." }],
            steps: [
              { reasoning: "Stop / it / he / shouted = 4 words.", marks: 1, markCode: "AO2" },
              { reasoning: "One exclamation mark after 'Stop it' — 1.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "4 words, 1 exclamation mark",
          },
        },
        {
          id: "ciege-u3-s3-dl-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which line of dialogue is punctuated correctly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "\"Hi\", she said." },
            { id: "b", text: "\"Hi\" she said." },
            { id: "c", text: "Hi, she said." },
            { id: "d", text: "\"Hi,\" she said." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue punctuation", statement: "Comma inside quotes." }],
            steps: [
              { reasoning: "The comma goes inside the inverted commas before 'she said'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "\"Hi,\" she said.",
          },
        },
        {
          id: "ciege-u3-s3-dl-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many adjectives are in the sentence \"The angry young man shouted\"?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Angry' and 'young' describe the man — 2 adjectives.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u3-s3-dl-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write three lines of dialogue between two characters disagreeing about a decision.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Dialogue writing", statement: "Natural speech + subtext." }],
            steps: [
              { reasoning: "Each speaker has a distinct voice.", marks: 1, markCode: "AO2" },
              { reasoning: "The dialogue shows disagreement and advances the conflict.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is correct throughout (inverted commas, new paragraphs).", marks: 1, markCode: "AO2" },
              { reasoning: "Subtext or emotion is conveyed through words or actions.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three lines of disagreement",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u3-s3-char-notes",
      title: "Character and dialogue — revision notes",
      summary: "Characterisation, showing traits, dialogue punctuation and subtext.",
      sections: [
        { heading: "Character", body: "Reveal through action, dialogue and detail — not labels. Keep characters consistent unless they change." },
        { heading: "Dialogue", body: "Inverted commas, new speaker = new paragraph. Use subtext — action reveals what speech hides." },
      ],
    },
  ],
};
