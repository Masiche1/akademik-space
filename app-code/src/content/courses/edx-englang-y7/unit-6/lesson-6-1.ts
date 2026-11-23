import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "el7-u6-lesson-6-1",
  code: "6-1",
  title: "Analysing Poetry",
  goal: "I CAN analyse poetic techniques, structure and the effect they create on the reader.",
  standards: ["Edexcel KS3 English Language — Reading: poetry analysis", "Key Stage 3 reading: poetic language"],
  
  vocabulary: [
    { term: "Imagery", definition: "Language that appeals to the senses — visual, auditory, tactile." },
    { term: "Metaphor", definition: "A comparison stating one thing IS another ('time is a thief')." },
    { term: "Simile", definition: "A comparison using 'like' or 'as' ('brave as a lion')." },
    { term: "Personification", definition: "Giving human qualities to non-human things." },
    { term: "Volta", definition: "A turn or shift in a poem, often marked by 'but' or a change of direction." },
    { term: "Stanza", definition: "A group of lines forming a unit within a poem, like a paragraph." },
  ],
  concepts: [
    {
      id: "el7-u6-poetic-tech",
      title: "Poetic language and techniques",
      skill: "Identify and analyse imagery, metaphor, simile, personification and sound devices in poems.",
      lesson: {
        sections: [
          {
            heading: "Core poetic techniques",
            body: "Poets compress meaning — every word works harder than in prose. Key techniques:\n\n- **Imagery**: language appealing to the senses — 'the smell of rain on hot pavement' (smell, touch)\n- **Metaphor**: direct comparison — 'the city is a jungle'\n- **Simile**: comparison with like/as — 'cold as ice'\n- **Personification**: human qualities for non-humans — 'the wind whispered'\n- **Alliteration**: repeated initial sounds — 'slippery, sliding snakes'\n- **Onomatopoeia**: words sounding like their meaning — 'buzz', 'crash', 'hiss'",
          },
          {
            heading: "Analysing effect",
            body: "Never just name a technique — explain its **effect**. 'The wind whispered' doesn't just personify; it makes the wind seem secretive, alive, almost threatening.\n\nAsk: What does this technique make the reader feel or see? How does it build the poem's mood or meaning?\n\n**P.E.E. structure**: Point (technique identified) → Evidence (quotation) → Explanation (effect on reader/meaning). This is the backbone of all poetry analysis.",
          },
        ],
        keyFormulas: [
          { name: "P.E.E.", statement: "Point, Evidence, Explanation — the analysis formula." },
          { name: "Imagery", statement: "Sensory language creating mental pictures." },
          { name: "Sound devices", statement: "Alliteration, onomatopoeia, rhyme — sound reinforces meaning." },
        ],
        workedExample: {
          problem: "Analyse: 'The moon was a silver coin in the sky.'",
          solution: "Metaphor ('moon = coin') creates an image of something small, precious, cold and distant. The metallic 'silver' suggests wealth but also lifelessness — the moon is beautiful but remote. Effect: the speaker feels awe mixed with loneliness.",
        },
      },
      questions: [
        {
          id: "el7-u6-pt-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a simile?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A comparison using 'like' or 'as'"
                    },
                    {
                              "id": "b",
                              "text": "Giving human qualities to objects"
                    },
                    {
                              "id": "c",
                              "text": "Repeated initial sounds"
                    },
                    {
                              "id": "d",
                              "text": "A group of poem lines"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Simile",
                              "statement": "Comparison using like/as."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Simile = like/as comparison; metaphor = direct 'is' comparison.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** A comparison using 'like' or 'as'",
          "commonErrors": [
                    "Confusing simile with metaphor."
          ]
},
        },
        {
          id: "el7-u6-pt-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Identify the technique in 'the wind whispered through the trees' and state its effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Personification",
                              "statement": "Human qualities given to non-human things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Technique: personification (whispering = human action).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Effect: wind seems gentle, secretive, alive — not just blowing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect on mood: creates intimacy or quiet unease.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Personification — makes the wind seem gentle/secretive and alive, softening the scene.",
          "commonErrors": [
                    "Naming technique without effect."
          ]
},
        },
        {
          id: "el7-u6-pt-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Harbour",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "The boats creaked and complained\nas the tide dragged them low.\nGulls shrieked like rusty hinges\nover the harbour's silver glow."
},
          stem: "Analyse the sound devices in the first two lines of this poem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound devices",
                              "statement": "Onomatopoeia and alliteration create auditory effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'creaked' and 'complained' are onomatopoeic — they sound like their meaning.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Alliteration in 'creaked and complained' (c sounds) reinforces the harsh noise.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: makes the boats sound old, groaning, uncomfortable — matching the tidal drag.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sound mirrors meaning — the poem 'sounds' like a harbour.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Onomatopoeia ('creaked', 'complained') and alliteration ('c') make the boats sound groaning and old — sound mirrors the scene.",
          "commonErrors": [
                    "Listing devices without explaining effect."
          ]
},
        },
        {
          id: "el7-u6-pt-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Harbour",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "The boats creaked and complained\nas the tide dragged them low.\nGulls shrieked like rusty hinges\nover the harbour's silver glow."
},
          stem: "How does the simile 'gulls shrieked like rusty hinges' develop the poem's mood?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Simile and mood",
                              "statement": "Comparisons shape emotional atmosphere."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Simile identified: gulls compared to rusty hinges.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Rusty' suggests decay, age, unpleasant noise — not natural beauty.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Hinges' are mechanical and jarring — contrasts with the 'silver glow' beauty.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: the harbour feels worn, melancholic, slightly threatening despite its beauty.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The simile makes the gulls sound harsh and mechanical, contrasting beauty with decay — mood becomes melancholic and uneasy.",
          "commonErrors": [
                    "Describing the simile but not its mood effect."
          ]
},
        },
        {
          id: "el7-u6-pt-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Harbour",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "The boats creaked and complained\nas the tide dragged them low.\nGulls shrieked like rusty hinges\nover the harbour's silver glow."
},
          stem: "Analyse how imagery and sound work together in this poem's final couplet.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the imagery in lines 3-4.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify the sound devices.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the combined effect.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Integrated analysis",
                              "statement": "Imagery + sound = multi-sensory effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Imagery: 'silver glow' (visual), 'rusty hinges' (tactile/visual).",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Sound: 'shrieked' (onomatopoeia), 'hinges' (harsh consonants), rhyme glow/low earlier.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Combined: visual beauty (silver) with auditory harshness (shrieked) — tension between attraction and unease.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Imagery identified with examples.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Imagery missing.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Sound devices identified.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Sound devices missing.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Combined effect explained.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No combined explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Silver visual beauty + shrieking auditory harshness = tension between attraction and unease.",
          "commonErrors": [
                    "Analysing parts separately without linking them."
          ]
},
        },
        {
          id: "el7-u6-pt-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "The Harbour",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "The boats creaked and complained\nas the tide dragged them low.\nGulls shrieked like rusty hinges\nover the harbour's silver glow."
},
          stem: "Write a full analysis of this poem covering technique, structure and overall effect.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify and analyse two poetic techniques.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Comment on the poem's structure (quatrain, rhyme, line length).",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain the overall mood and its effect on the reader.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Full poetry analysis",
                              "statement": "Techniques + structure + mood = complete analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two techniques identified and analysed with P.E.E.",
                              "marks": 4,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Structure: single quatrain, ABAB rhyme (low/glow), consistent line length, couplet-like ending.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Mood: melancholic, worn, beautiful-but-uneasy; effect on reader explained.",
                              "marks": 3,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Two techniques fully analysed with evidence and effect.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Two techniques partially analysed.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One technique analysed.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No technique analysis.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Structure accurately described.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial structure comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No structure comment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Mood identified with reader effect explained.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Mood named without effect.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No mood analysis.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "A worn, melancholic harbour poem — beauty and decay in tension, achieved through onomatopoeia, simile and tight quatrain structure.",
          "commonErrors": [
                    "Technique-spotting without effect.",
                    "Ignoring structure."
          ]
},
        },
      ],
    },
    {
      id: "el7-u6-poem-form",
      title: "Poem structure and form",
      skill: "Analyse how stanza, rhyme, line length and poetic form shape meaning.",
      lesson: {
        sections: [
          {
            heading: "Structural elements",
            body: "**Stanza**: like a paragraph — groups lines into units. A **quatrain** (4 lines) is the most common. Stanza breaks create pauses and shifts.\n\n**Rhyme scheme**: the pattern of end rhymes, labelled ABAB, AABB etc. Rhyme creates music and can highlight key words.\n\n**Line length and enjambment**: short lines feel clipped and emphatic; long lines flow. **Enjambment** (running a sentence over a line break) creates momentum — 'I wandered lonely as a cloud / That floats on high o'er vales and hills' — the sentence continues across the break, pulling the reader on.\n\n**Volta**: the 'turn' in a poem where the argument or mood shifts — often signalled by 'but', 'yet', or a change in tone.",
          },
          {
            heading: "Poetic forms",
            body: "- **Sonnet**: 14 lines, often with a volta — Shakespearean (ABAB CDCD EFEF GG) or Petrarchan (octave + sestet)\n- **Haiku**: 3 lines, 5-7-5 syllables — nature focus, often a contrast between two images\n- **Free verse**: no regular rhyme or meter — relies on rhythm, imagery and line breaks\n- **Ballad**: narrative poem, often quatrains with ABCB rhyme — tells a story\n- **Acrostic**: first letters of lines spell a word",
          },
        ],
        keyFormulas: [
          { name: "Rhyme scheme", statement: "Letter pattern of end rhymes: ABAB, AABB, ABCB." },
          { name: "Enjambment", statement: "Sentence runs over a line break for momentum." },
          { name: "Volta", statement: "The turn — shift in argument or mood." },
          { name: "Haiku", statement: "3 lines, 5-7-5 syllables." },
        ],
        workedExample: {
          problem: "A poem has 14 lines with a turn after line 8. What form is it likely to be?",
          solution: "A Shakespearean or Petrarchan sonnet — 14 lines with a volta (turn) is the defining feature of the sonnet form.",
        },
      },
      questions: [
        {
          id: "el7-u6-pf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a stanza?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A single line of poetry"
                    },
                    {
                              "id": "b",
                              "text": "A group of lines forming a unit"
                    },
                    {
                              "id": "c",
                              "text": "The rhyme pattern"
                    },
                    {
                              "id": "d",
                              "text": "A type of poem"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stanza",
                              "statement": "Group of lines = poetic paragraph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stanza = group of lines forming a unit, like a paragraph in prose.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A group of lines forming a unit",
          "commonErrors": [
                    "Confusing stanza with line or rhyme."
          ]
},
        },
        {
          id: "el7-u6-pf-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What is enjambment and what effect does it create?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Enjambment",
                              "statement": "Sentence continues across line break."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enjambment = running a sentence over a line break.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Effect: creates momentum, pulls reader forward.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Contrasts with end-stopped lines which feel emphatic/complete.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Sentence running over a line break — creates flow and momentum.",
          "commonErrors": [
                    "Confusing with rhyme."
          ]
},
        },
        {
          id: "el7-u6-pf-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A poem has 14 lines and a clear 'turn' after the eighth line. What form is it? Explain your reasoning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sonnet form",
                              "statement": "14 lines with volta."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies 14-line structure.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Identifies the 'turn' = volta.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Concludes it's a sonnet (Shakespearean or Petrarchan).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Volta explained: shift in argument/mood — sonnet's defining feature.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "A sonnet — 14 lines with a volta (turn) after line 8.",
          "commonErrors": [
                    "Not linking volta to sonnet form."
          ]
},
        },
        {
          id: "el7-u6-pf-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Autumn",
          "author": "Written for Akademik Space",
          "text": "Leaves fall like whispers from the trees,\nEach one a memory carried on the breeze.\nThe garden sleeps beneath a blanket brown,\nAnd summer's voice is fading, fading down."
},
          stem: "Analyse the rhyme scheme and its effect in this quatrain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rhyme scheme analysis",
                              "statement": "Pattern of end rhymes shapes musicality and emphasis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rhyme scheme identified: AABB (trees/breeze, brown/down).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Couplet rhyme creates a sense of completion and closure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Key words rhymed: 'trees'/'breeze' (nature sounds), 'brown'/'down' (decline).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: reinforces the theme of fading/ending — sound echoes meaning.",
                              "marks": 2,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "AABB couplet rhyme creates closure and echoes the theme of fading — 'brown/down' rhymes reinforce decline.",
          "commonErrors": [
                    "Naming scheme without effect."
          ]
},
        },
        {
          id: "el7-u6-pf-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Autumn",
          "author": "Written for Akademik Space",
          "text": "Leaves fall like whispers from the trees,\nEach one a memory carried on the breeze.\nThe garden sleeps beneath a blanket brown,\nAnd summer's voice is fading, fading down."
},
          stem: "Compare the effects of line 2 ('Each one a memory carried on the breeze') and line 4 ('And summer's voice is fading, fading down') — how does structure change meaning?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Analyse line 2's structure.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse line 4's structure.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Structural analysis",
                              "statement": "Line structure, repetition and punctuation shape pace."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Line 2: flowing, descriptive, carries the leaf-as-memory metaphor gently.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "Line 2 ends with 'breeze' — soft landing, open.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "Line 2 creates a sense of lightness and transience.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Line 4: repetition 'fading, fading' slows pace, emphasises decline.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Comma creates a pause — mimics the fading itself.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Line 4 ends with 'down' — falling motion, finality.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Line 2 structure analysed with effect.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial analysis.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No analysis.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Line 4 structure analysed with effect.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial analysis.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No analysis.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Line 2 flows gently (memory carried); line 4 slows with repetition 'fading, fading' — structure mirrors the decline it describes.",
          "commonErrors": [
                    "Analysing content only, not structure."
          ]
},
        },
        {
          id: "el7-u6-pf-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Autumn",
          "author": "Written for Akademik Space",
          "text": "Leaves fall like whispers from the trees,\nEach one a memory carried on the breeze.\nThe garden sleeps beneath a blanket brown,\nAnd summer's voice is fading, fading down."
},
          stem: "Write a full structural analysis of this poem.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the rhyme scheme and stanza type.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse how line structure and punctuation create pace.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain how the poem's structure reinforces its theme.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Structural mastery",
                              "statement": "Rhyme + line structure + punctuation = thematic reinforcement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AABB rhyme scheme identified; quatrain stanza.",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "Line 4's repetition 'fading, fading' and comma create slowing pace.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Enjambment/line endings analysed: 'breeze' open vs 'down' falling.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Theme (seasonal decline, memory) reinforced by structure: falling motion, fading repetition, settling rhyme.",
                              "marks": 3,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Rhyme scheme and stanza correctly identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial identification.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No identification.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Line structure and punctuation analysed with pace effect.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Partial analysis.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Minimal analysis.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No analysis.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Structure-theme link clearly explained.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial link.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No link.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "AABB quatrain; repetition and falling line endings mirror seasonal decline — structure enacts the theme.",
          "commonErrors": [
                    "Describing structure without linking to theme."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u6-poetry-notes",
      title: "Analysing poetry — notes",
      summary: "Use P.E.E.: Point, Evidence, Explanation. Techniques: imagery, metaphor, simile, personification, sound. Structure: stanza, rhyme, volta, enjambment.",
      sections: [
        { heading: "Technique checklist", body: "Imagery, metaphor, simile, personification, alliteration, onomatopoeia, rhyme. Always explain effect." },
        { heading: "Structure checklist", body: "Stanza type, rhyme scheme (ABAB etc.), line length, enjambment, volta (turn), poetic form (sonnet/haiku/free verse)." },
        { heading: "P.E.E. formula", body: "Point (name technique) → Evidence (quote) → Explanation (effect on reader/meaning)." },
        { heading: "Key forms", body: "Sonnet = 14 lines + volta. Haiku = 5-7-5 syllables. Free verse = no regular rhyme/meter." },
      ],
    },
  ],
};
