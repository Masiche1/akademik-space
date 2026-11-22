import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const MARKET: TextExtract = {
  title: "The Market at Closing Time",
  author: "Written for Akademik Space",
  text: "By five o'clock the market was winding down. The air smelled of crushed oranges and hot sugar, and under it, sharp and green, the scent of trodden mint. Stallholders shouted their last bargains, their voices rough as gravel. A dropped crate of lemons rolled across the cobbles, each one a small, bright sun. Somewhere a radio crackled out an old song, and the tarpaulins above the stalls flapped and snapped like sails in the wind.",
};

const SKETCH: TextExtract = {
  title: "Student paragraph: The Empty Classroom",
  author: "Written for Akademik Space",
  text: "The classroom was empty. Chairs were stacked upside down on the desks, their metal legs reaching up like the bare branches of winter trees. Dust floated in the last of the afternoon light, turning slowly. The clock ticked, loud now that nobody was there to ignore it. Outside, a single bell rang far away, and then there was only the hush of a room that had forgotten what it was for.",
};

const LEVELS_DESC = (part?: string): MarkLevel[] => {
  const p = part === undefined ? {} : { part };
  return [
    { ...p, level: "Level 5", marks: "13-15", descriptor: "Perceptive, assured writing; vivid, original description; carefully crafted sensory and figurative language; assured structure." },
    { ...p, level: "Level 4", marks: "10-12", descriptor: "Thorough, well-chosen detail and imagery; controlled structure; effective tone." },
    { ...p, level: "Level 3", marks: "7-9", descriptor: "Clear description with some effective imagery; generally organised." },
    { ...p, level: "Level 2", marks: "4-6", descriptor: "Some relevant detail; some use of imagery; some organisation." },
    { ...p, level: "Level 1", marks: "1-3", descriptor: "Simple, limited description; little structure." },
  ];
};

