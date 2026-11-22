import type { Lesson, TextExtract } from "../../../types.ts";

const FOG_STREET: TextExtract = {
  title: "The Lamplighter's Round",
  author: "Written for Akademik Space",
  source: "Original passage in the style of a nineteenth-century novel",
  text: "The fog came up from the river that evening like a great grey beast, creeping on its belly through the alleys of Wapping and pressing its damp muzzle against every window. Lamps that had been lit an hour since shone only as bruised yellow smudges, and the cobbles, slick with soot and sleet, rang hollow beneath the boots of the few who dared the streets.\n\nOld Josiah Crane went about his rounds as he had done for forty years, his long pole upon his shoulder and his lantern swinging, and he muttered to each lamp as he passed it, as a shepherd might to his flock. He was bent and wizened, and his breath hung before him in ragged clouds. Yet there was something almost tender in the way he lifted the glass and coaxed the flame to life, cupping it in his gnarled hands as one might shelter a sparrow.\n\nAt the corner of Mercer Lane a child stood shivering in a doorway. Josiah paused. For a moment the only sound was the drip of the gutters and the far-off groan of a ship's horn. Then, without a word, he drew a crust of bread from his pocket, and pressed it into the small, blue hand.",
};

const FIRST_PERSON: TextExtract = {
  title: "A Confession",
  author: "Written for Akademik Space",
  source: "Original passage in the style of a nineteenth-century novel",
  text: "I have never been able to look upon the old house at Ravensmere without a certain chill, and I will tell you plainly why. It was not that the place was ugly, for it was not; it was a handsome enough pile of grey stone, with ivy upon its gables and a fine avenue of limes before the door. It was rather that I had once been wicked within its walls, and the walls, I fancied, remembered.\n\nI was twelve years old. My cousin Edmund, who was my elder by two years and in every respect my superior, had taken from the library a small silver watch that belonged to our grandfather. I saw him do it. When the loss was discovered and the whole household summoned, I stood silent while the blame fell, as I knew it would, upon the kitchen boy, a pale, freckled lad named Tom Bickley. I told myself it was not my affair. I told myself a great many things.\n\nTom was dismissed that very night. I watched from the nursery window as he crossed the lawn with his bundle, and he did not once look back; and I confess, reader, that I have thought of that bundle every day since.",
};

