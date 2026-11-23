import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "el10-u9-lesson-9-3",
  code: "9-3",
  title: "Integrating Analysis and Evaluating Effect",
  goal: "I CAN integrate language and structure analysis and evaluate how writers affect readers.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 Paper 2 Section A", "4EA1 AO2"],
  
  vocabulary: [
    { term: "Integrated analysis", definition: "Weaving language and structure analysis into one argument about overall effect." },
    { term: "Effect on the reader", definition: "The emotional or intellectual response the writer aims to produce." },
    { term: "Evaluative judgement", definition: "A reasoned verdict on how well a writer achieves an effect." },
    { term: "Pathetic fallacy", definition: "Weather or setting that mirrors a character’s emotions." },
    { term: "Interior monologue", definition: "A character’s thoughts presented directly to the reader." },
    { term: "Dramatic irony", definition: "The reader knows more than a character, creating tension or humour." },
  ],
  concepts: [
    {
      id: "el10-u9-linking-analysis",
      title: "Linking language and structure",
      skill: "Combine analysis of language and structure into a single, developed argument about effect.",
      lesson: {
        sections: [
          {
            heading: "What integration means",
            body: "Top-band answers do not list devices — they **integrate**: one point shows how a structural choice and a language choice work together toward one effect. In ‘The Storm’, the paragraph break (structure) plus ‘Then the wind arrived’ (language) plus the short sentence’s impact (pace) all serve one purpose: the turn to fear. Integration means every analytical point answers ‘so what does this do?’",
          },
          {
            heading: "The PEE-for-analysis pattern",
            body: "A reliable pattern for AO2: **Point** (the effect), **Evidence** (short quotation), **Explanation** (how the method creates the effect), **Link** (why it matters to the whole text). For structure, substitute the structural feature as the method: ‘The paragraph break forces a pause, so the wind’s arrival lands with the force of a verdict.’",
          },
          {
            heading: "Avoiding feature-spotting",
            body: "‘The writer uses a simile’ earns nothing. ‘The simile makes the birds fall like stones, so the beautiful scene is already poisoned with death’ earns credit. The examiner’s question is always: what does this choice DO? Practise converting every observation into an effect statement before writing it.",
          },
        ],
        keyFormulas: [
          { name: "Integrated analysis", statement: "One point linking a structural and a language choice to a single effect on the reader." },
          { name: "PEE pattern", statement: "Point, Evidence, Explanation, Link — every analytical paragraph needs all four." },
          { name: "Feature to effect", statement: "Never name a device without stating what it does to the reader." },
        ],
        workedExample: {
          problem: "Write one integrated analytical point about the storm’s arrival in ‘The Storm’.",
          solution: "When the wind arrives, the paragraph break (structure) isolates the sentence ‘Then the wind arrived’ so it lands like a verdict, and the personification ‘declare itself’ gives the storm deliberate menace; together they convert the earlier wonder into sudden fear, and the reader experiences the same shock as the children.",
        },
      },
      questions: [
        {
          id: "el10-u9-linking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does ‘integrated analysis’ require in an English exam answer?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Listing as many techniques as possible with short quotations."
                    },
                    {
                              "id": "b",
                              "text": "Linking language and structure choices to a single overall effect."
                    },
                    {
                              "id": "c",
                              "text": "Retelling the plot in careful chronological order."
                    },
                    {
                              "id": "d",
                              "text": "Using the longest possible quotations."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integrated analysis",
                              "statement": "Combine methods into one argument about effect rather than listing features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Integration means showing how choices work together toward an effect; listing devices (a) and retelling (c) are the classic lower-band traps.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** Linking language and structure to a single overall effect.",
          "commonErrors": [
                    "Choosing (a): feature-spotting is the most common reason answers stay in low bands."
          ]
},
        },
        {
          id: "el10-u9-linking-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "In ‘The Storm’, identify one language choice and one structural choice the writer makes at the storm’s arrival.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Identifying methods",
                              "statement": "Name the choice precisely before analysing it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Language: the wind ‘declare[s] itself’ — personification giving the storm agency.",
                              "evidence": "It did not arrive so much as declare itself",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Structure: the paragraph break and the short sentence ‘Then the wind arrived’ isolate the moment, marking the tone shift.",
                              "evidence": "Then the wind arrived",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Personification (‘declare itself’) and the structural isolation of the arrival through a paragraph break and short sentence.",
          "commonErrors": [
                    "Naming a device vaguely (‘descriptive language’) instead of the precise choice."
          ]
},
        },
        {
          id: "el10-u9-linking-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Explain how short sentences and paragraphing work together in ‘The Storm’ to heighten tension.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Pace through form",
                              "statement": "Sentence length and paragraphing control the reader’s breathing and urgency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "‘Then the wind arrived.’ is a three-word sentence that hits like a blow, matching the storm’s suddenness.",
                              "evidence": "Then the wind arrived.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The delayed verb in ‘It did not arrive so much as declare itself’ stretches the moment before the verdict.",
                              "evidence": "It did not arrive so much as declare itself",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The repeated ‘It took’ builds an anaphoric rush, overwhelming the reader as the storm overwhelms the street.",
                              "evidence": "It took the washing… it took the bin lid",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Isolating these choices in their own paragraph gives them dramatic space, so the tension peaks structurally as well as verbally.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Short sentences strike like blows, the delayed verb stretches suspense, anaphora piles on chaos, and paragraph isolation gives the peak dramatic space — form and language drive the tension together.",
          "commonErrors": [
                    "Discussing sentence length without connecting it to the storm’s arrival."
          ]
},
        },
        {
          id: "el10-u9-linking-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Analyse how the writer combines figurative language with structure in the final paragraph to create resolution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Language-structure integration",
                              "statement": "Figurative choices and structural placement must be analysed together as one effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The rainbow ‘that belonged… to nobody’ is a figurative image of shared, almost impersonal relief.",
                              "evidence": "a rainbow that belonged, I think, to nobody",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Its placement at the end of the journey home gives the image structural weight — a closing blessing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The trees ‘pointing in every direction’ personify nature’s confusion, extending the storm’s chaos into the calm.",
                              "evidence": "the trees pointing in every direction at once",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The bathos of the ‘glad’ puddle releases tension; its triviality is the point — relief made ordinary.",
                              "evidence": "I have never been so glad of a puddle",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Together the images and their closing placement convert terror into gratitude without a stated moral.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The rainbow’s impersonal beauty, the personified confusion of the trees and the anticlimactic puddle are placed in the closing paragraph so that figurative language and structure together resolve the fear into quiet gratitude.",
          "commonErrors": [
                    "Analysing each image separately without showing how placement creates resolution."
          ]
},
        },
        {
          id: "el10-u9-linking-q5",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Read ‘The Storm’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two structural shifts in the extract.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the phrase ‘declare itself’ works.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how well language and structure are integrated in creating tension.",
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
                              "name": "Personification",
                              "statement": "Giving the storm human agency makes it feel deliberate and threatening."
                    },
                    {
                              "kind": "skill",
                              "name": "Integration judgement",
                              "statement": "Judge whether methods combine seamlessly toward one effect."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The shift from watching the sky to the wind’s arrival, marked by ‘Then the wind arrived’.",
                              "evidence": "Then the wind arrived",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The shift from terror to relief, marked by the final paragraph’s calm images.",
                              "evidence": "The storm passed as quickly as it came",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "‘Declare itself’ personifies the wind, giving it intention — it announces its power rather than merely arriving.",
                              "evidence": "It did not arrive so much as declare itself",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The delayed construction (‘did not… so much as’) makes the reveal feel momentous, like a verdict.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The short sentence, paragraph isolation and personification all serve the single effect of sudden menace.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The anaphora of ‘It took’ mirrors the storm’s overwhelming force in the syntax itself.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Integration is highly effective — no device feels decorative; all drive the turn to fear.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, relevant analysis with some well-chosen references to the text; points are developed but not always fully synthesised."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple or partial comment on the feature; limited development or few relevant references."
                    }
          ],
          "finalAnswer": "(a) Watchfulness → wind’s arrival; terror → relief. (b) Personification plus a delayed construction makes the storm feel deliberate and momentous. (c) Integration is highly effective: every structural and verbal choice drives the single effect of sudden menace.",
          "commonErrors": [
                    "In (a) listing events rather than structural shifts.",
                    "In (c) judging without citing how methods combine."
          ]
},
        },
        {
          id: "el10-u9-linking-q6",
          difficulty: "challenge",
          totalMarks: 14,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Read ‘The Storm’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three details showing the storm’s power.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Analyse how the writer integrates imagery and pacing in the storm paragraph.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how effectively the extract combines methods to affect the reader.",
                    "marks": 7
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sensory imagery",
                              "statement": "Power is conveyed through what the storm takes — washing, voices, bearings."
                    },
                    {
                              "kind": "skill",
                              "name": "Whole-text method evaluation",
                              "statement": "Judge the combined effect of imagery, pace, tone and structure."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It rips the washing from the line and the bin lid away.",
                              "evidence": "It took the washing off our neighbour’s line, it took the bin lid",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "It erases the sound of their own voices.",
                              "evidence": "it took the sound of our own voices",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "It scatters the trees ‘in every direction at once’.",
                              "evidence": "the trees pointing in every direction at once",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The anaphora ‘It took… it took… it took’ builds overwhelming force through repetition.",
                              "evidence": "It took the washing… it took the bin lid… it took the sound",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The similes of milk and bruise make the sky’s change slow and ominous — dread in the imagery.",
                              "evidence": "slow as milk in tea… the colour of a bruise",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pacing slows for the beautiful watching, then accelerates with short sentences at the wind’s arrival — structure mirrors the storm.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The calmest-thought paradox fuses imagery of death with tone of numbness, deepening the terror.",
                              "evidence": "the calmest thought I have ever had",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The extract combines tone arc, pathetic imagery, anaphora and bathos into a single emotional journey.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Each method reinforces the others — the imagery creates the fear the pace delivers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The closing bathos gives the methods a memorable release rather than a flat ending.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Because form mirrors content — storm pace, storm structure — the effect feels inevitable rather than contrived.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Overall judgement: highly effective integration of methods for a complete emotional arc.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The only limitation is that the narrator’s adult reflection is thin, but for a memoir extract this suits the child’s-eye immediacy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Final evaluative point: the combination of methods earns top-band response.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-7",
                              "descriptor": "Perceptive evaluation of how methods combine; precise judgements supported by the whole text."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluation of combined methods with some developed points."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Limited or partial evaluation; methods described rather than judged."
                    }
          ],
          "finalAnswer": "(a) Washing and bin lid stripped; voices erased; trees scattered. (b) Anaphora piles on force, bruise-and-milk imagery builds dread, pace mirrors the storm’s curve, and the deathly calm paradox deepens terror. (c) The methods integrate seamlessly — imagery creates what pace delivers — producing a complete, memorable emotional arc.",
          "commonErrors": [
                    "In (b) listing imagery without connecting it to pacing.",
                    "In (c) praising the writing without evaluating the method combination."
          ],
          "examinerNote": "Part (c) is worth 7 marks; the levels top out at 7."
},
        },
      ],
    },
    {
      id: "el10-u9-reader-response",
      title: "Effect on the reader and evaluation",
      skill: "Explain and evaluate how a writer positions the reader and achieves emotional effects.",
      lesson: {
        sections: [
          {
            heading: "Positioning the reader",
            body: "Writers **position** readers by controlling knowledge and sympathy. Techniques include **pathetic fallacy** (weather mirroring emotion), **interior monologue** (direct access to thoughts), **dramatic irony** (reader knows more than a character) and others’ reactions that model how we should feel. In ‘A Matter of Principle’, the father’s knowing smile teaches us to read the boy’s denial sympathetically.",
          },
          {
            heading: "Effect versus technique",
            body: "‘The writer uses pathetic fallacy’ is AO2 evidence; ‘the storm mirrors the narrator’s fear, so we feel it physically’ is the effect. AO1 questions ask what happens; AO2 asks how and why it affects us. The highest answers move fluently between them: retrieve the detail, analyse the method, state the effect on the reader.",
          },
          {
            heading: "Evaluating success",
            body: "Evaluation means a reasoned verdict: ‘The writer achieves X effectively because…’ Support it with evidence and acknowledge limits where relevant. A strong evaluation weighs alternatives — would a different structure have served better? — but always returns to what the text actually does.",
          },
        ],
        keyFormulas: [
          { name: "Pathetic fallacy", statement: "Weather or setting that mirrors a character’s emotional state." },
          { name: "Dramatic irony", statement: "The reader knows more than a character, creating sympathy, tension or humour." },
          { name: "Evaluation", statement: "A reasoned verdict on how well a writer achieves an effect, supported by evidence." },
        ],
        workedExample: {
          problem: "How does ‘A Matter of Principle’ position the reader to sympathise with the boy?",
          solution: "The first-person voice makes us complicit in his perspective — we see the wedding through his sulky eyes. His denial of crying is undercut by the pebble he keeps, so we sympathise with what he cannot admit. The father’s apologetic smile acts as dramatic irony: we understand the sulk before the boy does. The writer positions us to laugh at him and ache for him at once.",
        },
      },
      questions: [
        {
          id: "el10-u9-readresp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question best targets the effect on the reader?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What is the setting of the extract?"
                    },
                    {
                              "id": "b",
                              "text": "How does the writer make the reader feel tense?"
                    },
                    {
                              "id": "c",
                              "text": "How many characters appear?"
                    },
                    {
                              "id": "d",
                              "text": "What happens at the end?"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Question focus",
                              "statement": "AO2 questions target how writers create effects on the reader."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only (b) asks about the writer’s method and its effect; the others are retrieval questions.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**(b)** It asks how the writer creates a feeling in the reader — the essence of AO2.",
          "commonErrors": [
                    "Choosing (d): plot summary is AO1, not effect."
          ]
},
        },
        {
          id: "el10-u9-readresp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two techniques a writer can use to position the reader to sympathise with a character.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sympathy techniques",
                              "statement": "Writers guide sympathy through voice, pathetic detail and others’ reactions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Give the character a vulnerable or naive first-person voice, or show others reacting kindly to them.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Use pathetic detail — a small kept object, a private fear — that reveals feeling the character will not state.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "A naive or intimate voice; pathetic detail such as a kept object; others’ sympathetic reactions (any two).",
          "commonErrors": [
                    "Listing devices without connecting them to sympathy."
          ]
},
        },
        {
          id: "el10-u9-readresp-q3",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Last Voyage of the Tamar",
          "author": "Written for Akademik Space",
          "source": "Short story extract",
          "text": "The harbourmaster found the boat on a Tuesday, upside down in the mud, forty years after she was lost. I was eleven when my father sailed the Tamar out of St Ives for the last time, and for most of my childhood I believed he had simply decided to stay.\n\nHe had not. The storm came up in an hour, a black wall of weather that the fishermen swore had been born over the Atlantic that morning. My mother lit every lamp in the house and sat by the window until dawn, talking to the empty chair where he had sat at breakfast. I remember the porridge going cold on the table, the clock ticking, the gulls screaming past the glass like thrown handfuls of gravel.\n\nYears later, my uncle showed me the logbook. The final entry is four words long: ‘Wind rising. No return.’ Beneath it, in my father’s cramped hand, is a sketch of our house with every window lit — a man drawing light into a dark room from a hundred miles out at sea."
},
          stem: "Explain how ‘The Last Voyage of the Tamar’ positions the reader to sympathise with the narrator.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sympathy through withheld truth",
                              "statement": "The reader’s sympathy grows as they learn what the narrator could not know."
                    },
                    {
                              "kind": "skill",
                              "name": "Effect analysis",
                              "statement": "Link each positioning technique to the feeling it produces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The boy’s childhood hope — believing his father chose to stay — makes him a victim of misunderstanding.",
                              "evidence": "I believed he had simply decided to stay",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The mother’s lamp-lit vigil shows adult grief the boy never saw, deepening our sympathy for the family.",
                              "evidence": "sat by the window until dawn",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Withholding the storm’s cause until the logbook makes us share the boy’s delayed grief.",
                              "evidence": "Wind rising. No return.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The father’s sketch — drawing light into a dark room — makes him lovable in absence, so grief lands fully.",
                              "evidence": "a man drawing light into a dark room",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Sympathy is built through the boy’s innocent misunderstanding, the mother’s unseen vigil, the withheld cause of death and the father’s loving sketch — each positions the reader to grieve with the family.",
          "commonErrors": [
                    "Saying ‘we feel sorry for him’ without showing which details create that feeling."
          ]
},
        },
        {
          id: "el10-u9-readresp-q4",
          difficulty: "challenge",
          totalMarks: 5,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Evaluate how successfully the writer of ‘The Storm’ achieves the intended emotional effect on the reader.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluative judgement",
                              "statement": "A verdict on effectiveness must weigh evidence and acknowledge any limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The writer achieves tension: the slow beautiful build makes the wind’s arrival genuinely shocking.",
                              "evidence": "Then the wind arrived",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fear is conveyed without statement through paradox and sensory chaos, which feels earned rather than told.",
                              "evidence": "the calmest thought I have ever had",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The relief ending through bathos gives a complete emotional arc — tension is released, not abandoned.",
                              "evidence": "I have never been so glad of a puddle",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The child’s-eye perspective keeps the terror immediate and unfiltered by adult reflection.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall judgement: highly successful — the methods combine to produce fear, shock and relief in sequence.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The writer succeeds: the lulling build, paradoxical terror and bathos release create a complete emotional arc. The child’s perspective preserves immediacy, so the effect is powerful and believable.",
          "commonErrors": [
                    "Praising without evidence, or criticising without acknowledging what works."
          ]
},
        },
        {
          id: "el10-u9-readresp-q5",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
          "title": "The Storm",
          "author": "Written for Akademik Space",
          "source": "Memoir extract",
          "text": "At first the sky was only interesting. We had been walking home from the allotment when the clouds began to turn, slow as milk in tea, from white to the colour of a bruise. My brother and I stopped to watch, and for a while it was beautiful: the light going green at the edges, the birds dropping out of the sky like stones.\n\nThen the wind arrived. It did not arrive so much as declare itself. It took the washing off our neighbour’s line, it took the bin lid, and it took the sound of our own voices so completely that we could no longer tell whether we were shouting or whispering. I remember thinking, quite calmly, that we were going to die. It was the calmest thought I have ever had.\n\nThe storm passed as quickly as it came, leaving the lane silver with rain and the trees pointing in every direction at once. My brother picked up my football, which had rolled into a ditch, and we walked home under a rainbow that belonged, I think, to nobody. I have never been so glad of a puddle."
},
          stem: "Read ‘The Storm’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "What is the writer’s likely intended effect on the reader?",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two details that create this effect.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether the intended effect is achieved.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Identifying intended effect",
                              "statement": "Infer the effect from the methods chosen, then test it against the text."
                    },
                    {
                              "kind": "technique",
                              "name": "Sensory immersion",
                              "statement": "Sound and sight details immerse the reader in the storm’s chaos."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "To make the reader feel the storm’s sudden violence and the relief of survival.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "To share the children’s fear and wonder, as if reliving the moment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The birds falling ‘like stones’ injects death into the beautiful scene.",
                              "evidence": "the birds dropping out of the sky like stones",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Losing the sound of their own voices immerses the reader in helplessness.",
                              "evidence": "we could no longer tell whether we were shouting or whispering",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "The slow build earns the shock, so the fear feels proportionate and real.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The bathos ending confirms relief, completing the intended emotional journey.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Minor limitation: the adult narrator’s hindsight is thin, but this preserves immediacy.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "2-3",
                              "descriptor": "Clear, relevant analysis with some well-chosen references to the text; points are developed but not always fully synthesised."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Simple or partial comment on the feature; limited development or few relevant references."
                    }
          ],
          "finalAnswer": "(a) To immerse the reader in sudden terror and then relief. (b) Birds falling like stones; voices erased by the wind. (c) The effect is achieved: the build earns the shock and the bathos ending completes the arc, with only a minor thinness in adult reflection.",
          "commonErrors": [
                    "In (c) giving a verdict without weighing evidence for and against."
          ]
},
        },
        {
          id: "el10-u9-readresp-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Last Voyage of the Tamar",
          "author": "Written for Akademik Space",
          "source": "Short story extract",
          "text": "The harbourmaster found the boat on a Tuesday, upside down in the mud, forty years after she was lost. I was eleven when my father sailed the Tamar out of St Ives for the last time, and for most of my childhood I believed he had simply decided to stay.\n\nHe had not. The storm came up in an hour, a black wall of weather that the fishermen swore had been born over the Atlantic that morning. My mother lit every lamp in the house and sat by the window until dawn, talking to the empty chair where he had sat at breakfast. I remember the porridge going cold on the table, the clock ticking, the gulls screaming past the glass like thrown handfuls of gravel.\n\nYears later, my uncle showed me the logbook. The final entry is four words long: ‘Wind rising. No return.’ Beneath it, in my father’s cramped hand, is a sketch of our house with every window lit — a man drawing light into a dark room from a hundred miles out at sea."
},
          stem: "Read ‘The Last Voyage of the Tamar’ and answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three details that shape the reader’s emotional response.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how the writer uses the logbook and the sketch to deepen sympathy.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the overall emotional impact of the extract.",
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
                              "name": "Emotional engineering",
                              "statement": "Writers sequence revelations to control when and how the reader grieves."
                    },
                    {
                              "kind": "skill",
                              "name": "Impact evaluation",
                              "statement": "Judge the cumulative emotional effect of structure and detail together."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The mother’s vigil — lamps lit, speaking to his empty chair — creates immediate pity.",
                              "evidence": "talking to the empty chair where he had sat at breakfast",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The boy’s false belief that his father chose to stay creates tragic irony.",
                              "evidence": "I believed he had simply decided to stay",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The four-word logbook entry delivers the death with brutal economy.",
                              "evidence": "Wind rising. No return.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "The logbook’s brevity mirrors a man with no time, making the death feel real and sudden.",
                              "evidence": "The final entry is four words long",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The sketch beneath the official record reveals love the logbook cannot — duty versus devotion.",
                              "evidence": "a sketch of our house with every window lit",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Together they let the reader grieve twice: for the wreck, then for the love revealed too late.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The frame withholds the cause so the reader reads the childhood memories as clues.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The storm scene makes the disaster physical before it is explained.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The reveal is timed for maximum shock after sympathy has been built.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The sketch converts grief into enduring love, giving the ending resonance.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "The emotional impact is cumulative — each structural choice increases the weight of the next.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Overall judgement: highly effective — the reader’s grief is engineered, not just described.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, well-argued evaluation sustained across the whole text; judgements are precise and supported by well-chosen references."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant evaluation with some developed points and appropriate references."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple, limited evaluation; descriptive or partly relevant comments."
                    }
          ],
          "finalAnswer": "(a) Mother’s vigil; boy’s false belief; four-word logbook entry. (b) The logbook’s brevity makes death sudden; the sketch reveals love too late, doubling the grief. (c) The extract engineers emotion through withheld truth, physical storm imagery and a resonant ending — its cumulative impact is highly effective.",
          "commonErrors": [
                    "In (b) describing the objects without analysing their emotional function.",
                    "In (c) listing sad moments instead of evaluating the engineered impact."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u9-l13-notes",
      title: "Integrating analysis — notes",
      summary: "Top-band AO2 answers link language and structure to a single effect; evaluation requires a reasoned verdict.",
      sections: [
        { heading: "Key idea", body: "Never name a device without stating what it does; integrate structural and verbal choices into one argument about reader effect." },
        { heading: "Exam technique", body: "Use PEE: Point (effect), Evidence (short quotation), Explanation (how the method works), Link (why it matters to the whole text). End evaluative answers with an explicit judgement." },
      ],
    },
  ],
};
