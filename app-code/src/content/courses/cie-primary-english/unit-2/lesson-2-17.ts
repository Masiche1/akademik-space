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
            { id: "a", text: "A quotation or reference to specific words" }, { id: "b", text: "Your own opinion with no link to the text" }, { id: "c", text: "A summary of a different book" }, { id: "d", text: "The number of pages" },
          ], correctChoiceId: "a" },
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
