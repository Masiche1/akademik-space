import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "el11-u10-lesson-10-2",
  code: "10-2",
  title: "Sound, Rhythm and Form",
  goal: "I CAN analyse how rhyme, alliteration, rhythm, line breaks and stanza shape shape a poem's meaning and mood.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 AO1", "4EA1 AO2"],
  
  vocabulary: [
    { term: "Rhyme", definition: "Corresponding sounds at the ends of lines or within them; end rhyme, internal rhyme." },
    { term: "Alliteration", definition: "Repetition of the same initial consonant sound in nearby words." },
    { term: "Assonance", definition: "Repetition of vowel sounds within words." },
    { term: "Onomatopoeia", definition: "Words that imitate sounds, e.g. 'slaps', 'sighs'." },
    { term: "Enjambment", definition: "Running a sentence over a line break without punctuation, creating flow or suspense." },
    { term: "Caesura", definition: "A pause within a line, often marked by punctuation." },
    { term: "Stanza", definition: "A grouped set of lines in a poem, like a paragraph in prose." },
  ],
  concepts: [
    {
      id: "el11-u10-sound-rhythm",
      title: "Sound and rhythm",
      skill: "Identify rhyme, alliteration, assonance and rhythm, and explain how sound patterning shapes mood and pace.",
      lesson: {
        sections: [
          {
            heading: "Hearing the poem",
            body: "Read a poem aloud — or imagine it read aloud. **Sound devices** include rhyme, alliteration (repeated initial consonants), assonance (repeated vowel sounds) and onomatopoeia (words like 'slaps', 'sighs' that imitate sound). They are not decoration: a hushed 's' sound can make a poem feel quiet; hard consonants can make it feel harsh.",
          },
          {
            heading: "Rhythm and pace",
            body: "**Rhythm** is the pattern of stressed and unstressed syllables. Short lines and abrupt punctuation create a halting, careful pace — 'You will need a coat. You will need' mimics the stop-start of someone gathering nerve. Longer flowing lines speed the reader up. Match the rhythm to the mood: a departure poem often slows at the moment of leaving.",
          },
          {
            heading: "Sound creates meaning",
            body: "Sound patterning reinforces meaning: 'the bus sighs at the kerb' personifies the bus and uses the 's' sound to make the scene feel hushed. In analysis, always connect the sound device to its effect: 'the sibilant 's' sounds soften the line, matching the hushed night'.",
          },
        ],
        keyFormulas: [
          { name: "Alliteration", statement: "Repetition of initial consonant sounds; it binds words and can create softness or harshness." },
          { name: "Assonance", statement: "Repetition of vowel sounds within words; it creates internal music." },
          { name: "Rhythm", statement: "The pattern of stressed and unstressed syllables; it controls pace and mood." },
        ],
        workedExample: {
          problem: "How does sound patterning create mood in 'The Night Ferry'?",
          solution: "The poem is built on soft, repeated sounds: 'moon', 'soon' associations, 'switches', 'its lights one by one', 'whispers' — the sibilant 's' and 'sh' sounds dominate, making the whole poem feel hushed. 'The captain does not speak' reinforces the silence literally. The rhythm is slow and even, like the ferry itself, so sound and pace together create a mood of quiet, suspended night travel.",
        },
      },
      questions: [
        {
          id: "el11-u10-sound-rhythm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Instructions for Leaving",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "You will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go."
},
          stem: "Which line of 'Instructions for Leaving' uses onomatopoeia or a sound-imitating word?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'You will need a coat.'"
                    },
                    {
                              "id": "b",
                              "text": "'the way you promised'"
                    },
                    {
                              "id": "c",
                              "text": "'when the bus sighs at the kerb'"
                    },
                    {
                              "id": "d",
                              "text": "'count the lamplight twice'"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Onomatopoeia",
                              "statement": "A word that imitates a real sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'sighs' imitates a soft exhaled sound; the 's' consonants reinforce the hush.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(c)** 'when the bus sighs at the kerb' — 'sighs' imitates a sound and the sibilance softens the line.",
          "commonErrors": [
                    "Choosing a line with personification but no sound imitation."
          ]
},
        },
        {
          id: "el11-u10-sound-rhythm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Night Ferry",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "The ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "Identify two sound devices in 'The Night Ferry' and their effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound devices",
                              "statement": "Name the device and explain its effect on mood or pace."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Credit sibilance/alliteration — 'switches', 'its lights', 'smallest of whispers' — the repeated 's' sounds create a hushed mood.",
                              "evidence": "in the smallest of whispers",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Credit assonance — 'moon', 'soon' echoes in 'one by one' — or the soft consonants of 'whispers', 'passenger' — creating a gentle, quiet music.",
                              "evidence": "one by one",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Sibilance ('switches', 'whispers') and assonance ('moon', 'one by one') create a hushed, gentle sound-world matching the night ferry.",
          "commonErrors": [
                    "Naming devices without their effect."
          ]
},
        },
        {
          id: "el11-u10-sound-rhythm-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Instructions for Leaving",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "You will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go."
},
          stem: "How does the rhythm of 'Instructions for Leaving' mimic the act of leaving?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rhythm and meaning",
                              "statement": "Rhythm can enact what the poem describes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The opening repeats 'You will need' — a halting, checklist rhythm like someone pausing to gather nerve.",
                              "evidence": "You will need a coat. You will need",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Short imperative sentences — 'Walk slowly', 'count the lamplight twice' — slow the pace to match careful, reluctant steps.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The final line 'remember: you are allowed to go' releases the tension — the rhythm opens out as the leaving is permitted.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poem's stop-start rhythm — repeated 'You will need', short imperatives, a pause at the colon — mimics the hesitant, careful act of leaving, then releases into freedom at the final line.",
          "commonErrors": [
                    "Describing rhythm without linking it to the act of leaving."
          ]
},
        },
        {
          id: "el11-u10-sound-rhythm-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Night Ferry",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "The ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "Analyse how sound patterning creates a hushed mood in 'The Night Ferry'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sibilance",
                              "statement": "Repeated 's' and 'sh' sounds soften the line and create hush."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sibilant sounds dominate: 'switches', 'its lights', 'smallest of whispers', 'passenger' — the 's'/'sh' sounds literally hush the poem.",
                              "evidence": "in the smallest of whispers",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'The captain does not speak' states the silence outright; the poem's own quiet sound enacts it.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Soft vowels — 'moon', 'one by one' — add a gentle, floating quality rather than harsh consonants.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The result is a sound-world of suspended quiet: the reader hears the ferry's hush before understanding it.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poem's sibilant 's' and 'sh' sounds — 'switches', 'whispers', 'passenger' — plus soft vowels create literal hush; 'the captain does not speak' confirms the silence, so sound patterning enacts the poem's quiet mood.",
          "commonErrors": [
                    "Listing sounds without connecting them to mood."
          ]
},
        },
        {
          id: "el11-u10-sound-rhythm-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Instructions for Leaving",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "You will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go."
},
          stem: "How does the poet use sound to create a tone of gentle urging? Support your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound and tone",
                              "statement": "Soft sounds can make an instruction feel gentle rather than harsh."
                    },
                    {
                              "kind": "skill",
                              "name": "Tone analysis",
                              "statement": "Link sound devices to the attitude they create."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The repeated 's' sounds — 'necessary'? no; 'slowly', 'sighs', 'promised', 'roses' — soften the imperatives so commands feel like gentle guidance.",
                              "evidence": "Walk slowly",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'the bus sighs' gives the vehicle a human, sympathetic sound — even the world seems to understand the leaving.",
                              "evidence": "the bus sighs at the kerb",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The rhythm slows at the end — 'remember: you are allowed to go' — the longest, most open line, releasing urgency into permission.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Soft sibilance ('slowly', 'sighs', 'roses') and a slowing final rhythm make the imperatives feel like gentle urging rather than commands; even the bus 'sighs' sympathetically, so the whole poem's sound supports the tender tone.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating analysis of sound and tone; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant analysis of sound and tone; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited analysis of sound and tone; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Missing the sibilance or treating imperatives as harsh without noting the soft sounds."
          ]
},
        },
        {
          id: "el11-u10-sound-rhythm-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "The Night Ferry",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "The ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "Read 'The Night Ferry'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two sound devices in the poem and quote them.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Analyse how rhythm and sound shape the poem's mood.",
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
                              "name": "Sound devices",
                              "statement": "Name and quote accurately."
                    },
                    {
                              "kind": "technique",
                              "name": "Sound and mood",
                              "statement": "Connect sound patterning to the atmosphere created."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit sibilance — 'switches', 'smallest of whispers' — with quotation.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit a second device — assonance ('moon', 'one by one') or personification with sound ('sighs' equivalent here: 'apologising') — with quotation.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The slow, even rhythm mirrors the ferry's steady crossing — unhurried, suspended.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The sibilant 's' sounds ('switches', 'whispers', 'passenger') create literal hush, enacting the silence.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Together they produce a mood of hushed, watchful night travel — quiet but expectant of 'morning'.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) Sibilance ('smallest of whispers') and assonance ('one by one') or similar. (b) The slow rhythm and hushed sibilance create a mood of quiet, suspended night crossing, ending on a note of expectant calm.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating analysis of rhythm and sound shaping mood; judicious, well-chosen evidence",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant analysis of rhythm and sound shaping mood; appropriate references",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited analysis of rhythm and sound shaping mood; few or unselective references",
                              "part": "b"
                    }
          ],
          "commonErrors": [
                    "In (a) naming a device without quotation.",
                    "In (b) separating sound from mood rather than linking them."
          ]
},
        },
      ],
    },
    {
      id: "el11-u10-structure-form",
      title: "Structure, line breaks and form",
      skill: "Analyse how line breaks, stanza shape, caesura and structural shifts shape a poem's meaning and pace.",
      lesson: {
        sections: [
          {
            heading: "The shape of the poem",
            body: "A poem's **form** — its line lengths, stanza divisions, punctuation and line breaks — is meaning, not packaging. A line break can create a pause, a turn or suspense; a stanza break can signal a shift in time or mood; a colon can gather a list before release. Ask: **what does the poem's shape make the reader do?**",
          },
          {
            heading: "Enjambment and caesura",
            body: "**Enjambment** runs a sentence over a line break without punctuation, creating flow or delaying meaning — 'You will need / to leave the key' makes the reader wait for the verb's object. A **caesura** (a pause inside a line, often a comma or dash) slows the reader at a key moment: 'the way you promised. Do not look back' stops us before the warning.",
          },
          {
            heading: "Structural shifts",
            body: "Track where a poem turns: 'Instructions for Leaving' moves from practical instructions ('leave the key beneath the mat') to emotional permission ('you are allowed to go'). The shift from command to permission is the poem's emotional climax — mark where it happens and explain why the form prepares it.",
          },
        ],
        keyFormulas: [
          { name: "Enjambment", statement: "A sentence continuing over a line break; it creates flow or suspense." },
          { name: "Caesura", statement: "A pause within a line, usually marked by punctuation; it slows and emphasises." },
          { name: "Structural shift", statement: "A turn in subject, tone or time within a poem, often marked by a stanza break or change of tense." },
        ],
        workedExample: {
          problem: "How does the structure of 'Instructions for Leaving' create its effect?",
          solution: "The poem is a single unbroken stanza of short lines, so the reader cannot pause between sections — the leaving feels continuous and inevitable. Line breaks create hesitations: 'You will need / to leave the key' delays the instruction. The colon in 'remember: you are allowed to go' gathers the whole poem into one release — the final line is the longest and most open, so the form itself enacts the permission the words describe.",
        },
      },
      questions: [
        {
          id: "el11-u10-structure-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Instructions for Leaving",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "You will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go."
},
          stem: "What is the effect of the second-person 'you' in 'Instructions for Leaving'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It creates distance between reader and speaker."
                    },
                    {
                              "id": "b",
                              "text": "It makes the reader feel directly involved in the leaving."
                    },
                    {
                              "id": "c",
                              "text": "It shows the poem is about a famous person."
                    },
                    {
                              "id": "d",
                              "text": "It makes the instructions optional."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Second person",
                              "statement": "Addressing the reader as 'you' creates immediacy and involvement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The 'you' puts the reader in the leaver's position, so the instructions feel personal and immediate.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** It makes the reader feel directly involved — the leaving happens to 'you'.",
          "commonErrors": [
                    "Thinking 'you' creates distance; it does the opposite."
          ]
},
        },
        {
          id: "el11-u10-structure-form-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Instructions for Leaving",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "You will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go."
},
          stem: "How does the line break after 'You will need' affect the reading?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Line break",
                              "statement": "A break can pause, delay or emphasise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The break after 'You will need' creates a hesitation — the reader waits for what is needed.",
                              "evidence": "You will need a coat. You will need",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The repetition across the break mimics someone pausing to check a mental list — nervous, careful.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The line break creates a pause after 'You will need', making the reader wait for the object and mimicking a hesitant, checklist-like state of mind.",
          "commonErrors": [
                    "Saying the break is 'just formatting' rather than meaningful."
          ]
},
        },
        {
          id: "el11-u10-structure-form-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Night Ferry",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "The ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "How does 'The Night Ferry' structure the movement from behind to ahead?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Spatial structure",
                              "statement": "The poem's movement through space mirrors the ferry's journey."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Somewhere behind us a town switches off' — the past is literally behind, being left in darkness.",
                              "evidence": "Somewhere behind us a town switches off",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'Ahead, the far shore rehearses morning' — the future is ahead, still in potential ('rehearses').",
                              "evidence": "the far shore rehearses morning",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The ferry itself is the still point between them — 'crosses black water' — so structure enacts the journey's suspension between past and future.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poem moves spatially: 'behind us' the town switches off (the past left behind), 'ahead' the shore rehearses morning (the future approaching), and the ferry crosses between them — structure enacting the journey.",
          "commonErrors": [
                    "Describing the images without noting the behind/ahead structure."
          ]
},
        },
        {
          id: "el11-u10-structure-form-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Instructions for Leaving",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "You will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go."
},
          stem: "Analyse the effect of the colon and the final line 'remember: you are allowed to go'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Punctuation and release",
                              "statement": "A colon gathers expectation; a long final line releases it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The colon after 'remember' creates a held breath — the reader waits for the permission.",
                              "evidence": "remember: you are allowed to go",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final line is the longest and most open — syntactically it releases the tension built by the short imperative lines.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'you are allowed to go' shifts from command ('Do not look back', 'Walk slowly') to permission — the poem's emotional turn.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The colon gathers expectation and the long final line releases it; 'you are allowed to go' shifts the poem from command to permission, making the leaving feel earned rather than forced.",
          "commonErrors": [
                    "Treating the colon as decorative rather than structural."
          ]
},
        },
        {
          id: "el11-u10-structure-form-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Night Ferry",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "lineNumbers": true,
          "text": "The ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers."
},
          stem: "How does the poem's single unbroken stanza shape its effect? Support your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Stanza form",
                              "statement": "The absence of stanza breaks creates continuity or enclosure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One unbroken stanza means the ferry's crossing feels continuous — no pause, no refuge, just motion.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The short lines within it create a gentle rocking rhythm — like waves or a boat's motion.",
                              "evidence": "The ferry crosses black water,",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Without stanza breaks the poem feels suspended — matching the ferry's state between 'behind' and 'ahead'.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The single stanza enacts the ferry's unbroken crossing: no pauses, just continuous motion; the short lines create a rocking rhythm and the absence of breaks keeps the poem suspended between departure and arrival.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating analysis of form and its effect; judicious, well-chosen evidence"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant analysis of form and its effect; appropriate references"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited analysis of form and its effect; few or unselective references"
                    }
          ],
          "commonErrors": [
                    "Saying 'the form is free verse' without analysing its effect."
          ]
},
        },
        {
          id: "el11-u10-structure-form-q6",
          difficulty: "challenge",
          totalMarks: 10,
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
                    "prompt": "Identify one structural feature of each poem (line breaks, punctuation, stanza shape) with evidence.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Analyse how each poem's structure serves its meaning.",
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
                              "name": "Form analysis",
                              "statement": "Identify structural features with evidence."
                    },
                    {
                              "kind": "skill",
                              "name": "Form and meaning",
                              "statement": "Explain how structure enacts or reinforces the poem's subject."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Poem 1: colon + final long line ('remember: you are allowed to go') or repeated 'You will need' line breaks.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Poem 2: single unbroken stanza, short lines, behind/ahead spatial movement.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Poem 1's structure enacts hesitation then release — short imperative lines slow the leaving, the final line opens into permission.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Poem 2's unbroken stanza enacts the ferry's continuous crossing — no pause between 'behind' and 'ahead'.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "A top answer contrasts them: one structure dramatises a decision; the other enacts a journey already in motion.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) Poem 1 uses a colon and a long final line after short imperatives; Poem 2 uses a single stanza of short lines moving behind-to-ahead. (b) Poem 1's form enacts hesitant decision then release; Poem 2's form enacts continuous suspended motion.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, assured and discriminating analysis of how structure serves meaning; judicious, well-chosen evidence",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant analysis of how structure serves meaning; appropriate references",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited analysis of how structure serves meaning; few or unselective references",
                              "part": "b"
                    }
          ],
          "commonErrors": [
                    "In (a) describing form without evidence.",
                    "In (b) treating structure as separate from meaning."
          ]
},
        },
      ],
    },
  ],

};
