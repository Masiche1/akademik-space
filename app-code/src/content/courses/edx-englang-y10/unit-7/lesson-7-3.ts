import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "el10-u7-lesson-7-3",
  code: "7-3",
  title: "Comparing Texts in the Exam",
  goal: "I CAN select evidence and structure a comparative answer on writers' perspectives.",
  standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
  
  vocabulary: [
    { term: "Comparative question", definition: "An exam question asking how two texts present ideas or methods." },
    { term: "Embedding", definition: "Weaving short quotations naturally into your own sentences." },
    { term: "Point-by-point structure", definition: "Organising a comparison by idea, covering both texts under each point." },
    { term: "Text-by-text structure", definition: "Analysing one text fully, then the other, then linking." },
    { term: "Evaluative conclusion", definition: "A final judgement weighing which writer's methods are most effective." },
    { term: "Linking connective", definition: "Phrases such as 'whereas', 'similarly', 'by contrast' that join the texts." },
  ],
  concepts: [
    {
      id: "el10-u7-evidence-selection",
      title: "Selecting and embedding evidence",
      skill: "Choose short, precise quotations that prove a point about each writer's perspective.",
      lesson: {
        sections: [
          {
            heading: "Evidence that compares",
            body: "For a comparison you need paired evidence: one quotation from each text that addresses the same idea. If comparing attitudes to loss, 'never know the names' (poem) pairs with 'could not say what had been lost' (prose) — both about inarticulacy and erasure. Weak evidence quotes long passages; strong evidence is short and loaded.",
          },
          {
            heading: "Embedding quotations",
            body: "Embed quotes inside your own sentence so the analysis flows: The poet suggests erasure through streets the planners' 'drawings had erased', whereas the prose writer gives the loss a voice in Mr. Delacroix's 'It is not the same'. Notice the quotation is trimmed to the telling words and followed immediately by its effect.",
          },
          {
            heading: "Precision over quantity",
            body: "One well-chosen word often carries more than a whole line. 'Rehearsed', 'scar', 'sound' — single words can anchor a paragraph. Always follow a quotation with what it shows: the writer's method and its effect on perspective.",
          },
        ],
        keyFormulas: [
          { name: "Paired evidence", statement: "One quotation per text addressing the same comparative point." },
          { name: "Embedding", statement: "Short quotation inside your own sentence, followed by analysis of method and effect." },
        ],
        workedExample: {
          problem: "Embed evidence to compare how both texts present loss.",
          solution: "The poet presents loss as erasure — streets whose names the 'drawings had erased' — while the prose writer makes it bodily, a name on a brick 'pale as a scar'. Both suggest damage, but the poem abstracts it into planning and the prose makes it a wound.",
        },
      },
      questions: [
        {
          id: "el10-u7-evidence-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a quotation effective evidence in a comparative answer?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It is as long as possible"
                    },
                    {
                              "id": "b",
                              "text": "It is short, precise and followed by analysis"
                    },
                    {
                              "id": "c",
                              "text": "It appears without comment"
                    },
                    {
                              "id": "d",
                              "text": "It is taken from only one text"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evidence selection",
                              "statement": "Short, precise quotations analysed for effect score best."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effective evidence is brief, telling and always analysed.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** Short, precise and followed by analysis."
},
        },
        {
          id: "el10-u7-evidence-selection-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rewrite this weak evidence sentence as an embedded, analytical one: 'In the poem it says glass and steel. In the story it talks about the builder.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Embedding",
                              "statement": "Weave short quotations into analytical sentences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Embed a short quotation: 'glass and steel rehearsed their debate'.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Add the method/effect and a link: personification makes progress feel performative, whereas the builder's 'everything was being improved' sounds hollow.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Model: 'The poet makes progress feel performative through 'glass and steel' that 'rehearsed their debate', whereas the builder's 'everything was being improved' rings hollow.'"
},
        },
        {
          id: "el10-u7-evidence-selection-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "Regeneration",
          "author": "A. Whitfield",
          "source": "Estate Poems (fictional anthology)",
          "lineNumbers": true,
          "text": "The cranes stood over the old parade ground\nlike herons fishing in a drained estate.\nWhere children once played chasing a red ball,\nnow glass and steel rehearsed their debate.\n\nThe new residents would never know the names\nof streets the planners' drawings had erased.\nTheir balconies faced a vista of progress;\ntheir windows overlooked a different place.\n\nAnd yet, at dusk, when windows lit one by one,\nthe buildings breathed a warmth that mimicked home.\nPerhaps a city is only ever houses —\neach one a small defiance of the stone."
},
          stem: "A student wants to compare how both texts present the loss of the old community. Suggest two paired pieces of evidence, one from each text, and explain why they work together.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Paired evidence",
                              "statement": "Quotations from both texts must address the same idea."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poem: 'never know the names' — loss of history and identity.",
                              "evidence": "never know the names",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Prose: 'could not say what had been lost' — the same inarticulacy of grief.",
                              "evidence": "could not say what had been lost",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "They pair because both show loss exceeding words — one through erasure, one through speechlessness.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "'Never know the names' pairs with 'could not say what had been lost': both capture loss that cannot be fully articulated, one through erased history, one through speechless grief."
},
        },
        {
          id: "el10-u7-evidence-selection-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Why is the single word 'rehearsed' in 'Regeneration' more powerful evidence than a whole quoted line about the new buildings? Explain how to use it effectively in an answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Loaded diction",
                              "statement": "A single loaded word can carry an entire attitude."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Rehearsed' implies performance — the buildings' debate is staged, not sincere.",
                              "evidence": "rehearsed their debate",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "It compresses the poet's whole ambivalence about regeneration into one verb.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Used effectively: embed it — 'glass and steel rehearsed their debate' — and analyse the personification and its effect.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "'Rehearsed' personifies the buildings as performers, making progress feel staged; quoting just that word and analysing its effect is sharper than a long quotation.",
          "commonErrors": [
                    "Quoting long passages with no analysis."
          ]
},
        },
        {
          id: "el10-u7-evidence-selection-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Compare the evidence you would choose from 'Regeneration' and 'The Old Parade' to argue that both writers see regeneration as a kind of damage. Explain your choices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Imagery of harm",
                              "statement": "Both texts use images of wounding and erasure."
                    },
                    {
                              "kind": "skill",
                              "name": "Argument-led evidence",
                              "statement": "Evidence should be selected to prove a stated point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Poem: 'erased' — planning literally rubs out names and streets.",
                              "evidence": "the planners' drawings had erased",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Prose: 'pale as a scar' — the cinema's name is a wound left on the brick.",
                              "evidence": "pale as a scar",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Supporting pair: 'drained estate' (emptied) with 'shopfronts like blind eyes' (sightless).",
                              "evidence": "like blind eyes",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The choices work because each text's method differs — administrative erasure versus bodily scar — yet both argue damage.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "Well-selected paired evidence with clear reasoning linking choices to the argument."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "Appropriate evidence with some explanation of choices."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "Some evidence listed without justification."
                    }
          ],
          "finalAnswer": "Choose 'erased' and 'pale as a scar' — planning's erasure versus a bodily wound — supported by 'drained estate' and 'blind eyes'; together they prove both writers frame regeneration as damage through different methods.",
          "commonErrors": [
                    "Choosing evidence that does not support the stated argument."
          ]
},
        },
        {
          id: "el10-u7-evidence-selection-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Read 'Regeneration' and 'The Old Parade' and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Select one quotation from each text that shows how the writers present the new development. Explain why each is effective.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Select one quotation from each text that shows how the writers present the old community. Explain why each is effective.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Using your chosen evidence, write a short comparative paragraph on how the two writers present regeneration.",
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
                              "name": "Paired evidence",
                              "statement": "One quotation per text per comparative point, each analysed."
                    },
                    {
                              "kind": "technique",
                              "name": "Embedded analysis",
                              "statement": "Quotations woven into sentences with method and effect."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Poem quote: 'glass and steel rehearsed their debate' — personification makes progress performative.",
                              "evidence": "rehearsed their debate",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Prose quote: 'everything was being improved' — the builder's hollow reassurance.",
                              "evidence": "everything was being improved",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Poem quote: residents 'never know the names' — loss of history, implicit and elegiac.",
                              "evidence": "never know the names",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Prose quote: 'It is not the same' — voiced, colloquial grief.",
                              "evidence": "It is not the same",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Clear comparative point linking both texts' attitude to change.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evidence embedded with method and effect from both texts.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Linking language ('whereas', 'by contrast') and a judgement on the perspectives.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) 'Rehearsed their debate' (performative progress) versus 'everything was being improved' (hollow reassurance). (b) 'Never know the names' (erased history) versus 'It is not the same' (voiced grief). (c) A paragraph linking the poet's implicit elegy to the prose's voiced loss.",
          "commonErrors": [
                    "Choosing quotations that do not address the same point.",
                    "Listing quotes without analysis."
          ]
},
        },
      ],
    },
    {
      id: "el10-u7-comparative-structure",
      title: "Structuring a comparative answer",
      skill: "Organise a comparative answer so links between texts are clear and the judgement is evaluative.",
      lesson: {
        sections: [
          {
            heading: "Two ways to organise",
            body: "**Point-by-point**: each paragraph takes one idea (e.g. presentation of loss) and covers both texts — best for tight comparisons. **Text-by-text**: analyse Text A fully, then Text B, then a linking paragraph — clearer for complex texts but risks writing two mini-essays. For exam questions on paired texts, point-by-point usually scores higher because links are built in.",
          },
          {
            heading: "The linking paragraph",
            body: "Every comparative paragraph needs connective tissue: 'Whereas the poet compresses loss into imagery, the prose writer dramatises it in dialogue.' End with an **evaluative** judgement: which writer's methods are more effective and why — e.g. the poem's compression intensifies feeling, while prose's scene-building makes loss communal.",
          },
          {
            heading: "Exam discipline",
            body: "Plan in four minutes: note each text's key methods for the question's focus, then alternate evidence. Keep quotations short. Check every paragraph answers 'how do the writers compare on THIS point?', not just 'what happens'.",
          },
        ],
        keyFormulas: [
          { name: "Point-by-point", statement: "Organise by idea; cover both texts in each paragraph." },
          { name: "Linking connective", statement: "'Whereas', 'similarly', 'by contrast', 'both' — make the comparison explicit." },
          { name: "Evaluative conclusion", statement: "Judge which methods are more effective, not just which you prefer." },
        ],
        workedExample: {
          problem: "Plan a comparative answer on 'how both writers present loss' for the regeneration texts.",
          solution: "Point-by-point plan: (1) Methods — poet's imagery of erasure vs prose's dialogue of grief; (2) Effects — poem's abstraction intensifies vs prose's communal voice; (3) Judgement — prose makes loss social and voiced, poem makes it landscape and memory; both ambivalent, poem ends hopeful, prose unresolved. Write each paragraph covering both texts with linking connectives.",
        },
      },
      questions: [
        {
          id: "el10-u7-comparative-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structure is usually strongest for a paired-texts comparison question?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Writing about Text A fully, then Text B, with no links"
                    },
                    {
                              "id": "b",
                              "text": "Point-by-point, covering both texts under each idea"
                    },
                    {
                              "id": "c",
                              "text": "Only analysing the poem"
                    },
                    {
                              "id": "d",
                              "text": "Listing techniques without comparison"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparative structure",
                              "statement": "Point-by-point builds links into every paragraph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organising by idea forces explicit comparison throughout.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** Point-by-point."
},
        },
        {
          id: "el10-u7-comparative-structure-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the purpose of an evaluative conclusion in a comparative answer?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluative judgement",
                              "statement": "Weigh which writer's methods are more effective."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It moves beyond description to a judgement about effectiveness.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "It should compare methods — e.g. compression versus scene-building — not just state preference.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "It judges which writer's methods achieve their perspective more effectively, weighing techniques rather than preference."
},
        },
        {
          id: "el10-u7-comparative-structure-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes: 'The poem is about regeneration. It has cranes and glass. The story is also about regeneration. There is a builder.' Rewrite the approach so it actually compares the texts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparative analysis",
                              "statement": "Comparison requires shared points, methods and effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify a shared point: both present regeneration as ambivalent.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Compare methods under that point: poet's 'rehearsed their debate' personification vs prose's builder's 'everything was being improved'.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Compare effects: staged progress versus hollow reassurance; link with 'whereas'.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Rewrite as point-by-point: under 'attitude to change', contrast the poet's personified 'rehearsed their debate' with the builder's reassuring 'everything was being improved', explaining how each makes progress feel staged or hollow."
},
        },
        {
          id: "el10-u7-comparative-structure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why the text-by-text structure can be risky in a timed exam, and when it might still be the better choice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Exam structure judgement",
                              "statement": "Choose structure to maximise explicit comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Risk: it produces two separate analyses; links come late or not at all.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Time pressure makes the linking paragraph rushed or omitted.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Better when texts are very different in form and need separate treatment before linking.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Text-by-text risks becoming two unrelated analyses with weak links under time pressure; it suits very different texts, but point-by-point is safer for tight comparison.",
          "commonErrors": [
                    "Choosing structure by habit rather than by the question."
          ]
},
        },
        {
          id: "el10-u7-comparative-structure-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Plan a point-by-point answer to: 'Compare how the writers of 'Regeneration' and 'The Old Parade' present the experience of change.' Show your paragraph plan and the linking connectives you would use.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Answer planning",
                              "statement": "Plan by shared points covering both texts."
                    },
                    {
                              "kind": "technique",
                              "name": "Linking connectives",
                              "statement": "Explicit links make comparison visible to the examiner."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "P1 — Physical change: cranes/'rehearsed their debate' versus scaffolding's 'new face'.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "P2 — Community response: absent residents/'a different place' versus voiced 'It is not the same'.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "P3 — Attitude and judgement: poem's guarded hope ('defiance of the stone') versus prose's unresolved 'scar'.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Connectives: 'whereas', 'by contrast', 'both', 'similarly' used in each paragraph.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "7",
                              "descriptor": "A coherent point-by-point plan with paired evidence, methods and effects plus linking language."
                    },
                    {
                              "level": "Level 2",
                              "marks": "4-6",
                              "descriptor": "A workable plan with some paired points and links."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-3",
                              "descriptor": "A partial plan or list of topics without comparison."
                    }
          ],
          "finalAnswer": "Three paragraphs — physical change, community response, attitude — each covering both texts with 'whereas', 'by contrast' and 'both', ending with an evaluative judgement on the differing methods.",
          "commonErrors": [
                    "Planning text-by-text when the question invites point-by-point.",
                    "Planning without linking connectives."
          ]
},
        },
        {
          id: "el10-u7-comparative-structure-q6",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Read 'Regeneration' and 'The Old Parade' and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the main idea your comparison will focus on and give one piece of evidence from each text for it.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Write one fully comparative paragraph comparing the writers' methods in presenting that idea.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a concluding sentence that evaluates which writer presents the idea more effectively and why.",
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
                              "name": "Comparative focus",
                              "statement": "A clear shared point anchors the whole answer."
                    },
                    {
                              "kind": "technique",
                              "name": "Embedded evidence",
                              "statement": "Short quotations analysed for method and effect."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Clear comparative focus, e.g. 'both present regeneration as loss'.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Poem evidence: 'names... erased' or 'a different place'.",
                              "evidence": "never know the names",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Prose evidence: 'It is not the same' or 'pale as a scar'.",
                              "evidence": "pale as a scar",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Explicit comparison of methods: imagery of erasure versus dialogue and the scar image.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Effects compared: poem abstracts loss into landscape; prose makes it communal and bodily.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evaluative judgement on effectiveness with method-based reasoning.",
                              "marks": 4,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "4",
                              "descriptor": "Clear, developed comment with well-chosen evidence and relevant terminology.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Some understanding and some relevant references; analysis partial.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple, limited comment; feature-spotting or paraphrase.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) Focus: regeneration as loss — 'erased' names versus 'It is not the same'/'scar'. (b) A paragraph contrasting compressed elegiac imagery with voiced, communal grief. (c) A judgement such as: the prose is more effective because it dramatises loss socially, though the poem's compression intensifies its elegy.",
          "commonErrors": [
                    "(a) Choosing evidence that does not serve the focus.",
                    "(c) Stating preference without comparing methods."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u7-exam-notes",
      title: "Comparing texts — exam notes",
      summary: "Plan by shared points, pair evidence from both texts, embed short quotations and finish with an evaluative judgement.",
      sections: [
        { heading: "Structure", body: "Point-by-point usually beats text-by-text in timed exams." },
        { heading: "Evidence", body: "Short, loaded quotations analysed for method and effect — one per text per point." },
        { heading: "Judgement", body: "End by weighing which methods are more effective, not which you prefer." },
      ],
    },
  ],
};
