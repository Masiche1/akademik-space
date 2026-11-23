import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "el11-u10-lesson-10-1",
  code: "10-1",
  title: "Imagery, Metaphor and Symbolism",
  goal: "I CAN analyse sensory imagery, metaphor, personification and symbolism in poems and explain their effects on mood and meaning.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 AO1", "4EA1 AO2"],
  
  vocabulary: [
    { term: "Imagery", definition: "Language that appeals to the senses — sight, sound, smell, taste or touch." },
    { term: "Visual imagery", definition: "Imagery that creates a picture in the reader's mind." },
    { term: "Auditory imagery", definition: "Imagery that appeals to hearing, such as 'the sea rehearsed its noise'." },
    { term: "Metaphor", definition: "A direct comparison that identifies one thing with another, e.g. 'stalls unfold like paper fans'." },
    { term: "Personification", definition: "Giving human qualities or actions to non-human things, e.g. 'the market wakes'." },
    { term: "Symbolism", definition: "When an object or image stands for a larger idea, e.g. the lighthouse flame for devotion." },
    { term: "Mood", definition: "The atmosphere or emotional quality a poem creates for the reader." },
  ],
  concepts: [
    {
      id: "el11-u10-imagery",
      title: "Sensory imagery and mood",
      skill: "Identify sensory images in a poem, name the sense each appeals to, and explain how they build mood.",
      lesson: {
        sections: [
          {
            heading: "Reading images",
            body: "Poets build pictures through **imagery** — words that appeal to the senses. Do not just spot an image; name the sense (sight, sound, smell, taste, touch) and explain what it makes the reader feel. 'The sea rehearsed its noise against the glass' is auditory; 'salt on his cuffs' is tactile and gustatory. A top answer tracks how images accumulate into a **mood**.",
          },
          {
            heading: "Imagery and mood",
            body: "Mood is the atmosphere the poem creates. Warm images — 'bread arrives still warm', 'every shadow wears a smile' — make a market feel welcoming. Cold or isolated images — 'salt', 'tea gone cold', 'kingdom of dark' — make the lighthouse feel lonely. Ask: **what feeling do these images leave me with?**",
          },
          {
            heading: "Building the answer",
            body: "Use the chain: **image** (quotation), **sense** (which sense it appeals to), **effect** (the mood or feeling it creates). Two or three linked images will always beat a list of unrelated ones.",
          },
        ],
        keyFormulas: [
          { name: "Imagery", statement: "Language appealing to the senses; it makes the poem vivid and controls the reader's response." },
          { name: "Sensory appeal", statement: "Naming which sense an image targets — sight, sound, smell, taste or touch — is the first step to analysing it." },
          { name: "Mood", statement: "The atmosphere a poem creates through accumulated images, tone and rhythm." },
        ],
        workedExample: {
          problem: "How do the images in 'Market Morning' create a mood of welcome?",
          solution: "The poem builds welcome through warm, busy sensory detail. 'Stalls unfold like paper fans' is visual and energetic; 'the fishmonger slaps the ice awake' is auditory and lively; 'Bread arrives still warm / in wicker, prices chalked in gold' appeals to smell, touch and sight, making the market feel abundant and precious. The personified 'market wakes' and the final image 'every shadow wears a smile' complete the mood: the square is not just busy but friendly, so the reader feels invited in.",
        },
      },
      questions: [
        {
          id: "el11-u10-imagery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "Which image in 'The Lighthouse Keeper' most clearly appeals to hearing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'salt on his cuffs'"
                    },
                    {
                              "id": "b",
                              "text": "'the gulls wrote letters'"
                    },
                    {
                              "id": "c",
                              "text": "'The sea rehearsed its noise / against the glass'"
                    },
                    {
                              "id": "d",
                              "text": "'years stacked like cordwood'"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Auditory imagery",
                              "statement": "Imagery that appeals to hearing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'The sea rehearsed its noise against the glass' is explicitly about sound; the others are visual or tactile.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** 'The sea rehearsed its noise / against the glass' — auditory imagery.",
          "commonErrors": [
                    "Choosing a vivid image without checking which sense it targets."
          ]
},
        },
        {
          id: "el11-u10-imagery-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Market Morning",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "The market wakes before the street -\nstalls unfold like paper fans,\nthe fishmonger slaps the ice awake,\nthe flower seller counts her colours\nin buckets. Bread arrives still warm\nin wicker, prices chalked in gold.\nBy nine the square is loud with bargains,\nand every shadow wears a smile."
},
          stem: "Identify two sensory images in 'Market Morning' and name the sense each appeals to.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sense naming",
                              "statement": "Identify the image, then name the sense it targets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Credit one image — e.g. 'Bread arrives still warm' (smell/touch) or 'stalls unfold like paper fans' (sight) — with the correct sense.",
                              "evidence": "Bread arrives still warm",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Credit a second distinct image with its sense, e.g. 'the fishmonger slaps the ice awake' (sound) or 'prices chalked in gold' (sight).",
                              "evidence": "the fishmonger slaps the ice awake",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "e.g. 'Bread arrives still warm' — smell/touch; 'the fishmonger slaps the ice awake' — sound; 'stalls unfold like paper fans' — sight.",
          "commonErrors": [
                    "Naming an image without the sense.",
                    "Repeating the same sense for both answers when variety exists."
          ]
},
        },
        {
          id: "el11-u10-imagery-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "How does the writer use contrasting images of light and dark?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Contrast",
                              "statement": "Placing light against dark or warmth against cold sharpens both and controls mood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lamp is 'the same small sun' — a source of light and warmth in a grey world.",
                              "evidence": "the same small sun",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Against it stands 'the same grey sky' and 'a kingdom of dark' — vast, cold, indifferent.",
                              "evidence": "a kingdom of dark",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The contrast makes the keeper's flame seem both fragile and heroic — a tiny light against overwhelming darkness.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The 'small sun' of the lamp is set against 'grey sky' and 'kingdom of dark', so the light/dark contrast makes the keeper's devotion feel fragile yet noble.",
          "commonErrors": [
                    "Listing light and dark images without explaining the contrast's effect."
          ]
},
        },
        {
          id: "el11-u10-imagery-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Market Morning",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "The market wakes before the street -\nstalls unfold like paper fans,\nthe fishmonger slaps the ice awake,\nthe flower seller counts her colours\nin buckets. Bread arrives still warm\nin wicker, prices chalked in gold.\nBy nine the square is loud with bargains,\nand every shadow wears a smile."
},
          stem: "Analyse the effect of the market's images of activity and colour.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Accumulated imagery",
                              "statement": "Many small vivid images build a single overwhelming impression."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Movement images — 'wakes', 'unfold', 'slaps', 'arrives' — make the market feel alive and busy.",
                              "evidence": "stalls unfold like paper fans",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Colour and warmth — 'colours', 'warm', 'gold' — make it feel abundant and precious.",
                              "evidence": "prices chalked in gold",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Sound — 'loud with bargains' — completes the sensory picture of bustle.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The accumulation creates a mood of welcome and abundance; the final 'every shadow wears a smile' personifies the scene as friendly.",
                              "evidence": "every shadow wears a smile",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poem layers movement ('wakes', 'unfold', 'slaps'), colour ('colours', 'gold') and sound ('loud with bargains') so the market feels vividly alive; the closing 'every shadow wears a smile' seals a mood of warmth and welcome.",
          "commonErrors": [
                    "Describing images one by one without showing how they accumulate into mood."
          ]
},
        },
        {
          id: "el11-u10-imagery-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "How does the imagery create a mood of lonely devotion? Support your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Mood through imagery",
                              "statement": "Repeated cold, isolated images build loneliness; the lamp image carries devotion."
                    },
                    {
                              "kind": "skill",
                              "name": "Evidence-led mood analysis",
                              "statement": "Tie each mood claim to a specific image."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Loneliness: 'hundred stairs', 'salt on his cuffs', 'tea gone cold' — solitary, cold, unattended detail.",
                              "evidence": "tea gone cold",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Isolation is confirmed by 'though no one saw' and the gulls' 'letters he never answered' — a man unseen and unanswered.",
                              "evidence": "he never answered",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Devotion survives the loneliness: 'each dawn he relit / the same small sun' — the repeated relighting shows faithfulness.",
                              "evidence": "each dawn he relit",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Cold, solitary images — 'salt', 'tea gone cold', 'hundred stairs' — and the unanswered letters create loneliness, while the daily relighting of 'the same small sun' shows devotion persisting within it.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating analysis of mood through imagery; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant analysis of mood through imagery; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited analysis of mood through imagery; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Saying the poem is 'sad' without linking it to images.",
                    "Missing the devotion half of the mood."
          ]
},
        },
        {
          id: "el11-u10-imagery-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Market Morning",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "The market wakes before the street -\nstalls unfold like paper fans,\nthe fishmonger slaps the ice awake,\nthe flower seller counts her colours\nin buckets. Bread arrives still warm\nin wicker, prices chalked in gold.\nBy nine the square is loud with bargains,\nand every shadow wears a smile."
},
          stem: "Read 'Market Morning'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two sensory images in the poem and name the sense each appeals to.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the poem's imagery conveys its mood.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Image identification",
                              "statement": "Quote the image and name the sense."
                    },
                    {
                              "kind": "technique",
                              "name": "Imagery and mood",
                              "statement": "Explain how accumulated images create atmosphere."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit one image with correct sense — e.g. 'stalls unfold like paper fans' (sight), 'still warm' (touch/smell).",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit a second distinct image with sense — e.g. 'loud with bargains' (sound), 'prices chalked in gold' (sight).",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Movement images ('wakes', 'unfold', 'slaps') create energy and bustle.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Warmth and colour ('warm', 'gold', 'colours') create abundance and preciousness.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The personified close — 'every shadow wears a smile' — extends the friendliness into the whole scene, sealing the welcoming mood.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) Any two images with correct senses. (b) The poem's movement, warmth and colour imagery accumulates into a mood of lively welcome, capped by the smiling shadows.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating analysis of imagery and its mood; judicious, well-chosen evidence",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant analysis of imagery and its mood; appropriate references",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited analysis of imagery and its mood; few or unselective references",
                              "part": "b"
                    }
          ],
          "commonErrors": [
                    "In (a) naming senses wrongly or repeating one image.",
                    "In (b) listing images without explaining mood."
          ]
},
        },
      ],
    },
    {
      id: "el11-u10-metaphor-symbol",
      title: "Metaphor, personification and symbolism",
      skill: "Analyse metaphor, personification and symbolic images, explaining what they reveal beyond the literal.",
      lesson: {
        sections: [
          {
            heading: "Beyond the literal",
            body: "**Metaphor** identifies one thing with another ('stalls unfold like paper fans' — or 'lit the great lamp like a wedding vow'). **Personification** gives human action to the non-human ('the market wakes', 'the moon leans'). Both do more than decorate: they tell us how to feel about the thing described. A wedding vow is sacred, so lighting the lamp becomes an act of devotion.",
          },
          {
            heading: "Symbolism",
            body: "A **symbol** is an image that stands for a larger idea. The lighthouse flame can symbolise faith, duty or hope; the 'small sun' suggests the keeper's light is a private sun in a dark world. To analyse symbolism, ask: **what does this object or image represent beyond itself?**",
          },
          {
            heading: "Naming the technique",
            body: "Be precise: 'like a wedding vow' is a simile (explicit comparison with 'like'); 'the market wakes' is personification; 'a kingdom of dark' is metaphor. The more accurately you name the technique, the more convincing your comment on its effect.",
          },
        ],
        keyFormulas: [
          { name: "Metaphor", statement: "An implied comparison identifying one thing with another; it transfers qualities between them." },
          { name: "Personification", statement: "Giving human qualities or actions to non-human things." },
          { name: "Symbolism", statement: "An image that stands for a larger idea beyond its literal meaning." },
        ],
        workedExample: {
          problem: "How does 'lit the great lamp like a wedding vow' work in 'The Lighthouse Keeper'?",
          solution: "The simile compares lighting the lamp to making a wedding vow — an act of sacred commitment. It tells us the keeper's work is not a job but a devotion: he lights the lamp 'though no one saw', the way a vow is made for its own sake rather than for an audience. The religious overtones of 'vow' deepen the later image of him as 'a keeper of one flame in a kingdom of dark' — his whole life is a kind of faith.",
        },
      },
      questions: [
        {
          id: "el11-u10-metaphor-symbol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "What technique is used in 'the gulls wrote letters / he never answered'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Metaphor"
                    },
                    {
                              "id": "b",
                              "text": "Personification"
                    },
                    {
                              "id": "c",
                              "text": "Rhyme"
                    },
                    {
                              "id": "d",
                              "text": "Onomatopoeia"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Personification",
                              "statement": "Giving human qualities or actions to non-human things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gulls do not literally write letters; giving them that human action is personification.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** Personification — the gulls are given the human act of writing letters.",
          "commonErrors": [
                    "Calling it metaphor because no 'like' is used; personification is the precise term."
          ]
},
        },
        {
          id: "el11-u10-metaphor-symbol-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "Give two examples of personification in 'The Lighthouse Keeper'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Personification",
                              "statement": "Non-human things are given human actions or qualities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Credit 'the gulls wrote letters' — gulls given the human act of writing.",
                              "evidence": "the gulls wrote letters",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Credit 'the sea rehearsed its noise' — the sea given the human act of rehearsing; or 'years stacked like cordwood' treated as a deliberate figure.",
                              "evidence": "The sea rehearsed its noise",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. 'the gulls wrote letters' and 'the sea rehearsed its noise' — both give non-human things human actions.",
          "commonErrors": [
                    "Quoting human actions by the keeper himself as personification."
          ]
},
        },
        {
          id: "el11-u10-metaphor-symbol-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Market Morning",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "The market wakes before the street -\nstalls unfold like paper fans,\nthe fishmonger slaps the ice awake,\nthe flower seller counts her colours\nin buckets. Bread arrives still warm\nin wicker, prices chalked in gold.\nBy nine the square is loud with bargains,\nand every shadow wears a smile."
},
          stem: "Explain the effect of the metaphor 'stalls unfold like paper fans'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Metaphor and simile",
                              "statement": "A comparison transfers qualities between the two things compared."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The comparison is a simile ('like'), likening stalls to paper fans that 'unfold' — suggesting they open gracefully and colourfully.",
                              "evidence": "stalls unfold like paper fans",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The paper-fan image is delicate, decorative and colourful, giving the market an air of festivity rather than mere commerce.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Unfold' also suggests morning ritual — the market literally opening its petals — contributing to the poem's waking theme.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The simile makes the stalls seem delicate, colourful and ceremonial — like paper fans opening — which gives the market a festive, waking energy.",
          "commonErrors": [
                    "Saying 'it makes a picture' without explaining what the comparison transfers."
          ]
},
        },
        {
          id: "el11-u10-metaphor-symbol-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "Analyse the final image: 'a keeper of one flame in a kingdom of dark'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cumulative metaphor",
                              "statement": "The closing image gathers the poem's earlier images into a single symbolic judgement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'one flame' compresses the whole poem's lamp into a symbol of solitary, faithful duty.",
                              "evidence": "a keeper of one flame",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'a kingdom of dark' turns the sea and sky into a vast hostile realm — the keeper's whole world is darkness except his flame.",
                              "evidence": "a kingdom of dark",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The image resolves the poem's tension: loneliness ('no one saw', 'never answered') is answered by purpose — he keeps the flame anyway.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The closing metaphor gathers the poem's images into one judgement: the keeper's 'one flame' is a symbol of solitary devotion set against 'a kingdom of dark', resolving his loneliness into noble purpose.",
          "commonErrors": [
                    "Paraphrasing the image without explaining its symbolic weight."
          ]
},
        },
        {
          id: "el11-u10-metaphor-symbol-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "What does the lighthouse flame symbolise in the poem? Support your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Symbolism",
                              "statement": "A symbol is an image that stands for a larger idea."
                    },
                    {
                              "kind": "skill",
                              "name": "Symbol interpretation",
                              "statement": "Support a symbolic reading with the poem's details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The flame/lamp is first literal — the lighthouse lamp — but becomes symbolic through repetition: 'the great lamp', 'the same small sun', 'one flame'.",
                              "evidence": "the same small sun",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Its symbolism is devotion and duty: he relights it 'each dawn' 'though no one saw' — the flame represents faithfulness without reward.",
                              "evidence": "though no one saw",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Against 'a kingdom of dark', the flame also symbolises hope — a small human light against indifferent nature.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The flame symbolises devotion, duty and hope: relit 'each dawn' 'though no one saw', it represents faithfulness without recognition — a small human light held against 'a kingdom of dark'.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating interpretation of symbolism; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant interpretation of symbolism; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited interpretation of symbolism; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Treating the lamp as only a literal object.",
                    "Offering a symbolic meaning with no supporting detail."
          ]
},
        },
        {
          id: "el11-u10-metaphor-symbol-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "Read 'The Lighthouse Keeper'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two examples of figurative language (metaphor, simile or personification) with quotations.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the poem's symbolism conveys its central idea.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Figurative language",
                              "statement": "Name the technique and quote it accurately."
                    },
                    {
                              "kind": "technique",
                              "name": "Symbolism",
                              "statement": "Explain what the central image stands for beyond the literal."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit one accurate example — 'lit the great lamp like a wedding vow' (simile), 'the gulls wrote letters' (personification), 'a kingdom of dark' (metaphor).",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit a second distinct example with correct technique name.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The lamp/flame is the central symbol: literal light becomes a symbol of duty and faith.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The repetition — 'each dawn he relit', 'the same small sun' — turns the symbol into a measure of the keeper's devotion.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The closing 'kingdom of dark' defines what the flame stands against: indifference, isolation, vastness — so the symbol carries the poem's whole meaning.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) Any two of: 'like a wedding vow' (simile), 'the gulls wrote letters' (personification), 'a kingdom of dark' (metaphor). (b) The lamp/flame symbolises devotion and hope; its repetition measures the keeper's faithfulness, and 'kingdom of dark' defines the indifference it stands against.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating analysis of symbolism and central idea; judicious, well-chosen evidence",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant analysis of symbolism and central idea; appropriate references",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited analysis of symbolism and central idea; few or unselective references",
                              "part": "b"
                    }
          ],
          "commonErrors": [
                    "In (a) misnaming the technique or quoting inaccurately.",
                    "In (b) treating symbolism as decoration rather than meaning."
          ]
},
        },
      ],
    },
  ],

};
