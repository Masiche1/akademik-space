import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ciege-u6-lesson-6-3",
  code: "6-3",
  title: "Mixed Practice and Exam Review",
  goal: "I CAN apply all skills across comprehension and writing tasks.",
  standards: ["Cambridge IGCSE First Language English 0500: revision"],
  vocabulary: [
    { term: "Comprehension", definition: "Understanding a written passage." },
    { term: "Analysis", definition: "Examining how a writer achieves effects." },
    { term: "Evaluation", definition: "Judging quality or effectiveness." },
    { term: "Technique", definition: "A method or device used in writing." },
    { term: "Response", definition: "An answer to a question or task." },
  ],
  concepts: [
    {
      id: "ciege-u6-s3-comprehension",
      title: "Comprehension practice",
      skill: "Apply reading skills to unseen passages.",
      lesson: {
        sections: [
          {
            heading: "Reading strategy",
            body: "Read the passage once for overview. Then read questions before re-reading for answers. Identify question type: literal, inference, vocabulary, analysis. Budget time — don't spend too long on one question.",
          },
          {
            heading: "Answering analysis questions",
            body: "Always name the technique, quote evidence, explain the effect. 'The writer uses alliteration in 'silver, silent sea' to create a hushed, mysterious mood.'",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How do you answer 'How does the writer create tension?'",
          solution: "Name the technique (short sentences, foreshadowing), quote evidence, explain the effect on the reader.",
        },
      },
      questions: [
        {
          id: "ciege-u6-s3-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Dark Forest",
            author: "Written for Akademik Space",
            text: "The forest was silent except for the crackle of twigs underfoot. Shadows moved between the trees, and every sound seemed magnified in the stillness.",
          },
          stem: "What mood does this passage create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Excited" },
            { id: "b", text: "Ominous and tense" },
            { id: "c", text: "Joyful" },
            { id: "d", text: "Calm" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Silence + shadows = tension." }],
            steps: [
              { reasoning: "Silence, shadows, stillness create ominous mood.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Ominous and tense",
          },
        },
        {
          id: "ciege-u6-s3-co-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Dark Forest",
            author: "Written for Akademik Space",
            text: "The forest was silent except for the crackle of twigs underfoot. Shadows moved between the trees, and every sound seemed magnified in the stillness.",
          },
          stem: "Identify one technique used and its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Technique identification", statement: "Name + effect." }],
            steps: [
              { reasoning: "Personification: 'shadows moved' or sound imagery: 'crackle of twigs'.", marks: 1, markCode: "AO3" },
              { reasoning: "Creates tension and unease.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Personification/sound imagery",
          },
        },
        {
          id: "ciege-u6-s3-co-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Long Night",
            author: "Written for Akademik Space",
            text: "Hours passed. The rain continued. By dawn, the roads were rivers and the town was cut off from the world.",
          },
          stem: "How does the writer create a sense of time passing?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time and pace", statement: "Short sentences = slow tension." }],
            steps: [
              { reasoning: "'Hours passed' states time directly.", marks: 1, markCode: "AO3" },
              { reasoning: "Short sentences create slow, tense pace.", marks: 1, markCode: "AO3" },
              { reasoning: "'By dawn' shows time elapsed.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Short sentences + time markers",
          },
        },
        {
          id: "ciege-u6-s3-co-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Decision",
            author: "Written for Akademik Space",
            text: "She stared at the two paths. One led home through the familiar streets; the other disappeared into the unknown forest. Her hand trembled on the map.",
          },
          stem: "Analyse how the writer builds suspense in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Suspense", statement: "Choice + physical detail." }],
            steps: [
              { reasoning: "'Two paths' creates a choice — suspense.", marks: 1, markCode: "AO3" },
              { reasoning: "'Familiar' vs 'unknown' contrasts safety and danger.", marks: 1, markCode: "AO2" },
              { reasoning: "'Hand trembled' shows fear through physical detail.", marks: 1, markCode: "AO3" },
              { reasoning: "Overall effect: reader wonders which she'll choose.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Choice + trembling hand = suspense",
          },
        },
        {
          id: "ciege-u6-s3-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Old Lighthouse",
            author: "Written for Akademik Space",
            text: "The lighthouse stood alone on the cliff, its white tower gleaming in the afternoon sun. Waves crashed against the rocks far below.",
          },
          stem: "Where is the lighthouse located?",
          response: { type: "mcq", choices: [
            { id: "a", text: "In a forest" },
            { id: "b", text: "On a beach" },
            { id: "c", text: "On a cliff" },
            { id: "d", text: "In a town" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find detail in text." }],
            steps: [
              { reasoning: "The text says the lighthouse stood on the cliff.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "On a cliff",
          },
        },
        {
          id: "ciege-u6-s3-co-q6",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Old Lighthouse",
            author: "Written for Akademik Space",
            text: "The lighthouse stood alone on the cliff, its white tower gleaming in the afternoon sun. Waves crashed against the rocks far below.",
          },
          stem: "Identify one technique used and its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Technique identification", statement: "Name + effect." }],
            steps: [
              { reasoning: "Personification: 'waves crashed' gives the sea power; or visual imagery 'white tower gleaming'.", marks: 1, markCode: "AO3" },
              { reasoning: "Creates a dramatic, powerful atmosphere.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Personification or visual imagery",
          },
        },
        {
          id: "ciege-u6-s3-co-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "Maya read the letter twice. Her hands were shaking as she folded it carefully and put it back in the envelope.",
          },
          stem: "What can you infer about Maya's feelings?",
          response: { type: "mcq", choices: [
            { id: "a", text: "She is excited and happy" },
            { id: "b", text: "She is bored" },
            { id: "c", text: "She is nervous and emotional" },
            { id: "d", text: "She is angry" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference", statement: "Use clues, not just literal text." }],
            steps: [
              { reasoning: "Shaking hands suggest nervousness or strong emotion.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Nervous and emotional",
          },
        },
        {
          id: "ciege-u6-s3-co-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "Maya read the letter twice. Her hands were shaking as she folded it carefully and put it back in the envelope.",
          },
          stem: "How does the writer show Maya's emotional state?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Characterisation", statement: "Physical detail shows emotion." }],
            steps: [
              { reasoning: "'Read the letter twice' shows she is processing its importance.", marks: 1, markCode: "AO3" },
              { reasoning: "'Hands were shaking' is a physical sign of strong emotion.", marks: 1, markCode: "AO3" },
              { reasoning: "'Folded it carefully' suggests she wants to preserve it — the letter matters to her.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Shaking hands + careful folding",
          },
        },
        {
          id: "ciege-u6-s3-co-q9",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The City at Dawn",
            author: "Written for Akademik Space",
            text: "As the sun rose, the city slowly came to life. Streets filled with commuters, shops opened their doors, and the smell of fresh bread drifted from the bakery.",
          },
          stem: "What does the word 'commuters' mean in this passage?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Shopkeepers" },
            { id: "b", text: "Police officers" },
            { id: "c", text: "Tourists on holiday" },
            { id: "d", text: "People travelling to and from work" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Vocabulary in context", statement: "Infer meaning from context." }],
            steps: [
              { reasoning: "'Commuters' are people who travel regularly to work; 'streets filled' at dawn supports this.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "People travelling to and from work",
          },
        },
        {
          id: "ciege-u6-s3-co-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "The wind howled through the streets. Rain hammered against the windows. Lightning split the sky, and thunder rolled across the valley.",
          },
          stem: "Analyse how the writer creates a sense of danger.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Danger and atmosphere", statement: "Sensory language + short sentences." }],
            steps: [
              { reasoning: "Verbs like 'howled', 'hammered', 'split', 'rolled' give the storm violent force.", marks: 1, markCode: "AO3" },
              { reasoning: "Short sentences create a fast, threatening pace.", marks: 1, markCode: "AO3" },
              { reasoning: "Overall effect: the storm feels powerful and dangerous to the reader.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Violent verbs + short sentences",
          },
        },
        {
          id: "ciege-u6-s3-co-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Garden",
            author: "Written for Akademik Space",
            text: "Sunlight filtered through the leaves, casting golden patterns on the grass. Birds sang softly, and a gentle breeze moved through the flowers.",
          },
          stem: "What mood does this passage create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sad" },
            { id: "b", text: "Angry" },
            { id: "c", text: "Peaceful and warm" },
            { id: "d", text: "Fearful" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Warm imagery = calm mood." }],
            steps: [
              { reasoning: "Golden light, soft birdsong and gentle breeze create a peaceful mood.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Peaceful and warm",
          },
        },
        {
          id: "ciege-u6-s3-co-q12",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Journey Home",
            author: "Written for Akademik Space",
            text: "The train pulled out of the station slowly. Outside, the city gave way to fields, then to dark forests. Daniel pressed his forehead against the cold window and watched the miles roll past.",
          },
          stem: "Analyse how the writer uses the journey to reflect Daniel's feelings.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Symbolism and mood", statement: "Setting mirrors emotion." }],
            steps: [
              { reasoning: "The changing landscape (city to fields to dark forests) mirrors Daniel's emotional journey.", marks: 1, markCode: "AO3" },
              { reasoning: "'Dark forests' suggest uncertainty or sadness as he leaves.", marks: 1, markCode: "AO2" },
              { reasoning: "'Pressed his forehead against the cold window' is a physical detail showing longing or loneliness.", marks: 1, markCode: "AO3" },
              { reasoning: "Overall effect: the journey externalises Daniel's feelings about leaving.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Landscape mirrors emotion",
          },
        },
        {
          id: "ciege-u6-s3-co-q13",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Market",
            author: "Written for Akademik Space",
            text: "The market was crowded with stalls selling fruit, vegetables, spices and cloth. Traders called out their prices, and shoppers bargained over every purchase.",
          },
          stem: "List two things being sold at the market.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Literal comprehension", statement: "Find detail in text." }],
            steps: [
              { reasoning: "Any two of: fruit, vegetables, spices, cloth.", marks: 1, markCode: "AO2" },
              { reasoning: "Both items are taken from the passage.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two items from the list",
          },
        },
        {
          id: "ciege-u6-s3-co-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Lighthouse Keeper",
            author: "Written for Akademik Space",
            text: "Every evening, Tomas climbed the spiral stairs to light the lamp. For thirty years he had kept the light burning, guiding ships safely past the rocks. Tonight, the lamp flickered once — then held steady.",
          },
          stem: "Analyse how the writer presents Tomas's dedication.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Characterisation", statement: "Routine + time detail." }],
            steps: [
              { reasoning: "'Every evening' and 'climbed the spiral stairs' show a strict, unbroken routine.", marks: 1, markCode: "AO3" },
              { reasoning: "'For thirty years' emphasises the length of his commitment.", marks: 1, markCode: "AO2" },
              { reasoning: "'Guiding ships safely past the rocks' shows his work saves lives — purpose.", marks: 1, markCode: "AO2" },
              { reasoning: "The flicker at the end adds tension about whether he can continue.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Routine + thirty years = dedication",
          },
        },
        {
          id: "ciege-u6-s3-co-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Chase",
            author: "Written for Akademik Space",
            text: "He ran. Faster. The footsteps behind him grew louder. He turned the corner and skidded to a halt — a dead end.",
          },
          stem: "How does sentence length affect the pace of this passage?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Short sentences speed up the pace" },
            { id: "b", text: "Long sentences slow the pace" },
            { id: "c", text: "Sentence length has no effect" },
            { id: "d", text: "It makes the passage confusing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pace", statement: "Short sentences = fast pace." }],
            steps: [
              { reasoning: "Very short sentences create urgency and speed, matching the chase.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Short sentences speed up the pace",
          },
        },
        {
          id: "ciege-u6-s3-co-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Empty House",
            author: "Written for Akademik Space",
            text: "The house had been empty for years. Dust covered the furniture, and cobwebs hung in the corners. Yet as Elif pushed open the gate, she felt something stir — as if the house had been waiting for her.",
          },
          stem: "Analyse how the writer builds mystery at the end of the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mystery", statement: "Decay detail + personification." }],
            steps: [
              { reasoning: "'Dust' and 'cobwebs' establish the house as neglected and unknown.", marks: 1, markCode: "AO3" },
              { reasoning: "The dash creates a pause that builds suspense before the reveal.", marks: 1, markCode: "AO3" },
              { reasoning: "Personification — 'as if the house had been waiting' — makes the house seem alive.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall effect: the reader is left wondering what the house holds.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Personification + suspense",
          },
        },
      ],
    },
    {
      id: "ciege-u6-s3-writing",
      title: "Writing practice",
      skill: "Apply writing skills across different text types.",
      lesson: {
        sections: [
          {
            heading: "Text types recap",
            body: "Narrative: story with character and plot. Descriptive: sensory detail. Argumentative: one side strongly. Discursive: multiple viewpoints. Transactional: letters, reports, instructions.",
          },
          {
            heading: "Common exam tasks",
            body: "IGCSE Paper 1 asks for directed writing — you choose the form (story, letter, article, speech, review). Always check the prompt for required format and audience.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write a topic sentence for an article about a school trip.",
          solution: "'Last Friday, Year 10 travelled to the Science Museum — and what they discovered changed how they see the world.'",
        },
      },
      questions: [
        {
          id: "ciege-u6-s3-wr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which text type would you use for a complaint letter?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Poem" },
            { id: "b", text: "Formal letter" },
            { id: "c", text: "Speech" },
            { id: "d", text: "Narrative" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Text type", statement: "Match form to purpose." }],
            steps: [
              { reasoning: "Complaints use formal letters.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal letter",
          },
        },
        {
          id: "ciege-u6-s3-wr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a topic sentence for a story about a lost key.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Opening sentence", statement: "Hook + intrigue." }],
            steps: [
              { reasoning: "The sentence introduces intrigue.", marks: 1, markCode: "AO2" },
              { reasoning: "It could mention the lost key.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One opening sentence",
          },
        },
        {
          id: "ciege-u6-s3-wr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a paragraph (3-4 sentences) describing your ideal school day.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Descriptive paragraph", statement: "Sensory + detail." }],
            steps: [
              { reasoning: "The paragraph describes the day vividly.", marks: 1, markCode: "AO2" },
              { reasoning: "It uses sensory or descriptive language.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Descriptive paragraph",
          },
        },
        {
          id: "ciege-u6-s3-wr-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short argument (intro + one paragraph) for 'Students should have more free time'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Argumentative writing", statement: "Thesis + supporting point." }],
            steps: [
              { reasoning: "The introduction states the thesis.", marks: 1, markCode: "AO2" },
              { reasoning: "The paragraph gives a supporting reason.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence or example could be included.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Intro + paragraph argument",
          },
        },
        {
          id: "ciege-u6-s3-wr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which text type would you use for a newspaper report?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A personal narrative" },
            { id: "b", text: "A formal letter" },
            { id: "c", text: "A report" },
            { id: "d", text: "A poem" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Text type", statement: "Match form to purpose." }],
            steps: [
              { reasoning: "Newspaper reports use report format with facts and quotes.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "A report",
          },
        },
        {
          id: "ciege-u6-s3-wr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a topic sentence for a descriptive piece about the sea.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Opening sentence", statement: "Hook + imagery." }],
            steps: [
              { reasoning: "The sentence introduces the sea with descriptive language.", marks: 1, markCode: "AO2" },
              { reasoning: "It creates interest or mood.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One descriptive topic sentence",
          },
        },
        {
          id: "ciege-u6-s3-wr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which text type presents several viewpoints on an issue?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Descriptive" },
            { id: "b", text: "Discursive" },
            { id: "c", text: "Instructions" },
            { id: "d", text: "Narrative" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Text type", statement: "Discursive = multiple views." }],
            steps: [
              { reasoning: "Discursive writing explores both or several sides of an issue.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Discursive",
          },
        },
        {
          id: "ciege-u6-s3-wr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a short formal letter opening (2-3 sentences) requesting information about a course.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Formal letter", statement: "Purpose stated politely." }],
            steps: [
              { reasoning: "Formal greeting included.", marks: 1, markCode: "AO2" },
              { reasoning: "Purpose stated clearly and politely.", marks: 1, markCode: "AO2" },
              { reasoning: "Register is formal; punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal letter opening",
          },
        },
        {
          id: "ciege-u6-s3-wr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a persuasive/argumentative text?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To convince the reader of one viewpoint" },
            { id: "b", text: "To list instructions" },
            { id: "c", text: "To tell a story" },
            { id: "d", text: "To describe a scene" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Argumentative writing", statement: "Persuade the reader." }],
            steps: [
              { reasoning: "Argumentative writing presents one side strongly to persuade.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "To convince the reader",
          },
        },
        {
          id: "ciege-u6-s3-wr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between narrative and descriptive writing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Text types", statement: "Story vs sensory detail." }],
            steps: [
              { reasoning: "Narrative tells a story with character and plot.", marks: 1, markCode: "AO2" },
              { reasoning: "Descriptive focuses on sensory detail of a person, place or thing.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Narrative = story; descriptive = sensory detail",
          },
        },
        {
          id: "ciege-u6-s3-wr-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A prompt says: 'Write a review of a restaurant you visited.' Which text type fits best?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A review" },
            { id: "b", text: "A formal complaint" },
            { id: "c", text: "An instruction manual" },
            { id: "d", text: "A discursive essay" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Prompt fidelity", statement: "Match the named format." }],
            steps: [
              { reasoning: "The prompt names 'review', so write a review with opinion and evidence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "A review",
          },
        },
        {
          id: "ciege-u6-s3-wr-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a paragraph giving your opinion on whether homework should be abolished, including one reason.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Opinion paragraph", statement: "View + reason." }],
            steps: [
              { reasoning: "A clear opinion is stated.", marks: 1, markCode: "AO2" },
              { reasoning: "At least one supporting reason is given.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Opinion paragraph with reason",
          },
        },
        {
          id: "ciege-u6-s3-wr-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What makes a good story opening?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Narrative technique", statement: "Hook the reader." }],
            steps: [
              { reasoning: "It grabs attention quickly (action, dialogue, intrigue).", marks: 1, markCode: "AO2" },
              { reasoning: "It introduces character, setting or conflict.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Attention-grabbing opening",
          },
        },
        {
          id: "ciege-u6-s3-wr-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write two sentences of dialogue between two friends planning a surprise party.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Dialogue", statement: "Speech marks + natural voice." }],
            steps: [
              { reasoning: "Correct punctuation for direct speech used.", marks: 1, markCode: "AO2" },
              { reasoning: "Dialogue is natural and advances the plan.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two lines of punctuated dialogue",
          },
        },
        {
          id: "ciege-u6-s3-wr-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the most effective way to start an argumentative essay?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Use only questions" },
            { id: "b", text: "Tell an unrelated story" },
            { id: "c", text: "List every possible viewpoint" },
            { id: "d", text: "State your position clearly" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Argument structure", statement: "Thesis first." }],
            steps: [
              { reasoning: "A strong argument opens with a clear thesis statement.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "State your position clearly",
          },
        },
        {
          id: "ciege-u6-s3-wr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short speech (opening + two sentences) encouraging students to join the school debating team.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Speech writing", statement: "Greeting + persuasive content." }],
            steps: [
              { reasoning: "Appropriate greeting used (e.g. 'Good morning everyone').", marks: 1, markCode: "AO2" },
              { reasoning: "Content is persuasive and relevant to debating.", marks: 1, markCode: "AO2" },
              { reasoning: "Register suits a speech to students.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Speech opening + persuasive sentences",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u6-s3-review-notes",
      title: "Mixed practice — revision notes",
      summary: "Comprehension strategy, writing across text types, exam technique.",
      sections: [
        { heading: "Comprehension", body: "Read once for overview, then for answers. Name technique + quote + explain effect for analysis." },
        { heading: "Writing", body: "Match text type to purpose. Plan briefly, write fully, check at the end." },
      ],
    },
  ],
};
