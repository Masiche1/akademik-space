import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ciege-u2-lesson-2-2",
  code: "2-2",
  title: "Tone, Mood and Atmosphere",
  goal: "I CAN analyse tone, mood and atmosphere in a passage.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 2: tone"],
  vocabulary: [
    { term: "Tone", definition: "The writer's attitude towards the subject." },
    { term: "Mood", definition: "The feeling created in the reader." },
    { term: "Atmosphere", definition: "The overall feeling or ambience of a text." },
    { term: "Irony", definition: "A contrast between expectation and reality." },
    { term: "Satire", definition: "Using humour or exaggeration to criticise." },
  ],
  concepts: [
    {
      id: "ciege-u2-s2-tone",
      title: "Tone and attitude",
      skill: "Identify the writer's tone and attitude at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "What is tone?",
            body: "Tone is the writer's attitude — could be admiring, critical, nostalgic, angry, ironic or objective. Look at word choice and how the writer presents people and events.",
          },
          {
            heading: "Finding tone",
            body: "Ask: does the writer seem to approve or disapprove? Are they emotional or detached? Words like 'fortunately', 'regrettably', 'ironically' often signal attitude.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Read: 'The mayor, ever the showman, announced yet another 'visionary' plan.' What is the tone?",
          solution: "Ironic/sceptical — 'showman' and scare quotes around 'visionary' suggest the writer doubts the mayor.",
        },
      },
      questions: [
        {
          id: "ciege-u2-s2-to-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Mayor",
            author: "Written for Akademik Space",
            text: "The mayor, ever the showman, announced yet another 'visionary' plan to applause from his supporters.",
          },
          stem: "What tone does the writer take towards the mayor?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Angry" },
            { id: "b", text: "Ironic and sceptical" },
            { id: "c", text: "Admiring" },
            { id: "d", text: "Neutral" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Word choice reveals attitude." }],
            steps: [
              { reasoning: "'Showman' and scare quotes on 'visionary' signal irony/doubt.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Ironic and sceptical",
          },
        },
        {
          id: "ciege-u2-s2-to-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Grandmother's Kitchen",
            author: "Written for Akademik Space",
            text: "The kitchen still smelled of cinnamon and woodsmoke, just as it had on winter evenings when Grandmother told stories by the stove.",
          },
          stem: "What feeling does this description create?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Nostalgia", statement: "Sensory memory creates longing." }],
            steps: [
              { reasoning: "Smells and 'still' suggest memory and longing.", marks: 1, markCode: "AO2" },
              { reasoning: "The tone is nostalgic and affectionate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Nostalgic",
          },
        },
        {
          id: "ciege-u2-s2-to-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "With considerable fanfare, the minister declared the project 'an unqualified triumph'. Critics noted that not a single new job had been created.",
          },
          stem: "How does the writer's tone change between the two sentences?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone shift", statement: "Contrast attitudes." }],
            steps: [
              { reasoning: "First sentence reports minister's boastful claim ironically ('fanfare', 'unqualified triumph').", marks: 1, markCode: "AO2" },
              { reasoning: "Second sentence is dry and factual, undercutting the claim.", marks: 1, markCode: "AO2" },
              { reasoning: "The writer's tone is ironic throughout, becoming more critical.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Boastful → critical",
          },
        },
        {
          id: "ciege-u2-s2-to-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Old House",
            author: "Written for Akademik Space",
            text: "The house leaned slightly to the left, as if listening. Ivy had claimed the porch; the letterbox hung by a single screw, swinging in the wind like a warning.",
          },
          stem: "Analyse how the writer creates atmosphere in this description.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Atmosphere", statement: "Personification + unsettling details." }],
            steps: [
              { reasoning: "'As if listening' personifies the house — eerie.", marks: 1, markCode: "AO3" },
              { reasoning: "'Ivy had claimed' suggests nature overwhelming.", marks: 1, markCode: "AO2" },
              { reasoning: "'Swinging... like a warning' creates unease.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall atmosphere: neglected, mysterious, slightly sinister.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Eerie, neglected, mysterious",
          },
        },
        {
          id: "ciege-u2-s2-to-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The New Policy",
            author: "Written for Akademik Space",
            text: "The new policy, 'bold' as it was, left many staff worried about their jobs.",
          },
          stem: "What tone does the writer take towards the policy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fully admiring" },
            { id: "b", text: "Sceptical" },
            { id: "c", text: "Neutral" },
            { id: "d", text: "Angry" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Scare quotes + outcome signal attitude." }],
            steps: [
              { reasoning: "'Bold' in quotes plus 'worried' staff suggest the writer doubts the policy — sceptical tone.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Sceptical",
          },
        },
        {
          id: "ciege-u2-s2-to-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "The speech was short. It was powerful.",
          },
          stem: "How many adjectives describe the speech?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Short' and 'powerful' are the two adjectives — 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u2-s2-to-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Rescue",
            author: "Written for Akademik Space",
            text: "Fortunately, the fire brigade arrived in time.",
          },
          stem: "What tone does 'fortunately' create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Objective" },
            { id: "b", text: "Angry" },
            { id: "c", text: "Sarcastic" },
            { id: "d", text: "Relieved and positive" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Attitude words", statement: "'Fortunately' signals relief." }],
            steps: [
              { reasoning: "'Fortunately' shows the writer is glad the brigade arrived — relieved, positive tone.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Relieved and positive",
          },
        },
        {
          id: "ciege-u2-s2-to-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Plan",
            author: "Written for Akademik Space",
            text: "The minister's 'decisive' action was, regrettably, too late.",
          },
          stem: "How many words signal the writer's attitude in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Attitude words", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Attitude words", statement: "Scare quotes and adverbs signal tone." }],
            steps: [
              { reasoning: "'Regrettably' is the clearest attitude word; the scare quotes around 'decisive' also signal irony — 1 explicit adverb.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "ciege-u2-s2-to-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Fire Station",
            author: "Written for Akademik Space",
            text: "Ironically, the fire station itself burned down.",
          },
          stem: "What tone does 'ironically' create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sympathetic" },
            { id: "b", text: "Factual and neutral" },
            { id: "c", text: "Hopeful" },
            { id: "d", text: "Ironic and mocking" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Irony", statement: "Contrast between expectation and reality." }],
            steps: [
              { reasoning: "A fire station burning is unexpected — 'ironically' highlights the mocking contrast.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Ironic and mocking",
          },
        },
        {
          id: "ciege-u2-s2-to-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Reactions",
            author: "Written for Akademik Space",
            text: "The teacher praised the essay warmly; the principal dismissed it curtly.",
          },
          stem: "How many adverbs appear, and what do they reveal about the two speakers?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adverbs and tone", statement: "Adverbs signal attitude." }],
            steps: [
              { reasoning: "'Warmly' and 'curtly' are the two adverbs.", marks: 1, markCode: "AO1" },
              { reasoning: "They show the teacher approves while the principal is dismissive.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2 adverbs: warm approval vs curt dismissal",
          },
        },
        {
          id: "ciege-u2-s2-to-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Charity",
            author: "Written for Akademik Space",
            text: "The charity's 'generous' donors gave only pocket change.",
          },
          stem: "What tone does the writer take towards the donors, and how do you know?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Word choice reveals attitude." }],
            steps: [
              { reasoning: "The tone is critical or sarcastic.", marks: 1, markCode: "AO2" },
              { reasoning: "Scare quotes around 'generous' signal doubt.", marks: 1, markCode: "AO3" },
              { reasoning: "'Only pocket change' contradicts generosity — the writer mocks them.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Critical/sarcastic — quotes + 'only pocket change'",
          },
        },
        {
          id: "ciege-u2-s2-to-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Bridge",
            author: "Written for Akademik Space",
            text: "The bridge, 'sturdy' as it was advertised, collapsed within a year.",
          },
          stem: "What attitude does the writer show towards the advertisement?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Praising" },
            { id: "b", text: "Sceptical — the claim proved false" },
            { id: "c", text: "Indifferent" },
            { id: "d", text: "Full agreement" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Irony", statement: "Expectation vs reality." }],
            steps: [
              { reasoning: "'Sturdy as advertised' is contradicted by the collapse.", marks: 1, markCode: "AO2" },
              { reasoning: "The writer is sceptical of, or mocks, the false claim.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Sceptical — claim proved false",
          },
        },
        {
          id: "ciege-u2-s2-to-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Three Verdicts",
            author: "Written for Akademik Space",
            text: "She called the plan 'visionary'; he called it 'reckless'; the report called it 'unworkable'.",
          },
          stem: "How many quoted evaluative words appear, and what do they suggest about the plan?",
          response: { type: "numeric", parts: [
            { label: "Quoted words", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluative language", statement: "Quoted adjectives show judgement." }],
            steps: [
              { reasoning: "'Visionary', 'reckless' and 'unworkable' — 3 quoted adjectives.", marks: 1, markCode: "AO1" },
              { reasoning: "They range from positive to negative — the plan is controversial.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u2-s2-to-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Match",
            author: "Written for Akademik Space",
            text: "The team played brilliantly and won easily.",
          },
          stem: "What tone does the writer take towards the team?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Admiring" },
            { id: "b", text: "Neutral" },
            { id: "c", text: "Sad" },
            { id: "d", text: "Critical" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Positive word choice shows approval." }],
            steps: [
              { reasoning: "'Brilliantly' and 'easily' are positive — the writer admires the team.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Admiring",
          },
        },
        {
          id: "ciege-u2-s2-to-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Alibi",
            author: "Written for Akademik Space",
            text: "He was obviously lying — the dates did not match.",
          },
          stem: "How many clauses are separated by the dash?",
          response: { type: "numeric", parts: [
            { label: "Clauses", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence structure", statement: "A dash separates two clauses." }],
            steps: [
              { reasoning: "'He was obviously lying' and 'the dates did not match' — 2 clauses.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u2-s2-to-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Bureaucracy",
            author: "Written for Akademik Space",
            text: "The 'efficient' bureaucracy produced mountains of paperwork.",
          },
          stem: "Analyse how the writer's word choice and punctuation create an attitude towards the bureaucracy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Word choice + punctuation reveal attitude." }],
            steps: [
              { reasoning: "'Efficient' in quotes suggests the opposite — the writer doubts it.", marks: 1, markCode: "AO3" },
              { reasoning: "'Mountains of paperwork' exaggerates the burden — hyperbole.", marks: 1, markCode: "AO2" },
              { reasoning: "Bureaucracy producing paperwork is ironic — it should simplify, not complicate.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall tone: critical and mocking of inefficiency.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Critical, ironic tone",
          },
        },
      ],
    },
    {
      id: "ciege-u2-s2-mood",
      title: "Mood and reader response",
      skill: "Explain how texts create mood and affect readers.",
      lesson: {
        sections: [
          {
            heading: "Mood vs tone",
            body: "Tone is the writer's attitude; mood is the feeling created in the reader. A satirical tone might create a mocking mood; a warm tone creates a cosy mood.",
          },
          {
            heading: "Creating mood",
            body: "Mood comes from setting, weather, lighting, character behaviour and word choice. Dark, stormy settings often create tense or gloomy moods; bright settings create cheerful ones.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does 'rain lashed the windows' affect mood?",
          solution: "It creates a gloomy, oppressive mood — the weather mirrors the characters' feelings.",
        },
      },
      questions: [
        {
          id: "ciege-u2-s2-mo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Winter Evening",
            author: "Written for Akademik Space",
            text: "Rain lashed the windows and the fire crackled low in the grate.",
          },
          stem: "What mood does this create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Angry" },
            { id: "b", text: "Excited" },
            { id: "c", text: "Joyful" },
            { id: "d", text: "Gloomy and cosy" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Setting and details create feeling." }],
            steps: [
              { reasoning: "Rain + low fire = gloomy but warm/cosy.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Gloomy and cosy",
          },
        },
        {
          id: "ciege-u2-s2-mo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Fair",
            author: "Written for Akademik Space",
            text: "Bunting fluttered overhead, music drifted from the bandstand, and the air smelled of candyfloss and hot doughnuts.",
          },
          stem: "What mood is created at the fair?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Sensory details create feeling." }],
            steps: [
              { reasoning: "Bright, busy, sensory details.", marks: 1, markCode: "AO2" },
              { reasoning: "Creates a cheerful, lively mood.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Cheerful and lively",
          },
        },
        {
          id: "ciege-u2-s2-mo-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Waiting Room",
            author: "Written for Akademik Space",
            text: "The waiting room was silent except for the clock's tick. Fluorescent lights hummed overhead, and a single magazine lay face-down on the table.",
          },
          stem: "Explain how the writer creates tension in this scene.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tension", statement: "Silence + details build unease." }],
            steps: [
              { reasoning: "'Silent except for the clock's tick' emphasises stillness.", marks: 1, markCode: "AO2" },
              { reasoning: "'Hummed' adds an unsettling sound.", marks: 1, markCode: "AO2" },
              { reasoning: "Creates an anxious, suspenseful mood.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Silence, humming lights = anxiety",
          },
        },
        {
          id: "ciege-u2-s2-mo-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Journey Home",
            author: "Written for Akademik Space",
            text: "As the plane climbed through the clouds, the city below shrank to a glittering grid. Passengers settled into their seats, lulled by the engine's steady hum.",
          },
          stem: "How does the writer use setting to create mood?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Setting and mood", statement: "Visual + auditory details." }],
            steps: [
              { reasoning: "'Glittering grid' — beautiful visual of the city below.", marks: 1, markCode: "AO2" },
              { reasoning: "'Engine's steady hum' — soothing sound.", marks: 1, markCode: "AO2" },
              { reasoning: "'Settled', 'lulled' — passengers relax.", marks: 1, markCode: "AO2" },
              { reasoning: "Mood: peaceful, awe-inspired, calm.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Peaceful, awe-inspiring mood",
          },
        },
        {
          id: "ciege-u2-s2-mo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Nursery",
            author: "Written for Akademik Space",
            text: "The nursery was bright, noisy and full of laughter.",
          },
          stem: "What mood does this description create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Boring" },
            { id: "b", text: "Scary" },
            { id: "c", text: "Gloomy" },
            { id: "d", text: "Cheerful and lively" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Sensory details create feeling." }],
            steps: [
              { reasoning: "Bright, noisy and laughter all suggest happiness — cheerful mood.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Cheerful and lively",
          },
        },
        {
          id: "ciege-u2-s2-mo-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Storm Approaches",
            author: "Written for Akademik Space",
            text: "Dark clouds gathered. The wind rose. Rain began to fall.",
          },
          stem: "How many sentences does this extract contain?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count sentence boundaries." }],
            steps: [
              { reasoning: "Three full stops mark three sentences.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u2-s2-mo-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Footsteps",
            author: "Written for Akademik Space",
            text: "Footsteps echoed behind her. She quickened her pace.",
          },
          stem: "What mood does this create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Tense and fearful" },
            { id: "b", text: "Relaxed" },
            { id: "c", text: "Joyful" },
            { id: "d", text: "Sleepy" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Threat + reaction create tension." }],
            steps: [
              { reasoning: "Echoing footsteps behind her and quickening pace suggest fear — tense mood.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Tense and fearful",
          },
        },
        {
          id: "ciege-u2-s2-mo-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Haunted Room",
            author: "Written for Akademik Space",
            text: "The candles flickered, the shadows lengthened, the room grew cold.",
          },
          stem: "How many commas appear in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Commas", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Punctuation", statement: "Commas separate listed clauses." }],
            steps: [
              { reasoning: "Two commas separate the three clauses — 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u2-s2-mo-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Match",
            author: "Written for Akademik Space",
            text: "The crowd cheered as the goals went in, one after another.",
          },
          stem: "What mood is created at the match?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Bored" },
            { id: "b", text: "Excited and triumphant" },
            { id: "c", text: "Melancholy" },
            { id: "d", text: "Angry" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Crowd reaction creates feeling." }],
            steps: [
              { reasoning: "Cheering crowd and consecutive goals create excitement and triumph.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Excited and triumphant",
          },
        },
        {
          id: "ciege-u2-s2-mo-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Exam Hall",
            author: "Written for Akademik Space",
            text: "The exam hall was silent. Pens scratched. Clocks ticked.",
          },
          stem: "How many sentences are there, and how many describe sounds?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 3 },
            { label: "Sound sentences", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Sound details build tension." }],
            steps: [
              { reasoning: "Three full stops — 3 sentences.", marks: 1, markCode: "AO1" },
              { reasoning: "'Pens scratched' and 'clocks ticked' describe sounds — 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3 sentences, 2 sound sentences",
          },
        },
        {
          id: "ciege-u2-s2-mo-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Lighthouse",
            author: "Written for Akademik Space",
            text: "The lighthouse beam swept the black water, steady and lonely.",
          },
          stem: "What mood does this description create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Chaotic" },
            { id: "b", text: "Comfortable" },
            { id: "c", text: "Joyful" },
            { id: "d", text: "Lonely and isolated" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Setting details create feeling." }],
            steps: [
              { reasoning: "'Black water', 'steady and lonely' suggest isolation — lonely mood.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Lonely and isolated",
          },
        },
        {
          id: "ciege-u2-s2-mo-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Wedding",
            author: "Written for Akademik Space",
            text: "The wedding tent glowed with fairy lights as music drifted across the garden.",
          },
          stem: "What mood does this scene create, and which details produce it?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Tense — the music is loud" },
            { id: "b", text: "Sad — the tent is dark" },
            { id: "c", text: "Neutral" },
            { id: "d", text: "Festive and romantic — lights and music" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Sensory details create feeling." }],
            steps: [
              { reasoning: "Fairy lights suggest celebration; music suggests romance and joy.", marks: 1, markCode: "AO2" },
              { reasoning: "Together they create a festive, romantic mood.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Festive and romantic",
          },
        },
        {
          id: "ciege-u2-s2-mo-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Corridor",
            author: "Written for Akademik Space",
            text: "The corridor was long, dim and silent, ending in a door that would not open.",
          },
          stem: "How many adjectives describe the corridor?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Long', 'dim' and 'silent' describe the corridor — 3 adjectives.", marks: 1, markCode: "AO1" },
              { reasoning: "'Would not open' describes the door, not the corridor.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u2-s2-mo-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Party",
            author: "Written for Akademik Space",
            text: "Babies giggled; balloons bobbed; ice cream dripped.",
          },
          stem: "What mood does this create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cheerful and playful" },
            { id: "b", text: "Scary" },
            { id: "c", text: "Boring" },
            { id: "d", text: "Melancholy" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mood", statement: "Details suggest celebration." }],
            steps: [
              { reasoning: "Giggling babies, balloons and ice cream suggest a happy, playful party.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Cheerful and playful",
          },
        },
        {
          id: "ciege-u2-s2-mo-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            text: "Thunder boomed. The dog hid under the bed.",
          },
          stem: "How many verbs appear in this extract?",
          response: { type: "numeric", parts: [
            { label: "Verbs", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action or state word." }],
            steps: [
              { reasoning: "'Boomed' and 'hid' are the two verbs — 2.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u2-s2-mo-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Abandoned Station",
            author: "Written for Akademik Space",
            text: "The abandoned station stood empty; only the wind moved through the broken glass.",
          },
          stem: "Analyse how the writer creates mood in this description.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Atmosphere", statement: "Setting and details create feeling." }],
            steps: [
              { reasoning: "'Abandoned' and 'empty' establish desolation.", marks: 1, markCode: "AO2" },
              { reasoning: "'Only the wind moved' emphasises lifelessness.", marks: 1, markCode: "AO2" },
              { reasoning: "'Broken glass' suggests decay and danger.", marks: 1, markCode: "AO2" },
              { reasoning: "Overall mood: eerie, lonely and desolate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Eerie, desolate mood",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u2-s2-tone-notes",
      title: "Tone, mood and atmosphere — revision notes",
      summary: "Writer's attitude vs reader's feeling, creating mood.",
      sections: [
        { heading: "Tone vs mood", body: "Tone = writer's attitude (ironic, admiring, critical). Mood = feeling created in reader (tense, cosy, cheerful)." },
        { heading: "Creating mood", body: "Use setting, weather, lighting, sounds and word choice. Analyse how specific details produce the feeling." },
      ],
    },
  ],
};
