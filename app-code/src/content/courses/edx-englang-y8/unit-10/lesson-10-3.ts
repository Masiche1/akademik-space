import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "el8-u10-lesson-10-3",
  code: "10-3",
  title: "Writing about Poetry and Drama",
  goal: "I CAN write close-analysis paragraphs using point, evidence and effect, and write comparative and evaluative responses about poems and plays.",
  standards: ["KS3 Reading", "KS3 Writing", "KS3 AO2", "KS3 AO4", "KS3 AO5"],
  
  vocabulary: [
    { term: "Point-Evidence-Effect (PEE)", definition: "A paragraph structure: make a point, quote evidence, explain the effect." },
    { term: "Close analysis", definition: "Examining a short passage in detail to explain how it works." },
    { term: "Comparative response", definition: "Writing that compares two texts on shared themes or methods." },
    { term: "Evaluative response", definition: "A response that judges a text's effectiveness with reasons." },
    { term: "Integrated quotation", definition: "Weaving a short quote into your own sentence rather than dropping it in." },
    { term: "Topic sentence", definition: "The first sentence of a paragraph that states its main point." },
  ],
  concepts: [
    {
      id: "el8-u10-close-analysis",
      title: "Close analysis writing",
      skill: "Write analytical paragraphs that make a point, support it with evidence and explain the effect on the reader.",
      lesson: {
        sections: [
          {
            heading: "The PEE paragraph",
            body: "Every analytical paragraph needs three moves: **Point** (what you are arguing), **Evidence** (a short quotation or precise reference), **Effect** (what the writer achieves and how the reader responds). 'The poet uses personification when the sea 'rehearsed its moan' (evidence), making the sea seem alive and threatening (effect), which heightens the keeper's courage (point).'",
          },
          {
            heading: "Choosing evidence",
            body: "Pick short, precise quotations — a phrase, not a whole stanza. The best evidence is the line that proves your point most economically. Do not quote everything; choose the moment where the device is clearest. Integrate quotes into your sentence so they read smoothly.",
          },
          {
            heading: "Explaining effect",
            body: "The effect is the most important part — it is where marks are won. Do not stop at 'this creates imagery'. Ask: what does the reader feel? What does it suggest about the subject? Link the device to the poem's or play's bigger meaning.",
          },
        ],
        keyFormulas: [
          { name: "PEE", statement: "Point → Evidence → Effect." },
          { name: "Evidence rule", statement: "Short, precise, integrated quotations." },
          { name: "Effect question", statement: "What does the reader feel or understand?" },
        ],
        workedExample: {
          problem: "Write a PEE paragraph analysing 'a coin of fire against the night' from 'The Lighthouse Keeper'.",
          solution: "The poet uses a metaphor when the lamp is called 'a coin of fire against the night' (evidence). The comparison makes the light seem precious and valuable — a small coin of hope in darkness (effect). This suggests the keeper's work is a gift to anyone lost at sea, elevating his quiet vigil to something heroic (point).",
        },
      },
      questions: [
        {
          id: "el8-u10-close-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does PEE stand for in analytical writing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Point, Evidence, Effect"
                    },
                    {
                              "id": "b",
                              "text": "Plot, Emotion, Ending"
                    },
                    {
                              "id": "c",
                              "text": "Poem, Extract, Essay"
                    },
                    {
                              "id": "d",
                              "text": "Paragraph, Evidence, Explanation"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PEE",
                              "statement": "Point, Evidence, Effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PEE = Point, Evidence, Effect — the standard analytical paragraph structure.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Point, Evidence, Effect.",
          "commonErrors": [
                    "Choosing (d); 'Explanation' is close but the standard term is Effect."
          ]
},
        },
        {
          id: "el8-u10-close-analysis-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "Below, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack."
},
          stem: "Rewrite this weak analysis as a PEE paragraph: 'The poet uses imagery. It is good. The sea is described nicely.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PEE writing",
                              "statement": "Point, evidence, effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Makes a specific point about the imagery's purpose, e.g. the sea is made threatening.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Quotes a precise phrase ('rehearsed its moan' or 'hungry face') and explains its effect on the reader.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'The poet personifies the sea when it 'rehearsed its moan', giving it a human, almost theatrical menace. The image makes the sea seem patient and predatory, heightening the danger the keeper faces.'",
          "commonErrors": [
                    "Keeping 'it is good' — no real point.",
                    "Quoting the whole stanza instead of a phrase."
          ]
},
        },
        {
          id: "el8-u10-close-analysis-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Auditions",
          "author": "Written for Akademik Space",
          "source": "A school hall, evening",
          "text": "(RAVI takes the poster. A beat.)\nRAVI: ...Or act convincingly. (beat) Thursday, then."
},
          stem: "Identify the point, evidence and effect in this analytical sentence: 'The playwright's use of the stage direction 'a beat' before RAVI's answer creates suspense (evidence), making the audience wait for his decision (effect), which heightens the scene's tension (point).'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PEE elements",
                              "statement": "Point, evidence, effect are distinct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point: the beat creates suspense / heightens tension.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Evidence: the quotation 'a beat' (and possibly 'Thursday, then').",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Effect: the audience waits for his decision, heightening tension.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Point: suspense/tension; evidence: 'a beat'; effect: audience waits for RAVI's decision.",
          "commonErrors": [
                    "Confusing effect with point."
          ]
},
        },
        {
          id: "el8-u10-close-analysis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "Below, the sea rehearsed its moan,\na grey unblinking, patient drone,\nwhile gulls stitched wheeling, black on black,\nand tides unpicked the sand's old wrack."
},
          stem: "Write a PEE paragraph analysing how the poet uses sound in the line 'a grey unblinking, patient drone'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sound analysis",
                              "statement": "Assonance and rhythm create mood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Makes a point about the sound's effect, e.g. the long 'o' sounds mimic the sea's low drone.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Quotes 'grey unblinking, patient drone' as evidence.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains assonance: repeated 'o'/'u' vowels create a low, humming, unending sound like the sea.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Links to meaning: the drone makes the sea seem vast, patient and threatening to the lone keeper.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Model: 'The poet uses assonance in 'a grey unblinking, patient drone' — the repeated long vowels create a low, humming sound like the sea itself. This makes the sea seem vast and patiently threatening, heightening the keeper's isolation.'",
          "commonErrors": [
                    "Naming assonance without explaining its effect.",
                    "No link to the poem's mood."
          ]
},
        },
        {
          id: "el8-u10-close-analysis-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The line",
          "author": "Written for Akademik Space",
          "text": "Line: 'the lamp still burned, patient and gold —'"
},
          stem: "Two students write about the same line. Analyse which is better analytical writing and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Analytical quality",
                              "statement": "Point, precise evidence, developed effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Student A: 'The poet uses personification. It is effective.' — names a device but no evidence or effect.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Student B: 'The lamp is personified as 'patient and gold', giving it human qualities of endurance and preciousness.' — quotes, names the device, explains the effect.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "B's version links the device to meaning: patience suggests the keeper's steadiness, gold suggests value.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A's 'effective' is a judgement without justification — it could apply to anything.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "B's integrated quotation reads smoothly; A's is a dropped-in label.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Overall B is better because it does PEE properly: point, evidence, effect.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Compares both with specific evidence and clear judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Identifies B as better with partial reasons."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Preference without analysis."
                    }
          ],
          "finalAnswer": "Student B is better: precise quotation, named device and explained effect; Student A names a device with no evidence or effect.",
          "commonErrors": [
                    "Saying both are 'ok'."
          ]
},
        },
        {
          id: "el8-u10-close-analysis-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The line",
          "author": "Written for Akademik Space",
          "text": "Line: 'the lamp still burned, patient and gold —'"
},
          stem: "Answer all parts of this question about analytical writing.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the three parts of a PEE paragraph.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Write a PEE paragraph analysing 'patient and gold' from the poem. Use a short quotation.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a second PEE paragraph analysing the same line from a different angle (e.g. the dash, the word 'still', or the colour gold).",
                    "marks": 6
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "PEE paragraphs",
                              "statement": "Point, evidence, effect."
                    },
                    {
                              "kind": "technique",
                              "name": "Multiple angles",
                              "statement": "One line can yield several analyses."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Point, Evidence, Effect.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Point: 'patient and gold' characterises the lamp/l keeper's devotion.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Evidence: quotes 'patient and gold' precisely.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "b",
                              "reasoning": "Effect: personification gives the lamp human endurance; gold suggests preciousness — the light is a noble, lasting promise.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Links to the poem's theme of steadfastness.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second paragraph has a clear point about a different feature (dash, 'still', or 'gold').",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Evidence quotes the specific word or punctuation.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Effect explains what the feature does — e.g. 'still' suggests endurance despite sleep; the dash signals a volta.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Links to meaning or reader response.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Paragraph is coherent and well punctuated.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Second PEE paragraph with a fresh angle, precise evidence and developed effect."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Paragraph present; angle or effect less developed."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Repeats part (b) or lacks structure."
                    }
          ],
          "finalAnswer": "(a) Point, Evidence, Effect. (b) PEE paragraph on 'patient and gold'. (c) A second PEE paragraph from a different angle.",
          "commonErrors": [
                    "Repeating the same point in part (c).",
                    "No quotation in the evidence."
          ],
          "examinerNote": "Parts (b) and (c) are marked for analytical writing (AO2/AO4)."
},
        },
      ],
    },
    {
      id: "el8-u10-comparing-responding",
      title: "Comparing and evaluating responses",
      skill: "Compare poems and plays on shared themes or methods, and write evaluative personal responses with reasons.",
      lesson: {
        sections: [
          {
            heading: "Comparing texts",
            body: "When comparing a poem and a play (or two poems), look for **shared themes** (both about loneliness, courage, change) and **different methods** (a poem relies on imagery and rhythm; a play relies on dialogue and stage action). Use connectives: 'similarly', 'whereas', 'in contrast', 'both'. Always link the comparison back to meaning, not just technique.",
          },
          {
            heading: "Evaluative response",
            body: "An evaluative response judges how well a text achieves its purpose. 'The poem is effective because...' is stronger than 'I liked it'. Support judgements with evidence: 'the repeated image of the lamp makes the ending feel earned.' Personal response is welcome — 'I found the ending moving' — but it must be justified, not just stated.",
          },
          {
            heading: "Structuring the response",
            body: "A strong comparative paragraph might be: point about text A → evidence → effect → 'whereas' point about text B → evidence → effect → judgement on which is more effective and why. Keep each text's voice distinct; do not blur them together.",
          },
        ],
        keyFormulas: [
          { name: "Compare frame", statement: "Point about A → evidence → effect → 'whereas' → same for B → judgement." },
          { name: "Connectives", statement: "Similarly, whereas, in contrast, both, however." },
          { name: "Evaluation rule", statement: "Judgement + evidence + reason." },
        ],
        workedExample: {
          problem: "Compare how 'The Lighthouse Keeper' (poem) and 'The Auditions' (play) present the theme of encouragement.",
          solution: "Both texts show encouragement changing someone. The poem presents it quietly — the keeper's lamp is 'a promise the dark could not unfold', a silent, patient gift. The play dramatises it — Lena's words ('You can act, though') and actions (taking the poster, offering to rehearse) actively persuade RAVI. The poem relies on imagery and tone; the play relies on dialogue and stage directions. Both achieve encouragement, but the play makes it interactive while the poem makes it symbolic.",
        },
      },
      questions: [
        {
          id: "el8-u10-comparing-responding-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which connective is best for contrasting two texts?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Similarly"
                    },
                    {
                              "id": "b",
                              "text": "Whereas"
                    },
                    {
                              "id": "c",
                              "text": "And"
                    },
                    {
                              "id": "d",
                              "text": "Because"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "convention",
                              "name": "Comparative connectives",
                              "statement": "Whereas signals contrast."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Whereas' contrasts; 'similarly' compares, 'and' adds, 'because' explains.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Whereas.",
          "commonErrors": [
                    "Choosing 'similarly' which shows similarity, not contrast."
          ]
},
        },
        {
          id: "el8-u10-comparing-responding-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
          "title": "The Auditions",
          "author": "Written for Akademik Space",
          "source": "A school hall, evening",
          "text": "(RAVI nods, then smiles for the first time.)\nRAVI: Deal. But if I forget the words, you feed me the lines from the wings."
},
          stem: "Rewrite this evaluative statement so it is justified: 'The ending of the play was good.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluative writing",
                              "statement": "Judgement needs evidence and reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names what is good specifically: the smile marks RAVI's change and the joke shows his new confidence.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Explains why it works: the 'first time' smile rewards the audience's hope and the joke releases tension.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'The ending is effective because RAVI's 'first' smile visibly marks his change of heart, and his joke about being fed lines shows he is now relaxed enough to laugh — the tension releases into friendship.'",
          "commonErrors": [
                    "Keeping 'good' without specifics.",
                    "Describing the ending without evaluating it."
          ]
},
        },
        {
          id: "el8-u10-comparing-responding-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "the lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Identify one shared theme and one different method between 'The Lighthouse Keeper' (poem) and 'The Auditions' (play).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparing texts",
                              "statement": "Shared themes vs different methods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shared theme: both explore quiet encouragement or steadfastness — the lamp's 'promise' and Lena's support of RAVI.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Different method: the poem uses imagery and tone ('patient and gold'); the play uses dialogue and stage directions.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The poem is symbolic and contemplative; the play is interactive and dramatic — same theme, different means.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Both deal with quiet encouragement/steadfastness; the poem uses imagery and tone while the play uses dialogue and stagecraft.",
          "commonErrors": [
                    "Saying 'they are both good' without a theme or method."
          ]
},
        },
        {
          id: "el8-u10-comparing-responding-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "the lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Write one comparative sentence comparing how the poem and the play present encouragement. Use 'whereas' and link to effect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparative writing",
                              "statement": "Contrast methods and link to effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Makes a point about the poem's method: the lamp as 'a promise' symbolises silent, patient encouragement.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Uses 'whereas' to contrast the play: Lena's spoken words and actions encourage RAVI directly and interactively.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Links both to effect: the poem's encouragement is symbolic and contemplative; the play's is dramatic and personal.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Sentence is grammatically accurate and the comparison is balanced.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Model: 'Whereas the poem presents encouragement as a silent 'promise' symbolised by the patient lamp, the play dramatises it through Lena's spoken support and practical help, making the encouragement interactive rather than contemplative.'",
          "commonErrors": [
                    "Comparing without 'whereas' or a clear contrast.",
                    "Listing methods without linking to effect."
          ]
},
        },
        {
          id: "el8-u10-comparing-responding-q5",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "the lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Evaluate which text — the poem 'The Lighthouse Keeper' or the play 'The Auditions' — is more effective at showing encouragement. Justify your judgement.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluative comparison",
                              "statement": "Judgement needs evidence from both texts."
                    },
                    {
                              "kind": "technique",
                              "name": "Effectiveness",
                              "statement": "Judge how well the text achieves its purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acknowledges what the poem does well: the lamp as 'a promise' is a powerful, memorable symbol of steadfast encouragement.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Acknowledges what the play does well: Lena's dialogue and actions make encouragement tangible and interactive.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Compares the methods: the poem relies on imagery and tone; the play on dialogue and stagecraft.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Makes a clear judgement with a reason, e.g. the play is more immediately relatable while the poem is more symbolically resonant.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Supports the judgement with specific evidence from both texts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The evaluation is balanced — it does not dismiss the other text.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Balanced evaluation with evidence from both and a clear judgement."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Judgement given; evidence partial or one-sided."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple preference without justification."
                    }
          ],
          "finalAnswer": "A justified judgement — e.g. the play is more immediately relatable through dialogue, while the poem is more symbolically powerful through imagery; either can be defended with evidence.",
          "commonErrors": [
                    "Choosing one without acknowledging the other's strengths.",
                    "Judgement without evidence."
          ]
},
        },
        {
          id: "el8-u10-comparing-responding-q6",
          difficulty: "challenge",
          totalMarks: 12,
          extract: {
          "title": "The Lighthouse Keeper",
          "author": "Written for Akademik Space",
          "lineNumbers": true,
          "text": "the lamp still burned, patient and gold —\na promise the dark could not unfold."
},
          stem: "Answer all parts of this question about comparing and evaluating the poem and the play.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two connectives used for comparing texts.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how the poem and the play each present the theme of encouragement, referring to one method from each.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Write a short evaluative paragraph (about 80-100 words) comparing how effective the two texts are at showing encouragement. Give a clear judgement.",
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
                              "name": "Comparative writing",
                              "statement": "Connectives and balanced structure."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Judgement with evidence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Two of: similarly, whereas, in contrast, both, however.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Poem: presents encouragement through imagery and tone — the lamp as 'a promise' is symbolic and silent.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Play: presents encouragement through dialogue and stage directions — Lena's words and actions persuade RAVI directly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Links each method to effect: the poem's encouragement is contemplative; the play's is interactive.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Notes the contrast between symbolic and dramatic means.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Paragraph compares both texts on the theme of encouragement.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Uses evidence from both texts.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gives a clear judgement on which is more effective.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Justifies the judgement with reasons.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Uses comparative connectives appropriately.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Writing is accurate and coherent.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "c",
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Balanced, evidenced comparison with a clear judgement."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Comparison present; judgement or evidence partial."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple preference; little comparison."
                    }
          ],
          "finalAnswer": "(a) Similarly, whereas, in contrast, both. (b) Poem uses imagery/tone; play uses dialogue/stagecraft — symbolic vs interactive encouragement. (c) An evaluative comparative paragraph.",
          "commonErrors": [
                    "Comparing without a judgement.",
                    "Evidence from only one text."
          ],
          "examinerNote": "Part (c) is marked for comparative evaluative writing (AO4)."
},
        },
      ],
    },
  ],

};
