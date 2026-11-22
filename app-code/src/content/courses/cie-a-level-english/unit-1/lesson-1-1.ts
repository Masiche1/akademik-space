import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "cial-e-u1-lesson-1-1",
  code: "1-1",
  title: "Analysing language in unseen texts",
  goal: "I CAN analyse word choice, imagery and tone in unseen texts and explain their effects.",
  standards: ["9093 Paper 2: language analysis"],
  vocabulary: [
    { term: "Lexis", definition: "The vocabulary choices a writer makes." },
    {
      term: "Connotation",
      definition:
        "The associations a word carries beyond its dictionary meaning.",
    },
    {
      term: "Imagery",
      definition:
        "Language appealing to the senses: visual, auditory, tactile, olfactory, gustatory.",
    },
    {
      term: "Tone",
      definition:
        "The writer's attitude toward subject and reader, conveyed through language.",
    },
    {
      term: "Register",
      definition: "Level of formality appropriate to context and audience.",
    },
    {
      term: "Sound devices",
      definition:
        "Alliteration, assonance, onomatopoeia, rhythm — the music of language.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u1-word-choice",
      title: "Word choice and imagery",
      skill: "Analyse lexis, connotation and imagery in unseen texts.",
      lesson: {
        sections: [
          {
            heading: "Lexis and connotation",
            body: "Examiners reward precise analysis of word choice. 'Slender' vs 'skinny', 'frugal' vs 'stingy', 'curious' vs 'nosy' — same denotation, different connotation. Track whether words are formal, colloquial, technical or emotive, and what that signals about the writer's stance.",
          },
          {
            heading: "Imagery types",
            body: "Identify the sense appealed to: visual ('the sky bruised purple'), auditory ('a low hum'), tactile ('rough bark'), olfactory ('sour tang of rain'), gustatory ('bitter coffee'). Then analyse what the image conveys — not just that it exists.",
          },
          {
            heading: "Sound and rhythm",
            body: "Alliteration (repeated initial sounds), assonance (repeated vowel sounds), onomatopoeia (sound-imitating words) and rhythm create music. Harsh consonants suit violence; soft sibilants suit calm. Connect the sound to the mood.",
          },
        ],
        keyFormulas: [
          {
            name: "Language analysis",
            statement: "Word choice+imagery+sound=tone and effect on reader.",
          },
        ],
        workedExample: {
          problem: "Analyse: 'the city breathed smoke and steel'.",
          solution:
            "Personification ('breathed') gives the city life; 'smoke and steel' is a harsh, industrial pairing — the city feels alive but oppressive, suggesting pollution and dehumanisation.",
        },
      },
      questions: [
        {
          id: "cial-e-u1-wc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'connotation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dictionary definition" },
              { id: "b", text: "The number of syllables" },
              {
                id: "c",
                text: "The associations a word carries beyond its meaning",
              },
              { id: "d", text: "The spelling of a word" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Connotation",
                statement:
                  "The emotional/cultural associations beyond literal meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Connotation = associations, not definition.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Associations beyond meaning",
            commonErrors: ["Confusing connotation with denotation."],
          },
        },
        {
          id: "cial-e-u1-wc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyse the language in this extract.",
          extract: {
            title: "The Harbour",
            author: "Written for Akademik Space",
            text: "The harbour exhaled its last breath of diesel as the ferry pulled away. Gulls screamed overhead, their cries ragged against the wind.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery analysis",
                statement:
                  "Name technique, quote, explain effect on mood/meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Personification: harbour 'exhaled its last breath' — dying, weary, final.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Gulls screamed' + 'ragged' — harsh auditory imagery creates agitation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Overall mood: bleak, mournful departure.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Personification and harsh imagery create a bleak, mournful mood.",
            commonErrors: [
              "Identifying techniques without explaining effects.",
            ],
          },
        },
        {
          id: "cial-e-u1-wc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can a writer's choice of lexis reveal their attitude?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Lexis and attitude",
                statement:
                  "Formal vs colloquial, emotive vs neutral word choices signal stance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Emotive words ('heartbreaking', 'heroic') reveal approval or disapproval.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Formal register signals authority; slang signals intimacy or contempt.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Loaded terms ('regime' vs 'government') frame the subject.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear link between lexis and attitude.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Word choices carry connotation that reveals the writer's stance.",
            commonErrors: ["Saying 'the writer is biased' without evidence."],
          },
        },
        {
          id: "cial-e-u1-wc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analysing language in unseen texts.",
          extract: {
            title: "The Last Harvest",
            author: "Written for Akademik Space",
            text: "The combine harvester groaned through the final field, its blades chewing the gold into straw. An old man watched from the gate, his hands folded like prayer — for the land, for the season, for the years that had brought him here.",
          },
          parts: [
            {
              label: "a",
              prompt: "Identify two techniques in the first sentence.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Analyse the simile 'hands folded like prayer'.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What mood does the extract create? Justify.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "How does sound contribute to the passage?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Language analysis",
                statement: "Techniques+imagery+mood+sound=full analysis.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Personification ('groaned') and metaphor ('chewing').",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Both identified.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Simile compares hands to prayer — reverence, ritual, farewell.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Suggests the old man honours the land/life's work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Effect explained.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Mood: nostalgic, reverent, valedictory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Justified by imagery and tone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clear mood identification.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "'groaned', 'chewing' — harsh consonants evoke labour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Sound linked to mood.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) personification+metaphor (b) prayer=reverence (c) nostalgic/reverent (d) harsh sounds=labour",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Two techniques.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Simile analysed.",
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
                descriptor: "Mood justified.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Mood only.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Sound analysed.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Technique-spotting without effect."],
          },
        },
        {
          id: "cial-e-u1-wc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'onomatopoeia'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words that imitate sounds" },
              { id: "b", text: "Giving human qualities to objects" },
              { id: "c", text: "Repeated initial consonants" },
              { id: "d", text: "A comparison using 'like'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Onomatopoeia",
                statement: "Words whose sound imitates their meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Onomatopoeia = sound-imitating words.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Words that imitate sounds",
            commonErrors: ["Confusing with alliteration."],
          },
        },
        {
          id: "cial-e-u1-wc-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a writer choose non-visual imagery (sound, touch, smell)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sensory imagery",
                statement: "Non-visual senses create immersion and unexpected effects.",
              },
            ],
            steps: [
              {
                reasoning: "Engages senses beyond sight — more immersive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can evoke memory or discomfort sight cannot.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Non-visual imagery immerses the reader and can evoke memory or unease.",
            commonErrors: ["Claiming it is simply more descriptive."],
          },
        },
        {
          id: "cial-e-u1-wc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 'the kettle screamed and the floorboards groaned', what is the dominant sound device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rhyme" },
              { id: "b", text: "Onomatopoeia" },
              { id: "c", text: "Assonance" },
              { id: "d", text: "Caesura" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sound devices",
                statement: "Onomatopoeia imitates real sounds.",
              },
            ],
            steps: [
              {
                reasoning: "'Screamed' and 'groaned' imitate sounds.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Onomatopoeia",
            commonErrors: ["Confusing onomatopoeia with personification."],
          },
        },
        {
          id: "cial-e-u1-wc-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the word choice in this extract.",
          extract: {
            title: "The Market",
            author: "Written for Akademik Space",
            text: "Stalls spilled over with bruised apples and shouting traders. The air hung thick with garlic and diesel; a stray dog picked through the gutters like it owned the place.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Word choice analysis",
                statement: "Quote lexis, name connotation, explain effect.",
              },
            ],
            steps: [
              {
                reasoning: "'Bruised apples' — negative connotation suggests decay/waste.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Shouting', 'thick', 'spilled' — energetic, chaotic word choices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Like it owned the place' — simile giving the dog confidence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Overall effect: vivid, sensory, slightly grimy atmosphere.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Sensory lexis creates a vivid, chaotic, slightly grubby market atmosphere.",
            commonErrors: ["Listing words without explaining connotation."],
          },
        },
        {
          id: "cial-e-u1-wc-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can connotation create irony in a text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Connotation and irony",
                statement: "Gap between literal meaning and implied attitude creates irony.",
              },
            ],
            steps: [
              {
                reasoning: "Words carry associations opposite to surface meaning.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "E.g. 'efficient' for a brutal system — praise sounding like criticism.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reader must detect the gap between word and attitude.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation with example.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Irony arises when connotations clash with the literal statement.",
            commonErrors: ["Confusing irony with sarcasm only."],
          },
        },
        {
          id: "cial-e-u1-wc-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how lexis shapes the reader's response in this extract.",
          extract: {
            title: "The Office",
            author: "Written for Akademik Space",
            text: "The open-plan office hummed with quiet desperation. Priya stared at her screen, the cursor blinking like a metronome counting down her afternoon.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Lexis and mood",
                statement: "Word connotation + imagery = mood and reader response.",
              },
            ],
            steps: [
              {
                reasoning: "'Desperation' — strong negative connotation sets bleak mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Hummed' — auditory imagery, weary monotony.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Cursor blinking like a metronome' — simile linking time pressure to routine.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Stared' — passive, trapped posture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Overall: claustrophobic, weary, oppressive mood.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Dour lexis and weary imagery create a claustrophobic, oppressive mood.",
            commonErrors: ["Identifying techniques without linking to mood."],
          },
        },
        {
          id: "cial-e-u1-wc-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which word carries the strongest negative connotation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "lean" },
              { id: "b", text: "skinny" },
              { id: "c", text: "thin" },
              { id: "d", text: "slender" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Connotation",
                statement: "'Skinny' implies unattractive thinness; 'slender' is positive.",
              },
            ],
            steps: [
              {
                reasoning: "'Skinny' is the most negative of the set.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** skinny",
            commonErrors: ["Ignoring connotation differences."],
          },
        },
        {
          id: "cial-e-u1-wc-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how a writer's word choice can control the reader's emotional response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word choice and emotion",
                statement: "Connotation, imagery and sound steer reader feeling.",
              },
            ],
            steps: [
              {
                reasoning: "Emotive lexis ('devastating', 'triumphant') directs feeling.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Sensory imagery makes emotion physical for the reader.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Sound (harsh vs soft) reinforces emotional register.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Neutral lexis creates distance; loaded lexis creates involvement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Repetition of key words reinforces the intended emotion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Coherent, well-evidenced explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Word choice, imagery, sound and repetition together steer the reader's emotion.",
            commonErrors: ["Saying 'the writer uses emotive words' without specifics."],
          },
        },
        {
          id: "cial-e-u1-wc-q13",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Word choice and imagery.",
          parts: [
            { label: "a", prompt: "Define 'connotation'.", marks: 1 },
            { label: "b", prompt: "Name two sensory imagery types.", marks: 2 },
            {
              label: "c",
              prompt:
                "Analyse the lexis in: 'The corridor swallowed its last echo; doors sighed shut behind her.'",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain how sound devices can shape mood.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Language analysis",
                statement: "Definition+identification+analysis+explanation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Associations beyond literal meaning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two: visual, auditory, tactile, olfactory, gustatory.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Both named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "'Swallowed', 'sighed' — personification gives the building life.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Eerie, oppressive mood; finality of 'last echo'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Effect linked to mood.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Alliteration/assonance identified as sound devices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Harsh consonants suit violence/agitation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Soft sibilants suit calm or menace.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Sound connected to mood clearly.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) associations (b) two senses (c) personification=oppression (d) sound→mood",
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
                descriptor: "Two named.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Lexis analysed.",
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
                descriptor: "Sound→mood clear.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "One point.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Identifying devices without explaining effects."],
          },
        },
        {
          id: "cial-e-u1-wc-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'denotation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The emotional associations of a word" },
              { id: "b", text: "The sound of a word" },
              { id: "c", text: "The literal dictionary meaning of a word" },
              { id: "d", text: "The origin of a word" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denotation",
                statement: "Literal meaning, as opposed to connotation.",
              },
            ],
            steps: [
              {
                reasoning: "Denotation = literal meaning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Literal dictionary meaning",
            commonErrors: ["Confusing denotation with connotation."],
          },
        },
        {
          id: "cial-e-u1-wc-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways sound devices can affect a reader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sound devices",
                statement: "Alliteration, assonance, rhythm shape mood and pace.",
              },
            ],
            steps: [
              {
                reasoning: "Harsh consonants create tension; soft sounds create calm.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rhythm can mimic action or lull the reader.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear link between sound and effect.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Sound reinforces mood and can control reading pace.",
            commonErrors: ["Naming devices without effect."],
          },
        },
        {
          id: "cial-e-u1-wc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the word choice in this extract.",
          extract: {
            title: "The Station",
            author: "Written for Akademik Space",
            text: "Rain stitched the platform to the sky. A solitary figure huddled beneath the timetable, counting seconds by the arrivals board's yellow blink.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Imagery and lexis",
                statement: "Quote, name technique, explain mood effect.",
              },
            ],
            steps: [
              {
                reasoning: "'Rain stitched' — metaphor binding sky and platform, claustrophobic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Huddled', 'solitary' — connotations of vulnerability and isolation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'Counting seconds' — anxiety conveyed through action.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Overall mood: bleak, anxious, lonely waiting.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Gloomy lexis and imagery create a bleak, anxious mood of lonely waiting.",
            commonErrors: ["Describing the scene without analysing language."],
          },
        },
      ],
    },
    {
      id: "cial-e-u1-tone-register",
      title: "Tone and register",
      skill: "Analyse how tone and register create meaning in unseen texts.",
      lesson: {
        sections: [
          {
            heading: "Identifying tone",
            body: "Tone is the writer's attitude — formal, ironic, nostalgic, critical, celebratory, ominous. It emerges from cumulative choices: word connotation, sentence length, punctuation, imagery. Look for shifts: a text may begin neutrally and turn hostile.",
          },
          {
            heading: "Register matching",
            body: "Register is the level of formality. Formal: 'furthermore', 'one must consider'. Informal: 'stuff', 'gonna'. The register signals intended audience and purpose — a scientific report differs from a personal blog. Inconsistency of register can be deliberate (for effect) or an error.",
          },
          {
            heading: "Tone shifts",
            body: "Track changes in tone across a passage. A shift often marks a turning point: 'but', 'yet', 'however' — or a change in imagery. Identifying where and why tone shifts is high-level analysis.",
          },
        ],
        keyFormulas: [
          {
            name: "Tone/register",
            statement:
              "Cumulative language choices=attitude; formality=audience signal.",
          },
        ],
        workedExample: {
          problem:
            "A text opens 'Dear valued customer' and ends 'Cheers, the team'.",
          solution:
            "Register shifts from formal to informal — perhaps deliberately friendly or carelessly inconsistent; analyse which reading fits the context.",
        },
      },
      questions: [
        {
          id: "cial-e-u1-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'register'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Level of formality in language" },
              { id: "b", text: "The text's length" },
              { id: "c", text: "The writer's opinion" },
              { id: "d", text: "The text's topic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Register",
                statement: "Level of formality suited to context and audience.",
              },
            ],
            steps: [
              {
                reasoning: "Register = formality level.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Level of formality",
            commonErrors: ["Confusing register with tone."],
          },
        },
        {
          id: "cial-e-u1-tr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract and analyse its tone.",
          extract: {
            title: "The Meeting",
            author: "Written for Akademik Space",
            text: "The chairman rapped the table twice. 'Order,' he said. The room settled. What followed was not discussion but verdict — each speaker measured, each pause loaded.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tone analysis",
                statement: "Word choice, imagery and rhythm reveal attitude.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'rapped', 'verdict', 'measured', 'loaded' — controlled, judicial tone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Short sentences and pauses create tension and formality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tone: tense, formal, adversarial.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Formal, tense and adversarial — language of judgement.",
            commonErrors: ["Describing events without analysing tone."],
          },
        },
        {
          id: "cial-e-u1-tr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might a writer shift tone within a single text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone shifts",
                statement:
                  "Deliberate shifts signal turning points, contrast or evolving attitude.",
              },
            ],
            steps: [
              {
                reasoning: "To mark a turning point in argument or narrative.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "To create contrast — e.g. calm to alarm.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "To reflect changing circumstances or the writer's evolving view.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accurate explanation of function.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Shifts mark turning points, create contrast, or reflect changing circumstances.",
            commonErrors: ["Assuming tone must be constant."],
          },
        },
        {
          id: "cial-e-u1-tr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Tone and register.",
          parts: [
            { label: "a", prompt: "Define register.", marks: 1 },
            {
              label: "b",
              prompt:
                "Identify the tone of the extract: 'The chairman rapped the table... verdict — each speaker measured, each pause loaded.'",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Give two features that create this tone.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain how register signals audience.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone/register",
                statement: "Definition+identification+features+audience link.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Level of formality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Tense, formal, adversarial/judgemental.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Supported by 'verdict', 'measured', 'loaded'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Clear tone.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Any two of: judicial lexis, short sentences, loaded pauses, imagery.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Features linked to tone.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Formality level signals intended reader.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Formal=official; informal=peer.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Clear link.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) formality (b) tense/formal (c) two features (d) register=audience",
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
                descriptor: "Tone justified.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Tone only.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Two features linked.",
                part: "c",
              },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Audience link clear.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Describing tone without textual evidence."],
          },
        },
        {
          id: "cial-e-u1-tr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which best describes an 'ironic' tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The writer is excited" },
              { id: "b", text: "The writer is angry" },
              {
                id: "c",
                text: "The writer says the opposite of what they mean",
              },
              { id: "d", text: "The writer is sad" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Irony",
                statement: "Saying or doing the opposite of what is meant.",
              },
            ],
            steps: [
              {
                reasoning: "Irony = gap between surface and intended meaning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Saying the opposite of what is meant",
            commonErrors: ["Confusing irony with simple criticism."],
          },
        },
        {
          id: "cial-e-u1-tr-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract and analyse its tone.",
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "My dear Aunt Mabel, I write with the deepest regret. The wedding, as you know, coincided with a rather pressing family crisis — nothing serious, just the small matter of our dog eating three kilograms of your birthday cake. Yours, with undying affection, Tom.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tone analysis",
                statement: "Word choice, hyperbole and register reveal attitude.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Deepest regret', 'pressing family crisis', 'small matter' — mock-formal exaggeration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Undercutting 'three kilograms of cake' — playful, self-mocking tone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tone: light-hearted, affectionate, gently ironic.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Playful, affectionate and mock-formal — humor through exaggerated apology.",
            commonErrors: ["Missing the humor and reading it as genuinely apologetic."],
          },
        },
        {
          id: "cial-e-u1-tr-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does 'register' signal about a text's intended audience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register and audience",
                statement: "Formality level reveals who the writer is addressing.",
              },
            ],
            steps: [
              {
                reasoning: "Formal register ('furthermore', 'one must') signals authority or officialdom.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Informal register ('stuff', 'gonna') signals peers or intimacy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Register helps the reader infer purpose and audience.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Register signals whether the audience is official, expert, or familiar.",
            commonErrors: ["Describing register without linking it to audience."],
          },
        },
        {
          id: "cial-e-u1-tr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is in the MOST formal register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It kinda worked out okay." },
              { id: "b", text: "The results were pretty good, honestly." },
              {
                id: "c",
                text: "The results indicate a statistically significant improvement.",
              },
              { id: "d", text: "Things got better, basically." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formal register",
                statement: "Technical vocabulary, complete sentences, no contractions.",
              },
            ],
            steps: [
              {
                reasoning: "'Statistically significant' is technical, formal lexis.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** The statistically significant sentence",
            commonErrors: ["Ignoring contractions and colloquialisms."],
          },
        },
        {
          id: "cial-e-u1-tr-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the extract and analyse the shift in tone.",
          extract: {
            title: "The Announcement",
            author: "Written for Akademik Space",
            text: "The council has determined that the proposed development cannot proceed. Residents had gathered in considerable numbers, their patience visibly thinning with each postponement. When the decision was finally announced, one woman — Mrs Osei, who had waited four hours in the rain — let out a laugh that was not quite a laugh at all.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone shift",
                statement: "Identify where tone changes and explain its effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Opening is bureaucratic and detached ('has determined', 'cannot proceed').",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Middle grows sympathetic ('patience visibly thinning', detail of waiting in rain).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Final image — laugh 'not quite a laugh' — bitter, ironic, defeated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shift humanises the issue and conveys the residents' frustration.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Tone moves from bureaucratic detachment to bitter, ironic sympathy.",
            commonErrors: ["Describing events instead of tracking the tone change."],
          },
        },
        {
          id: "cial-e-u1-tr-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A writer describes a rival's work as 'bold and original'. Which tone is most likely being conveyed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polite but dismissive irony" },
              { id: "b", text: "Genuine praise" },
              { id: "c", text: "Indifference" },
              { id: "d", text: "Open hostility" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tone through connotation",
                statement: "Positive words can carry dismissive connotation.",
              },
            ],
            steps: [
              {
                reasoning: "'Bold' and 'original' can imply eccentricity or pretension.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Polite but dismissive irony",
            commonErrors: ["Reading positive adjectives as purely positive."],
          },
        },
        {
          id: "cial-e-u1-tr-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a writer can create an ominous tone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Creating tone",
                statement: "Lexis, imagery, rhythm and punctuation combine to signal menace.",
              },
            ],
            steps: [
              {
                reasoning: "Dark imagery: shadows, cold, decay, approaching threat.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Slow, heavy rhythm and long sentences create suspense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lexis of threat or unease ('looming', 'hollow', 'watched').",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Coherent explanation linking choices to effect.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Ominous tone arises from threatening imagery, slow rhythm and uneasy lexis.",
            commonErrors: ["Listing devices without explaining their ominous effect."],
          },
        },
        {
          id: "cial-e-u1-tr-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'nostalgic' tone convey?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fear of the future" },
              { id: "b", text: "Longing for the past" },
              { id: "c", text: "Anger at the present" },
              { id: "d", text: "Neutral observation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nostalgic tone",
                statement: "A wistful longing for times gone by.",
              },
            ],
            steps: [
              {
                reasoning: "Nostalgia = fond remembrance of the past.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Longing for the past",
            commonErrors: ["Confusing nostalgia with sadness alone."],
          },
        },
        {
          id: "cial-e-u1-tr-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how tone and register work together in this extract.",
          extract: {
            title: "The Village",
            author: "Written for Akademik Space",
            text: "Dear Residents, pursuant to the recent review of the village green, it has been decided that the swings shall remain. We are aware that some parties expressed concerns regarding safety. However, the committee is of the view that the facility provides considerable benefit to the community. The swings will therefore be reinstated next Monday. Yours faithfully, The Parish Council.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone and register",
                statement: "Formal register + bureaucratic tone = detached authority.",
              },
            ],
            steps: [
              {
                reasoning: "Highly formal register throughout ('pursuant to', 'it has been decided', 'Yours faithfully').",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Passive constructions and committee voice distance the decision from individuals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tone: impersonal, procedural, slightly defensive ('some parties expressed concerns').",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The pair signals institutional authority and minimal accountability.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Well-evidenced, coherent analysis.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Formal, impersonal register and bureaucratic tone convey detached institutional authority.",
            commonErrors: ["Analysing tone and register separately without showing how they interact."],
          },
        },
        {
          id: "cial-e-u1-tr-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which tone best fits the phrase 'a most peculiar coincidence, don't you think?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Warmly approving" },
              { id: "b", text: "Genuinely surprised" },
              { id: "c", text: "Terrified" },
              { id: "d", text: "Sceptical and ironic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tone identification",
                statement: "Euphemistic phrasing often masks doubt or irony.",
              },
            ],
            steps: [
              {
                reasoning: "'Peculiar' + rhetorical 'don't you think' signals scepticism.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(d)** Sceptical and ironic",
            commonErrors: ["Taking 'don't you think' literally."],
          },
        },
        {
          id: "cial-e-u1-tr-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three factors that help a reader identify a text's tone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identifying tone",
                statement: "Multiple linguistic features combine to signal attitude.",
              },
            ],
            steps: [
              {
                reasoning: "Word connotation and emotive lexis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sentence length, rhythm and punctuation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Imagery choices and any tone shifts.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Lexis, sentence structure/punctuation, and imagery (plus tone shifts).",
            commonErrors: ["Listing only one factor."],
          },
        },
        {
          id: "cial-e-u1-tr-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Tone and register.",
          parts: [
            { label: "a", prompt: "Define 'tone'.", marks: 1 },
            {
              label: "b",
              prompt:
                "Identify the tone of the extract: 'Dear Residents, pursuant to the recent review... Yours faithfully, The Parish Council.'",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Give two features that create this tone.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain how register signals audience.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone/register",
                statement: "Definition+identification+features+audience link.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The writer's attitude toward subject and reader.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Bureaucratic, impersonal, formal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Supported by 'pursuant to', passive voice, 'Yours faithfully'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Clear tone.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Any two of: passive constructions, formal lexis, committee voice, formulaic closing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Features linked to tone.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Formality level signals intended reader.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Formal=official audience; informal=peer audience.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Clear link.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) attitude (b) bureaucratic/impersonal (c) two features (d) register=audience",
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
                descriptor: "Tone justified.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Tone only.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Two features linked.",
                part: "c",
              },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Audience link clear.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Describing tone without textual evidence."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u1-language-notes",
      title: "Analysing language — revision notes",
      summary: "Word choice, imagery, tone and register in unseen texts.",
      sections: [
        {
          heading: "Framework",
          body: "POET: Point, Evidence (quote), Explanation (technique→effect), Tone. Always quote then analyse — never analyse without evidence.",
        },
        {
          heading: "What to track",
          body: "Lexis (connotation, formality), imagery (senses), sound devices (alliteration, rhythm), sentence variety, tone shifts.",
        },
        {
          heading: "Tone vs register",
          body: "Tone = attitude (ironic, nostalgic, critical). Register = formality level (formal to informal). Both signal audience and purpose.",
        },
        {
          heading: "Exam checklist",
          body: "Did I quote every analytical point? Did I name the technique? Did I explain the effect on reader/meaning? Did I track tone shifts?",
        },
      ],
    },
  ],
};
