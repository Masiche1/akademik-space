import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mll3-u1-lesson-1-2",
  code: "1-2",
  title: "Inference in Non-Fiction",
  goal: "I CAN read between the lines of articles and reports to understand what is really being said and why.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Inference", definition: "Working out meaning that is not stated directly, using clues." },
    { term: "Bias", definition: "A slant or preference that shapes how information is presented." },
    { term: "Loaded language", definition: "Words chosen to trigger emotion or judgment — 'regime' vs 'government', 'slashed' vs 'reduced'." },
    { term: "Omission", definition: "Leaving out information that would change the picture." },
    { term: "Spin", definition: "Presenting facts in a way that favors a particular interpretation." },
  ],
  concepts: [
    {
      id: "mll3-u1-reading-between-lines",
      title: "Reading between the lines",
      skill: "Infer unstated meanings, biases and intentions in non-fiction texts.",
      lesson: {
        sections: [
          {
            heading: "What's not said",
            body: "Non-fiction doesn't always say what it means. An article might call someone a 'former official' instead of naming them, or describe an event as 'controversial' without explaining why. **Reading between the lines** means asking what the writer chose NOT to say.",
          },
          {
            heading: "Loaded language",
            body: "**Loaded language** carries emotional weight. 'The mayor slashed funding' sounds negative; 'the mayor reduced spending' sounds neutral. 'Protesters clashed with police' sounds more violent than 'demonstrators gathered'. The same facts, different words, different feelings.",
          },
          {
            heading: "Questions to ask",
            body: "When reading critically, ask: **Who benefits** from this presentation? **What's missing**? **What words carry emotion**? **What would change** if I saw the other side? These questions reveal bias and spin.",
          },
        ],
        keyFormulas: [
          { name: "Critical reading", statement: "What's not said? Who benefits? What words carry emotion? What's missing?" },
        ],
        workedExample: {
          problem: "Headline: 'Council 'Wastes' Millions on Failed Project'. What can you infer?",
          solution: "The headline is critical/negative — 'wastes' and 'failed' are loaded words. The writer (or source) opposes the project; the facts might be more complex.",
        },
      },
      questions: [
        {
          id: "mll3-u1-reading-between-lines-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'loaded language'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words that are very long" },
              { id: "b", text: "Words chosen to carry emotion or judgment" },
              { id: "c", text: "Words in a foreign language" },
              { id: "d", text: "Words that are hard to spell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Loaded language", statement: "Words chosen to trigger emotion or judgment, not just inform." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): loaded language carries emotional weight — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Words chosen to carry emotion or judgment",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Headlines",
            author: "Written for Akademik Space",
            text: "Headline A: 'Government Announces New Housing Plan'.\n\nHeadline B: 'Desperate Families Left Waiting as Government Delays Housing Promise'.",
          },
          stem: "Compare the two headlines. What does each emphasize and what does each leave out?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Headline framing", statement: "Headlines choose which facts to highlight and which to omit." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Headline A is neutral/factual — announces the plan; Headline B is critical — 'desperate', 'delays', 'left waiting' are loaded.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): A emphasizes the announcement; B emphasizes the delay and suffering — different framings of the same event.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Headline A is neutral and focuses on the plan; Headline B is critical, emphasizing delay and families' suffering — same event, different framing.",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            text: "Sources close to the investigation suggest the minister may have known about the problem months before it became public. The minister's office declined to comment.",
          },
          stem: "What can you infer about the reliability of this report? Explain using the language choices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hedging and sourcing", statement: "'Sources suggest' and 'may have' hedge claims; 'declined to comment' signals the other side isn't heard." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'sources close to the investigation suggest' and 'may have known' are hedged — the claim isn't confirmed, so reliability is uncertain.", evidence: "may have known", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'declined to comment' means the minister's side isn't represented — the report is one-sided or incomplete.", evidence: "declined to comment", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the report is plausible but unverified — a critical reader would look for the minister's response or official confirmation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The report is hedged ('suggest', 'may have') and one-sided (minister declined comment) — plausible but unverified; needs corroboration.",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this article.",
          extract: {
            title: "New Cycle Lane Opens",
            author: "Written for Akademik Space",
            text: "The long-awaited cycle lane finally opened on Monday, much to the delight of cyclists who had campaigned for years. 'This is a victory for everyone who rides,' said campaigner Jo Hart.\n\nHowever, some residents complain the lane has reduced parking spaces. The council says it is monitoring the impact and may review the layout next year.",
          },
          parts: [
            { label: "a", prompt: "Identify one word or phrase that shows the writer's positive attitude toward the cycle lane.", marks: 1 },
            { label: "b", prompt: "Identify one word or phrase that shows a negative view.", marks: 1 },
            { label: "c", prompt: "Explain how the writer balances different perspectives.", marks: 2 },
            { label: "d", prompt: "What does 'the council says it is monitoring' suggest about the future of the lane?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balanced reporting", statement: "Good journalism presents multiple perspectives with attributed quotes." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'much to the delight of cyclists' or 'long-awaited' or 'victory' — positive language.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'complain', 'reduced parking spaces' — negative perspective from residents.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the writer gives cyclists' view first (delight, victory) then residents' complaints — both sides represented.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'However' signals the shift to the opposing view; the council's 'monitoring' adds a neutral third voice.", evidence: "However, some residents complain", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A (Analysing): 'monitoring' and 'may review' suggest the council hasn't decided — the lane's future is uncertain but being watched.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'long-awaited', 'delight', 'victory'. (b) 'complain', 'reduced'. (c) Cyclists' joy vs residents' complaints, balanced with 'However' and council's neutral monitoring. (d) Future uncertain — under review.",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to 'read between the lines'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To read very quickly" },
              { id: "b", text: "To work out meanings and intentions that are not stated directly" },
              { id: "c", text: "To skip the first paragraph" },
              { id: "d", text: "To read only the headlines" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reading between the lines", statement: "Inferring unstated meanings, omissions and intentions." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): reading between the lines = inferring what isn't stated — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To work out meanings and intentions that are not stated directly",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An article calls a policy 'the mayor's pet project'. What does 'pet project' suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The project is small and unimportant" },
              { id: "b", text: "The mayor personally favours it, possibly beyond public interest" },
              { id: "c", text: "The project involves animals" },
              { id: "d", text: "The project is new and untested" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded language", statement: "Phrases like 'pet project' carry judgment — here, suggesting personal favouritism." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'pet project' implies personal attachment and possible favouritism — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The mayor personally favours it, possibly beyond public interest",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Leads",
            author: "Written for Akademik Space",
            text: "Lead A: 'The council voted 6-3 to approve the new sports centre on Tuesday.'\n\nLead B: 'After years of waiting, the long-delayed sports centre was finally approved on Tuesday.'",
          },
          stem: "Which lead is more neutral in tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lead A — it gives the vote count and facts" },
              { id: "b", text: "Lead B — it gives more detail" },
              { id: "c", text: "Both are equally neutral" },
              { id: "d", text: "Neither is neutral" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Neutral vs loaded reporting", statement: "Neutral leads give facts; 'long-delayed' and 'finally' add emotional colour." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Lead A is factual (vote count, date); Lead B's 'long-delayed' and 'finally' add positive emphasis — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Lead A — it gives the vote count and facts",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Notice",
            author: "Written for Akademik Space",
            text: "Due to unforeseen circumstances, the school play has been postponed. We apologise for any inconvenience this may cause.",
          },
          stem: "What is the main thing a critical reader notices is missing from this notice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The names of all the actors" },
              { id: "b", text: "The real reason for the postponement and a new date — 'unforeseen circumstances' hides the cause" },
              { id: "c", text: "The ticket prices" },
              { id: "d", text: "The spelling of 'postponed'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Omission", statement: "Vague phrases like 'unforeseen circumstances' hide information the writer chose not to give." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'unforeseen circumstances' is vague — the real reason, new date and ticket details are withheld — readers can't plan — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The real reason and a new date are missing — 'unforeseen circumstances' hides the cause",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Column",
            author: "Written for Akademik Space",
            text: "Everyone knows this town runs on honesty. That's why it's so refreshing to see real leadership finally tackle the problems we've suffered with for years.",
          },
          stem: "Analyse this column for loaded language and generalizations. What is the writer's purpose and what is left unsaid?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded language and generalization", statement: "'Everyone knows' and 'refreshing' reveal the writer's attitude, not neutral facts." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Everyone knows' is a false generalization — it pressures readers to agree without evidence.", evidence: "Everyone knows", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'refreshing', 'real leadership', 'finally' are loaded — they praise one side and imply the previous leadership failed.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the purpose is to build support for the new leadership; unsaid are specific achievements, evidence, or any problems remaining — the column asserts rather than proves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The column uses generalization ('Everyone knows') and loaded praise ('refreshing', 'real leadership') to rally support — it asserts virtue without evidence and leaves out specifics.",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this article about a new sports complex.",
          extract: {
            title: "The Complex",
            author: "Written for Akademik Space",
            text: "The new sports complex opened on Saturday to considerable fanfare, with the mayor cutting the ribbon before a crowd of supporters. 'This is a game-changer for our community,' she said.\n\nHowever, the project ran 18 months behind schedule and $4 million over budget. Taxpayer groups have called for a full accounting of the costs.",
          },
          parts: [
            { label: "a", prompt: "Identify one positive and one negative piece of language.", marks: 2 },
            { label: "b", prompt: "Explain what is left unsaid in the mayor's quote.", marks: 1 },
            { label: "c", prompt: "How does the article balance celebration and criticism?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Framing and balance", statement: "Positive language frames events; later paragraphs may introduce criticism and costs." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): positive — 'considerable fanfare', 'game-changer'; negative — '18 months behind schedule', '$4 million over budget', 'taxpayer groups'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): the contrast shows celebration first, accountability second.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'game-changer' is vague praise — it says nothing about cost, delays or whether it delivers value; the reader must supply the evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the first paragraph celebrates the opening; 'However' pivots to delays, costs and demands for accounting — both sides represented.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the balance lets readers celebrate the achievement while questioning the process — fairer than either extreme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Positive: 'fanfare', 'game-changer'; negative: 'over budget', 'behind schedule'. (b) The quote offers praise without evidence of benefit. (c) Celebration first, then 'However' introduces costs and criticism — balanced.",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Headline Choices",
            author: "Written for Akademik Space",
            text: "Version 1: 'New Skate Park Opens in Riverside Park'\nVersion 2: 'Finally! Skate Park Long Promised by Council Opens'",
          },
          stem: "How many of these two headlines use emotional or loaded language? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded language", statement: "'Finally!' and 'long promised' carry emotion; version 1 is neutral." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): only Version 2 is loaded ('Finally!', 'long promised') — 1 headline.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "An article about a school trip only quotes the teacher organiser praising it. What is the writer most likely omitting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The date of the trip" },
              { id: "b", text: "The students' or parents' views, especially any complaints" },
              { id: "c", text: "The destination" },
              { id: "d", text: "The cost" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Omission and perspective", statement: "One-sided quoting omits the voices of those affected." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): only the organiser is quoted — students' and parents' perspectives (especially critics) are missing — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The students' or parents' views, especially any complaints",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Statement",
            author: "Written for Akademik Space",
            text: "Officials said the new bridge will 'revolutionise' river crossings and 'transform' the local economy, though no figures were provided.",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many evaluative verbs ('revolutionise', 'transform') appear in the quote?", marks: 1 },
            { label: "b", prompt: "How many numerical figures does the sentence provide to support those claims?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Claims without evidence", statement: "Big claims with no figures signal persuasive rather than informative writing." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'revolutionise' and 'transform' — 2 evaluative verbs.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'no figures were provided' — 0 figures support the claims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 (b) 0",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might a writer choose 'residents were consulted' instead of naming who was consulted and what they said?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To save space" },
              { id: "b", text: "Because naming sources would weaken the appearance of support" },
              { id: "c", text: "Because it sounds more formal" },
              { id: "d", text: "Because residents asked not to be named" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Vague sourcing", statement: "Unnamed 'consultation' claims can hide weak or manufactured support." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): vague claims avoid scrutiny — naming sources would reveal whether support was real — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because naming sources would weaken the appearance of support",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two headlines report the same flood: A 'Flood Damage Estimated at $2 Million' vs B 'Devastating Flood Leaves Town in Ruins'. Which is more informative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Headline A — it gives a checkable figure" },
              { id: "b", text: "Headline B — it gives more emotion" },
              { id: "c", text: "Both are equally informative" },
              { id: "d", text: "Neither is informative" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Headline framing", statement: "One headline gives measurable fact; the other uses emotional language to dramatise." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Headline A gives a checkable figure ($2 million); B dramatises with 'devastating' and 'ruins' — A is more informative — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Headline A — it gives a checkable figure",
          },
        },
        {
          id: "mll3-u1-reading-between-lines-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this letter to the editor.",
          extract: {
            title: "Letter to the Editor",
            author: "Written for Akademik Space",
            text: "It is frankly shocking that our beloved town hall is being sold off to developers. Generations of families have gathered in that building. Once it's gone, it's gone forever.",
          },
          parts: [
            { label: "a", prompt: "Identify two pieces of loaded or emotional language.", marks: 2 },
            { label: "b", prompt: "What does 'beloved' and 'frankly shocking' tell you about the writer's stance?", marks: 1 },
            { label: "c", prompt: "What information might balance this letter but is missing?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotive persuasion", statement: "Letters to editors use emotional language to sway opinion; missing facts reveal the bias." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'beloved', 'frankly shocking', 'gone forever' — all carry strong emotion.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'Generations of families' adds nostalgia — an emotional rather than factual appeal.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the writer is firmly opposed — 'shocking' frames the sale as a betrayal, 'beloved' personalises the building.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): missing — the sale price, what the money funds, the developers' plans, and whether the building is actually at risk.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): a balanced view would include the council's reasons and residents who support the sale.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'Beloved', 'frankly shocking', 'gone forever', nostalgia appeal. (b) Writer is firmly opposed and personalising the issue. (c) Missing: price, plans, council's reasons, supporters' views.",
          },
        },
      ],
    },
    {
      id: "mll3-u1-critical-reading",
      title: "Critical reading: bias and perspective",
      skill: "Identify bias, perspective and missing information in non-fiction texts.",
      lesson: {
        sections: [
          {
            heading: "What is bias?",
            body: "**Bias** is a slant — a preference that shapes what's included, excluded or emphasized. No text is completely neutral; the question is how much the bias affects the information. A text can be biased but still accurate.",
          },
          {
            heading: "Spotting bias",
            body: "Look for: **loaded words** ('slashed', 'dumped', 'soared'), **one-sided quotes** (only supporters or only critics), **omissions** (what's missing?), **generalizations** ('everyone knows', 'all residents'), and **emotional appeals**.",
          },
          {
            heading: "Multiple perspectives",
            body: "A complete picture needs **multiple perspectives**. Ask: who isn't quoted? What would the other side say? A story about a new development that only quotes the developer is incomplete — where are the residents' views?",
          },
        ],
        keyFormulas: [
          { name: "Bias checklist", statement: "Loaded words? One-sided quotes? Omissions? Generalizations? Emotional appeals?" },
        ],
        workedExample: {
          problem: "An article about a new skate park only quotes the mayor praising it. What's missing?",
          solution: "The skateboarders' and neighbours' perspectives — especially anyone opposed (noise, safety). The article is biased by omission.",
        },
      },
      questions: [
        {
          id: "mll3-u1-critical-reading-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'bias' in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A mistake in spelling" },
              { id: "b", text: "A slant or preference that shapes the presentation of information" },
              { id: "c", text: "A type of poem" },
              { id: "d", text: "A long paragraph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bias", statement: "Bias is a preference that shapes how information is presented." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): bias = slant/preference in presentation — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A slant or preference that shapes the presentation of information",
          },
        },
        {
          id: "mll3-u1-critical-reading-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Editorial",
            author: "Written for Akademik Space",
            text: "Everyone agrees the new bypass is a disaster. Residents have suffered for years with traffic chaos, and this 'solution' will only make it worse. The council must rethink its approach.",
          },
          stem: "Identify two signs of bias in this editorial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Bias signals", statement: "Generalizations ('everyone agrees') and loaded words ('disaster', 'chaos') reveal bias." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Everyone agrees' is a generalization — not everyone may actually agree.", evidence: "Everyone agrees", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'disaster', 'traffic chaos', 'only make it worse' are loaded negative words — no positive view presented.", evidence: "disaster ... traffic chaos", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Everyone agrees' (generalization) and loaded words 'disaster', 'chaos', 'worse' — one-sided negative presentation.",
          },
        },
        {
          id: "mll3-u1-critical-reading-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Product Review",
            author: "Written for Akademik Space",
            text: "This revolutionary new phone is absolutely stunning! With its cutting-edge camera and lightning-fast processor, it's clearly the best phone ever made. At just $999, it's a steal!",
          },
          stem: "Identify three persuasive/bias techniques in this review and explain what each does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive language", statement: "Superlatives, absolutes and emotional language create bias." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'absolutely stunning', 'clearly the best ever' — superlatives and absolutes leave no room for criticism.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'revolutionary', 'cutting-edge' — buzzwords that sound impressive without specific evidence.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'it's a steal' — emotional/value judgment; no mention of drawbacks or comparisons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Superlatives ('best ever'), buzzwords ('revolutionary', 'cutting-edge'), emotional appeal ('a steal') — persuasive but biased; no balanced view.",
          },
        },
        {
          id: "mll3-u1-critical-reading-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this article.",
          extract: {
            title: "School Lunch Changes",
            author: "Written for Akademik Space",
            text: "Students at Ridgeview School are thrilled with the new lunch menu, which features more fresh fruit and vegetables. 'It's so much better than before,' said Year 9 student Aisha.\n\nHowever, some parents worry about the cost. The school says the changes are funded by a government grant and denies any plans to raise meal prices.",
          },
          parts: [
            { label: "a", prompt: "Identify which perspective gets more space in this article.", marks: 1 },
            { label: "b", prompt: "Explain how the writer balances the two perspectives.", marks: 2 },
            { label: "c", prompt: "What question would you ask to check if the article is fair?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Perspective and balance", statement: "Fair reporting gives space to multiple views; checking means asking what's missing." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the positive view (students' delight, healthier menu) gets more space — 'thrilled', detailed quote, 'more fresh fruit'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'However' introduces the opposing view — parents' cost worry and the school's denial.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the school gets to respond ('funded by grant', 'denies plans to raise prices') — but parents' concerns are less developed.", evidence: "However, some parents worry", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): e.g. 'Are there students or parents who dislike the new menu? What do nutritionists say?' — checking for missing perspectives.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): a critical reader looks for voices not included and verifies claims independently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Positive/student view gets more space. (b) 'However' balances with parents' concerns and school's response, but opposition is thinner. (c) Ask about missing perspectives and verify claims.",
          },
        },
        {
          id: "mll3-u1-critical-reading-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'omission' in a biased text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A spelling mistake" },
              { id: "b", text: "Information left out that would change the picture" },
              { id: "c", text: "A very long paragraph" },
              { id: "d", text: "A quotation from an expert" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Omission", statement: "Leaving out information that would change the picture." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): omission = leaving out information that would change the picture — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Information left out that would change the picture",
          },
        },
        {
          id: "mll3-u1-critical-reading-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a sign of bias in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It gives the date of the event" },
              { id: "b", text: "It only quotes people who support one side" },
              { id: "c", text: "It uses short sentences" },
              { id: "d", text: "It has a headline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "One-sided quoting", statement: "Quoting only supporters or only critics reveals bias." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): one-sided quotes are a classic bias signal — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It only quotes people who support one side",
          },
        },
        {
          id: "mll3-u1-critical-reading-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Article",
            author: "Written for Akademik Space",
            text: "The new supermarket is 'an absolute disgrace' to the high street, one trader said, claiming it 'destroys small businesses overnight'.",
          },
          stem: "What does the phrase 'destroys small businesses overnight' tell you about the source's perspective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The source is neutral" },
              { id: "b", text: "The source is strongly opposed to the supermarket" },
              { id: "c", text: "The source works for the supermarket" },
              { id: "d", text: "The source is describing a fact" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded language", statement: "'Disgrace' and 'destroys' show strong opposition — this is a stakeholder's view, not neutral fact." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'disgrace', 'destroys', 'overnight' are loaded — the source is strongly opposed — (b).", evidence: "destroys small businesses overnight", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The source is strongly opposed to the supermarket",
          },
        },
        {
          id: "mll3-u1-critical-reading-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            text: "The charity says its new program has helped 'thousands of families', though it declined to provide specific figures when asked.",
          },
          stem: "Why should a critical reader be suspicious of the claim 'thousands of families'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because 'thousands' is always false" },
              { id: "b", text: "Because the number is vague and unverifiable, and the charity refused to give figures" },
              { id: "c", text: "Because charities never help anyone" },
              { id: "d", text: "Because the sentence is too long" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Vague claims", statement: "Rounding up to 'thousands' and refusing figures signals unverifiable persuasion." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'thousands' is unverifiable — it could mean 2,000 or 200,000 — and refusing figures is a red flag — (b).", evidence: "thousands of families", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The number is vague and unverifiable, and the charity refused to give figures",
          },
        },
        {
          id: "mll3-u1-critical-reading-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Review Site",
            author: "Written for Akademik Space",
            text: "This is hands-down the best laptop on the market. Nothing else comes close. If you're reading this and haven't bought it yet, you're simply missing out.",
          },
          stem: "Identify three techniques that reveal this review's bias or persuasive intent, and explain what each does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive bias", statement: "Superlatives, absolutes and pressure tactics reveal a biased or promotional review." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'hands-down the best', 'nothing else comes close' — superlatives and absolutes leave no room for comparison or criticism.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'you're simply missing out' pressures the reader — an emotional appeal rather than evidence.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): there are no drawbacks, comparisons or criteria — the review tells you what to feel, not how it was judged; it reads as promotion, not evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Superlatives ('best on the market'), absolutes ('nothing comes close'), pressure ('you're missing out'), and zero evidence — a biased/promotional review.",
          },
        },
        {
          id: "mll3-u1-critical-reading-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this article about a proposed housing development.",
          extract: {
            title: "New Homes Planned",
            author: "Written for Akademik Space",
            text: "Developer Greenfield Estates has proposed 400 new homes on the former Green Meadows site. The company says the development will bring 'much-needed' housing and 'hundreds of jobs'.\n\nLocal residents, however, have launched a petition citing loss of green space and increased traffic. 'We support growth, but not at any cost,' said petition organiser Maria Chen.",
          },
          parts: [
            { label: "a", prompt: "Identify which voices are given space in this article.", marks: 1 },
            { label: "b", prompt: "Explain how the writer balances the developer's and residents' views.", marks: 2 },
            { label: "c", prompt: "What perspective is still missing from this article?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Multiple perspectives", statement: "Fair reporting includes competing voices; missing voices reveal the limits of balance." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the developer (Greenfield) and residents (petition organiser Maria Chen) are quoted — two sides represented.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'however' pivots from the developer's claims to residents' opposition — the writer gives each side a voice.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): residents' view is softened by 'We support growth, but not at any cost' — showing nuance rather than pure opposition.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): missing — the council's position, environmental experts' views, and future residents who might benefit.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): also missing is evidence for claims like 'much-needed' and 'hundreds of jobs' — figures would test both sides.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Developer and residents quoted. (b) 'However' pivots; residents' quote shows nuance. (c) Missing: council, experts, beneficiaries, and evidence for both sides' claims.",
          },
        },
        {
          id: "mll3-u1-critical-reading-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Two Leads",
            author: "Written for Akademik Space",
            text: "Lead A: 'The school council approved the new uniform policy on Monday.'\nLead B: 'Parents were shocked to learn the school council has imposed a controversial new uniform policy.'",
          },
          stem: "How many of these two leads contain loaded or emotional language? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Loaded language", statement: "'Shocked', 'imposed' and 'controversial' are emotional; Lead A is neutral." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): only Lead B is loaded — 1 lead.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "mll3-u1-critical-reading-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A review of a restaurant says 'the food was okay, I guess' but gives it five stars. What should a critical reader notice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The reviewer is very honest" },
              { id: "b", text: "The rating contradicts the lukewarm description — something may be influencing the score" },
              { id: "c", text: "Five stars is always correct" },
              { id: "d", text: "The review is too short to judge" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Internal consistency", statement: "When language and ratings contradict, the review's reliability is questionable." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'okay, I guess' contradicts five stars — possible bias, sponsorship or error — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The rating contradicts the lukewarm description — something may be influencing the score",
          },
        },
        {
          id: "mll3-u1-critical-reading-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Statement",
            author: "Written for Akademik Space",
            text: "The survey found that 8 out of 10 residents support the plan, according to the developer's own research team.",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "What fraction of residents does the survey claim support the plan?", marks: 1 },
            { label: "b", prompt: "How many residents were actually surveyed, according to the text?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.8 },
              { label: "b", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sourcing and sample size", statement: "A survey by the interested party with no sample size given is hard to trust." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 8 out of 10 = 0.8 or 80%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the text gives no number surveyed — answer 0 (none stated).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.8 (b) 0 — no sample size is given, a critical reader would ask",
          },
        },
        {
          id: "mll3-u1-critical-reading-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A news article about a new policy quotes only the minister announcing it and no critics. What is the main bias?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is biased by omission — critics' perspectives are missing" },
              { id: "b", text: "It is biased because it is too short" },
              { id: "c", text: "It is biased because it uses formal language" },
              { id: "d", text: "It is not biased at all" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Bias by omission", statement: "Quoting only supporters while omitting critics creates a one-sided picture." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): only the minister is quoted — critics omitted — bias by omission — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It is biased by omission — critics' perspectives are missing",
          },
        },
        {
          id: "mll3-u1-critical-reading-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two reviews of the same book: Review A describes the plot and balances strengths and weaknesses; Review B says only 'A masterpiece! Buy it now!' Which is more credible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Review A — balanced evaluation seems more trustworthy" },
              { id: "b", text: "Review B — praise is always better" },
              { id: "c", text: "Both are equally credible" },
              { id: "d", text: "Neither is credible" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Credibility through balance", statement: "Reviews that weigh strengths and weaknesses with evidence seem more trustworthy than pure praise." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Review A balances praise and criticism — genuine evaluation; Review B is pure promotion — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Review A — balanced evaluation seems more trustworthy",
          },
        },
        {
          id: "mll3-u1-critical-reading-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this article about exam results.",
          extract: {
            title: "Exam Results Rise",
            author: "Written for Akademik Space",
            text: "Ridgeview School's exam results have 'soared' this year, with pass rates up by 12%. Head teacher Dr Lane credited the new tutoring program, calling it 'transformative'.\n\nHowever, critics note the improvement coincides with a smaller, more selective cohort — and that the tutoring program cost $50,000, funded by a parent donation drive.",
          },
          parts: [
            { label: "a", prompt: "Identify one loaded word or phrase and explain its effect.", marks: 1 },
            { label: "b", prompt: "What alternative explanation for the rise do the critics offer?", marks: 1 },
            { label: "c", prompt: "Evaluate whether the article presents a balanced picture of the results.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balance and alternative explanations", statement: "Fair analysis considers competing explanations for the same result." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'soared' and 'transformative' are loaded — they celebrate the result before evidence is weighed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): critics suggest the rise may be due to a smaller, more selective cohort — not the tutoring program.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the article gives both the school's claim and critics' counter — better than one-sided reporting.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): but the positive framing ('soared', 'transformative') gets more space and emotional language than the skeptical view.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): a fully balanced article would investigate whether the cohort explanation holds and who funded what — it gestures at balance without resolving it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'Soared'/'transformative' — celebratory loading. (b) Smaller, more selective cohort may explain the rise. (c) Partially balanced — both sides appear, but positive framing dominates and the key question is left open.",
          },
        },
      ],
    },
  ],
};
