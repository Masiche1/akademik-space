import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "oles-u3-lesson-3-2",
  code: "3-2",
  title: "Reports and articles",
  goal: "I CAN write clear reports and articles for a specific audience.",
  standards: ["1120 Writing: reports and articles"],
  vocabulary: [
    { term: "Report", definition: "A factual account of events, findings or activities, organised in sections." },
    { term: "Article", definition: "A piece of writing for a newspaper or magazine on a topic." },
    { term: "Headline", definition: "A short attention-grabbing title for an article." },
    { term: "Introduction", definition: "The opening paragraph stating the topic and purpose." },
    { term: "By-line", definition: "The writer's name shown under a newspaper headline." },
  ],
  concepts: [
    {
      id: "oles-u3-report",
      title: "Writing reports",
      skill: "Structure a factual report with clear sections.",
      lesson: {
        sections: [
          { heading: "Report structure", body: "Reports are factual and organised: title, introduction (purpose and background), findings or events in order, conclusion or recommendations. Use past tense for events that happened. Headings and numbered points make reports readable." },
          { heading: "Tone of reports", body: "Reports are objective — no 'I think' or emotional language. Present information clearly: 'The meeting discussed three issues' not 'We had a great chat about stuff'." },
        ],
        keyFormulas: [
          { name: "Report", statement: "Title → intro → findings/events → conclusion; objective past tense." },
        ],
        workedExample: {
          problem: "A report on a school trip needs sections. What order?",
          solution: "Title → introduction (where, when, why) → events in chronological order → conclusion (what was learned).",
        },
      },
      questions: [
        {
          id: "oles-u3-rp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A report should be written in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Objective, factual language" },
            { id: "b", text: "Emotional, personal language" },
            { id: "c", text: "Poetic language" },
            { id: "d", text: "Question form throughout" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Report tone", statement: "Objective and factual." }], steps: [{ reasoning: "Reports state facts, not feelings.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Objective, factual language" },
        },
        {
          id: "oles-u3-rp-q2", difficulty: "core", totalMarks: 2,
          stem: "Name the sections of a simple report.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Report structure", statement: "Title, intro, findings, conclusion." }], steps: [
            { reasoning: "Title, introduction, findings/events, conclusion.", marks: 1, markCode: "AO2" },
            { reasoning: "All four named.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Title; introduction; findings/events; conclusion." },
        },
        {
          id: "oles-u3-rp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why reports use the past tense for events.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Tense", statement: "Events already happened → past tense." }], steps: [
            { reasoning: "Reports describe events that have already occurred.", marks: 1, markCode: "AO2" },
            { reasoning: "Past tense is the accurate tense for completed events.", marks: 1, markCode: "AO2" },
            { reasoning: "Using present tense would misrepresent the timing.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Reports describe completed events, so the past tense is required." },
        },
        {
          id: "oles-u3-rp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Report writing review.",
          parts: [
            { label: "a", prompt: "Name the four report sections.", marks: 2 },
            { label: "b", prompt: "What tense for events?", marks: 2 },
            { label: "c", prompt: "Why must reports be objective?", marks: 2 },
            { label: "d", prompt: "How do headings help?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Report writing", statement: "Structured, objective, past tense." }], steps: [
            { part: "a", reasoning: "Title, introduction, findings/events, conclusion.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "All four.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Past tense for events that already happened.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct tense.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Objectivity keeps the report credible and factual.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Headings guide the reader through sections and show organisation.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains readability.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Links to marks.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) four sections (b) past tense (c) credibility (d) guides reader",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
    {
      id: "oles-u3-article",
      title: "Writing articles",
      skill: "Write an engaging newspaper or magazine article.",
      lesson: {
        sections: [
          { heading: "Article features", body: "An article needs: a catchy headline, a by-line (writer's name), an introduction hooking the reader, short paragraphs, and a conclusion. Articles can be more lively than reports but still informative." },
          { heading: "Audience awareness", body: "Write for the publication's readers — a school magazine article is different from a newspaper article for adults. Use vocabulary and examples your audience understands." },
        ],
        keyFormulas: [
          { name: "Article", statement: "Headline + by-line + hook intro + short paragraphs + conclusion." },
        ],
        workedExample: {
          problem: "An article about a new sports centre opens with statistics. Better opening?",
          solution: "Start with a hook — a question or striking fact about the centre — then give the statistics as support.",
        },
      },
      questions: [
        {
          id: "oles-u3-ar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A headline's job is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Grab attention and show the topic" },
            { id: "b", text: "Give the full story" },
            { id: "c", text: "List all facts" },
            { id: "d", text: "Name the writer" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Headline", statement: "Attention + topic." }], steps: [{ reasoning: "Headlines attract readers and preview the topic.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Grab attention and show the topic" },
        },
        {
          id: "oles-u3-ar-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two features of a newspaper article.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Article features", statement: "Headline, by-line, intro, paragraphs, conclusion." }], steps: [
            { reasoning: "Any two: headline, by-line, hook introduction, short paragraphs, conclusion.", marks: 1, markCode: "AO2" },
            { reasoning: "Both correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. headline and by-line (also: hook intro, short paragraphs, conclusion)." },
        },
        {
          id: "oles-u3-ar-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why an article's introduction must hook the reader.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Hook", statement: "First lines decide if reader continues." }], steps: [
            { reasoning: "Readers decide within seconds whether to continue.", marks: 1, markCode: "AO2" },
            { reasoning: "A hook — question, striking fact, vivid scene — creates interest.", marks: 1, markCode: "AO2" },
            { reasoning: "A flat introduction loses readers immediately.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "The introduction must capture interest or readers stop reading." },
        },
        {
          id: "oles-u3-ar-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Article writing review.",
          parts: [
            { label: "a", prompt: "Name two article features.", marks: 2 },
            { label: "b", prompt: "What is a by-line?", marks: 2 },
            { label: "c", prompt: "Why use short paragraphs?", marks: 2 },
            { label: "d", prompt: "How does audience change an article?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Articles", statement: "Headline, by-line, hook, short paragraphs, audience fit." }], steps: [
            { part: "a", reasoning: "Any two: headline, by-line, hook intro, short paragraphs, conclusion.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "The writer's name shown under the headline.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Short paragraphs are easier to read, especially on screens.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Vocabulary, examples and topics must suit the readers.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains adaptation.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Connects to quality.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) two features (b) writer's name (c) readability (d) vocabulary/examples fit readers",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u3-3-2-notes", title: "Reports and articles — notes", summary: "Structured facts versus engaging journalism.",
      sections: [
        { heading: "Reports", body: "Title → intro → findings → conclusion. Objective, past tense, headings help." },
        { heading: "Articles", body: "Headline, by-line, hook introduction, short paragraphs. Match vocabulary and examples to the audience." },
      ] },
  ],
};
