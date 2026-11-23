import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "el8-u10-lesson-10-1",
  code: "10-1",
  title: "Reading Poetry",
  goal: "I CAN analyse how poets use sound, imagery, structure and the speaker's voice to create meaning and effect.",
  standards: ["KS3 Reading", "KS3 AO1", "KS3 AO2"],
  
  vocabulary: [
    { term: "Alliteration", definition: "Repetition of the same initial sound in nearby words, e.g. 'black on black'." },
    { term: "Rhyme and rhythm", definition: "End sounds that pattern the poem, and the beat created by stressed and unstressed syllables." },
    { term: "Imagery", definition: "Word pictures built from metaphor, simile, personification and symbolism." },
    { term: "Enjambment", definition: "A sentence running over a line break without punctuation, creating flow or tension." },
    { term: "Stanza", definition: "A grouped set of lines in a poem, like a paragraph." },
    { term: "Speaker (persona)", definition: "The voice or character a poem is spoken by, which may differ from the poet." },
    { term: "Tone", definition: "The attitude the poem's voice takes towards its subject — sad, hopeful, angry, calm." },
  ],
  concepts: [
    {
      id: "el8-u10-sound-imagery",
      title: "Sound, rhythm and imagery",
      skill: "Identify and explain how alliteration, rhyme, rhythm and imagery create effects in a poem.",
      lesson: {
        sections: [
          {
            heading: "Sound devices",
            body: "Poets tune the ear as much as the mind. **Alliteration** repeats initial sounds ('black on black', 'spindly fingers'); **assonance** repeats vowel sounds; **onomatopoeia** makes sound-words like 'buzz' or 'hiss'; **rhyme** and **rhythm** give the poem a beat. Notice where a device clusters — that is usually where the poet wants emphasis.",
          },
          {
            heading: "Imagery",
            body: "Imagery turns ideas into pictures. **Metaphor** states one thing is another ('the sea a grey unblinking drone'); **simile** compares with 'like' or 'as'; **personification** gives human qualities to objects or weather; **symbolism** lets one thing stand for a bigger idea — a lighthouse can symbolise guidance or loneliness. Always ask: what does the image make the reader feel?",
          },
          {
            heading: "Reading aloud",
            body: "Poems are written for the ear. Read slowly, mark the stressed syllables, and notice where the poet breaks or runs on lines. A pause in the rhythm often signals a turn in meaning, just as a loud sound-word marks a climax.",
          },
        ],
        keyFormulas: [
          { name: "Sound devices", statement: "Alliteration, assonance, onomatopoeia, rhyme, rhythm." },
          { name: "Imagery types", statement: "Metaphor, simile, personification, symbolism." },
          { name: "Cluster rule", statement: "Devices cluster where the poet wants emphasis." },
        ],
        workedExample: {
          problem: "In 'The Lighthouse Keeper', analyse the effect of the imagery and sound in lines 1-4.",
          solution: "'Spiral stair' and 'ringing iron prayer' use alliteration (s, r, p sounds) to give the climb a rhythmic, almost ritual feel; 'iron prayer' is a metaphor linking the mechanical to the spiritual; 'coin of fire' later makes the lamp a precious object. The steady quatrain rhythm mirrors the keeper's routine.",
        },
      },
      questions: [
        {
          id: "el8-u10-sound-imagery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "In the poem, which line contains an example of alliteration?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a coin of fire against the night"
                    },
                    {
                              "id": "b",
                              "text": "gulls stitched wheeling, black on black"
                    },
                    {
                              "id": "c",
                              "text": "the water's hungry face"
                    },
                    {
                              "id": "d",
                              "text": "a promise the dark could not unfold"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Alliteration",
                              "statement": "Repeated initial sounds in nearby words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Black on black' repeats the 'b' sound; the other lines show metaphor or personification but not alliteration.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** 'black on black'.",
          "commonErrors": [
                    "Choosing 'coin of fire' — a metaphor — as alliteration."
          ]
},
        },
        {
          id: "el8-u10-sound-imagery-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Identify one metaphor and one personification in the poem and quote them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Metaphor and personification",
                              "statement": "Direct comparison vs human qualities given to things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Metaphor: 'a coin of fire' — the lamp/light is directly called a coin.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Personification: 'the sea rehearsed its moan' or 'the water's hungry face' — the sea/water is given human actions or features.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Metaphor: 'a coin of fire' (also 'a sentence written without a trace'); personification: 'the sea rehearsed its moan' or 'the water's hungry face'.",
          "commonErrors": [
                    "Calling a simile a metaphor or vice versa.",
                    "Quoting without identifying which device."
          ]
},
        },
        {
          id: "el8-u10-sound-imagery-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Explain the effect of the sound devices in lines 5-8: 'the sea rehearsed its moan, / a grey unblinking, patient drone, / while gulls stitched wheeling, black on black, / and tides unpicked the sand's old wrack.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound and imagery",
                              "statement": "Sound devices and images create mood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Assonance of long 'o' sounds ('moan', 'drone') gives the sea a low, unending, mournful quality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Alliteration in 'black on black' and the tight rhyme ('black/wrack', 'moan/drone') create a heavy, repetitive, almost oppressive rhythm.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Personification ('sea rehearsed', 'unpicked') makes nature seem alive and slightly threatening, matching the keeper's solitude.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The long vowel sounds and heavy rhymes make the sea feel vast, mournful and patient; personification makes it alive, creating an atmosphere of lonely vigilance.",
          "commonErrors": [
                    "Naming devices without explaining their effect.",
                    "Ignoring the rhythm of the lines."
          ]
},
        },
        {
          id: "el8-u10-sound-imagery-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Analyse how the poet uses imagery to present the lighthouse and the sea in the first stanza.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imagery analysis",
                              "statement": "Link image to meaning and feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Ringing iron prayer' links the mechanical stair to spirituality — the keeper's climb is ritual-like and devoted.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'A coin of fire' makes the lamp precious and valuable — the keeper's gift to sailors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'The sea rehearsed its moan' and 'hungry face' make the sea seem predatory and vast, heightening the keeper's courage.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The contrast — small warm fire against dark hungry sea — creates tension and makes the lamp's glow feel heroic.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The lamp is spiritual and precious ('iron prayer', 'coin of fire'); the sea is predatory ('hungry face', 'rehearsed its moan'); their contrast makes the keeper's vigil feel brave and necessary.",
          "commonErrors": [
                    "Listing images without linking them to meaning.",
                    "Describing the sea as 'calm' when the imagery suggests threat."
          ]
},
        },
        {
          id: "el8-u10-sound-imagery-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Analyse how sound and imagery work together in lines 9-12: 'He trimmed the wick, he watched the beam / sweep out its slow, deliberate seam / across the water's hungry face, / a sentence written without a trace.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound and imagery combined",
                              "statement": "Devices reinforce each other for effect."
                    },
                    {
                              "kind": "technique",
                              "name": "Metaphor",
                              "statement": "'Sentence' links light to language and meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The slow, deliberate pace of the verbs ('trimmed', 'watched', 'sweep') matches the slow rhythm of the keeper's routine.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The long 's' sounds ('sweep', 'slow', 'seam') create a hissing, sustained sound like the beam itself.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Hungry face' continues the predatory sea imagery from earlier, maintaining tension.",
                              "evidence": "the water's hungry face",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'A sentence written without a trace' is a striking metaphor: the beam's light speaks a message of safety that leaves no mark — it is pure, silent communication.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Enjambment carries the sentence across the line break from 'face' to 'sentence', mimicking the beam's continuous sweep.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall: sound and image fuse so the reader feels the slow, silent, life-saving sweep of the light.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Analyses sound, imagery and structure together with a judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Covers some devices with effects; partial linkage."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Identifies devices without analysis."
                    }
          ],
          "finalAnswer": "Slow verbs and 's' sounds mimic the beam's sweep; 'hungry face' sustains the threat; 'sentence without a trace' makes the light a silent message — sound and image fuse into a vivid picture of quiet heroism.",
          "commonErrors": [
                    "Analysing devices separately without linking them.",
                    "Missing the enjambment."
          ]
},
        },
        {
          id: "el8-u10-sound-imagery-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Answer all parts of this question about the poem's sound and imagery.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify one example each of alliteration, assonance and onomatopoeia in the poem.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the effect of the imagery in lines 13-16: 'At dawn he wound the clockwork heart, / and slept, though in his mind apart / the lamp still burned, patient and gold — / a promise the dark could not unfold.'",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a four-line poem about a night-time job or place (a nurse, a fisherman, a night bus driver). Use at least one sound device and one strong image.",
                    "marks": 5
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sound devices",
                              "statement": "Alliteration, assonance, onomatopoeia, rhyme."
                    },
                    {
                              "kind": "skill",
                              "name": "Poetry writing",
                              "statement": "Use sound and image deliberately for effect."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Alliteration: 'black on black' or 'spiral stair' or 'slow, deliberate seam'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Assonance: long 'o' sounds in 'moan', 'drone', 'stone' or similar repeated vowels.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Onomatopoeia: 'moan', 'drone' or 'buzz' — words that imitate sound.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Clockwork heart' makes the lighthouse seem alive and mechanical at once — the keeper maintains it like a heartbeat.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'In his mind apart' suggests the keeper is never fully away from his duty — loneliness and dedication.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Patient and gold' gives the lamp human patience and precious colour, making it a symbol of hope.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'A promise the dark could not unfold' frames the light as a vow the darkness cannot break — the poem's climactic image of steadfastness.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Poem has four lines with some rhythm or rhyme.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Uses at least one sound device (alliteration, rhyme, onomatopoeia).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Uses at least one strong image (metaphor, simile, personification).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Imagery suits the night-time subject and creates mood.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Language is accurate and the poem is coherent.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Four-line poem with sound device, strong image and fitting mood."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Poem present with some devices; image or mood less developed."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple lines; little poetic craft."
                    }
          ],
          "finalAnswer": "(a) Alliteration 'black on black'; assonance long 'o' sounds; onomatopoeia 'moan'/'drone'. (b) The lamp becomes a living promise; the keeper's mind stays with it — steadfastness and loneliness. (c) Any four-line poem with sound and image.",
          "commonErrors": [
                    "Confusing assonance with alliteration.",
                    "A poem with no sound device or image."
          ],
          "examinerNote": "Part (c) is marked for poetic craft (AO4)."
},
        },
      ],
    },
    {
      id: "el8-u10-structure-speaker",
      title: "Structure and speaker in poems",
      skill: "Analyse how stanzas, shifts, the speaker's voice and tone shape a poem's meaning.",
      lesson: {
        sections: [
          {
            heading: "Stanzas and shifts",
            body: "Stanzas are the poem's paragraphs — each usually develops one idea or image. Watch for **shifts**: a change in time, place, mood or focus, often marked by a line break, a dash, or a new stanza. 'At dawn' in the lighthouse poem signals a shift from night vigil to morning rest. A **volta** (turn) is a sudden change of direction in the argument or feeling.",
          },
          {
            heading: "Speaker and tone",
            body: "The **speaker** is the voice inside the poem — it may be the poet, a character, or an invented persona. Ask: who is speaking, to whom, and with what attitude? **Tone** is the speaker's attitude to the subject: admiring, angry, lonely, hopeful. In 'The Lighthouse Keeper', the speaker observes a solitary figure with quiet respect.",
          },
          {
            heading: "Form and meaning",
            body: "Regular stanzas and rhyme can suggest order, routine or ceremony; irregular lines and broken rhythm suggest chaos or emotion. The form is never neutral — it echoes the poem's subject. A poem about a machine might have mechanical, repetitive stanzas.",
          },
        ],
        keyFormulas: [
          { name: "Stanza", statement: "A grouped set of lines developing one idea." },
          { name: "Shift/volta", statement: "A turn in time, mood or argument." },
          { name: "Speaker vs poet", statement: "The voice in the poem is not always the poet." },
        ],
        workedExample: {
          problem: "Analyse the structure of 'The Lighthouse Keeper'.",
          solution: "Four quatrains move through the keeper's routine: stanza 1 — climbing and lighting (action); stanza 2 — the sea and sky at night (threat); stanza 3 — tending the lamp (vigil); stanza 4 — dawn, sleep, but the lamp still burns in his mind (dedication). The shift 'At dawn' marks night-to-morning; the final line's dash signals the emotional volta from rest to eternal watchfulness.",
        },
      },
      questions: [
        {
          id: "el8-u10-structure-speaker-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a stanza in a poem?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A single line of poetry"
                    },
                    {
                              "id": "b",
                              "text": "A grouped set of lines, like a paragraph"
                    },
                    {
                              "id": "c",
                              "text": "The poet's name"
                    },
                    {
                              "id": "d",
                              "text": "A type of rhyme"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Stanza",
                              "statement": "Grouped lines forming a unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A stanza is a grouped set of lines, comparable to a paragraph in prose.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A grouped set of lines.",
          "commonErrors": [
                    "Confusing stanza with line or rhyme."
          ]
},
        },
        {
          id: "el8-u10-structure-speaker-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Identify the speaker's tone in the final stanza of the poem and support your answer with one word or phrase.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tone",
                              "statement": "The speaker's attitude to the subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies tone as respectful, admiring, or quietly reverent toward the keeper.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Supports with evidence such as 'patient and gold' or 'a promise the dark could not unfold'.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Tone is admiring/reverent — 'patient and gold' and 'a promise the dark could not unfold' treat the keeper's vigil as noble.",
          "commonErrors": [
                    "Naming tone without evidence.",
                    "Saying 'sad' because the keeper is alone, when the tone is admiring."
          ]
},
        },
        {
          id: "el8-u10-structure-speaker-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Explain the shift that occurs at the start of the final stanza ('At dawn he wound the clockwork heart') and its effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Structural shift",
                              "statement": "Time/mood changes mark meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The shift is from night to morning — 'At dawn' marks the end of the night vigil.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It also shifts from action (climbing, trimming, watching) to rest — 'he slept'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: the contrast makes the keeper's dedication clearer — even in sleep his mind stays with the lamp.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "'At dawn' shifts time from night to morning and action to rest; the effect is to heighten the keeper's devotion — his mind remains with the lamp even in sleep.",
          "commonErrors": [
                    "Describing the shift without its effect.",
                    "Missing that it is also an action-to-rest shift."
          ]
},
        },
        {
          id: "el8-u10-structure-speaker-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Who is the speaker in 'The Lighthouse Keeper'? How do you know? Refer to two details.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Speaker",
                              "statement": "The voice inside the poem, distinct from the poet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The speaker is an observer/narrator watching the keeper, not the keeper himself — the keeper is 'he', the speaker watches him.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Evidence: 'He trimmed the wick, he watched the beam' — third person keeps the keeper at a distance.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Evidence: the admiring tone ('patient and gold', 'a promise') suggests someone who respects the keeper's work.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The speaker is detached but appreciative — a witness to quiet heroism rather than a participant.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The speaker is an admiring observer/narrator — the keeper is 'he', watched from outside, and the tone is respectful rather than personal.",
          "commonErrors": [
                    "Assuming the speaker is the keeper; the third person shows otherwise.",
                    "Saying the speaker is the poet without evidence."
          ]
},
        },
        {
          id: "el8-u10-structure-speaker-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Analyse how the poem's structure mirrors its subject. Consider the stanzas, the shifts and the final line.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Form mirrors meaning",
                              "statement": "Structure echoes subject."
                    },
                    {
                              "kind": "convention",
                              "name": "Quatrain structure",
                              "statement": "Four-line stanzas suggest order and routine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Four regular quatrains mirror the keeper's repetitive, disciplined routine — the form is as steady as his work.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Each stanza develops one stage of the vigil: climbing/lighting, the sea's threat, tending the lamp, dawn and rest.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The 'At dawn' shift breaks the night pattern but the final line returns to the lamp — structure enacts the keeper's inability to fully rest.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The consistent rhyme scheme (ABAB) gives a sense of continuity and endurance, matching the poem's theme of steadfastness.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final dash and line break before 'a promise' create a volta — the emotional turn from sleep back to eternal watchfulness.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall: the poem's order, rhythm and volta enact the very dedication it describes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Links structure to meaning across stanzas, shifts and ending."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Links some structural features to meaning."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Describes structure without linking to meaning."
                    }
          ],
          "finalAnswer": "Regular quatrains and rhyme mirror the keeper's routine; the dawn shift and final volta enact his inability to rest — form enacts theme.",
          "commonErrors": [
                    "Describing stanza count without linking to meaning.",
                    "Missing the volta in the final line."
          ]
},
        },
        {
          id: "el8-u10-structure-speaker-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "The lighthouse keeper climbed the spiral stair,\neach step a ringing iron prayer,\nand set the great lamp burning bright —\na coin of fire against the night.\nBelow, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack.\nHe trimmed the wick, he watched the beam\nsweep out its slow, deliberate seam\nacross the water's hungry face,\na sentence written without a trace.\nAt dawn he wound the clockwork heart,\nand slept, though in his mind apart\nthe lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Answer all parts of this question about the poem's structure and speaker.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State how many stanzas the poem has and what each stanza covers.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the speaker's distance from the keeper shapes the poem's tone.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a four-line poem about the same keeper from the keeper's own voice (first person). Show how the voice changes the tone.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Stanza structure",
                              "statement": "Four quatrains trace the vigil."
                    },
                    {
                              "kind": "technique",
                              "name": "Point of view",
                              "statement": "First vs third person changes tone."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Four stanzas (quatrains).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Stanza 1: climbing and lighting; stanza 2: sea/sky at night; stanza 3: tending the lamp; stanza 4: dawn, sleep, lamp in mind.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Third-person 'he' keeps the keeper at a respectful distance, making him an object of admiration rather than a confessor.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The observer's detachment lets the reader see the keeper's dedication clearly without his own biases.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The admiring tone ('patient and gold') comes from the observer's wonder at quiet heroism.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "If the keeper spoke himself, the tone would likely be more personal, weary or defiant — the distance is what makes the poem feel reverent.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Poem is in first person ('I', 'my').",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Voice conveys the keeper's own attitude — weary, proud, lonely or defiant.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Tone differs clearly from the original's detached admiration.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Uses some poetic craft (image, sound, rhythm).",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Four lines with some structure or rhyme.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Language is accurate and the poem is coherent.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "First-person poem with distinct voice, clear tone shift and craft."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "First-person poem with some voice; tone shift less clear."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Poem present but voice/tone unclear."
                    }
          ],
          "finalAnswer": "(a) Four quatrains tracing the vigil. (b) Third-person distance creates reverent admiration. (c) A first-person keeper's poem with a more personal tone.",
          "commonErrors": [
                    "Assuming the speaker is the keeper.",
                    "A 'first-person' poem that still sounds detached."
          ],
          "examinerNote": "Part (c) is marked for voice and tone control (AO4)."
},
        },
      ],
    },
  ],

};
