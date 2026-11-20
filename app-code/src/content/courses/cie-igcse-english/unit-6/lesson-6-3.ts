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
            { id: "a", text: "Joyful" }, { id: "b", text: "Ominous and tense" }, { id: "c", text: "Calm" }, { id: "d", text: "Excited" },
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
            { id: "a", text: "Narrative" }, { id: "b", text: "Formal letter" }, { id: "c", text: "Poem" }, { id: "d", text: "Speech" },
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
