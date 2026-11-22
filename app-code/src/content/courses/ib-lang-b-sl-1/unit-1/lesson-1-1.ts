import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "langb-u1-lesson-1-1",
  code: "1-1",
  title: "Reading Strategies and Gist versus Detail",
  goal: "I CAN use skimming and scanning to identify gist and locate detail in a text in any language I am learning.",
  standards: ["Comprehension", "Reading", "Language B SL"],
  vocabulary: [
    { term: "Gist", definition: "The main idea or general topic of a text — what it is essentially about." },
    { term: "Detail", definition: "Specific facts, names, numbers or examples supporting the main idea." },
    { term: "Skimming", definition: "Reading quickly to grasp the gist: read titles, headings, first and last sentences." },
    { term: "Scanning", definition: "Searching a text for a specific piece of information without reading every word." },
    { term: "Inference", definition: "Working out meaning that is not stated directly from context and clues." },
    { term: "Cognate", definition: "A word similar in form and meaning to a word in another language, easing comprehension." },
  ],
  concepts: [
    {
      id: "langb-u1-reading-strategies",
      title: "Skimming for gist and scanning for detail",
      skill: "Apply skimming to find the main idea and scanning to locate specific information, in any target language.",
      lesson: {
        sections: [
          {
            heading: "Why two speeds of reading",
            body: "Reading in a second language is slow and tiring. Effective readers switch between two modes. **Skimming** means reading quickly — headings, first sentences, key words — to answer 'What is this text about?' **Scanning** means searching line by line for a name, date or answer to a specific question. Language B exams reward both: gist questions first, then detail questions.",
          },
          {
            heading: "A four-step routine",
            body: "Use this routine on any unseen text: (1) Read the title and any subheadings — predict the topic. (2) Read the first sentence of each paragraph for gist. (3) Read the final paragraph for conclusions. (4) For detail questions, return to the text and scan for keywords, cognates and numbers. Never read every word of every text.",
          },
          {
            heading: "Managing unknown vocabulary",
            body: "You do not need every word. Ignore unknown words that do not block meaning. Use cognates (words shared between languages) and context to infer meaning. If a word repeats or appears in a heading, learn it — it is probably important. Comprehension is about meaning, not translating every sentence.",
          },
        ],
        keyFormulas: [
          { name: "Skim", statement: "Headings + first/last sentences = gist in under a minute" },
          { name: "Scan", statement: "Question keyword -> find matching word in text -> read only that sentence" },
        ],
        workedExample: {
          problem: "A question asks 'Where does the festival take place?' How should you find the answer?",
          solution: "Do not read the whole text again. Scan for a place name or the word for 'place/location'. The answer sentence usually contains the key noun near a preposition of place.",
        },
      },
      questions: [
        {
          id: "langb-u1-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of skimming a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To find the gist or main idea quickly" },
              { id: "b", text: "To count the number of paragraphs" },
              { id: "c", text: "To memorise the text for later" },
              { id: "d", text: "To translate every word accurately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Skimming", statement: "Reading quickly to grasp the main idea or gist of a text." },
            ],
            steps: [
              { reasoning: "Skimming is a fast reading mode aimed at the general topic, not word-by-word translation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To find the gist or main idea quickly",
            commonErrors: ["Confusing skimming with careful, detailed reading."],
          },
        },
        {
          id: "langb-u1-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the four steps of the skimming routine described in this lesson and state the purpose of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Skimming routine", statement: "Title/headings -> first sentences -> final paragraph -> return for detail." },
            ],
            steps: [
              { reasoning: "Read title and subheadings to predict the topic.", marks: 1, markCode: "M" },
              { reasoning: "Read first sentence of each paragraph plus the final paragraph to get gist and conclusion.", marks: 1, markCode: "M" },
              { reasoning: "Return to the text and scan for keywords only when a detail question demands it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Predict from headings, skim opening and closing sentences for gist, then scan for specific details.",
            commonErrors: ["Reading every sentence instead of sampling strategically."],
          },
        },
        {
          id: "langb-u1-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why scanning is more efficient than re-reading a whole text when answering a detail question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Efficiency of scanning", statement: "Detail answers are localised; searching for keywords avoids wasted reading time." },
            ],
            steps: [
              { reasoning: "A detail question targets one specific fact — a name, date, place or reason.", marks: 1, markCode: "M" },
              { reasoning: "The answer sits in one or two sentences, so reading the whole text wastes time and energy.", marks: 1, markCode: "R" },
              { reasoning: "Scanning uses the question's keywords to locate the sentence directly.", marks: 1, markCode: "M" },
              { reasoning: "This leaves more time for harder questions — the real exam advantage of scanning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scanning jumps straight to the relevant sentence using keywords, saving time for other questions.",
            commonErrors: ["Re-reading everything and running out of time."],
          },
        },
        {
          id: "langb-u1-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Apply the reading routine to a real text.",
          extract: {
            title: "The School Harvest Festival",
            author: "Written for Akademik Space",
            source: "Comprehension practice text",
            text: "Every autumn our school holds a harvest festival in the main hall. This year, students from all three year groups will prepare food from different countries. The festival begins at 10 a.m. on Saturday 14 October and lasts until 4 p.m. Last year's event raised enough money to buy new library books, and the organisers hope to repeat that success. Visitors are welcome, but they must sign in at the entrance.",
          },
          parts: [
            { label: "a", prompt: "State the gist of the text in one sentence.", marks: 2 },
            { label: "b", prompt: "Find two specific details: the date and what last year's festival achieved.", marks: 2 },
            { label: "c", prompt: "Explain how you would use scanning to answer 'Who is allowed to attend?'", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gist and detail extraction", statement: "Gist = main event; details = date, purpose and rules." },
            ],
            steps: [
              { part: "a", reasoning: "The text announces a school harvest festival with food, fundraising and visitor rules.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "One accurate gist sentence earns the second mark.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Date: Saturday 14 October; it raised money for new library books.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both details correctly located in the text.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Identify the keyword 'attend/visit/welcome' from the question.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Scan to the sentence 'Visitors are welcome, but they must sign in at the entrance.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Answer: anyone may visit provided they sign in — demonstrates efficient scanning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A school autumn harvest festival. (b) Saturday 14 October; raised money for library books. (c) Scan for 'visitors/welcome' and read only that sentence.",
            commonErrors: ["Giving details as the gist, or re-reading the whole text for one fact."],
          },
        },
        {
          id: "langb-u1-q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When scanning for the answer to 'What time does the meeting start?', what should you do first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translate the title into your first language" },
              { id: "b", text: "Read every sentence from the beginning" },
              { id: "c", text: "Search for time expressions, numbers and clock words" },
              { id: "d", text: "Count the number of paragraphs" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scanning", statement: "Scanning searches for specific information using keywords rather than reading every sentence." },
            ],
            steps: [
              { reasoning: "A time question is answered by locating a time expression or number.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) names the efficient scanning action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Search for time expressions, numbers and clock words",
            commonErrors: ["Starting a full re-read before identifying the likely keywords."],
          },
        },
        {
          id: "langb-u1-q26",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sequence best applies the skimming routine to an unseen text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memorise the first paragraph before looking at the title" },
              { id: "b", text: "Answer all questions before reading the text" },
              { id: "c", text: "Read title and headings, sample first and last sentences, then scan for details" },
              { id: "d", text: "Translate the title, then read every paragraph slowly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Skimming routine", statement: "Headings and framing sentences give gist; targeted scanning gives detail." },
            ],
            steps: [
              { reasoning: "The routine moves from general context to sampled sentences and only then to detail.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) states this order correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Read title and headings, sample first and last sentences, then scan for details",
            commonErrors: ["Putting detailed scanning before establishing the gist."],
          },
        },
        {
          id: "langb-u1-q27",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A question asks for 'the writer's main opinion'. Which reading strategy is most appropriate first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scan only for dates and numbers" },
              { id: "b", text: "Skim headings and topic sentences to locate the argument" },
              { id: "c", text: "Read the bibliography carefully" },
              { id: "d", text: "Ignore the introduction completely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gist before detail", statement: "Opinion and main ideas are found by skimming the text's structure and framing sentences." },
            ],
            steps: [
              { reasoning: "A main opinion is a gist-level feature, not a single factual detail.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) uses skimming to locate the argument efficiently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Skim headings and topic sentences to locate the argument",
            commonErrors: ["Scanning for one detail when the question requires the overall position."],
          },
        },
        {
          id: "langb-u1-q28",
          difficulty: "core",
          totalMarks: 3,
          stem: "An unknown word repeats in a heading and in two paragraphs. What is the best response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skip the text because one word is unknown" },
              { id: "b", text: "Treat it as important, infer from context and cognates, then verify" },
              { id: "c", text: "Translate every sentence containing it immediately" },
              { id: "d", text: "Ignore it because it is repeated" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Priority vocabulary", statement: "Repeated or heading-level words usually carry key meaning and deserve inference effort." },
            ],
            steps: [
              { reasoning: "Frequency and position signal that the word is important to comprehension.", marks: 1, markCode: "M" },
              { reasoning: "Context, cognates and word parts can support an inference without stopping the reading flow.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) combines priority, inference and verification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Treat it as important, infer from context and cognates, then verify",
            commonErrors: ["Either ignoring all unknown words or stopping for every unknown word."],
          },
        },
        {
          id: "langb-u1-q29",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why should you read the title and subheadings before the body of an unseen text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They provide a map of the topic and help predict likely vocabulary" },
              { id: "b", text: "They guarantee every detail answer" },
              { id: "c", text: "They replace the need to read any paragraph" },
              { id: "d", text: "They are always written in the simplest language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prediction", statement: "Titles and headings activate background knowledge and narrow the search space for both gist and detail." },
            ],
            steps: [
              { reasoning: "Headings reveal the organisation and probable topic before detailed reading.", marks: 1, markCode: "M" },
              { reasoning: "Prediction makes later skimming and scanning faster because expected words and ideas are activated.", marks: 1, markCode: "R" },
              { reasoning: "Choice (a) states this function without overstating it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** They provide a map of the topic and help predict likely vocabulary",
            commonErrors: ["Believing headings alone are enough for all questions."],
          },
        },
        {
          id: "langb-u1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "A detail question uses the word 'begin', but the text says 'commence'. What should you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scan for synonyms, cognates, numbers or related time expressions" },
              { id: "b", text: "Assume the answer is not in the text" },
              { id: "c", text: "Choose the first sentence of the text" },
              { id: "d", text: "Translate the whole text into your first language" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Keyword flexibility", statement: "Question keywords may be paraphrased, so scanning should include synonyms and related forms." },
            ],
            steps: [
              { reasoning: "'Commence' and 'begin' are synonyms, so literal keyword matching would fail.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) broadens the scan appropriately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Scan for synonyms, cognates, numbers or related time expressions",
            commonErrors: ["Searching only for the exact word in the question."],
          },
        },
        {
          id: "langb-u1-q31",
          difficulty: "core",
          totalMarks: 6,
          stem: "Use the reading routine on a short text.",
          extract: {
            title: "New recycling points",
            author: "Written for Akademik Space",
            source: "Comprehension practice text",
            text: "From next month, the city will add glass recycling bins beside every supermarket. The project begins on 3 March and costs the council little because shops provide the bins. Residents are asked to rinse containers before recycling them. Officials expect the scheme to reduce the amount of waste sent to landfill.",
          },
          parts: [
            { label: "a", prompt: "State the gist of the text in one sentence.", marks: 2 },
            { label: "b", prompt: "Find two details: when the project begins and who provides the bins.", marks: 2 },
            { label: "c", prompt: "Explain how scanning helps you answer 'What should residents do before recycling?'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gist and detail extraction", statement: "Gist captures the main announcement; details come from targeted scanning." },
            ],
            steps: [
              { part: "a", reasoning: "The text announces new glass recycling bins in supermarkets.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "One complete accurate gist sentence is given.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "It begins on 3 March and shops provide the bins.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both details are correctly located.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Identify 'residents', 'do' and 'before recycling' as the keywords.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Scan to the sentence asking residents to rinse containers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) New glass recycling bins will be added beside supermarkets. (b) 3 March; shops provide the bins. (c) Scan for the residents' instruction and read only that sentence.",
            commonErrors: ["Giving the aim of the scheme as the gist or answering details without locating them."],
          },
        },
        {
          id: "langb-u1-q32",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare skimming and scanning for a comprehension task.",
          parts: [
            { label: "a", prompt: "Define the purpose of each strategy.", marks: 2 },
            { label: "b", prompt: "Explain when each should be used during an exam.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Skimming versus scanning", statement: "Skimming finds the general idea; scanning finds a specified answer." },
            ],
            steps: [
              { part: "a", reasoning: "Skimming identifies the gist or main idea quickly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Scanning locates one specific fact or answer.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use skimming first to understand the topic and possible argument.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use scanning for detail questions after the keywords are identified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The two strategies complement each other and save exam time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Skimming gives the general idea first; scanning then locates specified details efficiently.",
            commonErrors: ["Using only one strategy for every question type."],
          },
        },
        {
          id: "langb-u1-q33",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A student reads an article but misses a detail question.",
          extract: {
            title: "Library extends weekend hours",
            author: "Written for Akademik Space",
            source: "Comprehension practice text",
            text: "The town library will stay open until 8 p.m. on Fridays and Saturdays from January. The change follows requests from students and shift workers who cannot visit during weekday hours. Entry remains free, although some printing services will cost a small fee. The library director said the longer hours would be reviewed after six months.",
          },
          parts: [
            { label: "a", prompt: "State the gist in one sentence.", marks: 2 },
            { label: "b", prompt: "Find which services will not be completely free.", marks: 2 },
            { label: "c", prompt: "Explain how the student should use the four-step routine to avoid missing this detail.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Routine for details", statement: "Predict, skim, note key information and return for targeted scanning." },
            ],
            steps: [
              { part: "a", reasoning: "The library will extend weekend opening hours.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "One accurate gist sentence is provided.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Some printing services will cost a small fee.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The answer correctly identifies printing rather than entry.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Read the title and headings to predict the topic of opening hours and services.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Skim first sentences and scan for 'free', 'cost', 'fee' or 'printing'.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Read only the relevant sentence to distinguish entry from printing costs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) The library will open later on Fridays and Saturdays. (b) Some printing services. (c) Predict from headings, skim, then scan for cost-related keywords and read the matching sentence.",
            commonErrors: ["Assuming entry is the only service mentioned or answering from memory rather than the text."],
          },
        },
        {
          id: "langb-u1-q34",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A question asks 'When was the workshop postponed?' What type of question is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A detail question requiring one specific fact" },
              { id: "b", text: "A vocabulary question about word families" },
              { id: "c", text: "A production task requiring an essay" },
              { id: "d", text: "A gist question about the writer's opinion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question type recognition", statement: "Questions asking for one fact are detail questions and require scanning." },
            ],
            steps: [
              { reasoning: "The question asks for one specific time, not the whole text's meaning.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A detail question requiring one specific fact",
            commonErrors: ["Treating a one-fact question as a gist question."],
          },
        },
        {
          id: "langb-u1-q35",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain how to manage unknown vocabulary while preserving comprehension.",
          parts: [
            { label: "a", prompt: "State which unknown words can usually be ignored.", marks: 2 },
            { label: "b", prompt: "Describe two strategies for inferring an important unknown word.", marks: 2 },
            { label: "c", prompt: "Explain why word-by-word translation slows reading.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Selective attention", statement: "Comprehension prioritises meaning-bearing words and uses context for the rest." },
            ],
            steps: [
              { part: "a", reasoning: "Words that do not affect the main idea or answer can be ignored.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Low-frequency adjectives or examples may be skipped if meaning remains clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use context clues such as contrast, example or explanation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use cognates, word parts or repeated headings to support the guess.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Translation switches attention from meaning to language form.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It is slower and makes it harder to track the whole text.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ignore non-blocking words; infer important words from context and word knowledge; translation fragments attention and slows comprehension.",
            commonErrors: ["Stopping for every unknown word or translating sentence by sentence."],
          },
        },
        {
          id: "langb-u1-q36",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a personal reading strategy for a timed Language B comprehension paper.",
          parts: [
            { label: "a", prompt: "Describe your first actions before reading the body.", marks: 3 },
            { label: "b", prompt: "Explain how you will answer gist questions.", marks: 3 },
            { label: "c", prompt: "Explain how you will answer detail questions without wasting time.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Timed reading strategy", statement: "Orient, skim for gist and scan for detail in a controlled sequence." },
            ],
            steps: [
              { part: "a", reasoning: "Read the title, headings and any introduction to predict the topic.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Read the questions to know whether gist or detail is required.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Note keywords, numbers and possible cognates before the body.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Skim topic sentences, first paragraphs and conclusions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use the text's organisation rather than every word.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check that the answer matches the whole text, not just one detail.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Extract keywords and synonyms from each detail question.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Return only to the relevant sentence and verify the answer in context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Orient with title, headings and questions; skim framing sentences for gist; scan keywords and read only matching sentences for details.",
            commonErrors: ["Reading the whole text twice or answering details from memory."],
          },
        },
      ],
    },
    {
      id: "langb-u1-text-types",
      title: "Recognising text types and their conventions",
      skill: "Identify whether a text is an article, email, message, report or letter, and describe the conventions each type follows.",
      lesson: {
        sections: [
          {
            heading: "Why text type matters",
            body: "Every text has a purpose and an expected shape. An **article** informs or entertains a general audience; an **email** communicates between known people; a **message** (text, note, social post) is brief and informal; a **report** presents facts for a specific audience; a **letter** has formal greeting and closing conventions. Recognising the type tells you what to expect and how to read it.",
          },
          {
            heading: "Conventions to look for",
            body: "Articles use headlines, bylines and paragraphs of description. Emails show To/From/Subject lines, greetings like 'Dear...' and sign-offs. Reports use headings, facts, figures and sometimes recommendations. Letters use addresses, formal openings ('Dear Sir/Madam') and closings ('Yours faithfully'). Messages drop punctuation and use abbreviations.",
          },
          {
            heading: "Register follows purpose",
            body: "The text type signals the **register** — the level of formality. A formal report uses impersonal constructions and precise vocabulary; a text message to a friend uses contractions, slang and emojis. In Language B, choosing the right text type and register in your own writing is often the difference between meeting and missing the assessment criteria.",
          },
        ],
        keyFormulas: [
          { name: "Text type cues", statement: "Headline/byline = article; Subject/To/From = email; headings + figures = report" },
          { name: "Register scale", statement: "Formal (report, letter) -> neutral -> informal (message, chat)" },
        ],
        workedExample: {
          problem: "A text begins 'Hi Sam! Can u still do the project tmrw? -Tom'. What type is it and what register?",
          solution: "It is a brief informal message between friends: lowercase, abbreviations (u, tmrw), no greeting or sign-off structure. Register is informal.",
        },
      },
      questions: [
        {
          id: "langb-u1-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature most clearly identifies a text as an email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chapter headings" },
              { id: "b", text: "A printed headline" },
              { id: "c", text: "A bibliography" },
              { id: "d", text: "To, From and Subject lines" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email conventions", statement: "Emails display recipient, sender and subject fields plus greeting and sign-off." },
            ],
            steps: [
              { reasoning: "To/From/Subject fields are unique structural markers of emails.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To, From and Subject lines",
            commonErrors: ["Choosing a generic feature like a title instead of the email-specific fields."],
          },
        },
        {
          id: "langb-u1-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three conventions that distinguish a formal report from an informal text message.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report vs message", statement: "Reports: headings, objective tone, precise vocabulary. Messages: abbreviations, omissions, slang." },
            ],
            steps: [
              { reasoning: "A report uses clear headings and organised sections; a message is a single short block.", marks: 1, markCode: "M" },
              { reasoning: "A report uses complete sentences and precise vocabulary; a message uses abbreviations and omissions.", marks: 1, markCode: "M" },
              { reasoning: "A report has an objective, impersonal tone; a message is personal and casual.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Headings/structure, precise complete language vs abbreviations, and objective vs personal tone.",
            commonErrors: ["Listing differences in topic rather than in form and register."],
          },
        },
        {
          id: "langb-u1-q7",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Notice: Library Closure",
            author: "Written for Akademik Space",
            source: "Comprehension practice text",
            text: "DEAR STUDENTS\n\nThe school library will be closed for repairs from Monday 3 November until Friday 14 November. During this period, all book loans will be extended automatically by two weeks. Students who need resources urgently should contact the English department office. We apologise for any inconvenience and thank you for your patience.\n\nThe Principal",
          },
          stem: "Identify the text type and register of this passage, and explain two features that support your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal notice", statement: "Formal greeting, impersonal polite phrasing, structured information, formal sign-off." },
            ],
            steps: [
              { reasoning: "Text type: a formal notice/announcement to students.", marks: 1, markCode: "M" },
              { reasoning: "Feature 1: formal greeting 'DEAR STUDENTS' and closing 'The Principal' frame the message.", marks: 1, markCode: "M" },
              { reasoning: "Feature 2: objective, complete sentences — 'will be closed', 'will be extended automatically', 'We apologise for any inconvenience'.", marks: 1, markCode: "M" },
              { reasoning: "Register is formal and impersonal, appropriate for an official announcement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal notice: formal greeting/sign-off, objective complete language, polite impersonal register.",
            commonErrors: ["Identifying type without citing supporting features."],
          },
        },
        {
          id: "langb-u1-q8",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Compare how an article and an email would present the same event — a cancelled school trip.",
          parts: [
            { label: "a", prompt: "State the likely purpose and audience of each text type.", marks: 2 },
            { label: "b", prompt: "Describe two structural differences between the two texts.", marks: 2 },
            { label: "c", prompt: "Explain why using the wrong text type or register would lose marks in a Language B writing task.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Purpose drives form", statement: "Text type determines structure and register; mismatch signals weak task fulfilment." },
            ],
            steps: [
              { part: "a", reasoning: "Article: inform a general public audience; email: communicate directly with known recipients (parents/students).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both purposes stated correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Article uses headline/byline/paragraphs; email uses greeting, subject line and sign-off.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Article is more descriptive; email is more direct and personal in tone.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Assessment criteria reward task fulfilment — wrong format fails the task requirement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Register mismatch (e.g. slang in a formal report) weakens the 'language' criterion.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Overall: conventions of text type are part of communicative competence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Article informs public; email addresses known recipients. (b) Headline/byline vs greeting/sign-off; descriptive vs direct. (c) Wrong type/register fails task fulfilment and language criteria.",
            commonErrors: ["Describing content differences only, ignoring structure and register."],
          },
        },
        {
          id: "langb-u1-q37",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main function of an article headline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To attract attention and signal the topic" },
              { id: "b", text: "To list all the facts in the article" },
              { id: "c", text: "To replace the introduction" },
              { id: "d", text: "To name the author" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Headline function", statement: "A headline summarises the topic and attracts a general reader." },
            ],
            steps: [
              { reasoning: "A headline is a short attention-getting title for the article.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) captures both functions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To attract attention and signal the topic",
            commonErrors: ["Confusing the headline with the byline or the whole summary."],
          },
        },
        {
          id: "langb-u1-q38",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the Subject line important when reading an email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It reveals the email's purpose before the body" },
              { id: "b", text: "It proves the email is formal" },
              { id: "c", text: "It shows the sender's home address" },
              { id: "d", text: "It replaces the greeting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject line", statement: "The subject previews the message purpose and helps the reader prioritise." },
            ],
            steps: [
              { reasoning: "The subject is a concise statement of why the email was sent.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) states this function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It reveals the email's purpose before the body",
            commonErrors: ["Treating the subject as decorative rather than informative."],
          },
        },
        {
          id: "langb-u1-q39",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature most strongly indicates an informal message rather than a formal email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A formal sign-off" },
              { id: "b", text: "A subject line" },
              { id: "c", text: "Complete paragraphs" },
              { id: "d", text: "Abbreviations, omissions and casual punctuation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal message register", statement: "Messages to known people often omit words and use casual forms." },
            ],
            steps: [
              { reasoning: "Informality is shown by shortened forms and reduced structure.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) lists those features.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Abbreviations, omissions and casual punctuation",
            commonErrors: ["Assuming every written message must have an email header."],
          },
        },
        {
          id: "langb-u1-q40",
          difficulty: "core",
          totalMarks: 3,
          stem: "A report usually contains which combination of features?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An introduction, headed sections, facts and a conclusion or recommendations" },
              { id: "b", text: "A headline, byline and personal anecdotes" },
              { id: "c", text: "Only emojis and abbreviations" },
              { id: "d", text: "A greeting and sign-off only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "Reports organise factual information for reference and often end with conclusions or actions." },
            ],
            steps: [
              { reasoning: "Reports are structured around purpose, sections and evidence.", marks: 1, markCode: "M" },
              { reasoning: "They favour objective facts and clear headings over personal style.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) matches the full report pattern.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An introduction, headed sections, facts and a conclusion or recommendations",
            commonErrors: ["Confusing reports with articles or personal messages."],
          },
        },
        {
          id: "langb-u1-q41",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which pair of features best identifies a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Numbered findings and data tables only" },
              { id: "b", text: "A formal opening such as 'Dear Sir or Madam' and a formal closing such as 'Yours faithfully'" },
              { id: "c", text: "Lowercase abbreviations and emojis" },
              { id: "d", text: "A subject field and casual greeting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal letter conventions", statement: "Formal letters use respectful openings, complete sentences and fixed closings." },
            ],
            steps: [
              { reasoning: "The opening and closing frame the relationship and signal formality.", marks: 1, markCode: "M" },
              { reasoning: "Complete, respectful language is expected throughout the letter body.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) gives both letter-specific conventions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A formal opening such as 'Dear Sir or Madam' and a formal closing such as 'Yours faithfully'",
            commonErrors: ["Choosing email-style fields or informal abbreviations."],
          },
        },
        {
          id: "langb-u1-q42",
          difficulty: "core",
          totalMarks: 2,
          stem: "A task says: 'Write to the school principal to complain about noise.' Which text type is most appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A formal letter or formal email" },
              { id: "b", text: "A personal diary entry" },
              { id: "c", text: "A short social media post" },
              { id: "d", text: "A casual text message" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Task-driven text type", statement: "Authority figures and complaints require formal conventions and a respectful register." },
            ],
            steps: [
              { reasoning: "A principal is an authority figure, so the relationship calls for formality.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) matches purpose, audience and register.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A formal letter or formal email",
            commonErrors: ["Choosing informality because the topic is simple rather than because the audience is known."],
          },
        },
        {
          id: "langb-u1-q43",
          difficulty: "core",
          totalMarks: 6,
          stem: "Analyse the following text.",
          extract: {
            title: "Volunteers needed for beach clean-up",
            author: "Written for Akademik Space",
            source: "Comprehension practice text",
            text: "SUBJECT: Help needed on Saturday\n\nDear Ms Okafor,\n\nOur community group is organising a beach clean-up this Saturday from 9 a.m. to 1 p.m. We still need six volunteers to help collect litter and record the amount of waste found. Gloves and bags will be provided, but please bring water and wear comfortable shoes. If you can help, reply by Thursday.\n\nBest regards,\nLeo Martins",
          },
          parts: [
            { label: "a", prompt: "Identify the text type.", marks: 2 },
            { label: "b", prompt: "Name two email conventions visible in the text.", marks: 2 },
            { label: "c", prompt: "Explain how the register suits the purpose.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email analysis", statement: "Subject, greeting, clear request and sign-off identify an email to a known contact." },
            ],
            steps: [
              { part: "a", reasoning: "The text is an email because it uses subject, greeting, body and sign-off.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The named recipient and sender confirm direct communication.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Visible conventions include 'SUBJECT', 'Dear Ms Okafor' and 'Best regards'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Any two correct conventions are accepted.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The polite but direct register suits a request to a community contact.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete sentences and clear logistics make the request easy to act on.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Email; subject/greeting/sign-off; polite direct register with practical details for a volunteer request.",
            commonErrors: ["Calling it a report because it gives facts rather than recognising its direct-message structure."],
          },
        },
        {
          id: "langb-u1-q44",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare an article and an email about the same school event.",
          parts: [
            { label: "a", prompt: "State the likely audience of each text.", marks: 2 },
            { label: "b", prompt: "Describe one structural difference.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Audience and structure", statement: "Articles address a broad public; emails address known recipients with direct conventions." },
            ],
            steps: [
              { part: "a", reasoning: "The article addresses a general readership interested in school news.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The email addresses specific people such as parents, students or staff.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The article uses a headline, byline and descriptive paragraphs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The email uses a subject, greeting, request or information and sign-off.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This structural difference reflects the public versus personal purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Article: broad audience with headline/byline/paragraphs; email: known recipients with subject/greeting/sign-off.",
            commonErrors: ["Comparing only the topic and not audience or structure."],
          },
        },
        {
          id: "langb-u1-q45",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student writes: 'Hi! Are we still meeting tmrw? -Sam'.",
          parts: [
            { label: "a", prompt: "Identify the text type and register.", marks: 2 },
            { label: "b", prompt: "Explain two language features that support your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal message identification", statement: "Short direct messages between acquaintances use informal abbreviations and minimal structure." },
            ],
            steps: [
              { part: "a", reasoning: "It is an informal message between people who know each other.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The register is casual and conversational.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Features include 'Hi!', 'tmrw' and the dash sign-off.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The sentence is a direct question without formal framing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Informal message; features are greeting 'Hi!', abbreviation 'tmrw' and casual direct wording.",
            commonErrors: ["Calling it an email because it is written, despite lacking email fields."],
          },
        },
        {
          id: "langb-u1-q46",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan a formal email to request information about a school trip.",
          parts: [
            { label: "a", prompt: "Write an effective Subject line.", marks: 2 },
            { label: "b", prompt: "Choose an appropriate greeting and sign-off, with reasons.", marks: 2 },
            { label: "c", prompt: "Explain how to organise the body.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal email planning", statement: "Clear purpose, respectful address, logical body and appropriate closing are required." },
            ],
            steps: [
              { part: "a", reasoning: "The subject names the request, e.g. 'Question about the Year 10 trip'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It is concise and informative.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use 'Dear...' plus title or surname because the recipient is an authority or unknown adult.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use a formal sign-off such as 'Yours sincerely' or 'Kind regards'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the purpose and specific question in the first sentence.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add necessary context such as the trip date or your role.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "End politely, thanking the reader and inviting a reply.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Clear subject naming the trip question. (b) Formal greeting/sign-off for authority. (c) Purpose first, context next, polite close.",
            commonErrors: ["Burying the question or using casual language with an adult in authority."],
          },
        },
        {
          id: "langb-u1-q47",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature most clearly identifies a text as an article rather than an email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A greeting to a named person" },
              { id: "b", text: "A byline naming the author" },
              { id: "c", text: "A Subject line" },
              { id: "d", text: "A sign-off" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Text type markers", statement: "Articles use public-facing markers such as headlines and bylines; emails use subject, greeting and sign-off." },
            ],
            steps: [
              { reasoning: "A byline credits the author of a public article.", marks: 1, markCode: "M" },
              { reasoning: "Choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A byline naming the author",
            commonErrors: ["Matching a feature to the wrong genre because all are 'written texts'."],
          },
        },
        {
          id: "langb-u1-q48",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school must announce that a trip is cancelled.",
          parts: [
            { label: "a", prompt: "Describe the text you would send students as a message.", marks: 3 },
            { label: "b", prompt: "Describe the notice you would send parents.", marks: 3 },
            { label: "c", prompt: "Explain why the same event needs different text types.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Audience-shaped communication", statement: "Text type and register change with audience, purpose and required detail." },
            ],
            steps: [
              { part: "a", reasoning: "A short informal message states the cancellation, a reason and any immediate action.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It may use casual language and abbreviations appropriate to peers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It remains clear enough for students to understand what changed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A formal notice includes greeting, dates, reason, refund or alternative arrangements and sign-off.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It uses complete polite sentences and precise details.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The structure lets parents find practical information quickly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Students need fast informal confirmation; parents need formal accountability and logistics.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Audience therefore determines text type and register.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Informal fast message for students. (b) Formal detailed notice for parents. (c) Different audiences require different conventions and levels of detail.",
            commonErrors: ["Using identical language for both audiences."],
          },
        },
      ],
    },
  ],
};
