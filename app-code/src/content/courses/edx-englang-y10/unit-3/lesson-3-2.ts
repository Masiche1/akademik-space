import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const FOG: TextExtract = {
  title: "The Salt Road",
  author: "Written for Akademik Space",
  source: "Short story extract",
  text: "Daniel had been walking since dawn, and the fog had walked with him. It rose from the marsh in slow grey sheets, swallowing the hedges, then the fence posts, then the path itself, until the world was reduced to the three yards in front of his boots. He told himself that he was not lost. The road was a road; it went somewhere.\n\nA bell sounded, far off and flat. He stopped. It sounded again, closer, and with it came the sound of something heavy dragging through the reeds. His mouth was dry. Slowly, as if the air might shatter, he lifted his lantern.\n\nThe light fell on a horse, enormous and pale as bone, standing quite still in the middle of the road. Its eyes were two coins of dull amber. It did not blink. It did not breathe, or if it did, the fog hid the breath. Daniel found that he could not move his feet.\n\n‘Well,’ said a voice behind him, dry as paper. ‘You took your time.’",
};

const MARKET: TextExtract = {
  title: "The Last Stall",
  author: "Written for Akademik Space",
  source: "Short story extract",
  text: "By four o'clock the market was dying. Traders folded their awnings and stacked crates of bruised fruit, and the pigeons moved in to pick at what was left. Only Mr Basu's stall still stood, its brass scales polished to a shine nobody was there to admire.\n\nHe had stood here for forty-one years. He knew the stones of this square the way other men knew their own hands. Now the council wanted the square for a car park, and the letter sat in his pocket, folded small, like something he was ashamed of.\n\nA girl stopped at the stall. She was perhaps nine, with a school bag far too big for her, and she studied the scales with great seriousness.\n\n‘Do they work?’ she asked.\n\n‘They have never been wrong,’ said Mr Basu.\n\nShe put a single coin on one pan. He weighed out a handful of apricots, and the pans balanced, and for a moment, just a moment, the square seemed to hold its breath.",
};

const LEVELS = (part: string, top: number): MarkLevel[] => {
  const step = Math.floor(top / 5);
  return [
    { part, level: "Level 5", marks: `${top - step + 1}-${top}`, descriptor: "Perceptive, discriminating analysis of the writer's methods and their effects on the reader; assured terminology; judicious evidence." },
    { part, level: "Level 4", marks: `${top - 2 * step + 1}-${top - step}`, descriptor: "Thorough analysis with well-chosen evidence and effective terminology." },
    { part, level: "Level 3", marks: `${top - 3 * step + 1}-${top - 2 * step}`, descriptor: "Clear, relevant analysis with relevant evidence." },
    { part, level: "Level 2", marks: `${top - 4 * step + 1}-${top - 3 * step}`, descriptor: "Some understanding with some relevant references; analysis partial." },
    { part, level: "Level 1", marks: `1-${top - 4 * step}`, descriptor: "Simple, limited; retelling or feature-spotting." },
  ];
};

