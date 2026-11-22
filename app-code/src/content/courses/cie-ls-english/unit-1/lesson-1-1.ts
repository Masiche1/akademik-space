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
              { id: "a", text: "Every day" },
              { id: "b", text: "Saturday" },
              { id: "c", text: "Friday" },
              { id: "d", text: "Sunday" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cile-u1-literal-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: marketExtract,
          stem: "According to the extract, when does the last customer leave the market?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At midnight" },
              { id: "b", text: "Before the musician starts" },
              { id: "c", text: "At seven o'clock" },
              { id: "d", text: "At sunset" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Literal question", statement: "Literal answers are stated directly in the text; retrieve, do not infer." },
            ],
            steps: [
              { reasoning: "The final paragraph states 'the last customer left at midnight'.", working: "\\text{midnight}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** At midnight",
            commonErrors: ["Choosing (b) — seven o'clock is when the lane was packed, not when it emptied."],
          },
        },
        {
          id: "cile-u1-literal-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: marketExtract,
          stem: "Where does Amara claim her pitch each week?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Under the market awning" },
              { id: "b", text: "Beside the fountain" },
              { id: "c", text: "Next to the noodle seller" },
              { id: "d", text: "The corner pitch beside the clock tower" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "The answer is stated directly: the corner pitch beside the clock tower." },
            ],
            steps: [
              { reasoning: "'Amara arrived early... to claim the corner pitch beside the clock tower.'", working: "\\text{corner pitch, clock tower}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** The corner pitch beside the clock tower",
            commonErrors: ["Choosing (a) — the fountain is where the musician sits, not Amara's pitch."],
          },
        },
        {
          id: "cile-u1-literal-q7",
          difficulty: "core",
          totalMarks: 2,
          extract: marketExtract,
          stem: "State two things the stallholders do to prepare the lane before the market opens.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "Literal answers quote or closely paraphrase stated details." },
            ],
            steps: [
              { reasoning: "They drag out their tables.", working: "\\text{dragged out tables}", marks: 1, markCode: "AO2" },
              { reasoning: "They string bulbs of amber light across the lane.", working: "\\text{stringing bulbs}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "They drag out their tables and string bulbs of amber light from one side of the lane to the other.",
            commonErrors: ["Giving Amara's actions instead of the stallholders' preparations."],
          },
        },
        {
          id: "cile-u1-literal-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: marketExtract,
          stem: "Describe two details that show how busy the lane becomes by seven o'clock.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "Literal answers select and accurately describe stated details." },
            ],
            steps: [
              { reasoning: "First detail: 'the lane was packed'.", working: "\\text{packed}", marks: 1, markCode: "AO2" },
              { reasoning: "Second detail: tourists photographing lanterns / locals arguing over prices / children chasing the lantern / musician tuning.", working: "\\text{tourists; locals; children; musician}", marks: 1, markCode: "AO2" },
              { reasoning: "Both details accurately described and clearly showing busyness.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The lane is 'packed'; tourists photograph the lanterns, locals argue cheerfully over prices, a musician tunes his guitar and children chase a paper lantern.",
            commonErrors: ["Choosing details from Amara's arrival, which happens before the lane fills."],
          },
        },
        {
          id: "cile-u1-literal-q9",
          difficulty: "foundation",
          totalMarks: 1,
          extract: marketExtract,
          stem: "What does the noodle seller say about the stacked bowls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are Amara's grandmother's famous ones" },
              { id: "b", text: "They are too small for the noodles" },
              { id: "c", text: "They are a new recipe this season" },
              { id: "d", text: "They are already sold out" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "The detail is stated directly in the dialogue." },
            ],
            steps: [
              { reasoning: "'Your grandmother's famous for these,' the noodle seller said, nodding at the stacked bowls.", working: "\\text{grandmother's famous}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** They are Amara's grandmother's famous ones",
            commonErrors: ["Choosing (a) — nothing in the text comments on the bowls' size."],
          },
        },
        {
          id: "cile-u1-literal-q10",
          difficulty: "foundation",
          totalMarks: 1,
          extract: marketExtract,
          stem: "What do the children chase through the stalls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A blown-off balloon" },
              { id: "b", text: "A runaway dog" },
              { id: "c", text: "The musician's guitar" },
              { id: "d", text: "A paper lantern" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "The detail is stated directly in the text." },
            ],
            steps: [
              { reasoning: "'children wove between the stalls chasing a paper lantern that had slipped its string.'", working: "\\text{paper lantern}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A paper lantern",
            commonErrors: ["Choosing (b) — the guitar is only being tuned, not chased."],
          },
        },
        {
          id: "cile-u1-literal-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: marketExtract,
          stem: "The writer describes Amara's knife as 'worn smooth by decades of use'. Explain what this tells you literally about the knife.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paraphrase", statement: "Explain a detail by restating what it literally states about the object." },
            ],
            steps: [
              { reasoning: "'Worn smooth' states the blade's edge has been polished by handling.", working: "\\text{worn smooth}", marks: 1, markCode: "AO2" },
              { reasoning: "'Decades of use' states it is very old and has been used for a long time.", working: "\\text{decades of use}", marks: 1, markCode: "AO2" },
              { reasoning: "Literally, it is a well-used working tool, not a new or decorative object.", marks: 1, markCode: "AO2" },
              { reasoning: "Since it predates Amara's own work, it connects her to earlier years at the pitch.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The knife is an old, heavily used working tool — its edge worn smooth by decades of handling, suggesting it was used long before Amara, likely in her grandmother's time.",
            commonErrors: ["Saying the knife is 'broken' or 'old and useless' — worn smooth implies careful, continuous use."],
          },
        },
        {
          id: "cile-u1-literal-q12",
          difficulty: "challenge",
          totalMarks: 4,
          extract: marketExtract,
          stem: "The extract is told in time order. Describe the sequence of events in the extract from start to finish.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chronology", statement: "Time-ordered texts move through preparation, the main event, and aftermath." },
            ],
            steps: [
              { reasoning: "Preparation: stallholders set up; Amara arrives early and claims her pitch.", working: "\\text{setup; Amara arrives}", marks: 1, markCode: "AO2" },
              { reasoning: "Main event: by seven the lane is packed with tourists, locals, a musician and children.", working: "\\text{packed by seven}", marks: 1, markCode: "AO2" },
              { reasoning: "Ending of the market: the last customer leaves at midnight.", working: "\\text{midnight}", marks: 1, markCode: "AO2" },
              { reasoning: "Aftermath: Amara counts her takings and walks home under the stars.", working: "\\text{counts takings; walks home}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Stallholders prepare and Amara arrives early; by seven the packed lane is in full swing; the last customer leaves at midnight; Amara counts her takings and walks home beneath the stars.",
            commonErrors: ["Starting with the market already open or ending before Amara walks home."],
          },
        },
        {
          id: "cile-u1-literal-q13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: marketExtract,
          stem: "Describe what happens after the last customer leaves, and explain what this shows literally about the end of Amara's working night.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "Literal answers restate exactly what the text states about events and time." },
            ],
            steps: [
              { reasoning: "The last customer leaves at midnight.", working: "\\text{midnight}", marks: 1, markCode: "AO2" },
              { reasoning: "Amara counts her takings twice.", working: "\\text{counted takings twice}", marks: 1, markCode: "AO2" },
              { reasoning: "She walks home slowly.", working: "\\text{walked home slowly}", marks: 1, markCode: "AO2" },
              { reasoning: "The sky is still crowded with stars — it is late and clear.", working: "\\text{sky crowded with stars}", marks: 1, markCode: "AO2" },
              { reasoning: "The lane is now empty — the busy market has finished.", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion: her working night ends alone and quietly, after hours of trade.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "After midnight Amara counts her takings twice, then walks home slowly beneath a star-filled sky — the extract literally shows her working night ending in quiet solitude once the market closes.",
            levels: [
              { level: "Level 3", marks: "4-6", descriptor: "All details retrieved and the conclusion clearly stated.", part: undefined },
              { level: "Level 2", marks: "2-3", descriptor: "Some details retrieved; conclusion thin or partial.", part: undefined },
              { level: "Level 1", marks: "0-1", descriptor: "Few or no accurate details.", part: undefined },
            ],
            commonErrors: ["Adding interpretations (e.g. 'she felt sad') where the question asks what literally happens."],
          },
        },
        {
          id: "cile-u1-literal-q14",
          difficulty: "challenge",
          totalMarks: 8,
          extract: marketExtract,
          stem: "The extract gives many literal details about the market and Amara.",
          parts: [
            { label: "a", prompt: "State two facts about Amara's grandmother's connection to the pitch.", marks: 2 },
            { label: "b", prompt: "Describe two smells the writer mentions in the lane.", marks: 2 },
            { label: "c", prompt: "What does the paper lantern do?", marks: 1 },
            { label: "d", prompt: "Describe Amara's journey home in the final sentence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "Parts (a)-(d) are literal: locate stated facts and describe them accurately." },
            ],
            steps: [
              { part: "a", reasoning: "Fact 1: she worked the same corner for thirty years.", working: "\\text{thirty years}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Fact 2: the regulars still asked after her by name.", working: "\\text{asked after her by name}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Smell 1: charcoal grills / overripe mangoes.", working: "\\text{grills; mangoes}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Smell 2: something fried in oil no one could name.", working: "\\text{fried in oil}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "It slipped its string and was chased by children.", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "She walked home slowly.", working: "\\text{walked home slowly}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "She walked beneath a sky still crowded with stars — late at night.", working: "\\text{sky crowded with stars}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate, complete description of the journey home.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) worked the corner thirty years; regulars asked after her by name (b) charcoal grills/overripe mangoes; fried food no one could name (c) it slipped its string and was chased (d) she walked home slowly beneath a star-filled sky, late at night",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Both facts accurately stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate smells.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "b" },
              { level: "Level 1", marks: "1", descriptor: "Correct detail about the lantern.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Journey home accurately and fully described.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial description.", part: "d" },
            ],
            commonErrors: ["In (d) describing the market instead of her journey home."],
          },
        },
        {
          id: "cile-u1-literal-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: marketExtract,
          stem: "What does Amara count twice when the market closes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Her takings" },
              { id: "b", text: "Her bowls" },
              { id: "c", text: "The lanterns" },
              { id: "d", text: "The customers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "The detail is stated directly in the final paragraph." },
            ],
            steps: [
              { reasoning: "'Amara counted her takings twice.'", working: "\\text{takings}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Her takings",
            commonErrors: ["Choosing (d) — customers are not counted; her earnings are."],
          },
        },
        {
          id: "cile-u1-literal-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: marketExtract,
          stem: "The extract describes the market's routine from preparation to closing.",
          parts: [
            { label: "a", prompt: "What do the stallholders do before customers arrive?", marks: 2 },
            { label: "b", prompt: "What are the tourists and the locals each doing in the lane?", marks: 2 },
            { label: "c", prompt: "When does the night end and what does Amara do then?", marks: 2 },
            { label: "d", prompt: "State two details that show the market is part of a long local tradition.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retrieval", statement: "All parts are literal: locate and accurately describe stated details." },
            ],
            steps: [
              { part: "a", reasoning: "They drag out their tables.", working: "\\text{tables}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "They string bulbs of amber light across the lane.", working: "\\text{bulbs}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Tourists photograph the hanging lanterns.", working: "\\text{tourists photograph}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Locals argue cheerfully over prices.", working: "\\text{locals argue}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "The last customer leaves at midnight.", working: "\\text{midnight}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Amara counts her takings twice and walks home slowly.", working: "\\text{takings; walks home}", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Detail 1: her grandmother worked the same corner for thirty years.", working: "\\text{thirty years}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Detail 2: the regulars still ask after her by name / the knife worn by decades of use.", working: "\\text{asked by name; worn knife}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) drag out tables, string amber bulbs (b) tourists photograph lanterns; locals argue over prices (c) ends at midnight; Amara counts takings and walks home (d) grandmother's thirty years at the corner; regulars asking after her",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Both preparations accurately stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Tourist and local activities correctly distinguished.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing or confused.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Ending and Amara's actions accurate.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid tradition details.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing or wrong.", part: "d" },
            ],
            commonErrors: ["In (b) swapping the groups' activities."],
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
              { id: "a", text: "She feels a strong connection to it" },
              { id: "b", text: "She wants to move to a busier pitch" },
              { id: "c", text: "She finds it boring" },
              { id: "d", text: "She is afraid of the clock tower" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cile-u1-inference-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: marketExtract,
          stem: "What can you infer about why Amara arrives early, 'as she always did'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a habit showing dedication to her grandmother's work" },
              { id: "b", text: "She is always late for everything else" },
              { id: "c", text: "She is paid extra for arriving first" },
              { id: "d", text: "The market opens earlier than it used to" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "An inference is supported by clues; 'as she always did' signals a long-held habit." },
            ],
            steps: [
              { reasoning: "Arriving early is routine ('always'), linking her to the pitch's tradition.", working: "\\text{always did}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** It is a habit showing dedication to her grandmother's work",
            commonErrors: ["Choosing (a) — payment is never mentioned; the clue points to habit and loyalty."],
          },
        },
        {
          id: "cile-u1-inference-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: marketExtract,
          stem: "What does 'something fried in oil that no one could name' suggest about the market's food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The smell is genuinely unpleasant" },
              { id: "b", text: "The cooking is careless" },
              { id: "c", text: "There are local specialities outsiders do not recognise" },
              { id: "d", text: "The stalls sell nothing special" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "An unnameable smell suggests a local, insider speciality." },
            ],
            steps: [
              { reasoning: "If even the locals cannot name it, it is a distinctive local dish rather than a generic smell.", working: "\\text{no one could name}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** There are local specialities outsiders do not recognise",
            commonErrors: ["Choosing (a) — the writer's tone is appreciative, not critical."],
          },
        },
        {
          id: "cile-u1-inference-q7",
          difficulty: "core",
          totalMarks: 3,
          extract: marketExtract,
          stem: "Infer how Amara feels about working the same pitch as her grandmother. Support your answer with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Detail as clue", statement: "Repeated connections to the grandmother reveal emotional attachment." },
            ],
            steps: [
              { reasoning: "Evidence: she claims 'the corner pitch' her grandmother worked for thirty years.", working: "\\text{same corner}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: her knife is 'worn smooth by decades of use' — a family tool.", working: "\\text{worn knife}", marks: 1, markCode: "AO2" },
              { reasoning: "Inference: she feels pride and continuity — she is honouring her grandmother's legacy.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "She feels a deep sense of pride and continuity — working her grandmother's pitch with the family's worn knife suggests she is carrying on her legacy willingly.",
            commonErrors: ["Asserting feelings with no quoted evidence."],
          },
        },
        {
          id: "cile-u1-inference-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: marketExtract,
          stem: "What can you infer about the regular customers' relationship with the stallholders from 'locals argued cheerfully over prices'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Adverb as clue", statement: "'Cheerfully' tells us the argument is friendly, not hostile." },
            ],
            steps: [
              { reasoning: "Evidence: locals 'argued cheerfully over prices'.", working: "\\text{argued cheerfully}", marks: 1, markCode: "AO2" },
              { reasoning: "'Cheerfully' shows the bargaining is playful and familiar, not tense.", marks: 1, markCode: "AO2" },
              { reasoning: "Inference: customers and stallholders have a warm, long-standing, neighbourly relationship.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The 'cheerful' argument suggests a warm, familiar rapport — these are regulars who banter comfortably with the stallholders, not strangers.",
            commonErrors: ["Reading 'argued' as conflict; the adverb shows it is good-natured."],
          },
        },
        {
          id: "cile-u1-inference-q9",
          difficulty: "foundation",
          totalMarks: 1,
          extract: marketExtract,
          stem: "Why might the writer end the extract with 'a sky still crowded with stars'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To suggest Amara is lost on her way home" },
              { id: "b", text: "To show the market stays open all night" },
              { id: "c", text: "To introduce a new character" },
              { id: "d", text: "To contrast the market's noise with the calm natural world after it closes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contrast", statement: "The quiet starry sky contrasts with the packed, noisy lane." },
            ],
            steps: [
              { reasoning: "After the market's bustle, the still, starry sky creates a calm after-image.", working: "\\text{contrast}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** To contrast the market's noise with the calm natural world after it closes",
            commonErrors: ["Choosing (c) — nothing suggests she is lost; the mood is calm, not anxious."],
          },
        },
        {
          id: "cile-u1-inference-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: marketExtract,
          stem: "What do the children most likely do when the lantern slips its string?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photograph it for tourists" },
              { id: "b", text: "Go home early" },
              { id: "c", text: "Chase it playfully through the stalls" },
              { id: "d", text: "Tell the stallholders off" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "The text states they chased it — a playful accident, not mischief or duty." },
            ],
            steps: [
              { reasoning: "'children wove between the stalls chasing a paper lantern that had slipped its string.'", working: "\\text{chasing}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Chase it playfully through the stalls",
            commonErrors: ["Choosing (a) — the text shows no blame or punishment."],
          },
        },
        {
          id: "cile-u1-inference-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: marketExtract,
          stem: "The writer introduces Amara's grandmother before describing Amara's own work. What can you infer about the grandmother's importance to the story?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Placement as clue", statement: "Details given early carry weight; the grandmother frames Amara's story." },
            ],
            steps: [
              { reasoning: "Evidence: regulars 'still asked after her by name' — she is remembered.", working: "\\text{asked after her by name}", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: she worked the same corner for thirty years — a long tradition.", working: "\\text{thirty years}", marks: 1, markCode: "AO2" },
              { reasoning: "Amara claims the same corner and uses the family's old knife — she continues the line.", working: "\\text{same corner; old knife}", marks: 1, markCode: "AO2" },
              { reasoning: "Inference: the grandmother is the reason Amara keeps the pitch — her legacy drives the story.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The grandmother matters because Amara's work is a continuation of hers — same corner, family knife, remembered name — so she is the invisible presence behind Amara's pitch.",
            commonErrors: ["Saying she 'appears in the story' — she is only mentioned, yet she shapes everything."],
          },
        },
        {
          id: "cile-u1-inference-q12",
          difficulty: "challenge",
          totalMarks: 4,
          extract: marketExtract,
          stem: "Explain what the contrast between 'the lane was packed' and Amara 'walking home slowly' suggests about the market's place in the community.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contrast", statement: "Juxtaposing crowded energy with solitary quiet highlights both." },
            ],
            steps: [
              { reasoning: "'Packed' with tourists, locals, musicians and children shows the market is a central, lively gathering.", working: "\\text{packed}", marks: 1, markCode: "AO2" },
              { reasoning: "Amara 'walking home slowly' is solitary and reflective — she leaves the crowd behind.", working: "\\text{walking home slowly}", marks: 1, markCode: "AO2" },
              { reasoning: "The contrast shows the market's vitality belongs to the community, while its keeper departs alone.", marks: 1, markCode: "AO2" },
              { reasoning: "Inference: Amara is part of the market's rhythm yet steps out of it at night's end.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The contrast suggests the market is the community's vibrant heart, while Amara — its keeper — walks away from it alone, marking the daily rhythm of giving everything to the crowd and then leaving quietly.",
            commonErrors: ["Describing the contrast without saying what it implies about Amara or the community."],
          },
        },
        {
          id: "cile-u1-inference-q13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: marketExtract,
          stem: "What do the details 'counted her takings twice' and 'walked home slowly beneath a sky still crowded with stars' suggest, taken together, about Amara at the end of the night?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cumulative inference", statement: "Several small details pointing the same way make a strong inference." },
            ],
            steps: [
              { reasoning: "'Counted her takings twice' suggests carefulness — and perhaps tiredness after a long night.", working: "\\text{counted twice}", marks: 1, markCode: "AO2" },
              { reasoning: "'Walked home slowly' suggests weariness and unwinding, not hurry.", working: "\\text{slowly}", marks: 1, markCode: "AO2" },
              { reasoning: "'Sky still crowded with stars' gives a calm, wonder-filled late-night image.", working: "\\text{stars}", marks: 1, markCode: "AO2" },
              { reasoning: "Together they suggest a reflective, quietly content state — the night felt worthwhile.", marks: 1, markCode: "AO2" },
              { reasoning: "The quiet contrasts with the earlier bustle, completing the day's arc.", marks: 1, markCode: "AO2" },
              { reasoning: "Hedged conclusion: 'this suggests/implies' rather than asserting.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Together they suggest Amara ends the night tired but quietly content and reflective — careful with her hard-earned takings, moving slowly, and pausing beneath a starry sky after a long, meaningful evening.",
            levels: [
              { level: "Level 3", marks: "4-6", descriptor: "Both details analysed and a well-evidenced, hedged conclusion reached.", part: undefined },
              { level: "Level 2", marks: "2-3", descriptor: "Details identified but the combined inference is partial.", part: undefined },
              { level: "Level 1", marks: "0-1", descriptor: "Little or no valid inference.", part: undefined },
            ],
            commonErrors: ["Asserting she is unhappy or lonely — the tone is calm and content, not sad."],
          },
        },
        {
          id: "cile-u1-inference-q14",
          difficulty: "challenge",
          totalMarks: 9,
          extract: marketExtract,
          stem: "Inference helps us understand what the extract implies beyond its literal statements.",
          parts: [
            { label: "a", prompt: "Why might the writer mention that Amara's grandmother worked the corner for thirty years?", marks: 2 },
            { label: "b", prompt: "What does 'worn smooth by decades of use' imply about the knife's history?", marks: 2 },
            { label: "c", prompt: "Why might the unnameable fried smell matter to the market's regulars?", marks: 2 },
            { label: "d", prompt: "What does the extract's quiet, slow ending suggest about the market's daily rhythm?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "Conclusions must be anchored in quoted evidence and hedged with 'suggests/implies'." },
            ],
            steps: [
              { part: "a", reasoning: "It establishes a thirty-year family tradition at the pitch.", working: "\\text{thirty-year tradition}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "It gives Amara's work weight — she inherits a legacy, not just a spot.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "The knife predates Amara — it has served for decades.", working: "\\text{decades}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It implies the knife was her grandmother's tool, now Amara's.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "A smell 'no one could name' suggests a signature local dish.", working: "\\text{unnameable}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "For regulars it is familiar comfort — insider knowledge outsiders lack.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Evidence: 'counted twice', 'walked home slowly', starry sky — pace slows completely.", working: "\\text{slow ending}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It suggests the market's rhythm is a daily cycle of bustle then release.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion: the ending mirrors the tradition — labour, then quiet reflection.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) establishes a thirty-year family tradition Amara inherits (b) the knife was likely her grandmother's tool now passed to Amara (c) a signature local dish regulars know and outsiders do not (d) the slow ending mirrors a daily cycle of bustle then release, echoing the tradition's rhythm",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Purpose of the grandmother detail explained with inference.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Knife's history inferred from evidence.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Smell's significance explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or missing.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Ending's suggestion about rhythm argued with evidence.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial explanation.", part: "d" },
            ],
            commonErrors: ["In (d) describing events rather than what they suggest about rhythm."],
          },
        },
        {
          id: "cile-u1-inference-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: marketExtract,
          stem: "What can you infer about the district's attitude to the night market?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is dying out and losing customers" },
              { id: "b", text: "It is a lively, cherished community institution" },
              { id: "c", text: "It is a new experiment with few visitors" },
              { id: "d", text: "It is dangerous after dark" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "Crowds, regulars and thirty-year tradition all point to a cherished institution." },
            ],
            steps: [
              { reasoning: "Packed lane, regulars who ask after the grandmother, and a thirty-year history show it is valued.", working: "\\text{regulars; thirty years}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** It is a lively, cherished community institution",
            commonErrors: ["Choosing (a) — nothing suggests decline; the evidence shows vibrancy and longevity."],
          },
        },
        {
          id: "cile-u1-inference-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: marketExtract,
          stem: "The extract rewards careful inference.",
          parts: [
            { label: "a", prompt: "What does 'arrives early, as she always did' imply about Amara's attitude to her work?", marks: 2 },
            { label: "b", prompt: "What do the tourists' and locals' different behaviours suggest about who the market serves?", marks: 2 },
            { label: "c", prompt: "Why might the writer give the musician and the children only small roles? Infer their function.", marks: 2 },
            { label: "d", prompt: "What does 'a sky still crowded with stars' suggest about the mood after the market closes?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inference", statement: "Small details accumulate into a picture of character, community and mood." },
            ],
            steps: [
              { part: "a", reasoning: "Evidence: 'arrives early, as she always did'.", working: "\\text{always did}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Inference: routine and dedication — she treats the pitch as her own.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Tourists photograph — they consume the spectacle; locals argue prices — they belong.", working: "\\text{photograph vs argue}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Inference: the market serves both visitors and the community that sustains it.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "The musician and children add life and sound without taking focus from Amara.", working: "\\text{background life}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "They show the market belongs to everyone — it is a shared, living space.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Evidence: 'still crowded with stars' after midnight.", working: "\\text{stars}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Inference: calm, wonder and quiet relief — the noise resolves into stillness.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) dedication and routine — the pitch is her own (b) tourists consume, locals belong — the market serves both (c) they supply shared liveliness, showing the market belongs to the whole community (d) calm wonder and quiet relief after the noise",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Inference supported by the quoted detail.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or unsupported.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Contrast identified and its significance explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Function of the small roles inferred.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or missing.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Mood inferred from the starry image.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or missing.", part: "d" },
            ],
            commonErrors: ["In (c) saying the roles are 'unimportant' — their function is atmospheric, not plot."],
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
