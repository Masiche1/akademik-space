import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cial-e-u6-lesson-6-3",
  code: "6-3",
  title: "Literature Essay Technique",
  goal: "I CAN structure and write effective comparative and analytical essays on set texts.",
  standards: ["9093: Literature in English"],
  vocabulary: [
    { term: "Thesis statement", definition: "Central argument of an essay." },
    { term: "PEE", definition: "Point, Evidence, Explanation structure." },
    {
      term: "Topic sentence",
      definition: "Sentence introducing paragraph's main idea.",
    },
    { term: "Linking", definition: "Connecting ideas between paragraphs." },
    {
      term: "Integrated quotation",
      definition: "Weaving quotes into sentences naturally.",
    },
    {
      term: "Critical evaluation",
      definition: "Weighing interpretations and judging.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u6-essay-technique",
      title: "Essay Structure and Technique",
      skill: "Structure essays with clear argument, evidence and analysis.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "Introduction: hook + context + clear thesis. Body paragraphs: topic sentence → evidence (quotation) → analysis (how/why) → link to thesis. Conclusion: summarise argument, answer question directly. For comparative essays: compare throughout, not separately.",
          },
          {
            heading: "PEE and analysis",
            body: "Point (what you're arguing) → Evidence (quotation) → Explanation (how it proves point). Extend: zoom into specific words/phrases, analyse connotations, link to themes/author's methods. Avoid plot summary — analyse meaning, not retell.",
          },
          {
            heading: "Quotation and linking",
            body: "Integrate quotes: 'The metaphor of X suggests...' not 'The quote says X.' Analyse word choice: why this word? What connotations? Compare: 'Unlike Text A's..., Text B...' Link paragraphs: 'This contrasts with...' or 'Building on this...' Conclude each paragraph by returning to thesis.",
          },
        ],
        keyFormulas: [
          {
            name: "Essay technique",
            statement:
              "Thesis→PEE→analysis→link; integrated quotes; compare throughout.",
          },
        ],
        workedExample: {
          problem: "How to structure a comparative essay?",
          solution:
            "Thesis comparing both texts on theme → paragraphs analysing both texts on specific aspect → conclusions tying comparison together.",
        },
      },
      questions: [
        {
          id: "cial-e-u6-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a thesis statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First paragraph" },
              { id: "b", text: "Conclusion" },
              { id: "c", text: "Central argument of essay" },
              { id: "d", text: "Quotation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thesis",
                statement: "Central argument.",
              },
            ],
            steps: [
              { reasoning: "Central argument.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Central argument of essay",
            commonErrors: ["Confusing with topic."],
          },
        },
        {
          id: "cial-e-u6-et-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does PEE stand for in essay writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PEE",
                statement: "Point, Evidence, Explanation.",
              },
            ],
            steps: [
              { reasoning: "Any two parts.", marks: 1, markCode: "AO1" },
              { reasoning: "All three correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Point, Evidence, Explanation.",
            commonErrors: ["Missing one."],
          },
        },
        {
          id: "cial-e-u6-et-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why should comparative essays weave comparison throughout?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weaving comparison",
                statement: "Integrated analysis > separate essays.",
              },
            ],
            steps: [
              {
                reasoning: "Shows deeper analysis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Avoids two separate essays.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Required by question.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Weaving comparison shows integrated analysis — separate treatment of each text reads as two essays, not a comparison.",
            commonErrors: ["Comparing only at end."],
          },
        },
        {
          id: "cial-e-u6-et-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Essay technique.",
          parts: [
            { label: "a", prompt: "Essay structure?", marks: 3 },
            { label: "b", prompt: "PEE?", marks: 2 },
            { label: "c", prompt: "Quotation?", marks: 2 },
            { label: "d", prompt: "Comparison?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technique",
                statement: "Structure+PEE+quotes+comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Intro/thesis/body/conclusion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Topic sentences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Clear structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Point/Evidence/Explanation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Analysis not summary.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Integrated quotes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Analyse word choice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Weave throughout.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Not separate essays.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) structure (b) PEE (c) quotes (d) comparison",
          },
        },
        {
          id: "cial-e-u6-et-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a topic sentence do in an essay paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ends the essay" },
              { id: "b", text: "Introduces the paragraph's main idea" },
              { id: "c", text: "Lists all quotations" },
              { id: "d", text: "Repeats the title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Topic sentence",
                statement: "Introduces the paragraph's main idea.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence signposts the argument.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Introduces the paragraph's main idea",
            commonErrors: ["Using it as a quotation."],
          },
        },
        {
          id: "cial-e-u6-et-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How should a quotation be integrated into an analytical sentence?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Woven into the sentence so it flows into your analysis"
              },
              { id: "b", text: "Translated into your own words" },
              { id: "c", text: "Dropped in on its own line" },
              { id: "d", text: "Placed in the introduction only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integrated quotation",
                statement: "Quote flows into the analytical sentence.",
              },
            ],
            steps: [
              {
                reasoning: "Integration keeps analysis in control.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Woven into the analytical sentence",
            commonErrors: ["Standalone quotation blocks."],
          },
        },
        {
          id: "cial-e-u6-et-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the function of 'linking' between essay paragraphs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To shorten the essay" },
              { id: "b", text: "To connect ideas and show argument progression" },
              { id: "c", text: "To repeat the same point" },
              { id: "d", text: "To add page numbers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Linking",
                statement: "Connects ideas between paragraphs.",
              },
            ],
            steps: [
              {
                reasoning: "Linking creates coherence.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Connect ideas, show progression",
            commonErrors: ["Paragraphs that don't connect."],
          },
        },
        {
          id: "cial-e-u6-et-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What should the conclusion of a literature essay do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List every quotation used" },
              { id: "b", text: "Introduce a brand-new argument" },
              { id: "c", text: "Apologise for the essay" },
              {
                id: "d",
                text: "Answer the question directly and summarise the argument"
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conclusion",
                statement: "Summarise argument and answer the question.",
              },
            ],
            steps: [
              {
                reasoning: "Conclusions synthesise, not introduce.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Direct answer to the question is required.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Answer directly + summarise argument",
            commonErrors: ["Adding new points in the conclusion."],
          },
        },
        {
          id: "cial-e-u6-et-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should an essay 'zoom into' specific words and phrases in a quotation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It replaces the need for quotations" },
              {
                id: "b",
                text: "Word choice reveals connotations, tone and the author's methods"
              },
              { id: "c", text: "It fills up space" },
              { id: "d", text: "It proves the essay is long" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Word-level analysis",
                statement: "Specific words reveal connotation and method.",
              },
            ],
            steps: [
              {
                reasoning: "Close word analysis shows method.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It moves beyond general comment.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Word choice reveals connotations and methods",
            commonErrors: ["Analysing quotations only generally."],
          },
        },
        {
          id: "cial-e-u6-et-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is plot summary penalised in literature essays?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is required for low grades" },
              {
                id: "b",
                text: "It retells events instead of analysing how meaning is created"
              },
              { id: "c", text: "It uses too many marks" },
              { id: "d", text: "It is never accurate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "No summary",
                statement: "Analyse meaning creation, not events.",
              },
            ],
            steps: [
              {
                reasoning: "Summary describes; analysis interprets.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Examiners reward analytical depth.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Retells rather than analyses",
            commonErrors: ["Narrating the plot in essays."],
          },
        },
        {
          id: "cial-e-u6-et-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An essay of 1000 words allocates 100 words to the introduction, 800 to the body and 100 to the conclusion. How many words are in the body?",
          response: {
            type: "numeric",
            parts: [{ label: "body", answer: 800 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Word allocation",
                statement: "Body usually carries the largest share.",
              },
            ],
            steps: [
              {
                reasoning: "Read the body allocation directly.",
                working: "800",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "800",
            commonErrors: ["Calculating a percentage instead."],
          },
        },
        {
          id: "cial-e-u6-et-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A PEE paragraph uses 40 words for the Point, 30 for the Evidence and 50 for the Explanation. Enter the total word count and the words used for the Explanation.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 120 },
              { label: "explanation", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEE balance",
                statement: "Explanation should dominate the paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "Sum the three sections.",
                working: "40 + 30 + 50 = 120",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Read the Explanation count.",
                working: "50",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "total = 120, explanation = 50",
            commonErrors: ["Allocating most words to evidence."],
          },
        },
        {
          id: "cial-e-u6-et-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "An essay has 4 body paragraphs and each uses 3 integrated quotations. How many quotations appear in the body?",
          response: {
            type: "numeric",
            parts: [{ label: "quotations", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quotation count",
                statement: "Quotations = paragraphs × per paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply paragraphs by quotations each.",
                working: "4 \\times 3 = 12",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "12",
            commonErrors: ["Using the same quotation repeatedly."],
          },
        },
        {
          id: "cial-e-u6-et-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A timed essay allows 60 minutes: 10 for planning, 45 for writing and 5 for checking. Enter the writing time and the combined planning and checking time.",
          response: {
            type: "numeric",
            parts: [
              { label: "writing", answer: 45 },
              { label: "plan_check", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time budget",
                statement: "Writing should take the largest share.",
              },
            ],
            steps: [
              {
                reasoning: "Read the writing allocation.",
                working: "45",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Add planning and checking.",
                working: "10 + 5 = 15",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "writing = 45, plan+check = 15",
            commonErrors: ["Exceeding the total time."],
          },
        },
        {
          id: "cial-e-u6-et-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A paragraph markscheme allocates 2 marks to the thesis link, 3 to evidence and 5 to analysis. Enter the total marks, the largest component, and the number of components.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 10 },
              { label: "largest", answer: 5 },
              { label: "components", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Component marks",
                statement: "Total = sum; analysis typically carries most.",
              },
            ],
            steps: [
              {
                reasoning: "Sum the components.",
                working: "2 + 3 + 5 = 10",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Largest is analysis at 5.",
                working: "\\max(2, 3, 5) = 5",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Count the components.",
                working: "3",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "total = 10, largest = 5, components = 3",
            commonErrors: ["Giving evidence the most marks."],
          },
        },
        {
          id: "cial-e-u6-et-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to integrate a quotation and analyse word choice in a literature essay paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quotation technique",
                statement: "Integrate quote → analyse words → link to argument.",
              },
            ],
            steps: [
              {
                reasoning: "Introduce the quote inside your own sentence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Zoom into specific words/phrases.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Analyse connotations and authorial method.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Link the point back to the thesis.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Integrate → zoom into words → analyse connotation → link to thesis.",
            commonErrors: ["Quoting without word-level analysis."],
          },
        },
      ],
    },
    {
      id: "cial-e-u6-context",
      title: "Context and Interpretation",
      skill:
        "Use historical, biographical and cultural context in literary analysis.",
      lesson: {
        sections: [
          {
            heading: "Types of context",
            body: "Historical: period events shaping text (WWI poetry, Victorian morality, colonialism). Biographical: author's life experiences influencing work. Cultural: social norms, beliefs, values of the time. Literary: movements (Romanticism, Modernism), intertextuality.",
          },
          {
            heading: "Using context effectively",
            body: "Context should illuminate text, not replace analysis. 'In the context of Victorian patriarchy, the character's...' — links background to specific textual evidence. Avoid bolting on context — integrate where relevant. Multiple interpretations possible — support yours.",
          },
          {
            heading: "Intentional fallacy",
            body: "Debate: should author's intended meaning matter? Wimsatt & Beardsley argued text stands alone — meaning in words, not author. Modern view: consider author but don't limit to intention — texts mean more than author planned. Reader response theory: meaning created by reader-text interaction.",
          },
        ],
        keyFormulas: [
          {
            name: "Context",
            statement:
              "Historical+biographical+cultural+literary; illuminate not replace; intentional fallacy.",
          },
        ],
        workedExample: {
          problem: "How to use context without 'bolting it on'?",
          solution:
            "Link context to specific textual evidence — 'The character's confinement reflects Victorian domestic ideology' connects background to text detail.",
        },
      },
      questions: [
        {
          id: "cial-e-u6-cx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the intentional fallacy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Believing author's intention is the only meaning",
              },
              { id: "b", text: "Forgetting historical context" },
              { id: "c", text: "Reading too much into text" },
              { id: "d", text: "Ignoring the author entirely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intentional fallacy",
                statement: "Author's intent ≠ only meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Intent as only meaning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Believing author's intention is the only meaning",
            commonErrors: ["Reversed understanding."],
          },
        },
        {
          id: "cial-e-u6-cx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of context relevant to literature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Context types",
                statement: "Historical, biographical, cultural, literary.",
              },
            ],
            steps: [
              { reasoning: "Any two types.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Historical, biographical, cultural, literary/movement.",
            commonErrors: ["Only one type."],
          },
        },
        {
          id: "cial-e-u6-cx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should context be used in literary essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context use",
                statement: "Illuminate text, not replace analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Link to specific evidence.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Don't bolt on.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Integrate where relevant.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Context should illuminate textual evidence — integrate where relevant, don't bolt on or replace analysis.",
            commonErrors: ["Context without text links."],
          },
        },
        {
          id: "cial-e-u6-cx-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Context and interpretation.",
          parts: [
            { label: "a", prompt: "Context types?", marks: 3 },
            { label: "b", prompt: "Using context?", marks: 2 },
            { label: "c", prompt: "Intentional fallacy?", marks: 2 },
            { label: "d", prompt: "Multiple interpretations?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context",
                statement: "Types+use+fallacy+interpretations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Historical/biographical.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Cultural/literary.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "a", reasoning: "All named.", marks: 1, markCode: "AO2" },
              {
                part: "b",
                reasoning: "Link to evidence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Illuminate not replace.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Intent ≠ only meaning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Text stands alone debate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Multiple valid readings.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Support with evidence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) types (b) use (c) fallacy (d) interpretations",
          },
        },
        {
          id: "cial-e-u6-cx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of historical context shaping a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The poet's favourite colour" },
              { id: "b", text: "The price of the book" },
              { id: "c", text: "The font used on the page" },
              { id: "d", text: "WWI experiences shaping war poetry" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Historical context",
                statement: "Period events shape the text's concerns.",
              },
            ],
            steps: [
              {
                reasoning: "Historical events directly influence content.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** WWI shaping war poetry",
            commonErrors: ["Confusing context with publication details."],
          },
        },
        {
          id: "cial-e-u6-cx-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'biographical context' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The genre of the text" },
              { id: "b", text: "The book's sales figures" },
              { id: "c", text: "The author's life experiences influencing the work" },
              { id: "d", text: "The number of chapters" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Biographical context",
                statement: "Author's life experiences shape the work.",
              },
            ],
            steps: [
              {
                reasoning: "Biography can illuminate themes and attitudes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Author's life influencing the work",
            commonErrors: ["Confusing with historical context."],
          },
        },
        {
          id: "cial-e-u6-cx-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'cultural context' include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of pages" },
              { id: "b", text: "The paper quality" },
              { id: "c", text: "The author's favourite foods" },
              { id: "d", text: "Social norms, beliefs and values of the period" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Cultural context",
                statement: "Social norms, beliefs and values of the time.",
              },
            ],
            steps: [
              {
                reasoning: "Culture shapes attitudes within the text.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Social norms and values of the period",
            commonErrors: ["Confusing with biographical context."],
          },
        },
        {
          id: "cial-e-u6-cx-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What does 'literary context' typically include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Literary movements such as Romanticism and Modernism" },
              { id: "b", text: "The author's shoe size" },
              { id: "c", text: "The cost of paper" },
              { id: "d", text: "The weather on publication day" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Literary context",
                statement: "Movements, intertextuality, literary traditions.",
              },
            ],
            steps: [
              {
                reasoning: "Literary movements shape form and themes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Intertextuality belongs to literary context.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Literary movements and traditions",
            commonErrors: ["Confusing with historical context."],
          },
        },
        {
          id: "cial-e-u6-cx-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What does reader response theory claim about meaning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only critics can find meaning" },
              { id: "b", text: "Texts have no meaning" },
              {
                id: "c",
                text: "Meaning is created by the interaction between reader and text"
              },
              { id: "d", text: "Meaning is fixed by the author alone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reader response",
                statement: "Meaning emerges from reader-text interaction.",
              },
            ],
            steps: [
              {
                reasoning: "Reader response shifts focus to the reader.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "It supports multiple valid interpretations.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Reader-text interaction creates meaning",
            commonErrors: ["Confusing with intentional fallacy."],
          },
        },
        {
          id: "cial-e-u6-cx-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What did Wimsatt and Beardsley argue about the author's intention?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Authors should not write" },
              {
                id: "b",
                text: "The text should be judged on its own words, independent of intention"
              },
              { id: "c", text: "Intentions are always obvious" },
              { id: "d", text: "Author intention is the only valid meaning" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Intentional fallacy",
                statement: "Wimsatt & Beardsley: text stands alone.",
              },
            ],
            steps: [
              {
                reasoning: "They separated text from authorial intent.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Meaning resides in the words themselves.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Text judged on its own words",
            commonErrors: ["Reversing their argument."],
          },
        },
        {
          id: "cial-e-u6-cx-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An essay uses 3 of the 4 context types. How many context types are unused?",
          response: {
            type: "numeric",
            parts: [{ label: "unused", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context types",
                statement: "Unused = total types − used types.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract used from total.",
                working: "4 - 3 = 1",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "1",
            commonErrors: ["Answering 3 (used) instead of unused."],
          },
        },
        {
          id: "cial-e-u6-cx-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "An essay includes 2 historical references, 1 biographical reference and 2 cultural references. How many context references appear in total?",
          response: {
            type: "numeric",
            parts: [{ label: "references", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context references",
                statement: "Total = sum of all context types used.",
              },
            ],
            steps: [
              {
                reasoning: "Add all reference types.",
                working: "2 + 1 + 2 = 5",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting only one context type."],
          },
        },
        {
          id: "cial-e-u6-cx-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A context question allocates 2 marks to identifying context, 3 to applying it to the text, and 2 to evaluation. Enter the total marks and the marks for the largest component.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 7 },
              { label: "largest", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context marks",
                statement: "Application typically carries the most marks.",
              },
            ],
            steps: [
              {
                reasoning: "Sum the components.",
                working: "2 + 3 + 2 = 7",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Largest is application at 3.",
                working: "\\max(2, 3, 2) = 3",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "total = 7, largest = 3",
            commonErrors: ["Assuming identification carries most marks."],
          },
        },
        {
          id: "cial-e-u6-cx-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An essay defends 3 different interpretations of a text, using 2 pieces of textual evidence for each. How many pieces of evidence are required in total?",
          response: {
            type: "numeric",
            parts: [{ label: "evidence", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpretation evidence",
                statement: "Evidence = interpretations × per interpretation.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply interpretations by evidence each.",
                working: "3 \\times 2 = 6",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Each interpretation needs its own support.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "6",
            commonErrors: ["Sharing one quotation across all readings."],
          },
        },
        {
          id: "cial-e-u6-cx-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A context-analysis question allocates 3 marks to knowledge, 4 to application and 3 to evaluation. Enter the total marks, the largest component, and the number of components.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 10 },
              { label: "largest", answer: 4 },
              { label: "components", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context question marks",
                statement: "Total = knowledge + application + evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "Sum the three allocations.",
                working: "3 + 4 + 3 = 10",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Largest is application at 4.",
                working: "\\max(3, 4, 3) = 4",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Count the components.",
                working: "3",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "total = 10, largest = 4, components = 3",
            commonErrors: ["Forgetting evaluation marks."],
          },
        },
        {
          id: "cial-e-u6-cx-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the intentional fallacy and how it should affect essay writing on literature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Intentional fallacy",
                statement: "Author's intention is not the only valid meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Define the fallacy accurately.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Explain the text-stands-alone argument.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Show how it permits multiple interpretations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advise evidence-based interpretation in essays.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Intent ≠ only meaning; support interpretations with textual evidence.",
            commonErrors: ["Equating the fallacy with ignoring authors entirely."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u6-6-3-notes",
      title: "Essay technique and context — notes",
      summary:
        "Essay structure/PEE/quotation; context types, intentional fallacy, interpretations.",
      sections: [
        {
          heading: "Technique",
          body: "Thesis→PEE→analysis→link; integrated quotes; weave comparison throughout.",
        },
        {
          heading: "Context",
          body: "Historical/biographical/cultural/literary; illuminate text; intentional fallacy; multiple interpretations.",
        },
      ],
    },
  ],
};
