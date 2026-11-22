import type { Lesson } from "../../../types.ts";

const flyerExtract = {
  title: "Leaflet: Save the Community Garden",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "Our community garden has fed this neighbourhood for twelve years. It is where children learn where food comes from, where elderly residents grow vegetables they can actually afford, and where the whole street comes together on Sunday mornings.\n\nNow the council wants to sell the land for a car park. They say it is 'underused'. They say a car park will 'boost the local economy'. They do not mention the bees, the tomato plants, or the hundred families who have grown food there for free.\n\nWe have a petition with 2,000 signatures. We have a plan for a smaller car park that keeps half the garden. We are asking the council to meet us and discuss this properly — not to decide behind closed doors.\n\nThe garden is not just soil and seeds. It is a place where this community feeds itself. Please sign the petition at the library or online.",
};

const articleExtract = {
  title: "The Quiet Return of the Library",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "For a decade, libraries were being written off as relics — 'book warehouses in the digital age', as one commentator put it. Then something unexpected happened: people came back.\n\nNot to borrow more books, exactly — though borrowing is up too — but to use libraries as what they have always secretly been: free, warm, quiet public space. Students without quiet rooms at home study there. Job seekers use the computers. Elderly residents attend reading groups. New parents find baby classes.\n\nThe numbers tell the story. Visits are up 30% in five years. Event attendance has doubled. The busiest day is not Saturday — it is a weekday afternoon, when the library becomes a second living room for people who cannot afford one.\n\nThe lesson may be that libraries were never really about books. They were about gathering. The internet cannot provide that.",
};

