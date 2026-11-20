import type { Lesson } from "../../../types.ts";

const harbourExtract = {
  title: "Letters from the Harbour",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "My dear Priya,\n\nYou asked me to tell you about the harbour before it changes completely, so here is what I see each morning from my window. The fishing fleet is half its old size. Where twenty boats once crowded the quay, nine remain, their nets hanging like sleeping bats to dry. The old chandlery — the shop that sold rope and tar and coffee to sailors — is now a café selling smoothies to tourists.\n\nYet not everything is loss. The council has restored the lighthouse, and on calm evenings its beam still sweeps across the water exactly as it did when my grandfather kept watch there. The new ferry terminal, ugly as it is, brings visitors who actually buy fish from the market instead of photographing it.\n\nI do not know whether I am watching a place die or a place learn to be something new. Perhaps both. Write back soon — the tide waits for no one.\n\nWith love,\nDaniel",
};

const robotExtract = {
  title: "The School Robot",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Unit 7 had been in the school corridor cupboard for six months before anyone decided what to do with it. It was a tall grey machine with a single camera eye and arms designed, apparently, for carrying boxes in a warehouse.\n\nWhen the head teacher finally wheeled it into Room 4B, the children invented a name for it within a minute: BOLT. It could not speak, but it could fetch, carry, photograph the whiteboard and plug itself in when its battery ran low. The teachers used it to collect homework. The children used it to impress their parents.\n\nIn November a power cut hit the school for an hour. The lights died, the laptops slept — and for the first time anyone could remember, Room 4B was completely quiet. Nobody knew what to do with the sudden stillness.\n\nWhen the power returned, BOLT rolled back into the cupboard on its own, as if it had decided the experiment was over. It never came out again.",
};

