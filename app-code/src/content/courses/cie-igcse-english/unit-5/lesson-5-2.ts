import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ciege-u5-lesson-5-2",
  code: "5-2",
  title: "Reports, Articles and Speeches",
  goal: "I CAN write reports, articles and speeches for different audiences.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: non-fiction"],
  vocabulary: [
    { term: "Report", definition: "Factual writing organised by headings and subheadings." },
    { term: "Article", definition: "A piece for a newspaper or magazine." },
    { term: "Speech", definition: "Spoken address to an audience." },
    { term: "Subheading", definition: "A heading within a section." },
    { term: "Rhetorical question", definition: "Question asked for effect, not answer." },
  ],
  concepts: [
    {
      id: "ciege-u5-s2-reports",
      title: "Reports and articles",
      skill: "Write structured factual pieces at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Reports",
            body: "Reports present facts clearly: title, introduction, subheadings, factual paragraphs, conclusion. Use formal, objective language — no opinions or 'I'.",
          },
          {
            heading: "Articles",
            body: "Articles can be factual or opinion-based. For a newspaper, use a catchy headline, engaging opening, clear paragraphs and a strong ending. Match the tone to the publication.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the opening of a report about school facilities.",
          solution: "'This report examines the state of school facilities. It was conducted over three days and involved interviews with staff and students.'",
        },
      },
      questions: [
        {
          id: "ciege-u5-s2-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main feature of a report?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Personal opinions" }, { id: "b", text: "Factual information organised by headings" }, { id: "c", text: "Dialogue" }, { id: "d", text: "Poetry" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Report", statement: "Factual + structured." }],
            steps: [
              { reasoning: "Reports are factual and organised by headings.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Factual + headings",
          },
        },
        {
          id: "ciege-u5-s2-re-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a subheading for a report section about sports facilities.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Subheading", statement: "Clear topic label." }],
            steps: [
              { reasoning: "The subheading names the topic.", marks: 1, markCode: "AO2" },
              { reasoning: "It is concise.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. Sports Facilities",
          },
        },
        {
          id: "ciege-u5-s2-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the opening sentence of a newspaper article about a school event.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Article opening", statement: "Engaging, informative." }],
            steps: [
              { reasoning: "The sentence is engaging.", marks: 1, markCode: "AO2" },
              { reasoning: "It states the key information.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One article opening",
          },
        },
        {
          id: "ciege-u5-s2-re-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences that could appear in the middle of a report about recycling in your school.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Report writing", statement: "Factual, clear." }],
            steps: [
              { reasoning: "Both sentences are factual.", marks: 1, markCode: "AO2" },
              { reasoning: "They could include statistics or observations.", marks: 1, markCode: "AO2" },
              { reasoning: "Formal register maintained.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two report sentences",
          },
        },
      ],
    },
    {
      id: "ciege-u5-s2-speeches",
      title: "Writing speeches",
      skill: "Write speeches with rhetorical devices and audience awareness.",
      lesson: {
        sections: [
          {
            heading: "Speech features",
            body: "Speeches address an audience directly ('you', 'we'). Use rhetorical questions, repetition for emphasis, and emotional language. Vary sentence length for impact.",
          },
          {
            heading: "Structure",
            body: "Opening: greet and grab attention. Body: your main points with emotional appeal. Ending: strong call to action or memorable final line.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write the opening of a speech about school recycling.",
          solution: "'Good morning everyone. Today I'm going to talk about something that affects us all — the future of our school and our planet.'",
        },
      },
      questions: [
        {
          id: "ciege-u5-s2-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a key feature of speech writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No audience" }, { id: "b", text: "Direct address to listeners" }, { id: "c", text: "Long paragraphs" }, { id: "d", text: "Formal letter format" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Speech", statement: "Addresses audience directly." }],
            steps: [
              { reasoning: "Speeches use 'you' and 'we' to address listeners.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Direct address",
          },
        },
        {
          id: "ciege-u5-s2-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the opening greeting of a school assembly speech.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Speech opening", statement: "Address audience." }],
            steps: [
              { reasoning: "The greeting addresses the audience.", marks: 1, markCode: "AO2" },
              { reasoning: "It is appropriate for a school setting.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One greeting",
          },
        },
        {
          id: "ciege-u5-s2-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence using a rhetorical question in a speech about exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Rhetorical question", statement: "Engages audience." }],
            steps: [
              { reasoning: "The sentence asks a question.", marks: 1, markCode: "AO2" },
              { reasoning: "It persuades or engages rather than seeks information.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One rhetorical question",
          },
        },
        {
          id: "ciege-u5-s2-sp-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a call-to-action sentence ending a speech about protecting the environment.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Call to action", statement: "Urges audience to act." }],
            steps: [
              { reasoning: "The sentence urges action.", marks: 1, markCode: "AO2" },
              { reasoning: "It addresses the audience directly.", marks: 1, markCode: "AO2" },
              { reasoning: "It is memorable and strong.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One call-to-action",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u5-s2-nonfic-notes",
      title: "Reports, articles and speeches — revision notes",
      summary: "Factual structure, article openings, speech techniques.",
      sections: [
        { heading: "Reports", body: "Factual, objective, organised by headings. No opinions or 'I'." },
        { heading: "Speeches", body: "Direct address, rhetorical questions, repetition, strong ending. Match tone to occasion." },
      ],
    },
  ],
};
