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
              { id: "b", text: "The number of syllables" },
              { id: "c", text: "The dictionary definition" },
              { id: "d", text: "The spelling of a word" },
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
        {
          id: "cie-ol-fl-wc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is the most precise replacement for 'thing'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thingummy" },
              { id: "b", text: "Stuff" },
              { id: "c", text: "Device" },
              { id: "d", text: "Whatchamacallit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Precision", statement: "Replace vague words with specific ones that cannot mean anything else." },
            ],
            steps: [
              { reasoning: "'Device' names a specific object; the others are vague or informal.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Device",
            commonErrors: ["Choosing a vague synonym instead of a precise noun."],
          },
        },
        {
          id: "cie-ol-fl-wc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference in connotation between 'frugal' and 'stingy'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Connotation", statement: "Associations beyond dictionary meaning shape judgement." },
            ],
            steps: [
              { reasoning: "'Frugal' is approving; 'stingy' is disapproving.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Both mean careful with money, but 'frugal' is positive while 'stingy' is negative.",
            commonErrors: ["Treating them as exact synonyms."],
          },
        },
        {
          id: "cie-ol-fl-wc-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Improve the precision of: 'The food was nice and I got it from the shop.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Precision over generality", statement: "Replace 'nice', 'thing', 'got' with specific words." },
            ],
            steps: [
              { reasoning: "Replace vague words: 'delicious', 'purchased/collected', etc.", marks: 1, markCode: "AO2" },
              { reasoning: "Result is clearer and more controlled.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The meal was delicious and I purchased it from the bakery.'",
            commonErrors: ["Changing grammar but keeping vague words."],
          },
        },
        {
          id: "cie-ol-fl-wc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word has a negative connotation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interested" },
              { id: "b", text: "Nosy" },
              { id: "c", text: "Curious" },
              { id: "d", text: "Attentive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative connotation", statement: "'Nosy' suggests intrusive, unwelcome interest." },
            ],
            steps: [
              { reasoning: "'Nosy' implies prying; the others are neutral or positive.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Nosy",
            commonErrors: ["Assuming similar meanings share connotation."],
          },
        },
        {
          id: "cie-ol-fl-wc-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'got' often a weak verb, and what could replace it in 'She got a letter from her aunt'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Strong verbs", statement: "Precise verbs (received, obtained, collected) are more vivid than 'got'." },
            ],
            steps: [
              { reasoning: "'Got' is vague — it hides how something was obtained.", marks: 1, markCode: "AO1" },
              { reasoning: "Replacement, e.g. 'received' or 'was sent'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "'Got' is vague; 'received' is precise — 'She received a letter from her aunt.'",
            commonErrors: ["Not explaining why 'got' is weak."],
          },
        },
        {
          id: "cie-ol-fl-wc-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite using stronger verbs: 'The man walked quickly into the room and sat down heavily.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Verb precision", statement: "Strong verbs carry manner, replacing adverb+weak-verb combinations." },
            ],
            steps: [
              { reasoning: "'Walked quickly' → 'strode'/'hurried'.", marks: 1, markCode: "AO2" },
              { reasoning: "'Sat down heavily' → 'slumped'/'collapsed'.", marks: 1, markCode: "AO2" },
              { reasoning: "Rewrite is grammatical and vivid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The man strode into the room and slumped into his chair.'",
            commonErrors: ["Keeping the same weak verbs with added adverbs."],
          },
        },
        {
          id: "cie-ol-fl-wc-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is a cliché?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The bus arrived late" },
              { id: "b", text: "She opened the letter" },
              { id: "c", text: "At the end of the day" },
              { id: "d", text: "The candle flickered" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cliché", statement: "A tired, overused expression that weakens original writing." },
            ],
            steps: [
              { reasoning: "'At the end of the day' is a stock phrase; the others are plain but original.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** At the end of the day",
            commonErrors: ["Confusing a simple sentence with a cliché."],
          },
        },
        {
          id: "cie-ol-fl-wc-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does precise vocabulary matter in descriptive writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Precision in description", statement: "Specific words create clear images and show control." },
            ],
            steps: [
              { reasoning: "Precise words create vivid, specific images.", marks: 1, markCode: "AO2" },
              { reasoning: "Vague words force the reader to guess or lose interest.", marks: 1, markCode: "AO2" },
              { reasoning: "Precision signals control and earns marks.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Precise vocabulary creates vivid images, keeps the reader engaged and demonstrates control.",
            commonErrors: ["Saying precision 'sounds better' without explaining how."],
          },
        },
        {
          id: "cie-ol-fl-wc-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite improving every weak word: 'It was a nice day and the nice weather made us feel nice.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Eliminating weak words", statement: "Replace repeated 'nice' with precise adjectives and stronger structure." },
            ],
            steps: [
              { reasoning: "All three uses of 'nice' identified as weak.", marks: 1, markCode: "AO2" },
              { reasoning: "Precise alternatives chosen, e.g. 'golden', 'warm', 'cheerful'.", marks: 1, markCode: "AO2" },
              { reasoning: "Varied structure avoids repetition.", marks: 1, markCode: "AO2" },
              { reasoning: "Result is grammatical and more expressive.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'It was a golden day; the warm weather filled us with cheer.'",
            commonErrors: ["Replacing only one instance of 'nice'."],
          },
        },
        {
          id: "cie-ol-fl-wc-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Word choice practice.",
          parts: [
            { label: "a", prompt: "Contrast 'curious' and 'nosy'.", marks: 2 },
            { label: "b", prompt: "Replace two weak verbs: 'She got the book and went home.'", marks: 2 },
            { label: "c", prompt: "Give two fresh alternatives to the cliché 'think outside the box'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word choice", statement: "Connotation, verb precision, original phrasing." },
            ],
            steps: [
              { part: "a", reasoning: "'Curious' is positive/neutral; 'nosy' implies intrusive prying.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Connotation difference clear.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "e.g. 'collected/borrowed' and 'returned/departed'.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Both replacements precise and grammatical.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Two original alternatives, e.g. 'approach it differently'.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Alternatives are genuinely fresh, not synonyms of the cliché.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) curious=positive, nosy=negative (b) precise verbs (c) fresh alternatives",
            levels: [
              { level: "Level 2", marks: "2", descriptor: "Contrast clear.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "2", descriptor: "Both replaced.", part: "b" },
              { level: "Level 1", marks: "0-1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "2", descriptor: "Two fresh phrases.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Clichés remain.", part: "c" },
            ],
            commonErrors: ["Offering synonyms that are themselves clichés."],
          },
        },
        {
          id: "cie-ol-fl-wc-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does word choice create tone in a persuasive letter to the headteacher?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Vocabulary and tone", statement: "Word connotation and formality level build the writer's attitude." },
            ],
            steps: [
              { reasoning: "Formal, respectful vocabulary suits the audience.", marks: 1, markCode: "AO2" },
              { reasoning: "Emotive or evaluative words shape attitude (e.g. 'urgent', 'unfair').", marks: 1, markCode: "AO2" },
              { reasoning: "Precise nouns/verbs strengthen the argument.", marks: 1, markCode: "AO2" },
              { reasoning: "Link between choices and persuasive tone explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal, precise and appropriately emotive word choice builds a respectful yet persuasive tone for the headteacher.",
            commonErrors: ["Describing tone without linking to specific words."],
          },
        },
        {
          id: "cie-ol-fl-wc-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Comprehensive word-choice practice.",
          parts: [
            { label: "a", prompt: "Define 'connotation'.", marks: 1 },
            { label: "b", prompt: "Contrast 'slim' and 'skinny'.", marks: 2 },
            { label: "c", prompt: "Rewrite 'The food was nice.' in two different tones.", marks: 3 },
            { label: "d", prompt: "Explain why clichés weaken writing and give two examples.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word choice mastery", statement: "Connotation, tone shifts, cliché avoidance." },
            ],
            steps: [
              { part: "a", reasoning: "Associations beyond dictionary meaning.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Slim' is complimentary; 'skinny' can be negative.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Same referent, different judgement.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Two distinct tonal rewrites attempted.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Vocabulary clearly signals each tone.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Both rewrites grammatical and effective.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Clichés are tired and show lack of originality.", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Two examples given, e.g. 'at the end of the day', 'think outside the box'.", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Weakening effect explained.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) associations (b) slim+/skinny- (c) two tonal rewrites (d) clichés=tired, weak originality",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "2", descriptor: "Contrast clear.", part: "b" },
              { level: "Level 1", marks: "0-1", descriptor: "Partial.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Two clear rewrites.", part: "c" },
              { level: "Level 3", marks: "2", descriptor: "Attempted.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Weak.", part: "c" },
              { level: "Level 3", marks: "3", descriptor: "Explained+examples.", part: "d" },
              { level: "Level 2", marks: "2", descriptor: "Partial.", part: "d" },
              { level: "Level 1", marks: "0-1", descriptor: "Vague.", part: "d" },
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
              { id: "a", text: "Just checking in" },
              { id: "b", text: "What's up" },
              { id: "c", text: "I am writing to enquire" },
              { id: "d", text: "Hey, quick question" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** I am writing to enquire",
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
        {
          id: "cie-ol-fl-rt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is the most informal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I would appreciate your response" },
              { id: "b", text: "What's up" },
              { id: "c", text: "I am writing to enquire" },
              { id: "d", text: "Please find attached" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informal register",
                statement: "Casual, conversational phrasing for familiar contexts.",
              },
            ],
            steps: [
              {
                reasoning: "'What's up' is the casual option.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** What's up",
            commonErrors: ["Choosing a polite formal phrase."],
          },
        },
        {
          id: "cie-ol-fl-rt-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should contractions be avoided in formal writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are too casual for a formal register" },
              { id: "b", text: "There is no reason" },
              { id: "c", text: "They make sentences longer" },
              { id: "d", text: "They are always wrong" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal register",
                statement:
                  "Formal writing avoids contractions like 'don't' and 'can't'.",
              },
            ],
            steps: [
              {
                reasoning: "Contractions signal casualness.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** They are too casual for a formal register",
            commonErrors: ["Thinking contractions are grammatically wrong."],
          },
        },
        {
          id: "cie-ol-fl-rt-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does punctuation help create tone in writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Punctuation and tone",
                statement:
                  "Dashes, exclamation marks and ellipsis shape rhythm and attitude.",
              },
            ],
            steps: [
              {
                reasoning: "Exclamation marks add energy; ellipsis suggests hesitation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dashes can signal interruption or aside.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Punctuation controls rhythm and signals attitude — energy, hesitation or interruption.",
            commonErrors: ["Treating punctuation as purely grammatical."],
          },
        },
        {
          id: "cie-ol-fl-rt-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can a writer deliberately shift tone for effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone shift",
                statement:
                  "A controlled shift from formal to ironic, or calm to urgent, can emphasise a point.",
              },
            ],
            steps: [
              {
                reasoning: "Decide where the shift serves the purpose.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Signal the shift through word choice and rhythm.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The shift must be controlled, not accidental.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "A deliberate, signalled shift can emphasise a point or change the reader's response.",
            commonErrors: ["Shifting accidentally rather than for effect."],
          },
        },
        {
          id: "cie-ol-fl-rt-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to adapt the same message for two different audiences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience adaptation",
                statement:
                  "Register, vocabulary and detail must match each audience.",
              },
            ],
            steps: [
              {
                reasoning: "Identify each audience's expectations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Adjust register — formal for officials, casual for friends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Select relevant examples and vocabulary for each.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear adaptation explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Same message, different register/vocabulary/details to suit each audience.",
            commonErrors: ["Using identical language for different audiences."],
          },
        },
        {
          id: "cie-ol-fl-rt-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which closing correctly pairs with 'Dear Sir or Madam'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Best wishes" },
              { id: "b", text: "Cheers" },
              { id: "c", text: "Yours sincerely" },
              { id: "d", text: "Yours faithfully" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Letter closings",
                statement:
                  "'Dear Sir or Madam' pairs with 'Yours faithfully'.",
              },
            ],
            steps: [
              {
                reasoning: "Unknown recipient = 'Yours faithfully'.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Yours faithfully",
            commonErrors: ["Choosing 'Yours sincerely' — needs a named recipient."],
          },
        },
        {
          id: "cie-ol-fl-rt-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which rewrite of 'This is bad' is most formal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "This sucks" },
              { id: "b", text: "This is not of an acceptable standard" },
              { id: "c", text: "This is totally awful, mate" },
              { id: "d", text: "This is pretty rubbish" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal rewrite",
                statement:
                  "Formal register replaces slang with measured, impersonal phrasing.",
              },
            ],
            steps: [
              {
                reasoning: "(a) is measured and impersonal.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** This is not of an acceptable standard",
            commonErrors: ["Keeping slang like 'mate' or 'sucks'."],
          },
        },
        {
          id: "cie-ol-fl-rt-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two features of a formal register.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Formal register",
                statement:
                  "Polite, impersonal phrasing without contractions or slang.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of: no contractions, impersonal phrasing, polite vocabulary, complete sentences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both correctly identified.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "No contractions, impersonal/polite phrasing, formal vocabulary.",
            commonErrors: ["Listing informal features instead."],
          },
        },
        {
          id: "cie-ol-fl-rt-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does sentence length affect tone?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sentence length and tone",
                statement:
                  "Short sentences feel urgent or emphatic; long sentences feel formal or reflective.",
              },
            ],
            steps: [
              {
                reasoning: "Short sentences create urgency and punch.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Long sentences create formality and reflection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Choice should suit the intended tone.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Short = urgent/punchy; long = formal/reflective; choose to suit the tone.",
            commonErrors: ["Not linking length to tone."],
          },
        },
        {
          id: "cie-ol-fl-rt-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Adapting a message.",
          parts: [
            { label: "a", prompt: "Rewrite 'This is broken' in formal register.", marks: 2 },
            { label: "b", prompt: "Rewrite it in a humorous tone.", marks: 2 },
            { label: "c", prompt: "Explain how the two versions differ.", marks: 2 },
            { label: "d", prompt: "Give an audience for each version.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register control",
                statement: "Formal+humorous rewrites+differences+audiences.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A formal rewrite, e.g. 'This item is not functioning'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Impersonal, measured phrasing.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "A humorous rewrite, e.g. 'This is, frankly, a disaster'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Playful exaggeration.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Formal = impersonal; humorous = exaggerated and playful.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clear contrast explained.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Formal for officials; humorous for friends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Audiences matched to register.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) formal rewrite (b) humorous rewrite (c) contrast explained (d) two audiences",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Formal rewrite.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Humorous rewrite.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Contrast clear.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Audiences matched.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Rewrites that do not change register or tone."],
          },
        },
        {
          id: "cie-ol-fl-rt-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Register control.",
          parts: [
            { label: "a", prompt: "Define 'register'.", marks: 1 },
            { label: "b", prompt: "Give two formal alternatives to 'get in touch'.", marks: 2 },
            { label: "c", prompt: "Explain how tone differs from topic.", marks: 3 },
            { label: "d", prompt: "Rewrite 'This is great' in formal and critical tones.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register/tone",
                statement: "Definition+alternatives+concept+application.",
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
                reasoning: "Any two of 'contact', 'correspond', 'make contact with'.",
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
                reasoning: "Formal and critical tones both controlled.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Both effective and appropriate.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) formality level (b) two formal options (c) topic vs attitude (d) two tonal rewrites",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two formal options.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Distinction clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Two controlled rewrites.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Attempted.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Tones that do not differ clearly."],
          },
        },
        {
          id: "cie-ol-fl-rt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss why deliberate tone shifts can be effective in writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone shift",
                statement:
                  "A controlled shift can surprise, emphasise or reframe the reader's response.",
              },
            ],
            steps: [
              {
                reasoning: "A shift can jolt the reader into attention.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It can emphasise a turning point or irony.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It must serve a purpose, not confuse.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "A controlled tone shift can emphasise, surprise or reframe — if purposeful.",
            commonErrors: ["Shifting without purpose, which confuses the reader."],
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
