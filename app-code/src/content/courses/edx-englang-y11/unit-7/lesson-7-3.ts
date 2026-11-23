import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "el11-u7-lesson-7-3",
  code: "7-3",
  title: "Context, Theme and Comparing Poems",
  goal: "I CAN place poems in context, identify themes, and compare two poems evaluatively.",
  standards: ["4EA1 Paper 1", "4EA1 AO1", "4EA1 AO4"],
  
  vocabulary: [
    { term: "Context", definition: "The circumstances - historical, social, personal - in which a poem was written and read." },
    { term: "Theme", definition: "The central idea or subject a poem explores." },
    { term: "Mood", definition: "The emotional atmosphere created for the reader." },
    { term: "Juxtaposition", definition: "Placing two contrasting elements side by side to sharpen meaning." },
    { term: "Evaluation", definition: "Judging the effectiveness or significance of a choice, not just describing it." },
    { term: "Linking", definition: "Connecting points about one text to points about another in a comparison." },
  ],
  concepts: [
    {
      id: "el11-u7-context",
      title: "Context and theme",
      skill: "Identify a poem's theme and relate it to context without letting context overwhelm the text.",
      lesson: {
        sections: [
          {
            heading: "Finding the theme",
            body: "A theme is what the poem is about at its deepest level - memory, loss, displacement, the passage of time. In 'The Photograph' the theme is how memory preserves and distorts: 'The photograph is sharper than my memory of it' states it directly, and 'the light goes through her, briefly, as if she were made of something thinner than emulsion' turns the image into a meditation on impermanence.",
          },
          {
            heading: "Context done properly",
            body: "Context means the world around the poem: when it was written, what it might be responding to, what its audience would recognise. For an unseen poem in the exam, you rarely know the exact context - so infer it from clues inside the text: 'My grandmother smiles with her teeth missing' suggests an ordinary family photograph, perhaps mid-20th century; 'the light goes through her' uses old photographic language ('emulsion') that roots the poem in the analogue era. Use context as a lens, not a substitute for reading.",
          },
          {
            heading: "Theme and mood",
            body: "Theme is the idea; mood is the feeling. 'The Photograph' is about memory but its mood is tender and slightly uncanny - the speaker sees the grandmother as 'made of something thinner', almost ghostly. A strong answer separates the two: name the theme, then show how the imagery creates the mood that carries it.",
          },
        ],
        keyFormulas: [
          { name: "Theme", statement: "The central idea a poem explores, deeper than its literal subject." },
          { name: "Context", statement: "The circumstances surrounding a text's creation and reception." },
          { name: "Mood", statement: "The emotional atmosphere a poem creates for the reader." },
        ],
        workedExample: {
          problem: "What is the theme of 'The Photograph', and how does context shape its meaning?",
          solution: "The theme is memory's power and fragility: the photograph outlasts and out-sharpens the speaker's own recollection. The context is domestic and analogue - a family photograph, 'yellowed at the edges like toast', 'emulsion', lamplight - so the poem belongs to an era when photographs were precious, singular objects. That context makes the theme poignant: in a world of disposable images, this one is handled with ritual care ('I look at her hands first'), so memory is figured as something physical, fragile and luminous.",
        },
      },
      questions: [
        {
          id: "el11-u7-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "Read 'The Photograph'. What is the poem mainly about?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A family arguing about an old photograph."
                    },
                    {
                              "id": "b",
                              "text": "How a photograph preserves memory, and how memory itself distorts it."
                    },
                    {
                              "id": "c",
                              "text": "The technical process of developing film."
                    },
                    {
                              "id": "d",
                              "text": "A grandmother teaching photography."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Theme identification",
                              "statement": "The theme is the poem's central idea, deeper than its subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The poem contrasts the photograph's sharpness with the speaker's memory and ends on the light passing 'through her' - memory and image.",
                              "evidence": "sharper than my memory of it",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** How a photograph preserves memory while memory itself is less reliable - the poem is about the relationship between image and remembrance.",
          "commonErrors": [
                    "Choosing (a): no argument occurs in the poem."
          ]
},
        },
        {
          id: "el11-u7-context-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "What does the detail 'the light goes through her, briefly, as if she were made of something thinner than emulsion' suggest about how the speaker sees the grandmother?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imagery of transparency",
                              "statement": "Light passing through a figure makes her seem insubstantial or ghostly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The grandmother becomes translucent - light passes through her - so she seems made of light or almost not physically present.",
                              "evidence": "the light goes through her, briefly",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'thinner than emulsion' ties her to the photograph's material: she is part image, part spirit, so the speaker sees her as a memory becoming a ghost.",
                              "evidence": "thinner than emulsion",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The speaker sees the grandmother as almost transparent - a figure of light rather than flesh. By comparing her to something 'thinner than emulsion', the poem makes her part photograph, part spirit, suggesting that memory has reduced her to an image that is beautiful but no longer solid.",
          "commonErrors": [
                    "Reading the line literally as a lighting effect.",
                    "Missing the ghostly/insubstantial suggestion."
          ]
},
        },
        {
          id: "el11-u7-context-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "How does 'The Photograph' use its domestic, analogue context - yellowed paper, lamplight, 'emulsion' - to deepen its theme of memory?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Material context",
                              "statement": "The physical details of an era shape how its objects carry meaning."
                    },
                    {
                              "kind": "technique",
                              "name": "Sensory detail",
                              "statement": "Tactile and visual details make memory feel physical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The photograph's materiality - 'yellowed at the edges like toast' - makes it an object with age, not just an image.",
                              "evidence": "yellowed at the edges like toast",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'when I tilt it towards the lamp' shows memory handled physically, like a ritual; the analogue photograph demands this care.",
                              "evidence": "tilt it towards the lamp",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The vocabulary of old photography - 'emulsion' - anchors the poem in an era of scarce, precious images, so the theme of fragile memory is historically grounded.",
                              "evidence": "thinner than emulsion",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "The poem's analogue details - yellowed paper, lamplight, 'emulsion' - make the photograph a fragile physical object rather than a digital copy. That material context deepens the theme: memory here is something you hold, tilt towards the light, and handle with care, so its preservation feels both precious and temporary.",
          "commonErrors": [
                    "Listing details without linking them to memory or era.",
                    "Treating 'emulsion' as a general word rather than photographic terminology."
          ]
},
        },
        {
          id: "el11-u7-context-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "Analyse how 'The Photograph' presents memory as both preserving and distorting the past. Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Paradox",
                              "statement": "The poem holds two truths at once: the image preserves yet also fixes and distorts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Preserving: 'The photograph is sharper than my memory of it' - the image keeps detail the mind loses.",
                              "evidence": "sharper than my memory of it",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Distorting: the speaker notices 'her teeth missing / in a way I never noticed when she was alive' - the image reveals what lived perception missed.",
                              "evidence": "in a way I never noticed when she was alive",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Distorting: 'Everyone says she looked young' - others' readings overwrite the speaker's own memory.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The hands 'doing something with a cup of tea / that I cannot quite read' show memory as partial - the image preserves but does not explain.",
                              "evidence": "that I cannot quite read",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Concludes the paradox: the photograph is both more accurate and more alien than memory - it keeps the past but cannot recover its meaning.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The poem presents memory as paradoxical: the photograph preserves detail ('sharper than my memory') yet also distorts by fixing a moment the living eye never saw clearly ('teeth missing... never noticed'). The image keeps the grandmother but cannot interpret her - 'hands... I cannot quite read' - so memory through images is accurate but mute: it preserves appearance while losing the person's meaning.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Both preservation and distortion are evidenced and the paradox explained."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "One side covered well, the other partial."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Theme stated without analysis."
                    }
          ],
          "commonErrors": [
                    "Arguing the photograph is simply better or simply worse than memory.",
                    "Ignoring the 'cannot quite read' detail."
          ]
},
        },
        {
          id: "el11-u7-context-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "How does the mood of 'The Photograph' shift from tender observation to something uncanny? Support your answer with evidence from the poem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Mood shift",
                              "statement": "A poem's emotional atmosphere can change as images develop."
                    },
                    {
                              "kind": "technique",
                              "name": "Gothic imagery",
                              "statement": "Light through a figure, yellowed edges and 'ghost' associations create unease."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tender opening: the speaker's ritual care - 'I look at her hands first' - is intimate and respectful.",
                              "evidence": "I look at her hands first",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The simile 'yellowed at the edges like toast' is domestic and warm, keeping the mood comfortable.",
                              "evidence": "yellowed at the edges like toast",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The shift: 'when I tilt it towards the lamp / the light goes through her' makes the figure translucent - a ghost image.",
                              "evidence": "the light goes through her",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'as if she were made of something thinner / than emulsion' completes the uncanny turn: the beloved becomes insubstantial.",
                              "evidence": "thinner than emulsion",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poem moves from tender ritual ('I look at her hands first') through domestic warmth ('like toast') to an uncanny close: lamplight passes 'through her' and she becomes 'thinner than emulsion'. The shift from solid to translucent image turns remembrance into a ghostly encounter - memory preserves the form but thins the person.",
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "5-6",
                              "descriptor": "The mood shift is traced precisely with evidence."
                    },
                    {
                              "level": "Level 3",
                              "marks": "3-4",
                              "descriptor": "Shift identified with reasonable support."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Partial tracking."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Mood named only."
                    }
          ],
          "commonErrors": [
                    "Describing the whole poem as one mood.",
                    "Missing the lamplight/ghostly turn."
          ]
},
        },
        {
          id: "el11-u7-context-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "Read 'The Photograph' (the first poem in the extract).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two details that show the photograph is an old, physical object.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the poem uses imagery to explore the relationship between memory and photographs.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a paragraph evaluating how effectively the poem's final image conveys its theme of fragile memory.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Retrieval",
                              "statement": "Select only the details asked for."
                    },
                    {
                              "kind": "technique",
                              "name": "Imagery and theme",
                              "statement": "Images carry the poem's argument about memory."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Judge the ending's effectiveness."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit yellowed edges / lamp / emulsion / hands-first inspection.",
                              "evidence": "yellowed at the edges like toast",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit a second physical detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'sharper than my memory' establishes the photograph as more accurate than recollection.",
                              "evidence": "sharper than my memory of it",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'teeth missing... never noticed' shows the image reveals what memory missed - preserving yet distorting.",
                              "evidence": "in a way I never noticed when she was alive",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The lamplight passing 'through her' makes her translucent - memory as ghost.",
                              "evidence": "the light goes through her",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'thinner than emulsion' ties her to the photograph's material, merging person and image.",
                              "evidence": "thinner than emulsion",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The image is effective: 'thinner than emulsion' is precise photographic language.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "It makes memory literal - the person has become thinner than the medium that holds her.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The preceding 'light goes through her' builds to this, so the ending earns its effect.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Judgement: fragile memory is conveyed through material metaphor, not abstraction.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "(a) Yellowed edges, lamplight, emulsion. (b) The poem argues photographs preserve detail memory loses ('sharper than my memory') yet also fix and distort ('teeth missing', hands 'I cannot quite read'), ending in the ghostly image of light passing through her. (c) The final image is effective: 'thinner than emulsion' turns fragile memory into a material metaphor - the person reduced to the medium that holds her.",
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Two physical details identified."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One identified."
                    },
                    {
                              "part": "b",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Imagery analysed across the poem and linked to theme."
                    },
                    {
                              "part": "b",
                              "level": "Level 3",
                              "marks": "3",
                              "descriptor": "Mostly analysed."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Partial analysis."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Images named only."
                    },
                    {
                              "part": "c",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Evaluation of the final image with reasons."
                    },
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "3",
                              "descriptor": "Some evaluation."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Minimal judgement."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Ending mentioned only."
                    }
          ],
          "commonErrors": [
                    "In (b) describing images without linking to memory.",
                    "In (c) paraphrasing the image without judging it."
          ]
},
        },
      ],
    },
    {
      id: "el11-u7-compare",
      title: "Comparing poems",
      skill: "Compare two poems on a shared theme, using linking statements and evaluative judgement.",
      lesson: {
        sections: [
          {
            heading: "How to compare, not just describe",
            body: "A comparison is not two descriptions side by side. Use linking phrases: 'whereas', 'similarly', 'in contrast', 'both poems'. Begin with what the poems share - here, both are about memory - then analyse how each treats it differently. 'The Photograph' is still, private, analogue; 'The Song' is public, intrusive, broadcast.",
          },
          {
            heading: "The two poems side by side",
            body: "Both poems are about memory triggered by a reproduced version of the past. The Photograph preserves: 'sharper than my memory of it' - the image outlasts recollection. The Song invades: it plays 'at the supermarket', 'slowed down', dragging the mother 'into the trolley for no reason' - memory is not chosen but imposed. Where the photograph is held and tilted, the song is 'across the aisles like weather' - uncontrollable, atmospheric, public.",
          },
          {
            heading: "Evaluation in comparison",
            body: "Top-band answers judge the effects: the photograph gives the speaker control and intimacy ('I look at her hands first'), while the song gives no control - 'everyone in the shop is briefly young again / except us, who know better'. The song's ending is bleaker: memory 'cannot stop it entering anyway'. Compare the endings - one thins the person to emulsion, the other floods the self with an old feeling.",
          },
        ],
        keyFormulas: [
          { name: "Comparative linking", statement: "Use 'whereas', 'similarly', 'both' to connect points across texts." },
          { name: "Shared theme", statement: "Both poems treat memory, but through different media: image versus sound." },
          { name: "Evaluative comparison", statement: "Judge which treatment is more effective and why." },
        ],
        workedExample: {
          problem: "Compare how 'The Photograph' and 'The Song' present memory.",
          solution: "Both poems present memory as triggered by a reproduced artifact, but they treat it differently. In 'The Photograph', memory is intimate and controlled: the speaker handles the image, 'I look at her hands first', and the photograph 'is sharper than my memory of it'. In 'The Song', memory is public and involuntary: the song 'plays at the supermarket' and 'my mother... cries into the trolley', while the speaker must 'keep my face smooth as a shelf'. The photograph preserves the past as image ('thinner than emulsion'); the song replays it as feeling ('we know better / and cannot stop it entering anyway'). The Song is arguably more devastating because memory cannot be controlled or put down.",
        },
      },
      questions: [
        {
          id: "el11-u7-compare-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "Both poems in the extract share which central theme?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The passage of time and technology."
                    },
                    {
                              "id": "b",
                              "text": "Memory and how the past survives through images and sounds."
                    },
                    {
                              "id": "c",
                              "text": "Family conflict and reconciliation."
                    },
                    {
                              "id": "d",
                              "text": "The beauty of supermarkets and galleries."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shared theme",
                              "statement": "Both poems treat memory through reproduced media."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One poem is about a photograph, the other a song - both are reproduced versions of the past that trigger memory.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Memory and how the past survives through reproduced images and sounds.",
          "commonErrors": [
                    "Choosing (a): technology is a detail, not the theme."
          ]
},
        },
        {
          id: "el11-u7-compare-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "How does 'The Song' differ from 'The Photograph' in how memory is triggered? Use a quotation in your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Medium and trigger",
                              "statement": "A photograph is handled; a song is heard - different media create different relationships to memory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In 'The Photograph' memory is chosen and handled - the speaker 'tilt[s] it towards the lamp' deliberately.",
                              "evidence": "when I tilt it towards the lamp",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "In 'The Song' memory invades - it 'plays at the supermarket' and the mother 'cries into the trolley for no reason', so the trigger is public and involuntary.",
                              "evidence": "plays at the supermarket now, slowed down",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The Photograph's memory is voluntary: the speaker chooses to hold and tilt the image. The Song's memory is imposed: the tune 'plays at the supermarket' and 'crosses the aisles like weather', triggering tears 'for no reason the song can give' - memory as invasion rather than ritual.",
          "commonErrors": [
                    "Describing each poem separately without the contrast.",
                    "Ignoring the supermarket setting's public, involuntary quality."
          ]
},
        },
        {
          id: "el11-u7-compare-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "Compare how the two poems treat the figure of the mother or grandmother as a remembered person. Support your answer with evidence from both poems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cross-text comparison",
                              "statement": "Link points about each poem with 'whereas' and 'similarly'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Photograph's grandmother is an image to be studied: 'her teeth missing', 'her hands... doing something with a cup of tea' - she is observed, almost read.",
                              "evidence": "her hands are doing something with a cup of tea",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The Song's mother is a person overwhelmed: she 'cries into the trolley', hears 'her mother singing it badly' - she is inside the memory, not studying it.",
                              "evidence": "my mother hears her mother",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Contrast: the photograph preserves the grandmother as a still, almost ghostly figure ('thinner than emulsion'); the song preserves the mother as a feeling that floods her - 'we know better / and cannot stop it entering anyway'.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "The Photograph treats the grandmother as an image to be read - teeth, hands, a cup of tea - preserved but mute. The Song treats the mother as a person inside memory - crying in a supermarket, hearing her own mother - overwhelmed by feeling. Where the photograph makes the dead 'thinner than emulsion', the song makes the living unable to stop the past 'entering anyway'.",
          "commonErrors": [
                    "Writing two separate descriptions with no linking language.",
                    "Confusing the grandmother (photograph) with the mother (song)."
          ]
},
        },
        {
          id: "el11-u7-compare-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "Compare the endings of 'The Photograph' and 'The Song'. Which ending is more effective, in your view, and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ending as judgement",
                              "statement": "A poem's last image carries its final meaning."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative comparison",
                              "statement": "Judge one ending against the other with reasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Photograph ends on 'thinner than emulsion': the person reduced to image - quiet, visual, almost beautiful in its fragility.",
                              "evidence": "thinner than emulsion",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The Song ends on 'we know better / and cannot stop it entering anyway': memory as an invasion the self cannot prevent - psychological and helpless.",
                              "evidence": "cannot stop it entering anyway",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both endings deny consolation but differently: one thins, the other floods.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Judgement can go either way if argued: e.g. the Song's ending is more devastating because it is involuntary; or the Photograph's is more elegant because it fuses person and medium.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Whichever is chosen, the judgement must reference both endings and explain the differing effects.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "The Photograph ends with the grandmother 'thinner than emulsion' - memory as a beautiful, thinning image. The Song ends with 'we know better / and cannot stop it entering anyway' - memory as an unstoppable flood. Either judgement is creditable: the Song's is more psychologically devastating (involuntary), while the Photograph's is more visually elegant (person becomes medium). The key is arguing the comparison, not just describing each.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Both endings analysed and a clear, argued judgement made."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Both endings described; judgement partial."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One ending mentioned only."
                    }
          ],
          "commonErrors": [
                    "Comparing only one poem.",
                    "Refusing to judge - the question asks which is more effective."
          ]
},
        },
        {
          id: "el11-u7-compare-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "How do the two poems differ in their treatment of public versus private memory? Support your answer with evidence from both.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Setting and privacy",
                              "statement": "Where memory happens - a private room or a supermarket - shapes its meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Photograph is private: a single speaker, a single image, handled alone 'towards the lamp'.",
                              "evidence": "when I tilt it towards the lamp",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The Song is public: it plays 'at the supermarket', 'across the aisles', witnessed by strangers.",
                              "evidence": "across the aisles like weather",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The public setting intensifies the Song's pain: 'everyone in the shop is briefly young again / except us, who know better' - private grief exposed.",
                              "evidence": "except us, who know better",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: the Photograph's privacy makes memory contemplative; the Song's publicity makes it humiliating and inescapable.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "The Photograph keeps memory private - one person, one image, lamplight. The Song forces it public - a supermarket, strangers, 'everyone in the shop'. This difference is the poems' deepest contrast: private memory can be contemplated ('I look at her hands first'), while public memory invades and embarrasses ('my mother... cries into the trolley'), so the Song's grief is more exposed and less controllable.",
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "5-6",
                              "descriptor": "The private/public contrast is developed across both poems with effect."
                    },
                    {
                              "level": "Level 3",
                              "marks": "3-4",
                              "descriptor": "Contrast identified with reasonable support."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Partial contrast."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Settings named only."
                    }
          ],
          "commonErrors": [
                    "Describing settings without linking to memory's privacy or publicity.",
                    "Ignoring the 'except us, who know better' detail."
          ]
},
        },
        {
          id: "el11-u7-compare-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Two Poems on Memory",
          "author": "Written for Akademik Space",
          "source": "Original poems",
          "text": "The Photograph\nThe photograph is sharper than my memory of it.\nMy grandmother smiles with her teeth missing\nin a way I never noticed when she was alive.\nEveryone says she looked young.\nI look at her hands first, because hands do not lie\nand hers are doing something with a cup of tea\nthat I cannot quite read.\nThe paper has yellowed at the edges like toast\nand when I tilt it towards the lamp\nthe light goes through her, briefly,\nas if she were made of something thinner\nthan emulsion.\n\nThe Song\nThe song is worse than my memory of it.\nIt plays at the supermarket now, slowed down,\nand my mother hears her mother\nsinging it badly, in the kitchen, in 1974.\nShe cries into the trolley for no reason\nthe song can give.\nI keep my face smooth as a shelf.\nThe tune crosses the aisles like weather\nand everyone in the shop is briefly young again\nexcept us, who know better\nand cannot stop it entering anyway."
},
          stem: "Compare 'The Photograph' and 'The Song' as poems about memory.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the shared theme of both poems.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Compare how each poem presents the trigger for memory.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a paragraph evaluating which poem presents memory more powerfully, and why.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparative statement",
                              "statement": "Name the shared theme before contrasting."
                    },
                    {
                              "kind": "technique",
                              "name": "Medium contrast",
                              "statement": "Image versus sound, private versus public."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative judgement",
                              "statement": "Judge which treatment is more powerful with reasons."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit memory / how the past survives through reproduced media.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit a fuller statement: both poems show memory triggered by an old image or song.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Photograph: memory is chosen - the speaker handles and tilts the image.",
                              "evidence": "when I tilt it towards the lamp",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Song: memory is imposed - it 'plays at the supermarket' and 'crosses the aisles'.",
                              "evidence": "plays at the supermarket now, slowed down",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Photograph preserves as image - 'sharper than my memory of it'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Song replays as feeling - 'cannot stop it entering anyway'.",
                              "evidence": "cannot stop it entering anyway",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "A clear judgement is made (either poem) and argued.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reasons reference technique: image vs sound, control vs invasion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The comparison links both poems, not just one.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "The effect on the reader is explained (e.g. the Song's involuntary grief is more devastating).",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "(a) Both poems explore memory triggered by reproduced media. (b) The Photograph's memory is chosen and visual; the Song's is imposed and auditory - image preserves, sound floods. (c) A top answer judges which is more powerful (the Song is arguably more devastating because memory cannot be controlled) and argues it through the contrast of private ritual versus public invasion.",
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Shared theme clearly stated."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Partial or vague."
                    },
                    {
                              "part": "b",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Triggers compared with evidence from both poems."
                    },
                    {
                              "part": "b",
                              "level": "Level 3",
                              "marks": "3",
                              "descriptor": "Mostly compared."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Partial comparison."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One poem only."
                    },
                    {
                              "part": "c",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Evaluative judgement argued across both poems."
                    },
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "3",
                              "descriptor": "Judgement with some support."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Minimal judgement."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Restates content only."
                    }
          ],
          "commonErrors": [
                    "In (b) describing each poem separately with no comparison.",
                    "In (c) refusing to judge or judging without reasons."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u7-poetry-compare-notes",
      title: "Context, theme and comparison - notes",
      summary: "Theme is the poem's deep idea; context is inferred from the text. Compare by linking, then judge.",
      sections: [
        { heading: "Key idea", body: "Separate theme (the idea) from mood (the feeling) - then show how imagery carries both." },
        { heading: "Context", body: "For unseen poems, infer context from internal clues - objects, vocabulary, era markers." },
        { heading: "Comparison", body: "Use 'whereas' and 'similarly' to link; finish with an argued judgement about which is more effective." },
      ],
    },
  ],
};