export const lesson32: Lesson = {
  id: "cile-u3-lesson-3-2",
  code: "3-2",
  title: "Media and non-fiction texts",
  goal: "I CAN analyse how non-fiction texts — articles, editorials, leaflets — use structure and language to inform or persuade.",
  standards: ["0861 Reading: non-fiction and media"],
  vocabulary: [
    { term: "Editorial", definition: "An article expressing the newspaper's official opinion on an issue." },
    { term: "Leaflet", definition: "A short printed sheet designed to persuade or inform about a cause or event." },
    { term: "Headline", definition: "A short, attention-grabbing title for an article or advert." },
    { term: "Subheading", definition: "A secondary heading that breaks up text and guides the reader." },
    { term: "Call to action", definition: "A direct instruction telling the reader what to do ('sign the petition')." },
    { term: "Emotive appeal", definition: "Language designed to trigger emotion — pity, anger, hope." },
  ],
  concepts: [
    {
      id: "cile-u3-nonfiction-structure",
      title: "Non-fiction text features",
      skill: "Analyse how headlines, subheadings, paragraphs and calls to action organise non-fiction texts.",
      lesson: {
        sections: [
          {
            heading: "Text features",
            body: "Non-fiction texts use visual and structural features to guide readers:\n\n- **Headline**: grabs attention, often uses wordplay or strong claims.\n- **Subheadings**: break text into sections, let skimmers find what they need.\n- **Paragraphs**: each develops one idea; topic sentence first.\n- **Call to action**: tells the reader what to do next — sign, visit, buy.",
          },
          {
            heading: "Inform vs persuade",
            body: "- **Informative texts** (articles, reports): balanced, factual, chronological or logical order.\n- **Persuasive texts** (leaflets, editorials): emotional appeals, selective evidence, direct address, urgent tone.",
          },
        ],
        keyFormulas: [
          { name: "Feature → function", statement: "Every text feature exists for a purpose — headlines hook, subheadings organise, calls to action direct." },
        ],
        workedExample: {
          problem: "Leaflet: 'The garden is not just soil and seeds. It is a place where this community feeds itself.' What is the effect of this line?",
          solution: "It reframes the garden from a piece of land into a community asset — elevating the stakes from property to people. This is an emotive appeal preparing the reader for the call to action.",
        },
      },
      questions: [
        {
          id: "cile-u3-nf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: flyerExtract,
          stem: "What is the main purpose of this leaflet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To persuade people to sign a petition against the car park plan" },
              { id: "b", text: "To describe the history of the community garden" },
              { id: "c", text: "To inform people about gardening" },
              { id: "d", text: "To complain about the council's parking policy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "The leaflet wants signatures on a petition — persuasion is the goal." },
            ],
            steps: [
              { reasoning: "The call to action 'Please sign the petition' makes the purpose explicit.", working: "\\text{sign the petition}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** To persuade people to sign a petition against the car park plan",
            commonErrors: ["Choosing (c) — the history is used as evidence, not as the purpose."],
          },
        },
        {
          id: "cile-u3-nf-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: flyerExtract,
          stem: "Identify the call to action in the leaflet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Call to action", statement: "A direct instruction telling the reader what to do." },
            ],
            steps: [
              { reasoning: "The call to action is at the end: 'Please sign the petition at the library or online.'", working: "\\text{sign the petition}", marks: 1, markCode: "AO2" },
              { reasoning: "It is specific — location and method given.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Please sign the petition at the library or online.'",
            commonErrors: ["Identifying an earlier emotional appeal as the call to action."],
          },
        },
        {
          id: "cile-u3-nf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: flyerExtract,
          stem: "Explain how the leaflet uses emotional appeal to persuade readers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotive appeal", statement: "Language that triggers feeling — community, children, affordability — to motivate action." },
            ],
            steps: [
              { reasoning: "Appeal to community: 'the whole street comes together', 'community feeds itself'.", working: "\\text{community}", marks: 1, markCode: "AO2" },
              { reasoning: "Appeal to vulnerability: 'children learn', 'elderly residents', 'afford'.", working: "\\text{children/elderly}", marks: 1, markCode: "AO2" },
              { reasoning: "Contrast: 'soil and seeds' vs 'community feeds itself' — reframe.", working: "\\text{reframe}", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: makes losing the garden feel like losing people, not property.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The leaflet appeals to community bonds, protects vulnerable groups (children, elderly, low-income residents), and reframes the garden as a community asset — making its loss feel personal rather than administrative.",
            commonErrors: ["Listing emotional words without explaining the persuasive mechanism."],
          },
        },
        {
          id: "cile-u3-nf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: articleExtract,
          stem: "The article describes the 'quiet return' of libraries.",
          parts: [
            { label: "a", prompt: "Identify the article's main claim.", marks: 2 },
            { label: "b", prompt: "Quote two pieces of evidence supporting the claim.", marks: 2 },
            { label: "c", prompt: "How does the article's structure build its argument?", marks: 2 },
            { label: "d", prompt: "What is the effect of the final sentence ('The internet cannot provide that')?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-fiction argument", statement: "Claim supported by evidence, structured to lead the reader to a conclusion." },
            ],
            steps: [
              { part: "a", reasoning: "Claim: libraries are experiencing a revival as community space, not just book lenders.", working: "\\text{revival}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Stated accurately.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Evidence: visits up 30%, events doubled, weekday afternoons busiest.", working: "\\text{30 percent; doubled}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Accurate quotations.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Structure: starts with the 'relic' narrative, then presents the surprise return, then evidence, then conclusion.", working: "\\text{relic → return → evidence}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The reversal structure makes the revival feel discovered, not asserted.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Final sentence is a short, absolute claim — 'cannot provide that.'", working: "\\text{cannot provide}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It reframes libraries from information access to human gathering — the real source of their value.", working: "\\text{gathering}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The brevity gives it punch — a verdict, not a suggestion.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) libraries are reviving as community gathering spaces (b) 30% visit increase, doubled events, weekday peak (c) relic→return→evidence reversal structure (d) short absolute claim reframes libraries as irreplaceable human space",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Claim accurately stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two accurate pieces of evidence.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Structure accurately described with effect.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Final sentence's effect explained convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'it is a good ending' without explaining the reframe."],
          },
        },
        {
          id: "cile-u3-nf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: flyerExtract,
          stem: "According to the leaflet, how many signatures does the petition have?",
          response: { type: "numeric", parts: [{ label: "Signatures", answer: 2000 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evidence paragraph", statement: "Concrete proof (signatures, plan) plus a demand moves persuasion toward action." },
            ],
            steps: [
              { reasoning: "The leaflet states 'a petition with 2,000 signatures'.", working: "2000", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2000",
            commonErrors: ["Answering a different number — the figure is 2,000."],
          },
        },
        {
          id: "cile-u3-nf-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: articleExtract,
          stem: "How many of these are STATISTICAL features the library article uses? 'Visits are up 30% in five years.' 'Event attendance has doubled.' 'A warm smile.' 'The internet cannot provide that.'",
          response: { type: "numeric", parts: [{ label: "Statistical features", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Informative evidence", statement: "Numbers and statistics lend factual weight to an informative article." },
            ],
            steps: [
              { reasoning: "'Up 30%' and 'doubled' are checkable figures = 2; the others are qualitative claims.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'the internet cannot provide that' — it is an opinion, not a statistic."],
          },
        },
        {
          id: "cile-u3-nf-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: flyerExtract,
          stem: "Identify the call to action in the leaflet and state its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Call to action", statement: "A direct instruction telling the reader what to do next." },
            ],
            steps: [
              { reasoning: "CTA: 'Please sign the petition at the library or online.'", working: "\\text{sign the petition}", marks: 1, markCode: "AO2" },
              { reasoning: "Function: converts persuasion into a concrete, easy action.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Please sign the petition at the library or online' — it converts the reader's sympathy into a concrete, easy action.",
            commonErrors: ["Quoting an emotional appeal ('community feeds itself') as the CTA."],
          },
        },
        {
          id: "cile-u3-nf-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: articleExtract,
          stem: "How does the article use numbers ('30%', 'doubled') to support its claim?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Statistical evidence", statement: "Specific figures make a claim feel measured and verifiable." },
            ],
            steps: [
              { reasoning: "'Visits are up 30% in five years' gives a precise, checkable measure of revival.", working: "\\text{30\\%}", marks: 1, markCode: "AO2" },
              { reasoning: "'Event attendance has doubled' reinforces the trend — numbers make the argument feel factual, not rhetorical.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The figures make the revival feel measured and verifiable — 'up 30%' and 'doubled' turn a claim into checkable evidence.",
            commonErrors: ["Saying 'numbers are persuasive' without explaining they signal verifiability."],
          },
        },
        {
          id: "cile-u3-nf-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: flyerExtract,
          stem: "Which paragraph re-energises the emotional appeal immediately before the call to action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The opening about the garden's history" },
              { id: "b", text: "'The garden is not just soil and seeds'" },
              { id: "c", text: "'We have a petition with 2,000 signatures'" },
              { id: "d", text: "The closing 'Please sign the petition'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotive peak", statement: "The reframe ('not just soil and seeds') maximises emotion right before the ask." },
            ],
            steps: [
              { reasoning: "'Not just soil and seeds... community feeds itself' elevates stakes just before the CTA.", working: "\\text{reframe before CTA}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** 'The garden is not just soil and seeds'",
            commonErrors: ["Choosing (b) — that paragraph is evidence, not the emotional peak."],
          },
        },
        {
          id: "cile-u3-nf-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: articleExtract,
          stem: "Explain the effect of 'The busiest day is not Saturday — it is a weekday afternoon.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unexpected detail", statement: "Contradicting expectations makes a detail memorable and meaningful." },
            ],
            steps: [
              { reasoning: "Readers expect libraries busiest at weekends; the reversal surprises.", working: "\\text{expectation reversed}", marks: 1, markCode: "AO2" },
              { reasoning: "It reveals libraries serve daily life, not leisure — a 'second living room'.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: the surprising detail makes the revival feel real and human, not statistical.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The reversal — busiest on a weekday, not Saturday — surprises the reader and reveals libraries as daily living space for people without alternatives, making the revival feel human rather than statistical.",
            commonErrors: ["Saying it 'is interesting' without explaining the expectation reversal."],
          },
        },
        {
          id: "cile-u3-nf-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: flyerExtract,
          stem: "How does the leaflet's paragraph order mirror its persuasive strategy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasive order", statement: "Community → threat → evidence → reframe → call to action." },
            ],
            steps: [
              { reasoning: "P1 builds belonging (community garden's value); P2 introduces the threat (car park).", working: "\\text{belonging → threat}", marks: 1, markCode: "AO2" },
              { reasoning: "P3 gives evidence (signatures, plan); P4 re-emotionalises; P5 directs action.", marks: 1, markCode: "AO2" },
              { reasoning: "Each paragraph escalates: emotion → threat → proof → feeling → action.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The order escalates persuasion: it builds belonging, introduces the threat, proves support, re-ignites emotion, then directs action — each paragraph does a distinct persuasive job.",
            commonErrors: ["Listing paragraph topics without explaining the escalation."],
          },
        },
        {
          id: "cile-u3-nf-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: articleExtract,
          stem: "What is the article's main claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The internet is useless" },
              { id: "b", text: "Libraries should stop lending books" },
              { id: "c", text: "Libraries are becoming cafes" },
              { id: "d", text: "Libraries are reviving as community gathering spaces, not just book lenders" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Claim", statement: "The central argument: libraries matter as gathering space." },
            ],
            steps: [
              { reasoning: "'People came back... to use libraries as... free, warm, quiet public space' states the claim.", working: "\\text{gathering space}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Libraries are reviving as community gathering spaces, not just book lenders",
            commonErrors: ["Choosing (c) — the article says the internet cannot provide gathering, not that it is useless."],
          },
        },
        {
          id: "cile-u3-nf-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: flyerExtract,
          stem: "How many paragraphs does the community-garden leaflet contain?",
          response: { type: "numeric", parts: [{ label: "Paragraphs", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Conspiracy framing", statement: "'Behind closed doors' implies secrecy and exclusion — an emotive distrust appeal." },
            ],
            steps: [
              { reasoning: "The leaflet runs five paragraphs: belonging, threat, evidence, reframe, call to action.", working: "5", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting only the body — the leaflet's five paragraphs each do a distinct persuasive job."],
          },
        },
        {
          id: "cile-u3-nf-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: articleExtract,
          stem: "How would this article's features change if it were rewritten as a leaflet persuading people to visit their library?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Inform vs persuade", statement: "A leaflet would use direct address, commands, emotional appeals and a call to action." },
            ],
            steps: [
              { reasoning: "The article is informative — balanced, statistical, third-person.", working: "\\text{informative}", marks: 1, markCode: "AO2" },
              { reasoning: "A leaflet would address the reader directly ('Visit your library'), use 'you', and command action.", marks: 1, markCode: "AO2" },
              { reasoning: "It would lead with benefits and a CTA, not statistics — emotion over evidence.", marks: 1, markCode: "AO2" },
              { reasoning: "Conclusion: same topic, different features — persuasion needs directness the article avoids.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "A leaflet would drop the statistics for direct address, commands and a call to action — 'Visit your library today' — replacing balanced information with persuasive urgency.",
            commonErrors: ["Saying 'it would be shorter' without identifying which features change."],
          },
        },
        {
          id: "cile-u3-nf-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: flyerExtract,
          stem: "You are analysing the community-garden leaflet.",
          parts: [
            { label: "a", prompt: "Analyse the function of the headline 'Save the Community Garden'.", marks: 2 },
            { label: "b", prompt: "Identify two emotional appeals in the body.", marks: 2 },
            { label: "c", prompt: "How does the leaflet handle the council's position?", marks: 2 },
            { label: "d", prompt: "Explain the function of the call to action.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Non-fiction persuasion", statement: "Headline hooks, body appeals, opposition is exposed, CTA directs action." },
            ],
            steps: [
              { part: "a", reasoning: "'Save' is an imperative — urgency and moral duty.", working: "\\text{imperative}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "'Community' adds belonging — losing it affects 'us'.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Appeal 1: children learning, elderly residents, affordability — vulnerable groups.", working: "\\text{vulnerable}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Appeal 2: 'community feeds itself' — identity and belonging.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Council's words quoted and exposed as euphemistic ('underused', 'boost').", working: "\\text{quoted euphemisms}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Their position acknowledged but reframed as dismissive of community reality.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "'Please sign the petition' is specific and easy — removes friction.", working: "\\text{specific + easy}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It is placed last, after emotion peaks — the reader is primed to act.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Without it the leaflet would inform but not mobilise — the CTA completes persuasion.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) imperative + community = urgency and belonging (b) vulnerable groups; community identity (c) quoted euphemisms exposed as dismissive (d) specific, easy, placed after emotional peak — converts sympathy into action",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Headline function accurately analysed.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two appeals identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Council handling accurately described.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "CTA function explained convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) just quoting the CTA without explaining its strategic placement."],
          },
        },
        {
          id: "cile-u3-nf-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: articleExtract,
          stem: "You are analysing the library article's non-fiction features.",
          parts: [
            { label: "a", prompt: "State the article's main claim.", marks: 2 },
            { label: "b", prompt: "Identify two features that make it informative rather than persuasive.", marks: 2 },
            { label: "c", prompt: "Explain how the 'relic → return' reversal structures the argument.", marks: 2 },
            { label: "d", prompt: "What is the effect of ending with 'The internet cannot provide that'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Informative vs persuasive", statement: "Informative texts use balanced evidence and third person; persuasive texts use direct address and emotion." },
            ],
            steps: [
              { part: "a", reasoning: "Claim: libraries are reviving as community gathering spaces.", working: "\\text{revival as space}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurately stated.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Feature 1: statistics — 'up 30%', 'doubled' — factual evidence.", working: "\\text{statistics}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Feature 2: balanced tone — acknowledges 'not to borrow more books, exactly'.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Opening frames libraries as 'relics'; then 'something unexpected happened' reverses.", working: "\\text{relic → return}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The reversal makes the revival feel discovered, not asserted — builds trust.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Short absolute claim — 'cannot provide that' — lands as a verdict.", working: "\\text{cannot provide}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Reframes libraries as irreplaceable human gathering space — the article's real point.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) libraries reviving as gathering space (b) statistics; balanced/qualified tone (c) relic→return reversal makes revival feel discovered (d) short absolute verdict reframes libraries as irreplaceable human space",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Claim accurately stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid informative features.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reversal structure explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Final line's effect explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (b) citing persuasion features (commands, emotion) when informative features are asked."],
          },
        },
      ],
    },
    {
      id: "cile-u3-media-analysis",
      title: "Analysing media texts",
      skill: "Evaluate how media texts use layout, headlines and language to shape reader response.",
      lesson: {
        sections: [
          {
            heading: "Headline analysis",
            body: "Headlines do more than summarise — they **frame**. Compare:\n\n- 'Council Approves Garden Car Park' (neutral, factual)\n- 'Council Kills Beloved Garden' (emotive, accusatory)\n\nSame event, different framing. The headline sets the reader's attitude before they read a word.",
          },
          {
            heading: "Layout and emphasis",
            body: "Bold text, subheadings, pull-quotes and images direct attention. What is placed first, largest, or most visually prominent signals what the writer wants you to notice first.",
          },
          {
            heading: "Evaluating media",
            body: "Ask: What is the text's purpose? Who is the audience? What techniques are used? What is omitted? A media-literate reader evaluates framing, not just content.",
          },
        ],
        keyFormulas: [
          { name: "Media literacy", statement: "Analyse headline framing, layout emphasis, language choice and omissions — not just the stated content." },
        ],
        workedExample: {
          problem: "Headline: 'Council Kills Beloved Garden.' What does 'kills' do?",
          solution: "It personifies the council as a murderer — 'kills' is violent and emotive, framing the decision as aggression rather than policy. 'Beloved' adds emotional weight. The headline persuades before the article begins.",
        },
      },
      questions: [
        {
          id: "cile-u3-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: flyerExtract,
          stem: "What is the effect of the headline 'Save the Community Garden'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses a command to create urgency and moral duty" },
              { id: "b", text: "It is neutral and factual" },
              { id: "c", text: "It describes the garden's history" },
              { id: "d", text: "It asks a question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imperative headline", statement: "A command verb creates urgency and positions the reader as someone who must act." },
            ],
            steps: [
              { reasoning: "'Save' is an imperative — it commands action.", working: "\\text{'save'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** It uses a command to create urgency and moral duty",
            commonErrors: ["Choosing (a) — 'Save' is not neutral."],
          },
        },
        {
          id: "cile-u3-media-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: flyerExtract,
          stem: "How does the leaflet use the council's own words against them ('underused', 'boost the local economy')?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Quoting opposition", statement: "Repeating an opponent's words highlights their disconnect from the community's reality." },
            ],
            steps: [
              { reasoning: "The phrases are quoted to expose their emptiness — 'underused' ignores hundreds of families.", working: "\\text{'underused' vs families}", marks: 1, markCode: "AO2" },
              { reasoning: "The juxtaposition makes the council's language sound evasive.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "By quoting the council's euphemisms ('underused', 'boost the local economy') and contrasting them with the community's reality, the leaflet exposes the gap between official language and lived experience.",
            commonErrors: ["Saying the leaflet 'agrees' with the council — it quotes to criticise."],
          },
        },
        {
          id: "cile-u3-media-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: articleExtract,
          stem: "Analyse how the article's opening paragraph frames the library debate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Framing", statement: "The opening sets up a 'relic vs revival' contrast that structures the whole argument." },
            ],
            steps: [
              { reasoning: "Opening presents the 'relic' view — libraries written off as obsolete.", working: "\\text{relic view}", marks: 1, markCode: "AO2" },
              { reasoning: "Then introduces the reversal: 'Then something unexpected happened'.", working: "\\text{reversal}", marks: 1, markCode: "AO2" },
              { reasoning: "The quotation 'book warehouses in the digital age' is mocking — framed for easy dismissal.", working: "\\text{mocking quote}", marks: 1, markCode: "AO2" },
              { reasoning: "Net effect: reader is primed to see the revival as a surprising truth.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The opening frames libraries as dismissed relics, then pivots to 'unexpected' revival — the mocking quotation of critics makes the turnaround feel earned and the revival feel like discovered truth.",
            commonErrors: ["Summarising the paragraph without analysing its framing function."],
          },
        },
        {
          id: "cile-u3-media-q4",
          difficulty: "challenge",
          totalMarks: 9,
          extract: flyerExtract,
          stem: "The leaflet is a piece of persuasive media.",
          parts: [
            { label: "a", prompt: "Analyse the headline's persuasive function.", marks: 2 },
            { label: "b", prompt: "Identify two emotional appeals in the body.", marks: 2 },
            { label: "c", prompt: "How does the leaflet handle the council's position?", marks: 2 },
            { label: "d", prompt: "Suggest how a council leaflet responding to this might be framed differently.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Media persuasion", statement: "Headlines hook, body appeals emotionally, opposition is quoted to expose weakness, CTA directs action." },
            ],
            steps: [
              { part: "a", reasoning: "'Save' is an imperative command — urgency and moral duty.", working: "\\text{imperative}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "'Community' adds belonging — losing it affects 'us'.", working: "\\text{community}", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Appeal 1: children learning, elderly residents, affordability — vulnerable groups.", working: "\\text{vulnerable}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Appeal 2: 'community feeds itself' — identity and belonging.", working: "\\text{identity}", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Council's words quoted and exposed as euphemistic ('underused', 'boost').", working: "\\text{quoted euphemisms}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Their position is acknowledged but reframed as dismissive of community reality.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Council version might use 'progress', 'modernisation', 'economic benefits' — positive framing.", working: "\\text{positive framing}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "And might emphasise 'underused' as fact rather than quoting it as criticism.", working: "\\text{fact not quote}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Different audience (residents worried about parking) would change emphasis.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) imperative + community = urgency and belonging (b) vulnerable groups; community identity (c) quoted euphemisms exposed as dismissive (d) e.g. 'progress/modernisation' framing, 'underused' as fact, parking-focused audience",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Headline function accurately analysed.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two appeals identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Council handling accurately described.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Alternative framing convincingly described.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) just reversing the opinion without changing the framing techniques."],
          },
        },
        {
          id: "cile-u3-media-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: flyerExtract,
          stem: "How many of these headlines are IMPERATIVE commands? 'Save the Community Garden.' 'The Quiet Return of the Library.' 'Outdated Book Warehouses Secretly Save Communities.' 'Visits to Libraries Rise 30%.'",
          response: { type: "numeric", parts: [{ label: "Imperative headlines", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imperative headline", statement: "A command verb ('Save') directs the reader to act." },
            ],
            steps: [
              { reasoning: "Only 'Save the Community Garden' commands the reader = 1; the others are statements or descriptions.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting 'Secretly Save Communities' — it is a declarative headline, not a command to the reader."],
          },
        },
        {
          id: "cile-u3-media-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: articleExtract,
          stem: "Which alternative headline would be MOST emotive and biased against libraries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Libraries Draw Crowds Again" },
              { id: "b", text: "Outdated Book Warehouses Secretly Save Communities" },
              { id: "c", text: "The Quiet Return of the Library" },
              { id: "d", text: "Visits to Libraries Rise 30%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Headline framing", statement: "Loaded labels ('outdated', 'secretly') bias the reader before reading." },
            ],
            steps: [
              { reasoning: "'Outdated' and 'secretly' are loaded — they frame libraries as obsolete yet secretly vital.", working: "\\text{'outdated'; 'secretly'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Outdated Book Warehouses Secretly Save Communities",
            commonErrors: ["Choosing (d) — it is factual, not emotive."],
          },
        },
        {
          id: "cile-u3-media-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: flyerExtract,
          stem: "How does putting 'underused' and 'boost the local economy' in quotation marks frame the council's words?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Scare quotes", statement: "Quoting an opponent's words distances the writer from them — implying they are evasive." },
            ],
            steps: [
              { reasoning: "Quotation marks signal 'these are their words, not mine' — distancing.", working: "\\text{distancing quotes}", marks: 1, markCode: "AO2" },
              { reasoning: "The leaflet then contradicts them with community reality — the quotes expose the euphemism.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The quotation marks distance the leaflet from the council's language, framing 'underused' and 'boost' as evasive euphemisms the community reality contradicts.",
            commonErrors: ["Saying the leaflet 'agrees' — quoting to criticise is the opposite."],
          },
        },
        {
          id: "cile-u3-media-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: articleExtract,
          stem: "What does the metaphor 'a second living room' do in the article?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Metaphor", statement: "Comparing libraries to living rooms frames them as domestic, essential space." },
            ],
            steps: [
              { reasoning: "'Second living room' makes the library feel like home — warm, necessary, communal.", working: "\\text{'second living room'}", marks: 1, markCode: "AO2" },
              { reasoning: "It supports the claim that libraries are gathering space, not just book storage.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The metaphor frames libraries as domestic, essential space — a 'second living room' — supporting the claim that their value is gathering, not just books.",
            commonErrors: ["Identifying it as a metaphor without explaining its framing effect."],
          },
        },
        {
          id: "cile-u3-media-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: articleExtract,
          stem: "How many of these words carry a NEGATIVE or dismissive connotation in these texts? 'relics' 'community' 'underused' 'boost'",
          response: { type: "numeric", parts: [{ label: "Dismissive words", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Connotation", statement: "'Relics' suggests outdated survivors — the critics' dismissive view." },
            ],
            steps: [
              { reasoning: "'Relics' (obsolete) and 'underused' (dismissive euphemism in quotes) = 2; 'community' and 'boost' are positive.", working: "2", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'boost' — it is the council's positive framing, not dismissive."],
          },
        },
        {
          id: "cile-u3-media-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: flyerExtract,
          stem: "How does the leaflet's structure and emphasis direct the reader's attention toward signing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structural emphasis", statement: "Building emotion then placing the CTA last directs attention to action." },
            ],
            steps: [
              { reasoning: "The leaflet builds belonging and threat across four paragraphs — emotional investment.", working: "\\text{emotional build}", marks: 1, markCode: "AO2" },
              { reasoning: "The reframe ('community feeds itself') peaks emotion just before the ask.", marks: 1, markCode: "AO2" },
              { reasoning: "The CTA is last and specific ('library or online') — easy action when the reader is primed.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The leaflet builds emotional investment across four paragraphs, peaks with the 'community feeds itself' reframe, then places a specific, easy CTA last — so the reader is primed to sign.",
            commonErrors: ["Saying 'it is persuasive' without explaining the structural build to action."],
          },
        },
        {
          id: "cile-u3-media-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: articleExtract,
          stem: "How does the article frame the critics' view ('book warehouses in the digital age')?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Framing opposition", statement: "Quoting critics with a dismissive label makes their view easy to reject." },
            ],
            steps: [
              { reasoning: "'Relics' and 'book warehouses' are reductive labels — they shrink libraries to storage.", working: "\\text{reductive labels}", marks: 1, markCode: "AO2" },
              { reasoning: "The phrase 'as one commentator put it' distances the article from the view.", marks: 1, markCode: "AO2" },
              { reasoning: "Effect: the critics' view is framed as obviously wrong, so the revival feels like truth.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "The critics are quoted with reductive labels ('relics', 'book warehouses') and distanced ('as one commentator put it') — framing their view as obviously wrong so the revival feels like discovered truth.",
            commonErrors: ["Saying the article 'disagrees' without analysing how the framing works."],
          },
        },
        {
          id: "cile-u3-media-q12",
          difficulty: "foundation",
          totalMarks: 1,
          extract: flyerExtract,
          stem: "How many of these audiences would the community-garden leaflet target? 'Local residents who value the garden.' 'Council members.' 'Car park developers.' 'National newspaper readers.'",
          response: { type: "numeric", parts: [{ label: "Target audiences", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Audience", statement: "The leaflet addresses neighbours — 'the whole street', 'this community'." },
            ],
            steps: [
              { reasoning: "Only local residents match the community language and petition; the council is the target of persuasion, not the audience.", working: "1", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting council members — they are who the leaflet tries to persuade, not who it addresses."],
          },
        },
        {
          id: "cile-u3-media-q13",
          difficulty: "core",
          totalMarks: 1,
          extract: articleExtract,
          stem: "Which detail most powerfully supports the article's claim that libraries are essential community space?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'the busiest day is not Saturday'" },
              { id: "b", text: "'a second living room for people who cannot afford one'" },
              { id: "c", text: "'Libraries were being written off as relics'" },
              { id: "d", text: "'borrowing is up too'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Key evidence", statement: "'Cannot afford one' reveals the library's social necessity — its real value." },
            ],
            steps: [
              { reasoning: "It shows libraries serve those without alternatives — the strongest support for 'gathering space'.", working: "\\text{'cannot afford one'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** 'a second living room for people who cannot afford one'",
            commonErrors: ["Choosing (c) — borrowing stats support but do not capture the gathering-space claim."],
          },
        },
        {
          id: "cile-u3-media-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: articleExtract,
          stem: "How might a biased pro-library article differ from this one? Identify two changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bias in media", statement: "Bias selects evidence and frames opposition unfairly." },
            ],
            steps: [
              { reasoning: "Change 1: cite only pro-library studies, omit any decline or funding problems.", working: "\\text{selective evidence}", marks: 1, markCode: "AO2" },
              { reasoning: "Change 2: frame critics as villains ('heartless politicians') rather than quoting them fairly.", marks: 1, markCode: "AO2" },
              { reasoning: "Both changes would turn balanced analysis into one-sided promotion.", marks: 1, markCode: "AO2" },
              { reasoning: "This article is relatively balanced — it quotes critics and admits borrowing is only part of it.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "A biased version would cite only supportive evidence and demonise critics — e.g. 'heartless politicians want to close your library' — instead of the current balanced, evidence-led approach.",
            commonErrors: ["Saying 'it would be more positive' without specifying the bias mechanisms."],
          },
        },
        {
          id: "cile-u3-media-q15",
          difficulty: "challenge",
          totalMarks: 9,
          extract: flyerExtract,
          stem: "You are analysing the community-garden leaflet as persuasive media.",
          parts: [
            { label: "a", prompt: "Analyse the headline's framing.", marks: 2 },
            { label: "b", prompt: "Identify two emotional appeals in the body.", marks: 2 },
            { label: "c", prompt: "How does the leaflet handle the council's opposing position?", marks: 2 },
            { label: "d", prompt: "Explain how layout and emphasis would direct attention in a printed version.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Media persuasion", statement: "Headline frames, body appeals, opposition exposed, layout directs the eye to the CTA." },
            ],
            steps: [
              { part: "a", reasoning: "'Save' imperative = urgency; 'Community' = belonging.", working: "\\text{imperative + community}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Frames the issue as moral duty, not policy debate.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Appeal 1: vulnerable groups — children, elderly, affordability.", working: "\\text{vulnerable}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Appeal 2: 'community feeds itself' — identity and loss.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Council's words quoted in scare quotes — exposed as euphemistic.", working: "\\text{scare quotes}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Position acknowledged but reframed as dismissive of community reality.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Layout: headline large at top, body paragraphs, CTA bold at bottom.", working: "\\text{layout}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Bold/emphasis on 'community feeds itself' and 'sign the petition' directs the eye.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "The eye is led from hook to emotion to action — layout completes the persuasion.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) imperative + community = moral urgency (b) vulnerable groups; community identity (c) council's words scare-quoted and reframed as dismissive (d) headline hooks, bold CTA at bottom, emphasis guides eye to action",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Headline framing analysed.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two appeals identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Opposition handling analysed.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Layout function explained convincingly.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) describing layout without linking it to persuasive direction."],
          },
        },
        {
          id: "cile-u3-media-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: articleExtract,
          stem: "You are evaluating the library article as media.",
          parts: [
            { label: "a", prompt: "Analyse the opening's framing of the 'relic vs revival' debate.", marks: 2 },
            { label: "b", prompt: "How does the article use statistics as evidence?", marks: 2 },
            { label: "c", prompt: "Explain the effect of 'The internet cannot provide that'.", marks: 2 },
            { label: "d", prompt: "Is the article balanced or biased? Justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Media literacy", statement: "Framing, evidence and omissions reveal bias; balance acknowledges complexity." },
            ],
            steps: [
              { part: "a", reasoning: "Opening frames libraries as dismissed 'relics', then 'unexpected' revival — reversal.", working: "\\text{relic → return}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "The mocking quote of critics primes the reader for the turnaround.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "'Up 30%', 'doubled' — specific figures make the claim verifiable.", working: "\\text{30\\%; doubled}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Statistics lend the revival factual weight rather than rhetorical heat.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Short absolute claim — 'cannot provide that' — lands as a verdict.", working: "\\text{cannot provide}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Reframes libraries as irreplaceable human gathering — the real point.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Mostly balanced — quotes critics, admits borrowing is only part.", working: "\\text{mostly balanced}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "But 'relics' framing and 'cannot provide' verdict lean persuasive — mild bias.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) relic→return reversal primes reader for revival (b) statistics make claim verifiable (c) short verdict reframes libraries as irreplaceable gathering space (d) mostly balanced but mildly persuasive — quotes critics yet lands a strong verdict",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Opening framing analysed.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Statistical evidence explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Final line's effect explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Balanced/biased verdict justified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "One-sided.", part: "d" },
            ],
            commonErrors: ["In (d) answering 'biased' or 'balanced' absolutely without weighing evidence."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u3-nonfiction-media-notes",
      title: "Non-fiction and media texts — revision notes",
      summary: "Text features, persuasive language, headline framing and media literacy.",
      sections: [
        {
          heading: "Text features",
          body: "Headlines hook and frame; subheadings organise; calls to action direct; emotive appeals motivate. Informative texts balance; persuasive texts select.",
        },
        {
          heading: "Media literacy",
          body: "Analyse framing, not just content: who benefits? what is omitted? how are people labelled? Quoted opposition and euphemisms reveal bias.",
        },
        {
          heading: "Exam technique",
          body: "For media questions: identify the feature, quote it, explain its persuasive function, then evaluate fairness or bias.",
        },
      ],
    },
  ],
};
