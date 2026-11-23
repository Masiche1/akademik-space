import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "el10-u7-lesson-7-2",
  code: "7-2",
  title: "How Form Shapes Perspective",
  goal: "I CAN explain how poetic voice and prose narrative perspective shape a writer's viewpoint.",
  standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
  
  vocabulary: [
    { term: "Persona", definition: "The speaker or voice a poem creates, which may differ from the poet." },
    { term: "Narrative voice", definition: "The character or presence through which a prose story is told." },
    { term: "Focalisation", definition: "The perspective through which events are filtered in prose." },
    { term: "Free indirect style", definition: "Narration that blends the narrator's voice with a character's thoughts and feelings." },
    { term: "Setting", definition: "Where and when events happen; it can mirror or comment on mood and theme." },
    { term: "Stanza", definition: "A grouped set of poetic lines that organises thought and pace." },
  ],
  concepts: [
    {
      id: "el10-u7-poetic-voice",
      title: "Poetic voice and perspective",
      skill: "Analyse how a poem's voice, persona and form shape its perspective.",
      lesson: {
        sections: [
          {
            heading: "Who is speaking?",
            body: "A poem has a **persona**: the voice that speaks, which may be the poet or a created character. In 'The Last Ferry', a third-person narrator focuses closely on the captain — his knowledge of the channel, his 'quiet fee' paid to the dark. The close focalisation makes the reader share his experience and respect his skill.",
          },
          {
            heading: "Form and perspective",
            body: "Structure reinforces perspective. Three quatrains move from arrival ('fading light') to mastery ('Memory was sound') to departure ('paid the dark his quiet fee'). The short, end-stopped lines feel deliberate and controlled, echoing the captain's steady command. Repetition of 'memory' in stanza two makes knowledge itself the poem's subject.",
          },
          {
            heading: "Imagery and attitude",
            body: "The similes do double duty: the engine 'coughing like an old man's lungs' personifies decay, while 'stray dogs' eyes' makes the harbour lights seem alive but untrustworthy. The tone is elegiac — the last ferry, the last passenger — yet respectful: the captain's memory is 'sound'. Form and image together create a perspective that honours a vanishing craft.",
          },
        ],
        keyFormulas: [
          { name: "Persona", statement: "The speaking voice of a poem; may be the poet or a created figure." },
          { name: "Focalisation", statement: "Whose perceptions filter the poem's events." },
          { name: "End-stopped lines", statement: "Lines ending with punctuation slow pace and create control." },
        ],
        workedExample: {
          problem: "How does 'The Last Ferry' use voice and form to present the captain's perspective?",
          solution: "The poem focalises tightly on the captain: 'He steered by memory. Memory was sound.' The clipped, declarative lines and single-rhyme quatrains mirror his control and routine. Imagery of sickness ('coughing') and strays ('stray dogs' eyes') makes the harbour feel dying, yet the captain's competence — knowing the channel 'by its moods' — gives the elegy respect rather than pity.",
        },
      },
      questions: [
        {
          id: "el10-u7-poetic-voice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The Last Ferry",
          "author": "J. Hartley",
          "source": "Harbour Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The ferry slid beneath the fading light,\nits engine coughing like an old man's lungs.\nThe last few passengers leaned to watch\nas harbour lights came up like stray dogs' eyes.\n\nThe captain knew the channel by its moods —\nthis bend where shoals had taken trawlers down,\nthis curve where tides had torn the hull of '78.\nHe steered by memory. Memory was sound.\n\nBelow, the water swallowed all the day:\ncries of the gulls, the clink of coins, the rain\nof rust from hulls the harbour could not hold.\nHe crossed, and paid the dark his quiet fee."
},
          stem: "In 'The Last Ferry', who does the poem's perspective focus on most closely?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The ferry passengers"
                    },
                    {
                              "id": "b",
                              "text": "The harbour itself"
                    },
                    {
                              "id": "c",
                              "text": "The captain"
                    },
                    {
                              "id": "d",
                              "text": "The poet's childhood"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Focalisation",
                              "statement": "The perspective is filtered through the captain's perceptions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The poem repeatedly shows what the captain knows and does — the channel's moods, memory 'sound'.",
                              "evidence": "He steered by memory",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** The captain.",
          "commonErrors": [
                    "Choosing (a); passengers are mentioned only briefly."
          ]
},
        },
        {
          id: "el10-u7-poetic-voice-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Last Ferry",
          "author": "J. Hartley",
          "source": "Harbour Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The ferry slid beneath the fading light,\nits engine coughing like an old man's lungs.\nThe last few passengers leaned to watch\nas harbour lights came up like stray dogs' eyes.\n\nThe captain knew the channel by its moods —\nthis bend where shoals had taken trawlers down,\nthis curve where tides had torn the hull of '78.\nHe steered by memory. Memory was sound.\n\nBelow, the water swallowed all the day:\ncries of the gulls, the clink of coins, the rain\nof rust from hulls the harbour could not hold.\nHe crossed, and paid the dark his quiet fee."
},
          stem: "Explain the effect of the simile 'like stray dogs' eyes' in line 4.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Simile",
                              "statement": "A comparison that shapes how the reader sees the harbour lights."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lights are compared to the eyes of stray dogs — watchful but untrustworthy, ownerless.",
                              "evidence": "stray dogs' eyes",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This makes the harbour feel abandoned and slightly menacing, fitting the elegiac tone of the 'last ferry'.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The simile makes the harbour lights seem watchful yet untrustworthy, deepening the poem's elegiac, slightly menacing mood."
},
        },
        {
          id: "el10-u7-poetic-voice-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Last Ferry",
          "author": "J. Hartley",
          "source": "Harbour Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The ferry slid beneath the fading light,\nits engine coughing like an old man's lungs.\nThe last few passengers leaned to watch\nas harbour lights came up like stray dogs' eyes.\n\nThe captain knew the channel by its moods —\nthis bend where shoals had taken trawlers down,\nthis curve where tides had torn the hull of '78.\nHe steered by memory. Memory was sound.\n\nBelow, the water swallowed all the day:\ncries of the gulls, the clink of coins, the rain\nof rust from hulls the harbour could not hold.\nHe crossed, and paid the dark his quiet fee."
},
          stem: "How does stanza two of 'The Last Ferry' present the captain's knowledge of his work?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Repetition and listing",
                              "statement": "Listing specific dangers and repeating 'memory' show expertise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specific memories — shoals that 'taken trawlers down', tides that 'torn the hull of '78' — show experience earned through danger.",
                              "evidence": "torn the hull of '78",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The repetition of 'memory' in 'He steered by memory. Memory was sound.' makes knowledge the poem's subject.",
                              "evidence": "Memory was sound",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The clipped declarative lines mirror his certainty and control.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Stanza two shows the captain's knowledge as hard-won and reliable: concrete memories of wrecks, the repeated word 'memory', and clipped lines that sound certain."
},
        },
        {
          id: "el10-u7-poetic-voice-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Last Ferry",
          "author": "J. Hartley",
          "source": "Harbour Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The ferry slid beneath the fading light,\nits engine coughing like an old man's lungs.\nThe last few passengers leaned to watch\nas harbour lights came up like stray dogs' eyes.\n\nThe captain knew the channel by its moods —\nthis bend where shoals had taken trawlers down,\nthis curve where tides had torn the hull of '78.\nHe steered by memory. Memory was sound.\n\nBelow, the water swallowed all the day:\ncries of the gulls, the clink of coins, the rain\nof rust from hulls the harbour could not hold.\nHe crossed, and paid the dark his quiet fee."
},
          stem: "How does the structure of 'The Last Ferry' reflect the perspective it creates?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Quatrain structure",
                              "statement": "Three compact quatrains create order and ritual."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three quatrains move arrival → mastery → departure, a ritual-like shape for the last crossing.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The regular, end-stopped rhythm and repeated rhyme sounds feel controlled, like the captain's steady steering.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final line 'paid the dark his quiet fee' closes the ritual with a transaction — duty done, elegy complete.",
                              "evidence": "his quiet fee",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The three ordered quatrains and controlled rhythm mirror the captain's steady routine, and the final 'quiet fee' closes the poem like the completion of a last duty.",
          "commonErrors": [
                    "Describing structure without linking it to perspective."
          ]
},
        },
        {
          id: "el10-u7-poetic-voice-q5",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
          "title": "The Last Ferry",
          "author": "J. Hartley",
          "source": "Harbour Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The ferry slid beneath the fading light,\nits engine coughing like an old man's lungs.\nThe last few passengers leaned to watch\nas harbour lights came up like stray dogs' eyes.\n\nThe captain knew the channel by its moods —\nthis bend where shoals had taken trawlers down,\nthis curve where tides had torn the hull of '78.\nHe steered by memory. Memory was sound.\n\nBelow, the water swallowed all the day:\ncries of the gulls, the clink of coins, the rain\nof rust from hulls the harbour could not hold.\nHe crossed, and paid the dark his quiet fee."
},
          stem: "How does 'The Last Ferry' create a perspective on a vanishing way of life? Support your answer with detailed reference to the poem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Focalisation and imagery",
                              "statement": "Close focus on the captain plus elegiac imagery create a respectful perspective on loss."
                    },
                    {
                              "kind": "context",
                              "name": "Decline of traditional work",
                              "statement": "Poems often honour skills and rituals being replaced by machines."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tight focalisation on the captain makes his skill the poem's subject — knowledge 'by its moods'.",
                              "evidence": "knew the channel by its moods",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Elegiac signals — 'the last few passengers', 'the last ferry' framing — mark the craft as ending.",
                              "evidence": "the fading light",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Personification dignifies decay: the engine 'coughing like an old man's lungs' gives the ferry a human frailty.",
                              "evidence": "like an old man's lungs",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final 'quiet fee' frames his work as duty and sacrifice, earning respect rather than pity.",
                              "evidence": "paid the dark his quiet fee",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Perceptive account of voice, focalisation and imagery creating an elegiac, respectful perspective."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Clear analysis with well-chosen evidence and explained effects."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Some comment with limited evidence or effect."
                    }
          ],
          "finalAnswer": "The poem honours a vanishing craft: tight focalisation on the captain's expertise, elegiac framing of the 'last' ferry, personified frailty and a final 'quiet fee' create a respectful, elegiac perspective on loss.",
          "commonErrors": [
                    "Retelling the journey without analysing voice.",
                    "Ignoring the elegiac tone."
          ]
},
        },
        {
          id: "el10-u7-poetic-voice-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Last Ferry",
          "author": "J. Hartley",
          "source": "Harbour Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The ferry slid beneath the fading light,\nits engine coughing like an old man's lungs.\nThe last few passengers leaned to watch\nas harbour lights came up like stray dogs' eyes.\n\nThe captain knew the channel by its moods —\nthis bend where shoals had taken trawlers down,\nthis curve where tides had torn the hull of '78.\nHe steered by memory. Memory was sound.\n\nBelow, the water swallowed all the day:\ncries of the gulls, the clink of coins, the rain\nof rust from hulls the harbour could not hold.\nHe crossed, and paid the dark his quiet fee."
},
          stem: "Read 'The Last Ferry' and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two details that show the harbour is in decline.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how the poet presents the captain's relationship with his work.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "How does the poem's voice and form shape its perspective? Support your answer with detailed reference to the poem.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Voice and form",
                              "statement": "Focalisation, structure and rhythm create the poem's perspective."
                    },
                    {
                              "kind": "context",
                              "name": "Elegy",
                              "statement": "The poem mourns a vanishing way of life."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "'The fading light' and 'the last few passengers' mark the ferry's final run.",
                              "evidence": "the fading light",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'The water swallowed all the day' — decay and loss imagery ('rust', 'hulls').",
                              "evidence": "hulls the harbour could not hold",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Work is memory and duty: 'He steered by memory. Memory was sound.'",
                              "evidence": "Memory was sound",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "He 'paid the dark his quiet fee' — crossing as obligation and ritual.",
                              "evidence": "his quiet fee",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Close third-person focalisation makes us share the captain's competence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Three ordered quatrains and controlled rhythm mirror his steady routine.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Elegiac imagery — 'coughing', 'stray dogs' eyes', 'swallowed' — creates a respectful tone of loss.",
                              "evidence": "the water swallowed all the day",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Fading light, last passengers, rusting hulls and the water 'swallowing' the day. (b) Work is memory and duty — he steers by knowledge and pays the dark a 'quiet fee'. (c) Close focalisation, ordered quatrains and elegiac imagery create a respectful perspective on a vanishing way of life.",
          "commonErrors": [
                    "Describing events without linking to voice or form.",
                    "Missing the elegiac tone."
          ]
},
        },
      ],
    },
    {
      id: "el10-u7-prose-voice",
      title: "Prose narrative perspective",
      skill: "Analyse how narrative voice, focalisation and setting shape perspective in prose fiction.",
      lesson: {
        sections: [
          {
            heading: "Who tells the story?",
            body: "Prose fiction filters events through a **narrative voice**. In 'The Old Parade', the narrator stays close to the old residents: we see the shopfronts as 'blind eyes' — a judgement that belongs to people who remember what they used to see. The narration blends the narrator's voice with characters' feelings (**free indirect style**): 'though he could not say what had been lost' is Mr. Delacroix's inarticulate grief given narrative form.",
          },
          {
            heading: "Focalisation and setting",
            body: "**Focalisation** decides what we notice. The builder 'smiled' and said 'everything was being improved' — through the residents' eyes, this is empty optimism. Setting reinforces perspective: 'scaffolding wore a new face' personifies construction as disguise; the 'demolished cinema's name... pale as a scar' makes memory physical. The perspective is sympathetic to the displaced.",
          },
          {
            heading: "Comparing prose and poetry",
            body: "Where a poem compresses attitude into image, prose can build scenes and voices. 'The Old Parade' dramatises disagreement — residents versus builder — where 'Regeneration' meditated on it. Both mourn loss, but prose shows it through dialogue and gesture.",
          },
        ],
        keyFormulas: [
          { name: "Narrative voice", statement: "The presence through which the story is told; may be a character or an unseen narrator." },
          { name: "Free indirect style", statement: "Narration coloured by a character's thoughts, blurring narrator and character." },
          { name: "Setting", statement: "Place and time that mirror mood, theme or attitude." },
        ],
        workedExample: {
          problem: "How does 'The Old Parade' use narrative perspective to shape the reader's view of regeneration?",
          solution: "The narration focalises through the old residents: shopfronts are 'blind eyes' (a mourner's judgement), Mr. Delacroix's grief is voiced in free indirect style ('could not say what had been lost'), and the builder's 'everything was being improved' reads as empty optimism. The scar-like cinema name on a brick makes loss physical. The perspective is sympathetic to those displaced.",
        },
      },
      questions: [
        {
          id: "el10-u7-prose-voice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The Old Parade",
          "author": "R. Salter",
          "source": "Harbour Stories (fictional anthology)",
          "text": "For years the parade had stood empty, its shopfronts like blind eyes. Then the developers came, and by spring the scaffolding wore a new face. The old residents gathered at the gate, watching men in hi-vis lift paving slabs one by one. 'It is not the same,' said Mr. Delacroix, though he could not say what had been lost. The builder smiled and said everything was being improved. Behind them, the demolished cinema's name still showed on a brick, pale as a scar."
},
          stem: "In 'The Old Parade', whose perspective does the narration most closely follow?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The builder's"
                    },
                    {
                              "id": "b",
                              "text": "The old residents'"
                    },
                    {
                              "id": "c",
                              "text": "The cinema owner's"
                    },
                    {
                              "id": "d",
                              "text": "An entirely neutral observer's"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Focalisation",
                              "statement": "Events are filtered through the old residents' perceptions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "We see 'blind eyes' shopfronts and Mr. Delacroix's grief — the residents' view of events.",
                              "evidence": "like blind eyes",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The old residents'.",
          "commonErrors": [
                    "Choosing (d); the narration is sympathetic, not neutral."
          ]
},
        },
        {
          id: "el10-u7-prose-voice-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Old Parade",
          "author": "R. Salter",
          "source": "Harbour Stories (fictional anthology)",
          "text": "For years the parade had stood empty, its shopfronts like blind eyes. Then the developers came, and by spring the scaffolding wore a new face. The old residents gathered at the gate, watching men in hi-vis lift paving slabs one by one. 'It is not the same,' said Mr. Delacroix, though he could not say what had been lost. The builder smiled and said everything was being improved. Behind them, the demolished cinema's name still showed on a brick, pale as a scar."
},
          stem: "What does the image 'shopfronts like blind eyes' suggest about the parade?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Simile",
                              "statement": "Comparing shopfronts to blind eyes personifies decay."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Blind eyes cannot see — the empty shops are rendered as sightless, lifeless faces.",
                              "evidence": "like blind eyes",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It conveys abandonment and loss, matching the residents' nostalgic perspective.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The simile makes the empty shops seem dead and sightless, conveying abandonment from the residents' mournful perspective."
},
        },
        {
          id: "el10-u7-prose-voice-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Old Parade",
          "author": "R. Salter",
          "source": "Harbour Stories (fictional anthology)",
          "text": "For years the parade had stood empty, its shopfronts like blind eyes. Then the developers came, and by spring the scaffolding wore a new face. The old residents gathered at the gate, watching men in hi-vis lift paving slabs one by one. 'It is not the same,' said Mr. Delacroix, though he could not say what had been lost. The builder smiled and said everything was being improved. Behind them, the demolished cinema's name still showed on a brick, pale as a scar."
},
          stem: "How does the writer use dialogue to present different viewpoints in 'The Old Parade'?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dialogue",
                              "statement": "Direct speech lets characters voice conflicting attitudes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mr. Delacroix voices loss: 'It is not the same' — plain, colloquial, heartfelt.",
                              "evidence": "It is not the same",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The builder counters with optimism: 'everything was being improved' — official, reassuring language.",
                              "evidence": "everything was being improved",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The contrast dramatises the clash between memory and progress.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Dialogue stages the conflict: the resident's blunt 'It is not the same' against the builder's reassuring 'everything was being improved', dramatising memory versus progress."
},
        },
        {
          id: "el10-u7-prose-voice-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Old Parade",
          "author": "R. Salter",
          "source": "Harbour Stories (fictional anthology)",
          "text": "For years the parade had stood empty, its shopfronts like blind eyes. Then the developers came, and by spring the scaffolding wore a new face. The old residents gathered at the gate, watching men in hi-vis lift paving slabs one by one. 'It is not the same,' said Mr. Delacroix, though he could not say what had been lost. The builder smiled and said everything was being improved. Behind them, the demolished cinema's name still showed on a brick, pale as a scar."
},
          stem: "How does the ending of 'The Old Parade' shape the reader's final impression of regeneration?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Closing image",
                              "statement": "The final image often carries the story's judgement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The cinema's name 'still showed on a brick' — memory survives physically even after demolition.",
                              "evidence": "the demolished cinema's name",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Pale as a scar' turns the trace into a wound — regeneration leaves marks on the community.",
                              "evidence": "pale as a scar",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Ending on this image leaves regeneration unresolved: improvement has happened, but so has damage.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The scar-like trace of the cinema's name leaves regeneration feeling like a wound: memory survives in the fabric of the place, and the damage is unresolved.",
          "commonErrors": [
                    "Summarising the ending without analysing the image."
          ]
},
        },
        {
          id: "el10-u7-prose-voice-q5",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
          "title": "The Old Parade",
          "author": "R. Salter",
          "source": "Harbour Stories (fictional anthology)",
          "text": "For years the parade had stood empty, its shopfronts like blind eyes. Then the developers came, and by spring the scaffolding wore a new face. The old residents gathered at the gate, watching men in hi-vis lift paving slabs one by one. 'It is not the same,' said Mr. Delacroix, though he could not say what had been lost. The builder smiled and said everything was being improved. Behind them, the demolished cinema's name still showed on a brick, pale as a scar."
},
          stem: "How does 'The Old Parade' use narrative perspective and setting to present regeneration? Support your answer with detailed reference to the text.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Focalisation and free indirect style",
                              "statement": "The narration filters events through the residents' feelings."
                    },
                    {
                              "kind": "context",
                              "name": "Gentrification",
                              "statement": "Regeneration often displaces established communities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Focalisation through the residents: 'blind eyes' and Mr. Delacroix's 'could not say what had been lost' give their grief narrative form.",
                              "evidence": "could not say what had been lost",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Setting personifies change: scaffolding 'wore a new face' — disguise, not renewal.",
                              "evidence": "wore a new face",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The builder's polite optimism — 'everything was being improved' — is undercut by the sympathetic focalisation.",
                              "evidence": "everything was being improved",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The closing 'scar' image fixes the perspective: regeneration is damage as much as improvement.",
                              "evidence": "pale as a scar",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Perceptive analysis of focalisation, free indirect style and setting creating a sympathetic perspective."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Clear analysis with well-chosen evidence and explained effects."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Some comment with limited evidence or effect."
                    }
          ],
          "finalAnswer": "The narration focalises through the old residents — 'blind eyes', inarticulate grief, scaffolding in a 'new face' — so regeneration reads as disguise and loss, sealed by the cinema name 'pale as a scar'.",
          "commonErrors": [
                    "Treating the narration as neutral.",
                    "Ignoring free indirect style."
          ]
},
        },
        {
          id: "el10-u7-prose-voice-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Old Parade",
          "author": "R. Salter",
          "source": "Harbour Stories (fictional anthology)",
          "text": "For years the parade had stood empty, its shopfronts like blind eyes. Then the developers came, and by spring the scaffolding wore a new face. The old residents gathered at the gate, watching men in hi-vis lift paving slabs one by one. 'It is not the same,' said Mr. Delacroix, though he could not say what had been lost. The builder smiled and said everything was being improved. Behind them, the demolished cinema's name still showed on a brick, pale as a scar."
},
          stem: "Read 'The Old Parade' and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two ways the setting shows the parade's decline before redevelopment.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how free indirect style presents Mr. Delacroix's feelings.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "How does the writer's narrative perspective shape the reader's view of regeneration? Support your answer with detailed reference to the text.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Setting and voice",
                              "statement": "Place imagery and focalisation together build the story's perspective."
                    },
                    {
                              "kind": "skill",
                              "name": "Analysing narrative perspective",
                              "statement": "Explain whose eyes filter events and what that does to meaning."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "'For years the parade had stood empty' — prolonged abandonment.",
                              "evidence": "stood empty",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "'Shopfronts like blind eyes' — the street rendered sightless and dead.",
                              "evidence": "like blind eyes",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Free indirect style blends narration with his feelings: 'though he could not say what had been lost'.",
                              "evidence": "could not say what had been lost",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "His spoken 'It is not the same' is plain and colloquial — grief too big for words.",
                              "evidence": "It is not the same",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Focalisation through residents makes 'blind eyes' and the 'new face' of scaffolding their judgements.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The builder's optimism is filtered through this sympathetic view, so it sounds hollow.",
                              "evidence": "everything was being improved",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The closing 'scar' image confirms the perspective: regeneration as damage and memory.",
                              "evidence": "pale as a scar",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Years of emptiness; 'blind eyes' shopfronts. (b) Free indirect style voices his inarticulate grief — he feels loss he cannot name. (c) The residents' focalisation makes regeneration read as disguise and damage, from 'blind eyes' to the cinema's 'scar'.",
          "commonErrors": [
                    "Ignoring focalisation.",
                    "Quoting without linking to perspective."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u7-form-perspective-notes",
      title: "Form and perspective — notes",
      summary: "Poems create perspective through persona and compressed form; prose through narrative voice, focalisation and setting.",
      sections: [
        { heading: "Poetry", body: "Ask who speaks, what the form's rhythm suggests, and which images carry attitude." },
        { heading: "Prose", body: "Ask whose eyes filter events (focalisation) and how dialogue and setting voice conflicting views." },
      ],
    },
  ],
};
