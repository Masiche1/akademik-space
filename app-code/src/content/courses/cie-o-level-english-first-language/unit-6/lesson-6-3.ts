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
              { id: "a", text: "The text printed below the title" },
              {
                id: "b",
                text: "Implied meaning beneath what is literally said",
              },
              { id: "c", text: "The author's biography" },
              { id: "d", text: "A summary of the plot" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Implied meaning beneath literal words",
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
        {
          id: "cie-ol-fl-un-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'interiority' in narrative writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dialogue" },
              { id: "b", text: "The physical setting" },
              { id: "c", text: "The plot summary" },
              { id: "d", text: "A character's inner thoughts and feelings" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interiority",
                statement: "Presentation of a character's inner thoughts and feelings.",
              },
            ],
            steps: [
              {
                reasoning: "Interiority = inner life.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** A character's inner thoughts and feelings",
            commonErrors: ["Confusing with external action or dialogue."],
          },
        },
        {
          id: "cie-ol-fl-un-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which image does the extract use to describe the light?",
          extract: {
            title: "The Lighthouse Keeper",
            author: "Written for Akademik Space",
            text: "Elias climbed the spiral stairs each evening, though his knees complained louder than the wind. At the top he trimmed the lamp and watched the beam sweep the black water. Below, the village slept. He had kept the light for forty years, and he could not imagine the dark without it.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personification — 'knees complained'" },
              { id: "b", text: "A list of facts" },
              { id: "c", text: "A rhyming couplet" },
              { id: "d", text: "A stage direction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery",
                statement: "'Knees complained' gives human qualities to body parts.",
              },
            ],
            steps: [
              {
                reasoning: "Personification attributes human action to knees.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Personification — 'knees complained'",
            commonErrors: ["Missing the personification in the detail."],
          },
        },
        {
          id: "cie-ol-fl-un-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the effect of the simile-like image 'beam sweep the black water'.",
          extract: {
            title: "The Lighthouse Keeper",
            author: "Written for Akademik Space",
            text: "Elias climbed the spiral stairs each evening, though his knees complained louder than the wind. At the top he trimmed the lamp and watched the beam sweep the black water. Below, the village slept. He had kept the light for forty years, and he could not imagine the dark without it.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery",
                statement:
                  "The sweeping beam against black water creates contrast and rhythm.",
              },
            ],
            steps: [
              {
                reasoning: "Light against black water creates strong contrast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The motion suggests vigilance and solitude.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The sweeping light on black water creates contrast and a mood of solitary vigilance.",
            commonErrors: ["Describing the image without its effect."],
          },
        },
        {
          id: "cie-ol-fl-un-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What does Mara's reaction to the letter reveal about her character?",
          extract: {
            title: "The Locked Door",
            author: "Written for Akademik Space",
            text: "Mara's brother had hidden the letter under the floorboard the week before he left for the coast. She found it by accident — a corner of blue paper catching the light as she reached for a lost coin. The handwriting was familiar in a way that made her stomach tighten.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character inference",
                statement: "Physical reaction reveals emotional significance.",
              },
            ],
            steps: [
              {
                reasoning: "'Stomach tighten' shows nervousness or dread.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The letter clearly matters deeply to her.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inference linked to the physical detail.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "She is anxious and emotionally invested; the letter has hidden significance for her.",
            commonErrors: ["Stating the discovery without inferring feeling."],
          },
        },
        {
          id: "cie-ol-fl-un-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does the final sentence shift the mood of the first-snow extract?",
          extract: {
            title: "The First Snow",
            author: "Written for Akademik Space",
            text: "It began as dust, then as flakes, then as a world turned white. The children were out before breakfast, leaving perfect tracks across the untouched garden. Their mother watched from the kitchen window, coffee going cold, thinking how quickly beauty can arrive and how quickly it will leave.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mood shift",
                statement:
                  "The ending turns wonder into bittersweet awareness of impermanence.",
              },
            ],
            steps: [
              {
                reasoning: "The opening is joyful — children playing in snow.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The mother's cold coffee signals stillness and thought.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Quickly it will leave' introduces melancholy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of the shift.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The ending shifts from joy to bittersweet awareness that beauty is temporary.",
            commonErrors: ["Missing the tonal turn in the last sentence."],
          },
        },
        {
          id: "cie-ol-fl-un-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'narrative voice'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The volume of the narrator" },
              { id: "b", text: "The perspective and style through which a story is told" },
              { id: "c", text: "A list of characters" },
              { id: "d", text: "The book's title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative voice",
                statement:
                  "The perspective and stylistic identity of the narrator.",
              },
            ],
            steps: [
              {
                reasoning: "Voice = perspective + style.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** The perspective and style through which a story is told",
            commonErrors: ["Confusing voice with plot or character list."],
          },
        },
        {
          id: "cie-ol-fl-un-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What connotation does 'untouched' carry in the snow extract?",
          extract: {
            title: "The First Snow",
            author: "Written for Akademik Space",
            text: "It began as dust, then as flakes, then as a world turned white. The children were out before breakfast, leaving perfect tracks across the untouched garden. Their mother watched from the kitchen window, coffee going cold, thinking how quickly beauty can arrive and how quickly it will leave.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pristine and newly blank" },
              { id: "b", text: "Dirty and neglected" },
              { id: "c", text: "Artificial" },
              { id: "d", text: "Dangerous" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Connotation",
                statement:
                  "'Untouched' suggests purity and fresh possibility, not neglect.",
              },
            ],
            steps: [
              {
                reasoning: "Positive connotation of freshness.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Pristine and newly blank",
            commonErrors: ["Reading 'untouched' as negative."],
          },
        },
        {
          id: "cie-ol-fl-un-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two details from the lighthouse extract that create a mood of solitude.",
          extract: {
            title: "The Lighthouse Keeper",
            author: "Written for Akademik Space",
            text: "Elias climbed the spiral stairs each evening, though his knees complained louder than the wind. At the top he trimmed the lamp and watched the beam sweep the black water. Below, the village slept. He had kept the light for forty years, and he could not imagine the dark without it.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Atmosphere",
                statement:
                  "Isolated setting and routine details create solitude.",
              },
            ],
            steps: [
              {
                reasoning: "'Below, the village slept' — he is apart from everyone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Black water' and solitary lamp-keeping reinforce isolation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The sleeping village below and the lone light on black water create solitude.",
            commonErrors: ["Naming mood without supporting details."],
          },
        },
        {
          id: "cie-ol-fl-un-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How can a setting mirror a character's internal state in fiction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Setting and mood",
                statement:
                  "External surroundings can echo or contrast inner feelings.",
              },
            ],
            steps: [
              {
                reasoning: "Stormy weather can echo turmoil; calm can heighten tension.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The mirror deepens understanding of the character.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of the technique.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Setting can mirror inner feelings or contrast them, deepening characterisation.",
            commonErrors: ["Describing setting without linking to character."],
          },
        },
        {
          id: "cie-ol-fl-un-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Garden Gate",
          extract: {
            title: "The Garden Gate",
            author: "Written for Akademik Space",
            text: "The gate had not been opened in years. Ivy had climbed its bars like fingers gripping a railing. When Ana pushed it, the hinges screamed — a sound like a memory she had almost forgotten. Beyond it, the garden was wild but not dead: seeds waited under the soil for someone to remember them.",
          },
          parts: [
            { label: "a", prompt: "State two literal details about the gate.", marks: 2 },
            { label: "b", prompt: "Explain the image 'ivy... like fingers gripping a railing'.", marks: 2 },
            { label: "c", prompt: "What might 'a memory she had almost forgotten' suggest?", marks: 2 },
            { label: "d", prompt: "What does 'seeds waited' imply about the garden's future?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fiction analysis",
                statement: "Literal+imagery+inference+symbolism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Not opened in years; ivy on the bars.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Accurate stated detail.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "The simile makes ivy seem to hold on possessively.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Suggests the garden's neglect is almost alive.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "The sound triggers buried personal history.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Reasonable inference.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Renewal is possible — potential lies dormant.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Symbolic interpretation supported.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) two details (b) ivy holds on/neglect alive (c) buried history (d) dormant renewal",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two details.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Image explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Suggestion given.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Interpretation given.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Quoting without analysis of effect."],
          },
        },
        {
          id: "cie-ol-fl-un-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analysing a narrative extract.",
          extract: {
            title: "The Last Ferry",
            author: "Written for Akademik Space",
            text: "The ferry horn sounded once, then twice — the signal that no one boarded at the last minute. Daniel stood at the rail watching the town lights smear and fade. His bag was packed. The letter in his pocket had been read so many times the words had blurred, but he knew them by heart.",
          },
          parts: [
            { label: "a", prompt: "State two literal details about Daniel's departure.", marks: 2 },
            { label: "b", prompt: "Explain the effect of 'lights smear and fade'.", marks: 2 },
            { label: "c", prompt: "What does the repeated reading of the letter suggest?", marks: 3 },
            { label: "d", prompt: "How does the extract create a mood of departure?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fiction analysis",
                statement: "Literal+imagery+inference+mood.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Bag packed; on the last ferry leaving town.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Accurate stated detail.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "The visual blur suggests distance and finality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Effect linked to mood.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "The letter is deeply important to him.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Repetition shows longing or unresolved feeling.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Inference anchored in detail.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Finality in horn signals, fading lights, packed bag.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Mood coherently explained.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) two details (b) blur=finality (c) letter=deep feeling (d) finality details",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two details.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Inference given.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Mood explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Quoting without analysis of effect."],
          },
        },
        {
          id: "cie-ol-fl-un-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss why considering where an extract sits in a whole text matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Extract context",
                statement:
                  "Position (opening/climax/ending) shapes what the extract is doing.",
              },
            ],
            steps: [
              {
                reasoning: "An opening establishes character and mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "A climax concentrates tension; an ending resolves or lingers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Position changes how details should be interpreted.",
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
              "Position shapes function: openings set up, climaxes intensify, endings resolve.",
            commonErrors: ["Analysing the extract as if it were the whole text."],
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
              { id: "a", text: "A type of rhyme" },
              { id: "b", text: "A stage direction" },
              { id: "c", text: "A single line of verse" },
              { id: "d", text: "A grouped set of lines in a poem" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Grouped lines in a poem",
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
        {
          id: "cie-ol-fl-upd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'rhyme scheme'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The pattern of rhyming lines in a poem" },
              { id: "b", text: "The number of stanzas" },
              { id: "c", text: "A stage direction" },
              { id: "d", text: "The poem's title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhyme scheme",
                statement: "The pattern of end-rhymes across a poem's lines.",
              },
            ],
            steps: [
              {
                reasoning: "Rhyme scheme = pattern of rhymes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The pattern of rhyming lines in a poem",
            commonErrors: ["Confusing with stanza count or form."],
          },
        },
        {
          id: "cie-ol-fl-upd-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sound device dominates this poem?",
          extract: {
            title: "The Rain",
            author: "Written for Akademik Space",
            text: "Soft rain on the sill,\nsoft footsteps down the hill.\nSoft hands on the latch,\nsoft breath — and then, not much.",
            lineNumbers: true,
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A metaphor" },
              { id: "b", text: "Repetition of the 'soft' sound (alliteration)" },
              { id: "c", text: "Onomatopoeia only" },
              { id: "d", text: "Rhyme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sound devices",
                statement: "Repeated initial 's' sounds create a hushed, soft effect.",
              },
            ],
            steps: [
              {
                reasoning: "'Soft' repeats the s-sound each line.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Repetition of the 'soft' sound (alliteration)",
            commonErrors: ["Missing the repeated initial sound."],
          },
        },
        {
          id: "cie-ol-fl-upd-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the image 'counts crumbs of time like sugar'.",
          extract: {
            title: "The Clock",
            author: "Written for Akademik Space",
            text: "Tick, tock, the hallway clock\ncounts crumbs of time like sugar.\nEach chime a small, bright knock\non doors of rooms I used to know.",
            lineNumbers: true,
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery",
                statement:
                  "The simile makes time feel small, sweet and counted out.",
              },
            ],
            steps: [
              {
                reasoning: "Time is compared to crumbs/sugar — small and sweet.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Suggests time passing in small, precious pieces.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The simile makes passing time feel small, sweet and counted out.",
            commonErrors: ["Paraphrasing without explaining the comparison's effect."],
          },
        },
        {
          id: "cie-ol-fl-upd-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What do the stage directions reveal about Marcus?",
          extract: {
            title: "The Kitchen",
            author: "Written for Akademik Space",
            source: "A play extract",
            text: "ELENA: (folding the letter) You came back.\nMARCUS: (not meeting her eyes) The train was late.\nELENA: (smiling) It always is.\n(Marcus looks at the window.)",
            lineNumbers: true,
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stage directions",
                statement:
                  "Physical actions reveal what characters hide in dialogue.",
              },
            ],
            steps: [
              {
                reasoning: "'Not meeting her eyes' suggests guilt or avoidance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Looking at the window is further evasion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "He is hiding something from Elena.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Marcus avoids eye contact and looks away — he is hiding something.",
            commonErrors: ["Reading dialogue literally without the directions."],
          },
        },
        {
          id: "cie-ol-fl-upd-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the subtext of Elena's line 'It always is.'",
          extract: {
            title: "The Kitchen",
            author: "Written for Akademik Space",
            source: "A play extract",
            text: "ELENA: (folding the letter) You came back.\nMARCUS: (not meeting her eyes) The train was late.\nELENA: (smiling) It always is.\n(Marcus looks at the window.)",
            lineNumbers: true,
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Subtext",
                statement:
                  "The smile and 'always' hint she knows more than she says.",
              },
            ],
            steps: [
              {
                reasoning: "On the surface she agrees the train is late.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'It always is' with a smile suggests she doubts his excuse.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The letter detail hints at a deeper reason for his return.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear subtext explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "She politely accepts his excuse but her smile suggests she knows he is hiding the real reason.",
            commonErrors: ["Taking the line literally as agreement."],
          },
        },
        {
          id: "cie-ol-fl-upd-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'dramatic irony'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When a character tells a joke" },
              { id: "b", text: "A type of stage light" },
              { id: "c", text: "When the play ends happily" },
              { id: "d", text: "When the audience knows more than a character" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic irony",
                statement:
                  "The audience knows something a character does not, creating tension.",
              },
            ],
            steps: [
              {
                reasoning: "Dramatic irony = audience > character knowledge.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** When the audience knows more than a character",
            commonErrors: ["Confusing with situational irony."],
          },
        },
        {
          id: "cie-ol-fl-upd-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the tone of 'The Clock' poem?",
          extract: {
            title: "The Clock",
            author: "Written for Akademik Space",
            text: "Tick, tock, the hallway clock\ncounts crumbs of time like sugar.\nEach chime a small, bright knock\non doors of rooms I used to know.",
            lineNumbers: true,
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Furious" },
              { id: "b", text: "Comedic" },
              { id: "c", text: "Nostalgic and reflective" },
              { id: "d", text: "Indifferent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tone",
                statement:
                  "'Rooms I used to know' signals longing for the past.",
              },
            ],
            steps: [
              {
                reasoning: "Memory of past rooms = nostalgia.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** Nostalgic and reflective",
            commonErrors: ["Missing the wistful tone."],
          },
        },
        {
          id: "cie-ol-fl-upd-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two details from 'The Clock' that create its mood.",
          extract: {
            title: "The Clock",
            author: "Written for Akademik Space",
            text: "Tick, tock, the hallway clock\ncounts crumbs of time like sugar.\nEach chime a small, bright knock\non doors of rooms I used to know.",
            lineNumbers: true,
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mood",
                statement:
                  "The ticking sound and memory of rooms create a hushed, wistful mood.",
              },
            ],
            steps: [
              {
                reasoning: "'Tick, tock' and 'crumbs of time' create quiet, passing time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Rooms I used to know' adds nostalgia.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The ticking clock and memory of past rooms create a hushed, nostalgic mood.",
            commonErrors: ["Naming mood without textual support."],
          },
        },
        {
          id: "cie-ol-fl-upd-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How can line breaks and stanza shape affect a poem's meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Poetic form",
                statement:
                  "Line breaks control pace and emphasis; stanza breaks mark shifts.",
              },
            ],
            steps: [
              {
                reasoning: "A line break can pause or emphasise a word.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stanza breaks can signal a change in tone or subject.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Form is part of meaning, not decoration.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Line and stanza breaks control pace, emphasis and shifts — form carries meaning.",
            commonErrors: ["Treating form as irrelevant to meaning."],
          },
        },
        {
          id: "cie-ol-fl-upd-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Old Violin",
          extract: {
            title: "The Old Violin",
            author: "Written for Akademik Space",
            text: "She lifted the violin, rosined the bow,\nand played the tune her mother knew.\nThe strings complained, thin and rusty,\nbut she played on — because she had to.",
            lineNumbers: true,
          },
          parts: [
            { label: "a", prompt: "State two literal details about the playing.", marks: 2 },
            { label: "b", prompt: "Explain the personification in line 3.", marks: 2 },
            { label: "c", prompt: "What might 'because she had to' suggest?", marks: 2 },
            { label: "d", prompt: "What mood does the poem create? Justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Poetry analysis",
                statement: "Literal+device+inference+mood.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "She rosined the bow; played her mother's tune.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Accurate stated detail.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "'Strings complained' gives human feeling to the instrument.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Suggests the violin is old/worn yet she persists.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Duty, obligation or emotional necessity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Reasonable inference from 'had to'.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A mood such as poignant, dutiful or mournful.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Justified by the worn violin and mother's tune.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) two details (b) personification=wear/age (c) duty/necessity (d) poignant mood",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two details.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Device explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Suggestion given.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Mood justified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Paraphrasing lines without analysing effect."],
          },
        },
        {
          id: "cie-ol-fl-upd-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analysing a play extract.",
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            source: "A play extract",
            text: "SANA: (holding the envelope) This came for you.\nOMAR: (not touching it) Who from?\nSANA: (smiling) You know who.\n(He finally takes it, but does not open it.)",
            lineNumbers: true,
          },
          parts: [
            { label: "a", prompt: "Identify the main subtext of the exchange.", marks: 2 },
            { label: "b", prompt: "Explain the effect of Omar's stage direction.", marks: 2 },
            { label: "c", prompt: "How might dramatic irony operate here?", marks: 2 },
            { label: "d", prompt: "Describe the mood of the scene and justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Drama analysis",
                statement: "Subtext+directions+irony+mood.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tension and avoidance around a significant letter.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Subtext clearly identified.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Taking but not opening shows fear or reluctance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "The direction contradicts his words, revealing feeling.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "If the audience knows the letter's contents, his hesitation gains irony.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Reasonable dramatic-irony reading.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A mood such as tense, uneasy or suspenseful.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Justified by avoidance and the unopened letter.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Mood coherently explained.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) avoidance around letter (b) reluctance revealed (c) audience knowledge=irony (d) tense mood",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Subtext given.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Literal only.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Direction explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Irony identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Mood justified.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Reading dialogue literally without considering subtext."],
          },
        },
        {
          id: "cie-ol-fl-upd-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how ambiguity can be a deliberate poetic effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ambiguity",
                statement:
                  "Open meanings invite multiple readings and reward careful interpretation.",
              },
            ],
            steps: [
              {
                reasoning: "Ambiguous images can hold several valid meanings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "This engages the reader in interpretation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Strong answers support one reading with evidence.",
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
              "Ambiguity invites interpretation; supported readings show skill.",
            commonErrors: ["Assuming ambiguity is always a flaw."],
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
