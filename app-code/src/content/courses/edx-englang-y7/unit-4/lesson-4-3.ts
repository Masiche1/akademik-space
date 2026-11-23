import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "el7-u4-lesson-4-3",
  code: "4-3",
  title: "Sentence Variety and Effect",
  goal: "I CAN vary sentence length and structure to control pace, emphasis and tone in writing.",
  standards: ["Edexcel KS3 English Language — Grammar and punctuation", "Key Stage 3 writing: style and effect"],
  
  vocabulary: [
    { term: "Sentence variety", definition: "Mixing short and long, simple and complex sentences for effect." },
    { term: "Sentence opener", definition: "The first words of a sentence — adverbials, phrases or clauses." },
    { term: "Rhetorical question", definition: "A question asked for effect, not expecting an answer." },
    { term: "Fragment", definition: "An incomplete sentence used deliberately for emphasis." },
    { term: "Parallelism", definition: "Repeating the same grammatical structure for rhythm and emphasis." },
  ],
  concepts: [
    {
      id: "el7-u4-variety",
      title: "Sentence variety for effect",
      skill: "Control pace and emphasis by varying sentence length, openers and structure.",
      lesson: {
        sections: [
          {
            heading: "Why vary sentences",
            body: "A paragraph of identical sentence patterns is monotonous. **Variety** creates rhythm: short sentences punch, long sentences flow and build tension. Writers control pace through length — like a film director controlling shot length.\n\n**Sentence openers** add movement: start with an adverbial ('Slowly, carefully...'), a participial phrase ('Running down the lane...'), or a subordinate clause ('When the door opened...'). Vary openers so consecutive sentences don't all start the same way.",
          },
          {
            heading: "Devices for effect",
            body: "**Rhetorical questions** engage the reader directly: 'What would you do?'\n\n**Fragments** (deliberately incomplete sentences) create urgency or drama: 'No sound. Nothing.' — powerful in moderation.\n\n**Parallelism** repeats structure for rhythm: 'We came, we saw, we conquered.' It makes lists and arguments memorable.\n\nThe key: these devices work because they break expectations — but overuse destroys their impact.",
          },
        ],
        keyFormulas: [
          { name: "Variety rule", statement: "Mix sentence lengths and openers; match length to mood." },
          { name: "Short sentence effect", statement: "Punch, urgency, emphasis." },
          { name: "Long sentence effect", statement: "Flow, detail, building tension." },
        ],
        workedExample: {
          problem: "Improve the monotonous: 'The storm came. The wind blew. The rain fell. We ran inside.'",
          solution: "'The storm came howling down the valley. Wind tore at the windows while rain hammered the roof. We ran inside.' — varied length, one short opener, one long flowing sentence for atmosphere.",
        },
      },
      questions: [
        {
          id: "el7-u4-va-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'sentence variety'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Using only short sentences"
                    },
                    {
                              "id": "b",
                              "text": "Mixing different sentence lengths, types and openers"
                    },
                    {
                              "id": "c",
                              "text": "Writing very long sentences"
                    },
                    {
                              "id": "d",
                              "text": "Using complex vocabulary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sentence variety",
                              "statement": "Mixing lengths, types and openers for effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variety = deliberate mixing of sentence lengths, structures and openers.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Mixing different sentence lengths, types and openers",
          "commonErrors": [
                    "Confusing variety with complexity."
          ]
},
        },
        {
          id: "el7-u4-va-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two effects of using a very short sentence in a piece of descriptive writing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Short sentence effect",
                              "statement": "Punch, urgency, emphasis, contrast."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any two valid effects, e.g. creates emphasis/punch or urgency.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effects linked to reader impact, not just 'makes it interesting'.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. emphasis/punch on a key moment; creates urgency or tension; contrasts with longer sentences.",
          "commonErrors": [
                    "Listing 'makes writing better' without specifying effect."
          ]
},
        },
        {
          id: "el7-u4-va-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite these three sentences with varied openers: 'She walked to school. She saw her friend. They talked.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence openers",
                              "statement": "Vary openers: adverbials, phrases, clauses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At least two sentences rewritten with different openers (not all 'She').",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Openers are grammatically correct (adverbial, participial phrase or subordinate clause).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Meaning preserved.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "e.g. 'Walking to school, she saw her friend. They stopped to talk.'",
          "commonErrors": [
                    "Reordering words but keeping identical structure."
          ]
},
        },
        {
          id: "el7-u4-va-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the effect of sentence length in: 'The door creaked open. Nobody moved. A cold draft slid across the floor.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sentence length and pace",
                              "statement": "Short sentences slow time and build tension."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies all sentences are short.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: each short sentence isolates an action/image, slowing the reader's pace.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect: builds suspense and tension — each beat lands separately.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Effect linked to the horror/mystery context.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Short sentences isolate each moment, slowing pace and building suspense — every beat lands with impact.",
          "commonErrors": [
                    "Saying 'short sentences are boring'."
          ]
},
        },
        {
          id: "el7-u4-va-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Device work: (a) Write a rhetorical question suitable for a speech opening. (b) Write a two-word fragment for dramatic effect. (c) Explain the effect of each.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Rhetorical question.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Fragment.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain both effects.",
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
                              "name": "Effect devices",
                              "statement": "Rhetorical questions engage; fragments shock and emphasise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rhetorical question is relevant, engaging, and not expecting a literal answer.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "Fragment is genuinely incomplete (e.g. 'No sound.' 'Nothing moved.') and dramatic.",
                              "marks": 1,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "Rhetorical question effect: involves audience, prompts reflection.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "Fragment effect: abruptness, emphasis, mimics shock or real speech.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Effective, context-appropriate rhetorical question.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Weak or literal question.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "1",
                              "descriptor": "Genuine dramatic fragment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Not a fragment.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Accurate effects explained for both devices.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One effect explained accurately.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No accurate explanation.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "e.g. RQ: 'How many of you have ever felt invisible?' Fragment: 'No sound.'",
          "commonErrors": [
                    "Fragment that is just a short complete sentence.",
                    "Question expecting a real answer."
          ]
},
        },
        {
          id: "el7-u4-va-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Rewrite this flat passage with sentence variety: 'The market was busy. There were lots of people. I bought some fruit. It was nice.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Combine two sentences into a complex sentence.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Add one short sentence for emphasis.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Vary at least three sentence openers.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Explain how your changes affect pace and tone.",
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
                              "name": "Sentence variety application",
                              "statement": "Combine, shorten, vary openers — then explain effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complex sentence formed, e.g. 'Because the market was busy, there were lots of people.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "Short emphatic sentence added, e.g. 'It was wonderful.' or 'Pure magic.'",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "At least three different openers used (adverbial, phrase, clause).",
                              "marks": 3,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "Explanation links variety to pace/tone accurately.",
                              "marks": 3,
                              "markCode": "AO2",
                              "part": "d"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Grammatical complex sentence.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No complex sentence.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Effective short sentence added.",
                              "part": "b"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No short sentence or it's not emphatic.",
                              "part": "b"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Three or more varied openers, all grammatical.",
                              "part": "c"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "One or two varied openers.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Openers unchanged.",
                              "part": "c"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Clear, accurate explanation of pace/tone effect.",
                              "part": "d"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Partial explanation.",
                              "part": "d"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "No explanation.",
                              "part": "d"
                    }
          ],
          "finalAnswer": "e.g. 'The market was buzzing. Because it was so busy, stalls overflowed with people. I bought some fruit — ripe, sweet mangoes. Wonderful.'",
          "commonErrors": [
                    "Variety for its own sake without effect.",
                    "Unclear explanation of effect."
          ]
},
        },
      ],
    },
    {
      id: "el7-u4-editing",
      title: "Editing and proofreading",
      skill: "Edit writing systematically for grammar, punctuation, clarity and audience.",
      lesson: {
        sections: [
          {
            heading: "The proofreading process",
            body: "Editing is not just spell-checking. Work through in passes:\n\n1. **Structure**: Does the writing make sense? Is it organised?\n2. **Sentences**: variety, clarity, no fragments (unless deliberate), correct clauses.\n3. **Punctuation**: commas, apostrophes, full stops, no comma splices.\n4. **Word level**: spelling, homophones (their/there/they're), repeated words, precise vocabulary.\n\nRead aloud — your ear catches errors your eye misses ('the the', 'of of').",
          },
          {
            heading: "Common errors to hunt",
            body: "**Homophones**: their/there/they're, your/you're, its/it's, to/too/two, affect/effect.\n\n**Agreement**: 'each of the boys were' → 'was'.\n\n**Repetition**: 'the big red big car' — delete or replace.\n\n**Vague words**: 'stuff', 'things', 'nice', 'got' — replace with precise alternatives: 'belongings', 'excellent', 'obtained'.",
          },
        ],
        keyFormulas: [
          { name: "Proofreading passes", statement: "Structure → sentences → punctuation → words." },
          { name: "Read aloud", statement: "Your ear catches what your eye misses." },
          { name: "Homophone check", statement: "their/there/they're; your/you're; its/it's." },
        ],
        workedExample: {
          problem: "Edit: 'me and my freind went too the park its was grate'.",
          solution: "'My friend and I went to the park. It was great.' — fix pronoun order (I last), 'freind'→'friend', 'too'→'to', 'its'→'it's', 'grate'→'great'.",
        },
      },
      questions: [
        {
          id: "el7-u4-ed-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is proofreading more than just spell-checking?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Spell-check misses grammar, punctuation, repetition and clarity"
                    },
                    {
                              "id": "b",
                              "text": "Spell-check is always wrong"
                    },
                    {
                              "id": "c",
                              "text": "Proofreading is faster"
                    },
                    {
                              "id": "d",
                              "text": "Spell-check doesn't check spelling"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proofreading scope",
                              "statement": "Covers grammar, punctuation, style — not just spelling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spell-check only catches misspellings; proofreading covers all error types.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Spell-check misses grammar, punctuation, repetition and clarity",
          "commonErrors": [
                    "Thinking spell-check = proofreading."
          ]
},
        },
        {
          id: "el7-u4-ed-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three categories to check when proofreading.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Proofreading categories",
                              "statement": "Structure, sentences, punctuation, word level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any three valid categories: spelling, punctuation, grammar/agreement, sentence variety, repetition, clarity.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Categories are distinct checking passes, not just 'read it again'.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "e.g. punctuation, subject-verb agreement, repeated words, spelling, sentence variety.",
          "commonErrors": [
                    "Listing 'check it carefully' without categories."
          ]
},
        },
        {
          id: "el7-u4-ed-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Edit this sentence: 'me and my freind went too the park its was grate'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Error correction",
                              "statement": "Fix homophones, spelling, pronoun order, punctuation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'me and my freind' → 'My friend and I' (polite order, spelling).",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'too the park' → 'to the park'; 'its' → 'it's'.",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'grate' → 'great'; sentence punctuated with capital and full stop.",
                              "marks": 1,
                              "markCode": "AO5"
                    }
          ],
          "finalAnswer": "'My friend and I went to the park. It was great.'",
          "commonErrors": [
                    "Leaving 'its' uncorrected."
          ]
},
        },
        {
          id: "el7-u4-ed-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite this vague sentence with precise vocabulary: 'The thing was really good and I got it from the place.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Precise vocabulary",
                              "statement": "Replace vague words with specific alternatives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'thing' replaced with a specific noun appropriate to context.",
                              "marks": 2,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'really good' replaced with a precise adjective (excellent, superb, outstanding).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "'got it from the place' replaced with specific verb/noun (bought it at the market, received it from the office).",
                              "marks": 1,
                              "markCode": "AO5"
                    },
                    {
                              "reasoning": "Sentence remains grammatical and fluent.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "e.g. 'The sculpture was magnificent, and I bought it at the market.'",
          "commonErrors": [
                    "Replacing 'good' with another vague word like 'nice'."
          ]
},
        },
        {
          id: "el7-u4-ed-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Edit this paragraph for all error types: 'Yesterday me and jack goes too the beach. Its was grate fun but we forgot theyre towels.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct pronouns and agreement.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Correct homophones and spelling.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Punctuate and present the final version.",
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
                              "name": "Integrated editing",
                              "statement": "Pronouns, homophones, spelling, punctuation in one pass."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'me and jack goes' → 'Jack and I went' (order, pronoun, tense).",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "'too' → 'to', 'Its' → 'It's', 'grate' → 'great', 'theyre' → 'their'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "'but' joining clauses punctuated correctly; capitals and full stop applied.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "c"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Pronoun order, form and tense all corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Errors remain.",
                              "part": "a"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "All homophone and spelling errors corrected.",
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
                              "descriptor": "Cleanly punctuated final version.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Punctuation errors remain.",
                              "part": "c"
                    }
          ],
          "finalAnswer": "'Yesterday Jack and I went to the beach. It's great fun, but we forgot their towels.' (or 'it was great fun')",
          "commonErrors": [
                    "'me and Jack' pronoun order.",
                    "'its'/'it's' confusion."
          ]
},
        },
        {
          id: "el7-u4-ed-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Full editing task: produce a clean final version of 'On wendsday i seen a bird it was blue and it singed beautifly we was all happy its feathers was shiny'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct all spelling errors.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Correct verbs, pronouns and agreement.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Correct homophones and possessives.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Write the fully corrected paragraph with punctuation.",
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
                              "name": "Full proofreading",
                              "statement": "Systematic multi-category correction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'wendsday' → 'Wednesday', 'singed' → 'sang', 'beautifly' → 'beautifully'.",
                              "marks": 2,
                              "markCode": "AO5",
                              "part": "a"
                    },
                    {
                              "reasoning": "'i seen' → 'I saw', 'it singed' → 'it sang', 'we was' → 'we were', 'feathers was' → 'were'.",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "b"
                    },
                    {
                              "reasoning": "'its feathers' → 'its feathers' is correct possessive — no change; check student doesn't wrongly add apostrophe.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "Final version: 'On Wednesday I saw a bird. It was blue and it sang beautifully. We were all happy; its feathers were shiny.'",
                              "marks": 3,
                              "markCode": "AO5",
                              "part": "d"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "All spelling errors corrected.",
                              "part": "a"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Spelling errors remain.",
                              "part": "a"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "All verb/pronoun/agreement errors corrected.",
                              "part": "b"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Most corrected.",
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
                              "descriptor": "Correctly recognises 'its' as possessive.",
                              "part": "c"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Wrongly adds apostrophe or misses issue.",
                              "part": "c"
                    },
                    {
                              "level": "Level 3",
                              "marks": "2-3",
                              "descriptor": "Fully corrected, well-punctuated paragraph.",
                              "part": "d"
                    },
                    {
                              "level": "Level 2",
                              "marks": "1",
                              "descriptor": "Mostly corrected with slips.",
                              "part": "d"
                    },
                    {
                              "level": "Level 1",
                              "marks": "0",
                              "descriptor": "Errors remain.",
                              "part": "d"
                    }
          ],
          "finalAnswer": "'On Wednesday I saw a bird. It was blue and it sang beautifully. We were all happy; its feathers were shiny.'",
          "commonErrors": [
                    "Adding apostrophe to possessive 'its'.",
                    "'we was' agreement.",
                    "'singed' spelling."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el7-u4-variety-notes",
      title: "Sentence variety and editing — notes",
      summary: "Vary length and openers for effect; proofread in passes for spelling, grammar, punctuation and precision.",
      sections: [
        { heading: "Variety toolkit", body: "Short = punch/urgency. Long = flow/tension. Vary openers: adverbials, phrases, clauses. Devices: rhetorical questions, fragments, parallelism." },
        { heading: "Proofreading passes", body: "1. Structure 2. Sentences 3. Punctuation 4. Words. Read aloud to catch repeats." },
        { heading: "Vague → precise", body: "stuff→belongings, things→items, nice→excellent, got→obtained/bought." },
        { heading: "Trap words", body: "their/there/they're, your/you're, its/it's, to/too/two." },
      ],
    },
  ],
};