const SHORT: MarkLevel[] = [
  { level: "Level 3", marks: "5-6", descriptor: "Clear, developed analysis of effects on the reader with well-chosen evidence." },
  { level: "Level 2", marks: "3-4", descriptor: "Some understanding of effects with some relevant references." },
  { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment; retelling." },
];

export const lesson32: Lesson = {
  id: "el10-u3-lesson-3-2",
  code: "3-2",
  title: "Analysing Prose Fiction",
  goal: "I CAN analyse how a prose writer builds character, setting and tension, and write about the effects on the reader.",
  standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2"],
  vocabulary: [
    { term: "Atmosphere", definition: "The mood or feeling a scene creates for the reader." },
    { term: "Foreshadowing", definition: "Hints early in a text about what is to come." },
    { term: "Pathetic fallacy", definition: "Using weather or setting to reflect mood or events." },
    { term: "Characterisation", definition: "The methods a writer uses to create and reveal a character." },
    { term: "Semantic field", definition: "A group of words linked by a shared meaning or theme." },
    { term: "Symbolism", definition: "Using an object, character or image to represent a bigger idea." },
    { term: "Tension", definition: "A feeling of nervous anticipation created by the writer." },
  ],
  concepts: [
    {
      id: "el10-u3-prose-analysis",
      title: "Analysing prose fiction",
      skill: "Analyse how a writer uses setting, character and sentence form to create atmosphere and tension.",
      lesson: {
        sections: [
          {
            heading: "Reading fiction for method",
            body: "In fiction, ask what the writer is *doing* at each moment. Is a setting being built? A character introduced? Tension raised? Select details that carry effect and explain them. Remember to read for the **whole** extract: openings, turning points and endings all matter.",
          },
          {
            heading: "Setting and atmosphere",
            body: "In ‘The Salt Road’, the fog is more than weather. It ‘swallowed’ the hedges, fence posts and path, a verb that personifies it as hungry and predatory, and the shrinking of the world to ‘the three yards in front of his boots’ creates a claustrophobic, isolated atmosphere. The list of disappearing things (‘the hedges, then the fence posts, then the path itself’) builds a sequence of loss, intensifying unease.",
          },
          {
            heading: "Character and tension",
            body: "Daniel's denial, ‘He told himself that he was not lost’, shows fear he will not admit. Short sentences (‘It did not blink.’) slow the pace and increase suspense, while sensory detail, such as the flat bell and the dragging sound, draws the reader into his fear. The final line brings a shocking twist with an unexplained voice, ‘dry as paper’, leaving the reader both alarmed and curious.",
          },
        ],
        keyFormulas: [
          { name: "Pathetic fallacy", statement: "The fog mirrors Daniel's confusion and growing fear." },
          { name: "Short sentences", statement: "Slow the pace, emphasise stillness and raise suspense." },
          { name: "Sensory detail", statement: "Sound and sight pull the reader into the character's experience." },
          { name: "Cliffhanger ending", statement: "An unexplained final line leaves the reader wanting to know more." },
        ],
        workedExample: {
          problem: "How does the writer create tension in the third paragraph of ‘The Salt Road’?",
          solution: "The writer builds tension by revealing the horse slowly and strangely. The simile ‘pale as bone’ links it with death, and the eyes like ‘two coins of dull amber’ are cold and lifeless. Two short sentences, ‘It did not blink. It did not breathe’, slow the pace, and the qualification ‘or if it did, the fog hid the breath’ leaves the reader uncertain, unsettled. Daniel's paralysis, ‘he could not move his feet’, makes the reader share his helplessness.",
        },
      },
      questions: [
        {
          id: "el10-u3-prose-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FOG,
          stem: "‘It rose from the marsh in slow grey sheets, swallowing the hedges.’ What does the verb ‘swallowing’ suggest about the fog?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That it is gentle and calming" },
              { id: "b", text: "That it is hungry and threatening" },
              { id: "c", text: "That it is warm" },
              { id: "d", text: "That it is thin and passing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Giving the fog the action of eating makes it predatory." }],
            steps: [{ reasoning: "‘Swallowing’ implies consuming, so the fog seems predatory.", evidence: "swallowing the hedges", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Hungry and threatening.",
            commonErrors: ["Choosing (a), ignoring the connotations of swallowing."],
          },
        },
        {
          id: "el10-u3-prose-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FOG,
          stem: "Explain what the sentence ‘He told himself that he was not lost’ suggests about Daniel.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference", statement: "Read between the lines of what a character says or thinks." }],
            steps: [
              { reasoning: "He is trying to reassure himself, suggesting anxiety.", evidence: "He told himself", marks: 1, markCode: "AO2" },
              { reasoning: "Needing to say it implies he does fear that he is lost.", evidence: "was not lost", marks: 1, markCode: "AO2" },
              { reasoning: "The next line, ‘The road was a road; it went somewhere’, sounds like forced confidence.", evidence: "it went somewhere", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Daniel is hiding a growing fear: he must reassure himself, which suggests he doubts it.",
            commonErrors: ["Saying he is simply confident."],
          },
        },
        {
          id: "el10-u3-prose-analysis-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FOG,
          stem: "How does the writer use sound in the second paragraph to create fear? Refer to the text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory detail", statement: "Sound makes a threat felt before it is seen." }],
            steps: [
              { reasoning: "The bell is ‘far off and flat’, an eerie, lifeless sound that is hard to place.", evidence: "far off and flat", marks: 2, markCode: "AO2" },
              { reasoning: "The sound grows closer, creating a sense of approach and rising danger.", evidence: "It sounded again, closer", marks: 2, markCode: "AO2" },
              { reasoning: "The dragging through reeds is heavy and unseen, and Daniel's reaction, a dry mouth and fragile movement, shows his fear.", evidence: "something heavy dragging through the reeds", marks: 2, markCode: "AO2" },
            ],
            levels: SHORT,
            finalAnswer: "The flat distant bell, its approach, and the unseen dragging sound create unease before any danger is visible, while Daniel's bodily fear makes the reader share it.",
            commonErrors: ["Retelling what Daniel hears."],
          },
        },
        {
          id: "el10-u3-prose-analysis-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: FOG,
          stem: "Read the extract from ‘The Salt Road’ and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two details about the horse.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the simile ‘pale as bone’.", marks: 3 },
            { label: "c", prompt: "How does the writer use sentence structure in the third paragraph to create suspense?", marks: 5 },
            { label: "d", prompt: "How does the writer create a sense of fear and mystery in the extract as a whole? Support your answer with detailed reference to the text.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Atmosphere", statement: "Setting, sound and sentence form combine to create dread." },
              { kind: "skill", name: "Whole-text focus", statement: "Comment on the opening, middle and ending." },
            ],
            steps: [
              { part: "a", reasoning: "It is enormous and pale.", evidence: "enormous and pale as bone", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Its eyes are dull amber and it does not blink.", evidence: "two coins of dull amber", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Bone suggests death.", evidence: "pale as bone", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It makes the horse seem ghostly and unnatural.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The cold image heightens Daniel's fear and the reader's.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Short sentences slow the pace.", evidence: "It did not blink.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Repetition of ‘It did not’ builds menace.", evidence: "It did not breathe", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The qualification leaves uncertainty.", evidence: "or if it did, the fog hid the breath", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The sentence about the paralysed feet delivers the climax of helplessness.", evidence: "he could not move his feet", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Personified fog swallows the world, creating isolation.", evidence: "swallowing the hedges, then the fence posts", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Denial reveals Daniel's fear.", evidence: "He told himself that he was not lost", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Sound creates unseen menace.", evidence: "something heavy dragging through the reeds", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "The horse is described as unnatural and deathly.", evidence: "pale as bone", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "The final line is a mysterious twist and cliffhanger, with a voice ‘dry as paper’ implying a lifeless speaker.", evidence: "You took your time", marks: 3, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5", descriptor: "Clear, developed analysis of sentence structure with well-chosen evidence." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some comment with some evidence." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment." },
              ...LEVELS("d", 15),
            ],
            finalAnswer: "(a) It is enormous and pale; its eyes are dull amber and it does not blink. (b) The simile links the horse with death, making it ghostly. (c) Short repetitive sentences slow the pace, a qualification leaves uncertainty, and the paralysed feet give a climax. (d) Fear and mystery come from the predatory fog, Daniel's denial, unseen sounds, the deathly horse and the cryptic final voice.",
            commonErrors: ["Retelling the story.", "Only analysing one paragraph in (d).", "Naming techniques without effect."],
          },
        },
      ],
    },
    {
      id: "el10-u3-effects-on-reader",
      title: "Writing about effects on the reader",
      skill: "Explain precisely what a reader thinks and feels and how the writer's methods produce that response.",
      lesson: {
        sections: [
          {
            heading: "Effect words",
            body: "A strong answer names a precise response: not ‘it makes the reader want to read on’ but ‘it creates unease’, ‘evokes sympathy’, ‘generates suspense’ or ‘invites admiration’. Use verbs such as *suggests*, *implies*, *conveys* and *evokes*, followed by the idea.",
          },
          {
            heading: "Linking method to effect",
            body: "Use a three-part chain: **method, evidence, effect**. In ‘The Last Stall’, the simile ‘like something he was ashamed of’ compares the folded letter with a secret, evoking sympathy for Mr Basu's private pain. The polished scales ‘nobody was there to admire’ present dedication that goes unnoticed, so the reader feels the poignancy of a life's work fading.",
          },
          {
            heading: "Considering the whole extract",
            body: "Write about movement across the text. The extract begins with decay (‘the market was dying’), turns to Mr Basu's worry, and ends with the girl and the balanced scales, a small moment of hope. Tracking this shift shows you understand structure as well as language.",
          },
        ],
        keyFormulas: [
          { name: "Method, evidence, effect", statement: "Name what the writer does, quote it briefly, state the response it creates." },
          { name: "Precise effect verbs", statement: "Evokes, conveys, implies, highlights, creates, generates." },
          { name: "Shift in mood", statement: "Track how the reader's feelings move from the opening to the ending." },
        ],
        workedExample: {
          problem: "What effect does the ending of ‘The Last Stall’ have on the reader?",
          solution: "The ending creates quiet hope and warmth. The balanced pans prove his claim that the scales ‘have never been wrong’, restoring Mr Basu's dignity, and the personification of the square, which ‘seemed to hold its breath’, suggests a moment of reverence. After the sadness of ‘the market was dying’ the reader feels comforted, even though the threat remains.",
        },
      },
      questions: [
        {
          id: "el10-u3-effects-on-reader-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MARKET,
          stem: "What does the simile ‘like something he was ashamed of’ suggest about the letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That Mr Basu is hiding his distress" },
              { id: "b", text: "That the letter is funny" },
              { id: "c", text: "That the letter is long" },
              { id: "d", text: "That Mr Basu has done something wrong to the council" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "A comparison that reveals emotion." }],
            steps: [{ reasoning: "Shame suggests he conceals his hurt, evoking sympathy.", evidence: "folded small, like something he was ashamed of", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** He is hiding his distress.",
            commonErrors: ["Choosing (d), taking ‘ashamed’ literally."],
          },
        },
        {
          id: "el10-u3-effects-on-reader-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MARKET,
          stem: "What effect does the phrase ‘the market was dying’ have on the reader?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "‘Dying’ gives the market life, then takes it away." }],
            steps: [
              { reasoning: "Metaphor presents the market as a living thing near its end.", evidence: "the market was dying", marks: 1, markCode: "AO2" },
              { reasoning: "It creates a sad, elegiac mood at the opening.", marks: 1, markCode: "AO2" },
              { reasoning: "Details like ‘bruised fruit’ and pigeons reinforce decay.", evidence: "bruised fruit", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The metaphor of dying creates sadness and a sense of decline.",
            commonErrors: ["Taking it literally."],
          },
        },
        {
          id: "el10-u3-effects-on-reader-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: MARKET,
          stem: "How does the writer make the reader feel sympathy for Mr Basu? Refer to the text.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Method, evidence, effect", statement: "Link technique to a precise reader response." }],
            steps: [
              { reasoning: "His polished scales and nobody to admire them show loneliness and unseen pride.", evidence: "polished to a shine nobody was there to admire", marks: 2, markCode: "AO2" },
              { reasoning: "His forty-one years and knowledge of the stones show the loss of a lifetime's home.", evidence: "forty-one years", marks: 2, markCode: "AO2" },
              { reasoning: "The hidden letter shows quiet shame, so he is vulnerable.", evidence: "folded small", marks: 2, markCode: "AO2" },
            ],
            levels: SHORT,
            finalAnswer: "The unadmired scales, his forty-one years, and the hidden letter present him as dedicated, rooted and quietly hurt, so the reader sympathises.",
            commonErrors: ["Listing facts without effects."],
          },
        },
        {
          id: "el10-u3-effects-on-reader-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: MARKET,
          stem: "Read the extract from ‘The Last Stall’ and answer the questions that follow.",
          parts: [
            { label: "a", prompt: "Give two details about Mr Basu's stall.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the girl's question, ‘Do they work?’", marks: 3 },
            { label: "c", prompt: "How does the writer use the last paragraph to create a hopeful mood?", marks: 5 },
            { label: "d", prompt: "How does the writer use language and structure to make the reader feel sympathy and hope? Support your answer with detailed reference to the text.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Effects on the reader", statement: "Name precise emotions and link them to methods." },
              { kind: "technique", name: "Contrast", statement: "The sadness of the opening sets off the hope of the ending." },
            ],
            steps: [
              { part: "a", reasoning: "It is the only stall still standing.", evidence: "Only Mr Basu's stall still stood", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Its brass scales are polished to a shine.", evidence: "brass scales polished to a shine", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A simple question from a child brings a note of innocence.", evidence: "Do they work?", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It gives Mr Basu a chance to show pride in his work.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It marks the turn from loneliness to connection.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The coin and apricots are small, warm, human details.", evidence: "a handful of apricots", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The balanced pans prove the scales are exact, restoring dignity.", evidence: "the pans balanced", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Personification of the square holding its breath conveys reverence.", evidence: "the square seemed to hold its breath", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Metaphor of the dying market creates sadness.", evidence: "the market was dying", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Unadmired scales show dedication unnoticed.", evidence: "nobody was there to admire", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "The letter simile reveals hidden shame.", evidence: "like something he was ashamed of", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "The girl brings contrast: youth, curiosity, connection.", evidence: "a school bag far too big for her", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Structure moves from decline to a moment of hope.", evidence: "just a moment", marks: 3, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5", descriptor: "Clear, developed analysis with well-chosen evidence." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some analysis with some evidence." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment." },
              ...LEVELS("d", 15),
            ],
            finalAnswer: "(a) It is the only stall left; its brass scales are polished. (b) The innocent question lets Mr Basu show pride and signals the turn to connection. (c) The apricots, the balanced pans and the square holding its breath create warmth and hope. (d) Decay imagery, the hidden letter and unseen dedication create sympathy, while the girl and the balanced scales shift the mood to hope.",
            commonErrors: ["Retelling without effects.", "Forgetting the shift in mood."],
          },
        },
      ],
    },
  ],
};
