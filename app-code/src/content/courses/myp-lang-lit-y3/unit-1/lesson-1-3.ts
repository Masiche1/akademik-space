import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mll3-u1-lesson-1-3",
  code: "1-3",
  title: "Reading Different Text Types",
  goal: "I CAN identify how different non-literary text types (article, speech, review, letter) are structured and how structure serves purpose.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion B: Organizing",
  ],
  vocabulary: [
    { term: "Text type", definition: "A form defined by purpose and structure — article, speech, review, letter, report." },
    { term: "Structure", definition: "The way a text is organized — its sections, order and layout." },
    { term: "Headline", definition: "The title of a news article, designed to grab attention and summarize." },
    { term: "Subheading", definition: "A smaller heading within an article that organizes sections." },
    { term: "Conclusion", definition: "The ending section that sums up or gives a final judgment." },
  ],
  concepts: [
    {
      id: "mll3-u1-text-types-structure",
      title: "Text types and structure",
      skill: "Identify how articles, speeches, reviews and reports are structured for their purpose.",
      lesson: {
        sections: [
          {
            heading: "Articles",
            body: "**News articles** follow a structure: **headline** (hook), **byline** (who wrote it), **lead paragraph** (who/what/when/where/why — the most important facts first), then **body paragraphs** with details and quotes, and sometimes a **conclusion**. This is called the **inverted pyramid** — most important first.",
          },
          {
            heading: "Speeches",
            body: "**Speeches** are built to be **heard**. They use repetition, rhetorical questions, direct address ('you', 'we'), pauses, and a clear beginning-middle-end. The structure builds toward a call to action or emotional climax.",
          },
          {
            heading: "Reviews",
            body: "**Reviews** evaluate something — a film, book, restaurant, product. They usually describe first (what it is), then evaluate (what's good/bad), then conclude with a recommendation. The structure guides the reader from facts to judgment.",
          },
        ],
        keyFormulas: [
          { name: "Structure serves purpose", statement: "Articles inform quickly (inverted pyramid); speeches persuade (build to climax); reviews guide judgment (facts → evaluation → verdict)." },
        ],
        workedExample: {
          problem: "Why does a news article put the most important facts in the first paragraph?",
          solution: "Because readers may stop reading — the inverted pyramid ensures they get the key facts even if they only read the lead.",
        },
      },
      questions: [
        {
          id: "mll3-u1-text-types-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'inverted pyramid' in journalism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of headline" },
              { id: "b", text: "Most important facts first, then decreasing detail" },
              { id: "c", text: "A pyramid-shaped building" },
              { id: "d", text: "A pyramid scheme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inverted pyramid", statement: "News articles put key facts first, then supporting detail." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): inverted pyramid = important facts first — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Most important facts first, then decreasing detail",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Article Opening",
            author: "Written for Akademik Space",
            text: "FIRE DESTROYS DOWNTOWN SHOP. The blaze, which started at 3am Tuesday, destroyed Miller's Bookshop on High Street. No injuries were reported. Firefighters contained the fire by 5am.",
          },
          stem: "What information does the first paragraph give, and why is it placed first?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "News lead", statement: "The lead paragraph answers who/what/when/where/why — the key facts." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the lead gives what (fire destroyed shop), when (3am Tuesday), where (High Street), and outcome (no injuries, contained by 5am).", marks: 1, markCode: "A" },
              { reasoning: "Criterion B (Organizing): it's first because these are the most important facts — readers get the essentials even if they stop reading.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The lead gives the key facts (what, when, where, outcome) first — the inverted pyramid puts essentials before detail.",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "My fellow students, I stand before you today not as a graduate, but as a friend. We came here together. We struggled together. And today, we leave together — not as strangers, but as a family.",
          },
          stem: "Explain how the speech's structure builds toward its emotional climax.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Speech structure", statement: "Speeches build through repetition and direct address toward an emotional peak." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): it opens with direct address ('My fellow students') and personal framing ('as a friend').", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): repetition of 'together' ('came here together', 'struggled together', 'leave together') builds unity and momentum.", evidence: "together", marks: 1, markCode: "B" },
              { reasoning: "Criterion A (Analysing): the climax 'not as strangers, but as a family' delivers the emotional payoff — shared identity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Direct address → shared experience ('together') → emotional climax ('family') — the structure builds unity toward a memorable ending.",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this film review.",
          extract: {
            title: "Review: The Last Journey",
            author: "Written for Akademik Space",
            text: "The Last Journey follows an elderly sailor's final voyage across the sea. The cinematography is stunning — every frame looks like a painting. The story, however, is predictable, and the ending feels rushed.\n\nDespite its flaws, the film is worth seeing for the visuals alone. Recommended for fans of slow, beautiful cinema.",
          },
          parts: [
            { label: "a", prompt: "Identify the review's structure (what comes first, middle, end).", marks: 2 },
            { label: "b", prompt: "Explain how the structure guides the reader to a verdict.", marks: 2 },
            { label: "c", prompt: "What does 'Recommended for fans of slow, beautiful cinema' tell you about the audience?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review structure", statement: "Reviews describe → evaluate → recommend, guiding readers to a verdict." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): description first (plot, visuals), then evaluation (predictable story, rushed ending), then recommendation ('worth seeing').", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): the 'however' and 'Despite its flaws' signal the evaluative turn.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): the structure lets readers weigh pros and cons before the verdict — fair and guided.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): ending with a specific recommendation ('slow, beautiful cinema') targets the right audience rather than a blanket verdict.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the audience is art-house/slow-cinema fans — the reviewer knows who will appreciate it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Describe → evaluate → recommend. (b) Pros/cons before verdict guides fair judgment. (c) Slow-cinema/art-house fans.",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which text type is designed to be heard aloud and build toward a climax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A speech" },
              { id: "b", text: "A dictionary entry" },
              { id: "c", text: "A timetable" },
              { id: "d", text: "A set of instructions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speech conventions", statement: "Speeches use direct address, repetition and build to an emotional or persuasive climax." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): speeches are built to be heard and build toward a climax — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A speech",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the typical order of a film or book review?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quotes only" },
              { id: "b", text: "Verdict first, then description" },
              { id: "c", text: "Description, then evaluation, then verdict" },
              { id: "d", text: "Only opinions, no description" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Review structure", statement: "Reviews describe the work, evaluate it, then give a verdict." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): describe → evaluate → verdict is the review arc — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Description, then evaluation, then verdict",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Opening",
            author: "Written for Akademik Space",
            text: "My fellow students — when I first walked through these gates, I was terrified. Today, I stand before you not as a graduate, but as someone who never stopped believing in this school.",
          },
          stem: "Which feature shows this is a speech rather than an article?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It gives statistics" },
              { id: "b", text: "It uses direct address ('My fellow students')" },
              { id: "c", text: "It is printed in a newspaper" },
              { id: "d", text: "It has a headline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speech conventions", statement: "Speeches address the audience directly ('you', 'we', 'my fellow students')." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'My fellow students' is direct address — a speech convention — (a).", evidence: "My fellow students", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It uses direct address ('My fellow students')",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Notice",
            author: "Written for Akademik Space",
            text: "REMINDER: The school library will be closed this Friday for stocktaking. Normal hours resume Monday. We apologise for any inconvenience.",
          },
          stem: "Which statement best describes how this notice is structured?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It gives the key fact first — closure, reason and date — then the resumption and apology" },
              { id: "b", text: "It argues a persuasive case in paragraphs" },
              { id: "c", text: "It builds slowly to a surprising ending" },
              { id: "d", text: "It lists all library books alphabetically" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Notice conventions", statement: "Notices state the key fact first, then the detail and apology — no wasted words." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): the essential information (closure, reason, Friday) comes first, then resumption and apology — quick, efficient — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Key fact first — closure, reason and date — then resumption and apology",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Report Opening",
            author: "Written for Akademik Space",
            text: "Executive Summary: This report examines the school's canteen service over the autumn term. It presents findings on food quality, pricing and student satisfaction, based on a survey of 120 students and interviews with catering staff.",
          },
          stem: "Explain how this opening paragraph is structured for its purpose, and what it tells the reader about the rest of the report.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report conventions", statement: "Reports open with purpose and scope — what will be examined and how." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): the 'Executive Summary' label signals formal report conventions — sections, findings, conclusions.", marks: 1, markCode: "B" },
              { reasoning: "Criterion A (Analysing): it states the subject (canteen service), the time frame (autumn term) and the topics (quality, pricing, satisfaction) — the scope.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): it reveals the method (survey of 120, interviews) — readers know the evidence base before the findings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The opening states purpose, scope and method — it tells readers the report will examine canteen quality, pricing and satisfaction using survey and interview evidence.",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this obituary.",
          extract: {
            title: "Obituary",
            author: "Written for Akademik Space",
            text: "Margaret Ellis, who taught English at Ridgeview for thirty-one years, died peacefully on Sunday. Colleagues remember her fierce loyalty, her legendary marking, and the Friday assemblies she never missed. She is survived by two daughters and four grandchildren.",
          },
          parts: [
            { label: "a", prompt: "Identify the obituary's structure — what comes first, middle and end.", marks: 2 },
            { label: "b", prompt: "Explain how this structure honours the deceased.", marks: 2 },
            { label: "c", prompt: "What would be lost if the personal details were moved before the facts?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Obituary conventions", statement: "Obituaries give essential facts (death, identity) first, then tribute, then survivors." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): facts first (who she was, when she died), tribute middle (loyalty, marking, assemblies), survivors end.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): the tribute uses specific memorable details — 'legendary marking', 'never missed' — not generic praise.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): facts-first establishes who she was objectively; specific memories make the tribute feel earned and personal.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): ending with survivors returns to family and community — a complete arc from fact to legacy.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): readers would lose the essential news (who died, when) — the tribute would obscure the announcement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Facts → tribute → survivors. (b) Facts establish identity; specific memories personalise the tribute. (c) Moving tribute first would bury the essential news.",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Four Texts",
            author: "Written for Akademik Space",
            text: "1. A news article about a fire\n2. A wedding speech\n3. A recipe\n4. A film review",
          },
          stem: "How many of these four texts use the inverted pyramid (most important facts first)? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inverted pyramid", statement: "Only news articles use the inverted pyramid — speeches, recipes and reviews have their own structures." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): only the news article uses the inverted pyramid — 1 text.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A review ends with 'See it if you love slow cinema — skip it if you want a fast-paced thriller.' What does this verdict do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It targets a specific audience rather than a universal verdict" },
              { id: "b", text: "It repeats the review's title" },
              { id: "c", text: "It gives a blanket recommendation to everyone" },
              { id: "d", text: "It avoids giving any opinion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Targeted verdict", statement: "Good reviews recommend to specific audiences — 'fans of X' rather than 'everyone'." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the verdict addresses specific viewers (slow-cinema fans vs thriller fans) — targeted — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It targets a specific audience rather than a universal verdict",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            text: "FINDINGS: 1. Participation rose 15%. 2. Costs fell 8%. 3. Student satisfaction improved. RECOMMENDATIONS: Continue the program; expand to Year 10.",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many findings are listed in the report?", marks: 1 },
            { label: "b", prompt: "How many recommendations are listed?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report sections", statement: "Reports separate findings (evidence) from recommendations (action)." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): three numbered findings — 3.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): two recommendations ('Continue', 'expand') — 2.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3 (b) 2",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does a recipe list ingredients before the method?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because the cook needs to know what to gather before starting — structure follows order of use" },
              { id: "b", text: "Because ingredients are more important than steps" },
              { id: "c", text: "Because ingredients come alphabetically" },
              { id: "d", text: "Because recipes are always short" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose shapes structure", statement: "A recipe's structure follows the practical order of use — gather, then cook." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): ingredients-first matches the cook's needs — gather before cooking — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Because the cook needs to know what to gather before starting — structure follows order of use",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A news article about a school play would most likely use which structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inverted pyramid — most important facts first" },
              { id: "b", text: "A stream of consciousness" },
              { id: "c", text: "A cast and crew list" },
              { id: "d", text: "Describe → evaluate → verdict" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Text type and structure", statement: "News articles use the inverted pyramid; reviews use describe-evaluate-verdict." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): a news article informs quickly — facts first via the inverted pyramid — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Inverted pyramid — most important facts first",
          },
        },
        {
          id: "mll3-u1-text-types-structure-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write the headline for a news article about a library reopening.", marks: 1 },
            { label: "b", prompt: "Write the lead paragraph (who/what/when/where).", marks: 2 },
            { label: "c", prompt: "Write one sentence of a review's evaluation section for the library.", marks: 1 },
            { label: "d", prompt: "Explain how the article and review structures differ.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Text type conventions", statement: "Articles inform with facts-first structure; reviews guide judgment with describe-evaluate-verdict." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a factual headline, e.g. 'Central Library Reopens After Renovation'.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion B (Organizing): lead gives who (library), what (reopened), when, where — key facts first.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D (Using language): clear, factual wording.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C (Producing text): an evaluative sentence, e.g. 'The new quiet zones are excellent, though the café is small.'", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion A (Analysing): article = inverted pyramid facts; review = describe → evaluate → verdict — judgment versus information.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Factual headline. (b) Lead with key facts. (c) Evaluative sentence. (d) Article informs factually; review guides judgment.",
          },
        },
      ],
    },
    {
      id: "mll3-u1-text-types-purpose",
      title: "Purpose shapes structure",
      skill: "Explain how a text's purpose determines its structure and language choices.",
      lesson: {
        sections: [
          {
            heading: "Purpose → structure",
            body: "A text's **purpose** dictates its **structure**. A **news report** must inform quickly — facts first. A **speech** must persuade — build to climax. A **review** must guide judgment — facts then opinion. The structure is the skeleton that serves the purpose.",
          },
          {
            heading: "Same content, different structure",
            body: "The same information can be structured differently for different purposes. 'The library opens at 9am' could be a **notice** (just the fact), an **advertisement** ('Start your day with knowledge!'), or a **review** ('This library has the best quiet corners'). Same content, different shape.",
          },
          {
            heading: "Analyzing structure",
            body: "When analyzing a text, ask: **why is it organized this way?** What would happen if the order changed? A story that reveals the ending first creates suspense; a report that buries the key fact fails its purpose.",
          },
        ],
        keyFormulas: [
          { name: "Purpose → structure", statement: "Inform → facts first; persuade → build to climax; review → facts then judgment." },
        ],
        workedExample: {
          problem: "Why would a recipe put ingredients before method?",
          solution: "Because the purpose is to inform/cook — you need ingredients listed before steps. Structure follows the logical order of use.",
        },
      },
      questions: [
        {
          id: "mll3-u1-text-types-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which text type is most likely to build toward an emotional climax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A recipe" },
              { id: "b", text: "A news report" },
              { id: "c", text: "A speech" },
              { id: "d", text: "A dictionary entry" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Structure and purpose", statement: "Speeches build emotionally; reports inform factually." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): speeches build to climax — (c).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A speech",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a news report and an advertisement about the same product would be structured differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose shapes structure", statement: "Reports inform objectively; ads persuade emotionally — different structures serve different goals." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): a report uses inverted pyramid — facts, prices, specs first; an ad uses hook → benefits → call to action.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B (Organizing): the structures differ because purposes differ — inform objectively vs persuade emotionally.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A report leads with facts (inverted pyramid); an ad hooks, lists benefits and ends with a call to action — structure follows purpose.",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A writer wants to persuade people to join a school club. Explain three structural choices they should make and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive structure", statement: "Persuasive texts hook → build case → call to action." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): start with a hook — a question, surprising fact or direct address to grab attention.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): build the case — list benefits, use evidence, address possible objections.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): end with a clear call to action — 'Join us this Friday!' — telling readers exactly what to do.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Hook → benefits/evidence → call to action — a persuasive structure that moves readers from attention to action.",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write the headline for a news report about a school winning a prize.", marks: 1 },
            { label: "b", prompt: "Write the opening line of an advertisement for the same event.", marks: 1 },
            { label: "c", prompt: "Explain how the headline and ad line serve different purposes.", marks: 2 },
            { label: "d", prompt: "What would the lead paragraph of the news report contain?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Text type conventions", statement: "News headlines inform; ad lines persuade; report leads give key facts." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a factual headline, e.g. 'Ridgeview School Wins Regional Science Prize'.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C (Producing text): a persuasive opening, e.g. 'Our school is the best — and you can be part of it!'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): headline informs neutrally (who/what); ad line persuades emotionally (pride, invitation).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion B (Organizing): different text types use different language — factual vs emotive.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B (Organizing): lead gives who (Ridgeview), what (won prize), when, where — key facts first.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 'Ridgeview School Wins Regional Science Prize'. (b) e.g. 'Our school is the best!' (c) Headline informs; ad persuades. (d) Who/what/when/where first.",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A text's purpose most directly determines its...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of pages" },
              { id: "b", text: "Structure and language choices" },
              { id: "c", text: "Font size" },
              { id: "d", text: "Author's age" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose shapes structure", statement: "A text's purpose dictates how it is organised and how it uses language." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): purpose determines structure and language — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Structure and language choices",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which text type would most likely end with a call to action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An advertisement" },
              { id: "b", text: "A dictionary entry" },
              { id: "c", text: "A train timetable" },
              { id: "d", text: "A news report" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Persuasive structure", statement: "Ads and speeches end with calls to action; reports end with facts." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): advertisements persuade — they end with 'Buy now', 'Join us' — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An advertisement",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Three Versions",
            author: "Written for Akademik Space",
            text: "Notice: 'The pool closes at 6pm on Sunday.'\n\nAd: 'Splash into summer — our heated pool awaits! Book your lane today!'\n\nReport: 'The pool recorded 340 visits last month, up 20% on last year.'",
          },
          stem: "Which version is structured to persuade rather than inform?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ad" },
              { id: "b", text: "All three equally" },
              { id: "c", text: "The notice" },
              { id: "d", text: "The report" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Text type and purpose", statement: "The ad uses emotive language and a call to action; notice and report inform." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the ad's 'Splash into summer', 'awaits', 'Book today' persuades — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The ad",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why would an advertisement present 'the new bridge opens Monday' differently from a news report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because the ad's purpose is to persuade — it would dramatise the benefit and call readers to action" },
              { id: "b", text: "Because advertisements must use more accurate facts" },
              { id: "c", text: "There would be no difference" },
              { id: "d", text: "Because news reports are always shorter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose shapes structure", statement: "Each text type frames the same fact for its purpose — inform, update, or persuade." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the ad persuades — it dramatizes the benefit and adds a call to action; the report stays factual — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The ad's purpose is to persuade — it dramatizes the benefit and calls readers to action",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "Dear Mrs Alvarez,\n\nI am writing to ask whether Year 10 students may use the library computers during lunch break. Three of us have a group project due Friday and the computer room is always full after school.\n\nThank you for your time.\n\nSam Chen, Year 10B",
          },
          stem: "Explain how this letter's structure serves its purpose, and what would change if it were a complaint letter instead.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter conventions", statement: "Letters follow purpose — a request is polite and clear; a complaint is firm and evidence-based." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): the letter opens with the request stated clearly, gives reasons (group project, full computer room), and closes politely — structure matches a request's purpose.", marks: 1, markCode: "B" },
              { reasoning: "Criterion A (Analysing): a complaint would be firmer — it would cite rules broken, dates, and demand action, rather than asking politely.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): the polite tone ('I am writing to ask', 'Thank you for your time') suits a request; a complaint would use more direct, insistent language.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "The letter states the request, gives reasons and closes politely — suited to asking. A complaint would be firmer, cite rules/dates and demand resolution.",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a headline for a news report about a new bike-share scheme.", marks: 1 },
            { label: "b", prompt: "Write an opening line for an advertisement for the same scheme.", marks: 1 },
            { label: "c", prompt: "Explain how the headline and ad line serve different purposes.", marks: 2 },
            { label: "d", prompt: "What structural feature would a report about the scheme include that an ad would not?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Text type conventions", statement: "News headlines inform neutrally; ads persuade with emotion and calls to action; reports give evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a factual headline, e.g. 'Bike-Share Scheme Launches Downtown'.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C (Producing text): a persuasive line, e.g. 'Ditch the traffic — ride free this summer!'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): the headline informs — who/what/where; the ad line persuades — 'ditch the traffic', 'ride free' promise benefits.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion B (Organizing): different purposes need different language — factual vs emotive.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion A (Analysing): a report would include evidence — cost, usage figures, dates — that an ad omits because it would slow the pitch.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Factual headline. (b) Persuasive line. (c) Headline informs; ad persuades with benefits. (d) A report includes evidence/figures an ad omits.",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Three Purposes",
            author: "Written for Akademik Space",
            text: "Text 1: inform readers about a road closure\nText 2: persuade readers to buy a product\nText 3: guide readers to a verdict on a film",
          },
          stem: "How many of these purposes would most likely use a build-to-climax structure? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose shapes structure", statement: "Persuasive purposes (Text 2) build to a climax/call to action; informing and reviewing have their own arcs." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): only persuading (Text 2) builds to a climax — 1 purpose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why would an author choose a speech structure (hook → build → climax) for a wedding toast instead of a report structure (facts first)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because reports cannot be spoken" },
              { id: "b", text: "Because speeches are always shorter" },
              { id: "c", text: "Because the purpose is to entertain and move listeners emotionally, not just inform them" },
              { id: "d", text: "Because toasts have no structure" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose shapes structure", statement: "A toast's purpose is emotional engagement — it needs a building, climactic structure." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): the toast aims to entertain/move — emotional purpose needs build-to-climax — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Because the purpose is to entertain and move listeners emotionally, not just inform them",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            text: "Message 1 (to students): 'Library closed Friday for stocktake — use the online catalogue.'\nMessage 2 (to donors): 'Your generosity keeps our doors open — please give again this year.'",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many messages primarily inform?", marks: 1 },
            { label: "b", prompt: "How many messages primarily persuade?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose shapes language", statement: "Informing messages are factual; persuading messages use emotion and calls to action." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Message 1 informs (closure + alternative) — 1.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Message 2 persuades (emotional appeal + 'please give') — 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 (b) 1",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If a news report buried its key fact (the school won the prize) in the last paragraph, what would happen to its effectiveness?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing would change" },
              { id: "b", text: "Most readers would miss the key fact — the report would fail its purpose" },
              { id: "c", text: "It would become a review" },
              { id: "d", text: "It would be more suspenseful" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverted pyramid", statement: "Key facts must come first — burying them defeats the report's purpose." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): burying the key fact means most readers miss it — the report fails — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Most readers would miss the key fact — the report would fail its purpose",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A writer wants to warn students about exam stress. Which text type best suits this purpose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A timetable" },
              { id: "b", text: "A dictionary entry" },
              { id: "c", text: "A report — it is always more factual" },
              { id: "d", text: "A speech — it can build emotional momentum and end with advice" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose shapes structure", statement: "To warn and persuade, a speech's emotional, building structure fits better than a neutral report." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): a speech can build emotional momentum, use direct address and end with advice — best for warning students — (a).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A speech — it can build emotional momentum and end with advice",
          },
        },
        {
          id: "mll3-u1-text-types-purpose-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage and answer all parts.",
          extract: {
            title: "Two Texts",
            author: "Written for Akademik Space",
            text: "Text A: 'The recycling program collected 2 tonnes of paper last month, a 15% increase on the previous month, according to school records.'\n\nText B: 'Every bottle you recycle is a vote for the planet our children will inherit. Join the green team today!'",
          },
          parts: [
            { label: "a", prompt: "Identify each text's purpose.", marks: 1 },
            { label: "b", prompt: "Explain how each text's structure and language serve its purpose.", marks: 3 },
            { label: "c", prompt: "What would happen if Text B used Text A's structure instead?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose shapes structure", statement: "Informing texts lead with facts; persuading texts lead with emotion and end with action." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Text A informs (recycling figures); Text B persuades (join the green team).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion B (Organizing): Text A leads with measurable facts (tonnes, percentage) — inverted-pyramid informing.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D (Using language): Text B uses emotive language ('vote for the planet', 'children will inherit') and a direct call to action.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): each structure serves its purpose — facts for informing, emotion + action for persuading.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): Text B would lose its persuasive force — flat facts wouldn't move readers to join; structure and purpose are linked.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A = inform, B = persuade. (b) A: facts-first; B: emotion + call to action. (c) B would lose persuasive force — flat facts don't move readers.",
          },
        },
      ],
    },
  ],
};