const LEVELS_6 = (part: string): MarkLevel[] => [
  { part, level: "Level 3", marks: "5-6", descriptor: "Clear, relevant analysis supported by well-chosen references." },
  { part, level: "Level 2", marks: "3-4", descriptor: "Some understanding with some relevant references." },
  { part, level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment." },
];

export const lesson31: Lesson = {
  id: "el8-u3-lesson-3-1",
  code: "3-1",
  title: "Descriptive Writing",
  goal: "I CAN write vivid description using sensory detail and figurative language, organised so the reader moves smoothly through a scene.",
  standards: ["KS3 Writing", "KS3 AO4", "KS3 AO5"],
  vocabulary: [
    { term: "Sensory detail", definition: "Description that appeals to the five senses: sight, sound, smell, taste and touch." },
    { term: "Figurative language", definition: "Language such as simile, metaphor and personification that creates images beyond the literal." },
    { term: "Show, don't tell", definition: "Using specific details and actions to create a feeling rather than stating it." },
    { term: "Zoom", definition: "Moving the description from a wide view to a close detail, or the reverse." },
    { term: "Cliche", definition: "An overused phrase that has lost its freshness, such as 'as white as snow'." },
    { term: "Motif", definition: "A repeated image or idea that links a piece of writing together." },
  ],
  concepts: [
    {
      id: "el8-u3-sensory-figurative",
      title: "Sensory detail and figurative language",
      skill: "Use precise sensory detail and fresh figurative language to bring a scene to life.",
      lesson: {
        sections: [
          {
            heading: "Use all five senses",
            body: "Good description goes beyond sight. In 'The Market at Closing Time', smell leads ('crushed oranges and hot sugar'), then sound ('voices rough as gravel'), then sight ('each one a small, bright sun'). Choose specific nouns and strong verbs: 'trodden mint' is better than 'a nice smell'. Avoid piling on adjectives; one exact word is better than three vague ones.",
          },
          {
            heading: "Fresh figurative language",
            body: "Similes, metaphors and personification make a scene memorable, but only if they are fresh. Replace cliches ('as white as snow') with comparisons you have thought about: lemons as 'small, bright suns'. Keep each image consistent with the mood you want: warm and busy for a market, bleak for an abandoned house.",
          },
        ],
        keyFormulas: [
          { name: "Five senses", statement: "Sight, sound, smell, taste, touch." },
          { name: "Specific nouns and strong verbs", statement: "'Cobbles' not 'ground'; 'snapped' not 'moved'." },
          { name: "Fresh image", statement: "A comparison that is original, accurate and fits the mood." },
        ],
        workedExample: {
          problem: "Describe a school corridor after the last bell. Write one paragraph (about 80 words) using at least three senses.",
          solution: "The corridor exhaled. Lockers clanged shut one by one, a slow metallic applause, and the smell of floor polish and damp coats settled over everything. Sunlight fell in long amber bars across the squeaking tiles. Somewhere a door sighed on its hinges. I trailed my fingertips along the cool wall, listening to my own footsteps echo back at me like a second, quieter person following. (Sound, smell, sight and touch are used; the personification of the corridor 'exhaling' and the simile of the echo as a 'second person' create atmosphere.)",
        },
      },
      questions: [
        {
          id: "el8-u3-sensory-figurative-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MARKET,
          stem: "Which sense does 'the air smelled of crushed oranges and hot sugar' appeal to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hearing" },
              { id: "b", text: "Smell" },
              { id: "c", text: "Touch" },
              { id: "d", text: "Sight" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory detail", statement: "Name the sense the detail appeals to." }],
            steps: [{ reasoning: "The sentence describes what the air smelled of.", evidence: "the air smelled of crushed oranges", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** Smell.",
            commonErrors: ["Choosing sight because oranges are visual, when the writer states smell."],
          },
        },
        {
          id: "el8-u3-sensory-figurative-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: MARKET,
          stem: "Rewrite this dull sentence so it uses a precise verb and a fresh image: 'The wind blew the canvas and it made a noise.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Improving description", statement: "Replace vague words with strong verbs and fresh images." }],
            steps: [
              { reasoning: "Replace the vague 'blew' and 'made a noise' with a vivid verb, for example 'snapped' or 'flapped'.", evidence: "flapped and snapped", marks: 1, markCode: "AO4" },
              { reasoning: "Add a fresh simile or metaphor, such as comparing the canvas to sails or flags.", evidence: "like sails in the wind", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Model: 'The wind snapped the canvas like a sail, a sharp, cracking applause.' (Any precise verb plus a fresh image earns the marks.)",
            commonErrors: ["Adding adjectives only: 'The strong, loud wind blew the big canvas'.", "Using a cliche such as 'as loud as thunder'."],
          },
        },
        {
          id: "el8-u3-sensory-figurative-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: MARKET,
          stem: "How does the writer use language to create the atmosphere of the market? Refer to two senses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory language", statement: "Multiple senses make a setting immersive." },
              { kind: "technique", name: "Simile and metaphor", statement: "Images link the scene to familiar things." },
            ],
            steps: [
              { reasoning: "Smell creates a sweet, sharp mix of fruit and herbs, giving a warm, lively atmosphere.", evidence: "crushed oranges and hot sugar", marks: 1, markCode: "AO2" },
              { reasoning: "'Trodden mint' adds a fresher green smell that suggests a busy day's end.", evidence: "trodden mint", marks: 1, markCode: "AO2" },
              { reasoning: "Sound is rough and loud, with the simile suggesting the stallholders' tired, gruff voices.", evidence: "voices rough as gravel", marks: 1, markCode: "AO2" },
              { reasoning: "The simile of the tarpaulins as sails adds movement and a sense of the market as a ship, lively and wind-filled.", evidence: "flapped and snapped like sails", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The writer appeals to smell with 'crushed oranges and hot sugar' and 'trodden mint', creating a sweet and fresh atmosphere. Sound is also strong: voices 'rough as gravel' and tarpaulins that 'flapped and snapped like sails', suggesting a tired but lively market at the end of the day.",
            commonErrors: ["Listing senses without quoting.", "Naming a simile but not the effect."],
          },
        },
        {
          id: "el8-u3-sensory-figurative-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts of this question about descriptive writing.",
          extract: SKETCH,
          parts: [
            { label: "a", prompt: "Write down one simile from the student paragraph.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the final sentence, 'the hush of a room that had forgotten what it was for'.", marks: 4 },
            { label: "c", prompt: "Analyse how the student uses sensory detail and figurative language to create atmosphere.", marks: 6 },
            { label: "d", prompt: "Write a description of an empty place (such as a beach in winter, a playground at night or a train station at dawn) using at least three senses and at least two original images. Write about 150 words.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory detail", statement: "Specific details of sound, sight and touch build atmosphere." },
              { kind: "technique", name: "Personification", statement: "A room that 'forgot' is given human memory." },
              { kind: "skill", name: "Crafting writing", statement: "Choose precise words and fresh images; control structure and tone." },
            ],
            steps: [
              { part: "a", reasoning: "Chair legs are compared to branches, creating a bare, wintry image.", evidence: "like the bare branches of winter trees", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Personification gives the room a memory, which makes emptiness feel sad and slightly eerie.", evidence: "a room that had forgotten what it was for", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "'Hush' suggests a respectful, quiet stillness as the sentence slows to a close.", evidence: "the hush of a room", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Sight: dust turning slowly in the light creates stillness.", evidence: "Dust floated in the last of the afternoon light, turning slowly", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Sound: the loud clock stresses the absence of people.", evidence: "loud now that nobody was there to ignore it", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The simile of the branches and personified room build a melancholy atmosphere of abandonment.", evidence: "reaching up like the bare branches of winter trees", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Uses at least three senses with precise, selective detail.", marks: 5, markCode: "AO4" },
              { part: "d", reasoning: "Includes fresh, original figurative language that fits the mood.", marks: 5, markCode: "AO4" },
              { part: "d", reasoning: "Accurate sentences, spelling and punctuation, with varied vocabulary and sentence forms.", marks: 5, markCode: "AO5" },
            ],
            levels: [...LEVELS_6("c"), ...LEVELS_DESC("d")],
            finalAnswer: "(a) 'like the bare branches of winter trees'. (b) The room is personified as having a memory, so its emptiness feels sad and eerie, and 'hush' slows the sentence. (c) The student uses sight (floating dust), sound (the loud clock) and a winter-branch simile to build a melancholy mood. (d) Model: 'The beach in January belongs to the gulls. Wind combs the sand into thin ripples, and the sea folds itself against the shore with a tired sigh. Salt stings my lips. Far off, a shuttered ice-cream kiosk stares out blankly, its painted cone peeling like old sunburn. My footprints are the only sentences written on the page of the sand, and the tide is already reading them back to nothing.'",
            commonErrors: ["Using only sight.", "Relying on cliches such as 'golden sand' and 'as blue as the sky'.", "Telling the reader how to feel ('it was very sad') instead of showing it."],
            examinerNote: "Part (d) is marked for content and organisation (AO4, 10 marks) and technical accuracy (AO5, 5 marks).",
          },
        },
      ],
    },
    {
      id: "el8-u3-structuring-description",
      title: "Structuring a description",
      skill: "Organise a descriptive piece with a clear viewpoint, movement and an effective ending.",
      lesson: {
        sections: [
          {
            heading: "Plan the journey of the reader",
            body: "A description needs a shape. Common structures are a **zoom** (wide view to a tiny detail, or the reverse), a **journey** (moving through a place), or a **time shift** (dawn to dusk). Decide your viewpoint first: who is looking, from where, and with what mood? Plan three or four paragraphs, each with a different focus.",
          },
          {
            heading: "Openings, links and endings",
            body: "Open with a striking detail or image, not 'The place was...'. Link paragraphs with changes of focus ('Beyond the fence...', 'Closer now...'). End by returning to an opening image, or by a small, telling detail that leaves an impression. A repeated **motif**, such as the ticking clock, binds the piece together.",
          },
        ],
        keyFormulas: [
          { name: "Zoom structure", statement: "Move from wide view to close detail, or from close detail outwards." },
          { name: "Cyclical ending", statement: "Return to the opening image with new meaning." },
          { name: "Motif", statement: "A repeated image that gives unity." },
        ],
        workedExample: {
          problem: "Plan a four-paragraph description of a deserted funfair at dusk.",
          solution: "Paragraph 1 (wide): the rusting Ferris wheel silhouetted against the red sky; the silence. Paragraph 2 (mid): the closed stalls, peeling paint, faded prizes with glassy eyes. Paragraph 3 (close): a single balloon string snagged on a railing, tapping in the wind. Paragraph 4 (ending): return to the wheel, creaking once as if remembering its music. Motif: sound of creaking and tapping.",
        },
      },
      questions: [
        {
          id: "el8-u3-structuring-description-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A writer begins describing a whole city from a hilltop, then moves to a single window, then to a face behind it. What structure is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A flashback" },
              { id: "b", text: "A list of arguments" },
              { id: "c", text: "A cliffhanger" },
              { id: "d", text: "A zoom from a wide view to a close detail" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Zoom structure", statement: "Moving focus from wide to close detail." }],
            steps: [{ reasoning: "The focus narrows from city to window to face, which is a zoom.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** A zoom from wide to close.",
            commonErrors: ["Choosing a flashback because the focus changes, when no time shift happens."],
          },
        },
        {
          id: "el8-u3-structuring-description-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the opening two sentences of a description of a busy railway station. Begin with a striking detail, not 'The station was...'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Striking openings", statement: "Begin with a specific, vivid detail or image." }],
            steps: [
              { reasoning: "Opens with a specific vivid detail or image rather than a general statement.", marks: 1, markCode: "AO4" },
              { reasoning: "Uses at least one sense or figurative image.", marks: 1, markCode: "AO4" },
              { reasoning: "Accurate punctuation and sentence structure.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "Model: 'A thousand footsteps hit the concrete at once, a drumroll that never stopped. Beneath the iron roof, pigeons wheeled through shafts of dusty light, indifferent to the crowd.'",
            commonErrors: ["Starting with 'The station was very busy.'", "Using several vague adjectives."],
          },
        },
        {
          id: "el8-u3-structuring-description-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a plan and the opening paragraph (about 80 words) for a description of a forest in a storm. Your plan should list the focus of each paragraph and one motif.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "A plan gives the description shape and a motif." },
              { kind: "technique", name: "Imagery", statement: "Fresh, mood-fitting images." },
            ],
            steps: [
              { reasoning: "The plan has a clear sequence of paragraphs with different focuses, such as canopy, path, close detail, ending.", marks: 2, markCode: "AO4" },
              { reasoning: "The plan names a repeated motif, such as the creaking of trees.", marks: 1, markCode: "AO4" },
              { reasoning: "The paragraph uses sensory detail and at least one fresh image.", marks: 3, markCode: "AO4" },
              { reasoning: "Writing is accurate and varied in sentence form.", marks: 2, markCode: "AO5" },
            ],
            levels: [
              { level: "Level 4", marks: "7-8", descriptor: "Thorough, well-structured plan; vivid, controlled paragraph with accurate writing." },
              { level: "Level 3", marks: "5-6", descriptor: "Clear plan and paragraph with some effective imagery and generally accurate writing." },
              { level: "Level 2", marks: "3-4", descriptor: "Some plan and some detail; limited imagery." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited plan or description." },
            ],
            finalAnswer: "Model plan: 1 canopy tossing overhead; 2 the path vanishing; 3 a single animal sheltering; 4 the storm passes. Motif: creaking. Paragraph: 'Overhead, the canopy heaved like a green sea. Branches creaked and groaned, ancient doors forced open by the wind, and leaves tore loose in glittering handfuls. The path I had followed an hour ago was gone, swallowed by mud and whirling bark. I pulled my collar tight and listened to the forest complaining in a thousand wooden voices.'",
            commonErrors: ["Writing a plan with no motif.", "Starting the paragraph with weather clichés."],
          },
        },
        {
          id: "el8-u3-structuring-description-q4",
          difficulty: "challenge",
          totalMarks: 27,
          stem: "Answer all parts of this question about structuring a description.",
          extract: MARKET,
          parts: [
            { label: "a", prompt: "State where the writer's focus begins and ends in the extract.", marks: 2 },
            { label: "b", prompt: "Explain how the closing sentence of the extract creates a sense of movement.", marks: 4 },
            { label: "c", prompt: "Describe the structure of the extract and explain how it holds the reader's interest.", marks: 6 },
            { label: "d", prompt: "Write a description of a place at closing time (a library, a swimming pool, a shop or a park). Use a clear structure, such as a zoom or a journey, and a motif. Write about 200 words.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Descriptive structure", statement: "Zoom, journey or time shift gives a piece shape." },
              { kind: "technique", name: "Motif", statement: "Repeated image unifies the writing." },
            ],
            steps: [
              { part: "a", reasoning: "It begins with the general state of the market.", evidence: "By five o'clock the market was winding down", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It ends on the sound and movement of the tarpaulins overhead.", evidence: "tarpaulins above the stalls flapped and snapped", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Verbs of flapping and snapping create energy and movement.", evidence: "flapped and snapped", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The simile of sails extends the movement and adds a sense of wind-filled life as the market closes.", evidence: "like sails in the wind", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "It moves from a general opening to smell, then to sound and sight, then a rolling lemon, and ends overhead.", evidence: "A dropped crate of lemons rolled across the cobbles", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Shifting senses in each sentence keep interest and build a layered picture.", evidence: "Somewhere a radio crackled out an old song", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The movement from ground level to above the stalls ends with a sense of release and scale.", evidence: "tarpaulins above the stalls", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Clear structure and organisation with a motif and varied paragraphs.", marks: 5, markCode: "AO4" },
              { part: "d", reasoning: "Vivid, original sensory detail and imagery.", marks: 5, markCode: "AO4" },
              { part: "d", reasoning: "Accurate and varied sentences, spelling and punctuation.", marks: 5, markCode: "AO5" },
            ],
            levels: [...LEVELS_6("c"), ...LEVELS_DESC("d")],
            finalAnswer: "(a) It begins with the market winding down and ends on the flapping tarpaulins. (b) The verbs and the sail simile create wind-driven movement. (c) The extract moves from a general view through smell, sound and sight to the roof of tarpaulins, keeping interest through changing senses. (d) Model: a library closing, structured as a journey from the doors to the last lit desk, with the ticking clock as motif and a cyclical ending.",
            commonErrors: ["No clear structure: a list of observations.", "Not using the motif again at the end."],
            examinerNote: "Part (d): 10 marks for content and organisation (AO4) and 5 marks for technical accuracy (AO5).",
          },
        },
      ],
    },
  ],
};
