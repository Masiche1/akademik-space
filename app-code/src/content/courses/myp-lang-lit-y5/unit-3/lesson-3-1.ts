import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mll5-u3-lesson-3-1",
  code: "3-1",
  title: "Sophisticated Writing Techniques",
  goal: "I CAN use advanced writing techniques — figurative language, varied syntax, controlled voice — to produce sophisticated texts.",
  standards: [
    "MYP Language and Literature",
    "Criterion C: Producing text",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Figurative language", definition: "Non-literal language — metaphor, simile, personification, hyperbole." },
    { term: "Syntax", definition: "Sentence structure — arrangement of words and clauses." },
    { term: "Diction", definition: "Word choice — formal/informal, precise/vague, concrete/abstract." },
    { term: "Voice", definition: "The distinctive quality of a writer's style — personality in writing." },
    { term: "Rhetorical device", definition: "Techniques like repetition, parallelism, antithesis for persuasive effect." },
  ],
  concepts: [
    {
      id: "mll5-u3-writing-techniques",
      title: "Advanced techniques",
      skill: "Apply figurative language, syntax variety and rhetorical devices effectively.",
      lesson: {
        sections: [
          {
            heading: "Beyond basic description",
            body: "Sophisticated writing uses **figurative language**: metaphor ('time is a thief'), simile ('brave as a lion'), personification ('the wind whispered'), hyperbole ('I've told you a million times'). These create vivid images and emotional resonance.",
          },
          {
            heading: "Syntax as style",
            body: "**Syntax** = sentence structure. Short sentences create urgency; long sentences build complexity; fragments create drama; parallel structure creates rhythm ('I came, I saw, I conquered'). **Varied syntax** prevents monotony and controls pace.",
          },
          {
            heading: "Voice and diction",
            body: "**Diction** = word choice. Precise words ('stroll' vs 'walk' vs 'amble') create nuance. **Voice** = your distinctive style — consistent tone, word preferences, rhythm. Great writers have recognizable voices like fingerprints.",
          },
        ],
        keyFormulas: [
          { name: "Sophisticated writing", statement: "Figurative + Varied syntax + Precise diction + Consistent voice = style." },
        ],
        workedExample: {
          problem: "Improve: 'The city was big and busy.'",
          solution: "'The city pulsed with life — a thousand heartbeats of traffic, neon and hunger.' — figurative language + varied syntax + precise diction.",
        },
      },
      questions: [
        {
          id: "mll5-u3-writing-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between metaphor and simile?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "Metaphor states directly; simile uses 'like' or 'as'" },
              { id: "c", text: "Simile is always better" },
              { id: "d", text: "Metaphor is only for poems" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Metaphor vs simile", statement: "Metaphor = direct; simile = like/as comparison." }],
            steps: [{ reasoning: "Criterion D (Using language): metaphor direct, simile uses like/as — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Metaphor states directly; simile uses 'like' or 'as'",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "Version A: 'The old house was scary. It was dark and empty.\n\nVersion B: 'The house crouched on the hill, its windows like dead eyes. Shadows pooled in the corners where dust had settled like snow.'",
          },
          stem: "Compare the figurative language — how does Version B create atmosphere?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Figurative language", statement: "Metaphor, simile, personification create vivid atmosphere." }],
            steps: [
              { reasoning: "Criterion D (Using language): B uses personification ('house crouched'), simile ('windows like dead eyes', 'dust like snow').", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): 'dead eyes' creates unease; 'crouched' suggests menace — atmosphere built through imagery.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "B uses personification + simile to create creepy atmosphere; A is flat and literal.",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Passage",
            author: "Written for Akademik Space",
            text: "'The morning came. Gray light filtered through the curtains. She lay still, listening to the house settle — pipes ticking, floors creaking, the refrigerator humming its electric lullaby.'",
          },
          stem: "Analyse the syntax and figurative language — how do they work together?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Syntax + imagery", statement: "Short sentences create stillness; long sentences with imagery create immersion." }],
            steps: [
              { reasoning: "Criterion D (Using language): 'The morning came.' — short sentence creates pause, stillness.", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): long final sentence builds rhythm — 'pipes ticking, floors creaking' — accumulating sensory detail.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'electric lullaby' — personification creates coziness; syntax + imagery combine for immersive quiet.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Short sentence = pause; long sentence accumulates detail; 'lullaby' personifies — syntax + imagery create immersive calm.",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Rewrite 'She was very tired' using figurative language.", marks: 2 },
            { label: "b", prompt: "Explain what your version adds that the original lacks.", marks: 2 },
            { label: "c", prompt: "Write a sentence using parallel structure for emphasis.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Figurative enhancement", statement: "Figurative language adds vividness and emotional depth." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): figurative rewrite — e.g. 'Her bones ached with exhaustion; sleep called to her like a distant shore.'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): uses metaphor/simile/personification appropriately.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): adds sensory detail, emotion, imagery — 'very tired' is abstract, figurative is concrete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): creates vivid experience vs flat statement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): parallel structure — e.g. 'She came, she saw, she conquered.' or 'We rise, we fall, we rise again.'", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Fig. version adds imagery/emotion. (b) Abstract→concrete, vivid experience. (c) Parallel structure for rhythm/emphasis.",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is personification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Giving human qualities to non-human things" },
              { id: "b", text: "Comparing two things using 'like'" },
              { id: "c", text: "Exaggerating for effect" },
              { id: "d", text: "Repeating words" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Personification", statement: "Human qualities given to non-human things." }],
            steps: [{ reasoning: "Criterion D (Using language): personification = human qualities to non-human — (a).", marks: 1, markCode: "D" }],
            finalAnswer: "**(a)** Giving human qualities to non-human things",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Line",
            author: "Written for Akademik Space",
            text: "'Time is a thief, and the night whispered secrets to the walls.'",
          },
          stem: "How many figurative devices appear in this line?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Figurative language", statement: "Metaphor and personification create imagery." }],
            steps: [{ reasoning: "Criterion D (Using language): 'time is a thief' = metaphor; 'night whispered' = personification — 2 devices.", marks: 1, markCode: "D" }],
            finalAnswer: "2",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Sentence",
            author: "Written for Akademik Space",
            text: "'I've told you a million times to stop slamming the door.'",
          },
          stem: "Which figurative device is used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Hyperbole — 'a million times' exaggerates for emphasis" },
              { id: "c", text: "Metaphor" },
              { id: "d", text: "Onomatopoeia" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Hyperbole", statement: "Exaggeration for emphasis." }],
            steps: [{ reasoning: "Criterion D (Using language): 'a million times' = exaggeration — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Hyperbole — 'a million times' exaggerates for emphasis",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Versions",
            author: "Written for Akademik Space",
            text: "Version A: 'The exam was hard.'\n\nVersion B: 'The exam was a mountain I had to climb.'",
          },
          stem: "Which version uses figurative language, and what does it add?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Version A — it is clearer" },
              { id: "b", text: "Version B — the metaphor 'mountain to climb' adds difficulty, effort and scale" },
              { id: "c", text: "Both use figurative language equally" },
              { id: "d", text: "Neither uses figurative language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Figurative enhancement", statement: "Metaphor adds vividness and emotional weight." }],
            steps: [{ reasoning: "Criterion D (Using language): B uses metaphor — 'mountain', 'climb' — adds scale and struggle — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Version B — the metaphor adds difficulty, effort and scale",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Action",
            author: "Written for Akademik Space",
            text: "'The door flew open. She ran. The hallway stretched ahead, empty and white.'",
          },
          stem: "What effect does this syntax create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calm reflection" },
              { id: "b", text: "Urgency and momentum — short sentences accelerate pace" },
              { id: "c", text: "Boredom" },
              { id: "d", text: "Formal distance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Syntax and pace", statement: "Short sentences create urgency." }],
            steps: [{ reasoning: "Criterion D (Using language): 'flew', 'ran' + short sentences = urgency — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Urgency and momentum — short sentences accelerate pace",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Passage",
            author: "Written for Akademik Space",
            text: "The rain fell. It tapped the window. She watched it go.",
          },
          stem: "How many sentences appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Syntax counting", statement: "Each full stop marks a sentence." }],
            steps: [{ reasoning: "Criterion D (Using language): three sentences — 'The rain fell.', 'It tapped the window.', 'She watched it go.' — 3.", marks: 1, markCode: "D" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Passage",
            author: "Written for Akademik Space",
            text: "'He waited. The minutes stretched like taffy. Somewhere, a clock coughed.'",
          },
          stem: "Analyse the syntax and figurative language working together.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Syntax + imagery", statement: "Short sentences mark time; figurative language stretches it." }],
            steps: [
              { reasoning: "Criterion D (Using language): 'He waited.' — single-word sentence creates suspended time.", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): 'minutes stretched like taffy' — simile personifies time as slow, elastic — waiting made physical.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'clock coughed' — personification adds weariness; syntax (short sentences) mirrors the slow anxious waiting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Short sentences suspend time; simile + personification stretch and weary it — syntax mirrors the waiting.",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is parallelism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of poem" },
              { id: "b", text: "Using similar grammatical structure for rhythm and emphasis" },
              { id: "c", text: "Writing without punctuation" },
              { id: "d", text: "Repeating the same word only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Parallelism", statement: "Similar grammatical structure for rhythm/emphasis." }],
            steps: [{ reasoning: "Criterion D (Using language): parallelism = parallel grammatical structure — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Using similar grammatical structure for rhythm and emphasis",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Improve 'The city was busy' using figurative language.", marks: 2 },
            { label: "b", prompt: "Explain what your version adds.", marks: 2 },
            { label: "c", prompt: "Write one sentence using parallelism for emphasis.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Figurative enhancement", statement: "Figurative language transforms flat statements into vivid images." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): figurative version — e.g. 'The city roared like a living thing.'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): uses metaphor/simile appropriately.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): 'roared' personifies the city — adds energy, sound, life vs flat 'busy'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): transforms abstract description into sensory experience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): parallelism — e.g. 'We came, we saw, we built.' or 'It was hot, it was loud, it was ours.'", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) e.g. 'The city roared like a living thing.' (b) Adds energy/sensory vividness. (c) Parallel structure sentence.",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Description",
            author: "Written for Akademik Space",
            text: "The red door, the crooked gate, the empty porch.",
          },
          stem: "How many adjectives appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Diction", statement: "Adjectives add descriptive precision." }],
            steps: [{ reasoning: "Criterion D (Using language): 'red', 'crooked', 'empty' — 3 adjectives.", marks: 1, markCode: "D" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "'She strolled to the door' vs 'She strode to the door' vs 'She ambled to the door' — what does each verb choice create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference — all mean walked" },
              { id: "b", text: "Different gaits — 'strolled' relaxed, 'strode' confident/purposeful, 'ambled' aimless — precise diction creates nuance" },
              { id: "c", text: "Only 'strode' is correct English" },
              { id: "d", text: "The verbs change the door" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Precise diction", statement: "Near-synonyms carry different connotations." }],
            steps: [{ reasoning: "Criterion D (Using language): each verb implies a different manner — precise diction — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Different gaits — 'strolled' relaxed, 'strode' confident, 'ambled' aimless",
          },
        },
        {
          id: "mll5-u3-writing-techniques-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the technique in: 'The waves applauded the shore.'", marks: 1 },
            { label: "b", prompt: "Explain the effect of this technique.", marks: 2 },
            { label: "c", prompt: "Write your own personification about a city at night.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Human qualities to nature create vivid imagery." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): personification — waves 'applauded'.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): 'applauded' gives waves human action — suggests celebration, rhythm, approval — animates the scene.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): creates harmony/joy between sea and shore — nature feels alive and intentional.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): own personification — e.g. 'The city yawned awake, stretching its neon arms.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): correct personification — city given human actions.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Personification. (b) Waves 'applaud' — nature feels celebratory/alive. (c) e.g. 'The city yawned awake...'",
          },
        },
      ],
    },
    {
      id: "mll5-u3-voice-control",
      title: "Controlling voice and tone",
      skill: "Maintain consistent voice and tone throughout a text while adapting to genre and purpose.",
      lesson: {
        sections: [
          {
            heading: "Consistency of voice",
            body: "**Voice** = your writer's fingerprint — consistent across a text. If you start formal, stay formal; if colloquial, stay colloquial (unless deliberately shifting). Inconsistent voice confuses readers — are you serious or joking?",
          },
          {
            heading: "Tone vs voice",
            body: "**Voice** = who you are as writer (style). **Tone** = your attitude toward subject (serious, ironic, playful). You can have a consistent voice with varying tone — same writer, different moods. Voice = style; tone = attitude.",
          },
          {
            heading: "Genre-appropriate voice",
            body: "Different genres need different voices: **academic** = formal, objective; **creative** = vivid, personal; **journalistic** = clear, neutral; **persuasive** = confident, engaging. Match voice to genre conventions while keeping your style consistent.",
          },
        ],
        keyFormulas: [
          { name: "Voice control", statement: "Consistent voice + appropriate tone = professional writing." },
        ],
        workedExample: {
          problem: "Essay starts: 'One must consider the implications...' then shifts to 'Honestly, this stuff is crazy.' — Problem?",
          solution: "Inconsistent voice — formal academic shifts to casual slang; confuses reader about tone and purpose.",
        },
      },
      questions: [
        {
          id: "mll5-u3-voice-control-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between voice and tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "Voice = style/who you are; tone = attitude toward subject" },
              { id: "c", text: "Voice is only for singers" },
              { id: "d", text: "Tone is only for music" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Voice vs tone", statement: "Voice = style; tone = attitude." }],
            steps: [{ reasoning: "Criterion D (Using language): voice = style, tone = attitude — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Voice = style/who you are; tone = attitude toward subject",
          },
        },
        {
          id: "mll5-u3-voice-control-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Essay",
            author: "Written for Akademik Space",
            text: "'The data suggests a correlation between variables. However, as the researchers themselves acknowledge, the sample size was limited.'",
          },
          stem: "Identify the voice and tone — is it consistent?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Voice and tone", statement: "Academic voice = formal, objective; consistent tone = professional." }],
            steps: [
              { reasoning: "Criterion D (Using language): voice — formal, objective ('data suggests', 'acknowledge'), consistent academic register.", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): tone — measured, cautious ('suggests', 'limited') — appropriately hedged for evidence-based claims.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Consistent academic voice (formal, objective) + cautious tone (hedged claims) — professional and appropriate.",
          },
        },
        {
          id: "mll5-u3-voice-control-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Texts",
            author: "Written for Akademik Space",
            text: "Text A: 'The committee convened at 1400 hours to deliberate upon the matter.'\n\nText B: 'We all sat down at 2pm to talk about the problem.'",
          },
          stem: "Compare the voices — which is more effective for a school newsletter? Why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Genre-appropriate voice", statement: "Match voice to audience and purpose." }],
            steps: [
              { reasoning: "Criterion D (Using language): A = bureaucratic, formal ('convened', 'deliberate upon') — too stiff for newsletter.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): B = conversational, accessible ('sat down', 'talk about') — better for general audience.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C (Producing text): B more effective — newsletter needs accessible voice; A sounds like government document.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "B more effective — conversational voice suits newsletter; A is bureaucratic and inaccessible.",
          },
        },
        {
          id: "mll5-u3-voice-control-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the tone in: 'Oh great, another meeting. Just what I needed.'", marks: 1 },
            { label: "b", prompt: "Is this tone consistent with a formal work email?", marks: 1 },
            { label: "c", prompt: "Rewrite it for a formal email to your boss — what changes?", marks: 2 },
            { label: "d", prompt: "Explain why the register change matters.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register and tone", statement: "Sarcasm inappropriate for formal contexts." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): sarcastic/ironic tone — 'Oh great' means opposite.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): no — sarcasm inappropriate for formal work email; undermines professionalism.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): formal rewrite — e.g. 'I have another meeting scheduled. I'll need to manage my time accordingly.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): removes sarcasm, uses professional language.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion A (Analysing): register matters — sarcasm damages credibility in professional context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sarcastic. (b) Inappropriate for formal email. (c) Professional rewrite. (d) Sarcasm damages credibility.",
          },
        },
        {
          id: "mll5-u3-voice-control-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between voice and tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same" },
              { id: "b", text: "Voice = the writer's style/identity; tone = attitude toward the subject" },
              { id: "c", text: "Voice is only for speaking" },
              { id: "d", text: "Tone is only for music" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Voice vs tone", statement: "Voice = style; tone = attitude." }],
            steps: [{ reasoning: "Criterion D (Using language): voice = style, tone = attitude — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Voice = the writer's style/identity; tone = attitude toward the subject",
          },
        },
        {
          id: "mll5-u3-voice-control-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "'Dear Sir, I am writing to formally request an extension.'",
          },
          stem: "How many formal register markers appear in this letter?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Formal register", statement: "Formal markers signal professional voice." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Dear Sir', 'formally', 'request' — 3 formal markers.", marks: 1, markCode: "D" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-voice-control-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which voice is most appropriate for a news report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Playful and jokey" },
              { id: "b", text: "Clear, neutral and objective" },
              { id: "c", text: "Highly emotional and personal" },
              { id: "d", text: "Full of slang" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Genre conventions", statement: "Journalism requires neutral, objective voice." }],
            steps: [{ reasoning: "Criterion C (Producing text): news report = clear/neutral/objective — (b).", marks: 1, markCode: "C" }],
            finalAnswer: "**(b)** Clear, neutral and objective",
          },
        },
        {
          id: "mll5-u3-voice-control-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Paragraph",
            author: "Written for Akademik Space",
            text: "'The policy was implemented in Q3. Results were mixed. Honestly, it was a total mess, ngl.'",
          },
          stem: "What is the problem with this paragraph's voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is perfectly consistent" },
              { id: "b", text: "It shifts from formal/bureaucratic ('implemented', 'Q3') to casual slang ('ngl', 'total mess') — inconsistent voice" },
              { id: "c", text: "It is too long" },
              { id: "d", text: "It has no problem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Voice consistency", statement: "Shifting register confuses the reader." }],
            steps: [{ reasoning: "Criterion A (Analysing): formal then slang = inconsistent voice — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** It shifts from formal/bureaucratic to casual slang — inconsistent voice",
          },
        },
        {
          id: "mll5-u3-voice-control-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A writer maintains a consistent voice but shifts tone. What does this mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have no style" },
              { id: "b", text: "Their style is consistent, but their attitude toward the subject changes — e.g. same voice, serious then playful" },
              { id: "c", text: "It is impossible" },
              { id: "d", text: "Voice and tone are identical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Voice and tone", statement: "Consistent style can carry varying attitudes." }],
            steps: [{ reasoning: "Criterion A (Analysing): consistent voice + varying tone = same style, different attitude — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Style is consistent, but attitude toward the subject changes",
          },
        },
        {
          id: "mll5-u3-voice-control-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Email",
            author: "Written for Akademik Space",
            text: "'Hi team, quick update on the project — we're on track. More soon.'",
          },
          stem: "How many informal/conversational markers appear in this email?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Conversational voice", statement: "Informal markers create approachable tone." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Hi team', 'quick update', 'More soon' — 3 informal/conversational markers.", marks: 1, markCode: "D" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-voice-control-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Rewrite",
            author: "Written for Akademik Space",
            text: "Original: 'This film was absolutely incredible, you guys.'\n\nTarget: formal review for a newspaper.",
          },
          stem: "Rewrite the original in formal register, then explain what changed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register shift", statement: "Formal register removes slang and exaggeration." }],
            steps: [
              { reasoning: "Criterion C (Producing text): formal version — e.g. 'This film was exceptional.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): removes 'absolutely', 'you guys' — slang and direct address replaced by measured evaluation.", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): 'incredible' is hyperbolic; formal version uses 'exceptional' — controlled, credible voice for newspaper audience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal version removes slang/hyperbole — voice shifts from casual fan to professional critic.",
          },
        },
        {
          id: "mll5-u3-voice-control-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a writer's voice 'consistent'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using the same word repeatedly" },
              { id: "b", text: "Maintaining the same style, register and tone throughout a text" },
              { id: "c", text: "Never changing topics" },
              { id: "d", text: "Writing very short sentences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Consistent voice", statement: "Same style/register/tone throughout." }],
            steps: [{ reasoning: "Criterion D (Using language): consistent voice = maintained style — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Maintaining the same style, register and tone throughout a text",
          },
        },
        {
          id: "mll5-u3-voice-control-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the tone in: 'Oh wonderful, the printer is broken again.'", marks: 1 },
            { label: "b", prompt: "Is this tone consistent with a professional work report?", marks: 1 },
            { label: "c", prompt: "Rewrite it professionally.", marks: 1 },
            { label: "d", prompt: "Explain why register matters for credibility.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register and tone", statement: "Sarcasm undermines professional credibility." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): sarcastic/ironic tone — 'Oh wonderful' means the opposite.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): no — sarcasm is inappropriate for professional work reports.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): professional — e.g. 'The printer is currently out of order.'", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion A (Analysing): register signals competence — sarcasm reads as unprofessional and damages credibility with colleagues/clients.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A (Analysing): tone must match genre conventions — professional contexts demand measured, factual language.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sarcastic. (b) Inappropriate. (c) e.g. 'The printer is currently out of order.' (d) Sarcasm damages professional credibility.",
          },
        },
        {
          id: "mll5-u3-voice-control-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Chat",
            author: "Written for Akademik Space",
            text: "'Sup? Wanna grab lunch later? It's on me.'",
          },
          stem: "How many informal/slang expressions appear in this text?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Informal register", statement: "Slang marks casual voice." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Sup', 'Wanna', 'It's on me' — 3 informal expressions.", marks: 1, markCode: "D" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u3-voice-control-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Academic Text",
            author: "Written for Akademik Space",
            text: "'The data is, like, super interesting and the results are kinda crazy.'",
          },
          stem: "What is the voice problem here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is perfectly academic" },
              { id: "b", text: "Inappropriate register — casual slang ('like', 'super', 'kinda', 'crazy') undermines academic credibility" },
              { id: "c", text: "It is too formal" },
              { id: "d", text: "No problem exists" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Genre-appropriate voice", statement: "Academic writing requires formal register." }],
            steps: [{ reasoning: "Criterion A (Analysing): slang in academic context = register mismatch — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Inappropriate register — casual slang undermines academic credibility",
          },
        },
        {
          id: "mll5-u3-voice-control-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the voice issue in: 'This research is, like, totally groundbreaking ngl.'", marks: 1 },
            { label: "b", prompt: "Explain why this voice fails for an academic essay.", marks: 2 },
            { label: "c", prompt: "Rewrite it academically.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Academic voice", statement: "Formal, precise, objective register for scholarship." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): excessive slang — 'like', 'totally', 'ngl' — casual register.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): slang undermines credibility — 'totally' and 'ngl' are vague, unmeasured claims inappropriate for evidence-based writing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'like' as filler weakens precision; academic voice requires measured, specific language.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): academic — e.g. 'This research represents a significant contribution to the field.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): formal register — 'significant contribution' is measured and precise.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Excessive slang. (b) Undermines credibility, lacks precision. (c) e.g. 'This research represents a significant contribution.'",
          },
        },
      ],
    },
  ],
};
