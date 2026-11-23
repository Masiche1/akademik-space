import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "el7-u9-lesson-9-3",
  code: "9-3",
  title: "Grammar for Effect and Proofreading",
  goal: "I CAN choose grammatical forms deliberately and proofread writing accurately.",
  standards: ["Edexcel KS3 English Language — Grammar in context", "Edexcel KS3 English Language — Editing"],
  
  vocabulary: [
    { term: "Active voice", definition: "Sentence where the subject performs the action ('The chef cooked')." },
    { term: "Passive voice", definition: "Sentence where the subject receives the action ('The meal was cooked')." },
    { term: "Modal verb", definition: "Verb expressing possibility, obligation or permission — 'can', 'must', 'should'." },
    { term: "Register", definition: "Level of formality appropriate to audience and purpose." },
    { term: "Proofreading", definition: "Final check for spelling, punctuation and grammar errors." },
    { term: "Editing", definition: "Revising content, structure and language before final proofread." },
  ],
  concepts: [
    {
      id: "el7-u9-effect",
      title: "Choosing Grammar for Effect",
      skill: "Select active/passive voice, modal verbs and tense to suit purpose and tone.",
      lesson: {
        sections: [
          {
            heading: "Active and passive voice",
            body: "In the **active voice** the subject acts: 'The dog bit the man.' In the **passive voice** the subject receives the action: 'The man was bitten by the dog.' Passive voice shifts focus to the receiver and is common in formal or scientific writing where the actor is unknown or unimportant.\n\nUse passive when the 'doer' doesn't matter ('The bridge was built in 1900') or to soften blame ('Mistakes were made').",
          },
          {
            heading: "Modals and tense for tone",
            body: "**Modal verbs** adjust certainty and obligation: 'must' (strong obligation), 'should' (advice), 'might' (possibility), 'could' (suggestion). 'You must leave' is far stronger than 'You might leave'.\n\n**Tense** controls time and immediacy: past tense narrates ('she walked'), present tense makes events feel current ('she walks'), future forms plan ('she will walk'). Mixing tenses deliberately can create tension or reflection.",
          },
        ],
        keyFormulas: [
          { name: "Active voice", statement: "Subject performs the action." },
          { name: "Passive voice", statement: "Subject receives the action (be + past participle)." },
          { name: "Modal verbs", statement: "Express possibility, obligation or permission." },
        ],
        workedExample: {
          problem: "Rewrite 'The storm damaged the roof' in the passive voice and explain the effect.",
          solution: "'The roof was damaged by the storm.' The passive focuses on the roof rather than the storm — useful when the actor is unknown or unimportant.",
        },
      },
      questions: [
        {
          id: "el7-u9-effect-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the passive voice?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The chef cooked the meal."
                    },
                    {
                              "id": "b",
                              "text": "The meal was cooked by the chef."
                    },
                    {
                              "id": "c",
                              "text": "The chef is cooking."
                    },
                    {
                              "id": "d",
                              "text": "Cook the meal!"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Passive voice",
                              "statement": "Subject receives the action; be + past participle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Was cooked' makes 'the meal' the receiver — passive.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The meal was cooked by the chef.",
          "commonErrors": [
                    "Choosing any sentence with 'cook'."
          ]
},
        },
        {
          id: "el7-u9-effect-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a modal verb? Give two examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Modal verb",
                              "statement": "Expresses possibility, obligation or permission."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Modal verb defined as expressing possibility/obligation/permission.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Two valid examples given (e.g. 'must', 'might').",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "A modal verb expresses possibility, obligation or permission — e.g. 'must', 'should', 'might'.",
          "commonErrors": [
                    "Listing ordinary verbs like 'run'."
          ]
},
        },
        {
          id: "el7-u9-effect-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how changing tense can change the effect of a sentence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Tense and effect",
                              "statement": "Tense controls time, immediacy and tone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Past tense narrates completed events.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Present tense creates immediacy or timelessness.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A valid example shows the effect of a tense shift.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Tense controls time and immediacy — 'she walked' narrates; 'she walks' feels current or habitual.",
          "commonErrors": [
                    "Describing tense without discussing effect."
          ]
},
        },
        {
          id: "el7-u9-effect-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite 'The dog bit the man' in the passive voice and explain the effect of the change.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Voice transformation",
                              "statement": "Object becomes subject; add 'by' phrase optionally."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct passive formed: 'The man was bitten by the dog.'",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Focus shifts from dog to man.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Explains when passive is useful (unknown/unimportant actor).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Effect on tone or emphasis clearly explained.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "'The man was bitten by the dog.' — the victim becomes the focus; the actor is demoted.",
          "commonErrors": [
                    "'The man bit by the dog' — missing 'was'."
          ]
},
        },
        {
          id: "el7-u9-effect-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Improve this informal sentence for a formal report: 'The experiment was kinda messed up but we still got results.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Rewrite the sentence in formal, precise language.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two changes you made and why.",
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
                              "name": "Register shift",
                              "statement": "Formal writing uses precise vocabulary and full forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Kinda' replaced with a precise term (e.g. 'somewhat', 'partially').",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "'Messed up' replaced with formal wording (e.g. 'unsuccessful', 'compromised').",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Sentence is grammatical and appropriately formal.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Two changes explained with reasons.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "Explanations link to formality or precision.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Fully formal, precise rewrite.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partially formal rewrite.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Still informal or inaccurate.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Two changes explained with reasons.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial explanation.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable explanation.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "e.g. 'The experiment was partially unsuccessful, although results were still obtained.'",
          "commonErrors": [
                    "Keeping vague informal phrasing."
          ]
},
        },
        {
          id: "el7-u9-effect-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Diary entry",
          "author": "Written for Akademik Space",
          "text": "Ugh, the match was a disaster. We totally got smashed 5-0 and the ref was rubbish. Never again."
},
          stem: "Using the diary entry above, complete each task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Rewrite the first sentence as a formal match report sentence.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Identify two informal features in the original.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why register matters in different writing contexts.",
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
                              "name": "Register adaptation",
                              "statement": "Match vocabulary and tone to audience and purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Formal sentence formed correctly (e.g. 'The team was defeated 5-0').",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Informal emotive words removed or neutralised.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Sentence is grammatical and factual in tone.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Two informal features correctly identified (e.g. 'ugh', 'totally', 'smashed', 'rubbish').",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "Features are accurately described as informal/emotive.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Why register suits context explained with reference to audience/purpose.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Clear link between context and appropriate language.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Fully formal, accurate report sentence.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Mostly formal with minor issues.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partially formal.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Still informal or inaccurate.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Two informal features accurately identified.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One feature identified.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable identification.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Clear explanation of register's importance.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial explanation.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. a: 'The team suffered a heavy 5-0 defeat.'; b: 'ugh' (interjection), 'totally' (informal intensifier), 'smashed' (slang).",
          "commonErrors": [
                    "Formal rewrite that is ungrammatical."
          ]
},
        },
      ],
    },
    {
      id: "el7-u9-edit",
      title: "Proofreading and Editing",
      skill: "Edit and proofread writing to eliminate errors and improve clarity.",
      lesson: {
        sections: [
          {
            heading: "Editing vs proofreading",
            body: "**Editing** improves content, structure and language — checking ideas flow, sentences are varied, word choices are precise. **Proofreading** is the final check for surface errors: spelling, punctuation, capital letters, grammar.\n\nAlways edit first, then proofread last — there's no point perfecting punctuation in a paragraph you'll rewrite.",
          },
          {
            heading: "A proofreading checklist",
            body: "Check systematically: **capital letters** (sentence starts, names, 'I'); **full stops** and sentence boundaries; **apostrophes** (its/it's, don't); **subject-verb agreement** ('me and him was' → 'he and I were'); **homophones** (their/there/they're); **common misspellings** (receive, separate, because).\n\nReading aloud catches errors your eyes skip over. Reading backwards forces you to see each word rather than the sentence you expect.",
          },
        ],
        keyFormulas: [
          { name: "Editing", statement: "Improves content, structure and language." },
          { name: "Proofreading", statement: "Final check for spelling, punctuation, grammar." },
          { name: "Checklist", statement: "Capitals, punctuation, agreement, homophones, spelling." },
        ],
        workedExample: {
          problem: "Correct: 'me and him was going too the park yesterday'",
          solution: "He and I were going to the park yesterday. (Pronoun case, subject-verb agreement, 'to' not 'too', tense.)",
        },
      },
      questions: [
        {
          id: "el7-u9-edit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a spelling error?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "recieve"
                    },
                    {
                              "id": "b",
                              "text": "receive"
                    },
                    {
                              "id": "c",
                              "text": "receipt"
                    },
                    {
                              "id": "d",
                              "text": "reception"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Common misspelling",
                              "statement": "'Recieve' is wrong; 'receive' is correct (i before e except after c)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Recieve' violates the i-before-e rule after 'c'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** recieve",
          "commonErrors": [
                    "Choosing a correctly spelled word."
          ]
},
        },
        {
          id: "el7-u9-edit-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is proofreading and why is it a separate step from editing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Proofreading",
                              "statement": "Final surface-error check after content is settled."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Proofreading defined as checking spelling, punctuation, grammar.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Separate because content may still change during editing.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Proofreading is the final check for surface errors; editing changes content first, so proofreading comes last.",
          "commonErrors": [
                    "Treating proofreading and editing as identical."
          ]
},
        },
        {
          id: "el7-u9-edit-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three common grammar errors to check for when proofreading.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proofreading targets",
                              "statement": "Agreement, pronoun case, apostrophes, sentence boundaries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Three valid errors listed (e.g. subject-verb agreement).",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Errors are genuinely common in student writing.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. subject-verb disagreement ('they was'), wrong pronoun case ('me and him'), missing apostrophes ('its' for 'it's').",
          "commonErrors": [
                    "Listing spelling-only items as grammar."
          ]
},
        },
        {
          id: "el7-u9-edit-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Edit this sentence, correcting all errors: 'me and him was going too the park yesterday'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Error correction",
                              "statement": "Pronoun case, subject-verb agreement, 'to/too', tense."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Me and him' corrected to 'He and I' (subject position).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Was' corrected to 'were' for plural subject.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "'Too' corrected to 'to'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "All corrections applied in a grammatical sentence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Capital letter and full stop correct.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "He and I were going to the park yesterday.",
          "commonErrors": [
                    "'Him and I' — pronoun order/case still wrong."
          ]
},
        },
        {
          id: "el7-u9-edit-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Proofread this sentence: 'Their going to of the movies latter tonite, its going to be grate.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the sentence with all errors corrected.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "List the corrections you made.",
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
                              "name": "Homophone and spelling correction",
                              "statement": "There/their/they're; to/too/two; later; tonight; it's; great."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Their' corrected to 'They're' (they are).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "'of' to 'off', 'latter' to 'later', 'tonite' to 'tonight', 'its' to 'it's', 'grate' to 'great' corrected.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Corrections listed accurately.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All errors corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Some errors corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Errors remain.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Corrections listed accurately.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial list.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable list.",
                              "part": "b"
                    }
          ],
          "finalAnswer": "They're going off to the movies later tonight; it's going to be great.",
          "commonErrors": [
                    "'Their' left unchanged."
          ]
},
        },
        {
          id: "el7-u9-edit-q6",
          difficulty: "challenge",
          totalMarks: 10,
          extract: {
          "title": "Trip report",
          "author": "Written for Akademik Space",
          "text": "me and sarah went to the zoo on sunday. we seen lions and a penguin. the weather was to hot so we went home early. it was grate fun"
},
          stem: "Using the trip report above, complete each task.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify four errors in the report.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Rewrite the report correcting all errors.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain your editing process in two sentences.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Systematic editing",
                              "statement": "Identify, correct, then explain the process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Four errors identified (e.g. 'me and sarah', 'seen', 'to', 'grate', capitals).",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "A fifth error identified or errors accurately located.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "Corrected text is fully grammatical and punctuated.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "All original errors fixed without introducing new ones.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "Editing process described accurately (checklist/read-through).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Process explanation is clear and relevant.",
                              "marks": 1,
                              "markCode": "AO4",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Four or more errors accurately identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Three errors identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One or two errors identified.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable identification.",
                              "part": "a"
                    },
                    {
                              "level": "Level 4",
                              "marks": "3-4",
                              "descriptor": "Fully corrected, accurate rewrite.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2",
                              "descriptor": "Most errors corrected.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Some corrections made.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Errors remain.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear two-sentence process explanation.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No creditable explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. 'Sarah and I went to the zoo on Sunday. We saw lions and a penguin. The weather was too hot, so we went home early. It was great fun.'",
          "commonErrors": [
                    "Changing meaning while correcting."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u9-editing-notes",
      title: "Grammar for effect and proofreading — notes",
      summary: "Active voice focuses the doer; passive focuses the receiver. Modals adjust certainty. Edit content first, then proofread surface errors last.",
      sections: [
        { heading: "Key idea", body: "Grammar choices are rhetorical choices — voice, modal and tense all shape tone." },
        { heading: "Process", body: "Edit for ideas and structure, then proofread for spelling, punctuation and agreement." },
      ],
    },
  ],
};
