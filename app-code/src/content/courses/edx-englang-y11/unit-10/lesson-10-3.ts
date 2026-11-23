import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "el11-u10-lesson-10-3",
  code: "10-3",
  title: "Whole-Poem Analysis and Comparison",
  goal: "I CAN write an integrated analysis of a whole poem and construct a justified comparison of two poems.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
  
  vocabulary: [
    { term: "Integrated analysis", definition: "Weaving together language, structure and form into one coherent reading of a poem." },
    { term: "Central concern", definition: "The main idea or preoccupation a poem explores." },
    { term: "Shift", definition: "A turn in the poem's direction, tone or subject." },
    { term: "Comparative judgement", definition: "A justified view on how two poems are similar and different." },
    { term: "Enjambment", definition: "Running a sentence over a line break without punctuation." },
    { term: "Volta", definition: "A turn or shift in a poem's argument or mood, often marked by a stanza break or punctuation." },
  ],
  concepts: [
    {
      id: "el11-u10-whole-poem",
      title: "Analysing a whole poem",
      skill: "Write an integrated analysis that connects a poem's imagery, structure, sound and shifts into a coherent reading.",
      lesson: {
        sections: [
          {
            heading: "Beyond the quotation",
            body: "A whole-poem answer is not a list of techniques. It is an argument: **what is the poem about, and how do its methods create that meaning?** Start with the central concern (lonely devotion, a market's energy, a departure), then show how imagery, structure and sound each contribute. Connect them: 'the images of cold and dark make the lamp's flame seem fragile, and the daily relighting shows devotion persisting'.",
          },
          {
            heading: "Tracking the poem's movement",
            body: "Poems move: they begin somewhere, turn, and end somewhere changed. In 'The Lighthouse Keeper' the poem moves from the climb ('Before the light he climbed'), through the years ('Years stacked like cordwood'), to the closing judgement ('a keeper of one flame'). Mark the movement and explain what the ending adds.",
          },
          {
            heading: "The evaluative close",
            body: "A strong analysis ends with a judgement: how effective is the poem, and why? 'The poem earns its closing image because every earlier detail — the cold tea, the unanswered letters — has prepared the reader to see the flame as noble.' Evaluation is AO3: it rewards weighing, not just describing.",
          },
        ],
        keyFormulas: [
          { name: "Integrated analysis", statement: "Connecting imagery, structure, sound and meaning into one argument about the poem." },
          { name: "Central concern", statement: "The main idea or preoccupation the poem explores." },
          { name: "Poetic movement", statement: "The poem's progression from opening to turn to resolution." },
        ],
        workedExample: {
          problem: "Write a one-paragraph analysis of 'The Lighthouse Keeper'.",
          solution: "The poem presents lonely devotion through accumulated detail: cold, solitary images — 'salt on his cuffs', 'tea gone cold', 'hundred stairs' — establish isolation, while 'though no one saw' and 'letters he never answered' confirm it. Yet the structure moves from the climb to the daily relighting ('each dawn he relit'), so the poem's form enacts persistence. The central image — 'a keeper of one flame in a kingdom of dark' — resolves the tension: the flame symbolises duty and hope against indifference. The poem earns its ending because every earlier detail has prepared the reader to see the keeper's faithfulness as noble.",
        },
      },
      questions: [
        {
          id: "el11-u10-whole-poem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "What is the central concern of 'The Lighthouse Keeper'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The dangers of working at sea."
                    },
                    {
                              "id": "b",
                              "text": "Lonely devotion and the persistence of duty."
                    },
                    {
                              "id": "c",
                              "text": "The history of lighthouses."
                    },
                    {
                              "id": "d",
                              "text": "A sailor's fear of the storm."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Central concern",
                              "statement": "Identify the poem's main preoccupation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The poem is about a keeper who lights the lamp alone, unseen — lonely devotion and duty.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Lonely devotion and the persistence of duty.",
          "commonErrors": [
                    "Choosing a literal subject (the sea, the job) rather than the poem's concern."
          ]
},
        },
        {
          id: "el11-u10-whole-poem-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "Identify the poem's central image and state its literal subject.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Central image",
                              "statement": "The image that carries the poem's meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Central image: the lighthouse lamp/flame — 'the great lamp', 'the same small sun', 'one flame'.",
                              "evidence": "one flame in a kingdom of dark",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Literal subject: the lamp the keeper lights each night to warn ships.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "The central image is the lighthouse flame; literally it is the lamp the keeper lights to warn ships.",
          "commonErrors": [
                    "Naming the keeper rather than the image."
          ]
},
        },
        {
          id: "el11-u10-whole-poem-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "How does the poem move through time?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Temporal structure",
                              "statement": "Track how the poem moves through time or stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It begins before dawn — 'Before the light he climbed the hundred stairs' — the nightly ritual.",
                              "evidence": "Before the light he climbed",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It expands into years — 'Years stacked like cordwood / against the door' — compressing a lifetime into one image.",
                              "evidence": "Years stacked like cordwood",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It ends at the daily repetition — 'each dawn he relit' — so time becomes cyclical, devotion endless.",
                              "evidence": "each dawn he relit",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poem moves from a single night ('Before the light') through compressed years ('Years stacked like cordwood') to the endless daily cycle ('each dawn he relit') — time becomes the measure of devotion.",
          "commonErrors": [
                    "Saying the poem 'tells a story' without noting the time structure."
          ]
},
        },
        {
          id: "el11-u10-whole-poem-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "Analyse how the poem balances isolation and purpose.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tension",
                              "statement": "A poem often holds two opposing forces in balance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Isolation is built through detail: 'hundred stairs', 'salt on his cuffs', 'tea gone cold' — solitary, cold, unattended.",
                              "evidence": "tea gone cold",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It is confirmed by 'though no one saw' and 'letters he never answered' — unseen and unanswered.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Purpose answers it: 'each dawn he relit' — the relighting is devotion without reward.",
                              "evidence": "each dawn he relit",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The closing image resolves the balance: 'one flame in a kingdom of dark' — isolation becomes the setting for noble purpose.",
                              "evidence": "a kingdom of dark",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poem balances isolation ('no one saw', 'never answered', 'tea gone cold') against purpose ('each dawn he relit'); the closing image resolves it — solitary devotion becomes noble duty.",
          "commonErrors": [
                    "Treating isolation and purpose as separate rather than balanced."
          ]
},
        },
        {
          id: "el11-u10-whole-poem-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark."
},
          stem: "How does the poet create sympathy for the keeper? Support your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sympathy through detail",
                              "statement": "Small humanising details make a distant figure relatable."
                    },
                    {
                              "kind": "skill",
                              "name": "Evidence-led analysis",
                              "statement": "Tie each claim about sympathy to a specific image."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Humanising details — 'tea gone cold', 'salt on his cuffs' — show a person, not a symbol: he drinks tea, he gets salt on his clothes.",
                              "evidence": "tea gone cold",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The unanswered letters — 'the gulls wrote letters / he never answered' — make his isolation poignant rather than heroic.",
                              "evidence": "he never answered",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'though no one saw' makes his devotion sacrificial — he keeps the flame for no audience, which earns the reader's admiration and pity.",
                              "evidence": "though no one saw",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Sympathy is built through small human details ('tea gone cold', 'salt on his cuffs'), the poignancy of 'letters he never answered', and the sacrifice of 'though no one saw' — the keeper is devoted and unseen, which earns both pity and admiration.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating analysis of how sympathy is created; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant analysis of how sympathy is created; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited analysis of how sympathy is created; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Saying the poem is 'sad' without explaining how detail creates sympathy."
          ]
},
        },
        {
          id: "el11-u10-whole-poem-q6",
          difficulty: "challenge",
          totalMarks: 12,
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
                    "prompt": "Identify two techniques used in the poem with quotations.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the poem's imagery creates its mood.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write an evaluative paragraph on how effectively the poem conveys its central concern.",
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
                              "name": "Technique identification",
                              "statement": "Name and quote accurately."
                    },
                    {
                              "kind": "technique",
                              "name": "Imagery and mood",
                              "statement": "Explain how images accumulate into atmosphere."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative writing",
                              "statement": "Point, evidence, analysis, verdict."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit two accurate techniques — personification ('the gulls wrote letters'), simile ('like a wedding vow'), metaphor ('a kingdom of dark'), symbolism ('one flame').",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cold, solitary images — 'salt', 'tea gone cold', 'grey sky' — create isolation; the lamp images — 'small sun', 'one flame' — create fragile hope; together they make a mood of lonely devotion.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Point: the poem effectively conveys lonely devotion.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evidence and analysis: every image serves the theme — cold detail for isolation, the daily relighting for devotion, the closing metaphor for resolution.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Verdict: the poem earns its ending because the accumulated detail makes the final image feel inevitable and noble.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) Two techniques with quotations. (b) Cold imagery creates isolation; lamp imagery creates fragile hope — together a mood of lonely devotion. (c) A justified evaluative paragraph concluding the poem effectively conveys its concern through unified imagery and structure.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating evaluative judgement of the poem's effectiveness; judicious, well-chosen evidence",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluative judgement of the poem's effectiveness; appropriate references",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluative judgement of the poem's effectiveness; few or unselective references",
                              "part": "c"
                    }
          ],
          "commonErrors": [
                    "In (a) misnaming techniques.",
                    "In (b) listing images without mood.",
                    "In (c) retelling instead of judging."
          ]
},
        },
      ],
    },
    {
      id: "el11-u10-compare-poems",
      title: "Comparing two poems",
      skill: "Construct a justified comparison of two poems, analysing similarities and differences in subject, method and effect.",
      lesson: {
        sections: [
          {
            heading: "The comparison frame",
            body: "A comparative answer is not two separate analyses. It is an argument about **how the poems relate**: what they share, where they differ, and what those differences achieve. Keep it parallel — same point about each poem before moving on. 'Both poems deal with departure, but Poem 1 dramatises the decision while Poem 2 enacts the journey' is a comparative point; 'Poem 1 is about leaving and Poem 2 is about a ferry' is not.",
          },
          {
            heading: "Subject, voice, method",
            body: "Compare along three axes: **subject** (what each is about), **voice/perspective** (who speaks, to whom) and **method** (techniques, form, structure). 'Instructions for Leaving' uses second-person imperatives; 'The Night Ferry' uses third-person observation. That difference in voice is a comparative point about immediacy versus detachment.",
          },
          {
            heading: "The evaluative close",
            body: "End with a justified judgement: which poem is more effective, and why? 'The Night Ferry's unbroken stanza enacts its journey more powerfully than the fragmented instructions of Poem 1, though Poem 1's final release is emotionally more satisfying.' Nuance — acknowledging both strengths — earns more than a simple verdict.",
          },
        ],
        keyFormulas: [
          { name: "Comparative analysis", statement: "Weighing how two poems are similar and different in subject, voice and method." },
          { name: "Parallel comparison", statement: "Keeping the two poems strictly parallel: same point about each before moving on." },
          { name: "Comparative judgement", statement: "A justified view on which poem achieves its effect more powerfully." },
        ],
        workedExample: {
          problem: "Compare 'Instructions for Leaving' and 'The Night Ferry'.",
          solution: "Both poems deal with departure, but differently. 'Instructions for Leaving' dramatises the moment of decision: second-person imperatives ('You will need', 'Do not look back') make the reader the leaver, and the colon in 'remember: you are allowed to go' releases the tension into permission. 'The Night Ferry' enacts the journey itself: a single unbroken stanza, third-person observation, and the behind/ahead movement from 'a town switches off' to 'the far shore rehearses morning' keep the poem suspended between past and future. Poem 1 is about the decision to leave; Poem 2 is about the experience of leaving. Poem 1's final line is emotionally more satisfying; Poem 2's form is structurally more powerful.",
        },
      },
      questions: [
        {
          id: "el11-u10-compare-poems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Two Poems of Departure",
          "author": "Written for Akademik Space",
          "source": "Original poems for comparison",
          "lineNumbers": true,
          "text": "Poem 1 - 'Instructions for Leaving'\nYou will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go.\n\nPoem 2 - 'The Night Ferry'\nThe ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "What do both poems in 'Two Poems of Departure' share?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The same speaker and situation."
                    },
                    {
                              "id": "b",
                              "text": "A theme of departure or leaving."
                    },
                    {
                              "id": "c",
                              "text": "The same rhyme scheme."
                    },
                    {
                              "id": "d",
                              "text": "The same tone of anger."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparative subject",
                              "statement": "Identify what the poems share before analysing differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both poems deal with leaving/departure — one by land instruction, one by sea journey — but their speakers, forms and tones differ.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A theme of departure or leaving.",
          "commonErrors": [
                    "Assuming shared subject means shared everything."
          ]
},
        },
        {
          id: "el11-u10-compare-poems-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Two Poems of Departure",
          "author": "Written for Akademik Space",
          "source": "Original poems for comparison",
          "lineNumbers": true,
          "text": "Poem 1 - 'Instructions for Leaving'\nYou will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go.\n\nPoem 2 - 'The Night Ferry'\nThe ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "State one similarity and one difference in the poems' subjects or methods.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Similarity and difference",
                              "statement": "Name one of each precisely."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Similarity: both poems deal with leaving/departure and use quiet, hushed tones.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Difference: Poem 1 dramatises the decision to leave (imperatives, 'you'); Poem 2 enacts the journey (observation, ferry crossing).",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Similarity: both explore departure with a hushed tone. Difference: Poem 1 dramatises the decision; Poem 2 enacts the journey.",
          "commonErrors": [
                    "Giving two similarities or two differences instead of one of each."
          ]
},
        },
        {
          id: "el11-u10-compare-poems-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Two Poems of Departure",
          "author": "Written for Akademik Space",
          "source": "Original poems for comparison",
          "lineNumbers": true,
          "text": "Poem 1 - 'Instructions for Leaving'\nYou will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go.\n\nPoem 2 - 'The Night Ferry'\nThe ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "How do the poems differ in voice and perspective?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Voice and perspective",
                              "statement": "Who speaks and how shapes the reader's relationship to the poem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poem 1 uses second-person imperatives — 'You will need', 'Do not look back' — making the reader the leaver.",
                              "evidence": "You will need a coat",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Poem 2 uses third-person observation — 'The ferry crosses', 'The captain does not speak' — making the reader a watcher.",
                              "evidence": "The captain does not speak",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The difference: immediacy versus detachment — Poem 1 involves, Poem 2 observes; both create intimacy but of different kinds.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Poem 1 addresses 'you' directly, involving the reader in the leaving; Poem 2 observes in third person, making the reader a quiet witness — immediacy versus detachment.",
          "commonErrors": [
                    "Noting 'you' versus 'the ferry' without explaining the effect."
          ]
},
        },
        {
          id: "el11-u10-compare-poems-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Two Poems of Departure",
          "author": "Written for Akademik Space",
          "source": "Original poems for comparison",
          "lineNumbers": true,
          "text": "Poem 1 - 'Instructions for Leaving'\nYou will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go.\n\nPoem 2 - 'The Night Ferry'\nThe ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "Compare how each poem ends and the effect of its final line.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Enjambment and volta",
                              "statement": "The ending often carries the poem's emotional resolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poem 1 ends 'remember: you are allowed to go' — a colon gathers the poem into permission; the final line is the longest and most open.",
                              "evidence": "you are allowed to go",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Poem 2 ends 'in the smallest of whispers' — a soft, unresolved close; morning is only 'rehearsed', not arrived.",
                              "evidence": "the smallest of whispers",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Poem 1 resolves into permission (leaving is allowed); Poem 2 suspends into expectation (morning is coming) — resolution versus anticipation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Poem 1 ends in permission — 'you are allowed to go' resolves the hesitation into freedom. Poem 2 ends in anticipation — 'the smallest of whispers' keeps morning just out of reach. One closes, the other opens.",
          "commonErrors": [
                    "Describing endings separately without comparing their effects."
          ]
},
        },
        {
          id: "el11-u10-compare-poems-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Two Poems of Departure",
          "author": "Written for Akademik Space",
          "source": "Original poems for comparison",
          "lineNumbers": true,
          "text": "Poem 1 - 'Instructions for Leaving'\nYou will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go.\n\nPoem 2 - 'The Night Ferry'\nThe ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "Compare the mood of the two poems and how each creates it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Mood comparison",
                              "statement": "Compare how each poem's methods create atmosphere."
                    },
                    {
                              "kind": "skill",
                              "name": "Parallel comparison",
                              "statement": "Keep the two poems strictly parallel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poem 1's mood is tender hesitation: soft sibilance ('slowly', 'sighs'), short imperatives, the rose that 'have had enough of you' — reluctant but gentle.",
                              "evidence": "the bus sighs at the kerb",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Poem 2's mood is hushed suspension: sibilance ('switches', 'whispers'), a single unbroken stanza, 'the captain does not speak' — quiet watchfulness.",
                              "evidence": "in the smallest of whispers",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both share hushedness, but Poem 1's is personal and emotional; Poem 2's is observational and suspended — tenderness versus stillness.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Both poems are hushed, but differently: Poem 1 creates tender, reluctant hesitation through imperatives and soft sounds; Poem 2 creates suspended, observational stillness through its unbroken stanza and whispered sibilance.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating comparison of mood and its creation; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant comparison of mood and its creation; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comparison of mood and its creation; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Saying both are 'sad' without analysing how mood is created differently."
          ]
},
        },
        {
          id: "el11-u10-compare-poems-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "Two Poems of Departure",
          "author": "Written for Akademik Space",
          "source": "Original poems for comparison",
          "lineNumbers": true,
          "text": "Poem 1 - 'Instructions for Leaving'\nYou will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go.\n\nPoem 2 - 'The Night Ferry'\nThe ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "Read both poems of departure.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State one similarity and one difference in the poems' subjects.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse one difference in their methods (voice, structure or sound) and its effect.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Write an evaluative paragraph judging which poem is more effective.",
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
                              "name": "Comparative subject",
                              "statement": "Name similarity and difference precisely."
                    },
                    {
                              "kind": "technique",
                              "name": "Method comparison",
                              "statement": "Analyse one method difference and its effect."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluative comparison",
                              "statement": "Point, evidence, analysis, verdict."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Similarity: both explore departure/leaving with hushed tones. Difference: Poem 1 dramatises the decision; Poem 2 enacts the journey.",
                              "marks": 3,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Method difference — voice: second-person imperatives versus third-person observation; or structure: fragmented lines versus unbroken stanza. Effect: immediacy versus suspension.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Point: judge which poem is more effective and why.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evidence and analysis: Poem 1's final release ('you are allowed to go') is emotionally satisfying; Poem 2's unbroken form enacts the journey more powerfully — a nuanced comparison earns credit.",
                              "marks": 3,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Verdict: justified conclusion — e.g. Poem 1 more emotionally affecting, Poem 2 more structurally unified — either defensible with evidence.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) Similarity: both explore departure; difference: decision versus journey. (b) Voice difference — 'you' versus observation — creates immediacy versus detachment. (c) A justified evaluative paragraph weighing both poems' strengths.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating evaluative comparison of the two poems; judicious, well-chosen evidence",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluative comparison of the two poems; appropriate references",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluative comparison of the two poems; few or unselective references",
                              "part": "c"
                    }
          ],
          "commonErrors": [
                    "In (a) giving two similarities or two differences.",
                    "In (b) listing methods without effect.",
                    "In (c) summarising instead of judging."
          ]
},
        },
      ],
    },
  ],

};
