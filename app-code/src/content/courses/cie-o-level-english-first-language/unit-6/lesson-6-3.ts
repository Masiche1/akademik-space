import type { Lesson } from "../../../types.ts";

export const lesson163: Lesson = {
  id: "cie-ol-fl-lesson-6-3",
  code: "6-3",
  title: "Analysing unseen fiction",
  goal: "I CAN analyse unseen prose, poetry and drama extracts for language, structure and effect.",
  standards: ["1119 Reading: unseen fiction"],
  vocabulary: [
    {
      term: "Narrative voice",
      definition: "The perspective from which a story is told.",
    },
    { term: "Foreshadowing", definition: "Clues that hint at future events." },
    {
      term: "Mood",
      definition: "The emotional atmosphere created for the reader.",
    },
    { term: "Stanza", definition: "A grouped set of lines in a poem." },
    {
      term: "Stage direction",
      definition: "Instructions in a play describing action or delivery.",
    },
    {
      term: "Subtext",
      definition: "The implied meaning beneath what is literally said.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-unseen-narrative",
      title: "Unseen narrative extracts",
      skill:
        "Analyse unseen prose extracts for voice, imagery, structure and character.",
      lesson: {
        sections: [
          {
            heading: "Where is the extract?",
            body: "Consider the extract's place in the whole text: opening, middle, climax or ending. An opening establishes character and mood; a climax concentrates tension; an ending often resolves or lingers on meaning.",
          },
          {
            heading: "Language and imagery",
            body: "Track the writer's choices: imagery (simile, metaphor, personification), word connotations, sentence variety, and sound devices. For each, ask: what does it show and how does it make the reader feel?",
          },
          {
            heading: "Character and atmosphere",
            body: "Infer character from action, dialogue and interiority. Notice how setting mirrors mood — a storm outside may echo turmoil inside. Look for turning points where the extract shifts tone.",
          },
        ],
        keyFormulas: [
          {
            name: "Fiction analysis",
            statement: "Place+voice+imagery+character+structure=analysis.",
          },
        ],
        workedExample: {
          problem: "An extract ends with a character laughing at bad news.",
          solution:
            "The incongruous reaction suggests suppressed emotion or psychological complexity — note the gap between what is said and what is meant.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-un-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'subtext'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Implied meaning beneath what is literally said",
              },
              { id: "b", text: "The text printed below the title" },
              { id: "c", text: "The author's biography" },
              { id: "d", text: "A summary of the plot" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subtext",
                statement:
                  "The implied, unspoken layer of meaning beneath literal words.",
              },
            ],
            steps: [
              {
                reasoning: "Subtext is what is meant, not what is said.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Implied meaning beneath literal words",
            commonErrors: ["Confusing subtext with plot summary."],
          },
        },
        {
          id: "cie-ol-fl-un-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract and answer.",
          extract: {
            title: "The Lighthouse",
            author: "Written for Akademik Space",
            text: "Elias climbed the spiral stairs with his lantern swinging. Below, the sea kept its own counsel — black, patient, enormous. At the top he paused. The light swept out across the water, and for a moment he imagined it reaching someone far away, saying: I am here. I am still here.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative analysis",
                statement:
                  "Imagery+personification+interiority reveal mood and character.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sea 'kept its own counsel' — personification suggesting secrecy and indifference.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Black, patient, enormous' builds an ominous, sublime mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "His imagined 'I am still here' reveals loneliness and a need to be noticed.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Personified sea creates ominous mood; Elias's imagined cry reveals loneliness.",
            commonErrors: [
              "Describing events without analysing technique or effect.",
            ],
          },
        },
        {
          id: "cie-ol-fl-un-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can setting mirror a character's inner state in an unseen extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pathetic fallacy",
                statement:
                  "Writers often align weather and environment with character emotion to deepen mood.",
              },
            ],
            steps: [
              {
                reasoning:
                  "External conditions echo internal ones — storm for turmoil, calm for peace.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "This creates coherence between character and world.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Contrasts can also work — calm setting against inner chaos heightens tension.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accurate explanation with examples.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Setting mirrors emotion via pathetic fallacy; contrast can also heighten tension.",
            commonErrors: [
              "Describing the setting without linking it to character.",
            ],
          },
        },
        {
          id: "cie-ol-fl-un-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analysing an unseen narrative extract.",
          extract: {
            title: "The Last Train",
            author: "Written for Akademik Space",
            text: "The platform was empty except for a man reading a newspaper he clearly wasn't reading. Mara checked her watch for the third time. When the train finally hissed into view, he folded his paper, smiled — the first real smile she'd seen from him — and held out his hand.\n\n'Miss,' he said, 'you look like you've been waiting for this moment.' She didn't deny it.",
          },
          parts: [
            {
              label: "a",
              prompt:
                "What does 'a newspaper he clearly wasn't reading' suggest?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "How does the writer build tension before the train arrives?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What does the man's smile signal?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why might the writer end on 'she didn't deny it'?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Narrative analysis",
                statement:
                  "Detail inference+tension+character signal+ending effect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "He is nervous or preoccupied — hiding behind the paper.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Waiting to make a move/approach her.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Inference from 'clearly wasn't reading'.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Empty platform + waiting builds isolation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Checking watch thrice shows impatience/anxiety.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Delayed arrival prolongs anticipation.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Genuine warmth — he is relieved she came / happy to see her.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "'First real smile' implies earlier reserve.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Confirms her anticipation — ambiguous, leaves relationship open.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Ending choice creates lingering interest.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) nervousness/anticipation (b) isolation+delay+anxiety (c) genuine warmth (d) open-ended confirmation",
            levels: [
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Inference explained.",
                part: "a",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Tension techniques explained.",
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
                descriptor: "Signal interpreted.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Ending effect explained.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Quoting without analysis of effect."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-unseen-poetry-drama",
      title: "Unseen poetry and drama",
      skill:
        "Analyse unseen poems and play extracts for form, language and dramatic effect.",
      lesson: {
        sections: [
          {
            heading: "Poetry: form and sound",
            body: "Note the poem's form: line breaks, stanza shape, rhyme, rhythm. Sound devices (alliteration, assonance, onomatopoeia) often carry meaning — harsh sounds for violence, soft sounds for calm. Consider how the poem is organised and why.",
          },
          {
            heading: "Poetry: imagery and tone",
            body: "Track the central image or metaphor and how it develops across stanzas. Identify the speaker's attitude — the poem may be confessional, ironic or observational. Ambiguity is often deliberate; support readings with evidence.",
          },
          {
            heading: "Drama: performance",
            body: "Play extracts combine dialogue, stage directions and subtext. Stage directions reveal what characters hide; pauses and gestures carry meaning. Consider dramatic irony (audience knows more than a character), tension, and how the scene might be performed.",
          },
        ],
        keyFormulas: [
          {
            name: "Poetry/drama analysis",
            statement: "Form+sound+imagery+tone / dialogue+directions+subtext.",
          },
        ],
        workedExample: {
          problem:
            "A play line: 'I am fine,' she says, while shredding the letter.",
          solution:
            "Subtext: she is not fine — the action contradicts the words, creating dramatic irony or hidden distress.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-upd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'stanza'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A grouped set of lines in a poem" },
              { id: "b", text: "A single line of verse" },
              { id: "c", text: "A stage direction" },
              { id: "d", text: "A type of rhyme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stanza",
                statement:
                  "A grouped set of lines, like a paragraph in a poem.",
              },
            ],
            steps: [
              {
                reasoning: "Stanza = poetic paragraph.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Grouped lines in a poem",
            commonErrors: ["Confusing stanza with line or rhyme scheme."],
          },
        },
        {
          id: "cie-ol-fl-upd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the poem and answer.",
          extract: {
            title: "The Empty Chair",
            author: "Written for Akademik Space",
            text: "The chair sits where he always sat,\na shape of absence filling the room.\nDust gathers on the sill like slow snow,\nand evening folds itself around the gloom.",
            lineNumbers: true,
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetry analysis",
                statement: "Imagery+symbolism+mood in unseen verse.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Shape of absence' — the empty chair symbolises the missing person.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Dust gathers like slow snow' — simile linking decay to quiet grief.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Personified 'evening folds' creates a sombre, enveloping mood.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Empty chair=symbol of absence; snow simile=slow grief; personified evening=sombre mood.",
            commonErrors: ["Paraphrasing lines without analysing effect."],
          },
        },
        {
          id: "cie-ol-fl-upd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do stage directions contribute to the meaning of a play extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stage directions",
                statement:
                  "Directions reveal action, gesture and delivery that dialogue alone cannot convey.",
              },
            ],
            steps: [
              {
                reasoning:
                  "They show physical action — what characters do while speaking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Gestures and pauses can contradict or underline the words (subtext).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "They guide performance, shaping how the audience receives the scene.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of dramatic function.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Stage directions reveal action, gesture and delivery, often creating subtext.",
            commonErrors: [
              "Ignoring stage directions and analysing only dialogue.",
            ],
          },
        },
        {
          id: "cie-ol-fl-upd-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analysing unseen drama.",
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            source: "A play extract",
            text: "MARA: (not looking up) You came back.\n\nDEV: I said I would.\n\nMARA: (folding the letter carefully) And this?\n\nDEV: (a pause) I wrote it a long time ago. I've been meaning to give it to you.\n\nMARA: (sliding the letter across the table) Keep it. I've read it enough times to last me.",
          },
          parts: [
            {
              label: "a",
              prompt: "What does Mara's failure to look up suggest?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "How does the stage direction '(folding the letter carefully)' contribute?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What is the subtext of Mara's final line?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "What mood does the exchange create?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Drama analysis",
                statement: "Stage directions+dialogue+subtext+mood.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Avoidance — hurt, anger or discomfort.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Reluctance to face him directly.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Careful folding = the letter matters deeply to her.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Contrast: gentle action vs tense words creates subtext.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Shows her controlled emotion.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "She has already read it repeatedly — it affects her deeply.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "'Keep it' is rejection masking lingering feeling.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Subtext explained from evidence.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Restrained tension, unresolved hurt, bittersweet.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Mood linked to details.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) avoidance (b) care=subtext (c) rejection masking feeling (d) restrained tension",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Avoidance inferred.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Direction analysed.",
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
                level: "Level 3",
                marks: "2-3",
                descriptor: "Subtext explained.",
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
                level: "Level 2",
                marks: "1-2",
                descriptor: "Mood identified.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: [
              "Reading dialogue literally without considering subtext.",
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-unseen-fiction-notes",
      title: "Analysing unseen fiction — revision notes",
      summary:
        "Prose, poetry and drama extract analysis: form, language, subtext and effect.",
      sections: [
        {
          heading: "Where to start",
          body: "Consider the extract's place in the text (opening/climax/ending), the narrative voice, and the dominant mood before analysing details.",
        },
        {
          heading: "What to track",
          body: "Prose: imagery, word connotations, sentence variety, character inference. Poetry: form, sound, stanza structure, tone. Drama: dialogue, stage directions, subtext, dramatic irony.",
        },
        {
          heading: "The POET/PEE method",
          body: "Point (what happens/means), Evidence (quote), Explanation (how technique creates effect). Always quote then analyse — never analyse without evidence.",
        },
        {
          heading: "Exam checklist",
          body: "Did I consider the extract's context? Did I analyse technique, not just content? Is every point supported by a quotation?",
        },
      ],
    },
  ],
};
