import type { Lesson } from "../../../types.ts";

const marketExtract = {
  title: "The Night Market",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Every Friday, when the sun dropped behind the rooftops, the old harbour district came alive. Stallholders dragged out their tables, stringing bulbs of amber light from one side of the lane to the other. The air filled with the smell of charcoal grills, overripe mangoes and something fried in oil that no one could name.\n\nAmara arrived early, as she always did, to claim the corner pitch beside the clock tower. Her grandmother had worked that same corner for thirty years, and the regulars still asked after her by name. \"Your grandmother's famous for these,\" the noodle seller said, nodding at the stacked bowls. Amara smiled and began chopping spring onions with a knife worn smooth by decades of use.\n\nBy seven the lane was packed. Tourists photographed the hanging lanterns while locals argued cheerfully over prices. A musician tuned his guitar near the fountain, and children wove between the stalls chasing a paper lantern that had slipped its string.\n\nWhen the last customer left at midnight, Amara counted her takings twice, then walked home slowly beneath a sky still crowded with stars.",
};

export const lesson11: Lesson = {
  id: "cile-u1-lesson-1-1",
  code: "1-1",
  title: "Finding and inferring meaning",
  goal: "I CAN retrieve explicit information from a text and make supported inferences about what is implied.",
  standards: ["0861 Reading: literal and inferred meaning"],
  vocabulary: [
    { term: "Extract", definition: "A short passage taken from a longer text, printed with the question." },
    { term: "Literal meaning", definition: "What the text states directly and explicitly." },
    { term: "Inference", definition: "A conclusion drawn from evidence in the text that is not stated outright." },
    { term: "Context clue", definition: "Words or details around an unfamiliar word that help reveal its meaning." },
    { term: "Evidence", definition: "A quotation or detail from the text that supports an answer." },
    { term: "Implied meaning", definition: "What the writer suggests without saying it directly." },
  ],
  concepts: [
    {
      id: "cile-u1-literal-comprehension",
      title: "Literal comprehension",
      skill: "Locate and interpret information that is stated directly in a text, using evidence to support answers.",
      lesson: {
        sections: [
          {
            heading: "What literal comprehension asks",
            body: "Literal questions ask what the text **says** — facts, events, descriptions and statements that appear on the page. The answer is always findable; your job is to find it accurately and express it in your own words when the question asks for a phrase or sentence.\n\n- **Who / what / when / where / how many** questions are almost always literal.\n- Answers should be **supported by evidence**: quote or closely paraphrase the relevant detail.\n- Watch for **distractors**: options that are true of the text but answer a different question.",
          },
          {
            heading: "Skimming and scanning",
            body: "- **Skimming**: read quickly for the gist — topic sentences, first and last lines — before diving into detail.\n- **Scanning**: run your eyes for a specific word, number or name once you know what you are looking for.\n- Neither replaces careful reading; they simply stop you re-reading the whole extract for every question.",
          },
          {
            heading: "Answering in your own words",
            body: "When a question asks you to 'state' or 'describe', do not copy long chunks of the text word for word. Select the key detail, then rewrite it concisely. Keep names, numbers and technical terms exactly as printed.",
          },
        ],
        keyFormulas: [
          { name: "Evidence + explanation", statement: "Every reading answer should pair a quoted or paraphrased detail with a sentence explaining why it answers the question." },
        ],
        workedExample: {
          problem: "Question: When does the market take place? Extract line: 'Every Friday, when the sun dropped behind the rooftops, the old harbour district came alive.'",
          solution: "Literal answer: every Friday, in the evening (after sunset). The evidence is the opening sentence; the time is stated directly, so no inference is needed.",
        },
      },
      questions: [
        {
          id: "cile-u1-literal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: marketExtract,
          stem: "According to the extract, on which day of the week does the night market take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saturday" },
              { id: "b", text: "Friday" },
              { id: "c", text: "Sunday" },
              { id: "d", text: "Every day" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Literal question", statement: "Literal answers are stated directly in the text; retrieve, do not infer." },
            ],
            steps: [
              { reasoning: "The first sentence states 'Every Friday'.", working: "\\text{Every Friday}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Friday",
            commonErrors: ["Choosing Saturday because markets are often weekend events — trust the text, not expectations."],
          },
        },
        {
          id: "cile-u1-literal-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: marketExtract,
          stem: "State two details the writer gives about the stallholders' preparations before the market opens.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "Literal answers quote or closely paraphrase stated details." },
            ],
            steps: [
              { reasoning: "Find preparation details: dragging out tables, stringing bulbs.", working: "\\text{tables; stringing bulbs of amber light}", marks: 1, markCode: "AO2" },
              { reasoning: "Second detail: the smell/atmosphere or Amara chopping early — accept any two stated details.", working: "\\text{grills/mangoes smell; Amara chopping spring onions}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Any two of: tables dragged out; bulbs of amber light strung across the lane; grills and mangoes being prepared; Amara chopping spring onions early.",
            commonErrors: ["Giving inferences (e.g. 'the stallholders were excited') instead of stated details."],
          },
        },
        {
          id: "cile-u1-literal-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: marketExtract,
          stem: "The writer says the regulars 'still asked after' Amara's grandmother. Explain what this tells you literally about the grandmother's standing in the district.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paraphrase", statement: "Explain a detail by restating it precisely, then note its significance." },
            ],
            steps: [
              { reasoning: "Literal fact: grandmother worked the corner for thirty years.", working: "\\text{thirty years at the corner}", marks: 1, markCode: "AO2" },
              { reasoning: "Literal fact: regulars ask after her by name.", working: "\\text{asked after her by name}", marks: 1, markCode: "AO2" },
              { reasoning: "Conclude: she was well known and remembered.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "She was a long-standing, well-known figure — regulars still remembered and asked about her years after she stopped working there.",
            commonErrors: ["Inventing details not in the text, such as her recipes being famous."],
          },
        },
        {
          id: "cile-u1-literal-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: marketExtract,
          stem: "The extract describes preparations for and the running of a night market.",
          parts: [
            { label: "a", prompt: "State what Amara does when she arrives early.", marks: 2 },
            { label: "b", prompt: "Describe two sounds or smells the writer mentions in the lane.", marks: 2 },
            { label: "c", prompt: "What does the writer say happens to the paper lantern?", marks: 1 },
            { label: "d", prompt: "Explain how the final sentence changes the mood of the extract.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "Parts (a)-(c) are literal; part (d) requires linking a detail to mood." },
              { kind: "technique", name: "Mood", statement: "Mood is the atmosphere a text creates; endings often shift it deliberately." },
            ],
            steps: [
              { part: "a", reasoning: "She claims the corner pitch beside the clock tower.", working: "\\text{claims the corner pitch}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "And begins chopping spring onions.", working: "\\text{chopping spring onions}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Smells: charcoal grills, overripe mangoes, fried food.", working: "\\text{charcoal grills/mangoes}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Sounds: guitar tuning, children chasing the lantern.", working: "\\text{guitar; children}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "It slipped its string and children chased it.", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Before: packed, noisy, energetic lane.", working: "\\text{packed, lively}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "After: empty, quiet, counting takings, walking home.", working: "\\text{quiet, reflective}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclude the mood shifts from lively bustle to calm solitude.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) claims the corner pitch and chops spring onions (b) smells of grills/mangoes/fried food; sounds of guitar and children (c) it slipped its string and was chased by children (d) mood shifts from lively bustle to quiet reflection",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Both details accurately retrieved.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "One detail or a vague answer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid sounds/smells described.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One detail or none.", part: "b" },
              { level: "Level 1", marks: "1", descriptor: "Correct detail about the lantern.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Identifies the mood shift precisely with textual evidence.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Notes the shift from busy to quiet but explanation is thin.", part: "d" },
            ],
            commonErrors: ["In (d) describing the events rather than the mood they create."],
          },
        },
      ],
    },
    {
      id: "cile-u1-inference",
      title: "Inference",
      skill: "Draw conclusions that are implied but not stated, and support them with evidence from the text.",
      lesson: {
        sections: [
          {
            heading: "What inference means",
            body: "An inference is a conclusion you reach from **clues** in the text — it is never stated outright. Writers rely on readers to connect details: a character's action, a described setting, a pattern of behaviour.\n\n- **Strong inference**: several details all point the same way.\n- **Weak inference**: only one clue, or the conclusion could mean several things.\n- An inference must be **anchored in evidence** — quote the clue, then explain the link.",
          },
          {
            heading: "Common inference signals",
            body: "- **Actions**: what a character does reveals what they feel or want.\n- **Sensory detail**: weather, light and sounds often mirror mood.\n- **Repetition and contrast**: a detail repeated or set against another carries weight.\n- **What is missing**: an unexplained gap can itself be a clue.",
          },
          {
            heading: "Stating inferences safely",
            body: "Use cautious phrasing — 'this suggests', 'this implies', 'it seems' — and always pair it with the evidence. 'The writer implies X' is stronger than 'X is true'; you are describing the text, not the world.",
          },
        ],
        keyFormulas: [
          { name: "Inference formula", statement: "Evidence (what the text says) + link (what it suggests) = inference (what you conclude), hedged with 'suggests/implies'." },
        ],
        workedExample: {
          problem: "Extract: 'The regulars still asked after her by name.' What can you infer about the grandmother?",
          solution: "Inference: she was well known and missed. Evidence: 'asked after her by name' — people who barely knew someone would not remember her name. Link: remembering names implies personal familiarity and affection.",
        },
      },
      questions: [
        {
          id: "cile-u1-inference-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: marketExtract,
          stem: "What can you infer about Amara's feelings towards her grandmother's pitch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She wants to move to a busier pitch" },
              { id: "b", text: "She feels a strong connection to it" },
              { id: "c", text: "She finds it boring" },
              { id: "d", text: "She is afraid of the clock tower" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "An inference is supported by clues; here she keeps the same corner her grandmother used." },
            ],
            steps: [
              { reasoning: "She claims the same corner her grandmother worked for thirty years.", working: "\\text{same corner, thirty years}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** She feels a strong connection to it",
            commonErrors: ["Choosing (a) — nothing in the text suggests she wants to move."],
          },
        },
        {
          id: "cile-u1-inference-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: marketExtract,
          stem: "Infer why the writer describes the knife as 'worn smooth by decades of use'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Detail as clue", statement: "A small physical detail can carry emotional or historical weight." },
            ],
            steps: [
              { reasoning: "Evidence: 'worn smooth by decades of use' implies long, daily use.", working: "\\text{decades of use}", marks: 1, markCode: "AO2" },
              { reasoning: "Inference: it connects Amara's work to her grandmother's long tradition at the pitch.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It suggests the knife — and Amara's craft — links her to decades of family tradition at the market.",
            commonErrors: ["Saying the knife is 'old and broken' — worn smooth implies careful, continuous use, not neglect."],
          },
        },
        {
          id: "cile-u1-inference-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: marketExtract,
          stem: "The final paragraph says Amara 'counted her takings twice, then walked home slowly beneath a sky still crowded with stars'. What does this suggest about her state of mind at the end of the night?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing detail", statement: "Verbs like 'walked slowly' and images like a starry sky slow the pace and signal reflection." },
            ],
            steps: [
              { reasoning: "Evidence: 'counted her takings twice' suggests care and perhaps tiredness.", working: "\\text{counted twice}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'walked home slowly' and 'sky still crowded with stars' create a calm, reflective mood.", working: "\\text{slowly; stars}", marks: 1, markCode: "AO2" },
              { reasoning: "Inference: she is tired but content — the night felt meaningful.", marks: 1, markCode: "AO2" },
              { reasoning: "Hedge appropriately: 'this suggests/implies'.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "It suggests she feels quietly content and reflective — tired from a long night but satisfied that it was worthwhile.",
            commonErrors: ["Asserting she is unhappy or lonely without evidence; the tone is calm, not sad."],
          },
        },
        {
          id: "cile-u1-inference-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: marketExtract,
          stem: "Inference is central to understanding this extract.",
          parts: [
            { label: "a", prompt: "Quote one detail that implies the market is a long-established tradition.", marks: 2 },
            { label: "b", prompt: "What can you infer about the relationship between Amara and the regular customers?", marks: 3 },
            { label: "c", prompt: "Suggest what the 'paper lantern that had slipped its string' might symbolise. Justify your answer.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "Conclusions must be anchored in quoted evidence and hedged with 'suggests/implies'." },
              { kind: "technique", name: "Symbol", statement: "A recurring object can carry symbolic weight; interpretation must be argued, not asserted." },
            ],
            steps: [
              { part: "a", reasoning: "Quote 'her grandmother had worked that same corner for thirty years'.", working: "\\text{thirty years}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Link: three decades of family presence implies an established tradition.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Evidence: regulars 'still asked after' the grandmother 'by name'.", working: "\\text{asked after her by name}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Evidence: locals 'argued cheerfully over prices' — familiar, easy relationship.", working: "\\text{argued cheerfully}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Inference: warm, long-standing familiarity; they are neighbours, not strangers.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Possible reading: the lantern slipping free mirrors the market's fragile, temporary magic.", working: "\\text{temporary magic}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Alternative: children chasing it shows the market's life and joy — accept reasoned alternatives.", working: "\\text{children chasing = vitality}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Justification must tie the interpretation to the extract's celebratory mood.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear, hedged conclusion.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) 'worked that same corner for thirty years' implies tradition (b) warm, familiar, neighbourly relationship built over years (c) e.g. the lantern's slipping string symbolises the market's fleeting, fragile beauty — justified by the extract's celebratory yet ending mood",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Quotation plus a clear link to tradition.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Quotation without a link, or a vague answer.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Inference supported by two pieces of evidence and clearly stated.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Inference with one piece of evidence.", part: "b" },
              { level: "Level 4", marks: "3-4", descriptor: "Symbolic interpretation argued convincingly from the text.", part: "c" },
              { level: "Level 3", marks: "2", descriptor: "Plausible interpretation with partial justification.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Interpretation stated with little or no textual link.", part: "c" },
            ],
            commonErrors: ["In (c) giving an interpretation with no link to the text."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u1-reading-meaning-notes",
      title: "Reading for meaning — revision notes",
      summary: "Literal comprehension vs inference, evidence, and how to hedge interpretive answers.",
      sections: [
        {
          heading: "Literal vs inferred",
          body: "Literal = stated on the page (who, what, when, where). Inference = concluded from clues (feelings, motives, significance). Inference answers need evidence + a link, hedged with 'suggests' or 'implies'.",
        },
        {
          heading: "Finding answers fast",
          body: "Skim first for the gist; scan for specific words/numbers. Then answer in your own words unless told to quote.",
        },
        {
          heading: "Exam technique",
          body: "Pair every point with evidence. For inference: quote the clue, explain what it suggests, hedge the conclusion. Avoid inventing details not in the text.",
        },
      ],
    },
  ],
};
