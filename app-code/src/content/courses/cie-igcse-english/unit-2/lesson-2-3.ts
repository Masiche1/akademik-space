import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ciege-u2-lesson-2-3",
  code: "2-3",
  title: "Structure and Narrative Technique",
  goal: "I CAN analyse how writers structure texts and use narrative techniques.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 2: structure"],
  vocabulary: [
    { term: "Structure", definition: "How a text is organised — beginning, middle, end." },
    { term: "Flashback", definition: "A shift to an earlier time in the narrative." },
    { term: "Foreshadowing", definition: "Hints of what will happen later." },
    { term: "Cliffhanger", definition: "A moment of suspense ending a section." },
    { term: "Circular structure", definition: "Ending where the story began." },
  ],
  concepts: [
    {
      id: "ciege-u2-s3-structure",
      title: "Analysing structure",
      skill: "Explain how text organisation creates effect at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Text structure",
            body: "Look at how the text is organised: chronological order, flashbacks, parallel storylines, circular endings. The structure shapes how the reader experiences events.",
          },
          {
            heading: "Pace and tension",
            body: "Short sentences and paragraphs speed up reading and create tension. Long, flowing sentences slow the pace and build atmosphere. Writers manipulate this deliberately.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why might a writer use very short sentences in an action scene?",
          solution: "To speed up the pace and create urgency — short sentences mirror rapid events.",
        },
      },
      questions: [
        {
          id: "ciege-u2-s3-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Chase",
            author: "Written for Akademik Space",
            text: "He ran. The door slammed. Footsteps echoed. He was gone.",
          },
          stem: "What effect do the short sentences create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fast, urgent pace" },
            { id: "b", text: "Humour" },
            { id: "c", text: "Confusion" },
            { id: "d", text: "Slow, calm pace" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence length", statement: "Short sentences = speed." }],
            steps: [
              { reasoning: "Short sentences create urgency and speed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Fast, urgent pace",
          },
        },
        {
          id: "ciege-u2-s3-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Chase",
            author: "Written for Akademik Space",
            text: "He ran. The door slammed. Footsteps echoed. He was gone.",
          },
          stem: "Explain how sentence structure contributes to the tension.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pace", statement: "Sentence length affects speed." }],
            steps: [
              { reasoning: "Each sentence is short and abrupt.", marks: 1, markCode: "AO3" },
              { reasoning: "This mirrors the rapid, panicked action.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Short sentences = urgency",
          },
        },
        {
          id: "ciege-u2-s3-st-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "She opened the letter. It was from her brother — the one who had disappeared twenty years ago. He was alive.",
          },
          stem: "How does the writer build suspense in these three sentences?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Suspense", statement: "Delayed information builds tension." }],
            steps: [
              { reasoning: "First sentence is simple and factual.", marks: 1, markCode: "AO3" },
              { reasoning: "The dash reveals the surprising sender gradually.", marks: 1, markCode: "AO3" },
              { reasoning: "Final short sentence delivers the shock — 'He was alive.'", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Gradual reveal, punchy ending",
          },
        },
        {
          id: "ciege-u2-s3-st-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Return",
            author: "Written for Akademik Space",
            text: "The story began with a boy leaving home. It ended with the same boy, years later, standing at the same gate — only this time he was coming back.",
          },
          stem: "What narrative structure does this extract describe? Explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circular structure", statement: "Ends where it began." }],
            steps: [
              { reasoning: "Circular structure — begins and ends at the same place.", marks: 1, markCode: "AO3" },
              { reasoning: "The repetition emphasises change over time.", marks: 1, markCode: "AO2" },
              { reasoning: "'Only this time he was coming back' highlights the difference.", marks: 1, markCode: "AO2" },
              { reasoning: "Creates a sense of completion and reflection.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Circular — emphasises change",
          },
        },
        {
          id: "ciege-u2-s3-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Lake",
            author: "Written for Akademik Space",
            text: "Slowly, gently, the boat drifted across the still lake.",
          },
          stem: "What pace does this sentence create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Slow and calm" },
            { id: "b", text: "Fast and urgent" },
            { id: "c", text: "Humorous" },
            { id: "d", text: "Confusing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pace", statement: "Long flowing sentences slow the pace." }],
            steps: [
              { reasoning: "'Slowly, gently' and the flowing structure create a calm, unhurried pace.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Slow and calm",
          },
        },
        {
          id: "ciege-u2-s3-st-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Jump",
            author: "Written for Akademik Space",
            text: "He ran. He jumped. He landed.",
          },
          stem: "How many sentences are in this extract?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count sentence boundaries." }],
            steps: [
              { reasoning: "Three short sentences — 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u2-s3-st-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Power Cut",
            author: "Written for Akademik Space",
            text: "Suddenly, the lights went out. Silence. Then a scream.",
          },
          stem: "What effect does the shift to very short sentences create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Confusion only" },
            { id: "b", text: "Humour" },
            { id: "c", text: "A slow, relaxed pace" },
            { id: "d", text: "Shock and rising tension" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence length", statement: "Short sentences create impact." }],
            steps: [
              { reasoning: "'Silence.' and 'Then a scream.' are abrupt — they shock the reader and build tension.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Shock and rising tension",
          },
        },
        {
          id: "ciege-u2-s3-st-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Essay",
            author: "Written for Akademik Space",
            text: "The story had three parts: a beginning, a middle and an end.",
          },
          stem: "How many parts does the story have?",
          response: { type: "numeric", parts: [
            { label: "Parts", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Structure", statement: "Beginning, middle, end." }],
            steps: [
              { reasoning: "Beginning, middle and end — 3 parts.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u2-s3-st-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Memoir",
            author: "Written for Akademik Space",
            text: "The novel began at the end of the hero's life and worked backwards towards his childhood.",
          },
          stem: "What narrative structure does this describe?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Circular structure" },
            { id: "b", text: "Reverse chronological order" },
            { id: "c", text: "Random order" },
            { id: "d", text: "Chronological order" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Structure", statement: "Order of events shapes meaning." }],
            steps: [
              { reasoning: "Starting at the end and working backwards is reverse chronological order.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reverse chronological order",
          },
        },
        {
          id: "ciege-u2-s3-st-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Morning",
            author: "Written for Akademik Space",
            text: "She woke. She dressed. She ate. She left.",
          },
          stem: "How many sentences are there, and how many verbs?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 4 },
            { label: "Verbs", answer: 4 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pace", statement: "Short sentences speed up the narrative." }],
            steps: [
              { reasoning: "Four sentences — woke, dressed, ate, left.", marks: 1, markCode: "AO1" },
              { reasoning: "Each sentence has one verb — 4 verbs total.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4 sentences, 4 verbs",
          },
        },
        {
          id: "ciege-u2-s3-st-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Call",
            author: "Written for Akademik Space",
            text: "The chapter ended with the phone ringing — just as she reached for it.",
          },
          stem: "What narrative technique does this ending use?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Flashback" },
            { id: "b", text: "Cliffhanger" },
            { id: "c", text: "Dialogue" },
            { id: "d", text: "Description" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cliffhanger", statement: "Suspenseful ending to a section." }],
            steps: [
              { reasoning: "Ending on a ringing phone just as she reaches creates suspense — a cliffhanger.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Cliffhanger",
          },
        },
        {
          id: "ciege-u2-s3-st-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Family",
            author: "Written for Akademik Space",
            text: "The story began with the family at dinner and ended with the same family at the same table, years later.",
          },
          stem: "What structure does this describe, and what effect does it have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Circular structure — emphasises change over time" },
            { id: "b", text: "Chronological structure — events in order" },
            { id: "c", text: "No structure" },
            { id: "d", text: "Parallel structure — two stories at once" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circular structure", statement: "Ends where it began." }],
            steps: [
              { reasoning: "Beginning and end at the same table suggests circular structure.", marks: 1, markCode: "AO3" },
              { reasoning: "'Years later' highlights how much has changed — the repetition emphasises time and change.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Circular — emphasises change",
          },
        },
        {
          id: "ciege-u2-s3-st-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Chapters",
            author: "Written for Akademik Space",
            text: "Paragraph one introduces the setting. Paragraphs two to four describe the journey. Paragraph five reveals the destination.",
          },
          stem: "How many paragraphs are described, and how many of them cover the journey?",
          response: { type: "numeric", parts: [
            { label: "Total paragraphs", answer: 5 },
            { label: "Journey paragraphs", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Structure", statement: "Paragraph organisation shapes the narrative." }],
            steps: [
              { reasoning: "Paragraph one, paragraphs two to four, and paragraph five = 5 paragraphs.", marks: 1, markCode: "AO1" },
              { reasoning: "Paragraphs two to four = 3 paragraphs about the journey.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5 paragraphs, 3 on the journey",
          },
        },
        {
          id: "ciege-u2-s3-st-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Garden",
            author: "Written for Akademik Space",
            text: "Long, flowing sentences described the garden in careful detail.",
          },
          stem: "What pace does this sentence structure create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fast and urgent" },
            { id: "b", text: "Confusing" },
            { id: "c", text: "Slow and descriptive" },
            { id: "d", text: "Humorous" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pace", statement: "Long sentences slow the pace." }],
            steps: [
              { reasoning: "'Long, flowing sentences' and 'careful detail' create a slow, descriptive pace.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Slow and descriptive",
          },
        },
        {
          id: "ciege-u2-s3-st-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Scenes",
            author: "Written for Akademik Space",
            text: "The action scene used short sentences; the love scene used long ones.",
          },
          stem: "How many scenes are compared in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Scenes", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pace", statement: "Sentence length affects pace." }],
            steps: [
              { reasoning: "The action scene and the love scene — 2 scenes.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u2-s3-st-q16",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Chase",
            author: "Written for Akademik Space",
            text: "The writer cut between the hero's escape and the villain's pursuit.",
          },
          stem: "What narrative technique is used here?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Parallel storylines" },
            { id: "b", text: "Flashback" },
            { id: "c", text: "Circular structure" },
            { id: "d", text: "Cliffhanger" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Parallel storylines", statement: "Two events shown at the same time." }],
            steps: [
              { reasoning: "Alternating between escape and pursuit shows two simultaneous events — parallel storylines.", marks: 1, markCode: "AO3" },
              { reasoning: "This creates tension as the reader sees both sides of the chase.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Parallel storylines",
          },
        },
      ],
    },
    {
      id: "ciege-u2-s3-techniques",
      title: "Narrative techniques",
      skill: "Identify foreshadowing, flashbacks and other techniques.",
      lesson: {
        sections: [
          {
            heading: "Common techniques",
            body: "Foreshadowing hints at future events ('little did she know...'). Flashbacks interrupt the present to show earlier events. Cliffhangers end sections on suspense.",
          },
          {
            heading: "Analysing technique",
            body: "When asked about a technique, name it, quote the evidence, and explain why the writer used it — to build suspense, develop character, or create irony.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Read: 'The door creaked open — or was it closing?' What technique is this?",
          solution: "Ambiguity/suspense — the uncertainty about direction creates tension.",
        },
      },
      questions: [
        {
          id: "ciege-u2-s3-nt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "As she packed her bag, she noticed the dark clouds gathering — though she did not yet know what they would bring.",
          },
          stem: "What technique is used here?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Satire" },
            { id: "b", text: "Dialogue" },
            { id: "c", text: "Flashback" },
            { id: "d", text: "Foreshadowing" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Foreshadowing", statement: "Hints of future events." }],
            steps: [
              { reasoning: "Dark clouds + 'did not yet know' hints at coming trouble.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Foreshadowing",
          },
        },
        {
          id: "ciege-u2-s3-nt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "As she packed her bag, she noticed the dark clouds gathering — though she did not yet know what they would bring.",
          },
          stem: "What does the foreshadowing suggest will happen?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Foreshadowing", statement: "Predict from hints." }],
            steps: [
              { reasoning: "Dark clouds suggest a storm or trouble.", marks: 1, markCode: "AO2" },
              { reasoning: "'Did not yet know' implies something bad is coming.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Trouble or a storm is coming",
          },
        },
        {
          id: "ciege-u2-s3-nt-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Reunion",
            author: "Written for Akademik Space",
            text: "He recognised her instantly — the same laugh, the same eyes — though twenty years had changed everything else.",
          },
          stem: "How does the writer use contrast in this sentence?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Contrast", statement: "Similarity vs change." }],
            steps: [
              { reasoning: "'Same laugh, same eyes' vs 'twenty years had changed everything else'.", marks: 1, markCode: "AO3" },
              { reasoning: "Highlights what has stayed the same vs what has changed.", marks: 1, markCode: "AO2" },
              { reasoning: "Creates emotional depth — recognition despite time.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Same vs changed — emotional contrast",
          },
        },
        {
          id: "ciege-u2-s3-nt-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Secret",
            author: "Written for Akademik Space",
            text: "She almost told him the truth. Instead, she smiled and said nothing, watching his face for any sign of suspicion.",
          },
          stem: "Analyse how the writer creates tension through the character's actions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tension through action", statement: "Almost + restraint = suspense." }],
            steps: [
              { reasoning: "'Almost told him' — the near-disclosure creates suspense.", marks: 1, markCode: "AO3" },
              { reasoning: "'Instead... said nothing' — restraint heightens tension.", marks: 1, markCode: "AO2" },
              { reasoning: "'Watching... for any sign of suspicion' — her fear is palpable.", marks: 1, markCode: "AO2" },
              { reasoning: "Actions reveal inner conflict without stating it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Near-disclosure + restraint = tension",
          },
        },
        {
          id: "ciege-u2-s3-nt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "Little did she know, the letter would change everything.",
          },
          stem: "What narrative technique is used here?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dialogue" },
            { id: "b", text: "Foreshadowing" },
            { id: "c", text: "Satire" },
            { id: "d", text: "Flashback" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Foreshadowing", statement: "Hints of future events." }],
            steps: [
              { reasoning: "'Would change everything' hints at a coming event — foreshadowing.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Foreshadowing",
          },
        },
        {
          id: "ciege-u2-s3-nt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Escape",
            author: "Written for Akademik Space",
            text: "She ran as fast as she could.",
          },
          stem: "How many words are in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 7 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count words accurately." }],
            steps: [
              { reasoning: "She / ran / as / fast / as / she / could = 7 words.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "ciege-u2-s3-nt-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Door",
            author: "Written for Akademik Space",
            text: "The door opened — or was it closing?",
          },
          stem: "What technique creates suspense in this sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dialogue" },
            { id: "b", text: "Ambiguity" },
            { id: "c", text: "Description" },
            { id: "d", text: "Flashback" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ambiguity", statement: "Uncertainty creates tension." }],
            steps: [
              { reasoning: "Uncertainty about whether the door opened or closed is ambiguity — it creates suspense.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Ambiguity",
          },
        },
        {
          id: "ciege-u2-s3-nt-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Discovery",
            author: "Written for Akademik Space",
            text: "The bell rang. She jumped. Nobody moved.",
          },
          stem: "How many sentences are in this extract?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count sentence boundaries." }],
            steps: [
              { reasoning: "Three sentences — bell rang, she jumped, nobody moved.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u2-s3-nt-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Events",
            author: "Written for Akademik Space",
            text: "The children built a sandcastle; meanwhile the tide was coming in.",
          },
          stem: "What does 'meanwhile' tell us about the timing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The events happen at the same time" },
            { id: "b", text: "The events happen one after another" },
            { id: "c", text: "The events happened earlier" },
            { id: "d", text: "The events are imagined" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sequencing words", statement: "'Meanwhile' marks parallel time." }],
            steps: [
              { reasoning: "'Meanwhile' shows the sandcastle and the tide are happening simultaneously.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Same time",
          },
        },
        {
          id: "ciege-u2-s3-nt-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Box",
            author: "Written for Akademik Space",
            text: "He opened the box. Inside was a photograph. On the back was a name he did not recognise.",
          },
          stem: "How many sentences are there, and how many full stops?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 3 },
            { label: "Full stops", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Punctuation marks sentence ends." }],
            steps: [
              { reasoning: "Three sentences — he opened, inside was, on the back was.", marks: 1, markCode: "AO1" },
              { reasoning: "Each ends with a full stop — 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3 sentences, 3 full stops",
          },
        },
        {
          id: "ciege-u2-s3-nt-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "After the Storm",
            author: "Written for Akademik Space",
            text: "By morning, the storm had passed and the sea was calm again.",
          },
          stem: "What tense is 'had passed' and what does it signal?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Future tense — will happen" },
            { id: "b", text: "Past perfect — happened before the main past event" },
            { id: "c", text: "Present tense — happening now" },
            { id: "d", text: "Imperative — a command" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Past perfect", statement: "'Had done' shows an earlier past event." }],
            steps: [
              { reasoning: "'Had passed' is past perfect — the storm ended before the calm sea.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Past perfect",
          },
        },
        {
          id: "ciege-u2-s3-nt-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Snake",
            author: "Written for Akademik Space",
            text: "Unaware that the snake was behind him, he whistled a cheerful tune.",
          },
          stem: "What technique is used when the reader knows something the character does not?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Foreshadowing" },
            { id: "b", text: "Satire" },
            { id: "c", text: "Dramatic irony" },
            { id: "d", text: "Flashback" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dramatic irony", statement: "Reader knows more than the character." }],
            steps: [
              { reasoning: "We know about the snake; he does not — this is dramatic irony.", marks: 1, markCode: "AO3" },
              { reasoning: "It creates tension because we fear for his safety.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Dramatic irony",
          },
        },
        {
          id: "ciege-u2-s3-nt-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Novel",
            author: "Written for Akademik Space",
            text: "The first chapter ended on a cliffhanger; the second chapter opened with the rescue.",
          },
          stem: "How many chapters are mentioned, and what technique ends the first one?",
          response: { type: "numeric", parts: [
            { label: "Chapters", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Cliffhanger", statement: "Suspenseful section ending." }],
            steps: [
              { reasoning: "The first and second chapters are mentioned — 2.", marks: 1, markCode: "AO1" },
              { reasoning: "The cliffhanger ends the first chapter — a suspense technique.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u2-s3-nt-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Arrival",
            author: "Written for Akademik Space",
            text: "She had left before he arrived.",
          },
          stem: "Which event happened first?",
          response: { type: "mcq", choices: [
            { id: "a", text: "She returned" },
            { id: "b", text: "They met" },
            { id: "c", text: "He arrived" },
            { id: "d", text: "She left" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Past perfect", statement: "'Had left' signals the earlier event." }],
            steps: [
              { reasoning: "'Had left' is past perfect — she left before he arrived.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "She left",
          },
        },
        {
          id: "ciege-u2-s3-nt-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Flashback",
            author: "Written for Akademik Space",
            text: "The chapter used a flashback to show the accident.",
          },
          stem: "How many words are in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 9 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count words accurately." }],
            steps: [
              { reasoning: "The / chapter / used / a / flashback / to / show / the / accident = 9 words.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "ciege-u2-s3-nt-q16",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Corner",
            author: "Written for Akademik Space",
            text: "As she turned the corner, the door slammed shut behind her.",
          },
          stem: "What technique does the writer use to create a sudden moment of action?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dialogue" },
            { id: "b", text: "Abrupt action creating suspense" },
            { id: "c", text: "Description" },
            { id: "d", text: "Flashback" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pace and action", statement: "Sudden events create tension." }],
            steps: [
              { reasoning: "The door slamming shut is sudden and unexpected — it creates immediate suspense.", marks: 1, markCode: "AO3" },
              { reasoning: "The abrupt action interrupts the calm of 'turned the corner'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Abrupt action creating suspense",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u2-s3-struct-notes",
      title: "Structure and narrative technique — revision notes",
      summary: "Sentence pace, foreshadowing, flashbacks, circular endings.",
      sections: [
        { heading: "Structure", body: "Short sentences = speed/tension; long sentences = slow/atmospheric. Circular structures end where they began." },
        { heading: "Techniques", body: "Foreshadowing hints at future; flashbacks show earlier events; cliffhangers create suspense. Always name technique + evidence + effect." },
      ],
    },
  ],
};
