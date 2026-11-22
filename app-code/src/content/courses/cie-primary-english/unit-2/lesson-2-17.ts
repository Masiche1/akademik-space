import type { Lesson } from "../../../types.ts";

export const lesson217: Lesson = {
  id: "cipe-u2-lesson-2-17",
  code: "2-17",
  title: "Stage 5 — Interpreting and Appreciating Texts",
  goal: "I CAN analyse how texts are structured, interpret meaning beyond the literal and appreciate writers' craft.",
  standards: ["Cambridge Primary English 0058 Stage 5: reading",
  "Cambridge Primary English 0058 framework substrands: 5Rs, 5Ri, 5Ra"],
  stage: 5,
  vocabulary: [
    { term: "Interpretation", definition: "Explaining what a text means, including implied ideas." },
    { term: "Appreciation", definition: "Recognising and valuing a writer's skill and effect." },
    { term: "Structure", definition: "How a text is organised — sections, sequence, paragraphs." },
    { term: "Tone", definition: "The attitude or mood a writer creates." },
    { term: "Evidence", definition: "Words or details from the text that support an interpretation." },
    { term: "Theme", definition: "The main idea or message of a text." },
  ],
  concepts: [
    {
      id: "cipe-u2-s17-reading",
      title: "Structure, interpretation and appreciation",
      skill: "Analyse text organisation, infer deeper meaning and evaluate writers' techniques at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Structure and interpretation",
            body: "Analyse how a text is organised: openings that hook, sections that develop ideas, endings that resolve. Interpret beyond literal meaning — what does a character's action suggest about their feelings? Always support interpretations with evidence: quote or refer to specific words.",
          },
          {
            heading: "Appreciation",
            body: "Appreciate craft: why did the writer choose this word, this image, this structure? Comment on tone — is the text humorous, serious, tense? Judge effectiveness: does the structure serve the purpose? Give a reasoned opinion, not just 'I liked it'.",
          },
        ],
        keyFormulas: [
          { name: "Interpretation", statement: "claim + evidence from the text" },
          { name: "Appreciation", statement: "identify technique → explain effect → judge success" },
        ],
        workedExample: {
          problem: "A story opens 'The door creaked open and Mara froze.' Interpret the effect of this opening and comment on the writer's craft.",
          solution: "Interpretation: creates suspense — reader wonders what Mara fears. Craft: 'creaked' personifies the door and signals danger; short sentence 'froze' heightens tension. Effective hook for a mystery.",
        },
      },
      questions: [
        {
          id: "cipe-u2-rt5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best evidence to support an interpretation of a text?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The number of pages" },
            { id: "b", text: "Your own opinion with no link to the text" },
            { id: "c", text: "A summary of a different book" },
            { id: "d", text: "A quotation or reference to specific words" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Evidence", statement: "Text-based support." }],
            steps: [{ reasoning: "Interpretations need textual evidence.", marks: 1, markCode: "AO1" }],
            finalAnswer: "A quotation/reference to the text",
          },
        },
        {
          id: "cipe-u2-rt5-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two features of a text's structure you could analyse at Stage 5.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Structure", statement: "Organisation of the text." }],
            steps: [
              { reasoning: "e.g. how it opens/hooks the reader.", marks: 1, markCode: "AO1" },
              { reasoning: "e.g. how sections/paragraphs develop ideas or the ending resolves.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "e.g. opening hook, paragraph development, ending",
          },
        },
        {
          id: "cipe-u2-rt5-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'The garden had been neglected for years. Weeds choked the roses, and the pond had turned green.' Interpret what the writer suggests about the garden's condition and identify one technique used.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Interpretation", statement: "Infer meaning + cite technique." }],
            steps: [
              { reasoning: "Interpretation: garden is overgrown/abandoned and unhealthy.", marks: 1, markCode: "AO2" },
              { reasoning: "Technique: descriptive detail ('weeds choked') creates vivid negative image.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence linked to interpretation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Abandoned/unhealthy; vivid descriptive detail",
          },
        },
        {
          id: "cipe-u2-rt5-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Read this extract: 'Rain hammered the windows all night. By morning the river had burst its banks, and the village stood in grey silence.' (a) Describe the tone created. (b) Interpret what 'grey silence' suggests. (c) Identify two techniques the writer uses. (d) Explain how the structure (single sentence vs short sentences) affects the reader. (e) Write a judgement on whether the writing is effective, giving reasons. Use evidence throughout.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Appreciation and interpretation", statement: "Tone, inference, technique, structure, judgement." }],
            steps: [
              { reasoning: "(a) Tone: ominous/tense.", marks: 1, markCode: "AO2" },
              { reasoning: "(b) 'Grey silence' suggests stillness after disaster, sadness/desolation.", marks: 1, markCode: "AO2" },
              { reasoning: "(c) Two valid techniques (personification 'hammered', imagery, pathetic fallacy).", marks: 1, markCode: "AO3" },
              { reasoning: "(d) Short sentences create pace/impact; structure mirrors the sudden flood.", marks: 1, markCode: "AO3" },
              { reasoning: "(e) Reasoned judgement with evidence.", marks: 2, markCode: "AO3" },
              { reasoning: "Evidence used for each point.", marks: 1, markCode: "AO4" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Ominous tone; desolation; personification/imagery; structure mirrors event; effective.",
            levels: [
              { level: "3", marks: "7-8", descriptor: "All parts analysed with precise techniques, evidence and a reasoned judgement." },
              { level: "2", marks: "4-6", descriptor: "Most parts covered; some techniques identified; judgement present but thin." },
              { level: "1", marks: "1-3", descriptor: "Limited analysis; few techniques; little evidence." },
            ],
          },
        },
        {
          id: "cipe-u2-rt5-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'interpretation' of a text?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Counting the words" },
            { id: "b", text: "Copying the text exactly" },
            { id: "c", text: "Explaining what the text means, including implied ideas" },
            { id: "d", text: "Reading aloud" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Interpretation", statement: "Explaining meaning including implied ideas." }],
            steps: [{ reasoning: "Interpretation goes beyond the literal words.", marks: 1, markCode: "AO1" }],
            finalAnswer: "Explaining what the text means",
          },
        },
        {
          id: "cipe-u2-rt5-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'tone' of a text?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The attitude or mood the writer creates" },
            { id: "b", text: "The price" },
            { id: "c", text: "The number of pages" },
            { id: "d", text: "The font size" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Tone", statement: "Attitude or mood created." }],
            steps: [{ reasoning: "Tone is the feeling/attitude of the writing.", marks: 1, markCode: "AO1" }],
            finalAnswer: "The attitude or mood",
          },
        },
        {
          id: "cipe-u2-rt5-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many main parts does text structure have that you could analyse: opening, middle, end? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Structure", statement: "Opening, middle, end." }],
            steps: [
              { reasoning: "Three parts listed.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-rt5-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read: 'The old house groaned in the wind.' What technique does 'groaned' use?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rhyme" },
            { id: "b", text: "A heading" },
            { id: "c", text: "Personification" },
            { id: "d", text: "A list" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Human trait given to object." }],
            steps: [{ reasoning: "A house can't literally groan — human sound given to it.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Personification",
          },
        },
        {
          id: "cipe-u2-rt5-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read: 'Her eyes were stars.' What is this an example of?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A fact" },
            { id: "b", text: "A heading" },
            { id: "c", text: "A metaphor" },
            { id: "d", text: "Direct speech" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "Direct comparison without 'like'." }],
            steps: [{ reasoning: "Eyes compared directly to stars.", marks: 1, markCode: "AO2" }],
            finalAnswer: "A metaphor",
          },
        },
        {
          id: "cipe-u2-rt5-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'theme' of a text?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Theme", statement: "Main idea or message." }],
            steps: [
              { reasoning: "Theme is the underlying message or idea.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer stated.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The main idea or message",
          },
        },
        {
          id: "cipe-u2-rt5-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read: 'The market was a hive of activity.' Interpret what this metaphor suggests about the market.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Interpretation", statement: "Explain implied meaning + evidence." }],
            steps: [
              { reasoning: "'Hive of activity' suggests busy, buzzing, organised energy.", marks: 1, markCode: "AO2" },
              { reasoning: "Metaphor compared to a bee hive.", marks: 1, markCode: "AO2" },
              { reasoning: "Interpretation linked to the text.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The market is very busy and lively",
          },
        },
        {
          id: "cipe-u2-rt5-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many techniques can you name for analysing a text's craft: imagery, tone, structure? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Appreciation", statement: "Analyse technique, effect, judgement." }],
            steps: [
              { reasoning: "Three named.", marks: 1, markCode: "AO2" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipe-u2-rt5-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between 'I liked the story' and an appreciative comment?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Appreciation names the technique, explains its effect and judges whether it works" },
            { id: "b", text: "Appreciation is always negative" },
            { id: "c", text: "There is no difference" },
            { id: "d", text: "Appreciation means reading aloud" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Appreciation", statement: "Technique → effect → judgement." }],
            steps: [{ reasoning: "Good appreciation analyses craft, not just personal taste.", marks: 1, markCode: "AO3" }],
            finalAnswer: "It analyses technique and effect",
          },
        },
        {
          id: "cipe-u2-rt5-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read: 'The sun crept over the hills, painting the sky gold.' Identify the technique and explain its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Appreciation", statement: "Name technique, explain effect." }],
            steps: [
              { reasoning: "Technique: personification ('sun crept') and imagery ('painting').", marks: 1, markCode: "AO3" },
              { reasoning: "Effect: creates a peaceful, beautiful morning scene.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence from the line used.", marks: 1, markCode: "AO4" },
              { reasoning: "Clear explanation given.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Personification/imagery; creates a peaceful, beautiful scene",
          },
        },
        {
          id: "cipe-u2-rt5-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read this opening: 'The letter arrived on Tuesday. By Friday, everything had changed.' Interpret what the writer suggests about the letter's importance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Interpretation", statement: "Claim + evidence." }],
            steps: [
              { reasoning: "Interpretation: the letter changed everything — it is very important.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'everything had changed' shows its impact.", marks: 1, markCode: "AO4" },
              { reasoning: "Time gap (Tuesday to Friday) emphasises significance.", marks: 1, markCode: "AO3" },
              { reasoning: "Interpretation is supported and reasoned.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The letter is very important — it changed everything",
          },
        },
        {
          id: "cipe-u2-rt5-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short appreciative comment on a poem you have read: name one technique and explain why it works.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Appreciation", statement: "Technique → effect → judgement." }],
            steps: [
              { reasoning: "A specific technique is named.", marks: 1, markCode: "AO3" },
              { reasoning: "Its effect on the reader is explained.", marks: 1, markCode: "AO2" },
              { reasoning: "A judgement on effectiveness is given.", marks: 1, markCode: "AO3" },
              { reasoning: "Comment references the actual poem.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "e.g. 'The rhyme scheme makes the poem memorable, which helps the message stick.'",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipe-u2-rt5-notes",
      title: "Interpreting texts — notes",
      summary: "Interpret = claim + evidence. Appreciate = technique → effect → judgement.",
      sections: [
        { heading: "Interpretation", body: "Go beyond literal meaning; quote the words that support your view." },
        { heading: "Appreciation", body: "Name the technique, explain its effect, then judge if it works." },
      ],
    },
  ],
};
