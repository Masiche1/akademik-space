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
              { id: "a", text: "Central argument of essay" },
              { id: "b", text: "First paragraph" },
              { id: "c", text: "Quotation" },
              { id: "d", text: "Conclusion" },
            ],
            correctChoiceId: "a",
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
              { id: "b", text: "Ignoring the author entirely" },
              { id: "c", text: "Reading too much into text" },
              { id: "d", text: "Forgetting historical context" },
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
