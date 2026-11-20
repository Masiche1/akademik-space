import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "cial-e-u7-lesson-7-3",
  code: "7-3",
  title: "Paper-Specific Strategies",
  goal: "I CAN apply targeted strategies for each 9093 paper.",
  standards: ["9093: Exam preparation"],
  vocabulary: [
    {
      term: "Paper 1",
      definition: "Reading unseen texts — language and structure analysis.",
    },
    {
      term: "Paper 2",
      definition: "Writing — directed writing and composition.",
    },
    { term: "Paper 3", definition: "Literature in English — set texts." },
    { term: "Unseen text", definition: "Text not studied in advance." },
    {
      term: "Directed response",
      definition: "Answer adapting to specific question requirements.",
    },
    {
      term: "Close analysis",
      definition: "Detailed examination of specific features.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u7-paper-strategies",
      title: "Strategies for Each Paper",
      skill: "Apply paper-specific techniques for Papers 1, 2 and 3.",
      lesson: {
        sections: [
          {
            heading: "Paper 1 — Reading",
            body: "Read text twice: first for gist, second for analysis. Identify: language (word choice, imagery, tone), structure (form, paragraphing, narrative arc), writer's methods (perspective, irony, symbolism). Answer all parts — short answers need precision, essays need PEE structure. No prior knowledge needed — analyse what's there.",
          },
          {
            heading: "Paper 2 — Writing",
            body: "Directed writing: follow instructions exactly — check register, audience, purpose, word count. Composition: plan briefly, write with varied sentence structures, show don't tell. Proofread for spelling/grammar — technical accuracy matters. Choose questions matching strengths.",
          },
          {
            heading: "Paper 3 — Literature",
            body: "Know set texts deeply — quotations, themes, contexts, characters. For comparative essays: weave comparison throughout. For genre study: use genre-appropriate analysis (poetry=imagery/form; prose=voice/character; drama=stagecraft/dialogue). Include context where relevant but ground in text.",
          },
        ],
        keyFormulas: [
          {
            name: "Paper strategies",
            statement:
              "P1=close analysis; P2=register+technique; P3=set texts+comparison.",
          },
        ],
        workedExample: {
          problem: "What's the key difference between Paper 1 and Paper 3?",
          solution:
            "Paper 1 analyses unseen texts with no prior knowledge; Paper 3 analyses studied set texts requiring quotations, themes and context.",
        },
      },
      questions: [
        {
          id: "cial-e-u7-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which paper uses set texts studied in advance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paper 3" },
              { id: "b", text: "Paper 1" },
              { id: "c", text: "Paper 2" },
              { id: "d", text: "All papers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paper 3", statement: "Set texts." },
            ],
            steps: [
              { reasoning: "Paper 3 = set texts.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Paper 3",
            commonErrors: ["Confusing papers."],
          },
        },
        {
          id: "cial-e-u7-ps-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you do first when reading an unseen text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unseen reading",
                statement: "Gist first, then analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Read for gist/overview.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Then analyse features.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Read once for gist/overview, then again for detailed analysis of language, structure and methods.",
            commonErrors: ["Only reading once."],
          },
        },
        {
          id: "cial-e-u7-ps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should Paper 3 comparative essays be structured?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative essays",
                statement: "Weave comparison throughout.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis comparing both.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Body paragraphs analyse both.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Comparison throughout.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Thesis comparing both texts → body paragraphs analysing both on specific aspects → comparison woven throughout, not separate treatment.",
            commonErrors: ["Two separate essays."],
          },
        },
        {
          id: "cial-e-u7-ps-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Paper strategies.",
          parts: [
            { label: "a", prompt: "Paper 1 strategy?", marks: 3 },
            { label: "b", prompt: "Paper 2 strategy?", marks: 2 },
            { label: "c", prompt: "Paper 3 strategy?", marks: 3 },
            { label: "d", prompt: "Key difference?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strategies",
                statement: "P1+P2+P3+difference.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Read twice/close analysis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Language/structure/methods.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "No prior knowledge.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Register/audience/purpose.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Proofread/technique.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Set texts/quotations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Comparison throughout.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Genre-appropriate analysis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Unseen vs set texts.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) P1 (b) P2 (c) P3 (d) difference",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u7-7-3-notes",
      title: "Paper strategies — notes",
      summary:
        "Paper 1 (unseen reading), Paper 2 (writing), Paper 3 (literature set texts).",
      sections: [
        {
          heading: "Papers",
          body: "P1=close analysis unseen; P2=register+technique; P3=set texts+comparison+genre.",
        },
      ],
    },
  ],
};
