import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpe6-u4-lesson-4-1",
  code: "4-1",
  title: "Advanced Text Analysis",
  goal: "I CAN evaluate texts critically and analyse authorial choices.",
  standards: ["Year 6 Reading"],
  vocabulary: [
    {
      term: "Evaluation",
      definition: "Judging a text's quality and effectiveness.",
    },
    { term: "Bias", definition: "A tendency to favour one view over another." },
    {
      term: "Purpose",
      definition: "Why a text was written: inform, persuade, entertain.",
    },
    { term: "Audience", definition: "Who the text is written for." },
  ],
  concepts: [
    {
      id: "edpe6-u4-evaluation",
      title: "Evaluating texts",
      skill:
        "Judge how effectively a text achieves its purpose for its audience.",
      lesson: {
        sections: [
          {
            heading: "Critical evaluation",
            body: "Evaluating means judging quality, not just understanding. Ask: Does the text achieve its purpose? Is the argument convincing? Is the language appropriate for the audience? What's effective and what's weak? Support judgements with evidence from the text.",
          },
          {
            heading: "Authorial intent",
            body: "Consider why the author made choices: Why this tone? Why this structure? Why these examples? Understanding intent helps evaluate effectiveness. A text can be well-written but fail its purpose, or simple but perfectly suited to its audience.",
          },
        ],
        keyFormulas: [
          {
            name: "Evaluation",
            statement: "Purpose + audience + effectiveness + evidence",
          },
        ],
        workedExample: {
          problem:
            "Evaluate: 'School uniforms should be abolished because they limit self-expression.'",
          solution:
            "Clear position and reason, but only one argument — doesn't address counter-arguments, so partially persuasive.",
        },
      },
      questions: [
        {
          id: "edpe6-u4-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is evaluation in reading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarising a text" },
              { id: "b", text: "Judging a text's effectiveness" },
              { id: "c", text: "Reading quickly" },
              { id: "d", text: "Memorising facts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Judging quality.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluation = critical judgement.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Judging effectiveness",
            commonErrors: ["Confusing with comprehension."],
          },
        },
        {
          id: "edpe6-u4-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is bias in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Balanced view" },
              { id: "b", text: "Favouring one side unfairly" },
              { id: "c", text: "Factual information" },
              { id: "d", text: "A type of genre" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Unfair favouring.",
              },
            ],
            steps: [
              {
                reasoning: "Bias = one-sided presentation.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Favouring one side",
            commonErrors: ["Confusing with opinion."],
          },
        },
        {
          id: "edpe6-u4-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate this argument: 'Exercise is good because it makes you healthy.' Give one strength and one weakness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Strength + weakness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: clear position, logical link exercise→health.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: no evidence, no counter-argument, circular reasoning.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both points supported.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strength: clear; Weakness: no evidence",
            commonErrors: ["Only one side."],
          },
        },
        {
          id: "edpe6-u4-ev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A text is beautifully written but doesn't convince anyone of its argument. Is it effective? Evaluate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Purpose over style.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Style is good but purpose fails — argument not convincing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Effectiveness depends on achieving purpose, not just quality writing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Nuanced evaluation considering both.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Not fully effective — fails purpose",
            commonErrors: ["Only judges style."],
          },
        },
      ],
    },
    {
      id: "edpe6-u4-purpose",
      title: "Purpose, Audience and Genre",
      skill: "Analyse how purpose and audience shape texts.",
      lesson: {
        sections: [
          {
            heading: "Purpose shapes everything",
            body: "Every text has a purpose: to inform, persuade, entertain, instruct or argue. The purpose determines genre (newspaper article, advert, letter, speech), tone (formal, casual), structure and language choices. A text's effectiveness depends on matching all these to its purpose and audience.",
          },
          {
            heading: "Audience awareness",
            body: "Texts are written FOR someone. Children's books use simple words and pictures; scientific papers use technical language. Advertisements target specific demographics. When analysing, ask: Who is this for? Does the language suit them? Does it achieve its aim with them?",
          },
        ],
        keyFormulas: [
          {
            name: "Purpose/audience",
            statement: "Purpose determines genre, tone, language",
          },
        ],
        workedExample: {
          problem:
            "Why does a charity advert use emotional language and images?",
          solution:
            "To persuade donors by creating empathy and urgency — suited to its persuasive purpose and general audience.",
        },
      },
      questions: [
        {
          id: "edpe6-u4-pu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines a text's genre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its length" },
              { id: "b", text: "Its purpose and conventions" },
              { id: "c", text: "Its author" },
              { id: "d", text: "Its price" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Genre",
                statement: "Purpose + conventions.",
              },
            ],
            steps: [
              {
                reasoning: "Genre follows purpose and form.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Purpose and conventions",
            commonErrors: ["Surface features only."],
          },
        },
        {
          id: "edpe6-u4-pu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why might a text use technical vocabulary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To confuse readers" },
              { id: "b", text: "Because the audience is experts" },
              { id: "c", text: "To seem clever" },
              { id: "d", text: "Always" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience",
                statement: "Language suits audience.",
              },
            ],
            steps: [
              {
                reasoning: "Technical terms suit expert readers.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Expert audience",
            commonErrors: ["Wrong reasoning."],
          },
        },
        {
          id: "edpe6-u4-pu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how purpose affects the tone of a text. Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Purpose/tone",
                statement: "Purpose determines tone.",
              },
            ],
            steps: [
              {
                reasoning: "Persuasive purpose → urgent, emotive tone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Informative purpose → clear, neutral tone.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Purpose determines tone + example",
            commonErrors: ["No example."],
          },
        },
        {
          id: "edpe6-u4-pu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A children's book and a science textbook both explain animals. How do their purpose and audience change the writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Purpose/audience",
                statement: "Different audiences = different choices.",
              },
            ],
            steps: [
              {
                reasoning: "Children's book: simple words, pictures, stories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Textbook: technical terms, facts, no stories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Links to different purposes (entertain vs inform).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Different audiences → different language",
            commonErrors: ["Surface comparison only."],
          },
        },
      ],
    },
    {
      id: "edpe6-u4-structure",
      title: "Text Structure and Organisation",
      skill: "Analyse how texts are organised for effect.",
      lesson: {
        sections: [
          {
            heading: "Structural choices",
            body: "Structure serves purpose: arguments build logically (claim → evidence → counter → conclusion); narratives use tension arcs; reports use headings. Chronological, flashback, circular and frame structures each create different effects on the reader.",
          },
          {
            heading: "Paragraph and sentence craft",
            body: "Paragraphs organise ideas; topic sentences guide. Sentence variety — mixing short and long — controls pace and emphasis. Front-loading key information suits skimmers; delayed reveals suit suspense. Analyse how these choices serve the text's purpose.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure",
            statement: "Organisation serves purpose and effect",
          },
        ],
        workedExample: {
          problem:
            "Why might a news article put the most important fact first?",
          solution:
            "Readers skim; front-loading ensures key info is seen — the inverted pyramid structure.",
        },
      },
      questions: [
        {
          id: "edpe6-u4-sx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the inverted pyramid in news writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Starting with details" },
              { id: "b", text: "Most important info first" },
              { id: "c", text: "Ending with a surprise" },
              { id: "d", text: "A type of headline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverted pyramid",
                statement: "Key info first.",
              },
            ],
            steps: [
              {
                reasoning: "News puts essentials first.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Important info first",
            commonErrors: ["Wrong structure."],
          },
        },
        {
          id: "edpe6-u4-sx-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why do writers vary sentence length?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To fill space" },
              { id: "b", text: "To control pace and emphasis" },
              { id: "c", text: "To confuse readers" },
              { id: "d", text: "By accident" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence variety",
                statement: "Controls effect.",
              },
            ],
            steps: [
              {
                reasoning: "Variety creates rhythm and emphasis.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Pace and emphasis",
            commonErrors: ["Surface reasoning."],
          },
        },
        {
          id: "edpe6-u4-sx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a circular structure differs from a linear one. Why might an author choose each?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure",
                statement: "Circular vs linear.",
              },
            ],
            steps: [
              {
                reasoning: "Circular ends where it began — reinforces theme.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Linear progresses forward — suits narrative/instruction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justifies choice of structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Circular=end=begin; Linear=forward",
            commonErrors: ["No justification."],
          },
        },
        {
          id: "edpe6-u4-sx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how the structure of an argument essay serves its purpose. Include counter-argument placement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structural analysis",
                statement: "Structure serves persuasion.",
              },
            ],
            steps: [
              {
                reasoning: "Intro states claim; body gives evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Counter-argument acknowledged then refuted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conclusion reinforces position.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Structure builds persuasive case",
            commonErrors: ["Missing counter-argument."],
          },
        },
      ],
    },
  ],
};
