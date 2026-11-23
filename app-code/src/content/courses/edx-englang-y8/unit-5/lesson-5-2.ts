import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "el8-u5-lesson-5-2",
  code: "5-2",
  title: "Imagery, Sound and Rhythm",
  goal: "I CAN analyse a poem's imagery, symbolism, sound devices and rhythm and explain their effects.",
  standards: ["KS3 Reading", "KS3 AO2"],
  
  vocabulary: [
    { term: "Imagery", definition: "Language that creates sensory pictures in the reader's mind." },
    { term: "Personification", definition: "Giving human qualities to non-human things." },
    { term: "Simile", definition: "A comparison using 'like' or 'as'." },
    { term: "Alliteration", definition: "Repeating initial consonant sounds in nearby words." },
    { term: "Rhyme", definition: "Repetition of similar sounds, often at line endings." },
    { term: "Rhythm", definition: "The pattern of stressed and unstressed syllables in a poem." },
  ],
  concepts: [
    {
      id: "el8-u5-imagery-symbolism",
      title: "Imagery and symbolism",
      skill: "Analyse how images and symbols create mood and meaning in a poem.",
      lesson: {
        sections: [
          {
            heading: "Sensory imagery",
            body: "Poets use sight, sound, smell, touch and taste to make scenes vivid. 'Diesel, rain and distant lights' appeals to smell, sound and sight, creating a tired urban night. Choose the most important images and explain their effect.",
          },
          {
            heading: "Personification and symbolism",
            body: "Personification gives human qualities to things: 'windows wear the city's sleep'. A symbol is an object that stands for an idea, such as 'a quiet rope' tying the dark to morning. Explain what the image suggests beyond its literal meaning.",
          },
        ],
        keyFormulas: [
          { name: "Imagery", statement: "Language creating sensory or mental pictures." },
          { name: "Personification", statement: "Human qualities given to non-human things." },
          { name: "Symbol", statement: "An object or image representing a larger idea." },
        ],
        workedExample: {
          problem: "What does 'windows wear the city's sleep' suggest?",
          solution: "The windows are personified as wearing sleep like clothing, suggesting the city is resting and the buildings hold the dreams of its people.",
        },
      },
      questions: [
        {
          id: "el8-u5-imagery-symbolism-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main image in 'its windows wear the city's sleep'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A literal bed inside a window"
                    },
                    {
                              "id": "b",
                              "text": "The city resting as if asleep"
                    },
                    {
                              "id": "c",
                              "text": "Windows made of glass"
                    },
                    {
                              "id": "d",
                              "text": "A dream about a bus"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Personification",
                              "statement": "Human qualities are given to the city."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The windows 'wear' sleep, personifying the city as resting; the image suggests quiet and dreams.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "wear the city's sleep"
                    }
          ],
          "finalAnswer": "**(b)** The city resting as if asleep.",
          "commonErrors": [
                    "Taking 'sleep' literally."
          ]
},
        },
        {
          id: "el8-u5-imagery-symbolism-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "The Night Bus",
          "author": "Written for Akademik Space",
          "text": "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves."
},
          stem: "Identify two pieces of sensory imagery in the poem and name the sense each appeals to.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sensory imagery",
                              "statement": "Images appeal to one or more senses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Diesel, rain and distant lights' appeals to smell, sound and sight.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "diesel, rain and distant lights"
                    },
                    {
                              "reasoning": "'The shuttered baker' or 'sleeping rows of shops' creates a visual image of a quiet street.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "sleeping rows of shops"
                    }
          ],
          "finalAnswer": "Diesel/rain/lights (smell, sound, sight) and sleeping shops (sight)."
},
        },
        {
          id: "el8-u5-imagery-symbolism-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Night Bus",
          "author": "Written for Akademik Space",
          "text": "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves."
},
          stem: "Explain the effect of the personification in 'its windows wear the city's sleep'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Personification",
                              "statement": "Giving human qualities creates mood and meaning."
                    },
                    {
                              "kind": "context",
                              "name": "Night and rest",
                              "statement": "The image suggests the city is dormant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The windows are given the human action of wearing.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "wear"
                    },
                    {
                              "reasoning": "Sleep is presented as something the city puts on, making the city seem alive and resting.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The image creates a quiet, dreamlike mood.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "It makes the city seem alive yet asleep, creating a quiet, dreamlike atmosphere.",
          "commonErrors": [
                    "Only identifying personification without effect."
          ]
},
        },
        {
          id: "el8-u5-imagery-symbolism-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
          "title": "The Night Bus",
          "author": "Written for Akademik Space",
          "text": "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves."
},
          stem: "Analyse the simile 'like photographs of someone's dreams'. What does it suggest about the windows and the city?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Simile",
                              "statement": "A comparison using 'like' creates a vivid image."
                    },
                    {
                              "kind": "context",
                              "name": "Memory and dreams",
                              "statement": "Photographs and dreams both preserve moments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The simile compares the windows to photographs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "photographs"
                    },
                    {
                              "reasoning": "It suggests the windows hold or reflect the city's dreams.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Someone's dreams' implies many private lives inside the buildings.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "someone's dreams"
                    },
                    {
                              "reasoning": "The image makes the night feel mysterious and human.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The windows become like photographs of dreams, suggesting they reflect private hopes and memories inside the sleeping city.",
          "commonErrors": [
                    "Describing the comparison literally."
          ]
},
        },
        {
          id: "el8-u5-imagery-symbolism-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Night Bus",
          "author": "Written for Akademik Space",
          "text": "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves."
},
          stem: "Analyse how imagery creates the mood of the night bus journey.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imagery",
                              "statement": "Sensory and figurative images build atmosphere."
                    },
                    {
                              "kind": "context",
                              "name": "Mood",
                              "statement": "Images of sleep, darkness and movement create a quiet, reflective mood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The bus 'hums a lullaby', making the journey sound soothing.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "hums a lullaby"
                    },
                    {
                              "reasoning": "'Diesel, rain and distant lights' creates a tired urban atmosphere.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "diesel, rain"
                    },
                    {
                              "reasoning": "Sleeping shops and a quiet street make the city seem dormant.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "sleeping rows of shops"
                    },
                    {
                              "reasoning": "The final image of the driver 'blind with miles' suggests endless travel.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "blind with miles"
                    },
                    {
                              "reasoning": "The mood is quiet, dreamlike and slightly lonely.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The images work together to make the night feel suspended.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The poem's imagery—lullaby hum, diesel and rain, sleeping shops, dreaming windows—creates a quiet, dreamlike mood of suspended night travel.",
          "commonErrors": [
                    "Listing images without mood.",
                    "Missing the final image."
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
          id: "el8-u5-imagery-symbolism-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Night Bus",
          "author": "Written for Akademik Space",
          "text": "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves."
},
          stem: "Answer all parts of this question about the poem's imagery.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write down two images from the first stanza.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how personification and simile are used.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively the imagery creates mood.",
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
                              "statement": "Personification and simile create vivid meaning."
                    },
                    {
                              "kind": "context",
                              "name": "Mood",
                              "statement": "Imagery shapes the reader's emotional response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Hums a lullaby'.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "hums a lullaby"
                    },
                    {
                              "reasoning": "'Windows wear the city's sleep'.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "wear the city's sleep"
                    },
                    {
                              "reasoning": "Personification gives the bus a lullaby and windows sleep.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "hums a lullaby"
                    },
                    {
                              "reasoning": "It makes the city seem alive yet resting.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "The simile compares windows to photographs of dreams.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "photographs"
                    },
                    {
                              "reasoning": "It suggests the windows reflect private hopes and memories.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "someone's dreams"
                    },
                    {
                              "reasoning": "The imagery is effective because it appeals to several senses.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "diesel, rain and distant lights"
                    },
                    {
                              "reasoning": "It creates a consistent dreamlike mood.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "The final image of the driver 'blind with miles' adds a sense of endless journey.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c",
                              "evidence": "blind with miles"
                    }
          ],
          "finalAnswer": "(a) 'Hums a lullaby'; 'windows wear the city's sleep'. (b) Personification makes the bus and city seem alive/resting; the simile suggests windows reflect dreams. (c) The imagery is effective because it appeals to several senses and creates a consistent dreamlike mood.",
          "commonErrors": [
                    "Identifying devices without explaining mood.",
                    "Ignoring the final image."
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
      id: "el8-u5-sound-rhythm",
      title: "Sound and rhythm",
      skill: "Analyse rhyme, alliteration, rhythm and line breaks and explain their effects.",
      lesson: {
        sections: [
          {
            heading: "Rhyme and alliteration",
            body: "Rhyme repeats similar sounds and can create music or emphasis. Alliteration repeats initial consonants, as in 'sleeping rows of shops' or 'shuttered baker'. These sounds can make lines memorable and set a mood.",
          },
          {
            heading: "Rhythm and line breaks",
            body: "Rhythm is the pattern of stressed and unstressed syllables. Regular rhythm can feel calm; broken or irregular rhythm can feel restless. Line breaks can pause the reader or create surprise. Read the poem aloud to hear its music.",
          },
        ],
        keyFormulas: [
          { name: "Rhyme", statement: "Repetition of similar sounds, often at line endings." },
          { name: "Alliteration", statement: "Repeated initial consonant sounds." },
          { name: "Enjambment", statement: "A sentence running over a line break." },
        ],
        workedExample: {
          problem: "What effect does 'sleeping rows of shops' have?",
          solution: "The repeated 's' sounds create alliteration, making the line soft and sleepy, matching the poem's quiet mood.",
        },
      },
      questions: [
        {
          id: "el8-u5-sound-rhythm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What sound device is used in 'sleeping rows of shops'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rhyme"
                    },
                    {
                              "id": "b",
                              "text": "Alliteration"
                    },
                    {
                              "id": "c",
                              "text": "Simile"
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
                              "name": "Alliteration",
                              "statement": "Repeated initial consonant sounds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Sleeping rows of shops' repeats the 's' sound at the start of words, which is alliteration.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Alliteration.",
          "commonErrors": [
                    "Choosing rhyme because the words are close together."
          ]
},
        },
        {
          id: "el8-u5-sound-rhythm-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "The Night Bus",
          "author": "Written for Akademik Space",
          "text": "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves."
},
          stem: "Give two examples of sound repetition in the poem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound devices",
                              "statement": "Rhyme, alliteration and rhythm create music."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alliteration: 'sleeping rows of shops'.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "sleeping rows of shops"
                    },
                    {
                              "reasoning": "Rhyme or repeated sounds: 'lights'/'dreams' are not exact, but 'hums a lullaby' and 'diesel' create soft sounds.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "hums a lullaby"
                    }
          ],
          "finalAnswer": "'Sleeping rows of shops' (alliteration) and the soft sounds in 'hums a lullaby'.",
          "commonErrors": [
                    "Naming devices without examples."
          ]
},
        },
        {
          id: "el8-u5-sound-rhythm-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Night Bus",
          "author": "Written for Akademik Space",
          "text": "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves."
},
          stem: "How does rhythm affect the poem's mood? Refer to two details.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Rhythm",
                              "statement": "Stress patterns create pace and mood."
                    },
                    {
                              "kind": "context",
                              "name": "Night journey",
                              "statement": "The poem's quiet rhythm matches its subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lines have a steady, unhurried rhythm.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The soft sounds of 'hums', 'sleep' and 'lullaby' create calm.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The regular rhythm makes the night bus journey feel gentle and reflective.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The steady, soft rhythm creates a calm, sleepy mood that suits the night journey.",
          "commonErrors": [
                    "Saying 'it has rhythm' without effect."
          ]
},
        },
        {
          id: "el8-u5-sound-rhythm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
          "title": "The Night Bus",
          "author": "Written for Akademik Space",
          "text": "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves."
},
          stem: "Identify two sound devices and explain how each contributes to the poem's atmosphere.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound devices",
                              "statement": "Alliteration and rhythm shape mood."
                    },
                    {
                              "kind": "context",
                              "name": "Atmosphere",
                              "statement": "Soft sounds create quietness; repetition creates emphasis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alliteration in 'sleeping rows of shops' softens the line.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "sleeping rows of shops"
                    },
                    {
                              "reasoning": "It echoes the quiet, dormant city.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The gentle rhythm of the lines slows the reader's pace.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The overall effect is calm, dreamlike and still.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Alliteration and gentle rhythm create a soft, quiet atmosphere that matches the sleeping city.",
          "commonErrors": [
                    "Only identifying devices."
          ]
},
        },
        {
          id: "el8-u5-sound-rhythm-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Night Bus",
          "author": "Written for Akademik Space",
          "text": "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves."
},
          stem: "Analyse how sound and rhythm work together in the poem. Refer to at least three examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound and rhythm",
                              "statement": "Devices combine to create musical and emotional effects."
                    },
                    {
                              "kind": "context",
                              "name": "Poem's subject",
                              "statement": "The night bus journey is quiet and reflective."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Hums a lullaby' uses a soft verb and a soothing image.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "hums a lullaby"
                    },
                    {
                              "reasoning": "'Sleep', 'sleeping' and 'dreams' repeat sleep-related sounds and ideas.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "sleep"
                    },
                    {
                              "reasoning": "Alliteration in 'sleeping rows of shops' adds softness.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "sleeping rows of shops"
                    },
                    {
                              "reasoning": "The steady line lengths create a calm rhythm.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Together they make the journey feel quiet and dreamlike.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The final 'blind with miles' slows the ending with a reflective image.",
                              "marks": 1,
                              "markCode": "AO2",
                              "evidence": "blind with miles"
                    }
          ],
          "finalAnswer": "The poem uses soft verbs, repeated sleep imagery, alliteration and steady rhythm to create a quiet, dreamlike mood.",
          "commonErrors": [
                    "Separating devices without linking them.",
                    "Missing the ending."
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
          id: "el8-u5-sound-rhythm-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Night Bus",
          "author": "Written for Akademik Space",
          "text": "The night bus hums a lullaby\nof diesel, rain and distant lights;\nits windows wear the city’s sleep\nlike photographs of someone’s dreams.\n\nWe pass the sleeping rows of shops,\nthe shuttered baker, closed-up school,\nand every street a quiet rope\nthat ties the dark to morning’s rule.\n\nAt the last stop I count the stars\nthat blink above the depot roof,\nand think the driver, blind with miles,\nmight be the only one who moves."
},
          stem: "Answer all parts of this question about the poem's sound and rhythm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two sound devices used in the poem.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how rhythm affects the mood.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively sound supports the poem's meaning.",
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
                              "statement": "Rhyme, alliteration and rhythm create music and mood."
                    },
                    {
                              "kind": "context",
                              "name": "Meaning",
                              "statement": "Sound can reinforce a poem's subject and feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alliteration: 'sleeping rows of shops'.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "sleeping rows of shops"
                    },
                    {
                              "reasoning": "Soft sound words such as 'hums' and 'sleep'.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "hums"
                    },
                    {
                              "reasoning": "The steady rhythm slows the reader's pace.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Soft sounds create calm and stillness.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "The gentle music suits the night journey.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "The rhythm makes the poem feel reflective rather than urgent.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Sound is effective because it reinforces the poem's quiet subject.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "hums a lullaby"
                    },
                    {
                              "reasoning": "Alliteration and sleep imagery create a consistent mood.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "The calm rhythm makes the journey feel suspended and dreamlike.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Alliteration and soft sound words. (b) The steady rhythm slows the reader and creates calm. (c) Sound is effective because it reinforces the quiet, dreamlike mood of the night journey.",
          "commonErrors": [
                    "Identifying devices without effect.",
                    "Ignoring rhythm."
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
      id: "el8-u5-sound-notes",
      title: "Imagery, sound and rhythm — notes",
      summary: "Sensory images, personification and simile build mood; rhyme, alliteration and rhythm create music.",
      sections: [
        { heading: "Key idea", body: "Poets use images and sounds to make meaning felt as well as understood." },
        { heading: "Imagery", body: "Personification and simile turn the city into something alive and dreamlike." },
        { heading: "Sound", body: "Soft sounds, alliteration and steady rhythm match the poem's quiet night mood." },
      ],
    },
  ],
};
