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
            { id: "a", text: "Admiring" }, { id: "b", text: "Ironic and sceptical" }, { id: "c", text: "Neutral" }, { id: "d", text: "Angry" },
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
            { id: "a", text: "Joyful" }, { id: "b", text: "Gloomy and cosy" }, { id: "c", text: "Excited" }, { id: "d", text: "Angry" },
          ], correctChoiceId: "b" },
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
