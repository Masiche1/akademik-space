import type { Lesson, MarkLevel } from "../../../types.ts";

/** Level bands for a response worth 6 or 8 marks. */
function levels(top: 6 | 8, part?: string): MarkLevel[] {
  const ranges = top === 6 ? ["5-6", "3-4", "1-2"] : ["7-8", "5-6", "3-4", "1-2"];
  const text = [
    "Perceptive, assured comparison or analysis; well-chosen, integrated references.",
    "Thorough, developed comment; well-chosen references.",
    "Clear, relevant explanation; relevant references.",
    "Some understanding; some relevant references.",
    "Simple, limited comment; few references.",
  ];
  const picks = top === 6 ? [1, 3, 4] : [0, 2, 3, 4];
  return ranges.map((marks, i) => ({
    level: `Level ${ranges.length - i}`,
    marks,
    descriptor: text[picks[i] ?? 0] ?? "",
    part,
  }));
}

const POEM_A = {
  title: "The Old Oak",
  author: "Written for Akademik Space",
  lineNumbers: true,
  text: "Four hundred winters has the oak stood here,\nIts roots like fists clenched deep in stubborn clay.\nThe storms have broken half its limbs, and yet\nIt holds the sky up, ragged, proud and grey.\n\nChildren have carved their names across its bark;\nThey grow, they leave, they fade. The oak remains,\nA silent witness to our brief, bright years,\nStill wearing every scar like a medal.",
};

const POEM_B = {
  title: "Paper Boat",
  author: "Written for Akademik Space",
  lineNumbers: true,
  text: "I folded it in seconds,\nThin as a whisper,\nAnd set it on the gutter's rushing stream.\n\nIt tipped. It spun.\nIt drifted past the drain\nAnd out of sight.\n\nNothing lasts, I thought,\nNot even the things we make\nto hold us up.",
};

