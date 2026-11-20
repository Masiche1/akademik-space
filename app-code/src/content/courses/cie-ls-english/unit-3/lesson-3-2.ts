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
              { id: "a", text: "To inform people about gardening" },
              { id: "b", text: "To persuade people to sign a petition against the car park plan" },
              { id: "c", text: "To describe the history of the community garden" },
              { id: "d", text: "To complain about the council's parking policy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose", statement: "The leaflet wants signatures on a petition — persuasion is the goal." },
            ],
            steps: [
              { reasoning: "The call to action 'Please sign the petition' makes the purpose explicit.", working: "\\text{sign the petition}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** To persuade people to sign a petition against the car park plan",
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
              { id: "a", text: "It is neutral and factual" },
              { id: "b", text: "It uses a command to create urgency and moral duty" },
              { id: "c", text: "It describes the garden's history" },
              { id: "d", text: "It asks a question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imperative headline", statement: "A command verb creates urgency and positions the reader as someone who must act." },
            ],
            steps: [
              { reasoning: "'Save' is an imperative — it commands action.", working: "\\text{'save'}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** It uses a command to create urgency and moral duty",
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
