import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "el10-u7-lesson-7-1",
  code: "7-1",
  title: "Writers' Viewpoints and Perspectives",
  goal: "I CAN identify how writers reveal their perspectives and compare viewpoints across texts.",
  standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
  
  vocabulary: [
    { term: "Perspective", definition: "The writer's or speaker's attitude, position or way of seeing events." },
    { term: "Viewpoint", definition: "The angle from which events or people are presented." },
    { term: "Explicit viewpoint", definition: "An attitude stated openly through direct comment or judgement." },
    { term: "Implicit viewpoint", definition: "An attitude suggested through word choice, imagery and selection of detail." },
    { term: "Tone", definition: "The writer's attitude towards the subject, for example nostalgic, critical or admiring." },
    { term: "Focalisation", definition: "Whose eyes the reader sees events through, and what that character notices or misunderstands." },
    { term: "Bias", definition: "A slant in presentation that favours one interpretation over another." },
  ],
  concepts: [
    {
      id: "el10-u7-perspective-reveal",
      title: "How writers reveal perspective",
      skill: "Explain how word choice, tone and selection of detail reveal a writer's perspective.",
      lesson: {
        sections: [
          {
            heading: "What is a perspective?",
            body: "Every text presents events from someone's angle. The writer may state their view directly (explicit) or let it emerge through the details they choose (implicit). A poem about a rebuilt estate might call the cranes 'herons' rather than 'machines', quietly suggesting grace rather than industry. Reading for perspective means asking: what does this writer want me to think, and how do they make me think it?",
          },
          {
            heading: "Language that reveals viewpoint",
            body: "Writers reveal perspective through **word choice** (loaded adjectives such as 'bland' or 'sterile'), **imagery** (comparing new buildings to something cold or artificial), **selection of detail** (noticing a scar-like name on a brick rather than the new flats), and **tone** (nostalgic, angry, admiring). Even the verbs matter: 'rehearsed their debate' makes architecture sound performative rather than sincere.",
          },
          {
            heading: "Reading between the lines",
            body: "Implicit perspective is often strongest. In 'Regeneration', the poet never says the new estate is bad, yet the final stanza turns ambivalent: 'Perhaps a city is only ever houses'. Train yourself to separate what the text **says** from what it **implies**, and to quote the exact words that carry the attitude.",
          },
        ],
        keyFormulas: [
          { name: "Perspective", statement: "The writer's angle on events — explicit (stated) or implicit (implied through method)." },
          { name: "Tone", statement: "The attitude conveyed by the writing, such as nostalgic, critical or hopeful." },
          { name: "Loaded language", statement: "Words with emotional colouring, for example 'scar', 'rehearsed', 'erased'." },
        ],
        workedExample: {
          problem: "How does the poet of 'Regeneration' reveal a perspective on urban change?",
          solution: "The perspective is ambivalent — neither wholly hostile nor wholly celebratory. Negative-sounding choices include 'drained estate', 'rehearsed their debate' and streets 'erased', which frame regeneration as loss. Yet the final stanza softens: the buildings 'breathed a warmth' and 'each one a small defiance of the stone' suggests hope. The perspective emerges through imagery and tone rather than direct statement.",
        },
      },
      questions: [
        {
          id: "el10-u7-perspective-reveal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Regeneration",
          "author": "A. Whitfield",
          "source": "Estate Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The cranes stood over the old parade ground\nlike herons fishing in a drained estate.\nWhere children once played chasing a red ball,\nnow glass and steel rehearsed their debate.\n\nThe new residents would never know the names\nof streets the planners' drawings had erased.\nTheir balconies faced a vista of progress;\ntheir windows overlooked a different place.\n\nAnd yet, at dusk, when windows lit one by one,\nthe buildings breathed a warmth that mimicked home.\nPerhaps a city is only ever houses —\neach one a small defiance of the stone."
},
          stem: "In 'Regeneration', what does the phrase 'rehearsed their debate' most suggest about the new buildings?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They are noisy and still under construction"
                    },
                    {
                              "id": "b",
                              "text": "They look impressive but feel artificial and unfeeling"
                    },
                    {
                              "id": "c",
                              "text": "The builders are arguing about their design"
                    },
                    {
                              "id": "d",
                              "text": "They have been criticised in the press"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Personification",
                              "statement": "Giving buildings the human act of debate makes them seem performative and artificial."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Rehearsed' implies performance rather than sincerity; the buildings seem impressive but lifeless.",
                              "evidence": "rehearsed their debate",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** The buildings seem impressive but artificial and unfeeling.",
          "commonErrors": [
                    "Choosing (a), a literal reading that ignores the metaphor."
          ]
},
        },
        {
          id: "el10-u7-perspective-reveal-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Regeneration",
          "author": "A. Whitfield",
          "source": "Estate Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The cranes stood over the old parade ground\nlike herons fishing in a drained estate.\nWhere children once played chasing a red ball,\nnow glass and steel rehearsed their debate.\n\nThe new residents would never know the names\nof streets the planners' drawings had erased.\nTheir balconies faced a vista of progress;\ntheir windows overlooked a different place.\n\nAnd yet, at dusk, when windows lit one by one,\nthe buildings breathed a warmth that mimicked home.\nPerhaps a city is only ever houses —\neach one a small defiance of the stone."
},
          stem: "Explain the effect of the simile 'like herons fishing in a drained estate' in lines 1-2.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Simile and imagery",
                              "statement": "A comparison that creates a vivid picture and attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The cranes are compared to herons, elegant birds fishing — graceful predators.",
                              "evidence": "like herons fishing",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Drained estate' makes the old neighbourhood feel emptied and lifeless, so the image is both beautiful and threatening.",
                              "evidence": "a drained estate",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The simile makes the cranes seem graceful yet predatory, hovering over an emptied landscape, creating an uneasy beauty."
},
        },
        {
          id: "el10-u7-perspective-reveal-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Regeneration",
          "author": "A. Whitfield",
          "source": "Estate Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The cranes stood over the old parade ground\nlike herons fishing in a drained estate.\nWhere children once played chasing a red ball,\nnow glass and steel rehearsed their debate.\n\nThe new residents would never know the names\nof streets the planners' drawings had erased.\nTheir balconies faced a vista of progress;\ntheir windows overlooked a different place.\n\nAnd yet, at dusk, when windows lit one by one,\nthe buildings breathed a warmth that mimicked home.\nPerhaps a city is only ever houses —\neach one a small defiance of the stone."
},
          stem: "How does the poet present the old residents' feelings about regeneration in lines 9-11?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Selection of detail",
                              "statement": "What a writer chooses to notice reveals attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The new residents 'would never know the names' — the poet highlights cultural loss rather than physical change.",
                              "evidence": "never know the names",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'A vista of progress' is faintly ironic; the view is reduced to a slogan.",
                              "evidence": "a vista of progress",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'A different place' suggests alienation — they now live somewhere unrecognisable.",
                              "evidence": "a different place",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poet presents the residents as disconnected: they lose the names of streets, see only 'progress', and live in 'a different place', implying alienation and loss."
},
        },
        {
          id: "el10-u7-perspective-reveal-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Regeneration",
          "author": "A. Whitfield",
          "source": "Estate Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The cranes stood over the old parade ground\nlike herons fishing in a drained estate.\nWhere children once played chasing a red ball,\nnow glass and steel rehearsed their debate.\n\nThe new residents would never know the names\nof streets the planners' drawings had erased.\nTheir balconies faced a vista of progress;\ntheir windows overlooked a different place.\n\nAnd yet, at dusk, when windows lit one by one,\nthe buildings breathed a warmth that mimicked home.\nPerhaps a city is only ever houses —\neach one a small defiance of the stone."
},
          stem: "How does the tone of 'Regeneration' change between the first stanza and the final stanza?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tone shift",
                              "statement": "A change in attitude across a text shapes the reader's response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stanza one is menacing and elegiac: 'drained estate', predatory herons, and play 'erased'.",
                              "evidence": "a drained estate",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Stanza two turns ironic and detached: 'progress' and 'a different place' sound hollow.",
                              "evidence": "a vista of progress",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final stanza softens into ambivalence — warmth 'mimicked home' and 'defiance of the stone' suggest cautious hope.",
                              "evidence": "a small defiance of the stone",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The tone moves from elegiac menace, through ironic detachment, to a guarded ambivalence in which new homes may offer a small 'defiance' against loss.",
          "commonErrors": [
                    "Describing each stanza without identifying the shift in attitude."
          ]
},
        },
        {
          id: "el10-u7-perspective-reveal-q5",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
          "title": "Regeneration",
          "author": "A. Whitfield",
          "source": "Estate Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The cranes stood over the old parade ground\nlike herons fishing in a drained estate.\nWhere children once played chasing a red ball,\nnow glass and steel rehearsed their debate.\n\nThe new residents would never know the names\nof streets the planners' drawings had erased.\nTheir balconies faced a vista of progress;\ntheir windows overlooked a different place.\n\nAnd yet, at dusk, when windows lit one by one,\nthe buildings breathed a warmth that mimicked home.\nPerhaps a city is only ever houses —\neach one a small defiance of the stone."
},
          stem: "How does the poet use language and imagery to present regeneration? Support your answer with detailed reference to the poem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imagery",
                              "statement": "Comparisons and sensory detail convey the poet's attitude."
                    },
                    {
                              "kind": "context",
                              "name": "Urban regeneration",
                              "statement": "Redevelopment often displaces communities and erases local history."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The crane-as-heron simile makes construction beautiful yet threatening — 'fishing' in a 'drained' landscape.",
                              "evidence": "like herons fishing in a drained estate",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Rehearsed their debate' personifies the buildings as performers, making progress feel staged and insincere.",
                              "evidence": "rehearsed their debate",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Erasure imagery — names 'erased', streets 'the planners' drawings had erased' — presents regeneration as cultural loss.",
                              "evidence": "the planners' drawings had erased",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final stanza's warmth and 'defiance of the stone' complicate the view: change may bring shelter as well as loss.",
                              "evidence": "a small defiance of the stone",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Perceptive analysis of language and imagery with integrated evidence and a clear sense of the ambivalent perspective."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Thorough analysis with well-chosen evidence; effects explained clearly."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Some comment on imagery with limited explanation of effect."
                    }
          ],
          "finalAnswer": "The poet presents regeneration as both beautiful and destructive: graceful heron-cranes and personified 'debate' give change menace, erasure imagery shows cultural loss, yet the final stanza's warmth and 'defiance' suggest guarded hope.",
          "commonErrors": [
                    "One-sided reading that ignores the ambivalent ending.",
                    "Technique-spotting without explaining effect."
          ]
},
        },
        {
          id: "el10-u7-perspective-reveal-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Regeneration",
          "author": "A. Whitfield",
          "source": "Estate Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The cranes stood over the old parade ground\nlike herons fishing in a drained estate.\nWhere children once played chasing a red ball,\nnow glass and steel rehearsed their debate.\n\nThe new residents would never know the names\nof streets the planners' drawings had erased.\nTheir balconies faced a vista of progress;\ntheir windows overlooked a different place.\n\nAnd yet, at dusk, when windows lit one by one,\nthe buildings breathed a warmth that mimicked home.\nPerhaps a city is only ever houses —\neach one a small defiance of the stone."
},
          stem: "Read 'Regeneration' and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two images in the poem that show how the neighbourhood has physically changed.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how the tone of the final stanza differs from the tone of the first.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "How does the poet present regeneration overall? Support your answer with detailed reference to the poem.",
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
                              "name": "Imagery",
                              "statement": "Physical images show change: cranes, glass and steel replacing playing children."
                    },
                    {
                              "kind": "context",
                              "name": "Community and place",
                              "statement": "Regeneration raises questions about belonging and memory."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Crane image: 'cranes... like herons fishing in a drained estate' — construction over emptied land.",
                              "evidence": "like herons fishing in a drained estate",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Replacement image: 'glass and steel rehearsed their debate' replaces the 'red ball' of children's play.",
                              "evidence": "glass and steel rehearsed their debate",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Stanza one is menacing: predatory cranes, 'drained' estate, lost play.",
                              "evidence": "a drained estate",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Final stanza is softer: 'warmth that mimicked home', 'small defiance of the stone' — guarded hope.",
                              "evidence": "a small defiance of the stone",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Regeneration is presented ambivalently: beautiful ('herons') yet threatening ('rehearsed').",
                              "evidence": "rehearsed their debate",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Loss is emphasised through erasure of names and 'a different place'.",
                              "evidence": "never know the names",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Two accurate, well-supported images."
                    },
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "One or two images partly supported."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment."
                    },
                    {
                              "part": "b",
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear explanation of the tone shift with evidence."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some comment on tone with some evidence."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment."
                    },
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Perceptive account of the ambivalent perspective with integrated evidence."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear account with some evidence."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment."
                    }
          ],
          "finalAnswer": "(a) Cranes like herons over a drained estate; glass and steel replacing children's play. (b) Stanza one is menacing and elegiac; the final stanza softens into guarded hope with 'warmth' and 'defiance'. (c) Regeneration is ambivalent — graceful yet threatening imagery of change balanced against erasure and loss, resolved in cautious hope.",
          "commonErrors": [
                    "Quoting without explaining what the image shows.",
                    "Ignoring the tonal shift in (b)."
          ]
},
        },
      ],
    },
    {
      id: "el10-u7-compare-perspectives",
      title: "Comparing writers' perspectives",
      skill: "Compare how two writers present different perspectives on the same subject.",
      lesson: {
        sections: [
          {
            heading: "Why writers differ",
            body: "Two writers on the same subject — here, urban regeneration — can present sharply different perspectives. The poet works in compressed, figurative language; the prose writer uses scene, dialogue and detail. Comparing perspectives means identifying each writer's **attitude**, then showing how their **methods** create it.",
          },
          {
            heading: "Comparing ideas, methods and effects",
            body: "Compare at three levels: **ideas** (what each says about change), **methods** (imagery versus dialogue and setting), and **effects** (how each makes the reader feel). In 'The Old Parade', Mr. Delacroix's 'It is not the same' is explicit and colloquial; in 'Regeneration', loss is implicit in 'names... erased'. Different methods, related ideas.",
          },
          {
            heading: "Linking the texts",
            body: "Always make explicit links: 'Whereas the poet uses...', 'Similarly/By contrast, the prose writer...'. The strongest answers show that differences in form produce differences in perspective — a poem's compression intensifies feeling, while prose can build a scene.",
          },
        ],
        keyFormulas: [
          { name: "Comparison", statement: "Identify each writer's idea, then compare methods and effects using linking connectives." },
          { name: "Explicit vs implicit", statement: "Dialogue states views openly; imagery implies them through selection of detail." },
        ],
        workedExample: {
          problem: "Compare how the poet and the prose writer present the old community in 'Regeneration' and 'The Old Parade'.",
          solution: "Both mourn loss, but differently. The poet shows the old community indirectly — residents who 'never know the names' of erased streets, inhabitants of 'a different place'. The prose writer gives them a voice: old residents 'gathered at the gate' and Mr. Delacroix says 'It is not the same', though he 'could not say what had been lost' — feeling exceeds words. The poem's perspective is elegiac and abstract; the prose is social and conversational.",
        },
      },
      questions: [
        {
          id: "el10-u7-compare-perspectives-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When comparing two texts on the same subject, what should your answer always make explicit?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Which text is longer"
                    },
                    {
                              "id": "b",
                              "text": "Links between the writers' ideas, methods and effects"
                    },
                    {
                              "id": "c",
                              "text": "Which writer was more famous"
                    },
                    {
                              "id": "d",
                              "text": "The publication dates of both texts"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparative writing",
                              "statement": "Comparison requires explicit links between texts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A comparative answer links ideas, methods and effects across texts.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** Links between the writers' ideas, methods and effects."
},
        },
        {
          id: "el10-u7-compare-perspectives-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Old Parade",
          "author": "R. Salter",
          "source": "Harbour Stories (fictional anthology)",
          "text": "For years the parade had stood empty, its shopfronts like blind eyes. Then the developers came, and by spring the scaffolding wore a new face. The old residents gathered at the gate, watching men in hi-vis lift paving slabs one by one. 'It is not the same,' said Mr. Delacroix, though he could not say what had been lost. The builder smiled and said everything was being improved. Behind them, the demolished cinema's name still showed on a brick, pale as a scar."
},
          stem: "How does the prose writer present Mr. Delacroix's viewpoint about the regeneration?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Dialogue",
                              "statement": "Direct speech states a viewpoint openly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "His spoken words give his view directly: 'It is not the same'.",
                              "evidence": "It is not the same",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The narration qualifies it — he 'could not say what had been lost' — showing the feeling is real but inarticulate.",
                              "evidence": "could not say what had been lost",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Mr. Delacroix states his loss openly in dialogue but cannot articulate it, so his perspective is felt rather than explained."
},
        },
        {
          id: "el10-u7-compare-perspectives-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Both 'Regeneration' and 'The Old Parade' present regeneration. State one similarity in their perspective on the subject.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparing ideas",
                              "statement": "Find the shared attitude beneath different methods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both present regeneration as involving loss as well as gain.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Evidence from the poem: erased names, 'a different place'; from prose: 'It is not the same'.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Both are ambivalent rather than wholly celebratory.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Both texts are ambivalent: they acknowledge change and improvement while mourning the loss of the old community."
},
        },
        {
          id: "el10-u7-compare-perspectives-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "How do the attitudes towards regeneration differ between 'Regeneration' and 'The Old Parade'?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Attitude",
                              "statement": "Different methods produce different shades of perspective."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The poem's attitude is contemplative and elegiac — compressed imagery of cranes, erasure and 'defiance of the stone'.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The prose is social and conversational: a gathered crowd, a builder's polite 'everything was being improved'.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The poem resolves into cautious hope; the prose ends on an image of the scar-like name — loss remains unresolved.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poem is elegiac yet ambivalent, ending in guarded hope; the prose is grounded in community dialogue and ends on unresolved loss, like a 'scar' on a brick.",
          "commonErrors": [
                    "Listing methods without comparing attitudes."
          ]
},
        },
        {
          id: "el10-u7-compare-perspectives-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Compare how 'Regeneration' and 'The Old Parade' present the experience of regeneration for local people.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imagery and dialogue",
                              "statement": "Poetry implies through image; prose states through speech."
                    },
                    {
                              "kind": "skill",
                              "name": "Comparative analysis",
                              "statement": "Link methods to effects across both texts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In the poem, locals are absent — they 'would never know the names'; the community is remembered rather than shown.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "In the prose, locals gather at the gate and speak: 'It is not the same', making loss communal and voiced.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The poem's imagery — 'drained estate', 'erased' streets — turns loss into landscape.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The prose's scar image — 'the demolished cinema's name... pale as a scar' — makes loss physical and personal.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Perceptive comparison linking methods to effects in both texts with integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Clear comparison with well-chosen evidence from both texts."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Some comparison with limited evidence or links."
                    }
          ],
          "finalAnswer": "Both present regeneration as loss, but the poem abstracts it into landscape imagery while the prose voices it through gathered residents and the 'scar' of a demolished name; the poem ends hopeful, the prose unresolved.",
          "commonErrors": [
                    "Writing about each text separately with no links.",
                    "Ignoring method when comparing."
          ]
},
        },
        {
          id: "el10-u7-compare-perspectives-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Read 'Regeneration' and 'The Old Parade' and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "How does each writer present the new development itself?",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "How does each writer present the old community?",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Overall, how do the writers' perspectives on regeneration compare? Support your answer with detailed reference to both texts.",
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
                              "name": "Method and attitude",
                              "statement": "Imagery versus dialogue produces different perspectives on the same subject."
                    },
                    {
                              "kind": "skill",
                              "name": "Sustained comparison",
                              "statement": "A strong answer links ideas, methods and effects throughout."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Poem: 'glass and steel rehearsed their debate' — impressive but performative; cranes 'like herons'.",
                              "evidence": "rehearsed their debate",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Prose: 'scaffolding wore a new face' and the builder's 'everything was being improved' — bureaucratic optimism.",
                              "evidence": "everything was being improved",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Poem: residents are absent, 'never know the names', living in 'a different place' — loss is implicit.",
                              "evidence": "never know the names",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Prose: residents gather and speak — 'It is not the same' — loss is voiced and communal.",
                              "evidence": "It is not the same",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Both are ambivalent, but the poem's is contemplative (ending in 'defiance of the stone') while the prose's is social and unresolved ('pale as a scar').",
                              "evidence": "pale as a scar",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Methods differ — compressed imagery versus scene and dialogue — shaping how each perspective feels.",
                              "marks": 2,
                              "markCode": "AO3"
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
          "finalAnswer": "(a) The poet makes the development beautiful yet performative; the prose makes it bureaucratic and optimistic. (b) The poem mourns an absent community through erased names; the prose gives the old residents a voice at the gate. (c) Both are ambivalent about regeneration, but the poem's elegiac hope differs from the prose's grounded, unresolved sense of loss.",
          "commonErrors": [
                    "Answering each part on only one text.",
                    "Comparing without quoting or referencing evidence."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u7-perspectives-notes",
      title: "Writers' perspectives — notes",
      summary: "Perspective is revealed through word choice, imagery, tone and selection of detail; comparison links ideas, methods and effects across texts.",
      sections: [
        { heading: "Key idea", body: "Ask: what does the writer want me to think, and which words make me think it?" },
        { heading: "Comparing", body: "Link the texts explicitly: 'Whereas the poet...', 'By contrast, the prose writer...'" },
      ],
    },
  ],
};
