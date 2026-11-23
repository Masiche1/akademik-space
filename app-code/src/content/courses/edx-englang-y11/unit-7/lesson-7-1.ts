import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "el11-u7-lesson-7-1",
  code: "7-1",
  title: "Imagery, Metaphor and Tone in Poetry",
  goal: "I CAN analyse how poets use imagery, metaphor and word choice to create tone and meaning.",
  standards: ["4EA1 Paper 1", "4EA1 AO1", "4EA1 AO2"],
  
  vocabulary: [
    { term: "Imagery", definition: "Language that appeals to the senses, building pictures in the reader's mind." },
    { term: "Metaphor", definition: "A direct comparison between two unlike things without using 'like' or 'as'." },
    { term: "Personification", definition: "Giving human qualities to non-human things." },
    { term: "Simile", definition: "A comparison using 'like' or 'as'." },
    { term: "Tone", definition: "The poet's attitude towards the subject, created through word choice and imagery." },
    { term: "Connotation", definition: "The associations and feelings a word carries beyond its literal meaning." },
  ],
  concepts: [
    {
      id: "el11-u7-imagery",
      title: "Imagery and metaphor",
      skill: "Identify and explain the effect of imagery and metaphor in a poem, linking technique to meaning.",
      lesson: {
        sections: [
          {
            heading: "What imagery does",
            body: "Poets build meaning out of pictures. Imagery appeals to the senses: sight ('cracked grey path'), sound ('argue with itself') and touch ('shivering mud'). A strong answer names the image, says what it literally shows, then explains what it suggests. 'The water has pulled its dark blanket back' is not just a description of low tide; the blanket image makes the sea seem protective and its withdrawal feel like a kind of abandonment.",
          },
          {
            heading: "Metaphor and personification",
            body: "Metaphor states a thing IS something else: 'heavy as a second house'. Personification gives human behaviour to the non-human: the harbour 'gives back', the sea 'borrowed', mud that can 'argue with itself'. Ask what the comparison adds. In 'I think of everything we lose and never meant to keep', the plain verb 'think' does quiet emotional work; the poem earns its feeling because it has been built from small, concrete objects first.",
          },
          {
            heading: "From technique to meaning",
            body: "Always close the chain: device, quotation, effect on meaning. 'Lays them out in rows like evidence, patient as a lawyer' is a simile that makes the harbour seem to be conducting an investigation, so the lost objects become clues to something missing. That tells us the poem is not really about litter; it is about what the sea takes and returns.",
          },
        ],
        keyFormulas: [
          { name: "Imagery", statement: "Language appealing to the senses that creates a mental picture or feeling." },
          { name: "Metaphor", statement: "A direct identification of one thing with another to transfer qualities." },
          { name: "Personification", statement: "Human actions or feelings given to objects or nature." },
        ],
        workedExample: {
          problem: "In 'Low Water', what effect does the simile 'lays them out in rows like evidence, patient as a lawyer' create?",
          solution: "The simile compares the objects left on the mud to evidence being prepared for a legal case. 'Rows' and 'evidence' suggest order, investigation and mystery, while 'patient as a lawyer' gives the harbour a deliberate, unhurried intelligence. The effect is to make the scene feel like a quiet interrogation: the sea has taken things and is now revealing them, so ordinary rubbish becomes a clue to loss. It also hints that something has happened that needs explaining, which raises the poem's reflective mood.",
        },
      },
      questions: [
        {
          id: "el11-u7-imagery-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "Low Water",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "The harbour at low tide gives back what the sea borrowed -\na rusted anchor, a boot, a snapped blue rope -\nand lays them out in rows like evidence, patient as a lawyer.\nI walk the cracked grey path the boats have abandoned,\ncounting the gulls that have not yet noticed.\nThe water has pulled its dark blanket back\nand left the shivering mud to argue with itself.\nA child finds a tin soldier in the weed\nand stands quite still, as if it might salute.\nI think of everything we lose and never meant to keep -\nthe sea returns it all, but only for a day."
},
          stem: "Read the first stanza. Which of these is an example of personification in 'Low Water'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'a rusted anchor, a boot, a snapped blue rope'"
                    },
                    {
                              "id": "b",
                              "text": "'lays them out in rows like evidence'"
                    },
                    {
                              "id": "c",
                              "text": "'left the shivering mud to argue with itself'"
                    },
                    {
                              "id": "d",
                              "text": "'the boats have abandoned'"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Personification",
                              "statement": "Human qualities given to the non-human; mud 'argues'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only 'argue with itself' gives human behaviour (arguing) to mud. Credit for identifying the human action.",
                              "evidence": "to argue with itself",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** 'left the shivering mud to argue with itself' - mud is given the human act of arguing.",
          "commonErrors": [
                    "Choosing (b), which is a simile, not personification.",
                    "Choosing (d): 'abandoned' describes boats' action, but the boats are not given human feeling directly in the same way."
          ]
},
        },
        {
          id: "el11-u7-imagery-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "Low Water",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "The harbour at low tide gives back what the sea borrowed -\na rusted anchor, a boot, a snapped blue rope -\nand lays them out in rows like evidence, patient as a lawyer.\nI walk the cracked grey path the boats have abandoned,\ncounting the gulls that have not yet noticed.\nThe water has pulled its dark blanket back\nand left the shivering mud to argue with itself.\nA child finds a tin soldier in the weed\nand stands quite still, as if it might salute.\nI think of everything we lose and never meant to keep -\nthe sea returns it all, but only for a day."
},
          stem: "What does the image of the 'snapped blue rope' contribute to the mood of the first stanza? Use a quotation in your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Image and mood",
                              "statement": "A concrete image plus its emotional colouring shows the poem's atmosphere."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies the image's associations: 'snapped' and 'blue' suggest breakage, loss and the sea's former life.",
                              "evidence": "a snapped blue rope",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Links it to mood: it is one more 'borrowed' object, so it reinforces a mood of aftermath and quiet loss rather than celebration.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The 'snapped blue rope' is a small, broken thing the sea has returned. 'Snapped' suggests violence or decay and 'blue' recalls the sea itself, so the image adds to the stanza's mood of gentle melancholy - a record of what has been lost.",
          "commonErrors": [
                    "Describing the rope's colour without saying what it suggests.",
                    "Asserting the mood is happy because the tide returns things."
          ]
},
        },
        {
          id: "el11-u7-imagery-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Low Water",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "The harbour at low tide gives back what the sea borrowed -\na rusted anchor, a boot, a snapped blue rope -\nand lays them out in rows like evidence, patient as a lawyer.\nI walk the cracked grey path the boats have abandoned,\ncounting the gulls that have not yet noticed.\nThe water has pulled its dark blanket back\nand left the shivering mud to argue with itself.\nA child finds a tin soldier in the weed\nand stands quite still, as if it might salute.\nI think of everything we lose and never meant to keep -\nthe sea returns it all, but only for a day."
},
          stem: "Explain how the poet uses the extended metaphor of the sea 'borrowing' and returning objects in 'Low Water'. Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Extended metaphor",
                              "statement": "One comparison is sustained across the poem, giving it a single governing idea."
                    },
                    {
                              "kind": "technique",
                              "name": "Personification",
                              "statement": "The sea is given human actions: it 'borrowed' and it 'returns'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spots the metaphor: the sea 'gives back what the sea borrowed' treats the tide like a lender returning objects.",
                              "evidence": "gives back what the sea borrowed",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Explains what the metaphor implies: the sea is not hostile but temporary; things it takes may return, which softens loss into patience.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Links to the final line 'the sea returns it all, but only for a day', showing the extended metaphor controls the poem's meditation on impermanence.",
                              "evidence": "only for a day",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The sea is personified as a borrower who returns what it took, turning natural tide into a gesture of temporary custody. The metaphor makes loss feel cyclical rather than final, and the ending's 'only for a day' limits the comfort, so the poem's meaning - that nothing kept is kept - is carried by the image system.",
          "commonErrors": [
                    "Listing images without explaining the borrowing/returning pattern.",
                    "Saying the sea is 'evil' - the metaphor is gentler than that."
          ]
},
        },
        {
          id: "el11-u7-imagery-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "Low Water",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "The harbour at low tide gives back what the sea borrowed -\na rusted anchor, a boot, a snapped blue rope -\nand lays them out in rows like evidence, patient as a lawyer.\nI walk the cracked grey path the boats have abandoned,\ncounting the gulls that have not yet noticed.\nThe water has pulled its dark blanket back\nand left the shivering mud to argue with itself.\nA child finds a tin soldier in the weed\nand stands quite still, as if it might salute.\nI think of everything we lose and never meant to keep -\nthe sea returns it all, but only for a day."
},
          stem: "How does the writer use imagery in 'Low Water' to suggest that the harbour scene is quietly sad? Support your answer with evidence from the poem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Pathetic fallacy",
                              "statement": "The setting and weather mirror or intensify the emotional atmosphere."
                    },
                    {
                              "kind": "skill",
                              "name": "Sustained comment",
                              "statement": "Several images should be linked to one developing idea about sadness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'the boats have abandoned' makes the harbour itself seem deserted, extending the sense of loss to the place.",
                              "evidence": "the boats have abandoned",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'the shivering mud' gives the exposed seabed a shiver, so the landscape itself feels cold and vulnerable.",
                              "evidence": "the shivering mud",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The colour palette - 'cracked grey path', 'dark blanket' - drains the scene of warmth.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The child's 'tin soldier' and the gesture 'as if it might salute' adds poignancy: a ritual of respect for something dead or lost.",
                              "evidence": "as if it might salute",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Concludes that the images work cumulatively to make even the returning tide feel temporary, producing quiet sadness rather than drama.",
                              "evidence": "only for a day",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The sadness is built from images of absence and exposure: abandoned boats, shivering mud, grey paths and a dead soldier. Each image strips warmth from the scene, and the child's salute gives the loss a human, ceremonial weight, so the poem's melancholy feels quiet and reflective rather than loud.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, well-selected images; each is tied to an effect and the sadness is traced cumulatively."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some relevant images identified and partly explained."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "A single image mentioned with little or no explanation."
                    }
          ],
          "commonErrors": [
                    "Identifying images without explaining their emotional effect.",
                    "Claiming the tone is cheerful because the sea returns objects."
          ]
},
        },
        {
          id: "el11-u7-imagery-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "Low Water",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "The harbour at low tide gives back what the sea borrowed -\na rusted anchor, a boot, a snapped blue rope -\nand lays them out in rows like evidence, patient as a lawyer.\nI walk the cracked grey path the boats have abandoned,\ncounting the gulls that have not yet noticed.\nThe water has pulled its dark blanket back\nand left the shivering mud to argue with itself.\nA child finds a tin soldier in the weed\nand stands quite still, as if it might salute.\nI think of everything we lose and never meant to keep -\nthe sea returns it all, but only for a day."
},
          stem: "Analyse how the final stanza uses a shift from image to idea to develop the poem's meaning. Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Enjambment and turn",
                              "statement": "The poem moves from concrete detail to abstract reflection at the close."
                    },
                    {
                              "kind": "technique",
                              "name": "Volta-like close",
                              "statement": "A final reflective line can reframe everything before it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Notes the stanza's opening line is abstract rather than sensory: 'I think of everything we lose and never meant to keep' states the poem's subject directly.",
                              "evidence": "everything we lose and never meant to keep",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Explains the shift: after eight stanzas of concrete objects, the poem suddenly names the feeling, so the images are retrospectively understood as examples of loss.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Explains the dash and the short final clause 'but only for a day' as a deflation: the sea's generosity is temporary, so consolation is denied.",
                              "evidence": "but only for a day",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The final stanza converts image into idea: the speaker names 'everything we lose' only after the poem has shown us the anchor, the boot and the rope. The dash sets the reflection apart, and the short closing clause 'but only for a day' undercuts the comfort of return, so the poem ends by admitting that what the sea gives back it will take again.",
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "5-6",
                              "descriptor": "Tracks the shift from image to idea precisely, explaining how the close reframes the whole poem."
                    },
                    {
                              "level": "Level 3",
                              "marks": "3-4",
                              "descriptor": "Recognises the reflective turn and explains most of its effect."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Notes the reflective ending with partial explanation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Mentions the final line without analysing the shift."
                    }
          ],
          "commonErrors": [
                    "Treating the last stanza as unrelated to the images before it.",
                    "Ignoring the structural effect of the dash and the short clause."
          ]
},
        },
        {
          id: "el11-u7-imagery-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Low Water",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "The harbour at low tide gives back what the sea borrowed -\na rusted anchor, a boot, a snapped blue rope -\nand lays them out in rows like evidence, patient as a lawyer.\nI walk the cracked grey path the boats have abandoned,\ncounting the gulls that have not yet noticed.\nThe water has pulled its dark blanket back\nand left the shivering mud to argue with itself.\nA child finds a tin soldier in the weed\nand stands quite still, as if it might salute.\nI think of everything we lose and never meant to keep -\nthe sea returns it all, but only for a day."
},
          stem: "Read the whole poem 'Low Water'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two objects the sea has returned to the shore.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the poet's use of imagery creates a mood of quiet melancholy.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a paragraph evaluating the poem's ending: how effectively does 'the sea returns it all, but only for a day' conclude the poem?",
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
                              "statement": "Select only the detail asked for."
                    },
                    {
                              "kind": "technique",
                              "name": "Cumulative imagery",
                              "statement": "Several related images build one mood."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Judge how effectively a structural choice achieves its effect."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit any two of: rusted anchor, boot, snapped blue rope.",
                              "evidence": "a rusted anchor, a boot, a snapped blue rope",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit tin soldier (from the weed).",
                              "evidence": "A child finds a tin soldier",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The borrowed/returned metaphor frames the tide as temporary custody rather than gift.",
                              "evidence": "gives back what the sea borrowed",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "'the shivering mud' personifies exposure and cold, extending sadness to the landscape.",
                              "evidence": "the shivering mud",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Muted colours ('cracked grey', 'dark') and the deserted 'boats have abandoned' path drain warmth from the scene.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The child's salute for a tin soldier ritualises small losses, deepening the melancholy.",
                              "evidence": "as if it might salute",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The line is effective because it echoes the opening metaphor of borrowing, closing the poem's circle of ideas.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "'but only for a day' deflates consolation: return is temporary, so the loss it seemed to soften returns.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "The blunt, declarative phrasing matches the plain final-stanza shift from image to idea.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Judgement is supported: the ending earns its sadness because the images have already earned it.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "(a) Anchor, boot, rope or tin soldier. (b) The mood comes from cumulative images - borrowed-and-returned objects, shivering mud, grey colours - which frame the tide as a temporary reprieve rather than a gift. (c) The ending is effective: it completes the borrowing metaphor, then denies comfort with 'only for a day', so the poem's reflection on impermanence feels earned rather than asserted.",
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Both objects correctly identified."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One object identified."
                    },
                    {
                              "part": "b",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Several images analysed and clearly linked to the mood."
                    },
                    {
                              "part": "b",
                              "level": "Level 3",
                              "marks": "3",
                              "descriptor": "Two images analysed with some link to mood."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Images listed with partial explanation."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One image mentioned."
                    },
                    {
                              "part": "c",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Evaluative judgement on the ending's effectiveness, supported by analysis."
                    },
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "3",
                              "descriptor": "Some evaluation with limited support."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Restates the line with minimal judgement."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Mentions the ending without evaluation."
                    }
          ],
          "commonErrors": [
                    "In (a) giving more than two objects or paraphrasing rather than naming.",
                    "In (b) listing images without effect.",
                    "In (c) simply retelling the ending instead of judging it."
          ],
          "examinerNote": "Credit evaluation only where it is argued, not merely asserted."
},
        },
      ],
    },
    {
      id: "el11-u7-tone-voice",
      title: "Tone and poetic voice",
      skill: "Identify the speaker's tone and explain how word choice, imagery and pronouns create a distinctive voice.",
      lesson: {
        sections: [
          {
            heading: "Finding the speaker",
            body: "First ask who is speaking. In 'The Long Way Home' the 'I' is a migrant who has left home and is walking back toward it through a changed country. The voice is intimate, first-person and restrained. Notice the pronouns and the small domestic details - 'my grandmother's key', 'my mother is boiling rice' - which make a political situation feel personal.",
          },
          {
            heading: "Naming the tone",
            body: "Choose a precise adjective, not 'sad'. This poem is elegiac, wistful, quietly defiant. 'Towards the version of myself / that still believes in morning' is hopeful without being naive; 'one word at a time' suggests recovery through language itself. Tone lives in such phrases: prove it with two or three quotations rather than asserting it.",
          },
          {
            heading: "Voice and effect",
            body: "Voice is the personality of the poem. The short declarative sentences and the repeated 'Somewhere' create a voice that is travelling, noticing, not dwelling. Explain the effect on the reader: we are placed inside the walker's uncertainty, so the poem's theme of displacement is felt rather than explained.",
          },
        ],
        keyFormulas: [
          { name: "Tone", statement: "The speaker's attitude towards the subject, shown through word choice, imagery and rhythm." },
          { name: "Voice", statement: "The distinctive personality of the narrator or speaker as created by language." },
          { name: "First-person perspective", statement: "The 'I' speaker invites the reader inside a personal, often unreliable or partial, viewpoint." },
        ],
        workedExample: {
          problem: "How does the voice in 'The Long Way Home' create a tone of quiet resilience?",
          solution: "The voice is first-person and spare: short lines like 'I left when the buses stopped running' state facts without complaint. The phrase 'towards the version of myself / that still believes in morning' turns displacement into a direction of travel - the walker is going somewhere, not merely fleeing. 'learning my own language again / one word at a time' makes recovery feel slow but possible. The repeated 'Somewhere' lines link the speaker to people left behind without self-pity. Together these choices produce a tone that is elegiac but defiant.",
        },
      },
      questions: [
        {
          id: "el11-u7-voice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
          "title": "The Long Way Home",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "I left when the buses stopped running\nand the map forgot the names of streets.\nMy grandmother's key is still in my pocket,\nheavy as a second house.\nThe border guard asked where I was going\nand I said, towards the version of myself\nthat still believes in morning.\nSomewhere a dog is barking at nothing.\nSomewhere my mother is boiling rice\nthe way she did when the power came back.\nI am walking the long way home\nin a country that has changed its face,\nlearning my own language again,\none word at a time."
},
          stem: "Read the third stanza. Who is the speaker in 'The Long Way Home' most likely to be?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A border guard checking travel documents."
                    },
                    {
                              "id": "b",
                              "text": "A person who has left home and is returning through a changed country."
                    },
                    {
                              "id": "c",
                              "text": "A mother teaching her child to cook rice."
                    },
                    {
                              "id": "d",
                              "text": "A bus driver whose route no longer runs."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Speaker identification",
                              "statement": "Pronouns and details reveal who 'I' is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'I am walking the long way home / in a country that has changed its face' shows a traveller returning to a changed homeland.",
                              "evidence": "walking the long way home",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A person returning to a changed homeland - the 'long way home' and 'my own language again' show displacement and return.",
          "commonErrors": [
                    "Choosing (a): the border guard is someone the speaker meets, not the speaker."
          ]
},
        },
        {
          id: "el11-u7-voice-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Long Way Home",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "I left when the buses stopped running\nand the map forgot the names of streets.\nMy grandmother's key is still in my pocket,\nheavy as a second house.\nThe border guard asked where I was going\nand I said, towards the version of myself\nthat still believes in morning.\nSomewhere a dog is barking at nothing.\nSomewhere my mother is boiling rice\nthe way she did when the power came back.\nI am walking the long way home\nin a country that has changed its face,\nlearning my own language again,\none word at a time."
},
          stem: "What does the detail 'My grandmother's key is still in my pocket, heavy as a second house' suggest about the speaker's feelings?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Symbolic object",
                              "statement": "A kept object can carry the weight of home and memory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The key is a concrete link to the family home; 'still in my pocket' shows the speaker carries it everywhere.",
                              "evidence": "My grandmother's key is still in my pocket",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "'heavy as a second house' makes the key emotionally enormous - it stands for a whole home and identity the speaker has lost.",
                              "evidence": "heavy as a second house",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The key symbolises a home and family now out of reach. It is 'heavy' not physically but emotionally, so the image suggests the speaker carries a whole lost life with them - attachment mixed with grief.",
          "commonErrors": [
                    "Reading 'heavy' literally.",
                    "Saying the speaker is angry rather than attached and grieving."
          ]
},
        },
        {
          id: "el11-u7-voice-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Long Way Home",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "I left when the buses stopped running\nand the map forgot the names of streets.\nMy grandmother's key is still in my pocket,\nheavy as a second house.\nThe border guard asked where I was going\nand I said, towards the version of myself\nthat still believes in morning.\nSomewhere a dog is barking at nothing.\nSomewhere my mother is boiling rice\nthe way she did when the power came back.\nI am walking the long way home\nin a country that has changed its face,\nlearning my own language again,\none word at a time."
},
          stem: "How does the repetition of 'Somewhere' in the fifth stanza shape the poem's voice? Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Repetition",
                              "statement": "Repeating a word or phrase links ideas and controls rhythm."
                    },
                    {
                              "kind": "skill",
                              "name": "Voice and effect",
                              "statement": "A repeated word can suggest distance, uncertainty or longing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Somewhere' repeated twice makes the people left behind feel distant and vague - places the speaker cannot reach.",
                              "evidence": "Somewhere a dog is barking",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The pairing 'a dog is barking at nothing' and 'my mother is boiling rice' joins an indifferent detail with an intensely personal one, widening the poem's sympathy.",
                              "evidence": "the way she did when the power came back",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The effect on voice: the speaker sounds watchful and homesick, registering small signs of life elsewhere without self-pity.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The repeated 'Somewhere' distances the home the speaker has left: the dog and the mother are 'somewhere' else, unreachable. Pairing a trivial detail with a domestic ritual makes the longing specific, so the voice sounds restrained but homesick - aware of what continues without them.",
          "commonErrors": [
                    "Saying repetition shows the speaker is confused.",
                    "Ignoring the contrast between the two 'Somewhere' lines."
          ]
},
        },
        {
          id: "el11-u7-voice-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Long Way Home",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "I left when the buses stopped running\nand the map forgot the names of streets.\nMy grandmother's key is still in my pocket,\nheavy as a second house.\nThe border guard asked where I was going\nand I said, towards the version of myself\nthat still believes in morning.\nSomewhere a dog is barking at nothing.\nSomewhere my mother is boiling rice\nthe way she did when the power came back.\nI am walking the long way home\nin a country that has changed its face,\nlearning my own language again,\none word at a time."
},
          stem: "Analyse how the poem's voice balances hope and grief in its treatment of 'home'. Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ambivalent tone",
                              "statement": "A poem can hold grief and hope at once; analyse both."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grief: the border guard's question and the flat answer 'towards the version of myself' admit uncertainty about identity and destination.",
                              "evidence": "towards the version of myself",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Grief: 'a country that has changed its face' makes home alien; 'learning my own language again' shows even belonging must be relearned.",
                              "evidence": "learning my own language again",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Hope: 'still believes in morning' gives the self a future orientation, not just a past.",
                              "evidence": "still believes in morning",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Hope: 'one word at a time' shrinks recovery into achievable steps, so the voice ends quietly determined rather than despairing.",
                              "evidence": "one word at a time",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Concludes the balance: the poem refuses either consolation or bitterness; the voice holds both.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "The voice is elegiac yet resolute. Home is both lost ('changed its face', language to relearn) and still ahead ('the long way home'), and the speaker's identity is unfinished ('the version of myself'). The closing image of learning 'one word at a time' turns grief into method, so hope survives without denying loss.",
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Both hope and grief are evidenced and the balance is explained."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "One side of the balance is well covered; the other is partial."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Tone named with little support."
                    }
          ],
          "commonErrors": [
                    "Choosing one tone (only sad or only hopeful).",
                    "Quoting without linking to voice or effect."
          ]
},
        },
        {
          id: "el11-u7-voice-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Long Way Home",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "I left when the buses stopped running\nand the map forgot the names of streets.\nMy grandmother's key is still in my pocket,\nheavy as a second house.\nThe border guard asked where I was going\nand I said, towards the version of myself\nthat still believes in morning.\nSomewhere a dog is barking at nothing.\nSomewhere my mother is boiling rice\nthe way she did when the power came back.\nI am walking the long way home\nin a country that has changed its face,\nlearning my own language again,\none word at a time."
},
          stem: "How does the structure of 'The Long Way Home' - its short lines, stanza breaks and movement from past to present - support its voice? Support your answer with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Enjambment and lineation",
                              "statement": "Short lines and stanza breaks control pace and emphasis."
                    },
                    {
                              "kind": "convention",
                              "name": "Free verse",
                              "statement": "Without rhyme or fixed metre, the poem's shape mirrors its subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Short lines ('I left when the buses stopped running') move quickly, like a walker covering ground; the voice feels mobile.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The stanza break before 'The border guard asked' isolates the moment of authority, so the voice seems to pause and answer carefully.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The movement from past ('I left') to present ('I am walking') to future hope ('still believes in morning') mirrors a journey; structure enacts the poem's progress.",
                              "evidence": "I am walking the long way home",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "The free-verse lineation is the poem's walking pace: short lines carry the speaker forward, the stanza break freezes the border-guard exchange, and the shift from past to present to aspiration traces the journey itself. The voice therefore feels like movement - displaced, still travelling, not yet arrived.",
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "5-6",
                              "descriptor": "Lineation, stanza breaks and tense movement all linked to the voice."
                    },
                    {
                              "level": "Level 3",
                              "marks": "3-4",
                              "descriptor": "Structure analysed with some links to voice."
                    },
                    {
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "One structural feature noted with partial explanation."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Structure mentioned without analysis."
                    }
          ],
          "commonErrors": [
                    "Describing the poem's content instead of its shape.",
                    "Ignoring the stanza break's effect at the border guard."
          ]
},
        },
        {
          id: "el11-u7-voice-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "The Long Way Home",
          "author": "Written for Akademik Space",
          "source": "Original poem",
          "text": "I left when the buses stopped running\nand the map forgot the names of streets.\nMy grandmother's key is still in my pocket,\nheavy as a second house.\nThe border guard asked where I was going\nand I said, towards the version of myself\nthat still believes in morning.\nSomewhere a dog is barking at nothing.\nSomewhere my mother is boiling rice\nthe way she did when the power came back.\nI am walking the long way home\nin a country that has changed its face,\nlearning my own language again,\none word at a time."
},
          stem: "Read the whole poem 'The Long Way Home'.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two details that link the speaker to the home they have left.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the poem's voice creates a tone that is both homesick and hopeful.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively the final image, 'learning my own language again, one word at a time', concludes the poem.",
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
                              "statement": "Select only the details asked for."
                    },
                    {
                              "kind": "technique",
                              "name": "Ambivalent tone",
                              "statement": "Grief and hope coexist in the voice."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Judge the ending's effectiveness with reasons."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Credit grandmother's key.",
                              "evidence": "My grandmother's key is still in my pocket",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit mother boiling rice / 'the long way home'.",
                              "evidence": "my mother is boiling rice",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Homesick: 'Somewhere' lines and the key make home present but unreachable.",
                              "evidence": "Somewhere my mother is boiling rice",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Homesick: 'a country that has changed its face' alienates the homeland.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Hopeful: 'still believes in morning' and 'one word at a time' give forward movement.",
                              "evidence": "still believes in morning",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The restrained first-person voice earns both feelings without self-pity.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Effective: 'learning my own language again' literalises displacement - belonging must be relearned.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "'one word at a time' shrinks recovery to achievable steps, matching the poem's spare voice.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "It echoes the earlier 'the map forgot the names of streets': language and place are both remade.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Judgement: a quiet, earned ending rather than a declamatory resolution.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "(a) The key and the mother boiling rice (or 'the long way home'). (b) The voice holds homesickness ('Somewhere', the changed country) and hope ('still believes in morning', 'one word at a time') at once. (c) The final image is effective: relearning language literalises the experience of displacement, 'one word at a time' matches the poem's spare voice, and it echoes the forgotten street names - an earned, quiet conclusion.",
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Both details correctly identified."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "One detail identified."
                    },
                    {
                              "part": "b",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Both sides of the tone evidenced and explained."
                    },
                    {
                              "part": "b",
                              "level": "Level 3",
                              "marks": "3",
                              "descriptor": "Mostly covered with one side weaker."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Partial coverage."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Tone named only."
                    },
                    {
                              "part": "c",
                              "level": "Level 4",
                              "marks": "4",
                              "descriptor": "Evaluative judgement supported by analysis of language and structure."
                    },
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "3",
                              "descriptor": "Some evaluation with limited support."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2",
                              "descriptor": "Restates the image with minimal judgement."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Mentions the ending without evaluation."
                    }
          ],
          "commonErrors": [
                    "In (c) paraphrasing the line without judging it.",
                    "Treating the poem as purely sad or purely hopeful."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el11-u7-poetry-language-notes",
      title: "Imagery, metaphor and tone - notes",
      summary: "Imagery and metaphor build the picture; tone is the speaker's attitude. Always link device, quotation and effect.",
      sections: [
        { heading: "Key idea", body: "A top answer chains three links: the device, a precise quotation, and the effect on meaning." },
        { heading: "Tone words", body: "Choose precise words - elegiac, wistful, sardonic, defiant - not 'sad' or 'happy'." },
        { heading: "Voice", body: "Ask who speaks and how the pronouns, details and rhythm create a personality." },
      ],
    },
  ],
};
