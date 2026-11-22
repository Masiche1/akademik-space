import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ciege-u5-lesson-5-2",
  code: "5-2",
  title: "Reports, Articles and Speeches",
  goal: "I CAN write reports, articles and speeches for different audiences.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: non-fiction"],
  vocabulary: [
    { term: "Report", definition: "Factual writing organised by headings and subheadings." },
    { term: "Article", definition: "A piece for a newspaper or magazine." },
    { term: "Speech", definition: "Spoken address to an audience." },
    { term: "Subheading", definition: "A heading within a section." },
    { term: "Rhetorical question", definition: "Question asked for effect, not answer." },
  ],
  concepts: [
    {
      id: "ciege-u5-s2-reports",
      title: "Reports and articles",
      skill: "Write structured factual pieces at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Reports",
            body: "Reports present facts clearly: title, introduction, subheadings, factual paragraphs, conclusion. Use formal, objective language — no opinions or 'I'.",
          },
          {
            heading: "Articles",
            body: "Articles can be factual or opinion-based. For a newspaper, use a catchy headline, engaging opening, clear paragraphs and a strong ending. Match the tone to the publication.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the opening of a report about school facilities.",
          solution: "'This report examines the state of school facilities. It was conducted over three days and involved interviews with staff and students.'",
        },
      },
      questions: [
        {
          id: "ciege-u5-s2-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main feature of a report?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Personal opinions" },
            { id: "b", text: "Dialogue" },
            { id: "c", text: "Factual information organised by headings" },
            { id: "d", text: "Poetry" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Report", statement: "Factual + structured." }],
            steps: [
              { reasoning: "Reports are factual and organised by headings.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Factual + headings",
          },
        },
        {
          id: "ciege-u5-s2-re-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a subheading for a report section about sports facilities.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Subheading", statement: "Clear topic label." }],
            steps: [
              { reasoning: "The subheading names the topic.", marks: 1, markCode: "AO2" },
              { reasoning: "It is concise.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. Sports Facilities",
          },
        },
        {
          id: "ciege-u5-s2-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the opening sentence of a newspaper article about a school event.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Article opening", statement: "Engaging, informative." }],
            steps: [
              { reasoning: "The sentence is engaging.", marks: 1, markCode: "AO2" },
              { reasoning: "It states the key information.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One article opening",
          },
        },
        {
          id: "ciege-u5-s2-re-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences that could appear in the middle of a report about recycling in your school.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Report writing", statement: "Factual, clear." }],
            steps: [
              { reasoning: "Both sentences are factual.", marks: 1, markCode: "AO2" },
              { reasoning: "They could include statistics or observations.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal register maintained.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two report sentences",
          },
        },
        {
          id: "ciege-u5-s2-re-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a key feature of a report?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Factual information organised by headings" },
            { id: "b", text: "Dialogue between characters" },
            { id: "c", text: "Poetic language" },
            { id: "d", text: "First-person opinions" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Report", statement: "Factual + structured." }],
            steps: [
              { reasoning: "Reports present facts under headings — objective and organised.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Factual information organised by headings",
          },
        },
        {
          id: "ciege-u5-s2-re-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many words are in the sentence \"The report has four sections\"?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 5 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words accurately." }],
            steps: [
              { reasoning: "The / report / has / four / sections = 5 words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "ciege-u5-s2-re-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should a report avoid using 'I' and personal opinions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Opinions are illegal" },
            { id: "b", text: "Reports require a formal, objective tone" },
            { id: "c", text: "To save time" },
            { id: "d", text: "It makes reports shorter" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Report register", statement: "Formal, objective language." }],
            steps: [
              { reasoning: "Reports present facts objectively — 'I' and opinions belong to articles or essays.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal, objective tone required",
          },
        },
        {
          id: "ciege-u5-s2-re-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sequence words are in \"First, second, third\"?",
          response: { type: "numeric", parts: [
            { label: "Sequence words", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Sequence words", statement: "First, second, third order items." }],
            steps: [
              { reasoning: "First, second and third — 3 sequence words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u5-s2-re-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should the conclusion of a report do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Summarise the findings" },
            { id: "b", text: "Introduce new opinions" },
            { id: "c", text: "Use first person" },
            { id: "d", text: "Ask questions" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Report structure", statement: "Conclusion summarises." }],
            steps: [
              { reasoning: "A conclusion brings together and summarises what the report found.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Summarise the findings",
          },
        },
        {
          id: "ciege-u5-s2-re-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In \"The museum opened in 1900\", how many words and how many numbers are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 5 },
            { label: "Numbers", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words and numbers." }],
            steps: [
              { reasoning: "The / museum / opened / in / 1900 = 5 words (the numeral counts as a word).", marks: 1, markCode: "AO2" },
              { reasoning: "1900 is the only number — 1.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "5 words, 1 number",
          },
        },
        {
          id: "ciege-u5-s2-re-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best subheading for a report section about school meals?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Section 2" },
            { id: "b", text: "Food" },
            { id: "c", text: "I think food is bad" },
            { id: "d", text: "Canteen Meals: Quality and Cost" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Subheading", statement: "Clear, concise topic label." }],
            steps: [
              { reasoning: "'Canteen Meals: Quality and Cost' is specific and informative — best subheading.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Canteen Meals: Quality and Cost",
          },
        },
        {
          id: "ciege-u5-s2-re-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a writer use bullet points in a report?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To present key facts clearly and quickly" },
            { id: "b", text: "Because they are always required" },
            { id: "c", text: "To save time when writing" },
            { id: "d", text: "To make it look pretty" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Report layout", statement: "Bullet points aid scanning." }],
            steps: [
              { reasoning: "Bullet points break information into scannable items.", marks: 1, markCode: "AO2" },
              { reasoning: "This lets the reader grasp key facts quickly — useful in reports.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Present key facts clearly",
          },
        },
        {
          id: "ciege-u5-s2-re-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In \"The report has a title, an introduction, three sections and a conclusion\", how many parts and how many commas are there?",
          response: { type: "numeric", parts: [
            { label: "Parts", answer: 4 },
            { label: "Commas", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count list items and punctuation." }],
            steps: [
              { reasoning: "Title, introduction, three sections, conclusion = 4 parts.", marks: 1, markCode: "AO2" },
              { reasoning: "Two commas separate the listed items — 2.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "4 parts, 2 commas",
          },
        },
        {
          id: "ciege-u5-s2-re-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which register is appropriate for a report?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Slang" },
            { id: "b", text: "Formal and objective" },
            { id: "c", text: "Casual" },
            { id: "d", text: "Informal and personal" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Report register", statement: "Formal, objective language." }],
            steps: [
              { reasoning: "Reports use formal, objective language — not casual or personal.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Formal and objective",
          },
        },
        {
          id: "ciege-u5-s2-re-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many adjectives are in the phrase \"The new large hall\"?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'New' and 'large' describe the hall — 2 adjectives.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u5-s2-re-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a writer include statistics in a report?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Because they are always required" },
            { id: "b", text: "To support claims with evidence" },
            { id: "c", text: "To fill space" },
            { id: "d", text: "To show off" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evidence in reports", statement: "Statistics support findings." }],
            steps: [
              { reasoning: "Statistics provide factual evidence for the report's findings.", marks: 1, markCode: "AO2" },
              { reasoning: "This makes the report more convincing and credible.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Support claims with evidence",
          },
        },
      ],
    },
    {
      id: "ciege-u5-s2-speeches",
      title: "Writing speeches",
      skill: "Write speeches with rhetorical devices and audience awareness.",
      lesson: {
        sections: [
          {
            heading: "Speech features",
            body: "Speeches address an audience directly ('you', 'we'). Use rhetorical questions, repetition for emphasis, and emotional language. Vary sentence length for impact.",
          },
          {
            heading: "Structure",
            body: "Opening: greet and grab attention. Body: your main points with emotional appeal. Ending: strong call to action or memorable final line.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the opening of a speech about school recycling.",
          solution: "'Good morning everyone. Today I'm going to talk about something that affects us all — the future of our school and our planet.'",
        },
      },
      questions: [
        {
          id: "ciege-u5-s2-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a key feature of speech writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Long paragraphs" },
            { id: "b", text: "No audience" },
            { id: "c", text: "Formal letter format" },
            { id: "d", text: "Direct address to listeners" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Speech", statement: "Addresses audience directly." }],
            steps: [
              { reasoning: "Speeches use 'you' and 'we' to address listeners.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Direct address",
          },
        },
        {
          id: "ciege-u5-s2-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the opening greeting of a school assembly speech.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Speech opening", statement: "Address audience." }],
            steps: [
              { reasoning: "The greeting addresses the audience.", marks: 1, markCode: "AO2" },
              { reasoning: "It is appropriate for a school setting.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One greeting",
          },
        },
        {
          id: "ciege-u5-s2-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence using a rhetorical question in a speech about exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Rhetorical question", statement: "Engages audience." }],
            steps: [
              { reasoning: "The sentence asks a question.", marks: 1, markCode: "AO2" },
              { reasoning: "It persuades or engages rather than seeks information.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One rhetorical question",
          },
        },
        {
          id: "ciege-u5-s2-sp-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a call-to-action sentence ending a speech about protecting the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Call to action", statement: "Urges audience to act." }],
            steps: [
              { reasoning: "The sentence urges action.", marks: 1, markCode: "AO2" },
              { reasoning: "It addresses the audience directly.", marks: 1, markCode: "AO2" },
              { reasoning: "It is memorable and strong.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One call-to-action",
          },
        },
        {
          id: "ciege-u5-s2-sp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word most directly addresses the audience in a speech?",
          response: { type: "mcq", choices: [
            { id: "a", text: "the crowd" },
            { id: "b", text: "you" },
            { id: "c", text: "listeners" },
            { id: "d", text: "people" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Direct address", statement: "'You' and 'we' engage listeners." }],
            steps: [
              { reasoning: "'You' speaks directly to each listener — the strongest direct address.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "you",
          },
        },
        {
          id: "ciege-u5-s2-sp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many words are in \"Good morning everyone\"?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words accurately." }],
            steps: [
              { reasoning: "Good / morning / everyone = 3 words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u5-s2-sp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a rhetorical question in a speech?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A question seeking a real answer" },
            { id: "b", text: "A grammar exercise" },
            { id: "c", text: "A question asked for effect, not an answer" },
            { id: "d", text: "An exam question" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rhetorical question", statement: "Question for effect." }],
            steps: [
              { reasoning: "A rhetorical question engages the audience without expecting an answer.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Question asked for effect",
          },
        },
        {
          id: "ciege-u5-s2-sp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sentences are in \"We must act now. We must act today. We must act together.\"?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count sentence boundaries." }],
            steps: [
              { reasoning: "Three full stops mark three sentences.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u5-s2-sp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should the ending of a speech include?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A new topic" },
            { id: "b", text: "A strong call to action or memorable final line" },
            { id: "c", text: "A long conclusion" },
            { id: "d", text: "A question mark" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Speech structure", statement: "Ending inspires action." }],
            steps: [
              { reasoning: "A strong ending urges action or leaves a memorable message.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Call to action or memorable line",
          },
        },
        {
          id: "ciege-u5-s2-sp-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In \"We must act now\", how many words and how many verbs are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 4 },
            { label: "Verbs", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action or state word." }],
            steps: [
              { reasoning: "We / must / act / now = 4 words.", marks: 1, markCode: "AO2" },
              { reasoning: "'Must' and 'act' are the two verbs — 2.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "4 words, 2 verbs",
          },
        },
        {
          id: "ciege-u5-s2-sp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do speakers repeat key phrases in a speech?",
          response: { type: "mcq", choices: [
            { id: "a", text: "For emphasis and rhythm" },
            { id: "b", text: "To confuse the audience" },
            { id: "c", text: "It is a grammar rule" },
            { id: "d", text: "To make it longer" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repetition", statement: "Repeated phrases emphasise." }],
            steps: [
              { reasoning: "Repetition makes key points memorable and gives the speech rhythm.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "For emphasis and rhythm",
          },
        },
        {
          id: "ciege-u5-s2-sp-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a speaker use several short sentences followed by one long one?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The speaker is lazy" },
            { id: "b", text: "It is an accident" },
            { id: "c", text: "It is wrong" },
            { id: "d", text: "The contrast builds emphasis and emotional impact" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sentence variety", statement: "Varied length creates impact." }],
            steps: [
              { reasoning: "Short sentences create punch; the long one adds weight — deliberate contrast.", marks: 1, markCode: "AO2" },
              { reasoning: "The variation controls pace and builds emotional impact.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Contrast builds emphasis",
          },
        },
        {
          id: "ciege-u5-s2-sp-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In \"Ladies and gentlemen, thank you for coming\", how many words and how many commas are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 7 },
            { label: "Commas", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence analysis", statement: "Count words and punctuation." }],
            steps: [
              { reasoning: "Ladies / and / gentlemen / thank / you / for / coming = 7 words.", marks: 1, markCode: "AO2" },
              { reasoning: "One comma after 'gentlemen' — 1.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "7 words, 1 comma",
          },
        },
        {
          id: "ciege-u5-s2-sp-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an appropriate greeting for a school assembly speech?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hey guys" },
            { id: "b", text: "Attention!" },
            { id: "c", text: "Yo" },
            { id: "d", text: "Good morning, everyone" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Speech opening", statement: "Address audience politely." }],
            steps: [
              { reasoning: "'Good morning, everyone' is polite and appropriate for a school assembly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Good morning, everyone",
          },
        },
        {
          id: "ciege-u5-s2-sp-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many pronouns are in \"You can do it. We believe in you.\"?",
          response: { type: "numeric", parts: [
            { label: "Pronouns", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Pronoun", statement: "Replaces a noun." }],
            steps: [
              { reasoning: "You, We and you — 3 pronouns.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u5-s2-sp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a call-to-action ending for a speech about saving water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Call to action", statement: "Urges audience to act." }],
            steps: [
              { reasoning: "The ending urges the audience to act on water saving.", marks: 1, markCode: "AO2" },
              { reasoning: "It uses direct address ('you' or 'we').", marks: 1, markCode: "AO2" },
              { reasoning: "It is memorable or emotionally strong.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation is accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Call-to-action ending",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u5-s2-nonfic-notes",
      title: "Reports, articles and speeches — revision notes",
      summary: "Factual structure, article openings, speech techniques.",
      sections: [
        { heading: "Reports", body: "Factual, objective, organised by headings. No opinions or 'I'." },
        { heading: "Speeches", body: "Direct address, rhetorical questions, repetition, strong ending. Match tone to occasion." },
      ],
    },
  ],
};
