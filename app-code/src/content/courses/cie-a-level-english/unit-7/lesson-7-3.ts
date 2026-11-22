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
              { id: "a", text: "Paper 2" },
              { id: "b", text: "Paper 1" },
              { id: "c", text: "All papers" },
              { id: "d", text: "Paper 3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Paper 3", statement: "Set texts." },
            ],
            steps: [
              { reasoning: "Paper 3 = set texts.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Paper 3",
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
        {
          id: "cial-e-u7-ps-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Paper 1 (Reading) primarily tests analysis of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your own writing" },
              { id: "b", text: "Unseen texts" },
              { id: "c", text: "Grammar rules" },
              { id: "d", text: "Set novels" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paper 1",
                statement: "Unseen text analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Unseen texts.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Unseen texts",
            commonErrors: ["Confusing with Paper 3."],
          },
        },
        {
          id: "cial-e-u7-ps-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Paper 2 (Writing) includes which two task types?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading and summary" },
              { id: "b", text: "Poetry and drama only" },
              { id: "c", text: "Directed writing and composition" },
              { id: "d", text: "Translation and transcription" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paper 2",
                statement: "Directed+composition.",
              },
            ],
            steps: [
              {
                reasoning: "Directed+composition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Directed writing and composition",
            commonErrors: ["Confusing paper contents."],
          },
        },
        {
          id: "cial-e-u7-ps-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When analysing an unseen text in Paper 1, what three areas should you examine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plot, genre and setting only" },
              { id: "b", text: "Language, structure and writer's methods" },
              { id: "c", text: "Spelling and punctuation" },
              { id: "d", text: "Author biography" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paper 1 analysis",
                statement: "Language+structure+methods.",
              },
            ],
            steps: [
              {
                reasoning: "Three analysis areas.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Language, structure and writer's methods",
            commonErrors: ["Analysing content only."],
          },
        },
        {
          id: "cial-e-u7-ps-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For Paper 3 poetry analysis, which feature is most genre-appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dialogue analysis" },
              { id: "b", text: "Imagery and poetic form" },
              { id: "c", text: "Narrative voice only" },
              { id: "d", text: "Stage directions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre-appropriate analysis",
                statement: "Poetry=imagery/form.",
              },
            ],
            steps: [
              {
                reasoning: "Imagery+form.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Imagery and poetic form",
            commonErrors: ["Using prose techniques on poetry."],
          },
        },
        {
          id: "cial-e-u7-ps-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "For Paper 3 drama analysis, which technique should you focus on?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rhyme scheme" },
              { id: "b", text: "Chapter structure" },
              { id: "c", text: "Stagecraft and dialogue" },
              { id: "d", text: "Narrator reliability" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drama analysis",
                statement: "Stagecraft+dialogue.",
              },
            ],
            steps: [
              {
                reasoning: "Stagecraft+dialogue.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Stagecraft and dialogue",
            commonErrors: ["Analysing drama as prose."],
          },
        },
        {
          id: "cial-e-u7-ps-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is prior knowledge unnecessary in Paper 1?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It tests memory only" },
              { id: "b", text: "All texts are unseen — you analyse what's on the page" },
              { id: "c", text: "Texts repeat every year" },
              { id: "d", text: "Prior knowledge is penalised" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paper 1 unseen",
                statement: "Analyse text only.",
              },
            ],
            steps: [
              {
                reasoning: "Unseen = page analysis.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** All texts are unseen — you analyse what's on the page",
            commonErrors: ["Importing outside knowledge."],
          },
        },
        {
          id: "cial-e-u7-ps-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you do when reading an unseen text for the second time?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second reading",
                statement: "Detailed feature analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Annotate features.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Note language/structure/methods.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Read again closely, annotating language choices (word choice, imagery, tone), structure (form, paragraphing, narrative arc) and writer's methods (perspective, irony, symbolism).",
            commonErrors: ["Reading passively without annotating."],
          },
        },
        {
          id: "cial-e-u7-ps-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What three things must you check in a directed writing task on Paper 2?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Directed task checks",
                statement: "Register+audience+purpose+word count.",
              },
            ],
            steps: [
              {
                reasoning: "Register/audience/purpose.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Word count/task type.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Register (formality), audience (who reads it), purpose (why it's written) and the stated word count/task conventions — follow the instructions exactly.",
            commonErrors: ["Ignoring task instructions."],
          },
        },
        {
          id: "cial-e-u7-ps-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should context be used in Paper 3 essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context in Paper 3",
                statement: "Support, not replace, textual analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Ground in text first.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Context illuminates meaning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Avoid context-only paragraphs.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Use historical/social context to illuminate textual meaning — but always anchor analysis in the text itself; context should support, never replace, close reading.",
            commonErrors: ["Writing context essays without text."],
          },
        },
        {
          id: "cial-e-u7-ps-q14",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Paper strategies practice.",
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
        {
          id: "cial-e-u7-ps-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Paper 3, why must comparison be 'woven throughout'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To halve the word count" },
              { id: "b", text: "To show integrated analysis of both texts" },
              { id: "c", text: "It is a formatting rule only" },
              { id: "d", text: "To avoid using quotations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Woven comparison",
                statement: "Integrated analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Integrated analysis.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** To show integrated analysis of both texts",
            commonErrors: ["Writing two separate essays."],
          },
        },
        {
          id: "cial-e-u7-ps-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How should you answer short questions in Paper 1 differently from essay questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paper 1 question types",
                statement: "Precision vs PEE structure.",
              },
            ],
            steps: [
              {
                reasoning: "Short answers: concise+precise.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Essays: PEE structure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Match depth to marks.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Short answers need precise, focused points with brief evidence — no padding; essays need developed PEE paragraphs matching the mark allocation. Match response depth to the marks available.",
            commonErrors: ["Writing essays for short-answer questions."],
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
