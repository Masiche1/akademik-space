import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mll3-u2-lesson-2-2",
  code: "2-2",
  title: "Tone, Mood and Atmosphere",
  goal: "I CAN analyse how writers create tone and mood through word choice, imagery and pacing, and explain their effect on the reader.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Tone", definition: "The writer's attitude toward the subject — serious, playful, bitter, admiring." },
    { term: "Mood", definition: "The emotional atmosphere the text creates in the reader." },
    { term: "Atmosphere", definition: "The overall feeling or 'air' of a text — tense, cosy, eerie." },
    { term: "Diction", definition: "The writer's choice of words — formal or informal, simple or complex, positive or negative." },
    { term: "Connotation", definition: "The feelings or associations a word carries beyond its dictionary meaning." },
  ],
  concepts: [
    {
      id: "mll3-u2-tone-mood-atmosphere",
      title: "Creating tone and mood",
      skill: "Analyse how diction, imagery and pacing create tone and mood.",
      lesson: {
        sections: [
          {
            heading: "Tone vs mood vs atmosphere",
            body: "**Tone** is the writer's **attitude** — are they being ironic, angry, tender? **Mood** is the **reader's feeling** — what emotion does the text create? **Atmosphere** is the overall **air** of the text — the world it creates. They overlap but aren't identical: a writer's ironic tone might create a tense atmosphere.",
          },
          {
            heading: "Diction and connotation",
            body: "**Diction** is word choice. Words carry **connotation** — 'slim' vs 'skinny', 'frugal' vs 'stingy', 'home' vs 'house'. The same fact can feel positive or negative depending on the words chosen. 'The politician spoke' is neutral; 'The politician lectured' is critical; 'The politician inspired' is admiring.",
          },
          {
            heading: "Pacing and structure",
            body: "**Pacing** — the speed of the text — affects mood. Short, clipped sentences create tension ('He ran. He didn't look back.'). Long, flowing sentences create calm or dreaminess. Repetition creates urgency or emphasis. The **rhythm** of prose is as important as poetry's.",
          },
        ],
        keyFormulas: [
          { name: "Tone/mood analysis", statement: "Tone = writer's attitude; Mood = reader's feeling; Diction + imagery + pacing create both." },
        ],
        workedExample: {
          problem: "How does 'The old house groaned in the wind' create atmosphere?",
          solution: "'Groaned' (personification) gives the house pain; 'old' and 'wind' suggest decay and harshness — creating an eerie, neglected atmosphere.",
        },
      },
      questions: [
        {
          id: "mll3-u2-tone-mood-atmosphere-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'tone' in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The volume of the writer's voice" },
              { id: "b", text: "The writer's attitude toward the subject" },
              { id: "c", text: "The punctuation used" },
              { id: "d", text: "The length of sentences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tone", statement: "Tone is the writer's attitude toward the subject." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): tone = writer's attitude — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The writer's attitude toward the subject",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "Version A: 'The politician answered questions confidently.'\n\nVersion B: 'The politician dodged questions and twisted the truth.'",
          },
          stem: "How does diction change the tone between these versions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Diction and tone", statement: "Word choice ('answered' vs 'dodged', 'confidently' vs 'twisted') determines tone." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Version A uses positive words — 'answered', 'confidently' — creating an admiring tone.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Version B uses negative words — 'dodged', 'twisted the truth' — creating a critical, distrustful tone.", evidence: "dodged ... twisted the truth", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Version A is admiring ('answered confidently'); Version B is critical ('dodged', 'twisted') — same event, different tone through diction.",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Forest",
            author: "Written for Akademik Space",
            text: "The forest was quiet. Too quiet. The trees leaned closer, as if listening. Somewhere, a branch snapped — sharp, sudden, final.",
          },
          stem: "Explain how the writer creates a tense atmosphere. Refer to at least two techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Atmosphere techniques", statement: "Personification, pacing and sensory detail create mood." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'The trees leaned closer, as if listening' — personification makes the forest seem alive and watchful — threatening.", evidence: "as if listening", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'Too quiet' — the repetition and short sentence create unease; silence itself becomes suspicious.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'sharp, sudden, final' — the clipped adjectives and 'final' suggest danger or death, building suspense.", evidence: "sharp, sudden, final", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Personification ('trees leaned... listening'), uneasy silence ('Too quiet'), and ominous adjectives ('sharp, sudden, final') create a tense, threatening atmosphere.",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Morning After",
            author: "Written for Akademik Space",
            text: "She woke to silence. Not the comfortable silence of sleep, but the hollow quiet of an empty house. The kitchen smelled of cold coffee and old newspapers. She made a cup anyway, wrapping her hands around the warmth like it was something to hold onto.",
          },
          parts: [
            { label: "a", prompt: "Describe the mood of this passage.", marks: 1 },
            { label: "b", prompt: "Identify two techniques that create this mood.", marks: 2 },
            { label: "c", prompt: "Explain the effect of 'like it was something to hold onto'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mood through detail", statement: "Sensory details and similes create emotional atmosphere." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): mood — lonely, melancholic, hollow; a quiet grief or emptiness.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'hollow quiet of an empty house' — personification/description creates emptiness.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'cold coffee and old newspapers' — sensory details of neglect reinforce loneliness.", evidence: "cold coffee and old newspapers", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the simile suggests she's holding onto warmth/comfort because there's nothing else — loneliness makes small comforts precious.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'something to hold onto' implies she's barely coping — the coffee is emotional lifeline, not just a drink.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Lonely/melancholy. (b) 'Hollow quiet', sensory details of neglect. (c) The simile shows she's clinging to warmth — loneliness makes small comforts precious.",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between tone and mood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tone is the writer's attitude; mood is the reader's feeling" },
              { id: "b", text: "Tone is the plot; mood is the setting" },
              { id: "c", text: "They mean the same thing" },
              { id: "d", text: "Tone is in poems only; mood is in novels only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tone vs mood", statement: "Tone = writer's attitude; mood = reader's feeling." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): tone is the writer's attitude, mood is the reader's feeling — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Tone is the writer's attitude; mood is the reader's feeling",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word has a negative connotation: 'slim', 'skinny', or 'slender'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "slim" },
              { id: "b", text: "skinny" },
              { id: "c", text: "slender" },
              { id: "d", text: "All are equally positive" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Connotation", statement: "Words carry feelings beyond dictionary meaning — 'skinny' is negative where 'slender' is positive." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'skinny' has negative connotations (too thin, unattractive); 'slim' and 'slender' are positive — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** skinny",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Sentences",
            author: "Written for Akademik Space",
            text: "Version A: 'She answered the question calmly.'\nVersion B: 'She snapped back at the question.'",
          },
          stem: "How does diction change the tone between these versions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Version A is calm; Version B is aggressive" },
              { id: "b", text: "Both are equally calm" },
              { id: "c", text: "Version B is more polite" },
              { id: "d", text: "There is no difference" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Diction and tone", statement: "Word choice determines tone — 'calmly' vs 'snapped back'." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'calmly' is neutral/positive; 'snapped back' is aggressive — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Version A is calm; Version B is aggressive",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Beach",
            author: "Written for Akademik Space",
            text: "The beach stretched empty under a grey sky. Waves slapped the sand with cold indifference. A single seagull hung motionless, watching.",
          },
          stem: "What mood does this passage create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Joyful and lively" },
              { id: "b", text: "Lonely, bleak and desolate — created by empty imagery, the grey sky and the motionless, watching seagull" },
              { id: "c", text: "Angry and aggressive" },
              { id: "d", text: "Romantic and warm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mood through detail", statement: "Desolate imagery, colour and personification create a lonely, bleak mood." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'empty', 'grey sky' and the lone watching seagull create a lonely, bleak mood — (b).", evidence: "cold indifference", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Lonely, bleak and desolate — created by empty imagery, the grey sky and the motionless seagull",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "A 'masterpiece', apparently. The film drags for two hours, the dialogue is wooden, and the ending arrives like an afterthought. Truly, cinema's finest hour.",
          },
          stem: "Analyse the tone of this review. How does it serve the reviewer's purpose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ironic tone", statement: "Saying the opposite of what you mean creates sarcasm — praise that actually criticises." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the tone is ironic/sarcastic — 'masterpiece', 'finest hour' praise a film the reviewer clearly panned.", evidence: "drags for two hours ... Truly, cinema's finest hour", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the contradiction between praise and criticism signals irony — the writer doesn't mean the praise.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the purpose is entertainment through wit — sarcasm is funnier and more cutting than direct criticism; it also signals the reviewer isn't fooled.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ironic/sarcastic tone — 'masterpiece' and 'finest hour' are fake praise for a film described as boring; sarcasm entertains and criticises at once.",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Waiting Room",
            author: "Written for Akademik Space",
            text: "The waiting room hummed with tired voices. Fluorescent lights buzzed overhead, flat and relentless. A man in a grey coat stared at the floor, turning a leaflet over and over, reading the same line.",
          },
          parts: [
            { label: "a", prompt: "Describe the mood and atmosphere of this scene.", marks: 1 },
            { label: "b", prompt: "Identify two techniques that create this effect.", marks: 2 },
            { label: "c", prompt: "Explain the effect of 'turning a leaflet over and over, reading the same line'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Atmosphere through detail", statement: "Sensory details (buzzing lights, repetitive actions) create oppressive, anxious atmosphere." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): mood — anxious, weary, oppressive; a place of waiting and dull endurance.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'hummed with tired voices' — sound imagery of exhaustion; 'flat and relentless' describes the lights' oppressive quality.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'grey coat', 'stared at the floor' — colour and posture convey dejection.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the repetitive action shows anxiety and boredom — he's too worried or numb to absorb anything.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'reading the same line' suggests his mind is elsewhere — waiting has emptied him of attention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Anxious, weary, oppressive. (b) Sound imagery ('hummed', 'buzzed'), flat lighting, dejected posture. (c) Repetition shows anxiety/boredom — his mind has checked out while his body waits.",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Three Descriptions",
            author: "Written for Akademik Space",
            text: "A: 'The garden was lovely.'\nB: 'The garden danced with colour.'\nC: 'The garden had flowers and a bench.'",
          },
          stem: "How many of these descriptions use figurative or emotive language to create mood? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mood through language", statement: "A and B use emotive/figurative language; C is flat, literal description." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'lovely' (emotive) and 'danced with colour' (personification) create mood; C is literal — 2 descriptions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Short, clipped sentences like 'He ran. He didn't look back. The door slammed.' most likely create...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A calm, relaxed mood" },
              { id: "b", text: "Tension and urgency" },
              { id: "c", text: "A humorous tone" },
              { id: "d", text: "No effect on mood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing and mood", statement: "Short, clipped sentences create urgency and tension." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): clipped sentences speed the pace and create tension — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Tension and urgency",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Tones",
            author: "Written for Akademik Space",
            text: "Version A: 'The meeting was productive and everyone left satisfied.'\nVersion B: 'The meeting dragged on forever and nothing was decided.'",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many positive words appear in Version A?", marks: 1 },
            { label: "b", prompt: "How many negative words appear in Version B?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Diction and tone", statement: "Positive vs negative word choice creates opposite tones about the same event." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'productive', 'satisfied' — 2 positive words.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'dragged', 'forever', 'nothing' — 3 negative words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 (b) 3",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might the same event feel joyful in one text and tragic in another?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because events have fixed meanings" },
              { id: "b", text: "Because diction, imagery and pacing shape the reader's emotional response" },
              { id: "c", text: "Because readers are always wrong" },
              { id: "d", text: "Because the events are different" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Language shapes feeling", statement: "The same event can feel different depending on the writer's word and image choices." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): diction, imagery and pacing determine the emotional response — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because diction, imagery and pacing shape the reader's emotional response",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why might a writer choose 'home' instead of 'house'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it is shorter" },
              { id: "b", text: "Because 'home' connotes warmth and belonging" },
              { id: "c", text: "Because it is more formal" },
              { id: "d", text: "Because 'house' is a spelling mistake" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Connotation", statement: "'Home' carries warmth and belonging; 'house' is neutral and physical." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'home' connotes warmth and belonging — the writer wants emotional tone — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because 'home' connotes warmth and belonging",
          },
        },
        {
          id: "mll3-u2-tone-mood-atmosphere-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Argument",
            author: "Written for Akademik Space",
            text: "She didn't shout. She didn't need to. Her voice was quiet, precise, each word placed like a chess piece. By the time she finished, the room was silent — not the comfortable silence of agreement, but the hollow quiet of people who had lost the argument and knew it.",
          },
          parts: [
            { label: "a", prompt: "Describe the tone of this passage.", marks: 1 },
            { label: "b", prompt: "Identify two techniques that create this tone.", marks: 2 },
            { label: "c", prompt: "Explain the effect of 'not the comfortable silence of agreement, but the hollow quiet'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone through contrast", statement: "Quiet precision can be more powerful than shouting; contrasts reveal the mood." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): tone is controlled, commanding, quietly triumphant — power through restraint.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'didn't shout... didn't need to' — understatement showing effortless dominance; 'each word placed like a chess piece' — precise, strategic metaphor.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'hollow quiet' — personification/description of silence as empty defeat.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the contrast distinguishes two silences — agreement (warm, shared) vs defeat (hollow, isolated) — the 'but' reveals the room has lost, not agreed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): this shows tone is about attitude — her quiet control makes the opposition's silence feel like surrender.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Controlled, commanding. (b) Understatement ('didn't need to'), chess metaphor, 'hollow quiet'. (c) The contrast shows the silence is defeat, not agreement — quiet power wins.",
          },
        },
      ],
    },
    {
      id: "mll3-u2-tone-purpose",
      title: "Tone and purpose",
      skill: "Explain how a writer's tone serves their purpose and affects the reader's response.",
      lesson: {
        sections: [
          {
            heading: "Tone serves purpose",
            body: "A writer's **tone** is chosen for a **purpose**. A **serious** tone suits bad news; a **playful** tone suits a children's book; an **ironic** tone suits satire. The tone tells you how to **feel** about the content.",
          },
          {
            heading: "Tone and reliability",
            body: "Tone affects how much we **trust** a text. A balanced, measured tone seems more credible than an angry or gushing one. But tone can also **manipulate** — a sympathetic tone can make us accept facts without questioning.",
          },
          {
            heading: "Detecting tone",
            body: "Ask: is the writer being **sincere**, **ironic**, **bitter**, **admiring**, **objective**? Look at word choice, sentence length, punctuation (!) and any humor or sarcasm. 'Great,' she said (flatly) is very different from 'Great!' she said (enthusiastically).",
          },
        ],
        keyFormulas: [
          { name: "Tone and purpose", statement: "Tone is chosen for purpose; it shapes the reader's emotional response and trust." },
        ],
        workedExample: {
          problem: "A review says 'What a masterpiece — truly the best film of the decade!' but describes only flaws. What tone is this?",
          solution: "Ironic/sarcastic tone — the praise is fake; the writer actually thinks it's bad.",
        },
      },
      questions: [
        {
          id: "mll3-u2-tone-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A writer uses a serious, respectful tone most likely because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They want to make you laugh" },
              { id: "b", text: "The subject is important or sensitive" },
              { id: "c", text: "They are being sarcastic" },
              { id: "d", text: "The text is very short" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tone and purpose", statement: "Tone matches subject and purpose — serious for important topics." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): serious tone suits important/sensitive subjects — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The subject is important or sensitive",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "'A triumph of modern cinema,' the reviewer wrote, before listing twelve reasons the film was boring.",
          },
          stem: "What is the tone of this review, and how can you tell?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Irony", statement: "Saying the opposite of what you mean creates ironic tone." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the tone is ironic/sarcastic — 'triumph' is praise, but 'twelve reasons the film was boring' reveals the opposite.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the contradiction between praise and criticism signals irony — the writer doesn't really think it's a triumph.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ironic/sarcastic — 'triumph' contradicts 'twelve reasons it was boring'; the praise is fake.",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Obituary",
            author: "Written for Akademik Space",
            text: "She was not a woman who asked for much. She asked for nothing, in fact — and gave everything. Her garden was her cathedral, her neighbors her congregation. She is missed by all who knew her.",
          },
          stem: "Analyse the tone of this obituary and explain how it serves its purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone in obituary", statement: "Obituaries use reverent, admiring tone to honour the deceased." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): tone is reverent and admiring — 'gave everything', 'her cathedral', 'her congregation' elevate her.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'not a woman who asked for much... asked for nothing' uses understatement to highlight her generosity.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the religious imagery (cathedral, congregation) frames her life as sacred — fitting for a tribute.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reverent, admiring tone — religious imagery and understatement honour her generosity; appropriate for an obituary's purpose of tribute.",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Town Meeting",
            author: "Written for Akademik Space",
            text: "The mayor strode to the podium, face set. 'We will not be bullied by outsiders,' she declared, voice ringing. 'This town belongs to us.' Behind her, residents nodded — but a few kept their arms crossed.",
          },
          parts: [
            { label: "a", prompt: "Describe the mayor's tone.", marks: 1 },
            { label: "b", prompt: "Identify two language choices that create this tone.", marks: 2 },
            { label: "c", prompt: "Explain how the final sentence complicates the tone.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone shifts", statement: "Tone can be undercut by details that reveal complexity." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): tone is defiant, confrontational, us-vs-them — 'will not be bullied', 'belongs to us'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'bullied' and 'outsiders' create an enemy; 'voice ringing', 'strode' show force.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'We will not' — strong negative declaration, absolutist language.", evidence: "We will not be bullied", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'arms crossed' suggests resistance or skepticism — not everyone is united behind her defiance.", evidence: "arms crossed", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the detail undercuts her confident tone — the 'we' isn't unanimous.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Defiant, confrontational. (b) 'Bullied', 'outsiders', 'voice ringing', 'We will not'. (c) 'Arms crossed' reveals some residents disagree — the unity she claims isn't real.",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does a writer choose their tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To match the subject and achieve their purpose" },
              { id: "b", text: "Because it's required by law" },
              { id: "c", text: "To make the text longer" },
              { id: "d", text: "Because all writers have the same tone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tone and purpose", statement: "Tone is chosen to suit the subject and serve the writer's purpose." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): tone matches subject and purpose — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To match the subject and achieve their purpose",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A children's book about a dragon uses a playful, whimsical tone most likely because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Children only read long books" },
              { id: "b", text: "The audience is young and the purpose is entertainment" },
              { id: "c", text: "Dragons require serious tones" },
              { id: "d", text: "Playful tones are easier to write" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tone and audience", statement: "Tone suits the audience — playful for children, serious for important topics." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): playful tone suits young readers and entertainment purpose — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The audience is young and the purpose is entertainment",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Notice",
            author: "Written for Akademik Space",
            text: "Please be advised that the school will be closed on Friday due to unforeseen circumstances. We apologise for any inconvenience.",
          },
          stem: "What tone does this notice use, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Playful — to entertain" },
              { id: "b", text: "Formal and apologetic — to inform politely about bad news" },
              { id: "c", text: "Aggressive — to frighten" },
              { id: "d", text: "No tone — notices are neutral" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Formal tone", statement: "Notices about closures use formal, apologetic language to deliver bad news politely." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'Please be advised', 'unforeseen circumstances', 'We apologise' — formal and apologetic — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Formal and apologetic — to inform politely about bad news",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Letters",
            author: "Written for Akademik Space",
            text: "Version A: 'I am writing to request an extension on my essay deadline.'\nVersion B: 'Give me more time on this essay — I'm drowning here!'",
          },
          stem: "Which version is more likely to win the extension, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Version B — it is more emotional" },
              { id: "b", text: "Version A — its formal, respectful tone shows maturity and suits a request to authority" },
              { id: "c", text: "Neither — tone doesn't matter" },
              { id: "d", text: "Both equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone and persuasion", statement: "Formal tone is respectful; informal tone is urgent — both can persuade differently." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Version A's formal, respectful tone is more likely to be granted by authority; B's informality may seem unprofessional — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Version A — its formal, respectful tone suits a request to authority",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q9",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Tribute",
            author: "Written for Akademik Space",
            text: "He was not a man of many words. He spoke rarely, listened always, and when he did speak, people leaned in. His silence was not empty — it was full of everything he chose not to say.",
          },
          stem: "Analyse the tone of this tribute and explain how it honours the subject.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reverent tone", statement: "Tributes use admiring, measured language to honour the deceased." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the tone is admiring and respectful — 'people leaned in' shows his rare words had power.", evidence: "people leaned in", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'His silence was not empty — it was full' uses paradox/understatement to reframe quietness as depth, not absence.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the tone honours him by treating his silence as meaningful — it suggests his presence was felt even when he said nothing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Admiring, reverent tone — it honours him by reframing silence as depth ('full of everything he chose not to say') and rare words as powerful.",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this product review.",
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "I was sceptical. The reviews were glowing, the marketing relentless. But after a month with the Aurora headphones, I'm a convert. The noise cancellation is remarkable — my commute is now silent. The only flaw? The ear cushions could be softer.",
          },
          parts: [
            { label: "a", prompt: "Describe the reviewer's tone.", marks: 1 },
            { label: "b", prompt: "Identify two language choices that create this tone.", marks: 2 },
            { label: "c", prompt: "How does acknowledging a flaw strengthen the review's credibility?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Credible tone", statement: "Reviews that admit flaws seem more trustworthy than unqualified praise." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): tone is measured, credible, mildly enthusiastic — converted but honest.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'I was sceptical' and 'I'm a convert' — the journey from doubt to approval feels earned.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'The only flaw?' — balanced judgement; specific detail ('ear cushions could be softer') shows genuine use.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): admitting a flaw shows the reviewer isn't just promoting — they actually tested and noticed details.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it makes the praise more believable — if they found one flaw, the rest of the praise seems honest too.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Measured, credible, converted. (b) 'Sceptical → convert', 'only flaw' balance. (c) Admitting a flaw proves genuine testing and makes praise believable.",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q11",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Three Texts",
            author: "Written for Akademik Space",
            text: "Text 1: a joke told to friends\nText 2: a eulogy at a funeral\nText 3: a warning label on medicine",
          },
          stem: "How many of these three texts would most likely use a serious, respectful tone? Enter a number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tone and purpose", statement: "Eulogy and warning need serious/respectful tones; jokes need playful ones." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): eulogy and warning label need serious tones — 2 texts; the joke needs playful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A writer uses sarcasm in a review. What might this suggest about their true opinion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They loved it" },
              { id: "b", text: "They actually dislike it — sarcasm says the opposite of what they mean" },
              { id: "c", text: "They are confused" },
              { id: "d", text: "They have no opinion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Irony", statement: "Sarcasm means the opposite of what is said — praise may signal criticism." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): sarcasm inverts meaning — 'praise' likely means dislike — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They actually dislike it — sarcasm says the opposite of what they mean",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Notices",
            author: "Written for Akademik Space",
            text: "Notice A: 'The library will be closed Monday for maintenance.'\nNotice B: 'Guess what — no library on Monday! Maintenance, you know how it is.'",
          },
          stem: "Answer both parts with numbers only.",
          parts: [
            { label: "a", prompt: "How many notices use a formal tone?", marks: 1 },
            { label: "b", prompt: "How many use an informal tone?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Formal vs informal tone", statement: "A is formal; B is casual with a playful, slightly sarcastic edge." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Notice A is formal — 1.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Notice B is informal ('Guess what', 'you know how it is') — 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 (b) 1",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How can tone affect how much we trust a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A calm, measured tone seems more credible than an angry or gushing one" },
              { id: "b", text: "Tone has no effect on trust" },
              { id: "c", text: "Louder tones are always more trustworthy" },
              { id: "d", text: "Only short texts are trustworthy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tone and reliability", statement: "Measured tones seem credible; extreme tones can seem biased or manipulative." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): calm, measured tone seems more credible — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A calm, measured tone seems more credible than an angry or gushing one",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does a charity use a sad, emotional tone in its fundraising letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make readers feel sympathy and want to donate" },
              { id: "b", text: "To confuse donors" },
              { id: "c", text: "Because it's required by law" },
              { id: "d", text: "To make the letter longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotive persuasion", statement: "Sad tones arouse sympathy and donations but can feel manipulative if overdone." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the sad tone arouses sympathy — it makes readers feel the beneficiaries' suffering and want to help — (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** To make readers feel sympathy and want to donate",
          },
        },
        {
          id: "mll3-u2-tone-purpose-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this opening to a speech.",
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "Look around you. These walls have heard a thousand goodbyes and a thousand hellos. They have held our laughter, our tears, our first steps onto a stage and our last. Today, they will hold one more thing — our gratitude.",
          },
          parts: [
            { label: "a", prompt: "Describe the speaker's tone.", marks: 1 },
            { label: "b", prompt: "Identify two techniques that create this tone.", marks: 2 },
            { label: "c", prompt: "How does the tone prepare the audience for what follows?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Emotional speechcraft", statement: "Speeches use imagery and direct address to build emotional momentum." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): tone is nostalgic, warm, reverent — building toward gratitude.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'Look around you' — direct address; 'held our laughter, our tears' — parallel structure/personification of walls.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'a thousand goodbyes and a thousand hellos' — repetition creating emotional weight and shared history.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the nostalgic tone makes the audience feel the building's history — they arrive emotionally ready to feel gratitude.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'our gratitude' (inclusive 'our') unites speaker and audience — the tone builds shared emotion before the message.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Nostalgic, warm, reverent. (b) Direct address, parallel structure, inclusive 'our'. (c) It makes the audience feel shared history — emotionally primed for gratitude.",
          },
        },
      ],
    },
  ],
};
