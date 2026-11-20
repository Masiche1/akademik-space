import type { Lesson } from "../../../types.ts";

export const lesson172: Lesson = {
  id: "cie-ol-fl-lesson-7-2",
  code: "7-2",
  title: "Vocabulary, register and tone",
  goal: "I CAN choose precise vocabulary and control register and tone for different audiences.",
  standards: ["1119 Writing: vocabulary and style"],
  vocabulary: [
    {
      term: "Register",
      definition: "Level of formality in language, suited to context.",
    },
    {
      term: "Tone",
      definition: "The writer's attitude toward subject and reader.",
    },
    {
      term: "Connotation",
      definition:
        "The feelings or associations a word carries beyond its dictionary meaning.",
    },
    {
      term: "Formal vocabulary",
      definition: "Polite, impersonal word choices for official contexts.",
    },
    {
      term: "Informal vocabulary",
      definition: "Casual, conversational word choices.",
    },
    {
      term: "Elevated diction",
      definition: "Sophisticated or literary word choice.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-word-choice",
      title: "Precise word choice",
      skill: "Select vocabulary for accuracy, connotation and effect.",
      lesson: {
        sections: [
          {
            heading: "Connotation",
            body: "Words carry associations: 'slim' vs 'skinny', 'frugal' vs 'stingy', 'curious' vs 'nosy'. The dictionary meaning may be similar, but connotation shapes the reader's judgement. Choose words whose associations match your intent.",
          },
          {
            heading: "Precision over generality",
            body: "Replace vague words ('nice', 'thing', 'got') with specific ones ('delighted', 'device', 'obtained'). Precision shows control and keeps the reader engaged. Ask: could this word mean anything else? If so, sharpen it.",
          },
          {
            heading: "Avoiding clichés",
            body: "Clichés ('at the end of the day', 'think outside the box') are tired and weaken writing. Fresh phrasing surprises the reader. Replace stock expressions with original, precise language.",
          },
        ],
        keyFormulas: [
          {
            name: "Word choice",
            statement:
              "Connotation+precision+originality=effective vocabulary.",
          },
        ],
        workedExample: {
          problem: "Improve: 'The nice thing was very good.'",
          solution:
            "'The ingenious device performed flawlessly.' — precise, connotative, specific.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-wc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'connotation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The feelings or associations a word carries" },
              { id: "b", text: "The dictionary definition" },
              { id: "c", text: "The spelling of a word" },
              { id: "d", text: "The number of syllables" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Connotation",
                statement:
                  "The emotional or cultural associations beyond literal meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Connotation = association, not definition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Feelings/associations a word carries",
            commonErrors: ["Confusing connotation with denotation."],
          },
        },
        {
          id: "cie-ol-fl-wc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does word choice affect tone?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word choice and tone",
                statement:
                  "Connotation and formality level create the writer's attitude.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formal words create distance/authority; informal words create warmth/closeness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Connotative words steer emotion — 'frail' vs 'delicate'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tone emerges from accumulated word choices.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Word choice builds tone through formality and connotation.",
            commonErrors: ["Describing tone without linking to word choice."],
          },
        },
        {
          id: "cie-ol-fl-wc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why should clichés be avoided in exam writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clichés",
                statement:
                  "Overused expressions show limited imagination and weaken precision.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clichés carry no fresh meaning — the reader has heard them before.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "They suggest the writer is relying on stock phrases rather than thinking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Original phrasing demonstrates control and engages the reader.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear reasoning.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Clichés weaken precision and originality; fresh language shows control.",
            commonErrors: [
              "Claiming clichés are 'wrong' — they are merely weak.",
            ],
          },
        },
        {
          id: "cie-ol-fl-wc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Word choice and tone.",
          parts: [
            { label: "a", prompt: "Define connotation.", marks: 1 },
            { label: "b", prompt: "Contrast 'slim' and 'skinny'.", marks: 3 },
            { label: "c", prompt: "Why avoid clichés?", marks: 2 },
            {
              label: "d",
              prompt: "Rewrite: 'The food was nice.' in two different tones.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word choice",
                statement: "Connotation+precision+originality+tone control.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Associations beyond dictionary meaning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "'Slim' = positive/attractive connotation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "'Skinny' = negative/weak connotation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Same denotation, different tone.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Clichés lack freshness and suggest limited imagination.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Original language shows control.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Two distinct rewrites attempted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "Tones clearly different (e.g. formal vs enthusiastic).",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Both appropriate and precise.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effective control of register.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) associations (b) slim+/skinny- (c) weak originality (d) two tonal rewrites",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Contrast explained.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Reason given.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Two clear tonal rewrites.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Attempted.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "One rewrite.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Synonym-swapping without considering connotation."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-register-tone",
      title: "Register and tone control",
      skill: "Adapt language formality and attitude to purpose and audience.",
      lesson: {
        sections: [
          {
            heading: "The register spectrum",
            body: "Formal: 'I am writing to enquire', 'furthermore', 'yours faithfully'. Informal: 'Hi', 'gonna', 'cheers'. Neutral: most essays and articles. Match register to context — a text message to a friend and a letter to a headteacher need opposite styles.",
          },
          {
            heading: "Tone choices",
            body: "Tone is attitude: formal, friendly, critical, humorous, sombre, enthusiastic. Tone is built through word choice, sentence length, punctuation (dashes for interruption, exclamation for energy) and what you choose to emphasise.",
          },
          {
            heading: "Consistency",
            body: "The biggest register error is inconsistency — slipping from formal to casual mid-text. Decide your register at the start and maintain it. Occasional deliberate shifts (for effect) are fine; accidental shifts are not.",
          },
        ],
        keyFormulas: [
          {
            name: "Register/tone",
            statement:
              "Context+consistency+appropriate attitude=controlled style.",
          },
        ],
        workedExample: {
          problem:
            "Rewrite 'This is bad' in three tones: critical, humorous, formal.",
          solution:
            "Critical: 'This is unacceptable.' Humorous: 'This is, frankly, a crime.' Formal: 'This is not of an acceptable standard.'",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-rt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is most formal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am writing to enquire" },
              { id: "b", text: "Just checking in" },
              { id: "c", text: "Hey, quick question" },
              { id: "d", text: "What's up" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal register",
                statement:
                  "Polite, impersonal phrasing suited to official contexts.",
              },
            ],
            steps: [
              {
                reasoning: "'I am writing to enquire' is the formal option.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** I am writing to enquire",
            commonErrors: ["Choosing casual phrases."],
          },
        },
        {
          id: "cie-ol-fl-rt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What creates 'tone' in writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tone",
                statement:
                  "Attitude conveyed through word choice, sentence length, punctuation and emphasis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tone = the writer's attitude toward subject and reader.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Built through language choices, not declared directly.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Tone is attitude created through word choice, structure and punctuation.",
            commonErrors: ["Confusing tone with topic."],
          },
        },
        {
          id: "cie-ol-fl-rt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is register consistency important in formal writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register consistency",
                statement:
                  "Accidental shifts between formal and casual undermine credibility and confuse the reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Slipping into casual language breaks the expected tone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Inconsistency suggests carelessness or insincerity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The reader's trust depends on a sustained appropriate style.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Consistency maintains credibility and suits the context.",
            commonErrors: ["Noting inconsistency without explaining harm."],
          },
        },
        {
          id: "cie-ol-fl-rt-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Register and tone.",
          parts: [
            { label: "a", prompt: "Define register.", marks: 1 },
            {
              label: "b",
              prompt: "Give two formal alternatives to 'get in touch'.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How does tone differ from topic?",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Rewrite 'This food is great' in formal and humorous tones.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register/tone",
                statement: "Definition+formality+concept+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Level of formality suited to context.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Any two of 'contact', 'correspond', 'make contact with'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Both formal.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Topic = subject matter; tone = attitude toward it.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Tone is conveyed through language choices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Two distinct rewrites.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Formal tone appropriate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Humorous tone appropriate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Both controlled and effective.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) formality level (b) two formal alternatives (c) topic vs attitude (d) two tonal rewrites",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Two formal options.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Distinction clear.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Two controlled rewrites.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Attempted.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "One rewrite.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Formal and informal mixed inconsistently."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-vocabulary-notes",
      title: "Vocabulary, register and tone — revision notes",
      summary:
        "Word choice, connotation, register control and tone for different audiences.",
      sections: [
        {
          heading: "Word choice",
          body: "Connotation = associations beyond meaning ('slim' vs 'skinny'). Precision beats generality. Avoid clichés; original phrasing shows control.",
        },
        {
          heading: "Register",
          body: "Spectrum: formal ('I am writing to enquire') to informal ('hey'). Match to context and maintain consistency throughout.",
        },
        {
          heading: "Tone",
          body: "Attitude conveyed through word choice, sentence length, punctuation. Formal, friendly, critical, humorous, sombre — each built from language choices.",
        },
        {
          heading: "Exam checklist",
          body: "Is vocabulary precise? Is register consistent? Does tone suit purpose and audience? Have I avoided clichés?",
        },
      ],
    },
  ],
};
