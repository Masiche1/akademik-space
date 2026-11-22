import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mll3-u3-lesson-3-1",
  code: "3-1",
  title: "Writing Articles and Reports",
  goal: "I CAN write a clear news-style article or report with a headline, lead paragraph and organized body.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Article", definition: "A piece of writing reporting news or information for a publication." },
    { term: "Headline", definition: "A short title summarizing the article's main point." },
    { term: "Lead paragraph", definition: "The first paragraph answering who/what/when/where/why." },
    { term: "Inverted pyramid", definition: "News structure — most important facts first, then supporting detail." },
    { term: "Attribution", definition: "Crediting information to a source — 'said the mayor', 'according to officials'." },
  ],
  concepts: [
    {
      id: "mll3-u3-article-structure",
      title: "Article structure",
      skill: "Write articles with headline, lead, body and quotes using the inverted pyramid.",
      lesson: {
        sections: [
          {
            heading: "Headline and lead",
            body: "The **headline** grabs attention and summarizes: 'School Wins Regional Debate'. The **lead paragraph** (first paragraph) answers the key questions — **who, what, when, where, why** — in one or two sentences. This is the most important part.",
          },
          {
            heading: "Body paragraphs",
            body: "After the lead, add **supporting detail** in order of decreasing importance: quotes from people involved, statistics, background, context. Use **attribution** — 'said the principal', 'according to students' — to show where information comes from.",
          },
          {
            heading: "The inverted pyramid",
            body: "Put the **most important** information **first**, then less important details. If a reader stops early, they still got the key facts. This is the **inverted pyramid** — wide at top (important), narrow at bottom (extra detail).",
          },
        ],
        keyFormulas: [
          { name: "Article structure", statement: "Headline → Lead (who/what/when/where/why) → Body (detail, quotes, context) → optional conclusion." },
        ],
        workedExample: {
          problem: "Write the lead for an article about a new skate park opening.",
          solution: "'The new skate park on Elm Street opened to the public on Saturday, drawing a crowd of over 200 skateboarders and residents.'",
        },
      },
      questions: [
        {
          id: "mll3-u3-article-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a news article's lead paragraph contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author's opinion" },
              { id: "b", text: "Only a quote from a witness" },
              { id: "c", text: "Who, what, when, where and why — the key facts" },
              { id: "d", text: "All the background detail" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "News lead", statement: "The lead answers who/what/when/where/why with key facts." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): lead = key facts first — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Who, what, when, where and why — the key facts",
          },
        },
        {
          id: "mll3-u3-article-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a headline and lead paragraph for a news article about a school winning a science competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Headline and lead", statement: "Headline summarizes; lead gives who/what/when/where/why." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): a headline such as 'Ridgeview School Wins National Science Fair'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B (Organizing): lead gives who (Ridgeview students), what (won science fair), when, where — key facts first.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Headline: 'Ridgeview School Wins National Science Fair'. Lead: 'Ridgeview School students won the national science competition on Friday, defeating 30 other schools.'",
          },
        },
        {
          id: "mll3-u3-article-structure-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why news articles use the 'inverted pyramid' structure and what happens if the most important information is buried at the end.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverted pyramid", statement: "Important facts first ensures readers get essentials even if they stop reading." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): readers may only read the first paragraph — the pyramid guarantees they get the key facts.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): editors can cut from the bottom without losing essential information — the article stays coherent.", marks: 1, markCode: "B" },
              { reasoning: "Criterion A (Analysing): if the key fact is at the end, readers who stop early miss it — the article fails its purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The pyramid puts key facts first so readers get essentials even if they stop early; burying them at the end means most readers never see them.",
          },
        },
        {
          id: "mll3-u3-article-structure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a headline for an article about a new community garden opening.", marks: 1 },
            { label: "b", prompt: "Write a lead paragraph (who/what/when/where/why).", marks: 2 },
            { label: "c", prompt: "Write one body paragraph with a quote and attribution.", marks: 1 },
            { label: "d", prompt: "Explain how your article follows the inverted pyramid.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article conventions", statement: "Headline, lead, body with quotes, inverted pyramid order." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a headline like 'New Community Garden Opens on Maple Street'.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion B (Organizing): lead gives who (residents), what (garden opened), when, where, why.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D (Using language): lead is clear and factual.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C (Producing text): body paragraph with a quote and 'said' attribution.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion B (Organizing): most important info (opening) is first; details and quotes come after — inverted pyramid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Headline. (b) Lead with key facts. (c) Body with quote. (d) Key facts first, details after.",
          },
        },
        {
          id: "mll3-u3-article-structure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a news article's headline do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grab attention and summarize the story" },
              { id: "b", text: "List all the facts" },
              { id: "c", text: "Give the writer's opinion" },
              { id: "d", text: "Be as long as possible" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Headline", statement: "A headline grabs attention and summarizes the main point." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): headline = attention + summary — (b).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Grab attention and summarize the story",
          },
        },
        {
          id: "mll3-u3-article-structure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the inverted pyramid, where does the most important information go?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scattered throughout" },
              { id: "b", text: "At the end" },
              { id: "c", text: "In the headline only" },
              { id: "d", text: "In the first paragraph (the lead)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inverted pyramid", statement: "Most important facts go first — in the lead." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): key facts go in the lead — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** In the first paragraph (the lead)",
          },
        },
        {
          id: "mll3-u3-article-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Lead",
            author: "Written for Akademik Space",
            text: "Ridgeview School's debating team won the regional championship on Saturday, defeating Eastwood College in the final. The victory marks the school's third consecutive title.",
          },
          stem: "What information does this lead paragraph provide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who won, what they won, and when — the key facts" },
              { id: "b", text: "The team's history in detail" },
              { id: "c", text: "Only the team's feelings" },
              { id: "d", text: "Only the coach's opinion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "News lead", statement: "The lead answers who/what/when/where/why — key facts first." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): who (Ridgeview), what (won championship), when (Saturday) — key facts — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Who won, what they won, and when — the key facts",
          },
        },
        {
          id: "mll3-u3-article-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the strongest lead paragraph for a news article about a new bike lane opening on Main Street?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Dear reader, I am writing to tell you about bikes.'" },
              { id: "b", text: "'Bikes are great. I love bikes. This article is about bikes.'" },
              { id: "c", text: "'The new bike lane on Main Street opened to cyclists on Monday, part of the city's green transport plan.'" },
              { id: "d", text: "'Once upon a time, in a town far away...'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "News lead", statement: "The lead gives who/what/when/where/why in one or two sentences." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): (b) gives what/where/when in one factual sentence — a proper news lead; the others are informal, fictional or a letter opening — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 'The new bike lane on Main Street opened to cyclists on Monday, part of the city's green transport plan.'",
          },
        },
        {
          id: "mll3-u3-article-structure-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why news articles use quotes with attribution ('said the mayor', 'according to officials'), and what happens if quotes are used without attribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Attribution", statement: "Quotes must be credited to sources to establish credibility and accountability." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): attribution tells readers who said what — it establishes source and credibility.", marks: 1, markCode: "B" },
              { reasoning: "Criterion A (Analysing): without attribution, readers can't verify who said it — the quote could be invented or misattributed; credibility collapses.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): 'said' vs 'claimed' vs 'admitted' also signals the writer's attitude — attribution is a framing device, not just a citation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Attribution establishes who said what — credibility and accountability. Without it, quotes can't be verified and the writer's framing is hidden.",
          },
        },
        {
          id: "mll3-u3-article-structure-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a headline for an article about a school winning a chess tournament.", marks: 1 },
            { label: "b", prompt: "Write a lead paragraph (who/what/when/where).", marks: 2 },
            { label: "c", prompt: "Write one body sentence with a quote and attribution.", marks: 1 },
            { label: "d", prompt: "Explain why the most exciting detail should NOT be in the lead.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article conventions", statement: "Headline, lead with key facts, body with attributed quotes — inverted pyramid." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a factual headline, e.g. 'Ridgeview School Wins Chess Tournament'.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion B (Organizing): lead gives who (Ridgeview), what (won), when, where — key facts first.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D (Using language): clear, factual wording.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C (Producing text): a body sentence with quote + 'said' attribution, e.g. 'Captain Lee said the team trained for months.'", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion A (Analysing): the lead must carry the key facts — the 'exciting detail' (a dramatic moment) is supporting colour that belongs in the body; putting it first would bury the news.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Factual headline. (b) Lead with key facts. (c) Quote + attribution. (d) Lead carries facts; exciting detail is supporting colour for the body.",
          },
        },
        {
          id: "mll3-u3-article-structure-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Article",
            author: "Written for Akademik Space",
            text: "HEADLINE: New Skate Park Opens\nLEAD: The new skate park on Elm Street opened Saturday, drawing 200 visitors.\nBODY: 'It's amazing,' said skateboarder Jo. The park has 12 ramps and a bowl.",
          },
          stem: "How many of the article's three sections (headline, lead, body) contain direct quotations? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article sections", statement: "Quotes appear in the body, not the headline or lead — they support detail." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): only the body has a quote ('It's amazing') — 1 section.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "mll3-u3-article-structure-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'attribution' in journalism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing very long sentences" },
              { id: "b", text: "Printing in bold" },
              { id: "c", text: "Using big words" },
              { id: "d", text: "Giving credit to the source of information" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Attribution", statement: "Attribution credits information to its source." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): attribution = crediting the source — (a).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** Giving credit to the source of information",
          },
        },
        {
          id: "mll3-u3-article-structure-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Lead",
            author: "Written for Akademik Space",
            text: "FIRE AT HILLTOP SCHOOL. A fire broke out in the science block at Hilltop School at 2am on Wednesday. No injuries were reported. The cause is under investigation.",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many times is the time of the fire stated?", marks: 1 },
            { label: "b", prompt: "How many injuries are reported?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "News lead", statement: "The lead gives when (2am Wednesday) and outcome (no injuries)." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): '2am on Wednesday' appears once — 1.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): 'No injuries' = 0 injuries.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 (b) 0",
          },
        },
        {
          id: "mll3-u3-article-structure-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do editors prefer the inverted pyramid for news articles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it looks professional" },
              { id: "b", text: "Because it's easier to write" },
              { id: "c", text: "Because it's a legal requirement" },
              { id: "d", text: "Because readers get key facts even if they stop early, and editors can cut detail without losing essentials" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverted pyramid", statement: "Facts-first ensures readers get essentials and editors can trim safely." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): readers get essentials early and editors can cut the bottom — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Because readers get key facts even if they stop early, and editors can cut detail without losing essentials",
          },
        },
        {
          id: "mll3-u3-article-structure-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a body paragraph for an article about a new community garden, including one quote with attribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article body", statement: "Body paragraphs add supporting detail — quotes, facts, background — with attribution." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): a body paragraph adds detail (what the garden offers, who uses it) beyond the lead's key facts.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): includes a quote with 'said' attribution, e.g. 'It's brought the neighbourhood together,' said organiser Pat Lee.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'The garden now provides fresh produce for 30 families. 'It's brought the neighbourhood together,' said organiser Pat Lee.'",
          },
        },
        {
          id: "mll3-u3-article-structure-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this article and answer all parts.",
          extract: {
            title: "New Bus Route",
            author: "Written for Akademik Space",
            text: "The number 42 bus route began operating on Monday, connecting Ridgeview station to the new business park. The service runs every 20 minutes during peak hours.\n\n'It's a game-changer for commuters,' said transport officer Dana Wu. The route is expected to carry 2,000 passengers daily.",
          },
          parts: [
            { label: "a", prompt: "Identify the lead paragraph and what key facts it contains.", marks: 1 },
            { label: "b", prompt: "Explain how the article follows the inverted pyramid.", marks: 2 },
            { label: "c", prompt: "Evaluate the quote — is 'game-changer' attributed fairly?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inverted pyramid and attribution", statement: "Key facts first; quotes attributed to named sources establish credibility." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): the lead gives what (bus route began), when (Monday), where (station to business park) — key facts.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): most important facts (route, schedule) come first; supporting detail (quote, ridership estimate) follows — inverted pyramid.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): if a reader stops after paragraph one, they still know the essential news.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion D (Using language): 'game-changer' is attributed to 'transport officer Dana Wu' — a named official, so the praise has a source.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion A (Analysing): however, as an official she has an interest in promoting the scheme — a critical reader might note the source's stake; fair attribution but interested source.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Lead gives what/when/where. (b) Key facts first, detail after. (c) 'Game-changer' is attributed to a named official — credible but possibly interested.",
          },
        },
      ],
    },
    {
      id: "mll3-u3-report-writing",
      title: "Writing reports",
      skill: "Write an organized report with sections, findings and conclusions.",
      lesson: {
        sections: [
          {
            heading: "What is a report?",
            body: "A **report** presents information in an organized way — it might describe an event, investigate a question, or present findings. Unlike a story, it must be **clear, factual and well-structured**.",
          },
          {
            heading: "Report structure",
            body: "Typical report structure: **title**, **introduction** (what and why), **body** (sections with headings — findings, evidence, data), **conclusion** (summary of key points), and sometimes **recommendations** (what should happen next).",
          },
          {
            heading: "Objective tone",
            body: "Reports use **formal, objective language** — no slang, no strong opinions unless clearly marked. Use **headings** to organize sections. Present **evidence** — facts, quotes, data — not just claims.",
          },
        ],
        keyFormulas: [
          { name: "Report structure", statement: "Title → Introduction → Body (sections/headings) → Conclusion → Recommendations." },
        ],
        workedExample: {
          problem: "Write the introduction of a report on school recycling.",
          solution: "'This report examines the school's recycling program. It looks at how much is recycled, what happens to it, and whether the program could be improved.'",
        },
      },
      questions: [
        {
          id: "mll3-u3-report-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main difference between a report and a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reports are factual and organized; stories are imaginative" },
              { id: "b", text: "Reports are always shorter" },
              { id: "c", text: "Reports use rhyme" },
              { id: "d", text: "Stories are always true" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report", statement: "Reports present factual information in organized sections." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): reports = factual/organized; stories = imaginative — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reports are factual and organized; stories are imaginative",
          },
        },
        {
          id: "mll3-u3-report-writing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "List the typical sections of a report in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "Title → Introduction → Body → Conclusion → Recommendations." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): title, introduction, body sections, conclusion, recommendations — in order.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): the order moves from purpose (intro) through evidence (body) to summary and action (conclusion/recommendations).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Title → Introduction → Body (headed sections) → Conclusion → Recommendations.",
          },
        },
        {
          id: "mll3-u3-report-writing-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why reports use formal, objective language and headings, and what would happen if they used casual slang and no structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Report conventions", statement: "Formality and structure make reports credible and usable." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): headings organize information so readers can find what they need quickly.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D (Using language): formal, objective language makes the report credible and professional — slang undermines authority.", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): without structure or formality, readers can't navigate the information and may distrust the content.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal language + headings make reports credible and navigable; slang and no structure would confuse readers and undermine trust.",
          },
        },
        {
          id: "mll3-u3-report-writing-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a title and introduction for a report on 'How Students Use the Library'.", marks: 2 },
            { label: "b", prompt: "Write one body paragraph with a heading and one piece of evidence.", marks: 2 },
            { label: "c", prompt: "Write a one-sentence conclusion.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report writing", statement: "Title, intro, headed sections, evidence, conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): title + introduction stating purpose, e.g. 'This report investigates how students use the school library.'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): formal, objective tone.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B (Organizing): a heading like 'Borrowing Patterns' + a paragraph with evidence (e.g. 'According to library records...').", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D (Using language): factual, attributed evidence.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B (Organizing): conclusion summarizing key finding, e.g. 'The library is used mainly for homework and research.'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Title + objective intro. (b) Headed section with evidence. (c) Summary conclusion.",
          },
        },
        {
          id: "mll3-u3-report-writing-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To entertain the reader" },
              { id: "b", text: "To persuade the reader to buy something" },
              { id: "c", text: "To tell a fictional story" },
              { id: "d", text: "To present factual information in an organized way" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report", statement: "Reports present factual information in organized sections." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): reports inform factually and organized — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To present factual information in an organized way",
          },
        },
        {
          id: "mll3-u3-report-writing-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which section of a report states what the report will examine and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The recommendations" },
              { id: "b", text: "The introduction" },
              { id: "c", text: "The conclusion" },
              { id: "d", text: "The appendix" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "The introduction states purpose and scope." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): the introduction gives purpose and scope — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The introduction",
          },
        },
        {
          id: "mll3-u3-report-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            text: "EXECUTIVE SUMMARY: This report examines student attendance at Ridgeview School. It analyses attendance data from September to December and identifies factors affecting absence rates.",
          },
          stem: "What does this opening tell the reader about the report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its subject, time frame and focus areas" },
              { id: "b", text: "Nothing useful" },
              { id: "c", text: "Only the author's opinion" },
              { id: "d", text: "It is a fictional story" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report introduction", statement: "The intro states subject, scope and focus." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): the opening states subject (attendance), time frame (Sept-Dec) and focus (absence factors) — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Its subject, time frame and focus areas",
          },
        },
        {
          id: "mll3-u3-report-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best introduction for a report on 'How Students Use the School Canteen'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'This report examines how students use the school canteen. It looks at usage patterns, popular items and peak times.'" },
              { id: "b", text: "'The canteen is pretty bad tbh. We should close it.'" },
              { id: "c", text: "'Once I ate a sandwich there once.'" },
              { id: "d", text: "'To whom it may concern...'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report introduction", statement: "The intro states what the report examines and why, in objective language." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): (b) states the subject objectively and previews scope; (a) is slangy opinion, (c) anecdote, (d) letter opening — (b).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** 'This report examines how students use the school canteen. It looks at usage patterns, popular items and peak times.'",
          },
        },
        {
          id: "mll3-u3-report-writing-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Draft",
            author: "Written for Akademik Space",
            text: "The canteen is pretty bad tbh. Nobody goes there because the food is gross and it's always busy at lunch. We should probably fix it or just close it.",
          },
          stem: "This draft is not a proper report. Identify three problems with it and explain how to fix each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Report conventions", statement: "Reports need objective language, evidence and structure — not slang or opinion." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'pretty bad', 'gross', 'tbh' are slang — replace with formal language ('poor quality', 'unpopular').", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): 'Nobody goes there' is an unsupported generalization — add evidence or soften to 'many students avoid it'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion B (Organizing): no structure — organize into sections (usage, food quality, recommendations) with a clear intro and conclusion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Problems: slang, unsupported claims, no structure. Fix: formal language, evidence-backed statements, headed sections.",
          },
        },
        {
          id: "mll3-u3-report-writing-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a title and introduction for a report on 'School Recycling'.", marks: 2 },
            { label: "b", prompt: "Write one body section with a heading and evidence.", marks: 2 },
            { label: "c", prompt: "Write a one-sentence recommendation.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report writing", statement: "Title, objective intro, headed sections with evidence, conclusion/recommendations." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): title + intro stating purpose, e.g. 'This report examines the school's recycling program.'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): formal, objective tone.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B (Organizing): a heading like 'Recycling Rates' + a paragraph with evidence, e.g. 'According to waste audits, 60% of paper is recycled.'", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D (Using language): factual, attributed evidence.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B (Organizing): a recommendation, e.g. 'The school should add more recycling bins in the canteen.'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Title + objective intro. (b) Headed section with evidence. (c) Clear recommendation.",
          },
        },
        {
          id: "mll3-u3-report-writing-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            text: "TITLE: Library Survey\nINTRODUCTION: This report examines library usage.\nFINDINGS: Students visit most at lunch.\nCONCLUSION: The library is well used.",
          },
          stem: "How many sections does this report contain? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "Title, introduction, findings, conclusion — 4 sections." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): TITLE, INTRODUCTION, FINDINGS, CONCLUSION = 4 sections.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "mll3-u3-report-writing-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do reports use headings for each section?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it's required by law" },
              { id: "b", text: "To make the report look longer" },
              { id: "c", text: "To organize information so readers can find what they need" },
              { id: "d", text: "To hide information" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report headings", statement: "Headings organize information for quick navigation." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): headings help readers navigate — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To organize information so readers can find what they need",
          },
        },
        {
          id: "mll3-u3-report-writing-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Report",
            author: "Written for Akademik Space",
            text: "FINDINGS: 1. 45% of students walk to school. 2. 30% take the bus. 3. 15% are driven. 4. 10% cycle.",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many transport methods are listed?", marks: 1 },
            { label: "b", prompt: "What percentage of students walk to school?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 45 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report evidence", statement: "Reports present data clearly — numbered findings with percentages." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): four methods listed (walk, bus, driven, cycle) — 4.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): '45% walk' — 45.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 (b) 45",
          },
        },
        {
          id: "mll3-u3-report-writing-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between a report's 'conclusion' and its 'recommendations'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recommendations come first" },
              { id: "b", text: "Conclusions are optional; recommendations are required" },
              { id: "c", text: "They are the same thing" },
              { id: "d", text: "The conclusion summarizes findings; recommendations suggest what should happen next" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Conclusion vs recommendations", statement: "Conclusion = summary of findings; recommendations = suggested actions." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): conclusion summarizes; recommendations propose action — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The conclusion summarizes findings; recommendations suggest what should happen next",
          },
        },
        {
          id: "mll3-u3-report-writing-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student writes 'The canteen is awful and nobody likes it' in a report. Explain why this is a problem and how to fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Objective language", statement: "Reports need factual, evidence-based statements — not opinions or generalizations." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'awful' and 'nobody likes it' are opinions and generalizations — unsupported and unprofessional for a report.", marks: 1, markCode: "A" },
              { reasoning: "Criterion D (Using language): fix with evidence — 'The canteen received an average rating of 2.1/5 in the student survey, with 65% citing long queues.'", marks: 1, markCode: "D" },
            ],
            finalAnswer: "The statement is opinion and generalization — fix by using evidence: 'The canteen scored 2.1/5 in the survey, with 65% citing long queues.'",
          },
        },
        {
          id: "mll3-u3-report-writing-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this report and answer all parts.",
          extract: {
            title: "Report",
            author: "Written for Akademik Space",
            text: "TITLE: School Trip Survey\nINTRODUCTION: This report examines student opinions about the recent trip to the science museum.\nFINDINGS: 80% rated it 'excellent'; 15% 'good'; 5% 'poor'. Most praised the interactive exhibits.\nCONCLUSION: The trip was well received overall.",
          },
          parts: [
            { label: "a", prompt: "Identify the report's sections.", marks: 1 },
            { label: "b", prompt: "Explain how the findings are presented objectively.", marks: 2 },
            { label: "c", prompt: "What is missing that a fuller report might include?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report conventions", statement: "Sections, objective findings and clear conclusion — but fuller reports add method and recommendations." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): TITLE, INTRODUCTION, FINDINGS, CONCLUSION — 4 sections.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D (Using language): findings use percentages and quotes ('excellent', 'good', 'poor') — factual, not opinionated.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): 'Most praised the interactive exhibits' is a generalization but backed by the survey context — reasonably objective.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): missing — method (how surveyed, how many students), recommendations (what to change for next trip), and the 5% 'poor' feedback detail.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion B (Organizing): a fuller report would include method, limitations and recommendations — it currently summarizes without depth.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Title, intro, findings, conclusion. (b) Percentages and quotes — objective. (c) Missing: method, recommendations, and detail on negative feedback.",
          },
        },
      ],
    },
  ],
};
