import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "el11-u7-lesson-7-2",
  code: "7-2",
  title: "Structure, Form and Sound in Poetry",
  goal: "I CAN analyse how a poem's structure, form, rhyme, rhythm and sound patterning shape its meaning.",
  standards: ["4EA1 Paper 1", "4EA1 AO2", "4EA1 AO3"],
  
  vocabulary: [
    { term: "Stanza", definition: "A grouped set of lines in a poem, like a paragraph in prose." },
    { term: "Volta", definition: "A turn or shift in a poem, often marked by a change in tone, image or argument." },
    { term: "Couplet", definition: "A pair of rhyming lines, often used to conclude a poem or stanza." },
    { term: "Alliteration", definition: "Repetition of initial consonant sounds in nearby words." },
    { term: "Assonance", definition: "Repetition of vowel sounds within words." },
    { term: "Caesura", definition: "A pause within a line, often marked by punctuation." },
  ],
  concepts: [
    {
      id: "el11-u7-form",
      title: "Structure and form",
      skill: "Analyse how stanza shape, rhyme scheme, volta and poetic form contribute to meaning.",
      lesson: {
        sections: [
          {
            heading: "Reading the shape",
            body: "Poetic form is meaning made visible. In 'Sonnet for a Dead Engine' the stanzas marked I, II, III and IV give the poem a ritual, almost ceremonial structure, like the farming year itself. The final stanza shifts to a short rhyming close - 'line', 'machine', 'spine' - which traditionally signals a turn or conclusion, gathering the whole poem into a single claim.",
          },
          {
            heading: "The volta and the close",
            body: "A volta is a turn: the poem changes direction, tone or argument. Here stanza III moves from the engine's death to its replacement, and stanza IV performs the volta: 'What dies on the farm is never buried' - the poem stops narrating and starts declaring. The couplet-like final lines gather the whole poem into a single claim about memory.",
          },
          {
            heading: "Why form matters",
            body: "The labelled stanzas I-IV imitate an order or inspection - almost a post-mortem. The poem about a dead machine is itself arranged like an engine's parts: regular, sectioned, ending in a couplet that clicks shut. Form here is not decoration; it is the poem's argument about how machines - and feelings - are organised.",
          },
        ],
        keyFormulas: [
          { name: "Sonnet structure", statement: "Quatrains build an argument; the close (often a couplet) delivers the turn or conclusion." },
          { name: "Volta", statement: "A deliberate turn in a poem's argument, tone or imagery." },
          { name: "Stanza", statement: "A structural unit; its length and grouping control pace and emphasis." },
        ],
        workedExample: {
          problem: "How does the structure of 'Sonnet for a Dead Engine' contribute to its meaning?",
          solution: "The poem is divided into four labelled stanzas (I-IV) of four lines each, like the chambers of an engine or the quarters of a year. The first three stanzas narrate: the engine dies, is kept through a bad summer, and is replaced. Stanza IV turns: 'What dies on the farm is never buried' shifts from event to declaration, and the poem ends on the ghost-image 'a ghost inside its iron spine'. The regular quatrain structure gives the elegy a ceremonial order, while the final stanza's gathering of memory mirrors the 'faithful machine' it describes - so form itself performs the poem's claim that some things keep running after they have stopped.",
        },
      },
      questions: [
        {
          id: "el11-u7-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Sonnet for a Dead Engine",
          "author": "Written for Akademik Space",
          "source": "Original sonnet",
          "text": "I - The engine coughed once in the yard,\nthen settled, like an old dog, to sleep.\nThe farmers leaned on fences, saying nothing,\nas if the silence were a kindness, deep.\nII - They kept it for the year that followed,\nthe summer the wheat forgot how to grow.\nIts pistons cooled the colour of a wound\nand held the memory of a working cow.\nIII - A tractor replaced it in April,\npolished, impatient, newer than regret.\nBut still they lifted up the old grey hood\nto listen for a heart that will not beat.\nIV - What dies on the farm is never buried;\nit stands in rows along the rusted line\nand keeps, like every faithful machine,\na ghost inside its iron spine."
},
          stem: "How many labelled stanzas does 'Sonnet for a Dead Engine' have, and what do the labels suggest?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Four stanzas labelled I-IV, suggesting ordered sections or stages."
                    },
                    {
                              "id": "b",
                              "text": "Two stanzas, suggesting a simple before-and-after."
                    },
                    {
                              "id": "c",
                              "text": "Twelve stanzas, one per month of the year."
                    },
                    {
                              "id": "d",
                              "text": "No labels; the poem is free verse."
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Stanza structure",
                              "statement": "Stanzas are structural units; labels give order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The poem has four stanzas marked I, II, III and IV; labels imply sequence or inspection.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Four stanzas labelled I-IV, giving the poem an ordered, sectioned structure.",
          "commonErrors": [
                    "Counting lines instead of stanzas."
          ]
},
        },
        {
          id: "el11-u7-form-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Sonnet for a Dead Engine",
          "author": "Written for Akademik Space",
          "source": "Original sonnet",
          "text": "I - The engine coughed once in the yard,\nthen settled, like an old dog, to sleep.\nThe farmers leaned on fences, saying nothing,\nas if the silence were a kindness, deep.\nII - They kept it for the year that followed,\nthe summer the wheat forgot how to grow.\nIts pistons cooled the colour of a wound\nand held the memory of a working cow.\nIII - A tractor replaced it in April,\npolished, impatient, newer than regret.\nBut still they lifted up the old grey hood\nto listen for a heart that will not beat.\nIV - What dies on the farm is never buried;\nit stands in rows along the rusted line\nand keeps, like every faithful machine,\na ghost inside its iron spine."
},
          stem: "Identify the volta (turn) in 'Sonnet for a Dead Engine' and explain what changes there.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Volta",
                              "statement": "A turn shifts the poem from narration to declaration or new direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies the turn at stanza IV, where the poem stops describing events and begins a general claim: 'What dies on the farm is never buried'.",
                              "evidence": "What dies on the farm is never buried",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Explains the change: from the specific story of one engine to a universal statement about loss and memory on the farm.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The volta is in stanza IV. After three narrative stanzas about the engine's death and replacement, the poem turns to a general declaration that 'what dies on the farm is never buried', widening the single event into a meditation on memory.",
          "commonErrors": [
                    "Locating the turn at the tractor's arrival (stanza III) rather than the final stanza.",
                    "Describing what happens without naming the shift in mode."
          ]
},
        },
        {
          id: "el11-u7-form-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Sonnet for a Dead Engine",
          "author": "Written for Akademik Space",
          "source": "Original sonnet",
          "text": "I - The engine coughed once in the yard,\nthen settled, like an old dog, to sleep.\nThe farmers leaned on fences, saying nothing,\nas if the silence were a kindness, deep.\nII - They kept it for the year that followed,\nthe summer the wheat forgot how to grow.\nIts pistons cooled the colour of a wound\nand held the memory of a working cow.\nIII - A tractor replaced it in April,\npolished, impatient, newer than regret.\nBut still they lifted up the old grey hood\nto listen for a heart that will not beat.\nIV - What dies on the farm is never buried;\nit stands in rows along the rusted line\nand keeps, like every faithful machine,\na ghost inside its iron spine."
},
          stem: "How does the final stanza's rhyme and its image of the 'ghost inside its iron spine' bring the poem to a close? Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Couplet close",
                              "statement": "A rhyming close traditionally delivers the poem's final point."
                    },
                    {
                              "kind": "technique",
                              "name": "Extended metaphor",
                              "statement": "The machine keeps a 'ghost' - death is figured as a spirit inside the object."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The stanza closes on a tight rhyme ('line', 'machine', 'spine') that gathers the argument into a memorable final sound.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'a ghost inside its iron spine' personifies the dead engine: death is not absence but a presence kept inside the machine.",
                              "evidence": "a ghost inside its iron spine",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The image extends the poem's metaphor system: like a faithful machine, memory 'keeps' running, so the rhyme and image together fix the elegy's meaning.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The final stanza closes with a rhyming flourish and a sustained metaphor: the dead engine keeps 'a ghost inside its iron spine'. The rhyme gives the declaration a settled, inevitable sound, and the ghost image makes loss feel permanent yet inhabited - the machine is dead but not gone, which is the poem's whole claim.",
          "commonErrors": [
                    "Misidentifying the rhyme scheme.",
                    "Treating 'ghost' as literal supernatural content."
          ]
},
        },
        {
          id: "el11-u7-form-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Sonnet for a Dead Engine",
          "author": "Written for Akademik Space",
          "source": "Original sonnet",
          "text": "I - The engine coughed once in the yard,\nthen settled, like an old dog, to sleep.\nThe farmers leaned on fences, saying nothing,\nas if the silence were a kindness, deep.\nII - They kept it for the year that followed,\nthe summer the wheat forgot how to grow.\nIts pistons cooled the colour of a wound\nand held the memory of a working cow.\nIII - A tractor replaced it in April,\npolished, impatient, newer than regret.\nBut still they lifted up the old grey hood\nto listen for a heart that will not beat.\nIV - What dies on the farm is never buried;\nit stands in rows along the rusted line\nand keeps, like every faithful machine,\na ghost inside its iron spine."
},
          stem: "Evaluate how the poem's formal structure - four labelled quatrains ending in a declarative stanza - serves its subject. Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Form and meaning",
                              "statement": "A poem's shape can enact or mirror its subject."
                    },
                    {
                              "kind": "technique",
                              "name": "Structural turn",
                              "statement": "A shift in stanza function marks the poem's turn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Roman-numeral labels (I-IV) give the poem a procedural, almost mechanical order, suiting a poem about a machine.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Equal four-line stanzas create regularity, like pistons or the farming calendar, giving grief a ceremonial order.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Stanzas I-III narrate sequentially (death, keeping, replacement), so structure enacts the story.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Stanza IV breaks the pattern by declaring rather than narrating - the form itself performs the volta.",
                              "evidence": "What dies on the farm is never buried",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Judgement: the structure is effective because it makes the poem feel assembled, like the engine it mourns.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "The four labelled quatrains give the elegy a mechanical, ordered shape that mirrors its subject: the engine is sectioned like the poem. Stanzas I-III narrate in sequence, then stanza IV turns to declaration, so the structure itself performs the poem's shift from event to meaning. The effect is a poem that feels built, not merely written - appropriate for a tribute to a machine.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Form is analysed and explicitly judged against the subject."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Structural features identified with some comment on effect."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Structure described with little or no evaluation."
                    }
          ],
          "commonErrors": [
                    "Listing stanza features without linking them to meaning.",
                    "Claiming the poem is a traditional sonnet without evidence for metre or rhyme scheme."
          ]
},
        },
        {
          id: "el11-u7-form-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Sonnet for a Dead Engine",
          "author": "Written for Akademik Space",
          "source": "Original sonnet",
          "text": "I - The engine coughed once in the yard,\nthen settled, like an old dog, to sleep.\nThe farmers leaned on fences, saying nothing,\nas if the silence were a kindness, deep.\nII - They kept it for the year that followed,\nthe summer the wheat forgot how to grow.\nIts pistons cooled the colour of a wound\nand held the memory of a working cow.\nIII - A tractor replaced it in April,\npolished, impatient, newer than regret.\nBut still they lifted up the old grey hood\nto listen for a heart that will not beat.\nIV - What dies on the farm is never buried;\nit stands in rows along the rusted line\nand keeps, like every faithful machine,\na ghost inside its iron spine."
},
          stem: "How does the poem use contrast between stanzas III and IV to deepen its meaning? Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Juxtaposition",
                              "statement": "Placing two stanzas side by side sharpens the difference between them."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stanza III is about replacement: the tractor is 'polished, impatient, newer than regret' - progress that cannot console.",
                              "evidence": "polished, impatient, newer than regret",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Yet even here grief persists: they still lift the old hood 'to listen for a heart that will not beat'.",
                              "evidence": "a heart that will not beat",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Stanza IV widens this into a law of the farm: 'What dies on the farm is never buried' - the contrast shows replacement cannot erase memory.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Stanza III sets the new against the old - a polished tractor that is 'newer than regret' cannot replace what was lost, and the farmers still listen for a heartbeat that is gone. Stanza IV turns this into a universal claim that nothing on the farm is truly buried, so the juxtaposition of replacement and persistence deepens the elegy: machines die, but the farm keeps them.",
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "5-6",
                              "descriptor": "The contrast between stanzas is analysed in detail and tied to meaning."
                    },
                    {
                              "level": "Level 3",
                              "marks": "3-4",
                              "descriptor": "Contrast identified with reasonable explanation."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Partial contrast noted."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Stanzas described without comparison."
                    }
          ],
          "commonErrors": [
                    "Comparing within a single stanza instead of across III and IV.",
                    "Missing the volta's role in stanza IV."
          ]
},
        },
        {
          id: "el11-u7-form-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Sonnet for a Dead Engine",
          "author": "Written for Akademik Space",
          "source": "Original sonnet",
          "text": "I - The engine coughed once in the yard,\nthen settled, like an old dog, to sleep.\nThe farmers leaned on fences, saying nothing,\nas if the silence were a kindness, deep.\nII - They kept it for the year that followed,\nthe summer the wheat forgot how to grow.\nIts pistons cooled the colour of a wound\nand held the memory of a working cow.\nIII - A tractor replaced it in April,\npolished, impatient, newer than regret.\nBut still they lifted up the old grey hood\nto listen for a heart that will not beat.\nIV - What dies on the farm is never buried;\nit stands in rows along the rusted line\nand keeps, like every faithful machine,\na ghost inside its iron spine."
},
          stem: "Read the whole poem 'Sonnet for a Dead Engine'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the four labelled stanzas and the event each one covers.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the poem's structure mirrors the subject of a machine and its memory.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a paragraph evaluating how effectively the poem's formal close achieves its elegiac effect.",
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
                              "statement": "Select and sequence the details asked for."
                    },
                    {
                              "kind": "technique",
                              "name": "Form as meaning",
                              "statement": "Structure can enact the poem's subject."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Judge the ending's effect with reasons."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit I: the engine dies; II: it is kept through the bad summer; III: the tractor replaces it.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit IV: the declaration that what dies on the farm is never buried.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The labelled quatrains give a mechanical, sectioned order like an engine's parts.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Stanzas I-III narrate sequentially, so structure enacts the story of death and replacement.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Stanza IV's declarative turn mirrors the 'ghost inside its iron spine' - form performs memory.",
                              "evidence": "a ghost inside its iron spine",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "The regular stanza shape echoes the poem's claim that machines 'keep' running after they stop.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "The close is effective: 'What dies on the farm is never buried' states the elegy's law plainly.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "The ghost image gives abstraction a body, so memory feels inhabited rather than explained.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The rhyme and settled phrasing give the ending a ceremonial finality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Judgement: the form's order makes the grief feel dignified, not sentimental.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "(a) I: the engine dies; II: kept through the bad summer; III: replaced by a tractor; IV: declaration about what is never buried. (b) The labelled quatrains give a mechanical order; I-III narrate while IV declares, so structure enacts memory. (c) The close is effective: its plain declaration, ghost image and rhyming finality give grief a ceremonial, dignified landing.",
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Stanzas and events accurately identified."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Partial identification."
                    },
                    {
                              "part": "b",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Structure analysed as mirroring the subject."
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
                              "descriptor": "Structure described only."
                    },
                    {
                              "part": "c",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Evaluation of the close with reasons."
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
                    "In (a) compressing the four stanzas into fewer events.",
                    "In (c) describing the ending rather than judging it."
          ]
},
        },
      ],
    },
    {
      id: "el11-u7-sound",
      title: "Sound, rhythm and musicality",
      skill: "Analyse how alliteration, assonance, rhythm and line breaks create effects in a poem.",
      lesson: {
        sections: [
          {
            heading: "Sound patterning",
            body: "Poets tune language. In 'Instructions for a Storm' the alliteration of 'the barometer falls like a dropped plate' gives the opening a hard, percussive start - 'barometer', 'falls', 'plate' - like the first crack of thunder. Assonance and consonance create music that can echo sense: the 'long complaint' of the sea is itself a long, complaining sound.",
          },
          {
            heading: "Rhythm and pace",
            body: "The storm poem moves in stages: 'First... Then... then' builds momentum like the storm gathering. The short imperative lines ('Do not board up the windows', 'Do not answer the telephone') slow the reader into caution. The final image 'one person, a very large crowd, clapping' is a paradox that mimics the storm's own confusion of scale.",
          },
          {
            heading: "Linking sound to meaning",
            body: "Sound effects are not decoration. The poem's title calls them 'instructions', so the sound patterning itself behaves like instructions - measured, step-by-step, almost procedural. The 'rehearses' of the sea and 'practising' of the wind turn weather into performance, and the clapping applause at the end suggests the storm is an audience event, not just weather.",
          },
        ],
        keyFormulas: [
          { name: "Alliteration", statement: "Repeated initial consonant sounds that create percussive or musical effects." },
          { name: "Assonance", statement: "Repeated vowel sounds that create internal music and mood." },
          { name: "Imperative mood", statement: "Commanding verb forms ('Do not answer') that create urgency or instruction." },
        ],
        workedExample: {
          problem: "How does sound patterning work in 'Instructions for a Storm'?",
          solution: "The poem opens with the hard alliteration of 'the barometer falls like a dropped plate', whose plosive sounds mimic the sudden crash of the first storm signal. The anaphoric sequence 'First... Then... then' builds rhythmic momentum, while the sea 'rehearses its long complaint' - the long vowels enact the complaint's duration. The imperative negatives ('Do not board up', 'Do not answer') break the flow into cautions, and the closing paradox 'one person, a very large crowd' uses contradictory scale to mimic the storm's disorienting power. Sound here is instruction: the poem's music performs the gathering, warnings and climax of the storm itself.",
        },
      },
      questions: [
        {
          id: "el11-u7-sound-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Instructions for a Storm",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "First the barometer falls like a dropped plate.\nThen the sparrows empty the wires,\nthen the sea rehearses its long complaint\nbehind the pier.\nDo not board up the windows\nunless you want to hear them argue.\nDo not answer the telephone.\nThe wind is practising new words.\nThe chimney leans to listen.\nWhen the first drop strikes the tin roof\nit will sound like applause -\none person, a very large crowd,\nclapping for something they cannot name."
},
          stem: "Which sound device is used in 'the sea rehearses its long complaint'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Alliteration"
                    },
                    {
                              "id": "b",
                              "text": "Assonance"
                    },
                    {
                              "id": "c",
                              "text": "Personification"
                    },
                    {
                              "id": "d",
                              "text": "Rhyme"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Personification",
                              "statement": "The sea is given the human act of rehearsing a complaint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'rehearses its long complaint' gives the sea human behaviour - rehearsing and complaining.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Personification - the sea is given human actions (rehearsing, complaining).",
          "commonErrors": [
                    "Choosing (a): 'sea rehearses' has no shared initial consonant."
          ]
},
        },
        {
          id: "el11-u7-sound-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Instructions for a Storm",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "First the barometer falls like a dropped plate.\nThen the sparrows empty the wires,\nthen the sea rehearses its long complaint\nbehind the pier.\nDo not board up the windows\nunless you want to hear them argue.\nDo not answer the telephone.\nThe wind is practising new words.\nThe chimney leans to listen.\nWhen the first drop strikes the tin roof\nit will sound like applause -\none person, a very large crowd,\nclapping for something they cannot name."
},
          stem: "Identify one example of alliteration in 'Instructions for a Storm' and explain its effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Alliteration",
                              "statement": "Repeated initial consonants create percussive or musical effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies alliteration, e.g. 'the barometer falls' or 'sparrows'/'sea' or 'the telephone'.",
                              "evidence": "the barometer falls",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Explains the effect: the hard consonants give a percussive, anticipatory sound that suits a gathering storm.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "'the barometer falls like a dropped plate' uses repeated hard consonants (b, f, p sounds) to create a percussive opening that mimics the sudden first signs of the storm.",
          "commonErrors": [
                    "Naming a device without locating it in the poem.",
                    "Saying alliteration makes the poem 'flow' - it actually creates weight and percussion."
          ]
},
        },
        {
          id: "el11-u7-sound-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Instructions for a Storm",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "First the barometer falls like a dropped plate.\nThen the sparrows empty the wires,\nthen the sea rehearses its long complaint\nbehind the pier.\nDo not board up the windows\nunless you want to hear them argue.\nDo not answer the telephone.\nThe wind is practising new words.\nThe chimney leans to listen.\nWhen the first drop strikes the tin roof\nit will sound like applause -\none person, a very large crowd,\nclapping for something they cannot name."
},
          stem: "How does the poem's use of imperative commands ('Do not board up the windows', 'Do not answer the telephone') shape its voice and meaning?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imperative mood",
                              "statement": "Commands address the reader directly and create urgency or instruction."
                    },
                    {
                              "kind": "convention",
                              "name": "Second-person address",
                              "statement": "Direct address makes the poem feel like spoken instruction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The commands are negative imperatives, so the voice sounds like warning rather than description - the poem addresses 'you' directly.",
                              "evidence": "Do not board up the windows",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The specific prohibitions are odd: boarding up windows is normally sensible, so the commands create unease - the storm is not ordinary danger.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: the voice becomes a voice of instruction or ritual, matching the title 'Instructions for a Storm' - the poem itself behaves like a manual.",
                              "evidence": "Do not answer the telephone",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The negative imperatives give the poem a warning voice that speaks directly to the reader. Because the prohibitions are counter-intuitive - not boarding up windows, not answering the phone - they create unease and ritual, so the poem performs its own title: it is literally instructions for surviving (or experiencing) a storm.",
          "commonErrors": [
                    "Treating the commands as literal safety advice.",
                    "Ignoring the effect of direct address on voice."
          ]
},
        },
        {
          id: "el11-u7-sound-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Instructions for a Storm",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "First the barometer falls like a dropped plate.\nThen the sparrows empty the wires,\nthen the sea rehearses its long complaint\nbehind the pier.\nDo not board up the windows\nunless you want to hear them argue.\nDo not answer the telephone.\nThe wind is practising new words.\nThe chimney leans to listen.\nWhen the first drop strikes the tin roof\nit will sound like applause -\none person, a very large crowd,\nclapping for something they cannot name."
},
          stem: "Analyse how rhythm and pacing in 'Instructions for a Storm' mirror the approach and climax of the storm. Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rhythmic build",
                              "statement": "Pace can enact the subject: lines quicken as the storm gathers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The opening anaphora 'First... Then... then' accelerates the sequence of signs, matching the storm's approach.",
                              "evidence": "First the barometer falls",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The short imperative lines ('Do not answer the telephone') halt the flow, creating the held breath before the storm breaks.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The final quatrain-length image 'one person, a very large crowd, clapping' is paradoxical and expansive, mimicking the storm's overwhelming scale.",
                              "evidence": "one person, a very large crowd",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The overall shape - build-up, pause, release - enacts a storm's arc in miniature.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Judgement: the pacing is effective because the poem's rhythm is itself a kind of weather.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "The poem's rhythm performs the storm: 'First... Then... then' quickens like gathering signs, the imperative negatives hold the breath, and the final paradox of 'one person, a very large crowd' releases into overwhelming scale. The pacing is the poem's subject - a storm experienced through its own tempo.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Rhythm analysed across the poem and explicitly linked to the storm's arc."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some rhythmic features noted with partial effect."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Rhythm mentioned without analysis."
                    }
          ],
          "commonErrors": [
                    "Describing events without analysing pace or sound.",
                    "Ignoring the final paradox's rhythmic effect."
          ]
},
        },
        {
          id: "el11-u7-sound-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Instructions for a Storm",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "First the barometer falls like a dropped plate.\nThen the sparrows empty the wires,\nthen the sea rehearses its long complaint\nbehind the pier.\nDo not board up the windows\nunless you want to hear them argue.\nDo not answer the telephone.\nThe wind is practising new words.\nThe chimney leans to listen.\nWhen the first drop strikes the tin roof\nit will sound like applause -\none person, a very large crowd,\nclapping for something they cannot name."
},
          stem: "How does the poem use personification and imagery of rehearsal and performance to transform weather into theatre? Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Personification",
                              "statement": "Weather is given human actions - rehearsing, practising, leaning, clapping."
                    },
                    {
                              "kind": "technique",
                              "name": "Extended metaphor",
                              "statement": "The storm is consistently figured as a performance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'the sea rehearses its long complaint' - the sea is an actor preparing a performance.",
                              "evidence": "rehearses its long complaint",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'The wind is practising new words. / The chimney leans to listen.' - wind rehearses lines, chimney becomes an audience member.",
                              "evidence": "practising new words",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The final 'clapping for something they cannot name' completes the performance metaphor: the storm is a show whose meaning is felt, not understood.",
                              "evidence": "clapping for something they cannot name",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: the poem's title 'Instructions' now reads as stage directions or a playbill - weather as theatre.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The poem consistently personifies weather as performers: the sea 'rehearses', the wind 'practises', the chimney 'leans to listen', and the rain becomes applause. The extended metaphor of storm-as-theatre is completed by 'clapping for something they cannot name' - an audience moved by meaning they cannot articulate - so the poem turns a weather forecast into a drama.",
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "5-6",
                              "descriptor": "The performance metaphor is traced across the poem and its effect explained."
                    },
                    {
                              "level": "Level 3",
                              "marks": "3-4",
                              "descriptor": "Several instances analysed with some synthesis."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "One or two instances noted."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Personification identified only."
                    }
          ],
          "commonErrors": [
                    "Listing personified phrases without linking them to the theatre metaphor.",
                    "Missing the closing applause image."
          ]
},
        },
        {
          id: "el11-u7-sound-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Instructions for a Storm",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "First the barometer falls like a dropped plate.\nThen the sparrows empty the wires,\nthen the sea rehearses its long complaint\nbehind the pier.\nDo not board up the windows\nunless you want to hear them argue.\nDo not answer the telephone.\nThe wind is practising new words.\nThe chimney leans to listen.\nWhen the first drop strikes the tin roof\nit will sound like applause -\none person, a very large crowd,\nclapping for something they cannot name."
},
          stem: "Read the whole poem 'Instructions for a Storm'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two examples of personification in the poem.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how sound devices and rhythm create the poem's atmosphere.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a paragraph evaluating how effectively the poem's form and sound enact its subject.",
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
                              "statement": "Select only the devices asked for."
                    },
                    {
                              "kind": "technique",
                              "name": "Sound and rhythm",
                              "statement": "Alliteration, assonance and pacing create atmosphere."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Judge how form enacts meaning."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit sea 'rehearses its long complaint' or wind 'practising new words' or chimney 'leans to listen'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit a second distinct example from the same list.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hard alliteration in 'barometer falls like a dropped plate' gives percussive anticipation.",
                              "evidence": "the barometer falls like a dropped plate",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The 'First... Then... then' sequence accelerates like the storm's approach.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Short imperatives halt the rhythm, creating held-breath tension before the climax.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "The final 'clapping' image releases into expansive, overwhelming scale.",
                              "evidence": "clapping for something they cannot name",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The poem's sound is effective: its music performs the storm rather than describing it.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "The title 'Instructions' is fulfilled by the imperative voice, so form matches content.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "The storm-as-theatre metaphor gives the weather human intention and audience.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Judgement: the ending's paradox of 'one person, a very large crowd' is a fitting sonic climax.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "(a) Sea rehearsing, wind practising, chimney listening. (b) Sound builds the atmosphere: hard alliteration anticipates, anaphora accelerates, imperatives suspend, and applause releases. (c) The poem's form and sound enact the storm effectively - its music is its subject.",
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Two personifications correctly identified."
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
                              "descriptor": "Sound devices analysed across the poem with atmospheric effects."
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
                              "descriptor": "Devices named only."
                    },
                    {
                              "part": "c",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Evaluation of form and sound with reasons."
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
                    "In (a) naming devices that are not personification.",
                    "In (b) listing sounds without explaining atmosphere."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u7-poetry-form-notes",
      title: "Structure, form and sound - notes",
      summary: "Poetic shape is meaning: stanzas, volta, rhyme and sound pattern enact what the poem says.",
      sections: [
        { heading: "Key idea", body: "Ask what the poem's shape does, not just what it looks like - does the form mirror the subject?" },
        { heading: "Volta", body: "Look for the turn: a shift from narration to declaration, or from one tone to another." },
        { heading: "Sound", body: "Alliteration, assonance and rhythm create music that can echo or perform the subject." },
      ],
    },
  ],
};
