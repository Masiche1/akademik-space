import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "el8-u5-lesson-5-1",
  code: "5-1",
  title: "Reading a Poem Closely",
  goal: "I CAN identify a poem's speaker, voice, form and structure and explain how they shape meaning.",
  standards: ["KS3 Reading", "KS3 AO1", "KS3 AO2"],
  
  vocabulary: [
    { term: "Speaker", definition: "The voice or persona speaking in a poem, which may differ from the poet." },
    { term: "Voice", definition: "The distinctive tone, attitude and personality created by the poet's choices." },
    { term: "Stanza", definition: "A grouped set of lines in a poem, similar to a paragraph." },
    { term: "Quatrain", definition: "A stanza of four lines." },
    { term: "Enjambment", definition: "Running a sentence over a line break without punctuation." },
    { term: "Shift", definition: "A change in focus, tone or subject within a poem." },
  ],
  concepts: [
    {
      id: "el8-u5-speaker-voice",
      title: "Speaker and voice",
      skill: "Work out who is speaking and how their attitude is created.",
      lesson: {
        sections: [
          {
            heading: "Who is speaking?",
            body: "The speaker is the 'I' or voice in the poem. It may be the poet, a character or an imagined persona. Look for clues in pronouns, address and attitude. In 'The Cartographer's Daughter', the speaker is the daughter, not necessarily the poet.",
          },
          {
            heading: "How is voice created?",
            body: "Voice comes from word choice, tone, imagery and what the speaker notices. A reflective voice is calm and thoughtful; a frightened voice may use short lines and dark images. Always link voice to evidence.",
          },
        ],
        keyFormulas: [
          { name: "Speaker", statement: "The voice speaking in the poem, which may differ from the poet." },
          { name: "Tone", statement: "The speaker's attitude towards the subject." },
          { name: "Voice", statement: "The personality and mood created by language choices." },
        ],
        workedExample: {
          problem: "Who is speaking in 'The Cartographer's Daughter' and what is their attitude?",
          solution: "The speaker is the cartographer's daughter. Her attitude is respectful and inspired: she keeps her father's maps, learns to think in his way and tries to continue his work.",
        },
      },
      questions: [
        {
          id: "el8-u5-speaker-voice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who is the speaker in 'The Cartographer's Daughter'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The father who draws the maps"
                    },
                    {
                              "id": "b",
                              "text": "The daughter who inherits the maps"
                    },
                    {
                              "id": "c",
                              "text": "A sailor lost at sea"
                    },
                    {
                              "id": "d",
                              "text": "The storm itself"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Speaker",
                              "statement": "The speaker is the voice speaking in the poem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The poem uses 'My father' and 'I keep his maps', so the speaker is the daughter.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "I keep his maps"
                    }
          ],
          "finalAnswer": "**(b)** The daughter.",
          "commonErrors": [
                    "Choosing (a): the father is described, not speaking."
          ]
},
        },
        {
          id: "el8-u5-speaker-voice-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "The Cartographer's Daughter",
          "author": "Written for Akademik Space",
          "text": "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach."
},
          stem: "Give two details that show the daughter's relationship with her father.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Close reading",
                              "statement": "Use evidence to infer relationships and feelings."
                    },
                    {
                              "kind": "context",
                              "name": "Family and inheritance",
                              "statement": "The poem links maps to family legacy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "She keeps his maps, showing care and closeness.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "I keep his maps"
                    },
                    {
                              "reasoning": "She learns to think like him, showing admiration and continuation.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "learn to think"
                    }
          ],
          "finalAnswer": "She keeps his maps and learns his way of thinking, showing closeness and respect."
},
        },
        {
          id: "el8-u5-speaker-voice-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Cartographer's Daughter",
          "author": "Written for Akademik Space",
          "text": "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach."
},
          stem: "What is the tone of the poem? Support your answer with two details.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tone",
                              "statement": "Tone is the speaker's attitude towards the subject."
                    },
                    {
                              "kind": "skill",
                              "name": "Evidence",
                              "statement": "Support tone judgements with quotations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The tone is reflective and respectful.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The daughter studies her father's maps and learns from them.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "I keep his maps"
                    },
                    {
                              "reasoning": "The final image of drawing 'the sea beyond the page' suggests inspiration and possibility.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "beyond the page"
                    }
          ],
          "finalAnswer": "The tone is reflective and inspired, shown by her respect for her father and her attempt to continue his work."
},
        },
        {
          id: "el8-u5-speaker-voice-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
          "title": "The Cartographer's Daughter",
          "author": "Written for Akademik Space",
          "text": "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach."
},
          stem: "How does the speaker's attitude change from the first stanza to the last? Refer to the poem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Shift in voice",
                              "statement": "A poem can move from learning to acting."
                    },
                    {
                              "kind": "context",
                              "name": "Family legacy",
                              "statement": "The daughter moves from inheriting to continuing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In the first stanza she is learning from her father.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "learn to think"
                    },
                    {
                              "reasoning": "In the last stanza she acts by drawing the sea herself.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "I hold his pencil tight"
                    },
                    {
                              "reasoning": "The shift shows growth from observer to creator.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The harbour 'waiting' suggests a future she can reach.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "just out of reach"
                    }
          ],
          "finalAnswer": "She moves from learning her father's methods to actively drawing beyond them, showing confidence and continuation.",
          "commonErrors": [
                    "Only describing the stanzas without comparing attitude."
          ]
},
        },
        {
          id: "el8-u5-speaker-voice-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Cartographer's Daughter",
          "author": "Written for Akademik Space",
          "text": "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach."
},
          stem: "Write a short paragraph analysing the speaker's feelings about her father and her future.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Analysing voice",
                              "statement": "Link feelings to evidence and effect."
                    },
                    {
                              "kind": "technique",
                              "name": "Imagery",
                              "statement": "Objects such as maps and pencils carry emotional meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies respect or admiration for the father.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains how keeping maps shows closeness.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains how drawing beyond the page shows ambition.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Links the final image to hope or possibility.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Model: 'The speaker feels deep respect for her father, shown by keeping his maps and learning to think in his way. By the end she is no longer only inheriting his work but trying to extend it, drawing the sea beyond the page. This suggests hope and ambition.'",
          "commonErrors": [
                    "Retelling the poem without analysing voice.",
                    "Ignoring the final stanza."
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear, relevant analysis supported by well-chosen references and developed judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Some understanding of the poet's methods, with some relevant references."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment with few references."
                    }
          ]
},
        },
        {
          id: "el8-u5-speaker-voice-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Cartographer's Daughter",
          "author": "Written for Akademik Space",
          "text": "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach."
},
          stem: "Answer all parts of this question about the poem's speaker and voice.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Who is speaking? Give one clue.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the voice develops through the poem.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively the voice conveys the poem's theme.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Voice and theme",
                              "statement": "A poem's speaker and tone carry its meaning."
                    },
                    {
                              "kind": "technique",
                              "name": "Attitude and imagery",
                              "statement": "Word choice and images reveal feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The speaker is the cartographer's daughter.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "My father charts"
                    },
                    {
                              "reasoning": "The clue is that she keeps his maps and uses his pencil.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "I keep his maps"
                    },
                    {
                              "reasoning": "She begins by learning from her father.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "learn to think"
                    },
                    {
                              "reasoning": "The middle stanzas show her testing and extending his methods.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "his compass points"
                    },
                    {
                              "reasoning": "The final stanza shows her acting independently.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "I hold his pencil tight"
                    },
                    {
                              "reasoning": "The voice becomes more confident and creative.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "The voice effectively conveys respect for the father.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "each harbour named for storms he braved"
                    },
                    {
                              "reasoning": "It conveys growth because she moves from learner to creator.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "beyond the page"
                    },
                    {
                              "reasoning": "The quiet, reflective voice suits the theme of inheritance.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) The daughter; she keeps his maps. (b) She moves from learning to acting independently. (c) The voice is effective because it balances respect for the father with the daughter's growing confidence.",
          "commonErrors": [
                    "Confusing poet and speaker.",
                    "Ignoring development."
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear, relevant analysis supported by well-chosen references and developed judgement."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Some understanding of the poet's methods, with some relevant references."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment with few references."
                    }
          ]
},
        },
      ],
    },
    {
      id: "el8-u5-form-structure",
      title: "Form and structure",
      skill: "Analyse how stanzas, rhyme, line breaks and endings shape a poem's effect.",
      lesson: {
        sections: [
          {
            heading: "Form",
            body: "Form is the poem's visible shape: number of lines, stanzas, rhyme and rhythm. Three quatrains create a controlled, orderly feeling. A single long stanza might feel more urgent or conversational.",
          },
          {
            heading: "Structure and endings",
            body: "Poems often move from beginning to development to resolution. Line breaks can slow or speed reading. The final image usually carries the poem's main impression, so analyse how it relates to the opening.",
          },
        ],
        keyFormulas: [
          { name: "Stanza", statement: "A grouped set of lines in a poem." },
          { name: "Quatrain", statement: "A four-line stanza." },
          { name: "Enjambment", statement: "A sentence continuing across a line break." },
        ],
        workedExample: {
          problem: "What effect does the three-stanza structure have?",
          solution: "The three quatrains create order and progression: learning, testing and finally acting. The regular shape supports the poem's calm, reflective voice.",
        },
      },
      questions: [
        {
          id: "el8-u5-form-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the form of 'The Cartographer's Daughter'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One long stanza"
                    },
                    {
                              "id": "b",
                              "text": "Three quatrains"
                    },
                    {
                              "id": "c",
                              "text": "A sonnet"
                    },
                    {
                              "id": "d",
                              "text": "Free verse with no stanzas"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Form",
                              "statement": "The visible shape of a poem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The poem has three stanzas of four lines each, so it is three quatrains.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Three quatrains.",
          "commonErrors": [
                    "Counting lines instead of stanzas."
          ]
},
        },
        {
          id: "el8-u5-form-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "The Cartographer's Daughter",
          "author": "Written for Akademik Space",
          "text": "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach."
},
          stem: "Explain two effects of the poem's regular stanza structure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Form",
                              "statement": "Regular structure can create order or control."
                    },
                    {
                              "kind": "context",
                              "name": "Poetic voice",
                              "statement": "Shape supports the poem's calm, reflective tone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The regular quatrains create a sense of order and control.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The three stanzas allow a clear progression from learning to acting.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Regular stanzas create order; the three-part shape supports progression."
},
        },
        {
          id: "el8-u5-form-structure-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Cartographer's Daughter",
          "author": "Written for Akademik Space",
          "text": "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach."
},
          stem: "How does rhyme and rhythm affect the poem's tone? Refer to two details.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rhyme and rhythm",
                              "statement": "Sound patterns can create music, order or tension."
                    },
                    {
                              "kind": "context",
                              "name": "Tone",
                              "statement": "The poem's calm voice is supported by regular sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rhyming words such as 'ink' and 'think' create a gentle, memorable pattern.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "ink"
                    },
                    {
                              "reasoning": "The steady line lengths give a calm, reflective rhythm.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The regular sound supports the poem's controlled, thoughtful tone.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Rhyme and steady rhythm create a calm, orderly music that suits the reflective voice.",
          "commonErrors": [
                    "Naming rhyme without explaining effect."
          ]
},
        },
        {
          id: "el8-u5-form-structure-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
          "title": "The Cartographer's Daughter",
          "author": "Written for Akademik Space",
          "text": "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach."
},
          stem: "How does the ending relate to the opening? Refer to the poem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Circular structure",
                              "statement": "A poem can end by echoing or extending its beginning."
                    },
                    {
                              "kind": "context",
                              "name": "Theme",
                              "statement": "The ending shows what has changed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The opening shows the daughter learning from her father's maps.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "I keep his maps"
                    },
                    {
                              "reasoning": "The ending shows her drawing beyond the page.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "beyond the page"
                    },
                    {
                              "reasoning": "The harbour 'waiting' echoes the father's harbours but suggests a new future.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "a harbour waiting"
                    },
                    {
                              "reasoning": "The ending extends rather than repeats the opening.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The ending echoes the father's maps but shows the daughter creating her own harbour, completing the poem's movement from inheritance to independence.",
          "commonErrors": [
                    "Only saying it is about the sea."
          ]
},
        },
        {
          id: "el8-u5-form-structure-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Cartographer's Daughter",
          "author": "Written for Akademik Space",
          "text": "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach."
},
          stem: "Compare the first stanza with the final stanza. What does the change in structure and image suggest?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Stanza comparison",
                              "statement": "Compare how form and imagery develop."
                    },
                    {
                              "kind": "context",
                              "name": "Theme",
                              "statement": "The poem moves from learning to creating."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The first stanza is about keeping and learning.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The final stanza is about drawing and reaching.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The shift from 'learn' to 'draw' shows growth.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The final image of a waiting harbour suggests possibility.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The first stanza shows the daughter learning from her father; the final shows her drawing beyond his maps, suggesting growth and hope.",
          "commonErrors": [
                    "Comparing content without structural or thematic link."
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear, relevant analysis supported by well-chosen references and developed judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Some understanding of the poet's methods, with some relevant references."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment with few references."
                    }
          ]
},
        },
        {
          id: "el8-u5-form-structure-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Cartographer's Daughter",
          "author": "Written for Akademik Space",
          "text": "My father charts the coast in ink,\neach harbour named for storms he braved;\nI keep his maps and learn to think\nin lines that bend but never cave.\n\nWhen storms erase the roads below,\nhis compass points to places still:\na harbour no one else can show,\na coast no weather can fulfil.\n\nTonight I hold his pencil tight,\nand draw the sea beyond the page—\na border where the land turns light,\na harbour waiting, just out of reach."
},
          stem: "Answer all parts of this question about the poem's form and structure.",
          parts: [
          {
                    "label": "a",
                    "prompt": "How many stanzas and lines does the poem have?",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the stanza structure supports the poem's meaning.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the effectiveness of the poem's ending.",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Poetic form",
                              "statement": "Stanzas, lines and endings shape meaning."
                    },
                    {
                              "kind": "technique",
                              "name": "Structure",
                              "statement": "Form can mirror a poem's development."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three stanzas.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "Tonight I hold"
                    },
                    {
                              "reasoning": "Each stanza has four lines.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "The three stanzas create a clear progression.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "The first stanza introduces learning; the last shows acting.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "The regular quatrains create order and control.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "The structure mirrors the daughter's development.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "The ending is effective because it extends the father's legacy.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "beyond the page"
                    },
                    {
                              "reasoning": "The image of a waiting harbour creates hope and possibility.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c",
                              "evidence": "just out of reach"
                    },
                    {
                              "reasoning": "It gives the poem a resonant final impression.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Three stanzas of four lines. (b) The quatrains create order and progression from learning to acting. (c) The ending is effective because the waiting harbour suggests hope and the daughter continuing her father's work.",
          "commonErrors": [
                    "Counting lines incorrectly.",
                    "Ignoring structure's effect on meaning."
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Clear, relevant analysis supported by well-chosen references and developed judgement."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Some understanding of the poet's methods, with some relevant references."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited comment with few references."
                    }
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el8-u5-close-reading-notes",
      title: "Reading a poem closely — notes",
      summary: "Identify the speaker, track voice, and analyse form, stanzas and endings.",
      sections: [
        { heading: "Key idea", body: "Poems compress meaning; every choice of voice, form and image matters." },
        { heading: "Speaker", body: "The 'I' may be a persona; use pronouns and attitude to identify them." },
        { heading: "Form", body: "Stanzas, rhyme and line breaks shape pace and emphasis; endings often carry the main impression." },
      ],
    },
  ],
};