export const lesson12: Lesson = {
  id: "el9-u1-lesson-1-2",
  code: "1-2",
  title: "Language Analysis and Narrative Voice",
  goal: "I CAN analyse how a writer's language choices create effects using accurate terminology, and explain how narrative voice shapes the reader's response.",
  standards: ["KS3 Reading", "AO2"],
  vocabulary: [
    { term: "Personification", definition: "Giving human qualities or actions to something that is not human." },
    { term: "Metaphor", definition: "Describing something as if it actually is something else, to suggest similarities." },
    { term: "Simile", definition: "A comparison using 'like' or 'as'." },
    { term: "Semantic field", definition: "A group of words linked by a shared topic or area of meaning." },
    { term: "First-person narrator", definition: "A narrator who is a character in the story and tells it using 'I'." },
    { term: "Third-person narrator", definition: "An outside narrator who describes characters using 'he', 'she' and 'they'." },
    { term: "Unreliable narrator", definition: "A narrator whose account the reader has reason to doubt." },
  ],
  concepts: [
    {
      id: "el9-u1-language-terminology",
      title: "Analysing language with terminology",
      skill: "Identify language techniques accurately and explain the effect of specific word choices in context.",
      lesson: {
        sections: [
          {
            heading: "Technique, evidence, effect",
            body: "Naming a technique earns little on its own. A strong analytical sentence has three parts: the **technique** (what the writer does), the **evidence** (a short quotation) and the **effect** (what it makes the reader think, see or feel, and why). Aim to zoom in on a single powerful word within your quotation and explore its connotations.",
          },
          {
            heading: "Building a precise vocabulary of analysis",
            body: "Use accurate terms: personification, metaphor, simile, semantic field, verb choice, adjective, alliteration, sibilance, juxtaposition. Then use analytical verbs such as 'suggests', 'implies', 'evokes', 'reinforces' and 'conveys' rather than 'shows'. Compare 'The fog is personified' with 'The fog is personified as a beast, whose \"muzzle\" implies it is predatory and that the city is prey.'",
          },
        ],
        keyFormulas: [
          { name: "Personification", statement: "Human or animal qualities given to non-human things, such as fog with a 'muzzle'." },
          { name: "Semantic field", statement: "A cluster of related words that build one idea, such as predator imagery." },
          { name: "Zooming in", statement: "Select one word in a quotation and explore its connotations." },
        ],
        workedExample: {
          problem: "How does the writer present the fog in the first paragraph of 'The Lamplighter's Round'?",
          solution: "The writer presents the fog as a threatening, living creature. The simile 'like a great grey beast' immediately gives it size and menace, while the verb 'creeping' suggests stealth, as if it is stalking the streets. The personified 'damp muzzle' pressing against windows implies it is hunting for a way in, which makes the people inside seem like vulnerable prey. The word 'bruised' to describe the lamplight further suggests the fog has damaged the light, as if it were a victim of violence.",
        },
      },
      questions: [
        {
          id: "el9-u1-language-terminology-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FOG_STREET,
          stem: "'pressing its damp muzzle against every window'. Which technique is mainly used here?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alliteration" },
              { id: "b", text: "Personification" },
              { id: "c", text: "Onomatopoeia" },
              { id: "d", text: "Rhetorical question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "Giving human or animal qualities to something non-living." }],
            steps: [{ reasoning: "The fog is given a 'muzzle' and acts like an animal, so this is personification (animal imagery).", evidence: "its damp muzzle", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Personification: the fog is given an animal's muzzle and behaves like a creature.",
            commonErrors: ["Choosing alliteration because 'damp muzzle' and 'against' look similar; no repeated initial consonant is the key technique.", "Choosing onomatopoeia because 'pressing' sounds physical."],
          },
        },
        {
          id: "el9-u1-language-terminology-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FOG_STREET,
          stem: "Explain the effect of the word 'bruised' in 'bruised yellow smudges'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Metaphorical adjective", statement: "A word from one context applied to another to create a vivid image." },
              { kind: "skill", name: "Zooming in", statement: "Focus on a single word and explore its connotations." },
            ],
            steps: [
              { reasoning: "'Bruised' is normally applied to injured skin; applied to light it suggests the lamplight has been hurt or damaged by the fog.", evidence: "bruised yellow smudges", marks: 1, markCode: "AO2" },
              { reasoning: "It connotes pain and weakness, so the light seems fragile and the fog powerful.", evidence: "bruised", marks: 1, markCode: "AO2" },
              { reasoning: "It adds to the oppressive, unhealthy atmosphere of the scene; 'smudges' reinforces the blurred, indistinct image.", evidence: "smudges", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "'Bruised' suggests the light has been hurt by the fog, as skin is by a blow. This makes the light seem weak and the fog violent, creating an oppressive atmosphere; 'smudges' adds to the sense of blurred, dim light.",
            commonErrors: ["Simply saying 'it describes the light'.", "Naming it as a 'metaphor' with no discussion of effect.", "Quoting the whole sentence rather than focusing on one word."],
          },
        },
        {
          id: "el9-u1-language-terminology-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FOG_STREET,
          stem: "How does the writer use language in the second paragraph to present Josiah Crane? You should refer to at least two language techniques.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Simile and pastoral imagery", statement: "Comparisons that cast a character in a gentle, caring role." },
              { kind: "technique", name: "Contrast", statement: "Juxtaposing a harsh appearance with a gentle action to reveal character." },
              { kind: "skill", name: "Zooming in", statement: "Analyse individual words for connotation." },
            ],
            steps: [
              { reasoning: "The simile 'as a shepherd might to his flock' presents Josiah as caring and protective; the lamps are like a flock, suggesting devotion to his duty.", evidence: "as a shepherd might to his flock", marks: 2, markCode: "AO2" },
              { reasoning: "'Bent and wizened' and 'gnarled' emphasise age and hardship, using adjectives which suggest a rough, weathered figure.", evidence: "bent and wizened", marks: 1, markCode: "AO2" },
              { reasoning: "Contrast: 'almost tender' with 'gnarled hands' reveals his gentleness beneath a harsh exterior.", evidence: "almost tender", marks: 1, markCode: "AO2" },
              { reasoning: "The simile 'shelter a sparrow' implies his care for fragile things, suggesting kindness and foreshadowing his gift to the child.", evidence: "as one might shelter a sparrow", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { level: "Level 3", marks: "5-6", descriptor: "Clear, well-chosen analysis of at least two techniques with developed comment on effect." },
              { level: "Level 2", marks: "3-4", descriptor: "Some understanding of techniques with some relevant comment on effect." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited identification of language with little or no comment on effect." },
            ],
            finalAnswer: "Josiah is presented as gentle and devoted. The shepherd simile suggests protective care; the contrast between 'bent and wizened' and the 'almost tender' lifting of the glass shows a kind nature beneath a hard exterior, and the sparrow simile reinforces how delicately he handles fragile things.",
            commonErrors: ["Listing techniques with no effect.", "Only discussing his appearance.", "Misreading 'wizened' as positive."],
          },
        },
        {
          id: "el9-u1-language-terminology-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: FOG_STREET,
          stem: "Read the extract again and answer the questions below.",
          parts: [
            { label: "a", prompt: "Write down two animal images used in the extract.", marks: 2 },
            { label: "b", prompt: "Explain what the verb 'rang' suggests about the streets in the first paragraph.", marks: 4 },
            { label: "c", prompt: "How does the writer present Josiah's kindness to the child in the last paragraph? Refer to specific words and phrases.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Semantic field", statement: "A cluster of related words building an idea; here animal imagery." },
              { kind: "technique", name: "Contrast of sound and silence", statement: "Sound details used to heighten stillness and emotion." },
              { kind: "skill", name: "PEE / PETAL", statement: "Point, evidence, technique, analysis, link back to the question." },
            ],
            steps: [
              { part: "a", reasoning: "The fog as a 'great grey beast'.", evidence: "like a great grey beast", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Any second: 'belly', 'muzzle', 'shepherd/flock' or 'sparrow'.", evidence: "its damp muzzle", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Rang hollow' implies emptiness: the streets are deserted so that every footstep echoes.", evidence: "rang hollow beneath the boots", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It also creates an eerie, lonely atmosphere; the hollowness suggests the city is unwelcoming and cold.", evidence: "the few who dared the streets", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The pause and silence ('For a moment the only sound...') build a hushed, tender atmosphere, drawing the reader's focus onto the moment of kindness.", evidence: "For a moment the only sound was the drip of the gutters", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The child is presented as vulnerable through 'shivering' and the 'small, blue hand', with blue implying coldness and neglect.", evidence: "the small, blue hand", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Josiah acts 'without a word': his generosity is quiet and selfless, with no show or expectation of thanks.", evidence: "without a word", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The verb 'pressed' suggests gentle insistence; the 'crust of bread' shows he gives what little he has, contrasting with the hostile fog and harsh city.", evidence: "pressed it into the small, blue hand", marks: 3, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 5", marks: "9-10", descriptor: "Perceptive, discriminating analysis of specific words and phrases; assured exploration of effects across the paragraph." },
              { part: "c", level: "Level 4", marks: "7-8", descriptor: "Thorough analysis; well-chosen quotations with developed comment on language." },
              { part: "c", level: "Level 3", marks: "5-6", descriptor: "Clear, relevant analysis with appropriate use of terminology." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some understanding; some relevant references with limited explanation." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments with few references." },
            ],
            finalAnswer: "(a) 'great grey beast'; 'muzzle' (or 'shepherd/flock', 'sparrow'). (b) 'Rang hollow' implies empty, echoing streets, an eerie loneliness. (c) The hush ('the only sound was the drip of the gutters') focuses attention on his act; the child's 'small, blue hand' stresses vulnerability; 'without a word' shows quiet selflessness; and 'pressed' with the 'crust of bread' shows he gives what little he has, a warm contrast to the hostile fog.",
            commonErrors: ["Writing about the fog in part (c).", "Only retelling Josiah's actions.", "Identifying 'blue' as a colour with no inference about cold and neglect."],
          },
        },
      ],
    },
    {
      id: "el9-u1-narrative-voice-perspective",
      title: "Narrative voice and perspective",
      skill: "Explain how a narrator's voice and viewpoint shape the reader's response and judgement of events.",
      lesson: {
        sections: [
          {
            heading: "Who is telling the story?",
            body: "A **first-person** narrator ('I') gives intimate access to thoughts but only one limited viewpoint, so we must ask whether they are honest, biased or hiding something. A **third-person** narrator can stand back and describe several characters, and may be omniscient (all-knowing) or limited to one character's perspective. Nineteenth-century novels often have narrators who speak directly to the reader ('reader, I confess...').",
          },
          {
            heading: "Voice, tone and the reader's response",
            body: "Voice is created by vocabulary, sentence structure and tone. A formal, long-sentenced, confessional voice makes events seem serious and considered. Ask: does the narrator seem sorry, proud, defensive? Is the reader invited to sympathise or to judge? Look for signs of unreliability, such as excuses ('I told myself it was not my affair') that reveal the gap between what the narrator says and what they feel.",
          },
        ],
        keyFormulas: [
          { name: "First-person narrator", statement: "Uses 'I'; offers intimacy but a single, possibly biased viewpoint." },
          { name: "Direct address", statement: "The narrator speaks to the reader, creating confession or intimacy." },
          { name: "Unreliable narration", statement: "Excuses, contradictions or self-deception that make the reader doubt the account." },
        ],
        workedExample: {
          problem: "How does the narrator's voice make you feel about the narrator in 'A Confession'?",
          solution: "The narrator's formal, confessional voice ('I will tell you plainly why') invites trust, while the admission 'I had once been wicked' shows honest self-judgement. However, the repeated excuses, 'I told myself it was not my affair. I told myself a great many things', reveal self-deception at the time and lasting guilt. The direct address 'reader' draws us in as a confidant, so we feel both disapproval of the child's cowardice and sympathy for an adult who still suffers remorse.",
        },
      },
      questions: [
        {
          id: "el9-u1-narrative-voice-perspective-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FIRST_PERSON,
          stem: "What type of narrator is used in this extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A second-person narrator addressing a character as 'you'" },
              { id: "b", text: "A third-person narrator limited to Tom's thoughts" },
              { id: "c", text: "An omniscient third-person narrator" },
              { id: "d", text: "A first-person narrator looking back on the past" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Narrative viewpoint", statement: "First person uses 'I' and tells events from the narrator's own experience." }],
            steps: [{ reasoning: "The narrator uses 'I' and remembers events from childhood, so this is retrospective first-person narration.", evidence: "I have never been able to look upon the old house", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** First-person narrator looking back; shown by 'I' and past tense memories.",
            commonErrors: ["Choosing (d) because the narrator addresses 'reader'; that is direct address, not second-person narration."],
          },
        },
        {
          id: "el9-u1-narrative-voice-perspective-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FIRST_PERSON,
          stem: "What does the sentence 'I told myself a great many things' suggest about the narrator's feelings at the time?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Self-deception", statement: "A narrator uses excuses to avoid facing guilt." },
              { kind: "skill", name: "Inference", statement: "Explain what a phrase implies, not just what it says." },
            ],
            steps: [
              { reasoning: "The vague 'a great many things' suggests the narrator made excuses to justify staying silent.", evidence: "I told myself a great many things", marks: 1, markCode: "AO1" },
              { reasoning: "The repetition of 'I told myself' shows he knew deep down it was wrong and needed to persuade himself.", evidence: "I told myself it was not my affair", marks: 1, markCode: "AO2" },
              { reasoning: "The short, understated sentence hints at guilt and discomfort that the narrator still feels.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The narrator made excuses to ease a guilty conscience. The repeated 'I told myself' shows he knew he was wrong, and the short sentence hints at lingering shame.",
            commonErrors: ["Taking it literally as 'he talked to himself' with no inference.", "Saying he felt no guilt."],
          },
        },
        {
          id: "el9-u1-narrative-voice-perspective-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FIRST_PERSON,
          stem: "How does the writer use the narrator's voice to make the reader feel sympathy and disapproval at the same time?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Retrospective first-person narration", statement: "An adult narrator judges their younger self, creating guilt and reflection." },
              { kind: "technique", name: "Direct address", statement: "Speaking to 'reader' makes the confession intimate." },
            ],
            steps: [
              { reasoning: "The confessional opening ('I will tell you plainly') presents the narrator as honest, encouraging trust.", evidence: "I will tell you plainly why", marks: 1, markCode: "AO2" },
              { reasoning: "Disapproval: the narrator stood 'silent' while an innocent boy was blamed, and the childish excuse reveals cowardice.", evidence: "I stood silent while the blame fell", marks: 2, markCode: "AO2" },
              { reasoning: "Sympathy: personification of the 'walls' that 'remembered' and the daily memory of the bundle show lasting remorse.", evidence: "the walls, I fancied, remembered", marks: 1, markCode: "AO2" },
              { reasoning: "Direct address 'reader' and the confession 'I confess' draws us in as a confidant to judge or forgive.", evidence: "I confess, reader", marks: 1, markCode: "AO2" },
              { reasoning: "The image of Tom's silent departure, who 'did not once look back', stresses injustice and deepens the narrator's guilt.", evidence: "he did not once look back", marks: 1, markCode: "AO2" },
            ],
            levels: [
              { level: "Level 3", marks: "5-6", descriptor: "Clear, developed analysis of how voice creates both responses, with well-chosen quotations." },
              { level: "Level 2", marks: "3-4", descriptor: "Some understanding of voice; some relevant comment on one or both responses." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple comments on the narrator with little reference to voice or effect." },
            ],
            finalAnswer: "The confessional first-person voice, with direct address ('I confess, reader'), invites us to judge the child who 'stood silent' while Tom was blamed, yet the adult's lasting remorse, 'I have thought of that bundle every day since', draws sympathy. We disapprove of the cowardice but pity the guilt.",
            commonErrors: ["Dealing with only sympathy or only disapproval.", "Retelling the plot instead of analysing voice.", "Failing to name the narrator type."],
          },
        },
        {
          id: "el9-u1-narrative-voice-perspective-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: FIRST_PERSON,
          stem: "Read the extract again and answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two details which show the house at Ravensmere is outwardly impressive.", marks: 2 },
            { label: "b", prompt: "Explain what the narrator means by 'the walls, I fancied, remembered'.", marks: 4 },
            { label: "c", prompt: "How does the writer present Tom Bickley and the narrator's treatment of him in the third paragraph?", marks: 6 },
            { label: "d", prompt: "The narrator says 'I told myself it was not my affair.' To what extent is the narrator a reliable guide to what happened? Refer to the whole extract.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Narrator reliability", statement: "Evaluate whether the narrator's account is trustworthy or self-serving." },
              { kind: "technique", name: "Personification", statement: "Walls given the ability to remember, reflecting the narrator's guilt." },
              { kind: "skill", name: "Evaluation", statement: "Give a balanced judgement supported by evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Any detail: handsome grey stone.", evidence: "a handsome enough pile of grey stone", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Any second detail: ivy on gables or fine avenue of limes.", evidence: "a fine avenue of limes", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Personification: the walls are imagined as witnesses with a memory.", evidence: "the walls, I fancied, remembered", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It shows the narrator feels haunted by guilt: the place symbolises his wrongdoing.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'I fancied' shows he knows this is imaginary: the real cause is his own conscience.", evidence: "I fancied", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It explains the chill he feels at the start despite the house not being ugly.", evidence: "a certain chill", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Tom is presented as innocent and powerless: 'pale, freckled lad' and 'kitchen boy' mark him as low status and vulnerable.", evidence: "a pale, freckled lad named Tom Bickley", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "He is unfairly blamed and 'dismissed that very night', showing the swift injustice of the household.", evidence: "Tom was dismissed that very night", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The narrator watches passively 'from the nursery window', showing distance and cowardice; Tom 'did not once look back' stresses his dignity and loss.", evidence: "from the nursery window", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Reliable: the narrator frankly admits wickedness ('I had once been wicked'), and the confessional tone suggests honesty.", evidence: "I had once been wicked within its walls", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Reliable: he does not hide that he saw Edmund take the watch or that he stayed silent.", evidence: "I saw him do it", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Less reliable: his excuses at the time show self-deception, and he may exaggerate his guilt with the fanciful 'walls remembered', plus his admiration of Edmund as 'my superior' may colour his account.", evidence: "in every respect my superior", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Balanced judgement: largely reliable because he condemns himself; his unreliability lies in the child's rationalisations, not the adult's account.", marks: 2, markCode: "AO1" },
            ],
            levels: [
              { part: "c", level: "Level 3", marks: "5-6", descriptor: "Clear, relevant analysis of presentation with well-chosen quotations." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some understanding and some relevant references." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments." },
              { part: "d", level: "Level 4", marks: "7-8", descriptor: "Perceptive, balanced evaluation with thoroughly selected evidence from across the extract." },
              { part: "d", level: "Level 3", marks: "5-6", descriptor: "Clear evaluation supported by relevant evidence." },
              { part: "d", level: "Level 2", marks: "3-4", descriptor: "Some evaluation; some relevant references but one-sided." },
              { part: "d", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment with little evidence." },
            ],
            finalAnswer: "(a) 'handsome ... grey stone'; 'a fine avenue of limes'. (b) Personification: his guilty conscience makes the walls seem like witnesses; 'I fancied' admits it is imagined. (c) Tom is vulnerable and low-status ('kitchen boy', 'pale, freckled'), blamed and dismissed at once, and the narrator watches passively. (d) Largely reliable because he openly condemns himself and admits he saw the theft, but the childhood excuses show self-deception and his awe of Edmund may colour the account; on balance he is an honest but troubled narrator.",
            commonErrors: ["Giving a one-sided answer in (d).", "Treating the narrator as a separate person from 'the writer'.", "Describing Tom's story without analysing language."],
          },
        },
      ],
    },
  ],
};