export const lesson13: Lesson = {
  id: "et8-u1-lesson-1-3",
  code: "1-3",
  title: "Comparing Poems and Writing About Them",
  goal: "I CAN compare two poems on ideas and methods and write a well-structured analytical paragraph.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2", "4ET1 AO3"],
  vocabulary: [
    { term: "Compare", definition: "Show how two texts are similar and different." },
    { term: "Contrast", definition: "Show how two texts are different." },
    { term: "Comparative connective", definition: "A word or phrase such as 'whereas', 'similarly' or 'in contrast' that links two ideas." },
    { term: "Point-Evidence-Explain (PEE)", definition: "A paragraph structure: make a point, support it with a quotation, then explain the effect." },
    { term: "Embedded quotation", definition: "A short quotation built into your own sentence." },
    { term: "Analysis", definition: "Close examination of how language, form and structure create meaning." },
  ],
  concepts: [
    {
      id: "et8-u1-compare-poems",
      title: "Comparing two poems",
      skill: "Compare ideas and methods in two poems using comparative connectives and evidence from both.",
      lesson: {
        sections: [
          {
            heading: "What to compare",
            body: "Compare on three levels: **ideas** (what each poet says about the theme), **attitudes** (how the speaker feels) and **methods** (the techniques, form and structure used). A good comparison looks for both similarity and difference, and gives equal weight to each poem.",
          },
          {
            heading: "How to write a comparison",
            body: "Use **comparative connectives**: 'similarly', 'likewise', 'whereas', 'in contrast', 'however'. Do not write one paragraph about poem A and another about poem B; integrate them in the same paragraph. A model structure is: point about both poems; evidence from A; evidence from B; explanation of the difference or similarity.",
          },
        ],
        keyFormulas: [
          { name: "Similarity", statement: "Both poets present... Similarly, ..." },
          { name: "Difference", statement: "Whereas A..., B..." },
          { name: "Method", statement: "A uses a simile while B uses..." },
          { name: "Balance", statement: "Quote from both poems in each paragraph." },
        ],
        workedExample: {
          problem: "Compare how the poets present time in 'The Old Oak' and 'Paper Boat'.",
          solution: "Both poems present time as powerful, but they differ in attitude. In 'The Old Oak', time is something the tree survives: it 'holds the sky up, ragged, proud and grey', so the oak is heroic, wearing scars 'like a medal'. In contrast, 'Paper Boat' presents time as destructive, with the boat that 'tipped' and 'spun' before it drifts 'out of sight'. Whereas the oak endures, the boat is fragile, so the first poem has a proud tone and the second a melancholy one.",
        },
      },
      questions: [
        {
          id: "et8-u1-compare-poems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which connective best introduces a DIFFERENCE between two poems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whereas" },
              { id: "b", text: "In the same way" },
              { id: "c", text: "Likewise" },
              { id: "d", text: "Similarly" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparative connectives", statement: "'Whereas' and 'in contrast' show difference; 'similarly' and 'likewise' show similarity." }],
            steps: [{ reasoning: "'Whereas' contrasts two ideas, while the other options signal likeness.", marks: 1, markCode: "AO3" }],
            finalAnswer: "**(c)** Whereas.",
            commonErrors: ["Choosing a similarity connective because both poems are being mentioned."],
          },
        },
        {
          id: "et8-u1-compare-poems-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: POEM_A,
          stem: "Look at 'The Old Oak'. What does the speaker suggest about the difference between the oak and humans? Use two quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Embedding quotations", statement: "Use short quotations as part of your own sentence." },
              { kind: "technique", name: "Contrast", statement: "The oak is permanent while people pass." },
            ],
            steps: [
              { reasoning: "People are temporary: the children 'grow, they leave, they fade'.", evidence: "they grow, they leave, they fade", marks: 1, markCode: "AO1" },
              { reasoning: "The oak 'remains', so it is permanent in contrast.", evidence: "The oak remains", marks: 1, markCode: "AO1" },
              { reasoning: "The sequence of short verbs makes human life seem quick and fleeting.", evidence: "grow, they leave, they fade", marks: 1, markCode: "AO2" },
              { reasoning: "'Brief, bright years' suggests humans are short-lived but vivid, while the oak is a 'silent witness'.", evidence: "brief, bright years", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The speaker contrasts the oak, which 'remains', with humans, who 'grow, they leave, they fade'. The quick list of verbs makes human life seem brief next to the tree's four hundred winters.",
            commonErrors: ["Only describing the oak.", "Not quoting."],
          },
        },
        {
          id: "et8-u1-compare-poems-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POEM_B,
          stem: "Compare how the speakers of 'The Old Oak' and 'Paper Boat' present the idea that things do or do not last. Paper Boat is printed here. For 'The Old Oak', remember that the oak is described as 'Still wearing every scar like a medal'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated comparison", statement: "Write about both poems in the same paragraph with connectives." },
              { kind: "technique", name: "Simile and tone", statement: "'Like a medal' is proud; 'out of sight' is melancholy." },
            ],
            steps: [
              { reasoning: "In 'Paper Boat' the boat is fragile: 'Thin as a whisper' suggests it is barely there, so it cannot last.", evidence: "Thin as a whisper", marks: 2, markCode: "AO2" },
              { reasoning: "The verbs 'tipped', 'spun' and 'drifted' show its short journey to loss, ending in 'out of sight'.", evidence: "It tipped. It spun.", marks: 2, markCode: "AO1" },
              { reasoning: "In contrast, the oak wears its scars 'like a medal', so damage is a sign of honour, a more positive view of endurance.", evidence: "like a medal", marks: 2, markCode: "AO3" },
              { reasoning: "Whereas the oak's tone is proud, the final stanza of 'Paper Boat' is reflective: 'Nothing lasts', which expresses a sadder attitude.", evidence: "Nothing lasts, I thought", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "'Paper Boat' presents fragile things, 'thin as a whisper', that vanish 'out of sight', and ends with the sad generalisation 'Nothing lasts'. In contrast the oak endures, and its scars are worn 'like a medal', so the poems show opposing attitudes to time: pride in survival and sad acceptance of loss.",
            levels: levels(8),
            commonErrors: ["Writing about each poem separately.", "Saying both poems are 'about time' without comparing attitudes."],
          },
        },
        {
          id: "et8-u1-compare-poems-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: POEM_B,
          stem: "Read 'Paper Boat'. The poem 'The Old Oak' begins: 'Four hundred winters has the oak stood here, / Its roots like fists clenched deep in stubborn clay.' Answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two words from 'Paper Boat' (lines 4-6) that describe the boat's movement.", marks: 2 },
            { label: "b", prompt: "Explain what the poem suggests by 'Thin as a whisper'.", marks: 4 },
            { label: "c", prompt: "Compare the ways the two poets use imagery to present strength and weakness. Use the lines quoted above and the full text of 'Paper Boat'.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select exact words." },
              { kind: "technique", name: "Simile", statement: "'Thin as a whisper' compares the boat to something almost not there." },
              { kind: "skill", name: "Comparison", statement: "Use connectives and evidence from both poems." },
            ],
            steps: [
              { part: "a", reasoning: "Any one of: tipped, spun, drifted.", evidence: "tipped", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Any other of the above.", evidence: "drifted", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A whisper is quiet and fleeting, so the boat is light and delicate.", evidence: "Thin as a whisper", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The simile hints at transience: like a whisper, it will vanish easily.", evidence: "whisper", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "In 'The Old Oak' the strength image 'roots like fists clenched' shows determined, fighting endurance.", evidence: "roots like fists clenched deep", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "In 'Paper Boat' the weakness image 'thin as a whisper' suggests fragility.", evidence: "Thin as a whisper", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Both use similes, but the oak's is physical and aggressive whereas the boat's is delicate and sound-based, which suits their opposite messages.", evidence: "like fists", marks: 2, markCode: "AO3" },
              { part: "c", reasoning: "Each ends with a reflection: the oak is honoured, whereas the boat's fate leads to 'Nothing lasts'.", evidence: "Nothing lasts", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "(a) tipped, spun, drifted (any two). (b) A whisper is faint and brief, so the boat seems delicate and doomed to vanish. (c) Both poets use similes, but 'roots like fists clenched' presents physical strength, whereas 'thin as a whisper' presents fragility; the images support the oak's pride and the boat's sad message that nothing lasts.",
            levels: levels(8, "c"),
            commonErrors: ["In (c) discussing only one poem.", "Listing images without comparing effects."],
          },
        },
      ],
    },
    {
      id: "et8-u1-analytical-paragraph",
      title: "Writing an analytical paragraph",
      skill: "Write a PEE paragraph with an embedded quotation and an exploration of the writer's methods.",
      lesson: {
        sections: [
          {
            heading: "The PEE (or PETAL) structure",
            body: "A strong paragraph has a clear **Point** that answers the question, **Evidence** in the form of a short embedded quotation, and an **Explanation** of how the writer's choice creates meaning. Extend it with **Technique** (name the device), **Analysis** of key words and a **Link** back to the question (PETAL).",
          },
          {
            heading: "Zooming in on words",
            body: "The best analysis picks out one or two words from the quotation and unpacks their connotations. Use tentative language such as 'suggests', 'implies' or 'could represent' to explore more than one meaning. Avoid retelling and avoid listing techniques.",
          },
        ],
        keyFormulas: [
          { name: "Point", statement: "A clear opening answer to the question." },
          { name: "Evidence", statement: "A short, exact, embedded quotation." },
          { name: "Explain/Analyse", statement: "Focus on a key word and what it suggests." },
          { name: "Link", statement: "Return to the question and the writer's purpose." },
        ],
        workedExample: {
          problem: "How does the poet present the oak?",
          solution: "The poet presents the oak as a determined survivor. Its roots are 'like fists clenched deep in stubborn clay', a simile which suggests the tree is gripping the earth as if refusing to be moved. The word 'clenched' implies anger and effort, while 'stubborn' personifies the clay as equally resistant, so the oak seems locked in a struggle that it has won over four hundred winters. This presents nature as heroic.",
        },
      },
      questions: [
        {
          id: "et8-u1-analytical-paragraph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a PEE paragraph, what does the 'E' for Explain mean you should do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Say what effect the writer's words create" },
              { id: "b", text: "Retell what happens next in the poem" },
              { id: "c", text: "List every technique in the poem" },
              { id: "d", text: "Copy out the longest quotation you can find" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "PEE", statement: "Point, Evidence, Explain: explain the effect of the writer's choices." }],
            steps: [{ reasoning: "Explanation means saying what the words suggest and how they affect the reader.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Say what effect the writer's words create.",
            commonErrors: ["Thinking explanation means paraphrasing or retelling."],
          },
        },
        {
          id: "et8-u1-analytical-paragraph-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: POEM_A,
          stem: "Read the opening lines of 'The Old Oak'. Write one sentence that makes a point about the oak and embeds a quotation to support it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Embedding", statement: "A quotation should flow as part of your own sentence." }],
            steps: [
              { reasoning: "A clear point about the oak (strong, old, determined).", marks: 1, markCode: "AO1" },
              { reasoning: "An accurate, short quotation such as 'stubborn clay' or 'roots like fists'.", evidence: "roots like fists clenched deep in stubborn clay", marks: 1, markCode: "AO1" },
              { reasoning: "The quotation is embedded grammatically and linked to the point.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The poet presents the oak as determined, with roots 'like fists clenched deep in stubborn clay'.",
            commonErrors: ["Dropping in a quotation separated from the sentence.", "Quoting whole lines."],
          },
        },
        {
          id: "et8-u1-analytical-paragraph-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: POEM_A,
          stem: "Write ONE analytical paragraph explaining how the poet presents the oak's response to hardship. Use the last line, 'Still wearing every scar like a medal', or another quotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "PETAL", statement: "Point, Evidence, Technique, Analysis, Link." },
              { kind: "technique", name: "Simile", statement: "'Like a medal' compares scars to honours." },
            ],
            steps: [
              { reasoning: "The oak responds with pride rather than despair; the scars are worn as honours.", evidence: "Still wearing every scar like a medal", marks: 2, markCode: "AO1" },
              { reasoning: "The simile 'like a medal' implies that damage is a sign of bravery, linking the oak to a soldier.", evidence: "like a medal", marks: 2, markCode: "AO2" },
              { reasoning: "'Ragged, proud and grey' reinforces the mix of battered appearance and dignity.", evidence: "ragged, proud and grey", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "The poet presents the oak as proud in the face of hardship. It is 'Still wearing every scar like a medal', a simile suggesting its damage is an honour, as though it is a veteran of a long war. The verb 'wearing' implies the tree displays its scars confidently, so hardship has made it noble.",
            levels: levels(6),
            commonErrors: ["Retelling that the oak has scars.", "Naming the simile but not exploring it."],
          },
        },
        {
          id: "et8-u1-analytical-paragraph-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: POEM_A,
          stem: "Read 'The Old Oak' and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things the children do to the oak in lines 5-6.", marks: 2 },
            { label: "b", prompt: "Explain what the phrase 'A silent witness' suggests about the oak.", marks: 4 },
            { label: "c", prompt: "Write a full analytical paragraph (at least 120 words) on how the poet presents the passing of time. Refer to language and structure.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select exact details." },
              { kind: "technique", name: "Personification", statement: "A 'witness' is a human role." },
              { kind: "skill", name: "PETAL", statement: "Point, Evidence, Technique, Analysis, Link." },
            ],
            steps: [
              { part: "a", reasoning: "They carve their names on the bark.", evidence: "carved their names across its bark", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "They grow and leave.", evidence: "They grow, they leave", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Witness' personifies the oak as one who sees events and remembers them.", evidence: "A silent witness", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "'Silent' suggests the oak observes without interfering or being able to speak, so it seems wise and patient.", evidence: "silent", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The first stanza's 'four hundred winters' stresses an enormous time span.", evidence: "Four hundred winters", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The listed verbs 'grow, they leave, they fade' compress human life into a moment.", evidence: "they grow, they leave, they fade", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The alliterative 'brief, bright years' makes life seem short but vivid.", evidence: "brief, bright years", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The structure shifts from the oak's endurance in stanza 1 to human frailty in stanza 2, and ends on the oak, so time is shown as the oak's ally, human lives the passing moment.", evidence: "The oak remains", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) Carve their names; grow and leave. (b) It personifies the oak as an observer who silently sees generations pass, wise and patient. (c) A top paragraph contrasts 'four hundred winters' with the 'grow, they leave, they fade' list, analyses 'brief, bright years', and notes how the poem moves from oak to humans and returns to the oak.",
            levels: levels(8, "c"),
            commonErrors: ["Writing under 100 words with no analysis.", "Ignoring structure."],
          },
        },
      ],
    },
  ],
};
