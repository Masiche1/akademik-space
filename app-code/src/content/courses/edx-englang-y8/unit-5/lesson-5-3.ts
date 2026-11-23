import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "el8-u5-lesson-5-3",
  code: "5-3",
  title: "Comparing Poems",
  goal: "I CAN compare two poems' ideas, voices and methods and evaluate which is more effective.",
  standards: ["KS3 Reading", "KS3 AO2", "KS3 AO3"],
  
  vocabulary: [
    { term: "Comparison", definition: "Identifying similarities and differences between two texts." },
    { term: "Theme", definition: "The central idea or message of a poem." },
    { term: "Voice", definition: "The distinctive tone and personality of a poem's speaker." },
    { term: "Contrast", definition: "A difference that highlights meaning." },
    { term: "Effectiveness", definition: "How well a poem achieves its purpose or creates an impact." },
    { term: "Linking words", definition: "Phrases such as 'similarly', 'whereas' and 'in contrast' used in comparison." },
  ],
  concepts: [
    {
      id: "el8-u5-comparing-ideas",
      title: "Comparing ideas and voice",
      skill: "Compare what two poems are about and how their speakers feel.",
      lesson: {
        sections: [
          {
            heading: "Find the shared idea",
            body: "Both 'The Road North' and 'Leaving' are about departure and home. One focuses on a family journey; the other on a farewell at a station. Identify the shared theme before comparing differences.",
          },
          {
            heading: "Compare voices",
            body: "The speaker in 'The Road North' is reflective and hopeful, understanding that 'leaving can be coming home'. The speaker in 'Leaving' is more wistful, watching the fields pass and feeling words 'never say or quite have learned'. Compare tone, not just topic.",
          },
        ],
        keyFormulas: [
          { name: "Theme", statement: "The central idea or message of a poem." },
          { name: "Voice", statement: "The speaker's tone and attitude." },
          { name: "Contrast", statement: "A difference that highlights meaning." },
        ],
        workedExample: {
          problem: "How are the speakers' feelings about leaving different?",
          solution: "The Road North speaker feels hopeful and reflective, seeing leaving as a form of homecoming. The Leaving speaker feels wistful and uncertain, watching the landscape pass.",
        },
      },
      questions: [
        {
          id: "el8-u5-comparing-ideas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do both poems mainly explore?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The beauty of trains"
                    },
                    {
                              "id": "b",
                              "text": "Leaving home and the feelings it creates"
                    },
                    {
                              "id": "c",
                              "text": "A holiday at the seaside"
                    },
                    {
                              "id": "d",
                              "text": "The weather in different seasons"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Theme",
                              "statement": "Both poems are about departure and home."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both poems focus on leaving and what it means for the speaker.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Leaving home and its feelings.",
          "commonErrors": [
                    "Choosing (a): trains appear but are not the theme."
          ]
},
        },
        {
          id: "el8-u5-comparing-ideas-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "The Road North",
          "author": "Written for Akademik Space",
          "text": "We leave at first light, the kettle singing,\nthe map folded to the crease we know.\nMy brother counts the telegraph poles\nlike beads on a rosary of home.\n\nThe fields unroll their green and gold,\nthe hedges bow beneath the weight\nof birds that flash and dip and rise\nas if the air were hands of light.\n\nBy noon the hills have turned to blue,\nthe church spire shrinks behind the trees,\nand I begin to understand\nhow leaving can be coming home."
},
          stem: "Give two details from 'The Road North' that show the journey is beginning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Close reading",
                              "statement": "Use evidence to identify a poem's situation."
                    },
                    {
                              "kind": "context",
                              "name": "Departure",
                              "statement": "The poem describes leaving at first light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "They leave at first light.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "first light"
                    },
                    {
                              "reasoning": "The map is folded and the brother counts poles.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "map folded"
                    }
          ],
          "finalAnswer": "Leaving at first light and preparing the map show the journey is starting."
},
        },
        {
          id: "el8-u5-comparing-ideas-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the tone of the two speakers. Use one detail from each poem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tone comparison",
                              "statement": "Compare attitudes using evidence."
                    },
                    {
                              "kind": "context",
                              "name": "Departure",
                              "statement": "Both poems are about leaving but feel different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Road North speaker is hopeful ('leaving can be coming home').",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The Leaving speaker is wistful ('never say or quite have learned').",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The first feels resolved; the second feels uncertain and reflective.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The Road North speaker is hopeful; the Leaving speaker is wistful and uncertain.",
          "commonErrors": [
                    "Only describing one poem."
          ]
},
        },
        {
          id: "el8-u5-comparing-ideas-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do the two poems treat the idea of 'home' differently? Refer to both poems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Theme",
                              "statement": "Home can mean place, family or belonging."
                    },
                    {
                              "kind": "technique",
                              "name": "Contrast",
                              "statement": "Different treatments create different meanings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In The Road North, home is a starting point that is left behind.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "In Leaving, home is what is watched recede from the train window.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The Road North suggests home can travel with you.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Leaving suggests home is fixed and becoming distant.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The Road North treats home as something that can accompany the traveller; Leaving treats it as a fixed place being left behind.",
          "commonErrors": [
                    "Saying both are about home without contrast."
          ]
},
        },
        {
          id: "el8-u5-comparing-ideas-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the speakers' emotional responses to departure in the two poems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparing voice",
                              "statement": "Link tone to emotional effect."
                    },
                    {
                              "kind": "context",
                              "name": "Departure",
                              "statement": "Both poems explore leaving but with different feelings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Road North speaker feels hopeful and understanding.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The Leaving speaker feels wistful and uncertain.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The first poem resolves the emotion; the second leaves it open.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Both use imagery to make the emotion felt.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The Road North speaker feels hopeful, seeing leaving as coming home; the Leaving speaker feels wistful and unresolved, watching fields pass.",
          "commonErrors": [
                    "Treating both speakers as identical.",
                    "Ignoring endings."
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
          id: "el8-u5-comparing-ideas-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Road North",
          "author": "Written for Akademik Space",
          "text": "We leave at first light, the kettle singing,\nthe map folded to the crease we know.\nMy brother counts the telegraph poles\nlike beads on a rosary of home.\n\nThe fields unroll their green and gold,\nthe hedges bow beneath the weight\nof birds that flash and dip and rise\nas if the air were hands of light.\n\nBy noon the hills have turned to blue,\nthe church spire shrinks behind the trees,\nand I begin to understand\nhow leaving can be coming home."
},
          stem: "Answer all parts of this question comparing the two poems.",
          parts: [
          {
                    "label": "a",
                    "prompt": "What is the shared theme? Give one clue from each poem.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Compare the speakers' attitudes to leaving.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate which poem more effectively conveys the emotion of departure.",
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
                              "name": "Comparing poems",
                              "statement": "Compare ideas, voices and effects."
                    },
                    {
                              "kind": "technique",
                              "name": "Theme and tone",
                              "statement": "Shared themes can be treated with different attitudes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shared theme: leaving home.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "We leave at first light"
                    },
                    {
                              "reasoning": "Leaving also shows departure from a platform.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a",
                              "evidence": "The platform empties"
                    },
                    {
                              "reasoning": "The Road North speaker is hopeful and reflective.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "leaving can be coming home"
                    },
                    {
                              "reasoning": "The Leaving speaker is wistful and uncertain.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b",
                              "evidence": "never say or quite have learned"
                    },
                    {
                              "reasoning": "The first poem resolves the feeling; the second leaves it open.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Both use journey imagery but to different ends.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "The Road North is effective because its ending offers insight.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "coming home"
                    },
                    {
                              "reasoning": "Leaving is effective because its unresolved tone mirrors uncertainty.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c",
                              "evidence": "never say"
                    },
                    {
                              "reasoning": "Judgement depends on whether the reader values resolution or ambiguity.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Leaving home; clues include 'We leave' and 'The platform empties'. (b) The Road North speaker is hopeful; the Leaving speaker is wistful. (c) Either poem can be effective: The Road North offers resolution, while Leaving captures uncertainty.",
          "commonErrors": [
                    "Forcing one poem to 'win' without criteria.",
                    "Only comparing topics."
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
      id: "el8-u5-comparing-methods",
      title: "Comparing methods",
      skill: "Compare imagery, structure and sound in two poems and evaluate their effects.",
      lesson: {
        sections: [
          {
            heading: "Compare methods",
            body: "Look at imagery, structure, sound and endings. 'The Road North' uses a journey through landscape; 'Leaving' uses a train window and precise, quiet images. Compare how each method suits its emotion.",
          },
          {
            heading: "Evaluate effectiveness",
            body: "A poem is effective when its methods match its purpose. 'The Road North' builds to an understanding; 'Leaving' ends with a delicate image of unspoken words. Judge which method best creates the intended feeling.",
          },
        ],
        keyFormulas: [
          { name: "Imagery", statement: "Language creating sensory or mental pictures." },
          { name: "Structure", statement: "The organisation and development of a poem." },
          { name: "Effectiveness", statement: "How well methods achieve the poem's purpose." },
        ],
        workedExample: {
          problem: "How do the endings differ in method?",
          solution: "The Road North ends with a clear insight ('leaving can be coming home'); Leaving ends with a quieter image of words 'never say or quite have learned'.",
        },
      },
      questions: [
        {
          id: "el8-u5-comparing-methods-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which poetic device appears in 'as if the air were hands of light'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Simile"
                    },
                    {
                              "id": "b",
                              "text": "Rhyme"
                    },
                    {
                              "id": "c",
                              "text": "Alliteration"
                    },
                    {
                              "id": "d",
                              "text": "Onomatopoeia"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Simile",
                              "statement": "A comparison using 'like' or 'as'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The phrase uses 'as if' to compare the air to hands of light, which is a simile.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Simile.",
          "commonErrors": [
                    "Choosing alliteration because of repeated sounds."
          ]
},
        },
        {
          id: "el8-u5-comparing-methods-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
          "title": "The Road North",
          "author": "Written for Akademik Space",
          "text": "We leave at first light, the kettle singing,\nthe map folded to the crease we know.\nMy brother counts the telegraph poles\nlike beads on a rosary of home.\n\nThe fields unroll their green and gold,\nthe hedges bow beneath the weight\nof birds that flash and dip and rise\nas if the air were hands of light.\n\nBy noon the hills have turned to blue,\nthe church spire shrinks behind the trees,\nand I begin to understand\nhow leaving can be coming home."
},
          stem: "Give two examples of imagery from 'The Road North'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imagery",
                              "statement": "Sensory and figurative images create meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'The kettle singing' gives sound to the morning.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "kettle singing"
                    },
                    {
                              "reasoning": "'Birds that flash and dip and rise' creates a visual image.",
                              "marks": 1,
                              "markCode": "AO1",
                              "evidence": "flash and dip and rise"
                    }
          ],
          "finalAnswer": "'Kettle singing' and 'birds that flash and dip and rise'."
},
        },
        {
          id: "el8-u5-comparing-methods-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the structure of the two poems. Use one detail from each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Structure",
                              "statement": "Compare how poems are organised."
                    },
                    {
                              "kind": "context",
                              "name": "Journey and farewell",
                              "statement": "Different structures suit different emotions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Road North moves through landscape from morning to noon.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Leaving stays focused on the platform and train window.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The first builds to an insight; the second ends with a quiet image.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The Road North develops through the journey; Leaving is more concentrated on the farewell moment.",
          "commonErrors": [
                    "Only describing one poem's structure."
          ]
},
        },
        {
          id: "el8-u5-comparing-methods-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do the endings differ in effect? Refer to both poems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ending",
                              "statement": "The final lines often carry the poem's main impression."
                    },
                    {
                              "kind": "context",
                              "name": "Departure",
                              "statement": "Endings can resolve or leave emotion open."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Road North ends with a clear insight: leaving can be coming home.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Leaving ends with a delicate image of words 'never say or quite have learned'.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The first ending feels resolved; the second feels unresolved.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Both endings are memorable but achieve different effects.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The Road North ending is clear and hopeful; Leaving ending is subtle and unresolved.",
          "commonErrors": [
                    "Quoting endings without comparing effect."
          ]
},
        },
        {
          id: "el8-u5-comparing-methods-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare how imagery is used in the two poems to create mood.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imagery comparison",
                              "statement": "Compare how images create mood."
                    },
                    {
                              "kind": "context",
                              "name": "Departure",
                              "statement": "Both poems use journey images but differently."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Road North uses bright, moving images of fields and birds.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Leaving uses quieter, stiller images of the platform and glass.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The first creates energy and hope; the second creates stillness and longing.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Both make the journey felt through concrete detail.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The Road North uses lively landscape imagery for hope; Leaving uses quiet, reflective imagery for longing.",
          "commonErrors": [
                    "Listing images without mood.",
                    "Ignoring contrast."
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
          id: "el8-u5-comparing-methods-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Answer all parts of this question comparing the poems' methods.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify one poetic device used in each poem.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Compare the use of imagery and structure.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate which poem's methods are more effective for its theme.",
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
                              "name": "Poetic methods",
                              "statement": "Compare imagery, structure and sound."
                    },
                    {
                              "kind": "context",
                              "name": "Theme",
                              "statement": "Methods should suit the poem's purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The Road North uses simile ('as if the air were hands of light').",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "Leaving uses imagery of fields as 'a paragraph turned'.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "The Road North develops through the landscape.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Leaving focuses on the platform and train window.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "The first uses brighter, moving imagery; the second quieter, stiller images.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "The structures reflect their emotions: journey versus farewell.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "The Road North is effective because its methods build to insight.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Leaving is effective because its quiet methods mirror uncertainty.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Effectiveness depends on whether the reader values resolution or ambiguity.",
                              "marks": 2,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Simile in The Road North; metaphor/imagery in Leaving. (b) The Road North develops through landscape; Leaving focuses on farewell. (c) Both are effective: one resolves, the other leaves emotion open.",
          "commonErrors": [
                    "Comparing only content.",
                    "Ignoring structure."
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
      id: "el8-u5-comparing-notes",
      title: "Comparing poems — notes",
      summary: "Compare theme, voice, imagery, structure and sound; judge effectiveness by fit to purpose.",
      sections: [
        { heading: "Key idea", body: "Comparison needs similarities and differences linked to effect." },
        { heading: "Ideas and voice", body: "Both poems explore leaving, but one is hopeful and the other wistful." },
        { heading: "Methods", body: "Imagery, structure and endings should match the poem's emotion." },
      ],
    },
  ],
};
