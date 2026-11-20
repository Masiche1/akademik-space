import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cie-ol-fl-lesson-1-3",
  code: "1-3",
  title: "Analysing prose extracts",
  goal: "I CAN write structured analytical responses to prose extracts.",
  standards: ["1119 Reading: analytical response"],
  vocabulary: [
    { term: "Extract analysis", definition: "Close reading of a passage." },
    { term: "Evidence", definition: "Quotations supporting analysis." },
    { term: "Interpretation", definition: "Explaining meaning/effect." },
    { term: "Tone", definition: "Writer's attitude toward subject." },
    { term: "Structure", definition: "How extract is organised." },
    { term: "Judgement", definition: "Overall assessment of extract." },
  ],
  concepts: [
    {
      id: "cie-ol-fl-extract-analysis",
      title: "Close analysis of extracts",
      skill: "Read extracts closely and analyse language and structure.",
      lesson: {
        sections: [
          {
            heading: "First reading",
            body: "Read for gist — what's happening? Note tone, mood, key images. Then re-read for detail — specific word choices, structural features.",
          },
          {
            heading: "Analysing language",
            body: "Identify techniques: imagery, symbolism, diction, syntax, figurative language. For each, explain effect — don't just name.",
          },
          {
            heading: "Analysing structure",
            body: "Consider: where in text does extract appear? How does it build toward/away from climax? Sentence variety, paragraph breaks, pacing.",
          },
        ],
        keyFormulas: [
          { name: "Extract analysis", statement: "Gist→language→structure→effect→judgement." },
        ],
        workedExample: {
          problem: "Analyse an extract describing a character's fear.",
          solution: "Gist: character alone at night. Language: short sentences create tension; 'shadows' imagery. Structure: isolated setting. Effect: reader feels fear with character.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ea-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do on first reading of an extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Understand gist and tone" },
              { id: "b", text: "Analyse every word" },
              { id: "c", text: "Write essay immediately" },
              { id: "d", text: "Skip to questions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "First reading", statement: "Understand gist, tone, mood before detailed analysis." },
            ],
            steps: [
              { reasoning: "Gist first, then detail.", working: "gist", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Understand gist and tone",
            commonErrors: ["Choosing (b) — too detailed too soon."],
          },
        },
        {
          id: "cie-ol-fl-ea-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is structure important in extract analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Structure", statement: "Shows how extract functions within whole text — builds tension, reveals meaning." },
            ],
            steps: [
              { reasoning: "Structure shows function in whole text.", working: "function", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Shows how extract functions in whole text — builds tension/reveals meaning.",
            commonErrors: ["Ignoring structural position."],
          },
        },
        {
          id: "cie-ol-fl-ea-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to write a strong extract analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extract response", statement: "Gist→evidence→technique→effect→judgement." },
            ],
            steps: [
              { reasoning: "Start with gist/context of extract.", working: "gist", marks: 1, markCode: "AO2" },
              { reasoning: "Quote evidence for each point.", working: "evidence", marks: 1, markCode: "AO2" },
              { reasoning: "Explain technique AND effect.", working: "effect", marks: 1, markCode: "AO2" },
              { reasoning: "Conclude with judgement on extract's role.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Gist→evidence→technique+effect→judgement.",
            commonErrors: ["Listing techniques without effects."],
          },
        },
        {
          id: "cie-ol-fl-ea-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Extract analysis skills.",
          parts: [
            { label: "a", prompt: "First reading approach?", marks: 1 },
            { label: "b", prompt: "Why structure matters?", marks: 2 },
            { label: "c", prompt: "How to write strong analysis?", marks: 3 },
            { label: "d", prompt: "What evidence to use?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extract analysis", statement: "Reading, structure, response, evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Gist, tone, mood first.", working: "first", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Shows function in whole text.", working: "structure", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Gist→evidence→technique+effect→judgement.", working: "response", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Short quotes, reference position, explain significance.", working: "evidence", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) gist first (b) function in text (c) gist→evidence→effect→judgement (d) short quotes+significance",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Steps clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Evidence clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Analysis without textual evidence."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-essay-writing",
      title: "Writing analytical essays",
      skill: "Structure and write effective literary essays.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "Introduction: context + thesis. Body: one idea per paragraph — evidence + analysis. Conclusion: summary + significance.",
          },
          {
            heading: "Paragraph structure",
            body: "Topic sentence → evidence → analysis → link to thesis. Each paragraph develops one point.",
          },
          {
            heading: "Academic style",
            body: "Formal register, precise vocabulary, analytical (not narrative) focus. Present tense for literary analysis.",
          },
        ],
        keyFormulas: [
          { name: "Essay structure", statement: "Intro+thesis→evidence paragraphs→conclusion+significance." },
        ],
        workedExample: {
          problem: "Write essay on 'the role of women' in a novel.",
          solution: "Intro: thesis on portrayal. Body 1: character evidence. Body 2: societal context. Conclusion: significance to theme.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ew-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'thesis' in a literary essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Main argument" },
              { id: "b", text: "First paragraph" },
              { id: "c", text: "Evidence quote" },
              { id: "d", text: "Plot summary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thesis", statement: "Main argument/central claim of essay." },
            ],
            steps: [
              { reasoning: "Thesis = main argument.", working: "argument", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Main argument",
            commonErrors: ["Choosing (d) — that's summary."],
          },
        },
        {
          id: "cie-ol-fl-ew-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What tense should literary analysis use?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tense", statement: "Present tense for literary analysis — 'the character represents'." },
            ],
            steps: [
              { reasoning: "Present tense is convention.", working: "present", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Present tense — analysis describes text as it exists.",
            commonErrors: ["Past tense — treat literary works as timeless."],
          },
        },
        {
          id: "cie-ol-fl-ew-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to avoid plot summary in essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysis vs summary", statement: "Focus on how/why — techniques, effects, meaning." },
            ],
            steps: [
              { reasoning: "Ask 'how' and 'why' not 'what'.", working: "how/why", marks: 1, markCode: "AO2" },
              { reasoning: "Analyse techniques and effects.", working: "techniques", marks: 1, markCode: "AO2" },
              { reasoning: "Link details to thesis/theme.", working: "theme", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "How/why+techniques+effects+theme — not plot summary.",
            commonErrors: ["Retelling story instead of analysing."],
          },
        },
        {
          id: "cie-ol-fl-ew-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Essay writing skills.",
          parts: [
            { label: "a", prompt: "Define thesis.", marks: 1 },
            { label: "b", prompt: "Correct tense?", marks: 1 },
            { label: "c", prompt: "How to avoid plot summary?", marks: 3 },
            { label: "d", prompt: "Paragraph structure?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Essay", statement: "Thesis, tense, analysis vs summary, paragraph structure." },
            ],
            steps: [
              { part: "a", reasoning: "Main argument.", working: "thesis", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Present tense.", working: "present", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "How/why, techniques, effects, theme.", working: "analysis", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple aspects.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Topic sentence→evidence→analysis→link.", working: "paragraph", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple elements.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "One idea per paragraph.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) main argument (b) present tense (c) how/why not what (d) topic→evidence→analysis→link",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong tense.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Analysis clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "Structure clear.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Plot summary instead of analysis."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-argument-evaluation",
      title: "Evaluating arguments in texts",
      skill: "Assess arguments, biases and evidence quality.",
      lesson: {
        sections: [
          {
            heading: "Identifying arguments",
            body: "Claim + evidence + reasoning. Look for persuasive techniques: emotive language, rhetorical questions, statistics, anecdotes.",
          },
          {
            heading: "Assessing evidence",
            body: "Is evidence relevant? Sufficient? From reliable sources? Statistics vs anecdotes — which is stronger?",
          },
          {
            heading: "Bias and perspective",
            body: "Every text has perspective. Identify whose view is represented, what's omitted, whose interests are served.",
          },
        ],
        keyFormulas: [
          { name: "Argument evaluation", statement: "Claim+evidence+reasoning; assess relevance, reliability, bias." },
        ],
        workedExample: {
          problem: "Article uses only emotional language, no data.",
          solution: "Weak argument — emotive appeals without evidence. Persuasive but not well-supported.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ae-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes an argument persuasive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotive language" },
              { id: "b", text: "Statistics and evidence" },
              { id: "c", text: "Long sentences" },
              { id: "d", text: "Complex words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Persuasion", statement: "Evidence-based arguments persuade better than emotion alone." },
            ],
            steps: [
              { reasoning: "Evidence persuades.", working: "evidence", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Statistics and evidence",
            commonErrors: ["Choosing (a) — emotion alone is weak persuasion."],
          },
        },
        {
          id: "cie-ol-fl-ae-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'bias' in a text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bias", statement: "One-sided perspective favouring particular view." },
            ],
            steps: [
              { reasoning: "One-sided view.", working: "one-sided", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "One-sided perspective favouring a particular view.",
            commonErrors: ["Thinking bias = wrong — it's about perspective."],
          },
        },
        {
          id: "cie-ol-fl-ae-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to evaluate quality of evidence?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence evaluation", statement: "Check relevance, reliability, sufficiency, source." },
            ],
            steps: [
              { reasoning: "Is evidence relevant to claim?", working: "relevant", marks: 1, markCode: "AO2" },
              { reasoning: "Is source reliable? Statistics > anecdotes.", working: "reliable", marks: 1, markCode: "AO2" },
              { reasoning: "Is there enough evidence?", working: "sufficient", marks: 1, markCode: "AO2" },
              { reasoning: "Criteria explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Relevant+reliable+sufficient+source quality.",
            commonErrors: ["Accepting any evidence without checking."],
          },
        },
        {
          id: "cie-ol-fl-ae-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Argument evaluation.",
          parts: [
            { label: "a", prompt: "What persuades effectively?", marks: 1 },
            { label: "b", prompt: "Define bias.", marks: 2 },
            { label: "c", prompt: "How to evaluate evidence?", marks: 3 },
            { label: "d", prompt: "Persuasive techniques?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Arguments", statement: "Persuasion, bias, evidence, techniques." },
            ],
            steps: [
              { part: "a", reasoning: "Statistics and evidence.", working: "persuade", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "One-sided perspective.", working: "bias", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Relevant, reliable, sufficient, source.", working: "evidence", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple criteria.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Emotive language, rhetorical questions, statistics, anecdotes, repetition.", working: "techniques", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) evidence (b) one-sided view (c) relevant+reliable+sufficient (d) emotive/rhetorical/stats",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Criteria clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Techniques listed.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "d" },
            ],
            commonErrors: ["Not identifying bias in sources."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-analysis-notes-1",
      title: "Prose analysis — revision notes",
      summary: "Extract analysis, essay writing, argument evaluation.",
      sections: [
        {
          heading: "Analysis",
          body: "Extract: gist→evidence→technique+effect→judgement. Essay: thesis→evidence paragraphs→conclusion. Arguments: claim+evidence+reasoning; assess bias and reliability.",
        },
      ],
    },
  ],
};