export const lesson12: Lesson = {
  id: "cile-u1-lesson-1-2",
  code: "1-2",
  title: "Summarising and main ideas",
  goal: "I CAN identify the main idea of a text and summarise it accurately without copying the original wording.",
  standards: ["0861 Reading: summarising and selecting key points"],
  vocabulary: [
    { term: "Main idea", definition: "The central point or message a text is built around." },
    { term: "Topic sentence", definition: "The sentence (often first) that states the paragraph's main point." },
    { term: "Summary", definition: "A much shorter version of a text that keeps only the essential points." },
    { term: "Key detail", definition: "A fact or example needed to support the main idea." },
    { term: "Subordinate point", definition: "A supporting idea that matters less than the main idea." },
    { term: "Paraphrase", definition: "Restating something in your own words without changing its meaning." },
  ],
  concepts: [
    {
      id: "cile-u1-main-idea",
      title: "Identifying the main idea",
      skill: "Distinguish the main idea from supporting detail and identify topic sentences in paragraphs.",
      lesson: {
        sections: [
          {
            heading: "Main idea vs detail",
            body: "Every paragraph usually has one **main idea** supported by **details**. The main idea answers 'what is this paragraph mostly about?'; details answer 'how do we know?'\n\n- **Topic sentence**: often the first or last sentence of a paragraph; it states the main idea directly.\n- **Examples and evidence**: specific facts, quotes, descriptions — necessary but not the main idea.\n- A text's **overall main idea** is bigger than any single paragraph: ask what the whole piece is arguing or describing.",
          },
          {
            heading: "Traps when identifying main ideas",
            body: "- **Detail that sounds important**: a striking quotation may be evidence, not the main idea.\n- **First line bias**: the opening line of a text can be an attention-grabber, not the thesis.\n- **Personal response**: 'I liked it' is your reaction, not the text's main idea.",
          },
        ],
        keyFormulas: [
          { name: "Main idea test", statement: "If you removed all the details, the main idea would still make sense — and every detail would still support it." },
        ],
        workedExample: {
          problem: "Paragraph: 'The fishing fleet is half its old size. Where twenty boats once crowded the quay, nine remain.' What is the main idea?",
          solution: "Main idea: the harbour's fishing industry has declined. 'Half its old size' and 'nine remain' are supporting details giving evidence of the decline.",
        },
      },
      questions: [
        {
          id: "cile-u1-mainidea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: harbourExtract,
          stem: "What is the main idea of the whole letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The lighthouse is beautiful" },
              { id: "b", text: "The harbour is changing, with both losses and gains" },
              { id: "c", text: "Tourists are ruining the fish market" },
              { id: "d", text: "Daniel should move away from the harbour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea", statement: "The central point the whole text builds around — here, change with mixed outcomes." },
            ],
            steps: [
              { reasoning: "The letter weighs losses (boats, chandlery) against gains (lighthouse, ferry).", working: "\\text{losses and gains}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The harbour is changing, with both losses and gains",
            commonErrors: ["Choosing (c) — tourists buying fish is presented as a gain, not a problem."],
          },
        },
        {
          id: "cile-u1-mainidea-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: harbourExtract,
          stem: "State the topic sentence (or main point) of the second paragraph: 'Yet not everything is loss.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Topic sentence", statement: "The sentence stating the paragraph's controlling idea." },
            ],
            steps: [
              { reasoning: "The paragraph lists gains: restored lighthouse, ferry bringing real customers.", working: "\\text{lighthouse; ferry visitors}", marks: 1, markCode: "AO2" },
              { reasoning: "Main point: the harbour also has positive changes.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Some aspects of the harbour are improving — the lighthouse is restored and the new ferry brings genuine visitors.",
            commonErrors: ["Quoting only one detail (e.g. the lighthouse) instead of the paragraph's combined point."],
          },
        },
        {
          id: "cile-u1-mainidea-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: harbourExtract,
          stem: "Daniel writes: 'I do not know whether I am watching a place die or a place learn to be something new.' Explain how this sentence relates to the main idea of the letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ambiguity", statement: "A deliberately unresolved either/or can encapsulate a text's central tension." },
            ],
            steps: [
              { reasoning: "The sentence weighs decline ('die') against transformation ('something new').", working: "\\text{die vs something new}", marks: 1, markCode: "AO2" },
              { reasoning: "This mirrors the whole letter, which lists losses and gains.", marks: 1, markCode: "AO2" },
              { reasoning: "Conclude it states the main idea as an open question.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It captures the letter's central tension — the harbour may be declining or reinventing itself — so it acts as the text's main idea in question form.",
            commonErrors: ["Treating it as a literal question Daniel needs answered rather than the letter's theme."],
          },
        },
        {
          id: "cile-u1-mainidea-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: robotExtract,
          stem: "The extract describes a robot's brief career in a classroom.",
          parts: [
            { label: "a", prompt: "State the main idea of the second paragraph.", marks: 2 },
            { label: "b", prompt: "State two details that support that main idea.", marks: 2 },
            { label: "c", prompt: "What is the main idea of the whole extract?", marks: 2 },
            { label: "d", prompt: "Explain why the final sentence ('It never came out again') matters to the main idea.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Main idea", statement: "Paragraph main idea: the robot became a fixture of classroom life; whole-text idea: its novelty faded once people adapted." },
            ],
            steps: [
              { part: "a", reasoning: "Paragraph 2 shows BOLT becoming part of daily routine.", working: "\\text{part of routine}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "State it clearly.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Detail: teachers used it to collect homework.", working: "\\text{collect homework}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Detail: children used it to impress parents / it fetched, carried, photographed.", working: "\\text{impress parents}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Whole extract: brief novelty followed by quiet abandonment.", working: "\\text{novelty then abandonment}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "State it as a complete sentence.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "The ending shows people preferred quiet — the robot's purpose ended.", working: "\\text{quiet preferred}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Link: confirms the theme that novelty fades once routine reasserts itself.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) BOLT became part of the classroom routine (b) homework collection; impressing parents (c) the robot's novelty was short-lived and it was quietly abandoned (d) it confirms people preferred stillness — novelty faded",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Both details accurately stated.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One or no valid detail.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Main idea accurately identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or incorrect.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Explains the ending's link to the theme.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No link made.", part: "d" },
            ],
            commonErrors: ["In (c) summarising only paragraph 2 instead of the whole extract."],
          },
        },
      ],
    },
    {
      id: "cile-u1-summarising",
      title: "Summarising",
      skill: "Condense a text to its essential points in your own words, keeping names, numbers and key relationships.",
      lesson: {
        sections: [
          {
            heading: "How to summarise",
            body: "A summary keeps the **skeleton** of a text: main ideas and the few details needed to make them clear. It removes examples, repetition, description and opinion.\n\n- **Keep**: who, what happened, the outcome, key numbers or names.\n- **Cut**: adjectives, anecdotes, quotations used only for colour, your own reactions.\n- **Paraphrase**: never copy whole sentences; rewrite in your own words.",
          },
          {
            heading: "Common summary mistakes",
            body: "- **Too long**: if your summary is more than a third of the original, it is not a summary.\n- **Too short**: cutting the outcome or the main point makes it useless.\n- **Adding opinions**: a summary reports the text; it does not review it.\n- **Copying**: lifted phrases suggest you have not understood the text.",
          },
        ],
        keyFormulas: [
          { name: "Summary formula", statement: "Who + what happened + outcome, in your own words, at roughly a third of the original length." },
        ],
        workedExample: {
          problem: "Summarise the first paragraph of 'Letters from the Harbour' in one sentence.",
          solution: "Daniel describes how the harbour has declined: the fishing fleet has shrunk from twenty boats to nine and the old chandlery is now a smoothie café.",
        },
      },
      questions: [
        {
          id: "cile-u1-summary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: robotExtract,
          stem: "Which of these is the BEST one-sentence summary of the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A robot named BOLT was brought into a classroom, became popular, and was put away after a power cut revealed everyone preferred quiet." },
              { id: "b", text: "A robot was found in a cupboard and never used." },
              { id: "c", text: "A power cut caused chaos in Room 4B." },
              { id: "d", text: "Children named a warehouse robot BOLT." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Keeps who, what happened and the outcome; drops detail and opinion." },
            ],
            steps: [
              { reasoning: "Only (a) covers the whole arc: arrival, popularity, quiet ending.", working: "\\text{full arc}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A robot named BOLT was brought into a classroom, became popular, and was put away after a power cut revealed everyone preferred quiet.",
            commonErrors: ["Choosing (d) — true but covers only the naming moment, not the whole extract."],
          },
        },
        {
          id: "cile-u1-summary-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: harbourExtract,
          stem: "Summarise the final paragraph of the letter in one sentence, using your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Keep the main idea; cut description; paraphrase." },
            ],
            steps: [
              { reasoning: "The paragraph weighs decline against reinvention and ends with a call to write back.", working: "\\text{die or something new}", marks: 1, markCode: "AO2" },
              { reasoning: "Paraphrase into one sentence without copying phrases.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Daniel is unsure whether the harbour is dying or reinventing itself, and urges Priya to reply soon.",
            commonErrors: ["Copying 'a place die or a place learn to be something new' verbatim instead of paraphrasing."],
          },
        },
        {
          id: "cile-u1-summary-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: robotExtract,
          stem: "A student summarises the extract as: 'A robot helped a class with homework until the electricity failed.' Identify two ways this summary is inadequate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary criteria", statement: "Must keep the main idea and outcome; must not distort or omit the ending." },
            ],
            steps: [
              { reasoning: "It omits the outcome: the power cut showed people preferred quiet and BOLT was never used again.", working: "\\text{omits outcome}", marks: 1, markCode: "AO2" },
              { reasoning: "It omits the build-up: six months in storage, naming, teachers and children adopting it.", working: "\\text{omits build-up}", marks: 1, markCode: "AO2" },
              { reasoning: "It implies the robot was still wanted; the extract's point is its quiet abandonment.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It leaves out the ending (BOLT was put away for good after the power cut revealed everyone preferred quiet) and the build-up of its adoption; it also wrongly implies the robot remained useful.",
            commonErrors: ["Saying only 'it is too short' without explaining what essential content is missing."],
          },
        },
        {
          id: "cile-u1-summary-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: harbourExtract,
          stem: "You have been asked to summarise 'Letters from the Harbour' for a class newsletter.",
          parts: [
            { label: "a", prompt: "Write a one-sentence summary of the whole letter.", marks: 3 },
            { label: "b", prompt: "List the two losses and two gains Daniel mentions.", marks: 2 },
            { label: "c", prompt: "Explain why 'the chandlery is now a café' is a good detail to include in a summary.", marks: 2 },
            { label: "d", prompt: "State one thing you should NOT include in the summary and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Summary", statement: "Who/what/outcome in own words; keep key contrasts, cut colour." },
            ],
            steps: [
              { part: "a", reasoning: "One sentence covering change, losses and gains.", working: "\\text{harbour changing; losses and gains}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Paraphrased, not copied.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurate and complete.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Losses: fewer fishing boats (twenty to nine); chandlery became a café.", working: "\\text{boats; chandlery}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Gains: restored lighthouse; ferry brings real customers.", working: "\\text{lighthouse; ferry}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "It compresses a whole change into one image — decline and tourism in a single fact.", working: "\\text{compressed contrast}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Essential, not decorative detail.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Exclude e.g. the lighthouse beam 'sweeping as it did when my grandfather kept watch' — colour, not core point.", working: "\\text{colour detail}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Justify: summaries cut description that does not carry the main idea.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) e.g. 'Daniel describes the harbour changing: its fishing fleet has shrunk and old shops have become tourist cafés, though the restored lighthouse and new ferry bring some gains.' (b) losses: boats twenty→nine, chandlery→café; gains: lighthouse restored, ferry visitors (c) it compresses decline-and-tourism into one essential fact (d) e.g. the grandfather lighthouse memory — atmospheric colour, not core",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Accurate one-sentence summary in own words covering the whole letter.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Covers part of the letter or copies phrasing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "All four points correctly identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or confused points.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Explains the detail's summarising value.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "No valid justification.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Identifies excludable material and justifies the cut.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "No valid exclusion.", part: "d" },
            ],
            commonErrors: ["In (a) writing a list of details rather than a connected sentence."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u1-summary-mainidea-notes",
      title: "Main ideas and summarising — revision notes",
      summary: "Topic sentences, main idea vs detail, and how to write a real summary.",
      sections: [
        {
          heading: "Main idea vs detail",
          body: "Main idea = what the paragraph/text is mostly about. Details = the evidence for it. The topic sentence usually states the main idea; striking quotes are often just evidence.",
        },
        {
          heading: "Summary rules",
          body: "Keep: who, what happened, outcome, key numbers/names. Cut: description, repetition, opinions, your reactions. Paraphrase — never copy sentences.",
        },
        {
          heading: "Exam technique",
          body: "Test a summary: does it cover the WHOLE text's arc and end with the outcome? If it only covers one paragraph, it fails.",
        },
      ],
    },
  ],
};
